var P=Object.defineProperty;var x=(r,e,i)=>e in r?P(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var a=(r,e,i)=>(x(r,typeof e!="symbol"?e+"":e,i),i);import{T}from"./lightweight-charts.production-a4eeecc9.js";import{g as y}from"./sample-data-c7d89ab8.js";const f=40,b=3,m=2,S=10,u=12,v=4;class L{constructor(){a(this,"_data",null)}update(e){this._data=e}draw(e){e.useMediaCoordinateSpace(i=>{if(!this._data)return;const s=this._calculatePriceScale(i.mediaSize.height,this._data),n=s.reduce((d,h)=>Math.max(d,h.label.length),0),o="".padEnd(n,"0"),t=i.context,c=this._data.options.side==="left";t.font=`${u}px -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif`,t.textAlign="center",t.textBaseline="top";const l=t.measureText(o).width,_=c?S:i.mediaSize.width-S-l,w=_+b+Math.round(l/2);s.forEach(d=>{t.beginPath();const h=d.y-u/2;t.roundRect(_,h,l+b*2,u+2*m,v),t.fillStyle=this._data.options.backgroundColor,t.fill(),t.beginPath(),t.fillStyle=this._data.options.textColor,t.fillText(d.label,w,h+m,l)})})}_calculatePriceScale(e,i){const s=[],n=Math.round(f/4);let o=n;for(;o<=e-n;)s.push(o),o+=f;return s.map(c=>{const p=i.coordinateToPrice(c);return p===null?null:{label:i.priceFormatter.format(p),y:c}}).filter(c=>!!c)}}class C{constructor(){a(this,"_renderer");this._renderer=new L}renderer(){return this._renderer}update(e){this._renderer.update(e)}}const M={textColor:"rgb(0, 0, 0)",backgroundColor:"rgba(255, 255, 255, 0.6)",side:"left"};class V{constructor(e){a(this,"_paneViews");a(this,"_chart",null);a(this,"_series",null);a(this,"_requestUpdate");a(this,"_options");this._options={...M,...e},this._paneViews=[new C]}applyOptions(e){this._options={...this._options,...e},this._requestUpdate&&this._requestUpdate()}attached({chart:e,series:i,requestUpdate:s}){this._chart=e,this._series=i,this._requestUpdate=s}detached(){this._chart=null,this._series=null}updateAllViews(){if(!this._series||!this._chart)return;const e=t=>this._series.coordinateToPrice(t),i=t=>this._series.priceToCoordinate(t),s=this._series.priceFormatter(),n=this._options,o={coordinateToPrice:e,priceToCoordinate:i,priceFormatter:s,options:n};this._paneViews.forEach(t=>t.update(o))}paneViews(){return this._paneViews}}const z=window.chart=T("chart",{autoSize:!0,rightPriceScale:{visible:!1},grid:{horzLines:{visible:!1}}}),g=z.addAreaSeries({priceScaleId:"overlay"}),k=y();g.setData(k);g.attachPrimitive(new V({}));
