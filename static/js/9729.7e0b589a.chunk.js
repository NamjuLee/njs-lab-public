"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[9729],{39729:function(t,e,n){n.r(e),n.d(e,{Renderer:function(){return f},Solution:function(){return h}});var a=n(74165),i=n(15861),r=n(60136),s=n(29388),c=n(15671),o=n(43144),u=n(38966),d=(n(64355),n(16371)),h=function(){function t(e){(0,c.Z)(this,t),this.divHost=void 0,this.renderer=void 0,this.divHost=document.getElementById(e);var n=document.createElement("div");this.divHost.appendChild(n),this.renderer=new f(n)}return(0,o.Z)(t,[{key:"destroy",value:function(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}]),t}(),f=function(t){(0,r.Z)(n,t);var e=(0,s.Z)(n);function n(t){var a;return(0,c.Z)(this,n),(a=e.call(this,t)).accList=[],a.lossList=[],a.init(),a}return(0,o.Z)(n,[{key:"init",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var e=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,u.t4)("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80").then((function(t){t.onload=function(){e.canvas.width=t.width,e.canvas.height=t.height,e.ctx.drawImage(t,0,0),v(e.ctx),e.start()}})),this.isStatic=!0;case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),n}(u.bb),v=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var n,i,r,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.zD({architecture:"ResNet50",outputStride:32,quantBytes:4});case 2:return n=t.sent,t.next=5,n.segmentPerson(e.canvas,{internalResolution:"medium",segmentationThreshold:.9,scoreTreshold:.9});case 5:i=t.sent,r=e.getImageData(0,0,e.canvas.width,e.canvas.height),s=e.createImageData(e.canvas.width,e.canvas.height),i.data.forEach((function(t,e){1===t&&(s.data[4*e]=r.data[4*e],s.data[4*e+1]=r.data[4*e+1],s.data[4*e+2]=r.data[4*e+2],s.data[4*e+3]=r.data[4*e+3])})),e.putImageData(s,0,0);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=9729.7e0b589a.chunk.js.map