class h{constructor(e){this.app=e,this.canvas=document.createElement("canvas"),this.app.divHost&&(this.app.divHost.appendChild(this.canvas),this.canvas.width=this.app.divHost.clientWidth,this.canvas.height=this.app.divHost.clientHeight);const t=this.canvas.getContext("webgl2");t&&(this.gl=t),this.loop(this.gl)}loop(e){requestAnimationFrame(()=>{this.loop(e)}),this.clear(e),this.Render(e)}Render(e){}clear(e){e.clearColor(1,1,1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}}class i{static getShader(e,t,o){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,o),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log("An error occurred compiling the shaders:"+e.getShaderInfoLog(r)),e.deleteShader(r),null))}static createProgram(e,t,o,r=!0){const s=e.createProgram();if(s===null)return null;if(e.attachShader(s,t),e.attachShader(s,o),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS)){const c=e.getProgramInfoLog(s);return console.log("Failed to link program: "+c),e.deleteProgram(s),e.deleteShader(o),e.deleteShader(t),null}return r&&(e.validateProgram(s),!e.getProgramParameter(s,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(s)),e.deleteProgram(s),e.deleteShader(o),e.deleteShader(t),null):(e.deleteShader(o),e.deleteShader(t),s)}static createShader(e,t,o){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,o),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null))}static createShaderFromPath(e,t,o){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,i.getSourceSynch(o)),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null))}static getSourceSynch(e){const t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.status===200?t.responseText:null}static loadImage(e,t){const o=new Image;o.onload=function(){t(null,o)},o.src=e}}class d{constructor(e){this.scene=e,this.scene.list.push(this)}Render(e){}}class u extends d{constructor(e,t){super(e),this.v=`#version 300 es
        in vec3 a_position;

        uniform vec2 uMouseLoc;

        out vec3 color;

        void main(void) {
            float d = distance(uMouseLoc, vec2(a_position.xy)) * 0.001;
            color = vec3(d, 0, 0);
            gl_Position = vec4(a_position, 1.0);
        }
    `,this.f=`#version 300 es
        precision mediump float;

        in vec3 color;
        out vec4 finalColor;

        void main(void) {
            finalColor = vec4(color, 1.0);
        }
    `,this.size=100,this.time=0,this.gl=t,this.initShader(t)}initShader(e){let t=i.createShader(e,e.VERTEX_SHADER,this.v),o=i.createShader(e,e.FRAGMENT_SHADER,this.f);if(t&&o){this.vShader=t,this.fShader=o;let r=i.createProgram(e,this.vShader,this.fShader,!0);r&&(this.program=r,e.useProgram(this.program),this.aPositionLoc=e.getAttribLocation(this.program,"a_position"),this.uMouseLoc=e.getUniformLocation(this.program,"uMouseLoc"),e.useProgram(null),this.initGeo(e))}else console.error("vertex fragment shader error")}initGeo(e){let t=new Float32Array([-.5,.5,0,.5,-.5,0,-.5,-.5,0,-.5,.5,0,.5,-.5,0,.5,.5,0]),o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.useProgram(this.program),e.uniform2f(this.uMouseLoc,10,10),e.bindBuffer(e.ARRAY_BUFFER,o),e.enableVertexAttribArray(this.aPositionLoc),e.vertexAttribPointer(this.aPositionLoc,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,null)}Render(e){e.uniform2f(this.uMouseLoc,this.scene.app.m[0],this.scene.app.m[1]),e.drawArrays(e.TRIANGLE_STRIP,0,3),this.time+=.1}}class l{constructor(e){this.list=[],this.app=e,this.app.coreWebg2.Render=this.Render.bind(this),this.Init()}Init(){new u(this,this.app.coreWebg2.gl)}Render(e){for(let t=0;t<this.list.length;++t)this.list[t].Render(e)}}class n{constructor(e){this.m=[];const t=document.getElementById(e);t&&(this.divHost=t,this.divHost.onmousemove=o=>{this.m[0]=o.x,this.m[1]=o.y}),this.coreWebg2=new h(this),this.scene=new l(this)}static Init(e){new n(e)}}class m{constructor(e){this.divHost=document.getElementById(e),n.Init(e)}destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(e){console.error("Error in destroy method:",e)}else console.warn("divHost is undefined in destroy method")}}export{m as Solution,n as WebGL2GLSL};
//# sourceMappingURL=index-BCx5h_sY.js.map
