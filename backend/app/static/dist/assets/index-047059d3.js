(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function $e(){}function Xl(i){return i()}function va(){return Object.create(null)}function en(i){i.forEach(Xl)}function Wr(i){return typeof i=="function"}function ri(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function Yc(i){return Object.keys(i).length===0}function ql(i,...e){if(i==null)return $e;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Hs(i){let e;return ql(i,t=>e=t)(),e}function cs(i,e,t){i.$$.on_destroy.push(ql(e,t))}function C(i,e){i.appendChild(e)}function Te(i,e,t){i.insertBefore(e,t||null)}function be(i){i.parentNode&&i.parentNode.removeChild(i)}function $r(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function V(i){return document.createElement(i)}function on(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function Le(i){return document.createTextNode(i)}function fe(){return Le(" ")}function Yl(){return Le("")}function rt(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function jc(i){return function(e){return e.preventDefault(),i.call(this,e)}}function Kc(i){return function(e){e.target===this&&i.call(this,e)}}function L(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function Zc(i){return Array.from(i.childNodes)}function Ve(i,e){e=""+e,i.data!==e&&(i.data=e)}function En(i,e){i.value=e??""}function xa(i,e,t,n){t==null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function Ma(i,e,t){for(let n=0;n<i.options.length;n+=1){const r=i.options[n];if(r.__value===e){r.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function Jc(i){const e=i.querySelector(":checked");return e&&e.__value}let ar;function er(i){ar=i}function jl(){if(!ar)throw new Error("Function called outside component initialization");return ar}function Kl(i){jl().$$.on_mount.push(i)}function $c(i){jl().$$.on_destroy.push(i)}const Ri=[],Vs=[];let Pi=[];const Sa=[],Zl=Promise.resolve();let Ws=!1;function Jl(){Ws||(Ws=!0,Zl.then($l))}function Qc(){return Jl(),Zl}function Xr(i){Pi.push(i)}const us=new Set;let ai=0;function $l(){if(ai!==0)return;const i=ar;do{try{for(;ai<Ri.length;){const e=Ri[ai];ai++,er(e),eu(e.$$)}}catch(e){throw Ri.length=0,ai=0,e}for(er(null),Ri.length=0,ai=0;Vs.length;)Vs.pop()();for(let e=0;e<Pi.length;e+=1){const t=Pi[e];us.has(t)||(us.add(t),t())}Pi.length=0}while(Ri.length);for(;Sa.length;)Sa.pop()();Ws=!1,us.clear(),er(i)}function eu(i){if(i.fragment!==null){i.update(),en(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Xr)}}function tu(i){const e=[],t=[];Pi.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Pi=e}const Hr=new Set;let Wn;function Jn(){Wn={r:0,c:[],p:Wn}}function $n(){Wn.r||en(Wn.c),Wn=Wn.p}function st(i,e){i&&i.i&&(Hr.delete(i),i.i(e))}function dt(i,e,t,n){if(i&&i.o){if(Hr.has(i))return;Hr.add(i),Wn.c.push(()=>{Hr.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function Ql(i,e){dt(i,1,1,()=>{e.delete(i.key)})}function ec(i,e,t,n,r,s,o,a,c,l,u,f){let d=i.length,p=s.length,g=d;const _={};for(;g--;)_[i[g].key]=g;const m=[],h=new Map,b=new Map,M=[];for(g=p;g--;){const w=f(r,s,g),F=t(w);let x=o.get(F);x?n&&M.push(()=>x.p(w,e)):(x=l(F,w),x.c()),h.set(F,m[g]=x),F in _&&b.set(F,Math.abs(g-_[F]))}const S=new Set,v=new Set;function E(w){st(w,1),w.m(a,u),o.set(w.key,w),u=w.first,p--}for(;d&&p;){const w=m[p-1],F=i[d-1],x=w.key,R=F.key;w===F?(u=w.first,d--,p--):h.has(R)?!o.has(x)||S.has(x)?E(w):v.has(R)?d--:b.get(x)>b.get(R)?(v.add(x),E(w)):(S.add(R),d--):(c(F,o),d--)}for(;d--;){const w=i[d];h.has(w.key)||c(w,o)}for(;p;)E(m[p-1]);return en(M),m}function Oi(i){i&&i.c()}function Qn(i,e,t,n){const{fragment:r,after_update:s}=i.$$;r&&r.m(e,t),n||Xr(()=>{const o=i.$$.on_mount.map(Xl).filter(Wr);i.$$.on_destroy?i.$$.on_destroy.push(...o):en(o),i.$$.on_mount=[]}),s.forEach(Xr)}function ei(i,e){const t=i.$$;t.fragment!==null&&(tu(t.after_update),en(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function nu(i,e){i.$$.dirty[0]===-1&&(Ri.push(i),Jl(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function Hi(i,e,t,n,r,s,o,a=[-1]){const c=ar;er(i);const l=i.$$={fragment:null,ctx:[],props:s,update:$e,not_equal:r,bound:va(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:va(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=t?t(i,e.props||{},(f,d,...p)=>{const g=p.length?p[0]:d;return l.ctx&&r(l.ctx[f],l.ctx[f]=g)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](g),u&&nu(i,f)),d}):[],l.update(),u=!0,en(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){const f=Zc(e.target);l.fragment&&l.fragment.l(f),f.forEach(be)}else l.fragment&&l.fragment.c();e.intro&&st(i.$$.fragment),Qn(i,e.target,e.anchor,e.customElement),$l()}er(c)}class Vi{$destroy(){ei(this,1),this.$destroy=$e}$on(e,t){if(!Wr(t))return $e;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!Yc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const oi=[];function fr(i,e=$e){let t;const n=new Set;function r(a){if(ri(i,a)&&(i=a,t)){const c=!oi.length;for(const l of n)l[1](),oi.push(l,i);if(c){for(let l=0;l<oi.length;l+=2)oi[l][0](oi[l+1]);oi.length=0}}}function s(a){r(a(i))}function o(a,c=$e){const l=[a,c];return n.add(l),n.size===1&&(t=e(r)||$e),a(i),()=>{n.delete(l),n.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}function Xs(i,e){return{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}[`VITE_${i}`]||e}function iu(){return typeof window<"u"?`${window.location.origin}/api`:Xs("API_BASE_URL","http://localhost:5001/api")}const qr={apiBaseUrl:iu(),apiKeyStorageKey:Xs("API_KEY_STORAGE_KEY","ghostNetApiKey"),appName:Xs("APP_NAME","GhostNet")};async function fn(i,e,t=null,n=null){const r={method:i,headers:{"Content-Type":"application/json"}};n&&(r.headers.Authorization=`Bearer ${n}`),t&&(r.body=JSON.stringify(t));const s=await fetch(`${qr.apiBaseUrl}${e}`,r),o=await s.json();if(!s.ok)throw new Error(o.error||`API request failed with status ${s.status}`);return o}const Pn={generateApiKey:async()=>fn("POST","/generate_key"),getPosts:async()=>fn("GET","/posts"),getMyPosts:async i=>fn("GET","/my_posts",null,i),publishPost:async(i,e)=>{const t=await fn("POST","/publish",i,e);return t&&(t.own_by_current_user=!0),t},updatePost:async(i,e,t)=>{const n=await fn("PUT",`/post/${i}`,e,t);return n&&(n.own_by_current_user=!0),n},deletePost:async(i,e)=>fn("DELETE",`/post/${i}`,null,e),votePost:async i=>fn("POST",`/vote/${i}`),checkLink:async i=>fn("GET",`/check_link/${i}`),checkAllLinks:async()=>fn("GET","/check_all_links")};function ra(){return typeof localStorage<"u"?localStorage.getItem(qr.apiKeyStorageKey):null}function ru(){if(typeof localStorage<"u"){const i=localStorage.getItem("upvotedPosts");if(i)try{return JSON.parse(i)}catch(e){console.error("Error parsing upvoted posts:",e)}}return{}}const ln=fr(ra());ln.subscribe(i=>{typeof localStorage<"u"&&(i?localStorage.setItem(qr.apiKeyStorageKey,i):localStorage.removeItem(qr.apiKeyStorageKey))});const Wi=fr(ru());Wi.subscribe(i=>{typeof localStorage<"u"&&localStorage.setItem("upvotedPosts",JSON.stringify(i))});const cn=fr([]),Yr=fr(!1),jr=fr(null);async function Di(){Yr.set(!0),jr.set(null);try{const i=await Pn.getPosts(),e=ra();if(e)try{const t=await Pn.getMyPosts(e),n=new Set(t.map(r=>r.id));i.forEach(r=>{r.own_by_current_user=n.has(r.id)})}catch(t){console.error("Error fetching user's posts:",t);const n=Hs(cn),r=new Set;n&&n.length>0&&n.forEach(s=>{s.own_by_current_user===!0&&r.add(s.id)}),i.forEach(s=>{s.own_by_current_user=r.has(s.id)})}else i.forEach(t=>{t.own_by_current_user=!1});i.sort((t,n)=>n.upvotes!==t.upvotes?n.upvotes-t.upvotes:new Date(n.created_at)-new Date(t.created_at)),cn.set(i)}catch(i){console.error("Error fetching posts:",i),jr.set(i.message||"Failed to fetch posts")}finally{Yr.set(!1)}}function Qr(i){ra()&&i.own_by_current_user===void 0&&(i.own_by_current_user=!0),cn.update(t=>{const n=t.findIndex(r=>r.id===i.id);return n!==-1?(t[n]=i,[...t]):[i,...t]}),cn.update(t=>(t.sort((n,r)=>r.upvotes!==n.upvotes?r.upvotes-n.upvotes:new Date(r.created_at)-new Date(n.created_at)),[...t]))}function tc(i){cn.update(e=>e.filter(t=>t.id!==i))}function su(i,e){if(!e)return!1;let t=!1;return Wi.update(n=>(n[e]||(n[e]=[]),t=n[e].includes(i),n)),t}function sa(i,e){e&&Wi.update(t=>(t[e]||(t[e]=[]),t[e].includes(i)||t[e].push(i),t))}const au=Object.freeze(Object.defineProperty({__proto__:null,apiKey:ln,fetchPosts:Di,hasUpvoted:su,isLoadingPosts:Yr,markAsUpvoted:sa,posts:cn,postsError:jr,removePostFromStore:tc,upsertPostInStore:Qr,upvotedPosts:Wi},Symbol.toStringTag,{value:"Module"}));function ou(i){let e;return{c(){e=V("p"),e.textContent="You don't have an API Key set. Generate one or enter an existing key to publish and manage your posts.",L(e,"class","text-gray-400 mb-3")},m(t,n){Te(t,e,n)},p:$e,d(t){t&&be(e)}}}function lu(i){let e,t,n,r,s,o;return{c(){e=V("p"),t=Le("Current API Key: "),n=V("code"),r=Le(i[0]),s=fe(),o=V("p"),o.textContent="This key is used to publish and manage your posts. It's stored in your browser's local storage.",L(n,"class","bg-gray-700 p-1 rounded text-purple-300"),L(e,"class","text-sm text-gray-300 mb-1"),L(o,"class","text-xs text-gray-500 mb-3")},m(a,c){Te(a,e,c),C(e,t),C(e,n),C(n,r),Te(a,s,c),Te(a,o,c)},p(a,c){c&1&&Ve(r,a[0])},d(a){a&&be(e),a&&be(s),a&&be(o)}}}function cu(i){let e;return{c(){e=Le("Generate New Key")},m(t,n){Te(t,e,n)},d(t){t&&be(e)}}}function uu(i){let e;return{c(){e=Le("Generating...")},m(t,n){Te(t,e,n)},d(t){t&&be(e)}}}function ya(i){let e,t,n;return{c(){e=V("button"),e.textContent="Clear Key",L(e,"class","px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors duration-150 ease-in-out")},m(r,s){Te(r,e,s),t||(n=rt(e,"click",i[6]),t=!0)},p:$e,d(r){r&&be(e),t=!1,n()}}}function Ea(i){let e,t;return{c(){e=V("p"),t=Le(i[1]),L(e,"class","mt-3 text-sm text-green-400 bg-green-900 p-2 rounded")},m(n,r){Te(n,e,r),C(e,t)},p(n,r){r&2&&Ve(t,n[1])},d(n){n&&be(e)}}}function ba(i){let e,t,n;return{c(){e=V("p"),t=Le("Error: "),n=Le(i[2]),L(e,"class","mt-3 text-sm text-red-400 bg-red-900 p-2 rounded")},m(r,s){Te(r,e,s),C(e,t),C(e,n)},p(r,s){s&4&&Ve(n,r[2])},d(r){r&&be(e)}}}function fu(i){let e,t,n,r,s,o,a,c,l,u,f,d,p;function g(w,F){return w[0]?lu:ou}let _=g(i),m=_(i);function h(w,F){return w[3]?uu:cu}let b=h(i),M=b(i),S=i[0]&&ya(i),v=i[1]&&Ea(i),E=i[2]&&ba(i);return{c(){e=V("div"),t=V("h3"),t.textContent="API Key Management",n=fe(),m.c(),r=fe(),s=V("div"),o=V("button"),M.c(),a=fe(),c=V("button"),c.textContent="Enter Existing Key",l=fe(),S&&S.c(),u=fe(),v&&v.c(),f=fe(),E&&E.c(),L(t,"class","text-xl font-semibold mb-3 text-purple-300"),o.disabled=i[3],L(o,"class","px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md disabled:opacity-50 transition-colors duration-150 ease-in-out"),L(c,"class","px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-150 ease-in-out"),L(s,"class","flex flex-wrap gap-2"),L(e,"class","p-4 my-6 bg-gray-800 rounded-lg shadow-md")},m(w,F){Te(w,e,F),C(e,t),C(e,n),m.m(e,null),C(e,r),C(e,s),C(s,o),M.m(o,null),C(s,a),C(s,c),C(s,l),S&&S.m(s,null),C(e,u),v&&v.m(e,null),C(e,f),E&&E.m(e,null),d||(p=[rt(o,"click",i[4]),rt(c,"click",i[5])],d=!0)},p(w,[F]){_===(_=g(w))&&m?m.p(w,F):(m.d(1),m=_(w),m&&(m.c(),m.m(e,r))),b!==(b=h(w))&&(M.d(1),M=b(w),M&&(M.c(),M.m(o,null))),F&8&&(o.disabled=w[3]),w[0]?S?S.p(w,F):(S=ya(w),S.c(),S.m(s,null)):S&&(S.d(1),S=null),w[1]?v?v.p(w,F):(v=Ea(w),v.c(),v.m(e,f)):v&&(v.d(1),v=null),w[2]?E?E.p(w,F):(E=ba(w),E.c(),E.m(e,null)):E&&(E.d(1),E=null)},i:$e,o:$e,d(w){w&&be(e),m.d(),M.d(),S&&S.d(),v&&v.d(),E&&E.d(),d=!1,en(p)}}}function du(i,e,t){let n="",r="",s="",o=!1;ln.subscribe(u=>{t(0,n=u||"")});async function a(){t(3,o=!0),t(1,r=""),t(2,s="");try{const u=await Pn.generateApiKey();ln.set(u.api_key),await Di(),t(1,r=`New API Key generated and automatically applied. Key: ${u.api_key}`)}catch(u){console.error("Error generating API key:",u),t(2,s=u.message||"Failed to generate API key.")}finally{t(3,o=!1)}}async function c(){const u=prompt("Enter your existing API Key:");if(u&&u.trim()!==""){ln.set(u.trim()),t(1,r="API Key updated."),t(2,s="");try{t(3,o=!0),await Di()}catch(f){console.error("Error refreshing posts:",f)}finally{t(3,o=!1)}}else u!==null&&(t(2,s="API Key cannot be empty."),t(1,r=""))}async function l(){if(confirm("Are you sure you want to clear your API Key? You won't be able to manage your posts.")){ln.set(null),t(1,r="API Key cleared."),t(2,s="");try{t(3,o=!0),await Di()}catch(u){console.error("Error refreshing posts:",u)}finally{t(3,o=!1)}}}return[n,r,s,o,a,c,l]}class hu extends Vi{constructor(e){super(),Hi(this,e,du,fu,ri,{})}}function Ta(i){let e;return{c(){e=V("div"),e.innerHTML="<p>You need an API key to publish. Please generate one in the API Key Management section.</p>",L(e,"class","bg-amber-900 text-amber-100 p-3 rounded mb-4")},m(t,n){Te(t,e,n)},d(t){t&&be(e)}}}function wa(i){let e,t=i[1].tunnel_url+"",n;return{c(){e=V("p"),n=Le(t),L(e,"class","mt-1 text-sm text-red-400")},m(r,s){Te(r,e,s),C(e,n)},p(r,s){s&2&&t!==(t=r[1].tunnel_url+"")&&Ve(n,t)},d(r){r&&be(e)}}}function Aa(i){let e,t=i[1].title+"",n;return{c(){e=V("p"),n=Le(t),L(e,"class","mt-1 text-sm text-red-400")},m(r,s){Te(r,e,s),C(e,n)},p(r,s){s&2&&t!==(t=r[1].title+"")&&Ve(n,t)},d(r){r&&be(e)}}}function Ra(i){let e,t=i[1].description+"",n;return{c(){e=V("p"),n=Le(t),L(e,"class","mt-1 text-sm text-red-400")},m(r,s){Te(r,e,s),C(e,n)},p(r,s){s&2&&t!==(t=r[1].description+"")&&Ve(n,t)},d(r){r&&be(e)}}}function Ca(i){let e,t=i[1].api+"",n;return{c(){e=V("p"),n=Le(t),L(e,"class","mt-1 text-sm text-red-400 bg-red-900 p-2 rounded")},m(r,s){Te(r,e,s),C(e,n)},p(r,s){s&2&&t!==(t=r[1].api+"")&&Ve(n,t)},d(r){r&&be(e)}}}function La(i){let e,t;return{c(){e=V("p"),t=Le(i[3]),L(e,"class","mt-1 text-sm text-green-400 bg-green-900 p-2 rounded")},m(n,r){Te(n,e,r),C(e,t)},p(n,r){r&8&&Ve(t,n[3])},d(n){n&&be(e)}}}function pu(i){let e;return{c(){e=Le("Publish Tunnel")},m(t,n){Te(t,e,n)},d(t){t&&be(e)}}}function mu(i){let e;return{c(){e=Le("Publishing...")},m(t,n){Te(t,e,n)},d(t){t&&be(e)}}}function gu(i){let e,t,n,r,s,o,a,c,l,u,f,d,p,g,_,m,h,b,M,S,v,E,w,F,x,R,Y,q,O,z,W,ee,Z,k,ne,X,pe,J,N,G,te,se,P,we,Re,ce,xe=!i[4]&&Ta(),Ie=i[1].tunnel_url&&wa(i),me=i[1].title&&Aa(i),Ae=i[1].description&&Ra(i),Ne=i[1].api&&Ca(i),Ue=i[3]&&La(i);function oe(de,Be){return de[2]?mu:pu}let ge=oe(i),Me=ge(i);return{c(){e=V("div"),t=V("h3"),t.textContent="Publish Ghost Tunnel",n=fe(),xe&&xe.c(),r=fe(),s=V("form"),o=V("div"),a=V("label"),a.textContent="Tunnel URL*",c=fe(),l=V("input"),f=fe(),Ie&&Ie.c(),d=fe(),p=V("div"),g=V("label"),g.textContent="Title*",_=fe(),m=V("input"),b=fe(),me&&me.c(),M=fe(),S=V("div"),v=V("label"),v.textContent="Description",E=fe(),w=V("textarea"),x=fe(),Ae&&Ae.c(),R=fe(),Y=V("div"),q=V("label"),q.textContent="Tags (comma-separated)",O=fe(),z=V("input"),W=fe(),ee=V("p"),ee.textContent="Tags help organize tunnels. Separate with commas.",Z=fe(),k=V("div"),ne=V("label"),ne.textContent="Tunnel Provider*",X=fe(),pe=V("select"),J=V("option"),J.textContent="Pinggy",N=V("option"),N.textContent="Cloudflare",G=fe(),Ne&&Ne.c(),te=fe(),Ue&&Ue.c(),se=fe(),P=V("button"),Me.c(),L(t,"class","text-xl font-semibold mb-3 text-purple-300"),L(a,"for","tunnel_url"),L(a,"class","block text-sm font-medium text-gray-300 mb-1"),L(l,"type","text"),L(l,"id","tunnel_url"),L(l,"class",u="w-full px-3 py-2 bg-gray-700 border "+(i[1].tunnel_url?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"),L(l,"placeholder","https://your-ghosthub.pinggy.link"),L(g,"for","title"),L(g,"class","block text-sm font-medium text-gray-300 mb-1"),L(m,"type","text"),L(m,"id","title"),L(m,"class",h="w-full px-3 py-2 bg-gray-700 border "+(i[1].title?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"),L(m,"placeholder","My Awesome GhostHub Collection"),L(v,"for","description"),L(v,"class","block text-sm font-medium text-gray-300 mb-1"),L(w,"id","description"),L(w,"class",F="w-full px-3 py-2 bg-gray-700 border "+(i[1].description?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"),L(w,"placeholder","Describe your GhostHub tunnel (optional)"),L(w,"rows","3"),L(q,"for","tags"),L(q,"class","block text-sm font-medium text-gray-300 mb-1"),L(z,"type","text"),L(z,"id","tags"),L(z,"class","w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"),L(z,"placeholder","movies, anime, photos, family"),L(ee,"class","mt-1 text-xs text-gray-500"),L(ne,"for","provider"),L(ne,"class","block text-sm font-medium text-gray-300 mb-1"),J.__value="Pinggy",J.value=J.__value,N.__value="Cloudflare",N.value=N.__value,L(pe,"id","provider"),L(pe,"class","w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"),i[0].provider===void 0&&Xr(()=>i[10].call(pe)),L(P,"type","submit"),P.disabled=we=i[2]||!i[4],L(P,"class","w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md disabled:opacity-50 transition-colors duration-150 ease-in-out"),L(s,"class","space-y-4"),L(e,"class","p-4 my-6 bg-gray-800 rounded-lg shadow-md")},m(de,Be){Te(de,e,Be),C(e,t),C(e,n),xe&&xe.m(e,null),C(e,r),C(e,s),C(s,o),C(o,a),C(o,c),C(o,l),En(l,i[0].tunnel_url),C(o,f),Ie&&Ie.m(o,null),C(s,d),C(s,p),C(p,g),C(p,_),C(p,m),En(m,i[0].title),C(p,b),me&&me.m(p,null),C(s,M),C(s,S),C(S,v),C(S,E),C(S,w),En(w,i[0].description),C(S,x),Ae&&Ae.m(S,null),C(s,R),C(s,Y),C(Y,q),C(Y,O),C(Y,z),En(z,i[0].tags),C(Y,W),C(Y,ee),C(s,Z),C(s,k),C(k,ne),C(k,X),C(k,pe),C(pe,J),C(pe,N),Ma(pe,i[0].provider,!0),C(s,G),Ne&&Ne.m(s,null),C(s,te),Ue&&Ue.m(s,null),C(s,se),C(s,P),Me.m(P,null),Re||(ce=[rt(l,"input",i[6]),rt(m,"input",i[7]),rt(w,"input",i[8]),rt(z,"input",i[9]),rt(pe,"change",i[10]),rt(s,"submit",jc(i[5]))],Re=!0)},p(de,[Be]){de[4]?xe&&(xe.d(1),xe=null):xe||(xe=Ta(),xe.c(),xe.m(e,r)),Be&2&&u!==(u="w-full px-3 py-2 bg-gray-700 border "+(de[1].tunnel_url?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500")&&L(l,"class",u),Be&1&&l.value!==de[0].tunnel_url&&En(l,de[0].tunnel_url),de[1].tunnel_url?Ie?Ie.p(de,Be):(Ie=wa(de),Ie.c(),Ie.m(o,null)):Ie&&(Ie.d(1),Ie=null),Be&2&&h!==(h="w-full px-3 py-2 bg-gray-700 border "+(de[1].title?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500")&&L(m,"class",h),Be&1&&m.value!==de[0].title&&En(m,de[0].title),de[1].title?me?me.p(de,Be):(me=Aa(de),me.c(),me.m(p,null)):me&&(me.d(1),me=null),Be&2&&F!==(F="w-full px-3 py-2 bg-gray-700 border "+(de[1].description?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500")&&L(w,"class",F),Be&1&&En(w,de[0].description),de[1].description?Ae?Ae.p(de,Be):(Ae=Ra(de),Ae.c(),Ae.m(S,null)):Ae&&(Ae.d(1),Ae=null),Be&1&&z.value!==de[0].tags&&En(z,de[0].tags),Be&1&&Ma(pe,de[0].provider),de[1].api?Ne?Ne.p(de,Be):(Ne=Ca(de),Ne.c(),Ne.m(s,te)):Ne&&(Ne.d(1),Ne=null),de[3]?Ue?Ue.p(de,Be):(Ue=La(de),Ue.c(),Ue.m(s,se)):Ue&&(Ue.d(1),Ue=null),ge!==(ge=oe(de))&&(Me.d(1),Me=ge(de),Me&&(Me.c(),Me.m(P,null))),Be&20&&we!==(we=de[2]||!de[4])&&(P.disabled=we)},i:$e,o:$e,d(de){de&&be(e),xe&&xe.d(),Ie&&Ie.d(),me&&me.d(),Ae&&Ae.d(),Ne&&Ne.d(),Ue&&Ue.d(),Me.d(),Re=!1,en(ce)}}}function _u(i){try{return new URL(i),!0}catch{return!1}}function vu(i,e,t){let n={tunnel_url:"",title:"",description:"",tags:"",provider:"Pinggy"},r={},s=!1,o="",a;ln.subscribe(_=>{t(4,a=_)});function c(){return t(1,r={}),n.tunnel_url?_u(n.tunnel_url)||t(1,r.tunnel_url="Please enter a valid URL",r):t(1,r.tunnel_url="Tunnel URL is required",r),n.title?n.title.length>100&&t(1,r.title="Title must be less than 100 characters",r):t(1,r.title="Title is required",r),n.description&&n.description.length>500&&t(1,r.description="Description must be less than 500 characters",r),Object.keys(r).length===0}async function l(){if(!a){t(1,r.api="API key is required to publish. Please generate or enter one.",r);return}if(c()){t(2,s=!0),t(3,o=""),t(1,r={});try{const _={...n,tags:n.tags.split(",").map(h=>h.trim()).filter(h=>h)},m=await Pn.publishPost(_,a);Qr(m),t(0,n={tunnel_url:"",title:"",description:"",tags:"",provider:"Pinggy"}),t(3,o="Ghost tunnel published successfully!")}catch(_){console.error("Error publishing post:",_),t(1,r.api=_.message||"Failed to publish tunnel. Please try again.",r)}finally{t(2,s=!1)}}}function u(){n.tunnel_url=this.value,t(0,n)}function f(){n.title=this.value,t(0,n)}function d(){n.description=this.value,t(0,n)}function p(){n.tags=this.value,t(0,n)}function g(){n.provider=Jc(this),t(0,n)}return[n,r,s,o,a,l,u,f,d,p,g]}class xu extends Vi{constructor(e){super(),Hi(this,e,vu,gu,ri,{})}}function Pa(i){let e,t,n,r,s,o;return{c(){e=V("button"),t=on("svg"),n=on("path"),r=Le(`\r
      Delete`),L(n,"stroke-linecap","round"),L(n,"stroke-linejoin","round"),L(n,"stroke-width","2"),L(n,"d","M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"),L(t,"xmlns","http://www.w3.org/2000/svg"),L(t,"class","h-4 w-4"),L(t,"fill","none"),L(t,"viewBox","0 0 24 24"),L(t,"stroke","currentColor"),e.disabled=i[2],L(e,"class","flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors duration-150 ease-in-out disabled:opacity-50")},m(a,c){Te(a,e,c),C(e,t),C(t,n),C(e,r),s||(o=rt(e,"click",i[9]),s=!0)},p(a,c){c&4&&(e.disabled=a[2])},d(a){a&&be(e),s=!1,o()}}}function Da(i){let e,t;return{c(){e=V("p"),t=Le(i[3]),L(e,"class","text-sm text-red-400")},m(n,r){Te(n,e,r),C(e,t)},p(n,r){r&8&&Ve(t,n[3])},d(n){n&&be(e)}}}function Ua(i){let e,t;return{c(){e=V("p"),t=Le(i[4]),L(e,"class","text-sm text-green-400")},m(n,r){Te(n,e,r),C(e,t)},p(n,r){r&16&&Ve(t,n[4])},d(n){n&&be(e)}}}function Mu(i){let e,t,n,r,s,o=i[6]?"Upvoted":"Upvote",a,c,l=i[0].upvotes>0?`(${i[0].upvotes})`:"",u,f,d,p,g,_,m,h,b,M=i[7]&&!i[5]&&Pa(i),S=i[3]&&Da(i),v=i[4]&&Ua(i);return{c(){e=V("div"),t=V("button"),n=on("svg"),r=on("path"),s=fe(),a=Le(o),c=fe(),u=Le(l),g=fe(),M&&M.c(),_=fe(),S&&S.c(),m=fe(),v&&v.c(),L(r,"stroke-linecap","round"),L(r,"stroke-linejoin","round"),L(r,"stroke-width","2"),L(r,"d","M5 15l7-7 7 7"),L(n,"xmlns","http://www.w3.org/2000/svg"),L(n,"class","h-4 w-4"),L(n,"fill","none"),L(n,"viewBox","0 0 24 24"),L(n,"stroke","currentColor"),t.disabled=f=i[1]||i[6],L(t,"title",d=i[6]?"You've already upvoted this post":"Upvote this post"),L(t,"class",p="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded transition-colors duration-150 ease-in-out "+(i[6]?"bg-purple-800 text-purple-200 cursor-not-allowed":"bg-purple-600 hover:bg-purple-700 text-white")+" disabled:opacity-50"),L(e,"class","mt-3 flex flex-wrap items-center gap-2")},m(E,w){Te(E,e,w),C(e,t),C(t,n),C(n,r),C(t,s),C(t,a),C(t,c),C(t,u),C(e,g),M&&M.m(e,null),C(e,_),S&&S.m(e,null),C(e,m),v&&v.m(e,null),h||(b=rt(t,"click",i[8]),h=!0)},p(E,[w]){w&64&&o!==(o=E[6]?"Upvoted":"Upvote")&&Ve(a,o),w&1&&l!==(l=E[0].upvotes>0?`(${E[0].upvotes})`:"")&&Ve(u,l),w&66&&f!==(f=E[1]||E[6])&&(t.disabled=f),w&64&&d!==(d=E[6]?"You've already upvoted this post":"Upvote this post")&&L(t,"title",d),w&64&&p!==(p="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded transition-colors duration-150 ease-in-out "+(E[6]?"bg-purple-800 text-purple-200 cursor-not-allowed":"bg-purple-600 hover:bg-purple-700 text-white")+" disabled:opacity-50")&&L(t,"class",p),E[7]&&!E[5]?M?M.p(E,w):(M=Pa(E),M.c(),M.m(e,_)):M&&(M.d(1),M=null),E[3]?S?S.p(E,w):(S=Da(E),S.c(),S.m(e,m)):S&&(S.d(1),S=null),E[4]?v?v.p(E,w):(v=Ua(E),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},i:$e,o:$e,d(E){E&&be(e),M&&M.d(),S&&S.d(),v&&v.d(),h=!1,b()}}}function Su(i,e,t){let n,r,{post:s}=e,o=!1,a=!1,c="",l="",u=!1,f;ln.subscribe(_=>{t(10,f=_)});let d;Wi.subscribe(_=>{t(11,d=_)});async function p(){if(!(o||!f||r)){t(1,o=!0),t(3,c="");try{const _=await Pn.votePost(s.id);_.own_by_current_user=s.own_by_current_user,Qr(_),sa(s.id,f)}catch(_){console.error("Error upvoting post:",_),t(3,c=_.message||"Failed to upvote post")}finally{t(1,o=!1)}}}async function g(){if(!f){t(3,c="You need an API key to delete posts");return}if(confirm(`Are you sure you want to delete "${s.title}"?`)){t(2,a=!0),t(3,c=""),t(5,u=!0);try{await Pn.deletePost(s.id,f),tc(s.id),t(4,l="Post deleted successfully")}catch(_){console.error("Error deleting post:",_),t(3,c=_.message||"Failed to delete post"),_.message&&_.message.includes("Forbidden")&&(t(0,s.own_by_current_user=!1,s),await Di())}finally{t(2,a=!1)}}}return i.$$set=_=>{"post"in _&&t(0,s=_.post)},i.$$.update=()=>{i.$$.dirty&1025&&t(7,n=s&&s.own_by_current_user===!0&&f),i.$$.dirty&3073&&t(6,r=f&&d&&d[f]&&d[f].includes(s.id))},[s,o,a,c,l,u,r,n,p,g,f,d]}class nc extends Vi{constructor(e){super(),Hi(this,e,Su,Mu,ri,{post:0})}}const yu="modulepreload",Eu=function(i){return"/"+i},Ia={},bu=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=Eu(s),s in Ia)return;Ia[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":yu,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="152",li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tu=0,Na=1,wu=2,ic=1,Au=2,vn=3,Dn=0,Dt=1,Zt=2,Ln=0,Ui=1,Oa=2,Fa=3,Ba=4,Ru=5,Ci=100,Cu=101,Lu=102,za=103,ka=104,Pu=200,Du=201,Uu=202,Iu=203,rc=204,sc=205,Nu=206,Ou=207,Fu=208,Bu=209,zu=210,ku=0,Gu=1,Hu=2,qs=3,Vu=4,Wu=5,Xu=6,qu=7,ac=0,Yu=1,ju=2,Mn=0,Ku=1,Zu=2,Ju=3,$u=4,Qu=5,oc=300,Fi=301,Bi=302,Ys=303,js=304,es=306,Ks=1e3,Jt=1001,Zs=1002,Ct=1003,Ga=1004,fs=1005,zt=1006,ef=1007,or=1008,ti=1009,tf=1010,nf=1011,lc=1012,rf=1013,Xn=1014,qn=1015,lr=1016,sf=1017,af=1018,Ii=1020,of=1021,$t=1023,lf=1024,cf=1025,Yn=1026,zi=1027,uf=1028,ff=1029,df=1030,hf=1031,pf=1033,ds=33776,hs=33777,ps=33778,ms=33779,Ha=35840,Va=35841,Wa=35842,Xa=35843,mf=36196,qa=37492,Ya=37496,ja=37808,Ka=37809,Za=37810,Ja=37811,$a=37812,Qa=37813,eo=37814,to=37815,no=37816,io=37817,ro=37818,so=37819,ao=37820,oo=37821,gs=36492,gf=36283,lo=36284,co=36285,uo=36286,cc=3e3,jn=3001,_f=3200,vf=3201,xf=0,Mf=1,Kn="",Ge="srgb",un="srgb-linear",uc="display-p3",_s=7680,Sf=519,Js=35044,fo="300 es",$s=1035;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ho=1234567;const tr=Math.PI/180,cr=180/Math.PI;function Sn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function oa(i,e){return(i%e+e)%e}function yf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ef(i,e,t){return i!==e?(t-i)/(e-i):0}function nr(i,e,t){return(1-t)*i+t*e}function bf(i,e,t,n){return nr(i,e,1-Math.exp(-t*n))}function Tf(i,e=1){return e-Math.abs(oa(i,e*2)-e)}function wf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Af(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Rf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cf(i,e){return i+Math.random()*(e-i)}function Lf(i){return i*(.5-Math.random())}function Pf(i){i!==void 0&&(ho=i);let e=ho+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Df(i){return i*tr}function Uf(i){return i*cr}function Qs(i){return(i&i-1)===0&&i!==0}function If(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nf(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*f,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Of={DEG2RAD:tr,RAD2DEG:cr,generateUUID:Sn,clamp:Mt,euclideanModulo:oa,mapLinear:yf,inverseLerp:Ef,lerp:nr,damp:bf,pingpong:Tf,smoothstep:wf,smootherstep:Af,randInt:Rf,randFloat:Cf,randFloatSpread:Lf,seededRandom:Pf,degToRad:Df,radToDeg:Uf,isPowerOfTwo:Qs,ceilPowerOfTwo:If,floorPowerOfTwo:fc,setQuaternionFromProperEuler:Nf,normalize:it,denormalize:xn};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],h=r[6],b=r[1],M=r[4],S=r[7],v=r[2],E=r[5],w=r[8];return s[0]=o*_+a*b+c*v,s[3]=o*m+a*M+c*E,s[6]=o*h+a*S+c*w,s[1]=l*_+u*b+f*v,s[4]=l*m+u*M+f*E,s[7]=l*h+u*S+f*w,s[2]=d*_+p*b+g*v,s[5]=d*m+p*M+g*E,s[8]=d*h+p*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,p=l*s-o*c,g=t*f+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vs.makeScale(e,t)),this}rotate(e){return this.premultiply(vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(vs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vs=new Ze;function dc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const po={};function ir(i){i in po||(po[i]=!0,console.warn(i))}function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ff=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Bf=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function zf(i){return i.convertSRGBToLinear().applyMatrix3(Bf)}function kf(i){return i.applyMatrix3(Ff).convertLinearToSRGB()}const Gf={[un]:i=>i,[Ge]:i=>i.convertSRGBToLinear(),[uc]:zf},Hf={[un]:i=>i,[Ge]:i=>i.convertLinearToSRGB(),[uc]:kf},Wt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return un},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Gf[e],r=Hf[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let ui;class hc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=Kr("canvas")),ui.width=e.width,ui.height=e.height;const n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class pc{constructor(e=null){this.isSource=!0,this.uuid=Sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ms(r[o].image)):s.push(Ms(r[o]))}else s=Ms(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;class Ot extends si{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Jt,r=Jt,s=zt,o=or,a=$t,c=ti,l=Ot.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Sn(),this.name="",this.source=new pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===jn?Ge:Kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ge?jn:cc}set encoding(e){ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===jn?Ge:Kn}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=oc;Ot.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,S=(p+1)/2,v=(h+1)/2,E=(u+d)/4,w=(f+_)/4,F=(g+m)/4;return M>S&&M>v?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=w/n):S>v?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=E/r,s=F/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=w/s,r=F/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(d-u)/b,this.w=Math.acos((l+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ni extends si{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===jn?Ge:Kn),this.texture=new Ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mc extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wf extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==p||u!==g){let m=1-a;const h=c*d+l*p+u*g+f*_,b=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const v=Math.sqrt(M),E=Math.atan2(v,h*b);m=Math.sin(m*E)/v,a=Math.sin(a*E)/v}const S=a*b;if(c=c*m+d*S,l=l*m+p*S,u=u*m+g*S,f=f*m+_*S,m===1-a){const v=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=v,l*=v,u*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*p-l*d,e[t+1]=c*g+u*d+l*f-a*p,e[t+2]=l*g+u*p+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),f=a(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*n,u=c*n+a*t-s*r,f=c*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=l*c+d*-s+u*-a-f*-o,this.y=u*c+d*-o+f*-s-l*-a,this.z=f*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new I,mo=new ii;class In{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),fi.copy(e.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)hn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(hn)}else r.boundingBox===null&&r.computeBoundingBox(),fi.copy(r.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),mr.subVectors(this.max,ji),di.subVectors(e.a,ji),hi.subVectors(e.b,ji),pi.subVectors(e.c,ji),bn.subVectors(hi,di),Tn.subVectors(pi,hi),Bn.subVectors(di,pi);let t=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-Bn.z,Bn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,Bn.z,0,-Bn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-Bn.y,Bn.x,0];return!ys(t,di,hi,pi,mr)||(t=[1,0,0,0,1,0,0,0,1],!ys(t,di,hi,pi,mr))?!1:(gr.crossVectors(bn,Tn),t=[gr.x,gr.y,gr.z],ys(t,di,hi,pi,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new I,new I,new I,new I,new I,new I,new I,new I],hn=new I,fi=new In,di=new I,hi=new I,pi=new I,bn=new I,Tn=new I,Bn=new I,ji=new I,mr=new I,gr=new I,zn=new I;function ys(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){zn.fromArray(i,s);const a=r.x*Math.abs(zn.x)+r.y*Math.abs(zn.y)+r.z*Math.abs(zn.z),c=e.dot(zn),l=t.dot(zn),u=n.dot(zn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Xf=new In,Ki=new I,Es=new I;class Xi{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Es.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Es)),this.expandByPoint(Ki.copy(e.center).sub(Es))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new I,bs=new I,_r=new I,wn=new I,Ts=new I,vr=new I,ws=new I;class la{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){bs.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(bs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_r),a=wn.dot(this.direction),c=-wn.dot(_r),l=wn.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(bs).addScaledVector(_r,d),p}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),r=pn.dot(pn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,r,s){Ts.subVectors(t,e),vr.subVectors(n,e),ws.crossVectors(Ts,vr);let o=this.direction.dot(ws),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,e);const c=a*this.direction.dot(vr.crossVectors(wn,vr));if(c<0)return null;const l=a*this.direction.dot(Ts.cross(wn));if(l<0||c+l>o)return null;const u=-a*wn.dot(ws);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,c,l,u,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),o=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,g=l*u,_=l*f;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,g=l*u,_=l*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qf,e,Yf)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),An.crossVectors(n,It),An.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),An.crossVectors(n,It)),An.normalize(),xr.crossVectors(It,An),r[0]=An.x,r[4]=xr.x,r[8]=It.x,r[1]=An.y,r[5]=xr.y,r[9]=It.y,r[2]=An.z,r[6]=xr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],h=n[14],b=n[3],M=n[7],S=n[11],v=n[15],E=r[0],w=r[4],F=r[8],x=r[12],R=r[1],Y=r[5],q=r[9],O=r[13],z=r[2],W=r[6],ee=r[10],Z=r[14],k=r[3],ne=r[7],X=r[11],pe=r[15];return s[0]=o*E+a*R+c*z+l*k,s[4]=o*w+a*Y+c*W+l*ne,s[8]=o*F+a*q+c*ee+l*X,s[12]=o*x+a*O+c*Z+l*pe,s[1]=u*E+f*R+d*z+p*k,s[5]=u*w+f*Y+d*W+p*ne,s[9]=u*F+f*q+d*ee+p*X,s[13]=u*x+f*O+d*Z+p*pe,s[2]=g*E+_*R+m*z+h*k,s[6]=g*w+_*Y+m*W+h*ne,s[10]=g*F+_*q+m*ee+h*X,s[14]=g*x+_*O+m*Z+h*pe,s[3]=b*E+M*R+S*z+v*k,s[7]=b*w+M*Y+S*W+v*ne,s[11]=b*F+M*q+S*ee+v*X,s[15]=b*x+M*O+S*Z+v*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*c*f-r*l*f-s*a*d+n*l*d+r*a*p-n*c*p)+_*(+t*c*p-t*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+t*l*f-t*a*p-s*o*f+n*o*p+s*a*u-n*l*u)+h*(-r*a*u-t*c*f+t*a*d+r*o*f-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],b=f*m*l-_*d*l+_*c*p-a*m*p-f*c*h+a*d*h,M=g*d*l-u*m*l-g*c*p+o*m*p+u*c*h-o*d*h,S=u*_*l-g*f*l+g*a*p-o*_*p-u*a*h+o*f*h,v=g*f*c-u*_*c-g*a*d+o*_*d+u*a*m-o*f*m,E=t*b+n*M+r*S+s*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=b*w,e[1]=(_*d*s-f*m*s-_*r*p+n*m*p+f*r*h-n*d*h)*w,e[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*h+n*c*h)*w,e[3]=(f*c*s-a*d*s-f*r*l+n*d*l+a*r*p-n*c*p)*w,e[4]=M*w,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*h+t*d*h)*w,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*h-t*c*h)*w,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*p+t*c*p)*w,e[8]=S*w,e[9]=(g*f*s-u*_*s-g*n*p+t*_*p+u*n*h-t*f*h)*w,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*h+t*a*h)*w,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*p-t*a*p)*w,e[12]=v*w,e[13]=(u*_*r-g*f*r+g*n*d-t*_*d-u*n*m+t*f*m)*w,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*n*c-t*f*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,p=s*u,g=s*f,_=o*u,m=o*f,h=a*f,b=c*l,M=c*u,S=c*f,v=n.x,E=n.y,w=n.z;return r[0]=(1-(_+h))*v,r[1]=(p+S)*v,r[2]=(g-M)*v,r[3]=0,r[4]=(p-S)*E,r[5]=(1-(d+h))*E,r[6]=(m+b)*E,r[7]=0,r[8]=(g+M)*w,r[9]=(m-b)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const o=mi.set(r[4],r[5],r[6]).length(),a=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const l=1/s,u=1/o,f=1/a;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=f,Xt.elements[9]*=f,Xt.elements[10]*=f,t.setFromRotationMatrix(Xt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,c=1/(t-e),l=1/(n-r),u=1/(o-s),f=(t+e)*c,d=(n+r)*l,p=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new I,Xt=new ct,qf=new I(0,0,0),Yf=new I(1,1,1),An=new I,xr=new I,It=new I,go=new ct,_o=new ii;class ts{constructor(e=0,t=0,n=0,r=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _o.setFromEuler(this),this.setFromQuaternion(_o,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class ca{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jf=0;const vo=new I,gi=new ii,mn=new ct,Mr=new I,Zi=new I,Kf=new I,Zf=new ii,xo=new I(1,0,0),Mo=new I(0,1,0),So=new I(0,0,1),Jf={type:"added"},yo={type:"removed"};class Lt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new I,t=new ts,n=new ii,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ze}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(xo,e)}rotateY(e){return this.rotateOnAxis(Mo,e)}rotateZ(e){return this.rotateOnAxis(So,e)}translateOnAxis(e,t){return vo.copy(e).applyQuaternion(this.quaternion),this.position.add(vo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xo,e)}translateY(e){return this.translateOnAxis(Mo,e)}translateZ(e){return this.translateOnAxis(So,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Zi,Mr,this.up):mn.lookAt(Mr,Zi,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(mn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,Kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new I(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new I,gn=new I,As=new I,_n=new I,_i=new I,vi=new I,Eo=new I,Rs=new I,Cs=new I,Ls=new I;let Sr=!1;class jt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qt.subVectors(r,t),gn.subVectors(n,t),As.subVectors(e,t);const o=qt.dot(qt),a=qt.dot(gn),c=qt.dot(As),l=gn.dot(gn),u=gn.dot(As),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,n,r,s,o,a,c){return Sr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sr=!0),this.getInterpolation(e,t,n,r,s,o,a,c)}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,_n),c.setScalar(0),c.addScaledVector(s,_n.x),c.addScaledVector(o,_n.y),c.addScaledVector(a,_n.z),c}static isFrontFacing(e,t,n,r){return qt.subVectors(n,t),gn.subVectors(e,t),qt.cross(gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),qt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Sr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sr=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;_i.subVectors(r,n),vi.subVectors(s,n),Rs.subVectors(e,n);const c=_i.dot(Rs),l=vi.dot(Rs);if(c<=0&&l<=0)return t.copy(n);Cs.subVectors(e,r);const u=_i.dot(Cs),f=vi.dot(Cs);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(_i,o);Ls.subVectors(e,s);const p=_i.dot(Ls),g=vi.dot(Ls);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(vi,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Eo.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Eo,a);const h=1/(m+_+d);return o=_*h,a=d*h,t.copy(n).addScaledVector(_i,o).addScaledVector(vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let $f=0;class dr extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Ui,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=rc,this.blendDst=sc,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Ps(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ge){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Wt.workingColorSpace){if(e=oa(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ps(o,s,e+1/3),this.g=Ps(o,s,e),this.b=Ps(o,s,e-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ge){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ge){const n=gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ge){return Wt.fromWorkingColorSpace(Et.copy(this),e),Math.round(Mt(Et.r*255,0,255))*65536+Math.round(Mt(Et.g*255,0,255))*256+Math.round(Mt(Et.b*255,0,255))}getHexString(e=Ge){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Ge){Wt.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==Ge?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yt),Yt.h+=e,Yt.s+=t,Yt.l+=n,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(yr);const n=nr(Yt.h,yr.h,t),r=nr(Yt.s,yr.s,t),s=nr(Yt.l,yr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Qe;Qe.NAMES=gc;class rr extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new I,Er=new He;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Js,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Js&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _c extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vc extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qf=0;const Bt=new ct,Ds=new Lt,xi=new I,Nt=new In,Ji=new In,gt=new I;class Ht extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dc(e)?vc:_c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return Ds.lookAt(e),Ds.updateMatrix(),this.applyMatrix4(Ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Nt.min,Ji.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,Ji.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(Ji.min),Nt.expandByPoint(Ji.max))}Nt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)gt.fromBufferAttribute(a,l),c&&(xi.fromBufferAttribute(e,l),gt.add(xi)),r=Math.max(r,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<a;R++)l[R]=new I,u[R]=new I;const f=new I,d=new I,p=new I,g=new He,_=new He,m=new He,h=new I,b=new I;function M(R,Y,q){f.fromArray(r,R*3),d.fromArray(r,Y*3),p.fromArray(r,q*3),g.fromArray(o,R*2),_.fromArray(o,Y*2),m.fromArray(o,q*2),d.sub(f),p.sub(f),_.sub(g),m.sub(g);const O=1/(_.x*m.y-m.x*_.y);isFinite(O)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(O),b.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(O),l[R].add(h),l[Y].add(h),l[q].add(h),u[R].add(b),u[Y].add(b),u[q].add(b))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let R=0,Y=S.length;R<Y;++R){const q=S[R],O=q.start,z=q.count;for(let W=O,ee=O+z;W<ee;W+=3)M(n[W+0],n[W+1],n[W+2])}const v=new I,E=new I,w=new I,F=new I;function x(R){w.fromArray(s,R*3),F.copy(w);const Y=l[R];v.copy(Y),v.sub(w.multiplyScalar(w.dot(Y))).normalize(),E.crossVectors(F,Y);const O=E.dot(u[R])<0?-1:1;c[R*4]=v.x,c[R*4+1]=v.y,c[R*4+2]=v.z,c[R*4+3]=O}for(let R=0,Y=S.length;R<Y;++R){const q=S[R],O=q.start,z=q.count;for(let W=O,ee=O+z;W<ee;W+=3)x(n[W+0]),x(n[W+1]),x(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,f=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new Qt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bo=new ct,nn=new la,br=new Xi,To=new I,Mi=new I,Si=new I,yi=new I,Us=new I,Tr=new I,wr=new He,Ar=new He,Rr=new He,wo=new I,Ao=new I,Ro=new I,Cr=new I,Lr=new I;class kt extends Lt{constructor(e=new Ht,t=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Tr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(Us.fromBufferAttribute(f,e),o?Tr.addScaledVector(Us,u):Tr.addScaledVector(Us.sub(t),u))}t.add(Tr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),nn.copy(e.ray).recast(e.near),!(br.containsPoint(nn.origin)===!1&&(nn.intersectSphere(br,To)===null||nn.origin.distanceToSquared(To)>(e.far-e.near)**2))&&(bo.copy(s).invert(),nn.copy(e.ray).applyMatrix4(bo),!(n.boundingBox!==null&&nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=s[_.materialIndex],h=Math.max(_.start,d.start),b=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let M=h,S=b;M<S;M+=3){const v=o.getX(M),E=o.getX(M+1),w=o.getX(M+2);n=Pr(this,m,e,nn,c,l,u,v,E,w),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const h=o.getX(_),b=o.getX(_+1),M=o.getX(_+2);n=Pr(this,s,e,nn,c,l,u,h,b,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=s[_.materialIndex],h=Math.max(_.start,d.start),b=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let M=h,S=b;M<S;M+=3){const v=M,E=M+1,w=M+2;n=Pr(this,m,e,nn,c,l,u,v,E,w),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const h=_,b=_+1,M=_+2;n=Pr(this,s,e,nn,c,l,u,h,b,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function ed(i,e,t,n,r,s,o,a){let c;if(e.side===Dt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Dn,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Lr);return l<t.near||l>t.far?null:{distance:l,point:Lr.clone(),object:i}}function Pr(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Mi),i.getVertexPosition(c,Si),i.getVertexPosition(l,yi);const u=ed(i,e,t,n,Mi,Si,yi,Cr);if(u){r&&(wr.fromBufferAttribute(r,a),Ar.fromBufferAttribute(r,c),Rr.fromBufferAttribute(r,l),u.uv=jt.getInterpolation(Cr,Mi,Si,yi,wr,Ar,Rr,new He)),s&&(wr.fromBufferAttribute(s,a),Ar.fromBufferAttribute(s,c),Rr.fromBufferAttribute(s,l),u.uv1=jt.getInterpolation(Cr,Mi,Si,yi,wr,Ar,Rr,new He),u.uv2=u.uv1),o&&(wo.fromBufferAttribute(o,a),Ao.fromBufferAttribute(o,c),Ro.fromBufferAttribute(o,l),u.normal=jt.getInterpolation(Cr,Mi,Si,yi,wo,Ao,Ro,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};jt.getNormal(Mi,Si,yi,f.normal),u.face=f}return u}class hr extends Ht{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(f,2));function g(_,m,h,b,M,S,v,E,w,F,x){const R=S/w,Y=v/F,q=S/2,O=v/2,z=E/2,W=w+1,ee=F+1;let Z=0,k=0;const ne=new I;for(let X=0;X<ee;X++){const pe=X*Y-O;for(let J=0;J<W;J++){const N=J*R-q;ne[_]=N*b,ne[m]=pe*M,ne[h]=z,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[h]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(J/w),f.push(1-X/F),Z+=1}}for(let X=0;X<F;X++)for(let pe=0;pe<w;pe++){const J=d+pe+W*X,N=d+pe+W*(X+1),G=d+(pe+1)+W*(X+1),te=d+(pe+1)+W*X;c.push(J,N,te),c.push(N,G,te),k+=6}a.addGroup(p,k,x),p+=k,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=ki(i[t]);for(const r in n)e[r]=n[r]}return e}function td(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xc(i){return i.getRenderTarget()===null?i.outputColorSpace:un}const ua={clone:ki,merge:Rt};var nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nd,this.fragmentShader=id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mc extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Mc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,bi=1;class rd extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Kt(Ei,bi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Kt(Ei,bi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Kt(Ei,bi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Kt(Ei,bi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Kt(Ei,bi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Kt(Ei,bi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Mn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Sc extends Ot{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sd extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===jn?Ge:Kn),this.texture=new Sc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hr(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Ln});s.uniforms.tEquirect.value=t;const o=new kt(r,s),a=t.minFilter;return t.minFilter===or&&(t.minFilter=zt),new rd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Is=new I,ad=new I,od=new Ze;class Gn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Is.subVectors(n,t).cross(ad.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Is),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||od.getNormalMatrix(e),r=this.coplanarPoint(Is).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Xi,Dr=new I;class yc{constructor(e=new Gn,t=new Gn,n=new Gn,r=new Gn,s=new Gn,o=new Gn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],d=n[8],p=n[9],g=n[10],_=n[11],m=n[12],h=n[13],b=n[14],M=n[15];return t[0].setComponents(a-r,f-c,_-d,M-m).normalize(),t[1].setComponents(a+r,f+c,_+d,M+m).normalize(),t[2].setComponents(a+s,f+l,_+p,M+h).normalize(),t[3].setComponents(a-s,f-l,_-p,M-h).normalize(),t[4].setComponents(a-o,f-u,_-g,M-b).normalize(),t[5].setComponents(a+o,f+u,_+g,M+b).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Dr.x=r.normal.x>0?e.max.x:e.min.x,Dr.y=r.normal.y>0?e.max.y:e.min.y,Dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ld(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const f=l.array,d=l.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,d),l.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const d=u.array,p=u.updateRange;i.bindBuffer(f,l),p.count===-1?i.bufferSubData(f,0,d):(t?i.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class fa extends Ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,f=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const b=h*d-o;for(let M=0;M<l;M++){const S=M*f-s;g.push(S,-b,0),_.push(0,0,1),m.push(M/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<a;b++){const M=b+l*h,S=b+l*(h+1),v=b+1+l*(h+1),E=b+1+l*h;p.push(M,S,E),p.push(S,v,E)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}var cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,md="vec3 transformed = vec3( position );",gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vd=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,xd=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rd=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Od=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
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
}`,Yd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,$d=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,th=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ih=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,rh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	vec3 f0 = material.specularColor;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ah=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dh=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,hh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mh=`#if defined( USE_POINTS_UV )
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
#endif`,gh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,Eh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ah=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,Rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ph=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ih=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Vh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yh=`#ifdef USE_SKINNING
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
#endif`,jh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$h=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Qh=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ep=`#ifdef USE_UV
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
#endif`,tp=`#ifdef USE_UV
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
#endif`,np=`#ifdef USE_UV
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
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,up=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,fp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gp=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,xp=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ep=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Ap=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Cp=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`uniform float size;
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
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Np=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xe={alphamap_fragment:cd,alphamap_pars_fragment:ud,alphatest_fragment:fd,alphatest_pars_fragment:dd,aomap_fragment:hd,aomap_pars_fragment:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:_d,iridescence_fragment:vd,bumpmap_pars_fragment:xd,clipping_planes_fragment:Md,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:Ed,color_fragment:bd,color_pars_fragment:Td,color_pars_vertex:wd,color_vertex:Ad,common:Rd,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Pd,displacementmap_vertex:Dd,emissivemap_fragment:Ud,emissivemap_pars_fragment:Id,encodings_fragment:Nd,encodings_pars_fragment:Od,envmap_fragment:Fd,envmap_common_pars_fragment:Bd,envmap_pars_fragment:zd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:$d,envmap_vertex:Gd,fog_vertex:Hd,fog_pars_vertex:Vd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:qd,lightmap_fragment:Yd,lightmap_pars_fragment:jd,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:Zd,lights_pars_begin:Jd,lights_toon_fragment:Qd,lights_toon_pars_fragment:eh,lights_phong_fragment:th,lights_phong_pars_fragment:nh,lights_physical_fragment:ih,lights_physical_pars_fragment:rh,lights_fragment_begin:sh,lights_fragment_maps:ah,lights_fragment_end:oh,logdepthbuf_fragment:lh,logdepthbuf_pars_fragment:ch,logdepthbuf_pars_vertex:uh,logdepthbuf_vertex:fh,map_fragment:dh,map_pars_fragment:hh,map_particle_fragment:ph,map_particle_pars_fragment:mh,metalnessmap_fragment:gh,metalnessmap_pars_fragment:_h,morphcolor_vertex:vh,morphnormal_vertex:xh,morphtarget_pars_vertex:Mh,morphtarget_vertex:Sh,normal_fragment_begin:yh,normal_fragment_maps:Eh,normal_pars_fragment:bh,normal_pars_vertex:Th,normal_vertex:wh,normalmap_pars_fragment:Ah,clearcoat_normal_fragment_begin:Rh,clearcoat_normal_fragment_maps:Ch,clearcoat_pars_fragment:Lh,iridescence_pars_fragment:Ph,output_fragment:Dh,packing:Uh,premultiplied_alpha_fragment:Ih,project_vertex:Nh,dithering_fragment:Oh,dithering_pars_fragment:Fh,roughnessmap_fragment:Bh,roughnessmap_pars_fragment:zh,shadowmap_pars_fragment:kh,shadowmap_pars_vertex:Gh,shadowmap_vertex:Hh,shadowmask_pars_fragment:Vh,skinbase_vertex:Wh,skinning_pars_vertex:Xh,skinning_vertex:qh,skinnormal_vertex:Yh,specularmap_fragment:jh,specularmap_pars_fragment:Kh,tonemapping_fragment:Zh,tonemapping_pars_fragment:Jh,transmission_fragment:$h,transmission_pars_fragment:Qh,uv_pars_fragment:ep,uv_pars_vertex:tp,uv_vertex:np,worldpos_vertex:ip,background_vert:rp,background_frag:sp,backgroundCube_vert:ap,backgroundCube_frag:op,cube_vert:lp,cube_frag:cp,depth_vert:up,depth_frag:fp,distanceRGBA_vert:dp,distanceRGBA_frag:hp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:_p,meshbasic_vert:vp,meshbasic_frag:xp,meshlambert_vert:Mp,meshlambert_frag:Sp,meshmatcap_vert:yp,meshmatcap_frag:Ep,meshnormal_vert:bp,meshnormal_frag:Tp,meshphong_vert:wp,meshphong_frag:Ap,meshphysical_vert:Rp,meshphysical_frag:Cp,meshtoon_vert:Lp,meshtoon_frag:Pp,points_vert:Dp,points_frag:Up,shadow_vert:Ip,shadow_frag:Np,sprite_vert:Op,sprite_frag:Fp},he={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaTest:{value:0}}},Pt={basic:{uniforms:Rt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Rt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Rt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Rt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Rt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Rt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Rt([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Rt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Rt([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Rt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Rt([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Rt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Rt([he.lights,he.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Pt.physical={uniforms:Rt([Pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ur={r:0,b:0,g:0};function Bp(i,e,t,n,r,s,o){const a=new Qe(0);let c=s===!0?0:1,l,u,f=null,d=0,p=null;function g(m,h){let b=!1,M=h.isScene===!0?h.background:null;switch(M&&M.isTexture&&(M=(h.backgroundBlurriness>0?t:e).get(M)),M===null?_(a,c):M&&M.isColor&&(_(M,1),b=!0),i.xr.getEnvironmentBlendMode()){case"opaque":b=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),b=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),b=!0;break}(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===es)?(u===void 0&&(u=new kt(new hr(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ki(Pt.backgroundCube.uniforms),vertexShader:Pt.backgroundCube.vertexShader,fragmentShader:Pt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=M.colorSpace!==Ge,(f!==M||d!==M.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new kt(new fa(2,2),new Un({name:"BackgroundMaterial",uniforms:ki(Pt.background.uniforms),vertexShader:Pt.background.vertexShader,fragmentShader:Pt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=M.colorSpace!==Ge,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,h){m.getRGB(Ur,xc(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),c=h,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function zp(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null);let l=c,u=!1;function f(z,W,ee,Z,k){let ne=!1;if(o){const X=_(Z,ee,W);l!==X&&(l=X,p(l.object)),ne=h(z,Z,ee,k),ne&&b(z,Z,ee,k)}else{const X=W.wireframe===!0;(l.geometry!==Z.id||l.program!==ee.id||l.wireframe!==X)&&(l.geometry=Z.id,l.program=ee.id,l.wireframe=X,ne=!0)}k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,F(z,W,ee,Z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(z){return n.isWebGL2?i.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?i.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function _(z,W,ee){const Z=ee.wireframe===!0;let k=a[z.id];k===void 0&&(k={},a[z.id]=k);let ne=k[W.id];ne===void 0&&(ne={},k[W.id]=ne);let X=ne[Z];return X===void 0&&(X=m(d()),ne[Z]=X),X}function m(z){const W=[],ee=[],Z=[];for(let k=0;k<r;k++)W[k]=0,ee[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ee,attributeDivisors:Z,object:z,attributes:{},index:null}}function h(z,W,ee,Z){const k=l.attributes,ne=W.attributes;let X=0;const pe=ee.getAttributes();for(const J in pe)if(pe[J].location>=0){const G=k[J];let te=ne[J];if(te===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(te=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(te=z.instanceColor)),G===void 0||G.attribute!==te||te&&G.data!==te.data)return!0;X++}return l.attributesNum!==X||l.index!==Z}function b(z,W,ee,Z){const k={},ne=W.attributes;let X=0;const pe=ee.getAttributes();for(const J in pe)if(pe[J].location>=0){let G=ne[J];G===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(G=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(G=z.instanceColor));const te={};te.attribute=G,G&&G.data&&(te.data=G.data),k[J]=te,X++}l.attributes=k,l.attributesNum=X,l.index=Z}function M(){const z=l.newAttributes;for(let W=0,ee=z.length;W<ee;W++)z[W]=0}function S(z){v(z,0)}function v(z,W){const ee=l.newAttributes,Z=l.enabledAttributes,k=l.attributeDivisors;ee[z]=1,Z[z]===0&&(i.enableVertexAttribArray(z),Z[z]=1),k[z]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,W),k[z]=W)}function E(){const z=l.newAttributes,W=l.enabledAttributes;for(let ee=0,Z=W.length;ee<Z;ee++)W[ee]!==z[ee]&&(i.disableVertexAttribArray(ee),W[ee]=0)}function w(z,W,ee,Z,k,ne){n.isWebGL2===!0&&(ee===i.INT||ee===i.UNSIGNED_INT)?i.vertexAttribIPointer(z,W,ee,k,ne):i.vertexAttribPointer(z,W,ee,Z,k,ne)}function F(z,W,ee,Z){if(n.isWebGL2===!1&&(z.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const k=Z.attributes,ne=ee.getAttributes(),X=W.defaultAttributeValues;for(const pe in ne){const J=ne[pe];if(J.location>=0){let N=k[pe];if(N===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(N=z.instanceColor)),N!==void 0){const G=N.normalized,te=N.itemSize,se=t.get(N);if(se===void 0)continue;const P=se.buffer,we=se.type,Re=se.bytesPerElement;if(N.isInterleavedBufferAttribute){const ce=N.data,xe=ce.stride,Ie=N.offset;if(ce.isInstancedInterleavedBuffer){for(let me=0;me<J.locationSize;me++)v(J.location+me,ce.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let me=0;me<J.locationSize;me++)S(J.location+me);i.bindBuffer(i.ARRAY_BUFFER,P);for(let me=0;me<J.locationSize;me++)w(J.location+me,te/J.locationSize,we,G,xe*Re,(Ie+te/J.locationSize*me)*Re)}else{if(N.isInstancedBufferAttribute){for(let ce=0;ce<J.locationSize;ce++)v(J.location+ce,N.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ce=0;ce<J.locationSize;ce++)S(J.location+ce);i.bindBuffer(i.ARRAY_BUFFER,P);for(let ce=0;ce<J.locationSize;ce++)w(J.location+ce,te/J.locationSize,we,G,te*Re,te/J.locationSize*ce*Re)}}else if(X!==void 0){const G=X[pe];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(J.location,G);break;case 3:i.vertexAttrib3fv(J.location,G);break;case 4:i.vertexAttrib4fv(J.location,G);break;default:i.vertexAttrib1fv(J.location,G)}}}}E()}function x(){q();for(const z in a){const W=a[z];for(const ee in W){const Z=W[ee];for(const k in Z)g(Z[k].object),delete Z[k];delete W[ee]}delete a[z]}}function R(z){if(a[z.id]===void 0)return;const W=a[z.id];for(const ee in W){const Z=W[ee];for(const k in Z)g(Z[k].object),delete Z[k];delete W[ee]}delete a[z.id]}function Y(z){for(const W in a){const ee=a[W];if(ee[z.id]===void 0)continue;const Z=ee[z.id];for(const k in Z)g(Z[k].object),delete Z[k];delete ee[z.id]}}function q(){O(),u=!0,l!==c&&(l=c,p(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:q,resetDefaultState:O,dispose:x,releaseStatesOfGeometry:R,releaseStatesOfProgram:Y,initAttributes:M,enableAttribute:S,disableUnusedAttributes:E}}function kp(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let d,p;if(r)d=i,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,l,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Gp(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,S=o||e.has("OES_texture_float"),v=M&&S,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:v,maxSamples:E}}function Hp(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Gn,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const b=s?0:n,M=b*4;let S=h.clippingState||null;c.value=S,S=u(g,d,M,p);for(let v=0;v!==M;++v)S[v]=t[v];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const h=p+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,S=p;M!==_;++M,S+=4)o.copy(f[M]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Vp(i){let e=new WeakMap;function t(o,a){return a===Ys?o.mapping=Fi:a===js&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ys||a===js)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new sd(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class bc extends Mc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,Co=[.125,.215,.35,.446,.526,.582],Vn=20,Ns=new bc,Lo=new Qe;let Os=null;const Hn=(1+Math.sqrt(5))/2,Ti=1/Hn,Po=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Hn,Ti),new I(0,Hn,-Ti),new I(Ti,0,Hn),new I(-Ti,0,Hn),new I(Hn,Ti,0),new I(-Hn,Ti,0)];class Do{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Os=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=No(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Os),e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Os=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:lr,format:$t,colorSpace:un,depthBuffer:!1},r=Uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wp(s)),this._blurMaterial=Xp(s,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,n,r){const a=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Lo),u.toneMapping=Mn,u.autoClear=!1;const p=new rr({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new kt(new hr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Lo),_=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):b===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const M=this._cubeSize;Ir(r,b*M,h>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Fi||e.mapping===Bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=No()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ir(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Po[(r-1)%Po.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kt(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Vn;m>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const h=[];let b=0;for(let w=0;w<Vn;++w){const F=w/_,x=Math.exp(-F*F/2);h.push(x),w===0?b+=x:w<m&&(b+=2*x)}for(let w=0;w<h.length;w++)h[w]=h[w]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const S=this._sizeLods[r],v=3*S*(r>M-Li?r-M+Li:0),E=4*(this._cubeSize-S);Ir(t,v,E,3*S,2*S),c.setRenderTarget(t),c.render(f,Ns)}}function Wp(i){const e=[],t=[],n=[];let r=i;const s=i-Li+1+Co.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Li?c=Co[o-i+Li-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,b=new Float32Array(_*g*p),M=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,F=E>2?0:-1,x=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];b.set(x,_*g*E),M.set(d,m*g*E);const R=[E,E,E,E,E,E];S.set(R,h*g*E)}const v=new Ht;v.setAttribute("position",new Qt(b,_)),v.setAttribute("uv",new Qt(M,m)),v.setAttribute("faceIndex",new Qt(S,h)),e.push(v),r>Li&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uo(i,e,t){const n=new ni(i,e,t);return n.texture.mapping=es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Xp(i,e,t){const n=new Float32Array(Vn),r=new I(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:da(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Io(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function No(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function da(){return`

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
	`}function qp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ys||c===js,u=c===Fi||c===Bi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Do(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Do(i));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function jp(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let M=0,S=b.length;M<S;M+=3){const v=b[M+0],E=b[M+1],w=b[M+2];d.push(v,E,E,w,w,v)}}else{const b=g.array;_=g.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const v=M+0,E=M+1,w=M+2;d.push(v,E,E,w,w,v)}}const m=new(dc(d)?vc:_c)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Kp(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,p){i.drawElements(s,p,a,d*c),t.update(p,s,1)}function f(d,p,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,d*c,g),t.update(p,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function Zp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Jp(i,e){return i[0]-e[0]}function $p(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Qp(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new lt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let W=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let x=0;M===!0&&(x=1),S===!0&&(x=2),v===!0&&(x=3);let R=u.attributes.position.count*x,Y=1;R>e.maxTextureSize&&(Y=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const q=new Float32Array(R*Y*4*_),O=new mc(q,R,Y,_);O.type=qn,O.needsUpdate=!0;const z=x*4;for(let ee=0;ee<_;ee++){const Z=E[ee],k=w[ee],ne=F[ee],X=R*Y*4*ee;for(let pe=0;pe<Z.count;pe++){const J=pe*z;M===!0&&(o.fromBufferAttribute(Z,pe),q[X+J+0]=o.x,q[X+J+1]=o.y,q[X+J+2]=o.z,q[X+J+3]=0),S===!0&&(o.fromBufferAttribute(k,pe),q[X+J+4]=o.x,q[X+J+5]=o.y,q[X+J+6]=o.z,q[X+J+7]=0),v===!0&&(o.fromBufferAttribute(ne,pe),q[X+J+8]=o.x,q[X+J+9]=o.y,q[X+J+10]=o.z,q[X+J+11]=ne.itemSize===4?o.w:1)}}m={count:_,texture:O,size:new He(R,Y)},s.set(u,m),u.addEventListener("dispose",W)}let h=0;for(let M=0;M<d.length;M++)h+=d[M];const b=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const v=_[S];v[0]=S,v[1]=d[S]}_.sort($p);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Jp);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let b=0;for(let S=0;S<8;S++){const v=a[S],E=v[0],w=v[1];E!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+S)!==m[E]&&u.setAttribute("morphTarget"+S,m[E]),h&&u.getAttribute("morphNormal"+S)!==h[E]&&u.setAttribute("morphNormal"+S,h[E]),r[S]=w,b+=w):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),h&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const M=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function em(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Tc=new Ot,wc=new mc,Ac=new Wf,Rc=new Sc,Oo=[],Fo=[],Bo=new Float32Array(16),zo=new Float32Array(9),ko=new Float32Array(4);function qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Oo[r];if(s===void 0&&(s=new Float32Array(r),Oo[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ns(i,e){let t=Fo[e];t===void 0&&(t=new Int32Array(e),Fo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function sm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,n))return;ko.set(n),i.uniformMatrix2fv(this.addr,!1,ko),pt(t,n)}}function am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,n))return;zo.set(n),i.uniformMatrix3fv(this.addr,!1,zo),pt(t,n)}}function om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,n))return;Bo.set(n),i.uniformMatrix4fv(this.addr,!1,Bo),pt(t,n)}}function lm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function gm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Tc,r)}function _m(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ac,r)}function vm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Rc,r)}function xm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wc,r)}function Mm(i){switch(i){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return rm;case 35674:return sm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return um;case 35669:case 35673:return fm;case 5125:return dm;case 36294:return hm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return xm}}function Sm(i,e){i.uniform1fv(this.addr,e)}function ym(i,e){const t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function Em(i,e){const t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function bm(i,e){const t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function Tm(i,e){const t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wm(i,e){const t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Am(i,e){const t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rm(i,e){i.uniform1iv(this.addr,e)}function Cm(i,e){i.uniform2iv(this.addr,e)}function Lm(i,e){i.uniform3iv(this.addr,e)}function Pm(i,e){i.uniform4iv(this.addr,e)}function Dm(i,e){i.uniform1uiv(this.addr,e)}function Um(i,e){i.uniform2uiv(this.addr,e)}function Im(i,e){i.uniform3uiv(this.addr,e)}function Nm(i,e){i.uniform4uiv(this.addr,e)}function Om(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Tc,s[o])}function Fm(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ac,s[o])}function Bm(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rc,s[o])}function zm(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wc,s[o])}function km(i){switch(i){case 5126:return Sm;case 35664:return ym;case 35665:return Em;case 35666:return bm;case 35674:return Tm;case 35675:return wm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Lm;case 35669:case 35673:return Pm;case 5125:return Dm;case 36294:return Um;case 36295:return Im;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}class Gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Mm(t.type)}}class Hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=km(t.type)}}class Vm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Fs=/(\w+)(\])?(\[|\.)?/g;function Go(i,e){i.seq.push(e),i.map[e.id]=e}function Wm(i,e,t){const n=i.name,r=n.length;for(Fs.lastIndex=0;;){const s=Fs.exec(n),o=Fs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Go(t,l===void 0?new Gm(a,i,e):new Hm(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Vm(a),Go(t,f)),t=f}}}class Vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Wm(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ho(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Xm=0;function qm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ym(i){switch(i){case un:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Vo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+qm(i.getShaderSource(e),o)}else return r}function jm(i,e){const t=Ym(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Km(i,e){let t;switch(e){case Ku:t="Linear";break;case Zu:t="Reinhard";break;case Ju:t="OptimizedCineon";break;case $u:t="ACESFilmic";break;case Qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($i).join(`
`)}function Jm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $m(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $i(i){return i!==""}function Wo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(i){return i.replace(Qm,eg)}function eg(i,e){const t=Xe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ea(t)}const tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qo(i){return i.replace(tg,ng)}function ng(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yo(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ig(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Au?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function rg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Bi:e="ENVMAP_TYPE_CUBE";break;case es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function ag(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Yu:e="ENVMAP_BLENDING_MIX";break;case ju:e="ENVMAP_BLENDING_ADD";break}return e}function og(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lg(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ig(t),l=rg(t),u=sg(t),f=ag(t),d=og(t),p=t.isWebGL2?"":Zm(t),g=Jm(s),_=r.createProgram();let m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter($i).join(`
`),m.length>0&&(m+=`
`),h=[p,g].filter($i).join(`
`),h.length>0&&(h+=`
`)):(m=[Yo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),h=[p,Yo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Km("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.encodings_pars_fragment,jm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),o=ea(o),o=Wo(o,t),o=Xo(o,t),a=ea(a),a=Wo(a,t),a=Xo(a,t),o=qo(o),a=qo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=b+m+o,S=b+h+a,v=Ho(r,r.VERTEX_SHADER,M),E=Ho(r,r.FRAGMENT_SHADER,S);if(r.attachShader(_,v),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const x=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(v).trim(),Y=r.getShaderInfoLog(E).trim();let q=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,v,E);else{const z=Vo(r,v,"vertex"),W=Vo(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+z+`
`+W)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(R===""||Y==="")&&(O=!1);O&&(this.diagnostics={runnable:q,programLog:x,vertexShader:{log:R,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(v),r.deleteShader(E);let w;this.getUniforms=function(){return w===void 0&&(w=new Vr(r,_)),w};let F;return this.getAttributes=function(){return F===void 0&&(F=$m(r,_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Xm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=E,this}let cg=0;class ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fg(e),t.set(e,n)),n}}class fg{constructor(e){this.id=cg++,this.code=e,this.usedTimes=0}}function dg(i,e,t,n,r,s,o){const a=new ca,c=new ug,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function m(x,R,Y,q,O){const z=q.fog,W=O.geometry,ee=x.isMeshStandardMaterial?q.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||ee),k=Z&&Z.mapping===es?Z.image.height:null,ne=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const X=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=X!==void 0?X.length:0;let J=0;W.morphAttributes.position!==void 0&&(J=1),W.morphAttributes.normal!==void 0&&(J=2),W.morphAttributes.color!==void 0&&(J=3);let N,G,te,se;if(ne){const tt=Pt[ne];N=tt.vertexShader,G=tt.fragmentShader}else N=x.vertexShader,G=x.fragmentShader,c.update(x),te=c.getVertexShaderID(x),se=c.getFragmentShaderID(x);const P=i.getRenderTarget(),we=O.isInstancedMesh===!0,Re=!!x.map,ce=!!x.matcap,xe=!!Z,Ie=!!x.aoMap,me=!!x.lightMap,Ae=!!x.bumpMap,Ne=!!x.normalMap,Ue=!!x.displacementMap,oe=!!x.emissiveMap,ge=!!x.metalnessMap,Me=!!x.roughnessMap,de=x.clearcoat>0,Be=x.iridescence>0,A=x.sheen>0,y=x.transmission>0,K=de&&!!x.clearcoatMap,ae=de&&!!x.clearcoatNormalMap,ue=de&&!!x.clearcoatRoughnessMap,_e=Be&&!!x.iridescenceMap,D=Be&&!!x.iridescenceThicknessMap,re=A&&!!x.sheenColorMap,j=A&&!!x.sheenRoughnessMap,ve=!!x.specularMap,Ee=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Se=y&&!!x.transmissionMap,Ce=y&&!!x.thicknessMap,ze=!!x.gradientMap,qe=!!x.alphaMap,at=x.alphaTest>0,U=!!x.extensions,$=!!W.attributes.uv1,le=!!W.attributes.uv2,ye=!!W.attributes.uv3;return{isWebGL2:u,shaderID:ne,shaderName:x.type,vertexShader:N,fragmentShader:G,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:we,instancingColor:we&&O.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:P===null?i.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:un,map:Re,matcap:ce,envMap:xe,envMapMode:xe&&Z.mapping,envMapCubeUVHeight:k,aoMap:Ie,lightMap:me,bumpMap:Ae,normalMap:Ne,displacementMap:d&&Ue,emissiveMap:oe,normalMapObjectSpace:Ne&&x.normalMapType===Mf,normalMapTangentSpace:Ne&&x.normalMapType===xf,metalnessMap:ge,roughnessMap:Me,clearcoat:de,clearcoatMap:K,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,iridescence:Be,iridescenceMap:_e,iridescenceThicknessMap:D,sheen:A,sheenColorMap:re,sheenRoughnessMap:j,specularMap:ve,specularColorMap:Ee,specularIntensityMap:Pe,transmission:y,transmissionMap:Se,thicknessMap:Ce,gradientMap:ze,opaque:x.transparent===!1&&x.blending===Ui,alphaMap:qe,alphaTest:at,combine:x.combine,mapUv:Re&&_(x.map.channel),aoMapUv:Ie&&_(x.aoMap.channel),lightMapUv:me&&_(x.lightMap.channel),bumpMapUv:Ae&&_(x.bumpMap.channel),normalMapUv:Ne&&_(x.normalMap.channel),displacementMapUv:Ue&&_(x.displacementMap.channel),emissiveMapUv:oe&&_(x.emissiveMap.channel),metalnessMapUv:ge&&_(x.metalnessMap.channel),roughnessMapUv:Me&&_(x.roughnessMap.channel),clearcoatMapUv:K&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:D&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:re&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:j&&_(x.sheenRoughnessMap.channel),specularMapUv:ve&&_(x.specularMap.channel),specularColorMapUv:Ee&&_(x.specularColorMap.channel),specularIntensityMapUv:Pe&&_(x.specularIntensityMap.channel),transmissionMapUv:Se&&_(x.transmissionMap.channel),thicknessMapUv:Ce&&_(x.thicknessMap.channel),alphaMapUv:qe&&_(x.alphaMap.channel),vertexTangents:Ne&&!!W.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:$,vertexUv2s:le,vertexUv3s:ye,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(Re||qe),fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:J,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:Mn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Zt,flipSided:x.side===Dt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:U&&x.extensions.derivatives===!0,extensionFragDepth:U&&x.extensions.fragDepth===!0,extensionDrawBuffers:U&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Y in x.defines)R.push(Y),R.push(x.defines[Y]);return x.isRawShaderMaterial===!1&&(b(R,x),M(R,x),R.push(i.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function b(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function M(x,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),x.push(a.mask)}function S(x){const R=g[x.type];let Y;if(R){const q=Pt[R];Y=ua.clone(q.uniforms)}else Y=x.uniforms;return Y}function v(x,R){let Y;for(let q=0,O=l.length;q<O;q++){const z=l[q];if(z.cacheKey===R){Y=z,++Y.usedTimes;break}}return Y===void 0&&(Y=new lg(i,R,x,s),l.push(Y)),Y}function E(x){if(--x.usedTimes===0){const R=l.indexOf(x);l[R]=l[l.length-1],l.pop(),x.destroy()}}function w(x){c.remove(x)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:v,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:F}}function hg(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function pg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function jo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ko(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,p,g,_,m){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function a(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||pg),n.length>1&&n.sort(d||jo),r.length>1&&r.sort(d||jo)}function u(){for(let f=e,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function mg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ko,i.set(n,[o])):r>=s.length?(o=new Ko,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function gg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Qe};break;case"SpotLight":t={position:new I,direction:new I,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function _g(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vg=0;function xg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mg(i,e){const t=new gg,n=_g(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new ct,a=new ct;function c(u,f){let d=0,p=0,g=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let _=0,m=0,h=0,b=0,M=0,S=0,v=0,E=0,w=0,F=0;u.sort(xg);const x=f===!0?Math.PI:1;for(let Y=0,q=u.length;Y<q;Y++){const O=u[Y],z=O.color,W=O.intensity,ee=O.distance,Z=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=z.r*W*x,p+=z.g*W*x,g+=z.b*W*x;else if(O.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(O.sh.coefficients[k],W);else if(O.isDirectionalLight){const k=t.get(O);if(k.color.copy(O.color).multiplyScalar(O.intensity*x),O.castShadow){const ne=O.shadow,X=n.get(O);X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,r.directionalShadow[_]=X,r.directionalShadowMap[_]=Z,r.directionalShadowMatrix[_]=O.shadow.matrix,S++}r.directional[_]=k,_++}else if(O.isSpotLight){const k=t.get(O);k.position.setFromMatrixPosition(O.matrixWorld),k.color.copy(z).multiplyScalar(W*x),k.distance=ee,k.coneCos=Math.cos(O.angle),k.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),k.decay=O.decay,r.spot[h]=k;const ne=O.shadow;if(O.map&&(r.spotLightMap[w]=O.map,w++,ne.updateMatrices(O),O.castShadow&&F++),r.spotLightMatrix[h]=ne.matrix,O.castShadow){const X=n.get(O);X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,r.spotShadow[h]=X,r.spotShadowMap[h]=Z,E++}h++}else if(O.isRectAreaLight){const k=t.get(O);k.color.copy(z).multiplyScalar(W),k.halfWidth.set(O.width*.5,0,0),k.halfHeight.set(0,O.height*.5,0),r.rectArea[b]=k,b++}else if(O.isPointLight){const k=t.get(O);if(k.color.copy(O.color).multiplyScalar(O.intensity*x),k.distance=O.distance,k.decay=O.decay,O.castShadow){const ne=O.shadow,X=n.get(O);X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,X.shadowCameraNear=ne.camera.near,X.shadowCameraFar=ne.camera.far,r.pointShadow[m]=X,r.pointShadowMap[m]=Z,r.pointShadowMatrix[m]=O.shadow.matrix,v++}r.point[m]=k,m++}else if(O.isHemisphereLight){const k=t.get(O);k.skyColor.copy(O.color).multiplyScalar(W*x),k.groundColor.copy(O.groundColor).multiplyScalar(W*x),r.hemi[M]=k,M++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==h||R.rectAreaLength!==b||R.hemiLength!==M||R.numDirectionalShadows!==S||R.numPointShadows!==v||R.numSpotShadows!==E||R.numSpotMaps!==w)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=b,r.point.length=m,r.hemi.length=M,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=E+w-F,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=F,R.directionalLength=_,R.pointLength=m,R.spotLength=h,R.rectAreaLength=b,R.hemiLength=M,R.numDirectionalShadows=S,R.numPointShadows=v,R.numSpotShadows=E,R.numSpotMaps=w,r.version=vg++)}function l(u,f){let d=0,p=0,g=0,_=0,m=0;const h=f.matrixWorldInverse;for(let b=0,M=u.length;b<M;b++){const S=u[b];if(S.isDirectionalLight){const v=r.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(h),d++}else if(S.isSpotLight){const v=r.spot[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(h),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(h),g++}else if(S.isRectAreaLight){const v=r.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(h),a.identity(),o.copy(S.matrixWorld),o.premultiply(h),a.extractRotation(o),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const v=r.point[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){const v=r.hemi[m];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(h),m++}}}return{setup:c,setupView:l,state:r}}function Zo(i,e){const t=new Mg(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Sg(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Zo(i,e),t.set(s,[c])):o>=a.length?(c=new Zo(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class yg extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eg extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wg(i,e,t){let n=new yc;const r=new He,s=new He,o=new lt,a=new yg({depthPacking:vf}),c=new Eg,l={},u=t.maxTextureSize,f={[Dn]:Dt,[Dt]:Dn,[Zt]:Zt},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:bg,fragmentShader:Tg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ic;let h=this.type;this.render=function(v,E,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const F=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Ln),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=h!==vn&&this.type===vn,O=h===vn&&this.type!==vn;for(let z=0,W=v.length;z<W;z++){const ee=v[z],Z=ee.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const k=Z.getFrameExtents();if(r.multiply(k),s.copy(Z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,Z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,Z.mapSize.y=s.y)),Z.map===null||q===!0||O===!0){const X=this.type!==vn?{minFilter:Ct,magFilter:Ct}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ni(r.x,r.y,X),Z.map.texture.name=ee.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const ne=Z.getViewportCount();for(let X=0;X<ne;X++){const pe=Z.getViewport(X);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),Y.viewport(o),Z.updateMatrices(ee,X),n=Z.getFrustum(),S(E,w,Z.camera,ee,this.type)}Z.isPointLightShadow!==!0&&this.type===vn&&b(Z,w),Z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(F,x,R)};function b(v,E){const w=e.update(_);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ni(r.x,r.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(E,null,w,d,_,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(E,null,w,p,_,null)}function M(v,E,w,F){let x=null;const R=w.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(R!==void 0)x=R;else if(x=w.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const Y=x.uuid,q=E.uuid;let O=l[Y];O===void 0&&(O={},l[Y]=O);let z=O[q];z===void 0&&(z=x.clone(),O[q]=z),x=z}if(x.visible=E.visible,x.wireframe=E.wireframe,F===vn?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:f[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Y=i.properties.get(x);Y.light=w}return x}function S(v,E,w,F,x){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===vn)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,v.matrixWorld);const q=e.update(v),O=v.material;if(Array.isArray(O)){const z=q.groups;for(let W=0,ee=z.length;W<ee;W++){const Z=z[W],k=O[Z.materialIndex];if(k&&k.visible){const ne=M(v,k,F,x);i.renderBufferDirect(w,null,q,ne,v,Z)}}}else if(O.visible){const z=M(v,O,F,x);i.renderBufferDirect(w,null,q,z,v,null)}}const Y=v.children;for(let q=0,O=Y.length;q<O;q++)S(Y[q],E,w,F,x)}}function Ag(i,e,t){const n=t.isWebGL2;function r(){let U=!1;const $=new lt;let le=null;const ye=new lt(0,0,0,0);return{setMask:function(De){le!==De&&!U&&(i.colorMask(De,De,De,De),le=De)},setLocked:function(De){U=De},setClear:function(De,tt,nt,St,yn){yn===!0&&(De*=St,tt*=St,nt*=St),$.set(De,tt,nt,St),ye.equals($)===!1&&(i.clearColor(De,tt,nt,St),ye.copy($))},reset:function(){U=!1,le=null,ye.set(-1,0,0,0)}}}function s(){let U=!1,$=null,le=null,ye=null;return{setTest:function(De){De?P(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(De){$!==De&&!U&&(i.depthMask(De),$=De)},setFunc:function(De){if(le!==De){switch(De){case ku:i.depthFunc(i.NEVER);break;case Gu:i.depthFunc(i.ALWAYS);break;case Hu:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case Vu:i.depthFunc(i.EQUAL);break;case Wu:i.depthFunc(i.GEQUAL);break;case Xu:i.depthFunc(i.GREATER);break;case qu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=De}},setLocked:function(De){U=De},setClear:function(De){ye!==De&&(i.clearDepth(De),ye=De)},reset:function(){U=!1,$=null,le=null,ye=null}}}function o(){let U=!1,$=null,le=null,ye=null,De=null,tt=null,nt=null,St=null,yn=null;return{setTest:function(ot){U||(ot?P(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(ot){$!==ot&&!U&&(i.stencilMask(ot),$=ot)},setFunc:function(ot,Ft,tn){(le!==ot||ye!==Ft||De!==tn)&&(i.stencilFunc(ot,Ft,tn),le=ot,ye=Ft,De=tn)},setOp:function(ot,Ft,tn){(tt!==ot||nt!==Ft||St!==tn)&&(i.stencilOp(ot,Ft,tn),tt=ot,nt=Ft,St=tn)},setLocked:function(ot){U=ot},setClear:function(ot){yn!==ot&&(i.clearStencil(ot),yn=ot)},reset:function(){U=!1,$=null,le=null,ye=null,De=null,tt=null,nt=null,St=null,yn=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,h=!1,b=null,M=null,S=null,v=null,E=null,w=null,F=null,x=!1,R=null,Y=null,q=null,O=null,z=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Z=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),ee=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ee=Z>=2);let ne=null,X={};const pe=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),N=new lt().fromArray(pe),G=new lt().fromArray(J);function te(U,$,le,ye){const De=new Uint8Array(4),tt=i.createTexture();i.bindTexture(U,tt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<le;nt++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D($,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D($+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return tt}const se={};se[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(se[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),P(i.DEPTH_TEST),c.setFunc(qs),Ue(!1),oe(Na),P(i.CULL_FACE),Ae(Ln);function P(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function we(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Re(U,$){return p[U]!==$?(i.bindFramebuffer(U,$),p[U]=$,n&&(U===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=$),U===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=$)),!0):!1}function ce(U,$){let le=_,ye=!1;if(U)if(le=g.get($),le===void 0&&(le=[],g.set($,le)),U.isWebGLMultipleRenderTargets){const De=U.texture;if(le.length!==De.length||le[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,nt=De.length;tt<nt;tt++)le[tt]=i.COLOR_ATTACHMENT0+tt;le.length=De.length,ye=!0}}else le[0]!==i.COLOR_ATTACHMENT0&&(le[0]=i.COLOR_ATTACHMENT0,ye=!0);else le[0]!==i.BACK&&(le[0]=i.BACK,ye=!0);ye&&(t.isWebGL2?i.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function xe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const Ie={[Ci]:i.FUNC_ADD,[Cu]:i.FUNC_SUBTRACT,[Lu]:i.FUNC_REVERSE_SUBTRACT};if(n)Ie[za]=i.MIN,Ie[ka]=i.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Ie[za]=U.MIN_EXT,Ie[ka]=U.MAX_EXT)}const me={[Pu]:i.ZERO,[Du]:i.ONE,[Uu]:i.SRC_COLOR,[rc]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Nu]:i.DST_ALPHA,[Iu]:i.ONE_MINUS_SRC_COLOR,[sc]:i.ONE_MINUS_SRC_ALPHA,[Bu]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA};function Ae(U,$,le,ye,De,tt,nt,St){if(U===Ln){h===!0&&(we(i.BLEND),h=!1);return}if(h===!1&&(P(i.BLEND),h=!0),U!==Ru){if(U!==b||St!==x){if((M!==Ci||E!==Ci)&&(i.blendEquation(i.FUNC_ADD),M=Ci,E=Ci),St)switch(U){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oa:i.blendFunc(i.ONE,i.ONE);break;case Fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,v=null,w=null,F=null,b=U,x=St}return}De=De||$,tt=tt||le,nt=nt||ye,($!==M||De!==E)&&(i.blendEquationSeparate(Ie[$],Ie[De]),M=$,E=De),(le!==S||ye!==v||tt!==w||nt!==F)&&(i.blendFuncSeparate(me[le],me[ye],me[tt],me[nt]),S=le,v=ye,w=tt,F=nt),b=U,x=!1}function Ne(U,$){U.side===Zt?we(i.CULL_FACE):P(i.CULL_FACE);let le=U.side===Dt;$&&(le=!le),Ue(le),U.blending===Ui&&U.transparent===!1?Ae(Ln):Ae(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),a.setMask(U.colorWrite);const ye=U.stencilWrite;l.setTest(ye),ye&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?P(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(U){R!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),R=U)}function oe(U){U!==Tu?(P(i.CULL_FACE),U!==Y&&(U===Na?i.cullFace(i.BACK):U===wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),Y=U}function ge(U){U!==q&&(ee&&i.lineWidth(U),q=U)}function Me(U,$,le){U?(P(i.POLYGON_OFFSET_FILL),(O!==$||z!==le)&&(i.polygonOffset($,le),O=$,z=le)):we(i.POLYGON_OFFSET_FILL)}function de(U){U?P(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Be(U){U===void 0&&(U=i.TEXTURE0+W-1),ne!==U&&(i.activeTexture(U),ne=U)}function A(U,$,le){le===void 0&&(ne===null?le=i.TEXTURE0+W-1:le=ne);let ye=X[le];ye===void 0&&(ye={type:void 0,texture:void 0},X[le]=ye),(ye.type!==U||ye.texture!==$)&&(ne!==le&&(i.activeTexture(le),ne=le),i.bindTexture(U,$||se[U]),ye.type=U,ye.texture=$)}function y(){const U=X[ne];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(U){N.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),N.copy(U))}function Ce(U){G.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),G.copy(U))}function ze(U,$){let le=f.get($);le===void 0&&(le=new WeakMap,f.set($,le));let ye=le.get(U);ye===void 0&&(ye=i.getUniformBlockIndex($,U.name),le.set(U,ye))}function qe(U,$){const ye=f.get($).get(U);u.get($)!==ye&&(i.uniformBlockBinding($,ye,U.__bindingPointIndex),u.set($,ye))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ne=null,X={},p={},g=new WeakMap,_=[],m=null,h=!1,b=null,M=null,S=null,v=null,E=null,w=null,F=null,x=!1,R=null,Y=null,q=null,O=null,z=null,N.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:P,disable:we,bindFramebuffer:Re,drawBuffers:ce,useProgram:xe,setBlending:Ae,setMaterial:Ne,setFlipSided:Ue,setCullFace:oe,setLineWidth:ge,setPolygonOffset:Me,setScissorTest:de,activeTexture:Be,bindTexture:A,unbindTexture:y,compressedTexImage2D:K,compressedTexImage3D:ae,texImage2D:Ee,texImage3D:Pe,updateUBOMapping:ze,uniformBlockBinding:qe,texStorage2D:j,texStorage3D:ve,texSubImage2D:ue,texSubImage3D:_e,compressedTexSubImage2D:D,compressedTexSubImage3D:re,scissor:Se,viewport:Ce,reset:at}}function Rg(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,y){return h?new OffscreenCanvas(A,y):Kr("canvas")}function M(A,y,K,ae){let ue=1;if((A.width>ae||A.height>ae)&&(ue=ae/Math.max(A.width,A.height)),ue<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const _e=y?fc:Math.floor,D=_e(ue*A.width),re=_e(ue*A.height);_===void 0&&(_=b(D,re));const j=K?b(D,re):_;return j.width=D,j.height=re,j.getContext("2d").drawImage(A,0,0,D,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+D+"x"+re+")."),j}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Qs(A.width)&&Qs(A.height)}function v(A){return a?!1:A.wrapS!==Jt||A.wrapT!==Jt||A.minFilter!==Ct&&A.minFilter!==zt}function E(A,y){return A.generateMipmaps&&y&&A.minFilter!==Ct&&A.minFilter!==zt}function w(A){i.generateMipmap(A)}function F(A,y,K,ae,ue=!1){if(a===!1)return y;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _e=y;return y===i.RED&&(K===i.FLOAT&&(_e=i.R32F),K===i.HALF_FLOAT&&(_e=i.R16F),K===i.UNSIGNED_BYTE&&(_e=i.R8)),y===i.RG&&(K===i.FLOAT&&(_e=i.RG32F),K===i.HALF_FLOAT&&(_e=i.RG16F),K===i.UNSIGNED_BYTE&&(_e=i.RG8)),y===i.RGBA&&(K===i.FLOAT&&(_e=i.RGBA32F),K===i.HALF_FLOAT&&(_e=i.RGBA16F),K===i.UNSIGNED_BYTE&&(_e=ae===Ge&&ue===!1?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)),(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function x(A,y,K){return E(A,K)===!0||A.isFramebufferTexture&&A.minFilter!==Ct&&A.minFilter!==zt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){return A===Ct||A===Ga||A===fs?i.NEAREST:i.LINEAR}function Y(A){const y=A.target;y.removeEventListener("dispose",Y),O(y),y.isVideoTexture&&g.delete(y)}function q(A){const y=A.target;y.removeEventListener("dispose",q),W(y)}function O(A){const y=n.get(A);if(y.__webglInit===void 0)return;const K=A.source,ae=m.get(K);if(ae){const ue=ae[y.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&z(A),Object.keys(ae).length===0&&m.delete(K)}n.remove(A)}function z(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const K=A.source,ae=m.get(K);delete ae[y.__cacheKey],o.memory.textures--}function W(A){const y=A.texture,K=n.get(A),ae=n.get(y);if(ae.__webglTexture!==void 0&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++)i.deleteFramebuffer(K.__webglFramebuffer[ue]),K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[ue]);else{if(i.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ue=0;ue<K.__webglColorRenderbuffer.length;ue++)K.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[ue]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ue=0,_e=y.length;ue<_e;ue++){const D=n.get(y[ue]);D.__webglTexture&&(i.deleteTexture(D.__webglTexture),o.memory.textures--),n.remove(y[ue])}n.remove(y),n.remove(A)}let ee=0;function Z(){ee=0}function k(){const A=ee;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),ee+=1,A}function ne(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){const K=n.get(A);if(A.isVideoTexture&&de(A),A.isRenderTargetTexture===!1&&A.version>0&&K.__version!==A.version){const ae=A.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(K,A,y);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+y)}function pe(A,y){const K=n.get(A);if(A.version>0&&K.__version!==A.version){we(K,A,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+y)}function J(A,y){const K=n.get(A);if(A.version>0&&K.__version!==A.version){we(K,A,y);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+y)}function N(A,y){const K=n.get(A);if(A.version>0&&K.__version!==A.version){Re(K,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+y)}const G={[Ks]:i.REPEAT,[Jt]:i.CLAMP_TO_EDGE,[Zs]:i.MIRRORED_REPEAT},te={[Ct]:i.NEAREST,[Ga]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[ef]:i.LINEAR_MIPMAP_NEAREST,[or]:i.LINEAR_MIPMAP_LINEAR};function se(A,y,K){if(K?(i.texParameteri(A,i.TEXTURE_WRAP_S,G[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,G[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,G[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,te[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,te[y.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==Jt||y.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,R(y.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==Ct&&y.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ct||y.minFilter!==fs&&y.minFilter!==or||y.type===qn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===lr&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(A,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function P(A,y){let K=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",Y));const ae=y.source;let ue=m.get(ae);ue===void 0&&(ue={},m.set(ae,ue));const _e=ne(y);if(_e!==A.__cacheKey){ue[_e]===void 0&&(ue[_e]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ue[_e].usedTimes++;const D=ue[A.__cacheKey];D!==void 0&&(ue[A.__cacheKey].usedTimes--,D.usedTimes===0&&z(y)),A.__cacheKey=_e,A.__webglTexture=ue[_e].texture}return K}function we(A,y,K){let ae=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=i.TEXTURE_3D);const ue=P(A,y),_e=y.source;t.bindTexture(ae,A.__webglTexture,i.TEXTURE0+K);const D=n.get(_e);if(_e.version!==D.__version||ue===!0){t.activeTexture(i.TEXTURE0+K),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const re=v(y)&&S(y.image)===!1;let j=M(y.image,re,!1,u);j=Be(y,j);const ve=S(j)||a,Ee=s.convert(y.format,y.colorSpace);let Pe=s.convert(y.type),Se=F(y.internalFormat,Ee,Pe,y.colorSpace);se(ae,y,ve);let Ce;const ze=y.mipmaps,qe=a&&y.isVideoTexture!==!0,at=D.__version===void 0||ue===!0,U=x(y,j,ve);if(y.isDepthTexture)Se=i.DEPTH_COMPONENT,a?y.type===qn?Se=i.DEPTH_COMPONENT32F:y.type===Xn?Se=i.DEPTH_COMPONENT24:y.type===Ii?Se=i.DEPTH24_STENCIL8:Se=i.DEPTH_COMPONENT16:y.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Yn&&Se===i.DEPTH_COMPONENT&&y.type!==lc&&y.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Xn,Pe=s.convert(y.type)),y.format===zi&&Se===i.DEPTH_COMPONENT&&(Se=i.DEPTH_STENCIL,y.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ii,Pe=s.convert(y.type))),at&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Se,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,Se,j.width,j.height,0,Ee,Pe,null));else if(y.isDataTexture)if(ze.length>0&&ve){qe&&at&&t.texStorage2D(i.TEXTURE_2D,U,Se,ze[0].width,ze[0].height);for(let $=0,le=ze.length;$<le;$++)Ce=ze[$],qe?t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Ee,Pe,Ce.data):t.texImage2D(i.TEXTURE_2D,$,Se,Ce.width,Ce.height,0,Ee,Pe,Ce.data);y.generateMipmaps=!1}else qe?(at&&t.texStorage2D(i.TEXTURE_2D,U,Se,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,Ee,Pe,j.data)):t.texImage2D(i.TEXTURE_2D,0,Se,j.width,j.height,0,Ee,Pe,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qe&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,U,Se,ze[0].width,ze[0].height,j.depth);for(let $=0,le=ze.length;$<le;$++)Ce=ze[$],y.format!==$t?Ee!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ce.width,Ce.height,j.depth,Ee,Ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Se,Ce.width,Ce.height,j.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ce.width,Ce.height,j.depth,Ee,Pe,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Se,Ce.width,Ce.height,j.depth,0,Ee,Pe,Ce.data)}else{qe&&at&&t.texStorage2D(i.TEXTURE_2D,U,Se,ze[0].width,ze[0].height);for(let $=0,le=ze.length;$<le;$++)Ce=ze[$],y.format!==$t?Ee!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Ee,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Se,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Ee,Pe,Ce.data):t.texImage2D(i.TEXTURE_2D,$,Se,Ce.width,Ce.height,0,Ee,Pe,Ce.data)}else if(y.isDataArrayTexture)qe?(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,U,Se,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Ee,Pe,j.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,j.width,j.height,j.depth,0,Ee,Pe,j.data);else if(y.isData3DTexture)qe?(at&&t.texStorage3D(i.TEXTURE_3D,U,Se,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Ee,Pe,j.data)):t.texImage3D(i.TEXTURE_3D,0,Se,j.width,j.height,j.depth,0,Ee,Pe,j.data);else if(y.isFramebufferTexture){if(at)if(qe)t.texStorage2D(i.TEXTURE_2D,U,Se,j.width,j.height);else{let $=j.width,le=j.height;for(let ye=0;ye<U;ye++)t.texImage2D(i.TEXTURE_2D,ye,Se,$,le,0,Ee,Pe,null),$>>=1,le>>=1}}else if(ze.length>0&&ve){qe&&at&&t.texStorage2D(i.TEXTURE_2D,U,Se,ze[0].width,ze[0].height);for(let $=0,le=ze.length;$<le;$++)Ce=ze[$],qe?t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ee,Pe,Ce):t.texImage2D(i.TEXTURE_2D,$,Se,Ee,Pe,Ce);y.generateMipmaps=!1}else qe?(at&&t.texStorage2D(i.TEXTURE_2D,U,Se,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Pe,j)):t.texImage2D(i.TEXTURE_2D,0,Se,Ee,Pe,j);E(y,ve)&&w(ae),D.__version=_e.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Re(A,y,K){if(y.image.length!==6)return;const ae=P(A,y),ue=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+K);const _e=n.get(ue);if(ue.version!==_e.__version||ae===!0){t.activeTexture(i.TEXTURE0+K),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const D=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,j=[];for(let $=0;$<6;$++)!D&&!re?j[$]=M(y.image[$],!1,!0,l):j[$]=re?y.image[$].image:y.image[$],j[$]=Be(y,j[$]);const ve=j[0],Ee=S(ve)||a,Pe=s.convert(y.format,y.colorSpace),Se=s.convert(y.type),Ce=F(y.internalFormat,Pe,Se,y.colorSpace),ze=a&&y.isVideoTexture!==!0,qe=_e.__version===void 0||ae===!0;let at=x(y,ve,Ee);se(i.TEXTURE_CUBE_MAP,y,Ee);let U;if(D){ze&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,at,Ce,ve.width,ve.height);for(let $=0;$<6;$++){U=j[$].mipmaps;for(let le=0;le<U.length;le++){const ye=U[le];y.format!==$t?Pe!==null?ze?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,ye.width,ye.height,Pe,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,Ce,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,ye.width,ye.height,Pe,Se,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,Ce,ye.width,ye.height,0,Pe,Se,ye.data)}}}else{U=y.mipmaps,ze&&qe&&(U.length>0&&at++,t.texStorage2D(i.TEXTURE_CUBE_MAP,at,Ce,j[0].width,j[0].height));for(let $=0;$<6;$++)if(re){ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,j[$].width,j[$].height,Pe,Se,j[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ce,j[$].width,j[$].height,0,Pe,Se,j[$].data);for(let le=0;le<U.length;le++){const De=U[le].image[$].image;ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,De.width,De.height,Pe,Se,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,Ce,De.width,De.height,0,Pe,Se,De.data)}}else{ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pe,Se,j[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ce,Pe,Se,j[$]);for(let le=0;le<U.length;le++){const ye=U[le];ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,Pe,Se,ye.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,Ce,Pe,Se,ye.image[$])}}}E(y,Ee)&&w(i.TEXTURE_CUBE_MAP),_e.__version=ue.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ce(A,y,K,ae,ue){const _e=s.convert(K.format,K.colorSpace),D=s.convert(K.type),re=F(K.internalFormat,_e,D,K.colorSpace);n.get(y).__hasExternalTextures||(ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,re,y.width,y.height,y.depth,0,_e,D,null):t.texImage2D(ue,0,re,y.width,y.height,0,_e,D,null)),t.bindFramebuffer(i.FRAMEBUFFER,A),Me(y)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ue,n.get(K).__webglTexture,0,ge(y)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ue,n.get(K).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(A,y,K){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let ae=i.DEPTH_COMPONENT16;if(K||Me(y)){const ue=y.depthTexture;ue&&ue.isDepthTexture&&(ue.type===qn?ae=i.DEPTH_COMPONENT32F:ue.type===Xn&&(ae=i.DEPTH_COMPONENT24));const _e=ge(y);Me(y)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ae,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ae,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,ae,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const ae=ge(y);K&&Me(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,y.width,y.height):Me(y)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const ae=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ue=0;ue<ae.length;ue++){const _e=ae[ue],D=s.convert(_e.format,_e.colorSpace),re=s.convert(_e.type),j=F(_e.internalFormat,D,re,_e.colorSpace),ve=ge(y);K&&Me(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,j,y.width,y.height):Me(y)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const ae=n.get(y.depthTexture).__webglTexture,ue=ge(y);if(y.depthTexture.format===Yn)Me(y)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(y.depthTexture.format===zi)Me(y)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function me(A){const y=n.get(A),K=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ie(y.__webglFramebuffer,A)}else if(K){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]=i.createRenderbuffer(),xe(y.__webglDepthbuffer[ae],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),xe(y.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(A,y,K){const ae=n.get(A);y!==void 0&&ce(ae.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),K!==void 0&&me(A)}function Ne(A){const y=A.texture,K=n.get(A),ae=n.get(y);A.addEventListener("dispose",q),A.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=y.version,o.memory.textures++);const ue=A.isWebGLCubeRenderTarget===!0,_e=A.isWebGLMultipleRenderTargets===!0,D=S(A)||a;if(ue){K.__webglFramebuffer=[];for(let re=0;re<6;re++)K.__webglFramebuffer[re]=i.createFramebuffer()}else{if(K.__webglFramebuffer=i.createFramebuffer(),_e)if(r.drawBuffers){const re=A.texture;for(let j=0,ve=re.length;j<ve;j++){const Ee=n.get(re[j]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Me(A)===!1){const re=_e?y:[y];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let j=0;j<re.length;j++){const ve=re[j];K.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[j]);const Ee=s.convert(ve.format,ve.colorSpace),Pe=s.convert(ve.type),Se=F(ve.internalFormat,Ee,Pe,ve.colorSpace,A.isXRRenderTarget===!0),Ce=ge(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Se,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,K.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(K.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),se(i.TEXTURE_CUBE_MAP,y,D);for(let re=0;re<6;re++)ce(K.__webglFramebuffer[re],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re);E(y,D)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const re=A.texture;for(let j=0,ve=re.length;j<ve;j++){const Ee=re[j],Pe=n.get(Ee);t.bindTexture(i.TEXTURE_2D,Pe.__webglTexture),se(i.TEXTURE_2D,Ee,D),ce(K.__webglFramebuffer,A,Ee,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D),E(Ee,D)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?re=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,ae.__webglTexture),se(re,y,D),ce(K.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,re),E(y,D)&&w(re),t.unbindTexture()}A.depthBuffer&&me(A)}function Ue(A){const y=S(A)||a,K=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0,ue=K.length;ae<ue;ae++){const _e=K[ae];if(E(_e,y)){const D=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(_e).__webglTexture;t.bindTexture(D,re),w(D),t.unbindTexture()}}}function oe(A){if(a&&A.samples>0&&Me(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],K=A.width,ae=A.height;let ue=i.COLOR_BUFFER_BIT;const _e=[],D=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(A),j=A.isWebGLMultipleRenderTargets===!0;if(j)for(let ve=0;ve<y.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){_e.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&_e.push(D);const Ee=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ee===!1&&(A.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),j&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[ve]),Ee===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[D]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[D])),j){const Pe=n.get(y[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,K,ae,0,0,K,ae,ue,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ve=0;ve<y.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,re.__webglColorRenderbuffer[ve]);const Ee=n.get(y[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function ge(A){return Math.min(f,A.samples)}function Me(A){const y=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function de(A){const y=o.render.frame;g.get(A)!==y&&(g.set(A,y),A.update())}function Be(A,y){const K=A.colorSpace,ae=A.format,ue=A.type;return A.isCompressedTexture===!0||A.format===$s||K!==un&&K!==Kn&&(K===Ge?a===!1?e.has("EXT_sRGB")===!0&&ae===$t?(A.format=$s,A.minFilter=zt,A.generateMipmaps=!1):y=hc.sRGBToLinear(y):(ae!==$t||ue!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),y}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.setTexture2D=X,this.setTexture2DArray=pe,this.setTexture3D=J,this.setTextureCube=N,this.rebindTextures=Ae,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Me}function Cg(i,e,t){const n=t.isWebGL2;function r(s,o=Kn){let a;if(s===ti)return i.UNSIGNED_BYTE;if(s===sf)return i.UNSIGNED_SHORT_4_4_4_4;if(s===af)return i.UNSIGNED_SHORT_5_5_5_1;if(s===tf)return i.BYTE;if(s===nf)return i.SHORT;if(s===lc)return i.UNSIGNED_SHORT;if(s===rf)return i.INT;if(s===Xn)return i.UNSIGNED_INT;if(s===qn)return i.FLOAT;if(s===lr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===of)return i.ALPHA;if(s===$t)return i.RGBA;if(s===lf)return i.LUMINANCE;if(s===cf)return i.LUMINANCE_ALPHA;if(s===Yn)return i.DEPTH_COMPONENT;if(s===zi)return i.DEPTH_STENCIL;if(s===$s)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===uf)return i.RED;if(s===ff)return i.RED_INTEGER;if(s===df)return i.RG;if(s===hf)return i.RG_INTEGER;if(s===pf)return i.RGBA_INTEGER;if(s===ds||s===hs||s===ps||s===ms)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ds)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ds)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ps)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ms)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ha||s===Va||s===Wa||s===Xa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ha)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Va)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qa||s===Ya)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===qa)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ya)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ja||s===Ka||s===Za||s===Ja||s===$a||s===Qa||s===eo||s===to||s===no||s===io||s===ro||s===so||s===ao||s===oo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ja)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ka)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Za)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ja)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$a)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eo)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===to)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===no)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===io)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ro)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===so)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ao)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oo)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gs)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===gf||s===lo||s===co||s===uo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===co)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ii?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Lg extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qi extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pg={type:"move"};class Bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Dg extends Ot{constructor(e,t,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:Yn,u!==Yn&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Yn&&(n=Xn),n===void 0&&u===zi&&(n=Ii),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=c!==void 0?c:Ct,this.flipY=!1,this.generateMipmaps=!1}}class Ug extends si{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,h=null;const b=[],M=[],S=new Set,v=new Map,E=new Kt;E.layers.enable(1),E.viewport=new lt;const w=new Kt;w.layers.enable(2),w.viewport=new lt;const F=[E,w],x=new Lg;x.layers.enable(1),x.layers.enable(2);let R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=b[N];return G===void 0&&(G=new Bs,b[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=b[N];return G===void 0&&(G=new Bs,b[N]=G),G.getGripSpace()},this.getHand=function(N){let G=b[N];return G===void 0&&(G=new Bs,b[N]=G),G.getHandSpace()};function q(N){const G=M.indexOf(N.inputSource);if(G===-1)return;const te=b[G];te!==void 0&&(te.update(N.inputSource,N.frame,l||o),te.dispatchEvent({type:N.type,data:N.inputSource}))}function O(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",z);for(let N=0;N<b.length;N++){const G=M[N];G!==null&&(M[N]=null,b[N].disconnect(G))}R=null,Y=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",O),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:p}),h=new ni(p.framebufferWidth,p.framebufferHeight,{format:$t,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let G=null,te=null,se=null;_.depth&&(se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=_.stencil?zi:Yn,te=_.stencil?Ii:Xn);const P={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(P),r.updateRenderState({layers:[d]}),h=new ni(d.textureWidth,d.textureHeight,{format:$t,type:ti,depthTexture:new Dg(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const we=e.properties.get(h);we.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(N){for(let G=0;G<N.removed.length;G++){const te=N.removed[G],se=M.indexOf(te);se>=0&&(M[se]=null,b[se].disconnect(te))}for(let G=0;G<N.added.length;G++){const te=N.added[G];let se=M.indexOf(te);if(se===-1){for(let we=0;we<b.length;we++)if(we>=M.length){M.push(te),se=we;break}else if(M[we]===null){M[we]=te,se=we;break}if(se===-1)break}const P=b[se];P&&P.connect(te)}}const W=new I,ee=new I;function Z(N,G,te){W.setFromMatrixPosition(G.matrixWorld),ee.setFromMatrixPosition(te.matrixWorld);const se=W.distanceTo(ee),P=G.projectionMatrix.elements,we=te.projectionMatrix.elements,Re=P[14]/(P[10]-1),ce=P[14]/(P[10]+1),xe=(P[9]+1)/P[5],Ie=(P[9]-1)/P[5],me=(P[8]-1)/P[0],Ae=(we[8]+1)/we[0],Ne=Re*me,Ue=Re*Ae,oe=se/(-me+Ae),ge=oe*-me;G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(ge),N.translateZ(oe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Me=Re+oe,de=ce+oe,Be=Ne-ge,A=Ue+(se-ge),y=xe*ce/de*Me,K=Ie*ce/de*Me;N.projectionMatrix.makePerspective(Be,A,y,K,Me,de),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function k(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;x.near=w.near=E.near=N.near,x.far=w.far=E.far=N.far,(R!==x.near||Y!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,Y=x.far);const G=N.parent,te=x.cameras;k(x,G);for(let se=0;se<te.length;se++)k(te[se],G);te.length===2?Z(x,E,w):x.projectionMatrix.copy(E.projectionMatrix),ne(N,x,G)};function ne(N,G,te){te===null?N.matrix.copy(G.matrixWorld):(N.matrix.copy(te.matrixWorld),N.matrix.invert(),N.matrix.multiply(G.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0);const se=N.children;for(let P=0,we=se.length;P<we;P++)se[P].updateMatrixWorld(!0);N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=cr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(N){c=N,d!==null&&(d.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.getPlanes=function(){return S};let X=null;function pe(N,G){if(u=G.getViewerPose(l||o),g=G,u!==null){const te=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let se=!1;te.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let P=0;P<te.length;P++){const we=te[P];let Re=null;if(p!==null)Re=p.getViewport(we);else{const xe=f.getViewSubImage(d,we);Re=xe.viewport,P===0&&(e.setRenderTargetTextures(h,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(h))}let ce=F[P];ce===void 0&&(ce=new Kt,ce.layers.enable(P),ce.viewport=new lt,F[P]=ce),ce.matrix.fromArray(we.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(we.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Re.x,Re.y,Re.width,Re.height),P===0&&(x.matrix.copy(ce.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(ce)}}for(let te=0;te<b.length;te++){const se=M[te],P=b[te];se!==null&&P!==void 0&&P.update(se,G,l||o)}if(X&&X(N,G),G.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:G.detectedPlanes});let te=null;for(const se of S)G.detectedPlanes.has(se)||(te===null&&(te=[]),te.push(se));if(te!==null)for(const se of te)S.delete(se),v.delete(se),n.dispatchEvent({type:"planeremoved",data:se});for(const se of G.detectedPlanes)if(!S.has(se))S.add(se),v.set(se,G.lastChangedTime),n.dispatchEvent({type:"planeadded",data:se});else{const P=v.get(se);se.lastChangedTime>P&&(v.set(se,se.lastChangedTime),n.dispatchEvent({type:"planechanged",data:se}))}}g=null}const J=new Ec;J.setAnimationLoop(pe),this.setAnimationLoop=function(N){X=N},this.dispose=function(){}}}function Ig(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,xc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,b,M,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,b,M):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Dt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Dt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const b=e.get(h).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const M=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*M,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,b,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=M*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Dt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ng(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,M){const S=M.program;n.uniformBlockBinding(b,S)}function l(b,M){let S=r[b.id];S===void 0&&(g(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",m));const v=M.program;n.updateUBOMapping(b,v);const E=e.render.frame;s[b.id]!==E&&(d(b),s[b.id]=E)}function u(b){const M=f();b.__bindingPointIndex=M;const S=i.createBuffer(),v=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,v,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=r[b.id],S=b.uniforms,v=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,w=S.length;E<w;E++){const F=S[E];if(p(F,E,v)===!0){const x=F.__offset,R=Array.isArray(F.value)?F.value:[F.value];let Y=0;for(let q=0;q<R.length;q++){const O=R[q],z=_(O);typeof O=="number"?(F.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,x+Y,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=O.elements[0],F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=O.elements[0],F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=O.elements[0]):(O.toArray(F.__data,Y),Y+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,F.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,M,S){const v=b.value;if(S[M]===void 0){if(typeof v=="number")S[M]=v;else{const E=Array.isArray(v)?v:[v],w=[];for(let F=0;F<E.length;F++)w.push(E[F].clone());S[M]=w}return!0}else if(typeof v=="number"){if(S[M]!==v)return S[M]=v,!0}else{const E=Array.isArray(S[M])?S[M]:[S[M]],w=Array.isArray(v)?v:[v];for(let F=0;F<E.length;F++){const x=E[F];if(x.equals(w[F])===!1)return x.copy(w[F]),!0}}return!1}function g(b){const M=b.uniforms;let S=0;const v=16;let E=0;for(let w=0,F=M.length;w<F;w++){const x=M[w],R={boundary:0,storage:0},Y=Array.isArray(x.value)?x.value:[x.value];for(let q=0,O=Y.length;q<O;q++){const z=Y[q],W=_(z);R.boundary+=W.boundary,R.storage+=W.storage}if(x.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,w>0){E=S%v;const q=v-E;E!==0&&q-R.boundary<0&&(S+=v-E,x.__offset=S)}S+=R.storage}return E=S%v,E>0&&(S+=v-E),b.__size=S,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}function Og(){const i=Kr("canvas");return i.style.display="block",i}class Cc{constructor(e={}){const{canvas:t=Og(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ge,this.useLegacyLights=!0,this.toneMapping=Mn,this.toneMappingExposure=1;const h=this;let b=!1,M=0,S=0,v=null,E=-1,w=null;const F=new lt,x=new lt;let R=null,Y=t.width,q=t.height,O=1,z=null,W=null;const ee=new lt(0,0,Y,q),Z=new lt(0,0,Y,q);let k=!1;const ne=new yc;let X=!1,pe=!1,J=null;const N=new ct,G=new I,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?O:1}let P=n;function we(T,H){for(let Q=0;Q<T.length;Q++){const B=T[Q],ie=t.getContext(B,H);if(ie!==null)return ie}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${aa}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",qe,!1),P===null){const H=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&H.shift(),P=we(H,T),P===null)throw we(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Re,ce,xe,Ie,me,Ae,Ne,Ue,oe,ge,Me,de,Be,A,y,K,ae,ue,_e,D,re,j,ve,Ee;function Pe(){Re=new Yp(P),ce=new Gp(P,Re,e),Re.init(ce),j=new Cg(P,Re,ce),xe=new Ag(P,Re,ce),Ie=new Zp(P),me=new hg,Ae=new Rg(P,Re,xe,me,ce,j,Ie),Ne=new Vp(h),Ue=new qp(h),oe=new ld(P,ce),ve=new zp(P,Re,oe,ce),ge=new jp(P,oe,Ie,ve),Me=new em(P,ge,oe,Ie),_e=new Qp(P,ce,Ae),K=new Hp(me),de=new dg(h,Ne,Ue,Re,ce,ve,K),Be=new Ig(h,me),A=new mg,y=new Sg(Re,ce),ue=new Bp(h,Ne,Ue,xe,Me,d,c),ae=new wg(h,Me,ce),Ee=new Ng(P,Ie,ce,xe),D=new kp(P,Re,Ie,ce),re=new Kp(P,Re,Ie,ce),Ie.programs=de.programs,h.capabilities=ce,h.extensions=Re,h.properties=me,h.renderLists=A,h.shadowMap=ae,h.state=xe,h.info=Ie}Pe();const Se=new Ug(h,P);this.xr=Se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=Re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(Y,q,!1))},this.getSize=function(T){return T.set(Y,q)},this.setSize=function(T,H,Q=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,q=H,t.width=Math.floor(T*O),t.height=Math.floor(H*O),Q===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(Y*O,q*O).floor()},this.setDrawingBufferSize=function(T,H,Q){Y=T,q=H,O=Q,t.width=Math.floor(T*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(ee)},this.setViewport=function(T,H,Q,B){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,H,Q,B),xe.viewport(F.copy(ee).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,H,Q,B){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,H,Q,B),xe.scissor(x.copy(Z).multiplyScalar(O).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(T){xe.setScissorTest(k=T)},this.setOpaqueSort=function(T){z=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(T=!0,H=!0,Q=!0){let B=0;T&&(B|=P.COLOR_BUFFER_BIT),H&&(B|=P.DEPTH_BUFFER_BIT),Q&&(B|=P.STENCIL_BUFFER_BIT),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),A.dispose(),y.dispose(),me.dispose(),Ne.dispose(),Ue.dispose(),Me.dispose(),ve.dispose(),Ee.dispose(),de.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",De),Se.removeEventListener("sessionend",tt),J&&(J.dispose(),J=null),nt.stop()};function Ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=Ie.autoReset,H=ae.enabled,Q=ae.autoUpdate,B=ae.needsUpdate,ie=ae.type;Pe(),Ie.autoReset=T,ae.enabled=H,ae.autoUpdate=Q,ae.needsUpdate=B,ae.type=ie}function qe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function at(T){const H=T.target;H.removeEventListener("dispose",at),U(H)}function U(T){$(T),me.remove(T)}function $(T){const H=me.get(T).programs;H!==void 0&&(H.forEach(function(Q){de.releaseProgram(Q)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Q,B,ie,Oe){H===null&&(H=te);const Fe=ie.isMesh&&ie.matrixWorld.determinant()<0,ke=Vc(T,H,Q,B,ie);xe.setMaterial(B,Fe);let We=Q.index,Ye=1;B.wireframe===!0&&(We=ge.getWireframeAttribute(Q),Ye=2);const je=Q.drawRange,Ke=Q.attributes.position;let et=je.start*Ye,Tt=(je.start+je.count)*Ye;Oe!==null&&(et=Math.max(et,Oe.start*Ye),Tt=Math.min(Tt,(Oe.start+Oe.count)*Ye)),We!==null?(et=Math.max(et,0),Tt=Math.min(Tt,We.count)):Ke!=null&&(et=Math.max(et,0),Tt=Math.min(Tt,Ke.count));const Vt=Tt-et;if(Vt<0||Vt===1/0)return;ve.setup(ie,B,ke,Q,We);let Nn,ut=D;if(We!==null&&(Nn=oe.get(We),ut=re,ut.setIndex(Nn)),ie.isMesh)B.wireframe===!0?(xe.setLineWidth(B.wireframeLinewidth*se()),ut.setMode(P.LINES)):ut.setMode(P.TRIANGLES);else if(ie.isLine){let Je=B.linewidth;Je===void 0&&(Je=1),xe.setLineWidth(Je*se()),ie.isLineSegments?ut.setMode(P.LINES):ie.isLineLoop?ut.setMode(P.LINE_LOOP):ut.setMode(P.LINE_STRIP)}else ie.isPoints?ut.setMode(P.POINTS):ie.isSprite&&ut.setMode(P.TRIANGLES);if(ie.isInstancedMesh)ut.renderInstances(et,Vt,ie.count);else if(Q.isInstancedBufferGeometry){const Je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ss=Math.min(Q.instanceCount,Je);ut.renderInstances(et,Vt,ss)}else ut.render(et,Vt)},this.compile=function(T,H){function Q(B,ie,Oe){B.transparent===!0&&B.side===Zt&&B.forceSinglePass===!1?(B.side=Dt,B.needsUpdate=!0,pr(B,ie,Oe),B.side=Dn,B.needsUpdate=!0,pr(B,ie,Oe),B.side=Zt):pr(B,ie,Oe)}g=y.get(T),g.init(),m.push(g),T.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights(h.useLegacyLights),T.traverse(function(B){const ie=B.material;if(ie)if(Array.isArray(ie))for(let Oe=0;Oe<ie.length;Oe++){const Fe=ie[Oe];Q(Fe,T,B)}else Q(ie,T,B)}),m.pop(),g=null};let le=null;function ye(T){le&&le(T)}function De(){nt.stop()}function tt(){nt.start()}const nt=new Ec;nt.setAnimationLoop(ye),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(T){le=T,Se.setAnimationLoop(T),T===null?nt.stop():nt.start()},Se.addEventListener("sessionstart",De),Se.addEventListener("sessionend",tt),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(H),H=Se.getCamera()),T.isScene===!0&&T.onBeforeRender(h,T,H,v),g=y.get(T,m.length),g.init(),m.push(g),N.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ne.setFromProjectionMatrix(N),pe=this.localClippingEnabled,X=K.init(this.clippingPlanes,pe),p=A.get(T,_.length),p.init(),_.push(p),St(T,H,0,h.sortObjects),p.finish(),h.sortObjects===!0&&p.sort(z,W),X===!0&&K.beginShadows();const Q=g.state.shadowsArray;if(ae.render(Q,T,H),X===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(p,T),g.setupLights(h.useLegacyLights),H.isArrayCamera){const B=H.cameras;for(let ie=0,Oe=B.length;ie<Oe;ie++){const Fe=B[ie];yn(p,T,Fe,Fe.viewport)}}else yn(p,T,H);v!==null&&(Ae.updateMultisampleRenderTarget(v),Ae.updateRenderTargetMipmap(v)),T.isScene===!0&&T.onAfterRender(h,T,H),ve.resetDefaultState(),E=-1,w=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function St(T,H,Q,B){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){B&&G.setFromMatrixPosition(T.matrixWorld).applyMatrix4(N);const Fe=Me.update(T),ke=T.material;ke.visible&&p.push(T,Fe,ke,Q,G.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ne.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==Ie.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ie.render.frame);const Fe=Me.update(T),ke=T.material;if(B&&(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),G.copy(Fe.boundingSphere.center).applyMatrix4(T.matrixWorld).applyMatrix4(N)),Array.isArray(ke)){const We=Fe.groups;for(let Ye=0,je=We.length;Ye<je;Ye++){const Ke=We[Ye],et=ke[Ke.materialIndex];et&&et.visible&&p.push(T,Fe,et,Q,G.z,Ke)}}else ke.visible&&p.push(T,Fe,ke,Q,G.z,null)}}const Oe=T.children;for(let Fe=0,ke=Oe.length;Fe<ke;Fe++)St(Oe[Fe],H,Q,B)}function yn(T,H,Q,B){const ie=T.opaque,Oe=T.transmissive,Fe=T.transparent;g.setupLightsView(Q),X===!0&&K.setGlobalState(h.clippingPlanes,Q),Oe.length>0&&ot(ie,Oe,H,Q),B&&xe.viewport(F.copy(B)),ie.length>0&&Ft(ie,H,Q),Oe.length>0&&Ft(Oe,H,Q),Fe.length>0&&Ft(Fe,H,Q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ot(T,H,Q,B){if(J===null){const ke=ce.isWebGL2;J=new ni(1024,1024,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?lr:ti,minFilter:or,samples:ke&&a===!0?4:0})}const ie=h.getRenderTarget();h.setRenderTarget(J),h.clear();const Oe=h.toneMapping;h.toneMapping=Mn,Ft(T,Q,B),Ae.updateMultisampleRenderTarget(J),Ae.updateRenderTargetMipmap(J);let Fe=!1;for(let ke=0,We=H.length;ke<We;ke++){const Ye=H[ke],je=Ye.object,Ke=Ye.geometry,et=Ye.material,Tt=Ye.group;if(et.side===Zt&&je.layers.test(B.layers)){const Vt=et.side;et.side=Dt,et.needsUpdate=!0,tn(je,Q,B,Ke,et,Tt),et.side=Vt,et.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ae.updateMultisampleRenderTarget(J),Ae.updateRenderTargetMipmap(J)),h.setRenderTarget(ie),h.toneMapping=Oe}function Ft(T,H,Q){const B=H.isScene===!0?H.overrideMaterial:null;for(let ie=0,Oe=T.length;ie<Oe;ie++){const Fe=T[ie],ke=Fe.object,We=Fe.geometry,Ye=B===null?Fe.material:B,je=Fe.group;ke.layers.test(Q.layers)&&tn(ke,H,Q,We,Ye,je)}}function tn(T,H,Q,B,ie,Oe){T.onBeforeRender(h,H,Q,B,ie,Oe),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ie.onBeforeRender(h,H,Q,B,T,Oe),ie.transparent===!0&&ie.side===Zt&&ie.forceSinglePass===!1?(ie.side=Dt,ie.needsUpdate=!0,h.renderBufferDirect(Q,H,B,ie,T,Oe),ie.side=Dn,ie.needsUpdate=!0,h.renderBufferDirect(Q,H,B,ie,T,Oe),ie.side=Zt):h.renderBufferDirect(Q,H,B,ie,T,Oe),T.onAfterRender(h,H,Q,B,ie,Oe)}function pr(T,H,Q){H.isScene!==!0&&(H=te);const B=me.get(T),ie=g.state.lights,Oe=g.state.shadowsArray,Fe=ie.state.version,ke=de.getParameters(T,ie.state,Oe,H,Q),We=de.getProgramCacheKey(ke);let Ye=B.programs;B.environment=T.isMeshStandardMaterial?H.environment:null,B.fog=H.fog,B.envMap=(T.isMeshStandardMaterial?Ue:Ne).get(T.envMap||B.environment),Ye===void 0&&(T.addEventListener("dispose",at),Ye=new Map,B.programs=Ye);let je=Ye.get(We);if(je!==void 0){if(B.currentProgram===je&&B.lightsStateVersion===Fe)return ma(T,ke),je}else ke.uniforms=de.getUniforms(T),T.onBuild(Q,ke,h),T.onBeforeCompile(ke,h),je=de.acquireProgram(ke,We),Ye.set(We,je),B.uniforms=ke.uniforms;const Ke=B.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=K.uniform),ma(T,ke),B.needsLights=Xc(T),B.lightsStateVersion=Fe,B.needsLights&&(Ke.ambientLightColor.value=ie.state.ambient,Ke.lightProbe.value=ie.state.probe,Ke.directionalLights.value=ie.state.directional,Ke.directionalLightShadows.value=ie.state.directionalShadow,Ke.spotLights.value=ie.state.spot,Ke.spotLightShadows.value=ie.state.spotShadow,Ke.rectAreaLights.value=ie.state.rectArea,Ke.ltc_1.value=ie.state.rectAreaLTC1,Ke.ltc_2.value=ie.state.rectAreaLTC2,Ke.pointLights.value=ie.state.point,Ke.pointLightShadows.value=ie.state.pointShadow,Ke.hemisphereLights.value=ie.state.hemi,Ke.directionalShadowMap.value=ie.state.directionalShadowMap,Ke.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ke.spotShadowMap.value=ie.state.spotShadowMap,Ke.spotLightMatrix.value=ie.state.spotLightMatrix,Ke.spotLightMap.value=ie.state.spotLightMap,Ke.pointShadowMap.value=ie.state.pointShadowMap,Ke.pointShadowMatrix.value=ie.state.pointShadowMatrix);const et=je.getUniforms(),Tt=Vr.seqWithValue(et.seq,Ke);return B.currentProgram=je,B.uniformsList=Tt,je}function ma(T,H){const Q=me.get(T);Q.outputColorSpace=H.outputColorSpace,Q.instancing=H.instancing,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function Vc(T,H,Q,B,ie){H.isScene!==!0&&(H=te),Ae.resetTextureUnits();const Oe=H.fog,Fe=B.isMeshStandardMaterial?H.environment:null,ke=v===null?h.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:un,We=(B.isMeshStandardMaterial?Ue:Ne).get(B.envMap||Fe),Ye=B.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,je=!!B.normalMap&&!!Q.attributes.tangent,Ke=!!Q.morphAttributes.position,et=!!Q.morphAttributes.normal,Tt=!!Q.morphAttributes.color,Vt=B.toneMapped?h.toneMapping:Mn,Nn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ut=Nn!==void 0?Nn.length:0,Je=me.get(B),ss=g.state.lights;if(X===!0&&(pe===!0||T!==w)){const Ut=T===w&&B.id===E;K.setState(B,T,Ut)}let mt=!1;B.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==ss.state.version||Je.outputColorSpace!==ke||ie.isInstancedMesh&&Je.instancing===!1||!ie.isInstancedMesh&&Je.instancing===!0||ie.isSkinnedMesh&&Je.skinning===!1||!ie.isSkinnedMesh&&Je.skinning===!0||Je.envMap!==We||B.fog===!0&&Je.fog!==Oe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==K.numPlanes||Je.numIntersection!==K.numIntersection)||Je.vertexAlphas!==Ye||Je.vertexTangents!==je||Je.morphTargets!==Ke||Je.morphNormals!==et||Je.morphColors!==Tt||Je.toneMapping!==Vt||ce.isWebGL2===!0&&Je.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,Je.__version=B.version);let On=Je.currentProgram;mt===!0&&(On=pr(B,H,ie));let ga=!1,Yi=!1,as=!1;const wt=On.getUniforms(),Fn=Je.uniforms;if(xe.useProgram(On.program)&&(ga=!0,Yi=!0,as=!0),B.id!==E&&(E=B.id,Yi=!0),ga||w!==T){if(wt.setValue(P,"projectionMatrix",T.projectionMatrix),ce.logarithmicDepthBuffer&&wt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),w!==T&&(w=T,Yi=!0,as=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Ut=wt.map.cameraPosition;Ut!==void 0&&Ut.setValue(P,G.setFromMatrixPosition(T.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&wt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||ie.isSkinnedMesh)&&wt.setValue(P,"viewMatrix",T.matrixWorldInverse)}if(ie.isSkinnedMesh){wt.setOptional(P,ie,"bindMatrix"),wt.setOptional(P,ie,"bindMatrixInverse");const Ut=ie.skeleton;Ut&&(ce.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),wt.setValue(P,"boneTexture",Ut.boneTexture,Ae),wt.setValue(P,"boneTextureSize",Ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const os=Q.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0&&ce.isWebGL2===!0)&&_e.update(ie,Q,On),(Yi||Je.receiveShadow!==ie.receiveShadow)&&(Je.receiveShadow=ie.receiveShadow,wt.setValue(P,"receiveShadow",ie.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Fn.envMap.value=We,Fn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Yi&&(wt.setValue(P,"toneMappingExposure",h.toneMappingExposure),Je.needsLights&&Wc(Fn,as),Oe&&B.fog===!0&&Be.refreshFogUniforms(Fn,Oe),Be.refreshMaterialUniforms(Fn,B,O,q,J),Vr.upload(P,Je.uniformsList,Fn,Ae)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Vr.upload(P,Je.uniformsList,Fn,Ae),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&wt.setValue(P,"center",ie.center),wt.setValue(P,"modelViewMatrix",ie.modelViewMatrix),wt.setValue(P,"normalMatrix",ie.normalMatrix),wt.setValue(P,"modelMatrix",ie.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ut=B.uniformsGroups;for(let ls=0,qc=Ut.length;ls<qc;ls++)if(ce.isWebGL2){const _a=Ut[ls];Ee.update(_a,On),Ee.bind(_a,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function Wc(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Xc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(T,H,Q){me.get(T.texture).__webglTexture=H,me.get(T.depthTexture).__webglTexture=Q;const B=me.get(T);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=Q===void 0,B.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const Q=me.get(T);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Q=0){v=T,M=H,S=Q;let B=!0,ie=null,Oe=!1,Fe=!1;if(T){const We=me.get(T);We.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(P.FRAMEBUFFER,null),B=!1):We.__webglFramebuffer===void 0?Ae.setupRenderTarget(T):We.__hasExternalTextures&&Ae.rebindTextures(T,me.get(T.texture).__webglTexture,me.get(T.depthTexture).__webglTexture);const Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Fe=!0);const je=me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ie=je[H],Oe=!0):ce.isWebGL2&&T.samples>0&&Ae.useMultisampledRTT(T)===!1?ie=me.get(T).__webglMultisampledFramebuffer:ie=je,F.copy(T.viewport),x.copy(T.scissor),R=T.scissorTest}else F.copy(ee).multiplyScalar(O).floor(),x.copy(Z).multiplyScalar(O).floor(),R=k;if(xe.bindFramebuffer(P.FRAMEBUFFER,ie)&&ce.drawBuffers&&B&&xe.drawBuffers(T,ie),xe.viewport(F),xe.scissor(x),xe.setScissorTest(R),Oe){const We=me.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,We.__webglTexture,Q)}else if(Fe){const We=me.get(T.texture),Ye=H||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,We.__webglTexture,Q||0,Ye)}E=-1},this.readRenderTargetPixels=function(T,H,Q,B,ie,Oe,Fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke){xe.bindFramebuffer(P.FRAMEBUFFER,ke);try{const We=T.texture,Ye=We.format,je=We.type;if(Ye!==$t&&j.convert(Ye)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=je===lr&&(Re.has("EXT_color_buffer_half_float")||ce.isWebGL2&&Re.has("EXT_color_buffer_float"));if(je!==ti&&j.convert(je)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===qn&&(ce.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-B&&Q>=0&&Q<=T.height-ie&&P.readPixels(H,Q,B,ie,j.convert(Ye),j.convert(je),Oe)}finally{const We=v!==null?me.get(v).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(T,H,Q=0){const B=Math.pow(2,-Q),ie=Math.floor(H.image.width*B),Oe=Math.floor(H.image.height*B);Ae.setTexture2D(H,0),P.copyTexSubImage2D(P.TEXTURE_2D,Q,0,0,T.x,T.y,ie,Oe),xe.unbindTexture()},this.copyTextureToTexture=function(T,H,Q,B=0){const ie=H.image.width,Oe=H.image.height,Fe=j.convert(Q.format),ke=j.convert(Q.type);Ae.setTexture2D(Q,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Q.unpackAlignment),H.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,T.x,T.y,ie,Oe,Fe,ke,H.image.data):H.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Fe,H.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,B,T.x,T.y,Fe,ke,H.image),B===0&&Q.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Q,B,ie=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=T.max.x-T.min.x+1,Fe=T.max.y-T.min.y+1,ke=T.max.z-T.min.z+1,We=j.convert(B.format),Ye=j.convert(B.type);let je;if(B.isData3DTexture)Ae.setTexture3D(B,0),je=P.TEXTURE_3D;else if(B.isDataArrayTexture)Ae.setTexture2DArray(B,0),je=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const Ke=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Tt=P.getParameter(P.UNPACK_SKIP_PIXELS),Vt=P.getParameter(P.UNPACK_SKIP_ROWS),Nn=P.getParameter(P.UNPACK_SKIP_IMAGES),ut=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,T.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,T.min.z),Q.isDataTexture||Q.isData3DTexture?P.texSubImage3D(je,ie,H.x,H.y,H.z,Oe,Fe,ke,We,Ye,ut.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(je,ie,H.x,H.y,H.z,Oe,Fe,ke,We,ut.data)):P.texSubImage3D(je,ie,H.x,H.y,H.z,Oe,Fe,ke,We,Ye,ut),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ke),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Tt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Nn),ie===0&&B.generateMipmaps&&P.generateMipmap(je),xe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ae.setTextureCube(T,0):T.isData3DTexture?Ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ae.setTexture2DArray(T,0):Ae.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){M=0,S=0,v=null,xe.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ge?jn:cc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===jn?Ge:un}}class Fg extends Cc{}Fg.prototype.isWebGL1Renderer=!0;class Bg extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class zg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Js,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new I;class Rn{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lc extends dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jo=new ct,ta=new la,Nr=new Xi,Or=new I;class kg extends Lt{constructor(e=new Ht,t=new Lc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Nr.radius+=s,e.ray.intersectsSphere(Nr)===!1)return;Jo.copy(r).invert(),ta.copy(e.ray).applyMatrix4(Jo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Or.fromBufferAttribute(f,m),$o(Or,m,c,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Or.fromBufferAttribute(f,g),$o(Or,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $o(i,e,t,n,r,s,o){const a=ta.distanceSqToPoint(i);if(a<t){const c=new I;ta.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Zr extends Ht{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new I,u=new He;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const p=n+f/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jr extends Ht{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let f=e;const d=(t-e)/r,p=new I,g=new He;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const h=s+m/n*o;p.x=f*Math.cos(h),p.y=f*Math.sin(h),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}f+=d}for(let _=0;_<r;_++){const m=_*(n+1);for(let h=0;h<n;h++){const b=h+m,M=b,S=b+n+1,v=b+n+2,E=b+1;a.push(M,S,E),a.push(S,v,E)}}this.setIndex(a),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Gg extends Ht{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new I,s=new I;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const f=c[l],d=f.start,p=f.count;for(let g=d,_=d+p;g<_;g+=3)for(let m=0;m<3;m++){const h=a.getX(g+m),b=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,b),Qo(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,f=3*a+(l+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,f),Qo(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new bt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Qo(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class Hg extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Vg extends Hg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wg extends Ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class na extends zg{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Xg{constructor(e,t,n=0,r=1/0){this.ray=new la(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ia(e,this,n,t),n.sort(el),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ia(e[r],this,n,t);return n.sort(el),n}}function el(i,e){return i.distance-e.distance}function ia(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)ia(r[s],e,t,!0)}}class tl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const nl=new I,Fr=new I;class qg{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){nl.subVectors(e,this.start),Fr.subVectors(this.end,this.start);const n=Fr.dot(Fr);let s=Fr.dot(nl)/n;return t&&(s=Mt(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);function il(i,e,t){const n=i.slice();return n[8]=e[t],n}function rl(i){let e,t,n,r,s=i[0].title+"",o,a,c,l,u,f,d,p,g,_=i[0].provider+"",m,h,b,M,S,v,E,w=i[0].upvotes+"",F,x,R,Y,q,O,z,W=new Date(i[0].created_at).toLocaleDateString()+"",ee,Z,k,ne,X,pe,J,N,G=i[0].tunnel_url+"",te,se,P,we,Re,ce,xe,Ie,me,Ae,Ne=i[2]&&sl(i),Ue=i[0].description&&al(i),oe=i[0].tags&&i[0].tags.length>0&&ol(i),ge=i[4]&&cl(i);return{c(){e=V("div"),t=V("div"),n=V("div"),r=V("h3"),o=Le(s),a=fe(),c=V("button"),c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>',l=fe(),u=V("div"),f=V("div"),d=V("span"),d.textContent="Provider",p=fe(),g=V("span"),m=Le(_),h=fe(),b=V("div"),M=V("span"),M.textContent="Upvotes",S=fe(),v=V("div"),E=V("span"),F=Le(w),x=fe(),Ne&&Ne.c(),R=fe(),Y=V("div"),q=V("span"),q.textContent="Created",O=fe(),z=V("span"),ee=Le(W),Z=fe(),Ue&&Ue.c(),k=fe(),oe&&oe.c(),ne=fe(),X=V("div"),pe=V("h4"),pe.textContent="Tunnel URL",J=fe(),N=V("a"),te=Le(G),P=fe(),ge&&ge.c(),we=fe(),Re=V("div"),ce=V("a"),xe=Le("Visit Tunnel"),L(r,"class","text-xl font-bold text-purple-300"),L(c,"class","text-gray-400 hover:text-white"),L(n,"class","flex justify-between items-start mb-4"),L(d,"class","text-sm text-gray-400"),L(g,"class","text-sm font-medium text-white"),L(f,"class","flex items-center justify-between mb-2"),L(M,"class","text-sm text-gray-400"),L(E,"class","text-sm font-medium text-white mr-2"),L(v,"class","flex items-center"),L(b,"class","flex items-center justify-between mb-2"),L(q,"class","text-sm text-gray-400"),L(z,"class","text-sm font-medium text-white"),L(Y,"class","flex items-center justify-between"),L(u,"class","mb-4"),L(pe,"class","text-sm font-medium text-gray-400 mb-1"),L(N,"href",se=i[0].tunnel_url),L(N,"target","_blank"),L(N,"rel","noopener noreferrer"),L(N,"class","block p-2 bg-gray-700 rounded text-blue-400 hover:text-blue-300 text-sm break-all"),L(X,"class","mt-4"),L(ce,"href",Ie=i[0].tunnel_url),L(ce,"target","_blank"),L(ce,"rel","noopener noreferrer"),L(ce,"class","px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors"),L(Re,"class","mt-6 flex justify-end"),L(t,"class","bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md border border-purple-500"),L(e,"class","fixed inset-0 flex items-center justify-center z-50 p-4")},m(Me,de){Te(Me,e,de),C(e,t),C(t,n),C(n,r),C(r,o),C(n,a),C(n,c),C(t,l),C(t,u),C(u,f),C(f,d),C(f,p),C(f,g),C(g,m),C(u,h),C(u,b),C(b,M),C(b,S),C(b,v),C(v,E),C(E,F),C(v,x),Ne&&Ne.m(v,null),C(u,R),C(u,Y),C(Y,q),C(Y,O),C(Y,z),C(z,ee),C(t,Z),Ue&&Ue.m(t,null),C(t,k),oe&&oe.m(t,null),C(t,ne),C(t,X),C(X,pe),C(X,J),C(X,N),C(N,te),C(t,P),ge&&ge.m(t,null),C(t,we),C(t,Re),C(Re,ce),C(ce,xe),me||(Ae=[rt(c,"click",function(){Wr(i[1])&&i[1].apply(this,arguments)}),rt(e,"click",Kc(function(){Wr(i[1])&&i[1].apply(this,arguments)}))],me=!0)},p(Me,de){i=Me,de&1&&s!==(s=i[0].title+"")&&Ve(o,s),de&1&&_!==(_=i[0].provider+"")&&Ve(m,_),de&1&&w!==(w=i[0].upvotes+"")&&Ve(F,w),i[2]?Ne?Ne.p(i,de):(Ne=sl(i),Ne.c(),Ne.m(v,null)):Ne&&(Ne.d(1),Ne=null),de&1&&W!==(W=new Date(i[0].created_at).toLocaleDateString()+"")&&Ve(ee,W),i[0].description?Ue?Ue.p(i,de):(Ue=al(i),Ue.c(),Ue.m(t,k)):Ue&&(Ue.d(1),Ue=null),i[0].tags&&i[0].tags.length>0?oe?oe.p(i,de):(oe=ol(i),oe.c(),oe.m(t,ne)):oe&&(oe.d(1),oe=null),de&1&&G!==(G=i[0].tunnel_url+"")&&Ve(te,G),de&1&&se!==(se=i[0].tunnel_url)&&L(N,"href",se),i[4]?ge?ge.p(i,de):(ge=cl(i),ge.c(),ge.m(t,we)):ge&&(ge.d(1),ge=null),de&1&&Ie!==(Ie=i[0].tunnel_url)&&L(ce,"href",Ie)},d(Me){Me&&be(e),Ne&&Ne.d(),Ue&&Ue.d(),oe&&oe.d(),ge&&ge.d(),me=!1,en(Ae)}}}function sl(i){let e,t,n,r,s,o,a,c;return{c(){e=V("button"),t=on("svg"),n=on("path"),L(n,"stroke-linecap","round"),L(n,"stroke-linejoin","round"),L(n,"stroke-width","2"),L(n,"d","M5 15l7-7 7 7"),L(t,"xmlns","http://www.w3.org/2000/svg"),L(t,"class","h-4 w-4"),L(t,"fill","none"),L(t,"viewBox","0 0 24 24"),L(t,"stroke","currentColor"),e.disabled=r=i[3]||i[5],L(e,"title",s=i[5]?"You've already upvoted this post":"Upvote this post"),L(e,"class",o="inline-flex items-center justify-center w-6 h-6 rounded transition-colors duration-150 ease-in-out "+(i[5]?"bg-purple-800 text-purple-200 cursor-not-allowed":"bg-purple-600 hover:bg-purple-700 text-white")+" disabled:opacity-50")},m(l,u){Te(l,e,u),C(e,t),C(t,n),a||(c=rt(e,"click",i[6]),a=!0)},p(l,u){u&40&&r!==(r=l[3]||l[5])&&(e.disabled=r),u&32&&s!==(s=l[5]?"You've already upvoted this post":"Upvote this post")&&L(e,"title",s),u&32&&o!==(o="inline-flex items-center justify-center w-6 h-6 rounded transition-colors duration-150 ease-in-out "+(l[5]?"bg-purple-800 text-purple-200 cursor-not-allowed":"bg-purple-600 hover:bg-purple-700 text-white")+" disabled:opacity-50")&&L(e,"class",o)},d(l){l&&be(e),a=!1,c()}}}function al(i){let e,t,n,r,s=i[0].description+"",o;return{c(){e=V("div"),t=V("h4"),t.textContent="Description",n=fe(),r=V("p"),o=Le(s),L(t,"class","text-sm font-medium text-gray-400 mb-1"),L(r,"class","text-sm text-white"),L(e,"class","mb-4")},m(a,c){Te(a,e,c),C(e,t),C(e,n),C(e,r),C(r,o)},p(a,c){c&1&&s!==(s=a[0].description+"")&&Ve(o,s)},d(a){a&&be(e)}}}function ol(i){let e,t,n,r,s=i[0].tags,o=[];for(let a=0;a<s.length;a+=1)o[a]=ll(il(i,s,a));return{c(){e=V("div"),t=V("h4"),t.textContent="Tags",n=fe(),r=V("div");for(let a=0;a<o.length;a+=1)o[a].c();L(t,"class","text-sm font-medium text-gray-400 mb-1"),L(r,"class","flex flex-wrap gap-1"),L(e,"class","mb-4")},m(a,c){Te(a,e,c),C(e,t),C(e,n),C(e,r);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(r,null)},p(a,c){if(c&1){s=a[0].tags;let l;for(l=0;l<s.length;l+=1){const u=il(a,s,l);o[l]?o[l].p(u,c):(o[l]=ll(u),o[l].c(),o[l].m(r,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=s.length}},d(a){a&&be(e),$r(o,a)}}}function ll(i){let e,t=i[8]+"",n,r;return{c(){e=V("span"),n=Le(t),r=fe(),L(e,"class","inline-block bg-purple-600 text-xs py-1 px-2 rounded-full text-white")},m(s,o){Te(s,e,o),C(e,n),C(e,r)},p(s,o){o&1&&t!==(t=s[8]+"")&&Ve(n,t)},d(s){s&&be(e)}}}function cl(i){let e,t;return{c(){e=V("p"),t=Le(i[4]),L(e,"class","mt-3 text-sm text-red-400")},m(n,r){Te(n,e,r),C(e,t)},p(n,r){r&16&&Ve(t,n[4])},d(n){n&&be(e)}}}function Yg(i){let e,t=i[0]&&rl(i);return{c(){t&&t.c(),e=Yl()},m(n,r){t&&t.m(n,r),Te(n,e,r)},p(n,[r]){n[0]?t?t.p(n,r):(t=rl(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:$e,o:$e,d(n){t&&t.d(n),n&&be(e)}}}function jg(i,e,t){let n,{post:r=null}=e,{onClose:s=()=>{}}=e,o=!1,a="",c;ln.subscribe(f=>{t(2,c=f)});let l;Wi.subscribe(f=>{t(7,l=f)});async function u(){if(!(o||!c||n||!r)){t(3,o=!0),t(4,a="");try{const f=await Pn.votePost(r.id);f.own_by_current_user=r.own_by_current_user,Qr(f),t(0,r.upvotes=f.upvotes,r),sa(r.id,c)}catch(f){console.error("Error upvoting post:",f),t(4,a=f.message||"Failed to upvote post")}finally{t(3,o=!1)}}}return i.$$set=f=>{"post"in f&&t(0,r=f.post),"onClose"in f&&t(1,s=f.onClose)},i.$$.update=()=>{i.$$.dirty&133&&t(5,n=r&&c&&l&&l[c]&&l[c].includes(r.id))},[r,s,c,o,a,n,u,l]}class Kg extends Vi{constructor(e){super(),Hi(this,e,jg,Yg,ri,{post:0,onClose:1})}}const Br=.12,Zg=.6,ul=2,Jg=.85,$g=5e-4,Qg=100,wi=100,e_=1.2,Pc=15,t_=20,n_=.15,fl=2,dl=1.5,i_=5.5,Dc=.25,ur=32,Gi=6710886,Uc=.5,Ic=.95,Nc=8947848,Oc=16777215,Fc=.3,Bc=.5,zc=.4,kc=.7,is=.03,rs=.05,r_=16096779,s_=.6,a_=5,hl=1.15,o_=7829367,l_=.1,c_=.15,u_=.15,f_=16777215,d_=2,h_=2,p_=11184810,m_=.5,g_=.4,__=.5,v_=.5,x_=.2,M_=.7,Gt={Pinggy:6514417,Cloudflare:959977,Ngrok:1096065,"Localhost.run":15485081,Serveo:16096779,Localtunnel:9133302,PlayIT:15680580,"Remote.it":1357990,default:6583435},pl={type:"change"},zs={type:"start"},ml={type:"end"};class S_ extends si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",de),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(pl),n.update(),s=r.NONE},this.update=function(){const D=new I,re=new ii().setFromUnitVectors(e.up,new I(0,1,0)),j=re.clone().invert(),ve=new I,Ee=new ii,Pe=2*Math.PI;return function(){const Ce=n.object.position;D.copy(Ce).sub(n.target),D.applyQuaternion(re),a.setFromVector3(D),n.autoRotate&&s===r.NONE&&x(w()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ze=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(ze)&&isFinite(qe)&&(ze<-Math.PI?ze+=Pe:ze>Math.PI&&(ze-=Pe),qe<-Math.PI?qe+=Pe:qe>Math.PI&&(qe-=Pe),ze<=qe?a.theta=Math.max(ze,Math.min(qe,a.theta)):a.theta=a.theta>(ze+qe)/2?Math.max(ze,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(a),D.applyQuaternion(j),Ce.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||ve.distanceToSquared(n.object.position)>o||8*(1-Ee.dot(n.object.quaternion))>o?(n.dispatchEvent(pl),ve.copy(n.object.position),Ee.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",y),n.domElement.removeEventListener("pointerdown",Ae),n.domElement.removeEventListener("pointercancel",Ue),n.domElement.removeEventListener("wheel",Me),n.domElement.removeEventListener("pointermove",Ne),n.domElement.removeEventListener("pointerup",Ue),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",de),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new tl,c=new tl;let l=1;const u=new I;let f=!1;const d=new He,p=new He,g=new He,_=new He,m=new He,h=new He,b=new He,M=new He,S=new He,v=[],E={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function F(){return Math.pow(.95,n.zoomSpeed)}function x(D){c.theta-=D}function R(D){c.phi-=D}const Y=function(){const D=new I;return function(j,ve){D.setFromMatrixColumn(ve,0),D.multiplyScalar(-j),u.add(D)}}(),q=function(){const D=new I;return function(j,ve){n.screenSpacePanning===!0?D.setFromMatrixColumn(ve,1):(D.setFromMatrixColumn(ve,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(j),u.add(D)}}(),O=function(){const D=new I;return function(j,ve){const Ee=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;D.copy(Pe).sub(n.target);let Se=D.length();Se*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*j*Se/Ee.clientHeight,n.object.matrix),q(2*ve*Se/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(j*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),q(ve*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(D){n.object.isPerspectiveCamera?l/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(D){n.object.isPerspectiveCamera?l*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(D){d.set(D.clientX,D.clientY)}function Z(D){b.set(D.clientX,D.clientY)}function k(D){_.set(D.clientX,D.clientY)}function ne(D){p.set(D.clientX,D.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;x(2*Math.PI*g.x/re.clientHeight),R(2*Math.PI*g.y/re.clientHeight),d.copy(p),n.update()}function X(D){M.set(D.clientX,D.clientY),S.subVectors(M,b),S.y>0?z(F()):S.y<0&&W(F()),b.copy(M),n.update()}function pe(D){m.set(D.clientX,D.clientY),h.subVectors(m,_).multiplyScalar(n.panSpeed),O(h.x,h.y),_.copy(m),n.update()}function J(D){D.deltaY<0?W(F()):D.deltaY>0&&z(F()),n.update()}function N(D){let re=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),re=!0;break}re&&(D.preventDefault(),n.update())}function G(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const D=.5*(v[0].pageX+v[1].pageX),re=.5*(v[0].pageY+v[1].pageY);d.set(D,re)}}function te(){if(v.length===1)_.set(v[0].pageX,v[0].pageY);else{const D=.5*(v[0].pageX+v[1].pageX),re=.5*(v[0].pageY+v[1].pageY);_.set(D,re)}}function se(){const D=v[0].pageX-v[1].pageX,re=v[0].pageY-v[1].pageY,j=Math.sqrt(D*D+re*re);b.set(0,j)}function P(){n.enableZoom&&se(),n.enablePan&&te()}function we(){n.enableZoom&&se(),n.enableRotate&&G()}function Re(D){if(v.length==1)p.set(D.pageX,D.pageY);else{const j=_e(D),ve=.5*(D.pageX+j.x),Ee=.5*(D.pageY+j.y);p.set(ve,Ee)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;x(2*Math.PI*g.x/re.clientHeight),R(2*Math.PI*g.y/re.clientHeight),d.copy(p)}function ce(D){if(v.length===1)m.set(D.pageX,D.pageY);else{const re=_e(D),j=.5*(D.pageX+re.x),ve=.5*(D.pageY+re.y);m.set(j,ve)}h.subVectors(m,_).multiplyScalar(n.panSpeed),O(h.x,h.y),_.copy(m)}function xe(D){const re=_e(D),j=D.pageX-re.x,ve=D.pageY-re.y,Ee=Math.sqrt(j*j+ve*ve);M.set(0,Ee),S.set(0,Math.pow(M.y/b.y,n.zoomSpeed)),z(S.y),b.copy(M)}function Ie(D){n.enableZoom&&xe(D),n.enablePan&&ce(D)}function me(D){n.enableZoom&&xe(D),n.enableRotate&&Re(D)}function Ae(D){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",Ne),n.domElement.addEventListener("pointerup",Ue)),K(D),D.pointerType==="touch"?Be(D):oe(D))}function Ne(D){n.enabled!==!1&&(D.pointerType==="touch"?A(D):ge(D))}function Ue(D){ae(D),v.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",Ne),n.domElement.removeEventListener("pointerup",Ue)),n.dispatchEvent(ml),s=r.NONE}function oe(D){let re;switch(D.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case li.DOLLY:if(n.enableZoom===!1)return;Z(D),s=r.DOLLY;break;case li.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;k(D),s=r.PAN}else{if(n.enableRotate===!1)return;ee(D),s=r.ROTATE}break;case li.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;ee(D),s=r.ROTATE}else{if(n.enablePan===!1)return;k(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(zs)}function ge(D){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ne(D);break;case r.DOLLY:if(n.enableZoom===!1)return;X(D);break;case r.PAN:if(n.enablePan===!1)return;pe(D);break}}function Me(D){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(D.preventDefault(),n.dispatchEvent(zs),J(D),n.dispatchEvent(ml))}function de(D){n.enabled===!1||n.enablePan===!1||N(D)}function Be(D){switch(ue(D),v.length){case 1:switch(n.touches.ONE){case ci.ROTATE:if(n.enableRotate===!1)return;G(),s=r.TOUCH_ROTATE;break;case ci.PAN:if(n.enablePan===!1)return;te(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(),s=r.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(zs)}function A(D){switch(ue(D),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Re(D),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ce(D),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(D),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(D),n.update();break;default:s=r.NONE}}function y(D){n.enabled!==!1&&D.preventDefault()}function K(D){v.push(D)}function ae(D){delete E[D.pointerId];for(let re=0;re<v.length;re++)if(v[re].pointerId==D.pointerId){v.splice(re,1);return}}function ue(D){let re=E[D.pointerId];re===void 0&&(re=new He,E[D.pointerId]=re),re.set(D.pageX,D.pageY)}function _e(D){const re=D.pointerId===v[0].pointerId?v[1]:v[0];return E[re.pointerId]}n.domElement.addEventListener("contextmenu",y),n.domElement.addEventListener("pointerdown",Ae),n.domElement.addEventListener("pointercancel",Ue),n.domElement.addEventListener("wheel",Me,{passive:!1}),this.update()}}const Ai=new I,gl=new ct,_l=new ct,vl=new I,xl=new I;class y_{constructor(e={}){const t=this;let n,r,s,o;const a={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:r}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),gl.copy(g.matrixWorldInverse),_l.multiplyMatrices(g.projectionMatrix,gl),l(p,p,g),d(p)},this.setSize=function(p,g){n=p,r=g,s=n/2,o=r/2,c.style.width=p+"px",c.style.height=g+"px"};function l(p,g,_){if(p.isCSS2DObject){Ai.setFromMatrixPosition(p.matrixWorld),Ai.applyMatrix4(_l);const m=p.visible===!0&&Ai.z>=-1&&Ai.z<=1&&p.layers.test(_.layers)===!0;if(p.element.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(t,g,_);const b=p.element;b.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(Ai.x*s+s)+"px,"+(-Ai.y*o+o)+"px)",b.parentNode!==c&&c.appendChild(b),p.onAfterRender(t,g,_)}const h={distanceToCameraSquared:u(_,p)};a.objects.set(p,h)}for(let m=0,h=p.children.length;m<h;m++)l(p.children[m],g,_)}function u(p,g){return vl.setFromMatrixPosition(p.matrixWorld),xl.setFromMatrixPosition(g.matrixWorld),vl.distanceToSquared(xl)}function f(p){const g=[];return p.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function d(p){const g=f(p).sort(function(m,h){if(m.renderOrder!==h.renderOrder)return h.renderOrder-m.renderOrder;const b=a.objects.get(m).distanceToCameraSquared,M=a.objects.get(h).distanceToCameraSquared;return b-M}),_=g.length;for(let m=0,h=g.length;m<h;m++)g[m].element.style.zIndex=_-m}}}function E_(){const i=new Bg;return i.background=new Qe(988970),i}function b_(i){const e=i.clientWidth/i.clientHeight,t=60,n=new bc(t*e/-2,t*e/2,t/2,t/-2,.1,1e3);return n.position.z=100,n.zoom=1,n.updateProjectionMatrix(),n}function T_(i){const e=new Cc({antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setSize(i.clientWidth,i.clientHeight),e.setPixelRatio(window.devicePixelRatio),i.appendChild(e.domElement);const t=new y_;return t.setSize(i.clientWidth,i.clientHeight),t.domElement.style.position="absolute",t.domElement.style.top="0",t.domElement.style.pointerEvents="none",i.appendChild(t.domElement),{renderer:e,labelRenderer:t}}function w_(i){const e=new Vg(16777215,1);i.add(e)}function A_(i,e,t,n){const r=new S_(i,e);return r.enableRotate=!1,r.enableDamping=!0,r.dampingFactor=.05,r.screenSpacePanning=!0,r.panSpeed=.7,r.zoomSpeed=1,r.minZoom=.5,r.maxZoom=4,r.addEventListener("start",t),r.addEventListener("end",n),r}function R_(i,e,t,n){const r=E_();r.add(e);const s=b_(i),{renderer:o,labelRenderer:a}=T_(i);w_(r);const c=A_(s,o.domElement,t,n);return{scene:r,camera:s,renderer:o,labelRenderer:a,controls:c}}function C_(i){const e=Math.max(dl,Math.min(i_,dl+i.upvotes*Dc)),t=Gt[i.provider]||Gt.default,n=i.status==="dead"||i.is_alive===!1,r=new Zr(e,32),s=new rr({color:n?Gi:t,transparent:!0,opacity:n?Uc:Ic}),o=new kt(r,s);o.name="mainCircle";const a=new Jr(e-.05,e+.1,32),c=new rr({color:n?Nc:Oc,transparent:!0,opacity:n?Fc:Bc,side:Zt}),l=new kt(a,c);l.name="outline",l.position.z=-.01,o.add(l);const u=new Zr(e*1.4,32),f=new Lc({color:n?Gi:t,size:n?is:rs,transparent:!0,opacity:n?zc:kc,sizeAttenuation:!0}),d=new kg(u,f);if(d.name="glow",d.position.z=.01,o.add(d),i.upvotes>a_){const p=new Jr(e+.2,e+.4,32),g=new rr({color:r_,transparent:!0,opacity:s_,side:Zt}),_=new kt(p,g);_.name="upvoteRing",_.position.z=-.02,o.add(_)}return o.userData={post:i,isJumping:!1,jumpFramesRemaining:0},o.position.z=0,o}function L_(i){if(i&&i.userData)if(i.userData.isJumping=!0,i.userData.jumpFramesRemaining=Pc,i.userData.pulseAnimation){const e=i.userData.pulseAnimation;let t=0;const n=15;i.userData.pulseAnimation=()=>{if(i&&i.scale){const a=1+Math.sin(t/n*Math.PI)*(1.5-1);i.scale.set(a,a,1),t++,t>n&&(i.scale.set(1,1,1),typeof e=="function"&&e!==i.userData.pulseAnimation||delete i.userData.pulseAnimation)}}}else{let e=0;const t=15;i.userData.pulseAnimation=()=>{if(i&&i.scale){const o=1+Math.sin(e/t*Math.PI)*(1.5-1);i.scale.set(o,o,1),e++,e>t&&(i.scale.set(1,1,1),delete i.userData.pulseAnimation)}}}}function P_(i,e){i&&i!==e&&i.material&&i.material.emissive&&i.userData&&i.userData.post&&(i.scale&&i.scale.set(hl,hl,1),i.material.emissive.setHex(o_),i.children&&i.children.length>0&&i.children.forEach(t=>{if((t.isPoints||t.name==="glow")&&t.material&&t.material.color){t.material.size=l_;const n=new Qe(Gt[i.userData.post.provider]||Gt.default),r=new Qe(16777215),s=n.clone().lerp(r,c_);t.material.color.set(s)}}))}function sr(i,e){i&&i!==e&&i.userData&&i.userData.post&&(i.material&&i.material.emissive&&i.material.emissive.setHex(0),i.scale&&i.scale.set(1,1,1),i.children&&i.children.length>0&&i.children.forEach(t=>{if((t.isPoints||t.name==="glow")&&t.material&&t.material.color&&i.userData&&i.userData.post){const n=i.userData.post,r=n.status==="dead"||n.is_alive===!1,s=r?Gi:Gt[n.provider]||Gt.default;t.material.color.setHex(s),t.material.size=r?is:rs}}))}function D_(i){if(i&&i.userData&&i.userData.post&&i.children&&i.children.length>0){const e=i.children.find(t=>t.isPoints||t.name==="glow");if(e&&e.material&&e.material.color){const t=e.material;t.size=u_,t.color.setHex(f_)}}if(i&&i.userData){const e=()=>{if(i&&i.scale){const t=1.2+Math.sin(Date.now()*.01)*.1;i.scale.set(t,t,1)}};i.userData.pulseAnimation=e}}function U_(i){if(i&&i.userData&&i.userData.post&&(i.userData.pulseAnimation&&delete i.userData.pulseAnimation,i.scale&&i.scale.set(1,1,1),i.children&&i.children.length>0)){const e=i.children.find(t=>t.isPoints||t.name==="glow");if(e&&e.material&&e.material.color){const t=e.material,n=i.userData.post,r=n.status==="dead"||n.is_alive===!1;t.size=r?is:rs;const s=r?Gi:Gt[n.provider]||Gt.default;t.color.setHex(s)}}}function I_(i,e){if(!i||!i.material||!i.material.color||!e)return;const t=e.status==="dead"||e.is_alive===!1,n=i.material;n.color.setHex(t?Gi:Gt[e.provider]||Gt.default),n.opacity=t?Uc:Ic;const r=i.children.find(o=>o.name==="outline");r&&r.material&&r.material.color&&(r.material.color.setHex(t?Nc:Oc),r.material.opacity=t?Fc:Bc);const s=i.children.find(o=>o.name==="glow");s&&s.material&&s.material.color&&(s.material.color.setHex(t?Gi:Gt[e.provider]||Gt.default),s.material.opacity=t?zc:kc,s.material.size=t?is:rs)}const Ml=new In,zr=new I;class Gc extends Wg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new bt(e,3)),this.setAttribute("uv",new bt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new na(t,6,1);return this.setAttribute("instanceStart",new Rn(n,3,0)),this.setAttribute("instanceEnd",new Rn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new na(t,6,1);return this.setAttribute("instanceColorStart",new Rn(n,3,0)),this.setAttribute("instanceColorEnd",new Rn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Gg(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ml.setFromBufferAttribute(t),this.boundingBox.union(Ml))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)zr.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(zr)),zr.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(zr));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}he.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new He(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Pt.line={uniforms:ua.merge([he.common,he.fog,he.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class ha extends Un{constructor(e){super({type:"LineMaterial",uniforms:ua.clone(Pt.line.uniforms),vertexShader:Pt.line.vertexShader,fragmentShader:Pt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Sl=new I,yl=new I,_t=new lt,vt=new lt,rn=new lt,ks=new I,Gs=new ct,xt=new qg,El=new I,kr=new In,Gr=new Xi,sn=new lt;let an,Zn;function bl(i,e,t){return sn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),sn.multiplyScalar(1/sn.w),sn.x=Zn/t.width,sn.y=Zn/t.height,sn.applyMatrix4(i.projectionMatrixInverse),sn.multiplyScalar(1/sn.w),Math.abs(Math.max(sn.x,sn.y))}function N_(i,e){const t=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,r.count);for(let a=0,c=o;a<c;a++){xt.start.fromBufferAttribute(r,a),xt.end.fromBufferAttribute(s,a),xt.applyMatrix4(t);const l=new I,u=new I;an.distanceSqToSegment(xt.start,xt.end,u,l),u.distanceTo(l)<Zn*.5&&e.push({point:u,pointOnLine:l,distance:an.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function O_(i,e,t){const n=e.projectionMatrix,s=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),f=-e.near;an.at(1,rn),rn.w=1,rn.applyMatrix4(e.matrixWorldInverse),rn.applyMatrix4(n),rn.multiplyScalar(1/rn.w),rn.x*=s.x/2,rn.y*=s.y/2,rn.z=0,ks.copy(rn),Gs.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=u;d<p;d++){if(_t.fromBufferAttribute(c,d),vt.fromBufferAttribute(l,d),_t.w=1,vt.w=1,_t.applyMatrix4(Gs),vt.applyMatrix4(Gs),_t.z>f&&vt.z>f)continue;if(_t.z>f){const M=_t.z-vt.z,S=(_t.z-f)/M;_t.lerp(vt,S)}else if(vt.z>f){const M=vt.z-_t.z,S=(vt.z-f)/M;vt.lerp(_t,S)}_t.applyMatrix4(n),vt.applyMatrix4(n),_t.multiplyScalar(1/_t.w),vt.multiplyScalar(1/vt.w),_t.x*=s.x/2,_t.y*=s.y/2,vt.x*=s.x/2,vt.y*=s.y/2,xt.start.copy(_t),xt.start.z=0,xt.end.copy(vt),xt.end.z=0;const _=xt.closestPointToPointParameter(ks,!0);xt.at(_,El);const m=Of.lerp(_t.z,vt.z,_),h=m>=-1&&m<=1,b=ks.distanceTo(El)<Zn*.5;if(h&&b){xt.start.fromBufferAttribute(c,d),xt.end.fromBufferAttribute(l,d),xt.start.applyMatrix4(o),xt.end.applyMatrix4(o);const M=new I,S=new I;an.distanceSqToSegment(xt.start,xt.end,S,M),t.push({point:S,pointOnLine:M,distance:an.origin.distanceTo(S),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class F_ extends kt{constructor(e=new Gc,t=new ha({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)Sl.fromBufferAttribute(t,o),yl.fromBufferAttribute(n,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Sl.distanceTo(yl);const s=new na(r,2,1);return e.setAttribute("instanceDistanceStart",new Rn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Rn(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;an=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Zn=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Gr.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Zn*.5;else{const f=Math.max(r.near,Gr.distanceToPoint(an.origin));l=bl(r,f,c.resolution)}if(Gr.radius+=l,an.intersectsSphere(Gr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),kr.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Zn*.5;else{const f=Math.max(r.near,kr.distanceToPoint(an.origin));u=bl(r,f,c.resolution)}kr.expandByScalar(u),an.intersectsBox(kr)!==!1&&(n?N_(this,t):O_(this,r,t))}}class Hc extends Gc{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class B_ extends F_{constructor(e=new Hc,t=new ha({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function z_(i,e,t=1,n){const r=new Hc;r.setPositions([i.position.x,i.position.y,0,e.position.x,e.position.y,0]);const s=d_+t*h_,o=new ha({color:p_,linewidth:s,transparent:!0,opacity:m_*t,resolution:new He(n.clientWidth,n.clientHeight),dashed:t<g_,dashSize:__,gapSize:v_}),a=new B_(r,o);return a.computeLineDistances(),a}function k_(i,e,t){!i||!i.geometry||!i.material||(i.geometry.setPositions([e.position.x,e.position.y,0,t.position.x,t.position.y,0]),e.userData.post.status==="dead"||t.userData.post.status==="dead"?i.material.opacity=x_:i.material.opacity=M_*i.userData.strength)}function G_(i,e){i.forEach(t=>{t.line&&t.line.material&&t.line.material.isLineMaterial&&t.line.material.resolution.set(e.clientWidth,e.clientHeight)})}function H_(i,e){const t=i.userData.post.id,n=Math.min(6,1+i.userData.post.upvotes*Dc),r=Math.sin(Date.now()*.001)*.005+.015,s=new I(-i.position.x,-i.position.y,-i.position.z);s.normalize().multiplyScalar(r*n),e[t].add(s);const o=new I((Math.random()-.5)*.003,(Math.random()-.5)*.003,0);e[t].add(o)}function V_(i,e){const t=i.userData.post.id,n=new I(i.position.x,i.position.y,i.position.z);n.normalize().multiplyScalar(.05),e[t].add(n)}function W_(i,e){if(i.userData.isJumping&&i.userData.jumpFramesRemaining>0){const t=i.userData.post.id;let n=i.position.clone().normalize();i.position.lengthSq()<.1&&n.set(Math.random()-.5,Math.random()-.5,0).normalize();const r=e_*(i.userData.jumpFramesRemaining/Pc),s=n.multiplyScalar(r);e[t].add(s),i.userData.jumpFramesRemaining--,i.userData.jumpFramesRemaining<=0&&(i.userData.isJumping=!1)}}function X_(i,e){const t=Date.now()*.001,n=Math.sin(t*.5)*.3+1;i.forEach(r=>{if(!r||!r.startNode||!r.endNode)return;const s=r.startNode,o=r.endNode;if(!s.userData||!s.userData.post||!o.userData||!o.userData.post)return;const a=s.userData.post.id,c=o.userData.post.id;let l=0;if(typeof a=="string"&&typeof c=="string"&&a.length>0&&c.length>0)l=(a.charCodeAt(0)+c.charCodeAt(0))%10*.1;else{const E=String(a).split("").reduce((F,x)=>F+x.charCodeAt(0),0),w=String(c).split("").reduce((F,x)=>F+x.charCodeAt(0),0);l=(E+w)%10*.1}const u=Math.sin(t*.8+l)*.2+1,f=s.position.distanceTo(o.position),p=Math.max(ur*1.2,40*(1-r.strength*.3))*n,g=new I().subVectors(o.position,s.position);g.normalize();const _=Math.abs(f-p),m=.004*r.strength*u;let h=(f-p)*m;const b=1+.2*Math.sin(t*.2+l*2),M=.001*r.strength*Math.sin(t*.4+l*3)*b;if(_<3){const E=1-_/3,w=M*Math.pow(E,1.2)*1.2,F=Math.sin(t*.6+l*4)*.001*r.strength*E;h=h*(1-E*.4)+(w+F)*E}g.multiplyScalar(h);const S=_<2?.2*Math.sin(t+l*5):.1*Math.sin(t+l*5),v=new I(-g.y,g.x,0);v.multiplyScalar(Math.abs(h)*S),e[a].add(g),e[c].sub(g),e[a].add(v),e[c].add(v)})}function q_(i,e,t){const n=Date.now()*.001,r=Math.sin(n*.3)*.2+1;for(let s=0;s<i.length;s++)for(let o=s+1;o<i.length;o++){const a=i[s],c=i[o];if(!a||!a.userData||!a.userData.post||!c||!c.userData||!c.userData.post)continue;const l=a.userData.post.id,u=c.userData.post.id;let f=0;if(typeof l=="string"&&typeof u=="string"&&l.length>0&&u.length>0)f=(l.charCodeAt(0)+u.charCodeAt(0))%10*.1;else{const M=String(l).split("").reduce((v,E)=>v+E.charCodeAt(0),0),S=String(u).split("").reduce((v,E)=>v+E.charCodeAt(0),0);f=(M+S)%10*.1}const d=Math.sin(n*.7+f)*.15+1,p=new I().subVectors(a.position,c.position),g=p.length(),_=a.geometry&&a.geometry.parameters?a.geometry.parameters.radius:1,m=c.geometry&&c.geometry.parameters?c.geometry.parameters.radius:1,h=_+m+.8,b=Math.max(ur,h)*r;if(g<b){const M=(b-g)/b,S=Math.pow(M,1.5)*1.2,v=ul*S*d,E=p.clone().normalize().multiplyScalar(v),w=new I(-p.y,p.x,0).normalize().multiplyScalar(v*.1);if(g<b*.6){const F=Math.pow((b*.6-g)/(b*.6),1.2)*ul*.5,x=p.clone().normalize().multiplyScalar(F),R=Math.random()*Math.PI*2,Y=new I(Math.cos(R)*.05,Math.sin(R)*.05,0);if(e[l].add(x.clone().add(Y)),e[u].sub(x.clone().sub(Y)),t&&t[l]&&t[u]){const q=p.clone().normalize().multiplyScalar(F*.2);t[l].add(q),t[u].sub(q)}}e[l].add(E),e[u].sub(E),e[l].add(w),e[u].add(w)}else if(g<20){const M=.1*r/Math.max(.1,Math.pow(g,1.8)),S=p.clone().normalize().multiplyScalar(M*d);e[l].add(S),e[u].sub(S)}}}function Y_(i,e){var t,n,r,s;if(!(!i||i.length<2))for(let o=0;o<i.length;o++)for(let a=o+1;a<i.length;a++){const c=i[o],l=i[a];if(!c||!c.position||!l||!l.position)continue;const u=c.position.distanceTo(l.position);if(u<ur*.7){const f=new I().subVectors(c.position,l.position);f.normalize();const d=(ur-u)*.15;if(c.position.add(f.clone().multiplyScalar(d)),l.position.sub(f.clone().multiplyScalar(d)),e){const p=(n=(t=c.userData)==null?void 0:t.post)==null?void 0:n.id,g=(s=(r=l.userData)==null?void 0:r.post)==null?void 0:s.id;if(p&&g&&e[p]&&e[g]){const _=f.clone().multiplyScalar(.1);e[p].add(_),e[g].sub(_)}}}}}function j_(i,e,t,n,r){const s=Object.values(i);if(!s.length)return 0;let o=0;const a=Date.now()*.001;s.forEach(l=>{if(!l||!l.userData||!l.userData.post)return;const u=l.userData.post.id;t[u]?t[u].set(0,0,0):t[u]=new I(0,0,0),n[u]||(n[u]=new I(0,0,0))});const c=s.filter(l=>l&&l.userData&&l.userData.post);return c.forEach(l=>{H_(l,t),(l.userData.post.status==="dead"||l.userData.post.is_alive===!1)&&V_(l,t),W_(l,t);const u=l.userData.post.id;let f=0;typeof u=="string"&&u.length>0?f=u.charCodeAt(0)%10*.1:f=String(u).split("").reduce((g,_)=>g+_.charCodeAt(0),0)%10*.1;const d=new I(Math.sin(a*.5+f)*.0015,Math.cos(a*.3+f)*.0015,0);t[u].add(d)}),X_(e,t),q_(c,t,n),Y_(c,n),c.forEach(l=>{if(!l||!l.userData||!l.userData.post)return;const u=l.userData.post.id,f=t[u],d=n[u];if(!f||!d)return;const p=l.position.clone();d.add(f);let g=0;typeof u=="string"&&u.length>0?g=u.charCodeAt(0)*.01:g=String(u).split("").reduce((h,b)=>h+b.charCodeAt(0),0)*.001;const _=Jg*(.95+Math.sin(a*.2+g)*.05);d.multiplyScalar(_),d.lengthSq()<1e-5&&d.add(new I((Math.random()-.5)*.001,(Math.random()-.5)*.001,0)),l.position.add(d.clone().multiplyScalar(r)),l.position.z=0,Math.abs(l.position.x)>wi&&(Math.abs(l.position.x)-wi,l.position.x=Math.sign(l.position.x)*wi,d.x=-d.x*.5),Math.abs(l.position.y)>wi&&(Math.abs(l.position.y)-wi,l.position.y=Math.sign(l.position.y)*wi,d.y=-d.y*.5);const m=l.position.distanceTo(p);o+=m}),Math.max(o,.01*c.length)}function K_(i){const e=document.createElement("div");return e.className="tooltip",e.style.display="none",e.style.opacity="1",i.appendChild(e),e}function Tl(i,e,t,n){if(!t||!i||!e)return;n.current&&(clearTimeout(n.current),n.current=null),t.style.display="block",requestAnimationFrame(()=>{t.style.opacity="1"});const r=e.status==="dead"?"💀":e.status==="pending"?"⏳":"✅";t.innerHTML=`
    <div class="text-sm font-bold">${e.title}</div>
    <div class="text-xs">${e.provider} | ⬆️ ${e.upvotes} | ${r}</div>
    ${e.tags&&e.tags.length?`<div class="text-xs">${e.tags.map(c=>c.toLowerCase()).join(", ")}</div>`:""}
    <div class="text-xs opacity-75 mt-1">Click for details</div>
  `;const s=-t.offsetHeight-10,o=-(t.offsetWidth/2)+10;t.style.left=`${i.clientX+o}px`,t.style.top=`${i.clientY+s}px`;const a=t.getBoundingClientRect();a.left<10?t.style.left="10px":a.right>window.innerWidth-10&&(t.style.left=`${window.innerWidth-t.offsetWidth-10}px`),a.top<10&&(t.style.top=`${i.clientY+20}px`)}function Cn(i,e,t=!1){if(i){if(e.current&&(clearTimeout(e.current),e.current=null),t){i.style.display="none",i.style.opacity="0";return}i.style.opacity="0",e.current=setTimeout(()=>{i&&i.style.opacity==="0"&&(i.style.display="none"),e.current=null},150)}}function Z_(){const i=new Xg;return i.params.Points.threshold=.1,i}function pa(i,e){const t=e.getBoundingClientRect(),n=new He;return n.x=(i.clientX-t.left)/t.width*2-1,n.y=-((i.clientY-t.top)/t.height)*2+1,n}function J_(i,e,t,n,r){if(!i||!e||!t||!n)return;const s=i.clientWidth/i.clientHeight,o=60;e.left=o*s/-2,e.right=o*s/2,e.top=o/2,e.bottom=o/-2,e.updateProjectionMatrix(),t.setSize(i.clientWidth,i.clientHeight),n.setSize(i.clientWidth,i.clientHeight),G_(r,i)}function $_(i,{renderer:e,containerEl:t,camera:n,nodesGroup:r,raycaster:s,selectedNodeRef:o,lastClickedNodeRef:a,tooltipRef:c,currentTooltipHideTimeoutRef:l,updateSelectedNode:u,updateLastMousePosition:f,isDragging:d,mouseMovedSince:p}){if(!e||!t)return;const g="ontouchstart"in window||navigator.maxTouchPoints>0;if(g)return;const _=pa(i,e.domElement);f({x:i.clientX,y:i.clientY,xNorm:_.x,yNorm:_.y}),s.setFromCamera(_,n);const m=s.intersectObjects(r.children,!0),h=m.length>0?m[0].object:null;o.current!==h?(o.current&&(g||sr(o.current,a.current),Cn(c.current,l),typeof document<"u"&&document.body&&(document.body.style.cursor="default")),h&&h.userData&&h.userData.post?(u(h),typeof document<"u"&&document.body&&(document.body.style.cursor="pointer"),g||P_(h,a.current),Tl(i,h.userData.post,c.current,l),console.log("[GraphView] Hover detected on node:",h.userData.post.title)):u(null)):h&&o.current&&Tl(i,o.current.userData.post,c.current,l)}function Q_(i,{renderer:e,camera:t,nodesGroup:n,raycaster:r,controls:s,updateSelectedPost:o,updateLastClickedNode:a,getPosts:c,tooltipRef:l,currentTooltipHideTimeoutRef:u,selectedNodeRef:f}){const d=pa(i,e.domElement);r.setFromCamera(d,t);const p=r.intersectObjects(n.children,!0);if(l&&u&&Cn(l.current,u,!0),p.length>0){const g=p[0].object;if(g.userData&&g.userData.post){if(o(g.userData.post),a(g),D_(g),L_(g),c().findIndex(h=>h.id===g.userData.post.id)!==-1){const h=document.getElementById(`post-${g.userData.post.id}`);h&&(h.scrollIntoView({behavior:"smooth",block:"center"}),h.classList.add("highlight"),setTimeout(()=>{h.classList.remove("highlight")},2e3))}return g}}else l&&u&&Cn(l.current,u);return null}function e0(i,e,t,n,r){const s="ontouchstart"in window||navigator.maxTouchPoints>0;i.current&&i.current!==e.current&&(s||sr(i.current,e.current),r(null)),Cn(t.current,n),typeof document<"u"&&document.body&&(document.body.style.cursor="default")}function t0(i,e){if(!i||!e||!i.length||!e.length)return 0;const t=new Set(i.map(s=>s.toLowerCase())),n=new Set(e.map(s=>s.toLowerCase()));return new Set([...t].filter(s=>n.has(s))).size/Math.sqrt(t.size*n.size)}function n0(i,e){const t=[];if(!i||i.length<=1)return t;for(let s=0;s<i.length;s++)for(let o=s+1;o<i.length;o++){const a=i[s],c=i[o],l=a.userData.post,u=c.userData.post,f=t0(l.tags,u.tags);let d=f;e&&(l.tags&&l.tags.map(p=>p.toLowerCase()).includes(e.toLowerCase())||u.tags&&u.tags.map(p=>p.toLowerCase()).includes(e.toLowerCase()))&&(d=Math.max(f,.4)),d>.3&&t.push({startNode:a,endNode:c,strength:d})}const n=new Set;if(t.forEach(s=>{n.add(s.startNode.userData.post.id),n.add(s.endNode.userData.post.id)}),i.filter(s=>!n.has(s.userData.post.id)).forEach(s=>{let o=null,a=1/0;i.forEach(c=>{if(c!==s){const l=s.position.distanceTo(c.position);l<a&&(a=l,o=c)}}),o&&t.push({startNode:s,endNode:o,strength:.2})}),i.length>2&&t.length<i.length)for(let s=0;s<i.length;s++){const o=i[s],a=o.userData.post;let c=!1;if(t.forEach(l=>{(l.startNode===o||l.endNode===o)&&(c=!0)}),!c){for(let l=0;l<i.length;l++)if(s!==l){const u=i[l],f=u.userData.post;if(a.provider===f.provider){t.push({startNode:o,endNode:u,strength:.25});break}}}}return t}function wl({scene:i,nodesGroup:e,filteredPosts:t,nodeObjectsRef:n,edgesRef:r,selectedTag:s,containerEl:o,checkDeadLinksCallback:a}){for(;e.children.length>0;)e.remove(e.children[0]);if(r.current.forEach(u=>{u.line&&i.remove(u.line)}),r.current=[],n.current={},!t||t.length===0)return;t.forEach((u,f)=>{const d=C_(u),p=t.length,g=f/p*Math.PI*2,_=Math.max(.2,1-u.upvotes*n_),m=t_*_;d.position.x=Math.cos(g)*m,d.position.y=Math.sin(g)*m,d.position.z=0,d.position.x+=(Math.random()-.5)*fl,d.position.y+=(Math.random()-.5)*fl,e.add(d),n.current[u.id]=d});const c=Object.values(n.current);n0(c,s).forEach(u=>{const f=z_(u.startNode,u.endNode,u.strength,o);f.userData={strength:u.strength},i.add(f),r.current.push({line:f,startNode:u.startNode,endNode:u.endNode,strength:u.strength})}),a&&a()}async function i0(i,e){if(!i||Object.keys(i).length===0){e(!1);return}try{Object.values(i).map(r=>r.userData.post).forEach(r=>{r.status||(r.status="pending")});const n=await Pn.checkAllLinks();for(const r of n){const s=r.id,o=r.is_alive;if(i[s]){const a=i[s],c=a.userData.post;c.status=o?"alive":"dead",c.is_alive=o,I_(a,c)}}}catch(t){console.error("Error checking dead links:",t)}finally{e(!1)}}function r0(i){let e,t,n,r,s,o,a,c,l,u,f,d,p,g;return f=new Kg({props:{post:i[2],onClose:i[4]}}),{c(){e=V("div"),t=V("div"),n=V("span"),n.textContent="Pan to move | Scroll to zoom",r=fe(),s=V("button"),s.textContent="Reheat",o=fe(),a=V("button"),a.textContent="Refresh",c=fe(),l=V("div"),l.innerHTML=`<div class="flex items-center gap-1"><span class="inline-block w-2 h-2 rounded-full bg-opacity-90 bg-white"></span> Active</div> 
    <div class="flex items-center gap-1"><span class="inline-block w-2 h-2 rounded-full bg-opacity-40 bg-red-500"></span> Dead Link</div> 
    <div class="flex items-center gap-1"><span class="inline-block w-2 h-2 rounded-full bg-opacity-80 bg-amber-500"></span> High Upvotes</div>`,u=fe(),Oi(f.$$.fragment),L(s,"class","ml-2 px-2 py-1 rounded bg-indigo-500 hover:bg-indigo-600 transition text-white text-xs font-semibold shadow"),L(s,"title","Reheat graph layout for better spacing"),L(a,"class","ml-2 px-2 py-1 rounded bg-emerald-500 hover:bg-emerald-600 transition text-white text-xs font-semibold shadow"),L(a,"title","Refresh data and update graph"),L(t,"class","absolute top-2 right-2 bg-gray-800 bg-opacity-80 text-white text-xs p-2 rounded-md backdrop-blur-sm shadow-sm flex gap-2 items-center"),L(l,"class","absolute bottom-2 left-2 flex items-center gap-2 bg-gray-800 bg-opacity-80 text-white text-xs p-2 rounded-md backdrop-blur-sm shadow-sm"),L(e,"class","rounded-lg overflow-hidden w-full relative shadow-lg"),xa(e,"height",i[0])},m(_,m){Te(_,e,m),C(e,t),C(t,n),C(t,r),C(t,s),C(t,o),C(t,a),C(e,c),C(e,l),i[13](e),Te(_,u,m),Qn(f,_,m),d=!0,p||(g=[rt(s,"click",i[3]),rt(a,"click",a0)],p=!0)},p(_,m){(!d||m[0]&1)&&xa(e,"height",_[0]);const h={};m[0]&4&&(h.post=_[2]),f.$set(h)},i(_){d||(st(f.$$.fragment,_),d=!0)},o(_){dt(f.$$.fragment,_),d=!1},d(_){_&&be(e),i[13](null),_&&be(u),ei(f,_),p=!1,en(g)}}}let s0=!0;async function a0(){console.log("Manually refreshing graph data...");const{fetchPosts:i}=await bu(()=>Promise.resolve().then(()=>au),void 0);await i(),console.log("Graph refresh complete")}function o0(i,e,t){let n,{height:r="500px"}=e,{selectedTag:s=""}=e,o,a,c,l,u,f,d=new Qi,p={},g=[];const _={current:p},m={current:g};let h=!1,b=Date.now(),M;const S={current:null},v={current:null},E={current:null},w={current:null};let F=null,x=!1,R=0,Y=Date.now(),q,O={};function z(oe=2.5){const ge=Object.values(p);for(let Me=0;Me<ge.length;Me++)for(let de=Me+1;de<ge.length;de++){const Be=ge[Me],A=ge[de];if(!Be.position||!A.position)continue;const y=new I().subVectors(Be.position,A.position),K=y.length();if(K<oe&&K>.001){y.normalize();const ae=(oe-K)/2;Be.position.addScaledVector(y,ae),A.position.addScaledVector(y,-ae)}else if(K<=.001){const ae=new I(Math.random()-.5,Math.random()-.5,0).normalize().multiplyScalar(oe/2);Be.position.add(ae),A.position.sub(ae)}}}function W(){O={},ee={},k=!1,ne=0,Z=Br*1.5,Object.values(p).forEach(ge=>{if(!ge||!ge.userData||!ge.userData.post)return;const Me=ge.userData.post.id,de=Math.random()*Math.PI*2,Be=new I(Math.cos(de)*.5,Math.sin(de)*.5,0),A=.5+Math.random()*1;Be.multiplyScalar(A),O[Me]=Be.clone()}),z(ur*.5),console.log("Graph reheated with random forces applied!")}let ee={},Z=Br,k=!1,ne=0,X;Kl(()=>{if(!o)return;const oe=R_(o,d,()=>x=!0,()=>setTimeout(()=>x=!1,10));t(6,a=oe.scene),c=oe.camera,l=oe.renderer,u=oe.labelRenderer,f=oe.controls,M=Z_(),E.current=K_(o),E.current,P(),me(),n&&n.length>0&&Qc().then(()=>{t(10,_.current=p,_),t(11,m.current=g,m),wl({scene:a,nodesGroup:d,filteredPosts:n,nodeObjectsRef:_,edgesRef:m,selectedTag:s,containerEl:o,checkDeadLinksCallback:xe}),t(8,p=_.current),t(9,g=m.current)})}),$c(()=>{Ne()});function pe(){J_(o,c,l,u,m.current)}function J(oe){R=Date.now()}function N(oe){Date.now()-R<200&&!x&&(pa(oe,l.domElement),Q_(oe,{renderer:l,camera:c,nodesGroup:d,raycaster:M,controls:f,updateSelectedPost:Me=>t(2,F=Me),updateLastClickedNode:Me=>{v.current=Me},getPosts:()=>n,tooltipRef:E,currentTooltipHideTimeoutRef:w,selectedNodeRef:S})),setTimeout(()=>{x=!1},50)}function G(oe){Y=Date.now(),x||$_(oe,{renderer:l,containerEl:o,camera:c,nodesGroup:d,raycaster:M,selectedNodeRef:S,lastClickedNodeRef:v,tooltipRef:E,currentTooltipHideTimeoutRef:w,updateSelectedNode:ge=>{S.current=ge},updateLastMousePosition:ge=>ge})}function te(oe){e0(S,v,E,w,ge=>{S.current=ge})}function se(oe){if(!o)return;const ge=o.getBoundingClientRect();(oe.clientX<ge.left||oe.clientX>ge.right||oe.clientY<ge.top||oe.clientY>ge.bottom)&&(S.current&&S.current!==v.current?(sr(S.current,v.current),S.current=null,Cn(E.current,w),typeof document<"u"&&document.body&&(document.body.style.cursor="default")):S.current&&S.current===v.current&&E.current&&E.current.style.display==="block"&&(Cn(E.current,w),typeof document<"u"&&document.body&&(document.body.style.cursor="default")))}function P(){window.addEventListener("resize",pe),o.addEventListener("mousemove",G,{capture:!0,passive:!0}),o.addEventListener("mousedown",J,{capture:!0,passive:!1}),o.addEventListener("mouseup",N,{capture:!0,passive:!1}),o.addEventListener("mouseleave",te,{capture:!0,passive:!0}),document.addEventListener("mousemove",se,{passive:!0}),ce()}function we(){window.removeEventListener("resize",pe),o&&(o.removeEventListener("mousemove",G),o.removeEventListener("mousedown",J),o.removeEventListener("mouseup",N),o.removeEventListener("mouseleave",te)),document.removeEventListener("mousemove",se),q&&clearInterval(q)}function Re(){if(v.current){U_(v.current);const oe=v.current;v.current=null,S.current===oe&&(sr(S.current,null),Cn(E.current,w),S.current=null,typeof document<"u"&&document.body&&(document.body.style.cursor="default"))}t(2,F=null),f&&(f.enabled=!0)}function ce(){q&&clearInterval(q),q=setInterval(()=>{Date.now()-Y>800&&S.current&&S.current!==v.current&&(sr(S.current,v.current),Cn(E.current,w),S.current=null,typeof document<"u"&&document.body&&(document.body.style.cursor="default"))},700)}function xe(){h||(Ie(!0),b=Date.now(),i0(p,Ie))}function Ie(oe){h=oe}function me(){X=requestAnimationFrame(me);try{if(f&&f.update(),s0&&(!k||Date.now()%(k?10:2)===0)){const de=j_(p,g,ee,O,Z),Be=Object.keys(p).length;Be>0&&de<$g*Be?(ne++,ne>Qg&&(k=!0,Z*=Zg)):(ne=0,k=!1,Z=Br)}v.current&&v.current.userData.pulseAnimation&&v.current.userData.pulseAnimation(),(!k||Date.now()%(k?6:2)===0)&&g.forEach(Me=>{Me&&Me.line&&Me.startNode&&Me.endNode&&k_(Me.line,Me.startNode,Me.endNode)}),l&&a&&c&&(l.render(a,c),u&&u.render(a,c));const ge=Date.now();!h&&ge-b>6e4&&xe()}catch(oe){console.error("Error in animation loop:",oe),window.cancelAnimationFrame&&X&&window.cancelAnimationFrame(X)}}let Ae=cn.subscribe(oe=>{});function Ne(){if(Ae&&Ae(),we(),X&&cancelAnimationFrame(X),a){for(;d.children.length>0;){const oe=d.children[0];d.remove(oe),oe.geometry&&oe.geometry.dispose(),oe.material&&(Array.isArray(oe.material)?oe.material.forEach(ge=>ge.dispose()):oe.material.dispose()),oe.children&&oe.children.forEach(ge=>{ge.geometry&&ge.geometry.dispose(),ge.material&&(Array.isArray(ge.material)?ge.material.forEach(Me=>Me.dispose()):ge.material.dispose())})}g.forEach(oe=>{oe.line&&(oe.line.geometry&&oe.line.geometry.dispose(),oe.line.material&&oe.line.material.dispose(),a.remove(oe.line))}),a.remove(d)}l&&(l.dispose(),l.domElement&&l.domElement.parentNode&&l.domElement.parentNode.removeChild(l.domElement)),u&&u.domElement&&u.domElement.parentNode&&u.domElement.parentNode.removeChild(u.domElement),f&&f.dispose(),E.current&&E.current.parentNode&&E.current.parentNode.removeChild(E.current),t(6,a=null),c=null,l=null,u=null,f=null,t(7,d=null),t(8,p={}),t(9,g=[]),S.current=null,v.current=null,E.current=null}function Ue(oe){Vs[oe?"unshift":"push"](()=>{o=oe,t(1,o)})}return i.$$set=oe=>{"height"in oe&&t(0,r=oe.height),"selectedTag"in oe&&t(5,s=oe.selectedTag)},i.$$.update=()=>{i.$$.dirty[0]&32&&t(12,n=s?Hs(cn).filter(oe=>oe.tags&&oe.tags.map(ge=>ge.toLowerCase()).includes(s.toLowerCase())):Hs(cn)),i.$$.dirty[0]&8162&&a&&typeof n<"u"&&o&&(t(10,_.current=p,_),t(11,m.current=g,m),wl({scene:a,nodesGroup:d,filteredPosts:n,nodeObjectsRef:_,edgesRef:m,selectedTag:s,containerEl:o,checkDeadLinksCallback:xe}),t(8,p=_.current),t(9,g=m.current),O={},ee={},k=!1,ne=0,Z=Br)},[r,o,F,W,Re,s,a,d,p,g,_,m,n,Ue]}class l0 extends Vi{constructor(e){super(),Hi(this,e,o0,r0,ri,{height:0,selectedTag:5},null,[-1,-1])}}function Al(i,e,t){const n=i.slice();return n[18]=e[t],n}function Rl(i,e,t){const n=i.slice();return n[21]=e[t],n}function Cl(i,e,t){const n=i.slice();return n[18]=e[t],n}function Ll(i,e,t){const n=i.slice();return n[21]=e[t],n}function Pl(i,e,t){const n=i.slice();return n[21]=e[t],n}function Dl(i){let e,t,n,r,s,o=i[6],a=[];for(let l=0;l<o.length;l+=1)a[l]=Ul(Pl(i,o,l));let c=i[0]&&Il(i);return{c(){e=V("div"),t=V("div"),n=V("span"),n.textContent="Filter by tag:",r=fe();for(let l=0;l<a.length;l+=1)a[l].c();s=fe(),c&&c.c(),L(n,"class","text-sm text-gray-400 mr-2 self-center"),L(t,"class","flex flex-wrap gap-2 bg-gray-800 p-3 rounded-lg"),L(e,"class","w-full max-w-5xl mb-4")},m(l,u){Te(l,e,u),C(e,t),C(t,n),C(t,r);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(t,null);C(t,s),c&&c.m(t,null)},p(l,u){if(u&1089){o=l[6];let f;for(f=0;f<o.length;f+=1){const d=Pl(l,o,f);a[f]?a[f].p(d,u):(a[f]=Ul(d),a[f].c(),a[f].m(t,s))}for(;f<a.length;f+=1)a[f].d(1);a.length=o.length}l[0]?c?c.p(l,u):(c=Il(l),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},d(l){l&&be(e),$r(a,l),c&&c.d()}}}function Ul(i){let e,t=i[21]+"",n,r,s,o;function a(){return i[14](i[21])}return{c(){e=V("button"),n=Le(t),L(e,"class",r=`px-3 py-1 text-xs rounded-full transition-colors ${i[0]===i[21]?"bg-purple-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`)},m(c,l){Te(c,e,l),C(e,n),s||(o=rt(e,"click",a),s=!0)},p(c,l){i=c,l&64&&t!==(t=i[21]+"")&&Ve(n,t),l&65&&r!==(r=`px-3 py-1 text-xs rounded-full transition-colors ${i[0]===i[21]?"bg-purple-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`)&&L(e,"class",r)},d(c){c&&be(e),s=!1,o()}}}function Il(i){let e,t,n;return{c(){e=V("button"),e.textContent="Clear filter",L(e,"class","px-3 py-1 text-xs rounded-full bg-red-700 text-white hover:bg-red-600 transition-colors")},m(r,s){Te(r,e,s),t||(n=rt(e,"click",i[15]),t=!0)},p:$e,d(r){r&&be(e),t=!1,n()}}}function c0(i){let e,t,n,r,s,o;const a=[p0,h0,d0,f0],c=[];function l(u,f){return u[7]?0:u[8]?1:u[2]&&u[2].length>0?2:3}return r=l(i),s=c[r]=a[r](i),{c(){e=V("section"),t=V("h2"),t.textContent="Ghost Tunnels",n=fe(),s.c(),L(t,"class","text-2xl font-semibold mb-4 text-purple-300"),L(e,"class","w-full max-w-5xl p-6 bg-gray-800 rounded-lg shadow-xl")},m(u,f){Te(u,e,f),C(e,t),C(e,n),c[r].m(e,null),o=!0},p(u,f){let d=r;r=l(u),r===d?c[r].p(u,f):(Jn(),dt(c[d],1,1,()=>{c[d]=null}),$n(),s=c[r],s?s.p(u,f):(s=c[r]=a[r](u),s.c()),st(s,1),s.m(e,null))},i(u){o||(st(s),o=!0)},o(u){dt(s),o=!1},d(u){u&&be(e),c[r].d()}}}function u0(i){let e,t,n,r,s,o,a;const c=[v0,_0,g0,m0],l=[];function u(f,d){return f[7]?0:f[8]?1:f[2]&&f[2].length>0?2:3}return n=u(i),r=l[n]=c[n](i),{c(){e=V("section"),t=V("div"),r.c(),s=fe(),o=V("p"),o.innerHTML=`<span class="font-medium text-purple-400">Interaction:</span> Hover over nodes to see details. Click a node to view full details. 
        <br/> 
        <span class="font-medium text-purple-400">Visualization:</span> Node size shows upvotes. Colors indicate providers. Connected nodes share similar tags.`,L(t,"class","bg-gray-800 rounded-lg shadow-xl overflow-hidden"),L(o,"class","text-sm text-gray-500 mt-2"),L(e,"class","w-full max-w-5xl")},m(f,d){Te(f,e,d),C(e,t),l[n].m(t,null),C(e,s),C(e,o),a=!0},p(f,d){let p=n;n=u(f),n===p?l[n].p(f,d):(Jn(),dt(l[p],1,1,()=>{l[p]=null}),$n(),r=l[n],r?r.p(f,d):(r=l[n]=c[n](f),r.c()),st(r,1),r.m(t,null))},i(f){a||(st(r),a=!0)},o(f){dt(r),a=!1},d(f){f&&be(e),l[n].d()}}}function f0(i){let e,t,n=i[0]?"Try a different tag filter.":"Be the first to publish!",r;return{c(){e=V("p"),t=Le("No ghost tunnels match your criteria. "),r=Le(n),L(e,"class","text-gray-400")},m(s,o){Te(s,e,o),C(e,t),C(e,r)},p(s,o){o&1&&n!==(n=s[0]?"Try a different tag filter.":"Be the first to publish!")&&Ve(r,n)},i:$e,o:$e,d(s){s&&be(e)}}}function d0(i){let e,t,n=i[1]?"Discovered Tunnels":"All Tunnels",r,s,o,a=[],c=new Map,l,u=i[1]&&Nl(i),f=i[5];const d=p=>p[18].id;for(let p=0;p<f.length;p+=1){let g=Al(i,f,p),_=d(g);c.set(_,a[p]=Wl(_,g))}return{c(){u&&u.c(),e=fe(),t=V("h3"),r=Le(n),s=fe(),o=V("ul");for(let p=0;p<a.length;p+=1)a[p].c();L(t,"class","text-xl font-semibold mb-4 text-purple-300 border-b border-purple-600 pb-2"),L(o,"class","space-y-4")},m(p,g){u&&u.m(p,g),Te(p,e,g),Te(p,t,g),C(t,r),Te(p,s,g),Te(p,o,g);for(let _=0;_<a.length;_+=1)a[_]&&a[_].m(o,null);l=!0},p(p,g){p[1]?u?(u.p(p,g),g&2&&st(u,1)):(u=Nl(p),u.c(),st(u,1),u.m(e.parentNode,e)):u&&(Jn(),dt(u,1,1,()=>{u=null}),$n()),(!l||g&2)&&n!==(n=p[1]?"Discovered Tunnels":"All Tunnels")&&Ve(r,n),g&1056&&(f=p[5],Jn(),a=ec(a,g,d,1,p,f,c,o,Ql,Wl,null,Al),$n())},i(p){if(!l){st(u);for(let g=0;g<f.length;g+=1)st(a[g]);l=!0}},o(p){dt(u);for(let g=0;g<a.length;g+=1)dt(a[g]);l=!1},d(p){u&&u.d(p),p&&be(e),p&&be(t),p&&be(s),p&&be(o);for(let g=0;g<a.length;g+=1)a[g].d()}}}function h0(i){let e,t,n;return{c(){e=V("p"),t=Le("Error loading posts: "),n=Le(i[8]),L(e,"class","text-red-400 bg-red-900 p-3 rounded")},m(r,s){Te(r,e,s),C(e,t),C(e,n)},p(r,s){s&256&&Ve(n,r[8])},i:$e,o:$e,d(r){r&&be(e)}}}function p0(i){let e;return{c(){e=V("p"),e.textContent="Loading posts...",L(e,"class","text-gray-400")},m(t,n){Te(t,e,n)},p:$e,i:$e,o:$e,d(t){t&&be(e)}}}function Nl(i){let e,t,n=i[4]&&i[4].length>0&&Ol(i);return{c(){n&&n.c(),e=Yl()},m(r,s){n&&n.m(r,s),Te(r,e,s),t=!0},p(r,s){r[4]&&r[4].length>0?n?(n.p(r,s),s&16&&st(n,1)):(n=Ol(r),n.c(),st(n,1),n.m(e.parentNode,e)):n&&(Jn(),dt(n,1,1,()=>{n=null}),$n())},i(r){t||(st(n),t=!0)},o(r){dt(n),t=!1},d(r){n&&n.d(r),r&&be(e)}}}function Ol(i){let e,t,n,r,s=[],o=new Map,a,c=i[4];const l=u=>u[18].id;for(let u=0;u<c.length;u+=1){let f=Cl(i,c,u),d=l(f);o.set(d,s[u]=kl(d,f))}return{c(){e=V("div"),t=V("h3"),t.innerHTML=`Your Tunnels
                <span class="text-sm font-normal text-green-500 ml-2">(Easy access to manage your tunnels)</span>`,n=fe(),r=V("ul");for(let u=0;u<s.length;u+=1)s[u].c();L(t,"class","text-xl font-semibold mb-4 text-green-400 border-b border-green-600 pb-2"),L(r,"class","space-y-4"),L(e,"class","mb-6")},m(u,f){Te(u,e,f),C(e,t),C(e,n),C(e,r);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(r,null);a=!0},p(u,f){f&1040&&(c=u[4],Jn(),s=ec(s,f,l,1,u,c,o,r,Ql,kl,null,Cl),$n())},i(u){if(!a){for(let f=0;f<c.length;f+=1)st(s[f]);a=!0}},o(u){for(let f=0;f<s.length;f+=1)dt(s[f]);a=!1},d(u){u&&be(e);for(let f=0;f<s.length;f+=1)s[f].d()}}}function Fl(i){let e,t=i[18].description+"",n;return{c(){e=V("p"),n=Le(t),L(e,"class","mt-2 text-gray-300")},m(r,s){Te(r,e,s),C(e,n)},p(r,s){s&16&&t!==(t=r[18].description+"")&&Ve(n,t)},d(r){r&&be(e)}}}function Bl(i){let e,t,n,r=i[18].tags,s=[];for(let o=0;o<r.length;o+=1)s[o]=zl(Ll(i,r,o));return{c(){e=V("span"),e.textContent="•",t=fe(),n=V("div");for(let o=0;o<s.length;o+=1)s[o].c();L(e,"class","text-sm text-gray-400"),L(n,"class","flex flex-wrap gap-1")},m(o,a){Te(o,e,a),Te(o,t,a),Te(o,n,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(n,null)},p(o,a){if(a&1040){r=o[18].tags;let c;for(c=0;c<r.length;c+=1){const l=Ll(o,r,c);s[c]?s[c].p(l,a):(s[c]=zl(l),s[c].c(),s[c].m(n,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=r.length}},d(o){o&&be(e),o&&be(t),o&&be(n),$r(s,o)}}}function zl(i){let e,t=i[21]+"",n,r,s,o;function a(){return i[16](i[21])}return{c(){e=V("button"),n=Le(t),r=fe(),L(e,"class","inline-block bg-gray-600 hover:bg-purple-600 text-xs px-2.5 py-0.5 rounded-full text-white transition-colors")},m(c,l){Te(c,e,l),C(e,n),C(e,r),s||(o=rt(e,"click",a),s=!0)},p(c,l){i=c,l&16&&t!==(t=i[21]+"")&&Ve(n,t)},d(c){c&&be(e),s=!1,o()}}}function kl(i,e){let t,n,r,s=e[18].title+"",o,a,c,l,u,f,d,p=e[18].provider+"",g,_,m,h=e[18].tunnel_url+"",b,M,S,v,E,w,F,x=e[18].upvotes+"",R,Y,q,O,z,W=new Date(e[18].created_at).toLocaleDateString()+"",ee,Z,k,ne,X,pe,J,N,G=e[18].description&&Fl(e),te=e[18].tags&&e[18].tags.length>0&&Bl(e);return X=new nc({props:{post:e[18]}}),{key:i,first:null,c(){t=V("li"),n=V("div"),r=V("h3"),o=Le(s),a=fe(),c=V("div"),l=V("span"),f=fe(),d=V("span"),g=Le(p),_=fe(),m=V("a"),b=Le(h),S=fe(),G&&G.c(),v=fe(),E=V("div"),w=V("span"),F=Le("⬆️ "),R=Le(x),Y=fe(),q=V("span"),q.textContent="•",O=fe(),z=V("span"),ee=Le(W),Z=fe(),te&&te.c(),k=fe(),ne=V("div"),Oi(X.$$.fragment),pe=fe(),L(r,"class","text-xl font-bold text-purple-300"),L(l,"class",u=`inline-block w-3 h-3 rounded-full ${e[18].provider==="Pinggy"?"bg-purple-500":"bg-blue-500"}`),L(d,"class","text-sm text-gray-400"),L(c,"class","flex items-center space-x-2"),L(n,"class","flex justify-between"),L(m,"href",M=e[18].tunnel_url),L(m,"target","_blank"),L(m,"rel","noopener noreferrer"),L(m,"class","text-blue-400 hover:text-blue-300 underline break-all"),L(w,"class","text-sm text-gray-400"),L(q,"class","text-sm text-gray-400"),L(z,"class","text-sm text-gray-400"),L(E,"class","mt-3 flex flex-wrap items-center gap-2"),L(ne,"class","mt-3"),L(t,"id",J="post-"+e[18].id),L(t,"class","p-4 bg-gray-700 border-l-4 border-green-500 rounded-md shadow hover:bg-gray-650 transition-colors"),this.first=t},m(se,P){Te(se,t,P),C(t,n),C(n,r),C(r,o),C(n,a),C(n,c),C(c,l),C(c,f),C(c,d),C(d,g),C(t,_),C(t,m),C(m,b),C(t,S),G&&G.m(t,null),C(t,v),C(t,E),C(E,w),C(w,F),C(w,R),C(E,Y),C(E,q),C(E,O),C(E,z),C(z,ee),C(E,Z),te&&te.m(E,null),C(t,k),C(t,ne),Qn(X,ne,null),C(t,pe),N=!0},p(se,P){e=se,(!N||P&16)&&s!==(s=e[18].title+"")&&Ve(o,s),(!N||P&16&&u!==(u=`inline-block w-3 h-3 rounded-full ${e[18].provider==="Pinggy"?"bg-purple-500":"bg-blue-500"}`))&&L(l,"class",u),(!N||P&16)&&p!==(p=e[18].provider+"")&&Ve(g,p),(!N||P&16)&&h!==(h=e[18].tunnel_url+"")&&Ve(b,h),(!N||P&16&&M!==(M=e[18].tunnel_url))&&L(m,"href",M),e[18].description?G?G.p(e,P):(G=Fl(e),G.c(),G.m(t,v)):G&&(G.d(1),G=null),(!N||P&16)&&x!==(x=e[18].upvotes+"")&&Ve(R,x),(!N||P&16)&&W!==(W=new Date(e[18].created_at).toLocaleDateString()+"")&&Ve(ee,W),e[18].tags&&e[18].tags.length>0?te?te.p(e,P):(te=Bl(e),te.c(),te.m(E,null)):te&&(te.d(1),te=null);const we={};P&16&&(we.post=e[18]),X.$set(we),(!N||P&16&&J!==(J="post-"+e[18].id))&&L(t,"id",J)},i(se){N||(st(X.$$.fragment,se),N=!0)},o(se){dt(X.$$.fragment,se),N=!1},d(se){se&&be(t),G&&G.d(),te&&te.d(),ei(X)}}}function Gl(i){let e,t=i[18].description+"",n;return{c(){e=V("p"),n=Le(t),L(e,"class","mt-2 text-gray-300")},m(r,s){Te(r,e,s),C(e,n)},p(r,s){s&32&&t!==(t=r[18].description+"")&&Ve(n,t)},d(r){r&&be(e)}}}function Hl(i){let e,t,n,r=i[18].tags,s=[];for(let o=0;o<r.length;o+=1)s[o]=Vl(Rl(i,r,o));return{c(){e=V("span"),e.textContent="•",t=fe(),n=V("div");for(let o=0;o<s.length;o+=1)s[o].c();L(e,"class","text-sm text-gray-400"),L(n,"class","flex flex-wrap gap-1")},m(o,a){Te(o,e,a),Te(o,t,a),Te(o,n,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(n,null)},p(o,a){if(a&1056){r=o[18].tags;let c;for(c=0;c<r.length;c+=1){const l=Rl(o,r,c);s[c]?s[c].p(l,a):(s[c]=Vl(l),s[c].c(),s[c].m(n,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=r.length}},d(o){o&&be(e),o&&be(t),o&&be(n),$r(s,o)}}}function Vl(i){let e,t=i[21]+"",n,r,s,o;function a(){return i[17](i[21])}return{c(){e=V("button"),n=Le(t),r=fe(),L(e,"class","inline-block bg-gray-600 hover:bg-purple-600 text-xs px-2.5 py-0.5 rounded-full text-white transition-colors")},m(c,l){Te(c,e,l),C(e,n),C(e,r),s||(o=rt(e,"click",a),s=!0)},p(c,l){i=c,l&32&&t!==(t=i[21]+"")&&Ve(n,t)},d(c){c&&be(e),s=!1,o()}}}function Wl(i,e){let t,n,r,s=e[18].title+"",o,a,c,l,u,f,d,p=e[18].provider+"",g,_,m,h=e[18].tunnel_url+"",b,M,S,v,E,w,F,x=e[18].upvotes+"",R,Y,q,O,z,W=new Date(e[18].created_at).toLocaleDateString()+"",ee,Z,k,ne,X,pe,J,N,G=e[18].description&&Gl(e),te=e[18].tags&&e[18].tags.length>0&&Hl(e);return X=new nc({props:{post:e[18]}}),{key:i,first:null,c(){t=V("li"),n=V("div"),r=V("h3"),o=Le(s),a=fe(),c=V("div"),l=V("span"),f=fe(),d=V("span"),g=Le(p),_=fe(),m=V("a"),b=Le(h),S=fe(),G&&G.c(),v=fe(),E=V("div"),w=V("span"),F=Le("⬆️ "),R=Le(x),Y=fe(),q=V("span"),q.textContent="•",O=fe(),z=V("span"),ee=Le(W),Z=fe(),te&&te.c(),k=fe(),ne=V("div"),Oi(X.$$.fragment),pe=fe(),L(r,"class","text-xl font-bold text-purple-300"),L(l,"class",u=`inline-block w-3 h-3 rounded-full ${e[18].provider==="Pinggy"?"bg-purple-500":"bg-blue-500"}`),L(d,"class","text-sm text-gray-400"),L(c,"class","flex items-center space-x-2"),L(n,"class","flex justify-between"),L(m,"href",M=e[18].tunnel_url),L(m,"target","_blank"),L(m,"rel","noopener noreferrer"),L(m,"class","text-blue-400 hover:text-blue-300 underline break-all"),L(w,"class","text-sm text-gray-400"),L(q,"class","text-sm text-gray-400"),L(z,"class","text-sm text-gray-400"),L(E,"class","mt-3 flex flex-wrap items-center gap-2"),L(ne,"class","mt-3"),L(t,"id",J="post-"+e[18].id),L(t,"class","p-4 bg-gray-700 rounded-md shadow hover:bg-gray-650 transition-colors"),this.first=t},m(se,P){Te(se,t,P),C(t,n),C(n,r),C(r,o),C(n,a),C(n,c),C(c,l),C(c,f),C(c,d),C(d,g),C(t,_),C(t,m),C(m,b),C(t,S),G&&G.m(t,null),C(t,v),C(t,E),C(E,w),C(w,F),C(w,R),C(E,Y),C(E,q),C(E,O),C(E,z),C(z,ee),C(E,Z),te&&te.m(E,null),C(t,k),C(t,ne),Qn(X,ne,null),C(t,pe),N=!0},p(se,P){e=se,(!N||P&32)&&s!==(s=e[18].title+"")&&Ve(o,s),(!N||P&32&&u!==(u=`inline-block w-3 h-3 rounded-full ${e[18].provider==="Pinggy"?"bg-purple-500":"bg-blue-500"}`))&&L(l,"class",u),(!N||P&32)&&p!==(p=e[18].provider+"")&&Ve(g,p),(!N||P&32)&&h!==(h=e[18].tunnel_url+"")&&Ve(b,h),(!N||P&32&&M!==(M=e[18].tunnel_url))&&L(m,"href",M),e[18].description?G?G.p(e,P):(G=Gl(e),G.c(),G.m(t,v)):G&&(G.d(1),G=null),(!N||P&32)&&x!==(x=e[18].upvotes+"")&&Ve(R,x),(!N||P&32)&&W!==(W=new Date(e[18].created_at).toLocaleDateString()+"")&&Ve(ee,W),e[18].tags&&e[18].tags.length>0?te?te.p(e,P):(te=Hl(e),te.c(),te.m(E,null)):te&&(te.d(1),te=null);const we={};P&32&&(we.post=e[18]),X.$set(we),(!N||P&32&&J!==(J="post-"+e[18].id))&&L(t,"id",J)},i(se){N||(st(X.$$.fragment,se),N=!0)},o(se){dt(X.$$.fragment,se),N=!1},d(se){se&&be(t),G&&G.d(),te&&te.d(),ei(X)}}}function m0(i){let e,t,n,r=i[0]?"Try a different tag filter.":"Publish one to start the network!",s;return{c(){e=V("div"),t=V("p"),n=Le("No tunnels to display. "),s=Le(r),L(t,"class","text-gray-400"),L(e,"class","h-[600px] flex items-center justify-center")},m(o,a){Te(o,e,a),C(e,t),C(t,n),C(t,s)},p(o,a){a&1&&r!==(r=o[0]?"Try a different tag filter.":"Publish one to start the network!")&&Ve(s,r)},i:$e,o:$e,d(o){o&&be(e)}}}function g0(i){let e,t;return e=new l0({props:{height:"600px",selectedTag:i[0]}}),{c(){Oi(e.$$.fragment)},m(n,r){Qn(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.selectedTag=n[0]),e.$set(s)},i(n){t||(st(e.$$.fragment,n),t=!0)},o(n){dt(e.$$.fragment,n),t=!1},d(n){ei(e,n)}}}function _0(i){let e,t,n,r;return{c(){e=V("div"),t=V("p"),n=Le("Error loading network: "),r=Le(i[8]),L(t,"class","text-red-400"),L(e,"class","h-[600px] flex items-center justify-center")},m(s,o){Te(s,e,o),C(e,t),C(t,n),C(t,r)},p(s,o){o&256&&Ve(r,s[8])},i:$e,o:$e,d(s){s&&be(e)}}}function v0(i){let e;return{c(){e=V("div"),e.innerHTML='<p class="text-gray-400">Loading network...</p>',L(e,"class","h-[600px] flex items-center justify-center")},m(t,n){Te(t,e,n)},p:$e,i:$e,o:$e,d(t){t&&be(e)}}}function x0(i){let e,t,n,r,s,o,a,c,l,u,f,d,p,g,_,m,h,b,M,S,v,E,w,F,x,R,Y,q,O,z,W,ee,Z;s=new hu({}),a=new xu({});let k=i[6].length>0&&Dl(i);const ne=[u0,c0],X=[];function pe(J,N){return J[3]==="graph"?0:1}return R=pe(i),Y=X[R]=ne[R](i),{c(){e=V("main"),t=V("header"),t.innerHTML=`<h1 class="text-5xl font-bold text-purple-400">GhostNet</h1> 
    <p class="text-xl text-gray-300 mt-2">Discover and Share Anonymous GhostHub Tunnels</p>`,n=fe(),r=V("div"),Oi(s.$$.fragment),o=fe(),Oi(a.$$.fragment),c=fe(),l=V("div"),u=V("h2"),u.textContent="Tunnel Discovery",f=fe(),d=V("div"),p=V("button"),g=on("svg"),_=on("path"),m=Le(`\r
        Network`),b=fe(),M=V("button"),S=on("svg"),v=on("path"),E=Le(`\r
        List`),F=fe(),k&&k.c(),x=fe(),Y.c(),q=fe(),O=V("footer"),z=V("p"),z.textContent=`© ${i[9]} GhostNet. Not really copyrighted, it's all anonymous!`,L(t,"class","my-6 text-center"),L(r,"class","w-full max-w-2xl"),L(u,"class","text-2xl font-semibold text-purple-300"),L(_,"d","M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H5.5z"),L(g,"xmlns","http://www.w3.org/2000/svg"),L(g,"class","h-5 w-5 inline-block mr-1"),L(g,"viewBox","0 0 20 20"),L(g,"fill","currentColor"),L(p,"class",h=`px-4 py-2 rounded-lg ${i[3]==="graph"?"bg-purple-700 text-white":"bg-gray-700 text-gray-300"}`),L(v,"fill-rule","evenodd"),L(v,"d","M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"),L(v,"clip-rule","evenodd"),L(S,"xmlns","http://www.w3.org/2000/svg"),L(S,"class","h-5 w-5 inline-block mr-1"),L(S,"viewBox","0 0 20 20"),L(S,"fill","currentColor"),L(M,"class",w=`px-4 py-2 rounded-lg ${i[3]==="list"?"bg-purple-700 text-white":"bg-gray-700 text-gray-300"}`),L(d,"class","flex space-x-2"),L(l,"class","w-full max-w-5xl flex justify-between items-center mt-8 mb-4"),L(O,"class","text-gray-500 text-sm mt-auto py-4"),L(e,"class","bg-gray-900 text-white min-h-screen flex flex-col items-center p-4")},m(J,N){Te(J,e,N),C(e,t),C(e,n),C(e,r),Qn(s,r,null),C(r,o),Qn(a,r,null),C(e,c),C(e,l),C(l,u),C(l,f),C(l,d),C(d,p),C(p,g),C(g,_),C(p,m),C(d,b),C(d,M),C(M,S),C(S,v),C(M,E),C(e,F),k&&k.m(e,null),C(e,x),X[R].m(e,null),C(e,q),C(e,O),C(O,z),W=!0,ee||(Z=[rt(p,"click",i[12]),rt(M,"click",i[13])],ee=!0)},p(J,[N]){(!W||N&8&&h!==(h=`px-4 py-2 rounded-lg ${J[3]==="graph"?"bg-purple-700 text-white":"bg-gray-700 text-gray-300"}`))&&L(p,"class",h),(!W||N&8&&w!==(w=`px-4 py-2 rounded-lg ${J[3]==="list"?"bg-purple-700 text-white":"bg-gray-700 text-gray-300"}`))&&L(M,"class",w),J[6].length>0?k?k.p(J,N):(k=Dl(J),k.c(),k.m(e,x)):k&&(k.d(1),k=null);let G=R;R=pe(J),R===G?X[R].p(J,N):(Jn(),dt(X[G],1,1,()=>{X[G]=null}),$n(),Y=X[R],Y?Y.p(J,N):(Y=X[R]=ne[R](J),Y.c()),st(Y,1),Y.m(e,q))},i(J){W||(st(s.$$.fragment,J),st(a.$$.fragment,J),st(Y),W=!0)},o(J){dt(s.$$.fragment,J),dt(a.$$.fragment,J),dt(Y),W=!1},d(J){J&&be(e),ei(s),ei(a),k&&k.d(),X[R].d(),ee=!1,en(Z)}}}function M0(i,e,t){let n,r,s,o,a;cs(i,cn,v=>t(11,s=v)),cs(i,Yr,v=>t(7,o=v)),cs(i,jr,v=>t(8,a=v));let c=new Date().getFullYear(),l="graph",u="",f,d=[],p=[];ln.subscribe(v=>{t(1,f=v)}),Kl(async()=>{await Di()});function g(v){t(0,u=u===v?"":v)}const _=()=>t(3,l="graph"),m=()=>t(3,l="list"),h=v=>g(v),b=()=>t(0,u=""),M=v=>g(v),S=v=>g(v);return i.$$.update=()=>{i.$$.dirty&2048&&t(6,n=s?Array.from(new Set(s.flatMap(v=>v.tags||[]))).sort():[]),i.$$.dirty&2049&&t(2,r=u?s.filter(v=>v.tags&&v.tags.includes(u)):s),i.$$.dirty&6&&t(4,d=f?r.filter(v=>v.own_by_current_user===!0):[]),i.$$.dirty&6&&t(5,p=f?r.filter(v=>!v.own_by_current_user):r)},[u,f,r,l,d,p,n,o,a,c,g,s,_,m,h,b,M,S]}class S0 extends Vi{constructor(e){super(),Hi(this,e,M0,x0,ri,{})}}new S0({target:document.getElementById("app")});
