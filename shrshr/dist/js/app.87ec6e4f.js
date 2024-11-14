(function(){"use strict";var e={16:function(e,n,t){var o=t(5130),r=t(6768);const a={id:"app"};function l(e,n,t,o,l,u){const s=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(s)])}var u={name:"App"},s=t(1241);const i=(0,s.A)(u,[["render",l]]);var d=i,c=t(1387);const p={class:"admin-layout"},m={class:"content"};function h(e,n,t,o,a,l){const u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",p,[((0,r.uX)(),(0,r.Wv)((0,r.$y)(l.currentSidebar))),(0,r.Lk)("main",m,[(0,r.bF)(u)])])}const k={class:"sidebar"};function g(e,n,t,o,a,l){const u=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("aside",k,[(0,r.Lk)("nav",null,[(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,[(0,r.bF)(u,{to:"/user-management/user-list"},{default:(0,r.k6)((()=>n[0]||(n[0]=[(0,r.eW)("사용자 목록")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(u,{to:"/user-management/group-list"},{default:(0,r.k6)((()=>n[1]||(n[1]=[(0,r.eW)("권한 관리")]))),_:1})])])])])}var v={name:"AdminSidebar"};const L=(0,s.A)(v,[["render",g],["__scopeId","data-v-20b3e297"]]);var b=L;const f={class:"sidebar"};function y(e,n,t,o,a,l){const u=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("aside",f,[(0,r.Lk)("nav",null,[(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,[(0,r.bF)(u,{to:`/user-management/user-detail/${e.$route.params.userId}`},{default:(0,r.k6)((()=>n[0]||(n[0]=[(0,r.eW)("개인정보")]))),_:1},8,["to"])]),(0,r.Lk)("li",null,[(0,r.bF)(u,{to:"/user-management/group-list"},{default:(0,r.k6)((()=>n[1]||(n[1]=[(0,r.eW)("권한 관리")]))),_:1})])])])])}var _={name:"SidebarUserDetail"};const U=(0,s.A)(_,[["render",y],["__scopeId","data-v-168f2180"]]);var C=U,A={components:{AdminSidebar:b,SidebarUserDetail:C},computed:{currentSidebar(){return"UserDetail"===this.$route.name?"SidebarUserDetail":"AdminSidebar"}}};const E=(0,s.A)(A,[["render",h],["__scopeId","data-v-17bd5098"]]);var N=E,w=t(4232);const X={class:"user-list"},x={class:"action-container"},$={class:"search-container"};function I(e,n,t,a,l,u){const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",X,[n[4]||(n[4]=(0,r.Lk)("h2",null,"사용자 관리 (Admin Web)",-1)),(0,r.Lk)("div",x,[(0,r.Lk)("div",$,[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>l.searchQuery=e),placeholder:"사용자 검색"},null,512),[[o.Jo,l.searchQuery]]),(0,r.Lk)("button",{onClick:n[1]||(n[1]=(...e)=>u.searchUser&&u.searchUser(...e))},"검색")]),(0,r.Lk)("button",{class:"add-user-button",onClick:n[2]||(n[2]=(...e)=>u.goToAddUser&&u.goToAddUser(...e))},"사용자 추가")]),(0,r.Lk)("table",null,[n[3]||(n[3]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"이름"),(0,r.Lk)("th",null,"사번"),(0,r.Lk)("th",null,"권한"),(0,r.Lk)("th",null,"최근 기록")])],-1)),(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.filteredUsers,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.id},[(0,r.Lk)("td",null,[(0,r.bF)(s,{to:`/user-management/user-detail/${e.id}`},{default:(0,r.k6)((()=>[(0,r.eW)((0,w.v_)(e.name),1)])),_:2},1032,["to"])]),(0,r.Lk)("td",null,(0,w.v_)(e.employeeNo),1),(0,r.Lk)("td",null,(0,w.v_)(e.position),1),(0,r.Lk)("td",null,(0,w.v_)(e.lastLogin),1)])))),128))])])])}t(4114);var S={data(){return{searchQuery:"",users:[{id:1,name:"한수현",employeeNo:"1",position:"경영진",lastLogin:"2024-10-12"},{id:2,name:"서희림",employeeNo:"2",position:"엔지니어",lastLogin:"2024-10-13"},{id:3,name:"이규섭",employeeNo:"3",position:"엔지니어",lastLogin:"2024-10-14"},{id:4,name:"김세진",employeeNo:"4",position:"모델관리자",lastLogin:"2024-10-15"}]}},computed:{filteredUsers(){return this.users.filter((e=>e.name.includes(this.searchQuery)))}},methods:{searchUser(){alert(`검색한 사용자: ${this.searchQuery}`)},goToAddUser(){this.$router.push({path:"/user-management/user-add"})}}};const W=(0,s.A)(S,[["render",I],["__scopeId","data-v-0adcfbb0"]]);var G=W;function O(e,n,t,a,l,u){return(0,r.uX)(),(0,r.CE)("div",null,[n[4]||(n[4]=(0,r.Lk)("h1",null,"사용자 추가",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>l.name=e),placeholder:"이름"},null,512),[[o.Jo,l.name]]),(0,r.bo)((0,r.Lk)("input",{type:"number","onUpdate:modelValue":n[1]||(n[1]=e=>l.employeeNo=e),placeholder:"사번"},null,512),[[o.Jo,l.employeeNo,void 0,{number:!0}]]),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=e=>l.role=e),placeholder:"권한"},null,512),[[o.Jo,l.role]]),(0,r.Lk)("button",{onClick:n[3]||(n[3]=(...e)=>u.addUser&&u.addUser(...e))},"사용자 추가")])}var V=t(4373),F={data(){return{name:"",employeeNo:"",role:""}},methods:{async addUser(){try{const e={id:Date.now(),name:this.name,employeeNo:this.employeeNo,role:this.role,last_login:null};await V.A.post("http://ec2-18-215-52-54.compute-1.amazonaws.com:8000/user-management/user-add",e),this.$router.push({path:"/user-management/user-add"})}catch(e){console.error("사용자 추가에 실패했습니다",e)}}}};const Q=(0,s.A)(F,[["render",O]]);var D=Q;const T={class:"user-detail"},j={key:0},B={key:1};function J(e,n,t,a,l,u){return(0,r.uX)(),(0,r.CE)("div",T,[l.user?((0,r.uX)(),(0,r.CE)("div",j,[(0,r.Lk)("p",null,[n[5]||(n[5]=(0,r.Lk)("strong",null,"이름:",-1)),(0,r.eW)(" "+(0,w.v_)(l.user.name),1)]),(0,r.Lk)("p",null,[n[6]||(n[6]=(0,r.Lk)("strong",null,"사번:",-1)),(0,r.eW)(" "+(0,w.v_)(l.user.employeeNo),1)]),n[11]||(n[11]=(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,"권한:")],-1)),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=e=>l.userRoles=e),value:"경영진"},null,512),[[o.lH,l.userRoles]]),n[7]||(n[7]=(0,r.eW)(" 경영진"))]),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":n[1]||(n[1]=e=>l.userRoles=e),value:"엔지니어"},null,512),[[o.lH,l.userRoles]]),n[8]||(n[8]=(0,r.eW)(" 엔지니어"))]),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":n[2]||(n[2]=e=>l.userRoles=e),value:"모델관리자"},null,512),[[o.lH,l.userRoles]]),n[9]||(n[9]=(0,r.eW)(" 모델 관리자"))]),(0,r.Lk)("p",null,[n[10]||(n[10]=(0,r.Lk)("strong",null,"최근 기록:",-1)),(0,r.eW)(" "+(0,w.v_)(l.user.lastLogin),1)])])):((0,r.uX)(),(0,r.CE)("div",B,n[12]||(n[12]=[(0,r.Lk)("p",null,"사용자 정보를 가져오는 중입니다...",-1)]))),(0,r.Lk)("button",{onClick:n[3]||(n[3]=(...e)=>u.goBack&&u.goBack(...e))},"뒤로가기"),(0,r.Lk)("button",{onClick:n[4]||(n[4]=(...e)=>u.saveUser&&u.saveUser(...e))},"저장")])}var R={data(){return{user:null,userRoles:[]}},created(){const e=this.$route.params.userId;this.fetchUser(e)},methods:{fetchUser(e){const n=[{id:1,name:"한수현",employeeNo:1001,position:"경영진",lastLogin:"2024-10-12",roles:["경영진"]},{id:2,name:"서희림",employeeNo:1002,position:"엔지니어",lastLogin:"2024-10-13",roles:["엔지니어"]},{id:3,name:"이규섭",employeeNo:1003,position:"엔지니어",lastLogin:"2024-10-14",roles:["엔지니어"]},{id:4,name:"김세진",employeeNo:1004,position:"모델관리자",lastLogin:"2024-10-15",roles:["모델관리자"]}];this.user=n.find((n=>n.id===parseInt(e))),this.userRoles=this.user.roles},goBack(){this.$router.push("/user-management/user-list")},saveUser(){console.log("저장된 사용자 권한:",this.userRoles),alert("사용자 권한이 저장되었습니다!")}}};const P=(0,s.A)(R,[["render",J],["__scopeId","data-v-12ecb9ac"]]);var H=P;const M={class:"group-list"},K={class:"top-nav"},q={class:"action-container"},z={class:"search-container"};function Y(e,n,t,a,l,u){const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",M,[n[6]||(n[6]=(0,r.Lk)("h2",null,"권한 관리",-1)),(0,r.Lk)("nav",K,[(0,r.Lk)("a",{href:"javascript:void(0)",onClick:n[0]||(n[0]=(...e)=>u.goBack&&u.goBack(...e))},"개인정보"),(0,r.bF)(s,{to:"/user-management/group-list",class:"active"},{default:(0,r.k6)((()=>n[4]||(n[4]=[(0,r.eW)("권한 관리")]))),_:1})]),(0,r.Lk)("div",q,[(0,r.Lk)("div",z,[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>l.searchQuery=e),placeholder:"Search"},null,512),[[o.Jo,l.searchQuery]]),(0,r.Lk)("button",{onClick:n[2]||(n[2]=(...e)=>u.searchGroup&&u.searchGroup(...e))},"검색")]),(0,r.Lk)("button",{class:"add-group-button",onClick:n[3]||(n[3]=(...e)=>u.goToAddGroup&&u.goToAddGroup(...e))},"권한 추가")]),(0,r.Lk)("table",null,[n[5]||(n[5]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"권한 이름"),(0,r.Lk)("th",null,"권한 설명")])],-1)),(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.filteredGroups,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.name},[(0,r.Lk)("td",null,(0,w.v_)(e.name),1),(0,r.Lk)("td",null,(0,w.v_)(e.description),1)])))),128))])])])}var Z={data(){return{searchQuery:"",groups:[{name:"경영진",description:"회사의 주요 의사 결정을 내리는 사람들"},{name:"엔지니어",description:"기술 개발 및 유지보수 담당"},{name:"모델 관리자",description:"모델 관련 작업을 관리하는 사람들"}]}},computed:{filteredGroups(){return this.groups.filter((e=>e.name.includes(this.searchQuery)||e.description.includes(this.searchQuery)))}},methods:{searchGroup(){console.log("검색어:",this.searchQuery)},goToAddGroup(){this.$router.push({path:"/user-management/group-add"})},goBack(){this.$router.go(-1)}}};const ee=(0,s.A)(Z,[["render",Y],["__scopeId","data-v-55a753fc"]]);var ne=ee;const te={class:"group-add"},oe={class:"form-container"};function re(e,n,t,a,l,u){return(0,r.uX)(),(0,r.CE)("div",te,[n[4]||(n[4]=(0,r.Lk)("h2",null,"권한 추가",-1)),(0,r.Lk)("div",oe,[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>l.groupName=e),placeholder:"권한 이름"},null,512),[[o.Jo,l.groupName]]),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>l.groupDescription=e),placeholder:"권한 설명"},null,512),[[o.Jo,l.groupDescription]]),(0,r.Lk)("button",{onClick:n[2]||(n[2]=(...e)=>u.addGroup&&u.addGroup(...e))},"권한 추가")]),(0,r.Lk)("button",{onClick:n[3]||(n[3]=(...e)=>u.goBack&&u.goBack(...e)),class:"back-button"},"뒤로가기")])}var ae={data(){return{groupName:"",groupDescription:""}},methods:{addGroup(){console.log("추가할 권한:",this.groupName,this.groupDescription),alert("권한이 추가되었습니다."),this.$router.push({path:"/user-management/group-list"})},goBack(){this.$router.go(-1)}}};const le=(0,s.A)(ae,[["render",re],["__scopeId","data-v-b792a4ea"]]);var ue=le;const se={class:"login-container"},ie={class:"login-form"};function de(e,n,t,a,l,u){return(0,r.uX)(),(0,r.CE)("div",se,[n[3]||(n[3]=(0,r.Lk)("h2",null,"로그인",-1)),(0,r.Lk)("div",ie,[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>l.username=e),placeholder:"사용자 이름"},null,512),[[o.Jo,l.username]]),(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":n[1]||(n[1]=e=>l.password=e),placeholder:"비밀번호"},null,512),[[o.Jo,l.password]]),(0,r.Lk)("button",{onClick:n[2]||(n[2]=(...e)=>u.login&&u.login(...e))},"로그인")])])}var ce={name:"LoginPage",data(){return{username:"",password:""}},methods:{login(){"admin"===this.username&&"password"===this.password?this.$router.push("/user-management/user-list"):alert("잘못된 사용자 이름 또는 비밀번호입니다.")}}};const pe=(0,s.A)(ce,[["render",de],["__scopeId","data-v-0b966cd2"]]);var me=pe;const he=[{path:"/user-management",component:me},{path:"/",redirect:"/user-management/user-list"},{path:"/user-management/user-list",component:N,children:[{path:"",name:"UserList",component:G}]},{path:"/user-management/user-add",component:N,children:[{path:"",name:"UserAdd",component:D}]},{path:"/user-management/user-detail/:userId",component:N,children:[{path:"",name:"UserDetail",component:H}]},{path:"/user-management/group-list",component:N,children:[{path:"",name:"GroupList",component:ne}]},{path:"/user-management/group-add",component:N,children:[{path:"",name:"GroupAdd",component:ue}]}],ke=(0,c.aE)({history:(0,c.LA)(),routes:he});var ge=ke;const ve=(0,o.Ef)(d);ve.use(ge),ve.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var u=!0,s=0;s<o.length;s++)(!1&a||l>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(u=!1,a<l&&(l=a));if(u){e.splice(d--,1);var i=r();void 0!==i&&(n=i)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,l=o[0],u=o[1],s=o[2],i=0;if(l.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(s)var d=s(t)}for(n&&n(o);i<l.length;i++)a=l[i],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},o=self["webpackChunkshr_user"]=self["webpackChunkshr_user"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(16)}));o=t.O(o)})();
//# sourceMappingURL=app.87ec6e4f.js.map