"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[81370],{81370:(t,e,n)=>{n.r(e),n.d(e,{Solution:()=>i});var r=n(92775);class i{constructor(t){this.divHost=void 0,this.divLog=void 0,this.divHost=document.getElementById(t),this.divHost.style.display="flex",this.divHost.style.alignItems="center";const e=document.createElement("div");e.style.marginLeft="auto",e.style.marginRight="auto",e.style.width="60%",e.style.height="60%",this.divLog=e,this.divHost.appendChild(e);this.importAsJSON("https://raw.githubusercontent.com/NamjuLee/data/master/shape/cb_2018_us_county_5m/cb_2018_us_county_5m.shp")}async processShapefileData(t){const e=await this.importingShape(t);e?console.log({shapefileData:e}):console.debug("empty shapefile")}async importingShape(t){try{const e=await r.bA(t),n=[];let i;for(;(i=await e.read())&&!i.done;)n.push(i.value);return n}catch(e){return console.error(e),null}}async importAsJSON(t){const e=await r.ij(t),n=JSON.stringify(e);o(n,"shape.json")}destroy(){try{for(;this.divHost&&this.divHost.lastElementChild;){const t=this.divHost.lastElementChild;this.divHost.removeChild(t)}}catch(t){console.error("Error removing child elements:",t)}}}const o=function(t,e){var n=new Blob([t],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/json;charset=utf-8;"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.setAttribute("download",e),i.click()}},92775:(t,e,n)=>{function r(t){return new i(t instanceof Uint8Array?t:new Uint8Array(t))}function i(t){this._array=t}function o(t){return fetch(t).then((function(t){return t.body&&t.body.getReader?t.body.getReader():t.arrayBuffer().then(r)}))}function u(t){return new Promise((function(e,n){var i=new XMLHttpRequest;i.responseType="arraybuffer",i.onload=function(){e(r(i.response))},i.onerror=n,i.ontimeout=n,i.open("GET",t,!0),i.send()}))}function a(t){return("function"===typeof fetch?o:u)(t)}function s(t){return"function"===typeof t.read?t:t.getReader()}n.d(e,{bA:()=>H,ij:()=>N}),i.prototype.read=function(){var t=this._array;return this._array=null,Promise.resolve(t?{done:!1,value:t}:{done:!0,value:void 0})},i.prototype.cancel=function(){return this._array=null,Promise.resolve()};const c=new Uint8Array(0);function l(t,e){if(!t.length)return e;if(!e.length)return t;var n=new Uint8Array(t.length+e.length);return n.set(t),n.set(e,t.length),n}function f(t){return"function"===typeof t.slice?t:new h("function"===typeof t.read?t:t.getReader())}function h(t){this._source=t,this._array=c,this._index=0}function d(t){return!(t=t.trim())||isNaN(t=+t)?null:t}h.prototype.read=function(){var t=this,e=t._array.subarray(t._index);return t._source.read().then((function(n){return t._array=c,t._index=0,n.done?e.length>0?{done:!1,value:e}:{done:!0,value:void 0}:{done:!1,value:l(e,n.value)}}))},h.prototype.slice=function(t){if((t|=0)<0)throw new Error("invalid length");var e=this,n=this._array.length-this._index;if(this._index+t<=this._array.length)return Promise.resolve(this._array.subarray(this._index,this._index+=t));var r=new Uint8Array(t);return r.set(this._array.subarray(this._index)),function i(){return e._source.read().then((function(o){return o.done?(e._array=c,e._index=0,n>0?r.subarray(0,n):null):n+o.value.length>=t?(e._array=o.value,e._index=t-n,r.set(o.value.subarray(0,t-n),n),r):(r.set(o.value,n),n+=o.value.length,i())}))}()},h.prototype.cancel=function(){return this._source.cancel()};var y={B:d,C:function(t){return t.trim()||null},D:function(t){return new Date(+t.substring(0,4),t.substring(4,6)-1,+t.substring(6,8))},F:d,L:function(t){return!/^[nf]$/i.test(t)&&(!!/^[yt]$/i.test(t)||null)},M:d,N:d};function g(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function v(t,e){return(t=f(t)).slice(32).then((function(n){var r=g(n);return t.slice(r.getUint16(8,!0)-32).then((function(n){return new p(t,e,r,g(n))}))}))}function p(t,e,n,r){this._source=t,this._decode=e.decode.bind(e),this._recordLength=n.getUint16(10,!0),this._fields=[];for(var i=0;13!==r.getUint8(i);i+=32){for(var o=0;o<11&&0!==r.getUint8(i+o);++o);this._fields.push({name:this._decode(new Uint8Array(r.buffer,r.byteOffset+i,o)),type:String.fromCharCode(r.getUint8(i+11)),length:r.getUint8(i+16)})}}var _=p.prototype;function b(t){var e,n=40,r=t.getInt32(36,!0),i=new Array(r);for(e=0;e<r;++e,n+=16)i[e]=[t.getFloat64(n,!0),t.getFloat64(n+8,!0)];return{type:"MultiPoint",coordinates:i}}function m(t){return{type:"Point",coordinates:[t.getFloat64(4,!0),t.getFloat64(12,!0)]}}function w(t){var e,n=44,r=t.getInt32(36,!0),i=t.getInt32(40,!0),o=new Array(r),u=new Array(i),a=[],s=[];for(e=0;e<r;++e,n+=4)o[e]=t.getInt32(n,!0);for(e=0;e<i;++e,n+=16)u[e]=[t.getFloat64(n,!0),t.getFloat64(n+8,!0)];return o.forEach((function(t,e){var n=u.slice(t,o[e+1]);!function(t){if((e=t.length)<4)return!1;var e,n=0,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];for(;++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r>=0}(n)?s.push(n):a.push([n])})),s.forEach((function(t){a.some((function(e){if(function(t,e){var n,r=-1,i=e.length;for(;++r<i;)if(n=x(t,e[r]))return n>0;return!1}(e[0],t))return e.push(t),!0}))||a.push([t])})),1===a.length?{type:"Polygon",coordinates:a[0]}:{type:"MultiPolygon",coordinates:a}}function x(t,e){for(var n=e[0],r=e[1],i=-1,o=0,u=t.length,a=u-1;o<u;a=o++){var s=t[o],c=s[0],l=s[1],f=t[a],h=f[0],d=f[1];if(A(s,f,e))return 0;l>r!==d>r&&n<(h-c)*(r-l)/(d-l)+c&&(i=-i)}return i}function A(t,e,n){var r=n[0]-t[0],i=n[1]-t[1];if(0===r&&0===i)return!0;var o=e[0]-t[0],u=e[1]-t[1];if(0===o&&0===u)return!1;var a=(r*o+i*u)/(o*o+u*u);return!(a<0||a>1)&&(0===a||1===a||a*o===r&&a*u===i)}function U(t){var e,n=44,r=t.getInt32(36,!0),i=t.getInt32(40,!0),o=new Array(r),u=new Array(i);for(e=0;e<r;++e,n+=4)o[e]=t.getInt32(n,!0);for(e=0;e<i;++e,n+=16)u[e]=[t.getFloat64(n,!0),t.getFloat64(n+8,!0)];return 1===r?{type:"LineString",coordinates:u}:{type:"MultiLineString",coordinates:o.map((function(t,e){return u.slice(t,o[e+1])}))}}function F(t,e){var n=new Uint8Array(t.length+e.length);return n.set(t,0),n.set(e,t.length),n}_.read=function(){var t=this,e=1;return t._source.slice(t._recordLength).then((function(n){return n&&26!==n[0]?{done:!1,value:t._fields.reduce((function(r,i){return r[i.name]=y[i.type](t._decode(n.subarray(e,e+=i.length))),r}),{})}:{done:!0,value:void 0}}))},_.cancel=function(){return this._source.cancel()};var L={0:function(){return null},1:m,3:U,5:w,8:b,11:m,13:U,15:w,18:b,21:m,23:U,25:w,28:b};function I(t,e){var n=e.getInt32(32,!0);if(!(n in L))throw new Error("unsupported shape type: "+n);this._source=t,this._type=n,this._index=0,this._parse=L[n],this.bbox=[e.getFloat64(36,!0),e.getFloat64(44,!0),e.getFloat64(52,!0),e.getFloat64(60,!0)]}var P=I.prototype;function S(){}function E(t,e){this._shp=t,this._dbf=e,this.bbox=t.bbox}P.read=function(){var t=this;return++t._index,t._source.slice(12).then((function(e){if(null==e)return{done:!0,value:void 0};var n=g(e);function r(){return t._source.slice(4).then((function(o){return null==o?{done:!0,value:void 0}:(n=g(e=F(e.slice(4),o))).getInt32(0,!1)!==t._index?r():i()}))}function i(){var i=2*n.getInt32(4,!1)-4,o=n.getInt32(8,!0);return i<0||o&&o!==t._type?r():t._source.slice(i).then((function(n){return{done:!1,value:o?t._parse(g(F(e.slice(8),n))):null}}))}return i()}))},P.cancel=function(){return this._source.cancel()};var C=E.prototype;function H(t,e,n){return"string"===typeof e?(/\.dbf$/.test(e)||(e+=".dbf"),e=a(e)):e instanceof ArrayBuffer||e instanceof Uint8Array?e=r(e):null!=e&&(e=s(e)),"string"===typeof t?(/\.shp$/.test(t)||(t+=".shp"),void 0===e&&(e=a(t.substring(0,t.length-4)+".dbf").catch((function(){}))),t=a(t)):t=t instanceof ArrayBuffer||t instanceof Uint8Array?r(t):s(t),Promise.all([t,e]).then((function(t){var e=t[0],r=t[1],i="windows-1252";return n&&null!=n.encoding&&(i=n.encoding),function(t,e,n){return Promise.all([(r=t,(r=f(r)).slice(100).then((function(t){return new I(r,g(t))}))),e&&v(e,n)]).then((function(t){return new E(t[0],t[1])}));var r}(e,r,r&&new TextDecoder(i))}))}function N(t,e,n){return H(t,e,n).then((function(t){var e=[],n={type:"FeatureCollection",features:e,bbox:t.bbox};return t.read().then((function r(i){return i.done?n:(e.push(i.value),t.read().then(r))}))}))}C.read=function(){var t=this;return Promise.all([t._dbf?t._dbf.read():{value:{}},t._shp.read()]).then((function(t){var e=t[0],n=t[1];return n.done?n:{done:!1,value:{type:"Feature",properties:e.value,geometry:n.value}}}))},C.cancel=function(){return Promise.all([this._dbf&&this._dbf.cancel(),this._shp.cancel()]).then(S)}}}]);
//# sourceMappingURL=81370.c19d68ac.chunk.js.map