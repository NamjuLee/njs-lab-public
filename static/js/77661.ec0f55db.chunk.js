"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[77661,57618,75975],{57618:(e,t,r)=>{r.r(t),r.d(t,{Renderer:()=>s});var i=r(75975);class s{constructor(e){this.rendererWrapper=void 0,this.isActive=!0,this.msLastFrame=0,this.msFpsLimit=30,this.deltatime=void 0,this.ctx=void 0,this.sceneWrapper=void 0,this.rendererWrapper=e,this.Init()}Init(){this.ctx=this.rendererWrapper.graphicsCoreWrapper.canvasWrapper.canvas.ctx,this.deltatime=new i.Deltatime,this.Loop()}Loop(){this.isActive&&(requestAnimationFrame((()=>{this.Loop()})),this.OnRender())}OnRender(){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.deltatime.UpdateFPS(),this.sceneWrapper&&this.sceneWrapper.Render(this.ctx)}Stop(){this.isActive=!1}}},77661:(e,t,r)=>{r.r(t),r.d(t,{RendererWrapper:()=>s});var i=r(57618);class s{constructor(e){this.renderer=void 0,this.graphicsCoreWrapper=void 0,this.graphicsCoreWrapper=e,this.renderer=new i.Renderer(this)}}},75975:(e,t,r)=>{r.r(t),r.d(t,{ACTION_TYPE:()=>i.KW,ACTIVECOMMAND_MODE:()=>i.AG,ActiveCommandBase:()=>i.wm,AppAccessibility:()=>i.Wv,AppProperties:()=>i.gj,ArrayUtility:()=>i.R3,BrowserUtility:()=>i.R7,CLICK_TYPE:()=>i.uh,CLOGTYPE:()=>i.g6,COMPILE_MODE:()=>i.Iq,ColorUtility:()=>i.mK,Deltatime:()=>i.gk,EVENT_LISTENER_TYPE:()=>i.GZ,FHTYPE:()=>i.OH,GTYPE:()=>i.OB,GeometryBase:()=>i.bx,INTERACTION_MODE:()=>i.WU,LINECAP:()=>i.EQ,MathUtility:()=>i.$H,NDataUtility:()=>i.eu,NUI:()=>i.Fc,NVector3:()=>i.h9,NumericalMotion:()=>i.aX,OPTIMIZER:()=>i.sg,PRESS_TYPE:()=>i.dc,TEXTALIGN:()=>i.mH,TEXTBOX:()=>i.SE,TOUCH_TYPE:()=>i.KV,UNIT:()=>i.iI});var i=r(2739)}}]);
//# sourceMappingURL=77661.ec0f55db.chunk.js.map