"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[9512],{59512:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(74165),i=r(15861),a=r(1413),o=r(15671),s=r(43144),l=r(60136),u=r(29388),c=r(27366),h=r(76200),d=r(10064),p=r(92026),v=r(97642),f=r(66978),y=r(35995),_=r(49861),m=r(63780),k=(r(25243),r(38511)),g=r(69912),b=r(90724),w=r(10323),Z=r(17775),C=r(11936),S=r(6061),T=r(29598),x=r(45948),L=r(37762),I=r(42537),D=r(32718),V=r(31009),j=function(){function e(t,r,n,i){var s=this,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};(0,o.Z)(this,e),this._mainMethod=r,this._transferLists=n,this._listeners=[],this._promise=(0,V.bA)(t,(0,a.Z)((0,a.Z)({},l),{},{schedule:i})).then((function(e){if(void 0===s._thread){s._thread=e,s._promise=null,l.hasInitialize&&s.broadcast({},"initialize");var t,r=(0,L.Z)(s._listeners);try{for(r.s();!(t=r.n()).done;){var n=t.value;s._connectListener(n)}}catch(i){r.e(i)}finally{r.f()}}else e.close()})),this._promise.catch((function(e){return D.Z.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(t," worker: ").concat(e))}))}return(0,s.Z)(e,[{key:"on",value:function(e,t){var r=this,n={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(n),this._connectListener(n),(0,I.kB)((function(){n.removed=!0,(0,m.Od)(r._listeners,n),r._thread&&(0,p.pC)(n.threadHandle)&&n.threadHandle.remove()}))}},{key:"destroy",value:function(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}},{key:"invoke",value:function(e,t){return this.invokeMethod(this._mainMethod,e,t)}},{key:"invokeMethod",value:function(e,t,r){var n=this;if(this._thread){var i=this._transferLists[e],a=i?i(t):[];return this._thread.invoke(e,t,{transferList:a,signal:r})}return this._promise?this._promise.then((function(){return(0,f.k_)(r),n.invokeMethod(e,t,r)})):Promise.reject(null)}},{key:"broadcast",value:function(e,t){var r=this;return this._thread?Promise.all(this._thread.broadcast(t,e)).then((function(){})):this._promise?this._promise.then((function(){return r.broadcast(e,t)})):Promise.reject()}},{key:"promise",get:function(){return this._promise}},{key:"_connectListener",value:function(e){this._thread&&this._thread.on(e.eventName,e.callback).then((function(t){e.removed||(e.threadHandle=t)}))}}]),e}(),E=function(e){(0,l.Z)(r,e);var t=(0,u.Z)(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return(0,o.Z)(this,r),(e=t.call(this,"LercWorker","_decode",{_decode:function(e){return[e.buffer]}},n,{strategy:"dedicated"})).schedule=n,e.ref=0,e}return(0,s.Z)(r,[{key:"decode",value:function(e,t,r){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}},{key:"release",value:function(){var e=this;--this.ref<=0&&(O.forEach((function(t,r){t===e&&O.delete(r)})),this.destroy())}}]),r}(j),O=new Map;function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=O.get((0,p.Wg)(e));return t||((0,p.pC)(e)?(t=new E((function(t){return e.schedule(t)})),O.set(e,t)):(t=new E,O.set(null,t))),++t.ref,t}var M=function(e){(0,l.Z)(c,e);var t=(0,u.Z)(c);function c(){var e;(0,o.Z)(this,c);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).copyright=null,e.heightModelInfo=null,e.path=null,e.minScale=void 0,e.maxScale=void 0,e.opacity=1,e.operationalLayerType="ArcGISTiledElevationServiceLayer",e.sourceJSON=null,e.type="elevation",e.url=null,e.version=null,e._lercDecoder=A(),e}return(0,s.Z)(c,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"destroy",value:function(){this._lercDecoder=(0,p.RY)(this._lercDecoder)}},{key:"readVersion",value:function(e,t){var r=t.currentVersion;return r||(r=9.3),r}},{key:"load",value:function(e){var t=this,r=(0,p.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new d.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(f.r9).then((function(){return t._fetchImageService(r)}))),Promise.resolve(this)}},{key:"fetchTile",value:function(e,t,r,n){var i=this,a=(0,p.pC)((n=n||{signal:null}).signal)?n.signal:n.signal=(new AbortController).signal,o={responseType:"array-buffer",signal:a},s={noDataValue:n.noDataValue,returnFileInfo:!0};return this.load().then((function(){return i._fetchTileAvailability(e,t,r,n)})).then((function(){return(0,h.default)(i.getTileUrl(e,t,r),o)})).then((function(e){return i._lercDecoder.decode(e.data,s,a)})).then((function(e){var t;return{values:e.pixelData,width:e.width,height:e.height,maxZError:null===(t=e.fileInfo)||void 0===t?void 0:t.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}}))}},{key:"getTileUrl",value:function(e,t,r){var n=!this.tilemapCache&&this.supportsBlankTile,i=(0,y.B7)((0,a.Z)((0,a.Z)({},this.parsedUrl.query),{},{blankTile:!n&&null}));return"".concat(this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(r).concat(i?"?"+i:"")}},{key:"queryElevation",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,i){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(5887).then(r.bind(r,35887));case 2:return a=e.sent,o=a.ElevationQuery,(0,f.k_)(i),e.abrupt("return",(new o).query(this,t,i));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"createElevationSampler",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,i){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(5887).then(r.bind(r,35887));case 2:return a=e.sent,o=a.ElevationQuery,(0,f.k_)(i),e.abrupt("return",(new o).createSampler(this,t,i));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_fetchTileAvailability",value:function(e,t,r,n){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,n):Promise.resolve("unknown")}},{key:"_fetchImageService",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",this.sourceJSON);case 2:return i={query:(0,a.Z)({f:"json"},this.parsedUrl.query),responseType:"json",signal:t},e.next=5,(0,h.default)(this.parsedUrl.path,i);case 5:(o=e.sent).ssl&&(this.url=null===(r=this.url)||void 0===r?void 0:r.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),c}((0,Z.Z)((0,C.Y)((0,S.q)((0,T.I)((0,v.R)(w.Z))))));(0,c._)([(0,_.Cb)({json:{read:{source:"copyrightText"}}})],M.prototype,"copyright",void 0),(0,c._)([(0,_.Cb)({readOnly:!0,type:b.Z})],M.prototype,"heightModelInfo",void 0),(0,c._)([(0,_.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),(0,c._)([(0,_.Cb)({type:["show","hide"]})],M.prototype,"listMode",void 0),(0,c._)([(0,_.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],M.prototype,"minScale",void 0),(0,c._)([(0,_.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],M.prototype,"maxScale",void 0),(0,c._)([(0,_.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],M.prototype,"opacity",void 0),(0,c._)([(0,_.Cb)({type:["ArcGISTiledElevationServiceLayer"]})],M.prototype,"operationalLayerType",void 0),(0,c._)([(0,_.Cb)()],M.prototype,"sourceJSON",void 0),(0,c._)([(0,_.Cb)({json:{read:!1},value:"elevation",readOnly:!0})],M.prototype,"type",void 0),(0,c._)([(0,_.Cb)(x.HQ)],M.prototype,"url",void 0),(0,c._)([(0,_.Cb)()],M.prototype,"version",void 0),(0,c._)([(0,k.r)("version",["currentVersion"])],M.prototype,"readVersion",null),(M=(0,c._)([(0,g.j)("esri.layers.ElevationLayer")],M)).prototype.fetchTile.__isDefault__=!0;var N=M}}]);
//# sourceMappingURL=9512.e237bd65.chunk.js.map