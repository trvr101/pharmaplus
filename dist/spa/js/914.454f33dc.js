"use strict";(globalThis["webpackChunkpharmaplus"]=globalThis["webpackChunkpharmaplus"]||[]).push([[914],{3914:(e,t,a)=>{a.r(t),a.d(t,{default:()=>we});var o=a(9835),s=a(6970);const l={class:"container"},r={class:"row"},n={class:"row justify-center"},i={class:"row justify-center"};function c(e,t,a,c,d,u){const m=(0,o.up)("card1"),p=(0,o.up)("card2"),h=(0,o.up)("card3"),g=(0,o.up)("mainchart"),f=(0,o.up)("table1"),v=(0,o.up)("notes"),_=(0,o.up)("calendar");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",r,[(0,o._)("div",{class:(0,s.C_)({"col-9":e.$q.screen.gt.sm,"col-12 no-margin no-padding":e.$q.screen.lt.sm})},[(0,o._)("div",n,[(0,o._)("div",{class:(0,s.C_)({"col-4":e.$q.screen.gt.sm,"col-12  no-margin no-padding ":e.$q.screen.lt.sm})},[(0,o.Wm)(m)],2),(0,o._)("div",{class:(0,s.C_)({"col-4":e.$q.screen.gt.sm,"col-12  no-margin no-padding":e.$q.screen.lt.sm})},[(0,o.Wm)(p)],2),(0,o._)("div",{class:(0,s.C_)({"col-4":e.$q.screen.gt.sm,"col-12  no-margin no-padding":e.$q.screen.lt.sm})},[(0,o.Wm)(h)],2)]),(0,o._)("div",i,[(0,o._)("div",{class:(0,s.C_)({"col-8":e.$q.screen.gt.sm,"col-12 no-margin no-padding":e.$q.screen.lt.sm})},[(0,o.Wm)(g),(0,o.Wm)(f)],2),(0,o._)("div",{class:(0,s.C_)({"col-4":e.$q.screen.gt.sm,"col-12 no-margin no-padding":e.$q.screen.lt.sm})},[(0,o.Wm)(v)],2)])],2),(0,o._)("div",{class:(0,s.C_)({"col-3":e.$q.screen.gt.sm,"col-12 no-margin no-padding":e.$q.screen.lt.sm})},[(0,o.Wm)(_)],2)])])}var d=a(499);const u=(0,o._)("div",{class:"text-h6"},"Total Unique Items",-1),m={class:"q-display-2"};function p(e,t,a,l,r,n){const i=(0,o.up)("q-card-section"),c=(0,o.up)("q-linear-progress"),d=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(d,{flat:"",bordered:!e.$q.dark.isActive,class:(0,s.C_)(["my-card text-primary",{"text-grey-3 bg-primary ":e.$q.dark.isActive}]),style:{overflow:"hidden"}},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[u,(0,o._)("div",m,(0,s.zw)(r.totalItems),1)])),_:1}),(0,o.Wm)(c,{value:1,color:"teal-3",max:100})])),_:1},8,["bordered","class"])}var h=a(1569);const g={data(){return{totalItems:0,pollingInterval:null}},created(){this.fetchUserProfile()},computed:{getBranchId(){return this.userProfileFetched?this.$store.state.userProfile?.branch_id:null}},methods:{fetchUserProfile(){const e=sessionStorage.getItem("token");e?this.$store.dispatch("fetchUserProfile",e).then((()=>{this.userProfileFetched=!0,this.countUniqueItems(),this.pollingInterval=setInterval((()=>{this.countUniqueItems()}),1e3)})).catch((e=>{console.error("Error fetching user profile:",e)})):console.error("Token not available. Unable to fetch user profile.")},countUniqueItems(){const e=this.getBranchId;e?h.api.get(`branch/count-unique-items/${e}`).then((e=>{this.totalItems=e.data.count})).catch((e=>{console.error("Error fetching count:",e)})):console.error("Branch ID not available.")}},beforeDestroy(){this.pollingInterval&&clearInterval(this.pollingInterval)}};var f=a(1639),v=a(4458),_=a(3190),b=a(8289),w=a(9984),y=a.n(w);const q=(0,f.Z)(g,[["render",p]]),k=q;y()(g,"components",{QCard:v.Z,QCardSection:_.Z,QLinearProgress:b.Z});const C=(0,o._)("div",{class:"text-h6"},"Total Active User",-1),x={class:"q-display-2"};function $(e,t,a,l,r,n){const i=(0,o.up)("q-card-section"),c=(0,o.up)("q-linear-progress"),d=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(d,{flat:"",bordered:!e.$q.dark.isActive,class:(0,s.C_)(["my-card text-primary",{"text-grey-3 bg-primary ":e.$q.dark.isActive}]),style:{overflow:"hidden"}},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[C,(0,o._)("div",x,(0,s.zw)(r.totalItems),1)])),_:1}),(0,o.Wm)(c,{value:1,color:"teal-3",max:100})])),_:1},8,["bordered","class"])}const Z={data(){return{totalItems:0}},created(){this.startPolling()},methods:{fetchData(){h.api.get("/main/count-unique-items").then((e=>{this.totalItems=e.data.count})).catch((e=>{console.error("Error fetching data:",e)}))},startPolling(){this.fetchData(),this.pollingTimer=setInterval((()=>{this.fetchData()}),1e3)},stopPolling(){clearInterval(this.pollingTimer)}},beforeDestroy(){this.stopPolling()}},W=(0,f.Z)(Z,[["render",$]]),I=W;y()(Z,"components",{QCard:v.Z,QCardSection:_.Z,QLinearProgress:b.Z});const A=(0,o._)("div",{class:"text-h6"},"Total Partner Branch",-1),Q={class:"q-display-2"};function D(e,t,a,l,r,n){const i=(0,o.up)("q-card-section"),c=(0,o.up)("q-linear-progress"),d=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(d,{flat:"",bordered:!e.$q.dark.isActive,class:(0,s.C_)(["my-card text-primary",{"text-grey-3 bg-primary ":e.$q.dark.isActive}]),style:{overflow:"hidden"}},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[A,(0,o._)("div",Q,(0,s.zw)(r.totalItems),1)])),_:1}),(0,o.Wm)(c,{value:1,color:"teal-3",max:100})])),_:1},8,["bordered","class"])}const U={data(){return{totalItems:0}},created(){this.startPolling()},methods:{fetchData(){h.api.get("/main/count-unique-items").then((e=>{this.totalItems=e.data.count})).catch((e=>{console.error("Error fetching data:",e)}))},startPolling(){this.fetchData(),this.pollingTimer=setInterval((()=>{this.fetchData()}),1e3)},stopPolling(){clearInterval(this.pollingTimer)}},beforeDestroy(){this.stopPolling()}},T=(0,f.Z)(U,[["render",D]]),V=T;y()(U,"components",{QCard:v.Z,QCardSection:_.Z,QLinearProgress:b.Z});const N={class:"text-body1"};function S(e,t,a,l,r,n){const i=(0,o.up)("q-timeline-entry"),c=(0,o.up)("q-timeline"),d=(0,o.up)("q-date");return(0,o.wg)(),(0,o.j4)(d,{modelValue:l.days,"onUpdate:modelValue":t[0]||(t[0]=e=>l.days=e),minimal:"",flat:"",bordered:!e.$q.dark.isActive,events:l.events,"today-btn":"",class:(0,s.C_)(["q-pa-none",{"text-grey-3 bg-primary":e.$q.dark.isActive}]),color:"teal"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{color:"teal-4",class:(0,s.C_)({"text-grey-3 bg-primary ":e.$q.dark.isActive})},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.schedules,((e,t)=>((0,o.wg)(),(0,o.j4)(i,{key:t,icon:"branch"===e.privacy?"store":"person"},{title:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)("branch"===e.privacy?"Branch: ":"Private: ")+" "+(0,s.zw)(e.event_name),1)])),subtitle:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(l.formatDate(e.start_date))+" - "+(0,s.zw)(l.formatDate(e.end_date)),1)])),default:(0,o.w5)((()=>[(0,o._)("div",N,(0,s.zw)(e.additional_details||"No additional details"),1)])),_:2},1032,["icon"])))),128))])),_:1},8,["class"])])),_:1},8,["modelValue","bordered","events","class"])}const P={setup(){const e=(0,d.iH)([]),t=(0,d.iH)([]),a=e=>{const t={year:"numeric",month:"long",day:"numeric"};return new Date(e).toLocaleDateString(void 0,t)},s=async()=>{try{const a=await h.api.get("/ScheduleList");t.value=a.data,e.value=t.value.map((e=>({from:e.start_date,to:e.end_date,style:{backgroundColor:"branch"===e.privacy?"green":"red",color:"white"}})))}catch(a){console.error("Error fetching schedules:",a)}};return(0,o.bv)((()=>{s();const e=setInterval(s,1e3);(0,o.Jd)((()=>{clearInterval(e)}))})),{days:e,schedules:t,formatDate:a,date:(0,d.iH)("2023/12/11"),events:t.value.map((e=>({start:e.start_date,end:e.end_date})))}}};var j=a(4939),E=a(6292),H=a(8767);const L=(0,f.Z)(P,[["render",S]]),z=L;y()(P,"components",{QDate:j.Z,QTimeline:E.Z,QTimelineEntry:H.Z});var B=a(1957);function M(e,t,a,l,r,n){const i=(0,o.up)("q-input"),c=(0,o.up)("q-btn"),d=(0,o.up)("q-form"),u=(0,o.up)("q-card-section"),m=(0,o.up)("q-card"),p=(0,o.up)("q-expansion-item"),h=(0,o.up)("q-dialog"),g=(0,o.up)("q-tooltip"),f=(0,o.up)("q-checkbox"),v=(0,o.up)("q-card-actions"),_=(0,o.up)("q-separator");return(0,o.wg)(),(0,o.j4)(m,{flat:"",bordered:!e.$q.dark.isActive,class:"my-card"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:(0,s.C_)({"q-pt-none q-py-lg":e.$q.screen.gt.sm,"no-margin":e.$q.screen.lt.sm})},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{group:"somegroup","header-class":{"text-grey-3":e.$q.dark.isActive,"text-grey-9":!e.$q.dark.isActive},class:(0,s.C_)({"text-teal-3":e.$q.dark.isActive}),label:"Add Notes","expand-icon":"add","dense-toggle":"","default-opened":""},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{onSubmit:(0,B.iM)(n.AddNotes,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:r.note_title,"onUpdate:modelValue":t[0]||(t[0]=e=>r.note_title=e),label:"Title:","label-color":e.secondary,dense:e.dense},null,8,["modelValue","label-color","dense"]),(0,o.Wm)(i,{modelValue:r.note_content,"onUpdate:modelValue":t[1]||(t[1]=e=>r.note_content=e),type:"textarea",label:"Description"},null,8,["modelValue"]),(0,o.Wm)(c,{unelevated:"",rounded:"",label:"Add Notes",class:(0,s.C_)(["full-width q-ma-lg",{"text-teal-3 bg-secondary ":e.$q.dark.isActive,"bg-teal text-grey-3":!e.$q.dark.isActive}]),type:"submit",onClick:e.closeAddNotesDialog},null,8,["class","onClick"])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["header-class","class"]),(0,o.Wm)(h,{modelValue:e.editDialog,"onUpdate:modelValue":t[4]||(t[4]=t=>e.editDialog=t),onHide:e.resetEditData},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{onSubmit:(0,B.iM)(e.editNote,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:e.editedNoteTitle,"onUpdate:modelValue":t[2]||(t[2]=t=>e.editedNoteTitle=t),label:"Edit Title:","label-color":e.secondary,dense:e.dense},null,8,["modelValue","label-color","dense"]),(0,o.Wm)(i,{modelValue:e.editedNoteText,"onUpdate:modelValue":t[3]||(t[3]=t=>e.editedNoteText=t),type:"textarea",label:"Edit Description"},null,8,["modelValue"]),(0,o.Wm)(c,{unelevated:"",rounded:"",label:"Update Notes",class:(0,s.C_)(["full-width q-ma-lg",{"text-teal-3 bg-secondary ":e.$q.dark.isActive,"bg-teal text-grey-3":!e.$q.dark.isActive}]),type:"submit"},null,8,["class"])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue","onHide"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.notes,((t,a)=>((0,o.wg)(),(0,o.j4)(p,{group:"somegroup",label:t.note_title,"header-class":{"text-grey-3":e.$q.dark.isActive,"text-grey-9":!e.$q.dark.isActive},key:a,onHold:t=>e.openEditDialog(a)},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:(0,s.C_)(["text-subtitle1 text-grey-7 text-weight-light",{"text-grey-3 bg-   ":e.$q.dark.isActive}])},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.note_content),1)])),_:2},1024),(0,o.Wm)(v,{align:"right"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{"left-label":"",modelValue:t.status,"onUpdate:modelValue":e=>t.status=e,color:"teal","checked-icon":"task_alt","unchecked-icon":"highlight_off",onInput:e=>n.updateNoteStatus(t)},{default:(0,o.w5)((()=>["undone"==t.status?((0,o.wg)(),(0,o.j4)(g,{key:0,"transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Mark as done ")])),_:1})):((0,o.wg)(),(0,o.j4)(g,{key:1,"transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Mark as undone ")])),_:1}))])),_:2},1032,["modelValue","onUpdate:modelValue","onInput"]),(0,o.Wm)(c,{icon:"delete",color:"teal",flat:"",size:"sm",onClick:e=>n.deleteNoteConfirm(t.note_id)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["class"]),(0,o.Wm)(_,{class:"q-mx-md"})])),_:2},1032,["label","header-class","onHold"])))),128))])),_:1},8,["class"])])),_:1},8,["bordered"])}const F={data(){return{note_title:"",note_content:"",notes:[]}},created(){this.fetchNotes(),setInterval(this.fetchNotes,1e3)},methods:{async AddNotes(){try{const e=await h.api.post("/AddNotes",{note_title:this.note_title,note_content:this.note_content});this.note_title="",this.note_content="",this.$q.notify({color:"teal",icon:"check_circle",message:"Note added successfully"}),console.log(e.data)}catch(e){console.error("Error note insertion:",e),this.$q.notify({color:"red-5",icon:"warning",message:"Failed to add note. Please try again."})}},async fetchNotes(){try{const e=await h.api.get("/NotesList");this.notes=e.data}catch(e){console.error("Error fetching notes:",e)}},async updateNoteStatus(e){try{const t=await h.api.put(`/UpdateNoteStatus/${e.note_id}`,{status:"done"===e.status});console.log(t.data)}catch(t){console.error("Error updating note status:",t)}},async deleteNoteConfirm(e){if(window.confirm("Are you sure you want to delete this note?"))try{const t=await h.api.delete(`/DeleteNote/${e}`);console.log(t.data)}catch(t){console.error("Error deleting note:",t)}}}};var K=a(1123),O=a(8326),Y=a(6611),J=a(8879),R=a(2074),G=a(1821),X=a(1221),ee=a(6858),te=a(926);const ae=(0,f.Z)(F,[["render",M]]),oe=ae;y()(F,"components",{QCard:v.Z,QCardSection:_.Z,QExpansionItem:K.Z,QForm:O.Z,QInput:Y.Z,QBtn:J.Z,QDialog:R.Z,QCardActions:G.Z,QCheckbox:X.Z,QTooltip:ee.Z,QSeparator:te.Z});const se={id:"chart",style:{width:"100%",height:"100%"}};function le(e,t,a,l,r,n){const i=(0,o.up)("apexchart"),c=(0,o.up)("q-carousel-slide"),d=(0,o.up)("q-carousel"),u=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(u,{flat:"",bordered:!e.$q.dark.isActive,class:"my-card"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:l.slide,"onUpdate:modelValue":t[0]||(t[0]=e=>l.slide=e),"transition-prev":"jump-right","transition-next":"jump-left",swipeable:"",animated:"","control-color":"white","prev-icon":"arrow_left","next-icon":"arrow_right","navigation-icon":"radio_button_unchecked",padding:"",infinite:"",autoplay:1e4,class:(0,s.C_)(["bg-white text-dark rounded-borders q-pa-none",{"bg-transparent":e.$q.dark.isActive}]),style:{height:"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{name:"style"},{default:(0,o.w5)((()=>[(0,o._)("div",se,[(0,o.Wm)(i,{type:"area",options:l.chartOptions,series:l.series},null,8,["options","series"])])])),_:1})])),_:1},8,["modelValue","class"])])),_:1},8,["bordered"])}const re={name:"MyChart",setup(){const e=(0,d.iH)("style"),t=(0,d.iH)(!0),a=(0,d.iH)([{name:"Transaction",data:[31,40,28,51,42,109,100]},{name:"Restock",data:[11,32,45,32,34,52,41]}]),o=(0,d.iH)({chart:{toolbar:{show:!1},height:350,type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1,colors:["teal"]},fill:{colors:["rgba(134, 253, 197, 0.4)"]},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},yaxis:{show:!0},grid:{show:!1},dataLabels:{enabled:!1},tooltip:{x:{format:"dd/MM/yy HH:mm"}}});return{slide:e,loading:t,series:a,chartOptions:o}}};var ne=a(7052),ie=a(1694);const ce=(0,f.Z)(re,[["render",le]]),de=ce;function ue(e,t,a,l,r,n){const i=(0,o.up)("q-btn"),c=(0,o.up)("q-card-section"),d=(0,o.up)("q-icon"),u=(0,o.up)("q-input"),m=(0,o.up)("q-table"),p=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(p,{flat:"",bordered:!e.$q.dark.isActive,class:(0,s.C_)(["my-card",{"text-grey-6 bg-primary ":e.$q.dark.isActive}])},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"q-pa-lg"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{rounded:"",class:(0,s.C_)(["absolute-top-right q-ma-lg",{"text-teal-3 bg-secondary ":e.$q.dark.isActive,"bg-teal text-grey-3":!e.$q.dark.isActive}]),icon:"get_app",onClick:n.exportTable,label:"Export",unelevated:""},null,8,["class","onClick"])])),_:1}),(0,o.Wm)(c,{class:"q-pt-none q-ma-lg"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{flat:"",title:"User List",rows:r.rows,columns:r.columns,"row-key":"user_id","visible-columns":r.visibleColumns,filter:e.filter,class:(0,s.C_)({"text-grey-3 bg-primary ":e.$q.dark.isActive})},{"top-left":(0,o.w5)((()=>[(0,o.Wm)(u,{dense:e.dense,debounce:"300",modelValue:e.filter,"onUpdate:modelValue":t[0]||(t[0]=t=>e.filter=t),placeholder:"Search"},{append:(0,o.w5)((()=>[(0,o.Wm)(d,{name:"search"})])),_:1},8,["dense","modelValue"])])),_:1},8,["rows","columns","visible-columns","filter","class"])])),_:1})])),_:1},8,["bordered","class"])}y()(re,"components",{QCard:v.Z,QCarousel:ne.Z,QCarouselSlide:ie.Z});var me=a(6646);const pe={data(){return{rows:[],columns:[{name:"user_id",label:"User ID",align:"left",field:"user_id",sortable:!0},{name:"email",label:"Email",align:"left",field:"email",sortable:!0},{name:"status",label:"Status",align:"left",field:"status",sortable:!0}],visibleColumns:[]}},mounted(){this.fetchUserData(),setInterval(this.fetchUserData,1e3)},methods:{async fetchUserData(){try{const e=await h.api.get("/UserList");this.rows=e.data,this.visibleColumns=this.columns.map((e=>e.name))}catch(e){console.error("Error fetching user data:",e)}},exportTable(){const e=[this.columns.map((e=>this.wrapCsvValue(e.label))),...this.rows.map((e=>this.columns.map((t=>this.wrapCsvValue("function"===typeof t.field?t.field(e):e[void 0===t.field?t.name:t.field],t.format,e))).join(",")))].join("\r\n"),t=(0,me.Z)("user-list.csv",e,"text/csv");!0!==t&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},wrapCsvValue(e,t,a){let o=void 0!==t?t(e,a):e;return o=void 0===o||null===o?"":String(o),o=o.split('"').join('""'),`"${o}"`},getStatusColor(e){return"active"===e?"positive":"negative"}}};var he=a(5950),ge=a(2857);const fe=(0,f.Z)(pe,[["render",ue]]),ve=fe;y()(pe,"components",{QCard:v.Z,QCardSection:_.Z,QBtn:J.Z,QTable:he.Z,QInput:Y.Z,QIcon:ge.Z});const _e={components:{card1:k,card2:I,card3:V,calendar:z,notes:oe,table1:ve,mainchart:de},setup(){return{days:(0,d.iH)([{from:"2023/11/01",to:"2023/11/10"},{from:"2023/11/21",to:"2023/11/25"}]),lorem:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."}},mounted(){setTimeout((()=>{this.loading=!1}),2e3)}},be=(0,f.Z)(_e,[["render",c],["__scopeId","data-v-a9316bc0"]]),we=be;y()(_e,"components",{QDate:j.Z,QCardSection:_.Z})}}]);