"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[9928],{49928:function(e,t,i){i.r(t),i.d(t,{AppTFEnv:function(){return T}});var s=i(3156);class r{constructor(e){this.model=void 0,this.x=-1,this.y=-1,this.z=-1,this.preX=-1,this.preY=-1,this.preZ=-1,this.yGLPicking=void 0,this.command=void 0,this.CLICK_TYPE=s.uh.MOVE,this.isDown=!1,this.isDoubleClick=!1,this.isMove=!1,this.pressedShift=!1,this.pressedAlt=!1,this.pressedCtrl=!1,this.lat=-1,this.long=-1,this.wheel=0,this.preWheel=0,this.isActive=!0,this.native=void 0,null!==e&&void 0!==e&&(this.model=e)}DeepCopy(){let e=new r(this.model);return e.x=this.x,e.y=this.y,e.z=this.z,e.preX=this.preX,e.preY=this.preY,e.preZ=this.preZ,e.pressedAlt=this.pressedAlt,e.pressedShift=this.pressedShift,e.pressedCtrl=this.pressedCtrl,e.isDoubleClick=this.isDoubleClick,e.isDown=this.isDown,e.isMove=this.isMove,e.lat=this.lat,e.long=this.long,e.wheel=this.wheel,e.preWheel=this.preWheel,e.yGLPicking=this.yGLPicking,e.CLICK_TYPE=this.CLICK_TYPE,e.command=this.command,e.native=this.native,e}}class o{constructor(e){this.mouseInteractionUI=void 0,this.mouseEventDataPre=new r,this.model=void 0,this.isEnable=!0,this.clickCount=0,this.click=!1,this.prevent=!1,this.delay=250,this.timer=void 0,this.down=!1,this.e=void 0,this._stopPropagation=!1,this.model=e}InitNativeMouseEvent(e){e.onclick=e=>{this.prevent=!1,this.timer=setTimeout((()=>{this.prevent||this.MouseClick(e),this.prevent=!1}),this.delay)},e.ondblclick=e=>{clearTimeout(this.timer),this.prevent=!0,this.MouseDoubleClick(e)},e.onmousedown=e=>{this.MouseDown(e)},e.onmouseup=e=>{this.MouseUp(e)},e.onmousemove=e=>{this.MouseMove(e)},e.addEventListener("wheel",(e=>this.MouseWheel(e,e.deltaY)))}MouseDown(e){this.click=!0,this.down=!0;let t=this.CommonEventBuilder(e);t.CLICK_TYPE=s.uh.DOWN,t.isDown=!0,this.MouseEvenEmitting(t)}MouseClick(e){if(!this.click)return;let t=this.CommonEventBuilder(e);0===e.button?t.CLICK_TYPE=s.uh.LEFT:1===e.button?t.CLICK_TYPE=s.uh.MIDDLE:2===e.button&&(t.CLICK_TYPE=s.uh.RIGHT),this.MouseEvenEmitting(t)}MouseDoubleClick(e){let t=this.CommonEventBuilder(e);t.CLICK_TYPE=s.uh.DOUBLE,this.MouseEvenEmitting(t)}MouseDrag(e){this.click=!1,this.prevent=!0;let t=this.CommonEventBuilder(e);t.CLICK_TYPE=s.uh.DRAG,t.isDown=!0,1===e.buttons?t.CLICK_TYPE=s.uh.DRAG:4===e.buttons?t.CLICK_TYPE=s.uh.DRAG_MIDDLE:2===e.buttons&&(t.CLICK_TYPE=s.uh.DRAG_RIGHT),this.MouseEvenEmitting(t)}MouseMove(e){if(this.down)return void this.MouseDrag(e);let t=this.CommonEventBuilder(e);t.CLICK_TYPE=s.uh.MOVE,t.isDown=!0,this.prevent=!0,this.MouseEvenEmitting(t)}MouseUp(e){this.down=!1,this.click=!0;let t=this.CommonEventBuilder(e);t.CLICK_TYPE=s.uh.UP,t.isDown=!1,this.MouseEvenEmitting(t)}MouseWheel(e,t){let i=this.CommonEventBuilder(e);i.wheel=t,i.CLICK_TYPE=s.uh.WHEEL,this.MouseEvenEmitting(i)}CommonEventBuilder(e){let t=new r(this.model);return t.preX=this.mouseEventDataPre.x,t.preY=this.mouseEventDataPre.y,t.pressedShift=e.shiftKey,t.pressedAlt=e.altKey,t.pressedCtrl=e.ctrlKey,t.x=e.offsetX,t.y=e.offsetY,t.preWheel=this.mouseEventDataPre.wheel,t.wheel=0,t.native=e,this.mouseEventDataPre=t,this.e=t,t}get stopPropagation(){return this._stopPropagation}set stopPropagation(e){e?this._stopPropagation=e:setTimeout((()=>{this._stopPropagation=e}),500)}MouseEvenEmitting(e){this.MouseEventEmittingForViewController(e),this._stopPropagation||this.MouseEventEmittingForModel(e)}MouseEventEmittingForViewController(e){this.mouseInteractionUI&&this.mouseInteractionUI.MouseInteractionMenu(e)}MouseEventEmittingForModel(e){e.model.controllerCoreWrapper.activeCommandController.MouseEventController(e)}}class h{constructor(e){this.appCoreWrapper=void 0,this.mouseInteraction=void 0,this.appCoreWrapper=e,this.mouseInteraction=new o(this.appCoreWrapper.model)}InitEventListener(e){this.mouseInteraction.InitNativeMouseEvent(e),this.Resize()}Resize(){window.addEventListener("resize",(e=>this.ReSizeWindow(e)))}ReSizeWindow(e){const t=this.appCoreWrapper.model.modelViewCoreWrapper.viewWrapper.divHost;this.appCoreWrapper.model.graphicsCoreWrapper.canvasWrapper.canvas.ResizeCanvas(t.clientWidth,t.clientHeight)}}class n{constructor(e,t){this.model=void 0,this.appProperties=void 0,this.appAccessibility=void 0,this.browserUtility=void 0,this.ioWrapper=void 0,this.model=e,this.appProperties=new s.gj,this.browserUtility=new s.R7,this.ioWrapper=new h(this)}}class p{constructor(e){this.controllerCoreWrapper=void 0,this.controllerCoreWrapper=e}MouseEventController(e){this.controllerCoreWrapper.model.graphicsCoreWrapper.sceneWrapper.MouseEventController(e),e.CLICK_TYPE!==s.uh.LEFT?e.CLICK_TYPE!==s.uh.MIDDLE?e.CLICK_TYPE!==s.uh.DOWN_RIGHT?e.CLICK_TYPE!==s.uh.DOUBLE?e.CLICK_TYPE!==s.uh.MOVE?e.CLICK_TYPE!==s.uh.DRAG?e.CLICK_TYPE!==s.uh.DOWN?e.CLICK_TYPE!==s.uh.WHEEL?e.CLICK_TYPE!==s.uh.UP||this.MouseUpPre(e):this.MouseWheelPre(e):this.MouseDownPre(e):this.MouseDragPre(e):this.MouseMovePre(e):this.MouseDoubleClickPre(e):this.MouseRightClickPre(e):this.MouseMiddleClickPre(e):this.MouseLeftClickPre(e)}MouseDown(e){}MouseDownPre(e){this.MouseDown(e)}MouseLeftClick(e){}MouseLeftClickPre(e){this.MouseLeftClick(e)}MouseMiddleClick(e){}MouseMiddleClickPre(e){this.MouseMiddleClick(e)}MouseRightClick(e){}MouseRightClickPre(e){this.MouseRightClick(e)}MouseUp(e){}MouseUpPre(e){this.MouseUp(e)}MouseDoubleClick(e){}MouseDoubleClickPre(e){this.MouseDoubleClick(e)}MouseMove(e){}MouseMovePre(e){this.MouseMove(e)}MouseDrag(e){}MouseDragPre(e){this.MouseDrag(e)}MouseWheel(e){}MouseWheelPre(e){this.MouseWheel(e)}ShfitScene(e){this.controllerCoreWrapper.model.graphicsCoreWrapper.sceneWrapper.ShiftScene(e)}RemoveScene(){this.controllerCoreWrapper.model.graphicsCoreWrapper.sceneWrapper.RemoveAllScene()}LoadDefinition(e){this.controllerCoreWrapper.model.graphicsCoreWrapper.sceneWrapper.LoadDefinition(e)}Test(){}}class a{constructor(e){this.model=void 0,this.activeCommandController=void 0,this.model=e,this.activeCommandController=new p(this)}SetActiveCommand(e){}}class l{constructor(e,t){this.canvasWrapper=void 0,this.hostDiv=void 0,this.canvas=void 0,this.ctx=void 0,this.canvasWrapper=e,this.hostDiv=t,this.InitCanvas(this.hostDiv)}InitCanvas(e){this.canvas=document.createElement("canvas"),this.canvas.style.position="absolute",this.canvas.style.zIndex="0",this.hostDiv=e,this.hostDiv.appendChild(this.canvas),this.canvas.id="CanvasRenderer",this.canvas.className="njslab-web-core-canvas-renderer",this.canvas.style.pointerEvents="none",this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.hostDiv.clientWidth,this.canvas.height=this.hostDiv.clientHeight}ResizeCanvas(e,t){this.canvas.width=e,this.canvas.height=t}}class c{constructor(e){this.graphicsCoreWrapper=void 0,this.canvas=void 0,this.graphicsCoreWrapper=e,this.canvas=new l(this,this.graphicsCoreWrapper.model.modelViewCoreWrapper.viewWrapper.div)}}class v{constructor(e){this.graphicsCoreWrapper=void 0,this.graphicsCoreWrapper=e}}class d{constructor(e){this.rendererWrapper=void 0,this.isActive=!0,this.msLastFrame=0,this.msFpsLimit=30,this.deltatime=void 0,this.ctx=void 0,this.sceneWrapper=void 0,this.rendererWrapper=e,this.Init()}Init(){this.ctx=this.rendererWrapper.graphicsCoreWrapper.canvasWrapper.canvas.ctx,this.deltatime=new s.gk,this.Loop()}Loop(){this.isActive&&(requestAnimationFrame((()=>{this.Loop()})),this.OnRender())}OnRender(){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.deltatime.UpdateFPS(),this.sceneWrapper&&this.sceneWrapper.Render(this.ctx)}Stop(){this.isActive=!1}}class C{constructor(e){this.renderer=void 0,this.graphicsCoreWrapper=void 0,this.graphicsCoreWrapper=e,this.renderer=new d(this)}}class u{constructor(e){this.graphicsCoreWrapper=void 0,this.graphicsCoreWrapper=e}}class m{constructor(e){this.graphicsCoreWrapper=void 0,this.graphicsCoreWrapper=e,this.graphicsCoreWrapper.rendererWrapper.renderer.sceneWrapper=this}MouseEventController(e){this.graphicsCoreWrapper.model.app.implementation.MouseEventController(e)}Render(e){this.graphicsCoreWrapper.model.app.implementation.Render(e)}RemoveAllScene(){this.graphicsCoreWrapper.model.app.implementation.RemoveAllScene()}ShiftScene(e){this.graphicsCoreWrapper.model.app.implementation.ShiftScene(e)}LoadDefinition(e){this.graphicsCoreWrapper.model.app.implementation.LoadDefinition(e)}}class W{constructor(e){this.model=void 0,this.canvasWrapper=void 0,this.geometryCoreWrapper=void 0,this.rendererWrapper=void 0,this.themeWrapper=void 0,this.sceneWrapper=void 0,this.model=e,this.canvasWrapper=new c(this),this.geometryCoreWrapper=new v(this),this.rendererWrapper=new C(this),this.themeWrapper=new u(this),this.sceneWrapper=new m(this)}}class w{constructor(e){this.modelViewCoreWrapper=void 0,this.modelViewCoreWrapper=e}}class g{constructor(e){this.modelViewCoreWrapper=void 0,this.modelViewCoreWrapper=e}}class E{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;this.modelViewCoreWrapper=void 0,this.divHost=void 0,this.div=void 0,this.modelViewCoreWrapper=e,this.InitDiv(t,i,s),this.AppendEvent()}InitDiv(e,t,i){const s=document.createElement("div");s.style.position="absolute",this.div=document.createElement("div"),s.appendChild(this.div);const r=document.getElementById(e);r&&(this.divHost=r,this.divHost.parentNode&&this.divHost.appendChild(s)),this.div.id="NCanvas",this.div.style.width=this.divHost.clientWidth+"px",this.div.style.height=this.divHost.clientHeight+"px",this.div.style.zIndex="1"}AppendEvent(){window.addEventListener("resize",(()=>{this.div.style.width=this.divHost.clientWidth+"px",this.div.style.height=this.divHost.clientHeight+"px"}),!0)}}class M{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;this.model=void 0,this.logWrapper=void 0,this.uiWrapper=void 0,this.viewWrapper=void 0,this.model=e,this.logWrapper=new w(this),this.uiWrapper=new g(this),this.viewWrapper=new E(this,t,i,s)}}class I{constructor(e,t){this.app=void 0,this.appCoreWrapper=void 0,this.controllerCoreWrapper=void 0,this.graphicsCoreWrapper=void 0,this.modelViewCoreWrapper=void 0,this.app=e,this.appCoreWrapper=new n(this,t),this.modelViewCoreWrapper=new M(this,t),this.controllerCoreWrapper=new a(this),this.graphicsCoreWrapper=new W(this),this.Init()}Init(){this.appCoreWrapper.ioWrapper.InitEventListener(this.modelViewCoreWrapper.viewWrapper.div)}Restart(){}Destroy(){this.graphicsCoreWrapper.rendererWrapper.renderer.isActive=!1}Resize(e,t){this.graphicsCoreWrapper.canvasWrapper.canvas.ResizeCanvas(e,t),this.modelViewCoreWrapper.viewWrapper.div.style.width=e+"px",this.modelViewCoreWrapper.viewWrapper.div.style.height=t+"px"}}class P{constructor(e){this.app=void 0,this.tfProject=void 0,this.SceneVisMapArchGIS=void 0,this.app=e,this.InitProjects()}async InitProjects(){return Promise.all([i.e(386),i.e(3053)]).then(i.bind(i,13053)).then((e=>{let{TFProject:t}=e;this.tfProject=new t(this)})).catch((e=>{}))}MouseEventController(e){this.tfProject&&this.tfProject.activeCommandController.MouseEventController(e)}Render(e){this.tfProject&&this.tfProject.Render(e)}RemoveAllScene(){this.tfProject&&this.tfProject.Dispose(),this.tfProject=void 0}ShiftScene(e){}LoadDefinition(e){this.tfProject&&this.tfProject.LoadDefinition(e)}}class D{constructor(e){this.viewIO=void 0,this._propagation=!1,this.viewIO=e;this.viewIO.viewAppCoreWrapper.viewController.app.model.appCoreWrapper.ioWrapper.mouseInteraction.mouseInteractionUI=this}MouseInteractionMenu(e){this.viewIO.viewAppCoreWrapper.viewController.NUIWrapper.NUI.MouseInteractionMenu(e)}set stopPropagation(e){this.viewIO.viewAppCoreWrapper.viewController.app.model.appCoreWrapper.ioWrapper.mouseInteraction.stopPropagation=e,this._propagation=e}get stopPropagation(){return this._propagation}}class L{constructor(e){this.viewAppCoreWrapper=void 0,this.eventInteraction=void 0,this.viewAppCoreWrapper=e,this.eventInteraction=new D(this)}}class f{constructor(e){this.viewController=void 0,this.viewIOWrapper=void 0,this.viewController=e,this.viewIOWrapper=new L(this)}}class R{constructor(e){this.viewController=void 0,this.viewController=e}}class k{constructor(e){this.viewControllerWrapper=void 0,this.viewControllerWrapper=e}Resize(e,t){this.viewControllerWrapper.viewController.NUIWrapper.Resize(e,t)}}class A{constructor(e){this.viewController=void 0,this.viewActiveCommandController=void 0,this.viewController=e,this.viewActiveCommandController=new k(this)}}class y{constructor(e,t){this.NUI=void 0,this.viewController=void 0,this.viewController=e,this.NUI=new s.Fc(this.viewController.app.model.modelViewCoreWrapper.viewWrapper.div,t),this.BindingActiveCommandController()}BindingActiveCommandController(){this.NUI.BindingActiveCommandController("NTF",this.viewController.app.model.controllerCoreWrapper.activeCommandController)}Resize(e,t){this.NUI.Resize(e,t)}Destroy(){this.NUI.Destroy()}}class _{constructor(e,t){this.app=void 0,this.viewAppCoreWrapper=void 0,this.viewAssetWrapper=void 0,this.viewControllerWrapper=void 0,this.NUIWrapper=void 0,this.app=e,this.viewAssetWrapper=new R(this),this.viewAppCoreWrapper=new f(this),this.viewControllerWrapper=new A(this),this.NUIWrapper=new y(this,t)}Resize(e,t){this.viewControllerWrapper.viewActiveCommandController.Resize(e,t)}Destroy(){this.NUIWrapper.Destroy()}}class T{static InitSubApp(e,t){const i=new T(e,!1);i.implementation.InitProjects().then((()=>{i.implementation.tfProject.LoadDefinition(t)}))}static Init(e){new T(e)}constructor(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.viewController=void 0,this.model=void 0,this.implementation=void 0,this.needUI=!1,this.divHost=void 0,this.needUI=t;const i=document.getElementById(e);i&&(this.divHost=i),this.model=new I(this,e),this.implementation=new P(this),this.viewController=new _(this,t)}}},3156:function(e,t,i){i.d(t,{gj:function(){return s.gj},R7:function(){return s.R7},uh:function(){return s.uh},gk:function(){return s.gk},$H:function(){return s.$H},Fc:function(){return s.Fc},h9:function(){return s.h9}});var s=i(46710)}}]);
//# sourceMappingURL=9928.c64ee76d.chunk.js.map