"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[82773],{82773:(e,t,i)=>{i.r(t),i.d(t,{WebGL2:()=>h});class r{constructor(e){this.app=void 0,this.gl=void 0,this.canvas=void 0,this.app=e,this.canvas=document.createElement("canvas"),this.app.divHost&&(this.app.divHost.appendChild(this.canvas),this.canvas.width=this.app.divHost.clientWidth,this.canvas.height=this.app.divHost.clientHeight);const t=this.canvas.getContext("webgl2");t&&(this.gl=t),this.loop(this.gl)}loop(e){requestAnimationFrame((()=>{this.loop(e)})),this.clear(e),this.Render(e)}Render(e){}clear(e){e.clearColor(1,1,1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}}class o{static getShader(e,t,i){const r=e.createShader(t);return null===r?null:(e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log("An error occurred compiling the shaders:"+e.getShaderInfoLog(r)),e.deleteShader(r),null))}static createProgram(e,t,i){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const o=e.createProgram();if(null===o)return null;if(e.attachShader(o,t),e.attachShader(o,i),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){const r=e.getProgramInfoLog(o);return console.log("Failed to link program: "+r),e.deleteProgram(o),e.deleteShader(i),e.deleteShader(t),null}return r&&(e.validateProgram(o),!e.getProgramParameter(o,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(o)),e.deleteProgram(o),e.deleteShader(i),e.deleteShader(t),null):(e.deleteShader(i),e.deleteShader(t),o)}static createShader(e,t,i){const r=e.createShader(t);if(null===r)return null;e.shaderSource(r,i),e.compileShader(r);return e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null)}static createShaderFromPath(e,t,i){const r=e.createShader(t);if(null===r)return null;e.shaderSource(r,o.getSourceSynch(i)),e.compileShader(r);return e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null)}static getSourceSynch(e){const t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),200===t.status?t.responseText:null}static loadImage(e,t){const i=new Image;i.onload=function(){t(null,i)},i.src=e}}class s{constructor(e){this.scene=void 0,this.scene=e,this.scene.list.push(this)}Render(e){}}class a extends s{constructor(e,t){super(e),this.v="#version 300 es\n        in vec3 a_position;\n\n        uniform float uPointSize;\n\n        void main(void) {\n            gl_PointSize = uPointSize;\n            gl_Position = vec4(a_position, 1.0);\n        }\n    ",this.f="#version 300 es\n        precision mediump float;\n\n        out vec4 finalColor;\n\n        void main(void) {\n            finalColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    ",this.gl=void 0,this.vShader=void 0,this.fShader=void 0,this.program=void 0,this.aPositionLoc=void 0,this.uPointSizeLoc=void 0,this.size=100,this.time=0,this.gl=t,this.initShader(t)}initShader(e){let t=o.createShader(e,e.VERTEX_SHADER,this.v),i=o.createShader(e,e.FRAGMENT_SHADER,this.f);if(t&&i){this.vShader=t,this.fShader=i;let r=o.createProgram(e,this.vShader,this.fShader,!0);r&&(this.program=r,e.useProgram(this.program),this.aPositionLoc=e.getAttribLocation(this.program,"a_position"),this.uPointSizeLoc=e.getUniformLocation(this.program,"uPointSize"),e.useProgram(null),this.initGeo(e))}else console.error("vertex fragment shader error")}initGeo(e){let t=new Float32Array([0,.5,0,.5,-.5,0,-.5,-.5,0]),i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.useProgram(this.program),e.uniform1f(this.uPointSizeLoc,50),e.bindBuffer(e.ARRAY_BUFFER,i),e.enableVertexAttribArray(this.aPositionLoc),e.vertexAttribPointer(this.aPositionLoc,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,null)}Render(e){e.uniform1f(this.uPointSizeLoc,15+this.size*(Math.cos(this.time)+1)),e.drawArrays(e.POINTS,0,3),this.time+=.1}Dummy(){}}class n{constructor(e){this.app=void 0,this.list=[],this.app=e,this.app.coreWebg2.Render=this.Render.bind(this),this.Init()}Init(){new a(this,this.app.coreWebg2.gl).Dummy()}Render(e){for(let t=0;t<this.list.length;++t)this.list[t].Render(e)}}class h{static Init(e){new h(e)}constructor(e){this.divHost=void 0,this.coreWebg2=void 0,this.scene=void 0;const t=document.getElementById(e);t&&(this.divHost=t),this.coreWebg2=new r(this),this.scene=new n(this)}}}}]);
//# sourceMappingURL=82773.3fdf59af.chunk.js.map