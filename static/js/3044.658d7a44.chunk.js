"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[3044],{3044:(t,i,s)=>{s.r(i),s.d(i,{InteractivePoint:()=>o,Line:()=>r,Point:()=>n,Solution:()=>e});var h=s(55913);class e extends h.J0{constructor(t){super(t),this.pts=[],this.lns=[],this.path=void 0,this.previousPt=void 0,this.ptStart=void 0,this.ptEnd=void 0,this.captured=void 0}initPost(){this.mView.on("drag",(t=>{t.stopPropagation()})),this.mView.navigation.mouseWheelZoomEnabled=!1,this.center(-71.102761,42.366946),this.zoom(15),this.ptStart=new o(315,90),this.ptEnd=new o(1268,1120),this.start()}render(t){if(this.lns.map((i=>i.render(t,this.time))),this.pts.map((i=>i.render(t,this.time))),this.path){t.beginPath(),t.moveTo(this.path[0].x,this.path[0].y);for(let i=1;i<this.path.length;++i)t.lineTo(this.path[i].x,this.path[i].y);t.lineWidth=2,t.strokeStyle="#f00",t.stroke()}this.ptStart.Render(t,this.time),this.ptEnd.Render(t,this.time)}mouseDown(t,i){this.ptStart.inInside(t,i)?this.captured=this.ptStart:this.ptEnd.inInside(t,i)&&(this.captured=this.ptEnd)}mouseUp(t,i){this.captured=void 0}mouseDrag(t,i){}mouseClick(t,i){if(void 0===this.previousPt){const s=new n(t,i);this.previousPt=s,this.pts.push(s)}else{const s=new n(t,i);this.pts.push(s),this.lns.push(new r(this.previousPt,s)),this.previousPt=void 0}}mouseMove(t,i){this.captured&&(this.captured.x=t,this.captured.y=i)}}class o{constructor(t,i){this.x=void 0,this.y=void 0,this.r=10,this.x=t,this.y=i}Render(t,i){t.beginPath(),t.arc(this.x,this.y,Math.sin(i)+this.r,0,2*Math.PI),t.closePath(),t.fillStyle="#00f",t.fill(),t.strokeStyle="#fff",t.stroke()}inInside(t,i){return(0,h.hI)(t,i,0,this.x,this.y,0)<this.r+2}}class r{constructor(t,i){this.p0=void 0,this.p1=void 0,this.lineWidth=2,this.p0=t,this.p1=i}render(t,i){t.beginPath(),t.moveTo(this.p0.x,this.p0.y),t.lineTo(this.p1.x,this.p1.y),t.closePath(),t.lineWidth=this.lineWidth,t.strokeStyle="#fff",t.stroke()}}class n{constructor(t,i){this.x=void 0,this.y=void 0,this.z=0,this.r=6,this.x=t,this.y=i}render(t,i){t.beginPath(),t.arc(this.x,this.y,Math.sin(i)+this.r,0,2*Math.PI),t.closePath(),t.fillStyle="#0f0",t.fill(),t.strokeStyle="#fff",t.stroke()}}}}]);
//# sourceMappingURL=3044.658d7a44.chunk.js.map