"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[72195],{72195:(e,t,s)=>{s.r(t),s.d(t,{Solution:()=>n});var i=s(55913);class n extends i.bb{constructor(e){super(e),this.divText=void 0,this.graph=void 0,this.m=new c(0,0,0),this.needPopulate=!1,this.canvas.style.position="absolute";const t=document.createElement("div");t.style.position="absolute",e.appendChild(t);const s=document.createElement("button");s.textContent="run",s.onclick=()=>{this.needPopulate=!this.needPopulate},t.appendChild(s);const i=document.createElement("div");i.textContent="N:0, E:0",t.appendChild(i),this.divText=i;const n=document.createElement("div");n.innerHTML="1 Edge splitting <br> 2 Drag a node ",t.appendChild(n),this.init()}init(){this.graph=new h,this.graph.divLog=this.divText,this.mouseClick(300,300),this.start()}populate(){const e=Math.random()*this.canvas.width,t=Math.random()*this.canvas.height;this.mouseClick(e,t)}render(e){this.needPopulate&&this.populate(),this.graph.render(e),e.beginPath(),e.arc(this.m.x,this.m.y,2,0,6.28),e.closePath(),e.fillStyle="#888",e.fill()}mouseClick(e,t){const s=this.graph.addNode(e,t,0);this.graph.addEdgeClosestByNode(s)}mouseDown(e,t){const s=this.graph.getNodeVec(e,t);this.graph.captured=s}mouseMove(e,t){this.m.x=e,this.m.y=t}mouseDrag(e,t){this.graph.captured&&(this.graph.captured.vec.x=e,this.graph.captured.vec.y=t)}mouseUp(){this.graph.mouseUp()}keyDown(e){console.log(e)}}class h{constructor(){this.divLog=void 0,this.captured=void 0,this.nodes=[],this.edges=[]}mouseUp(){this.captured&&this.captured.edges.forEach(((e,t)=>{setTimeout((()=>{this.edgeSplitByEdge(e)}),100)}))}updatePost(){this.divLog.textContent="N:".concat(this.nodes.length,", E:").concat(this.edges.length)}addNode(e,t,s){const i=new o(e,t,0);return this.nodes.push(i),this.updatePost(),i}addEdgeClosestByNode(e){const t=this.getNode(e);t&&this.addEdge(e,t)}addEdge(e,t){const s=new d(e,t);return e.edges.push(s),t.edges.push(s),this.edges.push(s),this.edgeSplitByEdge(s),this.updatePost(),s}edgeSplitByEdge(e){const t=[];for(let s=this.edges.length-1;s>-1;--s){const i=this.edges[s];if(e.n0!==i.n0&&e.n0!==i.n1&&e.n1!==i.n0&&e.n1!==i.n1){const s=l(e,i);if(s){const e=new o(s[0],s[1]);this.nodes.push(e),this.addEdgeSlipt(e,i.n0),this.addEdgeSlipt(e,i.n1),this.removeEdge(i),t.push(e)}}}if(t.length>0){let s=e.n0;t.push(e.n1);const i=t.map((t=>r(t.vec,e.n0.vec))),n=i.map(((e,t)=>t)).sort(((e,t)=>i[e]-i[t]));this.addEdgeSlipt(s,t[n[0]]);for(let e=0;e<n.length-1;++e)this.addEdgeSlipt(t[n[e]],t[n[e+1]]);this.removeEdge(e)}}addEdgeSlipt(e,t){const s=new d(e,t);return e.edges.push(s),t.edges.push(s),this.edges.push(s),s}removeEdge(e){e.n0.removeEdge(e),e.n1.removeEdge(e),this.edges.splice(this.edges.indexOf(e),1)}getNode(e){let t=Number.MAX_VALUE,s=-1;for(let i=0;i<this.nodes.length;++i){if(this.nodes[i]===e)continue;const n=this.nodes[i].vec,h=r(n,e.vec);t>h&&(t=h,s=i)}if(s>-1)return this.nodes[s]}getNodeVec(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,i=Number.MAX_VALUE,n=-1;const h=new c(e,t);for(let d=0;d<this.nodes.length;++d){const e=this.nodes[d].vec,t=r(e,h);i>t&&(i=t,n=d)}if(n>-1&&i<s)return this.nodes[n]}render(e){this.edges.forEach((t=>{t.render(e)})),this.nodes.forEach((t=>{t.render(e)}))}}class d{constructor(e,t){this.n0=void 0,this.n1=void 0,this.n0=e,this.n1=t}render(e){e.beginPath(),e.moveTo(this.n0.vec.x,this.n0.vec.y),e.lineTo(this.n1.vec.x,this.n1.vec.y),e.strokeStyle="#0f0",e.stroke()}}class o{constructor(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.vec=void 0,this.r=5,this.edges=[],this.vec=new c(e,t,s)}removeEdge(e){this.edges.splice(this.edges.indexOf(e),1)}render(e){e.beginPath(),e.arc(this.vec.x,this.vec.y,this.r,0,6.28),e.closePath(),e.fillStyle="#ff0000",e.fill()}}class c{constructor(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=e,this.y=t,this.z=s}}const r=(e,t)=>Math.sqrt(a(e,t)),a=(e,t)=>(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z),l=(e,t)=>g(e.n0,e.n1,t.n0,t.n1),g=(e,t,s,i)=>p(e.vec.x,e.vec.y,t.vec.x,t.vec.y,s.vec.x,s.vec.y,i.vec.x,i.vec.y),p=(e,t,s,i,n,h,d,o)=>{if(e===s&&t===i||n===d&&h===o)return;const c=(o-h)*(s-e)-(d-n)*(i-t);if(0===c)return;const r=((d-n)*(t-h)-(o-h)*(e-n))/c,a=((s-e)*(t-h)-(i-t)*(e-n))/c;if(r<0||r>1||a<0||a>1)return;return[e+r*(s-e),t+r*(i-t)]}}}]);
//# sourceMappingURL=72195.f298866b.chunk.js.map