import{C as h}from"./lightweight-charts.production-fd97a726.js";import{H as l}from"./heatmap-series-3da7cba4.js";import{g as d}from"./sample-data-c7d89ab8.js";import"./full-width-c985ee69.js";import"./positions-0a54307c.js";function p(o,a,t){const e=[];for(let n=0;n<1e4;n++){const s=o+a*(Math.sqrt(-2*Math.log(Math.random()))*Math.cos(2*Math.PI*Math.random()));e.push(s)}const r={};return e.forEach(n=>{const s=Math.floor(n/t)*t;r[s]=(r[s]||0)+1}),Object.entries(r).map(([n,s])=>({bin:parseFloat(n),frequency:s*(1+(Math.random()-.5)*.5)}))}function f(o,a,t){return o.map(e=>({cells:p(e.value,a,t).map(c=>({amount:c.frequency,low:c.bin,high:c.bin+t})),time:e.time}))}const m=window.chart=h("chart",{autoSize:!0}),i=d(250),u=f(i,20,5),g=u.reduce((o,a)=>{const t=a.cells.reduce((e,r)=>r.amount>e?r.amount:e,0);return t>o?t:o},0),D=o=>{const a=100*(o/g),t=155-a,e=0,r=155+a;return`rgba(${t}, ${e}, ${r}, ${.05+a*.01})`},M=new l,C=m.addCustomSeries(M,{cellShader:D,cellBorderWidth:0});C.setData(u);const b=m.addLineSeries({color:"black"});b.setData(i);
