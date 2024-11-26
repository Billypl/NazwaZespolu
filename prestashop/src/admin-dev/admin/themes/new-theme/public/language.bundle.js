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
var n=window.$;e.default=function(t,e){n.post(t).then((function(){return window.location.assign(e)}))}},61353:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(99663)),r=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(e){(0,o.default)(this,t),this.selector=".ps-sortable-column",this.columns=i(e).find(this.selector)}return(0,r.default)(t,[{key:"attach",value:function(){var t=this;this.columns.on("click",(function(e){var n=i(e.delegateTarget);t.sortByColumn(n,t.getToggledSortDirection(n))}))}},{key:"sortBy",value:function(t,e){var n=this.columns.is('[data-sort-col-name="'+t+'"]');if(!n)throw new Error('Cannot sort by "'+t+'": invalid column');this.sortByColumn(n,e)}},{key:"sortByColumn",value:function(t,e){window.location=this.getUrl(t.data("sortColName"),"desc"===e?"desc":"asc",t.data("sortPrefix"))}},{key:"getToggledSortDirection",value:function(t){return"asc"===t.data("sortDirection")?"desc":"asc"}},{key:"getUrl",value:function(t,e,n){var o=new URL(window.location.href),r=o.searchParams;return n?(r.set(n+"[orderBy]",t),r.set(n+"[sortOrder]",e)):(r.set("orderBy",t),r.set("sortOrder",e)),o.toString()}}]),t}();e.default=u},19078:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(99663)),r=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(e){var n=this;return(0,o.default)(this,t),this.$container=i(e),this.$container.on("click",".js-input-wrapper",(function(t){var e=i(t.currentTarget);n.toggleChildTree(e)})),this.$container.on("click",".js-toggle-choice-tree-action",(function(t){var e=i(t.currentTarget);n.toggleTree(e)})),{enableAutoCheckChildren:function(){return n.enableAutoCheckChildren()},enableAllInputs:function(){return n.enableAllInputs()},disableAllInputs:function(){return n.disableAllInputs()}}}return(0,r.default)(t,[{key:"enableAutoCheckChildren",value:function(){this.$container.on("change",'input[type="checkbox"]',(function(t){var e=i(t.currentTarget);e.closest("li").find('ul input[type="checkbox"]').prop("checked",e.is(":checked"))}))}},{key:"enableAllInputs",value:function(){this.$container.find("input").removeAttr("disabled")}},{key:"disableAllInputs",value:function(){this.$container.find("input").attr("disabled","disabled")}},{key:"toggleChildTree",value:function(t){var e=t.closest("li");e.hasClass("expanded")?e.removeClass("expanded").addClass("collapsed"):e.hasClass("collapsed")&&e.removeClass("collapsed").addClass("expanded")}},{key:"toggleTree",value:function(t){var e=t.closest(".js-choice-tree-container"),n=t.data("action"),o={addClass:{expand:"expanded",collapse:"collapsed"},removeClass:{expand:"collapsed",collapse:"expanded"},nextAction:{expand:"collapse",collapse:"expand"},text:{expand:"collapsed-text",collapse:"expanded-text"},icon:{expand:"collapsed-icon",collapse:"expanded-icon"}};e.find("li").each((function(t,e){var r=i(e);r.hasClass(o.removeClass[n])&&r.removeClass(o.removeClass[n]).addClass(o.addClass[n])})),t.data("action",o.nextAction[n]),t.find(".material-icons").text(t.data(o.icon[n])),t.find(".js-toggle-text").text(t.data(o.text[n]))}}]),t}();e.default=u},91781:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(99663)),r=i(n(22600)),a=i(n(68840));function i(t){return t&&t.__esModule?t:{default:t}}var u=window.$,c=function(){function t(){(0,o.default)(this,t)}return(0,r.default)(t,[{key:"extend",value:function(t){var e=this;t.getContainer().on("click",".js-submit-row-action",(function(n){n.preventDefault();var o=u(n.currentTarget),r=o.data("confirmMessage"),a=o.data("title"),i=o.data("method");if(a)e.showConfirmModal(o,t,r,a,i);else{if(r.length&&!window.confirm(r))return;e.postForm(o,i)}}))}},{key:"postForm",value:function(t,e){var n=["GET","POST"].includes(e),o=u("<form>",{action:t.data("url"),method:n?e:"POST"}).appendTo("body");n||o.append(u("<input>",{type:"_hidden",name:"_method",value:e})),o.submit()}},{key:"showConfirmModal",value:function(t,e,n,o,r){var i=this,u=t.data("confirmButtonLabel"),c=t.data("closeButtonLabel"),l=t.data("confirmButtonClass");new a.default({id:e.getId()+"-grid-confirm-modal",confirmTitle:o,confirmMessage:n,confirmButtonLabel:u,closeButtonLabel:c,confirmButtonClass:l},(function(){return i.postForm(t,r)})).show()}}]),t}();
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
 */e.default=c},5595:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(99663)),r=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(){(0,o.default)(this,t)}return(0,r.default)(t,[{key:"extend",value:function(t){this.handleBulkActionCheckboxSelect(t),this.handleBulkActionSelectAllCheckbox(t)}},{key:"handleBulkActionSelectAllCheckbox",value:function(t){var e=this;t.getContainer().on("change",".js-bulk-action-select-all",(function(n){var o=i(n.currentTarget).is(":checked");o?e.enableBulkActionsBtn(t):e.disableBulkActionsBtn(t),t.getContainer().find(".js-bulk-action-checkbox").prop("checked",o)}))}},{key:"handleBulkActionCheckboxSelect",value:function(t){var e=this;t.getContainer().on("change",".js-bulk-action-checkbox",(function(){t.getContainer().find(".js-bulk-action-checkbox:checked").length>0?e.enableBulkActionsBtn(t):e.disableBulkActionsBtn(t)}))}},{key:"enableBulkActionsBtn",value:function(t){t.getContainer().find(".js-bulk-actions-btn").prop("disabled",!1)}},{key:"disableBulkActionsBtn",value:function(t){t.getContainer().find(".js-bulk-actions-btn").prop("disabled",!0)}}]),t}();e.default=u},4499:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(99663)),r=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(){(0,o.default)(this,t)}return(0,r.default)(t,[{key:"extend",value:function(t){var e=this;t.getContainer().find("table.table").find(".ps-togglable-row").on("click",(function(t){t.preventDefault(),e.toggleValue(i(t.delegateTarget))}))}},{key:"toggleValue",value:function(t){var e=t.data("toggleUrl");this.submitAsForm(e)}},{key:"submitAsForm",value:function(t){i("<form>",{action:t,method:"POST"}).appendTo("body").submit()}}]),t}();e.default=u},2573:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(99663)),r=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(){(0,o.default)(this,t)}return(0,r.default)(t,[{key:"extend",value:function(t){var e=this;t.getHeaderContainer().on("click",".js-common_show_query-grid-action",(function(){return e.onShowSqlQueryClick(t)})),t.getHeaderContainer().on("click",".js-common_export_sql_manager-grid-action",(function(){return e.onExportSqlManagerClick(t)}))}},{key:"onShowSqlQueryClick",value:function(t){var e=i("#"+t.getId()+"_common_show_query_modal_form");this.fillExportForm(e,t);var n=i("#"+t.getId()+"_grid_common_show_query_modal");n.modal("show"),n.on("click",".btn-sql-submit",(function(){return e.submit()}))}},{key:"onExportSqlManagerClick",value:function(t){var e=i("#"+t.getId()+"_common_show_query_modal_form");this.fillExportForm(e,t),e.submit()}},{key:"fillExportForm",value:function(t,e){var n=e.getContainer().find(".js-grid-table").data("query");t.find('textarea[name="sql"]').val(n),t.find('input[name="name"]').val(this.getNameFromBreadcrumb())}},{key:"getNameFromBreadcrumb",value:function(){var t=i(".header-toolbar").find(".breadcrumb-item"),e="";return t.each((function(t,n){var o=i(n),r=o.find("a").length>0?o.find("a").text():o.text();e.length>0&&(e=e.concat(" > ")),e=e.concat(r)})),e}}]),t}();e.default=u},96803:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(99663)),r=i(n(22600)),a=i(n(4110));function i(t){return t&&t.__esModule?t:{default:t}}var u=window.$,c=function(){function t(){(0,o.default)(this,t)}return(0,r.default)(t,[{key:"extend",value:function(t){t.getContainer().on("click",".js-reset-search",(function(t){(0,a.default)(u(t.currentTarget).data("url"),u(t.currentTarget).data("redirect"))}))}}]),t}();
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
 */e.default=c},91137:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(99663)),r=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=function(){function t(){(0,o.default)(this,t)}return(0,r.default)(t,[{key:"extend",value:function(t){var e=t.getContainer().find(".column-filters");e.find(".grid-search-button").prop("disabled",!0),e.find("input:not(.js-bulk-action-select-all), select").on("input dp.change",(function(){e.find(".grid-search-button").prop("disabled",!1),e.find(".js-grid-reset-button").prop("hidden",!1)}))}}]),t}();e.default=i},58899:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(99663)),r=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(){(0,o.default)(this,t)}return(0,r.default)(t,[{key:"extend",value:function(t){this.initRowLinks(t),this.initConfirmableActions(t)}},{key:"initConfirmableActions",value:function(t){t.getContainer().on("click",".js-link-row-action",(function(t){var e=i(t.currentTarget).data("confirm-message");e.length&&!window.confirm(e)&&t.preventDefault()}))}},{key:"initRowLinks",value:function(t){i("tr",t.getContainer()).each((function(){var t=i(this);i(".js-link-row-action[data-clickable-row=1]:first",t).each((function(){var e=i(this),n=e.closest("td"),o=i("td.clickable",t).not(n),r=!1;o.addClass("cursor-pointer").mousedown((function(){i(window).mousemove((function(){r=!0,i(window).unbind("mousemove")}))})),o.mouseup((function(){var t=r;if(r=!1,i(window).unbind("mousemove"),!t){var n=e.data("confirm-message");n.length&&!window.confirm(n)||(document.location=e.attr("href"))}}))}))}))}}]),t}();e.default=u},37758:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(99663)),r=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=function(){function t(){(0,o.default)(this,t)}return(0,r.default)(t,[{key:"extend",value:function(t){t.getHeaderContainer().on("click",".js-common_refresh_list-grid-action",(function(){window.location.reload()}))}}]),t}();e.default=i},58630:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(99663)),r=i(n(22600)),a=i(n(61353));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(){(0,o.default)(this,t)}return(0,r.default)(t,[{key:"extend",value:function(t){var e=t.getContainer().find("table.table");new a.default(e).attach()}}]),t}();
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
      */e.default=u},17868:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(99663)),r=i(n(22600)),a=i(n(68840));function i(t){return t&&t.__esModule?t:{default:t}}var u=window.$,c=function(){function t(){var e=this;return(0,o.default)(this,t),{extend:function(t){return e.extend(t)}}}return(0,r.default)(t,[{key:"extend",value:function(t){var e=this;t.getContainer().on("click",".js-bulk-action-submit-btn",(function(n){e.submit(n,t)}))}},{key:"submit",value:function(t,e){var n=u(t.currentTarget),o=n.data("confirm-message"),r=n.data("confirmTitle");void 0!==o&&o.length>0?void 0!==r?this.showConfirmModal(n,e,o,r):window.confirm(o)&&this.postForm(n,e):this.postForm(n,e)}},{key:"showConfirmModal",value:function(t,e,n,o){var r=this,i=t.data("confirmButtonLabel"),u=t.data("closeButtonLabel"),c=t.data("confirmButtonClass");new a.default({id:e.getId()+"-grid-confirm-modal",confirmTitle:o,confirmMessage:n,confirmButtonLabel:i,closeButtonLabel:u,confirmButtonClass:c},(function(){return r.postForm(t,e)})).show()}},{key:"postForm",value:function(t,e){var n=u("#"+e.getId()+"_filter_form");n.attr("action",t.data("form-url")),n.attr("method",t.data("form-method")),n.submit()}}]),t}();
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
 */e.default=c},53277:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(99663)),r=a(n(22600));function a(t){return t&&t.__esModule?t:{default:t}}
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
 */var i=window.$,u=function(){function t(e){(0,o.default)(this,t),this.id=e,this.$container=i("#"+this.id+"_grid")}return(0,r.default)(t,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(t){t.extend(this)}}]),t}();e.default=u},68840:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(85315),a=(o=r)&&o.__esModule?o:{default:o};e.default=function(t,e,n){var o=this,r=t.id,u=t.closable;this.modal=function(t){var e,n=t.id,o=void 0===n?"confirm-modal":n,r=t.confirmTitle,i=t.confirmMessage,u=void 0===i?"":i,c=t.closeButtonLabel,l=void 0===c?"Close":c,s=t.confirmButtonLabel,d=void 0===s?"Accept":s,f=t.confirmButtonClass,p=void 0===f?"btn-primary":f,v=t.customButtons,m=void 0===v?[]:v,h={};h.container=document.createElement("div"),h.container.classList.add("modal","fade"),h.container.id=o,h.dialog=document.createElement("div"),h.dialog.classList.add("modal-dialog"),h.content=document.createElement("div"),h.content.classList.add("modal-content"),h.header=document.createElement("div"),h.header.classList.add("modal-header"),r&&(h.title=document.createElement("h4"),h.title.classList.add("modal-title"),h.title.innerHTML=r);h.closeIcon=document.createElement("button"),h.closeIcon.classList.add("close"),h.closeIcon.setAttribute("type","button"),h.closeIcon.dataset.dismiss="modal",h.closeIcon.innerHTML="×",h.body=document.createElement("div"),h.body.classList.add("modal-body","text-left","font-weight-normal"),h.message=document.createElement("p"),h.message.classList.add("confirm-message"),h.message.innerHTML=u,h.footer=document.createElement("div"),h.footer.classList.add("modal-footer"),h.closeButton=document.createElement("button"),h.closeButton.setAttribute("type","button"),h.closeButton.classList.add("btn","btn-outline-secondary","btn-lg"),h.closeButton.dataset.dismiss="modal",h.closeButton.innerHTML=l,h.confirmButton=document.createElement("button"),h.confirmButton.setAttribute("type","button"),h.confirmButton.classList.add("btn",p,"btn-lg","btn-confirm-submit"),h.confirmButton.dataset.dismiss="modal",h.confirmButton.innerHTML=d,r?h.header.append(h.title,h.closeIcon):h.header.appendChild(h.closeIcon);return h.body.appendChild(h.message),(e=h.footer).append.apply(e,[h.closeButton].concat((0,a.default)(m),[h.confirmButton])),h.content.append(h.header,h.body,h.footer),h.dialog.appendChild(h.content),h.container.appendChild(h.dialog),h}(t),this.$modal=i(this.modal.container),this.show=function(){o.$modal.modal()},this.modal.confirmButton.addEventListener("click",e),this.$modal.modal({backdrop:!!u||"static",keyboard:void 0===u||u,closable:void 0===u||u,show:!1}),this.$modal.on("hidden.bs.modal",(function(){document.querySelector("#"+r).remove(),n&&n()})),document.body.appendChild(this.modal.container)};
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
var i=window.$},24043:(t,e,n)=>{t.exports={default:n(47185),__esModule:!0}},32242:(t,e,n)=>{t.exports={default:n(33391),__esModule:!0}},99663:(t,e)=>{"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},22600:(t,e,n)=>{"use strict";e.__esModule=!0;var o,r=n(32242),a=(o=r)&&o.__esModule?o:{default:o};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,a.default)(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()},85315:(t,e,n)=>{"use strict";e.__esModule=!0;var o,r=n(24043),a=(o=r)&&o.__esModule?o:{default:o};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,a.default)(t)}},47185:(t,e,n)=>{n(91867),n(2586),t.exports=n(34579).Array.from},33391:(t,e,n)=>{n(31477);var o=n(34579).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},85663:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},12159:(t,e,n)=>{var o=n(36727);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},57428:(t,e,n)=>{var o=n(7932),r=n(78728),a=n(16531);t.exports=function(t){return function(e,n,i){var u,c=o(e),l=r(c.length),s=a(i,l);if(t&&n!=n){for(;l>s;)if((u=c[s++])!=u)return!0}else for(;l>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},14677:(t,e,n)=>{var o=n(32894),r=n(22939)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:a?o(e):"Object"==(i=o(e))&&"function"==typeof e.callee?"Arguments":i}},32894:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},34579:t=>{var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},52445:(t,e,n)=>{"use strict";var o=n(4743),r=n(83101);t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}},19216:(t,e,n)=>{var o=n(85663);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},8333:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},89666:(t,e,n)=>{t.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},97467:(t,e,n)=>{var o=n(36727),r=n(33938).document,a=o(r)&&o(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},73338:t=>{t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},83856:(t,e,n)=>{var o=n(33938),r=n(34579),a=n(19216),i=n(41818),u=n(27069),c=function(t,e,n){var l,s,d,f=t&c.F,p=t&c.G,v=t&c.S,m=t&c.P,h=t&c.B,y=t&c.W,b=p?r:r[e]||(r[e]={}),g=b.prototype,w=p?o:v?o[e]:(o[e]||{}).prototype;for(l in p&&(n=e),n)(s=!f&&w&&void 0!==w[l])&&u(b,l)||(d=s?w[l]:n[l],b[l]=p&&"function"!=typeof w[l]?n[l]:h&&s?a(d,o):y&&w[l]==d?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(d):m&&"function"==typeof d?a(Function.call,d):d,m&&((b.virtual||(b.virtual={}))[l]=d,t&c.R&&g&&!g[l]&&i(g,l,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},7929:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},33938:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},27069:t=>{var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},41818:(t,e,n)=>{var o=n(4743),r=n(83101);t.exports=n(89666)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},54881:(t,e,n)=>{var o=n(33938).document;t.exports=o&&o.documentElement},33758:(t,e,n)=>{t.exports=!n(89666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(97467)("div"),"a",{get:function(){return 7}}).a}))},50799:(t,e,n)=>{var o=n(32894);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},45991:(t,e,n)=>{var o=n(15449),r=n(22939)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[r]===t)}},36727:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},95602:(t,e,n)=>{var o=n(12159);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&o(a.call(t)),e}}},33945:(t,e,n)=>{"use strict";var o=n(98989),r=n(83101),a=n(25378),i={};n(41818)(i,n(22939)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=o(i,{next:r(1,n)}),a(t,e+" Iterator")}},45700:(t,e,n)=>{"use strict";var o=n(16227),r=n(83856),a=n(57470),i=n(41818),u=n(15449),c=n(33945),l=n(25378),s=n(95089),d=n(22939)("iterator"),f=!([].keys&&"next"in[].keys()),p="keys",v="values",m=function(){return this};t.exports=function(t,e,n,h,y,b,g){c(n,e,h);var w,x,_,k=function(t){if(!f&&t in B)return B[t];switch(t){case p:case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},C=e+" Iterator",j=y==v,M=!1,B=t.prototype,O=B[d]||B["@@iterator"]||y&&B[y],A=O||k(y),E=y?j?k("entries"):A:void 0,T="Array"==e&&B.entries||O;if(T&&(_=s(T.call(new t)))!==Object.prototype&&_.next&&(l(_,C,!0),o||"function"==typeof _[d]||i(_,d,m)),j&&O&&O.name!==v&&(M=!0,A=function(){return O.call(this)}),o&&!g||!f&&!M&&B[d]||i(B,d,A),u[e]=A,u[C]=m,y)if(w={values:j?A:k(v),keys:b?A:k(p),entries:E},g)for(x in w)x in B||a(B,x,w[x]);else r(r.P+r.F*(f||M),e,w);return w}},96630:(t,e,n)=>{var o=n(22939)("iterator"),r=!1;try{var a=[7][o]();a.return=function(){r=!0},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var a=[7],i=a[o]();i.next=function(){return{done:n=!0}},a[o]=function(){return i},t(a)}catch(t){}return n}},15449:t=>{t.exports={}},16227:t=>{t.exports=!0},98989:(t,e,n)=>{var o=n(12159),r=n(57856),a=n(73338),i=n(58989)("IE_PROTO"),u=function(){},c=function(){var t,e=n(97467)("iframe"),o=a.length;for(e.style.display="none",n(54881).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;o--;)delete c.prototype[a[o]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=o(t),n=new u,u.prototype=null,n[i]=t):n=c(),void 0===e?n:r(n,e)}},4743:(t,e,n)=>{var o=n(12159),r=n(33758),a=n(33206),i=Object.defineProperty;e.f=n(89666)?Object.defineProperty:function(t,e,n){if(o(t),e=a(e,!0),o(n),r)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},57856:(t,e,n)=>{var o=n(4743),r=n(12159),a=n(46162);t.exports=n(89666)?Object.defineProperties:function(t,e){r(t);for(var n,i=a(e),u=i.length,c=0;u>c;)o.f(t,n=i[c++],e[n]);return t}},95089:(t,e,n)=>{var o=n(27069),r=n(66530),a=n(58989)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},12963:(t,e,n)=>{var o=n(27069),r=n(7932),a=n(57428)(!1),i=n(58989)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),c=0,l=[];for(n in u)n!=i&&o(u,n)&&l.push(n);for(;e.length>c;)o(u,n=e[c++])&&(~a(l,n)||l.push(n));return l}},46162:(t,e,n)=>{var o=n(12963),r=n(73338);t.exports=Object.keys||function(t){return o(t,r)}},83101:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},57470:(t,e,n)=>{t.exports=n(41818)},25378:(t,e,n)=>{var o=n(4743).f,r=n(27069),a=n(22939)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,a)&&o(t,a,{configurable:!0,value:e})}},58989:(t,e,n)=>{var o=n(20250)("keys"),r=n(65730);t.exports=function(t){return o[t]||(o[t]=r(t))}},20250:(t,e,n)=>{var o=n(34579),r=n(33938),a="__core-js_shared__",i=r[a]||(r[a]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(16227)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},90510:(t,e,n)=>{var o=n(11052),r=n(8333);t.exports=function(t){return function(e,n){var a,i,u=String(r(e)),c=o(n),l=u.length;return c<0||c>=l?t?"":void 0:(a=u.charCodeAt(c))<55296||a>56319||c+1===l||(i=u.charCodeAt(c+1))<56320||i>57343?t?u.charAt(c):a:t?u.slice(c,c+2):i-56320+(a-55296<<10)+65536}}},16531:(t,e,n)=>{var o=n(11052),r=Math.max,a=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):a(t,e)}},11052:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7932:(t,e,n)=>{var o=n(50799),r=n(8333);t.exports=function(t){return o(r(t))}},78728:(t,e,n)=>{var o=n(11052),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},66530:(t,e,n)=>{var o=n(8333);t.exports=function(t){return Object(o(t))}},33206:(t,e,n)=>{var o=n(36727);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},65730:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},22939:(t,e,n)=>{var o=n(20250)("wks"),r=n(65730),a=n(33938).Symbol,i="function"==typeof a;(t.exports=function(t){return o[t]||(o[t]=i&&a[t]||(i?a:r)("Symbol."+t))}).store=o},83728:(t,e,n)=>{var o=n(14677),r=n(22939)("iterator"),a=n(15449);t.exports=n(34579).getIteratorMethod=function(t){if(null!=t)return t[r]||t["@@iterator"]||a[o(t)]}},2586:(t,e,n)=>{"use strict";var o=n(19216),r=n(83856),a=n(66530),i=n(95602),u=n(45991),c=n(78728),l=n(52445),s=n(83728);r(r.S+r.F*!n(96630)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,r,d,f=a(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,h=void 0!==m,y=0,b=s(f);if(h&&(m=o(m,v>2?arguments[2]:void 0,2)),null==b||p==Array&&u(b))for(n=new p(e=c(f.length));e>y;y++)l(n,y,h?m(f[y],y):f[y]);else for(d=b.call(f),n=new p;!(r=d.next()).done;y++)l(n,y,h?i(d,m,[r.value,y],!0):r.value);return n.length=y,n}})},31477:(t,e,n)=>{var o=n(83856);o(o.S+o.F*!n(89666),"Object",{defineProperty:n(4743).f})},91867:(t,e,n)=>{"use strict";var o=n(90510)(!0);n(45700)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}(()=>{"use strict";var t=p(n(53277)),e=p(n(37758)),o=p(n(2573)),r=p(n(96803)),a=p(n(58630)),i=p(n(58899)),u=p(n(17868)),c=p(n(91781)),l=p(n(5595)),s=p(n(19078)),d=p(n(4499)),f=p(n(91137));function p(t){return t&&t.__esModule?t:{default:t}}
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
 */(0,window.$)(document).ready((function(){var n=new t.default("language");n.addExtension(new e.default),n.addExtension(new o.default),n.addExtension(new r.default),n.addExtension(new a.default),n.addExtension(new i.default),n.addExtension(new u.default),n.addExtension(new c.default),n.addExtension(new l.default),n.addExtension(new d.default),n.addExtension(new f.default),new s.default("#language_shop_association").enableAutoCheckChildren()}))})(),window.language={}})();