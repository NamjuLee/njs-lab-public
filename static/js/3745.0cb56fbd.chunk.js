"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[3745],{23745:function(t,e,i){i.r(e),i.d(e,{Solution:function(){return g}});var a=i(39880),s=i(88679),h=i(99874);class r{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[2,2,4],h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,1,0],n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:5;this.viewMatrix=a.Ue(),this.projectionMatrix=a.Ue(),this.viewProjectionMatrix=a.Ue(),this.zoomMax=100,this.zoomSpeed=2,this.near=.01,this.far=1e4,this.mvpMatrix=a.Ue(),this.eye=s.al(0,0,0),this.center=s.al(0,0,0),this.up=s.al(0,1,0),this.type="camera",this.respectRatio=void 0,this.width=void 0,this.height=void 0,this.angleXY=Math.PI,this.angleZ=.25*Math.PI,this.distance=1,this.distance=n,this.width=t,this.height=e,this.respectRatio=t/e,this.eye=i,this.center=h,this.up=r}zoom(t){}update(){a.zB(this.viewMatrix,this.eye,this.center,this.up),a.Jp(this.viewProjectionMatrix,this.projectionMatrix,this.viewMatrix)}}class n extends r{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[2,2,4],arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0],arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,1,0],arguments.length>5&&void 0!==arguments[5]?arguments[5]:3),this.type="CameraPerspective",this.init()}init(){a.G3(this.projectionMatrix,2*Math.PI/5,this.respectRatio,this.near,this.far),this.update()}zoom(t){this.distance+=.01*t}}class o extends r{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0,1],arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0],arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,1,0],arguments.length>5&&void 0!==arguments[5]?arguments[5]:300.1),this.type="CameraOrth",this.init()}init(){c(this.projectionMatrix,this.width,this.height,this.near,this.far,this.distance),this.angleXY=0,this.angleZ=0,this.update()}zoom(t){this.distance+=t+50/this.distance,this.distance<1e-6&&(this.distance=1e-6),this.distance>1e5&&(this.distance=1e5),c(this.projectionMatrix,this.width,this.height,this.near,this.far,this.distance)}}const c=(t,e,i,a,s,h)=>(t[0]=2/e*h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2/i*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=-2/(s-a),t[11]=0,t[12]=0,t[13]=0,t[14]=.1,t[15]=1,t);class d{constructor(t){this.solution=void 0,this.canvas=void 0,this.cameraOrth=void 0,this.cameraPerspective=void 0,this.camera=void 0,this.modelMatrix=a.Ue(),this.mvpMatrix=a.Ue(),this.rotation=s.al(0,0,0),this.translation=s.al(0,0,0),this.screen2=h.al(0,0),this.pos=[0,0],this.isDown=!1,this.solution=t,this.canvas=t.canvas;const e=s.al(2.6451475620269775,3.130298137664795,2.864337205886841),i=s.al(0,0,0),r=s.al(0,0,1);this.cameraPerspective=new n(this.canvas.width,this.canvas.height,e,i,r),this.camera=this.cameraPerspective,this.arcRotation(0,0),this.cameraOrth=new o(this.canvas.width,this.canvas.height),this.camera=this.cameraOrth,this.appendEvent(this.canvas),this.update()}update(){this.camera.update(),m(this.modelMatrix,this.translation,this.rotation),a.Jp(this.mvpMatrix,this.camera.viewProjectionMatrix,this.modelMatrix)}rotateZ(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1;this.rotation[2]+=t,this.update()}translateX(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1;this.translation[0]+=t,this.update()}get getMatrix(){return this.mvpMatrix}shiftCamera(){this.camera===this.cameraPerspective?this.camera=this.cameraOrth:this.camera=this.cameraPerspective,this.update()}moveCamera(t,e){this.camera===this.cameraPerspective?this.arcRotation(t,e):this.pan(t,e)}arcRotation(t,e){t*=-.01,e*=-.01,this.camera.angleXY+=t,this.camera.angleZ+=e,this.camera.eye[0]=this.camera.center[0]+Math.sin(this.camera.angleXY)*Math.cos(this.camera.angleZ)*this.camera.distance,this.camera.eye[1]=this.camera.center[1]+Math.cos(this.camera.angleXY)*Math.cos(this.camera.angleZ)*this.camera.distance,this.camera.eye[2]=this.camera.center[2]+Math.sin(this.camera.angleZ)*this.camera.distance,this.update()}zoomWheel(t){this.camera===this.cameraPerspective?(this.camera.zoom(t),this.arcRotation(0,0)):this.camera.zoom(t),this.update()}pan(t,e){this.camera.center[0]+=t/this.camera.distance,this.camera.center[1]-=e/this.camera.distance,this.camera.eye[0]+=t/this.camera.distance,this.camera.eye[1]-=e/this.camera.distance,this.update()}appendEvent(t){t.addEventListener("ondrag",(t=>{}),!1),t.addEventListener("click",(t=>{}),!1),t.addEventListener("dblclick",(t=>{}),!1),t.addEventListener("drag",(t=>{}),!0),t.addEventListener("mouseup",(t=>{}),!1),t.addEventListener("mousedown",(t=>{this.isDown=!0,this.pos[0]=t.offsetX,this.pos[1]=t.offsetY}),!1),t.addEventListener("mouseup",(t=>{this.isDown=!1}),!1),t.addEventListener("mousemove",(e=>{if(this.isDown){const t=this.pos[0]-e.offsetX,i=this.pos[1]-e.offsetY;this.moveCamera(t,i),this.pos[0]=e.offsetX,this.pos[1]=e.offsetY}else{t.getBoundingClientRect()}}),!1),t.addEventListener("wheel",(t=>{this.zoomWheel(t.deltaY)}),!1),window.addEventListener("keydown",(t=>{"p"===t.key&&this.shiftCamera()}),!1)}}const m=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0,0],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[1,1,1];const h=a.Ue(),r=a.Ue(),n=a.Ue(),o=a.Ue(),c=a.Ue();a.vc(o,e),a.aC(h,i[0]),a.gT(r,i[1]),a.QO(n,i[2]),a.xJ(c,s),a.Jp(t,h,c),a.Jp(t,r,t),a.Jp(t,n,t),a.Jp(t,o,t)},v=async t=>fetch("".concat(t)).then((t=>t.text())).catch((t=>{console.debug(t)})),l=i(85142),p=i(51485);class g{constructor(t){this.divHost=void 0,this.canvas=void 0,this.ctx=void 0,this.device=void 0,this.format=void 0,this.size=void 0,this.pipelineObj=void 0,this.cameraController=void 0,this.divHost=document.getElementById(t),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.init()}async init(){this.cameraController=new d(this);const t=await v(l),e=await v(p),i=this.canvas.getContext("webgl2"),s=i.createProgram(),h=i.createShader(i.VERTEX_SHADER);i.shaderSource(h,t),i.compileShader(h),i.attachShader(s,h);const r=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(r,e),i.compileShader(r),i.attachShader(s,r),i.linkProgram(s),i.getProgramParameter(s,i.LINK_STATUS)||(console.log(i.getShaderInfoLog(h)),console.log(i.getShaderInfoLog(r))),i.useProgram(s),i.enable(i.DEPTH_TEST);const n=new Float32Array([-.5,-.5,-.5,0,1,1,-.5,.5,.5,0,1,1,-.5,.5,-.5,0,1,1,-.5,-.5,.5,0,1,1,-.5,.5,.5,0,1,1,-.5,-.5,-.5,0,1,1,.5,-.5,-.5,1,0,1,.5,.5,-.5,1,0,1,.5,.5,.5,1,0,1,.5,.5,.5,1,0,1,.5,-.5,.5,1,0,1,.5,-.5,-.5,1,0,1,-.5,-.5,-.5,0,1,0,.5,-.5,-.5,0,1,0,.5,-.5,.5,0,1,0,.5,-.5,.5,0,1,0,-.5,-.5,.5,0,1,0,-.5,-.5,-.5,0,1,0,-.5,.5,-.5,1,1,0,.5,.5,.5,1,1,0,.5,.5,-.5,1,1,0,-.5,.5,.5,1,1,0,.5,.5,.5,1,1,0,-.5,.5,-.5,1,1,0,.5,-.5,-.5,0,0,1,-.5,-.5,-.5,0,0,1,.5,.5,-.5,0,0,1,-.5,.5,-.5,0,0,1,.5,.5,-.5,0,0,1,-.5,-.5,-.5,0,0,1,-.5,-.5,.5,1,0,0,.5,-.5,.5,1,0,0,.5,.5,.5,1,0,0,.5,.5,.5,1,0,0,-.5,.5,.5,1,0,0,-.5,-.5,.5,1,0,0]),o=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,o),i.bufferData(i.ARRAY_BUFFER,n,i.STATIC_DRAW),i.vertexAttribPointer(0,3,i.FLOAT,!1,24,0),i.vertexAttribPointer(1,3,i.FLOAT,!1,24,12),i.enableVertexAttribArray(0),i.enableVertexAttribArray(1);const c=i.getUniformLocation(s,"uModel"),m=i.getUniformLocation(s,"uView"),g=i.getUniformLocation(s,"uProjection"),u=i.getUniformLocation(s,"cameraProjection"),f=a.Ue(),x=a.Ue(),M=a.Ue();a.jI(f,f,0),a.bA(f,f,[.8,.8,.8]),a.zB(x,[1,1,0],[0,0,0],[0,1,0]),a.G3(M,Math.PI/1.5,i.canvas.width/i.canvas.height,.1,10),i.uniformMatrix4fv(m,!1,x),i.uniformMatrix4fv(g,!1,M);const w=()=>{requestAnimationFrame(w),this.cameraController.update(),a.U1(f,f,.01,[0,0,1]),i.uniformMatrix4fv(c,!1,f),i.uniformMatrix4fv(u,!1,this.cameraController.getMatrix),i.drawArrays(i.TRIANGLES,0,36)};w()}destroy(){this.divHost.removeChild(this.canvas)}}},51485:function(t,e,i){t.exports=i.p+"static/media/frag.77893524aba45301fd37.glsl"},85142:function(t,e,i){t.exports=i.p+"static/media/vert.1f3447bcc660aa27666c.glsl"}}]);
//# sourceMappingURL=3745.0cb56fbd.chunk.js.map