"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[64466],{64466:(t,e,n)=>{n.r(e),n.d(e,{Solution:()=>u});var r=n(55913),o=n(92775),i=n(14601);class u extends r.J0{constructor(t){super(t),this.locations=[],this.colors=[],this.names=[],this.shape=void 0}initPost(){this.zoom(3);const t=document.createElement("INPUT");this.hostDiv.appendChild(t),t.style.position="absolute",t.setAttribute("type","file"),t.onchange=t=>{const e=t.target.files[0],n=new FileReader;n.onload=t=>{const e=t.target.result,n=new Uint8Array(e);o.bA(n).then((t=>t.read().then((t=>{if(t.done)return;this.shape={features:[t.value],type:"FeatureCollection"};const e=i.b(this.shape);this.center(e.geometry.coordinates[0],e.geometry.coordinates[1]),this.start()})))).catch((t=>console.error(t)))},n.readAsArrayBuffer(e)};this.importAsJSON("https://raw.githubusercontent.com/NamjuLee/data/master/shape/cb_2018_us_county_5m/cb_2018_us_county_5m.shp")}async importAsJSON(t){const e=await o.ij(t);this.shape=e,console.log(e),this.start()}render(t){if(this.shape)for(let e=0;e<this.shape.features.length;++e){const n=this.shape.features[e];"Polygon"===n.geometry.type&&a(t,n.geometry,this.toScreen)}}}const a=function(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#f00";for(let o=0;o<e.coordinates.length;++o){const i=e.coordinates[o];let u=n(i[0][0],i[0][1]);t.beginPath(),t.moveTo(u[0],u[1]);for(let e=1;e<i.length;++e)u=n(i[e][0],i[e][1]),t.lineTo(u[0],u[1]);t.closePath(),t.strokeStyle=r,t.stroke()}}},92775:(t,e,n)=>{function r(t){return new o(t instanceof Uint8Array?t:new Uint8Array(t))}function o(t){this._array=t}function i(t){return fetch(t).then((function(t){return t.body&&t.body.getReader?t.body.getReader():t.arrayBuffer().then(r)}))}function u(t){return new Promise((function(e,n){var o=new XMLHttpRequest;o.responseType="arraybuffer",o.onload=function(){e(r(o.response))},o.onerror=n,o.ontimeout=n,o.open("GET",t,!0),o.send()}))}function a(t){return("function"===typeof fetch?i:u)(t)}function s(t){return"function"===typeof t.read?t:t.getReader()}n.d(e,{bA:()=>k,ij:()=>E}),o.prototype.read=function(){var t=this._array;return this._array=null,Promise.resolve(t?{done:!1,value:t}:{done:!0,value:void 0})},o.prototype.cancel=function(){return this._array=null,Promise.resolve()};const c=new Uint8Array(0);function l(t,e){if(!t.length)return e;if(!e.length)return t;var n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}function f(t){return"function"===typeof t.slice?t:new h("function"===typeof t.read?t:t.getReader())}function h(t){this._source=t,this._array=c,this._index=0}function d(t){return!(t=t.trim())||isNaN(t=+t)?null:t}h.prototype.read=function(){var t=this,e=t._array.subarray(t._index);return t._source.read().then((function(n){return t._array=c,t._index=0,n.done?e.length>0?{done:!1,value:e}:{done:!0,value:void 0}:{done:!1,value:l(e,n.value)}}))},h.prototype.slice=function(t){if((t|=0)<0)throw new Error("invalid length");var e=this,n=this._array.length-this._index;if(this._index+t<=this._array.length)return Promise.resolve(this._array.subarray(this._index,this._index+=t));var r=new Uint8Array(t);return r.set(this._array.subarray(this._index)),function o(){return e._source.read().then((function(i){return i.done?(e._array=c,e._index=0,n>0?r.subarray(0,n):null):n+i.value.length>=t?(e._array=i.value,e._index=t-n,r.set(i.value.subarray(0,t-n),n),r):(r.set(i.value,n),n+=i.value.length,o())}))}()},h.prototype.cancel=function(){return this._source.cancel()};var y={B:d,C:function(t){return t.trim()||null},D:function(t){return new Date(+t.substring(0,4),t.substring(4,6)-1,+t.substring(6,8))},F:d,L:function(t){return!/^[nf]$/i.test(t)&&(!!/^[yt]$/i.test(t)||null)},M:d,N:d};function g(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function p(t,e){return(t=f(t)).slice(32).then((function(n){var r=g(n);return t.slice(r.getUint16(8,!0)-32).then((function(n){return new v(t,e,r,g(n))}))}))}function v(t,e,n,r){this._source=t,this._decode=e.decode.bind(e),this._recordLength=n.getUint16(10,!0),this._fields=[];for(var o=0;13!==r.getUint8(o);o+=32){for(var i=0;i<11&&0!==r.getUint8(o+i);++i);this._fields.push({name:this._decode(new Uint8Array(r.buffer,r.byteOffset+o,i)),type:String.fromCharCode(r.getUint8(o+11)),length:r.getUint8(o+16)})}}var _=v.prototype;function b(t){var e,n=40,r=t.getInt32(36,!0),o=new Array(r);for(e=0;e<r;++e,n+=16)o[e]=[t.getFloat64(n,!0),t.getFloat64(n+8,!0)];return{type:"MultiPoint",coordinates:o}}function m(t){return{type:"Point",coordinates:[t.getFloat64(4,!0),t.getFloat64(12,!0)]}}function w(t){var e,n=44,r=t.getInt32(36,!0),o=t.getInt32(40,!0),i=new Array(r),u=new Array(o),a=[],s=[];for(e=0;e<r;++e,n+=4)i[e]=t.getInt32(n,!0);for(e=0;e<o;++e,n+=16)u[e]=[t.getFloat64(n,!0),t.getFloat64(n+8,!0)];return i.forEach((function(t,e){var n=u.slice(t,i[e+1]);!function(t){if((e=t.length)<4)return!1;var e,n=0,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];for(;++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r>=0}(n)?s.push(n):a.push([n])})),s.forEach((function(t){a.some((function(e){if(function(t,e){var n,r=-1,o=e.length;for(;++r<o;)if(n=A(t,e[r]))return n>0;return!1}(e[0],t))return e.push(t),!0}))||a.push([t])})),1===a.length?{type:"Polygon",coordinates:a[0]}:{type:"MultiPolygon",coordinates:a}}function A(t,e){for(var n=e[0],r=e[1],o=-1,i=0,u=t.length,a=u-1;i<u;a=i++){var s=t[i],c=s[0],l=s[1],f=t[a],h=f[0],d=f[1];if(x(s,f,e))return 0;l>r!==d>r&&n<(h-c)*(r-l)/(d-l)+c&&(o=-o)}return o}function x(t,e,n){var r=n[0]-t[0],o=n[1]-t[1];if(0===r&&0===o)return!0;var i=e[0]-t[0],u=e[1]-t[1];if(0===i&&0===u)return!1;var a=(r*i+o*u)/(i*i+u*u);return!(a<0||a>1)&&(0===a||1===a||a*i===r&&a*u===o)}function F(t){var e,n=44,r=t.getInt32(36,!0),o=t.getInt32(40,!0),i=new Array(r),u=new Array(o);for(e=0;e<r;++e,n+=4)i[e]=t.getInt32(n,!0);for(e=0;e<o;++e,n+=16)u[e]=[t.getFloat64(n,!0),t.getFloat64(n+8,!0)];return 1===r?{type:"LineString",coordinates:u}:{type:"MultiLineString",coordinates:i.map((function(t,e){return u.slice(t,i[e+1])}))}}function P(t,e){var n=new Uint8Array(t.length+e.length);return n.set(t,0),n.set(e,t.length),n}_.read=function(){var t=this,e=1;return t._source.slice(t._recordLength).then((function(n){return n&&26!==n[0]?{done:!1,value:t._fields.reduce((function(r,o){return r[o.name]=y[o.type](t._decode(n.subarray(e,e+=o.length))),r}),{})}:{done:!0,value:void 0}}))},_.cancel=function(){return this._source.cancel()};var U={0:function(){return null},1:m,3:F,5:w,8:b,11:m,13:F,15:w,18:b,21:m,23:F,25:w,28:b};function I(t,e){var n=e.getInt32(32,!0);if(!(n in U))throw new Error("unsupported shape type: "+n);this._source=t,this._type=n,this._index=0,this._parse=U[n],this.bbox=[e.getFloat64(36,!0),e.getFloat64(44,!0),e.getFloat64(52,!0),e.getFloat64(60,!0)]}var L=I.prototype;function S(){}function N(t,e){this._shp=t,this._dbf=e,this.bbox=t.bbox}L.read=function(){var t=this;return++t._index,t._source.slice(12).then((function(e){if(null==e)return{done:!0,value:void 0};var n=g(e);function r(){return t._source.slice(4).then((function(i){return null==i?{done:!0,value:void 0}:(n=g(e=P(e.slice(4),i))).getInt32(0,!1)!==t._index?r():o()}))}function o(){var o=2*n.getInt32(4,!1)-4,i=n.getInt32(8,!0);return o<0||i&&i!==t._type?r():t._source.slice(o).then((function(n){return{done:!1,value:i?t._parse(g(P(e.slice(8),n))):null}}))}return o()}))},L.cancel=function(){return this._source.cancel()};var C=N.prototype;function k(t,e,n){return"string"===typeof e?(/\.dbf$/.test(e)||(e+=".dbf"),e=a(e)):e instanceof ArrayBuffer||e instanceof Uint8Array?e=r(e):null!=e&&(e=s(e)),"string"===typeof t?(/\.shp$/.test(t)||(t+=".shp"),void 0===e&&(e=a(t.substring(0,t.length-4)+".dbf").catch((function(){}))),t=a(t)):t=t instanceof ArrayBuffer||t instanceof Uint8Array?r(t):s(t),Promise.all([t,e]).then((function(t){var e=t[0],r=t[1],o="windows-1252";return n&&null!=n.encoding&&(o=n.encoding),function(t,e,n){return Promise.all([(r=t,(r=f(r)).slice(100).then((function(t){return new I(r,g(t))}))),e&&p(e,n)]).then((function(t){return new N(t[0],t[1])}));var r}(e,r,r&&new TextDecoder(o))}))}function E(t,e,n){return k(t,e,n).then((function(t){var e=[],n={type:"FeatureCollection",features:e,bbox:t.bbox};return t.read().then((function r(o){return o.done?n:(e.push(o.value),t.read().then(r))}))}))}C.read=function(){var t=this;return Promise.all([t._dbf?t._dbf.read():{value:{}},t._shp.read()]).then((function(t){var e=t[0],n=t[1];return n.done?n:{done:!1,value:{type:"Feature",properties:e.value,geometry:n.value}}}))},C.cancel=function(){return Promise.all([this._dbf&&this._dbf.cancel(),this._shp.cancel()]).then(S)}},98332:(t,e,n)=>{n.d(e,{V:()=>o});var r=n(78860);function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null!=t.bbox&&!0!==e.recompute)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return(0,r.pZ)(t,(t=>{n[0]>t[0]&&(n[0]=t[0]),n[1]>t[1]&&(n[1]=t[1]),n[2]<t[0]&&(n[2]=t[0]),n[3]<t[1]&&(n[3]=t[1])})),n}},14601:(t,e,n)=>{n.d(e,{b:()=>i});var r=n(98332),o=n(5800);function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=(0,r.V)(t),i=(n[0]+n[2])/2,u=(n[1]+n[3])/2;return(0,o.xm)([i,u],e.properties,e)}}}]);
//# sourceMappingURL=64466.d07a599e.chunk.js.map