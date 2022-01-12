"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[210],{1046:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,i=e.attr,o=e.size,c=e.title,s=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},2450:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=d;var r=l(n(7294)),i=n(5444),o=l(n(5697)),a=n(9650);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=e.to,n=e.title,o=e.children,l=e.className,c=e.stripHash,u=void 0!==c&&c,d=e.gatsbyLinkProps,f=void 0===d?{}:d,p=e.onAnchorLinkClick,m=u?a.handleStrippedLinkClick:a.handleLinkClick,h=s(s({},f),{},{to:u?(0,a.stripHashedLocation)(t):t,onClick:function(e){return m(t,e,p)}});return n&&(h.title=n),l&&(h.className=l),r.default.createElement(i.Link,h,o||n)}d.propTypes={to:o.default.string.isRequired,title:o.default.string,className:o.default.string,stripHash:o.default.bool,gatsbyLinkProps:o.default.object,onAnchorLinkClick:o.default.func,children:o.default.node}},9869:function(e,t,n){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n(2450)},4496:function(e,t,n){n.d(t,{Z:function(){return r}});var r=(0,n(9692).createGlobalStyle)(["*{font-family:'EB Garamond';margin:0;padding:0;min-height:0vw;"," body{background:#FFF0DB}h1{font-size:80px}h2{font-size:64px}h3{font-size:44px}h4{font-size:32px}p{font-size:20px}a{text-decoration:none}}"],"")},7198:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),i=n(9692),o=n(3201),a=n(9869),l=[{title:"about",link:"/#about"},{title:"experience",link:"/#experience"},{title:"projects",link:"/#projects"},{title:"blog",link:"/#blog"}],c=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],i=(0,r.useRef)(!0);return(0,r.useEffect)((function(){var e=function(){window.scrollY>t&&i.current&&(i.current=!1),(window.scrollY<t&&!i.current||window.scrollY<50)&&(i.current=!0),n(window.scrollY)};return window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[t]),r.createElement(s,{show:i.current},r.createElement(u,null,l.map((function(e,t){return r.createElement(d,{to:e.link,key:t},e.title)}))))},s=i.default.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9eu2yh-0"})(["height:75px;display:flex;justify-content:space-between;z-index:999;background:transparent;position:fixed;top:0;left:0;right:0;margin-top:",";transition:margin-top 0.5s;"],(function(e){return e.show?"0px":"-75px"})),u=((0,i.default)(o.Fm7).withConfig({displayName:"Header__Bars",componentId:"sc-9eu2yh-1"})(["display:none;@media screen and (max-width:768px){display:block;position:absolute;top:0;right:0;transform:translate(-100%,100%);font-size:1.8rem;cursor:pointer;}"]),i.default.div.withConfig({displayName:"Header__NavMenu",componentId:"sc-9eu2yh-2"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;background:transparent;height:100%;width:100%;",""],"")),d=(0,i.default)(a.P).withConfig({displayName:"Header__NavLink",componentId:"sc-9eu2yh-3"})(["display:flex;align-items:center;text-decoration:none;padding:0 1rem;height:100%;cursor:pointer;text-align:center;font-size:24px;color:black;background:rgba(255,229,194,0.5);&:first-child{border-radius:0 0 0 25px;}&:last-child{border-radius:0 0 25px 0;}"]),f=n(4496),p=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(c,null),r.createElement(f.Z,null),r.createElement("main",null,t))}},6909:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(7294),i=n(7198),o=n.p+"static/ledge-dac7f043ab4e159d1f7dad17d2ece82e.jpg",a=function(){return r.createElement(i.Z,null,r.createElement("div",{style:{marginTop:"75px"}},r.createElement("h3",{style:{textAlign:"center"}},"Welcome to cjl.ee! Or is it?"),r.createElement("img",{style:{display:"block",height:"500px",width:"auto",margin:"0 auto 0 auto"},alt:"CJ standing on a ledge",src:o}),r.createElement("p",{style:{textAlign:"center"}},"yeah this is basically it")))}}}]);
//# sourceMappingURL=component---src-pages-secret-js-16e0171fca4c583b2012.js.map