const l=(a,t,r=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST)=>{const e=a.createBuffer({size:t.byteLength,usage:r,mappedAtCreation:!0});return new Float32Array(e.getMappedRange()).set(t),e.unmap(),e},d=()=>({vertex:`
        struct Output {
            @builtin(position) Position : vec4<f32>,
            @location(0) vColor : vec4<f32>,
        };
        @vertex
        fn main(@location(0) pos: vec4<f32>, @location(1) color: vec4<f32>) -> Output {
            var output: Output;
            output.Position = pos;
            output.vColor = color;
            return output;
        }`,fragment:`
        @fragment
        fn main(@location(0) vColor: vec4<f32>) -> @location(0) vec4<f32> {
            return vColor;
        }`}),f=new Float32Array([0,.5,0,-.5,-.5,0,.5,-.5,0]),v=3;class p{constructor(t){this.divHost=document.getElementById(t),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.initWebGPU()}async initWebGPU(){if(!navigator.gpu)throw new Error("Not Support WebGPU");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new Error("No Adapter Found");const r=await t.requestDevice();this.ctx=this.canvas.getContext("webgpu");const e=navigator.gpu.getPreferredCanvasFormat?navigator.gpu.getPreferredCanvasFormat():this.ctx.getPreferredFormat(t);this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.ctx.configure({device:r,format:e,alphaMode:"opaque"}),this.size={width:this.canvas.width,height:this.canvas.height},this.device=r,this.format=e,this.initPipeline(this.device,this.format)}async initPipeline(t,r,e="triangle-list"){const s=new Float32Array([-.5,-.5,1,0,0,.5,-.5,0,1,0,-.5,.5,1,1,0,-.5,.5,1,1,0,.5,-.5,0,1,0,.5,.5,0,0,1]),c=l(t,s),i=d(),u=t.createRenderPipeline({layout:"auto",vertex:{module:t.createShaderModule({code:i.vertex}),entryPoint:"main",buffers:[{arrayStride:20,attributes:[{shaderLocation:0,format:"float32x2",offset:0},{shaderLocation:1,format:"float32x3",offset:8}]}]},fragment:{module:t.createShaderModule({code:i.fragment}),entryPoint:"main",targets:[{format:this.format}]},primitive:{topology:"triangle-list"}}),n=t.createCommandEncoder(),h=this.ctx.getCurrentTexture().createView(),o=n.beginRenderPass({colorAttachments:[{view:h,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]});o.setPipeline(u),o.setVertexBuffer(0,c),o.draw(6),o.end(),t.queue.submit([n.finish()])}destroy(){for(this.device.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}export{p as Solution,f as vertex,v as vertexCount};
//# sourceMappingURL=index-B7GcsZVR.js.map
