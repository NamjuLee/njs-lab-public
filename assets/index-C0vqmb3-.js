const r=async t=>await(await fetch(t)).json(),c=async t=>await(await fetch(t)).text(),o=async t=>fetch(`${t}`).then(e=>e.blob()).then(e=>{const n=new Image,a=URL.createObjectURL(e);return n.src=a,n.onload=()=>{n.crossOrigin="anonymous"},n}).catch(e=>{});export{r as a,c as b,o as g};
//# sourceMappingURL=index-C0vqmb3-.js.map
