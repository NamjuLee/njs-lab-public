import{p as _,c as v,l as Y,m as x,f as q,a as H,b as W,d as X,e as k}from"./mat4-DRgVL_5a.js";import{f,c as R,s as z}from"./vec3-k28HwHx8.js";import{f as Z}from"./vec2-Cb2c_g8h.js";import{c as C,l as j,a as V}from"./index-BXj1RPVk.js";import{M as S}from"./index-B2RTyIEO.js";import"./index-BcT8Qysm.js";import{a as N}from"./index-C0vqmb3-.js";class ${constructor(e){this.pos=[0,0],this.mNormalized=new Float32Array([0,0]),this.isDown=!1,this.controller=e}init(){this.appendEvent()}appendEvent(){this.controller.app.renderer.canvas.addEventListener("drag",e=>{},!1),this.controller.app.renderer.canvas.addEventListener("click",e=>{},!1),this.controller.app.renderer.canvas.addEventListener("dblclick",e=>{},!1),this.controller.app.renderer.canvas.addEventListener("drag",e=>{},!0),this.controller.app.renderer.canvas.addEventListener("mouseup",e=>{},!1),this.controller.app.renderer.canvas.addEventListener("mousedown",e=>{this.isDown=!0,this.pos[0]=e.offsetX,this.pos[1]=e.offsetY},!1),this.controller.app.renderer.canvas.addEventListener("mouseup",e=>{this.isDown=!1},!1),this.controller.app.renderer.canvas.addEventListener("mousemove",e=>{if(this.isDown){const i=this.pos[0]-e.offsetX,r=this.pos[1]-e.offsetY;this.controller.app.renderer.cameraController.moveCamera(i,r),this.pos[0]=e.offsetX,this.pos[1]=e.offsetY}else{const i=this.controller.app.renderer.canvas.getBoundingClientRect();this.mNormalized[0]=(e.clientX-i.left)/this.controller.app.renderer.canvas.width,this.mNormalized[1]=(e.clientY-i.top)/this.controller.app.renderer.canvas.height}},!1),this.controller.app.renderer.canvas.addEventListener("wheel",e=>{this.controller.app.renderer.cameraController.zoomWheel(e.deltaY)},!1),window.addEventListener("keydown",e=>{this.controller.keyboard(e)},!1)}}class J{constructor(e){this.app=e,this.eventController=new $(this)}init(){this.eventController.init()}keyboard(e){e.key==="p"&&this.app.renderer.cameraController.shiftCamera()}}class F{constructor(e=100,i=100,r=[2,2,4],s=[0,0,0],n=[0,1,0],a=5){this.viewMatrix=v(),this.projectionMatrix=v(),this.viewProjectionMatrix=v(),this.zoomMax=100,this.zoomSpeed=2,this.near=.01,this.far=1e4,this.mvpMatrix=v(),this.eye=f(0,0,0),this.center=f(0,0,0),this.up=f(0,1,0),this.type="camera",this.angleXY=Math.PI,this.angleZ=Math.PI*.25,this.distance=1,this.distance=a,this.width=e,this.height=i,this.respectRatio=e/i,this.eye=r,this.center=s,this.up=n}zoom(e){}update(){Y(this.viewMatrix,this.eye,this.center,this.up),x(this.viewProjectionMatrix,this.projectionMatrix,this.viewMatrix)}}class K extends F{constructor(e=100,i=100,r=[2,2,4],s=[0,0,0],n=[0,1,0],a=3){super(e,i,r,s,n,a),this.type="CameraPerspective",this.init()}init(){_(this.projectionMatrix,2*Math.PI/5,this.respectRatio,this.near,this.far),this.update()}zoom(e){this.distance+=e*.01}}class Q extends F{constructor(e=100,i=100,r=[0,0,1],s=[0,0,0],n=[0,1,0],a=300.1){super(e,i,r,s,n,a),this.type="CameraOrth",this.init()}init(){D(this.projectionMatrix,this.width,this.height,this.near,this.far,this.distance),this.angleXY=0,this.angleZ=0,this.update()}zoom(e){this.distance+=e+50/this.distance,this.distance<1e-6&&(this.distance=1e-6),this.distance>1e5&&(this.distance=1e5),D(this.projectionMatrix,this.width,this.height,this.near,this.far,this.distance)}}const D=(t,e,i,r,s,n)=>(t[0]=2/e*n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2/i*n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=-2/(s-r),t[11]=0,t[12]=0,t[13]=0,t[14]=.1,t[15]=1,t);class ee{constructor(e){this.modelMatrix=v(),this.mvpMatrix=v(),this.rotation=f(0,0,0),this.translation=f(0,0,0),this.screen2=Z(0,0),this.solution=e,this.canvas=e.canvas;const i=f(2.6451475620269775,3.130298137664795,2.864337205886841),r=f(0,0,0),s=f(0,0,1);this.cameraPerspective=new K(this.canvas.width,this.canvas.height,i,r,s),this.camera=this.cameraPerspective,this.arcRotation(0,0),this.cameraOrth=new Q(this.canvas.width,this.canvas.height),this.camera=this.cameraOrth,this.update()}update(){this.camera.update(),te(this.modelMatrix,this.translation,this.rotation),x(this.mvpMatrix,this.camera.viewProjectionMatrix,this.modelMatrix)}rotateZ(e=.1){this.rotation[2]+=e,this.update()}translateX(e=.1){this.translation[0]+=e,this.update()}get getMatrix(){return this.mvpMatrix}shiftCamera(){this.camera===this.cameraPerspective?this.camera=this.cameraOrth:this.camera=this.cameraPerspective,this.update()}moveCamera(e,i){this.camera===this.cameraPerspective?this.arcRotation(e,i):this.pan(e,i)}arcRotation(e,i){e=e*-.01,i=i*-.01,this.camera.angleXY+=e,this.camera.angleZ+=i,this.camera.eye[0]=this.camera.center[0]+Math.sin(this.camera.angleXY)*Math.cos(this.camera.angleZ)*this.camera.distance,this.camera.eye[1]=this.camera.center[1]+Math.cos(this.camera.angleXY)*Math.cos(this.camera.angleZ)*this.camera.distance,this.camera.eye[2]=this.camera.center[2]+Math.sin(this.camera.angleZ)*this.camera.distance,this.update()}zoomWheel(e){this.camera===this.cameraPerspective?(this.camera.zoom(e),this.arcRotation(0,0)):this.camera.zoom(e),this.update()}pan(e,i){this.camera.center[0]+=e/this.camera.distance,this.camera.center[1]-=i/this.camera.distance,this.camera.eye[0]+=e/this.camera.distance,this.camera.eye[1]-=i/this.camera.distance,this.update()}}const te=(t,e=[0,0,0],i=[0,0,0],r=[1,1,1])=>{const s=v(),n=v(),a=v(),p=v(),P=v();q(p,e),H(s,i[0]),W(n,i[1]),X(a,i[2]),k(P,r),x(t,s,P),x(t,n,t),x(t,a,t),x(t,p,t)};var I=(t=>(t.PointList="point-list",t.LineList="line-list",t.LineStrip="line-strip",t.TriangleList="triangle-list",t.TriangleStrip="triangle-strip",t))(I||{});class ie{constructor(e){this.PrimitiveTopology=I,this.renderer=e}async initWebGPU(){if(!navigator.gpu)throw new Error("Not Support WebGPU");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No Adapter Found");const i=await e.requestDevice();this.ctx=this.renderer.canvas.getContext("webgpu"),this.format="bgra8unorm",this.ctx.configure({device:i,format:this.format,alphaMode:"opaque"}),this.device=i,this.textureView=this.ctx.getCurrentTexture().createView(),this.depthTexture=this.device.createTexture({size:[this.ctx.canvas.width,this.ctx.canvas.height,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.renderPassDescription={colorAttachments:[{view:this.textureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTexture.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}}}destroy(){this.device.destroy()}}class re{constructor(e){this.isAnimation=!0,this.loop=()=>{this.isAnimation&&(this.requestAni=requestAnimationFrame(this.loop)),this.drawing()},this.app=e,this.canvas=document.createElement("canvas"),this.canvas.width=this.app.divHost.clientWidth,this.canvas.height=this.app.divHost.clientHeight,this.app.divHost.appendChild(this.canvas),this.webGPU=new ie(this)}async init(){await this.webGPU.initWebGPU(),this.cameraController=new ee(this),this.requestAni=requestAnimationFrame(this.loop)}drawing(){this.app.scene.render()}destroy(){for(this.webGPU.destroy(),cancelAnimationFrame(this.requestAni);this.app.divHost.lastElementChild;)this.app.divHost.removeChild(this.app.divHost.lastElementChild)}}let se=class{constructor(){this.streetOSM=[],this.renderLines=(e,i)=>{const r=[],s=[],n=15478749591872748e-9,a=4766690415614613e-9,p=1e-4;let P=0,M=0,w=0;for(let b=0;b<e.length;++b){const l=e[b];for(let c=0;c<l.length;++c)for(let u=0;u<l[c].length-1;++u){const[y,U]=S(l[c][u][0],l[c][u][1]),[O,B]=S(l[c][u+1][0],l[c][u+1][1]);P+=y,M+=U,w+=1;const d=(y-n)*p,o=(U-a)*p,m=(O-n)*p,h=(B-a)*p;r.push(d,o,0),s.push(i[0],i[1],i[2]),r.push(m,h,0),s.push(i[0],i[1],i[2]),u<l[c].length-1}}console.log(r),console.log(P/w,M/w),this.pos=new Float32Array(r.flat()),this.colors=new Float32Array(s.flat())}}async init(){await N("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then(e=>{for(let i=0;i<e.features.length;++i)this.streetOSM.push(e.features[i].geometry.coordinates);this.renderLines(this.streetOSM,[0,1,1])})}};class L{constructor(e){this.scene=e,this.webGPU=e.app.renderer.webGPU,this.scene.objects.push(this)}async initPipeline(){}update(){}render(){}}var ne=`struct Uniforms {
    mvpMatrix : mat4x4<f32>,
    

};
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct MouseData {
    mousePosition : vec3<f32>
};

@binding(0) @group(1) var<uniform> mouseData: MouseData;
@binding(0) @group(2) var<uniform> frame : u32;

struct Output {
    @builtin(position) Position : vec4<f32>,
    @location(0) vColor : vec4<f32>,
    @location(1) vPos : vec4<f32>,
};

@vertex
fn vs_main(@location(0) pos: vec4<f32>, @location(1) color: vec4<f32>) -> Output {
    var output: Output;
    let thePos: vec4<f32> = uniforms.mvpMatrix * pos;

    output.Position = vec4<f32>(thePos);
    output.vPos = vec4<f32>(1,1,1,1);

    return output;
}

struct Input {
    @builtin(position) Position : vec4<f32>,
    @location(0) vColor : vec4<f32>,
    @location(1) vPos : vec4<f32>,
};

@fragment

fn fs_main(@location(0) vColor: vec4<f32>) -> @location(0) vec4<f32> {
    
    
    
    

    
    
    
    

    

    
    
    

    
    
    

    
    
    
    
    
    

    var outputColor: vec4<f32> = vec4<f32>((sin((mouseData.mousePosition.z + 0.5) * 2) * 0.5) + 0.5, mouseData.mousePosition.xy, 1);
    
    return outputColor;
    
}`;class ae extends L{constructor(e){super(e),this.isRenderable=!1,this.numberOfVertices=0,this.isAnimation=!1,this.translation=f(0,0,0),this.rotation=f(0,0,0),this.t=0,this.initPipeline()}async initPipeline(){this.geometry=new se,await this.geometry.init(),console.log(this.geometry),this.numberOfVertices=this.geometry.pos.length/3,this.vertexBuffer=C(this.webGPU.device,this.geometry.pos),this.colorBuffer=C(this.webGPU.device,this.geometry.colors);const e=await j(ne);this.pipeline=this.webGPU.device.createRenderPipeline({layout:"auto",vertex:{module:this.webGPU.device.createShaderModule({code:e}),entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,format:"float32x3",offset:0}]},{arrayStride:12,attributes:[{shaderLocation:1,format:"float32x3",offset:0}]}]},fragment:{module:this.webGPU.device.createShaderModule({code:e}),entryPoint:"fs_main",targets:[{format:this.webGPU.format}]},primitive:{topology:this.webGPU.PrimitiveTopology.PointList},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.modelMatrix=v(),this.rotation=f(0,0,0),this.uniformBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.frameBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.uniformBindGroup=this.webGPU.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer,offset:0,size:64}}]}),this.uniformBindGroup1=this.webGPU.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.mouseBuffer}}]}),this.textureView=this.webGPU.ctx.getCurrentTexture().createView();const i=this.webGPU.device.createTexture({size:[this.webGPU.ctx.canvas.width,this.webGPU.ctx.canvas.height,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT});this.renderPassDescription={colorAttachments:[{view:this.textureView,clearValue:{r:.2,g:.247,b:.314,a:1},loadValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:i.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},this.isRenderable=!0}async render(){this.isRenderable&&(this.webGPU.device.queue.writeBuffer(this.mouseBuffer,0,new Float32Array([this.scene.app.controller.eventController.mNormalized[0],this.scene.app.controller.eventController.mNormalized[1],this.t])),this.webGPU.device.queue.writeBuffer(this.frameBuffer,0,new Float32Array([this.t,0])),V(this.modelMatrix,this.translation,this.rotation),x(this.modelMatrix,this.webGPU.renderer.cameraController.getMatrix,this.modelMatrix),this.webGPU.device.queue.writeBuffer(this.uniformBuffer,0,this.modelMatrix),this.webGPU.renderPass.setPipeline(this.pipeline),this.webGPU.renderPass.setVertexBuffer(0,this.vertexBuffer),this.webGPU.renderPass.setVertexBuffer(1,this.colorBuffer),this.webGPU.renderPass.setBindGroup(0,this.uniformBindGroup),this.webGPU.renderPass.setBindGroup(1,this.uniformBindGroup1),this.webGPU.renderPass.draw(this.numberOfVertices),this.t+=.01)}}class oe{constructor(){this.streetOSM=[],this.renderLines=(e,i)=>{const r=[],s=[],n=15478749591872748e-9,a=4766690415614613e-9,p=1e-4;let P=0,M=0,w=0;for(let b=0;b<e.length;++b){const l=e[b];for(let c=0;c<l.length;++c)for(let u=0;u<l[c].length-1;++u){const[y,U]=S(l[c][u][0],l[c][u][1]),[O,B]=S(l[c][u+1][0],l[c][u+1][1]);P+=y,M+=U,w+=1;const d=(y-n)*p,o=(U-a)*p,m=(O-n)*p,h=(B-a)*p;r.push(d,o,0),s.push(i[0],i[1],i[2]),r.push(m,h,0),s.push(i[0],i[1],i[2]),u<l[c].length-1}}console.log(r),console.log(P/w,M/w),this.pos=new Float32Array(r.flat()),this.colors=new Float32Array(s.flat())}}async init(){await N("https://raw.githubusercontent.com/NamjuLee/data/master/Paris/street_osm.geojson").then(e=>{for(let i=0;i<e.features.length;++i)this.streetOSM.push(e.features[i].geometry.coordinates);this.renderLines(this.streetOSM,[0,1,1])})}}var he=`struct Uniforms {
    mvpMatrix : mat4x4<f32>,
    

};
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct MouseData {
    mousePosition : vec3<f32>
};

@binding(0) @group(1) var<uniform> mouseData: MouseData;
@binding(0) @group(2) var<uniform> frame : u32;

struct Output {
    @builtin(position) Position : vec4<f32>,
    @location(0) vColor : vec4<f32>,
    @location(1) vPos : vec4<f32>,
};

@vertex
fn vs_main(@location(0) pos: vec4<f32>, @location(1) color: vec4<f32>) -> Output {
    var output: Output;
    output.Position = uniforms.mvpMatrix * pos;
    output.vPos = vec4<f32>(1,1,1,1);

    return output;
}

struct Input {
    @builtin(position) Position : vec4<f32>,
    @location(0) vColor : vec4<f32>,
    @location(1) vPos : vec4<f32>,
};

@fragment

fn fs_main(@location(0) vColor: vec4<f32>, @location(1) vPos: vec4<f32>) -> @location(0) vec4<f32> {
    
    
    
    

    

    
    
    

    var outputColor: vec4<f32> = vec4<f32>(mouseData.mousePosition.xy , sin(mouseData.mousePosition.z), 1.0);
    
    return outputColor;
    
}`;class ce extends L{constructor(e){super(e),this.isRenderable=!1,this.numberOfVertices=0,this.isAnimation=!1,this.translation=f(0,0,0),this.rotation=f(0,0,0),this.t=0,this.initPipeline()}async initPipeline(){this.geometry=new oe,await this.geometry.init(),console.log(this.geometry),this.numberOfVertices=this.geometry.pos.length/3,this.vertexBuffer=C(this.webGPU.device,this.geometry.pos),this.colorBuffer=C(this.webGPU.device,this.geometry.colors);const e=await j(he);this.pipeline=this.webGPU.device.createRenderPipeline({layout:"auto",vertex:{module:this.webGPU.device.createShaderModule({code:e}),entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,format:"float32x3",offset:0}]},{arrayStride:12,attributes:[{shaderLocation:1,format:"float32x3",offset:0}]}]},fragment:{module:this.webGPU.device.createShaderModule({code:e}),entryPoint:"fs_main",targets:[{format:this.webGPU.format}]},primitive:{topology:this.webGPU.PrimitiveTopology.LineList},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.modelMatrix=v(),this.rotation=f(0,0,0),this.uniformBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.frameBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.uniformBindGroup=this.webGPU.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer,offset:0,size:64}}]}),this.uniformBindGroup1=this.webGPU.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.mouseBuffer}}]}),this.textureView=this.webGPU.ctx.getCurrentTexture().createView();const i=this.webGPU.device.createTexture({size:[this.webGPU.ctx.canvas.width,this.webGPU.ctx.canvas.height,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT});this.renderPassDescription={colorAttachments:[{view:this.textureView,clearValue:{r:.2,g:.247,b:.314,a:1},loadValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:i.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},this.isRenderable=!0}async render(){this.isRenderable&&(this.webGPU.device.queue.writeBuffer(this.mouseBuffer,0,new Float32Array([this.scene.app.controller.eventController.mNormalized[0],this.scene.app.controller.eventController.mNormalized[1],this.t])),this.webGPU.device.queue.writeBuffer(this.frameBuffer,0,new Float32Array([this.t,0])),V(this.modelMatrix,this.translation,this.rotation),x(this.modelMatrix,this.webGPU.renderer.cameraController.getMatrix,this.modelMatrix),this.webGPU.device.queue.writeBuffer(this.uniformBuffer,0,this.modelMatrix),this.webGPU.renderPass.setPipeline(this.pipeline),this.webGPU.renderPass.setVertexBuffer(0,this.vertexBuffer),this.webGPU.renderPass.setVertexBuffer(1,this.colorBuffer),this.webGPU.renderPass.setBindGroup(0,this.uniformBindGroup),this.webGPU.renderPass.setBindGroup(1,this.uniformBindGroup1),this.webGPU.renderPass.draw(this.numberOfVertices),this.t+=.01)}}class le extends L{constructor(e){super(e),this.numberOfVertices=0,this.isAnimation=!0,this.translation=f(0,0,0),this.rotation=f(0,0,0),this.t=0,this.initPipeline()}async initPipeline(){const e=fe(1.5,70,40);this.pos=e==null?void 0:e.vertexData,this.numberOfVertices=(e==null?void 0:e.vertexData).length/3,this.vertexBuffer=C(this.webGPU.device,e==null?void 0:e.vertexData),this.normalBuffer=C(this.webGPU.device,e==null?void 0:e.normalData),this.uvBuffer=C(this.webGPU.device,e==null?void 0:e.uvData);const i=ue();this.pipeline=this.webGPU.device.createRenderPipeline({layout:"auto",vertex:{module:this.webGPU.device.createShaderModule({code:i.vertex}),entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,format:"float32x3",offset:0}]}]},fragment:{module:this.webGPU.device.createShaderModule({code:i.fragment}),entryPoint:"main",targets:[{format:this.webGPU.format}]},primitive:{topology:this.webGPU.PrimitiveTopology.PointList},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.modelMatrix=v(),this.rotation=f(Math.PI*.15,0,0),this.uniformBuffer=this.webGPU.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.uniformBindGroup=this.webGPU.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer,offset:0,size:64}}]}),this.textureView=this.webGPU.ctx.getCurrentTexture().createView();const r=this.webGPU.device.createTexture({size:[this.webGPU.ctx.canvas.width,this.webGPU.ctx.canvas.height,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT});this.renderPassDescription={colorAttachments:[{view:this.textureView,clearValue:{r:.2,g:.247,b:.314,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:r.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}}}render(){this.isAnimation,this.rotation[1]+=.005,V(this.modelMatrix,this.translation,this.rotation),x(this.modelMatrix,this.webGPU.renderer.cameraController.getMatrix,this.modelMatrix),this.webGPU.device.queue.writeBuffer(this.uniformBuffer,0,this.modelMatrix),this.webGPU.renderPass.setPipeline(this.pipeline),this.webGPU.renderPass.setVertexBuffer(0,this.vertexBuffer),this.webGPU.renderPass.setBindGroup(0,this.uniformBindGroup),this.webGPU.renderPass.draw(this.numberOfVertices),this.t+=.01}}const ue=()=>({vertex:`
        struct Uniforms {
            mvpMatrix : mat4x4<f32>,
        };
        @binding(0) @group(0) var<uniform> uniforms : Uniforms;
        
        @vertex
        fn main(@location(0) pos: vec4<f32>) ->  @builtin(position) vec4<f32> {
            return uniforms.mvpMatrix * pos;     
        }`,fragment:`
        @fragment
        fn main() -> @location(0) vec4<f32> {
            return vec4<f32>(1.0, 1.0, 0.0, 1.0);            
        }`}),fe=(t=2,e=20,i=15,r=[0,0,0],s=1,n=1)=>{if(e<2||i<2)return;let a=[],p;for(let g=0;g<e;g++){let G=[];for(let A=0;A<i;A++)p=pe(t,g*180/(e-1),A*360/(i-1),r),G.push(p);a.push(G)}let P=[],M=[],w=[],b,l,c,u,y,U,O,B,d,o,m,h,T,E;for(let g=0;g<e-1;g++)for(let G=0;G<i-1;G++)d=a[g][G],o=a[g+1][G],m=a[g+1][G+1],h=a[g][G+1],T=R(),E=R(),z(T,m,d),z(E,o,h),P.push([d[0],d[1],d[2],o[0],o[1],o[2],h[0],h[1],h[2],o[0],o[1],o[2],m[0],m[1],m[2],h[0],h[1],h[2]]),M.push([d[0]/t,d[1]/t,d[2]/t,o[0]/t,o[1]/t,o[2]/t,h[0]/t,h[1]/t,h[2]/t,o[0]/t,o[1]/t,o[2]/t,m[0]/t,m[1]/t,m[2]/t,h[0]/t,h[1]/t,h[2]/t]),b=s*(.5+Math.atan2(d[0]/t,d[2]/t)/Math.PI/2),l=s*(.5+Math.atan2(o[0]/t,o[2]/t)/Math.PI/2),c=s*(.5+Math.atan2(m[0]/t,m[2]/t)/Math.PI/2),u=s*(.5+Math.atan2(h[0]/t,h[2]/t)/Math.PI/2),y=n*(.5-Math.asin(d[1]/t)/Math.PI),U=n*(.5-Math.asin(o[1]/t)/Math.PI),O=n*(.5-Math.asin(m[1]/t)/Math.PI),B=n*(.5-Math.asin(h[1]/t)/Math.PI),w.push([b,y,l,U,u,B,l,U,c,O,u,B]);return{vertexData:new Float32Array(P.flat()),normalData:new Float32Array(M.flat()),uvData:new Float32Array(w.flat())}},pe=(t,e,i,r=[0,0,0])=>{let s=Math.sin(e*Math.PI/180),n=Math.cos(e*Math.PI/180),a=Math.sin(i*Math.PI/180),p=Math.cos(i*Math.PI/180);return f(t*s*p+r[0],t*n+r[1],-t*s*a+r[2])};class de{constructor(e){this.objects=[],this.independentPipeline=!1,this.t=0,this.app=e}async init(){new le(this),new ae(this),new ce(this)}render(){this.independentPipeline?this.renderObject():this.renderScene(),this.t+=1}renderObject(){for(let e=0;e<this.objects.length;++e)this.objects[e].update(),this.objects[e].render()}renderScene(){this.app.renderer.webGPU.textureView=this.app.renderer.webGPU.ctx.getCurrentTexture().createView(),this.app.renderer.webGPU.renderPassDescription.colorAttachments[0].view=this.app.renderer.webGPU.textureView,this.app.renderer.webGPU.commandEncoder=this.app.renderer.webGPU.device.createCommandEncoder(),this.app.renderer.webGPU.renderPass=this.app.renderer.webGPU.commandEncoder.beginRenderPass(this.app.renderer.webGPU.renderPassDescription);for(let e=0;e<this.objects.length;++e)this.objects[e].update(),this.objects[e].render();this.t%300,this.app.renderer.webGPU.renderPass.end(),this.app.renderer.webGPU.device.queue.submit([this.app.renderer.webGPU.commandEncoder.finish()])}}class me{constructor(e){this.divHost=document.getElementById(e),this.renderer=new re(this),this.controller=new J(this),this.scene=new de(this),this.init()}async init(){this.controller.init(),await this.renderer.init(),await this.scene.init()}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class Me{constructor(e){this.app=new me(e)}destroy(){this.app.destroy()}}export{me as App,re as Renderer,Me as Solution};
