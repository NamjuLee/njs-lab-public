"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[8535],{8535:function(e,t,s){s.r(t),s.d(t,{Solution:function(){return n}});var i=s(17760),o=s(98925);class h{constructor(e){this.canvas=void 0,this.host=void 0,this.ctx=void 0,this.t=0,this.camera=void 0,this.scene=void 0,this.renderer=void 0,this.controls=void 0,this.requestFrame=void 0,this.loop=()=>{this.requestFrame=requestAnimationFrame(this.loop),this.controls.update(),this.render(),this.renderer.render(this.scene,this.camera),this.t+=.01},this.initCanvas(e)}initCanvas(e){this.host=document.getElementById(e),this.scene=new i.xsS,this.scene.background=new i.Ilk(0,0,0),this.scene.castShadow=!0,this.renderer=new i.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(this.host.clientWidth/this.host.clientHeight),this.renderer.domElement.id="Three",this.renderer.setSize(this.host.clientWidth,this.host.clientHeight),this.host.appendChild(this.renderer.domElement);const t=new i.Mig(13421772,.25);t.castShadow=!0,this.scene.add(t);let s=new i.cek(16777215,.75);s.position.x=10,s.castShadow=!0,this.scene.add(s),this.camera=new i.cPb(30,this.host.clientWidth/this.host.clientHeight,1,5e3),this.controls=new o.OrbitControls(this.camera,this.renderer.domElement),this.camera.position.set(0,0,5),this.controls.update(),this.init()}init(){this.eventBind(),this.loop()}eventBind(){this.renderer.domElement.onmousedown=e=>this.MouseDown(e),this.renderer.domElement.onmouseup=e=>this.MouseUp(e),this.renderer.domElement.onmousemove=e=>this.MouseMove(e),window.addEventListener("resize",(()=>this.onWindowResize()))}onWindowResize(){this.camera.aspect=this.host.clientWidth/this.host.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.host.clientWidth,this.host.clientHeight)}MouseDown(e){}MouseUp(e){}MouseMove(e){}render(){}destroy(){for(window.removeEventListener("resize",(()=>this.onWindowResize())),cancelAnimationFrame(this.requestFrame),this.requestFrame=void 0;this.host.lastChild;)this.host.removeChild(this.host.lastChild)}}class r{constructor(e){this.threeCore=void 0,this.boxMeshes=[],this.threeCore=e;const t=new i.xo$(1,50,50),s=new i.Kj0(t,new i.xoR);s.position.x=0,s.position.y=0,s.position.z=0,this.threeCore.scene.add(s)}render(){}mouseDown(e){}mouseUp(e){}mouseMove(e){}mouseDrag(e){}destroy(){}}class n{static Init(e){new n(e).Dummy()}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";this.threeCore=void 0,this.core=void 0,this.threeCore=new h(e),this.core=new r(this.threeCore),this.bindEvent(),this.BindRenderer()}Dummy(){}bindEvent(){this.threeCore.MouseDown=e=>this.core.mouseDown(e),this.threeCore.MouseMove=e=>this.core.mouseMove(e),this.threeCore.MouseUp=e=>this.core.mouseUp(e)}BindRenderer(){this.threeCore.render=()=>this.core.render()}destroy(){this.core.destroy(),this.threeCore.destroy()}}}}]);
//# sourceMappingURL=8535.06d39086.chunk.js.map