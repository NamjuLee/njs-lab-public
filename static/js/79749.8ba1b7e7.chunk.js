"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[79749,69165,81713,61349,74432,9463,68908,88605,65712,14085,72694,61507,41928,90887,77770,15057,36813],{69165:(t,i,e)=>{e.r(i),e.d(i,{Canvas:()=>r});class r{constructor(t){this.app=void 0,this.gl=void 0,this.canvas=void 0,this.app=t,this.canvas=document.createElement("canvas"),this.app.host&&(this.app.host.appendChild(this.canvas),this.canvas.width=this.app.host.clientWidth,this.canvas.height=this.app.host.clientHeight);const i=this.canvas.getContext("webgl2");null!==i&&(this.gl=i),this.loop(this.gl)}loop(t){this.clear(t),requestAnimationFrame((()=>{this.loop(t)})),this.app.renderer.render(t)}clear(t){t.clearColor(1,1,1,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)}}},81713:(t,i,e)=>{e.r(i),e.d(i,{Renderer:()=>r});class r{constructor(t){this.app=void 0,this.app=t}render(t){this.app.camera&&this.app.camera.updateViewMatrix(),this.app.scene.geometries.forEach((i=>{i.render(t)}))}}},61349:(t,i,e)=>{e.r(i),e.d(i,{Scene:()=>r});class r{constructor(t){this.NGL3dApp=void 0,this.geometries=[],this.NGL3dApp=t}add(t){this.geometries.push(t)}}},74432:(t,i,e)=>{e.r(i),e.d(i,{GeometryBase:()=>r});class r{constructor(t){this.scene=void 0,this.scene=t,this.scene.add(this)}render(t){}}},9463:(t,i,e)=>{e.r(i),e.d(i,{GridAxis:()=>l});var r=e(352),s=e(90887),a=e(77770),o=e(74432),n=e(61507);class h extends a.Shader{constructor(t,i,e,r,s){if(super(t,i,e),this.program){this.setPerspective(s),t.useProgram(this.program),this.uniformLoc.uAngle=t.getUniformLocation(this.program,"uAngle");let i=t.getUniformLocation(this.program,"uColor");t.uniform3fv(i,r)}}set(t){return this.gl.uniform1f(this.uniformLoc.uAngle,t),this}renderModal(t){return this.setModalMatrix(t.transform.getViewMatrix()),this.gl.bindVertexArray(t.mesh.vao),t.mesh.indexCount?this.gl.drawElements(t.mesh.drawMode,t.mesh.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(t.mesh.drawMode,0,t.mesh.vertexCount),this.gl.bindVertexArray(null),this}}class l extends o.GeometryBase{constructor(t){super(t.scene),this.v="#version 300 es\n    in vec3 a_position;\t//Standard position data.\n    layout(location=4) in float a_color;\t//Will hold the 4th custom position of the custom position buffer.\n\n    uniform mat4 uPMatrix;\n    uniform mat4 uMVMatrix;\n    uniform mat4 uCameraMatrix;\n\n    uniform vec3 uColor[4];\t//Color Array\n\n    out lowp vec4 color;\t//Color to send to fragment shader.\n\n    void main(void) {\n        color = vec4(uColor[ int(a_color) ],1.0); //Using the 4th float as a color index.\n        gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(a_position, 1.0);\n    }\n    ",this.f="#version 300 es\n    precision mediump float;\n\n    in vec4 color;\n    out vec4 finalColor;\n\n    void main(void) { finalColor = color; }\n    ",this.app=void 0,this.gl=void 0,this.mesh=void 0,this.modal=void 0,this.shader=void 0,this.ro=0,this.t=0,this.app=t,this.gl=t.canvas.gl,this.initShader(this.gl)}GetVAO(){let t,i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=[],s=.9;for(let r=0;r<=10;r++)t=.18*r-.9,e.push(t),e.push(0),e.push(s),e.push(0),e.push(t),e.push(0),e.push(-.9),e.push(0),t=s-.18*r,e.push(-.9),e.push(0),e.push(t),e.push(0),e.push(s),e.push(0),e.push(t),e.push(0);i&&(e.push(-1.1),e.push(0),e.push(0),e.push(1),e.push(1.1),e.push(0),e.push(0),e.push(1),e.push(0),e.push(-1.1),e.push(0),e.push(2),e.push(0),e.push(1.1),e.push(0),e.push(2),e.push(0),e.push(0),e.push(-1.1),e.push(3),e.push(0),e.push(0),e.push(1.1),e.push(3)),this.mesh=new r.RTN,this.mesh.drawMode=this.gl.LINES,this.mesh.vao=this.gl.createVertexArray(),this.mesh.vertexComponentLen=4,this.mesh.vertexCount=e.length/this.mesh.vertexComponentLen;let a=Float32Array.BYTES_PER_ELEMENT*this.mesh.vertexComponentLen;return this.mesh.bufVertices=this.gl.createBuffer(),this.gl.bindVertexArray(this.mesh.vao),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.mesh.bufVertices),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(e),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(n.ATTR.ATTR_POSITION_LOC),this.gl.enableVertexAttribArray(n.ATTR.ATTR_COLOR_LOC),this.gl.vertexAttribPointer(n.ATTR.ATTR_POSITION_LOC,3,this.gl.FLOAT,!1,a,0),this.gl.vertexAttribPointer(n.ATTR.ATTR_COLOR_LOC,1,this.gl.FLOAT,!1,a,3*Float32Array.BYTES_PER_ELEMENT),this.gl.bindVertexArray(null),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.mesh}initShader(t){this.shader=new h(t,this.v,this.f,[.8,.8,.8,1,0,0,0,1,0,0,0,1],this.app.camera.projectionMatrix),this.mesh=this.GetVAO(),this.modal=new s.Modal(this.mesh)}render(t){this.shader.activate().setCameraMatrix(this.app.camera.viewMatrix).renderModal(this.modal.preRender()),this.t=.01}}},68908:(t,i,e)=>{e.r(i),e.d(i,{PointScreen:()=>h});var r=e(352),s=e(90887),a=e(74432),o=e(77770);class n extends o.Shader{constructor(t,i,e){super(t,i,e),this.program&&(this.uniformLoc.uPointSize=t.getUniformLocation(this.program,"uPointSize"),this.uniformLoc.uAngle=t.getUniformLocation(this.program,"uAngle")),t.useProgram(null)}set(t,i){return this.gl.uniform1f(this.uniformLoc.uPointSize,t),this.gl.uniform1f(this.uniformLoc.uAngle,i),this}}class h extends a.GeometryBase{constructor(t){super(t.scene),this.vOld="#version 300 es\n        in vec3 a_position;\n\n        uniform float uPointSize;\n\n        void main(void) {\n            gl_PointSize = uPointSize;\n            gl_Position = vec4(a_position, 1.0);\n        }\n    ",this.fOld="#version 300 es\n        precision mediump float;\n\n        out vec4 finalColor;\n\n        void main(void) {\n            finalColor = vec4(1.0, 0.0, 0.0, 1.0);\n        }\n    ",this.v="#version 300 es\n\n        in vec3 a_position;\n\n        uniform mediump float uPointSize;\n        uniform float uAngle;\n\n        void main(void) {\n            gl_PointSize = uPointSize;\n            gl_Position = vec4(cos(uAngle) * 0.8 + a_position.x, sin(uAngle) * 0.8 + a_position.y, a_position.z, 1.0);\n        }\n    ",this.f="#version 300 es\n        precision mediump float;\n\n        uniform float uPointSize;\n\n        out vec4 finalColor;\n\n        void main(void) {\n            float c = (40. - uPointSize ) / 20.;\n            finalColor = vec4(c, c, c, 1.0);\n        }\n    ",this.app=void 0,this.gl=void 0,this.mesh=void 0,this.modal=void 0,this.shader=void 0,this.size=2.5,this.rotation=0,this.app=t,this.gl=t.canvas.gl,this.initShader(this.gl)}initShader(t){this.shader=new n(t,this.v,this.f),this.mesh=r.VAO.createMeshVAO(t,"dots",[0,0,0,.1,.1,0,.1,-.1,0,-.1,-.1,0,-.1,.1,0]),this.mesh.drawMode=t.POINTS,this.modal=new s.Modal(this.mesh)}render(t){this.size+=.01;let i=10*Math.sin(this.size)+30;this.rotation+=.02,this.shader.activate(),this.shader.set(i,this.rotation),this.shader.renderModal(this.modal)}}},88605:(t,i,e)=>{e.r(i),e.d(i,{PointWorld:()=>h});var r=e(352),s=e(90887),a=e(74432),o=e(77770);class n extends o.Shader{constructor(t,i,e,r){super(t,i,e),this.program&&(this.setPerspective(r),t.useProgram(this.program),this.uniformLoc.uAngle=t.getUniformLocation(this.program,"uAngle"),this.uniformLoc.uPointSize=t.getUniformLocation(this.program,"uPointSize"),t.useProgram(null))}set(t,i){return this.gl.uniform1f(this.uniformLoc.uAngle,i),this.gl.uniform1f(this.uniformLoc.uPointSize,t),this}}class h extends a.GeometryBase{constructor(t){super(t.scene),this.v="#version 300 es\n\n        in vec3 a_position;\n\n        uniform mat4 uPMatrix;\n        uniform mat4 uMVMatrix;\n        uniform mat4 uCameraMatrix;\n\n        uniform mediump float uPointSize;\n        uniform float uAngle;\n\n        void main(void) {\n            gl_PointSize = uPointSize;\n            gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(cos(uAngle) * 0.8 + a_position.x, sin(uAngle) * 0.8 + a_position.y, a_position.z, 1.0);\n        }\n    ",this.f="#version 300 es\n        precision mediump float;\n\n        uniform float uPointSize;\n\n        out vec4 finalColor;\n\n        void main(void) {\n            float c =  uPointSize / 20.;\n            finalColor = vec4(0, c, c, 1.0);\n        }\n    ",this.app=void 0,this.gl=void 0,this.mesh=void 0,this.modal=void 0,this.shader=void 0,this.size=20.5,this.rotation=0,this.app=t,this.gl=t.canvas.gl,this.initShader(this.gl)}initShader(t){this.shader=new n(t,this.v,this.f,this.app.camera.projectionMatrix),this.mesh=r.VAO.createMeshVAO(t,"dots",[0,0,0,.1,.1,0,.1,-.1,0,-.1,-.1,0,-.1,.1,0]),this.mesh.drawMode=t.POINTS,this.modal=new s.Modal(this.mesh)}render(t){this.size+=.01;let i=10*Math.sin(this.size)+20;this.rotation+=.03,this.shader.activate(),this.shader.set(i,this.rotation),this.shader.setCameraMatrix(this.app.camera.viewMatrix),this.shader.renderModal(this.modal.preRender())}}},65712:(t,i,e)=>{e.r(i),e.d(i,{GLShaderCommon:()=>r});class r{static getShaderProgram(t,i,e){let s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=r.createShader(t,t.VERTEX_SHADER,i),o=r.createShader(t,t.FRAGMENT_SHADER,e);if(a&&o){let i=r.createProgram(t,a,o,s);return i||(console.error("vertex fragment shader error"),null)}return console.error("vertex fragment shader error"),null}static getShader(t,i,e){const r=t.createShader(i);return null===r?null:(t.shaderSource(r,e),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.log("An error occurred compiling the shaders:"+t.getShaderInfoLog(r)),t.deleteShader(r),null))}static createProgram(t,i,e){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const s=t.createProgram();if(null===s)return null;if(t.attachShader(s,i),t.attachShader(s,e),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const r=t.getProgramInfoLog(s);return console.log("Failed to link program: "+r),t.deleteProgram(s),t.deleteShader(e),t.deleteShader(i),null}return r&&(t.validateProgram(s),!t.getProgramParameter(s,t.VALIDATE_STATUS))?(console.error("Failed to validate program",t.getProgramInfoLog(s)),t.deleteProgram(s),t.deleteShader(e),t.deleteShader(i),null):(t.deleteShader(e),t.deleteShader(i),s)}static createShader(t,i,e){const r=t.createShader(i);if(null===r)return null;t.shaderSource(r,e),t.compileShader(r);return t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.log(t.getShaderInfoLog(r)),t.deleteShader(r),null)}static createShaderFromPath(t,i,e){const s=t.createShader(i);if(null===s)return null;t.shaderSource(s,r.getSourceSynch(e)),t.compileShader(s);return t.getShaderParameter(s,t.COMPILE_STATUS)?s:(console.log(t.getShaderInfoLog(s)),t.deleteShader(s),null)}static getSourceSynch(t){const i=new XMLHttpRequest;return i.open("GET",t,!1),i.send(null),200===i.status?i.responseText:null}static loadImage(t,i){const e=new Image;e.onload=function(){i(null,e)},e.src=t}}},14085:(t,i,e)=>{e.r(i),e.d(i,{Matrix4:()=>r});class r{static identity(){let t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t}static perspective(t,i,e,r,s){let a=1/Math.tan(i/2),o=1/(r-s);t[0]=a/e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(s+r)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*s*r*o,t[15]=0}static ortho(t,i,e,r,s,a,o){let n=1/(i-e),h=1/(r-s),l=1/(a-o);t[0]=-2*n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(i+e)*n,t[13]=(s+r)*h,t[14]=(o+a)*l,t[15]=1}static transpose(t,i){if(t===i){let e=i[1],r=i[2],s=i[3],a=i[6],o=i[7],n=i[11];t[1]=i[4],t[2]=i[8],t[3]=i[12],t[4]=e,t[6]=i[9],t[7]=i[13],t[8]=r,t[9]=a,t[11]=i[14],t[12]=s,t[13]=o,t[14]=n}else t[0]=i[0],t[1]=i[4],t[2]=i[8],t[3]=i[12],t[4]=i[1],t[5]=i[5],t[6]=i[9],t[7]=i[13],t[8]=i[2],t[9]=i[6],t[10]=i[10],t[11]=i[14],t[12]=i[3],t[13]=i[7],t[14]=i[11],t[15]=i[15];return t}static normalMat3(t,i){let e=i[0],r=i[1],s=i[2],a=i[3],o=i[4],n=i[5],h=i[6],l=i[7],d=i[8],u=i[9],m=i[10],c=i[11],v=i[12],p=i[13],f=i[14],g=i[15],A=e*n-r*o,M=e*h-s*o,R=e*l-a*o,x=r*h-s*n,T=r*l-a*n,w=s*l-a*h,_=d*p-u*v,S=d*f-m*v,L=d*g-c*v,C=u*f-m*p,P=u*g-c*p,O=m*g-c*f,V=A*O-M*P+R*C+x*L-T*S+w*_;return V?(V=1/V,t[0]=(n*O-h*P+l*C)*V,t[1]=(h*L-o*O-l*S)*V,t[2]=(o*P-n*L+l*_)*V,t[3]=(s*P-r*O-a*C)*V,t[4]=(e*O-s*L+a*S)*V,t[5]=(r*L-e*P-a*_)*V,t[6]=(p*w-f*T+g*x)*V,t[7]=(f*R-v*w-g*M)*V,t[8]=(v*T-p*R+g*A)*V,t):null}static multiplyVector(t,i){let e=i[0],r=i[1],s=i[2],a=i[3],o=t[0],n=t[1],h=t[2],l=t[3],d=t[4],u=t[5],m=t[6],c=t[7],v=t[8],p=t[9],f=t[10],g=t[11];return[e*o+r*d+s*v+a*t[12],e*n+r*u+s*p+a*t[13],e*h+r*m+s*f+a*t[14],e*l+r*c+s*g+a*t[15]]}static transformVec4(t,i,e){return t[0]=e[0]*i[0]+e[4]*i[1]+e[8]*i[2]+e[12]*i[3],t[1]=e[1]*i[0]+e[5]*i[1]+e[9]*i[2]+e[13]*i[3],t[2]=e[2]*i[0]+e[6]*i[1]+e[10]*i[2]+e[14]*i[3],t[3]=e[3]*i[0]+e[7]*i[1]+e[11]*i[2]+e[15]*i[3],t}static mult(t,i,e){let r=i[0],s=i[1],a=i[2],o=i[3],n=i[4],h=i[5],l=i[6],d=i[7],u=i[8],m=i[9],c=i[10],v=i[11],p=i[12],f=i[13],g=i[14],A=i[15],M=e[0],R=e[1],x=e[2],T=e[3];return t[0]=M*r+R*n+x*u+T*p,t[1]=M*s+R*h+x*m+T*f,t[2]=M*a+R*l+x*c+T*g,t[3]=M*o+R*d+x*v+T*A,M=e[4],R=e[5],x=e[6],T=e[7],t[4]=M*r+R*n+x*u+T*p,t[5]=M*s+R*h+x*m+T*f,t[6]=M*a+R*l+x*c+T*g,t[7]=M*o+R*d+x*v+T*A,M=e[8],R=e[9],x=e[10],T=e[11],t[8]=M*r+R*n+x*u+T*p,t[9]=M*s+R*h+x*m+T*f,t[10]=M*a+R*l+x*c+T*g,t[11]=M*o+R*d+x*v+T*A,M=e[12],R=e[13],x=e[14],T=e[15],t[12]=M*r+R*n+x*u+T*p,t[13]=M*s+R*h+x*m+T*f,t[14]=M*a+R*l+x*c+T*g,t[15]=M*o+R*d+x*v+T*A,t}static scale(t,i,e,r){return t[0]*=i,t[1]*=i,t[2]*=i,t[3]*=i,t[4]*=e,t[5]*=e,t[6]*=e,t[7]*=e,t[8]*=r,t[9]*=r,t[10]*=r,t[11]*=r,t}static rotateY(t,i){let e=Math.sin(i),r=Math.cos(i),s=t[0],a=t[1],o=t[2],n=t[3],h=t[8],l=t[9],d=t[10],u=t[11];return t[0]=s*r-h*e,t[1]=a*r-l*e,t[2]=o*r-d*e,t[3]=n*r-u*e,t[8]=s*e+h*r,t[9]=a*e+l*r,t[10]=o*e+d*r,t[11]=n*e+u*r,t}static rotateX(t,i){let e=Math.sin(i),r=Math.cos(i),s=t[4],a=t[5],o=t[6],n=t[7],h=t[8],l=t[9],d=t[10],u=t[11];return t[4]=s*r+h*e,t[5]=a*r+l*e,t[6]=o*r+d*e,t[7]=n*r+u*e,t[8]=h*r-s*e,t[9]=l*r-a*e,t[10]=d*r-o*e,t[11]=u*r-n*e,t}static rotateZ(t,i){let e=Math.sin(i),r=Math.cos(i),s=t[0],a=t[1],o=t[2],n=t[3],h=t[4],l=t[5],d=t[6],u=t[7];return t[0]=s*r+h*e,t[1]=a*r+l*e,t[2]=o*r+d*e,t[3]=n*r+u*e,t[4]=h*r-s*e,t[5]=l*r-a*e,t[6]=d*r-o*e,t[7]=u*r-n*e,t}static rotate(t,i,e){let r,s,a,o,n,h,l,d,u,m,c,v,p,f,g,A,M,R,x,T,w,_,S,L,C=e[0],P=e[1],O=e[2],V=Math.sqrt(C*C+P*P+O*O);return Math.abs(V)<1e-6?null:(V=1/V,C*=V,P*=V,O*=V,r=Math.sin(i),s=Math.cos(i),a=1-s,o=t[0],n=t[1],h=t[2],l=t[3],d=t[4],u=t[5],m=t[6],c=t[7],v=t[8],p=t[9],f=t[10],g=t[11],A=C*C*a+s,M=P*C*a+O*r,R=O*C*a-P*r,x=C*P*a-O*r,T=P*P*a+s,w=O*P*a+C*r,_=C*O*a+P*r,S=P*O*a-C*r,L=O*O*a+s,t[0]=o*A+d*M+v*R,t[1]=n*A+u*M+p*R,t[2]=h*A+m*M+f*R,t[3]=l*A+c*M+g*R,t[4]=o*x+d*T+v*w,t[5]=n*x+u*T+p*w,t[6]=h*x+m*T+f*w,t[7]=l*x+c*T+g*w,t[8]=o*_+d*S+v*L,t[9]=n*_+u*S+p*L,t[10]=h*_+m*S+f*L,t[11]=l*_+c*S+g*L,t)}static invert(t,i){void 0===i&&(i=t);let e=i[0],r=i[1],s=i[2],a=i[3],o=i[4],n=i[5],h=i[6],l=i[7],d=i[8],u=i[9],m=i[10],c=i[11],v=i[12],p=i[13],f=i[14],g=i[15],A=e*n-r*o,M=e*h-s*o,R=e*l-a*o,x=r*h-s*n,T=r*l-a*n,w=s*l-a*h,_=d*p-u*v,S=d*f-m*v,L=d*g-c*v,C=u*f-m*p,P=u*g-c*p,O=m*g-c*f,V=A*O-M*P+R*C+x*L-T*S+w*_;return!!V&&(V=1/V,t[0]=(n*O-h*P+l*C)*V,t[1]=(s*P-r*O-a*C)*V,t[2]=(p*w-f*T+g*x)*V,t[3]=(m*T-u*w-c*x)*V,t[4]=(h*L-o*O-l*S)*V,t[5]=(e*O-s*L+a*S)*V,t[6]=(f*R-v*w-g*M)*V,t[7]=(d*w-m*R+c*M)*V,t[8]=(o*P-n*L+l*_)*V,t[9]=(r*L-e*P-a*_)*V,t[10]=(v*T-p*R+g*A)*V,t[11]=(u*R-d*T-c*A)*V,t[12]=(n*S-o*C-h*_)*V,t[13]=(e*C-r*S+s*_)*V,t[14]=(p*M-v*x-f*A)*V,t[15]=(d*x-u*M+m*A)*V,!0)}static translate(t,i,e,r){t[12]=t[0]*i+t[4]*e+t[8]*r+t[12],t[13]=t[1]*i+t[5]*e+t[9]*r+t[13],t[14]=t[2]*i+t[6]*e+t[10]*r+t[14],t[15]=t[3]*i+t[7]*e+t[11]*r+t[15]}constructor(){this.raw=void 0,this.raw=r.identity()}vtranslate(t){return r.translate(this.raw,t.x,t.y,t.z),this}translate(t,i,e){return r.translate(this.raw,t,i,e),this}rotateY(t){return r.rotateY(this.raw,t),this}rotateX(t){return r.rotateX(this.raw,t),this}rotateZ(t){return r.rotateZ(this.raw,t),this}vscale(t){return r.scale(this.raw,t.x,t.y,t.z),this}scale(t,i,e){return r.scale(this.raw,t,i,e),this}invert(){return r.invert(this.raw),this}resetRotation(){for(let t=0;t<this.raw.length;t++)t>=12&&t<=14||(this.raw[t]=t%5===0?1:0);return this}reset(){for(let t=0;t<this.raw.length;t++)this.raw[t]=t%5===0?1:0;return this}}},72694:(t,i,e)=>{e.r(i),e.d(i,{Vector3:()=>r});class r{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=i,this.z=e}magnitude(t){if(void 0===t)return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);let i=t.x-this.x,e=t.y-this.y,r=t.y-this.z;return Math.sqrt(i*i+e*e+r*r)}normalize(){let t=this.magnitude();return this.x/=t,this.y/=t,this.z/=t,this}set(t,i,e){return this.x=t,this.y=i,this.z=e,this}multiScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}getArray(){return[this.x,this.y,this.z]}getFloatArray(){return new Float32Array([this.x,this.y,this.z])}clone(){return new r(this.x,this.y,this.z)}}},61507:(t,i,e)=>{let r;e.r(i),e.d(i,{ATTR:()=>r,AttribLocations:()=>s,UniformLocations:()=>a}),function(t){t.ATTR_POSITION_NAME="a_position",t[t.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",t.ATTR_NORMAL_NAME="a_norm",t[t.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",t.ATTR_UV_NAME="a_uv",t[t.ATTR_UV_LOC=2]="ATTR_UV_LOC",t[t.ATTR_COLOR_LOC=4]="ATTR_COLOR_LOC",t.ATTR_COLOR_NAME="a_color"}(r||(r={}));class s{constructor(t,i){this.position=void 0,this.normal=void 0,this.uv=void 0,this.position=t.getAttribLocation(i,r.ATTR_NORMAL_NAME),this.normal=t.getAttribLocation(i,r.ATTR_NORMAL_NAME),this.uv=t.getAttribLocation(i,r.ATTR_UV_NAME)}}class a{constructor(t,i){this.uPointSize=void 0,this.uAngle=void 0,this.perspective=void 0,this.modalMatrix=void 0,this.cameraMatrix=void 0,this.mainTexture=void 0,this.perspective=t.getUniformLocation(i,"uPMatrix"),this.modalMatrix=t.getUniformLocation(i,"uMVMatrix"),this.cameraMatrix=t.getUniformLocation(i,"uCameraMatrix"),this.mainTexture=t.getUniformLocation(i,"uMainTex")}}},41928:(t,i,e)=>{e.r(i),e.d(i,{CAMERA_MODE:()=>a,Camera:()=>o,CameraController:()=>n});var r=e(14085),s=e(15057);let a;!function(t){t[t.FREE=0]="FREE",t[t.ORBIT=1]="ORBIT"}(a||(a={}));class o{constructor(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:45,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;this.projectionMatrix=void 0,this.viewMatrix=void 0,this.transform=void 0,this.mode=void 0,this.projectionMatrix=new Float32Array(16);var n=t.canvas.width/t.canvas.height;r.Matrix4.perspective(this.projectionMatrix,i||45,n,e||.1,o||100),this.transform=new s.Transform,this.viewMatrix=new Float32Array(16),this.mode=a.ORBIT}panX(t){this.mode!==a.ORBIT&&(this.updateViewMatrix(),this.transform.position.x+=this.transform.right[0]*t,this.transform.position.y+=this.transform.right[1]*t,this.transform.position.z+=this.transform.right[2]*t)}panY(t){this.updateViewMatrix(),this.transform.position.y+=this.transform.up[1]*t,this.mode!==a.ORBIT&&(this.transform.position.x+=this.transform.up[0]*t,this.transform.position.z+=this.transform.up[2]*t)}panZ(t){this.updateViewMatrix(),this.mode===a.ORBIT?this.transform.position.z+=t:(this.transform.position.x+=this.transform.forward[0]*t,this.transform.position.y+=this.transform.forward[1]*t,this.transform.position.z+=this.transform.forward[2]*t)}updateViewMatrix(){return this.mode===a.FREE?this.transform.matView.reset().vtranslate(this.transform.position).rotateX(this.transform.rotation.x*s.Transform.deg2Rad).rotateY(this.transform.rotation.y*s.Transform.deg2Rad):this.transform.matView.reset().rotateX(this.transform.rotation.x*s.Transform.deg2Rad).rotateY(this.transform.rotation.y*s.Transform.deg2Rad).vtranslate(this.transform.position),this.transform.updateDirection(),r.Matrix4.invert(this.viewMatrix,this.transform.matView.raw),this.viewMatrix}}class n{constructor(t,i){this.canvas=void 0,this.camera=void 0,this.rotateRate=void 0,this.panRate=void 0,this.zoomRate=void 0,this.offsetX=void 0,this.offsetY=void 0,this.initX=void 0,this.initY=void 0,this.prevX=void 0,this.prevY=void 0,this.onUpHandler=void 0,this.onMoveHandler=void 0,this.canvas=t.canvas,this.camera=i,this.rotateRate=-300,this.panRate=5,this.zoomRate=200,this.offsetX=10,this.offsetY=10,this.initX=0,this.initY=0,this.prevX=0,this.prevY=0,this.onUpHandler=t=>this.onMouseUp(t),this.onMoveHandler=t=>{this.onMouseMove(t)},this.canvas.addEventListener("mousedown",(t=>{this.onMouseDown(t)})),this.canvas.addEventListener("mousewheel",(t=>{this.onMouseWheel(t)}))}getMouseVec2(t){return{x:t.pageX-this.offsetX,y:t.pageY-this.offsetY}}onMouseDown(t){this.initX=this.prevX=t.pageX-this.offsetX,this.initY=this.prevY=t.pageY-this.offsetY,this.canvas.addEventListener("mouseup",this.onUpHandler),this.canvas.addEventListener("mousemove",this.onMoveHandler)}onMouseUp(t){this.canvas.removeEventListener("mouseup",this.onUpHandler),this.canvas.removeEventListener("mousemove",this.onMoveHandler)}onMouseWheel(t){var i=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail));this.camera.panZ(i*(this.zoomRate/this.canvas.height))}onMouseMove(t){var i=t.pageX-this.offsetX,e=t.pageY-this.offsetY,r=i-this.prevX,s=e-this.prevY;t.shiftKey?(this.camera.panX(-r*(this.panRate/this.canvas.width)),this.camera.panY(s*(this.panRate/this.canvas.height))):(this.camera.transform.rotation.y+=r*(this.rotateRate/this.canvas.width),this.camera.transform.rotation.x+=s*(this.rotateRate/this.canvas.height)),this.prevX=i,this.prevY=e}}},90887:(t,i,e)=>{e.r(i),e.d(i,{Modal:()=>s});var r=e(15057);class s{constructor(t){this.mesh=void 0,this.transform=void 0,this.transform=new r.Transform,this.mesh=t}setScale(t,i,e){return this.transform.scale.set(t,i,e),this}setPosition(t,i,e){return this.transform.position.set(t,i,e),this}setRotation(t,i,e){return this.transform.rotation.set(t,i,e),this}addScale(t,i,e){return this.transform.scale.x+=t,this.transform.scale.y+=i,this.transform.scale.y+=i,this}addPosition(t,i,e){return this.transform.position.x+=t,this.transform.position.y+=i,this.transform.position.z+=e,this}addRotation(t,i,e){return this.transform.rotation.x+=t,this.transform.rotation.y+=i,this.transform.rotation.z+=e,this}preRender(){return this.transform.updateMatrix(),this}}},77770:(t,i,e)=>{e.r(i),e.d(i,{Shader:()=>a});var r=e(65712),s=e(61507);class a{constructor(t,i,e){this.gl=void 0,this.program=void 0,this.attribLoc=void 0,this.uniformLoc=void 0,this.gl=t,this.program=r.GLShaderCommon.getShaderProgram(t,i,e,!0),null!==this.program&&(t.useProgram(this.program),this.attribLoc=new s.AttribLocations(t,this.program),this.uniformLoc=new s.UniformLocations(t,this.program))}activate(){return this.gl.useProgram(this.program),this}deactivate(){return this.gl.useProgram(null),this}dispose(){this.gl.getParameter(this.gl.CURRENT_PROGRAM)===this.program&&this.gl.useProgram(null),this.gl.deleteProgram(this.program)}setPerspective(t){return this.gl.uniformMatrix4fv(this.uniformLoc.perspective,!1,t),this}setModalMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.modalMatrix,!1,t),this}setCameraMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.cameraMatrix,!1,t),this}preRender(){}renderModal(t){return this.setModalMatrix(t.transform.getViewMatrix()),this.gl.bindVertexArray(t.mesh.vao),t.mesh.indexCount?this.gl.drawElements(t.mesh.drawMode,t.mesh.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(t.mesh.drawMode,0,t.mesh.vertexCount),this.gl.bindVertexArray(null),this}}},15057:(t,i,e)=>{e.r(i),e.d(i,{Transform:()=>a});var r=e(72694),s=e(14085);class a{constructor(){this.position=void 0,this.scale=void 0,this.rotation=void 0,this.matView=void 0,this.matNormal=void 0,this.forward=void 0,this.up=void 0,this.right=void 0,this.position=new r.Vector3(0,0,0),this.scale=new r.Vector3(1,1,1),this.rotation=new r.Vector3(0,0,0),this.matView=new s.Matrix4,this.matNormal=new Float32Array(9),this.forward=new Float32Array(4),this.up=new Float32Array(4),this.right=new Float32Array(4)}updateMatrix(){return this.matView.reset().vtranslate(this.position).rotateX(this.rotation.x*a.deg2Rad).rotateZ(this.rotation.z*a.deg2Rad).rotateY(this.rotation.y*a.deg2Rad).vscale(this.scale),s.Matrix4.normalMat3(this.matNormal,this.matView.raw),s.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),s.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),s.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this.matView.raw}updateDirection(){return s.Matrix4.transformVec4(this.forward,[0,0,1,0],this.matView.raw),s.Matrix4.transformVec4(this.up,[0,1,0,0],this.matView.raw),s.Matrix4.transformVec4(this.right,[1,0,0,0],this.matView.raw),this}getViewMatrix(){return this.matView.raw}getNormalMatrix(){return this.matNormal}reset(){this.position.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0)}}a.deg2Rad=Math.PI/180},352:(t,i,e)=>{e.r(i),e.d(i,{DRAW_MODE:()=>s,RTN:()=>a,VAO:()=>o});var r=e(61507);let s;s||(s={});class a{constructor(){this.name=void 0,this.vao=void 0,this.bufVertices=void 0,this.bufNormals=void 0,this.bufUV=void 0,this.bufIndex=void 0,this.vertexComponentLen=void 0,this.vertexCount=void 0,this.indexCount=void 0,this.drawMode=void 0}}class o{static createMeshVAO(t,i,e,s,o,n){let h=new a;return h.name=i,h.drawMode=t.TRIANGLES,h.vao=t.createVertexArray(),t.bindVertexArray(h.vao),void 0!==e&&null!=e&&(h.bufVertices=t.createBuffer(),h.vertexComponentLen=3,h.vertexCount=e.length/h.vertexComponentLen,t.bindBuffer(t.ARRAY_BUFFER,h.bufVertices),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.enableVertexAttribArray(r.ATTR.ATTR_POSITION_LOC),t.vertexAttribPointer(r.ATTR.ATTR_POSITION_LOC,3,t.FLOAT,!1,0,0)),void 0!==o&&null!=o&&(h.bufNormals=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,h.bufNormals),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),t.enableVertexAttribArray(r.ATTR.ATTR_NORMAL_LOC),t.vertexAttribPointer(r.ATTR.ATTR_NORMAL_LOC,3,t.FLOAT,!1,0,0)),void 0!==n&&null!=n&&(h.bufUV=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,h.bufUV),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW),t.enableVertexAttribArray(r.ATTR.ATTR_UV_LOC),t.vertexAttribPointer(r.ATTR.ATTR_UV_LOC,2,t.FLOAT,!1,0,0)),void 0!==s&&null!=s&&(h.bufIndex=t.createBuffer(),h.indexCount=s.length,t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,h.bufIndex),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(s),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null),h}constructor(){}}},79749:(t,i,e)=>{e.r(i),e.d(i,{NGL3dApp:()=>d});var r=e(69165),s=e(81713),a=e(61349),o=e(41928),n=e(9463),h=e(68908),l=e(88605);class d{constructor(t){this.host=void 0,this.canvas=void 0,this.renderer=void 0,this.scene=void 0,this.camera=void 0,this.cameraCtrl=void 0,console.log("id: "+t+", NGL3dApp 06 Init!!!!!");const i=document.getElementById(t);i&&(this.host=i),this.scene=new a.Scene(this),this.renderer=new s.Renderer(this),this.canvas=new r.Canvas(this),this.camera=new o.Camera(this.canvas.gl),this.camera.transform.position.set(0,1,3),this.cameraCtrl=new o.CameraController(this.canvas.gl,this.camera);new h.PointScreen(this),new l.PointWorld(this),new n.GridAxis(this)}}}}]);
//# sourceMappingURL=79749.8ba1b7e7.chunk.js.map