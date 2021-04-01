exports.ids = [20];
exports.modules = {

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(285);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("56bbfae2", content, true, context)
};

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(259);
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sf-radio{display:flex;display:var(--radio-display,flex);transition:background-color .25s cubic-bezier(1,.5,.8,1);transition:var(--radio-transition,background-color .25s cubic-bezier(1,.5,.8,1))}.sf-radio__label{display:flex;display:var(--radio-label-display,flex);font:var(--font-weight--normal) var(--font-size--base)/normal var(--font-family--primary);font:var(--radio-label-font,var(--radio-label-font-weight,var(--font-weight--normal)) var(--radio-label-font-size,var(--font-size--base))/var(--radio-label-font-line-height,normal) var(--radio-label-font-family,var(--font-family--primary)));color:var(--radio-label-color)}.sf-radio__checkmark{box-sizing:border-box;width:1.5rem;width:var(--radio-checkmark-size,1.5rem);height:1.5rem;height:var(--radio-checkmark-size,1.5rem);border:var(--radio-checkmark-border,var(--radio-checkmark-border-style,solid) var(--radio-checkmark-border-color,var(--c-gray-variant)));border-width:1px;border-width:var(--radio-checkmark-border-width,1px);border-radius:100%;border-radius:var(--radio-checkmark-border-radius,100%);transition:border .25s cubic-bezier(1,.5,.8,1);transition:var(--radio-checkmark-transition,border .25s cubic-bezier(1,.5,.8,1))}.sf-radio__checkmark.is-active{--radio-checkmark-border-width:9px;--radio-checkmark-border-color:var(--c-primary)}.sf-radio input{position:absolute;opacity:0;left:-1000%;width:1px;height:1px}.sf-radio input[style*=\"outline: none\"]:focus+.sf-radio__checkmark{outline:none}.sf-radio input:focus+.sf-radio__checkmark{outline-color:-webkit-focus-ring-color;outline-style:auto}.sf-radio__container{position:relative;display:flex;display:var(--radio-container-display,flex);align-items:var(--radio-container-align-items);flex:1;padding:var(--radio-container-padding,var(--spacer-sm) var(--spacer-lg) var(--spacer-sm) var(--spacer-sm));cursor:pointer;cursor:var(--radio-container-cursor,pointer)}.sf-radio:hover{--radio-checkmark-border-color:var(--c-black)}.sf-radio__content{flex:1;margin:var(--radio-content-margin,0 0 0 var(--spacer-sm))}.sf-radio__details{margin:var(--radio-details-margin,var(--spacer-xs) 0 0 0);color:var(--c-text-muted);color:var(--radio-details-color,var(--c-text-muted));font:var(--font-weight--light) var(--font-size--sm)/1.2 var(--font-family--primary);font:var(--radio-details-font,var(--radio-details-font-weight,var(--font-weight--light)) var(--radio-details-font-size,var(--font-size--sm))/var(--radio-details-font-line-height,1.2) var(--radio-details-font-family,var(--font-family--primary)))}.sf-radio__description{margin:var(--radio-description-margin,var(--spacer-xs) 0 0 0);font:var(--font-weight--light) var(--font-size--sm)/1.6 var(--font-family--primary);font:var(--radio-description-font,var(--radio-description-font-weight,var(--font-weight--light)) var(--radio-description-font-size,var(--font-size--sm))/var(--radio-description-font-line-height,1.6) var(--radio-description-font-family,var(--font-family--primary)));color:var(--radio-description-margin)}.sf-radio.is-active{background:var(--c-light);background:var(--radio-background,var(--c-light))}.sf-radio.is-disabled{--radio-checkmark-border-color:var(--c-text-disabled);--radio-details-color:var(--c-text-disabled);--radio-description-margin:var(--c-text-disabled);--radio-label-color:var(--c-text-disabled);--radio-container-cursor:default}.sf-radio.is-disabled:hover{--radio-checkmark-border-color:var(--c-text-disabled)}.sf-radio--transparent.is-active{--radio-background:transparent}@media (min-width:1024px){.sf-radio{--radio-container-padding:var(--spacer-sm)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib??vue-loader-options!/Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=template&id=6098eae6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-radio",class:{
    'is-active': _vm.isChecked,
    'is-disabled': _vm.disabled,
  }},[_vm._ssrNode("<label class=\"sf-radio__container\">","</label>",[_c('input',{directives:[{name:"focus",rawName:"v-focus"}],attrs:{"type":"radio","name":_vm.name,"disabled":_vm.disabled},domProps:{"value":_vm.value,"checked":_vm.isChecked},on:{"change":_vm.changeHandler,"input":_vm.inputHandler}},[]),_vm._ssrNode(" "),_vm._t("checkmark",[_c('div',{staticClass:"sf-radio__checkmark",class:{ 'sf-radio__checkmark is-active': _vm.isChecked }})],null,{ isChecked: _vm.isChecked, disabled: _vm.disabled }),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-radio__content\">","</div>",[_vm._t("label",[(_vm.label)?_c('div',{staticClass:"sf-radio__label"},[_vm._v(_vm._s(_vm.label))]):_vm._e()],null,{ label: _vm.label, isChecked: _vm.isChecked, disabled: _vm.disabled }),_vm._ssrNode(" "),_vm._t("details",[(_vm.details)?_c('p',{staticClass:"sf-radio__details"},[_vm._v("\n          "+_vm._s(_vm.details)+"\n        ")]):_vm._e()],null,{ details: _vm.details }),_vm._ssrNode(" "),_vm._t("description",[(_vm.description)?_c('p',{staticClass:"sf-radio__description"},[_vm._v("\n          "+_vm._s(_vm.description)+"\n        ")]):_vm._e()],null,{ description: _vm.description })],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=template&id=6098eae6&

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(217);

// CONCATENATED MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/babel-loader/lib??ref--2-0!/Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib??vue-loader-options!/Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=script&lang=js&
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

/* harmony default export */ var SfRadiovue_type_script_lang_js_ = ({
  name: "SfRadio",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  model: {
    prop: "selected",
    event: "input"
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    details: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
      default: ""
    }
  },
  computed: {
    isChecked() {
      return this.value === this.selected;
    }

  },
  methods: {
    changeHandler() {
      this.$emit("change", this.value);
    },

    inputHandler() {
      this.$emit("input", this.value);
    }

  }
});
// CONCATENATED MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfRadio_SfRadiovue_type_script_lang_js_ = (SfRadiovue_type_script_lang_js_); 
// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(284)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfRadio_SfRadiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "220e3ef8"
  
)

/* harmony default export */ var SfRadio = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(389);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("cc0bda20", content, true, context)
};

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Shipping_vue_vue_type_style_index_0_id_0723baf7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Shipping_vue_vue_type_style_index_0_id_0723baf7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Shipping_vue_vue_type_style_index_0_id_0723baf7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Shipping_vue_vue_type_style_index_0_id_0723baf7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Shipping_vue_vue_type_style_index_0_id_0723baf7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title[data-v-0723baf7]{margin:var(--spacer-xl) 0 var(--spacer-base) 0}.form__select[data-v-0723baf7]{display:flex;align-items:center;--select-option-font-size:var(--font-size--lg)}.form__select[data-v-0723baf7]  .sf-select__dropdown{font-size:var(--font-size--lg);margin:0;font-family:var(--font-family--secondary);font-weight:var(--font-weight--normal)}@media (min-width:1024px){.form[data-v-0723baf7]{display:flex;flex-wrap:wrap;align-items:center}}.form__element[data-v-0723baf7]{margin:0 0 var(--spacer-base) 0}@media (min-width:1024px){.form__element[data-v-0723baf7]{flex:0 0 100%}}@media (min-width:1024px){.form__element--half[data-v-0723baf7]{flex:1 1 50%}}@media (min-width:1024px){.form__element--half-even[data-v-0723baf7]{padding:0 0 0 var(--spacer-xl)}}.form__group[data-v-0723baf7]{display:flex;align-items:center}@media (min-width:1024px){.form__action[data-v-0723baf7]{flex:0 0 100%;display:flex}}.form__action-button[data-v-0723baf7],.form__back-button[data-v-0723baf7]{--button-width:100%}@media (min-width:1024px){.form__action-button[data-v-0723baf7],.form__back-button[data-v-0723baf7]{--button-width:auto}}.form__action-button[data-v-0723baf7]{margin:0 var(--spacer-xl) 0 0}.form__back-button[data-v-0723baf7]{margin:0 0 var(--spacer-sm) 0}@media (min-width:1024px){.form__back-button[data-v-0723baf7]{margin:0 var(--spacer-xl) 0 0}}.form__radio-group[data-v-0723baf7]{flex:0 0 100%;margin:0 0 var(--spacer-2xl) 0}.shipping[data-v-0723baf7]{margin:0 calc(var(--spacer-xl)*-1)}.shipping__label[data-v-0723baf7]{display:flex;justify-content:space-between}.shipping__description[data-v-0723baf7]{--radio-description-margin:0;--radio-description-font-size:var(--font-size--xs)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib??vue-loader-options!./_theme/pages/Checkout/Shipping.vue?vue&type=template&id=0723baf7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SfHeading',{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{"level":3,"title":"Shipping"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form\" data-v-0723baf7>","</div>",[(_vm.isAuthenticated && _vm.shippingAddresses && _vm.shippingAddresses.length)?_c('UserShippingAddresses',{attrs:{"setAsDefault":_vm.setAsDefault,"shippingAddresses":_vm.shippingAddresses,"currentAddressId":_vm.currentAddressId},on:{"setCurrentAddress":function($event){_vm.setCurrentAddress($event); _vm.addressIsModified = true;},"changeSetAsDefault":function($event){_vm.setAsDefault = $event}}}):_vm._e(),_vm._ssrNode(" "),(!_vm.canAddNewAddress)?_c('SfButton',{staticClass:"form__action-button form__action-button--margin-bottom",attrs:{"type":"submit"},nativeOn:{"click":function($event){_vm.canAddNewAddress = true}}},[_vm._v("\n        Add new address\n      ")]):_vm._e(),_vm._ssrNode(" "),(_vm.canAddNewAddress)?[_c('SfInput',{staticClass:"form__element form__element--half",attrs:{"data-cy":"shipping-details-input_firstName","label":"First name","name":"firstName","required":""},on:{"input":_vm.afterModifiedAddress},model:{value:(_vm.shippingDetails.firstName),callback:function ($$v) {_vm.$set(_vm.shippingDetails, "firstName", $$v)},expression:"shippingDetails.firstName"}}),_vm._ssrNode(" "),_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"data-cy":"shipping-details-input_lastName","label":"Last name","name":"lastName","required":""},on:{"input":_vm.afterModifiedAddress},model:{value:(_vm.shippingDetails.lastName),callback:function ($$v) {_vm.$set(_vm.shippingDetails, "lastName", $$v)},expression:"shippingDetails.lastName"}}),_vm._ssrNode(" "),_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"shipping-details-input_streetName","label":"Street name","name":"streetName","required":""},on:{"input":_vm.afterModifiedAddress},model:{value:(_vm.shippingDetails.streetName),callback:function ($$v) {_vm.$set(_vm.shippingDetails, "streetName", $$v)},expression:"shippingDetails.streetName"}}),_vm._ssrNode(" "),_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"shipping-details-input_apartmanet","label":"House/Apartment number","name":"apartment","required":""},on:{"input":_vm.afterModifiedAddress},model:{value:(_vm.shippingDetails.apartment),callback:function ($$v) {_vm.$set(_vm.shippingDetails, "apartment", $$v)},expression:"shippingDetails.apartment"}}),_vm._ssrNode(" "),_c('SfInput',{staticClass:"form__element form__element--half",attrs:{"data-cy":"shipping-details-input_city","label":"City","name":"city","required":""},on:{"input":_vm.afterModifiedAddress},model:{value:(_vm.shippingDetails.city),callback:function ($$v) {_vm.$set(_vm.shippingDetails, "city", $$v)},expression:"shippingDetails.city"}}),_vm._ssrNode(" "),_c('SfInput',{staticClass:"form__element form__element--half form__element--half-even",attrs:{"data-cy":"shipping-details-input_state","label":"State/Province","name":"state","required":""},on:{"input":_vm.afterModifiedAddress},model:{value:(_vm.shippingDetails.state),callback:function ($$v) {_vm.$set(_vm.shippingDetails, "state", $$v)},expression:"shippingDetails.state"}}),_vm._ssrNode(" "),_c('SfInput',{staticClass:"form__element form__element--half",attrs:{"data-cy":"shipping-details-input_postalCode","label":"Zip-code","name":"zipCode","required":""},on:{"input":_vm.afterModifiedAddress},model:{value:(_vm.shippingDetails.postalCode),callback:function ($$v) {_vm.$set(_vm.shippingDetails, "postalCode", $$v)},expression:"shippingDetails.postalCode"}}),_vm._ssrNode(" "),_c('SfSelect',{staticClass:"form__element form__element--half form__element--half-even form__select sf-select--underlined",attrs:{"data-cy":"shipping-details-select_country","label":"Country","required":""},on:{"input":_vm.afterModifiedAddress},model:{value:(_vm.shippingDetails.country),callback:function ($$v) {_vm.$set(_vm.shippingDetails, "country", $$v)},expression:"shippingDetails.country"}},_vm._l((_vm.COUNTRIES),function(countryOption){return _c('SfSelectOption',{key:countryOption.key,attrs:{"value":countryOption.key}},[_vm._v("\n            "+_vm._s(countryOption.label)+"\n          ")])}),1),_vm._ssrNode(" "),_c('SfInput',{staticClass:"form__element",attrs:{"data-cy":"shipping-details-input_phone","label":"Phone number","name":"phone","required":""},on:{"input":_vm.afterModifiedAddress},model:{value:(_vm.shippingDetails.phone),callback:function ($$v) {_vm.$set(_vm.shippingDetails, "phone", $$v)},expression:"shippingDetails.phone"}})]:_vm._e()],2),_vm._ssrNode(" "),(_vm.canContinueToPayment)?_c('SfHeading',{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{"level":3,"title":"Shipping method"}}):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form\" data-v-0723baf7>","</div>",[_vm._ssrNode("<div class=\"form__radio-group\" data-v-0723baf7>","</div>",_vm._l((_vm.shippingMethods),function(item){return _c('SfRadio',{key:_vm.checkoutGetters.getShippingMethodName(item),staticClass:"form__radio shipping",attrs:{"data-cy":"shipping-details-radio_shippingMethod","label":_vm.checkoutGetters.getShippingMethodName(item),"value":_vm.checkoutGetters.getShippingMethodId(item),"selected":_vm.checkoutGetters.getShippingMethodId(_vm.chosenShippingMethod),"name":"shippingMethod","description":_vm.checkoutGetters.getShippingMethodDescription(item)},on:{"input":function () { return _vm.chosenShippingMethod = item; }},scopedSlots:_vm._u([{key:"label",fn:function(ref){
var label = ref.label;
return [_c('div',{staticClass:"sf-radio__label shipping__label"},[_c('div',[_vm._v(_vm._s(label))]),_vm._v(" "),_c('div',[_vm._v("$"+_vm._s(_vm.checkoutGetters.getShippingMethodPrice(item)))])])]}},{key:"description",fn:function(ref){
var description = ref.description;
return [_c('div',{staticClass:"sf-radio__description shipping__description"},[_c('div',{staticClass:"shipping__info"},[_vm._v("\n              "+_vm._s(description)+"\n            ")])])]}}],null,true)})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form__action\" data-v-0723baf7>","</div>",[_c('SfButton',{staticClass:"color-secondary form__back-button",attrs:{"data-cy":"shipping-btn_go-back"}},[_vm._v("\n        Go back\n      ")]),_vm._ssrNode(" "),(_vm.canContinueToPayment)?_c('SfButton',{staticClass:"form__action-button",attrs:{"data-cy":"shipping-btn_continue"},on:{"click":function($event){return _vm.$emit('nextStep')}}},[_vm._v("\n        Continue to payment\n      ")]):_c('SfButton',{staticClass:"form__action-button",attrs:{"data-cy":"shipping-btn_continue"},on:{"click":_vm.saveShippingDetails}},[_vm._v("\n        Select shipping method\n      ")])],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./_theme/pages/Checkout/Shipping.vue?vue&type=template&id=0723baf7&scoped=true&

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(23);

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue + 4 modules
var SfInput = __webpack_require__(95);

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(8);

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/molecules/SfSelect/SfSelect.vue + 9 modules
var SfSelect = __webpack_require__(220);

// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue + 4 modules
var SfRadio = __webpack_require__(324);

// EXTERNAL MODULE: ../composables/lib/index.es.js
var index_es = __webpack_require__(5);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(1);

// CONCATENATED MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/babel-loader/lib??ref--2-0!/Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib??vue-loader-options!./_theme/pages/Checkout/Shipping.vue?vue&type=script&lang=js&
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



const COUNTRIES = [{
  key: 'US',
  label: 'United States'
}, {
  key: 'UK',
  label: 'United Kingdom'
}, {
  key: 'IT',
  label: 'Italy'
}, {
  key: 'PL',
  label: 'Poland'
}];
/* harmony default export */ var Shippingvue_type_script_lang_js_ = ({
  name: 'Shipping',
  components: {
    SfHeading: SfHeading["a" /* default */],
    SfInput: SfInput["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfSelect: SfSelect["a" /* default */],
    SfRadio: SfRadio["a" /* default */],
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    UserShippingAddresses: () => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, 438))
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(props, context) {
    context.emit('changeStep', 1);
    const {
      shippingDetails,
      chosenShippingMethod,
      shippingMethods
    } = Object(index_es["j" /* useCheckout */])();
    const {
      shipping,
      load: loadUserShipping,
      setDefault
    } = Object(index_es["q" /* useUserShipping */])();
    const {
      isAuthenticated
    } = Object(index_es["n" /* useUser */])();
    const canAddNewAddress = Object(composition_api_["ref"])(true);
    const addressIsModified = Object(composition_api_["ref"])(false);
    const currentAddressId = Object(composition_api_["ref"])(-1);
    const setAsDefault = Object(composition_api_["ref"])(false);
    const isShippingAddressCompleted = Object(composition_api_["ref"])(false);

    const setShippingDetails = address => {
      shippingDetails.value = { ...shippingDetails.value,
        ...address
      };
    };

    const mapAbstractAddressToIntegrationAddress = address => ({ ...shippingDetails.value,
      city: address.city,
      country: address.country,
      firstName: address.firstName,
      lastName: address.lastName,
      streetName: address.streetName,
      postalCode: address.zipCode,
      state: address.state,
      phone: address.phoneNumber,
      apartment: address.apartment
    });

    const setCurrentAddress = async addressId => {
      const chosenAddress = index_es["u" /* userShippingGetters */].getAddresses(shipping.value, {
        id: addressId
      });

      if (!chosenAddress || !chosenAddress.length) {
        return;
      }

      currentAddressId.value = addressId;
      setShippingDetails(mapAbstractAddressToIntegrationAddress(chosenAddress[0]));
      addressIsModified.value = true;
    };

    Object(composition_api_["onMounted"])(async () => {
      if (isAuthenticated.value) {
        await loadUserShipping();
        const shippingAddresses = index_es["u" /* userShippingGetters */].getAddresses(shipping.value);

        if (!shippingAddresses || !shippingAddresses.length) {
          return;
        }

        canAddNewAddress.value = false;

        if (shippingAddresses[0].isDefault) {
          setCurrentAddress(shippingAddresses[0].id);
        }
      }
    });

    const saveShippingDetails = async () => {
      if (currentAddressId.value > -1 && setAsDefault.value) {
        const chosenAddress = index_es["u" /* userShippingGetters */].getAddresses(shipping.value, {
          id: currentAddressId.value
        });

        if (!chosenAddress || !chosenAddress.length) {
          return;
        }

        await setDefault(chosenAddress[0]);
      }

      isShippingAddressCompleted.value = true;
      addressIsModified.value = false;
    };

    const afterModifiedAddress = () => {
      addressIsModified.value = true;
      currentAddressId.value = -1;
    };

    const canContinueToPayment = Object(composition_api_["computed"])(() => isShippingAddressCompleted.value && !addressIsModified.value);
    return {
      shippingDetails,
      chosenShippingMethod,
      shippingMethods,
      checkoutGetters: index_es["b" /* checkoutGetters */],
      COUNTRIES,
      isAuthenticated,
      shippingAddresses: Object(composition_api_["computed"])(() => index_es["u" /* userShippingGetters */].getAddresses(shipping.value)),
      setAsDefault,
      currentAddressId,
      setCurrentAddress,
      canAddNewAddress,
      canContinueToPayment,
      isShippingAddressCompleted,
      addressIsModified,
      saveShippingDetails,
      afterModifiedAddress
    };
  }

});
// CONCATENATED MODULE: ./_theme/pages/Checkout/Shipping.vue?vue&type=script&lang=js&
 /* harmony default export */ var Checkout_Shippingvue_type_script_lang_js_ = (Shippingvue_type_script_lang_js_); 
// EXTERNAL MODULE: /Users/dponnappan/Personals/ChangeCX/tech/apps/ChangeCXStorefront/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./_theme/pages/Checkout/Shipping.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(388)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Checkout_Shippingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0723baf7",
  "0e21fb86"
  
)

/* harmony default export */ var Shipping = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=20.js.map