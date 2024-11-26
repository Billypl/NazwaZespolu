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

/**
 * Class MultishopHelper used to get information from PrestaShop Multishop Context
 */
class MultishopHelper
{
    /**
     * @var bool
     */
    private $isMultishopActive = \false;
    /**
     * @var int
     */
    private $context = null;
    /**
     * @var int
     */
    private $selectedShopId = null;
    public function __construct()
    {
        $this->isMultishopActive = \Shop::isFeatureActive();
        $this->context = \Shop::getContext();
        $context = \Context::getContext();
        if ($context != null && $context->shop != null) {
            $this->selectedShopId = (int) $context->shop->id;
        }
    }
    /**
     * Shop context
     *
     * @return int
     */
    public function getShopContext()
    {
        return $this->context;
    }
    /**
     * Get multishop active feature is enabled
     *
     * @return bool
     */
    public function isMultishopActive()
    {
        return $this->isMultishopActive;
    }
    /**
     * ID of selected shop
     *
     * @return int
     */
    public function getSelectedShopId()
    {
        return $this->selectedShopId;
    }
    /**
     * Current shop
     *
     * @return array|bool
     */
    public function getSelectedShop()
    {
        return \Shop::getShop($this->getSelectedShopId());
    }
    /**
     * Check if shop context is shop
     *
     * @return bool
     */
    public function isShopContext()
    {
        if ($this->isMultishopActive() && $this->getShopContext() !== \Shop::CONTEXT_SHOP) {
            return \false;
        }
        return \true;
    }
    /**
     * Check if shop context is group
     *
     * @return bool
     */
    public function isGroupContext()
    {
        if ($this->isMultishopActive() && $this->getShopContext() !== \Shop::CONTEXT_GROUP) {
            return \false;
        }
        return \true;
    }
    /**
     * Check if shop context is all
     *
     * @return bool
     */
    public function isAllContext()
    {
        if ($this->isMultishopActive() && $this->getShopContext() !== \Shop::CONTEXT_ALL) {
            return \false;
        }
        return \true;
    }
    /**
     * Get all active shops for all shops or for a group
     *
     * @return array
     */
    public function getAllShopsOrGroupShops()
    {
        if ($this->isMultishopActive() && $this->isGroupContext()) {
            $allShops = \Shop::getShops(\true, $this->getSelectedShopId());
        } else {
            $allShops = \Shop::getShops(\false);
        }
        foreach ($allShops as &$shop) {
            $shop['group'] = \Shop::getGroupFromShop($shop['id_shop'], \false);
        }
        return $allShops;
    }
    /**
     * get Shop context as string
     *
     * @return string
     */
    public function getShopContextLitteral()
    {
        if ($this->isShopContext()) {
            return 'SHOP';
        } elseif ($this->isGroupContext()) {
            return 'GROUP';
        }
        return 'ALL';
    }
}
