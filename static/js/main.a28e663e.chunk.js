(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,a){e.exports=a(307)},265:function(e,t,a){},307:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=a(25),i=a(36),s=a(27),u=a(26),m=a(28),h=a(309),d=a(311),p=a(310),g=a(16),E=a(127),f=a.n(E),b=a(113),v=a.n(b),w=a(114),y=a.n(w),O=a(17),j=a.n(O),x=a(19),k=a.n(x),S=a(115),C=a.n(S),N=a(52),T=a.n(N),_=a(308),A=a(70),B=a.n(A),I=a(111),H=a.n(I),M=a(109),R=a.n(M),z=a(110),D=a.n(z),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={theme:"light",anchorEl:null},a.handleMenu=function(e){a.setState({anchorEl:e.currentTarget})},a.handleCloseAndChangeTheme=function(e){a.setState({anchorEl:null,theme:e}),a.props.changeTheme(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl,a=Boolean(t);return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement(k.a,{"aria-owns":a?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"},r.a.createElement(R.a,null)," theme ",r.a.createElement(D.a,null)),r.a.createElement(H.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:this.handleClose},r.a.createElement(B.a,{onClick:function(){return e.handleCloseAndChangeTheme("light")}},"Light Theme"),r.a.createElement(B.a,{onClick:function(){return e.handleCloseAndChangeTheme("dark")}},"Dark Theme"))))}}]),t}(r.a.Component),G=a(112),L=a.n(G);var P=Object(g.withStyles)({root:{flexGrow:1,marginBottom:15},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes,a=e.loading;return r.a.createElement(n.Fragment,null,a&&r.a.createElement(L.a,{color:"secondary",variant:"query"}),r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{position:"static"},r.a.createElement("div",{className:"container"},r.a.createElement(y.a,null,r.a.createElement(C.a,{component:_.a,to:"/",className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(T.a,null)),r.a.createElement(j.a,{variant:"h6",color:"inherit",className:t.grow},"Github Users"),r.a.createElement(k.a,{target:"_blank",href:"https://github.com/HackYourFuture-CPH/React/blob/master/documentation/homework/W4-homework.md",color:"inherit"},"question"),r.a.createElement(k.a,{target:"_blank",href:"https://github.com/zuhairtaha/w3-react-hw-github-api-users-search",color:"inherit"},"repo"),r.a.createElement(F,{changeTheme:e.changeTheme}))))))}),W=(a(265),a(18)),J=a.n(W),V=a(31),q=a.n(V),U=a(118),Y=a.n(U),$=a(117),K=a.n($),Q=a(53),X=a.n(Q),Z=a(56),ee=a.n(Z),te=a(116),ae=a.n(te);var ne=Object(g.withStyles)(function(e){return{root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing.unit,position:"relative"},buttonSuccess:{backgroundColor:ee.a[500],"&:hover":{backgroundColor:ee.a[700]}},fabProgress:{color:ee.a[500],position:"absolute",top:-6,left:-6,zIndex:1}}})(function(e){var t=e.loading,a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.wrapper},r.a.createElement(k.a,{variant:"fab",color:"secondary",type:"submit"},r.a.createElement(ae.a,null)),t&&r.a.createElement(X.a,{size:68,className:a.fabProgress})))});var re=Object(g.withStyles)(function(e){return{root:{flexGrow:1,padding:2*e.spacing.unit,paddingRight:6*e.spacing.unit,paddingBottom:3*e.spacing.unit},userIconGrid:{textAlign:"right"},"@media (max-width: 767px)":{root:{paddingRight:3*e.spacing.unit}}}})(function(e){var t=e.classes,a=e.onSearch,n=e.loading;return r.a.createElement("form",{onSubmit:a},r.a.createElement(q.a,{className:t.root},r.a.createElement(J.a,{container:!0,alignItems:"flex-end",spacing:16},r.a.createElement(J.a,{className:t.userIconGrid,item:!0,xs:1},r.a.createElement(j.a,null,r.a.createElement(K.a,null))),r.a.createElement(J.a,{item:!0,xs:11,sm:!0,container:!0,alignItems:"flex-end",spacing:16},r.a.createElement(J.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:16},r.a.createElement(J.a,{item:!0,xs:!0},r.a.createElement(Y.a,{name:"inputSearchValue",fullWidth:!0,id:"input-with-icon-grid",label:"Search for user..."}))),r.a.createElement(J.a,null,r.a.createElement(ne,{loading:n}))))))}),ce=a(41),oe=a.n(ce),le=a(119),ie=a.n(le),se=a(120),ue=a.n(se),me=a(121),he=a.n(me),de=a(122),pe=a.n(de),ge=a(123),Ee=a.n(ge),fe=a(124),be=a.n(fe),ve=Object(g.withStyles)({card:{maxWidth:345},center:{textAlign:"center"},media:{height:220}})(function(e){var t=e.classes,a=e.user;return r.a.createElement(J.a,{item:!0,xs:6,md:4,lg:3},r.a.createElement(ie.a,{className:t.card},r.a.createElement(ue.a,{component:_.a,to:"/user/".concat(a.login)},r.a.createElement(he.a,{className:t.media,image:a.avatar_url,title:"Contemplative Reptile"}),r.a.createElement(pe.a,null,r.a.createElement(j.a,{className:t.center,gutterBottom:!0,variant:"h5",component:"h2"},a.login))),r.a.createElement(Ee.a,null,r.a.createElement(k.a,{component:_.a,to:"/user/".concat(a.login),fullWidth:!0,variant:"contained",color:"secondary"},"view details \xa0 ",r.a.createElement(be.a,null)))))});var we=function(e){var t=e.error,a=e.users;return t&&oe()("Error",t.message,"error"),r.a.createElement("div",{className:"mt-3"},r.a.createElement(J.a,{container:!0,spacing:24},a&&a.map(function(e){return r.a.createElement(ve,{key:e.id,user:e})})))},ye=a(29),Oe=a.n(ye),je=a(42),xe="client_id=".concat("7bb4f90952af392365c9","&client_secret=").concat("4dcbcde682d20c1e8be46ede55ce15a445843cdd"),ke=function(){var e=Object(je.a)(Oe.a.mark(function e(t){var a,n,r;return Oe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://api.github.com","/search/users?q=").concat(t,"&").concat(xe),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.items);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=Object(je.a)(Oe.a.mark(function e(t){var a,n;return Oe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://api.github.com","/users/").concat(t,"?").concat(xe),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),Ce=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:"",loading:!1,users:[],error:null},a.SearchHandler=function(e){var t=a.props.onLoading;t(!0),e.preventDefault();var n=e.target.elements.inputSearchValue.value.trim();n?(a.setState({searchTerm:n,loading:!0}),ke(n).then(function(e){0===e.length&&oe()("Alert","No results found!","warning"),a.setState({users:e,loading:!1}),t(!1)}).catch(function(e){return a.setState({error:e,loading:!1})})):oe()("Error:","you didn't enter a user name!","error")},a.componentDidUpdate=function(){var e=JSON.stringify(a.state.users);localStorage.setItem("users",e)},a.componentDidMount=function(){var e=localStorage.getItem("users");a.setState({users:JSON.parse(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchTerm,a=e.loading,c=e.error,o=e.users;return r.a.createElement(n.Fragment,null,r.a.createElement(re,{loading:a,searchTerm:t,onSearch:this.SearchHandler}),r.a.createElement(we,{error:c,users:o}))}}]),t}(n.Component),Ne=a(71),Te=a.n(Ne),_e=a(125),Ae=a.n(_e),Be=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={user:[],loading:!1},a.componentDidMount=Object(je.a)(Oe.a.mark(function e(){var t,n,r;return Oe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.username,a.setState({loading:!0}),(n=a.props.onLoading)(!0),e.prev=4,e.next=7,Se(t);case 7:r=e.sent,a.setState({user:r,loading:!1}),n(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),a.setState({loading:!1});case 15:case"end":return e.stop()}},e,this,[[4,12]])})),a.render=function(){var e=a.props.classes,t=a.state.user,n=t.id,c=t.login,o=t.name,l=t.public_repos,i=t.html_url,s=t.location,u=t.company,m=t.bio,h=t.created_at,d=t.repos_url,p=t.message,g=a.state.loading;return r.a.createElement(q.a,{className:e.root},g&&r.a.createElement(X.a,{color:"secondary"}),"Not Found"===p&&!1===g&&r.a.createElement(j.a,null,"User not found"),"Not Found"!==p&&!1===g&&r.a.createElement(J.a,{container:!0,spacing:16},r.a.createElement(J.a,{item:!0,md:6},r.a.createElement("img",{className:e.userPhoto,alt:c,src:"https://avatars0.githubusercontent.com/u/".concat(n)})),r.a.createElement(J.a,{item:!0,md:6},r.a.createElement(j.a,{variant:"h4"},o),r.a.createElement("br",null),l&&r.a.createElement(Ae.a,{badgeContent:l,color:"primary"},r.a.createElement(j.a,{className:e.repos},"Repositories")),s&&r.a.createElement(j.a,null,"Location: ",s),u&&r.a.createElement(j.a,null,"Company: ",u),m&&r.a.createElement(j.a,null,"Biography: ",m),r.a.createElement(j.a,null,"Created at: ",h),r.a.createElement(k.a,{variant:"contained",size:"small",color:"secondary",href:i,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(Te.a,null),"\xa0 github url")," \xa0",r.a.createElement(k.a,{variant:"contained",size:"small",color:"secondary",href:d,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(Te.a,null),"\xa0 repositories url"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(k.a,{component:_.a,to:"/",variant:"contained",color:"primary"},r.a.createElement(T.a,null),"\xa0Go Home"))))},a}return Object(m.a)(t,e),t}(r.a.Component),Ie=Object(g.withStyles)(function(e){return{root:{padding:2*e.spacing.unit},userPhoto:{maxWidth:"100%",borderRadius:.5*e.spacing.unit},repos:{marginRight:2*e.spacing.unit}}})(Be),He=a(126),Me=a.n(He),Re=function(){return r.a.createElement(j.a,{variant:"h3"},r.a.createElement(Me.a,null),"Page Not Found!")},ze=a(128),De=a.n(ze),Fe={light:Object(g.createMuiTheme)({palette:{primary:{main:"#43a047"},secondary:f.a},typography:{useNextVariants:!0}}),dark:Object(g.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}})},Ge=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={theme:Fe.dark,loading:!1},a.changeTheme=function(e){return a.setState({theme:Fe[e]})},a.loadingHandler=function(e){return a.setState({loading:e})},a.homeComponent=function(e){return r.a.createElement(Ce,Object.assign({},e,{onLoading:a.loadingHandler}))},a.userDetailsComponent=function(e){return r.a.createElement(Ie,Object.assign({},e,{onLoading:a.loadingHandler}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.theme,a=e.loading;return r.a.createElement(h.a,null,r.a.createElement(g.MuiThemeProvider,{theme:t},r.a.createElement(De.a,null),r.a.createElement(P,{loading:a,changeTheme:this.changeTheme}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(p.a,{path:"/w3-react-hw-github-api-users-search",exact:!0,render:this.homeComponent}),r.a.createElement(p.a,{path:"/",exact:!0,render:this.homeComponent}),r.a.createElement(p.a,{path:"/user/:username",render:this.userDetailsComponent}),r.a.createElement(p.a,{component:Re})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[130,2,1]]]);
//# sourceMappingURL=main.a28e663e.chunk.js.map