"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[2263],{45956:(e,t,i)=>{i.d(t,{JZ:()=>p,RL:()=>v,eY:()=>g});var s=i(92026),r=i(66978),n=i(22753),a=i(23588),o=i(15245),l=i(87422),h=i(10978),d=i(49800),u=i(8548),c=i(51378);function p(e){return e&&"render"in e}function v(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class g extends l.s{constructor(){var e,t;let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1?arguments[1]:void 0;super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=null!==(e=s.immutable)&&void 0!==e&&e,this.requestRenderOnSourceChangedEnabled=null===(t=s.requestRenderOnSourceChangedEnabled)||void 0===t||t,this.source=i,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),(0,s.pC)(this._uploadStatus)&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width),this.invalidateTexture())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){(0,s.pC)(this._uploadStatus)&&this._uploadStatus.controller.abort();const i=new AbortController,n=(0,r.hh)();return(0,r.$F)(t,(()=>i.abort())),(0,r.$F)(i,(e=>n.reject(e))),this._uploadStatus={controller:i,resolver:n},this.source=e,n.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,n.g)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/e.resolution,a=r*this.width,l=r*this.height,h=Math.PI*this.rotation/180;(0,n.h)(t,t,(0,o.f)(i,s)),(0,n.h)(t,t,(0,o.f)(a/2,l/2)),(0,n.r)(t,t,-h),(0,n.h)(t,t,(0,o.f)(-a/2,-l/2)),(0,n.k)(t,t,(0,o.f)(a,l)),(0,n.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture(e){let{context:t,painter:i}=e;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const n=p(a=this.source)?a instanceof h.Z?(0,s.yw)(a.getRenderedRasterPixels(),(e=>e.renderedRasterPixels)):v(a):a;var a;try{if((0,s.pC)(this._uploadStatus)){const{controller:e,resolver:t}=this._uploadStatus,s={signal:e.signal},{width:r,height:a}=this,o=this._texture,l=i.textureUploadManager;await l.enqueueTextureUpdate({data:n,texture:o,width:r,height:a},s),t.resolve(),this._uploadStatus=null}else this._texture.setData(n);this.ready()}catch(o){(0,r.H9)(o)}}onDetach(){this.destroy()}_createTransforms(){return{dvs:(0,a.c)()}}_createTexture(e){const t=this.immutable&&e.type===d.zO.WEBGL2;return new c.x(e,{target:u.No.TEXTURE_2D,pixelFormat:u.VI.RGBA,internalFormat:t?u.lP.RGBA8:u.VI.RGBA,dataType:u.Br.UNSIGNED_BYTE,wrapMode:u.e8.CLAMP_TO_EDGE,isImmutable:t,width:this._sourceWidth,height:this._sourceHeight})}}},9849:(e,t,i)=>{i.d(t,{s:()=>u});var s=i(65156),r=i(23588),n=i(45956),a=i(72900);class o extends a.I{constructor(e,t,i,s,r,a){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;super(e,t,i,s,r,a),this.bitmap=new n.eY(o,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,r.c)(),tileMat3:(0,r.c)()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var l=i(98533),h=i(80613),d=i(55067);class u extends d.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Ue)(),e),i=this._tileInfoView.getTileResolution(e.level),[r,n]=this._tileInfoView.tileInfo.size;return new o(e,i,t[0],t[3],r,n)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[l.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:h.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===h.jx.MAP&&super.doRender(e)}}},10978:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(92026);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,s.Wi)(t))return;const i=this.filter({pixelBlock:t});if((0,s.Wi)(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},55067:(e,t,i)=>{i.d(t,{Z:()=>h});var s=i(93169),r=i(80613),n=i(64510),a=i(60418),o=i(40655);const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class h extends n.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},72900:(e,t,i)=>{i.d(t,{I:()=>a});var s=i(22753),r=i(87422),n=i(73828);class a extends r.s{constructor(e,t,i,s,r,a){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:a;super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n.Z(e),this.resolution=t,this.x=i,this.y=s,this.width=r,this.height=a,this.rangeX=o,this.rangeY=l}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,[r,n]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*t,o=this.height/this.rangeY*t;(0,s.s)(i,a,0,0,0,o,0,r,n,1),(0,s.m)(this.transforms.dvs,e.displayViewMat3,i)}}},4321:(e,t,i)=>{i.d(t,{Y:()=>a});var s=i(27366),r=(i(32718),i(25243),i(63780),i(10064),i(93169),i(69912)),n=i(9849);const a=e=>{let t=class extends e{attach(){this.view.timeline.record("".concat(this.layer.title," (BitmapTileLayer) Attach")),this._bitmapView=new n.s(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var e;this.container.removeChild(this._bitmapView),null===(e=this._bitmapView)||void 0===e||e.removeAllChildren()}};return t=(0,s._)([(0,r.j)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},95986:(e,t,i)=>{i.d(t,{y:()=>T});var s=i(27366),r=i(40281),n=i(60354),a=i(10064),o=i(94172),l=i(49861),h=(i(63780),i(25243),i(69912)),d=i(33624),u=i(46784);let c=class extends u.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,l.Cb)({readOnly:!0})],c.prototype,"version",null),c=(0,s._)([(0,h.j)("esri.views.layers.support.ClipArea")],c);const p=c;var v;let g=v=class extends p{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new v({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),g=v=(0,s._)([(0,h.j)("esri.views.layers.support.ClipRect")],g);const y=g;i(59486);var m,f=i(32238),_=i(77981),b=i(53866),w=i(80885);const R={base:f.Z,key:"type",typeMap:{extent:b.Z,polygon:w.Z}};let x=m=class extends p{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new m({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,l.Cb)({types:R,json:{read:_.im,write:!0}})],x.prototype,"geometry",void 0),x=m=(0,s._)([(0,h.j)("esri.views.layers.support.Geometry")],x);const C=x;let S=class extends p{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),S=(0,s._)([(0,h.j)("esri.views.layers.support.Path")],S);const P=S,I=r.Z.ofType({key:"type",base:null,typeMap:{rect:y,path:P,geometry:C}}),T=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new I,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([(0,o.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.tX),(0,o.YP)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),o.tX),(0,o.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.tX),(0,o.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.tX),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.tX),(0,o.YP)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),o.tX)]),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this.updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}};return(0,s._)([(0,l.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,l.Cb)({type:I,set(e){const t=(0,n.Z)(e,this._get("clips"),I);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updating",null),(0,s._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),t=(0,s._)([(0,h.j)("esri.views.2d.layers.LayerView2D")],t),t}},34622:(e,t,i)=>{function s(e,t,i,s){if(i.level===s.level)return t;const n=e.tileInfo.size,a=e.getTileResolution(i.level),o=e.getTileResolution(s.level);let l=e.getLODInfoAt(s.level);const h=l.getXForColumn(s.col),d=l.getYForRow(s.row);l=e.getLODInfoAt(i.level);const u=l.getXForColumn(i.col),c=l.getYForRow(i.row),p=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/n[0],v=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/n[1],g=Math.round(p*((h-u)/a)),y=Math.round(v*(-(d-c)/a)),m=Math.round(p*n[0]*(o/a)),f=Math.round(v*n[1]*(o/a)),_=r(n);return _.getContext("2d").drawImage(t,g,y,m,f,0,0,n[0],n[1]),_}function r(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,{V:()=>r,i:()=>s})},67581:(e,t,i)=>{i.d(t,{Z:()=>v});var s=i(27366),r=i(85015),n=i(91505),a=i(41691),o=i(79056),l=i(32718),h=i(92026),d=i(67426),u=i(49861),c=(i(63780),i(25243),i(69912));let p=class extends((0,a.p)((0,o.IG)((0,d.v)(n.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(t,"')"),e)}}))}get fullOpacity(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,u.Cb)()],p.prototype,"fullOpacity",null),(0,s._)([(0,u.Cb)()],p.prototype,"layer",void 0),(0,s._)([(0,u.Cb)()],p.prototype,"parent",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],p.prototype,"suspended",null),(0,s._)([(0,u.Cb)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,s._)([(0,u.Cb)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,s._)([(0,u.Cb)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,s._)([(0,u.Cb)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,s._)([(0,u.Cb)()],p.prototype,"visible",null),(0,s._)([(0,u.Cb)()],p.prototype,"view",void 0),p=(0,s._)([(0,c.j)("esri.views.layers.LayerView")],p);const v=p},13107:(e,t,i)=>{i.d(t,{Z:()=>h});var s=i(27366),r=i(32718),n=i(66978),a=i(94172),o=i(49861),l=(i(63780),i(25243),i(69912));const h=e=>{let t=class extends e{initialize(){this.handles.add((0,a.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.D_)(e)||r.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,s._)([(0,o.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=2263.e14262d7.chunk.js.map