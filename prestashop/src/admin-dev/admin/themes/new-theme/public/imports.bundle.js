(()=>{var e={67825:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(r(99663)),n=i(r(22600));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var l=window.$,a=0,s=1,u=2,f=3,c=4,d=5,p=6,v=7,h=8,y=function(){function e(){var t=this;(0,o.default)(this,e),l(".js-entity-select").on("change",(function(){return t.toggleForm()})),this.toggleForm()}return(0,n.default)(e,[{key:"toggleForm",value:function(){var e=l("#entity").find("option:selected"),t=parseInt(e.val(),10),r=e.text().toLowerCase();this.toggleEntityAlert(t),this.toggleFields(t,r),this.loadAvailableFields(t)}},{key:"toggleEntityAlert",value:function(e){var t=l(".js-entity-alert");[a,s].includes(e)?t.show():t.hide()}},{key:"toggleFields",value:function(e,t){var r=l(".js-truncate-form-group"),o=l(".js-match-ref-form-group"),n=l(".js-regenerate-form-group"),i=l(".js-force-ids-form-group"),y=l(".js-entity-name");h===e?r.hide():r.show(),[s,u].includes(e)?o.show():o.hide(),[a,s,d,p,h].includes(e)?n.show():n.hide(),[a,s,f,c,d,p,h,v].includes(e)?i.show():i.hide(),y.html(t)}},{key:"loadAvailableFields",value:function(e){var t=this,r=l(".js-available-fields");l.ajax({url:r.data("url"),data:{entity:e},dataType:"json"}).then((function(e){t.removeAvailableFields(r);for(var o=0;o<e.length;o+=1)t.appendAvailableField(r,e[o].label+(e[o].required?"*":""),e[o].description);r.find('[data-toggle="popover"]').popover()}))}},{key:"removeAvailableFields",value:function(e){e.find('[data-toggle="popover"]').popover("hide"),e.empty()}},{key:"appendHelpBox",value:function(e,t){var r=l(".js-available-field-popover-template").clone();r.attr("data-content",t),r.removeClass("js-available-field-popover-template d-none"),e.append(r)}},{key:"appendAvailableField",value:function(e,t,r){var o=l(".js-available-field-template").clone();o.text(t),r&&this.appendHelpBox(o,r),o.removeClass("js-available-field-template d-none"),o.appendTo(e)}}]),e}();t.default=y},53608:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(r(99663)),n=l(r(22600)),i=l(r(67825));function l(e){return e&&e.__esModule?e:{default:e}}var a=window.$,s=function(){function e(){var t=this;(0,o.default)(this,e),new i.default,a(".js-from-files-history-btn").on("click",(function(){return t.showFilesHistoryHandler()})),a(".js-close-files-history-block-btn").on("click",(function(){return t.closeFilesHistoryHandler()})),a("#fileHistoryTable").on("click",".js-use-file-btn",(function(e){return t.useFileFromFilesHistory(e)})),a(".js-change-import-file-btn").on("click",(function(){return t.changeImportFileHandler()})),a(".js-import-file").on("change",(function(){return t.uploadFile()})),this.toggleSelectedFile(),this.handleSubmit()}return(0,n.default)(e,[{key:"handleSubmit",value:function(){a(".js-import-form").on("submit",(function(){var e=a(this);return"1"!==e.find('input[name="truncate"]:checked').val()||window.confirm(e.data("delete-confirm-message")+" "+a.trim(a("#entity > option:selected").text().toLowerCase())+"?")}))}},{key:"toggleSelectedFile",value:function(){var e=a("#csv").val();e.length>0&&(this.showImportFileAlert(e),this.hideFileUploadBlock())}},{key:"changeImportFileHandler",value:function(){this.hideImportFileAlert(),this.showFileUploadBlock()}},{key:"showFilesHistoryHandler",value:function(){this.showFilesHistory(),this.hideFileUploadBlock()}},{key:"closeFilesHistoryHandler",value:function(){this.closeFilesHistory(),this.showFileUploadBlock()}},{key:"showFilesHistory",value:function(){a(".js-files-history-block").removeClass("d-none")}},{key:"closeFilesHistory",value:function(){a(".js-files-history-block").addClass("d-none")}},{key:"useFileFromFilesHistory",value:function(e){var t=a(e.target).closest(".btn-group").data("file");a(".js-import-file-input").val(t),this.showImportFileAlert(t),this.closeFilesHistory()}},{key:"showImportFileAlert",value:function(e){a(".js-import-file-alert").removeClass("d-none"),a(".js-import-file").text(e)}},{key:"hideImportFileAlert",value:function(){a(".js-import-file-alert").addClass("d-none")}},{key:"hideFileUploadBlock",value:function(){a(".js-file-upload-form-group").addClass("d-none")}},{key:"showFileUploadBlock",value:function(){a(".js-file-upload-form-group").removeClass("d-none")}},{key:"enableFilesHistoryBtn",value:function(){a(".js-from-files-history-btn").removeAttr("disabled")}},{key:"showImportFileError",value:function(e,t,r){var o=a(".js-import-file-error"),n=e+" ("+this.humanizeSize(t)+")";o.find(".js-file-data").text(n),o.find(".js-error-message").text(r),o.removeClass("d-none")}},{key:"hideImportFileError",value:function(){a(".js-import-file-error").addClass("d-none")}},{key:"humanizeSize",value:function(e){return"number"!=typeof e?"":e>=1e9?(e/1e9).toFixed(2)+" GB":e>=1e6?(e/1e6).toFixed(2)+" MB":(e/1e3).toFixed(2)+" KB"}},{key:"uploadFile",value:function(){var e=this;this.hideImportFileError();var t=a("#file"),r=t.prop("files")[0];if(t.data("max-file-upload-size")<r.size)this.showImportFileError(r.name,r.size,"File is too large");else{var o=new FormData;o.append("file",r),a.ajax({type:"POST",url:a(".js-import-form").data("file-upload-url"),data:o,cache:!1,contentType:!1,processData:!1}).then((function(t){if(t.error)e.showImportFileError(r.name,r.size,t.error);else{var o=t.file.name;a(".js-import-file-input").val(o),e.showImportFileAlert(o),e.hideFileUploadBlock(),e.addFileToHistoryTable(o),e.enableFilesHistoryBtn()}}))}}},{key:"addFileToHistoryTable",value:function(e){var t=a("#fileHistoryTable"),r=t.data("delete-file-url")+"&filename="+encodeURIComponent(e),o=t.data("download-file-url")+"&filename="+encodeURIComponent(e),n=t.find("tr:first").clone();n.removeClass("d-none"),n.find("td:first").text(e),n.find(".btn-group").attr("data-file",e),n.find(".js-delete-file-btn").attr("href",r),n.find(".js-download-file-btn").attr("href",o),t.find("tbody").append(n);var i=t.find("tr").length-1;a(".js-files-history-number").text(i)}}]),e}();
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
                    */t.default=s},32242:(e,t,r)=>{e.exports={default:r(33391),__esModule:!0}},99663:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},22600:(e,t,r)=>{"use strict";t.__esModule=!0;var o,n=r(32242),i=(o=n)&&o.__esModule?o:{default:o};t.default=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i.default)(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}()},33391:(e,t,r)=>{r(31477);var o=r(34579).Object;e.exports=function(e,t,r){return o.defineProperty(e,t,r)}},85663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},12159:(e,t,r)=>{var o=r(36727);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},34579:e=>{var t=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=t)},19216:(e,t,r)=>{var o=r(85663);e.exports=function(e,t,r){if(o(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,n){return e.call(t,r,o,n)}}return function(){return e.apply(t,arguments)}}},89666:(e,t,r)=>{e.exports=!r(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},97467:(e,t,r)=>{var o=r(36727),n=r(33938).document,i=o(n)&&o(n.createElement);e.exports=function(e){return i?n.createElement(e):{}}},83856:(e,t,r)=>{var o=r(33938),n=r(34579),i=r(19216),l=r(41818),a=r(27069),s=function(e,t,r){var u,f,c,d=e&s.F,p=e&s.G,v=e&s.S,h=e&s.P,y=e&s.B,m=e&s.W,F=p?n:n[t]||(n[t]={}),b=F.prototype,w=p?o:v?o[t]:(o[t]||{}).prototype;for(u in p&&(r=t),r)(f=!d&&w&&void 0!==w[u])&&a(F,u)||(c=f?w[u]:r[u],F[u]=p&&"function"!=typeof w[u]?r[u]:y&&f?i(c,o):m&&w[u]==c?function(e){var t=function(t,r,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,o)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(c):h&&"function"==typeof c?i(Function.call,c):c,h&&((F.virtual||(F.virtual={}))[u]=c,e&s.R&&b&&!b[u]&&l(b,u,c)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},33938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},27069:e=>{var t={}.hasOwnProperty;e.exports=function(e,r){return t.call(e,r)}},41818:(e,t,r)=>{var o=r(4743),n=r(83101);e.exports=r(89666)?function(e,t,r){return o.f(e,t,n(1,r))}:function(e,t,r){return e[t]=r,e}},33758:(e,t,r)=>{e.exports=!r(89666)&&!r(7929)((function(){return 7!=Object.defineProperty(r(97467)("div"),"a",{get:function(){return 7}}).a}))},36727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},4743:(e,t,r)=>{var o=r(12159),n=r(33758),i=r(33206),l=Object.defineProperty;t.f=r(89666)?Object.defineProperty:function(e,t,r){if(o(e),t=i(t,!0),o(r),n)try{return l(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},83101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},33206:(e,t,r)=>{var o=r(36727);e.exports=function(e,t){if(!o(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!o(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},31477:(e,t,r)=>{var o=r(83856);o(o.S+o.F*!r(89666),"Object",{defineProperty:r(4743).f})}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}(()=>{"use strict";var e,t=r(53608),o=(e=t)&&e.__esModule?e:{default:e};
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
(0,window.$)((function(){new o.default}))})(),window.imports={}})();