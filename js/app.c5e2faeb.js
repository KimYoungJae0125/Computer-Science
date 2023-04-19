(function(){"use strict";var t={2775:function(t,e,n){n.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"menu-ul"},t._l(t.menuList,(function(n){return e("li",{key:n.id,staticClass:"menu-li"},[e("router-link",{staticClass:"menu-a",attrs:{to:n.link}},[t._v(t._s(n.title)+" ")])],1)})),0)},i=[],o={name:"MenuComponent",props:{menuList:Array}},s=o,a=n(1001),l=(0,a.Z)(s,r,i,!1,null,null,null),c=l.exports},2309:function(t,e,n){var r=n(7195),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],s={name:"App"},a=s,l=n(1001),c=(0,l.Z)(a,i,o,!1,null,null,null),u=c.exports,d=n(2241),p=JSON.parse('[{"id":1,"title":"graph","link":"graph"}]'),f=function(){var t=this,e=t._self._c;return e("div",[e("MenuComponent",{attrs:{menuList:t.subMenuList}}),e("main",{attrs:{id:"main"}},[e("router-view")],1)],1)},h=[],m=n(2775),v={name:"MainLayout",components:{MenuComponent:m.Z},props:{subMenuList:Array}},C=v,_=(0,l.Z)(C,f,h,!1,null,"8ebae364",null),g=_.exports,b=function(){var t=this;t._self._c;return t._m(0)},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v("자료구조 페이지")])])}],x={name:"DataStructure",props:{msg:String}},D=x,S=(0,l.Z)(D,b,y,!1,null,"49ee11ee",null),B=S.exports,G=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.title))]),e("GraphComponent"),e("UndirectedGraphComponent"),e("DirectedGraphComponent")],1)},T=[],k=function(){var t=this,e=t._self._c;return e("div",[e("DescriptionComponent",{attrs:{title:"기본 개념",descriptions:t.descriptions}}),e("GraphCanvas")],1)},A=[],w=function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v(t._s(t.title))]),e("ul",t._l(t.descriptions,(function(n,r){return e("li",{key:r},[t._v(" "+t._s(n)+" ")])})),0)])},E=[],Z={name:"DescriptionComponent",props:{title:String,descriptions:Array}},L=Z,V=(0,l.Z)(L,w,E,!1,null,"d85de5fa",null),j=V.exports,P=function(){var t=this,e=t._self._c;return e("canvas",{attrs:{id:"defaultCanvas"}})},O=[];const M=t=>t*Math.PI/180,F=t=>{const[e,n]=[300,200],r=document.getElementById(t);r.style.width=`${e}px`,r.style.height=`${n}px`;const i=r.getContext("2d"),o=window.devicePixelRatio;return r.width=e*o,r.height=n*o,i.scale(o,o),i},N=(t,e)=>{const{x:n,y:r,text:i}=e;t.beginPath(),t.arc(n,r,25,0,M(360),!0),t.fillStyle="white",t.fill(),t.stroke(),t.font="13px malgun gothic",t.fillStyle="black",t.fillText(i,n-4,r+5)},X=(t,e)=>{const{startX:n,startY:r,endX:i,endY:o}=e;t.save(),t.beginPath(),t.moveTo(n,r),t.lineTo(i,o),t.stroke(),t.restore()},Y=(t,e)=>{X(t,e);const{startX:n,startY:r,endX:i,endY:o}=e,[s,a]=[5,12],[l,c]=[i-n,o-r],u=Math.atan2(c,l),d=Math.sqrt(l*l+c*c);t.translate(n,r),t.rotate(u),t.beginPath(),t.moveTo(d-a,-s),t.lineTo(d,0),t.lineTo(d-a,s),t.fill(),t.setTransform(2,0,0,2,0,0)},U=(t,e,n)=>{const r=F(t);e.forEach((t=>N(r,t))),n.forEach((t=>X(r,t)))},$=(t,e,n)=>{const r=F(t);e.forEach((t=>N(r,t))),n.forEach((t=>Y(r,t)))};var H=JSON.parse('[{"x":50,"y":50,"text":"A"},{"x":150,"y":50,"text":"B"},{"x":200,"y":150,"text":"C"},{"x":100,"y":150,"text":"D"}]'),I=JSON.parse('[{"startX":75,"startY":50,"endX":125,"endY":50},{"startX":165,"startY":70,"endX":195,"endY":125},{"startX":175,"startY":150,"endX":125,"endY":150},{"startX":85,"startY":130,"endX":60,"endY":73}]'),J={name:"GraphCanvas",mounted(){U("defaultCanvas",H,I)}},q=J,K=(0,l.Z)(q,P,O,!1,null,"17591a34",null),Q=K.exports;const R=["그래프(Graph)는 연결 되어 있는 원소간의 관계를 표현한 자료구조","연결할 객체를 나타내는 정점(Vertex)과 객체를 연결하는 간선(Edge)의 집합으로 구성","그래프 G를 G=(V, E)로 정의하는데, V는 정점의 집합, E는 간선들의 집합을 의미"];var W={name:"GraphComponent",components:{DescriptionComponent:j,GraphCanvas:Q},data:()=>({descriptions:R})},z=W,tt=(0,l.Z)(z,k,A,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t._self._c;return e("div",[e("DescriptionComponent",{attrs:{title:"무방향 그래프",descriptions:t.descriptions}}),e("UndirectedGraphCanvas")],1)},rt=[],it=function(){var t=this,e=t._self._c;return e("canvas",{attrs:{id:"UndirectedCanvas"}})},ot=[],st={name:"UndirectedGraphCanvas",mounted(){U("UndirectedCanvas",H,I)}},at=st,lt=(0,l.Z)(at,it,ot,!1,null,"2a93e047",null),ct=lt.exports;const ut=["무방향 그래프(Undirected Graph)는 두 정점을 연결하는 간선에 방향이 없는 그래프","무방향 그래프에서 정점 Vi와 Vj를 연결하는 간선을 (Vi, Vj)로 표현하는데, 이 때 (Vi, Vj)와 (Vj, Vi)는 같은 간선을 나타냅니다.","무방향 그래프는 방향이 없기 때문에 (A -> B) == (B -> A) 가 성립된다.","V(G1)={A, B, C, D}, E(G1)={(A, B), (A, D), (B, C), (B, D), (C, D)}"];var dt={name:"UndirectedGraphComponent",components:{DescriptionComponent:j,UndirectedGraphCanvas:ct},data:()=>({descriptions:ut})},pt=dt,ft=(0,l.Z)(pt,nt,rt,!1,null,null,null),ht=ft.exports,mt=function(){var t=this,e=t._self._c;return e("div",[e("DescriptionComponent",{attrs:{title:"방향 그래프",descriptions:t.descriptions}}),e("DirectedGraphCanvas")],1)},vt=[],Ct=function(){var t=this,e=t._self._c;return e("canvas",{attrs:{id:"DirectedCanvas"}})},_t=[],gt={name:"DirectedGraphCanvas",mounted(){$("DirectedCanvas",H,I)}},bt=gt,yt=(0,l.Z)(bt,Ct,_t,!1,null,"03767865",null),xt=yt.exports;const Dt=["무방향 그래프(Undirected Graph)는 두 정점을 연결하는 간선에 방향이 없는 그래프","무방향 그래프에서 정점 Vi와 Vj를 연결하는 간선을 (Vi, Vj)로 표현하는데, 이 때 (Vi, Vj)와 (Vj, Vi)는 같은 간선을 나타냅니다.","무방향 그래프는 방향이 없기 때문에 (A -> B) == (B -> A) 가 성립된다.","V(G1)={A, B, C, D}, E(G1)={(A, B), (A, D), (B, C), (B, D), (C, D)}"];var St={name:"DirectedGraphComponent",components:{DescriptionComponent:j,DirectedGraphCanvas:xt},data:()=>({descriptions:Dt})},Bt=St,Gt=(0,l.Z)(Bt,mt,vt,!1,null,null,null),Tt=Gt.exports,kt={name:"GrapthPage",components:{GraphComponent:et,UndirectedGraphComponent:ht,DirectedGraphComponent:Tt},props:{title:String}},At=kt,wt=(0,l.Z)(At,G,T,!1,null,null,null),Et=wt.exports;const Zt={path:"data-structure",component:g,redirect:"data-structure/main",props:{subMenuList:p},children:[{path:"main",component:B},{path:"graph",component:Et,props:{title:"그래프(Graph)"}}]};var Lt=Zt,Vt=JSON.parse('[{"id":1,"title":"dfs/bfs","link":"dfs-bfs"}]'),jt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("TitleComponent",{attrs:{title:t.title}})],1)},Pt=[],Ot=function(){var t=this,e=t._self._c;return e("h1",[t._v(t._s(t.title))])},Mt=[],Ft={name:"TitleComponent",props:{title:String}},Nt=Ft,Xt=(0,l.Z)(Nt,Ot,Mt,!1,null,"004a2625",null),Yt=Xt.exports,Ut={name:"AlgorithmPage",components:{TitleComponent:Yt},props:{title:String}},$t=Ut,Ht=(0,l.Z)($t,jt,Pt,!1,null,"9e4e1be4",null),It=Ht.exports,Jt=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"wrapper"}},[e("TitleComponent",{attrs:{title:t.title}}),e("DfsComponent",{ref:"dfs",attrs:{title:"깊이 우선 탐색(DFS, Depth-First Search)이란?"}}),e("BfsComponent",{ref:"bfs",attrs:{title:"너비 우선 탐색(BFS, Breadth-First Search)"}}),e("div",[e("h3",[t._v("그림으로 보는 탐색 방법")]),e("button",{on:{click:function(e){return t.searchDFS()}}},[t._v("dfs 탐색")]),e("button",{on:{click:function(e){return t.searchBFS()}}},[t._v("bfs 탐색")]),t._m(0)])],1)},qt=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{height:"40vh"}},[e("div",{attrs:{id:"circleWrapper"}},[e("div",{attrs:{id:"circle1"}}),e("div",{attrs:{id:"circle2"}}),e("div",{attrs:{id:"circle3"}}),e("div",{attrs:{id:"circle4"}}),e("div",{attrs:{id:"circle5"}}),e("div",{attrs:{id:"circle6"}}),e("div",{attrs:{id:"circle7"}}),e("div",{attrs:{id:"circle8"}}),e("div",{attrs:{id:"circle9"}}),e("div",{attrs:{id:"circle10"}}),e("div",{staticClass:"line",attrs:{id:"line1"}}),e("div",{staticClass:"line",attrs:{id:"line2"}}),e("div",{staticClass:"line",attrs:{id:"line3"}}),e("div",{staticClass:"line",attrs:{id:"line4"}}),e("div",{staticClass:"line",attrs:{id:"line5"}}),e("div",{staticClass:"line",attrs:{id:"line6"}}),e("div",{staticClass:"line",attrs:{id:"line7"}}),e("div",{staticClass:"line",attrs:{id:"line8"}}),e("div",{staticClass:"line",attrs:{id:"line9"}})])])}],Kt=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.title))]),e("DescriptionComponent",{attrs:{title:"기본 개념",descriptions:t.descriptions}})],1)},Qt=[];const Rt=["최대한 깊이 내려간 뒤, 더 이상 깊이 갈 곳이 없을 경우 옆으로 이동한다.","즉, 시작 노드에서 다음 분기로 넘어가기 전까지 해당 분기를 완벽하게 탐색하는 방식","Stack 자료구조 또는 재귀를 이용하여 구현한다."];var Wt={name:"DfsComponent",components:{DescriptionComponent:j},props:{title:String},data:()=>({descriptions:Rt}),methods:{search:()=>{for(let t=1;t<=10;t++){const e=document.getElementById(`circle${t}`);null!=e&&(e.innerHTML="",e.classList.remove("search"),setTimeout((()=>{e.innerHTML=t,e.classList.add("search")}),1500*t))}}}},zt=Wt,te=(0,l.Z)(zt,Kt,Qt,!1,null,null,null),ee=te.exports,ne=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.title))]),e("DescriptionComponent",{attrs:{title:"기본 개념",descriptions:t.descriptions}})],1)},re=[];const ie=["같은 층을 모두 검색한 다음, 더 이상 갈 수 없으면 다음 층으로 이동","즉, 시작 노드가 존재하는 모든 층의 노드를 검색 한 후 다음 층으로 검색하여 탐색하는 방식","Queue 자료구조를 이용하여 구현한다.."];var oe={name:"BfsComponent",components:{DescriptionComponent:j},props:{title:String},data:()=>({descriptions:ie}),methods:{search:()=>{const t=[[5],[1,6,8],[2,9],[3,7,10],[4]].flat();t.forEach(((t,e)=>{e++;const n=document.getElementById(`circle${t}`);null!=n&&(n.innerHTML="",n.classList.remove("search"),setTimeout((()=>{n.innerHTML=e,n.classList.add("search")}),500*e))}))}}},se=oe,ae=(0,l.Z)(se,ne,re,!1,null,null,null),le=ae.exports,ce={name:"DfsBfsPage",components:{TitleComponent:Yt,DfsComponent:ee,BfsComponent:le},props:{title:String},methods:{searchDFS(){this.$refs.dfs.search()},searchBFS(){this.$refs.bfs.search()}}},ue=ce,de=(0,l.Z)(ue,Jt,qt,!1,null,"1d642e70",null),pe=de.exports;const fe={path:"algorithm",component:g,redirect:"algorithm/main",props:{subMenuList:Vt},children:[{path:"main",component:It,props:{title:"알고리즘"}},{path:"dfs-bfs",component:pe,props:{title:"DFS/BFS"}}]};var he=fe;r.ZP.use(d.ZP);var me=new d.ZP({mode:"hash",routes:[{path:"/",name:"home",component:()=>n.e(585).then(n.bind(n,4585))},{path:"/menu",component:()=>n.e(809).then(n.bind(n,4809)),children:[Lt,he]},{path:"/:catchAll(.*)",name:"notFound",component:()=>n.e(631).then(n.bind(n,4631))}]});r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(u),router:me}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{585:"478d19af",631:"74a3f12e",809:"bb77cd5f"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{585:"674afb83",631:"45c19fe5",809:"e4f62089"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="computer-science-vue:";n.l=function(r,i,o,s){if(t[r])t[r].push(i);else{var a,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+o),a.src=r),t[r]=[i];var p=function(e,n){a.onerror=a.onload=null,clearTimeout(f);var i=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,o.parentNode&&o.parentNode.removeChild(o),i(l)}};return o.onerror=o.onload=s,o.href=e,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){i=s[r],o=i.getAttribute("data-href");if(o===t||o===e)return i}},r=function(r){return new Promise((function(i,o){var s=n.miniCssF(r),a=n.p+s;if(e(s,a))return i();t(r,a,null,i,o)}))},i={143:0};n.f.miniCss=function(t,e){var n={585:1,631:1,809:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var s=n.p+n.u(e),a=new Error,l=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,i[1](a)}};n.l(s,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],a=r[1],l=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var u=l(n)}for(e&&e(r);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkcomputer_science_vue"]=self["webpackChunkcomputer_science_vue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2309)}));r=n.O(r)})();
//# sourceMappingURL=app.c5e2faeb.js.map