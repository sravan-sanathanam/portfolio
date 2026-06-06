(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function L0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cm={exports:{}},Bl={},bm={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),I0=Symbol.for("react.portal"),U0=Symbol.for("react.fragment"),F0=Symbol.for("react.strict_mode"),O0=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),k0=Symbol.for("react.context"),z0=Symbol.for("react.forward_ref"),G0=Symbol.for("react.suspense"),V0=Symbol.for("react.memo"),H0=Symbol.for("react.lazy"),_h=Symbol.iterator;function W0(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var Pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nm=Object.assign,Dm={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=Dm,this.updater=n||Pm}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lm(){}Lm.prototype=Hs.prototype;function Jd(t,e,n){this.props=t,this.context=e,this.refs=Dm,this.updater=n||Pm}var ef=Jd.prototype=new Lm;ef.constructor=Jd;Nm(ef,Hs.prototype);ef.isPureReactComponent=!0;var vh=Array.isArray,Im=Object.prototype.hasOwnProperty,tf={current:null},Um={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Im.call(e,i)&&!Um.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ha,type:t,key:s,ref:a,props:r,_owner:tf.current}}function X0(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function j0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xh=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j0(""+t.key):e.toString(36)}function Ho(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ha:case I0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+oc(a,0):i,vh(r)?(n="",t!=null&&(n=t.replace(xh,"$&/")+"/"),Ho(r,e,n,"",function(c){return c})):r!=null&&(nf(r)&&(r=X0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(xh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",vh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+oc(s,o);a+=Ho(s,e,n,l,r)}else if(l=W0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+oc(s,o++),a+=Ho(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function eo(t,e,n){if(t==null)return t;var i=[],r=0;return Ho(t,i,"","",function(s){return e.call(n,s,r++)}),i}function q0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Wo={transition:null},$0={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:tf};function Om(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:eo,forEach:function(t,e,n){eo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return eo(t,function(){e++}),e},toArray:function(t){return eo(t,function(e){return e})||[]},only:function(t){if(!nf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Hs;Ge.Fragment=U0;Ge.Profiler=O0;Ge.PureComponent=Jd;Ge.StrictMode=F0;Ge.Suspense=G0;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$0;Ge.act=Om;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Nm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=tf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Im.call(e,l)&&!Um.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:a}};Ge.createContext=function(t){return t={$$typeof:k0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B0,_context:t},t.Consumer=t};Ge.createElement=Fm;Ge.createFactory=function(t){var e=Fm.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:z0,render:t}};Ge.isValidElement=nf;Ge.lazy=function(t){return{$$typeof:H0,_payload:{_status:-1,_result:t},_init:q0}};Ge.memo=function(t,e){return{$$typeof:V0,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};Ge.unstable_act=Om;Ge.useCallback=function(t,e){return sn.current.useCallback(t,e)};Ge.useContext=function(t){return sn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return sn.current.useEffect(t,e)};Ge.useId=function(){return sn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return sn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Ge.useRef=function(t){return sn.current.useRef(t)};Ge.useState=function(t){return sn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return sn.current.useTransition()};Ge.version="18.3.1";bm.exports=Ge;var Pi=bm.exports;const Y0=L0(Pi);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0=Pi,Z0=Symbol.for("react.element"),Q0=Symbol.for("react.fragment"),J0=Object.prototype.hasOwnProperty,ev=K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tv={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)J0.call(e,i)&&!tv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Z0,type:t,key:s,ref:a,props:r,_owner:ev.current}}Bl.Fragment=Q0;Bl.jsx=Bm;Bl.jsxs=Bm;Cm.exports=Bl;var L=Cm.exports,pu={},km={exports:{}},wn={},zm={exports:{}},Gm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,X){var Q=O.length;O.push(X);e:for(;0<Q;){var ae=Q-1>>>1,fe=O[ae];if(0<r(fe,X))O[ae]=X,O[Q]=fe,Q=ae;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var X=O[0],Q=O.pop();if(Q!==X){O[0]=Q;e:for(var ae=0,fe=O.length,ke=fe>>>1;ae<ke;){var Ve=2*(ae+1)-1,Pe=O[Ve],Y=Ve+1,de=O[Y];if(0>r(Pe,Q))Y<fe&&0>r(de,Pe)?(O[ae]=de,O[Y]=Q,ae=Y):(O[ae]=Pe,O[Ve]=Q,ae=Ve);else if(Y<fe&&0>r(de,Q))O[ae]=de,O[Y]=Q,ae=Y;else break e}}return X}function r(O,X){var Q=O.sortIndex-X.sortIndex;return Q!==0?Q:O.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,m=!1,_=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(O){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=O)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function M(O){if(E=!1,S(O),!_)if(n(l)!==null)_=!0,W(R);else{var X=n(c);X!==null&&B(M,X.startTime-O)}}function R(O,X){_=!1,E&&(E=!1,u(x),x=-1),m=!0;var Q=d;try{for(S(X),h=n(l);h!==null&&(!(h.expirationTime>X)||O&&!b());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,d=h.priorityLevel;var fe=ae(h.expirationTime<=X);X=t.unstable_now(),typeof fe=="function"?h.callback=fe:h===n(l)&&i(l),S(X)}else i(l);h=n(l)}if(h!==null)var ke=!0;else{var Ve=n(c);Ve!==null&&B(M,Ve.startTime-X),ke=!1}return ke}finally{h=null,d=Q,m=!1}}var T=!1,A=null,x=-1,C=5,N=-1;function b(){return!(t.unstable_now()-N<C)}function k(){if(A!==null){var O=t.unstable_now();N=O;var X=!0;try{X=A(!0,O)}finally{X?q():(T=!1,A=null)}}else T=!1}var q;if(typeof p=="function")q=function(){p(k)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,U=J.port2;J.port1.onmessage=k,q=function(){U.postMessage(null)}}else q=function(){g(k,0)};function W(O){A=O,T||(T=!0,q())}function B(O,X){x=g(function(){O(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,W(R))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var Q=d;d=X;try{return O()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,X){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=d;d=O;try{return X()}finally{d=Q}},t.unstable_scheduleCallback=function(O,X,Q){var ae=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,O){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Q+fe,O={id:f++,callback:X,priorityLevel:O,startTime:Q,expirationTime:fe,sortIndex:-1},Q>ae?(O.sortIndex=Q,e(c,O),n(l)===null&&O===n(c)&&(E?(u(x),x=-1):E=!0,B(M,Q-ae))):(O.sortIndex=fe,e(l,O),_||m||(_=!0,W(R))),O},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(O){var X=d;return function(){var Q=d;d=X;try{return O.apply(this,arguments)}finally{d=Q}}}})(Gm);zm.exports=Gm;var nv=zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv=Pi,Tn=nv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,Ta={};function jr(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(Ta[t]=e,t=0;t<e.length;t++)Vm.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=Object.prototype.hasOwnProperty,rv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sh={},yh={};function sv(t){return mu.call(yh,t)?!0:mu.call(Sh,t)?!1:rv.test(t)?yh[t]=!0:(Sh[t]=!0,!1)}function av(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ov(t,e,n,i){if(e===null||typeof e>"u"||av(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var rf=/[\-:]([a-z])/g;function sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rf,sf);Wt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rf,sf);Wt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rf,sf);Wt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function af(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ov(e,n,r,i)&&(n=null),i||r===null?sv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Vi=iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),of=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),Hm=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),lf=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),cf=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),Xm=Symbol.for("react.offscreen"),Mh=Symbol.iterator;function $s(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,lc;function ca(t){if(lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lc=e&&e[1]||""}return`
`+lc+t}var cc=!1;function uc(t,e){if(!t||cc)return"";cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function lv(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function xu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case gu:return"Profiler";case of:return"StrictMode";case _u:return"Suspense";case vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wm:return(t.displayName||"Context")+".Consumer";case Hm:return(t._context.displayName||"Context")+".Provider";case lf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cf:return e=t.displayName||null,e!==null?e:xu(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return xu(t(e))}catch{}}return null}function cv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xu(e);case 8:return e===of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uv(t){var e=jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function no(t){t._valueTracker||(t._valueTracker=uv(t))}function qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Su(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Eh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $m(t,e){e=e.checked,e!=null&&af(t,"checked",e,!1)}function yu(t,e){$m(t,e);var n=mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mu(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mu(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Eu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ua(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function Ym(t,e){var n=mr(e.value),i=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ah(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Km(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Km(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var io,Zm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dv=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){dv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function Qm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function Jm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Qm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var fv=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wu(t,e){if(e){if(fv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Au(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=null;function uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cu=null,ws=null,As=null;function Rh(t){if(t=ja(t)){if(typeof Cu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Hl(e),Cu(t.stateNode,t.type,e))}}function eg(t){ws?As?As.push(t):As=[t]:ws=t}function tg(){if(ws){var t=ws,e=As;if(As=ws=null,Rh(t),e)for(t=0;t<e.length;t++)Rh(e[t])}}function ng(t,e){return t(e)}function ig(){}var dc=!1;function rg(t,e,n){if(dc)return t(e,n);dc=!0;try{return ng(t,e,n)}finally{dc=!1,(ws!==null||As!==null)&&(ig(),tg())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var bu=!1;if(Ui)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){bu=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{bu=!1}function hv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ga=!1,ll=null,cl=!1,Pu=null,pv={onError:function(t){ga=!0,ll=t}};function mv(t,e,n,i,r,s,a,o,l){ga=!1,ll=null,hv.apply(pv,arguments)}function gv(t,e,n,i,r,s,a,o,l){if(mv.apply(this,arguments),ga){if(ga){var c=ll;ga=!1,ll=null}else throw Error(ne(198));cl||(cl=!0,Pu=c)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(qr(t)!==t)throw Error(ne(188))}function _v(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ch(r),t;if(s===i)return Ch(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function ag(t){return t=_v(t),t!==null?og(t):null}function og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=og(t);if(e!==null)return e;t=t.sibling}return null}var lg=Tn.unstable_scheduleCallback,bh=Tn.unstable_cancelCallback,vv=Tn.unstable_shouldYield,xv=Tn.unstable_requestPaint,At=Tn.unstable_now,Sv=Tn.unstable_getCurrentPriorityLevel,df=Tn.unstable_ImmediatePriority,cg=Tn.unstable_UserBlockingPriority,ul=Tn.unstable_NormalPriority,yv=Tn.unstable_LowPriority,ug=Tn.unstable_IdlePriority,kl=null,di=null;function Mv(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:wv,Ev=Math.log,Tv=Math.LN2;function wv(t){return t>>>=0,t===0?32:31-(Ev(t)/Tv|0)|0}var ro=64,so=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=da(o):(s&=a,s!==0&&(i=da(s)))}else a=n&~r,a!==0?i=da(a):s!==0&&(i=da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function Av(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Yn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Av(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dg(){var t=ro;return ro<<=1,!(ro&4194240)&&(ro=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function Cv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ff(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hg,hf,pg,mg,gg,Du=!1,ao=[],or=null,lr=null,cr=null,Ra=new Map,Ca=new Map,tr=[],bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ph(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ja(e),e!==null&&hf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Pv(t,e,n,i,r){switch(e){case"focusin":return or=Ks(or,t,e,n,i,r),!0;case"dragenter":return lr=Ks(lr,t,e,n,i,r),!0;case"mouseover":return cr=Ks(cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ra.set(s,Ks(Ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ca.set(s,Ks(Ca.get(s)||null,t,e,n,i,r)),!0}return!1}function _g(t){var e=Nr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=sg(n),e!==null){t.blockedOn=e,gg(t.priority,function(){pg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ru=i,n.target.dispatchEvent(i),Ru=null}else return e=ja(n),e!==null&&hf(e),t.blockedOn=n,!1;e.shift()}return!0}function Nh(t,e,n){Xo(t)&&n.delete(e)}function Nv(){Du=!1,or!==null&&Xo(or)&&(or=null),lr!==null&&Xo(lr)&&(lr=null),cr!==null&&Xo(cr)&&(cr=null),Ra.forEach(Nh),Ca.forEach(Nh)}function Zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Du||(Du=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,Nv)))}function ba(t){function e(r){return Zs(r,t)}if(0<ao.length){Zs(ao[0],t);for(var n=1;n<ao.length;n++){var i=ao[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&Zs(or,t),lr!==null&&Zs(lr,t),cr!==null&&Zs(cr,t),Ra.forEach(e),Ca.forEach(e),n=0;n<tr.length;n++)i=tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)_g(n),n.blockedOn===null&&tr.shift()}var Rs=Vi.ReactCurrentBatchConfig,fl=!0;function Dv(t,e,n,i){var r=et,s=Rs.transition;Rs.transition=null;try{et=1,pf(t,e,n,i)}finally{et=r,Rs.transition=s}}function Lv(t,e,n,i){var r=et,s=Rs.transition;Rs.transition=null;try{et=4,pf(t,e,n,i)}finally{et=r,Rs.transition=s}}function pf(t,e,n,i){if(fl){var r=Lu(t,e,n,i);if(r===null)Mc(t,e,i,hl,n),Ph(t,i);else if(Pv(r,t,e,n,i))i.stopPropagation();else if(Ph(t,i),e&4&&-1<bv.indexOf(t)){for(;r!==null;){var s=ja(r);if(s!==null&&hg(s),s=Lu(t,e,n,i),s===null&&Mc(t,e,i,hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mc(t,e,i,null,n)}}var hl=null;function Lu(t,e,n,i){if(hl=null,t=uf(i),t=Nr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function vg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sv()){case df:return 1;case cg:return 4;case ul:case yv:return 16;case ug:return 536870912;default:return 16}default:return 16}}var rr=null,mf=null,jo=null;function xg(){if(jo)return jo;var t,e=mf,n=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return jo=r.slice(t,1<i?1-i:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function Dh(){return!1}function An(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oo:Dh,this.isPropagationStopped=Dh,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gf=An(Ws),Xa=xt({},Ws,{view:0,detail:0}),Iv=An(Xa),hc,pc,Qs,zl=xt({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(hc=t.screenX-Qs.screenX,pc=t.screenY-Qs.screenY):pc=hc=0,Qs=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:pc}}),Lh=An(zl),Uv=xt({},zl,{dataTransfer:0}),Fv=An(Uv),Ov=xt({},Xa,{relatedTarget:0}),mc=An(Ov),Bv=xt({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),kv=An(Bv),zv=xt({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gv=An(zv),Vv=xt({},Ws,{data:0}),Ih=An(Vv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xv[t])?!!e[t]:!1}function _f(){return jv}var qv=xt({},Xa,{key:function(t){if(t.key){var e=Hv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=An(qv),Yv=xt({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=An(Yv),Kv=xt({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),Zv=An(Kv),Qv=xt({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=An(Qv),ex=xt({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=An(ex),nx=[9,13,27,32],vf=Ui&&"CompositionEvent"in window,_a=null;Ui&&"documentMode"in document&&(_a=document.documentMode);var ix=Ui&&"TextEvent"in window&&!_a,Sg=Ui&&(!vf||_a&&8<_a&&11>=_a),Fh=" ",Oh=!1;function yg(t,e){switch(t){case"keyup":return nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function rx(t,e){switch(t){case"compositionend":return Mg(e);case"keypress":return e.which!==32?null:(Oh=!0,Fh);case"textInput":return t=e.data,t===Fh&&Oh?null:t;default:return null}}function sx(t,e){if(ps)return t==="compositionend"||!vf&&yg(t,e)?(t=xg(),jo=mf=rr=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sg&&e.locale!=="ko"?null:e.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ax[t.type]:e==="textarea"}function Eg(t,e,n,i){eg(i),e=pl(e,"onChange"),0<e.length&&(n=new gf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var va=null,Pa=null;function ox(t){Ig(t,0)}function Gl(t){var e=_s(t);if(qm(e))return t}function lx(t,e){if(t==="change")return e}var Tg=!1;if(Ui){var gc;if(Ui){var _c="oninput"in document;if(!_c){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),_c=typeof kh.oninput=="function"}gc=_c}else gc=!1;Tg=gc&&(!document.documentMode||9<document.documentMode)}function zh(){va&&(va.detachEvent("onpropertychange",wg),Pa=va=null)}function wg(t){if(t.propertyName==="value"&&Gl(Pa)){var e=[];Eg(e,Pa,t,uf(t)),rg(ox,e)}}function cx(t,e,n){t==="focusin"?(zh(),va=e,Pa=n,va.attachEvent("onpropertychange",wg)):t==="focusout"&&zh()}function ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(Pa)}function dx(t,e){if(t==="click")return Gl(e)}function fx(t,e){if(t==="input"||t==="change")return Gl(e)}function hx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:hx;function Na(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!mu.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,e){var n=Gh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gh(n)}}function Ag(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ag(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rg(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function px(t){var e=Rg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ag(n.ownerDocument.documentElement,n)){if(i!==null&&xf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Vh(n,s);var a=Vh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mx=Ui&&"documentMode"in document&&11>=document.documentMode,ms=null,Iu=null,xa=null,Uu=!1;function Hh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uu||ms==null||ms!==ol(i)||(i=ms,"selectionStart"in i&&xf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xa&&Na(xa,i)||(xa=i,i=pl(Iu,"onSelect"),0<i.length&&(e=new gf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},vc={},Cg={};Ui&&(Cg=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Vl(t){if(vc[t])return vc[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cg)return vc[t]=e[n];return t}var bg=Vl("animationend"),Pg=Vl("animationiteration"),Ng=Vl("animationstart"),Dg=Vl("transitionend"),Lg=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){Lg.set(t,e),jr(e,[t])}for(var xc=0;xc<Wh.length;xc++){var Sc=Wh[xc],gx=Sc.toLowerCase(),_x=Sc[0].toUpperCase()+Sc.slice(1);vr(gx,"on"+_x)}vr(bg,"onAnimationEnd");vr(Pg,"onAnimationIteration");vr(Ng,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(Dg,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function Xh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,gv(i,e,void 0,t),t.currentTarget=null}function Ig(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Xh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Xh(r,o,c),s=l}}}if(cl)throw t=Pu,cl=!1,Pu=null,t}function ft(t,e){var n=e[zu];n===void 0&&(n=e[zu]=new Set);var i=t+"__bubble";n.has(i)||(Ug(e,t,2,!1),n.add(i))}function yc(t,e,n){var i=0;e&&(i|=4),Ug(n,t,i,e)}var co="_reactListening"+Math.random().toString(36).slice(2);function Da(t){if(!t[co]){t[co]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(vx.has(n)||yc(n,!1,t),yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[co]||(e[co]=!0,yc("selectionchange",!1,e))}}function Ug(t,e,n,i){switch(vg(e)){case 1:var r=Dv;break;case 4:r=Lv;break;default:r=pf}n=r.bind(null,e,n,t),r=void 0,!bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Nr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}rg(function(){var c=s,f=uf(n),h=[];e:{var d=Lg.get(t);if(d!==void 0){var m=gf,_=t;switch(t){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":m=$v;break;case"focusin":_="focus",m=mc;break;case"focusout":_="blur",m=mc;break;case"beforeblur":case"afterblur":m=mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Zv;break;case bg:case Pg:case Ng:m=kv;break;case Dg:m=Jv;break;case"scroll":m=Iv;break;case"wheel":m=tx;break;case"copy":case"cut":case"paste":m=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Uh}var E=(e&4)!==0,g=!E&&t==="scroll",u=E?d!==null?d+"Capture":null:d;E=[];for(var p=c,S;p!==null;){S=p;var M=S.stateNode;if(S.tag===5&&M!==null&&(S=M,u!==null&&(M=Aa(p,u),M!=null&&E.push(La(p,M,S)))),g)break;p=p.return}0<E.length&&(d=new m(d,_,null,n,f),h.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Ru&&(_=n.relatedTarget||n.fromElement)&&(Nr(_)||_[Fi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Nr(_):null,_!==null&&(g=qr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(E=Lh,M="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=Uh,M="onPointerLeave",u="onPointerEnter",p="pointer"),g=m==null?d:_s(m),S=_==null?d:_s(_),d=new E(M,p+"leave",m,n,f),d.target=g,d.relatedTarget=S,M=null,Nr(f)===c&&(E=new E(u,p+"enter",_,n,f),E.target=S,E.relatedTarget=g,M=E),g=M,m&&_)t:{for(E=m,u=_,p=0,S=E;S;S=Zr(S))p++;for(S=0,M=u;M;M=Zr(M))S++;for(;0<p-S;)E=Zr(E),p--;for(;0<S-p;)u=Zr(u),S--;for(;p--;){if(E===u||u!==null&&E===u.alternate)break t;E=Zr(E),u=Zr(u)}E=null}else E=null;m!==null&&jh(h,d,m,E,!1),_!==null&&g!==null&&jh(h,g,_,E,!0)}}e:{if(d=c?_s(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var R=lx;else if(Bh(d))if(Tg)R=fx;else{R=ux;var T=cx}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=dx);if(R&&(R=R(t,c))){Eg(h,R,n,f);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Mu(d,"number",d.value)}switch(T=c?_s(c):window,t){case"focusin":(Bh(T)||T.contentEditable==="true")&&(ms=T,Iu=c,xa=null);break;case"focusout":xa=Iu=ms=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Hh(h,n,f);break;case"selectionchange":if(mx)break;case"keydown":case"keyup":Hh(h,n,f)}var A;if(vf)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ps?yg(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Sg&&n.locale!=="ko"&&(ps||x!=="onCompositionStart"?x==="onCompositionEnd"&&ps&&(A=xg()):(rr=f,mf="value"in rr?rr.value:rr.textContent,ps=!0)),T=pl(c,x),0<T.length&&(x=new Ih(x,t,null,n,f),h.push({event:x,listeners:T}),A?x.data=A:(A=Mg(n),A!==null&&(x.data=A)))),(A=ix?rx(t,n):sx(t,n))&&(c=pl(c,"onBeforeInput"),0<c.length&&(f=new Ih("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=A))}Ig(h,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(La(t,s,r)),s=Aa(t,e),s!=null&&i.push(La(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Aa(n,s),l!=null&&a.unshift(La(n,l,o))):r||(l=Aa(n,s),l!=null&&a.push(La(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var xx=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function qh(t){return(typeof t=="string"?t:""+t).replace(xx,`
`).replace(Sx,"")}function uo(t,e,n){if(e=qh(e),qh(t)!==e&&n)throw Error(ne(425))}function ml(){}var Fu=null,Ou=null;function Bu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,yx=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(t){return $h.resolve(null).then(t).catch(Ex)}:ku;function Ex(t){setTimeout(function(){throw t})}function Ec(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),li="__reactFiber$"+Xs,Ia="__reactProps$"+Xs,Fi="__reactContainer$"+Xs,zu="__reactEvents$"+Xs,Tx="__reactListeners$"+Xs,wx="__reactHandles$"+Xs;function Nr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fi]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yh(t);t!==null;){if(n=t[li])return n;t=Yh(t)}return e}t=n,n=t.parentNode}return null}function ja(t){return t=t[li]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Hl(t){return t[Ia]||null}var Gu=[],vs=-1;function xr(t){return{current:t}}function ht(t){0>vs||(t.current=Gu[vs],Gu[vs]=null,vs--)}function ct(t,e){vs++,Gu[vs]=t.current,t.current=e}var gr={},Qt=xr(gr),un=xr(!1),Br=gr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function gl(){ht(un),ht(Qt)}function Kh(t,e,n){if(Qt.current!==gr)throw Error(ne(168));ct(Qt,e),ct(un,n)}function Fg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,cv(t)||"Unknown",r));return xt({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Br=Qt.current,ct(Qt,t),ct(un,un.current),!0}function Zh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Fg(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,ht(un),ht(Qt),ct(Qt,t)):ht(un),ct(un,n)}var wi=null,Wl=!1,Tc=!1;function Og(t){wi===null?wi=[t]:wi.push(t)}function Ax(t){Wl=!0,Og(t)}function Sr(){if(!Tc&&wi!==null){Tc=!0;var t=0,e=et;try{var n=wi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,Wl=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),lg(df,Sr),r}finally{et=e,Tc=!1}}return null}var xs=[],Ss=0,vl=null,xl=0,Pn=[],Nn=0,kr=null,Ri=1,Ci="";function Ar(t,e){xs[Ss++]=xl,xs[Ss++]=vl,vl=t,xl=e}function Bg(t,e,n){Pn[Nn++]=Ri,Pn[Nn++]=Ci,Pn[Nn++]=kr,kr=t;var i=Ri;t=Ci;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ri=1<<32-Yn(e)+r|n<<r|i,Ci=s+t}else Ri=1<<s|n<<r|i,Ci=t}function Sf(t){t.return!==null&&(Ar(t,1),Bg(t,1,0))}function yf(t){for(;t===vl;)vl=xs[--Ss],xs[Ss]=null,xl=xs[--Ss],xs[Ss]=null;for(;t===kr;)kr=Pn[--Nn],Pn[Nn]=null,Ci=Pn[--Nn],Pn[Nn]=null,Ri=Pn[--Nn],Pn[Nn]=null}var En=null,Mn=null,pt=!1,Xn=null;function kg(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:Ri,overflow:Ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function Vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hu(t){if(pt){var e=Mn;if(e){var n=e;if(!Qh(t,e)){if(Vu(t))throw Error(ne(418));e=ur(n.nextSibling);var i=En;e&&Qh(t,e)?kg(i,n):(t.flags=t.flags&-4097|2,pt=!1,En=t)}}else{if(Vu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,pt=!1,En=t}}}function Jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function fo(t){if(t!==En)return!1;if(!pt)return Jh(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bu(t.type,t.memoizedProps)),e&&(e=Mn)){if(Vu(t))throw zg(),Error(ne(418));for(;e;)kg(t,e),e=ur(e.nextSibling)}if(Jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?ur(t.stateNode.nextSibling):null;return!0}function zg(){for(var t=Mn;t;)t=ur(t.nextSibling)}function Is(){Mn=En=null,pt=!1}function Mf(t){Xn===null?Xn=[t]:Xn.push(t)}var Rx=Vi.ReactCurrentBatchConfig;function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ep(t){var e=t._init;return e(t._payload)}function Gg(t){function e(u,p){if(t){var S=u.deletions;S===null?(u.deletions=[p],u.flags|=16):S.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=pr(u,p),u.index=0,u.sibling=null,u}function s(u,p,S){return u.index=S,t?(S=u.alternate,S!==null?(S=S.index,S<p?(u.flags|=2,p):S):(u.flags|=2,p)):(u.flags|=1048576,p)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,p,S,M){return p===null||p.tag!==6?(p=Nc(S,u.mode,M),p.return=u,p):(p=r(p,S),p.return=u,p)}function l(u,p,S,M){var R=S.type;return R===hs?f(u,p,S.props.children,M,S.key):p!==null&&(p.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&ep(R)===p.type)?(M=r(p,S.props),M.ref=Js(u,p,S),M.return=u,M):(M=el(S.type,S.key,S.props,null,u.mode,M),M.ref=Js(u,p,S),M.return=u,M)}function c(u,p,S,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==S.containerInfo||p.stateNode.implementation!==S.implementation?(p=Dc(S,u.mode,M),p.return=u,p):(p=r(p,S.children||[]),p.return=u,p)}function f(u,p,S,M,R){return p===null||p.tag!==7?(p=Or(S,u.mode,M,R),p.return=u,p):(p=r(p,S),p.return=u,p)}function h(u,p,S){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Nc(""+p,u.mode,S),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case to:return S=el(p.type,p.key,p.props,null,u.mode,S),S.ref=Js(u,null,p),S.return=u,S;case fs:return p=Dc(p,u.mode,S),p.return=u,p;case Ji:var M=p._init;return h(u,M(p._payload),S)}if(ua(p)||$s(p))return p=Or(p,u.mode,S,null),p.return=u,p;ho(u,p)}return null}function d(u,p,S,M){var R=p!==null?p.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return R!==null?null:o(u,p,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case to:return S.key===R?l(u,p,S,M):null;case fs:return S.key===R?c(u,p,S,M):null;case Ji:return R=S._init,d(u,p,R(S._payload),M)}if(ua(S)||$s(S))return R!==null?null:f(u,p,S,M,null);ho(u,S)}return null}function m(u,p,S,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(S)||null,o(p,u,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case to:return u=u.get(M.key===null?S:M.key)||null,l(p,u,M,R);case fs:return u=u.get(M.key===null?S:M.key)||null,c(p,u,M,R);case Ji:var T=M._init;return m(u,p,S,T(M._payload),R)}if(ua(M)||$s(M))return u=u.get(S)||null,f(p,u,M,R,null);ho(p,M)}return null}function _(u,p,S,M){for(var R=null,T=null,A=p,x=p=0,C=null;A!==null&&x<S.length;x++){A.index>x?(C=A,A=null):C=A.sibling;var N=d(u,A,S[x],M);if(N===null){A===null&&(A=C);break}t&&A&&N.alternate===null&&e(u,A),p=s(N,p,x),T===null?R=N:T.sibling=N,T=N,A=C}if(x===S.length)return n(u,A),pt&&Ar(u,x),R;if(A===null){for(;x<S.length;x++)A=h(u,S[x],M),A!==null&&(p=s(A,p,x),T===null?R=A:T.sibling=A,T=A);return pt&&Ar(u,x),R}for(A=i(u,A);x<S.length;x++)C=m(A,u,x,S[x],M),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?x:C.key),p=s(C,p,x),T===null?R=C:T.sibling=C,T=C);return t&&A.forEach(function(b){return e(u,b)}),pt&&Ar(u,x),R}function E(u,p,S,M){var R=$s(S);if(typeof R!="function")throw Error(ne(150));if(S=R.call(S),S==null)throw Error(ne(151));for(var T=R=null,A=p,x=p=0,C=null,N=S.next();A!==null&&!N.done;x++,N=S.next()){A.index>x?(C=A,A=null):C=A.sibling;var b=d(u,A,N.value,M);if(b===null){A===null&&(A=C);break}t&&A&&b.alternate===null&&e(u,A),p=s(b,p,x),T===null?R=b:T.sibling=b,T=b,A=C}if(N.done)return n(u,A),pt&&Ar(u,x),R;if(A===null){for(;!N.done;x++,N=S.next())N=h(u,N.value,M),N!==null&&(p=s(N,p,x),T===null?R=N:T.sibling=N,T=N);return pt&&Ar(u,x),R}for(A=i(u,A);!N.done;x++,N=S.next())N=m(A,u,x,N.value,M),N!==null&&(t&&N.alternate!==null&&A.delete(N.key===null?x:N.key),p=s(N,p,x),T===null?R=N:T.sibling=N,T=N);return t&&A.forEach(function(k){return e(u,k)}),pt&&Ar(u,x),R}function g(u,p,S,M){if(typeof S=="object"&&S!==null&&S.type===hs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case to:e:{for(var R=S.key,T=p;T!==null;){if(T.key===R){if(R=S.type,R===hs){if(T.tag===7){n(u,T.sibling),p=r(T,S.props.children),p.return=u,u=p;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&ep(R)===T.type){n(u,T.sibling),p=r(T,S.props),p.ref=Js(u,T,S),p.return=u,u=p;break e}n(u,T);break}else e(u,T);T=T.sibling}S.type===hs?(p=Or(S.props.children,u.mode,M,S.key),p.return=u,u=p):(M=el(S.type,S.key,S.props,null,u.mode,M),M.ref=Js(u,p,S),M.return=u,u=M)}return a(u);case fs:e:{for(T=S.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===S.containerInfo&&p.stateNode.implementation===S.implementation){n(u,p.sibling),p=r(p,S.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=Dc(S,u.mode,M),p.return=u,u=p}return a(u);case Ji:return T=S._init,g(u,p,T(S._payload),M)}if(ua(S))return _(u,p,S,M);if($s(S))return E(u,p,S,M);ho(u,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,S),p.return=u,u=p):(n(u,p),p=Nc(S,u.mode,M),p.return=u,u=p),a(u)):n(u,p)}return g}var Us=Gg(!0),Vg=Gg(!1),Sl=xr(null),yl=null,ys=null,Ef=null;function Tf(){Ef=ys=yl=null}function wf(t){var e=Sl.current;ht(Sl),t._currentValue=e}function Wu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){yl=t,Ef=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(Ef!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(yl===null)throw Error(ne(308));ys=t,yl.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Dr=null;function Af(t){Dr===null?Dr=[t]:Dr.push(t)}function Hg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Af(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,Af(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function $o(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ff(t,n)}}function tp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,i){var r=t.updateQueue;er=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,E=o;switch(d=e,m=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){h=_.call(m,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,d=typeof _=="function"?_.call(m,h,d):_,d==null)break e;h=xt({},h,d);break e;case 2:er=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=a,t.lanes=a,t.memoizedState=h}}function np(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var qa={},fi=xr(qa),Ua=xr(qa),Fa=xr(qa);function Lr(t){if(t===qa)throw Error(ne(174));return t}function Cf(t,e){switch(ct(Fa,e),ct(Ua,t),ct(fi,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tu(e,t)}ht(fi),ct(fi,e)}function Fs(){ht(fi),ht(Ua),ht(Fa)}function Xg(t){Lr(Fa.current);var e=Lr(fi.current),n=Tu(e,t.type);e!==n&&(ct(Ua,t),ct(fi,n))}function bf(t){Ua.current===t&&(ht(fi),ht(Ua))}var _t=xr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wc=[];function Pf(){for(var t=0;t<wc.length;t++)wc[t]._workInProgressVersionPrimary=null;wc.length=0}var Yo=Vi.ReactCurrentDispatcher,Ac=Vi.ReactCurrentBatchConfig,zr=0,vt=null,It=null,kt=null,Tl=!1,Sa=!1,Oa=0,Cx=0;function jt(){throw Error(ne(321))}function Nf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Df(t,e,n,i,r,s){if(zr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yo.current=t===null||t.memoizedState===null?Dx:Lx,t=n(i,r),Sa){s=0;do{if(Sa=!1,Oa=0,25<=s)throw Error(ne(301));s+=1,kt=It=null,e.updateQueue=null,Yo.current=Ix,t=n(i,r)}while(Sa)}if(Yo.current=wl,e=It!==null&&It.next!==null,zr=0,kt=It=vt=null,Tl=!1,e)throw Error(ne(300));return t}function Lf(){var t=Oa!==0;return Oa=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?vt.memoizedState=kt=t:kt=kt.next=t,kt}function Bn(){if(It===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=kt===null?vt.memoizedState:kt.next;if(e!==null)kt=e,It=t;else{if(t===null)throw Error(ne(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},kt===null?vt.memoizedState=kt=t:kt=kt.next=t}return kt}function Ba(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((zr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,vt.lanes|=f,Gr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Zn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Zn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function jg(){}function qg(t,e){var n=vt,i=Bn(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,If(Kg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,ka(9,Yg.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ne(349));zr&30||$g(n,e,r)}return r}function $g(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yg(t,e,n,i){e.value=n,e.getSnapshot=i,Zg(e)&&Qg(t)}function Kg(t,e,n){return n(function(){Zg(e)&&Qg(t)})}function Zg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function Qg(t){var e=Oi(t,1);e!==null&&Kn(e,t,1,-1)}function ip(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=Nx.bind(null,vt,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Jg(){return Bn().memoizedState}function Ko(t,e,n,i){var r=ai();vt.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function Xl(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(It!==null){var a=It.memoizedState;if(s=a.destroy,i!==null&&Nf(i,a.deps)){r.memoizedState=ka(e,n,s,i);return}}vt.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function rp(t,e){return Ko(8390656,8,t,e)}function If(t,e){return Xl(2048,8,t,e)}function e_(t,e){return Xl(4,2,t,e)}function t_(t,e){return Xl(4,4,t,e)}function n_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function i_(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,n_.bind(null,e,t),n)}function Uf(){}function r_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function s_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function a_(t,e,n){return zr&21?(Zn(n,e)||(n=dg(),vt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function bx(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Ac.transition;Ac.transition={};try{t(!1),e()}finally{et=n,Ac.transition=i}}function o_(){return Bn().memoizedState}function Px(t,e,n){var i=hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},l_(t))c_(e,n);else if(n=Hg(t,e,n,i),n!==null){var r=nn();Kn(n,t,i,r),u_(n,e,i)}}function Nx(t,e,n){var i=hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(l_(t))c_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Zn(o,a)){var l=e.interleaved;l===null?(r.next=r,Af(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Hg(t,e,r,i),n!==null&&(r=nn(),Kn(n,t,i,r),u_(n,e,i))}}function l_(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function c_(t,e){Sa=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ff(t,n)}}var wl={readContext:On,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Dx={readContext:On,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:rp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4194308,4,n_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ko(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Px.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:ip,useDebugValue:Uf,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=ip(!1),e=t[0];return t=bx.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ai();if(pt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),zt===null)throw Error(ne(349));zr&30||$g(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,rp(Kg.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,Yg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=zt.identifierPrefix;if(pt){var n=Ci,i=Ri;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lx={readContext:On,useCallback:r_,useContext:On,useEffect:If,useImperativeHandle:i_,useInsertionEffect:e_,useLayoutEffect:t_,useMemo:s_,useReducer:Rc,useRef:Jg,useState:function(){return Rc(Ba)},useDebugValue:Uf,useDeferredValue:function(t){var e=Bn();return a_(e,It.memoizedState,t)},useTransition:function(){var t=Rc(Ba)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:qg,useId:o_,unstable_isNewReconciler:!1},Ix={readContext:On,useCallback:r_,useContext:On,useEffect:If,useImperativeHandle:i_,useInsertionEffect:e_,useLayoutEffect:t_,useMemo:s_,useReducer:Cc,useRef:Jg,useState:function(){return Cc(Ba)},useDebugValue:Uf,useDeferredValue:function(t){var e=Bn();return It===null?e.memoizedState=t:a_(e,It.memoizedState,t)},useTransition:function(){var t=Cc(Ba)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:qg,useId:o_,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=hr(t),s=Ni(i,r);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(Kn(e,t,r,i),$o(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=hr(t),s=Ni(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(Kn(e,t,r,i),$o(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=hr(t),r=Ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=dr(t,r,i),e!==null&&(Kn(e,t,i,n),$o(e,t,i))}};function sp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Na(n,i)||!Na(r,s):!0}function d_(t,e,n){var i=!1,r=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=dn(e)?Br:Qt.current,i=e.contextTypes,s=(i=i!=null)?Ls(t,r):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function ju(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=dn(e)?Br:Qt.current,r.context=Ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jl.enqueueReplaceState(r,r.state,null),Ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",i=e;do n+=lv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function f_(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,id=i),qu(t,e)},n}function h_(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qu(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function op(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ux;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Yx.bind(null,t,e,n),e.then(t,t))}function lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var Fx=Vi.ReactCurrentOwner,cn=!1;function tn(t,e,n,i){e.child=t===null?Vg(e,null,n,i):Us(e,t.child,n,i)}function up(t,e,n,i,r){n=n.render;var s=e.ref;return Cs(e,r),i=Df(t,e,n,i,s,r),n=Lf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(pt&&n&&Sf(e),e.flags|=1,tn(t,e,i,r),e.child)}function dp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p_(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(a,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function p_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Na(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return $u(t,e,n,i,r)}function m_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Es,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Es,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(Es,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(Es,Sn),Sn|=i;return tn(t,e,r,n),e.child}function g_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $u(t,e,n,i,r){var s=dn(n)?Br:Qt.current;return s=Ls(e,s),Cs(e,r),n=Df(t,e,n,i,s,r),i=Lf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(pt&&i&&Sf(e),e.flags|=1,tn(t,e,n,r),e.child)}function fp(t,e,n,i,r){if(dn(n)){var s=!0;_l(e)}else s=!1;if(Cs(e,r),e.stateNode===null)Zo(t,e),d_(e,n,i),ju(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=dn(n)?Br:Qt.current,c=Ls(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&ap(e,a,i,c),er=!1;var d=e.memoizedState;a.state=d,Ml(e,i,a,r),l=e.memoizedState,o!==i||d!==l||un.current||er?(typeof f=="function"&&(Xu(e,n,f,i),l=e.memoizedState),(o=er||sp(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Wg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Hn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=dn(n)?Br:Qt.current,l=Ls(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&ap(e,a,i,l),er=!1,d=e.memoizedState,a.state=d,Ml(e,i,a,r);var _=e.memoizedState;o!==h||d!==_||un.current||er?(typeof m=="function"&&(Xu(e,n,m,i),_=e.memoizedState),(c=er||sp(e,n,c,i,d,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Yu(t,e,n,i,s,r)}function Yu(t,e,n,i,r,s){g_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Zh(e,n,!1),Bi(t,e,s);i=e.stateNode,Fx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,o,s)):tn(t,e,o,s),e.memoizedState=i.state,r&&Zh(e,n,!0),e.child}function __(t){var e=t.stateNode;e.pendingContext?Kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kh(t,e.context,!1),Cf(t,e.containerInfo)}function hp(t,e,n,i,r){return Is(),Mf(r),e.flags|=256,tn(t,e,n,i),e.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function v_(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(_t,r&1),t===null)return Hu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Yl(a,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zu(n),e.memoizedState=Ku,t):Ff(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ox(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=pr(o,s):(s=Or(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Zu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ku,i}return s=t.child,t=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ff(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function po(t,e,n,i){return i!==null&&Mf(i),Us(e,t.child,null,n),t=Ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ox(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=bc(Error(ne(422))),po(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yl({mode:"visible",children:i.children},r,0,null),s=Or(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Us(e,t.child,null,a),e.child.memoizedState=Zu(a),e.memoizedState=Ku,s);if(!(e.mode&1))return po(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=bc(s,i,void 0),po(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=zt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),Kn(i,t,r,-1))}return Vf(),i=bc(Error(ne(421))),po(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Kx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=ur(r.nextSibling),En=e,pt=!0,Xn=null,t!==null&&(Pn[Nn++]=Ri,Pn[Nn++]=Ci,Pn[Nn++]=kr,Ri=t.id,Ci=t.overflow,kr=e),e=Ff(e,i.children),e.flags|=4096,e)}function pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Wu(t.return,e,n)}function Pc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function x_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n,e);else if(t.tag===19)pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pc(e,!0,n,null,s);break;case"together":Pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bx(t,e,n){switch(e.tag){case 3:__(e),Is();break;case 5:Xg(e);break;case 1:dn(e.type)&&_l(e);break;case 4:Cf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?v_(t,e,n):(ct(_t,_t.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);ct(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return x_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,m_(t,e,n)}return Bi(t,e,n)}var S_,Qu,y_,M_;S_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qu=function(){};y_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(fi.current);var s=null;switch(n){case"input":r=Su(t,r),i=Su(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Eu(t,r),i=Eu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}wu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};M_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ea(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function kx(t,e,n){var i=e.pendingProps;switch(yf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return dn(e.type)&&gl(),qt(e),null;case 3:return i=e.stateNode,Fs(),ht(un),ht(Qt),Pf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(ad(Xn),Xn=null))),Qu(t,e),qt(e),null;case 5:bf(e);var r=Lr(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)y_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return qt(e),null}if(t=Lr(fi.current),fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<fa.length;r++)ft(fa[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Eh(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":wh(i,s),ft("invalid",i)}wu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",""+o]):Ta.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ft("scroll",i)}switch(n){case"input":no(i),Th(i,s,!0);break;case"textarea":no(i),Ah(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Km(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[li]=e,t[Ia]=i,S_(t,e,!1,!1),e.stateNode=t;e:{switch(a=Au(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<fa.length;r++)ft(fa[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Eh(t,i),r=Su(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":wh(t,i),r=Eu(t,i),ft("invalid",t);break;default:r=i}wu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Jm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&af(t,s,l,a))}switch(n){case"input":no(t),Th(t,i,!1);break;case"textarea":no(t),Ah(t);break;case"option":i.value!=null&&t.setAttribute("value",""+mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)M_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Lr(Fa.current),Lr(fi.current),fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:uo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return qt(e),null;case 13:if(ht(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&Mn!==null&&e.mode&1&&!(e.flags&128))zg(),Is(),e.flags|=98560,s=!1;else if(s=fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[li]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Xn!==null&&(ad(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Ut===0&&(Ut=3):Vf())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Fs(),Qu(t,e),t===null&&Da(e.stateNode.containerInfo),qt(e),null;case 10:return wf(e.type._context),qt(e),null;case 17:return dn(e.type)&&gl(),qt(e),null;case 19:if(ht(_t),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ea(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=El(t),a!==null){for(e.flags|=128,ea(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Bs&&(e.flags|=128,i=!0,ea(s,!1),e.lanes=4194304)}else{if(!i)if(t=El(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return qt(e),null}else 2*At()-s.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,i=!0,ea(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=_t.current,ct(_t,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Gf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function zx(t,e){switch(yf(e),e.tag){case 1:return dn(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),ht(un),ht(Qt),Pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bf(e),null;case 13:if(ht(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(_t),null;case 4:return Fs(),null;case 10:return wf(e.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var mo=!1,Kt=!1,Gx=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function Ju(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var mp=!1;function Vx(t,e){if(Fu=fl,t=Rg(),xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:t,selectionRange:n},fl=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,g=_.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:Hn(e.type,E),g);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){Mt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return _=mp,mp=!1,_}function ya(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ju(e,n,s)}r=r.next}while(r!==i)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E_(t){var e=t.alternate;e!==null&&(t.alternate=null,E_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Ia],delete e[zu],delete e[Tx],delete e[wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T_(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}function nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}var Gt=null,Wn=!1;function ji(t,e,n){for(n=n.child;n!==null;)w_(t,e,n),n=n.sibling}function w_(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Kt||Ms(n,e);case 6:var i=Gt,r=Wn;Gt=null,ji(t,e,n),Gt=i,Wn=r,Gt!==null&&(Wn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Wn?(t=Gt,n=n.stateNode,t.nodeType===8?Ec(t.parentNode,n):t.nodeType===1&&Ec(t,n),ba(t)):Ec(Gt,n.stateNode));break;case 4:i=Gt,r=Wn,Gt=n.stateNode.containerInfo,Wn=!0,ji(t,e,n),Gt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ju(n,e,a),r=r.next}while(r!==i)}ji(t,e,n);break;case 1:if(!Kt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Mt(n,e,o)}ji(t,e,n);break;case 21:ji(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,ji(t,e,n),Kt=i):ji(t,e,n);break;default:ji(t,e,n)}}function _p(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Gx),e.forEach(function(i){var r=Zx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,Wn=!1;break e;case 3:Gt=o.stateNode.containerInfo,Wn=!0;break e;case 4:Gt=o.stateNode.containerInfo,Wn=!0;break e}o=o.return}if(Gt===null)throw Error(ne(160));w_(s,a,r),Gt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A_(e,t),e=e.sibling}function A_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),ti(t),i&4){try{ya(3,t,t.return),ql(3,t)}catch(E){Mt(t,t.return,E)}try{ya(5,t,t.return)}catch(E){Mt(t,t.return,E)}}break;case 1:kn(e,t),ti(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(kn(e,t),ti(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{wa(r,"")}catch(E){Mt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&$m(r,s),Au(o,a);var c=Au(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?Jm(r,h):f==="dangerouslySetInnerHTML"?Zm(r,h):f==="children"?wa(r,h):af(r,f,h,c)}switch(o){case"input":yu(r,s);break;case"textarea":Ym(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ts(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ia]=s}catch(E){Mt(t,t.return,E)}}break;case 6:if(kn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Mt(t,t.return,E)}}break;case 3:if(kn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(E){Mt(t,t.return,E)}break;case 4:kn(e,t),ti(t);break;case 13:kn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kf=At())),i&4&&_p(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||f,kn(e,t),Kt=c):kn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Me=t,f=t.child;f!==null;){for(h=Me=f;Me!==null;){switch(d=Me,m=d.child,d.tag){case 0:case 11:case 14:case 15:ya(4,d,d.return);break;case 1:Ms(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){Mt(i,n,E)}}break;case 5:Ms(d,d.return);break;case 22:if(d.memoizedState!==null){xp(h);continue}}m!==null?(m.return=d,Me=m):xp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Qm("display",a))}catch(E){Mt(t,t.return,E)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){Mt(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),ti(t),i&4&&_p(t);break;case 21:break;default:kn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var s=gp(t);nd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=gp(t);td(t,o,a);break;default:throw Error(ne(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hx(t,e,n){Me=t,R_(t)}function R_(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||mo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Kt;o=mo;var c=Kt;if(mo=a,(Kt=l)&&!c)for(Me=r;Me!==null;)a=Me,l=a.child,a.tag===22&&a.memoizedState!==null?Sp(r):l!==null?(l.return=a,Me=l):Sp(r);for(;s!==null;)Me=s,R_(s),s=s.sibling;Me=r,mo=o,Kt=c}vp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):vp(t)}}function vp(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&np(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}np(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ba(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Kt||e.flags&512&&ed(e)}catch(d){Mt(e,e.return,d)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function xp(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Sp(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{ed(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{ed(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){Me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Me=o;break}Me=e.return}}var Wx=Math.ceil,Al=Vi.ReactCurrentDispatcher,Of=Vi.ReactCurrentOwner,Un=Vi.ReactCurrentBatchConfig,Ye=0,zt=null,bt=null,Ht=0,Sn=0,Es=xr(0),Ut=0,za=null,Gr=0,$l=0,Bf=0,Ma=null,ln=null,kf=0,Bs=1/0,Ti=null,Rl=!1,id=null,fr=null,go=!1,sr=null,Cl=0,Ea=0,rd=null,Qo=-1,Jo=0;function nn(){return Ye&6?At():Qo!==-1?Qo:Qo=At()}function hr(t){return t.mode&1?Ye&2&&Ht!==0?Ht&-Ht:Rx.transition!==null?(Jo===0&&(Jo=dg()),Jo):(t=et,t!==0||(t=window.event,t=t===void 0?16:vg(t.type)),t):1}function Kn(t,e,n,i){if(50<Ea)throw Ea=0,rd=null,Error(ne(185));Wa(t,n,i),(!(Ye&2)||t!==zt)&&(t===zt&&(!(Ye&2)&&($l|=n),Ut===4&&nr(t,Ht)),fn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Bs=At()+500,Wl&&Sr()))}function fn(t,e){var n=t.callbackNode;Rv(t,e);var i=dl(t,t===zt?Ht:0);if(i===0)n!==null&&bh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bh(n),e===1)t.tag===0?Ax(yp.bind(null,t)):Og(yp.bind(null,t)),Mx(function(){!(Ye&6)&&Sr()}),n=null;else{switch(fg(i)){case 1:n=df;break;case 4:n=cg;break;case 16:n=ul;break;case 536870912:n=ug;break;default:n=ul}n=U_(n,C_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C_(t,e){if(Qo=-1,Jo=0,Ye&6)throw Error(ne(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var i=dl(t,t===zt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var r=Ye;Ye|=2;var s=P_();(zt!==t||Ht!==e)&&(Ti=null,Bs=At()+500,Fr(t,e));do try{qx();break}catch(o){b_(t,o)}while(!0);Tf(),Al.current=s,Ye=r,bt!==null?e=0:(zt=null,Ht=0,e=Ut)}if(e!==0){if(e===2&&(r=Nu(t),r!==0&&(i=r,e=sd(t,r))),e===1)throw n=za,Fr(t,0),nr(t,i),fn(t,At()),n;if(e===6)nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Xx(r)&&(e=bl(t,i),e===2&&(s=Nu(t),s!==0&&(i=s,e=sd(t,s))),e===1))throw n=za,Fr(t,0),nr(t,i),fn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Rr(t,ln,Ti);break;case 3:if(nr(t,i),(i&130023424)===i&&(e=kf+500-At(),10<e)){if(dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ku(Rr.bind(null,t,ln,Ti),e);break}Rr(t,ln,Ti);break;case 4:if(nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Yn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Wx(i/1960))-i,10<i){t.timeoutHandle=ku(Rr.bind(null,t,ln,Ti),i);break}Rr(t,ln,Ti);break;case 5:Rr(t,ln,Ti);break;default:throw Error(ne(329))}}}return fn(t,At()),t.callbackNode===n?C_.bind(null,t):null}function sd(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=bl(t,e),t!==2&&(e=ln,ln=n,e!==null&&ad(e)),t}function ad(t){ln===null?ln=t:ln.push.apply(ln,t)}function Xx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Bf,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function yp(t){if(Ye&6)throw Error(ne(327));bs();var e=dl(t,0);if(!(e&1))return fn(t,At()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var i=Nu(t);i!==0&&(e=i,n=sd(t,i))}if(n===1)throw n=za,Fr(t,0),nr(t,e),fn(t,At()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,ln,Ti),fn(t,At()),null}function zf(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Bs=At()+500,Wl&&Sr())}}function Vr(t){sr!==null&&sr.tag===0&&!(Ye&6)&&bs();var e=Ye;Ye|=1;var n=Un.transition,i=et;try{if(Un.transition=null,et=1,t)return t()}finally{et=i,Un.transition=n,Ye=e,!(Ye&6)&&Sr()}}function Gf(){Sn=Es.current,ht(Es)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yx(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(yf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gl();break;case 3:Fs(),ht(un),ht(Qt),Pf();break;case 5:bf(i);break;case 4:Fs();break;case 13:ht(_t);break;case 19:ht(_t);break;case 10:wf(i.type._context);break;case 22:case 23:Gf()}n=n.return}if(zt=t,bt=t=pr(t.current,null),Ht=Sn=e,Ut=0,za=null,Bf=$l=Gr=0,ln=Ma=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Dr=null}return t}function b_(t,e){do{var n=bt;try{if(Tf(),Yo.current=wl,Tl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(zr=0,kt=It=vt=null,Sa=!1,Oa=0,Of.current=null,n===null||n.return===null){Ut=1,za=e,bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=lp(a);if(m!==null){m.flags&=-257,cp(m,a,o,s,e),m.mode&1&&op(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var E=new Set;E.add(l),e.updateQueue=E}else _.add(l);break e}else{if(!(e&1)){op(s,c,e),Vf();break e}l=Error(ne(426))}}else if(pt&&o.mode&1){var g=lp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),cp(g,a,o,s,e),Mf(Os(l,o));break e}}s=l=Os(l,o),Ut!==4&&(Ut=2),Ma===null?Ma=[s]:Ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=f_(s,l,e);tp(s,u);break e;case 1:o=l;var p=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(fr===null||!fr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=h_(s,o,e);tp(s,M);break e}}s=s.return}while(s!==null)}D_(n)}catch(R){e=R,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function P_(){var t=Al.current;return Al.current=wl,t===null?wl:t}function Vf(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),zt===null||!(Gr&268435455)&&!($l&268435455)||nr(zt,Ht)}function bl(t,e){var n=Ye;Ye|=2;var i=P_();(zt!==t||Ht!==e)&&(Ti=null,Fr(t,e));do try{jx();break}catch(r){b_(t,r)}while(!0);if(Tf(),Ye=n,Al.current=i,bt!==null)throw Error(ne(261));return zt=null,Ht=0,Ut}function jx(){for(;bt!==null;)N_(bt)}function qx(){for(;bt!==null&&!vv();)N_(bt)}function N_(t){var e=I_(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?D_(t):bt=e,Of.current=null}function D_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zx(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,bt=null;return}}else if(n=kx(n,e,Sn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Rr(t,e,n){var i=et,r=Un.transition;try{Un.transition=null,et=1,$x(t,e,n,i)}finally{Un.transition=r,et=i}return null}function $x(t,e,n,i){do bs();while(sr!==null);if(Ye&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Cv(t,s),t===zt&&(bt=zt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,U_(ul,function(){return bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var a=et;et=1;var o=Ye;Ye|=4,Of.current=null,Vx(t,n),A_(n,t),px(Ou),fl=!!Fu,Ou=Fu=null,t.current=n,Hx(n),xv(),Ye=o,et=a,Un.transition=s}else t.current=n;if(go&&(go=!1,sr=t,Cl=r),s=t.pendingLanes,s===0&&(fr=null),Mv(n.stateNode),fn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=id,id=null,t;return Cl&1&&t.tag!==0&&bs(),s=t.pendingLanes,s&1?t===rd?Ea++:(Ea=0,rd=t):Ea=0,Sr(),null}function bs(){if(sr!==null){var t=fg(Cl),e=Un.transition,n=et;try{if(Un.transition=null,et=16>t?16:t,sr===null)var i=!1;else{if(t=sr,sr=null,Cl=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,Me=t.current;Me!==null;){var s=Me,a=s.child;if(Me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Me=c;Me!==null;){var f=Me;switch(f.tag){case 0:case 11:case 15:ya(8,f,s)}var h=f.child;if(h!==null)h.return=f,Me=h;else for(;Me!==null;){f=Me;var d=f.sibling,m=f.return;if(E_(f),f===c){Me=null;break}if(d!==null){d.return=m,Me=d;break}Me=m}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}Me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Me=a;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ya(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Me=u;break e}Me=s.return}}var p=t.current;for(Me=p;Me!==null;){a=Me;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Me=S;else e:for(a=p;Me!==null;){if(o=Me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ql(9,o)}}catch(R){Mt(o,o.return,R)}if(o===a){Me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Me=M;break e}Me=o.return}}if(Ye=r,Sr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{et=n,Un.transition=e}}return!1}function Mp(t,e,n){e=Os(n,e),e=f_(t,e,1),t=dr(t,e,1),e=nn(),t!==null&&(Wa(t,1,e),fn(t,e))}function Mt(t,e,n){if(t.tag===3)Mp(t,t,n);else for(;e!==null;){if(e.tag===3){Mp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=Os(n,t),t=h_(e,t,1),e=dr(e,t,1),t=nn(),e!==null&&(Wa(e,1,t),fn(e,t));break}}e=e.return}}function Yx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Ht&n)===n&&(Ut===4||Ut===3&&(Ht&130023424)===Ht&&500>At()-kf?Fr(t,0):Bf|=n),fn(t,e)}function L_(t,e){e===0&&(t.mode&1?(e=so,so<<=1,!(so&130023424)&&(so=4194304)):e=1);var n=nn();t=Oi(t,e),t!==null&&(Wa(t,e,n),fn(t,n))}function Kx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),L_(t,n)}function Zx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),L_(t,n)}var I_;I_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,Bx(t,e,n);cn=!!(t.flags&131072)}else cn=!1,pt&&e.flags&1048576&&Bg(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zo(t,e),t=e.pendingProps;var r=Ls(e,Qt.current);Cs(e,n),r=Df(null,e,i,t,r,n);var s=Lf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,_l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rf(e),r.updater=jl,e.stateNode=r,r._reactInternals=e,ju(e,i,t,n),e=Yu(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Sf(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Jx(i),t=Hn(i,t),r){case 0:e=$u(null,e,i,t,n);break e;case 1:e=fp(null,e,i,t,n);break e;case 11:e=up(null,e,i,t,n);break e;case 14:e=dp(null,e,i,Hn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),$u(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),fp(t,e,i,r,n);case 3:e:{if(__(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Wg(t,e),Ml(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Os(Error(ne(423)),e),e=hp(t,e,i,n,r);break e}else if(i!==r){r=Os(Error(ne(424)),e),e=hp(t,e,i,n,r);break e}else for(Mn=ur(e.stateNode.containerInfo.firstChild),En=e,pt=!0,Xn=null,n=Vg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),i===r){e=Bi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return Xg(e),t===null&&Hu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Bu(i,r)?a=null:s!==null&&Bu(i,s)&&(e.flags|=32),g_(t,e),tn(t,e,a,n),e.child;case 6:return t===null&&Hu(e),null;case 13:return v_(t,e,n);case 4:return Cf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Us(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),up(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(Sl,i._currentValue),i._currentValue=a,s!==null)if(Zn(s.value,a)){if(s.children===r.children&&!un.current){e=Bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Wu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Cs(e,n),r=On(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),dp(t,e,i,r,n);case 15:return p_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Zo(t,e),e.tag=1,dn(i)?(t=!0,_l(e)):t=!1,Cs(e,n),d_(e,i,r),ju(e,i,r,n),Yu(null,e,i,!0,t,n);case 19:return x_(t,e,n);case 22:return m_(t,e,n)}throw Error(ne(156,e.tag))};function U_(t,e){return lg(t,e)}function Qx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new Qx(t,e,n,i)}function Hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jx(t){if(typeof t=="function")return Hf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lf)return 11;if(t===cf)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Hf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case hs:return Or(n.children,r,s,e);case of:a=8,r|=8;break;case gu:return t=In(12,n,e,r|2),t.elementType=gu,t.lanes=s,t;case _u:return t=In(13,n,e,r),t.elementType=_u,t.lanes=s,t;case vu:return t=In(19,n,e,r),t.elementType=vu,t.lanes=s,t;case Xm:return Yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hm:a=10;break e;case Wm:a=9;break e;case lf:a=11;break e;case cf:a=14;break e;case Ji:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=In(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function Yl(t,e,n,i){return t=In(22,t,i,e),t.elementType=Xm,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Dc(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wf(t,e,n,i,r,s,a,o,l){return t=new eS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(s),t}function tS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function F_(t){if(!t)return gr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(dn(n))return Fg(t,n,e)}return e}function O_(t,e,n,i,r,s,a,o,l){return t=Wf(n,i,!0,t,r,s,a,o,l),t.context=F_(null),n=t.current,i=nn(),r=hr(n),s=Ni(i,r),s.callback=e??null,dr(n,s,r),t.current.lanes=r,Wa(t,r,i),fn(t,i),t}function Kl(t,e,n,i){var r=e.current,s=nn(),a=hr(r);return n=F_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=dr(r,e,a),t!==null&&(Kn(t,r,a,s),$o(t,r,a)),a}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xf(t,e){Ep(t,e),(t=t.alternate)&&Ep(t,e)}function nS(){return null}var B_=typeof reportError=="function"?reportError:function(t){console.error(t)};function jf(t){this._internalRoot=t}Zl.prototype.render=jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Kl(t,e,null,null)};Zl.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Kl(null,t,null,null)}),e[Fi]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=mg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&_g(t)}};function qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function iS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Pl(a);s.call(c)}}var a=O_(e,i,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=a,t[Fi]=a.current,Da(t.nodeType===8?t.parentNode:t),Vr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Pl(l);o.call(c)}}var l=Wf(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=l,t[Fi]=l.current,Da(t.nodeType===8?t.parentNode:t),Vr(function(){Kl(e,l,n,i)}),l}function Jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Pl(a);o.call(l)}}Kl(e,a,t,r)}else a=iS(n,e,t,r,i);return Pl(a)}hg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(ff(e,n|1),fn(e,At()),!(Ye&6)&&(Bs=At()+500,Sr()))}break;case 13:Vr(function(){var i=Oi(t,1);if(i!==null){var r=nn();Kn(i,t,1,r)}}),Xf(t,1)}};hf=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=nn();Kn(e,t,134217728,n)}Xf(t,134217728)}};pg=function(t){if(t.tag===13){var e=hr(t),n=Oi(t,e);if(n!==null){var i=nn();Kn(n,t,e,i)}Xf(t,e)}};mg=function(){return et};gg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Cu=function(t,e,n){switch(e){case"input":if(yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Hl(i);if(!r)throw Error(ne(90));qm(i),yu(i,r)}}}break;case"textarea":Ym(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};ng=zf;ig=Vr;var rS={usingClientEntryPoint:!1,Events:[ja,_s,Hl,eg,tg,zf]},ta={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sS={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ag(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||nS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{kl=_o.inject(sS),di=_o}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qf(e))throw Error(ne(200));return tS(t,e,null,n)};wn.createRoot=function(t,e){if(!qf(t))throw Error(ne(299));var n=!1,i="",r=B_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wf(t,1,!1,null,null,n,!1,i,r),t[Fi]=e.current,Da(t.nodeType===8?t.parentNode:t),new jf(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=ag(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Vr(t)};wn.hydrate=function(t,e,n){if(!Ql(e))throw Error(ne(200));return Jl(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!qf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=B_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=O_(e,null,t,1,n??null,r,!1,s,a),t[Fi]=e.current,Da(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Zl(e)};wn.render=function(t,e,n){if(!Ql(e))throw Error(ne(200));return Jl(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(ne(40));return t._reactRootContainer?(Vr(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1};wn.unstable_batchedUpdates=zf;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Jl(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function k_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k_)}catch(t){console.error(t)}}k_(),km.exports=wn;var aS=km.exports,wp=aS;pu.createRoot=wp.createRoot,pu.hydrateRoot=wp.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $f="184",oS=0,Ap=1,lS=2,tl=1,cS=2,ha=3,_r=0,hn=1,Ai=2,Di=0,Ps=1,Rp=2,Cp=3,bp=4,uS=5,br=100,dS=101,fS=102,hS=103,pS=104,mS=200,gS=201,_S=202,vS=203,od=204,ld=205,xS=206,SS=207,yS=208,MS=209,ES=210,TS=211,wS=212,AS=213,RS=214,cd=0,ud=1,dd=2,ks=3,fd=4,hd=5,pd=6,md=7,z_=0,CS=1,bS=2,hi=0,G_=1,V_=2,H_=3,W_=4,X_=5,j_=6,q_=7,$_=300,Hr=301,zs=302,Lc=303,Ic=304,ec=306,gd=1e3,bi=1001,_d=1002,Vt=1003,PS=1004,vo=1005,Zt=1006,Uc=1007,Ir=1008,Ln=1009,Y_=1010,K_=1011,Ga=1012,Yf=1013,mi=1014,ci=1015,ki=1016,Kf=1017,Zf=1018,Va=1020,Z_=35902,Q_=35899,J_=1021,e0=1022,$n=1023,zi=1026,Ur=1027,t0=1028,Qf=1029,Wr=1030,Jf=1031,eh=1033,nl=33776,il=33777,rl=33778,sl=33779,vd=35840,xd=35841,Sd=35842,yd=35843,Md=36196,Ed=37492,Td=37496,wd=37488,Ad=37489,Nl=37490,Rd=37491,Cd=37808,bd=37809,Pd=37810,Nd=37811,Dd=37812,Ld=37813,Id=37814,Ud=37815,Fd=37816,Od=37817,Bd=37818,kd=37819,zd=37820,Gd=37821,Vd=36492,Hd=36494,Wd=36495,Xd=36283,jd=36284,Dl=36285,qd=36286,NS=3200,Pp=0,DS=1,ir="",bn="srgb",Ll="srgb-linear",Il="linear",Je="srgb",Qr=7680,Np=519,LS=512,IS=513,US=514,th=515,FS=516,OS=517,nh=518,BS=519,Dp=35044,Lp="300 es",ui=2e3,Ul=2001;function kS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zS(){const t=Fl("canvas");return t.style.display="block",t}const Ip={};function Up(...t){const e="THREE."+t.shift();console.log(e,...t)}function n0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function be(...t){t=n0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=n0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function $d(...t){const e=t.join(" ");e in Ip||(Ip[e]=!0,be(...t))}function GS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const VS={[cd]:ud,[dd]:pd,[fd]:md,[ks]:hd,[ud]:cd,[pd]:dd,[md]:fd,[hd]:ks};class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=Math.PI/180,Yd=180/Math.PI;function $a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function HS(t,e){return(t%e+e)%e}function Oc(t,e,n){return(1-n)*t+n*e}function na(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const rh=class rh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rh.prototype.isVector2=!0;let rt=rh;class js{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[a+0],m=s[a+1],_=s[a+2],E=s[a+3];if(h!==E||l!==d||c!==m||f!==_){let g=l*d+c*m+f*_+h*E;g<0&&(d=-d,m=-m,_=-_,E=-E,g=-g);let u=1-o;if(g<.9995){const p=Math.acos(g),S=Math.sin(p);u=Math.sin(u*p)/S,o=Math.sin(o*p)/S,l=l*u+d*o,c=c*u+m*o,f=f*u+_*o,h=h*u+E*o}else{l=l*u+d*o,c=c*u+m*o,f=f*u+_*o,h=h*u+E*o;const p=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=p,c*=p,f*=p,h*=p}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+f*h+l*m-c*d,e[n+1]=l*_+f*d+c*h-o*m,e[n+2]=c*_+f*m+o*d-l*h,e[n+3]=f*_-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h-d*m*_;break;case"YXZ":this._x=d*f*h+c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h+d*m*_;break;case"ZXY":this._x=d*f*h-c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h-d*m*_;break;case"ZYX":this._x=d*f*h-c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h+d*m*_;break;case"YZX":this._x=d*f*h+c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h-d*m*_;break;case"XZY":this._x=d*f*h-c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h+d*m*_;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sh=class sh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;let V=sh;const Bc=new V,Fp=new js,ah=class ah{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],_=i[8],E=r[0],g=r[3],u=r[6],p=r[1],S=r[4],M=r[7],R=r[2],T=r[5],A=r[8];return s[0]=a*E+o*p+l*R,s[3]=a*g+o*S+l*T,s[6]=a*u+o*M+l*A,s[1]=c*E+f*p+h*R,s[4]=c*g+f*S+h*T,s[7]=c*u+f*M+h*A,s[2]=d*E+m*p+_*R,s[5]=d*g+m*S+_*T,s[8]=d*u+m*M+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,m=c*s-a*l,_=n*h+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=h*E,e[1]=(r*c-f*i)*E,e[2]=(o*i-r*a)*E,e[3]=d*E,e[4]=(f*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=m*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(kc.makeScale(e,n)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,n){return this.premultiply(kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ah.prototype.isMatrix3=!0;let Le=ah;const kc=new Le,Op=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bp=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WS(){const t={enabled:!0,workingColorSpace:Ll,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=Ns(r.r),r.g=Ns(r.g),r.b=Ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?Il:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $d("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $d("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ll]:{primaries:e,whitePoint:i,transfer:Il,toXYZ:Op,fromXYZ:Bp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:Op,fromXYZ:Bp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),t}const Xe=WS();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ns(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Jr;class XS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jr===void 0&&(Jr=Fl("canvas")),Jr.width=e.width,Jr.height=e.height;const r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zc(r[a].image)):s.push(zc(r[a]))}else s=zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?XS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}let qS=0;const Gc=new V;class rn extends $r{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=bi,r=bi,s=Zt,a=Ir,o=$n,l=Ln,c=rn.DEFAULT_ANISOTROPY,f=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=$a(),this.name="",this.source=new ih(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=$_;rn.DEFAULT_ANISOTROPY=1;const oh=class oh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],_=l[9],E=l[2],g=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-E)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+E)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,M=(m+1)/2,R=(u+1)/2,T=(f+d)/4,A=(h+E)/4,x=(_+g)/4;return S>M&&S>R?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=T/i,s=A/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=x/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=x/s),this.set(i,r,s,n),this}let p=Math.sqrt((g-_)*(g-_)+(h-E)*(h-E)+(d-f)*(d-f));return Math.abs(p)<.001&&(p=1),this.x=(g-_)/p,this.y=(h-E)/p,this.z=(d-f)/p,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};oh.prototype.isVector4=!0;let Rt=oh;class $S extends $r{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new rn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ih(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends $S{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class i0 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YS extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ol=class Ol{constructor(e,n,i,r,s,a,o,l,c,f,h,d,m,_,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,m,_,E,g)}set(e,n,i,r,s,a,o,l,c,f,h,d,m,_,E,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=_,u[11]=E,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ol().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,m=a*h,_=o*f,E=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=d-E*c,n[9]=-o*l,n[2]=E-d*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,_=c*f,E=c*h;n[0]=d+E*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=m*o-_,n[6]=E+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,_=c*f,E=c*h;n[0]=d-E*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*f,n[9]=E-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,m=a*h,_=o*f,E=o*h;n[0]=l*f,n[4]=_*c-m,n[8]=d*c+E,n[1]=l*h,n[5]=E*c+d,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,E=o*c;n[0]=l*f,n[4]=E-d*h,n[8]=_*h+m,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*h+_,n[10]=d-E*h}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,E=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+E,n[5]=a*f,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*f,n[10]=E*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KS,e,ZS)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),qi.crossVectors(i,_n),qi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),qi.crossVectors(i,_n)),qi.normalize(),xo.crossVectors(_n,qi),r[0]=qi.x,r[4]=xo.x,r[8]=_n.x,r[1]=qi.y,r[5]=xo.y,r[9]=_n.y,r[2]=qi.z,r[6]=xo.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],_=i[2],E=i[6],g=i[10],u=i[14],p=i[3],S=i[7],M=i[11],R=i[15],T=r[0],A=r[4],x=r[8],C=r[12],N=r[1],b=r[5],k=r[9],q=r[13],J=r[2],U=r[6],W=r[10],B=r[14],O=r[3],X=r[7],Q=r[11],ae=r[15];return s[0]=a*T+o*N+l*J+c*O,s[4]=a*A+o*b+l*U+c*X,s[8]=a*x+o*k+l*W+c*Q,s[12]=a*C+o*q+l*B+c*ae,s[1]=f*T+h*N+d*J+m*O,s[5]=f*A+h*b+d*U+m*X,s[9]=f*x+h*k+d*W+m*Q,s[13]=f*C+h*q+d*B+m*ae,s[2]=_*T+E*N+g*J+u*O,s[6]=_*A+E*b+g*U+u*X,s[10]=_*x+E*k+g*W+u*Q,s[14]=_*C+E*q+g*B+u*ae,s[3]=p*T+S*N+M*J+R*O,s[7]=p*A+S*b+M*U+R*X,s[11]=p*x+S*k+M*W+R*Q,s[15]=p*C+S*q+M*B+R*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],_=e[3],E=e[7],g=e[11],u=e[15],p=l*m-c*d,S=o*m-c*h,M=o*d-l*h,R=a*m-c*f,T=a*d-l*f,A=a*h-o*f;return n*(E*p-g*S+u*M)-i*(_*p-g*R+u*T)+r*(_*S-E*R+u*A)-s*(_*M-E*T+g*A)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],_=e[12],E=e[13],g=e[14],u=e[15],p=n*o-i*a,S=n*l-r*a,M=n*c-s*a,R=i*l-r*o,T=i*c-s*o,A=r*c-s*l,x=f*E-h*_,C=f*g-d*_,N=f*u-m*_,b=h*g-d*E,k=h*u-m*E,q=d*u-m*g,J=p*q-S*k+M*b+R*N-T*C+A*x;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/J;return e[0]=(o*q-l*k+c*b)*U,e[1]=(r*k-i*q-s*b)*U,e[2]=(E*A-g*T+u*R)*U,e[3]=(d*T-h*A-m*R)*U,e[4]=(l*N-a*q-c*C)*U,e[5]=(n*q-r*N+s*C)*U,e[6]=(g*M-_*A-u*S)*U,e[7]=(f*A-d*M+m*S)*U,e[8]=(a*k-o*N+c*x)*U,e[9]=(i*N-n*k-s*x)*U,e[10]=(_*T-E*M+u*p)*U,e[11]=(h*M-f*T-m*p)*U,e[12]=(o*C-a*b-l*x)*U,e[13]=(n*b-i*C+r*x)*U,e[14]=(E*S-_*R-g*p)*U,e[15]=(f*R-h*S+d*p)*U,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,m=s*f,_=s*h,E=a*f,g=a*h,u=o*h,p=l*c,S=l*f,M=l*h,R=i.x,T=i.y,A=i.z;return r[0]=(1-(E+u))*R,r[1]=(m+M)*R,r[2]=(_-S)*R,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(d+u))*T,r[6]=(g+p)*T,r[7]=0,r[8]=(_+S)*A,r[9]=(g-p)*A,r[10]=(1-(d+E))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=es.set(r[0],r[1],r[2]).length();const o=es.set(r[4],r[5],r[6]).length(),l=es.set(r[8],r[9],r[10]).length();s<0&&(a=-a),zn.copy(this);const c=1/a,f=1/o,h=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=f,zn.elements[5]*=f,zn.elements[6]*=f,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,n.setFromRotationMatrix(zn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ui,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let _,E;if(l)_=s/(a-s),E=a*s/(a-s);else if(o===ui)_=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Ul)_=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,E;if(l)_=1/(a-s),E=a/(a-s);else if(o===ui)_=-2/(a-s),E=-(a+s)/(a-s);else if(o===Ul)_=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ol.prototype.isMatrix4=!0;let Pt=Ol;const es=new V,zn=new Pt,KS=new V(0,0,0),ZS=new V(1,1,1),qi=new V,xo=new V,_n=new V,kp=new Pt,zp=new js;class Xr{constructor(e=0,n=0,i=0,r=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class r0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QS=0;const Gp=new V,ts=new js,vi=new Pt,So=new V,ia=new V,JS=new V,ey=new js,Vp=new V(1,0,0),Hp=new V(0,1,0),Wp=new V(0,0,1),Xp={type:"added"},ty={type:"removed"},ns={type:"childadded",child:null},Vc={type:"childremoved",child:null};class pn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new V,n=new Xr,i=new js,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Le}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,n){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?So.copy(e):So.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ia,So,this.up):vi.lookAt(So,ia,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(vi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xp),ns.child=e,this.dispatchEvent(ns),ns.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ty),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xp),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,JS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,ey,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pn.DEFAULT_UP=new V(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yo extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ny={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),u=this._getHandJoint(c,E);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ny)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const s0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function Wc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=HS(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Wc(a,s,e+1/3),this.g=Wc(a,s,e),this.b=Wc(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=s0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Xe.workingToColorSpace(Yt.copy(this),e),Math.round(je(Yt.r*255,0,255))*65536+Math.round(je(Yt.g*255,0,255))*256+Math.round(je(Yt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=bn){Xe.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(Mo);const i=Oc($i.h,Mo.h,n),r=Oc($i.s,Mo.s,n),s=Oc($i.l,Mo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ze;Ze.NAMES=s0;class iy extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gn=new V,xi=new V,Xc=new V,Si=new V,is=new V,rs=new V,jp=new V,jc=new V,qc=new V,$c=new V,Yc=new Rt,Kc=new Rt,Zc=new Rt;class jn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),xi.subVectors(i,n),Xc.subVectors(e,n);const a=Gn.dot(Gn),o=Gn.dot(xi),l=Gn.dot(Xc),c=xi.dot(xi),f=xi.dot(Xc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*f)*d,_=(a*f-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Yc.setScalar(0),Kc.setScalar(0),Zc.setScalar(0),Yc.fromBufferAttribute(e,n),Kc.fromBufferAttribute(e,i),Zc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yc,s.x),a.addScaledVector(Kc,s.y),a.addScaledVector(Zc,s.z),a}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),xi.subVectors(e,n),Gn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Gn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;is.subVectors(r,i),rs.subVectors(s,i),jc.subVectors(e,i);const l=is.dot(jc),c=rs.dot(jc);if(l<=0&&c<=0)return n.copy(i);qc.subVectors(e,r);const f=is.dot(qc),h=rs.dot(qc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(is,a);$c.subVectors(e,s);const m=is.dot($c),_=rs.dot($c);if(_>=0&&m<=_)return n.copy(s);const E=m*c-l*_;if(E<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(rs,o);const g=f*_-m*h;if(g<=0&&h-f>=0&&m-_>=0)return jp.subVectors(s,r),o=(h-f)/(h-f+(m-_)),n.copy(r).addScaledVector(jp,o);const u=1/(g+E+d);return a=E*u,o=d*u,n.copy(i).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ya{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(s,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),To.subVectors(this.max,ra),ss.subVectors(e.a,ra),as.subVectors(e.b,ra),os.subVectors(e.c,ra),Yi.subVectors(as,ss),Ki.subVectors(os,as),Mr.subVectors(ss,os);let n=[0,-Yi.z,Yi.y,0,-Ki.z,Ki.y,0,-Mr.z,Mr.y,Yi.z,0,-Yi.x,Ki.z,0,-Ki.x,Mr.z,0,-Mr.x,-Yi.y,Yi.x,0,-Ki.y,Ki.x,0,-Mr.y,Mr.x,0];return!Qc(n,ss,as,os,To)||(n=[1,0,0,0,1,0,0,0,1],!Qc(n,ss,as,os,To))?!1:(wo.crossVectors(Yi,Ki),n=[wo.x,wo.y,wo.z],Qc(n,ss,as,os,To))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new V,new V,new V,new V,new V,new V,new V,new V],Vn=new V,Eo=new Ya,ss=new V,as=new V,os=new V,Yi=new V,Ki=new V,Mr=new V,ra=new V,To=new V,wo=new V,Er=new V;function Qc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Er.fromArray(t,s);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),f=i.dot(Er);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Ct=new V,Ao=new rt;let ry=0;class Fn extends $r{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ry++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Dp,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ao.fromBufferAttribute(this,n),Ao.applyMatrix3(e),this.setXY(n,Ao.x,Ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=na(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=na(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=na(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class a0 extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o0 extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ii extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const sy=new Ya,sa=new V,Jc=new V;class tc{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Jc)),this.expandByPoint(sa.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ay=0;const Cn=new Pt,eu=new pn,ls=new V,vn=new Ya,aa=new Ya,Bt=new V;class Qn extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kS(e)?o0:a0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ii(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(vn.min,aa.min),vn.expandByPoint(Bt),Bt.addVectors(vn.max,aa.max),vn.expandByPoint(Bt)):(vn.expandByPoint(aa.min),vn.expandByPoint(aa.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Bt.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(e,c),Bt.add(ls)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new V,l[x]=new V;const c=new V,f=new V,h=new V,d=new rt,m=new rt,_=new rt,E=new V,g=new V;function u(x,C,N){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,N),d.fromBufferAttribute(s,x),m.fromBufferAttribute(s,C),_.fromBufferAttribute(s,N),f.sub(c),h.sub(c),m.sub(d),_.sub(d);const b=1/(m.x*_.y-_.x*m.y);isFinite(b)&&(E.copy(f).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(b),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(b),o[x].add(E),o[C].add(E),o[N].add(E),l[x].add(g),l[C].add(g),l[N].add(g))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let x=0,C=p.length;x<C;++x){const N=p[x],b=N.start,k=N.count;for(let q=b,J=b+k;q<J;q+=3)u(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const S=new V,M=new V,R=new V,T=new V;function A(x){R.fromBufferAttribute(r,x),T.copy(R);const C=o[x];S.copy(C),S.sub(R.multiplyScalar(R.dot(C))).normalize(),M.crossVectors(T,C);const b=M.dot(l[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,b)}for(let x=0,C=p.length;x<C;++x){const N=p[x],b=N.start,k=N.count;for(let q=b,J=b+k;q<J;q+=3)A(e.getX(q+0)),A(e.getX(q+1)),A(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,f=new V,h=new V;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),E=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,g),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let m=0,_=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*f;for(let u=0;u<f;u++)d[_++]=c[m++]}return new Fn(d,f,h)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let oy=0;class Ka extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=Ps,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==_r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==od&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Np&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mi=new V,tu=new V,Ro=new V,Zi=new V,nu=new V,Co=new V,iu=new V;class l0{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tu.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),Zi.copy(this.origin).sub(tu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ro),o=Zi.dot(this.direction),l=-Zi.dot(Ro),c=Zi.lengthSq(),f=Math.abs(1-a*a);let h,d,m,_;if(f>0)if(h=a*l-o,d=a*o-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const E=1/f;h*=E,d*=E,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(tu).addScaledVector(Ro,d),m}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){nu.subVectors(n,e),Co.subVectors(i,e),iu.crossVectors(nu,Co);let a=this.direction.dot(iu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,e);const l=o*this.direction.dot(Co.crossVectors(Zi,Co));if(l<0)return null;const c=o*this.direction.dot(nu.cross(Zi));if(c<0||l+c>a)return null;const f=-o*Zi.dot(iu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class c0 extends Ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qp=new Pt,Tr=new l0,bo=new tc,$p=new V,Po=new V,No=new V,Do=new V,ru=new V,Lo=new V,Yp=new V,Io=new V;class Gi extends pn{constructor(e=new Qn,n=new c0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(ru.fromBufferAttribute(h,e),a?Lo.addScaledVector(ru,f):Lo.addScaledVector(ru.sub(n),f))}n.add(Lo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(bo.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(bo,$p)===null||Tr.origin.distanceToSquared($p)>(e.far-e.near)**2))&&(qp.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(qp),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=d.length;_<E;_++){const g=d[_],u=a[g.materialIndex],p=Math.max(g.start,m.start),S=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=p,R=S;M<R;M+=3){const T=o.getX(M),A=o.getX(M+1),x=o.getX(M+2);r=Uo(this,u,e,i,c,f,h,T,A,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let g=_,u=E;g<u;g+=3){const p=o.getX(g),S=o.getX(g+1),M=o.getX(g+2);r=Uo(this,a,e,i,c,f,h,p,S,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,E=d.length;_<E;_++){const g=d[_],u=a[g.materialIndex],p=Math.max(g.start,m.start),S=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=p,R=S;M<R;M+=3){const T=M,A=M+1,x=M+2;r=Uo(this,u,e,i,c,f,h,T,A,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let g=_,u=E;g<u;g+=3){const p=g,S=g+1,M=g+2;r=Uo(this,a,e,i,c,f,h,p,S,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function ly(t,e,n,i,r,s,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===_r,o),l===null)return null;Io.copy(o),Io.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Io);return c<n.near||c>n.far?null:{distance:c,point:Io.clone(),object:t}}function Uo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Po),t.getVertexPosition(l,No),t.getVertexPosition(c,Do);const f=ly(t,e,n,i,Po,No,Do,Yp);if(f){const h=new V;jn.getBarycoord(Yp,Po,No,Do,h),r&&(f.uv=jn.getInterpolatedAttribute(r,o,l,c,h,new rt)),s&&(f.uv1=jn.getInterpolatedAttribute(s,o,l,c,h,new rt)),a&&(f.normal=jn.getInterpolatedAttribute(a,o,l,c,h,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new V,materialIndex:0};jn.getNormal(Po,No,Do,d.normal),f.face=d,f.barycoord=h}return f}class cy extends rn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Vt,f=Vt,h,d){super(null,a,o,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const su=new V,uy=new V,dy=new Le;class Cr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=su.subVectors(i,n).cross(uy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(su),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dy.getNormalMatrix(e),r=this.coplanarPoint(su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new tc,fy=new rt(.5,.5),Fo=new V;class u0{constructor(e=new Cr,n=new Cr,i=new Cr,r=new Cr,s=new Cr,a=new Cr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],m=s[7],_=s[8],E=s[9],g=s[10],u=s[11],p=s[12],S=s[13],M=s[14],R=s[15];if(r[0].setComponents(c-a,m-f,u-_,R-p).normalize(),r[1].setComponents(c+a,m+f,u+_,R+p).normalize(),r[2].setComponents(c+o,m+h,u+E,R+S).normalize(),r[3].setComponents(c-o,m-h,u-E,R-S).normalize(),i)r[4].setComponents(l,d,g,M).normalize(),r[5].setComponents(c-l,m-d,u-g,R-M).normalize();else if(r[4].setComponents(c-l,m-d,u-g,R-M).normalize(),n===ui)r[5].setComponents(c+l,m+d,u+g,R+M).normalize();else if(n===Ul)r[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const n=fy.distanceTo(e.center);return wr.radius=.7071067811865476+n,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class d0 extends Ka{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kp=new Pt,Kd=new l0,Oo=new tc,Bo=new V;class hy extends pn{constructor(e=new Qn,n=new d0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;Kp.copy(r).invert(),Kd.copy(e.ray).applyMatrix4(Kp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=d,E=m;_<E;_++){const g=c.getX(_);Bo.fromBufferAttribute(h,g),Zp(Bo,g,l,r,e,n,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=d,E=m;_<E;_++)Bo.fromBufferAttribute(h,_),Zp(Bo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zp(t,e,n,i,r,s,a){const o=Kd.distanceSqToPoint(t);if(o<n){const l=new V;Kd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class f0 extends rn{constructor(e=[],n=Hr,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gs extends rn{constructor(e,n,i=mi,r,s,a,o=Vt,l=Vt,c,f=zi,h=1){if(f!==zi&&f!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ih(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class py extends Gs{constructor(e,n=mi,i=Hr,r,s,a=Vt,o=Vt,l,c=zi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class h0 extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Za extends Qn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(f,3)),this.setAttribute("uv",new Ii(h,2));function _(E,g,u,p,S,M,R,T,A,x,C){const N=M/A,b=R/x,k=M/2,q=R/2,J=T/2,U=A+1,W=x+1;let B=0,O=0;const X=new V;for(let Q=0;Q<W;Q++){const ae=Q*b-q;for(let fe=0;fe<U;fe++){const ke=fe*N-k;X[E]=ke*p,X[g]=ae*S,X[u]=J,c.push(X.x,X.y,X.z),X[E]=0,X[g]=0,X[u]=T>0?1:-1,f.push(X.x,X.y,X.z),h.push(fe/A),h.push(1-Q/x),B+=1}}for(let Q=0;Q<x;Q++)for(let ae=0;ae<A;ae++){const fe=d+ae+U*Q,ke=d+ae+U*(Q+1),Ve=d+(ae+1)+U*(Q+1),Pe=d+(ae+1)+U*Q;l.push(fe,ke,Pe),l.push(ke,Ve,Pe),O+=6}o.addGroup(m,O,C),m+=O,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nc extends Qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,m=[],_=[],E=[],g=[];for(let u=0;u<f;u++){const p=u*d-a;for(let S=0;S<c;S++){const M=S*h-s;_.push(M,-p,0),E.push(0,0,1),g.push(S/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<o;p++){const S=p+c*u,M=p+c*(u+1),R=p+1+c*(u+1),T=p+1+c*u;m.push(S,M,T),m.push(M,R,T)}this.setIndex(m),this.setAttribute("position",new Ii(_,3)),this.setAttribute("normal",new Ii(E,3)),this.setAttribute("uv",new Ii(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Qp(r))r.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Qp(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Vs(t[n]);for(const r in i)e[r]=i[r]}return e}function Qp(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function my(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function p0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const gy={clone:Vs,merge:Jt};var _y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_y,this.fragmentShader=vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=my(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xy extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sy extends Ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yy extends Ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ko=new V,zo=new js,ni=new V;class m0 extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ko,zo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,zo,ni.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(ko,zo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,zo,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new V,Jp=new rt,em=new rt;class Dn extends m0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,Jp,em),n.subVectors(em,Jp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class g0 extends m0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cs=-90,us=1;class My extends pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new Dn(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new Dn(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new Dn(cs,us,e,n);o.layers=this.layers,this.add(o);const l=new Dn(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new Dn(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ey extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lh=class lh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};lh.prototype.isMatrix2=!0;let tm=lh;function nm(t,e,n,i){const r=Ty(i);switch(n){case J_:return t*e;case t0:return t*e/r.components*r.byteLength;case Qf:return t*e/r.components*r.byteLength;case Wr:return t*e*2/r.components*r.byteLength;case Jf:return t*e*2/r.components*r.byteLength;case e0:return t*e*3/r.components*r.byteLength;case $n:return t*e*4/r.components*r.byteLength;case eh:return t*e*4/r.components*r.byteLength;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:case yd:return Math.max(t,16)*Math.max(e,8)/4;case vd:case Sd:return Math.max(t,8)*Math.max(e,8)/2;case Md:case Ed:case wd:case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Td:case Nl:case Rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vd:case Hd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Xd:case jd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Dl:case qd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ty(t){switch(t){case Ln:case Y_:return{byteLength:1,components:1};case Ga:case K_:case ki:return{byteLength:2,components:1};case Kf:case Zf:return{byteLength:2,components:4};case mi:case Yf:case ci:return{byteLength:4,components:1};case Z_:case Q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$f}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$f);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wy(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){const _=h[d],E=h[m];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++d,h[d]=E)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){const E=h[m];t.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ry=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,By=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ky=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ky=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nM="gl_FragColor = linearToOutputTexel( gl_FragColor );",iM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Ay,alphahash_pars_fragment:Ry,alphamap_fragment:Cy,alphamap_pars_fragment:by,alphatest_fragment:Py,alphatest_pars_fragment:Ny,aomap_fragment:Dy,aomap_pars_fragment:Ly,batching_pars_vertex:Iy,batching_vertex:Uy,begin_vertex:Fy,beginnormal_vertex:Oy,bsdfs:By,iridescence_fragment:ky,bumpmap_pars_fragment:zy,clipping_planes_fragment:Gy,clipping_planes_pars_fragment:Vy,clipping_planes_pars_vertex:Hy,clipping_planes_vertex:Wy,color_fragment:Xy,color_pars_fragment:jy,color_pars_vertex:qy,color_vertex:$y,common:Yy,cube_uv_reflection_fragment:Ky,defaultnormal_vertex:Zy,displacementmap_pars_vertex:Qy,displacementmap_vertex:Jy,emissivemap_fragment:eM,emissivemap_pars_fragment:tM,colorspace_fragment:nM,colorspace_pars_fragment:iM,envmap_fragment:rM,envmap_common_pars_fragment:sM,envmap_pars_fragment:aM,envmap_pars_vertex:oM,envmap_physical_pars_fragment:vM,envmap_vertex:lM,fog_vertex:cM,fog_pars_vertex:uM,fog_fragment:dM,fog_pars_fragment:fM,gradientmap_pars_fragment:hM,lightmap_pars_fragment:pM,lights_lambert_fragment:mM,lights_lambert_pars_fragment:gM,lights_pars_begin:_M,lights_toon_fragment:xM,lights_toon_pars_fragment:SM,lights_phong_fragment:yM,lights_phong_pars_fragment:MM,lights_physical_fragment:EM,lights_physical_pars_fragment:TM,lights_fragment_begin:wM,lights_fragment_maps:AM,lights_fragment_end:RM,lightprobes_pars_fragment:CM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:PM,logdepthbuf_pars_vertex:NM,logdepthbuf_vertex:DM,map_fragment:LM,map_pars_fragment:IM,map_particle_fragment:UM,map_particle_pars_fragment:FM,metalnessmap_fragment:OM,metalnessmap_pars_fragment:BM,morphinstance_vertex:kM,morphcolor_vertex:zM,morphnormal_vertex:GM,morphtarget_pars_vertex:VM,morphtarget_vertex:HM,normal_fragment_begin:WM,normal_fragment_maps:XM,normal_pars_fragment:jM,normal_pars_vertex:qM,normal_vertex:$M,normalmap_pars_fragment:YM,clearcoat_normal_fragment_begin:KM,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:QM,iridescence_pars_fragment:JM,opaque_fragment:eE,packing:tE,premultiplied_alpha_fragment:nE,project_vertex:iE,dithering_fragment:rE,dithering_pars_fragment:sE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:oE,shadowmap_pars_fragment:lE,shadowmap_pars_vertex:cE,shadowmap_vertex:uE,shadowmask_pars_fragment:dE,skinbase_vertex:fE,skinning_pars_vertex:hE,skinning_vertex:pE,skinnormal_vertex:mE,specularmap_fragment:gE,specularmap_pars_fragment:_E,tonemapping_fragment:vE,tonemapping_pars_fragment:xE,transmission_fragment:SE,transmission_pars_fragment:yE,uv_pars_fragment:ME,uv_pars_vertex:EE,uv_vertex:TE,worldpos_vertex:wE,background_vert:AE,background_frag:RE,backgroundCube_vert:CE,backgroundCube_frag:bE,cube_vert:PE,cube_frag:NE,depth_vert:DE,depth_frag:LE,distance_vert:IE,distance_frag:UE,equirect_vert:FE,equirect_frag:OE,linedashed_vert:BE,linedashed_frag:kE,meshbasic_vert:zE,meshbasic_frag:GE,meshlambert_vert:VE,meshlambert_frag:HE,meshmatcap_vert:WE,meshmatcap_frag:XE,meshnormal_vert:jE,meshnormal_frag:qE,meshphong_vert:$E,meshphong_frag:YE,meshphysical_vert:KE,meshphysical_frag:ZE,meshtoon_vert:QE,meshtoon_frag:JE,points_vert:eT,points_frag:tT,shadow_vert:nT,shadow_frag:iT,sprite_vert:rT,sprite_frag:sT},pe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},oi={basic:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Jt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Jt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Jt([pe.points,pe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Jt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Jt([pe.common,pe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Jt([pe.sprite,pe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Jt([pe.common,pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Jt([pe.lights,pe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};oi.physical={uniforms:Jt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Go={r:0,b:0,g:0},aT=new Pt,v0=new Le;v0.set(-1,0,0,0,1,0,0,0,1);function oT(t,e,n,i,r,s){const a=new Ze(0);let o=r===!0?0:1,l,c,f=null,h=0,d=null;function m(p){let S=p.isScene===!0?p.background:null;if(S&&S.isTexture){const M=p.backgroundBlurriness>0;S=e.get(S,M)}return S}function _(p){let S=!1;const M=m(p);M===null?g(a,o):M&&M.isColor&&(g(M,1),S=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(p,S){const M=m(S);M&&(M.isCubeTexture||M.mapping===ec)?(c===void 0&&(c=new Gi(new Za(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Vs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(v0),c.material.toneMapped=Xe.getTransfer(M.colorSpace)!==Je,(f!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Gi(new nc(2,2),new gi({name:"BackgroundMaterial",uniforms:Vs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(M.colorSpace)!==Je,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,S){p.getRGB(Go,p0(t)),n.buffers.color.setClear(Go.r,Go.g,Go.b,S,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,S=1){a.set(p),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:_,addToRenderList:E,dispose:u}}function lT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(b,k,q,J,U){let W=!1;const B=h(b,J,q,k);s!==B&&(s=B,c(s.object)),W=m(b,J,q,U),W&&_(b,J,q,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(b,k,q,J),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function f(b){return t.deleteVertexArray(b)}function h(b,k,q,J){const U=J.wireframe===!0;let W=i[k.id];W===void 0&&(W={},i[k.id]=W);const B=b.isInstancedMesh===!0?b.id:0;let O=W[B];O===void 0&&(O={},W[B]=O);let X=O[q.id];X===void 0&&(X={},O[q.id]=X);let Q=X[U];return Q===void 0&&(Q=d(l()),X[U]=Q),Q}function d(b){const k=[],q=[],J=[];for(let U=0;U<n;U++)k[U]=0,q[U]=0,J[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:J,object:b,attributes:{},index:null}}function m(b,k,q,J){const U=s.attributes,W=k.attributes;let B=0;const O=q.getAttributes();for(const X in O)if(O[X].location>=0){const ae=U[X];let fe=W[X];if(fe===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;B++}return s.attributesNum!==B||s.index!==J}function _(b,k,q,J){const U={},W=k.attributes;let B=0;const O=q.getAttributes();for(const X in O)if(O[X].location>=0){let ae=W[X];ae===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),U[X]=fe,B++}s.attributes=U,s.attributesNum=B,s.index=J}function E(){const b=s.newAttributes;for(let k=0,q=b.length;k<q;k++)b[k]=0}function g(b){u(b,0)}function u(b,k){const q=s.newAttributes,J=s.enabledAttributes,U=s.attributeDivisors;q[b]=1,J[b]===0&&(t.enableVertexAttribArray(b),J[b]=1),U[b]!==k&&(t.vertexAttribDivisor(b,k),U[b]=k)}function p(){const b=s.newAttributes,k=s.enabledAttributes;for(let q=0,J=k.length;q<J;q++)k[q]!==b[q]&&(t.disableVertexAttribArray(q),k[q]=0)}function S(b,k,q,J,U,W,B){B===!0?t.vertexAttribIPointer(b,k,q,U,W):t.vertexAttribPointer(b,k,q,J,U,W)}function M(b,k,q,J){E();const U=J.attributes,W=q.getAttributes(),B=k.defaultAttributeValues;for(const O in W){const X=W[O];if(X.location>=0){let Q=U[O];if(Q===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),Q!==void 0){const ae=Q.normalized,fe=Q.itemSize,ke=e.get(Q);if(ke===void 0)continue;const Ve=ke.buffer,Pe=ke.type,Y=ke.bytesPerElement,de=Pe===t.INT||Pe===t.UNSIGNED_INT||Q.gpuType===Yf;if(Q.isInterleavedBufferAttribute){const oe=Q.data,Re=oe.stride,De=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<X.locationSize;Ce++)u(X.location+Ce,oe.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<X.locationSize;Ce++)g(X.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let Ce=0;Ce<X.locationSize;Ce++)S(X.location+Ce,fe/X.locationSize,Pe,ae,Re*Y,(De+fe/X.locationSize*Ce)*Y,de)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)u(X.location+oe,Q.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<X.locationSize;oe++)g(X.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let oe=0;oe<X.locationSize;oe++)S(X.location+oe,fe/X.locationSize,Pe,ae,fe*Y,fe/X.locationSize*oe*Y,de)}}else if(B!==void 0){const ae=B[O];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(X.location,ae);break;case 3:t.vertexAttrib3fv(X.location,ae);break;case 4:t.vertexAttrib4fv(X.location,ae);break;default:t.vertexAttrib1fv(X.location,ae)}}}}p()}function R(){C();for(const b in i){const k=i[b];for(const q in k){const J=k[q];for(const U in J){const W=J[U];for(const B in W)f(W[B].object),delete W[B];delete J[U]}}delete i[b]}}function T(b){if(i[b.id]===void 0)return;const k=i[b.id];for(const q in k){const J=k[q];for(const U in J){const W=J[U];for(const B in W)f(W[B].object),delete W[B];delete J[U]}}delete i[b.id]}function A(b){for(const k in i){const q=i[k];for(const J in q){const U=q[J];if(U[b.id]===void 0)continue;const W=U[b.id];for(const B in W)f(W[B].object),delete W[B];delete U[b.id]}}}function x(b){for(const k in i){const q=i[k],J=b.isInstancedMesh===!0?b.id:0,U=q[J];if(U!==void 0){for(const W in U){const B=U[W];for(const O in B)f(B[O].object),delete B[O];delete U[W]}delete q[J],Object.keys(q).length===0&&delete i[k]}}}function C(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:E,enableAttribute:g,disableUnusedAttributes:p}}function cT(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let m=0;m<f;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function uT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==$n&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!x)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(be("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:M,maxSamples:R,samples:T}}function dT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Cr,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,E=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const p=s?0:i,S=p*4;let M=u.clippingState||null;l.value=M,M=f(_,d,S,m);for(let R=0;R!==S;++R)M[R]=n[R];u.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,_){const E=h!==null?h.length:0;let g=null;if(E!==0){if(g=l.value,_!==!0||g===null){const u=m+E*4,p=d.matrixWorldInverse;o.getNormalMatrix(p),(g===null||g.length<u)&&(g=new Float32Array(u));for(let S=0,M=m;S!==E;++S,M+=4)a.copy(h[S]).applyMatrix4(p,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const ar=4,im=[.125,.215,.35,.446,.526,.582],Pr=20,fT=256,oa=new g0,rm=new Ze;let au=null,ou=0,lu=0,cu=!1;const hT=new V;class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=hT}=s;au=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(au,ou,lu),this._renderer.xr.enabled=cu,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hr||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),au=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:ki,format:$n,colorSpace:Ll,depthBuffer:!1},r=am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pT(s)),this._blurMaterial=gT(s,e,n),this._ggxMaterial=mT(s,e,n)}return r}_compileMaterial(e){const n=new Gi(new Qn,e);this._renderer.compile(n,oa)}_sceneToCubeUV(e,n,i,r,s){const l=new Dn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(rm),h.toneMapping=hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gi(new Za,new c0({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let u=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,u=!0):(g.color.copy(rm),u=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[S],s.y,s.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[S]));const R=this._cubeSize;ds(r,M*R,S>2?R:0,R,R),h.setRenderTarget(r),u&&h.render(E,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hr||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ds(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,oa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,m=h*d,{_lodMax:_}=this,E=this._sizeLods[i],g=3*E*(i>_-ar?i-_+ar:0),u=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-n,ds(s,g,u,3*E,2*E),r.setRenderTarget(s),r.render(o,oa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ds(e,g,u,3*E,2*E),r.setRenderTarget(e),r.render(o,oa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pr-1),E=s/_,g=isFinite(s)?1+Math.floor(f*E):Pr;g>Pr&&be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pr}`);const u=[];let p=0;for(let A=0;A<Pr;++A){const x=A/E,C=Math.exp(-x*x/2);u.push(C),A===0?p+=C:A<g&&(p+=2*C)}for(let A=0;A<u.length;A++)u[A]=u[A]/p;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;const M=this._sizeLods[r],R=3*M*(r>S-ar?r-S+ar:0),T=4*(this._cubeSize-M);ds(n,R,T,3*M,2*M),l.setRenderTarget(n),l.render(h,oa)}}function pT(t){const e=[],n=[],i=[];let r=t;const s=t-ar+1+im.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ar?l=im[a-t+ar-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,_=6,E=3,g=2,u=1,p=new Float32Array(E*_*m),S=new Float32Array(g*_*m),M=new Float32Array(u*_*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,x=T>2?0:-1,C=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];p.set(C,E*_*T),S.set(d,g*_*T);const N=[T,T,T,T,T,T];M.set(N,u*_*T)}const R=new Qn;R.setAttribute("position",new Fn(p,E)),R.setAttribute("uv",new Fn(S,g)),R.setAttribute("faceIndex",new Fn(M,u)),i.push(new Gi(R,null)),r>ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function am(t,e,n){const i=new pi(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mT(t,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function gT(t,e,n){const i=new Float32Array(Pr),r=new V(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function om(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function lm(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class x0 extends pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new f0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Za(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Di});s.uniforms.tEquirect.value=n;const a=new Gi(r,s),o=n.minFilter;return n.minFilter===Ir&&(n.minFilter=Zt),new My(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function _T(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Lc||m===Ic)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const E=new x0(_.height);return E.fromEquirectangularTexture(t,d),e.set(d,E),d.addEventListener("dispose",c),o(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,_=m===Lc||m===Ic,E=m===Hr||m===zs;if(_||E){let g=n.get(d);const u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new sm(t)),g=_?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const p=d.image;return _&&p&&p.height>0||E&&p&&l(p)?(i===null&&(i=new sm(t)),g=_?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function o(d,m){return m===Lc?d.mapping=Hr:m===Ic&&(d.mapping=zs),d}function l(d){let m=0;const _=6;for(let E=0;E<_;E++)d[E]!==void 0&&m++;return m===_}function c(d){const m=d.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function vT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$d("WebGLRenderer: "+i+" extension not supported."),r}}}function xT(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,_=h.attributes.position;let E=0;if(_===void 0)return;if(m!==null){const p=m.array;E=m.version;for(let S=0,M=p.length;S<M;S+=3){const R=p[S+0],T=p[S+1],A=p[S+2];d.push(R,T,T,A,A,R)}}else{const p=_.array;E=_.version;for(let S=0,M=p.length/3-1;S<M;S+=3){const R=S+0,T=S+1,A=S+2;d.push(R,T,T,A,A,R)}}const g=new(_.count>=65535?o0:a0)(d,1);g.version=E;const u=s.get(h);u&&e.remove(u),s.set(h,g)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function ST(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function c(h,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,h*a,m),n.update(d,i,m))}function f(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let E=0;for(let g=0;g<m;g++)E+=d[g];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function yT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function MT(t,e,n){const i=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var m=N;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),E===!0&&(M=2),g===!0&&(M=3);let R=o.attributes.position.count*M,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*T*4*h),x=new i0(A,R,T,h);x.type=ci,x.needsUpdate=!0;const C=M*4;for(let b=0;b<h;b++){const k=u[b],q=p[b],J=S[b],U=R*T*4*b;for(let W=0;W<k.count;W++){const B=W*C;_===!0&&(r.fromBufferAttribute(k,W),A[U+B+0]=r.x,A[U+B+1]=r.y,A[U+B+2]=r.z,A[U+B+3]=0),E===!0&&(r.fromBufferAttribute(q,W),A[U+B+4]=r.x,A[U+B+5]=r.y,A[U+B+6]=r.z,A[U+B+7]=0),g===!0&&(r.fromBufferAttribute(J,W),A[U+B+8]=r.x,A[U+B+9]=r.y,A[U+B+10]=r.z,A[U+B+11]=J.itemSize===4?r.w:1)}}d={count:h,texture:x,size:new rt(R,T)},i.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const E=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function ET(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const TT={[G_]:"LINEAR_TONE_MAPPING",[V_]:"REINHARD_TONE_MAPPING",[H_]:"CINEON_TONE_MAPPING",[W_]:"ACES_FILMIC_TONE_MAPPING",[j_]:"AGX_TONE_MAPPING",[q_]:"NEUTRAL_TONE_MAPPING",[X_]:"CUSTOM_TONE_MAPPING"};function wT(t,e,n,i,r){const s=new pi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Gs(e,n):void 0}),a=new pi(e,n,{type:ki,depthBuffer:!1,stencilBuffer:!1}),o=new Qn;o.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ii([0,2,0,0,2,0],2));const l=new xy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Gi(o,l),f=new g0(-1,1,1,-1,0,1);let h=null,d=null,m=!1,_,E=null,g=[],u=!1;this.setSize=function(p,S){s.setSize(p,S),a.setSize(p,S);for(let M=0;M<g.length;M++){const R=g[M];R.setSize&&R.setSize(p,S)}},this.setEffects=function(p){g=p,u=g.length>0&&g[0].isRenderPass===!0;const S=s.width,M=s.height;for(let R=0;R<g.length;R++){const T=g[R];T.setSize&&T.setSize(S,M)}},this.begin=function(p,S){if(m||p.toneMapping===hi&&g.length===0)return!1;if(E=S,S!==null){const M=S.width,R=S.height;(s.width!==M||s.height!==R)&&this.setSize(M,R)}return u===!1&&p.setRenderTarget(s),_=p.toneMapping,p.toneMapping=hi,!0},this.hasRenderPass=function(){return u},this.end=function(p,S){p.toneMapping=_,m=!0;let M=s,R=a;for(let T=0;T<g.length;T++){const A=g[T];if(A.enabled!==!1&&(A.render(p,R,M,S),A.needsSwap!==!1)){const x=M;M=R,R=x}}if(h!==p.outputColorSpace||d!==p.toneMapping){h=p.outputColorSpace,d=p.toneMapping,l.defines={},Xe.getTransfer(h)===Je&&(l.defines.SRGB_TRANSFER="");const T=TT[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,p.setRenderTarget(E),p.render(c,f),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const S0=new rn,Zd=new Gs(1,1),y0=new i0,M0=new YS,E0=new f0,cm=[],um=[],dm=new Float32Array(16),fm=new Float32Array(9),hm=new Float32Array(4);function qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cm[r];if(s===void 0&&(s=new Float32Array(r),cm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rc(t,e){let n=um[e];n===void 0&&(n=new Int32Array(e),um[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function AT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function PT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;hm.set(i),t.uniformMatrix2fv(this.addr,!1,hm),Ot(n,i)}}function NT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;fm.set(i),t.uniformMatrix3fv(this.addr,!1,fm),Ot(n,i)}}function DT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;dm.set(i),t.uniformMatrix4fv(this.addr,!1,dm),Ot(n,i)}}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function OT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function GT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Zd.compareFunction=n.isReversedDepthBuffer()?nh:th,s=Zd):s=S0,n.setTexture2D(e||s,r)}function VT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||M0,r)}function HT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||E0,r)}function WT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||y0,r)}function XT(t){switch(t){case 5126:return AT;case 35664:return RT;case 35665:return CT;case 35666:return bT;case 35674:return PT;case 35675:return NT;case 35676:return DT;case 5124:case 35670:return LT;case 35667:case 35671:return IT;case 35668:case 35672:return UT;case 35669:case 35673:return FT;case 5125:return OT;case 36294:return BT;case 36295:return kT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return WT}}function jT(t,e){t.uniform1fv(this.addr,e)}function qT(t,e){const n=qs(e,this.size,2);t.uniform2fv(this.addr,n)}function $T(t,e){const n=qs(e,this.size,3);t.uniform3fv(this.addr,n)}function YT(t,e){const n=qs(e,this.size,4);t.uniform4fv(this.addr,n)}function KT(t,e){const n=qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZT(t,e){const n=qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QT(t,e){const n=qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JT(t,e){t.uniform1iv(this.addr,e)}function e1(t,e){t.uniform2iv(this.addr,e)}function t1(t,e){t.uniform3iv(this.addr,e)}function n1(t,e){t.uniform4iv(this.addr,e)}function i1(t,e){t.uniform1uiv(this.addr,e)}function r1(t,e){t.uniform2uiv(this.addr,e)}function s1(t,e){t.uniform3uiv(this.addr,e)}function a1(t,e){t.uniform4uiv(this.addr,e)}function o1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Zd:a=S0;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function l1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||M0,s[a])}function c1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||E0,s[a])}function u1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||y0,s[a])}function d1(t){switch(t){case 5126:return jT;case 35664:return qT;case 35665:return $T;case 35666:return YT;case 35674:return KT;case 35675:return ZT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return e1;case 35668:case 35672:return t1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return r1;case 36295:return s1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return u1}}class f1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=XT(n.type)}}class h1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=d1(n.type)}}class p1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const uu=/(\w+)(\])?(\[|\.)?/g;function pm(t,e){t.seq.push(e),t.map[e.id]=e}function m1(t,e,n){const i=t.name,r=i.length;for(uu.lastIndex=0;;){const s=uu.exec(i),a=uu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){pm(n,c===void 0?new f1(o,t,e):new h1(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new p1(o),pm(n,h)),n=h}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);m1(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function mm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const g1=37297;let _1=0;function v1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const gm=new Le;function x1(t){Xe._getMatrix(gm,Xe.workingColorSpace,t);const e=`mat3( ${gm.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case Il:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function _m(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+v1(t.getShaderSource(e),o)}else return s}function S1(t,e){const n=x1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const y1={[G_]:"Linear",[V_]:"Reinhard",[H_]:"Cineon",[W_]:"ACESFilmic",[j_]:"AgX",[q_]:"Neutral",[X_]:"Custom"};function M1(t,e){const n=y1[e];return n===void 0?(be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vo=new V;function E1(){Xe.getLuminanceCoefficients(Vo);const t=Vo.x.toFixed(4),e=Vo.y.toFixed(4),n=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function w1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function A1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function pa(t){return t!==""}function vm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(t){return t.replace(R1,b1)}const C1=new Map;function b1(t,e){let n=Oe[e];if(n===void 0){const i=C1.get(e);if(i!==void 0)n=Oe[i],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qd(n)}const P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(t){return t.replace(P1,N1)}function N1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ym(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const D1={[tl]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function L1(t){return D1[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const I1={[Hr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[ec]:"ENVMAP_TYPE_CUBE_UV"};function U1(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":I1[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const F1={[zs]:"ENVMAP_MODE_REFRACTION"};function O1(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":F1[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const B1={[z_]:"ENVMAP_BLENDING_MULTIPLY",[CS]:"ENVMAP_BLENDING_MIX",[bS]:"ENVMAP_BLENDING_ADD"};function k1(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":B1[t.combine]||"ENVMAP_BLENDING_NONE"}function z1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function G1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=L1(n),c=U1(n),f=O1(n),h=k1(n),d=z1(n),m=T1(n),_=w1(s),E=r.createProgram();let g,u,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(pa).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(pa).join(`
`),u.length>0&&(u+=`
`)):(g=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),u=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hi?"#define TONE_MAPPING":"",n.toneMapping!==hi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==hi?M1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,S1("linearToOutputTexel",n.outputColorSpace),E1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pa).join(`
`)),a=Qd(a),a=vm(a,n),a=xm(a,n),o=Qd(o),o=vm(o,n),o=xm(o,n),a=Sm(a),o=Sm(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=p+g+a,M=p+u+o,R=mm(r,r.VERTEX_SHADER,S),T=mm(r,r.FRAGMENT_SHADER,M);r.attachShader(E,R),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function A(b){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(E)||"",q=r.getShaderInfoLog(R)||"",J=r.getShaderInfoLog(T)||"",U=k.trim(),W=q.trim(),B=J.trim();let O=!0,X=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,R,T);else{const Q=_m(r,R,"vertex"),ae=_m(r,T,"fragment");$e("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+U+`
`+Q+`
`+ae)}else U!==""?be("WebGLProgram: Program Info Log:",U):(W===""||B==="")&&(X=!1);X&&(b.diagnostics={runnable:O,programLog:U,vertexShader:{log:W,prefix:g},fragmentShader:{log:B,prefix:u}})}r.deleteShader(R),r.deleteShader(T),x=new al(r,E),C=A1(r,E)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(E,g1)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=T,this}let V1=0;class H1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new W1(e),n.set(e,i)),i}}class W1{constructor(e){this.id=V1++,this.code=e,this.usedTimes=0}}function X1(t){return t===Wr||t===Nl||t===Dl}function j1(t,e,n,i,r,s){const a=new r0,o=new H1,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,C,N,b,k,q){const J=b.fog,U=k.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?b.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||W,B),X=O&&O.mapping===ec?O.image.height:null,Q=m[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&be("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ae=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,fe=ae!==void 0?ae.length:0;let ke=0;U.morphAttributes.position!==void 0&&(ke=1),U.morphAttributes.normal!==void 0&&(ke=2),U.morphAttributes.color!==void 0&&(ke=3);let Ve,Pe,Y,de;if(Q){const Ie=oi[Q];Ve=Ie.vertexShader,Pe=Ie.fragmentShader}else Ve=x.vertexShader,Pe=x.fragmentShader,o.update(x),Y=o.getVertexShaderID(x),de=o.getFragmentShaderID(x);const oe=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),De=k.isInstancedMesh===!0,Ce=k.isBatchedMesh===!0,mt=!!x.map,He=!!x.matcap,tt=!!O,ut=!!x.aoMap,ze=!!x.lightMap,Nt=!!x.bumpMap,gt=!!x.normalMap,mn=!!x.displacementMap,D=!!x.emissiveMap,Dt=!!x.metalnessMap,We=!!x.roughnessMap,ot=x.anisotropy>0,he=x.clearcoat>0,St=x.dispersion>0,w=x.iridescence>0,v=x.sheen>0,F=x.transmission>0,K=ot&&!!x.anisotropyMap,te=he&&!!x.clearcoatMap,ie=he&&!!x.clearcoatNormalMap,ue=he&&!!x.clearcoatRoughnessMap,j=w&&!!x.iridescenceMap,Z=w&&!!x.iridescenceThicknessMap,_e=v&&!!x.sheenColorMap,Se=v&&!!x.sheenRoughnessMap,le=!!x.specularMap,re=!!x.specularColorMap,Ne=!!x.specularIntensityMap,Fe=F&&!!x.transmissionMap,Ke=F&&!!x.thicknessMap,P=!!x.gradientMap,se=!!x.alphaMap,$=x.alphaTest>0,ve=!!x.alphaHash,ce=!!x.extensions;let ee=hi;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ee=t.toneMapping);const Te={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ve,fragmentShader:Pe,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&k._colorsTexture!==null,instancing:De,instancingColor:De&&k.instanceColor!==null,instancingMorph:De&&k.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:mt,matcap:He,envMap:tt,envMapMode:tt&&O.mapping,envMapCubeUVHeight:X,aoMap:ut,lightMap:ze,bumpMap:Nt,normalMap:gt,displacementMap:mn,emissiveMap:D,normalMapObjectSpace:gt&&x.normalMapType===DS,normalMapTangentSpace:gt&&x.normalMapType===Pp,packedNormalMap:gt&&x.normalMapType===Pp&&X1(x.normalMap.format),metalnessMap:Dt,roughnessMap:We,anisotropy:ot,anisotropyMap:K,clearcoat:he,clearcoatMap:te,clearcoatNormalMap:ie,clearcoatRoughnessMap:ue,dispersion:St,iridescence:w,iridescenceMap:j,iridescenceThicknessMap:Z,sheen:v,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:le,specularColorMap:re,specularIntensityMap:Ne,transmission:F,transmissionMap:Fe,thicknessMap:Ke,gradientMap:P,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:$,alphaHash:ve,combine:x.combine,mapUv:mt&&_(x.map.channel),aoMapUv:ut&&_(x.aoMap.channel),lightMapUv:ze&&_(x.lightMap.channel),bumpMapUv:Nt&&_(x.bumpMap.channel),normalMapUv:gt&&_(x.normalMap.channel),displacementMapUv:mn&&_(x.displacementMap.channel),emissiveMapUv:D&&_(x.emissiveMap.channel),metalnessMapUv:Dt&&_(x.metalnessMap.channel),roughnessMapUv:We&&_(x.roughnessMap.channel),anisotropyMapUv:K&&_(x.anisotropyMap.channel),clearcoatMapUv:te&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(x.sheenRoughnessMap.channel),specularMapUv:le&&_(x.specularMap.channel),specularColorMapUv:re&&_(x.specularColorMap.channel),specularIntensityMapUv:Ne&&_(x.specularIntensityMap.channel),transmissionMapUv:Fe&&_(x.transmissionMap.channel),thicknessMapUv:Ke&&_(x.thicknessMap.channel),alphaMapUv:se&&_(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(gt||ot),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!U.attributes.uv&&(mt||se),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:k.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ke,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:mt&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===Je,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ai,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)C.push(N),C.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(u(C,x),p(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function u(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function p(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function S(x){const C=m[x.type];let N;if(C){const b=oi[C];N=gy.clone(b.uniforms)}else N=x.uniforms;return N}function M(x,C){let N=f.get(C);return N!==void 0?++N.usedTimes:(N=new G1(t,C,x,r),c.push(N),f.set(C,N)),N}function R(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:S,acquireProgram:M,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:A}}function q1(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function $1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Mm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Em(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,_,E,g,u){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:m,material:_,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:g,group:u},t[e]=p):(p.id=d.id,p.object=d,p.geometry=m,p.material=_,p.materialVariant=a(d),p.groupOrder=E,p.renderOrder=d.renderOrder,p.z=g,p.group=u),e++,p}function l(d,m,_,E,g,u){const p=o(d,m,_,E,g,u);_.transmission>0?i.push(p):_.transparent===!0?r.push(p):n.push(p)}function c(d,m,_,E,g,u){const p=o(d,m,_,E,g,u);_.transmission>0?i.unshift(p):_.transparent===!0?r.unshift(p):n.unshift(p)}function f(d,m){n.length>1&&n.sort(d||$1),i.length>1&&i.sort(m||Mm),r.length>1&&r.sort(m||Mm)}function h(){for(let d=e,m=t.length;d<m;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function Y1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Em,t.set(i,[a])):r>=s.length?(a=new Em,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function K1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Ze};break;case"SpotLight":n={position:new V,direction:new V,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function Z1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Q1=0;function J1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ew(t){const e=new K1,n=Z1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new Pt,a=new Pt;function o(c){let f=0,h=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,_=0,E=0,g=0,u=0,p=0,S=0,M=0,R=0,T=0,A=0;c.sort(J1);for(let C=0,N=c.length;C<N;C++){const b=c[C],k=b.color,q=b.intensity,J=b.distance;let U=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Wr?U=b.shadow.map.texture:U=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)f+=k.r*q,h+=k.g*q,d+=k.b*q;else if(b.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(b.sh.coefficients[W],q);A++}else if(b.isDirectionalLight){const W=e.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const B=b.shadow,O=n.get(b);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=U,i.directionalShadowMatrix[m]=b.shadow.matrix,p++}i.directional[m]=W,m++}else if(b.isSpotLight){const W=e.get(b);W.position.setFromMatrixPosition(b.matrixWorld),W.color.copy(k).multiplyScalar(q),W.distance=J,W.coneCos=Math.cos(b.angle),W.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),W.decay=b.decay,i.spot[E]=W;const B=b.shadow;if(b.map&&(i.spotLightMap[R]=b.map,R++,B.updateMatrices(b),b.castShadow&&T++),i.spotLightMatrix[E]=B.matrix,b.castShadow){const O=n.get(b);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,i.spotShadow[E]=O,i.spotShadowMap[E]=U,M++}E++}else if(b.isRectAreaLight){const W=e.get(b);W.color.copy(k).multiplyScalar(q),W.halfWidth.set(b.width*.5,0,0),W.halfHeight.set(0,b.height*.5,0),i.rectArea[g]=W,g++}else if(b.isPointLight){const W=e.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),W.distance=b.distance,W.decay=b.decay,b.castShadow){const B=b.shadow,O=n.get(b);O.shadowIntensity=B.intensity,O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,O.shadowCameraNear=B.camera.near,O.shadowCameraFar=B.camera.far,i.pointShadow[_]=O,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=b.shadow.matrix,S++}i.point[_]=W,_++}else if(b.isHemisphereLight){const W=e.get(b);W.skyColor.copy(b.color).multiplyScalar(q),W.groundColor.copy(b.groundColor).multiplyScalar(q),i.hemi[u]=W,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==E||x.rectAreaLength!==g||x.hemiLength!==u||x.numDirectionalShadows!==p||x.numPointShadows!==S||x.numSpotShadows!==M||x.numSpotMaps!==R||x.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,x.directionalLength=m,x.pointLength=_,x.spotLength=E,x.rectAreaLength=g,x.hemiLength=u,x.numDirectionalShadows=p,x.numPointShadows=S,x.numSpotShadows=M,x.numSpotMaps=R,x.numLightProbes=A,i.version=Q1++)}function l(c,f){let h=0,d=0,m=0,_=0,E=0;const g=f.matrixWorldInverse;for(let u=0,p=c.length;u<p;u++){const S=c[u];if(S.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(S.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const M=i.hemi[E];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function Tm(t){const e=new ew(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function f(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function tw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Tm(t),e.set(r,[o])):s>=a.length?(o=new Tm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rw=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],sw=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],wm=new Pt,la=new V,du=new V;function aw(t,e,n){let i=new u0;const r=new rt,s=new rt,a=new Rt,o=new Sy,l=new yy,c={},f=n.maxTextureSize,h={[_r]:hn,[hn]:_r,[Ai]:Ai},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:nw,fragmentShader:iw}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Qn;_.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Gi(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let u=this.type;this.render=function(T,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===cS&&(be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tl);const C=t.getRenderTarget(),N=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Di),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=u!==this.type;q&&A.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(U=>U.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,U=T.length;J<U;J++){const W=T[J],B=W.shadow;if(B===void 0){be("WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const O=B.getFrameExtents();r.multiply(O),s.copy(B.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,B.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,B.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||q===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ha){if(W.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new pi(r.x,r.y,{format:Wr,type:ki,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),B.map.texture.name=W.name+".shadowMap",B.map.depthTexture=new Gs(r.x,r.y,ci),B.map.depthTexture.name=W.name+".shadowMapDepth",B.map.depthTexture.format=zi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Vt,B.map.depthTexture.magFilter=Vt}else W.isPointLight?(B.map=new x0(r.x),B.map.depthTexture=new py(r.x,mi)):(B.map=new pi(r.x,r.y),B.map.depthTexture=new Gs(r.x,r.y,mi)),B.map.depthTexture.name=W.name+".shadowMap",B.map.depthTexture.format=zi,this.type===tl?(B.map.depthTexture.compareFunction=X?nh:th,B.map.depthTexture.minFilter=Zt,B.map.depthTexture.magFilter=Zt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Vt,B.map.depthTexture.magFilter=Vt);B.camera.updateProjectionMatrix()}const Q=B.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<Q;ae++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(B.map),t.clear());const fe=B.getViewport(ae);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),k.viewport(a)}if(W.isPointLight){const fe=B.camera,ke=B.matrix,Ve=W.distance||fe.far;Ve!==fe.far&&(fe.far=Ve,fe.updateProjectionMatrix()),la.setFromMatrixPosition(W.matrixWorld),fe.position.copy(la),du.copy(fe.position),du.add(rw[ae]),fe.up.copy(sw[ae]),fe.lookAt(du),fe.updateMatrixWorld(),ke.makeTranslation(-la.x,-la.y,-la.z),wm.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),B._frustum.setFromProjectionMatrix(wm,fe.coordinateSystem,fe.reversedDepth)}else B.updateMatrices(W);i=B.getFrustum(),M(A,x,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===ha&&p(B,x),B.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(C,N,b)};function p(T,A){const x=e.update(E);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pi(r.x,r.y,{format:Wr,type:ki})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,x,d,E,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,x,m,E,null)}function S(T,A,x,C){let N=null;const b=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)N=b;else if(N=x.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=N.uuid,q=A.uuid;let J=c[k];J===void 0&&(J={},c[k]=J);let U=J[q];U===void 0&&(U=N.clone(),J[q]=U,A.addEventListener("dispose",R)),N=U}if(N.visible=A.visible,N.wireframe=A.wireframe,C===ha?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:h[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const k=t.properties.get(N);k.light=x}return N}function M(T,A,x,C,N){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===ha)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const q=e.update(T),J=T.material;if(Array.isArray(J)){const U=q.groups;for(let W=0,B=U.length;W<B;W++){const O=U[W],X=J[O.materialIndex];if(X&&X.visible){const Q=S(T,X,C,N);T.onBeforeShadow(t,T,A,x,q,Q,O),t.renderBufferDirect(x,null,q,Q,T,O),T.onAfterShadow(t,T,A,x,q,Q,O)}}}else if(J.visible){const U=S(T,J,C,N);T.onBeforeShadow(t,T,A,x,q,U,null),t.renderBufferDirect(x,null,q,U,T,null),T.onAfterShadow(t,T,A,x,q,U,null)}}const k=T.children;for(let q=0,J=k.length;q<J;q++)M(k[q],A,x,C,N)}function R(T){T.target.removeEventListener("dispose",R);for(const x in c){const C=c[x],N=T.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function ow(t,e){function n(){let P=!1;const se=new Rt;let $=null;const ve=new Rt(0,0,0,0);return{setMask:function(ce){$!==ce&&!P&&(t.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){P=ce},setClear:function(ce,ee,Te,Ie,Et){Et===!0&&(ce*=Ie,ee*=Ie,Te*=Ie),se.set(ce,ee,Te,Ie),ve.equals(se)===!1&&(t.clearColor(ce,ee,Te,Ie),ve.copy(se))},reset:function(){P=!1,$=null,ve.set(-1,0,0,0)}}}function i(){let P=!1,se=!1,$=null,ve=null,ce=null;return{setReversed:function(ee){if(se!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),se=ee;const Ie=ce;ce=null,this.setClear(Ie)}},getReversed:function(){return se},setTest:function(ee){ee?oe(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(ee){$!==ee&&!P&&(t.depthMask(ee),$=ee)},setFunc:function(ee){if(se&&(ee=VS[ee]),ve!==ee){switch(ee){case cd:t.depthFunc(t.NEVER);break;case ud:t.depthFunc(t.ALWAYS);break;case dd:t.depthFunc(t.LESS);break;case ks:t.depthFunc(t.LEQUAL);break;case fd:t.depthFunc(t.EQUAL);break;case hd:t.depthFunc(t.GEQUAL);break;case pd:t.depthFunc(t.GREATER);break;case md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=ee}},setLocked:function(ee){P=ee},setClear:function(ee){ce!==ee&&(ce=ee,se&&(ee=1-ee),t.clearDepth(ee))},reset:function(){P=!1,$=null,ve=null,ce=null,se=!1}}}function r(){let P=!1,se=null,$=null,ve=null,ce=null,ee=null,Te=null,Ie=null,Et=null;return{setTest:function(nt){P||(nt?oe(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(nt){se!==nt&&!P&&(t.stencilMask(nt),se=nt)},setFunc:function(nt,_i,Jn){($!==nt||ve!==_i||ce!==Jn)&&(t.stencilFunc(nt,_i,Jn),$=nt,ve=_i,ce=Jn)},setOp:function(nt,_i,Jn){(ee!==nt||Te!==_i||Ie!==Jn)&&(t.stencilOp(nt,_i,Jn),ee=nt,Te=_i,Ie=Jn)},setLocked:function(nt){P=nt},setClear:function(nt){Et!==nt&&(t.clearStencil(nt),Et=nt)},reset:function(){P=!1,se=null,$=null,ve=null,ce=null,ee=null,Te=null,Ie=null,Et=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d={},m=new WeakMap,_=[],E=null,g=!1,u=null,p=null,S=null,M=null,R=null,T=null,A=null,x=new Ze(0,0,0),C=0,N=!1,b=null,k=null,q=null,J=null,U=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=O>=1):X.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=O>=2);let Q=null,ae={};const fe=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),Ve=new Rt().fromArray(fe),Pe=new Rt().fromArray(ke);function Y(P,se,$,ve){const ce=new Uint8Array(4),ee=t.createTexture();t.bindTexture(P,ee),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<$;Te++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(se+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return ee}const de={};de[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(t.DEPTH_TEST),a.setFunc(ks),Nt(!1),gt(Ap),oe(t.CULL_FACE),ut(Di);function oe(P){f[P]!==!0&&(t.enable(P),f[P]=!0)}function Re(P){f[P]!==!1&&(t.disable(P),f[P]=!1)}function De(P,se){return d[P]!==se?(t.bindFramebuffer(P,se),d[P]=se,P===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=se),P===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Ce(P,se){let $=_,ve=!1;if(P){$=m.get(se),$===void 0&&($=[],m.set(se,$));const ce=P.textures;if($.length!==ce.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Te=ce.length;ee<Te;ee++)$[ee]=t.COLOR_ATTACHMENT0+ee;$.length=ce.length,ve=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,ve=!0);ve&&t.drawBuffers($)}function mt(P){return E!==P?(t.useProgram(P),E=P,!0):!1}const He={[br]:t.FUNC_ADD,[dS]:t.FUNC_SUBTRACT,[fS]:t.FUNC_REVERSE_SUBTRACT};He[hS]=t.MIN,He[pS]=t.MAX;const tt={[mS]:t.ZERO,[gS]:t.ONE,[_S]:t.SRC_COLOR,[od]:t.SRC_ALPHA,[ES]:t.SRC_ALPHA_SATURATE,[yS]:t.DST_COLOR,[xS]:t.DST_ALPHA,[vS]:t.ONE_MINUS_SRC_COLOR,[ld]:t.ONE_MINUS_SRC_ALPHA,[MS]:t.ONE_MINUS_DST_COLOR,[SS]:t.ONE_MINUS_DST_ALPHA,[TS]:t.CONSTANT_COLOR,[wS]:t.ONE_MINUS_CONSTANT_COLOR,[AS]:t.CONSTANT_ALPHA,[RS]:t.ONE_MINUS_CONSTANT_ALPHA};function ut(P,se,$,ve,ce,ee,Te,Ie,Et,nt){if(P===Di){g===!0&&(Re(t.BLEND),g=!1);return}if(g===!1&&(oe(t.BLEND),g=!0),P!==uS){if(P!==u||nt!==N){if((p!==br||R!==br)&&(t.blendEquation(t.FUNC_ADD),p=br,R=br),nt)switch(P){case Ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rp:t.blendFunc(t.ONE,t.ONE);break;case Cp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",P);break}else switch(P){case Ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Cp:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bp:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",P);break}S=null,M=null,T=null,A=null,x.set(0,0,0),C=0,u=P,N=nt}return}ce=ce||se,ee=ee||$,Te=Te||ve,(se!==p||ce!==R)&&(t.blendEquationSeparate(He[se],He[ce]),p=se,R=ce),($!==S||ve!==M||ee!==T||Te!==A)&&(t.blendFuncSeparate(tt[$],tt[ve],tt[ee],tt[Te]),S=$,M=ve,T=ee,A=Te),(Ie.equals(x)===!1||Et!==C)&&(t.blendColor(Ie.r,Ie.g,Ie.b,Et),x.copy(Ie),C=Et),u=P,N=!1}function ze(P,se){P.side===Ai?Re(t.CULL_FACE):oe(t.CULL_FACE);let $=P.side===hn;se&&($=!$),Nt($),P.blending===Ps&&P.transparent===!1?ut(Di):ut(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const ve=P.stencilWrite;o.setTest(ve),ve&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),D(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(P){b!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),b=P)}function gt(P){P!==oS?(oe(t.CULL_FACE),P!==k&&(P===Ap?t.cullFace(t.BACK):P===lS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),k=P}function mn(P){P!==q&&(B&&t.lineWidth(P),q=P)}function D(P,se,$){P?(oe(t.POLYGON_OFFSET_FILL),(J!==se||U!==$)&&(J=se,U=$,a.getReversed()&&(se=-se),t.polygonOffset(se,$))):Re(t.POLYGON_OFFSET_FILL)}function Dt(P){P?oe(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function We(P){P===void 0&&(P=t.TEXTURE0+W-1),Q!==P&&(t.activeTexture(P),Q=P)}function ot(P,se,$){$===void 0&&(Q===null?$=t.TEXTURE0+W-1:$=Q);let ve=ae[$];ve===void 0&&(ve={type:void 0,texture:void 0},ae[$]=ve),(ve.type!==P||ve.texture!==se)&&(Q!==$&&(t.activeTexture($),Q=$),t.bindTexture(P,se||de[P]),ve.type=P,ve.texture=se)}function he(){const P=ae[Q];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function St(){try{t.compressedTexImage2D(...arguments)}catch(P){$e("WebGLState:",P)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(P){$e("WebGLState:",P)}}function v(){try{t.texSubImage2D(...arguments)}catch(P){$e("WebGLState:",P)}}function F(){try{t.texSubImage3D(...arguments)}catch(P){$e("WebGLState:",P)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(P){$e("WebGLState:",P)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(P){$e("WebGLState:",P)}}function ie(){try{t.texStorage2D(...arguments)}catch(P){$e("WebGLState:",P)}}function ue(){try{t.texStorage3D(...arguments)}catch(P){$e("WebGLState:",P)}}function j(){try{t.texImage2D(...arguments)}catch(P){$e("WebGLState:",P)}}function Z(){try{t.texImage3D(...arguments)}catch(P){$e("WebGLState:",P)}}function _e(P){return h[P]!==void 0?h[P]:t.getParameter(P)}function Se(P,se){h[P]!==se&&(t.pixelStorei(P,se),h[P]=se)}function le(P){Ve.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Ve.copy(P))}function re(P){Pe.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),Pe.copy(P))}function Ne(P,se){let $=c.get(se);$===void 0&&($=new WeakMap,c.set(se,$));let ve=$.get(P);ve===void 0&&(ve=t.getUniformBlockIndex(se,P.name),$.set(P,ve))}function Fe(P,se){const ve=c.get(se).get(P);l.get(se)!==ve&&(t.uniformBlockBinding(se,ve,P.__bindingPointIndex),l.set(se,ve))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},Q=null,ae={},d={},m=new WeakMap,_=[],E=null,g=!1,u=null,p=null,S=null,M=null,R=null,T=null,A=null,x=new Ze(0,0,0),C=0,N=!1,b=null,k=null,q=null,J=null,U=null,Ve.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Re,bindFramebuffer:De,drawBuffers:Ce,useProgram:mt,setBlending:ut,setMaterial:ze,setFlipSided:Nt,setCullFace:gt,setLineWidth:mn,setPolygonOffset:D,setScissorTest:Dt,activeTexture:We,bindTexture:ot,unbindTexture:he,compressedTexImage2D:St,compressedTexImage3D:w,texImage2D:j,texImage3D:Z,pixelStorei:Se,getParameter:_e,updateUBOMapping:Ne,uniformBlockBinding:Fe,texStorage2D:ie,texStorage3D:ue,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:K,compressedTexSubImage3D:te,scissor:le,viewport:re,reset:Ke}}function lw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,f=new WeakMap,h=new Set;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,v){return _?new OffscreenCanvas(w,v):Fl("canvas")}function g(w,v,F){let K=1;const te=St(w);if((te.width>F||te.height>F)&&(K=F/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ie=Math.floor(K*te.width),ue=Math.floor(K*te.height);d===void 0&&(d=E(ie,ue));const j=v?E(ie,ue):d;return j.width=ie,j.height=ue,j.getContext("2d").drawImage(w,0,0,ie,ue),be("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ie+"x"+ue+")."),j}else return"data"in w&&be("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function u(w){return w.generateMipmaps}function p(w){t.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(w,v,F,K,te,ie=!1){if(w!==null){if(t[w]!==void 0)return t[w];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;K&&(ue=e.get("EXT_texture_norm16"),ue||be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===t.RED&&(F===t.FLOAT&&(j=t.R32F),F===t.HALF_FLOAT&&(j=t.R16F),F===t.UNSIGNED_BYTE&&(j=t.R8),F===t.UNSIGNED_SHORT&&ue&&(j=ue.R16_EXT),F===t.SHORT&&ue&&(j=ue.R16_SNORM_EXT)),v===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.R8UI),F===t.UNSIGNED_SHORT&&(j=t.R16UI),F===t.UNSIGNED_INT&&(j=t.R32UI),F===t.BYTE&&(j=t.R8I),F===t.SHORT&&(j=t.R16I),F===t.INT&&(j=t.R32I)),v===t.RG&&(F===t.FLOAT&&(j=t.RG32F),F===t.HALF_FLOAT&&(j=t.RG16F),F===t.UNSIGNED_BYTE&&(j=t.RG8),F===t.UNSIGNED_SHORT&&ue&&(j=ue.RG16_EXT),F===t.SHORT&&ue&&(j=ue.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RG8UI),F===t.UNSIGNED_SHORT&&(j=t.RG16UI),F===t.UNSIGNED_INT&&(j=t.RG32UI),F===t.BYTE&&(j=t.RG8I),F===t.SHORT&&(j=t.RG16I),F===t.INT&&(j=t.RG32I)),v===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RGB8UI),F===t.UNSIGNED_SHORT&&(j=t.RGB16UI),F===t.UNSIGNED_INT&&(j=t.RGB32UI),F===t.BYTE&&(j=t.RGB8I),F===t.SHORT&&(j=t.RGB16I),F===t.INT&&(j=t.RGB32I)),v===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),F===t.UNSIGNED_INT&&(j=t.RGBA32UI),F===t.BYTE&&(j=t.RGBA8I),F===t.SHORT&&(j=t.RGBA16I),F===t.INT&&(j=t.RGBA32I)),v===t.RGB&&(F===t.UNSIGNED_SHORT&&ue&&(j=ue.RGB16_EXT),F===t.SHORT&&ue&&(j=ue.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),v===t.RGBA){const Z=ie?Il:Xe.getTransfer(te);F===t.FLOAT&&(j=t.RGBA32F),F===t.HALF_FLOAT&&(j=t.RGBA16F),F===t.UNSIGNED_BYTE&&(j=Z===Je?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&ue&&(j=ue.RGBA16_EXT),F===t.SHORT&&ue&&(j=ue.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function R(w,v){let F;return w?v===null||v===mi||v===Va?F=t.DEPTH24_STENCIL8:v===ci?F=t.DEPTH32F_STENCIL8:v===Ga&&(F=t.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mi||v===Va?F=t.DEPTH_COMPONENT24:v===ci?F=t.DEPTH_COMPONENT32F:v===Ga&&(F=t.DEPTH_COMPONENT16),F}function T(w,v){return u(w)===!0||w.isFramebufferTexture&&w.minFilter!==Vt&&w.minFilter!==Zt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){const v=w.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&h.delete(v)}function x(w){const v=w.target;v.removeEventListener("dispose",x),b(v)}function C(w){const v=i.get(w);if(v.__webglInit===void 0)return;const F=w.source,K=m.get(F);if(K){const te=K[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(w),Object.keys(K).length===0&&m.delete(F)}i.remove(w)}function N(w){const v=i.get(w);t.deleteTexture(v.__webglTexture);const F=w.source,K=m.get(F);delete K[v.__cacheKey],a.memory.textures--}function b(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let te=0;te<v.__webglFramebuffer[K].length;te++)t.deleteFramebuffer(v.__webglFramebuffer[K][te]);else t.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)t.deleteFramebuffer(v.__webglFramebuffer[K]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=w.textures;for(let K=0,te=F.length;K<te;K++){const ie=i.get(F[K]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(F[K])}i.remove(w)}let k=0;function q(){k=0}function J(){return k}function U(w){k=w}function W(){const w=k;return w>=r.maxTextures&&be("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),k+=1,w}function B(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function O(w,v){const F=i.get(w);if(w.isVideoTexture&&ot(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const K=w.image;if(K===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(F,w,v);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+v)}function X(w,v){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Re(F,w,v);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+v)}function Q(w,v){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Re(F,w,v);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+v)}function ae(w,v){const F=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){De(F,w,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+v)}const fe={[gd]:t.REPEAT,[bi]:t.CLAMP_TO_EDGE,[_d]:t.MIRRORED_REPEAT},ke={[Vt]:t.NEAREST,[PS]:t.NEAREST_MIPMAP_NEAREST,[vo]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Uc]:t.LINEAR_MIPMAP_NEAREST,[Ir]:t.LINEAR_MIPMAP_LINEAR},Ve={[LS]:t.NEVER,[BS]:t.ALWAYS,[IS]:t.LESS,[th]:t.LEQUAL,[US]:t.EQUAL,[nh]:t.GEQUAL,[FS]:t.GREATER,[OS]:t.NOTEQUAL};function Pe(w,v){if(v.type===ci&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Zt||v.magFilter===Uc||v.magFilter===vo||v.magFilter===Ir||v.minFilter===Zt||v.minFilter===Uc||v.minFilter===vo||v.minFilter===Ir)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,fe[v.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,fe[v.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,fe[v.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,ke[v.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,ke[v.minFilter]),v.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Vt||v.minFilter!==vo&&v.minFilter!==Ir||v.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Y(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));const K=v.source;let te=m.get(K);te===void 0&&(te={},m.set(K,te));const ie=B(v);if(ie!==w.__cacheKey){te[ie]===void 0&&(te[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),te[ie].usedTimes++;const ue=te[w.__cacheKey];ue!==void 0&&(te[w.__cacheKey].usedTimes--,ue.usedTimes===0&&N(v)),w.__cacheKey=ie,w.__webglTexture=te[ie].texture}return F}function de(w,v,F){return Math.floor(Math.floor(w/F)/v)}function oe(w,v,F,K){const ie=w.updateRanges;if(ie.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,F,K,v.data);else{ie.sort((Se,le)=>Se.start-le.start);let ue=0;for(let Se=1;Se<ie.length;Se++){const le=ie[ue],re=ie[Se],Ne=le.start+le.count,Fe=de(re.start,v.width,4),Ke=de(le.start,v.width,4);re.start<=Ne+1&&Fe===Ke&&de(re.start+re.count-1,v.width,4)===Fe?le.count=Math.max(le.count,re.start+re.count-le.start):(++ue,ie[ue]=re)}ie.length=ue+1;const j=n.getParameter(t.UNPACK_ROW_LENGTH),Z=n.getParameter(t.UNPACK_SKIP_PIXELS),_e=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let Se=0,le=ie.length;Se<le;Se++){const re=ie[Se],Ne=Math.floor(re.start/4),Fe=Math.ceil(re.count/4),Ke=Ne%v.width,P=Math.floor(Ne/v.width),se=Fe,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,Ke,P,se,$,F,K,v.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,j),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function Re(w,v,F){let K=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=t.TEXTURE_3D);const te=Y(w,v),ie=v.source;n.bindTexture(K,w.__webglTexture,t.TEXTURE0+F);const ue=i.get(ie);if(ie.version!==ue.__version||te===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const $=Xe.getPrimaries(Xe.workingColorSpace),ve=v.colorSpace===ir?null:Xe.getPrimaries(v.colorSpace),ce=v.colorSpace===ir||$===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=g(v.image,!1,r.maxTextureSize);Z=he(v,Z);const _e=s.convert(v.format,v.colorSpace),Se=s.convert(v.type);let le=M(v.internalFormat,_e,Se,v.normalized,v.colorSpace,v.isVideoTexture);Pe(K,v);let re;const Ne=v.mipmaps,Fe=v.isVideoTexture!==!0,Ke=ue.__version===void 0||te===!0,P=ie.dataReady,se=T(v,Z);if(v.isDepthTexture)le=R(v.format===Ur,v.type),Ke&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,le,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,le,Z.width,Z.height,0,_e,Se,null));else if(v.isDataTexture)if(Ne.length>0){Fe&&Ke&&n.texStorage2D(t.TEXTURE_2D,se,le,Ne[0].width,Ne[0].height);for(let $=0,ve=Ne.length;$<ve;$++)re=Ne[$],Fe?P&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,_e,Se,re.data):n.texImage2D(t.TEXTURE_2D,$,le,re.width,re.height,0,_e,Se,re.data);v.generateMipmaps=!1}else Fe?(Ke&&n.texStorage2D(t.TEXTURE_2D,se,le,Z.width,Z.height),P&&oe(v,Z,_e,Se)):n.texImage2D(t.TEXTURE_2D,0,le,Z.width,Z.height,0,_e,Se,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,Ne[0].width,Ne[0].height,Z.depth);for(let $=0,ve=Ne.length;$<ve;$++)if(re=Ne[$],v.format!==$n)if(_e!==null)if(Fe){if(P)if(v.layerUpdates.size>0){const ce=nm(re.width,re.height,v.format,v.type);for(const ee of v.layerUpdates){const Te=re.data.subarray(ee*ce/re.data.BYTES_PER_ELEMENT,(ee+1)*ce/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ee,re.width,re.height,1,_e,Te)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,Z.depth,_e,re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,le,re.width,re.height,Z.depth,0,re.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,Z.depth,_e,Se,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,le,re.width,re.height,Z.depth,0,_e,Se,re.data)}else{Fe&&Ke&&n.texStorage2D(t.TEXTURE_2D,se,le,Ne[0].width,Ne[0].height);for(let $=0,ve=Ne.length;$<ve;$++)re=Ne[$],v.format!==$n?_e!==null?Fe?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,_e,re.data):n.compressedTexImage2D(t.TEXTURE_2D,$,le,re.width,re.height,0,re.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?P&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,_e,Se,re.data):n.texImage2D(t.TEXTURE_2D,$,le,re.width,re.height,0,_e,Se,re.data)}else if(v.isDataArrayTexture)if(Fe){if(Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,Z.width,Z.height,Z.depth),P)if(v.layerUpdates.size>0){const $=nm(Z.width,Z.height,v.format,v.type);for(const ve of v.layerUpdates){const ce=Z.data.subarray(ve*$/Z.data.BYTES_PER_ELEMENT,(ve+1)*$/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,Z.width,Z.height,1,_e,Se,ce)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,_e,Se,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,le,Z.width,Z.height,Z.depth,0,_e,Se,Z.data);else if(v.isData3DTexture)Fe?(Ke&&n.texStorage3D(t.TEXTURE_3D,se,le,Z.width,Z.height,Z.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,_e,Se,Z.data)):n.texImage3D(t.TEXTURE_3D,0,le,Z.width,Z.height,Z.depth,0,_e,Se,Z.data);else if(v.isFramebufferTexture){if(Ke)if(Fe)n.texStorage2D(t.TEXTURE_2D,se,le,Z.width,Z.height);else{let $=Z.width,ve=Z.height;for(let ce=0;ce<se;ce++)n.texImage2D(t.TEXTURE_2D,ce,le,$,ve,0,_e,Se,null),$>>=1,ve>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Z.parentNode!==$){$.appendChild(Z),h.add(v),$.onpaint=Ie=>{const Et=Ie.changedElements;for(const nt of h)Et.includes(nt.image)&&(nt.needsUpdate=!0)},$.requestPaint();return}const ve=0,ce=t.RGBA,ee=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,ve,ce,ee,Te,Z),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Fe&&Ke){const $=St(Ne[0]);n.texStorage2D(t.TEXTURE_2D,se,le,$.width,$.height)}for(let $=0,ve=Ne.length;$<ve;$++)re=Ne[$],Fe?P&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e,Se,re):n.texImage2D(t.TEXTURE_2D,$,le,_e,Se,re);v.generateMipmaps=!1}else if(Fe){if(Ke){const $=St(Z);n.texStorage2D(t.TEXTURE_2D,se,le,$.width,$.height)}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Se,Z)}else n.texImage2D(t.TEXTURE_2D,0,le,_e,Se,Z);u(v)&&p(K),ue.__version=ie.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function De(w,v,F){if(v.image.length!==6)return;const K=Y(w,v),te=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+F);const ie=i.get(te);if(te.version!==ie.__version||K===!0){n.activeTexture(t.TEXTURE0+F);const ue=Xe.getPrimaries(Xe.workingColorSpace),j=v.colorSpace===ir?null:Xe.getPrimaries(v.colorSpace),Z=v.colorSpace===ir||ue===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const _e=v.isCompressedTexture||v.image[0].isCompressedTexture,Se=v.image[0]&&v.image[0].isDataTexture,le=[];for(let ee=0;ee<6;ee++)!_e&&!Se?le[ee]=g(v.image[ee],!0,r.maxCubemapSize):le[ee]=Se?v.image[ee].image:v.image[ee],le[ee]=he(v,le[ee]);const re=le[0],Ne=s.convert(v.format,v.colorSpace),Fe=s.convert(v.type),Ke=M(v.internalFormat,Ne,Fe,v.normalized,v.colorSpace),P=v.isVideoTexture!==!0,se=ie.__version===void 0||K===!0,$=te.dataReady;let ve=T(v,re);Pe(t.TEXTURE_CUBE_MAP,v);let ce;if(_e){P&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ke,re.width,re.height);for(let ee=0;ee<6;ee++){ce=le[ee].mipmaps;for(let Te=0;Te<ce.length;Te++){const Ie=ce[Te];v.format!==$n?Ne!==null?P?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ie.width,Ie.height,Ne,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ke,Ie.width,Ie.height,0,Ie.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ie.width,Ie.height,Ne,Fe,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ke,Ie.width,Ie.height,0,Ne,Fe,Ie.data)}}}else{if(ce=v.mipmaps,P&&se){ce.length>0&&ve++;const ee=St(le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Se){P?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,le[ee].width,le[ee].height,Ne,Fe,le[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,le[ee].width,le[ee].height,0,Ne,Fe,le[ee].data);for(let Te=0;Te<ce.length;Te++){const Et=ce[Te].image[ee].image;P?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Et.width,Et.height,Ne,Fe,Et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ke,Et.width,Et.height,0,Ne,Fe,Et.data)}}else{P?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,Fe,le[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,Ne,Fe,le[ee]);for(let Te=0;Te<ce.length;Te++){const Ie=ce[Te];P?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Ne,Fe,Ie.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ke,Ne,Fe,Ie.image[ee])}}}u(v)&&p(t.TEXTURE_CUBE_MAP),ie.__version=te.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ce(w,v,F,K,te,ie){const ue=s.convert(F.format,F.colorSpace),j=s.convert(F.type),Z=M(F.internalFormat,ue,j,F.normalized,F.colorSpace),_e=i.get(v),Se=i.get(F);if(Se.__renderTarget=v,!_e.__hasExternalTextures){const le=Math.max(1,v.width>>ie),re=Math.max(1,v.height>>ie);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ie,Z,le,re,v.depth,0,ue,j,null):n.texImage2D(te,ie,Z,le,re,0,ue,j,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),We(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,te,Se.__webglTexture,0,Dt(v)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,te,Se.__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function mt(w,v,F){if(t.bindRenderbuffer(t.RENDERBUFFER,w),v.depthBuffer){const K=v.depthTexture,te=K&&K.isDepthTexture?K.type:null,ie=R(v.stencilBuffer,te),ue=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;We(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Dt(v),ie,v.width,v.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,Dt(v),ie,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ie,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,w)}else{const K=v.textures;for(let te=0;te<K.length;te++){const ie=K[te],ue=s.convert(ie.format,ie.colorSpace),j=s.convert(ie.type),Z=M(ie.internalFormat,ue,j,ie.normalized,ie.colorSpace);We(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Dt(v),Z,v.width,v.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,Dt(v),Z,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Z,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(w,v,F){const K=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(v.depthTexture);if(te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(te.__webglInit===void 0&&(te.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,v.depthTexture);const _e=s.convert(v.depthTexture.format),Se=s.convert(v.depthTexture.type);let le;v.depthTexture.format===zi?le=t.DEPTH_COMPONENT24:v.depthTexture.format===Ur&&(le=t.DEPTH24_STENCIL8);for(let re=0;re<6;re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,le,v.width,v.height,0,_e,Se,null)}}else O(v.depthTexture,0);const ie=te.__webglTexture,ue=Dt(v),j=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,Z=v.depthTexture.format===Ur?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===zi)We(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,j,ie,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Z,j,ie,0);else if(v.depthTexture.format===Ur)We(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,j,ie,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Z,j,ie,0);else throw new Error("Unknown depthTexture format")}function tt(w){const v=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=K}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)He(v.__webglFramebuffer[K],w,K);else{const K=w.texture.mipmaps;K&&K.length>0?He(v.__webglFramebuffer[0],w,0):He(v.__webglFramebuffer,w,0)}else if(F){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=t.createRenderbuffer(),mt(v.__webglDepthbuffer[K],w,!1);else{const te=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ie)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),mt(v.__webglDepthbuffer,w,!1);else{const te=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ie)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ut(w,v,F){const K=i.get(w);v!==void 0&&Ce(K.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&tt(w)}function ze(w){const v=w.texture,F=i.get(w),K=i.get(v);w.addEventListener("dispose",x);const te=w.textures,ie=w.isWebGLCubeRenderTarget===!0,ue=te.length>1;if(ue||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=v.version,a.memory.textures++),ie){F.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[j]=[];for(let Z=0;Z<v.mipmaps.length;Z++)F.__webglFramebuffer[j][Z]=t.createFramebuffer()}else F.__webglFramebuffer[j]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)F.__webglFramebuffer[j]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(ue)for(let j=0,Z=te.length;j<Z;j++){const _e=i.get(te[j]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&We(w)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let j=0;j<te.length;j++){const Z=te[j];F.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[j]);const _e=s.convert(Z.format,Z.colorSpace),Se=s.convert(Z.type),le=M(Z.internalFormat,_e,Se,Z.normalized,Z.colorSpace,w.isXRRenderTarget===!0),re=Dt(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,le,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,F.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),mt(F.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)Ce(F.__webglFramebuffer[j][Z],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Z);else Ce(F.__webglFramebuffer[j],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);u(v)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let j=0,Z=te.length;j<Z;j++){const _e=te[j],Se=i.get(_e);let le=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Se.__webglTexture),Pe(le,_e),Ce(F.__webglFramebuffer,w,_e,t.COLOR_ATTACHMENT0+j,le,0),u(_e)&&p(le)}n.unbindTexture()}else{let j=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(j,K.__webglTexture),Pe(j,v),v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)Ce(F.__webglFramebuffer[Z],w,v,t.COLOR_ATTACHMENT0,j,Z);else Ce(F.__webglFramebuffer,w,v,t.COLOR_ATTACHMENT0,j,0);u(v)&&p(j),n.unbindTexture()}w.depthBuffer&&tt(w)}function Nt(w){const v=w.textures;for(let F=0,K=v.length;F<K;F++){const te=v[F];if(u(te)){const ie=S(w),ue=i.get(te).__webglTexture;n.bindTexture(ie,ue),p(ie),n.unbindTexture()}}}const gt=[],mn=[];function D(w){if(w.samples>0){if(We(w)===!1){const v=w.textures,F=w.width,K=w.height;let te=t.COLOR_BUFFER_BIT;const ie=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(w),j=v.length>1;if(j)for(let _e=0;_e<v.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const Z=w.texture.mipmaps;Z&&Z.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[_e]);const Se=i.get(v[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,F,K,0,0,F,K,te,t.NEAREST),l===!0&&(gt.length=0,mn.length=0,gt.push(t.COLOR_ATTACHMENT0+_e),w.depthBuffer&&w.resolveDepthBuffer===!1&&(gt.push(ie),mn.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,mn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,gt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let _e=0;_e<v.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,ue.__webglColorRenderbuffer[_e]);const Se=i.get(v[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function Dt(w){return Math.min(r.maxSamples,w.samples)}function We(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ot(w){const v=a.render.frame;f.get(w)!==v&&(f.set(w,v),w.update())}function he(w,v){const F=w.colorSpace,K=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Ll&&F!==ir&&(Xe.getTransfer(F)===Je?(K!==$n||te!==Ln)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",F)),v}function St(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.getTextureUnits=J,this.setTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=ae,this.rebindTextures=ut,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function cw(t,e){function n(i,r=ir){let s;const a=Xe.getTransfer(r);if(i===Ln)return t.UNSIGNED_BYTE;if(i===Kf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Z_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Q_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Y_)return t.BYTE;if(i===K_)return t.SHORT;if(i===Ga)return t.UNSIGNED_SHORT;if(i===Yf)return t.INT;if(i===mi)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===ki)return t.HALF_FLOAT;if(i===J_)return t.ALPHA;if(i===e0)return t.RGB;if(i===$n)return t.RGBA;if(i===zi)return t.DEPTH_COMPONENT;if(i===Ur)return t.DEPTH_STENCIL;if(i===t0)return t.RED;if(i===Qf)return t.RED_INTEGER;if(i===Wr)return t.RG;if(i===Jf)return t.RG_INTEGER;if(i===eh)return t.RGBA_INTEGER;if(i===nl||i===il||i===rl||i===sl)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vd||i===xd||i===Sd||i===yd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Md||i===Ed||i===Td||i===wd||i===Ad||i===Nl||i===Rd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Md||i===Ed)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Td)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===wd)return s.COMPRESSED_R11_EAC;if(i===Ad)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Nl)return s.COMPRESSED_RG11_EAC;if(i===Rd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Cd||i===bd||i===Pd||i===Nd||i===Dd||i===Ld||i===Id||i===Ud||i===Fd||i===Od||i===Bd||i===kd||i===zd||i===Gd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ld)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Id)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ud)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Od)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vd||i===Hd||i===Wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vd)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xd||i===jd||i===Dl||i===qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Va?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new h0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gi({vertexShader:uw,fragmentShader:dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gi(new nc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hw extends $r{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,_=null;const E=typeof XRWebGLBinding<"u",g=new fw,u={},p=n.getContextAttributes();let S=null,M=null;const R=[],T=[],A=new rt;let x=null;const C=new Dn;C.viewport=new Rt;const N=new Dn;N.viewport=new Rt;const b=[C,N],k=new Ey;let q=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let de=R[Y];return de===void 0&&(de=new Hc,R[Y]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Y){let de=R[Y];return de===void 0&&(de=new Hc,R[Y]=de),de.getGripSpace()},this.getHand=function(Y){let de=R[Y];return de===void 0&&(de=new Hc,R[Y]=de),de.getHandSpace()};function U(Y){const de=T.indexOf(Y.inputSource);if(de===-1)return;const oe=R[de];oe!==void 0&&(oe.update(Y.inputSource,Y.frame,c||a),oe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",B);for(let Y=0;Y<R.length;Y++){const de=T[Y];de!==null&&(T[Y]=null,R[Y].disconnect(de))}q=null,J=null,g.reset();for(const Y in u)delete u[Y];e.setRenderTarget(S),m=null,d=null,h=null,r=null,M=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",W),r.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Re=null,De=null;p.depth&&(De=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=p.stencil?Ur:zi,Re=p.stencil?Va:mi);const Ce={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new pi(d.textureWidth,d.textureHeight,{format:$n,type:Ln,depthTexture:new Gs(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new pi(m.framebufferWidth,m.framebufferHeight,{format:$n,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(Y){for(let de=0;de<Y.removed.length;de++){const oe=Y.removed[de],Re=T.indexOf(oe);Re>=0&&(T[Re]=null,R[Re].disconnect(oe))}for(let de=0;de<Y.added.length;de++){const oe=Y.added[de];let Re=T.indexOf(oe);if(Re===-1){for(let Ce=0;Ce<R.length;Ce++)if(Ce>=T.length){T.push(oe),Re=Ce;break}else if(T[Ce]===null){T[Ce]=oe,Re=Ce;break}if(Re===-1)break}const De=R[Re];De&&De.connect(oe)}}const O=new V,X=new V;function Q(Y,de,oe){O.setFromMatrixPosition(de.matrixWorld),X.setFromMatrixPosition(oe.matrixWorld);const Re=O.distanceTo(X),De=de.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,mt=De[14]/(De[10]-1),He=De[14]/(De[10]+1),tt=(De[9]+1)/De[5],ut=(De[9]-1)/De[5],ze=(De[8]-1)/De[0],Nt=(Ce[8]+1)/Ce[0],gt=mt*ze,mn=mt*Nt,D=Re/(-ze+Nt),Dt=D*-ze;if(de.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Dt),Y.translateZ(D),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),De[10]===-1)Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const We=mt+D,ot=He+D,he=gt-Dt,St=mn+(Re-Dt),w=tt*He/ot*We,v=ut*He/ot*We;Y.projectionMatrix.makePerspective(he,St,w,v,We,ot),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ae(Y,de){de===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(de.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let de=Y.near,oe=Y.far;g.texture!==null&&(g.depthNear>0&&(de=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),k.near=N.near=C.near=de,k.far=N.far=C.far=oe,(q!==k.near||J!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),q=k.near,J=k.far),k.layers.mask=Y.layers.mask|6,C.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;const Re=Y.parent,De=k.cameras;ae(k,Re);for(let Ce=0;Ce<De.length;Ce++)ae(De[Ce],Re);De.length===2?Q(k,C,N):k.projectionMatrix.copy(C.projectionMatrix),fe(Y,k,Re)};function fe(Y,de,oe){oe===null?Y.matrix.copy(de.matrixWorld):(Y.matrix.copy(oe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(de.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Y){return u[Y]};let ke=null;function Ve(Y,de){if(f=de.getViewerPose(c||a),_=de,f!==null){const oe=f.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Re=!1;oe.length!==k.cameras.length&&(k.cameras.length=0,Re=!0);for(let He=0;He<oe.length;He++){const tt=oe[He];let ut=null;if(m!==null)ut=m.getViewport(tt);else{const Nt=h.getViewSubImage(d,tt);ut=Nt.viewport,He===0&&(e.setRenderTargetTextures(M,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(M))}let ze=b[He];ze===void 0&&(ze=new Dn,ze.layers.enable(He),ze.viewport=new Rt,b[He]=ze),ze.matrix.fromArray(tt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(tt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(ut.x,ut.y,ut.width,ut.height),He===0&&(k.matrix.copy(ze.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Re===!0&&k.cameras.push(ze)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const He=h.getDepthInformation(oe[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(De&&De.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let He=0;He<oe.length;He++){const tt=oe[He].camera;if(tt){let ut=u[tt];ut||(ut=new h0,u[tt]=ut);const ze=h.getCameraImage(tt);ut.sourceTexture=ze}}}}for(let oe=0;oe<R.length;oe++){const Re=T[oe],De=R[oe];Re!==null&&De!==void 0&&De.update(Re,de,c||a)}ke&&ke(Y,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Pe=new _0;Pe.setAnimationLoop(Ve),this.setAnimationLoop=function(Y){ke=Y},this.dispose=function(){}}}const pw=new Pt,T0=new Le;T0.set(-1,0,0,0,1,0,0,0,1);function mw(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,p0(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,p,S,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),h(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&m(g,u,M)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),E(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,p,S):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===hn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===hn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const p=e.get(u),S=p.envMap,M=p.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(pw.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(T0),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,p,S){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*p,g.scale.value=S*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,p){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=p.texture,g.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function E(g,u){const p=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(p.matrixWorld),g.nearDistance.value=p.shadow.camera.near,g.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,S){const M=S.program;i.uniformBlockBinding(p,M)}function c(p,S){let M=r[p.id];M===void 0&&(_(p),M=f(p),r[p.id]=M,p.addEventListener("dispose",g));const R=S.program;i.updateUBOMapping(p,R);const T=e.render.frame;s[p.id]!==T&&(d(p),s[p.id]=T)}function f(p){const S=h();p.__bindingPointIndex=S;const M=t.createBuffer(),R=p.__size,T=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,M),M}function h(){for(let p=0;p<o;p++)if(a.indexOf(p)===-1)return a.push(p),p;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){const S=r[p.id],M=p.uniforms,R=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let T=0,A=M.length;T<A;T++){const x=Array.isArray(M[T])?M[T]:[M[T]];for(let C=0,N=x.length;C<N;C++){const b=x[C];if(m(b,T,C,R)===!0){const k=b.__offset,q=Array.isArray(b.value)?b.value:[b.value];let J=0;for(let U=0;U<q.length;U++){const W=q[U],B=E(W);typeof W=="number"||typeof W=="boolean"?(b.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,k+J,b.__data)):W.isMatrix3?(b.__data[0]=W.elements[0],b.__data[1]=W.elements[1],b.__data[2]=W.elements[2],b.__data[3]=0,b.__data[4]=W.elements[3],b.__data[5]=W.elements[4],b.__data[6]=W.elements[5],b.__data[7]=0,b.__data[8]=W.elements[6],b.__data[9]=W.elements[7],b.__data[10]=W.elements[8],b.__data[11]=0):ArrayBuffer.isView(W)?b.__data.set(new W.constructor(W.buffer,W.byteOffset,b.__data.length)):(W.toArray(b.__data,J),J+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,S,M,R){const T=p.value,A=S+"_"+M;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:ArrayBuffer.isView(T)?R[A]=T.slice():R[A]=T.clone(),!0;{const x=R[A];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return R[A]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function _(p){const S=p.uniforms;let M=0;const R=16;for(let A=0,x=S.length;A<x;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let N=0,b=C.length;N<b;N++){const k=C[N],q=Array.isArray(k.value)?k.value:[k.value];for(let J=0,U=q.length;J<U;J++){const W=q[J],B=E(W),O=M%R,X=O%B.boundary,Q=O+X;M+=X,Q!==0&&R-Q<B.storage&&(M+=R-Q),k.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=B.storage}}}const T=M%R;return T>0&&(M+=R-T),p.__size=M,p.__cache={},this}function E(p){const S={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(S.boundary=4,S.storage=4):p.isVector2?(S.boundary=8,S.storage=8):p.isVector3||p.isColor?(S.boundary=16,S.storage=12):p.isVector4?(S.boundary=16,S.storage=16):p.isMatrix3?(S.boundary=48,S.storage=48):p.isMatrix4?(S.boundary=64,S.storage=64):p.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(S.boundary=16,S.storage=p.byteLength):be("WebGLRenderer: Unsupported uniform value type.",p),S}function g(p){const S=p.target;S.removeEventListener("dispose",g);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function u(){for(const p in r)t.deleteBuffer(r[p]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const _w=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function vw(){return ii===null&&(ii=new cy(_w,16,16,Wr,ki),ii.name="DFG_LUT",ii.minFilter=Zt,ii.magFilter=Zt,ii.wrapS=bi,ii.wrapT=bi,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class xw{constructor(e={}){const{canvas:n=zS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Ln}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const E=m,g=new Set([eh,Jf,Qf]),u=new Set([Ln,mi,Ga,Va,Kf,Zf]),p=new Uint32Array(4),S=new Int32Array(4),M=new V;let R=null,T=null;const A=[],x=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let b=!1,k=null;this._outputColorSpace=bn;let q=0,J=0,U=null,W=-1,B=null;const O=new Rt,X=new Rt;let Q=null;const ae=new Ze(0);let fe=0,ke=n.width,Ve=n.height,Pe=1,Y=null,de=null;const oe=new Rt(0,0,ke,Ve),Re=new Rt(0,0,ke,Ve);let De=!1;const Ce=new u0;let mt=!1,He=!1;const tt=new Pt,ut=new V,ze=new Rt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function mn(){return U===null?Pe:1}let D=i;function Dt(y,I){return n.getContext(y,I)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$f}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),D===null){const I="webgl2";if(D=Dt(I,y),D===null)throw Dt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw $e("WebGLRenderer: "+y.message),y}let We,ot,he,St,w,v,F,K,te,ie,ue,j,Z,_e,Se,le,re,Ne,Fe,Ke,P,se,$;function ve(){We=new vT(D),We.init(),P=new cw(D,We),ot=new uT(D,We,e,P),he=new ow(D,We),ot.reversedDepthBuffer&&d&&he.buffers.depth.setReversed(!0),St=new yT(D),w=new q1,v=new lw(D,We,he,w,ot,P,St),F=new _T(N),K=new wy(D),se=new lT(D,K),te=new xT(D,K,St,se),ie=new ET(D,te,K,se,St),Ne=new MT(D,ot,v),Se=new dT(w),ue=new j1(N,F,We,ot,se,Se),j=new mw(N,w),Z=new Y1,_e=new tw(We),re=new oT(N,F,he,ie,_,l),le=new aw(N,ie,ot),$=new gw(D,St,ot,he),Fe=new cT(D,We,St),Ke=new ST(D,We,St),St.programs=ue.programs,N.capabilities=ot,N.extensions=We,N.properties=w,N.renderLists=Z,N.shadowMap=le,N.state=he,N.info=St}ve(),E!==Ln&&(C=new wT(E,n.width,n.height,r,s));const ce=new hw(N,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=We.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=We.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(y){y!==void 0&&(Pe=y,this.setSize(ke,Ve,!1))},this.getSize=function(y){return y.set(ke,Ve)},this.setSize=function(y,I,H=!0){if(ce.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=y,Ve=I,n.width=Math.floor(y*Pe),n.height=Math.floor(I*Pe),H===!0&&(n.style.width=y+"px",n.style.height=I+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(ke*Pe,Ve*Pe).floor()},this.setDrawingBufferSize=function(y,I,H){ke=y,Ve=I,Pe=H,n.width=Math.floor(y*H),n.height=Math.floor(I*H),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(E===Ln){$e("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){be("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(O)},this.getViewport=function(y){return y.copy(oe)},this.setViewport=function(y,I,H,z){y.isVector4?oe.set(y.x,y.y,y.z,y.w):oe.set(y,I,H,z),he.viewport(O.copy(oe).multiplyScalar(Pe).round())},this.getScissor=function(y){return y.copy(Re)},this.setScissor=function(y,I,H,z){y.isVector4?Re.set(y.x,y.y,y.z,y.w):Re.set(y,I,H,z),he.scissor(X.copy(Re).multiplyScalar(Pe).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(y){he.setScissorTest(De=y)},this.setOpaqueSort=function(y){Y=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,H=!0){let z=0;if(y){let G=!1;if(U!==null){const ge=U.texture.format;G=g.has(ge)}if(G){const ge=U.texture.type,ye=u.has(ge),me=re.getClearColor(),Ee=re.getClearAlpha(),we=me.r,Ue=me.g,Be=me.b;ye?(p[0]=we,p[1]=Ue,p[2]=Be,p[3]=Ee,D.clearBufferuiv(D.COLOR,0,p)):(S[0]=we,S[1]=Ue,S[2]=Be,S[3]=Ee,D.clearBufferiv(D.COLOR,0,S))}else z|=D.COLOR_BUFFER_BIT}I&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),re.dispose(),Z.dispose(),_e.dispose(),w.dispose(),F.dispose(),ie.dispose(),se.dispose(),$.dispose(),ue.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ch),ce.removeEventListener("sessionend",uh),yr.stop()};function ee(y){y.preventDefault(),Up("WebGLRenderer: Context Lost."),b=!0}function Te(){Up("WebGLRenderer: Context Restored."),b=!1;const y=St.autoReset,I=le.enabled,H=le.autoUpdate,z=le.needsUpdate,G=le.type;ve(),St.autoReset=y,le.enabled=I,le.autoUpdate=H,le.needsUpdate=z,le.type=G}function Ie(y){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Et(y){const I=y.target;I.removeEventListener("dispose",Et),nt(I)}function nt(y){_i(y),w.remove(y)}function _i(y){const I=w.get(y).programs;I!==void 0&&(I.forEach(function(H){ue.releaseProgram(H)}),y.isShaderMaterial&&ue.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,H,z,G,ge){I===null&&(I=Nt);const ye=G.isMesh&&G.matrixWorld.determinant()<0,me=R0(y,I,H,z,G);he.setMaterial(z,ye);let Ee=H.index,we=1;if(z.wireframe===!0){if(Ee=te.getWireframeAttribute(H),Ee===void 0)return;we=2}const Ue=H.drawRange,Be=H.attributes.position;let Ae=Ue.start*we,it=(Ue.start+Ue.count)*we;ge!==null&&(Ae=Math.max(Ae,ge.start*we),it=Math.min(it,(ge.start+ge.count)*we)),Ee!==null?(Ae=Math.max(Ae,0),it=Math.min(it,Ee.count)):Be!=null&&(Ae=Math.max(Ae,0),it=Math.min(it,Be.count));const Tt=it-Ae;if(Tt<0||Tt===1/0)return;se.setup(G,z,me,H,Ee);let yt,st=Fe;if(Ee!==null&&(yt=K.get(Ee),st=Ke,st.setIndex(yt)),G.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*mn()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(G.isLine){let Xt=z.linewidth;Xt===void 0&&(Xt=1),he.setLineWidth(Xt*mn()),G.isLineSegments?st.setMode(D.LINES):G.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else G.isPoints?st.setMode(D.POINTS):G.isSprite&&st.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(We.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Xt=G._multiDrawStarts,xe=G._multiDrawCounts,gn=G._multiDrawCount,qe=Ee?K.get(Ee).bytesPerElement:1,Rn=w.get(z).currentProgram.getUniforms();for(let ei=0;ei<gn;ei++)Rn.setValue(D,"_gl_DrawID",ei),st.render(Xt[ei]/qe,xe[ei])}else if(G.isInstancedMesh)st.renderInstances(Ae,Tt,G.count);else if(H.isInstancedBufferGeometry){const Xt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,xe=Math.min(H.instanceCount,Xt);st.renderInstances(Ae,Tt,xe)}else st.render(Ae,Tt)};function Jn(y,I,H){y.transparent===!0&&y.side===Ai&&y.forceSinglePass===!1?(y.side=hn,y.needsUpdate=!0,Ja(y,I,H),y.side=_r,y.needsUpdate=!0,Ja(y,I,H),y.side=Ai):Ja(y,I,H)}this.compile=function(y,I,H=null){H===null&&(H=y),T=_e.get(H),T.init(I),x.push(T),H.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),y!==H&&y.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const z=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ge=G.material;if(ge)if(Array.isArray(ge))for(let ye=0;ye<ge.length;ye++){const me=ge[ye];Jn(me,H,G),z.add(me)}else Jn(ge,H,G),z.add(ge)}),T=x.pop(),z},this.compileAsync=function(y,I,H=null){const z=this.compile(y,I,H);return new Promise(G=>{function ge(){if(z.forEach(function(ye){w.get(ye).currentProgram.isReady()&&z.delete(ye)}),z.size===0){G(y);return}setTimeout(ge,10)}We.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let sc=null;function w0(y){sc&&sc(y)}function ch(){yr.stop()}function uh(){yr.start()}const yr=new _0;yr.setAnimationLoop(w0),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(y){sc=y,ce.setAnimationLoop(y),y===null?yr.stop():yr.start()},ce.addEventListener("sessionstart",ch),ce.addEventListener("sessionend",uh),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;k!==null&&k.renderStart(y,I);const H=ce.enabled===!0&&ce.isPresenting===!0,z=C!==null&&(U===null||H)&&C.begin(N,U);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(I),I=ce.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,I,U),T=_e.get(y,x.length),T.init(I),T.state.textureUnits=v.getTextureUnits(),x.push(T),tt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ce.setFromProjectionMatrix(tt,ui,I.reversedDepth),He=this.localClippingEnabled,mt=Se.init(this.clippingPlanes,He),R=Z.get(y,A.length),R.init(),A.push(R),ce.enabled===!0&&ce.isPresenting===!0){const ye=N.xr.getDepthSensingMesh();ye!==null&&ac(ye,I,-1/0,N.sortObjects)}ac(y,I,0,N.sortObjects),R.finish(),N.sortObjects===!0&&R.sort(Y,de),gt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,gt&&re.addToRenderList(R,y),this.info.render.frame++,mt===!0&&Se.beginShadows();const G=T.state.shadowsArray;if(le.render(G,y,I),mt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&C.hasRenderPass())===!1){const ye=R.opaque,me=R.transmissive;if(T.setupLights(),I.isArrayCamera){const Ee=I.cameras;if(me.length>0)for(let we=0,Ue=Ee.length;we<Ue;we++){const Be=Ee[we];fh(ye,me,y,Be)}gt&&re.render(y);for(let we=0,Ue=Ee.length;we<Ue;we++){const Be=Ee[we];dh(R,y,Be,Be.viewport)}}else me.length>0&&fh(ye,me,y,I),gt&&re.render(y),dh(R,y,I)}U!==null&&J===0&&(v.updateMultisampleRenderTarget(U),v.updateRenderTargetMipmap(U)),z&&C.end(N),y.isScene===!0&&y.onAfterRender(N,y,I),se.resetDefaultState(),W=-1,B=null,x.pop(),x.length>0?(T=x[x.length-1],v.setTextureUnits(T.state.textureUnits),mt===!0&&Se.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?R=A[A.length-1]:R=null,k!==null&&k.renderEnd()};function ac(y,I,H,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ce.intersectsSprite(y)){z&&ze.setFromMatrixPosition(y.matrixWorld).applyMatrix4(tt);const ye=ie.update(y),me=y.material;me.visible&&R.push(y,ye,me,H,ze.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ce.intersectsObject(y))){const ye=ie.update(y),me=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ze.copy(y.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ze.copy(ye.boundingSphere.center)),ze.applyMatrix4(y.matrixWorld).applyMatrix4(tt)),Array.isArray(me)){const Ee=ye.groups;for(let we=0,Ue=Ee.length;we<Ue;we++){const Be=Ee[we],Ae=me[Be.materialIndex];Ae&&Ae.visible&&R.push(y,ye,Ae,H,ze.z,Be)}}else me.visible&&R.push(y,ye,me,H,ze.z,null)}}const ge=y.children;for(let ye=0,me=ge.length;ye<me;ye++)ac(ge[ye],I,H,z)}function dh(y,I,H,z){const{opaque:G,transmissive:ge,transparent:ye}=y;T.setupLightsView(H),mt===!0&&Se.setGlobalState(N.clippingPlanes,H),z&&he.viewport(O.copy(z)),G.length>0&&Qa(G,I,H),ge.length>0&&Qa(ge,I,H),ye.length>0&&Qa(ye,I,H),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function fh(y,I,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const Ae=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new pi(1,1,{generateMipmaps:!0,type:Ae?ki:Ln,minFilter:Ir,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const ge=T.state.transmissionRenderTarget[z.id],ye=z.viewport||O;ge.setSize(ye.z*N.transmissionResolutionScale,ye.w*N.transmissionResolutionScale);const me=N.getRenderTarget(),Ee=N.getActiveCubeFace(),we=N.getActiveMipmapLevel();N.setRenderTarget(ge),N.getClearColor(ae),fe=N.getClearAlpha(),fe<1&&N.setClearColor(16777215,.5),N.clear(),gt&&re.render(H);const Ue=N.toneMapping;N.toneMapping=hi;const Be=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),mt===!0&&Se.setGlobalState(N.clippingPlanes,z),Qa(y,H,z),v.updateMultisampleRenderTarget(ge),v.updateRenderTargetMipmap(ge),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let it=0,Tt=I.length;it<Tt;it++){const yt=I[it],{object:st,geometry:Xt,material:xe,group:gn}=yt;if(xe.side===Ai&&st.layers.test(z.layers)){const qe=xe.side;xe.side=hn,xe.needsUpdate=!0,hh(st,H,z,Xt,xe,gn),xe.side=qe,xe.needsUpdate=!0,Ae=!0}}Ae===!0&&(v.updateMultisampleRenderTarget(ge),v.updateRenderTargetMipmap(ge))}N.setRenderTarget(me,Ee,we),N.setClearColor(ae,fe),Be!==void 0&&(z.viewport=Be),N.toneMapping=Ue}function Qa(y,I,H){const z=I.isScene===!0?I.overrideMaterial:null;for(let G=0,ge=y.length;G<ge;G++){const ye=y[G],{object:me,geometry:Ee,group:we}=ye;let Ue=ye.material;Ue.allowOverride===!0&&z!==null&&(Ue=z),me.layers.test(H.layers)&&hh(me,I,H,Ee,Ue,we)}}function hh(y,I,H,z,G,ge){y.onBeforeRender(N,I,H,z,G,ge),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(N,I,H,z,y,ge),G.transparent===!0&&G.side===Ai&&G.forceSinglePass===!1?(G.side=hn,G.needsUpdate=!0,N.renderBufferDirect(H,I,z,G,y,ge),G.side=_r,G.needsUpdate=!0,N.renderBufferDirect(H,I,z,G,y,ge),G.side=Ai):N.renderBufferDirect(H,I,z,G,y,ge),y.onAfterRender(N,I,H,z,G,ge)}function Ja(y,I,H){I.isScene!==!0&&(I=Nt);const z=w.get(y),G=T.state.lights,ge=T.state.shadowsArray,ye=G.state.version,me=ue.getParameters(y,G.state,ge,I,H,T.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(me);let we=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;const Ue=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=F.get(y.envMap||z.environment,Ue),z.envMapRotation=z.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",Et),we=new Map,z.programs=we);let Be=we.get(Ee);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===ye)return mh(y,me),Be}else me.uniforms=ue.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,H,me),y.onBeforeCompile(me,N),Be=ue.acquireProgram(me,Ee),we.set(Ee,Be),z.uniforms=me.uniforms;const Ae=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=Se.uniform),mh(y,me),z.needsLights=b0(y),z.lightsStateVersion=ye,z.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Be,z.uniformsList=null,Be}function ph(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=al.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function mh(y,I){const H=w.get(y);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function A0(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let H=0,z=y.length;H<z;H++){const G=y[H];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function R0(y,I,H,z,G){I.isScene!==!0&&(I=Nt),v.resetTextureUnits();const ge=I.fog,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,me=U===null?N.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Xe.workingColorSpace,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=F.get(z.envMap||ye,Ee),Ue=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Be=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,Tt=!!H.morphAttributes.color;let yt=hi;z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(yt=N.toneMapping);const st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xt=st!==void 0?st.length:0,xe=w.get(z),gn=T.state.lights;if(mt===!0&&(He===!0||y!==B)){const lt=y===B&&z.id===W;Se.setState(z,y,lt)}let qe=!1;z.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==gn.state.version||xe.outputColorSpace!==me||G.isBatchedMesh&&xe.batching===!1||!G.isBatchedMesh&&xe.batching===!0||G.isBatchedMesh&&xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&xe.instancing===!1||!G.isInstancedMesh&&xe.instancing===!0||G.isSkinnedMesh&&xe.skinning===!1||!G.isSkinnedMesh&&xe.skinning===!0||G.isInstancedMesh&&xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&xe.instancingMorph===!1&&G.morphTexture!==null||xe.envMap!==we||z.fog===!0&&xe.fog!==ge||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Se.numPlanes||xe.numIntersection!==Se.numIntersection)||xe.vertexAlphas!==Ue||xe.vertexTangents!==Be||xe.morphTargets!==Ae||xe.morphNormals!==it||xe.morphColors!==Tt||xe.toneMapping!==yt||xe.morphTargetsCount!==Xt||!!xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,xe.__version=z.version);let Rn=xe.currentProgram;qe===!0&&(Rn=Ja(z,I,G),k&&z.isNodeMaterial&&k.onUpdateProgram(z,Rn,xe));let ei=!1,Hi=!1,Yr=!1;const at=Rn.getUniforms(),wt=xe.uniforms;if(he.useProgram(Rn.program)&&(ei=!0,Hi=!0,Yr=!0),z.id!==W&&(W=z.id,Hi=!0),xe.needsLights){const lt=A0(T.state.lightProbeGridArray,G);xe.lightProbeGrid!==lt&&(xe.lightProbeGrid=lt,Hi=!0)}if(ei||B!==y){he.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),at.setValue(D,"projectionMatrix",y.projectionMatrix),at.setValue(D,"viewMatrix",y.matrixWorldInverse);const Xi=at.map.cameraPosition;Xi!==void 0&&Xi.setValue(D,ut.setFromMatrixPosition(y.matrixWorld)),ot.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&at.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),B!==y&&(B=y,Hi=!0,Yr=!0)}if(xe.needsLights&&(gn.state.directionalShadowMap.length>0&&at.setValue(D,"directionalShadowMap",gn.state.directionalShadowMap,v),gn.state.spotShadowMap.length>0&&at.setValue(D,"spotShadowMap",gn.state.spotShadowMap,v),gn.state.pointShadowMap.length>0&&at.setValue(D,"pointShadowMap",gn.state.pointShadowMap,v)),G.isSkinnedMesh){at.setOptional(D,G,"bindMatrix"),at.setOptional(D,G,"bindMatrixInverse");const lt=G.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(D,"boneTexture",lt.boneTexture,v))}G.isBatchedMesh&&(at.setOptional(D,G,"batchingTexture"),at.setValue(D,"batchingTexture",G._matricesTexture,v),at.setOptional(D,G,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",G._indirectTexture,v),at.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",G._colorsTexture,v));const Wi=H.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&Ne.update(G,H,Rn),(Hi||xe.receiveShadow!==G.receiveShadow)&&(xe.receiveShadow=G.receiveShadow,at.setValue(D,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(wt.envMapIntensity.value=I.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=vw()),Hi){if(at.setValue(D,"toneMappingExposure",N.toneMappingExposure),xe.needsLights&&C0(wt,Yr),ge&&z.fog===!0&&j.refreshFogUniforms(wt,ge),j.refreshMaterialUniforms(wt,z,Pe,Ve,T.state.transmissionRenderTarget[y.id]),xe.needsLights&&xe.lightProbeGrid){const lt=xe.lightProbeGrid;wt.probesSH.value=lt.texture,wt.probesMin.value.copy(lt.boundingBox.min),wt.probesMax.value.copy(lt.boundingBox.max),wt.probesResolution.value.copy(lt.resolution)}al.upload(D,ph(xe),wt,v)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(al.upload(D,ph(xe),wt,v),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&at.setValue(D,"center",G.center),at.setValue(D,"modelViewMatrix",G.modelViewMatrix),at.setValue(D,"normalMatrix",G.normalMatrix),at.setValue(D,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const lt=z.uniformsGroups;for(let Xi=0,Kr=lt.length;Xi<Kr;Xi++){const gh=lt[Xi];$.update(gh,Rn),$.bind(gh,Rn)}}return Rn}function C0(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function b0(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,I,H){const z=w.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),w.get(y.texture).__webglTexture=I,w.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const H=w.get(y);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0};const P0=D.createFramebuffer();this.setRenderTarget=function(y,I=0,H=0){U=y,q=I,J=H;let z=null,G=!1,ge=!1;if(y){const me=w.get(y);if(me.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),O.copy(y.viewport),X.copy(y.scissor),Q=y.scissorTest,he.viewport(O),he.scissor(X),he.setScissorTest(Q),W=-1;return}else if(me.__webglFramebuffer===void 0)v.setupRenderTarget(y);else if(me.__hasExternalTextures)v.rebindTextures(y,w.get(y.texture).__webglTexture,w.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ue=y.depthTexture;if(me.__boundDepthTexture!==Ue){if(Ue!==null&&w.has(Ue)&&(y.width!==Ue.image.width||y.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(y)}}const Ee=y.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const we=w.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[I])?z=we[I][H]:z=we[I],G=!0):y.samples>0&&v.useMultisampledRTT(y)===!1?z=w.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[H]:z=we,O.copy(y.viewport),X.copy(y.scissor),Q=y.scissorTest}else O.copy(oe).multiplyScalar(Pe).floor(),X.copy(Re).multiplyScalar(Pe).floor(),Q=De;if(H!==0&&(z=P0),he.bindFramebuffer(D.FRAMEBUFFER,z)&&he.drawBuffers(y,z),he.viewport(O),he.scissor(X),he.setScissorTest(Q),G){const me=w.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,H)}else if(ge){const me=I;for(let Ee=0;Ee<y.textures.length;Ee++){const we=w.get(y.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,we.__webglTexture,H,me)}}else if(y!==null&&H!==0){const me=w.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,H)}W=-1},this.readRenderTargetPixels=function(y,I,H,z,G,ge,ye,me=0){if(!(y&&y.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=w.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){he.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const we=y.textures[me],Ue=we.format,Be=we.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!ot.textureFormatReadable(Ue)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Be)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&H>=0&&H<=y.height-G&&D.readPixels(I,H,z,G,P.convert(Ue),P.convert(Be),ge)}finally{const we=U!==null?w.get(U).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,I,H,z,G,ge,ye,me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=w.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(I>=0&&I<=y.width-z&&H>=0&&H<=y.height-G){he.bindFramebuffer(D.FRAMEBUFFER,Ee);const we=y.textures[me],Ue=we.format,Be=we.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!ot.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),D.readPixels(I,H,z,G,P.convert(Ue),P.convert(Be),0);const it=U!==null?w.get(U).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,it);const Tt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await GS(D,Tt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.deleteBuffer(Ae),D.deleteSync(Tt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,H=0){const z=Math.pow(2,-H),G=Math.floor(y.image.width*z),ge=Math.floor(y.image.height*z),ye=I!==null?I.x:0,me=I!==null?I.y:0;v.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ye,me,G,ge),he.unbindTexture()};const N0=D.createFramebuffer(),D0=D.createFramebuffer();this.copyTextureToTexture=function(y,I,H=null,z=null,G=0,ge=0){let ye,me,Ee,we,Ue,Be,Ae,it,Tt;const yt=y.isCompressedTexture?y.mipmaps[ge]:y.image;if(H!==null)ye=H.max.x-H.min.x,me=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Ue=H.min.y,Be=H.isBox3?H.min.z:0;else{const wt=Math.pow(2,-G);ye=Math.floor(yt.width*wt),me=Math.floor(yt.height*wt),y.isDataArrayTexture?Ee=yt.depth:y.isData3DTexture?Ee=Math.floor(yt.depth*wt):Ee=1,we=0,Ue=0,Be=0}z!==null?(Ae=z.x,it=z.y,Tt=z.z):(Ae=0,it=0,Tt=0);const st=P.convert(I.format),Xt=P.convert(I.type);let xe;I.isData3DTexture?(v.setTexture3D(I,0),xe=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(v.setTexture2DArray(I,0),xe=D.TEXTURE_2D_ARRAY):(v.setTexture2D(I,0),xe=D.TEXTURE_2D),he.activeTexture(D.TEXTURE0),he.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),he.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),he.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const gn=he.getParameter(D.UNPACK_ROW_LENGTH),qe=he.getParameter(D.UNPACK_IMAGE_HEIGHT),Rn=he.getParameter(D.UNPACK_SKIP_PIXELS),ei=he.getParameter(D.UNPACK_SKIP_ROWS),Hi=he.getParameter(D.UNPACK_SKIP_IMAGES);he.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),he.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),he.pixelStorei(D.UNPACK_SKIP_PIXELS,we),he.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),he.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const Yr=y.isDataArrayTexture||y.isData3DTexture,at=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const wt=w.get(y),Wi=w.get(I),lt=w.get(wt.__renderTarget),Xi=w.get(Wi.__renderTarget);he.bindFramebuffer(D.READ_FRAMEBUFFER,lt.__webglFramebuffer),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Kr=0;Kr<Ee;Kr++)Yr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,w.get(y).__webglTexture,G,Be+Kr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,w.get(I).__webglTexture,ge,Tt+Kr)),D.blitFramebuffer(we,Ue,ye,me,Ae,it,ye,me,D.DEPTH_BUFFER_BIT,D.NEAREST);he.bindFramebuffer(D.READ_FRAMEBUFFER,null),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||w.has(y)){const wt=w.get(y),Wi=w.get(I);he.bindFramebuffer(D.READ_FRAMEBUFFER,N0),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,D0);for(let lt=0;lt<Ee;lt++)Yr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.__webglTexture,G,Be+lt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,G),at?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wi.__webglTexture,ge,Tt+lt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wi.__webglTexture,ge),G!==0?D.blitFramebuffer(we,Ue,ye,me,Ae,it,ye,me,D.COLOR_BUFFER_BIT,D.NEAREST):at?D.copyTexSubImage3D(xe,ge,Ae,it,Tt+lt,we,Ue,ye,me):D.copyTexSubImage2D(xe,ge,Ae,it,we,Ue,ye,me);he.bindFramebuffer(D.READ_FRAMEBUFFER,null),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else at?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(xe,ge,Ae,it,Tt,ye,me,Ee,st,Xt,yt.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(xe,ge,Ae,it,Tt,ye,me,Ee,st,yt.data):D.texSubImage3D(xe,ge,Ae,it,Tt,ye,me,Ee,st,Xt,yt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,Ae,it,ye,me,st,Xt,yt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,Ae,it,yt.width,yt.height,st,yt.data):D.texSubImage2D(D.TEXTURE_2D,ge,Ae,it,ye,me,st,Xt,yt);he.pixelStorei(D.UNPACK_ROW_LENGTH,gn),he.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qe),he.pixelStorei(D.UNPACK_SKIP_PIXELS,Rn),he.pixelStorei(D.UNPACK_SKIP_ROWS,ei),he.pixelStorei(D.UNPACK_SKIP_IMAGES,Hi),ge===0&&I.generateMipmaps&&D.generateMipmap(xe),he.unbindTexture()},this.initRenderTarget=function(y){w.get(y).__webglFramebuffer===void 0&&v.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?v.setTextureCube(y,0):y.isData3DTexture?v.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?v.setTexture2DArray(y,0):v.setTexture2D(y,0),he.unbindTexture()},this.resetState=function(){q=0,J=0,U=null,he.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}function Sw(){const t=Pi.useRef(null);return Pi.useEffect(()=>{const e=t.current,n=window.innerWidth,i=window.innerHeight,r=new iy,s=new Dn(60,n/i,.1,1e3);s.position.z=55;const a=new xw({antialias:!0,alpha:!1});a.setSize(n,i),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setClearColor(134160,1),e.appendChild(a.domElement);const o=5e3,l=new Float32Array(o*3),c=new Float32Array(o*3),f=new Ze("#06b6d4"),h=new Ze("#0e7490"),d=new Ze("#a5f3fc");for(let T=0;T<o;T++){l[T*3]=(Math.random()-.5)*220,l[T*3+1]=(Math.random()-.5)*220,l[T*3+2]=(Math.random()-.5)*120;const A=Math.random(),x=A<.5?f.clone().lerp(h,A*2):f.clone().lerp(d,(A-.5)*2);c[T*3]=x.r,c[T*3+1]=x.g,c[T*3+2]=x.b}const m=new Qn;m.setAttribute("position",new Fn(l,3)),m.setAttribute("color",new Fn(c,3));const _=new d0({size:.38,vertexColors:!0,transparent:!0,opacity:.72,sizeAttenuation:!0}),E=new hy(m,_);r.add(E);const g={x:0,y:0},u=T=>{g.x=(T.clientX/window.innerWidth-.5)*2,g.y=-(T.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",u);const p=()=>{const T=window.innerWidth,A=window.innerHeight;s.aspect=T/A,s.updateProjectionMatrix(),a.setSize(T,A)};window.addEventListener("resize",p);let S,M=0;const R=()=>{S=requestAnimationFrame(R),M+=4e-4,E.rotation.y=M*.25,E.rotation.x=M*.08,s.position.x+=(g.x*2.5-s.position.x)*.018,s.position.y+=(g.y*2.5-s.position.y)*.018,a.render(r,s)};return R(),()=>{cancelAnimationFrame(S),window.removeEventListener("mousemove",u),window.removeEventListener("resize",p),e.contains(a.domElement)&&e.removeChild(a.domElement),m.dispose(),_.dispose(),a.dispose()}},[]),L.jsx("div",{ref:t,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,pointerEvents:"none"}})}const qn={name:"Sravan Kumar Sanathanam",institution:"Alabama A&M University",bio:["Ph.D. candidate in Plant and Soil Science at Alabama A&M University. My research applies a multi-omics framework to cotton–reniform nematode (Rotylenchulus reniformis) interactions, combining whole-transcriptome RNA-seq with rhizosphere 16S/ITS amplicon sequencing to resolve how susceptible and tolerant Gossypium hirsutum genotypes diverge in transcriptional regulation and microbial community structure under nematode pressure.","Bioinformatic workflows include expression quantification (Salmon/RSEM), differential expression analysis (DESeq2), GO/KEGG functional enrichment (clusterProfiler), and community profiling via QIIME2/DADA2 with phyloseq-based diversity analysis and predicted functional profiling (PICRUSt2). The work aims to identify candidate defense genes and microbiome bioindicators translatable to sustainable nematode management in cotton production."],email:"sravan.sanathanam@gmail.com",linkedin:"https://www.linkedin.com/in/sravan-sanathanam/",github:"https://github.com/sravan-sanathanam",scholar:"https://scholar.google.com/citations?user=t2o9yU8AAAAJ&hl=en",orcid:"https://orcid.org/0009-0002-8192-8400",cvUrl:"/cv.pdf"},yw=["Plant molecular biology","Cotton–nematode interactions","Crop stress biology","RNA-seq transcriptomics","Rhizosphere microbiome","Functional genomics","Greenhouse experiments","DNA/RNA isolation","R bioinformatics","Linux workflows"],Mw=[{num:"01",title:"Ph.D. research: cotton–nematode molecular interactions",desc:"Characterizing how susceptible and tolerant cotton genotypes modulate transcriptional responses and rhizosphere microbial communities under reniform nematode pressure, with the goal of identifying candidate defense genes and microbiome bioindicators that define host–parasite phenotypes at the molecular scale."},{num:"02",title:"Transcriptome analysis and differential expression",desc:"Applying alignment-free quantification (Salmon/RSEM) and count-based statistical frameworks (DESeq2) to dissect treatment, genotype, and time-course regulatory programs. Downstream interpretation integrates GO overrepresentation analysis and KEGG pathway mapping to translate DEG lists into mechanistic biological narratives."},{num:"03",title:"Rhizosphere microbiome characterization",desc:"Profiling root-associated bacterial (16S rRNA) and fungal (ITS) communities via QIIME2/DADA2 amplicon pipelines. Diversity analysis, multivariate statistics (PERMANOVA, betadisper), and PICRUSt2-based functional potential prediction are used to link community structure shifts to plant stress phenotype."},{num:"04",title:"Master's research: plasma-assisted crop enhancement",desc:"Investigated the physiological and biochemical effects of atmospheric pressure plasma on microgreen germination, biomass, nutritional profile, and drought tolerance. Findings contributed to the evidence base for non-thermal plasma as a sustainable seed-enhancement and crop-improvement technology."},{num:"05",title:"Molecular biology and genomics foundations",desc:"Hands-on proficiency in plant nucleic acid extraction, RT-qPCR gene expression quantification (Delta-Delta Ct), primer design, PCR/gel electrophoresis, and scanning electron microscopy — the bench-scale toolkit that grounds and validates computational genomics findings."}],Ew=[{title:"Ph.D. cotton–reniform nematode multi-omics",type:"Plant molecular biology",question:"How do transcriptomic programs and rhizosphere microbial communities diverge between susceptible and tolerant cotton genotypes under increasing reniform nematode pressure, and which defense-pathway genes and microbial taxa define these phenotypic differences?",methods:["Greenhouse assay design","Root/rhizosphere sampling","Nematode extraction workflow","RNA-seq","16S/ITS microbiome","GO/KEGG enrichment"],outputs:["Experimental design docs","Sample metadata","DEG summaries","Microbiome diversity plots","Taxonomy profiles","Candidate genes and pathways"]},{title:"Soybean salt-stress RNA-seq time-course",type:"Abiotic stress transcriptomics",question:"Which transcriptional networks mediate the response to salt stress across soybean genotypes and treatment intensities, and how do genotype-by-treatment interactions evolve across time points at the pathway level?",methods:["FASTQ processing","Salmon/RSEM quantification","DESeq2","Time-course contrasts","Interaction models","Functional enrichment"],outputs:["Count matrices","DEG tables","PCA plots","Volcano plots","Heatmaps","GO/KEGG pathway summaries"]},{title:"Cotton rhizosphere 16S/ITS microbiome analysis",type:"Microbiome bioinformatics",question:"To what extent does cotton genotype and nematode-induced root stress remodel the diversity, composition, and predicted functional capacity of the rhizosphere bacterial and fungal microbiome?",methods:["QIIME2","DADA2","phyloseq","vegan","Taxonomy profiling","PICRUSt2"],outputs:["Alpha diversity metrics","PCoA ordination plots","PERMANOVA results","Taxonomy bar plots","Core microbiome summaries","Predicted pathway profiles"]},{title:"Yarrowia Day 1/Day 4 gene expression analysis",type:"Comparative transcriptomics",question:"How do mutant-versus-wild-type transcriptional programs in Yarrowia lipolytica diverge between early exponential (Day 1) and late exponential (Day 4) growth phases, and which gene ontology terms and KEGG pathways underpin these temporal regulatory transitions?",methods:["Metadata cleaning","DESeq2","Mutant-vs-WT contrasts","GO GSEA","KEGG mapping","fgsea"],outputs:["Strain comparisons","Day comparisons","PCA plots","Volcano plots","GO enrichment plots","KEGG pathway figures"]},{title:"M.S. thesis: atmospheric pressure plasma in microgreens",type:"Controlled-environment agronomy",question:"Do atmospheric pressure plasma treatments applied to seeds or irrigation water produce statistically significant improvements in germination rate, seedling biomass, yield, and drought tolerance across commercial microgreen species and plasma dose levels?",methods:["Controlled-environment trials","Plasma-treated seed","Plasma-activated water","Growth measurements","Drought-stress evaluation","SAS/R analysis"],outputs:["Germination data","Growth and biomass summaries","Yield results","Nutritional profile summaries","Thesis chapters","Conference presentations"]},{title:"Molecular biology and NGS training project",type:"Molecular biology",question:"Can RT-qPCR and scanning electron microscopy provide complementary molecular and morphological evidence of plasma treatment effects on plant gene expression and tissue surface characteristics?",methods:["CTAB DNA extraction","RNeasy RNA extraction","Primer3","PCR","RT-qPCR","Delta-Delta Ct","SEM"],outputs:["DNA/RNA quality checks","PCR/RT-qPCR results","Gene expression quantification","Melt-curve validation","SEM surface observations"]}],fu=[{id:"plant",label:"Plant Biology",cards:[{icon:"ti-leaf",title:"Plant stress biology",desc:"Interpreting plant responses to biotic stress (reniform nematode infestation) and abiotic stress (salt, drought) through integration of greenhouse phenotyping, molecular markers, and multi-omics data to resolve genotype-specific stress mechanisms.",tags:["Cotton","Soybean","Microgreens","Reniform nematode","Salt stress","Drought stress"]},{icon:"ti-seedling",title:"Greenhouse and controlled-environment experiments",desc:"Designing statistically rigorous greenhouse assays with balanced control/treatment structure, biological replication, time-course sampling, and growth phenotyping — from experimental layout through data collection and metadata management.",tags:["Controls","Treatments","Replicates","Randomization","Time-course","Phenotyping"]},{icon:"ti-bug",title:"Nematology workflows",desc:"Reniform nematode greenhouse inoculation and assessment protocols, including soil/root extraction, egg mass isolation, inoculum preparation, microscope counting, and standardized plant-response scoring.",tags:["Nematode extraction","Soil samples","Root samples","Egg extraction","Microscope counting","Inoculation"]},{icon:"ti-test-pipe",title:"Plant and rhizosphere sampling",desc:"Root, leaf, soil, and rhizosphere sampling for RNA-seq, microbiome profiling, and PCR-based applications, with emphasis on sample integrity, cold-chain management, and metadata recording for downstream genomics workflows.",tags:["Root sampling","Leaf sampling","Rhizosphere soil","Sample labeling","Cold storage","Metadata"]}]},{id:"wetlab",label:"Wet Lab",cards:[{icon:"ti-flask",title:"DNA and RNA isolation",desc:"Plant nucleic acid extraction using CTAB and column-based (RNeasy) methods from root, leaf, and soil matrices, with quality assessment by spectrophotometry and gel electrophoresis prior to sequencing or expression analysis.",tags:["CTAB DNA extraction","RNeasy RNA extraction","Plant tissue","Root/leaf samples","RNA quality","DNA quality"]},{icon:"ti-dna",title:"RT-qPCR and gene expression",desc:"Primer design (Primer3), RT-qPCR setup, melt-curve validation, and Delta-Delta Ct quantification for relative gene expression analysis — providing bench-level validation of transcriptomic findings from RNA-seq workflows.",tags:["Primer3","PCR","RT-qPCR","Melt curves","Delta-Delta Ct","Gene expression"]},{icon:"ti-microscope",title:"Microscopy and laboratory methods",desc:"Scanning electron microscopy for plant tissue surface morphology, alongside standard laboratory methods including gel electrophoresis, spectrophotometry, autoclave sterilization, and controlled-environment equipment.",tags:["SEM","Gel electrophoresis","Spectrophotometer","Autoclave","Micropipette","Incubator"]},{icon:"ti-plant-2",title:"Agronomy and applied plant science",desc:"Foundation in controlled-environment agronomy, microgreen production systems, seed quality testing, plant tissue culture, biocontrol-agent production, and integrated pest management — knowledge that informs experimental design for crop-stress research.",tags:["Agronomy","Tissue culture","Seed testing","Microgreens","Biocontrol","IPM"]}]},{id:"rnaseq",label:"RNA-seq & Genomics",cards:[{icon:"ti-file-code",title:"RNA-seq experimental design",desc:"Structuring RNA-seq experiments to resolve treatment, genotype, time-course, mutant-vs-WT, and interaction effects, with attention to confounding variables, replicate sufficiency, and the statistical power needed for reliable differential expression calls.",tags:["Metadata design","Replicates","Treatment effects","Time effects","Genotype effects","Interaction models"]},{icon:"ti-chart-scatter",title:"Read QC and expression quantification",desc:"FASTQ quality control, adapter trimming (fastp), alignment-free quantification (Salmon), and count matrix assembly via tximport — providing clean, reproducible inputs for differential expression analysis.",tags:["FASTQ","fastp","FastQC","Salmon","RSEM","Count matrices"]},{icon:"ti-chart-bar",title:"Differential expression analysis",desc:"DESeq2-based workflows for DEG identification, log-fold-change shrinkage (apeglm/ashr), and visualization (PCA, MA plots, volcano plots, heatmaps, UpSet diagrams) to characterize the scale and biological coherence of transcriptional responses.",tags:["DESeq2","apeglm","ashr","edgeR","limma","PCA"]},{icon:"ti-git-branch",title:"Genome annotation and ID mapping",desc:"Linking gene, transcript, locus tag, NCBI, UniProt, CottonGen, GO, and KEGG KO identifiers across annotation databases to ensure reliable mapping from count data through enrichment analysis.",tags:["GTF/GFF3","tx2gene","UniProt","BioMart","NCBI","KEGG KO"]}]},{id:"microbiome",label:"Microbiome",cards:[{icon:"ti-microscope",title:"16S and ITS amplicon analysis",desc:"End-to-end QIIME2/DADA2 pipelines for bacterial and fungal community profiling — from raw paired-end reads through denoising, taxonomic classification, and export of feature tables and phylogenetic trees for R-based downstream analysis.",tags:["QIIME2","DADA2","Cutadapt","BIOM","QZA/QZV","ASV tables"]},{icon:"ti-chart-pie",title:"Diversity analysis and multivariate statistics",desc:"Alpha diversity (richness, Shannon, Faith's PD), beta diversity ordination (Bray-Curtis, UniFrac, PCoA), PERMANOVA for group-level community differences, and betadisper for dispersion homogeneity — with biological interpretation of significant contrasts.",tags:["phyloseq","vegan","Alpha diversity","PCoA","PERMANOVA","betadisper"]},{icon:"ti-topology-star",title:"Taxonomy and predicted functional profiling",desc:"Taxonomic abundance summaries, core microbiome characterization, differential abundance testing, and PICRUSt2-based prediction of functional potential (KO, EC, MetaCyc pathways) to link community composition to metabolic capacity.",tags:["Taxonomy plots","Core microbiome","PICRUSt2","ggpicrust2","KO","MetaCyc"]},{icon:"ti-tree",title:"Phylogenetic analysis",desc:"Working with rooted phylogenetic trees for UniFrac-based beta diversity and phylogeny-aware analyses, using ape, ggtree, and phytools within microbiome community analysis pipelines.",tags:["ape","ggtree","tidytree","phytools","qiime2R","phyloseq tree"]}]},{id:"functional",label:"Functional Genomics",cards:[{icon:"ti-circle-dot",title:"GO enrichment analysis",desc:"Over-representation analysis (ORA) and gene set enrichment analysis (GSEA) for biological process, molecular function, and cellular component GO terms — extracting mechanistic insight from differential expression results.",tags:["clusterProfiler","enrichplot","GOplot","fgsea","ORA","GSEA"]},{icon:"ti-route",title:"KEGG pathway analysis",desc:"KEGG ORA and GSEA, KO mapping, pathway membership interpretation, and pathview visualizations linking gene expression changes to canonical metabolic and signaling pathways.",tags:["KEGGREST","pathview","KEGG ORA","KEGG GSEA","KO IDs","Pathway mapping"]},{icon:"ti-chart-dots",title:"Scientific visualization",desc:"Publication-quality figures for transcriptomics, microbiome, enrichment analysis, and agronomy data, with consistent aesthetics across projects using modular ggplot2-based workflows.",tags:["ggplot2","ComplexHeatmap","pheatmap","VennDiagram","UpSetR","ComplexUpset"]},{icon:"ti-dna",title:"Candidate gene and pathway interpretation",desc:"Connecting differentially expressed genes, annotation identifiers, and enriched pathways to biologically coherent stress-response models — integrating transcriptomics, microbiome, and phenotypic data for holistic interpretation.",tags:["Candidate genes","Gene labels","Defense response","Stress pathways","Multi-omics","Interpretation"]}]},{id:"rpkgs",label:"R Packages",cards:[{icon:"ti-table",title:"Data wrangling and file handling",desc:"Reproducible metadata management, annotation table joins, multi-format file import (Excel/CSV/TSV), output filtering, and modular script design for scalable omics analysis pipelines.",tags:["tidyverse","dplyr","tidyr","readr","stringr","data.table"]},{icon:"ti-chart-line",title:"Visualization packages",desc:"Custom figure production for omics, microbiome, enrichment, and agronomic data, with publication-ready aesthetics using layered ggplot2-based approaches.",tags:["ggplot2","ggrepel","patchwork","ggprism","ggh4x","viridis"]},{icon:"ti-math-function",title:"Statistics and omics packages",desc:"RNA-seq differential expression testing, count normalization, log-fold-change shrinkage, microbiome multivariate statistics, and differential abundance analysis.",tags:["DESeq2","tximport","edgeR","limma","vegan","Maaslin2"]},{icon:"ti-database",title:"Bioconductor annotation packages",desc:"Genome annotation parsing, genomic range operations, biological sequence handling, and programmatic access to pathway and orthology databases for ID mapping and enrichment.",tags:["rtracklayer","GenomicFeatures","Biostrings","AnnotationDbi","biomaRt","KEGGREST"]}]},{id:"linux",label:"Computing",cards:[{icon:"ti-terminal",title:"Linux bioinformatics workflows",desc:"Ubuntu workstation-based analysis pipeline management, including file-system organization, process monitoring, package installation, storage management, and handling of large genomics datasets generated from sequencing runs.",tags:["Ubuntu","Bash","File management","md5sum","Permissions","Logs"]},{icon:"ti-folder-check",title:"Reproducible project organization",desc:"Structured, numbered project directories with rerunnable scripts, QC report archiving, results tables, and figure versioning — enabling clear audit trails and reproducible re-analysis.",tags:["README files","Scripts","Metadata","QC reports","Results tables","Figures"]},{icon:"ti-brand-python",title:"Python for bioinformatics and data automation",desc:"Developing Python proficiency applied to file parsing, metadata manipulation, bioinformatics task automation, and data transformation for omics workflows.",tags:["pandas","pathlib","argparse","Jupyter","f-strings","string parsing"]},{icon:"ti-database-search",title:"SAS and structured data analysis",desc:"Applied SAS PROC procedures for agronomic trial analysis during Master's research, including ANOVA, means comparisons, and repeated-measures models for controlled-environment experimental data.",tags:["SAS PROC","ANOVA","RStudio","SELECT","WHERE","GROUP BY"]}]}],Tw=[{year:"2025",title:"Black Tie Gala Scholarship",org:"Alabama A&M University",amount:"$2,000"},{year:"2024",title:"Graduate Oral Competition – 2nd Place",org:"AAMU STEM DAY 2024",amount:"$150"},{year:"2023–24",title:"EPSCoR Graduate Research Scholars Program (GRSP)",org:"Alabama EPSCoR",amount:"$18,750/yr"},{year:"2023",title:"3rd Place – Poster Presentation",org:"ACMAP 12th Annual Conference",amount:"$100"},{year:"2023",title:"Travel Grant",org:"ASHS Annual Conference",amount:"$500"},{year:"2023",title:"3 Minute Thesis – 3rd Place",org:"AAMU STEM DAY 2023",amount:"$150"},{year:"2023",title:"NRE Department Scholarship (4.0 GPA)",org:"Alabama A&M University",amount:"$5,000"},{year:"2016–20",title:"Post Matric Merit Scholarship",org:"Telangana State Government",amount:"$2,400"}],ww=[{term:"Spring 2024",role:"Teaching Assistant",course:"NRE 199 – Technology in Agricultural & Biological Sciences",institution:"Alabama A&M University",instructor:"Dr. Srinivasa Rao Mentreddy",students:25,note:"Introductory course for freshmen in Agricultural Sciences covering report writing, data analysis, presentations, GIS, statistics, and precision agriculture."}],Aw=[{year:"2023",role:"Session Moderator",event:"Technology Applications in Horticulture – Poster Session",org:"ASHS Annual Conference, Orlando FL"}],Rw=[{year:"2025",title:"Effects of biopolymers, cork, and Rhizobium tropici-derived extracellular polymeric substances on soil microbial communities",journal:"Frontiers in Microbiomes",role:"Author",doi:"https://doi.org/10.3389/frmbi.2025.1614472"},{year:"2025",title:"Low-Temperature Plasma: A Green Technology for Improving Crop Productivity and Seed Safety",journal:"Global Journal of Agricultural and Allied Sciences",role:"Author",doi:"https://doi.org/10.35251/gjaas.2025.007"},{year:"2024",title:"Physiological and Biochemical Responses of Turmeric (Curcuma longa L.) Under Drought Stress",journal:"Journal of Medicinally Active Plants",role:"Author",doi:"https://doi.org/10.7275/jmap.2315"},{year:"2024",title:"Effects of atmospheric pressure plasma on seed germination, seedling growth, nutrient profile, and drought tolerance of microgreen crops",journal:"Master's thesis, Alabama Agricultural and Mechanical University",role:"Author",doi:"#"},{year:"2023",title:"Effects of Low-Temperature Plasma on Seed Germination, Seedling Growth, and Drought Tolerance of Mustard Greens",journal:"HortScience / ASHS Annual Conference",role:"Author",doi:"#"},{year:"2023",title:"Variation in Growth, Yield, and Curcumin Content of Turmeric (Curcuma longa) Genotypes Grown in North Alabama",journal:"HortScience / ASHS Annual Conference",role:"Author",doi:"https://ashs.confex.com/ashs/2023/meetingapp.cgi/Paper/40180"}],Cw="_nav_1edep_1",bw="_scrolled_1edep_15",Pw="_logo_1edep_17",Nw="_links_1edep_25",Dw="_link_1edep_25",Lw="_menuBtn_1edep_49",Iw="_menuIcon_1edep_57",Uw="_mobileMenu_1edep_76",Fw="_mobileLink_1edep_89",ri={nav:Cw,scrolled:bw,logo:Pw,links:Nw,link:Dw,menuBtn:Lw,menuIcon:Iw,mobileMenu:Uw,mobileLink:Fw};function Ow(){const[t,e]=Pi.useState(!1),[n,i]=Pi.useState(!1);Pi.useEffect(()=>{const s=()=>e(window.scrollY>40);return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const r=["About","Skills","Research","Publications","Awards","Contact"];return L.jsxs("nav",{className:`${ri.nav} ${t?ri.scrolled:""}`,children:[L.jsx("span",{className:ri.logo,children:"Sravan Kumar Sanathanam"}),L.jsx("div",{className:ri.links,children:r.map(s=>L.jsx("a",{href:`#${s.toLowerCase()}`,className:ri.link,children:s},s))}),L.jsx("button",{className:ri.menuBtn,onClick:()=>i(s=>!s),"aria-label":"Toggle menu",children:L.jsx("span",{className:`${ri.menuIcon} ${n?ri.open:""}`})}),n&&L.jsx("div",{className:ri.mobileMenu,children:r.map(s=>L.jsx("a",{href:`#${s.toLowerCase()}`,className:ri.mobileLink,onClick:()=>i(!1),children:s},s))})]})}const Bw="_hero_pqlz1_1",kw="_left_pqlz1_9",zw="_label_pqlz1_24",Gw="_heading_pqlz1_38",Vw="_sub_pqlz1_53",Hw="_pills_pqlz1_61",Ww="_pill_pqlz1_61",Xw="_actions_pqlz1_80",jw="_btnPrimary_pqlz1_82",qw="_btnOutline_pqlz1_101",$w="_right_pqlz1_116",Yw="_glow_pqlz1_127",Kw="_orbGrid_pqlz1_151",Zw="_orbCard_pqlz1_165",Qw="_orbVal_pqlz1_176",Jw="_orbLabel_pqlz1_184",eA="_profileCard_pqlz1_191",tA="_avatar_pqlz1_203",nA="_profileName_pqlz1_220",iA="_profileRole_pqlz1_227",rA="_profileInst_pqlz1_233",sA="_statsBar_pqlz1_241",aA="_statItem_pqlz1_249",oA="_statVal_pqlz1_258",lA="_statLabel_pqlz1_265",dt={hero:Bw,left:kw,label:zw,heading:Gw,sub:Vw,pills:Hw,pill:Ww,actions:Xw,btnPrimary:jw,btnOutline:qw,right:$w,glow:Yw,orbGrid:Kw,orbCard:Zw,orbVal:Qw,orbLabel:Jw,profileCard:eA,avatar:tA,profileName:nA,profileRole:iA,profileInst:rA,statsBar:sA,statItem:aA,statVal:oA,statLabel:lA},Am=[{val:"Ph.D. + M.S.",label:"Degrees in Plant Science"},{val:"6",label:"Research Projects"},{val:"RNA-seq · 16S/ITS",label:"Sequencing Workflows"},{val:"R · Linux",label:"Analysis Environment"}];function cA(){return L.jsxs(L.Fragment,{children:[L.jsxs("section",{className:dt.hero,children:[L.jsxs("div",{className:dt.left,children:[L.jsx("span",{className:dt.label,children:"Plant & Soil Science · Ph.D. Candidate"}),L.jsxs("h1",{className:dt.heading,children:["Decoding Plant Stress",L.jsx("br",{}),"Through Genomics &",L.jsx("br",{}),L.jsx("em",{children:"Multi-Omics"})]}),L.jsx("p",{className:dt.sub,children:"Integrating transcriptomics, rhizosphere microbiome profiling, and functional genomics to resolve how plants respond to biotic and abiotic stress at the molecular level."}),L.jsx("div",{className:dt.pills,children:yw.map(t=>L.jsx("span",{className:dt.pill,children:t},t))}),L.jsxs("div",{className:dt.actions,children:[L.jsx("a",{href:"#research",className:dt.btnPrimary,children:"View Research"}),L.jsx("a",{href:qn.cvUrl,className:dt.btnOutline,download:!0,children:"Download CV"})]})]}),L.jsxs("div",{className:dt.right,children:[L.jsx("div",{className:dt.glow}),L.jsx("div",{className:dt.orbGrid,children:Am.map((t,e)=>L.jsxs("div",{className:dt.orbCard,children:[L.jsx("span",{className:dt.orbVal,children:t.val}),L.jsx("span",{className:dt.orbLabel,children:t.label})]},e))}),L.jsxs("div",{className:dt.profileCard,children:[L.jsx("div",{className:dt.avatar,children:"SKS"}),L.jsxs("div",{children:[L.jsx("div",{className:dt.profileName,children:qn.name}),L.jsx("div",{className:dt.profileRole,children:"Ph.D. Candidate · Plant & Soil Science"}),L.jsx("div",{className:dt.profileInst,children:qn.institution})]})]})]})]}),L.jsx("div",{className:dt.statsBar,children:Am.map((t,e)=>L.jsxs("div",{className:dt.statItem,children:[L.jsx("span",{className:dt.statVal,children:t.val}),L.jsx("span",{className:dt.statLabel,children:t.label})]},e))})]})}const uA="_about_1dto4_1",dA="_left_1dto4_9",fA="_title_1dto4_14",hA="_body_1dto4_26",pA="_right_1dto4_34",mA="_tableLabel_1dto4_41",gA="_row_1dto4_50",_A="_rowIdx_1dto4_59",vA="_rowKey_1dto4_67",xA="_rowVal_1dto4_77",si={about:uA,left:dA,title:fA,body:hA,right:pA,tableLabel:mA,row:gA,rowIdx:_A,rowKey:vA,rowVal:xA},SA=[{key:"Degree",val:"Ph.D. in Plant & Soil Science (in progress)"},{key:"Institution",val:"Alabama A&M University"},{key:"Focus",val:"Plant Molecular Biology, Multi-Omics"},{key:"Minor",val:"Bioinformatics"},{key:"Open to",val:"Postdoc · Industry research · Collaboration"}];function yA(){return L.jsxs("section",{id:"about",className:si.about,children:[L.jsxs("div",{className:si.left,children:[L.jsx("p",{className:"eyebrow",children:"About"}),L.jsxs("h2",{className:si.title,children:["Science rooted in",L.jsx("br",{}),L.jsx("span",{children:"data & biology"})]}),qn.bio.map((t,e)=>L.jsx("p",{className:si.body,children:t},e))]}),L.jsxs("div",{className:si.right,children:[L.jsx("div",{className:si.tableLabel,children:"Research profile"}),SA.map((t,e)=>L.jsxs("div",{className:si.row,children:[L.jsx("span",{className:si.rowIdx,children:String(e+1).padStart(2,"0")}),L.jsx("span",{className:si.rowKey,children:t.key}),L.jsx("span",{className:si.rowVal,children:t.val})]},t.key))]})]})}const MA="_section_1bjom_1",EA="_header_1bjom_8",TA="_title_1bjom_15",wA="_tabs_1bjom_23",AA="_tab_1bjom_23",RA="_activeTab_1bjom_48",CA="_grid_1bjom_55",bA="_card_1bjom_61",PA="_icon_1bjom_76",NA="_cardTitle_1bjom_83",DA="_cardDesc_1bjom_92",LA="_tags_1bjom_99",IA="_tag_1bjom_99",yn={section:MA,header:EA,title:TA,tabs:wA,tab:AA,activeTab:RA,grid:CA,card:bA,icon:PA,cardTitle:NA,cardDesc:DA,tags:LA,tag:IA};function UA({icon:t,title:e,desc:n,tags:i}){return L.jsxs("div",{className:yn.card,children:[L.jsx("i",{className:`ti ${t} ${yn.icon}`,"aria-hidden":"true"}),L.jsx("div",{className:yn.cardTitle,children:e}),n&&L.jsx("p",{className:yn.cardDesc,children:n}),L.jsx("div",{className:yn.tags,children:i.map(r=>L.jsx("span",{className:yn.tag,children:r},r))})]})}function FA(){const[t,e]=Pi.useState(fu[0].id),n=fu.find(i=>i.id===t);return L.jsxs("section",{id:"skills",className:yn.section,children:[L.jsx("p",{className:"eyebrow",children:"Skills & Toolkit"}),L.jsx("div",{className:yn.header,children:L.jsx("h2",{className:yn.title,children:"Expertise"})}),L.jsx("div",{className:yn.tabs,children:fu.map(i=>L.jsx("button",{className:`${yn.tab} ${t===i.id?yn.activeTab:""}`,onClick:()=>e(i.id),children:i.label},i.id))}),L.jsx("div",{className:yn.grid,children:n.cards.map(i=>L.jsx(UA,{...i},i.title))})]})}const OA="_section_ws0qt_1",BA="_header_ws0qt_7",kA="_title_ws0qt_15",zA="_intro_ws0qt_24",GA="_grid_ws0qt_32",VA="_card_ws0qt_37",HA="_num_ws0qt_49",WA="_cardTitle_ws0qt_59",XA="_desc_ws0qt_68",Ei={section:OA,header:BA,title:kA,intro:zA,grid:GA,card:VA,num:HA,cardTitle:WA,desc:XA};function jA(){return L.jsxs("section",{id:"research",className:Ei.section,children:[L.jsxs("div",{className:Ei.header,children:[L.jsxs("div",{children:[L.jsx("p",{className:"eyebrow",children:"Research"}),L.jsx("h2",{className:Ei.title,children:"Focus Areas"})]}),L.jsx("p",{className:Ei.intro,children:"Multi-omics research combining molecular experiments and computational analysis to answer fundamental questions in plant stress biology and crop improvement."})]}),L.jsx("div",{className:Ei.grid,children:Mw.map(t=>L.jsxs("div",{className:Ei.card,children:[L.jsxs("span",{className:Ei.num,children:[t.num," —"]}),L.jsxs("div",{children:[L.jsx("div",{className:Ei.cardTitle,children:t.title}),L.jsx("p",{className:Ei.desc,children:t.desc})]})]},t.num))})]})}const qA="_section_nzmzh_1",$A="_header_nzmzh_7",YA="_title_nzmzh_12",KA="_intro_nzmzh_21",ZA="_grid_nzmzh_28",QA="_card_nzmzh_33",JA="_topline_nzmzh_50",eR="_index_nzmzh_56",tR="_type_nzmzh_63",nR="_cardTitle_nzmzh_73",iR="_question_nzmzh_81",rR="_pillBlock_nzmzh_91",sR="_pillLabel_nzmzh_93",aR="_pills_nzmzh_101",oR="_pill_nzmzh_91",en={section:qA,header:$A,title:YA,intro:KA,grid:ZA,card:QA,topline:JA,index:eR,type:tR,cardTitle:nR,question:iR,pillBlock:rR,pillLabel:sR,pills:aR,pill:oR};function Rm({label:t,items:e}){return L.jsxs("div",{className:en.pillBlock,children:[L.jsx("div",{className:en.pillLabel,children:t}),L.jsx("div",{className:en.pills,children:e.map(n=>L.jsx("span",{className:en.pill,children:n},n))})]})}function lR(){return L.jsxs("section",{id:"projects",className:en.section,children:[L.jsxs("div",{className:en.header,children:[L.jsx("p",{className:"eyebrow",children:"Projects"}),L.jsx("h2",{className:en.title,children:"Portfolio Case Studies"}),L.jsx("p",{className:en.intro,children:"Selected projects showing the full research path: biological question, experimental design, sequencing data, R/Linux analysis, visualization, and interpretation."})]}),L.jsx("div",{className:en.grid,children:Ew.map((t,e)=>L.jsxs("article",{className:en.card,children:[L.jsxs("div",{className:en.topline,children:[L.jsx("span",{className:en.index,children:String(e+1).padStart(2,"0")}),L.jsx("span",{className:en.type,children:t.type.split("/")[0].trim()})]}),L.jsx("h3",{className:en.cardTitle,children:t.title}),L.jsx("p",{className:en.question,children:t.question}),L.jsx(Rm,{label:"Methods",items:t.methods}),L.jsx(Rm,{label:"Outputs",items:t.outputs})]},t.title))})]})}const cR="_section_x2ewf_1",uR="_header_x2ewf_7",dR="_title_x2ewf_12",fR="_list_x2ewf_20",hR="_item_x2ewf_22",pR="_extIcon_x2ewf_33",mR="_year_x2ewf_35",gR="_content_x2ewf_42",_R="_pubTitle_x2ewf_44",vR="_meta_x2ewf_52",xR="_journal_x2ewf_59",SR="_dot_x2ewf_65",yR="_role_x2ewf_67",xn={section:cR,header:uR,title:dR,list:fR,item:hR,extIcon:pR,year:mR,content:gR,pubTitle:_R,meta:vR,journal:xR,dot:SR,role:yR};function MR(){return L.jsxs("section",{id:"publications",className:xn.section,children:[L.jsxs("div",{className:xn.header,children:[L.jsx("p",{className:"eyebrow",children:"Publications"}),L.jsx("h2",{className:xn.title,children:"Selected Work"})]}),L.jsx("div",{className:xn.list,children:Rw.map((t,e)=>L.jsxs("a",{href:t.doi,className:xn.item,target:"_blank",rel:"noopener noreferrer",children:[L.jsx("span",{className:xn.year,children:t.year}),L.jsxs("div",{className:xn.content,children:[L.jsx("div",{className:xn.pubTitle,children:t.title}),L.jsxs("div",{className:xn.meta,children:[L.jsx("span",{className:xn.journal,children:t.journal}),L.jsx("span",{className:xn.dot,children:"·"}),L.jsx("span",{className:xn.role,children:t.role})]})]}),L.jsx("i",{className:`ti ti-external-link ${xn.extIcon}`,"aria-hidden":"true"})]},e))})]})}const ER="_section_kh4gg_1",TR="_header_kh4gg_7",wR="_title_kh4gg_12",AR="_body_kh4gg_20",RR="_awardsList_kh4gg_28",CR="_subHead_kh4gg_33",bR="_awardItem_kh4gg_43",PR="_year_kh4gg_53",NR="_awardContent_kh4gg_61",DR="_awardTitle_kh4gg_63",LR="_awardOrg_kh4gg_71",IR="_amount_kh4gg_76",UR="_aside_kh4gg_90",FR="_card_kh4gg_94",OR="_cardTop_kh4gg_103",BR="_cardRole_kh4gg_111",kR="_cardTerm_kh4gg_119",zR="_cardCourse_kh4gg_125",GR="_cardInst_kh4gg_132",VR="_cardNote_kh4gg_138",HR="_cardMeta_kh4gg_145",WR="_pill_kh4gg_151",Qe={section:ER,header:TR,title:wR,body:AR,awardsList:RR,subHead:CR,awardItem:bR,year:PR,awardContent:NR,awardTitle:DR,awardOrg:LR,amount:IR,aside:UR,card:FR,cardTop:OR,cardRole:BR,cardTerm:kR,cardCourse:zR,cardInst:GR,cardNote:VR,cardMeta:HR,pill:WR};function XR(){return L.jsxs("section",{id:"awards",className:Qe.section,children:[L.jsxs("div",{className:Qe.header,children:[L.jsx("p",{className:"eyebrow",children:"Recognition"}),L.jsx("h2",{className:Qe.title,children:"Honors, Teaching & Service"})]}),L.jsxs("div",{className:Qe.body,children:[L.jsxs("div",{className:Qe.awardsList,children:[L.jsx("div",{className:Qe.subHead,children:"Awards & Scholarships"}),Tw.map((t,e)=>L.jsxs("div",{className:Qe.awardItem,children:[L.jsx("span",{className:Qe.year,children:t.year}),L.jsxs("div",{className:Qe.awardContent,children:[L.jsx("div",{className:Qe.awardTitle,children:t.title}),L.jsx("div",{className:Qe.awardOrg,children:t.org})]}),L.jsx("span",{className:Qe.amount,children:t.amount})]},e))]}),L.jsxs("div",{className:Qe.aside,children:[L.jsx("div",{className:Qe.subHead,children:"Teaching"}),ww.map((t,e)=>L.jsxs("div",{className:Qe.card,children:[L.jsxs("div",{className:Qe.cardTop,children:[L.jsx("span",{className:Qe.cardRole,children:t.role}),L.jsx("span",{className:Qe.cardTerm,children:t.term})]}),L.jsx("div",{className:Qe.cardCourse,children:t.course}),L.jsx("div",{className:Qe.cardInst,children:t.institution}),L.jsx("p",{className:Qe.cardNote,children:t.note}),L.jsxs("div",{className:Qe.cardMeta,children:[L.jsxs("span",{className:Qe.pill,children:[t.students," students"]}),L.jsxs("span",{className:Qe.pill,children:["Instructor: ",t.instructor]})]})]},e)),L.jsx("div",{className:Qe.subHead,style:{marginTop:"2rem"},children:"Professional Service"}),Aw.map((t,e)=>L.jsxs("div",{className:Qe.card,children:[L.jsxs("div",{className:Qe.cardTop,children:[L.jsx("span",{className:Qe.cardRole,children:t.role}),L.jsx("span",{className:Qe.cardTerm,children:t.year})]}),L.jsx("div",{className:Qe.cardCourse,children:t.event}),L.jsx("div",{className:Qe.cardInst,children:t.org})]},e))]})]})]})}const jR="_section_ew3mi_1",qR="_left_ew3mi_9",$R="_title_ew3mi_14",YR="_body_ew3mi_26",KR="_links_ew3mi_34",ZR="_btn_ew3mi_36",QR="_btnInner_ew3mi_58",JR="_btnArrow_ew3mi_60",eC="_right_ew3mi_64",tC="_openToLabel_ew3mi_72",nC="_openToItems_ew3mi_81",iC="_openToItem_ew3mi_81",rC="_dot_ew3mi_92",sC="_cvBlock_ew3mi_100",aC="_cvIcon_ew3mi_111",oC="_cvText_ew3mi_123",lC="_cvLabel_ew3mi_125",cC="_cvSub_ew3mi_133",uC="_cvBtn_ew3mi_138",Lt={section:jR,left:qR,title:$R,body:YR,links:KR,btn:ZR,btnInner:QR,btnArrow:JR,right:eC,openToLabel:tC,openToItems:nC,openToItem:iC,dot:rC,cvBlock:sC,cvIcon:aC,cvText:oC,cvLabel:lC,cvSub:cC,cvBtn:uC},dC=[{icon:"ti-mail",label:"Email",href:`mailto:${qn.email}`},{icon:"ti-brand-linkedin",label:"LinkedIn",href:qn.linkedin},{icon:"ti-brand-github",label:"GitHub",href:qn.github},{icon:"ti-book",label:"Google Scholar",href:qn.scholar},{icon:"ti-id",label:"ORCID",href:qn.orcid}],fC=["Postdoctoral research positions","Industry roles in agri-biotech or genomics","Collaborative plant multi-omics projects","Always happy to discuss science & data"];function hC(){return L.jsxs("section",{id:"contact",className:Lt.section,children:[L.jsxs("div",{className:Lt.left,children:[L.jsx("p",{className:"eyebrow",children:"Contact"}),L.jsxs("h2",{className:Lt.title,children:["Let's",L.jsx("br",{}),L.jsx("span",{children:"Connect"})]}),L.jsx("p",{className:Lt.body,children:"Open to postdoctoral positions, industry research roles in agri-biotech or genomics, and collaborative projects in plant multi-omics."}),L.jsx("div",{className:Lt.links,children:dC.map(t=>L.jsxs("a",{href:t.href,className:Lt.btn,target:"_blank",rel:"noopener noreferrer",children:[L.jsxs("span",{className:Lt.btnInner,children:[L.jsx("i",{className:`ti ${t.icon}`,"aria-hidden":"true"}),t.label]}),L.jsx("span",{className:Lt.btnArrow,children:"→"})]},t.label))})]}),L.jsxs("div",{className:Lt.right,children:[L.jsxs("div",{children:[L.jsx("div",{className:Lt.openToLabel,children:"Open to"}),L.jsx("div",{className:Lt.openToItems,children:fC.map(t=>L.jsxs("div",{className:Lt.openToItem,children:[L.jsx("div",{className:Lt.dot}),t]},t))})]}),L.jsxs("div",{className:Lt.cvBlock,children:[L.jsx("div",{className:Lt.cvIcon,children:L.jsx("i",{className:"ti ti-file-text","aria-hidden":"true"})}),L.jsxs("div",{className:Lt.cvText,children:[L.jsx("div",{className:Lt.cvLabel,children:"Curriculum Vitae"}),L.jsx("div",{className:Lt.cvSub,children:"Download PDF · Updated 2025"})]}),L.jsx("a",{href:qn.cvUrl,className:Lt.cvBtn,download:!0,children:"Download"})]})]})]})}const pC="_footer_xyhyk_1",mC="_name_xyhyk_13",gC="_note_xyhyk_20",hu={footer:pC,name:mC,note:gC};function _C(){return L.jsxs("footer",{className:hu.footer,children:[L.jsx("span",{className:hu.name,children:qn.name}),L.jsx("span",{className:hu.note,children:"Genomics · Transcriptomics · Microbiome · Multi-omics"})]})}function vC(){return L.jsxs(L.Fragment,{children:[L.jsx(Sw,{}),L.jsx(Ow,{}),L.jsxs("main",{children:[L.jsx(cA,{}),L.jsx(yA,{}),L.jsx(FA,{}),L.jsx(jA,{}),L.jsx(lR,{}),L.jsx(MR,{}),L.jsx(XR,{}),L.jsx(hC,{})]}),L.jsx(_C,{})]})}pu.createRoot(document.getElementById("root")).render(L.jsx(Y0.StrictMode,{children:L.jsx(vC,{})}));
