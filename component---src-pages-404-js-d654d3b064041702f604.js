"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[883],{2450:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=d;var r=l(n(7294)),i=n(5444),a=l(n(5697)),o=n(9650);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=e.to,n=e.title,a=e.children,l=e.className,c=e.stripHash,s=void 0!==c&&c,d=e.gatsbyLinkProps,p=void 0===d?{}:d,f=e.onAnchorLinkClick,h=s?o.handleStrippedLinkClick:o.handleLinkClick,b=u(u({},p),{},{to:s?(0,o.stripHashedLocation)(t):t,onClick:function(e){return h(t,e,f)}});return n&&(b.title=n),l&&(b.className=l),r.default.createElement(i.Link,b,a||n)}d.propTypes={to:a.default.string.isRequired,title:a.default.string,className:a.default.string,stripHash:a.default.bool,gatsbyLinkProps:a.default.object,onAnchorLinkClick:a.default.func,children:a.default.node}},9869:function(e,t,n){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n(2450)},570:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),i=n(9692),a=n(9869),o=n(3476),l=[{title:"about",link:"/#about"},{title:"experience",link:"/#experience"},{title:"projects",link:"/#projects"}],c=function(){return r.createElement(u,null,r.createElement(s,null,l.map((function(e,t){return r.createElement(d,{to:e.link,key:t},e.title)}))),r.createElement(p,null))},u=i.default.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9eu2yh-0"})([""," height:75px;display:flex;justify-content:space-between;z-index:999;background:var(--color-background);"," top:0;left:0;right:0;"," transition:margin-top 0.5s;"],"","",""),s=i.default.div.withConfig({displayName:"Header__NavMenu",componentId:"sc-9eu2yh-1"})([""," display:flex;flex-direction:row;justify-content:center;align-items:center;background:transparent;height:100%;width:100%;"],""),d=(0,i.default)(a.P).withConfig({displayName:"Header__NavLink",componentId:"sc-9eu2yh-2"})(["display:flex;align-items:center;text-decoration:none;padding:0 1rem;height:100%;cursor:pointer;text-align:center;font-size:24px;color:var(--color-text);&:first-child{border-radius:0 0 0 25px;}&:last-child{border-radius:0 0 25px 0;}@media screen and (max-width:475px){font-size:18px;}"]),p=(0,i.default)(o.Z).withConfig({displayName:"Header__NavToggle",componentId:"sc-9eu2yh-3"})(["position:relative;top:33px;left:-30px;overflow:visible !important;background:var(--color-background);border-radius:5px;"]),f=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(c,null),r.createElement("main",null,t))}},9616:function(e,t,n){n.r(t);var r=n(7294),i=n(570),a=n(1633);t.default=function(){return r.createElement(i.Z,null,r.createElement(a.Z,{title:"404: Not found"}),r.createElement("h1",{style:{marginTop:"5vw",textAlign:"center"}},"404: Not Found"),r.createElement("p",{style:{textAlign:"center"}},"You just hit a route that doesn't exist... the sadness."),r.createElement("a",{style:{display:"block",textAlign:"center",fontSize:"20px"},href:"/"},"Return to the main page."))}}}]);
//# sourceMappingURL=component---src-pages-404-js-d654d3b064041702f604.js.map