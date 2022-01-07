"use strict";(self.webpackChunkpayload_starter_typescript=self.webpackChunkpayload_starter_typescript||[]).push([[892],{46892:(e,a,l)=>{l.r(a),l.d(a,{default:()=>E});var r=l(67294),t=l(38439),o=l(90546),n=l(54479),s=l(78285),i=l(87578),d=l(64012),c=l(3864),p=l(48170),u=l(90666),m=l(35193),w=l(54945),h=l(77070);l(35396);const v="field-type array",y=r.memo((e=>{const{onDragEnd:a,label:l,showError:o,errorMessage:i,rows:d,labels:c,addRow:p,removeRow:m,moveRow:y,path:E,fieldTypes:b,fields:R,permissions:g,value:f,readOnly:x,minRows:_,maxRows:k,required:I,description:O}=e,Z=k&&d.length>=k;return r.createElement(t.Z5,{onDragEnd:a},r.createElement("div",{className:v},r.createElement("div",{className:`${v}__error-wrap`},r.createElement(u.Z,{showError:o,message:i})),r.createElement("header",{className:`${v}__header`},r.createElement("h3",null,l),r.createElement(h.Z,{value:f,description:O})),r.createElement(t.bK,{droppableId:"array-drop"},(e=>r.createElement("div",{ref:e.innerRef,...e.droppableProps},d.length>0&&d.map(((e,a)=>r.createElement(s.Z,{readOnly:x,key:e.id,id:e.id,blockType:"array",label:c.singular,rowCount:d.length,rowIndex:a,addRow:p,removeRow:m,moveRow:y,parentPath:E,fieldTypes:b,fieldSchema:R,permissions:g,hasMaxRows:Z}))),(d.length<_||I&&0===d.length)&&r.createElement(w.Z,{type:"error"},"This field requires at least"," ",_?`${_} ${c.plural}`:`1 ${c.singular}`),0===d.length&&x&&r.createElement(w.Z,null,"This field has no"," ",c.plural,"."),e.placeholder))),!x&&!Z&&r.createElement("div",{className:`${v}__add-button-wrap`},r.createElement(n.Z,{onClick:()=>p(f),buttonStyle:"icon-label",icon:"plus",iconStyle:"with-border",iconPosition:"left"},`Add ${c.singular}`))))})),E=(0,o.Z)((e=>{var a,l;const{name:t,path:o,fields:n,fieldTypes:s,validate:u=m.array,required:w,maxRows:h,minRows:v,permissions:E,admin:{readOnly:b,description:R,condition:g}}=e,f=(null==(x=e)?void 0:x.labels)?x.labels:(null==x?void 0:x.label)?{singular:x.label,plural:void 0}:{singular:"Row",plural:"Rows"};var x;const _=null!==(a=null==e?void 0:e.label)&&void 0!==a?a:null===(l=null==e?void 0:e.labels)||void 0===l?void 0:l.singular,[k,I]=(0,r.useReducer)(i.Z,[]),O=(0,d.cI)(),{dispatchFields:Z}=O,T=o||t,C=(0,r.useCallback)((e=>u(e,{minRows:v,maxRows:h,required:w})),[u,h,v,w]),[D,M]=(0,r.useState)(!1),{showError:$,errorMessage:F,value:S,setValue:q}=(0,p.Z)({path:T,validate:C,disableFormData:D,ignoreWhileFlattening:!0,condition:g}),V=(0,r.useCallback)((async e=>{const a=await(0,c.Z)(n);Z({type:"ADD_ROW",rowIndex:e,subFieldState:a,path:T}),I({type:"ADD",rowIndex:e}),q(S+1)}),[I,Z,n,T,q,S]),A=(0,r.useCallback)((e=>{I({type:"REMOVE",rowIndex:e}),Z({type:"REMOVE_ROW",rowIndex:e,path:T})}),[I,Z,T]),N=(0,r.useCallback)(((e,a)=>{I({type:"MOVE",moveFromIndex:e,moveToIndex:a}),Z({type:"MOVE_ROW",moveFromIndex:e,moveToIndex:a,path:T})}),[I,Z,T]),P=(0,r.useCallback)((e=>{if(!e.destination)return;const a=e.source.index,l=e.destination.index;N(a,l)}),[N]);return(0,r.useEffect)((()=>{const e=O.getDataByPath(T);I({type:"SET_ALL",data:e||[]})}),[O,T]),(0,r.useEffect)((()=>{q((null==k?void 0:k.length)||0),0===(null==k?void 0:k.length)?M(!1):M(!0)}),[k,q]),r.createElement(y,{onDragEnd:P,label:_,showError:$,errorMessage:F,rows:k,labels:f,addRow:V,removeRow:A,moveRow:N,path:T,name:t,fieldTypes:s,fields:n,permissions:E,value:S,readOnly:b,minRows:v,maxRows:h,required:w,description:R})}))}}]);