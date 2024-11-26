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

use Tools;
class ToolsHelper
{
    /**
     * @param bool $http
     *
     * @return string
     */
    public function getShopDomainSsl(bool $http)
    {
        return Tools::getShopDomainSsl($http);
    }
    /**
     * @return bool
     */
    public function usingSecureMode()
    {
        return Tools::usingSecureMode();
    }
    /**
     * @param string $value
     * @param false|mixed $default_value
     *
     * @return false|mixed
     */
    public function getValue(string $value, $default_value = \false)
    {
        return Tools::getValue($value, $default_value);
    }
    /**
     * @param string $url
     *
     * @return void
     */
    public function redirectAdmin(string $url)
    {
        Tools::redirectAdmin($url);
    }
    /**
     * @param string $url
     *
     * @return void
     */
    public function redirect(string $url)
    {
        Tools::redirect($url);
    }
}
