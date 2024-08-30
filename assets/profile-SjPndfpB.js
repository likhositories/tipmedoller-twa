import{Z as T,aP as q,j as e,$ as W,aQ as H,r as $,A as Z,u as L,h as N,t as U,s as J,S as t,H as F,aR as Q,aS as X,aT as Y,aU as K,aV as M,U as ee,av as re,q as y,y as se,k as p,l as u,n as j,o as h,J as ae,aW as ie,B as oe,G,x as ne,z as te,I as V,am as le,aX as ce,aY as de,f as B,g as O}from"./index-P0oc4blE.js";function P(r){return H(r,a=>a==="auto"?"auto":`span ${a}/span ${a}`)}var b=T(function(a,l){const{area:g,colSpan:s,colStart:c,colEnd:w,rowEnd:d,rowSpan:m,rowStart:v,...x}=a,f=q({gridArea:g,gridColumn:P(s),gridRow:P(m),gridColumnStart:c,gridColumnEnd:w,gridRowStart:v,gridRowEnd:d});return e.jsx(W.div,{ref:l,__css:f,...x})});b.displayName="GridItem";function ue(){var x,f,C,I,S,k,_,R;const r=$.useContext(Z),a=L(),{register:l,handleSubmit:g,formState:{errors:s,isSubmitting:c}}=N({defaultValues:{username:(x=r.props.auth)==null?void 0:x.profile.username,email:(f=r.props.auth)==null?void 0:f.profile.email,currency:(C=r.props.auth)==null?void 0:C.profile.default_currency}}),w=async o=>{var A,z,D,E;let i=o;i.email===((A=r.props.auth)==null?void 0:A.profile.email)&&(i.email=void 0),i.username===((z=r.props.auth)==null?void 0:z.profile.username)&&(i.username=void 0),i.currency===((D=r.props.auth)==null?void 0:D.profile.default_currency)&&(i.currency=void 0);const n=await B.post("/dashboard/auth/profile/edit",i,(E=r.props.auth)==null?void 0:E.token);if(n.errors){O(n.errors,a);return}if(n.token){window.localStorage.setItem("auth-token",n.token),window.location.reload();return}await r.updateProfile(),a({status:"success",title:"профиль сохранен!"})},d=U(),[m,v]=J();return e.jsx("form",{onSubmit:g(w),children:e.jsxs(t,{direction:"column",spacing:4,children:[e.jsx(F,{children:"профиль"}),e.jsxs(Q,{borderRadius:"lg",status:"info",children:[e.jsx(X,{w:"24px",h:"24px"}),e.jsxs(t,{direction:"column",spacing:0,children:[e.jsxs(Y,{children:["комиссия на донаты:"," ",(I=r.props.auth)==null?void 0:I.profile.commission_percent,"%"]}),e.jsx(K,{children:"платежные провайдеры могут взимать дополнительную комиссию."})]})]}),e.jsxs(M,{rowGap:2,columnGap:4,gridTemplateColumns:"auto 1fr",children:[e.jsx(b,{children:e.jsx(ee,{w:"112px",h:"112px",src:((S=r.props.auth)==null?void 0:S.profile.avatar)+"?d=retro&s=200",borderRadius:"lg"})}),e.jsx(b,{gridColumn:"span 1 / span 1",children:e.jsx(t,{h:"full",direction:"column",spacing:0,justifyContent:"center",alignItems:"start",children:e.jsxs(t,{direction:"row",spacing:2,alignItems:"center",children:[e.jsxs(F,{size:"md",children:["@",(k=r.props.auth)==null?void 0:k.profile.username]}),(_=r.props.auth)!=null&&_.profile.is_verified?e.jsxs(re,{fill:"none",height:"24px",viewBox:"0 0 26 26",width:"24px",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"m6 6h12v12h-12z",fill:"#fff"}),e.jsx("path",{"clip-rule":"evenodd",d:"m14.38 1.51 1.82 1.82c.37.37.86.57 1.38.57h2.57c1.01 0 1.85.77 1.94 1.76l.01.19v2.57c0 .52.21 1.01.57 1.38l1.82 1.82c.71.71.76 1.84.13 2.61l-.13.15-1.82 1.82c-.37.37-.57.86-.57 1.38v2.57c0 1.01-.77 1.85-1.76 1.94l-.19.01h-2.57c-.52 0-1.01.21-1.38.57l-1.82 1.82c-.71.71-1.84.76-2.61.13l-.15-.13-1.82-1.82c-.37-.37-.86-.57-1.38-.57h-2.57c-1.01 0-1.85-.77-1.94-1.76l-.01-.19v-2.57c0-.52-.21-1.01-.57-1.38l-1.82-1.82c-.71-.71-.76-1.84-.13-2.61l.13-.15 1.82-1.82c.37-.37.57-.86.57-1.38v-2.57c0-1.08.87-1.95 1.95-1.95h2.57c.52 0 1.01-.21 1.38-.57l1.82-1.82c.76-.76 2-.76 2.76 0zm3.2 8.05c-.43-.34-1.03-.31-1.42.06l-.1.11-4.45 5.56-1.75-1.75-.11-.1c-.42-.32-1.03-.29-1.42.1s-.42.99-.1 1.42l.1.11 2.6 2.6.11.1c.42.32 1.02.29 1.4-.08l.1-.11 5.2-6.5.08-.12c.27-.46.17-1.05-.25-1.4z",fill:"var(--aithercol-colors-brand-300)","fill-rule":"evenodd"})]}):e.jsx(e.Fragment,{})]})})}),e.jsx(b,{gridColumn:"span 1 / span 1",textAlign:"center",children:e.jsx(y,{variant:"link",size:"sm",onClick:()=>se("https://gravatar.com/profile"),children:"изменить"})})]}),e.jsxs(t,{direction:"column",spacing:2,children:[e.jsxs(p,{isInvalid:!!s.username,children:[e.jsx(u,{children:"имя пользователя"}),e.jsx(j,{isDisabled:c,placeholder:"введите имя пользователя",_focusVisible:{borderColor:"brand.500",boxShadow:"0 0 0 1px var(--aithercol-colors-brand-500)"},...l("username",{required:!0,validate:o=>/^(?!.*__)[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(o)||"regex_username"})}),e.jsx(h,{text:"имя пользователя можно менять раз в 30 дней",error:s.username})]}),e.jsxs(p,{isInvalid:!!s.email,children:[e.jsx(u,{children:"email"}),e.jsx(j,{isDisabled:c,placeholder:"введите email",_focusVisible:{borderColor:"brand.500",boxShadow:"0 0 0 1px var(--aithercol-colors-brand-500)"},type:"email",...l("email",{required:!0})}),e.jsx(h,{error:s.email})]}),e.jsxs(p,{isInvalid:!!s.currency,children:[e.jsx(u,{children:"валюта"}),e.jsx(ae,{isDisabled:c,placeholder:"выберите валюту",_focusVisible:{borderColor:"brand.500",boxShadow:"0 0 0 1px var(--aithercol-colors-brand-500)"},...l("currency",{required:!0}),children:ie().map(o=>e.jsx("option",{value:o,children:o}))}),e.jsx(h,{error:s.currency})]}),e.jsxs(t,{direction:"column",spacing:2,children:[e.jsx(oe,{children:e.jsx(G,{in:!d.isOpen,animateOpacity:!0,children:e.jsx(y,{variant:"link",onClick:d.onOpen,children:"изменить пароль"})})}),e.jsx(G,{in:d.isOpen,animateOpacity:!0,children:e.jsxs(p,{isInvalid:!!s.password,children:[e.jsx(u,{children:"новый пароль"}),e.jsx(j,{isDisabled:c,placeholder:"придумайте пароль",type:"password",_focusVisible:{borderColor:"brand.500",boxShadow:"0 0 0 1px var(--aithercol-colors-brand-500)"},...l("password",{required:!1,minLength:3})}),e.jsx(h,{error:s.password})]})})]}),e.jsxs(p,{isInvalid:!!s.username,children:[e.jsx(u,{children:"секретный токен"}),e.jsxs(ne,{children:[e.jsx(j,{isReadOnly:!0,_focusVisible:{borderColor:"brand.500",boxShadow:"0 0 0 1px var(--aithercol-colors-brand-500)"},value:(R=r.props.auth)==null?void 0:R.profile.api_token,type:m?"text":"password"}),e.jsx(te,{width:"5rem",children:e.jsxs(t,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(V,{"aria-label":"copy",icon:m?e.jsx(le,{}):e.jsx(ce,{}),maxW:"1.75rem",minW:"1.75rem",variant:"ghost",h:"1.75rem",size:"sm",onClick:v.toggle}),e.jsx(V,{"aria-label":"refresh",icon:e.jsx(de,{}),maxW:"1.75rem",minW:"1.75rem",variant:"ghost",h:"1.75rem",size:"sm",onClick:async()=>{var n;if(!confirm("вы действительно обновить токен? обратите внимание, что ссылки на все виджеты изменятся!"))return;const i=await B.post("/dashboard/auth/profile/refresh_token",void 0,(n=r.props.auth)==null?void 0:n.token);if(i.errors){O(i.errors,a);return}await r.updateProfile(),a({status:"success",title:"токен обновлен!"})}})]})})]}),e.jsx(h,{text:"токен используется при формировании ссылок на виджеты.<br/>однако следите за тем, чтобы токен не стал известен посторонним лицам",error:null})]})]}),e.jsx(y,{type:"submit",children:"сохранить"})]})})}export{ue as default};
