(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{F3eC:function(t,e,n){"use strict";n.r(e);n("07d7");var i=n("Kw5r"),s={props:{items:{default:[]}},components:{List:function(){return Promise.resolve().then(n.bind(null,"F3eC"))}},data:function(){return{list:this.items}},methods:{toggle:function(t){i.a.set(this.list[t],"isOpen",!this.list[t].isOpen)},link:function(t){return window.location.protocol+"//"+window.location.host+t}}},l=n("KHd+"),o=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"menu menu-tree"},t._l(t.list,(function(e,i){return 0!=e.published?n("li",{key:i},[e.link?n("g-link",{staticClass:"menu__item menu__link",attrs:{to:e.link,exact:"/docs/"==e.link}},[t._v(t._s(e.title))]):[n("h4",{staticClass:"menu__item menu__title",on:{click:function(e){return t.toggle(i)}}},[t._v("\n        "+t._s(e.title)+"\n        "),n("span",[t._v("["+t._s(!0===e.isOpen?"-":"+")+"]")])]),n("List",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"item.isOpen"}],attrs:{items:e.items}})]],2):t._e()})),0)}),[],!1,null,null,null);e.default=o.exports}}]);