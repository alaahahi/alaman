import{l as h,a as n,j as a,k as e,c as y,w as m,f as i,F as b,o as d,H as g,b as s,i as w,L as v,p as N,t as _}from"./app.1146821b.js";import{_ as k}from"./AuthenticatedLayout.6af70782.js";import{_ as u,a as c}from"./TextInput.1140b97a.js";const V=s("h2",{class:"font-semibold text-xl text-gray-800 leading-tight dark:text-gray-200"}," \u062A\u0639\u062F\u064A\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ",-1),S={class:"py-12"},B={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},F={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},T={class:"p-6 dark:bg-gray-900"},U={className:"flex items-center justify-between mb-6"},$=["onSubmit"],D={className:"flex flex-col"},H={className:"mb-4"},j={key:0,className:"text-red-600"},A={className:"mb-4"},C={key:0,className:"text-red-600"},E={className:"mb-4"},L={key:0,className:"text-red-600"},M=s("div",{className:"mt-4"},[s("button",{type:"submit",className:"px-6 py-2 font-bold text-white bg-rose-500 rounded"}," Save ")],-1),I={__name:"Edit",props:{user:Array,url:String,usersType:Array,userSeles:String,userHospital:String,userDoctor:String},setup(f){const o=f,t=h({name:o.user.name,email:o.user.email,password:o.user.password,userType:o.user.userType,parent_id:o.user.parent_id,percentage:o.user.percentage}),x=()=>{t.put(route("users.update",o.user.id))};return(p,r)=>(d(),n(b,null,[a(e(g),{title:"Dashboard"}),p.$page.props.auth.user.type_id==1?(d(),y(k,{key:0},{header:m(()=>[V]),default:m(()=>[s("div",S,[s("div",B,[s("div",F,[s("div",T,[s("div",U,[a(e(v),{className:"px-6 py-2 text-white bg-gray-500 rounded-md focus:outline-none",href:p.route("users.index")},{default:m(()=>[w(" \u0627\u0644\u0639\u0648\u062F\u0629 ")]),_:1},8,["href"])]),s("form",{name:"createForm",onSubmit:N(x,["prevent"])},[s("div",D,[s("div",H,[a(u,{for:"name",value:"\u0627\u0644\u0623\u0633\u0645"}),a(c,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":r[0]||(r[0]=l=>e(t).name=l),autofocus:""},null,8,["modelValue"]),e(t).errors.name?(d(),n("span",j,_(e(t).errors.name),1)):i("",!0)]),s("div",A,[a(u,{for:"email",value:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"}),a(c,{id:"email",type:"text",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":r[1]||(r[1]=l=>e(t).email=l),autofocus:""},null,8,["modelValue"]),e(t).errors.email?(d(),n("span",C," Sorry,Username is not available ")):i("",!0)]),s("div",E,[a(u,{for:"password",value:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"}),a(c,{id:"password",type:"text",class:"mt-1 block w-full",modelValue:e(t).password,"onUpdate:modelValue":r[2]||(r[2]=l=>e(t).password=l),autofocus:""},null,8,["modelValue"]),e(t).errors.password?(d(),n("span",L,_(e(t).errors.password),1)):i("",!0)])]),M],40,$)])])])])]),_:1})):i("",!0)],64))}};export{I as default};
