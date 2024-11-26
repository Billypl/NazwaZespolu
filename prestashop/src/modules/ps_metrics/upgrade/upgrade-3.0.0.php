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
if (!\defined('_PS_VERSION_')) {
    exit;
}
/**
 * Update main function for module Version 2.5.0
 *
 * @param Ps_Metrics $module
 *
 * @return bool
 */
function upgrade_module_3_0_0($module)
{
    $upgradedEventbus = $upgradedAccount = \true;
    /** @var Module $modulePsEventbus */
    $modulePsEventbus = \Module::getInstanceByName('ps_eventbus');
    if (\false !== $modulePsEventbus) {
        $upgradedEventbus = upgrade($modulePsEventbus);
    }
    /** @var Module $modulePsAccounts */
    $modulePsAccounts = \Module::getInstanceByName('ps_accounts');
    if (\false !== $modulePsAccounts) {
        $upgradedAccount = upgrade($modulePsAccounts);
    }
    return nativeStatsInstall($module) && $upgradedAccount && $upgradedEventbus;
}
/**
 * Copy of install methods from NativeStatsHandler
 * Need to make a copy because we cannot use service container in upgrade files
 *
 * @param Ps_Metrics $module
 *
 * @return bool
 */
function nativeStatsInstall($module)
{
    if (isAccountLink()) {
        return replaceLegacyMetricsController($module) && disableNativeStatsModules();
    }
    return installMetricsControllerSideBySideWithNativeStats($module);
}
/**
 * Allow to know if the merchant is onboarded on ps_accounts
 *
 * @return bool
 */
function isAccountLink()
{
    return checkToken(\Configuration::get('PS_ACCOUNTS_FIREBASE_ID_TOKEN')) && checkToken(\Configuration::get('PS_ACCOUNTS_USER_FIREBASE_ID_TOKEN'));
}
/**
 * Check if the given token is valid
 */
function checkToken($token)
{
    if (empty($token)) {
        return \false;
    }
    return \true;
}
/**
 * Update module if shop version is 1.7
 *
 * @param Ps_Metrics $module
 *
 * @return bool
 */
function upgrade($module)
{
    if (\true === \Module::needUpgrade($module)) {
        $moduleManagerBuilder = \PrestaShop\PrestaShop\Core\Addon\Module\ModuleManagerBuilder::getInstance();
        if ($moduleManagerBuilder === null) {
            return \false;
        }
        $moduleManager = $moduleManagerBuilder->build();
        return $moduleManager->install($module->name);
    }
    return \true;
}
/**
 * Replace legacy stats controller by metrics controller
 *
 * @param Ps_Metrics #module
 *
 * @return bool
 */
function replaceLegacyMetricsController($module)
{
    deleteAllStatsController();
    $legacyStatsTab = new \Tab(\Tab::getIdFromClassName('AdminStats'));
    $legacyStatsTab->active = \false;
    $tab = new \Tab();
    $tab->name = $legacyStatsTab->name;
    $tab->class_name = 'AdminMetricsController';
    $tab->active = \true;
    $tab->module = $module->name;
    $tab->icon = 'assessment';
    $tab->id_parent = $legacyStatsTab->id_parent;
    return $legacyStatsTab->save() && $tab->add();
}
/**
 * Install metrics controller side by side with native stats controller
 *
 * @param Ps_Metrics $module
 *
 * @return bool
 */
function installMetricsControllerSideBySideWithNativeStats($module)
{
    deleteAllStatsController();
    $legacyStatsTab = new \Tab(\Tab::getIdFromClassName('AdminStats'));
    $legacyStatsTab->active = \true;
    $nativeStatsTab = new \Tab();
    $nativeStatsTab->name = $legacyStatsTab->name;
    $nativeStatsTab->class_name = 'AdminMetricsLegacyStatsController';
    $nativeStatsTab->active = \true;
    $nativeStatsTab->module = $module->name;
    $nativeStatsTab->id_parent = (int) $legacyStatsTab->id;
    $metricsTab = new \Tab();
    $metricsTab->name = \array_fill_keys(\Language::getIDs(\false), $module->displayName);
    $metricsTab->class_name = 'AdminMetricsController';
    $metricsTab->active = \true;
    $metricsTab->module = $module->name;
    $metricsTab->id_parent = (int) $legacyStatsTab->id;
    return $legacyStatsTab->save() && $nativeStatsTab->add() && $metricsTab->add();
}
/**
 * Delete all stats controller
 *
 * @return bool
 *
 * @throws PrestaShopException
 * @throws PrestaShopDatabaseException
 */
function deleteAllStatsController()
{
    $query = \Db::getInstance()->executeS('SELECT `id_tab` FROM `' . \_DB_PREFIX_ . 'tab` WHERE `module` = "ps_metrics"');
    $uninstallTabCompleted = \true;
    foreach ($query as $tab) {
        $tab = new \Tab($tab['id_tab']);
        if (\Validate::isLoadedObject($tab)) {
            $uninstallTabCompleted = $uninstallTabCompleted && $tab->delete();
        }
    }
    return $uninstallTabCompleted;
}
/**
 * Disable dashboard modules
 *
 * @return bool
 */
function disableNativeStatsModules()
{
    // get module to disable
    $modulesToDisable = getNativeStatsModulesToToggle();
    $disabledModuleList = [];
    foreach ($modulesToDisable as $moduleName => $isEnabled) {
        // only disable modules that is currently enable
        if ($isEnabled) {
            $module = \Module::getInstanceByName($moduleName);
            if (\false !== $module) {
                $module->disable();
                \array_push($disabledModuleList, $moduleName);
            }
        }
    }
    // save to database the list of module that has been disable by metrics in order to be able
    // to turn it on if needed
    getConfigurationRepository()->saveDashboardModulesToToggle($disabledModuleList);
    return \true;
}
/**
 * Create a list of module from the default list in order to know which modules is
 * currently enabled or disabled on the shop
 *
 * @return array
 */
function getNativeStatsModulesToToggle()
{
    $modules = [];
    $moduleList = ['dashactivity', 'dashtrends', 'dashgoals', 'dashproducts'];
    foreach ($moduleList as $moduleName) {
        $isModuleEnabled = \Module::isEnabled($moduleName);
        $modules[$moduleName] = $isModuleEnabled;
    }
    return $modules;
}
/**
 * Wrapper to instantiate ConfigurationRepository to replace service container
 *
 * @return \PrestaShop\Module\Ps_metrics\Repository\ConfigurationRepository
 */
function getConfigurationRepository()
{
    $prestashopHelper = new \PrestaShop\Module\Ps_metrics\Helper\PrestaShopHelper();
    return new \PrestaShop\Module\Ps_metrics\Repository\ConfigurationRepository($prestashopHelper);
}
