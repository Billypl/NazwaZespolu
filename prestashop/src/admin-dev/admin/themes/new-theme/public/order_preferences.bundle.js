(()=>{var e={32821:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(99663)),o=u(n(22600));function u(e){return e&&e.__esModule?e:{default:e}}
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
 */var i=window.$,a=function(){function e(){var t=this;(0,r.default)(this,e),this.handle(),i('input[name="general[enable_tos]"]').on("change",(function(){return t.handle()}))}return(0,o.default)(e,[{key:"handle",value:function(){var e=i('input[name="general[enable_tos]"]:checked').val(),t=parseInt(e,10);this.handleTermsAndConditionsCmsSelect(t)}},{key:"handleTermsAndConditionsCmsSelect",value:function(e){i("#form_general_tos_cms_id").prop("disabled",!e)}}]),e}();t.default=a},32242:(e,t,n)=>{e.exports={default:n(33391),__esModule:!0}},99663:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},22600:(e,t,n)=>{"use strict";t.__esModule=!0;var r,o=n(32242),u=(r=o)&&r.__esModule?r:{default:r};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},33391:(e,t,n)=>{n(31477);var r=n(34579).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},85663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},12159:(e,t,n)=>{var r=n(36727);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},34579:e=>{var t=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=t)},19216:(e,t,n)=>{var r=n(85663);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},89666:(e,t,n)=>{e.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},97467:(e,t,n)=>{var r=n(36727),o=n(33938).document,u=r(o)&&r(o.createElement);e.exports=function(e){return u?o.createElement(e):{}}},83856:(e,t,n)=>{var r=n(33938),o=n(34579),u=n(19216),i=n(41818),a=n(27069),f=function(e,t,n){var c,s,l,p=e&f.F,d=e&f.G,v=e&f.S,y=e&f.P,h=e&f.B,_=e&f.W,w=d?o:o[t]||(o[t]={}),b=w.prototype,x=d?r:v?r[t]:(r[t]||{}).prototype;for(c in d&&(n=t),n)(s=!p&&x&&void 0!==x[c])&&a(w,c)||(l=s?x[c]:n[c],w[c]=d&&"function"!=typeof x[c]?n[c]:h&&s?u(l,r):_&&x[c]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):y&&"function"==typeof l?u(Function.call,l):l,y&&((w.virtual||(w.virtual={}))[c]=l,e&f.R&&b&&!b[c]&&i(b,c,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,e.exports=f},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},33938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},27069:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},41818:(e,t,n)=>{var r=n(4743),o=n(83101);e.exports=n(89666)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},33758:(e,t,n)=>{e.exports=!n(89666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(97467)("div"),"a",{get:function(){return 7}}).a}))},36727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},4743:(e,t,n)=>{var r=n(12159),o=n(33758),u=n(33206),i=Object.defineProperty;t.f=n(89666)?Object.defineProperty:function(e,t,n){if(r(e),t=u(t,!0),r(n),o)try{return i(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},83101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},33206:(e,t,n)=>{var r=n(36727);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},31477:(e,t,n)=>{var r=n(83856);r(r.S+r.F*!n(89666),"Object",{defineProperty:n(4743).f})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}(()=>{"use strict";var e,t=n(32821),r=(e=t)&&e.__esModule?e:{default:e};
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
(0,window.$)((function(){new r.default}))})(),window.order_preferences={}})();