(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[637],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,n){var r=n(9489),o=n(7067);function a(t,n,l){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),l=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},6725:function(e,t,n){var r=n(3395);e.exports={MDXRenderer:r}},3395:function(e,t,n){var r=n(9100),o=n(319),a=n(9713),l=n(7316),p=["scope","children"];function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=n(7294),s=n(4983).mdx,f=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=l(e,p),i=f(t),d=c.useMemo((function(){if(!n)return null;var e=u({React:c,mdx:s},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return c.createElement(d,u({},a))}},7690:function(e,t,n){"use strict";var r=n(7294),o=n(4496),a=n(9692);t.Z=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(o.Z,null),r.createElement(l,null,t))};var l=a.default.div.withConfig({displayName:"BlogLayout__BlogContainer",componentId:"sc-9ym179-0"})(["width:680px;margin:auto;background:#ffe2bd;border-radius:20px;margin-top:75px;"])},4496:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(9692).createGlobalStyle)(["*{font-family:'EB Garamond';margin:0;padding:0;min-height:0vw;"," body{background:#FFF0DB}h1{font-size:100px}h2{font-size:64px}h3{font-size:44px}h4{font-size:32px}p{font-size:20px}a{text-decoration:none}}"],"")},8357:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(6725),a=n(9692),l=n(7690);t.default=function(e){var t=e.data;return r.createElement(l.Z,null,r.createElement(p,null,r.createElement(i,null,t.mdx.frontmatter.title),r.createElement(u,null,r.createElement(c,null,t.mdx.frontmatter.date),r.createElement(d,null,"·"),r.createElement(s,null,t.mdx.frontmatter.tags.map((function(e){return r.createElement(f,{key:e},e)}))))),r.createElement(m,null,r.createElement(x,null,t.mdx.body)))};var p=a.default.div.withConfig({displayName:"blog-template__BlogHeader",componentId:"sc-14htkpw-0"})([""]),i=a.default.h1.withConfig({displayName:"blog-template__BlogTitle",componentId:"sc-14htkpw-1"})(["font-size:64px;text-align:center;"]),u=a.default.div.withConfig({displayName:"blog-template__BlogDetails",componentId:"sc-14htkpw-2"})(["display:flex;flex-direction:row;justify-content:center;margin:15px;"]),c=a.default.p.withConfig({displayName:"blog-template__BlogDate",componentId:"sc-14htkpw-3"})(['padding:0 5px 0 5px;margin-right:10px;font-family:"Fira Code",monospace;font-size:18px;background:#fcd8a9;border-radius:5px;']),s=a.default.p.withConfig({displayName:"blog-template__BlogTags",componentId:"sc-14htkpw-4"})(["margin-left:10px;"]),f=a.default.span.withConfig({displayName:"blog-template__BlogTag",componentId:"sc-14htkpw-5"})(['padding:0 5px 0 5px;margin:0 10px 0 0;font-family:"Fira Code",monospace;'," background:#fcd8a9;border-radius:5px;"],""),d=a.default.span.withConfig({displayName:"blog-template__BlogDot",componentId:"sc-14htkpw-6"})(["",""],""),m=a.default.div.withConfig({displayName:"blog-template__BlogBody",componentId:"sc-14htkpw-7"})(["padding:0 25px 25px 25px;#parent *{margin-bottom:15px;}"]),x=(0,a.default)(o.MDXRenderer).withConfig({displayName:"blog-template__BlogContent",componentId:"sc-14htkpw-8"})(["> *{margin-bottom:15px;}p{margin-bottom:15px;}"])}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-dc34aaabdfd23b6afa66.js.map