"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61752"],{72069:function(e,t,a){a.r(t),a.d(t,{default:()=>m,frontMatter:()=>r,metadata:()=>n,assets:()=>l,toc:()=>p,contentTitle:()=>o});var n=JSON.parse('{"id":"api/type-aliases/UTCTimestamp","title":"Type alias: UTCTimestamp","description":"UTCTimestamp: Nominal\\\\","source":"@site/versioned_docs/version-4.1/api/type-aliases/UTCTimestamp.md","sourceDirName":"api/type-aliases","slug":"/api/type-aliases/UTCTimestamp","permalink":"/lightweight-charts/docs/4.1/api/type-aliases/UTCTimestamp","draft":false,"unlisted":false,"tags":[],"version":"4.1","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"typedocSidebar"}'),s=a("85893"),i=a("50065");let r={pagination_next:null,pagination_prev:null},o="Type alias: UTCTimestamp",l={},p=[{value:"Example",id:"example",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"type-alias-utctimestamp",children:"Type alias: UTCTimestamp"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"UTCTimestamp"}),": ",(0,s.jsx)(t.a,{href:"/lightweight-charts/docs/4.1/api/type-aliases/Nominal",children:(0,s.jsx)(t.code,{children:"Nominal"})}),"<",(0,s.jsx)(t.code,{children:"number"}),", ",(0,s.jsx)(t.code,{children:'"UTCTimestamp"'}),">"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Represents a time as a UNIX timestamp."}),"\n",(0,s.jsx)(t.p,{children:"If your chart displays an intraday interval you should use a UNIX Timestamp."}),"\n",(0,s.jsxs)(t.p,{children:["Note that JavaScript Date APIs like ",(0,s.jsx)(t.code,{children:"Date.now"})," return a number of milliseconds but UTCTimestamp expects a number of seconds."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that to prevent errors, you should cast the numeric type of the time to ",(0,s.jsx)(t.code,{children:"UTCTimestamp"})," type from the package (",(0,s.jsx)(t.code,{children:"value as UTCTimestamp"}),") in TypeScript code."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const timestamp = 1529899200 as UTCTimestamp; // Literal timestamp representing 2018-06-25T04:00:00.000Z\nconst timestamp2 = (Date.now() / 1000) as UTCTimestamp;\n"})})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return r}});var n=a(67294);let s={},i=n.createContext(s);function r(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);