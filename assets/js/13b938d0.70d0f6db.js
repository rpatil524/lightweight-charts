"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7161,8401],{19490:(e,t,n)=>{n.d(t,{Ay:()=>l});var i=n(58168),a=(n(96540),n(15680));const r={toc:[]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,a.yg)(o,(0,i.A)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("details",null,(0,a.yg)("summary",null,"How to use the code sample"),(0,a.yg)("strong",null,"The code presented below requires:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"That ",(0,a.yg)("inlineCode",{parentName:"li"},"createChart")," has already been imported. See ",(0,a.yg)("a",{parentName:"li",href:"/docs#creating-a-chart"},"Getting Started")," for more information,"),(0,a.yg)("li",{parentName:"ul"},"and that there is an html div element on the page with an ",(0,a.yg)("inlineCode",{parentName:"li"},"id")," of ",(0,a.yg)("inlineCode",{parentName:"li"},"container"),".")),(0,a.yg)("p",null,"Here is an example skeleton setup: ",(0,a.yg)("a",{parentName:"p",href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6"},"Code Sandbox"),".\nYou can paste the provided code below the ",(0,a.yg)("inlineCode",{parentName:"p"},"// REPLACE EVERYTHING BELOW HERE")," comment."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."))))}l.isMDXComponent=!0},18408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var i=n(58168),a=(n(96540),n(15680)),r=n(19490),o=n(5546);const l="// remove-start\n// Lightweight Charts\u2122 Example: Horizontal Price Scale\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/horizontal-price-scale\n\n// remove-end\nfunction markWithGreaterWeight(a, b) {\n\treturn a.weight > b.weight ? a : b;\n}\n\n// remove-line\n/** @type {import('lightweight-charts').IHorzScaleBehavior} */\nclass HorzScaleBehaviorPrice {\n\tconstructor() {\n\t\tthis._options = {};\n\t}\n\n\toptions() {\n\t\treturn this._options;\n\t}\n\n\tsetOptions(options) {\n\t\tthis._options = options;\n\t}\n\n\tpreprocessData(data) {}\n\n\tupdateFormatter(options) {\n\t\tif (!this._options) {\n\t\t\treturn;\n\t\t}\n\t\tthis._options.localization = options;\n\t}\n\n\tcreateConverterToInternalObj(data) {\n\t\treturn price => price;\n\t}\n\n\tkey(internalItem) {\n\t\treturn internalItem;\n\t}\n\n\tcacheKey(internalItem) {\n\t\treturn internalItem;\n\t}\n\n\tconvertHorzItemToInternal(item) {\n\t\treturn item;\n\t}\n\n\tformatHorzItem(item) {\n\t\treturn item.toFixed(this._precision());\n\t}\n\n\tformatTickmark(item, localizationOptions) {\n\t\treturn item.time.toFixed(this._precision());\n\t}\n\n\tmaxTickMarkWeight(marks) {\n\t\treturn marks.reduce(markWithGreaterWeight, marks[0]).weight;\n\t}\n\n\tfillWeightsForPoints(sortedTimePoints, startIndex) {\n\t\tconst priceWeight = price => {\n\t\t\tif (price === Math.ceil(price / 100) * 100) {\n\t\t\t\treturn 8;\n\t\t\t}\n\t\t\tif (price === Math.ceil(price / 50) * 50) {\n\t\t\t\treturn 7;\n\t\t\t}\n\t\t\tif (price === Math.ceil(price / 25) * 25) {\n\t\t\t\treturn 6;\n\t\t\t}\n\t\t\tif (price === Math.ceil(price / 10) * 10) {\n\t\t\t\treturn 5;\n\t\t\t}\n\t\t\tif (price === Math.ceil(price / 5) * 5) {\n\t\t\t\treturn 4;\n\t\t\t}\n\t\t\tif (price === Math.ceil(price)) {\n\t\t\t\treturn 3;\n\t\t\t}\n\t\t\tif (price * 2 === Math.ceil(price * 2)) {\n\t\t\t\treturn 1;\n\t\t\t}\n\t\t\treturn 0;\n\t\t};\n\t\tfor (let index = startIndex; index < sortedTimePoints.length; ++index) {\n\t\t\tsortedTimePoints[index].timeWeight = priceWeight(\n\t\t\t\tsortedTimePoints[index].time\n\t\t\t);\n\t\t}\n\t}\n\n\t_precision() {\n\t\treturn this._options.localization.precision;\n\t}\n}\n\nconst horzItemBehavior = new HorzScaleBehaviorPrice();\n\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n\tlocalization: {\n\t\tprecision: 2, // custom option\n\t},\n};\n\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChartEx(\n\tdocument.getElementById('container'),\n\thorzItemBehavior,\n\tchartOptions\n);\n\nconst lineSeries = chart.addLineSeries({ color: LINE_LINE_COLOR });\n\nconst data = [];\nfor (let i = 0; i < 5000; i++) {\n\tdata.push({\n\t\ttime: i * 0.25,\n\t\tvalue: Math.sin(i / 100) + i / 500,\n\t});\n}\n\nlineSeries.setData(data);\n\nchart.timeScale().fitContent();\n",s={title:"Custom horizontal scale",sidebar_label:"Custom horizontal scale",description:"Customizing horizontal scale behavior with IHorzScaleBehavior interface.",pagination_prev:null,pagination_next:null,keywords:["price","scale","horizontal","options"]},c=void 0,p={unversionedId:"how_to/horizontal-price-scale",id:"how_to/horizontal-price-scale",title:"Custom horizontal scale",description:"Customizing horizontal scale behavior with IHorzScaleBehavior interface.",source:"@site/tutorials/how_to/horizontal-price-scale.mdx",sourceDirName:"how_to",slug:"/how_to/horizontal-price-scale",permalink:"/lightweight-charts/tutorials/how_to/horizontal-price-scale",draft:!1,tags:[],version:"current",frontMatter:{title:"Custom horizontal scale",sidebar_label:"Custom horizontal scale",description:"Customizing horizontal scale behavior with IHorzScaleBehavior interface.",pagination_prev:null,pagination_next:null,keywords:["price","scale","horizontal","options"]},sidebar:"tutorialsSidebar"},m={},h=[{value:"Understanding the IHorzScaleBehavior interface",id:"understanding-the-ihorzscalebehavior-interface",level:2},{value:"options",id:"options",level:3},{value:"setOptions",id:"setoptions",level:3},{value:"preprocessData",id:"preprocessdata",level:3},{value:"updateFormatter",id:"updateformatter",level:3},{value:"createConverterToInternalObj",id:"createconvertertointernalobj",level:3},{value:"key",id:"key",level:3},{value:"cacheKey",id:"cachekey",level:3},{value:"convertHorzItemToInternal",id:"converthorzitemtointernal",level:3},{value:"formatHorzItem",id:"formathorzitem",level:3},{value:"formatTickmark",id:"formattickmark",level:3},{value:"maxTickMarkWeight",id:"maxtickmarkweight",level:3},{value:"fillWeightsForPoints",id:"fillweightsforpoints",level:3},{value:"Example",id:"example",level:2},{value:"Implement price-based horizontal scale",id:"implement-price-based-horizontal-scale",level:3},{value:"Customize horizontal scale behavior",id:"customize-horizontal-scale-behavior",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Full example",id:"full-example",level:3}],u={toc:h},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"IHorzScaleBehavior")," interface allows you to customize the behavior of the\nhorizontal scale. By default, this scale uses ",(0,a.yg)("a",{parentName:"p",href:"/docs/api#time"},"time")," values, but\nyou can override it to use any other type of horizontal scale items, such as\nprice values. The most typical use case is the creation of Options charts."),(0,a.yg)("p",null,"This guide will explain the\n",(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/IHorzScaleBehavior"},(0,a.yg)("inlineCode",{parentName:"a"},"IHorzScaleBehavior"))," interface and\nhow to implement it to create a horizontal scale using price values with\ncustomizable precision."),(0,a.yg)("h2",{id:"understanding-the-ihorzscalebehavior-interface"},"Understanding the IHorzScaleBehavior interface"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"IHorzScaleBehavior")," interface consists of several methods that you need to\nimplement to customize the horizontal scale behavior. Here's a breakdown of each\nmethod and its purpose:"),(0,a.yg)("h3",{id:"options"},"options"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public options(): ChartOptionsImpl<HorzScaleItem>\n")),(0,a.yg)("p",null,"This method returns the chart's current configuration options. These options\ninclude various settings that control the appearance and behavior of the chart.\nImplement this method to return the current options of your horizontal scale\nbehavior."),(0,a.yg)("h3",{id:"setoptions"},"setOptions"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public setOptions(options: ChartOptionsImpl<HorzScaleItem>): void\n")),(0,a.yg)("p",null,"This method allows you to set or update the chart's configuration options. The\nprovided ",(0,a.yg)("inlineCode",{parentName:"p"},"options")," parameter will contain the settings you want to apply. Use\nthis method to update the options when necessary."),(0,a.yg)("h3",{id:"preprocessdata"},"preprocessData"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public preprocessData(data: DataItem<HorzScaleItem> | DataItem<HorzScaleItem>[]): void\n")),(0,a.yg)("p",null,"This method processes the series data before it is used by the chart. It\nreceives an array of data items or a single data item. You can implement this\nmethod to preprocess or modify data as needed before it is rendered."),(0,a.yg)("h3",{id:"updateformatter"},"updateFormatter"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public updateFormatter(options: LocalizationOptions<HorzScaleItem>): void\n")),(0,a.yg)("p",null,"This method updates the formatter used for displaying the horizontal scale items\nbased on localization options. Implement this to set custom formatting settings,\nsuch as locale-specific date or number formats."),(0,a.yg)("h3",{id:"createconvertertointernalobj"},"createConverterToInternalObj"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public createConverterToInternalObj(data: SeriesDataItemTypeMap<HorzScaleItem>[SeriesType][]): HorzScaleItemConverterToInternalObj<HorzScaleItem>\n")),(0,a.yg)("p",null,"This method creates and returns a function that converts series data items into\ninternal horizontal scale items. Implementing this method is essential for\ntransforming your custom data into the format required by the chart's internal\nmechanisms."),(0,a.yg)("h3",{id:"key"},"key"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public key(internalItem: InternalHorzScaleItem | HorzScaleItem): InternalHorzScaleItemKey\n")),(0,a.yg)("p",null,"This method returns a unique key for a given horizontal scale item. It's used\ninternally by the chart to identify and manage items uniquely. Implement this\nmethod to provide a unique identifier for each item."),(0,a.yg)("h3",{id:"cachekey"},"cacheKey"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public cacheKey(internalItem: InternalHorzScaleItem): number\n")),(0,a.yg)("p",null,"This method returns a cache key for a given internal horizontal scale item. This\nkey helps the chart to cache and retrieve items efficiently. Implement this\nmethod to return a numeric key for caching purposes."),(0,a.yg)("h3",{id:"converthorzitemtointernal"},"convertHorzItemToInternal"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public convertHorzItemToInternal(item: HorzScaleItem): InternalHorzScaleItem\n")),(0,a.yg)("p",null,"This method converts a horizontal scale item into an internal item that the\nchart can use. Implementing this method ensures that your custom data type is\ncorrectly transformed for internal use."),(0,a.yg)("h3",{id:"formathorzitem"},"formatHorzItem"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public formatHorzItem(item: InternalHorzScaleItem): string\n")),(0,a.yg)("p",null,"This method formats a horizontal scale item into a display string. The returned\nstring will be used for displaying the item on the chart. Implement this method\nto format your items in the desired way (e.g., with a specific number of decimal\nplaces)."),(0,a.yg)("h3",{id:"formattickmark"},"formatTickmark"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public formatTickmark(item: TickMark, localizationOptions: LocalizationOptions<HorzScaleItem>): string\n")),(0,a.yg)("p",null,"This method formats a horizontal scale tick mark into a display string. The tick\nmark represents significant points on the horizontal scale. Implement this\nmethod to customize how tick marks are displayed."),(0,a.yg)("h3",{id:"maxtickmarkweight"},"maxTickMarkWeight"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public maxTickMarkWeight(marks: TimeMark[]): TickMarkWeightValue\n")),(0,a.yg)("p",null,"This method determines the maximum weight for a set of tick marks, which\ninfluences their display prominence. Implement this method to specify the weight\nof the most significant tick mark."),(0,a.yg)("h3",{id:"fillweightsforpoints"},"fillWeightsForPoints"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"public fillWeightsForPoints(sortedTimePoints: readonly Mutable<TimeScalePoint>[], startIndex: number): void\n")),(0,a.yg)("p",null,"This method assigns weights to the sorted time points. These weights influence\nthe tick marks' visual prominence. Implement this method to provide a weighting\nsystem for your horizontal scale items."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"Below is an example implementation of a custom horizontal scale behavior using\nprice values. This example also includes customizable precision for formatting\nprice values."),(0,a.yg)("h3",{id:"implement-price-based-horizontal-scale"},"Implement price-based horizontal scale"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Define the custom localization options interface"))),(0,a.yg)("p",null,"Extend the ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/LocalizationOptions"},(0,a.yg)("inlineCode",{parentName:"a"},"LocalizationOptions")),"\ninterface to include a ",(0,a.yg)("inlineCode",{parentName:"p"},"precision")," property."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"export interface CustomLocalizationOptions\n    extends LocalizationOptions<HorzScalePriceItem> {\n    precision: number;\n}\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Define the type alias"))),(0,a.yg)("p",null,"Define a type alias for the horizontal scale item representing price values."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"export type HorzScalePriceItem = number;\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Implement the custom horizontal scale behavior class"))),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"HorzScaleBehaviorPrice")," class implements the ",(0,a.yg)("inlineCode",{parentName:"p"},"IHorzScaleBehavior"),"\ninterface, with additional logic to handle the precision provided in the custom\nlocalization options."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"function markWithGreaterWeight(a: TimeMark, b: TimeMark): TimeMark {\n    return a.weight > b.weight ? a : b;\n}\n\nexport class HorzScaleBehaviorPrice implements IHorzScaleBehavior<HorzScalePriceItem> {\n    private _options!: ChartOptionsImpl<HorzScalePriceItem>;\n\n    public options(): ChartOptionsImpl<HorzScalePriceItem> {\n        return this._options;\n    }\n\n    public setOptions(options: ChartOptionsImpl<HorzScalePriceItem>): void {\n        this._options = options;\n    }\n\n    public preprocessData(\n        data: DataItem<HorzScalePriceItem> | DataItem<HorzScalePriceItem>[]\n    ): void {\n        // un-needed in this example because we do not require any additional\n        // data processing for this scale.\n        // The method is still required to be implemented in the class.\n    }\n\n    public updateFormatter(options: CustomLocalizationOptions): void {\n        if (!this._options) {\n            return;\n        }\n        this._options.localization = options;\n    }\n\n    public createConverterToInternalObj(\n        data: SeriesDataItemTypeMap<HorzScalePriceItem>[SeriesType][]\n    ): HorzScaleItemConverterToInternalObj<HorzScalePriceItem> {\n        return (price: number) => price as unknown as InternalHorzScaleItem;\n    }\n\n    public key(\n        internalItem: InternalHorzScaleItem | HorzScalePriceItem\n    ): InternalHorzScaleItemKey {\n        return internalItem as InternalHorzScaleItemKey;\n    }\n\n    public cacheKey(internalItem: InternalHorzScaleItem): number {\n        return internalItem as unknown as number;\n    }\n\n    public convertHorzItemToInternal(\n        item: HorzScalePriceItem\n    ): InternalHorzScaleItem {\n        return item as unknown as InternalHorzScaleItem;\n    }\n\n    public formatHorzItem(item: InternalHorzScaleItem): string {\n        return (item as unknown as number).toFixed(this._precision());\n    }\n\n    public formatTickmark(\n        item: TickMark,\n        localizationOptions: LocalizationOptions<HorzScalePriceItem>\n    ): string {\n        return (item.time as unknown as number).toFixed(this._precision());\n    }\n\n    public maxTickMarkWeight(marks: TimeMark[]): TickMarkWeightValue {\n        return marks.reduce(markWithGreaterWeight, marks[0]).weight;\n    }\n\n    public fillWeightsForPoints(\n        sortedTimePoints: readonly Mutable<TimeScalePoint>[],\n        startIndex: number\n    ): void {\n        const priceWeight = (price: number) => {\n            if (price === Math.ceil(price / 100) * 100) {\n                return 8;\n            }\n            if (price === Math.ceil(price / 50) * 50) {\n                return 7;\n            }\n            if (price === Math.ceil(price / 25) * 25) {\n                return 6;\n            }\n            if (price === Math.ceil(price / 10) * 10) {\n                return 5;\n            }\n            if (price === Math.ceil(price / 5) * 5) {\n                return 4;\n            }\n            if (price === Math.ceil(price)) {\n                return 3;\n            }\n            if (price * 2 === Math.ceil(price * 2)) {\n                return 1;\n            }\n            return 0;\n        };\n        for (let index = startIndex; index < sortedTimePoints.length; ++index) {\n            sortedTimePoints[index].timeWeight = priceWeight(\n                sortedTimePoints[index].time as unknown as number\n            );\n        }\n    }\n\n    private _precision(): number {\n        return (this._options.localization as CustomLocalizationOptions).precision;\n    }\n}\n")),(0,a.yg)("p",null,"This class provides additional precision control through localization options,\nallowing formatted price values to use a specific number of decimal places."),(0,a.yg)("h3",{id:"customize-horizontal-scale-behavior"},"Customize horizontal scale behavior"),(0,a.yg)("p",null,"To use the custom horizontal scale behavior, instantiate the\n",(0,a.yg)("inlineCode",{parentName:"p"},"HorzScaleBehaviorPrice")," class and pass it to\n",(0,a.yg)("a",{parentName:"p",href:"/docs/api#createchartex"},(0,a.yg)("inlineCode",{parentName:"a"},"createChartEx")),"."),(0,a.yg)("p",null,"You can pass the custom option for ",(0,a.yg)("inlineCode",{parentName:"p"},"precision")," within the ",(0,a.yg)("inlineCode",{parentName:"p"},"localization"),"\nproperty of the chart options."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const horzItemBehavior = new HorzScaleBehaviorPrice();\nconst chart = LightweightCharts.createChartEx(container, horzItemBehavior, {\n    localization: {\n        precision: 2, // custom option\n    },\n});\nconst s1 = chart.addLineSeries();\nconst data = [];\nfor (let i = 0; i < 5000; i++) {\n    data.push({\n        time: i * 0.25,\n        value: Math.sin(i / 100),\n    });\n}\ns1.setData(data);\n")),(0,a.yg)("h3",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"IHorzScaleBehavior")," interface provides a powerful way to customize the\nhorizontal scale behavior in Lightweight Charts\u2122. By implementing this\ninterface, you can define how the horizontal scale should interpret and display\ncustom data types, such as price values. The provided example demonstrates how\nto implement a horizontal scale with customizable precision, allowing for\ntailored display formats to fit your specific requirements."),(0,a.yg)("h3",{id:"full-example"},"Full example"),(0,a.yg)(o.Ay,{replaceThemeConstants:!0,chart:!0,className:"language-js",chartOnTop:!0,codeUsage:(0,a.yg)(r.Ay,{mdxType:"UsageGuidePartial"}),mdxType:"CodeBlock"},l))}g.isMDXComponent=!0},5546:(e,t,n)=>{n.d(t,{Ay:()=>I});var i=n(96540),a=n(77964),r=n(78478),o=n(95293),l=n(55597),s=n(6715);function c(e,t,n){e.addEventListener("resize",(()=>{const e=t.getBoundingClientRect();n(e.width,e.height)}),!0)}const p={3.8:async e=>{const t=await n.e(3409).then(n.bind(n,73409));return{module:t,createChart:(n,i)=>{const a=t.createChart(n,i);return c(e,n,a.resize.bind(a)),a},createChartEx:void 0}},"4.0":async e=>{const t=await n.e(7476).then(n.bind(n,37476));return{module:t,createChart:(n,i)=>{const a=t.createChart(n,i);return c(e,n,a.resize.bind(a)),a},createChartEx:void 0}},4.1:async e=>{const t=await n.e(9631).then(n.bind(n,59631));return{module:t,createChart:(n,i)=>{const a=t.createChart(n,i);return c(e,n,a.resize.bind(a)),a},createChartEx:(n,i,a)=>{const r=t.createChartEx(n,i,a);return c(e,n,r.resize.bind(r)),r}}},current:async()=>{const e=await n.e(7839).then(n.bind(n,47839));return{module:e,createChart:(t,n)=>{const i=e.createChart(t,n);return c(window,t,i.resize.bind(i)),i},createChartEx:(t,n,i)=>{const a=e.createChartEx(t,n,i);return c(window,t,a.resize.bind(a)),a}}}},m="iframe_R_Fr";function h(e){const{script:t,iframeStyle:n}=e,{preferredVersion:a}=(0,l.g1)(),r=s&&s.length>0?s[0]:"",o=a?.name??r??"current",c=function(e){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${e}\n\t\t\t};\n\t\t<\/script>\n\t`}(t),h=i.useRef(null);return i.useEffect((()=>{const e=h.current,t=e?.contentWindow,n=e?.contentDocument;if(null===e||!t||!n)return;const i=async()=>{try{const{module:e,createChart:n,createChartEx:i}=await p[o](t);Object.assign(t,e),t.createChart=n,t.createChartEx=i,t.run?.()}catch(e){console.error(e)}};if(void 0!==t.run)i();else{const t=()=>{i(),e.removeEventListener("load",t)};e.addEventListener("load",t)}}),[c]),i.createElement("iframe",{key:t,ref:h,srcDoc:c,className:m,style:n})}var u=n(82840);const d=()=>`${Math.random().toString(36).slice(2,11)}`;function g(e){return"string"==typeof e?e:function(){const[e,t]=(0,i.useState)("");return(0,i.useEffect)((()=>t(d())),[]),e}()}const y=Object.keys(u.k.DARK);const I=e=>{const{chart:t,replaceThemeConstants:n,hideableCode:l,chartOnly:s,chartOnTop:c=!1,iframeStyle:p,replaceTabs:d=!0,codeUsage:I,...f}=e;let{children:z}=e;const{colorMode:v}=(0,o.G)(),b="dark"===v,O=g();if(n&&"string"==typeof z&&(z=function(e,t){const n=t?u.k.DARK:u.k.LIGHT;let i=e;for(const a of y)i=i.replace(new RegExp(a,"g"),`'${n[a]}'`);return i}(z,b)),d&&"string"==typeof z&&(z=z.replace(/\t/g,"    ")),z=z.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),t||l){const e=!s&&i.createElement(a.A,f,z),n=t&&i.createElement(r.A,{fallback:i.createElement("div",{className:m},"\xa0")},(()=>i.createElement(h,{script:z,iframeStyle:p}))),o=l&&i.createElement(i.Fragment,null,i.createElement("input",{id:O,type:"checkbox",className:"toggle-hidden-lines"}),i.createElement("label",{className:"toggle-label",htmlFor:O},"Show all code"));return c?i.createElement(i.Fragment,null,n,I,o,e):i.createElement(i.Fragment,null,I,o,e,n)}return i.createElement(a.A,f,z)}},82840:(e,t,n)=>{n.d(t,{k:()=>i});const i={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6715:e=>{e.exports=["4.1","4.0","3.8"]}}]);