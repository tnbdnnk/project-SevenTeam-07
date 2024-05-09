import{r as b,j as e,M as v,u as N,i as u}from"./index-dbd1fd28.js";import{F as A}from"./Filters-7cb17031.js";const M="_button_1vpx4_1",w="_iconBox_1vpx4_27",D="_icon_1vpx4_27",k="_text_1vpx4_54",p={button:M,iconBox:w,icon:D,text:k},S="_add_column_modal_text_1kntp_1",L={add_column_modal_text:S},I=({isModalOpen:t,closeModal:s,onAddColumn:i})=>{const[a,l]=b.useState(""),r=o=>{l(o.target.value)},c=()=>{if(a.trim()===""){alert("Please enter a column name");return}i(a),s()};return e.jsx(e.Fragment,{children:e.jsxs(v,{isOpen:t,onClose:s,children:[e.jsx("input",{type:"text",value:a,onChange:r,placeholder:"Title"}),e.jsx("button",{className:L.add_column_modal_text,onClick:c,children:"Add"})]})})},O=({onAddColumn:t})=>{const{isModalOpen:s,openModal:i,closeModal:a}=N(),l=r=>{t(r),a()};return e.jsxs(e.Fragment,{children:[s&&e.jsx(I,{isModalOpen:s,closeModal:a,onAddColumn:l}),e.jsxs("button",{className:p.button,type:"button",onClick:i,children:[e.jsx("div",{className:p.iconBox,children:e.jsx("svg",{className:p.icon,width:"14",height:"14",children:e.jsx("use",{href:u+"#icon-plus"})})}),e.jsx("p",{className:p.text,children:"Add new column"})]})]})},E="_card_13rmc_1",P="_cardLine_13rmc_11",B="_textCardWrap_13rmc_25",F="_title_13rmc_29",z="_subscribe_13rmc_37",R="_iconPriorityColor_13rmc_50",T="_vector_13rmc_55",q="_addedInfoWrap_13rmc_67",Y="_propertyWrap_13rmc_73",G="_caption_13rmc_78",H="_priorityDataWrap_13rmc_86",J="_circle_13rmc_91",K="_text_13rmc_25",Q="_buttonsWrap_13rmc_104",U="_button_13rmc_104",V="_icon_13rmc_50",X="_green_13rmc_120",Z="_red_13rmc_125",ee="_iconAccent_13rmc_135",n={card:E,cardLine:P,textCardWrap:B,title:F,subscribe:z,iconPriorityColor:R,vector:T,addedInfoWrap:q,propertyWrap:Y,caption:G,priorityDataWrap:H,circle:J,text:K,buttonsWrap:Q,button:U,icon:V,green:X,red:Z,iconAccent:ee},ne=t=>{const{title:s,subscription:i,priority:a,deadline:l}=t,r="#8fa1d0",c=g=>{if(g)return{backgroundColor:`${r}`}},o=()=>{console.log("Має відкритися модальне вікно - Edit card")},_=()=>{console.log("Має відкритися модальне вікно - Delete card")},x=()=>{console.log("Має відкритися tooltip - Change column")};return e.jsxs("div",{className:n.card,children:[e.jsx("div",{style:c(r),className:n.cardLine}),e.jsxs("div",{className:n.textCardWrap,children:[e.jsx("h4",{className:n.title,children:s}),e.jsx("p",{className:n.subscribe,children:i})]}),e.jsx("div",{className:n.vector}),e.jsxs("div",{className:n.addedInfoWrap,children:[e.jsxs("div",{className:n.propertyWrap,children:[e.jsxs("div",{children:[e.jsx("p",{className:n.caption,children:"Priority"}),e.jsxs("div",{className:n.priorityDataWrap,children:[e.jsx("div",{style:c(r),className:n.circle}),e.jsx("p",{className:n.text,children:a})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:n.caption,children:"Deadline"}),e.jsx("p",{className:n.text,children:l})]})]}),e.jsxs("div",{className:n.buttonsWrap,children:[e.jsx("button",{className:`${n.button} ${n.green}`,type:"button",children:e.jsx("svg",{className:n.iconAccent,width:"16",height:"16",children:e.jsx("use",{href:u+"#icon-bell"})})}),e.jsx("button",{className:`${n.button} ${n.green}`,type:"button",onClick:x,children:e.jsx("svg",{className:n.icon,width:"16",height:"16",children:e.jsx("use",{href:u+"#icon-arrow-circle-broken-right"})})}),e.jsx("button",{className:`${n.button} ${n.green}`,type:"button",onClick:o,children:e.jsx("svg",{className:n.icon,width:"16",height:"16",children:e.jsx("use",{href:u+"#icon-pen"})})}),e.jsx("button",{className:`${n.button} ${n.red}`,type:"button",onClick:_,children:e.jsx("svg",{className:n.icon,width:"16",height:"16",children:e.jsx("use",{href:u+"#icon-trash"})})})]})]})]})},te="_button_1yrcz_1",se="_iconBox_1yrcz_25",ce="_icon_1yrcz_25",oe="_text_1yrcz_39",j={button:te,iconBox:se,icon:ce,text:oe},ie=()=>{const t=()=>{console.log("Має відкритися модальне вікно - Add card")};return e.jsxs("button",{className:j.button,type:"button",onClick:t,children:[e.jsx("div",{className:j.iconBox,children:e.jsx("svg",{className:j.icon,width:"14",height:"14",children:e.jsx("use",{href:u+"#icon-plus"})})}),e.jsx("p",{className:j.text,children:"Add another card"})]})},ae="_delete_confirm_text_10iwb_1",re="_delete_confirm_btn_10iwb_6",le="_delete_cancel_btn_10iwb_13",C={delete_confirm_text:ae,delete_confirm_btn:re,delete_cancel_btn:le},de=({isModalOpen:t,closeModal:s,onConfirmDelete:i})=>e.jsx(e.Fragment,{children:e.jsxs(v,{isOpen:t,onClose:s,children:[e.jsx("p",{className:C.delete_confirm_text,children:"Are you sure?"}),e.jsx("button",{className:C.delete_confirm_btn,onClick:i,children:"Delete"}),e.jsx("button",{className:C.delete_cancel_btn,onClick:s,children:"Cancel"})]})}),_e="_edit_column_btn_1ye6f_1",me={edit_column_btn:_e},ue=({isModalOpen:t,closeModal:s,handleRenameColumn:i,currentName:a})=>{const[l,r]=b.useState(a),c=_=>{r(_.target.value)},o=()=>{console.log("New column name:",l),i(l),s()};return e.jsx(e.Fragment,{children:e.jsxs(v,{isOpen:t,onClose:s,children:[e.jsx("input",{type:"text",value:l,onChange:c}),e.jsx("button",{className:me.edit_column_btn,onClick:o,children:"Add"})]})})},he="_item_12ih9_1",xe="_itemAdded_12ih9_8",pe="_columnCard_12ih9_32",je="_text_12ih9_52",be="_buttonsWrapper_12ih9_59",ge="_button_12ih9_59",Ce="_icon_12ih9_69",Ne="_green_12ih9_74",ve="_red_12ih9_79",ye="_cardsWrap_12ih9_89",d={item:he,itemAdded:xe,columnCard:pe,text:je,buttonsWrapper:be,button:ge,icon:Ce,green:Ne,red:ve,cardsWrap:ye},fe=({id:t,name:s,onDelete:i,index:a})=>{const l=[{id:"11",title:"The Watch Spot Design",subscription:"Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",priority:"Low",deadline:"12/05/2023"},{id:"22",title:"Design",subscription:"Your design should be unique, innovative, and reflective of the latest trends in watch design.",priority:"Low",deadline:"22/05/2023"}],[r,c]=b.useState(s),{openModal:o,closeModal:_,isModalOpen:x}=N(),{openModal:g,closeModal:y,isModalOpen:f}=N(),$=h=>{c(h)},W=()=>{i(a),y()};return e.jsxs("li",{className:`${d.item} ${d.itemAdded}`,children:[x&&e.jsx(ue,{isModalOpen:x,closeModal:_,handleRenameColumn:$,currentName:r}),f&&e.jsx(de,{isModalOpen:f,closeModal:y,onConfirmDelete:W}),e.jsxs("div",{className:d.columnMainInfo,children:[e.jsxs("div",{className:d.columnCard,children:[e.jsx("p",{className:d.text,children:r}),e.jsxs("div",{className:d.buttonsWrapper,children:[e.jsx("button",{className:`${d.button} ${d.green}`,type:"button",onClick:o,children:e.jsx("svg",{className:d.icon,width:"16",height:"16",children:e.jsx("use",{href:u+"#icon-pen"})})}),e.jsx("button",{className:`${d.button} ${d.red}`,type:"button",onClick:g,children:e.jsx("svg",{className:d.icon,width:"16",height:"16",children:e.jsx("use",{href:u+"#icon-trash"})})})]})]}),e.jsx("div",{className:d.cardsWrap,children:l.map(h=>e.jsx(ne,{title:h.title,subscription:h.subscription,priority:h.priority,deadline:h.deadline},h.id))})]}),e.jsx(ie,{})]},t)},$e="_container_3jg3x_1",We="_imageStyles_3jg3x_43",Ae="_section_3jg3x_51",Me="_activeSettingsWrapper_3jg3x_101",we="_title_3jg3x_128",De="_columnListWrap_3jg3x_141",ke="_columnList_3jg3x_141",m={container:$e,imageStyles:We,section:Ae,activeSettingsWrapper:Me,title:we,columnListWrap:De,columnList:ke},Ie=()=>{const[t,s]=b.useState({name:"Project office",column:["To Do","In Progress","Done"],id:"12345",background:null}),i=t==null?void 0:t.background,a=c=>{if(c)return{backgroundImage:`url(${i})`}},l=c=>{s(o=>{const _=[...o.column];return _.splice(c,1),console.log({...o,column:_}),{...o,column:_}})},r=c=>{s(o=>({...o,column:[...o.column,c]}))};return e.jsx("div",{style:a(i),className:i?`${m.container} ${m.imageStyles}`:`${m.container}`,children:e.jsxs("section",{className:m.section,children:[e.jsxs("div",{className:m.activeSettingsWrapper,children:[e.jsx("h2",{className:m.title,children:t.name}),e.jsx(A,{})]}),e.jsx("div",{className:m.columnListWrap,children:e.jsxs("ul",{className:m.columnList,children:[t.column.map((c,o)=>e.jsx(fe,{name:c,onDelete:()=>l(o),index:o},c)),e.jsx(O,{onAddColumn:r})]})})]})})};export{Ie as default};
