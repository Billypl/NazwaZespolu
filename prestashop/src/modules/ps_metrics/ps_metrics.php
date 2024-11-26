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
use PrestaShop\Module\Ps_metrics\Handler\NativeStatsHandler;
use PrestaShop\Module\Ps_metrics\Helper\ConfigHelper;
use PrestaShop\Module\Ps_metrics\Helper\ModuleHelper;
use PrestaShop\Module\Ps_metrics\Helper\PrestaShopHelper;
use PrestaShop\Module\Ps_metrics\Helper\ToolsHelper;
use PrestaShop\Module\Ps_metrics\LegacyModuleInstaller;
use PrestaShop\Module\Ps_metrics\Module\Uninstall;
use PrestaShop\Module\Ps_metrics\Tracker\Segment;
use PrestaShop\ModuleLibServiceContainer\DependencyInjection\ServiceContainer;
use PrestaShop\PrestaShop\Adapter\SymfonyContainer;
use ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Installer\Facade\PsAccounts;
use Symfony\Component\DependencyInjection\ContainerInterface;
use ps_metrics_module_v4_0_9\Twig\Environment as TwigEnvironment;
if (!\defined('_PS_VERSION_')) {
    exit;
}
class Ps_metrics extends \Module
{
    /**
     * @var ServiceContainer
     */
    private $serviceContainer;
    /** @var bool */
    public $bootstrap;
    /** @var string */
    public $confirmUninstall;
    /** @var string */
    public $idPsAccounts;
    /** @var string */
    public $idPsMetrics;
    /** @var string */
    public $template_dir;
    /** @var string */
    public $emailSupport;
    /** @var string */
    public $termsOfServiceUrl;
    public function __construct()
    {
        $this->name = 'ps_metrics';
        $this->tab = 'advertising_marketing';
        $this->version = '4.0.9';
        $this->author = 'PrestaShop';
        $this->need_instance = 0;
        $this->module_key = '697657ffe038d20741105e95a10b12d1';
        $this->bootstrap = \false;
        $this->idPsAccounts = '49648';
        $this->idPsMetrics = '49583';
        $this->emailSupport = 'support-ps-metrics@prestashop.com';
        $this->termsOfServiceUrl = 'https://www.prestashop.com/en/prestashop-account-privacy';
        parent::__construct();
        $this->displayName = $this->l('PrestaShop Metrics');
        $this->description = $this->l('Optimize your business with a data-driven approach by gaining a complete view of your business in real time.');
        $this->confirmUninstall = $this->l('Are you sure you want to uninstall this module?');
        $this->ps_versions_compliancy = ['min' => '1.7.5', 'max' => \_PS_VERSION_];
        $this->template_dir = '../../../../modules/' . $this->name . '/views/templates/admin/';
        require_once __DIR__ . '/vendor/autoload.php';
        if ($this->serviceContainer === null) {
            $this->serviceContainer = new ServiceContainer((string) $this->name, $this->getLocalPath());
        }
    }
    /**
     * This method is trigger at the installation of the module
     *
     * @return bool
     */
    public function install()
    {
        parent::install();
        $legacyModuleInstaller = new LegacyModuleInstaller($this);
        $installModule = $legacyModuleInstaller->legacyModuleInstaller();
        $nativeStats = $legacyModuleInstaller->legacyNativeStatsHandler();
        return $this->registerHook('displayAdminAfterHeader') && $this->registerHook('actionAdminControllerSetMedia') && $this->registerHook('dashboardZoneTwo') && $installModule->updateModuleHookPosition('dashboardZoneTwo', 0) && $installModule->setConfigurationValues() && $nativeStats->install();
    }
    /**
     * Triggered at the uninstall of the module
     *
     * @return bool
     */
    public function uninstall()
    {
        /** @var Uninstall $uninstallModule */
        $uninstallModule = $this->getService('ps_metrics.module.uninstall');
        /** @var Segment $segment */
        $segment = $this->getService('ps_metrics.tracker.segment');
        $segment->setMessage('[MTR] Uninstall Module');
        $segment->track();
        /** @var NativeStatsHandler $nativeStats */
        $nativeStats = $this->getService('ps_metrics.handler.native.stats');
        return $uninstallModule->resetConfigurationValues() && $uninstallModule->unsubscribePsEssentials() && $nativeStats->uninstall() && parent::uninstall();
    }
    /**
     * Activate current module.
     *
     * @param bool $force_all If true, enable module for all shop
     *
     * @return bool
     */
    public function enable($force_all = \false)
    {
        parent::enable($force_all);
        $legacyModuleInstaller = new LegacyModuleInstaller($this);
        $segment = $legacyModuleInstaller->legacyModuleInstallerSegment();
        $segment->setMessage('[MTR] Enable Module');
        $segment->track();
        return \true;
    }
    /**
     * Desactivate current module.
     *
     * @param bool $force_all If true, disable module for all shop
     *
     * @return bool
     */
    public function disable($force_all = \false)
    {
        parent::disable($force_all);
        /** @var Segment $segment */
        $segment = $this->getService('ps_metrics.tracker.segment');
        $segment->setMessage('[MTR] Disable Module');
        $segment->track();
        return \true;
    }
    /**
     * hookDashboardZoneTwo
     *
     * @return string
     */
    public function hookDashboardZoneTwo()
    {
        $assets = $this->loadAssets();
        \Media::addJsDef($assets);
        return $this->display(__FILE__, '/views/templates/hook/HookDashboardZoneTwo.tpl');
    }
    /**
     * Load the configuration form.
     *
     * @return string
     * @return void
     *
     * @throws \PrestaShopException
     */
    public function getContent()
    {
        $link = $this->context->link;
        if (null == $link) {
            throw new \PrestaShopException('Link is null');
        }
        \Tools::redirectAdmin($link->getAdminLink('MetricsController', \true, ['route' => 'metrics_page']) . '#/settings');
    }
    /**
     * hook Backoffice top pages
     *
     * @return string|false
     */
    public function hookDisplayAdminAfterHeader()
    {
        /** @var PrestaShopHelper $prestashopHelper */
        $prestashopHelper = $this->getService('ps_metrics.helper.prestashop');
        if (!\Module::isEnabled($this->name)) {
            return \false;
        }
        if ($prestashopHelper->getControllerName() === 'AdminStats') {
            return $this->display(__FILE__, '/views/templates/hook/HookDashboardZoneTwo.tpl');
        }
        return \false;
    }
    /**
     * Load an instance of the service
     *
     * @param string $instance_name
     *
     * @return mixed
     */
    private function loadInstance($instance_name)
    {
        /** @var ContainerInterface $instance */
        $instance = \PrestaShop\PrestaShop\Adapter\SymfonyContainer::getInstance();
        return $instance->get($instance_name);
    }
    /**
     * Hook set media for old stats pages for loading dashboard box
     *
     * @return void
     */
    public function hookActionAdminControllerSetMedia()
    {
        /** @var PrestaShopHelper $prestashopHelper */
        $prestashopHelper = $this->getService('ps_metrics.helper.prestashop');
        if (!\Module::isEnabled($this->name)) {
            return;
        }
        if ($prestashopHelper->getControllerName() === 'AdminStats') {
            $assets = $this->loadAssets('AdminStats');
            \Media::addJsDef($assets);
        }
    }
    /**
     * Load VueJs App Dashboard and set JS variable for Vue
     *
     * @param string $currentPage
     * @param bool $legacy
     *
     * @return array
     */
    private function loadAssets($currentPage = 'dashboard', $legacy = \true)
    {
        $assets = $this->buildAssets($currentPage);
        if ($legacy) {
            if (null != $this->context->smarty) {
                $this->context->smarty->assign('useLocalVueApp', $assets['useLocalVueApp']);
                $this->context->smarty->assign('useBuildModeOnly', $assets['useBuildModeOnly']);
                $this->context->smarty->assign('pathAppBuilded', $assets['pathAppBuilded']);
                $this->context->smarty->assign('pathAppCdn', $assets['pathAppCdn']);
                $this->context->smarty->assign('pathAssetsBuilded', $assets['pathAssetsBuilded']);
                $this->context->smarty->assign('pathAssetsCdn', $assets['pathAssetsCdn']);
            }
        } else {
            /** @var TwigEnvironment $twig */
            $twig = $this->loadInstance('twig');
            $twig->addGlobal('useLocalVueApp', $assets['useLocalVueApp']);
            $twig->addGlobal('useBuildModeOnly', $assets['useBuildModeOnly']);
            $twig->addGlobal('pathAppBuilded', $assets['pathAppBuilded']);
            $twig->addGlobal('pathAppCdn', $assets['pathAppCdn']);
            $twig->addGlobal('pathAssetsBuilded', $assets['pathAssetsBuilded']);
            $twig->addGlobal('pathAssetsCdn', $assets['pathAssetsCdn']);
        }
        return $assets;
    }
    /**
     * Build assets to set them in smarty or Twig
     *
     * @param string $currentPage
     *
     * @return array
     *
     * @throws \PrestaShopException
     */
    private function buildAssets($currentPage = 'dashboard')
    {
        /** @var ConfigHelper $configHelper */
        $configHelper = $this->getService('ps_metrics.helper.config');
        /** @var PrestaShopHelper $prestashopHelper */
        $prestashopHelper = $this->getService('ps_metrics.helper.prestashop');
        /** @var ToolsHelper $toolsHelper */
        $toolsHelper = $this->getService('ps_metrics.helper.tools');
        /** @var ModuleHelper $moduleHelper */
        $moduleHelper = $this->getService('ps_metrics.helper.module');
        $pathAppBuilded = '/modules/' . $this->name . '/ui-dist/js/metrics.js';
        $pathAppCdn = $configHelper->getPsMetricsCdnUrl() . 'js/metrics.js';
        $pathAssetsBuilded = '/modules/' . $this->name . '/ui-dist/css/style.css';
        $pathAssetsCdn = $configHelper->getPsMetricsCdnUrl() . 'css/style.css';
        $link = $this->context->link;
        if (null == $link) {
            throw new \PrestaShopException('Link is null');
        }
        $graphqlEndpoint = '';
        $graphqlEndpoint = $link->getAdminLink('MetricsGraphqlController', \true, ['route' => 'metrics_graphql']);
        return ['useLocalVueApp' => $configHelper->getUseLocalVueApp(), 'useBuildModeOnly' => $configHelper->getUseBuildModeOnly(), 'pathAppBuilded' => $pathAppBuilded, 'pathAppCdn' => $pathAppCdn, 'pathAssetsBuilded' => $pathAssetsBuilded, 'pathAssetsCdn' => $pathAssetsCdn, 'contextPsAccounts' => $this->loadPsAccountsAssets(), 'oAuthGoogleErrorMessage' => $toolsHelper->getValue('google_message_error'), 'metricsApiUrl' => $prestashopHelper->getLinkWithoutToken('MetricsResolverController', 'metrics_api_resolver'), 'adminToken' => $prestashopHelper->getTokenFromAdminLink('MetricsResolverController', 'metrics_api_resolver'), 'metricsModule' => $moduleHelper->buildModuleInformation('ps_metrics'), 'eventBusModule' => $moduleHelper->buildModuleInformation('ps_eventbus'), 'accountsModule' => $moduleHelper->buildModuleInformation('ps_accounts'), 'mboModule' => $moduleHelper->buildModuleInformation('ps_mbo'), 'graphqlEndpoint' => $graphqlEndpoint, 'isoCode' => $prestashopHelper->getLanguageIsoCode(), 'currencyIsoCode' => $prestashopHelper->getCurrencyIsoCode(), 'currentPage' => $currentPage, 'fullscreen' => \false];
    }
    /**
     * Method that dispatch to the correct service container to use
     *
     * @param string $serviceName
     *
     * @return mixed
     */
    public function getService($serviceName)
    {
        $splitServiceNamespace = \explode('.', $serviceName);
        $firstLevelNamespace = $splitServiceNamespace[0];
        // if serviceName is not a service coming from ps_metrics
        if ($firstLevelNamespace !== 'ps_metrics' && $firstLevelNamespace !== 'ps_accounts') {
            // use symfony service container from prestashop
            try {
                $service = $this->serviceContainer->getService($serviceName);
            } catch (\Exception $e) {
                $container = SymfonyContainer::getInstance();
                if ($container == null) {
                    throw new \PrestaShopException('Symfony container is null or invalid');
                }
                $service = $container->get($serviceName);
            }
            return $service;
        }
        // otherwise use the service container from the module
        return $this->serviceContainer->getService($serviceName);
    }
    /**
     * See https://github.com/PrestaShopCorp/prestashop-accounts-installer
     *
     * @return array
     */
    public function loadPsAccountsAssets()
    {
        if (\Module::isInstalled('ps_accounts')) {
            /** @var PsAccounts $accounts */
            $accounts = $this->getService('ps_accounts.facade');
            $psAccounts = $accounts->getPsAccountsService();
            if (null != $this->context->smarty) {
                $this->context->smarty->assign('urlAccountsVueCdn', $psAccounts->getAccountsVueCdn());
            }
            return $accounts->getPsAccountsPresenter()->present($this->name);
        }
        return [];
    }
}

