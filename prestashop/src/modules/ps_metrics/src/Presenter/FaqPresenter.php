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
namespace PrestaShop\Module\Ps_metrics\Presenter;

use PrestaShop\Module\Ps_metrics\Api\HttpApi;
use PrestaShop\Module\Ps_metrics\Helper\JsonHelper;
use PrestaShop\Module\Ps_metrics\Helper\PrestaShopHelper;
class FaqPresenter
{
    /**
     * @var JsonHelper
     */
    private $jsonHelper;
    /**
     * @var \Ps_metrics
     */
    private $module;
    /**
     * @var PrestaShopHelper
     */
    private $prestashopHelper;
    /**
     * @var HttpApi
     */
    private $httpApi;
    /**
     * Presenter constructor.
     *
     * @param JsonHelper $jsonHelper
     * @param \Ps_metrics $module
     * @param PrestaShopHelper $prestashopHelper
     * @param HttpApi $httpApi
     *
     * @return void
     */
    public function __construct(JsonHelper $jsonHelper, \Ps_metrics $module, PrestaShopHelper $prestashopHelper, HttpApi $httpApi)
    {
        $this->jsonHelper = $jsonHelper;
        $this->module = $module;
        $this->prestashopHelper = $prestashopHelper;
        $this->httpApi = $httpApi;
    }
    /**
     * Get faq content from addons
     *
     * @return string
     */
    public function getFaq()
    {
        return $this->jsonHelper->jsonEncode($this->httpApi->getFaq($this->module->module_key, $this->prestashopHelper->getLanguageIsoCode(), _PS_VERSION_));
    }
}
