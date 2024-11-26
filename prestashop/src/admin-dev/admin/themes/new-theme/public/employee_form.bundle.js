(()=>{var e={83830:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(99663)),o=s(n(22600));function s(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,i=function(){function e(t,n){return(0,r.default)(this,e),this.addonsConnectFormSelector=t,this.$loadingSpinner=a(n),this.initEvents(),{}}return(0,o.default)(e,[{key:"initEvents",value:function(){var e=this;a("body").on("submit",this.addonsConnectFormSelector,(function(t){var n=a(t.currentTarget);t.preventDefault(),t.stopPropagation(),e.connect(n.attr("action"),n.serialize())}))}},{key:"connect",value:function(e,t){var n=this;a.ajax({method:"POST",url:e,dataType:"json",data:t,beforeSend:function(){n.$loadingSpinner.show(),a('button.btn[type="submit"]',n.addonsConnectFormSelector).hide()}}).then((function(e){1===e.success?window.location.reload():(a.growl.error({message:e.message}),n.$loadingSpinner.hide(),a('button.btn[type="submit"]',n.addonsConnectFormSelector).fadeIn())}),(function(){a.growl.error({message:a(n.addonsConnectFormSelector).data("error-message")}),n.$loadingSpinner.hide(),a('button.btn[type="submit"]',n.addonsConnectFormSelector).show()}))}}]),e}();t.default=i},50542:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(99663)),o=s(n(22600));function s(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,i=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.default)(this,e),this.minLength=o.minLength||8,this.$feedbackContainer=a(t),{watchPasswordStrength:function(e){return n.watchPasswordStrength(e)},generatePassword:function(e){return n.generatePassword(e)}}}return(0,o.default)(e,[{key:"watchPasswordStrength",value:function(e){var t=this;a.passy.requirements.length.min=this.minLength,a.passy.requirements.characters="DIGIT",e.each((function(e,n){var r=a("<span>");r.insertAfter(a(n)),a(n).passy((function(e,n){t.displayFeedback(r,e,n)}))}))}},{key:"generatePassword",value:function(e){e.passy("generate",this.minLength)}},{key:"displayFeedback",value:function(e,t,n){var r=this.getPasswordStrengthFeedback(t);e.text(r.message),e.removeClass("text-danger text-warning text-success"),e.addClass(r.elementClass),e.toggleClass("d-none",!n)}},{key:"getPasswordStrengthFeedback",value:function(e){switch(e){case a.passy.strength.LOW:return{message:this.$feedbackContainer.find(".strength-low").text(),elementClass:"text-danger"};case a.passy.strength.MEDIUM:return{message:this.$feedbackContainer.find(".strength-medium").text(),elementClass:"text-warning"};case a.passy.strength.HIGH:return{message:this.$feedbackContainer.find(".strength-high").text(),elementClass:"text-success"};case a.passy.strength.EXTREME:return{message:this.$feedbackContainer.find(".strength-extreme").text(),elementClass:"text-success"};default:throw new Error("Invalid password strength indicator.")}}}]),e}();t.default=i},73111:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(99663)),o=i(n(22600)),s=i(n(50542)),a=i(n(61036));function i(e){return e&&e.__esModule?e:{default:e}}
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
 */var u=window.$,l=function(){function e(t,n,o,i,l,d,c,p,f){return(0,r.default)(this,e),this.$inputsBlock=u(t),this.showButtonSelector=n,this.hideButtonSelector=o,this.generatePasswordButtonSelector=i,this.oldPasswordInputSelector=l,this.newPasswordInputSelector=d,this.confirmNewPasswordInputSelector=c,this.generatedPasswordDisplaySelector=p,this.$newPasswordInputs=this.$inputsBlock.find(this.newPasswordInputSelector),this.$copyPasswordInputs=this.$inputsBlock.find(this.confirmNewPasswordInputSelector).add(this.generatedPasswordDisplaySelector),this.$submittableInputs=this.$inputsBlock.find(this.oldPasswordInputSelector).add(this.newPasswordInputSelector).add(this.confirmNewPasswordInputSelector),this.passwordHandler=new s.default(f),this.passwordValidator=new a.default(this.newPasswordInputSelector,this.confirmNewPasswordInputSelector),this.hideInputsBlock(),this.initEvents(),{}}return(0,o.default)(e,[{key:"initEvents",value:function(){var e=this;u(document).on("click",this.showButtonSelector,(function(t){e.hide(u(t.currentTarget)),e.showInputsBlock()})),u(document).on("click",this.hideButtonSelector,(function(){e.hideInputsBlock(),e.show(u(e.showButtonSelector))})),this.passwordHandler.watchPasswordStrength(this.$newPasswordInputs),u(document).on("click",this.generatePasswordButtonSelector,(function(){e.passwordHandler.generatePassword(e.$newPasswordInputs),e.$copyPasswordInputs.val(e.$newPasswordInputs.val()),e.checkPasswordValidity()})),u(document).on("keyup",this.newPasswordInputSelector+","+this.confirmNewPasswordInputSelector,(function(){e.checkPasswordValidity()})),u(document).on("submit",u(this.oldPasswordInputSelector).closest("form"),(function(t){u(e.oldPasswordInputSelector).is(":disabled")||e.passwordValidator.isPasswordValid()||t.preventDefault()}))}},{key:"checkPasswordValidity",value:function(){var e=u(this.newPasswordInputSelector).parent().find(".form-text"),t=u(this.confirmNewPasswordInputSelector).parent().find(".form-text");e.text(this.getPasswordLengthValidationMessage()).toggleClass("text-danger",!this.passwordValidator.isPasswordLengthValid()),t.text(this.getPasswordConfirmationValidationMessage()).toggleClass("text-danger",!this.passwordValidator.isPasswordMatchingConfirmation())}},{key:"getPasswordConfirmationValidationMessage",value:function(){return this.passwordValidator.isPasswordMatchingConfirmation()?"":u(this.confirmNewPasswordInputSelector).data("invalid-password")}},{key:"getPasswordLengthValidationMessage",value:function(){return this.passwordValidator.isPasswordTooShort()?u(this.newPasswordInputSelector).data("password-too-short"):this.passwordValidator.isPasswordTooLong()?u(this.newPasswordInputSelector).data("password-too-long"):""}},{key:"showInputsBlock",value:function(){this.show(this.$inputsBlock),this.$submittableInputs.removeAttr("disabled"),this.$submittableInputs.attr("required","required")}},{key:"hideInputsBlock",value:function(){this.hide(this.$inputsBlock),this.$submittableInputs.attr("disabled","disabled"),this.$submittableInputs.removeAttr("required"),this.$inputsBlock.find("input").val(""),this.$inputsBlock.find(".form-text").text("")}},{key:"hide",value:function(e){e.addClass("d-none")}},{key:"show",value:function(e){e.removeClass("d-none")}}]),e}();t.default=l},19078:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(99663)),o=s(n(22600));function s(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=window.$,i=function(){function e(t){var n=this;return(0,r.default)(this,e),this.$container=a(t),this.$container.on("click",".js-input-wrapper",(function(e){var t=a(e.currentTarget);n.toggleChildTree(t)})),this.$container.on("click",".js-toggle-choice-tree-action",(function(e){var t=a(e.currentTarget);n.toggleTree(t)})),{enableAutoCheckChildren:function(){return n.enableAutoCheckChildren()},enableAllInputs:function(){return n.enableAllInputs()},disableAllInputs:function(){return n.disableAllInputs()}}}return(0,o.default)(e,[{key:"enableAutoCheckChildren",value:function(){this.$container.on("change",'input[type="checkbox"]',(function(e){var t=a(e.currentTarget);t.closest("li").find('ul input[type="checkbox"]').prop("checked",t.is(":checked"))}))}},{key:"enableAllInputs",value:function(){this.$container.find("input").removeAttr("disabled")}},{key:"disableAllInputs",value:function(){this.$container.find("input").attr("disabled","disabled")}},{key:"toggleChildTree",value:function(e){var t=e.closest("li");t.hasClass("expanded")?t.removeClass("expanded").addClass("collapsed"):t.hasClass("collapsed")&&t.removeClass("collapsed").addClass("expanded")}},{key:"toggleTree",value:function(e){var t=e.closest(".js-choice-tree-container"),n=e.data("action"),r={addClass:{expand:"expanded",collapse:"collapsed"},removeClass:{expand:"collapsed",collapse:"expanded"},nextAction:{expand:"collapse",collapse:"expand"},text:{expand:"collapsed-text",collapse:"expanded-text"},icon:{expand:"collapsed-icon",collapse:"expanded-icon"}};t.find("li").each((function(e,t){var o=a(t);o.hasClass(r.removeClass[n])&&o.removeClass(r.removeClass[n]).addClass(r.addClass[n])})),e.data("action",r.nextAction[n]),e.find(".material-icons").text(e.data(r.icon[n])),e.find(".js-toggle-text").text(e.data(r.text[n]))}}]),e}();t.default=i},61036:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(99663)),o=s(n(22600));function s(e){return e&&e.__esModule?e:{default:e}}
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
 */var a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,r.default)(this,e),this.newPasswordInput=document.querySelector(t),this.confirmPasswordInput=document.querySelector(n),this.minPasswordLength=o.minPasswordLength||8,this.maxPasswordLength=o.maxPasswordLength||255}return(0,o.default)(e,[{key:"isPasswordValid",value:function(){return!(this.confirmPasswordInput&&!this.isPasswordMatchingConfirmation())&&this.isPasswordLengthValid()}},{key:"isPasswordLengthValid",value:function(){return!this.isPasswordTooShort()&&!this.isPasswordTooLong()}},{key:"isPasswordMatchingConfirmation",value:function(){if(!this.confirmPasswordInput)throw new Error("Confirm password input is not provided for the password validator.");return""===this.confirmPasswordInput.value||this.newPasswordInput.value===this.confirmPasswordInput.value}},{key:"isPasswordTooShort",value:function(){return this.newPasswordInput.value.length<this.minPasswordLength}},{key:"isPasswordTooLong",value:function(){return this.newPasswordInput.value.length>this.maxPasswordLength}}]),e}();t.default=a},28681:(e,t,n)=>{"use strict";var r=n(73609);Object.defineProperty(t,"__esModule",{value:!0});var o=p(n(88902)),s=p(n(47518)),a=p(n(99663)),i=p(n(22600)),u=p(n(19078)),l=p(n(83830)),d=p(n(73111)),c=p(n(65389));function p(e){return e&&e.__esModule?e:{default:e}}
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
 */var f=function(){function e(){return(0,a.default)(this,e),this.shopChoiceTreeSelector=c.default.shopChoiceTree,this.shopChoiceTree=new u.default(this.shopChoiceTreeSelector),this.employeeProfileSelector=c.default.profileSelect,this.tabsDropdownSelector=c.default.defaultPageSelect,this.shopChoiceTree.enableAutoCheckChildren(),new l.default(c.default.addonsConnectForm,c.default.addonsLoginButton),new d.default(c.default.changePasswordInputsBlock,c.default.showChangePasswordBlockButton,c.default.hideChangePasswordBlockButton,c.default.generatePasswordButton,c.default.oldPasswordInput,c.default.newPasswordInput,c.default.confirmNewPasswordInput,c.default.generatedPasswordDisplayInput,c.default.passwordStrengthFeedbackContainer),this.initEvents(),this.toggleShopTree(),{}}return(0,i.default)(e,[{key:"initEvents",value:function(){var e=this,t=r(this.employeeProfileSelector).data("get-tabs-url");r(document).on("change",this.employeeProfileSelector,(function(){return e.toggleShopTree()})),r(document).on("change",this.employeeProfileSelector,(function(n){r.get(t,{profileId:r(n.currentTarget).val()},(function(t){e.reloadTabsDropdown(t)}),"json")}))}},{key:"reloadTabsDropdown",value:function(e){var t=this,n=r(this.tabsDropdownSelector);n.empty(),(0,s.default)(e).forEach((function(e){if(e.children.length>0&&e.name){var r=t.createOptionGroup(e.name);(0,o.default)(e.children).forEach((function(n){e.children[n].name&&r.append(t.createOption(e.children[n].name,e.children[n].id_tab))})),n.append(r)}else e.name&&n.append(t.createOption(e.name,e.id_tab))}))}},{key:"toggleShopTree",value:function(){var e=r(this.employeeProfileSelector),t=e.data("admin-profile");r(this.shopChoiceTreeSelector).closest(".form-group").toggleClass("d-none",e.val()===t)}},{key:"createOptionGroup",value:function(e){return r('<optgroup label="'+e+'">')}},{key:"createOption",value:function(e,t){return r('<option value="'+t+'">'+e+"</option>")}}]),e}();t.default=f},65389:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
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
t.default={shopChoiceTree:"#employee_shop_association",profileSelect:"#employee_profile",defaultPageSelect:"#employee_default_page",addonsConnectForm:"#addons-connect-form",addonsLoginButton:"#addons_login_btn",changePasswordInputsBlock:".js-change-password-block",showChangePasswordBlockButton:".js-change-password",hideChangePasswordBlockButton:".js-change-password-cancel",generatePasswordButton:"#employee_change_password_generate_password_button",oldPasswordInput:"#employee_change_password_old_password",newPasswordInput:"#employee_change_password_new_password_first",confirmNewPasswordInput:"#employee_change_password_new_password_second",generatedPasswordDisplayInput:"#employee_change_password_generated_password",passwordStrengthFeedbackContainer:".js-password-strength-feedback"}},32242:(e,t,n)=>{e.exports={default:n(33391),__esModule:!0}},88902:(e,t,n)=>{e.exports={default:n(98613),__esModule:!0}},47518:(e,t,n)=>{e.exports={default:n(48056),__esModule:!0}},99663:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},22600:(e,t,n)=>{"use strict";t.__esModule=!0;var r,o=n(32242),s=(r=o)&&r.__esModule?r:{default:r};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,s.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},33391:(e,t,n)=>{n(31477);var r=n(34579).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},98613:(e,t,n)=>{n(40961),e.exports=n(34579).Object.keys},48056:(e,t,n)=>{n(21013),e.exports=n(34579).Object.values},85663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},12159:(e,t,n)=>{var r=n(36727);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},57428:(e,t,n)=>{var r=n(7932),o=n(78728),s=n(16531);e.exports=function(e){return function(t,n,a){var i,u=r(t),l=o(u.length),d=s(a,l);if(e&&n!=n){for(;l>d;)if((i=u[d++])!=i)return!0}else for(;l>d;d++)if((e||d in u)&&u[d]===n)return e||d||0;return!e&&-1}}},32894:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},34579:e=>{var t=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=t)},19216:(e,t,n)=>{var r=n(85663);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},8333:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},89666:(e,t,n)=>{e.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},97467:(e,t,n)=>{var r=n(36727),o=n(33938).document,s=r(o)&&r(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},73338:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},83856:(e,t,n)=>{var r=n(33938),o=n(34579),s=n(19216),a=n(41818),i=n(27069),u=function(e,t,n){var l,d,c,p=e&u.F,f=e&u.G,h=e&u.S,w=e&u.P,g=e&u.B,v=e&u.W,m=f?o:o[t]||(o[t]={}),y=m.prototype,P=f?r:h?r[t]:(r[t]||{}).prototype;for(l in f&&(n=t),n)(d=!p&&P&&void 0!==P[l])&&i(m,l)||(c=d?P[l]:n[l],m[l]=f&&"function"!=typeof P[l]?n[l]:g&&d?s(c,r):v&&P[l]==c?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(c):w&&"function"==typeof c?s(Function.call,c):c,w&&((m.virtual||(m.virtual={}))[l]=c,e&u.R&&y&&!y[l]&&a(y,l,c)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},33938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},27069:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},41818:(e,t,n)=>{var r=n(4743),o=n(83101);e.exports=n(89666)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},33758:(e,t,n)=>{e.exports=!n(89666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(97467)("div"),"a",{get:function(){return 7}}).a}))},50799:(e,t,n)=>{var r=n(32894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},36727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},16227:e=>{e.exports=!0},4743:(e,t,n)=>{var r=n(12159),o=n(33758),s=n(33206),a=Object.defineProperty;t.f=n(89666)?Object.defineProperty:function(e,t,n){if(r(e),t=s(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},12963:(e,t,n)=>{var r=n(27069),o=n(7932),s=n(57428)(!1),a=n(58989)("IE_PROTO");e.exports=function(e,t){var n,i=o(e),u=0,l=[];for(n in i)n!=a&&r(i,n)&&l.push(n);for(;t.length>u;)r(i,n=t[u++])&&(~s(l,n)||l.push(n));return l}},46162:(e,t,n)=>{var r=n(12963),o=n(73338);e.exports=Object.keys||function(e){return r(e,o)}},86274:(e,t)=>{t.f={}.propertyIsEnumerable},12584:(e,t,n)=>{var r=n(83856),o=n(34579),s=n(7929);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*s((function(){n(1)})),"Object",a)}},52050:(e,t,n)=>{var r=n(89666),o=n(46162),s=n(7932),a=n(86274).f;e.exports=function(e){return function(t){for(var n,i=s(t),u=o(i),l=u.length,d=0,c=[];l>d;)n=u[d++],r&&!a.call(i,n)||c.push(e?[n,i[n]]:i[n]);return c}}},83101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},58989:(e,t,n)=>{var r=n(20250)("keys"),o=n(65730);e.exports=function(e){return r[e]||(r[e]=o(e))}},20250:(e,t,n)=>{var r=n(34579),o=n(33938),s="__core-js_shared__",a=o[s]||(o[s]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(16227)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},16531:(e,t,n)=>{var r=n(11052),o=Math.max,s=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):s(e,t)}},11052:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7932:(e,t,n)=>{var r=n(50799),o=n(8333);e.exports=function(e){return r(o(e))}},78728:(e,t,n)=>{var r=n(11052),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},66530:(e,t,n)=>{var r=n(8333);e.exports=function(e){return Object(r(e))}},33206:(e,t,n)=>{var r=n(36727);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},65730:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+n).toString(36))}},31477:(e,t,n)=>{var r=n(83856);r(r.S+r.F*!n(89666),"Object",{defineProperty:n(4743).f})},40961:(e,t,n)=>{var r=n(66530),o=n(46162);n(12584)("keys",(function(){return function(e){return o(r(e))}}))},21013:(e,t,n)=>{var r=n(83856),o=n(52050)(!1);r(r.S,"Object",{values:function(e){return o(e)}})},73609:e=>{"use strict";e.exports=window.jQuery}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}(()=>{"use strict";var e,t=n(73609),r=n(28681),o=(e=r)&&e.__esModule?e:{default:e};t((function(){new o.default}))})
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
     */(),window.employee_form={}})();