import{b as T,l as M,e as I,u as $,c as P,_ as V,w as x}from"./base-1063101c.js";import{E as j,a as D,f as E,b as U}from"./format-355ef022.js";import{h as q,i as F,c as H,a as k,E as J}from"./index-24d76c80.js";import"./el-scrollbar-ccdd61e3.js";import"./el-checkbox-462180b5.js";import{b as R,c as X}from"./index-4df2dc72.js";import{d as S,g as L,c as y,X as G,J as K,o as u,a as f,e as A,b as l,y as z,w as r,z as O,r as Q,n as W,B as Y,v as Z,k as o,i as w,t as g,A as ee,x as b,p as te,j as ae,_ as se}from"./index-24cafc78.js";const oe=T({size:{type:[Number,String],values:q,default:"",validator:t=>M(t)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:F},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:I(String),default:"cover"}}),ne={error:t=>t instanceof Event},re=["src","alt","srcset"],le=S({name:"ElAvatar"}),ce=S({...le,props:oe,emits:ne,setup(t,{emit:n}){const a=t,c=$("avatar"),d=L(!1),v=y(()=>{const{size:e,icon:m,shape:_}=a,p=[c.b()];return G(e)&&p.push(c.m(e)),m&&p.push(c.m("icon")),_&&p.push(c.m(_)),p}),h=y(()=>{const{size:e}=a;return M(e)?c.cssVarBlock({size:P(e)||""}):void 0}),i=y(()=>({objectFit:a.fit}));K(()=>a.src,()=>d.value=!1);function C(e){d.value=!0,n("error",e)}return(e,m)=>(u(),f("span",{class:W(l(v)),style:A(l(h))},[(e.src||e.srcSet)&&!d.value?(u(),f("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:A(l(i)),onError:C},null,44,re)):e.icon?(u(),z(l(H),{key:1},{default:r(()=>[(u(),z(O(e.icon)))]),_:1})):Q(e.$slots,"default",{key:2})],6))}});var ie=V(ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const pe=x(ie);const ue=Y("message",{state(){return{messageList:[],totalCount:0}},actions:{async getMessageListAction(t,n){const a=await R(t,n);this.messageList=a,this.totalCount=a[0].total},async deleteMessageAction(t){await X(t)}}}),de=t=>(te("data-v-6aaa6278"),t=t(),ae(),t),me={class:"message-manage"},_e=de(()=>w("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"},null,-1)),ge={key:0,class:"reply"},fe={class:"pagination"},ve=S({__name:"message-manage",setup(t){const n=ue(),a=L(0);n.getMessageListAction(a.value,10);const{messageList:c,totalCount:d}=Z(n);function v(i){n.deleteMessageAction(i).then(()=>{n.getMessageListAction(a.value,10),k({message:"删除成功~",type:"success"})},()=>{k.error("删除失败~")})}function h(i){a.value=(i-1)*10,n.getMessageListAction(a.value,10)}return(i,C)=>{const e=U,m=pe,_=J,p=j,B=D;return u(),f("div",me,[o(p,{data:l(c),style:{width:"100%"},border:"","row-key":"id",lazy:""},{default:r(()=>[o(e,{prop:"name",label:"名称"}),o(e,{label:"头像",width:70},{default:r(s=>[o(m,{src:s.row.avatar,onError:N=>!0},{default:r(()=>[_e]),_:2},1032,["src"])]),_:1}),o(e,{label:"内容"},{default:r(s=>[s.row.content.split("/")[1]?(u(),f("span",ge,g(s.row.content.split("/")[1]+" "),1)):ee("",!0),w("span",null,g(s.row.content.split("/")[0]),1)]),_:1}),o(e,{label:"创建时间",width:170},{default:r(s=>[b(g(l(E)(s.row.createAt)),1)]),_:1}),o(e,{label:"创建时间",width:170},{default:r(s=>[b(g(l(E)(s.row.updateAt)),1)]),_:1}),o(e,{label:"操作",width:80},{default:r(s=>[o(_,{size:"small",type:"danger",text:"",onClick:N=>v(s.row.id)},{default:r(()=>[b("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),w("div",fe,[o(B,{"page-size":10,background:"",layout:"total, prev, pager, next",total:l(d),onCurrentChange:h},null,8,["total"])])])}}});const ke=se(ve,[["__scopeId","data-v-6aaa6278"]]);export{ke as default};
