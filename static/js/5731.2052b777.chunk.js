"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[5731,2078],{15909:(e,t,r)=>{r.d(t,{D:()=>a});var o=r(80292);function a(e){e&&e.writtenProperties&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:a}=e;(0,o.l)(t)&&a&&t.originOf(r)!==a&&t.updateOrigin(r,a)}))}},80292:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>o})},95731:(e,t,r)=>{r.d(t,{xp:()=>L,Vt:()=>C});var o=r(27366),a=r(76200),i=r(10064),n=(r(93169),r(32718)),s=r(92026),l=r(66978),p=r(35995),c=r(49861),d=(r(63780),r(25243),r(38511)),u=r(69912),h=r(31201),y=r(15909),m=r(53866),f=r(90724),v=r(78952),g=r(25899),w=r(45948),S=r(30494),I=r(70032),_=r(98995),b=r(14921),x=r(71907),R=r(62078);async function N(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map((e=>e.resource.path))),n=new Set,s=[];a.forEach((t=>{o.delete(t),e.paths.push(t)}));for(const i of t.resources.toUpdate)if(o.delete(i.resource.path),a.has(i.resource.path)||n.has(i.resource.path)){const{resource:t,content:o,finish:a,error:n}=i,l=(0,R.getSiblingOfSameTypeI)(t,(0,x.D)());e.paths.push(l.path),s.push(O({resource:l,content:o,compress:i.compress,finish:a,error:n},r))}else e.paths.push(i.resource.path),s.push(A(i,r)),n.add(i.resource.path);for(const i of t.resources.toAdd)s.push(O(i,r)),e.paths.push(i.resource.path);if(o.forEach((e=>{const r=t.portalItem.resourceFromPath(e);s.push(r.portalItem.removeResource(r).catch((()=>{})))})),0===s.length)return;const p=await(0,l.as)(s);(0,l.k_)(r);const c=p.filter((e=>"error"in e)).map((e=>e.error));if(c.length>0)throw new i.Z("save:resources","Failed to save one or more resources",{errors:c})}async function O(e,t){const r={...(0,s.pC)(t)?t:{},compress:e.compress},o=await(0,b.q6)(e.resource.portalItem.addResource(e.resource,e.content,r));if(!0!==o.ok)throw e.error&&e.error(o.error),o.error;e.finish&&e.finish(e.resource)}async function A(e,t){const r=await(0,b.q6)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}const T="esri.layers.mixins.SceneService",P=n.Z.getLogger(T),C=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,l.Ds)((async(e,t,r)=>{switch(e){case L.SAVE:return this._save(t);case L.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return v.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new v.Z(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return m.Z.fromJSON(o,r)}const o=t.store,a=this._readSpatialReference(t);return null==a||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<U))?null:new m.Z({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return(0,g.a7)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=(0,g.Qc)(this.url);(0,s.pC)(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,g.ld)(o)}set url(e){const t=(0,g.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:P});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,g.wH)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,p.mN)(e);return null!=this.layerId&&(t.path="".concat(t.path,"/layers/").concat(this.layerId)),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,S.T)(this.parsedUrl.path,this.rootNode,e,this.apiKey,P,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null===e||void 0===e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,a=null===(t=e.rootPage)||void 0===t||null===(r=t.nodes)||void 0===r?void 0:r[o];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new i.Z("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<U||null==this.fullExtent||this.fullExtent.hasZ)return;const n=a.obb.halfSize,s=a.obb.center[2],l=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);this.fullExtent.zmin=s-l,this.fullExtent.zmax=s+l}else if("node"===(null===e||void 0===e?void 0:e.type)){var o;const t=null===(o=e.rootNode)||void 0===o?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<U)return;const r=t[2],a=t[3],{fullExtent:i}=this;i&&(i.zmin=r-a,i.zmax=r+a)}}async _fetchService(e){if(null==this.url)throw new i.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,a.default)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var t,r;const o=await(0,a.default)(null!==(t=null===(r=this.parsedUrl)||void 0===r?void 0:r.path)&&void 0!==t?t:"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});o.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(o.data.layerType&&"Voxel"===o.data.layerType&&(i=!0),i)return this._fetchVoxelServiceLayer();const n=o.data;this.read(n,{origin:"service",url:this.parsedUrl}),this.validateLayer(n)}async _fetchVoxelServiceLayer(e){var t;const r=(await(0,a.default)((null===(t=this.parsedUrl)||void 0===t?void 0:t.path)+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const a of o)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===Z.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){var r,o,a;const n={...q,...t};let s=_.default.from(e);s||(P.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new i.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),s.id&&(s=s.clone(),s.id=null);const l=s.portal||I.Z.getDefault();await this._ensureLoadBeforeSave(),s.type=K,s.portal=l;const p={origin:"portal-item",url:null,messages:[],portal:l,portalItem:s,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},c={layers:[this.write({},p)]};return await Promise.all(null!==(r=null===(o=p.resources)||void 0===o?void 0:o.pendingOperations)&&void 0!==r?r:[]),await this._validateAgainstJSONSchema(c,p,n),s.url=this.url,s.title||(s.title=this.title),this._updateTypeKeywords(s,n,Z.newItem),await l._signIn(),await(null===(a=l.user)||void 0===a?void 0:a.addItem({item:s,folder:n&&n.folder,data:c})),await N(this.resourceReferences,p,null),this.portalItem=s,(0,y.D)(p),p.portalItem=s,s}async _save(e){var t,r;const o={...q,...e};if(!this.portalItem)throw P.error("_save(): requires the .portalItem property to be set"),new i.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==K)throw P.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+K),new i.Z("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'.concat(K,'"'));await this._ensureLoadBeforeSave();const a={origin:"portal-item",url:this.portalItem.itemUrl&&(0,p.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||I.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},a)]};return await Promise.all(null!==(t=null===(r=a.resources)||void 0===r?void 0:r.pendingOperations)&&void 0!==t?t:[]),await this._validateAgainstJSONSchema(n,a,o),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,o,Z.existingItem),await this.portalItem.update({data:n}),await N(this.resourceReferences,a,null),(0,y.D)(a),this.portalItem}async _validateAgainstJSONSchema(e,t,o){var a,n,s,l;let p=null!==(a=null===(n=t.messages)||void 0===n?void 0:n.filter((e=>"error"===e.type)).map((e=>new i.Z(e.name,e.message,e.details))))&&void 0!==a?a:[];if(o&&null!==(s=o.validationOptions)&&void 0!==s&&s.ignoreUnsupported&&(p=p.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),null!==(l=o.validationOptions)&&void 0!==l&&l.enabled||E){const t=(await r.e(6168).then(r.bind(r,36168))).validate(e,o.portalItemLayerType);if(t.length>0){var c;const e="Layer item did not validate:\n".concat(t.join("\n"));if(P.error("_validateAgainstJSONSchema(): ".concat(e)),"throw"===(null===(c=o.validationOptions)||void 0===c?void 0:c.failPolicy)){const e=t.map((e=>new i.Z("sceneservice:schema-validation",e))).concat(p);throw new i.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(p.length>0)throw new i.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:p})}};return(0,o._)([(0,c.Cb)(w.id)],t.prototype,"id",void 0),(0,o._)([(0,c.Cb)({type:v.Z})],t.prototype,"spatialReference",void 0),(0,o._)([(0,d.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,c.Cb)({type:m.Z})],t.prototype,"fullExtent",void 0),(0,o._)([(0,d.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:f.Z})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,c.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,c.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,c.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,d.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,c.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,c.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,c.Cb)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,d.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,d.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,c.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,c.Cb)(w.HQ)],t.prototype,"url",null),(0,o._)([(0,h.c)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,c.Cb)()],t.prototype,"parsedUrl",null),(0,o._)([(0,c.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,u.j)(T)],t),t},U=-1e38,E=!1;var Z,j;(j=Z||(Z={}))[j.existingItem=0]="existingItem",j[j.newItem=1]="newItem";const K="Scene Service",q={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var L;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(L||(L={}))},30494:(e,t,r)=>{r.d(t,{T:()=>n});var o=r(76200),a=r(10064),i=r(92026);async function n(e,t,r,n,s,l){let p=null;if((0,i.pC)(r)){const t="".concat(e,"/nodepages/"),a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,o.default)(a,{query:{f:"json",token:n},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(u){(0,i.pC)(s)&&s.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,u),p=u}}if(!t)return null;const c="".concat(e,"/nodes/"),d=c+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await(0,o.default)(d,{query:{f:"json",token:n},responseType:"json",signal:l})).data,urlPrefix:c}}catch(u){throw new a.Z("sceneservice:root-node-missing","Root node missing.",{pageError:p,nodeError:u,url:d})}}},62078:(e,t,r)=>{r.r(t),r.d(t,{addOrUpdateResource:()=>l,contentToBlob:()=>h,fetchResources:()=>s,getSiblingOfSameType:()=>y,getSiblingOfSameTypeI:()=>m,removeAllResources:()=>c,removeResource:()=>p,splitPrefixFileNameAndExtension:()=>u});var o=r(76200),a=r(10064),i=r(92026),n=r(35995);async function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const o=(0,n.v_)(e.itemUrl,"resources"),{start:a=1,num:s=10,sortOrder:l="asc",sortField:p="created"}=t,c={query:{start:a,num:s,sortOrder:l,sortField:p,token:e.apiKey},signal:(0,i.U2)(r,"signal")},d=await e.portal._request(o,c);return{total:d.total,nextStart:d.nextStart,resources:d.resources.map((t=>{let{created:r,size:o,resource:a}=t;return{created:new Date(r),size:o,resource:e.resourceFromPath(a)}}))}}async function l(e,t,r,o){if(!e.hasPath())throw new a.Z("portal-item-resource-".concat(t,":invalid-path"),"Resource does not have a valid path");const s=e.portalItem;await s.load(o);const l=(0,n.v_)(s.userItemUrl,"add"===t?"addResources":"updateResources"),[p,c]=d(e.path),u=await h(r),y=new FormData;return p&&"."!==p&&y.append("resourcesPrefix",p),(0,i.pC)(o)&&o.compress&&y.append("compress","true"),y.append("fileName",c),y.append("file",u,c),y.append("f","json"),(0,i.pC)(o)&&o.access&&y.append("access",o.access),await s.portal._request(l,{method:"post",body:y,signal:(0,i.U2)(o,"signal")}),e}async function p(e,t,r){if(!t.hasPath())throw new a.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,n.v_)(e.userItemUrl,"removeResources");await e.portal._request(o,{method:"post",query:{resource:t.path},signal:(0,i.U2)(r,"signal")}),t.portalItem=null}async function c(e,t){await e.load(t);const r=(0,n.v_)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:(0,i.U2)(t,"signal")})}function d(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function u(e){const[t,r]=function(e){const t=(0,n.Ml)(e);return(0,i.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),[o,a]=d(t);return[o,a,r]}async function h(e){return e instanceof Blob?e:(await(0,o.default)(e.url,{responseType:"blob"})).data}function y(e,t){if(!e.hasPath())return null;const[r,,o]=u(e.path);return e.portalItem.resourceFromPath((0,n.v_)(r,t+o))}function m(e,t){if(!e.hasPath())return null;const[r,,o]=u(e.path);return e.portalItem.resourceFromPath((0,n.v_)(r,t+o))}}}]);
//# sourceMappingURL=5731.2052b777.chunk.js.map