"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[41931,2960],{41931:(t,e,s)=>{s.r(e),s.d(e,{Solution:()=>a});var o=s(17760),n=s(55913),r=s(2960);class a extends n.TF{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main"),this.streetOSM=[],this.routesTreated=[],this.routesControl=[],this.zones30=[];const t=new o.cek(16777215,.8);this.camera.add(t),this.scene.add(t);const e=document.createElement("canvas");e.style.position="absolute",e.style.pointerEvents="none",e.style.mixBlendMode="darken",e.width=this.hostDiv.clientWidth,e.height=this.hostDiv.clientHeight,this.hostDiv.appendChild(e);e.getContext("webgl");this.camera.position.set(0,40,48);(0,n._N)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.streetOSM.push(t.features[e].geometry.coordinates);(0,r.renderLines)(this.scene,this.streetOSM,[.3,.3,.3]),(0,n._N)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/zones-30.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.zones30.push(t.features[e].geometry.coordinates);h(this.scene,this.zones30,[0,1,0])})),this.start()}))}}const h=(t,e,s)=>{const r=[];for(let a=0;a<e.length;++a){const s=e[a];for(let e=0;e<s.length;++e){const a=s[e];if(1===a.length){const e=a[0],s=[];for(let t=0;t<e.length;++t){const[a,h]=(0,n._Y)(e[t][0],e[t][1]),i=.01*(a+-15478803.88731685),c=.01*(h+-4766681.448690384);r.push(i,0,c),s.push(new o.FM8(i,c))}let h=new o.oa8(new o.bnF(s)),i=new o.vBJ({side:o.ehD,color:65280,transparent:!0,opacity:.3}),c=new o.Kj0(h,i);t.add(c),c.rotateOnAxis(new o.Pa4(1,0,0),.5*Math.PI)}}}}},2960:(t,e,s)=>{s.r(e),s.d(e,{Solution:()=>r,renderLines:()=>a});var o=s(17760),n=s(55913);class r extends n.TF{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main"),this.streetOSM=[],this.routesTreated=[],this.routesControl=[],this.zones30=[];const t=new o.cek(16777215,.8);this.camera.add(t),this.scene.add(t),this.camera.position.set(0,40,48);(0,n._N)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.streetOSM.push(t.features[e].geometry.coordinates);a(this.scene,this.streetOSM,[0,1,1]),(0,n._N)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/treated-st.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.routesTreated.push(t.features[e].geometry.coordinates);a(this.scene,this.routesTreated,[1,0,0])})),(0,n._N)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/control-st.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.routesControl.push(t.features[e].geometry.coordinates);a(this.scene,this.routesControl,[0,1,0])})),this.start()}))}}const a=(t,e,s)=>{const r=new o.u9r,a=new o.nls({vertexColors:!0}),h=[],i=[],c=[];let u=0,l=0,d=0;for(let o=0;o<e.length;++o){const t=e[o];for(let e=0;e<t.length;++e)for(let o=0;o<t[e].length;++o){const[r,a]=(0,n._Y)(t[e][o][0],t[e][o][1]);u+=r,l+=a,d+=1;const g=.01*(r+-15478803.88731685),m=.01*(a+-4766681.448690384);h.push(g,0,m),i.push(s[0],s[1],s[2]),o<t[e].length-1&&c.push(Math.floor(h.length/3)-1,Math.floor(h.length/3))}}r.setIndex(c),r.setAttribute("position",new o.a$l(h,3)),r.setAttribute("color",new o.a$l(i,3)),r.computeBoundingSphere();const g=new o.ejS(r,a);return t.add(g),g}}}]);
//# sourceMappingURL=41931.cd1b8a3d.chunk.js.map