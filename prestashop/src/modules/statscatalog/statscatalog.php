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

class statscatalog extends Module
{
    /**
     * @var string
     */
    private $join = '';
    /**
     * @var string
     */
    private $where = '';

    public function __construct()
    {
        $this->name = 'statscatalog';
        $this->tab = 'administration';
        $this->version = '2.0.4';
        $this->author = 'PrestaShop';
        $this->need_instance = 0;

        parent::__construct();

        $this->displayName = $this->trans('Catalog statistics', [], 'Modules.Statscatalog.Admin');
        $this->description = $this->trans('Enrich your stats, have a look at your catalog’s general statistics.', [], 'Modules.Statscatalog.Admin');
        $this->ps_versions_compliancy = ['min' => '1.7.6.0', 'max' => _PS_VERSION_];
    }

    public function install()
    {
        return parent::install() && $this->registerHook('displayAdminStatsModules');
    }

    public function getQuery1()
    {
        $sql = 'SELECT COUNT(DISTINCT p.`id_product`) AS total, SUM(product_shop.`price`) / COUNT(product_shop.`price`) AS average_price, COUNT(DISTINCT i.`id_image`) AS images
				FROM `' . _DB_PREFIX_ . 'product` p
				' . Shop::addSqlAssociation('product', 'p') . '
				LEFT JOIN `' . _DB_PREFIX_ . 'image` i ON i.`id_product` = p.`id_product`
				' . $this->join . '
				WHERE product_shop.`active` = 1
					' . $this->where;

        return Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getRow($sql);
    }

    public function getTotalPageViewed()
    {
        return Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
		SELECT SUM(pv.`counter`)
		FROM `' . _DB_PREFIX_ . 'product` p
		' . Shop::addSqlAssociation('product', 'p') . '
		LEFT JOIN `' . _DB_PREFIX_ . 'page` pa ON p.`id_product` = pa.`id_object`
		LEFT JOIN `' . _DB_PREFIX_ . 'page_type` pt ON (pt.`id_page_type` = pa.`id_page_type` AND pt.`name` IN ("product.php", "product"))
		LEFT JOIN `' . _DB_PREFIX_ . 'page_viewed` pv ON pv.`id_page` = pa.`id_page`
		' . $this->join . '
		WHERE product_shop.`active` = 1
		' . $this->where);
    }

    public function getTotalProductViewed()
    {
        return Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
		SELECT COUNT(DISTINCT pa.`id_object`)
		FROM `' . _DB_PREFIX_ . 'page_viewed` pv
		LEFT JOIN `' . _DB_PREFIX_ . 'page` pa ON pv.`id_page` = pa.`id_page`
		LEFT JOIN `' . _DB_PREFIX_ . 'page_type` pt ON pt.`id_page_type` = pa.`id_page_type`
		LEFT JOIN `' . _DB_PREFIX_ . 'product` p ON p.`id_product` = pa.`id_object`
		' . Shop::addSqlAssociation('product', 'p') . '
		' . $this->join . '
		WHERE pt.`name` IN ("product.php", "product")
		AND product_shop.`active` = 1
		' . $this->where);
    }

    public function getTotalBought()
    {
        return Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->getValue('
		SELECT SUM(od.`product_quantity`)
		FROM `' . _DB_PREFIX_ . 'orders` o
		LEFT JOIN `' . _DB_PREFIX_ . 'order_detail` od ON o.`id_order` = od.`id_order`
		LEFT JOIN `' . _DB_PREFIX_ . 'product` p ON p.`id_product` = od.`product_id`
		' . $this->join . '
		WHERE o.valid = 1
		' . $this->where);
    }

    public function getProductsNB($id_lang)
    {
        $sql = 'SELECT p.`id_product`
				FROM `' . _DB_PREFIX_ . 'orders` o
				LEFT JOIN `' . _DB_PREFIX_ . 'order_detail` od ON o.`id_order` = od.`id_order`
				LEFT JOIN `' . _DB_PREFIX_ . 'product` p ON p.`id_product` = od.`product_id`
				' . Shop::addSqlAssociation('product', 'p') . '
				' . $this->join . '
				WHERE o.valid = 1
					' . $this->where . '
					AND product_shop.`active` = 1
				GROUP BY p.`id_product`';
        $precalc = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->executeS($sql);

        $precalc2 = [];
        foreach ($precalc as $array) {
            $precalc2[] = (int) $array['id_product'];
        }

        $sql = 'SELECT p.id_product, pl.name, pl.link_rewrite
				FROM `' . _DB_PREFIX_ . 'product` p
				' . Shop::addSqlAssociation('product', 'p') . '
				LEFT JOIN `' . _DB_PREFIX_ . 'product_lang` pl
					ON (pl.`id_product` = p.`id_product` AND pl.id_lang = ' . (int) $id_lang . Shop::addSqlRestrictionOnLang('pl') . ')
				' . $this->join . '
				WHERE product_shop.`active` = 1
					' . (count($precalc2) ? 'AND p.`id_product` NOT IN (' . implode(',', $precalc2) . ')' : '') . '
					' . $this->where;
        $result = Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->executeS($sql);

        return ['total' => Db::getInstance((bool) _PS_USE_SQL_SLAVE_)->NumRows(), 'result' => $result];
    }

    public function hookDisplayAdminStatsModules($params)
    {
        $categories = Category::getCategories($this->context->language->id, true, false);
        $product_token = Tools::getAdminToken('AdminProducts' . (int) Tab::getIdFromClassName('AdminProducts') . (int) $this->context->employee->id);
        $irow = 0;

        if ($id_category = (int) Tools::getValue('id_category')) {
            $this->join = ' LEFT JOIN `' . _DB_PREFIX_ . 'category_product` cp ON (cp.`id_product` = p.`id_product`)';
            $this->where = ' AND cp.`id_category` = ' . $id_category;
        }

        $result1 = $this->getQuery1();
        $total = $result1['total'];
        $average_price = $result1['average_price'];
        $total_pictures = $result1['images'];
        $average_pictures = $total ? $total_pictures / $total : 0;

        $never_bought = $this->getProductsNB($this->context->language->id);
        $total_nb = $never_bought['total'];
        $products_nb = $never_bought['result'];

        $total_bought = $this->getTotalBought();
        $average_purchase = $total ? ($total_bought / $total) : 0;

        $total_page_viewed = $this->getTotalPageViewed();
        $average_viewed = $total ? ($total_page_viewed / $total) : 0;
        $conversion = number_format((float) ($total_page_viewed ? ($total_bought / $total_page_viewed) : 0), 2, '.', '');
        if ($conversion_reverse = number_format((float) ($total_bought ? ($total_page_viewed / $total_bought) : 0), 2, '.', '')) {
            $conversion .= $this->trans('(1 purchase / %d visits)', [$conversion_reverse], 'Modules.Statscatalog.Admin');
        }

        $total_nv = $total - $this->getTotalProductViewed();

        $html = '
		<script type="text/javascript">$(\'#calendar\').slideToggle();</script>
			<div class="panel-heading">
				' . $this->displayName . '
			</div>
			<form action="#" method="post" id="categoriesForm" class="form-horizontal">
				<div class="row row-margin-bottom">
					<label class="control-label col-lg-3">
						' . $this->trans('Choose a category', [], 'Modules.Statscatalog.Admin') . '
					</label>
					<div class="col-lg-6">
						<select name="id_category" onchange="$(\'#categoriesForm\').submit();">
							<option value="0">' . $this->trans('All', [], 'Admin.Actions') . '</option>';
        foreach ($categories as $category) {
            $html .= '<option value="' . $category['id_category'] . '"' . ($id_category == $category['id_category'] ? ' selected="selected"' : '') . '>' .
                $category['name'] . '
							</option>';
        }
        $html .= '
						</select>
					</div>
				</div>
			</form>
			<ul class="list-group">
				<li class="list-group-item">' . $this->returnLine($this->trans('Products available:', [], 'Modules.Statscatalog.Admin'), '<span class="badge">' . (int) $total) . '</span></li>
				<li class="list-group-item">' . $this->returnLine($this->trans('Average price (base price):', [], 'Modules.Statscatalog.Admin'), '<span class="badge">' . $this->context->getCurrentLocale()->formatPrice($average_price, $this->context->currency->iso_code)) . '</span></li>
				<li class="list-group-item">' . $this->returnLine($this->trans('Product pages viewed:', [], 'Modules.Statscatalog.Admin'), '<span class="badge">' . (int) $total_page_viewed) . '</span></li>
				<li class="list-group-item">' . $this->returnLine($this->trans('Products bought:', [], 'Admin.Global'), '<span class="badge">' . (int) $total_bought) . '</span></li>
				<li class="list-group-item">' . $this->returnLine($this->trans('Average number of page visits:', [], 'Modules.Statscatalog.Admin'), '<span class="badge">' . number_format((float) $average_viewed, 2, '.', '')) . '</span></li>
				<li class="list-group-item">' . $this->returnLine($this->trans('Average number of purchases:', [], 'Modules.Statscatalog.Admin'), '<span class="badge">' . number_format((float) $average_purchase, 2, '.', '')) . '</span></li>
				<li class="list-group-item">' . $this->returnLine($this->trans('Images available:', [], 'Modules.Statscatalog.Admin'), '<span class="badge">' . (int) $total_pictures) . '</span></li>
				<li class="list-group-item">' . $this->returnLine($this->trans('Average number of images:', [], 'Modules.Statscatalog.Admin'), '<span class="badge">' . number_format((float) $average_pictures, 2, '.', '')) . '</span></li>
				<li class="list-group-item">' . $this->returnLine($this->trans('Products never viewed:', [], 'Modules.Statscatalog.Admin'), '<span class="badge">' . (int) $total_nv . ' / ' . (int) $total) . '</span></li>
				<li class="list-group-item">' . $this->returnLine($this->trans('Products never purchased:', [], 'Modules.Statscatalog.Admin'), '<span class="badge">' . (int) $total_nb . ' / ' . (int) $total) . '</span></li>
				<li class="list-group-item">' . $this->returnLine($this->trans('Conversion rate*:', [], 'Modules.Statscatalog.Admin'), '<span class="badge">' . $conversion) . '</span></li>
			</ul>
			<div class="row row-margin-bottom">
				<p>
					<i class="icon-asterisk"></i>' . $this->trans('Defines the average conversion rate for the product page. It is possible to purchase a product without viewing the product page, so this rate can be greater than 1.', [], 'Modules.Statscatalog.Admin') . '
				</p>
			</div>';

        if (count($products_nb) && count($products_nb) < 50) {
            $html .= '
				<div class="panel-heading">' . $this->trans('Products never purchased', [], 'Modules.Statscatalog.Admin') . '</div>
				<table class="table">
					<thead>
						<tr>
							<th><span class="title_box active">' . $this->trans('ID', [], 'Admin.Global') . '</span></th>
							<th><span class="title_box active">' . $this->trans('Name', [], 'Admin.Global') . '</span></th>
							<th><span class="title_box active">' . $this->trans('Edit / View', [], 'Modules.Statscatalog.Admin') . '</span></th>
						</tr>
					</thead>
					<tbody>';
            foreach ($products_nb as $product) {
                $html .= '
					<tr' . ($irow++ % 2 ? ' class="alt_row"' : '') . '>
						<td>' . $product['id_product'] . '</td>
						<td>' . $product['name'] . '</td>
						<td class="left">
							<div class="btn-group btn-group-action">
								<a class="btn btn-default" href="' . Tools::safeOutput('index.php?controller=AdminProducts&id_product=' . $product['id_product'] . '&addproduct&token=' . $product_token) . '" target="_blank">
									<i class="icon-edit"></i> ' . $this->trans('Edit', [], 'Admin.Global') . '
								</a>
								<button data-toggle="dropdown" class="btn btn-default dropdown-toggle" type="button">
									<span class="caret">&nbsp;</span>
								</button>
								<ul class="dropdown-menu">
									<li>
										<a href="' . Tools::safeOutput($this->context->link->getProductLink($product['id_product'], $product['link_rewrite'])) . '" target="_blank">
											<i class="icon-eye-open"></i> ' . $this->trans('View', [], 'Admin.Global') . '
										</a>
									</li>
								</ul>
							</div>
						</td>
					</tr>';
            }
            $html .= '
					</tbody>
				</table>';
        }

        return $html;
    }

    private function returnLine($label, $data)
    {
        return $label . $data;
    }
}
