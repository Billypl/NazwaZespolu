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
namespace PrestaShop\Module\Ps_metrics\Repository;

use Db;
class HookModuleRepository
{
    const TABLE_NAME = 'hook_module';
    /**
     * setModuleHookPosition
     *
     * @param int $hookId
     * @param int $moduleId
     * @param int $position
     *
     * @return bool
     */
    public function setModuleHookPosition($hookId, $moduleId, $position)
    {
        return Db::getInstance()->update(self::TABLE_NAME, ['position' => $position], 'id_hook = ' . (int) $hookId . ' AND id_module = ' . (int) $moduleId);
    }
}
