"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[1224],{21224:function(e,t,i){i.r(t),i.d(t,{Solution:function(){return m}});class s{constructor(e){this.buffer=void 0,this.bufferLayout=void 0;const t=new Float32Array([0,0,.5,.5,0,0,-.5,-.5,0,1,0,.5,-.5,1,1]),i=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,s={size:t.byteLength,usage:i,mappedAtCreation:!0};this.buffer=e.createBuffer(s),new Float32Array(this.buffer.getMappedRange()).set(t),this.buffer.unmap(),this.bufferLayout={arrayStride:20,attributes:[{shaderLocation:0,format:"float32x3",offset:0},{shaderLocation:1,format:"float32x2",offset:12}]}}}class a{constructor(e){this.buffer=void 0,this.bufferLayout=void 0;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,.5,.5,0,1,1,-.5,.5,0,0,1,-.5,-.5,0,0,0]),i=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,s={size:t.byteLength,usage:i,mappedAtCreation:!0};this.buffer=e.createBuffer(s),new Float32Array(this.buffer.getMappedRange()).set(t),this.buffer.unmap(),this.bufferLayout={arrayStride:20,attributes:[{shaderLocation:0,format:"float32x3",offset:0},{shaderLocation:1,format:"float32x2",offset:12}]}}}var r=i(39880);class o{constructor(){this.texture=void 0,this.view=void 0,this.sampler=void 0,this.bindGroup=void 0}async initialize(e,t,i){console.log(t);const s=await fetch(t),a=await s.blob(),r=await createImageBitmap(a);await this.loadImageBitmap(e,r);this.view=this.texture.createView({format:"rgba8unorm",dimension:"2d",aspect:"all",baseMipLevel:0,mipLevelCount:1,baseArrayLayer:0,arrayLayerCount:1});this.sampler=e.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"nearest",mipmapFilter:"nearest",maxAnisotropy:1}),this.bindGroup=e.createBindGroup({layout:i,entries:[{binding:0,resource:this.view},{binding:1,resource:this.sampler}]})}async loadImageBitmap(e,t){const i={size:{width:t.width,height:t.height},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT};this.texture=e.createTexture(i),e.queue.copyExternalImageToTexture({source:t},{texture:this.texture},i.size)}}let n;!function(e){e[e.TRIANGLE=0]="TRIANGLE",e[e.QUAD=1]="QUAD"}(n||(n={}));const h="\nstruct TransformData {\n    view: mat4x4<f32>,\n    projection: mat4x4<f32>,\n};\n\nstruct ObjectData {\n    model: array<mat4x4<f32>>,\n};\n\n@binding(0) @group(0) var<uniform> transformUBO: TransformData;\n@binding(1) @group(0) var<storage, read> objects: ObjectData;\n@binding(0) @group(1) var myTexture: texture_2d<f32>;\n@binding(1) @group(1) var mySampler: sampler;\n\nstruct Fragment {\n    @builtin(position) Position : vec4<f32>,\n    @location(0) TexCoord : vec2<f32>\n};\n\n@vertex\nfn vs_main(\n    @builtin(instance_index) ID: u32,\n    @location(0) vertexPostion: vec3<f32>, \n    @location(1) vertexTexCoord: vec2<f32>) -> Fragment {\n\n    var output : Fragment;\n    output.Position = transformUBO.projection * transformUBO.view * objects.model[ID] * vec4<f32>(vertexPostion, 1.0);\n    output.TexCoord = vertexTexCoord;\n\n    return output;\n}\n\n@fragment\nfn fs_main(@location(0) TexCoord : vec2<f32>) -> @location(0) vec4<f32> {\n    return textureSample(myTexture, mySampler, TexCoord);\n}\n";class u{constructor(e){this.canvas=void 0,this.adapter=void 0,this.device=void 0,this.context=void 0,this.format=void 0,this.uniformBuffer=void 0,this.pipeline=void 0,this.frameGroupLayout=void 0,this.materialGroupLayout=void 0,this.frameBindGroup=void 0,this.depthStencilState=void 0,this.depthStencilBuffer=void 0,this.depthStencilView=void 0,this.depthStencilAttachment=void 0,this.triangleMesh=void 0,this.quadMesh=void 0,this.triangleMaterial=void 0,this.quadMaterial=void 0,this.objectBuffer=void 0,this.canvas=e}async Initialize(){const e=await(async e=>{let t=new DOMParser,i=await fetch(e),s=await i.text(),a=await t.parseFromString(s,"text/xml");return console.log(s,a),s})("/njs-lab-public/shaders/shaders.wgsl");console.log(e),await this.setupDevice(),await this.makeBindGroupLayouts(),await this.createAssets(),await this.makeDepthBufferResources(),await this.makePipeline(),await this.makeBindGroup()}async setupDevice(){var e,t;this.adapter=await(null===(e=navigator.gpu)||void 0===e?void 0:e.requestAdapter()),this.device=await(null===(t=this.adapter)||void 0===t?void 0:t.requestDevice()),this.context=this.canvas.getContext("webgpu"),this.format="bgra8unorm",this.context.configure({device:this.device,format:this.format,alphaMode:"opaque"})}async makeDepthBufferResources(){this.depthStencilState={format:"depth24plus-stencil8",depthWriteEnabled:!0,depthCompare:"less-equal"};const e={size:{width:this.canvas.width,height:this.canvas.height,depthOrArrayLayers:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.RENDER_ATTACHMENT};this.depthStencilBuffer=this.device.createTexture(e);this.depthStencilView=this.depthStencilBuffer.createView({format:"depth24plus-stencil8",dimension:"2d",aspect:"all"}),this.depthStencilAttachment={view:this.depthStencilView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store",stencilLoadOp:"clear",stencilStoreOp:"discard"}}async makeBindGroupLayouts(){this.frameGroupLayout=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage",hasDynamicOffset:!1}}]}),this.materialGroupLayout=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]})}async makePipeline(){const e=this.device.createPipelineLayout({bindGroupLayouts:[this.frameGroupLayout,this.materialGroupLayout]});this.pipeline=this.device.createRenderPipeline({vertex:{module:this.device.createShaderModule({code:h}),entryPoint:"vs_main",buffers:[this.triangleMesh.bufferLayout]},fragment:{module:this.device.createShaderModule({code:h}),entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list"},layout:e,depthStencil:this.depthStencilState})}async createAssets(){this.triangleMesh=new s(this.device),this.quadMesh=new a(this.device),this.triangleMaterial=new o,this.quadMaterial=new o,this.uniformBuffer=this.device.createBuffer({size:128,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const e={size:65536,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST};this.objectBuffer=this.device.createBuffer(e),await this.triangleMaterial.initialize(this.device,"/njs-lab-public/img/profile0.jpg",this.materialGroupLayout),await this.quadMaterial.initialize(this.device,"/njs-lab-public/img/profile0.jpg",this.materialGroupLayout)}async makeBindGroup(){this.frameBindGroup=this.device.createBindGroup({layout:this.frameGroupLayout,entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.objectBuffer}}]})}async render(e){if(!this.device||!this.pipeline)return;const t=r.Ue();r.G3(t,Math.PI/4,800/600,.1,10);const i=e.view_transform;this.device.queue.writeBuffer(this.objectBuffer,0,e.model_transforms,0,e.model_transforms.length),this.device.queue.writeBuffer(this.uniformBuffer,0,i),this.device.queue.writeBuffer(this.uniformBuffer,64,t);const s=this.device.createCommandEncoder(),a=this.context.getCurrentTexture().createView(),o=s.beginRenderPass({colorAttachments:[{view:a,clearValue:{r:.5,g:0,b:.25,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:this.depthStencilAttachment});o.setPipeline(this.pipeline),o.setBindGroup(0,this.frameBindGroup);var h=0;o.setVertexBuffer(0,this.triangleMesh.buffer),o.setBindGroup(1,this.triangleMaterial.bindGroup),o.draw(3,e.object_counts[n.TRIANGLE],0,h),h+=e.object_counts[n.TRIANGLE],o.setVertexBuffer(0,this.quadMesh.buffer),o.setBindGroup(1,this.quadMaterial.bindGroup),o.draw(6,e.object_counts[n.QUAD],0,h),h+=e.object_counts[n.QUAD],o.end(),this.device.queue.submit([s.finish()])}}var d=i(88679);function c(e){return e*Math.PI/180}class l{constructor(e,t){this.position=void 0,this.eulers=void 0,this.model=void 0,this.position=e,this.eulers=d.Ue(),this.eulers[2]=t}update(){this.model=r.Ue(),r.Iu(this.model,this.model,this.position),r.jI(this.model,this.model,c(this.eulers[2]))}get_model(){return this.model}}class f{constructor(e,t,i){this.position=void 0,this.eulers=void 0,this.view=void 0,this.forwards=void 0,this.right=void 0,this.up=void 0,this.position=e,this.eulers=[0,i,t],this.forwards=d.Ue(),this.right=d.Ue(),this.up=d.Ue()}update(){this.forwards=[Math.cos(c(this.eulers[2]))*Math.cos(c(this.eulers[1])),Math.sin(c(this.eulers[2]))*Math.cos(c(this.eulers[1])),Math.sin(c(this.eulers[1]))],d.kC(this.right,this.forwards,[0,0,1]),d.kC(this.up,this.right,this.forwards);var e=d.Ue();d.IH(e,this.position,this.forwards),this.view=r.Ue(),r.zB(this.view,this.position,e,this.up)}get_view(){return this.view}}class p{constructor(){this.triangles=void 0,this.quads=void 0,this.player=void 0,this.object_data=void 0,this.triangle_count=void 0,this.quad_count=void 0,this.triangles=[],this.quads=[],this.object_data=new Float32Array(16384),this.triangle_count=0,this.quad_count=0,this.make_triangles(),this.player=new f([-2,0,.5],0,0)}make_triangles(){for(var e=0,t=0;t<1;t++){this.triangles.push(new l([2,t,0],0));for(var i=r.Ue(),s=0;s<16;s++)this.object_data[16*e+s]=i.at(s);e++,this.triangle_count++}}update(){var e=0;this.triangles.forEach((t=>{t.update();for(var i=t.get_model(),s=0;s<16;s++)this.object_data[16*e+s]=i.at(s);e++})),this.quads.forEach((t=>{t.update();for(var i=t.get_model(),s=0;s<16;s++)this.object_data[16*e+s]=i.at(s);e++})),this.player.update()}get_player(){return this.player}get_renderables(){return{view_transform:this.player.get_view(),model_transforms:this.object_data,object_counts:{[n.TRIANGLE]:this.triangle_count,[n.QUAD]:this.quad_count}}}spin_player(e,t){this.player.eulers[2]-=e,this.player.eulers[2]%=360,this.player.eulers[1]=Math.min(89,Math.max(-89,this.player.eulers[1]-t))}move_player(e,t){d.od(this.player.position,this.player.position,this.player.forwards,e),d.od(this.player.position,this.player.position,this.player.right,t)}}class v{constructor(e){this.canvas=void 0,this.renderer=void 0,this.scene=void 0,this.keyLabel=void 0,this.mouseXLabel=void 0,this.mouseYLabel=void 0,this.forwards_amount=void 0,this.right_amount=void 0,this.run=()=>{this.scene.update(),this.scene.move_player(this.forwards_amount,this.right_amount),this.renderer.render(this.scene.get_renderables()),requestAnimationFrame(this.run)},this.canvas=e,this.renderer=new u(e),this.scene=new p,this.keyLabel=document.getElementById("key-label"),this.mouseXLabel=document.getElementById("mouse-x-label"),this.mouseYLabel=document.getElementById("mouse-y-label"),this.forwards_amount=0,this.right_amount=0,this.canvas.onclick=()=>{this.canvas.requestPointerLock()},this.canvas.addEventListener("mousemove",(e=>{this.handle_mouse_move(e)}))}async InitializeRenderer(){await this.renderer.Initialize()}handle_mouse_move(e){}}class m{constructor(e){this.divHost=void 0,this.canvas=void 0,this.ctx=void 0,this.device=void 0,this.format=void 0,this.size=void 0,this.pipelineObj=void 0,this.divHost=document.getElementById(e),this.canvas=document.createElement("canvas"),this.canvas.width=500,this.canvas.height=500,this.divHost.appendChild(this.canvas),this.initWebGPU()}async initWebGPU(){const e=new v(this.canvas);e.InitializeRenderer(),e.run()}run(){}}},88679:function(e,t,i){i.d(t,{IH:function(){return o},Ue:function(){return a},al:function(){return r},kC:function(){return h},od:function(){return n}});var s=i(50907);function a(){var e=new s.WT(3);return s.WT!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function r(e,t,i){var a=new s.WT(3);return a[0]=e,a[1]=t,a[2]=i,a}function o(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e}function n(e,t,i,s){return e[0]=t[0]+i[0]*s,e[1]=t[1]+i[1]*s,e[2]=t[2]+i[2]*s,e}function h(e,t,i){var s=t[0],a=t[1],r=t[2],o=i[0],n=i[1],h=i[2];return e[0]=a*h-r*n,e[1]=r*o-s*h,e[2]=s*n-a*o,e}!function(){var e=a()}()}}]);
//# sourceMappingURL=1224.444396ee.chunk.js.map