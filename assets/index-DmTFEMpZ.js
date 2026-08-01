import{mU as s,mT as u,mV as h,mW as f}from"./index-BhdSrBGh.js";import{a as i}from"./mapbox-gl-SWB96lpn.js";/* empty css                  */class d{constructor(t="custom",r){this.type="custom",this.vertexSource=`
    precision highp float;
    uniform mat4 u_matrix;
    uniform float u_size;
    attribute vec2 aPos;

    varying vec2 position;
    
    void main() {
        gl_Position = u_matrix * vec4(aPos, 0.0, 1.0);
        gl_PointSize = u_size; 
        position = vec2(aPos.xy);
    }`,this.fragmentSource=`
    precision mediump float;

    uniform vec4 u_color;
    uniform vec4 u_stroke;

    varying vec2 position;

    void main() {
        
        float aRadius = 2.0;
        float dist = distance(position, gl_FragCoord.xy);

        // https://stackoverflow.com/questions/7237086/opengl-es-2-0-equivalent-for-es-1-0-circles-using-gl-point-smooth
        float len = length(gl_PointCoord - vec2(0.5)) * 1.0;
        float radius = 0.3;
        float strokeWidth = 0.2;

        if (len < radius) {
            gl_FragColor = u_color;
        } else if (len < radius + strokeWidth) {
            gl_FragColor = u_stroke;
        } else {
            discard;
        }
    }`,this.id=t,this.data=r}onAdd(t,r){this.map=t;const e=r.createShader(r.VERTEX_SHADER);r.shaderSource(e,this.vertexSource),r.compileShader(e);const o=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(o,this.fragmentSource),r.compileShader(o),this.program=r.createProgram(),r.attachShader(this.program,e),r.attachShader(this.program,o),r.linkProgram(this.program),this.aPos=r.getAttribLocation(this.program,"aPos"),this.buffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.buffer),r.bufferData(r.ARRAY_BUFFER,this.data,r.STATIC_DRAW)}render(t,r){t.useProgram(this.program),t.uniform1f(t.getUniformLocation(this.program,"u_size"),5*Math.pow(2,this.map.transform.zoom)),t.uniform4fv(t.getUniformLocation(this.program,"u_color"),[1,1,0,1]),t.uniform4fv(t.getUniformLocation(this.program,"u_stroke"),[1,0,0,1]),t.uniformMatrix4fv(t.getUniformLocation(this.program,"u_matrix"),!1,r),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.enableVertexAttribArray(this.aPos),t.vertexAttribPointer(this.aPos,2,t.FLOAT,!1,0,0),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.drawArrays(t.POINTS,0,this.data.length*.5)}}class p{constructor(t="custom"){this.type="custom",this.vertexSource=`
    uniform mat4 u_matrix;
    attribute vec2 aPos;
    
    uniform vec4 u_color;
    // out vec4 vertexColor;

    void main() {
        gl_Position = u_matrix * vec4(aPos, 0.0, 1.0);
        gl_PointSize = 5.0; 
    }`,this.fragmentSource=`
    
    // uniform vec4 u_color;

    void main() {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 0.25);
    }`,this.id=t}onAdd(t,r){const e=r.createShader(r.VERTEX_SHADER);r.shaderSource(e,this.vertexSource),r.compileShader(e);const o=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(o,this.fragmentSource),r.compileShader(o),this.program=r.createProgram(),r.attachShader(this.program,e),r.attachShader(this.program,o),r.linkProgram(this.program),this.aPos=r.getAttribLocation(this.program,"aPos");const n=i.MercatorCoordinate.fromLngLat({lng:25.004,lat:60.239}),c=i.MercatorCoordinate.fromLngLat({lng:13.403,lat:52.562}),m=i.MercatorCoordinate.fromLngLat({lng:30.498,lat:50.541});this.buffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.buffer),r.bufferData(r.ARRAY_BUFFER,new Float32Array([n.x,n.y,c.x,c.y,m.x,m.y]),r.STATIC_DRAW)}render(t,r){t.useProgram(this.program),t.uniformMatrix4fv(t.getUniformLocation(this.program,"u_matrix"),!1,r),t.uniform4fv(t.getUniformLocation(this.program,"u_color"),[1,0,0,1]),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.enableVertexAttribArray(this.aPos),t.vertexAttribPointer(this.aPos,2,t.FLOAT,!1,0,0),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.drawArrays(t.TRIANGLES,0,3)}}class _{constructor(t){this.map=t}init(){this.map.addLayer(new p("custom-01"),"building");const t=this.toMercators([25.004,60.239,0,0,1,1,2,2,3,3]);this.map.addLayer(new d("custom-02",t),"building"),this.map.on("click",r=>{const e=this.map.queryRenderedFeatures(r.point,{layers:["custom-01"]});if(e.length>0){const o=e[0];console.log(o.properties)}})}dispose(){}toMercator(t,r){return i.MercatorCoordinate.fromLngLat({lng:t,lat:r})}toMercators(t){const r=new Float32Array(t.length);for(let e=0;e<t.length;e+=2){const o=this.toMercator(t[e],t[e+1]);r[e]=o.x,r[e+1]=o.y}return r}}const v="_mapContainer_8qnsm_1",A={mapContainer:v},S=()=>{const a=s.useRef(null),t=s.useRef(null),r=s.useRef(null),e=()=>{t.current||(i.accessToken="pk.eyJ1IjoiZGVzaWduanUiLCJhIjoiY2xhNGU0YWo4MDlhYzNwdHBwenVvang4eiJ9.P3sX4l_3KjdPeRRbVS1VVg",t.current=new i.Map({container:a.current,style:"mapbox://styles/mapbox/dark-v11",center:[0,38],projection:"mercator",zoom:2,attributionControl:!1}),r.current=new _(t.current),t.current.on("load",()=>{r.current.init()}),t.current.on("move",()=>{}))};return s.useEffect(()=>(e(),()=>{r.current.dispose()}),[]),u.jsx("div",{ref:a,className:A.mapContainer})};class b{constructor(t){this.divHost=document.getElementById(t);const r=document.createElement("div");r.style.height="100%",this.divHost.appendChild(r),h.createRoot(r).render(f.createElement(S,{}))}destroy(){for(;this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}export{b as Solution};
