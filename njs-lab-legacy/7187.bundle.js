"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7187],{7187:(e,t,o)=>{o.r(t),o.d(t,{SceneVis:()=>h});var i,n=o(1137),s=function(){function e(e){this.scene=e}return e.prototype.MouseEventController=function(e){e.CLICK_TYPE!==n.uh.LEFT?e.CLICK_TYPE!==n.uh.MIDDLE?e.CLICK_TYPE!==n.uh.DOWN_RIGHT?e.CLICK_TYPE!==n.uh.DOUBLE?e.CLICK_TYPE!==n.uh.MOVE?e.CLICK_TYPE!==n.uh.DRAG?e.CLICK_TYPE!==n.uh.DOWN?e.CLICK_TYPE!==n.uh.WHEEL?e.CLICK_TYPE!==n.uh.UP||this.MouseUpPre(e):this.MouseWheelPre(e):this.MouseDownPre(e):this.MouseDragPre(e):this.MouseMovePre(e):this.MouseDoubleClickPre(e):this.MouseRightClickPre(e):this.MouseMiddleClickPre(e):this.MouseLeftClickPre(e)},e.prototype.MouseDown=function(e){},e.prototype.MouseDownPre=function(e){this.scene.MouseDown(e.x,e.y),this.MouseDown(e)},e.prototype.MouseLeftClick=function(e){},e.prototype.MouseLeftClickPre=function(e){this.scene.MouseLeftClick(e.x,e.y),this.MouseLeftClick(e)},e.prototype.MouseMiddleClick=function(e){},e.prototype.MouseMiddleClickPre=function(e){this.scene.MouseMiddleClick(e.x,e.y),this.MouseMiddleClick(e)},e.prototype.MouseRightClick=function(e){},e.prototype.MouseRightClickPre=function(e){this.scene.MouseRightClick(e.x,e.y),this.MouseRightClick(e)},e.prototype.MouseUp=function(e){},e.prototype.MouseUpPre=function(e){this.scene.MouseUp(e.x,e.y),this.MouseUp(e)},e.prototype.MouseDoubleClick=function(e){},e.prototype.MouseDoubleClickPre=function(e){this.scene.MouseDoubleClick(e.x,e.y),this.MouseDoubleClick(e)},e.prototype.MouseMove=function(e){},e.prototype.MouseMovePre=function(e){this.scene.MouseMove(e.x,e.y),this.MouseMove(e)},e.prototype.MouseDrag=function(e){},e.prototype.MouseDragPre=function(e){this.scene.MouseDrag(e.x,e.y),this.MouseDrag(e)},e.prototype.MouseWheel=function(e){},e.prototype.MouseWheelPre=function(e){this.scene.MouseWheel(e.wheel),this.MouseWheel(e)},e}(),r=function(e){this.scene=e},u=function(){function e(e){this.scene=e,this.scene.definitions.push(this)}return Object.defineProperty(e.prototype,"width",{get:function(){return this.scene.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.scene.height},enumerable:!1,configurable:!0}),e.prototype.Init=function(e){},e.prototype.Render=function(e){},e.prototype.MouseMove=function(e,t){},e.prototype.MouseDown=function(e,t){},e.prototype.MouseUp=function(e,t){},e.prototype.MouseDrag=function(e,t){},e.prototype.MouseLeftClick=function(e,t){},e.prototype.MouseMiddleClick=function(e,t){},e.prototype.MouseRightClick=function(e,t){},e.prototype.MouseDoubleClick=function(e,t){},e.prototype.MouseWheel=function(e){},e}(),p=(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},i(e,t)},function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=function(e){function t(t){var o=e.call(this,t)||this;return o.mouse=[0,0],o.scale=30,o.dataVis=[],o.v=1,o.Init(),o}return p(t,e),t.prototype.Init=function(){this.linspace=n.eu.Linspace(-5,5,100)},t.prototype.Render=function(e){this.dataVis=[],this.pts=[];for(var t=0,o=[[0,1+this.v],[0,2+this.v],[1,.5+this.v],[1,.75+this.v],[1,1+this.v],[1,2+this.v]];t<o.length;t++){for(var i=o[t],s=[],r=0,u=this.linspace;r<u.length;r++){var p=u[r],c=n.eu.GetGaussian(p,i[0],i[1]);s.push([p*this.scale,c*-this.scale])}this.dataVis.push(s)}for(var h=0,f=0,a=this.dataVis;f<a.length;f++){for(var l=0,M=i=a[f];l<M.length;l++){var y=M[l],C=[50,50,50,1];C[0]=this.Distance(y[0]+300,y[1]+150,this.mouse[0],this.mouse[1]),e.fillStyle="rgba("+C[0]+","+C[1]+","+C[2]+","+C[3]+")",e.beginPath(),e.arc(y[0]+300,y[1]+150*h,2,0,6.28),e.fill()}h++}e.fillStyle="rgba(0,0,0,1)",e.beginPath(),e.arc(this.mouse[0],this.mouse[1],2,0,6.28),e.fill()},t.prototype.Distance=function(e,t,o,i){return Math.sqrt((e-o)*(e-o)+(t-i)*(t-i))},t.prototype.MouseMove=function(e,t){this.mouse=[e,t]},t.prototype.MouseWheel=function(e){this.v+=.001*e},t}(u),h=function(){function e(e){this.definitions=[],this.implementation=e,this.canvas=e.app.model.graphicsCoreWrapper.canvasWrapper.canvas,this.activeCommandController=new s(this),this.geomeetryCommon=new r(this),this.Init(),this.InitDefinition()}return e.prototype.Init=function(){},Object.defineProperty(e.prototype,"width",{get:function(){return this.implementation.app.model.graphicsCoreWrapper.canvasWrapper.canvas.canvas.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.implementation.app.model.graphicsCoreWrapper.canvasWrapper.canvas.canvas.height},enumerable:!1,configurable:!0}),e.prototype.InitDefinition=function(){for(var e=0,t=this.definitions;e<t.length;e++)t[e].Init(this.implementation.app.model.graphicsCoreWrapper.canvasWrapper.canvas.ctx)},e.prototype.Render=function(e){for(var t=0,o=this.definitions;t<o.length;t++)o[t].Render(e)},e.prototype.MouseMove=function(e,t){for(var o=0,i=this.definitions;o<i.length;o++)i[o].MouseMove(e,t)},e.prototype.MouseLeftClick=function(e,t){for(var o=0,i=this.definitions;o<i.length;o++)i[o].MouseLeftClick(e,t)},e.prototype.MouseDown=function(e,t){for(var o=0,i=this.definitions;o<i.length;o++)i[o].MouseDown(e,t)},e.prototype.MouseUp=function(e,t){for(var o=0,i=this.definitions;o<i.length;o++)i[o].MouseUp(e,t)},e.prototype.MouseDrag=function(e,t){for(var o=0,i=this.definitions;o<i.length;o++)i[o].MouseDrag(e,t)},e.prototype.MouseMiddleClick=function(e,t){for(var o=0,i=this.definitions;o<i.length;o++)i[o].MouseMiddleClick(e,t)},e.prototype.MouseRightClick=function(e,t){for(var o=0,i=this.definitions;o<i.length;o++)i[o].MouseRightClick(e,t)},e.prototype.MouseDoubleClick=function(e,t){for(var o=0,i=this.definitions;o<i.length;o++)i[o].MouseDoubleClick(e,t)},e.prototype.MouseWheel=function(e){for(var t=0,o=this.definitions;t<o.length;t++)o[t].MouseWheel(e)},e.prototype.Dispose=function(){},e.prototype.LoadDefinition=function(e){if(this.definitions=[],"GaussianDistribution"===e){var t=new c(this);console.log(t)}},e}()}}]);