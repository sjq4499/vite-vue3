import{r as p,o as _,c as f,a as m,b as h,d as v,i as y}from"./vendor.51a4bfc5.js";const g=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};g();var E=(i,s)=>{const n=i.__vccOpts||i;for(const[t,e]of s)n[t]=e;return n};const L={};function O(i,s){const n=p("router-view");return _(),f(n)}var b=E(L,[["render",O]]);const P="modulepreload",l={},A="/vite-vue3/",c=function(s,n){return!n||n.length===0?s():Promise.all(n.map(t=>{if(t=`${A}${t}`,t in l)return;l[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":P,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e)return new Promise((u,d)=>{o.addEventListener("load",u),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s())},k=[{path:"/",redirect:"/table"},{path:"/table",name:"table",component:()=>c(()=>import("./table.146039a9.js"),["assets/table.146039a9.js","assets/table.43c37360.css","assets/index.de3599e5.js","assets/vendor.51a4bfc5.js"])},{path:"/upload",name:"upload",component:()=>c(()=>import("./upload.5576cf79.js"),["assets/upload.5576cf79.js","assets/upload.c87e9038.css","assets/index.de3599e5.js","assets/vendor.51a4bfc5.js"])},{path:"/dog",name:"dog",component:()=>c(()=>import("./dog.86be7ac7.js"),["assets/dog.86be7ac7.js","assets/dog.00ceea7b.css","assets/vendor.51a4bfc5.js"])},{path:"/scratchCard",name:"scratchCard",component:()=>c(()=>import("./scratchCard.71d85649.js"),["assets/scratchCard.71d85649.js","assets/scratchCard.ca806cae.css","assets/vendor.51a4bfc5.js"])}],x=m({history:h(),routes:k}),a=v(b);a.use(y);a.use(x);a.mount("#app");export{E as _,c as a};