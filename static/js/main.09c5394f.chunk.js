(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){},171:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},472:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(1),c=a.n(n),i=a(22),r=a.n(i),o=(a(153),a(32)),l=a(4);a(154);var j=function(e){return console.log(e),Object(s.jsxs)("div",{className:"about__container",children:[Object(s.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(s.jsx)("span",{children:"-George Orwell, 1984"})]})},m=a(84),u=a.n(m),d=a(144),b=a(57),h=a(58),v=a(60),p=a(59),O=a(145),x=a.n(O);a(171);var f=function(e){var t=e.title,a=e.year,n=e.summary,c=e.poster,i=e.genres;return Object(s.jsx)("div",{className:"movie",children:Object(s.jsxs)(o.b,{to:{pathname:"/movie-detail",state:{year:a,title:t,summary:n,poster:c,genres:i}},children:[Object(s.jsx)("img",{src:c,alt:t,title:t}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:t}),Object(s.jsx)("h5",{className:"movie__year",children:a}),Object(s.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(s.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})})},_=(a(176),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(b.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating ");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:a.map((function(e){return Object(s.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(c.a.Component));a(177);var y=function(){return Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)(o.b,{to:"/about",children:"About"})]})},g=(a(178),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(s.jsxs)("div",{classname:"detail_box",children:[Object(s.jsx)("span",{classname:"detail_title",children:e.state.title}),Object(s.jsx)("p",{classname:"detail_summary",children:e.state.summary})]}):null}}]),a}(c.a.Component));var N=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(y,{}),Object(s.jsx)(l.a,{path:"/",exact:!0,component:_}),Object(s.jsx)(l.a,{path:"/about",component:j}),Object(s.jsx)(l.a,{path:"/movie-detail",component:g})]})};r.a.render(Object(s.jsx)(N,{}),document.getElementById("root"))}},[[472,1,2]]]);
//# sourceMappingURL=main.09c5394f.chunk.js.map