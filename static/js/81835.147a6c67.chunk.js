"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[81835],{81835:(e,t,s)=>{s.r(t),s.d(t,{Renderer:()=>r,Solution:()=>d});var i=s(458),h=s(55913);class d{constructor(e){this.divHost=void 0,this.renderer=void 0,this.divHost=document.getElementById(e),this.divHost.style.display="flex",this.divHost.style.alignItems="center";const t=document.createElement("div");t.style.marginLeft="auto",t.style.marginRight="auto",t.style.backgroundColor="#555",t.style.width="1000px",t.style.height="600px",this.divHost.appendChild(t),this.renderer=new r(t)}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class r extends h.bb{constructor(e){super(e),this.delaunay=void 0,this.vs=[],this.selVec=void 0,this.canvas.style.position="relative",this.canvas.style.width="100%",this.canvas.style.height="100%",this.vs=[];for(let i=0;i<5;++i)this.vs.push(new o(Math.random()*this.canvas.width,Math.random()*this.canvas.height));this.compute();const t=new a;t.addVertex(0),t.addVertex(1),t.addVertex(2),t.addVertex(3),t.addVertex(4),t.addEdge(0,1,2),t.addEdge(0,3,6),t.addEdge(1,2,3),t.addEdge(1,3,8),t.addEdge(1,4,5),t.addEdge(2,4,7),t.addEdge(3,4,9);const s=t.primMST(0);console.log("Minimum Spanning Tree:"),s.forEach((e=>{console.log("".concat(e.vertex1," - ").concat(e.vertex2," : ").concat(e.weight))})),this.start()}mouseDown(e,t){const s=new i.h9(e,t);for(let i=0;i<this.vs.length;++i){if(this.vs[i].vec.Distance(s)<6)return void(this.selVec=this.vs[i])}}mouseDrag(e,t){this.selVec&&(this.selVec.vec.x=e,this.selVec.vec.y=t,this.compute())}mouseUp(e,t){this.selVec=void 0}mouseClick(e,t){this.vs.push(new o(e,t)),this.compute()}compute(){this.delaunay=new i.oc(this.vs.map((e=>e.vec)))}render(e){this.delaunay.DrawTriClass(e),this.vs.forEach((t=>{t.render(e)}))}}class o{constructor(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.vec=void 0,this.vec=new i.h9(e,t,s)}render(e){e.fillStyle="#f00",e.beginPath(),e.arc(this.vec.x,this.vec.y,6,0,2*Math.PI),e.closePath(),e.fill()}}class a{constructor(){this.vertices=void 0,this.edges=void 0,this.vertices=[],this.edges=[]}addVertex(e){this.vertices.push(e)}addEdge(e,t,s){this.edges.push({vertex1:e,vertex2:t,weight:s})}primMST(e){const t={},s=[];for(t[e]=!0;s.length<this.vertices.length-1;){let e=null;if(this.edges.forEach((s=>{(t[s.vertex1]&&!t[s.vertex2]||!t[s.vertex1]&&t[s.vertex2])&&(!e||s.weight<e.weight)&&(e=s)})),!e)break;s.push(e),t[e.vertex1]=!0,t[e.vertex2]=!0}return s}}}}]);
//# sourceMappingURL=81835.147a6c67.chunk.js.map