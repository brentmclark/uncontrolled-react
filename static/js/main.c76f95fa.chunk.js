(this["webpackJsonp@uncontrolled/react-example"]=this["webpackJsonp@uncontrolled/react-example"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);a(3);var n=a(0),r=a.n(n),l=a(5),i=a.n(l),o=a(6),c=a(7),m=a(2),u={validationErrorClass:"validation-error",parentErrorClass:"has-validation-error",errorElementTagName:"div",inputElementSelector:"input, select, textarea"};var s=function(e){var t=r.a.useState(!1),a=Object(m.a)(t,2),n=a[0],l=a[1];return r.a.useRef(null),r.a.useEffect((function(){var t=Object.assign({},u,e),a=t.validationErrorClass,r=t.parentErrorClass,i=t.errorElementTagName,o=t.inputElementSelector,c=document.querySelectorAll(o);console.log({inputs:c,inputElementSelector:o});return c.forEach((function(e){function t(t){var n=t.insertError,l=e.parentNode,o=l.querySelector(".".concat(a))||document.createElement(i);!e.validity.valid&&e.validationMessage?(o.className=a,o.textContent=e.validationMessage,n&&(l.appendChild(o,e),l.classList.add(r))):(l.classList.remove(r),o.remove())}e.addEventListener("input",(function(){t({insertError:!1}),!1===n&&l(!0)})),e.addEventListener("invalid",(function(e){e.preventDefault(),t({insertError:!0})}))})),function(){c.forEach((function(e){e.removeEventListener("input",handleInput),e.removeEventListener("invalid",handleInvalid)}))}}),[]),{Form:function(e){var t=e.onSubmit,a=e.children,n=Object(c.a)(e,["onSubmit","children"]);return r.a.createElement("form",Object.assign({},n,{onSubmit:function(e){e.preventDefault(),console.log("Submitting...");var a,n=new FormData(e.target),r={},l=Object(o.a)(n.entries());try{for(l.s();!(a=l.n()).done;){var i=Object(m.a)(a.value,2),c=i[0],u=i[1];r[c]=u}}catch(s){l.e(s)}finally{l.f()}t&&t({event:e,formData:n,fieldData:r})}}),a)},isDirty:n}},d=function(e){return r.a.createElement(s,{onSubmit:function(e){var t=e.fieldData,a=t.firstName,n=t.lastName,r=t.email,l=t.phoneNumber;alert("\n        Hello ".concat(a," ").concat(n,"!\r\n\n        Since you signed up, we will email you at ").concat(r," or call you at ").concat(l,".\r\n\n        Thanks!\n      "))}},(function(e){var t=e.formIsDirty;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",name:"firstName",required:!0})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",name:"lastName",required:!0})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Email Address"),r.a.createElement("input",{type:"email",name:"email",required:!0})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{type:"tel",name:"phoneNumber",required:!0,pattern:"\\d{10}"})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Sign Me Up!"),t&&r.a.createElement("span",{style:{marginLeft:"15px",color:"red",fontWeight:900}},"The form is dirty")))}))};i.a.render(r.a.createElement(d,null),document.getElementById("root"))},3:function(e,t,a){},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.c76f95fa.chunk.js.map