"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[29563],{29563:(t,s,e)=>{e.r(s),e.d(s,{Renderer:()=>h,Solution:()=>d});var a=e(55913),i=(e(57980),e(16371));class d{constructor(t){this.divHost=void 0,this.renderer=void 0,this.divHost=document.getElementById(t);const s=document.createElement("div");this.divHost.appendChild(s),this.renderer=new h(s)}destroy(){this.renderer.destroy();try{for(;this.divHost&&this.divHost.lastElementChild;){const t=this.divHost.lastElementChild;this.divHost.removeChild(t)}}catch(t){console.error("Error removing child elements:",t)}}}class h extends a.bb{constructor(t){super(t),this.accList=[],this.lossList=[],this.init()}async init(){this.loadImg()}loadImg(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80";(0,a.t4)(t).then((t=>{t&&(t.onload=()=>{this.canvas.width=t.width,this.canvas.height=t.height,this.ctx.drawImage(t,0,0),n(this.ctx),this.start()})})),this.isStatic=!0}}const n=async t=>{const s=await i.zD({architecture:"ResNet50",outputStride:32,quantBytes:4}),e=await s.segmentPerson(t.canvas,{internalResolution:"medium",segmentationThreshold:.9,scoreTreshold:.9}),a=t.getImageData(0,0,t.canvas.width,t.canvas.height),d=t.createImageData(t.canvas.width,t.canvas.height);e.data.forEach(((t,s)=>{1===t&&(d.data[4*s]=a.data[4*s],d.data[4*s+1]=a.data[4*s+1],d.data[4*s+2]=a.data[4*s+2],d.data[4*s+3]=a.data[4*s+3])})),t.putImageData(d,0,0)}}}]);
//# sourceMappingURL=29563.efced1c1.chunk.js.map