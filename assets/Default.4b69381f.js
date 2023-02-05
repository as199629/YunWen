import{d as _,T as M,a as L,h as H,c as J,g as S,b as s,p as U,m as E,t as x,e as N,r as R,f as y,i as W,j as p,k as K,u as Q,l as z,o as w,n as B,w as h,q as X,s as Y,v as Z}from"./index.8051350c.js";import{m as D,u as g,a as tt,b as et,c as at,d as nt,e as ot,f as st,g as lt,V as b,h as it}from"./ssrBoot.c0eba784.js";import{V as rt}from"./VImg.9b394459.js";import{m as ut,u as dt,V as ct,a as ft,c as mt}from"./VMain.25bda665.js";function u(t){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",o=arguments.length>2?arguments[2]:void 0;return _({name:t,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:o},origin:{type:String,default:l}},setup(a,i){let{slots:r}=i;return()=>{const e=a.group?M:L;return H(e,{name:t,mode:a.mode,onBeforeEnter(n){n.style.transformOrigin=a.origin},onLeave(n){if(a.leaveAbsolute){const{offsetTop:d,offsetLeft:m,offsetWidth:c,offsetHeight:f}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${d}px`,n.style.left=`${m}px`,n.style.width=`${c}px`,n.style.height=`${f}px`}a.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(a.leaveAbsolute&&n!=null&&n._transitionInitialStyles){const{position:d,top:m,left:c,width:f,height:v}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=d||"",n.style.top=m||"",n.style.left=c||"",n.style.width=f||"",n.style.height=v||""}}},r.default)}}})}function F(t,l){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return _({name:t,props:{mode:{type:String,default:o}},setup(a,i){let{slots:r}=i;return()=>H(L,{name:t,...l},r.default)}})}function O(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const o=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",a=J(`offset-${o}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[o]:e.style[o]}},onEnter(e){const n=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const d=`${e[a]}px`;e.style[o]="0",e.offsetHeight,e.style.transition=n.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[o]=d})},onAfterEnter:r,onEnterCancelled:r,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[o]:e.style[o]},e.style.overflow="hidden",e.style[o]=`${e[a]}px`,e.offsetHeight,requestAnimationFrame(()=>e.style[o]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(e){const n=e._initialStyle[o];e.style.overflow=e._initialStyle.overflow,n!=null&&(e.style[o]=n),delete e._initialStyle}}u("fab-transition","center center","out-in");u("dialog-bottom-transition");u("dialog-top-transition");u("fade-transition");u("scale-transition");u("scroll-x-transition");u("scroll-x-reverse-transition");u("scroll-y-transition");u("scroll-y-reverse-transition");u("slide-x-transition");u("slide-x-reverse-transition");u("slide-y-transition");u("slide-y-reverse-transition");const vt=F("expand-transition",O());F("expand-x-transition",O("",!0));const V=S()({name:"VToolbarTitle",props:{text:String,...D()},setup(t,l){let{slots:o}=l;return g(()=>{var a;const i=!!(o.default||o.text||t.text);return s(t.tag,{class:"v-toolbar-title"},{default:()=>[i&&s("div",{class:"v-toolbar-title__placeholder"},[o.text?o.text():t.text,(a=o.default)==null?void 0:a.call(o)])]})}),{}}}),gt=[null,"prominent","default","comfortable","compact"],q=U({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>gt.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...tt(),...et(),...at(),...D({tag:"header"}),...E()},"v-toolbar"),T=S()({name:"VToolbar",props:q(),setup(t,l){var o;let{slots:a}=l;const{backgroundColorClasses:i,backgroundColorStyles:r}=nt(x(t,"color")),{borderClasses:e}=ot(t),{elevationClasses:n}=st(t),{roundedClasses:d}=lt(t),{themeClasses:m}=N(t),c=R(!!(t.extended||(o=a.extension)!=null&&o.call(a))),f=y(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),v=y(()=>c.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return W({VBtn:{variant:"text"}}),g(()=>{var $,C,k,A,P;const j=!!(t.title||a.title),G=!!(a.image||t.image),I=($=a.extension)==null?void 0:$.call(a);return c.value=!!(t.extended||I),s(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},i.value,e.value,n.value,d.value,m.value],style:[r.value]},{default:()=>[G&&s("div",{key:"image",class:"v-toolbar__image"},[s(b,{defaults:{VImg:{cover:!0,src:t.image}}},{default:()=>[a.image?(C=a.image)==null?void 0:C.call(a):s(rt,null,null)]})]),s(b,{defaults:{VTabs:{height:p(f.value)}}},{default:()=>[s("div",{class:"v-toolbar__content",style:{height:p(f.value)}},[a.prepend&&s("div",{class:"v-toolbar__prepend"},[(k=a.prepend)==null?void 0:k.call(a)]),j&&s(V,{key:"title",text:t.title},{text:a.title}),(A=a.default)==null?void 0:A.call(a),a.append&&s("div",{class:"v-toolbar__append"},[(P=a.append)==null?void 0:P.call(a)])])]}),s(b,{defaults:{VTabs:{height:p(v.value)}}},{default:()=>[s(vt,null,{default:()=>[c.value&&s("div",{class:"v-toolbar__extension",style:{height:p(v.value)}},[I])]})]})]})}),{contentHeight:f,extensionHeight:v}}});function pt(t){var l;return K(t,Object.keys((l=T==null?void 0:T.props)!=null?l:{}))}const yt=S()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},...q(),...ut(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":t=>!0},setup(t,l){let{slots:o}=l;const a=R(),i=Q(t,"modelValue"),r=y(()=>{var f,v;var n,d;const m=(f=(n=a.value)==null?void 0:n.contentHeight)!=null?f:0,c=(v=(d=a.value)==null?void 0:d.extensionHeight)!=null?v:0;return m+c}),{layoutItemStyles:e}=dt({id:t.name,order:y(()=>parseInt(t.order,10)),position:x(t,"location"),layoutSize:r,elementSize:r,active:i,absolute:x(t,"absolute")});return g(()=>{const[n]=pt(t);return s(T,z({ref:a,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"}],style:{...e.value,height:void 0}},n),o)}),{}}}),ht=_({name:"VAppBarTitle",props:{...V.props},setup(t,l){let{slots:o}=l;return g(()=>s(V,z(t,{class:"v-app-bar-title"}),o)),{}}}),_t={__name:"AppBar",setup(t){return(l,o)=>(w(),B(yt,{flat:""},{default:h(()=>[s(ht,null,{default:h(()=>[s(it,{icon:"mdi-circle-slice-4"}),X(" Flower.tw ")]),_:1})]),_:1}))}},bt={__name:"View",setup(t){return(l,o)=>{const a=Y("router-view");return w(),B(ct,null,{default:h(()=>[s(a)]),_:1})}}};const xt=_({name:"VApp",props:{...ft({fullHeight:!0}),...E()},setup(t,l){let{slots:o}=l;const a=N(t),{layoutClasses:i,layoutStyles:r,getLayoutItem:e,items:n,layoutRef:d}=mt(t),{rtlClasses:m}=Z();return g(()=>{var c;return s("div",{ref:d,class:["v-application",a.themeClasses.value,i.value,m.value],style:r.value},[s("div",{class:"v-application__wrap"},[(c=o.default)==null?void 0:c.call(o)])])}),{getLayoutItem:e,items:n,theme:a}}}),Bt={__name:"Default",setup(t){return(l,o)=>(w(),B(xt,null,{default:h(()=>[s(_t),s(bt)]),_:1}))}};export{Bt as default};
