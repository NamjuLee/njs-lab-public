"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[5883],{54078:function(t,e,o){o.d(e,{B:function(){return r}});var i=o(15671),s=o(43144),n=o(9936),r=function(){function t(e){(0,i.Z)(this,t),this.gl=void 0,this.program=void 0,this.fragmentShader=void 0,this.vertexShader=void 0,this.matrixLocation=void 0,this.posBuffer=void 0,this.colBuffer=void 0,this.vertexs=void 0,this.posLocAtt=void 0,this.colLocAtt=void 0,this.matLoc=void 0,this.colLoc=void 0,this.cVecLoc=void 0,this.mouseLoc=void 0,this.timeGL=void 0,this.vShader=void 0,this.fShader=void 0,this.v="\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    \n    varying vec4 f_color;\n\n    void main() {\n\n        vec2 mouse_distance = vec2(0,0) - (a_position.xy /vec2(2,2));\n        float red = 1.0 - length(mouse_distance);\n        f_color = vec4(a_position, 0, 1.0);\n    \n        // float dis = distance(vec2(a_position.xy), vec2(0,0));\n\n        // f_color = vec4(dis * 0.6, 0,0,1);\n        gl_Position = vec4( a_position, 0, 1);\n    }\n    ",this.f="\n    precision highp float;\n\n    varying vec4 f_color;\n    \n    void main() {\n        vec2 mouse_distance = vec2(0,0) - (f_color.xy /vec2(5,5));\n\n        float col =  length(mouse_distance*5.);\n        float val = 1.0 - length(mouse_distance*8.);\n        \n        gl_FragColor = vec4(0.19,0.19,0.19, col);\n\n    }\n    ",this.positionAttribLocation=void 0,this.colorAttribLocation=void 0,this.translation=void 0,this.color=void 0,this.colArray=void 0,this.gl=e,this.color=[Math.random(),Math.random(),Math.random(),1],this.InitShader()}return(0,s.Z)(t,[{key:"InitShader",value:function(){var t=n.Ui.CreateShader(this.gl,this.gl.VERTEX_SHADER,this.v),e=n.Ui.CreateShader(this.gl,this.gl.FRAGMENT_SHADER,this.f);if(t&&e){this.vShader=t,this.fShader=e;var o=n.Ui.CreateProgram(this.gl,t,e);o&&(this.program=o)}}},{key:"Render",value:function(t){var e=[.1,0,0,1];this.vertexs=new Float32Array([-1,-1,1,1,1,1,-1,1,e[0],e[1],e[2],e[3],1,-1,e[0],e[1],e[2],e[3],-1,1,1,1,1,1,1,-1,e[0],e[1],e[2],e[3],1,1,e[0],e[1],e[2],e[3]]),this.posBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.posBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(this.vertexs),t.STATIC_DRAW),this.posLocAtt=this.gl.getAttribLocation(this.program,"a_position");var o=t.FLOAT,i=6*Float32Array.BYTES_PER_ELEMENT,s=0;t.vertexAttribPointer(this.posLocAtt,2,o,!1,i,s),t.enableVertexAttribArray(this.posLocAtt),t.useProgram(this.program);var n=t.TRIANGLES;s=0;t.drawArrays(n,s,6)}}]),t}()},65883:function(t,e,o){o.r(e),o.d(e,{Solution:function(){return y}});var i=o(29439),s=o(15671),n=o(43144),r=o(97326),a=o(60136),h=o(29388),l=o(17760),c=o(55913),u=o(54078),d=o(87968),v=function(){function t(e){var o=this;(0,s.Z)(this,t),this.solution=void 0,this.streetOSM=[],this.routesTreated=[],this.routesControl=[],this.zones30=[],this.zones15=[],this.routesMain=[],this.meshTwitter=void 0,this.meshStreetOSM=void 0,this.meshNode=void 0,this.meshTreated=void 0,this.meshControl=void 0,this.meshMainStreet=void 0,this.meshZones30=void 0,this.meshPolygon=void 0,this.polygonRingID={},this.polygonRings=void 0,this.yearForPolygonMesh=void 0,this.selectedYear=2009,this.renderMultiPolygon=function(t,e,s){for(var n=[],r=[],a=0;a<e.length;++a)for(var h=e[a],c=0;c<h.length;++c){var u=h[c];if(1===u.length){for(var d=u[0],v=[],m=0;m<d.length;++m){var g=o.solution.projectionToMercator(d[m][0],d[m][1]),p=(0,i.Z)(g,2),f=p[0],A=p[1];r.push(f,0,A),v.push(new l.FM8(f,A))}var y=new l.oa8(new l.bnF(v)),w=new l.vBJ({side:l.ehD,color:new l.Ilk(s[0],s[1],s[2]),transparent:!0,opacity:.3}),_=new l.Kj0(y,w);t.add(_),n.push(_),_.rotateOnAxis(new l.Pa4(1,0,0),.5*Math.PI)}}return n},this.renderPoints=function(t,e){for(var s=new l.u9r,n=new l.UY4({vertexColors:!0,size:.5}),r=[],a=[],h=0;h<t.length;++h)for(var c=t[h],u=0;u<c.length;++u)for(var d=0;d<c[u].length;++d){var v=o.solution.projectionToMercator(c[u][d][0],c[u][d][1]),m=(0,i.Z)(v,2),g=m[0],p=m[1];r.push(g,0,p),a.push(e[0],e[1],e[2])}s.setAttribute("position",new l.a$l(r,3)),s.setAttribute("color",new l.a$l(a,3)),s.computeBoundingSphere();var f=new l.woe(s,n);return o.solution.scene.add(f),f},this.solution=e,(0,d.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then((function(t){for(var e=0;e<t.features.length;++e)o.streetOSM.push(t.features[e].geometry.coordinates);var i=[0,1,1];o.solution.PARAM.colorSOMStreet&&(i=(0,d.hexToRGBANormalized)("#"+o.solution.PARAM.colorSOMStreet),o.solution.ui.isActive_streetOSM=!0),o.meshStreetOSM=o.LineSeg(o.streetOSM,i),o.solution.start()})),(0,d.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/Paris-main-st.geojson").then((function(t){for(var e=0;e<t.features.length;++e)o.routesMain.push(t.features[e].geometry.coordinates);var i=[0,1,1];o.solution.PARAM.colorMainStreet&&(i=(0,d.hexToRGBANormalized)("#"+o.solution.PARAM.colorMainStreet),o.solution.ui.isActiveMainStreet=!0),o.meshMainStreet=o.LineSeg(o.routesMain,i)})),(0,d.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/treated-st.geojson").then((function(t){for(var e=0;e<t.features.length;++e)o.routesTreated.push(t.features[e].geometry.coordinates);var i=[0,1,1];o.solution.PARAM.colorTreatedStreet&&(i=(0,d.hexToRGBANormalized)("#"+o.solution.PARAM.colorTreatedStreet),o.solution.ui.isActive_treated_st=!0),o.meshTreated=o.LineSeg(o.routesTreated,i)})),(0,d.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/control-st.geojson").then((function(t){for(var e=0;e<t.features.length;++e)o.routesControl.push(t.features[e].geometry.coordinates);var i=[0,1,1];o.solution.PARAM.colorControlStreet&&(i=(0,d.hexToRGBANormalized)("#"+o.solution.PARAM.colorControlStreet),o.solution.ui.isActive_control_st=!0),o.meshControl=o.LineSeg(o.routesControl,i)})),(0,d.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/zones-30.geojson").then((function(t){for(var e=0;e<t.features.length;++e)o.zones30.push(t.features[e].geometry.coordinates);var i=[0,1,1];o.solution.PARAM.colorZones30&&(i=(0,d.hexToRGBANormalized)("#"+o.solution.PARAM.colorZones30),o.solution.ui.isActive_zones_30=!0),o.meshZones30=o.renderMultiPolygon(o.solution.scene,o.zones30,i)})),(0,d.getJSONFromURL)("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/zones_15_innerouter_byyr_rings.json").then((function(t){var e=[0,1,1];o.solution.PARAM.colorYearPolygon&&(e=(0,d.hexToRGBANormalized)("#"+o.solution.PARAM.colorYearPolygon)),o.solution.PARAM.year&&(o.selectedYear=o.solution.PARAM.year),o.polygonRings=o.renderCustomPolygon(t,e),o.updateYear(o.selectedYear)}))}return(0,n.Z)(t,[{key:"updateYear",value:function(t){var e=this;if(this.selectedYear=t+1,void 0!==this.yearForPolygonMesh)for(var o=function(t){e.yearForPolygonMesh[t].forEach((function(o){t<e.selectedYear?o.visible=!0:o.visible=!1}))},i=2010;i<2016;++i)o(i)}},{key:"updateColor",value:function(t){var e=(0,d.hexToRGBANormalized)(t);if(void 0!==this.meshMainStreet&&this.solution.ui.isActiveMainStreet){var o=this.meshMainStreet.material;o.color.r=e[0],o.color.g=e[1],o.color.b=e[2]}if(void 0!==this.meshStreetOSM&&this.solution.ui.isActive_streetOSM){var i=this.meshStreetOSM.material;i.color.r=e[0],i.color.g=e[1],i.color.b=e[2]}if(void 0!==this.meshTreated&&this.solution.ui.isActive_treated_st){var s=this.meshTreated.material;s.color.r=e[0],s.color.g=e[1],s.color.b=e[2]}if(void 0!==this.meshControl&&this.solution.ui.isActive_control_st){var n=this.meshControl.material;n.color.r=e[0],n.color.g=e[1],n.color.b=e[2]}void 0!==this.meshZones30&&this.solution.ui.isActive_zones_30&&this.meshZones30.forEach((function(t){var o=t.material;o.color.r=e[0],o.color.g=e[1],o.color.b=e[2]})),void 0!==this.solution.dataTwitter&&this.solution.ui.isActive_twitter&&this.solution.dataTwitter.updateColor(e[0],e[1],e[2])}},{key:"update",value:function(){void 0!==this.meshMainStreet&&(this.solution.ui.isActiveMainStreet?this.meshMainStreet.visible=!0:this.meshMainStreet.visible=!1),void 0!==this.meshStreetOSM&&(this.solution.ui.isActive_streetOSM?this.meshStreetOSM.visible=!0:this.meshStreetOSM.visible=!1),void 0!==this.meshTreated&&(this.solution.ui.isActive_treated_st?this.meshTreated.visible=!0:this.meshTreated.visible=!1),void 0!==this.meshControl&&(this.solution.ui.isActive_control_st?this.meshControl.visible=!0:this.meshControl.visible=!1),void 0!==this.meshZones30&&(this.solution.ui.isActive_zones_30?this.meshZones30.forEach((function(t){t.visible=!0})):this.meshZones30.forEach((function(t){t.visible=!1}))),void 0!==this.solution.dataTwitter.mesh&&(this.solution.ui.isActive_twitter?this.solution.dataTwitter.mesh.visible=!0:this.solution.dataTwitter.mesh.visible=!1)}},{key:"renderCustomPolygon",value:function(t,e){for(var o={},s=0,n=Object.entries(t.yr);s<n.length;s++){var r=(0,i.Z)(n[s],2),a=r[0],h=r[1];h in o?o[h].push(+a):o[h]=[+a]}var c={};this.polygonRingID=o;for(var u=0,v=0,m=Object.entries(this.polygonRingID);v<m.length;v++){for(var g=(0,i.Z)(m[v],2),p=g[0],f=g[1],A=[],y=0;y<f.length;++y){for(var w=f[y],_=(t.value_mn_rescale[w],[]),M=0;M<t.outer_ring[w].length;++M){var S=this.solution.projectionToMercator(t.outer_ring[w][M][0],t.outer_ring[w][M][1]),R=(0,i.Z)(S,2),b=R[0],x=R[1];_.push(new d.Vector3(b,x))}for(var P=new l.bnF(_),T=0;T<t.inner_rings[w].length;++T){var C=new l.y$t,L=this.solution.projectionToMercator(t.inner_rings[w][T][0][0],t.inner_rings[w][T][0][1]),k=(0,i.Z)(L,2),B=k[0],N=k[1];C.moveTo(B,N);for(var Z=1;Z<t.inner_rings[w][T].length;++Z){var O=this.solution.projectionToMercator(t.inner_rings[w][T][Z][0],t.inner_rings[w][T][Z][1]),E=(0,i.Z)(O,2),F=E[0],U=E[1];C.lineTo(F,U)}P.holes.push(C)}var j=new l.oa8(P),z=new l.Ilk(16777215);z.setRGB(e[0],e[1],e[2]);var D=new l.vBJ({side:l.ehD,color:z,transparent:!0,opacity:.85}),Y=new l.Kj0(j,D);Y.translateY(1e-4*u++),Y.visible=!0,this.solution.scene.add(Y),Y.rotateOnAxis(new l.Pa4(1,0,0),.5*Math.PI),A.push(Y)}c[p]=A}this.yearForPolygonMesh=c}},{key:"LineSeg",value:function(t,e){var o=new l.u9r,s=new l.nls;s.color.r=e[0],s.color.g=e[1],s.color.b=e[2];for(var n=[],r=[],a=[],h=0;h<t.length;++h)for(var c=t[h],u=0;u<c.length;++u)for(var d=0;d<c[u].length;++d){var v=this.solution.projectionToMercator(c[u][d][0],c[u][d][1]),m=(0,i.Z)(v,2),g=m[0],p=m[1];n.push(g,0,p),r.push(e[0],e[1],e[2]),d<c[u].length-1&&a.push(Math.floor(n.length/3)-1,Math.floor(n.length/3))}o.setIndex(a),o.setAttribute("position",new l.a$l(n,3)),o.setAttribute("color",new l.a$l(r,3)),o.computeBoundingSphere();var f=new l.ejS(o,s);return this.solution.scene.add(f),f}}]),t}(),m=o(48506),g=function(){function t(e){var o=this;(0,s.Z)(this,t),this.solution=void 0,this.active=!1,this.dataRaw=void 0,this.mesh=void 0,this.t=0,this.dataScale=1,this.colorScale=1,this.pos=void 0,this.color="#0ff",this.material=void 0,this.solution=e;var i="https://raw.githubusercontent.com/NamjuLee/data/master/Paris/twitter_data_2010-2015.json";m.x.url&&(i=m.x.url),(0,d.getJSONFromURL)(i).then((function(t){o.dataRaw=t,o.initMesh("noNeighbsLog"),o.solution.updateParam()}))}return(0,n.Z)(t,[{key:"initMesh",value:function(t){for(var e=[],o=[],s=(this.dataRaw.meta["domain_"+t],0);s<this.dataRaw.cells.length;++s){var n=this.dataRaw.cells[s],r=this.solution.projectionToMercator(+n.lon,+n.lat),a=(0,i.Z)(r,2),h=a[0],c=a[1],u=+n[t],d=[u/=2,u,0];e.push(h,u*this.dataScale,c),o.push(d[0],d[1],d[2])}var v=new l.u9r,m=new l.UY4({vertexColors:!0,size:.5});this.material=m,this.pos=new Float32Array(e),v.setAttribute("position",new l.a$l(this.pos,3)),v.setAttribute("color",new l.a$l(o,3)),v.computeBoundingSphere(),this.mesh=new l.woe(v,m),this.solution.scene.add(this.mesh),this.active=!0}},{key:"updateColor",value:function(t,e,o){this.material.color.setRGB(t,e,o)}},{key:"updateMesh",value:function(t){this.active=!1,this.removeMesh(),this.initMesh(t)}},{key:"removeMesh",value:function(){this.solution.scene.remove(this.mesh)}},{key:"update",value:function(){this.active&&(this.t+=.05,this.updateAnimation())}},{key:"updateAnimation",value:function(){for(var t=this.mesh.geometry.attributes.position.count,e=0;e<t;e++){var o=this.mesh.geometry.attributes.position,i=o.getX(e),s=o.getZ(e),n=this.pos[3*e+1]*this.dataScale;n=(n*=1+Math.sin(i+n+this.t)*Math.cos(i+n+this.t))<.1?.1:n;var r=new l.Pa4(i,n,s);this.mesh.geometry.attributes.position.setXYZ(e,r.x,r.y,r.z);var a=n/this.colorScale;this.mesh.geometry.attributes.color.setXYZ(e,a,1-a,0)}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0,this.mesh.geometry.computeVertexNormals()}}]),t}(),p=function(){function t(e){(0,s.Z)(this,t),this.solution=void 0,this.hostDiv=void 0,this.isActiveMainStreet=!0,this.isActive_streetOSM=!1,this.isActive_treated_st=!1,this.isActive_control_st=!1,this.isActive_zones_30=!1,this.isActive_zones_buffer=!1,this.isActive_twitter=!1,this.year=2010,this.divCameraPos=void 0,this.solution=e,this.hostDiv=e.hostDiv,void 0!==this.solution.PARAM.local_ui?!0===this.solution.PARAM.local_ui&&this.appendUI():this.appendUI()}return(0,n.Z)(t,[{key:"appendUI",value:function(){var t=this,e=document.createElement("div");e.style.position="absolute",e.style.margin="5px",this.hostDiv.append(e);var o=document.createElement("dv");o.style.display="flex",o.style.marginBottom="10px",o.textContent="pos target",this.divCameraPos=o,e.append(o);var i=document.createElement("input");e.append(i),i.type="color",i.oninput=function(){t.solution.drawing.updateColor(i.value)};var s=f("main street");e.append(s.div),s.checkBox.checked=!0,s.checkBox.onchange=function(){!0===s.checkBox.checked?t.isActiveMainStreet=!0:t.isActiveMainStreet=!1};var n=f("OSM street");e.append(n.div),n.checkBox.onchange=function(){!0===n.checkBox.checked?t.isActive_streetOSM=!0:t.isActive_streetOSM=!1};var r=f("treated street");e.append(r.div),r.checkBox.onchange=function(){!0===r.checkBox.checked?t.isActive_treated_st=!0:t.isActive_treated_st=!1};var a=f("control street");e.append(a.div),a.checkBox.onchange=function(){!0===a.checkBox.checked?t.isActive_control_st=!0:t.isActive_control_st=!1};var h=f("zones 30");e.append(h.div),h.checkBox.onchange=function(){!0===h.checkBox.checked?t.isActive_zones_30=!0:t.isActive_zones_30=!1};var l=A("Year");l.div.style.marginTop="25px",l.text.textContent="Year: 2019",e.append(l.div),l.slider.oninput=function(){t.year=+l.slider.value,l.text.textContent="Year: "+l.slider.value,t.solution.drawing.updateYear(+l.slider.value)};var c=f("twitter data");c.div.style.marginTop="25px",e.append(c.div),c.checkBox.onchange=function(){!0===c.checkBox.checked?t.isActive_twitter=!0:t.isActive_twitter=!1};var u=A("Scale","1","10");u.text.textContent="Scale: 1",e.append(u.div),u.slider.defaultValue="1",u.slider.oninput=function(){t.year=+u.slider.value,u.text.textContent="Scale: "+u.slider.value,t.solution.dataTwitter.dataScale=+u.slider.value};var d=A("Color","1.","50.");d.text.textContent="Color: 1",e.append(d.div),d.slider.defaultValue="1",d.slider.oninput=function(){t.year=+d.slider.value,d.text.textContent="Color: "+d.slider.value,t.solution.dataTwitter.colorScale=+d.slider.value};var v=f("Animation");v.checkBox.defaultChecked=!0,e.append(v.div),v.checkBox.onchange=function(){!0===v.checkBox.checked?t.solution.dataTwitter.active=!0:t.solution.dataTwitter.active=!1,t.solution.dataTwitter.updateAnimation()};var m=document.createElement("select");for(var g in e.append(m),{noNeighbsLog:"noNeighbsLog",noNeighbsLogDensity:"noNeighbsLogDensity",noNeighbsRaw:"noNeighbsRaw",noNeighbsWins:"noNeighbsWins",noTwtsLog:"noTwtsLog",noTwtsLogDensity:"noTwtsLogDensity",noTwtsRaw:"noTwtsRaw",noTwtsWins:"noTwtsWins",noUsersLog:"noUsersLog",noUsersLogDensity:"noUsersLogDensity",noUsersRaw:"noUsersRaw",noUsersWins:"noUsersWins",treatmentCategory:"treatmentCategory"}){var p=document.createElement("option");p.value=g,p.textContent=g,m.appendChild(p)}m.onchange=function(e){t.solution.dataTwitter.updateMesh(e.target.value)}}}]),t}(),f=function(t){var e=document.createElement("div");e.style.display="flex";var o=document.createElement("input");o.type="checkbox";var i=document.createElement("div");return i.textContent=t,i.style.color="#aaa",e.appendChild(o),e.appendChild(i),{div:e,checkBox:o}},A=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2009",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"2015",i=document.createElement("div");i.style.display="flex";var s=document.createElement("input");s.type="range",s.min=e,s.max=o;var n=document.createElement("div");return n.textContent=t,n.style.color="#aaa",i.appendChild(s),i.appendChild(n),{div:i,slider:s,text:n}},y=function(t){(0,a.Z)(o,t);var e=(0,h.Z)(o);function o(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";(0,s.Z)(this,o),(t=e.call(this,i)).drawing=void 0,t.ui=void 0,t.meshAreaGon=void 0,t.meshPolygon2=void 0,t.pts=[],t.dataTwitter=void 0,t.xOFf=-15478803.88731685,t.yOFf=-4766681.448690384,t.scale=.01,t.PARAM=void 0;var n=c.P8.R7.getAllUrlParams();t.PARAM=JSON.parse(JSON.stringify(n)),t.drawing=new v((0,r.Z)(t)),t.dataTwitter=new g((0,r.Z)(t));var a=new l.cek(16777215,.8);t.camera.add(a),t.scene.add(a);var h=document.createElement("canvas");h.style.position="absolute",h.style.pointerEvents="none",h.style.mixBlendMode="darken",h.width=t.hostDiv.clientWidth,h.height=t.hostDiv.clientHeight,t.hostDiv.appendChild(h);var d=h.getContext("webgl"),m=new u.B(d,.5,5);if(m.Render(d),t.ui=new p((0,r.Z)(t)),t.PARAM.posCamera){var f=t.PARAM.posCamera.split(",");t.camera.position.set(+f[0],+f[1],+f[2]),t.controls.enablePan=!1,t.controls.enableRotate=!1,t.controls.enableZoom=!1}else t.camera.position.set(0,100,100);if(t.PARAM.posTarget){var A=t.PARAM.posTarget.split(",");t.controls.target.set(+A[0],+A[1],+A[2])}return t}return(0,n.Z)(o,[{key:"projectionToMercator",value:function(t,e){var o=(0,c._Y)(t,e),s=(0,i.Z)(o,2),n=s[0],r=s[1];return[(n+this.xOFf)*this.scale,(r+this.yOFf)*this.scale]}},{key:"updateParam",value:function(){this.PARAM.scale&&(this.ui.isActive_twitter=!0,this.dataTwitter.dataScale=+this.PARAM.scale),this.PARAM.colorScale&&(this.ui.isActive_twitter=!0,this.dataTwitter.colorScale=+this.PARAM.colorScale),this.PARAM.dataLayer&&(this.ui.isActive_twitter=!0,this.dataTwitter.updateMesh(this.PARAM.dataLayer))}},{key:"update",value:function(t){var e;this.drawing.update(),null===(e=this.dataTwitter)||void 0===e||e.update();var o="Pos: ".concat(this.camera.position.x,", ").concat(this.camera.position.y,", ").concat(this.camera.position.z,"; Target: ").concat(this.controls.target.x,", ").concat(this.controls.target.y,", ").concat(this.controls.target.z);void 0!==this.ui.divCameraPos&&(this.ui.divCameraPos.textContent=o)}}]),o}(c.TF)}}]);
//# sourceMappingURL=5883.99d8c608.chunk.js.map