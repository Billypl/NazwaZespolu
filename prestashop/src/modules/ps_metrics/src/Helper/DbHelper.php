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

use Db;
class DbHelper
{
    /**
     * Retrieve cache data if exist or request a "dbRequestType"
     *
     * @param string $dbRequestType
     * @param string $sql
     *
     * @return mixed
     */
    private function request(string $dbRequestType, string $sql)
    {
        return Db::getInstance()->{$dbRequestType}($sql);
    }
    /**
     * Executes return the result of $sql as array by requesting
     *
     * @param string $sql
     *
     * @return array
     */
    public function executeS(string $sql)
    {
        return (array) $this->request('executeS', $sql);
    }
    /**
     * Returns a value from the first row, first column of a SELECT query
     *
     * @param string $sql
     *
     * @return mixed
     */
    public function getValue(string $sql)
    {
        return $this->request('getValue', $sql);
    }
    /**
     * Returns an associative array containing the first row of the query This function automatically adds "LIMIT 1" to the query.
     *
     * @param string $sql
     *
     * @return array
     */
    public function getRow(string $sql)
    {
        return (array) $this->request('getRow', $sql);
    }
}
