"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[242],{4242:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var a,r,o,i,x=t(168),p=t(2791),s=t(885),c=t(4059),u=JSON.parse('{"TN":{"en":"Phonebook","ua":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430 "},"Jx":{"en":"Contacts","ua":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"},"u2":{"en":"Name","ua":"\u0406\u043c\'\u044f"},"Rx":{"en":"Number","ua":"\u041d\u043e\u043c\u0435\u0440"},"hX":{"en":"Find contacts by name","ua":"\u0417\u043d\u0430\u0439\u0442\u0438 \u0437\u0430 \u0456\u043c\'\u044f\u043c"},"LS":{"en":"Add contact","ua":"\u0414\u043e\u0434\u0430\u0442\u0438"},"MN":{"en":"Delete","ua":"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"},"i9":{"en":"Hey!","ua":"\u0413\u0435\u0439!"},"iD":{"en":"  seems is already in your contact list...","ua":"  \u0437\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0443\u0436\u0435 \u0454 \u0432 \u0442\u0432\u043e\u0457\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445..."},"XQ":{"en":"OK","ua":"\u0414\u043e\u0431\u0440\u0435"}}'),d=t(5299),l=t(6031),h=t(184);var f,b,g,m,w,Z,v,j,y,k=l.ZP.form(a||(a=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 0;\n"]))),z=l.ZP.label(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0px;\n  font-size: 30px;\n  /* font-weight: 500; */\n  color: #210672;\n  text-shadow: 4px 2px 4px #e9f999;\n"]))),C=l.ZP.input(o||(o=(0,x.Z)(["\n  width: 180px;\n  height: 30px;\n  margin-left: 10px;\n  /* margin-bottom: 5px; */\n  -moz-box-shadow: 6px 8px 4px #333333;\n  -webkit-box-shadow: 6px 8px 4px #333333;\n  box-shadow: 6px 8px 4px #333333;\n  font-size: 20px;\n"]))),P=l.ZP.button(i||(i=(0,x.Z)(["\n  font-family: inherit;\n  font-size: 25px;\n  color: ",";\n  width: 150px;\n  height: 50px;\n  background-color: ",";\n  border-radius: 10px;\n  -moz-box-shadow: 6px 8px 4px #333333;\n  -webkit-box-shadow: 6px 8px 4px #333333;\n  box-shadow: ",";\n"])),(function(n){return n.disabled?"#7c7a7a":" #210672"}),(function(n){return n.disabled?"#afaaaa":"#4db0ea"}),(function(n){return n.disabled?"0px 0px 4px #333333":"6px 8px 4px\n    #333333"})),L=function(n){var e=n.contacts,t=n.onSubmit,a=(0,p.useContext)(c.A).lang,r=(0,p.useState)(""),o=(0,s.Z)(r,2),i=o[0],x=o[1],l=(0,p.useState)(""),f=(0,s.Z)(l,2),b=f[0],g=f[1],m=function(n){switch(n.currentTarget.name){case"name":x(n.currentTarget.value);break;case"number":g(n.currentTarget.value);break;default:return}},w=u.i9[a],Z=u.iD[a],v=u.XQ[a],j=function(){x(""),g("")},y=u.u2[a],L=u.Rx[a],S=u.LS[a];return(0,h.jsxs)(k,{onSubmit:function(n){n.preventDefault(),e.find((function(n){return n.name===i}))?d.Report.warning(w,"".concat(i)+Z,v):(t(i,b),j())},children:[(0,h.jsxs)(z,{children:[y,(0,h.jsx)(C,{type:"text",name:"name",value:i,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)(z,{children:[L,(0,h.jsx)(C,{type:"tel",name:"number",value:b,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)(P,{type:"submit",disabled:!i||!b,children:S})]})},S=function(){return(0,p.useContext)(c.A)},N=t(2134),A=l.ZP.li(f||(f=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  border: dashed;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 25px;\n  color: #210672;\n  text-shadow: 4px 2px 4px #e9f999;\n"]))),_=l.ZP.span(b||(b=(0,x.Z)(["\n  margin-right: 10px;\n"]))),D=l.ZP.button(g||(g=(0,x.Z)(["\n  margin-left: auto;\n  font-family: inherit;\n  font-size: 25px;\n\n  color: #210672;\n  width: 150px;\n  height: 40px;\n\n  background-color: #4db0ea;\n  border-radius: 10px;\n  -moz-box-shadow: 6px 8px 4px #333333;\n  -webkit-box-shadow: 6px 8px 4px #333333;\n  box-shadow: 6px 8px 4px #333333;\n"]))),T=function(n){var e=n.contacts,t=n.onDeleteContact,a=S().lang,r=u.MN[a];return(0,h.jsx)("ul",{children:e.map((function(n){var e=n.name,a=n.phone,o=n.id;return(0,h.jsxs)(A,{children:[(0,h.jsx)(_,{children:(0,h.jsx)(N.Nhm,{color:"black",size:30})}),(0,h.jsxs)("p",{children:[e,": ",a]}),(0,h.jsx)(D,{type:"button",onClick:function(){return t(o)},children:r})]},o)}))})},K=l.ZP.label(m||(m=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0px;\n  font-size: 30px;\n  /* font-weight: 500; */\n  color: #210672;\n  text-shadow: 4px 2px 4px #e9f999;\n"]))),J=l.ZP.input(w||(w=(0,x.Z)(["\n  width: 180px;\n  height: 30px;\n  margin-left: 10px;\n  /* margin-bottom: 5px; */\n  -moz-box-shadow: 6px 8px 4px #333333;\n  -webkit-box-shadow: 6px 8px 4px #333333;\n  box-shadow: 6px 8px 4px #333333;\n  font-size: 20px;\n"]))),X=function(n){var e=n.value,t=n.onChange,a=S().lang,r=u.hX[a];return(0,h.jsxs)(K,{children:[r,(0,h.jsx)(J,{type:"text",name:"filter",value:e,onChange:t})]})},F=l.ZP.div(Z||(Z=(0,x.Z)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  display: flax;\n  align-items: center;\n  justify-content: center;\n  background-color: #7cbbb0;\n  width: 80px;\n  height: 30px;\n  border: 5px groove #1c6ea4;\n  border-radius: 40px 40px 40px 40px;\n  box-shadow: 6px 8px 4px #333333;\n  cursor: pointer;\n"]))),M=l.ZP.span(v||(v=(0,x.Z)(["\n  text-decoration: ",";\n  font-size: ",";\n  color: ",";\n  /* text-shadow: ","; */\n  font-style: italic;\n  font-family: inherit;\n"])),(function(n){return"currentLang"===n.data?" underline":"none"}),(function(n){return"currentLang"===n.data?" 20px":"17px"}),(function(n){return"currentLang"===n.data?" #210672":"#7c7a7a"}),(function(n){return"currentLang"===n.data?"4px 2px 4px #e9f999":"none"})),R=l.ZP.span(j||(j=(0,x.Z)(["\n  font-size: 20px;\n  color: #210672;\n  /* text-shadow: 4px 2px 4px #e9f999; */\n"]))),q=function(){var n=S(),e=n.lang,t=n.switchLang;return(0,h.jsxs)(F,{children:[(0,h.jsx)(M,{onClick:t,data:"ua"===e?"currentLang":"secondLang",children:"UA"}),(0,h.jsx)(R,{children:" | "}),(0,h.jsx)(M,{onClick:t,data:"en"===e?"currentLang":"secondLang",children:"EN"})]})},E=t(8402);function G(){return(0,h.jsxs)($,{children:[(0,h.jsx)(E.sv,{visible:!0,height:"80",width:"80",ariaLabel:"comment-loading",wrapperStyle:{},wrapperClass:"comment-wrapper",color:"#fff",backgroundColor:"#4db0ea"}),";"]})}var O,Q,$=l.ZP.div(y||(y=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),B=t(4802),H=t(3085),I=t(5496),U=t(6351);function W(){var n=(0,B.v9)(U.zK),e=(0,B.v9)(U.Sb),t=(0,B.v9)(U.ih),a=(0,B.I0)(),r=S().lang;(0,p.useEffect)((function(){a((0,H.yF)())}),[a]);var o=u.TN[r],i=u.Jx[r];return(0,h.jsxs)(V,{children:[(0,h.jsx)(Y,{children:o}),(0,h.jsx)(q,{}),(0,h.jsx)(L,{onSubmit:function(n,e){var t={name:n,phone:e},r=(0,H.uK)(t);a(r)},contacts:e}),(0,h.jsx)(Y,{children:i}),(0,h.jsx)(X,{value:n,onChange:function(n){a((0,I.W)(n.currentTarget.value))}}),t&&(0,h.jsx)(G,{}),(0,h.jsx)(T,{contacts:e,onDeleteContact:function(n){a((0,H.GK)(n))}})]})}var V=l.ZP.div(O||(O=(0,x.Z)(["\n  position: relative;\n  border: 1px solid black;\n  width: 800px;\n  margin: 20px auto;\n  padding: 20px;\n  background-color: #3df4d5;\n  border-radius: 20px;\n  -moz-box-shadow: 10px 10px 25px #333333;\n  -webkit-box-shadow: 10px 10px 25px #333333;\n  box-shadow: 10px 10px 25px #333333;\n"]))),Y=l.ZP.h2(Q||(Q=(0,x.Z)(["\n  font-size: 40px;\n  color: #210672;\n  text-shadow: 4px 2px 4px #e9f999;\n"]))),nn=(0,p.memo)(W)},6351:function(n,e,t){t.d(e,{$D:function(){return x},Gl:function(){return i},Sb:function(){return r},ih:function(){return o},zK:function(){return a}});var a=function(n){return n.filter},r=function(n){var e=n.filter,t=n.contacts;if(!e)return t.items;var a=e.toLowerCase();return t.items.filter((function(n){return n.name.toLowerCase().includes(a)}))},o=function(n){return n.contacts.loading},i=function(n){return n.auth.error||{}},x=function(n){return n.auth.isLogin}}}]);
//# sourceMappingURL=242.14103d96.chunk.js.map