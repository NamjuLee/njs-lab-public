"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[2521],{42521:(e,t,s)=>{s.r(t),s.d(t,{Solution:()=>h});var i=s(55913);class h extends i.bb{constructor(e){super(e),this.divText=void 0,this.divSel=void 0,this.graphController=void 0,this.canvas.style.position="absolute";const t=document.createElement("div");t.style.position="absolute",e.appendChild(t);const s=document.createElement("button");s.textContent="run",s.onclick=()=>{this.graphController.needPopulate=!this.graphController.needPopulate},t.appendChild(s);const i=document.createElement("button");i.textContent="remove",i.onclick=()=>{this.graphController.removeSelection()},t.appendChild(i);const h=document.createElement("div");h.textContent="N:0, E:0",t.appendChild(h),this.divText=h;const d=document.createElement("div");d.textContent="undefined",t.appendChild(d),this.divSel=d;const o=document.createElement("div");o.innerHTML="1 Add a node on edge <br> 2 Remove a selected node ",t.appendChild(o),this.init()}init(){this.graphController=new d(this.canvas),this.graphController.divLog=this.divText,this.graphController.divSel=this.divSel,this.mouseClick(200,200),this.start()}render(e){this.graphController.render(e)}mouseClick(e,t){this.graphController.mouseClick(e,t)}mouseDown(e,t){this.graphController.mouseDown(e,t)}mouseMove(e,t){this.graphController.mouseMove(e,t)}mouseDrag(e,t){this.graphController.mouseDrag(e,t)}mouseUp(){this.graphController.mouseUp()}}class d{constructor(e){this.graph=void 0,this.canvas=void 0,this.divLog=void 0,this.divSel=void 0,this.needPopulate=!1,this.m=new c(0,0,0),this.nodePre=void 0,this.graph=new o,this.canvas=e}populate(){const e=Math.random()*this.canvas.width,t=Math.random()*this.canvas.height;this.mouseClick(e,t)}removeSelection(){this.graph.captured&&(this.graph.captured.remove(),this.graph.captured=void 0)}mouseDown(e,t){const s=this.graph.getNodeVec(e,t);this.graph.captured&&this.graph.captured!==s&&(this.nodePre=this.graph.captured),this.graph.captured=s}mouseClick(e,t){if(this.nodePre&&this.graph.captured)return void this.graph.addEdge(this.nodePre,this.graph.captured);const s=this.graph.getEdgeVec(e,t);if(s&&void 0===this.graph.captured){const e=this.graph.addNode(s.vec.x,s.vec.y);this.graph.edgeSplitByNode(e,s.edge)}else if(void 0===this.graph.captured){const s=this.graph.addNode(e,t,0);this.graph.addEdgeClosestByNode(s)}}mouseMove(e,t){this.m.x=e,this.m.y=t}mouseUp(){if(this.graph.captured&&"node"===this.graph.captured.type){this.graph.captured.edges.forEach(((e,t)=>{setTimeout((()=>{this.graph.edgeSplitByEdge(e)}),50)}))}}mouseDrag(e,t){if(this.graph.captured&&"node"===this.graph.captured.type){const s=this.graph.captured;s.vec.x=e,s.vec.y=t}}render(e){this.needPopulate&&this.populate(),this.graph.render(e),this.divLog.textContent=this.graph.log,this.graph.captured?this.divSel.textContent=this.graph.captured.type:this.divSel.textContent="undefined",e.beginPath(),e.arc(this.m.x,this.m.y,2,0,6.28),e.closePath(),e.fillStyle="#888",e.fill()}}class o{constructor(){this.log="",this.nodes=[],this.edges=[],this._captured=void 0}updatePost(){}get captured(){return this._captured}set captured(e){this._captured&&(this._captured.isSelected=!1),this._captured=e,e&&(this._captured.isSelected=!0)}addNode(e,t){const s=new r(this,e,t,0);return this.nodes.push(s),this.updatePost(),s}addEdgeClosestByNode(e){const t=this.getNode(e);t&&this.addEdge(e,t)}addEdge(e,t){const s=new n(e,t);return e.edges.push(s),t.edges.push(s),this.edges.push(s),this.edgeSplitByEdge(s),this.updatePost(),s}edgeSplitByNode(e,t){const s=t.n0,i=t.n1;this.addEdge(s,e),this.addEdge(e,i),this.removeEdge(t)}edgeSplitByEdge(e){const t=[];for(let s=this.edges.length-1;s>-1;--s){const i=this.edges[s];if(e.n0!==i.n0&&e.n0!==i.n1&&e.n1!==i.n0&&e.n1!==i.n1){const s=g(e,i);if(s){const e=new r(this,s[0],s[1]);this.nodes.push(e),this.addEdgeSlipt(e,i.n0),this.addEdgeSlipt(e,i.n1),this.removeEdge(i),t.push(e)}}}if(t.length>0){let s=e.n0;t.push(e.n1);const i=t.map((t=>a(t.vec,e.n0.vec))),h=i.map(((e,t)=>t)).sort(((e,t)=>i[e]-i[t]));this.addEdgeSlipt(s,t[h[0]]);for(let e=0;e<h.length-1;++e)this.addEdgeSlipt(t[h[e]],t[h[e+1]]);this.removeEdge(e)}}addEdgeSlipt(e,t){const s=new n(e,t);return e.edges.push(s),t.edges.push(s),this.edges.push(s),s}removeEdge(e){e.n0.removeEdge(e),e.n1.removeEdge(e),this.edges.splice(this.edges.indexOf(e),1)}removeNode(e){e.edges.forEach((e=>{setTimeout((()=>{this.removeEdge(e)}),50)})),this.nodes.splice(this.nodes.indexOf(e),1)}getNode(e){let t=Number.MAX_VALUE,s=-1;for(let i=0;i<this.nodes.length;++i){if(this.nodes[i]===e)continue;const h=this.nodes[i].vec,d=a(h,e.vec);t>d&&(t=d,s=i)}if(s>-1)return this.nodes[s]}getNodeVec(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,i=Number.MAX_VALUE,h=-1;const d=new c(e,t);for(let o=0;o<this.nodes.length;++o){const e=this.nodes[o].vec,t=a(e,d);i>t&&(i=t,h=o)}if(h>-1&&i<s)return this.nodes[h]}getEdgeVec(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8;const i=new c(e,t,0);for(let h=0;h<this.edges.length;++h){const e=this.edges[h],t=m(i,e.n0.vec,e.n1.vec);if(a(i,t)<s)return{edge:e,vec:t}}}render(e){this.log="N:".concat(this.nodes.length,", E:").concat(this.edges.length),this.edges.forEach((t=>{t.render(e)})),this.nodes.forEach((t=>{t.render(e)}))}}class n{constructor(e,t){this.type="edge",this.n0=void 0,this.n1=void 0,this.isSelected=!1,this.n0=e,this.n1=t}remove(){this.n0.removeEdge(this),this.n1.removeEdge(this)}render(e){this.isSelected&&(e.lineWidth=3,e.strokeStyle="#00f",e.beginPath(),e.moveTo(this.n0.vec.x,this.n0.vec.y),e.lineTo(this.n1.vec.x,this.n1.vec.y),e.stroke()),e.lineWidth=1,e.beginPath(),e.moveTo(this.n0.vec.x,this.n0.vec.y),e.lineTo(this.n1.vec.x,this.n1.vec.y),e.strokeStyle="#0f0",e.stroke()}}class r{constructor(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this.type="node",this.graph=void 0,this.vec=void 0,this.r=5,this.edges=[],this.isSelected=!1,this.graph=e,this.vec=new c(t,s,i)}remove(){this.graph.removeNode(this)}removeEdge(e){this.edges.splice(this.edges.indexOf(e),1)}render(e){e.beginPath(),e.arc(this.vec.x,this.vec.y,this.r,0,6.28),e.closePath(),e.fillStyle="#ff0000",e.fill(),this.isSelected&&(e.lineWidth=3,e.strokeStyle="#00f",e.stroke())}}class c{constructor(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=e,this.y=t,this.z=s}}const a=(e,t)=>Math.sqrt(l(e,t)),l=(e,t)=>(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z),g=(e,t)=>p(e.n0,e.n1,t.n0,t.n1),p=(e,t,s,i)=>u(e.vec.x,e.vec.y,t.vec.x,t.vec.y,s.vec.x,s.vec.y,i.vec.x,i.vec.y),u=(e,t,s,i,h,d,o,n)=>{if(e===s&&t===i||h===o&&d===n)return;const r=(n-d)*(s-e)-(o-h)*(i-t);if(0===r)return;const c=((o-h)*(t-d)-(n-d)*(e-h))/r,a=((s-e)*(t-d)-(i-t)*(e-h))/r;if(c<0||c>1||a<0||a>1)return;return[e+c*(s-e),t+c*(i-t)]},v=(e,t,s)=>e+s*(t-e),m=(e,t,s)=>{let i=s.x-t.x,h=s.y-t.y,d=((e.x-t.x)*i+(e.y-t.y)*h)/(i*i+h*h),o=v(t.x,s.x,d),n=v(t.y,s.y,d);return new c(o,n)}}}]);
//# sourceMappingURL=2521.edf8d3d2.chunk.js.map