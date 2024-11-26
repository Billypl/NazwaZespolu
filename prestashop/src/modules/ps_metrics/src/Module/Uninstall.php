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

use PrestaShop\Module\Ps_metrics\Api\AnalyticsApi;
use PrestaShop\Module\Ps_metrics\Repository\ConfigurationRepository;
use ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Installer\Facade\PsAccounts;
class Uninstall
{
    /**
     * @var ConfigurationRepository
     */
    private $configurationRepository;
    /**
     * @var AnalyticsApi
     */
    private $analyticsApi;
    /**
     * @var PsAccounts
     */
    private $psAccountsFacade;
    /**
     * Uninstall constructor.
     *
     * @param ConfigurationRepository $configurationRepository
     * @param AnalyticsApi $analyticsApi
     */
    public function __construct(PsAccounts $psAccountsFacade, ConfigurationRepository $configurationRepository, AnalyticsApi $analyticsApi)
    {
        $this->psAccountsFacade = $psAccountsFacade;
        $this->configurationRepository = $configurationRepository;
        $this->analyticsApi = $analyticsApi;
    }
    /**
     * resetConfigurationValues
     *
     * @return bool
     */
    public function resetConfigurationValues()
    {
        return $this->configurationRepository->saveActionGoogleLinked(\false);
    }
    /**
     * unsubscribePsEssentials
     *
     * @return bool
     */
    public function unsubscribePsEssentials()
    {
        // if the user is not onboarded, don't process unsubscribe
        if (!$this->isOnboardedWithAccountAndGoogle()) {
            return \true;
        }
        return $this->analyticsApi->unsubscribe();
    }
    /**
     * Check if the user is onboarded on prestashop account and google
     *
     * @return bool
     */
    private function isOnboardedWithAccountAndGoogle()
    {
        if (\false === \Module::isInstalled('ps_accounts')) {
            return \false;
        }
        $shopUuidV4 = $this->psAccountsFacade->getPsAccountsService()->getShopUuidV4();
        if (\false === $shopUuidV4 && \false === $this->configurationRepository->getGoogleLinkedValue()) {
            return \false;
        }
        return \true;
    }
}
