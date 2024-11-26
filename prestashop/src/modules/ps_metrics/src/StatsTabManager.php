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
namespace PrestaShop\Module\Ps_metrics;

use ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Installer\Exception\ModuleNotInstalledException;
use ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Installer\Exception\ModuleVersionException;
use ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Installer\Facade\PsAccounts;
class StatsTabManager
{
    /**
     * @var \Ps_metrics
     */
    private $module;
    /**
     * @var PsAccounts
     */
    private $psAccountsFacade;
    /**
     * StatsTabManager constructor.
     *
     * @param \Ps_metrics $module
     */
    public function __construct(\Ps_metrics $module, PsAccounts $psAccountsFacade)
    {
        $this->module = $module;
        $this->psAccountsFacade = $psAccountsFacade;
    }
    /**
     * Disable legacy stats controller and enable metrics controller instead
     *
     * @return bool
     *
     * @throws ModuleNotInstalledException
     * @throws ModuleVersionException
     */
    public function install()
    {
        try {
            $psAccountsService = $this->psAccountsFacade->getPsAccountsService();
        } catch (\Throwable $th) {
            return \true;
        }
        if (!$psAccountsService->isAccountLinked()) {
            return \true;
        }
        return $this->toggleLegacyStatsController(\false) && $this->enableMetricsController();
    }
    /**
     * Enable back legacy stats controller and delete metrics controller
     *
     * @return bool
     */
    public function uninstall()
    {
        return $this->toggleLegacyStatsController(\true) && $this->deleteMetricsController();
    }
    /**
     * Enable or disable legacy stats controller
     *
     * @param bool $bool
     *
     * @return bool
     *
     * @throws \PrestaShopException
     * @throws \PrestaShopDatabaseException
     */
    private function toggleLegacyStatsController($bool)
    {
        $legacyStatsTab = new \Tab(\Tab::getIdFromClassName('AdminStats'));
        $legacyStatsTab->active = $bool;
        $legacyStatsTab->save();
        return $legacyStatsTab->save();
    }
    /**
     * Create and active metrics stats controller
     *
     * @return bool
     *
     * @throws \PrestaShopException
     * @throws \PrestaShopDatabaseException
     * @throws \Exception
     */
    private function enableMetricsController()
    {
        $legacyStatsTab = new \Tab(\Tab::getIdFromClassName('AdminStats'));
        $metricsTab = \Tab::getIdFromClassName('MetricsController');
        if ($metricsTab) {
            $tab = new \Tab($metricsTab);
        } else {
            $tab = new \Tab();
        }
        $tab->name = $legacyStatsTab->name;
        $tab->class_name = 'MetricsController';
        $tab->active = \true;
        $tab->icon = 'assessment';
        $tab->module = $this->module->name;
        $tab->id_parent = $legacyStatsTab->id_parent;
        return $tab->save();
    }
    /**
     * Remove metrics stats controller
     *
     * @return bool
     *
     * @throws \PrestaShopException
     * @throws \PrestaShopDatabaseException
     */
    private function deleteMetricsController()
    {
        $metricsTab = new \Tab(\Tab::getIdFromClassName('MetricsController'));
        return $metricsTab->delete();
    }
}
