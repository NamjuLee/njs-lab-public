"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[1657],{51657:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(76200),s=n(14921),r=n(10064),o=n(32718),a=n(92026),u=n(66978),l=n(77981),c=n(92975),d=n(83406),p=n(97114),y=n(19995),f=n(14e3),h=n(47615),g=n(63543),m=n(68808),_=n(52410),b=n(85249),I=n(80031);const F={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class w{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[];await this._checkProjection(e.spatialReference);let i=null;e.url&&(i=await this._fetch(null===t||void 0===t?void 0:t.signal));const s=(0,h.my)(i,{geometryType:e.geometryType}),o=e.fields||s.fields||[],a=null!=e.hasZ?e.hasZ:s.hasZ,u=s.geometryType;let l=e.objectIdField||s.objectIdFieldName||"__OBJECTID";const d=e.spatialReference||c.Zn;let y=e.timeInfo;o===s.fields&&s.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});let m=new _.Z(o).get(l);m?("esriFieldTypeString"!==m.type&&(m.type="esriFieldTypeOID"),m.editable=!1,m.nullable=!1,l=m.name):(m={alias:l,name:l,type:"string"===s.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(m));const w={};for(const c of o){if(null==c.name&&(c.name=c.alias),null==c.alias&&(c.alias=c.name),!c.name)throw new r.Z("geojson-layer:invalid-field-name","field name is missing",{field:c});if(!b.v.jsonValues.includes(c.type))throw new r.Z("geojson-layer:invalid-field-type",'invalid type for field "'.concat(c.name,'"'),{field:c});if(c.name!==m.name){const e=(0,I.os)(c);void 0!==e&&(w[c.name]=e)}}this._fieldsIndex=new _.Z(o);const E=this._fieldsIndex.requiredFields.indexOf(m);if(E>-1&&this._fieldsIndex.requiredFields.splice(E,1),y){if(y.startTimeField){const e=this._fieldsIndex.get(y.startTimeField);e?(y.startTimeField=e.name,e.type="esriFieldTypeDate"):y.startTimeField=null}if(y.endTimeField){const e=this._fieldsIndex.get(y.endTimeField);e?(y.endTimeField=e.name,e.type="esriFieldTypeDate"):y.endTimeField=null}if(y.trackIdField){const e=this._fieldsIndex.get(y.trackIdField);e?y.trackIdField=e.name:(y.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))}y.startTimeField||y.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:y}}),y=null)}const v=u?(0,g.bU)(u):null,S={warnings:n,featureErrors:[],layerDefinition:{...F,drawingInfo:v,templates:(0,g.Hq)(w),extent:null,geometryType:u,objectIdField:l,fields:o,hasZ:!!a,timeInfo:y}};this._queryEngine=new f.q({fields:o,geometryType:u,hasM:!1,hasZ:a,objectIdField:l,spatialReference:d,timeInfo:y,featureStore:new p.Z({geometryType:u,hasM:!1,hasZ:a}),cacheSpatialQueries:!0}),this._createDefaultAttributes=(0,g.Dm)(w,l);const T=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,T);const q=this._normalizeFeatures(T,S.warnings,S.featureErrors);if(this._queryEngine.featureStore.addMany(q),S.layerDefinition.extent=this._queryEngine.fullExtent,S.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;S.layerDefinition.timeInfo.timeExtent=[e,t]}return S}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,m.b)(t,n),(0,y._W)(e.adds,t),(0,y._W)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._loadOptions.customParameters=e,null!==(t=this._snapshotTask)&&void 0!==t&&t.abort(),this._snapshotTask=(0,s.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),(0,u.D_)(e)||o.Z.getLogger("esri.layers.GeoJSONLayer").error(new r.Z("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:n,objectIdField:i}=this._queryEngine,s=(0,h.lG)(e,{geometryType:t,hasZ:n,objectIdField:i});if(!(0,c.fS)(this._queryEngine.spatialReference,c.Zn))for(const r of s)(0,a.pC)(r.geometry)&&(r.geometry=(0,d.GH)((0,y.iV)((0,d.di)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),c.Zn,this._queryEngine.spatialReference)));return s}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,s=(await(0,i.default)(t,{responseType:"json",query:{...n},signal:e})).data;return await(0,h.O3)(s),s}_normalizeFeatures(e,t,n){const{objectIdField:i}=this._queryEngine,s=[];for(const r of e){const e=this._createDefaultAttributes(),o=(0,m.O0)(this._fieldsIndex,e,r.attributes,!0,t);o?null===n||void 0===n||n.push(o):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[i],s.push(r))}return s}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),n&&n.length&&this._applyUpdateEdits(s,n),i&&i.length){for(const e of i)s.deleteResults.push((0,m.d1)(e));this._queryEngine.featureStore.removeManyById(i)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:s,hasZ:r,objectIdField:o,spatialReference:u,featureStore:c}=this._queryEngine,p=[];for(const d of t){if(d.geometry&&i!==(0,l.Ji)(d.geometry)){n.push((0,m.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=(0,m.O0)(this._fieldsIndex,t,d.attributes);if(s)n.push(s);else{if(this._assignObjectId(t,d.attributes),d.attributes=t,null!=d.uid){const t=d.attributes[o];e.uidToObjectId[d.uid]=t}if((0,a.pC)(d.geometry)){var f;const e=null!==(f=d.geometry.spatialReference)&&void 0!==f?f:u;d.geometry=(0,y.iV)((0,m.og)(d.geometry,e),e,u)}p.push(d),n.push((0,m.d1)(d.attributes[o]))}}c.addMany((0,d.Yn)([],p,i,r,s,o))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:i,hasM:s,hasZ:r,objectIdField:o,spatialReference:u,featureStore:c}=this._queryEngine;for(const f of t){const{attributes:e,geometry:t}=f,h=e&&e[o];if(null==h){n.push((0,m.av)("Identifier field ".concat(o," missing")));continue}if(!c.has(h)){n.push((0,m.av)("Feature with object id ".concat(h," missing")));continue}const g=(0,d.EI)(c.getFeature(h),i,r,s);if((0,a.pC)(t)){var p;if(i!==(0,l.Ji)(t)){n.push((0,m.av)("Incorrect geometry type."));continue}const e=null!==(p=t.spatialReference)&&void 0!==p?p:u;g.geometry=(0,y.iV)((0,m.og)(t,e),e,u)}if(e){const t=(0,m.O0)(this._fieldsIndex,g.attributes,e);if(t){n.push(t);continue}}c.add((0,d.XA)(g,i,r,s,o)),n.push((0,m.d1)(h))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const s of t)s.objectId&&(i=Math.max(i,s.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._queryEngine.objectIdField;e[i]=n&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await(0,y._W)(c.Zn,e)}catch{throw new r.Z("geojson-layer","Projection not supported")}}}},47615:function(e,t,n){n.d(t,{O3:function(){return F},lG:function(){return E},my:function(){return w},q9:function(){return u}});var i=n(10064),s=n(3182),r=n(80457),o=n(80031);const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return a[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function d(e){for(const t of e)if(t.length>2)return!0;return!1}function p(e){let t=0;for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t+=i[0]*s[1]-s[0]*i[1]}return t<=0}function y(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function f(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return m(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const i of t.coordinates)m(e,i,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const i of t.coordinates){h(e,i[0],n);for(let t=1;t<i.length;t++)g(e,i[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const i=t.coordinates;h(e,i[0],n);for(let s=1;s<i.length;s++)g(e,i[s],n);return e}(e,t,n)}}function h(e,t,n){const i=y(t);!function(e){return!p(e)}(i)?m(e,i,n):_(e,i,n)}function g(e,t,n){const i=y(t);!function(e){return p(e)}(i)?m(e,i,n):_(e,i,n)}function m(e,t,n){for(const i of t)b(e,i,n);e.lengths.push(t.length)}function _(e,t,n){for(let i=t.length-1;i>=0;i--)b(e,t[i],n);e.lengths.push(t.length)}function b(e,t,n){const[i,s,r]=t;e.coords.push(i,s),n.hasZ&&e.coords.push(r||0)}function I(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function F(e){if(!e)throw new i.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,s=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!s.test(n))throw new i.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function w(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=[],s=new Set,r=new Set;let a,p=!1,y=null,f=!1,{geometryType:h=null}=n,g=!1;for(const _ of l(e)){const{geometry:e,properties:t,id:n}=_;if((!e||(h||(h=u(e.type)),u(e.type)===h))&&(p||(p=d(c(e))),f||(f=null!=n,f&&(a=typeof n,y=Object.keys(t).filter((e=>t[e]===n)))),f&&null!=n&&(y.length>1?y=y.filter((e=>t[e]===n)):1===y.length&&(y=t[y[0]]===n?y:[])),!g&&t)){let e=!0;for(const n in t){if(s.has(n))continue;const a=t[n];if(null==a){e=!1,r.add(n);continue}const u=I(a);"unknown"!==u?(r.delete(n),s.add(n),i.push({name:(0,o.q6)(n),alias:n,type:u})):r.add(n)}g=e}}const m=(0,o.q6)(1===(null===(t=y)||void 0===t?void 0:t.length)&&y[0]||null);if(m)for(const u of i)if(u.name===m&&(0,o.H7)(u)){u.type="esriFieldTypeOID";break}return{fields:i,geometryType:h,hasZ:p,objectIdFieldName:m,objectIdFieldType:a,unknownFields:Array.from(r)}}function E(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:i}=t;for(const a of e){var o;const{geometry:e,properties:l,id:c}=a;if(e&&u(e.type)!==n)continue;const d=l||{};let p=null!==(o=d[i])&&void 0!==o?o:null;i&&null!=c&&!d[i]&&(d[i]=p=c);const y=new s.u_(e?f(new r.Z,e,t):null,d,null,p);yield y}}()}(l(e),t))}},63543:function(e,t,n){n.d(t,{Dm:function(){return c},Hq:function(){return d},MS:function(){return p},bU:function(){return a}});var i=n(93169),s=n(84652),r=n(60480),o=n(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function c(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this.".concat(t," = null;");for(const t in e)n+="this".concat(u.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const i=new Function("\n      return class AttributesClass$".concat(l++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new i}catch(n){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},68808:function(e,t,n){n.d(t,{O0:function(){return p},av:function(){return u},b:function(){return g},d1:function(){return c},og:function(){return h}});var i=n(92026),s=n(92975),r=n(80031);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new a(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new l(e)}const d=new Set;function p(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4?arguments[4]:void 0;d.clear();for(const a in n){const o=e.get(a);if(!o)continue;const l=n[a],c=y(o,l);if(c!==l&&s&&s.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:l,sanitizedValue:c}}),d.add(o.name),o&&(i||o.editable)){const e=(0,r.Qc)(o,c);if(e)return u((0,r.vP)(e,o,c));t[o.name]=c}}for(const r of null!==(o=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==o?o:[]){var o;if(!d.has(r.name))return u('missing required field "'.concat(r.name,'"'))}return null}function y(e,t){let n=t;return"string"==typeof t&&(0,r.H7)(e)?n=parseFloat(t):null!=t&&(0,r.qN)(e)&&"string"!=typeof t&&(n=String(t)),(0,r.Pz)(n)}let f;function h(e,t){if(!e||!(0,s.JY)(t))return e;if("rings"in e||"paths"in e){if((0,i.Wi)(f))throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function g(e,t){!(0,s.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return(0,i.Wi)(f)&&(f=await Promise.all([n.e(9058),n.e(3645)]).then(n.bind(n,50309))),f}()}}}]);
//# sourceMappingURL=1657.46470498.chunk.js.map