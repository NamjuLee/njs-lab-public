"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[843],{70843:function(t,s,i){i.r(s),i.d(s,{Renderer:function(){return u},Solution:function(){return d}});var e=i(74165),n=i(15861),o=i(60136),r=i(29388),a=i(15671),h=i(43144),l=i(61250),c=i(55913),d=function(){function t(s){(0,a.Z)(this,t),this.divHost=void 0,this.renderer=void 0,this.divHost=document.getElementById(s);var i=document.createElement("div");i.style.marginTop="80px",i.style.marginLeft="auto",i.style.marginRight="auto",i.style.backgroundColor="#555",i.style.width="600px",i.style.height="350px",this.divHost.appendChild(i),this.renderer=new u(i),this.renderer.canvas.style.position="unset"}return(0,h.Z)(t,[{key:"destroy",value:function(){for(this.renderer.stopTrain(),this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}]),t}(),u=function(t){(0,o.Z)(i,t);var s=(0,r.Z)(i);function i(t){var e;return(0,a.Z)(this,i),(e=s.call(this,t)).tfModel=void 0,e.accList=[],e.lossList=[],e.divText=void 0,e.canvas.style.position="unset",e.tfModel=new v,e.divText=document.createElement("div"),e.divHost.appendChild(e.divText),e.divText.textContent="title",e.start(),e}return(0,h.Z)(i,[{key:"render",value:function(t){this.accList=[],this.lossList=[];this.canvas.width;var s=Number.MIN_VALUE;this.tfModel.hist.length>0&&(this.divText.textContent="acc: ".concat(parseFloat(this.tfModel.hist[this.tfModel.hist.length-1].acc).toFixed(3),", loss: ").concat(parseFloat(this.tfModel.hist[this.tfModel.hist.length-1].loss).toFixed(3)));for(var i=0;i<this.tfModel.hist.length;++i){var e=this.tfModel.hist[i].acc,n=this.tfModel.hist[i].loss;s<e&&(s=e),s<n&&(s=n),this.accList.push(e),this.lossList.push(n)}if(this.accList.length>1){for(var o=0;o<this.accList.length;++o){var r=this.accList[o],a=(0,c.a2)(o,0,this.accList.length,0,this.canvas.width),h=(0,c.a2)(r,s,0,0,this.canvas.height);0===o?(t.beginPath(),t.moveTo(a,h)):t.lineTo(a,h)}t.strokeStyle="#0f0",t.stroke()}if(this.lossList.length>1){for(var l=0;l<this.lossList.length;++l){var d=this.lossList[l],u=(0,c.a2)(l,0,this.lossList.length,0,this.canvas.width),v=(0,c.a2)(d,0,s,this.canvas.height,0);0===l||(t.beginPath(),t.arc(u,v,1,0,6.28),t.closePath(),t.strokeStyle="#f00",t.stroke())}t.strokeStyle="#f00",t.stroke()}}},{key:"stopTrain",value:function(){this.tfModel.isTraining=!1}}]),i}(c.bb),v=(0,h.Z)((function t(){var s=this;(0,a.Z)(this,t),this.model=void 0,this.inputsTensor=void 0,this.labelsTensor=void 0,this.hist=[],this.isTraining=!1,this.iteration=0,this.trainLoop=(0,n.Z)((0,e.Z)().mark((function t(){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.isTraining){t.next=2;break}return t.abrupt("return");case 2:s.iteration++,s.train().then((function(t){s.hist.push(t.history),setTimeout((function(){return s.trainLoop()}),1)}));case 4:case"end":return t.stop()}}),t)}))),this.train=(0,n.Z)((0,e.Z)().mark((function t(){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.model.fit(s.inputsTensor,s.labelsTensor,{batchSize:100,epochs:1,shuffle:!0,validationData:[s.inputsTensor,s.labelsTensor]});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));var i=f();l.D5U.shuffle(i);for(var o=[],r=0;r<i.length;++r){for(var h=[],c=0;c<i[r].length-1;++c)h.push(i[r][c]);o.push(h)}for(var d=[],u=0;u<i.length;++u)0===i[u][i[u].length-1]?d.push([1,0,0]):1===i[u][i[u].length-1]?d.push([0,1,0]):2===i[u][i[u].length-1]&&d.push([0,0,1]);this.inputsTensor=l.odF(o),this.labelsTensor=l.odF(d),this.inputsTensor.print(),this.labelsTensor.print(),this.model=l.Pel();var v=l.ugM.dense({inputShape:[this.inputsTensor.shape[1]],units:10,activation:"sigmoid"}),p=l.ugM.dense({units:3,activation:"softmax"});this.model.add(v),this.model.add(p),this.model.compile({optimizer:l.p_j.adam(),loss:l.MB5.softmaxCrossEntropy,metrics:["accuracy"]}),this.model.summary(),this.isTraining=!0,this.trainLoop()})),f=function(){return[[5.1,3.5,1.4,.2,0],[4.9,3,1.4,.2,0],[4.7,3.2,1.3,.2,0],[4.6,3.1,1.5,.2,0],[5,3.6,1.4,.2,0],[5.4,3.9,1.7,.4,0],[4.6,3.4,1.4,.3,0],[5,3.4,1.5,.2,0],[4.4,2.9,1.4,.2,0],[4.9,3.1,1.5,.1,0],[5.4,3.7,1.5,.2,0],[4.8,3.4,1.6,.2,0],[4.8,3,1.4,.1,0],[4.3,3,1.1,.1,0],[5.8,4,1.2,.2,0],[5.7,4.4,1.5,.4,0],[5.4,3.9,1.3,.4,0],[5.1,3.5,1.4,.3,0],[5.7,3.8,1.7,.3,0],[5.1,3.8,1.5,.3,0],[5.4,3.4,1.7,.2,0],[5.1,3.7,1.5,.4,0],[4.6,3.6,1,.2,0],[5.1,3.3,1.7,.5,0],[4.8,3.4,1.9,.2,0],[5,3,1.6,.2,0],[5,3.4,1.6,.4,0],[5.2,3.5,1.5,.2,0],[5.2,3.4,1.4,.2,0],[4.7,3.2,1.6,.2,0],[4.8,3.1,1.6,.2,0],[5.4,3.4,1.5,.4,0],[5.2,4.1,1.5,.1,0],[5.5,4.2,1.4,.2,0],[4.9,3.1,1.5,.1,0],[5,3.2,1.2,.2,0],[5.5,3.5,1.3,.2,0],[4.9,3.1,1.5,.1,0],[4.4,3,1.3,.2,0],[5.1,3.4,1.5,.2,0],[5,3.5,1.3,.3,0],[4.5,2.3,1.3,.3,0],[4.4,3.2,1.3,.2,0],[5,3.5,1.6,.6,0],[5.1,3.8,1.9,.4,0],[4.8,3,1.4,.3,0],[5.1,3.8,1.6,.2,0],[4.6,3.2,1.4,.2,0],[5.3,3.7,1.5,.2,0],[5,3.3,1.4,.2,0],[7,3.2,4.7,1.4,1],[6.4,3.2,4.5,1.5,1],[6.9,3.1,4.9,1.5,1],[5.5,2.3,4,1.3,1],[6.5,2.8,4.6,1.5,1],[5.7,2.8,4.5,1.3,1],[6.3,3.3,4.7,1.6,1],[4.9,2.4,3.3,1,1],[6.6,2.9,4.6,1.3,1],[5.2,2.7,3.9,1.4,1],[5,2,3.5,1,1],[5.9,3,4.2,1.5,1],[6,2.2,4,1,1],[6.1,2.9,4.7,1.4,1],[5.6,2.9,3.6,1.3,1],[6.7,3.1,4.4,1.4,1],[5.6,3,4.5,1.5,1],[5.8,2.7,4.1,1,1],[6.2,2.2,4.5,1.5,1],[5.6,2.5,3.9,1.1,1],[5.9,3.2,4.8,1.8,1],[6.1,2.8,4,1.3,1],[6.3,2.5,4.9,1.5,1],[6.1,2.8,4.7,1.2,1],[6.4,2.9,4.3,1.3,1],[6.6,3,4.4,1.4,1],[6.8,2.8,4.8,1.4,1],[6.7,3,5,1.7,1],[6,2.9,4.5,1.5,1],[5.7,2.6,3.5,1,1],[5.5,2.4,3.8,1.1,1],[5.5,2.4,3.7,1,1],[5.8,2.7,3.9,1.2,1],[6,2.7,5.1,1.6,1],[5.4,3,4.5,1.5,1],[6,3.4,4.5,1.6,1],[6.7,3.1,4.7,1.5,1],[6.3,2.3,4.4,1.3,1],[5.6,3,4.1,1.3,1],[5.5,2.5,4,1.3,1],[5.5,2.6,4.4,1.2,1],[6.1,3,4.6,1.4,1],[5.8,2.6,4,1.2,1],[5,2.3,3.3,1,1],[5.6,2.7,4.2,1.3,1],[5.7,3,4.2,1.2,1],[5.7,2.9,4.2,1.3,1],[6.2,2.9,4.3,1.3,1],[5.1,2.5,3,1.1,1],[5.7,2.8,4.1,1.3,1],[6.3,3.3,6,2.5,2],[5.8,2.7,5.1,1.9,2],[7.1,3,5.9,2.1,2],[6.3,2.9,5.6,1.8,2],[6.5,3,5.8,2.2,2],[7.6,3,6.6,2.1,2],[4.9,2.5,4.5,1.7,2],[7.3,2.9,6.3,1.8,2],[6.7,2.5,5.8,1.8,2],[7.2,3.6,6.1,2.5,2],[6.5,3.2,5.1,2,2],[6.4,2.7,5.3,1.9,2],[6.8,3,5.5,2.1,2],[5.7,2.5,5,2,2],[5.8,2.8,5.1,2.4,2],[6.4,3.2,5.3,2.3,2],[6.5,3,5.5,1.8,2],[7.7,3.8,6.7,2.2,2],[7.7,2.6,6.9,2.3,2],[6,2.2,5,1.5,2],[6.9,3.2,5.7,2.3,2],[5.6,2.8,4.9,2,2],[7.7,2.8,6.7,2,2],[6.3,2.7,4.9,1.8,2],[6.7,3.3,5.7,2.1,2],[7.2,3.2,6,1.8,2],[6.2,2.8,4.8,1.8,2],[6.1,3,4.9,1.8,2],[6.4,2.8,5.6,2.1,2],[7.2,3,5.8,1.6,2],[7.4,2.8,6.1,1.9,2],[7.9,3.8,6.4,2,2],[6.4,2.8,5.6,2.2,2],[6.3,2.8,5.1,1.5,2],[6.1,2.6,5.6,1.4,2],[7.7,3,6.1,2.3,2],[6.3,3.4,5.6,2.4,2],[6.4,3.1,5.5,1.8,2],[6,3,4.8,1.8,2],[6.9,3.1,5.4,2.1,2],[6.7,3.1,5.6,2.4,2],[6.9,3.1,5.1,2.3,2],[5.8,2.7,5.1,1.9,2],[6.8,3.2,5.9,2.3,2],[6.7,3.3,5.7,2.5,2],[6.7,3,5.2,2.3,2],[6.3,2.5,5,1.9,2],[6.5,3,5.2,2,2],[6.2,3.4,5.4,2.3,2],[5.9,3,5.1,1.8,2]]}}}]);
//# sourceMappingURL=843.b0244d58.chunk.js.map