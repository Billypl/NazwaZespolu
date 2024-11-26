<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */
if (!defined('_PS_VERSION_')) {
    exit;
}

use PrestaShop\PrestaShop\Core\Module\WidgetInterface;

class Ps_Customeraccountlinks extends Module implements WidgetInterface
{
    private $templateFile;

    public function __construct()
    {
        $this->name = 'ps_customeraccountlinks';
        $this->tab = 'front_office_features';
        $this->author = 'PrestaShop';
        $this->version = '3.2.0';
        $this->need_instance = 0;

        parent::__construct();

        $this->displayName = $this->trans('My Account block', [], 'Modules.Customeraccountlinks.Admin');
        $this->description = $this->trans('Welcome your customers with their personal information displayed right on your footer.', [], 'Modules.Customeraccountlinks.Admin');

        $this->ps_versions_compliancy = ['min' => '1.7.4.0', 'max' => _PS_VERSION_];

        $this->templateFile = 'module:ps_customeraccountlinks/ps_customeraccountlinks.tpl';
    }

    public function install()
    {
        return parent::install()
            && $this->registerHook('actionModuleRegisterHookAfter')
            && $this->registerHook('actionModuleUnRegisterHookAfter')
            && $this->registerHook('displayFooter')
        ;
    }

    public function uninstall()
    {
        return parent::uninstall();
    }

    public function hookActionModuleUnRegisterHookAfter($params)
    {
        if ('displayMyAccountBlock' === $params['hook_name']) {
            $this->_clearCache('*');
        }
    }

    public function hookActionModuleRegisterHookAfter($params)
    {
        if ($params['hook_name'] == 'displayMyAccountBlock') {
            $this->_clearCache('*');
        }
    }

    public function _clearCache($template, $cache_id = null, $compile_id = null)
    {
        parent::_clearCache($this->templateFile);
    }

    public function renderWidget($hookName = null, array $configuration = [])
    {
        $tpl_key = 'ps_customeraccountlinks';
        if ($this->context->smarty->tpl_vars['customer']->value['addresses']) {
            $tpl_key .= '_multiple';
        }
        if (!$this->isCached($this->templateFile, $this->getCacheId($tpl_key))) {
            $this->smarty->assign($this->getWidgetVariables($hookName, $configuration));
        }

        return $this->fetch($this->templateFile, $this->getCacheId($tpl_key));
    }

    public function getWidgetVariables($hookName = null, array $configuration = [])
    {
        $link = $this->context->link;

        $my_account_urls = [
            2 => [
                'title' => $this->trans('Orders', [], 'Admin.Global'),
                'url' => $link->getPageLink('history', true),
            ],
            3 => [
                'title' => $this->trans('Credit slips', [], 'Modules.Customeraccountlinks.Admin'),
                'url' => $link->getPageLink('order-slip', true),
            ],
            4 => [
                'title' => $this->trans('Addresses', [], 'Shop.Theme.Global'),
                'url' => $link->getPageLink('addresses', true),
            ],
            0 => [
                'title' => $this->trans('Personal info', [], 'Modules.Customeraccountlinks.Admin'),
                'url' => $link->getPageLink('identity', true),
            ],
        ];

        if ((int) Configuration::get('PS_ORDER_RETURN')) {
            $my_account_urls[1] = [
                'title' => $this->trans('Merchandise returns', [], 'Modules.Customeraccountlinks.Admin'),
                'url' => $link->getPageLink('order-follow', true),
            ];
        }

        if (CartRule::isFeatureActive()) {
            $my_account_urls[5] = [
                'title' => $this->trans('Vouchers', [], 'Shop.Theme.Customeraccount'),
                'url' => $link->getPageLink('discount', true),
            ];
        }

        // Sort Account links base in his index
        ksort($my_account_urls);

        return [
            /*
            * @deprecated
            */
            'my_account_urls' => $my_account_urls,
            /*
            * @deprecated
            */
            'logout_url' => $link->getPageLink('index', true, null, 'mylogout'),
        ];
    }
}
