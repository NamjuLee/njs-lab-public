"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[7105],{17105:function(t,e,n){n.r(e),n.d(e,{Renderer:function(){return v},Solution:function(){return f}});var i=n(60136),s=n(29388),a=n(15671),o=n(43144),r=n(55913),l=n(87968),h=function(){function t(){var e=this;(0,a.Z)(this,t),this.data={},this.day=24,this.scale=1,this.offsetData=1,document.onkeydown=function(t){e.offsetData++,console.log(e.offsetData)},(0,l.getCSVFromURL)("/njs-lab-public/static/data/Watabot/obs_104_1928_d047_15c7.csv").then((function(t){for(var n=t.split(/\r\n|\r|\n/g),i=n[0].split(","),s={},a=!0,o=0;o<i.length;++o)console.log(i[o]),a&&"time (UTC)"===i[o]?(s[i[o]]=[],a=!1):s[i[o]]=new Float32Array(n.length-1);for(var r=1;r<n.length;++r)for(var l=n[r].split(","),h=0;h<i.length;++h){var c=i.indexOf(i[h]);-1!==c&&(s[i[h]][r-1]=l[c])}e.data=s,console.log(s)}))}return(0,o.Z)(t,[{key:"Offset",value:function(t){}},{key:"wheel",value:function(t){t.deltaY<0?this.scale+=.25*this.scale:this.scale-=.25*this.scale,this.scale=this.scale<.012?.012:this.scale,console.log(this.scale)}},{key:"render",value:function(t){var e=this.data["mass_concentration_of_blue_green_algae_in_sea_water (ug L-1)"];c(t,e,this.scale,this.day),u(t,e,"#f00",this.scale,this.day,this.offsetData)}}]),t}(),c=function(t,e,n,i){for(var s=0;s<e.length;s++){if(t.lineWidth=.5,t.strokeStyle="rgba(200, 200, 200, 1)",n>.1&&s%(12*i)===0){var a=s*n;t.beginPath(),t.moveTo(a,0),t.lineTo(a,t.canvas.height),t.stroke()}if(t.lineWidth=1,t.strokeStyle="rgba(0, 0, 255, 1)",n>.02&&s%(12*i*7)===0){var o=s*n;t.beginPath(),t.moveTo(o,0),t.lineTo(o,t.canvas.height),t.stroke()}if(t.lineWidth=1,t.strokeStyle="rgba(0, 255, 0, 1)",s%(12*i*30)===0){var r=s*n;t.beginPath(),t.moveTo(r,0),t.lineTo(r,t.canvas.height),t.stroke()}}},u=function(t,e,n,i,s,a){t.lineWidth=3,t.strokeStyle=n,t.beginPath();var o=0;t.moveTo(o,e[0]);for(var r=1;r<e.length;r+=a){for(var l=(o+=1)*i*a,h=0,c=0,u=0;u<a;++u)c<e[r+u]&&(c=e[r+u]);h=c,t.lineTo(l,h)}t.stroke()},f=function(){function t(e){(0,a.Z)(this,t),this.divHost=void 0,this.renderer=void 0,this.divHost=e,this.divHost.style.display="flex",this.divHost.style.alignItems="center";var n=document.createElement("div");n.style.marginLeft="auto",n.style.marginRight="auto",n.style.backgroundColor="#555",n.style.width="900px",n.style.height="500px",this.divHost.appendChild(n),this.renderer=new v(n)}return(0,o.Z)(t,[{key:"destroy",value:function(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}]),t}(),v=function(t){(0,i.Z)(n,t);var e=(0,s.Z)(n);function n(t){var i;return(0,a.Z)(this,n),(i=e.call(this,t)).waterQualityInspector=void 0,i.canvas.style.position="relative",i.canvas.style.width="100%",i.canvas.style.height="100%",i.canvas.style.background="#fff",i.canvas.onwheel=function(t){i.waterQualityInspector.wheel(t)},i.waterQualityInspector=new h,i.start(),i}return(0,o.Z)(n,[{key:"mouseDown",value:function(t,e){}},{key:"mouseUp",value:function(t,e){}},{key:"mouseDrag",value:function(t,e){}},{key:"render",value:function(t){this.waterQualityInspector.render(this.ctx)}}]),n}(r.bb)}}]);
//# sourceMappingURL=7105.f0fda088.chunk.js.map