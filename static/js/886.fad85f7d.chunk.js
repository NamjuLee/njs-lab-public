"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[886],{886:function(s,t,e){e.r(t),e.d(t,{Solution:function(){return h}});var i=e(55913);class h extends i.bb{constructor(s){super(s),this.edges=[],this.nodes=[],this.m=new c(0,0,0),this.init()}init(){const s=new o(100,100,0);this.nodes.push(s),this.start()}render(s){this.edges.forEach((t=>{t.render(s)})),this.nodes.forEach((t=>{t.render(s)})),s.beginPath(),s.arc(this.m.x,this.m.y,2,0,6.28),s.closePath(),s.fillStyle="#888",s.fill()}mouseClick(s,t){const e=new o(s,t,0);console.log(e,s,t),this.nodes.push(e);const i=this.nodes.length;this.edges.push(new n(this.nodes[i-1],this.nodes[i-2]))}mouseMove(s,t){this.m.x=s,this.m.y=t}}class n{constructor(s,t){this.n0=void 0,this.n1=void 0,this.n0=s,this.n1=t}render(s){s.beginPath(),s.moveTo(this.n0.vec.x,this.n0.vec.y),s.lineTo(this.n1.vec.x,this.n1.vec.y),s.strokeStyle="#0f0",s.stroke()}}class o{constructor(s,t){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.vec=void 0,this.r=5,this.vec=new c(s,t,e)}render(s){s.beginPath(),s.arc(this.vec.x,this.vec.y,this.r,0,6.28),s.closePath(),s.fillStyle="#ff0000",s.fill()}}class c{constructor(s,t){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=s,this.y=t,this.z=e}}}}]);
//# sourceMappingURL=886.fad85f7d.chunk.js.map