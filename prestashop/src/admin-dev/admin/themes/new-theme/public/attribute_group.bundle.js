(()=>{var t={4110:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});
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
var n=window.$;e.default=function(t,e){n.post(t).then((function(){return window.location.assign(e)}))}},61353:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,s=function(){function t(e){(0,r.default)(this,t),this.selector=".ps-sortable-column",this.columns=a(e).find(this.selector)}return(0,o.default)(t,[{key:"attach",value:function(){var t=this;this.columns.on("click",(function(e){var n=a(e.delegateTarget);t.sortByColumn(n,t.getToggledSortDirection(n))}))}},{key:"sortBy",value:function(t,e){var n=this.columns.is('[data-sort-col-name="'+t+'"]');if(!n)throw new Error('Cannot sort by "'+t+'": invalid column');this.sortByColumn(n,e)}},{key:"sortByColumn",value:function(t,e){window.location=this.getUrl(t.data("sortColName"),"desc"===e?"desc":"asc",t.data("sortPrefix"))}},{key:"getToggledSortDirection",value:function(t){return"asc"===t.data("sortDirection")?"desc":"asc"}},{key:"getUrl",value:function(t,e,n){var r=new URL(window.location.href),o=r.searchParams;return n?(o.set(n+"[orderBy]",t),o.set(n+"[sortOrder]",e)):(o.set("orderBy",t),o.set("sortOrder",e)),r.toString()}}]),t}();e.default=s},91781:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(68840));function a(t){return t&&t.__esModule?t:{default:t}}var s=window.$,l=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=this;t.getContainer().on("click",".js-submit-row-action",(function(n){n.preventDefault();var r=s(n.currentTarget),o=r.data("confirmMessage"),i=r.data("title"),a=r.data("method");if(i)e.showConfirmModal(r,t,o,i,a);else{if(o.length&&!window.confirm(o))return;e.postForm(r,a)}}))}},{key:"postForm",value:function(t,e){var n=["GET","POST"].includes(e),r=s("<form>",{action:t.data("url"),method:n?e:"POST"}).appendTo("body");n||r.append(s("<input>",{type:"_hidden",name:"_method",value:e})),r.submit()}},{key:"showConfirmModal",value:function(t,e,n,r,o){var a=this,s=t.data("confirmButtonLabel"),l=t.data("closeButtonLabel"),u=t.data("confirmButtonClass");new i.default({id:e.getId()+"-grid-confirm-modal",confirmTitle:r,confirmMessage:n,confirmButtonLabel:s,closeButtonLabel:l,confirmButtonClass:u},(function(){return a.postForm(t,o)})).show()}}]),t}();
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
 */e.default=l},5595:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,s=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){this.handleBulkActionCheckboxSelect(t),this.handleBulkActionSelectAllCheckbox(t)}},{key:"handleBulkActionSelectAllCheckbox",value:function(t){var e=this;t.getContainer().on("change",".js-bulk-action-select-all",(function(n){var r=a(n.currentTarget).is(":checked");r?e.enableBulkActionsBtn(t):e.disableBulkActionsBtn(t),t.getContainer().find(".js-bulk-action-checkbox").prop("checked",r)}))}},{key:"handleBulkActionCheckboxSelect",value:function(t){var e=this;t.getContainer().on("change",".js-bulk-action-checkbox",(function(){t.getContainer().find(".js-bulk-action-checkbox:checked").length>0?e.enableBulkActionsBtn(t):e.disableBulkActionsBtn(t)}))}},{key:"enableBulkActionsBtn",value:function(t){t.getContainer().find(".js-bulk-actions-btn").prop("disabled",!1)}},{key:"disableBulkActionsBtn",value:function(t){t.getContainer().find(".js-bulk-actions-btn").prop("disabled",!0)}}]),t}();e.default=s},2573:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,s=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=this;t.getHeaderContainer().on("click",".js-common_show_query-grid-action",(function(){return e.onShowSqlQueryClick(t)})),t.getHeaderContainer().on("click",".js-common_export_sql_manager-grid-action",(function(){return e.onExportSqlManagerClick(t)}))}},{key:"onShowSqlQueryClick",value:function(t){var e=a("#"+t.getId()+"_common_show_query_modal_form");this.fillExportForm(e,t);var n=a("#"+t.getId()+"_grid_common_show_query_modal");n.modal("show"),n.on("click",".btn-sql-submit",(function(){return e.submit()}))}},{key:"onExportSqlManagerClick",value:function(t){var e=a("#"+t.getId()+"_common_show_query_modal_form");this.fillExportForm(e,t),e.submit()}},{key:"fillExportForm",value:function(t,e){var n=e.getContainer().find(".js-grid-table").data("query");t.find('textarea[name="sql"]').val(n),t.find('input[name="name"]').val(this.getNameFromBreadcrumb())}},{key:"getNameFromBreadcrumb",value:function(){var t=a(".header-toolbar").find(".breadcrumb-item"),e="";return t.each((function(t,n){var r=a(n),o=r.find("a").length>0?r.find("a").text():r.text();e.length>0&&(e=e.concat(" > ")),e=e.concat(o)})),e}}]),t}();e.default=s},96803:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(4110));function a(t){return t&&t.__esModule?t:{default:t}}var s=window.$,l=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){t.getContainer().on("click",".js-reset-search",(function(t){(0,i.default)(s(t.currentTarget).data("url"),s(t.currentTarget).data("redirect"))}))}}]),t}();
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
 */e.default=l},91137:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=t.getContainer().find(".column-filters");e.find(".grid-search-button").prop("disabled",!0),e.find("input:not(.js-bulk-action-select-all), select").on("input dp.change",(function(){e.find(".grid-search-button").prop("disabled",!1),e.find(".js-grid-reset-button").prop("hidden",!1)}))}}]),t}();e.default=a},92448:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(12424)),o=a(n(99663)),i=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}n(73867);var s=window.$,l=function(){function t(){var e=this;return(0,o.default)(this,t),{extend:function(t){return e.extend(t)}}}return(0,i.default)(t,[{key:"extend",value:function(t){var e=this;this.grid=t,this.addIdsToGridTableRows(),t.getContainer().find(".js-grid-table").tableDnD({onDragClass:"position-row-while-drag",dragHandle:".js-drag-handle",onDrop:function(t,n){return e.handlePositionChange(n)}}),t.getContainer().find(".js-drag-handle").hover((function(){s(this).closest("tr").addClass("hover")}),(function(){s(this).closest("tr").removeClass("hover")}))}},{key:"handlePositionChange",value:function(t){var e=s(t).find(".js-"+this.grid.getId()+"-position:first"),n=e.data("update-url"),r=e.data("update-method"),o={positions:this.getRowsPositions()};this.updatePosition(n,o,r)}},{key:"getRowsPositions",value:function(){for(var t=JSON.parse(s.tableDnD.jsonize())[this.grid.getId()+"_grid_table"],e=[],n=void 0,r=0;r<t.length;r+=1)n=this.grid.getContainer().find("#"+t[r]),e.push({rowMarker:t[r],offset:n.data("dragAndDropOffset")});return this.computeMappingBetweenOldAndNewPositions(e)}},{key:"addIdsToGridTableRows",value:function(){var t=0;this.grid.getContainer().find(".js-grid-table .js-"+this.grid.getId()+"-position").each((function(e,n){var r=s(n),o="row_"+r.data("id")+"_"+r.data("position");r.closest("tr").attr("id",o),r.closest("td").addClass("js-drag-handle"),r.closest("tr").data("dragAndDropOffset",t),t+=1}))}},{key:"updatePosition",value:function(t,e,n){for(var r=["GET","POST"].includes(n),o=s("<form>",{action:t,method:r?n:"POST"}).appendTo("body"),i=e.positions.length,a=void 0,l=0;l<i;l+=1)a=e.positions[l],o.append(s("<input>",{type:"hidden",name:"positions["+l+"][rowId]",value:a.rowId}),s("<input>",{type:"hidden",name:"positions["+l+"][oldPosition]",value:a.oldPosition}),s("<input>",{type:"hidden",name:"positions["+l+"][newPosition]",value:a.newPosition}));r||o.append(s("<input>",{type:"hidden",name:"_method",value:n})),o.submit()}},{key:"computeMappingBetweenOldAndNewPositions",value:function(t){for(var e=/^row_(\d+)_(\d+)$/,n=Array(t.length).fill().map(Object),o=0;o<t.length;o+=1){var i=e.exec(t[o].rowMarker),a=(0,r.default)(i,3),s=a[1],l=a[2];n[o].rowId=s,n[o].oldPosition=parseInt(l,10),n[t[o].offset].newPosition=n[o].oldPosition}return n}}]),t}();
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
 */e.default=l},37758:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){t.getHeaderContainer().on("click",".js-common_refresh_list-grid-action",(function(){window.location.reload()}))}}]),t}();e.default=a},58630:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(61353));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=t.getContainer().find("table.table");new i.default(e).attach()}}]),t}();
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
      */e.default=s},17868:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(68840));function a(t){return t&&t.__esModule?t:{default:t}}var s=window.$,l=function(){function t(){var e=this;return(0,r.default)(this,t),{extend:function(t){return e.extend(t)}}}return(0,o.default)(t,[{key:"extend",value:function(t){var e=this;t.getContainer().on("click",".js-bulk-action-submit-btn",(function(n){e.submit(n,t)}))}},{key:"submit",value:function(t,e){var n=s(t.currentTarget),r=n.data("confirm-message"),o=n.data("confirmTitle");void 0!==r&&r.length>0?void 0!==o?this.showConfirmModal(n,e,r,o):window.confirm(r)&&this.postForm(n,e):this.postForm(n,e)}},{key:"showConfirmModal",value:function(t,e,n,r){var o=this,a=t.data("confirmButtonLabel"),s=t.data("closeButtonLabel"),l=t.data("confirmButtonClass");new i.default({id:e.getId()+"-grid-confirm-modal",confirmTitle:r,confirmMessage:n,confirmButtonLabel:a,closeButtonLabel:s,confirmButtonClass:l},(function(){return o.postForm(t,e)})).show()}},{key:"postForm",value:function(t,e){var n=s("#"+e.getId()+"_filter_form");n.attr("action",t.data("form-url")),n.attr("method",t.data("form-method")),n.submit()}}]),t}();
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
 */e.default=l},53277:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,s=function(){function t(e){(0,r.default)(this,t),this.id=e,this.$container=a("#"+this.id+"_grid")}return(0,o.default)(t,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(t){t.extend(this)}}]),t}();e.default=s},68840:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(85315),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e,n){var r=this,o=t.id,s=t.closable;this.modal=function(t){var e,n=t.id,r=void 0===n?"confirm-modal":n,o=t.confirmTitle,a=t.confirmMessage,s=void 0===a?"":a,l=t.closeButtonLabel,u=void 0===l?"Close":l,d=t.confirmButtonLabel,c=void 0===d?"Accept":d,f=t.confirmButtonClass,h=void 0===f?"btn-primary":f,p=t.customButtons,v=void 0===p?[]:p,g={};g.container=document.createElement("div"),g.container.classList.add("modal","fade"),g.container.id=r,g.dialog=document.createElement("div"),g.dialog.classList.add("modal-dialog"),g.content=document.createElement("div"),g.content.classList.add("modal-content"),g.header=document.createElement("div"),g.header.classList.add("modal-header"),o&&(g.title=document.createElement("h4"),g.title.classList.add("modal-title"),g.title.innerHTML=o);g.closeIcon=document.createElement("button"),g.closeIcon.classList.add("close"),g.closeIcon.setAttribute("type","button"),g.closeIcon.dataset.dismiss="modal",g.closeIcon.innerHTML="×",g.body=document.createElement("div"),g.body.classList.add("modal-body","text-left","font-weight-normal"),g.message=document.createElement("p"),g.message.classList.add("confirm-message"),g.message.innerHTML=s,g.footer=document.createElement("div"),g.footer.classList.add("modal-footer"),g.closeButton=document.createElement("button"),g.closeButton.setAttribute("type","button"),g.closeButton.classList.add("btn","btn-outline-secondary","btn-lg"),g.closeButton.dataset.dismiss="modal",g.closeButton.innerHTML=u,g.confirmButton=document.createElement("button"),g.confirmButton.setAttribute("type","button"),g.confirmButton.classList.add("btn",h,"btn-lg","btn-confirm-submit"),g.confirmButton.dataset.dismiss="modal",g.confirmButton.innerHTML=c,o?g.header.append(g.title,g.closeIcon):g.header.appendChild(g.closeIcon);return g.body.appendChild(g.message),(e=g.footer).append.apply(e,[g.closeButton].concat((0,i.default)(v),[g.confirmButton])),g.content.append(g.header,g.body,g.footer),g.dialog.appendChild(g.content),g.container.appendChild(g.dialog),g}(t),this.$modal=a(this.modal.container),this.show=function(){r.$modal.modal()},this.modal.confirmButton.addEventListener("click",e),this.$modal.modal({backdrop:!!s||"static",keyboard:void 0===s||s,closable:void 0===s||s,show:!1}),this.$modal.on("hidden.bs.modal",(function(){document.querySelector("#"+o).remove(),n&&n()})),document.body.appendChild(this.modal.container)};
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
var a=window.$},3010:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,s=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=t.getContainer();e.on("click",".js-remove-helper-block",(function(t){e.remove();var n=a(t.target),r=n.data("closeUrl"),o=n.data("cardName");r&&a.post(r,{close:1,name:o})}))}}]),t}();e.default=s},50204:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,s=function(){function t(e){(0,r.default)(this,t),this.id=e,this.$container=a("#"+this.id)}return(0,o.default)(t,[{key:"getContainer",value:function(){return this.$container}},{key:"addExtension",value:function(t){t.extend(this)}}]),t}();e.default=s},24043:(t,e,n)=>{t.exports={default:n(47185),__esModule:!0}},26378:(t,e,n)=>{t.exports={default:n(3597),__esModule:!0}},40863:(t,e,n)=>{t.exports={default:n(21035),__esModule:!0}},32242:(t,e,n)=>{t.exports={default:n(33391),__esModule:!0}},99663:(t,e)=>{"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},22600:(t,e,n)=>{"use strict";e.__esModule=!0;var r,o=n(32242),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},12424:(t,e,n)=>{"use strict";e.__esModule=!0;var r=i(n(40863)),o=i(n(26378));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var s,l=(0,o.default)(t);!(r=(s=l.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&l.return&&l.return()}finally{if(i)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}},85315:(t,e,n)=>{"use strict";e.__esModule=!0;var r,o=n(24043),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i.default)(t)}},47185:(t,e,n)=>{n(91867),n(2586),t.exports=n(34579).Array.from},3597:(t,e,n)=>{n(73871),n(91867),t.exports=n(46459)},21035:(t,e,n)=>{n(73871),n(91867),t.exports=n(89553)},33391:(t,e,n)=>{n(31477);var r=n(34579).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},85663:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},79003:t=>{t.exports=function(){}},12159:(t,e,n)=>{var r=n(36727);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},57428:(t,e,n)=>{var r=n(7932),o=n(78728),i=n(16531);t.exports=function(t){return function(e,n,a){var s,l=r(e),u=o(l.length),d=i(a,u);if(t&&n!=n){for(;u>d;)if((s=l[d++])!=s)return!0}else for(;u>d;d++)if((t||d in l)&&l[d]===n)return t||d||0;return!t&&-1}}},14677:(t,e,n)=>{var r=n(32894),o=n(22939)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},32894:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},34579:t=>{var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},52445:(t,e,n)=>{"use strict";var r=n(4743),o=n(83101);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},19216:(t,e,n)=>{var r=n(85663);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},8333:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},89666:(t,e,n)=>{t.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},97467:(t,e,n)=>{var r=n(36727),o=n(33938).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},73338:t=>{t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},83856:(t,e,n)=>{var r=n(33938),o=n(34579),i=n(19216),a=n(41818),s=n(27069),l=function(t,e,n){var u,d,c,f=t&l.F,h=t&l.G,p=t&l.S,v=t&l.P,g=t&l.B,m=t&l.W,b=h?o:o[e]||(o[e]={}),y=b.prototype,w=h?r:p?r[e]:(r[e]||{}).prototype;for(u in h&&(n=e),n)(d=!f&&w&&void 0!==w[u])&&s(b,u)||(c=d?w[u]:n[u],b[u]=h&&"function"!=typeof w[u]?n[u]:g&&d?i(c,r):m&&w[u]==c?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(c):v&&"function"==typeof c?i(Function.call,c):c,v&&((b.virtual||(b.virtual={}))[u]=c,t&l.R&&y&&!y[u]&&a(y,u,c)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},7929:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},33938:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},27069:t=>{var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},41818:(t,e,n)=>{var r=n(4743),o=n(83101);t.exports=n(89666)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},54881:(t,e,n)=>{var r=n(33938).document;t.exports=r&&r.documentElement},33758:(t,e,n)=>{t.exports=!n(89666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(97467)("div"),"a",{get:function(){return 7}}).a}))},50799:(t,e,n)=>{var r=n(32894);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},45991:(t,e,n)=>{var r=n(15449),o=n(22939)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},36727:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},95602:(t,e,n)=>{var r=n(12159);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},33945:(t,e,n)=>{"use strict";var r=n(98989),o=n(83101),i=n(25378),a={};n(41818)(a,n(22939)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},45700:(t,e,n)=>{"use strict";var r=n(16227),o=n(83856),i=n(57470),a=n(41818),s=n(15449),l=n(33945),u=n(25378),d=n(95089),c=n(22939)("iterator"),f=!([].keys&&"next"in[].keys()),h="keys",p="values",v=function(){return this};t.exports=function(t,e,n,g,m,b,y){l(n,e,g);var w,D,_,x=function(t){if(!f&&t in O)return O[t];switch(t){case h:case p:return function(){return new n(this,t)}}return function(){return new n(this,t)}},C=e+" Iterator",k=m==p,j=!1,O=t.prototype,T=O[c]||O["@@iterator"]||m&&O[m],M=T||x(m),S=m?k?x("entries"):M:void 0,P="Array"==e&&O.entries||T;if(P&&(_=d(P.call(new t)))!==Object.prototype&&_.next&&(u(_,C,!0),r||"function"==typeof _[c]||a(_,c,v)),k&&T&&T.name!==p&&(j=!0,M=function(){return T.call(this)}),r&&!y||!f&&!j&&O[c]||a(O,c,M),s[e]=M,s[C]=v,m)if(w={values:k?M:x(p),keys:b?M:x(h),entries:S},y)for(D in w)D in O||i(O,D,w[D]);else o(o.P+o.F*(f||j),e,w);return w}},96630:(t,e,n)=>{var r=n(22939)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},85084:t=>{t.exports=function(t,e){return{value:e,done:!!t}}},15449:t=>{t.exports={}},16227:t=>{t.exports=!0},98989:(t,e,n)=>{var r=n(12159),o=n(57856),i=n(73338),a=n(58989)("IE_PROTO"),s=function(){},l=function(){var t,e=n(97467)("iframe"),r=i.length;for(e.style.display="none",n(54881).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[i[r]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=l(),void 0===e?n:o(n,e)}},4743:(t,e,n)=>{var r=n(12159),o=n(33758),i=n(33206),a=Object.defineProperty;e.f=n(89666)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},57856:(t,e,n)=>{var r=n(4743),o=n(12159),i=n(46162);t.exports=n(89666)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),s=a.length,l=0;s>l;)r.f(t,n=a[l++],e[n]);return t}},95089:(t,e,n)=>{var r=n(27069),o=n(66530),i=n(58989)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},12963:(t,e,n)=>{var r=n(27069),o=n(7932),i=n(57428)(!1),a=n(58989)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),l=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);for(;e.length>l;)r(s,n=e[l++])&&(~i(u,n)||u.push(n));return u}},46162:(t,e,n)=>{var r=n(12963),o=n(73338);t.exports=Object.keys||function(t){return r(t,o)}},83101:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},57470:(t,e,n)=>{t.exports=n(41818)},25378:(t,e,n)=>{var r=n(4743).f,o=n(27069),i=n(22939)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},58989:(t,e,n)=>{var r=n(20250)("keys"),o=n(65730);t.exports=function(t){return r[t]||(r[t]=o(t))}},20250:(t,e,n)=>{var r=n(34579),o=n(33938),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(16227)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},90510:(t,e,n)=>{var r=n(11052),o=n(8333);t.exports=function(t){return function(e,n){var i,a,s=String(o(e)),l=r(n),u=s.length;return l<0||l>=u?t?"":void 0:(i=s.charCodeAt(l))<55296||i>56319||l+1===u||(a=s.charCodeAt(l+1))<56320||a>57343?t?s.charAt(l):i:t?s.slice(l,l+2):a-56320+(i-55296<<10)+65536}}},16531:(t,e,n)=>{var r=n(11052),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},11052:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7932:(t,e,n)=>{var r=n(50799),o=n(8333);t.exports=function(t){return r(o(t))}},78728:(t,e,n)=>{var r=n(11052),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},66530:(t,e,n)=>{var r=n(8333);t.exports=function(t){return Object(r(t))}},33206:(t,e,n)=>{var r=n(36727);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},65730:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},22939:(t,e,n)=>{var r=n(20250)("wks"),o=n(65730),i=n(33938).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},83728:(t,e,n)=>{var r=n(14677),o=n(22939)("iterator"),i=n(15449);t.exports=n(34579).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},46459:(t,e,n)=>{var r=n(12159),o=n(83728);t.exports=n(34579).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},89553:(t,e,n)=>{var r=n(14677),o=n(22939)("iterator"),i=n(15449);t.exports=n(34579).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},2586:(t,e,n)=>{"use strict";var r=n(19216),o=n(83856),i=n(66530),a=n(95602),s=n(45991),l=n(78728),u=n(52445),d=n(83728);o(o.S+o.F*!n(96630)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,c,f=i(t),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,g=void 0!==v,m=0,b=d(f);if(g&&(v=r(v,p>2?arguments[2]:void 0,2)),null==b||h==Array&&s(b))for(n=new h(e=l(f.length));e>m;m++)u(n,m,g?v(f[m],m):f[m]);else for(c=b.call(f),n=new h;!(o=c.next()).done;m++)u(n,m,g?a(c,v,[o.value,m],!0):o.value);return n.length=m,n}})},3882:(t,e,n)=>{"use strict";var r=n(79003),o=n(85084),i=n(15449),a=n(7932);t.exports=n(45700)(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},31477:(t,e,n)=>{var r=n(83856);r(r.S+r.F*!n(89666),"Object",{defineProperty:n(4743).f})},91867:(t,e,n)=>{"use strict";var r=n(90510)(!0);n(45700)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},73871:(t,e,n)=>{n(3882);for(var r=n(33938),o=n(41818),i=n(15449),a=n(22939)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),l=0;l<s.length;l++){var u=s[l],d=r[u],c=d&&d.prototype;c&&!c[a]&&o(c,a,u),i[u]=i.Array}},73867:(t,e,n)=>{var r,o,i,a,s,l,u=n(73609);
/*! jquery.tablednd.js 30-12-2017 */r=u,o=window,i=window.document,a="touchstart mousedown",s="touchmove mousemove",l="touchend mouseup",r(i).ready((function(){function t(t){for(var e={},n=t.match(/([^;:]+)/g)||[];n.length;)e[n.shift()]=n.shift().trim();return e}r("table").each((function(){"dnd"===r(this).data("table")&&r(this).tableDnD({onDragStyle:r(this).data("ondragstyle")&&t(r(this).data("ondragstyle"))||null,onDropStyle:r(this).data("ondropstyle")&&t(r(this).data("ondropstyle"))||null,onDragClass:void 0===r(this).data("ondragclass")?"tDnD_whileDrag":r(this).data("ondragclass"),onDrop:r(this).data("ondrop")&&new Function("table","row",r(this).data("ondrop")),onDragStart:r(this).data("ondragstart")&&new Function("table","row",r(this).data("ondragstart")),onDragStop:r(this).data("ondragstop")&&new Function("table","row",r(this).data("ondragstop")),scrollAmount:r(this).data("scrollamount")||5,sensitivity:r(this).data("sensitivity")||10,hierarchyLevel:r(this).data("hierarchylevel")||0,indentArtifact:r(this).data("indentartifact")||'<div class="indent">&nbsp;</div>',autoWidthAdjust:r(this).data("autowidthadjust")||!0,autoCleanRelations:r(this).data("autocleanrelations")||!0,jsonPretifySeparator:r(this).data("jsonpretifyseparator")||"\t",serializeRegexp:r(this).data("serializeregexp")&&new RegExp(r(this).data("serializeregexp"))||/[^\-]*$/,serializeParamName:r(this).data("serializeparamname")||!1,dragHandle:r(this).data("draghandle")||null})}))})),u.tableDnD={currentTable:null,dragObject:null,mouseOffset:null,oldX:0,oldY:0,build:function(t){return this.each((function(){this.tableDnDConfig=r.extend({onDragStyle:null,onDropStyle:null,onDragClass:"tDnD_whileDrag",onDrop:null,onDragStart:null,onDragStop:null,scrollAmount:5,sensitivity:10,hierarchyLevel:0,indentArtifact:'<div class="indent">&nbsp;</div>',autoWidthAdjust:!0,autoCleanRelations:!0,jsonPretifySeparator:"\t",serializeRegexp:/[^\-]*$/,serializeParamName:!1,dragHandle:null},t||{}),r.tableDnD.makeDraggable(this),this.tableDnDConfig.hierarchyLevel&&r.tableDnD.makeIndented(this)})),this},makeIndented:function(t){var e,n,o=t.tableDnDConfig,i=t.rows,a=r(i).first().find("td:first")[0],s=0,l=0;if(r(t).hasClass("indtd"))return null;n=r(t).addClass("indtd").attr("style"),r(t).css({whiteSpace:"nowrap"});for(var u=0;u<i.length;u++)l<r(i[u]).find("td:first").text().length&&(l=r(i[u]).find("td:first").text().length,e=u);for(r(a).css({width:"auto"}),u=0;u<o.hierarchyLevel;u++)r(i[e]).find("td:first").prepend(o.indentArtifact);for(a&&r(a).css({width:a.offsetWidth}),n&&r(t).css(n),u=0;u<o.hierarchyLevel;u++)r(i[e]).find("td:first").children(":first").remove();return o.hierarchyLevel&&r(i).each((function(){(s=r(this).data("level")||0)<=o.hierarchyLevel&&r(this).data("level",s)||r(this).data("level",0);for(var t=0;t<r(this).data("level");t++)r(this).find("td:first").prepend(o.indentArtifact)})),this},makeDraggable:function(t){var e=t.tableDnDConfig;e.dragHandle&&r(e.dragHandle,t).each((function(){r(this).bind(a,(function(n){return r.tableDnD.initialiseDrag(r(this).parents("tr")[0],t,this,n,e),!1}))}))||r(t.rows).each((function(){r(this).hasClass("nodrag")?r(this).css("cursor",""):r(this).bind(a,(function(n){if("TD"===n.target.tagName)return r.tableDnD.initialiseDrag(this,t,this,n,e),!1})).css("cursor","move")}))},currentOrder:function(){var t=this.currentTable.rows;return r.map(t,(function(t){return(r(t).data("level")+t.id).replace(/\s/g,"")})).join("")},initialiseDrag:function(t,e,n,o,a){this.dragObject=t,this.currentTable=e,this.mouseOffset=this.getMouseOffset(n,o),this.originalOrder=this.currentOrder(),r(i).bind(s,this.mousemove).bind(l,this.mouseup),a.onDragStart&&a.onDragStart(e,n)},updateTables:function(){this.each((function(){this.tableDnDConfig&&r.tableDnD.makeDraggable(this)}))},mouseCoords:function(t){return t.originalEvent.changedTouches?{x:t.originalEvent.changedTouches[0].clientX,y:t.originalEvent.changedTouches[0].clientY}:t.pageX||t.pageY?{x:t.pageX,y:t.pageY}:{x:t.clientX+i.body.scrollLeft-i.body.clientLeft,y:t.clientY+i.body.scrollTop-i.body.clientTop}},getMouseOffset:function(t,e){var n,r;return e=e||o.event,r=this.getPosition(t),{x:(n=this.mouseCoords(e)).x-r.x,y:n.y-r.y}},getPosition:function(t){var e=0,n=0;for(0===t.offsetHeight&&(t=t.firstChild);t.offsetParent;)e+=t.offsetLeft,n+=t.offsetTop,t=t.offsetParent;return{x:e+=t.offsetLeft,y:n+=t.offsetTop}},autoScroll:function(t){var e=this.currentTable.tableDnDConfig,n=o.pageYOffset,r=o.innerHeight?o.innerHeight:i.documentElement.clientHeight?i.documentElement.clientHeight:i.body.clientHeight;i.all&&(void 0!==i.compatMode&&"BackCompat"!==i.compatMode?n=i.documentElement.scrollTop:void 0!==i.body&&(n=i.body.scrollTop)),t.y-n<e.scrollAmount&&o.scrollBy(0,-e.scrollAmount)||r-(t.y-n)<e.scrollAmount&&o.scrollBy(0,e.scrollAmount)},moveVerticle:function(t,e){0!==t.vertical&&e&&this.dragObject!==e&&this.dragObject.parentNode===e.parentNode&&(0>t.vertical&&this.dragObject.parentNode.insertBefore(this.dragObject,e.nextSibling)||0<t.vertical&&this.dragObject.parentNode.insertBefore(this.dragObject,e))},moveHorizontal:function(t,e){var n,o=this.currentTable.tableDnDConfig;if(!o.hierarchyLevel||0===t.horizontal||!e||this.dragObject!==e)return null;n=r(e).data("level"),0<t.horizontal&&n>0&&r(e).find("td:first").children(":first").remove()&&r(e).data("level",--n),0>t.horizontal&&n<o.hierarchyLevel&&r(e).prev().data("level")>=n&&r(e).children(":first").prepend(o.indentArtifact)&&r(e).data("level",++n)},mousemove:function(t){var e,n,o,i,a,s=r(r.tableDnD.dragObject),l=r.tableDnD.currentTable.tableDnDConfig;return t&&t.preventDefault(),!!r.tableDnD.dragObject&&("touchmove"===t.type&&event.preventDefault(),l.onDragClass&&s.addClass(l.onDragClass)||s.css(l.onDragStyle),i=(n=r.tableDnD.mouseCoords(t)).x-r.tableDnD.mouseOffset.x,a=n.y-r.tableDnD.mouseOffset.y,r.tableDnD.autoScroll(n),e=r.tableDnD.findDropTargetRow(s,a),o=r.tableDnD.findDragDirection(i,a),r.tableDnD.moveVerticle(o,e),r.tableDnD.moveHorizontal(o,e),!1)},findDragDirection:function(t,e){var n=this.currentTable.tableDnDConfig.sensitivity,r=this.oldX,o=this.oldY,i={horizontal:t>=r-n&&t<=r+n?0:t>r?-1:1,vertical:e>=o-n&&e<=o+n?0:e>o?-1:1};return 0!==i.horizontal&&(this.oldX=t),0!==i.vertical&&(this.oldY=e),i},findDropTargetRow:function(t,e){for(var n=0,o=this.currentTable.rows,i=this.currentTable.tableDnDConfig,a=0,s=null,l=0;l<o.length;l++)if(s=o[l],a=this.getPosition(s).y,n=parseInt(s.offsetHeight)/2,0===s.offsetHeight&&(a=this.getPosition(s.firstChild).y,n=parseInt(s.firstChild.offsetHeight)/2),e>a-n&&e<a+n)return t.is(s)||i.onAllowDrop&&!i.onAllowDrop(t,s)||r(s).hasClass("nodrop")?null:s;return null},processMouseup:function(){if(!this.currentTable||!this.dragObject)return null;var t=this.currentTable.tableDnDConfig,e=this.dragObject,n=0,o=0;r(i).unbind(s,this.mousemove).unbind(l,this.mouseup),t.hierarchyLevel&&t.autoCleanRelations&&r(this.currentTable.rows).first().find("td:first").children().each((function(){(o=r(this).parents("tr:first").data("level"))&&r(this).parents("tr:first").data("level",--o)&&r(this).remove()}))&&t.hierarchyLevel>1&&r(this.currentTable.rows).each((function(){if((o=r(this).data("level"))>1)for(n=r(this).prev().data("level");o>n+1;)r(this).find("td:first").children(":first").remove(),r(this).data("level",--o)})),t.onDragClass&&r(e).removeClass(t.onDragClass)||r(e).css(t.onDropStyle),this.dragObject=null,t.onDrop&&this.originalOrder!==this.currentOrder()&&r(e).hide().fadeIn("fast")&&t.onDrop(this.currentTable,e),t.onDragStop&&t.onDragStop(this.currentTable,e),this.currentTable=null},mouseup:function(t){return t&&t.preventDefault(),r.tableDnD.processMouseup(),!1},jsonize:function(t){var e=this.currentTable;return t?JSON.stringify(this.tableData(e),null,e.tableDnDConfig.jsonPretifySeparator):JSON.stringify(this.tableData(e))},serialize:function(){return r.param(this.tableData(this.currentTable))},serializeTable:function(t){for(var e="",n=t.tableDnDConfig.serializeParamName||t.id,r=t.rows,o=0;o<r.length;o++){e.length>0&&(e+="&");var i=r[o].id;i&&t.tableDnDConfig&&t.tableDnDConfig.serializeRegexp&&(e+=n+"[]="+(i=i.match(t.tableDnDConfig.serializeRegexp)[0]))}return e},serializeTables:function(){var t=[];return r("table").each((function(){this.id&&t.push(r.param(r.tableDnD.tableData(this)))})),t.join("&")},tableData:function(t){var e,n,o,i,a=t.tableDnDConfig,s=[],l=0,u=0,d=null,c={};if(t||(t=this.currentTable),!t||!t.rows||!t.rows.length)return{error:{code:500,message:"Not a valid table."}};if(!t.id&&!a.serializeParamName)return{error:{code:500,message:"No serializable unique id provided."}};i=a.autoCleanRelations&&t.rows||r.makeArray(t.rows),e=function(t){return t&&a&&a.serializeRegexp?t.match(a.serializeRegexp)[0]:t},c[o=n=a.serializeParamName||t.id]=[],!a.autoCleanRelations&&r(i[0]).data("level")&&i.unshift({id:"undefined"});for(var f=0;f<i.length;f++)if(a.hierarchyLevel){if(0===(u=r(i[f]).data("level")||0))o=n,s=[];else if(u>l)s.push([o,l]),o=e(i[f-1].id);else if(u<l)for(var h=0;h<s.length;h++)s[h][1]===u&&(o=s[h][0]),s[h][1]>=l&&(s[h][1]=0);l=u,r.isArray(c[o])||(c[o]=[]),(d=e(i[f].id))&&c[o].push(d)}else(d=e(i[f].id))&&c[o].push(d);return c}},u.fn.extend({tableDnD:r.tableDnD.build,tableDnDUpdate:r.tableDnD.updateTables,tableDnDSerialize:r.proxy(r.tableDnD.serialize,r.tableDnD),tableDnDSerializeAll:r.tableDnD.serializeTables,tableDnDData:r.proxy(r.tableDnD.tableData,r.tableDnD)})},73609:t=>{"use strict";t.exports=window.jQuery}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}(()=>{"use strict";var t=h(n(53277)),e=h(n(58630)),r=h(n(96803)),o=h(n(37758)),i=h(n(91781)),a=h(n(17868)),s=h(n(5595)),l=h(n(2573)),u=h(n(91137)),d=h(n(50204)),c=h(n(3010)),f=h(n(92448));function h(t){return t&&t.__esModule?t:{default:t}}
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
 */(0,window.$)((function(){var n=new t.default("attribute_group");n.addExtension(new l.default),n.addExtension(new o.default),n.addExtension(new e.default),n.addExtension(new r.default),n.addExtension(new i.default),n.addExtension(new a.default),n.addExtension(new s.default),n.addExtension(new u.default),n.addExtension(new f.default),new d.default("attributesShowcaseCard").addExtension(new c.default)}))})(),window.attribute_group={}})();