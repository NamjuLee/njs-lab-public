"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[82502,55756],{82502:(e,t,r)=>{r.r(t),r.d(t,{NLine:()=>h});var s=r(55756);class h extends s.GeometryBase{static GetLineFromVecs(e){let t=[];for(let r=0;r<e.length;++r)r===e.length-1?t.push(new h(e[r],e[0])):t.push(new h(e[r],e[r+1]));return t}static GetUnOverlapWithLines(e,t){let r=[],s=[];for(let o=0;o<e.length;++o){r.push(!1);for(let s=0;s<t.length;++s)h.IsOverlap(e[o],t[s])&&(r[o]=!0)}for(let h=0;h<r.length;++h)r[h]||s.push(e[h]);return s}static IsOverlap(e,t){return!(!e.p0.IsOverlap(t.p0)||!e.p1.IsOverlap(t.p1))||!(!e.p0.IsOverlap(t.p1)||!e.p1.IsOverlap(t.p0))}static RemoveOverlapWithLines(e){let t=[],r=[];for(let s=0;s<e.length;++s){let r=!1;t.push(0);for(let o=s+1;o<e.length;++o)r=h.IsOverlap(e[s],e[o]),r&&t[s]++}for(let s=0;s<t.length;++s)0===t[s]&&r.push(e[s]);return r}constructor(e,t){super(),this.p0=void 0,this.p1=void 0,this.p0=e,this.p1=t}Render(e){e.lineWidth=.5,e.strokeStyle="red",e.beginPath(),e.moveTo(this.p0.x,this.p0.y),e.lineTo(this.p1.x,this.p1.y),e.closePath(),e.stroke()}DistanceToPoint(e){let t=(this.p1.y-this.p0.y)/(this.p1.x-this.p0.x),r=this.p0.y-t*this.p0.x,s=[];return s.push(Math.abs(e.y-t*e.x-r)/Math.sqrt(Math.pow(t,2)+1)),s.push(Math.sqrt(Math.pow(e.x-this.p0.x,2)+Math.pow(e.y-this.p0.y,2))),s.push(Math.sqrt(Math.pow(e.x-this.p1.x,2)+Math.pow(e.y-this.p1.y,2))),s.sort(((e,t)=>e-t))[0]}GetLog(){throw new Error("Method not implemented.")}RenderPost(e){throw new Error("Method not implemented.")}IsMouseInside(e,t){throw new Error("Method not implemented.")}Translate(e,t){throw new Error("Method not implemented.")}Move(e,t){throw new Error("Method not implemented.")}Remove(){throw new Error("Method not implemented.")}Hide(){throw new Error("Method not implemented.")}}},55756:(e,t,r)=>{r.r(t),r.d(t,{GeometryBase:()=>h});var s=r(37415);class h{constructor(){this.vec=new s.NVector3(0,0,0)}}}}]);
//# sourceMappingURL=82502.5f4af06b.chunk.js.map