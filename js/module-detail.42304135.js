(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["module-detail"],{1014:function(t,e,a){"use strict";a.d(e,"s",function(){return o}),a.d(e,"t",function(){return r}),a.d(e,"n",function(){return c}),a.d(e,"c",function(){return l}),a.d(e,"d",function(){return d}),a.d(e,"p",function(){return u}),a.d(e,"x",function(){return m}),a.d(e,"o",function(){return p}),a.d(e,"r",function(){return v}),a.d(e,"g",function(){return _}),a.d(e,"y",function(){return f}),a.d(e,"j",function(){return b}),a.d(e,"i",function(){return g}),a.d(e,"f",function(){return h}),a.d(e,"b",function(){return C}),a.d(e,"l",function(){return w}),a.d(e,"w",function(){return y}),a.d(e,"m",function(){return x}),a.d(e,"h",function(){return q}),a.d(e,"v",function(){return O}),a.d(e,"e",function(){return D}),a.d(e,"k",function(){return z}),a.d(e,"u",function(){return k}),a.d(e,"A",function(){return U}),a.d(e,"a",function(){return T}),a.d(e,"q",function(){return j}),a.d(e,"z",function(){return A}),a.d(e,"B",function(){return M});var s=a("bc3a"),i=a.n(s),n=a("5f87");function o(t,e){return n["c"]?i.a.get("/v1/classes?limit=".concat(t,"&offset=").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function r(t,e,a){return n["c"]?i.a.get("/v1/users/".concat(t,"/assignclasses?limit=").concat(e,"&offset=").concat(a)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function c(t){return i.a.get("/v1/classes/".concat(t))}function l(t){return i.a.post("/v1/classes",t)}function d(t,e,a){return i.a.post("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules"),a)}function u(t,e,a){return Object(n["c"])()?i.a.get("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules/").concat(a)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function m(t,e){return Object(n["c"])()?i.a.patch("/v1/classes/".concat(t),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function p(t,e,a){return Object(n["c"])()?i.a.get("/v1/classes/".concat(t,"/learners?limit=").concat(e,"&offset=").concat(a)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function v(t,e,a){return Object(n["c"])()?i.a.get("/v1/classes/".concat(t,"/quiz?query=all&limit=").concat(e,"&offset=").concat(a)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function _(t,e){return Object(n["c"])()?i.a.post("/v1/classes/".concat(t,"/quiz"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function f(t,e,a,s){return Object(n["c"])()?i.a.patch("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules/").concat(a),s):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function b(t,e,a){return Object(n["c"])()?i.a.delete("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules/").concat(a)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function g(t){return Object(n["c"])()?i.a.delete("/v1/classes/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function h(t){return Object(n["c"])()?i.a.post("/v1/classmodulequizzes",t):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function C(t,e){return Object(n["c"])()?i.a.post("/v1/modules/".concat(t,"/additionalcontent"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function w(t){return Object(n["c"])()?i.a.get("/v1/modules/".concat(t,"/additionalcontent")):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function y(t,e,a){return Object(n["c"])()?i.a.post("/v1/modules/".concat(t,"/additionalcontent/").concat(e),a):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function x(t,e){return Object(n["c"])()?i.a.get("/v1/modules/".concat(t,"/additionalcontent/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function q(t,e){return Object(n["c"])()?i.a.delete("/v1/modules/".concat(t,"/additionalcontent/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function O(t){return Object(n["c"])()?i.a.get("/v1/classes/search?query=".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function D(t,e){return Object(n["c"])()?i.a.post("/v1/classes/".concat(t,"/lessons"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function z(t,e){return Object(n["c"])()?i.a.delete("/v1/classes/".concat(t,"/lessons/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function k(t,e){return Object(n["c"])()?i.a.get("/v1/classes/".concat(t,"/lessons/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function U(t,e,a){return Object(n["c"])()?i.a.patch("/v1/classes/".concat(t,"/lessons/").concat(e),a):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function T(t,e){return Object(n["c"])()?i.a.post("/v1/classes/".concat(t,"/assign"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function j(t,e){return Object(n["c"])()?i.a.get("/v1/classes/".concat(t,"/quiz/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function A(t,e,a){return Object(n["c"])()?i.a.patch("/v1/classes/".concat(t,"/quiz/").concat(e),a):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function M(t,e){return Object(n["c"])()?i.a.patch("/v1/classes/".concat(t,"/avatar"),{file:e}):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}},2132:function(t,e,a){"use strict";a("7f7f"),a("28a5");e["a"]={toolbar:"formatselect | bold italic strikethrough forecolor backcolor  | link image media  | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | codesample code",plugins:["code","paste","print","preview","searchreplace","autolink","visualblocks","visualchars","image","link","media","template","codesample","charmap ","hr ","anchor ","insertdatetime","advlist","lists","wordcount","spellchecker ","imagetools ","help"],branding:!1,imagetools_cors_hosts:["*","ipapi.emergingpastetforms.com"],height:350,paste_as_text:!1,convert_urls:!0,file_picker_types:"file image ",automatic_uploads:!0,images_upload_url:"https://ipapi.emergingplatforms.com/v1/course_files",file_picker_callback:function(t,e,a){var s=document.createElement("input");s.setAttribute("type","file"),s.setAttribute("accept","image/* ,\tapplication/pdf"),s.onchange=function(){var e=this.files[0],s=new FileReader;s.onload=function(){var i="blobid"+(new Date).getTime(),n=tinymce.activeEditor.editorUpload.blobCache,o=s.result.split(",")[1],r=n.create(i,e,o);n.add(r);var c=r.name()+".pdf";if("file"===a.filetype){var l,d,u=function(a){console.log(a),t(a,{text:e.name})},m=function(){console.log("failure could not upload file")};l=new XMLHttpRequest,l.withCredentials=!1,l.open("POST","https://ipapi.emergingplatforms.com/v1/course_files"),l.onload=function(){var t;200==l.status?(t=JSON.parse(l.responseText),t&&"string"==typeof t.location?u(t.location):m("Invalid JSON: "+l.responseText)):m("HTTP Error: "+l.status)},d=new FormData,d.append("file",r.blob(),c),l.send(d)}"image"===a.filetype&&t(r.blobUri(),{alt:e.name})},s.readAsDataURL(e)},s.click()},images_upload_handler:function(t,e,a){var s,i;s=new XMLHttpRequest,s.withCredentials=!1,s.open("POST","https://ipapi.emergingplatforms.com/v1/course_files/"),s.onload=function(){var t;200==s.status?(t=JSON.parse(s.responseText),t&&"string"==typeof t.location?e(t.location):a("Invalid JSON: "+s.responseText)):a("HTTP Error: "+s.status)},i=new FormData,i.append("file",t.blob(),t.filename()),s.send(i)}}},"214f":function(t,e,a){"use strict";var s=a("32e9"),i=a("2aba"),n=a("79e5"),o=a("be13"),r=a("2b4c");t.exports=function(t,e,a){var c=r(t),l=a(o,c,""[t]),d=l[0],u=l[1];n(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,d),s(RegExp.prototype,c,2==e?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)}))}},"28a5":function(t,e,a){a("214f")("split",2,function(t,e,s){"use strict";var i=a("aae3"),n=s,o=[].push,r="split",c="length",l="lastIndex";if("c"=="abbc"[r](/(b)*/)[1]||4!="test"[r](/(?:)/,-1)[c]||2!="ab"[r](/(?:ab)*/)[c]||4!="."[r](/(.?)(.?)/)[c]||"."[r](/()()/)[c]>1||""[r](/.?/)[c]){var d=void 0===/()??/.exec("")[1];s=function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(a,t,e);var s,r,u,m,p,v=[],_=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,b=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,_+"g");d||(s=new RegExp("^"+g.source+"$(?!\\s)",_));while(r=g.exec(a)){if(u=r.index+r[0][c],u>f&&(v.push(a.slice(f,r.index)),!d&&r[c]>1&&r[0].replace(s,function(){for(p=1;p<arguments[c]-2;p++)void 0===arguments[p]&&(r[p]=void 0)}),r[c]>1&&r.index<a[c]&&o.apply(v,r.slice(1)),m=r[0][c],f=u,v[c]>=b))break;g[l]===r.index&&g[l]++}return f===a[c]?!m&&g.test("")||v.push(""):v.push(a.slice(f)),v[c]>b?v.slice(0,b):v}}else"0"[r](void 0,0)[c]&&(s=function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)});return[function(a,i){var n=t(this),o=void 0==a?void 0:a[e];return void 0!==o?o.call(a,n,i):s.call(String(n),a,i)},s]})},"2fa3":function(t,e,a){},5060:function(t,e,a){"use strict";a("cadf"),a("551c"),a("097d");var s=a("f0b1"),i=a.n(s),n={create:{title:i.a.string().min(2).required(),description:i.a.string().min(2).required(),career_id:i.a.number().required(),career_category_id:i.a.number(),career_segment_id:i.a.number(),exam_attempts:i.a.number().required(),file:i.a.required(),total_exam_question:i.a.number().required(),pass_grade:i.a.number().required(),exam_duration:i.a.number().integer().positive().required(),exam_instructions:i.a.string().min(2).required()},module:{title:i.a.string().min(2).required(),content:i.a.string().min(2).required()},content:{title:i.a.string().min(2).required(),content:i.a.string().min(2).required()},categories:{name:i.a.string().min(2).required()},update:{title:i.a.string().min(2),description:i.a.string().min(2),status:i.a.number(),career_id:i.a.number(),exam_attempts:i.a.number(),total_exam_question:i.a.number(),pass_grade:i.a.number(),exam_duration:i.a.number().integer().positive(),exam_instructions:i.a.string().min(2)},quiz:{question:i.a.string().required(),option_a:i.a.string().required(),option_b:i.a.string().required(),option_c:i.a.string().required(),option_d:i.a.string().required(),answer:i.a.any().valid(["option_a","option_b","option_c","option_d"])},updateModule:{title:i.a.string().min(2),content:i.a.string().min(2)},moduleQuiz:{question:i.a.string().min(2).required(),option_a:i.a.string().min(2).required(),option_b:i.a.string().min(2).required(),option_c:i.a.string().min(2).required(),option_d:i.a.string().min(2).required(),answer:i.a.string().min(2).required()},updateAnAdditionalContent:{title:i.a.string().min(2),content:i.a.string().min(2),file:i.a.string()},career:{name:i.a.string().min(2).required(),career_segment_id:i.a.number().required()},lesson:{title:i.a.string().min(2).required(),description:i.a.string().min(2).required()},segment:{name:i.a.string().min(2).required(),career_category_id:i.a.number().required()},updateQuiz:{question:i.a.string().required(),option_a:i.a.string().required(),option_b:i.a.string().required(),option_c:i.a.string().required(),option_d:i.a.string().required(),answer:i.a.any().valid(["option_a","option_b","option_c","option_d"])}};e["a"]=n},"63fa":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?[a("div",{staticClass:"loading"},[a("Loader")],1)]:[a("section",{staticClass:"main-grid__row user-profile"},[a("div",{staticClass:"user-profile__card"},[a("div",{staticClass:"user-profile__primary"},[a("p",{staticClass:"user-profile__name"},[t._v(t._s(t.itemData.title))])]),a("div",{staticClass:"user-profile__section"},[a("h3",{staticClass:"user-profile__heading"},[t._v("Module Information")]),a("div",{staticClass:"user-profile__item"},[a("p",{staticClass:"user-profile__section__title"},[t._v("Content:")]),a("p",{staticClass:"user-profile__content",domProps:{innerHTML:t._s(t.itemData.content)}})])])]),a("div",{staticClass:"user-profile__tabs"},[t._m(0),a("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a("div",{staticClass:"tab-pane fade show active user-profile__tabs__section",attrs:{id:"edit-class",role:"tabpanel","aria-labelledby":"edit-class-tab"}},[a("div",{staticClass:"user-profile__notification"},[a("div",{staticClass:"user-profile__notification__item"},[a("div",[a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.updateClassModule(e)}}},[a("div",{staticClass:"settings__field"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-8 p-0"},[a("div",{staticClass:"settings__value"},[a("label",{attrs:{for:"jobTitle"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.title,expression:"itemData.title"}],staticClass:"form-control",class:[{"is-invalid":t.errors.title}],attrs:{name:"title",value:"",type:"text",id:"jobTitle"},domProps:{value:t.itemData.title},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"title",e.target.value)}}})]),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.errors.title)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"settings__value"},[a("label",{attrs:{for:"class-desc"}},[t._v("Content")]),a("editor",{ref:"myTextEditor",attrs:{init:t.init,options:t.editorOption},model:{value:t.itemData.content,callback:function(e){t.$set(t.itemData,"content",e)},expression:"itemData.content"}})],1),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.errors.content)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])]),a("div",{staticClass:"settings__primary"},[a("button",t._b({staticClass:"btn btn__save",attrs:{type:"button",name:"button"},on:{click:function(e){return e.preventDefault(),t.updateClassModule(e)}}},"button",{disabled:t.loading},!1),[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t\t")]),t.loading?a("Loader"):t._e()],1)])])])])]),a("div",{staticClass:"tab-pane fade user-profile__tabs__section",attrs:{id:"quiz",role:"tabpanel","aria-labelledby":"quiz-tab"}},[a("div",{},[a("div",{staticClass:"main__header"},[t._m(1),a("div",{staticClass:"d-flex"},[a("button",{staticClass:"btn btn__primary",attrs:{type:"button",name:"button","data-toggle":"modal","data-target":"#quizModal"}},[a("span",{staticClass:"btn__icon"},[a("svg",{attrs:{width:"24",height:"13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M8 5H5V2H3v3H0v2h3v3h2V7h3V5zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 0 18 0c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86 0 1.07-.34 2.04-.9 2.86.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 0 13 0c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16C20.45 8.89 21 9.82 21 11v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 8c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z",fill:"#fff"}})])]),t._v("Add Quiz")]),a("AddModuleQuiz")],1)]),a("section",{staticClass:"main-grid__row contacts contacts--list"},[a("div",{staticClass:"contacts--list__wrapper"},[a("div",{staticClass:"contacts__body"},[t.quizzes.length?t._l(t.quizzes,function(e){return a("div",{key:e.id,attrs:{quiz:e}},[a("div",{staticClass:"user-profile__notification__item"},[a("div",[a("h5",{},[t._v(t._s(e.question))])]),a("div",{staticClass:"activity"},[a("div",[a("h6",{staticClass:"activity__header"},[t._v("Answer: "+t._s(e.answer))]),a("div",{staticClass:"activity__item"},[a("div",{staticClass:"activity__meta"},[a("span",{staticClass:"icon"},[a("svg",{attrs:{width:"13",height:"13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"none",d:"M0 0h13v13H0z"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.5 13a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-3.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z",fill:"#F2C94C"}})])]),a("p",{staticClass:"activity__title"},[t._v("Option A")])]),a("div",{staticClass:"activity__body"},[a("div",{},[a("p",{staticClass:"activity__text"},[t._v(t._s(e.option_a))])])])]),a("div",{staticClass:"activity__item"},[a("div",{staticClass:"activity__meta"},[a("span",{staticClass:"icon"},[a("svg",{attrs:{width:"13",height:"13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"none",d:"M0 0h13v13H0z"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.5 13a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-3.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z",fill:"#00A65A"}})])]),a("p",{staticClass:"activity__title"},[t._v("Option B")])]),a("div",{staticClass:"activity__body"},[a("div",{},[a("p",{staticClass:"activity__text"},[t._v(t._s(e.option_b))])])])]),a("div",{staticClass:"activity__item"},[a("div",{staticClass:"activity__meta"},[a("span",{staticClass:"icon"},[a("svg",{attrs:{width:"13",height:"13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("circle",{attrs:{cx:"6.5",cy:"6.5",r:"6.5",fill:"#27A9F8"}})])]),a("p",{staticClass:"activity__title"},[t._v("Option C")])]),a("div",{staticClass:"activity__body"},[a("div",{},[a("p",{staticClass:"activity__text"},[t._v(t._s(e.option_c))])])])]),a("div",{staticClass:"activity__item"},[a("div",{staticClass:"activity__meta"},[a("span",{staticClass:"icon"},[a("svg",{attrs:{width:"13",height:"13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("circle",{attrs:{cx:"6.5",cy:"6.5",r:"6.5",fill:"#27A9F8"}})])]),a("p",{staticClass:"activity__title"},[t._v("Option D")])]),a("div",{staticClass:"activity__body"},[a("div",{},[a("p",{staticClass:"activity__text"},[t._v(t._s(e.option_d))])])])])])])])])}):[a("p",[t._v("No quiz created yet")])]],2)])])])]),a("div",{staticClass:"tab-pane fade user-profile__tabs__section",attrs:{id:"content",role:"tabpanel","aria-labelledby":"content-tab"}},[a("div",{},[a("div",[a("div",{staticClass:"main__header"},[t._m(2),a("div",{staticClass:"d-flex"},[a("a",{staticClass:"open-popup",attrs:{href:"#popup-article"}},[a("button",{staticClass:"trigger btn btn__primary",attrs:{"data-modal-trigger":"trigger-1",type:"button",name:"button","data-toggle":"modal","data-target":"#contentModal"}},[a("span",{staticClass:"btn__icon"},[a("svg",{attrs:{width:"24",height:"13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M8 5H5V2H3v3H0v2h3v3h2V7h3V5zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 0 18 0c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86 0 1.07-.34 2.04-.9 2.86.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 0 13 0c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16C20.45 8.89 21 9.82 21 11v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 8c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z",fill:"#fff"}})])]),t._v("Add Content")])])])]),a("section",{staticClass:"main-grid__row contacts contacts--list"},[a("div",{staticClass:"contacts--list__wrapper"},[t._m(3),a("div",{staticClass:"contacts__body"},[a("AdditionalContent"),a("AdditionalContentModal")],1)])])])])])])])])]],2)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{id:"edit-class-tab","data-toggle":"tab",href:"#edit-class",role:"tab","aria-controls":"edit-class","aria-selected":"false"}},[t._v("Edit Module")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"quiz-tab","data-toggle":"tab",href:"#quiz",role:"tab","aria-controls":"quiz","aria-selected":"false"}},[t._v("Quiz")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"content-tab","data-toggle":"tab",href:"#content",role:"tab","aria-controls":"content","aria-selected":"false"}},[t._v("Additional Content")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main__primary"},[a("h4",{staticClass:"main__title"},[t._v("Quiz")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main__primary"},[a("h4",{staticClass:"main__title"},[t._v("Additional Content")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contacts--list__item head content"},[a("p",{staticClass:"info__email"},[t._v("Title")]),a("p",[t._v("Description")]),a("p",{staticClass:"btn__row"},[t._v("Actions")])])}],n=(a("ac6a"),a("456d"),a("a753"),a("8096"),a("14e1"),a("953d")),o=a("555f"),r=a("8504"),c=a("e49c"),l=a("eae4"),d=a("5060"),u=a("1014"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"quizModal",tabindex:"-1",role:"dialog","aria-labelledby":"quizModalTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body modal__body"},[a("form",{staticClass:"modal__form",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.createModuleQuiz(e)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"modal__label",attrs:{for:"question"}},[t._v("Question")]),a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.question,expression:"itemData.question",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.question}],attrs:{placeholder:"Type a question",id:"question",cols:"30",rows:"10"},domProps:{value:t.itemData.question},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"question",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.question)+"\n\t\t\t\t\t\t")])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"modal__label",attrs:{for:"option-a"}},[t._v("Option A")]),a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.option_a,expression:"itemData.option_a",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.option_a}],attrs:{placeholder:"Enter the first option",id:"option-a",cols:"30",rows:"10"},domProps:{value:t.itemData.option_a},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"option_a",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.option_a)+"\n\t\t\t\t\t\t")])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"modal__label",attrs:{for:"option-b"}},[t._v("Option B")]),a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.option_b,expression:"itemData.option_b",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.option_b}],attrs:{placeholder:"Enter the second option",id:"option-b",cols:"30",rows:"10"},domProps:{value:t.itemData.option_b},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"option_b",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.option_b)+"\n\t\t\t\t\t\t")])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"modal__label",attrs:{for:"option-c"}},[t._v("Option C")]),a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.option_c,expression:"itemData.option_c",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.option_c}],attrs:{placeholder:"Enter the third option",id:"option-c",cols:"30",rows:"10"},domProps:{value:t.itemData.option_c},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"option_c",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.option_c)+"\n\t\t\t\t\t\t")])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"modal__label",attrs:{for:"option_d"}},[t._v("Option D")]),a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.option_d,expression:"itemData.option_d",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.option_d}],attrs:{placeholder:"Enter the last option",id:"option_d",cols:"30",rows:"10"},domProps:{value:t.itemData.option_d},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"option_d",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.option_d)+"\n\t\t\t\t\t\t")])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"modal__label",attrs:{for:"category"}},[t._v("What option is the Answer")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.option,expression:"option"}],staticClass:"custom-select form-control",class:[{"is-invalid":t.errors.answer}],attrs:{id:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.option=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"option_a"}},[t._v("Option A")]),a("option",{attrs:{value:"option_b"}},[t._v("Option B")]),a("option",{attrs:{value:"option_c"}},[t._v("Option C")]),a("option",{attrs:{value:"option_d"}},[t._v("Option D")])]),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.answer)+"\n\t\t\t\t\t\t")])])])]),a("div",{staticClass:"modal-footer modal__footer"},[t.loading?a("Loader"):t._e(),a("button",{staticClass:"btn btn--md",attrs:{type:"button",name:"button"},on:{click:function(e){t.clearErrors()}}},[t._v("Cancel")]),a("button",{staticClass:"btn btn--md btn__primary",attrs:{type:"submit",name:"button"},on:{click:function(e){return e.preventDefault(),t.createModuleQuiz(e)}}},[t._v("\n\t\t\t\t\tSave Quiz")])],1)])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header modal__header"},[a("h3",{staticClass:"modal-title",attrs:{id:"questionModalTitle"}},[t._v("Add Quiz")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],v=a("be94"),_={name:"AddModuleQuiz",mixins:[c["a"]],data:function(){return{itemData:{option_a:"",option_b:"",option_c:"",option_d:""},errors:{},loading:!1,option:"",editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]]}}}},watch:{issues:function(t){this.errors=Object(v["a"])({},t)}},components:{Loader:o["a"],quillEditor:n["quillEditor"]},methods:{createModuleQuiz:function(){var t=this;return this.itemData.answer=this.option,this.validate(this.itemData,d["a"].moduleQuiz),Object.keys(this.issues).length?(this.errors=this.issues,!1):(this.itemData.class_module_id=this.$route.params.moduleId,this.loading=!0,Object(u["f"])(this.itemData).then(function(e){201===e.status&&(t.loading=!1,t.itemData={},r["a"].$emit("module-quiz-created",e.data),Object(l["b"])({title:"Success! A new quiz has been created"}))}).catch(function(){t.loading=!1,Object(l["a"])({title:"Oops! Something went wrong. Pls try again."})}),!0)}},computed:{editor:function(){return this.$refs.myTextEditor.quill}}},f=_,b=a("2877"),g=Object(b["a"])(f,m,p,!1,null,null,null);g.options.__file="AddModuleQuiz.vue";var h=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loadingContent?[a("div",{staticClass:"loading"},[a("Loader")],1)]:t.contents&&t.contents.length?t._l(t.contents,function(e){return a("div",{key:e.id,staticClass:"contacts--list__item content"},[a("p",{staticClass:"info__email"},[t._v("\n                    "+t._s(e.title)+"\n                ")]),a("p",{domProps:{innerHTML:t._s(e.content)}}),a("p",{staticClass:"btn__row"},[a("button",{staticClass:"btn btn__danger",on:{click:function(a){t.deleteAnAdditionalContent(e)}}},[t._v("\n\t\t\t\t\t\tDelete\n\t\t\t\t\t")]),a("router-link",{staticClass:"btn btn__primary",attrs:{to:{name:"additional-content-detail",params:{id:e.id,classId:t.$route.params.classId,lessonId:t.$route.params.lessonId,moduleId:t.$route.params.moduleId}}}},[t._v("\n\t\t\t\t\t\tView\n\t\t\t\t\t")])],1)])}):[a("p",[t._v("No additional created yet")])]],2)},w=[],y={name:"AdditionalContent",data:function(){return{contents:[],loadingContent:!0,contentLoaded:!1}},created:function(){var t=this;this.getContent(),r["a"].$on("content-created",function(e){t.contents.unshift(e)})},methods:{getContent:function(){var t=this;return Object(u["l"])(this.$route.params.moduleId).then(function(e){return 200===e.status?(t.contents=e.data,t.contentLoaded=!1,!0):(t.contentLoaded=!1,!1)}).catch(function(e){return t.contentLoaded=!1,e}).finally(function(){t.loadingContent=!1}),!0},deleteAnAdditionalContent:function(t){var e=this;return Object(u["h"])(this.$route.params.moduleId,t.id).then(function(a){200===a.status&&(Object(l["b"])({title:"Success! Module has been deleted!"}),e.contents.splice(e.contents.indexOf(t),1),e.loading=!1)}).catch(function(t){return Object(l["a"])({title:"Oops! Something went wrong",text:t.data}),e.loading=!1,t}),!0}},components:{Loader:o["a"]}},x=y,q=(a("8d83"),Object(b["a"])(x,C,w,!1,null,"b78a3804",null));q.options.__file="AdditionalContent.vue";var O=q.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-content"},[a("div",{staticClass:"popup",attrs:{id:"popup-article"}},[a("div",{staticClass:"popup__block"},[t._m(0),a("div",{staticClass:"modal-body modal__body"},[a("form",{staticClass:"modal__form",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.createContent(e)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"modal__label",attrs:{for:"class-title"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.title,expression:"itemData.title",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.title}],attrs:{type:"text",id:"class-title",placeholder:"Class Title"},domProps:{value:t.itemData.title},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"title",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),a("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.title))])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"modal__label",attrs:{for:"class-content"}},[t._v("Content")]),a("editor",{ref:"myTextEditor",attrs:{init:t.init},model:{value:t.itemData.content,callback:function(e){t.$set(t.itemData,"content",e)},expression:"itemData.content"}}),a("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.content))])],1)])]),a("div",{staticClass:"modal-footer modal__footer"},[t.loading?a("Loader"):t._e(),a("a",{attrs:{href:"#"}},[a("button",{staticClass:"btn btn--md",attrs:{type:"button",name:"button"},on:{click:t.clearErrors}},[t._v("Cancel")])]),a("button",{staticClass:"btn btn--md btn__primary",attrs:{type:"submit",name:"button"},on:{click:function(e){return e.preventDefault(),t.createContent(e)}}},[t._v("Save Content")])],1),a("a",{staticClass:"popup__close",attrs:{href:"#"}},[t._v("close")])])])])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header modal__header"},[a("h3",{staticClass:"modal-title",attrs:{id:"contentModalTitle"}},[t._v("Add Additional Content")])])}],k=a("2132"),U={name:"AdditionalContentModal",mixins:[c["a"]],data:function(){return{itemData:{},errors:{},loading:!1,init:k["a"]}},methods:{createContent:function(){var t=this;return this.validate(this.itemData,d["a"].content),Object.keys(this.issues).length?(this.errors=this.issues,!1):(this.loading=!0,Object(u["b"])(this.$route.params.moduleId,this.itemData).then(function(e){return 201===e.status&&(t.loading=!1,t.itemData={},r["a"].$emit("content-created",e.data),Object(l["b"])({title:"Success! Additional content has been added"})),!1}).catch(function(e){return t.loading=!1,Object(l["a"])({title:"Ooops! Something went wrong. Pls try again."}),e}),!0)}},components:{Loader:o["a"]},computed:{}},T=U,j=(a("cb22"),Object(b["a"])(T,D,z,!1,null,"70a25626",null));j.options.__file="AdditionalContentModal.vue";var A=j.exports,M={name:"ModuleDetail",mixins:[c["a"]],data:function(){return{init:k["a"],loading:!0,itemData:{},errors:{},quizzes:[],editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]]}}}},components:{Loader:o["a"],AddModuleQuiz:h,AdditionalContent:O,AdditionalContentModal:A,quillEditor:n["quillEditor"]},created:function(){var t=this;this.getClassModule(),r["a"].$on("module-quiz-created",function(e){t.quizzes.unshift(e)})},methods:{getClassModule:function(){var t=this,e=this.$route.params,a=e.classId,s=e.lessonId,i=e.moduleId;return Object(u["p"])(a,s,i).then(function(e){200===e.status&&(t.itemData=e.data.data,t.quizzes=e.data.data.quiz,t.loading=!1)}).catch(function(e){return t.loading=!1,e}),!0},updateClassModule:function(){var t=this,e=this.itemData,a=e.content,s=e.title,i={content:a,title:s};if(this.validate(i,d["a"].updateModule),Object.keys(this.issues).length)return this.errors=this.issues,!1;var n=this.$route.params,o=n.classId,r=n.lessonId,c=n.moduleId;return Object(u["y"])(o,r,c,i).then(function(e){200===e.status&&(t.loading=!1,Object(l["b"])({title:"Success! Module has been updated!"}))}).catch(function(e){return t.loading=!1,Object(l["a"])({title:"Ooops! Something went wrong. Pls try again."}),e}),!0}},computed:{editor:function(){return this.$refs.myTextEditor.editor}}},P=M,$=(a("b61f"),Object(b["a"])(P,s,i,!1,null,"062331fe",null));$.options.__file="ModuleDetail.vue";e["default"]=$.exports},"71ce":function(t,e,a){},"7f7f":function(t,e,a){var s=a("86cc").f,i=Function.prototype,n=/^\s*function ([^ (]*)/,o="name";o in i||a("9e1e")&&s(i,o,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},"8d83":function(t,e,a){"use strict";var s=a("e093"),i=a.n(s);i.a},aae3:function(t,e,a){var s=a("d3f4"),i=a("2d95"),n=a("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==i(t))}},b61f:function(t,e,a){"use strict";var s=a("71ce"),i=a.n(s);i.a},cb22:function(t,e,a){"use strict";var s=a("2fa3"),i=a.n(s);i.a},e093:function(t,e,a){}}]);
//# sourceMappingURL=module-detail.42304135.js.map