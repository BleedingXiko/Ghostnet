(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Je(){}function Gl(n){return n()}function ma(){return Object.create(null)}function en(n){n.forEach(Gl)}function Hr(n){return typeof n=="function"}function ri(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Vc(n){return Object.keys(n).length===0}function Hl(n,...e){if(n==null)return Je;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function zs(n){let e;return Hl(n,t=>e=t)(),e}function os(n,e,t){n.$$.on_destroy.push(Hl(e,t))}function C(n,e){n.appendChild(e)}function Me(n,e,t){n.insertBefore(e,t||null)}function ve(n){n.parentNode&&n.parentNode.removeChild(n)}function Zr(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function G(n){return document.createElement(n)}function on(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Ee(n){return document.createTextNode(n)}function le(){return Ee(" ")}function Vl(){return Ee("")}function rt(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function Wc(n){return function(e){return e.preventDefault(),n.call(this,e)}}function Xc(n){return function(e){e.target===this&&n.call(this,e)}}function L(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function qc(n){return Array.from(n.childNodes)}function ke(n,e){e=""+e,n.data!==e&&(n.data=e)}function bn(n,e){n.value=e??""}function ga(n,e,t,i){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}function _a(n,e,t){for(let i=0;i<n.options.length;i+=1){const r=n.options[i];if(r.__value===e){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Yc(n){const e=n.querySelector(":checked");return e&&e.__value}let rr;function $i(n){rr=n}function Wl(){if(!rr)throw new Error("Function called outside component initialization");return rr}function Xl(n){Wl().$$.on_mount.push(n)}function jc(n){Wl().$$.on_destroy.push(n)}const Ti=[],ks=[];let Ri=[];const va=[],ql=Promise.resolve();let Gs=!1;function Yl(){Gs||(Gs=!0,ql.then(jl))}function Kc(){return Yl(),ql}function Vr(n){Ri.push(n)}const ls=new Set;let si=0;function jl(){if(si!==0)return;const n=rr;do{try{for(;si<Ti.length;){const e=Ti[si];si++,$i(e),Zc(e.$$)}}catch(e){throw Ti.length=0,si=0,e}for($i(null),Ti.length=0,si=0;ks.length;)ks.pop()();for(let e=0;e<Ri.length;e+=1){const t=Ri[e];ls.has(t)||(ls.add(t),t())}Ri.length=0}while(Ti.length);for(;va.length;)va.pop()();Gs=!1,ls.clear(),$i(n)}function Zc(n){if(n.fragment!==null){n.update(),en(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Vr)}}function Jc(n){const e=[],t=[];Ri.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),Ri=e}const kr=new Set;let Xn;function $n(){Xn={r:0,c:[],p:Xn}}function Qn(){Xn.r||en(Xn.c),Xn=Xn.p}function st(n,e){n&&n.i&&(kr.delete(n),n.i(e))}function ht(n,e,t,i){if(n&&n.o){if(kr.has(n))return;kr.add(n),Xn.c.push(()=>{kr.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}function Kl(n,e){ht(n,1,1,()=>{e.delete(n.key)})}function Zl(n,e,t,i,r,s,a,o,c,l,u,f){let h=n.length,p=s.length,g=h;const _={};for(;g--;)_[n[g].key]=g;const m=[],d=new Map,w=new Map,S=[];for(g=p;g--;){const A=f(r,s,g),F=t(A);let v=a.get(F);v?i&&S.push(()=>v.p(A,e)):(v=l(F,A),v.c()),d.set(F,m[g]=v),F in _&&w.set(F,Math.abs(g-_[F]))}const y=new Set,x=new Set;function E(A){st(A,1),A.m(o,u),a.set(A.key,A),u=A.first,p--}for(;h&&p;){const A=m[p-1],F=n[h-1],v=A.key,R=F.key;A===F?(u=A.first,h--,p--):d.has(R)?!a.has(v)||y.has(v)?E(A):x.has(R)?h--:w.get(v)>w.get(R)?(x.add(v),E(A)):(y.add(R),h--):(c(F,a),h--)}for(;h--;){const A=n[h];d.has(A.key)||c(A,a)}for(;p;)E(m[p-1]);return en(S),m}function Ui(n){n&&n.c()}function ei(n,e,t,i){const{fragment:r,after_update:s}=n.$$;r&&r.m(e,t),i||Vr(()=>{const a=n.$$.on_mount.map(Gl).filter(Hr);n.$$.on_destroy?n.$$.on_destroy.push(...a):en(a),n.$$.on_mount=[]}),s.forEach(Vr)}function ti(n,e){const t=n.$$;t.fragment!==null&&(Jc(t.after_update),en(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function $c(n,e){n.$$.dirty[0]===-1&&(Ti.push(n),Yl(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function zi(n,e,t,i,r,s,a,o=[-1]){const c=rr;$i(n);const l=n.$$={fragment:null,ctx:[],props:s,update:Je,not_equal:r,bound:ma(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ma(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};a&&a(l.root);let u=!1;if(l.ctx=t?t(n,e.props||{},(f,h,...p)=>{const g=p.length?p[0]:h;return l.ctx&&r(l.ctx[f],l.ctx[f]=g)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](g),u&&$c(n,f)),h}):[],l.update(),u=!0,en(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const f=qc(e.target);l.fragment&&l.fragment.l(f),f.forEach(ve)}else l.fragment&&l.fragment.c();e.intro&&st(n.$$.fragment),ei(n,e.target,e.anchor,e.customElement),jl()}$i(c)}class ki{$destroy(){ti(this,1),this.$destroy=Je}$on(e,t){if(!Hr(t))return Je;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Vc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ai=[];function lr(n,e=Je){let t;const i=new Set;function r(o){if(ri(n,o)&&(n=o,t)){const c=!ai.length;for(const l of i)l[1](),ai.push(l,n);if(c){for(let l=0;l<ai.length;l+=2)ai[l][0](ai[l+1]);ai.length=0}}}function s(o){r(o(n))}function a(o,c=Je){const l=[o,c];return i.add(l),i.size===1&&(t=e(r)||Je),o(n),()=>{i.delete(l),i.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:a}}function Hs(n,e){return{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}[`VITE_${n}`]||e}function Qc(){return typeof window<"u"?`${window.location.origin}/api`:Hs("API_BASE_URL","http://localhost:5001/api")}const Wr={apiBaseUrl:Qc(),apiKeyStorageKey:Hs("API_KEY_STORAGE_KEY","ghostNetApiKey"),appName:Hs("APP_NAME","GhostNet")};async function fn(n,e,t=null,i=null){const r={method:n,headers:{"Content-Type":"application/json"}};i&&(r.headers.Authorization=`Bearer ${i}`),t&&(r.body=JSON.stringify(t));const s=await fetch(`${Wr.apiBaseUrl}${e}`,r),a=await s.json();if(!s.ok)throw new Error(a.error||`API request failed with status ${s.status}`);return a}const Dn={generateApiKey:async()=>fn("POST","/generate_key"),getPosts:async()=>fn("GET","/posts"),getMyPosts:async n=>fn("GET","/my_posts",null,n),publishPost:async(n,e)=>{const t=await fn("POST","/publish",n,e);return t&&(t.own_by_current_user=!0),t},updatePost:async(n,e,t)=>{const i=await fn("PUT",`/post/${n}`,e,t);return i&&(i.own_by_current_user=!0),i},deletePost:async(n,e)=>fn("DELETE",`/post/${n}`,null,e),votePost:async n=>fn("POST",`/vote/${n}`),checkLink:async n=>fn("GET",`/check_link/${n}`),checkAllLinks:async()=>fn("GET","/check_all_links")};function ta(){return typeof localStorage<"u"?localStorage.getItem(Wr.apiKeyStorageKey):null}function eu(){if(typeof localStorage<"u"){const n=localStorage.getItem("upvotedPosts");if(n)try{return JSON.parse(n)}catch(e){console.error("Error parsing upvoted posts:",e)}}return{}}const ln=lr(ta());ln.subscribe(n=>{typeof localStorage<"u"&&(n?localStorage.setItem(Wr.apiKeyStorageKey,n):localStorage.removeItem(Wr.apiKeyStorageKey))});const Gi=lr(eu());Gi.subscribe(n=>{typeof localStorage<"u"&&localStorage.setItem("upvotedPosts",JSON.stringify(n))});const cn=lr([]),Xr=lr(!1),qr=lr(null);async function Ci(){Xr.set(!0),qr.set(null);try{const n=await Dn.getPosts(),e=ta();if(e)try{const t=await Dn.getMyPosts(e),i=new Set(t.map(r=>r.id));n.forEach(r=>{r.own_by_current_user=i.has(r.id)})}catch(t){console.error("Error fetching user's posts:",t);const i=zs(cn),r=new Set;i&&i.length>0&&i.forEach(s=>{s.own_by_current_user===!0&&r.add(s.id)}),n.forEach(s=>{s.own_by_current_user=r.has(s.id)})}else n.forEach(t=>{t.own_by_current_user=!1});n.sort((t,i)=>i.upvotes!==t.upvotes?i.upvotes-t.upvotes:new Date(i.created_at)-new Date(t.created_at)),cn.set(n)}catch(n){console.error("Error fetching posts:",n),qr.set(n.message||"Failed to fetch posts")}finally{Xr.set(!1)}}function Jr(n){ta()&&n.own_by_current_user===void 0&&(n.own_by_current_user=!0),cn.update(t=>{const i=t.findIndex(r=>r.id===n.id);return i!==-1?(t[i]=n,[...t]):[n,...t]}),cn.update(t=>(t.sort((i,r)=>r.upvotes!==i.upvotes?r.upvotes-i.upvotes:new Date(r.created_at)-new Date(i.created_at)),[...t]))}function Jl(n){cn.update(e=>e.filter(t=>t.id!==n))}function tu(n,e){if(!e)return!1;let t=!1;return Gi.update(i=>(i[e]||(i[e]=[]),t=i[e].includes(n),i)),t}function na(n,e){e&&Gi.update(t=>(t[e]||(t[e]=[]),t[e].includes(n)||t[e].push(n),t))}const nu=Object.freeze(Object.defineProperty({__proto__:null,apiKey:ln,fetchPosts:Ci,hasUpvoted:tu,isLoadingPosts:Xr,markAsUpvoted:na,posts:cn,postsError:qr,removePostFromStore:Jl,upsertPostInStore:Jr,upvotedPosts:Gi},Symbol.toStringTag,{value:"Module"}));function iu(n){let e;return{c(){e=G("p"),e.textContent="You don't have an API Key set. Generate one or enter an existing key to publish and manage your posts.",L(e,"class","text-gray-400 mb-3")},m(t,i){Me(t,e,i)},p:Je,d(t){t&&ve(e)}}}function ru(n){let e,t,i,r,s,a;return{c(){e=G("p"),t=Ee("Current API Key: "),i=G("code"),r=Ee(n[0]),s=le(),a=G("p"),a.textContent="This key is used to publish and manage your posts. It's stored in your browser's local storage.",L(i,"class","bg-gray-700 p-1 rounded text-purple-300"),L(e,"class","text-sm text-gray-300 mb-1"),L(a,"class","text-xs text-gray-500 mb-3")},m(o,c){Me(o,e,c),C(e,t),C(e,i),C(i,r),Me(o,s,c),Me(o,a,c)},p(o,c){c&1&&ke(r,o[0])},d(o){o&&ve(e),o&&ve(s),o&&ve(a)}}}function su(n){let e;return{c(){e=Ee("Generate New Key")},m(t,i){Me(t,e,i)},d(t){t&&ve(e)}}}function au(n){let e;return{c(){e=Ee("Generating...")},m(t,i){Me(t,e,i)},d(t){t&&ve(e)}}}function xa(n){let e,t,i;return{c(){e=G("button"),e.textContent="Clear Key",L(e,"class","px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors duration-150 ease-in-out")},m(r,s){Me(r,e,s),t||(i=rt(e,"click",n[6]),t=!0)},p:Je,d(r){r&&ve(e),t=!1,i()}}}function Ma(n){let e,t;return{c(){e=G("p"),t=Ee(n[1]),L(e,"class","mt-3 text-sm text-green-400 bg-green-900 p-2 rounded")},m(i,r){Me(i,e,r),C(e,t)},p(i,r){r&2&&ke(t,i[1])},d(i){i&&ve(e)}}}function Sa(n){let e,t,i;return{c(){e=G("p"),t=Ee("Error: "),i=Ee(n[2]),L(e,"class","mt-3 text-sm text-red-400 bg-red-900 p-2 rounded")},m(r,s){Me(r,e,s),C(e,t),C(e,i)},p(r,s){s&4&&ke(i,r[2])},d(r){r&&ve(e)}}}function ou(n){let e,t,i,r,s,a,o,c,l,u,f,h,p;function g(A,F){return A[0]?ru:iu}let _=g(n),m=_(n);function d(A,F){return A[3]?au:su}let w=d(n),S=w(n),y=n[0]&&xa(n),x=n[1]&&Ma(n),E=n[2]&&Sa(n);return{c(){e=G("div"),t=G("h3"),t.textContent="API Key Management",i=le(),m.c(),r=le(),s=G("div"),a=G("button"),S.c(),o=le(),c=G("button"),c.textContent="Enter Existing Key",l=le(),y&&y.c(),u=le(),x&&x.c(),f=le(),E&&E.c(),L(t,"class","text-xl font-semibold mb-3 text-purple-300"),a.disabled=n[3],L(a,"class","px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md disabled:opacity-50 transition-colors duration-150 ease-in-out"),L(c,"class","px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-150 ease-in-out"),L(s,"class","flex flex-wrap gap-2"),L(e,"class","p-4 my-6 bg-gray-800 rounded-lg shadow-md")},m(A,F){Me(A,e,F),C(e,t),C(e,i),m.m(e,null),C(e,r),C(e,s),C(s,a),S.m(a,null),C(s,o),C(s,c),C(s,l),y&&y.m(s,null),C(e,u),x&&x.m(e,null),C(e,f),E&&E.m(e,null),h||(p=[rt(a,"click",n[4]),rt(c,"click",n[5])],h=!0)},p(A,[F]){_===(_=g(A))&&m?m.p(A,F):(m.d(1),m=_(A),m&&(m.c(),m.m(e,r))),w!==(w=d(A))&&(S.d(1),S=w(A),S&&(S.c(),S.m(a,null))),F&8&&(a.disabled=A[3]),A[0]?y?y.p(A,F):(y=xa(A),y.c(),y.m(s,null)):y&&(y.d(1),y=null),A[1]?x?x.p(A,F):(x=Ma(A),x.c(),x.m(e,f)):x&&(x.d(1),x=null),A[2]?E?E.p(A,F):(E=Sa(A),E.c(),E.m(e,null)):E&&(E.d(1),E=null)},i:Je,o:Je,d(A){A&&ve(e),m.d(),S.d(),y&&y.d(),x&&x.d(),E&&E.d(),h=!1,en(p)}}}function lu(n,e,t){let i="",r="",s="",a=!1;ln.subscribe(u=>{t(0,i=u||"")});async function o(){t(3,a=!0),t(1,r=""),t(2,s="");try{const u=await Dn.generateApiKey();ln.set(u.api_key),await Ci(),t(1,r=`New API Key generated and automatically applied. Key: ${u.api_key}`)}catch(u){console.error("Error generating API key:",u),t(2,s=u.message||"Failed to generate API key.")}finally{t(3,a=!1)}}async function c(){const u=prompt("Enter your existing API Key:");if(u&&u.trim()!==""){ln.set(u.trim()),t(1,r="API Key updated."),t(2,s="");try{t(3,a=!0),await Ci()}catch(f){console.error("Error refreshing posts:",f)}finally{t(3,a=!1)}}else u!==null&&(t(2,s="API Key cannot be empty."),t(1,r=""))}async function l(){if(confirm("Are you sure you want to clear your API Key? You won't be able to manage your posts.")){ln.set(null),t(1,r="API Key cleared."),t(2,s="");try{t(3,a=!0),await Ci()}catch(u){console.error("Error refreshing posts:",u)}finally{t(3,a=!1)}}}return[i,r,s,a,o,c,l]}class cu extends ki{constructor(e){super(),zi(this,e,lu,ou,ri,{})}}function ya(n){let e;return{c(){e=G("div"),e.innerHTML="<p>You need an API key to publish. Please generate one in the API Key Management section.</p>",L(e,"class","bg-amber-900 text-amber-100 p-3 rounded mb-4")},m(t,i){Me(t,e,i)},d(t){t&&ve(e)}}}function Ea(n){let e,t=n[1].tunnel_url+"",i;return{c(){e=G("p"),i=Ee(t),L(e,"class","mt-1 text-sm text-red-400")},m(r,s){Me(r,e,s),C(e,i)},p(r,s){s&2&&t!==(t=r[1].tunnel_url+"")&&ke(i,t)},d(r){r&&ve(e)}}}function ba(n){let e,t=n[1].title+"",i;return{c(){e=G("p"),i=Ee(t),L(e,"class","mt-1 text-sm text-red-400")},m(r,s){Me(r,e,s),C(e,i)},p(r,s){s&2&&t!==(t=r[1].title+"")&&ke(i,t)},d(r){r&&ve(e)}}}function Ta(n){let e,t=n[1].description+"",i;return{c(){e=G("p"),i=Ee(t),L(e,"class","mt-1 text-sm text-red-400")},m(r,s){Me(r,e,s),C(e,i)},p(r,s){s&2&&t!==(t=r[1].description+"")&&ke(i,t)},d(r){r&&ve(e)}}}function wa(n){let e,t=n[1].api+"",i;return{c(){e=G("p"),i=Ee(t),L(e,"class","mt-1 text-sm text-red-400 bg-red-900 p-2 rounded")},m(r,s){Me(r,e,s),C(e,i)},p(r,s){s&2&&t!==(t=r[1].api+"")&&ke(i,t)},d(r){r&&ve(e)}}}function Aa(n){let e,t;return{c(){e=G("p"),t=Ee(n[3]),L(e,"class","mt-1 text-sm text-green-400 bg-green-900 p-2 rounded")},m(i,r){Me(i,e,r),C(e,t)},p(i,r){r&8&&ke(t,i[3])},d(i){i&&ve(e)}}}function uu(n){let e;return{c(){e=Ee("Publish Tunnel")},m(t,i){Me(t,e,i)},d(t){t&&ve(e)}}}function fu(n){let e;return{c(){e=Ee("Publishing...")},m(t,i){Me(t,e,i)},d(t){t&&ve(e)}}}function hu(n){let e,t,i,r,s,a,o,c,l,u,f,h,p,g,_,m,d,w,S,y,x,E,A,F,v,R,X,j,N,O,W,ie,K,V,Q,q,fe,Z,I,k,ne,se,P,Se,be,ce,ge=!n[4]&&ya(),Pe=n[1].tunnel_url&&Ea(n),de=n[1].title&&ba(n),ye=n[1].description&&Ta(n),De=n[1].api&&wa(n),Ue=n[3]&&Aa(n);function Ge(H,pe){return H[2]?fu:uu}let Be=Ge(n),Fe=Be(n);return{c(){e=G("div"),t=G("h3"),t.textContent="Publish Ghost Tunnel",i=le(),ge&&ge.c(),r=le(),s=G("form"),a=G("div"),o=G("label"),o.textContent="Tunnel URL*",c=le(),l=G("input"),f=le(),Pe&&Pe.c(),h=le(),p=G("div"),g=G("label"),g.textContent="Title*",_=le(),m=G("input"),w=le(),de&&de.c(),S=le(),y=G("div"),x=G("label"),x.textContent="Description",E=le(),A=G("textarea"),v=le(),ye&&ye.c(),R=le(),X=G("div"),j=G("label"),j.textContent="Tags (comma-separated)",N=le(),O=G("input"),W=le(),ie=G("p"),ie.textContent="Tags help organize tunnels. Separate with commas.",K=le(),V=G("div"),Q=G("label"),Q.textContent="Tunnel Provider*",q=le(),fe=G("select"),Z=G("option"),Z.textContent="Pinggy",I=G("option"),I.textContent="Cloudflare",k=le(),De&&De.c(),ne=le(),Ue&&Ue.c(),se=le(),P=G("button"),Fe.c(),L(t,"class","text-xl font-semibold mb-3 text-purple-300"),L(o,"for","tunnel_url"),L(o,"class","block text-sm font-medium text-gray-300 mb-1"),L(l,"type","text"),L(l,"id","tunnel_url"),L(l,"class",u="w-full px-3 py-2 bg-gray-700 border "+(n[1].tunnel_url?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"),L(l,"placeholder","https://your-ghosthub.pinggy.link"),L(g,"for","title"),L(g,"class","block text-sm font-medium text-gray-300 mb-1"),L(m,"type","text"),L(m,"id","title"),L(m,"class",d="w-full px-3 py-2 bg-gray-700 border "+(n[1].title?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"),L(m,"placeholder","My Awesome GhostHub Collection"),L(x,"for","description"),L(x,"class","block text-sm font-medium text-gray-300 mb-1"),L(A,"id","description"),L(A,"class",F="w-full px-3 py-2 bg-gray-700 border "+(n[1].description?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"),L(A,"placeholder","Describe your GhostHub tunnel (optional)"),L(A,"rows","3"),L(j,"for","tags"),L(j,"class","block text-sm font-medium text-gray-300 mb-1"),L(O,"type","text"),L(O,"id","tags"),L(O,"class","w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"),L(O,"placeholder","movies, anime, photos, family"),L(ie,"class","mt-1 text-xs text-gray-500"),L(Q,"for","provider"),L(Q,"class","block text-sm font-medium text-gray-300 mb-1"),Z.__value="Pinggy",Z.value=Z.__value,I.__value="Cloudflare",I.value=I.__value,L(fe,"id","provider"),L(fe,"class","w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"),n[0].provider===void 0&&Vr(()=>n[10].call(fe)),L(P,"type","submit"),P.disabled=Se=n[2]||!n[4],L(P,"class","w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md disabled:opacity-50 transition-colors duration-150 ease-in-out"),L(s,"class","space-y-4"),L(e,"class","p-4 my-6 bg-gray-800 rounded-lg shadow-md")},m(H,pe){Me(H,e,pe),C(e,t),C(e,i),ge&&ge.m(e,null),C(e,r),C(e,s),C(s,a),C(a,o),C(a,c),C(a,l),bn(l,n[0].tunnel_url),C(a,f),Pe&&Pe.m(a,null),C(s,h),C(s,p),C(p,g),C(p,_),C(p,m),bn(m,n[0].title),C(p,w),de&&de.m(p,null),C(s,S),C(s,y),C(y,x),C(y,E),C(y,A),bn(A,n[0].description),C(y,v),ye&&ye.m(y,null),C(s,R),C(s,X),C(X,j),C(X,N),C(X,O),bn(O,n[0].tags),C(X,W),C(X,ie),C(s,K),C(s,V),C(V,Q),C(V,q),C(V,fe),C(fe,Z),C(fe,I),_a(fe,n[0].provider,!0),C(s,k),De&&De.m(s,null),C(s,ne),Ue&&Ue.m(s,null),C(s,se),C(s,P),Fe.m(P,null),be||(ce=[rt(l,"input",n[6]),rt(m,"input",n[7]),rt(A,"input",n[8]),rt(O,"input",n[9]),rt(fe,"change",n[10]),rt(s,"submit",Wc(n[5]))],be=!0)},p(H,[pe]){H[4]?ge&&(ge.d(1),ge=null):ge||(ge=ya(),ge.c(),ge.m(e,r)),pe&2&&u!==(u="w-full px-3 py-2 bg-gray-700 border "+(H[1].tunnel_url?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500")&&L(l,"class",u),pe&1&&l.value!==H[0].tunnel_url&&bn(l,H[0].tunnel_url),H[1].tunnel_url?Pe?Pe.p(H,pe):(Pe=Ea(H),Pe.c(),Pe.m(a,null)):Pe&&(Pe.d(1),Pe=null),pe&2&&d!==(d="w-full px-3 py-2 bg-gray-700 border "+(H[1].title?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500")&&L(m,"class",d),pe&1&&m.value!==H[0].title&&bn(m,H[0].title),H[1].title?de?de.p(H,pe):(de=ba(H),de.c(),de.m(p,null)):de&&(de.d(1),de=null),pe&2&&F!==(F="w-full px-3 py-2 bg-gray-700 border "+(H[1].description?"border-red-500":"border-gray-600")+" rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500")&&L(A,"class",F),pe&1&&bn(A,H[0].description),H[1].description?ye?ye.p(H,pe):(ye=Ta(H),ye.c(),ye.m(y,null)):ye&&(ye.d(1),ye=null),pe&1&&O.value!==H[0].tags&&bn(O,H[0].tags),pe&1&&_a(fe,H[0].provider),H[1].api?De?De.p(H,pe):(De=wa(H),De.c(),De.m(s,ne)):De&&(De.d(1),De=null),H[3]?Ue?Ue.p(H,pe):(Ue=Aa(H),Ue.c(),Ue.m(s,se)):Ue&&(Ue.d(1),Ue=null),Be!==(Be=Ge(H))&&(Fe.d(1),Fe=Be(H),Fe&&(Fe.c(),Fe.m(P,null))),pe&20&&Se!==(Se=H[2]||!H[4])&&(P.disabled=Se)},i:Je,o:Je,d(H){H&&ve(e),ge&&ge.d(),Pe&&Pe.d(),de&&de.d(),ye&&ye.d(),De&&De.d(),Ue&&Ue.d(),Fe.d(),be=!1,en(ce)}}}function du(n){try{return new URL(n),!0}catch{return!1}}function pu(n,e,t){let i={tunnel_url:"",title:"",description:"",tags:"",provider:"Pinggy"},r={},s=!1,a="",o;ln.subscribe(_=>{t(4,o=_)});function c(){return t(1,r={}),i.tunnel_url?du(i.tunnel_url)||t(1,r.tunnel_url="Please enter a valid URL",r):t(1,r.tunnel_url="Tunnel URL is required",r),i.title?i.title.length>100&&t(1,r.title="Title must be less than 100 characters",r):t(1,r.title="Title is required",r),i.description&&i.description.length>500&&t(1,r.description="Description must be less than 500 characters",r),Object.keys(r).length===0}async function l(){if(!o){t(1,r.api="API key is required to publish. Please generate or enter one.",r);return}if(c()){t(2,s=!0),t(3,a=""),t(1,r={});try{const _={...i,tags:i.tags.split(",").map(d=>d.trim()).filter(d=>d)},m=await Dn.publishPost(_,o);Jr(m),t(0,i={tunnel_url:"",title:"",description:"",tags:"",provider:"Pinggy"}),t(3,a="Ghost tunnel published successfully!")}catch(_){console.error("Error publishing post:",_),t(1,r.api=_.message||"Failed to publish tunnel. Please try again.",r)}finally{t(2,s=!1)}}}function u(){i.tunnel_url=this.value,t(0,i)}function f(){i.title=this.value,t(0,i)}function h(){i.description=this.value,t(0,i)}function p(){i.tags=this.value,t(0,i)}function g(){i.provider=Yc(this),t(0,i)}return[i,r,s,a,o,l,u,f,h,p,g]}class mu extends ki{constructor(e){super(),zi(this,e,pu,hu,ri,{})}}function Ra(n){let e,t,i,r,s,a;return{c(){e=G("button"),t=on("svg"),i=on("path"),r=Ee(`\r
      Delete`),L(i,"stroke-linecap","round"),L(i,"stroke-linejoin","round"),L(i,"stroke-width","2"),L(i,"d","M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"),L(t,"xmlns","http://www.w3.org/2000/svg"),L(t,"class","h-4 w-4"),L(t,"fill","none"),L(t,"viewBox","0 0 24 24"),L(t,"stroke","currentColor"),e.disabled=n[2],L(e,"class","flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors duration-150 ease-in-out disabled:opacity-50")},m(o,c){Me(o,e,c),C(e,t),C(t,i),C(e,r),s||(a=rt(e,"click",n[9]),s=!0)},p(o,c){c&4&&(e.disabled=o[2])},d(o){o&&ve(e),s=!1,a()}}}function Ca(n){let e,t;return{c(){e=G("p"),t=Ee(n[3]),L(e,"class","text-sm text-red-400")},m(i,r){Me(i,e,r),C(e,t)},p(i,r){r&8&&ke(t,i[3])},d(i){i&&ve(e)}}}function La(n){let e,t;return{c(){e=G("p"),t=Ee(n[4]),L(e,"class","text-sm text-green-400")},m(i,r){Me(i,e,r),C(e,t)},p(i,r){r&16&&ke(t,i[4])},d(i){i&&ve(e)}}}function gu(n){let e,t,i,r,s,a=n[6]?"Upvoted":"Upvote",o,c,l=n[0].upvotes>0?`(${n[0].upvotes})`:"",u,f,h,p,g,_,m,d,w,S=n[7]&&!n[5]&&Ra(n),y=n[3]&&Ca(n),x=n[4]&&La(n);return{c(){e=G("div"),t=G("button"),i=on("svg"),r=on("path"),s=le(),o=Ee(a),c=le(),u=Ee(l),g=le(),S&&S.c(),_=le(),y&&y.c(),m=le(),x&&x.c(),L(r,"stroke-linecap","round"),L(r,"stroke-linejoin","round"),L(r,"stroke-width","2"),L(r,"d","M5 15l7-7 7 7"),L(i,"xmlns","http://www.w3.org/2000/svg"),L(i,"class","h-4 w-4"),L(i,"fill","none"),L(i,"viewBox","0 0 24 24"),L(i,"stroke","currentColor"),t.disabled=f=n[1]||n[6],L(t,"title",h=n[6]?"You've already upvoted this post":"Upvote this post"),L(t,"class",p="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded transition-colors duration-150 ease-in-out "+(n[6]?"bg-purple-800 text-purple-200 cursor-not-allowed":"bg-purple-600 hover:bg-purple-700 text-white")+" disabled:opacity-50"),L(e,"class","mt-3 flex flex-wrap items-center gap-2")},m(E,A){Me(E,e,A),C(e,t),C(t,i),C(i,r),C(t,s),C(t,o),C(t,c),C(t,u),C(e,g),S&&S.m(e,null),C(e,_),y&&y.m(e,null),C(e,m),x&&x.m(e,null),d||(w=rt(t,"click",n[8]),d=!0)},p(E,[A]){A&64&&a!==(a=E[6]?"Upvoted":"Upvote")&&ke(o,a),A&1&&l!==(l=E[0].upvotes>0?`(${E[0].upvotes})`:"")&&ke(u,l),A&66&&f!==(f=E[1]||E[6])&&(t.disabled=f),A&64&&h!==(h=E[6]?"You've already upvoted this post":"Upvote this post")&&L(t,"title",h),A&64&&p!==(p="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded transition-colors duration-150 ease-in-out "+(E[6]?"bg-purple-800 text-purple-200 cursor-not-allowed":"bg-purple-600 hover:bg-purple-700 text-white")+" disabled:opacity-50")&&L(t,"class",p),E[7]&&!E[5]?S?S.p(E,A):(S=Ra(E),S.c(),S.m(e,_)):S&&(S.d(1),S=null),E[3]?y?y.p(E,A):(y=Ca(E),y.c(),y.m(e,m)):y&&(y.d(1),y=null),E[4]?x?x.p(E,A):(x=La(E),x.c(),x.m(e,null)):x&&(x.d(1),x=null)},i:Je,o:Je,d(E){E&&ve(e),S&&S.d(),y&&y.d(),x&&x.d(),d=!1,w()}}}function _u(n,e,t){let i,r,{post:s}=e,a=!1,o=!1,c="",l="",u=!1,f;ln.subscribe(_=>{t(10,f=_)});let h;Gi.subscribe(_=>{t(11,h=_)});async function p(){if(!(a||!f||r)){t(1,a=!0),t(3,c="");try{const _=await Dn.votePost(s.id);_.own_by_current_user=s.own_by_current_user,Jr(_),na(s.id,f)}catch(_){console.error("Error upvoting post:",_),t(3,c=_.message||"Failed to upvote post")}finally{t(1,a=!1)}}}async function g(){if(!f){t(3,c="You need an API key to delete posts");return}if(confirm(`Are you sure you want to delete "${s.title}"?`)){t(2,o=!0),t(3,c=""),t(5,u=!0);try{await Dn.deletePost(s.id,f),Jl(s.id),t(4,l="Post deleted successfully")}catch(_){console.error("Error deleting post:",_),t(3,c=_.message||"Failed to delete post"),_.message&&_.message.includes("Forbidden")&&(t(0,s.own_by_current_user=!1,s),await Ci())}finally{t(2,o=!1)}}}return n.$$set=_=>{"post"in _&&t(0,s=_.post)},n.$$.update=()=>{n.$$.dirty&1025&&t(7,i=s&&s.own_by_current_user===!0&&f),n.$$.dirty&3073&&t(6,r=f&&h&&h[f]&&h[f].includes(s.id))},[s,a,o,c,l,u,r,i,p,g,f,h]}class $l extends ki{constructor(e){super(),zi(this,e,_u,gu,ri,{post:0})}}const vu="modulepreload",xu=function(n){return"/"+n},Pa={},Mu=function(e,t,i){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=xu(s),s in Pa)return;Pa[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":vu,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="152",Su=0,Da=1,yu=2,Ql=1,Eu=2,vn=3,Un=0,Dt=1,Zt=2,Pn=0,Li=1,Ua=2,Ia=3,Na=4,bu=5,wi=100,Tu=101,wu=102,Fa=103,Oa=104,Au=200,Ru=201,Cu=202,Lu=203,ec=204,tc=205,Pu=206,Du=207,Uu=208,Iu=209,Nu=210,Fu=0,Ou=1,Bu=2,Vs=3,zu=4,ku=5,Gu=6,Hu=7,nc=0,Vu=1,Wu=2,Sn=0,Xu=1,qu=2,Yu=3,ju=4,Ku=5,ic=300,Ii=301,Ni=302,Ws=303,Xs=304,$r=306,qs=1e3,Jt=1001,Ys=1002,Ct=1003,Ba=1004,cs=1005,zt=1006,Zu=1007,sr=1008,ni=1009,Ju=1010,$u=1011,rc=1012,Qu=1013,qn=1014,Yn=1015,ar=1016,ef=1017,tf=1018,Pi=1020,nf=1021,$t=1023,rf=1024,sf=1025,jn=1026,Fi=1027,af=1028,of=1029,lf=1030,cf=1031,uf=1033,us=33776,fs=33777,hs=33778,ds=33779,za=35840,ka=35841,Ga=35842,Ha=35843,ff=36196,Va=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,ja=37811,Ka=37812,Za=37813,Ja=37814,$a=37815,Qa=37816,eo=37817,to=37818,no=37819,io=37820,ro=37821,ps=36492,hf=36283,so=36284,ao=36285,oo=36286,sc=3e3,Kn=3001,df=3200,pf=3201,mf=0,gf=1,Zn="",ze="srgb",un="srgb-linear",ac="display-p3",ms=7680,_f=519,js=35044,lo="300 es",Ks=1035;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let co=1234567;const Qi=Math.PI/180,or=180/Math.PI;function yn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function ra(n,e){return(n%e+e)%e}function vf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function xf(n,e,t){return n!==e?(t-n)/(e-n):0}function er(n,e,t){return(1-t)*n+t*e}function Mf(n,e,t,i){return er(n,e,1-Math.exp(-t*i))}function Sf(n,e=1){return e-Math.abs(ra(n,e*2)-e)}function yf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ef(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function bf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Tf(n,e){return n+Math.random()*(e-n)}function wf(n){return n*(.5-Math.random())}function Af(n){n!==void 0&&(co=n);let e=co+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rf(n){return n*Qi}function Cf(n){return n*or}function Zs(n){return(n&n-1)===0&&n!==0}function Lf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*f,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*f,o*l);break;case"ZXZ":n.set(c*f,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Df={DEG2RAD:Qi,RAD2DEG:or,generateUUID:yn,clamp:Et,euclideanModulo:ra,mapLinear:vf,inverseLerp:xf,lerp:er,damp:Mf,pingpong:Sf,smoothstep:yf,smootherstep:Ef,randInt:bf,randFloat:Tf,randFloatSpread:wf,seededRandom:Af,degToRad:Rf,radToDeg:Cf,isPowerOfTwo:Zs,ceilPowerOfTwo:Lf,floorPowerOfTwo:oc,setQuaternionFromProperEuler:Pf,normalize:it,denormalize:xn};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],w=r[1],S=r[4],y=r[7],x=r[2],E=r[5],A=r[8];return s[0]=a*_+o*w+c*x,s[3]=a*m+o*S+c*E,s[6]=a*d+o*y+c*A,s[1]=l*_+u*w+f*x,s[4]=l*m+u*S+f*E,s[7]=l*d+u*y+f*A,s[2]=h*_+p*w+g*x,s[5]=h*m+p*S+g*E,s[8]=h*d+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,p=l*s-a*c,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gs.makeScale(e,t)),this}rotate(e){return this.premultiply(gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(gs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gs=new Ye;function lc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const uo={};function tr(n){n in uo||(uo[n]=!0,console.warn(n))}function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Uf=new Ye().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),If=new Ye().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Nf(n){return n.convertSRGBToLinear().applyMatrix3(If)}function Ff(n){return n.applyMatrix3(Uf).convertLinearToSRGB()}const Of={[un]:n=>n,[ze]:n=>n.convertSRGBToLinear(),[ac]:Nf},Bf={[un]:n=>n,[ze]:n=>n.convertLinearToSRGB(),[ac]:Ff},Wt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return un},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Of[e],r=Bf[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let oi;class cc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=Yr("canvas")),oi.width=e.width,oi.height=e.height;const i=oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Di(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class uc{constructor(e=null){this.isSource=!0,this.uuid=yn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(vs(r[a].image)):s.push(vs(r[a]))}else s=vs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function vs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zf=0;class Ft extends Hi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Jt,r=Jt,s=zt,a=sr,o=$t,c=ni,l=Ft.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=yn(),this.name="",this.source=new uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Kn?ze:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?Kn:sc}set encoding(e){tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kn?ze:Zn}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=ic;Ft.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,y=(p+1)/2,x=(d+1)/2,E=(u+h)/4,A=(f+_)/4,F=(g+m)/4;return S>y&&S>x?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=E/i,s=A/i):y>x?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=F/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=A/s,r=F/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-_)/w,this.z=(h-u)/w,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ii extends Hi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Kn?ze:Zn),this.texture=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:zt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fc extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kf extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==h||l!==p||u!==g){let m=1-o;const d=c*h+l*p+u*g+f*_,w=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const x=Math.sqrt(S),E=Math.atan2(x,d*w);m=Math.sin(m*E)/x,o=Math.sin(o*E)/x}const y=o*w;if(c=c*m+h*y,l=l*m+p*y,u=u*m+g*y,f=f*m+_*y,m===1-o){const x=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=x,l*=x,u*=x,f*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*p-l*h,e[t+1]=c*g+u*h+l*f-o*p,e[t+2]=l*g+u*p+o*h-c*f,e[t+3]=u*g-o*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*r-o*i,u=c*i+o*t-s*r,f=c*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=l*c+h*-s+u*-o-f*-a,this.y=u*c+h*-a+f*-s-l*-o,this.z=f*c+h*-o+l*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xs.copy(this).projectOnVector(e),this.sub(xs)}reflect(e){return this.sub(xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xs=new U,fo=new cr;class Nn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),li.copy(e.boundingBox),li.applyMatrix4(e.matrixWorld),this.union(li);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)dn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(dn)}else r.boundingBox===null&&r.computeBoundingBox(),li.copy(r.boundingBox),li.applyMatrix4(e.matrixWorld),this.union(li)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),dr.subVectors(this.max,qi),ci.subVectors(e.a,qi),ui.subVectors(e.b,qi),fi.subVectors(e.c,qi),Tn.subVectors(ui,ci),wn.subVectors(fi,ui),zn.subVectors(ci,fi);let t=[0,-Tn.z,Tn.y,0,-wn.z,wn.y,0,-zn.z,zn.y,Tn.z,0,-Tn.x,wn.z,0,-wn.x,zn.z,0,-zn.x,-Tn.y,Tn.x,0,-wn.y,wn.x,0,-zn.y,zn.x,0];return!Ms(t,ci,ui,fi,dr)||(t=[1,0,0,0,1,0,0,0,1],!Ms(t,ci,ui,fi,dr))?!1:(pr.crossVectors(Tn,wn),t=[pr.x,pr.y,pr.z],Ms(t,ci,ui,fi,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new U,new U,new U,new U,new U,new U,new U,new U],dn=new U,li=new Nn,ci=new U,ui=new U,fi=new U,Tn=new U,wn=new U,zn=new U,qi=new U,dr=new U,pr=new U,kn=new U;function Ms(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){kn.fromArray(n,s);const o=r.x*Math.abs(kn.x)+r.y*Math.abs(kn.y)+r.z*Math.abs(kn.z),c=e.dot(kn),l=t.dot(kn),u=i.dot(kn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Gf=new Nn,Yi=new U,Ss=new U;class Vi{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Yi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(Ss)),this.expandByPoint(Yi.copy(e.center).sub(Ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new U,ys=new U,mr=new U,An=new U,Es=new U,gr=new U,bs=new U;class sa{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ys.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),An.copy(this.origin).sub(ys);const s=e.distanceTo(t)*.5,a=-this.direction.dot(mr),o=An.dot(this.direction),c=-An.dot(mr),l=An.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*c-o,h=a*o-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ys).addScaledVector(mr,h),p}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const i=pn.dot(this.direction),r=pn.dot(pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,i,r,s){Es.subVectors(t,e),gr.subVectors(i,e),bs.crossVectors(Es,gr);let a=this.direction.dot(bs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const c=o*this.direction.dot(gr.crossVectors(An,gr));if(c<0)return null;const l=o*this.direction.dot(Es.cross(An));if(l<0||c+l>a)return null;const u=-o*An.dot(bs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,c,l,u,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/hi.setFromMatrixColumn(e,0).length(),s=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,p=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*f,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+_,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hf,e,Vf)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Rn.crossVectors(i,It),Rn.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Rn.crossVectors(i,It)),Rn.normalize(),_r.crossVectors(It,Rn),r[0]=Rn.x,r[4]=_r.x,r[8]=It.x,r[1]=Rn.y,r[5]=_r.y,r[9]=It.y,r[2]=Rn.z,r[6]=_r.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],w=i[3],S=i[7],y=i[11],x=i[15],E=r[0],A=r[4],F=r[8],v=r[12],R=r[1],X=r[5],j=r[9],N=r[13],O=r[2],W=r[6],ie=r[10],K=r[14],V=r[3],Q=r[7],q=r[11],fe=r[15];return s[0]=a*E+o*R+c*O+l*V,s[4]=a*A+o*X+c*W+l*Q,s[8]=a*F+o*j+c*ie+l*q,s[12]=a*v+o*N+c*K+l*fe,s[1]=u*E+f*R+h*O+p*V,s[5]=u*A+f*X+h*W+p*Q,s[9]=u*F+f*j+h*ie+p*q,s[13]=u*v+f*N+h*K+p*fe,s[2]=g*E+_*R+m*O+d*V,s[6]=g*A+_*X+m*W+d*Q,s[10]=g*F+_*j+m*ie+d*q,s[14]=g*v+_*N+m*K+d*fe,s[3]=w*E+S*R+y*O+x*V,s[7]=w*A+S*X+y*W+x*Q,s[11]=w*F+S*j+y*ie+x*q,s[15]=w*v+S*N+y*K+x*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*c*f-r*l*f-s*o*h+i*l*h+r*o*p-i*c*p)+_*(+t*c*p-t*l*h+s*a*h-r*a*p+r*l*u-s*c*u)+m*(+t*l*f-t*o*p-s*a*f+i*a*p+s*o*u-i*l*u)+d*(-r*o*u-t*c*f+t*o*h+r*a*f-i*a*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],w=f*m*l-_*h*l+_*c*p-o*m*p-f*c*d+o*h*d,S=g*h*l-u*m*l-g*c*p+a*m*p+u*c*d-a*h*d,y=u*_*l-g*f*l+g*o*p-a*_*p-u*o*d+a*f*d,x=g*f*c-u*_*c-g*o*h+a*_*h+u*o*m-a*f*m,E=t*w+i*S+r*y+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=w*A,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*A,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*d+i*c*d)*A,e[3]=(f*c*s-o*h*s-f*r*l+i*h*l+o*r*p-i*c*p)*A,e[4]=S*A,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*d+t*h*d)*A,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*d-t*c*d)*A,e[7]=(a*h*s-u*c*s+u*r*l-t*h*l-a*r*p+t*c*p)*A,e[8]=y*A,e[9]=(g*f*s-u*_*s-g*i*p+t*_*p+u*i*d-t*f*d)*A,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*d+t*o*d)*A,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*p-t*o*p)*A,e[12]=x*A,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*A,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*A,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*h+t*o*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,p=s*u,g=s*f,_=a*u,m=a*f,d=o*f,w=c*l,S=c*u,y=c*f,x=i.x,E=i.y,A=i.z;return r[0]=(1-(_+d))*x,r[1]=(p+y)*x,r[2]=(g-S)*x,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(h+d))*E,r[6]=(m+w)*E,r[7]=0,r[8]=(g+S)*A,r[9]=(m-w)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=hi.set(r[0],r[1],r[2]).length();const a=hi.set(r[4],r[5],r[6]).length(),o=hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const l=1/s,u=1/a,f=1/o;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=f,Xt.elements[9]*=f,Xt.elements[10]*=f,t.setFromRotationMatrix(Xt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,c=1/(t-e),l=1/(i-r),u=1/(a-s),f=(t+e)*c,h=(i+r)*l,p=(a+s)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hi=new U,Xt=new ct,Hf=new U(0,0,0),Vf=new U(1,1,1),Rn=new U,_r=new U,It=new U,ho=new ct,po=new cr;class Qr{constructor(e=0,t=0,i=0,r=Qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ho.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ho,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return po.setFromEuler(this),this.setFromQuaternion(po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qr.DEFAULT_ORDER="XYZ";class aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wf=0;const mo=new U,di=new cr,mn=new ct,vr=new U,ji=new U,Xf=new U,qf=new cr,go=new U(1,0,0),_o=new U(0,1,0),vo=new U(0,0,1),Yf={type:"added"},xo={type:"removed"};class Lt extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new U,t=new Qr,i=new cr,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ye}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(go,e)}rotateY(e){return this.rotateOnAxis(_o,e)}rotateZ(e){return this.rotateOnAxis(vo,e)}translateOnAxis(e,t){return mo.copy(e).applyQuaternion(this.quaternion),this.position.add(mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(go,e)}translateY(e){return this.translateOnAxis(_o,e)}translateZ(e){return this.translateOnAxis(vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vr.copy(e):vr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ji,vr,this.up):mn.lookAt(vr,ji,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(mn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Xf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,qf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new U(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new U,gn=new U,Ts=new U,_n=new U,pi=new U,mi=new U,Mo=new U,ws=new U,As=new U,Rs=new U;let xr=!1;class jt{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qt.subVectors(r,t),gn.subVectors(i,t),Ts.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(gn),c=qt.dot(Ts),l=gn.dot(gn),u=gn.dot(Ts),f=a*l-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,i,r,s,a,o,c){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(e,t,i,r,s,a,o,c)}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,_n),c.setScalar(0),c.addScaledVector(s,_n.x),c.addScaledVector(a,_n.y),c.addScaledVector(o,_n.z),c}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),gn.subVectors(e,t),qt.cross(gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),qt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;pi.subVectors(r,i),mi.subVectors(s,i),ws.subVectors(e,i);const c=pi.dot(ws),l=mi.dot(ws);if(c<=0&&l<=0)return t.copy(i);As.subVectors(e,r);const u=pi.dot(As),f=mi.dot(As);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(pi,a);Rs.subVectors(e,s);const p=pi.dot(Rs),g=mi.dot(Rs);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(mi,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Mo.subVectors(s,r),o=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Mo,o);const d=1/(m+_+h);return a=_*d,o=h*d,t.copy(i).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jf=0;class ur extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Li,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(i.blending=this.blending),this.side!==Un&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Cs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Wt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Wt.workingColorSpace){if(e=ra(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Cs(a,s,e+1/3),this.g=Cs(a,s,e),this.b=Cs(a,s,e-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(e,t=ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){const i=hc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Wt.fromWorkingColorSpace(yt.copy(this),e),Math.round(Et(yt.r*255,0,255))*65536+Math.round(Et(yt.g*255,0,255))*256+Math.round(Et(yt.b*255,0,255))}getHexString(e=ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=ze){Wt.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==ze?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yt),Yt.h+=e,Yt.s+=t,Yt.l+=i,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(Mr);const i=er(Yt.h,Mr.h,t),r=er(Yt.s,Mr.s,t),s=er(Yt.l,Mr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new $e;$e.NAMES=hc;class nr extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new U,Sr=new je;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=js,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==js&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class dc extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pc extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Kf=0;const Bt=new ct,Ls=new Lt,gi=new U,Nt=new Nn,Ki=new Nn,gt=new U;class Ht extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lc(e)?pc:dc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return Ls.lookAt(e),Ls.updateMatrix(),this.applyMatrix4(Ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Nt.min,Ki.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,Ki.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(Ki.min),Nt.expandByPoint(Ki.max))}Nt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)gt.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(e,l),gt.add(gi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<o;R++)l[R]=new U,u[R]=new U;const f=new U,h=new U,p=new U,g=new je,_=new je,m=new je,d=new U,w=new U;function S(R,X,j){f.fromArray(r,R*3),h.fromArray(r,X*3),p.fromArray(r,j*3),g.fromArray(a,R*2),_.fromArray(a,X*2),m.fromArray(a,j*2),h.sub(f),p.sub(f),_.sub(g),m.sub(g);const N=1/(_.x*m.y-m.x*_.y);isFinite(N)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(N),w.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(N),l[R].add(d),l[X].add(d),l[j].add(d),u[R].add(w),u[X].add(w),u[j].add(w))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let R=0,X=y.length;R<X;++R){const j=y[R],N=j.start,O=j.count;for(let W=N,ie=N+O;W<ie;W+=3)S(i[W+0],i[W+1],i[W+2])}const x=new U,E=new U,A=new U,F=new U;function v(R){A.fromArray(s,R*3),F.copy(A);const X=l[R];x.copy(X),x.sub(A.multiplyScalar(A.dot(X))).normalize(),E.crossVectors(F,X);const N=E.dot(u[R])<0?-1:1;c[R*4]=x.x,c[R*4+1]=x.y,c[R*4+2]=x.z,c[R*4+3]=N}for(let R=0,X=y.length;R<X;++R){const j=y[R],N=j.start,O=j.count;for(let W=N,ie=N+O;W<ie;W+=3)v(i[W+0]),v(i[W+1]),v(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,u=new U,f=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new Qt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const So=new ct,nn=new sa,yr=new Vi,yo=new U,_i=new U,vi=new U,xi=new U,Ps=new U,Er=new U,br=new je,Tr=new je,wr=new je,Eo=new U,bo=new U,To=new U,Ar=new U,Rr=new U;class kt extends Lt{constructor(e=new Ht,t=new nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Er.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Ps.fromBufferAttribute(f,e),a?Er.addScaledVector(Ps,u):Er.addScaledVector(Ps.sub(t),u))}t.add(Er)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(s),nn.copy(e.ray).recast(e.near),!(yr.containsPoint(nn.origin)===!1&&(nn.intersectSphere(yr,yo)===null||nn.origin.distanceToSquared(yo)>(e.far-e.near)**2))&&(So.copy(s).invert(),nn.copy(e.ray).applyMatrix4(So),!(i.boundingBox!==null&&nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=s[_.materialIndex],d=Math.max(_.start,h.start),w=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let S=d,y=w;S<y;S+=3){const x=a.getX(S),E=a.getX(S+1),A=a.getX(S+2);i=Cr(this,m,e,nn,c,l,u,x,E,A),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let _=p,m=g;_<m;_+=3){const d=a.getX(_),w=a.getX(_+1),S=a.getX(_+2);i=Cr(this,s,e,nn,c,l,u,d,w,S),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){const _=f[p],m=s[_.materialIndex],d=Math.max(_.start,h.start),w=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let S=d,y=w;S<y;S+=3){const x=S,E=S+1,A=S+2;i=Cr(this,m,e,nn,c,l,u,x,E,A),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const p=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let _=p,m=g;_<m;_+=3){const d=_,w=_+1,S=_+2;i=Cr(this,s,e,nn,c,l,u,d,w,S),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function Zf(n,e,t,i,r,s,a,o){let c;if(e.side===Dt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Un,o),c===null)return null;Rr.copy(o),Rr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Rr);return l<t.near||l>t.far?null:{distance:l,point:Rr.clone(),object:n}}function Cr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,_i),n.getVertexPosition(c,vi),n.getVertexPosition(l,xi);const u=Zf(n,e,t,i,_i,vi,xi,Ar);if(u){r&&(br.fromBufferAttribute(r,o),Tr.fromBufferAttribute(r,c),wr.fromBufferAttribute(r,l),u.uv=jt.getInterpolation(Ar,_i,vi,xi,br,Tr,wr,new je)),s&&(br.fromBufferAttribute(s,o),Tr.fromBufferAttribute(s,c),wr.fromBufferAttribute(s,l),u.uv1=jt.getInterpolation(Ar,_i,vi,xi,br,Tr,wr,new je),u.uv2=u.uv1),a&&(Eo.fromBufferAttribute(a,o),bo.fromBufferAttribute(a,c),To.fromBufferAttribute(a,l),u.normal=jt.getInterpolation(Ar,_i,vi,xi,Eo,bo,To,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new U,materialIndex:0};jt.getNormal(_i,vi,xi,f.normal),u.face=f}return u}class fr extends Ht{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(f,2));function g(_,m,d,w,S,y,x,E,A,F,v){const R=y/A,X=x/F,j=y/2,N=x/2,O=E/2,W=A+1,ie=F+1;let K=0,V=0;const Q=new U;for(let q=0;q<ie;q++){const fe=q*X-N;for(let Z=0;Z<W;Z++){const I=Z*R-j;Q[_]=I*w,Q[m]=fe*S,Q[d]=O,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[d]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(Z/A),f.push(1-q/F),K+=1}}for(let q=0;q<F;q++)for(let fe=0;fe<A;fe++){const Z=h+fe+W*q,I=h+fe+W*(q+1),k=h+(fe+1)+W*(q+1),ne=h+(fe+1)+W*q;c.push(Z,I,ne),c.push(I,k,ne),V+=6}o.addGroup(p,V,v),p+=V,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=Oi(n[t]);for(const r in i)e[r]=i[r]}return e}function Jf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mc(n){return n.getRenderTarget()===null?n.outputColorSpace:un}const oa={clone:Oi,merge:Rt};var $f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gc extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends gc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mi=-90,Si=1;class eh extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Kt(Mi,Si,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Kt(Mi,Si,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Kt(Mi,Si,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Kt(Mi,Si,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new Kt(Mi,Si,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Kt(Mi,Si,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Sn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class _c extends Ft{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class th extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kn?ze:Zn),this.texture=new _c(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fr(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Oi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:Pn});s.uniforms.tEquirect.value=t;const a=new kt(r,s),o=t.minFilter;return t.minFilter===sr&&(t.minFilter=zt),new eh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ds=new U,nh=new U,ih=new Ye;class Hn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ds.subVectors(i,t).cross(nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ds),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ih.getNormalMatrix(e),r=this.coplanarPoint(Ds).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Vi,Lr=new U;class vc{constructor(e=new Hn,t=new Hn,i=new Hn,r=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],c=i[4],l=i[5],u=i[6],f=i[7],h=i[8],p=i[9],g=i[10],_=i[11],m=i[12],d=i[13],w=i[14],S=i[15];return t[0].setComponents(o-r,f-c,_-h,S-m).normalize(),t[1].setComponents(o+r,f+c,_+h,S+m).normalize(),t[2].setComponents(o+s,f+l,_+p,S+d).normalize(),t[3].setComponents(o-s,f-l,_-p,S-d).normalize(),t[4].setComponents(o-a,f-u,_-g,S-w).normalize(),t[5].setComponents(o+a,f+u,_+g,S+w).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Lr.x=r.normal.x>0?e.max.x:e.min.x,Lr.y=r.normal.y>0?e.max.y:e.min.y,Lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function rh(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,h=l.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),l.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,l),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:a,remove:o,update:c}}class la extends Ht{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,h=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const w=d*h-a;for(let S=0;S<l;S++){const y=S*f-s;g.push(y,-w,0),_.push(0,0,1),m.push(S/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<o;w++){const S=w+l*d,y=w+l*(d+1),x=w+1+l*(d+1),E=w+1+l*d;p.push(S,y,E),p.push(y,x,E)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.widthSegments,e.heightSegments)}}var sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fh="vec3 transformed = vec3( position );",hh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ph=`#ifdef USE_IRIDESCENCE
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
#endif`,mh=`#ifdef USE_BUMPMAP
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
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
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
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hh=`#ifdef USE_GRADIENTMAP
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
}`,Vh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yh=`uniform bool receiveShadow;
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
#endif`,jh=`#if defined( USE_ENVMAP )
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
#endif`,Kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qh=`PhysicalMaterial material;
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
#endif`,ed=`struct PhysicalMaterial {
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
}`,td=`
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
#endif`,nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,od=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ld=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fd=`#if defined( USE_POINTS_UV )
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
#endif`,hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,md=`#ifdef USE_MORPHNORMALS
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
#endif`,gd=`#ifdef USE_MORPHTARGETS
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
#endif`,_d=`#ifdef USE_MORPHTARGETS
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
#endif`,vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
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
#endif`,bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zd=`float getShadowMask() {
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
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gd=`#ifdef USE_SKINNING
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
#endif`,Hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vd=`#ifdef USE_SKINNING
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
#endif`,Wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,Kd=`#ifdef USE_TRANSMISSION
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
#endif`,Zd=`#ifdef USE_UV
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
#endif`,Jd=`#ifdef USE_UV
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
#endif`,$d=`#ifdef USE_UV
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
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ap=`#include <common>
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
}`,op=`#if DEPTH_PACKING == 3200
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
}`,lp=`#define DISTANCE
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
}`,cp=`#define DISTANCE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hp=`uniform float scale;
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
}`,dp=`uniform vec3 diffuse;
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
}`,pp=`#include <common>
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#define LAMBERT
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
}`,_p=`#define LAMBERT
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
}`,vp=`#define MATCAP
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
}`,xp=`#define MATCAP
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
}`,Mp=`#define NORMAL
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
}`,Sp=`#define NORMAL
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
}`,yp=`#define PHONG
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
}`,Ep=`#define PHONG
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
}`,bp=`#define STANDARD
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
}`,Tp=`#define STANDARD
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
}`,wp=`#define TOON
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
}`,Ap=`#define TOON
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
}`,Rp=`uniform float size;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Lp=`#include <common>
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
}`,Pp=`uniform vec3 color;
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
}`,Dp=`uniform float rotation;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Ve={alphamap_fragment:sh,alphamap_pars_fragment:ah,alphatest_fragment:oh,alphatest_pars_fragment:lh,aomap_fragment:ch,aomap_pars_fragment:uh,begin_vertex:fh,beginnormal_vertex:hh,bsdfs:dh,iridescence_fragment:ph,bumpmap_pars_fragment:mh,clipping_planes_fragment:gh,clipping_planes_pars_fragment:_h,clipping_planes_pars_vertex:vh,clipping_planes_vertex:xh,color_fragment:Mh,color_pars_fragment:Sh,color_pars_vertex:yh,color_vertex:Eh,common:bh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:wh,displacementmap_pars_vertex:Ah,displacementmap_vertex:Rh,emissivemap_fragment:Ch,emissivemap_pars_fragment:Lh,encodings_fragment:Ph,encodings_pars_fragment:Dh,envmap_fragment:Uh,envmap_common_pars_fragment:Ih,envmap_pars_fragment:Nh,envmap_pars_vertex:Fh,envmap_physical_pars_fragment:jh,envmap_vertex:Oh,fog_vertex:Bh,fog_pars_vertex:zh,fog_fragment:kh,fog_pars_fragment:Gh,gradientmap_pars_fragment:Hh,lightmap_fragment:Vh,lightmap_pars_fragment:Wh,lights_lambert_fragment:Xh,lights_lambert_pars_fragment:qh,lights_pars_begin:Yh,lights_toon_fragment:Kh,lights_toon_pars_fragment:Zh,lights_phong_fragment:Jh,lights_phong_pars_fragment:$h,lights_physical_fragment:Qh,lights_physical_pars_fragment:ed,lights_fragment_begin:td,lights_fragment_maps:nd,lights_fragment_end:id,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:ad,logdepthbuf_vertex:od,map_fragment:ld,map_pars_fragment:cd,map_particle_fragment:ud,map_particle_pars_fragment:fd,metalnessmap_fragment:hd,metalnessmap_pars_fragment:dd,morphcolor_vertex:pd,morphnormal_vertex:md,morphtarget_pars_vertex:gd,morphtarget_vertex:_d,normal_fragment_begin:vd,normal_fragment_maps:xd,normal_pars_fragment:Md,normal_pars_vertex:Sd,normal_vertex:yd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:bd,clearcoat_normal_fragment_maps:Td,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Ad,output_fragment:Rd,packing:Cd,premultiplied_alpha_fragment:Ld,project_vertex:Pd,dithering_fragment:Dd,dithering_pars_fragment:Ud,roughnessmap_fragment:Id,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Od,shadowmap_vertex:Bd,shadowmask_pars_fragment:zd,skinbase_vertex:kd,skinning_pars_vertex:Gd,skinning_vertex:Hd,skinnormal_vertex:Vd,specularmap_fragment:Wd,specularmap_pars_fragment:Xd,tonemapping_fragment:qd,tonemapping_pars_fragment:Yd,transmission_fragment:jd,transmission_pars_fragment:Kd,uv_pars_fragment:Zd,uv_pars_vertex:Jd,uv_vertex:$d,worldpos_vertex:Qd,background_vert:ep,background_frag:tp,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:rp,cube_frag:sp,depth_vert:ap,depth_frag:op,distanceRGBA_vert:lp,distanceRGBA_frag:cp,equirect_vert:up,equirect_frag:fp,linedashed_vert:hp,linedashed_frag:dp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:_p,meshmatcap_vert:vp,meshmatcap_frag:xp,meshnormal_vert:Mp,meshnormal_frag:Sp,meshphong_vert:yp,meshphong_frag:Ep,meshphysical_vert:bp,meshphysical_frag:Tp,meshtoon_vert:wp,meshtoon_frag:Ap,points_vert:Rp,points_frag:Cp,shadow_vert:Lp,shadow_frag:Pp,sprite_vert:Dp,sprite_frag:Up},ue={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaTest:{value:0}}},Pt={basic:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Rt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Rt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Rt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Rt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Rt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Rt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Rt([ue.common,ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Rt([ue.lights,ue.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Pt.physical={uniforms:Rt([Pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Pr={r:0,b:0,g:0};function Ip(n,e,t,i,r,s,a){const o=new $e(0);let c=s===!0?0:1,l,u,f=null,h=0,p=null;function g(m,d){let w=!1,S=d.isScene===!0?d.background:null;switch(S&&S.isTexture&&(S=(d.backgroundBlurriness>0?t:e).get(S)),S===null?_(o,c):S&&S.isColor&&(_(S,1),w=!0),n.xr.getEnvironmentBlendMode()){case"opaque":w=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),w=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),w=!0;break}(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===$r)?(u===void 0&&(u=new kt(new fr(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Oi(Pt.backgroundCube.uniforms),vertexShader:Pt.backgroundCube.vertexShader,fragmentShader:Pt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=S.colorSpace!==ze,(f!==S||h!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new kt(new la(2,2),new In({name:"BackgroundMaterial",uniforms:Oi(Pt.background.uniforms),vertexShader:Pt.background.vertexShader,fragmentShader:Pt.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=S.colorSpace!==ze,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(Pr,mc(n)),i.buffers.color.setClear(Pr.r,Pr.g,Pr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function Np(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null);let l=c,u=!1;function f(O,W,ie,K,V){let Q=!1;if(a){const q=_(K,ie,W);l!==q&&(l=q,p(l.object)),Q=d(O,K,ie,V),Q&&w(O,K,ie,V)}else{const q=W.wireframe===!0;(l.geometry!==K.id||l.program!==ie.id||l.wireframe!==q)&&(l.geometry=K.id,l.program=ie.id,l.wireframe=q,Q=!0)}V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,F(O,W,ie,K),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function _(O,W,ie){const K=ie.wireframe===!0;let V=o[O.id];V===void 0&&(V={},o[O.id]=V);let Q=V[W.id];Q===void 0&&(Q={},V[W.id]=Q);let q=Q[K];return q===void 0&&(q=m(h()),Q[K]=q),q}function m(O){const W=[],ie=[],K=[];for(let V=0;V<r;V++)W[V]=0,ie[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ie,attributeDivisors:K,object:O,attributes:{},index:null}}function d(O,W,ie,K){const V=l.attributes,Q=W.attributes;let q=0;const fe=ie.getAttributes();for(const Z in fe)if(fe[Z].location>=0){const k=V[Z];let ne=Q[Z];if(ne===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor)),k===void 0||k.attribute!==ne||ne&&k.data!==ne.data)return!0;q++}return l.attributesNum!==q||l.index!==K}function w(O,W,ie,K){const V={},Q=W.attributes;let q=0;const fe=ie.getAttributes();for(const Z in fe)if(fe[Z].location>=0){let k=Q[Z];k===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(k=O.instanceColor));const ne={};ne.attribute=k,k&&k.data&&(ne.data=k.data),V[Z]=ne,q++}l.attributes=V,l.attributesNum=q,l.index=K}function S(){const O=l.newAttributes;for(let W=0,ie=O.length;W<ie;W++)O[W]=0}function y(O){x(O,0)}function x(O,W){const ie=l.newAttributes,K=l.enabledAttributes,V=l.attributeDivisors;ie[O]=1,K[O]===0&&(n.enableVertexAttribArray(O),K[O]=1),V[O]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,W),V[O]=W)}function E(){const O=l.newAttributes,W=l.enabledAttributes;for(let ie=0,K=W.length;ie<K;ie++)W[ie]!==O[ie]&&(n.disableVertexAttribArray(ie),W[ie]=0)}function A(O,W,ie,K,V,Q){i.isWebGL2===!0&&(ie===n.INT||ie===n.UNSIGNED_INT)?n.vertexAttribIPointer(O,W,ie,V,Q):n.vertexAttribPointer(O,W,ie,K,V,Q)}function F(O,W,ie,K){if(i.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const V=K.attributes,Q=ie.getAttributes(),q=W.defaultAttributeValues;for(const fe in Q){const Z=Q[fe];if(Z.location>=0){let I=V[fe];if(I===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(I=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(I=O.instanceColor)),I!==void 0){const k=I.normalized,ne=I.itemSize,se=t.get(I);if(se===void 0)continue;const P=se.buffer,Se=se.type,be=se.bytesPerElement;if(I.isInterleavedBufferAttribute){const ce=I.data,ge=ce.stride,Pe=I.offset;if(ce.isInstancedInterleavedBuffer){for(let de=0;de<Z.locationSize;de++)x(Z.location+de,ce.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<Z.locationSize;de++)y(Z.location+de);n.bindBuffer(n.ARRAY_BUFFER,P);for(let de=0;de<Z.locationSize;de++)A(Z.location+de,ne/Z.locationSize,Se,k,ge*be,(Pe+ne/Z.locationSize*de)*be)}else{if(I.isInstancedBufferAttribute){for(let ce=0;ce<Z.locationSize;ce++)x(Z.location+ce,I.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ce=0;ce<Z.locationSize;ce++)y(Z.location+ce);n.bindBuffer(n.ARRAY_BUFFER,P);for(let ce=0;ce<Z.locationSize;ce++)A(Z.location+ce,ne/Z.locationSize,Se,k,ne*be,ne/Z.locationSize*ce*be)}}else if(q!==void 0){const k=q[fe];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(Z.location,k);break;case 3:n.vertexAttrib3fv(Z.location,k);break;case 4:n.vertexAttrib4fv(Z.location,k);break;default:n.vertexAttrib1fv(Z.location,k)}}}}E()}function v(){j();for(const O in o){const W=o[O];for(const ie in W){const K=W[ie];for(const V in K)g(K[V].object),delete K[V];delete W[ie]}delete o[O]}}function R(O){if(o[O.id]===void 0)return;const W=o[O.id];for(const ie in W){const K=W[ie];for(const V in K)g(K[V].object),delete K[V];delete W[ie]}delete o[O.id]}function X(O){for(const W in o){const ie=o[W];if(ie[O.id]===void 0)continue;const K=ie[O.id];for(const V in K)g(K[V].object),delete K[V];delete ie[O.id]}}function j(){N(),u=!0,l!==c&&(l=c,p(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:j,resetDefaultState:N,dispose:v,releaseStatesOfGeometry:R,releaseStatesOfProgram:X,initAttributes:S,enableAttribute:y,disableUnusedAttributes:E}}function Fp(n,e,t,i){const r=i.isWebGL2;let s;function a(l){s=l}function o(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,l,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function Op(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,y=a||e.has("OES_texture_float"),x=S&&y,E=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:w,vertexTextures:S,floatFragmentTextures:y,floatVertexTextures:x,maxSamples:E}}function Bp(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Hn,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,S=w*4;let y=d.clippingState||null;c.value=y,y=u(g,h,S,p);for(let x=0;x!==S;++x)y[x]=t[x];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,y=p;S!==_;++S,y+=4)a.copy(f[S]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zp(n){let e=new WeakMap;function t(a,o){return o===Ws?a.mapping=Ii:o===Xs&&(a.mapping=Ni),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ws||o===Xs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new th(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Mc extends gc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,wo=[.125,.215,.35,.446,.526,.582],Wn=20,Us=new Mc,Ao=new $e;let Is=null;const Vn=(1+Math.sqrt(5))/2,yi=1/Vn,Ro=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Vn,yi),new U(0,Vn,-yi),new U(yi,0,Vn),new U(-yi,0,Vn),new U(Vn,yi,0),new U(-Vn,yi,0)];class Co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Is=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Do(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Is),e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Is=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:ar,format:$t,colorSpace:un,depthBuffer:!1},r=Lo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kp(s)),this._blurMaterial=Gp(s,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,i,r){const o=new Kt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ao),u.toneMapping=Sn,u.autoClear=!1;const p=new nr({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new kt(new fr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ao),_=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):w===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const S=this._cubeSize;Dr(r,w*S,d>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ii||e.mapping===Ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Do()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Po());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Dr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Us)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ro[(r-1)%Ro.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kt(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Wn;m>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const d=[];let w=0;for(let A=0;A<Wn;++A){const F=A/_,v=Math.exp(-F*F/2);d.push(v),A===0?w+=v:A<m&&(w+=2*v)}for(let A=0;A<d.length;A++)d[A]=d[A]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const y=this._sizeLods[r],x=3*y*(r>S-Ai?r-S+Ai:0),E=4*(this._cubeSize-y);Dr(t,x,E,3*y,2*y),c.setRenderTarget(t),c.render(f,Us)}}function kp(n){const e=[],t=[],i=[];let r=n;const s=n-Ai+1+wo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Ai?c=wo[a-n+Ai-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,w=new Float32Array(_*g*p),S=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,F=E>2?0:-1,v=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];w.set(v,_*g*E),S.set(h,m*g*E);const R=[E,E,E,E,E,E];y.set(R,d*g*E)}const x=new Ht;x.setAttribute("position",new Qt(w,_)),x.setAttribute("uv",new Qt(S,m)),x.setAttribute("faceIndex",new Qt(y,d)),e.push(x),r>Ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lo(n,e,t){const i=new ii(n,e,t);return i.texture.mapping=$r,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Gp(n,e,t){const i=new Float32Array(Wn),r=new U(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ca(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Po(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Do(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ca(){return`

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
	`}function Hp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ws||c===Xs,u=c===Ii||c===Ni;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Co(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Co(n));const h=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Vp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Wp(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let S=0,y=w.length;S<y;S+=3){const x=w[S+0],E=w[S+1],A=w[S+2];h.push(x,E,E,A,A,x)}}else{const w=g.array;_=g.version;for(let S=0,y=w.length/3-1;S<y;S+=3){const x=S+0,E=S+1,A=S+2;h.push(x,E,E,A,A,x)}}const m=new(lc(h)?pc:dc)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Xp(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,c;function l(h){o=h.type,c=h.bytesPerElement}function u(h,p){n.drawElements(s,p,o,h*c),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,o,h*c,g),t.update(p,s,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f}function qp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Yp(n,e){return n[0]-e[0]}function jp(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Kp(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new lt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let W=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const S=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let v=0;S===!0&&(v=1),y===!0&&(v=2),x===!0&&(v=3);let R=u.attributes.position.count*v,X=1;R>e.maxTextureSize&&(X=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const j=new Float32Array(R*X*4*_),N=new fc(j,R,X,_);N.type=Yn,N.needsUpdate=!0;const O=v*4;for(let ie=0;ie<_;ie++){const K=E[ie],V=A[ie],Q=F[ie],q=R*X*4*ie;for(let fe=0;fe<K.count;fe++){const Z=fe*O;S===!0&&(a.fromBufferAttribute(K,fe),j[q+Z+0]=a.x,j[q+Z+1]=a.y,j[q+Z+2]=a.z,j[q+Z+3]=0),y===!0&&(a.fromBufferAttribute(V,fe),j[q+Z+4]=a.x,j[q+Z+5]=a.y,j[q+Z+6]=a.z,j[q+Z+7]=0),x===!0&&(a.fromBufferAttribute(Q,fe),j[q+Z+8]=a.x,j[q+Z+9]=a.y,j[q+Z+10]=a.z,j[q+Z+11]=Q.itemSize===4?a.w:1)}}m={count:_,texture:N,size:new je(R,X)},s.set(u,m),u.addEventListener("dispose",W)}let d=0;for(let S=0;S<h.length;S++)d+=h[S];const w=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",w),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];i[u.id]=_}for(let y=0;y<g;y++){const x=_[y];x[0]=y,x[1]=h[y]}_.sort(jp);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Yp);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let w=0;for(let y=0;y<8;y++){const x=o[y],E=x[0],A=x[1];E!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+y)!==m[E]&&u.setAttribute("morphTarget"+y,m[E]),d&&u.getAttribute("morphNormal"+y)!==d[E]&&u.setAttribute("morphNormal"+y,d[E]),r[y]=A,w+=A):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const S=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Zp(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);return r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER)),f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Sc=new Ft,yc=new fc,Ec=new kf,bc=new _c,Uo=[],Io=[],No=new Float32Array(16),Fo=new Float32Array(9),Oo=new Float32Array(4);function Wi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Uo[r];if(s===void 0&&(s=new Float32Array(r),Uo[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function es(n,e){let t=Io[e];t===void 0&&(t=new Int32Array(e),Io[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Jp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function Qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function em(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function tm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Oo.set(i),n.uniformMatrix2fv(this.addr,!1,Oo),pt(t,i)}}function nm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Fo.set(i),n.uniformMatrix3fv(this.addr,!1,Fo),pt(t,i)}}function im(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;No.set(i),n.uniformMatrix4fv(this.addr,!1,No),pt(t,i)}}function rm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function om(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function lm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function fm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function hm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Sc,r)}function dm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ec,r)}function pm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bc,r)}function mm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||yc,r)}function gm(n){switch(n){case 5126:return Jp;case 35664:return $p;case 35665:return Qp;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return rm;case 35667:case 35671:return sm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return um;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function _m(n,e){n.uniform1fv(this.addr,e)}function vm(n,e){const t=Wi(e,this.size,2);n.uniform2fv(this.addr,t)}function xm(n,e){const t=Wi(e,this.size,3);n.uniform3fv(this.addr,t)}function Mm(n,e){const t=Wi(e,this.size,4);n.uniform4fv(this.addr,t)}function Sm(n,e){const t=Wi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ym(n,e){const t=Wi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Em(n,e){const t=Wi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bm(n,e){n.uniform1iv(this.addr,e)}function Tm(n,e){n.uniform2iv(this.addr,e)}function wm(n,e){n.uniform3iv(this.addr,e)}function Am(n,e){n.uniform4iv(this.addr,e)}function Rm(n,e){n.uniform1uiv(this.addr,e)}function Cm(n,e){n.uniform2uiv(this.addr,e)}function Lm(n,e){n.uniform3uiv(this.addr,e)}function Pm(n,e){n.uniform4uiv(this.addr,e)}function Dm(n,e,t){const i=this.cache,r=e.length,s=es(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Sc,s[a])}function Um(n,e,t){const i=this.cache,r=e.length,s=es(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ec,s[a])}function Im(n,e,t){const i=this.cache,r=e.length,s=es(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||bc,s[a])}function Nm(n,e,t){const i=this.cache,r=e.length,s=es(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||yc,s[a])}function Fm(n){switch(n){case 5126:return _m;case 35664:return vm;case 35665:return xm;case 35666:return Mm;case 35674:return Sm;case 35675:return ym;case 35676:return Em;case 5124:case 35670:return bm;case 35667:case 35671:return Tm;case 35668:case 35672:return wm;case 35669:case 35673:return Am;case 5125:return Rm;case 36294:return Cm;case 36295:return Lm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Nm}}class Om{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=gm(t.type)}}class Bm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Fm(t.type)}}class zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ns=/(\w+)(\])?(\[|\.)?/g;function Bo(n,e){n.seq.push(e),n.map[e.id]=e}function km(n,e,t){const i=n.name,r=i.length;for(Ns.lastIndex=0;;){const s=Ns.exec(i),a=Ns.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Bo(t,l===void 0?new Om(o,n,e):new Bm(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new zm(o),Bo(t,f)),t=f}}}class Gr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);km(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function zo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Gm=0;function Hm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Vm(n){switch(n){case un:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function ko(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Hm(n.getShaderSource(e),a)}else return r}function Wm(n,e){const t=Vm(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Xm(n,e){let t;switch(e){case Xu:t="Linear";break;case qu:t="Reinhard";break;case Yu:t="OptimizedCineon";break;case ju:t="ACESFilmic";break;case Ku:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function Ym(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Zi(n){return n!==""}function Go(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ho(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Js(n){return n.replace(Km,Zm)}function Zm(n,e){const t=Ve[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Js(t)}const Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vo(n){return n.replace(Jm,$m)}function $m(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wo(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Eu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function eg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ii:case Ni:e="ENVMAP_TYPE_CUBE";break;case $r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function ng(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nc:e="ENVMAP_BLENDING_MULTIPLY";break;case Vu:e="ENVMAP_BLENDING_MIX";break;case Wu:e="ENVMAP_BLENDING_ADD";break}return e}function ig(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function rg(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Qm(t),l=eg(t),u=tg(t),f=ng(t),h=ig(t),p=t.isWebGL2?"":qm(t),g=Ym(s),_=r.createProgram();let m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Zi).join(`
`),m.length>0&&(m+=`
`),d=[p,g].filter(Zi).join(`
`),d.length>0&&(d+=`
`)):(m=[Wo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),d=[p,Wo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Sn?Xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),a=Js(a),a=Go(a,t),a=Ho(a,t),o=Js(o),o=Go(o,t),o=Ho(o,t),a=Vo(a),o=Vo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=w+m+a,y=w+d+o,x=zo(r,r.VERTEX_SHADER,S),E=zo(r,r.FRAGMENT_SHADER,y);if(r.attachShader(_,x),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const v=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(x).trim(),X=r.getShaderInfoLog(E).trim();let j=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,x,E);else{const O=ko(r,x,"vertex"),W=ko(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+O+`
`+W)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(R===""||X==="")&&(N=!1);N&&(this.diagnostics={runnable:j,programLog:v,vertexShader:{log:R,prefix:m},fragmentShader:{log:X,prefix:d}})}r.deleteShader(x),r.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Gr(r,_)),A};let F;return this.getAttributes=function(){return F===void 0&&(F=jm(r,_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Gm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=E,this}let sg=0;class ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new og(e),t.set(e,i)),i}}class og{constructor(e){this.id=sg++,this.code=e,this.usedTimes=0}}function lg(n,e,t,i,r,s,a){const o=new aa,c=new ag,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,R,X,j,N){const O=j.fog,W=N.geometry,ie=v.isMeshStandardMaterial?j.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||ie),V=K&&K.mapping===$r?K.image.height:null,Q=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=q!==void 0?q.length:0;let Z=0;W.morphAttributes.position!==void 0&&(Z=1),W.morphAttributes.normal!==void 0&&(Z=2),W.morphAttributes.color!==void 0&&(Z=3);let I,k,ne,se;if(Q){const tt=Pt[Q];I=tt.vertexShader,k=tt.fragmentShader}else I=v.vertexShader,k=v.fragmentShader,c.update(v),ne=c.getVertexShaderID(v),se=c.getFragmentShaderID(v);const P=n.getRenderTarget(),Se=N.isInstancedMesh===!0,be=!!v.map,ce=!!v.matcap,ge=!!K,Pe=!!v.aoMap,de=!!v.lightMap,ye=!!v.bumpMap,De=!!v.normalMap,Ue=!!v.displacementMap,Ge=!!v.emissiveMap,Be=!!v.metalnessMap,Fe=!!v.roughnessMap,H=v.clearcoat>0,pe=v.iridescence>0,b=v.sheen>0,M=v.transmission>0,Y=H&&!!v.clearcoatMap,re=H&&!!v.clearcoatNormalMap,oe=H&&!!v.clearcoatRoughnessMap,he=pe&&!!v.iridescenceMap,Re=pe&&!!v.iridescenceThicknessMap,xe=b&&!!v.sheenColorMap,ee=b&&!!v.sheenRoughnessMap,we=!!v.specularMap,Ce=!!v.specularColorMap,Ie=!!v.specularIntensityMap,_e=M&&!!v.transmissionMap,Ae=M&&!!v.thicknessMap,Ke=!!v.gradientMap,Qe=!!v.alphaMap,at=v.alphaTest>0,D=!!v.extensions,J=!!W.attributes.uv1,ae=!!W.attributes.uv2,me=!!W.attributes.uv3;return{isWebGL2:u,shaderID:Q,shaderName:v.type,vertexShader:I,fragmentShader:k,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:Se,instancingColor:Se&&N.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:P===null?n.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:un,map:be,matcap:ce,envMap:ge,envMapMode:ge&&K.mapping,envMapCubeUVHeight:V,aoMap:Pe,lightMap:de,bumpMap:ye,normalMap:De,displacementMap:h&&Ue,emissiveMap:Ge,normalMapObjectSpace:De&&v.normalMapType===gf,normalMapTangentSpace:De&&v.normalMapType===mf,metalnessMap:Be,roughnessMap:Fe,clearcoat:H,clearcoatMap:Y,clearcoatNormalMap:re,clearcoatRoughnessMap:oe,iridescence:pe,iridescenceMap:he,iridescenceThicknessMap:Re,sheen:b,sheenColorMap:xe,sheenRoughnessMap:ee,specularMap:we,specularColorMap:Ce,specularIntensityMap:Ie,transmission:M,transmissionMap:_e,thicknessMap:Ae,gradientMap:Ke,opaque:v.transparent===!1&&v.blending===Li,alphaMap:Qe,alphaTest:at,combine:v.combine,mapUv:be&&_(v.map.channel),aoMapUv:Pe&&_(v.aoMap.channel),lightMapUv:de&&_(v.lightMap.channel),bumpMapUv:ye&&_(v.bumpMap.channel),normalMapUv:De&&_(v.normalMap.channel),displacementMapUv:Ue&&_(v.displacementMap.channel),emissiveMapUv:Ge&&_(v.emissiveMap.channel),metalnessMapUv:Be&&_(v.metalnessMap.channel),roughnessMapUv:Fe&&_(v.roughnessMap.channel),clearcoatMapUv:Y&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ee&&_(v.sheenRoughnessMap.channel),specularMapUv:we&&_(v.specularMap.channel),specularColorMapUv:Ce&&_(v.specularColorMap.channel),specularIntensityMapUv:Ie&&_(v.specularIntensityMap.channel),transmissionMapUv:_e&&_(v.transmissionMap.channel),thicknessMapUv:Ae&&_(v.thicknessMap.channel),alphaMapUv:Qe&&_(v.alphaMap.channel),vertexTangents:De&&!!W.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:J,vertexUv2s:ae,vertexUv3s:me,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(be||Qe),fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Z,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:Sn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Zt,flipSided:v.side===Dt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:D&&v.extensions.derivatives===!0,extensionFragDepth:D&&v.extensions.fragDepth===!0,extensionDrawBuffers:D&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const X in v.defines)R.push(X),R.push(v.defines[X]);return v.isRawShaderMaterial===!1&&(w(R,v),S(R,v),R.push(n.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function w(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function S(v,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),v.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),v.push(o.mask)}function y(v){const R=g[v.type];let X;if(R){const j=Pt[R];X=oa.clone(j.uniforms)}else X=v.uniforms;return X}function x(v,R){let X;for(let j=0,N=l.length;j<N;j++){const O=l[j];if(O.cacheKey===R){X=O,++X.usedTimes;break}}return X===void 0&&(X=new rg(n,R,v,s),l.push(X)),X}function E(v){if(--v.usedTimes===0){const R=l.indexOf(v);l[R]=l[l.length-1],l.pop(),v.destroy()}}function A(v){c.remove(v)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:x,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:F}}function cg(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ug(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qo(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function o(f,h,p,g,_,m){const d=a(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(f,h,p,g,_,m){const d=a(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(f,h){t.length>1&&t.sort(f||ug),i.length>1&&i.sort(h||Xo),r.length>1&&r.sort(h||Xo)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function fg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new qo,n.set(i,[a])):r>=s.length?(a=new qo,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function hg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new $e};break;case"SpotLight":t={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function dg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pg=0;function mg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gg(n,e){const t=new hg,i=dg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,a=new ct,o=new ct;function c(u,f){let h=0,p=0,g=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let _=0,m=0,d=0,w=0,S=0,y=0,x=0,E=0,A=0,F=0;u.sort(mg);const v=f===!0?Math.PI:1;for(let X=0,j=u.length;X<j;X++){const N=u[X],O=N.color,W=N.intensity,ie=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=O.r*W*v,p+=O.g*W*v,g+=O.b*W*v;else if(N.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(N.sh.coefficients[V],W);else if(N.isDirectionalLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*v),N.castShadow){const Q=N.shadow,q=i.get(N);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.directionalShadow[_]=q,r.directionalShadowMap[_]=K,r.directionalShadowMatrix[_]=N.shadow.matrix,y++}r.directional[_]=V,_++}else if(N.isSpotLight){const V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(O).multiplyScalar(W*v),V.distance=ie,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,r.spot[d]=V;const Q=N.shadow;if(N.map&&(r.spotLightMap[A]=N.map,A++,Q.updateMatrices(N),N.castShadow&&F++),r.spotLightMatrix[d]=Q.matrix,N.castShadow){const q=i.get(N);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.spotShadow[d]=q,r.spotShadowMap[d]=K,E++}d++}else if(N.isRectAreaLight){const V=t.get(N);V.color.copy(O).multiplyScalar(W),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),r.rectArea[w]=V,w++}else if(N.isPointLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*v),V.distance=N.distance,V.decay=N.decay,N.castShadow){const Q=N.shadow,q=i.get(N);q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,r.pointShadow[m]=q,r.pointShadowMap[m]=K,r.pointShadowMatrix[m]=N.shadow.matrix,x++}r.point[m]=V,m++}else if(N.isHemisphereLight){const V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(W*v),V.groundColor.copy(N.groundColor).multiplyScalar(W*v),r.hemi[S]=V,S++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==w||R.hemiLength!==S||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==E||R.numSpotMaps!==A)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=w,r.point.length=m,r.hemi.length=S,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=E+A-F,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=F,R.directionalLength=_,R.pointLength=m,R.spotLength=d,R.rectAreaLength=w,R.hemiLength=S,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=E,R.numSpotMaps=A,r.version=pg++)}function l(u,f){let h=0,p=0,g=0,_=0,m=0;const d=f.matrixWorldInverse;for(let w=0,S=u.length;w<S;w++){const y=u[w];if(y.isDirectionalLight){const x=r.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),h++}else if(y.isSpotLight){const x=r.spot[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const x=r.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(d),o.identity(),a.copy(y.matrixWorld),a.premultiply(d),o.extractRotation(a),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const x=r.point[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const x=r.hemi[m];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:r}}function Yo(n,e){const t=new gg(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function _g(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Yo(n,e),t.set(s,[c])):a>=o.length?(c=new Yo(n,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class vg extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xg extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`;function yg(n,e,t){let i=new vc;const r=new je,s=new je,a=new lt,o=new vg({depthPacking:pf}),c=new xg,l={},u=t.maxTextureSize,f={[Un]:Dt,[Dt]:Un,[Zt]:Zt},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let d=this.type;this.render=function(x,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const F=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Pn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const j=d!==vn&&this.type===vn,N=d===vn&&this.type!==vn;for(let O=0,W=x.length;O<W;O++){const ie=x[O],K=ie.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const V=K.getFrameExtents();if(r.multiply(V),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,K.mapSize.y=s.y)),K.map===null||j===!0||N===!0){const q=this.type!==vn?{minFilter:Ct,magFilter:Ct}:{};K.map!==null&&K.map.dispose(),K.map=new ii(r.x,r.y,q),K.map.texture.name=ie.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const Q=K.getViewportCount();for(let q=0;q<Q;q++){const fe=K.getViewport(q);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),X.viewport(a),K.updateMatrices(ie,q),i=K.getFrustum(),y(E,A,K.camera,ie,this.type)}K.isPointLightShadow!==!0&&this.type===vn&&w(K,A),K.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(F,v,R)};function w(x,E){const A=e.update(_);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ii(r.x,r.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(E,null,A,h,_,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(E,null,A,p,_,null)}function S(x,E,A,F){let v=null;const R=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(R!==void 0)v=R;else if(v=A.isPointLight===!0?c:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const X=v.uuid,j=E.uuid;let N=l[X];N===void 0&&(N={},l[X]=N);let O=N[j];O===void 0&&(O=v.clone(),N[j]=O),v=O}if(v.visible=E.visible,v.wireframe=E.wireframe,F===vn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:f[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const X=n.properties.get(v);X.light=A}return v}function y(x,E,A,F,v){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&v===vn)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const j=e.update(x),N=x.material;if(Array.isArray(N)){const O=j.groups;for(let W=0,ie=O.length;W<ie;W++){const K=O[W],V=N[K.materialIndex];if(V&&V.visible){const Q=S(x,V,F,v);n.renderBufferDirect(A,null,j,Q,x,K)}}}else if(N.visible){const O=S(x,N,F,v);n.renderBufferDirect(A,null,j,O,x,null)}}const X=x.children;for(let j=0,N=X.length;j<N;j++)y(X[j],E,A,F,v)}}function Eg(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const J=new lt;let ae=null;const me=new lt(0,0,0,0);return{setMask:function(Te){ae!==Te&&!D&&(n.colorMask(Te,Te,Te,Te),ae=Te)},setLocked:function(Te){D=Te},setClear:function(Te,tt,nt,Mt,En){En===!0&&(Te*=Mt,tt*=Mt,nt*=Mt),J.set(Te,tt,nt,Mt),me.equals(J)===!1&&(n.clearColor(Te,tt,nt,Mt),me.copy(J))},reset:function(){D=!1,ae=null,me.set(-1,0,0,0)}}}function s(){let D=!1,J=null,ae=null,me=null;return{setTest:function(Te){Te?P(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(Te){J!==Te&&!D&&(n.depthMask(Te),J=Te)},setFunc:function(Te){if(ae!==Te){switch(Te){case Fu:n.depthFunc(n.NEVER);break;case Ou:n.depthFunc(n.ALWAYS);break;case Bu:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case zu:n.depthFunc(n.EQUAL);break;case ku:n.depthFunc(n.GEQUAL);break;case Gu:n.depthFunc(n.GREATER);break;case Hu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Te}},setLocked:function(Te){D=Te},setClear:function(Te){me!==Te&&(n.clearDepth(Te),me=Te)},reset:function(){D=!1,J=null,ae=null,me=null}}}function a(){let D=!1,J=null,ae=null,me=null,Te=null,tt=null,nt=null,Mt=null,En=null;return{setTest:function(ot){D||(ot?P(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(ot){J!==ot&&!D&&(n.stencilMask(ot),J=ot)},setFunc:function(ot,Ot,tn){(ae!==ot||me!==Ot||Te!==tn)&&(n.stencilFunc(ot,Ot,tn),ae=ot,me=Ot,Te=tn)},setOp:function(ot,Ot,tn){(tt!==ot||nt!==Ot||Mt!==tn)&&(n.stencilOp(ot,Ot,tn),tt=ot,nt=Ot,Mt=tn)},setLocked:function(ot){D=ot},setClear:function(ot){En!==ot&&(n.clearStencil(ot),En=ot)},reset:function(){D=!1,J=null,ae=null,me=null,Te=null,tt=null,nt=null,Mt=null,En=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,_=[],m=null,d=!1,w=null,S=null,y=null,x=null,E=null,A=null,F=null,v=!1,R=null,X=null,j=null,N=null,O=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,K=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),ie=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ie=K>=2);let Q=null,q={};const fe=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),I=new lt().fromArray(fe),k=new lt().fromArray(Z);function ne(D,J,ae,me){const Te=new Uint8Array(4),tt=n.createTexture();n.bindTexture(D,tt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<ae;nt++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(J,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(J+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return tt}const se={};se[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),P(n.DEPTH_TEST),c.setFunc(Vs),Ue(!1),Ge(Da),P(n.CULL_FACE),ye(Pn);function P(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Se(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function be(D,J){return p[D]!==J?(n.bindFramebuffer(D,J),p[D]=J,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=J),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=J)),!0):!1}function ce(D,J){let ae=_,me=!1;if(D)if(ae=g.get(J),ae===void 0&&(ae=[],g.set(J,ae)),D.isWebGLMultipleRenderTargets){const Te=D.texture;if(ae.length!==Te.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,nt=Te.length;tt<nt;tt++)ae[tt]=n.COLOR_ATTACHMENT0+tt;ae.length=Te.length,me=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,me=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function ge(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const Pe={[wi]:n.FUNC_ADD,[Tu]:n.FUNC_SUBTRACT,[wu]:n.FUNC_REVERSE_SUBTRACT};if(i)Pe[Fa]=n.MIN,Pe[Oa]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Pe[Fa]=D.MIN_EXT,Pe[Oa]=D.MAX_EXT)}const de={[Au]:n.ZERO,[Ru]:n.ONE,[Cu]:n.SRC_COLOR,[ec]:n.SRC_ALPHA,[Nu]:n.SRC_ALPHA_SATURATE,[Uu]:n.DST_COLOR,[Pu]:n.DST_ALPHA,[Lu]:n.ONE_MINUS_SRC_COLOR,[tc]:n.ONE_MINUS_SRC_ALPHA,[Iu]:n.ONE_MINUS_DST_COLOR,[Du]:n.ONE_MINUS_DST_ALPHA};function ye(D,J,ae,me,Te,tt,nt,Mt){if(D===Pn){d===!0&&(Se(n.BLEND),d=!1);return}if(d===!1&&(P(n.BLEND),d=!0),D!==bu){if(D!==w||Mt!==v){if((S!==wi||E!==wi)&&(n.blendEquation(n.FUNC_ADD),S=wi,E=wi),Mt)switch(D){case Li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ua:n.blendFunc(n.ONE,n.ONE);break;case Ia:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Na:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ua:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ia:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Na:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,A=null,F=null,w=D,v=Mt}return}Te=Te||J,tt=tt||ae,nt=nt||me,(J!==S||Te!==E)&&(n.blendEquationSeparate(Pe[J],Pe[Te]),S=J,E=Te),(ae!==y||me!==x||tt!==A||nt!==F)&&(n.blendFuncSeparate(de[ae],de[me],de[tt],de[nt]),y=ae,x=me,A=tt,F=nt),w=D,v=!1}function De(D,J){D.side===Zt?Se(n.CULL_FACE):P(n.CULL_FACE);let ae=D.side===Dt;J&&(ae=!ae),Ue(ae),D.blending===Li&&D.transparent===!1?ye(Pn):ye(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const me=D.stencilWrite;l.setTest(me),me&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Fe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?P(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){R!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),R=D)}function Ge(D){D!==Su?(P(n.CULL_FACE),D!==X&&(D===Da?n.cullFace(n.BACK):D===yu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),X=D}function Be(D){D!==j&&(ie&&n.lineWidth(D),j=D)}function Fe(D,J,ae){D?(P(n.POLYGON_OFFSET_FILL),(N!==J||O!==ae)&&(n.polygonOffset(J,ae),N=J,O=ae)):Se(n.POLYGON_OFFSET_FILL)}function H(D){D?P(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function pe(D){D===void 0&&(D=n.TEXTURE0+W-1),Q!==D&&(n.activeTexture(D),Q=D)}function b(D,J,ae){ae===void 0&&(Q===null?ae=n.TEXTURE0+W-1:ae=Q);let me=q[ae];me===void 0&&(me={type:void 0,texture:void 0},q[ae]=me),(me.type!==D||me.texture!==J)&&(Q!==ae&&(n.activeTexture(ae),Q=ae),n.bindTexture(D,J||se[D]),me.type=D,me.texture=J)}function M(){const D=q[Q];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){I.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),I.copy(D))}function Ae(D){k.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),k.copy(D))}function Ke(D,J){let ae=f.get(J);ae===void 0&&(ae=new WeakMap,f.set(J,ae));let me=ae.get(D);me===void 0&&(me=n.getUniformBlockIndex(J,D.name),ae.set(D,me))}function Qe(D,J){const me=f.get(J).get(D);u.get(J)!==me&&(n.uniformBlockBinding(J,me,D.__bindingPointIndex),u.set(J,me))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,q={},p={},g=new WeakMap,_=[],m=null,d=!1,w=null,S=null,y=null,x=null,E=null,A=null,F=null,v=!1,R=null,X=null,j=null,N=null,O=null,I.set(0,0,n.canvas.width,n.canvas.height),k.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:P,disable:Se,bindFramebuffer:be,drawBuffers:ce,useProgram:ge,setBlending:ye,setMaterial:De,setFlipSided:Ue,setCullFace:Ge,setLineWidth:Be,setPolygonOffset:Fe,setScissorTest:H,activeTexture:pe,bindTexture:b,unbindTexture:M,compressedTexImage2D:Y,compressedTexImage3D:re,texImage2D:Ce,texImage3D:Ie,updateUBOMapping:Ke,uniformBlockBinding:Qe,texStorage2D:ee,texStorage3D:we,texSubImage2D:oe,texSubImage3D:he,compressedTexSubImage2D:Re,compressedTexSubImage3D:xe,scissor:_e,viewport:Ae,reset:at}}function bg(n,e,t,i,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,M){return d?new OffscreenCanvas(b,M):Yr("canvas")}function S(b,M,Y,re){let oe=1;if((b.width>re||b.height>re)&&(oe=re/Math.max(b.width,b.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const he=M?oc:Math.floor,Re=he(oe*b.width),xe=he(oe*b.height);_===void 0&&(_=w(Re,xe));const ee=Y?w(Re,xe):_;return ee.width=Re,ee.height=xe,ee.getContext("2d").drawImage(b,0,0,Re,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Re+"x"+xe+")."),ee}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return Zs(b.width)&&Zs(b.height)}function x(b){return o?!1:b.wrapS!==Jt||b.wrapT!==Jt||b.minFilter!==Ct&&b.minFilter!==zt}function E(b,M){return b.generateMipmaps&&M&&b.minFilter!==Ct&&b.minFilter!==zt}function A(b){n.generateMipmap(b)}function F(b,M,Y,re,oe=!1){if(o===!1)return M;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he=M;return M===n.RED&&(Y===n.FLOAT&&(he=n.R32F),Y===n.HALF_FLOAT&&(he=n.R16F),Y===n.UNSIGNED_BYTE&&(he=n.R8)),M===n.RG&&(Y===n.FLOAT&&(he=n.RG32F),Y===n.HALF_FLOAT&&(he=n.RG16F),Y===n.UNSIGNED_BYTE&&(he=n.RG8)),M===n.RGBA&&(Y===n.FLOAT&&(he=n.RGBA32F),Y===n.HALF_FLOAT&&(he=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(he=re===ze&&oe===!1?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)),(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function v(b,M,Y){return E(b,Y)===!0||b.isFramebufferTexture&&b.minFilter!==Ct&&b.minFilter!==zt?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function R(b){return b===Ct||b===Ba||b===cs?n.NEAREST:n.LINEAR}function X(b){const M=b.target;M.removeEventListener("dispose",X),N(M),M.isVideoTexture&&g.delete(M)}function j(b){const M=b.target;M.removeEventListener("dispose",j),W(M)}function N(b){const M=i.get(b);if(M.__webglInit===void 0)return;const Y=b.source,re=m.get(Y);if(re){const oe=re[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&O(b),Object.keys(re).length===0&&m.delete(Y)}i.remove(b)}function O(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const Y=b.source,re=m.get(Y);delete re[M.__cacheKey],a.memory.textures--}function W(b){const M=b.texture,Y=i.get(b),re=i.get(M);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)n.deleteFramebuffer(Y.__webglFramebuffer[oe]),Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[oe]);else{if(n.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let oe=0;oe<Y.__webglColorRenderbuffer.length;oe++)Y.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[oe]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let oe=0,he=M.length;oe<he;oe++){const Re=i.get(M[oe]);Re.__webglTexture&&(n.deleteTexture(Re.__webglTexture),a.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(b)}let ie=0;function K(){ie=0}function V(){const b=ie;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),ie+=1,b}function Q(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function q(b,M){const Y=i.get(b);if(b.isVideoTexture&&H(b),b.isRenderTargetTexture===!1&&b.version>0&&Y.__version!==b.version){const re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(Y,b,M);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function fe(b,M){const Y=i.get(b);if(b.version>0&&Y.__version!==b.version){Se(Y,b,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function Z(b,M){const Y=i.get(b);if(b.version>0&&Y.__version!==b.version){Se(Y,b,M);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function I(b,M){const Y=i.get(b);if(b.version>0&&Y.__version!==b.version){be(Y,b,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}const k={[qs]:n.REPEAT,[Jt]:n.CLAMP_TO_EDGE,[Ys]:n.MIRRORED_REPEAT},ne={[Ct]:n.NEAREST,[Ba]:n.NEAREST_MIPMAP_NEAREST,[cs]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[Zu]:n.LINEAR_MIPMAP_NEAREST,[sr]:n.LINEAR_MIPMAP_LINEAR};function se(b,M,Y){if(Y?(n.texParameteri(b,n.TEXTURE_WRAP_S,k[M.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,k[M.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,k[M.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ne[M.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ne[M.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Jt||M.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,R(M.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==Ct&&M.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ct||M.minFilter!==cs&&M.minFilter!==sr||M.type===Yn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===ar&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(b,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function P(b,M){let Y=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",X));const re=M.source;let oe=m.get(re);oe===void 0&&(oe={},m.set(re,oe));const he=Q(M);if(he!==b.__cacheKey){oe[he]===void 0&&(oe[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),oe[he].usedTimes++;const Re=oe[b.__cacheKey];Re!==void 0&&(oe[b.__cacheKey].usedTimes--,Re.usedTimes===0&&O(M)),b.__cacheKey=he,b.__webglTexture=oe[he].texture}return Y}function Se(b,M,Y){let re=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=n.TEXTURE_3D);const oe=P(b,M),he=M.source;t.bindTexture(re,b.__webglTexture,n.TEXTURE0+Y);const Re=i.get(he);if(he.version!==Re.__version||oe===!0){t.activeTexture(n.TEXTURE0+Y),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const xe=x(M)&&y(M.image)===!1;let ee=S(M.image,xe,!1,u);ee=pe(M,ee);const we=y(ee)||o,Ce=s.convert(M.format,M.colorSpace);let Ie=s.convert(M.type),_e=F(M.internalFormat,Ce,Ie,M.colorSpace);se(re,M,we);let Ae;const Ke=M.mipmaps,Qe=o&&M.isVideoTexture!==!0,at=Re.__version===void 0||oe===!0,D=v(M,ee,we);if(M.isDepthTexture)_e=n.DEPTH_COMPONENT,o?M.type===Yn?_e=n.DEPTH_COMPONENT32F:M.type===qn?_e=n.DEPTH_COMPONENT24:M.type===Pi?_e=n.DEPTH24_STENCIL8:_e=n.DEPTH_COMPONENT16:M.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===jn&&_e===n.DEPTH_COMPONENT&&M.type!==rc&&M.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=qn,Ie=s.convert(M.type)),M.format===Fi&&_e===n.DEPTH_COMPONENT&&(_e=n.DEPTH_STENCIL,M.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Pi,Ie=s.convert(M.type))),at&&(Qe?t.texStorage2D(n.TEXTURE_2D,1,_e,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,_e,ee.width,ee.height,0,Ce,Ie,null));else if(M.isDataTexture)if(Ke.length>0&&we){Qe&&at&&t.texStorage2D(n.TEXTURE_2D,D,_e,Ke[0].width,Ke[0].height);for(let J=0,ae=Ke.length;J<ae;J++)Ae=Ke[J],Qe?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Ce,Ie,Ae.data):t.texImage2D(n.TEXTURE_2D,J,_e,Ae.width,Ae.height,0,Ce,Ie,Ae.data);M.generateMipmaps=!1}else Qe?(at&&t.texStorage2D(n.TEXTURE_2D,D,_e,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,Ce,Ie,ee.data)):t.texImage2D(n.TEXTURE_2D,0,_e,ee.width,ee.height,0,Ce,Ie,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,D,_e,Ke[0].width,Ke[0].height,ee.depth);for(let J=0,ae=Ke.length;J<ae;J++)Ae=Ke[J],M.format!==$t?Ce!==null?Qe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,ee.depth,Ce,Ae.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,_e,Ae.width,Ae.height,ee.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,ee.depth,Ce,Ie,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,_e,Ae.width,Ae.height,ee.depth,0,Ce,Ie,Ae.data)}else{Qe&&at&&t.texStorage2D(n.TEXTURE_2D,D,_e,Ke[0].width,Ke[0].height);for(let J=0,ae=Ke.length;J<ae;J++)Ae=Ke[J],M.format!==$t?Ce!==null?Qe?t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Ce,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,J,_e,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Ce,Ie,Ae.data):t.texImage2D(n.TEXTURE_2D,J,_e,Ae.width,Ae.height,0,Ce,Ie,Ae.data)}else if(M.isDataArrayTexture)Qe?(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,D,_e,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ce,Ie,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,ee.width,ee.height,ee.depth,0,Ce,Ie,ee.data);else if(M.isData3DTexture)Qe?(at&&t.texStorage3D(n.TEXTURE_3D,D,_e,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ce,Ie,ee.data)):t.texImage3D(n.TEXTURE_3D,0,_e,ee.width,ee.height,ee.depth,0,Ce,Ie,ee.data);else if(M.isFramebufferTexture){if(at)if(Qe)t.texStorage2D(n.TEXTURE_2D,D,_e,ee.width,ee.height);else{let J=ee.width,ae=ee.height;for(let me=0;me<D;me++)t.texImage2D(n.TEXTURE_2D,me,_e,J,ae,0,Ce,Ie,null),J>>=1,ae>>=1}}else if(Ke.length>0&&we){Qe&&at&&t.texStorage2D(n.TEXTURE_2D,D,_e,Ke[0].width,Ke[0].height);for(let J=0,ae=Ke.length;J<ae;J++)Ae=Ke[J],Qe?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ce,Ie,Ae):t.texImage2D(n.TEXTURE_2D,J,_e,Ce,Ie,Ae);M.generateMipmaps=!1}else Qe?(at&&t.texStorage2D(n.TEXTURE_2D,D,_e,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Ie,ee)):t.texImage2D(n.TEXTURE_2D,0,_e,Ce,Ie,ee);E(M,we)&&A(re),Re.__version=he.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function be(b,M,Y){if(M.image.length!==6)return;const re=P(b,M),oe=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+Y);const he=i.get(oe);if(oe.version!==he.__version||re===!0){t.activeTexture(n.TEXTURE0+Y),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,xe=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let J=0;J<6;J++)!Re&&!xe?ee[J]=S(M.image[J],!1,!0,l):ee[J]=xe?M.image[J].image:M.image[J],ee[J]=pe(M,ee[J]);const we=ee[0],Ce=y(we)||o,Ie=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),Ae=F(M.internalFormat,Ie,_e,M.colorSpace),Ke=o&&M.isVideoTexture!==!0,Qe=he.__version===void 0||re===!0;let at=v(M,we,Ce);se(n.TEXTURE_CUBE_MAP,M,Ce);let D;if(Re){Ke&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,at,Ae,we.width,we.height);for(let J=0;J<6;J++){D=ee[J].mipmaps;for(let ae=0;ae<D.length;ae++){const me=D[ae];M.format!==$t?Ie!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,0,0,me.width,me.height,Ie,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,Ae,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,0,0,me.width,me.height,Ie,_e,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,Ae,me.width,me.height,0,Ie,_e,me.data)}}}else{D=M.mipmaps,Ke&&Qe&&(D.length>0&&at++,t.texStorage2D(n.TEXTURE_CUBE_MAP,at,Ae,ee[0].width,ee[0].height));for(let J=0;J<6;J++)if(xe){Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ee[J].width,ee[J].height,Ie,_e,ee[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ae,ee[J].width,ee[J].height,0,Ie,_e,ee[J].data);for(let ae=0;ae<D.length;ae++){const Te=D[ae].image[J].image;Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,0,0,Te.width,Te.height,Ie,_e,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,Ae,Te.width,Te.height,0,Ie,_e,Te.data)}}else{Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,_e,ee[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ae,Ie,_e,ee[J]);for(let ae=0;ae<D.length;ae++){const me=D[ae];Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,0,0,Ie,_e,me.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,Ae,Ie,_e,me.image[J])}}}E(M,Ce)&&A(n.TEXTURE_CUBE_MAP),he.__version=oe.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ce(b,M,Y,re,oe){const he=s.convert(Y.format,Y.colorSpace),Re=s.convert(Y.type),xe=F(Y.internalFormat,he,Re,Y.colorSpace);i.get(M).__hasExternalTextures||(oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,xe,M.width,M.height,M.depth,0,he,Re,null):t.texImage2D(oe,0,xe,M.width,M.height,0,he,Re,null)),t.bindFramebuffer(n.FRAMEBUFFER,b),Fe(M)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,oe,i.get(Y).__webglTexture,0,Be(M)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,oe,i.get(Y).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(b,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let re=n.DEPTH_COMPONENT16;if(Y||Fe(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Yn?re=n.DEPTH_COMPONENT32F:oe.type===qn&&(re=n.DEPTH_COMPONENT24));const he=Be(M);Fe(M)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,re,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,he,re,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const re=Be(M);Y&&Fe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,M.width,M.height):Fe(M)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<re.length;oe++){const he=re[oe],Re=s.convert(he.format,he.colorSpace),xe=s.convert(he.type),ee=F(he.internalFormat,Re,xe,he.colorSpace),we=Be(M);Y&&Fe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ee,M.width,M.height):Fe(M)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,oe=Be(M);if(M.depthTexture.format===jn)Fe(M)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(M.depthTexture.format===Fi)Fe(M)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function de(b){const M=i.get(b),Y=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Pe(M.__webglFramebuffer,b)}else if(Y){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=n.createRenderbuffer(),ge(M.__webglDepthbuffer[re],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),ge(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(b,M,Y){const re=i.get(b);M!==void 0&&ce(re.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),Y!==void 0&&de(b)}function De(b){const M=b.texture,Y=i.get(b),re=i.get(M);b.addEventListener("dispose",j),b.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=M.version,a.memory.textures++);const oe=b.isWebGLCubeRenderTarget===!0,he=b.isWebGLMultipleRenderTargets===!0,Re=y(b)||o;if(oe){Y.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)Y.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(Y.__webglFramebuffer=n.createFramebuffer(),he)if(r.drawBuffers){const xe=b.texture;for(let ee=0,we=xe.length;ee<we;ee++){const Ce=i.get(xe[ee]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Fe(b)===!1){const xe=he?M:[M];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ee=0;ee<xe.length;ee++){const we=xe[ee];Y.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ee]);const Ce=s.convert(we.format,we.colorSpace),Ie=s.convert(we.type),_e=F(we.internalFormat,Ce,Ie,we.colorSpace,b.isXRRenderTarget===!0),Ae=Be(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,_e,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(Y.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),se(n.TEXTURE_CUBE_MAP,M,Re);for(let xe=0;xe<6;xe++)ce(Y.__webglFramebuffer[xe],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe);E(M,Re)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){const xe=b.texture;for(let ee=0,we=xe.length;ee<we;ee++){const Ce=xe[ee],Ie=i.get(Ce);t.bindTexture(n.TEXTURE_2D,Ie.__webglTexture),se(n.TEXTURE_2D,Ce,Re),ce(Y.__webglFramebuffer,b,Ce,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D),E(Ce,Re)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?xe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,re.__webglTexture),se(xe,M,Re),ce(Y.__webglFramebuffer,b,M,n.COLOR_ATTACHMENT0,xe),E(M,Re)&&A(xe),t.unbindTexture()}b.depthBuffer&&de(b)}function Ue(b){const M=y(b)||o,Y=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0,oe=Y.length;re<oe;re++){const he=Y[re];if(E(he,M)){const Re=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(he).__webglTexture;t.bindTexture(Re,xe),A(Re),t.unbindTexture()}}}function Ge(b){if(o&&b.samples>0&&Fe(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],Y=b.width,re=b.height;let oe=n.COLOR_BUFFER_BIT;const he=[],Re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(b),ee=b.isWebGLMultipleRenderTargets===!0;if(ee)for(let we=0;we<M.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let we=0;we<M.length;we++){he.push(n.COLOR_ATTACHMENT0+we),b.depthBuffer&&he.push(Re);const Ce=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Ce===!1&&(b.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ee&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[we]),Ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Re])),ee){const Ie=i.get(M[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,Y,re,0,0,Y,re,oe,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let we=0;we<M.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,xe.__webglColorRenderbuffer[we]);const Ce=i.get(M[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Be(b){return Math.min(f,b.samples)}function Fe(b){const M=i.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function H(b){const M=a.render.frame;g.get(b)!==M&&(g.set(b,M),b.update())}function pe(b,M){const Y=b.colorSpace,re=b.format,oe=b.type;return b.isCompressedTexture===!0||b.format===Ks||Y!==un&&Y!==Zn&&(Y===ze?o===!1?e.has("EXT_sRGB")===!0&&re===$t?(b.format=Ks,b.minFilter=zt,b.generateMipmaps=!1):M=cc.sRGBToLinear(M):(re!==$t||oe!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=q,this.setTexture2DArray=fe,this.setTexture3D=Z,this.setTextureCube=I,this.rebindTextures=ye,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Fe}function Tg(n,e,t){const i=t.isWebGL2;function r(s,a=Zn){let o;if(s===ni)return n.UNSIGNED_BYTE;if(s===ef)return n.UNSIGNED_SHORT_4_4_4_4;if(s===tf)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Ju)return n.BYTE;if(s===$u)return n.SHORT;if(s===rc)return n.UNSIGNED_SHORT;if(s===Qu)return n.INT;if(s===qn)return n.UNSIGNED_INT;if(s===Yn)return n.FLOAT;if(s===ar)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===nf)return n.ALPHA;if(s===$t)return n.RGBA;if(s===rf)return n.LUMINANCE;if(s===sf)return n.LUMINANCE_ALPHA;if(s===jn)return n.DEPTH_COMPONENT;if(s===Fi)return n.DEPTH_STENCIL;if(s===Ks)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===af)return n.RED;if(s===of)return n.RED_INTEGER;if(s===lf)return n.RG;if(s===cf)return n.RG_INTEGER;if(s===uf)return n.RGBA_INTEGER;if(s===us||s===fs||s===hs||s===ds)if(a===ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===us)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===us)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===za||s===ka||s===Ga||s===Ha)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===za)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ka)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ga)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ha)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ff)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Va||s===Wa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Va)return a===ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Wa)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xa||s===qa||s===Ya||s===ja||s===Ka||s===Za||s===Ja||s===$a||s===Qa||s===eo||s===to||s===no||s===io||s===ro)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Xa)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qa)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ya)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ja)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ka)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Za)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ja)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$a)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qa)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===eo)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===to)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===no)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===io)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ro)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ps)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ps)return a===ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===hf||s===so||s===ao||s===oo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ps)return o.COMPRESSED_RED_RGTC1_EXT;if(s===so)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ao)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===oo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class wg extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ji extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ag={type:"move"};class Fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Rg extends Ft{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:jn,u!==jn&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===jn&&(i=qn),i===void 0&&u===Fi&&(i=Pi),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=c!==void 0?c:Ct,this.flipY=!1,this.generateMipmaps=!1}}class Cg extends Hi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const w=[],S=[],y=new Set,x=new Map,E=new Kt;E.layers.enable(1),E.viewport=new lt;const A=new Kt;A.layers.enable(2),A.viewport=new lt;const F=[E,A],v=new wg;v.layers.enable(1),v.layers.enable(2);let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let k=w[I];return k===void 0&&(k=new Fs,w[I]=k),k.getTargetRaySpace()},this.getControllerGrip=function(I){let k=w[I];return k===void 0&&(k=new Fs,w[I]=k),k.getGripSpace()},this.getHand=function(I){let k=w[I];return k===void 0&&(k=new Fs,w[I]=k),k.getHandSpace()};function j(I){const k=S.indexOf(I.inputSource);if(k===-1)return;const ne=w[k];ne!==void 0&&(ne.update(I.inputSource,I.frame,l||a),ne.dispatchEvent({type:I.type,data:I.inputSource}))}function N(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",O);for(let I=0;I<w.length;I++){const k=S[I];k!==null&&(S[I]=null,w[I].disconnect(k))}R=null,X=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,Z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",N),r.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:p}),d=new ii(p.framebufferWidth,p.framebufferHeight,{format:$t,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let k=null,ne=null,se=null;_.depth&&(se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=_.stencil?Fi:jn,ne=_.stencil?Pi:qn);const P={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(P),r.updateRenderState({layers:[h]}),d=new ii(h.textureWidth,h.textureHeight,{format:$t,type:ni,depthTexture:new Rg(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Se=e.properties.get(d);Se.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(I){for(let k=0;k<I.removed.length;k++){const ne=I.removed[k],se=S.indexOf(ne);se>=0&&(S[se]=null,w[se].disconnect(ne))}for(let k=0;k<I.added.length;k++){const ne=I.added[k];let se=S.indexOf(ne);if(se===-1){for(let Se=0;Se<w.length;Se++)if(Se>=S.length){S.push(ne),se=Se;break}else if(S[Se]===null){S[Se]=ne,se=Se;break}if(se===-1)break}const P=w[se];P&&P.connect(ne)}}const W=new U,ie=new U;function K(I,k,ne){W.setFromMatrixPosition(k.matrixWorld),ie.setFromMatrixPosition(ne.matrixWorld);const se=W.distanceTo(ie),P=k.projectionMatrix.elements,Se=ne.projectionMatrix.elements,be=P[14]/(P[10]-1),ce=P[14]/(P[10]+1),ge=(P[9]+1)/P[5],Pe=(P[9]-1)/P[5],de=(P[8]-1)/P[0],ye=(Se[8]+1)/Se[0],De=be*de,Ue=be*ye,Ge=se/(-de+ye),Be=Ge*-de;k.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Be),I.translateZ(Ge),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Fe=be+Ge,H=ce+Ge,pe=De-Be,b=Ue+(se-Be),M=ge*ce/H*Fe,Y=Pe*ce/H*Fe;I.projectionMatrix.makePerspective(pe,b,M,Y,Fe,H),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function V(I,k){k===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(k.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;v.near=A.near=E.near=I.near,v.far=A.far=E.far=I.far,(R!==v.near||X!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,X=v.far);const k=I.parent,ne=v.cameras;V(v,k);for(let se=0;se<ne.length;se++)V(ne[se],k);ne.length===2?K(v,E,A):v.projectionMatrix.copy(E.projectionMatrix),Q(I,v,k)};function Q(I,k,ne){ne===null?I.matrix.copy(k.matrixWorld):(I.matrix.copy(ne.matrixWorld),I.matrix.invert(),I.matrix.multiply(k.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0);const se=I.children;for(let P=0,Se=se.length;P<Se;P++)se[P].updateMatrixWorld(!0);I.projectionMatrix.copy(k.projectionMatrix),I.projectionMatrixInverse.copy(k.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=or*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(I){c=I,h!==null&&(h.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)},this.getPlanes=function(){return y};let q=null;function fe(I,k){if(u=k.getViewerPose(l||a),g=k,u!==null){const ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let se=!1;ne.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let P=0;P<ne.length;P++){const Se=ne[P];let be=null;if(p!==null)be=p.getViewport(Se);else{const ge=f.getViewSubImage(h,Se);be=ge.viewport,P===0&&(e.setRenderTargetTextures(d,ge.colorTexture,h.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(d))}let ce=F[P];ce===void 0&&(ce=new Kt,ce.layers.enable(P),ce.viewport=new lt,F[P]=ce),ce.matrix.fromArray(Se.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Se.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(be.x,be.y,be.width,be.height),P===0&&(v.matrix.copy(ce.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(ce)}}for(let ne=0;ne<w.length;ne++){const se=S[ne],P=w[ne];se!==null&&P!==void 0&&P.update(se,k,l||a)}if(q&&q(I,k),k.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:k.detectedPlanes});let ne=null;for(const se of y)k.detectedPlanes.has(se)||(ne===null&&(ne=[]),ne.push(se));if(ne!==null)for(const se of ne)y.delete(se),x.delete(se),i.dispatchEvent({type:"planeremoved",data:se});for(const se of k.detectedPlanes)if(!y.has(se))y.add(se),x.set(se,k.lastChangedTime),i.dispatchEvent({type:"planeadded",data:se});else{const P=x.get(se);se.lastChangedTime>P&&(x.set(se,se.lastChangedTime),i.dispatchEvent({type:"planechanged",data:se}))}}g=null}const Z=new xc;Z.setAnimationLoop(fe),this.setAnimationLoop=function(I){q=I},this.dispose=function(){}}}function Lg(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,mc(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,S,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,w,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const S=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*S,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,w,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Pg(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,S){const y=S.program;i.uniformBlockBinding(w,y)}function l(w,S){let y=r[w.id];y===void 0&&(g(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",m));const x=S.program;i.updateUBOMapping(w,x);const E=e.render.frame;s[w.id]!==E&&(h(w),s[w.id]=E)}function u(w){const S=f();w.__bindingPointIndex=S;const y=n.createBuffer(),x=w.__size,E=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,x,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const S=r[w.id],y=w.uniforms,x=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,A=y.length;E<A;E++){const F=y[E];if(p(F,E,x)===!0){const v=F.__offset,R=Array.isArray(F.value)?F.value:[F.value];let X=0;for(let j=0;j<R.length;j++){const N=R[j],O=_(N);typeof N=="number"?(F.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,v+X,F.__data)):N.isMatrix3?(F.__data[0]=N.elements[0],F.__data[1]=N.elements[1],F.__data[2]=N.elements[2],F.__data[3]=N.elements[0],F.__data[4]=N.elements[3],F.__data[5]=N.elements[4],F.__data[6]=N.elements[5],F.__data[7]=N.elements[0],F.__data[8]=N.elements[6],F.__data[9]=N.elements[7],F.__data[10]=N.elements[8],F.__data[11]=N.elements[0]):(N.toArray(F.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,v,F.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,S,y){const x=w.value;if(y[S]===void 0){if(typeof x=="number")y[S]=x;else{const E=Array.isArray(x)?x:[x],A=[];for(let F=0;F<E.length;F++)A.push(E[F].clone());y[S]=A}return!0}else if(typeof x=="number"){if(y[S]!==x)return y[S]=x,!0}else{const E=Array.isArray(y[S])?y[S]:[y[S]],A=Array.isArray(x)?x:[x];for(let F=0;F<E.length;F++){const v=E[F];if(v.equals(A[F])===!1)return v.copy(A[F]),!0}}return!1}function g(w){const S=w.uniforms;let y=0;const x=16;let E=0;for(let A=0,F=S.length;A<F;A++){const v=S[A],R={boundary:0,storage:0},X=Array.isArray(v.value)?v.value:[v.value];for(let j=0,N=X.length;j<N;j++){const O=X[j],W=_(O);R.boundary+=W.boundary,R.storage+=W.storage}if(v.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=y,A>0){E=y%x;const j=x-E;E!==0&&j-R.boundary<0&&(y+=x-E,v.__offset=y)}y+=R.storage}return E=y%x,E>0&&(y+=x-E),w.__size=y,w.__cache={},this}function _(w){const S={boundary:0,storage:0};return typeof w=="number"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}function Dg(){const n=Yr("canvas");return n.style.display="block",n}class Tc{constructor(e={}){const{canvas:t=Dg(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ze,this.useLegacyLights=!0,this.toneMapping=Sn,this.toneMappingExposure=1;const d=this;let w=!1,S=0,y=0,x=null,E=-1,A=null;const F=new lt,v=new lt;let R=null,X=t.width,j=t.height,N=1,O=null,W=null;const ie=new lt(0,0,X,j),K=new lt(0,0,X,j);let V=!1;const Q=new vc;let q=!1,fe=!1,Z=null;const I=new ct,k=new U,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return x===null?N:1}let P=i;function Se(T,z){for(let $=0;$<T.length;$++){const B=T[$],te=t.getContext(B,z);if(te!==null)return te}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ia}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),P===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),P=Se(z,T),P===null)throw Se(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let be,ce,ge,Pe,de,ye,De,Ue,Ge,Be,Fe,H,pe,b,M,Y,re,oe,he,Re,xe,ee,we,Ce;function Ie(){be=new Vp(P),ce=new Op(P,be,e),be.init(ce),ee=new Tg(P,be,ce),ge=new Eg(P,be,ce),Pe=new qp(P),de=new cg,ye=new bg(P,be,ge,de,ce,ee,Pe),De=new zp(d),Ue=new Hp(d),Ge=new rh(P,ce),we=new Np(P,be,Ge,ce),Be=new Wp(P,Ge,Pe,we),Fe=new Zp(P,Be,Ge,Pe),he=new Kp(P,ce,ye),Y=new Bp(de),H=new lg(d,De,Ue,be,ce,we,Y),pe=new Lg(d,de),b=new fg,M=new _g(be,ce),oe=new Ip(d,De,Ue,ge,Fe,h,c),re=new yg(d,Fe,ce),Ce=new Pg(P,Pe,ce,ge),Re=new Fp(P,be,Pe,ce),xe=new Xp(P,be,Pe,ce),Pe.programs=H.programs,d.capabilities=ce,d.extensions=be,d.properties=de,d.renderLists=b,d.shadowMap=re,d.state=ge,d.info=Pe}Ie();const _e=new Cg(d,P);this.xr=_e,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(X,j,!1))},this.getSize=function(T){return T.set(X,j)},this.setSize=function(T,z,$=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,j=z,t.width=Math.floor(T*N),t.height=Math.floor(z*N),$===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(X*N,j*N).floor()},this.setDrawingBufferSize=function(T,z,$){X=T,j=z,N=$,t.width=Math.floor(T*$),t.height=Math.floor(z*$),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(ie)},this.setViewport=function(T,z,$,B){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,z,$,B),ge.viewport(F.copy(ie).multiplyScalar(N).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,z,$,B){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,z,$,B),ge.scissor(v.copy(K).multiplyScalar(N).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){ge.setScissorTest(V=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(T=!0,z=!0,$=!0){let B=0;T&&(B|=P.COLOR_BUFFER_BIT),z&&(B|=P.DEPTH_BUFFER_BIT),$&&(B|=P.STENCIL_BUFFER_BIT),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),b.dispose(),M.dispose(),de.dispose(),De.dispose(),Ue.dispose(),Fe.dispose(),we.dispose(),Ce.dispose(),H.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Te),_e.removeEventListener("sessionend",tt),Z&&(Z.dispose(),Z=null),nt.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ke(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=Pe.autoReset,z=re.enabled,$=re.autoUpdate,B=re.needsUpdate,te=re.type;Ie(),Pe.autoReset=T,re.enabled=z,re.autoUpdate=$,re.needsUpdate=B,re.type=te}function Qe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function at(T){const z=T.target;z.removeEventListener("dispose",at),D(z)}function D(T){J(T),de.remove(T)}function J(T){const z=de.get(T).programs;z!==void 0&&(z.forEach(function($){H.releaseProgram($)}),T.isShaderMaterial&&H.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,$,B,te,Le){z===null&&(z=ne);const Ne=te.isMesh&&te.matrixWorld.determinant()<0,Oe=zc(T,z,$,B,te);ge.setMaterial(B,Ne);let He=$.index,We=1;B.wireframe===!0&&(He=Be.getWireframeAttribute($),We=2);const Xe=$.drawRange,qe=$.attributes.position;let et=Xe.start*We,Tt=(Xe.start+Xe.count)*We;Le!==null&&(et=Math.max(et,Le.start*We),Tt=Math.min(Tt,(Le.start+Le.count)*We)),He!==null?(et=Math.max(et,0),Tt=Math.min(Tt,He.count)):qe!=null&&(et=Math.max(et,0),Tt=Math.min(Tt,qe.count));const Vt=Tt-et;if(Vt<0||Vt===1/0)return;we.setup(te,B,Oe,$,He);let Fn,ut=Re;if(He!==null&&(Fn=Ge.get(He),ut=xe,ut.setIndex(Fn)),te.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*se()),ut.setMode(P.LINES)):ut.setMode(P.TRIANGLES);else if(te.isLine){let Ze=B.linewidth;Ze===void 0&&(Ze=1),ge.setLineWidth(Ze*se()),te.isLineSegments?ut.setMode(P.LINES):te.isLineLoop?ut.setMode(P.LINE_LOOP):ut.setMode(P.LINE_STRIP)}else te.isPoints?ut.setMode(P.POINTS):te.isSprite&&ut.setMode(P.TRIANGLES);if(te.isInstancedMesh)ut.renderInstances(et,Vt,te.count);else if($.isInstancedBufferGeometry){const Ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,is=Math.min($.instanceCount,Ze);ut.renderInstances(et,Vt,is)}else ut.render(et,Vt)},this.compile=function(T,z){function $(B,te,Le){B.transparent===!0&&B.side===Zt&&B.forceSinglePass===!1?(B.side=Dt,B.needsUpdate=!0,hr(B,te,Le),B.side=Un,B.needsUpdate=!0,hr(B,te,Le),B.side=Zt):hr(B,te,Le)}g=M.get(T),g.init(),m.push(g),T.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights(d.useLegacyLights),T.traverse(function(B){const te=B.material;if(te)if(Array.isArray(te))for(let Le=0;Le<te.length;Le++){const Ne=te[Le];$(Ne,T,B)}else $(te,T,B)}),m.pop(),g=null};let ae=null;function me(T){ae&&ae(T)}function Te(){nt.stop()}function tt(){nt.start()}const nt=new xc;nt.setAnimationLoop(me),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(T){ae=T,_e.setAnimationLoop(T),T===null?nt.stop():nt.start()},_e.addEventListener("sessionstart",Te),_e.addEventListener("sessionend",tt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(z),z=_e.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,z,x),g=M.get(T,m.length),g.init(),m.push(g),I.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(I),fe=this.localClippingEnabled,q=Y.init(this.clippingPlanes,fe),p=b.get(T,_.length),p.init(),_.push(p),Mt(T,z,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(O,W),q===!0&&Y.beginShadows();const $=g.state.shadowsArray;if(re.render($,T,z),q===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(p,T),g.setupLights(d.useLegacyLights),z.isArrayCamera){const B=z.cameras;for(let te=0,Le=B.length;te<Le;te++){const Ne=B[te];En(p,T,Ne,Ne.viewport)}}else En(p,T,z);x!==null&&(ye.updateMultisampleRenderTarget(x),ye.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(d,T,z),we.resetDefaultState(),E=-1,A=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Mt(T,z,$,B){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){B&&k.setFromMatrixPosition(T.matrixWorld).applyMatrix4(I);const Ne=Fe.update(T),Oe=T.material;Oe.visible&&p.push(T,Ne,Oe,$,k.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==Pe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Pe.render.frame);const Ne=Fe.update(T),Oe=T.material;if(B&&(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),k.copy(Ne.boundingSphere.center).applyMatrix4(T.matrixWorld).applyMatrix4(I)),Array.isArray(Oe)){const He=Ne.groups;for(let We=0,Xe=He.length;We<Xe;We++){const qe=He[We],et=Oe[qe.materialIndex];et&&et.visible&&p.push(T,Ne,et,$,k.z,qe)}}else Oe.visible&&p.push(T,Ne,Oe,$,k.z,null)}}const Le=T.children;for(let Ne=0,Oe=Le.length;Ne<Oe;Ne++)Mt(Le[Ne],z,$,B)}function En(T,z,$,B){const te=T.opaque,Le=T.transmissive,Ne=T.transparent;g.setupLightsView($),q===!0&&Y.setGlobalState(d.clippingPlanes,$),Le.length>0&&ot(te,Le,z,$),B&&ge.viewport(F.copy(B)),te.length>0&&Ot(te,z,$),Le.length>0&&Ot(Le,z,$),Ne.length>0&&Ot(Ne,z,$),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function ot(T,z,$,B){if(Z===null){const Oe=ce.isWebGL2;Z=new ii(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?ar:ni,minFilter:sr,samples:Oe&&o===!0?4:0})}const te=d.getRenderTarget();d.setRenderTarget(Z),d.clear();const Le=d.toneMapping;d.toneMapping=Sn,Ot(T,$,B),ye.updateMultisampleRenderTarget(Z),ye.updateRenderTargetMipmap(Z);let Ne=!1;for(let Oe=0,He=z.length;Oe<He;Oe++){const We=z[Oe],Xe=We.object,qe=We.geometry,et=We.material,Tt=We.group;if(et.side===Zt&&Xe.layers.test(B.layers)){const Vt=et.side;et.side=Dt,et.needsUpdate=!0,tn(Xe,$,B,qe,et,Tt),et.side=Vt,et.needsUpdate=!0,Ne=!0}}Ne===!0&&(ye.updateMultisampleRenderTarget(Z),ye.updateRenderTargetMipmap(Z)),d.setRenderTarget(te),d.toneMapping=Le}function Ot(T,z,$){const B=z.isScene===!0?z.overrideMaterial:null;for(let te=0,Le=T.length;te<Le;te++){const Ne=T[te],Oe=Ne.object,He=Ne.geometry,We=B===null?Ne.material:B,Xe=Ne.group;Oe.layers.test($.layers)&&tn(Oe,z,$,He,We,Xe)}}function tn(T,z,$,B,te,Le){T.onBeforeRender(d,z,$,B,te,Le),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),te.onBeforeRender(d,z,$,B,T,Le),te.transparent===!0&&te.side===Zt&&te.forceSinglePass===!1?(te.side=Dt,te.needsUpdate=!0,d.renderBufferDirect($,z,B,te,T,Le),te.side=Un,te.needsUpdate=!0,d.renderBufferDirect($,z,B,te,T,Le),te.side=Zt):d.renderBufferDirect($,z,B,te,T,Le),T.onAfterRender(d,z,$,B,te,Le)}function hr(T,z,$){z.isScene!==!0&&(z=ne);const B=de.get(T),te=g.state.lights,Le=g.state.shadowsArray,Ne=te.state.version,Oe=H.getParameters(T,te.state,Le,z,$),He=H.getProgramCacheKey(Oe);let We=B.programs;B.environment=T.isMeshStandardMaterial?z.environment:null,B.fog=z.fog,B.envMap=(T.isMeshStandardMaterial?Ue:De).get(T.envMap||B.environment),We===void 0&&(T.addEventListener("dispose",at),We=new Map,B.programs=We);let Xe=We.get(He);if(Xe!==void 0){if(B.currentProgram===Xe&&B.lightsStateVersion===Ne)return ha(T,Oe),Xe}else Oe.uniforms=H.getUniforms(T),T.onBuild($,Oe,d),T.onBeforeCompile(Oe,d),Xe=H.acquireProgram(Oe,He),We.set(He,Xe),B.uniforms=Oe.uniforms;const qe=B.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=Y.uniform),ha(T,Oe),B.needsLights=Gc(T),B.lightsStateVersion=Ne,B.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMap.value=te.state.directionalShadowMap,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotShadowMap.value=te.state.spotShadowMap,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMap.value=te.state.pointShadowMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix);const et=Xe.getUniforms(),Tt=Gr.seqWithValue(et.seq,qe);return B.currentProgram=Xe,B.uniformsList=Tt,Xe}function ha(T,z){const $=de.get(T);$.outputColorSpace=z.outputColorSpace,$.instancing=z.instancing,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function zc(T,z,$,B,te){z.isScene!==!0&&(z=ne),ye.resetTextureUnits();const Le=z.fog,Ne=B.isMeshStandardMaterial?z.environment:null,Oe=x===null?d.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:un,He=(B.isMeshStandardMaterial?Ue:De).get(B.envMap||Ne),We=B.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!B.normalMap&&!!$.attributes.tangent,qe=!!$.morphAttributes.position,et=!!$.morphAttributes.normal,Tt=!!$.morphAttributes.color,Vt=B.toneMapped?d.toneMapping:Sn,Fn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ut=Fn!==void 0?Fn.length:0,Ze=de.get(B),is=g.state.lights;if(q===!0&&(fe===!0||T!==A)){const Ut=T===A&&B.id===E;Y.setState(B,T,Ut)}let mt=!1;B.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==is.state.version||Ze.outputColorSpace!==Oe||te.isInstancedMesh&&Ze.instancing===!1||!te.isInstancedMesh&&Ze.instancing===!0||te.isSkinnedMesh&&Ze.skinning===!1||!te.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==He||B.fog===!0&&Ze.fog!==Le||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Y.numPlanes||Ze.numIntersection!==Y.numIntersection)||Ze.vertexAlphas!==We||Ze.vertexTangents!==Xe||Ze.morphTargets!==qe||Ze.morphNormals!==et||Ze.morphColors!==Tt||Ze.toneMapping!==Vt||ce.isWebGL2===!0&&Ze.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,Ze.__version=B.version);let On=Ze.currentProgram;mt===!0&&(On=hr(B,z,te));let da=!1,Xi=!1,rs=!1;const wt=On.getUniforms(),Bn=Ze.uniforms;if(ge.useProgram(On.program)&&(da=!0,Xi=!0,rs=!0),B.id!==E&&(E=B.id,Xi=!0),da||A!==T){if(wt.setValue(P,"projectionMatrix",T.projectionMatrix),ce.logarithmicDepthBuffer&&wt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),A!==T&&(A=T,Xi=!0,rs=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Ut=wt.map.cameraPosition;Ut!==void 0&&Ut.setValue(P,k.setFromMatrixPosition(T.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&wt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||te.isSkinnedMesh)&&wt.setValue(P,"viewMatrix",T.matrixWorldInverse)}if(te.isSkinnedMesh){wt.setOptional(P,te,"bindMatrix"),wt.setOptional(P,te,"bindMatrixInverse");const Ut=te.skeleton;Ut&&(ce.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),wt.setValue(P,"boneTexture",Ut.boneTexture,ye),wt.setValue(P,"boneTextureSize",Ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ss=$.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0&&ce.isWebGL2===!0)&&he.update(te,$,On),(Xi||Ze.receiveShadow!==te.receiveShadow)&&(Ze.receiveShadow=te.receiveShadow,wt.setValue(P,"receiveShadow",te.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Bn.envMap.value=He,Bn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Xi&&(wt.setValue(P,"toneMappingExposure",d.toneMappingExposure),Ze.needsLights&&kc(Bn,rs),Le&&B.fog===!0&&pe.refreshFogUniforms(Bn,Le),pe.refreshMaterialUniforms(Bn,B,N,j,Z),Gr.upload(P,Ze.uniformsList,Bn,ye)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Gr.upload(P,Ze.uniformsList,Bn,ye),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&wt.setValue(P,"center",te.center),wt.setValue(P,"modelViewMatrix",te.modelViewMatrix),wt.setValue(P,"normalMatrix",te.normalMatrix),wt.setValue(P,"modelMatrix",te.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ut=B.uniformsGroups;for(let as=0,Hc=Ut.length;as<Hc;as++)if(ce.isWebGL2){const pa=Ut[as];Ce.update(pa,On),Ce.bind(pa,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function kc(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Gc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,z,$){de.get(T.texture).__webglTexture=z,de.get(T.depthTexture).__webglTexture=$;const B=de.get(T);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=$===void 0,B.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const $=de.get(T);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,$=0){x=T,S=z,y=$;let B=!0,te=null,Le=!1,Ne=!1;if(T){const He=de.get(T);He.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(P.FRAMEBUFFER,null),B=!1):He.__webglFramebuffer===void 0?ye.setupRenderTarget(T):He.__hasExternalTextures&&ye.rebindTextures(T,de.get(T.texture).__webglTexture,de.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ne=!0);const Xe=de.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(te=Xe[z],Le=!0):ce.isWebGL2&&T.samples>0&&ye.useMultisampledRTT(T)===!1?te=de.get(T).__webglMultisampledFramebuffer:te=Xe,F.copy(T.viewport),v.copy(T.scissor),R=T.scissorTest}else F.copy(ie).multiplyScalar(N).floor(),v.copy(K).multiplyScalar(N).floor(),R=V;if(ge.bindFramebuffer(P.FRAMEBUFFER,te)&&ce.drawBuffers&&B&&ge.drawBuffers(T,te),ge.viewport(F),ge.scissor(v),ge.setScissorTest(R),Le){const He=de.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,He.__webglTexture,$)}else if(Ne){const He=de.get(T.texture),We=z||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,He.__webglTexture,$||0,We)}E=-1},this.readRenderTargetPixels=function(T,z,$,B,te,Le,Ne){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=de.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){ge.bindFramebuffer(P.FRAMEBUFFER,Oe);try{const He=T.texture,We=He.format,Xe=He.type;if(We!==$t&&ee.convert(We)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Xe===ar&&(be.has("EXT_color_buffer_half_float")||ce.isWebGL2&&be.has("EXT_color_buffer_float"));if(Xe!==ni&&ee.convert(Xe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Yn&&(ce.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-B&&$>=0&&$<=T.height-te&&P.readPixels(z,$,B,te,ee.convert(We),ee.convert(Xe),Le)}finally{const He=x!==null?de.get(x).__webglFramebuffer:null;ge.bindFramebuffer(P.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(T,z,$=0){const B=Math.pow(2,-$),te=Math.floor(z.image.width*B),Le=Math.floor(z.image.height*B);ye.setTexture2D(z,0),P.copyTexSubImage2D(P.TEXTURE_2D,$,0,0,T.x,T.y,te,Le),ge.unbindTexture()},this.copyTextureToTexture=function(T,z,$,B=0){const te=z.image.width,Le=z.image.height,Ne=ee.convert($.format),Oe=ee.convert($.type);ye.setTexture2D($,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,$.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,$.unpackAlignment),z.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,T.x,T.y,te,Le,Ne,Oe,z.image.data):z.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Ne,z.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,B,T.x,T.y,Ne,Oe,z.image),B===0&&$.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,z,$,B,te=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=T.max.x-T.min.x+1,Ne=T.max.y-T.min.y+1,Oe=T.max.z-T.min.z+1,He=ee.convert(B.format),We=ee.convert(B.type);let Xe;if(B.isData3DTexture)ye.setTexture3D(B,0),Xe=P.TEXTURE_3D;else if(B.isDataArrayTexture)ye.setTexture2DArray(B,0),Xe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const qe=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Tt=P.getParameter(P.UNPACK_SKIP_PIXELS),Vt=P.getParameter(P.UNPACK_SKIP_ROWS),Fn=P.getParameter(P.UNPACK_SKIP_IMAGES),ut=$.isCompressedTexture?$.mipmaps[0]:$.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,T.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?P.texSubImage3D(Xe,te,z.x,z.y,z.z,Le,Ne,Oe,He,We,ut.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Xe,te,z.x,z.y,z.z,Le,Ne,Oe,He,ut.data)):P.texSubImage3D(Xe,te,z.x,z.y,z.z,Le,Ne,Oe,He,We,ut),P.pixelStorei(P.UNPACK_ROW_LENGTH,qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Tt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fn),te===0&&B.generateMipmaps&&P.generateMipmap(Xe),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ye.setTextureCube(T,0):T.isData3DTexture?ye.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ye.setTexture2DArray(T,0):ye.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){S=0,y=0,x=null,ge.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?Kn:sc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kn?ze:un}}class Ug extends Tc{}Ug.prototype.isWebGL1Renderer=!0;class Ig extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ng{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=js,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new U;class Cn{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wc extends ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jo=new ct,$s=new sa,Ur=new Vi,Ir=new U;class Fg extends Lt{constructor(e=new Ht,t=new wc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(r),Ur.radius+=s,e.ray.intersectsSphere(Ur)===!1)return;jo.copy(r).invert(),$s.copy(e.ray).applyMatrix4(jo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const h=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=h,_=p;g<_;g++){const m=l.getX(g);Ir.fromBufferAttribute(f,m),Ko(Ir,m,c,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,_=p;g<_;g++)Ir.fromBufferAttribute(f,g),Ko(Ir,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ko(n,e,t,i,r,s,a){const o=$s.distanceSqToPoint(n);if(o<t){const c=new U;$s.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class jr extends Ht{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new U,u=new je;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const p=i+f/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Kr extends Ht{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let f=e;const h=(t-e)/r,p=new U,g=new je;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const d=s+m/i*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let d=0;d<i;d++){const w=d+m,S=w,y=w+i+1,x=w+i+2,E=w+1;o.push(S,y,E),o.push(y,x,E)}}this.setIndex(o),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Og extends Ht{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new U,s=new U;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const f=c[l],h=f.start,p=f.count;for(let g=h,_=h+p;g<_;g+=3)for(let m=0;m<3;m++){const d=o.getX(g+m),w=o.getX(g+(m+1)%3);r.fromBufferAttribute(a,d),s.fromBufferAttribute(a,w),Zo(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,f=3*o+(l+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,f),Zo(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new bt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Zo(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class Bg extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class zg extends Bg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kg extends Ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Qs extends Ng{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Gg{constructor(e,t,i=0,r=1/0){this.ray=new sa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ea(e,this,i,t),i.sort(Jo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ea(e[r],this,i,t);return i.sort(Jo),i}}function Jo(n,e){return n.distance-e.distance}function ea(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)ea(r[s],e,t,!0)}}const $o=new U,Nr=new U;class Hg{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){$o.subVectors(e,this.start),Nr.subVectors(this.end,this.start);const i=Nr.dot(Nr);let s=Nr.dot($o)/i;return t&&(s=Et(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);function Qo(n,e,t){const i=n.slice();return i[8]=e[t],i}function el(n){let e,t,i,r,s=n[0].title+"",a,o,c,l,u,f,h,p,g,_=n[0].provider+"",m,d,w,S,y,x,E,A=n[0].upvotes+"",F,v,R,X,j,N,O,W=new Date(n[0].created_at).toLocaleDateString()+"",ie,K,V,Q,q,fe,Z,I,k=n[0].tunnel_url+"",ne,se,P,Se,be,ce,ge,Pe,de,ye,De=n[2]&&tl(n),Ue=n[0].description&&nl(n),Ge=n[0].tags&&n[0].tags.length>0&&il(n),Be=n[4]&&sl(n);return{c(){e=G("div"),t=G("div"),i=G("div"),r=G("h3"),a=Ee(s),o=le(),c=G("button"),c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>',l=le(),u=G("div"),f=G("div"),h=G("span"),h.textContent="Provider",p=le(),g=G("span"),m=Ee(_),d=le(),w=G("div"),S=G("span"),S.textContent="Upvotes",y=le(),x=G("div"),E=G("span"),F=Ee(A),v=le(),De&&De.c(),R=le(),X=G("div"),j=G("span"),j.textContent="Created",N=le(),O=G("span"),ie=Ee(W),K=le(),Ue&&Ue.c(),V=le(),Ge&&Ge.c(),Q=le(),q=G("div"),fe=G("h4"),fe.textContent="Tunnel URL",Z=le(),I=G("a"),ne=Ee(k),P=le(),Be&&Be.c(),Se=le(),be=G("div"),ce=G("a"),ge=Ee("Visit Tunnel"),L(r,"class","text-xl font-bold text-purple-300"),L(c,"class","text-gray-400 hover:text-white"),L(i,"class","flex justify-between items-start mb-4"),L(h,"class","text-sm text-gray-400"),L(g,"class","text-sm font-medium text-white"),L(f,"class","flex items-center justify-between mb-2"),L(S,"class","text-sm text-gray-400"),L(E,"class","text-sm font-medium text-white mr-2"),L(x,"class","flex items-center"),L(w,"class","flex items-center justify-between mb-2"),L(j,"class","text-sm text-gray-400"),L(O,"class","text-sm font-medium text-white"),L(X,"class","flex items-center justify-between"),L(u,"class","mb-4"),L(fe,"class","text-sm font-medium text-gray-400 mb-1"),L(I,"href",se=n[0].tunnel_url),L(I,"target","_blank"),L(I,"rel","noopener noreferrer"),L(I,"class","block p-2 bg-gray-700 rounded text-blue-400 hover:text-blue-300 text-sm break-all"),L(q,"class","mt-4"),L(ce,"href",Pe=n[0].tunnel_url),L(ce,"target","_blank"),L(ce,"rel","noopener noreferrer"),L(ce,"class","px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors"),L(be,"class","mt-6 flex justify-end"),L(t,"class","bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md border border-purple-500"),L(e,"class","fixed inset-0 flex items-center justify-center z-50 p-4")},m(Fe,H){Me(Fe,e,H),C(e,t),C(t,i),C(i,r),C(r,a),C(i,o),C(i,c),C(t,l),C(t,u),C(u,f),C(f,h),C(f,p),C(f,g),C(g,m),C(u,d),C(u,w),C(w,S),C(w,y),C(w,x),C(x,E),C(E,F),C(x,v),De&&De.m(x,null),C(u,R),C(u,X),C(X,j),C(X,N),C(X,O),C(O,ie),C(t,K),Ue&&Ue.m(t,null),C(t,V),Ge&&Ge.m(t,null),C(t,Q),C(t,q),C(q,fe),C(q,Z),C(q,I),C(I,ne),C(t,P),Be&&Be.m(t,null),C(t,Se),C(t,be),C(be,ce),C(ce,ge),de||(ye=[rt(c,"click",function(){Hr(n[1])&&n[1].apply(this,arguments)}),rt(e,"click",Xc(function(){Hr(n[1])&&n[1].apply(this,arguments)}))],de=!0)},p(Fe,H){n=Fe,H&1&&s!==(s=n[0].title+"")&&ke(a,s),H&1&&_!==(_=n[0].provider+"")&&ke(m,_),H&1&&A!==(A=n[0].upvotes+"")&&ke(F,A),n[2]?De?De.p(n,H):(De=tl(n),De.c(),De.m(x,null)):De&&(De.d(1),De=null),H&1&&W!==(W=new Date(n[0].created_at).toLocaleDateString()+"")&&ke(ie,W),n[0].description?Ue?Ue.p(n,H):(Ue=nl(n),Ue.c(),Ue.m(t,V)):Ue&&(Ue.d(1),Ue=null),n[0].tags&&n[0].tags.length>0?Ge?Ge.p(n,H):(Ge=il(n),Ge.c(),Ge.m(t,Q)):Ge&&(Ge.d(1),Ge=null),H&1&&k!==(k=n[0].tunnel_url+"")&&ke(ne,k),H&1&&se!==(se=n[0].tunnel_url)&&L(I,"href",se),n[4]?Be?Be.p(n,H):(Be=sl(n),Be.c(),Be.m(t,Se)):Be&&(Be.d(1),Be=null),H&1&&Pe!==(Pe=n[0].tunnel_url)&&L(ce,"href",Pe)},d(Fe){Fe&&ve(e),De&&De.d(),Ue&&Ue.d(),Ge&&Ge.d(),Be&&Be.d(),de=!1,en(ye)}}}function tl(n){let e,t,i,r,s,a,o,c;return{c(){e=G("button"),t=on("svg"),i=on("path"),L(i,"stroke-linecap","round"),L(i,"stroke-linejoin","round"),L(i,"stroke-width","2"),L(i,"d","M5 15l7-7 7 7"),L(t,"xmlns","http://www.w3.org/2000/svg"),L(t,"class","h-4 w-4"),L(t,"fill","none"),L(t,"viewBox","0 0 24 24"),L(t,"stroke","currentColor"),e.disabled=r=n[3]||n[5],L(e,"title",s=n[5]?"You've already upvoted this post":"Upvote this post"),L(e,"class",a="inline-flex items-center justify-center w-6 h-6 rounded transition-colors duration-150 ease-in-out "+(n[5]?"bg-purple-800 text-purple-200 cursor-not-allowed":"bg-purple-600 hover:bg-purple-700 text-white")+" disabled:opacity-50")},m(l,u){Me(l,e,u),C(e,t),C(t,i),o||(c=rt(e,"click",n[6]),o=!0)},p(l,u){u&40&&r!==(r=l[3]||l[5])&&(e.disabled=r),u&32&&s!==(s=l[5]?"You've already upvoted this post":"Upvote this post")&&L(e,"title",s),u&32&&a!==(a="inline-flex items-center justify-center w-6 h-6 rounded transition-colors duration-150 ease-in-out "+(l[5]?"bg-purple-800 text-purple-200 cursor-not-allowed":"bg-purple-600 hover:bg-purple-700 text-white")+" disabled:opacity-50")&&L(e,"class",a)},d(l){l&&ve(e),o=!1,c()}}}function nl(n){let e,t,i,r,s=n[0].description+"",a;return{c(){e=G("div"),t=G("h4"),t.textContent="Description",i=le(),r=G("p"),a=Ee(s),L(t,"class","text-sm font-medium text-gray-400 mb-1"),L(r,"class","text-sm text-white"),L(e,"class","mb-4")},m(o,c){Me(o,e,c),C(e,t),C(e,i),C(e,r),C(r,a)},p(o,c){c&1&&s!==(s=o[0].description+"")&&ke(a,s)},d(o){o&&ve(e)}}}function il(n){let e,t,i,r,s=n[0].tags,a=[];for(let o=0;o<s.length;o+=1)a[o]=rl(Qo(n,s,o));return{c(){e=G("div"),t=G("h4"),t.textContent="Tags",i=le(),r=G("div");for(let o=0;o<a.length;o+=1)a[o].c();L(t,"class","text-sm font-medium text-gray-400 mb-1"),L(r,"class","flex flex-wrap gap-1"),L(e,"class","mb-4")},m(o,c){Me(o,e,c),C(e,t),C(e,i),C(e,r);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(r,null)},p(o,c){if(c&1){s=o[0].tags;let l;for(l=0;l<s.length;l+=1){const u=Qo(o,s,l);a[l]?a[l].p(u,c):(a[l]=rl(u),a[l].c(),a[l].m(r,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},d(o){o&&ve(e),Zr(a,o)}}}function rl(n){let e,t=n[8]+"",i,r;return{c(){e=G("span"),i=Ee(t),r=le(),L(e,"class","inline-block bg-purple-600 text-xs py-1 px-2 rounded-full text-white")},m(s,a){Me(s,e,a),C(e,i),C(e,r)},p(s,a){a&1&&t!==(t=s[8]+"")&&ke(i,t)},d(s){s&&ve(e)}}}function sl(n){let e,t;return{c(){e=G("p"),t=Ee(n[4]),L(e,"class","mt-3 text-sm text-red-400")},m(i,r){Me(i,e,r),C(e,t)},p(i,r){r&16&&ke(t,i[4])},d(i){i&&ve(e)}}}function Vg(n){let e,t=n[0]&&el(n);return{c(){t&&t.c(),e=Vl()},m(i,r){t&&t.m(i,r),Me(i,e,r)},p(i,[r]){i[0]?t?t.p(i,r):(t=el(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Je,o:Je,d(i){t&&t.d(i),i&&ve(e)}}}function Wg(n,e,t){let i,{post:r=null}=e,{onClose:s=()=>{}}=e,a=!1,o="",c;ln.subscribe(f=>{t(2,c=f)});let l;Gi.subscribe(f=>{t(7,l=f)});async function u(){if(!(a||!c||i||!r)){t(3,a=!0),t(4,o="");try{const f=await Dn.votePost(r.id);f.own_by_current_user=r.own_by_current_user,Jr(f),t(0,r.upvotes=f.upvotes,r),na(r.id,c)}catch(f){console.error("Error upvoting post:",f),t(4,o=f.message||"Failed to upvote post")}finally{t(3,a=!1)}}}return n.$$set=f=>{"post"in f&&t(0,r=f.post),"onClose"in f&&t(1,s=f.onClose)},n.$$.update=()=>{n.$$.dirty&133&&t(5,i=r&&c&&l&&l[c]&&l[c].includes(r.id))},[r,s,c,a,o,i,u,l]}class Xg extends ki{constructor(e){super(),zi(this,e,Wg,Vg,ri,{post:0,onClose:1})}}const Fr=.12,qg=.6,al=2,Yg=.85,jg=5e-4,Kg=100,Ei=100,Zg=1.2,Ac=15,Jg=20,$g=.15,ol=2,ll=1.5,Qg=5.5,Rc=.25,Mn=32,Bi=6710886,Cc=.5,Lc=.95,Pc=8947848,Dc=16777215,Uc=.3,Ic=.5,Nc=.4,Fc=.7,ts=.03,ns=.05,e_=16096779,t_=.6,n_=5,cl=1.15,i_=7829367,r_=.1,s_=.15,a_=.15,o_=16777215,l_=2,c_=2,u_=11184810,f_=.5,h_=.4,d_=.5,p_=.5,m_=.2,g_=.7,Gt={Pinggy:6514417,Cloudflare:959977,Ngrok:1096065,"Localhost.run":15485081,Serveo:16096779,Localtunnel:9133302,PlayIT:15680580,"Remote.it":1357990,default:6583435},bi=new U,ul=new ct,fl=new ct,hl=new U,dl=new U;class __{constructor(e={}){const t=this;let i,r,s,a;const o={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:i,height:r}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),ul.copy(g.matrixWorldInverse),fl.multiplyMatrices(g.projectionMatrix,ul),l(p,p,g),h(p)},this.setSize=function(p,g){i=p,r=g,s=i/2,a=r/2,c.style.width=p+"px",c.style.height=g+"px"};function l(p,g,_){if(p.isCSS2DObject){bi.setFromMatrixPosition(p.matrixWorld),bi.applyMatrix4(fl);const m=p.visible===!0&&bi.z>=-1&&bi.z<=1&&p.layers.test(_.layers)===!0;if(p.element.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(t,g,_);const w=p.element;w.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(bi.x*s+s)+"px,"+(-bi.y*a+a)+"px)",w.parentNode!==c&&c.appendChild(w),p.onAfterRender(t,g,_)}const d={distanceToCameraSquared:u(_,p)};o.objects.set(p,d)}for(let m=0,d=p.children.length;m<d;m++)l(p.children[m],g,_)}function u(p,g){return hl.setFromMatrixPosition(p.matrixWorld),dl.setFromMatrixPosition(g.matrixWorld),hl.distanceToSquared(dl)}function f(p){const g=[];return p.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function h(p){const g=f(p).sort(function(m,d){if(m.renderOrder!==d.renderOrder)return d.renderOrder-m.renderOrder;const w=o.objects.get(m).distanceToCameraSquared,S=o.objects.get(d).distanceToCameraSquared;return w-S}),_=g.length;for(let m=0,d=g.length;m<d;m++)g[m].element.style.zIndex=_-m}}}class v_{constructor(e,t){this.camera=e,this.domElement=t,this.enabled=!0,this.enableDamping=!0,this.dampingFactor=.1,this.panSpeed=1,this.screenSpacePanning=!0,this.minZoom=.5,this.maxZoom=4,this.zoomSpeed=1,this.inertiaEnabled=!0,this.inertiaFactor=.9,this.isPanning=!1,this.isZooming=!1,this.panStart=new je,this.panEnd=new je,this.panDelta=new je,this.panInertia=new je,this.lastPanTime=0,this.panVelocity=new je,this.touches={ONE:0,TWO:1},this.pointers=[],this.pointerPositions={},this.multiTouchDistance=0,this.pinchZoomEnabled=!0,this.pinchZoomSpeed=1,this.onContextMenu=this.onContextMenu.bind(this),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onPointerCancel=this.onPointerCancel.bind(this),this.onWheel=this.onWheel.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.addEventListeners(),this.changeEvent={type:"change"},this.startEvent={type:"start"},this.endEvent={type:"end"},this._listeners={}}update(){this.enabled&&this.enableDamping&&this.inertiaEnabled&&!this.isPanning&&this.panInertia.lengthSq()>1e-4&&(this.panCamera(this.panInertia.x,this.panInertia.y),this.panInertia.multiplyScalar(this.inertiaFactor),this.dispatchEvent(this.changeEvent))}addEventListener(e,t){this._listeners[e]===void 0&&(this._listeners[e]=[]),this._listeners[e].indexOf(t)===-1&&this._listeners[e].push(t)}removeEventListener(e,t){if(this._listeners[e]!==void 0){const i=this._listeners[e].indexOf(t);i!==-1&&this._listeners[e].splice(i,1)}}dispatchEvent(e){if(this._listeners[e.type]!==void 0){const t=this._listeners[e.type].slice(0);for(let i=0;i<t.length;i++)t[i].call(this,e)}}dispose(){this.removeEventListeners()}addEventListeners(){this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("wheel",this.onWheel,{passive:!1}),this.domElement.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.domElement.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.domElement.addEventListener("touchend",this.onTouchEnd)}removeEventListeners(){this.domElement.removeEventListener("contextmenu",this.onContextMenu),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("wheel",this.onWheel),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd),document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerUp)}onContextMenu(e){this.enabled!==!1&&e.preventDefault()}onPointerDown(e){this.enabled!==!1&&(e.button===0&&e.preventDefault(),this.addPointer(e),e.pointerType==="touch"?this.onTouchStart(e):this.handleMouseDown(e))}onPointerMove(e){this.enabled!==!1&&(e.pointerType==="touch"?this.onTouchMove(e):this.handleMouseMove(e))}onPointerUp(e){if(this.enabled!==!1&&(this.removePointer(e),this.pointers.length===0)){if(document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerUp),this.inertiaEnabled&&this.isPanning){const t=performance.now(),i=Math.min(50,t-this.lastPanTime)/1e3;i>0&&this.panInertia.copy(this.panDelta).multiplyScalar(1/i)}this.isPanning=!1,this.isZooming=!1,this.dispatchEvent(this.endEvent)}}onPointerCancel(e){this.removePointer(e)}onWheel(e){if(this.enabled===!1||this.enableZoom===!1)return;e.preventDefault();let t=0;e.deltaY?e.deltaMode===1?t=e.deltaY*.05:t=e.deltaY*.002:e.wheelDelta?t=-e.wheelDelta*2e-4:e.detail&&(t=e.detail*.002),this.zoom(t*this.zoomSpeed),this.dispatchEvent(this.changeEvent)}onTouchStart(e){if(this.enabled!==!1){switch(e.preventDefault(),e.touches.length){case 1:this.handleTouchStartPan(e);break;case 2:this.handleTouchStartZoom(e);break}this.dispatchEvent(this.startEvent)}}onTouchMove(e){if(this.enabled!==!1)switch(e.preventDefault(),e.touches.length){case 1:this.handleTouchMovePan(e);break;case 2:this.handleTouchMoveZoom(e);break}}onTouchEnd(e){if(this.enabled!==!1){if(this.inertiaEnabled&&this.isPanning){const t=performance.now(),i=Math.min(50,t-this.lastPanTime)/1e3;i>0&&this.panInertia.copy(this.panDelta).multiplyScalar(1/i)}switch(e.touches.length){case 0:this.isPanning=!1,this.isZooming=!1,this.dispatchEvent(this.endEvent);break;case 1:this.handleTouchStartPan(e);break;case 2:this.handleTouchStartZoom(e);break}}}handleMouseDown(e){this.isPanning=!0,this.panStart.set(e.clientX,e.clientY),this.panInertia.set(0,0),document.addEventListener("pointermove",this.onPointerMove),document.addEventListener("pointerup",this.onPointerUp),this.dispatchEvent(this.startEvent)}handleMouseMove(e){this.isPanning&&(this.panEnd.set(e.clientX,e.clientY),this.panDelta.subVectors(this.panEnd,this.panStart),this.panCamera(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd),this.lastPanTime=performance.now(),this.dispatchEvent(this.changeEvent))}handleTouchStartPan(e){this.isPanning=!0,this.panStart.set(e.touches[0].pageX,e.touches[0].pageY),this.panInertia.set(0,0),this.lastPanTime=performance.now()}handleTouchMovePan(e){this.isPanning&&(this.panEnd.set(e.touches[0].pageX,e.touches[0].pageY),this.panDelta.subVectors(this.panEnd,this.panStart),this.panCamera(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd),this.lastPanTime=performance.now(),this.dispatchEvent(this.changeEvent))}handleTouchStartZoom(e){if(!this.pinchZoomEnabled)return;this.isZooming=!0;const t=e.touches[0].pageX-e.touches[1].pageX,i=e.touches[0].pageY-e.touches[1].pageY;this.multiTouchDistance=Math.sqrt(t*t+i*i)}handleTouchMoveZoom(e){if(!this.isZooming||!this.pinchZoomEnabled)return;const t=e.touches[0].pageX-e.touches[1].pageX,i=e.touches[0].pageY-e.touches[1].pageY,r=Math.sqrt(t*t+i*i),s=1+(r-this.multiTouchDistance)*.01*this.pinchZoomSpeed;this.multiTouchDistance=r,this.zoomByRatio(s),this.dispatchEvent(this.changeEvent)}panCamera(e,t){if(!this.enabled)return;const i=this.domElement,r=i.clientWidth,s=i.clientHeight;e=e*this.panSpeed/r,t=t*this.panSpeed/s;const a=this.camera.right-this.camera.left,o=this.camera.top-this.camera.bottom;e*=a,t*=o,this.camera.position.x-=e,this.camera.position.y+=t,this.camera.updateProjectionMatrix()}zoom(e){if(!this.enabled)return;const t=Math.pow(.95,e);this.zoomByRatio(t)}zoomByRatio(e){if(!this.enabled)return;let t=this.camera.zoom*e;t=Math.max(this.minZoom,Math.min(this.maxZoom,t)),this.camera.zoom=t,this.camera.updateProjectionMatrix()}addPointer(e){this.pointers.push(e)}removePointer(e){for(let t=0;t<this.pointers.length;t++)if(this.pointers[t].pointerId===e.pointerId){this.pointers.splice(t,1);return}}}function x_(){const n=new Ig;return n.background=new $e(988970),n}function M_(n){const e=n.clientWidth/n.clientHeight,t=60,i=new Mc(t*e/-2,t*e/2,t/2,t/-2,.1,1e3);return i.position.z=100,i.zoom=1,i.updateProjectionMatrix(),i}function S_(n){const e=new Tc({antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setSize(n.clientWidth,n.clientHeight),e.setPixelRatio(window.devicePixelRatio),n.appendChild(e.domElement);const t=new __;return t.setSize(n.clientWidth,n.clientHeight),t.domElement.style.position="absolute",t.domElement.style.top="0",t.domElement.style.pointerEvents="none",n.appendChild(t.domElement),{renderer:e,labelRenderer:t}}function y_(n){const e=new zg(16777215,1);n.add(e)}function E_(n,e,t,i){const r=new v_(n,e);return r.enableDamping=!0,r.dampingFactor=.1,r.screenSpacePanning=!0,r.panSpeed=1,r.zoomSpeed=1.2,r.minZoom=.5,r.maxZoom=4,r.inertiaEnabled=!0,r.inertiaFactor=.85,r.pinchZoomEnabled=!0,r.pinchZoomSpeed=1.5,r.addEventListener("start",t),r.addEventListener("end",i),r}function b_(n,e,t,i){const r=x_();r.add(e);const s=M_(n),{renderer:a,labelRenderer:o}=S_(n);y_(r);const c=E_(s,a.domElement,t,i);return{scene:r,camera:s,renderer:a,labelRenderer:o,controls:c}}function T_(n){const e=Math.max(ll,Math.min(Qg,ll+n.upvotes*Rc)),t=Gt[n.provider]||Gt.default,i=n.status==="dead"||n.is_alive===!1,r=new jr(e,32),s=new nr({color:i?Bi:t,transparent:!0,opacity:i?Cc:Lc}),a=new kt(r,s);a.name="mainCircle";const o=new Kr(e-.05,e+.1,32),c=new nr({color:i?Pc:Dc,transparent:!0,opacity:i?Uc:Ic,side:Zt}),l=new kt(o,c);l.name="outline",l.position.z=-.01,a.add(l);const u=new jr(e*1.4,32),f=new wc({color:i?Bi:t,size:i?ts:ns,transparent:!0,opacity:i?Nc:Fc,sizeAttenuation:!0}),h=new Fg(u,f);if(h.name="glow",h.position.z=.01,a.add(h),n.upvotes>n_){const p=new Kr(e+.2,e+.4,32),g=new nr({color:e_,transparent:!0,opacity:t_,side:Zt}),_=new kt(p,g);_.name="upvoteRing",_.position.z=-.02,a.add(_)}return a.userData={post:n,isJumping:!1,jumpFramesRemaining:0},a.position.z=0,a}function w_(n){if(n&&n.userData)if(n.userData.isJumping=!0,n.userData.jumpFramesRemaining=Ac,n.userData.pulseAnimation){const e=n.userData.pulseAnimation;let t=0;const i=15;n.userData.pulseAnimation=()=>{if(n&&n.scale){const o=1+Math.sin(t/i*Math.PI)*(1.5-1);n.scale.set(o,o,1),t++,t>i&&(n.scale.set(1,1,1),typeof e=="function"&&e!==n.userData.pulseAnimation||delete n.userData.pulseAnimation)}}}else{let e=0;const t=15;n.userData.pulseAnimation=()=>{if(n&&n.scale){const a=1+Math.sin(e/t*Math.PI)*(1.5-1);n.scale.set(a,a,1),e++,e>t&&(n.scale.set(1,1,1),delete n.userData.pulseAnimation)}}}}function A_(n,e){n&&n!==e&&n.material&&n.material.emissive&&n.userData&&n.userData.post&&(n.scale&&n.scale.set(cl,cl,1),n.material.emissive.setHex(i_),n.children&&n.children.length>0&&n.children.forEach(t=>{if((t.isPoints||t.name==="glow")&&t.material&&t.material.color){t.material.size=r_;const i=new $e(Gt[n.userData.post.provider]||Gt.default),r=new $e(16777215),s=i.clone().lerp(r,s_);t.material.color.set(s)}}))}function ir(n,e){n&&n!==e&&n.userData&&n.userData.post&&(n.material&&n.material.emissive&&n.material.emissive.setHex(0),n.scale&&n.scale.set(1,1,1),n.children&&n.children.length>0&&n.children.forEach(t=>{if((t.isPoints||t.name==="glow")&&t.material&&t.material.color&&n.userData&&n.userData.post){const i=n.userData.post,r=i.status==="dead"||i.is_alive===!1,s=r?Bi:Gt[i.provider]||Gt.default;t.material.color.setHex(s),t.material.size=r?ts:ns}}))}function R_(n){if(n&&n.userData&&n.userData.post&&n.children&&n.children.length>0){const e=n.children.find(t=>t.isPoints||t.name==="glow");if(e&&e.material&&e.material.color){const t=e.material;t.size=a_,t.color.setHex(o_)}}if(n&&n.userData){const e=()=>{if(n&&n.scale){const t=1.2+Math.sin(Date.now()*.01)*.1;n.scale.set(t,t,1)}};n.userData.pulseAnimation=e}}function C_(n){if(n&&n.userData&&n.userData.post&&(n.userData.pulseAnimation&&delete n.userData.pulseAnimation,n.scale&&n.scale.set(1,1,1),n.children&&n.children.length>0)){const e=n.children.find(t=>t.isPoints||t.name==="glow");if(e&&e.material&&e.material.color){const t=e.material,i=n.userData.post,r=i.status==="dead"||i.is_alive===!1;t.size=r?ts:ns;const s=r?Bi:Gt[i.provider]||Gt.default;t.color.setHex(s)}}}function L_(n,e){if(!n||!n.material||!n.material.color||!e)return;const t=e.status==="dead"||e.is_alive===!1,i=n.material;i.color.setHex(t?Bi:Gt[e.provider]||Gt.default),i.opacity=t?Cc:Lc;const r=n.children.find(a=>a.name==="outline");r&&r.material&&r.material.color&&(r.material.color.setHex(t?Pc:Dc),r.material.opacity=t?Uc:Ic);const s=n.children.find(a=>a.name==="glow");s&&s.material&&s.material.color&&(s.material.color.setHex(t?Bi:Gt[e.provider]||Gt.default),s.material.opacity=t?Nc:Fc,s.material.size=t?ts:ns)}const pl=new Nn,Or=new U;class Oc extends kg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new bt(e,3)),this.setAttribute("uv",new bt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Qs(t,6,1);return this.setAttribute("instanceStart",new Cn(i,3,0)),this.setAttribute("instanceEnd",new Cn(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Qs(t,6,1);return this.setAttribute("instanceColorStart",new Cn(i,3,0)),this.setAttribute("instanceColorEnd",new Cn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Og(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),pl.setFromBufferAttribute(t),this.boundingBox.union(pl))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Or.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Or)),Or.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Or));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}ue.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new je(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Pt.line={uniforms:oa.merge([ue.common,ue.fog,ue.line]),vertexShader:`
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
		`};class ua extends In{constructor(e){super({type:"LineMaterial",uniforms:oa.clone(Pt.line.uniforms),vertexShader:Pt.line.vertexShader,fragmentShader:Pt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const ml=new U,gl=new U,_t=new lt,vt=new lt,rn=new lt,Os=new U,Bs=new ct,xt=new Hg,_l=new U,Br=new Nn,zr=new Vi,sn=new lt;let an,Jn;function vl(n,e,t){return sn.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),sn.multiplyScalar(1/sn.w),sn.x=Jn/t.width,sn.y=Jn/t.height,sn.applyMatrix4(n.projectionMatrixInverse),sn.multiplyScalar(1/sn.w),Math.abs(Math.max(sn.x,sn.y))}function P_(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,a=Math.min(i.instanceCount,r.count);for(let o=0,c=a;o<c;o++){xt.start.fromBufferAttribute(r,o),xt.end.fromBufferAttribute(s,o),xt.applyMatrix4(t);const l=new U,u=new U;an.distanceSqToSegment(xt.start,xt.end,u,l),u.distanceTo(l)<Jn*.5&&e.push({point:u,pointOnLine:l,distance:an.origin.distanceTo(u),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function D_(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,a=n.matrixWorld,o=n.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),f=-e.near;an.at(1,rn),rn.w=1,rn.applyMatrix4(e.matrixWorldInverse),rn.applyMatrix4(i),rn.multiplyScalar(1/rn.w),rn.x*=s.x/2,rn.y*=s.y/2,rn.z=0,Os.copy(rn),Bs.multiplyMatrices(e.matrixWorldInverse,a);for(let h=0,p=u;h<p;h++){if(_t.fromBufferAttribute(c,h),vt.fromBufferAttribute(l,h),_t.w=1,vt.w=1,_t.applyMatrix4(Bs),vt.applyMatrix4(Bs),_t.z>f&&vt.z>f)continue;if(_t.z>f){const S=_t.z-vt.z,y=(_t.z-f)/S;_t.lerp(vt,y)}else if(vt.z>f){const S=vt.z-_t.z,y=(vt.z-f)/S;vt.lerp(_t,y)}_t.applyMatrix4(i),vt.applyMatrix4(i),_t.multiplyScalar(1/_t.w),vt.multiplyScalar(1/vt.w),_t.x*=s.x/2,_t.y*=s.y/2,vt.x*=s.x/2,vt.y*=s.y/2,xt.start.copy(_t),xt.start.z=0,xt.end.copy(vt),xt.end.z=0;const _=xt.closestPointToPointParameter(Os,!0);xt.at(_,_l);const m=Df.lerp(_t.z,vt.z,_),d=m>=-1&&m<=1,w=Os.distanceTo(_l)<Jn*.5;if(d&&w){xt.start.fromBufferAttribute(c,h),xt.end.fromBufferAttribute(l,h),xt.start.applyMatrix4(a),xt.end.applyMatrix4(a);const S=new U,y=new U;an.distanceSqToSegment(xt.start,xt.end,y,S),t.push({point:y,pointOnLine:S,distance:an.origin.distanceTo(y),object:n,face:null,faceIndex:h,uv:null,uv1:null})}}}class U_ extends kt{constructor(e=new Oc,t=new ua({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let a=0,o=0,c=t.count;a<c;a++,o+=2)ml.fromBufferAttribute(t,a),gl.fromBufferAttribute(i,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+ml.distanceTo(gl);const s=new Qs(r,2,1);return e.setAttribute("instanceDistanceStart",new Cn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Cn(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;an=e.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;Jn=c.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),zr.copy(o.boundingSphere).applyMatrix4(a);let l;if(i)l=Jn*.5;else{const f=Math.max(r.near,zr.distanceToPoint(an.origin));l=vl(r,f,c.resolution)}if(zr.radius+=l,an.intersectsSphere(zr)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Br.copy(o.boundingBox).applyMatrix4(a);let u;if(i)u=Jn*.5;else{const f=Math.max(r.near,Br.distanceToPoint(an.origin));u=vl(r,f,c.resolution)}Br.expandByScalar(u),an.intersectsBox(Br)!==!1&&(i?P_(this,t):D_(this,r,t))}}class Bc extends Oc{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class I_ extends U_{constructor(e=new Bc,t=new ua({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function N_(n,e,t=1,i){const r=new Bc;r.setPositions([n.position.x,n.position.y,0,e.position.x,e.position.y,0]);const s=l_+t*c_,a=new ua({color:u_,linewidth:s,transparent:!0,opacity:f_*t,resolution:new je(i.clientWidth,i.clientHeight),dashed:t<h_,dashSize:d_,gapSize:p_}),o=new I_(r,a);return o.computeLineDistances(),o}function F_(n,e,t){!n||!n.geometry||!n.material||(n.geometry.setPositions([e.position.x,e.position.y,0,t.position.x,t.position.y,0]),e.userData.post.status==="dead"||t.userData.post.status==="dead"?n.material.opacity=m_:n.material.opacity=g_*n.userData.strength)}function O_(n,e){n.forEach(t=>{t.line&&t.line.material&&t.line.material.isLineMaterial&&t.line.material.resolution.set(e.clientWidth,e.clientHeight)})}function B_(n,e){const t=n.userData.post.id,i=Math.min(6,1+n.userData.post.upvotes*Rc),r=Math.sin(Date.now()*.001)*.005+.015,s=new U(-n.position.x,-n.position.y,-n.position.z);s.normalize().multiplyScalar(r*i),e[t].add(s);let a=.003;if(n.position){const c=n.position;let l=0;const u=Math.min(10,e.length);for(let f=0;f<u;f++){const h=Object.keys(e)[f];if(h!==t){const p=nodeObjects[h];if(p&&p.position){const g=c.distanceTo(p.position);g<Mn*1.2&&(l++,g<Mn*.8&&(a*=.5))}}}a*=Math.max(.2,1-l/u*.8)}const o=new U((Math.random()-.5)*a,(Math.random()-.5)*a,0);e[t].add(o)}function z_(n,e){const t=n.userData.post.id,i=new U(n.position.x,n.position.y,n.position.z);i.normalize().multiplyScalar(.05),e[t].add(i)}function k_(n,e){if(n.userData.isJumping&&n.userData.jumpFramesRemaining>0){const t=n.userData.post.id;let i=n.position.clone().normalize();n.position.lengthSq()<.1&&i.set(Math.random()-.5,Math.random()-.5,0).normalize();const r=Zg*(n.userData.jumpFramesRemaining/Ac),s=i.multiplyScalar(r);e[t].add(s),n.userData.jumpFramesRemaining--,n.userData.jumpFramesRemaining<=0&&(n.userData.isJumping=!1)}}function G_(n,e){const t=Date.now()*.001,i=Math.sin(t*.5)*.3+1;n.forEach(r=>{if(!r||!r.startNode||!r.endNode)return;const s=r.startNode,a=r.endNode;if(!s.userData||!s.userData.post||!a.userData||!a.userData.post)return;const o=s.userData.post.id,c=a.userData.post.id;let l=0;if(typeof o=="string"&&typeof c=="string"&&o.length>0&&c.length>0)l=(o.charCodeAt(0)+c.charCodeAt(0))%10*.1;else{const E=String(o).split("").reduce((F,v)=>F+v.charCodeAt(0),0),A=String(c).split("").reduce((F,v)=>F+v.charCodeAt(0),0);l=(E+A)%10*.1}const u=Math.sin(t*.8+l)*.2+1,f=s.position.distanceTo(a.position),p=Math.max(Mn*1.2,40*(1-r.strength*.3))*i,g=new U().subVectors(a.position,s.position);g.normalize();const _=Math.abs(f-p),m=.004*r.strength*u;let d=(f-p)*m;const w=1+.2*Math.sin(t*.2+l*2),S=.001*r.strength*Math.sin(t*.4+l*3)*w;if(_<3){const E=1-_/3,A=S*Math.pow(E,1.2)*1.2,F=Math.sin(t*.6+l*4)*.001*r.strength*E;d=d*(1-E*.4)+(A+F)*E}g.multiplyScalar(d);const y=_<2?.2*Math.sin(t+l*5):.1*Math.sin(t+l*5),x=new U(-g.y,g.x,0);x.multiplyScalar(Math.abs(d)*y),e[o].add(g),e[c].sub(g),e[o].add(x),e[c].add(x)})}function H_(n,e,t){const i=Date.now()*.001,r=Math.sin(i*.3)*.2+1;for(let s=0;s<n.length;s++)for(let a=s+1;a<n.length;a++){const o=n[s],c=n[a];if(!o||!o.userData||!o.userData.post||!c||!c.userData||!c.userData.post)continue;const l=o.userData.post.id,u=c.userData.post.id;let f=0;if(typeof l=="string"&&typeof u=="string"&&l.length>0&&u.length>0)f=(l.charCodeAt(0)+u.charCodeAt(0))%10*.1;else{const S=String(l).split("").reduce((x,E)=>x+E.charCodeAt(0),0),y=String(u).split("").reduce((x,E)=>x+E.charCodeAt(0),0);f=(S+y)%10*.1}const h=Math.sin(i*.7+f)*.15+1,p=new U().subVectors(o.position,c.position),g=p.length(),_=o.geometry&&o.geometry.parameters?o.geometry.parameters.radius:1,m=c.geometry&&c.geometry.parameters?c.geometry.parameters.radius:1,d=_+m+.8,w=Math.max(Mn,d)*r;if(g<w){const S=(w-g)/w,y=Math.pow(S,1.2)*1,x=Math.min(1,g/(w*.7)),E=1+(h-1)*x,A=al*y*E;let F;g<.001?F=new U((Math.random()-.5)*2,(Math.random()-.5)*2,0).normalize():F=p.clone().normalize();const v=F.multiplyScalar(A),R=new U(-p.y,p.x,0).normalize().multiplyScalar(A*.05);if(g<w*.6){const X=Math.pow((w*.6-g)/(w*.6),1.1)*al*.4,j=F.clone().multiplyScalar(X);if(e[l].add(j.clone()),e[u].sub(j.clone()),t&&t[l]&&t[u]){const N=.7+.2*(1-g/(w*.6));t[l].multiplyScalar(N),t[u].multiplyScalar(N);const O=F.clone().multiplyScalar(X*.15);t[l].add(O),t[u].sub(O)}}e[l].add(v),e[u].sub(v),e[l].add(R),e[u].add(R)}else if(g<20){const S=.1*r/Math.max(.1,Math.pow(g,1.8)),y=p.clone().normalize().multiplyScalar(S*h);e[l].add(y),e[u].sub(y)}}}function V_(n,e){var t,i,r,s;if(!(!n||n.length<2))for(let a=0;a<n.length;a++)for(let o=a+1;o<n.length;o++){const c=n[a],l=n[o];if(!c||!c.position||!l||!l.position)continue;const u=c.position.distanceTo(l.position);if(u<Mn*.65){let f;u<.001?f=new U((Math.random()-.5)*2,(Math.random()-.5)*2,0).normalize():f=new U().subVectors(c.position,l.position).normalize();const h=(Mn*.65-u)/(Mn*.65),p=Math.pow(h,1.2)*.12,g=(Mn-u)*p;if(c.position.add(f.clone().multiplyScalar(g)),l.position.sub(f.clone().multiplyScalar(g)),e){const _=(i=(t=c.userData)==null?void 0:t.post)==null?void 0:i.id,m=(s=(r=l.userData)==null?void 0:r.post)==null?void 0:s.id;if(_&&m&&e[_]&&e[m]){const d=.8+.15*h;e[_].multiplyScalar(d),e[m].multiplyScalar(d);const w=.08*Math.pow(h,1.3),S=f.clone().multiplyScalar(w);e[_].add(S),e[m].sub(S)}}}}}let xl=Date.now()*.001;function W_(n,e,t,i,r){const s=Object.values(n);if(!s.length)return 0;let a=0;const o=Date.now()*.001,c=o-xl;xl=o;const l=o;s.forEach(f=>{if(!f||!f.userData||!f.userData.post)return;const h=f.userData.post.id;t[h]?t[h].set(0,0,0):t[h]=new U(0,0,0),i[h]||(i[h]=new U(0,0,0))});const u=s.filter(f=>f&&f.userData&&f.userData.post);return u.forEach(f=>{B_(f,t),(f.userData.post.status==="dead"||f.userData.post.is_alive===!1)&&z_(f,t),k_(f,t);const h=f.userData.post.id;let p=0;typeof h=="string"&&h.length>0?p=h.charCodeAt(0)%10*.1:p=String(h).split("").reduce((m,d)=>m+d.charCodeAt(0),0)%10*.1;const g=new U(Math.sin(l*.5+p)*.0015,Math.cos(l*.3+p)*.0015,0);t[h].add(g)}),G_(e,t),H_(u,t,i),V_(u,i),u.forEach(f=>{if(!f||!f.userData||!f.userData.post)return;const h=f.userData.post.id,p=t[h],g=i[h];if(!p||!g)return;const _=f.position.clone();g.add(p);let m=0;typeof h=="string"&&h.length>0?m=h.charCodeAt(0)*.01:m=String(h).split("").reduce((x,E)=>x+E.charCodeAt(0),0)*.001;const d=Yg*(.95+Math.sin(l*.2+m)*.05);g.multiplyScalar(d),g.lengthSq()<1e-5&&g.add(new U((Math.random()-.5)*.001,(Math.random()-.5)*.001,0));const w=r*Math.min(c*60,2);f.position.add(g.clone().multiplyScalar(w));const S=g.length()*w;a+=S,Math.abs(f.position.x)>Ei&&(Math.abs(f.position.x)-Ei,f.position.x=Math.sign(f.position.x)*Ei,g.x=-g.x*.5),Math.abs(f.position.y)>Ei&&(Math.abs(f.position.y)-Ei,f.position.y=Math.sign(f.position.y)*Ei,g.y=-g.y*.5);const y=f.position.distanceTo(_);a+=y}),Math.max(a,.01*u.length)}function X_(n){const e=document.createElement("div");return e.className="tooltip",e.style.display="none",e.style.opacity="1",n.appendChild(e),e}function Ml(n,e,t,i){if(!t||!n||!e)return;i.current&&(clearTimeout(i.current),i.current=null),t.style.display="block",requestAnimationFrame(()=>{t.style.opacity="1"});const r=e.status==="dead"?"💀":e.status==="pending"?"⏳":"✅";t.innerHTML=`
    <div class="text-sm font-bold">${e.title}</div>
    <div class="text-xs">${e.provider} | ⬆️ ${e.upvotes} | ${r}</div>
    ${e.tags&&e.tags.length?`<div class="text-xs">${e.tags.map(c=>c.toLowerCase()).join(", ")}</div>`:""}
    <div class="text-xs opacity-75 mt-1">Click for details</div>
  `;const s=-t.offsetHeight-10,a=-(t.offsetWidth/2)+10;t.style.left=`${n.clientX+a}px`,t.style.top=`${n.clientY+s}px`;const o=t.getBoundingClientRect();o.left<10?t.style.left="10px":o.right>window.innerWidth-10&&(t.style.left=`${window.innerWidth-t.offsetWidth-10}px`),o.top<10&&(t.style.top=`${n.clientY+20}px`)}function Ln(n,e,t=!1){if(n){if(e.current&&(clearTimeout(e.current),e.current=null),t){n.style.display="none",n.style.opacity="0";return}n.style.opacity="0",e.current=setTimeout(()=>{n&&n.style.opacity==="0"&&(n.style.display="none"),e.current=null},150)}}function q_(){const n=new Gg;return n.params.Points.threshold=.1,n}function fa(n,e){const t=e.getBoundingClientRect(),i=new je;return i.x=(n.clientX-t.left)/t.width*2-1,i.y=-((n.clientY-t.top)/t.height)*2+1,i}function Y_(n,e,t,i,r){if(!n||!e||!t||!i)return;const s=n.clientWidth/n.clientHeight,a=60;e.left=a*s/-2,e.right=a*s/2,e.top=a/2,e.bottom=a/-2,e.updateProjectionMatrix(),t.setSize(n.clientWidth,n.clientHeight),i.setSize(n.clientWidth,n.clientHeight),O_(r,n)}function j_(n,{renderer:e,containerEl:t,camera:i,nodesGroup:r,raycaster:s,selectedNodeRef:a,lastClickedNodeRef:o,tooltipRef:c,currentTooltipHideTimeoutRef:l,updateSelectedNode:u,updateLastMousePosition:f,isDragging:h,mouseMovedSince:p}){if(!e||!t)return;const g="ontouchstart"in window||navigator.maxTouchPoints>0;if(g)return;const _=fa(n,e.domElement);f({x:n.clientX,y:n.clientY,xNorm:_.x,yNorm:_.y}),s.setFromCamera(_,i);const m=s.intersectObjects(r.children,!0),d=m.length>0?m[0].object:null;a.current!==d?(a.current&&(g||ir(a.current,o.current),Ln(c.current,l),typeof document<"u"&&document.body&&(document.body.style.cursor="default")),d&&d.userData&&d.userData.post?(u(d),typeof document<"u"&&document.body&&(document.body.style.cursor="pointer"),g||A_(d,o.current),Ml(n,d.userData.post,c.current,l),console.log("[GraphView] Hover detected on node:",d.userData.post.title)):u(null)):d&&a.current&&Ml(n,a.current.userData.post,c.current,l)}function Sl(n,{renderer:e,camera:t,nodesGroup:i,raycaster:r,controls:s,updateSelectedPost:a,updateLastClickedNode:o,getPosts:c,tooltipRef:l,currentTooltipHideTimeoutRef:u,selectedNodeRef:f}){const h=fa(n,e.domElement);r.setFromCamera(h,t);const p=r.intersectObjects(i.children,!0);if(l&&u&&Ln(l.current,u,!0),p.length>0){const g=p[0].object;if(g.userData&&g.userData.post){if(a(g.userData.post),o(g),R_(g),w_(g),c().findIndex(d=>d.id===g.userData.post.id)!==-1){const d=document.getElementById(`post-${g.userData.post.id}`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("highlight"),setTimeout(()=>{d.classList.remove("highlight")},2e3))}return g}}else l&&u&&Ln(l.current,u);return null}function K_(n,e,t,i,r){const s="ontouchstart"in window||navigator.maxTouchPoints>0;n.current&&n.current!==e.current&&(s||ir(n.current,e.current),r(null)),Ln(t.current,i),typeof document<"u"&&document.body&&(document.body.style.cursor="default")}function Z_(n,e){if(!n||!e||!n.length||!e.length)return 0;const t=new Set(n.map(s=>s.toLowerCase())),i=new Set(e.map(s=>s.toLowerCase()));return new Set([...t].filter(s=>i.has(s))).size/Math.sqrt(t.size*i.size)}function J_(n,e){const t=[];if(!n||n.length<=1)return t;for(let s=0;s<n.length;s++)for(let a=s+1;a<n.length;a++){const o=n[s],c=n[a],l=o.userData.post,u=c.userData.post,f=Z_(l.tags,u.tags);let h=f;e&&(l.tags&&l.tags.map(p=>p.toLowerCase()).includes(e.toLowerCase())||u.tags&&u.tags.map(p=>p.toLowerCase()).includes(e.toLowerCase()))&&(h=Math.max(f,.4)),h>.3&&t.push({startNode:o,endNode:c,strength:h})}const i=new Set;if(t.forEach(s=>{i.add(s.startNode.userData.post.id),i.add(s.endNode.userData.post.id)}),n.filter(s=>!i.has(s.userData.post.id)).forEach(s=>{let a=null,o=1/0;n.forEach(c=>{if(c!==s){const l=s.position.distanceTo(c.position);l<o&&(o=l,a=c)}}),a&&t.push({startNode:s,endNode:a,strength:.2})}),n.length>2&&t.length<n.length)for(let s=0;s<n.length;s++){const a=n[s],o=a.userData.post;let c=!1;if(t.forEach(l=>{(l.startNode===a||l.endNode===a)&&(c=!0)}),!c){for(let l=0;l<n.length;l++)if(s!==l){const u=n[l],f=u.userData.post;if(o.provider===f.provider){t.push({startNode:a,endNode:u,strength:.25});break}}}}return t}function yl({scene:n,nodesGroup:e,filteredPosts:t,nodeObjectsRef:i,edgesRef:r,selectedTag:s,containerEl:a,checkDeadLinksCallback:o}){for(;e.children.length>0;)e.remove(e.children[0]);if(r.current.forEach(u=>{u.line&&n.remove(u.line)}),r.current=[],i.current={},!t||t.length===0)return;t.forEach((u,f)=>{const h=T_(u),p=t.length,g=f/p*Math.PI*2,_=Math.max(.2,1-u.upvotes*$g),m=Jg*_;h.position.x=Math.cos(g)*m,h.position.y=Math.sin(g)*m,h.position.z=0,h.position.x+=(Math.random()-.5)*ol,h.position.y+=(Math.random()-.5)*ol,e.add(h),i.current[u.id]=h});const c=Object.values(i.current);J_(c,s).forEach(u=>{const f=N_(u.startNode,u.endNode,u.strength,a);f.userData={strength:u.strength},n.add(f),r.current.push({line:f,startNode:u.startNode,endNode:u.endNode,strength:u.strength})}),o&&o()}async function $_(n,e){if(!n||Object.keys(n).length===0){e(!1);return}try{Object.values(n).map(r=>r.userData.post).forEach(r=>{r.status||(r.status="pending")});const i=await Dn.checkAllLinks();for(const r of i){const s=r.id,a=r.is_alive;if(n[s]){const o=n[s],c=o.userData.post;c.status=a?"alive":"dead",c.is_alive=a,L_(o,c)}}}catch(t){console.error("Error checking dead links:",t)}finally{e(!1)}}function Q_(n){let e,t,i,r,s,a,o,c,l,u,f,h,p,g;return f=new Xg({props:{post:n[2],onClose:n[4]}}),{c(){e=G("div"),t=G("div"),i=G("span"),i.textContent="Pan to move | Scroll to zoom",r=le(),s=G("button"),s.textContent="Reheat",a=le(),o=G("button"),o.textContent="Refresh",c=le(),l=G("div"),l.innerHTML=`<div class="flex items-center gap-1"><span class="inline-block w-2 h-2 rounded-full bg-opacity-90 bg-white"></span> Active</div> 
    <div class="flex items-center gap-1"><span class="inline-block w-2 h-2 rounded-full bg-opacity-40 bg-red-500"></span> Dead Link</div> 
    <div class="flex items-center gap-1"><span class="inline-block w-2 h-2 rounded-full bg-opacity-80 bg-amber-500"></span> High Upvotes</div>`,u=le(),Ui(f.$$.fragment),L(s,"class","ml-2 px-2 py-1 rounded bg-indigo-500 hover:bg-indigo-600 transition text-white text-xs font-semibold shadow"),L(s,"title","Reheat graph layout for better spacing"),L(o,"class","ml-2 px-2 py-1 rounded bg-emerald-500 hover:bg-emerald-600 transition text-white text-xs font-semibold shadow"),L(o,"title","Refresh data and update graph"),L(t,"class","absolute top-2 right-2 bg-gray-800 bg-opacity-80 text-white text-xs p-2 rounded-md backdrop-blur-sm shadow-sm flex gap-2 items-center"),L(l,"class","absolute bottom-2 left-2 flex items-center gap-2 bg-gray-800 bg-opacity-80 text-white text-xs p-2 rounded-md backdrop-blur-sm shadow-sm"),L(e,"class","rounded-lg overflow-hidden w-full relative shadow-lg"),ga(e,"height",n[0])},m(_,m){Me(_,e,m),C(e,t),C(t,i),C(t,r),C(t,s),C(t,a),C(t,o),C(e,c),C(e,l),n[13](e),Me(_,u,m),ei(f,_,m),h=!0,p||(g=[rt(s,"click",n[3]),rt(o,"click",t0)],p=!0)},p(_,m){(!h||m[0]&1)&&ga(e,"height",_[0]);const d={};m[0]&4&&(d.post=_[2]),f.$set(d)},i(_){h||(st(f.$$.fragment,_),h=!0)},o(_){ht(f.$$.fragment,_),h=!1},d(_){_&&ve(e),n[13](null),_&&ve(u),ti(f,_),p=!1,en(g)}}}let e0=!0;async function t0(){console.log("Manually refreshing graph data...");const{fetchPosts:n}=await Mu(()=>Promise.resolve().then(()=>nu),void 0);await n(),console.log("Graph refresh complete")}function n0(n,e,t){let i,{height:r="500px"}=e,{selectedTag:s=""}=e,a,o,c,l,u,f,h=new Ji,p={},g=[];const _={current:p},m={current:g};let d=!1,w=Date.now(),S;const y={current:null},x={current:null},E={current:null},A={current:null};let F=null,v=!1,R=0,X={x:0,y:0,xNorm:0,yNorm:0},j=Date.now(),N,O={};function W(H=2.5){const pe=Object.values(p);for(let b=0;b<pe.length;b++)for(let M=b+1;M<pe.length;M++){const Y=pe[b],re=pe[M];if(!Y.position||!re.position)continue;const oe=new U().subVectors(Y.position,re.position),he=oe.length();if(he<H&&he>.001){oe.normalize();const Re=(H-he)/2;Y.position.addScaledVector(oe,Re),re.position.addScaledVector(oe,-Re)}else if(he<=.001){const Re=new U(Math.random()-.5,Math.random()-.5,0).normalize().multiplyScalar(H/2);Y.position.add(Re),re.position.sub(Re)}}}function ie(){O={},K={},Q=!1,q=0,V=Fr*1.5,Object.values(p).forEach(pe=>{if(!pe||!pe.userData||!pe.userData.post)return;const b=pe.userData.post.id,M=Math.random()*Math.PI*2,Y=new U(Math.cos(M)*.5,Math.sin(M)*.5,0),re=.5+Math.random()*1;Y.multiplyScalar(re),O[b]=Y.clone()}),W(Mn*.5),console.log("Graph reheated with random forces applied!")}let K={},V=Fr,Q=!1,q=0,fe;Xl(()=>{if(!a)return;const H=b_(a,h,()=>v=!0,()=>setTimeout(()=>v=!1,10));t(6,o=H.scene),c=H.camera,l=H.renderer,u=H.labelRenderer,f=H.controls,S=q_(),E.current=X_(a),E.current,ce(),Ue(),i&&i.length>0&&Kc().then(()=>{t(10,_.current=p,_),t(11,m.current=g,m),yl({scene:o,nodesGroup:h,filteredPosts:i,nodeObjectsRef:_,edgesRef:m,selectedTag:s,containerEl:a,checkDeadLinksCallback:ye}),t(8,p=_.current),t(9,g=m.current)})}),jc(()=>{Be()});function Z(){Y_(a,c,l,u,m.current)}function I(H){R=Date.now(),X={x:H.clientX,y:H.clientY,xNorm:0,yNorm:0}}function k(H){const pe=Date.now()-R,b=Math.sqrt(Math.pow(H.clientX-X.x,2)+Math.pow(H.clientY-X.y,2));pe<200&&b<5&&!v&&(fa(H,l.domElement),Sl(H,{renderer:l,camera:c,nodesGroup:h,raycaster:S,controls:f,updateSelectedPost:M=>t(2,F=M),updateLastClickedNode:M=>{x.current=M},getPosts:()=>i,tooltipRef:E,currentTooltipHideTimeoutRef:A,selectedNodeRef:y})),setTimeout(()=>{v=!1},50)}function ne(H){j=Date.now(),v||j_(H,{renderer:l,containerEl:a,camera:c,nodesGroup:h,raycaster:S,selectedNodeRef:y,lastClickedNodeRef:x,tooltipRef:E,currentTooltipHideTimeoutRef:A,updateSelectedNode:pe=>{y.current=pe},updateLastMousePosition:pe=>X=pe})}function se(H){K_(y,x,E,A,pe=>{y.current=pe})}function P(H){if(!a)return;const pe=a.getBoundingClientRect();(H.clientX<pe.left||H.clientX>pe.right||H.clientY<pe.top||H.clientY>pe.bottom)&&(y.current&&y.current!==x.current?(ir(y.current,x.current),y.current=null,Ln(E.current,A),typeof document<"u"&&document.body&&(document.body.style.cursor="default")):y.current&&y.current===x.current&&E.current&&E.current.style.display==="block"&&(Ln(E.current,A),typeof document<"u"&&document.body&&(document.body.style.cursor="default")))}function Se(H){R=Date.now(),H.touches.length===1&&(X={x:H.touches[0].clientX,y:H.touches[0].clientY,xNorm:0,yNorm:0})}function be(H){if(Date.now()-R<300&&!v&&H.changedTouches.length>0){const b=H.changedTouches[0],M=new MouseEvent("mouseup",{clientX:b.clientX,clientY:b.clientY,bubbles:!0,cancelable:!0,view:window});Math.sqrt(Math.pow(b.clientX-X.x,2)+Math.pow(b.clientY-X.y,2))<10&&Sl(M,{renderer:l,camera:c,nodesGroup:h,raycaster:S,controls:f,updateSelectedPost:re=>t(2,F=re),updateLastClickedNode:re=>{x.current=re},getPosts:()=>i,tooltipRef:E,currentTooltipHideTimeoutRef:A,selectedNodeRef:y})}setTimeout(()=>{v=!1},50)}function ce(){window.addEventListener("resize",Z),a.addEventListener("mousemove",ne,{capture:!0,passive:!0}),a.addEventListener("mousedown",I,{capture:!0,passive:!1}),a.addEventListener("mouseup",k,{capture:!0,passive:!1}),a.addEventListener("mouseleave",se,{capture:!0,passive:!0}),document.addEventListener("mousemove",P,{passive:!0}),a.addEventListener("touchstart",Se,{passive:!1}),a.addEventListener("touchend",be,{passive:!1}),de()}function ge(){window.removeEventListener("resize",Z),a&&(a.removeEventListener("mousemove",ne),a.removeEventListener("mousedown",I),a.removeEventListener("mouseup",k),a.removeEventListener("mouseleave",se),a.removeEventListener("touchstart",Se),a.removeEventListener("touchend",be)),document.removeEventListener("mousemove",P),N&&clearInterval(N)}function Pe(){if(x.current){C_(x.current);const H=x.current;x.current=null,y.current===H&&(ir(y.current,null),Ln(E.current,A),y.current=null,typeof document<"u"&&document.body&&(document.body.style.cursor="default"))}t(2,F=null),f&&(f.enabled=!0)}function de(){N&&clearInterval(N),N=setInterval(()=>{Date.now()-j>800&&y.current&&y.current!==x.current&&(ir(y.current,x.current),Ln(E.current,A),y.current=null,typeof document<"u"&&document.body&&(document.body.style.cursor="default"))},700)}function ye(){d||(De(!0),w=Date.now(),$_(p,De))}function De(H){d=H}function Ue(){fe=requestAnimationFrame(Ue);try{if(f&&f.update(),e0&&(!Q||Date.now()%(Q?10:2)===0)){const M=W_(p,g,K,O,V),Y=Object.keys(p).length;Y>0&&M<jg*Y?(q++,q>Kg&&(Q=!0,V*=qg)):(q=0,Q=!1,V=Fr)}x.current&&x.current.userData.pulseAnimation&&x.current.userData.pulseAnimation(),(!Q||Date.now()%(Q?6:2)===0)&&g.forEach(b=>{b&&b.line&&b.startNode&&b.endNode&&F_(b.line,b.startNode,b.endNode)}),l&&o&&c&&(l.render(o,c),u&&u.render(o,c));const pe=Date.now();!d&&pe-w>6e4&&ye()}catch(H){console.error("Error in animation loop:",H),window.cancelAnimationFrame&&fe&&window.cancelAnimationFrame(fe)}}let Ge=cn.subscribe(H=>{});function Be(){if(Ge&&Ge(),ge(),fe&&cancelAnimationFrame(fe),o){for(;h.children.length>0;){const H=h.children[0];h.remove(H),H.geometry&&H.geometry.dispose(),H.material&&(Array.isArray(H.material)?H.material.forEach(pe=>pe.dispose()):H.material.dispose()),H.children&&H.children.forEach(pe=>{pe.geometry&&pe.geometry.dispose(),pe.material&&(Array.isArray(pe.material)?pe.material.forEach(b=>b.dispose()):pe.material.dispose())})}g.forEach(H=>{H.line&&(H.line.geometry&&H.line.geometry.dispose(),H.line.material&&H.line.material.dispose(),o.remove(H.line))}),o.remove(h)}l&&(l.dispose(),l.domElement&&l.domElement.parentNode&&l.domElement.parentNode.removeChild(l.domElement)),u&&u.domElement&&u.domElement.parentNode&&u.domElement.parentNode.removeChild(u.domElement),f&&f.dispose(),E.current&&E.current.parentNode&&E.current.parentNode.removeChild(E.current),t(6,o=null),c=null,l=null,u=null,f=null,t(7,h=null),t(8,p={}),t(9,g=[]),y.current=null,x.current=null,E.current=null}function Fe(H){ks[H?"unshift":"push"](()=>{a=H,t(1,a)})}return n.$$set=H=>{"height"in H&&t(0,r=H.height),"selectedTag"in H&&t(5,s=H.selectedTag)},n.$$.update=()=>{n.$$.dirty[0]&32&&t(12,i=s?zs(cn).filter(H=>H.tags&&H.tags.map(pe=>pe.toLowerCase()).includes(s.toLowerCase())):zs(cn)),n.$$.dirty[0]&8162&&o&&typeof i<"u"&&a&&(t(10,_.current=p,_),t(11,m.current=g,m),yl({scene:o,nodesGroup:h,filteredPosts:i,nodeObjectsRef:_,edgesRef:m,selectedTag:s,containerEl:a,checkDeadLinksCallback:ye}),t(8,p=_.current),t(9,g=m.current),O={},K={},Q=!1,q=0,V=Fr)},[r,a,F,ie,Pe,s,o,h,p,g,_,m,i,Fe]}class i0 extends ki{constructor(e){super(),zi(this,e,n0,Q_,ri,{height:0,selectedTag:5},null,[-1,-1])}}function El(n,e,t){const i=n.slice();return i[18]=e[t],i}function bl(n,e,t){const i=n.slice();return i[21]=e[t],i}function Tl(n,e,t){const i=n.slice();return i[18]=e[t],i}function wl(n,e,t){const i=n.slice();return i[21]=e[t],i}function Al(n,e,t){const i=n.slice();return i[21]=e[t],i}function Rl(n){let e,t,i,r,s,a=n[6],o=[];for(let l=0;l<a.length;l+=1)o[l]=Cl(Al(n,a,l));let c=n[0]&&Ll(n);return{c(){e=G("div"),t=G("div"),i=G("span"),i.textContent="Filter by tag:",r=le();for(let l=0;l<o.length;l+=1)o[l].c();s=le(),c&&c.c(),L(i,"class","text-sm text-gray-400 mr-2 self-center"),L(t,"class","flex flex-wrap gap-2 bg-gray-800 p-3 rounded-lg"),L(e,"class","w-full max-w-5xl mb-4")},m(l,u){Me(l,e,u),C(e,t),C(t,i),C(t,r);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(t,null);C(t,s),c&&c.m(t,null)},p(l,u){if(u&1089){a=l[6];let f;for(f=0;f<a.length;f+=1){const h=Al(l,a,f);o[f]?o[f].p(h,u):(o[f]=Cl(h),o[f].c(),o[f].m(t,s))}for(;f<o.length;f+=1)o[f].d(1);o.length=a.length}l[0]?c?c.p(l,u):(c=Ll(l),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},d(l){l&&ve(e),Zr(o,l),c&&c.d()}}}function Cl(n){let e,t=n[21]+"",i,r,s,a;function o(){return n[14](n[21])}return{c(){e=G("button"),i=Ee(t),L(e,"class",r=`px-3 py-1 text-xs rounded-full transition-colors ${n[0]===n[21]?"bg-purple-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`)},m(c,l){Me(c,e,l),C(e,i),s||(a=rt(e,"click",o),s=!0)},p(c,l){n=c,l&64&&t!==(t=n[21]+"")&&ke(i,t),l&65&&r!==(r=`px-3 py-1 text-xs rounded-full transition-colors ${n[0]===n[21]?"bg-purple-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`)&&L(e,"class",r)},d(c){c&&ve(e),s=!1,a()}}}function Ll(n){let e,t,i;return{c(){e=G("button"),e.textContent="Clear filter",L(e,"class","px-3 py-1 text-xs rounded-full bg-red-700 text-white hover:bg-red-600 transition-colors")},m(r,s){Me(r,e,s),t||(i=rt(e,"click",n[15]),t=!0)},p:Je,d(r){r&&ve(e),t=!1,i()}}}function r0(n){let e,t,i,r,s,a;const o=[c0,l0,o0,a0],c=[];function l(u,f){return u[7]?0:u[8]?1:u[2]&&u[2].length>0?2:3}return r=l(n),s=c[r]=o[r](n),{c(){e=G("section"),t=G("h2"),t.textContent="Ghost Tunnels",i=le(),s.c(),L(t,"class","text-2xl font-semibold mb-4 text-purple-300"),L(e,"class","w-full max-w-5xl p-6 bg-gray-800 rounded-lg shadow-xl")},m(u,f){Me(u,e,f),C(e,t),C(e,i),c[r].m(e,null),a=!0},p(u,f){let h=r;r=l(u),r===h?c[r].p(u,f):($n(),ht(c[h],1,1,()=>{c[h]=null}),Qn(),s=c[r],s?s.p(u,f):(s=c[r]=o[r](u),s.c()),st(s,1),s.m(e,null))},i(u){a||(st(s),a=!0)},o(u){ht(s),a=!1},d(u){u&&ve(e),c[r].d()}}}function s0(n){let e,t,i,r,s,a,o;const c=[d0,h0,f0,u0],l=[];function u(f,h){return f[7]?0:f[8]?1:f[2]&&f[2].length>0?2:3}return i=u(n),r=l[i]=c[i](n),{c(){e=G("section"),t=G("div"),r.c(),s=le(),a=G("p"),a.innerHTML=`<span class="font-medium text-purple-400">Interaction:</span> Hover over nodes to see details. Click a node to view full details. 
        <br/> 
        <span class="font-medium text-purple-400">Visualization:</span> Node size shows upvotes. Colors indicate providers. Connected nodes share similar tags.`,L(t,"class","bg-gray-800 rounded-lg shadow-xl overflow-hidden"),L(a,"class","text-sm text-gray-500 mt-2"),L(e,"class","w-full max-w-5xl")},m(f,h){Me(f,e,h),C(e,t),l[i].m(t,null),C(e,s),C(e,a),o=!0},p(f,h){let p=i;i=u(f),i===p?l[i].p(f,h):($n(),ht(l[p],1,1,()=>{l[p]=null}),Qn(),r=l[i],r?r.p(f,h):(r=l[i]=c[i](f),r.c()),st(r,1),r.m(t,null))},i(f){o||(st(r),o=!0)},o(f){ht(r),o=!1},d(f){f&&ve(e),l[i].d()}}}function a0(n){let e,t,i=n[0]?"Try a different tag filter.":"Be the first to publish!",r;return{c(){e=G("p"),t=Ee("No ghost tunnels match your criteria. "),r=Ee(i),L(e,"class","text-gray-400")},m(s,a){Me(s,e,a),C(e,t),C(e,r)},p(s,a){a&1&&i!==(i=s[0]?"Try a different tag filter.":"Be the first to publish!")&&ke(r,i)},i:Je,o:Je,d(s){s&&ve(e)}}}function o0(n){let e,t,i=n[1]?"Discovered Tunnels":"All Tunnels",r,s,a,o=[],c=new Map,l,u=n[1]&&Pl(n),f=n[5];const h=p=>p[18].id;for(let p=0;p<f.length;p+=1){let g=El(n,f,p),_=h(g);c.set(_,o[p]=kl(_,g))}return{c(){u&&u.c(),e=le(),t=G("h3"),r=Ee(i),s=le(),a=G("ul");for(let p=0;p<o.length;p+=1)o[p].c();L(t,"class","text-xl font-semibold mb-4 text-purple-300 border-b border-purple-600 pb-2"),L(a,"class","space-y-4")},m(p,g){u&&u.m(p,g),Me(p,e,g),Me(p,t,g),C(t,r),Me(p,s,g),Me(p,a,g);for(let _=0;_<o.length;_+=1)o[_]&&o[_].m(a,null);l=!0},p(p,g){p[1]?u?(u.p(p,g),g&2&&st(u,1)):(u=Pl(p),u.c(),st(u,1),u.m(e.parentNode,e)):u&&($n(),ht(u,1,1,()=>{u=null}),Qn()),(!l||g&2)&&i!==(i=p[1]?"Discovered Tunnels":"All Tunnels")&&ke(r,i),g&1056&&(f=p[5],$n(),o=Zl(o,g,h,1,p,f,c,a,Kl,kl,null,El),Qn())},i(p){if(!l){st(u);for(let g=0;g<f.length;g+=1)st(o[g]);l=!0}},o(p){ht(u);for(let g=0;g<o.length;g+=1)ht(o[g]);l=!1},d(p){u&&u.d(p),p&&ve(e),p&&ve(t),p&&ve(s),p&&ve(a);for(let g=0;g<o.length;g+=1)o[g].d()}}}function l0(n){let e,t,i;return{c(){e=G("p"),t=Ee("Error loading posts: "),i=Ee(n[8]),L(e,"class","text-red-400 bg-red-900 p-3 rounded")},m(r,s){Me(r,e,s),C(e,t),C(e,i)},p(r,s){s&256&&ke(i,r[8])},i:Je,o:Je,d(r){r&&ve(e)}}}function c0(n){let e;return{c(){e=G("p"),e.textContent="Loading posts...",L(e,"class","text-gray-400")},m(t,i){Me(t,e,i)},p:Je,i:Je,o:Je,d(t){t&&ve(e)}}}function Pl(n){let e,t,i=n[4]&&n[4].length>0&&Dl(n);return{c(){i&&i.c(),e=Vl()},m(r,s){i&&i.m(r,s),Me(r,e,s),t=!0},p(r,s){r[4]&&r[4].length>0?i?(i.p(r,s),s&16&&st(i,1)):(i=Dl(r),i.c(),st(i,1),i.m(e.parentNode,e)):i&&($n(),ht(i,1,1,()=>{i=null}),Qn())},i(r){t||(st(i),t=!0)},o(r){ht(i),t=!1},d(r){i&&i.d(r),r&&ve(e)}}}function Dl(n){let e,t,i,r,s=[],a=new Map,o,c=n[4];const l=u=>u[18].id;for(let u=0;u<c.length;u+=1){let f=Tl(n,c,u),h=l(f);a.set(h,s[u]=Fl(h,f))}return{c(){e=G("div"),t=G("h3"),t.innerHTML=`Your Tunnels
                <span class="text-sm font-normal text-green-500 ml-2">(Easy access to manage your tunnels)</span>`,i=le(),r=G("ul");for(let u=0;u<s.length;u+=1)s[u].c();L(t,"class","text-xl font-semibold mb-4 text-green-400 border-b border-green-600 pb-2"),L(r,"class","space-y-4"),L(e,"class","mb-6")},m(u,f){Me(u,e,f),C(e,t),C(e,i),C(e,r);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(r,null);o=!0},p(u,f){f&1040&&(c=u[4],$n(),s=Zl(s,f,l,1,u,c,a,r,Kl,Fl,null,Tl),Qn())},i(u){if(!o){for(let f=0;f<c.length;f+=1)st(s[f]);o=!0}},o(u){for(let f=0;f<s.length;f+=1)ht(s[f]);o=!1},d(u){u&&ve(e);for(let f=0;f<s.length;f+=1)s[f].d()}}}function Ul(n){let e,t=n[18].description+"",i;return{c(){e=G("p"),i=Ee(t),L(e,"class","mt-2 text-gray-300")},m(r,s){Me(r,e,s),C(e,i)},p(r,s){s&16&&t!==(t=r[18].description+"")&&ke(i,t)},d(r){r&&ve(e)}}}function Il(n){let e,t,i,r=n[18].tags,s=[];for(let a=0;a<r.length;a+=1)s[a]=Nl(wl(n,r,a));return{c(){e=G("span"),e.textContent="•",t=le(),i=G("div");for(let a=0;a<s.length;a+=1)s[a].c();L(e,"class","text-sm text-gray-400"),L(i,"class","flex flex-wrap gap-1")},m(a,o){Me(a,e,o),Me(a,t,o),Me(a,i,o);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(i,null)},p(a,o){if(o&1040){r=a[18].tags;let c;for(c=0;c<r.length;c+=1){const l=wl(a,r,c);s[c]?s[c].p(l,o):(s[c]=Nl(l),s[c].c(),s[c].m(i,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=r.length}},d(a){a&&ve(e),a&&ve(t),a&&ve(i),Zr(s,a)}}}function Nl(n){let e,t=n[21]+"",i,r,s,a;function o(){return n[16](n[21])}return{c(){e=G("button"),i=Ee(t),r=le(),L(e,"class","inline-block bg-gray-600 hover:bg-purple-600 text-xs px-2.5 py-0.5 rounded-full text-white transition-colors")},m(c,l){Me(c,e,l),C(e,i),C(e,r),s||(a=rt(e,"click",o),s=!0)},p(c,l){n=c,l&16&&t!==(t=n[21]+"")&&ke(i,t)},d(c){c&&ve(e),s=!1,a()}}}function Fl(n,e){let t,i,r,s=e[18].title+"",a,o,c,l,u,f,h,p=e[18].provider+"",g,_,m,d=e[18].tunnel_url+"",w,S,y,x,E,A,F,v=e[18].upvotes+"",R,X,j,N,O,W=new Date(e[18].created_at).toLocaleDateString()+"",ie,K,V,Q,q,fe,Z,I,k=e[18].description&&Ul(e),ne=e[18].tags&&e[18].tags.length>0&&Il(e);return q=new $l({props:{post:e[18]}}),{key:n,first:null,c(){t=G("li"),i=G("div"),r=G("h3"),a=Ee(s),o=le(),c=G("div"),l=G("span"),f=le(),h=G("span"),g=Ee(p),_=le(),m=G("a"),w=Ee(d),y=le(),k&&k.c(),x=le(),E=G("div"),A=G("span"),F=Ee("⬆️ "),R=Ee(v),X=le(),j=G("span"),j.textContent="•",N=le(),O=G("span"),ie=Ee(W),K=le(),ne&&ne.c(),V=le(),Q=G("div"),Ui(q.$$.fragment),fe=le(),L(r,"class","text-xl font-bold text-purple-300"),L(l,"class",u=`inline-block w-3 h-3 rounded-full ${e[18].provider==="Pinggy"?"bg-purple-500":"bg-blue-500"}`),L(h,"class","text-sm text-gray-400"),L(c,"class","flex items-center space-x-2"),L(i,"class","flex justify-between"),L(m,"href",S=e[18].tunnel_url),L(m,"target","_blank"),L(m,"rel","noopener noreferrer"),L(m,"class","text-blue-400 hover:text-blue-300 underline break-all"),L(A,"class","text-sm text-gray-400"),L(j,"class","text-sm text-gray-400"),L(O,"class","text-sm text-gray-400"),L(E,"class","mt-3 flex flex-wrap items-center gap-2"),L(Q,"class","mt-3"),L(t,"id",Z="post-"+e[18].id),L(t,"class","p-4 bg-gray-700 border-l-4 border-green-500 rounded-md shadow hover:bg-gray-650 transition-colors"),this.first=t},m(se,P){Me(se,t,P),C(t,i),C(i,r),C(r,a),C(i,o),C(i,c),C(c,l),C(c,f),C(c,h),C(h,g),C(t,_),C(t,m),C(m,w),C(t,y),k&&k.m(t,null),C(t,x),C(t,E),C(E,A),C(A,F),C(A,R),C(E,X),C(E,j),C(E,N),C(E,O),C(O,ie),C(E,K),ne&&ne.m(E,null),C(t,V),C(t,Q),ei(q,Q,null),C(t,fe),I=!0},p(se,P){e=se,(!I||P&16)&&s!==(s=e[18].title+"")&&ke(a,s),(!I||P&16&&u!==(u=`inline-block w-3 h-3 rounded-full ${e[18].provider==="Pinggy"?"bg-purple-500":"bg-blue-500"}`))&&L(l,"class",u),(!I||P&16)&&p!==(p=e[18].provider+"")&&ke(g,p),(!I||P&16)&&d!==(d=e[18].tunnel_url+"")&&ke(w,d),(!I||P&16&&S!==(S=e[18].tunnel_url))&&L(m,"href",S),e[18].description?k?k.p(e,P):(k=Ul(e),k.c(),k.m(t,x)):k&&(k.d(1),k=null),(!I||P&16)&&v!==(v=e[18].upvotes+"")&&ke(R,v),(!I||P&16)&&W!==(W=new Date(e[18].created_at).toLocaleDateString()+"")&&ke(ie,W),e[18].tags&&e[18].tags.length>0?ne?ne.p(e,P):(ne=Il(e),ne.c(),ne.m(E,null)):ne&&(ne.d(1),ne=null);const Se={};P&16&&(Se.post=e[18]),q.$set(Se),(!I||P&16&&Z!==(Z="post-"+e[18].id))&&L(t,"id",Z)},i(se){I||(st(q.$$.fragment,se),I=!0)},o(se){ht(q.$$.fragment,se),I=!1},d(se){se&&ve(t),k&&k.d(),ne&&ne.d(),ti(q)}}}function Ol(n){let e,t=n[18].description+"",i;return{c(){e=G("p"),i=Ee(t),L(e,"class","mt-2 text-gray-300")},m(r,s){Me(r,e,s),C(e,i)},p(r,s){s&32&&t!==(t=r[18].description+"")&&ke(i,t)},d(r){r&&ve(e)}}}function Bl(n){let e,t,i,r=n[18].tags,s=[];for(let a=0;a<r.length;a+=1)s[a]=zl(bl(n,r,a));return{c(){e=G("span"),e.textContent="•",t=le(),i=G("div");for(let a=0;a<s.length;a+=1)s[a].c();L(e,"class","text-sm text-gray-400"),L(i,"class","flex flex-wrap gap-1")},m(a,o){Me(a,e,o),Me(a,t,o),Me(a,i,o);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(i,null)},p(a,o){if(o&1056){r=a[18].tags;let c;for(c=0;c<r.length;c+=1){const l=bl(a,r,c);s[c]?s[c].p(l,o):(s[c]=zl(l),s[c].c(),s[c].m(i,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=r.length}},d(a){a&&ve(e),a&&ve(t),a&&ve(i),Zr(s,a)}}}function zl(n){let e,t=n[21]+"",i,r,s,a;function o(){return n[17](n[21])}return{c(){e=G("button"),i=Ee(t),r=le(),L(e,"class","inline-block bg-gray-600 hover:bg-purple-600 text-xs px-2.5 py-0.5 rounded-full text-white transition-colors")},m(c,l){Me(c,e,l),C(e,i),C(e,r),s||(a=rt(e,"click",o),s=!0)},p(c,l){n=c,l&32&&t!==(t=n[21]+"")&&ke(i,t)},d(c){c&&ve(e),s=!1,a()}}}function kl(n,e){let t,i,r,s=e[18].title+"",a,o,c,l,u,f,h,p=e[18].provider+"",g,_,m,d=e[18].tunnel_url+"",w,S,y,x,E,A,F,v=e[18].upvotes+"",R,X,j,N,O,W=new Date(e[18].created_at).toLocaleDateString()+"",ie,K,V,Q,q,fe,Z,I,k=e[18].description&&Ol(e),ne=e[18].tags&&e[18].tags.length>0&&Bl(e);return q=new $l({props:{post:e[18]}}),{key:n,first:null,c(){t=G("li"),i=G("div"),r=G("h3"),a=Ee(s),o=le(),c=G("div"),l=G("span"),f=le(),h=G("span"),g=Ee(p),_=le(),m=G("a"),w=Ee(d),y=le(),k&&k.c(),x=le(),E=G("div"),A=G("span"),F=Ee("⬆️ "),R=Ee(v),X=le(),j=G("span"),j.textContent="•",N=le(),O=G("span"),ie=Ee(W),K=le(),ne&&ne.c(),V=le(),Q=G("div"),Ui(q.$$.fragment),fe=le(),L(r,"class","text-xl font-bold text-purple-300"),L(l,"class",u=`inline-block w-3 h-3 rounded-full ${e[18].provider==="Pinggy"?"bg-purple-500":"bg-blue-500"}`),L(h,"class","text-sm text-gray-400"),L(c,"class","flex items-center space-x-2"),L(i,"class","flex justify-between"),L(m,"href",S=e[18].tunnel_url),L(m,"target","_blank"),L(m,"rel","noopener noreferrer"),L(m,"class","text-blue-400 hover:text-blue-300 underline break-all"),L(A,"class","text-sm text-gray-400"),L(j,"class","text-sm text-gray-400"),L(O,"class","text-sm text-gray-400"),L(E,"class","mt-3 flex flex-wrap items-center gap-2"),L(Q,"class","mt-3"),L(t,"id",Z="post-"+e[18].id),L(t,"class","p-4 bg-gray-700 rounded-md shadow hover:bg-gray-650 transition-colors"),this.first=t},m(se,P){Me(se,t,P),C(t,i),C(i,r),C(r,a),C(i,o),C(i,c),C(c,l),C(c,f),C(c,h),C(h,g),C(t,_),C(t,m),C(m,w),C(t,y),k&&k.m(t,null),C(t,x),C(t,E),C(E,A),C(A,F),C(A,R),C(E,X),C(E,j),C(E,N),C(E,O),C(O,ie),C(E,K),ne&&ne.m(E,null),C(t,V),C(t,Q),ei(q,Q,null),C(t,fe),I=!0},p(se,P){e=se,(!I||P&32)&&s!==(s=e[18].title+"")&&ke(a,s),(!I||P&32&&u!==(u=`inline-block w-3 h-3 rounded-full ${e[18].provider==="Pinggy"?"bg-purple-500":"bg-blue-500"}`))&&L(l,"class",u),(!I||P&32)&&p!==(p=e[18].provider+"")&&ke(g,p),(!I||P&32)&&d!==(d=e[18].tunnel_url+"")&&ke(w,d),(!I||P&32&&S!==(S=e[18].tunnel_url))&&L(m,"href",S),e[18].description?k?k.p(e,P):(k=Ol(e),k.c(),k.m(t,x)):k&&(k.d(1),k=null),(!I||P&32)&&v!==(v=e[18].upvotes+"")&&ke(R,v),(!I||P&32)&&W!==(W=new Date(e[18].created_at).toLocaleDateString()+"")&&ke(ie,W),e[18].tags&&e[18].tags.length>0?ne?ne.p(e,P):(ne=Bl(e),ne.c(),ne.m(E,null)):ne&&(ne.d(1),ne=null);const Se={};P&32&&(Se.post=e[18]),q.$set(Se),(!I||P&32&&Z!==(Z="post-"+e[18].id))&&L(t,"id",Z)},i(se){I||(st(q.$$.fragment,se),I=!0)},o(se){ht(q.$$.fragment,se),I=!1},d(se){se&&ve(t),k&&k.d(),ne&&ne.d(),ti(q)}}}function u0(n){let e,t,i,r=n[0]?"Try a different tag filter.":"Publish one to start the network!",s;return{c(){e=G("div"),t=G("p"),i=Ee("No tunnels to display. "),s=Ee(r),L(t,"class","text-gray-400"),L(e,"class","h-[600px] flex items-center justify-center")},m(a,o){Me(a,e,o),C(e,t),C(t,i),C(t,s)},p(a,o){o&1&&r!==(r=a[0]?"Try a different tag filter.":"Publish one to start the network!")&&ke(s,r)},i:Je,o:Je,d(a){a&&ve(e)}}}function f0(n){let e,t;return e=new i0({props:{height:"600px",selectedTag:n[0]}}),{c(){Ui(e.$$.fragment)},m(i,r){ei(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.selectedTag=i[0]),e.$set(s)},i(i){t||(st(e.$$.fragment,i),t=!0)},o(i){ht(e.$$.fragment,i),t=!1},d(i){ti(e,i)}}}function h0(n){let e,t,i,r;return{c(){e=G("div"),t=G("p"),i=Ee("Error loading network: "),r=Ee(n[8]),L(t,"class","text-red-400"),L(e,"class","h-[600px] flex items-center justify-center")},m(s,a){Me(s,e,a),C(e,t),C(t,i),C(t,r)},p(s,a){a&256&&ke(r,s[8])},i:Je,o:Je,d(s){s&&ve(e)}}}function d0(n){let e;return{c(){e=G("div"),e.innerHTML='<p class="text-gray-400">Loading network...</p>',L(e,"class","h-[600px] flex items-center justify-center")},m(t,i){Me(t,e,i)},p:Je,i:Je,o:Je,d(t){t&&ve(e)}}}function p0(n){let e,t,i,r,s,a,o,c,l,u,f,h,p,g,_,m,d,w,S,y,x,E,A,F,v,R,X,j,N,O,W,ie,K;s=new cu({}),o=new mu({});let V=n[6].length>0&&Rl(n);const Q=[s0,r0],q=[];function fe(Z,I){return Z[3]==="graph"?0:1}return R=fe(n),X=q[R]=Q[R](n),{c(){e=G("main"),t=G("header"),t.innerHTML=`<h1 class="text-5xl font-bold text-purple-400">GhostNet</h1> 
    <p class="text-xl text-gray-300 mt-2">Discover and Share Anonymous GhostHub Tunnels</p>`,i=le(),r=G("div"),Ui(s.$$.fragment),a=le(),Ui(o.$$.fragment),c=le(),l=G("div"),u=G("h2"),u.textContent="Tunnel Discovery",f=le(),h=G("div"),p=G("button"),g=on("svg"),_=on("path"),m=Ee(`\r
        Network`),w=le(),S=G("button"),y=on("svg"),x=on("path"),E=Ee(`\r
        List`),F=le(),V&&V.c(),v=le(),X.c(),j=le(),N=G("footer"),O=G("p"),O.textContent=`© ${n[9]} GhostNet. Not really copyrighted, it's all anonymous!`,L(t,"class","my-6 text-center"),L(r,"class","w-full max-w-2xl"),L(u,"class","text-2xl font-semibold text-purple-300"),L(_,"d","M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H5.5z"),L(g,"xmlns","http://www.w3.org/2000/svg"),L(g,"class","h-5 w-5 inline-block mr-1"),L(g,"viewBox","0 0 20 20"),L(g,"fill","currentColor"),L(p,"class",d=`px-4 py-2 rounded-lg ${n[3]==="graph"?"bg-purple-700 text-white":"bg-gray-700 text-gray-300"}`),L(x,"fill-rule","evenodd"),L(x,"d","M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"),L(x,"clip-rule","evenodd"),L(y,"xmlns","http://www.w3.org/2000/svg"),L(y,"class","h-5 w-5 inline-block mr-1"),L(y,"viewBox","0 0 20 20"),L(y,"fill","currentColor"),L(S,"class",A=`px-4 py-2 rounded-lg ${n[3]==="list"?"bg-purple-700 text-white":"bg-gray-700 text-gray-300"}`),L(h,"class","flex space-x-2"),L(l,"class","w-full max-w-5xl flex justify-between items-center mt-8 mb-4"),L(N,"class","text-gray-500 text-sm mt-auto py-4"),L(e,"class","bg-gray-900 text-white min-h-screen flex flex-col items-center p-4")},m(Z,I){Me(Z,e,I),C(e,t),C(e,i),C(e,r),ei(s,r,null),C(r,a),ei(o,r,null),C(e,c),C(e,l),C(l,u),C(l,f),C(l,h),C(h,p),C(p,g),C(g,_),C(p,m),C(h,w),C(h,S),C(S,y),C(y,x),C(S,E),C(e,F),V&&V.m(e,null),C(e,v),q[R].m(e,null),C(e,j),C(e,N),C(N,O),W=!0,ie||(K=[rt(p,"click",n[12]),rt(S,"click",n[13])],ie=!0)},p(Z,[I]){(!W||I&8&&d!==(d=`px-4 py-2 rounded-lg ${Z[3]==="graph"?"bg-purple-700 text-white":"bg-gray-700 text-gray-300"}`))&&L(p,"class",d),(!W||I&8&&A!==(A=`px-4 py-2 rounded-lg ${Z[3]==="list"?"bg-purple-700 text-white":"bg-gray-700 text-gray-300"}`))&&L(S,"class",A),Z[6].length>0?V?V.p(Z,I):(V=Rl(Z),V.c(),V.m(e,v)):V&&(V.d(1),V=null);let k=R;R=fe(Z),R===k?q[R].p(Z,I):($n(),ht(q[k],1,1,()=>{q[k]=null}),Qn(),X=q[R],X?X.p(Z,I):(X=q[R]=Q[R](Z),X.c()),st(X,1),X.m(e,j))},i(Z){W||(st(s.$$.fragment,Z),st(o.$$.fragment,Z),st(X),W=!0)},o(Z){ht(s.$$.fragment,Z),ht(o.$$.fragment,Z),ht(X),W=!1},d(Z){Z&&ve(e),ti(s),ti(o),V&&V.d(),q[R].d(),ie=!1,en(K)}}}function m0(n,e,t){let i,r,s,a,o;os(n,cn,x=>t(11,s=x)),os(n,Xr,x=>t(7,a=x)),os(n,qr,x=>t(8,o=x));let c=new Date().getFullYear(),l="graph",u="",f,h=[],p=[];ln.subscribe(x=>{t(1,f=x)}),Xl(async()=>{await Ci()});function g(x){t(0,u=u===x?"":x)}const _=()=>t(3,l="graph"),m=()=>t(3,l="list"),d=x=>g(x),w=()=>t(0,u=""),S=x=>g(x),y=x=>g(x);return n.$$.update=()=>{n.$$.dirty&2048&&t(6,i=s?Array.from(new Set(s.flatMap(x=>x.tags||[]))).sort():[]),n.$$.dirty&2049&&t(2,r=u?s.filter(x=>x.tags&&x.tags.includes(u)):s),n.$$.dirty&6&&t(4,h=f?r.filter(x=>x.own_by_current_user===!0):[]),n.$$.dirty&6&&t(5,p=f?r.filter(x=>!x.own_by_current_user):r)},[u,f,r,l,h,p,i,a,o,c,g,s,_,m,d,w,S,y]}class g0 extends ki{constructor(e){super(),zi(this,e,m0,p0,ri,{})}}new g0({target:document.getElementById("app")});
