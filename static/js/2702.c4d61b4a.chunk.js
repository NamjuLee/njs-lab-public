"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[2702],{12702:(t,e,s)=>{s.r(e),s.d(e,{Solution:()=>h});var i=s(17760),o=s(55913),r=s(87968);class h extends o.TF{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main"),this.streetOSM=[],this.routesTreated=[],this.routesControl=[],this.zones30=[],this.positions=void 0,this.geometry=void 0,this.raycaster=new i.iMs,this.pointer=new i.FM8,this.mesh=void 0,this.sphere=void 0,this.renderPoints=(t,e,s)=>{const o=new i.u9r,h=new i.UY4({vertexColors:!0,size:.75}),n=[],a=[];for(let i=0;i<e.length;++i){const t=e[i];for(let e=0;e<t.length;++e)for(let i=0;i<t[e].length;++i){const[o,h]=(0,r.MercatorProjection)(+t[e][i][0],+t[e][i][1]),c=.01*(o+-15478803.88731685),m=.01*(h+-4766681.448690384);n.push(c,0,m),a.push(s[0],s[1],s[2])}}o.setAttribute("position",new i.a$l(n,3)),o.setAttribute("color",new i.a$l(a,3)),o.computeBoundingSphere(),this.positions=n,this.geometry=o,this.mesh=new i.woe(o,h),t.add(this.mesh)};const t=new i.cek(16777215,.8);this.camera.add(t),this.scene.add(t),this.raycaster=new i.iMs,this.raycaster.params.Points.threshold=.8,this.raycaster.far=1e3;const e=new i.xo$(.1,32,32),s=new i.vBJ({color:16777215}),o=new i.Kj0(e,s);this.sphere=o,this.scene.add(o),this.camera.position.set(0,40,48),(0,r.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then((t=>{for(let e=0;e<t.features.length;++e)this.streetOSM.push(t.features[e].geometry.coordinates);this.renderPoints(this.scene,this.streetOSM,[0,1,1]),this.start()}))}mouseMove(t){this.pointer.x=t.offsetX/this.hostDiv.clientWidth*2-1,this.pointer.y=-t.offsetY/this.hostDiv.clientHeight*2+1}update(t){this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects([this.mesh],!1),s=e.length>0?e[0]:null;null!==s&&this.sphere.position.set(s.point.x,s.point.y,s.point.z);let o=this.mesh.geometry.attributes.position.count;for(let h=0;h<o;h++){let t=this.mesh.geometry.attributes.position,e=t.getX(h),o=t.getY(h),n=t.getZ(h);o=Math.sin(9*e*n+5*this.t),o=o<0?0:o;let a=new i.Pa4(e,o,n);this.mesh.geometry.attributes.position.setXYZ(h,a.x,a.y,a.z),null!==s&&(o=(0,r.distanceTo)(e,o,n,s.point.x,s.point.y,s.point.z)/30),this.mesh.geometry.attributes.color.setXYZ(h,o,1-o,0)}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0,this.mesh.geometry.computeVertexNormals()}}}}]);
//# sourceMappingURL=2702.c4d61b4a.chunk.js.map