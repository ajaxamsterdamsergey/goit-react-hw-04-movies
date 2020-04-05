(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{30:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return m}));var n=a(36),c=a.n(n),r="https://api.themoviedb.org/3/",i="34fc95322fa082bd00768bf11ed9b6d7",o=function(){return c.a.get("".concat(r,"trending/all/day?api_key=").concat(i)).then((function(e){return e.data}))},l=function(e){return c.a.get("".concat(r,"movie/").concat(e,"?api_key=").concat(i)).then((function(e){return e.data}))},s=function(e){return c.a.get("".concat(r,"movie/").concat(e,"/credits?api_key=").concat(i)).then((function(e){return e.data}))},u=function(e){return c.a.get("".concat(r,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(e){return e.data}))},m=function(e){return c.a.get("".concat(r,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.data}))}},33:function(e,t,a){e.exports={navLink:"Styles_navLink__X1_0s",active:"Styles_active__2_-Nx",button:"Styles_button__P2SVq",homePageList:"Styles_homePageList__2PYXZ",itemHomePage:"Styles_itemHomePage__1YL3A",moviesPageList:"Styles_moviesPageList__3z1yF"}},62:function(e,t,a){e.exports={image:"Cast_image__Wtcp0",list:"Cast_list__CLmYB",character:"Cast_character__2JZEi",name:"Cast_name__12jQu"}},63:function(e,t,a){e.exports={genre:"MovieDetails_genre__wxmvM",genreItem:"MovieDetails_genreItem__1S70p",wrapper:"MovieDetails_wrapper__Yzqia",text:"MovieDetails_text__htwZ5",details:"MovieDetails_details__rQQsH",image:"MovieDetails_image__24ROd"}},66:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(31),c=a(32),r=a(34),i=a(35),o=a(0),l=a.n(o),s=a(7),u=a(5),m=a(30),p=a(62),v=a.n(p),h=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={cast:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;Object(m.a)(t).then((function(t){return e.setState({cast:t.cast})}))}},{key:"render",value:function(){var e=this.state.cast;return l.a.createElement("div",null,l.a.createElement("ul",{className:v.a.list},e.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("img",{className:v.a.image,src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name}),l.a.createElement("p",{className:v.a.name},e.name),l.a.createElement("p",{className:v.a.character},"Character: ",e.character))}))))}}]),a}(o.Component),_=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={reviews:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;Object(m.e)(t).then((function(t){return e.setState({reviews:t.results})}))}},{key:"render",value:function(){var e=this.state.reviews;return l.a.createElement("div",null,l.a.createElement("ul",null,e.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("p",null,e.author),l.a.createElement("p",null,e.content))}))))}}]),a}(o.Component),f=a(63),d=a.n(f),g=function(e){var t=e.title,a=e.overview,n=e.genres,c=e.vote_average,r=e.poster_path,i=e.original_title;return l.a.createElement("div",{className:d.a.wrapper},l.a.createElement("img",{className:d.a.image,src:"https://image.tmdb.org/t/p/w500".concat(r),alt:i}),l.a.createElement("div",{className:d.a.details},l.a.createElement("h2",null,t),l.a.createElement("p",{className:d.a.text},"User Score: ",10*c,"%"),l.a.createElement("h4",null,"Overview"),l.a.createElement("p",{className:d.a.text},a),l.a.createElement("h4",null,"Genres"),l.a.createElement("ul",{className:d.a.genreItem},n&&n.map((function(e){return l.a.createElement("li",{className:d.a.genre,key:e.id},e.name)})))))},E=a(33),y=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movie:null},e.handleOnGoBack=function(){var t=e.props,a=t.history,n=t.location;if(n.state)return a.push(n.state.from);a.push("/")},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;Object(m.c)(t).then((function(t){return e.setState({movie:t})}))}},{key:"render",value:function(){var e=this.state.movie,t=this.props.match;return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement("button",{type:"button",className:E.button,onClick:this.handleOnGoBack},"Go back"),l.a.createElement(g,e),l.a.createElement("h4",null,"Additional information"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.c,{to:"".concat(t.url,"/cast"),className:E.navLink,activeClassName:E.active},"Cast")),l.a.createElement("li",null,l.a.createElement(s.c,{to:"".concat(t.url,"/reviews"),className:E.navLink,activeClassName:E.active},"Reviews"))),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"".concat(t.path,"/cast"),component:h}),l.a.createElement(u.a,{path:"".concat(t.path,"/reviews"),component:_}))))}}]),a}(o.Component)}}]);
//# sourceMappingURL=movie-details-page.423490aa.chunk.js.map