import{a as d,b as m,j as s,L as w,r as h,c as j,w as v}from"./index-sKUfO5eB.js";import{u as f,c as g,a as x,L as b}from"./use-analitics-o9IzszQV.js";import{s as N,f as y,L as H}from"./utils-QhEGcpNC.js";const L="_content__wrapper_mgjkf_1",V="_column__wrapper_mgjkf_15",z="_column_mgjkf_15",k="_row_mgjkf_61",E="_title__row_mgjkf_71",S="_result__wrapper_mgjkf_107",T="_one_mgjkf_119",A="_result__btn_mgjkf_143",i={content__wrapper:L,column__wrapper:V,column:z,row:k,title__row:E,result__wrapper:S,one:T,result__btn:A},$="_row_1g1zy_1",D="_title__row_1g1zy_13",q="_car__number_1g1zy_29",F="_car__quantity_1g1zy_43",C="_gate__number_1g1zy_57",B="_highlighted_1g1zy_69",R="_gate__notAssigned_1g1zy_79",M="_tj__notAssigned_1g1zy_79",u={row:$,title__row:D,car__number:q,car__quantity:F,gate__number:C,highlighted:B,gate__notAssigned:R,tj__notAssigned:M},Q=({carData:t})=>{const{searchValue:e}=d(m(r=>({searchValue:r.searchValue}))),{t:n,translation:c}=f(),o=N(t.carNumber,e);return s.jsx(s.Fragment,{children:s.jsx(w,{to:`/${t.carNumber.toLowerCase()}`,children:s.jsxs("div",{className:u.row,children:[s.jsxs("div",{className:u.car__number,children:[t.carsQuantity!==null&&s.jsx("span",{className:u.car__quantity,children:`${t.carsQuantity}.`}),o.map((r,a)=>s.jsxs(h.Fragment,{children:[a===1?s.jsx("span",{className:u.highlighted,children:e}):a>0&&e,r]},a))]}),t.gateName?s.jsxs("div",{className:u.gate__number,children:["→ ",t.gateName]}):s.jsx("div",{className:c!=="tj"?u.gate__notAssigned:u.tj__notAssigned,children:n("wait")})]},t.carsQuantity)})})},P=t=>{h.useEffect(()=>{if(t.current){const e=t.current,n=()=>{e&&(e.scrollHeight-e.scrollTop-e.clientHeight<=1&&(e.scrollTop-=2),e.scrollTop===0&&(e.scrollTop+=2))};return e&&e.addEventListener("scroll",n),()=>{e&&e.removeEventListener("scroll",n)}}},[t])},W=()=>{const{focus:t,blur:e,setBlur:n,setHeight:c,setTranslate:o}=d(m(r=>({focus:r.focus,blur:r.blur,setBlur:r.setBlur,setHeight:r.setHeight,setTranslate:r.setTranslate})));h.useEffect(()=>{let r=!1;const a=()=>{r||(r=!0,requestAnimationFrame(()=>{r=!1,window.visualViewport&&window.visualViewport.offsetTop>=0&&(e&&!t?(c("100%"),o(""),n(!1)):c(`${Math.max(0,window.visualViewport.height)}px`),scroll(0,0))}))};return window.visualViewport&&window.visualViewport.offsetTop>=0&&window.visualViewport.addEventListener("resize",a),()=>{window.visualViewport&&(window.visualViewport.removeEventListener("resize",a),c("100%"),o(""))}},[c,o,n,e,t])},U=()=>{const{focus:t}=d(m(e=>({focus:e.focus})));h.useEffect(()=>{var n,c;const e=o=>{o.preventDefault()};return t&&((n=document.querySelector("header"))==null||n.addEventListener("touchmove",e),(c=document.querySelector("#search"))==null||c.addEventListener("touchmove",e)),()=>{var o,r;(o=document.querySelector("header"))==null||o.removeEventListener("touchmove",e),(r=document.querySelector("#search"))==null||r.removeEventListener("touchmove",e)}},[t])},G=()=>{var _;const{t}=f(),e=h.useRef(null),{focus:n,houseData:c,searchValue:o}=d(m(l=>({houseData:l.houseData,searchValue:l.searchValue,focus:l.focus}))),r=y(c,o),a=(_=r[0])==null?void 0:_.carNumber.toLowerCase();return h.useEffect(()=>{var l;e.current&&((l=e.current)==null||l.scrollTo({top:4}))},[o,n]),P(e),W(),U(),s.jsx(s.Fragment,{children:s.jsx("div",{className:i.content__wrapper,children:s.jsx("div",{ref:e,className:i.column__wrapper,children:s.jsxs("div",{onClick:l=>l.stopPropagation(),className:i.column,children:[s.jsxs("div",{className:g(i.title__row,i.row),children:[s.jsx("div",{children:t("table-number")}),s.jsx("div",{children:t("table-gates")})]}),r.map(l=>s.jsx(Q,{carData:l},l.carNumber)),r.length===1?s.jsxs("div",{className:n?i.result__wrapper:g(i.result__wrapper,i.one),children:[s.jsx("button",{onMouseDown:l=>l.preventDefault(),className:i.result__btn,children:s.jsx(w,{to:`/${a}`,children:t("search-finded")})}),s.jsx("div",{children:t("search-not-finded")})]}):s.jsx("div",{children:t("search-not-finded")})]})})})})},I="_search__wrapper_7xzb7_1",J="_search__input_7xzb7_33",K="_highlighted_7xzb7_63",O="_search__info_7xzb7_71",p={search__wrapper:I,search__input:J,highlighted:K,search__info:O},X=t=>{const{query:e}=t,{t:n}=f(),{searchValue:c,setSearchValue:o,focusHandler:r,blurHandler:a}=d(m(_=>({searchValue:_.searchValue,focusHandler:_.focusHandler,blurHandler:_.blurHandler,setSearchValue:_.setSearchValue})));return s.jsx(s.Fragment,{children:s.jsxs("div",{id:"search",className:p.search__wrapper,children:[s.jsx("input",{type:"number",placeholder:n("search-field"),inputMode:"numeric",pattern:"[0-9]*",className:p.search__input,value:c,onInput:o,onFocus:r,onBlur:a}),s.jsx("p",{className:p.search__info,children:n("search-notice")}),((e==null?void 0:e.query)==="kl"||(e==null?void 0:e.query)==="el"||(e==null?void 0:e.query)==="kz"||(e==null?void 0:e.query)==="nm")&&s.jsx(w,{className:p.search__link,to:`/${e==null?void 0:e.query}/schema`,children:n("search-question")})]})})},Y="_wrapper_veuw4_1",Z={wrapper:Y},re=()=>{const t=j(),{houseData:e,setHouseName:n,setHouseData:c,fetchHouseData:o}=d(m(a=>({houseData:a.houseData,setHouseName:a.setHouseName,setHouseData:a.setHouseData,fetchHouseData:a.fetchHouseData}))),r=v.find(a=>t.pathname.endsWith(a.query));return h.useEffect(()=>{r&&o(r),window.scrollTo({top:0})},[o,r,c,n]),x(),s.jsx(b,{children:e.length>0?s.jsxs("div",{className:Z.wrapper,children:[s.jsx(G,{}),s.jsx(X,{query:r})]}):s.jsx(H,{})})};export{re as default};
