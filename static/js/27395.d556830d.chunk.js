"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[27395,77773,2132,64113],{27395:(e,r,t)=>{t.r(r),t.d(r,{PointShader:()=>a});var o=t(64113);class a extends o.Shader{constructor(e,r,t){super(e,r,t),this.program&&(this.uniformLoc.uPointSize=e.getUniformLocation(this.program,"uPointSize"),this.uniformLoc.uAngle=e.getUniformLocation(this.program,"uAngle")),e.useProgram(null)}set(e,r){return this.gl.uniform1f(this.uniformLoc.uPointSize,e),this.gl.uniform1f(this.uniformLoc.uAngle,r),this}}},77773:(e,r,t)=>{t.r(r),t.d(r,{GLShaderCommon:()=>o});class o{static getShaderProgram(e,r,t){let a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=o.createShader(e,e.VERTEX_SHADER,r),i=o.createShader(e,e.FRAGMENT_SHADER,t);if(n&&i){let r=o.createProgram(e,n,i,a);return r||(console.error("vertex fragment shader error"),null)}return console.error("vertex fragment shader error"),null}static getShader(e,r,t){const o=e.createShader(r);return null===o?null:(e.shaderSource(o,t),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?o:(console.log("An error occurred compiling the shaders:"+e.getShaderInfoLog(o)),e.deleteShader(o),null))}static createProgram(e,r,t){let o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const a=e.createProgram();if(null===a)return null;if(e.attachShader(a,r),e.attachShader(a,t),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){const o=e.getProgramInfoLog(a);return console.log("Failed to link program: "+o),e.deleteProgram(a),e.deleteShader(t),e.deleteShader(r),null}return o&&(e.validateProgram(a),!e.getProgramParameter(a,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(a)),e.deleteProgram(a),e.deleteShader(t),e.deleteShader(r),null):(e.deleteShader(t),e.deleteShader(r),a)}static createShader(e,r,t){console.log(r);const o=e.createShader(r);if(null===o)return null;e.shaderSource(o,t),e.compileShader(o);return e.getShaderParameter(o,e.COMPILE_STATUS)?o:(console.log(e.getShaderInfoLog(o)),e.deleteShader(o),null)}static createShaderFromPath(e,r,t){const a=e.createShader(r);if(null===a)return null;e.shaderSource(a,o.getSourceSynch(t)),e.compileShader(a);return e.getShaderParameter(a,e.COMPILE_STATUS)?a:(console.log(e.getShaderInfoLog(a)),e.deleteShader(a),null)}static getSourceSynch(e){const r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),200===r.status?r.responseText:null}static loadImage(e,r){const t=new Image;t.onload=function(){r(null,t)},t.src=e}}},64269:(e,r,t)=>{let o;t.r(r),t.d(r,{ATTR:()=>o,AttribLocations:()=>a}),function(e){e.ATTR_POSITION_NAME="a_position",e[e.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",e.ATTR_NORMAL_NAME="a_norm",e[e.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",e.ATTR_UV_NAME="a_uv",e[e.ATTR_UV_LOC=2]="ATTR_UV_LOC"}(o||(o={}));class a{constructor(e,r){this.position=void 0,this.normal=void 0,this.uv=void 0,this.position=e.getAttribLocation(r,o.ATTR_NORMAL_NAME),this.normal=e.getAttribLocation(r,o.ATTR_NORMAL_NAME),this.uv=e.getAttribLocation(r,o.ATTR_UV_NAME)}}},64113:(e,r,t)=>{t.r(r),t.d(r,{Shader:()=>i,UniformLoc:()=>n});var o=t(77773),a=t(64269);class n{constructor(){this.uPointSize=void 0,this.uAngle=void 0}}class i{constructor(e,r,t){this.gl=void 0,this.program=void 0,this.attribLoc=void 0,this.uniformLoc=void 0,this.program=o.GLShaderCommon.getShaderProgram(e,r,t,!0),null!=this.program&&(this.gl=e,e.useProgram(this.program),this.attribLoc=new a.AttribLocations(e,this.program),this.uniformLoc=new n)}activate(){return this.gl.useProgram(this.program),this}deactivate(){return this.gl.useProgram(null),this}dispose(){this.gl.getParameter(this.gl.CURRENT_PROGRAM)===this.program&&this.gl.useProgram(null),this.gl.deleteProgram(this.program)}preRender(){}renderModal(e){return this.gl.bindVertexArray(e.mesh.vao),e.mesh.indexCount?this.gl.drawElements(e.mesh.drawMode,e.mesh.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(e.mesh.drawMode,0,e.mesh.vertexCount),this.gl.bindVertexArray(null),this}}}}]);
//# sourceMappingURL=27395.d556830d.chunk.js.map