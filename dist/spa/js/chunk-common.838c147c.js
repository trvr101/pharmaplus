"use strict";(globalThis["webpackChunkpharmaplus"]=globalThis["webpackChunkpharmaplus"]||[]).push([[64],{8889:(e,t,a)=>{a.d(t,{Z:()=>M});var n=a(9835),o=a(6970);const l={class:"fit column justify-center items-center content-center"},i=(0,n._)("div",{class:"text-caption text-grey-6"},"name",-1),s={class:"row q-ma-md"},r={class:"decked-text"},c={class:"text"},d=(0,n._)("div",{class:"text-h6 q-ma-lg text-grey-8"},"Details",-1),u={class:"q-my-lg"},m={class:"q-my-lg"},p={class:"q-my-lg"},_={class:"q-my-lg"},g={class:"q-my-lg"},f={class:"q-my-lg"},y={class:"q-my-lg"},v={class:"text-center"},h=(0,n._)("div",{class:"text-center h6"},"Edit Profile",-1),w={class:"row q-ma-lg"},b={class:"q-px-lg q-pb-lg"},q={class:"row q-mt-lg"};function x(e,t,a,x,A,C){const W=(0,n.up)("q-avatar"),T=(0,n.up)("q-chip"),k=(0,n.up)("q-icon"),P=(0,n.up)("q-card"),Z=(0,n.up)("q-separator"),I=(0,n.up)("q-btn"),U=(0,n.up)("q-input"),V=(0,n.up)("q-form"),H=(0,n.up)("q-dialog");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(P,{flat:"",bordered:!e.$q.dark.isActive,class:"my-card q-my-lg"},{default:(0,n.w5)((()=>[(0,n._)("div",l,[(0,n.Wm)(W,{size:"170px",color:"cyan-9","text-color":"white",class:"q-ma-lg"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(C.getInitials(A.userProfile.first_name,A.userProfile.last_name)),1)])),_:1}),(0,n._)("div",{style:{"font-size":"large","font-weight":"500"},class:(0,o.C_)(["q-mt-md",{"text-grey-3 q-pb-sm":e.$q.dark.isActive,"text-primary":!e.$q.dark.isActive}])},(0,o.zw)(A.userProfile.first_name)+" "+(0,o.zw)(A.userProfile.last_name),3),i,(0,n.Wm)(T,{outline:!e.$q.dark.isActive,class:(0,o.C_)(["q-ma-md",{"bg-secondary text-grey-3":e.$q.dark.isActive,"text-cyan-9":!e.$q.dark.isActive}])},{default:(0,n.w5)((()=>[(0,n.Uk)(" Admin ")])),_:1},8,["outline","class"]),(0,n._)("div",s,[(0,n.Wm)(P,{flat:"",style:{"border-radius":"20px",width:"200px"},class:(0,o.C_)(["q-pr-md",{"bg-secondary text-grey-3":e.$q.dark.isActive," bg-teal-2":!e.$q.dark.isActive}])},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n._)("div",r,[(0,n.Wm)(k,{name:"done",class:"bg-cyan-9 text-white",size:"lg",style:{"border-radius":"20px",height:"50px",width:"50px"}}),(0,n._)("div",c,[(0,n._)("div",{class:(0,o.C_)(["text-body1",{"text-grey-3":e.$q.dark.isActive," text-grey-9":!e.$q.dark.isActive}])}," 300 ",2),(0,n._)("div",{class:(0,o.C_)(["text-caption",{"text-grey-5":e.$q.dark.isActive," text-grey-9":!e.$q.dark.isActive}])}," Transaction Done: ",2)])])])])),_:1},8,["class"])])]),(0,n.Wm)(Z,{inset:"",class:"q-my-md"}),d,(0,n._)("div",{class:(0,o.C_)(["q-ma-lg text-body1",{"text-grey-3 q-pb-sm":e.$q.dark.isActive,"text-grey-9 ":!e.$q.dark.isActive}])},[(0,n._)("div",u,"Email: "+(0,o.zw)(A.userProfile.email),1),(0,n._)("div",m,"Status: "+(0,o.zw)(A.userProfile.status),1),(0,n._)("div",p,"Role: "+(0,o.zw)(A.userProfile.user_role),1),(0,n._)("div",_,"Branch: "+(0,o.zw)(A.userProfile.branch_id),1),(0,n._)("div",g,"Contact: "+(0,o.zw)(A.userProfile.phone),1),(0,n._)("div",f,"Language: "+(0,o.zw)(A.userProfile.user_lang),1),(0,n._)("div",y,"Country: "+(0,o.zw)(A.userProfile.user_country),1),(0,n._)("div",v,[(0,n.Wm)(I,{label:"edit",flat:"",onClick:x.openDrawer,rounded:"",icon:"edit",class:(0,o.C_)({"text-teal-3 bg-secondary ":e.$q.dark.isActive,"bg-teal text-grey-3":!e.$q.dark.isActive})},null,8,["onClick","class"])])],2)])),_:1},8,["bordered"]),(0,n.Wm)(H,{modelValue:x.dialog,"onUpdate:modelValue":t[0]||(t[0]=e=>x.dialog=e),position:x.position},{default:(0,n.w5)((()=>[(0,n.Wm)(P,{style:{width:"100vw",height:"60dvh","border-radius":"40px"},maximized:"",class:"q-pa-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(V,{class:"fullwidth"},{default:(0,n.w5)((()=>[h,(0,n._)("div",w,[(0,n.Wm)(U,{class:"col",filled:"",value:x.editedUserProfile.first_name,onInput:x.updateFirstName,label:"First Name","label-color":"teal",dense:e.dense},null,8,["value","onInput","dense"]),(0,n.Wm)(U,{class:"col q-ml-lg",filled:"",value:x.editedUserProfile.last_name,onInput:x.updateLastName,label:"Last Name","label-color":"teal",dense:e.dense},null,8,["value","onInput","dense"])]),(0,n._)("div",b,[(0,n.Wm)(U,{class:"full-width",filled:"",value:x.editedUserProfile.email,onInput:e.updateEmail,label:"Email","label-color":"teal",dense:e.dense},null,8,["value","onInput","dense"]),(0,n.Wm)(U,{class:"full-width q-mt-lg",filled:"",value:x.editedUserProfile.phone,onInput:e.updatePhone,label:"Contact","label-color":"teal",dense:e.dense},null,8,["value","onInput","dense"]),(0,n._)("div",q,[(0,n.Wm)(U,{class:"col",filled:"",value:x.editedUserProfile.user_lang,onInput:e.updateUserLang,label:"Language","label-color":"teal",dense:e.dense},null,8,["value","onInput","dense"]),(0,n.Wm)(U,{class:"col q-ml-lg",filled:"",value:x.editedUserProfile.user_country,onInput:e.updateUserCountry,label:"Country","label-color":"teal",dense:e.dense},null,8,["value","onInput","dense"])]),(0,n.Wm)(I,{class:"full-width q-my-lg bg-teal text-grey-3",label:"Save",icon:"send",flat:"",rounded:"",onClick:x.saveChanges},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue","position"])],64)}var A=a(499),C=a(1569);const W={setup(){const e=(0,A.iH)(!1),t=(0,A.iH)("bottom"),a=(0,A.iH)({first_name:"",last_name:""}),n=e=>{a.value.first_name=e},o=e=>{a.value.last_name=e},l=a=>{t.value=a,e.value=!0},i=()=>{l("bottom")},s=()=>{e.value=!1},r=async()=>{try{const e=sessionStorage.getItem("token");await C.api.put(`/profile/${e}`,a.value),this.fetchUserProfile(),s()}catch(error){console.error("Error updating user profile:",error)}};return{dialog:e,position:t,editedUserProfile:a,openDrawer:i,saveChanges:r,updateFirstName:n,updateLastName:o}},data(){return{userProfile:{}}},created(){this.fetchUserProfile(),this.pollingInterval=setInterval((()=>{this.fetchUserProfile()}),1e3)},beforeDestroy(){clearInterval(this.pollingInterval)},methods:{async fetchUserProfile(){try{const e=sessionStorage.getItem("token"),t=await C.api.get(`/profile/${e}`);this.userProfile=t.data.user,this.editedUserProfile={...this.userProfile}}catch(error){console.error("Error fetching user profile:",error)}},getInitials(e,t){const a=e?e.charAt(0):"",n=t?t.charAt(0):"";return`${a}${n}`.toUpperCase()}}};var T=a(1639),k=a(4458),P=a(1357),Z=a(7691),I=a(2857),U=a(926),V=a(8879),H=a(2074),L=a(8326),z=a(6611),D=a(9984),E=a.n(D);const B=(0,T.Z)(W,[["render",x]]),M=B;E()(W,"components",{QCard:k.Z,QAvatar:P.Z,QChip:Z.Z,QIcon:I.Z,QSeparator:U.Z,QBtn:V.Z,QDialog:H.Z,QForm:L.Z,QInput:z.Z})},4870:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(9835);const o=(0,n._)("div",{id:"map",style:{height:"100%"}},null,-1);function l(e,t,a,l,i,s){const r=(0,n.up)("q-card");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(r,{style:{height:"400px",overflow:"hidden"},class:"my-card"},{default:(0,n.w5)((()=>[o])),_:1})])}a(2167);var i=a(3740),s=a(520),r=a(3769),c=a(6738);const d={mounted(){new i.Z({target:"map",layers:[new r.Z({source:new c.Z})],view:new s.ZP({center:[121.182,13.4105],zoom:13})})}};var u=a(1639),m=a(4458),p=a(9984),_=a.n(p);const g=(0,u.Z)(d,[["render",l]]),f=g;_()(d,"components",{QCard:m.Z})},285:(e,t,a)=>{function n(e,t){return null}a.d(t,{Z:()=>s});var o=a(1639);const l={},i=(0,o.Z)(l,[["render",n]]),s=i},4836:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(9835);function o(e,t){return(0,n.wg)(),(0,n.iD)("div")}var l=a(1639);const i={},s=(0,l.Z)(i,[["render",o]]),r=s},7650:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(9835);const o={class:"q-pa-lg"},l={class:"row justify-center q-mt-md"},i={class:"q-pa-lg"},s=(0,n._)("div",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),r=(0,n._)("div",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),c={class:"q-pa-lg"},d={class:"row justify-center q-mt-md"};function u(e,t,a,u,m,p){const _=(0,n.up)("q-icon"),g=(0,n.up)("q-table"),f=(0,n.up)("q-pagination"),y=(0,n.up)("q-linear-progress"),v=(0,n.up)("q-card"),h=(0,n.up)("q-timeline-entry"),w=(0,n.up)("q-timeline");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(v,{flat:"",bordered:!e.$q.dark.isActive,class:"my-card q-mb-lg",style:{overflow:"hidden"}},{default:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n.Wm)(_,{name:"work_history",size:"md",color:"primary"}),(0,n.Wm)(g,{flat:"",title:"Recent Activity List",rows:u.rows,columns:u.columns,"row-key":"name",pagination:u.pagination,"onUpdate:pagination":t[0]||(t[0]=e=>u.pagination=e),"hide-pagination":""},null,8,["rows","columns","pagination"]),(0,n._)("div",l,[(0,n.Wm)(f,{modelValue:u.pagination.page,"onUpdate:modelValue":t[1]||(t[1]=e=>u.pagination.page=e),color:"primary",max:u.pagesNumber,size:"sm"},null,8,["modelValue","max"])])]),(0,n.Wm)(y,{value:1,color:"teal-3",max:100})])),_:1},8,["bordered"]),(0,n.Wm)(v,{flat:"",bordered:!e.$q.dark.isActive,class:"my-card q-my-lg",style:{overflow:"hidden"}},{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n.Wm)(w,{color:"teal"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{heading:"",class:"text-primary"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Schedule ")])),_:1}),(0,n.Wm)(h,{title:"Event",subtitle:"February 22, 1986"},{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(h,{title:"Event",subtitle:"February 21, 1986",icon:"delete"},{default:(0,n.w5)((()=>[r])),_:1})])),_:1})]),(0,n.Wm)(y,{value:1,color:"teal-3",max:100})])),_:1},8,["bordered"]),(0,n.Wm)(v,{flat:"",bordered:!e.$q.dark.isActive,class:"my-card q-mb-lg",style:{overflow:"hidden"}},{default:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n.Wm)(_,{name:"work_history",size:"md",color:"primary"}),(0,n.Wm)(g,{flat:"",title:"Recent Transactions",rows:u.rows,columns:u.columns,"row-key":"name",pagination:u.pagination,"onUpdate:pagination":t[2]||(t[2]=e=>u.pagination=e),"hide-pagination":""},null,8,["rows","columns","pagination"]),(0,n._)("div",d,[(0,n.Wm)(f,{modelValue:u.pagination.page,"onUpdate:modelValue":t[3]||(t[3]=e=>u.pagination.page=e),color:"primary",max:u.pagesNumber,size:"sm"},null,8,["modelValue","max"])])]),(0,n.Wm)(y,{value:1,color:"teal-3",max:100})])),_:1},8,["bordered"])],64)}var m=a(499);const p=[{name:"desc",required:!0,label:"Dessert (100g serving)",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0},{name:"carbs",label:"Carbs (g)",field:"carbs"},{name:"protein",label:"Protein (g)",field:"protein"}],_=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7}],g={setup(){const e=(0,m.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:5});return{pagination:e,columns:p,rows:_,pagesNumber:(0,n.Fl)((()=>Math.ceil(_.length/e.value.rowsPerPage)))}}};var f=a(1639),y=a(4458),v=a(2857),h=a(5950),w=a(996),b=a(8289),q=a(6292),x=a(8767),A=a(9984),C=a.n(A);const W=(0,f.Z)(g,[["render",u]]),T=W;C()(g,"components",{QCard:y.Z,QIcon:v.Z,QTable:h.Z,QPagination:w.Z,QLinearProgress:b.Z,QTimeline:q.Z,QTimelineEntry:x.Z})},9062:(e,t,a)=>{a.d(t,{Z:()=>P});var n=a(9835),o=a(6970);const l={class:"q-pa-lg"},i=(0,n._)("h5",{class:"q-ma-lg"},"Change Password",-1),s={class:"q-ma-lg"},r=(0,n._)("strong",null,"Ensure that these requirements are met",-1),c=(0,n._)("br",null,null,-1),d={class:"row q-ma-lg"},u=(0,n._)("div",{class:"text-center text-h6 q-ma-md"}," Admin Identity Verification ",-1),m={class:"q-ma-md"},p=(0,n._)("p",{class:""}," To ensure the security of admin operations, please verify your identity before changing the password. This step is crucial in preventing unauthorized access and maintaining the integrity of the admin account. ",-1),_={class:"text-right"};function g(e,t,a,g,f,y){const v=(0,n.up)("q-card"),h=(0,n.up)("q-input"),w=(0,n.up)("q-btn"),b=(0,n.up)("q-icon"),q=(0,n.up)("q-dialog"),x=(0,n.up)("q-form"),A=(0,n.up)("q-linear-progress");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(v,{flat:"",bordered:!e.$q.dark.isActive,class:"my-card full-width",style:{overflow:"hidden"}},{default:(0,n.w5)((()=>[(0,n._)("div",l,[i,(0,n._)("div",s,[(0,n.Wm)(v,{flat:"",class:"my-card full-width q-pa-lg bg-teal-2",style:{overflow:"hidden"}},{default:(0,n.w5)((()=>[r,c,(0,n.Uk)(" Minimum 8 characters long, uppercase & symbol ")])),_:1})]),(0,n.Wm)(x,null,{default:(0,n.w5)((()=>[(0,n._)("div",d,[(0,n.Wm)(h,{class:"col",filled:"",modelValue:e.NewPassword,"onUpdate:modelValue":t[0]||(t[0]=t=>e.NewPassword=t),label:"New Password","label-color":"teal",dense:e.dense,type:"password"},null,8,["modelValue","dense"]),(0,n.Wm)(h,{class:"col q-ml-lg",filled:"",modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=t=>e.text=t),label:"Confirm Password","label-color":"teal",dense:e.dense,type:"password"},null,8,["modelValue","dense"])]),(0,n.Wm)(w,{unelevated:"",rounded:"",label:"Change Password",class:(0,o.C_)(["q-ma-lg q-px-lg float-right",{"text-teal-3 bg-secondary ":e.$q.dark.isActive,"bg-teal text-grey-3":!e.$q.dark.isActive}]),onClick:t[2]||(t[2]=e=>g.open("bottom"))},null,8,["class"]),(0,n.Wm)(q,{modelValue:g.confirm,"onUpdate:modelValue":t[5]||(t[5]=e=>g.confirm=e),position:g.position},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{style:{width:"100vw",height:"45dvh","border-radius":"40px 40px 0 0"},maximized:"",class:"q-pa-md"},{default:(0,n.w5)((()=>[u,(0,n._)("div",m,[(0,n.Wm)(v,{flat:"",class:"my-card full-width q-pa-lg bg-teal-2 q-ma-lg"},{default:(0,n.w5)((()=>[p])),_:1})]),(0,n.Wm)(h,{modelValue:e.text,"onUpdate:modelValue":t[4]||(t[4]=t=>e.text=t),type:"password",label:"Current Password",color:"teal",outlined:"",class:"q-ma-md"},{append:(0,n.w5)((()=>[(0,n.Wm)(b,{name:"close",onClick:t[3]||(t[3]=t=>e.text=""),class:"cursor-pointer"})])),_:1},8,["modelValue"]),(0,n._)("div",_,[(0,n.Wm)(w,{rounded:"",outline:"",class:"text-teal q-mb-md"},{default:(0,n.w5)((()=>[(0,n.Uk)("Back")])),_:1}),(0,n.Wm)(w,{rounded:"",flat:"",class:"bg-teal text-grey-3 q-mx-md q-mb-md"},{default:(0,n.w5)((()=>[(0,n.Uk)("Confirm "),(0,n.Wm)(b,{name:"check",size:"xs"})])),_:1})])])),_:1})])),_:1},8,["modelValue","position"])])),_:1})]),(0,n.Wm)(A,{value:1,color:"teal-3",max:100})])),_:1},8,["bordered"])])}var f=a(499);const y={setup(){const e=(0,f.iH)("bottom"),t=(0,f.iH)(!1),a=()=>{t.value=!0},n=()=>{t.value=!1};return{confirm:t,position:e,open:a,close:n}}};var v=a(1639),h=a(4458),w=a(8326),b=a(6611),q=a(8879),x=a(2074),A=a(2857),C=a(8289),W=a(9984),T=a.n(W);const k=(0,v.Z)(y,[["render",g]]),P=k;T()(y,"components",{QCard:h.Z,QForm:w.Z,QInput:b.Z,QBtn:q.Z,QDialog:x.Z,QIcon:A.Z,QLinearProgress:C.Z})},674:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(9835);const o={class:"q-pa-md row justify-center"},l={style:{width:"100%"}};function i(e,t,a,i,s,r){const c=(0,n.up)("q-chat-message"),d=(0,n.up)("q-spinner-dots");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",l,[(0,n.Wm)(c,{name:"me",avatar:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED",text:["hey, how are you?"],size:"7",stamp:"7 minutes ago",sent:"","bg-color":"teal-2"}),(0,n.Wm)(c,{name:"Vhon",avatar:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED",text:["doing fine, how r you?","I just feel like typing a really, really, REALLY long message to annoy you..."],size:"7",stamp:"4 minutes ago","text-color":"white","bg-color":"primary"},null,8,["text"]),(0,n.Wm)(c,{name:"Vhon",avatar:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED",text:["Did it work?"],stamp:"1 minutes ago",size:"7","text-color":"white","bg-color":"primary"}),(0,n.Wm)(c,{name:"me",avatar:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED",text:["hey, how are you?"],size:"7",stamp:"7 minutes ago",sent:"","bg-color":"teal-2"}),(0,n.Wm)(c,{name:"Vhon",avatar:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED",text:["doing fine, how r you?","I just feel like typing a really, really, REALLY long message to annoy you..."],size:"7",stamp:"4 minutes ago","text-color":"white","bg-color":"primary"},null,8,["text"]),(0,n.Wm)(c,{name:"Vhon",avatar:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED",text:["doing fine, how r you?","I just feel like typing a really, really, REALLY long message to annoy you..."],size:"7",stamp:"4 minutes ago","text-color":"white","bg-color":"primary"},null,8,["text"]),(0,n.Wm)(c,{name:"Vhon",avatar:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED",text:["doing fine, how r you?","I just feel like typing a really, really, REALLY long message to annoy you..."],size:"7",stamp:"4 minutes ago","text-color":"white","bg-color":"primary"},null,8,["text"]),(0,n.Wm)(c,{name:"Vhon",avatar:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED",text:["doing fine, how r you?","I just feel like typing a really, really, REALLY long message to annoy you..."],size:"7",stamp:"4 minutes ago","text-color":"white","bg-color":"primary"},null,8,["text"]),(0,n.Wm)(c,{name:"Vhon",avatar:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED",text:["doing fine, how r you?","I just feel like typing a really, really, REALLY long message to annoy you..."],size:"7",stamp:"4 minutes ago","text-color":"white","bg-color":"primary"},null,8,["text"]),(0,n.Wm)(c,{name:"Vhon",avatar:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED",text:["doing fine, how r you?","I just feel like typing a really, really, REALLY long message to annoy you..."],size:"7",stamp:"4 minutes ago","text-color":"white","bg-color":"primary"},null,8,["text"]),(0,n.Wm)(c,{name:"Vhon",avatar:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED",text:["Did it work?"],stamp:"1 minutes ago",size:"7","text-color":"white","bg-color":"primary"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{size:"2rem"})])),_:1})])])}const s={};var r=a(1639),c=a(396),d=a(7501),u=a(9984),m=a.n(u);const p=(0,r.Z)(s,[["render",i]]),_=p;m()(s,"components",{QChatMessage:c.Z,QSpinnerDots:d.Z})},8652:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(9835),o=a(6970);function l(e,t,a,l,i,s){const r=(0,n.up)("q-btn"),c=(0,n.up)("q-icon"),d=(0,n.up)("q-chip"),u=(0,n.up)("q-td"),m=(0,n.up)("q-table"),p=(0,n.up)("q-card");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(p,{flat:"",bordered:!e.$q.dark.isActive,class:"my-card"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{onClick:t[0]||(t[0]=t=>e.$router.go(-1)),class:"float-top-left q-ma-lg",unelevated:"",rounded:"",outline:"",color:"teal",icon:"arrow_back"}),(0,n.Wm)(m,{rows:i.productHistory,columns:i.columns,"row-key":"audit_id",title:i.product_name+" History",class:"q-pa-md q-mb-lg q-mx-lg","rows-per-page-options":[10]},{"body-cell-type":(0,n.w5)((e=>[(0,n.Wm)(u,{props:e},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{color:s.getTypeColor(e.row.type),"text-color":"white",outline:"",class:"q-unselectable"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.row.type)+" ",1),"outbound"===e.row.type?((0,n.wg)(),(0,n.j4)(c,{key:0,name:"trending_up"})):"inbound"===e.row.type?((0,n.wg)(),(0,n.j4)(c,{key:1,name:"autorenew"})):(0,n.kq)("",!0)])),_:2},1032,["color"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","title"])])),_:1},8,["bordered"])])}var i=a(1569),s=a(6827);const r={data(){return{productHistory:[],columns:[{name:"index",label:"#",align:"center",field:"index"},{name:"old_quantity",label:"Old Quantity",align:"center",field:"old_quantity"},{name:"quantity",label:"Quantity",align:"center",field:"quantity"},{name:"total",label:"Total",align:"center",field:"total"},{name:"type",label:"Type",align:"center",field:"type"},{name:"created_at",label:"Created At",align:"center",field:"created_at"}],product_name:""}},methods:{async fetchProductHistory(){const e=this.$route.params.token,t=this.$route.params.product_id,a=await i.api.get(`/ProductAudit/${e}/${t}`);this.productHistory=a.data.map(((e,t)=>({...e,index:t+1}))),this.productHistory.length>0&&(this.product_name=this.productHistory[0].product_name),console.error("Error fetching product history:",error),s.Z.create({type:"negative",message:"Error fetching product history"})},getTypeColor(e){switch(e){case"outbound":return"teal";case"inbound":return"cyan-9";default:return"default"}},startPolling(){this.fetchProductHistory(),this.pollingTimer=setInterval((()=>{this.fetchProductHistory()}),1e3)},stopPolling(){clearInterval(this.pollingTimer)}},mounted(){this.startPolling()},beforeDestroy(){this.stopPolling()}};var c=a(1639),d=a(4458),u=a(8879),m=a(5950),p=a(7220),_=a(7691),g=a(2857),f=a(9984),y=a.n(f);const v=(0,c.Z)(r,[["render",l]]),h=v;y()(r,"components",{QCard:d.Z,QBtn:u.Z,QTable:m.Z,QTd:p.Z,QChip:_.Z,QIcon:g.Z})}}]);