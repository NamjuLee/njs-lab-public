"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[52473],{98053:(t,e,i)=>{i.d(e,{V:()=>s});const s=t=>{const e=document.createElement("div");e.style.display="flex";const i=document.createElement("input");i.type="checkbox",i.defaultChecked=!1;const s=document.createElement("div");return s.textContent=t,s.style.color="#aaa",e.appendChild(i),e.appendChild(s),{div:e,checkBox:i}}},52473:(t,e,i)=>{i.r(e),i.d(e,{Solution:()=>c});var s=i(98053),h=i(61198);class c{constructor(t){this.div=void 0,this.renderer=void 0,this.m=[0,0],this.t=0,this.pts=[],this.p=void 0,this.div=document.getElementById(t),this.renderer=new h.ZP(t),this.renderer.updateBinding=()=>this.render(),this.renderer.onMouseClick=t=>this.mouseClick(t),this.initDom(),this.init()}initDom(){const t=document.createElement("div");t.style.position="absolute",this.div.appendChild(t);const e=document.createElement("button");e.textContent="reset",e.onclick=()=>{this.reset(),this.init()},t.append(e);const i=(0,s.V)("grid");t.append(i.div),i.checkBox.checked=!0,i.checkBox.onchange=()=>{this.renderer.showGrid=i.checkBox.checked};const h=(0,s.V)("axis");t.append(h.div),h.checkBox.checked=!0,h.checkBox.onchange=()=>{this.renderer.showAxis=h.checkBox.checked}}reset(){this.renderer.reset(),this.t=0,this.pts=[],this.p=void 0}init(){this.p=new o(0,0,3,0,-2,2),this.pts.push(this.p)}render(){this.p&&this.p.move(this.t,.985),this.pts.forEach((t=>{t.move(this.t,.985)})),this.t+=.001}mouseMove(t){}renderMouse(t){}mouseClick(t){}destroy(){this.renderer.destroy()}}class o{constructor(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;this.vec=void 0,this.velocity=void 0,this.force=new l(0,0,0),this.mass=10,this.r=10,this.pt=void 0,this.vec=new l(t,e,i),this.velocity=new l(s,c,o),this.pt=new h.u4(this.vec),this.pt.onClick=t=>this.onClick(t)}onClick(t){console.log(t)}move(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.force=new l(0,0,-9.81),this.velocity=n(this.velocity,e),this.velocity=r(this.velocity,n(this.force,t/this.mass));const i=r(this.vec,n(this.velocity,t));this.vec.x=i.x,this.vec.y=i.y,this.vec.z=i.z,this.vec.z<0&&(this.vec.z=0,this.velocity.z<0&&(this.velocity.z=-this.velocity.z)),this.pt.update()}}const n=(t,e)=>d(t,e),d=(t,e)=>new l(t.x*e,t.y*e,t.z*e),r=(t,e)=>new l(t.x+e.x,t.y+e.y,t.z+e.z);class l{constructor(t,e,i){this.x=0,this.y=0,this.z=0,this.x=t,this.y=e,this.z=i}}}}]);
//# sourceMappingURL=52473.fe92160b.chunk.js.map