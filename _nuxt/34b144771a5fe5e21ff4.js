(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{539:function(t,e,n){var a=n(546);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(16).default)("263c8898",a,!0,{})},540:function(t,e,n){var a=n(548);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(16).default)("75aaed28",a,!0,{})},541:function(t,e,n){var a=n(554);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(16).default)("30befe66",a,!0,{})},543:function(t,e,n){"use strict";var a=n(5),r=n.n(a),o=n(7),i=n(544),s={data:function(){return{visible:6,page:0,pageSize:3}},props:{horizon:{type:Boolean,default:!0},title:String,background:{type:String,default:"white"},games:Array},computed:r()({visibleGames:function(){return this.games.slice(0,this.visible+this.page*this.pageSize)}},Object(o.c)(["isDesktop"])),methods:{updateGames:function(t){var e=this;if("add"===t)return this.page+=1;this.page-=1,this.$nextTick(function(){return e.$refs.container.scrollIntoView({block:"end"})})}},components:{game:i.a}},c=(n(547),n(3)),d=Object(c.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"bg-"+t.background},[n("b-container",{ref:"container",staticClass:"p-2 py-md-4 text-center",class:{horizon:t.horizon}},[t.title?n("h1",{domProps:{textContent:t._s(t.title)}}):t._e(),n("no-ssr",[t.isDesktop||!t.horizon?n("b-row",{attrs:{"no-gutters":""}},[t._l(t.visibleGames,function(t,e){return n("b-col",{key:e,staticClass:"p-2",attrs:{lg:"4",cols:"6"}},[n("game",{attrs:{game:t}})],1)}),n("div",{staticClass:"position-relative w-100 py-3"},[t.visibleGames.length<t.games.length?n("b-btn",{staticClass:"px-4 py-2",attrs:{variant:"danger"},on:{click:function(e){t.updateGames("add")}}},[n("span",{staticClass:"text-uppercase",domProps:{textContent:t._s(t.$t("casino.show_more"))}})]):t._e(),t.visibleGames.length>t.visible?n("b-btn",{staticClass:"ml-3 px-4 py-2",attrs:{variant:"outline-dark"},on:{click:function(e){t.updateGames()}}},[n("span",{staticClass:"text-uppercase",domProps:{textContent:t._s(t.$t("casino.show_less"))}})]):t._e()],1)],2):n("div",{staticClass:"mobile-games"},t._l(t.games,function(t,e){return n("game",{key:e,attrs:{game:t}})}))],1)],1)],1)},[],!1,null,"2de3e29e",null);d.options.__file="group.vue";e.a=d.exports},544:function(t,e,n){"use strict";var a={mixins:[n(11).a],data:function(){return{backgroundGradient:{backgroundColor:"aliceblue",backgroundImage:"linear-gradient(-45deg, rgb(56, 26, 166), rgba(0, 0, 0, 0) 70%), linear-gradient(45deg, rgb(97, 158, 176), rgba(0, 0, 0, 0) 70%)"}}},props:{sm:{type:Boolean,default:!1},game:Object}},r=(n(545),n(3)),o=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game",style:t.backgroundGradient,on:{click:function(e){t.openGameIntro(t.game)}}},[n("h3",{staticClass:"game-name",domProps:{textContent:t._s(t.game.name)}}),t.isDesktop?n("div",{staticClass:"game-button"},[n(t.sm?"h5":"h3",{tag:"component",staticClass:"game-button-title text-light",domProps:{textContent:t._s(t.game.name)}}),n("b-btn",{staticClass:"px-4 slide-left",attrs:{variant:"danger"},on:{click:function(e){return e.stopPropagation(),t.playGame(e)}}},[n("span",{staticClass:"text-uppercase",class:{"font-size-xs":t.sm},domProps:{textContent:t._s(t.$t("play"))}})]),t.game.try?n("b-btn",{staticClass:"ml-3 px-4 slide-right",attrs:{variant:"white"},on:{click:t.tryGame}},[n("span",{staticClass:"text-uppercase",class:{"font-size-xs":t.sm},domProps:{textContent:t._s(t.$t("try"))}})]):t._e()],1):t._e()])},[],!1,null,"40301780",null);o.options.__file="game.vue";e.a=o.exports},545:function(t,e,n){"use strict";var a=n(539);n.n(a).a},546:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,'\n[data-v-40301780]:export{headerHeight:62px\n}\n.game[data-v-40301780]{display:flex;flex-direction:column;justify-content:center;position:relative;height:200px;cursor:pointer\n}\n.game[data-v-40301780]:before{content:"";opacity:0;background-color:rgba(40,40,40,.7);height:100%;transition:.25s\n}\n.game-name[data-v-40301780],.game[data-v-40301780]:before{position:absolute;width:100%\n}\n.game-name[data-v-40301780]{color:var(--dark);text-transform:capitalize\n}\n.game-button[data-v-40301780]{opacity:0;position:relative\n}\n.game-button[data-v-40301780],.game-button-title[data-v-40301780],.game-button>.btn[data-v-40301780]{transition:.25s\n}\n.game-button-title[data-v-40301780]{text-transform:capitalize;-webkit-transform:translateY(-70%);transform:translateY(-70%)\n}\n.game-button>.btn.slide-left[data-v-40301780]{-webkit-transform:skew(-10deg) translateX(-20%);transform:skew(-10deg) translateX(-20%)\n}\n.game-button>.btn.slide-right[data-v-40301780]{-webkit-transform:skew(-10deg) translateX(20%);transform:skew(-10deg) translateX(20%)\n}\n.btn-white[data-v-40301780]{background:#fff\n}\n.btn-white[data-v-40301780]:hover{background:var(--dark)\n}\n.btn-white:hover span[data-v-40301780]{color:#fff\n}\n@media (min-width:992px){\n.game:hover .game-button[data-v-40301780],.game[data-v-40301780]:hover:before{opacity:1\n}\n.game:hover .game-name[data-v-40301780]{display:none\n}\n.game:hover .game-button-title[data-v-40301780]{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.game:hover .game-button>.btn[data-v-40301780]{-webkit-transform:skew(-10deg) translateX(0);transform:skew(-10deg) translateX(0)\n}\n}\n@media (max-width:991px){\n.game[data-v-40301780]{height:150px\n}\n.game[data-v-40301780]:before{content:none\n}\n.game-button[data-v-40301780]{display:none\n}\n}',""])},547:function(t,e,n){"use strict";var a=n(540);n.n(a).a},548:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,'\n[data-v-2de3e29e]:export{headerHeight:62px\n}\n.bg-hot[data-v-2de3e29e]{background-color:var(--gallery)\n}\n@media (max-width:991px){\n.bg-hot[data-v-2de3e29e]{background-color:var(--danger);color:#fff\n}\n.container.horizon[data-v-2de3e29e]{position:relative\n}\n.container.horizon[data-v-2de3e29e]:after,.container.horizon[data-v-2de3e29e]:before{content:"";display:block;position:absolute;z-index:2;top:0;background-image:linear-gradient(transparent,rgba(0,0,0,.05) 10%,rgba(0,0,0,.6) 60%,rgba(0,0,0,.05) 90%,transparent);width:4px;height:100%;border-radius:50%\n}\n.container.horizon[data-v-2de3e29e]:before{left:8px\n}\n.container.horizon[data-v-2de3e29e]:after{right:8px\n}\n.container.horizon .mobile-games[data-v-2de3e29e]{overflow-x:auto;display:flex;flex-direction:column;flex-wrap:wrap;height:235px\n}\n.container.horizon .game[data-v-2de3e29e]{margin:.25rem;width:150px;height:100px\n}\n}',""])},549:function(t,e,n){"use strict";var a={data:function(){return{tabs:[{icon:"plane",title:"Plane",content:"Content 1"},{icon:"road",title:"Road",content:"Content 2"},{icon:"suitcase",title:"Suitcase",content:"Content 3"},{icon:"shopping-cart",title:"Shopping",content:"Content 4"}]}}},r=(n(553),n(3)),o=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"p-2 p-md-3"},[n("b-tabs",{attrs:{"nav-class":"justify-content-center","no-nav-style":""}},t._l(t.tabs,function(e){return n("b-tab",{key:e.icon},[n("b-btn",{attrs:{slot:"title",variant:"tab"},slot:"title"},[n("icon",{attrs:{name:e.icon,scale:"4"}})],1),n("div",{staticClass:"py-3 text-center"},[n("h1",{staticClass:"text-danger",domProps:{textContent:t._s(e.title)}}),n("p",{staticClass:"text-gray",domProps:{textContent:t._s(e.content)}})])],1)}))],1)},[],!1,null,"1d965bd7",null);o.options.__file="tabs.vue";e.a=o.exports},550:function(t,e,n){var a=n(693);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(16).default)("6091c700",a,!0,{})},551:function(t,e,n){var a=n(695);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(16).default)("02208515",a,!0,{})},552:function(t,e,n){var a=n(697);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(16).default)("566a34c9",a,!0,{})},553:function(t,e,n){"use strict";var a=n(541);n.n(a).a},554:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"\n[data-v-1d965bd7]:export{headerHeight:62px\n}\n[data-v-1d965bd7] .nav-link{padding:0\n}\n[data-v-1d965bd7] .nav-link,[data-v-1d965bd7] .nav-link.active,[data-v-1d965bd7] .nav-link:hover{border:0\n}\n[data-v-1d965bd7] .nav-link.active .btn.btn-tab{background-color:var(--danger);color:#fff\n}\n.btn.btn-tab[data-v-1d965bd7]{background-color:var(--gallery);margin:0 .5rem;width:190px;height:190px;padding:0;color:#959595;transition:.25s\n}\n.btn.btn-tab[data-v-1d965bd7]:hover{background-color:#959595;color:#fff\n}\n@media (max-width:991px){\n.btn.btn-tab[data-v-1d965bd7]{margin:0 .25rem;width:70px;height:70px\n}\n.btn.btn-tab[data-v-1d965bd7],.btn.btn-tab .fa-icon[data-v-1d965bd7]{-webkit-transform:none;transform:none\n}\n.btn.btn-tab .fa-icon[data-v-1d965bd7]{width:35px\n}\n}",""])},689:function(t,e,n){"use strict";n(38);var a=n(8),r=n.n(a),o=n(5),i=n.n(o),s=n(11),c=n(7),d=[{name:"List 0",icon:"dice-d20"},{name:"List 1",icon:"dice-d20"},{name:"List 2",icon:"dice-d20"}],l={mixins:[s.a,s.c],data:function(){return{bannerOptions:{allowTouchMove:!1,autoplay:{delay:5e3},loop:!0,pagination:{el:".swiper-pagination",clickable:!0},watchOverflow:!0},banners:[]}},props:{api:{type:Boolean,default:!0},category:String},created:function(){this.init()},methods:i()({init:function(){var t=r()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!this.api){t.next=7;break}return t.next=4,this.getGameBanners({category:this.category});case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0=d;case 8:this.banners=t.t0,t.next=14;break;case 11:t.prev=11,t.t1=t.catch(0),this.$toast.error(t.t1);case 14:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}()},Object(c.b)(["getGameBanners"]))},p=(n(692),n(3)),b=Object(p.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner",class:{fill:"game"!==t.category}},[n("no-ssr",[n("swiper",{key:t.updateSwiper,attrs:{options:t.bannerOptions}},[t._l(t.banners,function(e,a){return n("swiper-slide",{key:a},[n("aside",[t.api?n("div",{staticClass:"w-100"},[n("h1",[n("icon",{attrs:{name:e.icon,scale:"2"}}),n("span",{staticClass:"align-middle ml-2 text-uppercase",domProps:{textContent:t._s(e.name)}})],1),n("h3",{staticClass:"text-capitalize",domProps:{textContent:t._s(e.content)}}),n("b-btn",{staticClass:"px-4 py-2",attrs:{variant:"danger"},on:{click:t.playGame}},[n("span",{staticClass:"text-uppercase",domProps:{textContent:t._s(t.$t("play_now"))}})])],1):n("div",{staticClass:"w-100"},[n("h1",{domProps:{textContent:t._s(e.name)}}),n("icon",{attrs:{name:e.icon,scale:"2"}}),n("h3",{staticClass:"text-capitalize",domProps:{textContent:t._s(e.content)}}),n("b-btn",{staticClass:"px-4 py-2",attrs:{variant:"danger"},on:{click:t.playGame}},[n("span",{staticClass:"text-uppercase",domProps:{textContent:t._s(t.$t("play_now"))}})])],1)])])}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)],1)},[],!1,null,"6c45f748",null);b.options.__file="banner.vue";e.a=b.exports},690:function(t,e,n){"use strict";n(38);var a=n(8),r=n.n(a),o=n(5),i=n.n(o),s=n(7),c={mixins:[n(11).c],data:function(){return{categoryOptions:{centerInsufficientSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:"auto",watchOverflow:!0,breakpoints:{991:{freeMode:!0,freeModeMomentumBounceRatio:0,resistanceRatio:0}}}}},computed:i()({gameCategories:function(){var t=this;return this.categories.map(function(e,n){return e.style=t.getGradient(n),e})}},Object(s.e)({categories:function(t){return t.game.categories}}),Object(s.c)(["isDesktop"])),watch:{isDesktop:function(){this.updateSwiper+=1}},created:function(){this.init()},mounted:function(){var t=this;setTimeout(function(){t.$refs.categorySwiper.swiper.update()},500)},methods:i()({init:function(){var t=r()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getGameCategory();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),this.$toast.error(t.t0);case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(){return t.apply(this,arguments)}}(),getGradient:function(t){return{backgroundImage:"linear-gradient(90deg, hsl(".concat(t/10*360,", 80%, 30%), hsl(").concat((t+1)/10*360,", 80%, 30%))")}}},Object(s.b)(["getGameCategory"]))},d=(n(694),n(3)),l=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("div",{staticClass:"category-inner"},[n("no-ssr",[n("swiper",{key:t.updateSwiper,ref:"categorySwiper",attrs:{options:t.categoryOptions}},t._l(t.gameCategories,function(e,a){return n("swiper-slide",{key:a},[n("b-btn",{style:e.style,attrs:{to:e.to}},[n("span",[n("icon",{attrs:{name:"dice-d20",scale:"2"}}),n("span",{staticClass:"d-block mt-3 text-uppercase",domProps:{textContent:t._s(e.name)}})],1)])],1)})),n("div",{staticClass:"d-none d-lg-block"},[n("div",{staticClass:"swiper-button-prev swiper-button-black",attrs:{slot:"button-prev"},slot:"button-prev"},[n("icon",{attrs:{name:"angle-left",scale:"2"}})],1),n("div",{staticClass:"swiper-button-next swiper-button-black",attrs:{slot:"button-next"},slot:"button-next"},[n("icon",{attrs:{name:"angle-right",scale:"2"}})],1)])],1)],1)])},[],!1,null,"db21a958",null);l.options.__file="category.vue";e.a=l.exports},691:function(t,e,n){"use strict";n(38);var a=n(8),r=n.n(a),o=n(5),i=n.n(o),s=n(7),c={computed:i()({},Object(s.e)({vendors:function(t){return t.game.vendors}})),created:function(){this.init()},methods:i()({init:function(){var t=r()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getVendors();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),this.$toast.error(t.t0);case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(){return t.apply(this,arguments)}}()},Object(s.b)(["getVendors"]))},d=(n(696),n(3)),l=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gallery py-4 text-center"},[n("b-container",{staticClass:"d-flex flex-wrap justify-content-center"},t._l(t.vendors,function(e,a){return n("div",{key:a,staticClass:"p-2"},[n("b-btn",{attrs:{variant:"vendor",to:{params:{category:e.category}}}},[t._v(t._s(e.name))])],1)}))],1)},[],!1,null,"651bacbd",null);l.options.__file="vendors.vue";e.a=l.exports},692:function(t,e,n){"use strict";var a=n(550);n.n(a).a},693:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,'\n[data-v-6c45f748]:export{headerHeight:62px\n}\n.banner[data-v-6c45f748]{height:400px;color:#fff\n}\n.banner .swiper-container[data-v-6c45f748]{height:100%\n}\n.banner .swiper-container .swiper-slide[data-v-6c45f748]{background-image:linear-gradient(-45deg,#373b44,rgba(67,134,244,0) 70%),linear-gradient(33deg,#2980b9,#6dd5fa,hsla(0,0%,100%,0) 70%)\n}\n.banner[data-v-6c45f748] .swiper-pagination-bullet{outline:0;opacity:1;background-color:transparent;border:1px solid #fff;width:10px;height:10px\n}\n.banner[data-v-6c45f748] .swiper-pagination-bullet-active{background-color:#fff\n}\n.banner aside[data-v-6c45f748]{display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.54);margin-left:auto;width:35%;height:100%;text-align:center\n}\n.banner aside[data-v-6c45f748]:before{content:"";margin-left:-70.4px;border-color:transparent transparent rgba(0,0,0,.54);border-style:solid;border-width:0 0 400px 70.4px\n}\n@media (max-width:767px){\n.banner.fill[data-v-6c45f748]{height:calc(100vh - 122px)\n}\n.banner aside[data-v-6c45f748]{width:100%\n}\n.banner aside[data-v-6c45f748]:before{content:none\n}\n}',""])},694:function(t,e,n){"use strict";var a=n(551);n.n(a).a},695:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"\n[data-v-db21a958]:export{headerHeight:62px\n}\n.category[data-v-db21a958]{position:-webkit-sticky;position:sticky;z-index:1020;top:62px;background-color:var(--gallery);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}\n.category-inner[data-v-db21a958]{position:relative;margin:0 auto;width:85%;max-width:850px\n}\n.category .swiper-container[data-v-db21a958]{background-color:#fff;-webkit-transform:skew(-10deg);transform:skew(-10deg)\n}\n.category .swiper-container .swiper-slide[data-v-db21a958]{margin:0 1px;width:auto\n}\n.category .swiper-button-next[data-v-db21a958],.category .swiper-button-prev[data-v-db21a958]{outline:0;background-image:none;margin-top:-18px\n}\n.category .swiper-button-next[data-v-db21a958]:hover,.category .swiper-button-prev[data-v-db21a958]:hover{color:var(--danger)\n}\n.category .swiper-button-prev[data-v-db21a958]{left:-40px\n}\n.category .swiper-button-next[data-v-db21a958]{right:-50px\n}\n.category .btn[data-v-db21a958]{display:flex;justify-content:center;align-items:center;border:0;width:100px;height:100px;padding:0;font-size:14px;-webkit-transform:skewX(.1deg);transform:skewX(.1deg)\n}\n@media (max-width:991px){\n.category[data-v-db21a958]{background-color:#fff\n}\n.category-inner[data-v-db21a958]{width:100%;padding-bottom:.25rem\n}\n.category .swiper-container[data-v-db21a958]{-webkit-transform:none;transform:none\n}\n.category .swiper-container .swiper-slide[data-v-db21a958]{margin:0 2px\n}\n.category .btn[data-v-db21a958]{width:85px;height:85px\n}\n.category .btn span[data-v-db21a958]{-webkit-transform:none;transform:none\n}\n}",""])},696:function(t,e,n){"use strict";var a=n(552);n.n(a).a},697:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"\n[data-v-651bacbd]:export{headerHeight:62px\n}\n.btn-vendor[data-v-651bacbd]{display:flex;justify-content:center;align-items:center;background-color:#fff;border-width:1px;width:190px;height:190px;color:var(--gray)\n}\n.btn-vendor[data-v-651bacbd]:hover{border:1px solid var(--danger)\n}\n.btn-vendor:hover img[data-v-651bacbd]{opacity:1\n}\n.btn-vendor img[data-v-651bacbd]{opacity:.6;transition:.25s\n}\n@media (max-width:991px){\n.btn-vendor[data-v-651bacbd]{width:127.3px;height:127.3px\n}\n.btn-vendor[data-v-651bacbd],.btn-vendor .fa-icon[data-v-651bacbd]{-webkit-transform:none;transform:none\n}\n}",""])}}]);