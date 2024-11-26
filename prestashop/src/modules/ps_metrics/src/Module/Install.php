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

use Hook;
use PrestaShop\Module\Ps_metrics\Repository\ConfigurationRepository;
use PrestaShop\Module\Ps_metrics\Repository\HookModuleRepository;
class Install
{
    /**
     * @var \Ps_metrics
     */
    private $module;
    /**
     * @var ConfigurationRepository
     */
    private $configurationRepository;
    /**
     * @var HookModuleRepository
     */
    private $hookModuleRepository;
    /**
     * Install constructor.
     *
     * @param \Ps_metrics $module
     * @param ConfigurationRepository $configurationRepository
     * @param HookModuleRepository $hookModuleRepository
     *
     * @return void
     */
    public function __construct(\Ps_metrics $module, ConfigurationRepository $configurationRepository, HookModuleRepository $hookModuleRepository)
    {
        $this->module = $module;
        $this->configurationRepository = $configurationRepository;
        $this->hookModuleRepository = $hookModuleRepository;
    }
    /**
     * updateModuleHookPosition
     *
     * @param string $hookName
     * @param int $position
     *
     * @return bool
     */
    public function updateModuleHookPosition(string $hookName, int $position)
    {
        if ((bool) \version_compare(_PS_VERSION_, '1.7.7.7', '>=')) {
            $hookId = Hook::getIdByName($hookName, \true, \true);
        } else {
            $hookId = Hook::getIdByName($hookName);
        }
        if (\false == $hookId) {
            return \false;
        }
        return $this->hookModuleRepository->setModuleHookPosition($hookId, (int) $this->module->id, $position);
    }
    /**
     * setConfigurationValues
     *
     * @return bool
     */
    public function setConfigurationValues()
    {
        return $this->configurationRepository->saveActionGoogleLinked(\false) && $this->configurationRepository->saveGoogleTagLinked(\false);
    }
}
