(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["test-response-detail"],{3255:function(t,e,s){"use strict";var n=s("34f2"),a=s.n(n);a.a},"34f2":function(t,e,s){},"3e46":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loadingResponse?[s("div",{staticClass:"loading"},[s("Loader")],1)]:[s("section",{staticClass:"main-grid__row user-profile"},[s("div",{staticClass:"user-profile__card"},[s("div",{staticClass:"user-profile__primary"},[s("p",{staticClass:"user-profile__name"},[t._v(t._s(t.itemData.response))])]),s("div",{staticClass:"user-profile__section"},[s("h5",{staticClass:"user-profile__heading"},[t._v("Report Summary")]),s("div",{staticClass:"user-profile__item"},[s("p",{domProps:{innerHTML:t._s(t.itemData.report)}})]),s("div",{staticClass:"user-profile__item"},[s("button",{staticClass:"btn btn__danger",on:{click:t.deleteResponse}},[t._v("Delete")])])])]),s("div",{staticClass:"user-profile__tabs"},[t._m(0),s("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[s("div",{staticClass:"tab-pane fade show active user-profile__tabs__section",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[s("div",{staticClass:"settings"},[s("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.updateResponse(e)}}},[s("div",{staticClass:"settings__primary"},[s("button",t._b({staticClass:"btn btn__save",attrs:{type:"button",name:"button"},on:{click:function(e){return e.preventDefault(),t.updateResponse(e)}}},"button",{disabled:t.loading},!1),[t._v("\n\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t")])]),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.errors.avatar)+"\n\t\t\t\t\t\t\t\t")]),s("div",{staticClass:"settings__field"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"settings__value"},[s("label",{attrs:{for:"userFirstname"}},[t._v("Response")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.response,expression:"itemData.response"}],staticClass:"form-control",class:[{"is-invalid":t.errors.response}],attrs:{name:"fname",value:"",type:"text",id:"userFirstname"},domProps:{value:t.itemData.response},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"response",e.target.value)}}})]),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.errors.response)+"\n\t\t\t\t\t\t\t\t\t\t")])]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"settings__value"},[s("label",{attrs:{for:"userLastname"}},[t._v("Report")]),s("quill-editor",{ref:"myTextEditor",attrs:{options:t.editorOption},model:{value:t.itemData.report,callback:function(e){t.$set(t.itemData,"report",e)},expression:"itemData.report"}})],1),s("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.errors.report)+"\n\t\t\t\t\t\t\t\t\t\t")])])])])])])])])])]],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"true"}},[t._v("Edit Profile")])])])}],i=(s("456d"),s("ac6a"),s("a753"),s("8096"),s("14e1"),s("953d")),o=s("5118"),r=s("555f"),u=s("e49c"),c=s("eaef"),l=s("e9cc"),d=s("eae4"),f={name:"TestResponseDetail",mixins:[u["a"]],data:function(){return{itemData:{},loading:!1,errors:{},loadingResponse:!0,responseLoaded:!1,editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]]}}}},created:function(){this.getResponse()},methods:{getResponse:function(){var t=this;return Object(l["i"])(this.$route.params.id).then(function(e){return 200===e.status?(t.responseLoaded=!0,t.itemData=e.data.data,!0):(t.loadingResponse=!1,!1)}).catch(function(t){return t}).finally(function(){t.loadingResponse=!1}),!0},updateResponse:function(){var t=this,e=this.itemData;return["created_at","updated_at","id"].forEach(function(t){delete e[t]}),this.validate(e,c["a"].updateResponse),Object.keys(this.issues).length?(this.errors=this.issues,!1):(this.loading=!0,Object(l["l"])(this.$route.params.id,this.itemData).then(function(e){return 200===e.status&&(t.loading=!1,Object(d["b"])({title:"Success! Response updated"}),!0)}).catch(function(e){return t.loading=!1,Object(d["a"])({title:"Ooops! Something went wrong. Pls try again."}),e}),!0)},deleteResponse:function(){var t=this;return Object(l["e"])(this.$route.params.id).then(function(e){return 200===e.status&&(Object(d["b"])({title:"Success! Response deleted"}),Object(o["setTimeout"])(function(){t.$router.push({path:"/response"})},2e3)),!0}).catch(function(t){return Object(d["a"])({title:"Oops! Something went wrong"}),t}),!0}},components:{Loader:r["a"],quillEditor:i["quillEditor"]},computed:{editor:function(){return this.$refs.myTextEditor.quill}}},p=f,m=(s("3255"),s("2877")),v=Object(m["a"])(p,n,a,!1,null,"22cad86e",null);v.options.__file="TestResponseDetail.vue";e["default"]=v.exports},5118:function(t,e,s){(function(t){var n="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(a.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new i(a.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},s("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,s("c8ba"))},6017:function(t,e,s){(function(t,e){(function(t,s){"use strict";if(!t.setImmediate){var n,a=1,i={},o=!1,r=t.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(t);u=u&&u.setTimeout?u:t,"[object process]"==={}.toString.call(t.process)?p():m()?v():t.MessageChannel?h():r&&"onreadystatechange"in r.createElement("script")?g():b(),u.setImmediate=c,u.clearImmediate=l}function c(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),s=0;s<e.length;s++)e[s]=arguments[s+1];var o={callback:t,args:e};return i[a]=o,n(a),a++}function l(t){delete i[t]}function d(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(s,n);break}}function f(t){if(o)setTimeout(f,0,t);else{var e=i[t];if(e){o=!0;try{d(e)}finally{l(t),o=!1}}}}function p(){n=function(t){e.nextTick(function(){f(t)})}}function m(){if(t.postMessage&&!t.importScripts){var e=!0,s=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=s,e}}function v(){var e="setImmediate$"+Math.random()+"$",s=function(s){s.source===t&&"string"===typeof s.data&&0===s.data.indexOf(e)&&f(+s.data.slice(e.length))};t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),n=function(s){t.postMessage(e+s,"*")}}function h(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},n=function(e){t.port2.postMessage(e)}}function g(){var t=r.documentElement;n=function(e){var s=r.createElement("script");s.onreadystatechange=function(){f(e),s.onreadystatechange=null,t.removeChild(s),s=null},t.appendChild(s)}}function b(){n=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,s("c8ba"),s("4362"))},e9cc:function(t,e,s){"use strict";s.d(e,"h",function(){return o}),s.d(e,"b",function(){return r}),s.d(e,"a",function(){return u}),s.d(e,"d",function(){return c}),s.d(e,"g",function(){return l}),s.d(e,"f",function(){return d}),s.d(e,"k",function(){return f}),s.d(e,"c",function(){return p}),s.d(e,"j",function(){return m}),s.d(e,"l",function(){return v}),s.d(e,"i",function(){return h}),s.d(e,"e",function(){return g});var n=s("bc3a"),a=s.n(n),i=s("5f87");function o(t,e){return Object(i["c"])()?a.a.get("/v1/quiz?limit=".concat(t,"&offset=").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function r(t){return Object(i["c"])()?a.a.post("/v1/quiz",t):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function u(t,e){return Object(i["c"])()?a.a.post("/v1/quiz/".concat(t,"/questions"),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function c(t,e){return Object(i["c"])()?a.a.delete("/v1/quiz/".concat(t,"/questions/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function l(t){return Object(i["c"])()?a.a.get("/v1/quiz/".concat(t,"/questions")):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function d(t,e){return Object(i["c"])()?a.a.get("/v1/quiz/".concat(t,"/questions/").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function f(t,e){return Object(i["c"])()?a.a.patch("/v1/quiz/".concat(t.id,"/questions/").concat(t.questionId),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function p(t){return Object(i["c"])()?a.a.post("/v1/quizresponseoutcomes",t):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function m(t,e){return Object(i["c"])()?a.a.get("/v1/quizresponseoutcomes?limit=".concat(t,"&offset=").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function v(t,e){return Object(i["c"])()?a.a.patch("/v1/quizresponseoutcomes/".concat(t),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function h(t){return Object(i["c"])()?a.a.get("/v1/quizresponseoutcomes/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function g(t){return Object(i["c"])()?a.a.delete("/v1/quizresponseoutcomes/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}},eaef:function(t,e,s){"use strict";var n=s("f0b1"),a=s.n(n),i={create:{title:a.a.string().min(2).required(),duration:a.a.number().integer().positive().required()},createResponse:{response:a.a.string().required(),report:a.a.string().required()},updateResponse:{response:a.a.string().required(),report:a.a.string().required()}};e["a"]=i}}]);
//# sourceMappingURL=test-response-detail.da7e5fb1.js.map