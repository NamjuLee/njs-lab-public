const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/basis_transcoder-3G0ofzqd.js","assets/_commonjsHelpers-BPmi-3c5.js"])))=>i.map(i=>d[i]);
import{a as zi}from"./devEnvironmentUtils-9XltLdu9.js";import{t as k,F as m,DU as Vi,DV as Bi,DW as er,mw as at,l3 as Hr,iX as N,iC as ya,iW as Xe,m$ as Dt,qz as lr,qy as Gi,oq as Ui,n1 as Se,r6 as gr,iT as wa,q0 as Y,n4 as Ae,n3 as Ze,W as xr,Q as Tr,By as Vt,q6 as Me,q3 as Wt,kY as jt,_ as wt,oh as Hi,jI as ki,of as Bt,nQ as Wi,nO as kr,X as ji,mY as lt,s$ as ct,jj as Wr,DX as qi,oD as Xi,oE as Yi,op as At,iF as jr,i7 as Ki,ox as Fe,kU as Zi,th as Ji,Z as Qi,qJ as eo,DY as to,DZ as ro,hI as ao,iV as br,m_ as qr,D_ as Aa,im as Ca,pN as Xr,jh as bt,s4 as _r,qi as _t,sY as cr,D$ as io,hd as x,iQ as re,r7 as qt,qB as oo,mF as so,E0 as dr,n0 as no,iS as lo,q1 as co,E1 as uo,tj as Yr,oJ as Ma,U as ho,ki as Oa,E2 as $a,qY as Gt,jt as mo,qh as fo,ti as Kr,kZ as Zr}from"./index-Dyzp52yc.js";import{e as Xt}from"./mat3f64-D3kqlCg8.js";import{e as Sr,o as Pa}from"./mat4f64-i4C-NQa3.js";import{c as ur,x as Je,u as Ra,i as Qe,L as po,O as Jr,E as vo}from"./BufferView-DbrZDmDL.js";import{t as go,r as xo,f as Qr,e as To}from"./vec33-DPCBk8PE.js";import{u as ea,l as bo,m as _o,n as So,j as qe,r as Be,a as yo,b as wo,o as ta,e as Ao,t as Co,i as Mo,g as Oo,h as $o}from"./DefaultMaterial_COLOR_GAMMA-BAjGKz7F.js";import{r as La}from"./Version-DdsMdnCo.js";import{t as Ea}from"./requestImageUtils-8p3A7NVR.js";import{a as Ft,c as tr,O as hr,b as Oe,o as Po,r as Ro,C as W,W as yr,_ as wr,d as rt,n as $e,e as Ct,f as Lo,g as Eo,l as No,h as Io,i as Do,A as Fo,S as zo}from"./OrderIndependentTransparency-vlB7TAtM.js";import{e as ae,v as Vo}from"./Util-CMPLNSkX.js";import{s as Na,R as Ia}from"./sphere-Dm2R-U5J.js";import{O as h}from"./VertexAttribute-Bb5wV56r.js";import{u as _e,P as Ve,L as Ue,C as le,F as Bo,D as Ye,G as ra,M as aa,V as Go,Y as Uo,E as ft,O as oe,I as Pe}from"./enums-CDDXOSFr.js";import{E as Ce,n as Ho,a as ko}from"./Texture-DDMUNXfv.js";import{_ as Wo,a as jo,E as qo,x as Xo,n as Yo}from"./VertexArrayObject-D0ACxHvY.js";import{T as Da}from"./InterleavedLayout-x7qyUEM0.js";import{S as Ko}from"./quat-CNWd5qUD.js";import{e as Zo}from"./quatf64-BPWzyS3F.js";import{r as Jo,n as Qo}from"./vec3f32-Ckk5q47r.js";import{r as be}from"./symbolColorUtils-CQ37tBUg.js";import{t as ce}from"./VertexElementDescriptor-BLyltQyJ.js";import"./types-Cezv0Yl1.js";function dt(t){if(k(t))return null;const e=m(t.offset)?t.offset:Vi,r=m(t.rotation)?t.rotation:0,a=m(t.scale)?t.scale:Bi,i=er(1,0,0,0,1,0,e[0],e[1],1),o=er(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),s=er(a[0],0,0,0,a[1],0,0,0,1),l=at();return Hr(l,o,s),Hr(l,i,l),l}let es=class{constructor(e,r,a,i,o){this.name=e,this.stageResources=r,this.lodThreshold=a,this.pivotOffset=i,this.numberOfVertices=o}},ts=class Fa{constructor(e,r,a,i){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=a,this.position=i,this.center=N(),this._children=void 0,ae(e.length>=1),ae(a.length%this._numIndexPerPrimitive==0),ae(a.length>=e.length*this._numIndexPerPrimitive),ae(i.size===3||i.size===4);const{data:o,size:s}=i,l=e.length;let d=s*a[this._numIndexPerPrimitive*e[0]];ze.clear(),ze.push(d),this.bbMin=Xe(o[d],o[d+1],o[d+2]),this.bbMax=Dt(this.bbMin);for(let u=0;u<l;++u){const f=this._numIndexPerPrimitive*e[u];for(let p=0;p<this._numIndexPerPrimitive;++p){d=s*a[f+p],ze.push(d);let b=o[d];this.bbMin[0]=Math.min(b,this.bbMin[0]),this.bbMax[0]=Math.max(b,this.bbMax[0]),b=o[d+1],this.bbMin[1]=Math.min(b,this.bbMin[1]),this.bbMax[1]=Math.max(b,this.bbMax[1]),b=o[d+2],this.bbMin[2]=Math.min(b,this.bbMin[2]),this.bbMax[2]=Math.max(b,this.bbMax[2])}}lr(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let u=0;u<ze.length;++u){d=ze.getItemAt(u);const f=o[d]-this.center[0],p=o[d+1]-this.center[1],b=o[d+2]-this.center[2],A=f*f+p*p+b*b;if(A<=c)continue;const P=Math.sqrt(A),g=.5*(P-this.radius);this.radius=this.radius+g,c=this.radius*this.radius;const S=g/P;this.center[0]+=f*S,this.center[1]+=p*S,this.center[2]+=b*S}ze.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Gi(this.bbMin,this.bbMax)>1){const e=lr(N(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,a=new Uint8Array(r),i=new Array(8);for(let c=0;c<8;++c)i[c]=0;const{data:o,size:s}=this.position;for(let c=0;c<r;++c){let u=0;const f=this._numIndexPerPrimitive*this.primitiveIndices[c];let p=s*this.indices[f],b=o[p],A=o[p+1],P=o[p+2];for(let g=1;g<this._numIndexPerPrimitive;++g){p=s*this.indices[f+g];const S=o[p],v=o[p+1],$=o[p+2];S<b&&(b=S),v<A&&(A=v),$<P&&(P=$)}b<e[0]&&(u|=1),A<e[1]&&(u|=2),P<e[2]&&(u|=4),a[c]=u,++i[u]}let l=0;for(let c=0;c<8;++c)i[c]>0&&++l;if(l<2)return;const d=new Array(8);for(let c=0;c<8;++c)d[c]=i[c]>0?new Uint32Array(i[c]):void 0;for(let c=0;c<8;++c)i[c]=0;for(let c=0;c<r;++c){const u=a[c];d[u][i[u]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)d[c]!==void 0&&(this._children[c]=new Fa(d[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){ze.prune()}};const ze=new ya({deallocator:null});let Ar=class{constructor(){this.id=Ui()}unload(){}};var St;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Geometry=2]="Geometry",t[t.Material=3]="Material",t[t.Texture=4]="Texture",t[t.COUNT=5]="COUNT"})(St||(St={}));function rs(t){return t?{p0:Dt(t.p0),p1:Dt(t.p1),p2:Dt(t.p2)}:{p0:N(),p1:N(),p2:N()}}function as(t,e,r){return Se(rr,e,t),Se(ia,r,t),gr(wa(rr,rr,ia))/2}new Na(Vo);new Na((()=>rs()));const rr=N(),ia=N();function is(t,e,r){if(!t||!e)return!1;const{size:a,data:i}=t;Y(r,0,0,0),Y(ye,0,0,0);let o=0,s=0;for(let l=0;l<e.length-2;l+=3){const d=e[l+0]*a,c=e[l+1]*a,u=e[l+2]*a;Y(me,i[d+0],i[d+1],i[d+2]),Y(Pt,i[c+0],i[c+1],i[c+2]),Y(Rt,i[u+0],i[u+1],i[u+2]);const f=as(me,Pt,Rt);f?(Ae(me,me,Pt),Ae(me,me,Rt),Ze(me,me,1/3*f),Ae(r,r,me),o+=f):(Ae(ye,ye,me),Ae(ye,ye,Pt),Ae(ye,ye,Rt),s+=3)}return(s!==0||o!==0)&&(o!==0?(Ze(r,r,1/o),!0):s!==0&&(Ze(r,ye,1/s),!0))}function os(t,e,r){if(!t||!e)return!1;const{size:a,data:i}=t;Y(r,0,0,0);let o=-1,s=0;for(let l=0;l<e.length;l++){const d=e[l]*a;o!==d&&(r[0]+=i[d+0],r[1]+=i[d+1],r[2]+=i[d+2],s++),o=d}return s>1&&Ze(r,r,1/s),s>0}const me=N(),Pt=N(),Rt=N(),ye=N();let za=class Va extends Ar{constructor(e,r=[],a=Ft.Triangle,i=null,o=-1){super(),this._primitiveType=a,this.objectAndLayerIdColor=i,this.edgeIndicesLength=o,this.type=St.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[s,l]of e)l&&this._vertexAttributes.set(s,{...l});if(r==null||r.length===0){const s=ss(this._vertexAttributes),l=ea(s);this.edgeIndicesLength=this.edgeIndicesLength<0?s:this.edgeIndicesLength;for(const d of this._vertexAttributes.keys())this._indices.set(d,l)}else for(const[s,l]of r)l&&(this._indices.set(s,bo(l)),s===h.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(s).length:this.edgeIndicesLength))}cloneShallow(){const e=new Va([],void 0,this._primitiveType,this.objectAndLayerIdColor,void 0),{_vertexAttributes:r,_indices:a}=e;return this._vertexAttributes.forEach(((i,o)=>r.set(o,i))),this._indices.forEach(((i,o)=>a.set(o,i))),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r.data=Array.from(r.data),r.exclusive=!0),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return k(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===Ft.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(h.POSITION),a=this.vertexAttributes.get(h.POSITION);return is(a,r,e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(h.POSITION),a=this.vertexAttributes.get(h.POSITION);return os(a,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(h.POSITION);if(!e||e.length===0)return null;const r=this.primitiveType===Ft.Triangle?3:1;ae(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const a=ea(e.length/r),i=this.vertexAttributes.get(h.POSITION);return i?new ts(a,r,e,i):null}};function ss(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}let Cr=class{};function n(t,...e){let r="";for(let a=0;a<e.length;a++)r+=t[a]+e[a];return r+=t[t.length-1],r}(function(t){function e(a){return Math.round(a).toString()}function r(a){return a.toPrecision(8)}t.int=e,t.float=r})(n||(n={}));function Mr(t,e=!0){t.attributes.add(h.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(n`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?n`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}var z;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(z||(z={}));let K=class{constructor(e,r,a,i,o=null){this.name=e,this.type=r,this.arraySize=o,this.bind={[z.Pass]:null,[z.Draw]:null},m(a)&&m(i)&&(this.bind[a]=i)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},Q=class extends K{constructor(e,r){super(e,"vec4",z.Pass,((a,i,o)=>a.setUniform4fv(e,r(i,o))))}};const Ba=xr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Ga=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const a=this._includedModules.get(e);if(a!==r){Ba.error("Trying to include shader module multiple times with different sets of options.");const i=new Set;for(const o of Object.keys(a))a[o]!==e[o]&&i.add(o);for(const o of Object.keys(e))a[o]!==e[o]&&i.add(o);i.forEach((o=>console.error(`  ${o}: current ${a[o]} new ${e[o]}`)))}}else this._includedModules.set(e,r),e(this.builder,r)}},Mt=class extends Ga{constructor(){super(...arguments),this.vertex=new oa,this.fragment=new oa,this.attributes=new cs,this.varyings=new ds,this.extensions=new mr,this.constants=new Ua}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),a=this.attributes.generateSource(e),i=this.varyings.generateSource(),o=e==="vertex"?this.vertex:this.fragment,s=o.uniforms.generateSource(),l=o.code.generateSource(),d=e==="vertex"?hs:us,c=this.constants.generateSource().concat(o.constants.generateSource());return`
${r.join(`
`)}

${d}

${c.join(`
`)}

${s.join(`
`)}

${a.join(`
`)}

${i.join(`
`)}

${l.join(`
`)}`}generateBind(e,r){const a=new Map;this.vertex.uniforms.entries.forEach((s=>{const l=s.bind[e];m(l)&&a.set(s.name,l)})),this.fragment.uniforms.entries.forEach((s=>{const l=s.bind[e];m(l)&&a.set(s.name,l)}));const i=Array.from(a.values()),o=i.length;return(s,l,d)=>{for(let c=0;c<o;++c)i[c](r,s,l,d)}}},ns=class{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(k(e))Ba.error(`Trying to add null Uniform from ${new Error().stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Tr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map((e=>m(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}},ls=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},oa=class extends Ga{constructor(){super(...arguments),this.uniforms=new ns,this.code=new ls,this.constants=new Ua}get builder(){return this}},cs=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map((r=>`attribute ${r[1]} ${r[0]};`))}},ds=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}},mr=class fr{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?fr.ALLOWLIST_VERTEX:fr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((a=>r.includes(a))).map((a=>`#extension ${a} : enable`))}};mr.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],mr.ALLOWLIST_VERTEX=[];let Ua=class H{constructor(){this._entries=new Set}add(e,r,a){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=H._numberToFloatStr(a);break;case"int":i=H._numberToIntStr(a);break;case"bool":i=a.toString();break;case"vec2":i=`vec2(${H._numberToFloatStr(a[0])},                            ${H._numberToFloatStr(a[1])})`;break;case"vec3":i=`vec3(${H._numberToFloatStr(a[0])},                            ${H._numberToFloatStr(a[1])},                            ${H._numberToFloatStr(a[2])})`;break;case"vec4":i=`vec4(${H._numberToFloatStr(a[0])},                            ${H._numberToFloatStr(a[1])},                            ${H._numberToFloatStr(a[2])},                            ${H._numberToFloatStr(a[3])})`;break;case"ivec2":i=`ivec2(${H._numberToIntStr(a[0])},                             ${H._numberToIntStr(a[1])})`;break;case"ivec3":i=`ivec3(${H._numberToIntStr(a[0])},                             ${H._numberToIntStr(a[1])},                             ${H._numberToIntStr(a[2])})`;break;case"ivec4":i=`ivec4(${H._numberToIntStr(a[0])},                             ${H._numberToIntStr(a[1])},                             ${H._numberToIntStr(a[2])},                             ${H._numberToIntStr(a[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(a,(o=>H._numberToFloatStr(o))).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const us=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,hs=`precision highp float;
precision highp sampler2D;`,Or="Size",Yt="InvSize";function et(t,e,r=!1,a=0){if(t.hasWebGL2Context){const i=n`vec2(textureSize(${e}, ${n.int(a)}))`;return r?"(1.0 / "+i+")":i}return r?e+Yt:e+Or}function ms(t,e,r,a=null,i=0){if(t.hasWebGL2Context)return n`texelFetch(${e}, ivec2(${r}), ${n.int(i)})`;let o=n`texture2D(${e}, ${r} * `;return o+=a?n`(${a}))`:n`${e+Yt})`,o}let ne=class extends K{constructor(e,r){super(e,"vec2",z.Pass,((a,i,o)=>a.setUniform2fv(e,r(i,o))))}};var j;(function(t){t[t.None=0]="None",t[t.Size=1]="Size",t[t.InvSize=2]="InvSize"})(j||(j={}));let te=class extends K{constructor(e,r){super(e,"sampler2D",z.Pass,((a,i,o)=>a.bindTexture(e,r(i,o))))}};function He(t,e,r=j.None){const a=[new te(t,e)];if(r&j.Size){const i=t+Or;a.push(new ne(i,((o,s)=>{const l=e(o,s);return m(l)?Me(sa,l.descriptor.width,l.descriptor.height):Vt})))}if(r&j.InvSize){const i=t+Yt;a.push(new ne(i,((o,s)=>{const l=e(o,s);return m(l)?Me(sa,1/l.descriptor.width,1/l.descriptor.height):Vt})))}return a}const sa=Wt();let Ha=class extends Cr{constructor(){super(...arguments),this.color=jt(1,1,1,1)}};function fs(){const t=new Mt;return t.include(Mr),t.fragment.uniforms.add([new te("tex",(e=>e.texture)),new Q("uColor",(e=>e.color))]),t.fragment.code.add(n`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),t}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Ha,build:fs},Symbol.toStringTag,{value:"Module"}));function ps(){if(k(ar)){const t=e=>Hi(`esri/libs/basisu/${e}`);ar=wt(()=>import("./basis_transcoder-3G0ofzqd.js"),__vite__mapDeps([0,1])).then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((r=>(r.initializeBasis(),delete r.then,r)))))}return ar}let ar;var Ge;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Ge||(Ge={}));let de=null,Lt=null;async function ka(){return k(Lt)&&(Lt=ps(),de=await Lt),Lt}function vs(t,e){if(k(de))return t.byteLength;const r=new de.BasisFile(new Uint8Array(t)),a=ja(r)?Wa(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),a}function gs(t,e){if(k(de))return t.byteLength;const r=new de.KTX2File(new Uint8Array(t)),a=qa(r)?Wa(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),a}function Wa(t,e,r,a,i){const o=Wo(e?_e.COMPRESSED_RGBA8_ETC2_EAC:_e.COMPRESSED_RGB8_ETC2),s=i&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*a*o*s)}function ja(t){return t.getNumImages()>=1&&!t.isUASTC()}function qa(t){return t.getFaces()>=1&&t.isETC1S()}async function xs(t,e,r){k(de)&&(de=await ka());const a=new de.BasisFile(new Uint8Array(r));if(!ja(a))return null;a.startTranscoding();const i=Xa(t,e,a.getNumLevels(0),a.getHasAlpha(),a.getImageWidth(0,0),a.getImageHeight(0,0),((o,s)=>a.getImageTranscodedSizeInBytes(0,o,s)),((o,s,l)=>a.transcodeImage(l,0,o,s,0,0)));return a.close(),a.delete(),i}async function Ts(t,e,r){k(de)&&(de=await ka());const a=new de.KTX2File(new Uint8Array(r));if(!qa(a))return null;a.startTranscoding();const i=Xa(t,e,a.getLevels(),a.getHasAlpha(),a.getWidth(),a.getHeight(),((o,s)=>a.getImageTranscodedSizeInBytes(o,0,0,s)),((o,s,l)=>a.transcodeImage(l,o,0,0,s,0,-1,-1)));return a.close(),a.delete(),i}function Xa(t,e,r,a,i,o,s,l){const{compressedTextureETC:d,compressedTextureS3TC:c}=t.capabilities,[u,f]=d?a?[Ge.ETC2_RGBA,_e.COMPRESSED_RGBA8_ETC2_EAC]:[Ge.ETC1_RGB,_e.COMPRESSED_RGB8_ETC2]:c?a?[Ge.BC3_RGBA,_e.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ge.BC1_RGB,_e.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ge.RGBA32,Ve.RGBA],p=e.hasMipmap?r:Math.min(1,r),b=[];for(let S=0;S<p;S++)b.push(new Uint8Array(s(S,u))),l(S,u,b[S]);const A=b.length>1,P=A?Ue.LINEAR_MIPMAP_LINEAR:Ue.LINEAR,g={...e,samplingMode:P,hasMipmap:A,internalFormat:f,width:i,height:o};return new Ce(t,g,{type:"compressed",levels:b})}const ut=xr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),bs=542327876,_s=131072,Ss=4;function $r(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function ys(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const ws=$r("DXT1"),As=$r("DXT3"),Cs=$r("DXT5"),Ms=31,Os=0,$s=1,Ps=2,Rs=3,Ls=4,Es=7,Ns=20,Is=21;function Ds(t,e,r){const{textureData:a,internalFormat:i,width:o,height:s}=ki(Fs(r,e.hasMipmap??!1));return e.samplingMode=a.levels.length>1?Ue.LINEAR_MIPMAP_LINEAR:Ue.LINEAR,e.hasMipmap=a.levels.length>1,e.internalFormat=i,e.width=o,e.height=s,new Ce(t,e,a)}function Fs(t,e){const r=new Int32Array(t,0,Ms);if(r[Os]!==bs)return ut.error("Invalid magic number in DDS header"),null;if(!(r[Ns]&Ss))return ut.error("Unsupported format, must contain a FourCC code"),null;const a=r[Is];let i,o;switch(a){case ws:i=8,o=_e.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case As:i=16,o=_e.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Cs:i=16,o=_e.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return ut.error("Unsupported FourCC code:",ys(a)),null}let s=1,l=r[Ls],d=r[Rs];(3&l)==0&&(3&d)==0||(ut.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,d=d+3&-4);const c=l,u=d;let f,p;r[Ps]&_s&&e!==!1&&(s=Math.max(1,r[Es])),s===1||Bt(l)&&Bt(d)||(ut.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let b=r[$s]+4;const A=[];for(let P=0;P<s;++P)p=(l+3>>2)*(d+3>>2)*i,f=new Uint8Array(t,b,p),A.push(f),b+=p,l=Math.max(1,l>>1),d=Math.max(1,d>>1);return{textureData:{type:"compressed",levels:A},internalFormat:o,width:c,height:u}}const Ot=new Map([[h.POSITION,0],[h.NORMAL,1],[h.UV0,2],[h.COLOR,3],[h.SIZE,4],[h.TANGENT,4],[h.AUXPOS1,5],[h.SYMBOLCOLOR,5],[h.AUXPOS2,6],[h.FEATUREATTRIBUTE,6],[h.INSTANCEFEATUREATTRIBUTE,6],[h.INSTANCECOLOR,7],[h.OBJECTANDLAYERIDCOLOR,7],[h.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[h.MODEL,8],[h.MODELNORMAL,12],[h.MODELORIGINHI,11],[h.MODELORIGINLO,15]]);new ce(h.POSITION,3,le.FLOAT,0,12);new ce(h.POSITION,3,le.FLOAT,0,20),new ce(h.UV0,2,le.FLOAT,12,20);new ce(h.POSITION,3,le.FLOAT,0,32),new ce(h.NORMAL,3,le.FLOAT,12,32),new ce(h.UV0,2,le.FLOAT,24,32);new ce(h.POSITION,3,le.FLOAT,0,16),new ce(h.COLOR,4,le.UNSIGNED_BYTE,12,16);const zs=[new ce(h.POSITION,2,le.FLOAT,0,8)],Vs=[new ce(h.POSITION,2,le.FLOAT,0,16),new ce(h.UV0,2,le.FLOAT,8,16)];let Bs=class extends jo{};function Gs(t,e=zs,r=Ot,a=-1,i=1){let o=null;return e===Vs?o=new Float32Array([a,a,0,0,i,a,1,0,a,i,0,1,i,i,1,1]):o=new Float32Array([a,a,i,a,a,i,i,i]),new Bs(t,r,{geometry:e},{geometry:qo.createVertex(t,Bo.STATIC_DRAW,o)})}let pt=class xe extends Ar{constructor(e,r){super(),this._data=e,this.type=St.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Wi,this._passParameters=new Ha,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Ye.REPEAT,t:Ye.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||tr.STRETCH,this.estimatedTexMemRequired=xe._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;k(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(kr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const a=()=>{e.removeEventListener("canplay",a),e.play()};e.addEventListener("canplay",a)}}}_startPreloadImageElement(e){ji(e.src)||kr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(k(e))return 0;if(lt(e)||ct(e))return r.encoding===xe.KTX2_ENCODING?gs(e,r.mipmap):r.encoding===xe.BASIS_ENCODING?vs(e,r.mipmap):e.byteLength;const{width:a,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?xe._getDataDimensions(e):r;return(r.mipmap?4/3:1)*a*i*(r.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:aa.TEXTURE_2D,pixelFormat:Ve.RGBA,dataType:ra.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Ue.LINEAR_MIPMAP_LINEAR:Ue.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,r){if(m(this._glTexture))return this._glTexture;if(m(this._loadingPromise))return this._loadingPromise;const a=this._data;return k(a)?(this._glTexture=new Ce(e,this._createDescriptor(e),null),this._glTexture):typeof a=="string"?this._loadFromURL(e,r,a):a instanceof Image?this._loadFromImageElement(e,r,a):a instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,a):a instanceof ImageData||a instanceof HTMLCanvasElement?this._loadFromImage(e,a,r):(lt(a)||ct(a))&&this.params.encoding===xe.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,a)):(lt(a)||ct(a))&&this.params.encoding===xe.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,a)):(lt(a)||ct(a))&&this.params.encoding===xe.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,a)):ct(a)?this._loadFromPixelData(e,a):lt(a)?this._loadFromPixelData(e,new Uint8Array(a)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,r,a){if(!(this._data instanceof HTMLVideoElement)||k(this._glTexture)||this._data.readyState<vt.HAVE_CURRENT_DATA||a===this._data.currentTime)return a;if(m(this._powerOfTwoStretchInfo)){const{framebuffer:i,vao:o,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this._data),this._drawStretchedTexture(e,r,i,o,s,this._glTexture)}else{const{videoWidth:i,videoHeight:o}=this._data,{width:s,height:l}=this._glTexture.descriptor;i!==s||o!==l?this._glTexture.updateData(0,0,0,Math.min(i,s),Math.min(o,l),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,r){return this._glTexture=Ds(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync((()=>Ts(e,this._createDescriptor(e),r).then((a=>(this._glTexture=a,a)))))}_loadFromBasis(e,r){return this._loadAsync((()=>xs(e,this._createDescriptor(e),r).then((a=>(this._glTexture=a,a)))))}_loadFromPixelData(e,r){ae(this.params.width>0&&this.params.height>0);const a=this._createDescriptor(e);return a.pixelFormat=this.params.components===1?Ve.LUMINANCE:this.params.components===3?Ve.RGB:Ve.RGBA,a.width=this.params.width,a.height=this.params.height,this._glTexture=new Ce(e,a,r),this._glTexture}_loadFromURL(e,r,a){return this._loadAsync((async i=>{const o=await Ea(a,{signal:i});return Wr(i),this._loadFromImage(e,o,r)}))}_loadFromImageElement(e,r,a){return a.complete?this._loadFromImage(e,a,r):this._loadAsync((async i=>{const o=await qi(a,a.src,!1,i);return Wr(i),this._loadFromImage(e,o,r)}))}_loadFromVideoElement(e,r,a){return a.readyState>=vt.HAVE_CURRENT_DATA?this._loadFromImage(e,a,r):this._loadFromVideoElementAsync(e,r,a)}_loadFromVideoElementAsync(e,r,a){return this._loadAsync((i=>new Promise(((o,s)=>{const l=()=>{a.removeEventListener("loadeddata",d),a.removeEventListener("error",c),Ki(u)},d=()=>{a.readyState>=vt.HAVE_CURRENT_DATA&&(l(),o(this._loadFromImage(e,a,r)))},c=f=>{l(),s(f||new Tr("Failed to load video"))};a.addEventListener("loadeddata",d),a.addEventListener("error",c);const u=Xi(i,(()=>c(Yi())))}))))}_loadFromImage(e,r,a){const i=xe._getDataDimensions(r);this.params.width=i.width,this.params.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=this.params.components===3?Ve.RGB:Ve.RGBA,!this._requiresPowerOfTwo(e,o)||Bt(i.width)&&Bt(i.height)?(o.width=i.width,o.height=i.height,this._glTexture=new Ce(e,o,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,i,o,a),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const a=e(r.signal);this._loadingPromise=a;const i=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===a&&(this._loadingPromise=null)};return a.then(i,i),a}_requiresPowerOfTwo(e,r){const a=Ye.CLAMP_TO_EDGE,i=typeof r.wrapMode=="number"?r.wrapMode===a:r.wrapMode.s===a&&r.wrapMode.t===a;return!Ho(e.gl)&&(r.hasMipmap||!i)}_makePowerOfTwoTexture(e,r,a,i,o){const{width:s,height:l}=a,d=jr(s),c=jr(l);let u;switch(i.width=d,i.height=c,this.params.powerOfTwoResizeMode){case tr.PAD:i.textureCoordinateScaleFactor=[s/d,l/c],u=new Ce(e,i),u.updateData(0,0,0,s,l,r);break;case tr.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,r,i,o());break;default:At(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,r,a,i){const o=new Ce(e,a),s=new Xo(e,{colorTarget:Uo.TEXTURE,depthStencilTarget:Go.NONE},o),l=new Ce(e,{target:aa.TEXTURE_2D,pixelFormat:a.pixelFormat,dataType:ra.UNSIGNED_BYTE,wrapMode:Ye.CLAMP_TO_EDGE,samplingMode:Ue.LINEAR,flipped:!!a.flipped,maxAnisotropy:8,preMultiplyAlpha:a.preMultiplyAlpha},r),d=Gs(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,s,d,l,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:d,sourceTexture:l,framebuffer:s}:(d.dispose(!0),l.dispose(),s.detachColorTexture(),s.dispose()),e.bindFramebuffer(c),o}_drawStretchedTexture(e,r,a,i,o,s){this._passParameters.texture=o,e.bindFramebuffer(a);const l=e.getViewport();e.setViewport(0,0,s.descriptor.width,s.descriptor.height),e.bindTechnique(r,this._passParameters,null),e.bindVAO(i),e.drawArrays(ft.TRIANGLE_STRIP,0,Yo(i,"geometry")),e.bindFramebuffer(null),e.setViewport(l.x,l.y,l.width,l.height),this._passParameters.texture=null}unload(){if(m(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:a}=this._powerOfTwoStretchInfo;r.dispose(!0),a.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(m(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),m(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};var vt;pt.DDS_ENCODING="image/vnd-ms.dds",pt.KTX2_ENCODING="image/ktx2",pt.BASIS_ENCODING="image/x.basis",(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(vt||(vt={}));var C;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExludeHighlight=5]="ShadowExludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(C||(C={}));function Us(t){const e=n`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.vertex.code.add(e)}function Kt(t,e){e.normalType===X.Attribute&&(t.attributes.add(h.NORMAL,"vec3"),t.vertex.code.add(n`vec3 normalModel() {
return normal;
}`)),e.normalType===X.CompressedAttribute&&(t.include(Us),t.attributes.add(h.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(n`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===X.ScreenDerivative&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(n`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var X;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(X||(X={}));function Hs(t,e){const r=t.fragment;switch(r.code.add(n`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case ee.None:r.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case ee.View:r.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case ee.WindingOrder:r.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:At(e.doubleSidedMode);case ee.COUNT:}}var ee;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(ee||(ee={}));var Z;function tt(t,e){switch(e.textureCoordinateType){case Z.Default:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(n`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case Z.Compressed:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(n`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case Z.Atlas:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(h.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(n`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:At(e.textureCoordinateType);case Z.None:return void t.vertex.code.add(n`void forwardTextureCoordinates() {}`);case Z.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(Z||(Z={}));function ks(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(n`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function Ya(t,e){switch(t.include(tt,e),t.fragment.code.add(n`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.textureCoordinateType){case Z.Default:case Z.Compressed:return void t.fragment.code.add(n`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case Z.Atlas:return t.include(ks),void t.fragment.code.add(n`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:At(e.textureCoordinateType);case Z.None:case Z.COUNT:return}}let ue=class extends K{constructor(e,r){super(e,"vec3",z.Draw,((a,i,o,s)=>a.setUniform3fv(e,r(i,o,s))))}},q=class extends K{constructor(e,r){super(e,"vec3",z.Pass,((a,i,o)=>a.setUniform3fv(e,r(i,o))))}},pr=class extends K{constructor(e,r){super(e,"vec2",z.Draw,((a,i,o,s)=>a.setUniform2fv(e,r(i,o,s))))}},Ka=class extends K{constructor(e,r){super(e,"sampler2D",z.Draw,((a,i,o)=>a.bindTexture(e,r(i,o))))}};function zt(t,e,r=j.None){const a=[new Ka(t,e)];if(r&j.Size){const i=t+Or;a.push(new pr(i,((o,s)=>{const l=e(o,s);return m(l)?Me(na,l.descriptor.width,l.descriptor.height):Vt})))}if(r&j.InvSize){const i=t+Yt;a.push(new pr(i,((o,s)=>{const l=e(o,s);return m(l)?Me(na,1/l.descriptor.width,1/l.descriptor.height):Vt})))}return a}const na=Wt();let Ws=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,r,a=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(a,r),this._technique),this._technique}ensureResources(e){return hr.LOADED}},js=class extends Ws{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(r=>this._texture=r)),this._acquire(e.normalTextureId,(r=>this._textureNormal=r)),this._acquire(e.emissiveTextureId,(r=>this._textureEmissive=r)),this._acquire(e.occlusionTextureId,(r=>this._textureOcclusion=r)),this._acquire(e.metallicRoughnessTextureId,(r=>this._textureMetallicRoughness=r))}dispose(){this._texture=Fe(this._texture),this._textureNormal=Fe(this._textureNormal),this._textureEmissive=Fe(this._textureEmissive),this._textureOcclusion=Fe(this._textureOcclusion),this._textureMetallicRoughness=Fe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?hr.LOADED:hr.LOADING}get textureBindParameters(){return new qs(m(this._texture)?this._texture.glTexture:null,m(this._textureNormal)?this._textureNormal.glTexture:null,m(this._textureEmissive)?this._textureEmissive.glTexture:null,m(this._textureOcclusion)?this._textureOcclusion.glTexture:null,m(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(k(this._texture)||e!==this._texture.id)&&(this._texture=Fe(this._texture),this._textureId=e,this._acquire(this._textureId,(r=>this._texture=r)))}_acquire(e,r){if(k(e))return void r(null);const a=this._textureRepository.acquire(e);if(Zi(a))return++this._numLoading,void a.then((i=>{if(this._disposed)return Fe(i),void r(null);r(i)})).finally((()=>--this._numLoading));r(a)}},qs=class extends Cr{constructor(e=null,r=null,a=null,i=null,o=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=a,this.textureOcclusion=i,this.textureMetallicRoughness=o}};Jo(0,.6,.2);var D;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.COUNT=5]="COUNT"})(D||(D={}));function Za(t,e){const r=t.fragment,a=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===D.Normal&&a&&t.include(Ya,e),e.pbrMode!==D.Schematic)if(e.pbrMode!==D.Disabled){if(e.pbrMode===D.Normal){r.code.add(n`vec3 mrr;
vec3 emission;
float occlusion;`);const i=e.supportsTextureAtlas?e.hasWebGL2Context?j.None:j.Size:j.None,o=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(o===z.Pass?He("texMetallicRoughness",(s=>s.textureMetallicRoughness),i):zt("texMetallicRoughness",(s=>s.textureMetallicRoughness),i)),r.code.add(n`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(o===z.Pass?He("texEmission",(s=>s.textureEmissive),i):zt("texEmission",(s=>s.textureEmissive),i)),r.code.add(n`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(o===z.Pass?He("texOcclusion",(s=>s.textureOcclusion),i):zt("texOcclusion",(s=>s.textureOcclusion),i)),r.code.add(n`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(n`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(o===z.Pass?[new q("emissionFactor",(s=>s.emissiveFactor)),new q("mrrFactors",(s=>s.mrrFactors))]:[new ue("emissionFactor",(s=>s.emissiveFactor)),new ue("mrrFactors",(s=>s.mrrFactors))]),r.code.add(n`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?n`vtc.uv = vuv0;`:""}
      ${e.hasMetallicRoughnessTextureTransform?n`vtc.uv = metallicRoughnessUV;`:""}
      ${e.hasMetallicRoughnessTexture?e.supportsTextureAtlas?n`
                vtc.size = ${et(e,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:n`applyMetallnessAndRoughness(vtc);`:""}
      ${e.hasEmissiveTextureTransform?n`vtc.uv = emissiveUV;`:""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?n`
                vtc.size = ${et(e,"texEmission")};
                applyEmission(vtc);`:n`applyEmission(vtc);`:""}
      ${e.hasOcclusionTextureTransform?n`vtc.uv = occlusionUV;`:""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?n`
                vtc.size = ${et(e,"texOcclusion")};
                applyOcclusion(vtc);`:n`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(n`float getBakedOcclusion() { return 1.0; }`);else r.code.add(n`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Xs(t){return Math.abs(t*t*t)}function Ys(t,e,r){const a=r.parameters,i=r.paddingPixelsOverride;return ht.scale=Math.min(a.divisor/(e-a.offset),1),ht.factor=Xs(t),ht.minPixelSize=a.minPixelSize,ht.paddingPixels=i,ht}function Ks(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function Zs(t,e){return Math.max(Ji(t*e.scale,t,e.factor),Ks(t,e))}function Js(t,e,r,a){return Zs(t,Ys(e,r,a))}const ht={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function Qs(t){return!!m(t)&&!t.visible}const Et=ao();function en(t,e,r,a,i,o,s){if(!Qs(e))if(t.boundingInfo){ae(t.primitiveType===Ft.Triangle);const l=r.tolerance;Ja(t.boundingInfo,a,i,l,o,s)}else{const l=t.indices.get(h.POSITION),d=t.vertexAttributes.get(h.POSITION);ei(a,i,0,l.length/3,l,d,void 0,o,s)}}const tn=N();function Ja(t,e,r,a,i,o){if(k(t))return;const s=an(e,r,tn);if(to(Et,t.getBBMin()),ro(Et,t.getBBMax()),m(i)&&i.applyToAabb(Et),on(Et,e,s,a)){const{primitiveIndices:l,indices:d,position:c}=t,u=l?l.length:d.length/3;if(u>un){const f=t.getChildren();if(f!==void 0){for(let p=0;p<8;++p)f[p]!==void 0&&Ja(f[p],e,r,a,i,o);return}}ei(e,r,0,u,d,c,l,i,o)}}const Qa=N();function ei(t,e,r,a,i,o,s,l,d){if(s)return rn(t,e,r,a,i,o,s,l,d);const c=o.data,u=o.stride||o.size,f=t[0],p=t[1],b=t[2],A=e[0]-f,P=e[1]-p,g=e[2]-b;for(let S=r,v=3*r;S<a;++S){let $=u*i[v++],L=c[$++],V=c[$++],M=c[$];$=u*i[v++];let O=c[$++],I=c[$++],y=c[$];$=u*i[v++];let _=c[$++],E=c[$++],R=c[$];m(l)&&([L,V,M]=l.applyToVertex(L,V,M,S),[O,I,y]=l.applyToVertex(O,I,y,S),[_,E,R]=l.applyToVertex(_,E,R,S));const F=O-L,B=I-V,G=y-M,U=_-L,fe=E-V,pe=R-M,Le=P*pe-fe*g,it=g*U-pe*A,ot=A*fe-U*P,se=F*Le+B*it+G*ot;if(Math.abs(se)<=Number.EPSILON)continue;const ie=f-L,Ee=p-V,Ne=b-M,he=ie*Le+Ee*it+Ne*ot;if(se>0){if(he<0||he>se)continue}else if(he>0||he<se)continue;const ve=Ee*G-B*Ne,st=Ne*F-G*ie,nt=ie*B-F*Ee,Ie=A*ve+P*st+g*nt;if(se>0){if(Ie<0||he+Ie>se)continue}else if(Ie>0||he+Ie<se)continue;const De=(U*ve+fe*st+pe*nt)/se;De>=0&&d(De,ti(F,B,G,U,fe,pe,Qa),S,!1)}}function rn(t,e,r,a,i,o,s,l,d){const c=o.data,u=o.stride||o.size,f=t[0],p=t[1],b=t[2],A=e[0]-f,P=e[1]-p,g=e[2]-b;for(let S=r;S<a;++S){const v=s[S];let $=3*v,L=u*i[$++],V=c[L++],M=c[L++],O=c[L];L=u*i[$++];let I=c[L++],y=c[L++],_=c[L];L=u*i[$];let E=c[L++],R=c[L++],F=c[L];m(l)&&([V,M,O]=l.applyToVertex(V,M,O,S),[I,y,_]=l.applyToVertex(I,y,_,S),[E,R,F]=l.applyToVertex(E,R,F,S));const B=I-V,G=y-M,U=_-O,fe=E-V,pe=R-M,Le=F-O,it=P*Le-pe*g,ot=g*fe-Le*A,se=A*pe-fe*P,ie=B*it+G*ot+U*se;if(Math.abs(ie)<=Number.EPSILON)continue;const Ee=f-V,Ne=p-M,he=b-O,ve=Ee*it+Ne*ot+he*se;if(ie>0){if(ve<0||ve>ie)continue}else if(ve>0||ve<ie)continue;const st=Ne*U-G*he,nt=he*B-U*Ee,Ie=Ee*G-B*Ne,De=A*st+P*nt+g*Ie;if(ie>0){if(De<0||ve+De>ie)continue}else if(De>0||ve+De<ie)continue;const Ur=(fe*st+pe*nt+Le*Ie)/ie;Ur>=0&&d(Ur,ti(B,G,U,fe,pe,Le,Qa),v,!1)}}const la=N(),ca=N();function ti(t,e,r,a,i,o,s){return Y(la,t,e,r),Y(ca,a,i,o),wa(s,la,ca),br(s,s),s}function an(t,e,r){return Y(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function on(t,e,r,a){return sn(t,e,r,a,1/0)}function sn(t,e,r,a,i){const o=(t[0]-a-e[0])*r[0],s=(t[3]+a-e[0])*r[0];let l=Math.min(o,s),d=Math.max(o,s);const c=(t[1]-a-e[1])*r[1],u=(t[4]+a-e[1])*r[1];if(d=Math.min(d,Math.max(c,u)),d<0||(l=Math.max(l,Math.min(c,u)),l>d))return!1;const f=(t[2]-a-e[2])*r[2],p=(t[5]+a-e[2])*r[2];return d=Math.min(d,Math.max(f,p)),!(d<0)&&(l=Math.max(l,Math.min(f,p)),!(l>d)&&l<i)}function nn(t,e,r,a,i){let o=(r.screenLength||0)*t.pixelRatio;m(i)&&(o=Js(o,a,e,i));const s=o*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Qi(s*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function ri(t,e){const r=e?ri(e):{};for(const a in t){let i=t[a];i&&i.forEach&&(i=cn(i)),i==null&&a in r||(r[a]=i)}return r}function ln(t,e){let r=!1;for(const a in e){const i=e[a];i!==void 0&&(Array.isArray(i)?t[a]===null?(t[a]=i.slice(),r=!0):eo(t[a],i)&&(r=!0):t[a]!==i&&(r=!0,t[a]=i))}return r}function cn(t){const e=[];return t.forEach((r=>e.push(r))),e}const dn={multiply:1,ignore:2,replace:3,tint:4},un=1e3;let hn=class extends Ar{constructor(e,r){super(),this.type=St.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Ot,this._parameters=ri(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){ln(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){m(this.repository)&&this.repository.materialChanged(this)}};var vr;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(vr||(vr={}));var Ke;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(Ke||(Ke={}));let mn=class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=N(),this._mbs=Ia(),this._obb={center:N(),halfSize:Qo(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,r,a){const i=e,o=r,s=a+this.componentLocalOriginLength,l=this._totalOffset/Math.sqrt(i*i+o*o+s*s);return this._tmpVertex[0]=e+i*l,this._tmpVertex[1]=r+o*l,this._tmpVertex[2]=a+s*l,this._tmpVertex}applyToAabb(e){const r=e[0],a=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],s=e[4],l=e[5]+this.componentLocalOriginLength,d=r*o<0?0:Math.min(Math.abs(r),Math.abs(o)),c=a*s<0?0:Math.min(Math.abs(a),Math.abs(s)),u=i*l<0?0:Math.min(Math.abs(i),Math.abs(l)),f=Math.sqrt(d*d+c*c+u*u);if(f<this._totalOffset)return e[0]-=r<0?this._totalOffset:0,e[1]-=a<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=s>0?this._totalOffset:0,e[5]+=l>0?this._totalOffset:0,e;const p=Math.max(Math.abs(r),Math.abs(o)),b=Math.max(Math.abs(a),Math.abs(s)),A=Math.max(Math.abs(i),Math.abs(l)),P=Math.sqrt(p*p+b*b+A*A),g=this._totalOffset/P,S=this._totalOffset/f;return e[0]+=r*(r>0?g:S),e[1]+=a*(a>0?g:S),e[2]+=i*(i>0?g:S),e[3]+=o*(o<0?g:S),e[4]+=s*(s<0?g:S),e[5]+=l*(l<0?g:S),e}applyToMbs(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),a=this._totalOffset/r;return this._mbs[0]=e[0]+e[0]*a,this._mbs[1]=e[1]+e[1]*a,this._mbs[2]=e[2]+e[2]*a,this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){const r=e.center,a=this._totalOffset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this._obb.center[0]=r[0]+r[0]*a,this._obb.center[1]=r[1]+r[1]*a,this._obb.center[2]=r[2]+r[2]*a,qr(this._obb.halfSize,e.halfSize,e.quaternion),Ae(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,Se(this._obb.halfSize,this._obb.halfSize,e.center),Ko(ua,e.quaternion),qr(this._obb.halfSize,this._obb.halfSize,ua),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},fn=class{constructor(e=0){this.offset=e,this.sphere=Ia(),this.tmpVertex=N()}applyToVertex(e,r,a){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*r+i[8]*a+i[12],s=i[1]*e+i[5]*r+i[9]*a+i[13],l=i[2]*e+i[6]*r+i[10]*a+i[14];const d=this.offset/Math.sqrt(o*o+s*s+l*l);o+=o*d,s+=s*d,l+=l*d;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*o+c[4]*s+c[8]*l+c[12],this.tmpVertex[1]=c[1]*o+c[5]*s+c[9]*l+c[13],this.tmpVertex[2]=c[2]*o+c[6]*s+c[10]*l+c[14],this.tmpVertex}applyToMinMax(e,r){const a=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*a,e[1]+=e[1]*a,e[2]+=e[2]*a;const i=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*i,r[1]+=r[1]*i,r[2]+=r[2]*i}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const a=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*a,e[4]+=e[4]*a,e[5]+=e[5]*a,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),a=this.offset/r;return this.sphere[0]=e[0]+e[0]*a,this.sphere[1]=e[1]+e[1]*a,this.sphere[2]=e[2]+e[2]*a,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const da=new fn;function pn(t){return m(t)?(da.offset=t,da):null}new mn;const ua=Zo();function vn(t,e,r,a){const i=r.typedBuffer,o=r.typedBufferStride,s=t.length;a*=o;for(let l=0;l<s;++l){const d=2*t[l];i[a]=e[d],i[a+1]=e[d+1],a+=o}}function ai(t,e,r,a,i){const o=r.typedBuffer,s=r.typedBufferStride,l=t.length;if(a*=s,i==null||i===1)for(let d=0;d<l;++d){const c=3*t[d];o[a]=e[c],o[a+1]=e[c+1],o[a+2]=e[c+2],a+=s}else for(let d=0;d<l;++d){const c=3*t[d];for(let u=0;u<i;++u)o[a]=e[c],o[a+1]=e[c+1],o[a+2]=e[c+2],a+=s}}function gn(t,e,r,a,i=1){const o=r.typedBuffer,s=r.typedBufferStride,l=t.length;if(a*=s,i===1)for(let d=0;d<l;++d){const c=4*t[d];o[a]=e[c],o[a+1]=e[c+1],o[a+2]=e[c+2],o[a+3]=e[c+3],a+=s}else for(let d=0;d<l;++d){const c=4*t[d];for(let u=0;u<i;++u)o[a]=e[c],o[a+1]=e[c+1],o[a+2]=e[c+2],o[a+3]=e[c+3],a+=s}}function xn(t,e,r,a,i,o=1){if(!r)return void ai(t,e,a,i,o);const s=a.typedBuffer,l=a.typedBufferStride,d=t.length,c=r[0],u=r[1],f=r[2],p=r[4],b=r[5],A=r[6],P=r[8],g=r[9],S=r[10],v=r[12],$=r[13],L=r[14];i*=l;let V=0,M=0,O=0;const I=ii(r)?y=>{V=e[y]+v,M=e[y+1]+$,O=e[y+2]+L}:y=>{const _=e[y],E=e[y+1],R=e[y+2];V=c*_+p*E+P*R+v,M=u*_+b*E+g*R+$,O=f*_+A*E+S*R+L};if(o===1)for(let y=0;y<d;++y)I(3*t[y]),s[i]=V,s[i+1]=M,s[i+2]=O,i+=l;else for(let y=0;y<d;++y){I(3*t[y]);for(let _=0;_<o;++_)s[i]=V,s[i+1]=M,s[i+2]=O,i+=l}}function Tn(t,e,r,a,i,o=1){if(!r)return void ai(t,e,a,i,o);const s=r,l=a.typedBuffer,d=a.typedBufferStride,c=t.length,u=s[0],f=s[1],p=s[2],b=s[4],A=s[5],P=s[6],g=s[8],S=s[9],v=s[10],$=!Aa(s),L=1e-6,V=1-L;i*=d;let M=0,O=0,I=0;const y=ii(s)?_=>{M=e[_],O=e[_+1],I=e[_+2]}:_=>{const E=e[_],R=e[_+1],F=e[_+2];M=u*E+b*R+g*F,O=f*E+A*R+S*F,I=p*E+P*R+v*F};if(o===1)if($)for(let _=0;_<c;++_){y(3*t[_]);const E=M*M+O*O+I*I;if(E<V&&E>L){const R=1/Math.sqrt(E);l[i]=M*R,l[i+1]=O*R,l[i+2]=I*R}else l[i]=M,l[i+1]=O,l[i+2]=I;i+=d}else for(let _=0;_<c;++_)y(3*t[_]),l[i]=M,l[i+1]=O,l[i+2]=I,i+=d;else for(let _=0;_<c;++_){if(y(3*t[_]),$){const E=M*M+O*O+I*I;if(E<V&&E>L){const R=1/Math.sqrt(E);M*=R,O*=R,I*=R}}for(let E=0;E<o;++E)l[i]=M,l[i+1]=O,l[i+2]=I,i+=d}}function bn(t,e,r,a,i,o=1){if(!r)return void gn(t,e,a,i,o);const s=r,l=a.typedBuffer,d=a.typedBufferStride,c=t.length,u=s[0],f=s[1],p=s[2],b=s[4],A=s[5],P=s[6],g=s[8],S=s[9],v=s[10],$=!Aa(s),L=1e-6,V=1-L;if(i*=d,o===1)for(let M=0;M<c;++M){const O=4*t[M],I=e[O],y=e[O+1],_=e[O+2],E=e[O+3];let R=u*I+b*y+g*_,F=f*I+A*y+S*_,B=p*I+P*y+v*_;if($){const G=R*R+F*F+B*B;if(G<V&&G>L){const U=1/Math.sqrt(G);R*=U,F*=U,B*=U}}l[i]=R,l[i+1]=F,l[i+2]=B,l[i+3]=E,i+=d}else for(let M=0;M<c;++M){const O=4*t[M],I=e[O],y=e[O+1],_=e[O+2],E=e[O+3];let R=u*I+b*y+g*_,F=f*I+A*y+S*_,B=p*I+P*y+v*_;if($){const G=R*R+F*F+B*B;if(G<V&&G>L){const U=1/Math.sqrt(G);R*=U,F*=U,B*=U}}for(let G=0;G<o;++G)l[i]=R,l[i+1]=F,l[i+2]=B,l[i+3]=E,i+=d}}function ha(t,e,r,a,i,o=1){const s=a.typedBuffer,l=a.typedBufferStride,d=t.length;if(i*=l,r!==e.length||r!==4)if(o!==1)if(r!==4)for(let c=0;c<d;++c){const u=3*t[c];for(let f=0;f<o;++f)s[i]=e[u],s[i+1]=e[u+1],s[i+2]=e[u+2],s[i+3]=255,i+=l}else for(let c=0;c<d;++c){const u=4*t[c];for(let f=0;f<o;++f)s[i]=e[u],s[i+1]=e[u+1],s[i+2]=e[u+2],s[i+3]=e[u+3],i+=l}else{if(r===4){for(let c=0;c<d;++c){const u=4*t[c];s[i]=e[u],s[i+1]=e[u+1],s[i+2]=e[u+2],s[i+3]=e[u+3],i+=l}return}for(let c=0;c<d;++c){const u=3*t[c];s[i]=e[u],s[i+1]=e[u+1],s[i+2]=e[u+2],s[i+3]=255,i+=l}}else{s[i]=e[0],s[i+1]=e[1],s[i+2]=e[2],s[i+3]=e[3];const c=new Uint32Array(a.typedBuffer.buffer,a.start),u=l/4,f=c[i/=4];i+=u;const p=d*o;for(let b=1;b<p;++b)c[i]=f,i+=u}}function _n(t,e,r,a,i=1){const o=e.typedBuffer,s=e.typedBufferStride;if(a*=s,i===1)for(let l=0;l<r;++l)o[a]=t[0],o[a+1]=t[1],o[a+2]=t[2],o[a+3]=t[3],a+=s;else for(let l=0;l<r;++l)for(let d=0;d<i;++d)o[a]=t[0],o[a+1]=t[1],o[a+2]=t[2],o[a+3]=t[3],a+=s}function Sn(t,e,r,a,i,o){for(const s of e.fieldNames){const l=t.vertexAttributes.get(s),d=t.indices.get(s);if(l&&d)switch(s){case h.POSITION:{ae(l.size===3);const c=i.getField(s,Qe);c&&xn(d,l.data,r,c,o);break}case h.NORMAL:{ae(l.size===3);const c=i.getField(s,Qe);c&&Tn(d,l.data,a,c,o);break}case h.UV0:{ae(l.size===2);const c=i.getField(s,Ra);c&&vn(d,l.data,c,o);break}case h.COLOR:{ae(l.size===3||l.size===4);const c=i.getField(s,Je);c&&ha(d,l.data,l.size,c,o);break}case h.SYMBOLCOLOR:{ae(l.size===3||l.size===4);const c=i.getField(s,Je);c&&ha(d,l.data,l.size,c,o);break}case h.TANGENT:{ae(l.size===4);const c=i.getField(s,ur);c&&bn(d,l.data,a,c,o);break}}else if(s===h.OBJECTANDLAYERIDCOLOR&&m(t.objectAndLayerIdColor)&&t.objectAndLayerIdColor.length===4){const c=t.indices.get(h.POSITION);if(c){const u=c.length,f=i.getField(s,Je);_n(t.objectAndLayerIdColor,f,u,o)}}}}function ii(t){return t[0]===1&&t[1]===0&&t[2]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[8]===0&&t[9]===0&&t[10]===1}function Pr(t){t.attributes.add(h.POSITION,"vec3"),t.vertex.code.add(n`vec3 positionModel() { return position; }`)}function oi({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(n`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(n`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function yn(t){return!!Ca("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}let si=class extends K{constructor(e,r){super(e,"mat3",z.Draw,((a,i,o)=>a.setUniformMatrix3fv(e,r(i,o))))}},Re=class extends K{constructor(e,r){super(e,"mat3",z.Pass,((a,i,o)=>a.setUniformMatrix3fv(e,r(i,o))))}},ke=class extends K{constructor(e,r){super(e,"mat4",z.Pass,((a,i,o)=>a.setUniformMatrix4fv(e,r(i,o))))}};function ni(t,e){t.include(Pr);const r=t.vertex;r.include(oi,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add([new q("transformWorldFromViewTH",(a=>a.transformWorldFromViewTH)),new q("transformWorldFromViewTL",(a=>a.transformWorldFromViewTL)),new Re("transformViewFromCameraRelativeRS",(a=>a.transformViewFromCameraRelativeRS)),new ke("transformProjFromView",(a=>a.transformProjFromView)),new si("transformWorldFromModelRS",(a=>a.transformWorldFromModelRS)),new ue("transformWorldFromModelTH",(a=>a.transformWorldFromModelTH)),new ue("transformWorldFromModelTL",(a=>a.transformWorldFromModelTL))]),r.code.add(n`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(n`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?n`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:n`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new q("transformWorldFromViewTL",(a=>a.transformWorldFromViewTL))),r.code.add(n`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(n`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let wn=class extends Cr{constructor(){super(...arguments),this.transformWorldFromViewTH=N(),this.transformWorldFromViewTL=N(),this.transformViewFromCameraRelativeRS=Xt(),this.transformProjFromView=Sr()}};function li(t,e){e.normalType===X.Attribute||e.normalType===X.CompressedAttribute?(t.include(Kt,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new si("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new Re("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))]),t.vertex.code.add(n`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===X.Ground?(t.include(ni,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(n`
    void forwardNormal() {
      vNormalWorld = ${e.spherical?n`normalize(vPositionWorldCameraRelative);`:n`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(n`void forwardNormal() {}`)}let An=class extends wn{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Xt()}};const Cn=.1,Rr=.001;let Zt=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Lr=class{constructor(e,r,a){this.release=a,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Xr(this._program),this._pipeline=this._configuration=null}reload(e){Xr(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,a){e.setPipelineState(this.getPipelineState(r,a))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return ft.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}},Er=class{constructor(e,r,a){this._context=e,this._locations=a,this._textures=new Map,this._freeTextureUnits=new ya({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),a),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind(z.Pass,this),this.bindDraw=r.generateBind(z.Draw,this),this._fragmentUniforms=ko()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(k(r)||r.glName==null){const i=this._textures.get(e);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(e)),null}let a=this._textures.get(e);return a==null?(a=this._allocTextureUnit(r),this._textures.set(e,a)):a.texture=r,this._context.useProgram(this),this.setUniform1i(e,a.unit),this._context.bindTexture(r,a.unit),a.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)})),m(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};Pe.LESS;Pe.ALWAYS;const Mn={mask:255},On={function:{func:Pe.ALWAYS,ref:Oe.OutlineVisualElementMask,mask:Oe.OutlineVisualElementMask},operation:{fail:oe.KEEP,zFail:oe.KEEP,zPass:oe.ZERO}},$n={function:{func:Pe.ALWAYS,ref:Oe.OutlineVisualElementMask,mask:Oe.OutlineVisualElementMask},operation:{fail:oe.KEEP,zFail:oe.KEEP,zPass:oe.REPLACE}};Pe.EQUAL,Oe.OutlineVisualElementMask,Oe.OutlineVisualElementMask,oe.KEEP,oe.KEEP,oe.KEEP;Pe.NOTEQUAL,Oe.OutlineVisualElementMask,Oe.OutlineVisualElementMask,oe.KEEP,oe.KEEP,oe.KEEP;function ma(t){t.varyings.add("linearDepth","float")}function ci(t){t.vertex.uniforms.add(new ne("nearFar",((e,r)=>r.camera.nearFar)))}function di(t){t.vertex.code.add(n`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function ui(t,e){const{vertex:r}=t;switch(e.output){case C.Color:if(e.receiveShadows)return ma(t),void r.code.add(n`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case C.Depth:case C.Shadow:case C.ShadowHighlight:case C.ShadowExludeHighlight:return t.include(ni,e),ma(t),ci(t),di(t),void r.code.add(n`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(n`void forwardLinearDepth() {}`)}function hi(t){t.vertex.code.add(n`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function We(t,e){Pn(t,e,[new ue("slicePlaneOrigin",((r,a)=>Rn(e,r,a))),new ue("slicePlaneBasis1",((r,a)=>{var i;return fa(e,r,a,(i=bt(a.slicePlane))==null?void 0:i.basis1)})),new ue("slicePlaneBasis2",((r,a)=>{var i;return fa(e,r,a,(i=bt(a.slicePlane))==null?void 0:i.basis2)}))])}function Pn(t,e,r){if(!e.hasSlicePlane){const s=n`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(s),void t.fragment.code.add(s)}t.extensions.add("GL_OES_standard_derivatives"),e.hasSliceInVertexProgram&&t.vertex.uniforms.add(r),t.fragment.uniforms.add(r);const a=n`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=n`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=e.hasSliceHighlight?n`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:n`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(a),t.fragment.code.add(a),t.fragment.code.add(o)}function mi(t,e,r){return t.instancedDoublePrecision?Y(Ln,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function fi(t,e){return m(t)?Se(Ut,e.origin,t):e.origin}function pi(t,e,r){return t.hasSliceTranslatedView?m(e)?cr(En,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function Rn(t,e,r){if(k(r.slicePlane))return _r;const a=mi(t,e,r),i=fi(a,r.slicePlane),o=pi(t,a,r);return m(o)?_t(Ut,i,o):i}function fa(t,e,r,a){if(k(a)||k(r.slicePlane))return _r;const i=mi(t,e,r),o=fi(i,r.slicePlane),s=pi(t,i,r);return m(s)?(Ae(mt,a,o),_t(Ut,o,s),_t(mt,mt,s),Se(mt,mt,Ut)):a}const Ln=N(),Ut=N(),mt=N(),En=Sr();function gt(t,e){if(di(t),e.hasModelTransformation)return t.vertex.code.add(n`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void t.vertex.code.add(n`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.vertex.code.add(n`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(n`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let Nn=class extends K{constructor(e,r){super(e,"mat4",z.Draw,((a,i,o)=>a.setUniformMatrix4fv(e,r(i,o))))}};function yt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",_r):t.uniforms.add(new ue("cameraPosition",((r,a)=>Y(vi,a.camera.viewInverseTransposeMatrix[3]-r.origin[0],a.camera.viewInverseTransposeMatrix[7]-r.origin[1],a.camera.viewInverseTransposeMatrix[11]-r.origin[2]))))}function xt(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add([new ke("proj",((a,i)=>i.camera.projectionMatrix)),new Nn("view",((a,i)=>cr(pa,i.camera.viewMatrix,a.origin))),new ue("localOrigin",(a=>a.origin))]);const r=a=>Y(vi,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]);t.uniforms.add([new ke("proj",((a,i)=>i.camera.projectionMatrix)),new ke("view",((a,i)=>cr(pa,i.camera.viewMatrix,r(i)))),new q("localOrigin",((a,i)=>r(i)))])}const pa=io(),vi=N();function In(t){t.uniforms.add(new ke("viewNormal",((e,r)=>r.camera.viewInverseTransposeMatrix)))}let gi=class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const a of e)r[a]=this[a];return r}};function T(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const a=e._parameterNames.length-1,i=t.count||2,o=Math.ceil(Math.log2(i)),s=e._parameterBits??[0];let l=0;for(;s[l]+o>16;)l++,l>=s.length&&s.push(0);e._parameterBits=s;const d=s[l],c=(1<<o)-1<<d;s[l]+=o,Object.defineProperty(e,r,{get(){return this[a]},set(u){if(this[a]!==u&&(this[a]=u,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~c|+u<<d&c,typeof u!="number"&&typeof u!="boolean"))throw"Configuration value for "+r+" must be boolean or number, got "+typeof u}})}}}let Dn=class extends gi{constructor(){super(...arguments),this.instancedDoublePrecision=!1}};function xi(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(h.MODELORIGINHI,"vec3"),t.attributes.add(h.MODELORIGINLO,"vec3"),t.attributes.add(h.MODEL,"mat3"),t.attributes.add(h.MODELNORMAL,"mat3"));const r=t.vertex;e.instancedDoublePrecision&&(r.include(oi,e),r.uniforms.add(new ue("viewOriginHi",((a,i)=>Po(Y(Nt,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),Nt)))),r.uniforms.add(new ue("viewOriginLo",((a,i)=>Ro(Y(Nt,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),Nt))))),r.code.add(n`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(n`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?n`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(n`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),e.output===C.Normal&&(In(r),r.code.add(n`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&r.code.add(n`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}x([T()],Dn.prototype,"instancedDoublePrecision",void 0);const Nt=N();function Fn(t){t.vertex.code.add(n`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.int(be.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.int(be.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.int(be.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.int(be.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let Ti=class extends K{constructor(e,r){super(e,"int",z.Pass,((a,i,o)=>a.setUniform1i(e,r(i,o))))}};function bi(t,e){e.hasSymbolColors?(t.include(Fn),t.attributes.add(h.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(n`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new Ti("colorMixMode",(r=>dn[r.colorMixMode]))),t.vertex.code.add(n`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function _i(t,e){e.hasVertexColors?(t.attributes.add(h.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(n`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(n`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(n`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function zn(t){t.vertex.code.add(n`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(n`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(n`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(n`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(n`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(n`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(n`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Vn(t){t.uniforms.add(new Q("screenSizePerspectiveAlignment",(e=>Bn(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function Bn(t){return re(Gn,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const Gn=qt();function Si(t,e){const r=t.vertex;e.hasVerticalOffset?(Hn(r),e.hasScreenSizePerspective&&(t.include(zn),Vn(r),yt(t.vertex,e)),r.code.add(n`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?n`vec3 worldNormal = normalize(worldPos + localOrigin);`:n`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?n`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:n`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(n`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Un=qt();function Hn(t){t.uniforms.add(new Q("verticalOffset",((e,r)=>{const{minWorldLength:a,maxWorldLength:i,screenLength:o}=e.verticalOffset,s=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return re(Un,o*l,s,a,i)})))}function kn(t,e){const r=e.output===C.ObjectAndLayerIdColor,a=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),a?t.attributes.add(h.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):t.attributes.add(h.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(n`
     void forwardObjectAndLayerIdColor() {
      ${r?a?n`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:n`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:n``} }`),t.fragment.code.add(n`
      void outputObjectAndLayerIdColor() {
        ${r?n`gl_FragColor = objectAndLayerIdColorVarying;`:n``} }`)}function Nr(t){t.code.add(n`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Wn(t,e){switch(t.fragment.include(Nr),e.output){case C.Shadow:case C.ShadowHighlight:case C.ShadowExludeHighlight:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(n`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case C.Depth:t.fragment.code.add(n`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}const jn=jt(1,1,0,1),qn=jt(1,0,1,1);function Xn(t,e){t.fragment.uniforms.add(He("depthTex",((r,a)=>a.highlightDepthTexture),e.hasWebGL2Context?j.None:j.InvSize)),t.fragment.constants.add("occludedHighlightFlag","vec4",jn).add("unoccludedHighlightFlag","vec4",qn),t.fragment.code.add(n`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${ms(e,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}let Yn=class extends K{constructor(e,r,a){super(e,"vec4",z.Pass,((i,o,s)=>i.setUniform4fv(e,r(o,s))),a)}},Kn=class extends K{constructor(e,r,a){super(e,"float",z.Pass,((i,o,s)=>i.setUniform1fv(e,r(o,s))),a)}};const ir=8;function Tt(t,e){e.hasVvInstancing&&(e.vvSize||e.vvColor)&&t.attributes.add(h.INSTANCEFEATUREATTRIBUTE,"vec4");const r=t.vertex;e.vvSize?(r.uniforms.add(new q("vvSizeMinSize",(a=>a.vvSizeMinSize))),r.uniforms.add(new q("vvSizeMaxSize",(a=>a.vvSizeMaxSize))),r.uniforms.add(new q("vvSizeOffset",(a=>a.vvSizeOffset))),r.uniforms.add(new q("vvSizeFactor",(a=>a.vvSizeFactor))),r.uniforms.add(new Re("vvSymbolRotationMatrix",(a=>a.vvSymbolRotationMatrix))),r.uniforms.add(new q("vvSymbolAnchor",(a=>a.vvSymbolAnchor))),r.code.add(n`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(n`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?n`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(n`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",ir),e.hasVvInstancing&&r.uniforms.add([new Kn("vvColorValues",(a=>a.vvColorValues),ir),new Yn("vvColorColors",(a=>a.vvColorColors),ir)]),r.code.add(n`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.hasVvInstancing?n`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(n`vec4 vvColor() { return vec4(1.0); }`)}function Zn(t){t.fragment.code.add(n`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n.float(Rr)}) { discard; } }
  `)}let J=class extends K{constructor(e,r){super(e,"float",z.Pass,((a,i,o)=>a.setUniform1f(e,r(i,o))))}};function je(t,e){Jn(t,e,new J("textureAlphaCutoff",(r=>r.textureAlphaCutoff)))}function Jn(t,e,r){const a=t.fragment;switch(e.alphaDiscardMode!==W.Mask&&e.alphaDiscardMode!==W.MaskBlend||a.uniforms.add(r),e.alphaDiscardMode){case W.Blend:return t.include(Zn);case W.Opaque:a.code.add(n`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case W.Mask:a.code.add(n`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case W.MaskBlend:t.fragment.code.add(n`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function yi(t,e){const{vertex:r,fragment:a}=t,i=e.hasModelTransformation;i&&r.uniforms.add(new ke("model",(s=>m(s.modelTransformation)?s.modelTransformation:Pa)));const o=e.hasColorTexture&&e.alphaDiscardMode!==W.Opaque;switch(e.output){case C.Depth:case C.Shadow:case C.ShadowHighlight:case C.ShadowExludeHighlight:case C.ObjectAndLayerIdColor:xt(r,e),t.include(gt,e),t.include(tt,e),t.include(Tt,e),t.include(Wn,e),t.include(We,e),t.include(kn,e),ci(t),t.varyings.add("depth","float"),o&&a.uniforms.add(new te("tex",(s=>s.texture))),r.code.add(n`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${i?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),t.include(je,e),a.code.add(n`
          void main(void) {
            discardBySlice(vpos);
            ${o?n`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?n`colorUV`:n`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===C.ObjectAndLayerIdColor?n`outputObjectAndLayerIdColor();`:n`outputDepth(depth);`}
          }
        `);break;case C.Normal:xt(r,e),t.include(gt,e),t.include(Kt,e),t.include(li,e),t.include(tt,e),t.include(Tt,e),o&&a.uniforms.add(new te("tex",(s=>s.texture))),t.varyings.add("vPositionView","vec3"),r.code.add(n`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${e.normalType===X.Attribute?n`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${i?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(We,e),t.include(je,e),a.code.add(n`
          void main() {
            discardBySlice(vpos);
            ${o?n`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?n`colorUV`:n`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===X.ScreenDerivative?n`
                vec3 normal = screenDerivativeNormal(vPositionView);`:n`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case C.Highlight:xt(r,e),t.include(gt,e),t.include(tt,e),t.include(Tt,e),o&&a.uniforms.add(new te("tex",(s=>s.texture))),r.code.add(n`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${i?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(We,e),t.include(je,e),t.include(Xn,e),a.code.add(n`
          void main() {
            discardBySlice(vpos);
            ${o?n`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?n`colorUV`:n`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function Qn(t,e){const r=t.fragment;if(e.hasVertexTangents?(t.attributes.add(h.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===ee.WindingOrder?r.code.add(n`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(n`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(n`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.textureCoordinateType!==Z.None){t.include(Ya,e);const a=e.supportsTextureAtlas?e.hasWebGL2Context?j.None:j.Size:j.None;r.uniforms.add(e.pbrTextureBindType===z.Pass?He("normalTexture",(i=>i.textureNormal),a):zt("normalTexture",(i=>i.textureNormal),a)),r.code.add(n`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?n`vtc.size = ${et(e,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function Ir(t){t.include(Nr),t.code.add(n`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}const or=4;function wi(){const t=new Mt,e=t.fragment;t.include(Mr);const r=(or+1)/2,a=1/(2*r*r);return e.include(Ir),e.uniforms.add([new te("depthMap",(i=>i.depthTexture)),new Ka("tex",(i=>i.colorTexture)),new pr("blurSize",(i=>i.blurSize)),new J("projScale",((i,o)=>{const s=oo(o.camera.eye,o.camera.center);return s>5e4?Math.max(0,i.projScale-(s-5e4)):i.projScale})),new ne("nearFar",((i,o)=>o.camera.nearFar))]),e.code.add(n`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${n.float(a)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.code.add(n`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${n.int(or)}; r <= ${n.int(or)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),t}const el=Object.freeze(Object.defineProperty({__proto__:null,build:wi},Symbol.toStringTag,{value:"Module"}));let tl=class Ai extends Lr{initializeProgram(e){return new Er(e.rctx,Ai.shader.get().build(),Ot)}initializePipeline(){return yr({colorWrite:wr})}};tl.shader=new Zt(el,(()=>wt(()=>Promise.resolve().then(()=>Kl),void 0)));function rl(t){t.fragment.uniforms.add(new Q("projInfo",((e,r)=>al(r)))),t.fragment.uniforms.add(new ne("zScale",((e,r)=>Ci(r)))),t.fragment.code.add(n`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function al(t){const e=t.camera.projectionMatrix;return e[11]===0?re(va,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):re(va,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const va=qt();function Ci(t){return t.camera.projectionMatrix[11]===0?Me(ga,0,1):Me(ga,1,0)}const ga=Wt(),xa=16,il=.5;function Mi(){const t=new Mt,e=t.fragment;return t.include(Mr),e.include(Ir),t.include(rl),e.uniforms.add(new J("radius",((r,a)=>Ta(a)))),e.code.add(n`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),e.code.add(n`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add([new ne("nearFar",((r,a)=>a.camera.nearFar)),new te("normalMap",(r=>r.normalTexture)),new te("depthMap",(r=>r.depthTexture)),new ne("zScale",((r,a)=>Ci(a))),new J("projScale",(r=>r.projScale)),new te("rnm",(r=>r.noiseTexture)),new ne("rnmScale",((r,a)=>Me(ba,a.camera.fullWidth/bt(r.noiseTexture).descriptor.width,a.camera.fullHeight/bt(r.noiseTexture).descriptor.height))),new J("intensity",((r,a)=>4*il/Ta(a)**6)),new ne("screenSize",((r,a)=>Me(ba,a.camera.fullWidth,a.camera.fullHeight)))]),e.code.add(n`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${n.int(xa)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${n.int(xa)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),t}function Ta(t){return Math.max(10,20*t.camera.computeRenderPixelSizeAtDist(Math.abs(4*t.camera.relativeElevation)))}const ba=Wt(),ol=Object.freeze(Object.defineProperty({__proto__:null,build:Mi},Symbol.toStringTag,{value:"Module"}));class Dr extends Lr{initializeProgram(e){return new Er(e.rctx,Dr.shader.get().build(),Ot)}initializePipeline(){return yr({colorWrite:wr})}}Dr.shader=new Zt(ol,(()=>wt(()=>Promise.resolve().then(()=>Zl),void 0)));const sl=2;function Fr(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(He("ssaoTex",((a,i)=>i.ssaoHelper.colorTexture),e.hasWebGL2Context?j.None:j.InvSize)),r.constants.add("blurSizePixelsInverse","float",1/sl),r.code.add(n`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${et(e,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(n`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function nl(t,e){const r=t.fragment,a=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;a===0?(r.uniforms.add(new q("lightingAmbientSH0",((i,o)=>Y(_a,o.lighting.sh.r[0],o.lighting.sh.g[0],o.lighting.sh.b[0])))),r.code.add(n`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(r.uniforms.add([new Q("lightingAmbientSH_R",((i,o)=>re(ge,o.lighting.sh.r[0],o.lighting.sh.r[1],o.lighting.sh.r[2],o.lighting.sh.r[3]))),new Q("lightingAmbientSH_G",((i,o)=>re(ge,o.lighting.sh.g[0],o.lighting.sh.g[1],o.lighting.sh.g[2],o.lighting.sh.g[3]))),new Q("lightingAmbientSH_B",((i,o)=>re(ge,o.lighting.sh.b[0],o.lighting.sh.b[1],o.lighting.sh.b[2],o.lighting.sh.b[3])))]),r.code.add(n`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===2&&(r.uniforms.add([new q("lightingAmbientSH0",((i,o)=>Y(_a,o.lighting.sh.r[0],o.lighting.sh.g[0],o.lighting.sh.b[0]))),new Q("lightingAmbientSH_R1",((i,o)=>re(ge,o.lighting.sh.r[1],o.lighting.sh.r[2],o.lighting.sh.r[3],o.lighting.sh.r[4]))),new Q("lightingAmbientSH_G1",((i,o)=>re(ge,o.lighting.sh.g[1],o.lighting.sh.g[2],o.lighting.sh.g[3],o.lighting.sh.g[4]))),new Q("lightingAmbientSH_B1",((i,o)=>re(ge,o.lighting.sh.b[1],o.lighting.sh.b[2],o.lighting.sh.b[3],o.lighting.sh.b[4]))),new Q("lightingAmbientSH_R2",((i,o)=>re(ge,o.lighting.sh.r[5],o.lighting.sh.r[6],o.lighting.sh.r[7],o.lighting.sh.r[8]))),new Q("lightingAmbientSH_G2",((i,o)=>re(ge,o.lighting.sh.g[5],o.lighting.sh.g[6],o.lighting.sh.g[7],o.lighting.sh.g[8]))),new Q("lightingAmbientSH_B2",((i,o)=>re(ge,o.lighting.sh.b[5],o.lighting.sh.b[6],o.lighting.sh.b[7],o.lighting.sh.b[8])))]),r.code.add(n`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==D.Normal&&e.pbrMode!==D.Schematic||r.code.add(n`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const _a=N(),ge=qt();function zr(t){t.uniforms.add(new q("mainLightDirection",((e,r)=>r.lighting.mainLight.direction)))}function Jt(t){t.uniforms.add(new q("mainLightIntensity",((e,r)=>r.lighting.mainLight.intensity)))}function ll(t,e){e.useLegacyTerrainShading?t.uniforms.add(new J("lightingFixedFactor",((r,a)=>a.lighting.noonFactor*(1-a.lighting.globalFactor)))):t.constants.add("lightingFixedFactor","float",0)}function cl(t,e){const r=t.fragment;zr(r),Jt(r),ll(r,e),r.code.add(n`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function dl(t){const e=t.fragment.code;e.add(n`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(n`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(n`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Oi(t){t.vertex.code.add(n`const float PI = 3.141592653589793;`),t.fragment.code.add(n`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Vr(t,e){const r=t.fragment.code;t.include(Oi),e.pbrMode===D.Water||e.pbrMode===D.WaterOnIntegratedMesh?(r.add(n`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(n`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(n`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(n`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(n`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==D.Normal&&e.pbrMode!==D.Schematic||(t.include(dl),r.add(n`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(n`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(n`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(n`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(n`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(n`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let ul=class extends K{constructor(e,r){super(e,"bool",z.Pass,((a,i,o)=>a.setUniform1b(e,r(i,o))))}};const hl=.4;function Br(t){t.constants.add("ambientBoostFactor","float",hl)}function Gr(t){t.uniforms.add(new J("lightingGlobalFactor",((e,r)=>r.lighting.globalFactor)))}function $i(t,e){const r=t.fragment;switch(t.include(Fr,e),e.pbrMode!==D.Disabled&&t.include(Vr,e),t.include(nl,e),t.include(Oi),r.code.add(n`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===D.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Br(r),Gr(r),zr(r),r.code.add(n`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?n`normalize(vPosWorld)`:n`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Jt(r),r.code.add(n`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case D.Disabled:case D.WaterOnIntegratedMesh:case D.Water:t.include(cl,e),r.code.add(n`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case D.Normal:case D.Schematic:r.code.add(n`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = mainLightDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(n`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new ul("hasFillLights",((a,i)=>i.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(n`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new J("lightingSpecularStrength",((a,i)=>i.lighting.mainLight.specularStrength)),new J("lightingEnvironmentStrength",((a,i)=>i.lighting.mainLight.environmentStrength))]),r.code.add(n`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(n`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===D.Schematic?n`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:n`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;default:At(e.pbrMode);case D.COUNT:}}function Ht(t,e){e.hasMultipassTerrain&&(t.fragment.include(Ir),t.fragment.uniforms.add(new te("terrainDepthTexture",((r,a)=>a.multipassTerrain.linearDepthTexture))),t.fragment.uniforms.add(new ne("nearFar",((r,a)=>a.camera.nearFar))),t.fragment.uniforms.add(new ne("inverseViewport",((r,a)=>a.inverseViewport))),t.fragment.code.add(n`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class ml extends K{constructor(e,r,a){super(e,"mat4",z.Draw,((i,o,s)=>i.setUniformMatrix4fv(e,r(o,s))),a)}}let fl=class extends K{constructor(e,r,a){super(e,"mat4",z.Pass,((i,o,s)=>i.setUniformMatrix4fv(e,r(o,s))),a)}};function Pi(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new fl("shadowMapMatrix",((r,a)=>a.shadowMap.getShadowMapMatrices(r.origin)),4)),Li(t,e))}function Ri(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new ml("shadowMapMatrix",((r,a)=>a.shadowMap.getShadowMapMatrices(r.origin)),4)),Li(t,e))}function Li(t,e){const r=t.fragment;r.include(Nr),r.uniforms.add([...He("shadowMapTex",((a,i)=>i.shadowMap.depthTexture),e.hasWebGL2Context?j.None:j.Size),new Ti("numCascades",((a,i)=>i.shadowMap.numCascades)),new Q("cascadeDistances",((a,i)=>i.shadowMap.cascadeDistances))]),r.code.add(n`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${et(e,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function pl(t){t.vertex.uniforms.add(new Re("colorTextureTransformMatrix",(e=>m(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:at()))),t.varyings.add("colorUV","vec2"),t.vertex.code.add(n`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function vl(t){t.vertex.uniforms.add(new Re("normalTextureTransformMatrix",(e=>m(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:at()))),t.varyings.add("normalUV","vec2"),t.vertex.code.add(n`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function gl(t){t.vertex.uniforms.add(new Re("emissiveTextureTransformMatrix",(e=>m(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:at()))),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(n`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function xl(t){t.vertex.uniforms.add(new Re("occlusionTextureTransformMatrix",(e=>m(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:at()))),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(n`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Tl(t){t.vertex.uniforms.add(new Re("metallicRoughnessTextureTransformMatrix",(e=>m(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:at()))),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(n`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function bl(t){t.code.add(n`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function kt(t){t.include(bl),t.code.add(n`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.int(be.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n.int(be.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.int(be.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.int(be.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.int(be.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Ei(t){const e=new Mt,{vertex:r,fragment:a,varyings:i}=e;return xt(r,t),e.include(Pr),i.add("vpos","vec3"),e.include(Tt,t),e.include(xi,t),e.include(Si,t),t.hasColorTextureTransform&&e.include(pl),t.output!==C.Color&&t.output!==C.Alpha||(t.hasNormalTextureTransform&&e.include(vl),t.hasEmissionTextureTransform&&e.include(gl),t.hasOcclusionTextureTransform&&e.include(xl),t.hasMetallicRoughnessTextureTransform&&e.include(Tl),yt(r,t),e.include(Kt,t),e.include(gt,t),t.normalType===X.Attribute&&t.offsetBackfaces&&e.include(hi),e.include(Qn,t),e.include(li,t),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),i.add("localvpos","vec3"),e.include(tt,t),e.include(ui,t),e.include(bi,t),e.include(_i,t),r.uniforms.add(new Q("externalColor",(o=>o.externalColor))),i.add("vcolorExt","vec4"),t.hasMultipassTerrain&&i.add("depth","float"),t.hasModelTransformation&&r.uniforms.add(new ke("model",(o=>m(o.modelTransformation)?o.modelTransformation:Pa))),r.code.add(n`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${n.float(Rr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===X.Attribute?n`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${t.hasModelTransformation?"model,":""} vpos);
          ${t.normalType===X.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${t.hasColorTextureTransform?n`forwardColorUV();`:""}
        ${t.hasNormalTextureTransform?n`forwardNormalUV();`:""}
        ${t.hasEmissionTextureTransform?n`forwardEmissiveUV();`:""}
        ${t.hasOcclusionTextureTransform?n`forwardOcclusionUV();`:""}
        ${t.hasMetallicRoughnessTextureTransform?n`forwardMetallicRoughnessUV();`:""}
      }
    `)),t.output===C.Alpha&&(e.include(We,t),e.include(je,t),e.include(Ht,t),a.uniforms.add([new J("opacity",(o=>o.opacity)),new J("layerOpacity",(o=>o.layerOpacity))]),t.hasColorTexture&&a.uniforms.add(new te("tex",(o=>o.texture))),a.include(kt),a.code.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?n`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?n`colorUV`:n`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?n`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===C.Color&&(e.include(We,t),e.include($i,t),e.include(Fr,t),e.include(je,t),e.include(t.instancedDoublePrecision?Pi:Ri,t),e.include(Ht,t),yt(a,t),a.uniforms.add([r.uniforms.get("localOrigin"),new q("ambient",(o=>o.ambient)),new q("diffuse",(o=>o.diffuse)),new J("opacity",(o=>o.opacity)),new J("layerOpacity",(o=>o.layerOpacity))]),t.hasColorTexture&&a.uniforms.add(new te("tex",(o=>o.texture))),e.include(Za,t),e.include(Vr,t),a.include(kt),e.include(Hs,t),Br(a),Gr(a),Jt(a),a.code.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?n`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?n`colorUV`:n`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===X.ScreenDerivative?n`
                vec3 normal = screenDerivativeNormal(localvpos);`:n`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===D.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?n`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?n`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:n`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?n`normalize(posWorld);`:n`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?n`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===D.Normal||t.pbrMode===D.Schematic?n`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?n`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:n`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===rt.Color?n`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),e.include(yi,t),e}const _l=Object.freeze(Object.defineProperty({__proto__:null,build:Ei},Symbol.toStringTag,{value:"Module"}));let Sl=class extends An{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Xe(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=$e.Back,this.emissiveFactor=Xe(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Xe(.2,.2,.2),this.diffuse=Xe(.8,.8,.8),this.externalColor=jt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=N(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=Xt(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Ct.Less,this.textureAlphaMode=W.Blend,this.textureAlphaCutoff=Cn,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=vr.Occlude}};class $t extends Lr{initializeConfiguration(e,r){r.hasWebGL2Context=e.rctx.type===so.WEBGL2,r.spherical=e.viewingMode===dr.Global,r.doublePrecisionRequiresObfuscation=yn(e.rctx),r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?Z.Default:Z.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,$t.shader)}_initializeProgram(e,r){return new Er(e.rctx,r.get().build(this.configuration),Ot)}_convertDepthTestFunction(e){return e===Ct.Lequal?Pe.LEQUAL:Pe.LESS}_makePipeline(e,r){const a=this.configuration,i=e===rt.NONE,o=e===rt.FrontFace;return yr({blending:a.output!==C.Color&&a.output!==C.Alpha||!a.transparent?null:i?Do:Fo(e),culling:yl(a)&&Io(a.cullFace),depthTest:{func:No(e,this._convertDepthTestFunction(a.customDepthTest))},depthWrite:i||o?a.writeDepth&&Eo:null,colorWrite:wr,stencilWrite:a.hasOccludees?Mn:null,stencilTest:a.hasOccludees?r?$n:On:null,polygonOffset:i||o?null:Lo(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function yl(t){return t.cullFace!==$e.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}$t.shader=new Zt(_l,(()=>wt(()=>Promise.resolve().then(()=>Jl),void 0)));class we extends gi{constructor(){super(...arguments),this.hasWebGL2Context=!1}}x([T({constValue:!0})],we.prototype,"hasSliceHighlight",void 0),x([T({constValue:!1})],we.prototype,"hasSliceInVertexProgram",void 0),x([T({constValue:!1})],we.prototype,"instancedDoublePrecision",void 0),x([T({constValue:!1})],we.prototype,"useLegacyTerrainShading",void 0),x([T({constValue:!1})],we.prototype,"hasModelTransformation",void 0),x([T({constValue:z.Pass})],we.prototype,"pbrTextureBindType",void 0),x([T()],we.prototype,"hasWebGL2Context",void 0);class w extends we{constructor(){super(...arguments),this.output=C.Color,this.alphaDiscardMode=W.Opaque,this.doubleSidedMode=ee.None,this.pbrMode=D.Disabled,this.cullFace=$e.None,this.transparencyPassType=rt.NONE,this.normalType=X.Attribute,this.textureCoordinateType=Z.None,this.customDepthTest=Ct.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}x([T({count:C.COUNT})],w.prototype,"output",void 0),x([T({count:W.COUNT})],w.prototype,"alphaDiscardMode",void 0),x([T({count:ee.COUNT})],w.prototype,"doubleSidedMode",void 0),x([T({count:D.COUNT})],w.prototype,"pbrMode",void 0),x([T({count:$e.COUNT})],w.prototype,"cullFace",void 0),x([T({count:rt.COUNT})],w.prototype,"transparencyPassType",void 0),x([T({count:X.COUNT})],w.prototype,"normalType",void 0),x([T({count:Z.COUNT})],w.prototype,"textureCoordinateType",void 0),x([T({count:Ct.COUNT})],w.prototype,"customDepthTest",void 0),x([T()],w.prototype,"spherical",void 0),x([T()],w.prototype,"hasVertexColors",void 0),x([T()],w.prototype,"hasSymbolColors",void 0),x([T()],w.prototype,"hasVerticalOffset",void 0),x([T()],w.prototype,"hasSlicePlane",void 0),x([T()],w.prototype,"hasSliceHighlight",void 0),x([T()],w.prototype,"hasColorTexture",void 0),x([T()],w.prototype,"hasMetallicRoughnessTexture",void 0),x([T()],w.prototype,"hasEmissionTexture",void 0),x([T()],w.prototype,"hasOcclusionTexture",void 0),x([T()],w.prototype,"hasNormalTexture",void 0),x([T()],w.prototype,"hasScreenSizePerspective",void 0),x([T()],w.prototype,"hasVertexTangents",void 0),x([T()],w.prototype,"hasOccludees",void 0),x([T()],w.prototype,"hasMultipassTerrain",void 0),x([T()],w.prototype,"hasModelTransformation",void 0),x([T()],w.prototype,"offsetBackfaces",void 0),x([T()],w.prototype,"vvSize",void 0),x([T()],w.prototype,"vvColor",void 0),x([T()],w.prototype,"receiveShadows",void 0),x([T()],w.prototype,"receiveAmbientOcclusion",void 0),x([T()],w.prototype,"textureAlphaPremultiplied",void 0),x([T()],w.prototype,"instanced",void 0),x([T()],w.prototype,"instancedColor",void 0),x([T()],w.prototype,"objectAndLayerIdColorInstanced",void 0),x([T()],w.prototype,"instancedDoublePrecision",void 0),x([T()],w.prototype,"doublePrecisionRequiresObfuscation",void 0),x([T()],w.prototype,"writeDepth",void 0),x([T()],w.prototype,"transparent",void 0),x([T()],w.prototype,"enableOffset",void 0),x([T()],w.prototype,"cullAboveGround",void 0),x([T()],w.prototype,"snowCover",void 0),x([T()],w.prototype,"hasColorTextureTransform",void 0),x([T()],w.prototype,"hasEmissionTextureTransform",void 0),x([T()],w.prototype,"hasNormalTextureTransform",void 0),x([T()],w.prototype,"hasOcclusionTextureTransform",void 0),x([T()],w.prototype,"hasMetallicRoughnessTextureTransform",void 0),x([T({constValue:!0})],w.prototype,"hasVvInstancing",void 0),x([T({constValue:!1})],w.prototype,"useCustomDTRExponentForWater",void 0),x([T({constValue:!1})],w.prototype,"supportsTextureAtlas",void 0),x([T({constValue:!0})],w.prototype,"useFillLights",void 0);function Ni(t){const e=new Mt,{vertex:r,fragment:a,varyings:i}=e;return xt(r,t),e.include(Pr),i.add("vpos","vec3"),e.include(Tt,t),e.include(xi,t),e.include(Si,t),t.output!==C.Color&&t.output!==C.Alpha||(yt(e.vertex,t),e.include(Kt,t),e.include(gt,t),t.offsetBackfaces&&e.include(hi),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),t.hasMultipassTerrain&&i.add("depth","float"),e.include(tt,t),e.include(ui,t),e.include(bi,t),e.include(_i,t),r.uniforms.add(new Q("externalColor",(o=>o.externalColor))),i.add("vcolorExt","vec4"),r.code.add(n`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${n.float(Rr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.hasMultipassTerrain?n`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===C.Alpha&&(e.include(We,t),e.include(je,t),e.include(Ht,t),a.uniforms.add([new J("opacity",(o=>o.opacity)),new J("layerOpacity",(o=>o.layerOpacity))]),t.hasColorTexture&&a.uniforms.add(new te("tex",(o=>o.texture))),a.include(kt),a.code.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?n`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?n`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?n`colorUV`:n`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?n`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===C.Color&&(e.include(We,t),e.include($i,t),e.include(Fr,t),e.include(je,t),e.include(t.instancedDoublePrecision?Pi:Ri,t),e.include(Ht,t),yt(e.fragment,t),zr(a),Br(a),Gr(a),a.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new q("ambient",(o=>o.ambient)),new q("diffuse",(o=>o.diffuse)),new J("opacity",(o=>o.opacity)),new J("layerOpacity",(o=>o.layerOpacity))]),t.hasColorTexture&&a.uniforms.add(new te("tex",(o=>o.texture))),e.include(Za,t),e.include(Vr,t),a.include(kt),e.extensions.add("GL_OES_standard_derivatives"),Jt(a),a.code.add(n`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?n`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?n`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?n`colorUV`:n`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===D.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?n`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?n`albedo = mix(albedo, vec3(1), 0.9);`:n``}
        ${n`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===D.Normal||t.pbrMode===D.Schematic?t.spherical?n`vec3 normalGround = normalize(vpos + localOrigin);`:n`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:n``}
        ${t.pbrMode===D.Normal||t.pbrMode===D.Schematic?n`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?n`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:n`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===rt.Color?n`gl_FragColor = premultiplyAlpha(gl_FragColor);`:n``}
      }
    `)),e.include(yi,t),e}const wl=Object.freeze(Object.defineProperty({__proto__:null,build:Ni},Symbol.toStringTag,{value:"Module"}));class Qt extends $t{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=X.Attribute,r.doubleSidedMode=ee.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Qt.shader)}}Qt.shader=new Zt(wl,(()=>wt(()=>Promise.resolve().then(()=>Ql),void 0)));class Ii extends hn{constructor(e){super(e,Ml),this.supportsEdges=!0,this._configuration=new w,this._vertexBufferLayout=$l(this.parameters),this._instanceBufferLayout=e.instanced?Pl(this.parameters):null}isVisibleForOutput(e){return e!==C.Shadow&&e!==C.ShadowExludeHighlight&&e!==C.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{instanced:r,hasVertexColors:a,hasSymbolColors:i,vvColorEnabled:o}=e,s=m(r)&&r.includes("color"),l=e.colorMixMode==="replace",d=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return a&&(s||o||i)?!!l||d:a?l?c:d:s||o||i?!!l||d:l?c:d}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=m(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=m(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normals==="screenDerivative"?X.ScreenDerivative:X.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,m(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?$e.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=m(this.parameters.modelTransformation),e!==C.Color&&e!==C.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=ee.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?ee.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?ee.WindingOrder:ee.None,this._configuration.instancedColor=m(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?D.Schematic:D.Normal:D.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<zo,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return m(e.weather)&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,a,i,o,s,l){if(m(this.parameters.verticalOffset)){const d=i.camera;Y(nr,a[12],a[13],a[14]);let c=null;switch(i.viewingMode){case dr.Global:c=br(Sa,nr);break;case dr.Local:c=no(Sa,El)}let u=0;const f=Se(Nl,nr,d.eye),p=gr(f),b=Ze(f,f,1/p);let A=null;this.parameters.screenSizePerspective&&(A=lo(c,b)),u+=nn(d,p,this.parameters.verticalOffset,A,this.parameters.screenSizePerspective),Ze(c,c,u),co(sr,c,i.transform.inverseRotation),o=Se(Rl,o,sr),s=Se(Ll,s,sr)}en(e,r,i,o,s,pn(i.verticalOffset),l)}requiresSlot(e,r){return r===C.Color||r===C.Alpha||r===C.Depth||r===C.Normal||r===C.Shadow||r===C.ShadowHighlight||r===C.ShadowExludeHighlight||r===C.Highlight||r===C.ObjectAndLayerIdColor?e===(this.parameters.transparent?this.parameters.writeDepth?Ke.TRANSPARENT_MATERIAL:Ke.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ke.OPAQUE_MATERIAL)||e===Ke.DRAPED_MATERIAL||r===C.ObjectAndLayerIdColor:!1}createGLMaterial(e){return new Al(e)}createBufferWriter(){return new Ol(this._vertexBufferLayout,this._instanceBufferLayout)}}class Al extends js{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const r=this._material.parameters;this.updateTexture(r.textureId);const a=e.camera.viewInverseTransposeMatrix;return Y(r.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?Qt:$t,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==C.Color&&this._output!==C.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class Cl extends Sl{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Ml=new Cl;class Ol{constructor(e,r){this.vertexBufferLayout=e,this.instanceBufferLayout=r}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(h.POSITION).length}write(e,r,a,i,o){Sn(a,this.vertexBufferLayout,e,r,i,o)}}function $l(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,r=Da().vec3f(h.POSITION).vec3f(h.NORMAL);return t.hasVertexTangents&&r.vec4f(h.TANGENT),e&&r.vec2f(h.UV0),t.hasVertexColors&&r.vec4u8(h.COLOR),t.hasSymbolColors&&r.vec4u8(h.SYMBOLCOLOR),Ca("enable-feature:objectAndLayerId-rendering")&&r.vec4u8(h.OBJECTANDLAYERIDCOLOR),r}function Pl(t){let e=Da();return e=t.instancedDoublePrecision?e.vec3f(h.MODELORIGINHI).vec3f(h.MODELORIGINLO).mat3f(h.MODEL).mat3f(h.MODELNORMAL):e.mat4f(h.MODEL).mat4f(h.MODELNORMAL),m(t.instanced)&&t.instanced.includes("color")&&(e=e.vec4f(h.INSTANCECOLOR)),m(t.instanced)&&t.instanced.includes("featureAttribute")&&(e=e.vec4f(h.INSTANCEFEATUREATTRIBUTE)),m(t.instanced)&&t.instanced.includes("objectAndLayerIdColor")&&(e=e.vec4u8(h.OBJECTANDLAYERIDCOLOR_INSTANCED)),e}const Rl=N(),Ll=N(),El=Xe(0,0,1),Sa=N(),sr=N(),nr=N(),Nl=N(),Te=xr.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Il(t,e){const r=await Dl(t,e),a=await Gl(r.textureDefinitions,e);let i=0;for(const o in a)if(a.hasOwnProperty(o)){const s=a[o];i+=s!=null&&s.image?s.image.width*s.image.height*4:0}return{resource:r,textures:a,size:i+uo(r)}}async function Dl(t,e){const r=m(e)&&e.streamDataRequester;if(r)return Fl(t,r,e);const a=await Ma(ho(t,bt(e)));if(a.ok===!0)return a.value.data;Oa(a.error),Di(a.error)}async function Fl(t,e,r){const a=await Ma(e.request(t,"json",r));if(a.ok===!0)return a.value;Oa(a.error),Di(a.error.details.url)}function Di(t){throw new Tr("",`Request for object resource failed: ${t}`)}function zl(t){const e=t.params,r=e.topology;let a=!0;switch(e.vertexAttributes||(Te.warn("Geometry must specify vertex attributes"),a=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const o=e.faces;if(o){if(e.vertexAttributes)for(const s in e.vertexAttributes){const l=o[s];l&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(Te.warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),a=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(Te.warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),a=!1)):(Te.warn(`Indexed geometry does not specify face indices for '${s}' attribute`),a=!1)}}else Te.warn("Indexed geometries must specify faces"),a=!1;break}default:Te.warn(`Unsupported topology '${r}'`),a=!1}t.params.material||(Te.warn("Geometry requires material"),a=!1);const i=t.params.vertexAttributes;for(const o in i)i[o].values||(Te.warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function Vl(t,e){const r=[],a=[],i=[],o=[],s=t.resource,l=La.parse(s.version||"1.0","wosr");Hl.validate(l);const d=s.model.name,c=s.model.geometries,u=s.materialDefinitions,f=t.textures;let p=0;const b=new Map;for(let A=0;A<c.length;A++){const P=c[A];if(!zl(P))continue;const g=Ul(P),S=P.params.vertexAttributes,v=[];for(const y in S){const _=S[y],E=_.values;v.push([y,{data:E,size:_.valuesPerElement,exclusive:!0}])}const $=[];if(P.params.topology!=="PerAttributeArray"){const y=P.params.faces;for(const _ in y)$.push([_,y[_].values])}const L=f&&f[g.texture];if(L&&!b.has(g.texture)){const{image:y,params:_}=L,E=new pt(y,_);o.push(E),b.set(g.texture,E)}const V=b.get(g.texture),M=V?V.id:void 0;let O=i[g.material]?i[g.material][g.texture]:null;if(!O){const y=u[g.material.substring(g.material.lastIndexOf("/")+1)].params;y.transparency===1&&(y.transparency=0);const _=L&&L.alphaChannelUsage,E=y.transparency>0||_==="transparency"||_==="maskAndTransparency",R=L?Fi(L.alphaChannelUsage):void 0,F={ambient:Yr(y.diffuse),diffuse:Yr(y.diffuse),opacity:1-(y.transparency||0),transparent:E,textureAlphaMode:R,textureAlphaCutoff:.33,textureId:M,initTextureTransparent:!0,doubleSided:!0,cullFace:$e.None,colorMixMode:y.externalColorMixMode||"tint",textureAlphaPremultiplied:!!L&&!!L.params.preMultiplyAlpha};m(e)&&e.materialParamsMixin&&Object.assign(F,e.materialParamsMixin),O=new Ii(F),i[g.material]||(i[g.material]={}),i[g.material][g.texture]=O}a.push(O);const I=new za(v,$);p+=$.position?$.position.length:0,r.push(I)}return{engineResources:[{name:d,stageResources:{textures:o,materials:a,geometries:r},pivotOffset:s.model.pivotOffset,numberOfVertices:p,lodThreshold:null}],referenceBoundingBox:Bl(r)}}function Bl(t){const e=$a();return t.forEach((r=>{const a=r.boundingInfo;m(a)&&(Gt(e,a.getBBMin()),Gt(e,a.getBBMax()))})),e}async function Gl(t,e){const r=[];for(const o in t){const s=t[o],l=s.images[0].data;if(!l){Te.warn("Externally referenced texture data is not yet supported");continue}const d=s.encoding+";base64,"+l,c="/textureDefinitions/"+o,u=s.channels==="rgba"?s.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:Ye.REPEAT,t:Ye.REPEAT},preMultiplyAlpha:Fi(u)!==W.Opaque},p=m(e)&&e.disableTextures?Promise.resolve(null):Ea(d,e);r.push(p.then((b=>({refId:c,image:b,params:f,alphaChannelUsage:u}))))}const a=await Promise.all(r),i={};for(const o of a)i[o.refId]=o;return i}function Fi(t){switch(t){case"mask":return W.Mask;case"maskAndTransparency":return W.MaskBlend;case"none":return W.Opaque;default:return W.Blend}}function Ul(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Hl=new La(1,2,"wosr");async function md(t,e){const r=kl(zi(t));if(r.fileType==="wosr"){const u=await(e.cache?e.cache.loadWOSR(r.url,e):Il(r.url,e)),{engineResources:f,referenceBoundingBox:p}=Vl(u,e);return{lods:f,referenceBoundingBox:p,isEsriSymbolResource:!1,isWosr:!0}}const a=await(e.cache?e.cache.loadGLTF(r.url,e,e.usePBR):_o(new So(e.streamDataRequester),r.url,e,e.usePBR)),i=mo(a.model.meta,"ESRI_proxyEllipsoid"),o=a.meta.isEsriSymbolResource&&m(i)&&a.meta.uri.includes("/RealisticTrees/");o&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,Yl(a,i));const s=a.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:o,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},l={...e.materialParamsMixin,treeRendering:o},{engineResources:d,referenceBoundingBox:c}=Wl(a,s,l,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:d,referenceBoundingBox:c,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}function kl(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Wl(t,e,r,a){const i=t.model,o=new Array,s=new Map,l=new Map,d=i.lods.length,c=$a();return i.lods.forEach(((u,f)=>{const p=a.skipHighLods===!0&&(d>1&&f===0||d>3&&f===1)||a.skipHighLods===!1&&a.singleLodIndex!=null&&f!==a.singleLodIndex;if(p&&f!==0)return;const b=new Array;let A=0;if(u.parts.forEach((g=>{const{geometry:S,vertexCount:v}=jl(g);b.push(S),A+=v;const $=S.boundingInfo;m($)&&f===0&&(Gt(c,$.getBBMin()),Gt(c,$.getBBMax()))})),p)return;const P=new es(u.name,{textures:new Array,materials:new Array,geometries:b},u.lodThreshold,[0,0,0],A);o.push(P),u.parts.forEach((g=>{const S=g.material+(g.attributes.normal?"_normal":"")+(g.attributes.color?"_color":"")+(g.attributes.texCoord0?"_texCoord0":"")+(g.attributes.tangent?"_tangent":""),v=i.materials.get(g.material),$=m(g.attributes.texCoord0),L=m(g.attributes.normal);if(k(v))return;const V=ql(v.alphaMode);if(!s.has(S)){if($){const F=(B,G=!1)=>{if(m(B)&&!l.has(B)){const U=i.textures.get(B);m(U)&&l.set(B,new pt(U.data,G?{...U.parameters,preMultiplyAlpha:G}:U.parameters))}};F(v.textureColor,V!==W.Opaque),F(v.textureNormal),F(v.textureOcclusion),F(v.textureEmissive),F(v.textureMetallicRoughness)}const M=v.color[0]**(1/qe),O=v.color[1]**(1/qe),I=v.color[2]**(1/qe),y=v.emissiveFactor[0]**(1/qe),_=v.emissiveFactor[1]**(1/qe),E=v.emissiveFactor[2]**(1/qe),R=m(v.textureColor)&&$?l.get(v.textureColor):null;s.set(S,new Ii({...e,transparent:V===W.Blend,customDepthTest:Ct.Lequal,textureAlphaMode:V,textureAlphaCutoff:v.alphaCutoff,diffuse:[M,O,I],ambient:[M,O,I],opacity:v.opacity,doubleSided:v.doubleSided,doubleSidedType:"winding-order",cullFace:v.doubleSided?$e.None:$e.Back,hasVertexColors:!!g.attributes.color,hasVertexTangents:!!g.attributes.tangent,normals:L?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:m(R)?R.id:void 0,colorMixMode:v.colorMixMode,normalTextureId:m(v.textureNormal)&&$?l.get(v.textureNormal).id:void 0,textureAlphaPremultiplied:m(R)&&!!R.params.preMultiplyAlpha,occlusionTextureId:m(v.textureOcclusion)&&$?l.get(v.textureOcclusion).id:void 0,emissiveTextureId:m(v.textureEmissive)&&$?l.get(v.textureEmissive).id:void 0,metallicRoughnessTextureId:m(v.textureMetallicRoughness)&&$?l.get(v.textureMetallicRoughness).id:void 0,emissiveFactor:[y,_,E],mrrFactors:[v.metallicFactor,v.roughnessFactor,e.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:dt(v.colorTextureTransform),normalTextureTransformMatrix:dt(v.normalTextureTransform),occlusionTextureTransformMatrix:dt(v.occlusionTextureTransform),emissiveTextureTransformMatrix:dt(v.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:dt(v.metallicRoughnessTextureTransform),...r}))}if(P.stageResources.materials.push(s.get(S)),$){const M=O=>{m(O)&&P.stageResources.textures.push(l.get(O))};M(v.textureColor),M(v.textureNormal),M(v.textureOcclusion),M(v.textureEmissive),M(v.textureMetallicRoughness)}}))})),{engineResources:o,referenceBoundingBox:c}}function jl(t){const e=Xl(t.indices||t.attributes.position.count,t.primitiveType),r=t.attributes.position.count,a=Be(Qe,r);go(a,t.attributes.position,t.transform);const i=[[h.POSITION,{data:a.typedBuffer,size:a.elementCount,exclusive:!0}]],o=[[h.POSITION,e]];if(m(t.attributes.normal)){const s=Be(Qe,r);Zr(It,t.transform),xo(s,t.attributes.normal,It),i.push([h.NORMAL,{data:s.typedBuffer,size:s.elementCount,exclusive:!0}]),o.push([h.NORMAL,e])}if(m(t.attributes.tangent)){const s=Be(ur,r);Zr(It,t.transform),yo(s,t.attributes.tangent,It),i.push([h.TANGENT,{data:s.typedBuffer,size:s.elementCount,exclusive:!0}]),o.push([h.TANGENT,e])}if(m(t.attributes.texCoord0)){const s=Be(Ra,r);wo(s,t.attributes.texCoord0),i.push([h.UV0,{data:s.typedBuffer,size:s.elementCount,exclusive:!0}]),o.push([h.UV0,e])}if(m(t.attributes.color)){const s=Be(Je,r);if(t.attributes.color.elementCount===4)t.attributes.color instanceof ur?ta(s,t.attributes.color,255):t.attributes.color instanceof Je?Ao(s,t.attributes.color):t.attributes.color instanceof po&&ta(s,t.attributes.color,1/256);else{Co(s,255,255,255,255);const l=new Jr(s.buffer,0,4);t.attributes.color instanceof Qe?Qr(l,t.attributes.color,255):t.attributes.color instanceof Jr?To(l,t.attributes.color):t.attributes.color instanceof vo&&Qr(l,t.attributes.color,1/256)}i.push([h.COLOR,{data:s.typedBuffer,size:s.elementCount,exclusive:!0}]),o.push([h.COLOR,e])}return{geometry:new za(i,o),vertexCount:r}}const It=Xt();function ql(t){switch(t){case"BLEND":return W.Blend;case"MASK":return W.Mask;case"OPAQUE":case null:case void 0:return W.Opaque}}function Xl(t,e){switch(e){case ft.TRIANGLES:return $o(t);case ft.TRIANGLE_STRIP:return Oo(t);case ft.TRIANGLE_FAN:return Mo(t)}}function Yl(t,e){for(let r=0;r<t.model.lods.length;++r){const a=t.model.lods[r];for(const i of a.parts){const o=i.attributes.normal;if(k(o))return;const s=i.attributes.position,l=s.count,d=N(),c=N(),u=N(),f=Be(Je,l),p=Be(Qe,l),b=fo(Sr(),i.transform);for(let A=0;A<l;A++){s.getVec(A,c),o.getVec(A,d),_t(c,c,i.transform),Se(u,c,e.center),Kr(u,u,e.radius);const P=u[2],g=gr(u),S=Math.min(.45+.55*g*g,1);Kr(u,u,e.radius),b!==null&&_t(u,u,b),br(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&lr(u,u,d,P>-1?.2:Math.min(-4*P-3.8,1)),p.setVec(A,u),f.set(A,0,255*S),f.set(A,1,255*S),f.set(A,2,255*S),f.set(A,3,255)}i.attributes.normal=p,i.attributes.color=f}}}const Kl=Object.freeze(Object.defineProperty({__proto__:null,build:wi},Symbol.toStringTag,{value:"Module"})),Zl=Object.freeze(Object.defineProperty({__proto__:null,build:Mi},Symbol.toStringTag,{value:"Module"})),Jl=Object.freeze(Object.defineProperty({__proto__:null,build:Ei},Symbol.toStringTag,{value:"Module"})),Ql=Object.freeze(Object.defineProperty({__proto__:null,build:Ni},Symbol.toStringTag,{value:"Module"}));export{md as fetch,Wl as gltfToEngineResources,kl as parseUrl};
