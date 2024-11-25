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

class dashtrends extends Module
{
    protected $dashboard_data;
    protected $dashboard_data_compare;
    protected $dashboard_data_sum;
    protected $dashboard_data_sum_compare;
    protected $data_trends;

    /**
     * @var Currency
     */
    public $currency;

    public function __construct()
    {
        $this->name = 'dashtrends';
        $this->tab = 'administration';
        $this->version = '2.1.3';
        $this->author = 'PrestaShop';

        parent::__construct();
        $this->displayName = $this->trans('Dashboard Trends', [], 'Modules.Dashtrends.Admin');
        $this->description = $this->trans('Enrich your dashboard: display a graphical representation of your store’s development.', [], 'Modules.Dashtrends.Admin');
        $this->ps_versions_compliancy = ['min' => '1.7.6.0', 'max' => _PS_VERSION_];
    }

    public function install()
    {
        return parent::install()
            && $this->registerHook('dashboardZoneTwo')
            && $this->registerHook('dashboardData')
            && $this->registerHook('actionAdminControllerSetMedia')
        ;
    }

    public function hookActionAdminControllerSetMedia()
    {
        if (get_class($this->context->controller) == 'AdminDashboardController') {
            $this->context->controller->addJs($this->_path . 'views/js/' . $this->name . '.js');
        }
    }

    public function hookDashboardZoneTwo($params)
    {
        $this->context->smarty->assign([
            'currency' => $this->context->currency,
        ]);

        return $this->display(__FILE__, 'dashboard_zone_two.tpl');
    }

    protected function getData($date_from, $date_to)
    {
        // We need the following figures to calculate our stats
        $tmp_data = [
            'visits' => [],
            'orders' => [],
            'total_paid_tax_excl' => [],
            'total_purchases' => [],
            'total_expenses' => [],
        ];

        if (Configuration::get('PS_DASHBOARD_SIMULATION')) {
            $from = strtotime($date_from . ' 00:00:00');
            $to = min(time(), strtotime($date_to . ' 23:59:59'));
            for ($date = $from; $date <= $to; $date = strtotime('+1 day', $date)) {
                $tmp_data['visits'][$date] = round(rand(2000, 20000));
                $tmp_data['conversion_rate'][$date] = rand(80, 250) / 100;
                $tmp_data['average_cart_value'][$date] = round(rand(60, 200), 2);
                $tmp_data['orders'][$date] = round($tmp_data['visits'][$date] * $tmp_data['conversion_rate'][$date] / 100);
                $tmp_data['total_paid_tax_excl'][$date] = $tmp_data['orders'][$date] * $tmp_data['average_cart_value'][$date];
                $tmp_data['total_purchases'][$date] = $tmp_data['total_paid_tax_excl'][$date] * rand(50, 70) / 100;
                $tmp_data['total_expenses'][$date] = $tmp_data['total_paid_tax_excl'][$date] * rand(0, 10) / 100;
            }
        } else {
            $tmp_data['visits'] = AdminStatsController::getVisits(false, $date_from, $date_to, 'day');
            $tmp_data['orders'] = AdminStatsController::getOrders($date_from, $date_to, 'day');
            $tmp_data['total_paid_tax_excl'] = $this->getTotalSalesWithRefunds($date_from, $date_to, 'day');
            $tmp_data['total_purchases'] = AdminStatsController::getPurchases($date_from, $date_to, 'day');
            $tmp_data['total_expenses'] = AdminStatsController::getExpenses($date_from, $date_to, 'day');
        }

        return $tmp_data;
    }

    protected function refineData($date_from, $date_to, $gross_data)
    {
        $refined_data = [
            'sales' => [],
            'orders' => [],
            'average_cart_value' => [],
            'visits' => [],
            'conversion_rate' => [],
            'net_profits' => [],
        ];

        $from = strtotime($date_from . ' 00:00:00');
        $to = min(time(), strtotime($date_to . ' 23:59:59'));
        for ($date = $from; $date <= $to; $date = strtotime('+1 day', $date)) {
            $refined_data['sales'][$date] = 0;
            if (isset($gross_data['total_paid_tax_excl'][$date])) {
                $refined_data['sales'][$date] += $gross_data['total_paid_tax_excl'][$date];
            }

            $refined_data['orders'][$date] = isset($gross_data['orders'][$date]) ? $gross_data['orders'][$date] : 0;

            $refined_data['average_cart_value'][$date] = $refined_data['orders'][$date] ? $refined_data['sales'][$date] / $refined_data['orders'][$date] : 0;

            $refined_data['visits'][$date] = isset($gross_data['visits'][$date]) ? $gross_data['visits'][$date] : 0;

            $refined_data['conversion_rate'][$date] = $refined_data['visits'][$date] ? $refined_data['orders'][$date] / $refined_data['visits'][$date] : 0;

            $refined_data['net_profits'][$date] = 0;
            if (isset($gross_data['total_paid_tax_excl'][$date])) {
                $refined_data['net_profits'][$date] += $gross_data['total_paid_tax_excl'][$date];
            }
            if (isset($gross_data['total_purchases'][$date])) {
                $refined_data['net_profits'][$date] -= $gross_data['total_purchases'][$date];
            }
            if (isset($gross_data['total_expenses'][$date])) {
                $refined_data['net_profits'][$date] -= $gross_data['total_expenses'][$date];
            }
        }

        return $refined_data;
    }

    protected function addupData($data)
    {
        $summing = [
            'sales' => 0,
            'orders' => 0,
            'average_cart_value' => 0,
            'visits' => 0,
            'conversion_rate' => 0,
            'net_profits' => 0,
        ];

        $summing['sales'] = array_sum($data['sales']);
        $summing['orders'] = array_sum($data['orders']);
        $summing['average_cart_value'] = $summing['sales'] ? $summing['sales'] / $summing['orders'] : 0;
        $summing['visits'] = array_sum($data['visits']);
        $summing['conversion_rate'] = $summing['visits'] ? $summing['orders'] / $summing['visits'] : 0;
        $summing['net_profits'] = array_sum($data['net_profits']);

        return $summing;
    }

    protected function compareData($data1, $data2)
    {
        return [
            'sales_score_trends' => [
                'way' => ($data1['sales'] == $data2['sales'] ? 'right' : ($data1['sales'] > $data2['sales'] ? 'up' : 'down')),
                'value' => ($data1['sales'] > $data2['sales'] ? '+' : '') . ($data2['sales'] ? round(100 * $data1['sales'] / $data2['sales'] - 100, 2) . '%' : '&infin;'),
            ],
            'orders_score_trends' => [
                'way' => ($data1['orders'] == $data2['orders'] ? 'right' : ($data1['orders'] > $data2['orders'] ? 'up' : 'down')),
                'value' => ($data1['orders'] > $data2['orders'] ? '+' : '') . ($data2['orders'] ? round(100 * $data1['orders'] / $data2['orders'] - 100, 2) . '%' : '&infin;'),
            ],
            'cart_value_score_trends' => [
                'way' => ($data1['average_cart_value'] == $data2['average_cart_value'] ? 'right' : ($data1['average_cart_value'] > $data2['average_cart_value'] ? 'up' : 'down')),
                'value' => ($data1['average_cart_value'] > $data2['average_cart_value'] ? '+' : '') . ($data2['average_cart_value'] ? round(100 * $data1['average_cart_value'] / $data2['average_cart_value'] - 100, 2) . '%' : '&infin;'),
            ],
            'visits_score_trends' => [
                'way' => ($data1['visits'] == $data2['visits'] ? 'right' : ($data1['visits'] > $data2['visits'] ? 'up' : 'down')),
                'value' => ($data1['visits'] > $data2['visits'] ? '+' : '') . ($data2['visits'] ? round(100 * $data1['visits'] / $data2['visits'] - 100, 2) . '%' : '&infin;'),
            ],
            'conversion_rate_score_trends' => [
                'way' => ($data1['conversion_rate'] == $data2['conversion_rate'] ? 'right' : ($data1['conversion_rate'] > $data2['conversion_rate'] ? 'up' : 'down')),
                'value' => ($data1['conversion_rate'] > $data2['conversion_rate'] ? '+' : '') . ($data2['conversion_rate'] ? sprintf($this->trans('%s points', [], 'Modules.Dashtrends.Admin'), round(100 * ($data1['conversion_rate'] - $data2['conversion_rate']), 2)) : '&infin;'),
            ],
            'net_profits_score_trends' => [
                'way' => ($data1['net_profits'] == $data2['net_profits'] ? 'right' : ($data1['net_profits'] > $data2['net_profits'] ? 'up' : 'down')),
                'value' => ($data1['net_profits'] > $data2['net_profits'] ? '+' : '') . ($data2['net_profits'] ? round(100 * $data1['net_profits'] / $data2['net_profits'] - 100, 2) . '%' : '&infin;'),
            ],
        ];
    }

    public function hookDashboardData($params)
    {
        $this->currency = clone $this->context->currency;

        // Retrieve, refine and add up data for the selected period
        $tmp_data = $this->getData($params['date_from'], $params['date_to']);
        $this->dashboard_data = $this->refineData($params['date_from'], $params['date_to'], $tmp_data);
        $this->dashboard_data_sum = $this->addupData($this->dashboard_data);

        if ($params['compare_from'] && $params['compare_from'] != '0000-00-00') {
            // Retrieve, refine and add up data for the comparison period
            $tmp_data_compare = $this->getData($params['compare_from'], $params['compare_to']);
            $this->dashboard_data_compare = $this->refineData($params['compare_from'], $params['compare_to'], $tmp_data_compare);
            $this->dashboard_data_sum_compare = $this->addupData($this->dashboard_data_compare);

            $this->data_trends = $this->compareData($this->dashboard_data_sum, $this->dashboard_data_sum_compare);
            $this->dashboard_data_compare = $this->translateCompareData($this->dashboard_data, $this->dashboard_data_compare);
        }

        $sales_score = $this->context->getCurrentLocale()->formatPrice($this->dashboard_data_sum['sales'], $this->context->currency->iso_code) .
                       $this->addTaxSuffix();

        $cart_value_score = $this->context->getCurrentLocale()->formatPrice($this->dashboard_data_sum['average_cart_value'], $this->context->currency->iso_code) .
                            $this->addTaxSuffix();

        $net_profit_score = $this->context->getCurrentLocale()->formatPrice($this->dashboard_data_sum['net_profits'], $this->context->currency->iso_code) .
                            $this->addTaxSuffix();

        return [
            'data_value' => [
                'sales_score' => $sales_score,
                'orders_score' => $this->context->getCurrentLocale()->formatNumber($this->dashboard_data_sum['orders']),
                'cart_value_score' => $cart_value_score,
                'visits_score' => $this->context->getCurrentLocale()->formatNumber($this->dashboard_data_sum['visits']),
                'conversion_rate_score' => round(100 * $this->dashboard_data_sum['conversion_rate'], 2) . '%',
                'net_profits_score' => $net_profit_score,
            ],
            'data_trends' => $this->data_trends,
            'data_chart' => ['dash_trends_chart1' => $this->getChartTrends()],
        ];
    }

    protected function addTaxSuffix()
    {
        return ' <small>' . $this->trans('Tax excl.', [], 'Admin.Global') . '</small>';
    }

    protected function translateCompareData($normal, $compare)
    {
        $translated_array = [];
        foreach ($compare as $key => $date_array) {
            $normal_min = key($normal[$key]);
            end($normal[$key]); // move the internal pointer to the end of the array
            $normal_max = key($normal[$key]);
            reset($normal[$key]);
            $normal_size = $normal_max - $normal_min;

            $compare_min = key($compare[$key]);
            end($compare[$key]); // move the internal pointer to the end of the array
            $compare_max = key($compare[$key]);
            reset($compare[$key]);
            $compare_size = $compare_max - $compare_min;

            $translated_array[$key] = [];
            foreach ($date_array as $compare_date => $value) {
                $translation = $compare_size == 0 ? 0 : $normal_min + ($compare_date - $compare_min) * ($normal_size / $compare_size);
                $translated_array[$key][number_format($translation, 0, '', '')] = $value;
            }
        }

        return $translated_array;
    }

    public function getChartTrends()
    {
        $chart_data = [];
        $chart_data_compare = [];
        foreach (array_keys($this->dashboard_data) as $chart_key) {
            $chart_data[$chart_key] = $chart_data_compare[$chart_key] = [];

            if (!$count = count($this->dashboard_data[$chart_key])) {
                continue;
            }

            // We calibrate 100% to the mean
            $calibration = array_sum($this->dashboard_data[$chart_key]) / $count;

            foreach ($this->dashboard_data[$chart_key] as $key => $value) {
                $chart_data[$chart_key][] = [$key, $value];
            }
            // min(10) is there to limit the growth to 1000%, beyond this limit it becomes unreadable
            //$chart_data[$chart_key][] = array(1000 * $key, $calibration ? min(10, $value / $calibration) : 0);

            if ($this->dashboard_data_compare) {
                foreach ($this->dashboard_data_compare[$chart_key] as $key => $value) {
                    $chart_data_compare[$chart_key][] = [$key, $value];
                }
            }
            // min(10) is there to limit the growth to 1000%, beyond this limit it becomes unreadable
                    /*$chart_data_compare[$chart_key][] = array(
                        1000 * $key,
                        $calibration ? min(10, $value / $calibration) : 0
                    );*/
        }

        $charts = [
            'sales' => $this->trans('Sales', [], 'Admin.Global'),
            'orders' => $this->trans('Orders', [], 'Admin.Global'),
            'average_cart_value' => $this->trans('Average Cart Value', [], 'Modules.Dashtrends.Admin'),
            'visits' => $this->trans('Visits', [], 'Admin.Shopparameters.Feature'),
            'conversion_rate' => $this->trans('Conversion Rate', [], 'Modules.Dashtrends.Admin'),
            'net_profits' => $this->trans('Net Profit', [], 'Modules.Dashtrends.Admin'),
        ];

        $gfx_color = ['#1777B6', '#2CA121', '#E61409', '#FF7F00', '#6B399C', '#B3591F'];
        $gfx_color_compare = ['#A5CEE4', '#B1E086', '#FD9997', '#FFC068', '#CAB1D7', '#D2A689'];

        $i = 0;
        $data = ['chart_type' => 'line_chart_trends', 'date_format' => $this->context->language->date_format_lite, 'data' => []];
        foreach ($charts as $key => $title) {
            $data['data'][] = [
                'id' => $key,
                'key' => $title,
                'color' => $gfx_color[$i],
                'values' => $chart_data[$key],
                'disabled' => ($key == 'sales' ? false : true),
            ];
            if ($this->dashboard_data_compare) {
                $data['data'][] = [
                    'id' => $key . '_compare',
                    'color' => $gfx_color_compare[$i],
                    'key' => sprintf($this->trans('%s (previous period)', [], 'Modules.Dashtrends.Admin'), $title),
                    'values' => $chart_data_compare[$key],
                    'disabled' => ($key == 'sales' ? false : true),
                ];
            }
            ++$i;
        }

        return $data;
    }

    /**
     * @param string $date_from
     * @param string $date_to
     * @param string|bool $granularity
     *
     * @return array|false|string
     *
     * @throws PrestaShopDatabaseException
     */
    protected function getTotalSalesWithRefunds($date_from, $date_to, $granularity = false)
    {
        $sales = AdminStatsController::getTotalSales($date_from, $date_to, $granularity);

        $refunds = $this->getRefunds($date_from, $date_to, $granularity);
        if (!$granularity) {
            return $sales - $refunds;
        }

        foreach ($sales as $key => $value) {
            if (!isset($refunds[$key])) {
                continue;
            }
            $sales[$key] -= $refunds[$key];
        }

        return $sales;
    }

    /**
     * @param string $date_from
     * @param string $date_to
     * @param string|bool $granularity
     *
     * @return array|false|string
     *
     * @throws PrestaShopDatabaseException
     */
    protected function getRefunds($date_from, $date_to, $granularity = false)
    {
        $restriction = Shop::addSqlRestriction(false, 'o');
        $sqlRefunds = 'SELECT'
            . (($granularity == 'day' || $granularity == 'month') ? ' LEFT(o.invoice_date, ' . ($granularity == 'day' ? 10 : 7) . ') AS date,' : '')
            . ' SUM((ps.total_products_tax_excl - ps.total_shipping_tax_excl) / ps.conversion_rate) AS orderSlips'
            . ' FROM `' . _DB_PREFIX_ . 'orders` o'
            . ' INNER JOIN `' . _DB_PREFIX_ . 'order_slip` ps ON o.id_order = ps.id_order'
            . ' LEFT JOIN `' . _DB_PREFIX_ . 'order_state` os ON o.current_state = os.id_order_state'
            . ' WHERE o.invoice_date BETWEEN "' . pSQL($date_from) . ' 00:00:00" AND "' . pSQL($date_to) . ' 23:59:59" AND os.logable = 1'
            . $restriction
            . (($granularity == 'day' || $granularity == 'month') ? 'GROUP BY LEFT(o.invoice_date, ' . ($granularity == 'day' ? 10 : 7) . ')' : '')
        ;
        $refunds = [];

        if ($granularity == 'day') {
            /* @phpstan-ignore-next-line */
            $result = DB::getInstance(_PS_USE_SQL_SLAVE_)->executeS($sqlRefunds);
            foreach ($result as $row) {
                if (!isset($refunds[strtotime($row['date'])])) {
                    $refunds[strtotime($row['date'])] = 0;
                }
                $refunds[strtotime($row['date'])] += $row['orderSlips'];
            }

            return $refunds;
        }

        if ($granularity == 'month') {
            /* @phpstan-ignore-next-line */
            $result = Db::getInstance(_PS_USE_SQL_SLAVE_)->executeS($sqlRefunds);
            foreach ($result as $row) {
                if (!isset($refunds[strtotime($row['date'] . '-01')])) {
                    $refunds[strtotime($row['date'] . '-01')] = 0;
                }
                $refunds[strtotime($row['date'] . '-01')] += $row['orderSlips'];
            }

            return $refunds;
        }

        /* @phpstan-ignore-next-line */
        return Db::getInstance(_PS_USE_SQL_SLAVE_)->getValue($sqlRefunds);
    }
}
