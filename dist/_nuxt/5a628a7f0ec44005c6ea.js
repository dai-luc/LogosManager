(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{183:function(e,n,o){"use strict";o.r(n);o(57),o(58);var t={data:function(){return{title:"Let's Palindrome!",raw:"とほかみえみため",palindorome:""}},methods:{convertLogos:function(){var e=this,n=this.raw.replace(/\r\n|\r/g,"\n").split("\n");this.palindorome="",n.forEach((function(element){element+=element.split("").reverse().join(""),e.palindorome+=element+"\n"}))}}},r=o(20),l={components:{palindrome:Object(r.a)(t,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("section",[o("h2",[e._v(e._s(e.title))]),e._v(" "),o("div",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.raw,expression:"raw"}],attrs:{cols:"50",rows:"10"},domProps:{value:e.raw},on:{input:function(n){n.target.composing||(e.raw=n.target.value)}}})]),e._v(" "),o("div",[o("button",{on:{click:e.convertLogos}},[e._v("\n      変換\n    ")]),e._v(" "),o("p",[e._v("↓に回文が表示されます")])]),e._v(" "),o("div",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.palindorome,expression:"palindorome"}],attrs:{cols:"50",rows:"10",readonly:""},domProps:{value:e.palindorome},on:{input:function(n){n.target.composing||(e.palindorome=n.target.value)}}})])])}),[],!1,null,null,null).exports}},c=Object(r.a)(l,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"container"},[n("palindrome")],1)}),[],!1,null,null,null);n.default=c.exports}}]);