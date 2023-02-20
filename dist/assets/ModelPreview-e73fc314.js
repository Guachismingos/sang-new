import{d as o,R as d,j as l,a6 as p,c as x,a0 as y,T as f}from"./index-0097da9b.js";import{I as w,a as v,C,b as I}from"./index-0464951b.js";import{S as k}from"./Stack-ca781d16.js";import"./isMuiElement-ed656665.js";function j(e,i){i===void 0&&(i={});var r=i.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",r==="top"&&a.firstChild?a.insertBefore(t,a.firstChild):a.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var E=`.styles-module_wrapper__1I_qj {
  z-index: 1;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0px 60px 0px 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  box-sizing: border-box;
}

.styles-module_content__2jwZj {
  margin: auto;
  padding: 0;
  width: 90%;
  height: 100%;
  max-height: 100%;
  text-align: center;
}

.styles-module_slide__1zrfk {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styles-module_image__2hdkJ {
  max-height: 100%;
  max-width: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.styles-module_close__2I1sI {
  color: white;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 40px;
  font-weight: bold;
  opacity: 0.2;
  cursor: pointer;
}

.styles-module_close__2I1sI:hover {
  opacity: 1;
}

.styles-module_navigation__1pqAE {
  height: 80%;
  color: white;
  cursor: pointer;
  position: absolute;
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: 0.2;
  padding: 0 15px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.styles-module_navigation__1pqAE:hover {
  opacity: 1;
}

@media (hover: none) {
  .styles-module_navigation__1pqAE:hover {
    opacity: 0.2;
  }
}

.styles-module_prev__KqFRp {
  left: 0;
}

.styles-module_next__1uQwZ {
  right: 0;
}

@media (max-width: 900px) {
  .styles-module_wrapper__1I_qj {
    padding: 0;
  }
}
`,c={wrapper:"styles-module_wrapper__1I_qj",content:"styles-module_content__2jwZj",slide:"styles-module_slide__1zrfk",image:"styles-module_image__2hdkJ",close:"styles-module_close__2I1sI",navigation:"styles-module_navigation__1pqAE",prev:"styles-module_prev__KqFRp",next:"styles-module_next__1uQwZ"};j(E);const b=e=>{var i;const[r,a]=o.useState((i=e.currentIndex)!==null&&i!==void 0?i:0),t=o.useCallback(n=>{let s=(r+n)%e.src.length;s<0&&(s=e.src.length-1),a(s)},[r]),u=o.useCallback(n=>{var s;if(!n.target||!e.closeOnClickOutside)return;const g=n.target.id==="ReactSimpleImageViewer",h=n.target.classList.contains("react-simple-image-viewer__slide");(g||h)&&(n.stopPropagation(),(s=e.onClose)===null||s===void 0||s.call(e))},[e.onClose]),m=o.useCallback(n=>{var s;n.key==="Escape"&&((s=e.onClose)===null||s===void 0||s.call(e)),["ArrowLeft","h"].includes(n.key)&&t(-1),["ArrowRight","l"].includes(n.key)&&t(1)},[e.onClose,t]),_=o.useCallback(n=>{n.wheelDeltaY>0?t(-1):t(1)},[t]);return o.useEffect(()=>(document.addEventListener("keydown",m),e.disableScroll||document.addEventListener("wheel",_),()=>{document.removeEventListener("keydown",m),e.disableScroll||document.removeEventListener("wheel",_)}),[m,_]),d.createElement("div",{id:"ReactSimpleImageViewer",className:`${c.wrapper} react-simple-image-viewer__modal`,onKeyDown:m,onClick:u,style:e.backgroundStyle},d.createElement("span",{className:`${c.close} react-simple-image-viewer__close`,onClick:()=>{var n;return(n=e.onClose)===null||n===void 0?void 0:n.call(e)}},e.closeComponent||"×"),e.src.length>1&&d.createElement("span",{className:`${c.navigation} ${c.prev} react-simple-image-viewer__previous`,onClick:()=>t(-1)},e.leftArrowComponent||"❮"),e.src.length>1&&d.createElement("span",{className:`${c.navigation} ${c.next} react-simple-image-viewer__next`,onClick:()=>t(1)},e.rightArrowComponent||"❯"),d.createElement("div",{className:`${c.content} react-simple-image-viewer__modal-content`,onClick:u},d.createElement("div",{className:`${c.slide} react-simple-image-viewer__slide`},d.createElement("img",{className:c.image,src:e.src[r],alt:""}))))},S=({bono:e})=>{const[i,r]=o.useState(0),[a,t]=o.useState(!1),u=o.useCallback(n=>{r(n),t(!0)},[]),m=()=>{r(0),t(!1)},_=({image:n,idx:s})=>l.jsx(v,{sx:{borderRadius:"12px",overflow:"hidden"},children:l.jsx("img",{src:n,onClick:()=>u(s)})});return l.jsxs(o.Fragment,{children:[l.jsx(w,{cols:2,children:e==null?void 0:e.images.map((n,s)=>l.jsx(_,{image:n,idx:s},s))}),a&&l.jsx(b,{src:e==null?void 0:e.images,currentIndex:i,disableScroll:!1,closeOnClickOutside:!0,onClose:m})]})},q=({name:e,setTitle:i})=>{const{id:r}=p(),a=I[r-1];return o.useEffect(()=>{i(e)},[]),l.jsx(x,{maxWidth:"sm",className:"view-container animate__animated animate__fadeIn animate__faster",children:l.jsxs(k,{gap:2,pt:3,pb:15,width:"100%",className:"center-container",children:[l.jsxs(y,{display:"flex",alignItems:"center",gap:1,children:[l.jsx(C,{fontSize:"large",color:"primary"}),l.jsx(f,{fontWeight:"bold",className:"text-outlined",color:"white",variant:"h5",children:a==null?void 0:a.name})]}),l.jsx(S,{bono:a})]})})};export{q as default};
