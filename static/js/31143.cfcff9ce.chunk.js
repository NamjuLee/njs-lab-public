"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[31143],{31143:(t,s,i)=>{i.r(s),i.d(s,{AppCanvasParticle:()=>l});var e=i(11977);class h{constructor(){this.particles=[];for(let t=0;t<100;++t)this.particles.push(new a(20*Math.random(),20*Math.random(),0,.3+10*Math.random()))}Move(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-.3,h=arguments.length>3?arguments[3]:void 0;for(let a=0;a<this.particles.length;++a){const n=this.particles[a];n.f.x*=i,n.f.y*=i,n.f.z*=i;const o=new e.h9(t.x-n.v.x,t.y-n.v.y,t.z-n.v.z),c=o.Length();o.Unitize(),n.f.x=o.x*Math.exp(-.001*c*c)*.1,n.f.y=o.y*Math.exp(-.001*c*c)*.1,n.f.z=o.z*Math.exp(-.001*c*c)*.1,n.Move(h,s)}}Render(t){t.fillStyle="rgba(0, 255, 0, 0.3)";for(let s=0;s<this.particles.length;++s){const i=this.particles[s];t.beginPath(),t.arc(i.v.x,i.v.y,.5+.1*i.m,0,2*Math.PI),t.closePath(),t.fill()}}}class a{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;this.v=void 0,this.u=void 0,this.f=void 0,this.m=1,this.v=new e.h9(t,s,i),this.u=e.h9.Origin(),this.f=e.h9.Origin(),this.m=h}Move(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.99;this.u.x*=s,this.u.y*=s,this.u.z*=s,this.u.x+=this.f.x*(t/this.m),this.u.y+=this.f.y*(t/this.m),this.u.z+=this.f.z*(t/this.m),this.v.x+=this.u.x*t,this.v.y+=this.u.y*t,this.v.z+=this.u.z*t,this.v.y<0&&(this.v.y=0,this.u.y<0&&(this.u.y=-this.u.y))}}class n{constructor(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;this.canvas=void 0,this.host=void 0,this.div=void 0,this.ctx=void 0,this.t=0,this.width=void 0,this.height=void 0,this.width=s,this.height=i,this.InitCanvas(t)}InitCanvas(t){const s=document.createElement("canvas"),i=document.createElement("div"),e=document.getElementById(t);if(e&&i&&(this.div=i,this.div.style.width=this.width+"px",this.div.style.height=this.height+"px",this.div.style.margin="10px",this.div.style.padding="10px",i.appendChild(s),this.host=e,this.host.append(i)),s){this.canvas=s,this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.backgroundColor="#aaaaaa";const t=this.canvas.getContext("2d");t&&(this.ctx=t,this.InitUI(),this.Init())}}InitUI(){const t=document.createElement("button");t.textContent="reset",this.div.append(t);const s=document.createElement("input");s.type="range",s.min="0.1",s.max="100.0",s.value="1.5",this.div.append(s)}Init(){this.ctx.translate(.5*this.ctx.canvas.width,.5*this.ctx.canvas.height),this.ctx.scale(10,10),this.EventBind(),this.Loop()}EventBind(){this.canvas.onmousedown=t=>this.MouseDown(t),this.canvas.onmouseup=t=>this.MouseUp(t),this.canvas.onmousemove=t=>this.MouseMove(t),window.onresize=t=>this.Resize(t)}Resize(t){this.canvas.width=this.host.clientWidth,this.canvas.height=this.host.clientHeight}Loop(){requestAnimationFrame((()=>{this.Loop()})),this.ctx.clearRect(-10,-10,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.fillStyle="#dddddd",this.ctx.beginPath(),this.ctx.rect(-500,-500,1e3,1e3),this.ctx.closePath(),this.ctx.fill(),this.Render(this.ctx)}Render(t){}MouseDown(t){}MouseUp(t){}MouseMove(t){}}class o{constructor(t){this.CanvasCore=void 0,this.particles=[],this.t=.9,this.m=new e.h9(0,0,0),this.CanvasCore=new n(t),this.particles.push(new h),this.Init()}Init(){this.CanvasCore.Render=t=>this.Render(t),this.CanvasCore.MouseDown=t=>this.MouseDown(t),this.CanvasCore.MouseUp=t=>this.MouseUp(t),this.CanvasCore.MouseMove=t=>this.MouseMove(t),console.log("particle system")}Render(t){for(let s=0;s<this.particles.length;++s)this.particles[s].Move(this.m,.9,-.5,this.t),this.particles[s].Render(t);t.fillStyle="rgba(255, 0, 0, 0.9)",t.beginPath(),t.arc(this.m.x,this.m.y,2.5,0,2*Math.PI),t.closePath(),t.fill()}Grid(t){for(let s=-10;s<10;++s)for(let i=-10;i<10;++i)t.beginPath(),t.fillStyle="rgba(255, 0, 0, 0.9)",t.arc(s,i,.05,0,2*Math.PI),t.closePath(),t.fill()}MouseDown(t){}MouseUp(t){}MouseMove(t){this.m.x=.1*(t.x-this.CanvasCore.canvas.offsetLeft-.5*this.CanvasCore.canvas.width),this.m.y=.1*(t.y-this.CanvasCore.canvas.offsetTop-.5*this.CanvasCore.canvas.height)}}class c{constructor(t){this.particleSystemA=void 0,this.particleSystemB=void 0,this.particleSystemC=void 0,this.particleSystemD=void 0,this.particleSystemA=new o(t),this.particleSystemA=new o(t)}}class l{static Init(t){new l(t).Dummy()}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SandBox";this.canvasCore=void 0,this.implementation=void 0,this.implementation=new c(t)}Dummy(){}}}}]);
//# sourceMappingURL=31143.cfcff9ce.chunk.js.map