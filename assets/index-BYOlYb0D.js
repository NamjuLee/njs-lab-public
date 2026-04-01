const s=(a,t,r=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST)=>{const e=a.createBuffer({size:t.byteLength,usage:r,mappedAtCreation:!0});return new Float32Array(e.getMappedRange()).set(t),e.unmap(),e},p=new Float32Array([0,.5,0,-.5,-.5,0,.5,-.5,0]),v=3,n=`
// vertext shader

struct Output {
    @builtin(position) Position : vec4<f32>,
    @location(0) vColor : vec4<f32>,
};

@vertex
fn vs_main(@location(0) pos: vec4<f32>, @location(1) color: vec4<f32>) -> Output {
    var output: Output;
    output.Position = pos;
    output.vColor = color;
    return output;
}

// fragment shader

@fragment
fn fs_main(@location(0) vColor: vec4<f32>) -> @location(0) vec4<f32> {
    return vColor;
}
`;class m{constructor(t){this.divHost=document.getElementById(t),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.initWebGPU()}async initWebGPU(){if(!navigator.gpu)throw new Error("Not Support WebGPU");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new Error("No Adapter Found");const r=await t.requestDevice();this.ctx=this.canvas.getContext("webgpu");const e=navigator.gpu.getPreferredCanvasFormat?navigator.gpu.getPreferredCanvasFormat():this.ctx.getPreferredFormat(t);this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.ctx.configure({device:r,format:e,alphaMode:"opaque"}),this.size={width:this.canvas.width,height:this.canvas.height},this.device=r,this.format=e,this.initPipeline(this.device,this.format)}async initPipeline(t,r,e="triangle-list"){const c=new Float32Array([-.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5]),u=new Float32Array([1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1]),h=s(t,c),f=s(t,u),l=t.createRenderPipeline({layout:"auto",vertex:{module:t.createShaderModule({code:n}),entryPoint:"vs_main",buffers:[{arrayStride:8,attributes:[{shaderLocation:0,format:"float32x2",offset:0}]},{arrayStride:12,attributes:[{shaderLocation:1,format:"float32x3",offset:0}]}]},fragment:{module:t.createShaderModule({code:n}),entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list"}}),i=t.createCommandEncoder(),d=this.ctx.getCurrentTexture().createView(),o=i.beginRenderPass({colorAttachments:[{view:d,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]});o.setPipeline(l),o.setVertexBuffer(0,h),o.setVertexBuffer(1,f),o.draw(6),o.end(),t.queue.submit([i.finish()])}destroy(){for(this.device.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}export{m as Solution,p as vertex,v as vertexCount};
