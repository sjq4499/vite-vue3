import{_ as E,a as O}from"./index.fc30e23a.js";/* empty css                  */import{g as v,s as c,r as j}from"./localStorage.3eb338c9.js";import{f as H}from"./index.2dffc599.js";import{e as N,p as _,q as F,E as $,f as D,g as P,h as S,j as w,k as x,o as m,l as g,m as h,n as s,w as r,c as y,s as n,F as B,t as J}from"./vendor.41992c2b.js";import"./susu3.f7883a8f.js";const T=N({setup(){return{value1:_("2022.1.19\u3002\u6C6A\u6854 \u300218988429684\u3002 \u4E91\u5357\u7701\u3002\u6606\u660E\u5E02\u3002\u5B98\u6E21\u533A\u3002\u5927\u677F\u6865\u8857\u9053\u3002\u5C0F\u54E8\u6751\u3002\u4E91\u5357\u662F\u4E8B\u5B9E\u4E0A\u662F"),value:_(`\u65E5\u671F\uFF1A2022.1.19 
\u59D3\u540D\uFF1A\u6C6A\u6854 
\u624B\u673A\u53F7\uFF1A18988429684
\u7701\uFF1A \u4E91\u5357\u7701
\u5E02\uFF1A\u6606\u660E\u5E02
\u533A\uFF1A\u5B98\u6E21\u533A
\u8BE6\u7EC6\u5730\u5740\uFF1A\u5927\u677F\u6865\u8857\u9053\u5C0F\u54E8\u6751\u4E91\u5357\u662F\u4E8B\u5B9E\u4E0A\u662F
`),data:_([]),dataProp:F({\u65E5\u671F:"data",\u59D3\u540D:"name",\u624B\u673A\u53F7:"mobile",\u7701:"appName",\u5E02:"nickname",\u533A:"nickname2",\u8BE6\u7EC6\u5730\u5740:"nickname3"}),tableHeader:_(0)}},created(){let e=JSON.parse(v("tableData"));e&&(this.data=e);let a=JSON.parse(v("tableHeader"));a&&(this.tableHeader=a,this.headerChange())},computed:{},methods:{importFun(e){let a={};if(e===1){let l=this.value1.split("\u3002"),i=this.dataProp;l.length>Object.keys(i).length&&(l[5]=l.slice(5).join(""),console.log(l)),Object.values(i).forEach((o,u)=>{a[o]=l[u]}),this.value="",Object.keys(i).forEach((o,u)=>{this.value+=o+"\uFF1A"+a[i[o]]+`
`}),console.log(a,this.value)}else{let l=this.value.split(`
`).filter(i=>i!=="");for(var d=0;d<l.length;d++){var p=l[d].replace(":","\uFF1A").split("\uFF1A");a[this.dataProp[p[0]]]=p[1]}}this.data.push(a),c("tableData",JSON.stringify(this.data)),console.log(this.data)},exportFun(){this.data.length===0&&this.$message({type:"error",message:"\u6CA1\u6709\u6570\u636E"}),O(()=>import("./Export2Excel.9e67be4a.js"),[]).then(e=>{const a=Object.keys(this.dataProp),d=this.data.map(l=>Object.values(l));let p=H({},"md")+this.data[0].appName;e.export_json_to_excel({header:a,data:d,filename:p,autoWidth:!0,bookType:"xlsx"})})},deleteData(e){let a=e.$index;this.data.splice(a,1),c("tableData",JSON.stringify(this.data))},clearFun(){this.data=[],j("tableData")},headerChange(){c("tableHeader",JSON.stringify(this.tableHeader)),console.log(this.dataProp)},clearValue(){this.value=""}}}),R={class:"main"},I={style:{margin:"10px 0"}},U=n(" \u6309\u987A\u5E8F "),L=n("\u5BFC\u5165 "),q={style:{margin:"10px 0"}},z=n(" \u6309\u683C\u5F0F "),A=n("\u4E00\u952E\u6E05\u7A7A"),G=n("\u5BFC\u5165 "),W=n(" \u8868\u5934 "),K=n("\u5730\u5740"),M=n(" \u5217\u8868 "),Q=n("\u5BFC\u51FA "),X=n(" \u6E05\u7A7A\u6570\u636E"),Y=n("\u5220\u9664");function Z(e,a,d,p,l,i){const o=$,u=D,k=P,C=S,f=w,V=x;return m(),g("div",R,[h("div",I,[U,s(o,{type:"primary",onClick:a[0]||(a[0]=t=>e.importFun(1))},{default:r(()=>[L]),_:1})]),s(u,{modelValue:e.value1,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value1=t),placeholder:"",clearable:!0},null,8,["modelValue"]),h("div",q,[z,s(o,{type:"primary",onClick:e.clearValue},{default:r(()=>[A]),_:1},8,["onClick"]),s(o,{type:"primary",onClick:a[2]||(a[2]=t=>e.importFun(2))},{default:r(()=>[G]),_:1})]),s(u,{type:"textarea",autosize:{minRows:6},modelValue:e.value,"onUpdate:modelValue":a[3]||(a[3]=t=>e.value=t),placeholder:"\u8BF7\u8F93\u5165\u6570\u636E",clearable:!0},null,8,["modelValue"]),h("div",null,[W,s(C,{modelValue:e.tableHeader,"onUpdate:modelValue":a[4]||(a[4]=t=>e.tableHeader=t),onChange:e.headerChange},{default:r(()=>[s(k,{label:0},{default:r(()=>[K]),_:1})]),_:1},8,["modelValue","onChange"])]),h("h3",null,[M,s(o,{type:"primary",onClick:e.exportFun},{default:r(()=>[Q]),_:1},8,["onClick"]),s(o,{type:"primary",onClick:e.clearFun},{default:r(()=>[X]),_:1},8,["onClick"])]),(m(),y(V,{border:"",data:e.data,style:{width:"100%"},key:e.tableHeader},{default:r(()=>[(m(!0),g(B,null,J(e.dataProp,(t,b)=>(m(),y(f,{prop:t,label:b,key:t},null,8,["prop","label"]))),128)),s(f,{label:"\u64CD\u4F5C",width:"80px",fixed:"right"},{default:r(t=>[s(o,{type:"text",onClick:b=>e.deleteData(t)},{default:r(()=>[Y]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]))])}var ne=E(T,[["render",Z],["__scopeId","data-v-ee44e72c"]]);export{ne as default};