"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[48195],{48195:(e,t,s)=>{s.r(t),s.d(t,{Solution:()=>J});var n=s(55913);class i{constructor(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=e,this.y=t,this.z=s}}const r=(e,t)=>Math.sqrt(o(e,t)),o=(e,t)=>(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z),h=(e,t,s)=>e+s*(t-e),d=(e,t,s)=>{let n=s.x-t.x,r=s.y-t.y,o=((e.x-t.x)*n+(e.y-t.y)*r)/(n*n+r*r),d=h(t.x,s.x,o),c=h(t.y,s.y,o);return new i(d,c)};class c{constructor(){this.type="node",this.isSelected=!1,this.id=0,this.visited=!1,this.data=[]}}class a{constructor(e){this.graphSystem=void 0,this.nodes=[],this.edges=[],this.graphSystem=e}}class l extends c{constructor(e,t){super(),this.n0=void 0,this.n1=void 0,this.length=-1,this.type="edge",this.n0=e,this.n1=t}getLength(){return this.length=r(this.n0.vec,this.n1.vec),this.length}toJSON(){return{id:this.id,n0:this.n0.id,n1:this.n1.id,data:this.data}}remove(){this.n0.removeEdge(this),this.n1.removeEdge(this)}}class p extends c{constructor(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;super(),this.graph=void 0,this.vec=void 0,this.edges=[],this.r=5,this.networkDistance=-1,this.countVisit=0,this.graph=e,this.type="node",this.vec=new i(t,s,n)}reset(){this.networkDistance=-1,this.countVisit=0,this.visited=!1}toJSON(){return{id:this.id,vec:{x:this.vec.x,y:this.vec.y,z:this.vec.z},data:this.data}}remove(){this.graph.graphSystem.removeNode(this)}removeEdge(e){this.edges.splice(this.edges.indexOf(e),1)}}const g=(e,t,s,n,i,r)=>Math.sqrt((e-n)*(e-n)+(t-i)*(t-i)+(s-r)*(s-r)),u=function(e,t){return g(e.vec.x,e.vec.y,e.vec.z,t.vec.x,t.vec.y,t.vec.z)},m=function(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;void 0===s&&(s=u);for(let r=0;r<e.length;++r)e[r].reset();let i=[t];t.networkDistance=0;for(let r=0;r<1e7&&0!==i.length;++r){let e=i[0];i.shift();for(let t=0;t<e.edges.length;++t){const r=e.edges[t],o=e===r.n0?r.n1:r.n0,h=s(e,o,n),d=e.networkDistance+h;(-1===o.networkDistance||d<o.networkDistance)&&(o.networkDistance=d,i.push(o))}}},v=(e,t)=>{let s=0,n=0,i=[];if(-1!==t.networkDistance){i.push(e[t.id]);let r=t;for(s=0;s<1e5;++s){let t=r;for(t.countVisit++,n=0;n<r.edges.length;++n){const e=r.edges[n],s=r===e.n0?e.n1:e.n0;s.networkDistance<t.networkDistance&&(t=s)}if(t===r)break;r=t,i.push(e[r.id])}}return i};class y{}y.TYPE={Manhattan:"Manhattan  ",Euclidean:"Euclidean "},y.strength=.01,y.distanceManhattan=(e,t,s,n,i,r)=>Math.abs(e-n)+Math.abs(t-i)+Math.abs(s-r),y.distanceEuclidean=(e,t,s,n,i,r)=>Math.sqrt((e-n)*(e-n)+(t-i)*(t-i)+(s-r)*(s-r)),y.gePath=(e,t,s)=>{y.typeHeuristic=y.distanceEuclidean,s===y.TYPE.Manhattan&&(y.typeHeuristic=y.distanceManhattan);const n=[e],i=[];let r,o=100;for(;o--;)if(r=y.propagation(n,i,t),void 0!==r&&r.length)return r;return r},y.path=[],y.propagation=(e,t,s)=>{if(!(e.length>0))return y.path;{let n=0;for(let t=0;t<e.length;t++)e[t].f<e[n].f&&(n=t),e[t].f===e[n].f&&e[t].g>e[n].g&&(n=t);let i=e[n];if(i===s)return[i,i.previous,...y.path];y.path=[];let r=i;for(;r.previous&&(y.path.push(r.previous),r=r.previous,r.previous!==y.path[y.path.length-2]););e.splice(e.indexOf(i),1),t.push(i);let o=i.neighbors;for(let h=0;h<o.length;h++){let n=o[h];if(!t.includes(n)&&!n.blocked){let t=i.g+y.heuristic(n,i)*y.strength;if(e.includes(n))continue;e.push(n),n.g=t,n.h=y.heuristic(n,s),n.f=n.g+n.h,n.previous=i}}}},y.typeHeuristic=void 0,y.heuristic=(e,t)=>y.typeHeuristic(e.x,e.y,e.z,t.x,t.y,t.z);class S{constructor(e,t,s){this.id=-1,this.f=0,this.h=0,this.g=0,this.x=0,this.y=0,this.z=0,this.neighbors=[],this.edges=[],this.previous=void 0,this.blocked=!1,this.x=e,this.y=t,this.z=s}}class f{constructor(e,t){this.id=-1,this.n0=void 0,this.n1=void 0,this.n0=e,this.n1=t,this.n0.edges.push(this),this.n1.edges.push(this),e.neighbors.push(t),t.neighbors.push(e)}}class x{constructor(){this.nodes=[],this.edges=[],this.nodes=[],this.edges=[]}addVertex(e){this.nodes.push(e)}addEdge(e,t,s){this.edges.push({n0:e,n1:t,weight:s})}primMST(e){const t={},s=[];for(t[e]=!0;s.length<this.nodes.length-1;){let e=null;if(this.edges.forEach((s=>{(t[s.n0]&&!t[s.n1]||!t[s.n0]&&t[s.n1])&&(!e||s.weight<e.weight)&&(e=s)})),!e)break;s.push(e),t[e.n0]=!0,t[e.n1]=!0}return s}}class E{constructor(){this.graph=void 0,this.pathMST=void 0,this.nodePre=void 0,this._captured=void 0,this.graph=new a(this)}get captured(){return this._captured}set captured(e){this._captured&&(this._captured.isSelected=!1),this._captured=e,e&&(this._captured.isSelected=!0)}resetCapture(){this.captured=void 0,this.nodePre=void 0}addNode(e,t){const s=new p(this.graph,e,t,0);return this.graph.nodes.push(s),this.resetCapture(),s}addEdge(e,t){if(e===t)return;if(this.findEdgeByNodes(e,t))return;const s=new l(e,t);return e.edges.push(s),t.edges.push(s),this.graph.edges.push(s),this.edgeSplitByEdge(s),this.resetCapture(),s}addEdgeByClosestNode(e){const t=this.findNode(e);t&&this.addEdge(e,t),this.resetCapture()}addEdgeSplit(e,t){const s=new l(e,t);return e.edges.push(s),t.edges.push(s),this.graph.edges.push(s),s}edgeSplitByNode(e,t){const s=t.n0,n=t.n1;this.addEdge(s,e),this.addEdge(e,n),this.removeEdge(t),this.resetCapture()}edgeSplitByNodeEdges(e){const t=[];let s=e.edges.length;for(let n=0;n<s;++n){const s=e.edges[n],i=[];for(let e=this.graph.edges.length-1;e>-1;--e){const t=this.graph.edges[e];if(s.n0!==t.n0&&s.n0!==t.n1&&s.n1!==t.n0&&s.n1!==t.n1){const e=C(s,t);if(e){const s=new p(this.graph,e[0],e[1]);this.graph.nodes.push(s),this.addEdgeSplit(s,t.n0),this.addEdgeSplit(s,t.n1),this.removeEdge(t),i.push(s)}}}if(i.length>0){let e=s.n0;i.push(s.n1);const n=i.map((e=>r(e.vec,s.n0.vec))),o=n.map(((e,t)=>t)).sort(((e,t)=>n[e]-n[t]));this.addEdgeSplit(e,i[o[0]]);for(let t=0;t<o.length-1;++t)this.addEdgeSplit(i[o[t]],i[o[t+1]]);t.push(s),this.graph.edges.splice(this.graph.edges.indexOf(s),1)}}t.forEach((e=>{e.n0.removeEdge(e),e.n1.removeEdge(e)})),this.updateID()}edgeSplitByEdge(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const s=[];for(let n=this.graph.edges.length-1;n>-1;--n){const t=this.graph.edges[n];if(e.n0!==t.n0&&e.n0!==t.n1&&e.n1!==t.n0&&e.n1!==t.n1){const n=C(e,t);if(n){const e=new p(this.graph,n[0],n[1]);this.graph.nodes.push(e),this.addEdgeSplit(e,t.n0),this.addEdgeSplit(e,t.n1),this.removeEdge(t),s.push(e)}}}if(s.length>0){let t=e.n0;s.push(e.n1);const n=s.map((t=>r(t.vec,e.n0.vec))),i=n.map(((e,t)=>t)).sort(((e,t)=>n[e]-n[t]));this.addEdgeSplit(t,s[i[0]]);for(let e=0;e<i.length-1;++e)this.addEdgeSplit(s[i[e]],s[i[e+1]]);this.removeEdge(e)}t&&this.updateID()}removeNode(e){e.edges.forEach((t=>{t.n0===e?t.n1.removeEdge(t):t.n0.removeEdge(t),this.graph.edges.splice(this.graph.edges.indexOf(t),1)})),this.graph.nodes.splice(this.graph.nodes.indexOf(e),1),this.updateID(),this.resetCapture()}removeEdge(e){e.n0.removeEdge(e),e.n1.removeEdge(e),this.graph.edges.splice(this.graph.edges.indexOf(e),1)}findNode(e){let t=Number.MAX_VALUE,s=-1;for(let n=0;n<this.graph.nodes.length;++n){if(this.graph.nodes[n]===e)continue;const i=this.graph.nodes[n].vec,o=r(i,e.vec);t>o&&(t=o,s=n)}if(s>-1)return this.graph.nodes[s]}findNodeVec(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,n=Number.MAX_VALUE,o=-1;const h=new i(e,t);for(let i=0;i<this.graph.nodes.length;++i){const e=this.graph.nodes[i].vec,t=r(e,h);n>t&&(n=t,o=i)}if(o>-1&&n<s)return this.graph.nodes[o]}findEdgeVec(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8;const n=new i(e,t,0);for(let i=0;i<this.graph.edges.length;++i){const e=this.graph.edges[i],t=d(n,e.n0.vec,e.n1.vec);if(r(n,t)<s)return{edge:e,vec:t}}}findEdgeByEdge(e){return this.findEdgeByNodes(e.n0,e.n1)}findEdgeByNodes(e,t){for(let s=0;s<this.graph.edges.length;++s){const n=this.graph.edges[s];if(e===n.n0&&t===n.n1||e===n.n1&&t===n.n0)return n}}getEdgeByTwoNode(e,t){for(let s=0;s<this.graph.edges.length;++s){const n=this.graph.edges[s];if(n.n0===e&&n.n1===t||n.n0===t&&n.n1===e)return n}}mergeTwoNodes(e,t){const s=[];for(let n=0;n<t.edges.length;++n){const e=t.edges[n];e.n0===t?s.push(e.n1):s.push(e.n0)}t.remove(),s.forEach((t=>{this.getEdgeByTwoNode(e,t)||this.addEdge(e,t)}))}updateID(){for(let e=0;e<this.graph.nodes.length;++e)this.graph.nodes[e].id=e;for(let e=0;e<this.graph.edges.length;++e)this.graph.edges[e].id=e}resetVisit(){for(let e=0;e<this.graph.nodes.length;++e)this.graph.nodes[e].visited=!1}computePath(){return k(this.graph)}computePathAStar(){return b(this.graph)}computeMST(){const e=N(this.graph);return this.pathMST=e,e}computeBFS(){this.resetVisit();return(e=>{let t=0,s=[],n=[];for(e.visited=!0,n.push(e),s.push(e);n.length>0;){const e=n.shift();for(let t=0;t<e.edges.length;++t){const i=e.edges[t],r=i.n0===e?i.n1:i.n0;r.visited||(r.visited=!0,s.push(r),n.push(r))}if(t++>1e5)return}return s})(this.graph.nodes[0]).map((e=>e.id))}computeDFS(){this.resetVisit();return(e=>{const t=[],s=e=>{if(!e.visited){e.visited=!0,t.push(e);for(let t=0;t<e.edges.length;++t){const n=e.edges[t],i=n.n0===e?n.n1:n.n0;s(i)}}};return s(e),t})(this.graph.nodes[0]).map((e=>e.id))}}const C=(e,t)=>w(e.n0,e.n1,t.n0,t.n1),w=(e,t,s,n)=>((e,t,s,n,i,r,o,h)=>{if(e===s&&t===n||i===o&&r===h)return;const d=(h-r)*(s-e)-(o-i)*(n-t);if(0===d)return;const c=((o-i)*(t-r)-(h-r)*(e-i))/d,a=((s-e)*(t-r)-(n-t)*(e-i))/d;if(c<0||c>1||a<0||a>1)return;return[e+c*(s-e),t+c*(n-t)]})(e.vec.x,e.vec.y,t.vec.x,t.vec.y,s.vec.x,s.vec.y,n.vec.x,n.vec.y),N=e=>{const t=(e=>{const t=new x;for(let s=0;s<e.nodes.length;++s)t.addVertex(e.nodes[s].id);for(let s=0;s<e.edges.length;++s){const n=e.edges[s];t.addEdge(n.n0.id,n.n1.id,n.getLength())}return t.primMST(0)})(e);return t},k=e=>{const t=((e,t,s)=>(m(e.nodes,t,u,.1),v(e.nodes,s)))(e,e.nodes[0],e.nodes[e.nodes.length-1]);return t},b=e=>{const t=((e,t,s)=>{const n=[];for(let r=0;r<e.nodes.length;++r){const t=e.nodes[r],s=new S(t.vec.x,t.vec.y,t.vec.z);s.id=t.id,n.push(s)}const i=[];for(let r=0;r<e.edges.length;++r){const t=e.edges[r],s=new f(n[t.n0.id],n[t.n1.id]);i.push(s)}return y.gePath(n[t.id],n[s.id])})(e,e.nodes[0],e.nodes[e.nodes.length-1]);return t};class M{constructor(){this.histories=[],this.currentIndex=-1}reset(){this.histories=[],this.currentIndex=-1}push(e){this.currentIndex<this.histories.length-1&&this.histories.splice(this.currentIndex+1,this.histories.length),this.histories.push(e),this.currentIndex=this.histories.length-1}getCurrentIndex(){return this.currentIndex}getHistoryLength(){return this.histories.length}getCurrentState(){return{currentIndex:this.getCurrentIndex(),historyNum:this.getHistoryLength()}}undo(){if(0!==this.currentIndex)return this.currentIndex--,this.histories[this.currentIndex]}redo(){return this.currentIndex++,this.currentIndex=this.currentIndex<this.histories.length?this.currentIndex:this.histories.length-1,this.histories[this.currentIndex]}}class D{constructor(){this.manager=void 0,this.manager=new M}getLog(){return this.manager.getCurrentState()}resetState(){this.manager.reset(),this.captureState([])}captureState(e){this.manager.push(e);return this.manager.getCurrentState()}undo(){return this.manager.undo()}redo(){return this.manager.redo()}}class T{constructor(e){this.controller=void 0,this.sceneState=void 0,this.graphSystem=void 0,this.controller=e,this.graphSystem=this.controller.graphSystem,this.sceneState=new D}reset(){const e=this.controller.graphSystem.graph;e.nodes=[],e.edges=[],this.capture()}capture(){this.sceneState.captureState(this.toJSON()),this.updateUndoRedoHist()}updateUndoRedoHist(){if(this.controller.divHist){const e=this.sceneState.getLog();this.controller.divHist.textContent="hist: ".concat(e.currentIndex,"/").concat(e.historyNum-1)}}undo(){const e=this.sceneState.undo();e&&this.dump(e),this.updateUndoRedoHist(),this.controller.graphSystem.resetCapture()}redo(){const e=this.sceneState.redo();e&&this.dump(e),this.updateUndoRedoHist(),this.controller.graphSystem.resetCapture()}toJSON(){const e={node:[],edge:[]};return this.controller.graphSystem.graph.nodes.forEach((t=>{e.node.push(t.toJSON())})),this.controller.graphSystem.graph.edges.forEach((t=>{e.edge.push(t.toJSON())})),e}exportJSON(){!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"download";const s=document.createElement("a");s.href="data:application/json;charset=utf-8,"+encodeURIComponent(e),s.download="".concat(t),s.click()}(JSON.stringify(this.toJSON()),"graph.json")}dump(e){const t=this.controller.graphSystem;t.graph.nodes=[],t.graph.edges=[];for(let s=0;s<e.node.length;++s){const n=e.node[s],i=t.addNode(n.vec.x,n.vec.y,n.vec.z);i.id=n.id,i.data=n.data}for(let s=0;s<e.edge.length;++s){const n=e.edge[s],i=t.addEdge(t.graph.nodes[n.n0],t.graph.nodes[n.n1]);i.id=n.id,i.data=n.data}}populate(){const e=Math.random()*this.controller.canvas.width,t=Math.random()*this.controller.canvas.height;this.controller.mouseClick(e,t)}toggleDelaunay(e){this.controller.renderer.toggleDelaunay=e}toggleMST(e){this.controller.graphSystem.computeMST(),this.controller.renderer.toggleMST=e}computedBSF(){const e=this.controller.graphSystem.computeBFS();this.updateSearchResult("BFS: "+e.join(", "))}computedDFS(){const e=this.controller.graphSystem.computeDFS();this.updateSearchResult("DFS: "+e.join(", "))}updateSearchResult(e){this.controller.divSearchResult.textContent=e}removeSelection(){this.controller.graphSystem.captured&&(this.controller.graphSystem.captured.remove(),this.controller.graphSystem.captured=void 0)}addNodeWithClosestNode(e,t){const s=this.graphSystem.addNode(e,t,0);this.graphSystem.addEdgeByClosestNode(s)}}var P=s(458);class I{constructor(e){this.controller=void 0,this.toggleDelaunay=!1,this.toggleMST=!1,this.controller=e}render(e){if(this.controller.graphSystem.captured?this.controller.divSel.textContent=this.controller.graphSystem.captured.type:this.controller.divSel.textContent="undefined",e.beginPath(),e.arc(this.controller.m.x,this.controller.m.y,2,0,6.28),e.closePath(),e.fillStyle="#888",e.fill(),this.toggleMST&&this.controller.graphSystem.pathMST){const t=this.controller.graphSystem.graph.nodes;this.controller.graphSystem.pathMST.forEach((s=>{const n=t[s.n0].vec,i=t[s.n1].vec;e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(i.x,i.y),e.lineWidth=5,e.stroke()}))}this.toggleDelaunay&&((e,t)=>{new P.oc(t.map((e=>e.vec))).DrawTriClass(e)})(e,this.controller.graphSystem.graph.nodes),this.renderGraph(e)}renderGraph(e){this.controller.log="N:".concat(this.controller.graphSystem.graph.nodes.length,", E:").concat(this.controller.graphSystem.graph.edges.length),this.controller.graphSystem.graph.edges.forEach((t=>{this.renderGraphEdge(e,t)})),this.controller.graphSystem.graph.nodes.forEach((t=>{this.renderGraphNode(e,t)}))}renderGraphNode(e,t){e.beginPath(),e.arc(t.vec.x,t.vec.y,t.r,0,6.28),e.closePath(),e.fillStyle="#ff0000",e.fill(),t.isSelected&&(e.lineWidth=3,e.strokeStyle="#00f",e.stroke()),e.strokeStyle="#ff0000",e.lineWidth=1,e.strokeText("".concat(t.networkDistance),t.vec.x,t.vec.y-20),e.strokeText("".concat(t.id),t.vec.x,t.vec.y-7)}renderGraphEdge(e,t){t.isSelected&&(e.lineWidth=3,e.strokeStyle="#00f",e.beginPath(),e.moveTo(t.n0.vec.x,t.n0.vec.y),e.lineTo(t.n1.vec.x,t.n1.vec.y),e.stroke()),e.lineWidth=1,e.beginPath(),e.moveTo(t.n0.vec.x,t.n0.vec.y),e.lineTo(t.n1.vec.x,t.n1.vec.y),e.strokeStyle="#0f0",e.stroke(),e.strokeStyle="#00ff00",e.lineWidth=1;const s=t.n0.vec.x+.5*(t.n1.vec.x-t.n0.vec.x),n=t.n0.vec.y+.5*(t.n1.vec.y-t.n0.vec.y);e.strokeText("".concat(t.id),s,n-7)}}class B{constructor(e){this.common=void 0,this.graphSystem=void 0,this.renderer=void 0,this.canvas=void 0,this.divHist=void 0,this.divLog=void 0,this.divSel=void 0,this.divSearchResult=void 0,this.needPopulate=!1,this.m=new i(0,0,0),this.log="",this.wasMoved=!1,this.graphSystem=new E,this.common=new T(this),this.renderer=new I(this),this.canvas=e}mouseDown(e,t){const s=this.graphSystem.findNodeVec(e,t);this.graphSystem.captured&&this.graphSystem.captured!==s&&(this.graphSystem.nodePre=this.graphSystem.captured),this.graphSystem.captured=s}mouseClick(e,t){if(this.graphSystem.captured=this.graphSystem.findNodeVec(e,t),this.graphSystem.nodePre&&this.graphSystem.captured)return this.graphSystem.addEdge(this.graphSystem.nodePre,this.graphSystem.captured),this.common.capture(),void this.updatePost();const s=this.graphSystem.findEdgeVec(e,t);if(s&&void 0===this.graphSystem.captured){const e=this.graphSystem.addNode(s.vec.x,s.vec.y);return this.graphSystem.edgeSplitByNode(e,s.edge),this.common.capture(),void this.updatePost()}return void 0===this.graphSystem.captured?(this.common.addNodeWithClosestNode(e,t),this.common.capture(),void this.updatePost()):void 0}mouseMove(e,t){this.m.x=e,this.m.y=t}mouseUp(){if(this.graphSystem.captured&&"node"===this.graphSystem.captured.type){const e=this.graphSystem.captured;this.graphSystem.edgeSplitByNodeEdges(e);const t=this.graphSystem.findNode(e);if(t){r(e.vec,t.vec)<8&&this.graphSystem.mergeTwoNodes(t,e)}this.wasMoved&&(this.common.capture(),this.wasMoved=!1),this.graphSystem.captured=void 0,this.updatePost()}}mouseDrag(e,t){if(this.graphSystem.captured&&"node"===this.graphSystem.captured.type){const s=this.graphSystem.captured;s.vec.x=e,s.vec.y=t}this.wasMoved=!0}updatePost(){this.renderer.toggleMST&&this.graphSystem.computeMST()}render(e){this.needPopulate&&this.populate(),this.divLog.textContent=this.log,this.renderer.render(e)}exportJSON(){return this.common.exportJSON()}populate(){return this.common.populate()}}class O{constructor(e){this.app=void 0,this.app=e,this.initUI()}initUI(){const e=document.createElement("div");e.style.width="160px",e.style.position="absolute",e.style.background="#222",e.style.padding="10px",this.app.divHost.appendChild(e);const t=document.createElement("button");t.textContent="run",t.onclick=()=>{this.app.controller.needPopulate=!this.app.controller.needPopulate},e.appendChild(t);const s=document.createElement("button");s.textContent="remove",s.onclick=()=>{this.app.controller.common.removeSelection()},e.appendChild(s);const n=document.createElement("button");n.textContent="Export JSON",e.appendChild(n),n.onclick=()=>{this.app.controller.exportJSON()};const i=document.createElement("div");i.textContent="N:0, E:0",i.style.color="#bbb",e.appendChild(i),this.app.controller.divLog=i;const r=document.createElement("div");r.textContent="hist: 0",r.style.color="#bbb",e.appendChild(r),this.app.controller.divHist=r;const o=document.createElement("div");o.textContent="undefined",o.style.color="#bbb",e.appendChild(o),this.app.controller.divSel=o;const h=z("reset",(()=>{this.app.controller.common.reset()}));e.appendChild(h);const d=z("undo",(()=>{this.app.controller.common.undo()}));e.appendChild(d);const c=z("redo",(()=>{this.app.controller.common.redo()}));e.appendChild(c);const a=H("Delaunay",(e=>{this.app.controller.common.toggleDelaunay(e)}));e.appendChild(a.div);const l=H("MST",(e=>{this.app.controller.common.toggleMST(e)}));e.appendChild(l.div);const p=z("DFS",(()=>{this.app.controller.common.computedDFS()}));e.appendChild(p);const g=z("BFS",(()=>{this.app.controller.common.computedBSF()}));e.appendChild(g);const u=document.createElement("div"),m=document.createElement("p");m.style.marginTop="2px",u.appendChild(m),e.appendChild(u),this.app.controller.divSearchResult=m}}const z=(e,t)=>{const s=document.createElement("button");return s.textContent=e,s.onclick=()=>{t()},s},H=(e,t)=>{const s=document.createElement("div");s.style.display="flex";const n=document.createElement("input");n.type="checkbox",n.defaultChecked=!1;const i=document.createElement("div");return i.textContent=e,i.style.color="#aaa",s.appendChild(n),s.appendChild(i),n.onchange=()=>t(n.checked),{div:s,checkBox:n}};class J extends n.bb{constructor(e){super(e),this.controller=void 0,this.ui=void 0,this.canvas.style.position="absolute",this.init()}init(){this.controller=new B(this.canvas),this.mouseClick(300,300),this.ui=new O(this),this.start()}render(e){this.controller.render(e)}mouseClick(e,t){this.controller.mouseClick(e,t)}mouseDown(e,t){this.controller.mouseDown(e,t)}mouseMove(e,t){this.controller.mouseMove(e,t)}mouseDrag(e,t){this.controller.mouseDrag(e,t)}mouseUp(){this.controller.mouseUp()}}}}]);
//# sourceMappingURL=48195.9d8720f8.chunk.js.map