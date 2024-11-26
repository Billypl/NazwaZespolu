(()=>{var e={4110:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});
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
var n=window.$;t.default=function(e,t){n.post(e).then((function(){return window.location.assign(t)}))}},61353:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,s=function(){function e(t){(0,r.default)(this,e),this.selector=".ps-sortable-column",this.columns=a(t).find(this.selector)}return(0,o.default)(e,[{key:"attach",value:function(){var e=this;this.columns.on("click",(function(t){var n=a(t.delegateTarget);e.sortByColumn(n,e.getToggledSortDirection(n))}))}},{key:"sortBy",value:function(e,t){var n=this.columns.is('[data-sort-col-name="'+e+'"]');if(!n)throw new Error('Cannot sort by "'+e+'": invalid column');this.sortByColumn(n,t)}},{key:"sortByColumn",value:function(e,t){window.location=this.getUrl(e.data("sortColName"),"desc"===t?"desc":"asc",e.data("sortPrefix"))}},{key:"getToggledSortDirection",value:function(e){return"asc"===e.data("sortDirection")?"desc":"asc"}},{key:"getUrl",value:function(e,t,n){var r=new URL(window.location.href),o=r.searchParams;return n?(o.set(n+"[orderBy]",e),o.set(n+"[sortOrder]",t)):(o.set("orderBy",e),o.set("sortOrder",t)),r.toString()}}]),e}();t.default=s},76544:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventEmitter=void 0;var r,o=n(17187),i=(r=o)&&r.__esModule?r:{default:r};var a=t.EventEmitter=new i.default;
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
                                                                   */t.default=a},19078:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,s=function(){function e(t){var n=this;return(0,r.default)(this,e),this.$container=a(t),this.$container.on("click",".js-input-wrapper",(function(e){var t=a(e.currentTarget);n.toggleChildTree(t)})),this.$container.on("click",".js-toggle-choice-tree-action",(function(e){var t=a(e.currentTarget);n.toggleTree(t)})),{enableAutoCheckChildren:function(){return n.enableAutoCheckChildren()},enableAllInputs:function(){return n.enableAllInputs()},disableAllInputs:function(){return n.disableAllInputs()}}}return(0,o.default)(e,[{key:"enableAutoCheckChildren",value:function(){this.$container.on("change",'input[type="checkbox"]',(function(e){var t=a(e.currentTarget);t.closest("li").find('ul input[type="checkbox"]').prop("checked",t.is(":checked"))}))}},{key:"enableAllInputs",value:function(){this.$container.find("input").removeAttr("disabled")}},{key:"disableAllInputs",value:function(){this.$container.find("input").attr("disabled","disabled")}},{key:"toggleChildTree",value:function(e){var t=e.closest("li");t.hasClass("expanded")?t.removeClass("expanded").addClass("collapsed"):t.hasClass("collapsed")&&t.removeClass("collapsed").addClass("expanded")}},{key:"toggleTree",value:function(e){var t=e.closest(".js-choice-tree-container"),n=e.data("action"),r={addClass:{expand:"expanded",collapse:"collapsed"},removeClass:{expand:"collapsed",collapse:"expanded"},nextAction:{expand:"collapse",collapse:"expand"},text:{expand:"collapsed-text",collapse:"expanded-text"},icon:{expand:"collapsed-icon",collapse:"expanded-icon"}};t.find("li").each((function(e,t){var o=a(t);o.hasClass(r.removeClass[n])&&o.removeClass(r.removeClass[n]).addClass(r.addClass[n])})),e.data("action",r.nextAction[n]),e.find(".material-icons").text(e.data(r.icon[n])),e.find(".js-toggle-text").text(e.data(r.text[n]))}}]),e}();t.default=s},91781:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(68840));function a(e){return e&&e.__esModule?e:{default:e}}var s=window.$,l=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=this;e.getContainer().on("click",".js-submit-row-action",(function(n){n.preventDefault();var r=s(n.currentTarget),o=r.data("confirmMessage"),i=r.data("title"),a=r.data("method");if(i)t.showConfirmModal(r,e,o,i,a);else{if(o.length&&!window.confirm(o))return;t.postForm(r,a)}}))}},{key:"postForm",value:function(e,t){var n=["GET","POST"].includes(t),r=s("<form>",{action:e.data("url"),method:n?t:"POST"}).appendTo("body");n||r.append(s("<input>",{type:"_hidden",name:"_method",value:t})),r.submit()}},{key:"showConfirmModal",value:function(e,t,n,r,o){var a=this,s=e.data("confirmButtonLabel"),l=e.data("closeButtonLabel"),u=e.data("confirmButtonClass");new i.default({id:t.getId()+"-grid-confirm-modal",confirmTitle:r,confirmMessage:n,confirmButtonLabel:s,closeButtonLabel:l,confirmButtonClass:u},(function(){return a.postForm(e,o)})).show()}}]),e}();
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
 */t.default=l},5595:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,s=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){this.handleBulkActionCheckboxSelect(e),this.handleBulkActionSelectAllCheckbox(e)}},{key:"handleBulkActionSelectAllCheckbox",value:function(e){var t=this;e.getContainer().on("change",".js-bulk-action-select-all",(function(n){var r=a(n.currentTarget).is(":checked");r?t.enableBulkActionsBtn(e):t.disableBulkActionsBtn(e),e.getContainer().find(".js-bulk-action-checkbox").prop("checked",r)}))}},{key:"handleBulkActionCheckboxSelect",value:function(e){var t=this;e.getContainer().on("change",".js-bulk-action-checkbox",(function(){e.getContainer().find(".js-bulk-action-checkbox:checked").length>0?t.enableBulkActionsBtn(e):t.disableBulkActionsBtn(e)}))}},{key:"enableBulkActionsBtn",value:function(e){e.getContainer().find(".js-bulk-actions-btn").prop("disabled",!1)}},{key:"disableBulkActionsBtn",value:function(e){e.getContainer().find(".js-bulk-actions-btn").prop("disabled",!0)}}]),e}();t.default=s},4499:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,s=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=this;e.getContainer().find("table.table").find(".ps-togglable-row").on("click",(function(e){e.preventDefault(),t.toggleValue(a(e.delegateTarget))}))}},{key:"toggleValue",value:function(e){var t=e.data("toggleUrl");this.submitAsForm(t)}},{key:"submitAsForm",value:function(e){a("<form>",{action:e,method:"POST"}).appendTo("body").submit()}}]),e}();t.default=s},2573:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,s=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=this;e.getHeaderContainer().on("click",".js-common_show_query-grid-action",(function(){return t.onShowSqlQueryClick(e)})),e.getHeaderContainer().on("click",".js-common_export_sql_manager-grid-action",(function(){return t.onExportSqlManagerClick(e)}))}},{key:"onShowSqlQueryClick",value:function(e){var t=a("#"+e.getId()+"_common_show_query_modal_form");this.fillExportForm(t,e);var n=a("#"+e.getId()+"_grid_common_show_query_modal");n.modal("show"),n.on("click",".btn-sql-submit",(function(){return t.submit()}))}},{key:"onExportSqlManagerClick",value:function(e){var t=a("#"+e.getId()+"_common_show_query_modal_form");this.fillExportForm(t,e),t.submit()}},{key:"fillExportForm",value:function(e,t){var n=t.getContainer().find(".js-grid-table").data("query");e.find('textarea[name="sql"]').val(n),e.find('input[name="name"]').val(this.getNameFromBreadcrumb())}},{key:"getNameFromBreadcrumb",value:function(){var e=a(".header-toolbar").find(".breadcrumb-item"),t="";return e.each((function(e,n){var r=a(n),o=r.find("a").length>0?r.find("a").text():r.text();t.length>0&&(t=t.concat(" > ")),t=t.concat(o)})),t}}]),e}();t.default=s},96803:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(4110));function a(e){return e&&e.__esModule?e:{default:e}}var s=window.$,l=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){e.getContainer().on("click",".js-reset-search",(function(e){(0,i.default)(s(e.currentTarget).data("url"),s(e.currentTarget).data("redirect"))}))}}]),e}();
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
 */t.default=l},91137:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=e.getContainer().find(".column-filters");t.find(".grid-search-button").prop("disabled",!0),t.find("input:not(.js-bulk-action-select-all), select").on("input dp.change",(function(){t.find(".grid-search-button").prop("disabled",!1),t.find(".js-grid-reset-button").prop("hidden",!1)}))}}]),e}();t.default=a},58899:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,s=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){this.initRowLinks(e),this.initConfirmableActions(e)}},{key:"initConfirmableActions",value:function(e){e.getContainer().on("click",".js-link-row-action",(function(e){var t=a(e.currentTarget).data("confirm-message");t.length&&!window.confirm(t)&&e.preventDefault()}))}},{key:"initRowLinks",value:function(e){a("tr",e.getContainer()).each((function(){var e=a(this);a(".js-link-row-action[data-clickable-row=1]:first",e).each((function(){var t=a(this),n=t.closest("td"),r=a("td.clickable",e).not(n),o=!1;r.addClass("cursor-pointer").mousedown((function(){a(window).mousemove((function(){o=!0,a(window).unbind("mousemove")}))})),r.mouseup((function(){var e=o;if(o=!1,a(window).unbind("mousemove"),!e){var n=t.data("confirm-message");n.length&&!window.confirm(n)||(document.location=t.attr("href"))}}))}))}))}}]),e}();t.default=s},92448:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(12424)),o=a(n(99663)),i=a(n(22600));function a(e){return e&&e.__esModule?e:{default:e}}n(73867);var s=window.$,l=function(){function e(){var t=this;return(0,o.default)(this,e),{extend:function(e){return t.extend(e)}}}return(0,i.default)(e,[{key:"extend",value:function(e){var t=this;this.grid=e,this.addIdsToGridTableRows(),e.getContainer().find(".js-grid-table").tableDnD({onDragClass:"position-row-while-drag",dragHandle:".js-drag-handle",onDrop:function(e,n){return t.handlePositionChange(n)}}),e.getContainer().find(".js-drag-handle").hover((function(){s(this).closest("tr").addClass("hover")}),(function(){s(this).closest("tr").removeClass("hover")}))}},{key:"handlePositionChange",value:function(e){var t=s(e).find(".js-"+this.grid.getId()+"-position:first"),n=t.data("update-url"),r=t.data("update-method"),o={positions:this.getRowsPositions()};this.updatePosition(n,o,r)}},{key:"getRowsPositions",value:function(){for(var e=JSON.parse(s.tableDnD.jsonize())[this.grid.getId()+"_grid_table"],t=[],n=void 0,r=0;r<e.length;r+=1)n=this.grid.getContainer().find("#"+e[r]),t.push({rowMarker:e[r],offset:n.data("dragAndDropOffset")});return this.computeMappingBetweenOldAndNewPositions(t)}},{key:"addIdsToGridTableRows",value:function(){var e=0;this.grid.getContainer().find(".js-grid-table .js-"+this.grid.getId()+"-position").each((function(t,n){var r=s(n),o="row_"+r.data("id")+"_"+r.data("position");r.closest("tr").attr("id",o),r.closest("td").addClass("js-drag-handle"),r.closest("tr").data("dragAndDropOffset",e),e+=1}))}},{key:"updatePosition",value:function(e,t,n){for(var r=["GET","POST"].includes(n),o=s("<form>",{action:e,method:r?n:"POST"}).appendTo("body"),i=t.positions.length,a=void 0,l=0;l<i;l+=1)a=t.positions[l],o.append(s("<input>",{type:"hidden",name:"positions["+l+"][rowId]",value:a.rowId}),s("<input>",{type:"hidden",name:"positions["+l+"][oldPosition]",value:a.oldPosition}),s("<input>",{type:"hidden",name:"positions["+l+"][newPosition]",value:a.newPosition}));r||o.append(s("<input>",{type:"hidden",name:"_method",value:n})),o.submit()}},{key:"computeMappingBetweenOldAndNewPositions",value:function(e){for(var t=/^row_(\d+)_(\d+)$/,n=Array(e.length).fill().map(Object),o=0;o<e.length;o+=1){var i=t.exec(e[o].rowMarker),a=(0,r.default)(i,3),s=a[1],l=a[2];n[o].rowId=s,n[o].oldPosition=parseInt(l,10),n[e[o].offset].newPosition=n[o].oldPosition}return n}}]),e}();
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
 */t.default=l},37758:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){e.getHeaderContainer().on("click",".js-common_refresh_list-grid-action",(function(){window.location.reload()}))}}]),e}();t.default=a},58630:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(61353));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=e.getContainer().find("table.table");new i.default(t).attach()}}]),e}();
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
      */t.default=s},17868:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(68840));function a(e){return e&&e.__esModule?e:{default:e}}var s=window.$,l=function(){function e(){var t=this;return(0,r.default)(this,e),{extend:function(e){return t.extend(e)}}}return(0,o.default)(e,[{key:"extend",value:function(e){var t=this;e.getContainer().on("click",".js-bulk-action-submit-btn",(function(n){t.submit(n,e)}))}},{key:"submit",value:function(e,t){var n=s(e.currentTarget),r=n.data("confirm-message"),o=n.data("confirmTitle");void 0!==r&&r.length>0?void 0!==o?this.showConfirmModal(n,t,r,o):window.confirm(r)&&this.postForm(n,t):this.postForm(n,t)}},{key:"showConfirmModal",value:function(e,t,n,r){var o=this,a=e.data("confirmButtonLabel"),s=e.data("closeButtonLabel"),l=e.data("confirmButtonClass");new i.default({id:t.getId()+"-grid-confirm-modal",confirmTitle:r,confirmMessage:n,confirmButtonLabel:a,closeButtonLabel:s,confirmButtonClass:l},(function(){return o.postForm(e,t)})).show()}},{key:"postForm",value:function(e,t){var n=s("#"+t.getId()+"_filter_form");n.attr("action",e.data("form-url")),n.attr("method",e.data("form-method")),n.submit()}}]),e}();
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
 */t.default=l},53277:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,s=function(){function e(t){(0,r.default)(this,e),this.id=t,this.$container=a("#"+this.id+"_grid")}return(0,o.default)(e,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(e){e.extend(this)}}]),e}();t.default=s},68840:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(85315),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e,t,n){var r=this,o=e.id,s=e.closable;this.modal=function(e){var t,n=e.id,r=void 0===n?"confirm-modal":n,o=e.confirmTitle,a=e.confirmMessage,s=void 0===a?"":a,l=e.closeButtonLabel,u=void 0===l?"Close":l,c=e.confirmButtonLabel,d=void 0===c?"Accept":c,f=e.confirmButtonClass,h=void 0===f?"btn-primary":f,p=e.customButtons,v=void 0===p?[]:p,g={};g.container=document.createElement("div"),g.container.classList.add("modal","fade"),g.container.id=r,g.dialog=document.createElement("div"),g.dialog.classList.add("modal-dialog"),g.content=document.createElement("div"),g.content.classList.add("modal-content"),g.header=document.createElement("div"),g.header.classList.add("modal-header"),o&&(g.title=document.createElement("h4"),g.title.classList.add("modal-title"),g.title.innerHTML=o);g.closeIcon=document.createElement("button"),g.closeIcon.classList.add("close"),g.closeIcon.setAttribute("type","button"),g.closeIcon.dataset.dismiss="modal",g.closeIcon.innerHTML="×",g.body=document.createElement("div"),g.body.classList.add("modal-body","text-left","font-weight-normal"),g.message=document.createElement("p"),g.message.classList.add("confirm-message"),g.message.innerHTML=s,g.footer=document.createElement("div"),g.footer.classList.add("modal-footer"),g.closeButton=document.createElement("button"),g.closeButton.setAttribute("type","button"),g.closeButton.classList.add("btn","btn-outline-secondary","btn-lg"),g.closeButton.dataset.dismiss="modal",g.closeButton.innerHTML=u,g.confirmButton=document.createElement("button"),g.confirmButton.setAttribute("type","button"),g.confirmButton.classList.add("btn",h,"btn-lg","btn-confirm-submit"),g.confirmButton.dataset.dismiss="modal",g.confirmButton.innerHTML=d,o?g.header.append(g.title,g.closeIcon):g.header.appendChild(g.closeIcon);return g.body.appendChild(g.message),(t=g.footer).append.apply(t,[g.closeButton].concat((0,i.default)(v),[g.confirmButton])),g.content.append(g.header,g.body,g.footer),g.dialog.appendChild(g.content),g.container.appendChild(g.dialog),g}(e),this.$modal=a(this.modal.container),this.show=function(){r.$modal.modal()},this.modal.confirmButton.addEventListener("click",t),this.$modal.modal({backdrop:!!s||"static",keyboard:void 0===s||s,closable:void 0===s||s,show:!1}),this.$modal.on("hidden.bs.modal",(function(){document.querySelector("#"+o).remove(),n&&n()})),document.body.appendChild(this.modal.container)};
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
var a=window.$},3010:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,s=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=e.getContainer();t.on("click",".js-remove-helper-block",(function(e){t.remove();var n=a(e.target),r=n.data("closeUrl"),o=n.data("cardName");r&&a.post(r,{close:1,name:o})}))}}]),e}();t.default=s},50204:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,s=function(){function e(t){(0,r.default)(this,e),this.id=t,this.$container=a("#"+this.id)}return(0,o.default)(e,[{key:"getContainer",value:function(){return this.$container}},{key:"addExtension",value:function(e){e.extend(this)}}]),e}();t.default=s},52666:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(99663),i=(r=o)&&r.__esModule?r:{default:r};
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
var a=window.$;t.default=function e(t){var n=t.tokenFieldSelector,r=t.options,o=void 0===r?{}:r;(0,i.default)(this,e),a(n).tokenfield(o)}},48473:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});
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
var n=window.$;t.default=function(e){var t=e.sourceElementSelector,r=e.destinationElementSelector,o=e.options,i=void 0===o?{eventName:"input"}:o;n(document).on(i.eventName,""+t,(function(e){n(r).val(window.str2url(n(e.currentTarget).val(),"UTF-8"))}))}},92526:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=n(76544);function a(e){return e&&e.__esModule?e:{default:e}}var s=window.$,l=function(){function e(t){var n=this;(0,r.default)(this,e);var o=t||{};return this.localeItemSelector=o.localeItemSelector||".js-locale-item",this.localeButtonSelector=o.localeButtonSelector||".js-locale-btn",this.localeInputSelector=o.localeInputSelector||".js-locale-input",this.selectedLocale=s(this.localeItemSelector).data("locale"),s("body").on("click",this.localeItemSelector,this.toggleLanguage.bind(this)),i.EventEmitter.on("languageSelected",this.toggleInputs.bind(this)),{localeItemSelector:this.localeItemSelector,localeButtonSelector:this.localeButtonSelector,localeInputSelector:this.localeInputSelector,refreshFormInputs:function(e){n.refreshInputs(e)},getSelectedLocale:function(){return n.selectedLocale}}}return(0,o.default)(e,[{key:"refreshInputs",value:function(e){this.selectedLocale&&i.EventEmitter.emit("languageSelected",{selectedLocale:this.selectedLocale,form:e})}},{key:"toggleLanguage",value:function(e){var t=s(e.target),n=t.closest("form");this.selectedLocale=t.data("locale"),this.refreshInputs(n)}},{key:"toggleInputs",value:function(e){var t=e.form;this.selectedLocale=e.selectedLocale;var n=t.find(this.localeButtonSelector),r=n.data("change-language-url");n.text(this.selectedLocale),t.find(this.localeInputSelector).addClass("d-none"),t.find(this.localeInputSelector+".js-locale-"+this.selectedLocale).removeClass("d-none"),r&&this.saveSelectedLanguage(r,this.selectedLocale)}},{key:"saveSelectedLanguage",value:function(e,t){s.post({url:e,data:{language_iso_code:t}})}}]),e}();
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
 */t.default=l},24043:(e,t,n)=>{e.exports={default:n(47185),__esModule:!0}},26378:(e,t,n)=>{e.exports={default:n(3597),__esModule:!0}},40863:(e,t,n)=>{e.exports={default:n(21035),__esModule:!0}},32242:(e,t,n)=>{e.exports={default:n(33391),__esModule:!0}},99663:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},22600:(e,t,n)=>{"use strict";t.__esModule=!0;var r,o=n(32242),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},12424:(e,t,n)=>{"use strict";t.__esModule=!0;var r=i(n(40863)),o=i(n(26378));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if(Array.isArray(e))return e;if((0,r.default)(Object(e)))return function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var s,l=(0,o.default)(e);!(r=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(i)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}},85315:(e,t,n)=>{"use strict";t.__esModule=!0;var r,o=n(24043),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,i.default)(e)}},47185:(e,t,n)=>{n(91867),n(2586),e.exports=n(34579).Array.from},3597:(e,t,n)=>{n(73871),n(91867),e.exports=n(46459)},21035:(e,t,n)=>{n(73871),n(91867),e.exports=n(89553)},33391:(e,t,n)=>{n(31477);var r=n(34579).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},85663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},79003:e=>{e.exports=function(){}},12159:(e,t,n)=>{var r=n(36727);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},57428:(e,t,n)=>{var r=n(7932),o=n(78728),i=n(16531);e.exports=function(e){return function(t,n,a){var s,l=r(t),u=o(l.length),c=i(a,u);if(e&&n!=n){for(;u>c;)if((s=l[c++])!=s)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===n)return e||c||0;return!e&&-1}}},14677:(e,t,n)=>{var r=n(32894),o=n(22939)("toStringTag"),i="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?n:i?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},32894:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},34579:e=>{var t=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=t)},52445:(e,t,n)=>{"use strict";var r=n(4743),o=n(83101);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},19216:(e,t,n)=>{var r=n(85663);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},8333:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},89666:(e,t,n)=>{e.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},97467:(e,t,n)=>{var r=n(36727),o=n(33938).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},73338:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},83856:(e,t,n)=>{var r=n(33938),o=n(34579),i=n(19216),a=n(41818),s=n(27069),l=function(e,t,n){var u,c,d,f=e&l.F,h=e&l.G,p=e&l.S,v=e&l.P,g=e&l.B,m=e&l.W,y=h?o:o[t]||(o[t]={}),b=y.prototype,w=h?r:p?r[t]:(r[t]||{}).prototype;for(u in h&&(n=t),n)(c=!f&&w&&void 0!==w[u])&&s(y,u)||(d=c?w[u]:n[u],y[u]=h&&"function"!=typeof w[u]?n[u]:g&&c?i(d,r):m&&w[u]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):v&&"function"==typeof d?i(Function.call,d):d,v&&((y.virtual||(y.virtual={}))[u]=d,e&l.R&&b&&!b[u]&&a(b,u,d)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},33938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},27069:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},41818:(e,t,n)=>{var r=n(4743),o=n(83101);e.exports=n(89666)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},54881:(e,t,n)=>{var r=n(33938).document;e.exports=r&&r.documentElement},33758:(e,t,n)=>{e.exports=!n(89666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(97467)("div"),"a",{get:function(){return 7}}).a}))},50799:(e,t,n)=>{var r=n(32894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},45991:(e,t,n)=>{var r=n(15449),o=n(22939)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||i[o]===e)}},36727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},95602:(e,t,n)=>{var r=n(12159);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&r(i.call(e)),t}}},33945:(e,t,n)=>{"use strict";var r=n(98989),o=n(83101),i=n(25378),a={};n(41818)(a,n(22939)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=r(a,{next:o(1,n)}),i(e,t+" Iterator")}},45700:(e,t,n)=>{"use strict";var r=n(16227),o=n(83856),i=n(57470),a=n(41818),s=n(15449),l=n(33945),u=n(25378),c=n(95089),d=n(22939)("iterator"),f=!([].keys&&"next"in[].keys()),h="keys",p="values",v=function(){return this};e.exports=function(e,t,n,g,m,y,b){l(n,t,g);var w,_,x,D=function(e){if(!f&&e in j)return j[e];switch(e){case h:case p:return function(){return new n(this,e)}}return function(){return new n(this,e)}},C=t+" Iterator",k=m==p,L=!1,j=e.prototype,O=j[d]||j["@@iterator"]||m&&j[m],S=O||D(m),T=m?k?D("entries"):S:void 0,M="Array"==t&&j.entries||O;if(M&&(x=c(M.call(new e)))!==Object.prototype&&x.next&&(u(x,C,!0),r||"function"==typeof x[d]||a(x,d,v)),k&&O&&O.name!==p&&(L=!0,S=function(){return O.call(this)}),r&&!b||!f&&!L&&j[d]||a(j,d,S),s[t]=S,s[C]=v,m)if(w={values:k?S:D(p),keys:y?S:D(h),entries:T},b)for(_ in w)_ in j||i(j,_,w[_]);else o(o.P+o.F*(f||L),t,w);return w}},96630:(e,t,n)=>{var r=n(22939)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},e(i)}catch(e){}return n}},85084:e=>{e.exports=function(e,t){return{value:t,done:!!e}}},15449:e=>{e.exports={}},16227:e=>{e.exports=!0},98989:(e,t,n)=>{var r=n(12159),o=n(57856),i=n(73338),a=n(58989)("IE_PROTO"),s=function(){},l=function(){var e,t=n(97467)("iframe"),r=i.length;for(t.style.display="none",n(54881).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),l=e.F;r--;)delete l.prototype[i[r]];return l()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[a]=e):n=l(),void 0===t?n:o(n,t)}},4743:(e,t,n)=>{var r=n(12159),o=n(33758),i=n(33206),a=Object.defineProperty;t.f=n(89666)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},57856:(e,t,n)=>{var r=n(4743),o=n(12159),i=n(46162);e.exports=n(89666)?Object.defineProperties:function(e,t){o(e);for(var n,a=i(t),s=a.length,l=0;s>l;)r.f(e,n=a[l++],t[n]);return e}},95089:(e,t,n)=>{var r=n(27069),o=n(66530),i=n(58989)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},12963:(e,t,n)=>{var r=n(27069),o=n(7932),i=n(57428)(!1),a=n(58989)("IE_PROTO");e.exports=function(e,t){var n,s=o(e),l=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);for(;t.length>l;)r(s,n=t[l++])&&(~i(u,n)||u.push(n));return u}},46162:(e,t,n)=>{var r=n(12963),o=n(73338);e.exports=Object.keys||function(e){return r(e,o)}},83101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},57470:(e,t,n)=>{e.exports=n(41818)},25378:(e,t,n)=>{var r=n(4743).f,o=n(27069),i=n(22939)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},58989:(e,t,n)=>{var r=n(20250)("keys"),o=n(65730);e.exports=function(e){return r[e]||(r[e]=o(e))}},20250:(e,t,n)=>{var r=n(34579),o=n(33938),i="__core-js_shared__",a=o[i]||(o[i]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(16227)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},90510:(e,t,n)=>{var r=n(11052),o=n(8333);e.exports=function(e){return function(t,n){var i,a,s=String(o(t)),l=r(n),u=s.length;return l<0||l>=u?e?"":void 0:(i=s.charCodeAt(l))<55296||i>56319||l+1===u||(a=s.charCodeAt(l+1))<56320||a>57343?e?s.charAt(l):i:e?s.slice(l,l+2):a-56320+(i-55296<<10)+65536}}},16531:(e,t,n)=>{var r=n(11052),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},11052:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7932:(e,t,n)=>{var r=n(50799),o=n(8333);e.exports=function(e){return r(o(e))}},78728:(e,t,n)=>{var r=n(11052),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},66530:(e,t,n)=>{var r=n(8333);e.exports=function(e){return Object(r(e))}},33206:(e,t,n)=>{var r=n(36727);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},65730:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+n).toString(36))}},22939:(e,t,n)=>{var r=n(20250)("wks"),o=n(65730),i=n(33938).Symbol,a="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=r},83728:(e,t,n)=>{var r=n(14677),o=n(22939)("iterator"),i=n(15449);e.exports=n(34579).getIteratorMethod=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[r(e)]}},46459:(e,t,n)=>{var r=n(12159),o=n(83728);e.exports=n(34579).getIterator=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return r(t.call(e))}},89553:(e,t,n)=>{var r=n(14677),o=n(22939)("iterator"),i=n(15449);e.exports=n(34579).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||i.hasOwnProperty(r(t))}},2586:(e,t,n)=>{"use strict";var r=n(19216),o=n(83856),i=n(66530),a=n(95602),s=n(45991),l=n(78728),u=n(52445),c=n(83728);o(o.S+o.F*!n(96630)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,o,d,f=i(e),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,g=void 0!==v,m=0,y=c(f);if(g&&(v=r(v,p>2?arguments[2]:void 0,2)),null==y||h==Array&&s(y))for(n=new h(t=l(f.length));t>m;m++)u(n,m,g?v(f[m],m):f[m]);else for(d=y.call(f),n=new h;!(o=d.next()).done;m++)u(n,m,g?a(d,v,[o.value,m],!0):o.value);return n.length=m,n}})},3882:(e,t,n)=>{"use strict";var r=n(79003),o=n(85084),i=n(15449),a=n(7932);e.exports=n(45700)(Array,"Array",(function(e,t){this._t=a(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,o(1)):o(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},31477:(e,t,n)=>{var r=n(83856);r(r.S+r.F*!n(89666),"Object",{defineProperty:n(4743).f})},91867:(e,t,n)=>{"use strict";var r=n(90510)(!0);n(45700)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})}))},73871:(e,t,n)=>{n(3882);for(var r=n(33938),o=n(41818),i=n(15449),a=n(22939)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),l=0;l<s.length;l++){var u=s[l],c=r[u],d=c&&c.prototype;d&&!d[a]&&o(d,a,u),i[u]=i.Array}},17187:e=>{"use strict";var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var a=10;function s(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function u(e,t,n,r){var o,i,a,u;if(s(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),a=i[t]),void 0===a)a=i[t]=n,++e._eventsCount;else if("function"==typeof a?a=i[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(o=l(e))>0&&a.length>o&&!a.warned){a.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=a.length,u=c,console&&console.warn&&console.warn(u)}return e}function c(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=c.bind(r);return o.listener=n,r.wrapFn=o,o}function f(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):p(o,o.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return l(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var l=i[e];if(void 0===l)return!1;if("function"==typeof l)r(l,this,t);else{var u=l.length,c=p(l,u);for(n=0;n<u;++n)r(c[n],this,t)}return!0},i.prototype.addListener=function(e,t){return u(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return u(this,e,t,!0)},i.prototype.once=function(e,t){return s(t),this.on(e,d(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,d(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,r,o,i,a;if(s(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){a=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},i.prototype.listeners=function(e){return f(this,e,!0)},i.prototype.rawListeners=function(e){return f(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},i.prototype.listenerCount=h,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},73867:(e,t,n)=>{var r,o,i,a,s,l,u=n(73609);
/*! jquery.tablednd.js 30-12-2017 */r=u,o=window,i=window.document,a="touchstart mousedown",s="touchmove mousemove",l="touchend mouseup",r(i).ready((function(){function e(e){for(var t={},n=e.match(/([^;:]+)/g)||[];n.length;)t[n.shift()]=n.shift().trim();return t}r("table").each((function(){"dnd"===r(this).data("table")&&r(this).tableDnD({onDragStyle:r(this).data("ondragstyle")&&e(r(this).data("ondragstyle"))||null,onDropStyle:r(this).data("ondropstyle")&&e(r(this).data("ondropstyle"))||null,onDragClass:void 0===r(this).data("ondragclass")?"tDnD_whileDrag":r(this).data("ondragclass"),onDrop:r(this).data("ondrop")&&new Function("table","row",r(this).data("ondrop")),onDragStart:r(this).data("ondragstart")&&new Function("table","row",r(this).data("ondragstart")),onDragStop:r(this).data("ondragstop")&&new Function("table","row",r(this).data("ondragstop")),scrollAmount:r(this).data("scrollamount")||5,sensitivity:r(this).data("sensitivity")||10,hierarchyLevel:r(this).data("hierarchylevel")||0,indentArtifact:r(this).data("indentartifact")||'<div class="indent">&nbsp;</div>',autoWidthAdjust:r(this).data("autowidthadjust")||!0,autoCleanRelations:r(this).data("autocleanrelations")||!0,jsonPretifySeparator:r(this).data("jsonpretifyseparator")||"\t",serializeRegexp:r(this).data("serializeregexp")&&new RegExp(r(this).data("serializeregexp"))||/[^\-]*$/,serializeParamName:r(this).data("serializeparamname")||!1,dragHandle:r(this).data("draghandle")||null})}))})),u.tableDnD={currentTable:null,dragObject:null,mouseOffset:null,oldX:0,oldY:0,build:function(e){return this.each((function(){this.tableDnDConfig=r.extend({onDragStyle:null,onDropStyle:null,onDragClass:"tDnD_whileDrag",onDrop:null,onDragStart:null,onDragStop:null,scrollAmount:5,sensitivity:10,hierarchyLevel:0,indentArtifact:'<div class="indent">&nbsp;</div>',autoWidthAdjust:!0,autoCleanRelations:!0,jsonPretifySeparator:"\t",serializeRegexp:/[^\-]*$/,serializeParamName:!1,dragHandle:null},e||{}),r.tableDnD.makeDraggable(this),this.tableDnDConfig.hierarchyLevel&&r.tableDnD.makeIndented(this)})),this},makeIndented:function(e){var t,n,o=e.tableDnDConfig,i=e.rows,a=r(i).first().find("td:first")[0],s=0,l=0;if(r(e).hasClass("indtd"))return null;n=r(e).addClass("indtd").attr("style"),r(e).css({whiteSpace:"nowrap"});for(var u=0;u<i.length;u++)l<r(i[u]).find("td:first").text().length&&(l=r(i[u]).find("td:first").text().length,t=u);for(r(a).css({width:"auto"}),u=0;u<o.hierarchyLevel;u++)r(i[t]).find("td:first").prepend(o.indentArtifact);for(a&&r(a).css({width:a.offsetWidth}),n&&r(e).css(n),u=0;u<o.hierarchyLevel;u++)r(i[t]).find("td:first").children(":first").remove();return o.hierarchyLevel&&r(i).each((function(){(s=r(this).data("level")||0)<=o.hierarchyLevel&&r(this).data("level",s)||r(this).data("level",0);for(var e=0;e<r(this).data("level");e++)r(this).find("td:first").prepend(o.indentArtifact)})),this},makeDraggable:function(e){var t=e.tableDnDConfig;t.dragHandle&&r(t.dragHandle,e).each((function(){r(this).bind(a,(function(n){return r.tableDnD.initialiseDrag(r(this).parents("tr")[0],e,this,n,t),!1}))}))||r(e.rows).each((function(){r(this).hasClass("nodrag")?r(this).css("cursor",""):r(this).bind(a,(function(n){if("TD"===n.target.tagName)return r.tableDnD.initialiseDrag(this,e,this,n,t),!1})).css("cursor","move")}))},currentOrder:function(){var e=this.currentTable.rows;return r.map(e,(function(e){return(r(e).data("level")+e.id).replace(/\s/g,"")})).join("")},initialiseDrag:function(e,t,n,o,a){this.dragObject=e,this.currentTable=t,this.mouseOffset=this.getMouseOffset(n,o),this.originalOrder=this.currentOrder(),r(i).bind(s,this.mousemove).bind(l,this.mouseup),a.onDragStart&&a.onDragStart(t,n)},updateTables:function(){this.each((function(){this.tableDnDConfig&&r.tableDnD.makeDraggable(this)}))},mouseCoords:function(e){return e.originalEvent.changedTouches?{x:e.originalEvent.changedTouches[0].clientX,y:e.originalEvent.changedTouches[0].clientY}:e.pageX||e.pageY?{x:e.pageX,y:e.pageY}:{x:e.clientX+i.body.scrollLeft-i.body.clientLeft,y:e.clientY+i.body.scrollTop-i.body.clientTop}},getMouseOffset:function(e,t){var n,r;return t=t||o.event,r=this.getPosition(e),{x:(n=this.mouseCoords(t)).x-r.x,y:n.y-r.y}},getPosition:function(e){var t=0,n=0;for(0===e.offsetHeight&&(e=e.firstChild);e.offsetParent;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return{x:t+=e.offsetLeft,y:n+=e.offsetTop}},autoScroll:function(e){var t=this.currentTable.tableDnDConfig,n=o.pageYOffset,r=o.innerHeight?o.innerHeight:i.documentElement.clientHeight?i.documentElement.clientHeight:i.body.clientHeight;i.all&&(void 0!==i.compatMode&&"BackCompat"!==i.compatMode?n=i.documentElement.scrollTop:void 0!==i.body&&(n=i.body.scrollTop)),e.y-n<t.scrollAmount&&o.scrollBy(0,-t.scrollAmount)||r-(e.y-n)<t.scrollAmount&&o.scrollBy(0,t.scrollAmount)},moveVerticle:function(e,t){0!==e.vertical&&t&&this.dragObject!==t&&this.dragObject.parentNode===t.parentNode&&(0>e.vertical&&this.dragObject.parentNode.insertBefore(this.dragObject,t.nextSibling)||0<e.vertical&&this.dragObject.parentNode.insertBefore(this.dragObject,t))},moveHorizontal:function(e,t){var n,o=this.currentTable.tableDnDConfig;if(!o.hierarchyLevel||0===e.horizontal||!t||this.dragObject!==t)return null;n=r(t).data("level"),0<e.horizontal&&n>0&&r(t).find("td:first").children(":first").remove()&&r(t).data("level",--n),0>e.horizontal&&n<o.hierarchyLevel&&r(t).prev().data("level")>=n&&r(t).children(":first").prepend(o.indentArtifact)&&r(t).data("level",++n)},mousemove:function(e){var t,n,o,i,a,s=r(r.tableDnD.dragObject),l=r.tableDnD.currentTable.tableDnDConfig;return e&&e.preventDefault(),!!r.tableDnD.dragObject&&("touchmove"===e.type&&event.preventDefault(),l.onDragClass&&s.addClass(l.onDragClass)||s.css(l.onDragStyle),i=(n=r.tableDnD.mouseCoords(e)).x-r.tableDnD.mouseOffset.x,a=n.y-r.tableDnD.mouseOffset.y,r.tableDnD.autoScroll(n),t=r.tableDnD.findDropTargetRow(s,a),o=r.tableDnD.findDragDirection(i,a),r.tableDnD.moveVerticle(o,t),r.tableDnD.moveHorizontal(o,t),!1)},findDragDirection:function(e,t){var n=this.currentTable.tableDnDConfig.sensitivity,r=this.oldX,o=this.oldY,i={horizontal:e>=r-n&&e<=r+n?0:e>r?-1:1,vertical:t>=o-n&&t<=o+n?0:t>o?-1:1};return 0!==i.horizontal&&(this.oldX=e),0!==i.vertical&&(this.oldY=t),i},findDropTargetRow:function(e,t){for(var n=0,o=this.currentTable.rows,i=this.currentTable.tableDnDConfig,a=0,s=null,l=0;l<o.length;l++)if(s=o[l],a=this.getPosition(s).y,n=parseInt(s.offsetHeight)/2,0===s.offsetHeight&&(a=this.getPosition(s.firstChild).y,n=parseInt(s.firstChild.offsetHeight)/2),t>a-n&&t<a+n)return e.is(s)||i.onAllowDrop&&!i.onAllowDrop(e,s)||r(s).hasClass("nodrop")?null:s;return null},processMouseup:function(){if(!this.currentTable||!this.dragObject)return null;var e=this.currentTable.tableDnDConfig,t=this.dragObject,n=0,o=0;r(i).unbind(s,this.mousemove).unbind(l,this.mouseup),e.hierarchyLevel&&e.autoCleanRelations&&r(this.currentTable.rows).first().find("td:first").children().each((function(){(o=r(this).parents("tr:first").data("level"))&&r(this).parents("tr:first").data("level",--o)&&r(this).remove()}))&&e.hierarchyLevel>1&&r(this.currentTable.rows).each((function(){if((o=r(this).data("level"))>1)for(n=r(this).prev().data("level");o>n+1;)r(this).find("td:first").children(":first").remove(),r(this).data("level",--o)})),e.onDragClass&&r(t).removeClass(e.onDragClass)||r(t).css(e.onDropStyle),this.dragObject=null,e.onDrop&&this.originalOrder!==this.currentOrder()&&r(t).hide().fadeIn("fast")&&e.onDrop(this.currentTable,t),e.onDragStop&&e.onDragStop(this.currentTable,t),this.currentTable=null},mouseup:function(e){return e&&e.preventDefault(),r.tableDnD.processMouseup(),!1},jsonize:function(e){var t=this.currentTable;return e?JSON.stringify(this.tableData(t),null,t.tableDnDConfig.jsonPretifySeparator):JSON.stringify(this.tableData(t))},serialize:function(){return r.param(this.tableData(this.currentTable))},serializeTable:function(e){for(var t="",n=e.tableDnDConfig.serializeParamName||e.id,r=e.rows,o=0;o<r.length;o++){t.length>0&&(t+="&");var i=r[o].id;i&&e.tableDnDConfig&&e.tableDnDConfig.serializeRegexp&&(t+=n+"[]="+(i=i.match(e.tableDnDConfig.serializeRegexp)[0]))}return t},serializeTables:function(){var e=[];return r("table").each((function(){this.id&&e.push(r.param(r.tableDnD.tableData(this)))})),e.join("&")},tableData:function(e){var t,n,o,i,a=e.tableDnDConfig,s=[],l=0,u=0,c=null,d={};if(e||(e=this.currentTable),!e||!e.rows||!e.rows.length)return{error:{code:500,message:"Not a valid table."}};if(!e.id&&!a.serializeParamName)return{error:{code:500,message:"No serializable unique id provided."}};i=a.autoCleanRelations&&e.rows||r.makeArray(e.rows),t=function(e){return e&&a&&a.serializeRegexp?e.match(a.serializeRegexp)[0]:e},d[o=n=a.serializeParamName||e.id]=[],!a.autoCleanRelations&&r(i[0]).data("level")&&i.unshift({id:"undefined"});for(var f=0;f<i.length;f++)if(a.hierarchyLevel){if(0===(u=r(i[f]).data("level")||0))o=n,s=[];else if(u>l)s.push([o,l]),o=t(i[f-1].id);else if(u<l)for(var h=0;h<s.length;h++)s[h][1]===u&&(o=s[h][0]),s[h][1]>=l&&(s[h][1]=0);l=u,r.isArray(d[o])||(d[o]=[]),(c=t(i[f].id))&&d[o].push(c)}else(c=t(i[f].id))&&d[o].push(c);return d}},u.fn.extend({tableDnD:r.tableDnD.build,tableDnDUpdate:r.tableDnD.updateTables,tableDnDSerialize:r.proxy(r.tableDnD.serialize,r.tableDnD),tableDnDSerializeAll:r.tableDnD.serializeTables,tableDnDData:r.proxy(r.tableDnD.tableData,r.tableDnD)})},73609:e=>{"use strict";e.exports=window.jQuery}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{"use strict";var e=b(n(53277)),t=b(n(58630)),r=b(n(91781)),o=b(n(96803)),i=b(n(37758)),a=b(n(2573)),s=b(n(58899)),l=b(n(17868)),u=b(n(5595)),c=b(n(4499)),d=b(n(92448)),f=b(n(19078)),h=b(n(92526)),p=b(n(48473)),v=b(n(91137)),g=b(n(52666)),m=b(n(50204)),y=b(n(3010));function b(e){return e&&e.__esModule?e:{default:e}}
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
 */(0,window.$)((function(){var n=new e.default("cms_page_category");n.addExtension(new i.default),n.addExtension(new a.default),n.addExtension(new o.default),n.addExtension(new t.default),n.addExtension(new s.default),n.addExtension(new l.default),n.addExtension(new u.default),n.addExtension(new r.default),n.addExtension(new c.default),n.addExtension(new d.default),n.addExtension(new v.default);var b=new h.default;(0,p.default)({sourceElementSelector:'input[name^="cms_page_category[name]"]',destinationElementSelector:b.localeInputSelector+':not(.d-none) input[name^="cms_page_category[friendly_url]"]'}),new f.default("#cms_page_category_parent_category"),new f.default("#cms_page_category_shop_association").enableAutoCheckChildren(),new g.default({tokenFieldSelector:'input[name^="cms_page_category[meta_keywords]"]',options:{createTokensOnBlur:!0}});var w=new e.default("cms_page");w.addExtension(new i.default),w.addExtension(new a.default),w.addExtension(new o.default),w.addExtension(new t.default),w.addExtension(new c.default),w.addExtension(new u.default),w.addExtension(new l.default),w.addExtension(new r.default),w.addExtension(new d.default),w.addExtension(new v.default),w.addExtension(new s.default),new m.default("cms-pages-showcase-card").addExtension(new y.default)}))})(),window.cms_page={}})();