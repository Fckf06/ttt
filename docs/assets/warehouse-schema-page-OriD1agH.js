import{d as r,w as h,a as _,r as d,j as a,L as l}from"./index-_3Kt2HyM.js";import{u,a as g,L as x}from"./use-analitics-89rmamoP.js";import{i as f}from"./warehouseImgs-rBBp8cQP.js";const j="_schema_8azc3_1",p="_schema__img_8azc3_25",b="_schema__btn_8azc3_35",c={schema:j,schema__img:p,schema__btn:b},S=()=>{const{id:m}=r(),{t}=u(),s=h.find(e=>m===e.query),i=window.matchMedia("(prefers-color-scheme: dark)").matches,o=f.find(e=>i?e.includes(`${String(s==null?void 0:s.id)}D`):e.includes(String(s==null?void 0:s.id))),n=_(e=>e.setHouseName);return g(),d.useEffect(()=>{n(s==null?void 0:s.name)},[n,s]),a.jsx(x,{children:a.jsxs("article",{className:c.schema,children:[a.jsx("h1",{children:t("schema-warehouse")}),a.jsx("div",{className:c.schema__img,children:a.jsx("img",{src:o,alt:s==null?void 0:s.name})}),a.jsx("button",{className:c.schema__btn,children:a.jsx(l,{to:`/${s==null?void 0:s.query}`,children:t("close-btn")})})]})})};export{S as default};
