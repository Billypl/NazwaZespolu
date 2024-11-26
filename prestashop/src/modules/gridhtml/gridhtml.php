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

class GridHtml extends ModuleGridEngine
{
    /**
     * @var array
     */
    private $_values;
    /**
     * @var array
     */
    private static $_columns;
    /**
     * @var string
     */
    public $_title;
    /**
     * @var int
     */
    public $_width;
    /**
     * @var int
     */
    public $_height;
    /**
     * @var int
     */
    public $_totalCount;
    /**
     * @var int
     */
    public $_start;
    /**
     * @var int
     */
    public $_limit;

    /**
     * GridHtml constructor.
     *
     * @param string|null $type
     */
    public function __construct($type = null)
    {
        if ($type != null) {
            parent::__construct($type);
        } else {
            $this->name = 'gridhtml';
            $this->tab = 'administration';
            $this->version = '2.0.3';
            $this->author = 'PrestaShop';
            $this->need_instance = 0;

            Module::__construct();

            $this->displayName = $this->trans('Simple HTML table display', [], 'Modules.Gridhtml.Admin');
            $this->description = $this->trans('Just allow statistics to be displayed (and therefore analyzed) on your back office.', [], 'Modules.Gridhtml.Admin');
            $this->ps_versions_compliancy = ['min' => '1.7.1.0', 'max' => _PS_VERSION_];
        }
    }

    public function install()
    {
        return parent::install() and $this->registerHook('GridEngine');
    }

    /**
     * @param array $params
     * @param string $grider
     */
    public static function hookGridEngine($params, $grider)
    {
        self::$_columns = $params['columns'];
        if (!isset($params['emptyMsg'])) {
            $params['emptyMsg'] = 'Empty';
        }

        $customParams = '';
        if (isset($params['customParams'])) {
            foreach ($params['customParams'] as $name => $value) {
                $customParams .= '&' . $name . '=' . urlencode($value);
            }
        }

        $html = '
		<table class="table" id="grid_1">
			<thead>
				<tr>';
        foreach ($params['columns'] as $column) {
            $html .= '<th class="center"><span class="title_box active">' . $column['header'] . '</span></th>';
        }
        $html .= '</tr>
			</thead>
			<tbody></tbody>
			<tfoot><tr><th colspan="' . count($params['columns']) . '"></th></tr></tfoot>
		</table>
		<script type="text/javascript">
			function getGridData(url)
			{
				$("#grid_1 tbody").html("<tr><td style=\"text-align:center\" colspan=\"" + ' . count($params['columns']) . ' + "\"><img src=\"../img/loadingAnimation.gif\" /></td></tr>");
				$.get(url, "", function(json) {
					$("#grid_1 tbody").html("");
					var array = $.parseJSON(json);
					$("#grid_1 tfoot tr th").html("' . addslashes($params['pagingMessage']) . '");
					$("#grid_1 tfoot tr th").html($("#grid_1 tfoot tr th").html().replace("{0}", array["from"]));
					$("#grid_1 tfoot tr th").html($("#grid_1 tfoot tr th").html().replace("{1}", array["to"]));
					$("#grid_1 tfoot tr th").html($("#grid_1 tfoot tr th").html().replace("{2}", array["total"]));

					if (array["from"] > 1)
						$("#grid_1 tfoot tr th").html($("#grid_1 tfoot tr th").html() + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style=\\"cursor:pointer;text-decoration:none\\" onclick=\\"gridPrevPage(\'"+ url +"\');\\">&lt;&lt;</a>");
					if (array["to"] < array["total"])
						$("#grid_1 tfoot tr th").html($("#grid_1 tfoot tr th").html() + " | <a style=\\"cursor:pointer;text-decoration:none\\" onclick=\\"gridNextPage(\'"+ url +"\');\\">&gt;&gt;</a>");
					var values = array["values"];
					if (values.length > 0)
						$.each(values, function(index, row){
							var newLine = "<tr>";';
        foreach ($params['columns'] as $column) {
            $html .= '	newLine += "<td' . (isset($column['align']) ? ' align=\"' . $column['align'] . '\"' : '') . '>" + row["' . $column['dataIndex'] . '"] + "</td>";';
        }
        if (!isset($params['defaultSortColumn'])) {
            $params['defaultSortColumn'] = false;
        }
        if (!isset($params['defaultSortDirection'])) {
            $params['defaultSortDirection'] = false;
        }
        $html .= '		$("#grid_1 tbody").append(newLine);
						});
					else
						$("#grid_1 tbody").append("<tr><td class=\"center\" colspan=\"" + ' . count($params['columns']) . ' + "\">' . $params['emptyMsg'] . '</td></tr>");
				});
			}

			function gridNextPage(url)
			{
				var from = url.match(/&start=[0-9]+/i);
				if (from && from[0] && parseInt(from[0].replace("&start=", "")) > 0)
					from = "&start=" + (parseInt(from[0].replace("&start=", "")) + 40);
				else
					from = "&start=40";
				url = url.replace(/&start=[0-9]+/i, "") + from;
				getGridData(url);
			}

			function gridPrevPage(url)
			{
				var from = url.match(/&start=[0-9]+/i);
				if (from && from[0] && parseInt(from[0].replace("&start=", "")) > 0)
				{
					var fromInt = parseInt(from[0].replace("&start=", "")) - 40;
					if (fromInt > 0)
						from = "&start=" + fromInt;
					else
						from = "&start=0";
				}
				else
					from = "&start=0";
				url = url.replace(/&start=[0-9]+/i, "") + from;
				getGridData(url);
			}

			$(document).ready(function(){getGridData("' . $grider . '&sort=' . urlencode($params['defaultSortColumn']) . '&dir=' . urlencode($params['defaultSortDirection']) . $customParams . '");});
		</script>';

        return $html;
    }

    public function setColumnsInfos(&$infos)
    {
    }

    /**
     * @param array $values
     */
    public function setValues($values)
    {
        $this->_values = $values;
    }

    /**
     * @param string $title
     */
    public function setTitle($title)
    {
        $this->_title = $title;
    }

    /**
     * @param int $width
     * @param int $height
     */
    public function setSize($width, $height)
    {
        $this->_width = $width;
        $this->_height = $height;
    }

    /**
     * @param int $totalCount
     */
    public function setTotalCount($totalCount)
    {
        $this->_totalCount = $totalCount;
    }

    /**
     * @param int $start
     * @param int $limit
     */
    public function setLimit($start, $limit)
    {
        $this->_start = (int) $start;
        $this->_limit = (int) $limit;
    }

    public function render()
    {
        echo json_encode([
            'total' => $this->_totalCount,
            'from' => min($this->_start + 1, $this->_totalCount),
            'to' => min($this->_start + $this->_limit, $this->_totalCount),
            'values' => $this->_values,
        ]);
    }
}
