const a=i=>{const n=i.trim().split(`
`),e=n[0].split(",").map(s=>s.trim()),o=[];for(let s=1;s<n.length;s++){const l=n[s].split(",").map(t=>t.trim()),c={};for(let t=0;t<e.length;t++){const r=l[t];c[e[t]]=isNaN(r)?r:Number(r)}o.push(c)}return o};export{a as c};
