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
function upgrade_module_3_5_0($module)
{
    $upgradedEventbus = $upgradedAccount = \true;
    /** @var Module $modulePsEventbus */
    $modulePsEventbus = \Module::getInstanceByName('ps_eventbus');
    if (\false !== $modulePsEventbus) {
        $upgradedEventbus = upgrade_3_5_0($modulePsEventbus);
    }
    /** @var Module $modulePsAccounts */
    $modulePsAccounts = \Module::getInstanceByName('ps_accounts');
    if (\false !== $modulePsAccounts) {
        $upgradedAccount = upgrade_3_5_0($modulePsAccounts);
    }
    return installMetricsControllerSideBySideWithNativeStats_3_5_0($module) && enableNativeStatsModules() && $upgradedAccount && $upgradedEventbus;
}
/**
 * Update module if shop version is 1.7
 *
 * @param Ps_Metrics $module
 *
 * @return bool
 */
function upgrade_3_5_0($module)
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
 * Install metrics controller side by side with native stats controller
 *
 * @param Ps_Metrics $module
 *
 * @return bool
 */
function installMetricsControllerSideBySideWithNativeStats_3_5_0($module)
{
    deleteAllStatsController_3_5_0();
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
function deleteAllStatsController_3_5_0()
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
 * Enable back dashboard modules
 *
 * @return bool
 */
function enableNativeStatsModules()
{
    // retrieve module list to enable
    $moduleListToEnable = \Configuration::get('PS_METRICS_MODULES_STATES', null, null, \Context::getContext()->shop->id);
    if (\false === $moduleListToEnable || '' === $moduleListToEnable) {
        $moduleListToEnable = '';
    } else {
        $moduleListToEnable = \json_decode($moduleListToEnable);
    }
    // if the module list is empty, do nothing
    if (empty($moduleListToEnable) || !\is_array($moduleListToEnable)) {
        return \true;
    }
    foreach ($moduleListToEnable as $moduleName) {
        $module = \Module::getInstanceByName($moduleName);
        if (\false !== $module) {
            $module->enable();
        }
    }
    // now that modules has been enabled back again, reset the list from database
    \Configuration::updateValue('PS_METRICS_MODULES_STATES', '');
    return \true;
}
