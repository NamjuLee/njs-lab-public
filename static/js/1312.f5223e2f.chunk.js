"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[1312],{11312:function(t,n,e){e.r(n),e.d(n,{Solution:function(){return a}});var o=e(15671),i=e(43144),l=e(60136),c=e(29388),a=function(t){(0,l.Z)(e,t);var n=(0,c.Z)(e);function e(t){var i;return(0,o.Z)(this,e),(i=n.call(this,t)).canvas.style.background="#fff",i.init(),i}return(0,i.Z)(e,[{key:"init",value:function(){var t=this.ctx;t.beginPath(),t.arc(0,0,2,0,6.28),t.closePath(),t.fillStyle="#ff0000",t.fill(),console.log("workshop-canvas 03 Polyline Mouse Interaction");var n=function(n,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#121212",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;t.beginPath(),t.arc(n,e,i,0,6.28),t.closePath(),t.fillStyle=o,t.fill()},e=[];this.divHost.addEventListener("click",(function(o){t.clearRect(-200,-200,400,400),console.log("mouse x: ".concat(o.offsetX,", y: ").concat(o.offsetY)),e.push([o.offsetX-0,o.offsetY-0]),function(n){t.beginPath(),t.moveTo(n[0][0],n[0][1]);for(var e=1;e<n.length;++e)t.lineTo(n[e][0],n[e][1]);t.lineWidth=2,t.strokeStyle="#00ff00",t.stroke()}(e);for(var i=0;i<e.length;++i)n(e[i][0],e[i][1])}))}},{key:"mouseClick",value:function(t,n){}}]),e}(e(38966).bb)}}]);
//# sourceMappingURL=1312.f5223e2f.chunk.js.map