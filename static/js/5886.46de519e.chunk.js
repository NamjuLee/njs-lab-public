"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[5886],{35886:function(E,_,T){T.r(_),T.d(_,{loadGLTFMesh:function(){return H}});var R=T(51995),A=T(76200),n=T(77427),N=T(16889),t=T(92026),C=T(22753),e=T(11873),S=T(71353),I=T(67077),O=T(64995),r=T(11587),o=T(79694),L=T(27474),u=T(25158),D=T(32035),M=T(19093),c=T(17054),P=T(57898),G=T(27053),U=T(75689),i=T(32315),B=T(72838),f=T(68845),F=T(8548),s=T(92770),a=T(69618),l=T(19131);async function H(E,_,T){const N=new G.C(function(E){const _=null===E||void 0===E?void 0:E.resolveFile;return _?{busy:!1,request:async(E,T,R)=>{const n=_(E),N="image"===T?"image":"binary"===T?"array-buffer":"json";return(await(0,A.default)(n,{responseType:N,signal:(0,t.pC)(R)?R.signal:null})).data}}:null}(T)),C=(await(0,U.Q)(N,_,T,!0)).model,e=C.lods.shift(),O=new Map,D=new Map;C.textures.forEach(((E,_)=>O.set(_,function(E){return new o.Z({data:E.data,wrap:V(E.parameters.wrap)})}(E)))),C.materials.forEach(((E,_)=>D.set(_,function(E,_){const T=new R.Z(function(E,_){return(0,I.f)(g(E[0]),g(E[1]),g(E[2]),_)}(E.color,E.opacity)),A=E.emissiveFactor?new R.Z(function(E){return(0,S.f)(g(E[0]),g(E[1]),g(E[2]))}(E.emissiveFactor)):null;return new r.Z({color:T,colorTexture:(0,t.Wg)((0,t.yw)(E.textureColor,(E=>_.get(E)))),normalTexture:(0,t.Wg)((0,t.yw)(E.textureNormal,(E=>_.get(E)))),emissiveColor:A,emissiveTexture:(0,t.Wg)((0,t.yw)(E.textureEmissive,(E=>_.get(E)))),occlusionTexture:(0,t.Wg)((0,t.yw)(E.textureOcclusion,(E=>_.get(E)))),alphaMode:Y(E.alphaMode),alphaCutoff:E.alphaCutoff,doubleSided:E.doubleSided,metallic:E.metallicFactor,roughness:E.roughnessFactor,metallicRoughnessTexture:(0,t.Wg)((0,t.yw)(E.textureMetallicRoughness,(E=>_.get(E)))),colorTextureTransform:E.colorTextureTransform,normalTextureTransform:E.normalTextureTransform,occlusionTextureTransform:E.occlusionTextureTransform,emissiveTextureTransform:E.emissiveTextureTransform,metallicRoughnessTextureTransform:E.metallicRoughnessTextureTransform})}(E,O))));const M=function(E){let _=0;const T={color:!1,tangent:!1,normal:!1,texCoord0:!1},R=new Map,A=new Map,N=[];for(const t of E.parts){const{attributes:{position:E,normal:C,color:e,tangent:S,texCoord0:I}}=t,O="\n      ".concat(p(E,R),"/\n      ").concat(p(C,R),"/\n      ").concat(p(e,R),"/\n      ").concat(p(S,R),"/\n      ").concat(p(I,R),"/\n      ").concat(m(t.transform),"\n    ");let r=!1;const o=(0,n.s1)(A,O,(()=>(r=!0,{start:_,length:E.count})));r&&(_+=E.count),C&&(T.normal=!0),e&&(T.color=!0),S&&(T.tangent=!0),I&&(T.texCoord0=!0),N.push({gltf:t,writeVertices:r,region:o})}return{vertexAttributes:{position:(0,c.gS)(u.fP,_),normal:T.normal?(0,c.gS)(u.ct,_):null,tangent:T.tangent?(0,c.gS)(u.ek,_):null,color:T.color?(0,c.gS)(u.mc,_):null,texCoord0:T.texCoord0?(0,c.gS)(u.Eu,_):null},parts:N,components:[]}}(e);for(const R of M.parts)X(M,R,D);const{position:i,normal:B,tangent:f,color:F,texCoord0:s}=M.vertexAttributes,a={position:i.typedBuffer,normal:(0,t.pC)(B)?B.typedBuffer:null,tangent:(0,t.pC)(f)?f.typedBuffer:null,uv:(0,t.pC)(s)?s.typedBuffer:null,color:(0,t.pC)(F)?F.typedBuffer:null},l=(0,P.w1)(a,E,T);return{transform:l.transform,components:M.components,spatialReference:E.spatialReference,vertexAttributes:new L.Q({position:l.vertexAttributes.position,normal:l.vertexAttributes.normal,tangent:l.vertexAttributes.tangent,color:a.color,uv:a.uv})}}function p(E,_){if((0,t.Wi)(E))return"-";const T=E.typedBuffer;return"".concat((0,n.s1)(_,T.buffer,(()=>_.size)),"/").concat(T.byteOffset,"/").concat(T.byteLength)}function m(E){return(0,t.pC)(E)?E.toString():"-"}function X(E,_,T){_.writeVertices&&function(E,_){const{position:T,normal:R,tangent:A,color:n,texCoord0:S}=E.vertexAttributes,I=_.region.start,{attributes:O,transform:r}=_.gltf,o=O.position.count;if((0,D.t)(T.slice(I,o),O.position,r),(0,t.pC)(O.normal)&&(0,t.pC)(R)){const E=(0,C.b)((0,e.c)(),r),_=R.slice(I,o);(0,D.a)(_,O.normal,E),(0,N.oc)(E)&&(0,D.n)(_,_)}else(0,t.pC)(R)&&(0,s.f)(R,0,0,1,{dstIndex:I,count:o});if((0,t.pC)(O.tangent)&&(0,t.pC)(A)){const E=(0,C.b)((0,e.c)(),r),_=A.slice(I,o);(0,M.t)(_,O.tangent,E),(0,N.oc)(E)&&(0,M.n)(_,_)}else(0,t.pC)(A)&&(0,a.f)(A,0,0,1,1,{dstIndex:I,count:o});if((0,t.pC)(O.texCoord0)&&(0,t.pC)(S)?(0,l.n)(S.slice(I,o),O.texCoord0):(0,t.pC)(S)&&(0,l.f)(S,0,0,{dstIndex:I,count:o}),(0,t.pC)(O.color)&&(0,t.pC)(n)){const E=O.color,_=n.slice(I,o);if(4===E.elementCount)E instanceof u.ek?(0,M.s)(_,E,255):E instanceof u.mc?(0,a.c)(_,E):E instanceof u.v6&&(0,M.a)(_,E,8);else{(0,a.f)(_,255,255,255,255);const T=u.ne.fromTypedArray(_.typedBuffer,_.typedBufferStride);E instanceof u.ct?(0,D.s)(T,E,255):E instanceof u.ne?(0,s.c)(T,E):E instanceof u.mw&&(0,D.b)(T,E,8)}}else(0,t.pC)(n)&&(0,a.f)(n.slice(I,o),255,255,255,255)}(E,_);const R=_.gltf,A=function(E,_){switch(_){case F.MX.TRIANGLES:return(0,i.nh)(E,B.DX);case F.MX.TRIANGLE_STRIP:return(0,i.DA)(E);case F.MX.TRIANGLE_FAN:return(0,i.jX)(E)}}(R.indices||R.attributes.position.count,R.primitiveType),n=_.region.start;if(n)for(let N=0;N<A.length;N++)A[N]+=n;E.components.push(new O.Z({faces:A,material:T.get(R.material),trustSourceNormals:!0}))}function Y(E){switch(E){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function V(E){return{horizontal:x(E.s),vertical:x(E.t)}}function x(E){switch(E){case F.e8.CLAMP_TO_EDGE:return"clamp";case F.e8.MIRRORED_REPEAT:return"mirror";case F.e8.REPEAT:return"repeat"}}function g(E){return E**(1/f.K)*255}},8548:function(E,_,T){var R,A,n,N,t,C,e,S,I,O,r,o,L,u,D,M,c,P,G,U,i,B;T.d(_,{Br:function(){return M},Ho:function(){return G},LR:function(){return C},Ld:function(){return f},Lm:function(){return i},Lu:function(){return a},MX:function(){return A},No:function(){return L},OU:function(){return B},Se:function(){return H},Tg:function(){return c},V7:function(){return Y},VI:function(){return u},VY:function(){return s},Wf:function(){return e},Y5:function(){return X},_g:function(){return F},cw:function(){return r},db:function(){return N},e8:function(){return o},g:function(){return S},l1:function(){return P},lP:function(){return D},lk:function(){return R},q_:function(){return l},qi:function(){return U},w0:function(){return t},wb:function(){return I},xS:function(){return O},zi:function(){return n}}),function(E){E[E.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",E[E.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",E[E.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(R||(R={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(A||(A={})),function(E){E[E.ZERO=0]="ZERO",E[E.ONE=1]="ONE",E[E.SRC_COLOR=768]="SRC_COLOR",E[E.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",E[E.SRC_ALPHA=770]="SRC_ALPHA",E[E.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",E[E.DST_ALPHA=772]="DST_ALPHA",E[E.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",E[E.DST_COLOR=774]="DST_COLOR",E[E.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",E[E.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",E[E.CONSTANT_COLOR=32769]="CONSTANT_COLOR",E[E.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",E[E.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",E[E.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(n||(n={})),function(E){E[E.ADD=32774]="ADD",E[E.SUBTRACT=32778]="SUBTRACT",E[E.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(N||(N={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",E[E.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",E[E.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",E[E.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",E[E.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",E[E.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(t||(t={})),function(E){E[E.FRONT=1028]="FRONT",E[E.BACK=1029]="BACK",E[E.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(C||(C={})),function(E){E[E.CW=2304]="CW",E[E.CCW=2305]="CCW"}(e||(e={})),function(E){E[E.BYTE=5120]="BYTE",E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.SHORT=5122]="SHORT",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.INT=5124]="INT",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.FLOAT=5126]="FLOAT"}(S||(S={})),function(E){E[E.NEVER=512]="NEVER",E[E.LESS=513]="LESS",E[E.EQUAL=514]="EQUAL",E[E.LEQUAL=515]="LEQUAL",E[E.GREATER=516]="GREATER",E[E.NOTEQUAL=517]="NOTEQUAL",E[E.GEQUAL=518]="GEQUAL",E[E.ALWAYS=519]="ALWAYS"}(I||(I={})),function(E){E[E.ZERO=0]="ZERO",E[E.KEEP=7680]="KEEP",E[E.REPLACE=7681]="REPLACE",E[E.INCR=7682]="INCR",E[E.DECR=7683]="DECR",E[E.INVERT=5386]="INVERT",E[E.INCR_WRAP=34055]="INCR_WRAP",E[E.DECR_WRAP=34056]="DECR_WRAP"}(O||(O={})),function(E){E[E.NEAREST=9728]="NEAREST",E[E.LINEAR=9729]="LINEAR",E[E.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",E[E.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",E[E.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",E[E.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(r||(r={})),function(E){E[E.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",E[E.REPEAT=10497]="REPEAT",E[E.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(o||(o={})),function(E){E[E.TEXTURE_2D=3553]="TEXTURE_2D",E[E.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",E[E.TEXTURE_3D=32879]="TEXTURE_3D",E[E.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",E[E.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",E[E.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",E[E.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",E[E.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(L||(L={})),function(E){E[E.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL",E[E.ALPHA=6406]="ALPHA",E[E.RGB=6407]="RGB",E[E.RGBA=6408]="RGBA",E[E.LUMINANCE=6409]="LUMINANCE",E[E.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",E[E.RED=6403]="RED",E[E.RG=33319]="RG",E[E.RED_INTEGER=36244]="RED_INTEGER",E[E.RG_INTEGER=33320]="RG_INTEGER",E[E.RGB_INTEGER=36248]="RGB_INTEGER",E[E.RGBA_INTEGER=36249]="RGBA_INTEGER"}(u||(u={})),function(E){E[E.RGBA4=32854]="RGBA4",E[E.R16F=33325]="R16F",E[E.RG16F=33327]="RG16F",E[E.RGB32F=34837]="RGB32F",E[E.RGBA16F=34842]="RGBA16F",E[E.R32F=33326]="R32F",E[E.RG32F=33328]="RG32F",E[E.RGBA32F=34836]="RGBA32F",E[E.R11F_G11F_B10F=35898]="R11F_G11F_B10F",E[E.RGB8=32849]="RGB8",E[E.RGBA8=32856]="RGBA8",E[E.RGB5_A1=32855]="RGB5_A1",E[E.R8=33321]="R8",E[E.RG8=33323]="RG8",E[E.R8I=33329]="R8I",E[E.R8UI=33330]="R8UI",E[E.R16I=33331]="R16I",E[E.R16UI=33332]="R16UI",E[E.R32I=33333]="R32I",E[E.R32UI=33334]="R32UI",E[E.RG8I=33335]="RG8I",E[E.RG8UI=33336]="RG8UI",E[E.RG16I=33337]="RG16I",E[E.RG16UI=33338]="RG16UI",E[E.RG32I=33339]="RG32I",E[E.RG32UI=33340]="RG32UI",E[E.RGB16F=34843]="RGB16F",E[E.RGB9_E5=35901]="RGB9_E5",E[E.SRGB8=35905]="SRGB8",E[E.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",E[E.RGB565=36194]="RGB565",E[E.RGBA32UI=36208]="RGBA32UI",E[E.RGB32UI=36209]="RGB32UI",E[E.RGBA16UI=36214]="RGBA16UI",E[E.RGB16UI=36215]="RGB16UI",E[E.RGBA8UI=36220]="RGBA8UI",E[E.RGB8UI=36221]="RGB8UI",E[E.RGBA32I=36226]="RGBA32I",E[E.RGB32I=36227]="RGB32I",E[E.RGBA16I=36232]="RGBA16I",E[E.RGB16I=36233]="RGB16I",E[E.RGBA8I=36238]="RGBA8I",E[E.RGB8I=36239]="RGB8I",E[E.R8_SNORM=36756]="R8_SNORM",E[E.RG8_SNORM=36757]="RG8_SNORM",E[E.RGB8_SNORM=36758]="RGB8_SNORM",E[E.RGBA8_SNORM=36759]="RGBA8_SNORM",E[E.RGB10_A2=32857]="RGB10_A2",E[E.RGB10_A2UI=36975]="RGB10_A2UI"}(D||(D={})),function(E){E[E.FLOAT=5126]="FLOAT",E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",E[E.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",E[E.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",E[E.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",E[E.BYTE=5120]="BYTE",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.SHORT=5122]="SHORT",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.INT=5124]="INT",E[E.HALF_FLOAT=5131]="HALF_FLOAT",E[E.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",E[E.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",E[E.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",E[E.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(M||(M={})),function(E){E[E.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",E[E.STENCIL_INDEX8=36168]="STENCIL_INDEX8",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL",E[E.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",E[E.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",E[E.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",E[E.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(c||(c={})),function(E){E[E.STATIC_DRAW=35044]="STATIC_DRAW",E[E.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",E[E.STREAM_DRAW=35040]="STREAM_DRAW",E[E.STATIC_READ=35045]="STATIC_READ",E[E.DYNAMIC_READ=35049]="DYNAMIC_READ",E[E.STREAM_READ=35041]="STREAM_READ",E[E.STATIC_COPY=35046]="STATIC_COPY",E[E.DYNAMIC_COPY=35050]="DYNAMIC_COPY",E[E.STREAM_COPY=35042]="STREAM_COPY"}(P||(P={})),function(E){E[E.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",E[E.VERTEX_SHADER=35633]="VERTEX_SHADER"}(G||(G={})),function(E){E[E.FRAMEBUFFER=36160]="FRAMEBUFFER",E[E.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",E[E.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(U||(U={})),function(E){E[E.TEXTURE=0]="TEXTURE",E[E.RENDER_BUFFER=1]="RENDER_BUFFER",E[E.CUBEMAP=2]="CUBEMAP"}(i||(i={})),function(E){E[E.NONE=0]="NONE",E[E.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",E[E.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",E[E.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",E[E.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(B||(B={}));const f=33984;var F,s;!function(E){E[E.Texture=0]="Texture",E[E.BufferObject=1]="BufferObject",E[E.VertexArrayObject=2]="VertexArrayObject",E[E.Shader=3]="Shader",E[E.Program=4]="Program",E[E.FramebufferObject=5]="FramebufferObject",E[E.Renderbuffer=6]="Renderbuffer",E[E.Sync=7]="Sync",E[E.COUNT=8]="COUNT"}(F||(F={})),function(E){E[E.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",E[E.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",E[E.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",E[E.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",E[E.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",E[E.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",E[E.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",E[E.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",E[E.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",E[E.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",E[E.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",E[E.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",E[E.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",E[E.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",E[E.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",E[E.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(s||(s={}));const a=33306;var l,H,p,m,X,Y,V;!function(E){E[E.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",E[E.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",E[E.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",E[E.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",E[E.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",E[E.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",E[E.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",E[E.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",E[E.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",E[E.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",E[E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(l||(l={})),function(E){E[E.FLOAT=5126]="FLOAT",E[E.FLOAT_VEC2=35664]="FLOAT_VEC2",E[E.FLOAT_VEC3=35665]="FLOAT_VEC3",E[E.FLOAT_VEC4=35666]="FLOAT_VEC4",E[E.INT=5124]="INT",E[E.INT_VEC2=35667]="INT_VEC2",E[E.INT_VEC3=35668]="INT_VEC3",E[E.INT_VEC4=35669]="INT_VEC4",E[E.BOOL=35670]="BOOL",E[E.BOOL_VEC2=35671]="BOOL_VEC2",E[E.BOOL_VEC3=35672]="BOOL_VEC3",E[E.BOOL_VEC4=35673]="BOOL_VEC4",E[E.FLOAT_MAT2=35674]="FLOAT_MAT2",E[E.FLOAT_MAT3=35675]="FLOAT_MAT3",E[E.FLOAT_MAT4=35676]="FLOAT_MAT4",E[E.SAMPLER_2D=35678]="SAMPLER_2D",E[E.SAMPLER_CUBE=35680]="SAMPLER_CUBE",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",E[E.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",E[E.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",E[E.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",E[E.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",E[E.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",E[E.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",E[E.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",E[E.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",E[E.SAMPLER_3D=35679]="SAMPLER_3D",E[E.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",E[E.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",E[E.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",E[E.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",E[E.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",E[E.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",E[E.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",E[E.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",E[E.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",E[E.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",E[E.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",E[E.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(H||(H={})),function(E){E[E.OBJECT_TYPE=37138]="OBJECT_TYPE",E[E.SYNC_CONDITION=37139]="SYNC_CONDITION",E[E.SYNC_STATUS=37140]="SYNC_STATUS",E[E.SYNC_FLAGS=37141]="SYNC_FLAGS"}(p||(p={})),function(E){E[E.UNSIGNALED=37144]="UNSIGNALED",E[E.SIGNALED=37145]="SIGNALED"}(m||(m={})),function(E){E[E.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",E[E.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",E[E.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",E[E.WAIT_FAILED=37149]="WAIT_FAILED"}(X||(X={})),function(E){E[E.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(Y||(Y={})),function(E){E[E.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(V||(V={}))}}]);
//# sourceMappingURL=5886.46de519e.chunk.js.map