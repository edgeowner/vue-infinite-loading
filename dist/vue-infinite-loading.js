!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueInfiniteLoading=t():e.VueInfiniteLoading=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),r=i(o);t["default"]=r["default"],"undefined"!=typeof window&&window.Vue&&window.Vue.component("infinite-loading",r["default"])},function(e,t){"use strict";function n(e){return"BODY"===e.tagName?window:["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?e:n(e.parentNode)}function i(e){var t=e===window?window.innerHeight:parseInt(getComputedStyle(e).height,10),n=e===window?document.body.scrollHeight:e.scrollHeight,i=isNaN(e.scrollTop)?e.pageYOffset:e.scrollTop;return n-t-i}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{isLoading:!1,scrollParent:null,scrollHandler:null,isNoResults:!1,isNoMore:!1}},props:{distance:Number,onInfinite:Function},ready:function(){void 0===this.distance&&this.$set("distance",100),this.scrollParent=n(this.$el),this.scrollHandler=function(){var e=i(this.scrollParent);!this.isLoading&&e<=this.distance&&(this.isLoading=!0,this.onInfinite&&this.onInfinite.call())}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler)},events:{"$InfiniteLoading:loaded":function(){this.isLoading=!1},"$InfiniteLoading:noResults":function(){this.isLoading=!1,this.isNoMore=!1,this.isNoResults=!0,this.scrollParent.removeEventListener("scroll",this.scrollHandler)},"$InfiniteLoading:noMore":function(){this.isLoading=!1,this.isNoResults=!1,this.isNoMore=!0,this.scrollParent.removeEventListener("scroll",this.scrollHandler)},"$InfiniteLoading:reset":function(){this.isLoading=!1,this.isNoMore=!1,this.isNoResults=!1,this.scrollParent.addEventListener("scroll",this.scrollHandler),setTimeout(this.scrollHandler,1)}},destroyed:function(){this.isNoResults||this.isNoMore||this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".icon-loading[_v-34e13b62]{position:relative;border:1px solid #999}.icon-loading[_v-34e13b62]:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.infinite-loading-container[_v-34e13b62]{clear:both;text-align:center}.infinite-loading-container [class^=icon-][_v-34e13b62]{display:inline-block;margin:15px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%;-webkit-animation:ease loading 1.5s infinite;animation:ease loading 1.5s infinite}.infinite-status-tips[_v-34e13b62]{color:#666;font-size:14px;text-align:center;padding:10px 0}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports='<div class=infinite-loading-container _v-34e13b62=""> <i class=icon-loading v-show=isLoading _v-34e13b62=""></i> <div class=infinite-status-tips v-show="!isLoading &amp;&amp; isNoResults" _v-34e13b62=""> <slot name=no-results _v-34e13b62="">No results :(</slot> </div> <div class=infinite-status-tips v-show="!isLoading &amp;&amp; isNoMore" _v-34e13b62=""> <slot name=no-more _v-34e13b62="">No more data :)</slot> </div> </div>'},function(e,t,n){var i,o;n(7),i=n(1),o=n(4),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=f[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(l(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(l(i.parts[r],t));f[i.id]={id:i.id,refs:1,parts:s}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],s=o[1],a=o[2],l=o[3],d={css:s,media:a,sourceMap:l};n[r]?n[r].parts.push(d):t.push(n[r]={id:r,parts:[d]})}return t}function r(e,t){var n=h(),i=m[m.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e,t){var n,i,o;if(t.singleton){var r=g++;n=v||(v=a(t)),i=d.bind(null,n,r,!1),o=d.bind(null,n,r,!0)}else n=a(t),i=u.bind(null,n),o=function(){s(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function d(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function u(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=c(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return i(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var a=n[s],l=f[a.id];l.refs--,r.push(l)}if(e){var d=o(e);i(d,t)}for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete f[l.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.id,i,""]]);n(6)(i,{});i.locals&&(e.exports=i.locals)}])});