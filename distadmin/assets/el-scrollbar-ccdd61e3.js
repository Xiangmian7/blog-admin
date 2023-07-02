import{b as X,_ as Y,u as G,t as Z,z as A,i as ee,e as te,l as E,c as j,x as le,w as ae}from"./base-1063101c.js";import{d as x,M as se,g as c,c as w,G as oe,a4 as K,o as k,y as W,w as I,R as re,i as $,n as H,b as m,e as D,U as ne,V as ie,a as J,k as U,F as ce,J as V,O as q,Q as ue,q as ve,D as fe,ah as me,r as de,z as he,A as pe,a0 as be}from"./index-24cafc78.js";const g=4,ye={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},ge=({move:d,size:u,bar:r})=>({[r.size]:u,transform:`translate${r.axis}(${d}%)`}),Q=Symbol("scrollbarContextKey"),we=X({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Se="Thumb",ze=x({__name:"thumb",props:we,setup(d){const u=d,r=se(Q),a=G("scrollbar");r||Z(Se,"can not inject scrollbar context");const i=c(),v=c(),o=c({}),f=c(!1);let l=!1,p=!1,b=ee?document.onselectstart:null;const t=w(()=>ye[u.vertical?"vertical":"horizontal"]),S=w(()=>ge({size:u.size,move:u.move,bar:t.value})),z=w(()=>i.value[t.value.offset]**2/r.wrapElement[t.value.scrollSize]/u.ratio/v.value[t.value.offset]),T=s=>{var e;if(s.stopPropagation(),s.ctrlKey||[1,2].includes(s.button))return;(e=window.getSelection())==null||e.removeAllRanges(),L(s);const n=s.currentTarget;n&&(o.value[t.value.axis]=n[t.value.offset]-(s[t.value.client]-n.getBoundingClientRect()[t.value.direction]))},B=s=>{if(!v.value||!i.value||!r.wrapElement)return;const e=Math.abs(s.target.getBoundingClientRect()[t.value.direction]-s[t.value.client]),n=v.value[t.value.offset]/2,h=(e-n)*100*z.value/i.value[t.value.offset];r.wrapElement[t.value.scroll]=h*r.wrapElement[t.value.scrollSize]/100},L=s=>{s.stopImmediatePropagation(),l=!0,document.addEventListener("mousemove",R),document.addEventListener("mouseup",y),b=document.onselectstart,document.onselectstart=()=>!1},R=s=>{if(!i.value||!v.value||l===!1)return;const e=o.value[t.value.axis];if(!e)return;const n=(i.value.getBoundingClientRect()[t.value.direction]-s[t.value.client])*-1,h=v.value[t.value.offset]-e,_=(n-h)*100*z.value/i.value[t.value.offset];r.wrapElement[t.value.scroll]=_*r.wrapElement[t.value.scrollSize]/100},y=()=>{l=!1,o.value[t.value.axis]=0,document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",y),C(),p&&(f.value=!1)},M=()=>{p=!1,f.value=!!u.size},O=()=>{p=!0,f.value=l};oe(()=>{C(),document.removeEventListener("mouseup",y)});const C=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return A(K(r,"scrollbarElement"),"mousemove",M),A(K(r,"scrollbarElement"),"mouseleave",O),(s,e)=>(k(),W(ie,{name:m(a).b("fade"),persisted:""},{default:I(()=>[re($("div",{ref_key:"instance",ref:i,class:H([m(a).e("bar"),m(a).is(m(t).key)]),onMousedown:B},[$("div",{ref_key:"thumb",ref:v,class:H(m(a).e("thumb")),style:D(m(S)),onMousedown:T},null,38)],34),[[ne,s.always||f.value]])]),_:1},8,["name"]))}});var F=Y(ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const _e=X({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Ee=x({__name:"bar",props:_e,setup(d,{expose:u}){const r=d,a=c(0),i=c(0);return u({handleScroll:o=>{if(o){const f=o.offsetHeight-g,l=o.offsetWidth-g;i.value=o.scrollTop*100/f*r.ratioY,a.value=o.scrollLeft*100/l*r.ratioX}}}),(o,f)=>(k(),J(ce,null,[U(F,{move:a.value,ratio:o.ratioX,size:o.width,always:o.always},null,8,["move","ratio","size","always"]),U(F,{move:i.value,ratio:o.ratioY,size:o.height,vertical:"",always:o.always},null,8,["move","ratio","size","always"])],64))}});var ke=Y(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const He=X({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:te([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Te={scroll:({scrollTop:d,scrollLeft:u})=>[d,u].every(E)},Re="ElScrollbar",Ce=x({name:Re}),Ne=x({...Ce,props:He,emits:Te,setup(d,{expose:u,emit:r}){const a=d,i=G("scrollbar");let v,o;const f=c(),l=c(),p=c(),b=c("0"),t=c("0"),S=c(),z=c(1),T=c(1),B=w(()=>{const e={};return a.height&&(e.height=j(a.height)),a.maxHeight&&(e.maxHeight=j(a.maxHeight)),[a.wrapStyle,e]}),L=w(()=>[a.wrapClass,i.e("wrap"),{[i.em("wrap","hidden-default")]:!a.native}]),R=w(()=>[i.e("view"),a.viewClass]),y=()=>{var e;l.value&&((e=S.value)==null||e.handleScroll(l.value),r("scroll",{scrollTop:l.value.scrollTop,scrollLeft:l.value.scrollLeft}))};function M(e,n){be(e)?l.value.scrollTo(e):E(e)&&E(n)&&l.value.scrollTo(e,n)}const O=e=>{E(e)&&(l.value.scrollTop=e)},C=e=>{E(e)&&(l.value.scrollLeft=e)},s=()=>{if(!l.value)return;const e=l.value.offsetHeight-g,n=l.value.offsetWidth-g,h=e**2/l.value.scrollHeight,_=n**2/l.value.scrollWidth,N=Math.max(h,a.minSize),P=Math.max(_,a.minSize);z.value=h/(e-h)/(N/(e-N)),T.value=_/(n-_)/(P/(n-P)),t.value=N+g<e?`${N}px`:"",b.value=P+g<n?`${P}px`:""};return V(()=>a.noresize,e=>{e?(v==null||v(),o==null||o()):({stop:v}=le(p,s),o=A("resize",s))},{immediate:!0}),V(()=>[a.maxHeight,a.height],()=>{a.native||q(()=>{var e;s(),l.value&&((e=S.value)==null||e.handleScroll(l.value))})}),ue(Q,ve({scrollbarElement:f,wrapElement:l})),fe(()=>{a.native||q(()=>{s()})}),me(()=>s()),u({wrapRef:l,update:s,scrollTo:M,setScrollTop:O,setScrollLeft:C,handleScroll:y}),(e,n)=>(k(),J("div",{ref_key:"scrollbarRef",ref:f,class:H(m(i).b())},[$("div",{ref_key:"wrapRef",ref:l,class:H(m(L)),style:D(m(B)),onScroll:y},[(k(),W(he(e.tag),{ref_key:"resizeRef",ref:p,class:H(m(R)),style:D(e.viewStyle)},{default:I(()=>[de(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?pe("v-if",!0):(k(),W(ke,{key:0,ref_key:"barRef",ref:S,height:t.value,width:b.value,always:e.always,"ratio-x":T.value,"ratio-y":z.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Pe=Y(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Le=ae(Pe);export{Le as E};
