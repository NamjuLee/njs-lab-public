"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[62971],{62971:(t,e,i)=>{i.r(e),i.d(e,{Renderer:()=>h,Solution:()=>n,checkIntersection:()=>d,pointOnSegment2D:()=>a});var s=i(55913);class n{constructor(t){this.divHost=void 0,this.renderer=void 0,this.divHost=document.getElementById(t),this.divHost.style.display="flex",this.divHost.style.alignItems="center";const e=document.createElement("div");e.style.marginLeft="auto",e.style.marginRight="auto",e.style.backgroundColor="#000",e.style.width="1000px",e.style.height="600px",this.divHost.appendChild(e),this.renderer=new h(e);let i=document.createElement("div");i.style.paddingTop="5px",i.style.paddingBottom="5px",e.appendChild(i),i.textContent="Click twice in different locations to build a wall";const s=p("bounces",2,200);e.appendChild(s.div),s.slider.oninput=()=>{this.renderer.updateIter(+s.slider.value)};const n=y("Ray Direction");e.appendChild(n.div),n.checkBox.checked=!1,n.checkBox.onchange=()=>{!0===n.checkBox.checked?this.renderer.isRayDirection=!0:this.renderer.isRayDirection=!1};const o=y("Line");e.appendChild(o.div),o.checkBox.checked=!0,o.checkBox.onchange=()=>{!0===o.checkBox.checked?this.renderer.isLineRenderer=!0:this.renderer.isLineRenderer=!1,this.renderer.updateIter(this.renderer.iter)}}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class h extends s.bb{constructor(t){super(t),this.walls=[],this.sun=void 0,this.t=0,this.iter=10,this.isRayDirection=!1,this.isLineRenderer=!0,this.p0=void 0,this.canvas.style.position="relative",this.canvas.style.width="100%",this.canvas.style.height="100%",this.sun=new l(new s.P(300,100,0)),this.walls.push(new c(50,200,400,500)),this.walls.push(new c(100,500,500,600)),this.walls.push(new c(500,100,400,400)),this.walls.push(new c(50,100,600,50)),this.walls.push(new c(500,600,600,50)),this.walls.push(new c(50,100,50,300)),this.walls.push(new c(50,300,100,500)),this.start()}mouseClick(t,e){if(this.p0)return this.walls.push(new c(this.p0.x,this.p0.y,t,e)),this.p0=void 0,void this.updateIter(this.iter);void 0!==this.p0||(this.p0=new s.P(t,e))}mouseMove(t,e){this.isRayDirection&&(this.sun.updateDirection(t,e),this.isStatic=!1,this.loop(this.ctx))}updateIter(t){this.iter=t,this.isStatic=!1,this.loop(this.ctx)}render(t){this.t+=.01,this.update(t),t.globalCompositeOperation="source-over",t.strokeStyle="#ffffff",this.walls.forEach((e=>{e.draw(t)})),this.sun.draw(t,this.t),this.isStatic=!0}update(t){const e=this.sun.getSunLine(),i=o(e,this.walls,this.iter);t.lineWidth=.5;for(let s=0;s<i.length;++s){const e=i[s];t.beginPath(),t.arc(e.x,e.y,5,0,2*Math.PI),t.closePath(),t.stroke()}if(t.globalCompositeOperation="multiply",this.isLineRenderer){if(t.lineWidth=10,i.length>0){t.strokeStyle="rgba(255, 0, 0, ".concat(1,")"),t.beginPath(),t.moveTo(this.sun.v.x,this.sun.v.y),t.lineTo(i[0].x,i[0].y),t.stroke();for(let e=0;e<i.length-1;e++){const s=1-e/i.length;t.strokeStyle="rgba(255, 0, 0, ".concat(s,")"),t.beginPath(),t.moveTo(i[e].x,i[e].y),t.lineTo(i[e+1].x,i[e+1].y),t.stroke()}}}else if(i.length>0){const e=[];e.push(...r(this.sun.v,i[0],20));for(let t=0;t<i.length-1;t++)e.push(...r(i[t],i[1+t],20));for(let i=0;i<e.length;++i){const s=e[i],n=1-i/e.length;t.fillStyle="rgba(255, 0, 0, ".concat(n,")"),t.beginPath(),t.arc(s.x,s.y,5,0,2*Math.PI),t.closePath(),t.fill()}}}}const o=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,n=[];for(let h=0;h<i;++h){let i,h,o=1e4;for(let n=0;n<e.length;++n){const r=e[n],l=d(t.p0.x,t.p0.y,t.p1.x,t.p1.y,r.p0.x,r.p0.y,r.p1.x,r.p1.y);if(void 0!==l){const e=(0,s.zp)(t.p0.x,t.p0.y,0,l.x,l.y,0);e>10&&e<o&&(i=l,h=r,o=e)}}if(void 0!==i){const e=new s.P(t.p1.x-t.p0.x,t.p1.y-t.p0.y,0),o=(0,s.SC)(e,h.nVec);t={p0:i,p1:{x:i.x+o.x,y:i.y+o.y}},n.push(i)}}return n},r=(t,e,i)=>{const n=e.x-t.x,h=e.y-t.y,o=e.z-t.z,r=new s.P(n,h,o),l=r.length()/i;r.normalize();const c=[];for(let a=0;a<l;++a){const e=new s.P(t.x+r.x*i*a,t.y+r.y*i*a,t.z+r.z*i*a);c.push(e)}return c};class l{constructor(t){this.v=void 0,this.target=new s.P(0,0,0),this.rayVec=new s.P(0,0,0),this.v=t,this.updateDirection(300,300)}draw(t,e){t.lineWidth=.1,t.beginPath(),t.moveTo(this.v.x,this.v.y),t.lineTo(this.target.x,this.target.y),t.stroke(),t.lineWidth=.5,t.beginPath(),t.moveTo(this.v.x,this.v.y),t.lineTo(this.v.x+50*this.rayVec.x,this.v.y+50*this.rayVec.y),t.stroke(),t.fillStyle="#FDB813",t.beginPath(),t.arc(this.v.x,this.v.y,Math.sin(20*e)+12,0,2*Math.PI),t.fill()}updateDirection(t,e){this.target.x=t,this.target.y=e,this.rayVec.x=this.v.x+this.target.x,this.rayVec.y=this.v.y+this.target.y,this.rayVec.x=this.target.x-this.v.x,this.rayVec.y=this.target.y-this.v.y}getSunLine(){return{p0:this.v,p1:new s.P(this.v.x+1e3*this.rayVec.x,this.v.y+1e3*this.rayVec.y)}}}class c{constructor(t,e,i,n){this.p0=void 0,this.p1=void 0,this.nVec=void 0,this.p0=new s.P(t,e),this.p1=new s.P(i,n),this.computeNormal()}draw(t){t.lineWidth=5,t.strokeStyle="#ffffff",t.beginPath(),t.moveTo(this.p0.x,this.p0.y),t.lineTo(this.p1.x,this.p1.y),t.stroke()}computeNormal(){const t=new s.P(this.p1.x-this.p0.x,this.p1.y-this.p0.y,0);this.nVec=(0,s.ir)(t,new s.P(0,0,1)),this.nVec=(0,s.Fv)(this.nVec)}}const a=(t,e,i,s,n,h)=>{if(i!==n){if(i<=t&&t<=n)return!0;if(i>=t&&t>=n)return!0}else{if(s<=e&&e<=h)return!0;if(s>=e&&e>=h)return!0}return!1},d=(t,e,i,s,n,h,o,r)=>{const l=(r-h)*(i-t)-(o-n)*(s-e),c=(o-n)*(e-h)-(r-h)*(t-n),a=(i-t)*(e-h)-(s-e)*(t-n);if(0===l)return void 0;const d=c/l,p=a/l;return d>=0&&d<=1&&p>=0&&p<=1?{x:t+d*(i-t),y:e+d*(s-e),z:0}:void 0},p=(t,e,i)=>{const s=document.createElement("div");s.style.display="flex";const n=document.createElement("input");n.type="range",n.min="".concat(e),n.max="".concat(i);const h=document.createElement("div");return h.textContent=t,h.style.color="#aaa",s.appendChild(n),s.appendChild(h),{div:s,slider:n}},y=t=>{const e=document.createElement("div");e.style.display="flex";const i=document.createElement("input");i.type="checkbox",i.defaultChecked=!1;const s=document.createElement("div");return s.textContent=t,s.style.color="#aaa",e.appendChild(i),e.appendChild(s),{div:e,checkBox:i}}}}]);
//# sourceMappingURL=62971.3a50b3a8.chunk.js.map