require("script-loader");let S=require("xlsx");function _(a){for(var f=[],i=a.querySelectorAll("tr"),e=[],t=0;t<i.length;++t){for(var r=[],n=i[t],h=n.querySelectorAll("td"),c=0;c<h.length;++c){var u=h[c],v=u.getAttribute("colspan"),o=u.getAttribute("rowspan"),s=u.innerText;if(s!==""&&s==+s&&(s=+s),e.forEach(function(b){if(t>=b.s.r&&t<=b.e.r&&r.length>=b.s.c&&r.length<=b.e.c)for(var w=0;w<=b.e.c-b.s.c;++w)r.push(null)}),(o||v)&&(o=o||1,v=v||1,e.push({s:{r:t,c:r.length},e:{r:t+o-1,c:r.length+v-1}})),r.push(s!==""?s:null),v)for(var p=0;p<v-1;++p)r.push(null)}f.push(r)}return[f,e]}function l(a,f){f&&(a+=1462);var i=Date.parse(a);return(i-new Date(Date.UTC(1899,11,30)))/(24*60*60*1e3)}function y(a,f){for(var i={},e={s:{c:1e7,r:1e7},e:{c:0,r:0}},t=0;t!=a.length;++t)for(var r=0;r!=a[t].length;++r){e.s.r>t&&(e.s.r=t),e.s.c>r&&(e.s.c=r),e.e.r<t&&(e.e.r=t),e.e.c<r&&(e.e.c=r);var n={v:a[t][r]};if(n.v!=null){var h=S.utils.encode_cell({c:r,r:t});typeof n.v=="number"?n.t="n":typeof n.v=="boolean"?n.t="b":n.v instanceof Date?(n.t="n",n.z=S.SSF._table[14],n.v=l(n.v)):n.t="s",i[h]=n}}return e.s.c<1e7&&(i["!ref"]=S.utils.encode_range(e)),i}function g(){if(!(this instanceof g))return new g;this.SheetNames=[],this.Sheets={}}function x(a){for(var f=new ArrayBuffer(a.length),i=new Uint8Array(f),e=0;e!=a.length;++e)i[e]=a.charCodeAt(e)&255;return f}function m(a){var f=document.getElementById(a),i=_(f),e=i[1],t=i[0],r="SheetJS",n=new g,h=y(t);h["!merges"]=e,n.SheetNames.push(r),n.Sheets[r]=h;var c=S.write(n,{bookType:"xlsx",bookSST:!1,type:"binary"});saveAs(new Blob([x(c)],{type:"application/octet-stream"}),"test.xlsx")}function A({header:a,data:f,filename:i,autoWidth:e=!0,bookType:t="xlsx"}={}){i=i||"excel-list",f=[...f],f.unshift(a);var r="SheetJS",n=new g,h=y(f);if(e){const u=f.map(o=>o.map(s=>s==null?{wch:10}:s.toString().charCodeAt(0)>255?{wch:s.toString().length*2}:{wch:s.toString().length}));let v=u[0];for(let o=1;o<u.length;o++)for(let s=0;s<u[o].length;s++)v[s].wch<u[o][s].wch&&(v[s].wch=u[o][s].wch);h["!cols"]=v}n.SheetNames.push(r),n.Sheets[r]=h;var c=S.write(n,{bookType:t,bookSST:!1,type:"binary"});saveAs(new Blob([x(c)],{type:"application/octet-stream"}),`${i}.${t}`)}export{A as export_json_to_excel,m as export_table_to_excel};
