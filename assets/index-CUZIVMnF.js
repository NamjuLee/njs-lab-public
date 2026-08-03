import{gF as x,gK as ct,gR as ne,gQ as ft,g_ as V,mt as nt,g$ as z,gT as It,mu as ut,gY as Pt,gE as Ft,mv as re,gL as ht,mw as ae,k9 as Q,mx as At,my as Lt,mz as Nt,gM as rt,gG as se,gH as oe,mA as ie,mB as de,mC as Dt,mD as ue,k7 as le,gO as _t}from"./index-BbnlkhC2.js";import{g as ce}from"./index-C0vqmb3-.js";import{R as fe}from"./RendererCanvas-ZMRkw2u7.js";import"./register_all_kernels-30RSDsEw.js";import{l as Wt}from"./graph_model-Brp6OEQa.js";/**
 * @license
 * Copyright 2023 Google LLC.
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
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var lt=function(t,n){return lt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var s in r)r.hasOwnProperty(s)&&(e[s]=r[s])},lt(t,n)};function kt(t,n){lt(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}var I=function(){return I=Object.assign||function(n){for(var e,r=1,s=arguments.length;r<s;r++){e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},I.apply(this,arguments)};function P(t,n,e,r){function s(a){return a instanceof e?a:new e(function(i){i(a)})}return new(e||(e=Promise))(function(a,i){function d(l){try{o(r.next(l))}catch(c){i(c)}}function u(l){try{o(r.throw(l))}catch(c){i(c)}}function o(l){l.done?a(l.value):s(l.value).then(d,u)}o((r=r.apply(t,[])).next())})}function F(t,n){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,s,a,i;return i={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function d(o){return function(l){return u([o,l])}}function u(o){if(r)throw new TypeError("Generator is already executing.");for(;e;)try{if(r=1,s&&(a=o[0]&2?s.return:o[0]?s.throw||((a=s.return)&&a.call(s),0):s.next)&&!(a=a.call(s,o[1])).done)return a;switch(s=0,a&&(o=[o[0]&2,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return e.label++,{value:o[1],done:!1};case 5:e.label++,s=o[1],o=[0];continue;case 7:o=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){e.label=o[1];break}if(o[0]===6&&e.label<a[1]){e.label=a[1],a=o;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(o);break}a[2]&&e.ops.pop(),e.trys.pop();continue}o=n.call(t,e)}catch(l){o=[6,l],s=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}/**
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
 */function Ct(t){var n=t.shape[2],e=ue(t,2),r=rt(e,[-1]);return le(r,n)}function he(t,n){return _t(t,n)}function G(t,n){return x(function(){return V(ae(t,Q(n)),"int32")})}function pe(t,n){var e=n.shape,r=e[0],s=e[1],a=e[2];return x(function(){var i=Ct(n),d=nt(Lt(0,a,1,"int32"),1),u=V(Nt(i,d),"int32"),o=rt(u,[r,s]),l=ft(o,Q(1,"int32"));return ct(he(l,t),Q(1,"int32"))})}function me(t){var n=t.shape,e=n[0],r=n[1],s=n[2];return x(function(){var a=Ct(t),i=nt(Lt(0,s,1,"int32"),1),d=V(Nt(a,i),"int32");return rt(d,[e,r])})}/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
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
 */var zt=(function(){function t(n,e){this.model=n,this.outputStride=e;var r=this.model.inputs[0].shape;ut(r[1]===-1&&r[2]===-1,function(){return"Input shape [".concat(r[1],", ").concat(r[2],"] ")+"must both be equal to or -1"})}return t.prototype.predict=function(n){var e=this;return x(function(){var r=e.preprocessInput(V(n,"float32")),s=nt(r,0),a=e.model.predict(s),i=a.map(function(u){return z(u,[0])}),d=e.nameOutputResults(i);return{heatmapScores:It(d.heatmap),offsets:d.offsets,displacementFwd:d.displacementFwd,displacementBwd:d.displacementBwd,segmentation:d.segmentation,partHeatmaps:d.partHeatmaps,longOffsets:d.longOffsets,partOffsets:d.partOffsets}})},t.prototype.dispose=function(){this.model.dispose()},t})();/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
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
 */var ve=(function(t){kt(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}return n.prototype.preprocessInput=function(e){return x(function(){return ct(ne(e,127.5),1)})},n.prototype.nameOutputResults=function(e){var r=e[0],s=e[1],a=e[2],i=e[3],d=e[4],u=e[5],o=e[6],l=e[7];return{offsets:r,segmentation:s,partHeatmaps:a,longOffsets:i,heatmap:d,displacementFwd:u,displacementBwd:o,partOffsets:l}},n})(zt);/**
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
 */var at=["nose","leftEye","rightEye","leftEar","rightEar","leftShoulder","rightShoulder","leftElbow","rightElbow","leftWrist","rightWrist","leftHip","rightHip","leftKnee","rightKnee","leftAnkle","rightAnkle"],H=at.length,et=at.reduce(function(t,n,e){return t[n]=e,t},{}),ge=[["leftHip","leftShoulder"],["leftElbow","leftShoulder"],["leftElbow","leftWrist"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["rightHip","rightShoulder"],["rightElbow","rightShoulder"],["rightElbow","rightWrist"],["rightHip","rightKnee"],["rightKnee","rightAnkle"],["leftShoulder","rightShoulder"],["leftHip","rightHip"]],we=[["nose","leftEye"],["leftEye","leftEar"],["nose","rightEye"],["rightEye","rightEar"],["nose","leftShoulder"],["leftShoulder","leftElbow"],["leftElbow","leftWrist"],["leftShoulder","leftHip"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["nose","rightShoulder"],["rightShoulder","rightElbow"],["rightElbow","rightWrist"],["rightShoulder","rightHip"],["rightHip","rightKnee"],["rightKnee","rightAnkle"]];ge.map(function(t){var n=t[0],e=t[1];return[et[n],et[e]]});/**
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
 */function pt(t,n,e){var r=t[0],s=t[1],a=n[0],i=n[1],d=e.top,u=e.bottom,o=e.left,l=e.right,c=a/(d+u+r),f=i/(o+l+s);return[f,c]}function Vt(t,n,e,r){return{y:r.get(t,n,e),x:r.get(t,n,e+H)}}function qt(t,n,e){var r=t.heatmapY,s=t.heatmapX,a=t.id,i=Vt(r,s,a,e),d=i.y,u=i.x;return{x:t.heatmapX*n+u,y:t.heatmapY*n+d}}function mt(t,n,e){return t<n?n:t>e?e:t}function ye(t,n,e,r){var s=e-t,a=r-n;return s*s+a*a}function vt(t,n){return{x:t.x+n.x,y:t.y+n.y}}/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
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
 */function Se(t,n,e){e===void 0&&(e=.3);for(var r=0,s=0,a=0;a<t.length;a++)n.keypoints[a].score>e&&(s+=1,r+=Math.pow(t[a].x-n.keypoints[a].position.x,2)+Math.pow(t[a].y-n.keypoints[a].position.y,2));return s===0?r=1/0:r=r/s,r}function be(t,n,e,r){var s=n[0],a=n[1],i=e[0],d=e[1],u=Math.round(((s+t.y+1)*d-1)/r),o=Math.round(((a+t.x+1)*i-1)/r);return{x:o,y:u}}function Ee(t,n,e,r,s,a,i){for(var d=i[0],u=i[1],o=e(t),l=o.y*r+o.x,c=s[H*(2*l)+n],f=s[H*(2*l+1)+n],h=t.y+c,p=t.x+f,m=0;m<a;m++){h=Math.min(h,d-1),p=Math.min(p,u-1);var w=e({x:p,y:h}),S=w.y*r+w.x;c=s[H*(2*S)+n],f=s[H*(2*S+1)+n],h=h+c,p=p+f}return{x:p,y:h}}function Kt(t,n,e,r,s,a,i,d,u,o){for(var l=s[0],c=s[1],f=a[0],h=a[1],p=d[0],m=d[1],w=[],S=function(M){return be(M,[l,c],[f,h],u)},g=0;g<r;g++){var b=Ee(t,g,S,i,n,o,[p,m]);w.push(b)}for(var v=-1,y=1/0,E=0;E<e.length;E++){var R=Se(w,e[E]);R<y&&(v=E,y=R)}return v}function Ut(t,n){var e=t[0],r=t[1],s=Math.round((r-1)/n+1),a=Math.round((e-1)/n+1);return[s,a]}function Re(t,n,e,r,s,a,i,d,u,o){var l=i[0],c=i[1];o===void 0&&(o=5);for(var f=e.map(function(M){return new Uint8Array(r*s).fill(0)}),h=d.top,p=d.left,m=pt([r,s],[l,c],d),w=m[0],S=m[1],g=Ut([l,c],a)[0],b=0;b<r;b+=1)for(var v=0;v<s;v+=1){var y=b*s+v,E=t[y];if(E===1){var R=Kt({x:v,y:b},n,e,o,[h,p],[w,S],g,[r,s],a,u);R>=0&&(f[R][y]=1)}}return f}function Me(t,n,e,r,s,a,i,d,u,o,l){var c=d[0],f=d[1];l===void 0&&(l=5);for(var h=r.map(function(T){return new Int32Array(s*a).fill(-1)}),p=u.top,m=u.left,w=pt([s,a],[c,f],u),S=w[0],g=w[1],b=Ut([c,f],i)[0],v=0;v<s;v+=1)for(var y=0;y<a;y+=1){var E=v*a+y,R=t[E];if(R===1){var M=Kt({x:y,y:v},n,r,l,[p,m],[S,g],b,[s,a],i,o);M>=0&&(h[M][E]=e[E])}}return h}/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
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
 */function Qt(t,n,e,r,s,a,i,d,u,o,l){for(var c=i[0],f=i[1],h=t.shape,p=h[0],m=h[1],w=n.shape.slice(0,2),S=w[0],g=w[1],b=rt(n,[S,g,2,H]),v=new Float32Array(l*H*3).fill(0),y=0;y<e.length;y++)for(var E=y*H*3,R=e[y],M=0;M<H;M++){var T=R.keypoints[M],B=E+M*3;v[B]=T.score,v[B+1]=T.position.y,v[B+2]=T.position.x}var O=pt([r,s],[c,f],d),A=O[0],L=O[1],N=ie(v,[l,H,3]),D=d.top,_=d.left,q={variableNames:["segmentation","longOffsets","poses"],outputShape:[p,m],userCode:`
    int convertToPositionInOutput(int pos, int pad, float scale, int stride) {
      return round(((float(pos + pad) + 1.0) * scale - 1.0) / float(stride));
    }

    float convertToPositionInOutputFloat(
        int pos, int pad, float scale, int stride) {
      return ((float(pos + pad) + 1.0) * scale - 1.0) / float(stride);
    }

    float dist(float x1, float y1, float x2, float y2) {
      return pow(x1 - x2, 2.0) + pow(y1 - y2, 2.0);
    }

    float sampleLongOffsets(float h, float w, int d, int k) {
      float fh = fract(h);
      float fw = fract(w);
      int clH = int(ceil(h));
      int clW = int(ceil(w));
      int flH = int(floor(h));
      int flW = int(floor(w));
      float o11 = getLongOffsets(flH, flW, d, k);
      float o12 = getLongOffsets(flH, clW, d, k);
      float o21 = getLongOffsets(clH, flW, d, k);
      float o22 = getLongOffsets(clH, clW, d, k);
      float o1 = mix(o11, o12, fw);
      float o2 = mix(o21, o22, fw);
      return mix(o1, o2, fh);
    }

    int findNearestPose(int h, int w) {
      float prob = getSegmentation(h, w);
      if (prob < 1.0) {
        return -1;
      }

      // Done(Tyler): convert from output space h/w to strided space.
      float stridedH = convertToPositionInOutputFloat(
        h, `.concat(D,", ").concat(L,", ").concat(a,`);
      float stridedW = convertToPositionInOutputFloat(
        w, `).concat(_,", ").concat(A,", ").concat(a,`);

      float minDist = 1000000.0;
      int iMin = -1;
      for (int i = 0; i < `).concat(l,`; i++) {
        float curDistSum = 0.0;
        int numKpt = 0;
        for (int k = 0; k < `).concat(H,`; k++) {
          float dy = sampleLongOffsets(stridedH, stridedW, 0, k);
          float dx = sampleLongOffsets(stridedH, stridedW, 1, k);

          float y = float(h) + dy;
          float x = float(w) + dx;

          for (int s = 0; s < `).concat(u,`; s++) {
            int yRounded = round(min(y, float(`).concat(r-1,`)));
            int xRounded = round(min(x, float(`).concat(s-1,`)));

            float yStrided = convertToPositionInOutputFloat(
              yRounded, `).concat(D,", ").concat(L,", ").concat(a,`);
            float xStrided = convertToPositionInOutputFloat(
              xRounded, `).concat(_,", ").concat(A,", ").concat(a,`);

            float dy = sampleLongOffsets(yStrided, xStrided, 0, k);
            float dx = sampleLongOffsets(yStrided, xStrided, 1, k);

            y = y + dy;
            x = x + dx;
          }

          float poseScore = getPoses(i, k, 0);
          float poseY = getPoses(i, k, 1);
          float poseX = getPoses(i, k, 2);
          if (poseScore > `).concat(o,`) {
            numKpt = numKpt + 1;
            curDistSum = curDistSum + dist(x, y, poseX, poseY);
          }
        }
        if (numKpt > 0 && curDistSum / float(numKpt) < minDist) {
          minDist = curDistSum / float(numKpt);
          iMin = i;
        }
      }
      return iMin;
    }

    void main() {
        ivec2 coords = getOutputCoords();
        int nearestPose = findNearestPose(coords[0], coords[1]);
        setOutput(float(nearestPose));
      }
  `)},W=de();return W.compileAndRun(q,[t,b,N])}/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
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
 */function Be(t,n){return x(function(){return V(Dt(t,Q(n)),"int32")})}function Te(t,n,e){return x(function(){return ct(_t(V(Dt(t,Q(e)),"int32"),ft(n,1)),1)})}function Gt(){return oe()==="webgl"}function Oe(t,n,e,r,s,a,i,d,u,o,l,c){var f=i[0],h=i[1];return u===void 0&&(u=.2),o===void 0&&(o=8),l===void 0&&(l=.3),c===void 0&&(c=10),P(this,void 0,void 0,function(){var p,m,w,S,g;return F(this,function(b){switch(b.label){case 0:return p=e.filter(function(v){return v.score>=u}),Gt()?(w=x(function(){var v=Qt(t,n,p,r,s,a,[f,h],d,o,l,c),y=At().makeTensorFromDataId(v.dataId,v.shape,v.dtype);return p.map(function(E,R){return Be(y,R)})}),[4,Promise.all(w.map(function(v){return v.data()}))]):[3,2];case 1:return m=b.sent(),w.forEach(function(v){return v.dispose()}),[3,5];case 2:return[4,t.data()];case 3:return S=b.sent(),[4,n.data()];case 4:g=b.sent(),m=Re(S,g,p,r,s,a,[f,h],d,o),b.label=5;case 5:return[2,m.map(function(v,y){return{data:v,pose:p[y],width:s,height:r}})]}})})}function xe(t,n,e,r,s,a,i,d,u,o,l,c,f){var h=d[0],p=d[1];return o===void 0&&(o=.2),l===void 0&&(l=8),c===void 0&&(c=.3),f===void 0&&(f=10),P(this,void 0,void 0,function(){var m,w,S,g,b,v;return F(this,function(y){switch(y.label){case 0:return m=r.filter(function(E){return E.score>=o}),Gt()?(S=x(function(){var E=Qt(t,n,m,s,a,i,[h,p],u,l,c,f),R=At().makeTensorFromDataId(E.dataId,E.shape,E.dtype);return m.map(function(M,T){return Te(R,e,T)})}),[4,Promise.all(S.map(function(E){return E.data()}))]):[3,2];case 1:return w=y.sent(),S.forEach(function(E){return E.dispose()}),[3,6];case 2:return[4,t.data()];case 3:return g=y.sent(),[4,n.data()];case 4:return b=y.sent(),[4,e.data()];case 5:v=y.sent(),w=Me(g,b,v,m,s,a,i,[h,p],u,l),y.label=6;case 6:return[2,w.map(function(E,R){return{pose:m[R],data:E,height:s,width:a}})]}})})}/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
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
 */function ot(t){return Math.floor(t/2)}var He=(function(){function t(n,e){this.priorityQueue=new Array(n),this.numberOfElements=-1,this.getElementValue=e}return t.prototype.enqueue=function(n){this.priorityQueue[++this.numberOfElements]=n,this.swim(this.numberOfElements)},t.prototype.dequeue=function(){var n=this.priorityQueue[0];return this.exchange(0,this.numberOfElements--),this.sink(0),this.priorityQueue[this.numberOfElements+1]=null,n},t.prototype.empty=function(){return this.numberOfElements===-1},t.prototype.size=function(){return this.numberOfElements+1},t.prototype.all=function(){return this.priorityQueue.slice(0,this.numberOfElements+1)},t.prototype.max=function(){return this.priorityQueue[0]},t.prototype.swim=function(n){for(;n>0&&this.less(ot(n),n);)this.exchange(n,ot(n)),n=ot(n)},t.prototype.sink=function(n){for(;2*n<=this.numberOfElements;){var e=2*n;if(e<this.numberOfElements&&this.less(e,e+1)&&e++,!this.less(n,e))break;this.exchange(n,e),n=e}},t.prototype.getValueAt=function(n){return this.getElementValue(this.priorityQueue[n])},t.prototype.less=function(n,e){return this.getValueAt(n)<this.getValueAt(e)},t.prototype.exchange=function(n,e){var r=this.priorityQueue[n];this.priorityQueue[n]=this.priorityQueue[e],this.priorityQueue[e]=r},t})();/**
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
 */function Ie(t,n,e,r,s,a){for(var i=a.shape,d=i[0],u=i[1],o=!0,l=Math.max(e-s,0),c=Math.min(e+s+1,d),f=l;f<c;++f){for(var h=Math.max(r-s,0),p=Math.min(r+s+1,u),m=h;m<p;++m)if(a.get(f,m,t)>n){o=!1;break}if(!o)break}return o}function Pe(t,n,e){for(var r=e.shape,s=r[0],a=r[1],i=r[2],d=new He(s*a*i,function(f){var h=f.score;return h}),u=0;u<s;++u)for(var o=0;o<a;++o)for(var l=0;l<i;++l){var c=e.get(u,o,l);c<t||Ie(l,c,u,o,n,e)&&d.enqueue({score:c,part:{heatmapY:u,heatmapX:o,id:l}})}return d}/**
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
 */var Yt=we.map(function(t){var n=t[0],e=t[1];return[et[n],et[e]]}),it=Yt.map(function(t){var n=t[1];return n}),gt=Yt.map(function(t){var n=t[0];return n});function Fe(t,n,e){var r=e.shape[2]/2;return{y:e.get(n.y,n.x,t),x:e.get(n.y,n.x,r+t)}}function dt(t,n,e,r){return{y:mt(Math.round(t.y/n),0,e-1),x:mt(Math.round(t.x/n),0,r-1)}}function wt(t,n,e,r,s,a,i,d){d===void 0&&(d=2);for(var u=r.shape,o=u[0],l=u[1],c=dt(n.position,a,o,l),f=Fe(t,c,i),h=vt(n.position,f),p=h,m=0;m<d;m++){var w=dt(p,a,o,l),S=Vt(w.y,w.x,e,s);p=vt({x:w.x*a,y:w.y*a},{x:S.x,y:S.y})}var g=dt(p,a,o,l),b=r.get(g.y,g.x,e);return{position:p,part:at[e],score:b}}function Ae(t,n,e,r,s,a){var i=n.shape[2],d=it.length,u=new Array(i),o=t.part,l=t.score,c=qt(o,r,e);u[o.id]={score:l,part:at[o.id],position:c};for(var f=d-1;f>=0;--f){var h=it[f],p=gt[f];u[h]&&!u[p]&&(u[p]=wt(f,u[h],p,n,e,r,a))}for(var f=0;f<d;++f){var h=gt[f],p=it[f];u[h]&&!u[p]&&(u[p]=wt(f,u[h],p,n,e,r,s))}return u}/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
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
 */function Xt(t,n,e,r){var s=e.x,a=e.y;return t.some(function(i){var d=i.keypoints,u=d[r].position;return ye(a,s,u.y,u.x)<=n})}function Le(t,n,e){var r=e.reduce(function(s,a,i){var d=a.position,u=a.score;return Xt(t,n,d,i)||(s+=u),s},0);return r/=e.length}var Ne=1;function Y(t,n,e,r,s,a,i,d){i===void 0&&(i=.5),d===void 0&&(d=20);for(var u=[],o=Pe(i,Ne,t),l=d*d;u.length<a&&!o.empty();){var c=o.dequeue(),f=qt(c.part,s,n);if(!Xt(u,l,f,c.part.id)){var h=Ae(c,t,n,s,e,r),p=Le(u,l,h);u.push({keypoints:h,score:p})}}return u}/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var De=[-123.15,-115.9,-103.06],_e=(function(t){kt(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}return n.prototype.preprocessInput=function(e){return ft(e,De)},n.prototype.nameOutputResults=function(e){var r=e[0],s=e[1],a=e[2],i=e[3],d=e[4],u=e[5],o=e[6],l=e[7];return{offsets:d,segmentation:o,partHeatmaps:u,longOffsets:i,heatmap:a,displacementFwd:s,displacementBwd:r,partOffsets:l}},n})(zt);/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var yt="https://storage.googleapis.com/tfjs-models/savedmodel/bodypix/resnet50/",St="https://storage.googleapis.com/tfjs-models/savedmodel/bodypix/mobilenet/";function We(t,n){var e="model-stride".concat(t,".json");return n===4?yt+"float/"+e:yt+"quant".concat(n,"/")+e}function ke(t,n,e){var r={1:"100",.75:"075",.5:"050"},s="model-stride".concat(t,".json");return e===4?St+"float/".concat(r[n],"/")+s:St+"quant".concat(e,"/").concat(r[n],"/")+s}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 *
 * =============================================================================
 */var k;function Ce(t){if("offsetHeight"in t&&t.offsetHeight!==0&&"offsetWidth"in t&&t.offsetWidth!==0)return[t.offsetHeight,t.offsetWidth];if(t.height!=null&&t.width!=null)return[t.height,t.width];throw new Error("HTMLImageElement must have height and width attributes set.")}function ze(t){return t.hasAttribute("height")&&t.hasAttribute("width")?[t.height,t.width]:[t.videoHeight,t.videoWidth]}function K(t){if(typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas||typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement)return Ce(t);if(typeof ImageData<"u"&&t instanceof ImageData)return[t.height,t.width];if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)return ze(t);if(t instanceof Ft)return[t.shape[0],t.shape[1]];throw new Error("error: Unknown input type: ".concat(t,"."))}function Ve(t,n){return(t-1)%n===0}function bt(t,n){return Ve(t,n)?t:Math.floor(t/n)*n+1}var U={low:"low",medium:"medium",high:"high",full:"full"},qe=(k={},k[U.low]=.25,k[U.medium]=.5,k[U.high]=.75,k[U.full]=1,k),Et=.1,Rt=2;function Ke(t){if(typeof t=="string"){var n=qe[t];return ut(typeof n=="number",function(){return"string value of inputResolution must be one of ".concat(Object.values(U).join(",")," but was ").concat(t,".")}),n}else return ut(typeof t=="number"&&t<=Rt&&t>=Et,function(){return"inputResolution must be a string or number between ".concat(Et," and ").concat(Rt,", but ")+"was ".concat(t)}),t}function X(t,n,e){var r=e[0],s=e[1],a=Ke(t);return[bt(r*a,n),bt(s*a,n)]}function Ue(t){return t instanceof Ft?t:se(t)}function C(t,n,e,r,s){var a=n[0],i=n[1],d=e[0],u=e[1],o=r[0],l=o[0],c=o[1],f=r[1],h=f[0],p=f[1];return x(function(){var m=ht.resizeBilinear(t,[d,u],!0);return m=It(m),Qe(m,[a,i],[[l,c],[h,p]])})}function Qe(t,n,e){var r=n[0],s=n[1],a=e[0],i=a[0],d=a[1],u=e[1],o=u[0],l=u[1];return x(function(){var c=nt(t);return z(ht.cropAndResize(c,[[i/(r+i+d-1),o/(s+o+l-1),(i+r-1)/(r+i+d-1),(o+s-1)/(s+o+l-1)]],[0],[r,s]),[0])})}function J(t,n){var e=n[0],r=n[1],s=K(t),a=s[0],i=s[1],d=r/e,u=i/a,o=[0,0,0,0],l=o[0],c=o[1],f=o[2],h=o[3];u<d?(l=0,c=0,f=Math.round(.5*(d*a-i)),h=Math.round(.5*(d*a-i))):(l=Math.round(.5*(1/d*i-a)),c=Math.round(.5*(1/d*i-a)),f=0,h=0);var p=x(function(){var m=Ue(t);return m=re(m,[[l,c],[f,h],[0,0]]),ht.resizeBilinear(m,[e,r])});return{resized:p,padding:{top:l,left:f,right:h,bottom:c}}}function j(t){return P(this,void 0,void 0,function(){return F(this,function(n){return[2,Promise.all(t.map(function(e){return e.buffer()}))]})})}function Ge(t,n,e,r,s){return r===void 0&&(r=0),s===void 0&&(s=0),{score:t.score,keypoints:t.keypoints.map(function(a){var i=a.score,d=a.part,u=a.position;return{score:i,part:d,position:{x:u.x*e+s,y:u.y*n+r}}})}}function Ye(t,n,e,r,s){return r===void 0&&(r=0),s===void 0&&(s=0),e===1&&n===1&&r===0&&s===0?t:t.map(function(a){return Ge(a,n,e,r,s)})}function Z(t,n,e,r,s){var a=n[0],i=n[1],d=e[0],u=e[1],o=(a+r.top+r.bottom)/d,l=(i+r.left+r.right)/u,c=Ye(t,o,l,-r.top,-r.left);return c}var Jt={architecture:"MobileNetV1",outputStride:16,quantBytes:4,multiplier:.75},Mt=["MobileNetV1","ResNet50"],Bt={MobileNetV1:[8,16,32],ResNet50:[32,16]},Tt={MobileNetV1:[.5,.75,1],ResNet50:[1]},Ot=[1,2,4];function Xe(t){if(t=t||Jt,t.architecture==null&&(t.architecture="MobileNetV1"),Mt.indexOf(t.architecture)<0)throw new Error("Invalid architecture ".concat(t.architecture,". ")+"Should be one of ".concat(Mt));if(t.outputStride==null&&(t.outputStride=16),Bt[t.architecture].indexOf(t.outputStride)<0)throw new Error("Invalid outputStride ".concat(t.outputStride,". ")+"Should be one of ".concat(Bt[t.architecture]," ")+"for architecture ".concat(t.architecture,"."));if(t.multiplier==null&&(t.multiplier=1),Tt[t.architecture].indexOf(t.multiplier)<0)throw new Error("Invalid multiplier ".concat(t.multiplier,". ")+"Should be one of ".concat(Tt[t.architecture]," ")+"for architecture ".concat(t.architecture,"."));if(t.quantBytes==null&&(t.quantBytes=4),Ot.indexOf(t.quantBytes)<0)throw new Error("Invalid quantBytes ".concat(t.quantBytes,". ")+"Should be one of ".concat(Ot," ")+"for architecture ".concat(t.architecture,"."));return t}var $={flipHorizontal:!1,internalResolution:"medium",segmentationThreshold:.7,maxDetections:10,scoreThreshold:.4,nmsRadius:20},tt={flipHorizontal:!1,internalResolution:"medium",segmentationThreshold:.7,maxDetections:10,scoreThreshold:.4,nmsRadius:20,minKeypointScore:.3,refineSteps:10};function xt(t){var n=t.segmentationThreshold,e=t.maxDetections,r=t.scoreThreshold,s=t.nmsRadius;if(n<0||n>1)throw new Error("segmentationThreshold ".concat(n,". ")+"Should be in range [0.0, 1.0]");if(e<=0)throw new Error("Invalid maxDetections ".concat(e,". ")+"Should be > 0");if(r<0||r>1)throw new Error("Invalid scoreThreshold ".concat(r,". ")+"Should be in range [0.0, 1.0]");if(s<=0)throw new Error("Invalid nmsRadius ".concat(s,"."))}function Ht(t){var n=t.segmentationThreshold,e=t.maxDetections,r=t.scoreThreshold,s=t.nmsRadius,a=t.minKeypointScore,i=t.refineSteps;if(n<0||n>1)throw new Error("segmentationThreshold ".concat(n,". ")+"Should be in range [0.0, 1.0]");if(e<=0)throw new Error("Invalid maxDetections ".concat(e,". ")+"Should be > 0");if(r<0||r>1)throw new Error("Invalid scoreThreshold ".concat(r,". ")+"Should be in range [0.0, 1.0]");if(s<=0)throw new Error("Invalid nmsRadius ".concat(s,"."));if(a<0||a>1)throw new Error("Invalid minKeypointScore ".concat(a,".")+"Should be in range [0.0, 1.0]");if(i<=0||i>20)throw new Error("Invalid refineSteps ".concat(i,".")+"Should be in range [1, 20]")}var jt=(function(){function t(n){this.baseModel=n}return t.prototype.predictForPersonSegmentation=function(n){var e=this.baseModel.predict(n),r=e.segmentation,s=e.heatmapScores,a=e.offsets,i=e.displacementFwd,d=e.displacementBwd;return{segmentLogits:r,heatmapScores:s,offsets:a,displacementFwd:i,displacementBwd:d}},t.prototype.predictForPersonSegmentationAndPart=function(n){var e=this.baseModel.predict(n),r=e.segmentation,s=e.partHeatmaps,a=e.heatmapScores,i=e.offsets,d=e.displacementFwd,u=e.displacementBwd;return{segmentLogits:r,partHeatmapLogits:s,heatmapScores:a,offsets:i,displacementFwd:d,displacementBwd:u}},t.prototype.predictForMultiPersonInstanceSegmentationAndPart=function(n){var e=this.baseModel.predict(n),r=e.segmentation,s=e.longOffsets,a=e.heatmapScores,i=e.offsets,d=e.displacementFwd,u=e.displacementBwd,o=e.partHeatmaps;return{segmentLogits:r,longOffsets:s,heatmapScores:a,offsets:i,displacementFwd:d,displacementBwd:u,partHeatmaps:o}},t.prototype.segmentPersonActivation=function(n,e,r){var s=this;r===void 0&&(r=.5);var a=K(n),i=a[0],d=a[1],u=X(e,this.baseModel.outputStride,[i,d]),o=J(n,u),l=o.resized,c=o.padding,f=x(function(){var g=s.predictForPersonSegmentation(l),b=g.segmentLogits,v=g.heatmapScores,y=g.offsets,E=g.displacementFwd,R=g.displacementBwd,M=l.shape,T=M[0],B=M[1],O=C(b,[i,d],[T,B],[[c.top,c.bottom],[c.left,c.right]]);return{segmentation:G(z(O),r),heatmapScores:v,offsets:y,displacementFwd:E,displacementBwd:R}}),h=f.segmentation,p=f.heatmapScores,m=f.offsets,w=f.displacementFwd,S=f.displacementBwd;return l.dispose(),{segmentation:h,heatmapScores:p,offsets:m,displacementFwd:w,displacementBwd:S,padding:c,internalResolutionHeightAndWidth:u}},t.prototype.segmentPerson=function(n,e){return e===void 0&&(e=$),P(this,void 0,void 0,function(){var r,s,a,i,d,u,o,l,c,f,h,p,m,w,S,g,b,v;return F(this,function(y){switch(y.label){case 0:return e=I(I({},$),e),xt(e),r=this.segmentPersonActivation(n,e.internalResolution,e.segmentationThreshold),s=r.segmentation,a=r.heatmapScores,i=r.offsets,d=r.displacementFwd,u=r.displacementBwd,o=r.padding,l=r.internalResolutionHeightAndWidth,c=s.shape,f=c[0],h=c[1],[4,s.data()];case 1:return p=y.sent(),s.dispose(),[4,j([a,i,d,u])];case 2:return m=y.sent(),w=m[0],S=m[1],g=m[2],b=m[3],v=Y(w,S,g,b,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),v=Z(v,[f,h],l,o),a.dispose(),i.dispose(),d.dispose(),u.dispose(),[2,{height:f,width:h,data:p,allPoses:v}]}})})},t.prototype.segmentMultiPerson=function(n,e){return e===void 0&&(e=tt),P(this,void 0,void 0,function(){var r,s,a,i,d,u,o,l,c,f,h,p,m,w,S,g,b,v,y,E,R,M=this;return F(this,function(T){switch(T.label){case 0:return e=I(I({},tt),e),Ht(e),r=K(n),s=r[0],a=r[1],i=X(e.internalResolution,this.baseModel.outputStride,[s,a]),d=J(n,i),u=d.resized,o=d.padding,l=x(function(){var B=M.predictForMultiPersonInstanceSegmentationAndPart(u),O=B.segmentLogits,A=B.longOffsets,L=B.heatmapScores,N=B.offsets,D=B.displacementFwd,_=B.displacementBwd,q=C(O,[s,a],i,[[o.top,o.bottom],[o.left,o.right]]),W;W=A;var st=G(z(q),e.segmentationThreshold);return{segmentation:st,longOffsets:W,heatmapScoresRaw:L,offsetsRaw:N,displacementFwdRaw:D,displacementBwdRaw:_}}),c=l.segmentation,f=l.longOffsets,h=l.heatmapScoresRaw,p=l.offsetsRaw,m=l.displacementFwdRaw,w=l.displacementBwdRaw,[4,j([h,p,m,w])];case 1:return S=T.sent(),g=S[0],b=S[1],v=S[2],y=S[3],E=Y(g,b,v,y,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),E=Z(E,[s,a],i,o),[4,Oe(c,f,E,s,a,this.baseModel.outputStride,i,o,e.scoreThreshold,e.refineSteps,e.minKeypointScore,e.maxDetections)];case 2:return R=T.sent(),u.dispose(),c.dispose(),f.dispose(),h.dispose(),p.dispose(),m.dispose(),w.dispose(),[2,R]}})})},t.prototype.segmentPersonPartsActivation=function(n,e,r){var s=this;r===void 0&&(r=.5);var a=K(n),i=a[0],d=a[1],u=X(e,this.baseModel.outputStride,[i,d]),o=J(n,u),l=o.resized,c=o.padding,f=x(function(){var g=s.predictForPersonSegmentationAndPart(l),b=g.segmentLogits,v=g.partHeatmapLogits,y=g.heatmapScores,E=g.offsets,R=g.displacementFwd,M=g.displacementBwd,T=l.shape,B=T[0],O=T[1],A=C(b,[i,d],[B,O],[[c.top,c.bottom],[c.left,c.right]]),L=C(v,[i,d],[B,O],[[c.top,c.bottom],[c.left,c.right]]),N=G(z(A),r);return{partSegmentation:pe(N,L),heatmapScores:y,offsets:E,displacementFwd:R,displacementBwd:M}}),h=f.partSegmentation,p=f.heatmapScores,m=f.offsets,w=f.displacementFwd,S=f.displacementBwd;return l.dispose(),{partSegmentation:h,heatmapScores:p,offsets:m,displacementFwd:w,displacementBwd:S,padding:c,internalResolutionHeightAndWidth:u}},t.prototype.segmentPersonParts=function(n,e){return e===void 0&&(e=$),P(this,void 0,void 0,function(){var r,s,a,i,d,u,o,l,c,f,h,p,m,w,S,g,b,v;return F(this,function(y){switch(y.label){case 0:return e=I(I({},$),e),xt(e),r=this.segmentPersonPartsActivation(n,e.internalResolution,e.segmentationThreshold),s=r.partSegmentation,a=r.heatmapScores,i=r.offsets,d=r.displacementFwd,u=r.displacementBwd,o=r.padding,l=r.internalResolutionHeightAndWidth,c=s.shape,f=c[0],h=c[1],[4,s.data()];case 1:return p=y.sent(),s.dispose(),[4,j([a,i,d,u])];case 2:return m=y.sent(),w=m[0],S=m[1],g=m[2],b=m[3],v=Y(w,S,g,b,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),v=Z(v,[f,h],l,o),a.dispose(),i.dispose(),d.dispose(),u.dispose(),[2,{height:f,width:h,data:p,allPoses:v}]}})})},t.prototype.segmentMultiPersonParts=function(n,e){return e===void 0&&(e=tt),P(this,void 0,void 0,function(){var r,s,a,i,d,u,o,l,c,f,h,p,m,w,S,g,b,v,y,E,R,M,T=this;return F(this,function(B){switch(B.label){case 0:return e=I(I({},tt),e),Ht(e),r=K(n),s=r[0],a=r[1],i=X(e.internalResolution,this.baseModel.outputStride,[s,a]),d=J(n,i),u=d.resized,o=d.padding,l=x(function(){var O=T.predictForMultiPersonInstanceSegmentationAndPart(u),A=O.segmentLogits,L=O.longOffsets,N=O.heatmapScores,D=O.offsets,_=O.displacementFwd,q=O.displacementBwd,W=O.partHeatmaps,st=C(A,[s,a],i,[[o.top,o.bottom],[o.left,o.right]]),Zt=C(W,[s,a],i,[[o.top,o.bottom],[o.left,o.right]]),$t=L,te=G(z(st),e.segmentationThreshold),ee=me(Zt);return{segmentation:te,longOffsets:$t,heatmapScoresRaw:N,offsetsRaw:D,displacementFwdRaw:_,displacementBwdRaw:q,partSegmentation:ee}}),c=l.segmentation,f=l.longOffsets,h=l.heatmapScoresRaw,p=l.offsetsRaw,m=l.displacementFwdRaw,w=l.displacementBwdRaw,S=l.partSegmentation,[4,j([h,p,m,w])];case 1:return g=B.sent(),b=g[0],v=g[1],y=g[2],E=g[3],R=Y(b,v,y,E,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),R=Z(R,[s,a],i,o),[4,xe(c,f,S,R,s,a,this.baseModel.outputStride,i,o,e.scoreThreshold,e.refineSteps,e.minKeypointScore,e.maxDetections)];case 2:return M=B.sent(),u.dispose(),c.dispose(),f.dispose(),h.dispose(),p.dispose(),m.dispose(),w.dispose(),S.dispose(),[2,M]}})})},t.prototype.dispose=function(){this.baseModel.dispose()},t})();function Je(t){return P(this,void 0,void 0,function(){var n,e,r,s,a,i;return F(this,function(d){switch(d.label){case 0:if(n=t.outputStride,e=t.quantBytes,r=t.multiplier,Pt==null)throw new Error(`Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this
        model.`);return s=ke(n,r,e),[4,Wt(t.modelUrl||s)];case 1:return a=d.sent(),i=new ve(a,n),[2,new jt(i)]}})})}function je(t){return P(this,void 0,void 0,function(){var n,e,r,s,a;return F(this,function(i){switch(i.label){case 0:if(n=t.outputStride,e=t.quantBytes,Pt==null)throw new Error(`Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this
        model.`);return r=We(n,e),[4,Wt(t.modelUrl||r)];case 1:return s=i.sent(),a=new _e(s,n),[2,new jt(a)]}})})}function Ze(t){return t===void 0&&(t=Jt),P(this,void 0,void 0,function(){return F(this,function(n){return t=Xe(t),t.architecture==="ResNet50"?[2,je(t)]:t.architecture==="MobileNetV1"?[2,Je(t)]:[2,null]})})}class on{constructor(n){this.divHost=document.getElementById(n);const e=document.createElement("div");this.divHost.appendChild(e),this.renderer=new $e(e)}destroy(){this.renderer.destroy();try{for(;this.divHost&&this.divHost.lastElementChild;){const n=this.divHost.lastElementChild;this.divHost.removeChild(n)}}catch(n){console.error("Error removing child elements:",n)}}}class $e extends fe{constructor(n){super(n),this.accList=[],this.lossList=[],this.init()}async init(){this.loadImg()}loadImg(n="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"){ce(n).then(e=>{e&&(e.onload=()=>{this.canvas.width=e.width,this.canvas.height=e.height,this.ctx.drawImage(e,0,0),tn(this.ctx),this.start()})}),this.isStatic=!0}}const tn=async t=>{const e=await(await Ze({architecture:"ResNet50",outputStride:32,quantBytes:4})).segmentPerson(t.canvas,{internalResolution:"medium",segmentationThreshold:.9,scoreTreshold:.9}),r=t.getImageData(0,0,t.canvas.width,t.canvas.height),s=t.createImageData(t.canvas.width,t.canvas.height);e.data.forEach((a,i)=>{a===1&&(s.data[i*4]=r.data[i*4],s.data[i*4+1]=r.data[i*4+1],s.data[i*4+2]=r.data[i*4+2],s.data[i*4+3]=r.data[i*4+3])}),t.putImageData(s,0,0)};export{$e as Renderer,on as Solution};
