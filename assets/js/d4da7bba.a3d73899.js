"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7444],{95788:(e,r,t)=>{t.d(r,{Iu:()=>c,yg:()=>h});var n=t(11504);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,h=u["".concat(l,".").concat(d)]||u[d]||g[d]||o;return t?n.createElement(h,a(a({ref:r},c),{},{components:t})):n.createElement(h,a({ref:r},c))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18452:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(45072),i=(t(11504),t(95788));const o={id:"CrosshairOptions",title:"Interface: CrosshairOptions",sidebar_label:"CrosshairOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,s={unversionedId:"api/interfaces/CrosshairOptions",id:"version-4.0/api/interfaces/CrosshairOptions",title:"Interface: CrosshairOptions",description:"Structure describing crosshair options",source:"@site/versioned_docs/version-4.0/api/interfaces/CrosshairOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CrosshairOptions",permalink:"/lightweight-charts/docs/4.0/api/interfaces/CrosshairOptions",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"CrosshairOptions",title:"Interface: CrosshairOptions",sidebar_label:"CrosshairOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},l={},p=[{value:"Properties",id:"properties",level:2},{value:"mode",id:"mode",level:3},{value:"vertLine",id:"vertline",level:3},{value:"horzLine",id:"horzline",level:3}],c={toc:p},u="wrapper";function g(e){let{components:r,...t}=e;return(0,i.yg)(u,(0,n.c)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Structure describing crosshair options"),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"mode"},"mode"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"mode"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/enums/CrosshairMode"},(0,i.yg)("inlineCode",{parentName:"a"},"CrosshairMode"))),(0,i.yg)("p",null,"Crosshair mode"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/enums/CrosshairMode#magnet"},"Magnet")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"vertline"},"vertLine"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"vertLine"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/CrosshairLineOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"CrosshairLineOptions"))),(0,i.yg)("p",null,"Vertical line options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"horzline"},"horzLine"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"horzLine"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/CrosshairLineOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"CrosshairLineOptions"))),(0,i.yg)("p",null,"Horizontal line options."))}g.isMDXComponent=!0}}]);