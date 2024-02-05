import{w as f,a as p,b as j,r as h,u as k,d as D,j as e,L as G}from"./index-9zCaZito.js";import{u as I,a as M,L as E}from"./use-analitics-qoUZ2gKc.js";import{e as H,L as B}from"./utils-sk6dorsv.js";import{i as S}from"./warehouseImgs-rBBp8cQP.js";const z="_wrapper_14jn5_1",R="_carNumber_14jn5_11",V="_gateNumber_14jn5_23",q="_gateInfo_14jn5_39",F="_info_14jn5_53",P="_row_14jn5_77",Q="_rowTitle_14jn5_101",$="_pushButton_14jn5_109",A="_schema_14jn5_139",U="_schema__text_14jn5_147",J="_schema__img_14jn5_161",K="_schema__point_14jn5_197",O="_linkToTable_14jn5_215",n={wrapper:z,carNumber:R,gateNumber:V,gateInfo:q,info:F,row:P,rowTitle:Q,pushButton:$,schema:A,schema__text:U,schema__img:J,schema__point:K,linkToTable:O},w=(r,s=1)=>{var l;const a=(l=f.find(c=>r.warehouseName.toLowerCase().includes(c.name.toLowerCase())).gates)==null?void 0:l.find(c=>c.from.n<=Number(r.gateName)&&c.to.n>=Number(r.gateName));if(a){const c=(a.from.x+(a.to.x-a.from.x)*(Number(r.gateName)-a.from.n)/(a.to.n-a.from.n)-20)*s,u=(a.from.y+(a.to.y-a.from.y)*(Number(r.gateName)-a.from.n)/(a.to.n-a.from.n)-20)*s;return{x:c,y:u}}else return{x:-100,y:-100}},W=()=>{const{carData:r,setGatesCoordinates:s}=p(j(a=>({carData:a.carData,setGatesCoordinates:a.setGatesCoordinates}))),m=h.useRef(null);return h.useEffect(()=>{const a=()=>{if(r&&m.current){const l=m.current;s(w(r,l.width/393))}};return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[r,s]),m},se=()=>{const{carNumber:r,carData:s,gatesCoordinates:m,setCarNumber:a,setHouseName:l,setCarData:c,setGatesCoordinates:u,setModalType:x,toggleModalVisible:b,fetchCarData:g}=p(j(t=>({carNumber:t.carNumber,carData:t.carData,gatesCoordinates:t.gatesCoordinates,setGatesCoordinates:t.setGatesCoordinates,setCarNumber:t.setCarNumber,setCarData:t.setCarData,setHouseName:t.setHouseName,setModalType:t.setModalType,toggleModalVisible:t.toggleModalVisible,fetchCarData:t.fetchCarData}))),N=k(),C=W(),{number:d}=D(),{t:i}=I(),y=window.matchMedia("(prefers-color-scheme: dark)").matches,o=S.find(t=>y?t.includes(`${String(s==null?void 0:s.warehouseId)}D`):t.includes(String(s==null?void 0:s.warehouseId))),_=f.find(t=>t.id===(s==null?void 0:s.warehouseId));d&&d!==r&&(c(void 0),a(d));const T=t=>{const L=t.target;s&&u(w(s,L.width/393))},v=()=>{b(),x("notices")};return h.useEffect(()=>{try{d&&(g(d),window.scrollTo({top:0}))}catch{N("/")}},[g,N,d,c,l]),M(),e.jsx(E,{children:s?e.jsxs("div",{className:n.wrapper,children:[e.jsx("p",{className:n.carNumber,children:H(s.carNumber)}),s.gateName?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:n.gateNumber,children:["→ ",i("table-gates")," ",s.gateName]}),e.jsx("p",{className:n.gateInfo,children:i("waiting-time")})]}):e.jsxs("div",{className:n.info,children:[e.jsxs("div",{className:n.row,children:[e.jsx("p",{className:n.rowTitle,children:i("table-gates")}),e.jsx("p",{children:i("not-assigned")})]}),e.jsxs("div",{className:n.row,children:[e.jsx("p",{className:n.rowTitle,children:i("queue-number")}),e.jsx("p",{children:s.carsQuantity!==null&&s.carsQuantity})]}),e.jsx("div",{className:n.row,children:e.jsx("p",{children:i("not-assigned-notice")})}),e.jsx("button",{className:n.pushButton,onClick:v,children:i("get-notice")})]}),e.jsxs("div",{className:n.schema,children:[((o==null?void 0:o.includes("507"))||(o==null?void 0:o.includes("120762"))||(o==null?void 0:o.includes("117986"))||(o==null?void 0:o.includes("208277")))&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:n.schema__text,children:i("where-are-gates")}),e.jsxs("div",{className:n.schema__img,children:[e.jsx("img",{alt:s.carNumber,onLoad:T,ref:C,src:o}),e.jsx("span",{className:n.schema__point,style:{display:m.y===-100?"none":"block",top:m.y,left:m.x}})]})]}),e.jsx(G,{className:n.linkToTable,to:`/${_==null?void 0:_.query}`,children:i("show-all-queue")})]})]}):e.jsx(B,{})})};export{se as default};
