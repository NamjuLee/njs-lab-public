"use strict";(self.webpackChunkNJS_Lab=self.webpackChunkNJS_Lab||[]).push([[5780],{15780:function(i,t,s){s.r(t),s.d(t,{Renderer:function(){return g},Solution:function(){return a}});var e=s(60136),h=s(29388),o=s(15671),r=s(43144),n=s(48506),d=s(26943),a=function(){function i(t){(0,o.Z)(this,i),this.divHost=void 0,this.renderer=void 0,this.divHost=t,this.divHost.style.display="flex",this.divHost.style.alignItems="center";var s=document.createElement("div");s.style.marginLeft="auto",s.style.marginRight="auto",s.style.backgroundColor="#555",s.style.width="1000px",s.style.height="600px",this.divHost.appendChild(s),n.x.demo&&(this.renderer=new g(s))}return(0,r.Z)(i,[{key:"destroy",value:function(){for(this.renderer.destroy();this.divHost.lastElementChild;)this.divHost.removeChild(this.divHost.lastElementChild)}}]),i}(),l=function(i,t,s,e){i.fillStyle=s,i.beginPath(),i.rect(t.x*e,t.y*e,e-1,e-1),i.closePath(),i.fill()},g=function(i){(0,e.Z)(s,i);var t=(0,h.Z)(s);function s(i){var e;return(0,o.Z)(this,s),(e=t.call(this,i)).w=0,e.h=0,e.cols=0,e.rows=0,e.cellSize=20,e.gridWidth=0,e.gridHeight=0,e.chanceOfWalls=.35,e.graph=void 0,e.canvas.style.position="relative",e.canvas.style.width="100%",e.canvas.style.height="100%",e.Build(),e.start(),e}return(0,r.Z)(s,[{key:"render",value:function(i){this.graph.propagation();this.graph.doneComputation&&this.Build();for(var t=0;t<this.cols;t++)for(var s=0;s<this.rows;s++){var e=this.graph.grid[t][s],h="rgb(190, 190, 190)";e.blocked&&(h="rgba(0, 0, 0, 0.9)"),e===this.graph.endNode&&(h="rgba(255, 0, 255, 0.9)"),l(i,e,h,this.cellSize)}for(var o=0;o<this.graph.openNodes.length;o++){var r=this.graph.openNodes[o];l(i,r,"rgb(0, 0, 255)",this.cellSize)}for(var n=0;n<this.graph.closedNodes.length;n++){var d=this.graph.closedNodes[n];l(i,d,"rgb(255, 0, 0)",this.cellSize)}for(var a=0;a<this.graph.path.length;a++){var g=this.graph.path[a];l(i,g,"rgb(0, 255, 0)",this.cellSize)}for(var c=0;c<this.cols;c++)for(var p=0;p<this.rows;p++){var u=this.graph.grid[c][p];if(!u.blocked)for(var v=0;v<u.neighbors.length;++v)i.strokeStyle="#fff",i.lineWidth=.58,i.beginPath(),i.moveTo(this.cellSize*u.x+.5*this.cellSize,this.cellSize*u.y+.5*this.cellSize),i.lineTo(this.cellSize*u.neighbors[v].x+.5*this.cellSize,this.cellSize*u.neighbors[v].y+.5*this.cellSize),i.stroke()}}},{key:"Build",value:function(){this.w=this.canvas.width,this.h=this.canvas.height,this.cols=Math.floor(this.w/this.cellSize),this.rows=Math.floor(this.h/this.cellSize),this.gridWidth=this.w,this.gridHeight=this.h,this.graph=new c;for(var i=0;i<this.cols;i++)for(var t=0;t<this.rows;t++){void 0===this.graph.grid[i]&&(this.graph.grid[i]=[]);var s=new p(i,t);Math.random()<this.chanceOfWalls&&(s.blocked=!0),this.graph.grid[i][t]=s}this.graph.startNode=this.getRandomCell(),this.graph.startNode.blocked=!1,this.graph.endNode=this.getRandomCell(),this.graph.endNode.blocked=!1;for(var e=0;e<this.cols;e++)for(var h=0;h<this.rows;h++)this.graph.buildConnection(this.graph.grid[e][h],this.cols,this.rows);this.graph.openNodes.push(this.graph.startNode)}},{key:"getRandomCell",value:function(){return this.graph.grid[Math.floor(Math.random()*this.cols)][Math.floor(Math.random()*this.rows)]}}]),s}(d.bb),c=function(){function i(){var t=this;(0,o.Z)(this,i),this.grid=[],this.openNodes=[],this.closedNodes=[],this.startNode=void 0,this.endNode=void 0,this.path=[],this.doneComputation=!1,this.buildConnection=function(i,s,e){if(!i.blocked){var h=i.x,o=i.y;h<s-1&&(t.grid[h+1][o].blocked||i.neighbors.push(t.grid[h+1][o])),o<e-1&&(t.grid[h][o+1].blocked||i.neighbors.push(t.grid[h][o+1])),h>0&&(t.grid[h-1][o].blocked||i.neighbors.push(t.grid[h-1][o])),o>0&&(t.grid[h][o-1].blocked||i.neighbors.push(t.grid[h][o-1]))}}}return(0,r.Z)(i,[{key:"gePath",value:function(){for(var i=void 0,t=this.grid[0].length*this.grid.length;t--;)if(void 0!==(i=this.propagation())&&i.length)return i;return i}},{key:"propagation",value:function(){if(!(this.openNodes.length>0))return this.doneComputation=!0,this.path;for(var i=0,t=0;t<this.openNodes.length;t++)this.openNodes[t].f<this.openNodes[i].f&&(i=t),this.openNodes[t].f===this.openNodes[i].f&&this.openNodes[t].g>this.openNodes[i].g&&(i=t);var s=this.openNodes[i];if(s===this.endNode)return this.doneComputation=!0,this.path;this.path=[];for(var e=s;e.previous;)this.path.push(e.previous),e=e.previous;this.openNodes.splice(this.openNodes.indexOf(s),1),this.closedNodes.push(s);for(var h=s.neighbors,o=0;o<h.length;o++){var r=h[o];if(!this.closedNodes.includes(r)&&!r.blocked){var n=s.g+.01*u(r,s);if(this.openNodes.includes(r))continue;this.openNodes.push(r),r.g=n,r.h=u(r,this.endNode),r.f=r.g+r.h,r.previous=s}}}}]),i}(),p=(0,r.Z)((function i(t,s){(0,o.Z)(this,i),this.f=0,this.h=0,this.g=0,this.x=0,this.y=0,this.z=0,this.neighbors=[],this.previous=void 0,this.blocked=!1,this.f=0,this.h=0,this.g=0,this.x=t,this.y=s,this.neighbors=[],this.blocked=!1})),u=function(i,t){return v(i.x,i.y,i.z,t.x,t.y,t.z)},v=function(i,t,s,e,h,o){return Math.sqrt((i-e)*(i-e)+(t-h)*(t-h)+(s-o)*(s-o))}}}]);
//# sourceMappingURL=5780.eea59b24.chunk.js.map