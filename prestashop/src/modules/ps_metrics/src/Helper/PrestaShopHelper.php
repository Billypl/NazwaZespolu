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

use Employee;
use PrestaShopException;
/**
 * Class PrestaShopHelper used to get information from PrestaShop Context
 */
class PrestaShopHelper
{
    /**
     * @var \Context
     */
    private $context;
    /**
     * PrestaShopHelper constructor.
     *
     * @return void
     */
    public function __construct()
    {
        $context = \Context::getContext();
        if ($context == null) {
            throw new \PrestaShopException('Context is null or invalid');
        }
        $this->context = $context;
    }
    /**
     * Get the isoCode from the context language, if null, send 'en' as default value
     *
     * @return string
     */
    public function getLanguageIsoCode()
    {
        return $this->context->language !== null ? $this->context->language->iso_code : 'en';
    }
    /**
     * Get current language
     *
     * @return mixed
     */
    public function getLanguage()
    {
        return $this->context->language;
    }
    /**
     * Get current language code
     *
     * @return string
     */
    public function getLanguageCode()
    {
        return $this->context->language !== null ? $this->context->language->language_code : 'en';
    }
    /**
     * Get currency code
     *
     * @return string
     */
    public function getCurrencyIsoCode()
    {
        return $this->context->currency !== null ? $this->context->currency->iso_code : 'EUR';
    }
    /**
     * Get current locale
     *
     * @return string
     *
     * @todo implement currentLocale for version > 1.7.3.X
     */
    public function getCurrentLocale()
    {
        return $this->getLanguageIsoCode();
    }
    /**
     * Get controller name
     *
     * @return string
     */
    public function getControllerName()
    {
        /** @var \AdminControllerCore $adminController */
        $adminController = $this->context->controller;
        return !empty($adminController->controller_name) ? $adminController->controller_name : '';
    }
    /**
     * Get context link
     *
     * @return \Link
     */
    public function getLink()
    {
        if (null == $this->context->link) {
            throw new \PrestaShopException('Link is null or invalid');
        }
        return $this->context->link;
    }
    /**
     * Get shop id
     *
     * @return int
     */
    public function getShopId()
    {
        if (null == $this->context->shop) {
            throw new \PrestaShopException('Shop is null or invalid');
        }
        return (int) $this->context->shop->id;
    }
    /**
     * Get shop domain
     *
     * @return string
     */
    public function getShopDomain()
    {
        if (null == $this->context->shop) {
            throw new \PrestaShopException('Shop is null or invalid');
        }
        return $this->context->shop->domain;
    }
    /**
     * Get employee from context
     *
     * @return \Employee
     *
     * @throws \PrestaShopException
     */
    public function getEmployee()
    {
        $employee = $this->context->employee;
        if ($employee == null) {
            throw new \PrestaShopException('Employee is null or invalid');
        }
        return $employee;
    }
    /**
     * @return int
     */
    public function getEmployeeIdLang()
    {
        return (int) $this->getEmployee()->id_lang;
    }
    /**
     * @return string
     */
    public function getEmployeeEmail()
    {
        return $this->getEmployee()->email;
    }
    /**
     * Get controller link without token
     *
     * @param string $controller
     * @param string $route
     *
     * @return string
     */
    public function getLinkWithoutToken($controller, $route)
    {
        $controllerLink = $this->getLink()->getAdminLink($controller, \true, ['route' => $route]);
        $pos = \strpos($controllerLink, '?');
        if (\false === $pos) {
            return $controllerLink;
        }
        return \substr($controllerLink, 0, $pos);
    }
    /**
     * Get token from controller link
     *
     * @param string $controller
     * @param string $route
     *
     * @return string
     */
    public function getTokenFromAdminLink($controller, $route)
    {
        $controllerLink = $this->getLink()->getAdminLink($controller, \true, ['route' => $route]);
        \parse_str((string) \parse_url($controllerLink, \PHP_URL_QUERY), $result);
        if (!\is_string($result['_token'])) {
            throw new PrestaShopException('Token is not defined !');
        }
        return \strval($result['_token']);
    }
}
