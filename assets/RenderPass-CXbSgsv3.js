import"./three.module-D871lH-y.js";import{dL as te,ae as D,bi as M,dM as U,ah as re,aA as V,d as se,am as ae,aj as oe,ak as z,ab as j,a$ as N,ba as ie,fy as le,bg as Z,cn as W,bc as L,C as K,V as Q,g9 as ce}from"./index-CFD18EaN.js";class _e extends te{constructor(e){super(e),this.type=D}parse(e){const o=function(r,c){switch(r){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(c||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(c||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(c||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(c||""))}},k=function(r,c,h){c=c||1024;let p=r.pos,f=-1,a=0,v="",n=String.fromCharCode.apply(null,new Uint16Array(r.subarray(p,p+128)));for(;0>(f=n.indexOf(`
`))&&a<c&&p<r.byteLength;)v+=n,a+=n.length,p+=128,n+=String.fromCharCode.apply(null,new Uint16Array(r.subarray(p,p+128)));return-1<f?(r.pos+=a+f+1,v+n.slice(0,f)):!1},$=function(r){const c=/^#\?(\S+)/,h=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,u=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,p=/^\s*FORMAT=(\S+)\s*$/,f=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,a={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let v,n;for((r.pos>=r.byteLength||!(v=k(r)))&&o(1,"no header found"),(n=v.match(c))||o(3,"bad initial token"),a.valid|=1,a.programtype=n[1],a.string+=v+`
`;v=k(r),v!==!1;){if(a.string+=v+`
`,v.charAt(0)==="#"){a.comments+=v+`
`;continue}if((n=v.match(h))&&(a.gamma=parseFloat(n[1])),(n=v.match(u))&&(a.exposure=parseFloat(n[1])),(n=v.match(p))&&(a.valid|=2,a.format=n[1]),(n=v.match(f))&&(a.valid|=4,a.height=parseInt(n[1],10),a.width=parseInt(n[2],10)),a.valid&2&&a.valid&4)break}return a.valid&2||o(3,"missing format specifier"),a.valid&4||o(3,"missing image size specifier"),a},X=function(r,c,h){const u=c;if(u<8||u>32767||r[0]!==2||r[1]!==2||r[2]&128)return new Uint8Array(r);u!==(r[2]<<8|r[3])&&o(3,"wrong scanline width");const p=new Uint8Array(4*c*h);p.length||o(4,"unable to allocate buffer space");let f=0,a=0;const v=4*u,n=new Uint8Array(4),b=new Uint8Array(v);let G=h;for(;G>0&&a<r.byteLength;){a+4>r.byteLength&&o(1),n[0]=r[a++],n[1]=r[a++],n[2]=r[a++],n[3]=r[a++],(n[0]!=2||n[1]!=2||(n[2]<<8|n[3])!=u)&&o(3,"bad rgbe scanline format");let w=0,x;for(;w<v&&a<r.byteLength;){x=r[a++];const g=x>128;if(g&&(x-=128),(x===0||w+x>v)&&o(3,"bad scanline data"),g){const _=r[a++];for(let H=0;H<x;H++)b[w++]=_}else b.set(r.subarray(a,a+x),w),w+=x,a+=x}const ee=u;for(let g=0;g<ee;g++){let _=0;p[f]=b[g+_],_+=u,p[f+1]=b[g+_],_+=u,p[f+2]=b[g+_],_+=u,p[f+3]=b[g+_],f+=4}G--}return p},q=function(r,c,h,u){const p=r[c+3],f=Math.pow(2,p-128)/255;h[u+0]=r[c+0]*f,h[u+1]=r[c+1]*f,h[u+2]=r[c+2]*f,h[u+3]=1},J=function(r,c,h,u){const p=r[c+3],f=Math.pow(2,p-128)/255;h[u+0]=U.toHalfFloat(Math.min(r[c+0]*f,65504)),h[u+1]=U.toHalfFloat(Math.min(r[c+1]*f,65504)),h[u+2]=U.toHalfFloat(Math.min(r[c+2]*f,65504)),h[u+3]=U.toHalfFloat(1)},E=new Uint8Array(e);E.pos=0;const y=$(E),F=y.width,I=y.height,S=X(E.subarray(E.pos),F,I);let P,B,C;switch(this.type){case M:C=S.length/4;const r=new Float32Array(C*4);for(let h=0;h<C;h++)q(S,h*4,r,h*4);P=r,B=M;break;case D:C=S.length/4;const c=new Uint16Array(C*4);for(let h=0;h<C;h++)J(S,h*4,c,h*4);P=c,B=D;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:F,height:I,data:P,header:y.string,gamma:y.gamma,exposure:y.exposure,type:B}}setDataType(e){return this.type=e,this}load(e,t,i,l){function s(o,d){switch(o.type){case M:case D:o.colorSpace=re,o.minFilter=V,o.magFilter=V,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,d)}return super.load(e,s,i,l)}}class R{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ne=new ae(-1,1,1,-1,0,1);class he extends oe{constructor(){super(),this.setAttribute("position",new z([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new z([0,2,0,0,2,0],2))}}const ue=new he;class Y{constructor(e){this._mesh=new se(ue,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ne)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const T={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class Ce extends R{constructor(e,t,i){super(),this.scene=e,this.camera=t;const l=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,o=i.maxblur!==void 0?i.maxblur:1;this._renderTargetDepth=new j(1,1,{minFilter:N,magFilter:N,type:D}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new ie,this._materialDepth.depthPacking=le,this._materialDepth.blending=Z;const d=W.clone(T.uniforms);d.tDepth.value=this._renderTargetDepth.texture,d.focus.value=l,d.aspect.value=t.aspect,d.aperture.value=s,d.maxblur.value=o,d.nearClip.value=t.near,d.farClip.value=t.far,this.materialBokeh=new L({defines:Object.assign({},T.defines),uniforms:d,vertexShader:T.vertexShader,fragmentShader:T.fragmentShader}),this.uniforms=d,this._fsQuad=new Y(this.materialBokeh),this._oldClearColor=new K}render(e,t,i){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);const l=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(l),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}const fe={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class de extends R{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof L?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=W.clone(e.uniforms),this.material=new L({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Y(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class O extends R{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const l=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,d;this.inverse?(o=0,d=1):(o=1,d=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),s.buffers.stencil.setFunc(l.ALWAYS,o,4294967295),s.buffers.stencil.setClear(d),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(l.EQUAL,1,4294967295),s.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),s.buffers.stencil.setLocked(!0)}}class pe extends R{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class be{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Q);this._width=i.width,this._height=i.height,t=new j(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:D}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new de(fe),this.copyPass.material.blending=Z,this.timer=new ce}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let l=0,s=this.passes.length;l<s;l++){const o=this.passes[l];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const d=this.renderer.getContext(),A=this.renderer.state.buffers.stencil;A.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),A.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}O!==void 0&&(o instanceof O?i=!0:o instanceof pe&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(i,l),this.renderTarget2.setSize(i,l);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class De extends R{constructor(e,t,i=null,l=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=l,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new K}render(e,t,i){const l=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=l}}export{Ce as B,fe as C,be as E,Y as F,_e as H,R as P,De as R};
