"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[69],{10069:function(t,e,i){i.r(e),i.d(e,{Renderer:function(){return r},Solution:function(){return l}});var s=i(60136),n=i(29388),o=i(15671),h=i(43144),a=i(38966),l=function(){function t(e){(0,o.Z)(this,t),this.divHost=void 0,this.renderer=void 0,this.divHost=e,this.divHost.style.display="flex",this.divHost.style.alignItems="center";var i=document.createElement("div");i.style.marginLeft="auto",i.style.marginRight="auto",i.style.backgroundColor="#555",i.style.width="600px",i.style.height="350px",this.divHost.appendChild(i),this.renderer=new r(i),console.log(this.renderer)}return(0,h.Z)(t,[{key:"destroy",value:function(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}]),t}(),r=function(t){(0,s.Z)(i,t);var e=(0,n.Z)(i);function i(t){var s;(0,o.Z)(this,i),(s=e.call(this,t)).img=void 0,s.rotation=0,s.canvas.style.position="relative",s.canvas.style.width="100%",s.canvas.style.height="100%",(0,a.t4)("https://raw.githubusercontent.com/NamjuLee/data/master/img/bg/zoom-James-River-Kayaking.jpg").then((function(t){console.log(t),s.img=t}));var n=document.createElement("div");return s.hostDiv.appendChild(n),n.textContent="rotate",n.style.position="absolute",n.style.color="aqua",n.onclick=function(){console.log("ro");s.hostDiv.clientWidth>s.hostDiv.clientHeight?s.hostDiv.clientWidth:s.hostDiv.clientHeight;var t=s.hostDiv.style.width;s.hostDiv.style.width=s.hostDiv.style.height,s.hostDiv.style.height=t,s.canvas.width=s.hostDiv.clientWidth,s.canvas.height=s.hostDiv.clientHeight,s.rotation+=.5*Math.PI},s.start(),s}return(0,h.Z)(i,[{key:"render",value:function(t){this.ctx.save(),this.ctx.translate(.5*this.canvas.width,.5*this.canvas.height),this.ctx.rotate(this.rotation),this.img&&this.ctx.drawImage(this.img,.5*-this.img.width,.5*-this.img.height),t.beginPath(),t.arc(0,0,50,0,2*Math.PI),t.closePath(),t.fill(),this.ctx.restore()}},{key:"mouseDown",value:function(t,e){}},{key:"mouseUp",value:function(t,e){}},{key:"mouseDrag",value:function(t,e){}},{key:"mouseClick",value:function(t,e){}},{key:"mouseMove",value:function(t,e){}},{key:"keyDown",value:function(t){}}]),i}(a.bb)}}]);
//# sourceMappingURL=69.e98cda2d.chunk.js.map