import"./index-Da_qz1un.js";import{g as f}from"./index-C0vqmb3-.js";import{R as x}from"./RendererCanvas-ZMRkw2u7.js";class R{constructor(e,r,t){this.canvasGL=document.createElement("canvas"),this.canvasGL.width=e.width,this.canvasGL.height=e.height,this.gl=this.canvasGL.getContext("webgl2"),this.img=e,this.init(r,t)}get canvas(){return this.canvasGL}init(e,r){const t=this.gl;this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,this.img),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),this.vertexShader=t.createShader(t.VERTEX_SHADER),t.shaderSource(this.vertexShader,e),t.compileShader(this.vertexShader),this.fragmentShader=t.createShader(t.FRAGMENT_SHADER),t.shaderSource(this.fragmentShader,r),t.compileShader(this.fragmentShader),this.program=t.createProgram(),t.attachShader(this.program,this.vertexShader),t.attachShader(this.program,this.fragmentShader),t.linkProgram(this.program),t.useProgram(this.program);const s=t.getAttribLocation(this.program,"a_position"),o=t.getAttribLocation(this.program,"a_texCoord"),n=t.getUniformLocation(this.program,"u_texture");t.uniform1i(n,0),this.positionBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.positionBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0),this.texCoordBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.texCoordBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(o),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture)}destroy(){this.gl.deleteProgram(this.program),this.gl.deleteTexture(this.texture),this.gl.deleteShader(this.vertexShader),this.gl.deleteShader(this.fragmentShader),this.gl.deleteBuffer(this.positionBuffer),this.gl.deleteBuffer(this.texCoordBuffer)}}class _{constructor(e){this.vertexShaderSource=`
        attribute vec2 a_position;
        attribute vec2 a_texCoord;
        varying vec2 v_texCoord;

        void main() {
            gl_Position = vec4(a_position, 0, 1);
            v_texCoord = a_texCoord;
        }
    `,this.fragmentShaderSource=`
        precision mediump float;
        
        uniform vec2 u_resolution;
        uniform float u_blurRadius;
        uniform float u_sepia;
        uniform float u_contrast;
        uniform float u_brightness;
        uniform float u_saturation;
        uniform float u_hueRotation;
        uniform sampler2D u_texture;
        varying vec2 v_texCoord;

        vec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
            vec4 color = vec4(0.0);
            vec2 off1 = vec2(1.3333333333333333) * direction;
            color += texture2D(image, uv) * 0.29411764705882354;
            color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;
            color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;
            return color; 
        }

        void main() {
            vec2 flippedTexCoord = vec2(v_texCoord.x, 1.0 - v_texCoord.y);
            vec4 color = texture2D(u_texture, flippedTexCoord);

            float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));

            // ..................
            if (u_sepia > .0) {
                vec3 sepia = vec3(1.0, 0.95, 0.82);
                color = mix(color, vec4(gray * sepia, color.a), u_sepia);
            }


            // ..................
            // if ((u_brightness != 1.0) || (u_contrast != 1.0)) {
                vec3 colorRgb = color.rgb * u_brightness;
                colorRgb = (colorRgb - vec3(0.5)) * max(u_contrast, 0.0) + vec3(0.5);
                color = vec4(colorRgb, color.a);
            // }


            // ..................
            color = vec4(mix(vec3(gray), color.rgb, u_saturation), color.a);

            
            // ..................
            if (u_hueRotation != .0){
                float angle = u_hueRotation * 3.14159265358979323846264 / 180.0;
                float s = sin(angle);
                float c = cos(angle);
                mat3 hueRotationMatrix = mat3(
                    0.213 + 0.787 * c - 0.213 * s, 0.715 - 0.715 * c - 0.715 * s, 0.072 - 0.072 * c + 0.928 * s,
                    0.213 - 0.213 * c + 0.143 * s, 0.715 + 0.285 * c + 0.140 * s, 0.072 - 0.072 * c - 0.283 * s,
                    0.213 - 0.213 * c - 0.787 * s, 0.715 - 0.715 * c + 0.715 * s, 0.072 + 0.928 * c + 0.072 * s
                );
                colorRgb = color.rgb * hueRotationMatrix;
                color = vec4(colorRgb, color.a);
            }

            // ..................
            gl_FragColor = color;
        }
    `,this.params={blur:0,sepia:0,contrast:1,brightness:1,saturate:1,hueRotate:0},this.img=e,this.core=new R(e,this.vertexShaderSource,this.fragmentShaderSource)}applyFilter(e,r){this.params=r;const t=this.core.gl,s=t.getUniformLocation(this.core.program,"u_sepia");t.uniform1f(s,this.params.sepia);const o=t.getUniformLocation(this.core.program,"u_saturation");t.uniform1f(o,this.params.saturate);const n=t.getUniformLocation(this.core.program,"u_brightness");t.uniform1f(n,this.params.brightness);const c=t.getUniformLocation(this.core.program,"u_contrast");t.uniform1f(c,this.params.contrast);const h=t.getUniformLocation(this.core.program,"u_hueRotation");t.uniform1f(h,this.params.hueRotate);const l=t.getUniformLocation(this.core.program,"u_blurRadius");t.uniform1f(l,1.8);const d=t.getUniformLocation(this.core.program,"u_resolution");t.uniform2f(d,t.canvas.width,t.canvas.height),t.drawArrays(t.TRIANGLE_STRIP,0,4),e.clearRect(0,0,e.canvas.width,e.canvas.height),e.drawImage(this.core.canvas,0,0)}destroy(){this.core.destroy()}}var E=(a=>(a.AutoContrast="autoContrast",a.None="None",a))(E||{});class L{constructor(e){this.divHost=document.getElementById(e),this.divHost.style.display="flex",this.divHost.style.alignItems="center";const r=document.createElement("div");r.style.marginLeft="auto",r.style.marginRight="auto",r.style.backgroundColor="#555",r.style.margin="50px",r.style.background="rgba(0,0,0,0)",this.divHost.appendChild(r),this.renderer=new b(r)}destroy(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}class b extends x{constructor(e){super(e),this.img=void 0,this.rotation=0,this.m=[0,0],this.switch=!0,this.isDithering=!1,this.typeCorrection="autoContrast",this.params={blur:0,sepia:0,contrast:1,brightness:1,saturate:1,hueRotate:0},this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.isStatic=!0,this.canvas.style.position="relative",this.canvas.style.width="100%",this.canvas.style.height="100%";let r=new Image(20,20);r.src="/njs-lab-public/static/svg/moon.svg",e.appendChild(r),f("https://www.glenstone.org/wp-content/uploads/2018/07/AV_Landscape-Hero-Contour-2993-1276x800.jpg").then(i=>{i&&(this.img=i,this.img.onload=p=>{this.update(i)})});const t=document.createElement("input");t.value="https://upload.wikimedia.org/wikipedia/commons/f/ff/Mozilla_Firefox_logo_2013.png",t.addEventListener("keydown",i=>{i.code==="Enter"&&f(t.value).then(p=>{p&&(this.img=p,this.img.onload=y=>{this.update(p)})})}),this.divHost.appendChild(t);const o=T(i=>{this.img=i,this.img.onload=p=>{this.update(i)}});this.divHost.appendChild(o);const n=g("saturate",0,200);n.slider.defaultValue="100",this.divHost.appendChild(n.div),n.slider.oninput=()=>{const i=parseInt(n.slider.value)*.01;this.params.saturate=i,this.render(this.ctx)};const c=g("hueRotate",-360,360);c.slider.defaultValue="0",this.divHost.appendChild(c.div),c.slider.oninput=()=>{const i=parseInt(c.slider.value)*1;this.params.hueRotate=i,this.render(this.ctx)};const h=g("contrast",0,20);h.slider.defaultValue="10",this.divHost.appendChild(h.div),h.slider.oninput=()=>{const i=parseInt(h.slider.value)*.1;this.params.contrast=i,this.render(this.ctx)};const l=g("brightness",0,20);l.slider.defaultValue="10",this.divHost.appendChild(l.div),l.slider.oninput=()=>{const i=parseInt(l.slider.value)*.1;this.params.brightness=i,this.render(this.ctx)};const d=g("sepia",0,100);d.slider.defaultValue="0",this.divHost.appendChild(d.div),d.slider.oninput=()=>{const i=parseInt(d.slider.value)*.01;this.params.sepia=i,this.render(this.ctx)};const u=document.createElement("button");this.divHost.appendChild(u),u.style.width="50px",u.style.height="50px",u.textContent="Reset",u.onclick=()=>{this.resetParam(),this.render(this.ctx)};const m=document.createElement("button");this.divHost.appendChild(m),m.style.width="50px",m.style.height="50px",m.textContent="preset",m.onclick=()=>{this.renderWithPreset(),this.render(this.ctx)},this.start()}update(e){this.img=e,this.canvas.width=this.img.width,this.canvas.height=this.img.height,this.cFilter&&this.cFilter.destroy(),this.cFilter=new _(this.img),this.render(this.ctx)}render(e){if(this.img===void 0||this.cFilter===void 0)return;const r=this.params;this.cFilter.applyFilter(e,r)}renderWithPreset(e="inkwell"){this.resetParam();for(let r in v[e])this.params[r]=v[e][r]}resetParam(){this.params={blur:0,sepia:0,contrast:1,brightness:1,saturate:1,hueRotate:0}}destroyPost(){this.cFilter.destroy()}}const U={aden:"aden",poprocket:"poprocket",inkwell:"inkwell"},v={aden:{sepia:.35,contrast:1.1,brightness:1.2},poprocket:{sepia:.15,brightness:1.2},inkwell:{saturate:0,contrast:.85,brightness:1.25}},g=(a,e,r)=>{const t=document.createElement("div");t.style.display="flex";const s=document.createElement("input");s.type="range",s.min=`${e}`,s.max=`${r}`;const o=document.createElement("div");return o.textContent=a,o.style.color="#aaa",t.appendChild(s),t.appendChild(o),{div:t,slider:s,text:o}},T=a=>{const e=document.createElement("input");return e.type="file",e.addEventListener("change",r=>{const t=r.target.files[0];if(t){const s=new FileReader;s.onload=o=>{const n=new Image;n.src=o.target.result,a(n)},s.readAsDataURL(t)}}),e};export{E as ColorCorrection,v as PRESET,U as PRESET_TYPE,b as Renderer,L as Solution};
