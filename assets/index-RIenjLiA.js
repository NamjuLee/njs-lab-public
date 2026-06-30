import{c as u,a as c}from"./MatUtil-CJb13vHu.js";import{c as f}from"./camera-putogjqU.js";import{f as o}from"./vec3-k28HwHx8.js";import{c as a,m as n}from"./mat4-DRgVL_5a.js";import"./index-D2EN_kGa.js";const p=(r,t,e=GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST)=>{const i=r.createBuffer({size:t.byteLength,usage:e,mappedAtCreation:!0});return new Uint32Array(i.getMappedRange()).set(t),i.unmap(),i},m=(r,t,e=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST)=>{const i=r.createBuffer({size:t.byteLength,usage:e,mappedAtCreation:!0});return new Float32Array(i.getMappedRange()).set(t),i.unmap(),i},d=()=>{const r=new Float32Array([-1,-1,1,0,0,1,1,-1,1,1,0,1,1,1,1,1,1,1,-1,1,1,0,1,1,-1,-1,-1,0,0,0,1,-1,-1,1,0,0,1,1,-1,1,1,0,-1,1,-1,0,1,0]),t=new Uint32Array([0,1,2,2,3,0,1,5,6,6,2,1,4,7,6,6,5,4,0,3,7,7,4,0,3,2,6,6,7,3,0,4,5,5,1,0]);return{vertexData:r,indexData:t}},h=`

struct Uniforms {
    mvpMatrix : mat4x4<f32>,
};
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct Output {
    @builtin(position) Position : vec4<f32>,
    @location(0) vColor : vec4<f32>,
};

@vertex
fn vs_main(@location(0) pos: vec4<f32>, @location(1) color: vec4<f32>) -> Output {
    var output: Output;
    output.Position = uniforms.mvpMatrix * pos;
    output.vColor = color;
    return output;
}

// fragment shader

 @fragment
fn fs_main(@location(0) vColor: vec4<f32>) -> @location(0) vec4<f32> {
    return vColor;
}
`;class B{constructor(t){this.isAnimation=!0,this.rotation=o(0,0,0),this.loop=()=>{this.isAnimation?(this.rotation[0]+=.01,this.rotation[1]+=.01,this.rotation[2]+=.01):this.rotation=[0,0,0],this.drawing(),this.isAnimation&&(this.requestAni=requestAnimationFrame(this.loop))},this.divHost=document.getElementById(t),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.initWebGPU()}async initWebGPU(){if(!navigator.gpu)throw new Error("Not Support WebGPU");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new Error("No Adapter Found");const e=await t.requestDevice();this.ctx=this.canvas.getContext("webgpu");const i=navigator.gpu.getPreferredCanvasFormat?navigator.gpu.getPreferredCanvasFormat():this.ctx.getPreferredFormat(t);this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.ctx.configure({device:e,format:i,alphaMode:"opaque"}),this.size={width:this.canvas.width,height:this.canvas.height},this.device=e,this.format=i,this.camera=new l(this),this.initPipeline(this.device,this.format)}async initPipeline(t,e,i="triangle-list"){const s=d();this.numberOfVertices=s.indexData.length,this.vertexBuffer=m(t,s.vertexData),this.colorBuffer=p(t,s.indexData),this.pipeline=t.createRenderPipeline({layout:"auto",vertex:{module:t.createShaderModule({code:h}),entryPoint:"vs_main",buffers:[{arrayStride:24,attributes:[{shaderLocation:0,format:"float32x3",offset:0},{shaderLocation:1,format:"float32x3",offset:12}]}]},fragment:{module:t.createShaderModule({code:h}),entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.uniformBuffer=t.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.uniformBindGroup=t.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer,offset:0,size:64}}]}),this.textureView=this.ctx.getCurrentTexture().createView(),this.depthTexture=t.createTexture({size:[this.canvas.width,this.canvas.height,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.renderPassDescription={colorAttachments:[{view:this.textureView,clearValue:{r:0,g:0,b:0,a:1},loadValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTexture.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},this.requestAni=requestAnimationFrame(this.loop)}drawing(){this.camera.update(),this.device.queue.writeBuffer(this.uniformBuffer,0,this.camera.mvpMatrix),this.textureView=this.ctx.getCurrentTexture().createView(),this.renderPassDescription.colorAttachments[0].view=this.textureView;const t=this.device.createCommandEncoder(),e=t.beginRenderPass(this.renderPassDescription);e.setPipeline(this.pipeline),e.setVertexBuffer(0,this.vertexBuffer),e.setIndexBuffer(this.colorBuffer,"uint32"),e.setBindGroup(0,this.uniformBindGroup),e.drawIndexed(this.numberOfVertices),e.end(),this.device.queue.submit([t.finish()])}destroy(){for(this.device.destroy(),cancelAnimationFrame(this.requestAni);this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class l{constructor(t){this.rotation=o(0,0,0),this.translation=o(0,0,0),this.solution=t,this.canvas=t.canvas,this.modelMatrix=a(),this.mvpMatrix=a(),this.vMatrix=a(),this.vpMatrix=a(),this.vp=u(this.canvas.width/this.canvas.height),this.vpMatrix=this.vp.viewProjectionMatrix,this.camera=f(this.canvas,this.vp.cameraOption)}update(){const t=this.vp.projectionMatrix;this.vMatrix=this.camera.matrix,n(this.vpMatrix,t,this.vMatrix),c(this.modelMatrix,this.translation,this.rotation),n(this.mvpMatrix,this.vpMatrix,this.modelMatrix)}}export{B as Solution};
