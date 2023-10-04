var D=Object.defineProperty;var B=(s,t,e)=>t in s?D(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var c=(s,t,e)=>(B(s,typeof t!="symbol"?t+"":t,e),e);import{o as F,B as y}from"./lightweight-charts.production-e800dc8c.js";import{D as b}from"./delegate-be319f8b.js";import{f as X,c as R}from"./time-a9f4d58b.js";import{p as O}from"./positions-0a54307c.js";class V{constructor(t){c(this,"_data");this._data=t}draw(t){this._data.length&&t.useBitmapCoordinateSpace(e=>{const i=e.context;this._data.forEach(o=>{const n=O(o.x,e.horizontalPixelRatio,1);i.fillStyle=o.color,i.fillRect(n.position,o.topMargin*e.verticalPixelRatio,n.length,e.bitmapSize.height),o.priceY&&(i.beginPath(),i.ellipse(o.x*e.horizontalPixelRatio,o.priceY*e.verticalPixelRatio,6*e.horizontalPixelRatio,6*e.verticalPixelRatio,0,0,Math.PI*2),i.fillStyle=o.markerBorderColor,i.fill(),i.beginPath(),i.ellipse(o.x*e.horizontalPixelRatio,o.priceY*e.verticalPixelRatio,4*e.horizontalPixelRatio,4*e.verticalPixelRatio,0,0,Math.PI*2),i.fillStyle=o.markerColor,i.fill())})})}}class Y{constructor(t){c(this,"_data");this._data=t}update(t){this._data=t}renderer(){return new V(this._data)}zOrder(){return"top"}}const a={background:"#ffffff",fontFamily:"-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif",borderRadius:5,shadowColor:"rgba(0, 0, 0, 0.2)",shadowBlur:4,shadowOffsetX:0,shadowOffsetY:2,itemBlockPadding:5,itemInlinePadding:10,tooltipLineFontWeights:[590,400,400],tooltipLineFontSizes:[14,12,12],tooltipLineLineHeights:[18,16,16],tooltipLineColors:["#131722","#787B86","#787B86"],deltaFontWeights:[590,400],deltaFontSizes:[14,12],deltaLineHeights:[18,16]};function x(s,t,e,i){let o=0;return s.save(),t.forEach((n,r)=>{s.font=`${i[r]} ${e[r]}px ${a.fontFamily}`;const h=s.measureText(n);h.width>o&&(o=h.width)}),s.restore(),o+a.itemInlinePadding*2}function C(s,t){let e=a.itemBlockPadding*1.5;return s.forEach((i,o)=>{e+=t[o]}),e}function W(s){const t=s.topSpacing,e=s.tooltips.length<1?0:C(s.tooltips[0].lineContent,a.tooltipLineLineHeights),i=s.tooltips.length<2?0:C(s.tooltips[1].lineContent,a.tooltipLineLineHeights),o=C([s.deltaTopLine,s.deltaBottomLine].filter(Boolean),a.deltaLineHeights),n=Math.max(e,i,o),r=Math.round(a.itemBlockPadding+(n-e)/2),h=Math.round(a.itemBlockPadding+(n-i)/2),l=Math.round(a.itemBlockPadding+(n-o)/2);return{mainY:t,mainHeight:n,leftTooltipTextY:r,rightTooltipTextY:h,deltaTextY:l}}function P(s,t,e,i){const o=s.tooltips[t].lineContent,n=x(e,o,a.tooltipLineFontSizes,a.tooltipLineFontWeights),r=n/2,h=Math.min(Math.max(0,s.tooltips[t].x-r),i.width-n),l=h,d=i.width-n-l;return{x:h,leftSpace:l,rightSpace:d,width:n}}function k(s,t,e){const i=P(s,0,t,e);if(s.tooltips.length<2)return{mainX:Math.round(i.x),mainWidth:Math.round(i.width),leftTooltipCentreX:Math.round(i.x+i.width/2),rightTooltipCentreX:0,deltaCentreX:0,deltaWidth:0};const o=P(s,1,t,e),r=(s.tooltips.length<2?0:x(t,[s.deltaTopLine,s.deltaBottomLine].filter(Boolean),a.deltaFontSizes,a.deltaFontWeights))+i.x+i.width-o.x;if(r>0){const d=r/2;if(i.leftSpace>=d&&o.rightSpace>=d)i.x-=d,o.x+=d;else if(i.leftSpace<o.rightSpace){const u=r-i.leftSpace;i.x-=i.leftSpace,o.x+=u}else{const u=r-o.rightSpace;i.x=Math.max(0,i.x-u),o.x+=o.rightSpace}}const h=Math.round(o.x-i.x-i.width),l=Math.round(o.x-h/2);return{mainX:Math.round(i.x),mainWidth:Math.round(i.width+h+o.width),leftTooltipCentreX:Math.round(i.x+i.width/2),rightTooltipCentreX:Math.round(o.x+o.width/2),deltaCentreX:l,deltaWidth:h}}function H(s,t,e){return{...W(s),...k(s,t,e)}}class z{constructor(t){c(this,"_data");this._data=t}draw(t){this._data.tooltips.length<1||t.useMediaCoordinateSpace(e=>{const i=e.context,o=H(this._data,i,e.mediaSize);this._drawMainTooltip(i,o),this._drawDeltaArea(i,o),this._drawTooltipsText(i,o),this._drawDeltaText(i,o)})}_drawMainTooltip(t,e){t.save(),t.fillStyle=a.background,t.shadowBlur=a.shadowBlur,t.shadowOffsetX=a.shadowOffsetX,t.shadowOffsetY=a.shadowOffsetY,t.shadowColor=a.shadowColor,t.beginPath(),t.roundRect(e.mainX,e.mainY,e.mainWidth,e.mainHeight,a.borderRadius),t.fill(),t.restore()}_drawDeltaArea(t,e){t.save(),t.fillStyle=this._data.deltaBackgroundColor,t.beginPath();const i=Math.round(e.deltaWidth/2);t.fillRect(e.deltaCentreX-i,e.mainY,e.deltaWidth,e.mainHeight),t.restore()}_drawTooltipsText(t,e){t.save(),this._data.tooltips.forEach((i,o)=>{const n=o===0?e.leftTooltipCentreX:e.rightTooltipCentreX;let r=e.mainY+(o===0?e.leftTooltipTextY:e.rightTooltipTextY);i.lineContent.forEach((h,l)=>{t.font=`${a.tooltipLineFontWeights[l]} ${a.tooltipLineFontSizes[l]}px ${a.fontFamily}`,t.fillStyle=a.tooltipLineColors[l],t.textAlign="center",t.textBaseline="top",t.fillText(h,n,r),r+=a.tooltipLineLineHeights[l]})}),t.restore()}_drawDeltaText(t,e){t.save();const i=e.deltaCentreX;let o=e.mainY+e.deltaTextY;[this._data.deltaTopLine,this._data.deltaBottomLine].forEach((r,h)=>{t.font=`${a.deltaFontWeights[h]} ${a.deltaFontSizes[h]}px ${a.fontFamily}`,t.fillStyle=this._data.deltaTextColor,t.textAlign="center",t.textBaseline="top",t.fillText(r,i,o),o+=a.deltaLineHeights[h]}),t.restore()}}class ${constructor(t){c(this,"_data");this._data={...A,...t}}update(t){this._data={...this._data,...t}}renderer(){return new z(this._data)}zOrder(){return"top"}}const A={deltaTopLine:"",deltaBottomLine:"",deltaBackgroundColor:"#ffffff",deltaTextColor:"#",topSpacing:20,tooltips:[]};function T(s,t,e){const i=s.getBoundingClientRect(),o=e-i.left-t.priceScale("left").width();return o<0||o>t.timeScale().width()?null:o}function L(s,t){return t===null?null:s.timeScale().coordinateToLogical(t)}function S(s,t){const e=s.getBoundingClientRect();return t-e.y}class U{constructor(t,e){c(this,"_chartElement");c(this,"_chart");c(this,"_options");c(this,"_mouseState",{drawing:!1,startLogical:null,startCoordinate:null,startX:null});c(this,"_touchLeave",new b);c(this,"_touchInteraction",new b);c(this,"_unSubscribers",[]);this._options=e,this._chart=t,this._chartElement=t.chartElement(),this._addMouseEventListener(this._chartElement,"mouseleave",this._mouseLeave),this._addMouseEventListener(this._chartElement,"mousemove",this._mouseMove),this._addMouseEventListener(this._chartElement,"mousedown",this._mouseDown),this._addMouseEventListener(this._chartElement,"mouseup",this._mouseUp),this._addTouchEventListener(this._chartElement,"touchstart",this._touchOther),this._addTouchEventListener(this._chartElement,"touchmove",this._touchMove),this._addTouchEventListener(this._chartElement,"touchcancel",this._touchFinish),this._addTouchEventListener(this._chartElement,"touchend",this._touchFinish)}destroy(){this._touchLeave.destroy(),this._touchInteraction.destroy(),this._unSubscribers.forEach(t=>{t()}),this._unSubscribers=[]}leave(){return this._touchLeave}move(){return this._touchInteraction}_addMouseEventListener(t,e,i){const o=i.bind(this);t.addEventListener(e,o);const n=()=>{t.removeEventListener(e,o)};this._unSubscribers.push(n)}_addTouchEventListener(t,e,i){const o=i.bind(this);t.addEventListener(e,o);const n=()=>{t.removeEventListener(e,o)};this._unSubscribers.push(n)}_mouseLeave(){this._mouseState.drawing=!1,this._touchLeave.fire()}_mouseMove(t){const e=T(this._chartElement,this._chart,t.clientX),i=L(this._chart,e),o=S(this._chartElement,t.clientY),n=[];this._options.simulateMultiTouchUsingMouseDrag&&this._mouseState.drawing&&this._mouseState.startLogical!==null&&this._mouseState.startCoordinate!==null&&this._mouseState.startX!==null&&n.push({x:this._mouseState.startX,index:this._mouseState.startLogical,y:this._mouseState.startCoordinate}),i!==null&&o!==null&&e!==null&&n.push({x:e,index:i,y:o});const r={points:n};this._touchInteraction.fire(r)}_mouseDown(t){this._mouseState.startX=T(this._chartElement,this._chart,t.clientX),this._mouseState.startLogical=L(this._chart,this._mouseState.startX),this._mouseState.startCoordinate=S(this._chartElement,t.clientY),this._mouseState.drawing=this._mouseState.startLogical!==null&&this._mouseState.startCoordinate!==null}_mouseUp(){this._mouseState.drawing=!1}_touchMove(t){t.preventDefault();const e=[];for(let o=0;o<t.targetTouches.length;o++){const n=t.targetTouches.item(o);if(n!==null){const r=T(this._chartElement,this._chart,n.clientX),h=L(this._chart,r),l=S(this._chartElement,n.clientY);r!==null&&l!==null&&h!==null&&e.push({x:r,index:h,y:l})}}const i={points:e};this._touchInteraction.fire(i)}_touchFinish(t){if(t.preventDefault(),t.targetTouches.length<1){this._touchLeave.fire();return}}_touchOther(t){t.preventDefault()}}const I={lineColor:"rgba(0, 0, 0, 0.2)",priceExtractor:s=>s.value!==void 0?[s.value,s.value.toFixed(2)]:s.close!==void 0?[s.close,s.close.toFixed(2)]:[0,""],showTime:!1,topOffset:20};class N{constructor(t){c(this,"_options");c(this,"_crosshairPaneView");c(this,"_deltaTooltipPaneView");c(this,"_paneViews");c(this,"_crosshairData",[]);c(this,"_tooltipData");c(this,"_attachedParams");c(this,"_touchChartEvents",null);c(this,"_activeRange",new b);this._options={...I,...t},this._tooltipData={topSpacing:this._options.topOffset},this._crosshairPaneView=new Y(this._crosshairData),this._deltaTooltipPaneView=new $(this._tooltipData),this._paneViews=[this._crosshairPaneView,this._deltaTooltipPaneView]}attached(t){this._attachedParams=t,this._setCrosshairMode(),this._touchChartEvents=new U(t.chart,{simulateMultiTouchUsingMouseDrag:!0}),this._touchChartEvents.leave().subscribe(()=>{this._activeRange.fire(null),this._hideCrosshair()},this),this._touchChartEvents.move().subscribe(e=>{this._showTooltip(e)},this)}detached(){this._touchChartEvents&&(this._touchChartEvents.leave().unsubscribeAll(this),this._touchChartEvents.move().unsubscribeAll(this),this._touchChartEvents.destroy()),this._activeRange.destroy()}paneViews(){return this._paneViews}updateAllViews(){this._crosshairPaneView.update(this._crosshairData),this._deltaTooltipPaneView.update(this._tooltipData)}setData(t,e){var i;this._crosshairData=t,this._tooltipData=e,this.updateAllViews(),(i=this._attachedParams)==null||i.requestUpdate()}currentColor(){return this._options.lineColor}chart(){var t;return(t=this._attachedParams)==null?void 0:t.chart}series(){var t;return(t=this._attachedParams)==null?void 0:t.series}applyOptions(t){this._options={...this._options,...t},this._tooltipData.topSpacing=this._options.topOffset}activeRange(){return this._activeRange}_setCrosshairMode(){const t=this.chart();if(!t)throw new Error("Unable to change crosshair mode because the chart instance is undefined");t.applyOptions({crosshair:{mode:F.Magnet,vertLine:{visible:!1,labelVisible:!1},horzLine:{visible:!1,labelVisible:!1}}});const e=this.series();e&&e.applyOptions({crosshairMarkerVisible:!1})}_hideTooltip(){this.setData([],{tooltips:[]})}_hideCrosshair(){this._hideTooltip()}_chartBackgroundColor(){const t=this.chart();if(!t)return"#FFFFFF";const e=t.options().layout.background;return e.type===y.Solid?e.color:e.topColor}_seriesLineColor(){const t=this.series();if(!t)return"#888";const e=t.options();return e.color||e.lineColor||"#888"}_showTooltip(t){const e=this.series();if(t.points.length<1||!e){this._hideCrosshair();return}const i=this._tooltipData.topSpacing??20,o=this._chartBackgroundColor(),n=this._seriesLineColor(),r=[],h=[],l=[];let d=t.points[0].index;for(let u=0;u<Math.min(2,t.points.length);u++){const p=t.points[u],g=e.dataByIndex(p.index);if(g){const[m,w]=this._options.priceExtractor(g);l.push([m,p.index]);const f=e.priceToCoordinate(m)??-1e3,[E,M]=X(g.time?R(g.time):void 0),v={x:p.x,lineContent:[w,E]};this._options.showTime&&v.lineContent.push(M),p.index>=d?r.push(v):r.unshift(v),h.push({x:p.x,priceY:f,visible:!0,color:this.currentColor(),topMargin:i,markerColor:n,markerBorderColor:o})}}const _={tooltips:r};if(l.length>1){const u=l[1][1]>l[0][1],p=u?l[0][0]:l[1][0],m=(u?l[1][0]:l[0][0])-p,w=100*m/p,f=m>=0;_.deltaTopLine=(f?"+":"")+m.toFixed(2),_.deltaBottomLine=(f?"+":"")+w.toFixed(2)+"%",_.deltaBackgroundColor=f?"rgb(4,153,129, 0.2)":"rgb(239,83,80, 0.2)",_.deltaTextColor=f?"rgb(4,153,129)":"rgb(239,83,80)",this._activeRange.fire({from:l[u?0:1][1]+1,to:l[u?1:0][1]+1,positive:f})}else _.deltaTopLine="",_.deltaBottomLine="",this._activeRange.fire(null);this.setData(h,_)}}export{N as D};
