"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[165],{60165:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var r,i=a(27366),o=a(76200),l=a(10064),s=a(43404),n=a(92026),p=a(97642),u=a(49861),d=(a(63780),a(25243),a(69912)),g=a(78952),c=a(53866),h=a(65156),y=a(10323),b=a(6693),v=a(71684),m=a(56811),M=a(22824);const f=new(a(87960).f)("0/0/0",0,0,0,void 0);let w=r=class extends((0,b.h)((0,m.M)((0,v.Q)(y.Z)))){constructor(){super(...arguments),this.tileInfo=M.Z.create({spatialReference:g.Z.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new c.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,g.Z.WebMercator),this.spatialReference=g.Z.WebMercator}getTileBounds(e,t,a,r){const i=r||(0,h.Ue)();return f.level=e,f.row=t,f.col=a,f.extent=i,this.tileInfo.updateTileInfo(f),f.extent=void 0,i}fetchTile(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:i}=r,l=this.getTileUrl(e,t,a),s={responseType:"image",signal:i,query:{...this.refreshParameters}};return(0,o.default)(null!==l&&void 0!==l?l:"",s).then((e=>e.data))}async fetchImageBitmapTile(e,t,a){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=i;if(this.fetchTile!==r.prototype.fetchTile)return createImageBitmap(await this.fetchTile(e,t,a,i));const s=this.getTileUrl(e,t,a),n={responseType:"blob",signal:l,query:{...this.refreshParameters}},{data:p}=await(0,o.default)(null!==s&&void 0!==s?s:"",n);return createImageBitmap(p)}getTileUrl(){throw new l.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,i._)([(0,u.Cb)({type:M.Z})],w.prototype,"tileInfo",void 0),(0,i._)([(0,u.Cb)({type:["show","hide"]})],w.prototype,"listMode",void 0),(0,i._)([(0,u.Cb)({readOnly:!0,value:"base-tile"})],w.prototype,"type",void 0),(0,i._)([(0,u.Cb)({nonNullable:!0})],w.prototype,"fullExtent",void 0),(0,i._)([(0,u.Cb)()],w.prototype,"spatialReference",void 0),w=r=(0,i._)([(0,d.j)("esri.layers.BaseTileLayer")],w);const _=w;var C=a(6061);const T=new s.X({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let S=class extends((0,b.h)((0,C.q)((0,p.R)(_)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new M.Z({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:g.Z.WebMercator},spatialReference:g.Z.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return(0,n.pC)(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return T.toJSON(this.style)}get bingLogo(){return(0,n.pC)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new l.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,a){if(!this.loaded||(0,n.Wi)(this.bingMetadata))return null;const r=this.bingMetadata.resourceSets[0].resources[0],i=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],o=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",i).replace("{quadkey}",o)}async fetchAttributionData(){return this.load().then((()=>(0,n.Wi)(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,o.default)("".concat("https://dev.virtualearth.net","/REST/v1/Imagery/Metadata/").concat(e),{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new l.Z("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new l.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new l.Z("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new l.Z("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){var e;return(0,o.default)(null!==(e=this.portalUrl)&&void 0!==e?e:"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new l.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new l.Z("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,a){let r="";for(let i=e;i>0;i--){let e=0;const o=1<<i-1;0!=(a&o)&&(e+=1),0!=(t&o)&&(e+=2),r+=e.toString()}return r}};(0,i._)([(0,u.Cb)({json:{read:!1,write:!1},value:null})],S.prototype,"bingMetadata",null),(0,i._)([(0,u.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],S.prototype,"type",void 0),(0,i._)([(0,u.Cb)({type:M.Z})],S.prototype,"tileInfo",void 0),(0,i._)([(0,u.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"copyright",null),(0,i._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],S.prototype,"key",void 0),(0,i._)([(0,u.Cb)({type:T.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:T.read}}})],S.prototype,"style",void 0),(0,i._)([(0,u.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],S.prototype,"operationalLayerType",null),(0,i._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],S.prototype,"culture",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],S.prototype,"region",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0,read:!0}})],S.prototype,"portalUrl",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{write:!1,read:!1}})],S.prototype,"hasAttributionData",void 0),(0,i._)([(0,u.Cb)({type:String,readOnly:!0})],S.prototype,"bingLogo",null),S=(0,i._)([(0,d.j)("esri.layers.BingMapsLayer")],S);const Z=S}}]);
//# sourceMappingURL=165.38a2110f.chunk.js.map