(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b63"],{"1fb3":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"loaded"===t.status?n("div",{staticStyle:{padding:"32px 16px"}},[n("md-card",{staticClass:"profile-card"},[n("md-card-content",[n("div",{staticClass:"center",staticStyle:{padding:"8px"}},[n("span",{staticStyle:{"font-style":"italic","font-size":"1.2em"}},[t._v("\n          "+t._s(t.profile.motto)+"\n        ")])]),n("div",{staticClass:"center",staticStyle:{padding:"8px 32px 32px 32px"}},[n("img",{staticClass:"profile-image",attrs:{id:"img-profile",src:null==t.profile.profile_image?i("b845"):t.profile.profile_image,alt:"Img"}})]),n("div",{staticClass:"center",staticStyle:{"padding-bottom":"8px"}},[n("span",{staticClass:"nickname"},[t._v("\n          "+t._s(t.profile.display_nickname)+"\n        ")])]),t.profile.city?n("div",{staticClass:"center",staticStyle:{"padding-bottom":"16px"}},[n("span",{staticClass:"city"},[n("md-icon",[t._v("location_on")]),t._v("\n          "+t._s(t.profile.city)+" "+t._s(t.profile.country)+"\n        ")],1)]):t._e(),n("div",{staticClass:"center",staticStyle:{"padding-bottom":"16px"}},t._l(t.roles,function(e){return n("md-chip",{key:e},[t._v(t._s(e))])})),t.isMyProfile?n("div",{staticClass:"center",staticStyle:{"padding-bottom":"8px"}},[n("md-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.profileUrl,expression:"profileUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticStyle:{width:"180px"}},[n("md-icon",[t._v("file_copy")]),t._v("\n           \n          COPY PROFILE URL\n        ")],1),n("div",{staticStyle:{"font-size":"0.8em"}},[t._v("\n          URL을 복사해 공유해 보세요.\n        ")])],1):t._e(),n("md-divider"),n("div",{staticStyle:{padding:"8px 16px"}},[n("h2",[t._v("자기소개")]),n("div",[""===t.profile.about_me||null==t.profile.about_me?n("span",{staticStyle:{display:"block","text-align":"center","font-style":"italic","font-size":"0.8em"}},[t._v("자기소개가 아직 없습니다.")]):t._e(),t._v("\n          "+t._s(t.profile.about_me)+"\n        ")])]),n("md-divider",{staticStyle:{"margin-top":"16px"}}),t.isLoggedIn?n("div",{attrs:{id:""}},[t.isMyProfileCompleted||t.isMyProfile?n("div",[n("div",{staticStyle:{padding:"8px 16px"}},[n("h2",[n("span",{staticClass:"bold"},[t._v(t._s(t.profile.display_nickname))]),t._v("의 보유기술")]),n("div",t._l(t.skills,function(e){return n("md-chip",{key:e},[t._v(t._s(e))])}))]),n("div",{staticStyle:{padding:"8px 16px"}},[n("h2",[t._v("업종 카테고리")]),n("div",t._l(t.industry_fields,function(e){return n("md-chip",{key:e},[t._v(t._s(e))])}))]),n("div",{staticStyle:{padding:"8px 16px"}},[n("h2",[t._v("관심 프로젝트 분야")]),n("div",t._l(t.interests,function(e){return n("md-chip",{key:e},[t._v(t._s(e))])}))]),n("md-divider",{staticStyle:{"margin-top":"16px"}}),n("div",{staticStyle:{padding:"8px 16px"}},[n("h2",[t._v("프로젝트 참여가능 정도")]),null!==t.profile.available_hours_per_week?n("div",[n("md-chip",[t._v("주 "+t._s(t.profile.available_hours_per_week)+"시간 이하")])],1):n("div",[n("span",{staticStyle:{display:"block","text-align":"center","font-style":"italic","font-size":"0.8em"}},[t._v("참여가능 정도가 입력되지 않았어요.")])])]),n("md-divider",{staticStyle:{"margin-top":"16px"}})],1):n("div",{staticClass:"center",staticStyle:{"font-size":"1.0em","padding-top":"16px"}},[t._v("\n          나의 프로필을 먼저 작성하셔야 다른 사람의 프로필을 보실 수 있어요.\n          "),n("br"),n("br"),n("router-link",{attrs:{to:"/setup-profile"}},[t._v("\n            내 프로필 작성하러 가기\n          ")])],1)]):n("div",{staticClass:"center",staticStyle:{"padding-top":"16px"}},[t._v("\n        더 자세한 프로필을 보시려면 "),n("router-link",{attrs:{to:"/login"}},[t._v("로그인")]),t._v(" 해주세요.\n      ")],1)],1)],1),n("md-snackbar",{attrs:{"md-position":"center","md-duration":4e3,"md-active":t.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.showSnackbar=e}}},[n("span",[t._v(t._s(t.snackbarMessage))])])],1):"not_found"===t.status?n("div",[n("div",{staticStyle:{"text-align":"center","padding-top":"10vh"}},[n("h1",[t._v("찾으시는 프로필이 존재하지 않습니다.")]),n("p",[t._v("\n       프로필 주인이 닉네임을 변경했을 수도 있어요.\n    ")]),n("router-link",{attrs:{to:"/"}},[n("a",[t._v("메인 화면으로 가기")])])],1)]):"loading"===t.status?n("div",[n("div",{staticStyle:{"text-align":"center","padding-top":"10vh"}},[n("md-progress-spinner",{attrs:{"md-mode":"indeterminate","md-diameter":60}})],1)]):t._e()},o=[],a=(i("6b54"),i("87b3"),i("551c"),i("7514"),i("2fdb"),i("6762"),i("cadf"),i("097d"),i("8615"),i("bc3a")),r=i.n(a),s=i("41cb"),l="https://api.puzzle.works/",c={name:"view-profile",data:function(){return{status:"loading",nickname:"",profileUrl:"",profile:{},roles:["loading..."],skills:["loading..."],industry_fields:["loading..."],interests:["loading..."],rewards:["loading..."],isMyProfile:!1,showSnackbar:!1,snackbarMessage:"Error!"}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},isMyProfileCompleted:function(){return this.$store.getters.isMyProfileCompleted},myProfile:function(){return this.$store.getters.getMyProfile}},created:function(){if(console.log(this.$route.params.nickname),this.nickname=this.$route.params.nickname,"undefined"===typeof this.nickname||""===this.nickname)return this.nickname=localStorage.getItem("nickname"),void s["a"].push("/profile/"+this.nickname);this.profileUrl=window.location.href},mounted:function(){var t=this;this.getProfile().then(function(){return t.isMyProfile=t.nickname===t.myProfile.nickname,t.getUserTags(t.profile.id)}).catch(function(t){console.error(t)})},watch:{$route:function(t,e){var i=t.params.nickname;console.log("nickname changed: "+i),this.nickname=i,console.log("isMyProfile"),console.log(this.nickname),console.log(localStorage.getItem("nickname")),this.isMyProfile=this.nickname===localStorage.getItem("nickname"),this.profileUrl=window.location.href,this.getProfile()}},methods:{createKakaoLink:function(t,e,i,n){Kakao.Link.createDefaultButton({container:"#kakao-link-btn",objectType:"feed",content:{title:t,description:e,imageUrl:i,link:{mobileWebUrl:n,webUrl:n}},buttons:[{title:"프로필 보기",link:{mobileWebUrl:n,webUrl:n}}]})},getUserTags:function(t){var e=this,i=localStorage.getItem("token"),n={};return i&&""!==i&&(n={headers:{Authorization:"Bearer "+i}}),r.a.get(l+"tags/"+t.toString()+"/",n).then(function(t){console.log("got tags"),console.log(t.data);var i=t.data;e.roles=i.filter(function(t){return 1===t.category}).map(function(t){return t.tag_name}),e.skills=i.filter(function(t){return 2===t.category}).map(function(t){return t.tag_name}),e.interests=i.filter(function(t){return 3===t.category}).map(function(t){return t.tag_name}),e.industry_fields=i.filter(function(t){return 4===t.category}).map(function(t){return t.tag_name})}).catch(function(t){console.log("getUserTags Error"),console.log(t)})},onCopy:function(){console.log("copied"),this.snackbarMessage="프로필 링크가 복사되었습니다.",this.showSnackbar=!0},onError:function(){console.log("copy error")},getProfile:function(){var t=this;return this.$store.dispatch("fetchProfile",{nickname:this.nickname}).then(function(e){console.log("Fetched Profile"),t.status="loaded",t.profile=t.$store.getters.getProfile}).catch(function(e){console.error(e),t.status="not_found"})}}},d=c,p=(i("ac9c"),i("2877")),f=Object(p["a"])(d,n,o,!1,null,"3e077c94",null);f.options.__file="ViewProfile.vue";e["default"]=f.exports},4811:function(t,e,i){},ac9c:function(t,e,i){"use strict";var n=i("4811"),o=i.n(n);o.a}}]);
//# sourceMappingURL=chunk-4b63.1731d10f.js.map