(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[7358],{70357:function(e,o,s){"use strict";s.r(o),s.d(o,{Solution:function(){return n}});class i{constructor(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sandbox";this.divHost=void 0,this.div=void 0,this.divMenu=void 0,this.divContainer=void 0,this.orderedList=void 0,this.initDiv(e),this.initMenu(o)}initDiv(e){this.divHost=document.getElementById(e),this.div=document.createElement("div"),this.div.className="main-body",this.divHost.appendChild(this.div),this.divMenu=document.createElement("div"),this.divMenu.className="menu-left",this.divMenu.style.paddingLeft="0px",this.divMenu.style.background="#333",this.div.appendChild(this.divMenu),this.divContainer=document.createElement("div"),this.divContainer.className="container-sandbox",this.divContainer.id="container-sandbox",this.div.appendChild(this.divContainer),this.divContainer.style.width="100%",this.divContainer.style.height="100%",this.divContainer.style.background="#999"}initMenu(e){const o=document.createElement("h1");o.className="menu-left-title",o.style.paddingLeft="10px",o.textContent=e,this.divMenu.appendChild(o);document.createElement("nav").className="left-menu menu-left-font",this.orderedList=document.createElement("ol"),this.orderedList.style.paddingLeft="25px",this.orderedList.className="menu-left-font",this.divMenu.appendChild(this.orderedList)}addMenu(e,o){let s=document.createElement("li");this.orderedList.appendChild(s),s.className="sub-menu-left-padding-top",s.innerHTML="<a>".concat(e,"</a>"),s.onclick=()=>o()}destroy(){for(;this.divHost.lastChild;)this.divHost.removeChild(this.divHost.lastChild)}}class n{constructor(e){this.sandbox=void 0,this.app=void 0,this.sandbox=new i(e,"TFJS"),this.bind()}async execute(e){s(48552)("".concat(e)).then((e=>{let{Solution:o}=e;this.app=new o(this.sandbox.divContainer.id)}))}destroyApp(){void 0!==this.app&&this.app.destroy()}bind(){this.sandbox.addMenu("Typescript",(()=>{this.destroyApp(),this.execute("./01_Typescript_Basics")})),this.sandbox.addMenu("Condition & Loop",(()=>{this.destroyApp(),this.execute("./02_Condition_Loop")})),this.sandbox.addMenu("Data Structure",(()=>{this.destroyApp(),this.execute("./03_Data_Structure")})),this.sandbox.addMenu("Function & Class",(()=>{this.destroyApp(),this.execute("./04_Function_Class")})),this.sandbox.addMenu("Exercise",(()=>{this.destroyApp(),this.execute("./05_Exercise")})),this.sandbox.addMenu("Tensor",(()=>{this.destroyApp(),this.execute("./06_Tensor")})),this.sandbox.addMenu("LinearRegression",(()=>{this.destroyApp(),this.execute("./07_ModelLinearRegression")})),this.sandbox.addMenu("MPG Prediction",(()=>{this.destroyApp(),this.execute("./08_MPGPrediction")})),this.sandbox.addMenu("Polynomial Regression",(()=>{this.destroyApp(),this.execute("./09_PolynomialRegression")})),this.sandbox.addMenu("KNN",(()=>{this.destroyApp(),this.execute("./10_KNN")})),this.sandbox.addMenu("Iris Prediction",(()=>{this.destroyApp(),this.execute("./11_IrisPrediction")}))}destroy(){this.destroyApp(),this.sandbox.destroy()}}},48552:function(e,o,s){var i={".":[70357],"./":[70357],"./01_Tensor":[19807,382,9807],"./01_Tensor/":[19807,382,9807],"./01_Tensor/index":[19807,382,9807],"./01_Tensor/index.ts":[19807,382,9807],"./02_ModelLinearRegression":[58206,382,8206],"./02_ModelLinearRegression/":[58206,382,8206],"./02_ModelLinearRegression/index":[58206,382,8206],"./02_ModelLinearRegression/index.ts":[58206,382,8206],"./03_MPGPrediction":[27716,382,386,7716],"./03_MPGPrediction/":[27716,382,386,7716],"./03_MPGPrediction/index":[27716,382,386,7716],"./03_MPGPrediction/index.ts":[27716,382,386,7716],"./04_PolynomialRegression":[20005,382,5],"./04_PolynomialRegression/":[20005,382,5],"./04_PolynomialRegression/index":[20005,382,5],"./04_PolynomialRegression/index.ts":[20005,382,5],"./05_KNNIrisPrediction":[32948,7968,2948],"./05_KNNIrisPrediction/":[32948,7968,2948],"./05_KNNIrisPrediction/index":[32948,7968,2948],"./05_KNNIrisPrediction/index.ts":[32948,7968,2948],"./05_KNNIrisPrediction/renderer":[36757,6757],"./05_KNNIrisPrediction/renderer/":[36757,6757],"./05_KNNIrisPrediction/renderer/index":[36757,6757],"./05_KNNIrisPrediction/renderer/index.ts":[36757,6757],"./06_NetworkIrisPrediction":[70843,843],"./06_NetworkIrisPrediction/":[70843,843],"./06_NetworkIrisPrediction/index":[70843,843],"./06_NetworkIrisPrediction/index.ts":[70843,843],"./Image-bg-Extraction":[29563,382,6371,9563],"./Image-bg-Extraction/":[29563,382,6371,9563],"./Image-bg-Extraction/index":[29563,382,6371,9563],"./Image-bg-Extraction/index.ts":[29563,382,6371,9563],"./Image-face":[46867,7968,382,9559,6867],"./Image-face/":[46867,7968,382,9559,6867],"./Image-face/face":[26777,7968,9559,6777],"./Image-face/face/":[26777,7968,9559,6777],"./Image-face/face/Util":[24433,4433],"./Image-face/face/Util/":[24433,4433],"./Image-face/face/Util/index":[24433,4433],"./Image-face/face/Util/index.ts":[24433,4433],"./Image-face/face/index":[26777,7968,9559,6777],"./Image-face/face/index.ts":[26777,7968,9559,6777],"./Image-face/index":[46867,7968,382,9559,6867],"./Image-face/index.ts":[46867,7968,382,9559,6867],"./SmartDrawing/App":[45893,7968,5893],"./SmartDrawing/App.ts":[45893,7968,5893],"./SmartDrawing/Core/SmartDrawing":[86818,6818],"./SmartDrawing/Core/SmartDrawing.ts":[86818,6818],"./TSNE-Viz":[61736,1736],"./TSNE-Viz/":[61736,1736],"./TSNE-Viz/Graph":[46690,6690],"./TSNE-Viz/Graph.ts":[46690,6690],"./TSNE-Viz/index":[61736,1736],"./TSNE-Viz/index.ts":[61736,1736],"./TSNE-Viz/ui":[82405,2405],"./TSNE-Viz/ui.ts":[82405,2405],"./Video-face":[36540,7968,382,9559,3795,6540],"./Video-face/":[36540,7968,382,9559,3795,6540],"./Video-face/face":[86371,7968,9559,3795,4389],"./Video-face/face/":[86371,7968,9559,3795,4389],"./Video-face/face/Util":[44264,4264],"./Video-face/face/Util/":[44264,4264],"./Video-face/face/Util/index":[44264,4264],"./Video-face/face/Util/index.ts":[44264,4264],"./Video-face/face/index":[86371,7968,9559,3795,4389],"./Video-face/face/index.ts":[86371,7968,9559,3795,4389],"./Video-face/index":[36540,7968,382,9559,3795,6540],"./Video-face/index.ts":[36540,7968,382,9559,3795,6540],"./index":[70357],"./index.ts":[70357],"njslab/Workshop/workshop-ml":[70357],"njslab/Workshop/workshop-ml/":[70357],"njslab/Workshop/workshop-ml/01_Tensor":[19807,382,9807],"njslab/Workshop/workshop-ml/01_Tensor/":[19807,382,9807],"njslab/Workshop/workshop-ml/01_Tensor/index":[19807,382,9807],"njslab/Workshop/workshop-ml/01_Tensor/index.ts":[19807,382,9807],"njslab/Workshop/workshop-ml/02_ModelLinearRegression":[58206,382,8206],"njslab/Workshop/workshop-ml/02_ModelLinearRegression/":[58206,382,8206],"njslab/Workshop/workshop-ml/02_ModelLinearRegression/index":[58206,382,8206],"njslab/Workshop/workshop-ml/02_ModelLinearRegression/index.ts":[58206,382,8206],"njslab/Workshop/workshop-ml/03_MPGPrediction":[27716,382,386,7716],"njslab/Workshop/workshop-ml/03_MPGPrediction/":[27716,382,386,7716],"njslab/Workshop/workshop-ml/03_MPGPrediction/index":[27716,382,386,7716],"njslab/Workshop/workshop-ml/03_MPGPrediction/index.ts":[27716,382,386,7716],"njslab/Workshop/workshop-ml/04_PolynomialRegression":[20005,382,5],"njslab/Workshop/workshop-ml/04_PolynomialRegression/":[20005,382,5],"njslab/Workshop/workshop-ml/04_PolynomialRegression/index":[20005,382,5],"njslab/Workshop/workshop-ml/04_PolynomialRegression/index.ts":[20005,382,5],"njslab/Workshop/workshop-ml/05_KNNIrisPrediction":[32948,7968,2948],"njslab/Workshop/workshop-ml/05_KNNIrisPrediction/":[32948,7968,2948],"njslab/Workshop/workshop-ml/05_KNNIrisPrediction/index":[32948,7968,2948],"njslab/Workshop/workshop-ml/05_KNNIrisPrediction/index.ts":[32948,7968,2948],"njslab/Workshop/workshop-ml/05_KNNIrisPrediction/renderer":[36757,6757],"njslab/Workshop/workshop-ml/05_KNNIrisPrediction/renderer/":[36757,6757],"njslab/Workshop/workshop-ml/05_KNNIrisPrediction/renderer/index":[36757,6757],"njslab/Workshop/workshop-ml/05_KNNIrisPrediction/renderer/index.ts":[36757,6757],"njslab/Workshop/workshop-ml/06_NetworkIrisPrediction":[70843,843],"njslab/Workshop/workshop-ml/06_NetworkIrisPrediction/":[70843,843],"njslab/Workshop/workshop-ml/06_NetworkIrisPrediction/index":[70843,843],"njslab/Workshop/workshop-ml/06_NetworkIrisPrediction/index.ts":[70843,843],"njslab/Workshop/workshop-ml/Image-bg-Extraction":[29563,382,6371,9563],"njslab/Workshop/workshop-ml/Image-bg-Extraction/":[29563,382,6371,9563],"njslab/Workshop/workshop-ml/Image-bg-Extraction/index":[29563,382,6371,9563],"njslab/Workshop/workshop-ml/Image-bg-Extraction/index.ts":[29563,382,6371,9563],"njslab/Workshop/workshop-ml/Image-face":[46867,7968,382,9559,6867],"njslab/Workshop/workshop-ml/Image-face/":[46867,7968,382,9559,6867],"njslab/Workshop/workshop-ml/Image-face/face":[26777,7968,9559,6777],"njslab/Workshop/workshop-ml/Image-face/face/":[26777,7968,9559,6777],"njslab/Workshop/workshop-ml/Image-face/face/Util":[24433,4433],"njslab/Workshop/workshop-ml/Image-face/face/Util/":[24433,4433],"njslab/Workshop/workshop-ml/Image-face/face/Util/index":[24433,4433],"njslab/Workshop/workshop-ml/Image-face/face/Util/index.ts":[24433,4433],"njslab/Workshop/workshop-ml/Image-face/face/index":[26777,7968,9559,6777],"njslab/Workshop/workshop-ml/Image-face/face/index.ts":[26777,7968,9559,6777],"njslab/Workshop/workshop-ml/Image-face/index":[46867,7968,382,9559,6867],"njslab/Workshop/workshop-ml/Image-face/index.ts":[46867,7968,382,9559,6867],"njslab/Workshop/workshop-ml/SmartDrawing/App":[45893,7968,5893],"njslab/Workshop/workshop-ml/SmartDrawing/App.ts":[45893,7968,5893],"njslab/Workshop/workshop-ml/SmartDrawing/Core/SmartDrawing":[86818,6818],"njslab/Workshop/workshop-ml/SmartDrawing/Core/SmartDrawing.ts":[86818,6818],"njslab/Workshop/workshop-ml/TSNE-Viz":[61736,1736],"njslab/Workshop/workshop-ml/TSNE-Viz/":[61736,1736],"njslab/Workshop/workshop-ml/TSNE-Viz/Graph":[46690,6690],"njslab/Workshop/workshop-ml/TSNE-Viz/Graph.ts":[46690,6690],"njslab/Workshop/workshop-ml/TSNE-Viz/index":[61736,1736],"njslab/Workshop/workshop-ml/TSNE-Viz/index.ts":[61736,1736],"njslab/Workshop/workshop-ml/TSNE-Viz/ui":[82405,2405],"njslab/Workshop/workshop-ml/TSNE-Viz/ui.ts":[82405,2405],"njslab/Workshop/workshop-ml/Video-face":[36540,7968,382,9559,3795,6540],"njslab/Workshop/workshop-ml/Video-face/":[36540,7968,382,9559,3795,6540],"njslab/Workshop/workshop-ml/Video-face/face":[86371,7968,9559,3795,4389],"njslab/Workshop/workshop-ml/Video-face/face/":[86371,7968,9559,3795,4389],"njslab/Workshop/workshop-ml/Video-face/face/Util":[44264,4264],"njslab/Workshop/workshop-ml/Video-face/face/Util/":[44264,4264],"njslab/Workshop/workshop-ml/Video-face/face/Util/index":[44264,4264],"njslab/Workshop/workshop-ml/Video-face/face/Util/index.ts":[44264,4264],"njslab/Workshop/workshop-ml/Video-face/face/index":[86371,7968,9559,3795,4389],"njslab/Workshop/workshop-ml/Video-face/face/index.ts":[86371,7968,9559,3795,4389],"njslab/Workshop/workshop-ml/Video-face/index":[36540,7968,382,9559,3795,6540],"njslab/Workshop/workshop-ml/Video-face/index.ts":[36540,7968,382,9559,3795,6540],"njslab/Workshop/workshop-ml/index":[70357],"njslab/Workshop/workshop-ml/index.ts":[70357]};function n(e){if(!s.o(i,e))return Promise.resolve().then((function(){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}));var o=i[e],n=o[0];return Promise.all(o.slice(1).map(s.e)).then((function(){return s(n)}))}n.keys=function(){return Object.keys(i)},n.id=48552,e.exports=n}}]);
//# sourceMappingURL=7358.de573f35.chunk.js.map