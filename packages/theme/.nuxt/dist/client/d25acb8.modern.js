(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{329:function(e,t,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("677935d5",content,!0,{sourceMap:!1})},384:function(e,t,n){"use strict";n(329)},385:function(e,t,n){var d=n(5)(!1);d.push([e.i,".message[data-v-12fe36e0]{font-family:var(--font-family--primary);line-height:1.6;font-size:var(--font-size--base);margin:0 0 var(--spacer-base)}.shipping-list[data-v-12fe36e0]{margin-bottom:var(--spacer-base)}.shipping[data-v-12fe36e0]{display:flex;padding:var(--spacer-xl) 0;border-top:1px solid var(--c-light)}.shipping[data-v-12fe36e0]:last-child{border-bottom:1px solid var(--c-light)}.shipping__content[data-v-12fe36e0]{flex:1;color:var(--c-text);font-size:var(--font-size--base);font-weight:300;line-height:1.6}.shipping__actions[data-v-12fe36e0]{flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end}@media (min-width:1024px){.shipping__actions[data-v-12fe36e0]{flex-direction:row;align-items:center;justify-content:flex-end}}.shipping__button-delete[data-v-12fe36e0]{color:var(--c-link)}@media (min-width:1024px){.shipping__button-delete[data-v-12fe36e0]{margin-left:var(--spacer-base)}}.shipping__address[data-v-12fe36e0],.shipping__address p[data-v-12fe36e0]{margin:0}.shipping__client-name[data-v-12fe36e0]{font-size:var(--font-size--base);font-weight:500}.action-button[data-v-12fe36e0]{width:100%}@media (min-width:1024px){.action-button[data-v-12fe36e0]{width:auto}}@media (max-width:1023px){.tab-orphan[data-v-12fe36e0]  .sf-tabs__title{display:none}.tab-orphan[data-v-12fe36e0]  .sf-tabs__content{border:0;padding:0}}",""]),e.exports=d},492:function(e,t,n){"use strict";n.r(t);var d=n(4),r=n(666),o=n(12),c=n(11),l={name:"UserShippingAddress",props:{address:{default:{},type:Object}}},f=n(0),v=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shipping-addr",attrs:{address:e.address}},[n("section",[n("p",[n("strong",[e._v(e._s(e.address.name))])]),e._v(" "),n("p",[n("i",[e._v(e._s(e.address.company))])]),e._v(" "),n("p",[n("i",[e._v(e._s(e.address.formattedArea))])]),e._v(" "),n("p",[n("i",[e._v(e._s(e.address.phone))])]),e._v(" "),n("p",[n("i",[e._v(e._s(e.address.email))])])])])}),[],!1,null,null,null).exports,h={name:"ShippingAddressForm"},_=Object(f.a)(h,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("b",[e._v("Please implement vendor specific ShippingAddressForm component in 'components/MyAccount' directory")])}),[],!1,null,null,null).exports,m=n(8),A=n(1),y=n(10),S={name:"ShippingDetails",components:{SfTabs:r.a,SfButton:o.a,SfIcon:c.a,UserShippingAddress:v,ShippingAddressForm:_},setup(){var{shipping:e,load:t,addAddress:n,deleteAddress:r,updateAddress:o}=Object(m.q)(),c=Object(A.computed)((()=>m.u.getAddresses(e.value))),l=Object(A.ref)(!1),f=Object(A.ref)(void 0),v=Object(A.computed)((()=>!f.value)),h=function(){var e=Object(d.a)((function*(e){var{form:form,onComplete:t,onError:d}=e;try{var r=v.value?n:o,data=yield r({address:form});l.value=!1,f.value=void 0,yield t(data)}catch(e){d(e)}}));return function(t){return e.apply(this,arguments)}}();return Object(y.onSSR)(Object(d.a)((function*(){yield t()}))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;f.value=address,l.value=!0},updateAddress:o,removeAddress:address=>r({address:address}),saveAddress:h,userShippingGetters:m.u,addresses:c,edittingAddress:l,activeAddress:f,isNewAddress:v}}},x=(n(384),Object(f.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.edittingAddress?n("SfTabs",{key:"edit-address",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{"data-cy":"shipping-details-tab_change",title:e.isNewAddress?"Add the address":"Update the address"}},[n("p",{staticClass:"message"},[e._v("\n        "+e._s(e.$t("Contact details updated"))+"\n      ")]),e._v(" "),n("ShippingAddressForm",{attrs:{address:e.activeAddress,isNew:e.isNewAddress},on:{submit:e.saveAddress}})],1)],1):n("SfTabs",{key:"address-list",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{"data-cy":"shipping-details-tab_details",title:"Shipping details"}},[n("p",{staticClass:"message"},[e._v("\n        "+e._s(e.$t("Manage shipping addresses"))+"\n      ")]),e._v(" "),n("transition-group",{staticClass:"shipping-list",attrs:{tag:"div",name:"fade"}},e._l(e.addresses,(function(address){return n("div",{key:e.userShippingGetters.getId(address),staticClass:"shipping"},[n("div",{staticClass:"shipping__content"},[n("div",{staticClass:"shipping__address"},[n("UserShippingAddress",{attrs:{address:address}})],1)]),e._v(" "),n("div",{staticClass:"shipping__actions"},[n("SfIcon",{staticClass:"smartphone-only",attrs:{"data-cy":"shipping-details-icon_delete",icon:"cross",color:"gray",size:"14px",role:"button"},on:{click:function(t){return e.removeAddress(address)}}}),e._v(" "),n("SfButton",{attrs:{"data-cy":"shipping-details-btn_change"},on:{click:function(t){return e.changeAddress(address)}}},[e._v("\n              "+e._s(e.$t("Change"))+"\n            ")]),e._v(" "),n("SfButton",{staticClass:"color-light shipping__button-delete desktop-only",attrs:{"data-cy":"shipping-details-btn_delete"},on:{click:function(t){return e.removeAddress(address)}}},[e._v("\n              "+e._s(e.$t("Delete"))+"\n            ")])],1)])})),0),e._v(" "),n("SfButton",{staticClass:"action-button",attrs:{"data-cy":"shipping-details-btn_add"},on:{click:function(t){return e.changeAddress()}}},[e._v("\n        "+e._s(e.$t("Add new address"))+"\n      ")])],1)],1)],1)}),[],!1,null,"12fe36e0",null));t.default=x.exports}}]);