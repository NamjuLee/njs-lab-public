"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[7716],{27716:(e,a,s)=>{s.r(a),s.d(a,{Solution:()=>n});var t=s(53304),r=s(30386);s(24488);class n{destroy(){}constructor(e){o()}}const o=async()=>{const e=await l();i(e);const a=await u(e),s=p();await c(s,a.inputs,a.labels),m(s,e,a)},l=async()=>{const e=await fetch("https://storage.googleapis.com/tfjs-tutorials/carsData.json");return(await e.json()).map((e=>({mpg:e.Miles_per_Gallon,horsepower:e.Horsepower}))).filter((e=>null!=e.mpg&&null!=e.horsepower))},i=async e=>{const a=e.map((e=>({x:e.horsepower,y:e.mpg})));r.render.scatterplot({name:"Horsepower v MPG"},{values:a},{xLabel:"Horsepower",yLabel:"MPG",height:300})},p=()=>{const e=t.Pel();return e.add(t.ugM.dense({inputShape:[1],units:1,useBias:!0})),e.add(t.ugM.dense({units:1,useBias:!0})),e},u=async e=>t.lub((()=>{t.D5U.shuffle(e);const a=e.map((e=>e.horsepower)),s=e.map((e=>e.mpg)),r=t.odF(a,[a.length,1]),n=t.odF(s,[s.length,1]),o=r.max(),l=r.min(),i=n.max(),p=n.min();return{inputs:r.sub(l).div(o.sub(l)),labels:n.sub(p).div(i.sub(p)),inputMax:o,inputMin:l,labelMax:i,labelMin:p}})),c=async(e,a,s)=>{e.compile({optimizer:t.p_j.adam(),loss:t.MB5.meanSquaredError,metrics:["mse"]});return await e.fit(a,s,{batchSize:32,epochs:30,shuffle:!0,callbacks:r.show.fitCallbacks({name:"Training Performance"},["loss","mse"],{height:200,callbacks:["onEpochEnd"]})})},m=(e,a,s)=>{const{inputMax:n,inputMin:o,labelMin:l,labelMax:i}=s,[p,u]=t.lub((()=>{const a=t.SX3(0,1,100),s=e.predict(a.reshape([100,1])),r=a.mul(n.sub(o)).add(o),p=s.mul(i.sub(l)).add(l);return[r.dataSync(),p.dataSync()]})),c=Array.from(p).map(((e,a)=>({x:e,y:u[a]}))),m=a.map((e=>({x:e.horsepower,y:e.mpg})));r.render.scatterplot({name:"Model Predictions vs Original Data"},{values:[m,c],series:["original","predicted"]},{xLabel:"Horsepower",yLabel:"MPG",height:300})}}}]);
//# sourceMappingURL=7716.dc4e5090.chunk.js.map