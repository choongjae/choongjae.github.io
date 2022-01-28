"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[883],{2450:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=d;var r=l(n(7294)),i=n(5444),o=l(n(5697)),a=n(9650);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=e.to,n=e.title,o=e.children,l=e.className,c=e.stripHash,s=void 0!==c&&c,d=e.gatsbyLinkProps,p=void 0===d?{}:d,f=e.onAnchorLinkClick,h=s?a.handleStrippedLinkClick:a.handleLinkClick,b=u(u({},p),{},{to:s?(0,a.stripHashedLocation)(t):t,onClick:function(e){return h(t,e,f)}});return n&&(b.title=n),l&&(b.className=l),r.default.createElement(i.Link,b,o||n)}d.propTypes={to:o.default.string.isRequired,title:o.default.string,className:o.default.string,stripHash:o.default.bool,gatsbyLinkProps:o.default.object,onAnchorLinkClick:o.default.func,children:o.default.node}},9869:function(e,t,n){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n(2450)},570:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),i=n(9692),o=n(9869),a=n(3476),l=[{title:"about",link:"/#about"},{title:"experience",link:"/#experience"},{title:"projects",link:"/#projects"},{title:"blog",link:"/#blog"}],c=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],i=(0,r.useRef)(!0);return(0,r.useEffect)((function(){var e=function(){window.scrollY>t&&i.current&&(i.current=!1),(window.scrollY<t&&!i.current||window.scrollY<50)&&(i.current=!0),n(window.scrollY)};return window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[t]),r.createElement(u,{show:i.current},r.createElement(s,null,l.map((function(e,t){return r.createElement(d,{to:e.link,key:t},e.title)}))),r.createElement(p,null))},u=i.default.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9eu2yh-0"})(["height:75px;display:flex;justify-content:space-between;z-index:999;background:var(--color-background);position:fixed;top:0;left:0;right:0;margin-top:",";transition:margin-top 0.5s;"],(function(e){return e.show?"0px":"-100px"})),s=i.default.div.withConfig({displayName:"Header__NavMenu",componentId:"sc-9eu2yh-1"})(["position:absolute;display:flex;flex-direction:row;justify-content:center;align-items:center;background:transparent;height:100%;width:100%;"]),d=(0,i.default)(o.P).withConfig({displayName:"Header__NavLink",componentId:"sc-9eu2yh-2"})(["display:flex;align-items:center;text-decoration:none;padding:0 1rem;height:100%;cursor:pointer;text-align:center;font-size:24px;color:var(--color-text);"," "," "," &:first-child{border-radius:0 0 0 25px;}&:last-child{border-radius:0 0 25px 0;}@media screen and (max-width:475px){font-size:18px;}"],"","",""),p=(0,i.default)(a.Z).withConfig({displayName:"Header__NavToggle",componentId:"sc-9eu2yh-3"})(["position:relative;top:30px;left:85%;overflow:visible !important;background:var(--color-background);border-radius:5px;@media screen and (max-width:475px){top:70px;left:47%;}"," ",""],"",""),f=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(c,null),r.createElement("main",null,t))}},9616:function(e,t,n){n.r(t);var r=n(7294),i=n(570),o=n(1633);t.default=function(){return r.createElement(i.Z,null,r.createElement(o.Z,{title:"404: Not found"}),r.createElement("h1",{style:{marginTop:"5vw",textAlign:"center"}},"404: Not Found"),r.createElement("p",{style:{textAlign:"center"}},"You just hit a route that doesn't exist... the sadness."),r.createElement("a",{style:{display:"block",textAlign:"center",fontSize:"20px"},href:"/"},"Return to the main page."))}}}]);
//# sourceMappingURL=component---src-pages-404-js-a10e4e44b7c8d6c152cb.js.map