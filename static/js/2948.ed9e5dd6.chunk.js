"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[2948],{32948:function(o,n,l){l.r(n),l.d(n,{Solution:function(){return s}});var e=l(15671),t=l(43144),i=l(38966),s=function(){function o(n){(0,e.Z)(this,o),this.divHost=void 0,this.irisPrediction()}return(0,t.Z)(o,[{key:"knnEx",value:function(){var o=new i.Be([[0,0],[0,1],[1,2],[1,3]],[0,0,1,1]).predict([[1,3]]);console.log(o)}},{key:"irisPrediction",value:function(){var o=a();(0,i.Sy)(o);for(var n=[],l=[],e=0;e<o.length;++e){for(var t=[],s=0;s<o[e].length-1;++s)t.push(o[e][s]);n.push(t),l.push(o[e][o[e].length-1])}console.log("Iris data"),console.log(n);var r=n.splice(0,Math.floor(.6*n.length)),c=l.splice(0,Math.floor(.6*l.length)),u=n,h=l;console.log("train data inputs"),console.log(r),console.log("train data labels"),console.log(c),console.log("validation data inputs"),console.log(u),console.log("validation data labels"),console.log(h);var d=new i.Be(r,c).predict(u);console.log("Prediction :",d),console.log("Ground truth ",h);for(var g=[],v=0;v<h.length;++v)h[v]!==d[v]&&g.push(v);console.log(String((100-g.length/h.length*100).toFixed(2))+"% accuracy"),console.log("index:",g)}},{key:"destroy",value:function(){for(;this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}]),o}(),a=function(){return[[5.1,3.5,1.4,.2,0],[4.9,3,1.4,.2,0],[4.7,3.2,1.3,.2,0],[4.6,3.1,1.5,.2,0],[5,3.6,1.4,.2,0],[5.4,3.9,1.7,.4,0],[4.6,3.4,1.4,.3,0],[5,3.4,1.5,.2,0],[4.4,2.9,1.4,.2,0],[4.9,3.1,1.5,.1,0],[5.4,3.7,1.5,.2,0],[4.8,3.4,1.6,.2,0],[4.8,3,1.4,.1,0],[4.3,3,1.1,.1,0],[5.8,4,1.2,.2,0],[5.7,4.4,1.5,.4,0],[5.4,3.9,1.3,.4,0],[5.1,3.5,1.4,.3,0],[5.7,3.8,1.7,.3,0],[5.1,3.8,1.5,.3,0],[5.4,3.4,1.7,.2,0],[5.1,3.7,1.5,.4,0],[4.6,3.6,1,.2,0],[5.1,3.3,1.7,.5,0],[4.8,3.4,1.9,.2,0],[5,3,1.6,.2,0],[5,3.4,1.6,.4,0],[5.2,3.5,1.5,.2,0],[5.2,3.4,1.4,.2,0],[4.7,3.2,1.6,.2,0],[4.8,3.1,1.6,.2,0],[5.4,3.4,1.5,.4,0],[5.2,4.1,1.5,.1,0],[5.5,4.2,1.4,.2,0],[4.9,3.1,1.5,.1,0],[5,3.2,1.2,.2,0],[5.5,3.5,1.3,.2,0],[4.9,3.1,1.5,.1,0],[4.4,3,1.3,.2,0],[5.1,3.4,1.5,.2,0],[5,3.5,1.3,.3,0],[4.5,2.3,1.3,.3,0],[4.4,3.2,1.3,.2,0],[5,3.5,1.6,.6,0],[5.1,3.8,1.9,.4,0],[4.8,3,1.4,.3,0],[5.1,3.8,1.6,.2,0],[4.6,3.2,1.4,.2,0],[5.3,3.7,1.5,.2,0],[5,3.3,1.4,.2,0],[7,3.2,4.7,1.4,1],[6.4,3.2,4.5,1.5,1],[6.9,3.1,4.9,1.5,1],[5.5,2.3,4,1.3,1],[6.5,2.8,4.6,1.5,1],[5.7,2.8,4.5,1.3,1],[6.3,3.3,4.7,1.6,1],[4.9,2.4,3.3,1,1],[6.6,2.9,4.6,1.3,1],[5.2,2.7,3.9,1.4,1],[5,2,3.5,1,1],[5.9,3,4.2,1.5,1],[6,2.2,4,1,1],[6.1,2.9,4.7,1.4,1],[5.6,2.9,3.6,1.3,1],[6.7,3.1,4.4,1.4,1],[5.6,3,4.5,1.5,1],[5.8,2.7,4.1,1,1],[6.2,2.2,4.5,1.5,1],[5.6,2.5,3.9,1.1,1],[5.9,3.2,4.8,1.8,1],[6.1,2.8,4,1.3,1],[6.3,2.5,4.9,1.5,1],[6.1,2.8,4.7,1.2,1],[6.4,2.9,4.3,1.3,1],[6.6,3,4.4,1.4,1],[6.8,2.8,4.8,1.4,1],[6.7,3,5,1.7,1],[6,2.9,4.5,1.5,1],[5.7,2.6,3.5,1,1],[5.5,2.4,3.8,1.1,1],[5.5,2.4,3.7,1,1],[5.8,2.7,3.9,1.2,1],[6,2.7,5.1,1.6,1],[5.4,3,4.5,1.5,1],[6,3.4,4.5,1.6,1],[6.7,3.1,4.7,1.5,1],[6.3,2.3,4.4,1.3,1],[5.6,3,4.1,1.3,1],[5.5,2.5,4,1.3,1],[5.5,2.6,4.4,1.2,1],[6.1,3,4.6,1.4,1],[5.8,2.6,4,1.2,1],[5,2.3,3.3,1,1],[5.6,2.7,4.2,1.3,1],[5.7,3,4.2,1.2,1],[5.7,2.9,4.2,1.3,1],[6.2,2.9,4.3,1.3,1],[5.1,2.5,3,1.1,1],[5.7,2.8,4.1,1.3,1],[6.3,3.3,6,2.5,2],[5.8,2.7,5.1,1.9,2],[7.1,3,5.9,2.1,2],[6.3,2.9,5.6,1.8,2],[6.5,3,5.8,2.2,2],[7.6,3,6.6,2.1,2],[4.9,2.5,4.5,1.7,2],[7.3,2.9,6.3,1.8,2],[6.7,2.5,5.8,1.8,2],[7.2,3.6,6.1,2.5,2],[6.5,3.2,5.1,2,2],[6.4,2.7,5.3,1.9,2],[6.8,3,5.5,2.1,2],[5.7,2.5,5,2,2],[5.8,2.8,5.1,2.4,2],[6.4,3.2,5.3,2.3,2],[6.5,3,5.5,1.8,2],[7.7,3.8,6.7,2.2,2],[7.7,2.6,6.9,2.3,2],[6,2.2,5,1.5,2],[6.9,3.2,5.7,2.3,2],[5.6,2.8,4.9,2,2],[7.7,2.8,6.7,2,2],[6.3,2.7,4.9,1.8,2],[6.7,3.3,5.7,2.1,2],[7.2,3.2,6,1.8,2],[6.2,2.8,4.8,1.8,2],[6.1,3,4.9,1.8,2],[6.4,2.8,5.6,2.1,2],[7.2,3,5.8,1.6,2],[7.4,2.8,6.1,1.9,2],[7.9,3.8,6.4,2,2],[6.4,2.8,5.6,2.2,2],[6.3,2.8,5.1,1.5,2],[6.1,2.6,5.6,1.4,2],[7.7,3,6.1,2.3,2],[6.3,3.4,5.6,2.4,2],[6.4,3.1,5.5,1.8,2],[6,3,4.8,1.8,2],[6.9,3.1,5.4,2.1,2],[6.7,3.1,5.6,2.4,2],[6.9,3.1,5.1,2.3,2],[5.8,2.7,5.1,1.9,2],[6.8,3.2,5.9,2.3,2],[6.7,3.3,5.7,2.5,2],[6.7,3,5.2,2.3,2],[6.3,2.5,5,1.9,2],[6.5,3,5.2,2,2],[6.2,3.4,5.4,2.3,2],[5.9,3,5.1,1.8,2]]}}}]);
//# sourceMappingURL=2948.ed9e5dd6.chunk.js.map