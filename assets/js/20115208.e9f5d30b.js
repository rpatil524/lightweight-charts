"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=s(r),m=a,d=k["".concat(o,".").concat(m)]||k[m]||c[m]||i;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"SeriesMarker",title:"Interface: SeriesMarker<TimeType>",sidebar_label:"SeriesMarker",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,p={unversionedId:"api/interfaces/SeriesMarker",id:"version-3.8/api/interfaces/SeriesMarker",title:"Interface: SeriesMarker<TimeType>",description:"Represents a series marker.",source:"@site/versioned_docs/version-3.8/api/interfaces/SeriesMarker.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesMarker",permalink:"/lightweight-charts/docs/3.8/api/interfaces/SeriesMarker",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"SeriesMarker",title:"Interface: SeriesMarker<TimeType>",sidebar_label:"SeriesMarker",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"time",id:"time",level:3},{value:"position",id:"position",level:3},{value:"shape",id:"shape",level:3},{value:"color",id:"color",level:3},{value:"id",id:"id",level:3},{value:"text",id:"text",level:3},{value:"size",id:"size",level:3}],u={toc:s},k="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents a series marker."),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"TimeType"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"time"},"time"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"time"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"TimeType")),(0,a.kt)("p",null,"The time of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"position"},"position"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"position"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#seriesmarkerposition"},(0,a.kt)("inlineCode",{parentName:"a"},"SeriesMarkerPosition"))),(0,a.kt)("p",null,"The position of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"shape"},"shape"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"shape"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#seriesmarkershape"},(0,a.kt)("inlineCode",{parentName:"a"},"SeriesMarkerShape"))),(0,a.kt)("p",null,"The shape of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"color"},"color"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"color"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The color of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The ID of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"text"},"text"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"text"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The optional text of the marker."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"size"},"size"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"size"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The optional size of the marker."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"1")))}c.isMDXComponent=!0}}]);