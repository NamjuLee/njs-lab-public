"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[2960],{2960:(t,e,s)=>{s.r(e),s.d(e,{Solution:()=>n,renderLines:()=>a});var r=s(17760),o=s(55913);class n extends o.TF{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main"),this.streetOSM=[],this.routesTreated=[],this.routesControl=[],this.zones30=[];const t=new r.cek(16777215,.8);this.camera.add(t),this.scene.add(t),this.camera.position.set(0,40,48);(0,o._N)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.streetOSM.push(t.features[e].geometry.coordinates);a(this.scene,this.streetOSM,[0,1,1]),(0,o._N)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/treated-st.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.routesTreated.push(t.features[e].geometry.coordinates);a(this.scene,this.routesTreated,[1,0,0])})),(0,o._N)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/control-st.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.routesControl.push(t.features[e].geometry.coordinates);a(this.scene,this.routesControl,[0,1,0])})),this.start()}))}}const a=(t,e,s)=>{const n=new r.u9r,a=new r.nls({vertexColors:!0}),h=[],u=[],i=[];let c=0,l=0,d=0;for(let r=0;r<e.length;++r){const t=e[r];for(let e=0;e<t.length;++e)for(let r=0;r<t[e].length;++r){const[n,a]=(0,o._Y)(t[e][r][0],t[e][r][1]);c+=n,l+=a,d+=1;const g=.01*(n+-15478803.88731685),m=.01*(a+-4766681.448690384);h.push(g,0,m),u.push(s[0],s[1],s[2]),r<t[e].length-1&&i.push(Math.floor(h.length/3)-1,Math.floor(h.length/3))}}n.setIndex(i),n.setAttribute("position",new r.a$l(h,3)),n.setAttribute("color",new r.a$l(u,3)),n.computeBoundingSphere();const g=new r.ejS(n,a);return t.add(g),g}}}]);
//# sourceMappingURL=2960.d47f9146.chunk.js.map