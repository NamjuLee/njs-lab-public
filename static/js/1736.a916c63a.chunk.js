"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[1736,6690,2405],{46690:(t,i,e)=>{e.r(i),e.d(i,{Edge:()=>o,Graph:()=>h,Node:()=>n});var s=e(46710);class h{constructor(){this.nodes=[],this.edges=[],this.dt=0,this.mouse=new s.h9(0,0),this.damping=.96,this.gravity=-.032,this.timeStep=.16,this.groundZ=-9.26,this.capture=void 0}Init(t,i){this.InitGridR(t,i),this.nodes[0].fixed=!0,this.nodes[9].fixed=!0,this.nodes[this.nodes.length-1].fixed=!0,this.nodes[this.nodes.length-1-9].fixed=!0}updateOptionA(t){this.damping=.1*t,console.log(this.damping,"damping")}updateOptionB(t){this.timeStep=.05*t,console.log(this.timeStep,"timeStep")}updateOptionC(t){}shrinkage(t,i){this.nodes[t].fixed=!0;for(let e=0;e<this.nodes[t].edge.length;++e)this.nodes[t].edge[e].targetLengthShrinkage(i)}InitGridR(t,i){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;const o=t/e+1,n=i/h+1,d=this.nodes.length;for(let r=0;r<h;++r)for(let h=0;h<e;++h){let e=0+o*h-.5*t,d=0+n*r-.5*i;this.AddNode(e,0,d,s.h9.Zero(),1)}for(let s=0;s<h;++s)for(let t=0;t<e;++t){let i=s*e+t;0!==t&&this.AddEdge(this.nodes[d+i-1],this.nodes[d+i]),0!==s&&this.AddEdge(this.nodes[d+i-e],this.nodes[d+i])}}Clear(){this.nodes=[],this.edges=[]}AddNode(t,i,e){let h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new s.h9(0,0,0),o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const d=new n(new s.h9(t,i,e),h,o);return this.nodes.push(d),d.id=this.nodes.length-1,d}AddEdge(t,i){const e=new o(t,i);return t.edge.push(e),i.edge.push(e),this.edges.push(e),e}MouseMove(t,i){this.mouse.x=t,this.mouse.y=i,console.log("move",t,i)}MouseDClick(t,i){this.mouse.x=t,this.mouse.y=i;const e=this.FindNode(this.mouse);e&&(e.fixed=!e.fixed),console.log("click",t,i)}MouseDown(t,i){this.mouse.x=t,this.mouse.y=i,this.capture=this.FindNode(this.mouse),this.capture&&(this.capture.fixed=!0,this.capture.isCapture=!0),console.log("down",t,i,this.capture)}MouseLeftClick(t,i){console.log("click",t,i,this.capture)}MouseUp(t,i){this.mouse.x=t,this.mouse.y=i,this.capture&&(this.capture.isCapture=!1,this.capture=void 0),console.log("up",t,i)}MouseDrag(t,i){this.mouse.x=t,this.mouse.y=i,this.capture&&(this.capture.v.x=t,this.capture.v.y=i),console.log("drag",t,i)}Render(t){this.dt+=.1,this.Move(this.mouse.x,this.mouse.y,this.mouse.z,this.damping,0,this.timeStep,this.groundZ,1)}FindNode(t){for(let i of this.nodes)if(i.v.Distance(t)<i.m+3)return i}Move(t,i,e,h){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.01,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:-10,r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;const l=new s.h9(t,i,e);for(let a=0;a<r;++a){for(const t of this.nodes){const i=s.h9.Sub(l,t.v),e=i.Length();i.Unitize(),t.f=s.h9.Add(s.h9.Scale(i,.1*Math.exp(-.1*e*e)),s.h9.Scale(s.h9.YAxis(),o))}for(const t of this.edges)t.ApplySpringForce();for(const t of this.nodes)t.Move(n,h,d)}}}class o{constructor(t,i){this.n0=void 0,this.n1=void 0,this.targetLength=0,this.isModified=!1,this.springConstant=.8,this._targetLengthOriginal=0,this.n0=t,this.n1=i,this.targetLength=.95*this.n0.v.Distance(this.n1.v),this._targetLengthOriginal=this.targetLength}Render(t){t.strokeStyle="#ff0000",s.h9.Distance(this.n0.v,this.n1.v)<2*this.targetLength&&(t.strokeStyle="#0000ff"),t.beginPath(),t.moveTo(this.n0.v.x,this.n0.v.y),t.lineTo(this.n1.v.x,this.n1.v.y),t.closePath(),t.stroke()}targetLengthShrinkage(t){this.isModified||(this.isModified=!0,this.targetLength*=t)}ApplySpringForce(){let t=s.h9.Sub(this.n1.v,this.n0.v),i=t.Length();t.Unitize();const e=s.h9.Scale(t,(i-this.targetLength)*this.springConstant);this.n0.f=s.h9.Add(this.n0.f,e),this.n1.f=s.h9.Sub(this.n1.f,e)}}class n{constructor(t,i,e){this.id=-1,this.edge=[],this.nNodes=[],this.v=s.h9.Origin(),this.f=s.h9.Origin(),this.u=s.h9.Origin(),this.m=0,this.fixed=!1,this.isCapture=!1,this.v=new s.h9(t.x,t.y,t.z),this.u=new s.h9(i.x,i.y,i.z),this.m=e}Move(t,i){if(this.fixed||this.isCapture)return;this.u.Mult(i),this.u.Add(s.h9.Scale(this.f,t/this.m));const e=s.h9.Scale(this.u,t);this.v.x+=e.x,this.v.y+=e.y}Render(t,i){t.beginPath(),i.Distance(this.v)<this.m+3?(t.fillStyle="#000000",t.arc(this.v.x,this.v.y,this.m+6,0,2*Math.PI)):(t.fillStyle="#f90000",t.arc(this.v.x,this.v.y,this.m+3,0,2*Math.PI)),this.fixed&&(t.fillStyle="#000000",t.arc(this.v.x,this.v.y,this.m+7.5,0,2*Math.PI)),t.closePath(),t.fill()}}},61736:(t,i,e)=>{e.r(i),e.d(i,{Solution:()=>d,easingMotion:()=>r});var s=e(17760),h=e(55913),o=e(82405),n=e(46690);class d extends h.TF{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main"),this.pointLight=void 0,this.pointer=new s.FM8,this.raycaster=new s.iMs,this.sphere=void 0,this.lines=[],this.linesIndex=[],this.mesh=void 0,this.lookupClass=[],this.lookupTable={},this.graph=void 0,this.needInterpolation=!0,this.preSelLine=void 0,this.ui=void 0,this.idLookupTable=void 0,this.cameraAni=new s.Pa4(0,100,100),this.ui=new o.UI(this),this.camera.position.set(0,500,500);const t=new s.Mig(13421772,.25);this.scene.add(t),this.pointLight=new s.cek(16777215,.75),this.pointLight.position.x=10,this.pointLight.castShadow=!0,this.scene.add(this.pointLight),this.raycaster=new s.iMs,this.raycaster.params.Points.threshold=.4,this.raycaster.far=1e3;const i=new s.xo$(.1,32,32),e=new s.vBJ({color:16777215}),d=new s.Kj0(i,e);this.sphere=d,this.scene.add(d),this.graph=new n.Graph,(0,h.Vu)("/njs-lab-public/static/data/smDataViz.csv").then((t=>{const i=t.split(/\r\n|\r|\n/g),e=[],o=[],n=[],d={};for(let s=0;s<i.length;++s){const t=i[s].split(","),h=.1*+t[0],r=.1*+t[1],l=.1*+t[2];e.push(h,r,l),this.graph.AddNode(h,r,l),o.push(.5,.5,.5);const a=t[3];n.push(a);const p={};for(let i=4;i<t.length;i+=2){const e=t[i].split("(")[1].replaceAll("'",""),s=+t[i+1].split(")")[0];p[e]=s}d[a]={id:s,pos:[h,r,l],neighbor:p}}for(let s=0;s<n.length;++s){const t=d[n[s]].neighbor,i=this.graph.nodes[s];for(let e in t){const t=d[e],s=this.graph.nodes[t.id];this.graph.AddEdge(i,s)}}this.lookupClass=n,this.lookupTable=d;const r=new s.u9r;r.setAttribute("position",new s.a$l(e,3)),r.setAttribute("color",new s.a$l(o,3));const l=new s.UY4({vertexColors:!0,size:2}),a=new s.woe(r,l);r.computeBoundingSphere(),this.scene.add(a),this.mesh=a;for(let h=0;h<this.graph.nodes.length;++h){const t=this.graph.nodes[h].edge,i=new s.u9r,e=new s.FT0({color:3355443,dashSize:.071,gapSize:.5,opacity:1e-4}),o=[];for(let s=0;s<t.length;s++){const i=t[s].n0,e=t[s].n1;o.push(i.v.x,i.v.y,i.v.z),o.push(e.v.x,e.v.y,e.v.z)}i.setAttribute("position",new s.a$l(o,3)),i.computeBoundingSphere();const n=new s.ejS(i,e);n.computeLineDistances(),this.scene.add(n),this.lines.push(n)}(0,h._N)("/njs-lab-public/static/data/smIDLookUpTable.json").then((t=>{this.idLookupTable=JSON.parse(JSON.stringify(t)),this.start()}))}))}mouseMove(t){this.pointer.x=t.offsetX/this.hostDiv.clientWidth*2-1,this.pointer.y=-t.offsetY/this.hostDiv.clientHeight*2+1}mouseDown(t){this.pointer.x=t.offsetX/this.hostDiv.clientWidth*2-1,this.pointer.y=-t.offsetY/this.hostDiv.clientHeight*2+1}mouseClick(t){this.pointer.x=t.offsetX/this.hostDiv.clientWidth*2-1,this.pointer.y=-t.offsetY/this.hostDiv.clientHeight*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const i=this.raycaster.intersectObjects([this.mesh],!1),e=i.length>0?i[0]:null;if(null!==e){this.sphere.position.set(e.point.x,e.point.y+1,e.point.z);const t=this.lookupClass[e.index];this.ui.updateSubID(this.idLookupTable[t])}}update(t){this.graph.Render();let i=this.mesh.geometry.attributes.position.count;for(let h=0;h<i;h++){this.mesh.geometry.attributes.position;let t=this.graph.nodes[h].v.x,i=this.graph.nodes[h].v.y,e=this.graph.nodes[h].v.z;this.mesh.geometry.attributes.position.setXYZ(h,t,i,e),this.mesh.geometry.attributes.color.setXYZ(h,.3,.3,.3)}this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects([this.mesh],!1),s=e.length>0?e[0]:null;if(null!==s){this.sphere.position.set(s.point.x,s.point.y,s.point.z);const t=this.lookupClass[s.index],i=this.lookupTable[t];this.ui.divTitle.textContent="Keyword: "+t,this.ui.updateSub(i.neighbor),this.graph.shrinkage(s.index,.6),this.mesh.geometry.attributes.color.setXYZ(s.index,0,1,1);for(let e in i.neighbor){const t=this.lookupTable[e];this.mesh.geometry.attributes.color.setXYZ(t.id,1,1,0)}}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0,this.mesh.geometry.computeVertexNormals();for(let h=0;h<this.graph.nodes.length;++h){const t=this.graph.nodes[h].edge,i=this.lines[h],e=[];for(let h=0;h<t.length;h++){const i=t[h].n0,s=t[h].n1;e.push(i.v.x,i.v.y,i.v.z),e.push(s.v.x,s.v.y,s.v.z)}let s=0;for(let h=0;h<e.length;h+=6)i.geometry.attributes.position.setXYZ(s++,e[h],e[h+1],e[h+2]),i.geometry.attributes.position.setXYZ(s++,e[h+3],e[h+4],e[h+5]);i.geometry.attributes.position.needsUpdate=!0}if(null!==s){if(void 0!==this.preSelLine){this.preSelLine.material.color.setRGB(.3,.3,.3),this.preSelLine=void 0}const t=s.index,i=this.lines[t].material;i.linewidth=1,i.dashSize=.3,this.lines[t].computeLineDistances(),i.color.setRGB(0,1,1),this.preSelLine=this.lines[t]}else if(void 0!==this.preSelLine){const t=this.preSelLine.material;t.dashSize=.071,t.linewidth=.1,this.preSelLine.computeLineDistances(),t.color.setRGB(.3,.3,.3),this.preSelLine=void 0}this.CameraInterpolation()}CameraInterpolation(){if(this.needInterpolation){const t=r(this.camera.position,this.cameraAni);this.camera.position.set(t.x,t.y,t.z),this.camera.position.distanceTo(this.cameraAni)<1&&(this.needInterpolation=!1)}}}const r=function(t,i){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.15;const h=new s.Pa4(i.x-t.x,i.y-t.y,i.z-t.z);return new s.Pa4(t.x+h.x*e,t.y+h.y*e,t.z+h.z*e)}},82405:(t,i,e)=>{e.r(i),e.d(i,{UI:()=>s});class s{constructor(t){this.solution=void 0,this.divTitle=void 0,this.divSub=void 0,this.divSubs=[],this.divSubID=void 0,this.divSubIDs=[],this.solution=t,this.initUI()}initUI(){this.divTitle=document.createElement("div"),this.solution.hostDiv.insertBefore(this.divTitle,this.solution.renderer.domElement),this.divTitle.textContent="Storymaps Metrics from Jan 24-2020",this.divTitle.style.color="#fff",this.divTitle.style.fontSize="64px",this.divTitle.style.position="absolute",this.divTitle.style.padding="20px",this.divTitle.style.zIndex="1",this.divTitle.style.paddingBottom="10px";const t=document.createElement("div");this.solution.hostDiv.appendChild(t),t.style.position="absolute",t.style.padding="20px",t.style.padding="20px",t.style.marginTop="100px",this.divTitle=document.createElement("div"),t.appendChild(this.divTitle),this.divTitle.textContent="TSNE Visualization ",this.divTitle.style.fontSize="20px",this.divTitle.style.pointerEvents="none",this.divTitle.style.paddingBottom="10px",this.divTitle=document.createElement("div"),t.appendChild(this.divTitle),this.divTitle.textContent="Keyword: ",this.divTitle.style.color="#0ff",this.divTitle.style.fontSize="38px",this.divTitle.style.pointerEvents="none",this.divTitle.style.paddingBottom="10px",this.divSub=document.createElement("div"),t.appendChild(this.divSub),this.divSub.textContent="Neighbors:",this.divSub.style.paddingTop="5px",this.divSub.style.paddingBottom="18px";for(let i=0;i<10;++i){const t=document.createElement("div");t.textContent="",t.style.pointerEvents="none",t.style.paddingTop="5px",t.style.color="#cc0",this.divSubs.push(t),this.divSub.appendChild(t)}this.divSubID=document.createElement("div"),t.appendChild(this.divSubID),this.divSubID.textContent="Storymaps ID:",this.divSubID.style.paddingTop="8px",this.divSubID.style.paddingBottom="8px";for(let i=0;i<10;++i){const t=document.createElement("div");t.textContent="",this.divSubIDs.push(t),this.divSubID.appendChild(t)}}updateSub(t){let i=0;for(let e in t)this.divSubs[i++].textContent=e}updateSubID(t){try{let i=0;for(let e=0;e<t.length;++e)this.divSubIDs[i++].innerHTML='<a href="https://storymaps.arcgis.com/stories/'.concat(t[e],'" style="font-size: 14px;" target="_blank" > ID: ').concat(t[e],"</a>")}catch(i){}}}}}]);
//# sourceMappingURL=1736.a916c63a.chunk.js.map