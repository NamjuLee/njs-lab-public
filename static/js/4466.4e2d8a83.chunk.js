"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[4466],{64466:(e,t,n)=>{n.r(t),n.d(t,{Solution:()=>u});var r=n(55913),o=n(92775),i=n(16484);class u extends r.J0{constructor(e){super(e),this.locations=[],this.colors=[],this.names=[],this.shape=void 0,this.zoom(3);const t=document.createElement("INPUT");this.hostDiv.appendChild(t),t.style.position="absolute",t.setAttribute("type","file"),t.onchange=e=>{const t=e.target.files[0],n=new FileReader;console.log(t),n.onload=e=>{const t=e.target.result,n=new Uint8Array(t);o.bA(n).then((e=>e.read().then((e=>{if(e.done)return;this.shape={features:[e.value],type:"FeatureCollection"};const t=i.beQ(this.shape);this.center(t.geometry.coordinates[0],t.geometry.coordinates[1]),this.start()})))).catch((e=>console.error(e.stack)))},n.readAsArrayBuffer(t)};this.importAsJSON("https://raw.githubusercontent.com/NamjuLee/data/master/shape/cb_2018_us_county_5m/cb_2018_us_county_5m.shp")}async importAsJSON(e){const t=await o.ij(e);this.shape=t,console.log(t),this.start()}render(e){if(this.shape)for(let t=0;t<this.shape.features.length;++t){const n=this.shape.features[t];"Polygon"===n.geometry.type&&a(e,n.geometry,this.toScreen)}}}const a=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#f00";for(let o=0;o<t.coordinates.length;++o){const i=t.coordinates[o];let u=n(i[0][0],i[0][1]);e.beginPath(),e.moveTo(u[0],u[1]);for(let t=1;t<i.length;++t)u=n(i[t][0],i[t][1]),e.lineTo(u[0],u[1]);e.closePath(),e.strokeStyle=r,e.stroke()}}},92775:(e,t,n)=>{function r(e){return new o(e instanceof Uint8Array?e:new Uint8Array(e))}function o(e){this._array=e}function i(e){return fetch(e).then((function(e){return e.body&&e.body.getReader?e.body.getReader():e.arrayBuffer().then(r)}))}function u(e){return new Promise((function(t,n){var o=new XMLHttpRequest;o.responseType="arraybuffer",o.onload=function(){t(r(o.response))},o.onerror=n,o.ontimeout=n,o.open("GET",e,!0),o.send()}))}function a(e){return("function"===typeof fetch?i:u)(e)}function s(e){return"function"===typeof e.read?e:e.getReader()}n.d(t,{bA:()=>k,ij:()=>E}),o.prototype.read=function(){var e=this._array;return this._array=null,Promise.resolve(e?{done:!1,value:e}:{done:!0,value:void 0})},o.prototype.cancel=function(){return this._array=null,Promise.resolve()};const c=new Uint8Array(0);function l(e,t){if(!e.length)return t;if(!t.length)return e;var n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}function f(e){return"function"===typeof e.slice?e:new h("function"===typeof e.read?e:e.getReader())}function h(e){this._source=e,this._array=c,this._index=0}function d(e){return!(e=e.trim())||isNaN(e=+e)?null:e}h.prototype.read=function(){var e=this,t=e._array.subarray(e._index);return e._source.read().then((function(n){return e._array=c,e._index=0,n.done?t.length>0?{done:!1,value:t}:{done:!0,value:void 0}:{done:!1,value:l(t,n.value)}}))},h.prototype.slice=function(e){if((e|=0)<0)throw new Error("invalid length");var t=this,n=this._array.length-this._index;if(this._index+e<=this._array.length)return Promise.resolve(this._array.subarray(this._index,this._index+=e));var r=new Uint8Array(e);return r.set(this._array.subarray(this._index)),function o(){return t._source.read().then((function(i){return i.done?(t._array=c,t._index=0,n>0?r.subarray(0,n):null):n+i.value.length>=e?(t._array=i.value,t._index=e-n,r.set(i.value.subarray(0,e-n),n),r):(r.set(i.value,n),n+=i.value.length,o())}))}()},h.prototype.cancel=function(){return this._source.cancel()};var y={B:d,C:function(e){return e.trim()||null},D:function(e){return new Date(+e.substring(0,4),e.substring(4,6)-1,+e.substring(6,8))},F:d,L:function(e){return!/^[nf]$/i.test(e)&&(!!/^[yt]$/i.test(e)||null)},M:d,N:d};function g(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function p(e,t){return(e=f(e)).slice(32).then((function(n){var r=g(n);return e.slice(r.getUint16(8,!0)-32).then((function(n){return new v(e,t,r,g(n))}))}))}function v(e,t,n,r){this._source=e,this._decode=t.decode.bind(t),this._recordLength=n.getUint16(10,!0),this._fields=[];for(var o=0;13!==r.getUint8(o);o+=32){for(var i=0;i<11&&0!==r.getUint8(o+i);++i);this._fields.push({name:this._decode(new Uint8Array(r.buffer,r.byteOffset+o,i)),type:String.fromCharCode(r.getUint8(o+11)),length:r.getUint8(o+16)})}}var _=v.prototype;function b(e){var t,n=40,r=e.getInt32(36,!0),o=new Array(r);for(t=0;t<r;++t,n+=16)o[t]=[e.getFloat64(n,!0),e.getFloat64(n+8,!0)];return{type:"MultiPoint",coordinates:o}}function w(e){return{type:"Point",coordinates:[e.getFloat64(4,!0),e.getFloat64(12,!0)]}}function m(e){var t,n=44,r=e.getInt32(36,!0),o=e.getInt32(40,!0),i=new Array(r),u=new Array(o),a=[],s=[];for(t=0;t<r;++t,n+=4)i[t]=e.getInt32(n,!0);for(t=0;t<o;++t,n+=16)u[t]=[e.getFloat64(n,!0),e.getFloat64(n+8,!0)];return i.forEach((function(e,t){var n=u.slice(e,i[t+1]);!function(e){if((t=e.length)<4)return!1;var t,n=0,r=e[t-1][1]*e[0][0]-e[t-1][0]*e[0][1];for(;++n<t;)r+=e[n-1][1]*e[n][0]-e[n-1][0]*e[n][1];return r>=0}(n)?s.push(n):a.push([n])})),s.forEach((function(e){a.some((function(t){if(function(e,t){var n,r=-1,o=t.length;for(;++r<o;)if(n=A(e,t[r]))return n>0;return!1}(t[0],e))return t.push(e),!0}))||a.push([e])})),1===a.length?{type:"Polygon",coordinates:a[0]}:{type:"MultiPolygon",coordinates:a}}function A(e,t){for(var n=t[0],r=t[1],o=-1,i=0,u=e.length,a=u-1;i<u;a=i++){var s=e[i],c=s[0],l=s[1],f=e[a],h=f[0],d=f[1];if(x(s,f,t))return 0;l>r!==d>r&&n<(h-c)*(r-l)/(d-l)+c&&(o=-o)}return o}function x(e,t,n){var r=n[0]-e[0],o=n[1]-e[1];if(0===r&&0===o)return!0;var i=t[0]-e[0],u=t[1]-e[1];if(0===i&&0===u)return!1;var a=(r*i+o*u)/(i*i+u*u);return!(a<0||a>1)&&(0===a||1===a||a*i===r&&a*u===o)}function F(e){var t,n=44,r=e.getInt32(36,!0),o=e.getInt32(40,!0),i=new Array(r),u=new Array(o);for(t=0;t<r;++t,n+=4)i[t]=e.getInt32(n,!0);for(t=0;t<o;++t,n+=16)u[t]=[e.getFloat64(n,!0),e.getFloat64(n+8,!0)];return 1===r?{type:"LineString",coordinates:u}:{type:"MultiLineString",coordinates:i.map((function(e,t){return u.slice(e,i[t+1])}))}}function U(e,t){var n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n}_.read=function(){var e=this,t=1;return e._source.slice(e._recordLength).then((function(n){return n&&26!==n[0]?{done:!1,value:e._fields.reduce((function(r,o){return r[o.name]=y[o.type](e._decode(n.subarray(t,t+=o.length))),r}),{})}:{done:!0,value:void 0}}))},_.cancel=function(){return this._source.cancel()};var P={0:function(){return null},1:w,3:F,5:m,8:b,11:w,13:F,15:m,18:b,21:w,23:F,25:m,28:b};function I(e,t){var n=t.getInt32(32,!0);if(!(n in P))throw new Error("unsupported shape type: "+n);this._source=e,this._type=n,this._index=0,this._parse=P[n],this.bbox=[t.getFloat64(36,!0),t.getFloat64(44,!0),t.getFloat64(52,!0),t.getFloat64(60,!0)]}var L=I.prototype;function S(){}function N(e,t){this._shp=e,this._dbf=t,this.bbox=e.bbox}L.read=function(){var e=this;return++e._index,e._source.slice(12).then((function(t){if(null==t)return{done:!0,value:void 0};var n=g(t);function r(){return e._source.slice(4).then((function(i){return null==i?{done:!0,value:void 0}:(n=g(t=U(t.slice(4),i))).getInt32(0,!1)!==e._index?r():o()}))}function o(){var o=2*n.getInt32(4,!1)-4,i=n.getInt32(8,!0);return o<0||i&&i!==e._type?r():e._source.slice(o).then((function(n){return{done:!1,value:i?e._parse(g(U(t.slice(8),n))):null}}))}return o()}))},L.cancel=function(){return this._source.cancel()};var C=N.prototype;function k(e,t,n){return"string"===typeof t?(/\.dbf$/.test(t)||(t+=".dbf"),t=a(t)):t instanceof ArrayBuffer||t instanceof Uint8Array?t=r(t):null!=t&&(t=s(t)),"string"===typeof e?(/\.shp$/.test(e)||(e+=".shp"),void 0===t&&(t=a(e.substring(0,e.length-4)+".dbf").catch((function(){}))),e=a(e)):e=e instanceof ArrayBuffer||e instanceof Uint8Array?r(e):s(e),Promise.all([e,t]).then((function(e){var t=e[0],r=e[1],o="windows-1252";return n&&null!=n.encoding&&(o=n.encoding),function(e,t,n){return Promise.all([(r=e,(r=f(r)).slice(100).then((function(e){return new I(r,g(e))}))),t&&p(t,n)]).then((function(e){return new N(e[0],e[1])}));var r}(t,r,r&&new TextDecoder(o))}))}function E(e,t,n){return k(e,t,n).then((function(e){var t=[],n={type:"FeatureCollection",features:t,bbox:e.bbox};return e.read().then((function r(o){return o.done?n:(t.push(o.value),e.read().then(r))}))}))}C.read=function(){var e=this;return Promise.all([e._dbf?e._dbf.read():{value:{}},e._shp.read()]).then((function(e){var t=e[0],n=e[1];return n.done?n:{done:!1,value:{type:"Feature",properties:t.value,geometry:n.value}}}))},C.cancel=function(){return Promise.all([this._dbf&&this._dbf.cancel(),this._shp.cancel()]).then(S)}}}]);
//# sourceMappingURL=4466.4e2d8a83.chunk.js.map