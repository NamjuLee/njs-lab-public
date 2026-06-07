import"./index-BcT8Qysm.js";import{g as c}from"./index-C0vqmb3-.js";import{R as p}from"./RendererCanvas-ZMRkw2u7.js";class v{constructor(e){this.divHost=document.getElementById(e);const t=document.createElement("div");this.divHost.appendChild(t),this.renderer=new m(t)}destroy(){this.renderer.destroy();try{for(;this.divHost&&this.divHost.lastElementChild;){const e=this.divHost.lastElementChild;this.divHost.removeChild(e)}}catch(e){console.error("Error removing child elements:",e)}}}class m extends p{constructor(e){super(e),this.accList=[],this.lossList=[],this.url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfPtPb33NScAJV_mYnqcvYHYw19OTcTmEGA&s",this.init()}async init(){this.loadImg(),this.img=new Image,this.divHost.append(this.img);const e=document.createElement("input");e.style.width="500px",e.style.height="20px",e.textContent="execute",e.value=this.url,e.placeholder="URL",e.contentEditable="true",this.divHost.append(e);const t=document.createElement("button");t.style.width="100px",t.style.height="20px",t.textContent="execute",this.divHost.append(t);const n=document.createElement("div");this.divOutput=n,this.divHost.append(n),t.addEventListener("click",async()=>{const i=e.value;this.appendLoading(),this.divOutput.innerHTML="";const o=`http://127.0.0.1:8000/api/v1/imgSegLLM?image_url=${i}`;t.disabled=!0;try{const r=await(await fetch(o)).json(),d=l(r);n.textContent=JSON.stringify(r,null,2),t.disabled=!1,this.divHost.removeChild(this.loadingDiv),this.loadImg(i),this.updateResult(d)}catch(a){n.textContent="Error: "+String(a)}}),this.updateResult(l(g)),this.isStatic=!0}appendLoading(){const e=document.createElement("div");e.id="loading",Object.assign(e.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:"9999",backgroundColor:"rgba(255, 255, 255, 0.5)",padding:"10px",borderRadius:"8px"});const t="https://raw.githubusercontent.com/NamjuLee/data/master/map/loading.gif",n=document.createElement("img");Object.assign(n,{src:t,style:{backgroundColor:"transparent"},alt:"Loading...",width:120}),e.appendChild(n),this.loadingDiv=e,this.divHost.appendChild(e)}async loadImg(e="https://raw.githubusercontent.com/NamjuLee/data/master/img/bg/zoom-James-River-Kayaking.jpg"){c(e).then(t=>{t&&(this.img.src=t.src)}),this.isStatic=!0}updateResult(e){let t="";t+=`
			<div class="summary">
			<h2>Summary</h2>
			<p>${e.image_analysis_summary}</p>
			<p><b>Total Segments:</b> ${e.total_segments_identified}</p>
			</div>
		`,t+="<h2>Segments</h2>",e.segment_analysis.forEach(n=>{t+=`
			<div class="segment-card">
				<div><span class="label">#${n.segment_index}</span> — ${n.segment_class_label}</div>
				<div><b>Pixels:</b> ${n.pixel_percentage}%</div>
				<div>${n.contextual_description}</div>
			</div>
			`}),this.divOutput.innerHTML=t}}const l=s=>{const t=s.result.match(/```json[\s\S]*?```/)[0].replace("```json","").replace("```","").trim();return JSON.parse(t)},g={result:`\`\`\`json
{
 "image_analysis_summary": "A scenic view of a river with trees and mountains in the background, featuring people kayaking.",
 "total_segments_identified": 12,
 "segment_analysis": [
 {
 "segment_index": 1,
 "segment_class_label": "sky",
 "pixel_percentage": 35.21,
 "contextual_description": "The sky occupies a significant portion of the image, with a clear blue color and scattered clouds."
 },
 {
 "segment_index": 2,
 "segment_class_label": "water",
 "pixel_percentage": 18.57,
 "contextual_description": "The river forms a prominent feature, reflecting the sky and surrounding landscape."
 },
 {
 "segment_index": 3,
 "segment_class_label": "tree",
 "pixel_percentage": 12.34,
 "contextual_description": "A dense forest of trees lines the riverbanks, providing a natural backdrop."
 },
 {
 "segment_index": 4,
 "segment_class_label": "mountain",
 "pixel_percentage": 8.90,
 "contextual_description": "The distant mountains add depth and scale to the scene, their peaks visible above the trees."
 },
 {
 "segment_index": 5,
 "segment_class_label": "person",
 "pixel_percentage": 5.67,
 "contextual_description": "Two people are kayaking on the river, adding a sense of activity and scale to the scene."
 },
 {
 "segment_index": 6,
 "segment_class_label": "kayak",
 "pixel_percentage": 3.24,
 "contextual_description": "The kayaks are the primary means of transportation for the people, adding a dynamic element to the scene."
 },
 {
 "segment_index": 7,
 "segment_class_label": "grass",
 "pixel_percentage": 2.56,
 "contextual_description": "Small patches of grass are visible along the riverbanks, adding texture to the landscape."
 },
 {
 "segment_index": 8,
 "segment_class_label": "road",
 "pixel_percentage": 1.92,
 "contextual_description": "A small, unpaved road is visible in the distance, leading towards the mountains."
 },
 {
 "segment_index": 9,
 "segment_class_label": "building",
 "pixel_percentage": 1.28,
 "contextual_description": "A small building is visible in the distance, possibly a cabin or lodge."
 },
 {
 "segment_index": 10,
 "segment_class_label": "cloud",
 "pixel_percentage": 0.80,
 "contextual_description": "A few clouds are scattered across the sky, adding visual interest and depth."
 },
 {
 "segment_index": 11,
 "segment_class_label": "tree_foliage",
 "pixel_percentage": 0.64,
 "contextual_description": "The leaves of the trees are visible, adding texture and color to the landscape."
 },
 {
 "segment_index": 12,
 "segment_class_label": "riverbank",
 "pixel_percentage": 0.48,
 "contextual_description": "The riverbanks are the edges of the river, providing a natural border to the scene."
 }
 ]
}
\`\`\``};export{m as Renderer,v as Solution};
