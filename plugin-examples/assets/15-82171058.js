var p=Object.defineProperty;var x=(a,t,i)=>t in a?p(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;var e=(a,t,i)=>(x(a,typeof t!="symbol"?t+"":t,i),i);import{T as m,C as f}from"./lightweight-charts.production-fd97a726.js";import{s as b,g as v}from"./sample-data-c7d89ab8.js";import{p as R,a as P}from"./positions-0a54307c.js";const w={...m,lineWidth:2};class W{constructor(){e(this,"_data",null);e(this,"_options",null)}draw(t,i){t.useBitmapCoordinateSpace(l=>this._drawImpl(l,i))}update(t,i){this._data=t,this._options=i}_drawImpl(t,i){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const l=this._options,h=this._data.bars.map(s=>({x:s.x,y:i(s.originalData.value)??0})),u=Math.min(this._options.lineWidth,this._data.barSpacing);t.context.save();const c=this._data.barSpacing,d=Math.floor(c/2),_=i(0);for(let s=this._data.visibleRange.from;s<this._data.visibleRange.to;s++){const o=h[s],n=R(o.x,t.horizontalPixelRatio,u),r=P(_??0,o.y,t.verticalPixelRatio);t.context.beginPath(),t.context.fillStyle=l.color,t.context.fillRect(n.position,r.position,n.length,r.length),t.context.arc(o.x*t.horizontalPixelRatio,o.y*t.verticalPixelRatio,d*t.horizontalPixelRatio,0,Math.PI*2),t.context.fill()}t.context.restore()}}class y{constructor(){e(this,"_renderer");this._renderer=new W}priceValueBuilder(t){return[0,t.value]}isWhitespace(t){return t.value===void 0}renderer(){return this._renderer}update(t,i){this._renderer.update(t,i)}defaultOptions(){return w}}const z=window.chart=f("chart",{autoSize:!0}),L=new y,B=z.addCustomSeries(L,{lineWidth:2}),C=b(v(100),10);B.setData(C);
