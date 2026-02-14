class h{constructor(e){this.app=e,this.canvas=document.createElement("canvas"),this.app.divHost&&(this.app.divHost.appendChild(this.canvas),this.canvas.width=this.app.divHost.clientWidth,this.canvas.height=this.app.divHost.clientHeight);const t=this.canvas.getContext("webgl");t&&(this.gl=t),this.loop(this.gl)}loop(e){this.clear(e)}clear(e){e.clearColor(.5,1,1,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}}class a{static getShader(e,t,o){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,o),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log("An error occurred compiling the shaders:"+e.getShaderInfoLog(r)),e.deleteShader(r),null))}static createProgram(e,t,o,r=!0){const i=e.createProgram();if(i===null)return null;if(e.attachShader(i,t),e.attachShader(i,o),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const c=e.getProgramInfoLog(i);return console.log("Failed to link program: "+c),e.deleteProgram(i),e.deleteShader(o),e.deleteShader(t),null}return r&&(e.validateProgram(i),!e.getProgramParameter(i,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(i)),e.deleteProgram(i),e.deleteShader(o),e.deleteShader(t),null):(e.deleteShader(o),e.deleteShader(t),i)}static createShader(e,t,o){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,o),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null))}static createShaderFromPath(e,t,o){const r=e.createShader(t);return r===null?null:(e.shaderSource(r,a.getSourceSynch(o)),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.log(e.getShaderInfoLog(r)),e.deleteShader(r),null))}static getSourceSynch(e){const t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.status===200?t.responseText:null}static loadImage(e,t){const o=new Image;o.onload=function(){t(null,o)},o.src=e}}class d{constructor(e){this.v=`
        attribute vec3 a_position;
        uniform float uPointSize;

        varying vec4 v_color;

        void main(void) {
            gl_PointSize = uPointSize;
            gl_Position = vec4(a_position, 1.0);
            v_color = gl_Position;
        }
    `,this.f=`
        precision mediump float;

        varying vec4 v_color;

        void main(void) {
            // finalColor = vec4(0.0, 0.0, 0.0, 1.0);
            // gl_FragColor = finalColor;
            gl_FragColor = v_color + 0.5;
        }
    `,this.gl=e,this.initShader(e)}initShader(e){let t=a.createShader(e,e.VERTEX_SHADER,this.v),o=a.createShader(e,e.FRAGMENT_SHADER,this.f);if(t&&o){this.vShader=t,this.fShader=o;let r=a.createProgram(e,this.vShader,this.fShader,!0);r&&(this.program=r,e.useProgram(this.program),this.aPositionLoc=e.getAttribLocation(this.program,"a_position"),this.uPointSizeLoc=e.getUniformLocation(this.program,"uPointSize"),e.useProgram(null),this.initGeo(e))}else console.error("vertex fragment shader error")}initGeo(e){let t=new Float32Array([0,.5,0,.5,-.5,0,-.5,-.5,0]),o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.useProgram(this.program),e.uniform1f(this.uPointSizeLoc,50),e.bindBuffer(e.ARRAY_BUFFER,o),e.enableVertexAttribArray(this.aPositionLoc),e.vertexAttribPointer(this.aPositionLoc,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,null),this.gl.drawArrays(e.TRIANGLES,0,3)}Dummy(){}}class s{static Init(e){new s(e)}constructor(e){const t=document.getElementById(e);t&&(this.divHost=t),this.coreWebgl=new h(this),new d(this.coreWebgl.gl).Dummy()}}class u{constructor(e){this.divHost=document.getElementById(e),s.Init(e)}destroy(){if(this.divHost)try{for(;this.divHost.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}catch(e){console.error("Error in destroy method:",e)}else console.warn("divHost is undefined in destroy method")}}export{u as Solution,s as WebGL1};
//# sourceMappingURL=index-x0OfvhBD.js.map
