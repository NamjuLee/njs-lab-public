"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[64339],{64339:(e,t,n)=>{n.r(t),n.d(t,{NJSLabSandboxCore:()=>g});class o{constructor(e){this.implementation=void 0,this.implementation=e}async AppCanvasTemplate(e){return n.e(60431).then(n.bind(n,60431)).then((t=>{let{AppCanvasTemplate:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async AppSVGTemplate(e){return n.e(25965).then(n.bind(n,25965)).then((t=>{let{AppSVG:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async AppParticlePan(e){return n.e(13267).then(n.bind(n,13267)).then((t=>{let{AppParticle:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async AppGridSystem(e){return n.e(90598).then(n.bind(n,90598)).then((t=>{let{AppGridSystem:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async AppTFTemplate(){return console.trace(),n.e(12512).then(n.bind(n,12512)).then((e=>{let{AppTF:t}=e;t.Init()})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async AppThreeTemplate(e){return n.e(64544).then(n.bind(n,64544)).then((t=>{let{AppThreeTemplate:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async AppThreeGlobeNetwork(e){return n.e(94788).then(n.bind(n,94788)).then((t=>{let{AppThreeGlobeNetwork:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async AppSmartDrawing(e){return n.e(10191).then(n.bind(n,10191)).then((t=>{let{AppSmartDrawing:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}}class i{constructor(e){this.implementation=void 0,this.implementation=e}async Demo5AppThreeGlobeNetwork(e){return n.e(29837).then(n.bind(n,29837)).then((t=>{let{AppThreeGlobeNetwork:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async Demo12NWebGL1(e){return n.e(95781).then(n.bind(n,95781)).then((t=>{let{WebGL1:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async Demo12NWebGL2(e){return n.e(82773).then(n.bind(n,82773)).then((t=>{let{WebGL2:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async Demo12NGLSL(e){return n.e(55209).then(n.bind(n,55209)).then((t=>{let{WebGL2GLSL:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async Demo12NGLSLPlayground(e){return n.e(83554).then(n.bind(n,83554)).then((t=>{let{Demo12WebGLGLSLPlayground:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async Demo13NWebGPU2(e){return n.e(27671).then(n.bind(n,27671)).then((t=>{let{WebGPU:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async Demo250TetrisGame(e){return n.e(64586).then(n.bind(n,64586)).then((t=>{let{Demo250AppTetrisGame:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}}class s{constructor(e){this.implementation=void 0,this.implementation=e}async AppDrawingBlock(e){return n.e(85088).then(n.bind(n,85088)).then((t=>{let{AppDrawingBlock:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async AppEnvThree(e){return n.e(98925).then(n.bind(n,99304)).then((t=>{let{AppThreeEnv:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async AppEnvGoogleMap(e){return console.log("ddd"),n.e(16131).then(n.bind(n,16131)).then((t=>{let{AppGoogleMapEnv:n}=t;n.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}async AppEnvAlgorithm(e,t){return n.e(36745).then(n.bind(n,36745)).then((n=>{let{AppAlgorithmEnv:o}=n;t?o.InitSubApp(e,t):o.Init(e)})).catch((e=>{console.log("Stop loading Apps."),console.log(e)}))}}class a{constructor(e){this.implementation=void 0,this.implementation=e}async DemoCodepenCanvas(e){const t=document.getElementById(e),n=document.createElement("iframe");n&&t&&(n.src="https://codepen.io/NJStudio/embed/WNQMyjz?height=265&theme-id=dark&default-tab=js,result",n.style.borderWidth="0px",n.style.width=t.style.width,n.style.height=t.style.height,t.append(n))}}class l{constructor(e){this.njsSandCore=void 0,this.apps=void 0,this.demos=void 0,this.envs=void 0,this.externalApps=void 0,this.njsSandCore=e,this.apps=new o(this),this.demos=new i(this),this.envs=new s(this),this.externalApps=new a(this)}}var p=n(40403);class d{constructor(e){this.sandboxEnv=void 0,this.sandboxEnv=e}InitParamEnv(e){switch(this.sandboxEnv.HTMLCore.RemoveChild(),this.sandboxEnv.HTMLCore.AddMainDiv(),e){case"canvas":return!0;case"three":return this.sandboxEnv.njsLabSandBox.implementation.envs.AppEnvThree("main"),!0;case"googlemap":return this.sandboxEnv.njsLabSandBox.implementation.envs.AppEnvGoogleMap("main"),!0;default:return!1}}InitParamApp(e){return this.sandboxEnv.HTMLCore.RemoveChild(),this.sandboxEnv.HTMLCore.AddMainDiv(),!1}InitParamDemo(e){switch(this.sandboxEnv.HTMLCore.RemoveChild(),this.sandboxEnv.HTMLCore.AddMainDiv(),console.log("param",e),e){case"5":return this.sandboxEnv.njsLabSandBox.implementation.demos.Demo5AppThreeGlobeNetwork("main"),!0;case"20":return this.sandboxEnv.njsLabSandBox.implementation.demos.Demo12NGLSL("main"),!0;case"21":return this.sandboxEnv.njsLabSandBox.implementation.demos.Demo12NWebGL1("main"),!0;case"22":return this.sandboxEnv.njsLabSandBox.implementation.demos.Demo12NWebGL2("main"),!0;case"39":return this.sandboxEnv.njsLabSandBox.implementation.demos.Demo12NGLSLPlayground("main"),!0;case"250":return this.sandboxEnv.njsLabSandBox.implementation.demos.Demo250TetrisGame("main"),!0}return!1}}class r{constructor(e){this.HTMLCore=void 0,this.HTMLCore=e}InitAppInterfaceMainMenu(e){const t=document.createElement("div");t.id="top",t.style.color="#888",this.HTMLCore.host.append(t);const n=document.createElement("h1");n.textContent="NJSLab: Design, Computation, and Data Lab",n.style.paddingLeft="5px",n.style.marginTop="0px",n.style.marginBottom="0px",t.append(n);const o=document.createElement("h5");o.textContent="Sandbox!! Verion 0.1.2",o.style.paddingLeft="5px",o.style.marginTop="0px",o.style.marginBottom="0px",t.append(o);const i=document.createElement("nav");i.style.display="flex";let s=document.createElement("ol");s.textContent="INDEX",s.style.marginTop="0px",s.style.paddingLeft="5px",s.style.paddingRight="5px",s.onmouseover=()=>{s.style.backgroundColor="chartreuse"},s.onmouseleave=()=>{s.style.backgroundColor="white"},s.onclick=()=>{const e=document.getElementById("demoDiv");e&&this.HTMLCore.host.removeChild(e);const t=document.getElementById("main");t&&this.HTMLCore.host.removeChild(t),this.HTMLCore.InitAppInterfaceMainSuuMenu()},i.append(s),this.HTMLCore.host.append(i);let a=document.createElement("ol");a.textContent="NJSTUDIO",a.style.marginTop="0px",a.style.paddingLeft="5px",a.style.paddingRight="5px",a.onmouseover=()=>{a.style.backgroundColor="chartreuse"},a.onmouseleave=()=>{a.style.backgroundColor="white"},a.onclick=()=>{window.location.href="http://www.njstudio.co.kr"},i.append(a);let l=document.createElement("ol");l.textContent="NJSLAB Env",l.style.marginTop="0px",l.style.paddingLeft="5px",l.style.paddingRight="5px",l.onmouseover=()=>{l.style.backgroundColor="chartreuse"},l.onmouseleave=()=>{l.style.backgroundColor="white"},l.onclick=()=>{window.location.href="http://www.njslab.com/NJSLabEnv"},i.append(l);let p=document.createElement("ol");p.textContent="NJSLAB",p.style.marginTop="0px",p.style.paddingLeft="5px",p.style.paddingRight="5px",p.onmouseover=()=>{p.style.backgroundColor="chartreuse"},p.onmouseleave=()=>{p.style.backgroundColor="white"},p.onclick=()=>{window.location.href="http://www.njslab.com"},i.append(p),this.HTMLCore.host.append(i)}}class h{constructor(e){this.sandboxEnv=void 0,this.color=void 0,this.imple=void 0,this.mainMenu=void 0,this.allApp=!1,this.host=void 0,this.divHostRef=void 0,this.sandboxEnv=e,this.host=document.createElement("div");document.getElementById(this.sandboxEnv.njsLabSandBox.id).appendChild(this.host),this.mainMenu=new r(this),this.imple=this.sandboxEnv.njsLabSandBox.implementation,this.color="chartreuse"}RemoveChild(){for(let e=0;e<this.host.children.length;++e)this.host.removeChild(this.host.children[e]);this.host.style.margin="0px",this.host.style.overflow="hidden"}InitAppInterface(e){this.allApp=e,this.RemoveChild(),this.mainMenu.InitAppInterfaceMainMenu(this.color),this.InitAppInterfaceMainSuuMenu()}InitAppInterfaceMainSuuMenu(){let e,t=document.createElement("div");if(t.id="demoDiv",this.allApp){let n=document.createElement("h4");n.textContent="NJSLab Web Sandbox",n.style.paddingLeft="5px",n.style.marginBottom="0px",t.append(n);let o=document.createElement("div");o.style.display="flex",o.style.flexWrap="wrap",t.append(o),e=this.GetDivMenu("NThree"),e.onclick=()=>{this.RemoveAddMain(),this.imple.envs.AppEnvThree("main")},o.append(e),e=this.GetDivMenu("DrawingBlock"),e.onclick=()=>{this.RemoveAddMain(),this.imple.envs.AppDrawingBlock("main")},o.append(e),e=this.GetDivMenu("Algorithm"),e.onclick=()=>{this.RemoveAddMain(),this.imple.envs.AppEnvAlgorithm("main")},o.append(e)}let n=document.createElement("h4");n.textContent="DESIGN SYSTEM - design engineering, agent-base design, parametric system",n.style.paddingLeft="5px",n.style.marginBottom="0px",t.append(n);let o=document.createElement("div");o.style.display="flex",o.style.flexWrap="wrap",t.append(o),n=document.createElement("h4"),n.textContent="GEOMETRY - analysis, generative design, optimization, simulation",n.style.paddingLeft="5px",n.style.marginBottom="0px",t.append(n),o=document.createElement("div"),o.style.display="flex",o.style.flexWrap="wrap",t.append(o),n=document.createElement("h4"),n.textContent="VISUALIZATION",n.style.paddingLeft="5px",n.style.marginBottom="0px",t.append(n),o=document.createElement("div"),o.style.display="flex",o.style.flexWrap="wrap",t.append(o),e=this.GetDivMenu("5: Network"),e.onclick=()=>{this.RemoveAddMain(),this.imple.demos.Demo5AppThreeGlobeNetwork("main")},o.append(e),n=document.createElement("h4"),n.textContent="AI - Machine Learning, Deep Learning ",n.style.paddingLeft="5px",n.style.marginBottom="0px",t.append(n),o=document.createElement("div"),o.style.display="flex",o.style.flexWrap="wrap",t.append(o),n=document.createElement("h4"),n.textContent="ALGORITHM & DESIGN - spatial data process",n.style.paddingLeft="5px",n.style.marginBottom="0px",t.append(n),o=document.createElement("div"),o.style.display="flex",o.style.flexWrap="wrap",t.append(o),n=document.createElement("h4"),n.textContent="DYNAMICS - Particle, Simulation",n.style.paddingLeft="5px",n.style.marginBottom="0px",t.append(n),o=document.createElement("div"),o.style.display="flex",o.style.flexWrap="wrap",t.append(o),e=this.GetDivMenu("250: Tetris Game"),e.onclick=()=>{this.RemoveAddMain(),this.imple.demos.Demo250TetrisGame("main")},o.append(e),n=document.createElement("h4"),n.textContent="STARTER",n.style.paddingLeft="5px",n.style.marginBottom="0px",t.append(n),o=document.createElement("div"),o.style.display="flex",o.style.flexWrap="wrap",t.append(o),e=this.GetDivMenu("14: Codepen Canvas"),e.onclick=()=>{this.RemoveAddMain(),this.imple.externalApps.DemoCodepenCanvas("main")},o.append(e),e=this.GetDivMenu("20: GLSL Playground"),e.onclick=()=>{this.RemoveAddMain(),this.imple.demos.Demo12NGLSL("main")},o.append(e),e=this.GetDivMenu("5: Network"),e.onclick=()=>{this.RemoveAddMain(),this.imple.demos.Demo12NGLSLPlayground("main")},o.append(e),e=this.GetDivMenu("WebGPU"),e.onclick=()=>{this.RemoveAddMain(),this.imple.demos.Demo13NWebGPU2("main")},o.append(e),e=this.GetDivMenu("21:WebGL1"),e.onclick=()=>{this.RemoveAddMain(),this.imple.demos.Demo12NWebGL1("main")},o.append(e),e=this.GetDivMenu("22:WebGL2"),e.onclick=()=>{this.RemoveAddMain(),this.imple.demos.Demo12NWebGL2("main")},o.append(e),this.host.append(t)}GetDivMenu(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.createElement("ol");return n.textContent=e,n.style.paddingLeft="5px",n.style.paddingRight="5px",t&&(n.onmouseover=()=>{n.style.backgroundColor=this.color}),n.onmouseleave=()=>{n.style.backgroundColor="white"},n}RemoveAddMain(){const e=document.getElementById("demoDiv");e&&this.host.removeChild(e);const t=document.createElement("div");t.id="main",t.style.height="100%",t.style.width="100%",this.host.style.overflow="hidden",window.scrollTo({top:0,behavior:"smooth"}),this.host.append(t)}AddMainDiv(){const e=document.createElement("div");e&&(e.id="main",e.style.width="100%",e.style.height="100%",this.host.append(e))}}class c{constructor(e){this.njsLabSandBox=void 0,this.paramApp=void 0,this.HTMLCore=void 0,this.allapps=!1,this.njsLabSandBox=e,this.HTMLCore=new h(this),this.paramApp=new d(this)}InitParam(e){const t=e;if(t.env){if(this.paramApp.InitParamEnv(e.env))return}else if(t.app){if(this.paramApp.InitParamApp(e.app))return}else if(t.demo){if(this.paramApp.InitParamDemo(e.demo))return}else t.all&&(this.allapps=!0);this.HTMLCore.InitAppInterface(this.allapps)}}var m=n(55913);class g{static init(e){this.appCore=new g(e)}constructor(e){this.implementation=void 0,this.sandboxEnv=void 0,this.id=void 0,this.id=e,this.implementation=new l(this),this.sandboxEnv=new c(this),this.InitParam(),console.log("njscore",m.i8)}InitParam(){let e=p.R7.getAllUrlParams();e={all:!0},this.sandboxEnv.InitParam(e)}}g.appCore=void 0}}]);
//# sourceMappingURL=64339.5d016aaf.chunk.js.map