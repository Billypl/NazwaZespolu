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

class dashactivity extends Module
{
    protected static $colors = ['#1F77B4', '#FF7F0E', '#2CA02C'];

    public function __construct()
    {
        $this->name = 'dashactivity';
        $this->tab = 'administration';
        $this->version = '2.1.0';
        $this->author = 'PrestaShop';

        parent::__construct();
        $this->displayName = $this->trans('Dashboard Activity', [], 'Modules.Dashactivity.Admin');
        $this->description = $this->trans('Check in one glance what is happening on your store with a list of KPI on your dashboard.', [], 'Modules.Dashactivity.Admin');
        $this->ps_versions_compliancy = ['min' => '1.7.7.0', 'max' => _PS_VERSION_];
    }

    public function install()
    {
        Configuration::updateValue('DASHACTIVITY_CART_ACTIVE', 30);
        Configuration::updateValue('DASHACTIVITY_CART_ABANDONED_MIN', 24);
        Configuration::updateValue('DASHACTIVITY_CART_ABANDONED_MAX', 48);
        Configuration::updateValue('DASHACTIVITY_VISITOR_ONLINE', 30);

        return parent::install()
            && $this->registerHook('dashboardZoneOne')
            && $this->registerHook('dashboardData')
            && $this->registerHook('actionAdminControllerSetMedia')
        ;
    }

    public function hookActionAdminControllerSetMedia()
    {
        if (get_class($this->context->controller) == 'AdminDashboardController') {
            $this->context->controller->addJs($this->_path . 'views/js/' . $this->name . '.js');
            $this->context->controller->addJs(
                [
                    _PS_JS_DIR_ . 'date.js',
                    _PS_JS_DIR_ . 'tools.js',
                ] // retro compat themes 1.5
            );
        }
    }

    public function hookDashboardZoneOne($params)
    {
        $this->context->smarty->assign($this->getConfigFieldsValues());
        $this->context->smarty->assign(
            [
                'dashactivity_config_form' => $this->renderConfigForm(),
                'date_subtitle' => $this->trans('(from %s to %s)', [], 'Modules.Dashactivity.Admin'),
                'date_format' => $this->context->language->date_format_lite,
                'link' => $this->context->link,
            ]
        );

        return $this->display(__FILE__, 'dashboard_zone_one.tpl');
    }

    public function hookDashboardData($params)
    {
        if (Tools::strlen($params['date_from']) == 10) {
            $params['date_from'] .= ' 00:00:00';
        }
        if (Tools::strlen($params['date_to']) == 10) {
            $params['date_to'] .= ' 23:59:59';
        }

        if (Configuration::get('PS_DASHBOARD_SIMULATION')) {
            $days = (strtotime($params['date_to']) - strtotime($params['date_from'])) / 3600 / 24;
            $online_visitor = rand(10, 50);
            $visits = rand(200, 2000) * $days;

            return [
                'data_value' => [
                    'pending_orders' => round(rand(0, 5)),
                    'return_exchanges' => round(rand(0, 5)),
                    'abandoned_cart' => round(rand(5, 50)),
                    'products_out_of_stock' => round(rand(1, 10)),
                    'new_messages' => round(rand(1, 10) * $days),
                    'product_reviews' => round(rand(5, 50) * $days),
                    'new_customers' => round(rand(1, 5) * $days),
                    'online_visitor' => round($online_visitor),
                    'active_shopping_cart' => round($online_visitor / 10),
                    'new_registrations' => round(rand(1, 5) * $days),
                    'total_suscribers' => round(rand(200, 2000)),
                    'visits' => round($visits),
                    'unique_visitors' => round($visits * 0.6),
                ],
                'data_trends' => [
                    'orders_trends' => ['way' => 'down', 'value' => 0.42],
                ],
                'data_list_small' => [
                    'dash_traffic_source' => [
                        '<i class="icon-circle" style="color:' . self::$colors[0] . '"></i> prestashop.com' => round($visits / 2),
                        '<i class="icon-circle" style="color:' . self::$colors[1] . '"></i> google.com' => round($visits / 3),
                        '<i class="icon-circle" style="color:' . self::$colors[2] . '"></i> Direct Traffic' => round($visits / 4),
                    ],
                ],
                'data_chart' => [
                    'dash_trends_chart1' => [
                        'chart_type' => 'pie_chart_trends',
                        'data' => [
                            ['key' => 'prestashop.com', 'y' => round($visits / 2), 'color' => self::$colors[0]],
                            ['key' => 'google.com', 'y' => round($visits / 3), 'color' => self::$colors[1]],
                            ['key' => 'Direct Traffic', 'y' => round($visits / 4), 'color' => self::$colors[2]],
                        ],
                    ],
                ],
            ];
        }

        $visits = $unique_visitors = 0;
        $row = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getRow('
            SELECT COUNT(*) as visits, COUNT(DISTINCT `id_guest`) as unique_visitors
            FROM `' . _DB_PREFIX_ . 'connections`
            WHERE `date_add` BETWEEN "' . pSQL($params['date_from']) . '" AND "' . pSQL($params['date_to']) . '"
            ' . Shop::addSqlRestriction(false)
        );
        extract($row);

        if ($maintenance_ips = Configuration::get('PS_MAINTENANCE_IP')) {
            $maintenance_ips = implode(',', array_map('ip2long', array_map('trim', explode(',', $maintenance_ips))));
        }
        if (Configuration::get('PS_STATSDATA_CUSTOMER_PAGESVIEWS')) {
            $sql = 'SELECT c.id_guest, c.ip_address, c.date_add, c.http_referer, pt.name as page
					FROM `' . _DB_PREFIX_ . 'connections` c
					LEFT JOIN `' . _DB_PREFIX_ . 'connections_page` cp ON c.id_connections = cp.id_connections
					LEFT JOIN `' . _DB_PREFIX_ . 'page` p ON p.id_page = cp.id_page
					LEFT JOIN `' . _DB_PREFIX_ . 'page_type` pt ON p.id_page_type = pt.id_page_type
					INNER JOIN `' . _DB_PREFIX_ . 'guest` g ON c.id_guest = g.id_guest
					WHERE (g.id_customer IS NULL OR g.id_customer = 0)
						' . Shop::addSqlRestriction(false, 'c') . '
						AND cp.`time_end` IS NULL
					AND (\'' . pSQL(date('Y-m-d H:i:00', time() - 60 * (int) Configuration::get('DASHACTIVITY_VISITOR_ONLINE'))) . '\' < cp.`time_start`)
					' . ($maintenance_ips ? 'AND c.ip_address NOT IN (' . preg_replace('/[^,0-9]/', '', $maintenance_ips) . ')' : '') . '
					GROUP BY c.id_connections
					ORDER BY c.date_add DESC';
        } else {
            $sql = 'SELECT c.id_guest, c.ip_address, c.date_add, c.http_referer, "-" as page
					FROM `' . _DB_PREFIX_ . 'connections` c
					INNER JOIN `' . _DB_PREFIX_ . 'guest` g ON c.id_guest = g.id_guest
					WHERE (g.id_customer IS NULL OR g.id_customer = 0)
						' . Shop::addSqlRestriction(false, 'c') . '
						AND (\'' . pSQL(date('Y-m-d H:i:00', time() - 60 * (int) Configuration::get('DASHACTIVITY_VISITOR_ONLINE'))) . '\' < c.`date_add`)
					' . ($maintenance_ips ? 'AND c.ip_address NOT IN (' . preg_replace('/[^,0-9]/', '', $maintenance_ips) . ')' : '') . '
					ORDER BY c.date_add DESC';
        }
        Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->executeS($sql);
        $online_visitor = Db::getInstance()->NumRows();

        $pending_orders = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
			SELECT COUNT(*)
			FROM `' . _DB_PREFIX_ . 'orders` o
			LEFT JOIN `' . _DB_PREFIX_ . 'order_state` os ON (o.current_state = os.id_order_state)
			WHERE os.paid = 1 AND os.shipped = 0
			' . Shop::addSqlRestriction(Shop::SHARE_ORDER)
        );

        $abandoned_cart = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
			SELECT COUNT(*)
			FROM `' . _DB_PREFIX_ . 'cart`
			WHERE `date_upd` BETWEEN "' . pSQL(date('Y-m-d H:i:s', strtotime('-' . (int) Configuration::get('DASHACTIVITY_CART_ABANDONED_MAX') . ' MIN'))) . '" AND "' . pSQL(date('Y-m-d H:i:s', strtotime('-' . (int) Configuration::get('DASHACTIVITY_CART_ABANDONED_MIN') . ' MIN'))) . '"
			AND id_cart NOT IN (SELECT id_cart FROM `' . _DB_PREFIX_ . 'orders`)
			' . Shop::addSqlRestriction(Shop::SHARE_ORDER)
        );

        $return_exchanges = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
			SELECT COUNT(*)
			FROM `' . _DB_PREFIX_ . 'orders` o
			LEFT JOIN `' . _DB_PREFIX_ . 'order_return` or2 ON o.id_order = or2.id_order
			WHERE or2.`date_add` BETWEEN "' . pSQL($params['date_from']) . '" AND "' . pSQL($params['date_to']) . '"
			' . Shop::addSqlRestriction(Shop::SHARE_ORDER, 'o')
        );

        $products_out_of_stock = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
			SELECT SUM(IF(IFNULL(stock.quantity, 0) > 0, 0, 1))
			FROM `' . _DB_PREFIX_ . 'product` p
			' . Shop::addSqlAssociation('product', 'p') . '
			LEFT JOIN `' . _DB_PREFIX_ . 'product_attribute` pa ON p.id_product = pa.id_product
			' . Product::sqlStock('p', 'pa') . '
			WHERE p.active = 1'
        );

        $new_messages = AdminStatsController::getPendingMessages();

        $active_shopping_cart = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
			SELECT COUNT(*)
			FROM `' . _DB_PREFIX_ . 'cart`
			WHERE date_upd > "' . pSQL(date('Y-m-d H:i:s', strtotime('-' . (int) Configuration::get('DASHACTIVITY_CART_ACTIVE') . ' MIN'))) . '"
			' . Shop::addSqlRestriction(Shop::SHARE_ORDER)
        );

        $new_customers = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
			SELECT COUNT(*)
			FROM `' . _DB_PREFIX_ . 'customer`
			WHERE `date_add` BETWEEN "' . pSQL($params['date_from']) . '" AND "' . pSQL($params['date_to']) . '"
			' . Shop::addSqlRestriction(Shop::SHARE_ORDER)
        );

        $new_registrations = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
			SELECT COUNT(*)
			FROM `' . _DB_PREFIX_ . 'customer`
			WHERE `newsletter_date_add` BETWEEN "' . pSQL($params['date_from']) . '" AND "' . pSQL($params['date_to']) . '"
			AND newsletter = 1
			' . Shop::addSqlRestriction(Shop::SHARE_ORDER)
        );
        $total_suscribers = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
			SELECT COUNT(*)
			FROM `' . _DB_PREFIX_ . 'customer`
			WHERE newsletter = 1
			' . Shop::addSqlRestriction(Shop::SHARE_ORDER)
        );

        $product_reviews = 0;
        if (Module::isInstalled('productcomments')) {
            $product_reviews += Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
				SELECT COUNT(*)
				FROM `' . _DB_PREFIX_ . 'product_comment` pc
				LEFT JOIN `' . _DB_PREFIX_ . 'product` p ON (pc.id_product = p.id_product)
				' . Shop::addSqlAssociation('product', 'p') . '
				WHERE pc.deleted = 0
				AND pc.`date_add` BETWEEN "' . pSQL($params['date_from']) . '" AND "' . pSQL($params['date_to']) . '"
				' . Shop::addSqlRestriction(Shop::SHARE_ORDER)
            );
        }

        return [
            'data_value' => [
                'pending_orders' => (int) $pending_orders,
                'return_exchanges' => (int) $return_exchanges,
                'abandoned_cart' => (int) $abandoned_cart,
                'products_out_of_stock' => (int) $products_out_of_stock,
                'new_messages' => (int) $new_messages,
                'product_reviews' => (int) $product_reviews,
                'new_customers' => (int) $new_customers,
                'online_visitor' => (int) $online_visitor,
                'active_shopping_cart' => (int) $active_shopping_cart,
                'new_registrations' => (int) $new_registrations,
                'total_suscribers' => (int) $total_suscribers,
                'visits' => (int) $visits,
                'unique_visitors' => (int) $unique_visitors,
            ],
            'data_trends' => [
                'orders_trends' => ['way' => 'down', 'value' => 0.42],
            ],
            'data_list_small' => [
                'dash_traffic_source' => $this->getTrafficSources($params['date_from'], $params['date_to']),
            ],
            'data_chart' => [
                'dash_trends_chart1' => $this->getChartTrafficSource($params['date_from'], $params['date_to']),
            ],
        ];
    }

    protected function getChartTrafficSource($date_from, $date_to)
    {
        $referers = $this->getReferer($date_from, $date_to);
        $return = ['chart_type' => 'pie_chart_trends', 'data' => []];
        $i = 0;
        foreach ($referers as $referer_name => $n) {
            $return['data'][] = ['key' => $referer_name, 'y' => $n, 'color' => self::$colors[$i++]];
        }

        return $return;
    }

    protected function getTrafficSources($date_from, $date_to)
    {
        $referrers = $this->getReferer($date_from, $date_to, 3);
        $traffic_sources = [];
        $i = 0;
        foreach ($referrers as $referrer_name => $n) {
            $traffic_sources['<i class="icon-circle" style="color:' . self::$colors[$i++] . '"></i> ' . $referrer_name] = $n;
        }

        return $traffic_sources;
    }

    protected function getReferer($date_from, $date_to, $limit = 3)
    {
        $direct_link = $this->trans('Direct link', [], 'Admin.Orderscustomers.Notification');
        $websites = [$direct_link => 0];

        $result = Db::getInstance()->ExecuteS('
            SELECT http_referer
            FROM ' . _DB_PREFIX_ . 'connections
            WHERE date_add BETWEEN "' . pSQL($date_from) . '" AND "' . pSQL($date_to) . '"
            ' . Shop::addSqlRestriction() . '
            LIMIT ' . (int) $limit
        );
        foreach ($result as $row) {
            if (!isset($row['http_referer']) || empty($row['http_referer'])) {
                ++$websites[$direct_link];
            } else {
                $website = preg_replace('/^www./', '', parse_url($row['http_referer'], PHP_URL_HOST));
                if (!isset($websites[$website])) {
                    $websites[$website] = 1;
                } else {
                    ++$websites[$website];
                }
            }
        }
        arsort($websites);

        return $websites;
    }

    public function renderConfigForm()
    {
        $fields_form = [
            'form' => [
                'id_form' => 'step_carrier_general',
                'input' => [],
                'submit' => [
                    'title' => $this->trans('Save', [], 'Admin.Actions'),
                    'class' => 'btn btn-default pull-right submit_dash_config',
                    'reset' => [
                        'title' => $this->trans('Cancel', [], 'Admin.Actions'),
                        'class' => 'btn btn-default cancel_dash_config',
                    ],
                ],
            ],
        ];

        $fields_form['form']['input'][] = [
            'label' => $this->trans('Active cart', [], 'Modules.Dashactivity.Admin'),
            'hint' => $this->trans('How long (in minutes) a cart is to be considered as active after the last recorded change (default: 30 min).', [], 'Modules.Dashactivity.Admin'),
            'name' => 'DASHACTIVITY_CART_ACTIVE',
            'type' => 'select',
            'options' => [
                'query' => [
                    ['id' => 15, 'name' => 15],
                    ['id' => 30, 'name' => 30],
                    ['id' => 45, 'name' => 45],
                    ['id' => 60, 'name' => 60],
                    ['id' => 90, 'name' => 90],
                    ['id' => 120, 'name' => 120],
                ],
                'id' => 'id',
                'name' => 'name',
            ],
        ];
        $fields_form['form']['input'][] = [
            'label' => $this->trans('Online visitor', [], 'Modules.Dashactivity.Admin'),
            'hint' => $this->trans('How long (in minutes) a visitor is to be considered as online after their last action (default: 30 min).', [], 'Modules.Dashactivity.Admin'),
            'name' => 'DASHACTIVITY_VISITOR_ONLINE',
            'type' => 'select',
            'options' => [
                'query' => [
                    ['id' => 15, 'name' => 15],
                    ['id' => 30, 'name' => 30],
                    ['id' => 45, 'name' => 45],
                    ['id' => 60, 'name' => 60],
                    ['id' => 90, 'name' => 90],
                    ['id' => 120, 'name' => 120],
                ],
                'id' => 'id',
                'name' => 'name',
            ],
        ];
        $fields_form['form']['input'][] = [
            'label' => $this->trans('Abandoned cart (min)', [], 'Modules.Dashactivity.Admin'),
            'hint' => $this->trans('How long (in hours) after the last action a cart is to be considered as abandoned (default: 24 hrs).', [], 'Modules.Dashactivity.Admin'),
            'name' => 'DASHACTIVITY_CART_ABANDONED_MIN',
            'type' => 'text',
            'suffix' => $this->trans('hrs', [], 'Modules.Dashactivity.Admin'),
        ];
        $fields_form['form']['input'][] = [
            'label' => $this->trans('Abandoned cart (max)', [], 'Modules.Dashactivity.Admin'),
            'hint' => $this->trans('How long (in hours) after the last action a cart is no longer to be considered as abandoned (default: 24 hrs).', [], 'Modules.Dashactivity.Admin'),
            'name' => 'DASHACTIVITY_CART_ABANDONED_MAX',
            'type' => 'text',
            'suffix' => $this->trans('hrs', [], 'Modules.Dashactivity.Admin'),
        ];

        $helper = new HelperForm();
        $helper->show_toolbar = false;
        $helper->table = $this->table;
        $lang = new Language((int) Configuration::get('PS_LANG_DEFAULT'));
        $helper->default_form_language = $lang->id;
        $helper->allow_employee_form_lang = Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') ? Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') : 0;
        $helper->id = (int) Tools::getValue('id_carrier');
        $helper->identifier = $this->identifier;
        $helper->submit_action = 'submitDashConfig';
        $helper->tpl_vars = [
            'fields_value' => $this->getConfigFieldsValues(),
            'languages' => $this->context->controller->getLanguages(),
            'id_language' => $this->context->language->id,
        ];

        return $helper->generateForm([$fields_form]);
    }

    public function getConfigFieldsValues()
    {
        return [
            'DASHACTIVITY_CART_ACTIVE' => Tools::getValue('DASHACTIVITY_CART_ACTIVE', Configuration::get('DASHACTIVITY_CART_ACTIVE')),
            'DASHACTIVITY_CART_ABANDONED_MIN' => Tools::getValue('DASHACTIVITY_CART_ABANDONED_MIN', Configuration::get('DASHACTIVITY_CART_ABANDONED_MIN')),
            'DASHACTIVITY_CART_ABANDONED_MAX' => Tools::getValue('DASHACTIVITY_CART_ABANDONED_MAX', Configuration::get('DASHACTIVITY_CART_ABANDONED_MAX')),
            'DASHACTIVITY_VISITOR_ONLINE' => Tools::getValue('DASHACTIVITY_VISITOR_ONLINE', Configuration::get('DASHACTIVITY_VISITOR_ONLINE')),
        ];
    }
}
