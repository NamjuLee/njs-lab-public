"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[1572],{54078:function(e,t,i){i.d(t,{B:function(){return r}});var o=i(15671),s=i(43144),n=i(9936),r=function(){function e(t){(0,o.Z)(this,e),this.gl=void 0,this.program=void 0,this.fragmentShader=void 0,this.vertexShader=void 0,this.matrixLocation=void 0,this.posBuffer=void 0,this.colBuffer=void 0,this.vertexs=void 0,this.posLocAtt=void 0,this.colLocAtt=void 0,this.matLoc=void 0,this.colLoc=void 0,this.cVecLoc=void 0,this.mouseLoc=void 0,this.timeGL=void 0,this.vShader=void 0,this.fShader=void 0,this.v="\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    \n    varying vec4 f_color;\n\n    void main() {\n\n        vec2 mouse_distance = vec2(0,0) - (a_position.xy /vec2(2,2));\n        float red = 1.0 - length(mouse_distance);\n        f_color = vec4(a_position, 0, 1.0);\n    \n        // float dis = distance(vec2(a_position.xy), vec2(0,0));\n\n        // f_color = vec4(dis * 0.6, 0,0,1);\n        gl_Position = vec4( a_position, 0, 1);\n    }\n    ",this.f="\n    precision highp float;\n\n    varying vec4 f_color;\n    \n    void main() {\n        vec2 mouse_distance = vec2(0,0) - (f_color.xy /vec2(5,5));\n\n        float col =  length(mouse_distance*5.);\n        float val = 1.0 - length(mouse_distance*8.);\n        \n        gl_FragColor = vec4(0.19,0.19,0.19, col);\n\n    }\n    ",this.positionAttribLocation=void 0,this.colorAttribLocation=void 0,this.translation=void 0,this.color=void 0,this.colArray=void 0,this.gl=t,this.color=[Math.random(),Math.random(),Math.random(),1],this.InitShader()}return(0,s.Z)(e,[{key:"InitShader",value:function(){var e=n.Ui.CreateShader(this.gl,this.gl.VERTEX_SHADER,this.v),t=n.Ui.CreateShader(this.gl,this.gl.FRAGMENT_SHADER,this.f);if(e&&t){this.vShader=e,this.fShader=t;var i=n.Ui.CreateProgram(this.gl,e,t);i&&(this.program=i)}}},{key:"Render",value:function(e){var t=[.1,0,0,1];this.vertexs=new Float32Array([-1,-1,1,1,1,1,-1,1,t[0],t[1],t[2],t[3],1,-1,t[0],t[1],t[2],t[3],-1,1,1,1,1,1,1,-1,t[0],t[1],t[2],t[3],1,1,t[0],t[1],t[2],t[3]]),this.posBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.posBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(this.vertexs),e.STATIC_DRAW),this.posLocAtt=this.gl.getAttribLocation(this.program,"a_position");var i=e.FLOAT,o=6*Float32Array.BYTES_PER_ELEMENT,s=0;e.vertexAttribPointer(this.posLocAtt,2,i,!1,o,s),e.enableVertexAttribArray(this.posLocAtt),e.useProgram(this.program);var n=e.TRIANGLES;s=0;e.drawArrays(n,s,6)}}]),e}()},10730:function(e,t,i){i.d(t,{UI:function(){return n}});var o=i(15671),s=i(43144),n=function(){function e(t){(0,o.Z)(this,e),this.solution=void 0,this.hostDiv=void 0,this.isActive_high_low_connectedness_user=!1,this.isActive_Paris_main_st=!0,this.isActive_treated_st=!1,this.isActive_control_st=!1,this.isActive_zones_30=!1,this.isActive_streetOSM=!1,this.isActive_node=!1,this.month=-1,this.solution=t,this.hostDiv=t.hostDiv,this.appendUI()}return(0,s.Z)(e,[{key:"appendUI",value:function(){var e=this,t=document.createElement("div");t.style.position="absolute",this.hostDiv.append(t);var i=r("high_low_connectedness_user");t.append(i.div),i.checkBox.onchange=function(){!0===i.checkBox.checked?e.isActive_high_low_connectedness_user=!0:e.isActive_high_low_connectedness_user=!1};var o=r("main street");t.append(o.div),o.checkBox.checked=!0,o.checkBox.onchange=function(){!0===o.checkBox.checked?e.isActive_Paris_main_st=!0:e.isActive_Paris_main_st=!1};var s=r("OSM street");t.append(s.div),s.checkBox.onchange=function(){!0===s.checkBox.checked?e.isActive_streetOSM=!0:e.isActive_streetOSM=!1};var n=r("treated street");t.append(n.div),n.checkBox.onchange=function(){!0===n.checkBox.checked?e.isActive_treated_st=!0:e.isActive_treated_st=!1};var h=r("control street");t.append(h.div),h.checkBox.onchange=function(){!0===h.checkBox.checked?e.isActive_control_st=!0:e.isActive_control_st=!1};var c=r("zones 30");t.append(c.div),c.checkBox.onchange=function(){!0===c.checkBox.checked?e.isActive_zones_30=!0:e.isActive_zones_30=!1};var v=r("Node");t.append(v.div),v.checkBox.onchange=function(){!0===v.checkBox.checked?e.isActive_node=!0:e.isActive_node=!1};var l=a("Month");t.append(l.div),l.slider.onchange=function(){e.month=+l.slider.value}}}]),e}(),r=function(e){var t=document.createElement("div");t.style.display="flex";var i=document.createElement("input");i.type="checkbox";var o=document.createElement("div");return o.textContent=e,o.style.color="#aaa",t.appendChild(i),t.appendChild(o),{div:t,checkBox:i}},a=function(e){var t=document.createElement("div");t.style.display="flex";var i=document.createElement("input");i.type="range",i.min="0",i.max="12";var o=document.createElement("div");return o.textContent=e,o.style.color="#aaa",t.appendChild(i),t.appendChild(o),{div:t,slider:i}}},91572:function(e,t,i){i.r(t),i.d(t,{Solution:function(){return m}});var o=i(29439),s=i(15671),n=i(43144),r=i(97326),a=i(60136),h=i(29388),c=i(17760),v=i(38966),l=i(87968),d=i(54078),u=i(10730),m=function(e){(0,a.Z)(i,e);var t=(0,h.Z)(i);function i(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";(0,s.Z)(this,i),(e=t.call(this,n)).streetOSM=[],e.routesTreated=[],e.routesControl=[],e.zones30=[],e.zones15=[],e.routesMain=[],e.ui=void 0,e.meshTwitter=void 0,e.meshStreet=void 0,e.meshNode=void 0,e.meshTreated=void 0,e.meshControl=void 0,e.meshPolygon=void 0,e.meshRoutesMain=void 0,e.meshAreaGon=void 0,e.meshPolygon2=void 0,e.pts=[];var a=new c.cek(16777215,.8);e.camera.add(a),e.scene.add(a);var h=document.createElement("canvas");h.style.position="absolute",h.style.pointerEvents="none",h.style.mixBlendMode="darken",h.width=e.hostDiv.clientWidth,h.height=e.hostDiv.clientHeight,e.hostDiv.appendChild(h);var m=h.getContext("webgl"),_=new d.B(m,.5,5);_.Render(m),e.ui=new u.UI((0,r.Z)(e)),e.camera.position.set(0,40,48);var A="/static/research/slow-zone/";return(0,l.getJSONFromURL)("/njs-lab-public"+A+"street_osm.geojson").then((function(t){for(var i=0;i<t.features.length;++i)e.streetOSM.push(t.features[i].geometry.coordinates);e.meshStreet=g(e.scene,e.streetOSM,[0,1,1]),e.meshNode=f(e.scene,e.streetOSM,[0,1,1]),(0,v.Vu)("/njs-lab-public"+A+"high_low_connectedness_user.csv").then((function(t){for(var i=t.split(/\r\n|\r|\n/g),s=[],n=1;n<i.length;++n){var r=i[n].split(","),a=+r[3],h=+r[4];if(0!==a&&0!==h&&!isNaN(a)&&!isNaN(h)){var l=(0,v._Y)(a,h),d=(0,o.Z)(l,2),u=.01*(d[0]+-15478803.88731685),m=.01*(d[1]+-4766681.448690384);e.pts.push(u,0,m),s.push(0,.5,.5)}}var p=new c.u9r,f=new c.UY4({vertexColors:!0,size:1.5});p.setAttribute("position",new c.a$l(e.pts,3)),p.setAttribute("color",new c.a$l(s,3)),p.computeBoundingSphere(),e.meshTwitter=new c.woe(p,f),e.scene.add(e.meshTwitter)})),(0,l.getJSONFromURL)("/njs-lab-public"+A+"Paris-main-st.geojson").then((function(t){for(var i=0;i<t.features.length;++i)e.routesMain.push(t.features[i].geometry.coordinates);e.meshRoutesMain=g(e.scene,e.routesMain,[1,1,0])})),(0,l.getJSONFromURL)("/njs-lab-public"+A+"treated-st.geojson").then((function(t){for(var i=0;i<t.features.length;++i)e.routesTreated.push(t.features[i].geometry.coordinates);e.meshTreated=g(e.scene,e.routesTreated,[1,0,0])})),(0,l.getJSONFromURL)("/njs-lab-public"+A+"control-st.geojson").then((function(t){for(var i=0;i<t.features.length;++i)e.routesControl.push(t.features[i].geometry.coordinates);e.meshControl=g(e.scene,e.routesControl,[0,1,0])})),(0,l.getJSONFromURL)("/njs-lab-public"+A+"zones-30.geojson").then((function(t){for(var i=0;i<t.features.length;++i)e.zones30.push(t.features[i].geometry.coordinates)})),(0,l.getJSONFromURL)("/njs-lab-public"+A+"zones_15_innerouter_byyr.geojson").then((function(t){for(var i=0;i<t.features.length;++i)e.zones15.push(t.features[i].geometry.coordinates);console.log(t),e.meshAreaGon=p(e.scene,t)})),e.start()})),e}return(0,n.Z)(i,[{key:"update",value:function(e){void 0!==this.meshTwitter&&(this.ui.isActive_high_low_connectedness_user?this.meshTwitter.visible=!0:this.meshTwitter.visible=!1),void 0!==this.meshRoutesMain&&(this.ui.isActive_Paris_main_st?this.meshRoutesMain.visible=!0:this.meshRoutesMain.visible=!1),void 0!==this.meshStreet&&(this.ui.isActive_streetOSM?this.meshStreet.visible=!0:this.meshStreet.visible=!1),void 0!==this.meshNode&&(this.ui.isActive_node?this.meshNode.visible=!0:this.meshNode.visible=!1),void 0!==this.meshTreated&&(this.ui.isActive_treated_st?this.meshTreated.visible=!0:this.meshTreated.visible=!1),void 0!==this.meshControl&&(this.ui.isActive_control_st?this.meshControl.visible=!0:this.meshControl.visible=!1),void 0!==this.meshPolygon&&(this.ui.isActive_zones_30?this.meshPolygon.visible=!0:this.meshPolygon.visible=!1)}}]),i}(v.TF),p=function(e,t){for(var i=[],s=0;s<t.features.length;++s){for(var n=t.features[s].geometry.coordinates,r=(t.features[s].properties.yr,new c.bnF,[]),a=[],h=0;h<n.length;++h){var l=n[h];console.log(l.length);for(var d=new c.y$t,u=0;u<l.length;++u){var m=(0,v._Y)(l[u][0],l[u][1]),p=(0,o.Z)(m,2),f=.01*(p[0]+-15478803.88731685),g=.01*(p[1]+-4766681.448690384);0===h?a.push(new c.FM8(f,g)):0===u?d.moveTo(f,g):(d.lineTo(f,g),u===l.length-1&&d.closePath())}r.push(d)}var _=new c.bnF(r);i.push(_)}var A=new c.oa8(i);console.log(0),console.log(A);var b=new c.vBJ({side:c.ehD,color:65280,transparent:!0,opacity:.3}),w=new c.Kj0(A,b);return e.add(w),w.rotateOnAxis(new c.Pa4(1,0,0),.5*Math.PI),w},f=function(e,t,i){for(var s=new c.u9r,n=new c.UY4({vertexColors:!0,size:.5}),r=[],a=[],h=0;h<t.length;++h)for(var l=t[h],d=0;d<l.length;++d)for(var u=0;u<l[d].length;++u){var m=(0,v._Y)(l[d][u][0],l[d][u][1]),p=(0,o.Z)(m,2),f=.01*(p[0]+-15478803.88731685),g=.01*(p[1]+-4766681.448690384);r.push(f,0,g),a.push(i[0],i[1],i[2])}s.setAttribute("position",new c.a$l(r,3)),s.setAttribute("color",new c.a$l(a,3)),s.computeBoundingSphere();var _=new c.woe(s,n);return e.add(_),_},g=function(e,t,i){for(var s=new c.u9r,n=new c.nls({vertexColors:!0}),r=[],a=[],h=[],l=0;l<t.length;++l)for(var d=t[l],u=0;u<d.length;++u)for(var m=0;m<d[u].length;++m){var p=(0,v._Y)(d[u][m][0],d[u][m][1]),f=(0,o.Z)(p,2),g=f[0],_=f[1];g,_,1;var A=.01*(g+-15478803.88731685),b=.01*(_+-4766681.448690384);r.push(A,0,b),a.push(i[0],i[1],i[2]),m<d[u].length-1&&h.push(Math.floor(r.length/3)-1,Math.floor(r.length/3))}s.setIndex(h),s.setAttribute("position",new c.a$l(r,3)),s.setAttribute("color",new c.a$l(a,3)),s.computeBoundingSphere();var w=new c.ejS(s,n);return e.add(w),w}}}]);
//# sourceMappingURL=1572.904ffeae.chunk.js.map