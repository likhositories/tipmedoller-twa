import{Y as u,Z as o,aa as y,ab as m,j as r,$ as l,a0 as d}from"./index-P0oc4blE.js";var[_,n]=u({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),v=o((s,e)=>{const a=y("Table",s),{className:t,layout:c,...i}=m(s);return r.jsx(_,{value:a,children:r.jsx(l.table,{ref:e,__css:{tableLayout:c,...a.table},className:d("chakra-table",t),...i})})});v.displayName="Table";var p=o((s,e)=>{const a=n();return r.jsx(l.thead,{...s,ref:e,__css:a.thead})}),x=o((s,e)=>{const a=n();return r.jsx(l.tr,{...s,ref:e,__css:a.tr})}),T=o((s,e)=>{const{placement:a="bottom",...t}=s,c=n();return r.jsx(l.caption,{...t,ref:e,__css:{...c.caption,captionSide:a}})});T.displayName="TableCaption";var f=o((s,e)=>{var a;const{overflow:t,overflowX:c,className:i,...b}=s;return r.jsx(l.div,{ref:e,className:d("chakra-table__container",i),...b,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:(a=t??c)!=null?a:"auto",overflowY:"hidden",maxWidth:"100%"}})}),j=o((s,e)=>{const a=n();return r.jsx(l.tbody,{...s,ref:e,__css:a.tbody})}),w=o(({isNumeric:s,...e},a)=>{const t=n();return r.jsx(l.td,{...e,ref:a,__css:t.td,"data-is-numeric":s})}),S=o(({isNumeric:s,...e},a)=>{const t=n();return r.jsx(l.th,{...e,ref:a,__css:t.th,"data-is-numeric":s})});export{f as T,v as a,p as b,x as c,S as d,j as e,w as f,T as g};
