"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5760],{5760:(e,t,s)=>{s.r(t),s.d(t,{ExpressImageViewer:()=>h});var i=s(8148),n=function(){function e(e,t){this._numMaxFrame=120,this._mode=i.An.ObserveViewer,this._numFrame=0,this.app=e,this.div=t,this.canvas=document.createElement("canvas"),this.div.appendChild(this.canvas),this.updateCanvasSize(this.div.clientWidth,this.div.clientHeight),this.canvas.style.position="absolute",this.ctx=this.canvas.getContext("2d"),this.app.debugMode&&(this.canvas.style.background="rgba(255, 0, 0, 0.3)"),this.init()}return Object.defineProperty(e.prototype,"mode",{get:function(){return this._mode},set:function(e){var t=this;this._mode=e,this._numFrame=0,this._mode===i.An.InteractiveViewer?(this.canvas.onmouseenter=function(e){t._numFrame=0,t.loop()},this.canvas.onmousemove=function(e){t._numFrame>t._numMaxFrame&&(t._numFrame=0,t.loop())},this.loop()):(this.canvas.onmouseenter=function(e){},this.canvas.onmousemove=function(e){})},enumerable:!1,configurable:!0}),e.prototype.updateCanvasSize=function(e,t){this.canvas.width=e,this.canvas.height=t},e.prototype.init=function(){this.loop()},e.prototype.loop=function(){var e=this;this._numFrame++<=this._numMaxFrame&&this._mode===i.An.InteractiveViewer&&requestAnimationFrame((function(){e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height),e.loop()})),this.render()},e.prototype.render=function(){this.app.scene.render(this.ctx)},e.prototype.destroy=function(){this.div.removeChild(this.canvas)},e}(),o=function(){function e(e){this.scale=1,this.index=0,this.scaleByRatio=1,this.app=e,this.projection=new r,this.svgRPoint=new Path2D("M9 0a9.022 9.022 0 00-9 9.041c0 4.992 5 11.761 9 19.421 4-7.659 9-14.428 9-19.42A9.022 9.022 0 009 .001V0zm0 12.652a3.85 3.85 0 113.833-3.85A3.841 3.841 0 019 12.652z"),this.svgNPoint=new Path2D("M26 2a2 2 0 00-2-2H2a2 2 0 00-2 2v17a2 2 0 002 2h6.757l4.276 6.33L17.31 21H24a2 2 0 002-2V2z")}return e.prototype.render=function(e){var t,s,n,o,r,h,a,c;this.projection.widthDisplay=e.canvas.width,this.projection.heightDisplay=e.canvas.height;var p,d=0,u=[],l=[0,0];if(this.app.data)for(this.index=this.app.data.length;this.index--;){var y=this.app.data[this.index],v=y.styles.width*this.scaleByRatio*y.styles.scale;switch(y.type){case i.zq.POINT_REGULAR:p=y.nodes[0].sx,d=y.nodes[0].sy,p=(t=this.projection.toScreen(p,d))[0],d=t[1],(0,i.ld)(e,y.nodes,this.svgNPoint,y.styles.colorRgba,[0,0],this.scaleByRatio*y.styles.scale);break;case i.zq.POINT_NUMBERED:p=y.nodes[0].sx,d=y.nodes[0].sy,p=(s=this.projection.toScreen(p,d))[0],d=s[1],(0,i.ld)(e,y.nodes,this.svgNPoint,y.styles.colorRgba,[0,0],this.scaleByRatio*y.styles.scale);break;case i.zq.POLYLINE_BENDING:u=[];for(var m=0;m<y.nodes.length;++m)p=(n=this.projection.toScreen(y.nodes[m].sx,y.nodes[m].sy))[0],d=n[1],u.push({sx:p,sy:d});(0,i.JV)(e,u,y.styles.colorRgba,l,v);break;case i.zq.POLYGON_GRAPH:for(u=[],m=0;m<y.nodes.length;++m)p=(o=this.projection.toScreen(y.nodes[m].sx,y.nodes[m].sy))[0],d=o[1],u.push({sx:p,sy:d});(0,i.xG)(e,u,y.styles.colorRgba,l,v);break;case i.zq.RECTANGLE:for(u=[],m=0;m<y.nodes.length;++m)p=(r=this.projection.toScreen(y.nodes[m].sx,y.nodes[m].sy))[0],d=r[1],u.push({sx:p,sy:d});(0,i.xG)(e,u,y.styles.colorRgba,l,v);break;case i.zq.CIRCLE:for(u=[],m=0;m<y.nodes.length;++m)p=(h=this.projection.toScreen(y.nodes[m].sx,y.nodes[m].sy))[0],d=h[1],u.push({sx:p,sy:d});(0,i.wq)(e,u,y.styles.colorRgba,l,v);break;case i.zq.ARROW_SINGLE:for(u=[],m=0;m<y.nodes.length;++m)p=(a=this.projection.toScreen(y.nodes[m].sx,y.nodes[m].sy))[0],d=a[1],u.push({sx:p,sy:d});(0,i.nq)(e,u,y.styles.colorRgba,l,v);break;case i.zq.ARROW_DOUBLE:for(u=[],m=0;m<y.nodes.length;++m)p=(c=this.projection.toScreen(y.nodes[m].sx,y.nodes[m].sy))[0],d=c[1],u.push({sx:p,sy:d});(0,i.aK)(e,u,y.styles.colorRgba,l,v)}}},e}(),r=function(){function e(){this.xCropped=0,this.yCropped=0,this.widthCropped=0,this.heightCropped=0,this.widthDisplay=0,this.heightDisplay=0,this.remap=function(e,t,s){return e*s/t}}return e.prototype.toScreen=function(e,t){var s=e-this.xCropped,i=t-this.yCropped;return[s=this.remap(s,this.widthCropped,this.widthDisplay),i=this.remap(i,this.heightCropped,this.heightDisplay)]},e}(),h=function(){function e(e,t,s){this.data=[],this.width=0,this.height=0,this.debugMode=!1,this.div=e,this.width=t,this.height=s,this.scene=new o(this),this.renderer=new n(this,e)}return e.prototype.getCanvas=function(){return this.renderer.canvas},e.prototype.updateMode=function(e){this.renderer.mode=e},e.prototype.render=function(){this.renderer.render()},e.prototype.updateCanvasSize=function(e,t){this.renderer.updateCanvasSize(e,t),this.render()},e.prototype.updateScale=function(e){this.scene.scale=e},e.prototype.updateExtent=function(e,t,s){this.scene.projection.xCropped=e.x,this.scene.projection.yCropped=e.y,this.scene.projection.widthCropped=e.width,this.scene.projection.heightCropped=e.height,this.scene.projection.widthDisplay=t,this.scene.projection.heightDisplay=s},e.prototype.updateGeometry=function(e){e&&(this.data=e,this.render())},e.prototype.destroy=function(){this.renderer.destroy()},e}()},8148:(e,t,s)=>{s.d(t,{An:()=>o.An,Bm:()=>i.Bm,JV:()=>i.JV,Kz:()=>i.Kz,_y:()=>i._y,aK:()=>i.aK,ld:()=>i.ld,nq:()=>i.nq,wq:()=>i.wq,xG:()=>i.xG,zq:()=>n.zq});var i=s(3185),n=(s(3160),s(5190)),o=(s(4199),s(4722));s(4904),s(9923)}}]);