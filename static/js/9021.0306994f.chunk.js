"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[9021],{79021:function(e,t,n){n.r(t),n.d(t,{Solution:function(){return u}});var s=n(74165),i=n(15861),a=n(37762),o=n(15671),r=n(43144),h=n(60136),l=n(29388),c=n(88859),f=(n(64355),n(38966)),u=function(e){(0,h.Z)(n,e);var t=(0,l.Z)(n);function n(e){var s;(0,o.Z)(this,n);var i=document.getElementById(e);return(s=t.call(this,i)).t=0,s.xpos=100,s.ypos=100,s.xspeed=10,s.yspeed=10,s.xdirection=1,s.ydirection=1,s.rad=50,s.vs=[],s.selVec=void 0,s.col=["#ff0000","#00ff00","#0000ff","#00fff0","#ff0000","#fff000","#0fff00"],s.tfLinearRegression=[],s.tfLinearRegression.push(new f.PE(1)),s.tfLinearRegression.push(new f.PE(2)),s.tfLinearRegression.push(new f.PE(3)),s.tfLinearRegression.push(new f.PE(4)),p().then((function(e){var t=Number.MAX_SAFE_INTEGER,n=Number.MIN_SAFE_INTEGER,i=Number.MAX_SAFE_INTEGER,o=Number.MIN_SAFE_INTEGER;e.map((function(e){var s=e.horsepower;s>n&&(n=s),s<t&&(t=s);var a=e.mpg;a>o&&(o=a),a<i&&(i=a)}));var r,h=(0,a.Z)(e);try{for(h.s();!(r=h.n()).done;){var l=r.value,c=l.horsepower,u=l.mpg;s.vs.push(new f.P((0,f.a2)(c,t,n,-.9,.9),(0,f.a2)(u,i,o,-.9,.9)))}}catch(p){h.e(p)}finally{h.f()}})),s.initUI(),s.start(),s}return(0,r.Z)(n,[{key:"render",value:function(e){this.RenderIndependentCanvas(e)}},{key:"mouseDown",value:function(e,t){for(var n=new f.P(this.mapX(e),this.mapY(t)),s=0;s<this.vs.length;++s)if(f.P.distanceTo(n,this.vs[s])<.05)return void(this.selVec=this.vs[s]);this.vs.push(new f.P(this.mapX(e),this.mapY(t)))}},{key:"mouseUp",value:function(e,t){}},{key:"mouseDrag",value:function(e,t){this.selVec&&(this.selVec.x=this.mapX(e),this.selVec.y=this.mapY(t))}},{key:"mouseClick",value:function(e,t){var n=new f.P(this.mapX(e),this.mapY(t));this.vs.push(new f.P(n.x,n.y))}},{key:"mouseMove",value:function(e,t){for(var n=void 0,s=new f.P(this.mapX(e),this.mapY(t)),i=0;i<this.vs.length;++i){f.P.distanceTo(s,this.vs[i])<.05&&(n=this.vs[i])}this.selVec=n||void 0}},{key:"keyDown",value:function(e){}},{key:"mapX",value:function(e){return(0,f.a2)(e,0,this.canvas.width,-1,1)}},{key:"mapY",value:function(e){return(0,f.a2)(e,0,this.canvas.height,1,-1)}},{key:"GridLine",value:function(e){e.strokeStyle="#555555";for(var t=this.canvas.width/20-1,n=this.canvas.height/20-1,s=0;s<20;s+=1){e.lineWidth=10===s?3:1;var i=t*s,a=0,o=i,r=this.canvas.height;e.beginPath(),e.moveTo(i,a),e.lineTo(o,r),e.stroke(),i=0,a=n*s,o=this.canvas.width,r=a,e.beginPath(),e.moveTo(i,a),e.lineTo(o,r),e.stroke()}}},{key:"RenderIndependentCanvas",value:function(e){this.t+=5,console.log(this.t);var t=Math.floor(this.t)<this.vs.length?Math.floor(this.t):this.vs.length;if(e.fillStyle="#000000",e.beginPath(),e.rect(0,0,e.canvas.width,e.canvas.height),e.closePath(),e.fill(),this.GridLine(e),this.vs.length>1)for(var n=0;n<this.tfLinearRegression.length;++n){for(var s=[],i=[],a=0;a<this.vs.length;++a)s.push(this.vs[a].x),i.push(this.vs[a].y);this.tfLinearRegression[n].train(s,i),this.RenderLine(e)}e.fillStyle="#00ff00";for(var o=0;o<t;++o)e.beginPath(),e.arc((0,f.a2)(this.vs[o].x,-1,1,0,this.canvas.width),(0,f.a2)(this.vs[o].y,-1,1,this.canvas.height,0),5,0,2*Math.PI),e.closePath(),e.fill();this.selVec&&(e.fillStyle="#ffffff",e.font="15px Arial",e.textAlign="center",e.fillText("x:".concat(this.selVec.x.toFixed(3),", y").concat(this.selVec.y.toFixed(3)),(0,f.a2)(this.selVec.x,-1,1,0,this.canvas.width),(0,f.a2)(this.selVec.y,-1,1,this.canvas.height,0)-9))}},{key:"RenderLine",value:function(e){for(var t=this,n=function(n){for(var s=[],i=-1;i<=1;i+=.08)s.push(i);var a=c.tidy((function(){return t.tfLinearRegression[n].predict(c.tensor1d(s))})),o=a.dataSync();a.dispose(),e.lineWidth=1,e.strokeStyle=t.col[n],e.beginPath(),e.moveTo((0,f.a2)(s[0],-1,1,0,t.canvas.width),(0,f.a2)(o[0],-1,1,t.canvas.height,0));for(var r=1;r<s.length;++r)e.lineTo((0,f.a2)(s[r],-1,1,0,t.canvas.width),(0,f.a2)(o[r],-1,1,t.canvas.height,0));e.stroke()},s=0;s<this.tfLinearRegression.length;++s)n(s)}},{key:"initUI",value:function(){var e=document.createElement("div");e.style.position="absolute",e.style.color="#ffffff";var t=document.createElement("p");t.textContent="click on this screen to add data",e.append(t),(t=document.createElement("p")).textContent="LinearRegression",t.style.marginTop="0px",t.style.marginBottom="0px",t.style.color=this.col[0],e.append(t),(t=document.createElement("p")).style.marginTop="0px",t.style.marginBottom="0px",t.style.color=this.col[1],t.textContent="Degree of polynomial - 2",e.append(t),(t=document.createElement("p")).style.marginTop="0px",t.style.marginBottom="0px",t.style.color=this.col[2],t.textContent="Degree of polynomial - 3",e.append(t),(t=document.createElement("p")).style.marginTop="0px",t.style.marginBottom="0px",t.style.color=this.col[3],t.textContent="Degree of polynomial - 4",e.append(t),this.hostDiv.append(e)}}]),n}(f.bb),p=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,n,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://storage.googleapis.com/tfjs-tutorials/carsData.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,i=n.map((function(e){return{mpg:e.Miles_per_Gallon,horsepower:e.Horsepower}})).filter((function(e){return null!=e.mpg&&null!=e.horsepower})),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=9021.0306994f.chunk.js.map