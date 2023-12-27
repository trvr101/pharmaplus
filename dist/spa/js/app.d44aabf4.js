(()=>{"use strict";var e={5628:(e,r,t)=>{var n=t(1957),o=t(1947),a=t(499),i=t(9835);function s(e,r,t,n,o,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const l=(0,i.aZ)({name:"App"});var u=t(1639);const c=(0,u.Z)(l,[["render",s]]),d=c;var h=t(1502),m=t(3340),p=t(8339);const f=(e,r,t)=>{if(e.meta.requiresAdmin){const e=sessionStorage.getItem("user_role");e&&"admin"===e?t():t("/login")}else t()},b=(e,r,t)=>{if(e.meta.requiresAdmin){const e=sessionStorage.getItem("user_role");e&&"branch_admin"===e?t():t("/login")}else t()},g=(e,r,t)=>{if(e.meta.requiresCashier){const e=sessionStorage.getItem("user_role");e&&"cashier"===e?t():t("/login")}else t()},v=[{path:"/",component:()=>Promise.all([t.e(736),t.e(341)]).then(t.bind(t,5341)),children:[{path:"/",component:()=>Promise.all([t.e(736),t.e(67)]).then(t.bind(t,6067))}]},{path:"/login",component:()=>Promise.all([t.e(736),t.e(979)]).then(t.bind(t,2979))},{path:"/dashboar",component:()=>Promise.all([t.e(736),t.e(522)]).then(t.bind(t,2522)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:f,children:[{path:"/dashboard",component:()=>Promise.all([t.e(736),t.e(709)]).then(t.bind(t,709)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:f},{path:"/inventory",component:()=>Promise.all([t.e(736),t.e(815)]).then(t.bind(t,6815)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:f},{path:"/restock",component:()=>Promise.all([t.e(736),t.e(64),t.e(604)]).then(t.bind(t,9507)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:f},{path:"/userManagement",component:()=>Promise.all([t.e(736),t.e(129)]).then(t.bind(t,4129)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:f},{path:"/mapping",component:()=>Promise.all([t.e(736),t.e(987)]).then(t.bind(t,4987))},{path:"/settings",component:()=>Promise.all([t.e(736),t.e(64),t.e(724)]).then(t.bind(t,4298)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:f},{path:"/branch",component:()=>Promise.all([t.e(736),t.e(992)]).then(t.bind(t,6992)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:f},{path:"/message",component:()=>Promise.all([t.e(736),t.e(64),t.e(243)]).then(t.bind(t,4243))},{path:"/notifications",component:()=>Promise.all([t.e(736),t.e(52)]).then(t.bind(t,6052)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:f},{path:"/scanner",component:()=>Promise.all([t.e(736),t.e(7)]).then(t.bind(t,4007)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:f},{path:"/sales",component:()=>Promise.all([t.e(736),t.e(205)]).then(t.bind(t,8205)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:f},{path:"/convo",component:()=>Promise.all([t.e(736),t.e(64)]).then(t.bind(t,674)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:f}]},{path:"/Branch_Dashboar",component:()=>Promise.all([t.e(736),t.e(990)]).then(t.bind(t,1472)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:b,children:[{path:"/Branch_dashboard",component:()=>Promise.all([t.e(736),t.e(111)]).then(t.bind(t,4111)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:b},{path:"/Branch_inventory",component:()=>Promise.all([t.e(736),t.e(546)]).then(t.bind(t,3546)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:b},{path:"/Branch_restock",component:()=>Promise.all([t.e(736),t.e(64),t.e(739)]).then(t.bind(t,1544)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:b},{path:"/Branch_userManagement",component:()=>Promise.all([t.e(736),t.e(218)]).then(t.bind(t,6218)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:b},{path:"/Branch_mapping",component:()=>Promise.all([t.e(736),t.e(237)]).then(t.bind(t,5237))},{path:"/Branch_settings",component:()=>Promise.all([t.e(736),t.e(64),t.e(819)]).then(t.bind(t,8477)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:b},{path:"/Branch_branch",component:()=>Promise.all([t.e(736),t.e(168)]).then(t.bind(t,8168)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:b},{path:"/Branch_message",component:()=>Promise.all([t.e(736),t.e(64),t.e(553)]).then(t.bind(t,1553))},{path:"/Branch_notifications",component:()=>Promise.all([t.e(736),t.e(367)]).then(t.bind(t,8367)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:b},{path:"/Branch_scanner",component:()=>Promise.all([t.e(736),t.e(385)]).then(t.bind(t,8385)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:b},{path:"/Branch_sales",component:()=>Promise.all([t.e(736),t.e(136)]).then(t.bind(t,4136)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:b},{path:"/Branch_convo",component:()=>Promise.all([t.e(736),t.e(519)]).then(t.bind(t,1519)),meta:{requiresAuth:!0,requiresAdmin:!0},beforeEnter:b},{path:"/userProfile/:token",component:()=>Promise.all([t.e(736),t.e(460)]).then(t.bind(t,8460))}]},{path:"/POS",component:()=>Promise.all([t.e(736),t.e(84)]).then(t.bind(t,7084)),meta:{requiresAuth:!0,requiresCashier:!0},beforeEnter:g,children:[{path:"/POS",component:()=>t.e(188).then(t.bind(t,8188))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(265)]).then(t.bind(t,4265))}],A=v,P=(0,m.BC)((function(){const e=p.r5,r=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:A,history:e("")});return r}));async function q(e,r){const n=e(d);n.use(o.Z,r);const i="function"===typeof h.Z?await(0,h.Z)({}):h.Z,{storeKey:s}=await Promise.resolve().then(t.bind(t,1502)),l=(0,a.Xl)("function"===typeof P?await P({store:i}):P);return i.$router=l,{app:n,store:i,storeKey:s,router:l}}var y=t(6827),E=t(2941),w=t(7286),_=t(3563);const k={config:{dark:!1},plugins:{Notify:y.Z,AppFullscreen:E.Z,Dialog:w.Z,AddressbarColor:_.Z}},B="";async function C({app:e,router:r,store:t,storeKey:n},o){let a=!1;const i=e=>{try{return r.resolve(e).href}catch(t){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const r=i(e);null!==r&&(window.location.href=r,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<o.length;c++)try{await o[c]({app:e,router:r,store:t,ssrContext:null,redirect:s,urlPath:l,publicPath:B})}catch(u){return u&&u.url?void s(u.url):void console.error("[Quasar] boot error:",u)}!0!==a&&(e.use(r),e.use(t,n),e.mount("#q-app"))}q(n.ri,k).then((e=>{const[r,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[r]([Promise.resolve().then(t.bind(t,1569)),Promise.resolve().then(t.bind(t,9285)),Promise.resolve().then(t.bind(t,9))]).then((r=>{const t=n(r).filter((e=>"function"===typeof e));C(e,t)}))}))},9:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var n=t(3563);const o=()=>{n.Z.set("teal")}},9285:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i});var n=t(7092),o=t.n(n),a=t(3340);const i=(0,a.xr)((({app:e})=>{e.use(o())}))},1569:(e,r,t)=>{t.r(r),t.d(r,{api:()=>a,default:()=>i});var n=t(3340),o=t(7524);const a=o.Z.create({baseURL:"https://backendpharmaplus.tech/"}),i=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=o.Z,e.config.globalProperties.$api=a}))},1502:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(3340),o=t(3100),a=t(1569);const i=(0,n.h)((function(){const e=(0,o.MT)({state:{userProfile:null},mutations:{setUserProfile(e,r){e.userProfile=r}},actions:{async fetchUserProfile({commit:e},r){try{const t=await a.api.get(`/profile/${r}`),n=t.data.user;e("setUserProfile",n)}catch(t){console.error("Error fetching user profile:",t)}}},modules:{},strict:!1});return e}))}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return e[n].call(a.exports,a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,n,o,a)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=o();void 0!==u&&(r=u)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{7:"ffeee963",52:"600cae10",64:"8177b842",67:"e1eb030e",84:"e7378334",111:"3ab6bdfd",129:"b5d69845",136:"adbf54c2",168:"ec6c5664",188:"033cee26",205:"f75876bc",218:"412a0342",237:"f1cd97eb",243:"b294da06",265:"b09c3748",341:"38c23eef",367:"06eb620c",385:"de9d1a0f",460:"e42b8d7e",519:"4da9f7e5",522:"0224cbdb",546:"a2fd088d",553:"c4f136e3",604:"51a96588",709:"e30119e3",724:"b9073448",739:"cbd0f83c",815:"a7e1615f",819:"782372a3",979:"e3867999",987:"3c515d71",990:"e82b34e9",992:"bac73bf1"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+e+"."+{67:"505621e4",111:"f6060a8b",129:"31d6cfe0",136:"31d6cfe0",205:"31d6cfe0",218:"0e1beb4e",237:"9dd4615f",243:"2c499444",265:"38736491",460:"fdcdecfd",522:"4d76728b",546:"d456a97d",553:"2c499444",604:"d456a97d",709:"ba5ae022",724:"fdcdecfd",739:"d456a97d",815:"d456a97d",819:"fdcdecfd",979:"3dbaac53",987:"505621e4",990:"a4efd3db"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="pharmaplus:";t.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==r+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+a),s.src=n),e[n]=[o];var h=(r,t)=>{s.onerror=s.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(t))),r)return r(t)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,r,t,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=t=>{if(a.onerror=a.onload=null,"load"===t.type)n();else{var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=i,a.href=r,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},r=(e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=t[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===r))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===r)return o}},n=n=>new Promise(((o,a)=>{var i=t.miniCssF(n),s=t.p+i;if(r(i,s))return o();e(n,s,null,o,a)})),o={143:0};t.f.miniCss=(e,r)=>{var t={67:1,111:1,129:1,136:1,205:1,218:1,237:1,243:1,265:1,460:1,522:1,546:1,553:1,604:1,709:1,724:1,739:1,815:1,819:1,979:1,987:1,990:1};o[e]?r.push(o[e]):0!==o[e]&&t[e]&&r.push(o[e]=n(e).then((()=>{o[e]=0}),(r=>{throw delete o[e],r})))}}})(),(()=>{var e={143:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((t,n)=>o=e[r]=[t,n]));n.push(o[2]=a);var i=t.p+t.u(r),s=new Error,l=n=>{if(t.o(e,r)&&(o=e[r],0!==o&&(e[r]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};t.l(i,l,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[i,s,l]=n,u=0;if(i.some((r=>0!==e[r]))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(l)var c=l(t)}for(r&&r(n);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},n=globalThis["webpackChunkpharmaplus"]=globalThis["webpackChunkpharmaplus"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=t.O(void 0,[736],(()=>t(5628)));n=t.O(n)})();