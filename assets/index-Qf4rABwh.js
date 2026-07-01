import{gF as k,g_ as z,gE as T,gG as M,mf as I,gL as P,g$ as B,gY as L,mq as C,mr as j,ms as D}from"./index-Da_qz1un.js";import{l as A}from"./graph_model-T1N_ayrv.js";import{g as H}from"./index-C0vqmb3-.js";import{R}from"./RendererCanvas-ZMRkw2u7.js";/**
    * @license
    * Copyright 2023 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    *//**
    * @license
    * Copyright 2023 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function g(t,o,r,i){return new(r||(r=Promise))((function(n,l){function a(c){try{d(i.next(c))}catch(e){l(e)}}function s(c){try{d(i.throw(c))}catch(e){l(e)}}function d(c){c.done?n(c.value):new r((function(e){e(c.value)})).then(a,s)}d((i=i.apply(t,[])).next())}))}function w(t,o){var r,i,n,l,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(d){return function(c){return(function(e){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(n=2&e[0]?i.return:e[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,e[1])).done)return n;switch(i=0,n&&(e=[2&e[0],n.value]),e[0]){case 0:case 1:n=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,i=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(n=a.trys,!((n=n.length>0&&n[n.length-1])||e[0]!==6&&e[0]!==2)){a=0;continue}if(e[0]===3&&(!n||e[1]>n[0]&&e[1]<n[3])){a.label=e[1];break}if(e[0]===6&&a.label<n[1]){a.label=n[1],n=e;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(e);break}n[2]&&a.ops.pop(),a.trys.pop();continue}e=o.call(t,a)}catch(u){e=[6,u],i=0}finally{r=n=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}})([d,c])}}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var K="https://tfhub.dev/tensorflow/tfjs-model/deeplab",U=513,S={ADE20K:[[0,0,0],[120,120,120],[180,120,120],[6,230,230],[80,50,50],[4,200,3],[120,120,80],[140,140,140],[204,5,255],[230,230,230],[4,250,7],[224,5,255],[235,255,7],[150,5,61],[120,120,70],[8,255,51],[255,6,82],[143,255,140],[204,255,4],[255,51,7],[204,70,3],[0,102,200],[61,230,250],[255,6,51],[11,102,255],[255,7,71],[255,9,224],[9,7,230],[220,220,220],[255,9,92],[112,9,255],[8,255,214],[7,255,224],[255,184,6],[10,255,71],[255,41,10],[7,255,255],[224,255,8],[102,8,255],[255,61,6],[255,194,7],[255,122,8],[0,255,20],[255,8,41],[255,5,153],[6,51,255],[235,12,255],[160,150,20],[0,163,255],[140,140,140],[250,10,15],[20,255,0],[31,255,0],[255,31,0],[255,224,0],[153,255,0],[0,0,255],[255,71,0],[0,235,255],[0,173,255],[31,0,255],[11,200,200],[255,82,0],[0,255,245],[0,61,255],[0,255,112],[0,255,133],[255,0,0],[255,163,0],[255,102,0],[194,255,0],[0,143,255],[51,255,0],[0,82,255],[0,255,41],[0,255,173],[10,0,255],[173,255,0],[0,255,153],[255,92,0],[255,0,255],[255,0,245],[255,0,102],[255,173,0],[255,0,20],[255,184,184],[0,31,255],[0,255,61],[0,71,255],[255,0,204],[0,255,194],[0,255,82],[0,10,255],[0,112,255],[51,0,255],[0,194,255],[0,122,255],[0,255,163],[255,153,0],[0,255,10],[255,112,0],[143,255,0],[82,0,255],[163,255,0],[255,235,0],[8,184,170],[133,0,255],[0,255,92],[184,0,255],[255,0,31],[0,184,255],[0,214,255],[255,0,112],[92,255,0],[0,224,255],[112,224,255],[70,184,160],[163,0,255],[153,0,255],[71,255,0],[255,0,163],[255,204,0],[255,0,143],[0,255,235],[133,255,0],[255,0,235],[245,0,255],[255,0,122],[255,245,0],[10,190,212],[214,255,0],[0,204,255],[20,0,255],[255,255,0],[0,153,255],[0,41,255],[0,255,204],[41,0,255],[41,255,0],[173,0,255],[0,245,255],[71,0,255],[122,0,255],[0,255,184],[0,92,255],[184,255,0],[0,133,255],[255,214,0],[25,194,194],[102,255,0],[92,0,255]],CITYSCAPES:[[128,64,128],[244,35,232],[70,70,70],[102,102,156],[190,153,153],[153,153,153],[250,170,30],[220,220,0],[107,142,35],[152,251,152],[70,130,180],[220,20,60],[255,0,0],[0,0,142],[0,0,70],[0,60,100],[0,80,100],[0,0,230],[119,11,32]],PASCAL:[[0,0,0],[128,0,0],[0,128,0],[128,128,0],[0,0,128],[128,0,128],[0,128,128],[128,128,128],[64,0,0],[192,0,0],[64,128,0],[192,128,0],[64,0,128],[192,0,128],[64,128,128],[192,128,128],[0,64,0],[128,64,0],[0,192,0],[128,192,0],[0,64,128],[128,64,128],[0,192,128],[128,192,128],[64,64,0],[192,64,0],[64,192,0],[192,192,0],[64,64,128],[192,64,128],[64,192,128],[192,192,128],[0,0,64],[128,0,64],[0,128,64],[128,128,64],[0,0,192],[128,0,192],[0,128,192],[128,128,192],[64,0,64],[192,0,64],[64,128,64],[192,128,64],[64,0,192],[192,0,192],[64,128,192],[192,128,192],[0,64,64],[128,64,64],[0,192,64],[128,192,64],[0,64,192],[128,64,192],[0,192,192],[128,192,192],[64,64,64],[192,64,64],[64,192,64],[192,192,64],[64,64,192],[192,64,192],[64,192,192],[192,192,192],[32,0,0],[160,0,0],[32,128,0],[160,128,0],[32,0,128],[160,0,128],[32,128,128],[160,128,128],[96,0,0],[224,0,0],[96,128,0],[224,128,0],[96,0,128],[224,0,128],[96,128,128],[224,128,128],[32,64,0],[160,64,0],[32,192,0],[160,192,0],[32,64,128],[160,64,128],[32,192,128],[160,192,128],[96,64,0],[224,64,0],[96,192,0],[224,192,0],[96,64,128],[224,64,128],[96,192,128],[224,192,128],[32,0,64],[160,0,64],[32,128,64],[160,128,64],[32,0,192],[160,0,192],[32,128,192],[160,128,192],[96,0,64],[224,0,64],[96,128,64],[224,128,64],[96,0,192],[224,0,192],[96,128,192],[224,128,192],[32,64,64],[160,64,64],[32,192,64],[160,192,64],[32,64,192],[160,64,192],[32,192,192],[160,192,192],[96,64,64],[224,64,64],[96,192,64],[224,192,64],[96,64,192],[224,64,192],[96,192,192],[224,192,192],[0,32,0],[128,32,0],[0,160,0],[128,160,0],[0,32,128],[128,32,128],[0,160,128],[128,160,128],[64,32,0],[192,32,0],[64,160,0],[192,160,0],[64,32,128],[192,32,128],[64,160,128],[192,160,128],[0,96,0],[128,96,0],[0,224,0],[128,224,0],[0,96,128],[128,96,128],[0,224,128],[128,224,128],[64,96,0],[192,96,0],[64,224,0],[192,224,0],[64,96,128],[192,96,128],[64,224,128],[192,224,128],[0,32,64],[128,32,64],[0,160,64],[128,160,64],[0,32,192],[128,32,192],[0,160,192],[128,160,192],[64,32,64],[192,32,64],[64,160,64],[192,160,64],[64,32,192],[192,32,192],[64,160,192],[192,160,192],[0,96,64],[128,96,64],[0,224,64],[128,224,64],[0,96,192],[128,96,192],[0,224,192],[128,224,192],[64,96,64],[192,96,64],[64,224,64],[192,224,64],[64,96,192],[192,96,192],[64,224,192],[192,224,192],[32,32,0],[160,32,0],[32,160,0],[160,160,0],[32,32,128],[160,32,128],[32,160,128],[160,160,128],[96,32,0],[224,32,0],[96,160,0],[224,160,0],[96,32,128],[224,32,128],[96,160,128],[224,160,128],[32,96,0],[160,96,0],[32,224,0],[160,224,0],[32,96,128],[160,96,128],[32,224,128],[160,224,128],[96,96,0],[224,96,0],[96,224,0],[224,224,0],[96,96,128],[224,96,128],[96,224,128],[224,224,128],[32,32,64],[160,32,64],[32,160,64],[160,160,64],[32,32,192],[160,32,192],[32,160,192],[160,160,192],[96,32,64],[224,32,64],[96,160,64],[224,160,64],[96,32,192],[224,32,192],[96,160,192],[224,160,192],[32,96,64],[160,96,64],[32,224,64],[160,224,64],[32,96,192],[160,96,192],[32,224,192],[160,224,192],[96,96,64],[224,96,64],[96,224,64],[224,224,64],[96,96,192],[224,96,192],[96,224,192],[224,224,192]]},E={PASCAL:["background","aeroplane","bicycle","bird","boat","bottle","bus","car","cat","chair","cow","dining table","dog","horse","motorbike","person","potted plant","sheep","sofa","train","TV"],CITYSCAPES:["road","sidewalk","building","wall","fence","pole","traffic light","traffic sign","vegetation","terrain","sky","person","rider","car","truck","bus","train","motorcycle","bicycle"],ADE20K:["background","wall","building","sky","floor","tree","ceiling","road","bed","windowpane","grass","cabinet","sidewalk","person","earth","door","table","mountain","plant","curtain","chair","car","water","painting","sofa","shelf","house","sea","mirror","rug","field","armchair","seat","fence","desk","rock","wardrobe","lamp","bathtub","railing","cushion","base","box","column","signboard","chest","counter","sand","sink","skyscraper","fireplace","refrigerator","grandstand","path","stairs","runway","case","pool","pillow","screen","stairway","river","bridge","bookcase","blind","coffee","toilet","flower","book","hill","bench","countertop","stove","palm","kitchen","computer","swivel","boat","bar","arcade","hovel","bus","towel","light","truck","tower","chandelier","awning","streetlight","booth","television","airplane","dirt","apparel","pole","land","bannister","escalator","ottoman","bottle","buffet","poster","stage","van","ship","fountain","conveyer","canopy","washer","plaything","swimming","stool","barrel","basket","waterfall","tent","bag","minibike","cradle","oven","ball","food","step","tank","trade","microwave","pot","animal","bicycle","lake","dishwasher","screen","blanket","sculpture","hood","sconce","vase","traffic","tray","ashcan","fan","pier","screen","plate","monitor","bulletin","shower","radiator","glass","clock","flag"]};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x(t,o){return""+K+"/"+(o===4?t+"/1/default/1/model.json":t+"/1/quantized/"+o+"/1/model.json")+"?tfjs-format=file"}function Y(t){if(t==="pascal")return S.PASCAL;if(t==="ade20k")return S.ADE20K;if(t==="cityscapes")return S.CITYSCAPES;throw new Error("SemanticSegmentation cannot be constructed with an invalid base model "+t+". Try one of 'pascal', 'cityscapes' and 'ade20k'.")}function N(t){if(t==="pascal")return E.PASCAL;if(t==="ade20k")return E.ADE20K;if(t==="cityscapes")return E.CITYSCAPES;throw new Error("SemanticSegmentation cannot be constructed with an invalid base model "+t+". Try one of 'pascal', 'cityscapes' and 'ade20k'.")}function O(t,o,r,i){return g(this,void 0,void 0,(function(){var n,l,a,s,d,c,e,u,p,b,f,m,y,h;return w(this,(function(v){switch(v.label){case 0:if(t.length<o.length)throw new Error("The colormap must be expansive enough to encode each label. Aborting, since the given colormap has length "+t.length+", but there are "+o.length+" labels.");return n=r.shape,l=n[0],a=n[1],s=D([l,a,3],"int32"),[4,r.array()];case 1:for(d=v.sent(),c=new Set,e=0;e<l;++e)for(u=0;u<a;++u)h=d[e][u],c.add(h),s.set(t[h][0],e,u,0),s.set(t[h][1],e,u,1),s.set(t[h][2],e,u,2);return p=s.toTensor(),[4,j(p,i)];case 2:for(b=v.sent(),C(p),f={},m=0,y=Array.from(c);m<y.length;m++)h=y[m],f[o[h]]=t[h];return[2,{legend:f,segmentationMap:b}]}}))}))}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F(t){return t===void 0&&(t={base:"pascal",quantizationBytes:2}),g(this,void 0,void 0,(function(){var o;return w(this,(function(r){switch(r.label){case 0:if(L==null)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");if(t.base){if(["pascal","cityscapes","ade20k"].indexOf(t.base)===-1)throw new Error("SemanticSegmentation cannot be constructed with an invalid base model "+t.base+". Try one of 'pascal', 'cityscapes' and 'ade20k'.");if([1,2,4].indexOf(t.quantizationBytes)===-1)throw new Error("Only quantization to 1, 2 or 4 bytes is supported.")}else if(!t.modelUrl)throw new Error("SemanticSegmentation can be constructed either by passing the weights URL or one of the supported base model names from 'pascal', 'cityscapes' and 'ade20k',together with the degree of quantization (either 1, 2 or 4).Aborting, since neither has been provided.");return[4,A(t.modelUrl||x(t.base,t.quantizationBytes))];case 1:return o=r.sent(),[2,new q(o,t.base)]}}))}))}var q=(function(){function t(o,r){this.model=o,this.base=r}return t.prototype.predict=function(o){var r=this;return k((function(){var i=z((function(n){return k((function(){var l=n instanceof T?n:M(n),a=l.shape,s=a[0],d=a[1],c=U/Math.max(d,s),e=Math.round(s*c),u=Math.round(d*c);return I(P.resizeBilinear(l,[e,u]))}))})(o),"int32");return B(r.model.execute(i))}))},t.prototype.segment=function(o,r){return r===void 0&&(r={}),g(this,void 0,void 0,(function(){var i,n,l,a,s,d,c,e,u,p,b=this;return w(this,(function(f){switch(f.label){case 0:if(!(r.colormap&&r.labels||this.base))throw new Error("Calling the 'segment' method requires either the 'base' attribute to be defined (e.g. 'pascal', 'cityscapes' or'ade20k'), or 'colormap' and 'labels' options to be set. Aborting, since neither has been provided.");return r.colormap&&r.labels||(r.colormap=Y(this.base),r.labels=N(this.base)),i=r.colormap,n=r.labels,l=r.canvas,a=k((function(){return b.predict(o)})),s=a.shape,d=s[0],c=s[1],[4,O(i,n,a,l)];case 1:return e=f.sent(),u=e.legend,p=e.segmentationMap,C(a),[2,{legend:u,height:d,width:c,segmentationMap:p}]}}))}))},t.prototype.dispose=function(){return g(this,void 0,void 0,(function(){return w(this,(function(o){return this.model&&this.model.dispose(),[2]}))}))},t})();class X{constructor(o){this.divHost=document.getElementById(o);const r=document.createElement("div");this.divHost.appendChild(r),this.renderer=new V(r)}destroy(){this.renderer.destroy();try{for(;this.divHost&&this.divHost.lastElementChild;){const o=this.divHost.lastElementChild;this.divHost.removeChild(o)}}catch(o){console.error("Error removing child elements:",o)}}}const G=async()=>await F({base:"ade20k",quantizationBytes:2}),J=async()=>{const r=x("pascal",2),i=await A(r);return new q(i)};class V extends R{constructor(o){super(o),this.accList=[],this.lossList=[],this.init()}async init(){this.loadImg()}async loadImg(o="https://raw.githubusercontent.com/NamjuLee/data/master/img/bg/zoom-James-River-Kayaking.jpg"){H(o).then(r=>{r&&(this.divHost.insertBefore(r,this.canvas),G().then(i=>{i.segment(r).then(n=>{const{legend:l,height:a,width:s,segmentationMap:d}=n,c=new ImageData(d,s,a);this.canvas.width=s,this.canvas.height=a,this.ctx.putImageData(c,0,0);const e=document.createElement("div");e.textContent=JSON.stringify(l),this.divHost.appendChild(e)})}),J().then(()=>{}))}),this.isStatic=!0}}export{V as Renderer,X as Solution};
