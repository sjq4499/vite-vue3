import{_ as y}from"./index.82985736.js";import{o as Y,l as X,_ as I}from"./vendor.58ea2c89.js";var v="/vite-vue3/assets/susu.a4faac56.jpg",p="/vite-vue3/assets/susu2.9e35d467.jpg",g="/vite-vue3/assets/susu3.5e50dd80.jpg";const T={components:{},data(){return{}},computed:{},watch:{},mounted(){for(var a=document.getElementById("wrap"),o=a.getElementsByTagName("img"),n=o.length,h=360/n,c,d,f,_,e=0,s=0,i=0,m=-10,l,t=0;t<n;t++)o[t].style.transform="rotateY("+t*h+"deg) translateZ(350px)",o[t].style.transition="transform 1s "+(n-1-t)*.1+"s";w(),window.onresize=w;function w(){var r=document.documentElement.clientHeight;a.style.marginTop=r/2-180+"px"}document.ontouchstart=function(r){return r=r||window.event,f=r.changedTouches[0].clientX,_=event.changedTouches[0].clientY,this.ontouchmove=function(u){u=u||window.event,clearInterval(l),c=u.changedTouches[0].clientX,d=u.changedTouches[0].clientY,e=c-f,s=d-_,i+=e*.2,m-=s*.1,a.style.transform="rotateX("+m+"deg) rotateY("+i+"deg)",f=c,_=d},this.ontouchend=function(){this.ontouchmove=null,l=setInterval(function(){e*=.95,s*=.95,i+=e*.2,m-=s*.1,a.style.transform="rotateX("+m+"deg) rotateY("+i+"deg)",Math.abs(e)<.1&&Math.abs(s)<.1&&clearInterval(l)},13)},!1}}},x={id:"perspective"},B=I('<div id="wrap" data-v-33f4076a><img src="'+v+'" data-v-33f4076a><img src="'+p+'" data-v-33f4076a><img src="'+g+'" data-v-33f4076a><img src="'+v+'" data-v-33f4076a><img src="'+p+'" data-v-33f4076a><img src="'+g+'" data-v-33f4076a><img src="'+v+'" data-v-33f4076a><img src="'+p+'" data-v-33f4076a><img src="'+g+'" data-v-33f4076a><img src="'+v+'" data-v-33f4076a><img src="'+g+'" data-v-33f4076a><p data-v-33f4076a></p></div>',1),E=[B];function $(a,o,n,h,c,d){return Y(),X("div",x,E)}var k=y(T,[["render",$],["__scopeId","data-v-33f4076a"]]);export{k as default};
