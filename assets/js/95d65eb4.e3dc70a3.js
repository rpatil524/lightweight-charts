"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,k=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"TouchMouseEventData",title:"Interface: TouchMouseEventData",sidebar_label:"TouchMouseEventData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"api/interfaces/TouchMouseEventData",id:"version-4.1/api/interfaces/TouchMouseEventData",title:"Interface: TouchMouseEventData",description:"The TouchMouseEventData interface represents events that occur due to the user interacting with a",source:"@site/versioned_docs/version-4.1/api/interfaces/TouchMouseEventData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TouchMouseEventData",permalink:"/lightweight-charts/docs/api/interfaces/TouchMouseEventData",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"TouchMouseEventData",title:"Interface: TouchMouseEventData",sidebar_label:"TouchMouseEventData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Properties",id:"properties",level:2},{value:"clientX",id:"clientx",level:3},{value:"clientY",id:"clienty",level:3},{value:"pageX",id:"pagex",level:3},{value:"pageY",id:"pagey",level:3},{value:"screenX",id:"screenx",level:3},{value:"screenY",id:"screeny",level:3},{value:"localX",id:"localx",level:3},{value:"localY",id:"localy",level:3},{value:"ctrlKey",id:"ctrlkey",level:3},{value:"altKey",id:"altkey",level:3},{value:"shiftKey",id:"shiftkey",level:3},{value:"metaKey",id:"metakey",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The TouchMouseEventData interface represents events that occur due to the user interacting with a\npointing device (such as a mouse).\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent"},"MouseEvent")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"clientx"},"clientX"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"clientX"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#coordinate"},(0,r.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.kt)("p",null,"The X coordinate of the mouse pointer in local (DOM content) coordinates."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clienty"},"clientY"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"clientY"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#coordinate"},(0,r.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.kt)("p",null,"The Y coordinate of the mouse pointer in local (DOM content) coordinates."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pagex"},"pageX"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"pageX"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#coordinate"},(0,r.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.kt)("p",null,"The X coordinate of the mouse pointer relative to the whole document."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pagey"},"pageY"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"pageY"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#coordinate"},(0,r.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.kt)("p",null,"The Y coordinate of the mouse pointer relative to the whole document."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"screenx"},"screenX"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"screenX"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#coordinate"},(0,r.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.kt)("p",null,"The X coordinate of the mouse pointer in global (screen) coordinates."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"screeny"},"screenY"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"screenY"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#coordinate"},(0,r.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.kt)("p",null,"The Y coordinate of the mouse pointer in global (screen) coordinates."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"localx"},"localX"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"localX"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#coordinate"},(0,r.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.kt)("p",null,"The X coordinate of the mouse pointer relative to the chart / price axis / time axis canvas element."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"localy"},"localY"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"localY"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#coordinate"},(0,r.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.kt)("p",null,"The Y coordinate of the mouse pointer relative to the chart / price axis / time axis canvas element."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ctrlkey"},"ctrlKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"ctrlKey"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Returns a boolean value that is true if the Ctrl key was active when the key event was generated."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"altkey"},"altKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"altKey"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Returns a boolean value that is true if the Alt (Option or \u2325 on macOS) key was active when the\nkey event was generated."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"shiftkey"},"shiftKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"shiftKey"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Returns a boolean value that is true if the Shift key was active when the key event was generated."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"metakey"},"metaKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"metaKey"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Returns a boolean value that is true if the Meta key (on Mac keyboards, the \u2318 Command key; on\nWindows keyboards, the Windows key (\u229e)) was active when the key event was generated."))}d.isMDXComponent=!0}}]);