"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[43139,33388],{19610:(e,a,t)=>{t.d(a,{T:()=>r});const r={BingMapsLayer:async()=>(await t.e(60165).then(t.bind(t,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(95731),t.e(99973),t.e(76146),t.e(65675),t.e(66505)]).then(t.bind(t,66505))).default,CSVLayer:async()=>(await t.e(98435).then(t.bind(t,98435))).default,DimensionLayer:async()=>(await t.e(47406).then(t.bind(t,47406))).default,ElevationLayer:async()=>(await t.e(59512).then(t.bind(t,59512))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,64326))).default,GroupLayer:async()=>(await t.e(65069).then(t.bind(t,65069))).default,GeoRSSLayer:async()=>(await t.e(70054).then(t.bind(t,70054))).default,GeoJSONLayer:async()=>(await t.e(5064).then(t.bind(t,5064))).default,ImageryLayer:async()=>(await Promise.all([t.e(17314),t.e(35345),t.e(99672),t.e(10132),t.e(74205)]).then(t.bind(t,74205))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(17314),t.e(80394),t.e(35345),t.e(99672),t.e(10132),t.e(56626),t.e(83938)]).then(t.bind(t,83938))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(95731),t.e(56251)]).then(t.bind(t,56251))).default,KMLLayer:async()=>(await t.e(13838).then(t.bind(t,13838))).default,LineOfSightLayer:async()=>(await t.e(44910).then(t.bind(t,44910))).default,MapImageLayer:async()=>(await Promise.all([t.e(59668),t.e(19583)]).then(t.bind(t,19583))).default,MapNotesLayer:async()=>(await t.e(69622).then(t.bind(t,69622))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(67213),t.e(96741)]).then(t.bind(t,98701))).default,OpenStreetMapLayer:async()=>(await t.e(31656).then(t.bind(t,31656))).default,OrientedImageryLayer:async()=>(await t.e(15440).then(t.bind(t,15440))).default,PointCloudLayer:async()=>(await Promise.all([t.e(95731),t.e(9532)]).then(t.bind(t,9532))).default,RouteLayer:async()=>(await Promise.all([t.e(729),t.e(88257)]).then(t.bind(t,88257))).default,SceneLayer:async()=>(await Promise.all([t.e(95731),t.e(99973),t.e(76146),t.e(65675),t.e(5838)]).then(t.bind(t,5838))).default,StreamLayer:async()=>(await t.e(2668).then(t.bind(t,2668))).default,SubtypeGroupLayer:async()=>(await t.e(50255).then(t.bind(t,50255))).default,TileLayer:async()=>(await Promise.all([t.e(59668),t.e(42977)]).then(t.bind(t,42977))).default,UnknownLayer:async()=>(await t.e(74917).then(t.bind(t,74917))).default,UnsupportedLayer:async()=>(await t.e(88101).then(t.bind(t,88101))).default,VectorTileLayer:async()=>(await Promise.all([t.e(30969),t.e(87735)]).then(t.bind(t,47409))).default,VoxelLayer:async()=>(await Promise.all([t.e(95731),t.e(11080)]).then(t.bind(t,11080))).default,WebTileLayer:async()=>(await t.e(89200).then(t.bind(t,89200))).default,WFSLayer:async()=>(await Promise.all([t.e(12622),t.e(38566)]).then(t.bind(t,38566))).default,WMSLayer:async()=>(await t.e(84227).then(t.bind(t,84227))).default,WMTSLayer:async()=>(await t.e(46951).then(t.bind(t,46951))).default}},32698:(e,a,t)=>{t.d(a,{Y:()=>i,h:()=>l});var r=t(35995),n=t(70032);function l(e){return{origin:"portal-item",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,r.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},33388:(e,a,t)=>{t.r(a),t.d(a,{getFirstLayerOrTableId:()=>h,getNumLayersAndTables:()=>v,getSubtypeGroupLayerIds:()=>b,load:()=>d,preprocessFSItemData:()=>L});var r=t(10064),n=t(30651),l=t(25899),i=t(70032),o=t(98995),s=t(32698),u=t(73117),c=t(21371),y=t(41226);async function d(e,a){const t=e.instance.portalItem;if(t&&t.id)return await t.load(a),function(e){const a=e.instance.portalItem;if(!e.supportedTypes.includes(a.type))throw new r.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,a){const t=e.instance,n=t.portalItem,{url:l,title:i}=n,o=(0,s.h)(n);if("group"===t.type)return t.read({title:i},o),function(e,a){var t;let n;const l=e.portalItem.type,i=a.layerModuleTypeMap,o=null!==(t=(0,u._$)(e.portalItem,"Oriented Imagery Layer"))&&void 0!==t&&t;switch(l){case"Feature Service":n=o?i.OrientedImageryLayer:i.FeatureLayer;break;case"Stream Service":n=i.StreamLayer;break;case"Scene Service":n=i.SceneLayer;break;case"Feature Collection":n=i.FeatureLayer;break;default:throw new r.Z("portal:unsupported-item-type-as-group","The item type '".concat(l,"' is not supported as a 'IGroupLayer'"))}let s;return n().then((e=>(s=e,m(a)))).then((async a=>{let t=()=>s;if("Feature Service"===l){if(b(a=await L(a,e.portalItem.url)).length){const e=i.SubtypeGroupLayer,a=await e();t=e=>"SubtypeGroupLayer"===e.layerType?a:s}return p(e,t,a)}return v(a)>0?p(e,t,a):function(e,a){return e.portalItem.url?(0,y.b)(e.portalItem.url).then((t=>{var r,n;function l(e){return{id:e.id,name:e.name}}t&&p(e,a,{layers:null===(r=t.layers)||void 0===r?void 0:r.map(l),tables:null===(n=t.tables)||void 0===n?void 0:n.map(l)})})):Promise.resolve()}(e,t)}))}(t,e);l&&t.read({url:l},o);const d=await m(e,a);return d&&t.read(d,o),t.resourceReferences={portalItem:n,paths:o.readResourcePaths},"subtype-group"!==t.type&&t.read({title:i},o),(0,c.y)(t,o)}(e,a)}function p(e,a,t){let i=t.layers||[];const s=t.tables||[];if("Feature Collection"===e.portalItem.type&&(i.forEach((e=>{var a;"Table"===(null===e||void 0===e||null===(a=e.layerDefinition)||void 0===a?void 0:a.type)&&s.push(e)})),i=i.filter((e=>{var a;return"Table"!==(null===e||void 0===e||null===(a=e.layerDefinition)||void 0===a?void 0:a.type)}))),"coverage"in t){const a=function(e){const{coverage:a}=e;if(!a)return null;const t=new URL(a);if(a.toLowerCase().includes("item.html")){const e=t.searchParams.get("id"),a=t.origin;return n.Z.fromPortalItem({portalItem:new o.default({id:e,url:a})})}if((0,l.B5)(a))return n.Z.fromArcGISServerUrl({url:a});throw new r.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(t);e.add(a)}i.reverse().forEach((r=>{const n=f(e,a(r),t,r);e.add(n)})),s.reverse().forEach((r=>{const n=f(e,a(r),t,r);e.tables.add(n)}))}function f(e,a,t,r){const n=new a({portalItem:e.portalItem.clone(),layerId:r.id});if("subtype-group"!==n.type&&(n.sublayerTitleMode="service-name"),"Feature Collection"===e.portalItem.type){const a={origin:"portal-item",portal:e.portalItem.portal||i.Z.getDefault()};n.read(r,a);const l=t.showLegend;null!=l&&n.read({showLegend:l},a)}return n}function m(e,a){if(!1===e.supportsData)return Promise.resolve(void 0);const t=e.instance;return t.portalItem.fetchData("json",a).catch((()=>null)).then((e=>{if(function(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}(t)){let a,r=!0;if(e&&v(e)>0){if(null==t.layerId){const a=b(e);t.layerId="subtype-group"===t.type?null===a||void 0===a?void 0:a[0]:h(e)}a=function(e,a){var t,r;const{layerId:n}=a,l=(null===(t=e.layers)||void 0===t?void 0:t.find((e=>e.id===n)))||(null===(r=e.tables)||void 0===r?void 0:r.find((e=>e.id===n)));return l&&function(e,a){return!("feature"===a.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===a.type&&!("layerType"in e))}(l,a)?l:null}(e,t),a&&(1===v(e)&&(r=!1),null!=e.showLegend&&(a.showLegend=e.showLegend))}return r&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),a}return e}))}async function L(e,a){var t,r;if(null==(null===(t=e)||void 0===t?void 0:t.layers)||null==(null===(r=e)||void 0===r?void 0:r.tables)){const t=await(0,y.b)(a);(e=e||{}).layers=e.layers||(null===t||void 0===t?void 0:t.layers),e.tables=e.tables||(null===t||void 0===t?void 0:t.tables)}return e}function h(e){const a=e.layers;if(a&&a.length)return a[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function v(e){var a,t,r,n;return(null!==(a=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==a?a:0)+(null!==(r=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==r?r:0)}function b(e){var a;const t=[];return null!==e&&void 0!==e&&null!==(a=e.layers)&&void 0!==a&&a.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}},73117:(e,a,t)=>{t.d(a,{$o:()=>u,Kz:()=>c,_$:()=>o,ck:()=>s,qj:()=>i});var r=t(52587),n=t(78952),l=t(81753);function i(e,a){if(!o(e,a)){const t=e.typeKeywords;t?t.push(a):e.typeKeywords=[a]}}function o(e,a){var t;return!(null===(t=e.typeKeywords)||void 0===t||!t.includes(a))}function s(e,a){const t=e.typeKeywords;if(t){const e=t.indexOf(a);e>-1&&t.splice(e,1)}}async function u(e){const a=e.clone().normalize();let t;if(a.length>1)for(const r of a)t?r.width>t.width&&(t=r):t=r;else t=a[0];return async function(e){const a=e.spatialReference;if(a.isWGS84)return e.clone();if(a.isWebMercator)return(0,l.Sx)(e);const t=n.Z.WGS84;return await(0,r.iQ)(a,t),(0,r.iV)(e,t)}(t)}const c={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"}},43139:(e,a,t)=>{t.r(a),t.d(a,{fromItem:()=>u,selectLayerClassPath:()=>c});var r=t(10064),n=t(19610),l=t(98995),i=t(33388),o=t(73117),s=t(41226);function u(e){return!e.portalItem||e.portalItem instanceof l.default||(e={...e,portalItem:new l.default(e.portalItem)}),function(e){return e.load().then(c).then(y)}(e.portalItem).then((a=>{const t={portalItem:e.portalItem,...a.properties};return new(0,a.constructor)(t)}))}function c(e){switch(e.type){case"Map Service":return function(e){return(0,s.b)(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}));case"Feature Service":return function(e){return(0,o._$)(e,"Oriented Imagery Layer")?function(e){return e.load().then((()=>e.fetchData())).then((e=>e.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:e}))}(e):d(e).then((e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:e.className||"FeatureLayer",properties:a}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){await e.load();const a=(0,o._$)(e,"Map Notes"),t=(0,o._$)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,o._$)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,i.getNumLayersAndTables)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return d(e).then((a=>{if("object"==typeof a){const t={};let r;if(null!=a.id?(t.layerId=a.id,r="".concat(e.url,"/layers/").concat(a.id)):r=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(a))if(e.typeKeywords.includes(t))return{className:a[t]}}return(0,s.b)(r).then((e=>{let a="SceneLayer";const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&r[e.layerType]&&(a=r[e.layerType]),{className:a,properties:t}}))}return!1===a?(0,s.b)(e.url).then((e=>"Voxel"===(null===e||void 0===e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"})):{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var a,t,r,n,l;await e.load();const i=null!==(a=null===(t=e.typeKeywords)||void 0===t?void 0:t.map((e=>e.toLowerCase())))&&void 0!==a?a:[];if(i.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(i.includes("tiled imagery"))return{className:"ImageryTileLayer"};const o=null===(r=await e.fetchData())||void 0===r?void 0:r.layerType;if("ArcGISTiledImageServiceLayer"===o)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===o)return{className:"ImageryLayer"};const u=await(0,s.b)(e.url),c=null===(n=u.cacheType)||void 0===n?void 0:n.toLowerCase(),y=null===(l=u.capabilities)||void 0===l?void 0:l.toLowerCase().includes("tilesonly");return"map"===c||y?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new r.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function y(e){return(0,n.T[e.className])().then((a=>({constructor:a,properties:e.properties})))}function d(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async a=>{if("Feature Service"===e.type){const t=p(await(0,i.preprocessFSItemData)(a,e.url));if("object"==typeof t){const e=(0,i.getSubtypeGroupLayerIds)(a);t.className=e.includes(t.id)?"SubtypeGroupLayer":"FeatureLayer"}return t}return(0,i.getNumLayersAndTables)(a)>0?p(a):(0,s.b)(e.url).then(p)}))}function p(e){return 1===(0,i.getNumLayersAndTables)(e)&&{id:(0,i.getFirstLayerOrTableId)(e)}}},41226:(e,a,t)=>{t.d(a,{b:()=>n});var r=t(76200);async function n(e){const{data:a}=await(0,r.default)(e,{responseType:"json",query:{f:"json"}});return a}}}]);
//# sourceMappingURL=43139.12b635ba.chunk.js.map