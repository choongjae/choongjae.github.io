(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[7],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,n){var r=n(9489),o=n(7067);function i(t,n,l){return o()?(e.exports=i=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),l=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return r.createElement(s,l({attr:l({},e.attr)},t),c(e.child))}}function s(e){var t=function(t){var n,o=e.attr,i=e.size,c=e.title,u=a(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},2450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=p;var r=a(n(7294)),o=n(5444),i=a(n(5697)),l=n(9650);function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){var t=e.to,n=e.title,i=e.children,a=e.className,c=e.stripHash,s=void 0!==c&&c,p=e.gatsbyLinkProps,f=void 0===p?{}:p,d=e.onAnchorLinkClick,m=s?l.handleStrippedLinkClick:l.handleLinkClick,x=u(u({},f),{},{to:s?(0,l.stripHashedLocation)(t):t,onClick:function(e){return m(t,e,d)}});return n&&(x.title=n),a&&(x.className=a),r.default.createElement(o.Link,x,i||n)}p.propTypes={to:i.default.string.isRequired,title:i.default.string,className:i.default.string,stripHash:i.default.bool,gatsbyLinkProps:i.default.object,onAnchorLinkClick:i.default.func,children:i.default.node}},9869:function(e,t,n){"use strict";Object.defineProperty(t,"P",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n(2450)},6725:function(e,t,n){var r=n(3395);e.exports={MDXRenderer:r}},3395:function(e,t,n){var r=n(9100),o=n(319),i=n(9713),l=n(7316),a=["scope","children"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n(7294),p=n(4983).mdx,f=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=l(e,a),c=f(t),d=s.useMemo((function(){if(!n)return null;var e=u({React:s,mdx:p},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,t]);return s.createElement(d,u({},i))}},7690:function(e,t,n){"use strict";var r=n(7294),o=n(5444),i=n(4496),l=n(9692);t.Z=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(i.Z,null),r.createElement(a,null,r.createElement(c,{to:"/"},"🏠"),r.createElement(c,{to:"/blog"},"📖")),r.createElement(u,null,t))};var a=l.default.div.withConfig({displayName:"BlogLayout__BlogHome",componentId:"sc-9ym179-0"})(["width:200px;margin:40px auto -60px auto;display:flex;flex-direction:row;justify-content:space-evenly;"]),c=(0,l.default)(o.Link).withConfig({displayName:"BlogLayout__BlogLink",componentId:"sc-9ym179-1"})(["display:block;text-align:center;font-size:50px;margin:0 10px 0 10px;border-radius:20px;padding:0 10px 0 10px;:hover{background:#fcd8a9;}"]),u=l.default.div.withConfig({displayName:"BlogLayout__BlogContainer",componentId:"sc-9ym179-2"})(["width:680px;margin:75px auto 75px auto;background:#ffe2bd;border-radius:20px;margin-top:75px;"])},4496:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(9692).createGlobalStyle)(["*{font-family:'EB Garamond';margin:0;padding:0;min-height:0vw;"," body{background:#FFF0DB}h1{font-size:80px}h2{font-size:64px}h3{font-size:44px}h4{font-size:32px}p{font-size:20px}a{text-decoration:none}}"],"")},7198:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),o=n(9692),i=n(3201),l=n(9869),a=[{title:"about",link:"/#about"},{title:"experience",link:"/#experience"},{title:"projects",link:"/#projects"},{title:"blog",link:"/#blog"}],c=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],o=(0,r.useRef)(!0);return(0,r.useEffect)((function(){var e=function(){window.scrollY>t&&o.current&&(o.current=!1),(window.scrollY<t&&!o.current||window.scrollY<50)&&(o.current=!0),n(window.scrollY)};return window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[t]),r.createElement(u,{show:o.current},r.createElement(s,null,a.map((function(e,t){return r.createElement(p,{to:e.link,key:t},e.title)}))))},u=o.default.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9eu2yh-0"})(["height:75px;display:flex;justify-content:space-between;z-index:999;background:transparent;position:fixed;top:0;left:0;right:0;margin-top:",";transition:margin-top 0.5s;"],(function(e){return e.show?"0px":"-75px"})),s=((0,o.default)(i.Fm7).withConfig({displayName:"Header__Bars",componentId:"sc-9eu2yh-1"})(["display:none;@media screen and (max-width:768px){display:block;position:absolute;top:0;right:0;transform:translate(-100%,100%);font-size:1.8rem;cursor:pointer;}"]),o.default.div.withConfig({displayName:"Header__NavMenu",componentId:"sc-9eu2yh-2"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;background:transparent;height:100%;width:100%;",""],"")),p=(0,o.default)(l.P).withConfig({displayName:"Header__NavLink",componentId:"sc-9eu2yh-3"})(["display:flex;align-items:center;text-decoration:none;padding:0 1rem;height:100%;cursor:pointer;text-align:center;font-size:24px;color:black;background:rgba(255,229,194,0.5);&:first-child{border-radius:0 0 0 25px;}&:last-child{border-radius:0 0 25px 0;}"]),f=n(4496),d=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(c,null),r.createElement(f.Z,null),r.createElement("main",null,t))}},223:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(5444),i=(n(6725),n(7198),n(4496),n(9692)),l=n(7690);t.default=function(e){var t=e.data;return r.createElement(l.Z,null,r.createElement(a,null,"blog"),r.createElement(c,null,r.createElement(u,null)),r.createElement(s,null,t.allMdx.nodes.map((function(e){return r.createElement(p,{to:"/blog/"+e.slug},r.createElement(f,{key:e.id},r.createElement(d,null,e.frontmatter.emoji),r.createElement(m,null,r.createElement(x,null,e.frontmatter.title),r.createElement("p",null,e.frontmatter.date))))}))))};var a=i.default.h1.withConfig({displayName:"blog__BlogHeader",componentId:"sc-15xlt4x-0"})(["text-align:center;"]),c=i.default.form.withConfig({displayName:"blog__BlogForm",componentId:"sc-15xlt4x-1"})([""]),u=i.default.input.withConfig({displayName:"blog__BlogSearch",componentId:"sc-15xlt4x-2"})([""," display:none;margin:25px auto 25px auto;width:400px;"],""),s=i.default.div.withConfig({displayName:"blog__BlogArticles",componentId:"sc-15xlt4x-3"})([""," background:#ffe2bd;border-radius:20px;"],""),p=(0,i.default)(o.Link).withConfig({displayName:"blog__BlogLink",componentId:"sc-15xlt4x-4"})(["color:inherit;"]),f=i.default.article.withConfig({displayName:"blog__BlogArticle",componentId:"sc-15xlt4x-5"})(["display:flex;flex-direction:row;align-items:center;height:100px;border-radius:20px;:hover{background:#fcd8a9;}"]),d=i.default.div.withConfig({displayName:"blog__BlogEmoji",componentId:"sc-15xlt4x-6"})(["margin:25px;font-size:30px;"]),m=i.default.div.withConfig({displayName:"blog__BlogCard",componentId:"sc-15xlt4x-7"})([""]),x=i.default.h4.withConfig({displayName:"blog__BlogArticleHeader",componentId:"sc-15xlt4x-8"})([""])}}]);
//# sourceMappingURL=component---src-pages-blog-js-4f2b35fb8ede3ff58cc1.js.map