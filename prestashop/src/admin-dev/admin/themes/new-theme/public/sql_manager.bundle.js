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
var n=window.$;e.default=function(t,e){n.post(t).then((function(){return window.location.assign(e)}))}},61353:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(e){(0,r.default)(this,t),this.selector=".ps-sortable-column",this.columns=i(e).find(this.selector)}return(0,o.default)(t,[{key:"attach",value:function(){var t=this;this.columns.on("click",(function(e){var n=i(e.delegateTarget);t.sortByColumn(n,t.getToggledSortDirection(n))}))}},{key:"sortBy",value:function(t,e){var n=this.columns.is('[data-sort-col-name="'+t+'"]');if(!n)throw new Error('Cannot sort by "'+t+'": invalid column');this.sortByColumn(n,e)}},{key:"sortByColumn",value:function(t,e){window.location=this.getUrl(t.data("sortColName"),"desc"===e?"desc":"asc",t.data("sortPrefix"))}},{key:"getToggledSortDirection",value:function(t){return"asc"===t.data("sortDirection")?"desc":"asc"}},{key:"getUrl",value:function(t,e,n){var r=new URL(window.location.href),o=r.searchParams;return n?(o.set(n+"[orderBy]",t),o.set(n+"[sortOrder]",e)):(o.set("orderBy",t),o.set("sortOrder",e)),r.toString()}}]),t}();e.default=u},91781:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600)),a=i(n(68840));function i(t){return t&&t.__esModule?t:{default:t}}var u=window.$,c=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=this;t.getContainer().on("click",".js-submit-row-action",(function(n){n.preventDefault();var r=u(n.currentTarget),o=r.data("confirmMessage"),a=r.data("title"),i=r.data("method");if(a)e.showConfirmModal(r,t,o,a,i);else{if(o.length&&!window.confirm(o))return;e.postForm(r,i)}}))}},{key:"postForm",value:function(t,e){var n=["GET","POST"].includes(e),r=u("<form>",{action:t.data("url"),method:n?e:"POST"}).appendTo("body");n||r.append(u("<input>",{type:"_hidden",name:"_method",value:e})),r.submit()}},{key:"showConfirmModal",value:function(t,e,n,r,o){var i=this,u=t.data("confirmButtonLabel"),c=t.data("closeButtonLabel"),l=t.data("confirmButtonClass");new a.default({id:e.getId()+"-grid-confirm-modal",confirmTitle:r,confirmMessage:n,confirmButtonLabel:u,closeButtonLabel:c,confirmButtonClass:l},(function(){return i.postForm(t,o)})).show()}}]),t}();
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
 */e.default=c},5595:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){this.handleBulkActionCheckboxSelect(t),this.handleBulkActionSelectAllCheckbox(t)}},{key:"handleBulkActionSelectAllCheckbox",value:function(t){var e=this;t.getContainer().on("change",".js-bulk-action-select-all",(function(n){var r=i(n.currentTarget).is(":checked");r?e.enableBulkActionsBtn(t):e.disableBulkActionsBtn(t),t.getContainer().find(".js-bulk-action-checkbox").prop("checked",r)}))}},{key:"handleBulkActionCheckboxSelect",value:function(t){var e=this;t.getContainer().on("change",".js-bulk-action-checkbox",(function(){t.getContainer().find(".js-bulk-action-checkbox:checked").length>0?e.enableBulkActionsBtn(t):e.disableBulkActionsBtn(t)}))}},{key:"enableBulkActionsBtn",value:function(t){t.getContainer().find(".js-bulk-actions-btn").prop("disabled",!1)}},{key:"disableBulkActionsBtn",value:function(t){t.getContainer().find(".js-bulk-actions-btn").prop("disabled",!0)}}]),t}();e.default=u},2573:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=this;t.getHeaderContainer().on("click",".js-common_show_query-grid-action",(function(){return e.onShowSqlQueryClick(t)})),t.getHeaderContainer().on("click",".js-common_export_sql_manager-grid-action",(function(){return e.onExportSqlManagerClick(t)}))}},{key:"onShowSqlQueryClick",value:function(t){var e=i("#"+t.getId()+"_common_show_query_modal_form");this.fillExportForm(e,t);var n=i("#"+t.getId()+"_grid_common_show_query_modal");n.modal("show"),n.on("click",".btn-sql-submit",(function(){return e.submit()}))}},{key:"onExportSqlManagerClick",value:function(t){var e=i("#"+t.getId()+"_common_show_query_modal_form");this.fillExportForm(e,t),e.submit()}},{key:"fillExportForm",value:function(t,e){var n=e.getContainer().find(".js-grid-table").data("query");t.find('textarea[name="sql"]').val(n),t.find('input[name="name"]').val(this.getNameFromBreadcrumb())}},{key:"getNameFromBreadcrumb",value:function(){var t=i(".header-toolbar").find(".breadcrumb-item"),e="";return t.each((function(t,n){var r=i(n),o=r.find("a").length>0?r.find("a").text():r.text();e.length>0&&(e=e.concat(" > ")),e=e.concat(o)})),e}}]),t}();e.default=u},96803:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600)),a=i(n(4110));function i(t){return t&&t.__esModule?t:{default:t}}var u=window.$,c=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){t.getContainer().on("click",".js-reset-search",(function(t){(0,a.default)(u(t.currentTarget).data("url"),u(t.currentTarget).data("redirect"))}))}}]),t}();
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
 */e.default=c},91137:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=t.getContainer().find(".column-filters");e.find(".grid-search-button").prop("disabled",!0),e.find("input:not(.js-bulk-action-select-all), select").on("input dp.change",(function(){e.find(".grid-search-button").prop("disabled",!1),e.find(".js-grid-reset-button").prop("hidden",!1)}))}}]),t}();e.default=i},58899:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){this.initRowLinks(t),this.initConfirmableActions(t)}},{key:"initConfirmableActions",value:function(t){t.getContainer().on("click",".js-link-row-action",(function(t){var e=i(t.currentTarget).data("confirm-message");e.length&&!window.confirm(e)&&t.preventDefault()}))}},{key:"initRowLinks",value:function(t){i("tr",t.getContainer()).each((function(){var t=i(this);i(".js-link-row-action[data-clickable-row=1]:first",t).each((function(){var e=i(this),n=e.closest("td"),r=i("td.clickable",t).not(n),o=!1;r.addClass("cursor-pointer").mousedown((function(){i(window).mousemove((function(){o=!0,i(window).unbind("mousemove")}))})),r.mouseup((function(){var t=o;if(o=!1,i(window).unbind("mousemove"),!t){var n=e.data("confirm-message");n.length&&!window.confirm(n)||(document.location=e.attr("href"))}}))}))}))}}]),t}();e.default=u},37758:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){t.getHeaderContainer().on("click",".js-common_refresh_list-grid-action",(function(){window.location.reload()}))}}]),t}();e.default=i},58630:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600)),a=i(n(61353));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"extend",value:function(t){var e=t.getContainer().find("table.table");new a.default(e).attach()}}]),t}();
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
      */e.default=u},17868:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600)),a=i(n(68840));function i(t){return t&&t.__esModule?t:{default:t}}var u=window.$,c=function(){function t(){var e=this;return(0,r.default)(this,t),{extend:function(t){return e.extend(t)}}}return(0,o.default)(t,[{key:"extend",value:function(t){var e=this;t.getContainer().on("click",".js-bulk-action-submit-btn",(function(n){e.submit(n,t)}))}},{key:"submit",value:function(t,e){var n=u(t.currentTarget),r=n.data("confirm-message"),o=n.data("confirmTitle");void 0!==r&&r.length>0?void 0!==o?this.showConfirmModal(n,e,r,o):window.confirm(r)&&this.postForm(n,e):this.postForm(n,e)}},{key:"showConfirmModal",value:function(t,e,n,r){var o=this,i=t.data("confirmButtonLabel"),u=t.data("closeButtonLabel"),c=t.data("confirmButtonClass");new a.default({id:e.getId()+"-grid-confirm-modal",confirmTitle:r,confirmMessage:n,confirmButtonLabel:i,closeButtonLabel:u,confirmButtonClass:c},(function(){return o.postForm(t,e)})).show()}},{key:"postForm",value:function(t,e){var n=u("#"+e.getId()+"_filter_form");n.attr("action",t.data("form-url")),n.attr("method",t.data("form-method")),n.submit()}}]),t}();
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
 */e.default=c},36188:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(){var e=this;return(0,r.default)(this,t),{extend:function(t){return e.extend(t)}}}return(0,o.default)(t,[{key:"extend",value:function(t){var e=this;t.getHeaderContainer().on("click",".js-grid-action-submit-btn",(function(n){e.handleSubmit(n,t)}))}},{key:"handleSubmit",value:function(t,e){var n=i(t.currentTarget),r=n.data("confirm-message");if(!(void 0!==r&&r.length>0)||window.confirm(r)){var o=i("#"+e.getId()+"_filter_form");o.attr("action",n.data("url")),o.attr("method",n.data("method")),o.find('input[name="'+e.getId()+'[_token]"]').val(n.data("csrf")),o.submit()}}}]),t}();e.default=u},53277:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(99663)),o=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(e){(0,r.default)(this,t),this.id=e,this.$container=i("#"+this.id+"_grid")}return(0,o.default)(t,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(t){t.extend(this)}}]),t}();e.default=u},68840:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(85315),a=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e,n){var r=this,o=t.id,u=t.closable;this.modal=function(t){var e,n=t.id,r=void 0===n?"confirm-modal":n,o=t.confirmTitle,i=t.confirmMessage,u=void 0===i?"":i,c=t.closeButtonLabel,l=void 0===c?"Close":c,s=t.confirmButtonLabel,d=void 0===s?"Accept":s,f=t.confirmButtonClass,v=void 0===f?"btn-primary":f,m=t.customButtons,p=void 0===m?[]:m,h={};h.container=document.createElement("div"),h.container.classList.add("modal","fade"),h.container.id=r,h.dialog=document.createElement("div"),h.dialog.classList.add("modal-dialog"),h.content=document.createElement("div"),h.content.classList.add("modal-content"),h.header=document.createElement("div"),h.header.classList.add("modal-header"),o&&(h.title=document.createElement("h4"),h.title.classList.add("modal-title"),h.title.innerHTML=o);h.closeIcon=document.createElement("button"),h.closeIcon.classList.add("close"),h.closeIcon.setAttribute("type","button"),h.closeIcon.dataset.dismiss="modal",h.closeIcon.innerHTML="×",h.body=document.createElement("div"),h.body.classList.add("modal-body","text-left","font-weight-normal"),h.message=document.createElement("p"),h.message.classList.add("confirm-message"),h.message.innerHTML=u,h.footer=document.createElement("div"),h.footer.classList.add("modal-footer"),h.closeButton=document.createElement("button"),h.closeButton.setAttribute("type","button"),h.closeButton.classList.add("btn","btn-outline-secondary","btn-lg"),h.closeButton.dataset.dismiss="modal",h.closeButton.innerHTML=l,h.confirmButton=document.createElement("button"),h.confirmButton.setAttribute("type","button"),h.confirmButton.classList.add("btn",v,"btn-lg","btn-confirm-submit"),h.confirmButton.dataset.dismiss="modal",h.confirmButton.innerHTML=d,o?h.header.append(h.title,h.closeIcon):h.header.appendChild(h.closeIcon);return h.body.appendChild(h.message),(e=h.footer).append.apply(e,[h.closeButton].concat((0,a.default)(p),[h.confirmButton])),h.content.append(h.header,h.body,h.footer),h.dialog.appendChild(h.content),h.container.appendChild(h.dialog),h}(t),this.$modal=i(this.modal.container),this.show=function(){r.$modal.modal()},this.modal.confirmButton.addEventListener("click",e),this.$modal.modal({backdrop:!!u||"static",keyboard:void 0===u||u,closable:void 0===u||u,show:!1}),this.$modal.on("hidden.bs.modal",(function(){document.querySelector("#"+o).remove(),n&&n()})),document.body.appendChild(this.modal.container)};
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
var i=window.$},24043:(t,e,n)=>{t.exports={default:n(47185),__esModule:!0}},32242:(t,e,n)=>{t.exports={default:n(33391),__esModule:!0}},99663:(t,e)=>{"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},22600:(t,e,n)=>{"use strict";e.__esModule=!0;var r,o=n(32242),a=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,a.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},85315:(t,e,n)=>{"use strict";e.__esModule=!0;var r,o=n(24043),a=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,a.default)(t)}},47185:(t,e,n)=>{n(91867),n(2586),t.exports=n(34579).Array.from},33391:(t,e,n)=>{n(31477);var r=n(34579).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},85663:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},12159:(t,e,n)=>{var r=n(36727);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},57428:(t,e,n)=>{var r=n(7932),o=n(78728),a=n(16531);t.exports=function(t){return function(e,n,i){var u,c=r(e),l=o(c.length),s=a(i,l);if(t&&n!=n){for(;l>s;)if((u=c[s++])!=u)return!0}else for(;l>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},14677:(t,e,n)=>{var r=n(32894),o=n(22939)("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:a?r(e):"Object"==(i=r(e))&&"function"==typeof e.callee?"Arguments":i}},32894:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},34579:t=>{var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},52445:(t,e,n)=>{"use strict";var r=n(4743),o=n(83101);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},19216:(t,e,n)=>{var r=n(85663);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},8333:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},89666:(t,e,n)=>{t.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},97467:(t,e,n)=>{var r=n(36727),o=n(33938).document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},73338:t=>{t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},83856:(t,e,n)=>{var r=n(33938),o=n(34579),a=n(19216),i=n(41818),u=n(27069),c=function(t,e,n){var l,s,d,f=t&c.F,v=t&c.G,m=t&c.S,p=t&c.P,h=t&c.B,b=t&c.W,y=v?o:o[e]||(o[e]={}),g=y.prototype,w=v?r:m?r[e]:(r[e]||{}).prototype;for(l in v&&(n=e),n)(s=!f&&w&&void 0!==w[l])&&u(y,l)||(d=s?w[l]:n[l],y[l]=v&&"function"!=typeof w[l]?n[l]:h&&s?a(d,r):b&&w[l]==d?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(d):p&&"function"==typeof d?a(Function.call,d):d,p&&((y.virtual||(y.virtual={}))[l]=d,t&c.R&&g&&!g[l]&&i(g,l,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},7929:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},33938:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},27069:t=>{var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},41818:(t,e,n)=>{var r=n(4743),o=n(83101);t.exports=n(89666)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},54881:(t,e,n)=>{var r=n(33938).document;t.exports=r&&r.documentElement},33758:(t,e,n)=>{t.exports=!n(89666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(97467)("div"),"a",{get:function(){return 7}}).a}))},50799:(t,e,n)=>{var r=n(32894);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},45991:(t,e,n)=>{var r=n(15449),o=n(22939)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[o]===t)}},36727:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},95602:(t,e,n)=>{var r=n(12159);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&r(a.call(t)),e}}},33945:(t,e,n)=>{"use strict";var r=n(98989),o=n(83101),a=n(25378),i={};n(41818)(i,n(22939)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(i,{next:o(1,n)}),a(t,e+" Iterator")}},45700:(t,e,n)=>{"use strict";var r=n(16227),o=n(83856),a=n(57470),i=n(41818),u=n(15449),c=n(33945),l=n(25378),s=n(95089),d=n(22939)("iterator"),f=!([].keys&&"next"in[].keys()),v="keys",m="values",p=function(){return this};t.exports=function(t,e,n,h,b,y,g){c(n,e,h);var w,_,x,k=function(t){if(!f&&t in B)return B[t];switch(t){case v:case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",C=b==m,M=!1,B=t.prototype,O=B[d]||B["@@iterator"]||b&&B[b],T=O||k(b),E=b?C?k("entries"):T:void 0,S="Array"==e&&B.entries||O;if(S&&(x=s(S.call(new t)))!==Object.prototype&&x.next&&(l(x,j,!0),r||"function"==typeof x[d]||i(x,d,p)),C&&O&&O.name!==m&&(M=!0,T=function(){return O.call(this)}),r&&!g||!f&&!M&&B[d]||i(B,d,T),u[e]=T,u[j]=p,b)if(w={values:C?T:k(m),keys:y?T:k(v),entries:E},g)for(_ in w)_ in B||a(B,_,w[_]);else o(o.P+o.F*(f||M),e,w);return w}},96630:(t,e,n)=>{var r=n(22939)("iterator"),o=!1;try{var a=[7][r]();a.return=function(){o=!0},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var a=[7],i=a[r]();i.next=function(){return{done:n=!0}},a[r]=function(){return i},t(a)}catch(t){}return n}},15449:t=>{t.exports={}},16227:t=>{t.exports=!0},98989:(t,e,n)=>{var r=n(12159),o=n(57856),a=n(73338),i=n(58989)("IE_PROTO"),u=function(){},c=function(){var t,e=n(97467)("iframe"),r=a.length;for(e.style.display="none",n(54881).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[a[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[i]=t):n=c(),void 0===e?n:o(n,e)}},4743:(t,e,n)=>{var r=n(12159),o=n(33758),a=n(33206),i=Object.defineProperty;e.f=n(89666)?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},57856:(t,e,n)=>{var r=n(4743),o=n(12159),a=n(46162);t.exports=n(89666)?Object.defineProperties:function(t,e){o(t);for(var n,i=a(e),u=i.length,c=0;u>c;)r.f(t,n=i[c++],e[n]);return t}},95089:(t,e,n)=>{var r=n(27069),o=n(66530),a=n(58989)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},12963:(t,e,n)=>{var r=n(27069),o=n(7932),a=n(57428)(!1),i=n(58989)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,l=[];for(n in u)n!=i&&r(u,n)&&l.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~a(l,n)||l.push(n));return l}},46162:(t,e,n)=>{var r=n(12963),o=n(73338);t.exports=Object.keys||function(t){return r(t,o)}},83101:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},57470:(t,e,n)=>{t.exports=n(41818)},25378:(t,e,n)=>{var r=n(4743).f,o=n(27069),a=n(22939)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},58989:(t,e,n)=>{var r=n(20250)("keys"),o=n(65730);t.exports=function(t){return r[t]||(r[t]=o(t))}},20250:(t,e,n)=>{var r=n(34579),o=n(33938),a="__core-js_shared__",i=o[a]||(o[a]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(16227)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},90510:(t,e,n)=>{var r=n(11052),o=n(8333);t.exports=function(t){return function(e,n){var a,i,u=String(o(e)),c=r(n),l=u.length;return c<0||c>=l?t?"":void 0:(a=u.charCodeAt(c))<55296||a>56319||c+1===l||(i=u.charCodeAt(c+1))<56320||i>57343?t?u.charAt(c):a:t?u.slice(c,c+2):i-56320+(a-55296<<10)+65536}}},16531:(t,e,n)=>{var r=n(11052),o=Math.max,a=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):a(t,e)}},11052:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7932:(t,e,n)=>{var r=n(50799),o=n(8333);t.exports=function(t){return r(o(t))}},78728:(t,e,n)=>{var r=n(11052),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},66530:(t,e,n)=>{var r=n(8333);t.exports=function(t){return Object(r(t))}},33206:(t,e,n)=>{var r=n(36727);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},65730:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},22939:(t,e,n)=>{var r=n(20250)("wks"),o=n(65730),a=n(33938).Symbol,i="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=i&&a[t]||(i?a:o)("Symbol."+t))}).store=r},83728:(t,e,n)=>{var r=n(14677),o=n(22939)("iterator"),a=n(15449);t.exports=n(34579).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||a[r(t)]}},2586:(t,e,n)=>{"use strict";var r=n(19216),o=n(83856),a=n(66530),i=n(95602),u=n(45991),c=n(78728),l=n(52445),s=n(83728);o(o.S+o.F*!n(96630)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,d,f=a(t),v="function"==typeof this?this:Array,m=arguments.length,p=m>1?arguments[1]:void 0,h=void 0!==p,b=0,y=s(f);if(h&&(p=r(p,m>2?arguments[2]:void 0,2)),null==y||v==Array&&u(y))for(n=new v(e=c(f.length));e>b;b++)l(n,b,h?p(f[b],b):f[b]);else for(d=y.call(f),n=new v;!(o=d.next()).done;b++)l(n,b,h?i(d,p,[o.value,b],!0):o.value);return n.length=b,n}})},31477:(t,e,n)=>{var r=n(83856);r(r.S+r.F*!n(89666),"Object",{defineProperty:n(4743).f})},91867:(t,e,n)=>{"use strict";var r=n(90510)(!0);n(45700)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}(()=>{"use strict";var t=m(n(99663)),e=m(n(22600)),r=m(n(53277)),o=m(n(37758)),a=m(n(2573)),i=m(n(96803)),u=m(n(58630)),c=m(n(5595)),l=m(n(17868)),s=m(n(36188)),d=m(n(91781)),f=m(n(58899)),v=m(n(91137));function m(t){return t&&t.__esModule?t:{default:t}}var p=window.$,h=function(){function n(){var e=this;(0,t.default)(this,n);var m=new r.default("sql_request");m.addExtension(new o.default),m.addExtension(new a.default),m.addExtension(new i.default),m.addExtension(new u.default),m.addExtension(new f.default),m.addExtension(new s.default),m.addExtension(new l.default),m.addExtension(new d.default),m.addExtension(new c.default),m.addExtension(new v.default),p(document).on("change",".js-db-tables-select",(function(){return e.reloadDbTableColumns()})),p(document).on("click",".js-add-db-table-to-query-btn",(function(t){return e.addDbTableToQuery(t)})),p(document).on("click",".js-add-db-table-column-to-query-btn",(function(t){return e.addDbTableColumnToQuery(t)}))}return(0,e.default)(n,[{key:"reloadDbTableColumns",value:function(){var t=p(".js-db-tables-select").find("option:selected"),e=p(".js-table-columns");p.ajax(t.data("table-columns-url")).then((function(t){p(".js-table-alert").addClass("d-none");var n=t.columns;e.removeClass("d-none"),e.find("tbody").empty(),n.forEach((function(t){var n=p("<tr>").append(p("<td>").html(t.name)).append(p("<td>").html(t.type)).append(p("<td>").addClass("text-right").append(p("<button>").addClass("btn btn-sm btn-outline-secondary js-add-db-table-column-to-query-btn").attr("data-column",t.name).html(e.data("action-btn"))));e.find("tbody").append(n)}))}))}},{key:"addDbTableToQuery",value:function(t){var e=p(".js-db-tables-select").find("option:selected");0!==e.length?this.addToQuery(e.val()):alert(p(t.target).data("choose-table-message"))}},{key:"addDbTableColumnToQuery",value:function(t){this.addToQuery(p(t.target).data("column"))}},{key:"addToQuery",value:function(t){var e=p("#sql_request_sql");e.val(e.val()+" "+t)}}]),n}();
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
                    */p(document).ready((function(){new h}))})(),window.sql_manager={}})();