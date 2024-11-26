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
namespace PrestaShop\Module\Ps_metrics\Handler;

use PrestaShopDatabaseException;
use PrestaShopException;
class NativeStatsHandler
{
    const METRICS_STATS_CONTROLLER = 'AdminMetricsController';
    const NATIVE_STATS_CONTROLLER = 'AdminStats';
    const NATIVE_STATS_CONTROLLER_COPY = 'AdminMetricsLegacyStatsController';
    /**
     * @var \Ps_metrics
     */
    private $module;
    /**
     * NativeStatsHandler constructor.
     *
     * @param \Ps_metrics $module
     */
    public function __construct(\Ps_metrics $module)
    {
        $this->module = $module;
    }
    /**
     * Run when installing the module
     *
     * @return bool
     */
    public function install()
    {
        return $this->installMetricsControllerSideBySideWithNativeStats();
    }
    /**
     * Run when uninstalling the module
     *
     * @return bool
     */
    public function uninstall()
    {
        $legacyStatsTab = new \Tab(\Tab::getIdFromClassName(self::NATIVE_STATS_CONTROLLER));
        if (!$legacyStatsTab->active) {
            $legacyStatsTab->active = \true;
            $legacyStatsTab->save();
        }
        return $this->deleteAllStatsController();
    }
    /**
     * Install metrics controller side by side with native stats controller
     *
     * @return bool
     */
    private function installMetricsControllerSideBySideWithNativeStats()
    {
        $this->deleteAllStatsController();
        $legacyStatsTab = new \Tab(\Tab::getIdFromClassName(self::NATIVE_STATS_CONTROLLER));
        $legacyStatsTab->active = \true;
        $nativeStatsTab = new \Tab();
        $nativeStatsTab->name = $legacyStatsTab->name;
        $nativeStatsTab->class_name = self::NATIVE_STATS_CONTROLLER_COPY;
        $nativeStatsTab->active = \true;
        $nativeStatsTab->module = $this->module->name;
        $nativeStatsTab->id_parent = (int) $legacyStatsTab->id;
        $metricsTab = new \Tab();
        $metricsTab->name = \array_fill_keys(\Language::getIDs(\false), $this->module->displayName);
        $metricsTab->class_name = self::METRICS_STATS_CONTROLLER;
        $metricsTab->active = \true;
        $metricsTab->module = $this->module->name;
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
    private function deleteAllStatsController()
    {
        $metricsTab = new \Tab(\Tab::getIdFromClassName(self::METRICS_STATS_CONTROLLER));
        $nativeStatsTab = new \Tab(\Tab::getIdFromClassName(self::NATIVE_STATS_CONTROLLER_COPY));
        if ($metricsTab->id) {
            $metricsTab->delete();
        }
        if ($nativeStatsTab->id) {
            $nativeStatsTab->delete();
        }
        return \true;
    }
}
