(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[116],{13250:function(o,n,s){"use strict";s.r(n),s.d(n,{Solution:function(){return d}});var e=s(74165),i=s(15861),r=s(15671),t=s(43144),d=function(){function o(n){(0,r.Z)(this,o),this.sandbox=void 0,this.app=void 0,this.bind()}return(0,t.Z)(o,[{key:"execute",value:function(){var o=(0,i.Z)((0,e.Z)().mark((function o(n){var i=this;return(0,e.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:s(48552)("".concat(n)).then((function(o){var n=o.Solution;i.app=new n(i.sandbox.divContainer.id)}));case 1:case"end":return o.stop()}}),o)})));return function(n){return o.apply(this,arguments)}}()},{key:"destroyApp",value:function(){void 0!==this.app&&this.app.destroy()}},{key:"bind",value:function(){var o=this;this.sandbox.addMenu("Typescript",(function(){o.destroyApp(),o.execute("./01_Typescript_Basics")})),this.sandbox.addMenu("Condition & Loop",(function(){o.destroyApp(),o.execute("./02_Condition_Loop")})),this.sandbox.addMenu("Data Structure",(function(){o.destroyApp(),o.execute("./03_Data_Structure")})),this.sandbox.addMenu("Function & Class",(function(){o.destroyApp(),o.execute("./04_Function_Class")})),this.sandbox.addMenu("Exercise",(function(){o.destroyApp(),o.execute("./05_Exercise")})),this.sandbox.addMenu("Tensor",(function(){o.destroyApp(),o.execute("./06_Tensor")})),this.sandbox.addMenu("LinearRegression",(function(){o.destroyApp(),o.execute("./07_ModelLinearRegression")})),this.sandbox.addMenu("MPG Prediction",(function(){o.destroyApp(),o.execute("./08_MPGPrediction")})),this.sandbox.addMenu("Polynomial Regression",(function(){o.destroyApp(),o.execute("./09_PolynomialRegression")})),this.sandbox.addMenu("KNN",(function(){o.destroyApp(),o.execute("./10_KNN")})),this.sandbox.addMenu("Iris Prediction",(function(){o.destroyApp(),o.execute("./11_IrisPrediction")}))}},{key:"destroy",value:function(){this.destroyApp(),this.sandbox.destroy()}}]),o}()},48552:function(o,n,s){var e={".":[13250],"./":[13250],"./06_Tensor":[78517,8517],"./06_Tensor/":[78517,8517],"./06_Tensor/index":[78517,8517],"./06_Tensor/index.ts":[78517,8517],"./07_ModelLinearRegression":[10349,349],"./07_ModelLinearRegression/":[10349,349],"./07_ModelLinearRegression/index":[10349,349],"./07_ModelLinearRegression/index.ts":[10349,349],"./08_MPGPrediction":[66781,386,6781],"./08_MPGPrediction/":[66781,386,6781],"./08_MPGPrediction/index":[66781,386,6781],"./08_MPGPrediction/index.ts":[66781,386,6781],"./09_PolynomialRegression":[79021,9021],"./09_PolynomialRegression/":[79021,9021],"./09_PolynomialRegression/index":[79021,9021],"./09_PolynomialRegression/index.ts":[79021,9021],"./10_KNN":[57026,7026],"./10_KNN/":[57026,7026],"./10_KNN/index":[57026,7026],"./10_KNN/index.ts":[57026,7026],"./11_IrisPrediction":[99953,9953],"./11_IrisPrediction/":[99953,9953],"./11_IrisPrediction/index":[99953,9953],"./11_IrisPrediction/index.ts":[99953,9953],"./20_Body_pix":[39729,6371,9729],"./20_Body_pix/":[39729,6371,9729],"./20_Body_pix/index":[39729,6371,9729],"./20_Body_pix/index.ts":[39729,6371,9729],"./index":[13250],"./index.ts":[13250],"njslab/Workshop/workshop-ml":[13250],"njslab/Workshop/workshop-ml/":[13250],"njslab/Workshop/workshop-ml/06_Tensor":[78517,8517],"njslab/Workshop/workshop-ml/06_Tensor/":[78517,8517],"njslab/Workshop/workshop-ml/06_Tensor/index":[78517,8517],"njslab/Workshop/workshop-ml/06_Tensor/index.ts":[78517,8517],"njslab/Workshop/workshop-ml/07_ModelLinearRegression":[10349,349],"njslab/Workshop/workshop-ml/07_ModelLinearRegression/":[10349,349],"njslab/Workshop/workshop-ml/07_ModelLinearRegression/index":[10349,349],"njslab/Workshop/workshop-ml/07_ModelLinearRegression/index.ts":[10349,349],"njslab/Workshop/workshop-ml/08_MPGPrediction":[66781,386,6781],"njslab/Workshop/workshop-ml/08_MPGPrediction/":[66781,386,6781],"njslab/Workshop/workshop-ml/08_MPGPrediction/index":[66781,386,6781],"njslab/Workshop/workshop-ml/08_MPGPrediction/index.ts":[66781,386,6781],"njslab/Workshop/workshop-ml/09_PolynomialRegression":[79021,9021],"njslab/Workshop/workshop-ml/09_PolynomialRegression/":[79021,9021],"njslab/Workshop/workshop-ml/09_PolynomialRegression/index":[79021,9021],"njslab/Workshop/workshop-ml/09_PolynomialRegression/index.ts":[79021,9021],"njslab/Workshop/workshop-ml/10_KNN":[57026,7026],"njslab/Workshop/workshop-ml/10_KNN/":[57026,7026],"njslab/Workshop/workshop-ml/10_KNN/index":[57026,7026],"njslab/Workshop/workshop-ml/10_KNN/index.ts":[57026,7026],"njslab/Workshop/workshop-ml/11_IrisPrediction":[99953,9953],"njslab/Workshop/workshop-ml/11_IrisPrediction/":[99953,9953],"njslab/Workshop/workshop-ml/11_IrisPrediction/index":[99953,9953],"njslab/Workshop/workshop-ml/11_IrisPrediction/index.ts":[99953,9953],"njslab/Workshop/workshop-ml/20_Body_pix":[39729,6371,9729],"njslab/Workshop/workshop-ml/20_Body_pix/":[39729,6371,9729],"njslab/Workshop/workshop-ml/20_Body_pix/index":[39729,6371,9729],"njslab/Workshop/workshop-ml/20_Body_pix/index.ts":[39729,6371,9729],"njslab/Workshop/workshop-ml/index":[13250],"njslab/Workshop/workshop-ml/index.ts":[13250]};function i(o){if(!s.o(e,o))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+o+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=e[o],i=n[0];return Promise.all(n.slice(1).map(s.e)).then((function(){return s(i)}))}i.keys=function(){return Object.keys(e)},i.id=48552,o.exports=i}}]);
//# sourceMappingURL=116.48b2b37d.chunk.js.map