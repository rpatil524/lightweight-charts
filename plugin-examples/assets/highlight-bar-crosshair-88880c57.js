var o=Object.defineProperty;var h=(s,t,a)=>t in s?o(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a;var e=(s,t,a)=>(h(s,typeof t!="symbol"?t+"":t,a),a);import{o as n}from"./lightweight-charts.production-fd97a726.js";import{p as c}from"./positions-0a54307c.js";class l{constructor(t){e(this,"_data");this._data=t}draw(t){this._data.visible&&t.useBitmapCoordinateSpace(a=>{const i=a.context;i.save();const r=c(this._data.x,a.horizontalPixelRatio,Math.max(1,this._data.barSpacing));i.fillStyle=this._data.color,i.fillRect(r.position,0,r.length,a.bitmapSize.height),i.restore()})}}class d{constructor(t){e(this,"_data");this._data=t}update(t){this._data=t}renderer(){return new l(this._data)}zOrder(){return"bottom"}}const _={color:"rgba(0, 0, 0, 0.2)"};class b{constructor(t){e(this,"_options");e(this,"_paneViews");e(this,"_data",{x:0,visible:!1,color:"rgba(0, 0, 0, 0.2)",barSpacing:6});e(this,"_attachedParams");e(this,"_moveHandler",t=>this._onMouseMove(t));this._options={..._,...t},this._paneViews=[new d(this._data)]}attached(t){this._attachedParams=t,this._setCrosshairMode(),t.chart.subscribeCrosshairMove(this._moveHandler)}detached(){const t=this.chart();t&&t.unsubscribeCrosshairMove(this._moveHandler)}paneViews(){return this._paneViews}updateAllViews(){this._paneViews.forEach(t=>t.update(this._data))}setData(t){var a;this._data=t,this.updateAllViews(),(a=this._attachedParams)==null||a.requestUpdate()}currentColor(){return this._options.color}chart(){var t;return(t=this._attachedParams)==null?void 0:t.chart}_setCrosshairMode(){const t=this.chart();if(!t)throw new Error("Unable to change crosshair mode because the chart instance is undefined");t.applyOptions({crosshair:{mode:n.Normal,vertLine:{visible:!1}}})}_barSpacing(){const t=this.chart();if(!t)return 6;const a=t.timeScale(),i=a.getVisibleLogicalRange();return i?a.width()/(i.to-i.from):6}_onMouseMove(t){const a=this.chart(),i=t.logical;if(!i||!a){this.setData({x:0,visible:!1,color:this.currentColor(),barSpacing:this._barSpacing()});return}const r=a.timeScale().logicalToCoordinate(i);this.setData({x:r??0,visible:r!==null,color:this.currentColor(),barSpacing:this._barSpacing()})}}export{b as C};
