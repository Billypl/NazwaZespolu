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
var dashtrends_data;
var dashtrends_chart;

function line_chart_trends(widget_name, chart_details)
{
	if (chart_details.data[0].values.length <= 1)
		$('#dash_trends_chart1').hide();
	else
		$('#dash_trends_chart1').show();
	nv.addGraph(function() {
		var chart = nv.models.lineChart()
			.useInteractiveGuideline(true)
			.x(function(d) { return (d !== undefined ? d[0] : 0); })
			.y(function(d) { return (d !== undefined ? parseInt(d[1]) : 0); })
			.margin({left: 80});

		chart.xAxis.tickFormat(function(d) {
			date = new Date(d*1000);
			return date.format(chart_details['date_format']);
		});

		first_data = new Array();
		$.each(chart_details.data, function(index, value) {
			if (value.id == 'sales' || value.id == 'sales_compare')
			{
				if (value.id == 'sales')
					$('#dashtrends_toolbar dl:first').css('background-color', chart_details.data[index].color).addClass('active');
				first_data.push(chart_details.data[index]);
			}
		});

		chart.yAxis.tickFormat(function(d) {
			return formatCurrency(parseFloat(d), currency_format, currency_sign, currency_blank);
		});

		dashtrends_data = chart_details.data;
		dashtrends_chart = chart;

		d3.select('#dash_trends_chart1 svg')
			.datum(first_data)
			.call(chart);
		nv.utils.windowResize(chart.update);

		return chart;
	});
}

function selectDashtrendsChart(element, type)
{
	$('#dashtrends_toolbar dl').removeClass('active');
	current_charts = new Array();
	$.each(dashtrends_data, function(index, value) {
		if (value.id == type || value.id == type + '_compare') {
			if (value.id == type) {
				$(element).siblings().css('background-color', 'inherit').removeClass('active');
				$(element).css('background-color', dashtrends_data[index].color).addClass('active');
			}

			current_charts.push(dashtrends_data[index]);
			value.disabled = false;
		}
	});

	dashtrends_chart.yAxis.tickFormat(d3.format('.f'));

	if (type == 'sales' || type == 'average_cart_value' || type == 'net_profits')
		dashtrends_chart.yAxis.tickFormat(function(d) {
			return formatCurrency(parseFloat(d), currency_format, currency_sign, currency_blank);
		});

	if (type == 'conversion_rate')
		dashtrends_chart.yAxis.tickFormat(function(d) {
			return d3.round(d*100, 2)+' %';
		});

	d3.select('#dash_trends_chart1 svg')
		.datum(current_charts)
		.call(dashtrends_chart);
}

$(document).ready(function(){
    $('dl').tooltip();
});
