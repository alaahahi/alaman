import{r,m as n,o as s,a as l}from"./app.8c1d208a.js";const d=["value"],m={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(t){const e=r(null);return n(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),(u,o)=>(s(),l("input",{class:"border-gray-300 focus:border-indigo-300 dark:bg-gray-800 dark:text-gray-200 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:t.modelValue,onInput:o[0]||(o[0]=a=>u.$emit("update:modelValue",a.target.value)),ref_key:"input",ref:e},null,40,d))}};export{m as _};
