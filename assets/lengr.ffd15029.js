/* empty css                  *//* empty css                 */import{_ as m,d as c,au as _,r as i,k as g,E as f,a as h,av as v,o as l,g as u,F as V,n as D,i as o,w as a,j as k,m as n,ar as y,h as $}from"./index.1160b016.js";const w=c({setup(){return{routes:_.filter(e=>e.meta&&e.meta.activeName),centerDialogVisible:i(!1),password:i(""),routeDetail:g({})}},methods:{goPage(e){if(e.name==="lengr"){this.$message({message:"\u4F60\u5DF2\u7ECF\u5728\u6B64\u9875\u9762\u4E86",type:"error"});return}e.meta.password?(this.centerDialogVisible=!0,this.routeDetail=e):this.$router.push(e.path)},confirmFn(){this.routeDetail.meta.password===this.password?this.$router.push(this.routeDetail.path):this.$message({type:"error",message:"\u5BC6\u7801\u4E0D\u5BF9\u54DF"})}}}),C={class:"lengr_main"},b={class:"dialog-footer"},B=n("\u53D6\u6D88"),E=n("\u786E\u5B9A");function N(e,s,F,I,P,U){const r=f,p=h,d=v;return l(),u("div",C,[(l(!0),u(V,null,D(e.routes,t=>(l(),k(r,{type:"success",class:"list",key:t.name,onClick:j=>e.goPage(t)},{default:a(()=>[n(y(t.meta.activeName),1)]),_:2},1032,["onClick"]))),128)),o(d,{modelValue:e.centerDialogVisible,"onUpdate:modelValue":s[2]||(s[2]=t=>e.centerDialogVisible=t),title:"\u8BF7\u8F93\u5165\u5BC6\u7801",width:"300px",center:""},{footer:a(()=>[$("span",b,[o(r,{onClick:s[1]||(s[1]=t=>e.centerDialogVisible=!1)},{default:a(()=>[B]),_:1}),o(r,{type:"primary",onClick:e.confirmFn},{default:a(()=>[E]),_:1},8,["onClick"])])]),default:a(()=>[o(p,{modelValue:e.password,"onUpdate:modelValue":s[0]||(s[0]=t=>e.password=t),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}var T=m(w,[["render",N],["__scopeId","data-v-08dc97ea"]]);export{T as default};
