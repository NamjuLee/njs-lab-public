import{R as x}from"./RendererThree-CN5Ew10I.js";import{A as C,P as f,bd as h,e8 as w,aj as b,g4 as y,bc as z,C as S,d as L,f as M,a as P,i as m}from"./index-DXWTkgC4.js";import{N as R}from"./NVectorUtility-BZtgiaLD.js";import"./three.module-Hhv3uJu8.js";import"./OrbitControls-BYJv8m_r.js";import"./NLine-mvyB8VZI.js";class k extends x{constructor(e="main"){super(e),this.camera.position.set(0,50,50);const t=new C(13421772,.25);this.scene.add(t),this.pointLight=new f(16777215,.75),this.pointLight.position.x=10,this.pointLight.castShadow=!0,this.scene.add(this.pointLight);const s=A();console.log(s);const[r,i,a]=F(s),n=new h(new Float32Array(r),3),u=new h(new Float32Array(i),4),p=new h(new Float32Array(a),1);new w;const l=new b;l.setAttribute("position",n),l.setAttribute("customColor",u),l.setAttribute("size",p);let c="njslabSandboxStatic/img/dotTexture.png";c="https://raw.githubusercontent.com/NamjuLee/data/master/img/brush/dotTexture.png";const g=new y().load(c);console.log(c);let d=new z({uniforms:{color:{value:new S(16777215)},texture:{value:g}},vertexShader:T,fragmentShader:V,alphaTest:.9});d.transparent=!0;const v=new L(l,d);this.scene.add(v),this.start()}update(e){var t=new M;t.makeRotationY(Math.PI*.011),this.pointLight.position.applyMatrix4(t)}}const A=()=>{const o=R.GetSpherecVecs3dRandomWithThicknessOffset(500,15,.15),e=[];for(let t=0;t<o.length;++t)e.push(new P(o[t].x,o[t].y,o[t].z));return e},F=o=>{let e=m.GetRandomHex(),t=[],s=[],r=[];for(let i=0;i<o.length;++i){t.push(o[i].x,o[i].y,o[i].z);let a=m.GetRandomColorByLightness(e,.2+Math.random()*.7);s.push(a[0]/255,a[1]/255,a[2]/255,Math.random());let n=i*1e-4;r.push(n),new _(i,o[i],a,n)}return[t,s,r]},T=`
    attribute float size;
    attribute vec4 customColor;
    varying vec4 vColor;

    void main() {
        // vColor = vec4(vColor.xyz, distance(vec3(customColor.xyz), position));
        vColor = customColor;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_PointSize = size * ( 30.0 / -mvPosition.z );
        gl_Position = projectionMatrix * mvPosition;
    }
    `,V=`
    uniform vec3 color;
    uniform sampler2D texture;
    varying vec4 vColor;

	void main() {
        gl_FragColor = vColor; // vec4(color * vColor, 1.0);
        // gl_FragColor = gl_FragColor * texture2D(texture, gl_PointCoord);
        // if (gl_FragColor.a < 0.5) discard;
    }
    `;class _{constructor(e,t,s,r){this.t=0,this.v=t,this.id=e,this.col=s,this.size=r,this.tForR=0,this.seedRandom=Math.random()}Translate(e,t,s){}Scale(e){}ScalebyValue(e){}SetScale(e){}Update(e){}}class E{constructor(e,t,s,r){this.id=e,this.n0=t,this.n1=s,this.size=r,this.seedRandom=Math.random()}Update(e){}}export{E as Edge,_ as Node,k as Solution};
//# sourceMappingURL=index-2WetT4vg.js.map
