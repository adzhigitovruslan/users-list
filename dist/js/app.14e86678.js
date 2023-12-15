(function(){"use strict";var e={5251:function(e,t,n){var r=n(7195),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],s=n(1001),a={},u=(0,s.Z)(a,o,i,!1,null,null,null),c=u.exports,l=n(2241),f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"table__users"},[t("div",{staticClass:"table__header header"},[e._v("Users")]),t("table",{staticClass:"table__list",attrs:{cellspacing:"0"}},[t("TheHeader"),e._l(e.usersList,(function(n){return t("UserItem",{key:n.id,attrs:{name:n.name,email:n.email,phone:n.phone,website:n.website},nativeOn:{click:function(t){return e.clickHandler(n.id)}}})}))],2)])},d=[],p=(n(560),function(){var e=this;e._self._c;return e._m(0)}),m=[function(){var e=this,t=e._self._c;return t("tr",[t("th",[e._v("Picture")]),t("th",[e._v("Name")]),t("th",[e._v("Email")]),t("th",[e._v("Phone")]),t("th",[e._v("Website")])])}],h={},v=(0,s.Z)(h,p,m,!1,null,"718dec90",null),g=v.exports,b=function(){var e=this,t=e._self._c;return t("tr",[e._m(0),t("td",[e._v(e._s(e.name))]),t("td",[e._v(e._s(e.email))]),t("td",[e._v(e._s(e.phone.split(" ")[0]))]),t("td",[e._v(e._s(e.website))])])},_=[function(){var e=this,t=e._self._c;return t("td",[t("img",{attrs:{src:"https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg",alt:"иконка лого"}})])}],y={name:"UserItem",props:{email:{type:String,default:""},name:{type:String,default:""},phone:{type:String,default:""},website:{type:String,default:""},id:{type:Number,default:null}}},w=y,P=(0,s.Z)(w,b,_,!1,null,"5b27803c",null),U=P.exports,k={name:"UsersList",components:{TheHeader:g,UserItem:U},computed:{usersList(){return this.$store.getters.getUsers}},methods:{clickHandler(e){this.$router.push({name:"UserAlbumPage",params:{id:String(e)}})},async getUsers(){try{const e=await fetch("https://jsonplaceholder.typicode.com/users"),t=await e.json();this.$store.dispatch("setUsersData",t)}catch(e){console.log("Error: GetUsers() method in UsersList comp",e)}}},mounted(){this.getUsers()}},Z=k,j=(0,s.Z)(Z,f,d,!1,null,"273b3fe8",null),C=j.exports;r.ZP.use(l.ZP);const O=[{path:"/",name:"UserList",component:C},{path:"/user/:id",name:"UserDetail",props:!0,component:()=>n.e(651).then(n.bind(n,6651)),children:[{path:"albums",name:"UserAlbumPage",props:!0,component:()=>n.e(286).then(n.bind(n,4286))},{path:"posts",name:"UserPostsPage",props:!0,component:()=>n.e(833).then(n.bind(n,9833))}]}],S=new l.ZP({mode:"history",base:"/",routes:O});var x=S,E=n(408);r.ZP.use(E.ZP);var T=new E.ZP.Store({state:{users:[]},getters:{getUsers(e){return e.users}},mutations:{setUsers(e,t){e.users=t}},actions:{setUsersData(e,t){e.commit("setUsers",t)}}}),A=n(8302),N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-wrapper"},[e._t("default")],2)},L=[],D={},H=(0,s.Z)(D,N,L,!1,null,"a13281b4",null),B=H.exports,F=n(2411);r.ZP.use(F.ZP),r.ZP.config.productionTip=!1,r.ZP.config.devtools=!0,r.ZP.component("base-card",B);const I=n(6082),$=n(5551);r.ZP.use(A.ZP,{error:$,loading:I,attempt:1}),new r.ZP({router:x,store:T,render:e=>e(c)}).$mount("#app")},5551:function(e,t,n){e.exports=n.p+"img/error.e59aed09.png"},6082:function(e,t,n){e.exports=n.p+"img/loader.7706af88.gif"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{286:"08933fe2",651:"8a167d01",833:"ba3df13a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{286:"2e52ae26",651:"042366a5",833:"bc7fe8f4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="test-project-5:";n.l=function(r,o,i,s){if(e[r])e[r].push(o);else{var a,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=a,i.parentNode&&i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=s,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var s=n.miniCssF(r),a=n.p+s;if(t(s,a))return o();e(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={286:1,651:1,833:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var s=n.p+n.u(t),a=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,o[1](a)}};n.l(s,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],u=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var l=u(n)}for(t&&t(r);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunktest_project_5"]=self["webpackChunktest_project_5"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5251)}));r=n.O(r)})();
//# sourceMappingURL=app.14e86678.js.map