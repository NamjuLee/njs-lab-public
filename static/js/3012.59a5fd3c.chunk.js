"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[3012],{13012:function(e,t,r){r.r(t),r.d(t,{Solution:function(){return p}});var s=r(29439),o=r(15671),n=r(43144),i=r(60136),a=r(29388),h=r(17760),u=r(26943),c=r(87968),p=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";(0,o.Z)(this,r),(e=t.call(this,s)).streetOSM=[],e.routesTreated=[],e.routesControl=[],e.zones30=[],e.meshStreet=void 0,e.meshSpike=void 0,e.raycaster=new h.iMs,e.pointer=new h.FM8,e.sphere=void 0;var n=new h.cek(16777215,.8);e.camera.add(n),e.scene.add(n),e.raycaster=new h.iMs,e.raycaster.params.Line.threshold=3,e.raycaster.far=1e3;var i=new h.xo$(.2,32,32),a=new h.vBJ({color:16777215}),u=new h.Kj0(i,a);return e.sphere=u,e.scene.add(u),e.camera.position.set(0,20,20),(0,c.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then((function(t){for(var r=0;r<t.features.length;++r)e.streetOSM.push(t.features[r].geometry.coordinates);e.meshStreet=l(e.scene,e.streetOSM,[0,1,1]),(0,c.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/treated-st.geojson").then((function(t){for(var r=0;r<t.features.length;++r)e.routesTreated.push(t.features[r].geometry.coordinates);e.meshSpike=m(e.scene,e.routesTreated,[1,0,0])})),(0,c.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/control-st.geojson").then((function(t){for(var r=0;r<t.features.length;++r)e.routesControl.push(t.features[r].geometry.coordinates);l(e.scene,e.routesControl,[0,1,0])})),e.start()})),e}return(0,n.Z)(r,[{key:"update",value:function(e){this.raycaster.setFromCamera(this.pointer,this.camera);var t=this.raycaster.intersectObjects([this.meshStreet,this.meshSpike],!0);t.length>0?(this.sphere.visible=!0,this.sphere.position.copy(t[0].point)):this.sphere.visible=!1;for(var r=1;r<this.meshSpike.geometry.attributes.position.count;r+=2){var s=this.meshSpike.geometry.attributes.position,o=s.getX(r),n=s.getY(r),i=s.getZ(r);n=(n=9*Math.sin(5*o*i+5*this.t))<0?0:n;var a=new h.Pa4(o,n,i);this.meshSpike.geometry.attributes.position.setXYZ(r,a.x,a.y,a.z);(0,c.getColorByCelsius)(40*n);this.meshSpike.geometry.attributes.color.setXYZ(r-1,0,n,0),this.meshSpike.geometry.attributes.color.setXYZ(r,n,0,0)}this.meshSpike.geometry.attributes.position.needsUpdate=!0,this.meshSpike.geometry.attributes.color.needsUpdate=!0,this.meshSpike.geometry.computeVertexNormals()}},{key:"mouseMove",value:function(e){this.pointer.x=(e.offsetX+2)/this.hostDiv.clientWidth*2-1,this.pointer.y=-(e.offsetY-70)/this.hostDiv.clientHeight*2+1}}]),r}(u.TF),m=function(e,t,r){for(var o=new h.u9r,n=new h.nls({vertexColors:!0}),i=[],a=[],c=0;c<t.length;++c)for(var p=t[c],m=0;m<p.length;++m)for(var l=0;l<p[m].length;++l){var g=(0,u._Y)(p[m][l][0],p[m][l][1]),v=(0,s.Z)(g,2),f=v[0],d=v[1];f,d,1;var S=.01*(f+-15478803.88731685),w=.01*(d+-4766681.448690384);i.push(S,0,w),i.push(S,10,w),a.push(r[0],r[1],r[2]),a.push(r[0],r[1],r[2])}o.setAttribute("position",new h.a$l(i,3)),o.setAttribute("color",new h.a$l(a,3)),o.computeBoundingSphere();var y=new h.ejS(o,n);return e.add(y),y},l=function(e,t,r){for(var o=new h.u9r,n=new h.nls({vertexColors:!0}),i=[],a=[],c=[],p=0;p<t.length;++p)for(var m=t[p],l=0;l<m.length;++l)for(var g=0;g<m[l].length;++g){var v=(0,u._Y)(m[l][g][0],m[l][g][1]),f=(0,s.Z)(v,2),d=f[0],S=f[1];d,S,1;var w=.01*(d+-15478803.88731685),y=.01*(S+-4766681.448690384);i.push(w,0,y),a.push(r[0],r[1],r[2]),g<m[l].length-1&&c.push(Math.floor(i.length/3)-1,Math.floor(i.length/3))}o.setIndex(c),o.setAttribute("position",new h.a$l(i,3)),o.setAttribute("color",new h.a$l(a,3)),o.computeBoundingSphere();var b=new h.ejS(o,n);return e.add(b),b}}}]);
//# sourceMappingURL=3012.59a5fd3c.chunk.js.map