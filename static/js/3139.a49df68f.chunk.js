"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[3139,3388],{19610:function(e,t,a){a.d(t,{T:function(){return r}});const r={BingMapsLayer:async()=>(await a.e(165).then(a.bind(a,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([a.e(5731),a.e(9973),a.e(6146),a.e(5675),a.e(6505)]).then(a.bind(a,66505))).default,CSVLayer:async()=>(await a.e(8435).then(a.bind(a,98435))).default,DimensionLayer:async()=>(await a.e(7406).then(a.bind(a,47406))).default,ElevationLayer:async()=>(await a.e(9512).then(a.bind(a,59512))).default,FeatureLayer:async()=>(await Promise.resolve().then(a.bind(a,64326))).default,GroupLayer:async()=>(await a.e(5069).then(a.bind(a,65069))).default,GeoRSSLayer:async()=>(await a.e(54).then(a.bind(a,70054))).default,GeoJSONLayer:async()=>(await a.e(5064).then(a.bind(a,5064))).default,ImageryLayer:async()=>(await Promise.all([a.e(7314),a.e(5345),a.e(9672),a.e(132),a.e(4205)]).then(a.bind(a,74205))).default,ImageryTileLayer:async()=>(await Promise.all([a.e(7314),a.e(394),a.e(5345),a.e(9672),a.e(132),a.e(6626),a.e(3938)]).then(a.bind(a,83938))).default,IntegratedMeshLayer:async()=>(await Promise.all([a.e(5731),a.e(6251)]).then(a.bind(a,56251))).default,KMLLayer:async()=>(await a.e(3838).then(a.bind(a,13838))).default,LineOfSightLayer:async()=>(await a.e(4910).then(a.bind(a,44910))).default,MapImageLayer:async()=>(await Promise.all([a.e(9668),a.e(9583)]).then(a.bind(a,19583))).default,MapNotesLayer:async()=>(await a.e(9622).then(a.bind(a,69622))).default,OGCFeatureLayer:async()=>(await Promise.all([a.e(7213),a.e(6741)]).then(a.bind(a,98701))).default,OpenStreetMapLayer:async()=>(await a.e(1656).then(a.bind(a,31656))).default,OrientedImageryLayer:async()=>(await a.e(5440).then(a.bind(a,15440))).default,PointCloudLayer:async()=>(await Promise.all([a.e(5731),a.e(9532)]).then(a.bind(a,9532))).default,RouteLayer:async()=>(await Promise.all([a.e(729),a.e(8257)]).then(a.bind(a,88257))).default,SceneLayer:async()=>(await Promise.all([a.e(5731),a.e(9973),a.e(6146),a.e(5675),a.e(5838)]).then(a.bind(a,5838))).default,StreamLayer:async()=>(await a.e(2668).then(a.bind(a,2668))).default,SubtypeGroupLayer:async()=>(await a.e(255).then(a.bind(a,50255))).default,TileLayer:async()=>(await Promise.all([a.e(9668),a.e(2977)]).then(a.bind(a,42977))).default,UnknownLayer:async()=>(await a.e(4917).then(a.bind(a,74917))).default,UnsupportedLayer:async()=>(await a.e(8101).then(a.bind(a,88101))).default,VectorTileLayer:async()=>(await Promise.all([a.e(969),a.e(7735)]).then(a.bind(a,47409))).default,VoxelLayer:async()=>(await Promise.all([a.e(5731),a.e(1080)]).then(a.bind(a,11080))).default,WebTileLayer:async()=>(await a.e(9200).then(a.bind(a,89200))).default,WFSLayer:async()=>(await Promise.all([a.e(2622),a.e(8566)]).then(a.bind(a,38566))).default,WMSLayer:async()=>(await a.e(4227).then(a.bind(a,84227))).default,WMTSLayer:async()=>(await a.e(6951).then(a.bind(a,46951))).default}},32698:function(e,t,a){a.d(t,{Y:function(){return l},h:function(){return i}});var r=a(35995),n=a(70032);function i(e){return{origin:"portal-item",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function l(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,r.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},33388:function(e,t,a){a.r(t),a.d(t,{getFirstLayerOrTableId:function(){return h},getNumLayersAndTables:function(){return v},getSubtypeGroupLayerIds:function(){return b},load:function(){return d},preprocessFSItemData:function(){return L}});var r=a(10064),n=a(10323),i=a(25899),l=a(70032),o=a(98995),u=a(32698),s=a(73117),c=a(21371),y=a(41226);async function d(e,t){const a=e.instance.portalItem;if(a&&a.id)return await a.load(t),function(e){const t=e.instance.portalItem;if(!e.supportedTypes.includes(t.type))throw new r.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,t){const a=e.instance,n=a.portalItem,{url:i,title:l}=n,o=(0,u.h)(n);if("group"===a.type)return a.read({title:l},o),function(e,t){var a;let n;const i=e.portalItem.type,l=t.layerModuleTypeMap,o=null!==(a=(0,s._$)(e.portalItem,"Oriented Imagery Layer"))&&void 0!==a&&a;switch(i){case"Feature Service":n=o?l.OrientedImageryLayer:l.FeatureLayer;break;case"Stream Service":n=l.StreamLayer;break;case"Scene Service":n=l.SceneLayer;break;case"Feature Collection":n=l.FeatureLayer;break;default:throw new r.Z("portal:unsupported-item-type-as-group","The item type '".concat(i,"' is not supported as a 'IGroupLayer'"))}let u;return n().then((e=>(u=e,m(t)))).then((async t=>{let a=()=>u;if("Feature Service"===i){if(b(t=await L(t,e.portalItem.url)).length){const e=l.SubtypeGroupLayer,t=await e();a=e=>"SubtypeGroupLayer"===e.layerType?t:u}return p(e,a,t)}return v(t)>0?p(e,a,t):function(e,t){return e.portalItem.url?(0,y.b)(e.portalItem.url).then((a=>{var r,n;function i(e){return{id:e.id,name:e.name}}a&&p(e,t,{layers:null===(r=a.layers)||void 0===r?void 0:r.map(i),tables:null===(n=a.tables)||void 0===n?void 0:n.map(i)})})):Promise.resolve()}(e,a)}))}(a,e);i&&a.read({url:i},o);const d=await m(e,t);return d&&a.read(d,o),a.resourceReferences={portalItem:n,paths:o.readResourcePaths},"subtype-group"!==a.type&&a.read({title:l},o),(0,c.y)(a,o)}(e,t)}function p(e,t,a){let l=a.layers||[];const u=a.tables||[];if("Feature Collection"===e.portalItem.type&&(l.forEach((e=>{var t;"Table"===(null===e||void 0===e||null===(t=e.layerDefinition)||void 0===t?void 0:t.type)&&u.push(e)})),l=l.filter((e=>{var t;return"Table"!==(null===e||void 0===e||null===(t=e.layerDefinition)||void 0===t?void 0:t.type)}))),"coverage"in a){const t=function(e){const{coverage:t}=e;if(!t)return null;const a=new URL(t);if(t.toLowerCase().includes("item.html")){const e=a.searchParams.get("id"),t=a.origin;return n.Z.fromPortalItem({portalItem:new o.default({id:e,url:t})})}if((0,i.B5)(t))return n.Z.fromArcGISServerUrl({url:t});throw new r.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(a);e.add(t)}l.reverse().forEach((r=>{const n=f(e,t(r),a,r);e.add(n)})),u.reverse().forEach((r=>{const n=f(e,t(r),a,r);e.tables.add(n)}))}function f(e,t,a,r){const n=new t({portalItem:e.portalItem.clone(),layerId:r.id});if("subtype-group"!==n.type&&(n.sublayerTitleMode="service-name"),"Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||l.Z.getDefault()};n.read(r,t);const i=a.showLegend;null!=i&&n.read({showLegend:i},t)}return n}function m(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const a=e.instance;return a.portalItem.fetchData("json",t).catch((()=>null)).then((e=>{if(function(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}(a)){let t,r=!0;if(e&&v(e)>0){if(null==a.layerId){const t=b(e);a.layerId="subtype-group"===a.type?null===t||void 0===t?void 0:t[0]:h(e)}t=function(e,t){var a,r;const{layerId:n}=t,i=(null===(a=e.layers)||void 0===a?void 0:a.find((e=>e.id===n)))||(null===(r=e.tables)||void 0===r?void 0:r.find((e=>e.id===n)));return i&&function(e,t){return!("feature"===t.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===t.type&&!("layerType"in e))}(i,t)?i:null}(e,a),t&&(1===v(e)&&(r=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))}return r&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function L(e,t){var a,r;if(null==(null===(a=e)||void 0===a?void 0:a.layers)||null==(null===(r=e)||void 0===r?void 0:r.tables)){const a=await(0,y.b)(t);(e=e||{}).layers=e.layers||(null===a||void 0===a?void 0:a.layers),e.tables=e.tables||(null===a||void 0===a?void 0:a.tables)}return e}function h(e){const t=e.layers;if(t&&t.length)return t[0].id;const a=e.tables;return a&&a.length?a[0].id:null}function v(e){var t,a,r,n;return(null!==(t=null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.length)&&void 0!==t?t:0)+(null!==(r=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==r?r:0)}function b(e){var t;const a=[];return null!==e&&void 0!==e&&null!==(t=e.layers)&&void 0!==t&&t.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&a.push(e.id)})),a}},73117:function(e,t,a){a.d(t,{$o:function(){return s},Kz:function(){return c},_$:function(){return o},ck:function(){return u},qj:function(){return l}});var r=a(52587),n=a(78952),i=a(81753);function l(e,t){if(!o(e,t)){const a=e.typeKeywords;a?a.push(t):e.typeKeywords=[t]}}function o(e,t){var a;return!(null===(a=e.typeKeywords)||void 0===a||!a.includes(t))}function u(e,t){const a=e.typeKeywords;if(a){const e=a.indexOf(t);e>-1&&a.splice(e,1)}}async function s(e){const t=e.clone().normalize();let a;if(t.length>1)for(const r of t)a?r.width>a.width&&(a=r):a=r;else a=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,i.Sx)(e);const a=n.Z.WGS84;return await(0,r.iQ)(t,a),(0,r.iV)(e,a)}(a)}const c={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"}},43139:function(e,t,a){a.r(t),a.d(t,{fromItem:function(){return s},selectLayerClassPath:function(){return c}});var r=a(10064),n=a(19610),i=a(98995),l=a(33388),o=a(73117),u=a(41226);function s(e){return!e.portalItem||e.portalItem instanceof i.default||(e={...e,portalItem:new i.default(e.portalItem)}),function(e){return e.load().then(c).then(y)}(e.portalItem).then((t=>{const a={portalItem:e.portalItem,...t.properties};return new(0,t.constructor)(a)}))}function c(e){switch(e.type){case"Map Service":return function(e){return(0,u.b)(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}));case"Feature Service":return function(e){return(0,o._$)(e,"Oriented Imagery Layer")?function(e){return e.load().then((()=>e.fetchData())).then((e=>e.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:e}))}(e):d(e).then((e=>{if("object"==typeof e){const t={};return null!=e.id&&(t.layerId=e.id),{className:e.className||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){await e.load();const t=(0,o._$)(e,"Map Notes"),a=(0,o._$)(e,"Markup");if(t||a)return{className:"MapNotesLayer"};if((0,o._$)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,l.getNumLayersAndTables)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return d(e).then((t=>{if("object"==typeof t){const a={};let r;if(null!=t.id?(a.layerId=t.id,r="".concat(e.url,"/layers/").concat(t.id)):r=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const t={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const a of Object.keys(t))if(e.typeKeywords.includes(a))return{className:t[a]}}return(0,u.b)(r).then((e=>{let t="SceneLayer";const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&r[e.layerType]&&(t=r[e.layerType]),{className:t,properties:a}}))}return!1===t?(0,u.b)(e.url).then((e=>"Voxel"===(null===e||void 0===e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"})):{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var t,a,r,n,i;await e.load();const l=null!==(t=null===(a=e.typeKeywords)||void 0===a?void 0:a.map((e=>e.toLowerCase())))&&void 0!==t?t:[];if(l.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(l.includes("tiled imagery"))return{className:"ImageryTileLayer"};const o=null===(r=await e.fetchData())||void 0===r?void 0:r.layerType;if("ArcGISTiledImageServiceLayer"===o)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===o)return{className:"ImageryLayer"};const s=await(0,u.b)(e.url),c=null===(n=s.cacheType)||void 0===n?void 0:n.toLowerCase(),y=null===(i=s.capabilities)||void 0===i?void 0:i.toLowerCase().includes("tilesonly");return"map"===c||y?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new r.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function y(e){return(0,n.T[e.className])().then((t=>({constructor:t,properties:e.properties})))}function d(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async t=>{if("Feature Service"===e.type){const a=p(await(0,l.preprocessFSItemData)(t,e.url));if("object"==typeof a){const e=(0,l.getSubtypeGroupLayerIds)(t);a.className=e.includes(a.id)?"SubtypeGroupLayer":"FeatureLayer"}return a}return(0,l.getNumLayersAndTables)(t)>0?p(t):(0,u.b)(e.url).then(p)}))}function p(e){return 1===(0,l.getNumLayersAndTables)(e)&&{id:(0,l.getFirstLayerOrTableId)(e)}}},41226:function(e,t,a){a.d(t,{b:function(){return n}});var r=a(76200);async function n(e){const{data:t}=await(0,r.default)(e,{responseType:"json",query:{f:"json"}});return t}}}]);
//# sourceMappingURL=3139.a49df68f.chunk.js.map