import{a as k,c as C}from"./article-5c4a8d28.js";import{d as g,u as x,r as p,e as c,f as i,F as A,n as w,B as L,h as m,j as v,t as f,k as h,m as _,y as B,i as d}from"./index-dd2ca572.js";import{B as N}from"./Banner-1ec366b1.js";import{A as b}from"./ArticleLists-b0b74f47.js";import{D}from"./index-5e0a0abf.js";import"./index-fc906e2e.js";const $={class:"sortcount-box"},q=["onClick"],I=g({__name:"SortCount",props:{sortCountList:null},emits:["clickSort"],setup(y,{emit:t}){const e=y,a=x();let r=p();const n=async o=>{r.value=o,await a.push({name:"category",query:{sortName:o}}),t("clickSort")};return(o,u)=>(c(),i("div",$,[(c(!0),i(A,null,w(e.sortCountList,(s,l)=>(c(),i("div",{class:L(["each-box",{clickBox:m(r)==s.sortName}]),key:l,onClick:S=>n(s.sortName)},[v("span",null,f(s.sortName),1),v("div",null,f(s.sortCount),1)],10,q))),128))]))}});const R=h(I,[["__scopeId","data-v-9a64cc22"]]),E={class:"category-box"},F={class:"category-info"},T=g({__name:"index",async setup(y){let t,e;const a=p(!0),r=x(),{data:n}=([t,e]=_(()=>k()),t=await t,e(),t);let o=[];const u=p(!1);let s=B([]);s=([t,e]=_(async()=>([t,e]=_(()=>C(r.currentRoute.value.query.sortName)),t=await t,e(),t).data),t=await t,e(),t);const l=async()=>{s=await(await C(r.currentRoute.value.query.sortName)).data,a.value=!a.value};return u.value=D(n),u.value==!0&&(o=n),(S,V)=>(c(),i("div",E,[d(N),v("div",F,[d(R,{sortCountList:m(o),style:{"margin-top":"30px",width:"860px"},onClickSort:l},null,8,["sortCountList"]),d(b,{userArticleLists:m(s),routeChange:a.value},null,8,["userArticleLists","routeChange"])])]))}});const M=h(T,[["__scopeId","data-v-e5bd7fc0"]]);export{M as default};
