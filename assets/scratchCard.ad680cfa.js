import{e as d,p as s,q as u,o,l as a,$ as g,m,a0 as f,O as p,S as v}from"./vendor.01fc63fb.js";import{b as h}from"./index.97bdc515.js";import{_}from"./index.fa20212a.js";import"./susu3.f7883a8f.js";const y=d({setup(){return{c1:s(""),ctx:s(""),ismousedown:s(!1),fontem:s(""),isScratch:s(!1),showPrize:s(!1),getImageUrl:h,imageList:s([{url:"images/1.gif",comment:"\u5E73\u5E95\u9505"},{url:null,comment:"\u5C41"},{url:null,comment:"\u5C41"},{url:"images/3.gif",comment:"\u8868\u60C5"},{url:"images/1.jpg",comment:"\u7F8E\u5973"},{url:"images/2.jpg",comment:"\u7F8E\u5973"},{url:"images/3.jpg",comment:"\u7F8E\u5973"},{url:"images/4.jpg",comment:"\u7F8E\u5973"},{url:"images/5.jpg",comment:"\u7F8E\u5973"},{url:"images/7.png",comment:"\u7F8E\u5973"},{url:"images/6.png",comment:"\u7F8E\u5973"}]),imgObj:u({url:"",comment:""})}},mounted(){this.fontem=parseInt(window.getComputedStyle(document.documentElement,null)["font-size"]),this.scratchCard=document.getElementById("scratch_card"),this.c1=document.getElementById("c1"),this.c1.width=this.c1.clientWidth,this.c1.height=this.c1.clientHeight,this.ctx=this.c1.getContext("2d"),this.initCanvas()},created(){let t=parseInt(Math.random()*(this.imageList.length+10)),e=this.imageList[t]||this.imageList[0];this.imgObj.url=e.url?h(e.url):null,this.imgObj.comment=e.comment,console.log(e,t)},methods:{initCanvas(){this.ctx.globalCompositeOperation="source-over",this.ctx.fillStyle="#e5e5e5",this.ctx.fillRect(0,0,this.c1.clientWidth,this.c1.clientHeight),this.ctx.fill(),this.ctx.font="Bold 24px Arial",this.ctx.textAlign="center",this.ctx.fillStyle="#a0a0a0",this.ctx.globalCompositeOperation="destination-out"},touchstart(t){t.preventDefault(),this.ismousedown=!0},touchend(t){sessionStorage.setItem("isScratch",!0),t.preventDefault();for(var e=this.ctx.getImageData(0,0,this.c1.width,this.c1.height),c=0,i=3;i<e.data.length;i+=4)e.data[i]==0&&c++;c>=e.data.length/8&&(this.isScratch=!0),this.ismousedown=!1},touchmove(t){if(this.showPrize=!0,t.preventDefault(),this.ismousedown){t.changedTouches&&(t=t.changedTouches[t.changedTouches.length-1]);var e=document.getElementById("scratch_card").offsetTop,c=this.c1.offsetLeft,i=this.c1.offsetTop+e,r=(t.clientX+document.body.scrollLeft||t.pageX)-c||0,l=(t.clientY+document.body.scrollTop||t.pageY)-i||0;this.ctx.beginPath(),this.ctx.arc(r,l,this.fontem*.5,0,Math.PI*2,!0),this.ctx.fill()}}}}),b={class:"container",id:"scratch_card"},w={key:0,class:"title"},j={key:1,class:"title"},S={class:"award_box"},x={key:0,class:"award"},C=["src"],I={key:1,class:"comment"};function O(t,e,c,i,r,l){return o(),a("div",b,[t.isScratch?(o(),a("div",j,"\u606D\u559C\u4F60\u83B7\u5F97"+g(t.imgObj.comment)+"\u4E00\u4E2A",1)):(o(),a("div",w,"\u522E\u5F00\u6709\u5956")),m("div",S,[t.showPrize?(o(),a("div",x,[t.imgObj.url?(o(),a("img",{key:0,src:t.imgObj.url,alt:""},null,8,C)):(o(),a("span",I,"\u5565\u4E5F\u6CA1\u6709\uFF0C\u5565\u4E5F\u4E0D\u662F"))])):f("",!0),p(m("canvas",{id:"c1",class:"canvas",onTouchmove:e[0]||(e[0]=(...n)=>t.touchmove&&t.touchmove(...n)),onTouchstart:e[1]||(e[1]=(...n)=>t.touchstart&&t.touchstart(...n)),onTouchend:e[2]||(e[2]=(...n)=>t.touchend&&t.touchend(...n))},null,544),[[v,!t.isScratch]])])])}var L=_(y,[["render",O],["__scopeId","data-v-207d4fbb"]]);export{L as default};
