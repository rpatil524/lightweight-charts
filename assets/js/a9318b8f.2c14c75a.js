"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30150"],{70788:function(e,i,t){t.r(i),t.d(i,{default:()=>d,frontMatter:()=>s,metadata:()=>a,assets:()=>h,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"ios","title":"iOS wrapper","description":"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.","source":"@site/versioned_docs/version-4.0/ios.md","sourceDirName":".","slug":"/ios","permalink":"/lightweight-charts/docs/4.0/ios","draft":false,"unlisted":false,"tags":[],"version":"4.0","sidebarPosition":6,"frontMatter":{"id":"ios","description":"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.","keywords":["charts","iOS","canvas","charting library","charting","html5 charts","financial charting library"],"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"From v3 to v4","permalink":"/lightweight-charts/docs/4.0/migrations/from-v3-to-v4"},"next":{"title":"Android","permalink":"/lightweight-charts/docs/4.0/android"}}'),n=t("85893"),r=t("50065");let s={id:"ios",description:"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.",keywords:["charts","iOS","canvas","charting library","charting","html5 charts","financial charting library"],sidebar_position:6},o="iOS wrapper",h={},c=[{value:"Installation",id:"installation",level:2},{value:"CocoaPods",id:"cocoapods",level:3},{value:"Swift Package Manager",id:"swift-package-manager",level:3},{value:"Usage",id:"usage",level:2},{value:"How to run the provided example",id:"how-to-run-the-provided-example",level:2}];function l(e){let i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"ios-wrapper",children:"iOS wrapper"})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["You can find the source code of the Lightweight Charts\u2122 iOS wrapper in ",(0,n.jsx)(i.a,{href:"https://github.com/tradingview/LightweightChartsIOS",children:"this repository"}),"."]})}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["This wrapper is currently still using ",(0,n.jsx)(i.code,{children:"v3.8.0"}),". This will be updated to ",(0,n.jsx)(i.code,{children:"v4.0.0"})," in the near future."]})}),"\n",(0,n.jsx)(i.p,{children:"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view."}),"\n",(0,n.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Requires iOS 10.0+"})}),"\n",(0,n.jsx)(i.h3,{id:"cocoapods",children:"CocoaPods"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://cocoapods.org",children:"CocoaPods"})," is a dependency manager for Cocoa projects. For usage and installation instructions, visit their website. To integrate LightweightCharts into your Xcode project using CocoaPods, specify it in your ",(0,n.jsx)(i.code,{children:"Podfile"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ruby",children:"pod 'LightweightCharts', '~> 3.8.0'\n"})}),"\n",(0,n.jsx)(i.h3,{id:"swift-package-manager",children:"Swift Package Manager"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.a,{href:"https://swift.org/package-manager/",children:"Swift Package Manager"})," is a tool for automating the distribution of Swift code and is integrated into the ",(0,n.jsx)(i.code,{children:"swift"})," compiler."]}),"\n",(0,n.jsxs)(i.p,{children:["Once you have your Swift package set up, adding LightweightCharts as a dependency is as easy as adding it to the ",(0,n.jsx)(i.code,{children:"dependencies"})," value of your ",(0,n.jsx)(i.code,{children:"Package.swift"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:'dependencies: [\n    .package(url: "https://github.com/tradingview/LightweightChartsIOS", .upToNextMajor(from: "4.0.0"))\n]\n'})}),"\n",(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i.p,{children:"Once the library has been installed in your repo, you're ready to create your first chart."}),"\n",(0,n.jsx)(i.p,{children:"First of all, in a file where you would like to create a chart, you need to import the library:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:"import LightweightCharts\n"})}),"\n",(0,n.jsx)(i.p,{children:"Create instance of LightweightCharts, which is a subclass of UIView, and add it to your view."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:"var chart: LightweightCharts!\n\n// ...\nchart = LightweightCharts()\nview.addSubview(chart)\n// ... setup layout\n"})}),"\n",(0,n.jsx)(i.p,{children:"Add any series to the chart and store a reference to it."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:"var series: BarSeries!\n\n// ...\nseries = chart.addBarSeries(options: nil)\n"})}),"\n",(0,n.jsx)(i.p,{children:"Add data to the series."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:'let data = [\n    BarData(time: .string("2018-10-19"), open: 180.34, high: 180.99, low: 178.57, close: 179.85),\n    BarData(time: .string("2018-10-22"), open: 180.82, high: 181.40, low: 177.56, close: 178.75),\n    BarData(time: .string("2018-10-23"), open: 175.77, high: 179.49, low: 175.44, close: 178.53),\n    BarData(time: .string("2018-10-24"), open: 178.58, high: 182.37, low: 176.31, close: 176.97),\n    BarData(time: .string("2018-10-25"), open: 177.52, high: 180.50, low: 176.83, close: 179.07)\n]\n\n// ...\nseries.setData(data: data)\n'})}),"\n",(0,n.jsx)(i.h2,{id:"how-to-run-the-provided-example",children:"How to run the provided example"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.a,{href:"https://github.com/tradingview/LightweightChartsIOS",children:"GitHub repository"})," for LightweightChartsIOS contains an example of the library in action. To run the example, start by cloning the repository, go to the ",(0,n.jsx)(i.em,{children:"Example"})," directory, and then run"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sh",children:"pod install\n"})})]})}function d(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return o},a:function(){return s}});var a=t(67294);let n={},r=a.createContext(n);function s(e){let i=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);