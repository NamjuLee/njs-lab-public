const f=()=>({vertex:`  
    struct Output {
        @builtin(position) Position : vec4<f32>,
        @location(0) vColor : vec4<f32>,
    };

    @vertex
    fn main(@builtin(vertex_index) VertexIndex: u32) -> Output {
        var pos : array<vec2<f32>, 9> = array<vec2<f32>, 9>(             
            vec2<f32>(-0.63,  0.80),
            vec2<f32>(-0.65,  0.20),
            vec2<f32>(-0.20,  0.60),
            vec2<f32>(-0.37, -0.07),
            vec2<f32>( 0.05,  0.18),
            vec2<f32>(-0.13, -0.40),
            vec2<f32>( 0.30, -0.13),
            vec2<f32>( 0.13, -0.64),
            vec2<f32>( 0.70, -0.30)     
        );
    
        var color : array<vec3<f32>, 9> = array<vec3<f32>, 9>(             
            vec3<f32>(1.0, 0.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.0),
            vec3<f32>(0.0, 0.0, 1.0),
            vec3<f32>(1.0, 0.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.0),
            vec3<f32>(0.0, 0.0, 1.0),
            vec3<f32>(1.0, 0.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.0),
            vec3<f32>(0.0, 0.0, 1.0),  
        );

        var output: Output;
        output.Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);
        output.vColor = vec4<f32>(color[VertexIndex], 1.0);
        return output;
    }`,fragment:`
        @fragment
        fn main(@location(0) vColor: vec4<f32>) -> @location(0) vec4<f32> {
            return vColor;
        }
    `}),u=new Float32Array([0,.5,0,-.5,-.5,0,.5,-.5,0]),h=3;class d{constructor(e){this.mouse=new Float32Array([0,0]),this.divHost=document.getElementById(e),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.canvas.addEventListener("mousemove",t=>{this.mouse[0]-t.offsetX,this.mouse[1]-t.offsetY,this.mouse[0]=t.offsetX,this.mouse[1]=t.offsetY,console.log("mousemove",t)},!1),this.initWebGPU()}async initWebGPU(){if(!navigator.gpu)throw new Error("Not Support WebGPU");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No Adapter Found");const t=await e.requestDevice();this.ctx=this.canvas.getContext("webgpu");const r=navigator.gpu.getPreferredCanvasFormat?navigator.gpu.getPreferredCanvasFormat():this.ctx.getPreferredFormat(e);this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.ctx.configure({device:t,format:r,alphaMode:"opaque"}),this.size={width:this.canvas.width,height:this.canvas.height},this.device=t,this.format=r,this.initPipeline(this.device,this.format)}async initPipeline(e,t,r="triangle-list"){let a;r==="line-strip"&&(a="uint32");const n=f(),c=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:n.vertex}),entryPoint:"main"},fragment:{module:e.createShaderModule({code:n.fragment}),entryPoint:"main",targets:[{format:t}]},primitive:{topology:r,stripIndexFormat:a}}),s=e.createCommandEncoder(),v=this.ctx.getCurrentTexture().createView(),i=s.beginRenderPass({colorAttachments:[{view:v,clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]});i.setPipeline(c),i.draw(9,1,0,0),i.end(),e.queue.submit([s.finish()])}destroy(){for(this.device.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}const l=(o,e,t=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST)=>{const r=o.createBuffer({size:e.byteLength,usage:t,mappedAtCreation:!0});return new Float32Array(r.getMappedRange()).set(e),r.unmap(),r};export{l as CreateGPUBuffer,d as Solution,u as vertex,h as vertexCount};
