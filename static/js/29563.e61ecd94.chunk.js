"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[29563],{29563:(t,a,s)=>{s.r(a),s.d(a,{Renderer:()=>n,Solution:()=>h});var e=s(55913),i=(s(57980),s(16371)),d=s(79307);class h{constructor(t){this.divHost=void 0,this.renderer=void 0,this.divHost=document.getElementById(t);const a=document.createElement("div");this.divHost.appendChild(a),this.renderer=new n(a)}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class n extends e.bb{constructor(t){super(t),this.accList=[],this.lossList=[],this.init()}async init(){d.xf.url?this.loadImg(d.xf.url):this.loadImg()}loadImg(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80";(0,e.t4)(t).then((t=>{t.onload=()=>{this.canvas.width=t.width,this.canvas.height=t.height,this.ctx.drawImage(t,0,0),o(this.ctx),this.start()}})),this.isStatic=!0}}const o=async t=>{const a=await i.zD({architecture:"ResNet50",outputStride:32,quantBytes:4}),s=await a.segmentPerson(t.canvas,{internalResolution:"medium",segmentationThreshold:.9,scoreTreshold:.9}),e=t.getImageData(0,0,t.canvas.width,t.canvas.height),d=t.createImageData(t.canvas.width,t.canvas.height);s.data.forEach(((t,a)=>{1===t&&(d.data[4*a]=e.data[4*a],d.data[4*a+1]=e.data[4*a+1],d.data[4*a+2]=e.data[4*a+2],d.data[4*a+3]=e.data[4*a+3])})),t.putImageData(d,0,0)}}}]);
//# sourceMappingURL=29563.e61ecd94.chunk.js.map