"use strict";(self.webpackChunkcinema_cave=self.webpackChunkcinema_cave||[]).push([[606],{9606:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var a=n(1413),i=n(9439),t=n(2791),s=n(9434),l=n(3433),c=n(1087),o=n(9806),u=n(1632),d=n(184);function p(e){var r=e.handleFilter,n=(0,c.lr)(),p=(0,i.Z)(n,1)[0],m=(0,t.useRef)([]),f=(0,t.useState)(!1),g=(0,i.Z)(f,2),v=g[0],h=g[1],x=(0,t.useState)({genre:p.getAll("genre")||"",year:p.get("year")||"",sort:p.get("sort")||""}),_=(0,i.Z)(x,2),j=_[0],N=_[1],Z=(0,s.v9)((function(e){return e.genres.genreList}));!function(){for(var e=(new Date).getFullYear(),r=[(0,d.jsx)("option",{name:"all",value:"",id:"check-all",children:"All"},"all")],n=e;n>=e-15;n--)r.push((0,d.jsx)("option",{name:n,value:n,id:n,children:n},n));m.current=r}();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{onClick:function(){h((function(e){return!e}))},className:"d-flex menu__toggle ".concat(v?"active":""),children:[(0,d.jsx)("span",{className:"line line1"}),(0,d.jsx)("span",{className:"line line2"}),(0,d.jsx)("span",{className:"line line3"})]}),(0,d.jsxs)("aside",{className:"aside ".concat(v?"active":""),children:[(0,d.jsx)(o.G,{onClick:function(){h(!1),r(j)},className:"movie__filter",icon:u.G_j}),(0,d.jsxs)("select",{defaultValue:"popularity.desc",onChange:function(e){var r=e.target;return j.sort=r.value},name:"sort",children:[(0,d.jsx)("option",{value:"popularity.desc",children:"More popular first"}),(0,d.jsx)("option",{value:"popularity.asc",children:"Less popular first"}),(0,d.jsx)("option",{value:"primary_release_date.desc",children:"Newer"}),(0,d.jsx)("option",{value:"primary_release_date.asc",children:"Older"})]}),(0,d.jsx)("select",{onChange:function(e){var r=e.target;return j.year=r.value},className:"movie__years",defaultValue:j.year,children:m.current}),(0,d.jsx)("ul",{className:"d-flex movie__categories categories",children:Z.map((function(e){var r=e.id,n=e.name;return(0,d.jsx)("li",{onClick:function(){return function(e){N((function(r){return(0,a.Z)((0,a.Z)({},r),{},{genre:j.genre.includes(e)?r.genre.filter((function(r){return r!==e})):[].concat((0,l.Z)(r.genre),[e])})}))}(r.toString())},className:"categories__item ".concat(j.genre.includes(r.toString())?"active":""),children:n},r)}))})]})]})}var m=n(9012),f=n(798);function g(){var e=(0,s.v9)((function(e){return e.movies})).page,r=(0,s.I0)(),n=(0,c.lr)(),l=(0,i.Z)(n,2),g=l[0],v=l[1],h=(0,t.useState)({genre:[],year:"",sort:"",page:parseInt(g.get("page")||1)}),x=(0,i.Z)(h,2),_=x[0],j=x[1],N=(0,s.v9)((function(e){return e.movies})).movieList;(0,t.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"}),v((0,a.Z)({},_)),r((0,f.HS)((0,a.Z)({},_)))}),[_]);var Z=function(r){r<1||r>e.totalPages||j((function(e){return(0,a.Z)((0,a.Z)({},e),{},{page:r})}))};return(0,d.jsxs)("div",{className:"wrapper",children:[(0,d.jsx)(m.Z,{list:N}),(0,d.jsx)(p,{handleFilter:function(e){j((0,a.Z)({},e))}}),(0,d.jsx)("div",{className:"wrapper_fixed",children:(0,d.jsxs)("div",{className:"d-flex pagination",children:[(0,d.jsx)(o.G,{className:"pagination__arrow",onClick:function(){return Z(e.currPage-1)},icon:u.acZ}),(0,d.jsx)("span",{className:"pagination__page",children:e.currPage}),(0,d.jsx)(o.G,{className:"pagination__arrow",onClick:function(){return Z(e.currPage+1)},icon:u.eFW})]})})]})}},9012:function(e,r,n){n.d(r,{Z:function(){return o}});var a=n(1087),i=n(184);function t(e){var r=e.props;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("li",{className:"movie__item br-15 p-relative draw-border",children:(0,i.jsxs)(a.rU,{to:"/movie/".concat(r.id),className:"d-flex br-15 item__card",children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+r.poster_path,alt:r.original_title+" poster",className:"f-width br-15 card__logo",width:"140",height:"200",loading:"lazy"}),(0,i.jsxs)("div",{className:"f-width d-flex br-15 card__description",children:[(0,i.jsx)("p",{className:"card__title",children:r.title}),(0,i.jsxs)("p",{className:"d-flex card__score",children:[r.release_date?new Date(r.release_date).getFullYear():"N/A",(0,i.jsx)("span",{className:"rate",children:r.vote_average})]})]})]})})})}var s=n(2082),l=n(2881),c=n(9434);function o(e){var r=e.list,n=(0,c.v9)((function(e){return e.movies})),a=n.isLoading,o=n.isError,u=n.error;if(o&&u)return(0,i.jsx)(s.Z,{});var d;return(0,i.jsx)(i.Fragment,{children:a?(0,i.jsx)(l.Z,{}):r&&r.length>0?(d=r,(0,i.jsx)("ul",{className:"movies__list",children:d.map((function(e){return(0,i.jsx)(t,{props:e},e.id)}))})):(0,i.jsx)("p",{className:"f-width f-height list__empty",children:"No movie found"})})}}}]);
//# sourceMappingURL=606.ddcdf87b.chunk.js.map