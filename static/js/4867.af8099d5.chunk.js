"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[4867],{14867:function(i,e,t){t.r(e),t.d(e,{Solution:function(){return h}});var s=t(5483),n=t.n(s);class o{constructor(i){var e=this;this.solution=void 0,this.map=void 0,this.canvasMapbox=void 0,this.center=function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-99.292649,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:39.043903;new(n().LngLat)(i,t);e.map.setCenter({lat:t,lng:i})},this.toMap=(i,e)=>{const t=this.map.unproject({x:i,y:e});return[t.lng,t.lat]},this.toScreen=(i,e)=>{const t=this.map.project([i,e]);return[t.x,t.y]},this.mouseDown=i=>{},this.mouseUp=i=>{},this.mouseMove=i=>{},this.mouseClick=i=>{},this.mouseDClick=i=>{},this.solution=i,this.initMap(i.divHost.id)}initMap(i){n().accessToken="pk.eyJ1IjoiZGVzaWduanUiLCJhIjoiY2xhNGU0YWo4MDlhYzNwdHBwenVvang4eiJ9.P3sX4l_3KjdPeRRbVS1VVg",this.map=new(n().Map)({preserveDrawingBuffer:!0,container:i,zoom:6,center:[-77.430815,37.801833],style:"mapbox://styles/mapbox/dark-v10"}),this.map.dragRotate.disable(),this.map.on("mousemove",(i=>{this.mouseMove(i)})),this.map.on("click",(i=>{this.mouseClick(i)})),this.map.on("mousedown",(i=>{this.mouseDown(i)})),this.map.on("dblclick",(i=>{this.mouseDClick(i)})),this.map.on("mouseup",(i=>{this.mouseUp(i)})),window.addEventListener("keydown",(i=>{}));let e=document.getElementsByClassName("mapboxgl-canvas")[0];e.style.position="absolute",e=document.getElementsByClassName("mapboxgl-control-container")[0],e.style.display="none",this.map.on("load",(()=>{this.initPost()}))}initPost(){this.solution.initPost(),this.canvasMapbox=this.map.getCanvas()}initCustomCanvas(){this.solution.renderer.canvas.width=this.canvasMapbox.width,this.solution.renderer.canvas.height=this.canvasMapbox.height,this.solution.renderer.canvas.style.display="none";this.map.getBounds();this.map.addSource("canvas-source",{type:"canvas",canvas:this.solution.renderer.canvas,coordinates:[],animate:!0}),this.map.addLayer({id:"canvas-layer",type:"raster",source:"canvas-source"})}downloadImage(){!function(i,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"map.png",s=document.createElement("canvas");s.width=i.width,s.height=i.height;let n=s.getContext("2d");n.globalAlpha=1,n.drawImage(i,0,0),n.drawImage(e,0,0,i.width,i.height);let o=new Image;o.width=i.width,o.height=i.height,o.src=s.toDataURL();let a=document.createElement("a");a.download=t,a.href=s.toDataURL(),a.click()}(this.map.getCanvas(),this.solution.renderer.canvas)}}var a=t(31034),r=t(88410),l=t(99764);class d{constructor(i){this.solution=void 0,this.deckLayer=void 0,this.deckLayer2=void 0,this.map=void 0,this.solution=i}initPost(){this.map=this.solution.mapboxWrapper.map,this.deckLayer=new a.Z({id:"my-scatterplot",type:r.Z,data:[{position:[-74.5,40],size:1e4},{position:[-74.5,40.5],size:5e3},{position:[-74.6,40.5],size:5800},{position:[-74.7,40.5],size:100}],getPosition:i=>i.position,getRadius:i=>i.size,getFillColor:i=>[255,140,0],getLineColor:i=>[255,255,0]}),this.map.addLayer(this.deckLayer,"waterway-label");this.deckLayer2=new a.Z({id:"my-scatterplot2",type:l.Z,data:[{pickup:[-122.42,37.8],dropoff:[-74.5,40.5]},{pickup:[-122.43,37.8],dropoff:[-122.42,37.75]}],getSourcePosition:i=>i.pickup,getTargetPosition:i=>i.dropoff,getSourceColor:i=>[255,128,0],getTargetColor:i=>[0,128,255],strokeWidth:5}),this.map.addLayer(this.deckLayer2)}}var c=t(55913);class u extends c.bb{constructor(i,e){super(i),this.app=void 0,this.time=0,this.pts=[],this.isActive=!1,this.mouseDown=(i,e)=>{},this.mouseUp=(i,e)=>{},this.mouseDrag=(i,e)=>{},this.app=e,this.canvas.id="mapboxCustom",this.canvas.style.position="absolute",this.canvas.style.pointerEvents="none",this.canvas.style.mixBlendMode="color-dodge",this.start()}initPost(){this.ctx.globalCompositeOperation="color-dodge",this.isActive=!0}render(i){if(!this.isActive)return;this.time+=.1;const e=this.app.mapboxWrapper.map.getZoom(),t=.1*Math.pow(2,e);for(let s=0;s<this.pts.length;++s){const e=this.pts[s],n=this.app.mapboxWrapper.toScreen(e[0],e[1]),o=.25*t;i.beginPath(),i.arc(n[0],n[1],o+(Math.sin(this.time+s)+3)*t,0,2*Math.PI),i.closePath(),i.fillStyle="rgba(0, 255, 0, 0.7)",i.fill()}}}class p{constructor(i){this.solution=void 0,this.divHost=void 0,this.solution=i,this.divHost=i.divHost,this.initUI()}initUI(){const i=document.createElement("div");this.divHost.appendChild(i);const e=document.createElement("div");e.textContent="download",e.style.position="relative",e.style.margin="10px",e.onclick=()=>{this.solution.mapboxWrapper.downloadImage()},i.appendChild(e)}}class h{constructor(i){this.divHost=void 0,this.mapboxWrapper=void 0,this.deckGL=void 0,this.renderer=void 0,this.uiWrapper=void 0,this.mouseDown=i=>{},this.mouseUp=i=>{},this.mouseDrag=i=>{},this.mouseClick=i=>{},this.mouseMove=i=>{},this.divHost=i,this.divHost.style.position="relative",this.deckGL=new d(this),this.mapboxWrapper=new o(this),this.mapboxWrapper.mouseDown=this.mouseDown,this.mapboxWrapper.mouseUp=this.mouseUp,this.mapboxWrapper.mouseClick=this.mouseClick,this.mapboxWrapper.mouseMove=this.mouseMove,this.renderer=new u(this.divHost,this),this.uiWrapper=new p(this)}initPost(){this.renderer.initPost(),this.deckGL.initPost()}keyDown(i){}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}},88410:function(i,e,t){t.d(e,{Z:function(){return p}});var s=t(4942),n=t(89951),o=t(38378),a=t(69323),r=t(56128),l=t(76501),d=t(90643);const c=[0,0,0,255],u={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:i=>i.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:c},getLineColor:{type:"accessor",value:c},getLineWidth:{type:"accessor",value:1},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class p extends n.Z{getShaders(){return super.getShaders({vs:"#define SHADER_NAME scatterplot-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instancePositions;\nattribute vec3 instancePositions64Low;\nattribute float instanceRadius;\nattribute float instanceLineWidths;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusScale;\nuniform float radiusMinPixels;\nuniform float radiusMaxPixels;\nuniform float lineWidthScale;\nuniform float lineWidthMinPixels;\nuniform float lineWidthMaxPixels;\nuniform float stroked;\nuniform bool filled;\nuniform bool antialiasing;\nuniform bool billboard;\nuniform int radiusUnits;\nuniform int lineWidthUnits;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\nvarying float outerRadiusPixels;\n\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n  outerRadiusPixels = clamp(\n    project_size_to_pixel(radiusScale * instanceRadius, radiusUnits),\n    radiusMinPixels, radiusMaxPixels\n  );\n  float lineWidthPixels = clamp(\n    project_size_to_pixel(lineWidthScale * instanceLineWidths, lineWidthUnits),\n    lineWidthMinPixels, lineWidthMaxPixels\n  );\n  outerRadiusPixels += stroked * lineWidthPixels / 2.0;\n  float edgePadding = antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;\n  unitPosition = edgePadding * positions.xy;\n  geometry.uv = unitPosition;\n  geometry.pickingColor = instancePickingColors;\n\n  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;\n  \n  if (billboard) {\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);\n    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n    vec3 offset = edgePadding * positions * outerRadiusPixels;\n    DECKGL_FILTER_SIZE(offset, geometry);\n    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);\n  } else {\n    vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);\n    DECKGL_FILTER_SIZE(offset, geometry);\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);\n    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  }\n  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);\n  DECKGL_FILTER_COLOR(vFillColor, geometry);\n  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);\n  DECKGL_FILTER_COLOR(vLineColor, geometry);\n}\n",fs:"#define SHADER_NAME scatterplot-layer-fragment-shader\n\nprecision highp float;\n\nuniform bool filled;\nuniform float stroked;\nuniform bool antialiasing;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\nvarying float outerRadiusPixels;\n\nvoid main(void) {\n  geometry.uv = unitPosition;\n\n  float distToCenter = length(unitPosition) * outerRadiusPixels;\n  float inCircle = antialiasing ? \n    smoothedge(distToCenter, outerRadiusPixels) : \n    step(distToCenter, outerRadiusPixels);\n\n  if (inCircle == 0.0) {\n    discard;\n  }\n\n  if (stroked > 0.5) {\n    float isLine = antialiasing ? \n      smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :\n      step(innerUnitRadius * outerRadiusPixels, distToCenter);\n\n    if (filled) {\n      gl_FragColor = mix(vFillColor, vLineColor, isLine);\n    } else {\n      if (isLine == 0.0) {\n        discard;\n      }\n      gl_FragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);\n    }\n  } else if (filled) {\n    gl_FragColor = vFillColor;\n  } else {\n    discard;\n  }\n\n  gl_FragColor.a *= inCircle;\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:[o.Z,a.Z]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}updateState(i){if(super.updateState(i),i.changeFlags.extensionsChanged){var e;const{gl:i}=this.context;null===(e=this.state.model)||void 0===e||e.delete(),this.state.model=this._getModel(i),this.getAttributeManager().invalidateAll()}}draw(i){let{uniforms:e}=i;const{radiusUnits:t,radiusScale:s,radiusMinPixels:n,radiusMaxPixels:o,stroked:a,filled:l,billboard:d,antialiasing:c,lineWidthUnits:u,lineWidthScale:p,lineWidthMinPixels:h,lineWidthMaxPixels:m}=this.props;this.state.model.setUniforms(e).setUniforms({stroked:a?1:0,filled:l,billboard:d,antialiasing:c,radiusUnits:r.iI[t],radiusScale:s,radiusMinPixels:n,radiusMaxPixels:o,lineWidthUnits:r.iI[u],lineWidthScale:p,lineWidthMinPixels:h,lineWidthMaxPixels:m}).draw()}_getModel(i){return new l.Z(i,{...this.getShaders(),id:this.props.id,geometry:new d.Z({drawMode:6,vertexCount:4,attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])}}}),isInstanced:!0})}}(0,s.Z)(p,"defaultProps",u),(0,s.Z)(p,"layerName","ScatterplotLayer")},31034:function(i,e,t){t.d(e,{Z:function(){return v}});var s=t(4942),n=t(67028),o=t(59398),a=t(94508),r=t(19199),l=t(14305);const d=512,c=Math.PI/180;function u(i){let{map:e,gl:t,deck:s}=i;if(e.__deck)return e.__deck;const a=null===s||void 0===s?void 0:s.props._customRender,l=null===s||void 0===s?void 0:s.props.onLoad,d=(c={...null===s||void 0===s?void 0:s.props,_customRender:()=>{e.triggerRepaint(),null===a||void 0===a||a("")}},{...c,parameters:{depthMask:!0,depthTest:!0,blend:!0,blendFunc:[770,771,1,771],polygonOffsetFill:!0,depthFunc:515,blendEquation:32774,...c.parameters},views:c.views||[new o.Z({id:"mapbox"})]});var c;let u;return s&&s.props.gl!==t||(Object.assign(d,{gl:t,width:null,height:null,touchAction:"unset",viewState:h(e)}),null!==s&&void 0!==s&&s.isInitialized?p(s,e):d.onLoad=()=>{null===l||void 0===l||l(),p(u,e)}),s?(u=s,s.setProps(d),s.userData.isExternal=!0):(u=new n.Z(d),e.on("remove",(()=>{!function(i){var e;null===(e=i.__deck)||void 0===e||e.finalize(),i.__deck=null}(e)}))),u.userData.mapboxLayers=new Set,e.__deck=u,e.on("render",(()=>{u.isInitialized&&function(i,e){const{mapboxLayers:t,isExternal:s}=i.userData;if(s){const s=Array.from(t,(i=>i.id)),n=(0,r.x)(i.props.layers,Boolean).some((i=>i&&!s.includes(i.id)));let o=i.getViewports();const a=o.findIndex((i=>"mapbox"===i.id)),l=o.length>1||a<0;(n||l)&&(a>=0&&(o=o.slice(),o[a]=m(i,e,!1)),i._drawLayers("mapbox-repaint",{viewports:o,layerFilter:e=>(!i.props.layerFilter||i.props.layerFilter(e))&&("mapbox"!==e.viewport.id||!s.includes(e.layer.id)),clearCanvas:!1}))}i.userData.currentViewport=null}(u,e)})),u}function p(i,e){const t=()=>{i.isInitialized?function(i,e){i.setProps({viewState:h(e)}),i.needsRedraw({clearRedrawFlags:!0})}(i,e):e.off("move",t)};e.on("move",t)}function h(i){var e;const{lng:t,lat:s}=i.getCenter(),n={longitude:(t+540)%360-180,latitude:s,zoom:i.getZoom(),bearing:i.getBearing(),pitch:i.getPitch(),padding:i.getPadding(),repeat:i.getRenderWorldCopies()};return null!==(e=i.getTerrain)&&void 0!==e&&e.call(i)&&function(i,e){if(i.getFreeCameraOptions){const{position:t}=i.getFreeCameraOptions();if(!t||void 0===t.z)return;const s=i.transform.height,{longitude:n,latitude:o,pitch:a}=e,r=t.x*d,u=(1-t.y)*d,p=t.z*d,h=(0,l.w5)([n,o]),m=r-h[0],g=u-h[1],v=Math.sqrt(m*m+g*g),f=a*c,y=1.5*s,x=f<.001?y*Math.cos(f)/p:y*Math.sin(f)/v;e.zoom=Math.log2(x);const C=p-y*Math.cos(f)/x;e.position=[0,0,C/(0,l.NC)(o)]}else"number"===typeof i.transform.elevation&&(e.position=[0,0,i.transform.elevation])}(i,n),n}function m(i,e){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new a.Z({id:"mapbox",x:0,y:0,width:i.width,height:i.height,...h(e),nearZMultiplier:t?.02:.1})}function g(i){if(i.userData.isExternal)return;const e=[];i.userData.mapboxLayers.forEach((i=>{const t=new(0,i.props.type)(i.props);e.push(t)})),i.setProps({layers:e})}class v{constructor(i){if((0,s.Z)(this,"id",void 0),(0,s.Z)(this,"type",void 0),(0,s.Z)(this,"renderingMode",void 0),(0,s.Z)(this,"map",void 0),(0,s.Z)(this,"deck",void 0),(0,s.Z)(this,"props",void 0),!i.id)throw new Error("Layer must have an unique id");this.id=i.id,this.type="custom",this.renderingMode=i.renderingMode||"3d",this.map=null,this.deck=null,this.props=i}onAdd(i,e){var t,s;this.map=i,this.deck=u({map:i,gl:e,deck:this.props.deck}),t=this.deck,s=this,t.userData.mapboxLayers.add(s),g(t)}onRemove(){var i,e;this.deck&&(i=this.deck,e=this,i.userData.mapboxLayers.delete(e),g(i))}setProps(i){Object.assign(this.props,i,{id:this.id}),this.deck&&g(this.deck)}render(){!function(i,e,t){let{currentViewport:s}=i.userData,n=!1;s||(s=m(i,e,!0),i.userData.currentViewport=s,n=!0),i.isInitialized&&i._drawLayers("mapbox-repaint",{viewports:[s],layerFilter:i=>{let{layer:e}=i;return t.id===e.id},clearStack:n,clearCanvas:!1})}(this.deck,this.map,this)}}}}]);
//# sourceMappingURL=4867.af8099d5.chunk.js.map