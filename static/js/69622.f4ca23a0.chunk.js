"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[69622],{69622:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var i=r(27366),o=(r(59486),r(52639)),l=(r(51508),r(40281)),n=r(10064),a=r(84652),s=r(92026),y=r(97642),p=r(18202),u=r(51370),d=r(49861),c=(r(25243),r(38511)),m=r(69912),f=r(31201),b=r(52587),h=r(65156),g=r(91340),S=r(92975),v=r(64326),C=(r(63780),r(68748)),O=r(30651),_=r(6693),w=r(56811),N=r(78983),J=r(64575);let L=class extends((0,_.h)((0,w.M)(O.Z))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new N.J,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,i._)([(0,d.Cb)({type:J.Z})],L.prototype,"elevationInfo",void 0),(0,i._)([(0,d.Cb)((0,C.z)(N.J,"graphics"))],L.prototype,"graphics",void 0),(0,i._)([(0,d.Cb)({type:["show","hide"]})],L.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)()],L.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],L.prototype,"type",void 0),(0,i._)([(0,d.Cb)({constructOnly:!0})],L.prototype,"internal",void 0),L=(0,i._)([(0,m.j)("esri.layers.GraphicsLayer")],L);const M=L;var x=r(25820),T=r(6061),I=r(29598),Z=r(83040),R=r(61459),E=r(16851),j=r(16072),D=r(58009),G=r(78952),P=r(53866);function z(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!W(e)))}function W(e){var t;let{layerDefinition:r,featureSet:i}=e;const o=null!==(t=r.geometryType)&&void 0!==t?t:i.geometryType;return H.find((e=>{var t,i,l;return o===e.geometryTypeJSON&&(null===(t=r.drawingInfo)||void 0===t||null===(i=t.renderer)||void 0===i||null===(l=i.symbol)||void 0===l?void 0:l.type)===e.identifyingSymbol.type}))}function F(){return new P.Z({xmin:-180,ymin:-90,xmax:180,ymax:90})}const k=new Z.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),B=new Z.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let A=class extends M{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get fullExtent(){var e;const t=null===(e=this.layer)||void 0===e?void 0:e.spatialReference,r=this.fullBounds;return t?(0,s.Wi)(r)?(0,b.dz)(F(),t).geometry:(0,h.HH)(r,t):null}get fullBounds(){var e;const t=null===(e=this.layer)||void 0===e?void 0:e.spatialReference;if(!t)return null;const r=(0,h.cS)();return this.graphics.forEach((e=>{const i=(0,s.pC)(e.geometry)?(0,b.dz)(e.geometry,t).geometry:null;(0,s.pC)(i)&&(0,h.jn)(r,"point"===i.type?i:i.extent,r)})),(0,h.fS)(r,h.Gv)?null:r}get sublayers(){return this.graphics}};(0,i._)([(0,d.Cb)({readOnly:!0})],A.prototype,"fullExtent",null),(0,i._)([(0,d.Cb)({readOnly:!0})],A.prototype,"fullBounds",null),(0,i._)([(0,d.Cb)({readOnly:!0})],A.prototype,"sublayers",null),(0,i._)([(0,d.Cb)()],A.prototype,"layer",void 0),(0,i._)([(0,d.Cb)()],A.prototype,"layerId",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],A.prototype,"visibilityMode",void 0),A=(0,i._)([(0,m.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],A);const H=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new R.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new E.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new j.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new j.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new D.Z).toJSON()}];let X=class extends((0,_.h)((0,w.M)((0,T.q)((0,I.I)((0,y.R)(O.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=G.Z.WGS84,this.sublayers=new l.Z(H.map((e=>new A({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!z(t)&&"portal-item"!==(null===r||void 0===r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!z(t))return null;const i=t.layers.map((e=>{const t=new v.default;return t.read(e,r),t}));return new l.Z({items:i})}readLegacyfeatureCollectionJSON(e,t){return z(t)?(0,a.d9)(t.featureCollection):null}get fullExtent(){var e;const t=this.spatialReference,r=(0,h.cS)();return(0,s.pC)(this.sublayers)?this.sublayers.forEach((e=>{let{fullBounds:t}=e;return(0,s.pC)(t)?(0,h.jn)(r,t,r):r}),r):null!==(e=this.featureCollectionJSON)&&void 0!==e&&e.layers.some((e=>e.layerDefinition.extent))&&this.featureCollectionJSON.layers.forEach((e=>{const i=(0,b.dz)(e.layerDefinition.extent,t).geometry;(0,s.pC)(i)&&(0,h.jn)(r,i,r)})),(0,h.fS)(r,h.Gv)?(0,b.dz)(F(),t).geometry:(0,h.HH)(r,t)}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?G.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):G.Z.WGS84}readSublayers(e,t,r){if(z(t))return null;const i=[];let n=t.layers.reduce(((e,t)=>{var r;return Math.max(e,null!==(r=t.layerDefinition.id)&&void 0!==r?r:-1)}),-1)+1;for(const l of t.layers){var a;const{layerDefinition:e,featureSet:t}=l,r=null!==(a=e.id)&&void 0!==a?a:n++,y=W(l);if((0,s.pC)(y)){const l=new A({id:y.id,title:e.name,layerId:r,layer:this,graphics:t.features.map((e=>{let{geometry:t,symbol:r,attributes:i,popupInfo:l}=e;return o.Z.fromJSON({attributes:i,geometry:t,symbol:r,popupTemplate:l})}))});i.push(l)}}return new l.Z(i)}writeSublayers(e,t,r,i){var o;const{minScale:l,maxScale:a}=this;if((0,s.Wi)(e))return;const y=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&(null===i||void 0===i||null===(o=i.messages)||void 0===o||o.push(new n.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const u=[];let d=this.spatialReference.toJSON();e:for(const n of e)for(const e of n.graphics)if((0,s.pC)(e.geometry)){d=e.geometry.spatialReference.toJSON();break e}for(const n of H){const t=e.find((e=>n.id===e.id));this._writeMapNoteSublayer(u,t,n,l,a,d,i)}(0,p.RB)("featureCollection.layers",u,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,a.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if((0,s.Wi)(this.sublayers))return;let e=null;const t=[];for(const i of this.sublayers)for(const r of i.graphics)if((0,s.pC)(r.geometry)){const i=r.geometry;e?(0,S.fS)(i.spatialReference,e)||((0,b.Up)(i.spatialReference,e)||(0,b.kR)()||await(0,b.zD)(),r.geometry=(0,b.iV)(i,e)):e=i.spatialReference,t.push(r)}const r=await(0,g.aX)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return(0,s.Wi)(this.sublayers)?null:null!==(t=null===(r=this.sublayers)||void 0===r?void 0:r.find((t=>t.id===e)))&&void 0!==t?t:null}_writeMapNoteSublayer(e,t,r,i,o,l,n){const y=[];if(!(0,s.Wi)(t)){for(const e of t.graphics)this._writeMapNote(y,e,r.geometryType,n);this._normalizeObjectIds(y,k),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,a.d9)(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:i,maxScale:o,objectIdField:"OBJECTID",fields:[k.toJSON(),B.toJSON()],spatialReference:l},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,i){var o,l;if((0,s.Wi)(t))return;const{geometry:n,symbol:a,popupTemplate:y}=t;if((0,s.Wi)(n))return;if(n.type!==r)return void(null===i||void 0===i||null===(o=i.messages)||void 0===o||o.push(new u.Z("map-notes-layer:invalid-geometry-type",'Geometry "'.concat(n.type,'" cannot be saved in "').concat(r,'" layer'),{graphic:t})));if((0,s.Wi)(a))return void(null===i||void 0===i||null===(l=i.messages)||void 0===l||l.push(new u.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:{...t.attributes},geometry:n.toJSON(),symbol:a.toJSON()};(0,s.pC)(y)&&(p.popupInfo=y.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const r=t.name;let i=(0,x.S)(r,e)+1;const o=new Set;for(const l of e){l.attributes||(l.attributes={});const{attributes:e}=l;(null==e[r]||o.has(e[r]))&&(e[r]=i++),o.add(e[r])}}};(0,i._)([(0,d.Cb)({readOnly:!0})],X.prototype,"capabilities",void 0),(0,i._)([(0,c.r)(["portal-item","web-map"],"capabilities",["layers"])],X.prototype,"readCapabilities",null),(0,i._)([(0,d.Cb)({readOnly:!0})],X.prototype,"featureCollections",void 0),(0,i._)([(0,c.r)(["web-map","portal-item"],"featureCollections",["layers"])],X.prototype,"readFeatureCollections",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],X.prototype,"featureCollectionJSON",void 0),(0,i._)([(0,c.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],X.prototype,"readLegacyfeatureCollectionJSON",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],X.prototype,"featureCollectionType",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],X.prototype,"fullExtent",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],X.prototype,"legendEnabled",void 0),(0,i._)([(0,d.Cb)({type:["show","hide","hide-children"]})],X.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],X.prototype,"minScale",void 0),(0,i._)([(0,c.r)(["web-map","portal-item"],"minScale",["layers"])],X.prototype,"readMinScale",null),(0,i._)([(0,d.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],X.prototype,"maxScale",void 0),(0,i._)([(0,c.r)(["web-map","portal-item"],"maxScale",["layers"])],X.prototype,"readMaxScale",null),(0,i._)([(0,d.Cb)({readOnly:!0})],X.prototype,"multipointLayer",null),(0,i._)([(0,d.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],X.prototype,"operationalLayerType",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],X.prototype,"pointLayer",null),(0,i._)([(0,d.Cb)({readOnly:!0})],X.prototype,"polygonLayer",null),(0,i._)([(0,d.Cb)({readOnly:!0})],X.prototype,"polylineLayer",null),(0,i._)([(0,d.Cb)({type:G.Z})],X.prototype,"spatialReference",void 0),(0,i._)([(0,c.r)(["web-map","portal-item"],"spatialReference",["layers"])],X.prototype,"readSpatialReference",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],X.prototype,"sublayers",void 0),(0,i._)([(0,c.r)("web-map","sublayers",["layers"])],X.prototype,"readSublayers",null),(0,i._)([(0,f.c)("web-map","sublayers")],X.prototype,"writeSublayers",null),(0,i._)([(0,d.Cb)({readOnly:!0})],X.prototype,"textLayer",null),(0,i._)([(0,d.Cb)()],X.prototype,"title",void 0),(0,i._)([(0,d.Cb)({readOnly:!0,json:{read:!1}})],X.prototype,"type",void 0),X=(0,i._)([(0,m.j)("esri.layers.MapNotesLayer")],X);const q=X},25820:(e,t,r)=>{r.d(t,{S:()=>o,X:()=>i});const i=1;function o(e,t){let r=0;for(const o of t){var i;const t=null===(i=o.attributes)||void 0===i?void 0:i[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}}}]);
//# sourceMappingURL=69622.f4ca23a0.chunk.js.map