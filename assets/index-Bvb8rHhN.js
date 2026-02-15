import"./index-CD1L2QNH.js";import{R as L}from"./RendererCanvas-ZMRkw2u7.js";const S=[{color:3355443,width:85,length:120,name:"Loading Zone",relatedTo:["Integration Bay","Finishing Zone","Fabrication","Hardware","Network Lab"]},{color:4487082,width:212.5,length:120,name:"Integration Bay",relatedTo:["Loading Zone"]},{color:15321968,width:84,length:70,name:"Finishing Zone",relatedTo:["Integration Bay","Loading Zone"]},{color:14779775,width:84,length:70,name:"Fabrication",relatedTo:["Integration Bay","Loading Zone"]},{color:15572582,width:84,length:70,name:"Hardware",relatedTo:["Integration Bay","Network Lab","Loading Zone"]},{color:9206768,width:84,length:60,name:"Network Lab",relatedTo:["Loading Zone"]},{color:11158698,width:85,length:80,name:"Reception",relatedTo:["Work Desk Zone","Demo Area","Restroom","Utility","Wellness","Ping Pong"]},{color:4500087,width:212.5,length:45,name:"Work Desk Zone",relatedTo:["Reception"]},{color:11640819,width:85,length:70,name:"Demo Area",relatedTo:["Reception"]},{color:11167300,width:50,length:100,name:"Restroom",relatedTo:["Reception"]},{color:4144959,width:50,length:50,name:"Utility",relatedTo:["Integration Bay","Restroom","Reception"]},{color:12703864,width:90,length:50,name:"Wellness",relatedTo:["Reception"]},{color:12703864,width:90,length:50,name:"Ping Pong",relatedTo:["Reception"]}],z=[{color:3355443,width:85,length:120,name:"Loading Zone",relatedTo:["Integration Bay","Fabrication","Hardware","Network Lab"]},{color:4487082,width:212.5,length:120,name:"Integration Bay",relatedTo:["Loading Zone","Fabrication","Hardware","Network Lab","Demo Area","Work Desk Zone"]},{color:14779775,width:84,length:70,name:"Fabrication",relatedTo:["Integration Bay","Loading Zone"]},{color:15572582,width:84,length:70,name:"Hardware",relatedTo:["Integration Bay","Fabrication"]},{color:9206768,width:84,length:60,name:"Network Lab",relatedTo:["Integration Bay","Hardware"]},{color:11158698,width:85,length:80,name:"Reception",relatedTo:["Demo Area","Work Desk Zone","Restroom"]},{color:11640819,width:110,length:90,name:"Demo Area",relatedTo:["Reception","Integration Bay","Work Desk Zone"]},{color:4500087,width:212.5,length:60,name:"Work Desk Zone",relatedTo:["Demo Area","Integration Bay"]},{color:11167300,width:50,length:100,name:"Restroom",relatedTo:["Reception","Utility"]},{color:4144959,width:50,length:50,name:"Utility",relatedTo:["Restroom","Integration Bay"]},{color:12703864,width:90,length:50,name:"Wellness",relatedTo:["Work Desk Zone"]},{color:12703864,width:90,length:50,name:"Ping Pong",relatedTo:["Work Desk Zone"]}],P=[{name:"Loading Zone",color:3355443,width:85,length:120,relatedTo:["Fabrication","Hardware"]},{name:"Fabrication",color:14779775,width:84,length:70,relatedTo:["Loading Zone","Integration Bay"]},{name:"Hardware",color:15572582,width:84,length:70,relatedTo:["Loading Zone","Integration Bay","Network Lab"]},{name:"Network Lab",color:9206768,width:84,length:60,relatedTo:["Hardware","Integration Bay"]},{name:"Integration Bay",color:4487082,width:212.5,length:120,cx:0,cy:0,relatedTo:["Fabrication","Hardware","Network Lab","Demo Area","Work Desk Zone"]},{name:"Reception",color:11158698,width:85,length:80,cx:220,cy:-40,relatedTo:["Demo Area","Restroom"]},{name:"Demo Area",color:11640819,width:120,length:90,cx:220,cy:60,relatedTo:["Reception","Integration Bay"]},{name:"Work Desk Zone",color:4500087,width:212.5,length:60,cx:0,cy:140,relatedTo:["Integration Bay","Wellness","Ping Pong"]},{name:"Restroom",color:11167300,width:50,length:100,cx:320,cy:-40,relatedTo:["Reception","Utility"]},{name:"Utility",color:4144959,width:50,length:50,cx:320,cy:40,relatedTo:["Restroom","Integration Bay"]},{name:"Wellness",color:12703864,width:90,length:50,cx:-120,cy:140,relatedTo:["Work Desk Zone"]},{name:"Ping Pong",color:12703864,width:90,length:50,cx:120,cy:140,relatedTo:["Work Desk Zone"]}];class T{constructor(t,e,i,o,n){this.w=t,this.h=e,this.data=i,this.recPt=o,this.loadPt=n,this.areas=[]}getRelation(t,e){if(!t.relatedTo||!e.relatedTo)return 0;const i=e.relatedTo.indexOf(t.name),o=t.relatedTo.indexOf(e.name);return(i>=0?1/(i+1):0)+(o>=0?1/(o+1):0)}sortByRelation(t,e){return[...t].sort((i,o)=>{const n=this.getRelation(o,{name:e})-this.getRelation(i,{name:e});return Math.abs(n)>.001?n:this.getRelation(o,i)-this.getRelation(i,o)})}getEdge(t){const e=[t.y,this.h-t.y,t.x,this.w-t.x];return["top","bottom","left","right"][e.indexOf(Math.min(...e))]}placeAtEdge(t,e){const i=t.width*t.length,o=e==="left"||e==="right",n=Math.sqrt(o?i*(this.w/this.h):i*(this.h/this.w));return{x:e==="right"?this.w-n:0,y:e==="bottom"?this.h-n:0,width:o?n:this.w,height:o?this.h:n,name:t.name,color:`#${t.color.toString(16).padStart(6,"0")}`,isFixed:!0}}getAvailableRect(t,e,i){let o={x:0,y:0,width:this.w,height:this.h};return t.forEach(n=>{const l=n.name==="Reception"?e:i;l==="top"?(o.y+=n.height,o.height-=n.height):l==="bottom"?o.height-=n.height:(l==="left"&&(o.x+=n.width),o.width-=n.width)}),o}squarify(t,e,i,o,n,l){if(n.length===0)return;const c=i>=o,a=c?o:i;let d=0,p=1/0,h=0;for(let m=0;m<n.length;m++){const s=d+n[m],u=this.getWorst(n.slice(0,m+1),a,s);if(u>p)break;d=s,p=u,h++}const r=d/a;let g=0;for(let m=0;m<h;m++){const s=n[m]/r;this.areas.push(c?{x:t,y:e+g,width:r,height:s,...l[m]}:{x:t+g,y:e,width:s,height:r,...l[m]}),g+=s}c?this.squarify(t+r,e,i-r,o,n.slice(h),l.slice(h)):this.squarify(t,e+r,i,o-r,n.slice(h),l.slice(h))}getWorst(t,e,i){const o=Math.max(...t),n=Math.min(...t);return Math.max(e**2*o/i**2,i**2/(e**2*n))}calculate(){this.areas=[];const t=this.getEdge(this.recPt),e=this.getEdge(this.loadPt),i=[],o=this.data.find(s=>s.name==="Reception"),n=this.data.find(s=>s.name==="Loading Zone");o&&i.push(this.placeAtEdge(o,t)),n&&i.push(this.placeAtEdge(n,e));const l=this.data.filter(s=>s.name!=="Reception"&&s.name!=="Loading Zone"),c={reception:this.sortByRelation(l.filter(s=>{var u;return(u=s.relatedTo)==null?void 0:u.includes("Reception")}),"Reception"),loading:this.sortByRelation(l.filter(s=>{var u;return(u=s.relatedTo)==null?void 0:u.includes("Loading Zone")}),"Loading Zone"),others:l.filter(s=>{var u,f;return!((u=s.relatedTo)!=null&&u.includes("Reception"))&&!((f=s.relatedTo)!=null&&f.includes("Loading Zone"))})},a=this.getAvailableRect(i,t,e),d=l.reduce((s,u)=>s+u.width*u.length,0),p=a.width*a.height/d;let{x:h,y:r,width:g,height:m}=a;return[c.reception,c.loading,c.others].forEach(s=>{if(s.length===0)return;const u=s.reduce((w,b)=>w+b.width*b.length*p,0),f=g>=m,[k,R,x,v]=f?[h,r,u/m,m]:[h,r,g,u/g];f?(h+=x,g-=x):(r+=v,m-=v),this.squarify(k,R,x,v,s.map(w=>w.width*w.length*p),s.map(w=>({name:w.name,color:`#${w.color.toString(16).padStart(6,"0")}`})))}),[...i,...this.areas]}getMetrics(){const t=1/(1+this.areas.reduce((a,d)=>{const p=Math.max(d.width,d.height)/Math.min(d.width,d.height);return a+Math.abs(p-1)},0)/this.areas.length),e=this.areas.reduce((a,d)=>a+d.width*d.height,0)/(this.w*this.h),i=a=>{if(a.length===0)return 0;const d=a.reduce((r,g)=>r+g.x+g.width/2,0)/a.length,p=a.reduce((r,g)=>r+g.y+g.height/2,0)/a.length;return 1/(1+a.reduce((r,g)=>{const m=g.x+g.width/2-d,s=g.y+g.height/2-p;return r+Math.sqrt(m*m+s*s)},0)/a.length/100)},o=this.areas.filter(a=>{var d,p;return a.name!=="Reception"&&((p=(d=this.data.find(h=>h.name===a.name))==null?void 0:d.relatedTo)==null?void 0:p.includes("Reception"))}),n=this.areas.filter(a=>{var d,p;return a.name!=="Loading Zone"&&((p=(d=this.data.find(h=>h.name===a.name))==null?void 0:d.relatedTo)==null?void 0:p.includes("Loading Zone"))}),l=(i(o)+i(n))/2,c=t*.4+e*.3+l*.3;return{aspectRatioScore:t,utilizationScore:e,proximityScore:l,totalScore:c}}}class I{constructor(t,e,i,o){this.w=t,this.h=e,this.recPt=i,this.loadPt=o,this.bestResult=null,this.isOptimizing=!1}async optimize(t,e=50,i=5,o){this.isOptimizing=!0,this.bestResult=null;const n=t.filter(c=>!c.isFixed),l=t.filter(c=>c.isFixed);for(let c=0;c<e&&this.isOptimizing;c++){const a=[...l,...n.map(r=>({...r,width:Math.max(20,Math.min(300,r.width+(Math.random()-.5)*i*2)),length:Math.max(20,Math.min(200,r.length+(Math.random()-.5)*i*2))}))],d=new T(this.w,this.h,a,this.recPt,this.loadPt);d.calculate();const p=d.getMetrics(),h={areas:a,metrics:p,iteration:c};(!this.bestResult||p.totalScore>this.bestResult.metrics.totalScore)&&(this.bestResult=h),o&&o((c+1)/e,h),c%5===0&&await new Promise(r=>setTimeout(r,0))}return this.isOptimizing=!1,this.bestResult}stop(){this.isOptimizing=!1}}class E{constructor(t){this.divHost=document.getElementById(t),Object.assign(this.divHost.style,{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px",padding:"15px"});const e=document.createElement("div");e.style.cssText="width: 100%; max-width: 800px;";const i=document.createElement("div");i.id="canvas-container",this.divHost.append(e,i),this.renderer=new C(i,e)}destroy(){var t;for(;(t=this.divHost)!=null&&t.firstChild;)this.divHost.removeChild(this.divHost.firstChild)}}class C extends L{constructor(t,e){super(t),this.areas=[],this.w=800,this.h=500,this.recPt={x:50,y:300},this.loadPt={x:300,y:50},this.mode="reception",this.optimizer=null,this.metrics=null,this.showGraph=!1,this.dataIndex=1,this.dataSet=[S,z,P],this.ctrl=e,this.canvas.style.cursor="crosshair",this.data=[{color:3355443,width:85,length:120,name:"Loading Zone",relatedTo:["Integration Bay","Finishing Zone","Fabrication","Hardware","Network Lab"]},{color:4487082,width:212.5,length:120,name:"Integration Bay",relatedTo:["Loading Zone"]},{color:15321968,width:84,length:70,name:"Finishing Zone",relatedTo:["Integration Bay","Loading Zone"]},{color:14779775,width:84,length:70,name:"Fabrication",relatedTo:["Integration Bay","Loading Zone"]},{color:15572582,width:84,length:70,name:"Hardware",relatedTo:["Integration Bay","Network Lab","Loading Zone"]},{color:9206768,width:84,length:60,name:"Network Lab",relatedTo:["Loading Zone"]},{color:11158698,width:85,length:80,name:"Reception",relatedTo:["Work Desk Zone","Demo Area","Restroom","Utility","Wellness","Ping Pong"]},{color:4500087,width:212.5,length:45,name:"Work Desk Zone",relatedTo:["Reception"]},{color:11640819,width:85,length:70,name:"Demo Area",relatedTo:["Reception"]},{color:11167300,width:50,length:100,name:"Restroom",relatedTo:["Reception"]},{color:4144959,width:50,length:50,name:"Utility",relatedTo:["Integration Bay","Restroom","Reception"]},{color:12703864,width:90,length:50,name:"Wellness",relatedTo:["Reception"]},{color:12703864,width:90,length:50,name:"Ping Pong",relatedTo:["Reception"]}],this.createControls(),this.updateCanvasSize(),this.canvas.addEventListener("click",i=>{const o=this.canvas.getBoundingClientRect(),n={x:i.clientX-o.left,y:i.clientY-o.top};this.mode==="reception"?(this.recPt=n,this.mode="loading"):this.mode==="loading"&&(this.loadPt=n,this.mode=null,this.canvas.style.cursor="default",this.updateLayout())}),this.init(this.data)}init(t){this.data=t,this.updateLayout(),this.isStatic=!1,this.start()}createControls(){this.ctrl.innerHTML=`
<div style="background:#333; padding:12px; border-radius:8px; color:white; font-size:12px;">
  
  <!-- Header -->
  <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
    <h3 style="margin:0; font-size:14px; flex:1;">Spatial Partitioning Optimizer</h3>

    <label class="toggle-switch" style="font-size:11px;">
      <input type="checkbox" id="optimize-toggle" />
      <span class="slider">Graph</span>
    </label>

    <button id="next-btn" style="padding:6px 10px; background:#555; border:none; border-radius:4px; color:white;">Next</button>

    <input id="ai-prompt"
      type="text"
      placeholder="Please suggest a work-friendly space layout design for a technology lab workspace."
      style="width:90px; padding:5px; background:#222; border:1px solid #555; border-radius:4px; color:white; font-size:11px;" />

    <button id="ai-gen-btn" style="padding:6px 10px; background:#555; border:none; border-radius:4px; color:white;">AI Gen</button>

    <button id="reset-btn" style="padding:6px 10px; background:#555; border:none; border-radius:4px; color:white;">Reset</button>
  </div>

  <!-- Optimizer -->
  <div style="background:#444; padding:10px; border-radius:6px; margin-bottom:12px;">

    <!-- Iteration + Step (one line) -->
    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:10px; align-items:end;">
      
      <label style="font-size:11px;">
        Iter <span id="iter-val">50</span>
        <input type="range" id="iterations" min="10" max="200" value="50" step="10" style="width:100%;">
      </label>

      <label style="font-size:11px;">
        Step <span id="step-val">5</span>
        <input type="range" id="step-size" min="1" max="20" value="5" step="1" style="width:100%;">
      </label>

      <button id="optimize-btn"
        style="padding:8px 16px; background:#4477aa; border:none; border-radius:6px; color:white; font-weight:bold;">
        Optimize
      </button>
    </div>

    <div id="status" style="margin-top:8px; font-size:11px; color:#aaa;"></div>

    <div id="metrics" style="margin-top:8px; display:none; font-size:11px; background:#3a3a3a; padding:6px; border-radius:4px;">
      <div>Aspect: <span id="m-aspect">-</span></div>
      <div>Util: <span id="m-util">-</span></div>
      <div>Prox: <span id="m-prox">-</span></div>
      <div style="font-weight:bold; color:#4477aa;">Total: <span id="m-total">-</span></div>
    </div>
  </div>

  <!-- Size -->
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:10px;">
    <label>Width <span id="w-val">${this.w}</span>
      <input type="range" id="w" min="600" max="1200" value="${this.w}" style="width:100%;">
    </label>
    <label>Length <span id="h-val">${this.h}</span>
      <input type="range" id="h" min="400" max="800" value="${this.h}" style="width:100%;">
    </label>
  </div>

  <!-- Manual -->
  <details>
    <summary style="cursor:pointer; padding:6px; background:#444; border-radius:4px;">
      Manual Controllers
    </summary>
    <div id="area-controls"
      style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
      gap:8px; margin-top:8px; max-height:260px; overflow-y:auto;">
    </div>
  </details>

</div>
`;const t=h=>this.ctrl.querySelector(h),e=t("#optimize-btn"),i=t("#iterations"),o=t("#step-size"),n=t("#status"),l=t("#metrics"),c=t("#ai-prompt"),a=t("#optimize-toggle");a.onchange=h=>{this.showGraph=!this.showGraph},i.addEventListener("input",()=>t("#iter-val").textContent=i.value),o.addEventListener("input",()=>t("#step-val").textContent=o.value),e.addEventListener("click",async()=>{if(!this.recPt||!this.loadPt){n.textContent="⚠️ Please set reception and loading points first";return}e.disabled=!0,e.textContent="Optimizing...",n.textContent="Starting optimization...",l.style.display="block",this.optimizer=new I(this.w,this.h,this.recPt,this.loadPt);const h=parseInt(i.value),r=parseInt(o.value),g=await this.optimizer.optimize(this.data,h,r,(m,s)=>{n.textContent=`Progress: ${(m*100).toFixed(0)}% (Iteration ${s.iteration+1}/${h})`,this.updateMetrics(s.metrics)});this.data=g.areas,this.updateLayout(),this.updateAreaControls(),n.textContent=`✓ Optimization complete! Best score: ${g.metrics.totalScore.toFixed(3)}`,e.disabled=!1,e.textContent="Optimize"}),t("#reset-btn").addEventListener("click",()=>{this.optimizer&&this.optimizer.stop(),this.mode="reception",this.canvas.style.cursor="crosshair",this.areas=[],this.metrics=null,l.style.display="none",n.textContent="",this.isStatic=!1,this.init(this.data)}),t("#next-btn").addEventListener("click",()=>{this.optimizer&&this.optimizer.stop(),this.init(this.dataSet[this.dataIndex++%this.dataSet.length])}),t("#ai-gen-btn").addEventListener("click",async()=>{console.log("AI Gen clicked"),console.log(c.value);const h=c.value?c.value:"Please suggest a work-friendly space layout design for a technology lab workspace.",r=await F(h,JSON.stringify(this.data),this.w,this.h);console.log(r),console.log(Array.isArray(r)),console.log(typeof r[0]),console.log(r[0].name),this.init(r)});const d=t("#w"),p=t("#h");d.addEventListener("input",()=>{this.w=+d.value,t("#w-val").textContent=d.value,this.updateCanvasSize(),this.recPt&&this.loadPt&&this.updateLayout()}),p.addEventListener("input",()=>{this.h=+p.value,t("#h-val").textContent=p.value,this.updateCanvasSize(),this.recPt&&this.loadPt&&this.updateLayout()}),this.createAreaControls()}updateMetrics(t){const e=i=>this.ctrl.querySelector(i);e("#m-aspect").textContent=t.aspectRatioScore.toFixed(3),e("#m-util").textContent=t.utilizationScore.toFixed(3),e("#m-prox").textContent=t.proximityScore.toFixed(3),e("#m-total").textContent=t.totalScore.toFixed(3),this.metrics=t}createAreaControls(){const t=this.ctrl.querySelector("#area-controls");t.innerHTML="",this.data.forEach((e,i)=>{const o=document.createElement("div");o.style.cssText=`background: #444; padding: 10px; border-radius: 4px; border-left: 3px solid #${e.color.toString(16).padStart(6,"0")}; font-size: 12px;`,o.innerHTML=`
				<div style="font-weight: bold; margin-bottom: 6px;">${e.name}</div>
				<div style="display: flex; gap: 8px; margin-bottom: 4px;">
					<label style="flex: 1; font-size: 11px;">W: <span id="wv-${i}">${e.width.toFixed(1)}</span>
						<input type="range" id="wi-${i}" min="20" max="300" value="${e.width}" step="1" style="width: 100%;"></label>
					<label style="flex: 1; font-size: 11px;">L: <span id="lv-${i}">${e.length.toFixed(1)}</span>
						<input type="range" id="li-${i}" min="20" max="200" value="${e.length}" step="1" style="width: 100%;"></label>
				</div>
				<div style="font-size: 11px; color: #aaa;">Area: <span id="av-${i}">${(e.width*e.length).toFixed(0)}</span> m²</div>
			`,t.appendChild(o);const n=o.querySelector(`#wi-${i}`),l=o.querySelector(`#li-${i}`);n.addEventListener("input",()=>{this.data[i].width=+n.value,o.querySelector(`#wv-${i}`).textContent=n.value,o.querySelector(`#av-${i}`).textContent=(this.data[i].width*this.data[i].length).toFixed(0),this.recPt&&this.loadPt&&this.updateLayout()}),l.addEventListener("input",()=>{this.data[i].length=+l.value,o.querySelector(`#lv-${i}`).textContent=l.value,o.querySelector(`#av-${i}`).textContent=(this.data[i].width*this.data[i].length).toFixed(0),this.recPt&&this.loadPt&&this.updateLayout()})})}updateAreaControls(){this.data.forEach((t,e)=>{const i=l=>this.ctrl.querySelector(l),o=i(`#wi-${e}`),n=i(`#li-${e}`);o&&n&&(o.value=t.width.toString(),n.value=t.length.toString(),i(`#wv-${e}`).textContent=t.width.toFixed(1),i(`#lv-${e}`).textContent=t.length.toFixed(1),i(`#av-${e}`).textContent=(t.width*t.length).toFixed(0))})}updateCanvasSize(){this.canvas.width=this.w,this.canvas.height=this.h}updateLayout(){if(!this.recPt||!this.loadPt)return;const t=new T(this.w,this.h,this.data,this.recPt,this.loadPt);this.areas=t.calculate(),this.metrics=t.getMetrics(),this.ctrl.querySelector("#metrics").style.display!=="none"&&this.metrics&&this.updateMetrics(this.metrics),this.isStatic=!1}render(t){t.fillStyle="#555",t.fillRect(0,0,this.w,this.h),this.areas.forEach(e=>{t.fillStyle=e.color,t.fillRect(e.x,e.y,e.width,e.height),t.strokeStyle=e.isFixed?"#FFD700":"white",t.lineWidth=e.isFixed?3:1.5,t.strokeRect(e.x,e.y,e.width,e.height),e.width>40&&e.height>25&&(t.fillStyle="white",t.font=e.isFixed?"bold 13px Arial":"bold 11px Arial",t.textAlign="left",t.textBaseline="top",t.fillText(e.name,e.x+6,e.y+6),e.isFixed&&(t.font="9px Arial",t.fillText("(Fixed)",e.x+6,e.y+22)))}),[{pt:this.recPt,color:"#aa44aa"},{pt:this.loadPt,color:"#FFD700"}].forEach(({pt:e,color:i})=>{e&&(t.fillStyle=i,t.beginPath(),t.arc(e.x,e.y,6,0,Math.PI*2),t.fill(),t.strokeStyle="white",t.lineWidth=2,t.stroke())}),this.showGraph&&this.areas.forEach(e=>{const i=[],o=this.data.filter(n=>n.name===e.name)[0].relatedTo;this.areas.forEach(n=>{o.includes(n.name)&&i.push([n.x,n.y,n.width,n.height])}),i.forEach(([n,l,c,a])=>{t.strokeStyle="black",t.lineWidth=3,t.beginPath(),t.moveTo(e.x+e.width*.5,e.y+e.height*.5),t.lineTo(n+c*.5,l+a*.5),t.stroke(),t.strokeStyle=e.color,t.lineWidth=2,t.stroke()})}),this.isStatic=!1}}const F=async(y,t,e,i)=>{try{const o=performance.now();let n=y;console.log(n);const l=`
You are a spatial layout optimization system. 

You are an expert architectural designer in spatial design and layout optimization.

Reference data:
${t}

Task:
Given the area data above, update and return an optimized spatial layout for a workspace under the following constraints.

Constraints:

// * Total available area: ${e} unit (width) × ${i} unit (length)
* Maximize space utilization and accessibility
* Preserve and strengthen spatial relationships between related areas
* Update the 'relatedTo' field to reflect strong functional relationships
* 'relatedTo' must contain only existing area names
* Do NOT change the color of any area
* Do NOT add or remove areas
* Ensure the combined layout fits within the total available area
* Each area must include the following fields only:

  * name
  * width
  * length
  * color
  * relatedTo (array of area names)

Output requirements (STRICT):

* Output ONLY valid JSON
* Output must be a single array of area objects
* Do NOT include explanations, comments, markdown, or extra text
* Do NOT include trailing commas
* Do NOT wrap the JSON in code fences
* Do NOT create new fields or remove existing fields
* Modify ONLY the width, length, color, and relatedTo fields as needed for optimization in the Reference data

Objective:
Optimize the layout to enhance space utilization, accessibility, and functional relationships between areas.
Return the optimized layout in the same structure as the reference data.


			`,c=await fetch("http://localhost:1234/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"google-gemma-3-1b-it",messages:[{role:"system",content:l},{role:"user",content:n}]})}),a=performance.now(),d=await c.json(),p=performance.now(),h=d.choices[0].message.content;return console.log(h),console.log("--- LLM Performance ---"),console.log(`Network latency: ${(a-o).toFixed(2)} ms`),console.log(`Total response time: ${(p-o).toFixed(2)} ms`),Z(h)}catch(o){console.error("Error:",o),console.log("에러가 발생했습니다. 서버 연결을 확인하세요.")}};function Z(y){const t=y.match(/\[[\s\S]*\]/);if(!t)throw new Error("No array found");const e=t[0];try{return JSON.parse(e)}catch{return new Function(`return ${e}`)()}}export{C as Renderer,E as Solution};
//# sourceMappingURL=index-Bvb8rHhN.js.map
