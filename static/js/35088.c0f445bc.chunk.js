"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[35088],{35088:(t,e,i)=>{i.r(e),i.d(e,{AppDrawingBlock:()=>W,Solution:()=>B});var s=i(458);class o{constructor(t,e){this.core=void 0,this.div=void 0,this.canvas=void 0,this.ctx=void 0,this.isActive=!1,this.zoom=1,this.translation=[0,0],this.translationZoom=[0,0],this.deltaTime=void 0,this.canvasLoopController=void 0,this.log=void 0,this.isViewChanging=!1,this.loopNum=0,this.needRenderloop=!0,this.ablePan=!0,this.pause=!1,this.core=t,this.div=e,this.Init(),this.LoopInit()}Init(){const t=document.createElement("canvas");if(t){this.canvas=t,this.canvas.width=this.div.clientWidth,this.canvas.height=this.div.clientHeight,this.div.append(this.canvas);const e=this.canvas.getContext("2d");e&&(this.ctx=e,this.isActive=!0)}}LoopInit(){this.translation[0]=.5*this.ctx.canvas.width,this.translation[1]=.5*this.ctx.canvas.height,this.deltaTime=new s.gk,this.canvasLoopController=new s.NI(60),this.SetLevel4(),this.Loop()}Loop(){let t=performance.now();if(this.deltaTime.UpdateFPS(),this.canvasLoopController.level>3){if(6===this.canvasLoopController.level)requestAnimationFrame((()=>{this.Loop()})),this.RenderPre(this.ctx);else if(5===this.canvasLoopController.level)this.isViewChanging,requestAnimationFrame((()=>{this.Loop()})),this.RenderPre(this.ctx);else if(4===this.canvasLoopController.level){if(this.isViewChanging,requestAnimationFrame((()=>{this.Loop()})),this.canvasLoopController.stop)return;this.RenderPre(this.ctx),this.canvasLoopController.TimerForStop()}}else 1===this.canvasLoopController.level&&this.isViewChanging||this.RenderPre(this.ctx);let e=performance.now();this.log="level:  ".concat(this.canvasLoopController.level,", total frames: ").concat(this.loopNum++," (FPS: ").concat(this.deltaTime.frameRate.toFixed(0),"), a loop took: ").concat((e-t).toFixed(2)," ms to execute.")}SetLevel1(){this.canvasLoopController.level=1,this.Loop()}SetLevel2(){this.canvasLoopController.level=2,this.Loop()}SetLevel3(){this.canvasLoopController.level=3,this.Loop()}RenderSetLevel4(){this.canvasLoopController.stop=!0}SetLevel4(){this.canvasLoopController.Reset(),setTimeout((()=>{this.canvasLoopController.level=4,this.Loop()}),500)}SetLevel5(){this.canvasLoopController.Reset(),setTimeout((()=>{this.canvasLoopController.level=5,this.Loop()}),500)}SetLevel6(){this.canvasLoopController.Reset(),setTimeout((()=>{this.canvasLoopController.level=6,this.Loop()}),500)}Clear(t){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)}Zoom(t){t.wheel<0?this.zoom+=.09*this.zoom:(console.log("out",this.zoom),this.zoom-=.09*this.zoom)}RemapByZoom(t){return t.x=(t.xs-this.translation[0])/this.zoom,t.y=(t.ys-this.translation[1])/this.zoom,t}Pan(t){if(!this.ablePan)return;const e=t.xs-t.preXs,i=t.ys-t.preYs;this.translation[0]+=e,this.translation[1]+=i}RenderForce(){this.canvasLoopController.stop=!1}RenderPre(t){this.isActive&&(this.Clear(this.ctx),this.ctx.save(),this.ctx.translate(this.translation[0],this.translation[1]),this.ctx.scale(this.zoom,this.zoom),this.Render(t),this.ctx.restore())}Render(t){}}let n,h;!function(t){t.LEFT="LEFT",t.MIDDLE="MIDDLE",t.RIGHT="RIGHT",t.WHEEL="WHEEL",t.DRAG="DRAG",t.DRAG_LEFT="DRAG_LEFT",t.DRAG_MIDDLE="DRAG_MIDDLE",t.DRAG_RIGHT="DRAG_RIGHT",t.MOVE="MOVE",t.DOUBLE="DOUBLE",t.UP="UP",t.DOWN="DOWN",t.DOWN_MIDDLE="DOWN_MIDDLE",t.DOWN_RIGHT="DOWN_RIGHT"}(n||(n={}));class r{constructor(){this.x=-1,this.y=-1,this.z=-1,this.preX=-1,this.preY=-1,this.preZ=-1,this.xs=-1,this.ys=-1,this.preXs=-1,this.preYs=-1,this.yGLPicking=void 0,this.command=void 0,this.CLICK_TYPE=n.MOVE,this.isDown=!1,this.isDoubleClick=!1,this.isMove=!1,this.pressedShift=!1,this.pressedAlt=!1,this.pressedCtrl=!1,this.wheel=0,this.preWheel=0,this.isActive=!0,this.native=void 0}DeepCopy(){let t=new r;return t.x=this.x,t.y=this.y,t.z=this.z,t.preX=this.preX,t.preY=this.preY,t.preZ=this.preZ,t.xs=this.x,t.ys=this.y,t.preXs=this.preXs,t.preYs=this.preYs,t.pressedAlt=this.pressedAlt,t.pressedShift=this.pressedShift,t.pressedCtrl=this.pressedCtrl,t.isDoubleClick=this.isDoubleClick,t.isDown=this.isDown,t.isMove=this.isMove,t.wheel=this.wheel,t.preWheel=this.preWheel,t.yGLPicking=this.yGLPicking,t.CLICK_TYPE=this.CLICK_TYPE,t.command=this.command,t.native=this.native,t}}class l{constructor(t){this.mouseInteractionUI=void 0,this.mouseEventDataPre=new r,this.isEnable=!0,this.clickCount=0,this.click=!1,this.prevent=!1,this.delay=250,this.timer=void 0,this.down=!1,this.e=void 0,this._stopPropagation=!1,this.ioWrapper=void 0,this.ioWrapper=t}InitNativeMouseEvent(t){t.onclick=t=>{this.prevent=!1,this.timer=setTimeout((()=>{this.prevent||this.MouseClick(t),this.prevent=!1}),this.delay)},t.ondblclick=t=>{clearTimeout(this.timer),this.prevent=!0,this.MouseDoubleClick(t)},t.onmousedown=t=>{this.MouseDown(t)},t.onmouseup=t=>{this.MouseUp(t)},t.onmousemove=t=>{this.MouseMove(t)},t.addEventListener("wheel",(t=>this.MouseWheel(t,t.deltaY)))}MouseDown(t){this.click=!0,this.down=!0;let e=this.CommonEventBuilder(t);e.CLICK_TYPE=n.DOWN,e.isDown=!0,this.MouseEvenEmitting(e)}MouseClick(t){if(!this.click)return;let e=this.CommonEventBuilder(t);0===t.button?e.CLICK_TYPE=n.LEFT:1===t.button?e.CLICK_TYPE=n.MIDDLE:2===t.button&&(e.CLICK_TYPE=n.RIGHT),this.MouseEvenEmitting(e)}MouseDoubleClick(t){let e=this.CommonEventBuilder(t);e.CLICK_TYPE=n.DOUBLE,this.MouseEvenEmitting(e)}MouseDrag(t){this.click=!1,this.prevent=!0;let e=this.CommonEventBuilder(t);e.CLICK_TYPE=n.DRAG,e.isDown=!0,1===t.buttons?e.CLICK_TYPE=n.DRAG:4===t.buttons?e.CLICK_TYPE=n.DRAG_MIDDLE:2===t.buttons&&(e.CLICK_TYPE=n.DRAG_RIGHT),this.MouseEvenEmitting(e)}MouseMove(t){if(this.down)return void this.MouseDrag(t);let e=this.CommonEventBuilder(t);e.CLICK_TYPE=n.MOVE,e.isDown=!0,this.prevent=!0,this.MouseEvenEmitting(e)}MouseUp(t){this.down=!1,this.click=!0;let e=this.CommonEventBuilder(t);e.CLICK_TYPE=n.UP,e.isDown=!1,this.MouseEvenEmitting(e)}MouseWheel(t,e){let i=this.CommonEventBuilder(t);i.wheel=e,i.CLICK_TYPE=n.WHEEL,this.MouseEvenEmitting(i)}CommonEventBuilder(t){let e=new r;return e.preXs=this.mouseEventDataPre.xs,e.preYs=this.mouseEventDataPre.ys,e.preX=this.mouseEventDataPre.x,e.preY=this.mouseEventDataPre.y,e.pressedShift=t.shiftKey,e.pressedAlt=t.altKey,e.pressedCtrl=t.ctrlKey,e.xs=t.offsetX,e.ys=t.offsetY,e.preWheel=this.mouseEventDataPre.wheel,e.wheel=0,e.native=t,e=this.ioWrapper.core.canvas.RemapByZoom(e),this.mouseEventDataPre=e,this.e=e,e}get stopPropagation(){return this._stopPropagation}set stopPropagation(t){t?this._stopPropagation=t:setTimeout((()=>{this._stopPropagation=t}),500)}MouseEvenEmitting(t){this.MouseEventEmittingForViewController(t),this._stopPropagation||this.MouseEventEmittingForModel(t)}MouseEventEmittingForViewController(t){this.mouseInteractionUI&&this.mouseInteractionUI.MouseInteractionMenu(t)}MouseEventEmittingForModel(t){this.ioWrapper.core.activeCommandController.MouseEventController(t)}}class a{constructor(t){this.core=void 0,this.mouseInteraction=void 0,this.core=t,this.mouseInteraction=new l(this)}InitEventListener(t){this.mouseInteraction.InitNativeMouseEvent(t),this.Resize()}Resize(){window.addEventListener("resize",(t=>this.ReSizeWindow(t)))}ReSizeWindow(t){}}class c{constructor(t){this.core=void 0,this.mouse=new s.h9(0,0),this.core=t}MouseEventController(t){const e=t.DeepCopy();e.x=t.xs,e.y=t.ys,this.core.nUI.MouseInteractionMenu(e),this.core.nUI.stopPropagation||(this.core.canvas.RenderForce(),this.core.nBlock.implementations.MouseEventController(t),t.CLICK_TYPE!==s.uh.LEFT?t.CLICK_TYPE!==s.uh.MIDDLE?t.CLICK_TYPE!==s.uh.DOWN_RIGHT?t.CLICK_TYPE!==s.uh.DOUBLE?t.CLICK_TYPE!==s.uh.MOVE?t.CLICK_TYPE!==s.uh.DRAG?t.CLICK_TYPE!==s.uh.DOWN?t.CLICK_TYPE!==s.uh.WHEEL?t.CLICK_TYPE!==s.uh.UP||this.MouseUpPre(t):this.MouseWheelPre(t):this.MouseDownPre(t):this.MouseDragPre(t):this.MouseMovePre(t):this.MouseDoubleClickPre(t):this.MouseRightClickPre(t):this.MouseMiddleClickPre(t):this.MouseLeftClickPre(t))}MouseDown(t){}MouseDownPre(t){this.MouseDown(t)}MouseLeftClick(t){}MouseLeftClickPre(t){this.MouseLeftClick(t)}MouseMiddleClick(t){}MouseMiddleClickPre(t){this.MouseMiddleClick(t)}MouseRightClick(t){}MouseRightClickPre(t){this.MouseRightClick(t)}MouseUp(t){}MouseUpPre(t){this.MouseUp(t)}MouseDoubleClick(t){}MouseDoubleClickPre(t){this.MouseDoubleClick(t)}MouseMove(t){}MouseMovePre(t){this.MouseMove(t)}MouseDrag(t){}MouseDragPre(t){this.mouse.x=t.x,this.mouse.y=t.y,this.core.canvas.Pan(t),this.MouseDrag(t)}MouseWheel(t){}MouseWheelPre(t){this.core.canvas.Zoom(t),this.MouseWheel(t)}pushActionFromPulldown(t){t.split("@")[0]}}class d{constructor(t,e){this.nBlock=void 0,this.canvas=void 0,this.nUI=void 0,this.ioWrapper=void 0,this.activeCommandController=void 0,this.nBlock=t,this.InitPulldown(),this.InitCanvas(e),this.activeCommandController=new c(this),this.ioWrapper=new a(this)}InitCanvas(t){this.canvas=new o(this,t)}InitPulldown(){this.nUI=new s.Fc(this.nBlock.div),this.BindingActiveCommandController()}InitPost(){this.ioWrapper.InitEventListener(this.nBlock.div)}BindingActiveCommandController(){this.nUI.BindingActiveCommandController("NDrawingBlock",(t=>this.Commander(t)))}Resize(t,e){this.nUI.Resize(t,e)}Commander(t){this.activeCommandController.pushActionFromPulldown(t)}}class u{constructor(t){this.implementation=void 0,this.activeCommandController=void 0,this.implementation=t,this.activeCommandController=this.implementation.activeCommandController}OnRender(t){this.Update(t),this.Render(t)}Update(t){}Render(t){s.gi.GridLineOrigin(t,10,10,50,50);for(let e=0;e<this.implementation.scene.listBlocks.length;++e)this.implementation.scene.listBlocks[e].Render(t);this.implementation.scene.drawingGraph.Render(t),t.fillStyle="#00ff00",t.beginPath(),t.arc(this.activeCommandController.mouse.x,this.activeCommandController.mouse.y,2,0,2*Math.PI),t.closePath(),t.fill()}}class v{constructor(t){this.implementation=void 0,this.implementation=t}Pick(t){for(let e=0;e<this.implementation.scene.listBlocks.length;++e)if(this.implementation.scene.listBlocks[e].IsInside(t))return this.implementation.scene.listBlocks[e]}}class m{constructor(t){this.scene=void 0,this.scene=t}RenderPre(t){this.Render(t)}Translation(t){}}class C extends m{constructor(t,e,i){super(t),this.v=void 0,this.width=50,this.height=25,this.col="#ff0000",this.v=new s.h9(e-.5*this.width,i-.5*this.height,0),this.scene.Add(this)}Render(t){t.fillStyle=this.col,t.beginPath(),t.fillRect(this.v.x,this.v.y,this.width,this.height),t.closePath(),t.fill()}Translation(t){this.v.x+=t.x-t.preX,this.v.y+=t.y-t.preY}IsInside(t){return!!s.h9.IsInsideOfVecWithHeight(t,this.v,this.width,this.height)}}class p{constructor(t){this.ac=void 0,this.ac=t}MouseEventController(t){this.ac.mouse.x=t.x,this.ac.mouse.y=t.y,t.CLICK_TYPE!==n.LEFT?t.CLICK_TYPE!==n.MIDDLE?t.CLICK_TYPE!==n.DOWN_RIGHT?t.CLICK_TYPE!==n.DOUBLE?t.CLICK_TYPE!==n.MOVE?t.CLICK_TYPE!==n.DRAG?t.CLICK_TYPE!==n.DOWN?t.CLICK_TYPE!==n.WHEEL?t.CLICK_TYPE!==n.UP||this.MouseUpPre(t):this.MouseWheelPre(t):this.MouseDownPre(t):this.MouseDragPre(t):this.MouseMovePre(t):this.MouseDoubleClickPre(t):this.MouseRightClickPre(t):this.MouseMiddleClickPre(t):this.MouseLeftClickPre(t)}MouseDown(t){}MouseDownPre(t){const e=this.ac.implementation.geometryCommon.Pick(this.ac.mouse);e&&(this.ac.ablePan=!1,this.ac.capture=e),this.MouseDown(t)}MouseLeftClick(t){}MouseLeftClickPre(t){this.MouseLeftClick(t)}MouseMiddleClick(t){}MouseMiddleClickPre(t){this.MouseMiddleClick(t)}MouseRightClick(t){}MouseRightClickPre(t){this.MouseRightClick(t)}MouseUp(t){}MouseUpPre(t){this.ac.ablePan=!0,this.ac.capture=void 0,this.MouseUp(t)}MouseDoubleClick(t){}MouseDoubleClickPre(t){this.MouseDoubleClick(t)}MouseMove(t){}MouseMovePre(t){this.MouseMove(t)}MouseDrag(t){}MouseDragPre(t){this.ac.capture&&this.ac.capture.Translation(t),this.MouseDrag(t)}MouseWheel(t){}MouseWheelPre(t){this.MouseWheel(t)}}class M extends p{constructor(t){super(t)}}class E extends p{constructor(t){super(t)}MouseLeftClick(t){new C(this.ac.implementation.scene,t.x,t.y)}}class P extends p{constructor(t){super(t)}MouseEventController(t){this.ac.implementation.scene.drawingGraph.ac.MouseEventController(t)}}!function(t){t.SELECT="SELECT",t.REMOVE="REMOVE",t.RECT="RECT",t.DRAWING_BLOCK="DRAWING_BLOCK"}(h||(h={}));class g{constructor(t){this.implementation=void 0,this.commands=void 0,this.activeCommand=void 0,this.mouse=new s.h9(0,0),this.capture=void 0,this._ablePan=!1,this.implementation=t,this.commands={SELECT:new M(this),RECT:new E(this),DRAWING_BLOCK:new P(this)},this.SetActiveCommand(h.DRAWING_BLOCK)}SetActiveCommand(t){this.activeCommand=this.commands[t]}get ablePan(){return this._ablePan}set ablePan(t){this.implementation.implementations.nBlock.core.canvas.ablePan=t,this._ablePan=t}}class L{constructor(t){this.implementation=void 0,this.divHost=void 0,this.div=void 0,this.implementation=t,this.divHost=t.implementations.nBlock.hostDiv;const e=document.createElement("div");e&&(this.div=e,this.divHost.insertBefore(this.div,t.implementations.nBlock.div),t.implementations.nBlock.div.style.height="90%",this.Init())}Init(){let t=document.createElement("button");t.type="button",t.innerText="select",t.onclick=()=>{this.implementation.activeCommandController.SetActiveCommand(h.SELECT)},this.div.append(t),t=document.createElement("button"),t.type="button",t.innerText="point",t.onclick=()=>{this.implementation.activeCommandController.SetActiveCommand(h.RECT)},this.div.append(t)}}class I{constructor(t,e,i){this.n0=void 0,this.n1=void 0,this.renderer=void 0,this.renderer=new D(this),this.n0=t,this.n1=e}Render(t){this.renderer.Render(t)}Translation(){}}class D{constructor(t){this.edge=void 0,this.edge=t}Render(t){const e=.5*Math.abs(this.edge.n1.v.x-this.edge.n0.v.x),i=.5*Math.abs(this.edge.n1.v.y-this.edge.n0.v.y),s=e>i?e:i;t.lineWidth=2,t.beginPath(),t.moveTo(this.edge.n0.v.x,this.edge.n0.v.y),t.bezierCurveTo(this.edge.n0.v.x+s,this.edge.n0.v.y,this.edge.n1.v.x-s,this.edge.n1.v.y,this.edge.n1.v.x,this.edge.n1.v.y),t.stroke()}}class w{constructor(t,e,i){this.type="",this.v=void 0,this.edgeIn=[],this.edgeOut=[],this.width=50,this.height=25,this.renderer=void 0,this.type=i,this.renderer=new k(this),this.v=new s.h9(t-.5*this.width,e-.5*this.height,0)}Render(t){this.renderer.Render(t)}Translation(t){this.v.x+=t.x-t.preX,this.v.y+=t.y-t.preY}IsInside(t){return!!s.h9.IsInsideOfVecWithHeight(t,this.v,this.width,this.height)}}class k{constructor(t){this.node=void 0,this.fillStyle="#ff0000",this.node=t}Render(t){t.fillStyle=this.fillStyle,t.beginPath(),t.fillRect(this.node.v.x,this.node.v.y,this.node.width,this.node.height),t.closePath(),t.fill()}}class R{constructor(t){this.nodes=[],this.edges=[],this.drawingGraph=void 0,this.utility=void 0,this.drawingGraph=t,this.utility=new T(this)}AddNode(t,e,i){this.nodes.push(new w(t,e,i)),this.nodes.length>1&&this.AddEdge(this.nodes[this.nodes.length-2],this.nodes[this.nodes.length-1],"d")}AddEdge(t,e,i){this.edges.push(new I(t,e,i))}Render(t){let e=0;for(e=this.nodes.length;e--;)this.nodes[e].Render(t);for(e=this.edges.length;e--;)this.edges[e].Render(t)}Pick(t){return this.utility.Pick(t)}}class T{constructor(t){this.graph=void 0,this.graph=t}Pick(t){for(let e=0;e<this.graph.nodes.length;++e)if(this.graph.nodes[e].IsInside(t))return this.graph.nodes[e]}}class y{constructor(t){this.dbGraph=void 0,this.mouse=new s.h9(0,0,0),this.capture=void 0,this.dbGraph=t}MouseEventController(t){this.mouse.x=t.x,this.mouse.y=t.y,t.CLICK_TYPE!==n.LEFT?t.CLICK_TYPE!==n.MIDDLE?t.CLICK_TYPE!==n.DOWN_RIGHT?t.CLICK_TYPE!==n.DOUBLE?t.CLICK_TYPE!==n.MOVE?t.CLICK_TYPE!==n.DRAG?t.CLICK_TYPE!==n.DOWN?t.CLICK_TYPE!==n.WHEEL?t.CLICK_TYPE!==n.UP||this.MouseUpPre(t):this.MouseWheelPre(t):this.MouseDownPre(t):this.MouseDragPre(t):this.MouseMovePre(t):this.MouseDoubleClickPre(t):this.MouseRightClickPre(t):this.MouseMiddleClickPre(t):this.MouseLeftClickPre(t)}MouseDown(t){}MouseDownPre(t){const e=this.dbGraph.graph.Pick(this.mouse);e&&(this.dbGraph.scene.blockImplementation.activeCommandController.ablePan=!1,this.capture=e),this.MouseDown(t)}MouseLeftClick(t){}MouseLeftClickPre(t){this.dbGraph.graph.AddNode(t.x,t.y,"type"),this.MouseLeftClick(t)}MouseMiddleClick(t){}MouseMiddleClickPre(t){this.MouseMiddleClick(t)}MouseRightClick(t){}MouseRightClickPre(t){this.MouseRightClick(t)}MouseUp(t){}MouseUpPre(t){this.dbGraph.scene.blockImplementation.activeCommandController.ablePan=!0,this.capture=void 0,this.MouseUp(t)}MouseDoubleClick(t){}MouseDoubleClickPre(t){this.MouseDoubleClick(t)}MouseMove(t){}MouseMovePre(t){this.MouseMove(t)}MouseDrag(t){}MouseDragPre(t){this.capture&&this.capture.Translation(t),this.MouseDrag(t)}MouseWheel(t){}MouseWheelPre(t){this.MouseWheel(t)}}class f{constructor(t){this.ac=void 0,this.graph=void 0,this.scene=void 0,this.scene=t,this.ac=new y(this),this.graph=new R(this)}Render(t){this.graph.Render(t)}}class _{constructor(t){this.blockImplementation=void 0,this.listBlocks=[],this.drawingGraph=void 0,this.blockImplementation=t,this.InitDrawingGraph()}InitDrawingGraph(){this.drawingGraph=new f(this)}Add(t){this.listBlocks.push(t)}}class x{constructor(t){this.implementations=void 0,this.renderer=void 0,this.geometryCommon=void 0,this.view=void 0,this.scene=void 0,this.activeCommandController=void 0,this.implementations=t,this.Init()}Init(){this.activeCommandController=new g(this),this.geometryCommon=new v(this),this.scene=new _(this),this.renderer=new u(this),this.view=new L(this)}MouseEventController(t){this.activeCommandController.activeCommand.MouseEventController(t)}Render(t){this.renderer.OnRender(t)}}class b{constructor(t){this.nBlock=void 0,this.implementation=void 0,this.nBlock=t,this.implementation=new x(this)}MouseEventController(t){this.implementation.MouseEventController(t)}Render(t){this.implementation.Render(t)}}class Y{static Init(){new Y(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SandBox")}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SandBox";this.id=void 0,this.core=void 0,this.implementations=void 0,this.hostDiv=void 0,this.div=void 0,this.id=t,this.Init(),this.InitPost(),window.app=this}Init(){const t=document.getElementById(this.id);if(!t)return;this.hostDiv=t;const e=document.createElement("div");e&&(this.div=e,this.div.style.width="100%",this.div.style.height="100%",this.div.style.background="#dddddd",this.hostDiv.append(this.div)),this.core=new d(this,e),this.implementations=new b(this)}InitPost(){this.core.InitPost(),this.core.canvas.Render=t=>this.implementations.Render(t)}}class W{static Init(){new W(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SandBox",1)}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SandBox",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.id=void 0,this.appV1=void 0,this.hostDiv=void 0,this.div=void 0,this.version=1,this.id=t,this.version=e,this.Init()}Init(){switch(this.version){case 1:case 2:this.appV1=new Y(this.id)}}}class B{constructor(t){this.divHost=void 0,this.divHost=document.getElementById(t);const e=document.createElement("div");e.id="ngl3d",e.style.width="100%",e.style.height="100%",this.divHost.appendChild(e),W.Init(e.id)}destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(t){console.error("Error in destroy method:",t)}else console.warn("divHost is undefined in destroy method")}}}}]);
//# sourceMappingURL=35088.c0f445bc.chunk.js.map