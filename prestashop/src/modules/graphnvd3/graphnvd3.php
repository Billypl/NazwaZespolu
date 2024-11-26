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

class GraphNvD3 extends ModuleGraphEngine
{
    private $_width;
    private $_height;
    private $_values;
    private $_legend;
    private $_titles;

    public function __construct($type = null)
    {
        if ($type !== null) {
            parent::__construct($type);

            return;
        }

        $this->name = 'graphnvd3';
        $this->tab = 'administration';
        $this->version = '2.0.3';
        $this->author = 'PrestaShop';
        $this->need_instance = 0;

        Module::__construct();

        $this->displayName = $this->trans('NVD3 Charts', [], 'Modules.Graphnvd3.Admin');
        $this->description = $this->trans('Enable the NVD3 charting code for your own uses, providing you with ever so useful graphs.', [], 'Modules.Graphnvd3.Admin');
        $this->ps_versions_compliancy = ['min' => '1.7.1.0', 'max' => _PS_VERSION_];
    }

    public function install()
    {
        return parent::install() && $this->registerHook('GraphEngine') && $this->registerHook('actionAdminControllerSetMedia');
    }

    public function hookActionAdminControllerSetMedia($params)
    {
        $admin_webpath = str_ireplace(_PS_ROOT_DIR_, '', _PS_ADMIN_DIR_);
        $admin_webpath = preg_replace('/^' . preg_quote(DIRECTORY_SEPARATOR, '/') . '/', '', $admin_webpath);

        $this->context->controller->addJS([
            _PS_JS_DIR_ . 'vendor/d3.v3.min.js',
            __PS_BASE_URI__ . $admin_webpath . '/themes/' . $this->context->employee->bo_theme . '/js/vendor/nv.d3.min.js',
        ]);
        $this->context->controller->addCSS(__PS_BASE_URI__ . $admin_webpath . '/themes/' . $this->context->employee->bo_theme . '/css/vendor/nv.d3.css');
    }

    public static function hookGraphEngine($params, $drawer)
    {
        static $divid = 1;

        if (strpos($params['width'], '%') !== false) {
            $params['width'] = (int) preg_replace('/\s*%\s*/', '', $params['width']) . '%';
        } else {
            $params['width'] = (int) $params['width'] . 'px';
        }

        $nvd3_func = [
            'line' => '
				nv.models.lineChart()',
            'pie' => '
				nv.models.pieChart()
					.x(function(d) { return d.label; })
					.y(function(d) { return d.value; })
					.showLabels(true)
					.showLegend(false)',
        ];

        return '
		<div id="nvd3_chart_' . $divid . '" class="chart with-transitions">
			<svg style="width:' . $params['width'] . ';height:' . (int) $params['height'] . 'px"></svg>
		</div>
		<script>
			$.ajax({
			url: "' . addslashes($drawer) . '",
			dataType: "json",
			type: "GET",
			cache: false,
			headers: {"cache-control": "no-cache"},
			success: function(jsonData){
				nv.addGraph(function(){
					var chart = ' . $nvd3_func[$params['type']] . ';

					if (jsonData.axisLabels.xAxis != null)
						chart.xAxis.axisLabel(jsonData.axisLabels.xAxis);
					if (jsonData.axisLabels.yAxis != null)
						chart.yAxis.axisLabel(jsonData.axisLabels.yAxis);

					d3.select("#nvd3_chart_' . ($divid++) . ' svg")
						.datum(jsonData.data)
						.transition().duration(500)
						.call(chart);

					nv.utils.windowResize(chart.update);

					return chart;
				});
			}
		});
		</script>';
    }

    public function createValues($values)
    {
        $this->_values = $values;
    }

    public function setSize($width, $height)
    {
        $this->_width = $width;
        $this->_height = $height;
    }

    public function setLegend($legend)
    {
        $this->_legend = $legend;
    }

    public function setTitles($titles)
    {
        $this->_titles = $titles;
    }

    public function draw()
    {
        $array = [
            'axisLabels' => ['xAxis' => $this->_titles['x'], 'yAxis' => $this->_titles['y']],
            'data' => [],
        ];

        if (!isset($this->_values[0]) || !is_array($this->_values[0])) {
            $nvd3_values = [];
            if (Tools::getValue('type') == 'pie') {
                foreach ($this->_values as $x => $y) {
                    $nvd3_values[] = ['label' => $this->_legend[$x], 'value' => $y];
                }
                $array['data'] = $nvd3_values;
            } else {
                foreach ($this->_values as $x => $y) {
                    $nvd3_values[] = ['x' => $x, 'y' => $y];
                }
                $array['data'][] = ['values' => $nvd3_values, 'key' => $this->_titles['main']];
            }
        } else {
            foreach ($this->_values as $layer => $gross_values) {
                $nvd3_values = [];
                foreach ($gross_values as $x => $y) {
                    $nvd3_values[] = ['x' => $x, 'y' => $y];
                }
                $array['data'][] = ['values' => $nvd3_values, 'key' => $this->_titles['main'][$layer]];
            }
        }
        echo preg_replace('/"([0-9]+)"/', '$1', json_encode($array));
    }
}
