(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[6816],{66816:function(t,e,n){"use strict";n.r(e),n.d(e,{Renderer:function(){return a},Solution:function(){return s},downloadGeoJson:function(){return c}});var o=n(55913);const i=6371008.8;Math.PI;var r=n(36683);n(16484);class s{constructor(t){this.divHost=void 0,this.renderer=void 0,this.divHost=t,this.divHost.style.display="flex",this.divHost.style.alignItems="center";const e=document.createElement("div");e.style.marginLeft="auto",e.style.marginRight="auto",e.style.backgroundColor="#555",e.style.width="1000px",e.style.height="600px",this.divHost.appendChild(e),this.renderer=new a(e)}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class a extends o.bb{constructor(t){super(t),this.canvas.style.position="relative",this.canvas.style.width="100%",this.canvas.style.height="100%",u(),this.start()}render(t){}}const u=()=>{const t={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[102,.5]},properties:{prop0:"value0"}},{type:"Feature",geometry:{type:"LineString",coordinates:[[102,0],[103,1],[104,0],[105,1],[255,0]]},properties:{prop0:"value0",prop1:0}}]};r.valid(t)&&c(t);r.isFeature({type:"feature",geometry:{type:"LineString",coordinates:[[102,0],[103,1],[104,0],[105,1]]},properties:{prop0:"value0",prop1:0}},!0);r.define("Position",(t=>{let e=[];return(t[0]<-180||t[0]>180)&&e.push("the x must be between -180 and 180"),(t[1]<-90||t[1]>90)&&e.push("the y must be between -90 and 90"),e}))},c=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"download";const n=document.createElement("a");n.href="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t)),n.download="".concat(e,".geojson"),n.click()}},36683:function(t,e){const n={};function o(t){return"function"===typeof t}function i(t){return t===Object(t)}function r(t,e){let n=!1;return"string"===typeof e?e=[e]:"[object Array]"===Object.prototype.toString.call(e)?0===e.length&&(n=!0):n=!0,t?e:n}function s(t,e){let i;if(o(n[t])){try{i=n[t](e)}catch(r){i=["Problem with custom definition for "+t+": "+r]}if("string"===typeof result&&(i=[i]),"[object Array]"===Object.prototype.toString.call(i))return i}return[]}e.define=(t,e)=>!(!(t in c)||!o(e))&&(n[t]=e,!0),e.isPosition=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];return Array.isArray(t)?(t.length<=1&&n.push("Position must be at least two elements"),t.forEach(((t,e)=>{"number"!==typeof t&&n.push("Position must only contain numbers. Item "+t+" at index "+e+" is invalid.")}))):n.push("Position must be an array"),n=n.concat(s("Position",t)),r(e,n)},e.isGeoJSONObject=e.valid=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(i(t)){let n=[];if("type"in t){if(a[t.type])return a[t.type](t,e);if(u[t.type])return u[t.type](t,e);n.push('type must be one of: "Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon", "GeometryCollection", "Feature", or "FeatureCollection"')}else n.push('must have a member with the name "type"');return n=n.concat(s("GeoJSONObject",t)),r(e,n)}return r(e,["must be a JSON Object"])},e.isGeometryObject=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i(t))return r(e,["must be a JSON Object"]);let n=[];if("type"in t){if(u[t.type])return u[t.type](t,e);n.push('type must be one of: "Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon" or "GeometryCollection"')}else n.push('must have a member with the name "type"');return n=n.concat(s("GeometryObject",t)),r(e,n)},e.isPoint=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i(t))return r(n,["must be a JSON Object"]);let o=[];if("bbox"in t){const n=e.isBbox(t.bbox,!0);n.length&&(o=o.concat(n))}if("type"in t?"Point"!==t.type&&o.push('type must be "Point"'):o.push('must have a member with the name "type"'),"coordinates"in t){const n=e.isPosition(t.coordinates,!0);n.length&&(o=o.concat(n))}else o.push('must have a member with the name "coordinates"');return o=o.concat(s("Point",t)),r(n,o)},e.isMultiPointCoor=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[];return Array.isArray(t)?t.forEach(((t,n)=>{const i=e.isPosition(t,!0);i.length&&(i[0]="at "+n+": ".concat(i[0]),o=o.concat(i))})):o.push("coordinates must be an array"),r(n,o)},e.isMultiPoint=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i(t))return r(n,["must be a JSON Object"]);let o=[];if("bbox"in t){const n=e.isBbox(t.bbox,!0);n.length&&(o=o.concat(n))}if("type"in t?"MultiPoint"!==t.type&&o.push('type must be "MultiPoint"'):o.push('must have a member with the name "type"'),"coordinates"in t){const n=e.isMultiPointCoor(t.coordinates,!0);n.length&&(o=o.concat(n))}else o.push('must have a member with the name "coordinates"');return o=o.concat(s("MultiPoint",t)),r(n,o)},e.isLineStringCoor=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[];return Array.isArray(t)?t.length>1?t.forEach(((t,n)=>{const i=e.isPosition(t,!0);i.length&&(i[0]="at "+n+": ".concat(i[0]),o=o.concat(i))})):o.push("coordinates must have at least two elements"):o.push("coordinates must be an array"),r(n,o)},e.isLineString=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i(t))return r(n,["must be a JSON Object"]);let o=[];if("bbox"in t){const n=e.isBbox(t.bbox,!0);n.length&&(o=o.concat(n))}if("type"in t?"LineString"!==t.type&&o.push('type must be "LineString"'):o.push('must have a member with the name "type"'),"coordinates"in t){const n=e.isLineStringCoor(t.coordinates,!0);n.length&&(o=o.concat(n))}else o.push('must have a member with the name "coordinates"');return o=o.concat(s("LineString",t)),r(n,o)},e.isMultiLineStringCoor=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[];return Array.isArray(t)?t.forEach(((t,n)=>{const i=e.isLineStringCoor(t,!0);i.length&&(i[0]="at "+n+": ".concat(i[0]),o=o.concat(i))})):o.push("coordinates must be an array"),r(n,o)},e.isMultiLineString=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i(t))return r(n,["must be a JSON Object"]);let o=[];if("bbox"in t){const n=e.isBbox(t.bbox,!0);n.length&&(o=o.concat(n))}if("type"in t?"MultiLineString"!==t.type&&o.push('type must be "MultiLineString"'):o.push('must have a member with the name "type"'),"coordinates"in t){const n=e.isMultiLineStringCoor(t.coordinates,!0);n.length&&(o=o.concat(n))}else o.push('must have a member with the name "coordinates"');return o=o.concat(s("MultiPoint",t)),r(n,o)},e.isPolygonCoor=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[];return Array.isArray(t)?t.forEach(((t,n)=>{const i=function(t,n){let o=[];return Array.isArray(t)?(t.forEach(((t,n)=>{const i=e.isPosition(t,!0);i.length&&(i[0]="at "+n+": ".concat(i[0]),o=o.concat(i))})),t[0].toString()!==t[t.length-1].toString()&&o.push("The first and last positions must be equivalent"),t.length<4&&o.push("coordinates must have at least four positions")):o.push("coordinates must be an array"),r(n,o)}(t,!0);i.length&&(i[0]="at "+n+": ".concat(i[0]),o=o.concat(i))})):o.push("coordinates must be an array"),r(n,o)},e.isPolygon=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i(t))return r(n,["must be a JSON Object"]);let o=[];if("bbox"in t){const n=e.isBbox(t.bbox,!0);n.length&&(o=o.concat(n))}if("type"in t?"Polygon"!==t.type&&o.push('type must be "Polygon"'):o.push('must have a member with the name "type"'),"coordinates"in t){const n=e.isPolygonCoor(t.coordinates,!0);n.length&&(o=o.concat(n))}else o.push('must have a member with the name "coordinates"');return o=o.concat(s("Polygon",t)),r(n,o)},e.isMultiPolygonCoor=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[];return Array.isArray(t)?t.forEach(((t,n)=>{const i=e.isPolygonCoor(t,!0);i.length&&(i[0]="at "+n+": ".concat(i[0]),o=o.concat(i))})):o.push("coordinates must be an array"),r(n,o)},e.isMultiPolygon=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i(t))return r(n,["must be a JSON Object"]);let o=[];if("bbox"in t){const n=e.isBbox(t.bbox,!0);n.length&&(o=o.concat(n))}if("type"in t?"MultiPolygon"!==t.type&&o.push('type must be "MultiPolygon"'):o.push('must have a member with the name "type"'),"coordinates"in t){const n=e.isMultiPolygonCoor(t.coordinates,!0);n.length&&(o=o.concat(n))}else o.push('must have a member with the name "coordinates"');return o=o.concat(s("MultiPolygon",t)),r(n,o)},e.isGeometryCollection=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i(t))return r(n,["must be a JSON Object"]);let o=[];if("bbox"in t){const n=e.isBbox(t.bbox,!0);n.length&&(o=o.concat(n))}return"type"in t?"GeometryCollection"!==t.type&&o.push('type must be "GeometryCollection"'):o.push('must have a member with the name "type"'),"geometries"in t?Array.isArray(t.geometries)?t.geometries.forEach(((t,n)=>{const i=e.isGeometryObject(t,!0);i.length&&(i[0]="at "+n+": ".concat(i[0]),o=o.concat(i))})):o.push('"geometries" must be an array'):o.push('must have a member with the name "geometries"'),o=o.concat(s("GeometryCollection",t)),r(n,o)},e.isFeature=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i(t))return r(n,["must be a JSON Object"]);let o=[];if("bbox"in t){const n=e.isBbox(t.bbox,!0);n.length&&(o=o.concat(n))}if("type"in t?"Feature"!==t.type&&o.push('type must be "Feature"'):o.push('must have a member with the name "type"'),"properties"in t||o.push('must have a member with the name "properties"'),"geometry"in t){if(null!==t.geometry){const n=e.isGeometryObject(t.geometry,!0);n.length&&(o=o.concat(n))}}else o.push('must have a member with the name "geometry"');return o=o.concat(s("Feature",t)),r(n,o)},e.isFeatureCollection=function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i(t))return r(n,["must be a JSON Object"]);let o=[];if("bbox"in t){const n=e.isBbox(t.bbox,!0);n.length&&(o=n)}return"type"in t?"FeatureCollection"!==t.type&&o.push('type must be "FeatureCollection"'):o.push('must have a member with the name "type"'),"features"in t?Array.isArray(t.features)?t.features.forEach(((t,n)=>{const i=e.isFeature(t,!0);i.length&&(i[0]="at "+n+": ".concat(i[0]),o=o.concat(i))})):o.push('"Features" must be an array'):o.push('must have a member with the name "Features"'),o=o.concat(s("FeatureCollection",t)),r(n,o)},e.isBbox=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];return Array.isArray(t)?t.length%2!==0&&n.push("bbox, must be a 2*n array"):n.push("bbox must be an array"),n=n.concat(s("Bbox",t)),r(e,n)};const a={Feature:e.isFeature,FeatureCollection:e.isFeatureCollection},u={Point:e.isPoint,MultiPoint:e.isMultiPoint,LineString:e.isLineString,MultiLineString:e.isMultiLineString,Polygon:e.isPolygon,MultiPolygon:e.isMultiPolygon,GeometryCollection:e.isGeometryCollection},c={Feature:e.isFeature,FeatureCollection:e.isFeatureCollection,Point:e.isPoint,MultiPoint:e.isMultiPoint,LineString:e.isLineString,MultiLineString:e.isMultiLineString,Polygon:e.isPolygon,MultiPolygon:e.isMultiPolygon,GeometryCollection:e.isGeometryCollection,Bbox:e.isBbox,Position:e.isPosition,GeoJSON:e.isGeoJSONObject,GeometryObject:e.isGeometryObject};e.allTypes=c}}]);
//# sourceMappingURL=6816.1ce0f918.chunk.js.map