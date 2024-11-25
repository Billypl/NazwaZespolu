(()=>{var e={50339:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(47518)),o=i(r(99663)),u=i(r(22600)),a=i(r(64877));function i(e){return e&&e.__esModule?e:{default:e}}var s=window.$,l=s(a.default.exportCoreType),c=s(a.default.exportThemesType),f=s(a.default.exportModulesType),d=s(a.default.exportCoreValues).closest(".form-group"),p=s(a.default.exportThemesValues).closest(".form-group"),h=s(a.default.exportModulesValues).closest(".form-group"),v=s(a.default.exportCoreValues),y=s(a.default.exportThemesValues),m=s(a.default.exportModulesValues),g=s(a.default.exportLanguageButton),_=function(){function e(){(0,o.default)(this,e),l.on("change",this.coreTypeChanged.bind(this)),c.on("change",this.themesTypeChanged.bind(this)),f.on("change",this.modulesTypeChanged.bind(this)),v.on("change",this.subChoicesChanged.bind(this)),y.on("change",this.subChoicesChanged.bind(this)),m.on("change",this.subChoicesChanged.bind(this)),this.check(l)}return(0,u.default)(e,[{key:"coreTypeChanged",value:function(){l.is(":checked")&&(l.prop("disabled",!1),this.uncheck(c,f),this.show(d),this.hide(p,h),this.subChoicesChanged())}},{key:"themesTypeChanged",value:function(){c.is(":checked")&&(c.prop("disabled",!1),this.uncheck(l,f),this.show(p),this.hide(d,h),this.subChoicesChanged())}},{key:"modulesTypeChanged",value:function(){f.is(":checked")&&(h.prop("disabled",!1),this.uncheck(c,l),this.show(h),this.hide(p,d),this.subChoicesChanged())}},{key:"subChoicesChanged",value:function(){l.prop("checked")&&v.find(":checked").size()>0||c.prop("checked")&&null!==y.val()||f.prop("checked")&&null!==m.val()?g.prop("disabled",!1):g.prop("disabled",!0)}},{key:"hide",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];(0,n.default)(t).forEach((function(e){e.addClass("d-none"),e.find("select, input").prop("disabled","disabled")}))}},{key:"show",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];(0,n.default)(t).forEach((function(e){e.removeClass("d-none"),e.find("select, input").prop("disabled",!1)}))}},{key:"uncheck",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];(0,n.default)(t).forEach((function(e){e.prop("checked",!1)}))}},{key:"check",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];(0,n.default)(t).forEach((function(e){e.prop("checked",!0)}))}}]),e}();
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
                    */t.default=_},1140:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(47518)),o=i(r(99663)),u=i(r(22600)),a=i(r(64877));function i(e){return e&&e.__esModule?e:{default:e}}var s=window.$,l="mails",c=function(){function e(){(0,o.default)(this,e),s(a.default.translationType).on("change",this.toggleFields.bind(this)),s(a.default.emailContentType).on("change",this.toggleEmailFields.bind(this)),this.toggleFields()}return(0,u.default)(e,[{key:"toggleFields",value:function(){var e=s(a.default.translationType).val(),t=s(a.default.modulesFormGroup),r=s(a.default.emailFormGroup),n=s(a.default.themesFormGroup),o=n.find(a.default.defaultThemeOption);switch(e){case"back":case"others":this.hide(t,r,n);break;case"themes":this.show(n),this.hide(t,r,o);break;case"modules":this.hide(r,n),this.show(t);break;case l:this.hide(t,n),this.show(r)}this.toggleEmailFields()}},{key:"toggleEmailFields",value:function(){if(s(a.default.translationType).val()===l){var e=s(a.default.emailFormGroup).find("select").val(),t=s(a.default.themesFormGroup),r=t.find(a.default.noThemeOption),n=t.find(a.default.defaultThemeOption);"body"===e?(r.prop("selected",!0),this.show(r,t,n)):this.hide(r,t,n)}}},{key:"hide",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];(0,n.default)(t).forEach((function(e){e.addClass("d-none"),e.find("select").prop("disabled","disabled")}))}},{key:"show",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];(0,n.default)(t).forEach((function(e){e.removeClass("d-none"),e.find("select").prop("disabled",!1)}))}}]),e}();
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
 */t.default=c},64877:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
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
t.default={translationType:".js-translation-type",emailContentType:".js-email-content-type",emailFormGroup:".js-email-form-group",modulesFormGroup:".js-module-form-group",themesFormGroup:".js-theme-form-group",defaultThemeOption:".js-default-theme",noThemeOption:".js-no-theme",exportCoreType:"#form_core_selectors_core_type",exportCoreValues:"#form_core_selectors_selected_value",exportThemesType:"#form_themes_selectors_themes_type",exportThemesValues:"#form_themes_selectors_selected_value",exportModulesType:"#form_modules_selectors_modules_type",exportModulesValues:"#form_modules_selectors_selected_value",exportLanguageButton:"#form-export-language-button"}},47306:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(99663)),o=a(r(1140)),u=a(r(50339));function a(e){return e&&e.__esModule?e:{default:e}}
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
 */t.default=function e(){(0,n.default)(this,e),new o.default,new u.default}},32242:(e,t,r)=>{e.exports={default:r(33391),__esModule:!0}},47518:(e,t,r)=>{e.exports={default:r(48056),__esModule:!0}},99663:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},22600:(e,t,r)=>{"use strict";t.__esModule=!0;var n,o=r(32242),u=(n=o)&&n.__esModule?n:{default:n};t.default=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,u.default)(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},33391:(e,t,r)=>{r(31477);var n=r(34579).Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},48056:(e,t,r)=>{r(21013),e.exports=r(34579).Object.values},85663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},12159:(e,t,r)=>{var n=r(36727);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},57428:(e,t,r)=>{var n=r(7932),o=r(78728),u=r(16531);e.exports=function(e){return function(t,r,a){var i,s=n(t),l=o(s.length),c=u(a,l);if(e&&r!=r){for(;l>c;)if((i=s[c++])!=i)return!0}else for(;l>c;c++)if((e||c in s)&&s[c]===r)return e||c||0;return!e&&-1}}},32894:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},34579:e=>{var t=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=t)},19216:(e,t,r)=>{var n=r(85663);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},8333:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},89666:(e,t,r)=>{e.exports=!r(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},97467:(e,t,r)=>{var n=r(36727),o=r(33938).document,u=n(o)&&n(o.createElement);e.exports=function(e){return u?o.createElement(e):{}}},73338:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},83856:(e,t,r)=>{var n=r(33938),o=r(34579),u=r(19216),a=r(41818),i=r(27069),s=function(e,t,r){var l,c,f,d=e&s.F,p=e&s.G,h=e&s.S,v=e&s.P,y=e&s.B,m=e&s.W,g=p?o:o[t]||(o[t]={}),_=g.prototype,b=p?n:h?n[t]:(n[t]||{}).prototype;for(l in p&&(r=t),r)(c=!d&&b&&void 0!==b[l])&&i(g,l)||(f=c?b[l]:r[l],g[l]=p&&"function"!=typeof b[l]?r[l]:y&&c?u(f,n):m&&b[l]==f?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):v&&"function"==typeof f?u(Function.call,f):f,v&&((g.virtual||(g.virtual={}))[l]=f,e&s.R&&_&&!_[l]&&a(_,l,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},33938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},27069:e=>{var t={}.hasOwnProperty;e.exports=function(e,r){return t.call(e,r)}},41818:(e,t,r)=>{var n=r(4743),o=r(83101);e.exports=r(89666)?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},33758:(e,t,r)=>{e.exports=!r(89666)&&!r(7929)((function(){return 7!=Object.defineProperty(r(97467)("div"),"a",{get:function(){return 7}}).a}))},50799:(e,t,r)=>{var n=r(32894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},36727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},16227:e=>{e.exports=!0},4743:(e,t,r)=>{var n=r(12159),o=r(33758),u=r(33206),a=Object.defineProperty;t.f=r(89666)?Object.defineProperty:function(e,t,r){if(n(e),t=u(t,!0),n(r),o)try{return a(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},12963:(e,t,r)=>{var n=r(27069),o=r(7932),u=r(57428)(!1),a=r(58989)("IE_PROTO");e.exports=function(e,t){var r,i=o(e),s=0,l=[];for(r in i)r!=a&&n(i,r)&&l.push(r);for(;t.length>s;)n(i,r=t[s++])&&(~u(l,r)||l.push(r));return l}},46162:(e,t,r)=>{var n=r(12963),o=r(73338);e.exports=Object.keys||function(e){return n(e,o)}},86274:(e,t)=>{t.f={}.propertyIsEnumerable},52050:(e,t,r)=>{var n=r(89666),o=r(46162),u=r(7932),a=r(86274).f;e.exports=function(e){return function(t){for(var r,i=u(t),s=o(i),l=s.length,c=0,f=[];l>c;)r=s[c++],n&&!a.call(i,r)||f.push(e?[r,i[r]]:i[r]);return f}}},83101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},58989:(e,t,r)=>{var n=r(20250)("keys"),o=r(65730);e.exports=function(e){return n[e]||(n[e]=o(e))}},20250:(e,t,r)=>{var n=r(34579),o=r(33938),u="__core-js_shared__",a=o[u]||(o[u]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(16227)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},16531:(e,t,r)=>{var n=r(11052),o=Math.max,u=Math.min;e.exports=function(e,t){return(e=n(e))<0?o(e+t,0):u(e,t)}},11052:e=>{var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},7932:(e,t,r)=>{var n=r(50799),o=r(8333);e.exports=function(e){return n(o(e))}},78728:(e,t,r)=>{var n=r(11052),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},33206:(e,t,r)=>{var n=r(36727);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},65730:e=>{var t=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+r).toString(36))}},31477:(e,t,r)=>{var n=r(83856);n(n.S+n.F*!r(89666),"Object",{defineProperty:r(4743).f})},21013:(e,t,r)=>{var n=r(83856),o=r(52050)(!1);n(n.S,"Object",{values:function(e){return o(e)}})}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}(()=>{"use strict";var e,t=r(47306),n=(e=t)&&e.__esModule?e:{default:e};
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
(0,window.$)((function(){new n.default}))})(),window.translation_settings={}})();