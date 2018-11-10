(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(295)},214:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=a(31),i=a(48),s=a(33),u=a(32),m=a(34),p=a(297),d=a(299),h=a(298),g=a(17),E=a(120),f=a.n(E),b=a(105),v=a.n(b),w=a(107),y=a.n(w),x=a(50),S=a.n(x),j=a(20),O=a.n(j),N=a(108),k=a.n(N),C=a(49),_=a.n(C),I=a(296);var B=Object(g.withStyles)({root:{flexGrow:1,marginBottom:15},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{position:"static"},r.a.createElement("div",{className:"container"},r.a.createElement(y.a,null,r.a.createElement(k.a,{component:I.a,to:"/",className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(_.a,null)),r.a.createElement(S.a,{variant:"h6",color:"inherit",className:t.grow},"Week3 React - Search github users"),r.a.createElement(O.a,{target:"_blank",href:"https://github.com/HackYourFuture-CPH/React/blob/master/documentation/homework/W4-homework.md",color:"inherit"},"question"),r.a.createElement(O.a,{target:"_blank",href:"https://github.com/zuhairtaha/w3-react-hw-github-api-users-search",color:"inherit"},"repo"))))))}),R=(a(214),a(16)),W=a.n(R),P=a(24),F=a.n(P),G=a(111),T=a.n(G),z=a(110),A=a.n(z),H=a(51),M=a.n(H),D=a(54),J=a.n(D),V=a(109),q=a.n(V);var U=Object(g.withStyles)(function(e){return{root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing.unit,position:"relative"},buttonSuccess:{backgroundColor:J.a[500],"&:hover":{backgroundColor:J.a[700]}},fabProgress:{color:J.a[500],position:"absolute",top:-6,left:-6,zIndex:1}}})(function(e){var t=e.loading,a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.wrapper},r.a.createElement(O.a,{variant:"fab",color:"secondary",type:"submit"},r.a.createElement(q.a,null)),t&&r.a.createElement(M.a,{size:68,className:a.fabProgress})))});var L=Object(g.withStyles)(function(e){return{root:{flexGrow:1,padding:2*e.spacing.unit,paddingRight:6*e.spacing.unit,paddingBottom:3*e.spacing.unit},userIconGrid:{textAlign:"right"},"@media (max-width: 767px)":{root:{paddingRight:3*e.spacing.unit}}}})(function(e){var t=e.classes,a=e.onSearch,n=e.loading;return r.a.createElement("form",{onSubmit:a},r.a.createElement(F.a,{className:t.root},r.a.createElement(W.a,{container:!0,alignItems:"flex-end",spacing:16},r.a.createElement(W.a,{className:t.userIconGrid,item:!0,xs:1},r.a.createElement(A.a,null)),r.a.createElement(W.a,{item:!0,xs:11,sm:!0,container:!0,alignItems:"flex-end",spacing:16},r.a.createElement(W.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:16},r.a.createElement(W.a,{item:!0,xs:!0},r.a.createElement(T.a,{name:"inputSearchValue",fullWidth:!0,id:"input-with-icon-grid",label:"Search for user..."}))),r.a.createElement(W.a,null,r.a.createElement(U,{loading:n}))))))}),Y=a(38),$=a.n(Y),K=a(112),Q=a.n(K),X=a(113),Z=a.n(X),ee=a(114),te=a.n(ee),ae=a(115),ne=a.n(ae),re=a(116),ce=a.n(re),oe=a(117),le=a.n(oe),ie=Object(g.withStyles)({card:{maxWidth:345},center:{textAlign:"center"},media:{height:220}})(function(e){var t=e.classes,a=e.user;return r.a.createElement(W.a,{item:!0,xs:6,md:4,lg:3},r.a.createElement(Q.a,{className:t.card},r.a.createElement(Z.a,{component:I.a,to:"/user/".concat(a.login)},r.a.createElement(te.a,{className:t.media,image:a.avatar_url,title:"Contemplative Reptile"}),r.a.createElement(ne.a,null,r.a.createElement(S.a,{className:t.center,gutterBottom:!0,variant:"h5",component:"h2"},a.login))),r.a.createElement(ce.a,null,r.a.createElement(O.a,{component:I.a,to:"/user/".concat(a.login),fullWidth:!0,variant:"contained",color:"secondary"},"view details \xa0 ",r.a.createElement(le.a,null)))))});var se=function(e){var t=e.error,a=e.users;return t&&$()("Error",t.message,"error"),r.a.createElement("div",{className:"mt-3"},r.a.createElement(W.a,{container:!0,spacing:24},a&&a.map(function(e){return r.a.createElement(ie,{key:e.id,user:e})})))},ue=a(23),me=a.n(ue),pe=a(39),de="client_id=".concat("7bb4f90952af392365c9","&client_secret=").concat("4dcbcde682d20c1e8be46ede55ce15a445843cdd"),he=function(){var e=Object(pe.a)(me.a.mark(function e(t){var a,n,r;return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://api.github.com","/search/users?q=").concat(t,"&").concat(de),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.items);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(pe.a)(me.a.mark(function e(t){var a,n;return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://api.github.com","/users/").concat(t,"?").concat(de),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),Ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:"",loading:!1,users:[],error:null},a.SearchHandler=function(e){e.preventDefault();var t=e.target.elements.inputSearchValue.value.trim();t?(a.setState({searchTerm:t,loading:!0}),he(t).then(function(e){0===e.length&&$()("Alert","No results found!","warning"),a.setState({users:e,loading:!1})}).catch(function(e){return a.setState({error:e,loading:!1})})):$()("Error:","you didn't enter a user name!","error")},a.componentDidUpdate=function(){var e=JSON.stringify(a.state.users);localStorage.setItem("users",e)},a.componentDidMount=function(){var e=localStorage.getItem("users");a.setState({users:JSON.parse(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchTerm,a=e.loading,c=e.error,o=e.users;return r.a.createElement(n.Fragment,null,r.a.createElement(L,{loading:a,searchTerm:t,onSearch:this.SearchHandler}),r.a.createElement(se,{error:c,users:o}))}}]),t}(n.Component),fe=a(70),be=a.n(fe),ve=a(118),we=a.n(ve),ye=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={user:[],loading:!1},a.componentDidMount=Object(pe.a)(me.a.mark(function e(){var t,n;return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.pathname.split("/")[2],a.setState({loading:!0}),e.prev=2,e.next=5,ge(t);case 5:n=e.sent,a.setState({user:n,loading:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a.setState({loading:!1});case 12:case"end":return e.stop()}},e,this,[[2,9]])})),a.render=function(){var e=a.props.classes,t=a.state.user,n=t.id,c=t.login,o=t.name,l=t.public_repos,i=t.html_url,s=t.location,u=t.company,m=t.bio,p=t.created_at,d=t.repos_url,h=t.message,g=a.state.loading;return r.a.createElement(F.a,{className:e.root},g&&r.a.createElement(M.a,{color:"secondary"}),"Not Found"===h&&!1===g&&r.a.createElement("p",null,"User not found"),"Not Found"!==h&&!1===g&&r.a.createElement(W.a,{container:!0,spacing:16},r.a.createElement(W.a,{item:!0,md:6},r.a.createElement("img",{className:e.userPhoto,alt:c,src:"https://avatars0.githubusercontent.com/u/".concat(n)})),r.a.createElement(W.a,{item:!0,md:6},r.a.createElement("h2",null,o),l&&r.a.createElement(we.a,{badgeContent:l,color:"primary"},"Repositories \xa0 "),s&&r.a.createElement("p",null,"Country: ",s),u&&r.a.createElement("p",null,"Company: ",u),m&&r.a.createElement("p",null,"Biography: ",m),r.a.createElement("p",null,"Created at: ",p),r.a.createElement(O.a,{variant:"contained",size:"small",color:"secondary",href:i,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(be.a,null),"\xa0 github url")," \xa0",r.a.createElement(O.a,{variant:"contained",size:"small",color:"secondary",href:d,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(be.a,null),"\xa0 repositories url"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{component:I.a,to:"/",variant:"contained",color:"primary"},r.a.createElement(_.a,null),"\xa0Go Home"))))},a}return Object(m.a)(t,e),t}(r.a.Component),xe=Object(g.withStyles)(function(e){return{root:{padding:2*e.spacing.unit},userPhoto:{maxWidth:"100%",borderRadius:.5*e.spacing.unit}}})(ye),Se=a(119),je=a.n(Se),Oe=function(){return r.a.createElement("h3",null,r.a.createElement(je.a,null),"Page Not Found!")},Ne=Object(g.createMuiTheme)({palette:{primary:{main:"#43a047"},secondary:f.a},typography:{useNextVariants:!0}}),ke=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(g.MuiThemeProvider,{theme:Ne},r.a.createElement(B,null),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/",component:Ee,exact:!0}),r.a.createElement(h.a,{path:"/user/:username",component:xe}),r.a.createElement(h.a,{component:Oe})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[122,2,1]]]);
//# sourceMappingURL=main.dc78f0a0.chunk.js.map