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

class ShopHelper
{
    /**
     * @var ToolsHelper
     */
    private $toolsHelper;
    /**
     * Shop Helper constructor.
     *
     * @param ToolsHelper $toolsHelper
     *
     * @return void
     */
    public function __construct(\PrestaShop\Module\Ps_metrics\Helper\ToolsHelper $toolsHelper)
    {
        $this->toolsHelper = $toolsHelper;
    }
    /**
     * @param int $shopId
     *
     * @return array
     */
    public function getShop($shopId)
    {
        $shop = \Shop::getShop($shopId);
        if (!\is_array($shop)) {
            return [];
        }
        return $shop;
    }
    /**
     * @param bool $active
     * @param int|null $id_shop_group
     * @param false $get_as_list_id
     *
     * @return array
     */
    public function getShops(bool $active = \true, $id_shop_group = null, bool $get_as_list_id = \false)
    {
        return \Shop::getShops($active, $id_shop_group, $get_as_list_id);
    }
    /**
     * @return int|null
     */
    public function getContextShopGroupID()
    {
        return \Shop::getContextShopGroupID();
    }
    /**
     * @return int
     */
    public function getContext()
    {
        return \Shop::getContext();
    }
    /**
     * @param bool $share
     * @param string|null $alias
     *
     * @return string
     */
    public function addSqlRestriction(bool $share = \false, string $alias = null)
    {
        $share_ = $share ? 1 : 0;
        return \Shop::addSqlRestriction($share_, $alias);
    }
    /**
     * @return int|null
     */
    public function getShopId()
    {
        return \Shop::getContextShopID();
    }
    /**
     * Get one Shop Url
     *
     * @param int $shopId
     *
     * @return array
     */
    public function getShopUrl($shopId)
    {
        $shop = $this->getShop($shopId);
        $protocol = $this->getShopsProtocolInformation();
        return ['id_shop' => $shop['id_shop'], 'domain' => $shop[$protocol['domain_type']], 'url' => $protocol['protocol'] . $shop[$protocol['domain_type']] . $shop['uri']];
    }
    /**
     * Get all shops Urls
     *
     * @return array
     */
    public function getShopsUrl()
    {
        $shopList = $this->getShops();
        $protocol = $this->getShopsProtocolInformation();
        $urlList = [];
        foreach ($shopList as $shop) {
            $urlList[] = ['id_shop' => $shop['id_shop'], 'url' => $protocol['protocol'] . $shop[$protocol['domain_type']] . $shop['uri']];
        }
        return $urlList;
    }
    /**
     * getShopsProtocol
     *
     * @return array
     */
    protected function getShopsProtocolInformation()
    {
        if (\true === $this->toolsHelper->usingSecureMode()) {
            return ['domain_type' => 'domain_ssl', 'protocol' => 'https://'];
        }
        return ['domain_type' => 'domain', 'protocol' => 'http://'];
    }
}
