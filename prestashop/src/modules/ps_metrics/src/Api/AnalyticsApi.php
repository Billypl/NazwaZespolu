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
namespace PrestaShop\Module\Ps_metrics\Api;

use PrestaShop\Module\Ps_metrics\Api\Client\AnalyticsClient;
use PrestaShop\Module\Ps_metrics\Helper\ConfigHelper;
class AnalyticsApi
{
    /**
     * @var AnalyticsClient
     */
    private $client;
    /**
     * AnalyticsApi constructor.
     *
     * @param AnalyticsClient $analyticsClient
     * @param ConfigHelper $configHelper
     */
    public function __construct(AnalyticsClient $analyticsClient, ConfigHelper $configHelper)
    {
        $this->client = $analyticsClient;
        $this->client->setUrl($configHelper->getApiBaseUrl());
        $this->client->setMiddlewares();
        $this->client->setHeader($this->client->getHeader());
    }
    /**
     * @return false|string
     */
    private function getShopId()
    {
        return $this->client->getShopId();
    }
    /**
     * get reportings by date
     *
     * @param array $data
     *
     * @return array
     */
    public function getReportingByDate(array $data)
    {
        $this->client->setRoute('/shops/' . $this->getShopId() . '/reportings');
        $reportings = $this->client->post($data);
        return !empty($reportings['error']) ? [] : $reportings;
    }
    /**
     * getAccountsList
     *
     * @return array
     */
    public function getAccountsList()
    {
        $this->client->setRoute('/shops/' . $this->getShopId() . '/accounts/list');
        $accounts = $this->client->get();
        return !empty($accounts['error']) ? [] : $accounts['body'];
    }
    /**
     * setAccountSelection
     *
     * @param array $data
     *
     * @return array|false
     */
    public function setAccountSelection(array $data)
    {
        $this->client->setRoute('/shops/' . $this->getShopId() . '/accounts/selection');
        $accountSelected = $this->client->post($data);
        return !empty($accountSelected['error']) ? \false : $accountSelected['body'];
    }
    /**
     * unsubscribe
     *
     * @return bool
     */
    public function unsubscribe()
    {
        $this->client->setRoute('/shops/' . $this->getShopId() . '/accounts/unsubscribe');
        $unsubscribed = $this->client->post();
        return empty($unsubscribed['error']);
    }
    /**
     * refreshGA
     *
     * @return array
     */
    public function refreshGA()
    {
        $this->client->setRoute('/shops/' . $this->getShopId() . '/accounts/refresh');
        return $this->client->post();
    }
    /**
     * authUrl
     *
     * @param array $data
     *
     * @return array
     */
    public function generateAuthUrl(array $data)
    {
        $this->client->setRoute('/shops/' . $this->getShopId() . '/google/generate-auth-url');
        $generated = $this->client->post($data);
        return !empty($generated['error']) ? [] : $generated['body'];
    }
}
