"use strict";(globalThis["webpackChunkpharmaplus"]=globalThis["webpackChunkpharmaplus"]||[]).push([[488],{5488:(e,a,o)=>{o.r(a),o.d(a,{default:()=>M});var t=o(9835);const s={class:"fullscreen",style:{background:"radial-gradient(\r\n        circle at 0% 125%,\r\n        rgb(91, 200, 180),\r\n        rgb(64, 145, 123)\r\n      )"}},l=(0,t._)("h4",{class:"text-primary text-center q-pa-lg"},"PharmaPlus+",-1),r={class:"fixed-bottom-right"};function i(e,a,o,i,n,d){const u=(0,t.up)("q-btn"),m=(0,t.up)("q-card-section"),p=(0,t.up)("q-separator"),c=(0,t.up)("q-card"),g=(0,t.up)("q-tab"),w=(0,t.up)("q-tabs"),h=(0,t.up)("LoginForm"),b=(0,t.up)("q-tab-panel"),f=(0,t.up)("RegisterForm"),q=(0,t.up)("q-tab-panels"),W=(0,t.up)("q-dialog");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",s,[(0,t.Wm)(c,{class:"absolute-center q-pa-lg",style:{width:"100vw","max-width":"560px",height:"31dvh","border-radius":"40px"}},{default:(0,t.w5)((()=>[l,(0,t._)("div",r,[(0,t.Wm)(m,{horizontal:""},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,{flat:"",onClick:a[0]||(a[0]=e=>i.open("bottom","LoginForm"))},{default:(0,t.w5)((()=>[(0,t.Uk)("Login")])),_:1})])),_:1}),(0,t.Wm)(p,{vertical:""}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,{flat:"",onClick:a[1]||(a[1]=e=>i.open("bottom","RegisterForm"))},{default:(0,t.w5)((()=>[(0,t.Uk)("Register")])),_:1})])),_:1})])),_:1})])])),_:1})]),(0,t.Wm)(W,{modelValue:i.dialog,"onUpdate:modelValue":a[4]||(a[4]=e=>i.dialog=e),position:i.position},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{style:{width:"100vw",height:"60dvh","border-radius":"40px"},maximized:"",class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{modelValue:i.tab,"onUpdate:modelValue":a[2]||(a[2]=e=>i.tab=e),"indicator-color":"teal",dense:"",align:"justify","switch-indicator":"","slide-transition":""},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{class:"text-primary",name:"LoginForm",label:"Sign In"}),(0,t.Wm)(g,{class:"text-primary",name:"RegisterForm",label:"Sign Up"})])),_:1},8,["modelValue"]),(0,t.Wm)(q,{modelValue:i.tab,"onUpdate:modelValue":a[3]||(a[3]=e=>i.tab=e),animated:"","slide-transition":""},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{name:"LoginForm"},{default:(0,t.w5)((()=>[(0,t.Wm)(h)])),_:1}),(0,t.Wm)(b,{name:"RegisterForm"},{default:(0,t.w5)((()=>[(0,t.Wm)(f)])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue","position"])],64)}var n=o(499),d=o(1957);function u(e,a,o,s,l,r){const i=(0,t.up)("q-input"),n=(0,t.up)("q-btn"),u=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(u,{onSubmit:(0,d.iM)(r.login,["prevent"])},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{modelValue:l.email,"onUpdate:modelValue":a[0]||(a[0]=e=>l.email=e),label:"Email",dense:e.dense},null,8,["modelValue","dense"]),(0,t.Wm)(i,{modelValue:l.password,"onUpdate:modelValue":a[1]||(a[1]=e=>l.password=e),label:"Password",dense:e.dense},null,8,["modelValue","dense"]),(0,t.Wm)(n,{unelevated:"",rounded:"",color:"primary",label:"Login",class:"full-width q-ma-lg",outline:"",type:"submit"})])),_:1},8,["onSubmit"]),(0,t.Wm)(n,{unelevated:"",rounded:"",outline:"",color:"secondary",onClick:a[2]||(a[2]=a=>e.$q.fullscreen.toggle()),icon:e.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen",class:"float-right"},null,8,["icon"])],64)}o(2879);var m=o(1569),p=o(6827);const c={data(){return{email:"",password:"",errorMsg:""}},methods:{async login(){if(""!==this.password.trim())try{const e=await m.api.post("/login",{email:this.email,password:this.password});if(console.log(e.data),"error"===e.data.msg)this.errorMsg="Invalid email or password";else{const a=e.data.token,o=e.data.user_role;console.log(e.data),sessionStorage.setItem("token",a),sessionStorage.setItem("user_role",o),"admin"===o?this.$router.push("/dashboard"):"cashier"===o&&this.$router.push("/POS"),p.Z.create({message:"Login successful!",color:"teal",position:"bottom",timeout:3e3})}}catch(e){console.error("Error during login:",e),p.Z.create({message:"Error during login. Please try again.",color:"negative",position:"bottom",timeout:3e3})}else this.errorMsg="Password cannot be empty"}}};var g=o(1639),w=o(8326),h=o(6611),b=o(8879),f=o(9984),q=o.n(f);const W=(0,g.Z)(c,[["render",u]]),v=W;q()(c,"components",{QForm:w.Z,QInput:h.Z,QBtn:b.Z});const y={key:0},V={key:1};function _(e,a,o,s,l,r){const i=(0,t.up)("q-input"),n=(0,t.up)("q-btn"),u=(0,t.up)("q-form");return(0,t.wg)(),(0,t.j4)(u,{onSubmit:(0,d.iM)(r.register,["prevent"])},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{required:"",modelValue:l.email,"onUpdate:modelValue":a[0]||(a[0]=e=>l.email=e),label:"Email"},null,8,["modelValue"]),(0,t.Wm)(i,{required:"",modelValue:l.password,"onUpdate:modelValue":a[1]||(a[1]=e=>l.password=e),label:"Password",type:"password"},null,8,["modelValue"]),(0,t.Wm)(i,{required:"",modelValue:l.passwordConfirm,"onUpdate:modelValue":a[2]||(a[2]=e=>l.passwordConfirm=e),label:"Confirm Password",type:"password"},null,8,["modelValue"]),(0,t.Wm)(n,{unelevated:"",rounded:"",color:"primary",label:"Register",class:"full-width q-ma-lg",outline:"",type:"submit"}),"passwordMismatch"===l.message?((0,t.wg)(),(0,t.iD)("div",y,"Passwords do not match")):(0,t.kq)("",!0),"failed"===l.message?((0,t.wg)(),(0,t.iD)("div",V,"Registration failed")):(0,t.kq)("",!0)])),_:1},8,["onSubmit"])}const Z={data(){return{email:"",password:"",passwordConfirm:"",message:null}},methods:{async register(){try{const e=await m.api.post("/register",{email:this.email,password:this.password});if(this.message=e.data.msg,"okay"===e.data.msg){const a=e.data.token,o=e.data.user_role;sessionStorage.setItem("token",a),sessionStorage.setItem("user_role",o),"admin"===o?this.$router.push("/dashboard"):"cashier"===o?this.$router.push("/POS"):this.$router.push("/default"),p.Z.create("Registered successfully")}}catch(e){console.error("Registration failed:",e),this.message="failed"}}}},k=(0,g.Z)(Z,[["render",_]]),Q=k;q()(Z,"components",{QForm:w.Z,QInput:h.Z,QBtn:b.Z});const S={components:{LoginForm:v,RegisterForm:Q},setup(){const e=(0,n.iH)(!1),a=(0,n.iH)("bottom"),o=(0,n.iH)("LoginForm");return{tab:o,dialog:e,position:a,open(t,s){a.value=t,o.value=s,e.value=!0}}}};var F=o(4458),P=o(3190),x=o(926),C=o(2074),U=o(7817),R=o(7661),L=o(9800),I=o(4106);const $=(0,g.Z)(S,[["render",i]]),M=$;q()(S,"components",{QCard:F.Z,QCardSection:P.Z,QBtn:b.Z,QSeparator:x.Z,QDialog:C.Z,QTabs:U.Z,QTab:R.Z,QTabPanels:L.Z,QTabPanel:I.Z})}}]);