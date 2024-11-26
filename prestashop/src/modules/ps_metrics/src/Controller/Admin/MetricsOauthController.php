<?php

/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 */
namespace PrestaShop\Module\Ps_metrics\Controller\Admin;

use PrestaShop\Module\Ps_metrics\Api\AnalyticsApi;
use PrestaShop\Module\Ps_metrics\Helper\PrestaShopHelper;
use PrestaShop\Module\Ps_metrics\Helper\ToolsHelper;
use PrestaShop\Module\Ps_metrics\Repository\ConfigurationRepository;
use ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Installer\Facade\PsAccounts;
use PrestaShopBundle\Controller\Admin\FrameworkBundleAdminController;
class MetricsOauthController extends FrameworkBundleAdminController
{
    /**
     * @var \Ps_metrics
     */
    public $module;
    public function __construct()
    {
        /** @var \Ps_metrics $psMetrics */
        $psMetrics = \Module::getInstanceByName('ps_metrics');
        $this->module = $psMetrics;
    }
    /**
     * Main method
     *
     * @return void
     */
    public function oauth()
    {
        /** @var ToolsHelper $toolsHelper */
        $toolsHelper = $this->module->getService('ps_metrics.helper.tools');
        /** @var ConfigurationRepository $configurationRepository */
        $configurationRepository = $this->module->getService('ps_metrics.repository.configuration');
        if ('PS' === $toolsHelper->getValue('from')) {
            $this->redirectToGoogleAuthentication();
        }
        $configurationRepository->saveActionGoogleLinked(\true);
        if (\false === $this->isGoogleAuthenticationDone()) {
            $configurationRepository->saveActionGoogleLinked(\false);
        }
        /** @var PrestaShopHelper $prestashopHelper */
        $prestashopHelper = $this->module->getService('ps_metrics.helper.prestashop');
        $link = $prestashopHelper->getLink();
        $toolsHelper->redirectAdmin($link->getAdminLink('MetricsController', \true, ['route' => 'metrics_page', 'google_message_error' => $toolsHelper->getValue('message'), 'countProperty' => $toolsHelper->getValue('count')]) . '#/settings');
    }
    /**
     * Connexion to Google OAuth by redirecting to psessentials service
     *
     * @return void
     */
    private function redirectToGoogleAuthentication()
    {
        /** @var AnalyticsApi $apiAnalytics */
        $apiAnalytics = $this->module->getService('ps_metrics.api.analytics');
        /** @var ToolsHelper $toolsHelper */
        $toolsHelper = $this->module->getService('ps_metrics.helper.tools');
        /** @var PsAccounts $psAccountsFacade */
        $psAccountsFacade = $this->module->getService('ps_accounts.facade');
        $psAccountsService = $psAccountsFacade->getPsAccountsService();
        /** @var PrestaShopHelper $prestashopHelper */
        $prestashopHelper = $this->module->getService('ps_metrics.helper.prestashop');
        $link = $prestashopHelper->getLink();
        $serviceResult = $apiAnalytics->generateAuthUrl(['state' => $this->getGoogleApiState(\Tools::getHttpHost(\true) . $link->getAdminLink('MetricsOauthController', \true, ['route' => 'metrics_oauth', 'from' => 'PS']), $psAccountsService->getShopUuidV4())]);
        if (empty($serviceResult)) {
            $toolsHelper->redirectAdmin($link->getAdminLink('MetricsController', \true, ['route' => 'metrics_page', 'google_message_error' => $toolsHelper->getValue('message'), 'countProperty' => $toolsHelper->getValue('count'), 'redirect' => 'settings']) . '#/settings');
        }
        $toolsHelper->redirect($serviceResult['authorizeUrl']);
    }
    /**
     * The service psessentials returns a param "status=ok" when the connection is done and valid
     *
     * @return bool
     */
    private function isGoogleAuthenticationDone()
    {
        /** @var ToolsHelper $toolsHelper */
        $toolsHelper = $this->module->getService('ps_metrics.helper.tools');
        if ('ok' === $toolsHelper->getValue('status')) {
            return \true;
        }
        return \false;
    }
    /**
     * Google State is a base64 json encoded
     *
     * @param string $shopRedirectUri
     * @param string|false $shopId
     *
     * @return string
     */
    private function getGoogleApiState($shopRedirectUri, $shopId)
    {
        // the use of base64_encode is necessary for the api
        return \base64_encode('{"redirectUri":"' . $shopRedirectUri . '","shopId":"' . $shopId . '"}');
    }
}
