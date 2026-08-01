import"./index-CFD18EaN.js";class i{static GetShader(e,t,a){let r=e.createShader(t);return e.shaderSource(r,a),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)}static CreateProgram(e,t,a,r=!0){const o=e.createProgram();return e.attachShader(o,t),e.attachShader(o,a),e.linkProgram(o),e.getProgramParameter(o,e.LINK_STATUS)?r&&(e.validateProgram(o),!e.getProgramParameter(o,e.VALIDATE_STATUS))?(console.error("Failed to validate program",e.getProgramInfoLog(o)),e.deleteProgram(o),e.deleteShader(a),e.deleteShader(t),null):(e.deleteShader(a),e.deleteShader(t),o):(e.getProgramInfoLog(o),e.deleteProgram(o),e.deleteShader(a),e.deleteShader(t),null)}static CreateShader(e,t,a){let r=e.createShader(t);return e.shaderSource(r,a),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)}static CreateShaderFromPath(e,t,a){let r=e.createShader(t);return e.shaderSource(r,i.GetSourceSynch(a)),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)}static GetSourceSynch(e){let t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.status===200?t.responseText:null}static loadImage(e,t){let a=new Image;a.onload=function(){t(null,a)},a.src=e}}class u{constructor(e,t=100,a=100,r=0,o=1,c=1,s=1){this.v=`
    attribute vec2 a_position;
    attribute vec4 a_color;
    
    varying vec4 f_color;

    void main() {

        vec2 mouse_distance = vec2(0,0) - (a_position.xy /vec2(2,2));
        float red = 1.0 - length(mouse_distance);
        f_color = vec4(a_position, 0, 1.0);
    
        // float dis = distance(vec2(a_position.xy), vec2(0,0));

        // f_color = vec4(dis * 0.6, 0,0,1);
        gl_Position = vec4( a_position, 0, 1);
    }
    `,this.f=`
    precision highp float;

    varying vec4 f_color;
    
    void main() {
        vec2 mouse_distance = vec2(0,0) - (f_color.xy /vec2(5,5));

        float col =  length(mouse_distance*5.);
        float val = 1.0 - length(mouse_distance*8.);
        
        gl_FragColor = vec4(0.19,0.19,0.19, col);

    }
    `,this.gl=e,this.color=[Math.random(),Math.random(),Math.random(),1],this.InitShader()}InitShader(){let e=i.CreateShader(this.gl,this.gl.VERTEX_SHADER,this.v),t=i.CreateShader(this.gl,this.gl.FRAGMENT_SHADER,this.f);if(e&&t){this.vShader=e,this.fShader=t;let a=i.CreateProgram(this.gl,e,t);a&&(this.program=a)}}Render(e){let t=[.1,0,0,1];this.vertexs=new Float32Array([-1,-1,1,1,1,1,-1,1,t[0],t[1],t[2],t[3],1,-1,t[0],t[1],t[2],t[3],-1,1,1,1,1,1,1,-1,t[0],t[1],t[2],t[3],1,1,t[0],t[1],t[2],t[3]]),this.posBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.posBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(this.vertexs),e.STATIC_DRAW),this.posLocAtt=this.gl.getAttribLocation(this.program,"a_position");let a=2,r=e.FLOAT,o=!1,c=6*Float32Array.BYTES_PER_ELEMENT,s=0;e.vertexAttribPointer(this.posLocAtt,a,r,o,c,s),e.enableVertexAttribArray(this.posLocAtt),e.useProgram(this.program);let h=e.TRIANGLES;s=0,e.drawArrays(h,s,6)}}export{u as F};
