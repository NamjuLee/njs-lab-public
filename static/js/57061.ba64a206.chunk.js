"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[57061],{57061:(t,e,r)=>{let i;r.r(e),r.d(e,{ATTR:()=>i,AttribLocations:()=>a,Shader:()=>s,ShaderUtility:()=>n,UniformLocations:()=>o}),function(t){t.ATTR_POSITION_NAME="a_position",t[t.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",t.ATTR_NORMAL_NAME="a_norm",t[t.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",t.ATTR_UV_NAME="a_uv",t[t.ATTR_UV_LOC=2]="ATTR_UV_LOC",t.ATTR_COLOR_NAME="a_color",t[t.ATTR_COLOR_LOC=4]="ATTR_COLOR_LOC"}(i||(i={}));class a{constructor(t,e){this.position=void 0,this.norm=void 0,this.uv=void 0,this.position=t.getAttribLocation(e,i.ATTR_POSITION_NAME),this.norm=t.getAttribLocation(e,i.ATTR_NORMAL_NAME),this.uv=t.getAttribLocation(e,i.ATTR_UV_NAME)}}class o{constructor(t,e){this.perspective=void 0,this.modelMatrix=void 0,this.cameraMatrix=void 0,this.mainTexture=void 0,this.perspective=t.getUniformLocation(e,"uPMatrix"),this.modelMatrix=t.getUniformLocation(e,"uMVMatrix"),this.cameraMatrix=t.getUniformLocation(e,"uCameraMatrix"),this.mainTexture=t.getUniformLocation(e,"uMainTex")}}class s{constructor(t,e,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(this.gl=void 0,this.program=void 0,this.attribLoc=void 0,this.uniformLoc=void 0,this.vShader=void 0,this.fShader=void 0,this.gl=t,this.vShader=n.CreateShader(t,t.VERTEX_SHADER,e),this.fShader=n.CreateShader(t,t.FRAGMENT_SHADER,r),this.vShader&&this.fShader){let e=n.CreateProgram(t,this.vShader,this.fShader,i);return e?(this.program=e,t.useProgram(this.program),this.attribLoc=new a(t,this.program),void(this.uniformLoc=new o(t,this.program))):void console.error("vertex fragment shader error")}console.error("vertex fragment shader error")}activate(){return this.gl.useProgram(this.program),this}deactivate(){return this.gl.useProgram(null),this}dispose(){this.gl.getParameter(this.gl.CURRENT_PROGRAM)===this.program&&this.gl.useProgram(null),this.gl.deleteProgram(this.program)}setPerspective(t){return this.gl.uniformMatrix4fv(this.uniformLoc.perspective,!1,t),this}setModelMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.modelMatrix,!1,t),this}setCameraMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.cameraMatrix,!1,t),this}preRender(){}renderModel(t){return this.setModelMatrix(t.transform.getViewMatrix()),this.gl.bindVertexArray(t.vao.vao),t.vao.noCulling&&this.gl.disable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.enable(this.gl.BLEND),t.vao.indexCount?this.gl.drawElements(t.vao.drawMode,t.vao.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(t.vao.drawMode,0,t.vao.vertexCount),this.gl.bindVertexArray(null),t.vao.noCulling&&this.gl.enable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.disable(this.gl.BLEND),this}}class n{static CreateProgram(t,e,r){let a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const o=t.createProgram();if(null===o)return null;if(t.attachShader(o,e),t.attachShader(o,r),t.bindAttribLocation(o,i.ATTR_POSITION_LOC,i.ATTR_POSITION_NAME),t.bindAttribLocation(o,i.ATTR_NORMAL_LOC,i.ATTR_NORMAL_NAME),t.bindAttribLocation(o,i.ATTR_UV_LOC,i.ATTR_UV_NAME),t.linkProgram(o),!t.getProgramParameter(o,t.LINK_STATUS)){const i=t.getProgramInfoLog(o);return console.log("Failed to link program: "+i),t.deleteProgram(o),t.deleteShader(r),t.deleteShader(e),null}return a&&(t.validateProgram(o),!t.getProgramParameter(o,t.VALIDATE_STATUS))?(console.error("Failed to validate program",t.getProgramInfoLog(o)),t.deleteProgram(o),t.deleteShader(r),t.deleteShader(e),null):(t.deleteShader(r),t.deleteShader(e),o)}static CreateShader(t,e,r){const i=t.createShader(e);if(null===i)return null;t.shaderSource(i,r),t.compileShader(i);return t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.log(t.getShaderInfoLog(i)),t.deleteShader(i),null)}static LoadTexture(t,e,r){let i=t.createTexture();return!0===r&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_NEAREST),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null),!0===r&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),i}}}}]);
//# sourceMappingURL=57061.ba64a206.chunk.js.map