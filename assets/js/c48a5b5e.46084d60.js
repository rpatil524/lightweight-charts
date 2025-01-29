"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19533"],{20255:function(e,i,c){c.r(i),c.d(i,{default:()=>d,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>n});var t=JSON.parse('{"id":"price-scale","title":"Price scale","description":"The price scale (or price axis) is a vertical scale that maps prices to coordinates and vice versa.","source":"@site/docs/price-scale.md","sourceDirName":".","slug":"/price-scale","permalink":"/lightweight-charts/docs/next/price-scale","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Chart types","permalink":"/lightweight-charts/docs/next/chart-types"},"next":{"title":"Time scale","permalink":"/lightweight-charts/docs/next/time-scale"}}'),r=c("85893"),s=c("50065");let a={sidebar_position:3},n="Price scale",l={},o=[{value:"Create price scale",id:"create-price-scale",level:2},{value:"Modify price scale",id:"modify-price-scale",level:2},{value:"Remove price scale",id:"remove-price-scale",level:2}];function h(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"price-scale",children:"Price scale"})}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.strong,{children:"price scale"})," (or price axis) is a vertical scale that maps prices to coordinates and vice versa.\nThe conversion rules depend on the price scale mode, the chart's height, and the visible part of the data."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Price scales",src:c(71826).Z+"",title:"Price scales",width:"687",height:"387"})}),"\n",(0,r.jsx)(i.h2,{id:"create-price-scale",children:"Create price scale"}),"\n",(0,r.jsx)(i.p,{children:"By default, a chart has two visible price scales: left and right.\nAdditionally, you can create an unlimited number of overlay price scales, which remain hidden in the UI.\nOverlay price scales allow series to be plotted without affecting the existing visible scales.\nThis is particularly useful for indicators like Volume, where values can differ significantly from price data."}),"\n",(0,r.jsxs)(i.p,{children:["To create an overlay price scale, assign ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon#pricescaleid",children:(0,r.jsx)(i.code,{children:"priceScaleId"})})," to a series.\nNote that the ",(0,r.jsx)(i.code,{children:"priceScaleId"})," value should differ from price scale IDs on the left and right.\nThe chart will create an overlay price scale with the provided ID."]}),"\n",(0,r.jsxs)(i.p,{children:["If a price scale with such ID already exists, a series will be attached to the existing price scale.\nFurther, you can use the provided price scale ID to retrieve its API object using the ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#pricescale",children:(0,r.jsx)(i.code,{children:"IChartApi.priceScale"})})," method."]}),"\n",(0,r.jsxs)(i.p,{children:["See the ",(0,r.jsx)(i.a,{href:"/tutorials/how_to/price-and-volume",children:"Price and Volume"})," article for an example of adding a Volume indicator using an overlay price scale."]}),"\n",(0,r.jsx)(i.h2,{id:"modify-price-scale",children:"Modify price scale"}),"\n",(0,r.jsxs)(i.p,{children:["To modify the left price scale, use the ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#leftpricescale",children:(0,r.jsx)(i.code,{children:"leftPriceScale"})})," option.\nFor the right price scale, use ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#rightpricescale",children:(0,r.jsx)(i.code,{children:"rightPriceScale"})}),".\nTo change the default settings for an overlay price scale, use the ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#overlaypricescales",children:(0,r.jsx)(i.code,{children:"overlayPriceScales"})})," option."]}),"\n",(0,r.jsxs)(i.p,{children:["You can use the ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#pricescale",children:(0,r.jsx)(i.code,{children:"IChartApi.priceScale"})})," method to retrieve the API object for any price scale.\nSimilarly, to access the API object for the price scale that a series is attached to, use the ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi#pricescale",children:(0,r.jsx)(i.code,{children:"ISeriesApi.priceScale"})})," method."]}),"\n",(0,r.jsx)(i.h2,{id:"remove-price-scale",children:"Remove price scale"}),"\n",(0,r.jsxs)(i.p,{children:["The default left and right price scales cannot be removed, you can only hide them by setting the ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/PriceScaleOptions#visible",children:(0,r.jsx)(i.code,{children:"visible"})})," option to ",(0,r.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"An overlay price scale exists as long as at least one series is attached to it.\nTo remove an overlay price scale, remove all series attached to this price scale."})]})}function d(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},71826:function(e,i,c){c.d(i,{Z:function(){return t}});let t=c.p+"assets/images/price-scales-5ff372fd08578f74710940c724ad5df4.png"},50065:function(e,i,c){c.d(i,{Z:function(){return n},a:function(){return a}});var t=c(67294);let r={},s=t.createContext(r);function a(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);