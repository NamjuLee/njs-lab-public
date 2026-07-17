class c{constructor(e){this.app=e,this.canvas=document.createElement("canvas"),this.app.host&&(this.app.host.appendChild(this.canvas),this.canvas.width=this.app.host.clientWidth,this.canvas.height=this.app.host.clientHeight);const t=this.canvas.getContext("webgl2");t!==null&&(this.gl=t),this.loop(this.gl)}loop(e){requestAnimationFrame(()=>{this.loop(e)}),this.app.renderer.render(e)}clear(e){e.clearColor(.5,1,1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}}class u{constructor(e){this.app=e}render(e){this.app.scene.triList.forEach(t=>{t.render(e)})}}class d{constructor(e){this.triList=[],this.NGL3dApp=e}}class s{static getShaderProgram(e,t,o,r=!0){let i=s.createShader(e,e.VERTEX_SHADER,t),n=s.createShader(e,e.FRAGMENT_SHADER,o);if(i&&n){let h=s.createProgram(e,i,n,r);return h||(console.error("vertex fragment shader error"),null)}else return console.error("vertex fragment shader error"),null}static getShader(e,t,o){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,o),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log("An error occurred compiling the shaders:"+e.getShaderInfoLog(r)),e.deleteShader(r),null))}static createProgram(e,t,o,r=!0){const i=e.createProgram();if(i===null)return null;if(e.attachShader(i,t),e.attachShader(i,o),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const n=e.getProgramInfoLog(i);return console.log("Failed to link program: "+n),e.deleteProgram(i),e.deleteShader(o),e.deleteShader(t),null}return r&&(e.validateProgram(i),!e.getProgramParameter(i,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(i)),e.deleteProgram(i),e.deleteShader(o),e.deleteShader(t),null):(e.deleteShader(o),e.deleteShader(t),i)}static createShader(e,t,o){console.log(t);const r=e.createShader(t);return r===null?null:(e.shaderSource(r,o),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null))}static createShaderFromPath(e,t,o){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,s.getSourceSynch(o)),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null))}static getSourceSynch(e){const t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.status===200?t.responseText:null}static loadImage(e,t){const o=new Image;o.onload=function(){t(null,o)},o.src=e}}class l{constructor(e){this.vOld=`#version 300 es
        in vec3 a_position;

        uniform float uPointSize;

        void main(void) {
            gl_PointSize = uPointSize;
            gl_Position = vec4(a_position, 1.0);
        }
    `,this.v=`#version 300 es

        in vec3 a_position;

        uniform float uPointSize;
        uniform float uAngle;

        void main(void) {
            gl_PointSize = uPointSize;
            gl_Position = vec4(cos(uAngle) * 0.8 + a_position.x, sin(uAngle) * 0.8 + a_position.y, a_position.z, 1.0);
        }
    `,this.f=`#version 300 es
        precision mediump float;

        out vec4 finalColor;

        void main(void) {
            finalColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `,this.size=2.5,this.app=e,this.gl=e.canvas.gl,this.initShader(this.gl)}initShader(e){this.program=s.getShaderProgram(e,this.v,this.f),this.program&&(e.useProgram(this.program),this.aPositionLoc=e.getAttribLocation(this.program,"a_position"),this.uPointSizeLoc=e.getUniformLocation(this.program,"uPointSize"),this.uAngle=e.getUniformLocation(this.program,"uAngle"),e.useProgram(null),this.initBuffer(e))}initBuffer(e){let t=new Float32Array([0,0,0]);this.bufVerts=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.bufVerts),e.bufferData(e.ARRAY_BUFFER,t,e.DYNAMIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),this.gVertCnt=t.length/3,e.useProgram(this.program),e.bindBuffer(e.ARRAY_BUFFER,this.bufVerts),e.enableVertexAttribArray(this.aPositionLoc),e.vertexAttribPointer(this.aPositionLoc,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,null),this.app.scene.triList.push(this)}render(e){this.size+=.01;let t=Math.sin(this.size)*10+30;e.uniform1f(this.uPointSizeLoc,t),e.uniform1f(this.uAngle,this.size),e.drawArrays(e.POINTS,0,this.gVertCnt)}}class f{constructor(e){console.log("id: "+e+", NGL3dApp 02 Init!!!!!");const t=document.getElementById(e);t&&(this.host=t),this.scene=new d(this),this.renderer=new u(this),this.canvas=new c(this),new l(this)}}export{f as NGL3dApp};
