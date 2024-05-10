import{r as i,o as c,c as K,w as f,a as m,b as e,d as Q,n as E,t as o,e as T,v as M,f as He,g as b,F as C,h as U,i as x,T as X,u as Ze,j as p,H as je,k as _,l as Re}from"./app.8c1d208a.js";import{_ as Le}from"./AuthenticatedLayout.10677f68.js";/* empty css                                              */import{M as qe,_ as ze,a as Pe,b as We}from"./ModalDel.77453be8.js";import{_ as Ye,a as Je,b as Ke,i as Qe}from"./imags.e5f98188.js";import{_ as I}from"./InputLabel.6d0e785f.js";import{_ as j}from"./TextInput.efd30ae7.js";import{p as z}from"./print.299aa9fd.js";/* empty css                                                            */import{a as $}from"./index.bd2d44f5.js";import{t as Xe}from"./trash.ac4d66d3.js";import{W as et}from"./v3-infinite-loading.es.b3aa2832.js";import{d as tt}from"./debounce.da6e4472.js";/* empty css                                                         */import"./Uploader.b754c7e3.js";/* empty css                                                                 */const at={key:0,class:"modal-mask"},st={class:"modal-wrapper max-h-[80vh]"},ot={class:"modal-container dark:bg-gray-900 overflow-auto max-h-[80vh]"},rt={class:"modal-header"},dt={class:"modal-body"},lt={class:"text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"},nt={class:"flex flex-wrap -mb-px"},it={key:0},ct=e("h1",{class:"text-center dark:text-gray-200 mt-4"}," \u0627\u0636\u0627\u0641\u0629 \u062F\u0641\u0639\u0629",-1),ut={className:"mb-4 mx-5"},mt={class:"dark:text-gray-200",for:"expens_amount"},yt={className:"mb-4 mx-5"},pt={class:"dark:text-gray-200",for:"expenses_id"},bt={className:"mb-4 mx-5"},gt={class:"dark:text-gray-200",for:"expens_amount"},ht=["value"],ft={className:"mb-4 mx-5"},xt={class:"dark:text-gray-200",for:"note"},_t={key:1},vt=e("h1",{class:"text-center dark:text-gray-200 mt-4"}," \u0633\u062C\u0644 \u0627\u0644\u062D\u0648\u0644\u0627\u062A",-1),kt={class:"relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mb-5"},$t={class:"w-full text-sm text-right text-gray-500 dark:text-gray-200 dark:text-gray-400 text-center"},wt={class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center"},Dt={class:"bg-rose-500 text-gray-100 rounded-l-lg mb-2 sm:mb-0"},Nt=e("th",{className:"px-1 py-2 text-base"},"\u0631\u0642\u0645 \u0627\u0644\u0648\u0635\u0644",-1),Ct={className:"px-1 py-2 text-base"},At=e("th",{className:"px-1 py-2 text-base"},"\u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641",-1),Tt=e("th",{className:"px-1 py-2 text-base"},"\u0627\u0644\u0645\u0628\u0644\u063A \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631",-1),Mt=e("th",{className:"px-1 py-2 text-base"},"\u0645\u0644\u0627\u062D\u0638\u0629",-1),Et={scope:"col",class:"px-1 py-2 text-base print:hidden",style:{width:"250px"}},Vt={class:"text-center px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Bt=e("td",null,null,-1),It=e("td",null,null,-1),Ut=e("td",null,null,-1),St=e("td",null,null,-1),Gt={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Ot=["href"],Ft={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Ht={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Zt={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},jt={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Rt={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Lt={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},qt=["href"],zt={class:"modal-footer my-2"},Pt={class:"flex flex-row"},Wt={class:"basis-1/2 px-4"},Yt={class:"basis-1/2 px-4"},Jt=["disabled"],Kt={__name:"ModalAddGenExpenses",props:{show:Boolean,company:Array,color:Array,carModel:Array,name:Array,client:Array,user:Array,expenses:Array,GenExpenses:Array,formData:Object},setup(r){const g=i("add"),v=y=>{g.value=y};return(y,u)=>(c(),K(X,{name:"modal"},{default:f(()=>{var l;return[r.show?(c(),m("div",at,[e("div",st,[e("div",ot,[e("div",rt,[Q(y.$slots,"header")]),e("div",dt,[e("div",lt,[e("ul",nt,[e("li",{class:"mr-2",onClick:u[0]||(u[0]=d=>v("add"))},[e("button",{class:E(["inline-block p-4 border-b-2 border-transparent rounded-t-lg",g.value=="add"?"dark:text-blue-500 dark:border-blue-500":"hover:text-gray-600 hover:border-gray-300"])}," \u0627\u0636\u0627\u0641\u0629 ",2)]),e("li",{class:"mr-2",onClick:u[1]||(u[1]=d=>v("record"))},[e("button",{class:E(["inline-block p-4 border-b-2 border-transparent rounded-t-lg",g.value=="record"?"dark:text-blue-500 dark:border-blue-500":"hover:text-gray-600 hover:border-gray-300"])}," \u0627\u0644\u0633\u062C\u0644 ",2)])])]),g.value=="add"?(c(),m("div",it,[e("div",null,[ct,e("div",ut,[e("label",mt,o(y.$t("amount")),1),T(e("input",{id:"expens_amount",type:"number",class:"mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900","onUpdate:modelValue":u[2]||(u[2]=d=>r.formData.amount=d)},null,512),[[M,r.formData.amount]])]),e("div",yt,[e("label",pt,o(y.$t("factor")),1),T(e("input",{id:"note_expens",type:"text",class:"mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900","onUpdate:modelValue":u[3]||(u[3]=d=>r.formData.factor=d)},null,512),[[M,r.formData.factor]])]),e("div",bt,[e("label",gt,o(y.$t("result")),1),e("input",{id:"expens_amount",type:"number",class:"mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900",value:(r.formData.amount/r.formData.factor).toFixed(1)},null,8,ht)]),e("div",ft,[e("label",xt,o(y.$t("note")),1),T(e("input",{id:"note",type:"text",class:"mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900","onUpdate:modelValue":u[4]||(u[4]=d=>r.formData.note=d)},null,512),[[M,r.formData.note]])])])])):(c(),m("div",_t,[vt,e("div",kt,[e("table",$t,[e("thead",wt,[e("tr",Dt,[Nt,e("th",Ct,o(y.$t("date")),1),At,Tt,Mt,e("th",Et,o(y.$t("execute")),1)])]),e("tbody",null,[e("tr",Vt,[Bt,It,Ut,St,e("td",Gt,[e("a",{target:"_blank",style:{display:"inline-flex"},href:`/api/getIndexAccountsSelas?user_id=${(l=r.GenExpenses[0])==null?void 0:l.user_id}&print=5`,tabIndex:"1",class:"px-4 py-1 text-white m-1 bg-blue-500 rounded"},[He(" \u062C\u0645\u064A\u0639 \u0627\u0644\u062F\u0641\u0639\u0627\u062A "),b(z)],8,Ot)])]),(c(!0),m(C,null,U(r.GenExpenses,d=>{var n;return c(),m("tr",{key:d.id,class:"text-center"},[e("td",Ft,o(d.id),1),e("td",Ht,o((n=d==null?void 0:d.created_at)==null?void 0:n.slice(0,19).replace("T"," ")),1),e("td",Zt,o(d.factor),1),e("td",jt,o(d.amount),1),e("td",Rt,o(d.reason),1),e("td",Lt,[e("a",{target:"_blank",style:{display:"inline-flex"},href:`/api/getIndexAccountsSelas?user_id=${d.user_id}&print=3&transactions_id=${d.transaction_id}`,tabIndex:"1",class:"px-4 py-1 text-white m-1 bg-green-500 rounded"},[b(z)],8,qt)])])}),128))])])])]))]),e("div",zt,[e("div",Pt,[e("div",Wt,[e("button",{class:"modal-default-button py-3 bg-gray-500 rounded",onClick:u[5]||(u[5]=d=>{y.$emit("close"),g.value="add"})},o(y.$t("cancel")),1)]),e("div",Yt,[e("button",{class:"modal-default-button py-3 bg-rose-500 rounded col-6",onClick:u[6]||(u[6]=d=>{y.$emit("a",r.formData),r.formData=""}),disabled:!r.formData.amount},o(y.$t("yes")),9,Jt)])])])])])])):x("",!0)]}),_:3}))}};const Qt={key:0,class:"modal-mask"},Xt={class:"modal-wrapper max-h-[80vh]"},ea={class:"modal-container dark:bg-gray-900 overflow-auto max-h-[80vh]"},ta={class:"modal-header"},aa={class:"modal-body"},sa={class:"text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"},oa={class:"flex flex-wrap -mb-px"},ra={key:0},da=e("h1",{class:"text-center dark:text-gray-200 mt-4"}," \u0627\u0636\u0627\u0641\u0629 \u062F\u0641\u0639\u0629",-1),la={className:"mb-4 mx-5"},na=e("label",{class:"dark:text-gray-200",for:"expens_amount"},"\u0627\u0644\u0645\u0628\u0644\u063A \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631",-1),ia={className:"mb-4 mx-5"},ca={class:"dark:text-gray-200",for:"note"},ua={key:1},ma=e("h1",{class:"text-center dark:text-gray-200 mt-4"}," \u0633\u062C\u0644 \u0627\u0644\u062D\u0648\u0644\u0627\u062A",-1),ya={class:"relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mb-5"},pa={class:"w-full text-sm text-right text-gray-500 dark:text-gray-200 dark:text-gray-400 text-center"},ba={class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center"},ga={class:"bg-rose-500 text-gray-100 rounded-l-lg mb-2 sm:mb-0"},ha=e("th",{className:"px-1 py-2 text-base"},"\u0631\u0642\u0645 \u0627\u0644\u0648\u0635\u0644",-1),fa={className:"px-1 py-2 text-base"},xa=e("th",{className:"px-1 py-2 text-base"},"\u0627\u0644\u0645\u0628\u0644\u063A \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631",-1),_a=e("th",{className:"px-1 py-2 text-base"},"\u0623\u062C\u0648\u0631 \u0627\u0644\u062D\u0648\u0644\u0627\u062A",-1),va=e("th",{className:"px-1 py-2 text-base"},"\u0627\u0644\u0645\u0628\u0644\u063A \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0635\u0627\u0641\u064A",-1),ka=e("th",{className:"px-1 py-2 text-base"},"\u0645\u0644\u0627\u062D\u0638\u0629",-1),$a=e("th",{className:"px-1 py-2 text-base"},"\u0627\u0644\u062D\u0627\u0644\u0629",-1),wa={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Da={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Na={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Ca={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Aa={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Ta={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Ma={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Ea={class:"modal-footer my-2"},Va={class:"flex flex-row"},Ba={class:"basis-1/2 px-4"},Ia={class:"basis-1/2 px-4"},Ua=["disabled"],Sa={__name:"ModalAddExpensesToMainBransh",props:{show:Boolean,user:Array,allTransfers:Array,formData:Object},setup(r){const g=i("add"),v=y=>{g.value=y};return(y,u)=>(c(),K(X,{name:"modal"},{default:f(()=>[r.show?(c(),m("div",Qt,[e("div",Xt,[e("div",ea,[e("div",ta,[Q(y.$slots,"header")]),e("div",aa,[e("div",sa,[e("ul",oa,[e("li",{class:"mr-2",onClick:u[0]||(u[0]=l=>v("add"))},[e("button",{class:E(["inline-block p-4 border-b-2 border-transparent rounded-t-lg",g.value=="add"?"dark:text-blue-500 dark:border-blue-500":"hover:text-gray-600 hover:border-gray-300"])}," \u0627\u0636\u0627\u0641\u0629 ",2)]),e("li",{class:"mr-2",onClick:u[1]||(u[1]=l=>v("record"))},[e("button",{class:E(["inline-block p-4 border-b-2 border-transparent rounded-t-lg",g.value=="record"?"dark:text-blue-500 dark:border-blue-500":"hover:text-gray-600 hover:border-gray-300"])}," \u0627\u0644\u0633\u062C\u0644 ",2)])])]),g.value=="add"?(c(),m("div",ra,[e("div",null,[da,e("div",la,[na,T(e("input",{id:"expens_amount",type:"number",class:"mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900","onUpdate:modelValue":u[2]||(u[2]=l=>r.formData.amount=l)},null,512),[[M,r.formData.amount]])]),e("div",ia,[e("label",ca,o(y.$t("note")),1),T(e("input",{id:"note",type:"text",class:"mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900","onUpdate:modelValue":u[3]||(u[3]=l=>r.formData.note=l)},null,512),[[M,r.formData.note]])])])])):(c(),m("div",ua,[ma,e("div",ya,[e("table",pa,[e("thead",ba,[e("tr",ga,[ha,e("th",fa,o(y.$t("date")),1),xa,_a,va,ka,$a])]),e("tbody",null,[(c(!0),m(C,null,U(r.allTransfers,l=>{var d;return c(),m("tr",{key:l.id,class:"text-center"},[e("td",wa,o(l.id),1),e("td",Da,o((d=l==null?void 0:l.created_at)==null?void 0:d.slice(0,19).replace("T"," ")),1),e("td",Na,o(l.amount),1),e("td",Ca,o(l.fee),1),e("td",Aa,o(l.amount-l.fee),1),e("td",Ta,o(l.note),1),e("td",Ma,o(l.stauts),1)])}),128))])])])]))]),e("div",Ea,[e("div",Va,[e("div",Ba,[e("button",{class:"modal-default-button py-3 bg-gray-500 rounded",onClick:u[4]||(u[4]=l=>{y.$emit("close"),g.value="add"})},o(y.$t("cancel")),1)]),e("div",Ia,[e("button",{class:"modal-default-button py-3 bg-rose-500 rounded col-6",onClick:u[5]||(u[5]=l=>{y.$emit("a",r.formData),r.formData=""}),disabled:!r.formData.amount},o(y.$t("yes")),9,Ua)])])])])])])):x("",!0)]),_:3}))}};const Ga={key:0,class:"modal-mask"},Oa={class:"modal-wrapper max-h-[80vh]"},Fa={class:"modal-container dark:bg-gray-900 overflow-auto max-h-[80vh]"},Ha={class:"modal-header"},Za={class:"modal-body"},ja={class:"text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"},Ra={class:"flex flex-wrap -mb-px"},La={key:0},qa=e("h2",{class:"text-center py-3"},"\u0637\u0644\u0628\u0627\u062A \u0642\u064A\u062F \u0627\u0644\u062A\u062D\u0648\u064A\u0644",-1),za={key:0,id:"alert-additional-content-4 my-3",class:"p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800",role:"alert"},Pa={class:"flex items-center"},Wa=e("svg",{class:"flex-shrink-0 w-4 h-4 me-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1),Ya=e("span",{class:"sr-only"},"Info",-1),Ja=e("h3",{class:"text-lg font-medium px-2"},"\u0637\u0644\u0628 \u062D\u0648\u0627\u0644\u0629 \u0645\u0646 \u0641\u0631\u0639 \u0643\u0631\u0643\u0648\u0643",-1),Ka={class:"text-lg font-medium"},Qa={class:"mt-2 mb-4 text-sm px-4"},Xa=e("label",{class:"dark:text-gray-200 px-4",for:"note"},"\u0623\u062C\u0648\u0631 \u0627\u0644\u062D\u0648\u0627\u0644\u0629 \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631",-1),es=["onUpdate:modelValue"],ts=["onUpdate:modelValue"],as={key:0,class:"flex items-center py-3"},ss=e("svg",{class:"flex-shrink-0 w-4 h-4 me-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1),os=e("span",{class:"sr-only"},"Info",-1),rs=e("h3",{class:"text-lg font-medium px-2"}," \u0635\u0627\u0641\u064A \u0627\u0644\u062D\u0648\u0627\u0644\u0629 \u0628\u0639\u062F \u062E\u0635\u0645 \u0623\u062C\u0631 \u0627\u0644\u062A\u062D\u0648\u064A\u0644",-1),ds={class:"text-lg font-medium"},ls={key:1,class:"flex mt-5"},ns=["onClick"],is=["onClick","disabled"],cs={key:1},us=e("h1",{class:"text-center dark:text-gray-200 mt-4"}," \u0633\u062C\u0644 \u0627\u0644\u062D\u0648\u0644\u0627\u062A",-1),ms={class:"relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mb-5"},ys={class:"w-full text-sm text-right text-gray-500 dark:text-gray-200 dark:text-gray-400 text-center"},ps={class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center"},bs={class:"bg-rose-500 text-gray-100 rounded-l-lg mb-2 sm:mb-0"},gs=e("th",{className:"px-1 py-2 text-base"},"\u0631\u0642\u0645 \u0627\u0644\u0648\u0635\u0644",-1),hs={className:"px-1 py-2 text-base"},fs=e("th",{className:"px-1 py-2 text-base"},"\u0627\u0644\u0645\u0628\u0644\u063A \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631",-1),xs=e("th",{className:"px-1 py-2 text-base"},"\u0623\u062C\u0648\u0631 \u0627\u0644\u062D\u0648\u0644\u0627\u062A",-1),_s=e("th",{className:"px-1 py-2 text-base"},"\u0627\u0644\u0645\u0628\u0644\u063A \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0635\u0627\u0641\u064A",-1),vs=e("th",{className:"px-1 py-2 text-base"},"\u0645\u0644\u0627\u062D\u0638\u0629",-1),ks=e("th",{className:"px-1 py-2 text-base"},"\u0627\u0644\u062D\u0627\u0644\u0629",-1),$s={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},ws={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Ds={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Ns={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Cs={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},As={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Ts={className:"px-4 py-2 border dark:border-gray-800 dark:text-gray-200"},Ms={class:"modal-footer my-2"},Es={class:"flex flex-row"},Vs={class:"basis-1/2 px-4"},Bs={class:"basis-1/2 px-4"},Is=["disabled"],Us={__name:"ModalExpensesFromOtherBransh",props:{show:Boolean,user:Array,allTransfers:Array,formData:Object},setup(r){const g=i("add"),v=l=>{g.value=l};function y(l){$.post("/api/confirmTransfers",l).then(d=>{window.location.reload()}).catch(d=>{})}function u(l){$.post("/api/cancelTransfers",l).then(d=>{window.location.reload()}).catch(d=>{})}return(l,d)=>(c(),K(X,{name:"modal"},{default:f(()=>[r.show?(c(),m("div",Ga,[e("div",Oa,[e("div",Fa,[e("div",Ha,[Q(l.$slots,"header")]),e("div",Za,[e("div",ja,[e("ul",Ra,[e("li",{class:"mr-2",onClick:d[0]||(d[0]=n=>v("add"))},[e("button",{class:E(["inline-block p-4 border-b-2 border-transparent rounded-t-lg",g.value=="add"?"dark:text-blue-500 dark:border-blue-500":"hover:text-gray-600 hover:border-gray-300"])}," \u0637\u0644\u0628\u0627\u062A \u0642\u064A\u062F \u0627\u0644\u062A\u062D\u0648\u064A\u0644 ",2)]),e("li",{class:"mr-2",onClick:d[1]||(d[1]=n=>v("record"))},[e("button",{class:E(["inline-block p-4 border-b-2 border-transparent rounded-t-lg",g.value=="record"?"dark:text-blue-500 dark:border-blue-500":"hover:text-gray-600 hover:border-gray-300"])}," \u0627\u0644\u0633\u062C\u0644 ",2)])])]),g.value=="add"?(c(),m("div",La,[qa,(c(!0),m(C,null,U(r.allTransfers,n=>(c(),m(C,{key:n.id},[n.stauts!="\u062A\u0645 \u0627\u0644\u0623\u0633\u062A\u0644\u0627\u0645"?(c(),m("div",za,[e("div",Pa,[Wa,Ya,Ja,e("h3",Ka," \u0645\u0628\u0644\u063A "+o(n.amount)+" \u062F\u0648\u0644\u0627\u0631 ",1)]),e("div",Qa,o(n.note),1),Xa,T(e("input",{type:"number",class:"mt-3 mx-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900","onUpdate:modelValue":h=>n.inputValue=h},null,8,es),[[M,n.inputValue]]),T(e("input",{type:"text",class:"mt-3 mx-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-900","onUpdate:modelValue":h=>n.receiver=h},null,8,ts),[[M,n.receiver]]),n.inputValue?(c(),m("div",as,[ss,os,rs,e("h3",ds," \u0645\u0628\u0644\u063A "+o(n.amount-n.inputValue)+" \u062F\u0648\u0644\u0627\u0631 ",1)])):x("",!0),n.inputValue?(c(),m("div",ls,[e("button",{onClick:h=>y(n),type:"button",class:"mx-2 text-white bg-yellow-800 hover:bg-yellow-900 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-yellow-300 dark:text-gray-800 dark:hover:bg-yellow-400 dark:focus:ring-yellow-800"}," \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0648\u0627\u0644\u0627\u062A ",8,ns),e("button",{onClick:h=>u(n),type:"button",class:"text-yellow-800 bg-transparent border border-yellow-800 hover:bg-yellow-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-gray-800 dark:focus:ring-yellow-800","data-dismiss-target":"#alert-additional-content-4","aria-label":"Close",disabled:!r.formData.fee}," \u0625\u0644\u063A\u0627\u0621 ",8,is)])):x("",!0)])):x("",!0)],64))),128))])):(c(),m("div",cs,[us,e("div",ms,[e("table",ys,[e("thead",ps,[e("tr",bs,[gs,e("th",hs,o(l.$t("date")),1),fs,xs,_s,vs,ks])]),e("tbody",null,[(c(!0),m(C,null,U(r.allTransfers,n=>{var h;return c(),m("tr",{key:n.id,class:"text-center"},[e("td",$s,o(n.id),1),e("td",ws,o((h=n==null?void 0:n.created_at)==null?void 0:h.slice(0,19).replace("T"," ")),1),e("td",Ds,o(n.amount),1),e("td",Ns,o(n.fee),1),e("td",Cs,o(n.amount-n.fee),1),e("td",As,o(n.note),1),e("td",Ts,o(n.stauts),1)])}),128))])])])]))]),e("div",Ms,[e("div",Es,[e("div",Vs,[e("button",{class:"modal-default-button py-3 bg-gray-500 rounded",onClick:d[2]||(d[2]=n=>{l.$emit("close"),g.value="add"})},o(l.$t("cancel")),1)]),e("div",Bs,[e("button",{class:"modal-default-button py-3 bg-rose-500 rounded col-6",onClick:d[3]||(d[3]=n=>{l.$emit("a",r.formData),r.formData=""}),disabled:!r.formData.amount},o(l.$t("yes")),9,Is)])])])])])])):x("",!0)]),_:3}))}};const Ss=e("h2",{class:"mb-5 dark:text-white text-center"}," \u0647\u0644 \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0644\u062D\u0630\u0641 \u061F ",-1),Gs=e("h2",{class:"mb-5 dark:text-white text-center"}," \u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641\u0627\u062A ",-1),Os=e("h3",{class:"text-center"},"\u0627\u0644\u0645\u062D\u0627\u0633\u0628\u0629",-1),Fs=e("h3",{class:"text-center"},"\u0627\u062F\u062E\u0627\u0644 \u0645\u0635\u0627\u0631\u064A\u0641",-1),Hs=e("h3",{class:"text-center"},"\u062A\u062D\u0648\u064A\u0644 \u0645\u0646 \u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0649 \u062F\u064A\u0646\u0627\u0631",-1),Zs=e("h3",{class:"text-center"},"\u062A\u062D\u0648\u064A\u0644 \u0645\u0646 \u0627\u0644\u062F\u064A\u0646\u0627\u0631 \u0627\u0644\u0649 \u062F\u0648\u0644\u0627\u0631",-1),js={key:0},Rs={id:"alert-2",class:"p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200 text-center",role:"alert"},Ls={class:"ml-3 font-medium text-red-700 dark:text-red-800"},qs={class:"max-w-9xl mx-auto sm:px-6 lg:px-8"},zs={class:"overflow-hidden shadow-sm sm:rounded-lg"},Ps={class:"border-b border-gray-200"},Ws={class:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-3"},Ys={class:"pt-5 print:hidden"},Js={class:"pt-5 hidden"},Ks={class:"pt-5 print:hidden"},Qs={class:"px-4"},Xs={class:"px-4"},eo={class:"mr-5 print:hidden"},to={key:0},ao={key:1};const so={class:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-3"},oo={key:0},ro={key:1},lo={class:"grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-3 lg:gap-3"},no={class:"px-4"},io={class:"px-4"},co={class:"relative w-full px-4"},uo={class:"overflow-x-auto shadow-md mt-5"},mo={class:"w-full text-right text-gray-500 dark:text-gray-400 text-center"},yo=e("thead",{class:"text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center"},[e("tr",{class:"rounded-l-lg mb-2 sm:mb-0"},[e("th",{className:"px-2 py-2",style:{width:"100px"}},"\u0631\u0642\u0645 \u0627\u0644\u0648\u0635\u0644 "),e("th",{className:"px-2 py-2",style:{width:"180px"}},"\u0627\u0644\u062A\u0627\u0631\u064A\u062E"),e("th",{className:"px-2 py-2"},"\u0627\u0644\u0648\u0635\u0641"),e("th",{className:"px-2 py-2"},"\u0627\u0644\u0645\u0628\u0644\u063A"),e("th",{className:"px-2 py-2",style:{width:"150px"}},"\u062A\u0646\u0641\u064A\u0630"),e("th",{scope:"col",class:"px-1 py-2 text-base print:hidden",style:{width:"100px"}}," \u062A\u062E\u0632\u064A\u0646 ")])],-1),po={className:"border dark:border-gray-800 text-center px-2 py-1"},bo={className:"border dark:border-gray-800 text-center px-2 py-1"},go={className:"border dark:border-gray-800 text-center px-2 py-1"},ho={className:"border dark:border-gray-800 text-center px-2 py-1"},fo={className:"border dark:border-gray-800 text-center px-2 py-1"},xo=["onClick"],_o=["onClick"],vo=["href"],ko=["href"],$o=["href"],wo=["src"],Do={class:"spaner"},Ro={__name:"Index",props:{url:String,users:Array,accounts:Array,boxes:Array},setup(r){const g=r,v=i({});i("");let y=i(!1),u=i(!1),l=i(!1),d=i(!1),n=i(!1),h=i(!1),S=i(!1),R=i(!1),V=i(!1),G=i(!1),O=i([]),B=i(0),L=i({}),P=i({}),W=i({}),ne=i(!1),F=i(ae()),H=i(ae()),ie=i(0),ce=i(0),ue=i(0),me=i(0),ye=i(0),pe=i(0),be=i(0),ge=i(0),he=i(0),fe=i(0),xe=i(0),Y=i(!1),J=1,Z="",ee=i([]);const w=()=>{J=0,O.value.length=0,Y.value=!Y.value},_e=tt(w,500),ve=async a=>{try{const k=(await $.get("/getIndexAccounting",{params:{limit:100,page:J,q:Z,user_id:g.boxes[0].id,from:F.value,to:H.value}})).data;k.transactions.data.length<100?(O.value.push(...k.transactions.data),a.complete()):(O.value.push(...k.transactions.data),a.loaded()),v.value=k,J++}catch(t){console.log(t)}};(async()=>{$.get("/api/totalInfo").then(a=>{ie.value=a.data.data.mainAccount,ce.value=a.data.data.onlineContracts,ue.value=a.data.data.howler,me.value=a.data.data.shippingCoc,ye.value=a.data.data.border,pe.value=a.data.data.iran,be.value=a.data.data.dubai,ge.value=a.data.data.debtOnlineContracts,fe.value=a.data.data.onlineContractsDinar,xe.value=a.data.data.debtOnlineContractsDinar,he.value=a.data.data.allCars}).catch(a=>{console.error(a)})})();function ke(){y.value=!0}function $e(){u.value=!0}function we(){l.value=!0}function De(){n.value=!0}function Ne(){h.value=!0}function Ce(a){L.value=a,V.value=!0}function Ae(a){L.value=a,G.value=!0}Ze(),i(!1);const D=i(0);function Te(a){$.post("/api/receiptArrived",a).then(t=>{y.value=!1,window.location.reload()}).catch(t=>{D.value=t.response.data.errors})}function te(a){$.post("/api/salesDebt",a).then(t=>{w(),u.value=!1,l.value=!1,window.location.reload()}).catch(t=>{D.value=t.response.data.errors})}function Me(a){$.post("/api/convertDollarDinar",a).then(t=>{w(),n.value=!1}).catch(t=>{D.value=t.response.data.errors})}function Ee(a){$.post("/api/convertDinarDollar",a).then(t=>{w(),h.value=!1}).catch(t=>{D.value=t.response.data.errors})}function ae(){const a=new Date,t=a.getFullYear(),k=String(a.getMonth()+1).padStart(2,"0"),A=String(a.getDate()).padStart(2,"0");return`${t}-${k}-${A}`}function Ve(a){$.post(`/api/delTransactions?id=${a.id}`).then(t=>{w(),V.value=!1}).catch(t=>{D.value=t.response.data.errors})}function se(a){B.value=a,Be(),d.value=!0}function Be(){$.get(`/api/getGenExpenses?expenses_type_id=${B.value}`).then(a=>{W.value=a.data}).catch(a=>{D.value=a.response.data.errors})}function oe(a){var t,k,A;$.post(`/api/GenExpenses?amount=${(t=a.amount)!=null?t:0}&expenses_type_id=${B.value}&factor=${(k=a.factor)!=null?k:1}&note=${(A=a.note)!=null?A:""}`).then(N=>{w(),d.value=!1,console.log(N.data),window.open(`/api/getIndexAccountsSelas?user_id=${N.data.morphed_id}&print=3&transactions_id=${N.data.id}`,"_blank"),window.location.reload()}).catch(N=>{D.value=N.response.data.errors})}function Ie(a){var t,k;$.post(`/api/addTransfers?amount=${(t=a.amount)!=null?t:0}&sender_note=${(k=a.note)!=null?k:""}`).then(A=>{window.location.reload(),S.value=!1}).catch(A=>{D.value=A.response.data.errors})}function Ue(a){return`/public/uploadsResized/${a}`}function Se(a){return`/public/uploads/${a}`}function Ge(){w()}function Oe(a){return typeof a!="number"&&(a=parseFloat(a)||0),a.toLocaleString()}return(a,t)=>(c(),m(C,null,[b(p(je),{title:"Dashboard"}),b(Le,null,{header:f(()=>[]),default:f(()=>{var N,re,de,le;return[b(qe,{show:!!p(V),formData:p(L),onA:t[0]||(t[0]=s=>Ve(s)),onClose:t[1]||(t[1]=s=>_(V)?V.value=!1:V=!1)},{header:f(()=>[Ss]),_:1},8,["show","formData"]),b(Ye,{show:!!p(G),formData:p(L),onA:t[2]||(t[2]=s=>Ge(s)),onClose:t[3]||(t[3]=s=>_(G)?G.value=!1:G=!1)},{header:f(()=>[Gs]),_:1},8,["show","formData"]),b(Kt,{formData:p(P),show:!!p(d),expenses_type_id:p(B),GenExpenses:p(W),onA:t[4]||(t[4]=s=>oe(s)),onClose:t[5]||(t[5]=s=>_(d)?d.value=!1:d=!1)},{header:f(()=>[]),_:1},8,["formData","show","expenses_type_id","GenExpenses"]),b(Sa,{formData:p(P),show:!!p(S),expenses_type_id:p(B),allTransfers:p(ee),onA:t[6]||(t[6]=s=>Ie(s)),onClose:t[7]||(t[7]=s=>_(S)?S.value=!1:S=!1)},{header:f(()=>[]),_:1},8,["formData","show","expenses_type_id","allTransfers"]),b(Us,{formData:p(P),show:!!p(R),expenses_type_id:p(B),GenExpenses:p(W),allTransfers:p(ee),onA:t[8]||(t[8]=s=>oe(s)),onClose:t[9]||(t[9]=s=>_(R)?R.value=!1:R=!1)},{header:f(()=>[]),_:1},8,["formData","show","expenses_type_id","GenExpenses","allTransfers"]),b(ze,{show:!!p(y),data:r.users,accounts:r.accounts,onA:t[10]||(t[10]=s=>Te(s)),onClose:t[11]||(t[11]=s=>_(y)?y.value=!1:y=!1)},{header:f(()=>[Os]),_:1},8,["show","data","accounts"]),b(Je,{show:!!p(u),data:r.users,accounts:r.accounts,onA:t[12]||(t[12]=s=>te(s)),onClose:t[13]||(t[13]=s=>_(u)?u.value=!1:u=!1)},{header:f(()=>[]),_:1},8,["show","data","accounts"]),b(Ke,{show:!!p(l),boxes:r.boxes,onA:t[14]||(t[14]=s=>te(s)),onClose:t[15]||(t[15]=s=>_(l)?l.value=!1:l=!1)},{header:f(()=>[Fs]),_:1},8,["show","boxes"]),b(Pe,{show:!!p(n),boxes:r.boxes,onA:t[16]||(t[16]=s=>Me(s)),onClose:t[17]||(t[17]=s=>_(n)?n.value=!1:n=!1)},{header:f(()=>[Hs]),_:1},8,["show","boxes"]),b(We,{show:!!p(h),boxes:r.boxes,onA:t[18]||(t[18]=s=>Ee(s)),onClose:t[19]||(t[19]=s=>_(h)?h.value=!1:h=!1)},{header:f(()=>[Zs]),_:1},8,["show","boxes"]),a.$page.props.success?(c(),m("div",js,[e("div",Rs,[e("div",Ls,o(a.$page.props.success),1)])])):x("",!0),e("div",null,[e("div",qs,[e("div",zs,[e("div",Ps,[e("div",Ws,[e("div",Ys,[a.$page.props.auth.user.type_id==1||a.$page.props.auth.user.type_id==2||a.$page.props.auth.user.type_id==5||a.$page.props.auth.user.type_id==6?(c(),m("button",{key:0,style:{width:"100%","margin-top":"4px"},className:"px-4 py-2 text-white bg-green-500 rounded-md focus:outline-none",onClick:t[20]||(t[20]=s=>ke())}," \u0648\u0635\u0644 \u0642\u0628\u0636 (\u0623\u0636\u0627\u0641\u0629) ")):x("",!0)]),e("div",Js,[a.$page.props.auth.user.type_id==1||a.$page.props.auth.user.type_id==2||a.$page.props.auth.user.type_id==5?(c(),m("button",{key:0,style:{width:"100%","margin-top":"4px"},className:"px-4 py-2 text-white bg-yellow-500 rounded-md focus:outline-none",onClick:t[21]||(t[21]=s=>$e())}," \u062A\u062D\u0648\u064A\u0644 \u0644\u062D\u0633\u0627\u0628 ")):x("",!0)]),e("div",Ks,[a.$page.props.auth.user.type_id==1||a.$page.props.auth.user.type_id==2||a.$page.props.auth.user.type_id==5||a.$page.props.auth.user.type_id==6?(c(),m("button",{key:0,style:{width:"100%","margin-top":"4px"},className:"px-4 py-2 text-white bg-rose-500 rounded-md focus:outline-none",onClick:t[22]||(t[22]=s=>we())}," \u0648\u0635\u0644 \u0635\u0631\u0641 (\u0633\u062D\u0628) ")):x("",!0)]),e("div",Qs,[e("div",null,[b(I,{for:"from",value:"\u0645\u0646 \u062A\u0627\u0631\u064A\u062E"}),b(j,{id:"from",type:"date",class:"mt-1 block w-full",modelValue:p(F),"onUpdate:modelValue":t[23]||(t[23]=s=>_(F)?F.value=s:F=s)},null,8,["modelValue"])])]),e("div",Xs,[e("div",null,[b(I,{for:"to",value:"\u062D\u062A\u0649 \u062A\u0627\u0631\u064A\u062E"}),b(j,{id:"to",type:"date",class:"mt-1 block w-full",modelValue:p(H),"onUpdate:modelValue":t[24]||(t[24]=s=>_(H)?H.value=s:H=s)},null,8,["modelValue"])])]),e("div",eo,[b(I,{for:"pay",value:"\u0641\u0644\u062A\u0631\u0629"}),e("button",{onClick:t[25]||(t[25]=Re(s=>w(),["prevent"])),class:"px-6 mb-12 py-2 mt-1 font-bold text-white bg-gray-500 rounded",style:{width:"100%"}},[p(ne)?(c(),m("span",ao,"\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638...")):(c(),m("span",to,"\u0641\u0644\u062A\u0631\u0629"))])]),x("",!0)]),e("div",so,[a.$page.props.auth.user.type_id==1?(c(),m("div",oo,[e("button",{type:"button",onClick:t[26]||(t[26]=s=>se(2)),style:{"min-width":"150px"},className:"px-6 mb-12 text-center py-2 font-bold text-white bg-blue-600 rounded  w-full"},o(a.$t("dubai")),1)])):x("",!0),a.$page.props.auth.user.type_id==1?(c(),m("div",ro,[e("button",{type:"button",onClick:t[27]||(t[27]=s=>se(3)),style:{"min-width":"150px"},className:"px-6 mb-12 text-center w-full py-2 font-bold text-white bg-blue-600 rounded"},o(a.$t("iran")),1)])):x("",!0),e("div",null,[e("button",{type:"button",onClick:t[28]||(t[28]=s=>De()),style:{"min-width":"150px"},className:"px-6 mb-12 w-full py-2 font-bold text-white bg-teal-500 rounded"}," \u062A\u062D\u0648\u064A\u0644 \u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0649 \u062F\u064A\u0646\u0627\u0631 ")]),e("div",null,[e("button",{type:"button",onClick:t[29]||(t[29]=s=>Ne()),style:{"min-width":"150px"},className:"px-6 mb-12 w-full py-2 font-bold text-white bg-yellow-500 rounded"}," \u062A\u062D\u0648\u064A\u0644 \u062F\u064A\u0646\u0627\u0631 \u0627\u0644\u0649 \u062F\u0648\u0644\u0627\u0631 ")])]),e("div",lo,[e("div",no,[b(I,{for:"to",value:"\u0631\u0635\u064A\u062F \u0627\u0644\u0635\u0646\u062F\u0648\u0642 \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631"}),b(j,{id:"to",type:"number",disabled:"",class:"mt-1 block w-full",value:(re=(N=v.value)==null?void 0:N.user)==null?void 0:re.wallet.balance},null,8,["value"])]),e("div",io,[b(I,{for:"to",value:"\u0631\u0635\u064A\u062F \u0627\u0644\u0635\u0646\u062F\u0648\u0642 \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631 \u0627\u0644\u0639\u0631\u0627\u0642\u064A"}),b(j,{id:"to",type:"number",disabled:"",class:"mt-1 block w-full",value:(le=(de=v.value)==null?void 0:de.user)==null?void 0:le.wallet.balance_dinar},null,8,["value"])]),e("div",co,[b(I,{for:"to",value:"\u0628\u062D\u062B \u0631\u0642\u0645 \u0627\u0644\u0648\u0635\u0644 \u0627\u0648 \u0627\u0644\u0648\u0635\u0641"}),b(j,{id:"q",type:"text",class:"mt-1 block w-full",modelValue:p(Z),"onUpdate:modelValue":t[30]||(t[30]=s=>_(Z)?Z.value=s:Z=s),onInput:p(_e)},null,8,["modelValue","onInput"])])]),e("div",uo,[e("table",mo,[yo,e("tbody",null,[(c(!0),m(C,null,U(p(O),s=>(c(),m("tr",{key:s.id,class:E([{"bg-red-100 dark:bg-red-900":s.type==="out"||s.type==="outUserBox"||s.type==="outUser"||s.type==="debt","bg-green-100 dark:bg-green-900":s.type==="in"||s.type==="inUser"||s.type==="inUserBox"},"bg-white border-b dark:bg-gray-900 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-600"])},[e("td",po,o(s.id),1),e("td",bo,o(s==null?void 0:s.created_at.slice(0,19).replace("T","  ")),1),e("th",go,o(s.description),1),e("td",ho,o(Oe(s.amount)+" "+s.currency),1),e("td",fo,[e("button",{class:"px-1 py-1 text-white bg-rose-500 rounded-md focus:outline-none",onClick:q=>Ce(s)},[b(Xe)],8,xo),e("button",{class:"px-1 mx-2 py-1 text-white bg-purple-600 rounded-md focus:outline-none",onClick:q=>Ae(s)},[b(Qe)],8,_o),s.type==="out"||s.type==="outUser"||s.type==="debt"?(c(),m("a",{key:0,target:"_blank",style:{display:"inline-flex"},href:`/api/getIndexAccountsSelas?user_id=${r.boxes[0].id}&print=2&transactions_id=${s.id}`,tabIndex:"1",class:"px-1 py-1 text-white m-1 bg-green-500 rounded"},[b(z,{class:"inline-flex"})],8,vo)):x("",!0),s.type==="in"||s.type==="inUser"?(c(),m("a",{key:1,target:"_blank",style:{display:"inline-flex"},href:`/api/getIndexAccountsSelas?user_id=${r.boxes[0].id}&print=3&transactions_id=${s.id}`,tabIndex:"1",class:"px-1 py-1 text-white m-1 bg-green-500 rounded"},[b(z,{class:"inline-flex"})],8,ko)):x("",!0)]),e("td",null,[(c(!0),m(C,null,U(s.transactions_images,(q,Fe)=>(c(),m("a",{key:Fe,href:Se(q.name),style:{cursor:"pointer"},target:"_blank"},[e("img",{src:Ue(q.name),alt:"",class:"px-1",style:{"max-width":"80px","max-height":"50px",display:"inline"}},null,8,wo)],8,$o))),128))])],2))),128))])])]),e("div",Do,[b(p(et),{transactions:p(O),onInfinite:ve,identifier:p(Y)},null,8,["transactions","identifier"])])])])])])]}),_:1})],64))}};export{Ro as default};
