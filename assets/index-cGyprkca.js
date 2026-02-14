const v=(i,e,r=GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST)=>{const t=i.createBuffer({size:e.byteLength,usage:r,mappedAtCreation:!0});return new Uint32Array(t.getMappedRange()).set(e),t.unmap(),t},l=(i,e,r=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST)=>{const t=i.createBuffer({size:e.byteLength,usage:r,mappedAtCreation:!0});return new Float32Array(t.getMappedRange()).set(e),t.unmap(),t},p=()=>({vertex:`
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
        }`}),g=new Float32Array([0,.5,0,-.5,-.5,0,.5,-.5,0]),m=3;class P{constructor(e){this.divHost=document.getElementById(e),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.initWebGPU()}async initWebGPU(){if(!navigator.gpu)throw new Error("Not Support WebGPU");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No Adapter Found");const r=await e.requestDevice();this.ctx=this.canvas.getContext("webgpu");const t=navigator.gpu.getPreferredCanvasFormat?navigator.gpu.getPreferredCanvasFormat():this.ctx.getPreferredFormat(e);this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.ctx.configure({device:r,format:t,alphaMode:"opaque"}),this.size={width:this.canvas.width,height:this.canvas.height},this.device=r,this.format=t,this.initPipeline(this.device,this.format)}async initPipeline(e,r,t="triangle-list"){const s=new Float32Array([-.5,-.5,0,1,0,0,.5,-.5,0,0,1,0,.5,.5,0,0,0,1,-.5,.5,0,1,1,0]),c=new Uint32Array([0,1,3,3,1,2]),u=l(this.device,s),d=v(this.device,c),a=p(),f=this.device.createRenderPipeline({layout:"auto",vertex:{module:this.device.createShaderModule({code:a.vertex}),entryPoint:"main",buffers:[{arrayStride:24,attributes:[{shaderLocation:0,format:"float32x3",offset:0},{shaderLocation:1,format:"float32x3",offset:12}]}]},fragment:{module:this.device.createShaderModule({code:a.fragment}),entryPoint:"main",targets:[{format:this.format}]},primitive:{topology:"triangle-list"}}),n=e.createCommandEncoder(),h=this.ctx.getCurrentTexture().createView(),o=n.beginRenderPass({colorAttachments:[{view:h,clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]});o.setPipeline(f),o.setVertexBuffer(0,u),o.setIndexBuffer(d,"uint32"),o.drawIndexed(6),o.end(),e.queue.submit([n.finish()])}destroy(){for(this.device.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}export{P as Solution,g as vertex,m as vertexCount};
//# sourceMappingURL=index-cGyprkca.js.map
