"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[4283],{84283:(t,s,i)=>{i.r(s),i.d(s,{CanvasDrawing:()=>p,CustomDynamicBinSystem:()=>r,Pixel:()=>c,Solution:()=>l});var e=i(55913),h=i(87968);class l extends e.J0{constructor(t){super(t),this.pts=[],this.captureVec=void 0,this.pixelMap=void 0,this.divText=void 0,this.center(-71.08759760905814,42.326218799267316),this.zoom(12),this.mView.navigation={gamepad:{enabled:!1},mouseWheelZoomEnabled:!1},this.disablePan=!0;const s=document.createElement("div");s.style.position="absolute",s.style.margin="20px",this.hostDiv.appendChild(s);let i=n("Type","0","5");i.slider.defaultValue="0",i.div.style.marginTop="25px",i.text.textContent="Type",s.appendChild(i.div),i.slider.oninput=()=>{this.pixelMap.mode=+i.slider.value,this.pixelMap.Init(),this.pixelMap.UpdateData(this.pts)},this.divText=document.createElement("div"),this.divText.style.color="#0ff",this.divText.style.marginTop="22px",this.divText.style.fontSize="18px",this.divText.textContent="Num of data:",s.appendChild(this.divText),(0,h.getCSVFromURL)("/njs-lab-public/static/data/Primary_Street_Trees_Public.csv").then((t=>{const s=t.split(/\r\n|\r|\n/g);for(let i=1;i<s.length;++i){const t=s[i].split(","),e=+t[13],l=+t[14];if(!isNaN(e)&&!isNaN(l)&&0!==e&&0!==l){const t=this.toScreen(e,l);this.pts.push(new h.Vector3(t[0],t[1],0))}if(i>1e3)break}this.pixelMap=new r(new h.Vector3(200,200,0),new h.Vector3(900,900,0)),this.pixelMap.mode=0,this.pixelMap.Init(),this.pixelMap.UpdateData(this.pts),this.start()}))}render(t){t.globalCompositeOperation="color-dodge",this.pts.forEach((s=>{o(t,s.x,s.y,this.time+3,"rgba(10, 255, 10, 0.2)")})),this.pixelMap.RenderPixel(t),this.pixelMap.RenderCorner(t),t.globalCompositeOperation="source-over",this.pixelMap.RenderSelPixel(t)}mouseDown(t,s){this.captureVec=this.pixelMap.IsHover(t,s)}mouseMove(t,s){if(this.pixelMap&&(this.pixelMap.MoveInspection(t,s),this.pixelMap.selPixel)){const t="Num of data: "+this.pixelMap.selPixel.vec.z+", index:"+this.pixelMap.selPixel.i+","+this.pixelMap.selPixel.j;this.divText.textContent=t}else;}mouseDrag(t,s){this.captureVec&&(this.pixelMap.DragControlPoint(t,s),this.pixelMap.UpdateData(this.pts))}mouseUp(t,s){this.captureVec=void 0}}const o=(t,s,i,e,h)=>{t.fillStyle=h,t.beginPath(),t.arc(s,i,2*(Math.sin(.8*e)+6),0,2*Math.PI),t.closePath(),t.fill()};class r{constructor(t,s){this.v0=void 0,this.v1=void 0,this.rx=void 0,this.ry=void 0,this.ddx=void 0,this.ddy=void 0,this.pts=[],this.ptList=[],this.listPixels=[],this.m=void 0,this.t=0,this.mode=0,this.selPixel=void 0,this.v0=t,this.v1=s,this.rx=10,this.ry=10,this.ddx=0,this.ddy=0,this.m=new h.Vector3(0,0),this.Init()}IsHover(t,s){this.m.x=t,this.m.y=s;let i=this.pts[0][0];return h.Vector3.distanceTo(this.m,i)<8?i:(i=this.pts[0][this.pts[0].length-1],h.Vector3.distanceTo(this.m,i)<8?i:(i=this.pts[this.pts.length-1][this.pts[0].length-1],h.Vector3.distanceTo(this.m,i)<8?i:(i=this.pts[this.pts.length-1][0],h.Vector3.distanceTo(this.m,i)<8?i:void 0)))}Move(t,s){this.MoveInspection(t,s)}MoveInspection(t,s){this.m.x=t,this.m.y=s;for(let i=0;i<this.listPixels.length;++i){if((0,h.isInsideOfVecs)(this.m,this.listPixels[i].recVec))return void(this.selPixel=this.listPixels[i]);this.selPixel=void 0}}DragControlPoint(t,s){this.m.x=t,this.m.y=s;let i=this.pts[0][0];h.Vector3.distanceTo(this.m,i)<60&&(this.v0.x=t,this.v0.y=s),i=this.pts[0][this.pts[0].length-1],h.Vector3.distanceTo(this.m,i)<60&&(this.v1.x=t,this.v0.y=s),i=this.pts[this.pts.length-1][this.pts[0].length-1],h.Vector3.distanceTo(this.m,i)<60&&(this.v1.x=t,this.v1.y=s),i=this.pts[this.pts.length-1][0],h.Vector3.distanceTo(this.m,i)<60&&(this.v0.x=t,this.v1.y=s),this.Init()}Init(){switch(this.ddx=(this.v1.x-this.v0.x)/(this.rx-1),this.ddy=(this.v1.y-this.v0.y)/(this.ry-1),this.pts=[],this.ptList=[],this.listPixels=[],this.InitGrid(),this.mode){case 0:this.ComputeRec();break;case 1:this.ComputeTriA();break;case 2:this.ComputeTriB();break;case 3:this.ComputeDia();break;case 4:this.ComputeLShape();break;default:this.ComputeHex()}}UpdateData(t){for(let s=0;s<this.listPixels.length;++s)this.listPixels[s].data.num=0;for(let s=0;s<t.length;++s){const i=t[s];for(let t=0;t<this.listPixels.length;++t)(0,h.isInsideOfVecs)(i,this.listPixels[t].recVec)&&(this.listPixels[t].vec.z+=1)}}InitGrid(){this.pts=[];for(let t=0;t<this.ry;++t){let s=this.v0.y+t*this.ddy,i=[];for(let t=0;t<this.rx;++t){let e=this.v0.x+t*this.ddx;const l=new h.Vector3(e,s,0);i.push(l),this.ptList.push(l)}this.pts.push(i)}}ComputeRec(){this.listPixels=[];for(let t=0;t<this.ry;t+=1)for(let s=0;s<this.rx;s+=1)if(s<this.rx-1&&t<this.ry-1){let i=new c(this,s,t);i.recVec.push(this.pts[t][s]),i.recVec.push(this.pts[t][s+1]),i.recVec.push(this.pts[t+1][s+1]),i.recVec.push(this.pts[t+1][s]),this.listPixels.push(i)}}ComputeTriA(){this.listPixels=[];for(let t=0;t<this.ry;t+=1)for(let s=0;s<this.rx;s+=1)if(s<this.rx-1&&t<this.ry-1){let i=new c(this,s,t);i.recVec.push(this.pts[t][s]),i.recVec.push(this.pts[t][s+1]),i.recVec.push(this.pts[t+1][s]),this.listPixels.push(i),i=new c(this,s,t),i.recVec.push(this.pts[t][s+1]),i.recVec.push(this.pts[t+1][s+1]),i.recVec.push(this.pts[t+1][s]),this.listPixels.push(i)}}ComputeDia(){this.listPixels=[];for(let t=0;t<this.ry;t+=1)for(let s=0;s<this.rx;s+=1)if(s<this.rx-2&&t<this.ry-1){let i=new c(this,s,t);i.recVec.push(this.pts[t][s]),i.recVec.push(this.pts[t][s+1]),i.recVec.push(this.pts[t+1][s+2]),i.recVec.push(this.pts[t+1][s+1]),this.listPixels.push(i)}}ComputeLShape(){this.listPixels=[];for(let t=0;t<this.ry;t+=3)for(let s=0;s<this.rx;s+=2)if(s<this.rx-2&&t<this.ry-2){let i=new c(this,s,t);i.recVec.push(this.pts[t][s]),i.recVec.push(this.pts[t][s+2]),i.recVec.push(this.pts[t+1][s+2]),i.recVec.push(this.pts[t+1][s+1]),i.recVec.push(this.pts[t+2][s+1]),i.recVec.push(this.pts[t+2][s]),this.listPixels.push(i),i=new c(this,s,t),i.recVec.push(this.pts[t+2][s]),i.recVec.push(this.pts[t+3][s]),i.recVec.push(this.pts[t+3][s+2]),i.recVec.push(this.pts[t+1][s+2]),i.recVec.push(this.pts[t+1][s+1]),i.recVec.push(this.pts[t+2][s+1]),this.listPixels.push(i)}}ComputeTriB(){this.listPixels=[];for(let t=0;t<this.ry;t+=1)for(let s=0;s<this.rx;s+=1)if(s<this.rx-1&&t<this.ry-1){let i=new c(this,s,t);i.recVec.push(this.pts[t][s]),i.recVec.push(this.pts[t][s+1]),i.recVec.push(this.pts[t+1][s+1]),this.listPixels.push(i),i=new c(this,s,t),i.recVec.push(this.pts[t][s]),i.recVec.push(this.pts[t+1][s+1]),i.recVec.push(this.pts[t+1][s]),this.listPixels.push(i)}}ComputeHex(){this.listPixels=[];let t=!0;for(let s=0;s<this.ry;s+=2){for(let i=0;i<this.rx;i+=2)if(t){if(i%2===0&&i<this.rx-2&&s%2===0&&s<this.ry-2){let t=new c(this,i,s);t.recVec.push(this.pts[s][i+1]),t.recVec.push(this.pts[s+1][i+2]),t.recVec.push(this.pts[s+2][i+2]),t.recVec.push(this.pts[s+3][i+1]),t.recVec.push(this.pts[s+2][i]),t.recVec.push(this.pts[s+1][i]),this.listPixels.push(t)}}else if(i%2===0&&i<this.rx-2&&s%2===0&&s<this.ry-2){let t=new c(this,i,s);t.recVec.push(this.pts[s][i+2]),t.recVec.push(this.pts[s+1][i+3]),t.recVec.push(this.pts[s+2][i+3]),t.recVec.push(this.pts[s+3][i+2]),t.recVec.push(this.pts[s+2][i+1]),t.recVec.push(this.pts[s+1][i+1]),this.listPixels.push(t)}t=!t}}RenderPixel(t){for(let s=0;s<this.listPixels.length;++s)this.listPixels[s].Render(t)}RenderCorner(t){let s=this.pts[0][0];p.PointByNVecAni(t,s,7,this.t,"rgba(0, 0, 0, 1)"),t.stroke(),s=this.pts[0][this.pts[0].length-1],p.PointByNVecAni(t,s,7,this.t,"rgba(0, 0, 0, 1)"),t.stroke(),s=this.pts[this.pts.length-1][this.pts[0].length-1],p.PointByNVecAni(t,s,7,this.t,"rgba(0, 0, 0, 1)"),t.stroke(),s=this.pts[this.pts.length-1][0],p.PointByNVecAni(t,s,7,this.t,"rgba(0, 0, 0, 1)"),t.stroke(),this.t+=.07}RenderSelPixel(t){if(this.selPixel){t.lineWidth=3,t.strokeStyle="#ffffff",t.beginPath(),t.moveTo(this.selPixel.recVec[0].x,this.selPixel.recVec[0].y);for(let s=1;s<this.selPixel.recVec.length;++s)t.lineTo(this.selPixel.recVec[s].x,this.selPixel.recVec[s].y);t.closePath(),t.stroke()}}}class c{static GetID(){return c.ID++}constructor(t,s,i){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new h.Vector3(0,0,0);this.map=void 0,this.vec=void 0,this.norV=void 0,this.nPix=[],this.recVec=void 0,this.i=-1,this.j=-1,this.k=-1,this.u=-1,this.v=-1,this.id=void 0,this.color=[],this.data=void 0,this.map=t,this.vec=e,this.nPix=[],this.recVec=[],this.i=s,this.j=i,this.k=-1,this.id=c.GetID(),this.data={}}ToString(){return"Pixel"+this.id}Update(){}Render(t){t.lineWidth=1,t.strokeStyle="rgba(0, 0, 0, 0.3)",t.fillStyle="rgba(0, 255, 255, ".concat(.05*this.vec.z," )"),t.beginPath(),t.moveTo(this.recVec[0].x,this.recVec[0].y);for(let s=1;s<this.recVec.length;++s)t.lineTo(this.recVec[s].x,this.recVec[s].y);t.closePath(),t.stroke(),t.fill()}}c.ID=0;class p{static LineByVecs(t,s,i){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#ff0000";t.strokeStyle=h,t.lineWidth=e,t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(i.x,i.y),t.closePath(),t.stroke()}static Line(t,s,i,e,h){let l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#ff0000";t.strokeStyle=o,t.lineWidth=l,t.beginPath(),t.moveTo(s,i),t.lineTo(e,h),t.closePath(),t.stroke()}static Point(t,s,i){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#ff0000";t.fillStyle=h,t.beginPath(),t.arc(s,i,e,0,2*Math.PI),t.closePath(),t.fill()}static PointByNVec(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#ff0000";t.fillStyle=e,t.beginPath(),t.arc(s.x,s.y,i,0,2*Math.PI),t.closePath(),t.fill()}static PointByNVecAni(t,s){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,e=arguments.length>3?arguments[3]:void 0,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#ff0000";t.fillStyle=h,t.beginPath(),t.arc(s.x,s.y,i+2*(1+Math.sin(e)),0,2*Math.PI),t.closePath(),t.fill()}static GridLineOrigin(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:20;const l=-s*e*.5,o=-i*h*.5;t.lineWidth=.1;for(let r=0;r<=i;++r)t.beginPath(),t.moveTo(l,o+h*r),t.lineTo(s*e*.5,o+h*r),t.closePath(),t.stroke(),t.beginPath(),t.moveTo(l+e*r,o),t.lineTo(o+h*r,i*h*.5),t.closePath(),t.stroke()}static GridPointOrigin(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:20;const l=-s*e*.5,o=-i*h*.5;t.lineWidth=.1;for(let r=0;r<=i;++r)for(let i=0;i<=s;++i)t.beginPath(),t.arc(l+e*i,o+h*r,1,0,2*Math.PI),t.closePath(),t.fill()}}const n=function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"100";const e=document.createElement("div");e.style.display="flex";const h=document.createElement("input");h.type="range",h.min=s,h.max=i;const l=document.createElement("div");return l.textContent=t,l.style.color="#aaa",e.appendChild(h),e.appendChild(l),{div:e,slider:h,text:l}}}}]);
//# sourceMappingURL=4283.83967bde.chunk.js.map