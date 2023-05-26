(function(y,N){typeof exports=="object"&&typeof module<"u"?N(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],N):(y=typeof globalThis<"u"?globalThis:y||self,N(y.React,y.ReactDOM))})(this,function(y,N){"use strict";var q={exports:{}},F={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Pe(){if(ne)return F;ne=1;var u=y,c=Symbol.for("react.element"),v=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,b=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function I(_,h,C){var g,j={},k=null,V=null;C!==void 0&&(k=""+C),h.key!==void 0&&(k=""+h.key),h.ref!==void 0&&(V=h.ref);for(g in h)x.call(h,g)&&!B.hasOwnProperty(g)&&(j[g]=h[g]);if(_&&_.defaultProps)for(g in h=_.defaultProps,h)j[g]===void 0&&(j[g]=h[g]);return{$$typeof:c,type:_,key:k,ref:V,props:j,_owner:b.current}}return F.Fragment=v,F.jsx=I,F.jsxs=I,F}var L={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function Se(){return ae||(ae=1,{}.NODE_ENV!=="production"&&function(){var u=y,c=Symbol.for("react.element"),v=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),_=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),oe=Symbol.iterator,We="@@iterator";function Ye(e){if(e===null||typeof e!="object")return null;var r=oe&&e[oe]||e[We];return typeof r=="function"?r:null}var O=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function m(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];Be("error",e,n)}}function Be(e,r,n){{var a=O.ReactDebugCurrentFrame,s=a.getStackAddendum();s!==""&&(r+="%s",n=n.concat([s]));var l=n.map(function(i){return String(i)});l.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,l)}}var Ve=!1,Ue=!1,$e=!1,ze=!1,Je=!1,ie;ie=Symbol.for("react.module.reference");function Ge(e){return!!(typeof e=="string"||typeof e=="function"||e===x||e===B||Je||e===b||e===C||e===g||ze||e===V||Ve||Ue||$e||typeof e=="object"&&e!==null&&(e.$$typeof===k||e.$$typeof===j||e.$$typeof===I||e.$$typeof===_||e.$$typeof===h||e.$$typeof===ie||e.getModuleId!==void 0))}function qe(e,r,n){var a=e.displayName;if(a)return a;var s=r.displayName||r.name||"";return s!==""?n+"("+s+")":n}function se(e){return e.displayName||"Context"}function E(e){if(e==null)return null;if(typeof e.tag=="number"&&m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case v:return"Portal";case B:return"Profiler";case b:return"StrictMode";case C:return"Suspense";case g:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:var r=e;return se(r)+".Consumer";case I:var n=e;return se(n._context)+".Provider";case h:return qe(e,e.render,"ForwardRef");case j:var a=e.displayName||null;return a!==null?a:E(e.type)||"Memo";case k:{var s=e,l=s._payload,i=s._init;try{return E(i(l))}catch{return null}}}return null}var T=Object.assign,M=0,le,ue,ce,fe,de,ve,he;function me(){}me.__reactDisabledLog=!0;function He(){{if(M===0){le=console.log,ue=console.info,ce=console.warn,fe=console.error,de=console.group,ve=console.groupCollapsed,he=console.groupEnd;var e={configurable:!0,enumerable:!0,value:me,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function Ke(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:le}),info:T({},e,{value:ue}),warn:T({},e,{value:ce}),error:T({},e,{value:fe}),group:T({},e,{value:de}),groupCollapsed:T({},e,{value:ve}),groupEnd:T({},e,{value:he})})}M<0&&m("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var H=O.ReactCurrentDispatcher,K;function U(e,r,n){{if(K===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);K=a&&a[1]||""}return`
`+K+e}}var X=!1,$;{var Xe=typeof WeakMap=="function"?WeakMap:Map;$=new Xe}function pe(e,r){if(!e||X)return"";{var n=$.get(e);if(n!==void 0)return n}var a;X=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var l;l=H.current,H.current=null,He();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(R){a=R}Reflect.construct(e,[],i)}else{try{i.call()}catch(R){a=R}e.call(i.prototype)}}else{try{throw Error()}catch(R){a=R}e()}}catch(R){if(R&&a&&typeof R.stack=="string"){for(var o=R.stack.split(`
`),p=a.stack.split(`
`),f=o.length-1,d=p.length-1;f>=1&&d>=0&&o[f]!==p[d];)d--;for(;f>=1&&d>=0;f--,d--)if(o[f]!==p[d]){if(f!==1||d!==1)do if(f--,d--,d<0||o[f]!==p[d]){var w=`
`+o[f].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),typeof e=="function"&&$.set(e,w),w}while(f>=1&&d>=0);break}}}finally{X=!1,H.current=l,Ke(),Error.prepareStackTrace=s}var S=e?e.displayName||e.name:"",Oe=S?U(S):"";return typeof e=="function"&&$.set(e,Oe),Oe}function Qe(e,r,n){return pe(e,!1)}function Ze(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function z(e,r,n){if(e==null)return"";if(typeof e=="function")return pe(e,Ze(e));if(typeof e=="string")return U(e);switch(e){case C:return U("Suspense");case g:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case h:return Qe(e.render);case j:return z(e.type,r,n);case k:{var a=e,s=a._payload,l=a._init;try{return z(l(s),r,n)}catch{}}}return""}var J=Object.prototype.hasOwnProperty,xe={},ge=O.ReactDebugCurrentFrame;function G(e){if(e){var r=e._owner,n=z(e.type,e._source,r?r.type:null);ge.setExtraStackFrame(n)}else ge.setExtraStackFrame(null)}function er(e,r,n,a,s){{var l=Function.call.bind(J);for(var i in e)if(l(e,i)){var o=void 0;try{if(typeof e[i]!="function"){var p=Error((a||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}o=e[i](r,i,a,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(f){o=f}o&&!(o instanceof Error)&&(G(s),m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",n,i,typeof o),G(null)),o instanceof Error&&!(o.message in xe)&&(xe[o.message]=!0,G(s),m("Failed %s type: %s",n,o.message),G(null))}}}var rr=Array.isArray;function Q(e){return rr(e)}function tr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,n=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function nr(e){try{return we(e),!1}catch{return!0}}function we(e){return""+e}function be(e){if(nr(e))return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",tr(e)),we(e)}var W=O.ReactCurrentOwner,ar={key:!0,ref:!0,__self:!0,__source:!0},ye,je,Z;Z={};function or(e){if(J.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ir(e){if(J.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function sr(e,r){if(typeof e.ref=="string"&&W.current&&r&&W.current.stateNode!==r){var n=E(W.current.type);Z[n]||(m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',E(W.current.type),e.ref),Z[n]=!0)}}function lr(e,r){{var n=function(){ye||(ye=!0,m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function ur(e,r){{var n=function(){je||(je=!0,m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var cr=function(e,r,n,a,s,l,i){var o={$$typeof:c,type:e,key:r,ref:n,props:i,_owner:l};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:s}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function fr(e,r,n,a,s){{var l,i={},o=null,p=null;n!==void 0&&(be(n),o=""+n),ir(r)&&(be(r.key),o=""+r.key),or(r)&&(p=r.ref,sr(r,s));for(l in r)J.call(r,l)&&!ar.hasOwnProperty(l)&&(i[l]=r[l]);if(e&&e.defaultProps){var f=e.defaultProps;for(l in f)i[l]===void 0&&(i[l]=f[l])}if(o||p){var d=typeof e=="function"?e.displayName||e.name||"Unknown":e;o&&lr(i,d),p&&ur(i,d)}return cr(e,o,p,s,a,W.current,i)}}var ee=O.ReactCurrentOwner,Ee=O.ReactDebugCurrentFrame;function P(e){if(e){var r=e._owner,n=z(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(n)}else Ee.setExtraStackFrame(null)}var re;re=!1;function te(e){return typeof e=="object"&&e!==null&&e.$$typeof===c}function Re(){{if(ee.current){var e=E(ee.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function dr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+r+":"+n+"."}return""}}var _e={};function vr(e){{var r=Re();if(!r){var n=typeof e=="string"?e:e.displayName||e.name;n&&(r=`

Check the top-level render call using <`+n+">.")}return r}}function ke(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=vr(r);if(_e[n])return;_e[n]=!0;var a="";e&&e._owner&&e._owner!==ee.current&&(a=" It was passed a child from "+E(e._owner.type)+"."),P(e),m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,a),P(null)}}function Te(e,r){{if(typeof e!="object")return;if(Q(e))for(var n=0;n<e.length;n++){var a=e[n];te(a)&&ke(a,r)}else if(te(e))e._store&&(e._store.validated=!0);else if(e){var s=Ye(e);if(typeof s=="function"&&s!==e.entries)for(var l=s.call(e),i;!(i=l.next()).done;)te(i.value)&&ke(i.value,r)}}}function hr(e){{var r=e.type;if(r==null||typeof r=="string")return;var n;if(typeof r=="function")n=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===h||r.$$typeof===j))n=r.propTypes;else return;if(n){var a=E(r);er(n,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!re){re=!0;var s=E(r);m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",s||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function mr(e){{for(var r=Object.keys(e.props),n=0;n<r.length;n++){var a=r[n];if(a!=="children"&&a!=="key"){P(e),m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),P(null);break}}e.ref!==null&&(P(e),m("Invalid attribute `ref` supplied to `React.Fragment`."),P(null))}}function Ce(e,r,n,a,s,l){{var i=Ge(e);if(!i){var o="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=dr(s);p?o+=p:o+=Re();var f;e===null?f="null":Q(e)?f="array":e!==void 0&&e.$$typeof===c?(f="<"+(E(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):f=typeof e,m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",f,o)}var d=fr(e,r,n,s,l);if(d==null)return d;if(i){var w=r.children;if(w!==void 0)if(a)if(Q(w)){for(var S=0;S<w.length;S++)Te(w[S],e);Object.freeze&&Object.freeze(w)}else m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Te(w,e)}return e===x?mr(d):hr(d),d}}function pr(e,r,n){return Ce(e,r,n,!0)}function xr(e,r,n){return Ce(e,r,n,!1)}var gr=xr,wr=pr;L.Fragment=x,L.jsx=gr,L.jsxs=wr}()),L}({}).NODE_ENV==="production"?q.exports=Pe():q.exports=Se();var t=q.exports,D={},A=N;if({}.NODE_ENV==="production")D.createRoot=A.createRoot,D.hydrateRoot=A.hydrateRoot;else{var Y=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;D.createRoot=function(u,c){Y.usingClientEntryPoint=!0;try{return A.createRoot(u,c)}finally{Y.usingClientEntryPoint=!1}},D.hydrateRoot=function(u,c,v){Y.usingClientEntryPoint=!0;try{return A.hydrateRoot(u,c,v)}finally{Y.usingClientEntryPoint=!1}}}function Ne({setIsOpen:u,isOpen:c}){return console.log(u),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"h-14 bg-white w-full flex flex-row items-center  px-4 text-neutral-800 ",children:[t.jsxs("div",{className:"flex flex-row items-center justify-start lg:child:mr-4 child:mr-2 w-1/4",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 stroke-neutral-500 lg:block hidden",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})}),t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 stroke-neutral-500",children:[t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"}),t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 stroke-neutral-500",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"})})]}),t.jsxs("div",{className:"w-1/2  flex flex-row items-center justify-center",children:[t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-1 lg:block hidden stroke-neutral-500",children:[t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),t.jsx("p",{className:"font-semibold",children:" 4 Bed + 4.5 Bath"})]}),t.jsx("div",{className:"w-1/4 flex flex-row items-center justify-end",children:t.jsx("button",{onClick:v=>{v.stopPropagation(),u(!1)},children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 stroke-neutral-500",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})})]}),t.jsx("div",{className:"w-full bg-white h-2",children:t.jsx("div",{className:"w-1/3 bg-red-300 h-full"})})]})}function Fe({isOpen:u}){const c=["Schedule a Tour"," Floor Plan Pricing","Ask a Question"];return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"h-16 bg-white w-full flex flex-row items-center justify-between px-4 border-b-neutral-100 border",children:[t.jsx("div",{className:"flex flex-row items-center justify-around lg:justify-start flex-grow h-full",children:c.map(v=>t.jsx("button",{className:"h-full hover:bg-neutral-100 hover:text-neutral-800 text-neutral-600 px-2 lg:px-4 transition",children:t.jsx("p",{className:"lg:text-sm text-xs ",children:v})}))}),t.jsxs("div",{className:"lg:flex flex-row items-center hidden",children:[t.jsx("p",{className:"text-xs text-neutral-400 mr-1 whitespace-nowrap",children:"Powered by"}),t.jsx("img",{className:"h-6 mt-1",src:"/tourLogo.png",alt:""})]})]})})}function Le({isPaused:u,setIsPaused:c}){return t.jsxs(t.Fragment,{children:[t.jsx("video",{onClick:()=>{c(v=>!v)},src:"https://storage.googleapis.com/leasemagnets---dummy-db.appspot.com/community/43/magnet/9a4d7524-71d5-41e3-83aa-6d93b33a64c5/category/floor_plans/screen/b1/Vue53_2x2%20fp_2023.mp4??&coconut_id=lNhpx1rEriMbw3",preload:"auto",className:"object-cover absolute top-1/2 left-1/2 min-w-full min-h-full  -translate-x-1/2 -translate-y-1/2 cursor-pointer",playsInline:!0,autoPlay:!0,muted:!0}),u?t.jsxs(t.Fragment,{children:[" ",t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-16 h-16 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 -translate-top-1/2 fill-white opacity-80 pointer-events-none ",children:t.jsx("path",{fillRule:"evenodd",d:"M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",clipRule:"evenodd"})})]}):t.jsx(t.Fragment,{}),t.jsx("div",{style:{opacity:u?.4:0,transition:"opacity 0.2s ease"},className:" absolute left-0 top-0 w-full h-full bg-black  pointer-events-none "})]})}function De(){const u=[{text:"Schedule a Tour",emoji:"⏰"},{text:"Floor Plan Pricing",emoji:"🤑"},{text:"Ask a Question",emoji:"🙋‍♂️"}],v=Array.from(Array(26)).map((x,b)=>b+65).map(x=>String.fromCharCode(x));return t.jsx(t.Fragment,{children:t.jsxs("div",{className:" w-full  z-10  py-6 flex flex-col  text-neutral-800 lg:px-10 px-2 bg-white ",children:[t.jsxs("p",{className:"mt-auto mb-4 font-semibold text-xl",children:[t.jsx("span",{className:"text-2xl mr-1",children:"🔥"})," Welcome To The One"]}),t.jsx("p",{className:" text-xs text-neutral-500 mb-3 font-semibold tracking-wider",children:"WHERE TO NEXT?"}),t.jsx("div",{className:"grid grid-cols-2   gap-2",children:u.map((x,b)=>t.jsx(t.Fragment,{children:t.jsxs("button",{className:"text-left border hover:bg-neutral-100 hover:text-neutral-900 transition   text-neutral-700 border-neutral-200 py-2 px-3 rounded-md text-sm flex  flex-row items-center justify-start ",children:[t.jsx("div",{className:"w-6 h-6 rounded-md mr-3 bg-red-100 lg:grid hidden place-items-center font-bold text-red-700",children:v[b]}),t.jsx("p",{children:x.text})]})}))})]})})}function Ae({isOpen:u,isPaused:c,setIsPaused:v}){return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"w-full h-full overflow-hidden flex flex-col  ",children:[t.jsx("div",{className:"relative h-full",children:t.jsx(Le,{isPaused:c,setIsPaused:v})}),u?t.jsx(De,{}):t.jsx(t.Fragment,{})]})})}function Ie(){const[u,c]=y.useState(!1),[v,x]=y.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("img",{src:"/sampleBackground.png",className:"w-full h-full",alt:""}),t.jsxs("div",{onClick:()=>{c(b=>b||!0)},style:{transition:"width 0.2s ease, height 0.2s ease"},className:`fixed bottom-5   ${u?"-translate-x-1/2 lg:left-5  left-1/2 lg:translate-x-0   lg:w-1/2 w-[95%] lg:h-[90%] h-[95%] rounded-xl flex flex-col justify-between overflow-hidden":"left-5  w-52 h-12 rounded-full flex flex-col justify-between overflow-hidden cursor-pointer "}`,children:[u?t.jsx(t.Fragment,{}):t.jsxs("div",{className:"absolute bg-neutral-800 left-0 top-0 h-full w-full  z-20  flex text-sm  text-white  flex-row items-center justify-center",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-3 shadow-lg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})}),t.jsx("p",{className:"px-2",children:"Take Our Virtual Tour"})]}),u?t.jsxs(t.Fragment,{children:[t.jsx(Ne,{isOpen:u,setIsOpen:c}),t.jsx(Ae,{isPaused:v,setIsPaused:x,isOpen:u}),t.jsx(Fe,{isOpen:u})]}):t.jsx(t.Fragment,{})]})]})}const br="";function Me(u){const c=document.getElementById("root");c.attachShadow({mode:"open"}),D.createRoot(c.shadowRoot).render(t.jsx(y.StrictMode,{children:t.jsx(Ie,{})}))}window.LeaseMagnet=Me});
