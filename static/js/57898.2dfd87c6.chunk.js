"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[57898],{11873:(t,r,n)=>{function e(){return[1,0,0,0,1,0,0,0,1]}function o(t,r){return new Float64Array(t,r,9)}n.d(r,{a:()=>o,c:()=>e});Object.freeze(Object.defineProperty({__proto__:null,create:e,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,r,n,e,o,i,a,c,u){return[t,r,n,e,o,i,a,c,u]},createView:o},Symbol.toStringTag,{value:"Module"}))},81949:(t,r,n)=>{function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function i(t,r){return new Float64Array(t,r,16)}n.d(r,{I:()=>a,a:()=>i,b:()=>o,c:()=>e});const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:e,clone:o,fromValues:function(t,r,n,e,o,i,a,c,u,l,f,s,p,y,d,h){return[t,r,n,e,o,i,a,c,u,l,f,s,p,y,d,h]},createView:i,IDENTITY:a},Symbol.toStringTag,{value:"Module"}))},48976:(t,r,n)=>{n.d(r,{c:()=>y,g:()=>f,j:()=>E,k:()=>h,m:()=>s,s:()=>l});var e=n(11873),o=n(98131),i=n(71353),a=n(26277),c=n(11186),u=n(90045);function l(t,r,n){n*=.5;const e=Math.sin(n);return t[0]=e*r[0],t[1]=e*r[1],t[2]=e*r[2],t[3]=Math.cos(n),t}function f(t,r){const n=2*Math.acos(r[3]),e=Math.sin(n/2);return e>(0,a.g)()?(t[0]=r[0]/e,t[1]=r[1]/e,t[2]=r[2]/e):(t[0]=1,t[1]=0,t[2]=0),n}function s(t,r,n){const e=r[0],o=r[1],i=r[2],a=r[3],c=n[0],u=n[1],l=n[2],f=n[3];return t[0]=e*f+a*c+o*l-i*u,t[1]=o*f+a*u+i*c-e*l,t[2]=i*f+a*l+e*u-o*c,t[3]=a*f-e*c-o*u-i*l,t}function p(t,r,n,e){const o=r[0],i=r[1],c=r[2],u=r[3];let l,f,s,p,y,d=n[0],h=n[1],g=n[2],m=n[3];return f=o*d+i*h+c*g+u*m,f<0&&(f=-f,d=-d,h=-h,g=-g,m=-m),1-f>(0,a.g)()?(l=Math.acos(f),s=Math.sin(l),p=Math.sin((1-e)*l)/s,y=Math.sin(e*l)/s):(p=1-e,y=e),t[0]=p*o+y*d,t[1]=p*i+y*h,t[2]=p*c+y*g,t[3]=p*u+y*m,t}function y(t,r){return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[3]=r[3],t}function d(t,r){const n=r[0]+r[4]+r[8];let e;if(n>0)e=Math.sqrt(n+1),t[3]=.5*e,e=.5/e,t[0]=(r[5]-r[7])*e,t[1]=(r[6]-r[2])*e,t[2]=(r[1]-r[3])*e;else{let n=0;r[4]>r[0]&&(n=1),r[8]>r[3*n+n]&&(n=2);const o=(n+1)%3,i=(n+2)%3;e=Math.sqrt(r[3*n+n]-r[3*o+o]-r[3*i+i]+1),t[n]=.5*e,e=.5/e,t[3]=(r[3*o+i]-r[3*i+o])*e,t[o]=(r[3*o+n]+r[3*n+o])*e,t[i]=(r[3*i+n]+r[3*n+i])*e}return t}function h(t,r,n,e){const o=.5*Math.PI/180;r*=o,n*=o,e*=o;const i=Math.sin(r),a=Math.cos(r),c=Math.sin(n),u=Math.cos(n),l=Math.sin(e),f=Math.cos(e);return t[0]=i*u*f-a*c*l,t[1]=a*c*f+i*u*l,t[2]=a*u*l-i*c*f,t[3]=a*u*f+i*c*l,t}const g=u.c,m=u.s,M=u.a,P=s,T=u.b,A=u.d,_=u.l,v=u.e,b=v,F=u.f,S=F,B=u.n,E=u.g,w=u.h;const C=(0,i.c)(),R=(0,i.f)(1,0,0),x=(0,i.f)(0,1,0);const O=(0,o.a)(),I=(0,o.a)();const j=(0,e.c)();Object.freeze(Object.defineProperty({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:l,getAxisAngle:f,multiply:s,rotateX:function(t,r,n){n*=.5;const e=r[0],o=r[1],i=r[2],a=r[3],c=Math.sin(n),u=Math.cos(n);return t[0]=e*u+a*c,t[1]=o*u+i*c,t[2]=i*u-o*c,t[3]=a*u-e*c,t},rotateY:function(t,r,n){n*=.5;const e=r[0],o=r[1],i=r[2],a=r[3],c=Math.sin(n),u=Math.cos(n);return t[0]=e*u-i*c,t[1]=o*u+a*c,t[2]=i*u+e*c,t[3]=a*u-o*c,t},rotateZ:function(t,r,n){n*=.5;const e=r[0],o=r[1],i=r[2],a=r[3],c=Math.sin(n),u=Math.cos(n);return t[0]=e*u+o*c,t[1]=o*u-e*c,t[2]=i*u+a*c,t[3]=a*u-i*c,t},calculateW:function(t,r){const n=r[0],e=r[1],o=r[2];return t[0]=n,t[1]=e,t[2]=o,t[3]=Math.sqrt(Math.abs(1-n*n-e*e-o*o)),t},slerp:p,random:function(t){const r=a.R,n=r(),e=r(),o=r(),i=Math.sqrt(1-n),c=Math.sqrt(n);return t[0]=i*Math.sin(2*Math.PI*e),t[1]=i*Math.cos(2*Math.PI*e),t[2]=c*Math.sin(2*Math.PI*o),t[3]=c*Math.cos(2*Math.PI*o),t},invert:function(t,r){const n=r[0],e=r[1],o=r[2],i=r[3],a=n*n+e*e+o*o+i*i,c=a?1/a:0;return t[0]=-n*c,t[1]=-e*c,t[2]=-o*c,t[3]=i*c,t},conjugate:y,fromMat3:d,fromEuler:h,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:g,set:m,add:M,mul:P,scale:T,dot:A,lerp:_,length:v,len:b,squaredLength:F,sqrLen:S,normalize:B,exactEquals:E,equals:w,rotationTo:function(t,r,n){const e=(0,c.e)(r,n);return e<-.999999?((0,c.f)(C,R,r),(0,c.u)(C)<1e-6&&(0,c.f)(C,x,r),(0,c.n)(C,C),l(t,C,Math.PI),t):e>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,c.f)(C,r,n),t[0]=C[0],t[1]=C[1],t[2]=C[2],t[3]=1+e,B(t,t))},sqlerp:function(t,r,n,e,o,i){return p(O,r,o,i),p(I,n,e,i),p(t,O,I,2*i*(1-i)),t},setAxes:function(t,r,n,e){const o=j;return o[0]=n[0],o[3]=n[1],o[6]=n[2],o[1]=e[0],o[4]=e[1],o[7]=e[2],o[2]=-r[0],o[5]=-r[1],o[8]=-r[2],B(t,d(t,o))}},Symbol.toStringTag,{value:"Module"}))},98131:(t,r,n)=>{function e(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}function i(t,r){return new Float64Array(t,r,4)}n.d(r,{I:()=>a,a:()=>e,b:()=>o,c:()=>i});const a=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:e,clone:o,fromValues:function(t,r,n,e){return[t,r,n,e]},createView:i,IDENTITY:a},Symbol.toStringTag,{value:"Module"}))},32035:(t,r,n)=>{n.d(r,{a:()=>i,b:()=>u,n:()=>c,s:()=>a,t:()=>o});var e=n(77873);function o(t,r,n){if(t.count!==r.count)return void e.c.error("source and destination buffers need to have the same number of elements");const o=t.count,i=n[0],a=n[1],c=n[2],u=n[4],l=n[5],f=n[6],s=n[8],p=n[9],y=n[10],d=n[12],h=n[13],g=n[14],m=t.typedBuffer,M=t.typedBufferStride,P=r.typedBuffer,T=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*M,r=e*T,n=P[r],o=P[r+1],A=P[r+2];m[t]=i*n+u*o+s*A+d,m[t+1]=a*n+l*o+p*A+h,m[t+2]=c*n+f*o+y*A+g}}function i(t,r,n){if(t.count!==r.count)return void e.c.error("source and destination buffers need to have the same number of elements");const o=t.count,i=n[0],a=n[1],c=n[2],u=n[3],l=n[4],f=n[5],s=n[6],p=n[7],y=n[8],d=t.typedBuffer,h=t.typedBufferStride,g=r.typedBuffer,m=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*h,r=e*m,n=g[r],o=g[r+1],M=g[r+2];d[t]=i*n+u*o+s*M,d[t+1]=a*n+l*o+p*M,d[t+2]=c*n+f*o+y*M}}function a(t,r,n){const e=Math.min(t.count,r.count),o=t.typedBuffer,i=t.typedBufferStride,a=r.typedBuffer,c=r.typedBufferStride;for(let u=0;u<e;u++){const t=u*i,r=u*c;o[t]=n*a[r],o[t+1]=n*a[r+1],o[t+2]=n*a[r+2]}}function c(t,r){const n=Math.min(t.count,r.count),e=t.typedBuffer,o=t.typedBufferStride,i=r.typedBuffer,a=r.typedBufferStride;for(let c=0;c<n;c++){const t=c*o,r=c*a,n=i[r],u=i[r+1],l=i[r+2],f=n*n+u*u+l*l;if(f>0){const r=1/Math.sqrt(f);e[t]=r*n,e[t+1]=r*u,e[t+2]=r*l}}}function u(t,r,n){const e=Math.min(t.count,r.count),o=t.typedBuffer,i=t.typedBufferStride,a=r.typedBuffer,c=r.typedBufferStride;for(let u=0;u<e;u++){const t=u*i,r=u*c;o[t]=a[r]>>n,o[t+1]=a[r+1]>>n,o[t+2]=a[r+2]>>n}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:o,transformMat3:i,scale:a,normalize:c,shiftRight:u},Symbol.toStringTag,{value:"Module"}))},92770:(t,r,n)=>{function e(t,r,n){const e=t.typedBuffer,o=t.typedBufferStride,i=r.typedBuffer,a=r.typedBufferStride,c=n?n.count:r.count;let u=(n&&n.dstIndex?n.dstIndex:0)*o,l=(n&&n.srcIndex?n.srcIndex:0)*a;for(let f=0;f<c;++f)e[u]=i[l],e[u+1]=i[l+1],e[u+2]=i[l+2],u+=o,l+=a}function o(t,r,n,e,o){var i,a;const c=t.typedBuffer,u=t.typedBufferStride,l=null!==(i=null===o||void 0===o?void 0:o.count)&&void 0!==i?i:t.count;let f=(null!==(a=null===o||void 0===o?void 0:o.dstIndex)&&void 0!==a?a:0)*u;for(let s=0;s<l;++s)c[f]=r,c[f+1]=n,c[f+2]=e,f+=u}n.d(r,{c:()=>e,f:()=>o});Object.freeze(Object.defineProperty({__proto__:null,copy:e,fill:o},Symbol.toStringTag,{value:"Module"}))},76046:(t,r,n)=>{n.d(r,{Z:()=>b});var e,o=n(27366),i=n(46784),a=n(92026),c=n(49861),u=(n(63780),n(25243),n(69912)),l=n(14226),f=n(81949),s=n(48976),p=n(98131),y=n(11186),d=n(71353),h=n(585),g=n(52587),m=n(92183),M=n(45238),P=n(25158),T=n(32035),A=n(92770);let _=e=class extends i.wq{constructor(t){super(t),this.origin=(0,d.c)(),this.translation=(0,d.c)(),this.rotation=(0,M.Ue)(),this.scale=(0,d.f)(1,1,1),this.geographic=!0}get localMatrix(){const t=(0,f.c)();return(0,s.s)(v,(0,M.ZZ)(this.rotation),(0,M.WH)(this.rotation)),(0,l.g)(t,v,this.translation,this.scale),t}get localMatrixInverse(){return(0,l.a)((0,f.c)(),this.localMatrix)}applyLocal(t,r){return(0,y.m)(r,t,this.localMatrix)}applyLocalInverse(t,r){return(0,y.m)(r,t,this.localMatrixInverse)}project(t,r){const n=new Float64Array(t.length),e=P.fP.fromTypedArray(n),o=P.fP.fromTypedArray(t);if(this.geographic){const t=(0,m.rS)(r),i=(0,f.c)();return(0,g.Bm)(r,this.origin,i,t),(0,l.m)(i,i,this.localMatrix),(0,T.t)(e,o,i),(0,g.CM)(n,t,0,n,r,0,n.length/3),n}const{localMatrix:i,origin:a}=this;(0,l.h)(i,f.I)?(0,A.c)(e,o):(0,T.t)(e,o,i);for(let c=0;c<n.length;c+=3)n[c+0]+=a[0],n[c+1]+=a[1],n[c+2]+=a[2];return n}getOriginPoint(t){const[r,n,e]=this.origin;return new h.Z({x:r,y:n,z:e,spatialReference:t})}equals(t){return(0,a.pC)(t)&&this.geographic===t.geographic&&(0,y.k)(this.origin,t.origin)&&(0,l.j)(this.localMatrix,t.localMatrix)}clone(){const t={origin:(0,d.a)(this.origin),translation:(0,d.a)(this.translation),rotation:(0,M.Ue)(this.rotation),scale:(0,d.a)(this.scale),geographic:this.geographic};return new e(t)}};(0,o._)([(0,c.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"origin",void 0),(0,o._)([(0,c.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"translation",void 0),(0,o._)([(0,c.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"rotation",void 0),(0,o._)([(0,c.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"scale",void 0),(0,o._)([(0,c.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],_.prototype,"geographic",void 0),(0,o._)([(0,c.Cb)()],_.prototype,"localMatrix",null),(0,o._)([(0,c.Cb)()],_.prototype,"localMatrixInverse",null),_=e=(0,o._)([(0,u.j)("esri.geometry.support.MeshTransform")],_);const v=(0,p.a)(),b=_},45238:(t,r,n)=>{n.d(r,{Ue:()=>c,WH:()=>s,ZZ:()=>f,qC:()=>l,uT:()=>u});var e=n(16889),o=n(48976),i=n(98131),a=n(11186);function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return[t[0],t[1],t[2],t[3]]}function u(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,a.c)(n,t),n[3]=r,n}function l(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,o.s)(y,t,s(t)),(0,o.s)(d,r,s(r)),(0,o.m)(y,d,y),function(t,r){return t[3]=r,t}(n,(0,e.BV)((0,o.g)(n,y)))}function f(t){return t}function s(t){return(0,e.Vl)(t[3])}const p=[0,0,1,0],y=(0,i.a)(),d=(0,i.a)();c()},77873:(t,r,n)=>{n.d(r,{c:()=>e});const e=n(32718).Z.getLogger("esri.views.3d.support.buffer.math")},26548:(t,r,n)=>{function e(t,r){var n;return t.isGeographic||t.isWebMercator&&(null===(n=null===r||void 0===r?void 0:r.geographic)||void 0===n||n)}n.d(r,{h:()=>e})},57898:(t,r,n)=>{n.d(r,{FF:()=>P,I5:()=>m,Yq:()=>T,iv:()=>g,w1:()=>M});var e=n(92026),o=n(68860),i=n(11873),a=n(14226),c=n(81949),u=n(22753),l=n(52587),f=n(92183),s=n(76046),p=n(25158),y=n(32035),d=n(26548),h=n(11700);function g(t,r,n){return(0,d.h)(r.spatialReference,n)?function(t,r,n){const e=r.spatialReference,o=F(r,n,w),i=new Float64Array(t.position.length),a=function(t,r,n,e){(0,y.t)(p.fP.fromTypedArray(e),p.fP.fromTypedArray(t),r);const o=new Float64Array(t.length);return(0,h.To)(e,o,n)}(t.position,o,e,i),c=(0,u.b)(R,o);return{position:a,normal:A(a,i,t.normal,c,e),tangent:_(a,i,t.tangent,c,e)}}(t,r,n):function(t,r,n){const e=new Float64Array(t.position.length),o=t.position,i=r.x,a=r.y,c=r.z||0,{horizontal:u,vertical:l}=E(n?n.unit:null,r.spatialReference);for(let f=0;f<o.length;f+=3)e[f+0]=o[f+0]*u+i,e[f+1]=o[f+1]*u+a,e[f+2]=o[f+2]*l+c;return{position:e,normal:t.normal,tangent:t.tangent}}(t,r,n)}function m(t,r,n){const{position:o,normal:i,tangent:a}=t;if((0,e.Wi)(r))return{position:o,normal:i,tangent:a};const c=r.localMatrix;return g({position:(0,h.zZ)(o,new Float64Array(o.length),c),normal:(0,e.pC)(i)?(0,h.w9)(i,new Float32Array(i.length),c):null,tangent:(0,e.pC)(a)?(0,h.VS)(a,new Float32Array(a.length),c):null},r.getOriginPoint(n),{geographic:r.geographic})}function M(t,r,n){if(null!==n&&void 0!==n&&n.useTransform){var e;const{position:o,normal:i,tangent:a}=t;return{vertexAttributes:{position:o,normal:i,tangent:a},transform:new s.Z({origin:[r.x,r.y,null!==(e=r.z)&&void 0!==e?e:0],geographic:(0,d.h)(r.spatialReference,n)})}}return{vertexAttributes:g(t,r,n),transform:null}}function P(t,r,n){return(0,d.h)(r.spatialReference,n)?b(t,r,n):v(t,r,n)}function T(t,r,n,o){if((0,e.Wi)(r))return P(t,n,o);const i=m(t,r,n.spatialReference);return n.equals(r.getOriginPoint(n.spatialReference))?v(i,n,o):(0,d.h)(n.spatialReference,o)?b(i,n,o):v(i,n,o)}function A(t,r,n,o,i){if((0,e.Wi)(n))return null;const a=new Float32Array(n.length);return(0,y.a)(p.ct.fromTypedArray(a),p.ct.fromTypedArray(n),o),(0,h.Yk)(a,t,r,i,a),a}function _(t,r,n,o,i){if((0,e.Wi)(n))return null;const a=new Float32Array(n.length);(0,y.a)(p.ct.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),p.ct.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),o);for(let e=3;e<a.length;e+=4)a[e]=n[e];return(0,h.M2)(a,t,r,i,a),a}function v(t,r,n){const e=new Float64Array(t.position.length),o=t.position,i=r.x,a=r.y,c=r.z||0,{horizontal:u,vertical:l}=E(n?n.unit:null,r.spatialReference);for(let f=0;f<o.length;f+=3)e[f+0]=(o[f+0]-i)/u,e[f+1]=(o[f+1]-a)/u,e[f+2]=(o[f+2]-c)/l;return{position:e,normal:t.normal,tangent:t.tangent}}function b(t,r,n){const e=r.spatialReference;F(r,n,w);const o=(0,a.a)(C,w),i=new Float64Array(t.position.length),c=function(t,r,n,e){const o=(0,h.XO)(t,r,e),i=p.fP.fromTypedArray(o),a=new Float64Array(o.length),c=p.fP.fromTypedArray(a);return(0,y.t)(c,i,n),a}(t.position,e,o,i),l=(0,u.b)(R,o);return{position:c,normal:S(t.normal,t.position,i,e,l),tangent:B(t.tangent,t.position,i,e,l)}}function F(t,r,n){(0,l.Bm)(t.spatialReference,[t.x,t.y,t.z||0],n,(0,f.rS)(t.spatialReference));const{horizontal:e,vertical:o}=E(r?r.unit:null,t.spatialReference);return(0,a.k)(n,n,[e,e,o]),n}function S(t,r,n,o,i){if((0,e.Wi)(t))return null;const a=(0,h.Iz)(t,r,n,o,new Float32Array(t.length)),c=p.ct.fromTypedArray(a);return(0,y.a)(c,c,i),a}function B(t,r,n,o,i){if((0,e.Wi)(t))return null;const a=(0,h.wi)(t,r,n,o,new Float32Array(t.length)),c=p.ct.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return(0,y.a)(c,c,i),a}function E(t,r){if((0,e.Wi)(t))return x;const n=r.isGeographic?1:(0,o.c9)(r),i=r.isGeographic?1:(0,o._R)(r),a=(0,o.En)(1,t,"meters");return{horizontal:a*n,vertical:a*i}}const w=(0,c.c)(),C=(0,c.c)(),R=(0,i.c)(),x={horizontal:1,vertical:1}},11700:(t,r,n)=>{n.d(r,{Iz:()=>m,M2:()=>F,To:()=>T,VS:()=>v,XO:()=>P,Yk:()=>M,w9:()=>_,wi:()=>b,zZ:()=>A});var e=n(32718),o=n(92026),i=n(22753),a=n(11873),c=n(81949),u=n(11186),l=n(71353),f=n(52587),s=n(92183),p=n(92975),y=n(81753),d=n(25158),h=n(32035);const g=e.Z.getLogger("esri.geometry.support.meshUtils.normalProjection");function m(t,r,n,e,o){return B(e)?(S(w.TO_PCPF,d.ct.fromTypedArray(t),d.fP.fromTypedArray(r),d.fP.fromTypedArray(n),e,d.ct.fromTypedArray(o)),o):(g.error("Cannot convert spatial reference to PCPF"),o)}function M(t,r,n,e,o){return B(e)?(S(w.FROM_PCPF,d.ct.fromTypedArray(t),d.fP.fromTypedArray(r),d.fP.fromTypedArray(n),e,d.ct.fromTypedArray(o)),o):(g.error("Cannot convert to spatial reference from PCPF"),o)}function P(t,r,n){return(0,f.CM)(t,r,0,n,(0,s.rS)(r),0,t.length/3),n}function T(t,r,n){return(0,f.CM)(t,(0,s.rS)(n),0,r,n,0,t.length/3),r}function A(t,r,n){if((0,o.Wi)(t))return r;const e=d.fP.fromTypedArray(t),i=d.fP.fromTypedArray(r);return(0,h.t)(i,e,n),r}function _(t,r,n){if((0,o.Wi)(t))return r;(0,i.b)(I,n);const e=d.ct.fromTypedArray(t),a=d.ct.fromTypedArray(r);return(0,h.a)(a,e,I),(0,i.i)(I)||(0,h.n)(a,a),r}function v(t,r,n){if((0,o.Wi)(t))return r;(0,i.b)(I,n);const e=d.ct.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),a=d.ct.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT);if((0,h.a)(a,e,I),(0,i.i)(I)||(0,h.n)(a,a),t!==r)for(let o=3;o<t.length;o+=4)r[o]=t[o];return r}function b(t,r,n,e,o){if(!B(e))return g.error("Cannot convert spatial reference to PCPF"),o;S(w.TO_PCPF,d.ct.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),d.fP.fromTypedArray(r),d.fP.fromTypedArray(n),e,d.ct.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let i=3;i<t.length;i+=4)o[i]=t[i];return o}function F(t,r,n,e,o){if(!B(e))return g.error("Cannot convert to spatial reference from PCPF"),o;S(w.FROM_PCPF,d.ct.fromTypedArray(t,16),d.fP.fromTypedArray(r),d.fP.fromTypedArray(n),e,d.ct.fromTypedArray(o,16));for(let i=3;i<t.length;i+=4)o[i]=t[i];return o}function S(t,r,n,e,o,a){if(!r)return;const c=n.count,l=(0,s.rS)(o);if(E(o))for(let s=0;s<c;s++)e.getVec(s,R),r.getVec(s,x),(0,f.Bm)(l,R,O,l),(0,i.f)(I,O),t===w.FROM_PCPF&&(0,i.t)(I,I),(0,u.t)(x,x,I),a.setVec(s,x);else for(let s=0;s<c;s++){e.getVec(s,R),r.getVec(s,x),(0,f.Bm)(l,R,O,l),(0,i.f)(I,O);const o=(0,y.mZ)(n.get(s,1));let c=Math.cos(o);t===w.TO_PCPF&&(c=1/c),I[0]*=c,I[1]*=c,I[2]*=c,I[3]*=c,I[4]*=c,I[5]*=c,t===w.FROM_PCPF&&(0,i.t)(I,I),(0,u.t)(x,x,I),(0,u.n)(x,x),a.setVec(s,x)}return a}function B(t){return E(t)||function(t){return t.isWebMercator}(t)}function E(t){return t.isWGS84||(0,p.yW)(t)||(0,p.BZ)(t)||(0,p.V2)(t)}var w,C;(C=w||(w={}))[C.TO_PCPF=0]="TO_PCPF",C[C.FROM_PCPF=1]="FROM_PCPF";const R=(0,l.c)(),x=(0,l.c)(),O=(0,c.c)(),I=(0,a.c)()}}]);
//# sourceMappingURL=57898.2dfd87c6.chunk.js.map