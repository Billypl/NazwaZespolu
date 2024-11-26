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
namespace PrestaShop\Module\Ps_metrics\Module;

use PrestaShop\Module\Ps_metrics\Helper\ModuleHelper;
use PrestaShop\Module\Ps_metrics\Helper\PrestaShopHelper;
use PrestaShop\Module\Ps_metrics\Helper\ToolsHelper;
use Ps_metrics;
use Symfony\Component\Routing\Router;
class GAInstaller
{
    /**
     * @var string
     */
    private $moduleName = 'ps_googleanalytics';
    /**
     * @var \Ps_metrics
     */
    private $module;
    /**
     * @var ModuleHelper
     */
    private $moduleHelper;
    /**
     * @var ToolsHelper
     */
    private $toolsHelper;
    /**
     * @var PrestashopHelper
     */
    private $prestashopHelper;
    /**
     * @var \Symfony\Component\DependencyInjection\ContainerInterface|null
     */
    protected $container;
    /**
     * GAInstaller constructor.
     *
     * @param Ps_metrics $module
     * @param ModuleHelper $moduleHelper
     * @param ToolsHelper $toolsHelper
     * @param PrestaShopHelper $prestashopHelper
     *
     * @return void
     */
    public function __construct(Ps_metrics $module, ModuleHelper $moduleHelper, ToolsHelper $toolsHelper, PrestaShopHelper $prestashopHelper)
    {
        $this->module = $module;
        $this->moduleHelper = $moduleHelper;
        $this->toolsHelper = $toolsHelper;
        $this->prestashopHelper = $prestashopHelper;
    }
    /**
     * Check if google analytics module is installed or not
     *
     * @return bool
     */
    public function isInstalled()
    {
        return $this->moduleHelper->isInstalled($this->moduleName);
    }
    /**
     * Check if google analytics module is enabled or not
     *
     * @return bool
     */
    public function isEnabled()
    {
        return $this->moduleHelper->isEnabled($this->moduleName);
    }
    /**
     * returns the installation link of the ps_googleanalytics module if it is not installed. If installed, returns an empty string
     *
     * @return string
     */
    public function getInstallLink()
    {
        if (\true === $this->moduleHelper->isInstalled($this->moduleName)) {
            return '';
        }
        /** @var Router $router */
        $router = $this->module->getService('router');
        return \substr($this->toolsHelper->getShopDomainSsl(\true) . __PS_BASE_URI__, 0, -1) . $router->generate('admin_module_manage_action', ['action' => 'install', 'module_name' => $this->moduleName]);
    }
    /**
     * returns the enable link of the ps_googleanalytics module if it is not enabled. If enabled, returns an empty string
     *
     * @return string
     */
    public function getEnableLink()
    {
        if (\true === $this->moduleHelper->isEnabled($this->moduleName)) {
            return '';
        }
        /** @var Router $router */
        $router = $this->module->getService('router');
        return \substr($this->toolsHelper->getShopDomainSsl(\true) . __PS_BASE_URI__, 0, -1) . $router->generate('admin_module_manage_action', ['action' => 'enable', 'module_name' => $this->moduleName]);
    }
    /**
     * returns the configuration link of the ps_googleanalytics module if it is not configured. If configured, returns an empty string
     *
     * @return string
     */
    public function getConfigLink()
    {
        $link = $this->prestashopHelper->getLink();
        return $link->getAdminLink('AdminModules', \true, [], ['configure' => $this->moduleName]);
    }
    /**
     * get ps_analytics module version
     *
     * @return string
     */
    public function getModuleVersion()
    {
        if (\false === $this->isInstalled()) {
            return '0.0.0';
        }
        $module = \Module::getInstanceByName($this->moduleName);
        if (\false === $module) {
            return '0.0.0';
        }
        return $module->version;
    }
}
