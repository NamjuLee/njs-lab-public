"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[6009,9951],{71277:function(e,t,n){function l(e){return e=e||globalThis.location.hostname,c.some((t=>{var n;return null!=(null===(n=e)||void 0===n?void 0:n.match(t))}))}function a(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(s)||null!=t.match(r)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(o)||null!=t.match(i)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}n.d(t,{XO:function(){return l},pJ:function(){return a}});const s=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,s,o,/^jsapps.esri.com$/,r,i]},36009:function(e,t,n){n.r(t),n.d(t,{getPatternDescriptor:function(){return z},getSizeFromOptions:function(){return Z},getSymbolLayerFill:function(){return L},previewSymbol3D:function(){return F}});var l=n(65905),a=n(86950),s=(n(93169),n(10064)),o=n(32718),r=n(92026),i=n(66978),c=n(17842),u=n(79563),p=n(29122),h=n(73627),m=n(37817),f=n(1682),y=n(74579),d=n(19951);const b=m.b_.size,v=m.b_.maxSize,g=m.b_.maxOutlineSize,w=m.b_.lineWidth,k=m.b_.tallSymbolWidth;function x(e){const t=e.outline,n=(0,r.pC)(e.material)?e.material.color:null,l=(0,r.pC)(n)?n.toHex():null;if((0,r.Wi)(t)||"pattern"in t&&(0,r.pC)(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===l?{color:"#bdc3c7",width:.75}:null;const a=(0,c.F2)(t.size)||0;return{color:"rgba("+((0,r.pC)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(a,g),style:"pattern"in t&&(0,r.pC)(t.pattern)&&"style"===t.pattern.type?(0,u.Sp)(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=e.a,l=(0,a._Y)(e),s=l.h,o=l.s/t,r=100-(100-l.v)/t,{r:i,g:c,b:u}=(0,a.xr)({h:s,s:o,v:r});return[i,c,u,n]}function S(e){return"water"===e.type?(0,r.Wi)(e.color)?null:e.color:(0,r.Wi)(e.material)||(0,r.Wi)(e.material.color)?null:e.material.color}function L(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=S(e);if(!n){if("fill"===e.type)return null;const n=u.Ne.r,l=(0,m.uH)(n,t);return[l,l,l,100]}const l=n.toRgba();for(let a=0;a<3;a++)l[a]=(0,m.uH)(l[a],t);return l}async function z(e,t){const n=e.style;return"none"===n?null:{type:"pattern",x:0,y:0,src:await(0,u.Od)((0,l.V)("esri/symbols/patterns/".concat(n,".png")),t.toCss(!0)),width:5,height:5}}function C(e){return e.outline?x(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function j(e,t){const n=S(e);if(!n)return null;let l="rgba(";return l+=(0,m.uH)(n.r,t)+",",l+=(0,m.uH)(n.g,t)+",",l+=(0,m.uH)(n.b,t)+",",l+n.a+");"}function N(e,t){const n=j(e,t);return n?"pattern"in e&&(0,r.pC)(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style?null:{color:n,width:Math.min(e.size?(0,c.F2)(e.size):.75,g),style:"pattern"in e&&(0,r.pC)(e.pattern)&&"style"===e.pattern.type?(0,u.Sp)(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?(0,c.F2)(2):e.join:null}:{}}function P(e,t,n){const l=null!=n?.75*n:0;return{type:"linear",x1:l?.25*l:0,y1:l?.5*l:0,x2:l||4,y2:l?.5*l:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function Z(e){const t="number"==typeof(null===e||void 0===e?void 0:e.size)?null===e||void 0===e?void 0:e.size:null;return t?(0,c.F2)(t):null}function D(e,t){var n;const a=Z(t),s=null!==t&&void 0!==t&&t.maxSize?(0,c.F2)(t.maxSize):null,r=null!==(n=null===t||void 0===t?void 0:t.disableUpsampling)&&void 0!==n&&n,u=e.symbolLayers,g=[];let w=0,M=0;const S=u.getItemAt(u.length-1);let z;return S&&"icon"===S.type&&(z=S.size&&(0,c.F2)(S.size)),u.forEach((n=>{if("icon"!==n.type&&"object"!==n.type)return;const o="icon"===n.type?n.size&&(0,c.F2)(n.size):0,i=a||o?Math.ceil(Math.min(a||o,s||v)):b;if(n&&n.resource&&n.resource.href){const t=function(e,t){const n=t&&t.resource,a=n&&n.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(a&&"object"!==t.type)return Promise.resolve((0,y.nf)(e,t));const s=(0,l.V)("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?(0,d.resolveWebStyleSymbol)(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>{var t;return(null===e||void 0===e||null===(t=e.thumbnail)||void 0===t?void 0:t.url)||s})):Promise.resolve(s)}(e,n).then((e=>{const t=n.get("material.color"),l=function(e){return"icon"===e.type?"multiply":"tint"}(n);return(0,f.r)(e,i,t,l,r)})).then((e=>{const t=e.width,n=e.height;return w=Math.max(w,t),M=Math.max(M,n),[{shape:{type:"image",x:0,y:0,width:t,height:n,src:e.url},fill:null,stroke:null}]}));g.push(t)}else{var u;let e=i;"icon"===n.type&&z&&a&&(e=i*(o/z));const l="tall"===(null===t||void 0===t?void 0:t.symbolConfig)||(null===t||void 0===t||null===(u=t.symbolConfig)||void 0===u?void 0:u.isTall)||"object"===n.type&&function(e){const t=e.depth,n=e.height,l=e.width;return 0!==l&&0!==t&&0!==n&&l===t&&null!=l&&null!=n&&l<n}(n);w=Math.max(w,l?k:e),M=Math.max(M,e),g.push(Promise.resolve(function(e,t,n){const l=[];if(!e)return l;switch(e.type){case"icon":{const n=0,a=0,s=t,o=t;switch(e.resource&&e.resource.primitive||p.S){case"circle":l.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:L(e,0),stroke:x(e)});break;case"square":l.push({shape:{type:"path",path:[{command:"M",values:[n,o]},{command:"L",values:[n,a]},{command:"L",values:[s,a]},{command:"L",values:[s,o]},{command:"Z",values:[]}]},fill:L(e,0),stroke:x(e)});break;case"triangle":l.push({shape:{type:"path",path:[{command:"M",values:[n,o]},{command:"L",values:[.5*s,a]},{command:"L",values:[s,o]},{command:"Z",values:[]}]},fill:L(e,0),stroke:x(e)});break;case"cross":l.push({shape:{type:"path",path:[{command:"M",values:[.5*s,a]},{command:"L",values:[.5*s,o]},{command:"M",values:[n,.5*o]},{command:"L",values:[s,.5*o]}]},stroke:C(e)});break;case"x":l.push({shape:{type:"path",path:[{command:"M",values:[n,a]},{command:"L",values:[s,o]},{command:"M",values:[s,a]},{command:"L",values:[n,o]}]},stroke:C(e)});break;case"kite":l.push({shape:{type:"path",path:[{command:"M",values:[n,.5*o]},{command:"L",values:[.5*s,a]},{command:"L",values:[s,.5*o]},{command:"L",values:[.5*s,o]},{command:"Z",values:[]}]},fill:L(e,0),stroke:x(e)})}break}case"object":switch(e.resource&&e.resource.primitive||h.S){case"cone":{const a=P(L(e,0),L(e,-.6),n?k:t),s=(0,m.TE)(t,n);l.push({shape:s[0],fill:a}),l.push({shape:s[1],fill:a});break}case"inverted-cone":{const n=L(e,0),a=P(n,L(e,-.6),t),s=(0,m.DY)(t);l.push({shape:s[0],fill:a}),l.push({shape:s[1],fill:n});break}case"cube":{const a=(0,m.Pc)(t,n);l.push({shape:a[0],fill:L(e,0)}),l.push({shape:a[1],fill:L(e,-.3)}),l.push({shape:a[2],fill:L(e,-.5)});break}case"cylinder":{const a=P(L(e,0),L(e,-.6),n?k:t),s=(0,m.EB)(t,n);l.push({shape:s[0],fill:a}),l.push({shape:s[1],fill:a}),l.push({shape:s[2],fill:L(e,0)});break}case"diamond":{const n=(0,m.XX)(t);l.push({shape:n[0],fill:L(e,-.3)}),l.push({shape:n[1],fill:L(e,0)}),l.push({shape:n[2],fill:L(e,-.3)}),l.push({shape:n[3],fill:L(e,-.7)});break}case"sphere":{const n=P(L(e,0),L(e,-.6));n.x1=0,n.y1=0,n.x2=.25*t,n.y2=.25*t,l.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:n});break}case"tetrahedron":{const n=(0,m.tp)(t);l.push({shape:n[0],fill:L(e,-.3)}),l.push({shape:n[1],fill:L(e,0)}),l.push({shape:n[2],fill:L(e,-.6)});break}}}return l}(n,e,l)))}})),(0,i.as)(g).then((e=>{const n=[];return e.forEach((e=>{e.value?n.push(e.value):e.error&&o.Z.getLogger("esri.symbols.support.previewSymbol3D").warn("error while building swatchInfo!",e.error)})),(0,f.w)(n,[w,M],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function F(e,t){if(0===e.symbolLayers.length)return Promise.reject(new s.Z("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return D(e,t);case"line-3d":return function(e,t){const n=e.symbolLayers,l=[],a=(0,y.YW)(e),s=Z(t),o=(t&&t.maxSize?(0,c.F2)(t.maxSize):null)||g;let i,u=0,p=0;return n.forEach(((e,t)=>{if(!e)return;if("line"!==e.type&&"path"!==e.type)return;const n=[];switch(e.type){case"line":{const l=N(e,0);if((0,r.Wi)(l))break;const a=l&&l.width||0;0===t&&(i=a);const c=Math.min(s||a,o),h=0===t?c:s?c*(a/i):c,m=h>w/2?2*h:w;p=Math.max(p,h),u=Math.max(u,m),l.width=h,n.push({shape:{type:"path",path:[{command:"M",values:[0,.5*p]},{command:"L",values:[u,.5*p]}]},stroke:l});break}case"path":{const t=Math.min(s||b,o),l=L(e,0),a=L(e,-.2),r=j(e,-.4),i=r?{color:r,width:1}:{};if("quad"===e.profile){const t=e.width,s=e.height,o=(0,m.eb)(t&&s?t/s:1,0===s,0===t),r={...i,join:"bevel"};n.push({shape:o[0],fill:a,stroke:r}),n.push({shape:o[1],fill:a,stroke:r}),n.push({shape:o[2],fill:l,stroke:r})}else n.push({shape:m.JZ.pathSymbol3DLayer[0],fill:a,stroke:i}),n.push({shape:m.JZ.pathSymbol3DLayer[1],fill:l,stroke:i});p=Math.max(p,t),u=p}}l.push(n)})),Promise.resolve((0,f.w)(l,[u,p],{node:t&&t.node,scale:a,opacity:t&&t.opacity}))}(e,t);case"polygon-3d":case"mesh-3d":return async function(e,t){const n="mesh-3d"===e.type,l=e.symbolLayers,a=Z(t),s=t&&t.maxSize?(0,c.F2)(t.maxSize):null,o=a||b,i=[];let u=0,p=0,h=!1;for(let c=0;c<l.length;c++){const e=l.getItemAt(c),t=[];if(n&&"fill"!==e.type)continue;const a=m.JZ.fill[0];switch(e.type){case"fill":{const l=x(e),i=Math.min(o,s||v);u=Math.max(u,i),p=Math.max(p,i),h=!0;let c=L(e,0);const m="pattern"in e?e.pattern:null,f=S(e);!n&&(0,r.pC)(m)&&"style"===m.type&&"solid"!==m.style&&f&&(c=await z(m,f)),t.push({shape:a,fill:c,stroke:l});break}case"line":{const n=N(e,0);if((0,r.Wi)(n))break;const l={stroke:n,shape:a};u=Math.max(u,b),p=Math.max(p,b),t.push(l);break}case"extrude":{const n={join:"round",width:1,...N(e,-.4)},l=L(e,0),a=L(e,-.2),r=Math.min(o,s||v),i=(0,m.EV)(r);n.width=1,t.push({shape:i[0],fill:a,stroke:n}),t.push({shape:i[1],fill:a,stroke:n}),t.push({shape:i[2],fill:l,stroke:n});const c=b,h=.7*b+.5*r;u=Math.max(u,c),p=Math.max(p,h);break}case"water":{const n=(0,r.s3)(S(e)),l=M(n),a=M(n,2),i=M(n,3),c=(0,m.ht)();h=!0,t.push({shape:c[0],fill:l}),t.push({shape:c[1],fill:a}),t.push({shape:c[2],fill:i});const f=Math.min(o,s||v);u=Math.max(u,f),p=Math.max(p,f);break}}i.push(t)}return(0,f.w)(i,[u,p],{node:t&&t.node,scale:h,opacity:t&&t.opacity})}(e,t)}return Promise.reject(new s.Z("symbolPreview: swatchInfo3D","symbol not supported."))}},19951:function(e,t,n){n.r(t),n.d(t,{fetchSymbolFromStyle:function(){return y},resolveWebStyleSymbol:function(){return f}});var l=n(51508),a=n(71277),s=n(10064),o=n(92026),r=n(35995),i=n(70032),c=n(53283),u=n(42283),p=n(1472),h=n(38048),m=n(81854);function f(e,t,n,l){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,n){const l=h.wm.replace(/\{SymbolName\}/gi,e.name),a=(0,o.pC)(t.portal)?t.portal:i.Z.getDefault();return(0,h.EJ)(l,n).then((e=>{const t=(0,h.KV)(e.data);return(0,u.im)(t,{portal:a,url:(0,r.mN)((0,r.Yd)(l)),origin:"portal-item"})}))}(e,t,l):(0,h.n2)(e,t,l).then((a=>y((0,o.s3)(a),e.name,t,n,l))):Promise.reject(new s.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function y(e,t,n,f,y){var d,b,v;const g=e.data,w=n&&(0,o.pC)(n.portal)?n.portal:i.Z.getDefault(),k={portal:w,url:(0,r.mN)(e.baseUrl),origin:"portal-item"},x=g.items.find((e=>e.name===t));if(!x){const e="The symbol name '".concat(t,"' could not be found");return Promise.reject(new s.Z("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let M=(0,c.f)((0,h.v9)(x,f),k),S=null!==(d=null===(b=x.thumbnail)||void 0===b?void 0:b.href)&&void 0!==d?d:null;const L=x.thumbnail&&x.thumbnail.imageData;(0,a.XO)()&&(M=null!==(v=(0,a.pJ)(M))&&void 0!==v?v:"",S=(0,a.pJ)(S));const z={portal:w,url:(0,r.mN)((0,r.Yd)(M)),origin:"portal-item"};return(0,h.EJ)(M,y).then((a=>{const s="cimRef"===f?(0,h.KV)(a.data):a.data,o=(0,u.im)(s,z);if(o&&(0,l.dU)(o)){if(S){const e=(0,c.f)(S,k);o.thumbnail=new m.p({url:e})}else L&&(o.thumbnail=new m.p({url:"data:image/png;base64,".concat(L)}));e.styleUrl?o.styleOrigin=new p.Z({portal:n.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(o.styleOrigin=new p.Z({portal:n.portal,styleName:e.styleName,name:t}))}return o}))}}}]);
//# sourceMappingURL=6009.66fdab0b.chunk.js.map