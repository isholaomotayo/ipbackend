(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["classes"],{1014:function(t,e,s){"use strict";s.d(e,"s",function(){return r}),s.d(e,"t",function(){return o}),s.d(e,"n",function(){return c}),s.d(e,"c",function(){return l}),s.d(e,"d",function(){return u}),s.d(e,"p",function(){return d}),s.d(e,"x",function(){return m}),s.d(e,"o",function(){return f}),s.d(e,"r",function(){return p}),s.d(e,"g",function(){return v}),s.d(e,"y",function(){return h}),s.d(e,"j",function(){return g}),s.d(e,"i",function(){return _}),s.d(e,"f",function(){return b}),s.d(e,"b",function(){return x}),s.d(e,"l",function(){return C}),s.d(e,"w",function(){return w}),s.d(e,"m",function(){return U}),s.d(e,"h",function(){return y}),s.d(e,"v",function(){return q}),s.d(e,"e",function(){return P}),s.d(e,"k",function(){return T}),s.d(e,"u",function(){return O}),s.d(e,"A",function(){return k}),s.d(e,"a",function(){return D}),s.d(e,"q",function(){return j}),s.d(e,"z",function(){return R}),s.d(e,"B",function(){return $});var a=s("bc3a"),n=s.n(a),i=s("5f87");function r(t,e){return i["c"]?n.a.get("/v1/classes?limit=".concat(t,"&offset=").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function o(t,e,s){return i["c"]?n.a.get("/v1/users/".concat(t,"/assignclasses?limit=").concat(e,"&offset=").concat(s)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function c(t){return n.a.get("/v1/classes/".concat(t))}function l(t){return n.a.post("/v1/classes",t)}function u(t,e,s){return n.a.post("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules"),s)}function d(t,e,s){return Object(i["c"])()?n.a.get("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules/").concat(s)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function m(t,e){return Object(i["c"])()?n.a.patch("/v1/classes/".concat(t),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function f(t,e,s){return Object(i["c"])()?n.a.get("/v1/classes/".concat(t,"/learners?limit=").concat(e,"&offset=").concat(s)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function p(t){return Object(i["c"])()?n.a.get("/v1/classes/".concat(t,"/quiz")):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function v(t,e){return Object(i["c"])()?n.a.post("/v1/classes/".concat(t,"/quiz"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function h(t,e,s,a){return Object(i["c"])()?n.a.patch("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules/").concat(s),a):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function g(t,e,s){return Object(i["c"])()?n.a.delete("/v1/classes/".concat(t,"/lessons/").concat(e,"/modules/").concat(s)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function _(t){return Object(i["c"])()?n.a.delete("/v1/classes/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function b(t){return Object(i["c"])()?n.a.post("/v1/classmodulequizzes",t):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function x(t,e){return Object(i["c"])()?n.a.post("/v1/modules/".concat(t,"/additionalcontent"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function C(t){return Object(i["c"])()?n.a.get("/v1/modules/".concat(t,"/additionalcontent")):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function w(t,e,s){return Object(i["c"])()?n.a.patch("/v1/modules/".concat(t,"/additionalcontent/").concat(e),s):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function U(t,e){return Object(i["c"])()?n.a.get("/v1/modules/".concat(t,"/additionalcontent/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function y(t,e){return Object(i["c"])()?n.a.delete("/v1/modules/".concat(t,"/additionalcontent/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function q(t){return Object(i["c"])()?n.a.get("/v1/classes/search?query=".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function P(t,e){return Object(i["c"])()?n.a.post("/v1/classes/".concat(t,"/lessons"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function T(t,e){return Object(i["c"])()?n.a.delete("/v1/classes/".concat(t,"/lessons/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function O(t,e){return Object(i["c"])()?n.a.get("/v1/classes/".concat(t,"/lessons/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function k(t,e,s){return Object(i["c"])()?n.a.patch("/v1/classes/".concat(t,"/lessons/").concat(e),s):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function D(t,e){return Object(i["c"])()?n.a.post("/v1/classes/".concat(t,"/assign"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function j(t,e){return Object(i["c"])()?n.a.get("/v1/classes/".concat(t,"/quiz/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function R(t,e,s){return Object(i["c"])()?n.a.patch("/v1/classes/".concat(t,"/quiz/").concat(e),s):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function $(t,e){return Object(i["c"])()?n.a.patch("/v1/classes/".concat(t,"/avatar"),{file:e}):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}},1799:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contacts--list__footer"},[s("ul",{staticClass:"pagination"},[0===t.prev?s("li",{staticClass:"pagination__item prev button__disabled"},[s("span",{staticClass:"icon"},[s("svg",{attrs:{width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{fill:"none",d:"M0 0h20v20H0z"}}),s("path",{attrs:{d:"M16.667 9.167H6.526l4.658-4.659-1.183-1.175L3.334 10l6.667 6.667 1.175-1.175-4.65-4.659h10.141V9.167z",fill:"#C4C4C4"}})])]),t._v("Prev\n\t\t")]):s("li",{staticClass:"pagination__item"},[s("router-link",{attrs:{to:{name:t.baseUrl,query:{limit:t.limit,offset:t.offset(t.prev-1)}}}},[s("span",{staticClass:"icon"},[s("svg",{attrs:{width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{fill:"none",d:"M0 0h20v20H0z"}}),s("path",{attrs:{d:"M16.667 9.167H6.526l4.658-4.659-1.183-1.175L3.334 10l6.667 6.667 1.175-1.175-4.65-4.659h10.141V9.167z",fill:"#C4C4C4"}})])]),t._v("Prev\n\t\t\t")])],1),t._l(t.pagesArray,function(e){return s("li",{key:e,class:{active:t.current===e}},[t.current!==e?s("router-link",{staticClass:"pagination__item",attrs:{to:{name:t.baseUrl,query:{limit:t.limit,offset:t.offset(e-1)}}}},[t._v(t._s(e)+"\n\t\t\t")]):s("span",{staticClass:"pagination__item current"},[t._v(t._s(e))])],1)}),t.current===t.endIndex?s("li",{staticClass:"pagination__item next button__disabled"},[t._v("\n\t\t\tNext\n\t\t\t\t"),s("span",{staticClass:"icon"},[s("svg",{attrs:{width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{fill:"none",d:"M20 0H0v20h20z"}}),s("path",{attrs:{d:"M3.333 9.167h10.141L8.816 4.508l1.183-1.175L16.666 10l-6.667 6.667-1.175-1.175 4.65-4.659H3.333V9.167z",fill:"#fff"}})])])]):s("li",{staticClass:"pagination__item next"},[s("router-link",{attrs:{to:{name:t.baseUrl,query:{limit:t.limit,offset:t.offset(t.next-1)}}}},[t._v("\n\t\t\t\tNext\n\t\t\t\t"),s("span",{staticClass:"icon"},[s("svg",{attrs:{width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{fill:"none",d:"M20 0H0v20h20z"}}),s("path",{attrs:{d:"M3.333 9.167h10.141L8.816 4.508l1.183-1.175L16.666 10l-6.667 6.667-1.175-1.175 4.65-4.659H3.333V9.167z",fill:"#fff"}})])])])],1)],2)])},n=[],i={name:"Pagination",props:{options:{type:Object,default:function(){return{limit:2,offset:0,total:0,baseUrl:"/"}}}},data:function(){return{total:this.options.total,limit:this.options.limit,baseUrl:this.options.baseUrl,maxPages:10,totalPages:null}},created:function(){this.totalPages=Math.ceil(this.total/this.maxPages)},computed:{pages:function(){return Math.min(Math.ceil(this.total/this.limit),this.maxPages)},current:function(){return Math.ceil(this.options.offset/this.limit)+1},prev:function(){return this.current>1?this.current-1:0},next:function(){return this.current<this.endIndex?this.current+1:0},pagesArray:function(){for(var t=[],e=this.startIndex;e<=this.endIndex;e++)t[e]=e;return t.splice(0,this.startIndex),t},startIndex:function(){var t=Math.ceil(this.maxPages/2);return this.current<=t?1:this.current===this.totalPages?this.totalPages-this.maxPages+1:this.current-t},endIndex:function(){return Math.min(this.startIndex+this.maxPages,this.totalPages)}},methods:{offset:function(t){return t<=0?0:this.limit*t}}},r=i,o=(s("5eaf"),s("2877")),c=Object(o["a"])(r,a,n,!1,null,null,null);c.options.__file="Pagination.vue";e["a"]=c.exports},2132:function(t,e,s){"use strict";s("7f7f"),s("28a5");e["a"]={toolbar:"formatselect | bold italic strikethrough forecolor backcolor  | link image media  | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | codesample code",plugins:["code","paste","print","preview","searchreplace","autolink","visualblocks","visualchars","image","link","media","template","codesample","charmap ","hr ","anchor ","insertdatetime","advlist","lists","wordcount","spellchecker ","imagetools ","help"],branding:!1,imagetools_cors_hosts:["*","ipapi.emergingpastetforms.com"],height:350,paste_as_text:!1,convert_urls:!0,file_picker_types:"file image ",automatic_uploads:!0,images_upload_url:"https://ipapi.emergingplatforms.com/v1/course_files",file_picker_callback:function(t,e,s){var a=document.createElement("input");a.setAttribute("type","file"),a.setAttribute("accept","image/* ,\tapplication/pdf"),a.onchange=function(){var e=this.files[0],a=new FileReader;a.onload=function(){var n="blobid"+(new Date).getTime(),i=tinymce.activeEditor.editorUpload.blobCache,r=a.result.split(",")[1],o=i.create(n,e,r);i.add(o);var c=o.name()+".pdf";if("file"===s.filetype){var l,u,d=function(s){console.log(s),t(s,{text:e.name})},m=function(){console.log("failure could not upload file")};l=new XMLHttpRequest,l.withCredentials=!1,l.open("POST","https://ipapi.emergingplatforms.com/v1/course_files"),l.onload=function(){var t;200==l.status?(t=JSON.parse(l.responseText),t&&"string"==typeof t.location?d(t.location):m("Invalid JSON: "+l.responseText)):m("HTTP Error: "+l.status)},u=new FormData,u.append("file",o.blob(),c),l.send(u)}"image"===s.filetype&&t(o.blobUri(),{alt:e.name})},a.readAsDataURL(e)},a.click()},images_upload_handler:function(t,e,s){var a,n;a=new XMLHttpRequest,a.withCredentials=!1,a.open("POST","https://ipapi.emergingplatforms.com/v1/course_files/"),a.onload=function(){var t;200==a.status?(t=JSON.parse(a.responseText),t&&"string"==typeof t.location?e(t.location):s("Invalid JSON: "+a.responseText)):s("HTTP Error: "+a.status)},n=new FormData,n.append("file",t.blob(),t.filename()),a.send(n)}}},"214f":function(t,e,s){"use strict";var a=s("32e9"),n=s("2aba"),i=s("79e5"),r=s("be13"),o=s("2b4c");t.exports=function(t,e,s){var c=o(t),l=s(r,c,""[t]),u=l[0],d=l[1];i(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(n(String.prototype,t,u),a(RegExp.prototype,c,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},2499:function(t,e,s){"use strict";var a=s("2f6e"),n=s.n(a);n.a},2755:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contacts__card"},[s("div",{staticClass:"contacts__info"},[s("div",{staticClass:"contacts__img"},[s("img",{attrs:{src:t.classData.avatar,alt:""}})]),s("div",{staticClass:"info__primary"},[s("h6",{staticClass:"info__name"},[t._v(t._s(t.classData.title))]),s("p",{staticClass:"info__name",domProps:{innerHTML:t._s(t.classData.description)}})])]),s("div",{staticClass:"contacts__card__meta"},[s("router-link",{staticClass:"btn btn__primary btn__primary--sm",attrs:{to:{name:"class-detail",params:{classData:t.classData,id:t.classData.id}}}},[t._v("\n\t\t\tView Details\n\t\t")])],1)])},n=[],i={name:"classItem",props:{classData:{type:Object,default:function(){return{}}}}},r=i,o=(s("2499"),s("2877")),c=Object(o["a"])(r,a,n,!1,null,"73c4025a",null);c.options.__file="ClassItem.vue";e["a"]=c.exports},"28a5":function(t,e,s){s("214f")("split",2,function(t,e,a){"use strict";var n=s("aae3"),i=a,r=[].push,o="split",c="length",l="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[c]||2!="ab"[o](/(?:ab)*/)[c]||4!="."[o](/(.?)(.?)/)[c]||"."[o](/()()/)[c]>1||""[o](/.?/)[c]){var u=void 0===/()??/.exec("")[1];a=function(t,e){var s=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(s,t,e);var a,o,d,m,f,p=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=void 0===e?4294967295:e>>>0,_=new RegExp(t.source,v+"g");u||(a=new RegExp("^"+_.source+"$(?!\\s)",v));while(o=_.exec(s)){if(d=o.index+o[0][c],d>h&&(p.push(s.slice(h,o.index)),!u&&o[c]>1&&o[0].replace(a,function(){for(f=1;f<arguments[c]-2;f++)void 0===arguments[f]&&(o[f]=void 0)}),o[c]>1&&o.index<s[c]&&r.apply(p,o.slice(1)),m=o[0][c],h=d,p[c]>=g))break;_[l]===o.index&&_[l]++}return h===s[c]?!m&&_.test("")||p.push(""):p.push(s.slice(h)),p[c]>g?p.slice(0,g):p}}else"0"[o](void 0,0)[c]&&(a=function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)});return[function(s,n){var i=t(this),r=void 0==s?void 0:s[e];return void 0!==r?r.call(s,i,n):a.call(String(i),s,n)},a]})},"2f6e":function(t,e,s){},3569:function(t,e,s){},4379:function(t,e,s){},4917:function(t,e,s){s("214f")("match",1,function(t,e,s){return[function(s){"use strict";var a=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,a):new RegExp(s)[e](String(a))},s]})},5060:function(t,e,s){"use strict";var a=s("f0b1"),n=s.n(a),i={create:{title:n.a.string().min(2).required(),description:n.a.string().min(2).required(),career_id:n.a.number().required(),exam_attempts:n.a.number().required(),file:n.a.required(),total_exam_question:n.a.number().required(),pass_grade:n.a.number().required(),exam_duration:n.a.number().integer().positive().required(),exam_instructions:n.a.string().min(2).required()},module:{title:n.a.string().min(2).required(),content:n.a.string().min(2).required()},content:{title:n.a.string().min(2).required(),content:n.a.string().min(2).required()},categories:{name:n.a.string().min(2).required()},update:{title:n.a.string().min(2),description:n.a.string().min(2),status:n.a.number(),exam_attempts:n.a.number(),total_exam_question:n.a.number(),pass_grade:n.a.number(),exam_duration:n.a.number().integer().positive(),exam_instructions:n.a.string().min(2)},quiz:{question:n.a.string().min(2).required(),option_a:n.a.string().min(2).required(),option_b:n.a.string().min(2).required(),option_c:n.a.string().min(2).required(),option_d:n.a.string().min(2).required(),answer:n.a.any().valid(["option_a","option_b","option_c","option_d"]).required()},updateModule:{title:n.a.string().min(2),content:n.a.string().min(2)},moduleQuiz:{question:n.a.string().min(2).required(),option_a:n.a.string().min(2).required(),option_b:n.a.string().min(2).required(),option_c:n.a.string().min(2).required(),option_d:n.a.string().min(2).required(),answer:n.a.string().min(2).required()},updateAnAdditionalContent:{title:n.a.string().min(2),content:n.a.string().min(2)},career:{name:n.a.string().min(2).required(),career_segment_id:n.a.number().required()},lesson:{title:n.a.string().min(2).required(),description:n.a.string().min(2).required()},segment:{name:n.a.string().min(2).required(),career_category_id:n.a.number().required()},updateQuiz:{question:n.a.string().min(2),option_a:n.a.string().min(2),option_b:n.a.string().min(2),option_c:n.a.string().min(2),option_d:n.a.string().min(2),answer:n.a.any().valid(["option_a","option_b","option_c","option_d"])}};e["a"]=i},"5eaf":function(t,e,s){"use strict";var a=s("3569"),n=s.n(a);n.a},"7f7f":function(t,e,s){var a=s("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,r="name";r in n||s("9e1e")&&a(n,r,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},9223:function(t,e,s){},aae3:function(t,e,s){var a=s("d3f4"),n=s("2d95"),i=s("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==n(t))}},b4a7:function(t,e,s){"use strict";s.d(e,"i",function(){return r}),s.d(e,"f",function(){return o}),s.d(e,"c",function(){return c}),s.d(e,"a",function(){return l}),s.d(e,"j",function(){return u}),s.d(e,"h",function(){return d}),s.d(e,"g",function(){return m}),s.d(e,"e",function(){return f}),s.d(e,"d",function(){return p}),s.d(e,"b",function(){return v}),s.d(e,"k",function(){return h});var a=s("bc3a"),n=s.n(a),i=s("5f87");function r(t,e){return Object(i["c"])()?n.a.get("/v1/careers?limit=".concat(t,"&offset=").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function o(t){return Object(i["c"])()?n.a.get("/v1/careers/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function c(t){return Object(i["c"])()?n.a.delete("/v1/careers/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function l(t){return Object(i["c"])()?n.a.post("/v1/careers",t):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function u(t,e){return Object(i["c"])()?n.a.patch("/v1/careers/".concat(t),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function d(t,e){return Object(i["c"])()?n.a.get("/v1/careersegments?limit=".concat(t,"&offset=").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function m(t){return Object(i["c"])()?n.a.get("/v1/careersegments/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function f(){return Object(i["c"])()?n.a.get("/v1/careersegments"):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function p(t){return Object(i["c"])()?n.a.delete("/v1/careersegments/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function v(t){return Object(i["c"])()?n.a.post("/v1/careersegments",t):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function h(t,e){return Object(i["c"])()?n.a.patch("/v1/careersegments/".concat(t),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}},d29c:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loadingClasses?[s("div",{staticClass:"loading"},[s("Loader")],1)]:[s("div",{staticClass:"main__header"},[s("div",{staticClass:"main__primary"},[s("div",{staticStyle:{display:"flex","margin-right":"20px"}},[s("h4",{staticClass:"main__title"},[t._v("Courses")]),s("p",[t._v(t._s(t.total)+" Total")])]),s("div",{},[s("label",{staticClass:"form__label",attrs:{for:"search"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control form__input form__search",attrs:{id:"search",type:"search",name:"",placeholder:"Type in to search to search for courses"},domProps:{value:t.query},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null},input:function(e){e.target.composing||(t.query=e.target.value)}}}),s("span",{staticClass:"form__search__icon"},[s("svg",{attrs:{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("title",[t._v("Search Icon")]),s("path",{attrs:{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",fill:"#828282"}})])])])])]),s("div",{staticClass:"d-flex"},[s("button",{staticClass:"btn btn__primary",attrs:{type:"button",name:"button","data-toggle":"modal","data-target":"#contactModal"}},[s("span",{staticClass:"btn__icon"},[s("svg",{attrs:{width:"24",height:"13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M8 5H5V2H3v3H0v2h3v3h2V7h3V5zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 0 18 0c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86 0 1.07-.34 2.04-.9 2.86.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 0 13 0c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16C20.45 8.89 21 9.82 21 11v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 8c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z",fill:"#fff"}})])]),t._v("Add Course")])])]),s("section",{staticClass:"main-grid__row contacts"},[s("div",{staticClass:"contacts__wrapper"},[t.classesLoaded&&t.classes.length&&!t.lcm?t._l(t.classes,function(t){return s("ClassItem",{key:t.id,attrs:{"class-data":t}})}):t.classesLoaded&&t.classes.length&&t.lcm?t._l(t.classes,function(t){return s("ClassItem",{key:t.onlineClass.id,attrs:{"class-data":t.onlineClass}})}):t.classesLoaded?[t._v("\n\t\t\t\t\tNo Courses created yet\n\t\t\t\t")]:[t._v("\n\t\t\t\t\tError Loading courses\n\t\t\t\t")]],2),t.total>t.limit?s("Pagination",{attrs:{options:{limit:t.limit,offset:t.offset,total:t.total,baseUrl:t.baseUrl}}}):t._e()],1),s("AddClass")]],2)},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"contactModal",tabindex:"-1",role:"dialog","aria-labelledby":"contactModalTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body modal__body"},[s("form",{staticClass:"modal__form",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.createClass(e)}}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"modal__label",attrs:{for:"class-title"}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.title,expression:"itemData.title",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.title}],attrs:{type:"text",id:"class-title",placeholder:"Class Title"},domProps:{value:t.itemData.title},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"title",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.title)+"\n\t\t\t\t\t\t")])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"modal__label",attrs:{for:"career"}},[t._v("Career Track")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.itemData.career_id,expression:"itemData.career_id"}],staticClass:"custom-select form-control",class:[{"is-invalid":t.errors.career}],attrs:{id:"career"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.itemData,"career_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{selected:"",disabled:""}},[t._v("Select a career for track for this course")]),t._l(t.careers,function(e,a){return s("option",{key:a,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.career_id)+"\n\t\t\t\t\t\t")])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"modal__label",attrs:{for:"class-exam-attempts"}},[t._v("Exam Attempts")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.exam_attempts,expression:"itemData.exam_attempts",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.exam_attempts}],attrs:{type:"number",id:"class-title",placeholder:"Total Number of time a candidate can take the exams attached to this course"},domProps:{value:t.itemData.exam_attempts},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"exam_attempts",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.exam_attempts)+"\n\t\t\t\t\t\t")])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"modal__label",attrs:{for:"class-exam-attempts"}},[t._v("Total Exam Question")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.total_exam_question,expression:"itemData.total_exam_question",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.total_exam_question}],attrs:{type:"number",id:"class-title",placeholder:"Total exam questions that should be made available to candidates."},domProps:{value:t.itemData.total_exam_question},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"total_exam_question",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.total_exam_question)+"\n\t\t\t\t\t\t")])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"modal__label",attrs:{for:"class-exam-attempts"}},[t._v("Exam Pass Grade")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.pass_grade,expression:"itemData.pass_grade",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.pass_grade}],attrs:{type:"number",id:"class-title",placeholder:"The pass grade for an exam."},domProps:{value:t.itemData.pass_grade},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"pass_grade",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.pass_grade)+"\n\t\t\t\t\t\t")])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"modal__label",attrs:{for:"class-title"}},[t._v("Exam Duration")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.exam_duration,expression:"itemData.exam_duration",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.exam_duration}],attrs:{type:"number",id:"exam-duration",placeholder:"Enter class exam duration"},domProps:{value:t.itemData.exam_duration},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"exam_duration",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.exam_duration)+"\n\t\t\t\t\t\t")])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"modal__label",attrs:{for:"class-desc"}},[t._v("Description")]),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.itemData.description,expression:"itemData.description",modifiers:{trim:!0}}],staticClass:"form-control",class:[{"is-invalid":t.errors.description}],attrs:{placeholder:"Enter class description",id:"description",cols:"30",rows:"10"},domProps:{value:t.itemData.description},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"description",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.description)+"\n\t\t\t\t\t\t")])]),s("div",{staticClass:"form-group exam-instructions"},[s("label",{staticClass:"modal__label",attrs:{for:"class-desc"}},[t._v("Exam Instructions")]),s("editor",{ref:"myTextEditor",attrs:{init:t.init,options:t.editorOption},model:{value:t.itemData.exam_instructions,callback:function(e){t.$set(t.itemData,"exam_instructions",e)},expression:"itemData.exam_instructions"}}),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.exam_instructions)+"\n\t\t\t\t\t\t")])],1),s("div",{staticClass:"form-group course-image-upload"},[s("label",{staticClass:"modal__label",attrs:{for:"class-image-file"}},[t._v("\n\t\t\t\t\t\t\tAdd Course Image\n\t\t\t\t\t\t")]),s("input",{ref:"avatar",staticClass:"avatar__input",attrs:{id:"class-image-file",type:"file",accept:"image/*"},on:{change:t.loadImage}}),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.errors.file)+"\n\t\t\t\t\t\t")])])])]),s("div",{staticClass:"modal-footer modal__footer"},[t.loading?s("Loader"):t._e(),s("button",{staticClass:"btn btn--md",attrs:{type:"button","data-dismiss":"modal","aria-label":"close",name:"button"},on:{click:function(e){t.clearErrors()}}},[t._v("Cancel")]),s("button",{staticClass:"btn btn--md btn__primary",attrs:{type:"submit",name:"button"},on:{click:function(e){return e.preventDefault(),t.createClass(e)}}},[t._v("\n\t\t\t\t\tSave Course")])],1)])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header modal__header"},[s("h3",{staticClass:"modal-title",attrs:{id:"contactModalTitle"}},[t._v("Add Course")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(s("4917"),s("ac6a"),s("456d"),s("be94")),c=(s("a753"),s("8096"),s("14e1"),s("953d")),l=s("1014"),u=s("b4a7"),d=s("555f"),m=s("e49c"),f=s("5060"),p=s("eae4"),v=s("8504"),h=s("2132"),g={name:"AddClass",mixins:[m["a"]],data:function(){return{init:h["a"],itemData:{},loadingCareers:!0,careersLoaded:!1,loading:!1,careers:[],errors:{},editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]]}}}},created:function(){this.getCareers()},watch:{issues:function(t){this.errors=Object(o["a"])({},t)}},components:{Loader:d["a"],quillEditor:c["quillEditor"]},methods:{getCareers:function(){var t=this;return this.loadingCareers=!0,Object(u["i"])().then(function(e){return 200===e.status&&(t.careers=e.data.data,t.careersLoaded=!0,!0)}).catch(function(e){return t.loadingCareers=!1,e}),!0},createClass:function(){var t=this;return this.validate(this.itemData,f["a"].create),Object.keys(this.issues).length?(this.errors=this.issues,!1):(this.itemData.author_id=this.$session.get("id"),this.loading=!0,Object(l["c"])(this.itemData).then(function(e){201===e.status&&(t.loading=!1,t.itemData={},v["a"].$emit("class-created",e.data),Object(p["b"])({title:"Success! A new online class has been created"}))}).catch(function(e){return t.loading=!1,Object(p["a"])({title:"Ooops! Something went wrong. Pls try again."}),e}),!0)},loadImage:function(){var t=this,e=this.$refs.avatar.files[0],s=3*Math.pow(2,20);if(e&&e.type.match(/image\/*/)&&e.size>s)return errors.file="File size greater than 3MB",!1;var a=new FileReader;return a.onload=function(e){t.itemData.file=e.target.result},a.readAsDataURL(e),!0}},computed:{editor:function(){return this.$refs.myTextEditor.quill}}},_=g,b=(s("e79c"),s("2877")),x=Object(b["a"])(_,i,r,!1,null,"b85dd802",null);x.options.__file="AddClass.vue";var C=x.exports,w=s("2755"),U=s("1799"),y={name:"Index",components:{AddClass:C,ClassItem:w["a"],Loader:d["a"],Pagination:U["a"]},data:function(){return{loadingClasses:!0,classesLoaded:!1,classes:[],baseUrl:"classes",limit:10,offset:0,total:0,query:"",lcm:!0}},created:function(){var t=this;this.limit=this.$route.query.limit?this.$route.query.limit:this.limit,this.offset=this.$route.query.offset?this.$route.query.offset:this.offset,this.getClasses(),v["a"].$on("class-created",function(e){t.classes.unshift(e)})},watch:{$route:function(){this.limit=this.$route.query.limit?this.$route.query.limit:10,this.offset=this.$route.query.offset?this.$route.query.offset:0,this.getClasses()}},methods:{getClasses:function(){var t=this,e=Object(l["t"])(this.$session.get("id"),this.limit,this.offset);return"learning-content-manager"!==this.$session.get("category")&&(e=Object(l["s"])(this.limit,this.offset),this.lcm=!1),this.loadingClasses=!0,e.then(function(e){return 200===e.status?(t.classes=e.data.data,t.total=e.data.total,t.classesLoaded=!0,!0):(t.classesLoaded=!1,!1)}).catch(function(e){return t.loadingClasses=!1,e}).finally(function(){t.loadingClasses=!1}),!0},search:function(){this.$router.push({name:"search-courses",params:{query:this.query}}),this.query=""}}},q=y,P=(s("f69f"),Object(b["a"])(q,a,n,!1,null,"93a4cdb8",null));P.options.__file="Index.vue";e["default"]=P.exports},e79c:function(t,e,s){"use strict";var a=s("4379"),n=s.n(a);n.a},f69f:function(t,e,s){"use strict";var a=s("9223"),n=s.n(a);n.a}}]);
//# sourceMappingURL=classes.022ab958.js.map