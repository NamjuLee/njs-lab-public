"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[21703],{21703:(e,t,i)=>{i.r(t),i.d(t,{NJSLabSandboxData:()=>a,getBtn:()=>d});class a{static init(e){return new a(e)}constructor(e){this.div=void 0,this.divTop=void 0,this.div=e;!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.search,t=e?e.split("?")[1]:window.location.search.slice(1),i={};if(t){t=t.split("#")[0];let e=t.split("&");for(let t=0;t<e.length;t++){let a=e[t].split("="),d=a[0],l="undefined"===typeof a[1]||a[1];if(d=d.toLowerCase(),"string"===typeof l&&(l=l.toLowerCase()),d.match(/\[(\d+)?\]$/)){let e=d.replace(/\[(\d+)?\]/,"");if(i[e]||(i[e]=[]),d&&d.match(/\[\d+\]$/)){if(null!==/\[(\d+)\]/.exec(d)){let t=/\[(\d+)\]/.exec(d);t&&t[1]&&(i[e][t]=l)}}else i[e].push(l)}else i[d]?i[d]&&"string"===typeof i[d]?(i[d]=[i[d]],i[d].push(l)):i[d].push(l):i[d]=l}}}();this.initTopUI(),this.init()}destroy(){for(;this.div.lastChild;)this.div.removeChild(this.div.lastChild)}async init(){return i.e(10086).then(i.bind(i,10086)).then((e=>{let{execution:t}=e;t(this.div)})).catch((e=>{}))}initTopUI(){this.divTop=this.div,this.divTop.appendChild(d({name:"Reset",width:60,callback:()=>{try{for(;this.div.firstChild;)this.div.removeChild(this.div.firstChild)}catch(e){}this.init()}})),this.divTop.appendChild(d({name:"Workshop",width:100,callback:()=>{alert("The admin param needed...")}})),this.divTop.appendChild(d({name:"Data",width:60,callback:()=>{alert("The admin param needed...")}})),this.divTop.appendChild(d({name:"TF",width:60,callback:()=>{alert("The admin param needed...")}})),this.divTop.appendChild(d({name:"Projects",width:100,callback:()=>{alert("The admin param needed...")}}))}}const d=e=>{let t=document.createElement("div");return t.style.height="40px",t.style.width="".concat(e.width,"px"),t.style.border="0px",t.style.padding="15px",t.style.cssFloat="left",t.style.color="#000000",t.textContent=e.name,t.onclick=e.callback,t.onmouseenter=()=>{t.style.color="#fafafa"},t.onmouseleave=()=>{t.style.color="#000000"},t}}}]);
//# sourceMappingURL=21703.e1438284.chunk.js.map