"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[210],{2450:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=d;var r=l(n(7294)),i=n(5444),o=l(n(5697)),a=n(9650);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=e.to,n=e.title,o=e.children,l=e.className,c=e.stripHash,u=void 0!==c&&c,d=e.gatsbyLinkProps,f=void 0===d?{}:d,p=e.onAnchorLinkClick,g=u?a.handleStrippedLinkClick:a.handleLinkClick,h=s(s({},f),{},{to:u?(0,a.stripHashedLocation)(t):t,onClick:function(e){return g(t,e,p)}});return n&&(h.title=n),l&&(h.className=l),r.default.createElement(i.Link,h,o||n)}d.propTypes={to:o.default.string.isRequired,title:o.default.string,className:o.default.string,stripHash:o.default.bool,gatsbyLinkProps:o.default.object,onAnchorLinkClick:o.default.func,children:o.default.node}},9869:function(e,t,n){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n(2450)},1433:function(e,t,n){var r=(0,n(9692).createGlobalStyle)(["*{font-family:'EB Garamond';margin:0;padding:0;min-height:0vw;"," body{background:#FFF0DB}h1{font-size:80px}h2{font-size:64px}h3{font-size:44px}h4{font-size:32px}p{font-size:20px}a{text-decoration:none}li{font-size:20px}}"],"");t.Z=r},570:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),i=n(9692),o=n(9869),a=[{title:"about",link:"/#about"},{title:"experience",link:"/#experience"},{title:"projects",link:"/#projects"},{title:"blog",link:"/#blog"}],l=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],i=(0,r.useRef)(!0);return(0,r.useEffect)((function(){var e=function(){window.scrollY>t&&i.current&&(i.current=!1),(window.scrollY<t&&!i.current||window.scrollY<50)&&(i.current=!0),n(window.scrollY)};return window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[t]),r.createElement(c,{show:i.current},r.createElement(s,null,a.map((function(e,t){return r.createElement(u,{to:e.link,key:t},e.title)}))))},c=i.default.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9eu2yh-0"})(["height:75px;display:flex;justify-content:space-between;z-index:999;background:transparent;position:fixed;top:0;left:0;right:0;margin-top:",";transition:margin-top 0.5s;"],(function(e){return e.show?"0px":"-75px"})),s=i.default.div.withConfig({displayName:"Header__NavMenu",componentId:"sc-9eu2yh-1"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;background:transparent;height:100%;width:100%;"]),u=(0,i.default)(o.P).withConfig({displayName:"Header__NavLink",componentId:"sc-9eu2yh-2"})(["display:flex;align-items:center;text-decoration:none;padding:0 1rem;height:100%;cursor:pointer;text-align:center;font-size:24px;color:black;background:rgba(255,229,194,0.5);&:first-child{border-radius:0 0 0 25px;}&:last-child{border-radius:0 0 25px 0;}@media screen and (max-width:400px){font-size:16px;}"]),d=n(1433),f=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(l,null),r.createElement(d.Z,null),r.createElement("main",null,t))}},6909:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(7294),i=n(570),o=n.p+"static/ledge-dac7f043ab4e159d1f7dad17d2ece82e.jpg",a=function(){return r.createElement(i.Z,null,r.createElement("div",{style:{marginTop:"75px"}},r.createElement("h3",{style:{textAlign:"center"}},"Welcome to cjl.ee! Or is it?"),r.createElement("img",{style:{display:"block",height:"500px",width:"auto",margin:"0 auto 0 auto"},alt:"CJ standing on a ledge",src:o}),r.createElement("p",{style:{textAlign:"center"}},"yeah this is basically it")))}}}]);
//# sourceMappingURL=component---src-pages-secret-js-66602dca205c38ddab73.js.map