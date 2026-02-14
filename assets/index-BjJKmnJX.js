import{c as C,a as y}from"./MatUtil-CJb13vHu.js";import{c as s,m as B}from"./mat4-DRgVL_5a.js";const d=(a,t,o=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST)=>{const e=a.createBuffer({size:t.byteLength,usage:o,mappedAtCreation:!0});return new Float32Array(e.getMappedRange()).set(t),e.unmap(),e},U=()=>{const a=new Float32Array([-1,-1,1,1,-1,1,1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,1,1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1]),t=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1]);return{positions:a,colors:t}},l=`
// vertex shader

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
`;class T{constructor(t){this.divHost=document.getElementById(t),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.initWebGPU()}async initWebGPU(){if(!navigator.gpu)throw new Error("Not Support WebGPU");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new Error("No Adapter Found");const o=await t.requestDevice();this.ctx=this.canvas.getContext("webgpu");const e=navigator.gpu.getPreferredCanvasFormat?navigator.gpu.getPreferredCanvasFormat():this.ctx.getPreferredFormat(t);this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.ctx.configure({device:o,format:e,alphaMode:"opaque"}),this.size={width:this.canvas.width,height:this.canvas.height},this.device=o,this.format=e,this.initPipeline(this.device,this.format)}async initPipeline(t,o,e="triangle-list"){const i=U(),m=i.positions.length/3,v=d(t,i.positions),g=d(t,i.colors),n=t.createRenderPipeline({layout:"auto",vertex:{module:t.createShaderModule({code:l}),entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,format:"float32x3",offset:0}]},{arrayStride:12,attributes:[{shaderLocation:1,format:"float32x3",offset:0}]}]},fragment:{module:t.createShaderModule({code:l}),entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),c=s(),u=s();let f=s();f=C(this.canvas.width/this.canvas.height).viewProjectionMatrix;const h=t.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),P=t.createBindGroup({layout:n.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h,offset:0,size:64}}]}),w=this.ctx.getCurrentTexture().createView(),x=t.createTexture({size:[this.canvas.width,this.canvas.height,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),b={colorAttachments:[{view:w,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:x.createView(),depthLoadValue:1,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};y(c),B(u,f,c),t.queue.writeBuffer(h,0,u);const p=t.createCommandEncoder(),r=p.beginRenderPass(b);r.setPipeline(n),r.setVertexBuffer(0,v),r.setVertexBuffer(1,g),r.setBindGroup(0,P),r.draw(m),r.end(),t.queue.submit([p.finish()])}destroy(){for(this.device.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}export{T as Solution};
//# sourceMappingURL=index-BjJKmnJX.js.map
