(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["career-segment-detail"],{1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contacts--list__footer"},[a("ul",{staticClass:"pagination"},[0===t.prev?a("li",{staticClass:"pagination__item prev button__disabled"},[a("span",{staticClass:"icon"},[a("svg",{attrs:{width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"none",d:"M0 0h20v20H0z"}}),a("path",{attrs:{d:"M16.667 9.167H6.526l4.658-4.659-1.183-1.175L3.334 10l6.667 6.667 1.175-1.175-4.65-4.659h10.141V9.167z",fill:"#C4C4C4"}})])]),t._v("Prev\n\t\t")]):a("li",{staticClass:"pagination__item"},[a("router-link",{attrs:{to:{name:t.baseUrl,query:{limit:t.limit,offset:t.offset(t.prev-1)}}}},[a("span",{staticClass:"icon"},[a("svg",{attrs:{width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"none",d:"M0 0h20v20H0z"}}),a("path",{attrs:{d:"M16.667 9.167H6.526l4.658-4.659-1.183-1.175L3.334 10l6.667 6.667 1.175-1.175-4.65-4.659h10.141V9.167z",fill:"#C4C4C4"}})])]),t._v("Prev\n\t\t\t")])],1),t._l(t.pagesArray,function(e){return a("li",{key:e,class:{active:t.current===e}},[t.current!==e?a("router-link",{staticClass:"pagination__item",attrs:{to:{name:t.baseUrl,query:{limit:t.limit,offset:t.offset(e-1)}}}},[t._v(t._s(e)+"\n\t\t\t")]):a("span",{staticClass:"pagination__item current"},[t._v(t._s(e))])],1)}),t.current===t.endIndex?a("li",{staticClass:"pagination__item next button__disabled"},[t._v("\n\t\t\tNext\n\t\t\t\t"),a("span",{staticClass:"icon"},[a("svg",{attrs:{width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"none",d:"M20 0H0v20h20z"}}),a("path",{attrs:{d:"M3.333 9.167h10.141L8.816 4.508l1.183-1.175L16.666 10l-6.667 6.667-1.175-1.175 4.65-4.659H3.333V9.167z",fill:"#fff"}})])])]):a("li",{staticClass:"pagination__item next"},[a("router-link",{attrs:{to:{name:t.baseUrl,query:{limit:t.limit,offset:t.offset(t.next-1)}}}},[t._v("\n\t\t\t\tNext\n\t\t\t\t"),a("span",{staticClass:"icon"},[a("svg",{attrs:{width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"none",d:"M20 0H0v20h20z"}}),a("path",{attrs:{d:"M3.333 9.167h10.141L8.816 4.508l1.183-1.175L16.666 10l-6.667 6.667-1.175-1.175 4.65-4.659H3.333V9.167z",fill:"#fff"}})])])])],1)],2)])},r=[],n={name:"Pagination",props:{options:{type:Object,default:function(){return{limit:2,offset:0,total:0,baseUrl:"/"}}}},data:function(){return{total:this.options.total,limit:this.options.limit,baseUrl:this.options.baseUrl,maxPages:10,totalPages:null}},created:function(){this.totalPages=Math.ceil(this.total/this.maxPages)},computed:{pages:function(){return Math.min(Math.ceil(this.total/this.limit),this.maxPages)},current:function(){return Math.ceil(this.options.offset/this.limit)+1},prev:function(){return this.current>1?this.current-1:0},next:function(){return this.current<this.endIndex?this.current+1:0},pagesArray:function(){for(var t=[],e=this.startIndex;e<=this.endIndex;e++)t[e]=e;return t.splice(0,this.startIndex),t},startIndex:function(){var t=Math.ceil(this.maxPages/2);return this.current<=t?1:this.current===this.totalPages?this.totalPages-this.maxPages+1:this.current-t},endIndex:function(){return Math.min(this.startIndex+this.maxPages,this.totalPages)}},methods:{offset:function(t){return t<=0?0:this.limit*t}}},s=n,o=(a("5eaf"),a("2877")),u=Object(o["a"])(s,i,r,!1,null,null,null);u.options.__file="Pagination.vue";e["a"]=u.exports},2347:function(t,e,a){},3569:function(t,e,a){},4648:function(t,e,a){"use strict";var i=a("2347"),r=a.n(i);r.a},5060:function(t,e,a){"use strict";a("cadf"),a("551c"),a("097d");var i=a("f0b1"),r=a.n(i),n={create:{title:r.a.string().min(2).required(),description:r.a.string().min(2).required(),career_id:r.a.number().required(),career_category_id:r.a.number(),career_segment_id:r.a.number(),exam_attempts:r.a.number().required(),file:r.a.required(),total_exam_question:r.a.number().required(),pass_grade:r.a.number().required(),exam_duration:r.a.number().integer().positive().required(),exam_instructions:r.a.string().min(2).required()},module:{title:r.a.string().min(2).required(),content:r.a.string().min(2).required()},content:{title:r.a.string().min(2).required(),content:r.a.string().min(2).required()},categories:{name:r.a.string().min(2).required()},update:{title:r.a.string().min(2),description:r.a.string().min(2),status:r.a.number(),career_id:r.a.number(),exam_attempts:r.a.number(),total_exam_question:r.a.number(),pass_grade:r.a.number(),exam_duration:r.a.number().integer().positive(),exam_instructions:r.a.string().min(2)},quiz:{question:r.a.string().required(),option_a:r.a.string().required(),option_b:r.a.string().required(),option_c:r.a.string().required(),option_d:r.a.string().required(),answer:r.a.any().valid(["option_a","option_b","option_c","option_d"])},updateModule:{title:r.a.string().min(2),content:r.a.string().min(2)},moduleQuiz:{question:r.a.string().min(2).required(),option_a:r.a.string().min(2).required(),option_b:r.a.string().min(2).required(),option_c:r.a.string().min(2).required(),option_d:r.a.string().min(2).required(),answer:r.a.string().min(2).required()},updateAnAdditionalContent:{title:r.a.string().min(2),content:r.a.string().min(2),file:r.a.string()},career:{name:r.a.string().min(2).required(),career_segment_id:r.a.number().required()},lesson:{title:r.a.string().min(2).required(),description:r.a.string().min(2).required()},segment:{name:r.a.string().min(2).required(),career_category_id:r.a.number().required()},updateQuiz:{question:r.a.string().required(),option_a:r.a.string().required(),option_b:r.a.string().required(),option_c:r.a.string().required(),option_d:r.a.string().required(),answer:r.a.any().valid(["option_a","option_b","option_c","option_d"])}};e["a"]=n},"555f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("svg",{staticClass:"lds-spinner",staticStyle:{background:"none"},attrs:{width:"53px",height:"53px",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[a("g",{attrs:{transform:"rotate(0 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(30 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(60 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(90 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(120 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(150 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(180 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(210 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(240 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(270 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(300 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(330 50 50)"}},[a("rect",{attrs:{x:"47.5",y:"24",rx:"9.5",ry:"4.8",width:"5",height:"12",fill:"#28292f"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}})])])])]],2)},r=[],n={name:"Loader"},s=n,o=a("2877"),u=Object(o["a"])(s,i,r,!1,null,null,null);u.options.__file="Loader.vue";e["a"]=u.exports},"5eaf":function(t,e,a){"use strict";var i=a("3569"),r=a.n(i);r.a},b206:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loadingCareerSegment?[a("div",{staticClass:"loading"},[a("Loader")],1)]:[a("section",{staticClass:"main-grid__row user-profile"},[a("div",{staticClass:"user-profile__card"},[t._m(0),a("div",{staticClass:"user-profile__item"},[a("h5",{staticClass:"user-profile__section__title"},[t._v("Career Name:")]),a("p",[t._v(t._s(t.itemData.name))])]),"administrator"===t.getLoggedUser.category?a("div",[a("button",{staticClass:"btn btn__danger",on:{click:t.deleteCareerSegment}},[t._v("Delete")]),t.deletingCareerSegment?a("Loader"):t._e()],1):t._e()]),a("div",{staticClass:"user-profile__tabs"},[t._m(1),a("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a("div",{staticClass:"tab-pane fade show active user-profile__tabs__section",attrs:{id:"activity",role:"tabpanel","aria-labelledby":"activity-tab"}},[a("div",{staticClass:"settings"},[a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.updateCareerSegment(e)}}},[a("div",{staticClass:"settings__field"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"settings__value"},[a("label",{attrs:{for:"jobTitle"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemData.name,expression:"itemData.name"}],staticClass:"form-control",class:[{"is-invalid":t.errors.name}],attrs:{name:"title",value:"",type:"text",id:"jobTitle"},domProps:{value:t.itemData.name},on:{keydown:function(e){t.clearErrors(e.target.name)},input:function(e){e.target.composing||t.$set(t.itemData,"name",e.target.value)}}})]),a("div",{staticClass:"invalid-feedback"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.errors.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])])]),a("div",{staticClass:"settings__primary"},[a("button",t._b({staticClass:"btn btn__save",attrs:{type:"button",name:"button"},on:{click:function(e){return e.preventDefault(),t.updateCareerSegment(e)}}},"button",{disabled:t.loading},!1),[t._v("\n\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t")]),t.loading?a("Loader"):t._e()],1)])])])])])])]],2)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-profile__primary"},[a("h3",{staticClass:"user-profile__name"},[t._v("Career Segment Detail Section")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{id:"activity-tab","data-toggle":"tab",href:"#activity",role:"tab","aria-controls":"activity","aria-selected":"false"}},[t._v("Edit Career Segment")])])])}],n=a("be94"),s=(a("456d"),a("ac6a"),a("cadf"),a("551c"),a("097d"),a("2f62")),o=a("555f"),u=a("e49c"),c=a("b4a7"),l=a("eae4"),d=a("5060"),m=a("1799"),g={name:"CareerSegmentDetail",mixins:[u["a"]],data:function(){return{itemData:{},errors:{},loadingCareerSegment:!0,careerSegmentLoaded:!1,loading:!1,deletingCareerSegment:!1,limit:10,offset:0,total:0,baseUrl:""}},created:function(){this.getCareerSegment(),this.limit=this.$route.query.limit?this.$route.query.limit:this.limit,this.offset=this.$route.query.offset?this.$route.query.offset:this.offset,this.baseUrl="careersegments/".concat(this.$route.params.id,"/detail")},methods:{deleteCareerSegment:function(){var t=this;return this.deletingCareerSegment=!0,Object(c["d"])(this.$route.params.id).then(function(e){return 200===e.status&&(t.deletingCareerSegment=!1,Object(l["b"])({title:"Success! Career Segment has been deleted!"}),setTimeout(function(){t.$router.push("/careersegments")},500),!0)}).catch(function(e){return t.deletingCareerSegment=!1,Object(l["a"])({title:"Ooops! ".concat(e.response.data.message,".")}),e}),!0},getCareerSegment:function(){var t=this;return Object(c["g"])(this.$route.params.id).then(function(e){return 200===e.status&&(t.itemData=e.data.data,t.loadingCareerSegment=!0,!0)}).catch(function(e){return t.careerSegmentLoaded=!1,e}).finally(function(){t.loadingCareerSegment=!1}),!0},updateCareerSegment:function(){var t=this,e=this.itemData;return["created_at","updated_at","id","career_category_id","careers"].forEach(function(t){delete e[t]}),this.validate(e,d["a"].categories),Object.keys(this.issues).length?(this.errors=this.issues,!1):(this.loading=!0,Object(c["k"])(this.$route.params.id,this.itemData).then(function(e){200===e.status&&(t.loading=!1,Object(l["b"])({title:"Success! Career Segment has been updated!"}))}).catch(function(e){return t.loading=!1,Object(l["a"])({title:"Ooops! Something went wrong. Pls try again."}),e}),!0)}},components:{Pagination:m["a"],Loader:o["a"]},computed:Object(n["a"])({},Object(s["c"])(["getLoggedUser"]))},f=g,h=(a("4648"),a("2877")),p=Object(h["a"])(f,i,r,!1,null,null,null);p.options.__file="CareerSegmentDetail.vue";e["default"]=p.exports},b4a7:function(t,e,a){"use strict";a.d(e,"i",function(){return s}),a.d(e,"f",function(){return o}),a.d(e,"c",function(){return u}),a.d(e,"a",function(){return c}),a.d(e,"j",function(){return l}),a.d(e,"h",function(){return d}),a.d(e,"g",function(){return m}),a.d(e,"e",function(){return g}),a.d(e,"d",function(){return f}),a.d(e,"b",function(){return h}),a.d(e,"k",function(){return p});a("cadf"),a("551c"),a("097d");var i=a("bc3a"),r=a.n(i),n=a("5f87");function s(t,e){return Object(n["c"])()?r.a.get("/v1/careers?limit=".concat(t,"&offset=").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function o(t){return Object(n["c"])()?r.a.get("/v1/careers/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function u(t){return Object(n["c"])()?r.a.delete("/v1/careers/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function c(t){return Object(n["c"])()?r.a.post("/v1/careers",t):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function l(t,e){return Object(n["c"])()?r.a.patch("/v1/careers/".concat(t),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function d(t,e){return Object(n["c"])()?r.a.get("/v1/careersegments?limit=".concat(t,"&offset=").concat(e)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function m(t){return Object(n["c"])()?r.a.get("/v1/careersegments/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function g(){return Object(n["c"])()?r.a.get("/v1/careersegments"):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function f(t){return Object(n["c"])()?r.a.delete("/v1/careersegments/".concat(t)):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function h(t){return Object(n["c"])()?r.a.post("/v1/careersegments",t):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}function p(t,e){return Object(n["c"])()?r.a.patch("/v1/careersegments/".concat(t),e):Promise.resolve(new Response({message:"Unauthorised"},{status:403,statusText:"Unauthorised"}))}}}]);
//# sourceMappingURL=career-segment-detail.17b18c9e.js.map