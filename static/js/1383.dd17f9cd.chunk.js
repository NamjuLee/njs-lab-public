"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[1383],{58971:function(n,e,t){t.d(e,{G6:function(){return T},Ie:function(){return F},J9:function(){return x},RF:function(){return b},U1:function(){return z},vY:function(){return u},ym:function(){return V}});var l=t(92026),i=t(77981);const a=(n,e,t)=>[e,t],r=(n,e,t)=>[e,t,n[2]],o=(n,e,t)=>[e,t,n[2],n[3]];function u(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:(0,l.pC)(n.extent)?[n.extent.xmin,n.extent.ymax]:[0,0]}:null}function s(n,e){let{scale:t,translate:l}=n;return Math.round((e-l[0])/t[0])}function c(n,e){let{scale:t,translate:l}=n;return Math.round((l[1]-e)/t[1])}function f(n,e,t){const l=[];let i,a,r,o;for(let u=0;u<t.length;u++){const f=t[u];u>0?(r=s(n,f[0]),o=c(n,f[1]),r===i&&o===a||(l.push(e(f,r-i,o-a)),i=r,a=o)):(i=s(n,f[0]),a=c(n,f[1]),l.push(e(f,i,a)))}return l.length>0?l:null}function m(n,e){let{scale:t,translate:l}=n;return e*t[0]+l[0]}function d(n,e){let{scale:t,translate:l}=n;return l[1]-e*t[1]}function p(n,e,t){const l=new Array(t.length);if(!t.length)return l;const[i,a]=n.scale;let r=m(n,t[0][0]),o=d(n,t[0][1]);l[0]=e(t[0],r,o);for(let u=1;u<t.length;u++){const n=t[u];r+=n[0]*i,o-=n[1]*a,l[u]=e(n,r,o)}return l}function h(n,e,t){const l=new Array(t.length);for(let i=0;i<t.length;i++)l[i]=p(n,e,t[i]);return l}function v(n,e,t,l,i){var u;return e.points=null!==(u=function(n,e,t,l){return f(n,t?l?o:r:l?r:a,e)}(n,t.points,l,i))&&void 0!==u?u:[],e}function b(n,e,t,l,i){return e.x=s(n,t.x),e.y=c(n,t.y),e!==t&&(l&&(e.z=t.z),i&&(e.m=t.m)),e}function g(n,e,t,l,i){const u=function(n,e,t,l){const i=[],u=t?l?o:r:l?r:a;for(let a=0;a<e.length;a++){const t=f(n,u,e[a]);t&&t.length>=3&&i.push(t)}return i.length?i:null}(n,t.rings,l,i);return u?(e.rings=u,e):null}function y(n,e,t,l,i){const u=function(n,e,t,l){const i=[],u=t?l?o:r:l?r:a;for(let a=0;a<e.length;a++){const t=f(n,u,e[a]);t&&t.length>=2&&i.push(t)}return i.length?i:null}(n,t.paths,l,i);return u?(e.paths=u,e):null}function V(n,e){return n&&e?(0,i.wp)(e)?b(n,{},e,!1,!1):(0,i.l9)(e)?y(n,{},e,!1,!1):(0,i.oU)(e)?g(n,{},e,!1,!1):(0,i.aW)(e)?v(n,{},e,!1,!1):(0,i.YX)(e)?function(n,e,t,l,i){return e.xmin=s(n,t.xmin),e.ymin=c(n,t.ymin),e.xmax=s(n,t.xmax),e.ymax=c(n,t.ymax),e!==t&&(l&&(e.zmin=t.zmin,e.zmax=t.zmax),i&&(e.mmin=t.mmin,e.mmax=t.mmax)),e}(n,{},e,!1,!1):null:null}function x(n,e,t,i,u){return(0,l.pC)(t)&&(e.points=function(n,e,t,l){return p(n,t?l?o:r:l?r:a,e)}(n,t.points,i,u)),e}function z(n,e,t,i,a){return(0,l.Wi)(t)||(e.x=m(n,t.x),e.y=d(n,t.y),e!==t&&(i&&(e.z=t.z),a&&(e.m=t.m))),e}function F(n,e,t,i,u){return(0,l.pC)(t)&&(e.rings=function(n,e,t,l){return h(n,t?l?o:r:l?r:a,e)}(n,t.rings,i,u)),e}function T(n,e,t,i,u){return(0,l.pC)(t)&&(e.paths=function(n,e,t,l){return h(n,t?l?o:r:l?r:a,e)}(n,t.paths,i,u)),e}},76551:function(n,e,t){t.d(e,{Z:function(){return v}});var l=t(27366),i=t(43404),a=t(49861),r=(t(63780),t(25243),t(69912)),o=t(46784),u=t(57634),s=t(22061);const c=new i.X({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let f=class extends o.wq{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};(0,l._)([(0,a.Cb)({type:s.Z,json:{write:!0}})],f.prototype,"baseSymbol",void 0),(0,l._)([(0,a.Cb)({types:u.V,json:{read:{reader:u.i},write:!0}})],f.prototype,"colorRamp",void 0),(0,l._)([(0,a.Cb)({json:{read:c.read,write:c.write}})],f.prototype,"type",void 0),f=(0,l._)([(0,r.j)("esri.rest.support.ClassificationDefinition")],f);const m=f,d=new i.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),p=new i.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let h=class extends m{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(n){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",n)}set definedInterval(n){"defined-interval"===this.classificationMethod&&this._set("definedInterval",n)}};(0,l._)([(0,a.Cb)({json:{write:!0}})],h.prototype,"breakCount",void 0),(0,l._)([(0,a.Cb)({json:{write:!0}})],h.prototype,"classificationField",void 0),(0,l._)([(0,a.Cb)({type:String,json:{read:d.read,write:d.write}})],h.prototype,"classificationMethod",void 0),(0,l._)([(0,a.Cb)({json:{write:!0}})],h.prototype,"normalizationField",void 0),(0,l._)([(0,a.Cb)({json:{read:p.read,write:p.write}})],h.prototype,"normalizationType",void 0),(0,l._)([(0,a.Cb)({value:null,json:{write:!0}})],h.prototype,"standardDeviationInterval",null),(0,l._)([(0,a.Cb)({value:null,json:{write:!0}})],h.prototype,"definedInterval",null),(0,l._)([(0,a.Cb)()],h.prototype,"type",void 0),h=(0,l._)([(0,r.j)("esri.rest.support.ClassBreaksDefinition")],h);const v=h},51905:function(n,e,t){t.d(e,{k:function(){return a}});const l=t(32718).Z.getLogger("esri.rest.support.generateRendererUtils");function i(n,e){return Number(n.toFixed(e))}function a(n){const{normalizationTotal:e}=n;return{classBreaks:r(n),normalizationTotal:e}}function r(n){const e=n.definition,{classificationMethod:t,breakCount:l,normalizationType:a,definedInterval:r}=e,c=[];let f=n.values;if(0===f.length)return[];f=f.sort(((n,e)=>n-e));const m=f[0],d=f[f.length-1];if("equal-interval"===t)if(f.length>=l){const n=(d-m)/l;let e=m;for(let t=1;t<l;t++){const l=i(m+t*n,6);c.push({minValue:e,maxValue:l,label:o(e,l,a)}),e=l}c.push({minValue:e,maxValue:d,label:o(e,d,a)})}else f.forEach((n=>{c.push({minValue:n,maxValue:n,label:o(n,n,a)})}));else if("natural-breaks"===t){const e=u(f),t=n.valueFrequency||e.valueFrequency,r=s(e.uniqueValues,t,l);let p=m;for(let n=1;n<l;n++)if(e.uniqueValues.length>n){const t=i(e.uniqueValues[r[n]],6);c.push({minValue:p,maxValue:t,label:o(p,t,a)}),p=t}c.push({minValue:p,maxValue:d,label:o(p,d,a)})}else if("quantile"===t)if(f.length>=l&&m!==d){let n=m,e=Math.ceil(f.length/l),t=0;for(let i=1;i<l;i++){let r=e+t-1;r>f.length&&(r=f.length-1),r<0&&(r=0),c.push({minValue:n,maxValue:f[r],label:o(n,f[r],a)}),n=f[r],t+=e,e=Math.ceil((f.length-t)/(l-i))}c.push({minValue:n,maxValue:d,label:o(n,d,a)})}else{let n=-1;for(let e=0;e<f.length;e++){const t=f[e];t!==n&&(n=t,c.push({minValue:n,maxValue:t,label:o(n,t,a)}),n=t)}}else if("standard-deviation"===t){const n=function(n){let e=0;for(let t=0;t<n.length;t++)e+=n[t];return e/=n.length,e}(f),e=function(n,e){let t=0;for(let l=0;l<n.length;l++){const i=n[l];t+=(i-e)*(i-e)}return t/=n.length,Math.sqrt(t)}(f,n);if(0===e)c.push({minValue:f[0],maxValue:f[0],label:o(f[0],f[0],a)});else{const t=function(n,e,t,l,i){let a=Math.max(l-n,e-l)/i/t;return a=a>=1?1:a>=.5?.5:.25,a}(m,d,l,n,e)*e;let r=0,u=m;for(let e=l;e>=1;e--){const l=i(n-(e-.5)*t,6);c.push({minValue:u,maxValue:l,label:o(u,l,a)}),u=l,r++}let s=i(n+.5*t,6);c.push({minValue:u,maxValue:s,label:o(u,s,a)}),u=s,r++;for(let e=1;e<=l;e++)s=r===2*l?d:i(n+(e+.5)*t,6),c.push({minValue:u,maxValue:s,label:o(u,s,a)}),u=s,r++}}else if("defined-interval"===t){if(!r)return c;const n=f[0],e=f[f.length-1],t=Math.ceil((e-n)/r);let l=n;for(let u=1;u<t;u++){const e=i(n+u*r,6);c.push({minValue:l,maxValue:e,label:o(l,e,a)}),l=e}c.push({minValue:l,maxValue:e,label:o(l,e,a)})}return c}function o(n,e,t){let l=null;return l=n===e?t&&"percent-of-total"===t?n+"%":n.toString():t&&"percent-of-total"===t?n+"% - "+e+"%":n+" - "+e,l}function u(n){const e=[],t=[];let l=Number.MIN_VALUE,i=1,a=-1;for(let r=0;r<n.length;r++){const o=n[r];o===l?(i++,t[a]=i):null!==o&&(e.push(o),l=o,i=1,t.push(i),a++)}return{uniqueValues:e,valueFrequency:t}}function s(n,e,t){const l=n.length,i=[];t>l&&(t=l);for(let r=0;r<t;r++)i.push(Math.round(r*l/t-1));i.push(l-1);let a=c(i,n,e,t);return function(n,e,t,l,i,a){let r=0,o=0,u=0,s=0,c=!0;for(let m=0;m<2&&c;m++){0===m&&(c=!1);for(let m=0;m<a-1;m++)for(;t[m+1]+1!==t[m+2];){t[m+1]=t[m+1]+1;const a=f(m,t,l,i);u=a.sbMean,r=a.sbSdcm;const d=f(m+1,t,l,i);if(s=d.sbMean,o=d.sbSdcm,!(r+o<e[m]+e[m+1])){t[m+1]=t[m+1]-1;break}e[m]=r,e[m+1]=o,n[m]=u,n[m+1]=s,c=!0}for(let m=a-1;m>0;m--)for(;t[m]!==t[m-1]+1;){t[m]=t[m]-1;const a=f(m-1,t,l,i);u=a.sbMean,r=a.sbSdcm;const d=f(m,t,l,i);if(s=d.sbMean,o=d.sbSdcm,!(r+o<e[m-1]+e[m])){t[m]=t[m]+1;break}e[m-1]=r,e[m]=o,n[m-1]=u,n[m]=s,c=!0}}return c}(a.mean,a.sdcm,i,n,e,t)&&(a=c(i,n,e,t)),i}function c(n,e,t,l){let i=[],a=[],r=[],o=0;const u=[],s=[];for(let p=0;p<l;p++){const l=f(p,n,e,t);u.push(l.sbMean),s.push(l.sbSdcm),o+=s[p]}let c,m=o,d=!0;for(;d||o<m;){d=!1,i=[];for(let e=0;e<l;e++)i.push(n[e]);for(let t=0;t<l;t++)for(let i=n[t]+1;i<=n[t+1];i++)if(c=e[i],t>0&&i!==n[t+1]&&Math.abs(c-u[t])>Math.abs(c-u[t-1]))n[t]=i;else if(t<l-1&&n[t]!==i-1&&Math.abs(c-u[t])>Math.abs(c-u[t+1])){n[t+1]=i-1;break}m=o,o=0,a=[],r=[];for(let i=0;i<l;i++){a.push(u[i]),r.push(s[i]);const l=f(i,n,e,t);u[i]=l.sbMean,s[i]=l.sbSdcm,o+=s[i]}}if(o>m){for(let e=0;e<l;e++)n[e]=i[e],u[e]=a[e],s[e]=r[e];o=m}return{mean:u,sdcm:s}}function f(n,e,t,i){let a=0,r=0;for(let l=e[n]+1;l<=e[n+1];l++){const n=i[l];a+=t[l]*n,r+=n}r<=0&&l.warn("Exception in Natural Breaks calculation");const o=a/r;let u=0;for(let l=e[n]+1;l<=e[n+1];l++)u+=i[l]*(t[l]-o)**2;return{sbMean:o,sbSdcm:u}}},71486:function(n,e,t){t.d(e,{DL:function(){return k},F_:function(){return x},G2:function(){return M},H0:function(){return h},Lq:function(){return g},Qm:function(){return T},S5:function(){return p},XL:function(){return b},eT:function(){return z},fk:function(){return C},i5:function(){return v},oF:function(){return I},wk:function(){return d}});var l=t(76551),i=t(51905);const a="<Null>",r="equal-interval",o=1,u=5,s=10,c=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,f=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),m=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function d(n){return null==n||"string"==typeof n&&!n?a:n}function p(n){const e=null!=n.normalizationField||null!=n.normalizationType,t=null!=n.minValue||null!=n.maxValue,l=!!n.sqlExpression&&n.supportsSQLExpression;return!e&&!t&&!l}function h(n){const e=n.returnDistinct?[...new Set(n.values)]:n.values,t=e.filter((n=>null!=n)).length,l={count:t};return n.supportsNullCount&&(l.nullcount=e.length-t),n.percentileParams&&(l.median=b(e,n.percentileParams)),l}function v(n){const{values:e,useSampleStdDev:t,supportsNullCount:l}=n;let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,r=null,o=null,u=null,s=null,c=0;const f=null==n.minValue?-1/0:n.minValue,m=null==n.maxValue?1/0:n.maxValue;for(const p of e)Number.isFinite(p)?p>=f&&p<=m&&(r+=p,i=Math.min(i,p),a=Math.max(a,p),c++):"string"==typeof p&&c++;if(c&&null!=r){o=r/c;let n=0;for(const t of e)Number.isFinite(t)&&t>=f&&t<=m&&(n+=(t-o)**2);s=t?c>1?n/(c-1):0:c>0?n/c:0,u=Math.sqrt(s)}else i=null,a=null;const d={avg:o,count:c,max:a,min:i,stddev:u,sum:r,variance:s};return l&&(d.nullcount=e.length-c),n.percentileParams&&(d.median=b(e,n.percentileParams)),d}function b(n,e){const{fieldType:t,value:l,orderBy:i,isDiscrete:a}=e,r=g(t,"desc"===i);if(0===(n=[...n].filter((n=>null!=n)).sort(((n,e)=>r(n,e)))).length)return null;if(l<=0)return n[0];if(l>=1)return n[n.length-1];const o=(n.length-1)*l,u=Math.floor(o),s=u+1,c=o%1,f=n[u],m=n[s];return s>=n.length||a||"string"==typeof f||"string"==typeof m?f:f*(1-c)+m*c}function g(n,e){const t=e?1:-1,l=function(n){return n?(n,e)=>e-n:(n,e)=>n-e}(e),i=y(e);if(!n||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...f].includes(n))return(n,e)=>"number"==typeof n&&"number"==typeof e?l(n,e):"string"==typeof n&&"string"==typeof e?i(n,e):t;if("esriFieldTypeDate"===n)return(n,e)=>{const i=new Date(n).getTime(),a=new Date(e).getTime();return isNaN(i)||isNaN(a)?t:l(i,a)};if(f.has(n))return(n,e)=>l(n,e);if("esriFieldTypeString"===n)return(n,e)=>i(n,e);if("esriFieldTypeGUID"===n||"esriFieldTypeGlobalID"===n){const n=y(e);return(e,t)=>n(V(e),V(t))}return e?(n,e)=>1:(n,e)=>-1}function y(n){return n?(n,e)=>{var t,l;return(n=null===(t=n)||void 0===t?void 0:t.toUpperCase())>(e=null===(l=e)||void 0===l?void 0:l.toUpperCase())?-1:n<e?1:0}:(n,e)=>{var t,l;return(n=null===(t=n)||void 0===t?void 0:t.toUpperCase())<(e=null===(l=e)||void 0===l?void 0:l.toUpperCase())?-1:n>e?1:0}}function V(n){return n.substr(24,12)+n.substr(19,4)+n.substr(16,2)+n.substr(14,2)+n.substr(11,2)+n.substr(9,2)+n.substr(6,2)+n.substr(4,2)+n.substr(2,2)+n.substr(0,2)}function x(n,e){let t;for(t in n)m.includes(t)&&(Number.isFinite(n[t])||(n[t]=null));return e?(["avg","stddev","variance"].forEach((e=>{null!=n[e]&&(n[e]=Math.ceil(n[e]))})),n):n}function z(n){const e={};for(let t of n)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==e[t]?e[t]={count:1,data:t}:e[t].count++;return{count:e}}function F(n){return"coded-value"!==(null===n||void 0===n?void 0:n.type)?[]:n.codedValues.map((n=>n.code))}function T(n,e,t,l){const i=n.count,a=[];if(t&&e){const n=[],t=F(e[0]);for(const i of t)if(e[1]){const t=F(e[1]);for(const a of t)if(e[2]){const t=F(e[2]);for(const e of t)n.push("".concat(d(i)).concat(l).concat(d(a)).concat(l).concat(d(e)))}else n.push("".concat(d(i)).concat(l).concat(d(a)))}else n.push(i);for(const e of n)i.hasOwnProperty(e)||(i[e]={data:e,count:0})}for(const r in i){const n=i[r];a.push({value:n.data,count:n.count,label:n.label})}return{uniqueValueInfos:a}}function C(n,e,t,l){let i=null;switch(e){case"log":0!==n&&(i=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(i=n/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(i=n/t);break;case"natural-log":n>0&&(i=Math.log(n));break;case"square-root":n>0&&(i=n**.5)}return i}function M(n,e){const t=D({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||u});return n=function(n,e,t){var l,i;return e=null!==(l=e)&&void 0!==l?l:-1/0,t=null!==(i=t)&&void 0!==i?i:1/0,n.filter((n=>Number.isFinite(n)&&n>=e&&n<=t))}(n,e.minValue,e.maxValue),(0,i.k)({definition:t,values:n,normalizationTotal:e.normalizationTotal})}function D(n){const e=n.field,t=n.classificationMethod||r,i=n.normalizationType,a=n.normalizationField,u=new l.Z;return u.classificationField=e,u.breakCount=n.breakCount,u.classificationMethod=t,u.standardDeviationInterval="standard-deviation"===t?n.standardDeviationInterval||o:void 0,u.normalizationType=i,u.normalizationField="field"===i?a:void 0,u}function k(n,e){let t=n.classBreaks;const l=t.length,i=t[0].minValue,a=t[l-1].maxValue,r="standard-deviation"===e,o=c;return t=t.map((n=>{const e=n.label,t={minValue:n.minValue,maxValue:n.maxValue,label:e};if(r&&e){const n=e.match(o).map((n=>+n.trim()));2===n.length?(t.minStdDev=n[0],t.maxStdDev=n[1],n[0]<0&&n[1]>0&&(t.hasAvg=!0)):1===n.length&&(e.includes("<")?(t.minStdDev=null,t.maxStdDev=n[0]):e.includes(">")&&(t.minStdDev=n[0],t.maxStdDev=null))}return t})),{minValue:i,maxValue:a,classBreakInfos:t,normalizationTotal:n.normalizationTotal}}function I(n,e){const{min:t,max:l,intervals:i}=function(n,e){const{field:t,classificationMethod:l,standardDeviationInterval:i,normalizationType:a,normalizationField:r,normalizationTotal:o,minValue:u,maxValue:c}=e,f=e.numBins||s;let m=null,d=null,h=null;if(l&&"equal-interval"!==l||a){const{classBreaks:e}=M(n,{field:t,normalizationType:a,normalizationField:r,normalizationTotal:o,classificationMethod:l,standardDeviationInterval:i,minValue:u,maxValue:c,numClasses:f});m=e[0].minValue,d=e[e.length-1].maxValue,h=e.map((n=>[n.minValue,n.maxValue]))}else{if(null!=u&&null!=c)m=u,d=c;else{const e=v({values:n,minValue:u,maxValue:c,useSampleStdDev:!a,supportsNullCount:p({normalizationType:a,normalizationField:r,minValue:u,maxValue:c})});m=e.min,d=e.max}h=function(n,e,t){const l=(e-n)/t,i=[];let a,r=n;for(let o=1;o<=t;o++)a=r+l,a=Number(a.toFixed(16)),i.push([r,o===t?e:a]),r=a;return i}(m,d,f)}return{min:m,max:d,intervals:h}}(n,e),a=i.map(((n,e)=>({minValue:i[e][0],maxValue:i[e][1],count:0})));for(const r of n)if(null!=r&&r>=t&&r<=l){const n=w(i,r);n>-1&&a[n].count++}return{bins:a,minValue:t,maxValue:l,normalizationTotal:e.normalizationTotal}}function w(n,e){let t=-1;for(let l=n.length-1;l>=0;l--)if(e>=n[l][0]){t=l;break}return t}}}]);
//# sourceMappingURL=1383.dd17f9cd.chunk.js.map