(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{249:function(t,n,e){"use strict";e(28),e(40);var o=e(250),r=e.n(o),l={data:function(){return{title:"Let's Palindrome!",raw:"とほかみえみため",palindorome:"",clipBoard:null}},mounted:function(){this.clipBoard=new r.a(".clipcopy"),this.clipBoard.on("success",(function(t){alert("クリップボードにコピーしました"),t.clearSelection()})),this.clipBoard.on("error",(function(t){alert("コピー失敗")}))},methods:{MethodsText:function(){return this.palindorome},convertLogos:function(){var t=this,n=this.raw.replace(/\r\n|\r/g,"\n").split("\n");this.palindorome="",n.forEach((function(element){element+=element.split("").reverse().join(""),t.palindorome+=element+"\n"}))}}},c=e(30),d=e(64),v=e.n(d),h=e(276),m=e(274),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",[e("v-textarea",{attrs:{cols:"50",outlined:"",rows:"7","row-height":"100",clearable:"true"},model:{value:t.raw,callback:function(n){t.raw=n},expression:"raw"}}),t._v(" "),e("v-btn",{attrs:{color:"secondary"},on:{click:t.convertLogos}},[t._v("\n      変換\n    ")]),t._v(" "),e("v-btn",{staticClass:"clipcopy",attrs:{"data-clipboard-text":t.MethodsText(),color:"primary"}},[t._v("\n      コピー\n    ")]),t._v(" "),e("p",[t._v("↓に回文が表示されます")])],1),t._v(" "),e("div",[e("v-textarea",{attrs:{cols:"50",outlined:"",rows:"7","row-height":"10",readonly:""},model:{value:t.palindorome,callback:function(n){t.palindorome=n},expression:"palindorome"}})],1)])}),[],!1,null,null,null);n.a=component.exports;v()(component,{VBtn:h.a,VTextarea:m.a})},277:function(t,n,e){"use strict";e.r(n);var o={components:{palindrome:e(249).a}},r=e(30),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("palindrome")],1)}),[],!1,null,null,null);n.default=component.exports}}]);