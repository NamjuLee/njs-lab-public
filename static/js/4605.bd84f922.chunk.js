"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[4605],{58971:function(t,e,n){n.d(e,{G6:function(){return G},Ie:function(){return v},J9:function(){return x},RF:function(){return _},U1:function(){return b},vY:function(){return u},ym:function(){return P}});var r=n(92026),i=n(77981);const s=(t,e,n)=>[e,n],o=(t,e,n)=>[e,n,t[2]],a=(t,e,n)=>[e,n,t[2],t[3]];function u(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:(0,r.pC)(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function l(t,e){let{scale:n,translate:r}=t;return Math.round((e-r[0])/n[0])}function h(t,e){let{scale:n,translate:r}=t;return Math.round((r[1]-e)/n[1])}function c(t,e,n){const r=[];let i,s,o,a;for(let u=0;u<n.length;u++){const c=n[u];u>0?(o=l(t,c[0]),a=h(t,c[1]),o===i&&a===s||(r.push(e(c,o-i,a-s)),i=o,s=a)):(i=l(t,c[0]),s=h(t,c[1]),r.push(e(c,i,s)))}return r.length>0?r:null}function f(t,e){let{scale:n,translate:r}=t;return e*n[0]+r[0]}function p(t,e){let{scale:n,translate:r}=t;return r[1]-e*n[1]}function d(t,e,n){const r=new Array(n.length);if(!n.length)return r;const[i,s]=t.scale;let o=f(t,n[0][0]),a=p(t,n[0][1]);r[0]=e(n[0],o,a);for(let u=1;u<n.length;u++){const t=n[u];o+=t[0]*i,a-=t[1]*s,r[u]=e(t,o,a)}return r}function m(t,e,n){const r=new Array(n.length);for(let i=0;i<n.length;i++)r[i]=d(t,e,n[i]);return r}function y(t,e,n,r,i){var u;return e.points=null!==(u=function(t,e,n,r){return c(t,n?r?a:o:r?o:s,e)}(t,n.points,r,i))&&void 0!==u?u:[],e}function _(t,e,n,r,i){return e.x=l(t,n.x),e.y=h(t,n.y),e!==n&&(r&&(e.z=n.z),i&&(e.m=n.m)),e}function g(t,e,n,r,i){const u=function(t,e,n,r){const i=[],u=n?r?a:o:r?o:s;for(let s=0;s<e.length;s++){const n=c(t,u,e[s]);n&&n.length>=3&&i.push(n)}return i.length?i:null}(t,n.rings,r,i);return u?(e.rings=u,e):null}function C(t,e,n,r,i){const u=function(t,e,n,r){const i=[],u=n?r?a:o:r?o:s;for(let s=0;s<e.length;s++){const n=c(t,u,e[s]);n&&n.length>=2&&i.push(n)}return i.length?i:null}(t,n.paths,r,i);return u?(e.paths=u,e):null}function P(t,e){return t&&e?(0,i.wp)(e)?_(t,{},e,!1,!1):(0,i.l9)(e)?C(t,{},e,!1,!1):(0,i.oU)(e)?g(t,{},e,!1,!1):(0,i.aW)(e)?y(t,{},e,!1,!1):(0,i.YX)(e)?function(t,e,n,r,i){return e.xmin=l(t,n.xmin),e.ymin=h(t,n.ymin),e.xmax=l(t,n.xmax),e.ymax=h(t,n.ymax),e!==n&&(r&&(e.zmin=n.zmin,e.zmax=n.zmax),i&&(e.mmin=n.mmin,e.mmax=n.mmax)),e}(t,{},e,!1,!1):null:null}function x(t,e,n,i,u){return(0,r.pC)(n)&&(e.points=function(t,e,n,r){return d(t,n?r?a:o:r?o:s,e)}(t,n.points,i,u)),e}function b(t,e,n,i,s){return(0,r.Wi)(n)||(e.x=f(t,n.x),e.y=p(t,n.y),e!==n&&(i&&(e.z=n.z),s&&(e.m=n.m))),e}function v(t,e,n,i,u){return(0,r.pC)(n)&&(e.rings=function(t,e,n,r){return m(t,n?r?a:o:r?o:s,e)}(t,n.rings,i,u)),e}function G(t,e,n,i,u){return(0,r.pC)(n)&&(e.paths=function(t,e,n,r){return m(t,n?r?a:o:r?o:s,e)}(t,n.paths,i,u)),e}},44605:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(41644),i=n(92026),s=n(95439),o=n(78952),a=n(93501),u=(n(59896),n(93169),n(41414)),l=n(65156),h=(n(58971),n(27823),n(83040));n(92975);class c{constructor(t,e,n){this.uid=t,this.geometry=e,this.attributes=n,this.visible=!0,this.objectId=null,this.centroid=null}}class f{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}(0,u.Ue)(),(0,l.Ue)();var p=n(83406);function d(t,e){return e}function m(t,e,n,r){switch(n){case 0:return C(t,e+r,0);case 1:return"lowerLeft"===t.originPosition?C(t,e+r,1):function(t,e,n){let{translate:r,scale:i}=t;return r[n]-e*i[n]}(t,e+r,1)}}function y(t,e,n,r){return 2===n?C(t,e,2):m(t,e,n,r)}function _(t,e,n,r){return 2===n?C(t,e,3):m(t,e,n,r)}function g(t,e,n,r){return 3===n?C(t,e,3):y(t,e,n,r)}function C(t,e,n){let{translate:r,scale:i}=t;return r[n]+e*i[n]}class P{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=d,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return new f}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,a.k)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(!(0,i.Wi)(e))for(const n of t.features)e(n.geometry)}createSpatialReference(){return new o.Z}addField(t,e){t.fields.push(h.Z.fromJSON(e));const n=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of n)this[t]=null}}addFeature(t,e){const n=this._options.maxStringAttributeLength?this._options.maxStringAttributeLength:0;if(n>0)for(const r in e.attributes){const t=e.attributes[r];"string"==typeof t&&t.length>n&&(e.attributes[r]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:n,queryGeometryType:r}=e,i=(0,p.$g)(n.clone(),n,!1,!1,this._transform),s=(0,p.di)(i,r,!1,!1);let o=null;switch(r){case"esriGeometryPoint":o="point";break;case"esriGeometryPolygon":o="polygon";break;case"esriGeometryPolyline":o="polyline";break;case"esriGeometryMultipoint":o="multipoint"}s.type=o,t.queryGeometryType=r,t.queryGeometry=s}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,e,n)=>this.addCoordinatePoint(t,e,n),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,n)=>this._addCoordinatePolygon(t,e,n),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,n)=>this._addCoordinatePolyline(t,e,n),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,n)=>this._addCoordinateMultipoint(t,e,n),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:(0,r.Bg)(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new c((0,s.D)(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce(((t,e)=>t+e),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e,n){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,n){switch(e=this._applyTransform(this._transform,e,n,0),n){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let n=0;return e<=1&&(n=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._applyTransform(this._transform,t,e,n)}_addCoordinatePolyline(t,e,n){this._dehydratedAddPointsCoordinate(t.paths,e,n)}_addCoordinatePolygon(t,e,n){this._dehydratedAddPointsCoordinate(t.rings,e,n)}_addCoordinateMultipoint(t,e,n){0===n&&t.points.push([]);const r=this._transformPathLikeValue(e,n);t.points[t.points.length-1].push(r)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,n){0===n&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const r=this._transformPathLikeValue(e,n),i=t[t.length-1];0===n&&i.push(new Float64Array(this._coordinateBuffer.buffer,this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this._vertexDimension)),this._coordinateBuffer[this._coordinateBufferPtr++]=r}_deriveApplyTransform(t){const{hasZ:e,hasM:n}=t;return e&&n?g:e?y:n?_:m}}var x=n(27607);class b{_parseFeatureQuery(t){const e=(0,x.C)(t.buffer,new P(t.options)),n={...e,spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map((t=>t.toJSON())):void 0};return Promise.resolve(n)}}function v(){return new b}}}]);
//# sourceMappingURL=4605.bd84f922.chunk.js.map