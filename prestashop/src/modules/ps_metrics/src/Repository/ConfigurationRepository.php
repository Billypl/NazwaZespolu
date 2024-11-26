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

use Configuration;
use PrestaShop\Module\Ps_metrics\Helper\PrestaShopHelper;
class ConfigurationRepository
{
    const ACCOUNT_LINKED = 'PS_METRICS_ACCOUNT_LINKED';
    const ACCOUNT_GOOGLETAG_LINKED = 'PS_METRICS_GOOGLETAG_LINKED';
    /**
     * @var int
     */
    private $shopId;
    /**
     * ConfigurationRepository constructor.
     *
     * @param PrestaShopHelper $prestaShopHelper
     *
     * @return void
     */
    public function __construct(PrestaShopHelper $prestaShopHelper)
    {
        $this->shopId = (int) $prestaShopHelper->getShopId();
    }
    /**
     * saveActionGoogleLinked
     *
     * @param bool $action
     *
     * @return bool
     */
    public function saveActionGoogleLinked($action)
    {
        return Configuration::updateValue(self::ACCOUNT_LINKED, $action, \false, null, $this->shopId);
    }
    /**
     * getGoogleLinkedValue
     *
     * @return bool
     */
    public function getGoogleLinkedValue()
    {
        return (bool) Configuration::get(self::ACCOUNT_LINKED, null, null, $this->shopId);
    }
    /**
     * getShopDomain
     *
     * @return string|false
     */
    public function getShopDomain()
    {
        return Configuration::get('PS_SHOP_DOMAIN', null, null, $this->shopId);
    }
    /**
     * saveGoogleTagLinked
     *
     * @param bool $action
     *
     * @return bool
     */
    public function saveGoogleTagLinked($action)
    {
        return Configuration::updateValue(self::ACCOUNT_GOOGLETAG_LINKED, $action, \false, null, $this->shopId);
    }
}
