(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{555:function(t,e,a){var n=a(699);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(16).default)("78231d89",n,!0,{})},698:function(t,e,a){"use strict";var n=a(555);a.n(n).a},699:function(t,e,a){(t.exports=a(15)(!1)).push([t.i,"\n[data-v-62a0128f]:export{headerHeight:62px\n}\n.container[data-v-62a0128f]{max-width:900px\n}",""])},715:function(t,e,a){"use strict";a.r(e);a(111),a(112);var n=a(5),r=a.n(n),s=(a(38),a(8)),o=a.n(s),i=a(7),c=a(689),u=a(690),g=a(543),p=a(691),m=a(549),l={name:"lists",head:function(){return{title:"Lists"}},asyncData:function(){var t=o()(regeneratorRuntime.mark(function t(e){var a,n,r,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.params,n=e.store,r=e.error,t.prev=1,s=a.category,t.next=5,n.dispatch("getGames");case 5:return t.abrupt("return",{category:s});case 8:t.prev=8,t.t0=t.catch(1),r({statusCode:404,message:t.t0});case 11:case"end":return t.stop()}},t,this,[[1,8]])}));return function(e){return t.apply(this,arguments)}}(),computed:r()({},Object(i.e)({games:function(t){return t.game.games}})),methods:{getGames:function(t){try{return"games"===t?this.games:this.games.filter(function(e){return e.category.includes(t)})}catch(t){return[]}}},components:{banner:c.a,vCategory:u.a,casinoGroup:g.a,casinoVendors:p.a,casinoTabs:m.a}},d=(a(698),a(3)),f=Object(d.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("banner",{attrs:{api:!1}}),e("v-category"),e("casino-group",{attrs:{title:"Top",games:this.getGames("top")}}),e("casino-group",{attrs:{title:"Recommend",background:"hot",games:this.getGames("recommend")}}),e("casino-group",{attrs:{title:"Video",games:this.getGames("video")}}),e("casino-group",{attrs:{title:"Gallery",background:"gallery",games:this.getGames("gallery")}}),e("casino-vendors"),e("casino-tabs")],1)},[],!1,null,"62a0128f",null);f.options.__file="lists.vue";e.default=f.exports}}]);