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
 */var a=window.$,u=function(){function e(t){(0,r.default)(this,e),this.selector=".ps-sortable-column",this.columns=a(t).find(this.selector)}return(0,o.default)(e,[{key:"attach",value:function(){var e=this;this.columns.on("click",(function(t){var n=a(t.delegateTarget);e.sortByColumn(n,e.getToggledSortDirection(n))}))}},{key:"sortBy",value:function(e,t){var n=this.columns.is('[data-sort-col-name="'+e+'"]');if(!n)throw new Error('Cannot sort by "'+e+'": invalid column');this.sortByColumn(n,t)}},{key:"sortByColumn",value:function(e,t){window.location=this.getUrl(e.data("sortColName"),"desc"===t?"desc":"asc",e.data("sortPrefix"))}},{key:"getToggledSortDirection",value:function(e){return"asc"===e.data("sortDirection")?"desc":"asc"}},{key:"getUrl",value:function(e,t,n){var r=new URL(window.location.href),o=r.searchParams;return n?(o.set(n+"[orderBy]",e),o.set(n+"[sortOrder]",t)):(o.set("orderBy",e),o.set("sortOrder",t)),r.toString()}}]),e}();t.default=u},76544:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventEmitter=void 0;var r,o=n(17187),i=(r=o)&&r.__esModule?r:{default:r};var a=t.EventEmitter=new i.default;
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
                                                                   */t.default=a},91781:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(68840));function a(e){return e&&e.__esModule?e:{default:e}}var u=window.$,s=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=this;e.getContainer().on("click",".js-submit-row-action",(function(n){n.preventDefault();var r=u(n.currentTarget),o=r.data("confirmMessage"),i=r.data("title"),a=r.data("method");if(i)t.showConfirmModal(r,e,o,i,a);else{if(o.length&&!window.confirm(o))return;t.postForm(r,a)}}))}},{key:"postForm",value:function(e,t){var n=["GET","POST"].includes(t),r=u("<form>",{action:e.data("url"),method:n?t:"POST"}).appendTo("body");n||r.append(u("<input>",{type:"_hidden",name:"_method",value:t})),r.submit()}},{key:"showConfirmModal",value:function(e,t,n,r,o){var a=this,u=e.data("confirmButtonLabel"),s=e.data("closeButtonLabel"),c=e.data("confirmButtonClass");new i.default({id:t.getId()+"-grid-confirm-modal",confirmTitle:r,confirmMessage:n,confirmButtonLabel:u,closeButtonLabel:s,confirmButtonClass:c},(function(){return a.postForm(e,o)})).show()}}]),e}();
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
 */t.default=s},5595:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,u=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){this.handleBulkActionCheckboxSelect(e),this.handleBulkActionSelectAllCheckbox(e)}},{key:"handleBulkActionSelectAllCheckbox",value:function(e){var t=this;e.getContainer().on("change",".js-bulk-action-select-all",(function(n){var r=a(n.currentTarget).is(":checked");r?t.enableBulkActionsBtn(e):t.disableBulkActionsBtn(e),e.getContainer().find(".js-bulk-action-checkbox").prop("checked",r)}))}},{key:"handleBulkActionCheckboxSelect",value:function(e){var t=this;e.getContainer().on("change",".js-bulk-action-checkbox",(function(){e.getContainer().find(".js-bulk-action-checkbox:checked").length>0?t.enableBulkActionsBtn(e):t.disableBulkActionsBtn(e)}))}},{key:"enableBulkActionsBtn",value:function(e){e.getContainer().find(".js-bulk-actions-btn").prop("disabled",!1)}},{key:"disableBulkActionsBtn",value:function(e){e.getContainer().find(".js-bulk-actions-btn").prop("disabled",!0)}}]),e}();t.default=u},2573:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,u=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=this;e.getHeaderContainer().on("click",".js-common_show_query-grid-action",(function(){return t.onShowSqlQueryClick(e)})),e.getHeaderContainer().on("click",".js-common_export_sql_manager-grid-action",(function(){return t.onExportSqlManagerClick(e)}))}},{key:"onShowSqlQueryClick",value:function(e){var t=a("#"+e.getId()+"_common_show_query_modal_form");this.fillExportForm(t,e);var n=a("#"+e.getId()+"_grid_common_show_query_modal");n.modal("show"),n.on("click",".btn-sql-submit",(function(){return t.submit()}))}},{key:"onExportSqlManagerClick",value:function(e){var t=a("#"+e.getId()+"_common_show_query_modal_form");this.fillExportForm(t,e),t.submit()}},{key:"fillExportForm",value:function(e,t){var n=t.getContainer().find(".js-grid-table").data("query");e.find('textarea[name="sql"]').val(n),e.find('input[name="name"]').val(this.getNameFromBreadcrumb())}},{key:"getNameFromBreadcrumb",value:function(){var e=a(".header-toolbar").find(".breadcrumb-item"),t="";return e.each((function(e,n){var r=a(n),o=r.find("a").length>0?r.find("a").text():r.text();t.length>0&&(t=t.concat(" > ")),t=t.concat(o)})),t}}]),e}();t.default=u},96803:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(4110));function a(e){return e&&e.__esModule?e:{default:e}}var u=window.$,s=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){e.getContainer().on("click",".js-reset-search",(function(e){(0,i.default)(u(e.currentTarget).data("url"),u(e.currentTarget).data("redirect"))}))}}]),e}();
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
 */t.default=s},91137:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,u=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){this.initRowLinks(e),this.initConfirmableActions(e)}},{key:"initConfirmableActions",value:function(e){e.getContainer().on("click",".js-link-row-action",(function(e){var t=a(e.currentTarget).data("confirm-message");t.length&&!window.confirm(t)&&e.preventDefault()}))}},{key:"initRowLinks",value:function(e){a("tr",e.getContainer()).each((function(){var e=a(this);a(".js-link-row-action[data-clickable-row=1]:first",e).each((function(){var t=a(this),n=t.closest("td"),r=a("td.clickable",e).not(n),o=!1;r.addClass("cursor-pointer").mousedown((function(){a(window).mousemove((function(){o=!0,a(window).unbind("mousemove")}))})),r.mouseup((function(){var e=o;if(o=!1,a(window).unbind("mousemove"),!e){var n=t.data("confirm-message");n.length&&!window.confirm(n)||(document.location=t.attr("href"))}}))}))}))}}]),e}();t.default=u},37758:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){e.getHeaderContainer().on("click",".js-common_refresh_list-grid-action",(function(){window.location.reload()}))}}]),e}();t.default=a},58630:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(61353));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=e.getContainer().find("table.table");new i.default(t).attach()}}]),e}();
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
      */t.default=u},17868:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(68840));function a(e){return e&&e.__esModule?e:{default:e}}var u=window.$,s=function(){function e(){var t=this;return(0,r.default)(this,e),{extend:function(e){return t.extend(e)}}}return(0,o.default)(e,[{key:"extend",value:function(e){var t=this;e.getContainer().on("click",".js-bulk-action-submit-btn",(function(n){t.submit(n,e)}))}},{key:"submit",value:function(e,t){var n=u(e.currentTarget),r=n.data("confirm-message"),o=n.data("confirmTitle");void 0!==r&&r.length>0?void 0!==o?this.showConfirmModal(n,t,r,o):window.confirm(r)&&this.postForm(n,t):this.postForm(n,t)}},{key:"showConfirmModal",value:function(e,t,n,r){var o=this,a=e.data("confirmButtonLabel"),u=e.data("closeButtonLabel"),s=e.data("confirmButtonClass");new i.default({id:t.getId()+"-grid-confirm-modal",confirmTitle:r,confirmMessage:n,confirmButtonLabel:a,closeButtonLabel:u,confirmButtonClass:s},(function(){return o.postForm(e,t)})).show()}},{key:"postForm",value:function(e,t){var n=u("#"+t.getId()+"_filter_form");n.attr("action",e.data("form-url")),n.attr("method",e.data("form-method")),n.submit()}}]),e}();
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
 */t.default=s},36188:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,u=function(){function e(){var t=this;return(0,r.default)(this,e),{extend:function(e){return t.extend(e)}}}return(0,o.default)(e,[{key:"extend",value:function(e){var t=this;e.getHeaderContainer().on("click",".js-grid-action-submit-btn",(function(n){t.handleSubmit(n,e)}))}},{key:"handleSubmit",value:function(e,t){var n=a(e.currentTarget),r=n.data("confirm-message");if(!(void 0!==r&&r.length>0)||window.confirm(r)){var o=a("#"+t.getId()+"_filter_form");o.attr("action",n.data("url")),o.attr("method",n.data("method")),o.find('input[name="'+t.getId()+'[_token]"]').val(n.data("csrf")),o.submit()}}}]),e}();t.default=u},53277:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,u=function(){function e(t){(0,r.default)(this,e),this.id=t,this.$container=a("#"+this.id+"_grid")}return(0,o.default)(e,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(e){e.extend(this)}}]),e}();t.default=u},68840:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(85315),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e,t,n){var r=this,o=e.id,u=e.closable;this.modal=function(e){var t,n=e.id,r=void 0===n?"confirm-modal":n,o=e.confirmTitle,a=e.confirmMessage,u=void 0===a?"":a,s=e.closeButtonLabel,c=void 0===s?"Close":s,l=e.confirmButtonLabel,d=void 0===l?"Accept":l,f=e.confirmButtonClass,v=void 0===f?"btn-primary":f,h=e.customButtons,p=void 0===h?[]:h,m={};m.container=document.createElement("div"),m.container.classList.add("modal","fade"),m.container.id=r,m.dialog=document.createElement("div"),m.dialog.classList.add("modal-dialog"),m.content=document.createElement("div"),m.content.classList.add("modal-content"),m.header=document.createElement("div"),m.header.classList.add("modal-header"),o&&(m.title=document.createElement("h4"),m.title.classList.add("modal-title"),m.title.innerHTML=o);m.closeIcon=document.createElement("button"),m.closeIcon.classList.add("close"),m.closeIcon.setAttribute("type","button"),m.closeIcon.dataset.dismiss="modal",m.closeIcon.innerHTML="×",m.body=document.createElement("div"),m.body.classList.add("modal-body","text-left","font-weight-normal"),m.message=document.createElement("p"),m.message.classList.add("confirm-message"),m.message.innerHTML=u,m.footer=document.createElement("div"),m.footer.classList.add("modal-footer"),m.closeButton=document.createElement("button"),m.closeButton.setAttribute("type","button"),m.closeButton.classList.add("btn","btn-outline-secondary","btn-lg"),m.closeButton.dataset.dismiss="modal",m.closeButton.innerHTML=c,m.confirmButton=document.createElement("button"),m.confirmButton.setAttribute("type","button"),m.confirmButton.classList.add("btn",v,"btn-lg","btn-confirm-submit"),m.confirmButton.dataset.dismiss="modal",m.confirmButton.innerHTML=d,o?m.header.append(m.title,m.closeIcon):m.header.appendChild(m.closeIcon);return m.body.appendChild(m.message),(t=m.footer).append.apply(t,[m.closeButton].concat((0,i.default)(p),[m.confirmButton])),m.content.append(m.header,m.body,m.footer),m.dialog.appendChild(m.content),m.container.appendChild(m.dialog),m}(e),this.$modal=a(this.modal.container),this.show=function(){r.$modal.modal()},this.modal.confirmButton.addEventListener("click",t),this.$modal.modal({backdrop:!!u||"static",keyboard:void 0===u||u,closable:void 0===u||u,show:!1}),this.$modal.on("hidden.bs.modal",(function(){document.querySelector("#"+o).remove(),n&&n()})),document.body.appendChild(this.modal.container)};
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
 */var a=window.$,u=function(){function e(){(0,r.default)(this,e)}return(0,o.default)(e,[{key:"extend",value:function(e){var t=e.getContainer();t.on("click",".js-remove-helper-block",(function(e){t.remove();var n=a(e.target),r=n.data("closeUrl"),o=n.data("cardName");r&&a.post(r,{close:1,name:o})}))}}]),e}();t.default=u},50204:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,u=function(){function e(t){(0,r.default)(this,e),this.id=t,this.$container=a("#"+this.id)}return(0,o.default)(e,[{key:"getContainer",value:function(){return this.$container}},{key:"addExtension",value:function(e){e.extend(this)}}]),e}();t.default=u},52666:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(99663),i=(r=o)&&r.__esModule?r:{default:r};
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
var a=window.$;t.default=function e(t){var n=t.tokenFieldSelector,r=t.options,o=void 0===r?{}:r;(0,i.default)(this,e),a(n).tokenfield(o)}},92526:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=n(76544);function a(e){return e&&e.__esModule?e:{default:e}}var u=window.$,s=function(){function e(t){var n=this;(0,r.default)(this,e);var o=t||{};return this.localeItemSelector=o.localeItemSelector||".js-locale-item",this.localeButtonSelector=o.localeButtonSelector||".js-locale-btn",this.localeInputSelector=o.localeInputSelector||".js-locale-input",this.selectedLocale=u(this.localeItemSelector).data("locale"),u("body").on("click",this.localeItemSelector,this.toggleLanguage.bind(this)),i.EventEmitter.on("languageSelected",this.toggleInputs.bind(this)),{localeItemSelector:this.localeItemSelector,localeButtonSelector:this.localeButtonSelector,localeInputSelector:this.localeInputSelector,refreshFormInputs:function(e){n.refreshInputs(e)},getSelectedLocale:function(){return n.selectedLocale}}}return(0,o.default)(e,[{key:"refreshInputs",value:function(e){this.selectedLocale&&i.EventEmitter.emit("languageSelected",{selectedLocale:this.selectedLocale,form:e})}},{key:"toggleLanguage",value:function(e){var t=u(e.target),n=t.closest("form");this.selectedLocale=t.data("locale"),this.refreshInputs(n)}},{key:"toggleInputs",value:function(e){var t=e.form;this.selectedLocale=e.selectedLocale;var n=t.find(this.localeButtonSelector),r=n.data("change-language-url");n.text(this.selectedLocale),t.find(this.localeInputSelector).addClass("d-none"),t.find(this.localeInputSelector+".js-locale-"+this.selectedLocale).removeClass("d-none"),r&&this.saveSelectedLanguage(r,this.selectedLocale)}},{key:"saveSelectedLanguage",value:function(e,t){u.post({url:e,data:{language_iso_code:t}})}}]),e}();
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
 */t.default=s},64553:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,u=function(){function e(){var t=this;(0,r.default)(this,e);var n=".js-meta-page-name",o=a(n).val();this.setUrlRewriteDisabledStatusByCurrentPage(o),a(document).on("change",n,(function(e){return t.changePageNameEvent(e)}))}return(0,o.default)(e,[{key:"changePageNameEvent",value:function(e){var t=a(e.currentTarget).val();this.setUrlRewriteDisabledStatusByCurrentPage(t)}},{key:"setUrlRewriteDisabledStatusByCurrentPage",value:function(e){a(".js-url-rewrite input").prop("disabled","index"===e)}}]),e}();t.default=u},24043:(e,t,n)=>{e.exports={default:n(47185),__esModule:!0}},32242:(e,t,n)=>{e.exports={default:n(33391),__esModule:!0}},99663:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},22600:(e,t,n)=>{"use strict";t.__esModule=!0;var r,o=n(32242),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},85315:(e,t,n)=>{"use strict";t.__esModule=!0;var r,o=n(24043),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,i.default)(e)}},47185:(e,t,n)=>{n(91867),n(2586),e.exports=n(34579).Array.from},33391:(e,t,n)=>{n(31477);var r=n(34579).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},85663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},12159:(e,t,n)=>{var r=n(36727);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},57428:(e,t,n)=>{var r=n(7932),o=n(78728),i=n(16531);e.exports=function(e){return function(t,n,a){var u,s=r(t),c=o(s.length),l=i(a,c);if(e&&n!=n){for(;c>l;)if((u=s[l++])!=u)return!0}else for(;c>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}}},14677:(e,t,n)=>{var r=n(32894),o=n(22939)("toStringTag"),i="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?n:i?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},32894:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},34579:e=>{var t=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=t)},52445:(e,t,n)=>{"use strict";var r=n(4743),o=n(83101);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},19216:(e,t,n)=>{var r=n(85663);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},8333:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},89666:(e,t,n)=>{e.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},97467:(e,t,n)=>{var r=n(36727),o=n(33938).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},73338:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},83856:(e,t,n)=>{var r=n(33938),o=n(34579),i=n(19216),a=n(41818),u=n(27069),s=function(e,t,n){var c,l,d,f=e&s.F,v=e&s.G,h=e&s.S,p=e&s.P,m=e&s.B,y=e&s.W,g=v?o:o[t]||(o[t]={}),b=g.prototype,_=v?r:h?r[t]:(r[t]||{}).prototype;for(c in v&&(n=t),n)(l=!f&&_&&void 0!==_[c])&&u(g,c)||(d=l?_[c]:n[c],g[c]=v&&"function"!=typeof _[c]?n[c]:m&&l?i(d,r):y&&_[c]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):p&&"function"==typeof d?i(Function.call,d):d,p&&((g.virtual||(g.virtual={}))[c]=d,e&s.R&&b&&!b[c]&&a(b,c,d)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},33938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},27069:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},41818:(e,t,n)=>{var r=n(4743),o=n(83101);e.exports=n(89666)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},54881:(e,t,n)=>{var r=n(33938).document;e.exports=r&&r.documentElement},33758:(e,t,n)=>{e.exports=!n(89666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(97467)("div"),"a",{get:function(){return 7}}).a}))},50799:(e,t,n)=>{var r=n(32894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},45991:(e,t,n)=>{var r=n(15449),o=n(22939)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||i[o]===e)}},36727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},95602:(e,t,n)=>{var r=n(12159);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&r(i.call(e)),t}}},33945:(e,t,n)=>{"use strict";var r=n(98989),o=n(83101),i=n(25378),a={};n(41818)(a,n(22939)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=r(a,{next:o(1,n)}),i(e,t+" Iterator")}},45700:(e,t,n)=>{"use strict";var r=n(16227),o=n(83856),i=n(57470),a=n(41818),u=n(15449),s=n(33945),c=n(25378),l=n(95089),d=n(22939)("iterator"),f=!([].keys&&"next"in[].keys()),v="keys",h="values",p=function(){return this};e.exports=function(e,t,n,m,y,g,b){s(n,t,m);var _,w,x,k=function(e){if(!f&&e in C)return C[e];switch(e){case v:case h:return function(){return new n(this,e)}}return function(){return new n(this,e)}},j=t+" Iterator",L=y==h,M=!1,C=e.prototype,O=C[d]||C["@@iterator"]||y&&C[y],S=O||k(y),E=y?L?k("entries"):S:void 0,B="Array"==t&&C.entries||O;if(B&&(x=l(B.call(new e)))!==Object.prototype&&x.next&&(c(x,j,!0),r||"function"==typeof x[d]||a(x,d,p)),L&&O&&O.name!==h&&(M=!0,S=function(){return O.call(this)}),r&&!b||!f&&!M&&C[d]||a(C,d,S),u[t]=S,u[j]=p,y)if(_={values:L?S:k(h),keys:g?S:k(v),entries:E},b)for(w in _)w in C||i(C,w,_[w]);else o(o.P+o.F*(f||M),t,_);return _}},96630:(e,t,n)=>{var r=n(22939)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},e(i)}catch(e){}return n}},15449:e=>{e.exports={}},16227:e=>{e.exports=!0},98989:(e,t,n)=>{var r=n(12159),o=n(57856),i=n(73338),a=n(58989)("IE_PROTO"),u=function(){},s=function(){var e,t=n(97467)("iframe"),r=i.length;for(t.style.display="none",n(54881).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),s=e.F;r--;)delete s.prototype[i[r]];return s()};e.exports=Object.create||function(e,t){var n;return null!==e?(u.prototype=r(e),n=new u,u.prototype=null,n[a]=e):n=s(),void 0===t?n:o(n,t)}},4743:(e,t,n)=>{var r=n(12159),o=n(33758),i=n(33206),a=Object.defineProperty;t.f=n(89666)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},57856:(e,t,n)=>{var r=n(4743),o=n(12159),i=n(46162);e.exports=n(89666)?Object.defineProperties:function(e,t){o(e);for(var n,a=i(t),u=a.length,s=0;u>s;)r.f(e,n=a[s++],t[n]);return e}},95089:(e,t,n)=>{var r=n(27069),o=n(66530),i=n(58989)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},12963:(e,t,n)=>{var r=n(27069),o=n(7932),i=n(57428)(!1),a=n(58989)("IE_PROTO");e.exports=function(e,t){var n,u=o(e),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;t.length>s;)r(u,n=t[s++])&&(~i(c,n)||c.push(n));return c}},46162:(e,t,n)=>{var r=n(12963),o=n(73338);e.exports=Object.keys||function(e){return r(e,o)}},83101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},57470:(e,t,n)=>{e.exports=n(41818)},25378:(e,t,n)=>{var r=n(4743).f,o=n(27069),i=n(22939)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},58989:(e,t,n)=>{var r=n(20250)("keys"),o=n(65730);e.exports=function(e){return r[e]||(r[e]=o(e))}},20250:(e,t,n)=>{var r=n(34579),o=n(33938),i="__core-js_shared__",a=o[i]||(o[i]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(16227)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},90510:(e,t,n)=>{var r=n(11052),o=n(8333);e.exports=function(e){return function(t,n){var i,a,u=String(o(t)),s=r(n),c=u.length;return s<0||s>=c?e?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?e?u.charAt(s):i:e?u.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},16531:(e,t,n)=>{var r=n(11052),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},11052:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7932:(e,t,n)=>{var r=n(50799),o=n(8333);e.exports=function(e){return r(o(e))}},78728:(e,t,n)=>{var r=n(11052),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},66530:(e,t,n)=>{var r=n(8333);e.exports=function(e){return Object(r(e))}},33206:(e,t,n)=>{var r=n(36727);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},65730:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+n).toString(36))}},22939:(e,t,n)=>{var r=n(20250)("wks"),o=n(65730),i=n(33938).Symbol,a="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=r},83728:(e,t,n)=>{var r=n(14677),o=n(22939)("iterator"),i=n(15449);e.exports=n(34579).getIteratorMethod=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[r(e)]}},2586:(e,t,n)=>{"use strict";var r=n(19216),o=n(83856),i=n(66530),a=n(95602),u=n(45991),s=n(78728),c=n(52445),l=n(83728);o(o.S+o.F*!n(96630)((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,o,d,f=i(e),v="function"==typeof this?this:Array,h=arguments.length,p=h>1?arguments[1]:void 0,m=void 0!==p,y=0,g=l(f);if(m&&(p=r(p,h>2?arguments[2]:void 0,2)),null==g||v==Array&&u(g))for(n=new v(t=s(f.length));t>y;y++)c(n,y,m?p(f[y],y):f[y]);else for(d=g.call(f),n=new v;!(o=d.next()).done;y++)c(n,y,m?a(d,p,[o.value,y],!0):o.value);return n.length=y,n}})},31477:(e,t,n)=>{var r=n(83856);r(r.S+r.F*!n(89666),"Object",{defineProperty:n(4743).f})},91867:(e,t,n)=>{"use strict";var r=n(90510)(!0);n(45700)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})}))},17187:e=>{"use strict";var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var a=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function s(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function c(e,t,n,r){var o,i,a,c;if(u(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),a=i[t]),void 0===a)a=i[t]=n,++e._eventsCount;else if("function"==typeof a?a=i[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(o=s(e))>0&&a.length>o&&!a.warned){a.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=a.length,c=l,console&&console.warn&&console.warn(c)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=l.bind(r);return o.listener=n,r.wrapFn=o,o}function f(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):h(o,o.length)}function v(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return s(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=a,u}var s=i[e];if(void 0===s)return!1;if("function"==typeof s)r(s,this,t);else{var c=s.length,l=h(s,c);for(n=0;n<c;++n)r(l[n],this,t)}return!0},i.prototype.addListener=function(e,t){return c(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return c(this,e,t,!0)},i.prototype.once=function(e,t){return u(t),this.on(e,d(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,d(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,r,o,i,a;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){a=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},i.prototype.listeners=function(e){return f(this,e,!0)},i.prototype.rawListeners=function(e){return f(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},i.prototype.listenerCount=v,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{"use strict";var e=y(n(53277)),t=y(n(37758)),r=y(n(2573)),o=y(n(96803)),i=y(n(58630)),a=y(n(58899)),u=y(n(36188)),s=y(n(17868)),c=y(n(5595)),l=y(n(91781)),d=y(n(50204)),f=y(n(3010)),v=y(n(52666)),h=y(n(92526)),p=y(n(91137)),m=y(n(64553));function y(e){return e&&e.__esModule?e:{default:e}}
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
 */(0,window.$)((function(){var n=new e.default("meta");n.addExtension(new t.default),n.addExtension(new r.default),n.addExtension(new o.default),n.addExtension(new i.default),n.addExtension(new a.default),n.addExtension(new u.default),n.addExtension(new s.default),n.addExtension(new l.default),n.addExtension(new c.default),n.addExtension(new p.default),new d.default("seo-urls-showcase-card").addExtension(new f.default),new v.default({tokenFieldSelector:"input.js-taggable-field",options:{createTokensOnBlur:!0}}),new h.default,new m.default}))})(),window.meta={}})();