import{_ as x}from"./autoAudios-377c458e.js";import{_ as I,j as X,l as T,s as $,o as A,C as b,D as h,G as f,H as w,I as y,J as Y}from"./index-4914588f.js";const B={components:{AutoAudios:x},data(){return{}},computed:{},watch:{},mounted(){for(var e=document.getElementById("wrap"),r=e.getElementsByTagName("img"),c=r.length,p=360/c,i,d,a,v,o=0,s=0,m=0,_=-10,g,t=0;t<c;t++)r[t].style.transform="rotateY("+t*p+"deg) translateZ(350px)",r[t].style.transition="transform 1s "+(c-1-t)*.1+"s";l(),window.onresize=l;function l(){var n=document.documentElement.clientHeight;e.style.marginTop=n/2-180+"px"}document.ontouchstart=function(n){return n=n||window.event,a=n.changedTouches[0].clientX,v=event.changedTouches[0].clientY,this.ontouchmove=function(u){u=u||window.event,clearInterval(g),i=u.changedTouches[0].clientX,d=u.changedTouches[0].clientY,o=i-a,s=d-v,m+=o*.2,_-=s*.1,e.style.transform="rotateX("+_+"deg) rotateY("+m+"deg)",a=i,v=d},this.ontouchend=function(){this.ontouchmove=null,g=setInterval(function(){o*=.95,s*=.95,m+=o*.2,_-=s*.1,e.style.transform="rotateX("+_+"deg) rotateY("+m+"deg)",Math.abs(o)<.1&&Math.abs(s)<.1&&clearInterval(g)},13)},!1}}},E={id:"perspective"},H=$('<div id="wrap" data-v-6b1e6b47><img src="'+b+'" data-v-6b1e6b47><img src="'+h+'" data-v-6b1e6b47><img src="'+f+'" data-v-6b1e6b47><img src="'+w+'" data-v-6b1e6b47><img src="'+y+'" data-v-6b1e6b47><img src="'+Y+'" data-v-6b1e6b47><img src="'+b+'" data-v-6b1e6b47><img src="'+h+'" data-v-6b1e6b47><img src="'+f+'" data-v-6b1e6b47><img src="'+w+'" data-v-6b1e6b47><img src="'+y+'" data-v-6b1e6b47><img src="'+Y+'" data-v-6b1e6b47><p data-v-6b1e6b47></p></div>',1);function N(e,r,c,p,i,d){const a=x;return A(),X("div",E,[H,T(a)])}var M=I(B,[["render",N],["__scopeId","data-v-6b1e6b47"]]);export{M as default};
