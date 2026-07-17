class u{constructor(e){this.app=e,this.canvas=document.createElement("canvas"),this.app.host&&(this.app.host.appendChild(this.canvas),this.canvas.width=this.app.host.clientWidth,this.canvas.height=this.app.host.clientHeight);const t=this.canvas.getContext("webgl2");t!==null&&(this.gl=t),this.loop(this.gl)}loop(e){requestAnimationFrame(()=>{this.loop(e)}),this.app.renderer.render(e)}clear(e){e.clearColor(.5,1,1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}}class d{constructor(e){this.app=e}render(e){this.app.scene.triList.forEach(t=>{t.render(e)})}}class l{constructor(e){this.triList=[],this.NGL3dApp=e}}var h=(o=>(o.ATTR_POSITION_NAME="a_position",o[o.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",o.ATTR_NORMAL_NAME="a_norm",o[o.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",o.ATTR_UV_NAME="a_uv",o[o.ATTR_UV_LOC=2]="ATTR_UV_LOC",o))(h||{});class f{constructor(e,t){this.position=e.getAttribLocation(t,"a_norm"),this.normal=e.getAttribLocation(t,"a_norm"),this.uv=e.getAttribLocation(t,"a_uv")}}class A{constructor(){}}class m{static createMeshVAO(e,t,i,r,s,a){let n=new A;return n.name=t,n.drawMode=e.TRIANGLES,n.vao=e.createVertexArray(),e.bindVertexArray(n.vao),i!==void 0&&i!=null&&(n.bufVertices=e.createBuffer(),n.vertexComponentLen=3,n.vertexCount=i.length/n.vertexComponentLen,e.bindBuffer(e.ARRAY_BUFFER,n.bufVertices),e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),e.enableVertexAttribArray(h.ATTR_POSITION_LOC),e.vertexAttribPointer(h.ATTR_POSITION_LOC,3,e.FLOAT,!1,0,0)),s!==void 0&&s!=null&&(n.bufNormals=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,n.bufNormals),e.bufferData(e.ARRAY_BUFFER,new Float32Array(s),e.STATIC_DRAW),e.enableVertexAttribArray(h.ATTR_NORMAL_LOC),e.vertexAttribPointer(h.ATTR_NORMAL_LOC,3,e.FLOAT,!1,0,0)),a!==void 0&&a!=null&&(n.bufUV=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,n.bufUV),e.bufferData(e.ARRAY_BUFFER,new Float32Array(a),e.STATIC_DRAW),e.enableVertexAttribArray(h.ATTR_UV_LOC),e.vertexAttribPointer(h.ATTR_UV_LOC,2,e.FLOAT,!1,0,0)),r!==void 0&&r!=null&&(n.bufIndex=e.createBuffer(),n.indexCount=r.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.bufIndex),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(r),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),n}constructor(){}}class _{constructor(e){this.mesh=e}preRender(){}}class c{static getShaderProgram(e,t,i,r=!0){let s=c.createShader(e,e.VERTEX_SHADER,t),a=c.createShader(e,e.FRAGMENT_SHADER,i);if(s&&a){let n=c.createProgram(e,s,a,r);return n||(console.error("vertex fragment shader error"),null)}else return console.error("vertex fragment shader error"),null}static getShader(e,t,i){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log("An error occurred compiling the shaders:"+e.getShaderInfoLog(r)),e.deleteShader(r),null))}static createProgram(e,t,i,r=!0){const s=e.createProgram();if(s===null)return null;if(e.attachShader(s,t),e.attachShader(s,i),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS)){const a=e.getProgramInfoLog(s);return console.log("Failed to link program: "+a),e.deleteProgram(s),e.deleteShader(i),e.deleteShader(t),null}return r&&(e.validateProgram(s),!e.getProgramParameter(s,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(s)),e.deleteProgram(s),e.deleteShader(i),e.deleteShader(t),null):(e.deleteShader(i),e.deleteShader(t),s)}static createShader(e,t,i){console.log(t);const r=e.createShader(t);return r===null?null:(e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null))}static createShaderFromPath(e,t,i){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,c.getSourceSynch(i)),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null))}static getSourceSynch(e){const t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.status===200?t.responseText:null}static loadImage(e,t){const i=new Image;i.onload=function(){t(null,i)},i.src=e}}class S{}class p{constructor(e,t,i){this.program=c.getShaderProgram(e,t,i,!0),this.program!=null&&(this.gl=e,e.useProgram(this.program),this.attribLoc=new f(e,this.program),this.uniformLoc=new S)}activate(){return this.gl.useProgram(this.program),this}deactivate(){return this.gl.useProgram(null),this}dispose(){this.gl.getParameter(this.gl.CURRENT_PROGRAM)===this.program&&this.gl.useProgram(null),this.gl.deleteProgram(this.program)}preRender(){}renderModal(e){return this.gl.bindVertexArray(e.mesh.vao),e.mesh.indexCount?this.gl.drawElements(e.mesh.drawMode,e.mesh.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(e.mesh.drawMode,0,e.mesh.vertexCount),this.gl.bindVertexArray(null),this}}class R extends p{constructor(e,t,i){super(e,t,i),this.program&&(this.uniformLoc.uPointSize=e.getUniformLocation(this.program,"uPointSize"),this.uniformLoc.uAngle=e.getUniformLocation(this.program,"uAngle")),e.useProgram(null)}set(e,t){return this.gl.uniform1f(this.uniformLoc.uPointSize,e),this.gl.uniform1f(this.uniformLoc.uAngle,t),this}}class T{constructor(e){this.vOld=`#version 300 es
        in vec3 a_position;

        uniform float uPointSize;

        void main(void) {
            gl_PointSize = uPointSize;
            gl_Position = vec4(a_position, 1.0);
        }
    `,this.fOld=`#version 300 es
        precision mediump float;

        out vec4 finalColor;

        void main(void) {
            finalColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `,this.v=`#version 300 es

        in vec3 a_position;

        uniform mediump float uPointSize;
        uniform float uAngle;

        void main(void) {
            gl_PointSize = uPointSize;
            gl_Position = vec4(cos(uAngle) * 0.8 + a_position.x, sin(uAngle) * 0.8 + a_position.y, a_position.z, 1.0);
        }
    `,this.f=`#version 300 es
        precision mediump float;

        uniform float uPointSize;

        out vec4 finalColor;

        void main(void) {
            float c = (40. - uPointSize ) / 20.;
            finalColor = vec4(c, c, c, 1.0);
        }
    `,this.size=2.5,this.rotation=0,this.app=e,this.gl=e.canvas.gl,this.initShader(this.gl)}initShader(e){this.shader=new R(e,this.v,this.f),this.mesh=m.createMeshVAO(e,"dots",[0,0,0,.1,.1,0,.1,-.1,0,-.1,-.1,0,-.1,.1,0]),this.mesh.drawMode=e.POINTS,this.modal=new _(this.mesh),this.app.scene.triList.push(this)}render(e){console.log(e),this.size+=.01;let t=Math.sin(this.size)*10+30;this.rotation+=.01,this.shader.activate(),this.shader.set(t,this.rotation),this.shader.renderModal(this.modal)}}class v{constructor(e){console.log("id: "+e+", NGL3dApp 03 Init!!!!!");const t=document.getElementById(e);t&&(this.host=t),this.scene=new l(this),this.renderer=new d(this),this.canvas=new u(this);const i=new T(this);console.log(i)}}export{v as NGL3dApp};
