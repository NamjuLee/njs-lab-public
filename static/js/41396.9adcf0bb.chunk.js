"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[41396],{41396:(t,e,s)=>{s.r(e),s.d(e,{Solution:()=>o});var i=s(55913);class o extends i.bb{constructor(t){super(t),this.graph=void 0,this.m=new d(0,0,0),this.needPopulate=!1,this.canvas.style.position="absolute";const e=document.createElement("button");e.textContent="run",e.style.position="absolute",e.onclick=()=>{this.needPopulate=!this.needPopulate},t.appendChild(e);const s=document.createElement("div");s.style.top="25px",s.style.position="absolute",s.innerHTML="1 Graph Object <br> 2 Graph with edge by closest nodes",t.appendChild(s),this.init()}init(){this.graph=new h,this.mouseClick(100,100),this.start()}populate(){const t=Math.random()*this.canvas.width,e=Math.random()*this.canvas.height;this.mouseClick(t,e)}render(t){this.needPopulate&&this.populate(),this.graph.render(t),t.beginPath(),t.arc(this.m.x,this.m.y,2,0,6.28),t.closePath(),t.fillStyle="#888",t.fill()}mouseClick(t,e){this.graph.addNode(t,e,0)}mouseMove(t,e){this.m.x=t,this.m.y=e}}class h{constructor(){this.nodes=[]}addNode(t,e,s){const i=new n(t,e,0);this.nodes.push(i),this.computeEdge(i)}computeEdge(t){let e,s=Number.MAX_VALUE,i=t;for(let o=0;o<this.nodes.length;++o){let t=this.nodes[o];if(i!==t){let o=a(i.vec,t.vec);s>o&&(s=o,e=t)}}i&&e&&i.addEdge(e)}render(t){this.nodes.forEach((e=>{e.render(t)}))}}class n{constructor(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.vec=void 0,this.r=5,this.nNode=[],this.vec=new d(t,e,s)}addEdge(t){void 0===this.findNeighborNode(t)&&this.nNode.push(t)}findNeighborNode(t){this.nNode.forEach((e=>{if(e===t)return t}))}render(t){this.nNode.forEach((e=>{t.beginPath(),t.moveTo(this.vec.x,this.vec.y),t.lineTo(e.vec.x,e.vec.y),t.strokeStyle="#0f0",t.stroke()})),t.beginPath(),t.arc(this.vec.x,this.vec.y,this.r,0,6.28),t.closePath(),t.fillStyle="#ff0000",t.fill()}}class d{constructor(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=e,this.z=s}}const a=(t,e)=>Math.sqrt(c(t,e)),c=(t,e)=>(t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)+(t.z-e.z)*(t.z-e.z)}}]);
//# sourceMappingURL=41396.9adcf0bb.chunk.js.map