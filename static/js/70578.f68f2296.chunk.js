"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[70578,60508,72004,7894,37854,23365],{60508:(t,r,i)=>{i.r(r),i.d(r,{GeometryBase:()=>e});class e{constructor(t){this.scene=void 0,this.scene=t,this.scene.add(this)}render(){}}},70578:(t,r,i)=>{i.r(r),i.d(r,{Rect:()=>o});var e=i(72004),a=i(60508),s=i(23365);class o extends a.GeometryBase{constructor(t){super(t.scene),this.v="#version 300 es\n\n    in vec3 a_position;\n    in vec2 a_uv;\n\n    uniform mat4 uPMatrix;\n    uniform mat4 uMVMatrix;\n    uniform mat4 uCameraMatrix;\n\n    uniform vec2 u_resolution;\n\n    out vec2 uv;\n\n    void main() {\n        // gl_Position = vec4(a_position , 0, 1);\n        gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4( a_position.x, a_position.y, a_position.z, 1.0);\n        uv = a_uv;\n    }\n    ",this.f="#version 300 es\n\n    precision mediump float;\n    uniform vec4 u_color;\n    in vec2 uv;\n\n    out vec4 outColor;\n\n    void main() {\n\n\t\t\tfloat c = (uv.x <= 0.1 || uv.x >=0.9 || uv.y <= 0.1 || uv.y >= 0.9)? 0.0 : 1.0;\n\t\t\toutColor = vec4(c,c,c,1.0-c);\n    }\n    ",this.app=void 0,this.gl=void 0,this.program=void 0,this.positionAttributeLocation=void 0,this.perspective=void 0,this.modelMatrix=void 0,this.cameraMatrix=void 0,this.colorLocation=void 0,this.positionBuffer=void 0,this.vao=void 0,this.translation=[],this.color=[],this.width=void 0,this.height=void 0,this.mesh=void 0,this.transform=void 0,this.app=t,this.gl=t.canvas.gl,this.program=e.GLShaderCommon.getShaderProgram(this.gl,this.v,this.f),this.program&&(this.positionAttributeLocation=this.gl.getAttribLocation(this.program,"a_position"),this.perspective=this.gl.getUniformLocation(this.program,"uPMatrix"),this.modelMatrix=this.gl.getUniformLocation(this.program,"uMVMatrix"),this.cameraMatrix=this.gl.getUniformLocation(this.program,"uCameraMatrix"),this.colorLocation=this.gl.getUniformLocation(this.program,"u_color")),this.positionBuffer=this.gl.createBuffer(),this.vao=this.gl.createVertexArray(),this.gl.bindVertexArray(this.vao),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.enableVertexAttribArray(this.positionAttributeLocation);var r=this.gl.FLOAT;this.gl.vertexAttribPointer(this.positionAttributeLocation,3,r,!1,0,0),this.translation=[-1,-1],this.color=[Math.random(),Math.random(),Math.random(),1],this.width=2,this.height=2,this.mesh=new Float32Array(this.getRectangle(this.translation[0],this.translation[1],this.width,this.height)),this.transform=new s.Transform,this.gl.useProgram(this.program),this.gl.uniform4fv(this.colorLocation,this.color),this.gl.uniformMatrix4fv(this.perspective,!1,t.camera.projectionMatrix),this.gl.uniformMatrix4fv(this.modelMatrix,!1,this.transform.getViewMatrix()),this.gl.uniformMatrix4fv(this.cameraMatrix,!1,t.camera.viewMatrix),this.gl.useProgram(null)}getRectangle(t,r,i,e){let a=t+i,s=r+e;return[t,r,0,a,r,0,t,s,0,t,s,0,a,r,0,a,s,0]}setPerspective(t){return this.gl.uniformMatrix4fv(this.perspective,!1,t),this}setModelMatrix(t){return this.gl.uniformMatrix4fv(this.modelMatrix,!1,t),this}setCameraMatrix(t){return this.gl.uniformMatrix4fv(this.cameraMatrix,!1,t),this}render(){this.update(),this.gl.useProgram(this.program),this.transform.updateMatrix(),this.setModelMatrix(this.transform.getViewMatrix()),this.setPerspective(this.app.camera.projectionMatrix),this.setCameraMatrix(this.app.camera.viewMatrix),this.gl.bindVertexArray(this.vao),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.mesh,this.gl.STATIC_DRAW);var t=this.gl.TRIANGLES;this.gl.drawArrays(t,0,6)}update(){this.transform.position.x+=.01}}},72004:(t,r,i)=>{i.r(r),i.d(r,{GLShaderCommon:()=>e});class e{static getShaderProgram(t,r,i){let a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=e.createShader(t,t.VERTEX_SHADER,r),o=e.createShader(t,t.FRAGMENT_SHADER,i);if(s&&o){let r=e.createProgram(t,s,o,a);return r||(console.error("vertex fragment shader error"),null)}return console.error("vertex fragment shader error"),null}static getShader(t,r,i){const e=t.createShader(r);return null===e?null:(t.shaderSource(e,i),t.compileShader(e),t.getShaderParameter(e,t.COMPILE_STATUS)?e:(console.log("An error occurred compiling the shaders:"+t.getShaderInfoLog(e)),t.deleteShader(e),null))}static createProgram(t,r,i){let e=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const a=t.createProgram();if(null===a)return null;if(t.attachShader(a,r),t.attachShader(a,i),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS)){const e=t.getProgramInfoLog(a);return console.log("Failed to link program: "+e),t.deleteProgram(a),t.deleteShader(i),t.deleteShader(r),null}return e&&(t.validateProgram(a),!t.getProgramParameter(a,t.VALIDATE_STATUS))?(console.error("Failed to validate program",t.getProgramInfoLog(a)),t.deleteProgram(a),t.deleteShader(i),t.deleteShader(r),null):(t.deleteShader(i),t.deleteShader(r),a)}static createShader(t,r,i){const e=t.createShader(r);if(null===e)return null;t.shaderSource(e,i),t.compileShader(e);return t.getShaderParameter(e,t.COMPILE_STATUS)?e:(console.log(t.getShaderInfoLog(e)),t.deleteShader(e),null)}static createShaderFromPath(t,r,i){const a=t.createShader(r);if(null===a)return null;t.shaderSource(a,e.getSourceSynch(i)),t.compileShader(a);return t.getShaderParameter(a,t.COMPILE_STATUS)?a:(console.log(t.getShaderInfoLog(a)),t.deleteShader(a),null)}static getSourceSynch(t){const r=new XMLHttpRequest;return r.open("GET",t,!1),r.send(null),200===r.status?r.responseText:null}static loadImage(t,r){const i=new Image;i.onload=function(){r(null,i)},i.src=t}}},7894:(t,r,i)=>{i.r(r),i.d(r,{Matrix4:()=>e});class e{static identity(){let t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t}static perspective(t,r,i,e,a){let s=1/Math.tan(r/2),o=1/(e-a);t[0]=s/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(a+e)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*a*e*o,t[15]=0}static ortho(t,r,i,e,a,s,o){let h=1/(r-i),n=1/(e-a),l=1/(s-o);t[0]=-2*h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(r+i)*h,t[13]=(a+e)*n,t[14]=(o+s)*l,t[15]=1}static transpose(t,r){if(t===r){let i=r[1],e=r[2],a=r[3],s=r[6],o=r[7],h=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=i,t[6]=r[9],t[7]=r[13],t[8]=e,t[9]=s,t[11]=r[14],t[12]=a,t[13]=o,t[14]=h}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t}static normalMat3(t,r){let i=r[0],e=r[1],a=r[2],s=r[3],o=r[4],h=r[5],n=r[6],l=r[7],c=r[8],u=r[9],d=r[10],m=r[11],g=r[12],v=r[13],f=r[14],p=r[15],M=i*h-e*o,x=i*n-a*o,w=i*l-s*o,S=e*n-a*h,A=e*l-s*h,y=a*l-s*n,V=c*v-u*g,P=c*f-d*g,L=c*p-m*g,_=u*f-d*v,R=u*p-m*v,T=d*p-m*f,F=M*T-x*R+w*_+S*L-A*P+y*V;return F?(F=1/F,t[0]=(h*T-n*R+l*_)*F,t[1]=(n*L-o*T-l*P)*F,t[2]=(o*R-h*L+l*V)*F,t[3]=(a*R-e*T-s*_)*F,t[4]=(i*T-a*L+s*P)*F,t[5]=(e*L-i*R-s*V)*F,t[6]=(v*y-f*A+p*S)*F,t[7]=(f*w-g*y-p*x)*F,t[8]=(g*A-v*w+p*M)*F,t):null}static multiplyVector(t,r){let i=r[0],e=r[1],a=r[2],s=r[3],o=t[0],h=t[1],n=t[2],l=t[3],c=t[4],u=t[5],d=t[6],m=t[7],g=t[8],v=t[9],f=t[10],p=t[11];return[i*o+e*c+a*g+s*t[12],i*h+e*u+a*v+s*t[13],i*n+e*d+a*f+s*t[14],i*l+e*m+a*p+s*t[15]]}static transformVec4(t,r,i){return t[0]=i[0]*r[0]+i[4]*r[1]+i[8]*r[2]+i[12]*r[3],t[1]=i[1]*r[0]+i[5]*r[1]+i[9]*r[2]+i[13]*r[3],t[2]=i[2]*r[0]+i[6]*r[1]+i[10]*r[2]+i[14]*r[3],t[3]=i[3]*r[0]+i[7]*r[1]+i[11]*r[2]+i[15]*r[3],t}static mult(t,r,i){let e=r[0],a=r[1],s=r[2],o=r[3],h=r[4],n=r[5],l=r[6],c=r[7],u=r[8],d=r[9],m=r[10],g=r[11],v=r[12],f=r[13],p=r[14],M=r[15],x=i[0],w=i[1],S=i[2],A=i[3];return t[0]=x*e+w*h+S*u+A*v,t[1]=x*a+w*n+S*d+A*f,t[2]=x*s+w*l+S*m+A*p,t[3]=x*o+w*c+S*g+A*M,x=i[4],w=i[5],S=i[6],A=i[7],t[4]=x*e+w*h+S*u+A*v,t[5]=x*a+w*n+S*d+A*f,t[6]=x*s+w*l+S*m+A*p,t[7]=x*o+w*c+S*g+A*M,x=i[8],w=i[9],S=i[10],A=i[11],t[8]=x*e+w*h+S*u+A*v,t[9]=x*a+w*n+S*d+A*f,t[10]=x*s+w*l+S*m+A*p,t[11]=x*o+w*c+S*g+A*M,x=i[12],w=i[13],S=i[14],A=i[15],t[12]=x*e+w*h+S*u+A*v,t[13]=x*a+w*n+S*d+A*f,t[14]=x*s+w*l+S*m+A*p,t[15]=x*o+w*c+S*g+A*M,t}static scale(t,r,i,e){return t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r,t[4]*=i,t[5]*=i,t[6]*=i,t[7]*=i,t[8]*=e,t[9]*=e,t[10]*=e,t[11]*=e,t}static rotateY(t,r){let i=Math.sin(r),e=Math.cos(r),a=t[0],s=t[1],o=t[2],h=t[3],n=t[8],l=t[9],c=t[10],u=t[11];return t[0]=a*e-n*i,t[1]=s*e-l*i,t[2]=o*e-c*i,t[3]=h*e-u*i,t[8]=a*i+n*e,t[9]=s*i+l*e,t[10]=o*i+c*e,t[11]=h*i+u*e,t}static rotateX(t,r){let i=Math.sin(r),e=Math.cos(r),a=t[4],s=t[5],o=t[6],h=t[7],n=t[8],l=t[9],c=t[10],u=t[11];return t[4]=a*e+n*i,t[5]=s*e+l*i,t[6]=o*e+c*i,t[7]=h*e+u*i,t[8]=n*e-a*i,t[9]=l*e-s*i,t[10]=c*e-o*i,t[11]=u*e-h*i,t}static rotateZ(t,r){let i=Math.sin(r),e=Math.cos(r),a=t[0],s=t[1],o=t[2],h=t[3],n=t[4],l=t[5],c=t[6],u=t[7];return t[0]=a*e+n*i,t[1]=s*e+l*i,t[2]=o*e+c*i,t[3]=h*e+u*i,t[4]=n*e-a*i,t[5]=l*e-s*i,t[6]=c*e-o*i,t[7]=u*e-h*i,t}static rotate(t,r,i){let e,a,s,o,h,n,l,c,u,d,m,g,v,f,p,M,x,w,S,A,y,V,P,L,_=i[0],R=i[1],T=i[2],F=Math.sqrt(_*_+R*R+T*T);return Math.abs(F)<1e-6?null:(F=1/F,_*=F,R*=F,T*=F,e=Math.sin(r),a=Math.cos(r),s=1-a,o=t[0],h=t[1],n=t[2],l=t[3],c=t[4],u=t[5],d=t[6],m=t[7],g=t[8],v=t[9],f=t[10],p=t[11],M=_*_*s+a,x=R*_*s+T*e,w=T*_*s-R*e,S=_*R*s-T*e,A=R*R*s+a,y=T*R*s+_*e,V=_*T*s+R*e,P=R*T*s-_*e,L=T*T*s+a,t[0]=o*M+c*x+g*w,t[1]=h*M+u*x+v*w,t[2]=n*M+d*x+f*w,t[3]=l*M+m*x+p*w,t[4]=o*S+c*A+g*y,t[5]=h*S+u*A+v*y,t[6]=n*S+d*A+f*y,t[7]=l*S+m*A+p*y,t[8]=o*V+c*P+g*L,t[9]=h*V+u*P+v*L,t[10]=n*V+d*P+f*L,t[11]=l*V+m*P+p*L,t)}static invert(t,r){void 0===r&&(r=t);let i=r[0],e=r[1],a=r[2],s=r[3],o=r[4],h=r[5],n=r[6],l=r[7],c=r[8],u=r[9],d=r[10],m=r[11],g=r[12],v=r[13],f=r[14],p=r[15],M=i*h-e*o,x=i*n-a*o,w=i*l-s*o,S=e*n-a*h,A=e*l-s*h,y=a*l-s*n,V=c*v-u*g,P=c*f-d*g,L=c*p-m*g,_=u*f-d*v,R=u*p-m*v,T=d*p-m*f,F=M*T-x*R+w*_+S*L-A*P+y*V;return!!F&&(F=1/F,t[0]=(h*T-n*R+l*_)*F,t[1]=(a*R-e*T-s*_)*F,t[2]=(v*y-f*A+p*S)*F,t[3]=(d*A-u*y-m*S)*F,t[4]=(n*L-o*T-l*P)*F,t[5]=(i*T-a*L+s*P)*F,t[6]=(f*w-g*y-p*x)*F,t[7]=(c*y-d*w+m*x)*F,t[8]=(o*R-h*L+l*V)*F,t[9]=(e*L-i*R-s*V)*F,t[10]=(g*A-v*w+p*M)*F,t[11]=(u*w-c*A-m*M)*F,t[12]=(h*P-o*_-n*V)*F,t[13]=(i*_-e*P+a*V)*F,t[14]=(v*x-g*S-f*M)*F,t[15]=(c*S-u*x+d*M)*F,!0)}static translate(t,r,i,e){t[12]=t[0]*r+t[4]*i+t[8]*e+t[12],t[13]=t[1]*r+t[5]*i+t[9]*e+t[13],t[14]=t[2]*r+t[6]*i+t[10]*e+t[14],t[15]=t[3]*r+t[7]*i+t[11]*e+t[15]}constructor(){this.raw=void 0,this.raw=e.identity()}vtranslate(t){return e.translate(this.raw,t.x,t.y,t.z),this}translate(t,r,i){return e.translate(this.raw,t,r,i),this}rotateY(t){return e.rotateY(this.raw,t),this}rotateX(t){return e.rotateX(this.raw,t),this}rotateZ(t){return e.rotateZ(this.raw,t),this}vscale(t){return e.scale(this.raw,t.x,t.y,t.z),this}scale(t,r,i){return e.scale(this.raw,t,r,i),this}invert(){return e.invert(this.raw),this}resetRotation(){for(let t=0;t<this.raw.length;t++)t>=12&&t<=14||(this.raw[t]=t%5===0?1:0);return this}reset(){for(let t=0;t<this.raw.length;t++)this.raw[t]=t%5===0?1:0;return this}}},37854:(t,r,i)=>{i.r(r),i.d(r,{Vector3:()=>e});class e{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=r,this.z=i}magnitude(t){if(void 0===t)return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);let r=t.x-this.x,i=t.y-this.y,e=t.y-this.z;return Math.sqrt(r*r+i*i+e*e)}normalize(){let t=this.magnitude();return this.x/=t,this.y/=t,this.z/=t,this}set(t,r,i){return this.x=t,this.y=r,this.z=i,this}multiScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}getArray(){return[this.x,this.y,this.z]}getFloatArray(){return new Float32Array([this.x,this.y,this.z])}clone(){return new e(this.x,this.y,this.z)}}},23365:(t,r,i)=>{i.r(r),i.d(r,{Transform:()=>s});var e=i(37854),a=i(7894);class s{constructor(){this.position=void 0,this.scale=void 0,this.rotation=void 0,this.matView=void 0,this.matNormal=void 0,this.forward=void 0,this.up=void 0,this.right=void 0,this.position=new e.Vector3(0,0,0),this.scale=new e.Vector3(1,1,1),this.rotation=new e.Vector3(0,0,0),this.matView=new a.Matrix4,this.matNormal=new Float32Array(9),this.forward=new Float32Array(4),this.up=new Float32Array(4),this.right=new Float32Array(4)}updateMatrix(){return this.matView.reset().vtranslate(this.position).rotateX(this.rotation.x*s.deg2Rad).rotateZ(this.rotation.z*s.deg2Rad).rotateY(this.rotation.y*s.deg2Rad).vscale(this.scale),a.Matrix4.normalMat3(this.matNormal,this.matView.raw),a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this.matView.raw}updateDirection(){return a.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),a.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),a.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this}getViewMatrix(){return this.matView.raw}getNormalMatrix(){return this.matNormal}reset(){this.position.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0)}}s.deg2Rad=Math.PI/180}}]);
//# sourceMappingURL=70578.f68f2296.chunk.js.map