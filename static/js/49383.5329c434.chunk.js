"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[49383],{49383:(t,s,i)=>{i.r(s),i.d(s,{AppCanvasGridOptimizer:()=>C,Solution:()=>m});i(59008);var e=i(458);class h{constructor(t,s,i){this.DynamicGrid=void 0,this.width=void 0,this.height=void 0,this.nodes=[],this.edges=[],this.dt=0,this.mouse=new e.h9(0,0),this.damping=.96,this.gravity=-.032,this.timeStep=.16,this.groundZ=-9.26,this.capture=void 0,this.DynamicGrid=t,this.Init(s-100,i-100)}Init(t,s){this.InitGridR(t,s),this.nodes[0].fixed=!0,this.nodes[9].fixed=!0,this.nodes[this.nodes.length-1].fixed=!0,this.nodes[this.nodes.length-1-9].fixed=!0}updateOptionA(t){this.damping=.1*t,console.log(this.damping,"damping")}updateOptionB(t){this.timeStep=.05*t,console.log(this.timeStep,"timeStep")}updateOptionC(t){}InitGridR(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;const n=t/i+1,o=s/h+1,a=this.nodes.length;for(let d=0;d<h;++d)for(let t=0;t<i;++t){let s=10+n*t-250,i=10+o*d-150;this.AddNode(new e.h9(s,i),e.h9.Zero(),1)}for(let e=0;e<h;++e)for(let t=0;t<i;++t){let s=e*i+t;0!==t&&this.AddEdge(this.nodes[a+s-1],this.nodes[a+s]),0!==e&&this.AddEdge(this.nodes[a+s-i],this.nodes[a+s])}}Clear(){this.nodes=[],this.edges=[]}AddNode(t,s,i){const e=new o(t,s,i);return this.nodes.push(e),e}AddEdge(t,s){const i=new n(t,s);return this.edges.push(i),i}MouseMove(t,s){this.mouse.x=t,this.mouse.y=s}MouseDClick(t,s){this.mouse.x=t,this.mouse.y=s;const i=this.FindNode(this.mouse);i&&(i.fixed=!i.fixed)}MouseDown(t,s){this.mouse.x=t,this.mouse.y=s,this.capture=this.FindNode(this.mouse),this.capture&&(this.capture.fixed=!0,this.capture.isCapture=!0),console.log("down",t,s,this.capture)}MouseLeftClick(t,s){console.log("click",t,s,this.capture)}MouseUp(t,s){this.mouse.x=t,this.mouse.y=s,this.capture&&(this.capture.isCapture=!1,this.capture=void 0),console.log("up",t,s)}MouseDrag(t,s){this.mouse.x=t,this.mouse.y=s,this.capture&&(this.capture.v.x=t,this.capture.v.y=s),console.log("drag",t,s)}Render(t){this.dt+=.1,this.Move(this.mouse,this.damping,0,this.timeStep,this.groundZ,1);for(let s of this.edges)s.Render(t);for(let s of this.nodes)s.Render(t,this.mouse)}FindNode(t){for(let s of this.nodes)if(s.v.Distance(t)<s.m+3)return s}Move(t,s,i,h,n,o){for(let a=0;a<o;++a){for(const s of this.nodes){const h=e.h9.Sub(t,s.v),n=h.Length();h.Unitize(),s.f=e.h9.Add(e.h9.Scale(h,.1*Math.exp(-.1*n*n)),e.h9.Scale(e.h9.YAxis(),i))}for(const t of this.edges)t.ApplySpringForce();for(const t of this.nodes)t.Move(h,s,n)}}}class n{constructor(t,s){this.n0=void 0,this.n1=void 0,this.targetLength=0,this.springConstant=.8,this.n0=t,this.n1=s,this.targetLength=this.n0.v.Distance(this.n1.v)}Render(t){t.strokeStyle="#f944f0",e.h9.Distance(this.n0.v,this.n1.v)>this.targetLength&&(t.strokeStyle="#000000"),t.beginPath(),t.moveTo(this.n0.v.x,this.n0.v.y),t.lineTo(this.n1.v.x,this.n1.v.y),t.closePath(),t.stroke()}ApplySpringForce(){let t=e.h9.Sub(this.n1.v,this.n0.v),s=t.Length();t.Unitize();const i=e.h9.Scale(t,(s-this.targetLength)*this.springConstant);this.n0.f=e.h9.Add(this.n0.f,i),this.n1.f=e.h9.Sub(this.n1.f,i)}}class o{constructor(t,s,i){this.nNodes=[],this.v=e.h9.Origin(),this.f=e.h9.Origin(),this.u=e.h9.Origin(),this.m=0,this.fixed=!1,this.isCapture=!1,this.v=new e.h9(t.x,t.y,t.z),this.u=new e.h9(s.x,s.y,s.z),this.m=i}Move(t,s){if(this.fixed||this.isCapture)return;this.u.Mult(s),this.u.Add(e.h9.Scale(this.f,t/this.m));const i=e.h9.Scale(this.u,t);this.v.x+=i.x,this.v.y+=i.y}Render(t,s){t.beginPath(),s.Distance(this.v)<this.m+3?(t.fillStyle="#000000",t.arc(this.v.x,this.v.y,this.m+6,0,2*Math.PI)):(t.fillStyle="#f90000",t.arc(this.v.x,this.v.y,this.m+3,0,2*Math.PI)),this.fixed&&(t.fillStyle="#000000",t.arc(this.v.x,this.v.y,this.m+7.5,0,2*Math.PI)),t.closePath(),t.fill()}}class a{constructor(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:600,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400;this.app=void 0,this.canvas=void 0,this.host=void 0,this.divLocalMain=void 0,this.divCanvas=void 0,this.divUI=void 0,this.ctx=void 0,this.timer=void 0,this.click=!1,this.pressed=!1,this.prevent=!1,this.delay=500,this.down=!1,this.t=0,this.width=void 0,this.height=void 0,this.divConsole=void 0,this.app=t,this.width=s,this.height=i;const e=document.getElementById(t.id);e&&(this.host=e,this.InitCanvas())}InitCanvas(){const t=document.createElement("div");if(!t)return;this.divLocalMain=t,this.divLocalMain.style.display="flex",this.divLocalMain.style.width=this.width+"px",this.divLocalMain.style.height=this.height+"px",this.divLocalMain.style.margin="10px",this.divLocalMain.style.padding="10px",this.host.append(t);const s=document.createElement("div");if(!s)return;this.divCanvas=s,this.divLocalMain.append(s);const i=document.createElement("canvas");if(i){this.canvas=i,this.divCanvas.append(this.canvas),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.backgroundColor="#aaaaaa";const t=this.canvas.getContext("2d");t&&(this.ctx=t,this.InitUI(),this.Init())}}InitUI(){const t=document.createElement("div");if(!t)return;this.divUI=t,this.divLocalMain.append(t),this.divUI.style.marginLeft="10px",this.divUI.style.width="100%";const s=document.createElement("button");s.textContent="reset",s.onclick=()=>{this.app.InitGraph()},this.divUI.append(s);let i=document.createElement("input");i.oninput=()=>{const t=+i.value;this.app.gridGraph.updateOptionA(t)},i.type="range",i.min="1",i.max="10.0",i.value="8",this.divUI.append(i);let e=document.createElement("input");e.oninput=()=>{const t=+e.value;this.app.gridGraph.updateOptionB(t)},e.type="range",e.min="1",e.max="10.0",e.value="4",this.divUI.append(e),this.divConsole=document.createElement("p"),this.divConsole&&(this.divUI.append(this.divConsole),this.divConsole.style.width="max-content",this.divConsole.innerHTML="1. clikc to reset! <br> ",this.divConsole.innerHTML+="2. damping slider! <br> ",this.divConsole.innerHTML+="3. timeStep slider ! <br> ")}Init(){this.ctx.translate(.5*this.ctx.canvas.width,.5*this.ctx.canvas.height),this.ctx.scale(1,1),this.EventBind(),this.Loop()}EventBind(){this.canvas.onclick=t=>{this.prevent=!1,this.timer=setTimeout((()=>{if(!this.prevent){if(!this.click)return;this.MouseClick(t)}this.prevent=!1}),this.delay)},this.canvas.ondblclick=t=>{clearTimeout(this.timer),this.prevent=!0,this.MouseDoubleClick(t)},this.canvas.addEventListener("wheel",(t=>this.MouseWheel(t,t.deltaY))),this.canvas.onmousedown=t=>{this.click=!0,this.pressed=!0,this.MouseDown(t)},this.canvas.onmouseup=t=>{this.pressed=!1,this.MouseUp(t)},this.canvas.onmousemove=t=>{this.pressed&&(this.click=!1,this.MouseDrag(t)),this.MouseMove(t)},window.onresize=t=>this.Resize(t)}Resize(t){}Loop(){requestAnimationFrame((()=>{this.Loop()})),this.ctx.clearRect(.5*-this.ctx.canvas.width,.5*-this.ctx.canvas.height,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.fillStyle="#dddddd",this.ctx.beginPath(),this.ctx.rect(.5*-this.ctx.canvas.width,.5*-this.ctx.canvas.height,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.closePath(),this.ctx.fill(),this.Render(this.ctx)}Render(t){}MouseClick(t){}MouseDoubleClick(t){}MouseDown(t){}MouseUp(t){}MouseMove(t){}MouseDrag(t){}MouseWheel(t,s){}}class d{constructor(t){this.CanvasCore=void 0,this.gridGraph=void 0,this.t=.9,this.id=void 0,this.m=new e.h9(0,0,0),this.id=t,this.CanvasCore=new a(this),this.Init(),this.InitGraph()}Init(){this.CanvasCore.Render=t=>this.Render(t),this.CanvasCore.MouseDown=t=>this.MouseDown(t),this.CanvasCore.MouseClick=t=>this.MouseClick(t),this.CanvasCore.MouseDoubleClick=t=>this.MouseDoubleClick(t),this.CanvasCore.MouseUp=t=>this.MouseUp(t),this.CanvasCore.MouseMove=t=>this.MouseMove(t),this.CanvasCore.MouseDrag=t=>this.MouseDrag(t)}InitGraph(){this.gridGraph=new h(this,this.CanvasCore.canvas.width,this.CanvasCore.canvas.height)}Render(t){this.gridGraph.Render(t),t.fillStyle="rgba(255, 0, 0, 0.9)",t.beginPath(),t.arc(this.m.x,this.m.y,2.5,0,2*Math.PI),t.closePath(),t.fill()}Grid(t){for(let s=-10;s<10;++s)for(let i=-10;i<10;++i)t.beginPath(),t.fillStyle="rgba(255, 0, 0, 0.9)",t.arc(s,i,.05,0,2*Math.PI),t.closePath(),t.fill()}MouseDown(t){this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseDown(this.m.x,this.m.y)}MouseUp(t){this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseUp(this.m.x,this.m.y)}MouseMove(t){this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseMove(this.m.x,this.m.y)}MouseDrag(t){this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseDrag(this.m.x,this.m.y)}MouseClick(t){console.log("click"),this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseLeftClick(this.m.x,this.m.y)}MouseDoubleClick(t){this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseDClick(this.m.x,this.m.y)}Distance(t,s,i,e){return Math.sqrt((t-i)*(t-i)+(s-e)*(s-e))}}class r{constructor(t,s,i){this.DynamicGrid=void 0,this.width=void 0,this.height=void 0,this.nodes=[],this.edges=[],this.dt=0,this.mouse=new e.h9(0,0),this.damping=.96,this.gravity=-.032,this.timeStep=.16,this.groundZ=-9.26,this.capture=void 0,this.DynamicGrid=t,this.Init(s-100,i-100)}Init(t,s){this.InitGridR(t,s),this.nodes[0].fixed=!0,this.nodes[9].fixed=!0,this.nodes[this.nodes.length-1].fixed=!0,this.nodes[this.nodes.length-1-9].fixed=!0}updateOptionA(t){this.damping=.1*t,console.log(this.damping,"damping")}updateOptionB(t){this.timeStep=.05*t,console.log(this.timeStep,"timeStep")}updateOptionC(t){}InitGridR(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;const n=t/i+1,o=s/h+1,a=this.nodes.length;for(let d=0;d<h;++d)for(let t=0;t<i;++t){let s=10+n*t-250,i=10+o*d-150;this.AddNode(new e.h9(s,i),e.h9.Zero(),1)}for(let e=0;e<h;++e)for(let t=0;t<i;++t){let s=e*i+t;0!==t&&this.AddEdge(this.nodes[a+s-1],this.nodes[a+s]),0!==e&&this.AddEdge(this.nodes[a+s-i],this.nodes[a+s])}}Clear(){this.nodes=[],this.edges=[]}AddNode(t,s,i){const e=new v(t,s,i);return this.nodes.push(e),e}AddEdge(t,s){const i=new c(t,s);return this.edges.push(i),i}MouseMove(t,s){this.mouse.x=t,this.mouse.y=s}MouseDClick(t,s){this.mouse.x=t,this.mouse.y=s;const i=this.FindNode(this.mouse);i&&(i.fixed=!i.fixed)}MouseDown(t,s){this.mouse.x=t,this.mouse.y=s,this.capture=this.FindNode(this.mouse),this.capture&&(this.capture.fixed=!0,this.capture.isCapture=!0),console.log("down",t,s,this.capture)}MouseLeftClick(t,s){console.log("click",t,s,this.capture)}MouseUp(t,s){this.mouse.x=t,this.mouse.y=s,this.capture&&(this.capture.isCapture=!1,this.capture=void 0),console.log("up",t,s)}MouseDrag(t,s){this.mouse.x=t,this.mouse.y=s,this.capture&&(this.capture.v.x=t,this.capture.v.y=s),console.log("drag",t,s)}Render(t){this.dt+=.1,this.Move(this.mouse,this.damping,0,this.timeStep,this.groundZ,1);for(let s of this.edges)s.Render(t);for(let s of this.nodes)s.Render(t,this.mouse)}FindNode(t){for(let s of this.nodes)if(s.v.Distance(t)<s.m+3)return s}Move(t,s,i,h,n,o){for(let a=0;a<o;++a){for(const s of this.nodes){const h=e.h9.Sub(t,s.v),n=h.Length();h.Unitize(),s.f=e.h9.Add(e.h9.Scale(h,.1*Math.exp(-.1*n*n)),e.h9.Scale(e.h9.YAxis(),i))}for(const t of this.edges)t.ApplySpringForce();for(const t of this.nodes)t.Move(h,s,n)}}}class c{constructor(t,s){this.n0=void 0,this.n1=void 0,this.targetLength=0,this.springConstant=.8,this.n0=t,this.n1=s,this.targetLength=.5*this.n0.v.Distance(this.n1.v)}Render(t){t.strokeStyle="#ff0000",e.h9.Distance(this.n0.v,this.n1.v)<2*this.targetLength&&(t.strokeStyle="#0000ff"),t.beginPath(),t.moveTo(this.n0.v.x,this.n0.v.y),t.lineTo(this.n1.v.x,this.n1.v.y),t.closePath(),t.stroke()}ApplySpringForce(){let t=e.h9.Sub(this.n1.v,this.n0.v),s=t.Length();t.Unitize();const i=e.h9.Scale(t,(s-this.targetLength)*this.springConstant);this.n0.f=e.h9.Add(this.n0.f,i),this.n1.f=e.h9.Sub(this.n1.f,i)}}class v{constructor(t,s,i){this.nNodes=[],this.v=e.h9.Origin(),this.f=e.h9.Origin(),this.u=e.h9.Origin(),this.m=0,this.fixed=!1,this.isCapture=!1,this.v=new e.h9(t.x,t.y,t.z),this.u=new e.h9(s.x,s.y,s.z),this.m=i}Move(t,s){if(this.fixed||this.isCapture)return;this.u.Mult(s),this.u.Add(e.h9.Scale(this.f,t/this.m));const i=e.h9.Scale(this.u,t);this.v.x+=i.x,this.v.y+=i.y}Render(t,s){t.beginPath(),s.Distance(this.v)<this.m+3?(t.fillStyle="#000000",t.arc(this.v.x,this.v.y,this.m+6,0,2*Math.PI)):(t.fillStyle="#f90000",t.arc(this.v.x,this.v.y,this.m+3,0,2*Math.PI)),this.fixed&&(t.fillStyle="#000000",t.arc(this.v.x,this.v.y,this.m+7.5,0,2*Math.PI)),t.closePath(),t.fill()}}class l{constructor(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:600,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400;this.app=void 0,this.canvas=void 0,this.host=void 0,this.divLocalMain=void 0,this.divCanvas=void 0,this.divUI=void 0,this.ctx=void 0,this.timer=void 0,this.click=!1,this.pressed=!1,this.prevent=!1,this.delay=500,this.down=!1,this.t=0,this.width=void 0,this.height=void 0,this.divConsole=void 0,this.app=t,this.width=s,this.height=i;const e=document.getElementById(t.id);e&&(this.host=e,this.InitCanvas())}InitCanvas(){const t=document.createElement("div");if(!t)return;this.divLocalMain=t,this.divLocalMain.style.display="flex",this.divLocalMain.style.width=this.width+"px",this.divLocalMain.style.height=this.height+"px",this.divLocalMain.style.margin="10px",this.divLocalMain.style.padding="10px",this.host.append(t);const s=document.createElement("div");if(!s)return;this.divCanvas=s,this.divLocalMain.append(s);const i=document.createElement("canvas");if(i){this.canvas=i,this.divCanvas.append(this.canvas),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.backgroundColor="#aaaaaa";const t=this.canvas.getContext("2d");t&&(this.ctx=t,this.InitUI(),this.Init())}}InitUI(){const t=document.createElement("div");if(!t)return;this.divUI=t,this.divLocalMain.append(t),this.divUI.style.marginLeft="10px",this.divUI.style.width="100%";const s=document.createElement("button");s.textContent="reset",s.onclick=()=>{this.app.InitGraph()},this.divUI.append(s);let i=document.createElement("input");i.oninput=()=>{const t=+i.value;this.app.gridGraph.updateOptionA(t)},i.type="range",i.min="1",i.max="10.0",i.value="8",this.divUI.append(i);let e=document.createElement("input");e.oninput=()=>{const t=+e.value;this.app.gridGraph.updateOptionB(t)},e.type="range",e.min="1",e.max="10.0",e.value="4",this.divUI.append(e),this.divConsole=document.createElement("p"),this.divConsole&&(this.divUI.append(this.divConsole),this.divConsole.style.width="max-content",this.divConsole.innerHTML="1. clikc to reset! <br> ",this.divConsole.innerHTML+="2. damping slider! <br> ",this.divConsole.innerHTML+="3. timeStep slider ! <br> ")}Init(){this.ctx.translate(.5*this.ctx.canvas.width,.5*this.ctx.canvas.height),this.ctx.scale(1,1),this.EventBind(),this.Loop()}EventBind(){this.canvas.onclick=t=>{this.prevent=!1,this.timer=setTimeout((()=>{if(!this.prevent){if(!this.click)return;this.MouseClick(t)}this.prevent=!1}),this.delay)},this.canvas.ondblclick=t=>{clearTimeout(this.timer),this.prevent=!0,this.MouseDoubleClick(t)},this.canvas.addEventListener("wheel",(t=>this.MouseWheel(t,t.deltaY))),this.canvas.onmousedown=t=>{this.click=!0,this.pressed=!0,this.MouseDown(t)},this.canvas.onmouseup=t=>{this.pressed=!1,this.MouseUp(t)},this.canvas.onmousemove=t=>{this.pressed&&(this.click=!1,this.MouseDrag(t)),this.MouseMove(t)},window.onresize=t=>this.Resize(t)}Resize(t){}Loop(){requestAnimationFrame((()=>{this.Loop()})),this.ctx.clearRect(.5*-this.ctx.canvas.width,.5*-this.ctx.canvas.height,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.fillStyle="#dddddd",this.ctx.beginPath(),this.ctx.rect(.5*-this.ctx.canvas.width,.5*-this.ctx.canvas.height,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.closePath(),this.ctx.fill(),this.Render(this.ctx)}Render(t){}MouseClick(t){}MouseDoubleClick(t){}MouseDown(t){}MouseUp(t){}MouseMove(t){}MouseDrag(t){}MouseWheel(t,s){}}class u{constructor(t){this.CanvasCore=void 0,this.gridGraph=void 0,this.t=.9,this.id=void 0,this.m=new e.h9(0,0,0),this.id=t,this.CanvasCore=new l(this),this.Init(),this.InitGraph()}Init(){this.CanvasCore.Render=t=>this.Render(t),this.CanvasCore.MouseDown=t=>this.MouseDown(t),this.CanvasCore.MouseClick=t=>this.MouseClick(t),this.CanvasCore.MouseDoubleClick=t=>this.MouseDoubleClick(t),this.CanvasCore.MouseUp=t=>this.MouseUp(t),this.CanvasCore.MouseMove=t=>this.MouseMove(t),this.CanvasCore.MouseDrag=t=>this.MouseDrag(t)}InitGraph(){this.gridGraph=new r(this,this.CanvasCore.canvas.width,this.CanvasCore.canvas.height)}Render(t){this.gridGraph.Render(t),t.fillStyle="rgba(255, 0, 0, 0.9)",t.beginPath(),t.arc(this.m.x,this.m.y,2.5,0,2*Math.PI),t.closePath(),t.fill()}Grid(t){for(let s=-10;s<10;++s)for(let i=-10;i<10;++i)t.beginPath(),t.fillStyle="rgba(255, 0, 0, 0.9)",t.arc(s,i,.05,0,2*Math.PI),t.closePath(),t.fill()}MouseDown(t){this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseDown(this.m.x,this.m.y)}MouseUp(t){this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseUp(this.m.x,this.m.y)}MouseMove(t){this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseMove(this.m.x,this.m.y)}MouseDrag(t){this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseDrag(this.m.x,this.m.y)}MouseClick(t){console.log("click"),this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseLeftClick(this.m.x,this.m.y)}MouseDoubleClick(t){this.m.x=1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height),this.gridGraph.MouseDClick(this.m.x,this.m.y)}Distance(t,s,i,e){return Math.sqrt((t-i)*(t-i)+(s-e)*(s-e))}}class p{constructor(t){this.DynamicGridA=void 0,this.DynamicGridB=void 0,this.DynamicGridA=new d(t),this.DynamicGridB=new u(t)}}class C{static Init(t){new C(t).Dummy()}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SandBox";this.implementation=void 0,this.implementation=new p(t)}Dummy(){}}class m{constructor(t){this.divHost=void 0,this.divHost=document.getElementById(t),C.Init(t)}destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(t){console.error("Error in destroy method:",t)}else console.warn("divHost is undefined in destroy method")}}}}]);
//# sourceMappingURL=49383.5329c434.chunk.js.map