"use strict";(globalThis["webpackChunkpharmaplus"]=globalThis["webpackChunkpharmaplus"]||[]).push([[987],{4987:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var o=n(9835);const a={class:"no-scroll hide-scrollbar overflow-hidden-y"},r=(0,o._)("div",{id:"map",style:{height:"94dvh",width:"96.3dvw"}},null,-1),s=[r];function i(e,t,n,r,i,c){return(0,o.wg)(),(0,o.iD)("div",a,s)}n(2167);var c=n(6925),l=n(520),h=n(4415),g=n(215);const d={mounted(){this.initMap()},methods:{initMap(){const e=localStorage.getItem("mapState");let t=[121.4069,13.0565],n=10;if(e){const{center:o,zoom:a}=JSON.parse(e);t=o,n=a}const o=new c.Z({target:"map",layers:[new h.Z({source:new g.Z})],view:new l.ZP({center:t,zoom:n})});o.getView().on("change:center",(()=>{const e=o.getView().getCenter(),t=o.getView().getZoom();localStorage.setItem("mapState",JSON.stringify({center:e,zoom:t}))}))}}};var m=n(1639);const p=(0,m.Z)(d,[["render",i]]),w=p}}]);