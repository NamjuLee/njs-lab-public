"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[3019],{23019:function(e,t,i){i.r(t),i.d(t,{Solution:function(){return s}});const r=new Float32Array([0,.5,0,-.5,-.5,0,.5,-.5,0]),o="\n@vertex\nfn main(@location(0) position : vec3<f32>) -> @builtin(position) vec4<f32> {\n    return vec4<f32>(position, 1.0);\n}\n",n="\n@group(0) @binding(0) var<uniform> color : vec4<f32>;\n@fragment\nfn main() -> @location(0) vec4<f32> {\n    return color;\n}\n";class s{constructor(e){this.divHost=void 0,this.canvas=void 0,this.ctx=void 0,this.device=void 0,this.format=void 0,this.size=void 0,this.pipelineObj=void 0,this.renderPassDescriptor=void 0,this.divHost=document.getElementById(e),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.initWebGPU()}async initWebGPU(){if(!navigator.gpu)throw new Error("Not Support WebGPU");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No Adapter Found");const t=await e.requestDevice();this.ctx=this.canvas.getContext("webgpu");const i=navigator.gpu.getPreferredCanvasFormat?navigator.gpu.getPreferredCanvasFormat():this.ctx.getPreferredFormat(e);window.devicePixelRatio;this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.ctx.configure({device:t,format:i,alphaMode:"opaque"}),this.size={width:this.canvas.width,height:this.canvas.height},this.device=t,this.format=i,console.log(n,o),this.initPipeline(this.device,this.format)}async initPipeline(e,t){const i=await e.createRenderPipelineAsync({label:"Basic Pipline",layout:"auto",vertex:{module:e.createShaderModule({code:o}),entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:e.createShaderModule({code:n}),entryPoint:"main",targets:[{format:t}]},primitive:{topology:"triangle-list"}}),s=e.createBuffer({label:"GPUBuffer store vertex",size:r.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(s,0,r);const a=e.createBuffer({label:"GPUBuffer store rgba color",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(a,0,new Float32Array([1,1,0,1]));const c=e.createBindGroup({label:"Uniform Group with colorBuffer",layout:i.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:a}}]}),u=this.ctx.getCurrentTexture().createView();this.renderPassDescriptor={colorAttachments:[{view:u,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},this.pipelineObj={pipeline:i,vertexBuffer:s,colorBuffer:a,uniformGroup:c},this.run()}run(){this.draw(this.device,this.pipelineObj)}draw(e,t){const i=e.createCommandEncoder(),r=i.beginRenderPass(this.renderPassDescriptor);r.setPipeline(t.pipeline),r.setBindGroup(0,t.uniformGroup),r.setVertexBuffer(0,t.vertexBuffer),r.draw(3),r.end(),e.queue.submit([i.finish()])}destroy(){for(this.device.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}}}]);
//# sourceMappingURL=3019.0caa10d1.chunk.js.map