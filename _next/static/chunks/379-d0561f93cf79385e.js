(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{3893:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}});n(5162);const r=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}});n(5162);function r(e,t,n,r){return!1}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3492:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});const r=n(7295)._(n(7317)),o=n(6272),s=n(9847),u=n(6484),i=n(8185),a=n(3893),c=n(9561),l=n(3389),f=n(3142),d=n(5369),p=n(3018),h=n(3154),m=new Set;function g(e,t,n,r,o,u){if(!u&&!(0,s.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){const o=t+"%"+n+"%"+("undefined"!==typeof r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}const i=u?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(i).catch((e=>{0}))}function y(e){return"string"===typeof e?e:(0,u.formatUrl)(e)}const b=r.default.forwardRef((function(e,t){let n;const{href:u,as:m,children:b,prefetch:_=null,passHref:P,replace:R,shallow:O,scroll:v,locale:j,onClick:w,onMouseEnter:E,onTouchStart:S,legacyBehavior:N=!1,...x}=e;n=b,!N||"string"!==typeof n&&"number"!==typeof n||(n=r.default.createElement("a",null,n));const M=r.default.useContext(c.RouterContext),C=r.default.useContext(l.AppRouterContext),k=null!=M?M:C,I=!M,T=!1!==_,L=null===_?h.PrefetchKind.AUTO:h.PrefetchKind.FULL;const{href:U,as:A}=r.default.useMemo((()=>{if(!M){const e=y(u);return{href:e,as:m?y(m):e}}const[e,t]=(0,o.resolveHref)(M,u,!0);return{href:e,as:m?(0,o.resolveHref)(M,m):t||e}}),[M,u,m]),W=r.default.useRef(U),K=r.default.useRef(A);let D;N&&(D=r.default.Children.only(n));const z=N?D&&"object"===typeof D&&D.ref:t,[F,$,q]=(0,f.useIntersection)({rootMargin:"200px"}),B=r.default.useCallback((e=>{K.current===A&&W.current===U||(q(),K.current=A,W.current=U),F(e),z&&("function"===typeof z?z(e):"object"===typeof z&&(z.current=e))}),[A,z,U,q,F]);r.default.useEffect((()=>{k&&$&&T&&g(k,U,A,{locale:j},{kind:L},I)}),[A,U,$,j,T,null==M?void 0:M.locale,k,I,L]);const Y={ref:B,onClick(e){N||"function"!==typeof w||w(e),N&&D.props&&"function"===typeof D.props.onClick&&D.props.onClick(e),k&&(e.defaultPrevented||function(e,t,n,o,u,i,a,c,l,f){const{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){const t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l&&!(0,s.isLocalURL)(n)))return;e.preventDefault();const p=()=>{const e=null==a||a;"beforePopState"in t?t[u?"replace":"push"](n,o,{shallow:i,locale:c,scroll:e}):t[u?"replace":"push"](o||n,{forceOptimisticNavigation:!f,scroll:e})};l?r.default.startTransition(p):p()}(e,k,U,A,R,O,v,j,I,T))},onMouseEnter(e){N||"function"!==typeof E||E(e),N&&D.props&&"function"===typeof D.props.onMouseEnter&&D.props.onMouseEnter(e),k&&(!T&&I||g(k,U,A,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:L},I))},onTouchStart(e){N||"function"!==typeof S||S(e),N&&D.props&&"function"===typeof D.props.onTouchStart&&D.props.onTouchStart(e),k&&(!T&&I||g(k,U,A,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:L},I))}};if((0,i.isAbsoluteUrl)(A))Y.href=A;else if(!N||P||"a"===D.type&&!("href"in D.props)){const e="undefined"!==typeof j?j:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,d.getDomainLocale)(A,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);Y.href=t||(0,p.addBasePath)((0,a.addLocale)(A,e,null==M?void 0:M.defaultLocale))}return N?r.default.cloneElement(D,Y):r.default.createElement("a",{...x,...Y},n)}));("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7843:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});const n="undefined"!==typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},r="undefined"!==typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});const r=n(6319),o=n(6484),s=n(3015),u=n(8185),i=n(5162),a=n(9847),c=n(4880),l=n(6498);function f(e,t,n){let f,d="string"===typeof t?t:(0,o.formatWithValidation)(t);const p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?")[0]||"").match(/(\/\/|\\)/)){const e=(0,u.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+e}if(!(0,a.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(m){f=new URL("/","http://n")}try{const e=new URL(d,f);e.pathname=(0,i.normalizePathTrailingSlash)(e.pathname);let t="";if((0,c.isDynamicRoute)(e.pathname)&&e.searchParams&&n){const n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:u,params:i}=(0,l.interpolateAs)(e.pathname,e.pathname,n);u&&(t=(0,o.formatWithValidation)({pathname:u,hash:e.hash,query:(0,s.omit)(n,i)}))}const u=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[u,t||u]:u}catch(m){return n?[d]:d}}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});const r=n(7317),o=n(7843),s="function"===typeof IntersectionObserver,u=new Map,i=[];function a(e,t,n){const{id:r,observer:o,elements:s}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},n=i.find((e=>e.root===t.root&&e.margin===t.margin));let r;if(n&&(r=u.get(n),r))return r;const o=new Map,s=new IntersectionObserver((e=>{e.forEach((e=>{const t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return r={id:t,observer:s,elements:o},i.push(t),u.set(t,r),r}(n);return s.set(e,t),o.observe(e),function(){if(s.delete(e),o.unobserve(e),0===s.size){o.disconnect(),u.delete(r);const e=i.findIndex((e=>e.root===r.root&&e.margin===r.margin));e>-1&&i.splice(e,1)}}}function c(e){let{rootRef:t,rootMargin:n,disabled:u}=e;const i=u||!s,[c,l]=(0,r.useState)(!1),f=(0,r.useRef)(null),d=(0,r.useCallback)((e=>{f.current=e}),[]);(0,r.useEffect)((()=>{if(s){if(i||c)return;const e=f.current;if(e&&e.tagName){return a(e,(e=>e&&l(e)),{root:null==t?void 0:t.current,rootMargin:n})}}else if(!c){const e=(0,o.requestIdleCallback)((()=>l(!0)));return()=>(0,o.cancelIdleCallback)(e)}}),[i,n,t,c,f.current]);const p=(0,r.useCallback)((()=>{l(!1)}),[]);return[d,c,p]}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6958:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});const n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},9561:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});const r=n(7295)._(n(7317)).default.createContext(null)},6484:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return s},urlObjectKeys:function(){return u},formatWithValidation:function(){return i}});const r=n(3589)._(n(6319)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:n}=e,s=e.protocol||"",u=e.pathname||"",i=e.hash||"",a=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(c+=":"+e.port)),a&&"object"===typeof a&&(a=String(r.urlQueryToSearchParams(a)));let l=e.search||a&&"?"+a||"";return s&&!s.endsWith(":")&&(s+=":"),e.slashes||(!s||o.test(s))&&!1!==c?(c="//"+(c||""),u&&"/"!==u[0]&&(u="/"+u)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),l&&"?"!==l[0]&&(l="?"+l),u=u.replace(/[?#]/g,encodeURIComponent),l=l.replace("#","%23"),""+s+c+u+l+i}const u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return s(e)}},4880:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});const r=n(8193),o=n(8212)},6498:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return s}});const r=n(8999),o=n(9659);function s(e,t,n){let s="";const u=(0,o.getRouteRegex)(e),i=u.groups,a=(t!==e?(0,r.getRouteMatcher)(u)(t):"")||n;s=e;const c=Object.keys(i);return c.every((e=>{let t=a[e]||"";const{repeat:n,optional:r}=i[e];let o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in a)&&(s=s.replace(o,n?t.map((e=>encodeURIComponent(e))).join("/"):encodeURIComponent(t))||"/")}))||(s=""),{params:c,result:s}}},8212:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return r}});const n=/\/\[[^/]+?\](?=\/|$)/;function r(e){return n.test(e)}},9847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return s}});const r=n(8185),o=n(2935);function s(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{const t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(t){return!1}}},3015:function(e,t){"use strict";function n(e,t){const n={};return Object.keys(e).forEach((r=>{t.includes(r)||(n[r]=e[r])})),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},6319:function(e,t){"use strict";function n(e){const t={};return e.forEach(((e,n)=>{"undefined"===typeof t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]})),t}function r(e){return"string"===typeof e||"number"===typeof e&&!isNaN(e)||"boolean"===typeof e?String(e):""}function o(e){const t=new URLSearchParams;return Object.entries(e).forEach((e=>{let[n,o]=e;Array.isArray(o)?o.forEach((e=>t.append(n,r(e)))):t.set(n,r(o))})),t}function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach((t=>{Array.from(t.keys()).forEach((t=>e.delete(t))),t.forEach(((t,n)=>e.append(n,t)))})),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o},assign:function(){return s}})},8999:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});const r=n(8185);function o(e){let{re:t,groups:n}=e;return e=>{const o=t.exec(e);if(!o)return!1;const s=e=>{try{return decodeURIComponent(e)}catch(t){throw new r.DecodeError("failed to decode param")}},u={};return Object.keys(n).forEach((e=>{const t=n[e],r=o[t.pos];void 0!==r&&(u[e]=~r.indexOf("/")?r.split("/").map((e=>s(e))):t.repeat?[s(r)]:s(r))})),u}}},9659:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getRouteRegex:function(){return a},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return d}});const r=n(3915),o=n(6958),s=n(1991);function u(e){const t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));const n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function i(e){const t=(0,s.removeTrailingSlash)(e).slice(1).split("/"),n={};let i=1;return{parameterizedRoute:t.map((e=>{const t=r.INTERCEPTION_ROUTE_MARKERS.find((t=>e.startsWith(t))),s=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&s){const{key:e,optional:r,repeat:a}=u(s[1]);return n[e]={pos:i++,repeat:a,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(s){const{key:e,repeat:t,optional:r}=u(s[1]);return n[e]={pos:i++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}return"/"+(0,o.escapeStringRegexp)(e)})).join(""),groups:n}}function a(e){const{parameterizedRoute:t,groups:n}=i(e);return{re:new RegExp("^"+t+"(?:/)?$"),groups:n}}function c(e){let{getSafeRouteKey:t,segment:n,routeKeys:r,keyPrefix:o}=e;const{key:s,optional:i,repeat:a}=u(n);let c=s.replace(/\W/g,"");o&&(c=""+o+c);let l=!1;return(0===c.length||c.length>30)&&(l=!0),isNaN(parseInt(c.slice(0,1)))||(l=!0),l&&(c=t()),r[c]=o?""+o+s:""+s,a?i?"(?:/(?<"+c+">.+?))?":"/(?<"+c+">.+?)":"/(?<"+c+">[^/]+?)"}function l(e,t){const n=(0,s.removeTrailingSlash)(e).slice(1).split("/"),u=function(){let e=0;return()=>{let t="",n=++e;for(;n>0;)t+=String.fromCharCode(97+(n-1)%26),n=Math.floor((n-1)/26);return t}}(),i={};return{namedParameterizedRoute:n.map((e=>{const n=r.INTERCEPTION_ROUTE_MARKERS.some((t=>e.startsWith(t))),s=e.match(/\[((?:\[.*\])|.+)\]/);return n&&s?c({getSafeRouteKey:u,segment:s[1],routeKeys:i,keyPrefix:t?"nxtI":void 0}):s?c({getSafeRouteKey:u,segment:s[1],routeKeys:i,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)})).join(""),routeKeys:i}}function f(e,t){const n=l(e,t);return{...a(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function d(e,t){const{parameterizedRoute:n}=i(e),{catchAll:r=!0}=t;if("/"===n){return{namedRegex:"^/"+(r?".*":"")+"$"}}const{namedParameterizedRoute:o}=l(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},8193:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");const t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);const n=t.map((t=>this.children.get(t)._smoosh(""+e+t+"/"))).reduce(((e,t)=>[...e,...t]),[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){const t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length)return void(this.placeholder=!1);if(r)throw new Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let s=o.slice(1,-1),u=!1;if(s.startsWith("[")&&s.endsWith("]")&&(s=s.slice(1,-1),u=!0),s.startsWith("...")&&(s=s.substring(3),r=!0),s.startsWith("[")||s.endsWith("]"))throw new Error("Segment names may not start or end with extra brackets ('"+s+"').");if(s.startsWith("."))throw new Error("Segment names may not start with erroneous periods ('"+s+"').");function i(e,n){if(null!==e&&e!==n)throw new Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach((e=>{if(e===n)throw new Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw new Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')})),t.push(n)}if(r)if(u){if(null!=this.restSlugName)throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');i(this.optionalRestSlugName,s),this.optionalRestSlugName=s,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');i(this.restSlugName,s),this.restSlugName=s,o="[...]"}else{if(u)throw new Error('Optional route parameters are not yet supported ("'+e[0]+'").');i(this.slugName,s),this.slugName=s,o="[]"}}this.children.has(o)||this.children.set(o,new n),this.children.get(o)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){const t=new n;return e.forEach((e=>t.insert(e))),t.smoosh()}},8185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{WEB_VITALS:function(){return n},execOnce:function(){return r},isAbsoluteUrl:function(){return s},getLocationOrigin:function(){return u},getURL:function(){return i},getDisplayName:function(){return a},isResSent:function(){return c},normalizeRepeatedSlashes:function(){return l},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return m},PageNotFoundError:function(){return g},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return b},stringifyError:function(){return _}});const n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n||(n=!0,t=e(...o)),t}}const o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>o.test(e);function u(){const{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function i(){const{href:e}=window.location,t=u();return e.substring(t.length)}function a(e){return"string"===typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function l(e){const t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){const n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};const r=await e.getInitialProps(t);if(n&&c(n))return r;if(!r){const t='"'+a(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.';throw new Error(t)}return r}const d="undefined"!==typeof performance,p=d&&["mark","measure","getEntriesByName"].every((e=>"function"===typeof performance[e]));class h extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},8245:function(e,t,n){"use strict";var r=n(7317),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},2987:function(e,t,n){"use strict";e.exports=n(8245)},5049:function(e,t,n){e.exports=n(3492)}}]);