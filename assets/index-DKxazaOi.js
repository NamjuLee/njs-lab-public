class X{constructor(t){this.app=t,this.canvas=document.createElement("canvas"),this.app.host&&(this.app.host.appendChild(this.canvas),this.canvas.width=this.app.host.clientWidth,this.canvas.height=this.app.host.clientHeight);const e=this.canvas.getContext("webgl2");e!==null&&(this.gl=e,this.gl.cullFace(e.BACK),this.gl.frontFace(e.CCW),this.gl.enable(e.DEPTH_TEST),this.gl.enable(e.CULL_FACE),this.gl.depthFunc(e.LEQUAL),this.gl.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA)),this.loop()}loop(){this.clear(this.gl),requestAnimationFrame(()=>{this.loop()}),this.app.renderer.render()}clear(t){t.cullFace(t.BACK),t.frontFace(t.CCW),t.enable(t.DEPTH_TEST),t.enable(t.CULL_FACE),t.depthFunc(t.LEQUAL),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.clearColor(1,1,1,1)}}class H{constructor(t){this.app=t}render(){this.app.camera&&this.app.camera.updateViewMatrix(),this.app.scene.geometries.forEach(t=>{t.render()})}}class G{constructor(t){this.geometries=[],this.NGL3dApp=t}add(t){this.geometries.push(t)}}class b{static identity(){let t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t}static perspective(t,e,r,i,s){let a=1/Math.tan(e/2),n=1/(i-s);t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(s+i)*n,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*s*i*n,t[15]=0}static ortho(t,e,r,i,s,a,n){let o=1/(e-r),c=1/(i-s),h=1/(a-n);t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+r)*o,t[13]=(s+i)*c,t[14]=(n+a)*h,t[15]=1}static transpose(t,e){if(t===e){let r=e[1],i=e[2],s=e[3],a=e[6],n=e[7],o=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=r,t[6]=e[9],t[7]=e[13],t[8]=i,t[9]=a,t[11]=e[14],t[12]=s,t[13]=n,t[14]=o}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}static normalMat3(t,e){let r=e[0],i=e[1],s=e[2],a=e[3],n=e[4],o=e[5],c=e[6],h=e[7],d=e[8],f=e[9],M=e[10],x=e[11],C=e[12],R=e[13],_=e[14],w=e[15],L=r*o-i*n,v=r*c-s*n,p=r*h-a*n,m=i*c-s*o,u=i*h-a*o,E=s*h-a*c,P=d*R-f*C,T=d*_-M*C,g=d*w-x*C,V=f*_-M*R,S=f*w-x*R,y=M*w-x*_,l=L*y-v*S+p*V+m*g-u*T+E*P;return l?(l=1/l,t[0]=(o*y-c*S+h*V)*l,t[1]=(c*g-n*y-h*T)*l,t[2]=(n*S-o*g+h*P)*l,t[3]=(s*S-i*y-a*V)*l,t[4]=(r*y-s*g+a*T)*l,t[5]=(i*g-r*S-a*P)*l,t[6]=(R*E-_*u+w*m)*l,t[7]=(_*p-C*E-w*v)*l,t[8]=(C*u-R*p+w*L)*l,t):null}static multiplyVector(t,e){let r=e[0],i=e[1],s=e[2],a=e[3],n=t[0],o=t[1],c=t[2],h=t[3],d=t[4],f=t[5],M=t[6],x=t[7],C=t[8],R=t[9],_=t[10],w=t[11],L=t[12],v=t[13],p=t[14],m=t[15];return[r*n+i*d+s*C+a*L,r*o+i*f+s*R+a*v,r*c+i*M+s*_+a*p,r*h+i*x+s*w+a*m]}static transformVec4(t,e,r){return t[0]=r[0]*e[0]+r[4]*e[1]+r[8]*e[2]+r[12]*e[3],t[1]=r[1]*e[0]+r[5]*e[1]+r[9]*e[2]+r[13]*e[3],t[2]=r[2]*e[0]+r[6]*e[1]+r[10]*e[2]+r[14]*e[3],t[3]=r[3]*e[0]+r[7]*e[1]+r[11]*e[2]+r[15]*e[3],t}static mult(t,e,r){let i=e[0],s=e[1],a=e[2],n=e[3],o=e[4],c=e[5],h=e[6],d=e[7],f=e[8],M=e[9],x=e[10],C=e[11],R=e[12],_=e[13],w=e[14],L=e[15],v=r[0],p=r[1],m=r[2],u=r[3];return t[0]=v*i+p*o+m*f+u*R,t[1]=v*s+p*c+m*M+u*_,t[2]=v*a+p*h+m*x+u*w,t[3]=v*n+p*d+m*C+u*L,v=r[4],p=r[5],m=r[6],u=r[7],t[4]=v*i+p*o+m*f+u*R,t[5]=v*s+p*c+m*M+u*_,t[6]=v*a+p*h+m*x+u*w,t[7]=v*n+p*d+m*C+u*L,v=r[8],p=r[9],m=r[10],u=r[11],t[8]=v*i+p*o+m*f+u*R,t[9]=v*s+p*c+m*M+u*_,t[10]=v*a+p*h+m*x+u*w,t[11]=v*n+p*d+m*C+u*L,v=r[12],p=r[13],m=r[14],u=r[15],t[12]=v*i+p*o+m*f+u*R,t[13]=v*s+p*c+m*M+u*_,t[14]=v*a+p*h+m*x+u*w,t[15]=v*n+p*d+m*C+u*L,t}static scale(t,e,r,i){return t[0]*=e,t[1]*=e,t[2]*=e,t[3]*=e,t[4]*=r,t[5]*=r,t[6]*=r,t[7]*=r,t[8]*=i,t[9]*=i,t[10]*=i,t[11]*=i,t}static rotateY(t,e){let r=Math.sin(e),i=Math.cos(e),s=t[0],a=t[1],n=t[2],o=t[3],c=t[8],h=t[9],d=t[10],f=t[11];return t[0]=s*i-c*r,t[1]=a*i-h*r,t[2]=n*i-d*r,t[3]=o*i-f*r,t[8]=s*r+c*i,t[9]=a*r+h*i,t[10]=n*r+d*i,t[11]=o*r+f*i,t}static rotateX(t,e){let r=Math.sin(e),i=Math.cos(e),s=t[4],a=t[5],n=t[6],o=t[7],c=t[8],h=t[9],d=t[10],f=t[11];return t[4]=s*i+c*r,t[5]=a*i+h*r,t[6]=n*i+d*r,t[7]=o*i+f*r,t[8]=c*i-s*r,t[9]=h*i-a*r,t[10]=d*i-n*r,t[11]=f*i-o*r,t}static rotateZ(t,e){let r=Math.sin(e),i=Math.cos(e),s=t[0],a=t[1],n=t[2],o=t[3],c=t[4],h=t[5],d=t[6],f=t[7];return t[0]=s*i+c*r,t[1]=a*i+h*r,t[2]=n*i+d*r,t[3]=o*i+f*r,t[4]=c*i-s*r,t[5]=h*i-a*r,t[6]=d*i-n*r,t[7]=f*i-o*r,t}static rotate(t,e,r){let i=r[0],s=r[1],a=r[2],n=Math.sqrt(i*i+s*s+a*a),o,c,h,d,f,M,x,C,R,_,w,L,v,p,m,u,E,P,T,g,V,S,y,l;return Math.abs(n)<1e-6?null:(n=1/n,i*=n,s*=n,a*=n,o=Math.sin(e),c=Math.cos(e),h=1-c,d=t[0],f=t[1],M=t[2],x=t[3],C=t[4],R=t[5],_=t[6],w=t[7],L=t[8],v=t[9],p=t[10],m=t[11],u=i*i*h+c,E=s*i*h+a*o,P=a*i*h-s*o,T=i*s*h-a*o,g=s*s*h+c,V=a*s*h+i*o,S=i*a*h+s*o,y=s*a*h-i*o,l=a*a*h+c,t[0]=d*u+C*E+L*P,t[1]=f*u+R*E+v*P,t[2]=M*u+_*E+p*P,t[3]=x*u+w*E+m*P,t[4]=d*T+C*g+L*V,t[5]=f*T+R*g+v*V,t[6]=M*T+_*g+p*V,t[7]=x*T+w*g+m*V,t[8]=d*S+C*y+L*l,t[9]=f*S+R*y+v*l,t[10]=M*S+_*y+p*l,t[11]=x*S+w*y+m*l,t)}static invert(t,e){e===void 0&&(e=t);let r=e[0],i=e[1],s=e[2],a=e[3],n=e[4],o=e[5],c=e[6],h=e[7],d=e[8],f=e[9],M=e[10],x=e[11],C=e[12],R=e[13],_=e[14],w=e[15],L=r*o-i*n,v=r*c-s*n,p=r*h-a*n,m=i*c-s*o,u=i*h-a*o,E=s*h-a*c,P=d*R-f*C,T=d*_-M*C,g=d*w-x*C,V=f*_-M*R,S=f*w-x*R,y=M*w-x*_,l=L*y-v*S+p*V+m*g-u*T+E*P;return l?(l=1/l,t[0]=(o*y-c*S+h*V)*l,t[1]=(s*S-i*y-a*V)*l,t[2]=(R*E-_*u+w*m)*l,t[3]=(M*u-f*E-x*m)*l,t[4]=(c*g-n*y-h*T)*l,t[5]=(r*y-s*g+a*T)*l,t[6]=(_*p-C*E-w*v)*l,t[7]=(d*E-M*p+x*v)*l,t[8]=(n*S-o*g+h*P)*l,t[9]=(i*g-r*S-a*P)*l,t[10]=(C*u-R*p+w*L)*l,t[11]=(f*p-d*u-x*L)*l,t[12]=(o*T-n*V-c*P)*l,t[13]=(r*V-i*T+s*P)*l,t[14]=(R*v-C*m-_*L)*l,t[15]=(d*m-f*v+M*L)*l,!0):!1}static translate(t,e,r,i){t[12]=t[0]*e+t[4]*r+t[8]*i+t[12],t[13]=t[1]*e+t[5]*r+t[9]*i+t[13],t[14]=t[2]*e+t[6]*r+t[10]*i+t[14],t[15]=t[3]*e+t[7]*r+t[11]*i+t[15]}constructor(){this.raw=b.identity()}vtranslate(t){return b.translate(this.raw,t.x,t.y,t.z),this}translate(t,e,r){return b.translate(this.raw,t,e,r),this}rotateY(t){return b.rotateY(this.raw,t),this}rotateX(t){return b.rotateX(this.raw,t),this}rotateZ(t){return b.rotateZ(this.raw,t),this}vscale(t){return b.scale(this.raw,t.x,t.y,t.z),this}scale(t,e,r){return b.scale(this.raw,t,e,r),this}invert(){return b.invert(this.raw),this}resetRotation(){for(let t=0;t<this.raw.length;t++)t>=12&&t<=14||(this.raw[t]=t%5===0?1:0);return this}reset(){for(let t=0;t<this.raw.length;t++)this.raw[t]=t%5===0?1:0;return this}}class U{constructor(t=0,e=0,r=0){this.x=t,this.y=e,this.z=r}magnitude(t){if(t===void 0)return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);let e=t.x-this.x,r=t.y-this.y,i=t.y-this.z;return Math.sqrt(e*e+r*r+i*i)}normalize(){let t=this.magnitude();return this.x/=t,this.y/=t,this.z/=t,this}set(t,e,r){return this.x=t,this.y=e,this.z=r,this}multiScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}getArray(){return[this.x,this.y,this.z]}getFloatArray(){return new Float32Array([this.x,this.y,this.z])}clone(){return new U(this.x,this.y,this.z)}}const N=class N{constructor(){this.position=new U(0,0,0),this.scale=new U(1,1,1),this.rotation=new U(0,0,0),this.matView=new b,this.matNormal=new Float32Array(9),this.forward=new Float32Array(4),this.up=new Float32Array(4),this.right=new Float32Array(4)}updateMatrix(){return this.matView.reset().vtranslate(this.position).rotateX(this.rotation.x*N.deg2Rad).rotateZ(this.rotation.z*N.deg2Rad).rotateY(this.rotation.y*N.deg2Rad).vscale(this.scale),b.normalMat3(this.matNormal,this.matView.raw),b.transformVec4(this.forward,[0,0,1,0],this.matView.raw),b.transformVec4(this.up,[0,1,0,0],this.matView.raw),b.transformVec4(this.right,[1,0,0,0],this.matView.raw),this.matView.raw}updateDirection(){return b.transformVec4(this.forward,[0,0,1,0],this.matView.raw),b.transformVec4(this.up,[0,1,0,0],this.matView.raw),b.transformVec4(this.right,[1,0,0,0],this.matView.raw),this}getViewMatrix(){return this.matView.raw}getNormalMatrix(){return this.matNormal}reset(){this.position.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0)}};N.deg2Rad=Math.PI/180;let O=N;class W{constructor(t,e=45,r=.1,i=100){this.projectionMatrix=new Float32Array(16);var s=t.canvas.width/t.canvas.height;b.perspective(this.projectionMatrix,e||45,s,r||.1,i||100),this.transform=new O,this.viewMatrix=new Float32Array(16),this.mode=1}panX(t){this.mode!==1&&(this.updateViewMatrix(),this.transform.position.x+=this.transform.right[0]*t,this.transform.position.y+=this.transform.right[1]*t,this.transform.position.z+=this.transform.right[2]*t)}panY(t){this.updateViewMatrix(),this.transform.position.y+=this.transform.up[1]*t,this.mode!==1&&(this.transform.position.x+=this.transform.up[0]*t,this.transform.position.z+=this.transform.up[2]*t)}panZ(t){this.updateViewMatrix(),this.mode===1?this.transform.position.z+=t:(this.transform.position.x+=this.transform.forward[0]*t,this.transform.position.y+=this.transform.forward[1]*t,this.transform.position.z+=this.transform.forward[2]*t)}updateViewMatrix(){return this.mode===0?this.transform.matView.reset().vtranslate(this.transform.position).rotateX(this.transform.rotation.x*O.deg2Rad).rotateY(this.transform.rotation.y*O.deg2Rad):this.transform.matView.reset().rotateX(this.transform.rotation.x*O.deg2Rad).rotateY(this.transform.rotation.y*O.deg2Rad).vtranslate(this.transform.position),this.transform.updateDirection(),b.invert(this.viewMatrix,this.transform.matView.raw),this.viewMatrix}}class Q{constructor(t,e){this.canvas=t.canvas,this.camera=e,this.rotateRate=-300,this.panRate=5,this.zoomRate=200,this.offsetX=10,this.offsetY=10,this.initX=0,this.initY=0,this.prevX=0,this.prevY=0,this.onUpHandler=r=>this.onMouseUp(r),this.onMoveHandler=r=>{this.onMouseMove(r)},this.canvas.addEventListener("mousedown",r=>{this.onMouseDown(r)}),this.canvas.addEventListener("mousewheel",r=>{this.onMouseWheel(r)})}getMouseVec2(t){return{x:t.pageX-this.offsetX,y:t.pageY-this.offsetY}}onMouseDown(t){this.initX=this.prevX=t.pageX-this.offsetX,this.initY=this.prevY=t.pageY-this.offsetY,this.canvas.addEventListener("mouseup",this.onUpHandler),this.canvas.addEventListener("mousemove",this.onMoveHandler)}onMouseUp(t){this.canvas.removeEventListener("mouseup",this.onUpHandler),this.canvas.removeEventListener("mousemove",this.onMoveHandler)}onMouseWheel(t){var e=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail));this.camera.panZ(e*(this.zoomRate/this.canvas.height))}onMouseMove(t){var e=t.pageX-this.offsetX,r=t.pageY-this.offsetY,i=e-this.prevX,s=r-this.prevY;t.shiftKey?(this.camera.panX(-i*(this.panRate/this.canvas.width)),this.camera.panY(s*(this.panRate/this.canvas.height))):(this.camera.transform.rotation.y+=i*(this.rotateRate/this.canvas.width),this.camera.transform.rotation.x+=s*(this.rotateRate/this.canvas.height)),this.prevX=e,this.prevY=r}}var F=(A=>(A.ATTR_POSITION_NAME="a_position",A[A.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",A.ATTR_NORMAL_NAME="a_norm",A[A.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",A.ATTR_UV_NAME="a_uv",A[A.ATTR_UV_LOC=2]="ATTR_UV_LOC",A.ATTR_COLOR_NAME="a_color",A[A.ATTR_COLOR_LOC=4]="ATTR_COLOR_LOC",A))(F||{});class q{constructor(t,e){this.position=t.getAttribLocation(e,"a_position"),this.norm=t.getAttribLocation(e,"a_norm"),this.uv=t.getAttribLocation(e,"a_uv")}}class Z{constructor(t,e){this.perspective=t.getUniformLocation(e,"uPMatrix"),this.modelMatrix=t.getUniformLocation(e,"uMVMatrix"),this.cameraMatrix=t.getUniformLocation(e,"uCameraMatrix"),this.mainTexture=t.getUniformLocation(e,"uMainTex")}}class I{constructor(t,e,r,i=!0){if(this.gl=t,this.vShader=B.CreateShader(t,t.VERTEX_SHADER,e),this.fShader=B.CreateShader(t,t.FRAGMENT_SHADER,r),this.vShader&&this.fShader){let s=B.CreateProgram(t,this.vShader,this.fShader,i);if(s){this.program=s,t.useProgram(this.program),this.attribLoc=new q(t,this.program),this.uniformLoc=new Z(t,this.program);return}else{console.error("vertex fragment shader error");return}}else{console.error("vertex fragment shader error");return}}activate(){return this.gl.useProgram(this.program),this}deactivate(){return this.gl.useProgram(null),this}dispose(){this.gl.getParameter(this.gl.CURRENT_PROGRAM)===this.program&&this.gl.useProgram(null),this.gl.deleteProgram(this.program)}setPerspective(t){return this.gl.uniformMatrix4fv(this.uniformLoc.perspective,!1,t),this}setModelMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.modelMatrix,!1,t),this}setCameraMatrix(t){return this.gl.uniformMatrix4fv(this.uniformLoc.cameraMatrix,!1,t),this}preRender(){}renderModel(t){return this.setModelMatrix(t.transform.getViewMatrix()),this.gl.bindVertexArray(t.vao.vao),t.vao.noCulling&&this.gl.disable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.enable(this.gl.BLEND),t.vao.indexCount?this.gl.drawElements(t.vao.drawMode,t.vao.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(t.vao.drawMode,0,t.vao.vertexCount),this.gl.bindVertexArray(null),t.vao.noCulling&&this.gl.enable(this.gl.CULL_FACE),t.vao.doBlending&&this.gl.disable(this.gl.BLEND),this}}class B{static CreateProgram(t,e,r,i=!0){const s=t.createProgram();if(s===null)return null;if(t.attachShader(s,e),t.attachShader(s,r),t.bindAttribLocation(s,0,"a_position"),t.bindAttribLocation(s,1,"a_norm"),t.bindAttribLocation(s,2,"a_uv"),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){const a=t.getProgramInfoLog(s);return console.log("Failed to link program: "+a),t.deleteProgram(s),t.deleteShader(r),t.deleteShader(e),null}return i&&(t.validateProgram(s),!t.getProgramParameter(s,t.VALIDATE_STATUS))?(console.error("Failed to validate program",t.getProgramInfoLog(s)),t.deleteProgram(s),t.deleteShader(r),t.deleteShader(e),null):(t.deleteShader(r),t.deleteShader(e),s)}static CreateShader(t,e,r){const i=t.createShader(e);return i===null?null:(t.shaderSource(i,r),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.log(t.getShaderInfoLog(i)),t.deleteShader(i),null))}}class Y{constructor(t,e,r,i,s,a){this.noCulling=!0,this.doBlending=!0,this.name=e,this.drawMode=t.TRIANGLES,this.vao=t.createVertexArray(),t.bindVertexArray(this.vao),r!==void 0&&r!=null&&(this.bufVertices=t.createBuffer(),this.vertexComponentLen=3,this.vertexCount=r.length/this.vertexComponentLen,t.bindBuffer(t.ARRAY_BUFFER,this.bufVertices),t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.STATIC_DRAW),t.enableVertexAttribArray(F.ATTR_POSITION_LOC),t.vertexAttribPointer(F.ATTR_POSITION_LOC,3,t.FLOAT,!1,0,0)),s!=null&&(this.bufNormals=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.bufNormals),t.bufferData(t.ARRAY_BUFFER,new Float32Array(s),t.STATIC_DRAW),t.enableVertexAttribArray(F.ATTR_NORMAL_LOC),t.vertexAttribPointer(F.ATTR_NORMAL_LOC,3,t.FLOAT,!1,0,0)),a!=null&&(this.bufUV=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.bufUV),t.bufferData(t.ARRAY_BUFFER,new Float32Array(a),t.STATIC_DRAW),t.enableVertexAttribArray(F.ATTR_UV_LOC),t.vertexAttribPointer(F.ATTR_UV_LOC,2,t.FLOAT,!1,0,0)),i!=null&&(this.bufIndex=t.createBuffer(),this.indexCount=i.length,t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.bufIndex),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(i),t.STATIC_DRAW)),t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null)}}class z{constructor(t){this.transform=new O,this.vao=t}setScale(t,e,r){return this.transform.scale.set(t,e,r),this}setPosition(t,e,r){return this.transform.position.set(t,e,r),this}setRotation(t,e,r){return this.transform.rotation.set(t,e,r),this}addScale(t,e,r){return this.transform.scale.x+=t,this.transform.scale.y+=e,this.transform.scale.y+=e,this}addPosition(t,e,r){return this.transform.position.x+=t,this.transform.position.y+=e,this.transform.position.z+=r,this}addRotation(t,e,r){return this.transform.rotation.x+=t,this.transform.rotation.y+=e,this.transform.rotation.z+=r,this}preRender(){return this.transform.updateMatrix(),this}}class D{constructor(t){this.scene=t,this.scene.add(this)}render(){}}class j extends I{constructor(t,e,r,i,s){if(super(t,e,r),this.program){this.setPerspective(s),t.useProgram(this.program);let a=t.getUniformLocation(this.program,"uColor");t.uniform3fv(a,i)}}renderModel(t){return this.setModelMatrix(t.transform.getViewMatrix()),this.gl.bindVertexArray(t.vao.vao),t.vao.indexCount?this.gl.drawElements(t.vao.drawMode,t.vao.indexCount,this.gl.UNSIGNED_SHORT,0):this.gl.drawArrays(t.vao.drawMode,0,t.vao.vertexCount),this.gl.bindVertexArray(null),this}}class K extends D{constructor(t){super(t.scene),this.v=`#version 300 es
    in vec3 a_position;	//Standard position data.
    layout(location=4) in float a_color;	//Will hold the 4th custom position of the custom position buffer.

    uniform mat4 uPMatrix;
    uniform mat4 uMVMatrix;
    uniform mat4 uCameraMatrix;

    uniform vec3 uColor[4];	//Color Array

    out lowp vec4 color;	//Color to send to fragment shader.

    void main(void) {
        color = vec4(uColor[ int(a_color) ],1.0); //Using the 4th float as a color index.
        gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(a_position, 1.0);
    }
    `,this.f=`#version 300 es
    precision mediump float;

    in vec4 color;
    out vec4 finalColor;

    void main(void) { finalColor = color; }
    `,this.ro=0,this.t=0,this.app=t,this.gl=t.canvas.gl,this.initShader(this.gl)}GetVAO(t=!0){let e=[],r=1.8,i=10,s=r/i,a=r/2,n;for(let c=0;c<=i;c++)n=-a+c*s,e.push(n),e.push(0),e.push(a),e.push(0),e.push(n),e.push(0),e.push(-a),e.push(0),n=a-c*s,e.push(-a),e.push(0),e.push(n),e.push(0),e.push(a),e.push(0),e.push(n),e.push(0);t&&(e.push(-1.1),e.push(0),e.push(0),e.push(1),e.push(1.1),e.push(0),e.push(0),e.push(1),e.push(0),e.push(-1.1),e.push(0),e.push(2),e.push(0),e.push(1.1),e.push(0),e.push(2),e.push(0),e.push(0),e.push(-1.1),e.push(3),e.push(0),e.push(0),e.push(1.1),e.push(3)),this.vao=new Y(this.gl,"grid",e),this.vao.drawMode=this.gl.LINES,this.vao.vao=this.gl.createVertexArray(),this.vao.vertexComponentLen=4,this.vao.vertexCount=e.length/this.vao.vertexComponentLen;let o=Float32Array.BYTES_PER_ELEMENT*this.vao.vertexComponentLen;return this.vao.bufVertices=this.gl.createBuffer(),this.gl.bindVertexArray(this.vao.vao),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vao.bufVertices),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(e),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(F.ATTR_POSITION_LOC),this.gl.enableVertexAttribArray(F.ATTR_COLOR_LOC),this.gl.vertexAttribPointer(F.ATTR_POSITION_LOC,3,this.gl.FLOAT,!1,o,0),this.gl.vertexAttribPointer(F.ATTR_COLOR_LOC,1,this.gl.FLOAT,!1,o,Float32Array.BYTES_PER_ELEMENT*3),this.gl.bindVertexArray(null),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.vao}initShader(t){const e=[.8,.8,.8,1,0,0,0,1,0,0,0,1];this.shader=new j(t,this.v,this.f,e,this.app.camera.projectionMatrix),this.vao=this.GetVAO(),this.model=new z(this.vao)}render(){this.shader.activate().setCameraMatrix(this.app.camera.viewMatrix).renderModel(this.model.preRender()),this.t=.01}}let k=class extends I{constructor(t,e,r,i){if(super(t,e,r),this.pMatrix=i,this.program){t.useProgram(this.program),this.setPerspective(i);let s=t.getUniformLocation(this.program,"uColor");t.uniform3fv(s,new Float32Array([.8,.8,.8,1,0,0,0,1,0,0,0,1])),t.useProgram(null)}}set(t,e){return this}};class $ extends D{constructor(t){super(t.scene),this.v=`#version 300 es

        in vec3 a_position;	// Standard position data.
        in vec2 a_uv;

        layout(location=4) in float a_color;

        uniform mat4 uPMatrix;
        uniform mat4 uMVMatrix;
        uniform mat4 uCameraMatrix;

        uniform vec3 uColor[4];

        out vec2 uv;
        out lowp vec4 color;

        void main(void) {
            uv = a_uv;
            // uv = vec2(0.5, 1);

            color = vec4(uColor[ int(a_color) ], 1.0);

            gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(a_position, 1.0);
        }
    `,this.f=`#version 300 es

    precision mediump float;

    in vec2 uv;
    in vec4 color;

    out vec4 finalColor;

    void main(void) {

        //Square Border
        float c = (uv.x <= 0.1 || uv.x >=0.9 || uv.y <= 0.1 || uv.y >= 0.9)? 0.0 : 1.0;

        // finalColor = vec4(1.0, uv.x, uv.y ,1.0-c);
        // finalColor = vec4(color.xyz, 1.0 -c);

        // //Circle
        // //  /*
        vec2 delta = uv - vec2(0.5,0.5); //delta position from center;
        float dist = 0.5 - sqrt(delta.x*delta.x + delta.y*delta.y);

        float border = 0.01;
        float a = 0.0;
        if(dist > border) a = 1.0;
        else if(dist > 0.0) a = dist / border;

        finalColor = vec4(0.0,0.0,0.0, a);
        // //  */
    }
    `,this.size=20.5,this.rotation=0,this.app=t;let e=[-.5,.5,0,-.5,-.5,0,.5,-.5,0,.5,.5,0],r=[0,0,0,1,1,1,1,0],i=[0,1,2,2,3,0];this.shader=new k(this.app.canvas.gl,this.v,this.f,this.app.camera.projectionMatrix),this.vao=new Y(t.canvas.gl,"Quad",e,i,void 0,r),this.vao.noCulling=!0,this.vao.doBlending=!0,this.model=new z(this.vao)}render(){this.model.transform.position=new U(0,0,this.model.transform.position.z+-.005),this.shader.activate(),this.shader.setPerspective(this.shader.pMatrix),this.shader.setCameraMatrix(this.app.camera.viewMatrix),this.shader.renderModel(this.model.preRender())}}class J extends I{constructor(t,e,r,i){super(t,e,r),this.pMatrix=i,this.program&&(this.setPerspective(i),this.uPointSize=t.getUniformLocation(this.program,"uPointSize"),this.uAngle=t.getUniformLocation(this.program,"uAngle"),t.useProgram(null))}set(t,e){return this.gl.uniform1f(this.uAngle,e),this.gl.uniform1f(this.uPointSize,t),this}}class tt extends D{constructor(t){super(t.scene),this.v=`#version 300 es

        in vec3 a_position;	//Standard position data.
        in vec2 a_uv;

        uniform mat4 uPMatrix;
        uniform mat4 uMVMatrix;
        uniform mat4 uCameraMatrix;

        out vec2 uv;

        void main(void) {
            uv = a_uv;
            gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(a_position, 1.0);
        }
    `,this.f=`#version 300 es

    precision mediump float;
    in vec2 uv;

    out vec4 finalColor;

    void main(void) {

        //Square Border
        float c = (uv.x <= 0.1 || uv.x >=0.9 || uv.y <= 0.1 || uv.y >= 0.9)? 0.0 : 1.0;

        finalColor = vec4(c,c,c,1.0-c);
        // finalColor = vec4(1.0, 0.0, 1.0, 1.0);

        // //Circle
        // //  /*
        // vec2 delta = uv - vec2(0.5,0.5); //delta position from center;
        // float dist = 0.5 - sqrt(delta.x*delta.x + delta.y*delta.y);

        // float border = 0.01;
        // float a = 0.0;
        // if(dist > border) a = 1.0;
        // else if(dist > 0.0) a = dist / border;

        // finalColor = vec4(0.0,0.0,0.0,a);
        // //  */
    }
    `,this.size=20.5,this.rotation=0,this.app=t;let e=[-.5,.5,0,-.5,-.5,0,.5,-.5,0,.5,.5,0],r=[0,0,0,1,1,1,1,0],i=[0,1,2,2,3,0];for(let s=0;s<10;s++){let a=.2+.8*Math.random(),n=a*.5,o=Math.PI*2*Math.random(),c=n*Math.cos(o),h=n*Math.sin(o),d=-2.5+Math.random()*5,f=-2.5+Math.random()*5,M=2.5-Math.random()*5,x=s*4;e.push(d-c,f+n,M-h),e.push(d-c,f-n,M-h),e.push(d+c,f-n,M+h),e.push(d+c,f+n,M+h),r.push(0,0,0,1,1,1,1,0),i.push(x,x+1,x+2,x+2,x+3,x)}this.shader=new J(this.app.canvas.gl,this.v,this.f,this.app.camera.projectionMatrix),this.vao=new Y(t.canvas.gl,"MultiQuad",e,i,void 0,r),this.vao.noCulling=!0,this.vao.doBlending=!0,this.model=new z(this.vao)}render(){this.size+=.01,this.model.transform.position=new U(0,0,this.model.transform.position.z+-.01),this.shader.activate(),this.shader.setPerspective(this.shader.pMatrix),this.shader.setCameraMatrix(this.app.camera.viewMatrix),this.shader.renderModel(this.model.preRender())}}class rt{constructor(t){console.log("id: "+t+", NGL3dApp 07-1 Init!!!!!");const e=document.getElementById(t);e&&(this.host=e),this.scene=new G(this),this.renderer=new H(this),this.canvas=new X(this),this.camera=new W(this.canvas.gl),this.camera.transform.position.set(0,1,3),this.cameraCtrl=new Q(this.canvas.gl,this.camera),new K(this),new $(this),new tt(this)}}export{rt as NGL3dApp};
