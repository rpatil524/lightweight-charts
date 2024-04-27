"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4259,8401],{19490:(t,n,e)=>{e.d(n,{Ay:()=>h});var o=e(58168),a=(e(96540),e(15680));const i={toc:[]},l="wrapper";function h(t){let{components:n,...e}=t;return(0,a.yg)(l,(0,o.A)({},i,e,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("details",null,(0,a.yg)("summary",null,"How to use the code sample"),(0,a.yg)("strong",null,"The code presented below requires:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"That ",(0,a.yg)("inlineCode",{parentName:"li"},"createChart")," has already been imported. See ",(0,a.yg)("a",{parentName:"li",href:"/docs#creating-a-chart"},"Getting Started")," for more information,"),(0,a.yg)("li",{parentName:"ul"},"and that there is an html div element on the page with an ",(0,a.yg)("inlineCode",{parentName:"li"},"id")," of ",(0,a.yg)("inlineCode",{parentName:"li"},"container"),".")),(0,a.yg)("p",null,"Here is an example skeleton setup: ",(0,a.yg)("a",{parentName:"p",href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6"},"Code Sandbox"),".\nYou can paste the provided code below the ",(0,a.yg)("inlineCode",{parentName:"p"},"// REPLACE EVERYTHING BELOW HERE")," comment."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."))))}h.isMDXComponent=!0},29301:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>m,toc:()=>y});var o=e(58168),a=(e(96540),e(15680)),i=e(19490),l=e(5546);const h="// remove-start\n// Lightweight Charts\u2122 Example: Compare mfont family\n// https://tradingview.github.io/lightweight-charts/tutorials/demos/custom-font-family\n\n// remove-end\n// hide-start\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n\theight: 200,\n};\n// hide-end\nconst container = document.getElementById('container');\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(container, chartOptions);\n\n// remove-start\n// Only needed within demo page\n// eslint-disable-next-line no-undef\nwindow.addEventListener('resize', () => {\n\tchart.applyOptions({ height: 200 });\n});\n// remove-end\n\nfunction setFontFamily(fontFamily) {\n\t// highlight-start\n\tchart.applyOptions({\n\t\tlayout: {\n\t\t\tfontFamily: fontFamily,\n\t\t},\n\t});\n\t// highlight-end\n}\n\nconst candlestickSeries = chart.addCandlestickSeries({\n\tupColor: BAR_UP_COLOR,\n\tdownColor: BAR_DOWN_COLOR,\n\tborderVisible: false,\n\twickUpColor: BAR_UP_COLOR,\n\twickDownColor: BAR_DOWN_COLOR,\n});\n\ncandlestickSeries.setData([\n\t{\n\t\tclose: 108.9974612905403,\n\t\thigh: 121.20998259466148,\n\t\tlow: 96.65376292551082,\n\t\topen: 104.5614412226746,\n\t\ttime: { year: 2018, month: 9, day: 22 },\n\t},\n\t// hide-start\n\t{\n\t\tclose: 110.46815600023501,\n\t\thigh: 111.3650273696516,\n\t\tlow: 82.65543461471314,\n\t\topen: 110.16538466099634,\n\t\ttime: { year: 2018, month: 9, day: 23 },\n\t},\n\t{\n\t\tclose: 90.62131977740425,\n\t\thigh: 109.19838270252615,\n\t\tlow: 82.30106956144076,\n\t\topen: 105.03104735287424,\n\t\ttime: { year: 2018, month: 9, day: 24 },\n\t},\n\t{\n\t\tclose: 96.80120024431532,\n\t\thigh: 101.92074283374939,\n\t\tlow: 89.25819769856513,\n\t\topen: 89.25819769856513,\n\t\ttime: { year: 2018, month: 9, day: 25 },\n\t},\n\t{\n\t\tclose: 94.87113928076117,\n\t\thigh: 104.12503365679314,\n\t\tlow: 85.42405005240111,\n\t\topen: 104.12503365679314,\n\t\ttime: { year: 2018, month: 9, day: 26 },\n\t},\n\t{\n\t\tclose: 100.76494087674855,\n\t\thigh: 102.60508417239113,\n\t\tlow: 80.76268547064865,\n\t\topen: 92.93299948659636,\n\t\ttime: { year: 2018, month: 9, day: 27 },\n\t},\n\t{\n\t\tclose: 101.45855928883597,\n\t\thigh: 110.26727325817173,\n\t\tlow: 91.10348900896837,\n\t\topen: 93.4362185148034,\n\t\ttime: { year: 2018, month: 9, day: 28 },\n\t},\n\t{\n\t\tclose: 91.68871815146144,\n\t\thigh: 103.73263644407702,\n\t\tlow: 73.5329263610334,\n\t\topen: 92.96467883926464,\n\t\ttime: { year: 2018, month: 9, day: 29 },\n\t},\n\t{\n\t\tclose: 89.39633140354033,\n\t\thigh: 101.06569518834237,\n\t\tlow: 81.71149885084162,\n\t\topen: 83.08248758612376,\n\t\ttime: { year: 2018, month: 9, day: 30 },\n\t},\n\t{\n\t\tclose: 93.09498513675378,\n\t\thigh: 93.09498513675378,\n\t\tlow: 76.81138276012628,\n\t\topen: 91.97280452613565,\n\t\ttime: { year: 2018, month: 10, day: 1 },\n\t},\n\t{\n\t\tclose: 89.26733004009083,\n\t\thigh: 89.26733004009083,\n\t\tlow: 76.27851645958225,\n\t\topen: 85.83860311023625,\n\t\ttime: { year: 2018, month: 10, day: 2 },\n\t},\n\t{\n\t\tclose: 89.66035763006947,\n\t\thigh: 89.66035763006947,\n\t\tlow: 67.63677527399729,\n\t\topen: 77.79584976144585,\n\t\ttime: { year: 2018, month: 10, day: 3 },\n\t},\n\t{\n\t\tclose: 89.59687813884807,\n\t\thigh: 97.05916949817754,\n\t\tlow: 72.9823390058379,\n\t\topen: 77.37388423995716,\n\t\ttime: { year: 2018, month: 10, day: 4 },\n\t},\n\t{\n\t\tclose: 83.6425403120788,\n\t\thigh: 91.72593377862522,\n\t\tlow: 65.27208271740422,\n\t\topen: 85.92711686401718,\n\t\ttime: { year: 2018, month: 10, day: 5 },\n\t},\n\t{\n\t\tclose: 82.99053929200655,\n\t\thigh: 93.4482645370556,\n\t\tlow: 65.98920655616067,\n\t\topen: 71.8940788814462,\n\t\ttime: { year: 2018, month: 10, day: 6 },\n\t},\n\t{\n\t\tclose: 73.09595957510754,\n\t\thigh: 86.65935598412881,\n\t\tlow: 62.710852488609326,\n\t\topen: 80.78945254092527,\n\t\ttime: { year: 2018, month: 10, day: 7 },\n\t},\n\t{\n\t\tclose: 80.12127692112905,\n\t\thigh: 87.49034842093855,\n\t\tlow: 60.09987438133361,\n\t\topen: 70.2408873110499,\n\t\ttime: { year: 2018, month: 10, day: 8 },\n\t},\n\t{\n\t\tclose: 77.60439116240829,\n\t\thigh: 83.20908153481327,\n\t\tlow: 68.56836128158209,\n\t\topen: 75.83440719565763,\n\t\ttime: { year: 2018, month: 10, day: 9 },\n\t},\n\t{\n\t\tclose: 73.8952889203428,\n\t\thigh: 81.89987377779327,\n\t\tlow: 57.8891283348631,\n\t\topen: 66.51904017615065,\n\t\ttime: { year: 2018, month: 10, day: 10 },\n\t},\n\t{\n\t\tclose: 75.08452506029613,\n\t\thigh: 75.08452506029613,\n\t\tlow: 59.208194031968155,\n\t\topen: 72.14475369395771,\n\t\ttime: { year: 2018, month: 10, day: 11 },\n\t},\n\t{\n\t\tclose: 73.08898607472305,\n\t\thigh: 73.08898607472305,\n\t\tlow: 63.05632280826725,\n\t\topen: 66.93050765469924,\n\t\ttime: { year: 2018, month: 10, day: 12 },\n\t},\n\t{\n\t\tclose: 58.993371469509704,\n\t\thigh: 73.08872095153116,\n\t\tlow: 53.52204433018574,\n\t\topen: 66.12840939191403,\n\t\ttime: { year: 2018, month: 10, day: 13 },\n\t},\n\t{\n\t\tclose: 57.150755012485,\n\t\thigh: 74.57414896810235,\n\t\tlow: 52.6552427480398,\n\t\topen: 68.50876667562338,\n\t\ttime: { year: 2018, month: 10, day: 14 },\n\t},\n\t{\n\t\tclose: 58.03147289822832,\n\t\thigh: 69.62445357159157,\n\t\tlow: 53.8260018823565,\n\t\topen: 61.62298899368165,\n\t\ttime: { year: 2018, month: 10, day: 15 },\n\t},\n\t{\n\t\tclose: 60.6852855399041,\n\t\thigh: 69.02095441024431,\n\t\tlow: 54.00939224622043,\n\t\topen: 64.81901552322648,\n\t\ttime: { year: 2018, month: 10, day: 16 },\n\t},\n\t{\n\t\tclose: 57.508820449565285,\n\t\thigh: 63.82926565242872,\n\t\tlow: 54.07370975509682,\n\t\topen: 54.07370975509682,\n\t\ttime: { year: 2018, month: 10, day: 17 },\n\t},\n\t{\n\t\tclose: 51.60796818909221,\n\t\thigh: 64.88712939579875,\n\t\tlow: 51.60796818909221,\n\t\topen: 53.489226476218434,\n\t\ttime: { year: 2018, month: 10, day: 18 },\n\t},\n\t{\n\t\tclose: 55.139520748382864,\n\t\thigh: 59.161320710177925,\n\t\tlow: 52.228139922762765,\n\t\topen: 52.228139922762765,\n\t\ttime: { year: 2018, month: 10, day: 19 },\n\t},\n\t{\n\t\tclose: 47.47868992247237,\n\t\thigh: 58.0836625917653,\n\t\tlow: 46.43213518526832,\n\t\topen: 47.59258635788406,\n\t\ttime: { year: 2018, month: 10, day: 20 },\n\t},\n\t{\n\t\tclose: 47.22596723150508,\n\t\thigh: 51.55468175560989,\n\t\tlow: 45.22654435521185,\n\t\topen: 47.452459556200054,\n\t\ttime: { year: 2018, month: 10, day: 21 },\n\t},\n\t{\n\t\tclose: 53.39724151191295,\n\t\thigh: 58.256006746786035,\n\t\tlow: 46.40105667413804,\n\t\topen: 53.41548527476272,\n\t\ttime: { year: 2018, month: 10, day: 22 },\n\t},\n\t{\n\t\tclose: 45.015877277800854,\n\t\thigh: 51.2955426978105,\n\t\tlow: 40.26534748806228,\n\t\topen: 43.90158660063875,\n\t\ttime: { year: 2018, month: 10, day: 23 },\n\t},\n\t{\n\t\tclose: 49.307312373439665,\n\t\thigh: 49.93643636637581,\n\t\tlow: 43.20705757075934,\n\t\topen: 45.672934511555795,\n\t\ttime: { year: 2018, month: 10, day: 24 },\n\t},\n\t{\n\t\tclose: 45.15418019295631,\n\t\thigh: 48.59676744409583,\n\t\tlow: 37.628047445918504,\n\t\topen: 40.33862825788268,\n\t\ttime: { year: 2018, month: 10, day: 25 },\n\t},\n\t{\n\t\tclose: 43.2972018283068,\n\t\thigh: 43.2972018283068,\n\t\tlow: 36.335943004352245,\n\t\topen: 42.605991542720965,\n\t\ttime: { year: 2018, month: 10, day: 26 },\n\t},\n\t{\n\t\tclose: 39.1153643552137,\n\t\thigh: 44.311406627923844,\n\t\tlow: 35.31457011784855,\n\t\topen: 42.00000202357808,\n\t\ttime: { year: 2018, month: 10, day: 27 },\n\t},\n\t{\n\t\tclose: 36.06960076896885,\n\t\thigh: 42.89041111567749,\n\t\tlow: 33.58326637182405,\n\t\topen: 37.40942817102858,\n\t\ttime: { year: 2018, month: 10, day: 28 },\n\t},\n\t{\n\t\tclose: 35.8981036950969,\n\t\thigh: 42.19793419602979,\n\t\tlow: 33.62190962880232,\n\t\topen: 36.87246325249825,\n\t\ttime: { year: 2018, month: 10, day: 29 },\n\t},\n\t{\n\t\tclose: 31.378205119641457,\n\t\thigh: 37.33501102832602,\n\t\tlow: 31.30137162225214,\n\t\topen: 35.651275660713694,\n\t\ttime: { year: 2018, month: 10, day: 30 },\n\t},\n\t{\n\t\tclose: 33.574536057730576,\n\t\thigh: 37.30152570719593,\n\t\tlow: 27.369689193426243,\n\t\topen: 34.330180925654936,\n\t\ttime: { year: 2018, month: 10, day: 31 },\n\t},\n\t{\n\t\tclose: 28.91735096504839,\n\t\thigh: 32.62196350117741,\n\t\tlow: 27.072564759401843,\n\t\topen: 29.398552328599372,\n\t\ttime: { year: 2018, month: 11, day: 1 },\n\t},\n\t{\n\t\tclose: 28.44143154172122,\n\t\thigh: 31.042019861166594,\n\t\tlow: 23.383320830495375,\n\t\topen: 27.275885037308072,\n\t\ttime: { year: 2018, month: 11, day: 2 },\n\t},\n\t{\n\t\tclose: 25.92162714418916,\n\t\thigh: 30.57604443170622,\n\t\tlow: 25.418671641150752,\n\t\topen: 26.775196275924657,\n\t\ttime: { year: 2018, month: 11, day: 3 },\n\t},\n\t{\n\t\tclose: 26.376994016637433,\n\t\thigh: 28.198647836523744,\n\t\tlow: 21.492969733673334,\n\t\topen: 26.27980943059139,\n\t\ttime: { year: 2018, month: 11, day: 4 },\n\t},\n\t{\n\t\tclose: 28.60834088674494,\n\t\thigh: 28.60834088674494,\n\t\tlow: 21.89002840571941,\n\t\topen: 25.376464895884993,\n\t\ttime: { year: 2018, month: 11, day: 5 },\n\t},\n\t{\n\t\tclose: 31.103861067101136,\n\t\thigh: 31.103861067101136,\n\t\tlow: 24.39227668420513,\n\t\topen: 28.994785427089838,\n\t\ttime: { year: 2018, month: 11, day: 6 },\n\t},\n\t{\n\t\tclose: 28.6308138310307,\n\t\thigh: 35.430817482769164,\n\t\tlow: 24.069515410358232,\n\t\topen: 27.109407394069084,\n\t\ttime: { year: 2018, month: 11, day: 7 },\n\t},\n\t{\n\t\tclose: 29.468889521733466,\n\t\thigh: 37.54082586961352,\n\t\tlow: 27.90833873315644,\n\t\topen: 33.16901271715577,\n\t\ttime: { year: 2018, month: 11, day: 8 },\n\t},\n\t{\n\t\tclose: 35.887823124204296,\n\t\thigh: 39.21804237580939,\n\t\tlow: 30.951078044055627,\n\t\topen: 30.951078044055627,\n\t\ttime: { year: 2018, month: 11, day: 9 },\n\t},\n\t{\n\t\tclose: 34.361137347097575,\n\t\thigh: 35.27083445807796,\n\t\tlow: 27.825889562160082,\n\t\topen: 34.86040182980157,\n\t\ttime: { year: 2018, month: 11, day: 10 },\n\t},\n\t{\n\t\tclose: 36.61336645243868,\n\t\thigh: 40.31460537175622,\n\t\tlow: 33.96383400053921,\n\t\topen: 39.70037560142739,\n\t\ttime: { year: 2018, month: 11, day: 11 },\n\t},\n\t{\n\t\tclose: 41.321693986803055,\n\t\thigh: 44.45481986667003,\n\t\tlow: 35.67563772228475,\n\t\topen: 38.67059795413642,\n\t\ttime: { year: 2018, month: 11, day: 12 },\n\t},\n\t{\n\t\tclose: 40.15038854039306,\n\t\thigh: 41.50912000191902,\n\t\tlow: 32.610637769394444,\n\t\topen: 41.50912000191902,\n\t\ttime: { year: 2018, month: 11, day: 13 },\n\t},\n\t{\n\t\tclose: 44.092601065208015,\n\t\thigh: 44.092601065208015,\n\t\tlow: 37.778306506100726,\n\t\topen: 38.99045898154136,\n\t\ttime: { year: 2018, month: 11, day: 14 },\n\t},\n\t{\n\t\tclose: 41.42426637839382,\n\t\thigh: 44.72189614841937,\n\t\tlow: 41.42426637839382,\n\t\topen: 44.72189614841937,\n\t\ttime: { year: 2018, month: 11, day: 15 },\n\t},\n\t{\n\t\tclose: 41.19513795258408,\n\t\thigh: 49.08084695291049,\n\t\tlow: 36.24282165100056,\n\t\topen: 44.909248500660254,\n\t\ttime: { year: 2018, month: 11, day: 16 },\n\t},\n\t{\n\t\tclose: 44.24935708161703,\n\t\thigh: 53.028535501565486,\n\t\tlow: 40.32056743060158,\n\t\topen: 46.198546801109984,\n\t\ttime: { year: 2018, month: 11, day: 17 },\n\t},\n\t{\n\t\tclose: 43.18555863372182,\n\t\thigh: 52.34250206788521,\n\t\tlow: 43.18555863372182,\n\t\topen: 49.58135271619679,\n\t\ttime: { year: 2018, month: 11, day: 18 },\n\t},\n\t{\n\t\tclose: 50.8568887039091,\n\t\thigh: 52.60441957102357,\n\t\tlow: 39.917719271944364,\n\t\topen: 48.197532365645806,\n\t\ttime: { year: 2018, month: 11, day: 19 },\n\t},\n\t{\n\t\tclose: 48.79128595974164,\n\t\thigh: 52.45087789296739,\n\t\tlow: 46.80633073487828,\n\t\topen: 52.45087789296739,\n\t\ttime: { year: 2018, month: 11, day: 20 },\n\t},\n\t{\n\t\tclose: 46.97300046781947,\n\t\thigh: 55.80689868049132,\n\t\tlow: 46.97300046781947,\n\t\topen: 55.80689868049132,\n\t\ttime: { year: 2018, month: 11, day: 21 },\n\t},\n\t{\n\t\tclose: 55.58129861112469,\n\t\thigh: 55.58129861112469,\n\t\tlow: 49.087279242343996,\n\t\topen: 53.16719476594961,\n\t\ttime: { year: 2018, month: 11, day: 22 },\n\t},\n\t{\n\t\tclose: 50.058979311730226,\n\t\thigh: 62.55333249171461,\n\t\tlow: 50.058979311730226,\n\t\topen: 52.628489607588826,\n\t\ttime: { year: 2018, month: 11, day: 23 },\n\t},\n\t{\n\t\tclose: 51.193155229085995,\n\t\thigh: 59.08949991997865,\n\t\tlow: 51.193155229085995,\n\t\topen: 55.352594157474755,\n\t\ttime: { year: 2018, month: 11, day: 24 },\n\t},\n\t{\n\t\tclose: 60.099338327208436,\n\t\thigh: 66.93510126958154,\n\t\tlow: 55.27299867222781,\n\t\topen: 61.05897620044226,\n\t\ttime: { year: 2018, month: 11, day: 25 },\n\t},\n\t{\n\t\tclose: 58.3802630890727,\n\t\thigh: 71.50922937699602,\n\t\tlow: 50.95210438359451,\n\t\topen: 62.4679688326532,\n\t\ttime: { year: 2018, month: 11, day: 26 },\n\t},\n\t{\n\t\tclose: 57.875350873413225,\n\t\thigh: 65.59903214448208,\n\t\tlow: 57.875350873413225,\n\t\topen: 62.747405667247016,\n\t\ttime: { year: 2018, month: 11, day: 27 },\n\t},\n\t{\n\t\tclose: 61.231150731698605,\n\t\thigh: 66.3829902228434,\n\t\tlow: 61.231150731698605,\n\t\topen: 65.01028486919516,\n\t\ttime: { year: 2018, month: 11, day: 28 },\n\t},\n\t{\n\t\tclose: 64.9698540874806,\n\t\thigh: 77.09783903299783,\n\t\tlow: 58.455031795628194,\n\t\topen: 58.455031795628194,\n\t\ttime: { year: 2018, month: 11, day: 29 },\n\t},\n\t{\n\t\tclose: 72.40978471883417,\n\t\thigh: 72.40978471883417,\n\t\tlow: 53.05804901549206,\n\t\topen: 65.907298021202,\n\t\ttime: { year: 2018, month: 11, day: 30 },\n\t},\n\t{\n\t\tclose: 74.60745731538934,\n\t\thigh: 78.33742117000789,\n\t\tlow: 54.42067144918077,\n\t\topen: 73.20930147914103,\n\t\ttime: { year: 2018, month: 12, day: 1 },\n\t},\n\t{\n\t\tclose: 64.10866184869924,\n\t\thigh: 76.14506447001202,\n\t\tlow: 61.5224432669736,\n\t\topen: 69.33984127682314,\n\t\ttime: { year: 2018, month: 12, day: 2 },\n\t},\n\t{\n\t\tclose: 65.92038759928786,\n\t\thigh: 76.98479070362022,\n\t\tlow: 65.92038759928786,\n\t\topen: 69.32298264631615,\n\t\ttime: { year: 2018, month: 12, day: 3 },\n\t},\n\t{\n\t\tclose: 68.23682161095334,\n\t\thigh: 77.6723729460968,\n\t\tlow: 68.23682161095334,\n\t\topen: 74.39471534484744,\n\t\ttime: { year: 2018, month: 12, day: 4 },\n\t},\n\t{\n\t\tclose: 67.45035792565862,\n\t\thigh: 83.53728553118547,\n\t\tlow: 67.45035792565862,\n\t\topen: 74.79418570077237,\n\t\ttime: { year: 2018, month: 12, day: 5 },\n\t},\n\t{\n\t\tclose: 79.26722967320323,\n\t\thigh: 79.26722967320323,\n\t\tlow: 68.40654829383521,\n\t\topen: 68.40654829383521,\n\t\ttime: { year: 2018, month: 12, day: 6 },\n\t},\n\t{\n\t\tclose: 74.95305464030587,\n\t\thigh: 81.65884414224071,\n\t\tlow: 64.08761481290135,\n\t\topen: 81.65884414224071,\n\t\ttime: { year: 2018, month: 12, day: 7 },\n\t},\n\t{\n\t\tclose: 86.30802154315482,\n\t\thigh: 91.21953112925642,\n\t\tlow: 65.46112304993535,\n\t\topen: 77.82514647663533,\n\t\ttime: { year: 2018, month: 12, day: 8 },\n\t},\n\t{\n\t\tclose: 82.67218208289492,\n\t\thigh: 92.45833377442081,\n\t\tlow: 76.80728739647081,\n\t\topen: 87.18916937056241,\n\t\ttime: { year: 2018, month: 12, day: 9 },\n\t},\n\t{\n\t\tclose: 73.86125805398967,\n\t\thigh: 83.68952750914036,\n\t\tlow: 73.86125805398967,\n\t\topen: 75.76119064173785,\n\t\ttime: { year: 2018, month: 12, day: 10 },\n\t},\n\t{\n\t\tclose: 79.00109311074502,\n\t\thigh: 88.74271558831151,\n\t\tlow: 69.00900811612337,\n\t\topen: 88.74271558831151,\n\t\ttime: { year: 2018, month: 12, day: 11 },\n\t},\n\t{\n\t\tclose: 80.98779620162513,\n\t\thigh: 97.07429720104427,\n\t\tlow: 73.76970378608283,\n\t\topen: 88.57288529720472,\n\t\ttime: { year: 2018, month: 12, day: 12 },\n\t},\n\t{\n\t\tclose: 87.83619759370346,\n\t\thigh: 91.29759438607132,\n\t\tlow: 74.00740214639268,\n\t\topen: 87.51853658661781,\n\t\ttime: { year: 2018, month: 12, day: 13 },\n\t},\n\t{\n\t\tclose: 87.50134898892377,\n\t\thigh: 102.95635188637507,\n\t\tlow: 81.0513723219724,\n\t\topen: 94.74009794290814,\n\t\ttime: { year: 2018, month: 12, day: 14 },\n\t},\n\t{\n\t\tclose: 92.40159548029843,\n\t\thigh: 103.24363067710844,\n\t\tlow: 75.44605394394573,\n\t\topen: 95.99903495559444,\n\t\ttime: { year: 2018, month: 12, day: 15 },\n\t},\n\t{\n\t\tclose: 87.43619322092951,\n\t\thigh: 99.39349139000474,\n\t\tlow: 80.24624983473528,\n\t\topen: 99.39349139000474,\n\t\ttime: { year: 2018, month: 12, day: 16 },\n\t},\n\t{\n\t\tclose: 84.42724177432086,\n\t\thigh: 95.57485075893881,\n\t\tlow: 84.42724177432086,\n\t\topen: 90.71070399095831,\n\t\ttime: { year: 2018, month: 12, day: 17 },\n\t},\n\t{\n\t\tclose: 96.04408990868804,\n\t\thigh: 101.02158248010466,\n\t\tlow: 94.38544669520195,\n\t\topen: 101.02158248010466,\n\t\ttime: { year: 2018, month: 12, day: 18 },\n\t},\n\t{\n\t\tclose: 97.2120815653703,\n\t\thigh: 103.35830035963959,\n\t\tlow: 78.72594316029567,\n\t\topen: 86.98009038330306,\n\t\ttime: { year: 2018, month: 12, day: 19 },\n\t},\n\t{\n\t\tclose: 105.23366706522204,\n\t\thigh: 106.56174456393981,\n\t\tlow: 94.6658899187065,\n\t\topen: 106.56174456393981,\n\t\ttime: { year: 2018, month: 12, day: 20 },\n\t},\n\t{\n\t\tclose: 89.53750874231946,\n\t\thigh: 112.27917367188074,\n\t\tlow: 87.13586952228918,\n\t\topen: 96.0857985693989,\n\t\ttime: { year: 2018, month: 12, day: 21 },\n\t},\n\t{\n\t\tclose: 88.55787263435407,\n\t\thigh: 112.62138454627025,\n\t\tlow: 80.42783344898223,\n\t\topen: 88.34340019789849,\n\t\ttime: { year: 2018, month: 12, day: 22 },\n\t},\n\t{\n\t\tclose: 86.00639650371167,\n\t\thigh: 110.94532193307279,\n\t\tlow: 74.78703575498496,\n\t\topen: 92.4275741143068,\n\t\ttime: { year: 2018, month: 12, day: 23 },\n\t},\n\t{\n\t\tclose: 90.45119640254379,\n\t\thigh: 92.51500970997435,\n\t\tlow: 82.69475430846728,\n\t\topen: 86.21662699549296,\n\t\ttime: { year: 2018, month: 12, day: 24 },\n\t},\n\t{\n\t\tclose: 93.38124264891343,\n\t\thigh: 93.38124264891343,\n\t\tlow: 84.5674956907938,\n\t\topen: 87.54923273867136,\n\t\ttime: { year: 2018, month: 12, day: 25 },\n\t},\n\t{\n\t\tclose: 87.88725775527871,\n\t\thigh: 90.14253631595105,\n\t\tlow: 77.28638555494503,\n\t\topen: 83.93199044032968,\n\t\ttime: { year: 2018, month: 12, day: 26 },\n\t},\n\t{\n\t\tclose: 71.77940077333062,\n\t\thigh: 89.25710176370582,\n\t\tlow: 67.74278646676306,\n\t\topen: 78.5346198695072,\n\t\ttime: { year: 2018, month: 12, day: 27 },\n\t},\n\t{\n\t\tclose: 72.08757207606054,\n\t\thigh: 79.36518615067514,\n\t\tlow: 69.18787486704672,\n\t\topen: 69.18787486704672,\n\t\ttime: { year: 2018, month: 12, day: 28 },\n\t},\n\t{\n\t\tclose: 73.87977927793119,\n\t\thigh: 77.62891475860795,\n\t\tlow: 70.42293039125319,\n\t\topen: 70.42293039125319,\n\t\ttime: { year: 2018, month: 12, day: 29 },\n\t},\n\t{\n\t\tclose: 74.86330345366132,\n\t\thigh: 75.88473282167168,\n\t\tlow: 62.89549355427313,\n\t\topen: 74.86554252962132,\n\t\ttime: { year: 2018, month: 12, day: 30 },\n\t},\n\t{\n\t\tclose: 71.00787215611817,\n\t\thigh: 71.00787215611817,\n\t\tlow: 57.29681995441558,\n\t\topen: 60.04464694823929,\n\t\ttime: { year: 2018, month: 12, day: 31 },\n\t},\n\t// hide-end\n]);\n\nchart.timeScale().fitContent();\n// hide-start\nconst styles = `\n    .buttons-container {\n        display: flex;\n        flex-direction: row;\n        gap: 8px;\n    }\n    .buttons-container button {\n        all: initial;\n        font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu,\n            sans-serif;\n        font-size: 16px;\n        font-style: normal;\n        font-weight: 510;\n        line-height: 24px; /* 150% */\n        letter-spacing: -0.32px;\n        padding: 8px 24px;\n        color: rgba(19, 23, 34, 1);\n        background-color: rgba(240, 243, 250, 1);\n        border-radius: 8px;\n        cursor: pointer;\n    }\n\n    .buttons-container button:hover {\n        background-color: rgba(224, 227, 235, 1);\n    }\n\n    .buttons-container button:active {\n        background-color: rgba(209, 212, 220, 1);\n    }\n`;\n\nconst stylesElement = document.createElement('style');\nstylesElement.innerHTML = styles;\ncontainer.appendChild(stylesElement);\n\nconst buttonsContainer = document.createElement('div');\nbuttonsContainer.classList.add('buttons-container');\n// hide-end\nconst fontOptions = ['Courier New', 'Arial', 'Times New Roman'];\nfontOptions.forEach(font => {\n\tconst button = document.createElement('button');\n\tbutton.innerText = font;\n\tbutton.addEventListener('click', () => setFontFamily(font));\n\tbuttonsContainer.appendChild(button);\n});\n\ncontainer.appendChild(buttonsContainer);\n",r={title:"Custom font family",sidebar_label:"Custom font",description:"An example of how to configure a custom font family for the chart",pagination_prev:null,pagination_next:null,keywords:["font","typeface"]},s=void 0,m={unversionedId:"demos/custom-font-family",id:"demos/custom-font-family",title:"Custom font family",description:"An example of how to configure a custom font family for the chart",source:"@site/tutorials/demos/custom-font-family.mdx",sourceDirName:"demos",slug:"/demos/custom-font-family",permalink:"/lightweight-charts/tutorials/demos/custom-font-family",draft:!1,tags:[],version:"current",frontMatter:{title:"Custom font family",sidebar_label:"Custom font",description:"An example of how to configure a custom font family for the chart",pagination_prev:null,pagination_next:null,keywords:["font","typeface"]},sidebar:"tutorialsSidebar"},c={},y=[{value:"API Reference",id:"api-reference",level:3}],d={toc:y},p="wrapper";function g(t){let{components:n,...e}=t;return(0,a.yg)(p,(0,o.A)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"In this example, Lightweight Charts\u2122 showcases its high customizability,\nspecifically with respect to adjusting font families. The primary tool for\nimplementing this shift in font is the ",(0,a.yg)("inlineCode",{parentName:"p"},"chart.applyOptions()")," method."),(0,a.yg)("p",null,"This method is called within the ",(0,a.yg)("inlineCode",{parentName:"p"},"setFontFamily(fontFamily)")," function, accepting\nan object that modifies the ",(0,a.yg)("inlineCode",{parentName:"p"},"layout")," section of the chart options. The object\nchanges the ",(0,a.yg)("inlineCode",{parentName:"p"},"fontFamily")," property to the passed argument, allowing quick and\nresponsive alterations to the chart's font style."),(0,a.yg)("p",null,"The flexibility in adjusting text characteristics enables the fine-tuning of the\nchart's visual elements for better readability or to match specific styles,\nattesting to the adaptability of Lightweight Charts\u2122."),(0,a.yg)("p",null,"A more detailed tutorial on customizing the appearance of the chart can be found\n",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/tutorials/customization/intro"},"here"),"."),(0,a.yg)("h3",{id:"api-reference"},"API Reference"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/api/interfaces/LayoutOptions#fontfamily"},"LayoutOptions.fontFamily"))),(0,a.yg)(l.Ay,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,chartOnTop:!0,codeUsage:(0,a.yg)(i.Ay,{mdxType:"UsageGuidePartial"}),mdxType:"CodeBlock"},h))}g.isMDXComponent=!0},5546:(t,n,e)=>{e.d(n,{Ay:()=>w});var o=e(96540),a=e(77964),i=e(78478),l=e(95293),h=e(55597),r=e(6715);function s(t,n,e){t.addEventListener("resize",(()=>{const t=n.getBoundingClientRect();e(t.width,t.height)}),!0)}const m={3.8:async t=>{const n=await e.e(3409).then(e.bind(e,73409));return{module:n,createChart:(e,o)=>{const a=n.createChart(e,o);return s(t,e,a.resize.bind(a)),a}}},"4.0":async t=>{const n=await e.e(7476).then(e.bind(e,37476));return{module:n,createChart:(e,o)=>{const a=n.createChart(e,o);return s(t,e,a.resize.bind(a)),a}}},4.1:async t=>{const n=await e.e(9631).then(e.bind(e,59631));return{module:n,createChart:(e,o)=>{const a=n.createChart(e,o);return s(t,e,a.resize.bind(a)),a}}},current:async()=>{const t=await e.e(7839).then(e.bind(e,47839));return{module:t,createChart:(n,e)=>{const o=t.createChart(n,e);return s(window,n,o.resize.bind(o)),o}}}},c="iframe_R_Fr";function y(t){const{script:n,iframeStyle:e}=t,{preferredVersion:a}=(0,h.g1)(),i=r&&r.length>0?r[0]:"",l=a?.name??i??"current",s=function(t){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${t}\n\t\t\t};\n\t\t<\/script>\n\t`}(n),y=o.useRef(null);return o.useEffect((()=>{const t=y.current,n=t?.contentWindow,e=t?.contentDocument;if(null===t||!n||!e)return;const o=async()=>{try{const{module:t,createChart:e}=await m[l](n);Object.assign(n,t),n.createChart=e,n.run?.()}catch(t){console.error(t)}};if(void 0!==n.run)o();else{const n=()=>{o(),t.removeEventListener("load",n)};t.addEventListener("load",n)}}),[s]),o.createElement("iframe",{key:n,ref:y,srcDoc:s,className:c,style:e})}var d=e(82840);const p=()=>`${Math.random().toString(36).slice(2,11)}`;function g(t){return"string"==typeof t?t:function(){const[t,n]=(0,o.useState)("");return(0,o.useEffect)((()=>n(p())),[]),t}()}const u=Object.keys(d.k.DARK);const w=t=>{const{chart:n,replaceThemeConstants:e,hideableCode:h,chartOnly:r,chartOnTop:s=!1,iframeStyle:m,replaceTabs:p=!0,codeUsage:w,...O}=t;let{children:f}=t;const{colorMode:C}=(0,l.G)(),L="dark"===C,_=g();if(e&&"string"==typeof f&&(f=function(t,n){const e=n?d.k.DARK:d.k.LIGHT;let o=t;for(const a of u)o=o.replace(new RegExp(a,"g"),`'${e[a]}'`);return o}(f,L)),p&&"string"==typeof f&&(f=f.replace(/\t/g,"    ")),f=f.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),n||h){const t=!r&&o.createElement(a.A,O,f),e=n&&o.createElement(i.A,{fallback:o.createElement("div",{className:c},"\xa0")},(()=>o.createElement(y,{script:f,iframeStyle:m}))),l=h&&o.createElement(o.Fragment,null,o.createElement("input",{id:_,type:"checkbox",className:"toggle-hidden-lines"}),o.createElement("label",{className:"toggle-label",htmlFor:_},"Show all code"));return s?o.createElement(o.Fragment,null,e,w,l,t):o.createElement(o.Fragment,null,w,l,t,e)}return o.createElement(a.A,O,f)}},82840:(t,n,e)=>{e.d(n,{k:()=>o});const o={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6715:t=>{t.exports=["4.1","4.0","3.8"]}}]);