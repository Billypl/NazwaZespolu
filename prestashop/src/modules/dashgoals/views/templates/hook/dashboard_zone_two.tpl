{**
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
 *}
<div class="clearfix"></div>
<script>
	var currency_format = {$currency->format|intval};
	var currency_sign = '{$currency->sign|addslashes}';
	var currency_blank = {$currency->blank|intval};
	var priceDisplayPrecision = 0;
	var dashgoals_year = {$goals_year|intval};
	var dashgoals_ajax_link = '{$dashgoals_ajax_link|addslashes}';
</script>

<section id="dashgoals" class="panel widget">
	<header class="panel-heading">
		<i class="icon-bar-chart"></i>
		{l s='Forecast' d='Modules.Dashgoals.Admin'}
		<span id="dashgoals_title" class="badge">{$goals_year}</span>
		<span class="btn-group">
			<a href="javascript:void(0);" onclick="dashgoals_changeYear('backward');" class="btn btn-default btn-xs"><i class="icon-backward"></i></a>
			<a href="javascript:void(0);" onclick="dashgoals_changeYear('forward');" class="btn btn-default btn-xs"><i class="icon-forward"></i></a>
		</span>

		<span class="panel-heading-action">
			<a class="list-toolbar-btn" href="javascript:void(0);" onclick="toggleDashConfig('dashgoals');" title="{l s='Configure' d='Admin.Global'}">
				<i class="process-icon-configure"></i>
			</a>
			<a class="list-toolbar-btn" href="javascript:void(0);" onclick="refreshDashboard('dashgoals');" title="{l s='Refresh' d='Admin.Actions'}">
				<i class="process-icon-refresh"></i>
			</a>
		</span>
	</header>
	{include file='./config.tpl'}
	<section class="loading">
		<div class="btn-group" data-toggle="buttons">
			<label class="btn btn-default">
				<input type="radio" name="options" onchange="selectDashgoalsChart('traffic');"/><i class="icon-circle" style="color:{$colors[0]}"></i> {l s='Traffic' d='Modules.Dashgoals.Admin'}
			</label>
			<label class="btn btn-default">
				<input type="radio" name="options" onchange="selectDashgoalsChart('conversion');"/><i class="icon-circle" style="color:{$colors[1]}"></i> {l s='Conversion' d='Modules.Dashgoals.Admin'}
			</label>
			<label class="btn btn-default">
				<input type="radio" name="options" onchange="selectDashgoalsChart('avg_cart_value');"/><i class="icon-circle" style="color:{$colors[2]}"></i> {l s='Average Cart Value' d='Modules.Dashgoals.Admin'}
			</label>
			<label class="btn btn-default active">
				<input type="radio" name="options" onchange="selectDashgoalsChart('sales');"/><i class="icon-circle" style="color:{$colors[3]}"></i> {l s='Sales' d='Admin.Global'}
			</label>
		</div>
		<div id="dash_goals_chart1" class="chart with-transitions">
			<svg></svg>
		</div>
	</section>
</section>
