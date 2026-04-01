const v=o=>{let e="";for(let r=0;r<o;r++){let n=Math.random()*2-1,a=Math.random()*2-1;e+=`vec2<f32>(${n}, ${a}),`}return console.log(e),{vertex:`
        @vertex
        fn main(@builtin(vertex_index) VertexIndex: u32) -> @builtin(position) vec4<f32> {
            var pos = array<vec2<f32>, ${o}>(
                ${e}           
                // vec2<f32>(-0.5,  0.7),
                // vec2<f32>( 0.3,  0.6),
                // vec2<f32>( 0.5,  0.3),
                // vec2<f32>( 0.4, -0.5),
                // vec2<f32>(-0.4, -0.4),
                // vec2<f32>(-0.3,  0.2)
            );
            return vec4<f32>(pos[VertexIndex], 0.0, 1.0);
        }`,fragment:`
        @fragment
        fn main() ->  @location(0) vec4<f32> {
            return vec4<f32>(1.0, 1.0, 1.0, 1.0);
        }`}};class l{constructor(e){this.divHost=document.getElementById(e),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.initWebGPU()}async initWebGPU(){if(!navigator.gpu)throw new Error("Not Support WebGPU");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No Adapter Found");const i=await e.requestDevice();this.ctx=this.canvas.getContext("webgpu");const t=navigator.gpu.getPreferredCanvasFormat?navigator.gpu.getPreferredCanvasFormat():this.ctx.getPreferredFormat(e);this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.ctx.configure({device:i,format:t,alphaMode:"opaque"}),this.size={width:this.canvas.width,height:this.canvas.height},this.device=i,this.format=t,this.initPipeline(this.device,this.format)}async initPipeline(e,i,t="line-list"){let r;t==="line-strip"&&(r="uint32");const n=10,a=v(n),d=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:a.vertex}),entryPoint:"main"},fragment:{module:e.createShaderModule({code:a.fragment}),entryPoint:"main",targets:[{format:i}]},primitive:{topology:t,stripIndexFormat:r}}),c=e.createCommandEncoder(),h=this.ctx.getCurrentTexture().createView(),s=c.beginRenderPass({colorAttachments:[{view:h,clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]});s.setPipeline(d),s.draw(n),s.end(),e.queue.submit([c.finish()])}destroy(){for(this.device.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}export{l as Solution};
