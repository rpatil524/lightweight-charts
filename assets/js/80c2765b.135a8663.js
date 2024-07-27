"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28278,18401],{19490:(e,t,n)=>{n.d(t,{Ay:()=>s});var r=n(58168),a=(n(96540),n(15680));const i={toc:[]},o="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(o,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("details",null,(0,a.yg)("summary",null,"How to use the code sample"),(0,a.yg)("strong",null,"The code presented below requires:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"That ",(0,a.yg)("inlineCode",{parentName:"li"},"createChart")," has already been imported. See ",(0,a.yg)("a",{parentName:"li",href:"/docs#creating-a-chart"},"Getting Started")," for more information,"),(0,a.yg)("li",{parentName:"ul"},"and that there is an html div element on the page with an ",(0,a.yg)("inlineCode",{parentName:"li"},"id")," of ",(0,a.yg)("inlineCode",{parentName:"li"},"container"),".")),(0,a.yg)("p",null,"Here is an example skeleton setup: ",(0,a.yg)("a",{parentName:"p",href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6"},"Code Sandbox"),".\nYou can paste the provided code below the ",(0,a.yg)("inlineCode",{parentName:"p"},"// REPLACE EVERYTHING BELOW HERE")," comment."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."))))}s.isMDXComponent=!0},16159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),i=n(19490),o=n(5546);const s="// remove-start\n// Lightweight Charts\u2122 Example: Compare multiple series\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/compare-multiple-series\n\n// remove-end\n// hide-start\nlet randomFactor = 25 + Math.random() * 25;\nconst samplePoint = i =>\n\ti *\n\t\t(0.5 +\n\t\t\tMath.sin(i / 10) * 0.2 +\n\t\t\tMath.sin(i / 20) * 0.4 +\n\t\t\tMath.sin(i / randomFactor) * 0.8 +\n\t\t\tMath.sin(i / 500) * 0.5) +\n\t200;\n\nfunction generateLineData(numberOfPoints = 500) {\n\trandomFactor = 25 + Math.random() * 25;\n\tconst res = [];\n\tconst date = new Date(Date.UTC(2018, 0, 1, 12, 0, 0, 0));\n\tfor (let i = 0; i < numberOfPoints; ++i) {\n\t\tconst time = (date.getTime() / 1000);\n\t\tconst value = samplePoint(i);\n\t\tres.push({\n\t\t\ttime,\n\t\t\tvalue,\n\t\t});\n\n\t\tdate.setUTCDate(date.getUTCDate() + 1);\n\t}\n\n\treturn res;\n}\n// hide-end\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\nconst lineSeriesOne = chart.addLineSeries({ color: LINE_LINE_COLOR });\nconst lineSeriesTwo = chart.addLineSeries({ color: LINE_LINE2_COLOR });\nconst lineSeriesThree = chart.addLineSeries({ color: LINE_LINE3_COLOR });\n\nconst lineSeriesOneData = generateLineData();\nconst lineSeriesTwoData = generateLineData();\nconst lineSeriesThreeData = generateLineData();\n\nlineSeriesOne.setData(lineSeriesOneData);\nlineSeriesTwo.setData(lineSeriesTwoData);\nlineSeriesThree.setData(lineSeriesThreeData);\n\nchart.timeScale().fitContent();\n",l={title:"Compare multiple series",sidebar_label:"Compare multiple series",description:"An example of how to compare multiple series on a single price scale",pagination_prev:null,pagination_next:null,keywords:["compare","series"]},c=void 0,d={unversionedId:"demos/compare-multiple-series",id:"demos/compare-multiple-series",title:"Compare multiple series",description:"An example of how to compare multiple series on a single price scale",source:"@site/tutorials/demos/compare-multiple-series.mdx",sourceDirName:"demos",slug:"/demos/compare-multiple-series",permalink:"/lightweight-charts/tutorials/demos/compare-multiple-series",draft:!1,tags:[],version:"current",frontMatter:{title:"Compare multiple series",sidebar_label:"Compare multiple series",description:"An example of how to compare multiple series on a single price scale",pagination_prev:null,pagination_next:null,keywords:["compare","series"]},sidebar:"tutorialsSidebar"},m={},p=[],h={toc:p},O="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(O,(0,r.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This Multi-Series Comparison Example illustrates how an assortment of data\nseries can be integrated into a single chart for comparisons. Simply use the\ncharting API to create multiple series (such as ",(0,a.yg)("inlineCode",{parentName:"p"},"addLineSeries"),")."),(0,a.yg)("p",null,"If you would like an unique price scales for each individual series,\nparticularly when dealing with data series with divergent value ranges, then\ntake a look at the ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/tutorials/how_to/two-price-scales"},"Two Price Scales Example"),"."),(0,a.yg)(o.Ay,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,chartOnTop:!0,codeUsage:(0,a.yg)(i.Ay,{mdxType:"UsageGuidePartial"}),mdxType:"CodeBlock"},s))}u.isMDXComponent=!0},5546:(e,t,n)=>{n.d(t,{Ay:()=>g});var r=n(96540),a=n(77964),i=n(78478),o=n(95293),s=n(55597),l=n(6715);function c(e,t,n){e.addEventListener("resize",(()=>{const e=t.getBoundingClientRect();n(e.width,e.height)}),!0)}const d={3.8:async e=>{const t=await n.e(73409).then(n.bind(n,73409));return{module:t,createChart:(n,r)=>{const a=t.createChart(n,r);return c(e,n,a.resize.bind(a)),a},createChartEx:void 0}},"4.0":async e=>{const t=await n.e(37476).then(n.bind(n,37476));return{module:t,createChart:(n,r)=>{const a=t.createChart(n,r);return c(e,n,a.resize.bind(a)),a},createChartEx:void 0}},4.1:async e=>{const t=await n.e(59631).then(n.bind(n,59631));return{module:t,createChart:(n,r)=>{const a=t.createChart(n,r);return c(e,n,a.resize.bind(a)),a},createChartEx:(n,r,a)=>{const i=t.createChartEx(n,r,a);return c(e,n,i.resize.bind(i)),i}}},4.2:async e=>{const t=await n.e(90142).then(n.bind(n,90142));return{module:t,createChart:(n,r)=>{const a=t.createChart(n,r);return c(e,n,a.resize.bind(a)),a},createChartEx:(n,r,a)=>{const i=t.createChartEx(n,r,a);return c(e,n,i.resize.bind(i)),i}}},current:async()=>{const e=await n.e(47839).then(n.bind(n,47839));return{module:e,createChart:(t,n)=>{const r=e.createChart(t,n);return c(window,t,r.resize.bind(r)),r},createChartEx:(t,n,r)=>{const a=e.createChartEx(t,n,r);return c(window,t,a.resize.bind(a)),a}}}},m="iframe_R_Fr";function p(e){const{script:t,iframeStyle:n}=e,{preferredVersion:a}=(0,s.g1)(),i=l&&l.length>0?l[0]:"",o=a?.name??i??"current",c=function(e){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${e}\n\t\t\t};\n\t\t<\/script>\n\t`}(t),p=r.useRef(null);return r.useEffect((()=>{const e=p.current,t=e?.contentWindow,n=e?.contentDocument;if(null===e||!t||!n)return;const r=async()=>{try{const{module:e,createChart:n,createChartEx:r}=await d[o](t);Object.assign(t,e),t.createChart=n,t.createChartEx=r,t.run?.()}catch(e){console.error(e)}};if(void 0!==t.run)r();else{const t=()=>{r(),e.removeEventListener("load",t)};e.addEventListener("load",t)}}),[c]),r.createElement("iframe",{key:t,ref:p,srcDoc:c,className:m,style:n})}var h=n(82840);const O=()=>`${Math.random().toString(36).slice(2,11)}`;function u(e){return"string"==typeof e?e:function(){const[e,t]=(0,r.useState)("");return(0,r.useEffect)((()=>t(O())),[]),e}()}const L=Object.keys(h.k.DARK);const g=e=>{const{chart:t,replaceThemeConstants:n,hideableCode:s,chartOnly:l,chartOnTop:c=!1,iframeStyle:d,replaceTabs:O=!0,codeUsage:g,...C}=e;let{children:_}=e;const{colorMode:E}=(0,o.G)(),R="dark"===E,b=u();if(n&&"string"==typeof _&&(_=function(e,t){const n=t?h.k.DARK:h.k.LIGHT;let r=e;for(const a of L)r=r.replace(new RegExp(a,"g"),`'${n[a]}'`);return r}(_,R)),O&&"string"==typeof _&&(_=_.replace(/\t/g,"    ")),_=_.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),t||s){const e=!l&&r.createElement(a.A,C,_),n=t&&r.createElement(i.A,{fallback:r.createElement("div",{className:m},"\xa0")},(()=>r.createElement(p,{script:_,iframeStyle:d}))),o=s&&r.createElement(r.Fragment,null,r.createElement("input",{id:b,type:"checkbox",className:"toggle-hidden-lines"}),r.createElement("label",{className:"toggle-label",htmlFor:b},"Show all code"));return c?r.createElement(r.Fragment,null,n,g,o,e):r.createElement(r.Fragment,null,g,o,e,n)}return r.createElement(a.A,C,_)}},82840:(e,t,n)=>{n.d(t,{k:()=>r});const r={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6715:e=>{e.exports=JSON.parse('["4.2","4.1","4.0","3.8"]')}}]);