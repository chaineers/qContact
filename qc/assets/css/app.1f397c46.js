(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r={app:0},a=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"6f9f":"fcd29a1d",bd91:"7d144fc8","chunk-185b":"59b96c8f","chunk-4b63":"1731d10f","chunk-6af3":"fd3b2bd1","chunk-bcfa":"af182937","chunk-c861":"d4885341","chunk-f7fe":"47718bdd",f820:"04b5f69a"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-185b":1,"chunk-4b63":1,"chunk-6af3":1,"chunk-bcfa":1,"chunk-c861":1,"chunk-f7fe":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var o="css/"+({}[t]||t)+"."+{"6f9f":"31d6cfe0",bd91:"31d6cfe0","chunk-185b":"ff60ca20","chunk-4b63":"d00102e0","chunk-6af3":"a9235054","chunk-bcfa":"8754cf79","chunk-c861":"89912718","chunk-f7fe":"f13fd13d",f820:"31d6cfe0"}[t]+".css",i=c.p+o,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var s=r[a],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===i))return e()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){s=l[a],u=s.getAttribute("data-href");if(u===o||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.request=o,n(r)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){i[t]=0}));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=a);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t),u=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0390":function(t,e,n){},"03ab":function(t,e,n){"use strict";var o=n("7a6d"),i=n.n(o);i.a},"05ca":function(t,e,n){},"106f":function(t,e,n){},1558:function(t,e,n){"use strict";var o=n("2638"),i=n.n(o);i.a},2638:function(t,e,n){},"2a7f":function(t,e,n){t.exports=n.p+"img/puzzle.d194c2c9.png"},"3b70":function(t,e,n){"use strict";var o=n("c4be"),i=n.n(o);i.a},"41cb":function(t,e,n){"use strict";var o=n("2b0e"),i=n("8c4f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",[t._m(0),t._m(1),n("div",[n("login-box")],1),n("div",{attrs:{id:"img-section-2"}},[t._v("\n       \n    ")]),t._m(2),t._m(3),t._m(4)]),n("div",{staticClass:"center",class:{hide:"loading"===t.status}})])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"img-section-1"}},[n("div",{attrs:{id:"section-message-1"}},[t._v("\n        현재 "),n("span",{staticClass:"num-members"},[t._v("669")]),t._v(" 명의"),n("br"),t._v("\n        개발자, 기획자, 디자이너들이"),n("br"),t._v("\n        뜨겁게 소통하고 있습니다.\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"32px","font-size":"1.5em","text-align":"center","line-height":"170%"}},[t._v("\n      나의 전문적인 프로필을 공유하고,"),n("br"),t._v("\n      프로젝트 협업 멤버를 찾아보세요.\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"slogans"}},[t._v("\n      We build Teams"),n("br"),t._v("\n      We build Companies\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"description"}},[t._v("\n      퍼즐은 회사를 다니지 않고도,"),n("br"),t._v("\n      경제활동이 가능한 대안 시스템을 만들고 있습니다."),n("br"),t._v("\n      이미 gig Economy 시대적 흐름을 인지하고"),n("br"),t._v("\n      스타트업을 준비하는 현명한 노동자들이 늘어나고 있지요."),n("br"),t._v("\n      다양한 전문가와 협업하고 또 하나의 이력서를 추가해보세요."),n("br"),t._v("\n      이제 당신 차례입니다.\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"social-links"}},[n("a",{attrs:{href:"https://www.facebook.com/puzzledotworks/",target:"_blank"}},[t._v("\n        협업하면 퍼즐 페이스북\n      ")])])}],s=(n("551c"),n("7514"),n("2fdb"),n("6762"),n("cadf"),n("097d"),n("8615"),n("f7bf")),c={name:"home",components:{loginBox:s["a"]},data:function(){return{status:"loading"}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn}},created:function(){},mounted:function(){},methods:{}},u=c,l=(n("03ab"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,"7bcd3a61",null);d.options.__file="Home.vue";var f=d.exports,g=n("0284"),m=n.n(g),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("PAGE NOT FOUND")])])}],v={},b=v,A=(n("1558"),Object(l["a"])(b,p,h,!1,null,"13f3d952",null));A.options.__file="PageNotFound.vue";var k=A.exports;o["default"].use(i["a"]);var y=new i["a"]({mode:"history",base:"/",routes:[{path:"*",component:k},{path:"/",name:"home",component:f},{path:"/terms",name:"terms",component:function(){return n.e("bd91").then(n.bind(null,"bd91"))}},{path:"/privacy",name:"privacy",component:function(){return n.e("6f9f").then(n.bind(null,"6f9f"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-185b").then(n.bind(null,"a55b"))}},{path:"/about",name:"about",component:function(){return n.e("f820").then(n.bind(null,"f820"))}},{path:"/setup-profile",name:"profile-setup",component:function(){return n.e("chunk-bcfa").then(n.bind(null,"8593"))}},{path:"/profile",name:"profile-view",component:function(){return n.e("chunk-4b63").then(n.bind(null,"1fb3"))}},{path:"/profile/:nickname",name:"profile",component:function(){return n.e("chunk-4b63").then(n.bind(null,"1fb3"))}},{path:"/join-party",name:"party-join",component:function(){return n.e("chunk-c861").then(n.bind(null,"3bec"))}},{path:"/projects",name:"projects",component:function(){return n.e("chunk-f7fe").then(n.bind(null,"ef0d"))}},{path:"/party",name:"party",component:function(){return n.e("chunk-6af3").then(n.bind(null,"7525"))}}]});o["default"].use(m.a,{id:"UA-117486721-2",router:y});e["a"]=y},"56d7":function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"fetchMyProfile",function(){return J}),n.d(o,"updateMyProfile",function(){return Q}),n.d(o,"fetchProfile",function(){return H}),n.d(o,"fetchMyTags",function(){return X}),n.d(o,"fetchUserTags",function(){return K}),n.d(o,"getToken",function(){return V}),n.d(o,"login",function(){return q}),n.d(o,"logout",function(){return $});var i={};n.r(i),n.d(i,"getMyProfile",function(){return et}),n.d(i,"getMyProfileUrl",function(){return nt}),n.d(i,"getProfile",function(){return ot}),n.d(i,"isLoggedIn",function(){return it}),n.d(i,"isMyProfileCompleted",function(){return rt}),n.d(i,"getToken",function(){return at});n("551c"),n("7514"),n("2fdb"),n("6762"),n("cadf"),n("097d"),n("8615");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("md-app",{attrs:{"md-mode":"reveal"}},[o("md-app-toolbar",{staticStyle:{"background-color":"white"}},[o("div",{staticClass:"md-toolbar-row"},[o("div",{staticClass:"md-toolbar-section-start"},[o("md-button",{staticClass:"md-icon-button hide-on-med-and-up ",on:{click:t.toggleMenu}},[o("md-icon",[t._v("menu")])],1),o("span",{staticClass:"md-title hide-on-small-only",staticStyle:{cursor:"pointer"},on:{click:t.goToMain}},[o("img",{staticClass:"logo-img",attrs:{alt:"Puzzle Logo",src:n("2a7f")}}),t._v(" \n            "),o("span",{},[t._v("Puzzle")])]),o("span",{staticClass:"md-title hide-on-med-and-up",staticStyle:{"text-align":"right",width:"100%"},on:{click:t.goToMain}},[o("img",{staticClass:"logo-img",attrs:{alt:"Puzzle Logo",src:n("2a7f")}})])],1),o("div",{staticClass:"md-toolbar-section-end"},[o("router-link",{staticClass:"hide-on-small-only menu-item",attrs:{tag:"span",to:"/party"}},[t._v("\n            Party\n          ")]),!0===t.isLoggedIn?o("div",[o("md-badge",{staticClass:"hide",attrs:{"md-content":"1","md-dense":""}},[o("md-button",{staticClass:"md-icon-button"},[o("md-icon",{staticStyle:{color:"#888"}},[t._v("notifications")])],1)],1),o("AccountMenu",{staticStyle:{display:"inline-block","margin-left":"16px","line-height":"60px"}})],1):o("span",{staticClass:"menu-item",on:{click:t.goToLogin}},[t._v("\n            Login\n          ")])],1)])]),o("md-app-drawer",{attrs:{"md-active":t.menuVisible},on:{"update:mdActive":function(e){t.menuVisible=e}}},[o("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[t._v("Navigation")]),o("md-list",[!1===t.isLoggedIn?o("md-list-item",{on:{click:t.goToLogin}},[o("md-icon",[t._v("move_to_inbox")]),o("span",{staticClass:"md-list-item-text"},[t._v("\n            Login\n          ")])],1):t._e(),o("router-link",{attrs:{to:"/party"}},[o("md-list-item",{on:{click:t.toggleMenu}},[o("md-icon",[t._v("whatshot")]),o("span",{staticClass:"md-list-item-text"},[t._v("\n              Party\n            ")])],1)],1)],1)],1),o("md-app-content",{staticStyle:{"background-color":"#EEE"}},[o("router-view")],1)],1),o("Footer")],1)},s=[],c=n("43f9"),u=n.n(c),l=(n("51de"),n("41cb")),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",{attrs:{id:"footer"}},[n("div",{staticClass:"container"})]),n("section",{staticStyle:{"text-align":"center"},attrs:{id:"footer-copyright"}},[t._v("\n    © 2018 Puzzle Works Inc. All Rights Reserved.\n  ")])])}],g={name:"Footer"},m=g,p=(n("d891"),n("2877")),h=Object(p["a"])(m,d,f,!1,null,"3b8ef050",null);h.options.__file="Footer.vue";var v=h.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.isLoading?o("div",[o("div",{staticStyle:{width:"60px",height:"56px",display:"flex","align-items":"center","justify-content":"center"}},[o("md-progress-spinner",{attrs:{"md-mode":"indeterminate","md-diameter":30,"md-stroke":3}})],1)]):o("md-menu",{attrs:{"md-size":"medium","md-offset-x":20}},[o("div",{attrs:{"md-menu-trigger":""}},[o("md-avatar",{staticClass:"profile-thumb"},[o("img",{attrs:{src:null==t.myProfile.profile_image?n("b845"):t.myProfile.profile_image,alt:"Img"}})]),o("span",{staticClass:"md-xsmall-hide"},[o("span",{staticClass:"nickname"},[t._v("\n            "+t._s(t.myProfile.display_nickname)+"\n          ")]),o("span",[o("md-icon",[t._v("arrow_drop_down")])],1)])],1),o("md-menu-content",[t.isMyProfileCompleted?o("md-menu-item",{on:{click:t.goToMyProfile}},[o("md-icon",[t._v("account_circle")]),o("span",[t._v("내 프로필 보기")])],1):t._e(),o("md-menu-item",{on:{click:function(e){t.goTo("/setup-profile")}}},[o("md-icon",[t._v("edit")]),o("span",[t._v("내 프로필 편집")])],1),o("md-divider"),o("md-menu-item",{on:{click:t.logout}},[o("md-icon",[t._v("exit_to_app")]),o("span",[t._v("로그아웃")])],1)],1)],1)],1)},A=[],k=n("c93e"),y=n("2f62"),_=n("9558"),E={name:"AccountMenu",components:{},data:function(){return{fbAppId:"291352158096183",isLoading:!0}},computed:Object(k["a"])({},Object(y["b"])({isLoggedIn:"isLoggedIn",myProfile:"getMyProfile",isMyProfileCompleted:"isMyProfileCompleted"})),created:function(){},mounted:function(){Object(_["d"])(this.fbAppId,"v3.1").then(),this.isLoggedIn&&(this.isLoading=!1)},methods:{goTo:function(t){l["a"].push(t)},goToMyProfile:function(){var t=this.$store.getters.getMyProfileUrl;l["a"].push(t)},redirect:function(){this.$store.dispatch("logout").then(function(){l["a"].push("/")})},logout:function(){var t=localStorage.getItem("provider");"facebook"===t?(Object(_["b"])(),this.redirect()):window.Kakao.Auth.logout(this.redirect)}}},I=E,L=(n("3b70"),Object(p["a"])(I,b,A,!1,null,"064ae954",null));L.options.__file="AccountMenu.vue";var P=L.exports,S=n("4eb5"),T=n.n(S);r["default"].use(T.a),r["default"].use(u.a);var w={name:"root",components:{AccountMenu:P,Footer:v},computed:Object(y["b"])({isLoggedIn:"isLoggedIn",isMyProfileCompleted:"isMyProfileCompleted"}),created:function(){var t=this;console.log("https://api.puzzle.works/"),this.isLoggedIn&&this.$store.dispatch("fetchMyProfile").then(function(){t.isLoggedIn&&!1===t.isMyProfileCompleted&&l["a"].push("/setup-profile")}).catch(function(t){})},data:function(){return{menuVisible:!1}},methods:{goToMain:function(){l["a"].push("/")},goToLogin:function(){var t=this.$route.path;console.log(t),"/login"!==t&&l["a"].push({path:"/login",query:{returnTo:t}})},toggleMenu:function(){this.menuVisible=!this.menuVisible}}},C=w,M=(n("5c0b"),Object(p["a"])(C,a,s,!1,null,null,null));M.options.__file="App.vue";var O=M.exports,j=n("a322"),G=(n("6b54"),n("87b3"),n("bc3a")),F=n.n(G),x="profiles/UPDATE_MY_PROFILE",B="profiles/FETCH_PROFILE",N="profiles/LOGIN",D="profiles/LOGOUT",R="profiles/GET_TOKEN",z="profiles/FETCH_MY_TAGS",U="profiles/FETCH_USER_TAGS",Y="https://api.puzzle.works/",Z="IAhPqqAAGidTDKryKJmhPQd45PuCBxWrUvZwc5k3",W="3CgQXjdVYsirvunffSdRBzygLOxKcHAWVS8PkgUwvEddNqfri9KbiwI2l0p530T57srjfAxJ46MX68eUwg6F81SKieeEKVBjDmvTDkmdXvfH51MZePlNyZHE1jvtnszn";function J(t){var e=t.commit,n=localStorage.getItem("token");if(console.log("FETCH token"+n),n&&""!==n)return F.a.get(Y+"profiles/my-profile/",{headers:{Authorization:"Bearer "+n}}).then(function(t){return console.log(t.data),localStorage.setItem("profile_id",t.data.id.toString()),localStorage.setItem("user_id",t.data.user.toString()),null!==t.data.nickname?localStorage.setItem("nickname",t.data.nickname.toString()):t.data.nickname="",e(x,t.data)}).catch(function(t){return console.log(t.response),"undefined"!==typeof t.response.status&&(console.error(t.response.status),401===t.response.status)?e(D):(console.log("loggin out user"),e(D))});console.log("Token is null! Profile not fetched")}function Q(t,e){var n=t.commit;return n(x,e)}function H(t,e){var n=t.commit,o=localStorage.getItem("token"),i={};return o&&(i={headers:{Authorization:"Bearer "+o}}),F.a.get(Y+"profiles/"+e.nickname+"/",i).then(function(t){return n(B,t.data)})}function X(t){var e=t.commit,n=localStorage.getItem("profile_id");if(console.log("FETCH MY TAGS"),console.log(n),"undefined"!==typeof n&&""!==n&&"0"!==n){var o=localStorage.getItem("token"),i={};return o&&(i={headers:{Authorization:"Bearer "+o}}),F.a.get(Y+"tags/"+n+"/",i).then(function(t){return e(z,t.data)})}}function K(t,e){var n=t.commit;if(console.log("FETCH_USER_TAGS"),console.log(e.profileId),"undefined"!==typeof e.profileId&&""!==e.profileId&&"0"!==e.profileId){var o=localStorage.getItem("token"),i={};return o&&(i={headers:{Authorization:"Bearer "+o}}),F.a.get(Y+"tags/"+e.profileId+"/",i).then(function(t){return n(U,t.data)})}}function V(t,e){var n=t.commit;return console.log("GET_TOKEN"),console.log(Z),console.log(W),F.a.post(Y+"auth/convert-token",{token:e.token,client_id:Z,client_secret:W,grant_type:"convert_token",backend:e.provider}).then(function(t){return console.log("token response"),console.log(t),localStorage.setItem("token",t.data.access_token),localStorage.setItem("provider",e.provider),n(R,t.data.access_token)}).catch(function(t){console.error(t)})}function q(t){var e=t.commit,n=t.token;return localStorage.setItem("token",n),e(N,n)}function $(t){var e=t.commit;return localStorage.setItem("token",""),localStorage.setItem("user_id",""),localStorage.setItem("profile_id",""),localStorage.setItem("nickname",""),e(D)}var tt,et=function(t){return t.myProfile},nt=function(t){return"/profile/"+t.myProfile.nickname},ot=function(t){return t.profile},it=function(t){return t.isLoggedIn},rt=function(t){var e=!!t.myProfile.nickname&&!!t.myProfile.phone&&!!t.myProfile.email;return console.log("isMyProfileCompleted: "+e),e},at=function(t){return t.token},st={isLoggedIn:!!localStorage.getItem("token"),token:localStorage.getItem("token"),myProfile:{id:"",profile_image:"",nickname:"",display_nickname:"",email:"",phone_number:"",kakaotalk_id:"",city:"",motto:"",about_me:""},profile:{id:"",nickname:"",city:"",motto:"",about_me:"",profile_image:""},myTags:[],userTags:[]},ct=(tt={},Object(j["a"])(tt,R,function(t,e){t.isLoggedIn=!0,t.token=e}),Object(j["a"])(tt,N,function(t,e){t.isLoggedIn=!0,t.token=e}),Object(j["a"])(tt,D,function(t){t.isLoggedIn=!1,t.myProfile={},localStorage.setItem("token",""),localStorage.setItem("profile_id",""),t.token=null}),Object(j["a"])(tt,x,function(t,e){t.myProfile=e}),Object(j["a"])(tt,B,function(t,e){t.profile=e}),Object(j["a"])(tt,z,function(t,e){t.myTags=e}),Object(j["a"])(tt,U,function(t,e){t.userTags=e}),tt),ut={state:Object(k["a"])({},st),actions:o,getters:i,mutations:ct};r["default"].use(y["a"]);var lt=!1,dt=new y["a"].Store({modules:{profiles:ut},strict:lt});n("e094");r["default"].config.productionTip=!1,r["default"].use(u.a),new r["default"]({router:l["a"],store:dt,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("106f"),i=n.n(o);i.a},6042:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZmYyZjIyZi04ZDdlLTQzNjEtYjM2Zi02NGFiYmI2Nzg3ZDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTREMzBERkE2NjFBMTFFNDk5OEZFQ0REMkU5OTk0QTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTREMzBERjk2NjFBMTFFNDk5OEZFQ0REMkU5OTk0QTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNGZlZTRmMS0wMGNjLTRlZTEtYTY5MS00MjJmOGUxY2VmYjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZmZmMmYyMmYtOGQ3ZS00MzYxLWIzNmYtNjRhYmJiNjc4N2Q1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+F7pueQAAAKpJREFUeNpi+P//PwM2jA0AxZWBeA4QP/2PCl5j6CfWYKCYJRB//o8boOhnxOU6RkZGZENZgNQNIFZmwA0YkTksDMQBOyyGvgfic0D8BZsGYg3WQeP/AGItoK9eIPkKRQETkQYLofHvIxuKDRBrMDr4RUgBuQYTBDhTBSjYSDDnGhBr08LFd2kVFPdoZfBdbFmVYJYG8hvQsu8FQubQLFWMGjxq8HAwGCDAAM8dwEI+7fo0AAAAAElFTkSuQmCC"},"7a6d":function(t,e,n){},"86a5":function(t,e,n){"use strict";var o=n("0390"),i=n.n(o);i.a},9558:function(t,e,n){"use strict";function o(t,e){return new Promise(function(n){window.fbAsyncInit=function(){window.FB.init({appId:t,xfbml:!1,version:e,cookie:!0}),n("SDK Loaded!")},function(e,n,o){var i=e.getElementsByTagName(n)[0];if(!e.getElementById(o)){var r=e.createElement(n);r.id=o,r.src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v3.1&appId="+t+"&autoLogAppEvents=1",i.parentNode.insertBefore(r,i)}}(document,"script","facebook-jssdk")})}function i(){return new Promise(function(t){window.FB.getLoginStatus(function(e){t(e)})})}function r(t){return new Promise(function(e){window.FB.login(function(t){return e(t)},t)})}function a(){return new Promise(function(t){window.FB.logout(function(e){return t(e)})})}n.d(e,"d",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},b845:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAOFQTFRF3dzd3t3e3Nvc29rb2tna4ODg4uLi5+bn5ubm5eTl4N/g4+Lj6+rr7u7u9PT0+vr6+/v7/f39/////v7+/Pz8+Pj47+/v7e3t5uXm39/f3dvd5+fn8/Pz9vb27Ovs397f6Ofo4eHh9PP05OPk6unq4+Pj6urq8/Lz4eDh9/f36enp29nb6Ojo8vLy3Nzc8fDx+fn54uHi+/z7/v/+6ejp3Nrc7Ozs3d3d9vX27+7v//7/8fHx5OTk7u3u7ezt+Pf49fX1+fj58O/w9fT18vHy8PDw+/r7/f795eXl/Pv8+vn60J2UPQAAAAFiS0dEEnu8bAAAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAXcSURBVHja7Z1tUxs3EIBvtUeIbcDcysamOWOSADG0vJUADVBCSN2S/P8f1DuTljYDLSettAuj5wMz8IGZZ1arlSWtnGWJRCKRSCQSiUQikUgkEolEIpFIJBKJREI5ANUPY7DGmG+/P0EM5iaDuRfzL+fnW3PtLMMcqz88NQmEzsLiUne5KKjCFr1uf2UwXDVPyAV+QJx7VXbpHnqjtU5WuTyNYIzXl2ZhIPtvCzv73fYHrxG1hwXQvB706D+YybxpAarWMPh2ydJj6G5kqDcoOF58nEbNaFNprlTh2CqoCe/GGscX4GSbGtLbUWjy408FNWc3M7oyxeztkxMHh5pyHsxeSdbFw9LPL/SYAK4euHnUHL3PtXgcd5bJhxMdKX9q2j0vD0sLuYbRZeCAfFnXYGJK9/z4u6AcmlNpD9z196hMJsLLFcAdDg9LvwiLmA6Dxszkg3Ca9ImLoWBhBDyhMy6RvuTAOrRsAbE0EAsJ4Dkx0htLJTzOEyvvxJYq27widHEsE5CXzB5UioSEOUNmWbIqkSWcU9YtZ/SrwMQFeEncJnQgkiMHxM8wfpaYiwAetB9dBPIB/8iSGVsfQ0SELmKHxEyKABpndIJxPyoCvg8SELqKHRH+avitJrYj10QchRGhw8gicBBI5GXcsWUOw2hYWoz72d28CCWyElcEXwUaWbGX8rgeSmQparJD/iHEAqVmGeKKrCSRJBJGZDGUSDfqpBVw+o07a7HvzYnVkXBLlMjHC89mrZVlnwINrdj7KM/m8wheByoj4yyySKBV4+fouyhzRRCRNYx94G7CJMlm7P14yE+C7DTuZbExm/waZ7QicdTTDzCyWvFFIF/jH1t9kROrALu/JxJH7cBfE5dlbgxgi1vkN6GDdnPF62E7QlcfsMWb7VOpmw/MWxC/y11z4lxw2WqZJWYCuMF3X2skexmQbelo34peY+aqipZOZO80As++kBW6GPQPTpFl5uqO5duUcOpv0m2raLfa9jWxLRU9JPUtfz8TFXf8Z1NX38fE7qjp6THgUU6KoZJ4eGW8rfJcV4eoGbgNrlFbWf9elrdcGq0+6GtzBRyXjcvHUEvD23eJMt9tlB8rWhuoAbFBn+sUtHbnG8yG0z8eLXLeApV94Mc4GXQbpshggsfKNAx2SkvUtJjYsqMqKn9puFREPSpQaxy5L1GOahUNWZ+3S99VfNkWryfVFHrp13I8o3cpXVLyG6ab5R9vBIMCJru2PHuN1b+5Fnv+AXDCemjVnwgNr3yh4Nz6tVQsCAyvalhNiZ1p9OFVLdpH/EeIlkbjuMMLcPNLiGN2S182Y5pAPgx0o7FyibgXAXkrmEe9WxfNpOmrTQ0ptuJsaNedlIG5jJEnkC+QDesR5cWXKj8KCk4RPE8AbyJ4VCY3YUcX4NBSFGzYRznMuEeRCPsCBIwoGqOAEcHPZGN52HAXTgHXKCqBrkIAXlBkLoKYmPFybJHlIAlvSopOGUAEN+Il+l3Cb7AnfKgr5P9DMccdE7wiEZgb9QG3SIgt3pkLulIiXWANyJTEmDKGhP+ZoCZTF2OzEu6SILts+R6uDfRxvOIyMduyItvmeQSELSTSAWEKyal8QOqQcPTCiQekCgnHwNqU92Dp6gv12lEzzr3TXbSo3+Fd3qNvODyE90YEfNUh8tXTA4c6PHwb9gFLLSKl19jyfdueEb833XBDiwf5baiYJT0iPi+/CO0B3Y/PzpDc3sl9uB/2nuqZs27nLdclsKI5y2/e0lMNb3GtiYCLpGLFeIulRdeaaEZ6NGpcm2DNqqoUcX/EXFuKuCZJnSLKcEwSfMPX483BGb1xm7bkjhIewu2IwUwUzb3fZmCnryQK9+6qO+vokusDTeVwFhC3L42RPRS5H6ejEtPXJ+L0SJK+Sctt2lKyxfhdljhsOOJbfR5EDm+OhHt21Yd5BxFFO0F3NN8TAtzXVkbqQrLfuJBAfq5R5LzxxWbg+cJGbpHd5qVd2+fcWx7+tPsngWpzupUr2NAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMTEtMjRUMTg6MzY6NDUtMDU6MDDwVb2+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTExLTI0VDE4OjM2OjQ1LTA1OjAwgQgFAgAAAABJRU5ErkJggg=="},bef0:function(t,e,n){"use strict";var o=n("ef90"),i=n.n(o);i.a},c4be:function(t,e,n){},d891:function(t,e,n){"use strict";var o=n("05ca"),i=n.n(o);i.a},ef90:function(t,e,n){},f7bf:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?n("div",{staticStyle:{"text-align":"center",padding:"15vh 0"}},[n("md-progress-spinner",{attrs:{"md-mode":"indeterminate","md-diameter":30,"md-stroke":5}})],1):t._e(),n("div",{staticClass:"center",class:{hide:t.isLoading||"logged_in"===t.status}},[n("div",{staticStyle:{padding:"8px"}},[n("facebook-login",{staticClass:"button",attrs:{appId:t.fbAppId},on:{"sdk-loaded":t.fbLoaded,login:t.getFbUserData,logout:t.onLogout}})],1),t._m(0),t._m(1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"8px"}},[n("a",{attrs:{id:"kakao-login-btn"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center",staticStyle:{"font-size":"0.8em","line-height":"150%"}},[t._v("\n      회원가입시 퍼즐웍스의 "),n("a",{attrs:{href:"/terms",target:"_blank"}},[t._v("이용약관")]),t._v(", "),n("a",{attrs:{href:"/privacy",target:"_blank"}},[t._v("개인정보"),n("br"),t._v("취급방침")]),t._v("을 읽고 이해하셨으며, 프로젝트 협업"),n("br"),t._v("해당내용에 동의하신 것이 됩니다.\n    ")])}],r=(n("551c"),n("7514"),n("2fdb"),n("6762"),n("cadf"),n("097d"),n("8615"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"facebook-login"},[n("button",{on:{click:t.buttonClicked}},[n("img",{attrs:{src:t.icon}}),t._v("페이스북으로 로그인\n  ")])])}),a=[],s=n("9558"),c=n("6042"),u=n.n(c),l={name:"facebook-login",props:{appId:{type:String,required:!0},version:{type:String,default:"v3.1"},logoutLabel:{type:String,default:"Log out from Facebook"},loginLabel:{type:String,default:"Log in to Facebook"},loginOptions:{type:Object,default:function(){return{scope:"email"}}}},data:function(){return{isWorking:!1,isConnected:!1,icon:u.a}},mounted:function(){var t=this;this.isWorking=!0,Object(s["d"])(this.appId,this.version).then(s["c"]).then(function(e){"connected"===e.status&&(t.isConnected=!0),t.isWorking=!1,t.$emit("sdk-loaded",{isConnected:t.isConnected,FB:window.FB})})},computed:{getButtonText:function(){switch(this.isConnected){case!0:return this.logoutLabel;case!1:return this.loginLabel;default:return"this is default"}}},methods:{buttonClicked:function(){this.$emit("click"),this.isConnected?this.logout():this.login()},login:function(){var t=this;this.isWorking=!0,Object(s["a"])(this.loginOptions).then(function(e){"connected"===e.status?t.isConnected=!0:t.isConnected=!1,t.isWorking=!1,t.$emit("login",{payload:e,FB:window.FB})})},logout:function(){var t=this;this.isWorking=!0,Object(s["b"])().then(function(e){t.isWorking=!1,t.isConnected=!1,t.$emit("logout",e)})}}},d=l,f=(n("86a5"),n("2877")),g=Object(f["a"])(d,r,a,!1,null,"0358f7b7",null);g.options.__file="FacebookLogin.vue";var m=g.exports,p=n("41cb"),h=(n("2f62"),{name:"login-box",props:{returnTo:String},components:{facebookLogin:m},data:function(){return{fbAppId:"291352158096183",isLoading:!0,status:""}},computed:{isLoggedIn:function(){return this.status=this.$store.getters.isLoggedIn?"logged_in":"not_logged_in",this.$store.getters.isLoggedIn}},created:function(){},mounted:function(){if(this.initKakaoLogin(),!0===this.$store.getters.isLoggedIn)return this.isLoading=!1,void(this.status="logged_in");this.isLoading=!1,this.status="not_logged_in"},watch:{},methods:{fbLoaded:function(){this.isLoading=!1},initKakaoLogin:function(){var t=this.$store,e=this;window.Kakao.Auth.createLoginButton({container:"#kakao-login-btn",success:function(n){console.log("Success Kakao");var o=n.access_token;t.dispatch("getToken",{token:o,provider:"kakao"}).then(function(){return t.dispatch("fetchMyProfile")}).then(function(){if(e.status="logged_in",""!==e.returnTo)return console.log("ReturnTo Kakao: "+e.returnTo),void p["a"].push(e.returnTo);var n=t.getters.getMyProfileUrl;return console.log("ReturnTo3: "+n),void p["a"].push(n)}).catch(function(t){e.status="error",console.error(t)})},fail:function(t){console.log("FAILED KAKAO"),console.error(JSON.stringify(t)),this.status="error"}})},getFbUserData:function(t){var e=this;if(console.log("getFbUserData Triggered"),this.isLoading=!0,console.log(t),"connected"!==t.payload.status)return"authorization_expired"===t.payload.status?(this.isLoading=!1,this.status="not_logged_in",void console.log("authorization_expired")):"not_authorized"===t.payload.status?(this.isLoading=!1,this.status="not_logged_in",void console.log("not authorized")):(this.isLoading=!1,this.status="not_logged_in",console.log("unexpected status"),void console.log(t.payload.status));console.log("FB Connected");var n=t.payload.authResponse.accessToken;this.$store.dispatch("getToken",{token:n,provider:"facebook"}).then(function(){return e.isLoading=!1,e.$store.dispatch("fetchMyProfile")}).then(function(){if(!0===e.$store.getters.isLoggedIn){if(e.status="logged_in",!1===e.$store.getters.isMyProfileCompleted)return console.log("isMyProfileCompleted"),void p["a"].push("/setup-profile");if(""!==e.returnTo)return console.log("ReturnTo 2: "+e.returnTo),void p["a"].push(e.returnTo);var t=e.$store.getters.getMyProfileUrl;return console.log("ReturnTo3: "+t),void p["a"].push(t)}}).catch(function(t){console.error(t),e.status="not_logged_in",e.$store.dispatch("logout")})},getKakaoUserData:function(t){this.$store.dispatch("getToken",{token:t.access_token,provider:"kakao"}).then(function(){p["a"].push("/profile")})},onLogout:function(){this.$store.dispatch("logout").then(function(){p["a"].push("/")})}}}),v=h,b=(n("bef0"),Object(f["a"])(v,o,i,!1,null,"0b80839c",null));b.options.__file="LoginBox.vue";e["a"]=b.exports}});
//# sourceMappingURL=app.1f397c46.js.map