(function(){"use strict";var t={9717:function(t,e,n){n.d(e,{Z:function(){return l}});var r=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"menu-ul"},t._l(t.menuList,(function(n){return e("li",{key:n.id},["/"==n.link?e("router-link",{attrs:{to:"/",exact:""}},[t._v(t._s(n.title))]):e("router-link",{attrs:{to:n.link}},[t._v(t._s(n.title)+" ")])],1)})),0)},o=[],i={name:"MenuComponent",props:{menuList:Array}},a=i,s=n(1001),c=(0,s.Z)(a,r,o,!1,null,null,null),l=c.exports},9364:function(t,e,n){var r=n(7195),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],a={name:"App"},s=a,c=n(1001),l=(0,c.Z)(s,o,i,!1,null,null,null),u=l.exports,p=n(2241),d=JSON.parse('[{"id":1,"title":"graph","link":"graph"}]'),f=function(){var t=this,e=t._self._c;return e("div",[e("MenuComponent",{attrs:{menuList:t.subMenuList}}),e("main",{attrs:{id:"main"}},[e("router-view")],1)],1)},h=[],m=n(9717),v={name:"MainLayout",components:{MenuComponent:m.Z},props:{subMenuList:Array}},C=v,_=(0,c.Z)(C,f,h,!1,null,"3248e3a2",null),x=_.exports,g=function(){var t=this,e=t._self._c;return e("div",[e("TitleComponent",{attrs:{title:t.title}})],1)},y=[],b=function(){var t=this,e=t._self._c;return e("h1",[t._v(t._s(t.title))])},D=[],X={name:"TitleComponent",props:{title:String}},Y=X,S=(0,c.Z)(Y,b,D,!1,null,"004a2625",null),G=S.exports,E={name:"MainPage",components:{TitleComponent:G},props:{title:String}},w=E,k=(0,c.Z)(w,g,y,!1,null,null,null),T=k.exports,Z=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"wrapper"}},[e("h2",[t._v(t._s(t.title))]),e("GraphComponent"),e("UndirectedGraphComponent"),e("DirectedGraphComponent"),e("ComplteGraphComponent")],1)},A=[],B=function(){var t=this,e=t._self._c;return e("div",[e("DescriptionComponent",{attrs:{title:"기본 개념",descriptions:t.descriptions}}),e("GraphCanvas")],1)},V=[],j=function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v(t._s(t.title))]),e("ul",t._l(t.descriptions,(function(n,r){return e("li",{key:r},[t._v(" "+t._s(n)+" ")])})),0)])},O=[],P={name:"DescriptionComponent",props:{title:String,descriptions:Array}},N=P,F=(0,c.Z)(N,j,O,!1,null,"b4a25d06",null),M=F.exports,L=function(){var t=this,e=t._self._c;return e("canvas",{attrs:{id:"defaultCanvas"}})},U=[];n(7658);const J=t=>t*Math.PI/180,q=t=>{const e=document.getElementById(t);return e.getContext("2d")},$=(t,e)=>{const[n,r]=e,o=document.getElementById(t);o.style.width=`${n}px`,o.style.height=`${r}px`;const i=o.getContext("2d"),a=window.devicePixelRatio;return o.width=n*a,o.height=r*a,i.scale(a,a),i},I=(t,e,n)=>{let{x:r,y:o,text:i}=e;n||(n="white"),t.beginPath(),t.arc(r,o,25,0,J(360),!0),t.fillStyle=n,t.fill(),t.stroke(),t.font="13px malgun gothic",t.fillStyle="black",Number(i)>=10&&(r-=2),t.fillText(i,r-4,o+5)},R=(t,e)=>{const{startX:n,startY:r,endX:o,endY:i}=e;t.save(),t.beginPath(),t.moveTo(n,r),t.lineTo(o,i),t.stroke(),t.restore()},H=(t,e)=>{R(t,e);const{startX:n,startY:r,endX:o,endY:i}=e,[a,s]=[5,12],[c,l]=[o-n,i-r],u=Math.atan2(l,c),p=Math.sqrt(c*c+l*l);t.translate(n,r),t.rotate(u),t.beginPath(),t.moveTo(p-s,-a),t.lineTo(p,0),t.lineTo(p-s,a),t.fill();const d=window.devicePixelRatio;t.setTransform(d,0,0,d,0,0)},K=(t,e,n)=>{const r=$(t,[300,200]);e.forEach((t=>I(r,t))),n.filter(((t,e)=>e<4)).forEach((t=>R(r,t)))},Q=(t,e,n)=>{const r=$(t,[300,200]);e.forEach((t=>I(r,t))),n.filter(((t,e)=>e<4)).forEach((t=>H(r,t)))},z=(t,e,n)=>{const r=$(t,[300,200]);e.forEach((t=>I(r,t))),n.forEach((t=>R(r,t)))},W=(t,e,n)=>{const r=$(t,[300,200]);e.forEach((t=>I(r,t)));const o=[];n.forEach((t=>{H(r,t),o.push({startX:t.endX,startY:t.endY,endX:t.startX,endY:t.startY})})),o.forEach((t=>H(r,t)))},tt=(t,e,n)=>{const r=$(t,[300,550]);e.forEach((t=>I(r,t))),n.forEach((t=>R(r,t)))};var et=JSON.parse('[{"x":50,"y":50,"text":"A"},{"x":150,"y":50,"text":"B"},{"x":200,"y":150,"text":"C"},{"x":100,"y":150,"text":"D"}]'),nt=JSON.parse('[{"startX":75,"startY":50,"endX":125,"endY":50},{"startX":165,"startY":70,"endX":195,"endY":125},{"startX":175,"startY":150,"endX":125,"endY":150},{"startX":85,"startY":130,"endX":60,"endY":73},{"startX":110,"startY":128,"endX":140,"endY":73},{"startX":70,"startY":65,"endX":180,"endY":133}]'),rt={name:"GraphCanvas",mounted(){K("defaultCanvas",et,nt)}},ot=rt,it=(0,c.Z)(ot,L,U,!1,null,null,null),at=it.exports;const st=["그래프(Graph)는 연결 되어 있는 원소간의 관계를 표현한 자료구조","연결할 객체를 나타내는 정점(Vertex)과 객체를 연결하는 간선(Edge)의 집합으로 구성","그래프 G를 G=(V, E)로 정의하는데, V는 정점의 집합, E는 간선들의 집합을 의미"];var ct={name:"GraphComponent",components:{DescriptionComponent:M,GraphCanvas:at},data:()=>({descriptions:st})},lt=ct,ut=(0,c.Z)(lt,B,V,!1,null,"17233c5a",null),pt=ut.exports,dt=function(){var t=this,e=t._self._c;return e("div",[e("DescriptionComponent",{attrs:{title:"무방향 그래프",descriptions:t.descriptions}}),e("UndirectedGraphCanvas")],1)},ft=[],ht=function(){var t=this,e=t._self._c;return e("canvas",{attrs:{id:"undirectedCanvas"}})},mt=[],vt={name:"UndirectedGraphCanvas",mounted(){K("undirectedCanvas",et,nt)}},Ct=vt,_t=(0,c.Z)(Ct,ht,mt,!1,null,null,null),xt=_t.exports;const gt=["무방향 그래프(Undirected Graph)는 두 정점을 연결하는 간선에 방향이 없는 그래프","무방향 그래프에서 정점 Vi와 Vj를 연결하는 간선을 (Vi, Vj)로 표현하는데, 이 때 (Vi, Vj)와 (Vj, Vi)는 같은 간선을 나타냅니다.","무방향 그래프는 방향이 없기 때문에 (A -> B) == (B -> A) 가 성립된다.","V(G1)={A, B, C, D}, E(G1)={(A, B), (A, D), (B, C), (C, D)}"];var yt={name:"UndirectedGraphComponent",components:{DescriptionComponent:M,UndirectedGraphCanvas:xt},data:()=>({descriptions:gt})},bt=yt,Dt=(0,c.Z)(bt,dt,ft,!1,null,"469f0e73",null),Xt=Dt.exports,Yt=function(){var t=this,e=t._self._c;return e("div",[e("DescriptionComponent",{attrs:{title:"방향 그래프",descriptions:t.descriptions}}),e("DirectedGraphCanvas")],1)},St=[],Gt=function(){var t=this,e=t._self._c;return e("canvas",{attrs:{id:"directedCanvas"}})},Et=[],wt={name:"DirectedGraphCanvas",mounted(){Q("directedCanvas",et,nt)}},kt=wt,Tt=(0,c.Z)(kt,Gt,Et,!1,null,null,null),Zt=Tt.exports;const At=["방향 그래프(Directed Graph)는 간선에 방향이 있는 그래프","방향 그래프에서 정점 Vi와 Vj를 연결하는 간선을 <Vi, Vj>로 표현하는데, 이 때 Vi를 꼬리(tail), Vj를 머리(head)라고 한다.","방향 그래프는 <Vi, Vj> 와 <Vj, Vi>는 서로 다른 간선","V(G1)={A, B, C, D}, E(G1)={(A, B), (B, C), (C, D), (D, A)}"];var Bt={name:"DirectedGraphComponent",components:{DescriptionComponent:M,DirectedGraphCanvas:Zt},data:()=>({descriptions:At})},Vt=Bt,jt=(0,c.Z)(Vt,Yt,St,!1,null,"6df5239f",null),Ot=jt.exports,Pt=function(){var t=this,e=t._self._c;return e("div",[e("DescriptionComponent",{attrs:{title:"완전 그래프",descriptions:t.descriptions}}),e("ComplteGraphCanvas")],1)},Nt=[],Ft=function(){var t=this;t._self._c;return t._m(0)},Mt=[function(){var t=this,e=t._self._c;return e("div",[e("div",[e("canvas",{attrs:{id:"complteCanvas"}}),e("canvas",{attrs:{id:"directedComplteCanvas"}})])])}],Lt={name:"ComplteGraphCanvas",mounted(){z("complteCanvas",et,nt),W("directedComplteCanvas",et,nt)}},Ut=Lt,Jt=(0,c.Z)(Ut,Ft,Mt,!1,null,null,null),qt=Jt.exports;const $t=["완전 그래프(Complte Graph)는 한 정점에서 다른 모든 정점과 연결되어 최대 간선 수를 갖는 그래프","정점이 n개인 완전 그래프에서 무방향 그래프의 최대 간선 수는 n(n-1)/2이고 방향 그래프의 최대 간선 수는 n(n-1)"];var It={name:"ComplteGraphComponent",components:{DescriptionComponent:M,ComplteGraphCanvas:qt},data:()=>({descriptions:$t})},Rt=It,Ht=(0,c.Z)(Rt,Pt,Nt,!1,null,"1ff1e472",null),Kt=Ht.exports,Qt={name:"GraphPage",components:{GraphComponent:pt,UndirectedGraphComponent:Xt,DirectedGraphComponent:Ot,ComplteGraphComponent:Kt},props:{title:String}},zt=Qt,Wt=(0,c.Z)(zt,Z,A,!1,null,null,null),te=Wt.exports;const ee={path:"data-structure",component:x,redirect:"data-structure/main",props:{subMenuList:d},children:[{path:"main",component:T,props:{title:"자료구조"}},{path:"graph",component:te,props:{title:"그래프(Graph)"}}]};var ne=ee,re=JSON.parse('[{"id":1,"title":"dfs/bfs","link":"dfs-bfs"}]'),oe=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"wrapper"}},[e("TitleComponent",{attrs:{title:t.title}}),e("DfsComponent",{ref:"dfs",attrs:{title:"깊이 우선 탐색(DFS, Depth-First Search)이란?"}}),e("BfsComponent",{ref:"bfs",attrs:{title:"너비 우선 탐색(BFS, Breadth-First Search)"}}),e("div",[e("h3",[t._v("그림으로 보는 탐색 방법")]),e("button",{on:{click:function(e){return t.searchDFS()}}},[t._v("dfs 탐색")]),e("button",{on:{click:function(e){return t.searchBFS()}}},[t._v("bfs 탐색")]),e("div",{staticStyle:{height:"40vh"}},[e("TreeCanvas",{ref:"tree"})],1)])],1)},ie=[],ae=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.title))]),e("DescriptionComponent",{attrs:{title:"기본 개념",descriptions:t.descriptions}})],1)},se=[];const ce=["최대한 깊이 내려간 뒤, 더 이상 깊이 갈 곳이 없을 경우 옆으로 이동한다.","즉, 시작 노드에서 다음 분기로 넘어가기 전까지 해당 분기를 완벽하게 탐색하는 방식","Stack 자료구조 또는 재귀를 이용하여 구현한다."];var le={name:"DfsComponent",components:{DescriptionComponent:M},props:{title:String},data:()=>({descriptions:ce})},ue=le,pe=(0,c.Z)(ue,ae,se,!1,null,"30b0fd0c",null),de=pe.exports,fe=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.title))]),e("DescriptionComponent",{attrs:{title:"기본 개념",descriptions:t.descriptions}})],1)},he=[];const me=["같은 층을 모두 검색한 다음, 더 이상 갈 수 없으면 다음 층으로 이동","즉, 시작 노드가 존재하는 모든 층의 노드를 검색 한 후 다음 층으로 검색하여 탐색하는 방식","Queue 자료구조를 이용하여 구현한다.."];var ve={name:"BfsComponent",components:{DescriptionComponent:M},props:{title:String},data:()=>({descriptions:me})},Ce=ve,_e=(0,c.Z)(Ce,fe,he,!1,null,"0a3de0b0",null),xe=_e.exports,ge=function(){var t=this,e=t._self._c;return e("canvas",{attrs:{id:"treeCanvas"}})},ye=[];const be=(t,e)=>t.find((t=>t.text==e)),De=(t,e,n,r)=>{null!=e&&(setTimeout((()=>{I(r,e,"aqua")}),1e3*n[0]),++n[0],e.children.forEach((e=>De(t,be(t,e),n,r))))},Xe=(t,e,n)=>{const r={};let o=be(t,e);const i=[];i.push(o),r[o.text]=!0;let a=0;while(0!=i.length){const e=i.shift();setTimeout((()=>{I(n,e,"aqua")}),1e3*++a),r[e.text]=!0,e.parents.filter((t=>!r[t])).forEach((e=>i.push(be(t,e)))),e.children.filter((t=>!r[t])).forEach((e=>i.push(be(t,e))))}};var Ye=JSON.parse('[{"x":150,"y":80,"text":1,"parents":[],"children":[2,3,4]},{"x":50,"y":200,"text":2,"parents":[1],"children":[5]},{"x":150,"y":200,"text":3,"parents":[1],"children":[6,7]},{"x":250,"y":200,"text":4,"parents":[1],"children":[8]},{"x":25,"y":320,"text":5,"parents":[2],"children":[9]},{"x":115,"y":320,"text":6,"parents":[3],"children":[10]},{"x":195,"y":320,"text":7,"parents":[3],"children":[]},{"x":275,"y":320,"text":8,"parents":[4],"children":[]},{"x":25,"y":440,"text":9,"parents":[5],"children":[]},{"x":115,"y":440,"text":10,"parents":[6],"children":[]}]'),Se=JSON.parse('[{"startX":130,"startY":95,"endX":55,"endY":175},{"startX":150,"startY":105,"endX":150,"endY":175},{"startX":170,"startY":95,"endX":245,"endY":175},{"startX":45,"startY":225,"endX":30,"endY":295},{"startX":145,"startY":225,"endX":120,"endY":295},{"startX":155,"startY":225,"endX":190,"endY":295},{"startX":255,"startY":225,"endX":270,"endY":295},{"startX":25,"startY":345,"endX":25,"endY":415},{"startX":115,"startY":345,"endX":115,"endY":415}]');let Ge;var Ee={name:"TreeCanvas",mounted(){tt("treeCanvas",Ye,Se),Ge=q("treeCanvas")},methods:{init(){Ye.forEach((t=>I(Ge,t,"white")))},bfs(){this.init(),Xe(Ye,3,Ge)},dfs(){this.init(),De(Ye,Ye.find((t=>1==t.text)),new Array(1).fill(0),Ge)}}},we=Ee,ke=(0,c.Z)(we,ge,ye,!1,null,null,null),Te=ke.exports,Ze={name:"DfsBfsPage",components:{TitleComponent:G,DfsComponent:de,BfsComponent:xe,TreeCanvas:Te},props:{title:String},methods:{searchDFS(){this.$refs.tree.dfs()},searchBFS(){this.$refs.tree.bfs()}}},Ae=Ze,Be=(0,c.Z)(Ae,oe,ie,!1,null,null,null),Ve=Be.exports;const je={path:"algorithm",component:x,redirect:"algorithm/main",props:{subMenuList:re},children:[{path:"main",component:T,props:{title:"알고리즘"}},{path:"dfs-bfs",component:Ve,props:{title:"DFS/BFS"}}]};var Oe=je;r.ZP.use(p.ZP);var Pe=new p.ZP({mode:"hash",routes:[{path:"/",name:"home",component:()=>n.e(662).then(n.bind(n,2662))},{path:"/menu",component:()=>n.e(580).then(n.bind(n,7662)),redirect:"/menu/data-structure",children:[ne,Oe]},{path:"/:catchAll(.*)",name:"notFound",component:()=>n.e(631).then(n.bind(n,4631))}]});r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(u),router:Pe}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],i=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{580:"80b409cf",631:"74a3f12e",662:"ffc56494"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{580:"6d758a70",631:"45c19fe5",662:"3f13e8a9"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="computer-science-vue:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==e+i){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[o];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(e(a,s))return o();t(r,s,null,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={580:1,631:1,662:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),s=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],s=r[1],c=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(e&&e(r);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},r=self["webpackChunkcomputer_science_vue"]=self["webpackChunkcomputer_science_vue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9364)}));r=n.O(r)})();
//# sourceMappingURL=app.6eca1a0f.js.map