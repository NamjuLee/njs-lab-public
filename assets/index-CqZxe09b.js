import{c as P,a as y}from"./MatUtil-CJb13vHu.js";import{f as v}from"./vec3-k28HwHx8.js";import{c as M}from"./camera-CEx9o-ur.js";import{i as B,t as w,c as p,m as g}from"./mat4-DRgVL_5a.js";import"./index-D8DJpnOO.js";const x=(t,e,s=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST)=>{const r=t.createBuffer({size:e.byteLength,usage:s,mappedAtCreation:!0});return new Float32Array(r.getMappedRange()).set(e),r.unmap(),r},U=(t,e,s,r=[0,0,0])=>{const i=Math.sin(e*Math.PI/180),c=Math.cos(e*Math.PI/180),m=Math.sin(s*Math.PI/180),l=Math.cos(s*Math.PI/180);return v(t*i*l+r[0],t*c+r[1],-t*i*m+r[2])},b=(t=2,e=20,s=15,r=[0,0,0])=>{if(e<2||s<2)return;let i=[],c;for(let f=0;f<e;f++){let u=[];for(let d=0;d<s;d++)c=U(t,f*180/(e-1),d*360/(s-1),r),u.push(c);i.push(u)}let m=[],l=[],h,o,n,a;for(let f=0;f<e-1;f++)for(let u=0;u<s-1;u++)h=i[f][u],o=i[f+1][u],n=i[f+1][u+1],a=i[f][u+1],m.push([h[0],h[1],h[2],o[0],o[1],o[2],a[0],a[1],a[2],o[0],o[1],o[2],n[0],n[1],n[2],a[0],a[1],a[2]]),l.push([h[0]/t,h[1]/t,h[2]/t,o[0]/t,o[1]/t,o[2]/t,a[0]/t,a[1]/t,a[2]/t,o[0]/t,o[1]/t,o[2]/t,n[0]/t,n[1]/t,n[2]/t,a[0]/t,a[1]/t,a[2]/t]);return{vertexData:new Float32Array(m.flat()),normalData:new Float32Array(l.flat())}},I=t=>{t.color=t.color===void 0?"(1.0, 0.0, 0.0)":t.color,t.ambientIntensity=t.ambientIntensity===void 0?"0.2":t.ambientIntensity,t.diffuseIntensity=t.diffuseIntensity===void 0?"0.8":t.diffuseIntensity,t.specularIntensity=t.specularIntensity===void 0?"0.4":t.specularIntensity,t.shininess=t.shininess===void 0?"30.0":t.shininess,t.specularColor=t.specularColor===void 0?"(1.0, 1.0, 1.0)":t.specularColor,t.isPhong=t.isPhong===void 0?"0":t.isPhong;const e=`
         struct Uniforms {
             viewProjectionMatrix : mat4x4<f32>,
             modelMatrix : mat4x4<f32>,               
             normalMatrix : mat4x4<f32>,            
         };
         @binding(0) @group(0) var<uniform> uniforms : Uniforms;
 
         struct Output {
             @builtin(position) Position : vec4<f32>,
             @location(0) vPosition : vec4<f32>,
             @location(1) vNormal : vec4<f32>,
         };
 
         @vertex
         fn main(@location(0) position: vec4<f32>, @location(1) normal: vec4<f32>) -> Output {    
             var output: Output;            
             let mPosition:vec4<f32> = uniforms.modelMatrix * position; 
             output.vPosition = mPosition;                  
             output.vNormal =  uniforms.normalMatrix*normal;
             output.Position = uniforms.viewProjectionMatrix * mPosition;               
             return output;
         }`,s=`
         struct Uniforms {
             lightPosition : vec4<f32>,   
             eyePosition : vec4<f32>,
         };
         @binding(1) @group(0) var<uniform> uniforms : Uniforms;
 
         @fragment
         fn main(@location(0) vPosition: vec4<f32>, @location(1) vNormal: vec4<f32>) -> @location(0) vec4<f32> {
             let N:vec3<f32> = normalize(vNormal.xyz);                
             let L:vec3<f32> = normalize(uniforms.lightPosition.xyz - vPosition.xyz);     
             let V:vec3<f32> = normalize(uniforms.eyePosition.xyz - vPosition.xyz);          
             let H:vec3<f32> = normalize(L + V);
             let diffuse:f32 = ${t.diffuseIntensity} * max(dot(N, L), 0.0);
             var specular:f32;
             var isp:i32 = ${t.isPhong};
             if(isp === 1){
                 specular = ${t.specularIntensity} * pow(max(dot(V, reflect(-L, N)),0.0), ${t.shininess});
             } else {
                 specular = ${t.specularIntensity} * pow(max(dot(N, H),0.0), ${t.shininess});
             }               
             let ambient:f32 = ${t.ambientIntensity};               
             let finalColor:vec3<f32> = vec3<f32>${t.color}*(ambient + diffuse) + vec3<f32>${t.specularColor}*specular; 
             return vec4<f32>(finalColor, 1.0);
         }`;return{vertex:e,fragment:s}},C=t=>({shader:I(t),vertex:b(1,20,20,[0,0,0])});class D{constructor(e){this.isAnimation=!0,this.rotation=v(0,0,0),this.loop=()=>{this.isAnimation?(this.rotation[0]+=.01,this.rotation[1]+=.01,this.rotation[2]+=.01):this.rotation=[0,0,0],this.drawing(),this.isAnimation&&(this.requestAni=requestAnimationFrame(this.loop))},this.divHost=document.getElementById(e),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.initWebGPU()}async initWebGPU(){if(!navigator.gpu)throw new Error("Not Support WebGPU");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No Adapter Found");const s=await e.requestDevice();this.ctx=this.canvas.getContext("webgpu");const r=navigator.gpu.getPreferredCanvasFormat?navigator.gpu.getPreferredCanvasFormat():this.ctx.getPreferredFormat(e);this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.ctx.configure({device:s,format:r,alphaMode:"opaque"}),this.size={width:this.canvas.width,height:this.canvas.height},this.device=s,this.format=r,this.camera=new G(this),this.initPipeline(this.device,this.format)}async initPipeline(e,s,r="triangle-list"){const i={color:"[1.0,0.0,0.0]"};i.color=i.color===void 0?"[1.0,0.0,0.0]":i.color,i.ambientIntensity=i.ambientIntensity===void 0?"0.2":i.ambientIntensity,i.diffuseIntensity=i.diffuseIntensity===void 0?"0.8":i.diffuseIntensity,i.specularIntensity=i.specularIntensity===void 0?"0.4":i.specularIntensity,i.shininess=i.shininess===void 0?"30.0":i.shininess,i.specularColor=i.specularColor===void 0?"[1.0, 1.0, 1.0]":i.specularColor;let c=C(i);this.vertexBuffer=x(e,c.vertex.vertexData),this.normalBuffer=x(e,c.vertex.normalData),this.numberOfVertices=c.vertex.vertexData.length/3;const m=c.shader;this.pipeline=e.createRenderPipeline({layout:"auto",vertex:{module:e.createShaderModule({code:m.vertex}),entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,format:"float32x3",offset:0}]},{arrayStride:12,attributes:[{shaderLocation:1,format:"float32x3",offset:0}]}]},fragment:{module:e.createShaderModule({code:m.fragment}),entryPoint:"main",targets:[{format:this.format}]},primitive:{topology:"triangle-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),this.uniformBuffer=e.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.uniformBindGroup=e.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer,offset:0,size:64}}]});let l=new Float32Array(this.camera.vp.cameraOption.eye),h=l;const o=e.createBuffer({size:192,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),n=e.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(o,0,this.camera.vp.viewProjectionMatrix),e.queue.writeBuffer(n,0,h),e.queue.writeBuffer(n,16,l),e.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:o,offset:0,size:192}},{binding:1,resource:{buffer:n,offset:0,size:32}}]}),this.textureView=this.ctx.getCurrentTexture().createView(),this.renderPassDescription={colorAttachments:[{view:this.textureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},this.requestAni=requestAnimationFrame(this.loop)}drawing(){this.camera.update();const e=this.device.createBuffer({size:192,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.device.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),B(this.camera.normalMatrix,this.camera.modelMatrix),w(this.camera.normalMatrix,this.camera.normalMatrix),this.device.queue.writeBuffer(e,64,this.camera.modelMatrix),this.device.queue.writeBuffer(e,128,this.camera.normalMatrix),this.textureView=this.ctx.getCurrentTexture().createView(),this.renderPassDescription.colorAttachments[0].view=this.textureView;const s=this.device.createCommandEncoder(),r=s.beginRenderPass(this.renderPassDescription);r.setPipeline(this.pipeline),r.setVertexBuffer(0,this.vertexBuffer),r.setVertexBuffer(1,this.normalBuffer),r.setBindGroup(0,this.uniformBindGroup),r.draw(this.numberOfVertices),r.end(),this.device.queue.submit([s.finish()])}destroy(){for(this.device.destroy(),cancelAnimationFrame(this.requestAni);this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class G{constructor(e){this.rotation=v(0,0,0),this.translation=v(0,0,0),this.solution=e,this.canvas=e.canvas,this.normalMatrix=p(),this.modelMatrix=p(),this.mvpMatrix=p(),this.vMatrix=p(),this.vpMatrix=p(),this.vp=P(this.canvas.width/this.canvas.height),this.vpMatrix=this.vp.viewProjectionMatrix,this.camera=M(this.canvas,this.vp.cameraOption)}update(){const e=this.vp.projectionMatrix;this.vMatrix=this.camera.matrix,g(this.vpMatrix,e,this.vMatrix),y(this.modelMatrix,this.translation,this.rotation),g(this.mvpMatrix,this.vpMatrix,this.modelMatrix)}}export{D as Solution};
