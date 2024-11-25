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

class statsbestcustomers extends ModuleGrid
{
    private $html;
    private $query;
    private $columns;
    private $default_sort_column;
    private $default_sort_direction;
    private $empty_message;
    private $paging_message;

    public function __construct()
    {
        $this->name = 'statsbestcustomers';
        $this->tab = 'administration';
        $this->version = '2.0.4';
        $this->author = 'PrestaShop';
        $this->need_instance = 0;

        parent::__construct();

        $this->default_sort_column = 'totalMoneySpent';
        $this->default_sort_direction = 'DESC';
        $this->empty_message = $this->trans('Empty recordset returned', [], 'Modules.Statsbestcustomers.Admin');
        $this->paging_message = $this->trans('Displaying %1$s of %2$s', ['{0} - {1}', '{2}'], 'Admin.Global');

        $currency = new Currency((int) Configuration::get('PS_CURRENCY_DEFAULT'));

        $this->columns = [
            [
                'id' => 'lastname',
                'header' => $this->trans('Last Name', [], 'Admin.Global'),
                'dataIndex' => 'lastname',
                'align' => 'center',
            ],
            [
                'id' => 'firstname',
                'header' => $this->trans('First Name', [], 'Admin.Global'),
                'dataIndex' => 'firstname',
                'align' => 'center',
            ],
            [
                'id' => 'email',
                'header' => $this->trans('Email', [], 'Admin.Global'),
                'dataIndex' => 'email',
                'align' => 'center',
            ],
            [
                'id' => 'totalVisits',
                'header' => $this->trans('Visits', [], 'Admin.Shopparameters.Feature'),
                'dataIndex' => 'totalVisits',
                'align' => 'center',
            ],
            [
                'id' => 'totalValidOrders',
                'header' => $this->trans('Valid orders', [], 'Modules.Statsbestcustomers.Admin'),
                'dataIndex' => 'totalValidOrders',
                'align' => 'center',
            ],
            [
                'id' => 'totalMoneySpent',
                'header' => $this->trans('Money spent', [], 'Modules.Statsbestcustomers.Admin') . ' (' . Tools::safeOutput($currency->iso_code) . ')',
                'dataIndex' => 'totalMoneySpent',
                'align' => 'center',
            ],
        ];

        $this->displayName = $this->trans('Best customers', [], 'Modules.Statsbestcustomers.Admin');
        $this->description = $this->trans('Enrich your stats, add a list of the best customers to the dashboard.', [], 'Modules.Statsbestcustomers.Admin');
        $this->ps_versions_compliancy = ['min' => '1.7.1.0', 'max' => _PS_VERSION_];
    }

    public function install()
    {
        return parent::install() && $this->registerHook('displayAdminStatsModules');
    }

    public function hookDisplayAdminStatsModules($params)
    {
        $engine_params = [
            'id' => 'id_customer',
            'title' => $this->displayName,
            'columns' => $this->columns,
            'defaultSortColumn' => $this->default_sort_column,
            'defaultSortDirection' => $this->default_sort_direction,
            'emptyMessage' => $this->empty_message,
            'pagingMessage' => $this->paging_message,
        ];

        if (Tools::getValue('export')) {
            $this->csvExport($engine_params);
        }

        $this->html = '
		<div class="panel-heading">
			' . $this->displayName . '
		</div>
		<h4>' . $this->trans('Guide', [], 'Admin.Global') . '</h4>
			<div class="alert alert-warning">
				<h4>' . $this->trans('Develop clients\' loyalty', [], 'Modules.Statsbestcustomers.Admin') . '</h4>
				<div>
					' . $this->trans('Keeping a client can be more profitable than gaining a new one. That is one of the many reasons it is necessary to cultivate customer loyalty.', [], 'Modules.Statsbestcustomers.Admin') . ' <br />
					' . $this->trans('Word of mouth is also a means for getting new, satisfied clients. A dissatisfied customer can hurt your e-reputation and obstruct future sales goals.', [], 'Modules.Statsbestcustomers.Admin') . '<br />
					' . $this->trans('In order to achieve this goal, you can organize:', [], 'Modules.Statsbestcustomers.Admin') . '
					<ul>
						<li>' . $this->trans('Punctual operations: commercial rewards (personalized special offers, product or service offered), non commercial rewards (priority handling of an order or a product), pecuniary rewards (bonds, discount coupons, payback).', [], 'Modules.Statsbestcustomers.Admin') . '</li>
						<li>' . $this->trans('Sustainable operations: loyalty points or cards, which not only justify communication between merchant and client, but also offer advantages to clients (private offers, discounts).', [], 'Modules.Statsbestcustomers.Admin') . '</li>
					</ul>
					' . $this->trans('These operations encourage clients to buy products and visit your online store more regularly.', [], 'Modules.Statsbestcustomers.Admin') . '
				</div>
			</div>
		' . $this->engine($engine_params) . '
		<a class="btn btn-default export-csv" href="' . Tools::safeOutput($_SERVER['REQUEST_URI'] . '&export=') . '1">
			<i class="icon-cloud-upload"></i> ' . $this->trans('CSV Export', [], 'Admin.Global') . '
		</a>';

        return $this->html;
    }

    public function getData()
    {
        $this->query = '
		SELECT SQL_CALC_FOUND_ROWS DISTINCT
            c.`id_customer`,
            c.`lastname`,
            c.`firstname`,
            c.`email`,
			COUNT(co.`id_connections`) as totalVisits,
			IFNULL((
				SELECT ROUND(SUM(IFNULL(op.`amount`, 0) / cu.conversion_rate), 2)
				FROM `' . _DB_PREFIX_ . 'orders` o
				LEFT JOIN `' . _DB_PREFIX_ . 'order_payment` op ON o.reference = op.order_reference
				LEFT JOIN `' . _DB_PREFIX_ . 'currency` cu ON o.id_currency = cu.id_currency
				WHERE o.id_customer = c.id_customer
				AND o.invoice_date BETWEEN ' . $this->getDate() . '
				AND o.valid
			), 0) as totalMoneySpent,
			IFNULL((
				SELECT COUNT(*)
				FROM `' . _DB_PREFIX_ . 'orders` o
				WHERE o.id_customer = c.id_customer
				AND o.invoice_date BETWEEN ' . $this->getDate() . '
				AND o.valid
			), 0) as totalValidOrders
		FROM `' . _DB_PREFIX_ . 'customer` c
		INNER JOIN `' . _DB_PREFIX_ . 'orders` o ON o.`id_customer` = c.`id_customer`
		LEFT JOIN `' . _DB_PREFIX_ . 'guest` g ON c.`id_customer` = g.`id_customer`
		LEFT JOIN `' . _DB_PREFIX_ . 'connections` co ON g.`id_guest` = co.`id_guest` AND co.date_add BETWEEN ' . $this->getDate() . '
		WHERE o.date_add BETWEEN ' . $this->getDate() . '
		' . Shop::addSqlRestriction(Shop::SHARE_CUSTOMER, 'c') . '
		GROUP BY c.`id_customer`, c.`lastname`, c.`firstname`, c.`email`, o.`id_order`';

        if (Validate::IsName($this->_sort)) {
            $this->query .= ' ORDER BY `' . bqSQL($this->_sort) . '`';
            if (isset($this->_direction) && Validate::isSortDirection($this->_direction)) {
                $this->query .= ' ' . $this->_direction;
            }
        }

        if (($this->_start === 0 || Validate::IsUnsignedInt($this->_start)) && Validate::IsUnsignedInt($this->_limit)) {
            $this->query .= ' LIMIT ' . (int) $this->_start . ', ' . (int) $this->_limit;
        }

        $this->_values = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->executeS($this->query);
        $this->_totalCount = (int) Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('SELECT FOUND_ROWS()');
    }
}
