(function(){"use strict";var t={1945:function(t,e,n){var r=n(7195),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],s={name:"App"},a=s,l=n(1001),c=(0,l.Z)(a,i,o,!1,null,null,null),u=c.exports,d=n(2241),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("aside",[e("ul",t._l(t.dataStructureList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:n.link}},[t._v(t._s(n.title))])],1)})),0)]),e("router-view")],1)},p=[],v=JSON.parse('[{"id":1,"title":"graph","link":"graph"}]');const h=v.map((t=>(t.link=`/menu/data-structure/${t.link}`,t)));var m={name:"DataStructureLayout",props:{title:String},data:()=>({dataStructureList:h})},g=m,_=(0,l.Z)(g,f,p,!1,null,"44efee37",null),b=_.exports,y=function(){var t=this;t._self._c;return t._m(0)},C=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v("자료구조 페이지")])])}],S={name:"DataStructure",props:{msg:String}},k=S,w=(0,l.Z)(k,y,C,!1,null,"49ee11ee",null),T=w.exports;const L={path:"data-structure",component:b,redirect:"data-structure/main",children:[{path:"main",component:T}]};var D=L,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("aside",[e("ul",t._l(t.algorithmList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:n.link}},[t._v(t._s(n.title))])],1)})),0)]),e("router-view")],1)},B=[],F=JSON.parse('[{"id":1,"title":"dfs/bfs","link":"dfs-bfs"}]');const x=F.map((t=>(t.link=`/menu/algorithm/${t.link}`,t)));var A={name:"AlgorithmLayout",props:{title:String},data:()=>({algorithmList:x})},E=A,P=(0,l.Z)(E,O,B,!1,null,"63e43990",null),Z=P.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("TitleComponent",{attrs:{title:t.title}})],1)},N=[],M=function(){var t=this,e=t._self._c;return e("h1",[t._v(t._s(t.title))])},H=[],$={name:"TitleComponent",props:{title:String}},I=$,q=(0,l.Z)(I,M,H,!1,null,"004a2625",null),J=q.exports,W={name:"AlgorithmPage",components:{TitleComponent:J},props:{title:String}},K=W,Q=(0,l.Z)(K,j,N,!1,null,"9e4e1be4",null),U=Q.exports,z=function(){var t=this,e=t._self._c;return e("main",{attrs:{id:"main"}},[e("div",{attrs:{id:"wrapper"}},[e("TitleComponent",{attrs:{title:t.title}}),e("DfsBfsComponent",{attrs:{title:"깊이 우선 탐색(DFS, Depth-First Search)이란?",descriptions:t.dfsDescriptions}}),e("DfsBfsComponent",{attrs:{title:"너비 우선 탐색(BFS, Breadth-First Search)",descriptions:t.bfsDescriptions}}),e("div",[e("h3",[t._v("그림으로 보는 탐색 방법")]),e("button",{on:{click:function(e){return t.searchDFS()}}},[t._v("dfs 탐색")]),e("button",{on:{click:function(e){return t.searchBFS()}}},[t._v("bfs 탐색")]),t._m(0)])],1)])},G=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{height:"40vh"}},[e("div",{attrs:{id:"circleWrapper"}},[e("div",{attrs:{id:"circle1"}}),e("div",{attrs:{id:"circle2"}}),e("div",{attrs:{id:"circle3"}}),e("div",{attrs:{id:"circle4"}}),e("div",{attrs:{id:"circle5"}}),e("div",{attrs:{id:"circle6"}}),e("div",{attrs:{id:"circle7"}}),e("div",{attrs:{id:"circle8"}}),e("div",{attrs:{id:"circle9"}}),e("div",{attrs:{id:"circle10"}}),e("div",{staticClass:"line",attrs:{id:"line1"}}),e("div",{staticClass:"line",attrs:{id:"line2"}}),e("div",{staticClass:"line",attrs:{id:"line3"}}),e("div",{staticClass:"line",attrs:{id:"line4"}}),e("div",{staticClass:"line",attrs:{id:"line5"}}),e("div",{staticClass:"line",attrs:{id:"line6"}}),e("div",{staticClass:"line",attrs:{id:"line7"}}),e("div",{staticClass:"line",attrs:{id:"line8"}}),e("div",{staticClass:"line",attrs:{id:"line9"}})])])}],R=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.title))]),e("div",{attrs:{id:"descriptionWrapper"}},[e("h3",[t._v("기본 개념")]),e("ul",t._l(t.descriptions,(function(n,r){return e("li",{key:r},[t._v(" "+t._s(n)+" ")])})),0)])])},V=[],X={name:"DfsBfsComponent",props:{title:String,descriptions:Array}},Y=X,tt=(0,l.Z)(Y,R,V,!1,null,"721a742e",null),et=tt.exports;const nt=["최대한 깊이 내려간 뒤, 더 이상 깊이 갈 곳이 없을 경우 옆으로 이동한다.","즉, 시작 노드에서 다음 분기로 넘어가기 전까지 해당 분기를 완벽하게 탐색하는 방식","Stack 자료구조 또는 재귀를 이용하여 구현한다."],rt=["같은 층을 모두 검색한 다음, 더 이상 갈 수 없으면 다음 층으로 이동","즉, 시작 노드가 존재하는 모든 층의 노드를 검색 한 후 다음 층으로 검색하여 탐색하는 방식","Queue 자료구조를 이용하여 구현한다.."];var it={name:"DfsBfsPage",components:{TitleComponent:J,DfsBfsComponent:et},props:{title:String},data:()=>({dfsDescriptions:nt,bfsDescriptions:rt}),methods:{searchDFS:()=>{for(let t=1;t<=10;t++){const e=document.getElementById(`circle${t}`);null!=e&&(e.innerHTML="",e.classList.remove("search"),setTimeout((()=>{e.innerHTML=t,e.classList.add("search")}),1500*t))}},searchBFS:()=>{const t=[[5],[1,6,8],[2,9],[3,7,10],[4]].flat();t.forEach(((t,e)=>{e++;const n=document.getElementById(`circle${t}`);null!=n&&(n.innerHTML="",n.classList.remove("search"),setTimeout((()=>{n.innerHTML=e,n.classList.add("search")}),500*e))}))}}},ot=it,st=(0,l.Z)(ot,z,G,!1,null,"76eba065",null),at=st.exports;const lt={path:"algorithm",component:Z,redirect:"algorithm/main",children:[{path:"main",component:U,props:{title:"알고리즘"}},{path:"dfs-bfs",component:at,props:{title:"DFS/BFS"}}]};var ct=lt;r.ZP.use(d.ZP);var ut=new d.ZP({mode:"hash",routes:[{path:"/",name:"home",component:()=>n.e(585).then(n.bind(n,4585))},{path:"/menu",component:()=>n.e(833).then(n.bind(n,9833)),children:[D,ct]},{path:"/:catchAll(.*)",name:"notFound",component:()=>n.e(631).then(n.bind(n,4631))}]});r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(u),router:ut}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{585:"478d19af",631:"74a3f12e",833:"3f2643a5"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{585:"674afb83",631:"45c19fe5",833:"b6d509cf"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="computer-science-vue:";n.l=function(r,i,o,s){if(t[r])t[r].push(i);else{var a,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+o),a.src=r),t[r]=[i];var f=function(e,n){a.onerror=a.onload=null,clearTimeout(p);var i=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,o.parentNode&&o.parentNode.removeChild(o),i(l)}};return o.onerror=o.onload=s,o.href=e,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){i=s[r],o=i.getAttribute("data-href");if(o===t||o===e)return i}},r=function(r){return new Promise((function(i,o){var s=n.miniCssF(r),a=n.p+s;if(e(s,a))return i();t(r,a,null,i,o)}))},i={143:0};n.f.miniCss=function(t,e){var n={585:1,631:1,833:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var s=n.p+n.u(e),a=new Error,l=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,i[1](a)}};n.l(s,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],a=r[1],l=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var u=l(n)}for(e&&e(r);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkcomputer_science_vue"]=self["webpackChunkcomputer_science_vue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1945)}));r=n.O(r)})();
//# sourceMappingURL=app.a9524d7e.js.map