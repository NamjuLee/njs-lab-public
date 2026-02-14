class c{constructor(e){this.app=e,this.canvas=document.createElement("canvas"),this.app.divHost&&(this.app.divHost.appendChild(this.canvas),this.canvas.width=this.app.divHost.clientWidth,this.canvas.height=this.app.divHost.clientHeight);const t=this.canvas.getContext("webgl2");t&&(this.gl=t),this.loop(this.gl)}loop(e){requestAnimationFrame(()=>{this.loop(e)}),this.clear(e),this.Render(e)}Render(e){}clear(e){e.clearColor(1,1,1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}}class s{static getShader(e,t,i){const r=e.createShader(t);if(r!==null)return e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log("An error occurred compiling the shaders:"+e.getShaderInfoLog(r)),e.deleteShader(r),null)}static createProgram(e,t,i,r=!0){const o=e.createProgram();if(o===null)return null;if(e.attachShader(o,t),e.attachShader(o,i),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){const h=e.getProgramInfoLog(o);return console.log("Failed to link program: "+h),e.deleteProgram(o),e.deleteShader(i),e.deleteShader(t),null}return r&&(e.validateProgram(o),!e.getProgramParameter(o,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(o)),e.deleteProgram(o),e.deleteShader(i),e.deleteShader(t),null):(e.deleteShader(i),e.deleteShader(t),o)}static createShader(e,t,i){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null))}static createShaderFromPath(e,t,i){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,s.getSourceSynch(i)),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null))}static getSourceSynch(e){const t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.status===200?t.responseText:null}static loadImage(e,t){const i=new Image;i.onload=function(){t(null,i)},i.src=e}}class d{constructor(e){this.scene=e,this.scene.list.push(this)}Render(e){}}class u extends d{constructor(e,t){super(e),this.v=`#version 300 es

        in vec3 a_position;
        uniform vec2 uMouseLoc;
        uniform float uTime;

        out vec2 mou;
        out float t;

        void main(void) {

            gl_Position = vec4(a_position, 1.0);

            mou = uMouseLoc;
            t = uTime;
        }
    `,this.f=`#version 300 es
        precision mediump float;

        in vec2 mou;
        in float t;
        out vec4 finalColor;

        void main(void) {
            float r = 1.0;
            float g = sign(1.0 * t);
            float b = 1.0;
            finalColor = vec4(r, g, b, 1.0);
        }
    `,this.size=100,this.time=0,this.gl=t,this.initShader(t)}initShader(e){let t=s.createShader(e,e.VERTEX_SHADER,this.v),i=s.createShader(e,e.FRAGMENT_SHADER,this.f);if(t&&i){this.vShader=t,this.fShader=i;let r=s.createProgram(e,this.vShader,this.fShader,!0);r&&(this.program=r,e.useProgram(this.program),this.aPositionLoc=e.getAttribLocation(this.program,"a_position"),this.uMouseLoc=e.getUniformLocation(this.program,"uMouseLoc"),this.uTime=e.getUniformLocation(this.program,"uTime"),e.useProgram(null),this.initGeo(e))}else console.error("vertex fragment shader error")}initGeo(e){let t=new Float32Array([-1,1,0,1,-1,0,-1,-1,0,-1,1,0,1,1,0,1,-1,0]),i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.useProgram(this.program),e.uniform2f(this.uMouseLoc,10,10),e.uniform1f(this.uTime,0),e.bindBuffer(e.ARRAY_BUFFER,i),e.enableVertexAttribArray(this.aPositionLoc),e.vertexAttribPointer(this.aPositionLoc,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,null)}Render(e){let t=this.scene.app.m[0]/e.canvas.width*2-1,i=(1-this.scene.app.m[1]/e.canvas.height)*2-1;e.uniform2f(this.uMouseLoc,t,i),e.uniform1f(this.uTime,this.time),e.drawArrays(e.TRIANGLE_STRIP,0,6),this.time+=.01}Dummy(){}}class m{constructor(e){this.list=[],this.app=e,this.app.coreWebg2.Render=this.Render.bind(this),this.Init()}Init(){new u(this,this.app.coreWebg2.gl).Dummy()}Render(e){for(let t=0;t<this.list.length;++t)this.list[t].Render(e)}}class n{constructor(e){this.m=[];const t=document.getElementById(e);t&&(this.divHost=t,this.divHost.onmousemove=i=>{this.m[0]=i.x,this.m[1]=i.y}),this.coreWebg2=new c(this),this.scene=new m(this)}static Init(e){new n(e)}}class f{constructor(e){this.divHost=document.getElementById(e),n.Init(e)}destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(e){console.error("Error in destroy method:",e)}else console.warn("divHost is undefined in destroy method")}}export{n as Demo12WebGLGLSLPlayground,f as Solution};
//# sourceMappingURL=index-DS9aY7UZ.js.map
