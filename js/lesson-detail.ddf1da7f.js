(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lesson-detail"],{1014:function(t,e,s){"use strict";s.d(e,"s",function(){return o}),s.d(e,"t",function(){return r}),s.d(e,"n",function(){return c}),s.d(e,"c",function(){return l}),s.d(e,"d",function(){return u}),s.d(e,"p",function(){return d}),s.d(e,"x",function(){return m}),s.d(e,"o",function(){return p}),s.d(e,"r",function(){return f}),s.d(e,"g",function(){return v}),s.d(e,"y",function(){return g}),s.d(e,"j",function(){return _}),s.d(e,"i",function(){return b}),s.d(e,"f",function(){return h}),s.d(e,"b",function(){return w}),s.d(e,"l",function(){return C}),s.d(e,"w",function(){return x}),s.d(e,"m",function(){return q}),s.d(e,"h",function(){return U}),s.d(e,"v",function(){return O}),s.d(e,"e",function(){return y}),s.d(e,"k",function(){return T}),s.d(e,"u",function(){return k}),s.d(e,"A",function(){return j}),s.d(e,"a",function(){return D}),s.d(e,"q",function(){return P}),s.d(e,"z",function(){return R}),s.d(e,"B",function(){return $});var a=s("bc3a"),n=s.n(a),i=s("5f87");function o(t,e){return i["c"]?n.a.get("/v1/classes?limit=".concat(t,"&offset=").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function r(t,e,s){return i["c"]?n.a.get("/v1/users/".concat(t,"/assignclasses?limit=").concat(e,"&offset=").concat(s)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function c(t){return n.a.get("/v1/classes/".concat(t))}function l(t){return n.a.post("/v1/classes",t)}function u(t,e,s){return n.a.post("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules"),s)}function d(t,e,s){return Object(i["c"])()?n.a.get("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules/").concat(s)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function m(t,e){return Object(i["c"])()?n.a.patch("/v1/classes/".concat(t),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function p(t,e,s){return Object(i["c"])()?n.a.get("/v1/classes/".concat(t,"/learners?limit=").concat(e,"&offset=").concat(s)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function f(t){return Object(i["c"])()?n.a.get("/v1/classes/".concat(t,"/quiz")):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function v(t,e){return Object(i["c"])()?n.a.post("/v1/classes/".concat(t,"/quiz"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function g(t,e,s,a){return Object(i["c"])()?n.a.patch("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules/").concat(s),a):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function _(t,e,s){return Object(i["c"])()?n.a.delete("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules/").concat(s)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function b(t){return Object(i["c"])()?n.a.delete("/v1/classes/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function h(t){return Object(i["c"])()?n.a.post("/v1/classmodulequizzes",t):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function w(t,e){return Object(i["c"])()?n.a.post("/v1/modules/".concat(t,"/additionalcontent"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function C(t){return Object(i["c"])()?n.a.get("/v1/modules/".concat(t,"/additionalcontent")):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function x(t,e,s){return Object(i["c"])()?n.a.patch("/v1/modules/".concat(t,"/additionalcontent/").concat(e),s):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function q(t,e){return Object(i["c"])()?n.a.get("/v1/modules/".concat(t,"/additionalcontent/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function U(t,e){return Object(i["c"])()?n.a.delete("/v1/modules/".concat(t,"/additionalcontent/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function O(t){return Object(i["c"])()?n.a.get("/v1/classes/search?query=".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function y(t,e){return Object(i["c"])()?n.a.post("/v1/classes/".concat(t,"/lessons"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function T(t,e){return Object(i["c"])()?n.a.delete("/v1/classes/".concat(t,"/lessons/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function k(t,e){return Object(i["c"])()?n.a.get("/v1/classes/".concat(t,"/lessons/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function j(t,e,s){return Object(i["c"])()?n.a.patch("/v1/classes/".concat(t,"/lessons/").concat(e),s):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function D(t,e){return Object(i["c"])()?n.a.post("/v1/classes/".concat(t,"/assign"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function P(t,e){return Object(i["c"])()?n.a.get("/v1/classes/".concat(t,"/quiz/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function R(t,e,s){return Object(i["c"])()?n.a.patch("/v1/classes/".concat(t,"/quiz/").concat(e),s):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function $(t,e){return Object(i["c"])()?n.a.patch("/v1/classes/".concat(t,"/avatar"),{file:e}):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}},2132:function(t,e,s){"use strict";s("7f7f"),s("28a5");e["a"]={toolbar:"formatselect | bold italic strikethrough forecolor backcolor  | link image media  | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | codesample code",plugins:["code","paste","print","preview","searchreplace","autolink","visualblocks","visualchars","image","link","media","template","codesample","charmap ","hr ","anchor ","insertdatetime","advlist","lists","wordcount","spellchecker ","imagetools ","help"],branding:!1,imagetools_cors_hosts:["*","ipapi.emergingpastetforms.com"],height:350,paste_as_text:!1,convert_urls:!0,file_picker_types:"file image ",automatic_uploads:!0,images_upload_url:"https://ipapi.emergingplatforms.com/v1/course_files",file_picker_callback:function(t,e,s){var a=document.createElement("input");a.setAttribute("type","file"),a.setAttribute("accept","image/* ,\tapplication/pdf"),a.onchange=function(){var e=this.files[0],a=new FileReader;a.onload=function(){var n="blobid"+(new Date).getTime(),i=tinymce.activeEditor.editorUpload.blobCache,o=a.result.split(",")[1],r=i.create(n,e,o);i.add(r);var c=r.name()+".pdf";if("file"===s.filetype){var l,u,d=function(s){console.log(s),t(s,{text:e.name})},m=function(){console.log("failure could not upload file")};l=new XMLHttpRequest,l.withCredentials=!1,l.open("POST","https://ipapi.emergingplatforms.com/v1/course_files"),l.onload=function(){var t;200==l.status?(t=JSON.parse(l.responseText),t&&"string"==typeof t.location?d(t.location):m("Invalid JSON: "+l.responseText)):m("HTTP Error: "+l.status)},u=new FormData,u.append("file",r.blob(),c),l.send(u)}"image"===s.filetype&&t(r.blobUri(),{alt:e.name})},a.readAsDataURL(e)},a.click()},images_upload_handler:function(t,e,s){var a,n;a=new XMLHttpRequest,a.withCredentials=!1,a.open("POST","https://ipapi.emergingplatforms.com/v1/course_files/"),a.onload=function(){var t;200==a.status?(t=JSON.parse(a.responseText),t&&"string"==typeof t.location?e(t.location):s("Invalid JSON: "+a.responseText)):s("HTTP Error: "+a.status)},n=new FormData,n.append("file",t.blob(),t.filename()),a.send(n)}}},"214f":function(t,e,s){"use strict";var a=s("32e9"),n=s("2aba"),i=s("79e5"),o=s("be13"),r=s("2b4c");t.exports=function(t,e,s){var c=r(t),l=s(o,c,""[t]),u=l[0],d=l[1];i(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(n(String.prototype,t,u),a(RegExp.prototype,c,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},"25eb":function(t,e,s){},"28a5":function(t,e,s){s("214f")("split",2,function(t,e,a){"use strict";var n=s("aae3"),i=a,o=[].push,r="split",c="length",l="lastIndex";if("c"=="abbc"[r](/(b)*/)[1]||4!="test"[r](/(?:)/,-1)[c]||2!="ab"[r](/(?:ab)*/)[c]||4!="."[r](/(.?)(.?)/)[c]||"."[r](/()()/)[c]>1||""[r](/.?/)[c]){var u=void 0===/()??/.exec("")[1];a=function(t,e){var s=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(s,t,e);var a,r,d,m,p,f=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,_=void 0===e?4294967295:e>>>0,b=new RegExp(t.source,v+"g");u||(a=new RegExp("^"+b.source+"$(?!\\s)",v));while(r=b.exec(s)){if(d=r.index+r[0][c],d>g&&(f.push(s.slice(g,r.index)),!u&&r[c]>1&&r[0].replace(a,function(){for(p=1;p<arguments[c]-2;p++)void 0===arguments[p]&&(r[p]=void 0)}),r[c]>1&&r.index<s[c]&&o.apply(f,r.slice(1)),m=r[0][c],g=d,f[c]>=_))break;b[l]===r.index&&b[l]++}return g===s[c]?!m&&b.test("")||f.push(""):f.push(s.slice(g)),f[c]>_?f.slice(0,_):f}}else"0"[r](void 0,0)[c]&&(a=function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)});return[function(s,n){var i=t(this),o=void 0==s?void 0:s[e];return void 0!==o?o.call(s,i,n):a.call(String(i),s,n)},a]})},5060:function(t,e,s){"use strict";var a=s("f0b1"),n=s.n(a),i={create:{title:n.a.string().min(2).required(),description:n.a.string().min(2).required(),career_id:n.a.number().required(),exam_attempts:n.a.number().required(),file:n.a.required(),total_exam_question:n.a.number().required(),pass_grade:n.a.number().required(),exam_duration:n.a.number().integer().positive().required(),exam_instructions:n.a.string().min(2).required()},module:{title:n.a.string().min(2).required(),content:n.a.string().min(2).required()},content:{title:n.a.string().min(2).required(),content:n.a.string().min(2).required()},categories:{name:n.a.string().min(2).required()},update:{title:n.a.string().min(2),description:n.a.string().min(2),status:n.a.number(),exam_attempts:n.a.number(),total_exam_question:n.a.number(),pass_grade:n.a.number(),exam_duration:n.a.number().integer().positive(),exam_instructions:n.a.string().min(2)},quiz:{question:n.a.string().min(2).required(),option_a:n.a.string().min(2).required(),option_b:n.a.string().min(2).required(),option_c:n.a.string().min(2).required(),option_d:n.a.string().min(2).required(),answer:n.a.any().valid(["option_a","option_b","option_c","option_d"]).required()},updateModule:{title:n.a.string().min(2),content:n.a.string().min(2)},moduleQuiz:{question:n.a.string().min(2).required(),option_a:n.a.string().min(2).required(),option_b:n.a.string().min(2).required(),option_c:n.a.string().min(2).required(),option_d:n.a.string().min(2).required(),answer:n.a.string().min(2).required()},updateAnAdditionalContent:{title:n.a.string().min(2),content:n.a.string().min(2)},career:{name:n.a.string().min(2).required(),career_segment_id:n.a.number().required()},lesson:{title:n.a.string().min(2).required(),description:n.a.string().min(2).required()},segment:{name:n.a.string().min(2).required(),career_category_id:n.a.number().required()},updateQuiz:{question:n.a.string().min(2),option_a:n.a.string().min(2),option_b:n.a.string().min(2),option_c:n.a.string().min(2),option_d:n.a.string().min(2),answer:n.a.any().valid(["option_a","option_b","option_c","option_d"])}};e["a"]=i},"67cf":function(t,e,s){"use strict";var a=s("6b39"),n=s.n(a);n.a},"6b39":function(t,e,s){},"7f7f":function(t,e,s){var a=s("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in n||s("9e1e")&&a(n,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},aae3:function(t,e,s){var a=s("d3f4"),n=s("2d95"),i=s("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==n(t))}},c056:function(t,e,s){"use strict";var a=s("25eb"),n=s.n(a);n.a},f469:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loading?[s("div",{staticClass:"loading"},[s("Loader")],1)]:[s("section",{staticClass:"main-grid__row user-profile"},[s("div",{staticClass:"user-profile__card"},[s("div",{staticClass:"user-profile__primary"},[s("p",{staticClass:"user-profile__name"},[t._v(t._s(t.itemData.title))])])]),s("div",{staticClass:"user-profile__tabs"},[t._m(0),s("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[s("div",{staticClass:"tab-pane fade show active user-profile__tabs__section",attrs:{id:"edit-class",role:"tabpanel","aria-labelledby":"edit-class-tab"}},[s("div",{staticClass:"user-profile__notification"},[s("div",{staticClass:"user-profile__notification__item"},[s("div",[s("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.updateLesson(e)}}},[s("div",{staticClass:"settings__field"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-md-8"},[s("div",{staticClass:"settings__value"},[s("label",{attrs:{for:"jobTitle"}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.title,expression:"itemData.title"}],staticClass:"form-control",class:[{"is-invalid":t.errors.title}],attrs:{name:"title",value:"",type:"text",id:"jobTitle"},domProps:{value:t.itemData.title},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"title",e.target.value)}}})]),s("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.title))])])]),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"settings__value"},[s("editor",{ref:"myTextEditor",attrs:{init:t.init,options:t.editorOption},model:{value:t.itemData.description,callback:function(e){t.$set(t.itemData,"description",e)},expression:"itemData.description"}})],1),s("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.description))])])])]),s("div",{staticClass:"settings__primary"},[s("button",t._b({staticClass:"btn btn__save",attrs:{type:"button",name:"button"},on:{click:function(e){return e.preventDefault(),t.updateLesson(e)}}},"button",{disabled:t.loading},!1),[t._v("Save")]),t.loading?s("Loader"):t._e()],1)])])])])]),s("div",{staticClass:"tab-pane fade user-profile__tabs__section",attrs:{id:"quiz",role:"tabpanel","aria-labelledby":"quiz-tab"}},[s("div",{},[s("div",[s("div",{staticClass:"main__header"},[t._m(1),s("div",{staticClass:"d-flex"},[s("a",{staticClass:"btn btn__primary",attrs:{href:"#popup-article"}},[s("span",{staticClass:"btn__icon"},[s("svg",{attrs:{width:"24",height:"13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M8 5H5V2H3v3H0v2h3v3h2V7h3V5zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 0 18 0c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86 0 1.07-.34 2.04-.9 2.86.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 0 13 0c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16C20.45 8.89 21 9.82 21 11v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 8c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z",fill:"#fff"}})])]),t._v("Add a Module\n                      ")]),s("AddModule")],1)]),s("section",{staticClass:"main-grid__row contacts contacts--list"},[s("div",{staticClass:"contacts--list__wrapper"},[t._m(2),s("div",{staticClass:"contacts__body"},[t.modules.length?t._l(t.modules,function(e){return s("div",{key:e.id,staticClass:"contacts--list__item module",attrs:{lesson:e}},[s("p",{staticClass:"info__email"},[s("router-link",{attrs:{to:{name:"module-detail",params:{moduleId:e.id,lessonId:t.$route.params.lessonId,classId:t.$route.params.classId}}}},[t._v(t._s(e.title))])],1),s("p",{domProps:{innerHTML:t._s(e.content)}}),s("p",{staticClass:"btn__row"},[s("button",{staticClass:"btn btn__danger",on:{click:function(s){t.deleteClassModule(e)}}},[t._v("Delete")]),s("router-link",{staticClass:"btn btn__primary",attrs:{to:{name:"module-detail",params:{moduleId:e.id,lessonId:t.$route.params.lessonId,classId:t.$route.params.classId}}}},[t._v("View")])],1)])}):[s("p",[t._v("No lesson created yet")])]],2)])])])])])])])])]],2)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{id:"edit-class-tab","data-toggle":"tab",href:"#edit-class",role:"tab","aria-controls":"edit-class","aria-selected":"false"}},[t._v("Edit Lesson")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"quiz-tab","data-toggle":"tab",href:"#quiz",role:"tab","aria-controls":"quiz","aria-selected":"false"}},[t._v("Modules")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main__primary"},[s("h4",{staticClass:"main__title"},[t._v("Modules")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contacts--list__item head module"},[s("p",[t._v("Title")]),s("p",[t._v("Action")]),s("p",[t._v("Description")])])}],i=(s("ac6a"),s("456d"),s("cadf"),s("551c"),s("097d"),s("a753"),s("8096"),s("14e1"),s("953d")),o=s("555f"),r=s("8504"),c=s("e49c"),l=s("eae4"),u=s("5060"),d=s("1014"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-content"},[s("div",{staticClass:"popup",attrs:{id:"popup-article"}},[s("div",{staticClass:"popup__block"},[t._m(0),s("div",{staticClass:"modal-body modal__body"},[s("form",{staticClass:"modal__form",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.createModule(e)}}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"modal__label",attrs:{for:"class-title"}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.title,expression:"itemData.title",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.title}],attrs:{type:"text",id:"class-title",placeholder:"Class Title"},domProps:{value:t.itemData.title},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"title",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),s("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.title))])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"modal__label",attrs:{for:"class-content"}},[t._v("Content")]),s("editor",{ref:"myTextEditor",attrs:{init:t.init,options:t.editorOption},model:{value:t.itemData.content,callback:function(e){t.$set(t.itemData,"content",e)},expression:"itemData.content"}}),s("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.content))])],1)])]),s("div",{staticClass:"modal-footer modal__footer"},[t.loading?s("Loader"):t._e(),s("a",{attrs:{href:"#"}},[s("button",{staticClass:"btn btn--md",attrs:{type:"button",name:"button"},on:{click:t.clearErrors}},[t._v("Cancel")])]),s("button",{staticClass:"btn btn--md btn__primary",attrs:{type:"submit",name:"button"},on:{click:function(e){return e.preventDefault(),t.createModule(e)}}},[t._v("Save Module")])],1)])])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header modal__header"},[s("h3",{staticClass:"modal-title",attrs:{id:"contactModalTitle"}},[t._v("Add Class Module")]),s("a",{staticClass:"close popup__close",attrs:{href:"#"}},[t._v("close")])])}],f=s("be94"),v=s("2132"),g={name:"AddModule",mixins:[c["a"]],components:{Loader:o["a"],quillEditor:i["quillEditor"]},data:function(){return{init:v["a"],itemData:{},loading:!1,errors:{},editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]]}}}},watch:{issues:function(t){this.errors=Object(f["a"])({},t)}},methods:{createModule:function(){var t=this;if(this.validate(this.itemData,u["a"].module),Object.keys(this.issues).length)return this.errors=this.issues,!1;this.loading=!0;var e=this.$route.params,s=e.classId,a=e.lessonId;return Object(d["d"])(s,a,Object(f["a"])({},this.itemData,{online_class_id:this.$route.params.id,user_id:this.$session.get("id")})).then(function(e){201===e.status&&(t.loading=!1,t.itemData={},r["a"].$emit("new-module",e.data),Object(l["b"])({title:"Success! A module has been added"}))}).catch(function(e){return t.loading=!1,Object(l["a"])({title:"Ooops! Something went wrong. Pls try again."}),e}),!0}},computed:{editor:function(){return this.$refs.myTextEditor.quill}}},_=g,b=(s("c056"),s("2877")),h=Object(b["a"])(_,m,p,!1,null,"123139fa",null);h.options.__file="AddModule.vue";var w=h.exports,C={name:"LessonDetail",mixins:[c["a"]],data:function(){return{init:v["a"],loading:!0,itemData:{},errors:{},modules:[],editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]]}}}},components:{Loader:o["a"],AddModule:w,quillEditor:i["quillEditor"]},created:function(){var t=this;this.getLesson(),r["a"].$on("new-module",function(e){t.modules.unshift(e)})},methods:{getLesson:function(){var t=this;return Object(d["u"])(this.$route.params.classId,this.$route.params.lessonId).then(function(e){200===e.status&&(t.itemData=e.data.data,t.modules=e.data.data.modules,t.loading=!1)}).catch(function(e){return t.loading=!1,e}),!0},updateLesson:function(){var t=this,e=this.itemData,s=e.description,a=e.title,n={description:s,title:a};if(this.validate(n,u["a"].lesson),Object.keys(this.issues).length)return this.errors=this.issues,!1;var i=this.$route.params,o=i.classId,r=i.lessonId;return Object(d["A"])(o,r,n).then(function(e){200===e.status&&(t.loading=!1,Object(l["b"])({title:"Success! Lesson has been updated!"}))}).catch(function(e){return t.loading=!1,Object(l["a"])({title:"Ooops! Something went wrong. Pls try again."}),e}),!0},deleteClassModule:function(t){var e=this,s=this.$route.params,a=s.classId,n=s.lessonId;return Object(d["j"])(a,n,t.id).then(function(s){200===s.status&&(Object(l["b"])({title:"Success! Module has been deleted!"}),e.modules.splice(e.modules.indexOf(t),1),e.loading=!1)}).catch(function(t){return Object(l["a"])({title:"Oops! Something went wrong",text:t.data}),e.loading=!1,t}),!0}},computed:{editor:function(){return this.$refs.myTextEditor.quill}}},x=C,q=(s("67cf"),Object(b["a"])(x,a,n,!1,null,"c2ba846a",null));q.options.__file="LessonDetail.vue";e["default"]=q.exports}}]);
//# sourceMappingURL=lesson-detail.ddf1da7f.js.map