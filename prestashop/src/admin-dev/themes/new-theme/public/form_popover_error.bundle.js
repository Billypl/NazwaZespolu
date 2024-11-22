(()=>{"use strict";var r=window.$;
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
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
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */r((function(){r('[data-toggle="form-popover-error"]').popover({html:!0,content:function(){return t(this)}});var o=function(r,o){return r.offset().left-o.offset().left},t=function(o){var t=r(o).data("id");return r('.js-popover-error-content[data-id="'+t+'"]').html()};r(document).on("shown.bs.popover",'[data-toggle="form-popover-error"]',(function(t){return function(t){var e=r(t.currentTarget).closest(".form-group"),n=e.find(".invalid-feedback-container"),f=e.find(".form-popover-error"),i=n.width();f.css("width",i);var a=o(n,f);f.css("left",a+"px")}(t)}))})),window.form_popover_error={}})();