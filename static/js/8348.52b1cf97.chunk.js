"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[8348],{40237:(t,e,s)=>{s.d(e,{N:()=>i});const i={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,s){const i=new r(t.getPointX(e),t.getPointY(e),s),n=t.hasZ(e),o=t.hasM(e);return n&&(i.z=t.getPointZ(e)),o&&(i.m=t.getPointM(e)),i},exportPolygon:function(t,e,s){return new n(t.exportPaths(e),s,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,s){return new o(t.exportPaths(e),s,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,s){return new a(t.exportPoints(e),s,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,s){const i=t.hasZ(e),r=t.hasM(e),n=new h(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),s);if(i){const s=t.getZExtent(e);n.zmin=s.vmin,n.zmax=s.vmax}if(r){const s=t.getMExtent(e);n.mmin=s.vmin,n.mmax=s.vmax}return n}};class r{constructor(t,e,s){this.x=t,this.y=e,this.spatialReference=s,this.z=void 0,this.m=void 0}}class n{constructor(t,e,s,i){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),i&&(this.hasM=i)}}class o{constructor(t,e,s,i){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),i&&(this.hasM=i)}}class a{constructor(t,e,s,i){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,s&&(this.hasZ=s),i&&(this.hasM=i)}}class h{constructor(t,e,s,i,r){this.xmin=t,this.ymin=e,this.xmax=s,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},85403:(t,e,s)=>{s.d(e,{Y:()=>n});var i=s(92026);function r(t,e){return t?e?4:3:e?3:2}function n(t,e,s,n,h){if((0,i.Wi)(e)||!e.lengths.length)return null;const u="upperLeft"===(null===h||void 0===h?void 0:h.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const l=t.coords,c=[],d=s?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:_,coords:f}=e,p=r(s,n);let g=0;for(const i of _){const t=o(d,f,g,i,s,n,u);t&&c.push(t),g+=i*p}if(c.sort(((t,e)=>{let i=u*t[2]-u*e[2];return 0===i&&s&&(i=t[4]-e[4]),i})),c.length){let t=6*c[0][2];l[0]=c[0][0]/t,l[1]=c[0][1]/t,s&&(t=6*c[0][4],l[2]=0!==t?c[0][3]/t:0),(l[0]<d[0]||l[0]>d[1]||l[1]<d[2]||l[1]>d[3]||s&&(l[2]<d[4]||l[2]>d[5]))&&(l.length=0)}if(!l.length){const t=e.lengths[0]?a(f,0,_[0],s,n):null;if(!t)return null;l[0]=t[0],l[1]=t[1],s&&t.length>2&&(l[2]=t[2])}return t}function o(t,e,s,i,n,o){let a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;const h=r(n,o);let u=s,l=s+h,c=0,d=0,_=0,f=0,p=0;for(let r=0,m=i-1;r<m;r++,u+=h,l+=h){const s=e[u],i=e[u+1],r=e[u+2],o=e[l],a=e[l+1],h=e[l+2];let g=s*a-o*i;f+=g,c+=(s+o)*g,d+=(i+a)*g,n&&(g=s*h-o*r,_+=(r+h)*g,p+=g),s<t[0]&&(t[0]=s),s>t[1]&&(t[1]=s),i<t[2]&&(t[2]=i),i>t[3]&&(t[3]=i),n&&(r<t[4]&&(t[4]=r),r>t[5]&&(t[5]=r))}if(f*a>0&&(f*=-1),p*a>0&&(p*=-1),!f)return null;const g=[c,d,.5*f];return n&&(g[3]=_,g[4]=.5*p),g}function a(t,e,s,i,n){const o=r(i,n);let a=e,d=e+o,_=0,f=0,p=0,g=0;for(let r=0,m=s-1;r<m;r++,a+=o,d+=o){const e=t[a],s=t[a+1],r=t[a+2],n=t[d],o=t[d+1],m=t[d+2],y=i?u(e,s,r,n,o,m):h(e,s,n,o);if(y)if(_+=y,i){const t=c(e,s,r,n,o,m);f+=y*t[0],p+=y*t[1],g+=y*t[2]}else{const t=l(e,s,n,o);f+=y*t[0],p+=y*t[1]}}return _>0?i?[f/_,p/_,g/_]:[f/_,p/_]:s>0?i?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function h(t,e,s,i){const r=s-t,n=i-e;return Math.sqrt(r*r+n*n)}function u(t,e,s,i,r,n){const o=i-t,a=r-e,h=n-s;return Math.sqrt(o*o+a*a+h*h)}function l(t,e,s,i){return[t+.5*(s-t),e+.5*(i-e)]}function c(t,e,s,i,r,n){return[t+.5*(i-t),e+.5*(r-e),s+.5*(n-s)]}},19995:(t,e,s)=>{s.d(e,{_W:()=>d,iV:()=>p,oj:()=>m});var i=s(92026),r=s(52587),n=s(40237),o=s(92975),a=s(81753);const h=[0,0];function u(t,e){if(!e)return null;if("x"in e){const s={x:0,y:0};return[s.x,s.y]=t(e.x,e.y,h),null!=e.z&&(s.z=e.z),null!=e.m&&(s.m=e.m),s}if("xmin"in e){const s={xmin:0,ymin:0,xmax:0,ymax:0};return[s.xmin,s.ymin]=t(e.xmin,e.ymin,h),[s.xmax,s.ymax]=t(e.xmax,e.ymax,h),e.hasZ&&(s.zmin=e.zmin,s.zmax=e.zmax,s.hasZ=!0),e.hasM&&(s.mmin=e.mmin,s.mmax=e.mmax,s.hasM=!0),s}return"rings"in e?{rings:l(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:l(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:c(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:null}function l(t,e){const s=[];for(const i of t)s.push(c(i,e));return s}function c(t,e){const s=[];for(const i of t){const t=e(i[0],i[1],[0,0]);s.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return s}async function d(t,e){if(!t||!e)return;const s=Array.isArray(t)?t.map((t=>(0,i.pC)(t.geometry)?t.geometry.spatialReference:null)).filter(i.pC):[t];await(0,r.iQ)(s.map((t=>({source:t,dest:e}))))}const _=u.bind(null,a.hG),f=u.bind(null,a.R6);function p(t,e,s,i){if(!t)return t;if(s||(s=e,e=t.spatialReference),!(0,o.JY)(e)||!(0,o.JY)(s)||(0,o.fS)(e,s))return t;if((0,a.Q8)(e,s)){const e=(0,o.sS)(s)?_(t):f(t);return e.spatialReference=s,e}return(0,r.oj)(n.N,[t],e,s,null,i)[0]}const g=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,s){if(!t||!t.length||!e||!s||(0,o.fS)(e,s))return t;const i={geometries:t,inSpatialReference:e,outSpatialReference:s,resolve:null};return this._jobs.push(i),new Promise((t=>{i.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:s,outSpatialReference:i,resolve:h}=t;(0,a.Q8)(s,i)?(0,o.sS)(i)?h(e.map(_)):h(e.map(f)):h((0,r.oj)(n.N,e,s,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function m(t,e,s){return g.push(t,e,s)}},84328:(t,e,s)=>{s.d(e,{KS:()=>u,PX:()=>n,QS:()=>c,_I:()=>i,jL:()=>h,nE:()=>l,vs:()=>a,xp:()=>o});const i=8388607,r=8388608,n=0,o=1,a=t=>(t&r)>>>23,h=t=>t&i,u=t=>a(t)===o?254:255;function l(t){return a(t)===o}function c(t,e){return((e?r:0)|t)>>>0}},64668:(t,e,s)=>{s.d(e,{J:()=>r,g:()=>i});const i=(t,e)=>t&&function(){for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return e.warn("DEBUG:",...s)}||(()=>null),r=!1},45367:(t,e,s)=>{s.d(e,{Z:()=>S});var i=s(10064),r=s(93169),n=s(32718),o=s(16889),a=s(92026),h=s(66978),u=s(48732),l=s(52410),c=s(94109),d=s(84328),_=s(46640),f=s(64668),p=s(98290),g=s(8548);const m=n.Z.getLogger("esri.views.layers.2d.features.support.AttributeStore"),y=(0,f.g)(f.J,m),x={sharedArrayBuffer:(0,r.Z)("esri-shared-array-buffer"),atomics:(0,r.Z)("esri-atomics")};function I(t,e){return s=>e(t(s))}class b{constructor(t,e,s,i){this.size=0,this.texelSize=4;const{pixelType:r,layout:n,textureOnly:o}=i;this.textureOnly=o||!1,this.pixelType=r,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,o||(this.data=this._initData(r,s,t,e))}get buffer(){return(0,a.yw)(this.data,(t=>t.buffer))}unsetComponentAllTexels(t,e){const s=(0,a.Wg)(this.data);for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=(0,a.Wg)(this.data);for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const i=(0,a.Wg)(this.data);for(const r of s)i[r*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}setComponentTexel(t,e,s){(0,a.Wg)(this.data)[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){(0,a.Wg)(this.data)[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=(0,d.jL)(t);return(0,a.Wg)(this.data)[s*this.texelSize+e]}setData(t,e,s){const i=(0,d.jL)(t),r=1<<e;0!=(this.layout&r)?(this.data[i*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)):m.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===g.Br.UNSIGNED_BYTE&&this._shared&&x.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===g.Br.UNSIGNED_BYTE&&this._shared&&x.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=(0,a.Wg)(this.data);e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const i=!(this._shared||"local"===this._ctype),r=this.pixelType,n=this.layout,o=(0,a.Wg)(this.data);return{start:t,end:e,data:i&&o.slice(t*s,(e+1)*s)||null,pixelType:r,layout:n}}_initData(t,e,s,i){const r=s&&"local"!==i?SharedArrayBuffer:ArrayBuffer,n=(0,_.UK)(t),o=new n(new r(e*e*4*n.BYTES_PER_ELEMENT));for(let a=0;a<o.length;a+=4)o[a+1]=255;return o}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class S{constructor(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};this._client=t,this.config=e,this._notifyChange=s,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(c.m4),this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const i=e.supportsTextureFloat?g.Br.FLOAT:g.Br.UNSIGNED_BYTE;y("Creating AttributeStore ".concat(x.sharedArrayBuffer?"with":"without"," shared memory")),this._blockDescriptors=[{pixelType:g.Br.UNSIGNED_BYTE,layout:1},{pixelType:g.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:g.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:i,layout:15},{pixelType:i,layout:15},{pixelType:i,layout:15},{pixelType:i,layout:15}],this._blocks=this._blockDescriptors.map((()=>null))}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){return!!this._currUpdate||!!this._nextUpdate}update(t,e){this.config=e;const s=e.schema.processors[0].storage,i=(0,u.Hg)(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),i&&((0,r.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",i),t.storage.data=!0,this._schema=s,this._attributeComputeMap.clear(),!(0,a.Wi)(s))){switch(s.target){case"feature":this._targetType=d.PX;break;case"aggregate":this._targetType=d.xp}if("subtype"===s.type)for(const t in s.mapping){const e=s.mapping[t];if((0,a.pC)(e)&&(0,a.pC)(e.vvMapping))for(const t of e.vvMapping)this._bindAttribute(t)}else{if((0,a.pC)(s.vvMapping))for(const t of s.vvMapping)this._bindAttribute(t);if((0,a.pC)(s.attributeMapping))for(const t of s.attributeMapping)this._bindAttribute(t)}}}onTileData(t,e){if((0,a.Wi)(e.addOrUpdate))return;const s=e.addOrUpdate.getCursor();for(;s.next();){const t=s.getDisplayId();this.setAttributeData(t,s)}}async setHighlight(t,e){const s=this._getBlock(0),i=e.map((t=>(0,d.jL)(t)));s.lock(),s.unsetComponentAllTexels(0,1),s.setComponent(0,1,i),s.unlock(),this._idsToHighlight.clear();for(const r of t)this._idsToHighlight.add(r);await this.sendUpdates()}async updateFilters(t,e,s){const{service:i,spatialReference:n}=s,{filters:o}=e,a=o.map(((t,e)=>this._updateFilter(t,e,i,n)));(await Promise.all(a)).some((t=>t))&&(t.storage.filters=!0,(0,r.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,i){const r=(0,d.jL)(t);this._ensureSizeForTexel(r),this._getBlock(e).setData(t,s,i)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?c.uG:0}unsetAttributeData(t){const e=(0,d.jL)(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=(0,d.jL)(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==(0,d.vs)(t))return;const i=this._attributeComputeMap,r=this.config.supportsTextureFloat?1:2;i.size&&i.forEach(((t,i)=>{const n=i*r%4,a=Math.floor(i*r/4),h=this._getBlock(a+c.aK),u=t(e);if(this.config.supportsTextureFloat)h.setData(s,n,u);else if(u===c.AI)h.setData(s,n,255),h.setData(s,n+1,255);else{const t=(0,o.uZ)(Math.round(u),-32767,32766)+32768,e=255&t,i=(65280&t)>>8;h.setData(s,n,e),h.setData(s,n+1,i)}}))}sendUpdates(){if((0,r.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._notifyChange(),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=(0,h.hh)(),this._nextUpdate.promise;const t={blocks:this._blocks.map((t=>(0,a.pC)(t)?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()))}else(0,r.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued");this._notifyChange()};(0,r.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const s=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),s})).catch((t=>{if((0,h.D_)(t))return this._createResourcesPromise=null,this._createResources();this._notifyChange(),m.error(new i.Z("mapview-attribute-store","Encountered an error during client update",t))})),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){let e;if(null!=t.fieldIndex)t.normalizationField&&m.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),e=e=>e.getComputedNumericAtIndex(t.fieldIndex);else{if(!t.field)return;e=t.normalizationField?e=>{const s=e.readAttribute(t.normalizationField);return s?e.readAttribute(t.field)/s:null}:e=>e.readAttribute(t.field)}t.valueRepresentation&&(e=I(e,(e=>(0,p.qc)(e,t.valueRepresentation))));this._attributeComputeMap.set(t.binding,I(e,(t=>null===t||isNaN(t)||t===1/0||t===-1/0?c.AI:t)))}_createResources(){if((0,a.pC)(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(c.xl),this._getBlock(c.pU),y("Initializing AttributeStore");const t={shared:x.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:(0,a.Fd)(this._blocks,(t=>({textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType})))},e=this._client.initialize(t,this._signal).catch((t=>{(0,h.D_)(t)?this._createResourcesPromise=null:m.error(new i.Z("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=e,e.then((()=>(0,a.Wi)(this._createResourcesPromise)?this._createResources():void 0)),e}_getBlock(t){const e=this._blocks[t];if((0,a.pC)(e))return e;y("Initializing AttributeBlock at index ".concat(t));const s=x.sharedArrayBuffer,i=this._client.type,r=new b(s,i,this._size,this._blockDescriptors[t]);return this._blocks[t]=r,this._createResourcesPromise=null,r}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return y("Expanding block size to",t,this._blocks),(0,a.JR)(this._blocks,(e=>e.expand(t))),this._createResourcesPromise=null,this._size=t,0}return m.error(new i.Z("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,i){const r=this._filters[e],n=(0,a.pC)(r)&&r.hash;if(!r&&!t)return!1;if(n===JSON.stringify(t))return!1;if((0,a.Wi)(t)){if(!r)return!1;const t=1<<e+1,s=this._getBlock(0);return this._filters[e]=null,s.setComponentAllTexels(0,t),this.sendUpdates(),!0}const o=await this._getFilter(e,s);return await o.update(t,i),!0}async _getFilter(t,e){const i=this._filters[t];if((0,a.pC)(i))return i;const{default:r}=await s.e(7481).then(s.bind(s,37481)),n=new r({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new l.Z(e.fields)});return this._filters[t]=n,n}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=(0,d.KS)(t.getDisplayId());for(let r=0;r<this._filters.length;r++){const i=!!(s&1<<r),n=this._filters[r];e|=(!i||(0,a.Wi)(n)||n.check(t)?1:0)<<r}let i=0;if(this._idsToHighlight.size){const e=t.getObjectId();i=this.getHighlightFlag(e)}return e<<1|i}}},56078:(t,e,s)=>{s.d(e,{O:()=>a});var i=s(84328);class r{constructor(){this._freeIds=[],this._idCounter=1}createId(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,i.QS)(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}var n=s(44333);function o(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s)}class a{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new r,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(n.p.create(this._allocatedSize,i._I)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),o(this._numerics[t],e,0)}_ensureInstanceId(t){o(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),o(this._strings[t],e,null)}createDisplayId(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),(0,i.QS)(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&i._I)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&i._I,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&i._I,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&i._I,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&i._I,0,s)}getComputedNumericAtIndex(t,e){const s=t&i._I;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const r=t&i._I;this._ensureNumeric(e,r),this._numerics[e][r]=s}getInstanceId(t){const e=t&i._I;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&i._I;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&i._I;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const r=t&i._I;this._ensureString(e,r),this._strings[e][r]=s}getXMin(t){return this._bounds[4*(t&i._I)]}getYMin(t){return this._bounds[4*(t&i._I)+1]}getXMax(t){return this._bounds[4*(t&i._I)+2]}getYMax(t){return this._bounds[4*(t&i._I)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let r=1/0,n=1/0,a=-1/0,h=-1/0;s.forEachVertex(((t,e)=>{r=Math.min(r,t),n=Math.min(n,e),a=Math.max(a,t),h=Math.max(h,e)}));const u=t&i._I;return o(this._bounds,4*u+4,0),this._bounds[4*u]=r,this._bounds[4*u+1]=n,this._bounds[4*u+2]=a,this._bounds[4*u+3]=h,!0}}},92010:(t,e,s)=>{s.d(e,{s:()=>z});s(59486);var i,r,n,o=s(93169),a=s(92026),h=s(85403),u=s(83406),l=s(80457),c=s(44333),d=s(77981);let _=0;const f=null!==(i=(0,o.Z)("featurelayer-simplify-thresholds"))&&void 0!==i?i:[.5,.5,.5,.5],p=f[0],g=f[1],m=f[2],y=f[3],x=null!==(r=(0,o.Z)("featurelayer-simplify-payload-size-factors"))&&void 0!==r?r:[1,2,4],I=x[0],b=x[1],S=x[2],v=null!==(n=(0,o.Z)("featurelayer-simplify-mobile-factor"))&&void 0!==n?n:2,T=(0,o.Z)("esri-mobile");class z{constructor(t,e){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=t,this._layerSchema=e}static createInstance(){return _++,_=_>65535?0:_,_}get isEmpty(){return(0,a.pC)(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(t){this._level=t}getAreaSimplificationThreshold(t,e){let s=1;const i=T?v:1;e>4e6?s=S*i:e>1e6?s=b*i:e>5e5?s=I*i:e>1e5&&(s=i);let r=0;t>4e3?r=y*s:t>2e3?r=m*s:t>100?r=g:t>15&&(r=p);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),r*n}createQuantizedExtrudedQuad(t,e){return new l.Z([5],[t-1,e,1,-1,1,1,-1,1,-1,-1])}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this.setComputedNumericAtIndex(e,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,e){return this.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)}transform(t,e,s,i){const r=this.copy();return r._tx+=t,r._ty+=e,r._sx*=s,r._sy*=i,r}readAttribute(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=this._readAttribute(t,e);if(void 0!==s)return s;for(const i of this._joined){i.setIndex(this.getIndex());const s=i._readAttribute(t,e);if(void 0!==s)return s}}readAttributes(){const t=this._readAttributes();for(const e of this._joined){e.setIndex(this.getIndex());const s=e._readAttributes();for(const e of Object.keys(s))t[e]=s[e]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}geometry(){const t=this.readHydratedGeometry(),e=(0,u.di)(t,this.geometryType,this.hasZ,this.hasM),s=(0,d.im)(e);return s&&(s.spatialReference=this._arcadeSpatialReference),s}field(t){if(this.hasField(t))return this.readAttribute(t,!0);for(const e of this._joined)if(e.setIndex(this.getIndex()),e.hasField(t))return e._readAttribute(t,!0);throw new Error("Field ".concat(t," does not exist"))}setField(t,e){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(){if(!(arguments.length>0&&void 0!==arguments[0]&&arguments[0]))return JSON.stringify(this.readLegacyFeature());const t=this.readLegacyFeature();if(!t)return JSON.stringify(null);const e={geometry:t.geometry,attributes:{...t.attributes?t.attributes:{}}};for(const s in e.attributes){const t=e.attributes[s];t instanceof Date&&(e.attributes[s]=t.getTime())}return JSON.stringify(e)}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{attributes:this._readAttributes(),geometry:!0===(null===t||void 0===t?void 0:t.keepGeometryType)?this.geometry():this.geometry().toJSON()}}castAsJsonAsync(){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Promise.resolve(this.castAsJson(t))}removeIds(t){if((0,a.Wi)(this._objectIdToIndex)){const t=new Map,e=this.getCursor();for(;e.next();){const s=(0,a.s3)(e.getObjectId());t.set(s,e.getIndex())}this._objectIdToIndex=t}const e=this._objectIdToIndex;for(const s of t)e.has(s)&&this.removeAtIndex(e.get(s))}removeAtIndex(t){(0,a.Wi)(this._deleted)&&(this._deleted=c.p.create(this.getSize())),this._deleted.set(t)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return(0,a.Wi)(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=(0,a.Pt)(this.getQuantizationTransform(),null);return(0,h.Y)(new l.Z,t,this.hasM,this.hasZ,e)}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex}}},28941:(t,e,s)=>{s.d(e,{i:()=>a});var i=s(92026),r=s(83406),n=s(3182),o=s(92010);class a extends o.s{constructor(t,e,s){super(t,s),this._exceededTransferLimit=!1,this._featureIndex=-1,this._dateFields=new Set,this._geometryType=null===s||void 0===s?void 0:s.geometryType,this._features=e}static fromFeatures(t,e){const{objectIdField:s,geometryType:i}=e,n=(0,r.Yn)([],t,i,!1,!1,s);for(let r=0;r<n.length;r++)n[r].displayId=t[r].displayId;return a.fromOptimizedFeatures(n,e)}static fromFeatureSet(t,e){const s=(0,r.h_)(t,e.objectIdField);return a.fromOptimizedFeatureSet(s,e)}static fromOptimizedFeatureSet(t,e){const{features:s}=t,i=a.fromOptimizedFeatures(s,e);i._exceededTransferLimit=t.exceededTransferLimit,i._transform=t.transform;for(const r of t.fields)"esriFieldTypeDate"===r.type&&i._dateFields.add(r.name);return i}static fromOptimizedFeatures(t,e,s){const i=o.s.createInstance(),r=new a(i,t,e);return r._transform=s,r}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter((t=>!(t.objectId&&e.has(t.objectId))))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new a(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return(0,r.EI)(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return(0,r.di)(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return(0,i.Wi)(t)?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return(0,n.S6)(this._current)?(0,r.lz)(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return function(t){let{coords:e,lengths:s}=t,i=0;for(const r of s){for(let t=1;t<r;t++)e[2*(i+t)]+=e[2*(i+t)-2],e[2*(i+t)+1]+=e[2*(i+t)-1];i+=r}}(e),e}readHydratedGeometry(){const t=this._current.geometry;if((0,i.Wi)(t))return null;const e=t.clone();return(0,i.pC)(this._transform)&&(0,r.$g)(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!(0,n.S6)(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return(0,i.Wi)(e)?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!(0,n.S6)(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return(0,i.Wi)(e)?t:e.translate[1]-t*e.scale[1]}getX(){return(0,n.S6)(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return(0,n.S6)(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!(0,n.S6)(this._current)){if((0,i.pC)(this._current.centroid)){const[t,e]=this._current.centroid.coords;return this.createQuantizedExtrudedQuad(t,e)}return null}const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){return(0,n.S6)(this._current)?this._computeCentroid():this._current.centroid}hasField(t){return t in this._current.attributes||this.getFieldNames().map((t=>t.toLowerCase())).includes(t.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(t,e){const s=this._current.attributes[t];if(void 0!==s)return null!=s&&e&&this._dateFields.has(t)?new Date(s):s;const i=this.readAttributes(),r=t.toLocaleLowerCase().trim();for(const n in i)if(n.toLocaleLowerCase().trim()===r){const t=this._current.attributes[n];return null!=t&&e&&this._dateFields.has(n)?new Date(t):t}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}},44333:(t,e,s)=>{s.d(e,{p:()=>i});class i{constructor(t,e){this._mask=0,this._buf=t,this._mask=e}static fromBuffer(t,e){return new i(t,e)}static create(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4294967295;const s=new Uint32Array(Math.ceil(t/32));return new i(s,e)}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return!!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,i=e;for(;s%32&&s!==i;){if(this.has(s))return!0;s++}for(;i%32&&s!==i;){if(this.has(s))return!0;i--}if(s===i)return!1;for(let r=s/32;r!==i/32;r++)if(this._buf[r])return!0;return!1}set(t){const e=this._mask&t,s=this._getIndex(e),i=1<<e%32;this._buf[s]|=i}setRange(t,e){let s=t,i=e;for(;s%32&&s!==i;)this.set(s++);for(;i%32&&s!==i;)this.set(i--);if(s!==i)for(let r=s/32;r!==i/32;r++)this._buf[r]=4294967295}unset(t){const e=this._mask&t,s=this._getIndex(e),i=1<<e%32;this._buf[s]&=4294967295^i}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new i(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],i=32*e;if(s)for(;s;)1&s&&t(i),s>>>=1,i++}}countSet(){let t=0;return this.forEachSet((e=>{t++})),t}}},98290:(t,e,s)=>{s.d(e,{I:()=>_,qc:()=>u});var i=s(92026),r=s(17842),n=s(65800),o=s(94109),a=s(80613),h=s(18745);function u(t,e){if(!t||!e)return t;switch(e){case"radius":case"distance":return 2*t;case"diameter":case"width":return t;case"area":return Math.sqrt(t)}return t}function l(t){return t.map((t=>function(t){return{value:t.value,size:(0,r.t_)(t.size)}}(t)))}function c(t){if("string"==typeof t||"number"==typeof t)return(0,r.t_)(t);const e=t;return{type:"size",expression:e.expression,stops:l(e.stops)}}const d=t=>{const e=[],s=[],i=l(t),n=i.length;for(let a=0;a<6;a++){const t=i[Math.min(a,n-1)];e.push(t.value),s.push(null==t.size?o.AI:(0,r.F2)(t.size))}return{values:new Float32Array(e),sizes:new Float32Array(s)}};function _(t){const e=t&&t.length>0?{}:null,s=e?{}:null;if(!e)return{vvFields:e,vvRanges:s};for(const i of t)if(i.field&&(e[i.type]=i.field),"size"===i.type){s.size||(s.size={});const t=i;switch((0,h.a)(t)){case a.X.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:t.minDataValue,maxDataValue:t.maxDataValue,minSize:c(t.minSize),maxSize:c(t.maxSize)};break;case a.X.SIZE_SCALE_STOPS:s.size.scaleStops={stops:l(t.stops)};break;case a.X.SIZE_FIELD_STOPS:if(t.levels){const e={};for(const s in t.levels)e[s]=d(t.levels[s]);s.size.fieldStops={type:"level-dependent",levels:e}}else s.size.fieldStops={type:"static",...d(t.stops)};break;case a.X.SIZE_UNIT_VALUE:s.size.unitValue={unit:t.valueUnit,valueRepresentation:t.valueRepresentation}}}else if("color"===i.type)s.color=g(i);else if("opacity"===i.type)s.opacity=f(i);else if("rotation"===i.type){const t=i;s.rotation={type:t.rotationType}}return{vvFields:e,vvRanges:s}}function f(t){const e={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof t.field){if(!t.stops)return null;{if(t.stops.length>8)return null;const s=t.stops;for(let t=0;t<8;++t){const i=s[Math.min(t,s.length-1)];e.values[t]=i.value,e.opacities[t]=i.opacity}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const s=t.stops&&t.stops.length>=0&&t.stops[0].opacity;for(let t=0;t<8;t++)e.values[t]=1/0,e.opacities[t]=s}}return e}function p(t,e,s){t[4*e+0]=s.r/255,t[4*e+1]=s.g/255,t[4*e+2]=s.b/255,t[4*e+3]=s.a}function g(t){if((0,i.Wi)(t))return null;if(t.normalizationField)return null;const e={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof t.field){if(!t.stops)return null;{if(t.stops.length>8)return null;e.field=t.field;const s=t.stops;for(let t=0;t<8;++t){const i=s[Math.min(t,s.length-1)];e.values[t]=i.value,p(e.colors,t,i.color)}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const s=t.stops&&t.stops.length>=0&&t.stops[0].color;for(let t=0;t<8;t++)e.values[t]=1/0,p(e.colors,t,s)}}for(let s=0;s<32;s+=4)(0,n.pr)(e.colors,s,!0);return e}}}]);
//# sourceMappingURL=8348.52b1cf97.chunk.js.map