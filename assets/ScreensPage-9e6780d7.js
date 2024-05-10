import{r as b,j as e,M as v,u as N,i as m}from"./index-43c7d466.js";import{F as w}from"./Filters-51fc4307.js";const A="_button_1vpx4_1",M="_iconBox_1vpx4_27",k="_icon_1vpx4_27",D="_text_1vpx4_54",x={button:A,iconBox:M,icon:k,text:D},S="_add_column_modal_text_1kntp_1",L={add_column_modal_text:S},I=({isModalOpen:t,closeModal:s,onAddColumn:i})=>{const[a,l]=b.useState(""),r=c=>{l(c.target.value)},o=()=>{if(a.trim()===""){alert("Please enter a column name");return}i(a),s()};return e.jsx(e.Fragment,{children:e.jsxs(v,{isOpen:t,onClose:s,children:[e.jsx("input",{type:"text",value:a,onChange:r,placeholder:"Title"}),e.jsx("button",{className:L.add_column_modal_text,onClick:o,children:"Add"})]})})},O=({onAddColumn:t})=>{const{isModalOpen:s,openModal:i,closeModal:a}=N(),l=r=>{t(r),a()};return e.jsxs(e.Fragment,{children:[s&&e.jsx(I,{isModalOpen:s,closeModal:a,onAddColumn:l}),e.jsxs("button",{className:x.button,type:"button",onClick:i,children:[e.jsx("div",{className:x.iconBox,children:e.jsx("svg",{className:x.icon,width:"14",height:"14",children:e.jsx("use",{href:m+"#icon-plus"})})}),e.jsx("p",{className:x.text,children:"Add new column"})]})]})},E="_card_16jge_1",P="_cardLine_16jge_12",B="_textCardWrap_16jge_26",F="_title_16jge_30",T="_subscribe_16jge_38",q="_iconPriorityColor_16jge_51",Y="_vector_16jge_56",R="_addedInfoWrap_16jge_68",z="_propertyWrap_16jge_74",G="_caption_16jge_79",H="_priorityDataWrap_16jge_87",J="_circle_16jge_92",K="_text_16jge_26",Q="_buttonsWrap_16jge_105",U="_button_16jge_105",V="_icon_16jge_51",X="_green_16jge_121",Z="_red_16jge_126",ee="_iconAccent_16jge_136",n={card:E,cardLine:P,textCardWrap:B,title:F,subscribe:T,iconPriorityColor:q,vector:Y,addedInfoWrap:R,propertyWrap:z,caption:G,priorityDataWrap:H,circle:J,text:K,buttonsWrap:Q,button:U,icon:V,green:X,red:Z,iconAccent:ee},ne=t=>{const{title:s,subscription:i,priority:a,deadline:l}=t,r="#8fa1d0",o=j=>{if(j)return{backgroundColor:`${r}`}},c=()=>{console.log("Має відкритися модальне вікно - Edit card")},_=()=>{console.log("Має відкритися модальне вікно - Delete card")},p=()=>{console.log("Має відкритися tooltip - Change column")};return e.jsxs("div",{className:n.card,children:[e.jsx("div",{style:o(r),className:n.cardLine}),e.jsxs("div",{className:n.textCardWrap,children:[e.jsx("h4",{className:n.title,children:s}),e.jsx("p",{className:n.subscribe,children:i})]}),e.jsx("div",{className:n.vector}),e.jsxs("div",{className:n.addedInfoWrap,children:[e.jsxs("div",{className:n.propertyWrap,children:[e.jsxs("div",{children:[e.jsx("p",{className:n.caption,children:"Priority"}),e.jsxs("div",{className:n.priorityDataWrap,children:[e.jsx("div",{style:o(r),className:n.circle}),e.jsx("p",{className:n.text,children:a})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:n.caption,children:"Deadline"}),e.jsx("p",{className:n.text,children:l})]})]}),e.jsxs("div",{className:n.buttonsWrap,children:[e.jsx("button",{className:`${n.button} ${n.green}`,type:"button",children:e.jsx("svg",{className:n.iconAccent,width:"16",height:"16",children:e.jsx("use",{href:m+"#icon-bell"})})}),e.jsx("button",{className:`${n.button} ${n.green}`,type:"button",onClick:p,children:e.jsx("svg",{className:n.icon,width:"16",height:"16",children:e.jsx("use",{href:m+"#icon-arrow-circle-broken-right"})})}),e.jsx("button",{className:`${n.button} ${n.green}`,type:"button",onClick:c,children:e.jsx("svg",{className:n.icon,width:"16",height:"16",children:e.jsx("use",{href:m+"#icon-pen"})})}),e.jsx("button",{className:`${n.button} ${n.red}`,type:"button",onClick:_,children:e.jsx("svg",{className:n.icon,width:"16",height:"16",children:e.jsx("use",{href:m+"#icon-trash"})})})]})]})]})},te="_button_1dpdi_1",se="_iconBox_1dpdi_25",oe="_icon_1dpdi_25",ce="_text_1dpdi_39",g={button:te,iconBox:se,icon:oe,text:ce},ie=()=>{const t=()=>{console.log("Має відкритися модальне вікно - Add card")};return e.jsxs("button",{className:g.button,type:"button",onClick:t,children:[e.jsx("div",{className:g.iconBox,children:e.jsx("svg",{className:g.icon,width:"14",height:"14",children:e.jsx("use",{href:m+"#icon-plus"})})}),e.jsx("p",{className:g.text,children:"Add another card"})]})},ae="_delete_confirm_text_10iwb_1",le="_delete_confirm_btn_10iwb_6",re="_delete_cancel_btn_10iwb_13",C={delete_confirm_text:ae,delete_confirm_btn:le,delete_cancel_btn:re},de=({isModalOpen:t,closeModal:s,onConfirmDelete:i})=>e.jsx(e.Fragment,{children:e.jsxs(v,{isOpen:t,onClose:s,children:[e.jsx("p",{className:C.delete_confirm_text,children:"Are you sure?"}),e.jsx("button",{className:C.delete_confirm_btn,onClick:i,children:"Delete"}),e.jsx("button",{className:C.delete_cancel_btn,onClick:s,children:"Cancel"})]})}),_e="_edit_column_btn_1ye6f_1",ue={edit_column_btn:_e},me=({isModalOpen:t,closeModal:s,handleRenameColumn:i,currentName:a})=>{const[l,r]=b.useState(a),o=_=>{r(_.target.value)},c=()=>{console.log("New column name:",l),i(l),s()};return e.jsx(e.Fragment,{children:e.jsxs(v,{isOpen:t,onClose:s,children:[e.jsx("input",{type:"text",value:l,onChange:o}),e.jsx("button",{className:ue.edit_column_btn,onClick:c,children:"Add"})]})})},he="_item_10gi7_1",pe="_itemAdded_10gi7_8",xe="_columnCard_10gi7_33",ge="_text_10gi7_50",be="_buttonsWrapper_10gi7_57",je="_button_10gi7_57",Ce="_icon_10gi7_67",Ne="_green_10gi7_72",ve="_red_10gi7_77",fe="_cardsWrap_10gi7_87",d={item:he,itemAdded:pe,columnCard:xe,text:ge,buttonsWrapper:be,button:je,icon:Ce,green:Ne,red:ve,cardsWrap:fe},ye=({id:t,name:s,onDelete:i,index:a})=>{const l=[{id:"11",title:"The Watch Spot Design",subscription:"Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",priority:"Low",deadline:"12/05/2023"},{id:"11",title:"The Watch Spot Design",subscription:"Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",priority:"Low",deadline:"12/05/2023"},{id:"11",title:"The Watch Spot Design",subscription:"Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",priority:"Low",deadline:"12/05/2023"},{id:"11",title:"The Watch Spot Design",subscription:"Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",priority:"Low",deadline:"12/05/2023"}],[r,o]=b.useState(s),{openModal:c,closeModal:_,isModalOpen:p}=N(),{openModal:j,closeModal:f,isModalOpen:y}=N(),W=h=>{o(h)},$=()=>{i(a),f()};return e.jsxs("li",{className:l.length>0?`${d.item} ${d.itemAdded}`:`${d.item}`,children:[p&&e.jsx(me,{isModalOpen:p,closeModal:_,handleRenameColumn:W,currentName:r}),y&&e.jsx(de,{isModalOpen:y,closeModal:f,onConfirmDelete:$}),e.jsxs("div",{className:d.columnMainInfo,children:[e.jsxs("div",{className:d.columnCard,children:[e.jsx("p",{className:d.text,children:r}),e.jsxs("div",{className:d.buttonsWrapper,children:[e.jsx("button",{className:`${d.button} ${d.green}`,type:"button",onClick:c,children:e.jsx("svg",{className:d.icon,width:"16",height:"16",children:e.jsx("use",{href:m+"#icon-pen"})})}),e.jsx("button",{className:`${d.button} ${d.red}`,type:"button",onClick:j,children:e.jsx("svg",{className:d.icon,width:"16",height:"16",children:e.jsx("use",{href:m+"#icon-trash"})})})]})]}),e.jsx("div",{className:d.cardsWrap,children:l.map(h=>e.jsx(ne,{title:h.title,subscription:h.subscription,priority:h.priority,deadline:h.deadline},h.id))})]}),e.jsx(ie,{})]},t)},We="_container_bofio_1",$e="_imageStyles_bofio_18",we="_section_bofio_26",Ae="_activeSettingsWrapper_bofio_58",Me="_title_bofio_76",ke="_columnListWrap_bofio_89",De="_columnList_bofio_89",u={container:We,imageStyles:$e,section:we,activeSettingsWrapper:Ae,title:Me,columnListWrap:ke,columnList:De},Ie=()=>{const[t,s]=b.useState({name:"Project office",column:["To Do","In Progress","Done"],id:"12345",background:null}),i=t==null?void 0:t.background,a=o=>{if(o)return{backgroundImage:`url(${i})`}},l=o=>{s(c=>{const _=[...c.column];return _.splice(o,1),console.log({...c,column:_}),{...c,column:_}})},r=o=>{s(c=>({...c,column:[...c.column,o]}))};return e.jsx("div",{style:a(i),className:i?`${u.container} ${u.imageStyles}`:`${u.container}`,children:e.jsxs("section",{className:u.section,children:[e.jsxs("div",{className:u.activeSettingsWrapper,children:[e.jsx("h2",{className:u.title,children:t.name}),e.jsx(w,{})]}),e.jsx("div",{className:u.columnListWrap,children:e.jsxs("ul",{className:u.columnList,children:[t.column.map((o,c)=>e.jsx(ye,{name:o,onDelete:()=>l(c),index:c},o)),e.jsx(O,{onAddColumn:r})]})})]})})};export{Ie as default};