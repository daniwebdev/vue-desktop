"use strict";(self["webpackChunkvue_desktop_app"]=self["webpackChunkvue_desktop_app"]||[]).push([[507],{191:function(a,n,o){o.d(n,{Z:function(){return u}});var e=o(3396);const s=(0,e._)("div",{class:"frame"},[(0,e._)("div",{class:"drag flex-1"},[(0,e._)("h2",null,"Login")]),(0,e._)("div",{class:"close"},[(0,e._)("i",{class:"fa fa-times","aria-hidden":"true"})])],-1);function t(a,n){return(0,e.wg)(),(0,e.iD)("div",null,[s,(0,e.WI)(a.$slots,"default")])}var l=o(89);const r={},i=(0,l.Z)(r,[["render",t]]);var u=i},1507:function(a,n,o){o.r(n),o.d(n,{default:function(){return b}});var e=o(3396),s=o(9242);const t={id:"auth"},l={class:"container"},r=(0,e._)("h1",null,"Login to Application",-1),i={class:"form-group"},u=(0,e._)("label",{for:"email"},"Email",-1),d={class:"form-group"},c=(0,e._)("label",{for:"password"},"Password",-1),p=(0,e._)("button",{type:"submit",class:"btn btn-primary"},"Login",-1),m=(0,e.Uk)(" Don't have an account? "),f=(0,e.Uk)("Register");function _(a,n,o,_,v,w){const g=(0,e.up)("router-link"),h=(0,e.up)("auth-layout");return(0,e.wg)(),(0,e.j4)(h,null,{default:(0,e.w5)((()=>[(0,e._)("div",t,[(0,e._)("div",l,[r,(0,e._)("form",{onSubmit:n[2]||(n[2]=(0,s.iM)(((...a)=>w.login&&w.login(...a)),["prevent"])),class:"mb-5"},[(0,e._)("div",i,[u,(0,e.wy)((0,e._)("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":n[0]||(n[0]=a=>v.email=a)},null,512),[[s.nr,v.email]])]),(0,e._)("div",d,[c,(0,e.wy)((0,e._)("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":n[1]||(n[1]=a=>v.password=a)},null,512),[[s.nr,v.password]])]),p],32),(0,e._)("div",null,[m,(0,e.Wm)(g,{to:{name:"register"}},{default:(0,e.w5)((()=>[f])),_:1})])])])])),_:1})}var v=o(191),w={components:{AuthLayout:v.Z},data(){return{email:"",password:""}},methods:{login(){window.ipcRenderer.send("go-app"),console.log(this.email,this.password)}}},g=o(89);const h=(0,g.Z)(w,[["render",_]]);var b=h}}]);
//# sourceMappingURL=507.6f56b163.js.map