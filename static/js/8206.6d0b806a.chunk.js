"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[8206],{58206:function(t,n,e){e.r(n),e.d(n,{Solution:function(){return c}});var o=e(31734),s=(e(60382),e(55913));class c{destroy(){}constructor(t){const n=[1,2,3,4,5],e=[0,5,10,15,20],o=new s.Ol;o.fit(n,e);o.predict([2.5]);const c=new s.Sk;c.fit(n,e,500);c.predict([2.5]);const p=[1,2,3,4],d=[1,3,5,7],u=[3];r(p,d,u),i(p,d,u)}}const i=(t,n,e)=>{const s=o.Pel();s.add(o.ugM.dense({units:1,inputShape:[1]})),s.compile({loss:"meanSquaredError",optimizer:"sgd"});const c=o.odF(t,[4,1]),i=o.odF(n,[4,1]);c.print(),i.print();const r=o.odF([3],[1,1]);s.fit(c,i,{epochs:100}).then((()=>{s.predict(r).print()}))},r=(t,n,e)=>{const o=new s.Ol;o.fit(t,n);o.predict(e)}}}]);
//# sourceMappingURL=8206.6d0b806a.chunk.js.map