"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[1255],{21255:function(t,a,e){e.r(a),e.d(a,{Solution:function(){return u},addData:function(){return b},analyticsFirebase:function(){return r},appFirebase:function(){return i},dbFirestore:function(){return d},deleteData:function(){return h},readData:function(){return l},setData:function(){return p},updateData:function(){return f}});var n=e(44702),s=e(65390),o=e(67799),c=e(905);const i=(0,n.ZF)({apiKey:"AIzaSyAsGNHXVPsIjOJA5eY5XY8sLEF11ispMJg",authDomain:"njs-lab.firebaseapp.com",projectId:"njs-lab",storageBucket:"njs-lab.appspot.com",messagingSenderId:"438027774199",appId:"1:438027774199:web:d12c3a33744a9d411a8bf2",measurementId:"G-VH51C7700D"}),r=(0,s.IH)(i),d=(0,o.ad)(i);class u{constructor(t){if(this.hostDiv=void 0,c.x.demo){this.hostDiv=t,console.log("appFirebase",i),console.log("analyticsFirebase",r),console.log("dbFirebase",d._databaseId.projectId);const a=document.createElement("div");a.contentEditable="true",a.style.width="200px",a.style.height="50px",a.style.background="#fff",this.hostDiv.appendChild(a),p("cities","LAA",{name:99900}),this.getData()}}async getData(){const t=await l("cities");console.log(t)}}const l=async t=>{const a=await(0,o.PL)((0,o.hJ)(d,t)),e=[];return a.forEach((t=>{console.log("".concat(t.id," => ").concat(t.data()));const a={id:t.id,data:t.data()};e.push(a)})),e},p=async(t,a,e)=>{await(0,o.pl)((0,o.JU)(d,t,a),{...e,timestamp:(0,o.Bt)()})},b=async(t,a,e)=>{const n=(0,o.JU)((0,o.hJ)(d,t,a));await(0,o.pl)(n,{...e,timestamp:(0,o.Bt)()})},f=async(t,a,e)=>{const n=(0,o.JU)(d,t,a);await(0,o.r7)(n,e)},h=async(t,a)=>{await(0,o.oe)((0,o.JU)(d,t,a))}}}]);
//# sourceMappingURL=1255.c629ea93.chunk.js.map