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

use PrestaShop\Module\Ps_metrics\Helper\ConfigHelper;
use PrestaShop\Module\Ps_metrics\Helper\ModuleHelper;
use PrestaShop\Module\Ps_metrics\Helper\PrestaShopHelper;
use PrestaShop\Module\Ps_metrics\Helper\ToolsHelper;
use PrestaShop\PrestaShop\Core\Addon\Module\ModuleManagerBuilder;
use PrestaShopBundle\Controller\Admin\FrameworkBundleAdminController;
use PrestaShopException;
use Symfony\Component\HttpFoundation\Response;
class MetricsController extends FrameworkBundleAdminController
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
     * Initialize the content by adding Boostrap and loading the TPL
     *
     * @return Response
     */
    public function renderApp()
    {
        /** @var ToolsHelper $toolsHelper */
        $toolsHelper = $this->module->getService('ps_metrics.helper.tools');
        /** @var PrestaShopHelper $prestashopHelper */
        $prestashopHelper = $this->module->getService('ps_metrics.helper.prestashop');
        $fullscreen = \false;
        /** @var ConfigHelper $configHelper */
        $configHelper = $this->module->getService('ps_metrics.helper.config');
        if ('true' === $toolsHelper->getValue('fullscreen')) {
            $fullscreen = \true;
        }
        /** @var ModuleHelper $moduleHelper */
        $moduleHelper = $this->module->getService('ps_metrics.helper.module');
        $pathAppBuilded = '/modules/' . $this->module->name . '/ui-dist/js/metrics.js';
        $pathAppCdn = $configHelper->getPsMetricsCdnUrl() . 'js/metrics.js';
        $pathAssetsBuilded = '/modules/' . $this->module->name . '/ui-dist/css/style.css';
        $pathAssetsCdn = $configHelper->getPsMetricsCdnUrl() . 'css/style.css';
        $link = $prestashopHelper->getLink();
        $moduleManagerBuilder = ModuleManagerBuilder::getInstance();
        if ($moduleManagerBuilder === null) {
            throw new PrestaShopException('ModuleManager is not defined');
        }
        $moduleManager = $moduleManagerBuilder->build();
        $contextPsEventbus = null;
        if ($moduleManager->isInstalled('ps_eventbus')) {
            /** @var \Module $eventbusModule */
            $eventbusModule = \Module::getInstanceByName('ps_eventbus');
            $eventbusScope = ['info', 'modules', 'themes', 'products', 'categories', 'orders', 'carts', 'carriers'];
            if (\version_compare($eventbusModule->version, '1.9.0', '>=')) {
                $eventbusPresenterService = $this->module->getService('PrestaShop\\Module\\PsEventbus\\Service\\PresenterService');
                $contextPsEventbus = $eventbusPresenterService->expose($this->module, $eventbusScope);
            }
        }
        return $this->render('@Modules/ps_metrics/views/templates/admin/metrics.html.twig', ['layoutTitle' => $this->trans('PrestaShop Metrics', 'Admin.Navigation.Menu'), 'showContentHeader' => \false, 'useLocalVueApp' => $configHelper->getUseLocalVueApp(), 'useBuildModeOnly' => $configHelper->getUseBuildModeOnly(), 'pathAppBuilded' => $pathAppBuilded, 'pathAppCdn' => $pathAppCdn, 'pathAssetsBuilded' => $pathAssetsBuilded, 'pathAssetsCdn' => $pathAssetsCdn, 'contextPsAccounts' => $this->module->loadPsAccountsAssets(), 'contextPsEventbus' => $contextPsEventbus, 'metricsApiUrl' => $prestashopHelper->getLinkWithoutToken('MetricsResolverController', 'metrics_api_resolver'), 'adminToken' => $toolsHelper->getValue('_token'), 'oAuthGoogleErrorMessage' => $toolsHelper->getValue('google_message_error'), 'fullscreen' => $fullscreen, 'metricsModule' => $moduleHelper->buildModuleInformation('ps_metrics'), 'eventBusModule' => $moduleHelper->buildModuleInformation('ps_eventbus'), 'accountsModule' => $moduleHelper->buildModuleInformation('ps_accounts'), 'mboModule' => $moduleHelper->buildModuleInformation('ps_mbo'), 'graphqlEndpoint' => $link->getAdminLink('MetricsGraphqlController', \true, ['route' => 'metrics_graphql']), 'isoCode' => $prestashopHelper->getLanguageIsoCode(), 'currencyIsoCode' => $prestashopHelper->getCurrencyIsoCode(), 'currentPage' => $toolsHelper->getValue('redirect')]);
    }
}
