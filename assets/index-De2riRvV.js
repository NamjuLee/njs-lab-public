import{p as T,c as n,l as Y,m as u,f as R,a as _,b as M,d as P,e as L}from"./mat4-DRgVL_5a.js";import{f as d}from"./vec3-k28HwHx8.js";import{f as U}from"./vec2-Cb2c_g8h.js";import{M as x}from"./index-B2RTyIEO.js";import"./index-CFD18EaN.js";import{a as S}from"./index-C0vqmb3-.js";class C{constructor(t=100,e=100,i=[2,2,4],r=[0,0,0],a=[0,1,0],o=5){this.viewMatrix=n(),this.projectionMatrix=n(),this.viewProjectionMatrix=n(),this.zoomMax=100,this.zoomSpeed=2,this.near=.01,this.far=1e4,this.mvpMatrix=n(),this.eye=d(0,0,0),this.center=d(0,0,0),this.up=d(0,1,0),this.type="camera",this.angleXY=Math.PI,this.angleZ=Math.PI*.25,this.distance=1,this.distance=o,this.width=t,this.height=e,this.respectRatio=t/e,this.eye=i,this.center=r,this.up=a}zoom(t){}update(){Y(this.viewMatrix,this.eye,this.center,this.up),u(this.viewProjectionMatrix,this.projectionMatrix,this.viewMatrix)}}class D extends C{constructor(t=100,e=100,i=[2,2,4],r=[0,0,0],a=[0,1,0],o=3){super(t,e,i,r,a,o),this.type="CameraPerspective",this.init()}init(){T(this.projectionMatrix,2*Math.PI/5,this.respectRatio,this.near,this.far),this.update()}zoom(t){this.distance+=t*.01}}class H extends C{constructor(t=100,e=100,i=[0,0,1],r=[0,0,0],a=[0,1,0],o=300.1){super(t,e,i,r,a,o),this.type="CameraOrth",this.init()}init(){A(this.projectionMatrix,this.width,this.height,this.near,this.far,this.distance),this.angleXY=0,this.angleZ=0,this.update()}zoom(t){this.width+=this.width*.001*t,this.height+=this.height*.001*t,this.distance<1e-6&&(this.distance=1e-6),this.distance>1e5&&(this.distance=1e5),A(this.projectionMatrix,this.width,this.height,this.near,this.far,this.distance)}}const A=(s,t,e,i,r,a)=>(s[0]=2/t*a,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/e*a,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=-2/(r-i),s[11]=0,s[12]=0,s[13]=0,s[14]=.1,s[15]=1,s);class X{constructor(t){this.modelMatrix=n(),this.mvpMatrix=n(),this.rotation=d(0,0,0),this.translation=d(0,0,0),this.screen2=U(0,0),this.pos=[0,0],this.isDown=!1,this.isShift=!1,this.renderer=t,this.canvas=t.canvas;const e=d(2.6451475620269775,3.130298137664795,2.864337205886841),i=d(0,0,0),r=d(0,0,1);this.cameraPerspective=new D(this.canvas.width,this.canvas.height,e,i,r),this.camera=this.cameraPerspective,this.arcRotation(0,0),this.cameraOrth=new H(this.canvas.width,this.canvas.height),this.camera=this.cameraOrth,this.appendEvent(this.canvas),this.update()}update(){this.camera.update(),k(this.modelMatrix,this.translation,this.rotation),u(this.mvpMatrix,this.camera.viewProjectionMatrix,this.modelMatrix)}rotateZ(t=.1){this.rotation[2]+=t,this.update()}translateX(t=.1){this.translation[0]+=t,this.update()}get getMatrix(){return this.mvpMatrix}shiftCamera(){this.camera===this.cameraPerspective?this.camera=this.cameraOrth:this.camera=this.cameraPerspective,this.update()}moveCamera(t,e){this.camera===this.cameraPerspective?this.arcRotation(t,e):this.pan(t,e)}arcRotation(t,e){t=t*-.01,e=e*-.01,this.isShift?this.panPerspective(t,e):(this.camera.angleXY+=t,this.camera.angleZ+=e,this.camera.eye[0]=this.camera.center[0]+Math.sin(this.camera.angleXY)*Math.cos(this.camera.angleZ)*this.camera.distance,this.camera.eye[1]=this.camera.center[1]+Math.cos(this.camera.angleXY)*Math.cos(this.camera.angleZ)*this.camera.distance,this.camera.eye[2]=this.camera.center[2]+Math.sin(this.camera.angleZ)*this.camera.distance),this.update()}zoomWheel(t){this.camera===this.cameraPerspective?(this.camera.zoom(t),this.arcRotation(0,0)):this.camera.zoom(t),this.update()}panPerspective(t,e){this.camera.center[0]+=t/this.camera.distance,this.camera.center[2]+=e/this.camera.distance,this.camera.eye[0]+=t/this.camera.distance,this.camera.eye[2]+=e/this.camera.distance,this.update()}pan(t,e){this.camera.center[0]+=t/this.camera.distance,this.camera.center[1]-=e/this.camera.distance,this.camera.eye[0]+=t/this.camera.distance,this.camera.eye[1]-=e/this.camera.distance,this.update()}appendEvent(t){t.addEventListener("drag",e=>{},!1),t.addEventListener("click",e=>{},!1),t.addEventListener("dblclick",e=>{},!1),t.addEventListener("drag",e=>{},!0),t.addEventListener("mouseup",e=>{},!1),t.addEventListener("mousedown",e=>{this.isDown=!0,this.pos[0]=e.offsetX,this.pos[1]=e.offsetY},!1),t.addEventListener("mouseup",e=>{this.isDown=!1},!1),t.addEventListener("mousemove",e=>{if(this.isDown){const i=this.pos[0]-e.offsetX,r=this.pos[1]-e.offsetY;this.moveCamera(i,r),this.pos[0]=e.offsetX,this.pos[1]=e.offsetY}else t.getBoundingClientRect();this.pos[0]=e.offsetX,this.pos[1]=e.offsetY},!1),t.addEventListener("wheel",e=>{this.zoomWheel(e.deltaY)},!1),window.addEventListener("keydown",e=>{e.key==="p"&&this.shiftCamera(),e.shiftKey&&(this.isShift=!0)},!1),window.addEventListener("keyup",e=>{this.isShift=!1},!1)}}const k=(s,t=[0,0,0],e=[0,0,0],i=[1,1,1])=>{const r=n(),a=n(),o=n(),c=n(),l=n();R(c,t),_(r,e[0]),M(a,e[1]),P(o,e[2]),L(l,i),u(s,r,l),u(s,a,s),u(s,o,s),u(s,c,s)};class z{constructor(t){this.isActive=!0,this.core=t,this.divHost=document.getElementById(this.core.id),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.init()}init(){this.gl=this.canvas.getContext("webgl2"),this.cameraController=new X(this)}draw(){this.isActive&&(requestAnimationFrame(()=>this.draw()),this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.gl.enable(this.gl.CULL_FACE),this.gl.enable(this.gl.DEPTH_TEST),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.cameraController.update(),this.core.scene.render())}destroy(){this.isActive=!1,this.divHost.removeChild(this.canvas)}}const F=(s,t=[0,0,0],e=[0,0,0],i=[1,1,1])=>{const r=n(),a=n(),o=n(),c=n(),l=n();R(c,t),_(r,e[0]),M(a,e[1]),P(o,e[2]),L(l,i),u(s,r,l),u(s,a,s),u(s,o,s),u(s,c,s)},g=async s=>fetch(`${s}`).then(t=>t.text()).catch(t=>{console.debug(t)});let I=class{constructor(){this.streetOSM=[],this.renderLines=(t,e)=>{const i=[],r=[],a=15478749591872748e-9,o=4766690415614613e-9,c=.001;for(let l=0;l<t.length;++l){const f=t[l];for(let h=0;h<f.length;++h)for(let m=0;m<f[h].length-1;++m){const[v,p]=x(f[h][m][0],f[h][m][1]),[y,w]=x(f[h][m+1][0],f[h][m+1][1]),b=(v-a)*c,B=(p-o)*c,j=(y-a)*c,O=(w-o)*c;i.push(b,B,0),r.push(e[0],e[1],e[2]),i.push(j,O,0),r.push(e[0],e[1],e[2]),m<f[h].length-1}}this.pos=new Float32Array(i.flat()),this.colors=new Float32Array(r.flat())}}async init(){await S("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then(t=>{for(let e=0;e<t.features.length;++e)this.streetOSM.push(t.features[e].geometry.coordinates);this.renderLines(this.streetOSM,[0,0,0])})}};class E{constructor(t){this.modelMatrix=n(),this.translation=d(2,0,0),this.rotation=d(0,0,0),this.scale=d(1,1,1),this.isRenderable=!1,this.scene=t,this.gl=t.core.renderer.gl,this.scene.add(this)}async init(){}render(){}}var V=`#version 300 es
#pragma vscode_glsllint_stage: vert

uniform mat4 uModel;
uniform mat4 uView;
uniform mat4 uProjection;
uniform mat4 cameraProjection;

uniform float uFrame;
uniform vec2 uMouse;

layout(location=0) in vec4 aPosition;
layout(location=1) in vec4 aColor;

out vec4 vColor;

float euclideanDistance(vec2 p1, vec2 p2) {
	float d1 = (p1.x - p2.x);
	float d2 = (p1.y - p2.y);
	return sqrt(pow(d1, 2.0) + pow(d2, 2.0));
}

void main(){
    highp vec4 pos = vec4(aPosition);

    vec2 v0 = vec2(uMouse.x, -uMouse.y);
    vec2 v1 = vec2(pos.xy);

    float dis = euclideanDistance(v0,v1);

    vColor = vec4(0, dis, 0.0 , sin(uFrame * 0.3) + 1.25);
    
    gl_PointSize = 10.;
    gl_Position = cameraProjection * uModel * pos;
}`,G=`#version 300 es
#pragma vscode_glsllint_stage: frag

precision mediump float;

in vec4 vColor;

out vec4 fragColor;

void main()
{
    fragColor = vec4(vColor.xyzw);

    
    
    
    
    
    
    
}`;class Z extends E{constructor(t){super(t),this.numberOfVertices=0,this.isAnimation=!1,this.t=0,this.init()}async init(){this.geometry=new I,await this.geometry.init();const t=await g(V),e=await g(G),i=this.gl;this.vertexBuffer=i.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer),i.bufferData(i.ARRAY_BUFFER,this.geometry.pos,i.STATIC_DRAW),this.colorBuffer=i.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),i.bufferData(i.ARRAY_BUFFER,this.geometry.colors,i.STATIC_DRAW),this.program=i.createProgram();const r=i.createShader(i.VERTEX_SHADER);i.shaderSource(r,t),i.compileShader(r),i.attachShader(this.program,r);const a=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(a,e),i.compileShader(a),i.attachShader(this.program,a),i.linkProgram(this.program),this.modelLoc=i.getUniformLocation(this.program,"uModel"),this.cameraLoc=i.getUniformLocation(this.program,"cameraProjection"),this.frameLoc=i.getUniformLocation(this.program,"uFrame"),this.mouseLoc=i.getUniformLocation(this.program,"uMouse"),this.isRenderable=!0}render(){this.isRenderable&&(F(this.modelMatrix,this.translation,this.rotation,this.scale),this.gl.useProgram(this.program),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer),this.gl.enableVertexAttribArray(0),this.gl.vertexAttribPointer(0,3,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.enableVertexAttribArray(1),this.gl.vertexAttribPointer(1,3,this.gl.FLOAT,!1,0,0),this.gl.uniformMatrix4fv(this.modelLoc,!1,this.modelMatrix),this.gl.uniformMatrix4fv(this.cameraLoc,!1,this.scene.core.renderer.cameraController.getMatrix),this.gl.uniform1f(this.frameLoc,this.t),this.gl.uniform2f(this.mouseLoc,this.scene.core.renderer.cameraController.pos[0]*.01,this.scene.core.renderer.cameraController.pos[1]*.01),this.gl.drawArrays(this.gl.LINES,0,this.geometry.pos.length/3),this.t+=.1)}}class N{constructor(){this.streetOSM=[],this.renderLines=(t,e)=>{const i=[],r=[],a=15478749591872748e-9,o=4766690415614613e-9,c=.001;for(let l=0;l<t.length;++l){const f=t[l];for(let h=0;h<f.length;++h)for(let m=0;m<f[h].length-1;++m){const[v,p]=x(f[h][m][0],f[h][m][1]),y=(v-a)*c,w=(p-o)*c;i.push(y,w,0),r.push(e[0],e[1],e[2])}}this.pos=new Float32Array(i.flat()),this.colors=new Float32Array(r.flat())}}async init(){await S("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then(t=>{for(let e=0;e<t.features.length;++e)this.streetOSM.push(t.features[e].geometry.coordinates);this.renderLines(this.streetOSM,[0,0,0])})}}var W=`#version 300 es
#pragma vscode_glsllint_stage: vert

uniform mat4 uModel;
uniform mat4 uView;
uniform mat4 uProjection;
uniform mat4 cameraProjection;

uniform float uFrame;
uniform vec2 uMouse;

layout(location=0) in vec4 aPosition;
layout(location=1) in vec4 aColor;

out vec4 vColor;
out vec4 vPos;

void main(){
    highp vec4 pos = vec4(aPosition);
    pos[2]+=0.1;

    vPos = vec4(pos.xyz, 1.);
    
    
    
    vColor = vec4(1.0, .0, .0, 1.0);
    
    gl_PointSize = 5.;

    gl_Position = cameraProjection * uModel * pos;

}`,$=`#version 300 es
#pragma vscode_glsllint_stage: frag

#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif

precision mediump float;

in vec4 vColor;
in vec4 vPos;

out vec4 fragColor;

float circle(in vec2 st, in float radius) {
    vec2 dist = st - vec2(0.5);
    return 1.0 - smoothstep(
       radius - (radius * 0.01),
       radius +(radius * 0.01),
       dot(dist, dist) * 4.0);
}

float aastep(float threshold, float value) {
	float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
	return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

void main()
{
    
    

    
    
    
    
    
    

    
    
    
    
    
    

    
    
    

    
    
    
    
    

    
    

    
    
    

    
    
    

    
    
    

    

    
    
    vec4 v_fill_color =   vec4(1. , 1. , 1. , 1.);
    vec4 v_stroke_color = vec4(1., 0.,0. , 1.);
    float v_stroke_width = 0.2;

	
	vec2 uv = gl_PointCoord.xy; 
	uv = uv * 2.0 - 1.0; 
	float d = length(uv);
	float aa = aastep( 1.0, d );
	float aa2 = aastep( 1.0 - v_stroke_width, d );
	fragColor = vec4(uv, 0.0, aa) + v_fill_color; 

    vec4 theColor = mix(v_stroke_color, vec4(0.0), aa);

    if (theColor.w < 0.2) {
        discard;
    }

	fragColor = theColor; 
	fragColor = mix(v_fill_color, fragColor, aa2);
	
	

    

}`;class q extends E{constructor(t){super(t),this.numberOfVertices=0,this.isAnimation=!1,this.t=0,this.init()}async init(){this.geometry=new N,await this.geometry.init(),console.log(this.geometry);const t=await g(W),e=await g($),i=this.gl;this.vertexBuffer=i.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer),i.bufferData(i.ARRAY_BUFFER,this.geometry.pos,i.STATIC_DRAW),this.colorBuffer=i.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),i.bufferData(i.ARRAY_BUFFER,this.geometry.colors,i.STATIC_DRAW),this.program=i.createProgram();const r=i.createShader(i.VERTEX_SHADER);i.shaderSource(r,t),i.compileShader(r),i.attachShader(this.program,r);const a=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(a,e),i.compileShader(a),i.attachShader(this.program,a),i.linkProgram(this.program),this.modelLoc=i.getUniformLocation(this.program,"uModel"),this.cameraLoc=i.getUniformLocation(this.program,"cameraProjection"),this.frameLoc=i.getUniformLocation(this.program,"uFrame"),this.mouseLoc=i.getUniformLocation(this.program,"uMouse"),this.isRenderable=!0}render(){this.isRenderable&&(F(this.modelMatrix,this.translation,this.rotation,this.scale),this.gl.useProgram(this.program),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer),this.gl.enableVertexAttribArray(0),this.gl.vertexAttribPointer(0,3,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.enableVertexAttribArray(1),this.gl.vertexAttribPointer(1,3,this.gl.FLOAT,!1,0,0),this.gl.uniformMatrix4fv(this.modelLoc,!1,this.modelMatrix),this.gl.uniformMatrix4fv(this.cameraLoc,!1,this.scene.core.renderer.cameraController.getMatrix),this.gl.uniform1f(this.frameLoc,this.t),this.gl.uniform2f(this.mouseLoc,this.scene.core.renderer.cameraController.pos[0]*.01,this.scene.core.renderer.cameraController.pos[1]*.01),this.gl.drawArrays(this.gl.POINTS,0,this.geometry.pos.length/3),this.t+=.1)}}class J{constructor(t){this.objectList=[],this.core=t}async init(){new Z(this),new q(this)}render(){for(let t=0;t<this.objectList.length;++t)this.objectList[t].render()}add(t){this.objectList.push(t)}}class K{constructor(t){this.id=t,this.init()}async init(){this.renderer=new z(this),this.scene=new J(this),this.scene.init(),this.renderer.draw()}destroy(){if(this.renderer.destroy(),this.renderer.divHost)try{for(;this.renderer.divHost.firstChild;)this.renderer.divHost.removeChild(this.renderer.divHost.firstChild)}catch(t){console.error("Error in destroy method:",t)}else console.warn("divHost is undefined in destroy method")}}class nt{constructor(t){this.core=new K(t)}destroy(){this.core.destroy()}}export{nt as Solution};
