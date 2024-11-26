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
namespace PrestaShop\Module\Ps_metrics\Helper;

use ModuleCore;
use PrestaShopBundle\Service\Routing\Router;
class ModuleHelper
{
    /** @var \Ps_metrics */
    private $module;
    public function __construct(\Ps_metrics $module)
    {
        $this->module = $module;
    }
    /**
     * @param string $moduleName
     *
     * @return bool
     */
    public function isInstalled(string $moduleName)
    {
        return \ModuleCore::isInstalled($moduleName);
    }
    /**
     * @param string $moduleName
     *
     * @return bool
     */
    public function isEnabled(string $moduleName)
    {
        return \ModuleCore::isEnabled($moduleName);
    }
    /**
     * @param string $moduleName
     *
     * @return false|ModuleCore
     */
    public function getInstanceByName(string $moduleName)
    {
        return ModuleCore::getInstanceByName($moduleName);
    }
    /**
     * returns the installation link of the module if it is not installed. If installed, returns an empty string
     *
     * @param string $moduleName
     *
     * @return string
     */
    public function getInstallLink(string $moduleName)
    {
        if (\true === $this->isInstalled($moduleName)) {
            return '';
        }
        /** @var Router $router * */
        $router = $this->module->getService('router');
        if ($moduleName === 'ps_mbo') {
            return \substr(\Tools::getShopDomainSsl(\true) . __PS_BASE_URI__, 0, -1) . $router->generate('metrics_api_resolver', ['query' => 'installPsMbo']);
        }
        return \substr(\Tools::getShopDomainSsl(\true) . __PS_BASE_URI__, 0, -1) . $router->generate('admin_module_manage_action', ['action' => 'install', 'module_name' => $moduleName]);
    }
    /**
     * returns the enable link of the module if it is not enabled. If enabled, returns an empty string
     *
     * @param string $moduleName
     *
     * @return string
     */
    public function getEnableLink(string $moduleName)
    {
        if (\true === $this->isEnabled($moduleName)) {
            return '';
        }
        /** @var Router $router * */
        $router = $this->module->getService('router');
        return \substr(\Tools::getShopDomainSsl(\true) . __PS_BASE_URI__, 0, -1) . $router->generate('admin_module_manage_action', ['action' => 'enable', 'module_name' => $moduleName]);
    }
    /**
     * returns the update link of the module if it is not enabled. If enabled, returns an empty string
     *
     * @param string $moduleName
     *
     * @return string
     */
    public function getUpdateLink(string $moduleName)
    {
        /** @var Router $router * */
        $router = $this->module->getService('router');
        return \substr(\Tools::getShopDomainSsl(\true) . __PS_BASE_URI__, 0, -1) . $router->generate('admin_module_manage_action', ['action' => 'upgrade', 'module_name' => $moduleName]);
    }
    /**
     * get ps_analytics module version
     *
     * @param string $moduleName
     *
     * @return string
     */
    public function getModuleVersion(string $moduleName)
    {
        if (\false === $this->isInstalled($moduleName)) {
            return '0.0.0';
        }
        $module = \Module::getInstanceByName($moduleName);
        if (\false === $module) {
            return '0.0.0';
        }
        return $module->version;
    }
    /**
     * Build information about module
     *
     * @param string $moduleName
     *
     * @return array
     */
    public function buildModuleInformation(string $moduleName)
    {
        return ['isInstalled' => $this->isInstalled($moduleName), 'isEnabled' => $this->isEnabled($moduleName), 'linkEnable' => $this->getEnableLink($moduleName), 'linkInstall' => $this->getInstallLink($moduleName), 'linkUpdate' => $this->getUpdateLink($moduleName), 'version' => $this->getModuleVersion($moduleName)];
    }
}
