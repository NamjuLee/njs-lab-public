"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[13838],{13838:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var s,o=r(27366),i=(r(59486),r(40281)),l=r(77178),n=r(92026),a=r(97642),u=r(66978),y=r(94172),p=r(35995),f=r(49861),d=(r(63780),r(25243)),h=r(38511),c=r(69912),b=r(31201),v=r(78952),m=r(10323),g=r(6693),S=r(6061),_=r(29598),C=r(71684),w=r(56811),k=r(45948),E=r(91505),x=r(46784),P=r(54472),I=r(643),G=r(21857),L=r(53866);let O=s=class extends(E.Z.EventedMixin((0,x.eC)(P.Z))){constructor(){super(...arguments),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([(0,y.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer}),y.Z_),(0,y.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=t.parent=null}),y.Z_),(0,y.YP)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),y.Z_)])}initialize(){(0,y.N1)((()=>this.networkLink)).then((()=>(0,y.N1)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){var t,r;if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const o=(0,n.pC)(e)?e.signal:null,l=this._fetchService(null!==(t=null===(r=this._get("networkLink"))||void 0===r?void 0:r.href)&&void 0!==t?t:"",o).then((e=>{var t;const r=(0,G.lm)(e.sublayers);this.fullExtent=L.Z.fromJSON(r),this.sourceJSON=e;const o=(0,d.se)(i.Z.ofType(s),(0,G.j5)(s,e));this.sublayers?this.sublayers.addMany(o):this.sublayers=o,null!==(t=this.layer)&&void 0!==t&&t.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(l),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}_fetchService(e,t){return(0,G.CS)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>(0,G.Cw)(e.data)))}};(0,o._)([(0,f.Cb)()],O.prototype,"description",void 0),(0,o._)([(0,f.Cb)()],O.prototype,"id",void 0),(0,o._)([(0,f.Cb)({readOnly:!0,value:null})],O.prototype,"networkLink",void 0),(0,o._)([(0,f.Cb)({json:{write:{allowNull:!0}}})],O.prototype,"parent",void 0),(0,o._)([(0,f.Cb)({type:i.Z.ofType(s),json:{write:{allowNull:!0}}})],O.prototype,"sublayers",void 0),(0,o._)([(0,f.Cb)({value:null,json:{read:{source:"name",reader:e=>(0,I.Cb)(e)}}})],O.prototype,"title",void 0),(0,o._)([(0,f.Cb)({value:!0})],O.prototype,"visible",null),(0,o._)([(0,h.r)("visible",["visibility"])],O.prototype,"readVisible",null),(0,o._)([(0,f.Cb)()],O.prototype,"sourceJSON",void 0),(0,o._)([(0,f.Cb)({value:null})],O.prototype,"layer",null),(0,o._)([(0,f.Cb)({type:L.Z})],O.prototype,"fullExtent",void 0),O=s=(0,o._)([(0,c.j)("esri.layers.support.KMLSublayer")],O);const Z=O,F=["kml","xml"];let M=class extends((0,g.h)((0,C.Q)((0,w.M)((0,S.q)((0,_.I)((0,a.R)(m.Z))))))){constructor(){super(...arguments),this._visibleFolders=[],this.allSublayers=new l.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=v.Z.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([(0,y.YP)((()=>this.sublayers),((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),y.Z_),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return(0,G.j5)(Z,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],s=e.toArray();for(;s.length;){const e=s[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&s.push(...e.sublayers.toArray())),s.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,p.vt)(this.url,F)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=(0,n.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(u.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then((()=>{var t;return this.resourceInfo?{ssl:!1,data:this.resourceInfo}:(0,G.CS)(null!==(t=this.url)&&void 0!==t?t:"",this.outSpatialReference,this.refreshInterval,e)})),r=(0,G.Cw)(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;(0,n.pC)(this.extent)&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const s of r.sublayers.items)t(s),s.visible&&s.fullExtent&&((0,n.pC)(e)?e.union(s.fullExtent):e=s.fullExtent.clone())};return t(this),e}};(0,o._)([(0,f.Cb)({readOnly:!0})],M.prototype,"allSublayers",void 0),(0,o._)([(0,f.Cb)({type:v.Z})],M.prototype,"outSpatialReference",void 0),(0,o._)([(0,f.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),(0,o._)([(0,f.Cb)({readOnly:!0,json:{read:!1,write:!1}})],M.prototype,"legendEnabled",void 0),(0,o._)([(0,f.Cb)({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),(0,o._)([(0,f.Cb)({type:["KML"]})],M.prototype,"operationalLayerType",void 0),(0,o._)([(0,f.Cb)({})],M.prototype,"resourceInfo",void 0),(0,o._)([(0,f.Cb)({type:i.Z.ofType(Z),json:{write:{ignoreOrigin:!0}}})],M.prototype,"sublayers",void 0),(0,o._)([(0,h.r)(["web-map","portal-item"],"sublayers",["visibleFolders"])],M.prototype,"readSublayersFromItemOrWebMap",null),(0,o._)([(0,h.r)("service","sublayers",["sublayers"])],M.prototype,"readSublayers",null),(0,o._)([(0,b.c)("sublayers")],M.prototype,"writeSublayers",null),(0,o._)([(0,f.Cb)({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),(0,o._)([(0,f.Cb)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],M.prototype,"title",null),(0,o._)([(0,f.Cb)(k.HQ)],M.prototype,"url",void 0),(0,o._)([(0,f.Cb)({readOnly:!0})],M.prototype,"visibleSublayers",null),(0,o._)([(0,f.Cb)({type:L.Z})],M.prototype,"extent",void 0),(0,o._)([(0,f.Cb)()],M.prototype,"fullExtent",null),M=(0,o._)([(0,c.j)("esri.layers.KMLLayer")],M);const j=M},21857:(e,t,r)=>{r.d(t,{CS:()=>b,Cw:()=>c,Yu:()=>g,j5:()=>v,lm:()=>S});var s=r(42265),o=r(19545),i=r(44055),l=r(76200),n=r(84652),a=r(35995),u=r(78952),y=r(41414),p=r(376),f=r(9014),d=r(49818);const h={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function c(e){const t=e.folders||[],r=t.slice(),s=new Map,o=new Map,i=new Map,l=new Map,a=new Map,u={esriGeometryPoint:o,esriGeometryPolyline:i,esriGeometryPolygon:l};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=(0,n.d9)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;s.set(r,t);const a=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?m(o,a,e.featureSet.features):"esriGeometryPolyline"===r?m(i,a,e.featureSet.features):"esriGeometryPolygon"===r&&m(l,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((s=>{const o=function(e,t,r){const s=function(e,t){let r;return t.some((t=>t.id===e&&(r=t,!0))),r}(e,r);return s&&(s.parentFolderId=t,s.networkLink=s),s}(s,t.id,e.networkLinks);o&&r.push(o)}))})),r.forEach((e=>{if(e.featureInfos){e.points=(0,n.d9)(s.get("esriGeometryPoint")),e.polylines=(0,n.d9)(s.get("esriGeometryPolyline")),e.polygons=(0,n.d9)(s.get("esriGeometryPolygon")),e.mapImages=[];for(const t of e.featureInfos)switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const r=u[t.type].get(t.id);r&&e[h[t.type]].featureSet.features.push(r);break}case"GroundOverlay":{const r=a.get(t.id);r&&e.mapImages.push(r);break}}e.fullExtent=S([e])}}));const y=S(r);return{folders:t,sublayers:r,extent:y}}function b(e,t,r,i){const n=o.id&&o.id.findCredential(e);e=(0,a.fl)(e,{token:n&&n.token});const u=s.Z.kmlServiceUrl;return(0,l.default)(u,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:i})}function v(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const o=[],i={},l=t.sublayers,n=t.folders.map((e=>e.id));return l.forEach((t=>{const l=new e;if(r?l.read(t,r):l.read(t),s.length&&n.includes(l.id)&&(l.visible=s.includes(l.id)),i[t.id]=l,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=i[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(l)}else o.unshift(l)})),o}function m(e,t,r){r.forEach((r=>{e.set(r.attributes[t],r)}))}async function g(e){const t=d.default.fromJSON(e.featureSet).features,r=e.layerDefinition,s=(0,f.i)(r.drawingInfo.renderer),o=i.Z.fromJSON(e.popupInfo),l=[];for(const i of t){const e=await s.getSymbolAsync(i);i.symbol=e,i.popupTemplate=o,i.visible=!0,l.push(i)}return l}function S(e){const t=(0,y.Ue)(y.Gv),r=(0,y.Ue)(y.Gv);for(const s of e){if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features)for(const e of s.polygons.featureSet.features)(0,p.Yg)(t,e.geometry),(0,y.TC)(r,t);if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features)for(const e of s.polylines.featureSet.features)(0,p.Yg)(t,e.geometry),(0,y.TC)(r,t);if(s.points&&s.points.featureSet&&s.points.featureSet.features)for(const e of s.points.featureSet.features)(0,p.Yg)(t,e.geometry),(0,y.TC)(r,t);if(s.mapImages)for(const e of s.mapImages)(0,p.Yg)(t,e.extent),(0,y.TC)(r,t)}return(0,y.fS)(r,y.Gv)?null:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:u.Z.WGS84}}}}]);
//# sourceMappingURL=13838.ca27c73f.chunk.js.map