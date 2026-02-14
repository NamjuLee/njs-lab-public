import"./index-DXWTkgC4.js";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(T||(T={}));var N;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(N||(N={}));var y;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(y||(y={}));var v;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(v||(v={}));var C;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})(C||(C={}));var w;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(w||(w={}));/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class M extends f{constructor(n,e){super(n),this.response=e}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="https://generativelanguage.googleapis.com",x="v1",U="0.2.1",F="genai-js";var l;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(l||(l={}));class _{constructor(n,e,i,s){this.model=n,this.task=e,this.apiKey=i,this.stream=s}toString(){let n=`${K}/${x}/${this.model}:${this.task}`;return this.stream&&(n+="?alt=sse"),n}}function B(){return`${F}/${U}`}async function p(t,n,e){let i;try{if(i=await fetch(t.toString(),Object.assign(Object.assign({},Y(e)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":B(),"x-goog-api-key":t.apiKey},body:n})),!i.ok){let s="";try{const o=await i.json();s=o.error.message,o.error.details&&(s+=` ${JSON.stringify(o.error.details)}`)}catch{}throw new Error(`[${i.status} ${i.statusText}] ${s}`)}}catch(s){const o=new f(`Error fetching from ${t.toString()}: ${s.message}`);throw o.stack=s.stack,o}return i}function Y(t){const n={};if((t==null?void 0:t.timeout)>=0){const e=new AbortController,i=e.signal;setTimeout(()=>e.abort(),t.timeout),n.signal=i}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),G(t.candidates[0]))throw new M(`${m(t)}`,t);return $(t)}else if(t.promptFeedback)throw new M(`Text not available. ${m(t)}`,t);return""},t}function $(t){var n,e,i,s;return!((s=(i=(e=(n=t.candidates)===null||n===void 0?void 0:n[0].content)===null||e===void 0?void 0:e.parts)===null||i===void 0?void 0:i[0])===null||s===void 0)&&s.text?t.candidates[0].content.parts[0].text:""}const j=[C.RECITATION,C.SAFETY];function G(t){return!!t.finishReason&&j.includes(t.finishReason)}function m(t){var n,e,i;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((n=t.promptFeedback)===null||n===void 0)&&n.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((e=t.promptFeedback)===null||e===void 0)&&e.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((i=t.candidates)===null||i===void 0)&&i[0]){const o=t.candidates[0];G(o)&&(s+=`Candidate was blocked due to ${o.finishReason}`,o.finishMessage&&(s+=`: ${o.finishMessage}`))}return s}function g(t){return this instanceof g?(this.v=t,this):new g(t)}function k(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),s,o=[];return s={},c("next"),c("throw"),c("return"),s[Symbol.asyncIterator]=function(){return this},s;function c(d){i[d]&&(s[d]=function(h){return new Promise(function(O,D){o.push([d,h,O,D])>1||r(d,h)})})}function r(d,h){try{a(i[d](h))}catch(O){I(o[0][3],O)}}function a(d){d.value instanceof g?Promise.resolve(d.value.v).then(u,A):I(o[0][2],d)}function u(d){r("next",d)}function A(d){r("throw",d)}function I(d,h){d(h),o.shift(),o.length&&r(o[0][0],o[0][1])}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function q(t){const n=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),e=W(n),[i,s]=e.tee();return{stream:V(i),response:J(s)}}async function J(t){const n=[],e=t.getReader();for(;;){const{done:i,value:s}=await e.read();if(i)return R(X(n));n.push(s)}}function V(t){return k(this,arguments,function*(){const e=t.getReader();for(;;){const{value:i,done:s}=yield g(e.read());if(s)break;yield yield g(R(i))}})}function W(t){const n=t.getReader();return new ReadableStream({start(i){let s="";return o();function o(){return n.read().then(({value:c,done:r})=>{if(r){if(s.trim()){i.error(new f("Failed to parse stream"));return}i.close();return}s+=c;let a=s.match(b),u;for(;a;){try{u=JSON.parse(a[1])}catch{i.error(new f(`Error parsing JSON response: "${a[1]}"`));return}i.enqueue(u),s=s.substring(a[0].length),a=s.match(b)}return o()})}}})}function X(t){const n=t[t.length-1],e={promptFeedback:n==null?void 0:n.promptFeedback};for(const i of t)if(i.candidates)for(const s of i.candidates){const o=s.index;if(e.candidates||(e.candidates=[]),e.candidates[o]||(e.candidates[o]={index:s.index}),e.candidates[o].citationMetadata=s.citationMetadata,e.candidates[o].finishReason=s.finishReason,e.candidates[o].finishMessage=s.finishMessage,e.candidates[o].safetyRatings=s.safetyRatings,s.content&&s.content.parts){e.candidates[o].content||(e.candidates[o].content={role:s.content.role||"user",parts:[{text:""}]});for(const c of s.content.parts)c.text&&(e.candidates[o].content.parts[0].text+=c.text)}}return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,n,e,i){const s=new _(n,l.STREAM_GENERATE_CONTENT,t,!0),o=await p(s,JSON.stringify(e),i);return q(o)}async function P(t,n,e,i){const s=new _(n,l.GENERATE_CONTENT,t,!1),c=await(await p(s,JSON.stringify(e),i)).json();return{response:R(c)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,n){let e=[];if(typeof t=="string")e=[{text:t}];else for(const i of t)typeof i=="string"?e.push({text:i}):e.push(i);return{role:n,parts:e}}function S(t){return t.contents?t:{contents:[E(t,"user")]}}function Q(t){return typeof t=="string"||Array.isArray(t)?{content:E(t,"user")}:t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L="SILENT_ERROR";class z{constructor(n,e,i,s){this.model=e,this.params=i,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,i!=null&&i.history&&(this._history=i.history.map(o=>{if(!o.role)throw new Error("Missing role for history item: "+JSON.stringify(o));return E(o.parts,o.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n){var e,i;await this._sendPromise;const s=E(n,"user"),o={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,contents:[...this._history,s]};let c;return this._sendPromise=this._sendPromise.then(()=>P(this._apiKey,this.model,o,this.requestOptions)).then(r=>{var a;if(r.response.candidates&&r.response.candidates.length>0){this._history.push(s);const u=Object.assign({parts:[],role:"model"},(a=r.response.candidates)===null||a===void 0?void 0:a[0].content);this._history.push(u)}else{const u=m(r.response);u&&console.warn(`sendMessage() was unsuccessful. ${u}. Inspect response object for details.`)}c=r}),await this._sendPromise,c}async sendMessageStream(n){var e,i;await this._sendPromise;const s=E(n,"user"),o={safetySettings:(e=this.params)===null||e===void 0?void 0:e.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,contents:[...this._history,s]},c=H(this._apiKey,this.model,o,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>c).catch(r=>{throw new Error(L)}).then(r=>r.response).then(r=>{if(r.candidates&&r.candidates.length>0){this._history.push(s);const a=Object.assign({},r.candidates[0].content);a.role||(a.role="model"),this._history.push(a)}else{const a=m(r);a&&console.warn(`sendMessageStream() was unsuccessful. ${a}. Inspect response object for details.`)}}).catch(r=>{r.message!==L&&console.error(r)}),c}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,n,e,i){const s=new _(n,l.COUNT_TOKENS,t,!1);return(await p(s,JSON.stringify(Object.assign(Object.assign({},e),{model:n})),i)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t,n,e,i){const s=new _(n,l.EMBED_CONTENT,t,!1);return(await p(s,JSON.stringify(e),i)).json()}async function et(t,n,e,i){const s=new _(n,l.BATCH_EMBED_CONTENTS,t,!1),o=e.requests.map(r=>Object.assign(Object.assign({},r),{model:n}));return(await p(s,JSON.stringify({requests:o}),i)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(n,e,i){this.apiKey=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.requestOptions=i||{}}async generateContent(n){const e=S(n);return P(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},e),this.requestOptions)}async generateContentStream(n){const e=S(n);return H(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},e),this.requestOptions)}startChat(n){return new z(this.apiKey,this.model,n,this.requestOptions)}async countTokens(n){const e=S(n);return Z(this.apiKey,this.model,e)}async embedContent(n){const e=Q(n);return tt(this.apiKey,this.model,e)}async batchEmbedContents(n){return et(this.apiKey,this.model,n,this.requestOptions)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(n){this.apiKey=n}getGenerativeModel(n,e){if(!n.model)throw new f("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new nt(this.apiKey,n,e)}}class ot{constructor(n){this.divHost=document.getElementById(n);const e=document.createElement("div");e.style.padding="50px",this.divHost.appendChild(e),this.divInput=document.createElement("div"),this.divInput.textContent="Q: What is Computational Design?",this.divInput.style.color="#bbb",e.appendChild(this.divInput),this.divOut=document.createElement("div"),this.divOut.style.color="#777",e.appendChild(this.divOut),this.initGemini()}async initGemini(){const n="gemini-pro",e=new st("AIzaSyAC1CnqJgLitf9SkJpECyYT4-t7OqeL_hw");(async()=>{const s=e.getGenerativeModel({model:n}),o=this.divInput.textContent,a=(await(await s.generateContent(o)).response).text();this.divOut.textContent=a})()}destroy(){for(;this.divHost&&this.divHost.lastElementChild;){const n=this.divHost.lastElementChild;this.divHost.removeChild(n)}}}export{ot as Solution};
//# sourceMappingURL=index-1LbXAWdL.js.map
