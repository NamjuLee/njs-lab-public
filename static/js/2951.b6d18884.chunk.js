"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[2951],{2951:function(t,e,n){n.r(e),n.d(e,{Solution:function(){return h}});var i=n(43144),o=n(15671),r=n(60136),a=n(29388),s=n(17760),u=n(38966),h=function(t){(0,r.Z)(n,t);var e=(0,a.Z)(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";(0,o.Z)(this,n),(t=e.call(this,i)).pointLight=void 0,t.camera.position.set(0,50,50);var r=new s.Mig(13421772,.25);t.scene.add(r),t.pointLight=new s.cek(16777215,.75),t.pointLight.position.x=10,t.pointLight.position.y=10,t.pointLight.castShadow=!0,t.scene.add(t.pointLight);var a=new s.xo$(4.1,60,60),h=new s.Kj0(a,new s.xoR);return t.scene.add(h),(0,u.Vu)("https://raw.githubusercontent.com/NamjuLee/data/master/geometry/CFDSimulationOBJ/CFDSimulationCustom.obj").then((function(e){for(var n=e.split(/\r\n|\r|\n/g),i=[],o=[],r=[],a=0;a<n.length;++a){var u=n[a].split(" ");"v"===u[0]&&i.push(+u[1],+u[3],+u[2]),"vc"===u[0]&&r.push(+u[1]/255,+u[2]/255,+u[3]/255),"f"===u[0]&&(o.push(+u[1],+u[2],+u[3]),o.push(+u[1],+u[3],+u[4]))}var h=new s.vBJ({side:s.ehD,vertexColors:!0}),p=new s.u9r;p.setIndex(o),p.setAttribute("position",new s.a$l(i,3)),p.setAttribute("color",new s.a$l(r,3)),p.computeBoundingSphere(),p.computeVertexNormals();var c=new s.Kj0(p,h);t.scene.add(c),t.start()})),t}return(0,i.Z)(n)}(u.TF)}}]);
//# sourceMappingURL=2951.b6d18884.chunk.js.map