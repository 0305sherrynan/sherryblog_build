import{r,o as v,a as f,d as h,u as w,b as x,w as g,c as y,e as k,f as E,g as l,v as c,h as t,i,j as d,F as B,_ as C,k as I}from"./index-dd2ca572.js";import{r as P}from"./imgInVite-5d539cd7.js";import{g as S}from"./daily-aa9b1408.js";import"./index-fc906e2e.js";function T(){const s=r(0);function o(){s.value=document.documentElement.scrollTop}return v(()=>{window.addEventListener("scroll",o)}),f(()=>{window.removeEventListener("scroll",o)}),{nowScrollPos:s}}const b=["src"],D=h({__name:"index",setup(s){let{nowScrollPos:o}=T(),n=r(!1),a=r(!1);w();const _=x(()=>C(()=>import("./Header-10707602.js"),["assets/Header-10707602.js","assets/index-dd2ca572.js","assets/index-4a2d31e8.css","assets/imgInVite-5d539cd7.js","assets/user-8d772601.js","assets/index-fc906e2e.js","assets/Header-abf3053c.css"])),u=async()=>{window.scrollTo({top:0,behavior:"smooth"});const e=await S();console.log(e)};return g(o,(e,p)=>{e>50?n.value=!0:n.value=!1,e>100?a.value=!0:a.value=!1}),(e,p)=>{const m=y("router-view");return k(),E(B,null,[l(i(t(_),{class:"header"},null,512),[[c,!t(n)]]),i(m),l(d("div",{style:{position:"fixed",bottom:"59px",right:"36px"},onClick:u},[d("img",{src:t(P)("rocket.svg"),alt:"",style:{width:"52px",height:"47px"}},null,8,b)],512),[[c,t(a)]])],64)}}});const F=I(D,[["__scopeId","data-v-6ea35102"]]);export{F as default};
