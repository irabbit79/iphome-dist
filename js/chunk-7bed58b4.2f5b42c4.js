(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bed58b4"],{2377:function(e,a,t){},"5b7e":function(e,a,t){"use strict";t("2377")},f593:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"c-app"},[t("TheSidebar"),t("CWrapper",[t("TheHeader"),t("div",{staticClass:"c-body"},[t("main",{staticClass:"c-main"},[t("CContainer",{attrs:{fluid:""}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view",{key:e.$route.path})],1)],1)],1)]),t("TheFooter")],1)],1)},o=[],n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("CSidebar",{attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(a){return e.$store.commit("set",["sidebarShow",a])}}},[t("CSidebarBrand",{staticClass:"d-md-down-none",attrs:{to:"/"}},[t("CIcon",{staticClass:"c-sidebar-brand-full",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 556 134"}}),t("CIcon",{staticClass:"c-sidebar-brand-minimized",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 110 134"}})],1),t("CRenderFunction",{attrs:{flat:"","content-to-render":e.$options.nav}}),t("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(a){return e.$store.commit("set",["sidebarMinimize",!e.minimize])}}})],1)},r=[],i=[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:"cil-speedometer",badge:{color:"primary",text:"NEW"}},{_name:"CSidebarNavTitle",_children:["Theme"]},{_name:"CSidebarNavItem",name:"Colors",to:"/theme/colors",icon:"cil-drop"},{_name:"CSidebarNavItem",name:"Typography",to:"/theme/typography",icon:"cil-pencil"},{_name:"CSidebarNavTitle",_children:["Components"]},{_name:"CSidebarNavDropdown",name:"Base",route:"/base",icon:"cil-puzzle",items:[{name:"Breadcrumbs",to:"/base/breadcrumbs"},{name:"Cards",to:"/base/cards"},{name:"Carousels",to:"/base/carousels"},{name:"Collapses",to:"/base/collapses"},{name:"Forms",to:"/base/forms"},{name:"Jumbotrons",to:"/base/jumbotrons"},{name:"List Groups",to:"/base/list-groups"},{name:"Navs",to:"/base/navs"},{name:"Navbars",to:"/base/navbars"},{name:"Paginations",to:"/base/paginations"},{name:"Popovers",to:"/base/popovers"},{name:"Progress Bars",to:"/base/progress-bars"},{name:"Switches",to:"/base/switches"},{name:"Tables",to:"/base/tables"},{name:"Tabs",to:"/base/tabs"},{name:"Tooltips",to:"/base/tooltips"}]},{_name:"CSidebarNavDropdown",name:"Buttons",route:"/buttons",icon:"cil-cursor",items:[{name:"Buttons",to:"/buttons/standard-buttons"},{name:"Button Dropdowns",to:"/buttons/dropdowns"},{name:"Button Groups",to:"/buttons/button-groups"},{name:"Brand Buttons",to:"/buttons/brand-buttons"}]},{_name:"CSidebarNavItem",name:"Charts",to:"/charts",icon:"cil-chart-pie"},{_name:"CSidebarNavDropdown",name:"Icons",route:"/icons",icon:"cil-star",items:[{name:"CoreUI Icons",to:"/icons/coreui-icons",badge:{color:"info",text:"NEW"}},{name:"Brands",to:"/icons/brands"},{name:"Flags",to:"/icons/flags"}]},{_name:"CSidebarNavDropdown",name:"Notifications",route:"/notifications",icon:"cil-bell",items:[{name:"Alerts",to:"/notifications/alerts"},{name:"Badges",to:"/notifications/badges"},{name:"Modals",to:"/notifications/modals"}]},{_name:"CSidebarNavItem",name:"Widgets",to:"/widgets",icon:"cil-calculator",badge:{color:"primary",text:"NEW",shape:"pill"}},{_name:"CSidebarNavDivider",_class:"m-2"},{_name:"CSidebarNavTitle",_children:["Extras"]},{_name:"CSidebarNavDropdown",name:"Pages",route:"/pages",icon:"cil-star",items:[{name:"Login",to:"/pages/login"},{name:"Register",to:"/pages/register"},{name:"Error 404",to:"/pages/404"},{name:"Error 500",to:"/pages/500"}]},{_name:"CSidebarNavItem",name:"Download CoreUI",href:"http://coreui.io/vue/",icon:{name:"cil-cloud-download",class:"text-white"},_class:"bg-success text-white",target:"_blank"},{_name:"CSidebarNavItem",name:"Try CoreUI PRO",href:"http://coreui.io/pro/vue/",icon:{name:"cil-layers",class:"text-white"},_class:"bg-danger text-white",target:"_blank"}]}],m={name:"TheSidebar",nav:i,computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}}},c=m,l=t("2877"),d=Object(l["a"])(c,n,r,!1,null,null,null),b=d.exports,u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[t("CToggler",{staticClass:"ml-3 d-lg-none",attrs:{"in-header":""},on:{click:function(a){return e.$store.commit("toggleSidebarMobile")}}}),t("CToggler",{staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""},on:{click:function(a){return e.$store.commit("toggleSidebarDesktop")}}}),t("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{to:"/"}},[t("CIcon",{attrs:{name:"logo",height:"48",alt:"Logo"}})],1),t("CHeaderNav",{staticClass:"d-md-down-none mr-auto"},[t("CHeaderNavItem",{staticClass:"px-3"},[t("CHeaderNavLink",{attrs:{to:"/dashboard"}},[e._v(" Home ")])],1),t("CHeaderNavItem",{staticClass:"px-3"},[t("CHeaderNavLink",{attrs:{to:"/users",exact:""}},[e._v(" Users ")])],1),t("CHeaderNavItem",{staticClass:"px-3"},[t("CHeaderNavLink",{attrs:{to:"/Groups"}},[e._v(" Groups ")])],1),t("CHeaderNavItem",{staticClass:"px-3"},[t("CHeaderNavLink",{attrs:{to:"/interfaces"}},[e._v(" Network Interfaces ")])],1)],1),t("CHeaderNav",{staticClass:"mr-4"})],1)},p=[],C={name:"TheHeader"},h=C,v=Object(l["a"])(h,u,p,!1,null,null,null),g=v.exports,_=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("CFooter",{attrs:{fixed:!1}},[t("div",[t("a",{attrs:{href:"https://iphome.org",target:"_blank"}},[e._v("IPHome")]),t("span",{staticClass:"ml-1"},[e._v("© "+e._s((new Date).getFullYear())+" securityLabs.")])])])},f=[],w={name:"TheFooter"},N=w,S=Object(l["a"])(N,_,f,!1,null,null,null),x=S.exports,I={name:"TheContainer",components:{TheSidebar:b,TheHeader:g,TheFooter:x}},T=I,H=(t("5b7e"),Object(l["a"])(T,s,o,!1,null,"3b21ac01",null));a["default"]=H.exports}}]);
//# sourceMappingURL=chunk-7bed58b4.2f5b42c4.js.map