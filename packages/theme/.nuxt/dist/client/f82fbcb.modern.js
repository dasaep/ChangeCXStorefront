(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{302:function(t,e,r){var content=r(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("7532bb99",content,!0,{sourceMap:!1})},303:function(t,e,r){var content=r(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("637d86f6",content,!0,{sourceMap:!1})},315:function(t,e,r){"use strict";r(302)},316:function(t,e,r){var n=r(5)(!1);n.push([t.i,'.sf-breadcrumbs__list{display:flex;flex-wrap:wrap;padding:0;margin:0;list-style:none}.sf-breadcrumbs__list-item:not(:last-child):after{padding:var(--breadcrumbs-list-item-before-padding,0 var(--spacer-sm));content:"|";content:var(--breadcrumbs-list-item-seperator,"|");color:var(--c-text-muted);color:var(--breadcrumbs-list-item-before-color,var(--c-text-muted))}.sf-breadcrumbs__breadcrumb{font:var(--font-weight--normal) var(--font-size--xs)/1.6 var(--font-family--secondary);font:var(--breadcrumbs-font,var(--breadcrumbs-font-weight,var(--font-weight--normal)) var(--breadcrumbs-font-size,var(--font-size--xs))/var(--breadcrumbs-font-line-height,1.6) var(--breadcrumbs-font-family,var(--font-family--secondary)));--link-color:var(--c-text-muted);--link-text-decoration:none}.sf-breadcrumbs__breadcrumb:hover{--link-color:var(--c-text)}.sf-breadcrumbs__breadcrumb.current{--link-color:var(--c-text);cursor:default}@media (min-width:1024px){.sf-breadcrumbs{--breadcrumbs-font-size:var(--font-size--sm)}}',""]),t.exports=n},317:function(t,e,r){"use strict";r(303)},318:function(t,e,r){var n=r(5)(!1);n.push([t.i,".sf-table{box-sizing:border-box;width:100%;width:var(--table-width,100%);border:none;border-spacing:0;border-spacing:var(--table-border-spacing,0)}.sf-table__heading,.sf-table__row{box-sizing:border-box;display:flex;flex-wrap:wrap}.sf-table__heading{align-items:center;padding:var(--table-heading-padding,var(--spacer-sm) 0);background-color:transparent;background-color:var(--table-heading-background,transparent);border:var(--table-border-heading,var(--table-border-heading-style,solid) var(--table-border-heading-color,var(--c-primary)));border-width:0 0 2px;border-width:var(--table-border-heading-width,0 0 2px 0)}.sf-table__header{font:var(--font-weight--normal) var(--font-size--base)/1.4 var(--font-family--secondary);font:var(--table-header-font,var(--table-header-font-weight,var(--font-weight--normal)) var(--table-header-font-size,var(--font-size--base))/var(--table-header-font-line-height,1.4) var(--table-header-font-family,var(--font-family--secondary)));color:var(--c-text);color:var(--table-header-color,var(--c-text))}.sf-table__row{padding:var(--table-row-padding,var(--spacer-xs) 0);background-color:var(--table-row-background);box-shadow:var(--table-row-box-shadow);border:var(--table-row-border,var(--table-row-border-style,solid) var(--table-row-border-color,var(--c-light)));border-width:0 0 2px;border-width:var(--table-row-border-width,0 0 2px 0)}.sf-table__data{color:var(--c-dark-variant);color:var(--table-data-color,var(--c-dark-variant));font:var(--font-weight--normal) var(--font-size--base)/1.6 var(--font-family--secondary);font:var(--table-data-font,var(--table-data-font-weight,var(--font-weight--normal)) var(--table-data-font-size,var(--font-size--base))/var(--table-data-font-line-height,1.6) var(--table-data-font-family,var(--font-family--secondary)))}.sf-table__data,.sf-table__header{box-sizing:border-box;flex:0 0 calc(100%/var(--_table-column-width));flex:var(--table-column-flex,0 0 calc(100%/var(--_table-column-width)));padding:0;padding:var(--table-column-padding,0);text-align:left;text-align:var(--table-column-text-align,left)}.sf-table__data:nth-child(2n),.sf-table__header:nth-child(2n){order:1;order:var(--_table-column-order,1)}.sf-table--no-border{--table-row-border-width:0}@media (min-width:1024px){.sf-table{--table-row-padding:var(--spacer-sm) var(--spacer-sm);--table-heading-padding:var(--spacer-sm) var(--spacer-sm);--table-heading-background:transparent;--table-column-flex:1;--_table-column-order:0;--table-header-font-weight:var(--font-weight--normal)}.sf-table--no-border{--table-row-border-width:0}.sf-table__row:hover{--table-row-box-shadow:0px 4px 11px rgba(29,31,34,0.1)}}",""]),t.exports=n},484:function(t,e,r){var content=r(645);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("a8acf25e",content,!0,{sourceMap:!1})},491:function(t,e,r){"use strict";var n=r(2),o={name:"SfTableRow",inject:["table"],mounted(){this.$slots.default&&this.table.updateColumnsCount(this.$slots.default.filter((t=>t.tag)).length)}},l=r(0),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tbody",[r("tr",{staticClass:"sf-table__row"},[t._t("default")],2)])}),[],!1,null,null,null).exports,d={name:"SfTableData"},f=Object(l.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("td",{staticClass:"sf-table__data"},[t._t("default")],2)}),[],!1,null,null,null).exports,v={name:"SfTableHeader"},m=Object(l.a)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("th",{staticClass:"sf-table__header"},[t._t("default")],2)}),[],!1,null,null,null).exports,h={name:"SfTableHeading",inject:["table"],mounted(){this.$slots.default&&this.table.updateColumnsCount(this.$slots.default.filter((t=>t.tag)).length)}},_=Object(l.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",{staticClass:"sf-table__heading"},[t._t("default")],2)])}),[],!1,null,null,null).exports;n.default.component("SfTableRow",c),n.default.component("SfTableData",f),n.default.component("SfTableHeader",m),n.default.component("SfTableHeading",_);var y={name:"SfTable",provide(){var table={};return Object.defineProperty(table,"updateColumnsCount",{value:this.updateColumnsCount}),{table:table}},methods:{updateColumnsCount(t){this.$el.style.setProperty("--_table-column-width",Math.ceil(t/2))}}},x=(r(317),Object(l.a)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("table",{staticClass:"sf-table"},[t._t("default")],2)}),[],!1,null,null,null));e.a=x.exports},500:function(t,e,r){"use strict";var n={name:"SfBreadcrumbs",components:{SfLink:r(20).a},props:{breadcrumbs:{type:Array,default:()=>[]}},computed:{last(){return this.breadcrumbs.length-1}}},o=(r(315),r(0)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"sf-breadcrumbs",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"sf-breadcrumbs__list"},t._l(t.breadcrumbs,(function(e,i){return r("li",{key:i,staticClass:"sf-breadcrumbs__list-item",attrs:{"aria-current":t.last===i&&"page"}},[t.last!==i?[t._t("link",[r("SfLink",{staticClass:"sf-breadcrumbs__breadcrumb",attrs:{link:e.link,"data-testid":e.text}},[t._v(t._s(e.text)+"\n          ")])],null,{breadcrumb:e})]:[t._t("current",[r("SfLink",{staticClass:"sf-breadcrumbs__breadcrumb current",attrs:{link:e.link}},[t._v(t._s(e.text))])],null,{breadcrumb:e})]],2)})),0)])}),[],!1,null,null,null);e.a=component.exports},644:function(t,e,r){"use strict";r(484)},645:function(t,e,r){var n=r(5)(!1);n.push([t.i,".sf-content-page{font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--content-pages-content-page-font,var(--content-pages-content-page-font-weight,var(--font-weight--light)) var(--content-pages-content-page-font-size,var(--font-size--base))/var(--content-pages-content-page-font-line-height,1.6) var(--content-pages-content-page-font-family,var(--font-family--primary)))}.sf-content-pages{display:flex;flex-direction:column;height:100vh;height:var(--content-pages-height,100vh);overflow:hidden}.sf-content-pages__section{display:flex;flex:1;margin:var(--content-pages-section-margin,var(--spacer-base) 0);transition:transform .15s ease-in-out;transition:var(--content-pages-transition,transform .15s ease-in-out)}.sf-content-pages__section.is-active{transform:translate3d(-100%,0,0);transform:var(--content-pages-section-active-transform,translate3d(-100%,0,0))}.sf-content-pages__content,.sf-content-pages__sidebar{box-sizing:border-box;overflow-y:auto;height:calc(100vh - 5rem)}.sf-content-pages__sidebar{flex:0 0 100%;flex:var(--content-pages-sidebar-flex,0 0 100%);padding:var(--content-pages-sidebar-padding);background:var(--content-pages-sidebar-background)}.sf-content-pages__content{flex:0 0 100%;flex:var(--content-pages-content-flex,0 0 100%);padding:var(--content-pages-content-padding)}.sf-content-pages__title{margin:var(--content-pages-sidebar-title-margin,0 0 var(--spacer-xl) 0);font:var(--font-weight--medium) var(--h3-font-size)/1.4 var(--font-family--secondary);font:var(--content-pages-sidebar-title-font,var(--content-pages-sidebar-title-font-weight,var(--font-weight--medium)) var(--content-pages-sidebar-title-font-size,var(--h3-font-size))/var(--content-pages-sidebar-title-font-line-height,1.4) var(--content-pages-sidebar-title-font-family,var(--font-family--secondary)))}.sf-content-pages__category-title{margin:var(--content-pages-sidebar-category-title-margin,var(--spacer-sm) 0);font:var(--font-weight--bold) var(--font-size--lg)/1.2 var(--font-family--secondary);font:var(--content-pages-sidebar-category-title-font,var(--content-pages-sidebar-category-title-font-weight,var(--font-weight--bold)) var(--content-pages-sidebar-category-title-font-size,var(--font-size--lg))/var(--content-pages-sidebar-category-title-font-line-height,1.2) var(--content-pages-sidebar-category-title-font-family,var(--font-family--secondary)))}.sf-content-pages__list-item{--list-item-padding:var(--spacer-sm) var(--spacer-sm) var(--spacer-sm);--list-item-border-width:0 0 1px 0}@media (min-width:1024px){.sf-content-pages{--content-pages-section-active-transform:translateZ(0);--content-pages-sidebar-flex:0 0 26.875rem;--content-pages-sidebar-background:var(--c-light);--content-pages-content-flex:1;--content-pages-section-margin:0;--content-pages-sidebar-padding:var(--spacer-lg);--content-pages-content-padding:var(--spacer-lg)}.sf-content-pages__list-item{--list-item-padding:0;--list-item-margin:var(--spacer-base) 0;--list-item-border:0}}",""]),t.exports=n},670:function(t,e,r){"use strict";r(9);var n=r(7),o=r(2),l={name:"SfContentPage",props:{title:{type:String,default:""},icon:{type:[String,Array],default:""}},inject:["provided"],computed:{isActive(){return this.provided.active===this.title}},mounted(){var t={title:this.title,icon:this.icon};this.$parent.items.push(t)}},c=r(0),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isActive?r("div",{staticClass:"sf-content-page"},[t._t("default")],2):t._e()}),[],!1,null,null,null).exports,f={name:"SfContentCategory",props:{title:{type:String,default:""}},data:()=>({items:[]}),mounted(){var t={title:this.title,items:this.items};this.$parent.items.push(t)},methods:{}},v=Object(c.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sf-content-category"},[t._t("default")],2)}),[],!1,null,null,null).exports,m=r(276),h=r(141),_=r(11),y=r(70),x=r(23);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}o.default.component("SfContentPage",d),o.default.component("SfContentCategory",v);var k={name:"SfContentPages",components:{SfList:m.a,SfMenuItem:h.a,SfIcon:_.a,SfBar:y.a},props:{title:{type:String,default:""},active:{type:String,default:""}},data:()=>({items:[]}),computed:C(C({},Object(x.a)()),{},{categories(){var t=[],e={items:[]},r=()=>{if(e.items.length>0){var r=C({},e);t.push(r),e.items=[]}};return this.items.forEach((n=>{if(n.items){r();var o=C({},n);t.push(o)}else e.items.push(n)})),r(),t},isActive(){return this.active.length>0}}),provide(){var t={};return Object.defineProperty(t,"active",{get:()=>this.active}),{provided:t}},watch:{isMobile(t){t?this.$emit("click:change",""):this.$emit("click:change",this.categories[0].items[0].title)}},beforeDestroy(){Object(x.b)()},methods:{updatePage(title){this.$emit("click:change",title)}}},S=(r(644),Object(c.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sf-content-pages"},[r("SfBar",{staticClass:"smartphone-only",attrs:{back:t.isActive,title:t.active?t.active:t.title},on:{"click:back":function(e){return t.updatePage()}}}),t._v(" "),r("section",{staticClass:"sf-content-pages__section",class:{"is-active":t.isActive}},[r("div",{staticClass:"sf-content-pages__sidebar"},[r("h1",{staticClass:"sf-content-pages__title desktop-only"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.categories,(function(e,n){return r("div",{key:e.title+"-"+n},[e.title?r("h2",{staticClass:"sf-content-pages__category-title"},[t._v("\n          "+t._s(e.title)+"\n        ")]):t._e(),t._v(" "),r("SfList",{staticClass:"sf-content-pages__list"},t._l(e.items,(function(e,n){return r("SfListItem",{key:e.title+"-"+n,staticClass:"sf-content-pages__list-item"},[t._t("menu-item",[r("SfMenuItem",{staticClass:"sf-content-pages__menu",class:{"is-active":e.title===t.active},attrs:{label:e.title},on:{click:function(r){return t.updatePage(e.title)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e.icon?r("SfIcon",{staticClass:"sf-menu-item__icon",attrs:{icon:e.icon,color:"#686d7d",size:"xxs"}}):t._e()]},proxy:!0}],null,!0)})],null,{updatePage:t.updatePage,page:e,active:t.active})],2)})),1)],1)}))],2),t._v(" "),r("div",{staticClass:"sf-content-pages__content"},[t._t("default")],2)])],1)}),[],!1,null,null,null));e.a=S.exports}}]);