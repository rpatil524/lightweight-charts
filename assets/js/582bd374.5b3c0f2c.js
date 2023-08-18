"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"LocalizationOptionsBase",title:"Interface: LocalizationOptionsBase",sidebar_label:"LocalizationOptionsBase",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/LocalizationOptionsBase",id:"api/interfaces/LocalizationOptionsBase",title:"Interface: LocalizationOptionsBase",description:"Represents basic localization options",source:"@site/docs/api/interfaces/LocalizationOptionsBase.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/LocalizationOptionsBase",permalink:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptionsBase",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"LocalizationOptionsBase",title:"Interface: LocalizationOptionsBase",sidebar_label:"LocalizationOptionsBase",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"locale",id:"locale",level:3},{value:"priceFormatter",id:"priceformatter",level:3},{value:"percentageFormatter",id:"percentageformatter",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents basic localization options"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"LocalizationOptionsBase"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"LocalizationOptions"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"locale"},"locale"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"locale"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Current locale used to format dates. Uses the browser's language settings by default."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"navigator.language")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"priceformatter"},"priceFormatter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"priceFormatter"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#priceformatterfn"},(0,r.kt)("inlineCode",{parentName:"a"},"PriceFormatterFn"))),(0,r.kt)("p",null,"Override formatting of the price scale tick marks, labels and crosshair labels. Can be used for cases that can't be covered with built-in price formats."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceFormatCustom"},"PriceFormatCustom")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"percentageformatter"},"percentageFormatter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"percentageFormatter"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#percentageformatterfn"},(0,r.kt)("inlineCode",{parentName:"a"},"PercentageFormatterFn"))),(0,r.kt)("p",null,"Override formatting of the percentage scale tick marks, labels and crosshair labels. Can be used for cases that can't be covered with built-in percentage format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")))}m.isMDXComponent=!0}}]);