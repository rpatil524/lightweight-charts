"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1640],{95788:(e,n,r)=>{r.d(n,{Iu:()=>s,yg:()=>d});var l=r(11504);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,l,o=function(e,n){if(null==e)return{};var r,l,o={},t=Object.keys(e);for(l=0;l<t.length;l++)r=t[l],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)r=t[l],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=l.createContext({}),g=function(e){var n=l.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=g(e.components);return l.createElement(p.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var r=e.components,o=e.mdxType,t=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),y=g(r),c=o,d=y["".concat(p,".").concat(c)]||y[c]||u[c]||t;return r?l.createElement(d,i(i({ref:n},s),{},{components:r})):l.createElement(d,i({ref:n},s))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=r.length,i=new Array(t);i[0]=c;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[y]="string"==typeof e?e:o,i[1]=a;for(var g=2;g<t;g++)i[g]=r[g];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},38768:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>g});var l=r(45072),o=(r(11504),r(95788));const t={id:"CandlestickStyleOptions",title:"Interface: CandlestickStyleOptions",sidebar_label:"CandlestickStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,a={unversionedId:"api/interfaces/CandlestickStyleOptions",id:"version-3.8/api/interfaces/CandlestickStyleOptions",title:"Interface: CandlestickStyleOptions",description:"Represents style options for a candlestick series.",source:"@site/versioned_docs/version-3.8/api/interfaces/CandlestickStyleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CandlestickStyleOptions",permalink:"/lightweight-charts/docs/3.8/api/interfaces/CandlestickStyleOptions",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"CandlestickStyleOptions",title:"Interface: CandlestickStyleOptions",sidebar_label:"CandlestickStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},g=[{value:"Properties",id:"properties",level:2},{value:"upColor",id:"upcolor",level:3},{value:"downColor",id:"downcolor",level:3},{value:"wickVisible",id:"wickvisible",level:3},{value:"borderVisible",id:"bordervisible",level:3},{value:"borderColor",id:"bordercolor",level:3},{value:"borderUpColor",id:"borderupcolor",level:3},{value:"borderDownColor",id:"borderdowncolor",level:3},{value:"wickColor",id:"wickcolor",level:3},{value:"wickUpColor",id:"wickupcolor",level:3},{value:"wickDownColor",id:"wickdowncolor",level:3}],s={toc:g},y="wrapper";function u(e){let{components:n,...r}=e;return(0,o.yg)(y,(0,l.c)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Represents style options for a candlestick series."),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"upcolor"},"upColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"upColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Color of rising candles."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#26a69a'")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"downcolor"},"downColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"downColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Color of falling candles."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#ef5350'")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"wickvisible"},"wickVisible"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"wickVisible"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"Enable high and low prices candle wicks."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"true")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"bordervisible"},"borderVisible"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"borderVisible"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"Enable candle borders."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"true")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"bordercolor"},"borderColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"borderColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Border color."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#378658'")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"borderupcolor"},"borderUpColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"borderUpColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Border color of rising candles."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#26a69a'")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"borderdowncolor"},"borderDownColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"borderDownColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Border color of falling candles."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#ef5350'")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"wickcolor"},"wickColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"wickColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Wick color."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#737375'")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"wickupcolor"},"wickUpColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"wickUpColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Wick color of rising candles."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#26a69a'")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"wickdowncolor"},"wickDownColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"wickDownColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Wick color of falling candles."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#ef5350'")))}u.isMDXComponent=!0}}]);