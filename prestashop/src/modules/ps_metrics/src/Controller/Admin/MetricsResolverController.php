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
use PrestaShop\Module\Ps_metrics\Helper\JsonHelper;
use PrestaShop\Module\Ps_metrics\Helper\PrestaShopHelper;
use PrestaShop\Module\Ps_metrics\Module\Uninstall;
use PrestaShop\Module\Ps_metrics\Module\Upgrade;
use PrestaShop\Module\Ps_metrics\Presenter\FaqPresenter;
use PrestaShop\Module\Ps_metrics\Presenter\ShopDataPresenter;
use PrestaShop\Module\Ps_metrics\Provider\AnalyticsAccountsListProvider;
use PrestaShop\Module\Ps_metrics\Validation\SelectAccountAnalytics;
use ps_metrics_module_v4_0_9\Prestashop\ModuleLibMboInstaller\Installer as MBOInstaller;
use PrestaShopBundle\Controller\Admin\FrameworkBundleAdminController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
class MetricsResolverController extends FrameworkBundleAdminController
{
    /**
     * @var Request
     */
    private $request = null;
    /** @var \Ps_metrics */
    private $module;
    public function __construct()
    {
        /** @var \Ps_metrics $psMetrics */
        $psMetrics = \Module::getInstanceByName('ps_metrics');
        $this->module = $psMetrics;
    }
    /**
     * Api endpoint
     *
     * @param Request $request
     * @param string $query
     *
     * @return Response
     *
     * @throws \Exception
     */
    public function resolve(Request $request, string $query)
    {
        try {
            $this->request = $request;
            if (\is_callable([$this, $query])) {
                /** @var callable $args */
                $args = [$this, $query];
                /** @var Response $result */
                $result = \call_user_func($args);
                return $result;
            }
        } catch (\Throwable $th) {
            throw new \Exception('#001 Message : ' . $th->getMessage());
        }
        return new Response('Not found', 404);
    }
    /**
     * Get shop datas api
     *
     * @return Response
     */
    public function getShopData()
    {
        /** @var ShopDataPresenter $shopData */
        $shopData = $this->module->getService('ps_metrics.presenter.shopData');
        /** @var JsonHelper $jsonHelper */
        $jsonHelper = $this->module->getService('ps_metrics.helper.json');
        return new Response($jsonHelper->jsonEncode($shopData->getShopData()), 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Retrieve category tree
     *
     * @return Response
     */
    public function getCategoryTree()
    {
        $categoryTree = [];
        $context = \Context::getContext();
        if (null !== $context) {
            /** @var \Language $language */
            $language = $context->language;
            $categoryTree = \Category::getNestedCategories(\Category::getRootCategory()->id, (int) $language->id, \false);
        }
        if (null === $categoryTree) {
            $categoryTree = [];
        }
        /** @var JsonHelper $jsonHelper */
        $jsonHelper = $this->module->getService('ps_metrics.helper.json');
        return new Response($jsonHelper->jsonEncode($categoryTree), 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Get faq from addons
     *
     * @return Response
     */
    public function getFaq()
    {
        /** @var FaqPresenter $faq */
        $faq = $this->module->getService('ps_metrics.presenter.faq');
        return new Response($faq->getFaq(), 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Install ps_mbo module
     *
     * @return Response
     */
    public function installPsMbo() : Response
    {
        /** @var JsonHelper $jsonHelper */
        $jsonHelper = $this->module->getService('ps_metrics.helper.json');
        $mboInstaller = new MBOInstaller(_PS_VERSION_);
        return new Response($jsonHelper->jsonEncode($mboInstaller->installModule()), 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Upgrade a module
     *
     * @return Response
     */
    public function upgradeModule()
    {
        /** @var Upgrade $upgrade */
        $upgrade = $this->module->getService('ps_metrics.module.upgrade');
        return new Response($upgrade->upgradeMetrics(), 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Select a Google Account for psessentials
     * Need webPropertyId and viewId. Returns 201 if done
     *
     * @return Response
     */
    public function selectAccountAnalytics()
    {
        /** @var JsonHelper $jsonHelper */
        $jsonHelper = $this->module->getService('ps_metrics.helper.json');
        /** @var AnalyticsApi $apiAnalytics */
        $apiAnalytics = $this->module->getService('ps_metrics.api.analytics');
        /** @var SelectAccountAnalytics $serviceProcessSelectAccountAnalytics */
        $serviceProcessSelectAccountAnalytics = $this->module->getService('ps_metrics.validation.processselectaccountanalytics');
        $validateData = $serviceProcessSelectAccountAnalytics->validate(['webPropertyId' => $this->request->request->get('webPropertyId', ''), 'viewId' => $this->request->request->get('viewId', '')]);
        if (\false === $validateData) {
            return new Response($jsonHelper->jsonEncode(['success' => \false]), 200, ['Content-Type' => 'application/json']);
        }
        $serviceResult = $apiAnalytics->setAccountSelection(['webPropertyId' => $this->request->request->get('webPropertyId', ''), 'viewId' => $this->request->request->get('viewId', '')]);
        if (\false === $serviceResult) {
            return new Response($jsonHelper->jsonEncode(['success' => \false]), 200, ['Content-Type' => 'application/json']);
        }
        return new Response($jsonHelper->jsonEncode(['success' => \true]), 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Google Analytics Logout must enable disabled modules, unsubscribe from PsEssentials
     * Also, it must reset configuration's values
     *
     * @return Response
     */
    public function ajaxProcessLogOut()
    {
        /** @var JsonHelper $jsonHelper */
        $jsonHelper = $this->module->getService('ps_metrics.helper.json');
        /** @var Uninstall $uninstallGoogleAccount */
        $uninstallGoogleAccount = $this->module->getService('ps_metrics.module.uninstall');
        if (\false === $uninstallGoogleAccount->unsubscribePsEssentials()) {
            return new Response($jsonHelper->jsonEncode(['success' => \false, 'googleLinked' => \true]), 200, ['Content-Type' => 'application/json']);
        }
        if (\false === $uninstallGoogleAccount->resetConfigurationValues()) {
            return new Response($jsonHelper->jsonEncode(['success' => \false, 'googleLinked' => \true]), 200, ['Content-Type' => 'application/json']);
        }
        return new Response($jsonHelper->jsonEncode(['success' => \true, 'googleLinked' => \false]), 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Google Analytics Logout must enable disabled modules, unsubscribe from PsEssentials
     * Also, it must reset configuration's values
     *
     * @return Response
     */
    public function ajaxProcessRefreshGA()
    {
        /** @var JsonHelper $jsonHelper */
        $jsonHelper = $this->module->getService('ps_metrics.helper.json');
        /** @var AnalyticsApi $apiAnalytics */
        $apiAnalytics = $this->module->getService('ps_metrics.api.analytics');
        $serviceResult = $apiAnalytics->refreshGA();
        if (!empty($serviceResult['error'])) {
            return new Response($jsonHelper->jsonEncode(['success' => \false, 'message' => $serviceResult['error']]), 200, ['Content-Type' => 'application/json']);
        }
        return new Response($jsonHelper->jsonEncode(['success' => \true]), 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Google Analytics Property List
     *
     * @return Response
     */
    public function ajaxProcessListProperty()
    {
        /** @var JsonHelper $jsonHelper */
        $jsonHelper = $this->module->getService('ps_metrics.helper.json');
        /** @var AnalyticsAccountsListProvider $analyticsAccountListProvider */
        $analyticsAccountListProvider = $this->module->getService('ps_metrics.provider.analyticsaccountslist');
        $serviceResult = $analyticsAccountListProvider->getAccountsList();
        if (empty($serviceResult)) {
            return new Response($jsonHelper->jsonEncode(['success' => \false, 'listProperty' => [], 'error' => 'No property list on this account']), 200, ['Content-Type' => 'application/json']);
        }
        return new Response($jsonHelper->jsonEncode(['success' => \true, 'listProperty' => $serviceResult]), 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Change shop context
     *
     * @return Response
     */
    public function ajaxProcessChangeShopContext()
    {
        /** @var PrestaShopHelper $prestashopHelper */
        $prestashopHelper = $this->module->getService('ps_metrics.helper.prestashop');
        $link = $prestashopHelper->getLink();
        \Tools::redirectAdmin($link->getAdminLink('MetricsController', \true, ['route' => 'metrics_page']) . '#/settings');
        return new Response();
    }
}
