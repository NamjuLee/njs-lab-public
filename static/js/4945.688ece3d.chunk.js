"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[4945],{94945:function(t,e,i){i.r(e),i.d(e,{Renderer:function(){return l},Solution:function(){return o}});var s=i(60136),n=i(29388),r=i(15671),h=i(43144),a=i(26943),o=function(){function t(e){(0,r.Z)(this,t),this.divHost=void 0,this.renderer=void 0,this.divHost=e,this.divHost.style.display="flex",this.divHost.style.alignItems="center";var i=document.createElement("div");i.style.marginLeft="auto",i.style.marginRight="auto",i.style.backgroundColor="#555",i.style.width="500px",i.style.height="500px",this.divHost.appendChild(i),this.renderer=new l(i)}return(0,h.Z)(t,[{key:"destroy",value:function(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}]),t}(),l=function(t){(0,s.Z)(i,t);var e=(0,n.Z)(i);function i(t){var s;(0,r.Z)(this,i),(s=e.call(this,t)).p0=void 0,s.p1=void 0,s.p2=void 0,s.p3=void 0,s.N=2,s.m=new d(0,0),s.down=!1,s.capture=void 0,s.ptsList=[],s.t=0,s.text=void 0,s.canvas.style.position="relative",s.canvas.style.width="100%",s.canvas.style.height="100%";var n=100;s.p0=new d(n,400),s.p1=new d(200,300),s.p2=new d(300,200),s.p3=new d(400,n),s.ptsList=[s.p1,s.p2];var h=c("N",1,10);return h.slider.value="3",s.divHost.appendChild(h.div),h.slider.oninput=function(){s.N=+h.slider.value,h.text.innerText="N: "+s.N},s.text=h.text,s.start(),s}return(0,h.Z)(i,[{key:"mouseDown",value:function(t,e){this.m.x=t,this.m.y=e;for(var i=0;i<this.ptsList.length;++i){this.ptsList[i].distanceTo(this.m)<10&&(this.capture=this.ptsList[i])}}},{key:"mouseUp",value:function(t,e){this.capture=void 0}},{key:"mouseDrag",value:function(t,e){this.capture&&(this.capture.x=t,this.capture.y=e)}},{key:"render",value:function(t){t.clearRect(0,0,t.canvas.width,t.canvas.height),this.p0.draw(t),this.p1.draw(t),this.p2.draw(t),this.p3.draw(t),t.beginPath(),t.rect(100,100,300,300),t.strokeStyle="#000",t.lineWidth=1,t.stroke();for(var e=[],i=0;i<=20;++i){var s=p(this.p0,this.p1,this.p2,this.p3,.05*i);e.push(s)}t.strokeStyle="#00ffff",t.lineWidth=3,t.beginPath();for(var n=0;n<e.length-1;++n)t.moveTo(e[n].x,e[n].y),t.lineTo(e[1+n].x,e[1+n].y);t.stroke(),t.strokeStyle="#000",t.lineWidth=1,t.beginPath(),t.moveTo(this.p0.x,this.p0.y),t.lineTo(this.p1.x,this.p1.y),t.stroke(),t.beginPath(),t.moveTo(this.p2.x,this.p2.y),t.lineTo(this.p3.x,this.p3.y),t.stroke(),this.t++;var r=this.t*this.N*.02;if(r<1){var h=p(this.p0,this.p1,this.p2,this.p3,r);this.text.textContent="".concat(r),t.beginPath(),t.arc(50+r,h.y,5,0,2*Math.PI),t.fill(),t.beginPath(),t.arc(100+300*r,450,5,0,2*Math.PI),t.fill()}else this.t=0}}]),i}(a.bb),d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(0,r.Z)(this,t),this.x=0,this.y=0,this.x=e,this.y=i}return(0,h.Z)(t,[{key:"distanceTo",value:function(t){return Math.sqrt((t.x-this.x)*(t.x-this.x)+(t.y-this.y)*(t.y-this.y))}},{key:"draw",value:function(t){t.fillStyle="#ffffff",t.beginPath(),t.arc(this.x,this.y,5,0,6.28318),t.closePath(),t.fill()}}]),t}(),u=function(t,e,i,s){return new d(s*t.x+i*e.x,s*t.y+i*e.y)},p=function(t,e,i,s,n){var r=1-n,h=u(t,e,n,r),a=u(e,i,n,r),o=u(i,s,n,r),l=u(h,a,n,r),d=u(a,o,n,r);return u(l,d,n,r)},c=function(t,e,i){var s=document.createElement("div");s.style.display="flex";var n=document.createElement("input");n.type="range",n.min="".concat(e),n.max="".concat(i);var r=document.createElement("div");return r.innerText=t,r.style.color="#aaa",s.appendChild(n),s.appendChild(r),{div:s,slider:n,text:r}}}}]);
//# sourceMappingURL=4945.688ece3d.chunk.js.map