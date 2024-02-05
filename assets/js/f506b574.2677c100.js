"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1443],{95788:(e,a,t)=>{t.d(a,{Iu:()=>s,yg:()=>f});var r=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),c=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=c(e.components);return r.createElement(p.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(t),y=n,f=u["".concat(p,".").concat(y)]||u[y]||g[y]||i;return t?r.createElement(f,l(l({ref:a},s),{},{components:t})):r.createElement(f,l({ref:a},s))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=y;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},91528:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(45072),n=(t(11504),t(95788));const i={id:"SingleValueData",title:"Interface: SingleValueData",sidebar_label:"SingleValueData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/SingleValueData",id:"version-4.0/api/interfaces/SingleValueData",title:"Interface: SingleValueData",description:"A base interface for a data point of single-value series.",source:"@site/versioned_docs/version-4.0/api/interfaces/SingleValueData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SingleValueData",permalink:"/lightweight-charts/docs/4.0/api/interfaces/SingleValueData",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"SingleValueData",title:"Interface: SingleValueData",sidebar_label:"SingleValueData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"time",id:"time",level:3},{value:"value",id:"value",level:3}],s={toc:c},u="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.c)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"A base interface for a data point of single-value series."),(0,n.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"SingleValueData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3 ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/AreaData"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3 ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/BaselineData"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3 ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/HistogramData"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3 ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/LineData"},(0,n.yg)("inlineCode",{parentName:"a"},"LineData"))))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"time"},"time"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"time"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#time"},(0,n.yg)("inlineCode",{parentName:"a"},"Time"))),(0,n.yg)("p",null,"The time of the data."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"value"},"value"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"value"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"Price value of the data."))}g.isMDXComponent=!0}}]);