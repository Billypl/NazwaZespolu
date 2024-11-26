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
 */var a=window.$,u=function(){function t(e){(0,r.default)(this,t),this.selector=".ps-sortable-column",this.columns=a(e).find(this.selector)}return(0,o.default)(t,[{key:"attach",value:function(){var t=this;this.columns.on("click",(function(e){var n=a(e.delegateTarget);t.sortByColumn(n,t.getToggledSortDirection(n))}))}},{key:"sortBy",value:function(t,e){var n=this.columns.is('[data-sort-col-name="'+t+'"]');if(!n)throw new Error('Cannot sort by "'+t+'": invalid column');this.sortByColumn(n,e)}},{key:"sortByColumn",value:function(t,e){window.location=this.getUrl(t.data("sortColName"),"desc"===e?"desc":"asc",t.data("sortPrefix"))}},{key:"getToggledSortDirection",value:function(t){return"asc"===t.data("sortDirection")?"desc":"asc"}},{key:"getUrl",value:function(t,e,n){var r=new URL(window.location.href),o=r.searchParams;return n?(o.set(n+"[orderBy]",t),o.set(n+"[sortOrder]",e)):(o.set("orderBy",t),o.set("sortOrder",e)),r.toString()}}]),t}();e.default=u},91781:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(68840));function a(t){return t&&t.__esModule?t:{default:t}}var u=window.$,s=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=this;t.getContainer().on("click",".js-submit-row-action",(function(n){n.preventDefault();var r=u(n.currentTarget),o=r.data("confirmMessage"),i=r.data("title"),a=r.data("method");if(i)e.showConfirmModal(r,t,o,i,a);else{if(o.length&&!window.confirm(o))return;e.postForm(r,a)}}))}},{key:"postForm",value:function(t,e){var n=["GET","POST"].includes(e),r=u("<form>",{action:t.data("url"),method:n?e:"POST"}).appendTo("body");n||r.append(u("<input>",{type:"_hidden",name:"_method",value:e})),r.submit()}},{key:"showConfirmModal",value:function(t,e,n,r,o){var a=this,u=t.data("confirmButtonLabel"),s=t.data("closeButtonLabel"),c=t.data("confirmButtonClass");new i.default({id:e.getId()+"-grid-confirm-modal",confirmTitle:r,confirmMessage:n,confirmButtonLabel:u,closeButtonLabel:s,confirmButtonClass:c},(function(){return a.postForm(t,o)})).show()}}]),t}();
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
 */e.default=s},5595:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,u=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){this.handleBulkActionCheckboxSelect(t),this.handleBulkActionSelectAllCheckbox(t)}},{key:"handleBulkActionSelectAllCheckbox",value:function(t){var e=this;t.getContainer().on("change",".js-bulk-action-select-all",(function(n){var r=a(n.currentTarget).is(":checked");r?e.enableBulkActionsBtn(t):e.disableBulkActionsBtn(t),t.getContainer().find(".js-bulk-action-checkbox").prop("checked",r)}))}},{key:"handleBulkActionCheckboxSelect",value:function(t){var e=this;t.getContainer().on("change",".js-bulk-action-checkbox",(function(){t.getContainer().find(".js-bulk-action-checkbox:checked").length>0?e.enableBulkActionsBtn(t):e.disableBulkActionsBtn(t)}))}},{key:"enableBulkActionsBtn",value:function(t){t.getContainer().find(".js-bulk-actions-btn").prop("disabled",!1)}},{key:"disableBulkActionsBtn",value:function(t){t.getContainer().find(".js-bulk-actions-btn").prop("disabled",!0)}}]),t}();e.default=u},2573:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,u=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=this;t.getHeaderContainer().on("click",".js-common_show_query-grid-action",(function(){return e.onShowSqlQueryClick(t)})),t.getHeaderContainer().on("click",".js-common_export_sql_manager-grid-action",(function(){return e.onExportSqlManagerClick(t)}))}},{key:"onShowSqlQueryClick",value:function(t){var e=a("#"+t.getId()+"_common_show_query_modal_form");this.fillExportForm(e,t);var n=a("#"+t.getId()+"_grid_common_show_query_modal");n.modal("show"),n.on("click",".btn-sql-submit",(function(){return e.submit()}))}},{key:"onExportSqlManagerClick",value:function(t){var e=a("#"+t.getId()+"_common_show_query_modal_form");this.fillExportForm(e,t),e.submit()}},{key:"fillExportForm",value:function(t,e){var n=e.getContainer().find(".js-grid-table").data("query");t.find('textarea[name="sql"]').val(n),t.find('input[name="name"]').val(this.getNameFromBreadcrumb())}},{key:"getNameFromBreadcrumb",value:function(){var t=a(".header-toolbar").find(".breadcrumb-item"),e="";return t.each((function(t,n){var r=a(n),o=r.find("a").length>0?r.find("a").text():r.text();e.length>0&&(e=e.concat(" > ")),e=e.concat(o)})),e}}]),t}();e.default=u},96803:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(4110));function a(t){return t&&t.__esModule?t:{default:t}}var u=window.$,s=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){t.getContainer().on("click",".js-reset-search",(function(t){(0,i.default)(u(t.currentTarget).data("url"),u(t.currentTarget).data("redirect"))}))}}]),t}();
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
 */e.default=s},91137:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=t.getContainer().find(".column-filters");e.find(".grid-search-button").prop("disabled",!0),e.find("input:not(.js-bulk-action-select-all), select").on("input dp.change",(function(){e.find(".grid-search-button").prop("disabled",!1),e.find(".js-grid-reset-button").prop("hidden",!1)}))}}]),t}();e.default=a},58899:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,u=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){this.initRowLinks(t),this.initConfirmableActions(t)}},{key:"initConfirmableActions",value:function(t){t.getContainer().on("click",".js-link-row-action",(function(t){var e=a(t.currentTarget).data("confirm-message");e.length&&!window.confirm(e)&&t.preventDefault()}))}},{key:"initRowLinks",value:function(t){a("tr",t.getContainer()).each((function(){var t=a(this);a(".js-link-row-action[data-clickable-row=1]:first",t).each((function(){var e=a(this),n=e.closest("td"),r=a("td.clickable",t).not(n),o=!1;r.addClass("cursor-pointer").mousedown((function(){a(window).mousemove((function(){o=!0,a(window).unbind("mousemove")}))})),r.mouseup((function(){var t=o;if(o=!1,a(window).unbind("mousemove"),!t){var n=e.data("confirm-message");n.length&&!window.confirm(n)||(document.location=e.attr("href"))}}))}))}))}}]),t}();e.default=u},37758:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){t.getHeaderContainer().on("click",".js-common_refresh_list-grid-action",(function(){window.location.reload()}))}}]),t}();e.default=a},58630:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(61353));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=t.getContainer().find("table.table");new i.default(e).attach()}}]),t}();
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
      */e.default=u},17868:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600)),i=a(n(68840));function a(t){return t&&t.__esModule?t:{default:t}}var u=window.$,s=function(){function t(){var e=this;return(0,r.default)(this,t),{extend:function(t){return e.extend(t)}}}return(0,o.default)(t,[{key:"extend",value:function(t){var e=this;t.getContainer().on("click",".js-bulk-action-submit-btn",(function(n){e.submit(n,t)}))}},{key:"submit",value:function(t,e){var n=u(t.currentTarget),r=n.data("confirm-message"),o=n.data("confirmTitle");void 0!==r&&r.length>0?void 0!==o?this.showConfirmModal(n,e,r,o):window.confirm(r)&&this.postForm(n,e):this.postForm(n,e)}},{key:"showConfirmModal",value:function(t,e,n,r){var o=this,a=t.data("confirmButtonLabel"),u=t.data("closeButtonLabel"),s=t.data("confirmButtonClass");new i.default({id:e.getId()+"-grid-confirm-modal",confirmTitle:r,confirmMessage:n,confirmButtonLabel:a,closeButtonLabel:u,confirmButtonClass:s},(function(){return o.postForm(t,e)})).show()}},{key:"postForm",value:function(t,e){var n=u("#"+e.getId()+"_filter_form");n.attr("action",t.data("form-url")),n.attr("method",t.data("form-method")),n.submit()}}]),t}();
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
 */e.default=s},36188:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,u=function(){function t(){var e=this;return(0,r.default)(this,t),{extend:function(t){return e.extend(t)}}}return(0,o.default)(t,[{key:"extend",value:function(t){var e=this;t.getHeaderContainer().on("click",".js-grid-action-submit-btn",(function(n){e.handleSubmit(n,t)}))}},{key:"handleSubmit",value:function(t,e){var n=a(t.currentTarget),r=n.data("confirm-message");if(!(void 0!==r&&r.length>0)||window.confirm(r)){var o=a("#"+e.getId()+"_filter_form");o.attr("action",n.data("url")),o.attr("method",n.data("method")),o.find('input[name="'+e.getId()+'[_token]"]').val(n.data("csrf")),o.submit()}}}]),t}();e.default=u},53277:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,u=function(){function t(e){(0,r.default)(this,t),this.id=e,this.$container=a("#"+this.id+"_grid")}return(0,o.default)(t,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(t){t.extend(this)}}]),t}();e.default=u},68840:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(85315),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e,n){var r=this,o=t.id,u=t.closable;this.modal=function(t){var e,n=t.id,r=void 0===n?"confirm-modal":n,o=t.confirmTitle,a=t.confirmMessage,u=void 0===a?"":a,s=t.closeButtonLabel,c=void 0===s?"Close":s,l=t.confirmButtonLabel,d=void 0===l?"Accept":l,f=t.confirmButtonClass,v=void 0===f?"btn-primary":f,m=t.customButtons,h=void 0===m?[]:m,p={};p.container=document.createElement("div"),p.container.classList.add("modal","fade"),p.container.id=r,p.dialog=document.createElement("div"),p.dialog.classList.add("modal-dialog"),p.content=document.createElement("div"),p.content.classList.add("modal-content"),p.header=document.createElement("div"),p.header.classList.add("modal-header"),o&&(p.title=document.createElement("h4"),p.title.classList.add("modal-title"),p.title.innerHTML=o);p.closeIcon=document.createElement("button"),p.closeIcon.classList.add("close"),p.closeIcon.setAttribute("type","button"),p.closeIcon.dataset.dismiss="modal",p.closeIcon.innerHTML="×",p.body=document.createElement("div"),p.body.classList.add("modal-body","text-left","font-weight-normal"),p.message=document.createElement("p"),p.message.classList.add("confirm-message"),p.message.innerHTML=u,p.footer=document.createElement("div"),p.footer.classList.add("modal-footer"),p.closeButton=document.createElement("button"),p.closeButton.setAttribute("type","button"),p.closeButton.classList.add("btn","btn-outline-secondary","btn-lg"),p.closeButton.dataset.dismiss="modal",p.closeButton.innerHTML=c,p.confirmButton=document.createElement("button"),p.confirmButton.setAttribute("type","button"),p.confirmButton.classList.add("btn",v,"btn-lg","btn-confirm-submit"),p.confirmButton.dataset.dismiss="modal",p.confirmButton.innerHTML=d,o?p.header.append(p.title,p.closeIcon):p.header.appendChild(p.closeIcon);return p.body.appendChild(p.message),(e=p.footer).append.apply(e,[p.closeButton].concat((0,i.default)(h),[p.confirmButton])),p.content.append(p.header,p.body,p.footer),p.dialog.appendChild(p.content),p.container.appendChild(p.dialog),p}(t),this.$modal=a(this.modal.container),this.show=function(){r.$modal.modal()},this.modal.confirmButton.addEventListener("click",e),this.$modal.modal({backdrop:!!u||"static",keyboard:void 0===u||u,closable:void 0===u||u,show:!1}),this.$modal.on("hidden.bs.modal",(function(){document.querySelector("#"+o).remove(),n&&n()})),document.body.appendChild(this.modal.container)};
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
var a=window.$},61878:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,u=function(){function t(){var e=this;(0,r.default)(this,t),this.$successAlert=a(".js-test-email-success"),this.$errorAlert=a(".js-test-email-errors"),this.$loader=a(".js-test-email-loader"),this.$sendEmailBtn=a(".js-send-test-email-btn"),this.$sendEmailBtn.on("click",(function(t){e.handle(t)}))}return(0,o.default)(t,[{key:"handle",value:function(t){var e=this;a("#test_email_sending_mail_method").val(a('input[name="form[mail_method]"]:checked').val()),a("#test_email_sending_smtp_server").val(a("#form_smtp_config_server").val()),a("#test_email_sending_smtp_username").val(a("#form_smtp_config_username").val()),a("#test_email_sending_smtp_password").val(a("#form_smtp_config_password").val()),a("#test_email_sending_smtp_port").val(a("#form_smtp_config_port").val()),a("#test_email_sending_smtp_encryption").val(a("#form_smtp_config_encryption").val());var n=a(t.currentTarget).closest("form");this.resetMessages(),this.hideSendEmailButton(),this.showLoader(),a.post({url:n.attr("action"),data:n.serialize()}).then((function(t){e.hideLoader(),e.showSendEmailButton(),0===t.errors.length?e.showSuccess():e.showErrors(t.errors)}))}},{key:"resetMessages",value:function(){this.hideSuccess(),this.hideErrors()}},{key:"showSuccess",value:function(){this.$successAlert.removeClass("d-none")}},{key:"hideSuccess",value:function(){this.$successAlert.addClass("d-none")}},{key:"showLoader",value:function(){this.$loader.removeClass("d-none")}},{key:"hideLoader",value:function(){this.$loader.addClass("d-none")}},{key:"showErrors",value:function(t){var e=this;t.forEach((function(t){e.$errorAlert.append("<p>"+t+"</p>")})),this.$errorAlert.removeClass("d-none")}},{key:"hideErrors",value:function(){this.$errorAlert.addClass("d-none").empty()}},{key:"showSendEmailButton",value:function(){this.$sendEmailBtn.removeClass("d-none")}},{key:"hideSendEmailButton",value:function(){this.$sendEmailBtn.addClass("d-none")}}]),t}();e.default=u},6384:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600));function i(t){return t&&t.__esModule?t:{default:t}}
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
 */var a=window.$,u=function(){function t(){var e=this;(0,r.default)(this,t),a(".js-email-method").on("change",'input[type="radio"]',(function(t){var n=Number(a(t.currentTarget).val());a(".js-smtp-configuration").toggleClass("d-none",e.getSmtpMailMethodOption()!==n)}))}return(0,o.default)(t,[{key:"getSmtpMailMethodOption",value:function(){return a(".js-email-method").data("smtp-mail-method")}}]),t}();e.default=u},24043:(t,e,n)=>{t.exports={default:n(47185),__esModule:!0}},32242:(t,e,n)=>{t.exports={default:n(33391),__esModule:!0}},99663:(t,e)=>{"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},22600:(t,e,n)=>{"use strict";e.__esModule=!0;var r,o=n(32242),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},85315:(t,e,n)=>{"use strict";e.__esModule=!0;var r,o=n(24043),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i.default)(t)}},47185:(t,e,n)=>{n(91867),n(2586),t.exports=n(34579).Array.from},33391:(t,e,n)=>{n(31477);var r=n(34579).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},85663:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},12159:(t,e,n)=>{var r=n(36727);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},57428:(t,e,n)=>{var r=n(7932),o=n(78728),i=n(16531);t.exports=function(t){return function(e,n,a){var u,s=r(e),c=o(s.length),l=i(a,c);if(t&&n!=n){for(;c>l;)if((u=s[l++])!=u)return!0}else for(;c>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}}},14677:(t,e,n)=>{var r=n(32894),o=n(22939)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},32894:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},34579:t=>{var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},52445:(t,e,n)=>{"use strict";var r=n(4743),o=n(83101);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},19216:(t,e,n)=>{var r=n(85663);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},8333:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},89666:(t,e,n)=>{t.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},97467:(t,e,n)=>{var r=n(36727),o=n(33938).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},73338:t=>{t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},83856:(t,e,n)=>{var r=n(33938),o=n(34579),i=n(19216),a=n(41818),u=n(27069),s=function(t,e,n){var c,l,d,f=t&s.F,v=t&s.G,m=t&s.S,h=t&s.P,p=t&s.B,y=t&s.W,_=v?o:o[e]||(o[e]={}),g=_.prototype,b=v?r:m?r[e]:(r[e]||{}).prototype;for(c in v&&(n=e),n)(l=!f&&b&&void 0!==b[c])&&u(_,c)||(d=l?b[c]:n[c],_[c]=v&&"function"!=typeof b[c]?n[c]:p&&l?i(d,r):y&&b[c]==d?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(d):h&&"function"==typeof d?i(Function.call,d):d,h&&((_.virtual||(_.virtual={}))[c]=d,t&s.R&&g&&!g[c]&&a(g,c,d)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},7929:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},33938:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},27069:t=>{var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},41818:(t,e,n)=>{var r=n(4743),o=n(83101);t.exports=n(89666)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},54881:(t,e,n)=>{var r=n(33938).document;t.exports=r&&r.documentElement},33758:(t,e,n)=>{t.exports=!n(89666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(97467)("div"),"a",{get:function(){return 7}}).a}))},50799:(t,e,n)=>{var r=n(32894);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},45991:(t,e,n)=>{var r=n(15449),o=n(22939)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},36727:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},95602:(t,e,n)=>{var r=n(12159);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},33945:(t,e,n)=>{"use strict";var r=n(98989),o=n(83101),i=n(25378),a={};n(41818)(a,n(22939)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},45700:(t,e,n)=>{"use strict";var r=n(16227),o=n(83856),i=n(57470),a=n(41818),u=n(15449),s=n(33945),c=n(25378),l=n(95089),d=n(22939)("iterator"),f=!([].keys&&"next"in[].keys()),v="keys",m="values",h=function(){return this};t.exports=function(t,e,n,p,y,_,g){s(n,e,p);var b,w,k,x=function(t){if(!f&&t in B)return B[t];switch(t){case v:case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},M=e+" Iterator",j=y==m,C=!1,B=t.prototype,E=B[d]||B["@@iterator"]||y&&B[y],O=E||x(y),S=y?j?x("entries"):O:void 0,A="Array"==e&&B.entries||E;if(A&&(k=l(A.call(new t)))!==Object.prototype&&k.next&&(c(k,M,!0),r||"function"==typeof k[d]||a(k,d,h)),j&&E&&E.name!==m&&(C=!0,O=function(){return E.call(this)}),r&&!g||!f&&!C&&B[d]||a(B,d,O),u[e]=O,u[M]=h,y)if(b={values:j?O:x(m),keys:_?O:x(v),entries:S},g)for(w in b)w in B||i(B,w,b[w]);else o(o.P+o.F*(f||C),e,b);return b}},96630:(t,e,n)=>{var r=n(22939)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},15449:t=>{t.exports={}},16227:t=>{t.exports=!0},98989:(t,e,n)=>{var r=n(12159),o=n(57856),i=n(73338),a=n(58989)("IE_PROTO"),u=function(){},s=function(){var t,e=n(97467)("iframe"),r=i.length;for(e.style.display="none",n(54881).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},4743:(t,e,n)=>{var r=n(12159),o=n(33758),i=n(33206),a=Object.defineProperty;e.f=n(89666)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},57856:(t,e,n)=>{var r=n(4743),o=n(12159),i=n(46162);t.exports=n(89666)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,s=0;u>s;)r.f(t,n=a[s++],e[n]);return t}},95089:(t,e,n)=>{var r=n(27069),o=n(66530),i=n(58989)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},12963:(t,e,n)=>{var r=n(27069),o=n(7932),i=n(57428)(!1),a=n(58989)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~i(c,n)||c.push(n));return c}},46162:(t,e,n)=>{var r=n(12963),o=n(73338);t.exports=Object.keys||function(t){return r(t,o)}},83101:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},57470:(t,e,n)=>{t.exports=n(41818)},25378:(t,e,n)=>{var r=n(4743).f,o=n(27069),i=n(22939)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},58989:(t,e,n)=>{var r=n(20250)("keys"),o=n(65730);t.exports=function(t){return r[t]||(r[t]=o(t))}},20250:(t,e,n)=>{var r=n(34579),o=n(33938),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(16227)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},90510:(t,e,n)=>{var r=n(11052),o=n(8333);t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),s=r(n),c=u.length;return s<0||s>=c?t?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},16531:(t,e,n)=>{var r=n(11052),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},11052:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7932:(t,e,n)=>{var r=n(50799),o=n(8333);t.exports=function(t){return r(o(t))}},78728:(t,e,n)=>{var r=n(11052),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},66530:(t,e,n)=>{var r=n(8333);t.exports=function(t){return Object(r(t))}},33206:(t,e,n)=>{var r=n(36727);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},65730:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},22939:(t,e,n)=>{var r=n(20250)("wks"),o=n(65730),i=n(33938).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},83728:(t,e,n)=>{var r=n(14677),o=n(22939)("iterator"),i=n(15449);t.exports=n(34579).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},2586:(t,e,n)=>{"use strict";var r=n(19216),o=n(83856),i=n(66530),a=n(95602),u=n(45991),s=n(78728),c=n(52445),l=n(83728);o(o.S+o.F*!n(96630)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,d,f=i(t),v="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,p=void 0!==h,y=0,_=l(f);if(p&&(h=r(h,m>2?arguments[2]:void 0,2)),null==_||v==Array&&u(_))for(n=new v(e=s(f.length));e>y;y++)c(n,y,p?h(f[y],y):f[y]);else for(d=_.call(f),n=new v;!(o=d.next()).done;y++)c(n,y,p?a(d,h,[o.value,y],!0):o.value);return n.length=y,n}})},31477:(t,e,n)=>{var r=n(83856);r(r.S+r.F*!n(89666),"Object",{defineProperty:n(4743).f})},91867:(t,e,n)=>{"use strict";var r=n(90510)(!0);n(45700)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}(()=>{"use strict";var t=m(n(61878)),e=m(n(6384)),r=m(n(53277)),o=m(n(37758)),i=m(n(2573)),a=m(n(96803)),u=m(n(58630)),s=m(n(5595)),c=m(n(17868)),l=m(n(91781)),d=m(n(36188)),f=m(n(58899)),v=m(n(91137));function m(t){return t&&t.__esModule?t:{default:t}}
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
(0,window.$)((function(){var n=new r.default("email_logs");n.addExtension(new o.default),n.addExtension(new i.default),n.addExtension(new a.default),n.addExtension(new u.default),n.addExtension(new s.default),n.addExtension(new c.default),n.addExtension(new l.default),n.addExtension(new d.default),n.addExtension(new f.default),n.addExtension(new v.default),new t.default,new e.default}))})(),window.email={}})();