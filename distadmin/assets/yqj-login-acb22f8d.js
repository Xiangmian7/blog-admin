import{b as x,e as $,u as B,_ as N,w as A}from"./base-1063101c.js";import{E as L,a as U}from"./el-form-item-ce17aa6e.js";import{a9 as z,a as y,b as D,E as F}from"./index-24d76c80.js";import{E as M}from"./el-checkbox-462180b5.js";import{d as w,o as h,a as v,n as f,b as p,r as C,x as k,t as R,A as T,i as E,e as H,B as O,l as t,aj as G,q as b,g,D as J,k as s,w as r,p as K,j as Q,_ as W}from"./index-24cafc78.js";const X=x({header:{type:String,default:""},bodyStyle:{type:$([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),Y=w({name:"ElCard"}),Z=w({...Y,props:X,setup(o){const a=B("card");return(e,n)=>(h(),v("div",{class:f([p(a).b(),p(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(h(),v("div",{key:0,class:f(p(a).e("header"))},[C(e.$slots,"header",{},()=>[k(R(e.header),1)])],2)):T("v-if",!0),E("div",{class:f(p(a).e("body")),style:H(e.bodyStyle)},[C(e.$slots,"default")],6)],2))}});var ee=N(Z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const ae=A(ee);function se(o,a){return z.post("/login",{name:o,password:a})}const oe=O("login",{state(){return{token:t.getCache("token")??""}},actions:{async loginPostAction(o,a){const e=await se(o,a),{token:n}=e;this.token=n,t.setCache("token",n),G.push("/main")}}}),te=o=>(K("data-v-16f99f09"),o=o(),Q(),o),le={class:"login"},re=te(()=>E("div",{class:"title"},"yqj博客管理系统",-1)),ne=w({__name:"yqj-login",setup(o){const a=oe(),e=b({name:t.getCache("name")??"",password:t.getCache("password")??""}),n=g(),c=g(!1),i=g(!1),S=b({name:[{required:!0,message:"请输入您的账号",trigger:"change"},{min:5,max:18,message:"账号长度必须在5到18之间",trigger:"blur"}],password:[{required:!0,message:"请输入您的密码",trigger:"change"},{min:5,max:18,message:"密码长度必须在5到18之间",trigger:"blur"}]});J(()=>{t.getCache("name")?c.value=!0:c.value=!1});function V(){var _;(_=n.value)==null||_.validate(l=>{if(i.value=!0,l){const m=e.name,d=e.password;a.loginPostAction(m,d).then(()=>{c.value?(t.setCache("name",e.name),t.setCache("password",e.password)):(t.removeCache("name"),t.removeCache("password"))},()=>{i.value=!1,y.error("账号或密码错误，请重新输入~")})}else i.value=!1,y.error("格式错误，请重新输入~")})}return(_,l)=>{const m=D,d=L,j=M,q=F,I=U,P=ae;return h(),v("div",le,[s(P,null,{default:r(()=>[re,s(I,{model:e,rules:S,ref_key:"formEl",ref:n},{default:r(()=>[s(d,{prop:"name"},{default:r(()=>[s(m,{placeholder:"账号",modelValue:e.name,"onUpdate:modelValue":l[0]||(l[0]=u=>e.name=u),clearable:""},null,8,["modelValue"])]),_:1}),s(d,{prop:"password",class:"password"},{default:r(()=>[s(m,{placeholder:"密码",modelValue:e.password,"onUpdate:modelValue":l[1]||(l[1]=u=>e.password=u),type:"password","show-password":"",clearable:""},null,8,["modelValue"])]),_:1}),s(d,{class:"feature"},{default:r(()=>[s(j,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=u=>c.value=u),label:"记住密码"},null,8,["modelValue"])]),_:1}),s(d,null,{default:r(()=>[s(q,{loading:i.value,type:"primary",round:"",style:{width:"100%"},onClick:V},{default:r(()=>[k("登录")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}});const pe=W(ne,[["__scopeId","data-v-16f99f09"]]);export{pe as default};
