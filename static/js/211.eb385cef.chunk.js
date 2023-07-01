"use strict";(self.webpackChunkcinema_cave=self.webpackChunkcinema_cave||[]).push([[211],{5947:function(e,i,s){s.d(i,{Z:function(){return o}});var t=s(1087),a=s(184);function l(e){var i=e.props;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("li",{className:"movie__item br-15 p-relative draw-border",children:(0,a.jsxs)(t.rU,{to:"/movie/".concat(i.id),className:"d-flex br-15 item__card",children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(i.poster_path),alt:i.original_title+" poster",className:"f-width br-15 card__logo skeleton",width:"140",height:"200",loading:"lazy"}),(0,a.jsxs)("div",{className:"f-width d-flex br-15 card__description",children:[(0,a.jsx)("p",{className:"card__title",children:i.title}),(0,a.jsxs)("p",{className:"d-flex card__score",children:[i.release_date?new Date(i.release_date).getFullYear():"N/A",(0,a.jsx)("span",{className:"rate",children:i.vote_average})]})]})]})})})}var n=s(2082),r=s(2881),c=s(9434);function o(e){var i=e.list,s=(0,c.v9)((function(e){return e.movies})),t=s.isLoading,o=s.isError,d=s.error;if(o&&d)return(0,a.jsx)(n.Z,{});var m;return(0,a.jsx)(a.Fragment,{children:t?(0,a.jsx)(r.Z,{}):i&&i.length>0?(m=i,(0,a.jsx)("ul",{className:"movies__list",children:m.map((function(e){return(0,a.jsx)(l,{props:e},e.id)}))})):(0,a.jsx)("p",{className:"f-width f-height list__empty",children:"No movie found"})})}},7211:function(e,i,s){s.r(i),s.d(i,{default:function(){return _}});var t=s(7689),a=s(9434),l=s(2791),n=s(2881),r=s(798),c=s(9806),o=s(1632),d=s(4698),m=s(5947),h=s(184);function _(){var e=(0,a.I0)(),i=(0,t.UO)().id,s=(0,t.s0)(),_=(0,a.v9)((function(e){return e.movies})),v=_.movieInfo,f=_.movieSimilar,u=_.isLoading,p=(0,a.v9)((function(e){return e.images.movieImages})),x=function(e){return e.toString().padStart(2,"0")};(0,l.useEffect)((function(){e((0,r.fP)(i)),e((0,d.a$)(i)),e((0,r.Lc)(i))}),[e,i]);var j,g=v.title,N=v.original_title,w=v.poster_path,b=v.release_date,y=v.production_countries,k=v.production_companies,M=v.runtime,R=v.overview,z=v.vote_average,S=v.vote_count;return(0,h.jsx)(h.Fragment,{children:u?(0,h.jsx)(n.Z,{}):Object.keys(v).length>0&&Object.keys(p).length>0&&(0,h.jsxs)("section",{className:"movie__info",children:[(0,h.jsx)(c.G,{className:"back__arrow",onClick:function(){return s(-1)},icon:o.acZ}),(0,h.jsxs)("div",{className:"d-flex info__header",children:[(0,h.jsxs)("div",{className:"title__block",children:[(0,h.jsx)("h2",{className:"movie__title",children:g}),(0,h.jsx)("h3",{className:"movie__title-original",children:N})]}),(0,h.jsxs)("div",{className:"d-flex p-relative rating",children:[(0,h.jsx)("div",{className:"p-relative stars-outer",children:(0,h.jsx)("div",{className:"stars-inner",style:{width:"".concat(Math.round(z/10*100),"%")}})}),(0,h.jsxs)("p",{className:"rating__vote",children:["Rate",z,"(",S,")"]})]})]}),(0,h.jsxs)("div",{className:"d-flex info__body",children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+w,alt:N+" poster",className:"info__logo skeleton",width:"240",height:"350"}),(0,h.jsxs)("ul",{className:"production__info",children:[(0,h.jsxs)("li",{className:"f-width p-relative info__item",children:[(0,h.jsx)("span",{className:"item__title",children:"Release date (US): "}),b]}),(0,h.jsxs)("li",{className:"f-width p-relative info__item",children:[(0,h.jsx)("span",{className:"item__title",children:"Country: "}),y.map((function(e){return e.name})).join(", ")]}),(0,h.jsxs)("li",{className:"f-width p-relative info__item",children:[(0,h.jsx)("span",{className:"item__title",children:"Companies: "}),k.map((function(e){return e.name})).join(", ")]}),(0,h.jsxs)("li",{className:"f-width p-relative info__item",children:[(0,h.jsx)("span",{className:"item__title",children:"Runtime: "}),"".concat(M||"N/A"," minutes (").concat((j=M||"N/A",isNaN(j)?"N/A":"".concat(x(Math.floor(j/60))," : ").concat(x(Math.round(j%60)))),")")]}),(0,h.jsxs)("li",{className:"f-width p-relative info__item",children:[(0,h.jsx)("span",{className:"item__title",children:"Overview: "}),R||"N/A"]}),(0,h.jsx)("li",{className:"f-width p-relative info__item",children:(0,h.jsx)("ul",{className:"d-flex br-15 movie__preview",onWheel:function(e){e.preventDefault(),document.querySelector(".movie__preview").scrollLeft+=e.deltaY+e.deltaX},children:p.backdrops.slice(0,7).map((function(e){var i=e.file_path;return(0,h.jsx)("li",{className:"preview__item",children:(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+i,alt:N+" img",className:"preview__img skeleton",width:"220",height:"250",loading:"lazy",onClick:function(){document.querySelector("#fullpage").style.backgroundImage="url(https://image.tmdb.org/t/p/original/".concat(i,")"),document.querySelector("#fullpage").style.display="block"}})},i)}))})})]})]}),(0,h.jsx)("svg",{style:{display:"none"},children:(0,h.jsx)("defs",{children:(0,h.jsxs)("symbol",{id:"fivestars",children:[(0,h.jsx)("path",{d:"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24",fillRule:"evenodd"}),(0,h.jsx)("path",{d:"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24",fillRule:"evenodd",transform:"translate(24)"}),(0,h.jsx)("path",{d:"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24",fillRule:"evenodd",transform:"translate(48)"}),(0,h.jsx)("path",{d:"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24",fillRule:"evenodd",transform:"translate(72)"}),(0,h.jsx)("path",{d:"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24",fillRule:"evenodd",transform:"translate(96)"})]})})}),(0,h.jsxs)("div",{className:"movie__similar",children:[(0,h.jsx)("span",{className:"movie-similar__title",children:"Recommends"}),(0,h.jsx)(m.Z,{list:f})]})]})})}}}]);
//# sourceMappingURL=211.eb385cef.chunk.js.map