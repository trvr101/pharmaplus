"use strict";(globalThis["webpackChunkpharmaplus"]=globalThis["webpackChunkpharmaplus"]||[]).push([[689],{1689:(t,e,o)=>{o.r(e),o.d(e,{default:()=>w});var a=o(9835),r=o(6970);function l(t,e,o,l,n,i){const u=(0,a.up)("q-btn"),d=(0,a.up)("q-icon"),s=(0,a.up)("q-chip"),c=(0,a.up)("q-td"),p=(0,a.up)("q-table"),m=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(m,{flat:"",bordered:!t.$q.dark.isActive,class:"my-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{onClick:e[0]||(e[0]=e=>t.$router.go(-1)),class:"float-top-left q-ma-lg text-cyan-9",unelevated:"",rounded:"",outline:"",icon:"arrow_back"}),(0,a.Wm)(p,{rows:n.productHistory,columns:n.columns,"row-key":"audit_id",title:n.product_name+" History",class:"q-pa-md q-mb-lg q-mx-lg","rows-per-page-options":[10]},{"body-cell-type":(0,a.w5)((t=>[(0,a.Wm)(c,{props:t},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{color:i.getTypeColor(t.row.type),"text-color":"white",outline:"",class:"q-unselectable"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(t.row.type)+" ",1),"outbound"===t.row.type?((0,a.wg)(),(0,a.j4)(d,{key:0,name:"trending_up"})):"inbound"===t.row.type?((0,a.wg)(),(0,a.j4)(d,{key:1,name:"autorenew"})):(0,a.kq)("",!0)])),_:2},1032,["color"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","title"])])),_:1},8,["bordered"])])}var n=o(1569);o(6827);const i={data(){return{productHistory:[],columns:[{name:"index",label:"#",align:"center",field:"index"},{name:"old_quantity",label:"Old Quantity",align:"center",field:"old_quantity"},{name:"quantity",label:"Quantity",align:"center",field:"quantity"},{name:"total",label:"Total",align:"center",field:"total"},{name:"type",label:"Type",align:"center",field:"type"},{name:"created_at",label:"Created At",align:"center",field:"created_at"}],product_name:""}},methods:{async fetchProductHistory(){const t=this.$route.params.token,e=this.$route.params.product_id,o=await n.api.get(`/ProductAudit/${t}/${e}`);this.productHistory=o.data.map(((t,e)=>({...t,index:e+1}))),this.productHistory.length>0&&(this.product_name=this.productHistory[0].product_name)},getTypeColor(t){switch(t){case"outbound":return"teal";case"inbound":return"cyan-9";default:return"default"}},startPolling(){this.fetchProductHistory(),this.pollingTimer=setInterval((()=>{this.fetchProductHistory()}),1e3)},stopPolling(){clearInterval(this.pollingTimer)}},mounted(){this.startPolling()},beforeDestroy(){this.stopPolling()}};var u=o(1639),d=o(4458),s=o(8879),c=o(5950),p=o(7220),m=o(7691),y=o(2857),h=o(9984),g=o.n(h);const b=(0,u.Z)(i,[["render",l]]),w=b;g()(i,"components",{QCard:d.Z,QBtn:s.Z,QTable:c.Z,QTd:p.Z,QChip:m.Z,QIcon:y.Z})}}]);