exports.ids = [21];
exports.modules = {

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(387);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("36408e64", content, true, context)
};

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_style_index_0_id_38aee2c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(338);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_style_index_0_id_38aee2c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_style_index_0_id_38aee2c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_style_index_0_id_38aee2c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalDetails_vue_vue_type_style_index_0_id_38aee2c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title[data-v-38aee2c3]{margin:var(--spacer-xl) 0 var(--spacer-base) 0}.log-in__info[data-v-38aee2c3]{margin:var(--spacer-lg) 0;color:var(--c-link);font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--secondary)}@media (min-width:1024px){.log-in__info[data-v-38aee2c3]{font-weight:var(--font-weight--normal)}}.log-in__button[data-v-38aee2c3]{margin:var(--spacer-2xl) 0 var(--spacer-xl) 0}.info[data-v-38aee2c3]{margin:0 0 var(--spacer-xl) 0}.info__heading[data-v-38aee2c3]{font-family:var(--font-family--secondary);font-weight:var(--font-weight--normal);margin-bottom:var(--spacer-base)}.info__characteristic[data-v-38aee2c3]{--characteristic-description-font-size:var(--font-size--base);margin:0 0 var(--spacer-sm) var(--spacer-2xs)}@media (min-width:1024px){.info[data-v-38aee2c3]{display:flex;flex-wrap:wrap;margin:0}.info__heading[data-v-38aee2c3]{flex:100%;margin:0 0 var(--spacer-sm) 0;font-size:var(--font-size--xs)}.info__characteristic[data-v-38aee2c3]{margin:0 0 var(--spacer-base) 0;flex:0 50%}}@media (min-width:1024px){.form[data-v-38aee2c3]{display:flex;flex-wrap:wrap;align-items:center}}.form__element[data-v-38aee2c3]{margin:0 0 var(--spacer-xl) 0}@media (min-width:1024px){.form__element[data-v-38aee2c3]{flex:0 0 100%}}@media (min-width:1024px){.form__element--half[data-v-38aee2c3]{flex:1 1 50%}}@media (min-width:1024px){.form__element--half-even[data-v-38aee2c3]{padding:0 0 0 var(--spacer-xl)}}.form__group[data-v-38aee2c3]{display:flex;align-items:center;margin:var(--spacer-xl) 0 var(--spacer-lg) 0}.form__action[data-v-38aee2c3]{display:flex;flex-direction:column-reverse;margin:0 0 var(--spacer-sm) 0}@media (min-width:1024px){.form__action[data-v-38aee2c3]{flex:0 0 100%;flex-direction:row;margin:0}}.form__action-button[data-v-38aee2c3]{margin:0 0 var(--spacer-sm) 0}@media (min-width:1024px){.form__action-button[data-v-38aee2c3]{margin:0}}@media (min-width:1024px){.form__back-button[data-v-38aee2c3]{margin:0 var(--spacer-xl) 0 0}}.form__button[data-v-38aee2c3]{--button-width:100%}@media (min-width:1024px){.form__button[data-v-38aee2c3]{--button-width:auto}}.info[data-v-38aee2c3]{--button-padding:0 var(--spacer);--button-color:var(--c-text-muted);--button-text-decoration:none}.characteristic[data-v-38aee2c3]{margin:0 0 var(--spacer-xl) 0}.characteristic[data-v-38aee2c3]:last-child{margin:0}.modal__heading[data-v-38aee2c3]{margin:0 0 var(--spacer-2xl) 0}.modal__button[data-v-38aee2c3]{margin:var(--spacer-2xl) 0 0 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib??vue-loader-options!./_theme/pages/Checkout/PersonalDetails.vue?vue&type=template&id=38aee2c3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"log-in desktop-only\" data-v-38aee2c3>","</div>",[_c('SfButton',{staticClass:"log-in__button color-secondary",attrs:{"data-cy":"personal-details-btn_login"}},[_vm._v(_vm._s(_vm.$t('Log into your account')))]),_vm._ssrNode(" <p class=\"log-in__info\" data-v-38aee2c3>"+_vm._ssrEscape(_vm._s(_vm.$t('or fill the details below'))+":")+"</p>")],2),_vm._ssrNode(" "),_c('SfHeading',{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{"level":3,"title":"Personal details"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form\" data-v-38aee2c3>","</div>",[_c('SfInput',{staticClass:"form__element form__element--half",attrs:{"data-cy":"personal-details-input_firstName","label":"First name","name":"firstName","required":""},model:{value:(_vm.personalDetails.firstName),callback:function ($$v) {_vm.$set(_vm.personalDetails, "firstName", $$v)},expression:"personalDetails.firstName"}}),_vm._ssrNode(" "),_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"data-cy":"personal-details-input_lastName","label":"Last name","name":"lastName","required":""},model:{value:(_vm.personalDetails.lastName),callback:function ($$v) {_vm.$set(_vm.personalDetails, "lastName", $$v)},expression:"personalDetails.lastName"}}),_vm._ssrNode(" "),_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"personal-details-input_email","label":"Your email","name":"email","required":""},model:{value:(_vm.personalDetails.email),callback:function ($$v) {_vm.$set(_vm.personalDetails, "email", $$v)},expression:"personalDetails.email"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-38aee2c3>","</div>",[_vm._ssrNode("<p class=\"info__heading\" data-v-38aee2c3>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t('Enjoy your free account'))+"\n      ")+"</p> "),_vm._l((_vm.characteristics),function(characteristic,key){return _c('SfCharacteristic',{key:key,staticClass:"info__characteristic",attrs:{"description":characteristic.description,"icon":characteristic.icon,"size-icon":"24px"}})})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form__element form__group\" data-v-38aee2c3>","</div>",[_c('SfCheckbox',{attrs:{"name":"createAccount","label":"I want to create an account"},model:{value:(_vm.createAccount),callback:function ($$v) {_vm.createAccount=$$v},expression:"createAccount"}})],1),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.createAccount)?_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"personal-details-input_password","type":"password","label":"Create Password","required":""},model:{value:(_vm.personalDetails.password),callback:function ($$v) {_vm.$set(_vm.personalDetails, "password", $$v)},expression:"personalDetails.password"}}):_vm._e()],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form__action\" data-v-38aee2c3>","</div>",[_c('SfButton',{staticClass:"color-secondary form__back-button",attrs:{"data-cy":"personal-details-btn_go-back"}},[_vm._v("\n        "+_vm._s(_vm.$t('Go back'))+"\n      ")]),_vm._ssrNode(" "),_c('SfButton',{staticClass:"form__action-button",attrs:{"data-cy":"personal-details-btn_continue"},on:{"click":function($event){return _vm.$emit('nextStep')}}},[_vm._v("\n        "+_vm._s(_vm.$t('Continue to shipping'))+"\n      ")])],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./_theme/pages/Checkout/PersonalDetails.vue?vue&type=template&id=38aee2c3&scoped=true&

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue + 4 modules
var SfInput = __webpack_require__(95);

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue + 4 modules
var SfCheckbox = __webpack_require__(216);

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(23);

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/molecules/SfModal/SfModal.vue + 4 modules
var SfModal = __webpack_require__(223);

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/molecules/SfCharacteristic/SfCharacteristic.vue + 4 modules
var SfCharacteristic = __webpack_require__(221);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(1);

// EXTERNAL MODULE: ../composables/lib/index.es.js
var index_es = __webpack_require__(5);

// CONCATENATED MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/babel-loader/lib??ref--2-0!/Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib??vue-loader-options!./_theme/pages/Checkout/PersonalDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var PersonalDetailsvue_type_script_lang_js_ = ({
  name: 'PersonalDetails',
  components: {
    SfInput: SfInput["a" /* default */],
    SfCheckbox: SfCheckbox["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfHeading: SfHeading["a" /* default */],
    SfModal: SfModal["a" /* default */],
    SfCharacteristic: SfCharacteristic["a" /* default */]
  },

  setup(props, context) {
    context.emit('changeStep', 0);
    const {
      personalDetails
    } = Object(index_es["j" /* useCheckout */])();
    const accountBenefits = Object(composition_api_["ref"])(false);
    const createAccount = Object(composition_api_["ref"])(false);
    return {
      personalDetails,
      accountBenefits,
      createAccount,
      characteristics: [{
        description: 'Faster checkout',
        icon: 'clock'
      }, {
        description: 'Full rewards program benefits',
        icon: 'rewards'
      }, {
        description: 'Earn credits with every purchase',
        icon: 'credits'
      }, {
        description: 'Manage your wishliste',
        icon: 'heart'
      }]
    };
  }

});
// CONCATENATED MODULE: ./_theme/pages/Checkout/PersonalDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkout_PersonalDetailsvue_type_script_lang_js_ = (PersonalDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./_theme/pages/Checkout/PersonalDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(386)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Checkout_PersonalDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38aee2c3",
  "61fc598c"
  
)

/* harmony default export */ var PersonalDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=21.js.map