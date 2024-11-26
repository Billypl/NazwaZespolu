<?php

namespace ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Installer\Facade;

use ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Installer\Exception\ModuleNotInstalledException;
use ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Installer\Exception\ModuleVersionException;
use ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Installer\Installer;
use ps_metrics_module_v4_0_9\PrestaShop\PsAccountsInstaller\Installer\Presenter\InstallerPresenter;
class PsAccounts
{
    /**
     * Available services class names
     */
    const PS_ACCOUNTS_PRESENTER = 'PrestaShop\\Module\\PsAccounts\\Presenter\\PsAccountsPresenter';
    const PS_ACCOUNTS_SERVICE = 'PrestaShop\\Module\\PsAccounts\\Service\\PsAccountsService';
    const PS_BILLING_SERVICE = 'PrestaShop\\Module\\PsAccounts\\Service\\PsBillingService';
    /**
     * @var Installer
     */
    private $installer;
    /**
     * PsAccounts constructor.
     *
     * @param Installer $installer
     */
    public function __construct(Installer $installer)
    {
        $this->installer = $installer;
    }
    /**
     * @param string $serviceName
     *
     * @return mixed
     *
     * @throws ModuleNotInstalledException
     * @throws ModuleVersionException
     */
    public function getService($serviceName)
    {
        if ($this->installer->isModuleInstalled()) {
            if ($this->installer->checkModuleVersion()) {
                return \Module::getInstanceByName($this->installer->getModuleName())->getService($serviceName);
            }
            throw new ModuleVersionException('Module version expected : ' . $this->installer->getModuleVersion());
        }
        throw new ModuleNotInstalledException('Module not installed : ' . $this->installer->getModuleName());
    }
    /**
     * @return mixed
     *
     * @throws ModuleNotInstalledException
     * @throws ModuleVersionException
     */
    public function getPsAccountsService()
    {
        return $this->getService(self::PS_ACCOUNTS_SERVICE);
    }
    /**
     * @return mixed
     *
     * @throws ModuleNotInstalledException
     * @throws ModuleVersionException
     */
    public function getPsBillingService()
    {
        return $this->getService(self::PS_BILLING_SERVICE);
    }
    /**
     * @return mixed
     *
     * @throws ModuleNotInstalledException
     * @throws ModuleVersionException
     */
    public function getPsAccountsPresenter()
    {
        if ($this->installer->isModuleInstalled() && $this->installer->checkModuleVersion() && $this->installer->isModuleEnabled()) {
            return $this->getService(self::PS_ACCOUNTS_PRESENTER);
        } else {
            return new InstallerPresenter($this->installer);
        }
    }
}
