import{_ as u,d,r as s,t as n,a as p,j as o,k as r,u as f,v as j,x as v,y as _,z as y,n as g,o as a}from"./index-ddf0df8c.js";const b=d({setup(){return{c1:s(""),ctx:s(""),ismousedown:s(!1),fontem:s(""),isScratch:s(!1),showPrize:s(!1),getImageUrl:n,imageList:s([{url:"images/1.gif",comment:"\u5E73\u5E95\u9505"},{url:null,comment:"\u5C41"},{url:null,comment:"\u5C41"},{url:"images/3.gif",comment:"\u8868\u60C5"},{url:"images/1.jpg",comment:"\u7F8E\u5973"},{url:"images/2.jpg",comment:"\u7F8E\u5973"},{url:"images/3.jpg",comment:"\u7F8E\u5973"},{url:"images/4.jpg",comment:"\u7F8E\u5973"},{url:"images/5.jpg",comment:"\u7F8E\u5973"},{url:"images/6.jpg",comment:"\u7F8E\u5973"},{url:"images/7.jpg",comment:"\u7F8E\u5973"},{url:"images/8.jpg",comment:"\u7F8E\u5973"},{url:"images/9.jpg",comment:"\u7F8E\u5973"},{url:"images/10.jpg",comment:"\u7F8E\u5973"},{url:"images/11.jpg",comment:"\u7F8E\u5973"},{url:"images/12.jpg",comment:"\u7F8E\u5973"},{url:"images/13.jpg",comment:"\u7F8E\u5973"},{url:"images/14.jpg",comment:"\u7F8E\u5973"},{url:"images/15.jpg",comment:"\u6A80\u846D\u8001\u5A46",time:2e3},{url:"images/16.jpg",comment:"\u6A80\u846D\u8001\u5A46",time:2e3},{url:"images/17.jpg",comment:"\u7F8E\u5973"},{url:"images/18.jpg",comment:"\u7F8E\u5973"},{url:"images/19.jpg",comment:"\u5C0F\u4E03\u59D0\u59D0",time:2e3},{url:"images/20.jpg",comment:"\u5C0F\u54E5\u54E5"},{url:"images/21.jpg",comment:"\u5C0F\u54E5\u54E5"},{url:"images/22.jpg",comment:"\u7F8E\u5973"},{url:"images/7.png",comment:"\u7F8E\u5973"},{url:"images/6.png",comment:"\u7F8E\u5973"},{url:"img/xiaoyi1.jpg",comment:"\u5C0F\u6613",time:500},{url:"img/susu.jpg",comment:"\u82CF\u82CF",time:500}]),imgObj:p({url:"",comment:""})}},mounted(){this.fontem=parseInt(window.getComputedStyle(document.documentElement,null)["font-size"]),this.scratchCard=document.getElementById("scratch_card"),this.c1=document.getElementById("c1"),this.c1.width=this.c1.clientWidth,this.c1.height=this.c1.clientHeight,this.ctx=this.c1.getContext("2d"),this.initCanvas()},created(){let t=this.$route.query.index?this.$route.query.index:parseInt(Math.random()*(this.imageList.length+10)),e=this.imageList[t]||this.imageList[0];this.imgObj=e,this.imgObj.url=e.url?n(e.url):null,console.log(e,t)},methods:{initCanvas(){this.ctx.globalCompositeOperation="source-over",this.ctx.fillStyle="#e5e5e5",this.ctx.fillRect(0,0,this.c1.clientWidth,this.c1.clientHeight),this.ctx.fill(),this.ctx.font="Bold 24px Arial",this.ctx.textAlign="center",this.ctx.fillStyle="#a0a0a0",this.ctx.globalCompositeOperation="destination-out"},touchstart(t){t.preventDefault(),this.ismousedown=!0},touchend(t){sessionStorage.setItem("isScratch",!0),t.preventDefault();for(var e=this.ctx.getImageData(0,0,this.c1.width,this.c1.height),m=0,i=3;i<e.data.length;i+=4)e.data[i]==0&&m++;m>=e.data.length/8&&(this.isScratch=!0),this.ismousedown=!1},touchmove(t){if(this.showPrize=!0,t.preventDefault(),this.ismousedown){t.changedTouches&&(t=t.changedTouches[t.changedTouches.length-1]);var e=document.getElementById("scratch_card").offsetTop,m=this.c1.offsetLeft,i=this.c1.offsetTop+e,l=(t.clientX+document.body.scrollLeft||t.pageX)-m||0,h=(t.clientY+document.body.scrollTop||t.pageY)-i||0;this.ctx.beginPath(),this.ctx.arc(l,h,this.fontem*.5,0,Math.PI*2,!0),this.ctx.fill()}}},watch:{isScratch(){this.isScratch&&this.imgObj.time&&setTimeout(()=>{this.imgObj=this.imageList[0],this.imgObj.url=n(this.imgObj.url),this.isScratch=!1,this.$message({type:"success",message:"\u522B\u7785\u4E86\uFF0C\u6CA1\u4E86"})},this.imgObj.time)}}}),w={class:"container",id:"scratch_card"},x={key:0,class:"title"},S={key:1,class:"title"},O=g(" \u606D\u559C\u4F60\u83B7\u5F97"),C={class:"color-red"},T=g("\u4E00\u4E2A "),I={class:"award_box"},k={key:0,class:"award"},B=["src"],L={key:1,class:"comment"};function $(t,e,m,i,l,h){return a(),o("div",w,[t.isScratch?(a(),o("div",S,[O,r("span",C,f(t.imgObj.comment),1),T])):(a(),o("div",x,"\u522E\u5F00\u6709\u5956")),r("div",I,[t.showPrize?(a(),o("div",k,[t.imgObj.url?(a(),o("img",{key:0,class:j({auto_img:t.isScratch}),src:t.imgObj.url,alt:""},null,10,B)):(a(),o("span",L,"\u5565\u4E5F\u6CA1\u6709\uFF0C\u5565\u4E5F\u4E0D\u662F"))])):v("",!0),_(r("canvas",{id:"c1",class:"canvas",onTouchmove:e[0]||(e[0]=(...c)=>t.touchmove&&t.touchmove(...c)),onTouchstart:e[1]||(e[1]=(...c)=>t.touchstart&&t.touchstart(...c)),onTouchend:e[2]||(e[2]=(...c)=>t.touchend&&t.touchend(...c))},null,544),[[y,!t.isScratch]])])])}var D=u(b,[["render",$],["__scopeId","data-v-5fc0457d"]]);export{D as default};
