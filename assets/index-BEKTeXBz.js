import{R as N}from"./RendererThree-CPxbMYy3.js";import{a as v,eR as U,aj as $,ak as j,d as Y,dh as D,C as t,bc as k}from"./index-Dyzp52yc.js";import{g as C}from"./index-Bd-YHLPq.js";import{dataFromRhino as B}from"./index-gz3LJEYz.js";import{F as T}from"./FBXLoader-D9mk5gO3.js";import"./three.module-Bq7aVDNa.js";import"./OrbitControls-Dvm9yOyJ.js";var E=(p=>(p.Rainbow="rainbow",p.Heat="heat",p.Cool="cool",p.Plasma="plasma",p.Viridis="viridis",p.Emp="emp",p.Dust="dust",p.ServerTemp="serverTemp",p))(E||{});const X={rainbow:[{pos:0,color:new t(255)},{pos:.25,color:new t(65535)},{pos:.5,color:new t(65280)},{pos:.75,color:new t(16776960)},{pos:1,color:new t(16711680)}],heat:[{pos:0,color:new t(0)},{pos:.25,color:new t(8912896)},{pos:.5,color:new t(16711680)},{pos:.75,color:new t(16776960)},{pos:1,color:new t(16777215)}],cool:[{pos:0,color:new t(65535)},{pos:.25,color:new t(8432383)},{pos:.5,color:new t(16711935)},{pos:.75,color:new t(16744703)},{pos:1,color:new t(16776960)}],plasma:[{pos:0,color:new t(854151)},{pos:.25,color:new t(8258472)},{pos:.5,color:new t(13387640)},{pos:.75,color:new t(16291136)},{pos:1,color:new t(15792417)}],viridis:[{pos:0,color:new t(4456788)},{pos:.25,color:new t(3238030)},{pos:.5,color:new t(3520377)},{pos:.75,color:new t(9426756)},{pos:1,color:new t(16639781)}],emp:[{pos:0,color:new t(0)},{pos:.25,color:new t(255)},{pos:.5,color:new t(8388863)},{pos:.75,color:new t(16711935)},{pos:1,color:new t(16777215)}],dust:[{pos:0,color:new t(3878703)},{pos:.25,color:new t(9127187)},{pos:.5,color:new t(13468991)},{pos:.75,color:new t(14596231)},{pos:1,color:new t(16113331)}],serverTemp:[{pos:0,color:new t(255)},{pos:.25,color:new t(65535)},{pos:.5,color:new t(65280)},{pos:.75,color:new t(16776960)},{pos:1,color:new t(16711680)}]};class A{constructor(e){this.direction=new v(1,0,0),this._speed=.23,this._time=0,this._min=.5,this._max=1.1,this.scene=e.scene,this._min=e.min?e.min:.5,this._max=e.max?e.max:.9,this._colorMapTyp=e.colorMapTyp?e.colorMapTyp:"rainbow",this.fbxLoader=new U}get min(){return this._min}set min(e){this._min=e,this.mesh&&(this.mesh.material.uniforms.minValue.value=e)}get max(){return this._max}set max(e){this._max=e,this.mesh&&(this.mesh.material.uniforms.maxValue.value=e)}get time(){return this._time}set time(e){this._time=e,this.mesh&&(this.mesh.material.uniforms.time.value=e)}get speed(){return this._speed}set speed(e){this._speed=e}set clipX(e){this.mesh.material.uniforms.clipX.value=e}set clipY(e){this.mesh.material.uniforms.clipY.value=e}async initByFile(e,o,n=1e-4){const i=o.split(".").pop().toLowerCase();switch(i){case"obj":return this.initByOBJ(e,n);case"fbx":if(typeof e=="string"&&e.startsWith("http"))return await this.initByFBX(e,n);throw new Error("FBX 파일은 URL 또는 File 객체가 필요합니다.");default:throw new Error(`지원하지 않는 파일 형식: ${i}`)}}initByOBJ(e,o=1e-4){const n=e.split(`
`),i=[],s=[];n.forEach(c=>{const r=c.trim().split(/\s+/);if(r[0]==="v")i.push([parseFloat(r[1])*o,parseFloat(r[2])*o,parseFloat(r[3])*o]);else if(r[0]==="f"){const a=r.slice(1).map(d=>parseInt(d.split("/")[0])-1);a.length>=3&&(s.push([a[0],a[1],a[2]]),a.length===4&&s.push([a[0],a[2],a[3]]))}}),i.length>0&&s.length>0&&this.createMeshFromData(i,s)}createMeshFromData(e,o){const n=new $,i=[],s=[],c=[];o.forEach(r=>{const a=new v(...e[r[0]]),d=new v(...e[r[1]]),g=new v(...e[r[2]]);i.push(a.x,a.y,a.z),i.push(d.x,d.y,d.z),i.push(g.x,g.y,g.z);const u=new v().crossVectors(new v().subVectors(d,a),new v().subVectors(g,a)).normalize();s.push(u.x,u.y,u.z),s.push(u.x,u.y,u.z),s.push(u.x,u.y,u.z),[a,d,g].forEach(h=>{c.push((h.y+2)/4)})}),n.setAttribute("position",new j(i,3)),n.setAttribute("normal",new j(s,3)),n.setAttribute("simulationValue",new j(c,1)),this.geometry=n,this.initMat()}initMat(e="serverTemp"){const o=H(e);o.uniforms.gradientVector.value.set(this.direction.x,this.direction.y,this.direction.z),o.uniforms.minValue.value=this.min,o.uniforms.maxValue.value=this.max,o.uniforms.time.value=this.time,o.uniforms.clipX.value=200,o.uniforms.clipY.value=200,this.removeMesh();const n=new Y(this.geometry,o);n.castShadow=!0,n.receiveShadow=!0;const i=new D().setFromObject(n),s=i.getCenter(new v),c=i.getSize(new v);Math.max(c.x,c.y,c.z),n.position.sub(s),this.mesh=n,this.scene.add(n)}update(){this.mesh&&(this.time+=this.speed*.01,this.mesh.material.uniforms.time.value=this.time)}removeMesh(){this.mesh&&this.scene.remove(this.mesh)}destroy(){this.removeMesh()}}const W=`
    attribute float simulationValue;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying float vSimValue;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float minValue;
    uniform float maxValue;

    void main() {
        vPosition = position;
        vNormal = normal;
        
        // Add oscillation to simulation value based on time and position
        vSimValue = simulationValue + sin(time * 2.0 + position.y * 0.1) * 0.2;
        
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,J=`
    varying vec3 vPosition;
    varying vec3 vWorldPosition;
    varying vec3 vNormal;
    varying float vSimValue;
    
    uniform float time;
    uniform float minValue;
    uniform float maxValue;
    uniform vec3 colorMap[5];
    uniform float colorMapPositions[5];
    uniform int colorMapLength;
    uniform vec3 gradientVector;
    uniform int gradientMode;

	uniform float clipX; 
	uniform float clipY; 
    
    vec3 getColorFromMap(float value) {
        // Normalize value to 0-1 range
        float normalizedValue = clamp((value - minValue) / (maxValue - minValue), 0.0, 1.0);
        
        if (normalizedValue <= colorMapPositions[0]) {
            return colorMap[0];
        }
        
        for (int i = 0; i < 4; i++) {
            if (normalizedValue <= colorMapPositions[i + 1]) {
                float t = (normalizedValue - colorMapPositions[i]) / 
                         (colorMapPositions[i + 1] - colorMapPositions[i]);
                return mix(colorMap[i], colorMap[i + 1], t);
            }
        }
        
        return colorMap[4];
    }
    
    void main() {

	    if (vWorldPosition.y > clipY) {
			discard;
		}

		if (vWorldPosition.x > clipX) {
			discard;
		}

        float gradValue = 0.0;

        if (length(gradientVector) > 0.0) {
            // Project position along normalized gradientVector
            gradValue = dot(normalize(gradientVector), vWorldPosition);
            
            // Add oscillation effect along gradient direction
            float oscillation = sin(time * 2.0 + gradValue * 5.0) * 0.1;
            gradValue = clamp(gradValue + oscillation, minValue, maxValue);
            
            // Normalize to 0-1 range
            gradValue = (gradValue - minValue) / (maxValue - minValue);
        }

        // Use gradient value when gradientMode is 0, otherwise use simulation value
        float value = (gradientMode == 0) ? gradValue : vSimValue;

        vec3 color = getColorFromMap(value);

        // Basic lighting
        vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
        float lightIntensity = max(dot(normalize(vNormal), lightDir), 0.3);
        color = color * lightIntensity;

        // Enhanced oscillation effect
        float glow = 0.2 * (0.5 + 0.5 * sin(time * 3.0 + value * 8.0));
        color += color * glow;

        gl_FragColor = vec4(color, 1.0);
    }
`,H=(p,e=0)=>{const o=X[p],n=o.map(s=>s.color),i=o.map(s=>s.pos);return new k({vertexShader:W,fragmentShader:J,clipping:!0,uniforms:{time:{value:0},minValue:{value:1},maxValue:{value:2},colorMap:{value:n},colorMapPositions:{value:i},colorMapLength:{value:n.length},gradientVector:{value:new v(1,0,0)},gradientMode:{value:1},clipY:{value:1e3},clipX:{value:1e3}}})};class se extends N{constructor(e="main"){super(e),this.meshGradient=new A({scene:this.scene}),this.renderer.localClippingEnabled=!0;const o=document.createElement("div");o.style.position="absolute",this.hostDiv.append(o);const n=document.createElement("button");n.id="loadObjBtn",n.textContent="Load OBJ";const i=document.createElement("input");i.type="file",i.id="fileInput",i.accept=".obj,.fbx",i.style.display="none",n.addEventListener("click",()=>{i.click()}),i.addEventListener("change",l=>{const w=l.target.files[0];if(!w)return;const G=w.name.split(".").pop().toLowerCase();if(G==="obj"){const y=new FileReader;y.onload=M=>{const f=M.target.result;this.meshGradient.initByOBJ(f)},y.onerror=()=>{console.error("fail to load the OBJ")},y.readAsText(w)}else if(G==="fbx"){const y=new T,M=URL.createObjectURL(w);y.load(M,f=>{const z=[],L=[];f.traverse(_=>{if(_.isMesh&&_.geometry){const S=_.geometry,b=S.attributes.position.array,F=S.index?S.index.array:null,x=z.length;for(let m=0;m<b.length;m+=3)z.push([b[m]*.1,b[m+1]*.1,b[m+2]*.1]);if(F)for(let m=0;m<F.length;m+=3)L.push([F[m]+x,F[m+1]+x,F[m+2]+x]);else{const m=b.length/3;for(let V=0;V<m;V+=3)V+2<m&&L.push([x+V,x+V+1,x+V+2])}}}),URL.revokeObjectURL(M),z.length>0&&L.length>0&&this.meshGradient.createMeshFromData(z,L)},f=>{f.lengthComputable&&f.loaded/f.total*100},f=>{console.error("FBX fail to load:",f),URL.revokeObjectURL(M)})}else console.error(`no support file: ${G}`)}),o.append(n),o.append(i);const s=C("ani",0,100);s.slider.defaultValue="10",o.appendChild(s.div),s.slider.oninput=()=>{const l=parseInt(s.slider.value)*.01;this.meshGradient.speed=l};const c=C(`min:${this.meshGradient.min}`,-300,300);c.slider.defaultValue=`${this.meshGradient.min}`,o.appendChild(c.div),c.slider.oninput=()=>{const l=parseInt(c.slider.value)*.01;this.meshGradient.min=l,c.text.textContent=`min:${l.toFixed(2)}`};const r=C(`max:${this.meshGradient.max}`,-300,300);r.slider.defaultValue=`${this.meshGradient.max}`,o.appendChild(r.div),r.slider.oninput=()=>{const l=parseInt(r.slider.value)*.01;this.meshGradient.max=l,r.text.textContent=`max:${l.toFixed(2)}`};const a=C("Clipping X",-200,200);a.slider.defaultValue="200",o.appendChild(a.div),a.slider.oninput=()=>{const l=parseInt(a.slider.value)*.01;this.meshGradient.clipX=l};const d=C("Clipping Y",-200,200);d.slider.defaultValue="200",o.appendChild(d.div),d.slider.oninput=()=>{const l=parseInt(d.slider.value)*.01;this.meshGradient.clipY=l};const g=Object.keys(E),u=document.createElement("div");u.className="header";const h=document.createElement("input");h.type="range",h.min="0",h.max=`${g.length-1}`,h.value="0",h.style.width="100px";const P=document.createElement("div");P.className="name",u.appendChild(P);const R=document.createElement("div");R.className="controls";const O=document.createElement("div");O.className="hexList",o.appendChild(u),o.appendChild(h),o.appendChild(R),o.appendChild(O);const I=()=>{const l=Number(h.value),w=g[l];X[E[w]],P.textContent=w,this.meshGradient.initMat(E[w])};h.addEventListener("input",I),this.initMesh()}initMesh(){const e=[],o=[];for(let i=0;i<B.v.length;++i){const s=B.v[i];e.push([+s[0]*.1,+s[2]*.1,+s[1]*.1])}for(let i=0;i<B.f.length;++i){const s=B.f[i];o.push([s[2],s[1],s[0]])}e.length>0&&o.length>0&&this.meshGradient.createMeshFromData(e,o),this.start()}update(e){this.meshGradient.update()}}export{se as Solution};
