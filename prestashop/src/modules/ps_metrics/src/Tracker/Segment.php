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
namespace PrestaShop\Module\Ps_metrics\Tracker;

use PrestaShop\Module\Ps_metrics\Helper\PrestaShopHelper;
use PrestaShop\Module\Ps_metrics\Helper\SegmentHelper;
use PrestaShop\Module\Ps_metrics\Helper\ShopHelper;
class Segment implements \PrestaShop\Module\Ps_metrics\Tracker\TrackerInterface
{
    /**
     * @var string
     */
    private $message = '';
    /**
     * @var array
     */
    private $options = [];
    /**
     * @var SegmentHelper
     */
    private $segmentHelper;
    /**
     * @var PrestaShopHelper
     */
    private $prestaShopHelper;
    /**
     * @var ShopHelper
     */
    private $shopHelper;
    /**
     * Segment constructor.
     *
     * @param SegmentHelper $segmentHelper
     * @param PrestaShopHelper $prestaShopHelper
     * @param ShopHelper $shopHelper
     */
    public function __construct(SegmentHelper $segmentHelper, PrestaShopHelper $prestaShopHelper, ShopHelper $shopHelper)
    {
        $this->segmentHelper = $segmentHelper;
        $this->prestaShopHelper = $prestaShopHelper;
        $this->shopHelper = $shopHelper;
        $this->init();
    }
    /**
     * Init segment client with the api key
     *
     * @return void
     */
    private function init()
    {
        $this->segmentHelper->init();
    }
    /**
     * Track event on segment
     *
     * @return void
     *
     * @throws \PrestaShopException
     */
    public function track()
    {
        if (empty($this->message)) {
            throw new \PrestaShopException('Message cannot be empty. Need to set it with setMessage() method.');
        }
        // Dispatch track depending on context shop
        $this->dispatchTrack();
    }
    /**
     * Add track
     *
     * @param mixed $userId
     *
     * @return void
     */
    private function segmentTrack($userId)
    {
        $referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
        $url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http') . "://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
        $this->segmentHelper->track(['userId' => $userId, 'event' => $this->message, 'channel' => 'browser', 'context' => ['locale' => (new PrestaShopHelper())->getLanguageIsoCode(), 'page' => ['referrer' => $referer, 'url' => $url]], 'properties' => \array_merge(['module' => 'ps_metrics'], $this->options)]);
        $this->segmentHelper->flush();
    }
    /**
     * Handle tracking differently depending on the shop context
     *
     * @return void
     */
    private function dispatchTrack()
    {
        switch ($this->shopHelper->getContext()) {
            case \Shop::CONTEXT_SHOP:
                $this->trackShop();
                break;
            case \Shop::CONTEXT_GROUP:
                $this->trackShopGroup();
                break;
            case \Shop::CONTEXT_ALL:
                $this->trackAllShops();
                break;
        }
    }
    /**
     * Send track segment only for the current shop
     *
     * @return void
     */
    private function trackShop()
    {
        $userId = $this->prestaShopHelper->getShopDomain();
        $this->segmentTrack($userId);
    }
    /**
     * Send track segment for each shop in the current shop group
     *
     * @return void
     */
    private function trackShopGroup()
    {
        $shops = $this->shopHelper->getShops(\true, $this->shopHelper->getContextShopGroupID());
        foreach ($shops as $shop) {
            $this->segmentTrack($shop['domain']);
        }
    }
    /**
     * Send track segment for all shops
     *
     * @return void
     */
    private function trackAllShops()
    {
        $shops = $this->shopHelper->getShops();
        foreach ($shops as $shop) {
            $this->segmentTrack($shop['domain']);
        }
    }
    /**
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }
    /**
     * @param string $message
     *
     * @return void
     */
    public function setMessage(string $message)
    {
        $this->message = $message;
    }
    /**
     * @return array
     */
    public function getOptions()
    {
        return $this->options;
    }
    /**
     * @param array $options
     *
     * @return void
     */
    public function setOptions(array $options)
    {
        $this->options = $options;
    }
}
