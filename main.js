(()=>{"use strict";var r={27:(r,n,e)=>{e.d(n,{Z:()=>a});var t=e(645),i=e.n(t)()((function(r){return r[1]}));i.push([r.id,".page__wrapper__center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.contacts__header {\r\n  margin-bottom: 0.5rem;\r\n}\r\n.contacts__email {\r\n  font-weight: 400;\r\n}\r\n\r\n.contacts__link svg {\r\n  width: 48px;\r\n  height: 48px;\r\n  margin: 5rem 0;\r\n}\r\n\r\n.contacts__link {\r\n  text-decoration: none;\r\n}\r\n",""]);const a=i},650:(r,n,e)=>{e.d(n,{Z:()=>a});var t=e(645),i=e.n(t)()((function(r){return r[1]}));i.push([r.id,'.post__expander {\r\n  width: 100%;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem 1.5rem;\r\n  background-color: white;\r\n  border: none;\r\n  border-bottom: 1px solid #ddd;\r\n  text-transform: lowercase;\r\n  font-weight: 300;\r\n}\r\n\r\n.post__content {\r\n  text-align: justify;\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.5s ease-out;\r\n  padding: 1rem 10rem;\r\n  line-height: 150%;\r\n}\r\n\r\n.active {\r\n  background-color: #ddd;\r\n}\r\n\r\n.active span,\r\n.active span::after {\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.post__expander > span,\r\n.post__expander > span::after {\r\n  /* top: 10px; */\r\n  position: relative;\r\n  display: block;\r\n  width: 25px;\r\n  height: 4px;\r\n  background-color: gray;\r\n  transition-duration: 500ms;\r\n}\r\n\r\n.post__expander > span::after {\r\n  top: 0;\r\n  transform: rotate(90deg);\r\n  content: "";\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .post__content {\r\n    padding: 0 1rem;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .post__content {\r\n    padding: 0 3rem;\r\n  }\r\n}\r\n',""]);const a=i},264:(r,n,e)=>{e.d(n,{Z:()=>h});var t=e(645),i=e.n(t),a=e(667),o=e.n(a),s=e(376),l=e(417),c=e(361),p=i()((function(r){return r[1]})),d=o()(s.Z),f=o()(l.Z),u=o()(c.Z);p.push([r.id,'*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  font-family: "Open Sans", "Roboto", Arial, sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n.intro-page {\r\n  height: 100vh;\r\n  background-size: 100% auto;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% auto;\r\n}\r\n\r\n.intro-page__container {\r\n  font-family: "Roboto", Arial, sans-serif;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: aliceblue;\r\n}\r\n\r\n.intro-page__preheader {\r\n  font-size: 1.5rem;\r\n  letter-spacing: 0.5px;\r\n  text-transform: uppercase;\r\n  font-weight: 300;\r\n}\r\n\r\n.intro-page__header {\r\n  text-align: center;\r\n  margin: 5% 0 0 0;\r\n  /* letter-spacing: 3px; */\r\n  font-size: 5rem;\r\n}\r\n\r\n.intro-page__nav {\r\n  position: absolute;\r\n  bottom: 0;\r\n  text-decoration: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  transition-timing-function: linear;\r\n}\r\n.intro-page__nav::after,\r\n.intro-page__nav::before {\r\n  position: absolute;\r\n  display: block;\r\n  width: 30px;\r\n  height: 3px;\r\n  top: 20px;\r\n  background-color: aliceblue;\r\n  content: "";\r\n  border-radius: 10%;\r\n}\r\n\r\n.intro-page__nav::before {\r\n  transform: rotate(-45deg);\r\n  left: 20px;\r\n}\r\n\r\n.intro-page__nav::after {\r\n  right: 20px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n@media (min-width: 420px) and (max-width: 1200px) {\r\n  .intro-page {\r\n    background-image: url('+d+");\r\n    background-size: auto 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n  .intro-page {\r\n    background-image: url("+f+");\r\n    background-size: auto 100%;\r\n  }\r\n  .intro-page__header {\r\n    font-size: 4rem;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .intro-page {\r\n    background-image: url("+u+");\r\n  }\r\n}\r\n",""]);const h=p},69:(r,n,e)=>{e.d(n,{Z:()=>a});var t=e(645),i=e.n(t)()((function(r){return r[1]}));i.push([r.id,".list {\r\n  padding: 2rem;\r\n}\r\n\r\n.page__p {\r\n  padding: 0 2rem;\r\n}\r\n\r\n.list__item {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  align-items: flex-start;\r\n  margin-bottom: 2rem;\r\n}\r\n.list__item__icon {\r\n  width: 70px;\r\n  height: 70px;\r\n}\r\n.list__item__content {\r\n  margin-left: 2rem;\r\n  text-align: start;\r\n}\r\n\r\n.list__item__header {\r\n  margin-bottom: 0rem;\r\n}\r\n\r\n.list__item__desc {\r\n  margin-top: 1rem;\r\n  text-align: justify;\r\n}\r\n",""]);const a=i},2:(r,n,e)=>{e.d(n,{Z:()=>a});var t=e(645),i=e.n(t)()((function(r){return r[1]}));i.push([r.id,".page {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.page_vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.half {\r\n  min-height: 50vh;\r\n}\r\n\r\n.page__wrapper {\r\n  width: 60%;\r\n  text-align: center;\r\n}\r\n\r\n.page__header {\r\n  text-transform: uppercase;\r\n  margin: 2rem 0;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .page__wrapper {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.page__wrapper_fixed {\r\n  width: 100vh;\r\n}\r\n",""]);const a=i},159:(r,n,e)=>{e.d(n,{Z:()=>a});var t=e(645),i=e.n(t)()((function(r){return r[1]}));i.push([r.id,".profile-page {\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.profile-page__image-container {\r\n  flex: 0 0 40%;\r\n  margin: 5%;\r\n  display: flex;\r\n  align-items: center;\r\n  /* justify-content: space-around; */\r\n  overflow: hidden;\r\n  height: 50%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.profile-page__image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.profile-page__info {\r\n  padding: 10%;\r\n  text-align: center;\r\n}\r\n.profile-page__info h1 {\r\n  margin-bottom: 10px;\r\n  text-transform: uppercase;\r\n}\r\n.profile-page h2 {\r\n  text-transform: lowercase;\r\n  color: grey;\r\n  font-weight: 300;\r\n  font-size: 1rem;\r\n}\r\n.profile-page__info p {\r\n  max-width: 400px;\r\n  font-size: 1.3rem;\r\n}\r\n.profile-page__info span {\r\n  margin: 1rem auto;\r\n  display: block;\r\n  width: 50px;\r\n  height: 2px;\r\n  background-color: #ccc;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .profile-page {\r\n    flex-flow: column nowrap;\r\n    justify-content: space-around;\r\n  }\r\n}\r\n",""]);const a=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var i={};if(t)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<r.length;s++){var l=[].concat(r[s]);t&&i[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),"string"!=typeof(r=r&&r.__esModule?r.default:r)?r:(/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r)}},376:(r,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"images/photo-mid.jpeg"},417:(r,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"images/photo-small.jpeg"},361:(r,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"images/photo.jpg"},695:r=>{var n={};r.exports=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},o=[],s=0;s<r.length;s++){var l=r[s],c=t.base?l[0]+t.base:l[0],p=a[c]||0,d="".concat(c," ").concat(p);a[c]=p+1;var f=e(d),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(n[f].references++,n[f].updater(u)):n.push({identifier:d,updater:i(u,t),references:1}),o.push(d)}return o}function i(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;e.update(r=n)}else e.remove()}}r.exports=function(r,i){var a=t(r=r||[],i=i||{});return function(r){r=r||[];for(var o=0;o<a.length;o++){var s=e(a[o]);n[s].references--}for(var l=t(r,i),c=0;c<a.length;c++){var p=e(a[c]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=l}}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n),n}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t=e.css,i=e.media,a=e.sourceMap;i?r.setAttribute("media",i):r.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}}},n={};function e(t){var i=n[t];if(void 0!==i)return i.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),(()=>{var r=e(379),n=e.n(r),t=e(795),i=e.n(t),a=e(695),o=e.n(a),s=e(216),l=e.n(s),c=e(27),p={styleTagTransform:function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}},setAttributes:function(r){var n=e.nc;n&&r.setAttribute("nonce",n)},insert:function(r){var n=o()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}};p.domAPI=i(),p.insertStyleElement=l(),n()(c.Z,p),c.Z&&c.Z.locals&&c.Z.locals;var d=e(650),f={styleTagTransform:function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}},setAttributes:function(r){var n=e.nc;n&&r.setAttribute("nonce",n)},insert:function(r){var n=o()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}};f.domAPI=i(),f.insertStyleElement=l(),n()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals;var u=e(264),h={styleTagTransform:function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}},setAttributes:function(r){var n=e.nc;n&&r.setAttribute("nonce",n)},insert:function(r){var n=o()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}};h.domAPI=i(),h.insertStyleElement=l(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var m=e(69),g={styleTagTransform:function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}},setAttributes:function(r){var n=e.nc;n&&r.setAttribute("nonce",n)},insert:function(r){var n=o()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}};g.domAPI=i(),g.insertStyleElement=l(),n()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var x=e(2),v={styleTagTransform:function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}},setAttributes:function(r){var n=e.nc;n&&r.setAttribute("nonce",n)},insert:function(r){var n=o()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}};v.domAPI=i(),v.insertStyleElement=l(),n()(x.Z,v),x.Z&&x.Z.locals&&x.Z.locals;var _=e(159),b={styleTagTransform:function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}},setAttributes:function(r){var n=e.nc;n&&r.setAttribute("nonce",n)},insert:function(r){var n=o()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}};b.domAPI=i(),b.insertStyleElement=l(),n()(_.Z,b),_.Z&&_.Z.locals&&_.Z.locals,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;let y=document.querySelector(".intro-page__nav");y.style.transitionDuration="1500ms",setInterval((()=>{y.style.bottom=""===y.style.bottom?"5px":""}),1500);let w=document.getElementsByClassName("post");for(let r of w){let n=r.querySelector(".post__expander"),e=r.querySelector(".post__content");r.querySelector(".post__expander span,.post__expander span:after"),"BUTTON"===n.tagName&&n.addEventListener("click",(function(r){this.classList.toggle("active"),e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}})()})();