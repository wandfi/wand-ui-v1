"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4584],{85859:function(e,t,n){n.d(t,{Ry:function(){return hideOthers}});var r=new WeakMap,o=new WeakMap,a={},c=0,unwrapHost=function(e){return e&&(e.host||unwrapHost(e.parentNode))},applyAttributeToOthers=function(e,t,n,u){var i=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=unwrapHost(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var l=a[n],d=[],s=new Set,f=new Set(i),keep=function(e){!e||s.has(e)||(s.add(e),keep(e.parentNode))};i.forEach(keep);var deep=function(e){!e||f.has(e)||Array.prototype.forEach.call(e.children,function(e){if(s.has(e))deep(e);else{var t=e.getAttribute(u),a=null!==t&&"false"!==t,c=(r.get(e)||0)+1,i=(l.get(e)||0)+1;r.set(e,c),l.set(e,i),d.push(e),1===c&&a&&o.set(e,!0),1===i&&e.setAttribute(n,"true"),a||e.setAttribute(u,"true")}})};return deep(t),s.clear(),c++,function(){d.forEach(function(e){var t=r.get(e)-1,a=l.get(e)-1;r.set(e,t),l.set(e,a),t||(o.has(e)||e.removeAttribute(u),o.delete(e)),a||e.removeAttribute(n)}),--c||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},hideOthers=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),applyAttributeToOthers(r,o,n,"aria-hidden")):function(){return null}}},75649:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(50044),o=n(2265),a="right-scroll-bar-position",c="width-before-scroll-bar",u=n(55835),i=(0,n(18427)._)(),nothing=function(){},l=o.forwardRef(function(e,t){var n=o.useRef(null),a=o.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),c=a[0],l=a[1],d=e.forwardProps,s=e.children,f=e.className,v=e.removeScrollBar,p=e.enabled,m=e.shards,h=e.sideCar,g=e.noIsolation,b=e.inert,$=e.allowPinchZoom,w=e.as,E=void 0===w?"div":w,y=(0,r.__rest)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),S=(0,u.q)([n,t]),C=(0,r.__assign)((0,r.__assign)({},y),c);return o.createElement(o.Fragment,null,p&&o.createElement(h,{sideCar:i,removeScrollBar:v,shards:m,noIsolation:g,inert:b,setCallbacks:l,allowPinchZoom:!!$,lockRef:n}),d?o.cloneElement(o.Children.only(s),(0,r.__assign)((0,r.__assign)({},C),{ref:S})):o.createElement(E,(0,r.__assign)({},C,{className:f,ref:S}),s))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:c,zeroRight:a};var d=n(26898),s=n(98662),f={left:0,top:0,right:0,gap:0},parse=function(e){return parseInt(e||"",10)||0},getOffset=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[parse(n),parse(r),parse(o)]},getGapWidth=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return f;var t=getOffset(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},v=(0,s.Ws)(),getStyles=function(e,t,n,r){var o=e.left,u=e.top,i=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(a," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(c," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(a," .").concat(a," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(c," .").concat(c," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},RemoveScrollBar=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=void 0===r?"margin":r,c=o.useMemo(function(){return getGapWidth(a)},[a]);return o.createElement(v,{styles:getStyles(c,!t,a,n?"":"!important")})},p=!1;if("undefined"!=typeof window)try{var m=Object.defineProperty({},"passive",{get:function(){return p=!0,!0}});window.addEventListener("test",m,m),window.removeEventListener("test",m,m)}catch(e){p=!1}var h=!!p&&{passive:!1},elementCanBeScrolled=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},locationCouldBeScrolled=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),elementCouldBeScrolled(e,n)){var r=getScrollVariables(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},elementCouldBeScrolled=function(e,t){return"v"===e?elementCanBeScrolled(t,"overflowY"):elementCanBeScrolled(t,"overflowX")},getScrollVariables=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},handleScroll=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=c*r,i=n.target,l=t.contains(i),d=!1,s=u>0,f=0,v=0;do{var p=getScrollVariables(e,i),m=p[0],h=p[1]-p[2]-c*m;(m||h)&&elementCouldBeScrolled(e,i)&&(f+=h,v+=m),i=i.parentNode}while(!l&&i!==document.body||l&&(t.contains(i)||t===i));return s&&(o&&0===f||!o&&u>f)?d=!0:!s&&(o&&0===v||!o&&-u>v)&&(d=!0),d},getTouchXY=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(e){return[e.deltaX,e.deltaY]},extractRef=function(e){return e&&"current"in e?e.current:e},g=0,b=[],$=(0,d.L)(i,function(e){var t=o.useRef([]),n=o.useRef([0,0]),a=o.useRef(),c=o.useState(g++)[0],u=o.useState(function(){return(0,s.Ws)()})[0],i=o.useRef(e);o.useEffect(function(){i.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var t=(0,r.__spreadArray)([e.lockRef.current],(e.shards||[]).map(extractRef),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var l=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var r,o=getTouchXY(e),c=n.current,u="deltaX"in e?e.deltaX:c[0]-o[0],l="deltaY"in e?e.deltaY:c[1]-o[1],d=e.target,s=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=locationCouldBeScrolled(s,d);if(!f)return!0;if(f?r=s:(r="v"===s?"h":"v",f=locationCouldBeScrolled(s,d)),!f)return!1;if(!a.current&&"changedTouches"in e&&(u||l)&&(a.current=r),!r)return!0;var v=a.current||r;return handleScroll(v,t,e,"h"===v?u:l,!0)},[]),d=o.useCallback(function(e){if(b.length&&b[b.length-1]===u){var n="deltaY"in e?getDeltaXY(e):getTouchXY(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(extractRef).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),f=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),v=o.useCallback(function(e){n.current=getTouchXY(e),a.current=void 0},[]),p=o.useCallback(function(t){f(t.type,getDeltaXY(t),t.target,l(t,e.lockRef.current))},[]),m=o.useCallback(function(t){f(t.type,getTouchXY(t),t.target,l(t,e.lockRef.current))},[]);o.useEffect(function(){return b.push(u),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:m}),document.addEventListener("wheel",d,h),document.addEventListener("touchmove",d,h),document.addEventListener("touchstart",v,h),function(){b=b.filter(function(e){return e!==u}),document.removeEventListener("wheel",d,h),document.removeEventListener("touchmove",d,h),document.removeEventListener("touchstart",v,h)}},[]);var $=e.removeScrollBar,w=e.inert;return o.createElement(o.Fragment,null,w?o.createElement(u,{styles:"\n  .block-interactivity-".concat(c," {pointer-events: none;}\n  .allow-interactivity-").concat(c," {pointer-events: all;}\n")}):null,$?o.createElement(RemoveScrollBar,{gapMode:"margin"}):null)}),w=o.forwardRef(function(e,t){return o.createElement(l,(0,r.__assign)({},e,{ref:t,sideCar:$}))});w.classNames=l.classNames;var E=w},27733:function(e,t,n){n.d(t,{B:function(){return $e02a7d9cb1dc128c$export$c74125a8e3af6bb2}});var r=n(2265),o=n(56989),a=n(42210),c=n(67256);function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(e){let t=e+"CollectionProvider",[n,u]=(0,o.b)(t),[i,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e+"CollectionSlot",s=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,u=l(d,n),i=(0,a.e)(t,u.collectionRef);return r.createElement(c.g7,{ref:i},o)}),f=e+"CollectionItemSlot",v="data-radix-collection-item",p=r.forwardRef((e,t)=>{let{scope:n,children:o,...u}=e,i=r.useRef(null),d=(0,a.e)(t,i),s=l(f,n);return r.useEffect(()=>(s.itemMap.set(i,{ref:i,...u}),()=>void s.itemMap.delete(i))),r.createElement(c.g7,{[v]:"",ref:d},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),a=r.useRef(new Map).current;return r.createElement(i,{scope:t,itemMap:a,collectionRef:o},n)},Slot:s,ItemSlot:p},function(t){let n=l(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${v}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},u]}},65400:function(e,t,n){n.d(t,{gm:function(){return $f631663db3294ace$export$b39126d51d94e6f3}});var r=n(2265);let o=(0,r.createContext)(void 0);function $f631663db3294ace$export$b39126d51d94e6f3(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},31244:function(e,t,n){n.d(t,{EW:function(){return $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c}});var r=n(2265);let o=0;function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:$3db38b7d1fb3fe6a$var$createFocusGuard()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:$3db38b7d1fb3fe6a$var$createFocusGuard()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function $3db38b7d1fb3fe6a$var$createFocusGuard(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},52759:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(13428),a=n(2265),c=n(42210),u=n(9381),i=n(16459);let l="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},f=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:p,...m}=e,[h,g]=(0,a.useState)(null),b=(0,i.W)(f),$=(0,i.W)(p),w=(0,a.useRef)(null),E=(0,c.e)(t,e=>g(e)),y=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(r){function handleFocusIn(e){if(y.paused||!h)return;let t=e.target;h.contains(t)?w.current=t:$d3863c46a17e8a28$var$focus(w.current,{select:!0})}function handleFocusOut(e){if(y.paused||!h)return;let t=e.relatedTarget;null===t||h.contains(t)||$d3863c46a17e8a28$var$focus(w.current,{select:!0})}document.addEventListener("focusin",handleFocusIn),document.addEventListener("focusout",handleFocusOut);let e=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=h&&h.contains(t))&&$d3863c46a17e8a28$var$focus(h)});return h&&e.observe(h,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",handleFocusIn),document.removeEventListener("focusout",handleFocusOut),e.disconnect()}}},[r,h,y.paused]),(0,a.useEffect)(()=>{if(h){v.add(y);let e=document.activeElement,t=h.contains(e);if(!t){let t=new CustomEvent(l,s);h.addEventListener(l,b),h.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if($d3863c46a17e8a28$var$focus(r,{select:t}),document.activeElement!==n)return}($d3863c46a17e8a28$var$getTabbableCandidates(h).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&$d3863c46a17e8a28$var$focus(h))}return()=>{h.removeEventListener(l,b),setTimeout(()=>{let t=new CustomEvent(d,s);h.addEventListener(d,$),h.dispatchEvent(t),t.defaultPrevented||$d3863c46a17e8a28$var$focus(null!=e?e:document.body,{select:!0}),h.removeEventListener(d,$),v.remove(y)},0)}}},[h,b,$,y]);let S=(0,a.useCallback)(e=>{if(!n&&!r||y.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=$d3863c46a17e8a28$var$getTabbableCandidates(e),n=$d3863c46a17e8a28$var$findVisible(t,e),r=$d3863c46a17e8a28$var$findVisible(t.reverse(),e);return[n,r]}(t),c=r&&a;c?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&$d3863c46a17e8a28$var$focus(a,{select:!0})):(e.preventDefault(),n&&$d3863c46a17e8a28$var$focus(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,y.paused]);return(0,a.createElement)(u.WV.div,(0,o.Z)({tabIndex:-1},m,{ref:E,onKeyDown:S}))});function $d3863c46a17e8a28$var$getTabbableCandidates(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function $d3863c46a17e8a28$var$findVisible(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function $d3863c46a17e8a28$var$focus(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let v=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=$d3863c46a17e8a28$var$arrayRemove(r,e)).unshift(e)},remove(e){var t;null===(t=(r=$d3863c46a17e8a28$var$arrayRemove(r,e))[0])||void 0===t||t.resume()}});function $d3863c46a17e8a28$var$arrayRemove(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},44356:function(e,t,n){n.d(t,{Pc:function(){return E},ck:function(){return k},fC:function(){return F}});var r=n(13428),o=n(2265),a=n(85744),c=n(27733),u=n(42210),i=n(56989),l=n(20966),d=n(9381),s=n(16459),f=n(73763),v=n(65400);let p="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},h="RovingFocusGroup",[g,b,$]=(0,c.B)(h),[w,E]=(0,i.b)(h,[$]),[y,S]=w(h),C=(0,o.forwardRef)((e,t)=>(0,o.createElement)(g.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(g.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(R,(0,r.Z)({},e,{ref:t}))))),R=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:c,loop:i=!1,dir:l,currentTabStopId:h,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:$,onEntryFocus:w,...E}=e,S=(0,o.useRef)(null),C=(0,u.e)(t,S),R=(0,v.gm)(l),[T=null,A]=(0,f.T)({prop:h,defaultProp:g,onChange:$}),[F,k]=(0,o.useState)(!1),x=(0,s.W)(w),I=b(n),M=(0,o.useRef)(!1),[L,_]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=S.current;if(e)return e.addEventListener(p,x),()=>e.removeEventListener(p,x)},[x]),(0,o.createElement)(y,{scope:n,orientation:c,dir:R,loop:i,currentTabStopId:T,onItemFocus:(0,o.useCallback)(e=>A(e),[A]),onItemShiftTab:(0,o.useCallback)(()=>k(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>_(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>_(e=>e-1),[])},(0,o.createElement)(d.WV.div,(0,r.Z)({tabIndex:F||0===L?-1:0,"data-orientation":c},E,{ref:C,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{M.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!M.current;if(e.target===e.currentTarget&&t&&!F){let t=new CustomEvent(p,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=I().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===T),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);$d7bdfb9eb0fdf311$var$focusFirst(o)}}M.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>k(!1))})))}),T=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:c=!0,active:u=!1,tabStopId:i,...s}=e,f=(0,l.M)(),v=i||f,p=S("RovingFocusGroupItem",n),m=p.currentTabStopId===v,h=b(n),{onFocusableItemAdd:$,onFocusableItemRemove:w}=p;return(0,o.useEffect)(()=>{if(c)return $(),()=>w()},[c,$,w]),(0,o.createElement)(g.ItemSlot,{scope:n,id:v,focusable:c,active:u},(0,o.createElement)(d.WV.span,(0,r.Z)({tabIndex:m?0:-1,"data-orientation":p.orientation},s,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{c?p.onItemFocus(v):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>p.onItemFocus(v)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return A[o]}(e,p.orientation,p.dir);if(void 0!==t){e.preventDefault();let o=h().filter(e=>e.focusable),a=o.map(e=>e.ref.current);if("last"===t)a.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&a.reverse();let o=a.indexOf(e.currentTarget);a=p.loop?(n=a,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):a.slice(o+1)}setTimeout(()=>$d7bdfb9eb0fdf311$var$focusFirst(a))}})})))}),A={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function $d7bdfb9eb0fdf311$var$focusFirst(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let F=C,k=T}}]);