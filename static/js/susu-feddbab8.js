import{_ as y,j as Y,o as X,s as I,K as v,L as p,M as f}from"./index-ddf0df8c.js";const T={components:{},data(){return{}},computed:{},watch:{},mounted(){for(var a=document.getElementById("wrap"),s=a.getElementsByTagName("img"),r=s.length,h=360/r,c,d,g,_,e=0,n=0,i=0,m=-10,l,t=0;t<r;t++)s[t].style.transform="rotateY("+t*h+"deg) translateZ(350px)",s[t].style.transition="transform 1s "+(r-1-t)*.1+"s";w(),window.onresize=w;function w(){var o=document.documentElement.clientHeight;a.style.marginTop=o/2-180+"px"}document.ontouchstart=function(o){return o=o||window.event,g=o.changedTouches[0].clientX,_=event.changedTouches[0].clientY,this.ontouchmove=function(u){u=u||window.event,clearInterval(l),c=u.changedTouches[0].clientX,d=u.changedTouches[0].clientY,e=c-g,n=d-_,i+=e*.2,m-=n*.1,a.style.transform="rotateX("+m+"deg) rotateY("+i+"deg)",g=c,_=d},this.ontouchend=function(){this.ontouchmove=null,l=setInterval(function(){e*=.95,n*=.95,i+=e*.2,m-=n*.1,a.style.transform="rotateX("+m+"deg) rotateY("+i+"deg)",Math.abs(e)<.1&&Math.abs(n)<.1&&clearInterval(l)},13)},!1}}},x={id:"perspective"},B=I('<div id="wrap" data-v-33f4076a><img src="'+v+'" data-v-33f4076a><img src="'+p+'" data-v-33f4076a><img src="'+f+'" data-v-33f4076a><img src="'+v+'" data-v-33f4076a><img src="'+p+'" data-v-33f4076a><img src="'+f+'" data-v-33f4076a><img src="'+v+'" data-v-33f4076a><img src="'+p+'" data-v-33f4076a><img src="'+f+'" data-v-33f4076a><img src="'+v+'" data-v-33f4076a><img src="'+f+'" data-v-33f4076a><p data-v-33f4076a></p></div>',1),E=[B];function $(a,s,r,h,c,d){return X(),Y("div",x,E)}var b=y(T,[["render",$],["__scopeId","data-v-33f4076a"]]);export{b as default};
