(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[51591],{51591:(e,t,p)=>{"use strict";p.r(t),p.d(t,{AppNGL3d:()=>d});var r=p(26096);class d{static InitStarter(e){new r.NGL3dApp(e)}static Init(e,t){new d(e,t).Dummy()}constructor(e,t){this.AppEnvCanvas(e,"NGL3dApp_".concat(o(t)))}async AppEnvCanvas(e,t){try{const r=await p(29786)("./".concat(t)),{NGL3dApp:d}=r;new d(e)}catch(r){console.log("Stop loading Apps."),console.log(r)}}Dummy(){}BindEvent(){}}const o=e=>e<10?"0".concat(e):"".concat(e)},53454:(e,t,p)=>{"use strict";p.r(t),p.d(t,{Canvas:()=>r});class r{constructor(e){this.app=void 0,this.gl=void 0,this.canvas=void 0,this.app=e,this.canvas=document.createElement("canvas"),this.app.host&&(this.app.host.appendChild(this.canvas),this.canvas.width=this.app.host.clientWidth,this.canvas.height=this.app.host.clientHeight);const t=this.canvas.getContext("webgl2");null!==t&&(this.gl=t),this.loop(this.gl)}loop(e){this.clear(e)}clear(e){e.clearColor(.5,1,1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}}},73025:(e,t,p)=>{"use strict";p.r(t),p.d(t,{Tri:()=>d});var r=p(53879);class d{constructor(e){this.v="#version 300 es\n        in vec3 a_position;\n\n        uniform float uPointSize;\n\n        void main(void) {\n            gl_PointSize = uPointSize;\n            gl_Position = vec4(a_position, 1.0);\n        }\n    ",this.f="#version 300 es\n        precision mediump float;\n\n        out vec4 finalColor;\n\n        void main(void) {\n            finalColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    ",this.gl=void 0,this.vShader=void 0,this.fShader=void 0,this.program=void 0,this.aPositionLoc=void 0,this.uPointSizeLoc=void 0,this.gl=e,this.initShader(e)}initShader(e){let t=r.GLShaderCommon.createShader(e,e.VERTEX_SHADER,this.v),p=r.GLShaderCommon.createShader(e,e.FRAGMENT_SHADER,this.f);if(t&&p){this.vShader=t,this.fShader=p;let d=r.GLShaderCommon.createProgram(e,this.vShader,this.fShader,!0);d&&(this.program=d,e.useProgram(this.program),this.aPositionLoc=e.getAttribLocation(this.program,"a_position"),this.uPointSizeLoc=e.getUniformLocation(this.program,"uPointSize"),e.useProgram(null),this.initGeo(e))}else console.error("vertex fragment shader error")}initGeo(e){let t=new Float32Array([0,0,0,.5,.5,0,-.5,.5,0]),p=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.useProgram(this.program),e.uniform1f(this.uPointSizeLoc,10),e.bindBuffer(e.ARRAY_BUFFER,p),e.enableVertexAttribArray(this.aPositionLoc),e.vertexAttribPointer(this.aPositionLoc,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,null),this.gl.drawArrays(e.POINTS,0,t.length/3)}}},53879:(e,t,p)=>{"use strict";p.r(t),p.d(t,{GLShaderCommon:()=>r});class r{static getShader(e,t,p){const r=e.createShader(t);if(null!==r)return e.shaderSource(r,p),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log("An error occurred compiling the shaders:"+e.getShaderInfoLog(r)),e.deleteShader(r),null)}static createProgram(e,t,p){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const d=e.createProgram();if(null===d)return null;if(e.attachShader(d,t),e.attachShader(d,p),e.linkProgram(d),!e.getProgramParameter(d,e.LINK_STATUS)){const r=e.getProgramInfoLog(d);return console.log("Failed to link program: "+r),e.deleteProgram(d),e.deleteShader(p),e.deleteShader(t),null}return r&&(e.validateProgram(d),!e.getProgramParameter(d,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(d)),e.deleteProgram(d),e.deleteShader(p),e.deleteShader(t),null):(e.deleteShader(p),e.deleteShader(t),d)}static createShader(e,t,p){const r=e.createShader(t);if(null===r)return null;e.shaderSource(r,p),e.compileShader(r);return e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null)}static createShaderFromPath(e,t,p){const d=e.createShader(t);if(null===d)return null;e.shaderSource(d,r.getSourceSynch(p)),e.compileShader(d);return e.getShaderParameter(d,e.COMPILE_STATUS)?d:(e.deleteShader(d),null)}static getSourceSynch(e){const t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),200===t.status?t.responseText:null}static loadImage(e,t){const p=new Image;p.onload=function(){t(null,p)},p.src=e}}},26096:(e,t,p)=>{"use strict";p.r(t),p.d(t,{NGL3dApp:()=>o});var r=p(53454),d=p(73025);class o{constructor(e){this.host=void 0,this.canvas=void 0;const t=document.getElementById(e);t&&(this.host=t),this.canvas=new r.Canvas(this);new d.Tri(this.canvas.gl)}}},25125:(e,t,p)=>{"use strict";p.r(t),p.d(t,{Solution:()=>d});var r=p(51591);class d{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7;this.divHost=void 0,this.divHost=document.getElementById(e);const p=document.createElement("div");p.id="ngl3d",p.style.width="100%",p.style.height="100%",this.divHost.appendChild(p),r.AppNGL3d.Init(p.id,t)}destroy(){try{for(;void 0!==this.divHost&&void 0!==this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}catch(e){console.debug(e)}}}},29786:(e,t,p)=>{var r={"./":[25125,9],"./AppNGL":[51591,9],"./AppNGL.ts":[51591,9],"./NGL3dApp_01":[26096,9],"./NGL3dApp_01/":[26096,9],"./NGL3dApp_01/Core/Canvas":[53454,9],"./NGL3dApp_01/Core/Canvas.ts":[53454,9],"./NGL3dApp_01/Geometry/Tri":[73025,9],"./NGL3dApp_01/Geometry/Tri.ts":[73025,9],"./NGL3dApp_01/Utility/GLShaderCommon":[53879,9],"./NGL3dApp_01/Utility/GLShaderCommon.ts":[53879,9],"./NGL3dApp_01/index":[26096,9],"./NGL3dApp_01/index.ts":[26096,9],"./NGL3dApp_02":[46974,9,46974],"./NGL3dApp_02/":[46974,9,46974],"./NGL3dApp_02/Core/Canvas":[80150,9,80150],"./NGL3dApp_02/Core/Canvas.ts":[80150,9,80150],"./NGL3dApp_02/Core/Loop":[93607,9,93607],"./NGL3dApp_02/Core/Loop.ts":[93607,9,93607],"./NGL3dApp_02/Core/Renderer":[74282,9,74282],"./NGL3dApp_02/Core/Renderer.ts":[74282,9,74282],"./NGL3dApp_02/Core/Scene":[2911,9,2911],"./NGL3dApp_02/Core/Scene.ts":[2911,9,2911],"./NGL3dApp_02/Geometry/Point":[29182,9,29182],"./NGL3dApp_02/Geometry/Point.ts":[29182,9,29182],"./NGL3dApp_02/Utility/GLShaderCommon":[65286,9,65286],"./NGL3dApp_02/Utility/GLShaderCommon.ts":[65286,9,65286],"./NGL3dApp_02/index":[46974,9,46974],"./NGL3dApp_02/index.ts":[46974,9,46974],"./NGL3dApp_03":[84763,9,84763],"./NGL3dApp_03/":[84763,9,84763],"./NGL3dApp_03/Core/Canvas":[15091,9,15091],"./NGL3dApp_03/Core/Canvas.ts":[15091,9,15091],"./NGL3dApp_03/Core/Loop":[19461,9,19461],"./NGL3dApp_03/Core/Loop.ts":[19461,9,19461],"./NGL3dApp_03/Core/Renderer":[90212,9,90212],"./NGL3dApp_03/Core/Renderer.ts":[90212,9,90212],"./NGL3dApp_03/Core/Scene":[12412,9,12412],"./NGL3dApp_03/Core/Scene.ts":[12412,9,12412],"./NGL3dApp_03/Geometry/Point":[78966,9,78966],"./NGL3dApp_03/Geometry/Point.ts":[78966,9,78966],"./NGL3dApp_03/Geometry/PointShader":[27395,9,27395],"./NGL3dApp_03/Geometry/PointShader.ts":[27395,9,27395],"./NGL3dApp_03/Utility/GLShaderCommon":[77773,9,77773],"./NGL3dApp_03/Utility/GLShaderCommon.ts":[77773,9,77773],"./NGL3dApp_03/WebGL/AttribLocations":[64269,9,2132],"./NGL3dApp_03/WebGL/AttribLocations.ts":[64269,9,2132],"./NGL3dApp_03/WebGL/MeshCommon":[24150,9,24150],"./NGL3dApp_03/WebGL/MeshCommon.ts":[24150,9,24150],"./NGL3dApp_03/WebGL/Modal":[97127,9,97127],"./NGL3dApp_03/WebGL/Modal.ts":[97127,9,97127],"./NGL3dApp_03/WebGL/Shader":[64113,9,64113],"./NGL3dApp_03/WebGL/Shader.ts":[64113,9,64113],"./NGL3dApp_03/WebGL/VAO":[33501,9,94369],"./NGL3dApp_03/WebGL/VAO.ts":[33501,9,94369],"./NGL3dApp_03/index":[84763,9,84763],"./NGL3dApp_03/index.ts":[84763,9,84763],"./NGL3dApp_04":[67601,9,67601],"./NGL3dApp_04/":[67601,9,67601],"./NGL3dApp_04/Core/Canvas":[76906,9,76906],"./NGL3dApp_04/Core/Canvas.ts":[76906,9,76906],"./NGL3dApp_04/Core/Loop":[3287,9,3287],"./NGL3dApp_04/Core/Loop.ts":[3287,9,3287],"./NGL3dApp_04/Core/Renderer":[14353,9,14353],"./NGL3dApp_04/Core/Renderer.ts":[14353,9,14353],"./NGL3dApp_04/Core/Scene":[10091,9,10091],"./NGL3dApp_04/Core/Scene.ts":[10091,9,10091],"./NGL3dApp_04/Geometry/Core/Base":[54390,9,54390],"./NGL3dApp_04/Geometry/Core/Base.ts":[54390,9,54390],"./NGL3dApp_04/Geometry/Point":[59557,9,59557],"./NGL3dApp_04/Geometry/Point.ts":[59557,9,59557],"./NGL3dApp_04/Geometry/PointShader":[52427,9,52427],"./NGL3dApp_04/Geometry/PointShader.ts":[52427,9,52427],"./NGL3dApp_04/Geometry/Primatives/GridAxis":[1613,9,1613],"./NGL3dApp_04/Geometry/Primatives/GridAxis.ts":[1613,9,1613],"./NGL3dApp_04/Utility/GLShaderCommon":[98655,9,98655],"./NGL3dApp_04/Utility/GLShaderCommon.ts":[98655,9,98655],"./NGL3dApp_04/WebGL/AttribLocations":[15944,9,15944],"./NGL3dApp_04/WebGL/AttribLocations.ts":[15944,9,15944],"./NGL3dApp_04/WebGL/MeshCommon":[69764,9,69764],"./NGL3dApp_04/WebGL/MeshCommon.ts":[69764,9,69764],"./NGL3dApp_04/WebGL/Modal":[26311,9,26311],"./NGL3dApp_04/WebGL/Modal.ts":[26311,9,26311],"./NGL3dApp_04/WebGL/Shader":[83325,9,83325],"./NGL3dApp_04/WebGL/Shader.ts":[83325,9,83325],"./NGL3dApp_04/WebGL/VAO":[94967,9,94967],"./NGL3dApp_04/WebGL/VAO.ts":[94967,9,94967],"./NGL3dApp_04/index":[67601,9,67601],"./NGL3dApp_04/index.ts":[67601,9,67601],"./NGL3dApp_05":[48373,9,48373],"./NGL3dApp_05/":[48373,9,48373],"./NGL3dApp_05/Core/Canvas":[63423,9,63423],"./NGL3dApp_05/Core/Canvas.ts":[63423,9,63423],"./NGL3dApp_05/Core/Loop":[68621,9,68621],"./NGL3dApp_05/Core/Loop.ts":[68621,9,68621],"./NGL3dApp_05/Core/Renderer":[7793,9,86149],"./NGL3dApp_05/Core/Renderer.ts":[7793,9,86149],"./NGL3dApp_05/Core/Scene":[82688,9,82688],"./NGL3dApp_05/Core/Scene.ts":[82688,9,82688],"./NGL3dApp_05/Geometry/Core/Base":[86149,9,58992],"./NGL3dApp_05/Geometry/Core/Base.ts":[86149,9,58992],"./NGL3dApp_05/Geometry/Point":[28111,9,28111],"./NGL3dApp_05/Geometry/Point.ts":[28111,9,28111],"./NGL3dApp_05/Geometry/PointShader":[95353,9,95353],"./NGL3dApp_05/Geometry/PointShader.ts":[95353,9,95353],"./NGL3dApp_05/Geometry/Primatives/GridAxis":[20605,9,20605],"./NGL3dApp_05/Geometry/Primatives/GridAxis.ts":[20605,9,20605],"./NGL3dApp_05/Utility/GLShaderCommon":[11528,9,49800],"./NGL3dApp_05/Utility/GLShaderCommon.ts":[11528,9,49800],"./NGL3dApp_05/Utility/Matrix4":[28934,9,28934],"./NGL3dApp_05/Utility/Matrix4.ts":[28934,9,28934],"./NGL3dApp_05/Utility/Vector3":[61630,9,61630],"./NGL3dApp_05/Utility/Vector3.ts":[61630,9,61630],"./NGL3dApp_05/WebGL/AttribLocations":[79263,9,79263],"./NGL3dApp_05/WebGL/AttribLocations.ts":[79263,9,79263],"./NGL3dApp_05/WebGL/MeshCommon":[25592,9,25592],"./NGL3dApp_05/WebGL/MeshCommon.ts":[25592,9,25592],"./NGL3dApp_05/WebGL/Modal":[10776,9,10776],"./NGL3dApp_05/WebGL/Modal.ts":[10776,9,10776],"./NGL3dApp_05/WebGL/Shader":[42967,9,42967],"./NGL3dApp_05/WebGL/Shader.ts":[42967,9,42967],"./NGL3dApp_05/WebGL/Transform":[73102,9,73102],"./NGL3dApp_05/WebGL/Transform.ts":[73102,9,73102],"./NGL3dApp_05/WebGL/VAO":[27995,9,27995],"./NGL3dApp_05/WebGL/VAO.ts":[27995,9,27995],"./NGL3dApp_05/index":[48373,9,48373],"./NGL3dApp_05/index.ts":[48373,9,48373],"./NGL3dApp_06":[79749,9,79749],"./NGL3dApp_06/":[79749,9,79749],"./NGL3dApp_06/Core/Canvas":[69165,9,69165],"./NGL3dApp_06/Core/Canvas.ts":[69165,9,69165],"./NGL3dApp_06/Core/Loop":[53332,9,53332],"./NGL3dApp_06/Core/Loop.ts":[53332,9,53332],"./NGL3dApp_06/Core/Renderer":[81713,9,81713],"./NGL3dApp_06/Core/Renderer.ts":[81713,9,81713],"./NGL3dApp_06/Core/Scene":[61349,9,61349],"./NGL3dApp_06/Core/Scene.ts":[61349,9,61349],"./NGL3dApp_06/Geometry/Core/Base":[74432,9,74432],"./NGL3dApp_06/Geometry/Core/Base.ts":[74432,9,74432],"./NGL3dApp_06/Geometry/Primatives/GridAxis":[9463,9,9463],"./NGL3dApp_06/Geometry/Primatives/GridAxis.ts":[9463,9,9463],"./NGL3dApp_06/Geometry/Primatives/PointScreen":[68908,9,68908],"./NGL3dApp_06/Geometry/Primatives/PointScreen.ts":[68908,9,68908],"./NGL3dApp_06/Geometry/Primatives/PointWorld":[88605,9,88605],"./NGL3dApp_06/Geometry/Primatives/PointWorld.ts":[88605,9,88605],"./NGL3dApp_06/Utility/GLShaderCommon":[65712,9,65712],"./NGL3dApp_06/Utility/GLShaderCommon.ts":[65712,9,65712],"./NGL3dApp_06/Utility/Matrix4":[14085,9,14085],"./NGL3dApp_06/Utility/Matrix4.ts":[14085,9,14085],"./NGL3dApp_06/Utility/Vector3":[72694,9,72694],"./NGL3dApp_06/Utility/Vector3.ts":[72694,9,72694],"./NGL3dApp_06/WebGL/AttribLocations":[61507,9,61507],"./NGL3dApp_06/WebGL/AttribLocations.ts":[61507,9,61507],"./NGL3dApp_06/WebGL/Camera":[41928,9,41928],"./NGL3dApp_06/WebGL/Camera.ts":[41928,9,41928],"./NGL3dApp_06/WebGL/MeshCommon":[28077,9,28077],"./NGL3dApp_06/WebGL/MeshCommon.ts":[28077,9,28077],"./NGL3dApp_06/WebGL/Modal":[90887,9,90887],"./NGL3dApp_06/WebGL/Modal.ts":[90887,9,90887],"./NGL3dApp_06/WebGL/Shader":[77770,9,77770],"./NGL3dApp_06/WebGL/Shader.ts":[77770,9,77770],"./NGL3dApp_06/WebGL/Transform":[15057,9,15057],"./NGL3dApp_06/WebGL/Transform.ts":[15057,9,15057],"./NGL3dApp_06/WebGL/VAO":[352,9,36813],"./NGL3dApp_06/WebGL/VAO.ts":[352,9,36813],"./NGL3dApp_06/index":[79749,9,79749],"./NGL3dApp_06/index.ts":[79749,9,79749],"./NGL3dApp_07":[81041,9,81041],"./NGL3dApp_07-1":[44163,9,28485,44163],"./NGL3dApp_07-1/":[44163,9,28485,44163],"./NGL3dApp_07-1/Core/Canvas":[10209,9,10209],"./NGL3dApp_07-1/Core/Canvas.ts":[10209,9,10209],"./NGL3dApp_07-1/Core/Loop":[28234,9,28234],"./NGL3dApp_07-1/Core/Loop.ts":[28234,9,28234],"./NGL3dApp_07-1/Core/Renderer":[87133,9,87133],"./NGL3dApp_07-1/Core/Renderer.ts":[87133,9,87133],"./NGL3dApp_07-1/Core/Scene":[99170,9,99170],"./NGL3dApp_07-1/Core/Scene.ts":[99170,9,99170],"./NGL3dApp_07-1/Geometry/Core/Base":[46672,9,46672],"./NGL3dApp_07-1/Geometry/Core/Base.ts":[46672,9,46672],"./NGL3dApp_07-1/Geometry/CustomGeometry/Rect":[19619,9,19619],"./NGL3dApp_07-1/Geometry/CustomGeometry/Rect.ts":[19619,9,19619],"./NGL3dApp_07-1/Geometry/CustomGeometry/RectScreen":[82217,9,82217],"./NGL3dApp_07-1/Geometry/CustomGeometry/RectScreen.ts":[82217,9,82217],"./NGL3dApp_07-1/Geometry/Primatives/GridAxis":[72049,9,72049],"./NGL3dApp_07-1/Geometry/Primatives/GridAxis.ts":[72049,9,72049],"./NGL3dApp_07-1/Geometry/Primatives/MulitQuad":[14519,9,14519],"./NGL3dApp_07-1/Geometry/Primatives/MulitQuad.ts":[14519,9,14519],"./NGL3dApp_07-1/Geometry/Primatives/PointScreen":[25227,9,25227],"./NGL3dApp_07-1/Geometry/Primatives/PointScreen.ts":[25227,9,25227],"./NGL3dApp_07-1/Geometry/Primatives/PointWorld":[30069,9,30069],"./NGL3dApp_07-1/Geometry/Primatives/PointWorld.ts":[30069,9,30069],"./NGL3dApp_07-1/Geometry/Primatives/Quad":[28485,9,28485],"./NGL3dApp_07-1/Geometry/Primatives/Quad.ts":[28485,9,28485],"./NGL3dApp_07-1/Utility/GLShaderCommon":[73053,9,59521],"./NGL3dApp_07-1/Utility/GLShaderCommon.ts":[73053,9,59521],"./NGL3dApp_07-1/Utility/Matrix4":[46710,9,46710],"./NGL3dApp_07-1/Utility/Matrix4.ts":[46710,9,46710],"./NGL3dApp_07-1/Utility/Vector3":[45338,9,45338],"./NGL3dApp_07-1/Utility/Vector3.ts":[45338,9,45338],"./NGL3dApp_07-1/WebGL/Camera":[25304,9,25304],"./NGL3dApp_07-1/WebGL/Camera.ts":[25304,9,25304],"./NGL3dApp_07-1/WebGL/MeshCommon":[17537,9,17537],"./NGL3dApp_07-1/WebGL/MeshCommon.ts":[17537,9,17537],"./NGL3dApp_07-1/WebGL/Model":[11412,9,11412],"./NGL3dApp_07-1/WebGL/Model.ts":[11412,9,11412],"./NGL3dApp_07-1/WebGL/Shader":[43727,9,43727],"./NGL3dApp_07-1/WebGL/Shader.ts":[43727,9,43727],"./NGL3dApp_07-1/WebGL/Transform":[59318,9,59318],"./NGL3dApp_07-1/WebGL/Transform.ts":[59318,9,59318],"./NGL3dApp_07-1/WebGL/VAO":[97989,9,97989],"./NGL3dApp_07-1/WebGL/VAO.ts":[97989,9,97989],"./NGL3dApp_07-1/index":[44163,9,28485,44163],"./NGL3dApp_07-1/index.ts":[44163,9,28485,44163],"./NGL3dApp_07/":[81041,9,81041],"./NGL3dApp_07/Core/Canvas":[1367,9,1367],"./NGL3dApp_07/Core/Canvas.ts":[1367,9,1367],"./NGL3dApp_07/Core/Loop":[2569,9,2569],"./NGL3dApp_07/Core/Loop.ts":[2569,9,2569],"./NGL3dApp_07/Core/Renderer":[3039,9,3039],"./NGL3dApp_07/Core/Renderer.ts":[3039,9,3039],"./NGL3dApp_07/Core/Scene":[99690,9,99690],"./NGL3dApp_07/Core/Scene.ts":[99690,9,99690],"./NGL3dApp_07/Geometry/Core/Base":[7460,9,7460],"./NGL3dApp_07/Geometry/Core/Base.ts":[7460,9,7460],"./NGL3dApp_07/Geometry/Primatives/GridAxis":[88824,9,88824],"./NGL3dApp_07/Geometry/Primatives/GridAxis.ts":[88824,9,88824],"./NGL3dApp_07/Geometry/Primatives/PointScreen":[33461,9,33461],"./NGL3dApp_07/Geometry/Primatives/PointScreen.ts":[33461,9,33461],"./NGL3dApp_07/Geometry/Primatives/PointWorld":[31617,9,31617],"./NGL3dApp_07/Geometry/Primatives/PointWorld.ts":[31617,9,31617],"./NGL3dApp_07/Geometry/Primatives/Quad":[31964,9,31964],"./NGL3dApp_07/Geometry/Primatives/Quad.ts":[31964,9,31964],"./NGL3dApp_07/Utility/GLShaderCommon":[94448,9,94448],"./NGL3dApp_07/Utility/GLShaderCommon.ts":[94448,9,94448],"./NGL3dApp_07/Utility/Matrix4":[58244,9,58244],"./NGL3dApp_07/Utility/Matrix4.ts":[58244,9,58244],"./NGL3dApp_07/Utility/Vector3":[65595,9,65595],"./NGL3dApp_07/Utility/Vector3.ts":[65595,9,65595],"./NGL3dApp_07/WebGL/AttribLocations":[96906,9,96906],"./NGL3dApp_07/WebGL/AttribLocations.ts":[96906,9,96906],"./NGL3dApp_07/WebGL/Camera":[57078,9,57078],"./NGL3dApp_07/WebGL/Camera.ts":[57078,9,57078],"./NGL3dApp_07/WebGL/MeshCommon":[72033,9,72033],"./NGL3dApp_07/WebGL/MeshCommon.ts":[72033,9,72033],"./NGL3dApp_07/WebGL/Model":[61843,9,61843],"./NGL3dApp_07/WebGL/Model.ts":[61843,9,61843],"./NGL3dApp_07/WebGL/Shader":[49576,9,49576],"./NGL3dApp_07/WebGL/Shader.ts":[49576,9,49576],"./NGL3dApp_07/WebGL/Transform":[35109,9,35109],"./NGL3dApp_07/WebGL/Transform.ts":[35109,9,35109],"./NGL3dApp_07/WebGL/VAO":[97423,9,97423],"./NGL3dApp_07/WebGL/VAO.ts":[97423,9,97423],"./NGL3dApp_07/index":[81041,9,81041],"./NGL3dApp_07/index.ts":[81041,9,81041],"./NGL3dApp_08":[12407,9,12407],"./NGL3dApp_08/":[12407,9,12407],"./NGL3dApp_08/Asset/UV_Grid_Lrg.jpg":[28462,1,28462],"./NGL3dApp_08/Core/Canvas":[45326,9,45326],"./NGL3dApp_08/Core/Canvas.ts":[45326,9,45326],"./NGL3dApp_08/Core/Loop":[50407,9,50407],"./NGL3dApp_08/Core/Loop.ts":[50407,9,50407],"./NGL3dApp_08/Core/Renderer":[77273,9,77273],"./NGL3dApp_08/Core/Renderer.ts":[77273,9,77273],"./NGL3dApp_08/Core/Scene":[98670,9,98670],"./NGL3dApp_08/Core/Scene.ts":[98670,9,98670],"./NGL3dApp_08/Core/Texture":[95402,9,95402],"./NGL3dApp_08/Core/Texture.ts":[95402,9,95402],"./NGL3dApp_08/Geometry/Core/Base":[60508,9,60508],"./NGL3dApp_08/Geometry/Core/Base.ts":[60508,9,60508],"./NGL3dApp_08/Geometry/CustomGeometry/Rect":[70578,9,70578],"./NGL3dApp_08/Geometry/CustomGeometry/Rect.ts":[70578,9,70578],"./NGL3dApp_08/Geometry/CustomGeometry/RectScreen":[32587,9,32587],"./NGL3dApp_08/Geometry/CustomGeometry/RectScreen.ts":[32587,9,32587],"./NGL3dApp_08/Geometry/Primatives/GridAxis":[41260,9,41260],"./NGL3dApp_08/Geometry/Primatives/GridAxis.ts":[41260,9,41260],"./NGL3dApp_08/Geometry/Primatives/MulitQuad":[81931,9,81931],"./NGL3dApp_08/Geometry/Primatives/MulitQuad.ts":[81931,9,81931],"./NGL3dApp_08/Geometry/Primatives/PointScreen":[54855,9,54855],"./NGL3dApp_08/Geometry/Primatives/PointScreen.ts":[54855,9,54855],"./NGL3dApp_08/Geometry/Primatives/PointWorld":[85122,9,85122],"./NGL3dApp_08/Geometry/Primatives/PointWorld.ts":[85122,9,85122],"./NGL3dApp_08/Geometry/Primatives/Quad":[772,9,772],"./NGL3dApp_08/Geometry/Primatives/Quad.ts":[772,9,772],"./NGL3dApp_08/Utility/GLShaderCommon":[72004,9,72004],"./NGL3dApp_08/Utility/GLShaderCommon.ts":[72004,9,72004],"./NGL3dApp_08/Utility/Matrix4":[7894,9,7894],"./NGL3dApp_08/Utility/Matrix4.ts":[7894,9,7894],"./NGL3dApp_08/Utility/Vector3":[37854,9,37854],"./NGL3dApp_08/Utility/Vector3.ts":[37854,9,37854],"./NGL3dApp_08/WebGL/Camera":[31122,9,31122],"./NGL3dApp_08/WebGL/Camera.ts":[31122,9,31122],"./NGL3dApp_08/WebGL/MeshCommon":[3538,9,3538],"./NGL3dApp_08/WebGL/MeshCommon.ts":[3538,9,3538],"./NGL3dApp_08/WebGL/Model":[85165,9,85165],"./NGL3dApp_08/WebGL/Model.ts":[85165,9,85165],"./NGL3dApp_08/WebGL/Shader":[57061,9,57061],"./NGL3dApp_08/WebGL/Shader.ts":[57061,9,57061],"./NGL3dApp_08/WebGL/Transform":[23365,9,23365],"./NGL3dApp_08/WebGL/Transform.ts":[23365,9,23365],"./NGL3dApp_08/WebGL/VAO":[42556,9,42556],"./NGL3dApp_08/WebGL/VAO.ts":[42556,9,42556],"./NGL3dApp_08/index":[12407,9,12407],"./NGL3dApp_08/index.ts":[12407,9,12407],"./NGL3dApp_09":[14489,9,21717,14489],"./NGL3dApp_09/":[14489,9,21717,14489],"./NGL3dApp_09/Asset/UV_Grid_Lrg.jpg":[58602,1,58602],"./NGL3dApp_09/Core/Canvas":[21543,9,21543],"./NGL3dApp_09/Core/Canvas.ts":[21543,9,21543],"./NGL3dApp_09/Core/Loop":[46972,9,46972],"./NGL3dApp_09/Core/Loop.ts":[46972,9,46972],"./NGL3dApp_09/Core/Renderer":[48575,9,48575],"./NGL3dApp_09/Core/Renderer.ts":[48575,9,48575],"./NGL3dApp_09/Core/Scene":[80222,9,80222],"./NGL3dApp_09/Core/Scene.ts":[80222,9,80222],"./NGL3dApp_09/Core/Texture":[31683,9,31683],"./NGL3dApp_09/Core/Texture.ts":[31683,9,31683],"./NGL3dApp_09/Mesh/Geometry":[20542,9,20542],"./NGL3dApp_09/Mesh/Geometry/":[20542,9,20542],"./NGL3dApp_09/Mesh/Geometry/index":[20542,9,20542],"./NGL3dApp_09/Mesh/Geometry/index.ts":[20542,9,20542],"./NGL3dApp_09/Mesh/Meshes/Core/Base":[51914,9,51914],"./NGL3dApp_09/Mesh/Meshes/Core/Base.ts":[51914,9,51914],"./NGL3dApp_09/Mesh/Meshes/CustomGeometry/Rect":[70193,9,70193],"./NGL3dApp_09/Mesh/Meshes/CustomGeometry/Rect.ts":[70193,9,70193],"./NGL3dApp_09/Mesh/Meshes/CustomGeometry/RectScreen":[6096,9,6096],"./NGL3dApp_09/Mesh/Meshes/CustomGeometry/RectScreen.ts":[6096,9,6096],"./NGL3dApp_09/Mesh/Meshes/Primatives/Cube":[21717,9,21717],"./NGL3dApp_09/Mesh/Meshes/Primatives/Cube.ts":[21717,9,21717],"./NGL3dApp_09/Mesh/Meshes/Primatives/GridAxis":[49394,9,49394],"./NGL3dApp_09/Mesh/Meshes/Primatives/GridAxis.ts":[49394,9,49394],"./NGL3dApp_09/Mesh/Meshes/Primatives/MulitQuad":[25990,9,25990],"./NGL3dApp_09/Mesh/Meshes/Primatives/MulitQuad.ts":[25990,9,25990],"./NGL3dApp_09/Mesh/Meshes/Primatives/PointScreen":[72322,9,72322],"./NGL3dApp_09/Mesh/Meshes/Primatives/PointScreen.ts":[72322,9,72322],"./NGL3dApp_09/Mesh/Meshes/Primatives/PointWorld":[81237,9,81237],"./NGL3dApp_09/Mesh/Meshes/Primatives/PointWorld.ts":[81237,9,81237],"./NGL3dApp_09/Mesh/Meshes/Primatives/Quad":[8524,9,8524],"./NGL3dApp_09/Mesh/Meshes/Primatives/Quad.ts":[8524,9,8524],"./NGL3dApp_09/Utility/Color":[98216,9,98216],"./NGL3dApp_09/Utility/Color.ts":[98216,9,98216],"./NGL3dApp_09/Utility/GLShaderCommon":[62087,9,62087],"./NGL3dApp_09/Utility/GLShaderCommon.ts":[62087,9,62087],"./NGL3dApp_09/Utility/Matrix4":[74061,9,74061],"./NGL3dApp_09/Utility/Matrix4.ts":[74061,9,74061],"./NGL3dApp_09/Utility/Vector3":[36328,9,36328],"./NGL3dApp_09/Utility/Vector3.ts":[36328,9,36328],"./NGL3dApp_09/WebGL/Camera":[18457,9,18457],"./NGL3dApp_09/WebGL/Camera.ts":[18457,9,18457],"./NGL3dApp_09/WebGL/MeshCommon":[38123,9,38123],"./NGL3dApp_09/WebGL/MeshCommon.ts":[38123,9,38123],"./NGL3dApp_09/WebGL/Model":[87634,9,87634],"./NGL3dApp_09/WebGL/Model.ts":[87634,9,87634],"./NGL3dApp_09/WebGL/Shader":[49359,9,49359],"./NGL3dApp_09/WebGL/Shader.ts":[49359,9,49359],"./NGL3dApp_09/WebGL/Transform":[85363,9,85363],"./NGL3dApp_09/WebGL/Transform.ts":[85363,9,85363],"./NGL3dApp_09/WebGL/VAO":[44518,9,44518],"./NGL3dApp_09/WebGL/VAO.ts":[44518,9,44518],"./NGL3dApp_09/index":[14489,9,21717,14489],"./NGL3dApp_09/index.ts":[14489,9,21717,14489],"./index":[25125,9],"./index.ts":[25125,9]};function d(e){if(!p.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],d=t[0];return Promise.all(t.slice(2).map(p.e)).then((()=>p.t(d,16|t[1])))}d.keys=()=>Object.keys(r),d.id=29786,e.exports=d}}]);
//# sourceMappingURL=51591.3f812a03.chunk.js.map