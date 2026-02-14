import{f as d,c as w,a as y,b as U}from"./vec3-k28HwHx8.js";import{c as A,a as B}from"./MatUtil-CJb13vHu.js";import{c as x,m as C,l as I}from"./mat4-DRgVL_5a.js";const S=(n,t,s=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST)=>{const e=n.createBuffer({size:t.byteLength,usage:s,mappedAtCreation:!0});return new Float32Array(e.getMappedRange()).set(t),e.unmap(),e},F=(n,t,s,e=[0,0,0])=>{const o=Math.sin(t*Math.PI/180),i=Math.cos(t*Math.PI/180),m=Math.sin(s*Math.PI/180),c=Math.cos(s*Math.PI/180);return d(n*o*c+e[0],n*i+e[1],-n*o*m+e[2])},G=(n,t,s,e=[0,0,0])=>{let o=[],i;for(let f=0;f<t;f++){let a=[];for(let u=0;u<s;u++)i=F(n,f*180/(t-1),u*360/(s-1),e),a.push(i);o.push(a)}let m=[],c,r,h;for(let f=0;f<t-1;f++)for(let a=0;a<s-1;a++)c=o[f][a],r=o[f+1][a],h=o[f][a+1],m.push([c[0],c[1],c[2],r[0],r[1],r[2],c[0],c[1],c[2],h[0],h[1],h[2]]);return new Float32Array(m.flat())},V=()=>({vertex:`
        struct Uniforms {
            mvpMatrix : mat4x4<f32>,
        };
        @binding(0) @group(0) var<uniform> uniforms : Uniforms;
        
        @vertex
        fn main(@location(0) pos: vec4<f32>) ->  @builtin(position) vec4<f32> {
            return uniforms.mvpMatrix * pos;     
        }`,fragment:`
        @fragment
        fn main() -> @location(0) vec4<f32> {
            return vec4<f32>(1.0, 1.0, 0.0, 1.0);            
        }`}),T=()=>({shader:V(),vertex:G(1,20,20,[0,0,0])}),D=(n,t,s,e,o=[0,0,0])=>{let i=[],m=s/2;for(let l=0;l<e;l++)i.push([P(t,l*360/(e-1),m,o),P(t,l*360/(e-1),-m,o),P(n,l*360/(e-1),-m,o),P(n,l*360/(e-1),m,o)]);let c=[],r,h,f,a,u,v,p,M;for(let l=0;l<e-1;l++)r=i[l][0],h=i[l][1],f=i[l][2],a=i[l][3],u=i[l+1][0],v=i[l+1][1],p=i[l+1][2],M=i[l+1][3],c.push([r[0],r[1],r[2],a[0],a[1],a[2],a[0],a[1],a[2],M[0],M[1],M[2],u[0],u[1],u[2],r[0],r[1],r[2],h[0],h[1],h[2],f[0],f[1],f[2],f[0],f[1],f[2],p[0],p[1],p[2],v[0],v[1],v[2],h[0],h[1],h[2],r[0],r[1],r[2],h[0],h[1],h[2],a[0],a[1],a[2],f[0],f[1],f[2]]);return new Float32Array(c.flat())},P=(n,t,s,e=[0,0,0])=>{let o=Math.sin(t*Math.PI/180),i=Math.cos(t*Math.PI/180);return d(n*i+e[0],s+e[1],-n*o+e[2])},q=()=>({vertex:`
        struct Uniforms {
            mvpMatrix : mat4x4<f32>,
        };
        @binding(0) @group(0) var<uniform> uniforms : Uniforms;
        
        @vertex
        fn main(@location(0) pos: vec4<f32>) ->  @builtin(position) vec4<f32> {
            return uniforms.mvpMatrix * pos;     
        }`,fragment:`
        @fragment
        fn main() -> @location(0) vec4<f32> {
            return vec4<f32>(1.0, 1.0, 0.0, 1.0);            
        }`}),E=()=>({shader:q(),vertex:D(1,2,2,20,[0,0,0])}),H=(n,t,s,e,o=[0,0,0])=>{let i=[],m=s/2;for(let p=0;p<e+1;p++)i.push([b(n,p*360/(e-1),m,o),b(t,p*360/(e-1),-m,o),b(0,p*360/(e-1),-m,o),b(0,p*360/(e-1),m,o)]);let c=[],r,h,f,a,u,v;for(let p=0;p<e-1;p++)r=i[p][0],h=i[p][1],f=i[p][2],a=i[p][3],u=i[p+1][0],v=i[p+1][1],c.push([r[0],r[1],r[2],a[0],a[1],a[2],u[0],u[1],u[2],r[0],r[1],r[2],h[0],h[1],h[2],f[0],f[1],f[2],v[0],v[1],v[2],h[0],h[1],h[2],r[0],r[1],r[2],h[0],h[1],h[2]]);return new Float32Array(c.flat())},b=(n,t,s,e=[0,0,0])=>{let o=Math.sin(t*Math.PI/180),i=Math.cos(t*Math.PI/180);return d(n*i+e[0],s+e[1],-n*o+e[2])},W=()=>({vertex:`
        struct Uniforms {
            mvpMatrix : mat4x4<f32>,
        };
        @binding(0) @group(0) var<uniform> uniforms : Uniforms;
        
        @vertex
        fn main(@location(0) pos: vec4<f32>) ->  @builtin(position) vec4<f32> {
            return uniforms.mvpMatrix * pos;     
        }`,fragment:`
        @fragment
        fn main() -> @location(0) vec4<f32> {
            return vec4<f32>(1.0, 0.0, 0.0, 1.0);            
        }`}),j=()=>({shader:W(),vertex:H(1,2,2,20,[0,0,0])}),O=(n,t,s,e,o=[0,0,0])=>{let i=[],m;for(let a=0;a<s;a++){let u=[];for(let v=0;v<e;v++)m=R(n,t,a*360/(s-1),v*360/(e-1),o),u.push(m);i.push(u)}let c=[],r,h,f;for(let a=0;a<s-1;a++)for(let u=0;u<e-1;u++)r=i[a][u],h=i[a+1][u],i[a+1][u+1],f=i[a][u+1],c.push([r[0],r[1],r[2],h[0],h[1],h[2],f[0],f[1],f[2],r[0],r[1],r[2]]);return new Float32Array(c.flat())},R=(n,t,s,e,o=[0,0,0])=>{let i=Math.sin(s*Math.PI/180),m=Math.cos(s*Math.PI/180),c=Math.sin(e*Math.PI/180),r=Math.cos(e*Math.PI/180);return d((n+t*r)*m+o[0],t*c+o[1],-(n+t*r)*i+o[2])},z=()=>({vertex:`
        struct Uniforms {
            mvpMatrix : mat4x4<f32>,
        };
        @binding(0) @group(0) var<uniform> uniforms : Uniforms;
        
        @vertex
        fn main(@location(0) pos: vec4<f32>) ->  @builtin(position) vec4<f32> {
            return uniforms.mvpMatrix * pos;     
        }`,fragment:`
        @fragment
        fn main() -> @location(0) vec4<f32> {
            return vec4<f32>(1.0, 0.0, 0.0, 1.0);            
        }`}),$=()=>({shader:z(),vertex:O(2,.75,50,20,[0,0,0])});function g(n){return n*Math.PI/180}class L{constructor(t,s,e){this.position=t,this.eulers=[0,e,s],this.forwards=w(),this.right=w(),this.up=w(),console.log(this.up)}update(){this.position[0]+=-.01,this.forwards=[Math.cos(g(this.eulers[2]))*Math.cos(g(this.eulers[1])),Math.sin(g(this.eulers[2]))*Math.cos(g(this.eulers[1])),Math.sin(g(this.eulers[1]))],y(this.right,this.forwards,[0,1,0]),y(this.up,this.right,this.forwards);var t=w();U(t,this.position,this.forwards),this.view=x(),I(this.view,this.position,t,this.up)}get_view(){return this.view}}class _{constructor(t){this.rotation=d(0,0,0),this.translation=d(0,0,0),this.solution=t,this.canvas=t.canvas,this.modelMatrix=x(),this.mvpMatrix=x(),this.vMatrix=x(),this.vpMatrix=x(),this.vp=A(this.canvas.width/this.canvas.height),this.vpMatrix=this.vp.viewProjectionMatrix,this.camera=new L([-5,0,0],1,1)}update(){this.camera.update();const t=this.vp.projectionMatrix;this.vMatrix=this.camera.view,C(this.vpMatrix,t,this.vMatrix),B(this.modelMatrix,this.translation,this.rotation),C(this.mvpMatrix,this.vpMatrix,this.modelMatrix)}}class X{constructor(t){this.isAnimation=!0,this.rotation=d(0,0,0),this.loop=()=>{this.isAnimation?(this.rotation[0]+=.01,this.rotation[1]+=.01,this.rotation[2]+=.01):this.rotation=[0,0,0],this.drawing(),this.isAnimation&&(this.requestAni=requestAnimationFrame(this.loop))},this.divHost=document.getElementById(t),this.canvas=document.createElement("canvas"),this.divHost.appendChild(this.canvas),this.initWebGPU()}async initWebGPU(){if(!navigator.gpu)throw new Error("Not Support WebGPU");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new Error("No Adapter Found");const s=await t.requestDevice();this.ctx=this.canvas.getContext("webgpu");const e=navigator.gpu.getPreferredCanvasFormat?navigator.gpu.getPreferredCanvasFormat():this.ctx.getPreferredFormat(t);this.canvas.width=this.divHost.clientWidth,this.canvas.height=this.divHost.clientHeight,this.ctx.configure({device:s,format:e,alphaMode:"opaque"}),this.size={width:this.canvas.width,height:this.canvas.height},this.device=s,this.format=e,this.camera=new _(this),this.initPipeline(this.device,this.format)}async initPipeline(t,s,e="triangle-list"){let o=$();Math.random()>.8?o=T():Math.random()<.2?o=E():Math.random()<.5&&(o=j()),this.vertexBuffer=S(t,o.vertex),this.numberOfVertices=o.vertex.length/3;const i=o.shader;this.pipeline=t.createRenderPipeline({layout:"auto",vertex:{module:t.createShaderModule({code:i.vertex}),entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,format:"float32x3",offset:0}]}]},fragment:{module:t.createShaderModule({code:i.fragment}),entryPoint:"main",targets:[{format:this.format}]},primitive:{topology:"line-list"}}),this.uniformBuffer=t.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.uniformBindGroup=t.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer,offset:0,size:64}}]}),this.textureView=this.ctx.getCurrentTexture().createView(),this.renderPassDescription={colorAttachments:[{view:this.textureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},this.requestAni=requestAnimationFrame(this.loop)}drawing(){this.camera.update(),this.device.queue.writeBuffer(this.uniformBuffer,0,this.camera.mvpMatrix),this.textureView=this.ctx.getCurrentTexture().createView(),this.renderPassDescription.colorAttachments[0].view=this.textureView;const t=this.device.createCommandEncoder(),s=t.beginRenderPass(this.renderPassDescription);s.setPipeline(this.pipeline),s.setVertexBuffer(0,this.vertexBuffer),s.setBindGroup(0,this.uniformBindGroup),s.draw(this.numberOfVertices),s.end(),this.device.queue.submit([t.finish()])}destroy(){for(this.device.destroy(),cancelAnimationFrame(this.requestAni);this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}export{X as Solution};
//# sourceMappingURL=index-CHTJGDc4.js.map
