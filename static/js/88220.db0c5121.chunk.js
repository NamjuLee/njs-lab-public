"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[88220,75975],{97795:(e,t,s)=>{s.r(t),s.d(t,{DefinitionIndeCanvasCore:()=>a});var i=s(12850);class a{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:650,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:350;this.scene=void 0,this.indeCanvas=void 0,this.mOffX=-12,this.mOffY=-12,this.scene=e,this.scene.definitions.push(this),this.InitIndeCanvas(t,s)}InitIndeCanvas(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:650,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:350;this.scene.implementation.app.needUI?this.indeCanvas=new i.D(this.scene.implementation.app.viewController.NUIWrapper.NUI.independentPanelWrapper,50,50,e,t,!0):this.indeCanvas=new i.D(this.scene.implementation.app.viewController.NUIWrapper.NUI.independentPanelWrapper,1,-25,e,t,!0),this.indeCanvas.title="TF Env",this.indeCanvas.btnHam.isHidden=!0,this.indeCanvas.btnMini.isHidden=!0,this.indeCanvas.RenderIndependentCanvas=e=>this.RenderIndependentCanvas(e)}get width(){return this.indeCanvas.canvas.width}get height(){return this.indeCanvas.canvas.height}Init(e){}RenderIndependentCanvas(e){}MouseMove(e,t){}MouseMovePre(e,t){this.indeCanvas.IsMouseInsidePanel(e,t)&&this.MouseMove(e-this.indeCanvas.vec.x+this.mOffX,t-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDown(e,t){}MouseDownPre(e,t){this.indeCanvas.IsMouseInsidePanel(e,t)&&this.MouseDown(e-this.indeCanvas.vec.x+this.mOffX,t-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseUp(e,t){}MouseUpPre(e,t){this.indeCanvas.IsMouseInsidePanel(e,t)&&this.MouseUp(e-this.indeCanvas.vec.x+this.mOffX,t-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDrag(e,t){}MouseDragPre(e,t){this.indeCanvas.IsMouseInsidePanel(e,t)&&this.MouseDrag(e-this.indeCanvas.vec.x+this.mOffX,t-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseLeftClick(e,t){}MouseLeftClickPre(e,t){this.indeCanvas.IsMouseInsidePanel(e,t)&&this.MouseLeftClick(e-this.indeCanvas.vec.x+this.mOffX,t-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseMiddleClick(e,t){}MouseMiddleClickPre(e,t){this.indeCanvas.IsMouseInsidePanel(e,t)&&this.MouseMiddleClick(e-this.indeCanvas.vec.x+this.mOffX,t-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseRightClick(e,t){}MouseRightClickPre(e,t){this.indeCanvas.IsMouseInsidePanel(e,t)&&this.MouseRightClick(e-this.indeCanvas.vec.x+this.mOffX,t-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseDoubleClick(e,t){}MouseDoubleClickPre(e,t){this.indeCanvas.IsMouseInsidePanel(e,t)&&this.MouseDoubleClick(e-this.indeCanvas.vec.x+this.mOffX,t-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY)}MouseWheel(e,t,s){}MouseWheelPre(e,t,s){this.indeCanvas.IsMouseInsidePanel(e,t)&&this.MouseWheel(e-this.indeCanvas.vec.x+this.mOffX,t-this.indeCanvas.vec.y-this.indeCanvas.HeadHeight+this.mOffY,s)}}},88220:(e,t,s)=>{s.r(t),s.d(t,{IMAGE_H:()=>l,IMAGE_W:()=>r,MnistData:()=>p,TFMnist:()=>d});var i=s(65812),a=s(97795),n=s(75975),h=s(83797);class d extends a.DefinitionIndeCanvasCore{constructor(e){super(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:650,arguments.length>2&&void 0!==arguments[2]?arguments[2]:350),this.xpos=100,this.ypos=100,this.xspeed=10,this.yspeed=10,this.xdirection=1,this.ydirection=1,this.rad=50,this.vs=[],this.selVec=void 0,this.col=["#ff0000","#00ff00","#0000ff","#00fff0","#ff0000","#fff000","#0fff00"],this.tfLinearRegression=[],this.indeCanvas.title="TF MNist ",this.Init(),this.InitUI()}Init(){this.tfLinearRegression.push(new o(1)),this.tfLinearRegression.push(new o(2)),this.tfLinearRegression.push(new o(3)),this.tfLinearRegression.push(new o(4)),this.indeCanvas.canvas.style.zIndex="-1",h.fK.getData().then((e=>{}));const e=new p;console.log(e.getTrainData())}InitUI(){const e=document.createElement("div");e.style.position="absolute",e.style.left="40px",e.style.color="#ffffff";let t=document.createElement("p");t.textContent="click on this screen to add data",e.append(t),t=document.createElement("p"),t.textContent="LinearRegression",t.style.marginTop="0px",t.style.marginBottom="0px",t.style.color=this.col[0],e.append(t),t=document.createElement("p"),t.style.marginTop="0px",t.style.marginBottom="0px",t.style.color=this.col[1],t.textContent="Degree of polynomial - 2",e.append(t),t=document.createElement("p"),t.style.marginTop="0px",t.style.marginBottom="0px",t.style.color=this.col[2],t.textContent="Degree of polynomial - 3",e.append(t),t=document.createElement("p"),t.style.marginTop="0px",t.style.marginBottom="0px",t.style.color=this.col[3],t.textContent="Degree of polynomial - 4",e.append(t);const s=document.getElementById("indePanel");s&&s.append(e)}MouseDown(e,t){const s=new n.NVector3(this.MapX(e),this.MapY(t));for(let i=0;i<this.vs.length;++i)if(n.NVector3.Distance(s,this.vs[i])<.05)return void(this.selVec=this.vs[i]);this.vs.push(new n.NVector3(this.MapX(e),this.MapY(t)))}MouseDoubleClick(){}MouseMove(e,t){let s;const i=new n.NVector3(this.MapX(e),this.MapY(t));for(let a=0;a<this.vs.length;++a){n.NVector3.Distance(i,this.vs[a])<.05&&(s=this.vs[a])}this.selVec=s||void 0}MouseDrag(e,t){this.selVec&&(this.selVec.x=this.MapX(e),this.selVec.y=this.MapY(t))}MouseUp(){this.selVec=void 0}MapX(e){return n.MathUtility.Remap(e,0,this.width,-1,1)}MapY(e){return n.MathUtility.Remap(e,0,this.height,1,-1)}GridLine(e){e.strokeStyle="#555555";const t=this.width/20-1,s=this.height/20-1;for(let i=0;i<20;i+=1){e.lineWidth=10===i?3:1;let a=t*i,n=0,h=a,d=this.height;e.beginPath(),e.moveTo(a,n),e.lineTo(h,d),e.stroke(),a=0,n=s*i,h=this.width,d=n,e.beginPath(),e.moveTo(a,n),e.lineTo(h,d),e.stroke()}}RenderIndependentCanvas(e){if(e.fillStyle="#000000",e.beginPath(),e.rect(0,0,e.canvas.width,e.canvas.height),e.closePath(),e.fill(),this.GridLine(e),this.vs.length>1)for(let t=0;t<this.tfLinearRegression.length;++t){const s=[],i=[];for(let e=0;e<this.vs.length;++e)s.push(this.vs[e].x),i.push(this.vs[e].y);this.tfLinearRegression[t].train(s,i),this.RenderLine(e)}e.fillStyle="#00ff00";for(let t=0;t<this.vs.length;++t)e.beginPath(),e.arc(n.MathUtility.Remap(this.vs[t].x,-1,1,0,this.width),n.MathUtility.Remap(this.vs[t].y,-1,1,this.height,0),5,0,2*Math.PI),e.closePath(),e.fill();this.selVec&&(e.fillStyle="#ffffff",e.font="15px Arial",e.textAlign="center",e.fillText("x:".concat(this.selVec.x.toFixed(3),", y").concat(this.selVec.y.toFixed(3)),n.MathUtility.Remap(this.selVec.x,-1,1,0,this.width),n.MathUtility.Remap(this.selVec.y,-1,1,this.height,0)-9))}RenderLine(e){for(let t=0;t<this.tfLinearRegression.length;++t){const s=[];for(let e=-1;e<=1;e+=.08)s.push(e);const a=i.tidy((()=>this.tfLinearRegression[t].predict(i.tensor1d(s))));let h=a.dataSync();a.dispose(),e.lineWidth=1,e.strokeStyle=this.col[t],e.beginPath(),e.moveTo(n.MathUtility.Remap(s[0],-1,1,0,this.width),n.MathUtility.Remap(h[0],-1,1,this.height,0));for(let t=1;t<s.length;++t)e.lineTo(n.MathUtility.Remap(s[t],-1,1,0,this.width),n.MathUtility.Remap(h[t],-1,1,this.height,0));e.stroke()}}}class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.weights=[],this.bias=void 0,this.dim=3,this.leraningRate=.2,this.optimizer=void 0,this.dim=e;for(let t=0;t<5;++t){const e=i.variable(i.scalar(2*Math.random()-1));e.print(),this.weights.push(e)}this.bias=i.variable(i.scalar(2*Math.random()-1)),this.optimizer=i.train.adam(this.leraningRate)}predict1d(e){return e.mul(this.weights[0]).add(this.bias)}predict2d(e){return e.square().mul(this.weights[1]).add(e.mul(this.weights[0])).add(this.bias)}predict3d(e){return e.pow(i.scalar(3)).mul(this.weights[2]).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict4d(e){return e.pow(i.scalar(4)).mul(this.weights[3]).add(e.pow(i.scalar(3)).mul(this.weights[2])).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict5d(e){return e.pow(i.scalar(5)).mul(this.weights[4]).add(e.pow(i.scalar(4)).mul(this.weights[3])).add(e.pow(i.scalar(3)).mul(this.weights[2])).add(e.square().mul(this.weights[1])).add(e.mul(this.weights[0])).add(this.bias)}predict(e){return 5===this.dim?this.predict5d(e):4===this.dim?this.predict4d(e):3===this.dim?this.predict3d(e):2===this.dim?this.predict2d(e):(this.dim,this.predict1d(e))}loss(e,t){return e.sub(t).square().mean()}train(e,t){i.tidy((()=>{const s=i.tensor1d(e),a=i.tensor1d(t);this.optimizer.minimize((()=>this.loss(this.predict(s),a)))}))}}const l=28,r=28,c=l*r,g=10,m=55e3;class p{constructor(){this.testLabels=void 0,this.trainLabels=void 0,this.testImages=void 0,this.trainImages=void 0,this.datasetImages=void 0,this.datasetLabels=void 0}async load(){const e=new Image,t=document.createElement("canvas"),s=t.getContext("2d"),i=new Promise(((i,a)=>{e.crossOrigin="",e.onload=()=>{e.width=e.naturalWidth,e.height=e.naturalHeight;const a=new ArrayBuffer(65e3*c*4),n=5e3;t.width=e.width,t.height=n;for(let i=0;i<13;i++){const h=new Float32Array(a,i*c*n*4,c*n);s.drawImage(e,0,i*n,e.width,n,0,0,e.width,n);const d=s.getImageData(0,0,t.width,t.height);for(let e=0;e<d.data.length/4;e++)h[e]=d.data[4*e]/255}this.datasetImages=new Float32Array(a),i()},e.src="https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png"})),a=fetch("https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8"),n=(await Promise.all([i,a]))[1];this.datasetLabels=new Uint8Array(await n.arrayBuffer()),this.trainImages=this.datasetImages.slice(0,c*m),this.testImages=this.datasetImages.slice(c*m),this.trainLabels=this.datasetLabels.slice(0,55e4),this.testLabels=this.datasetLabels.slice(55e4)}getTrainData(){return{xs:i.tensor4d(this.trainImages,[this.trainImages.length/c,l,r,1]),labels:i.tensor2d(this.trainLabels,[this.trainLabels.length/g,g])}}getTestData(e){let t=i.tensor4d(this.testImages,[this.testImages.length/c,l,r,1]),s=i.tensor2d(this.testLabels,[this.testLabels.length/g,g]);return null!=e&&(t=t.slice([0,0,0,0],[e,l,r,1]),s=s.slice([0,0],[e,g])),{xs:t,labels:s}}}},75975:(e,t,s)=>{s.r(t),s.d(t,{ACTION_TYPE:()=>i.KW,ACTIVECOMMAND_MODE:()=>i.AG,ActiveCommandBase:()=>i.wm,AppAccessibility:()=>i.Wv,AppProperties:()=>i.gj,ArrayUtility:()=>i.R3,BrowserUtility:()=>i.R7,CLICK_TYPE:()=>i.uh,CLOGTYPE:()=>i.g6,COMPILE_MODE:()=>i.Iq,ColorUtility:()=>i.mK,Deltatime:()=>i.gk,EVENT_LISTENER_TYPE:()=>i.GZ,FHTYPE:()=>i.OH,GTYPE:()=>i.OB,GeometryBase:()=>i.bx,INTERACTION_MODE:()=>i.WU,LINECAP:()=>i.EQ,MathUtility:()=>i.$H,NDataUtility:()=>i.eu,NUI:()=>i.Fc,NVector3:()=>i.h9,NumericalMotion:()=>i.aX,OPTIMIZER:()=>i.sg,PRESS_TYPE:()=>i.dc,TEXTALIGN:()=>i.mH,TEXTBOX:()=>i.SE,TOUCH_TYPE:()=>i.KV,UNIT:()=>i.iI});var i=s(4842)}}]);
//# sourceMappingURL=88220.db0c5121.chunk.js.map