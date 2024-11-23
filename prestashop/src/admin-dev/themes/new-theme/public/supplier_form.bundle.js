(()=>{"use strict";var e={16654:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),
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
 */
t.default={supplierCountrySelect:"#supplier_id_country",supplierStateSelect:"#supplier_id_state",supplierStateBlock:".js-supplier-state",supplierDniInput:"#supplier_dni",supplierDniInputLabel:'label[for="supplier_dni"]'}}},t={};function p(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,p),r.exports}var n,o,r;o=p(16654),r=(n=o)&&n.__esModule?n:{default:n},
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
                    */
(0,window.$)(document).ready((function(){new window.prestashop.component.ChoiceTree("#supplier_shop_association").enableAutoCheckChildren(),new window.prestashop.component.CountryStateSelectionToggler(r.default.supplierCountrySelect,r.default.supplierStateSelect,r.default.supplierStateBlock),new window.prestashop.component.CountryDniRequiredToggler(r.default.supplierCountrySelect,r.default.supplierDniInput,r.default.supplierDniInputLabel),window.prestashop.component.initComponents(["TinyMCEEditor","TranslatableInput","TranslatableField"]),new window.prestashop.component.TaggableField({tokenFieldSelector:"input.js-taggable-field",options:{createTokensOnBlur:!0}})})),window.supplier_form={}})();