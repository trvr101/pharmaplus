"use strict";(globalThis["webpackChunkpharmaplus"]=globalThis["webpackChunkpharmaplus"]||[]).push([[772],{8772:(e,a,t)=>{t.r(a),t.d(a,{default:()=>M});var o=t(9835),s=t(6970);const l={class:"fullscreen",style:{background:"radial-gradient(\r\n        circle at 0% 125%,\r\n        rgb(91, 200, 180),\r\n        rgb(64, 145, 123)\r\n      )"}},r={class:"text-primary text-center q-pa-lg"},i={class:"fixed-bottom-right"};function n(e,a,t,n,d,m){const u=(0,o.up)("q-btn"),c=(0,o.up)("q-card-section"),p=(0,o.up)("q-separator"),g=(0,o.up)("q-card"),h=(0,o.up)("q-tab"),b=(0,o.up)("q-tabs"),w=(0,o.up)("LoginForm"),f=(0,o.up)("q-tab-panel"),q=(0,o.up)("RegisterForm"),v=(0,o.up)("q-tab-panels"),_=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",l,[(0,o.Wm)(g,{class:"absolute-center q-pa-lg",style:{width:"100vw","max-width":"560px",height:"31dvh","border-radius":"40px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{flat:"",to:"/",icon:"arrow_back",class:"absolute-top-left q-mt-lg q-ml-sm"}),(0,o._)("h4",r,[(0,o._)("img",{style:{filter:"invert(100%) sepia(100%) saturate(0%) hue-rotate(230deg)\r\n              brightness(50%)"},class:(0,s.C_)(["q-mt-sm colored-img absolute-center",{"lg-height":e.$q.screen.gt.sm,"sm-height":e.$q.screen.lt.sm}]),src:"/pharmapluslogo.png",alt:"Pharma Plus Logo"},null,2)]),(0,o._)("div",i,[(0,o.Wm)(c,{horizontal:""},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{flat:"",onClick:a[0]||(a[0]=e=>n.open("bottom","LoginForm"))},{default:(0,o.w5)((()=>[(0,o.Uk)("Login")])),_:1})])),_:1}),(0,o.Wm)(p,{vertical:""}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{flat:"",onClick:a[1]||(a[1]=e=>n.open("bottom","RegisterForm"))},{default:(0,o.w5)((()=>[(0,o.Uk)("Register")])),_:1})])),_:1})])),_:1})])])),_:1})]),(0,o.Wm)(_,{modelValue:n.dialog,"onUpdate:modelValue":a[4]||(a[4]=e=>n.dialog=e),position:n.position},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{style:{width:"100vw",height:"60dvh","border-radius":"40px"},maximized:"",class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{modelValue:n.tab,"onUpdate:modelValue":a[2]||(a[2]=e=>n.tab=e),"indicator-color":"teal",dense:"",align:"justify","switch-indicator":"","slide-transition":""},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{class:"text-primary",name:"LoginForm",label:"Sign In"}),(0,o.Wm)(h,{class:"text-primary",name:"RegisterForm",label:"Sign Up"})])),_:1},8,["modelValue"]),(0,o.Wm)(v,{modelValue:n.tab,"onUpdate:modelValue":a[3]||(a[3]=e=>n.tab=e),animated:"","slide-transition":""},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{name:"LoginForm"},{default:(0,o.w5)((()=>[(0,o.Wm)(w)])),_:1}),(0,o.Wm)(f,{name:"RegisterForm"},{default:(0,o.w5)((()=>[(0,o.Wm)(q)])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue","position"])],64)}var d=t(499),m=t(1957);function u(e,a,t,s,l,r){const i=(0,o.up)("q-input"),n=(0,o.up)("q-btn"),d=(0,o.up)("q-form");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(d,{onSubmit:(0,m.iM)(r.login,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:l.email,"onUpdate:modelValue":a[0]||(a[0]=e=>l.email=e),label:"Email",dense:e.dense},null,8,["modelValue","dense"]),(0,o.Wm)(i,{modelValue:l.password,"onUpdate:modelValue":a[1]||(a[1]=e=>l.password=e),label:"Password",dense:e.dense},null,8,["modelValue","dense"]),(0,o.Wm)(n,{unelevated:"",rounded:"",color:"primary",label:"Login",class:"full-width q-ma-lg",outline:"",type:"submit"})])),_:1},8,["onSubmit"]),(0,o.Wm)(n,{unelevated:"",rounded:"",outline:"",color:"secondary",onClick:a[2]||(a[2]=a=>e.$q.fullscreen.toggle()),icon:e.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen",class:"float-right"},null,8,["icon"])],64)}t(2879);var c=t(1569),p=t(6827);const g={data(){return{email:"",password:"",errorMsg:""}},methods:{async login(){if(""!==this.password.trim())try{const e=await c.api.post("/login",{email:this.email,password:this.password});if(console.log(e.data),"error"===e.data.msg)this.errorMsg="Invalid email or password";else{const a=e.data.token,t=e.data.user_role;console.log(e.data),sessionStorage.setItem("token",a),sessionStorage.setItem("user_role",t),"admin"===t?(this.$router.push("/dashboard"),p.Z.create({message:"Login General Admin successfully!",color:"teal",position:"bottom",timeout:3e3})):"cashier"===t?(this.$router.push("/POS"),p.Z.create({message:"Login as Cashier successfully!",color:"teal",position:"bottom",timeout:3e3})):"branch_admin"===t&&(this.$router.push("/Branch_dashboard"),p.Z.create({message:"Login as Branch Admin successfully!",color:"teal",position:"bottom",timeout:3e3}))}}catch(e){console.error("Error during login:",e),p.Z.create({message:"Error during login. Please try again.",color:"negative",position:"bottom",timeout:3e3})}else this.errorMsg="Password cannot be empty"}}};var h=t(1639),b=t(8326),w=t(6611),f=t(8879),q=t(9984),v=t.n(q);const _=(0,h.Z)(g,[["render",u]]),y=_;v()(g,"components",{QForm:b.Z,QInput:w.Z,QBtn:f.Z});const W={key:0},V={key:1};function k(e,a,t,s,l,r){const i=(0,o.up)("q-input"),n=(0,o.up)("q-btn"),d=(0,o.up)("q-form");return(0,o.wg)(),(0,o.j4)(d,{onSubmit:(0,m.iM)(r.register,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{required:"",modelValue:l.invitationCode,"onUpdate:modelValue":a[0]||(a[0]=e=>l.invitationCode=e),label:"Invitation Code"},null,8,["modelValue"]),(0,o.Wm)(i,{required:"",modelValue:l.email,"onUpdate:modelValue":a[1]||(a[1]=e=>l.email=e),label:"Email"},null,8,["modelValue"]),(0,o.Wm)(i,{required:"",modelValue:l.password,"onUpdate:modelValue":a[2]||(a[2]=e=>l.password=e),label:"Password",type:"password"},null,8,["modelValue"]),(0,o.Wm)(i,{required:"",modelValue:l.passwordConfirm,"onUpdate:modelValue":a[3]||(a[3]=e=>l.passwordConfirm=e),label:"Confirm Password",type:"password"},null,8,["modelValue"]),(0,o.Wm)(n,{unelevated:"",rounded:"",color:"primary",label:"Register",class:"full-width q-ma-lg",outline:"",type:"submit"}),"passwordMismatch"===l.message?((0,o.wg)(),(0,o.iD)("div",W,"Passwords do not match")):(0,o.kq)("",!0),"failed"===l.message?((0,o.wg)(),(0,o.iD)("div",V,"Registration failed")):(0,o.kq)("",!0)])),_:1},8,["onSubmit"])}const Z={data(){return{invitationCode:"",email:"",password:"",passwordConfirm:"",message:null}},methods:{async register(){try{const e=await c.api.post("/register",{invitationCode:this.invitationCode,email:this.email,password:this.password});if(this.message=e.data.msg,"okay"===e.data.msg){const a=e.data.token,t=e.data.user_role;sessionStorage.setItem("token",a),sessionStorage.setItem("user_role",t),console.log("User Role:",t),this.redirectBasedOnUserRole(t),p.Z.create({message:"Registered successfully!",color:"teal",position:"bottom",timeout:3e3})}}catch(e){console.error("Registration failed:",e),this.message="failed"}},redirectBasedOnUserRole(e){switch(e){case"admin":this.$router.push("/dashboard");break;case"branch_admin":this.$router.push("/branch_admin");break;case"cashier":this.$router.push("/POS");break;default:this.$router.push("/");break}}}},C=(0,h.Z)(Z,[["render",k]]),Q=C;v()(Z,"components",{QForm:b.Z,QInput:w.Z,QBtn:f.Z});const U={components:{LoginForm:y,RegisterForm:Q},setup(){const e=(0,d.iH)(!1),a=(0,d.iH)("bottom"),t=(0,d.iH)("LoginForm");return{tab:t,dialog:e,position:a,open(o,s){a.value=o,t.value=s,e.value=!0}}}};var S=t(4458),F=t(3190),R=t(926),L=t(2074),P=t(7817),x=t(7661),$=t(9800),I=t(4106);const B=(0,h.Z)(U,[["render",n]]),M=B;v()(U,"components",{QCard:S.Z,QBtn:f.Z,QCardSection:F.Z,QSeparator:R.Z,QDialog:L.Z,QTabs:P.Z,QTab:x.Z,QTabPanels:$.Z,QTabPanel:I.Z})}}]);