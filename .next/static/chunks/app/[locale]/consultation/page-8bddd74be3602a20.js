(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[259],{3708:function(e,t,n){Promise.resolve().then(n.bind(n,2612)),Promise.resolve().then(n.bind(n,5902))},357:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(8081)},8081:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var l=[],c=!1,d=-1;function u(){c&&r&&(c=!1,r.length?l=r.concat(l):d=-1,l.length&&h())}function h(){if(!c){var e=o(u);c=!0;for(var t=l.length;t;){for(r=l,l=[];++d<t;)r&&r[d].run();d=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||o(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}},s=!0;try{t[e](a,a.exports,r),s=!1}finally{s&&delete n[e]}return a.exports}r.ab="//";var i=r(229);e.exports=i}()},5902:function(e,t,n){"use strict";n.d(t,{default:function(){return v}});var r,i=n(7437),a=n(2265);let s="undefined"!=typeof window&&"undefined"!=typeof document?a.useLayoutEffect:a.useEffect,o=(e,t,n)=>{s(()=>{if(!e||!n)return;let r=function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return void 0===r?n(e):n(e,...r)};return kakao.maps.event.addListener(e,t,r),()=>{kakao.maps.event.removeListener(e,t,r)}},[e,t,n])},l="__react-kakao-maps-sdk__",c=((r={})[r.INITIALIZED=0]="INITIALIZED",r[r.LOADING=1]="LOADING",r[r.SUCCESS=2]="SUCCESS",r[r.FAILURE=3]="FAILURE",r),d=`${l}_Loader`;class u{static loadEventCallback=new Set;callbacks=[];done=!1;loading=!1;errors=[];constructor(e){let{appkey:t,id:n=d,libraries:r=[],nonce:i,retries:a=3,url:s="//dapi.kakao.com/v2/maps/sdk.js"}=e;if(this.id=n,this.appkey=t,this.libraries=r,this.nonce=i,this.retries=a,this.url=s,u.instance&&!u.equalOptions(this.options,u.instance.options)&&!u.equalOptions(this.options,u.instance.options)){if(u.instance.status===c.FAILURE)throw Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options,null,2)}
!==
${JSON.stringify(u.instance.options,null,2)}`);u.instance.reset(),u.instance=this}return u.instance||(u.instance=this),u.instance}get options(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}static addLoadEventLisnter(e){return window.kakao&&window.kakao.maps&&window.kakao.maps.load(e),u.loadEventCallback.add(e),e}static removeLoadEventLisnter(e){return u.loadEventCallback.delete(e)}load(){return new Promise((e,t)=>{this.loadCallback(n=>{n?t(n):e(window.kakao)})})}get status(){return this.onEvent?c.FAILURE:this.done?c.SUCCESS:this.loading?c.LOADING:c.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}loadCallback(e){this.callbacks.push(e),this.execute()}resetIfRetryingFailed(){this.failed&&this.reset()}reset(){this.deleteScript(),this.done=!0,this.loading=!1,this.errors=[],this.onEvent=void 0}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps){console.warn("Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다."),window.kakao.maps.load(this.callback);return}this.loading||(this.loading=!0,this.setScript())}}setScript(){document.getElementById(this.id)&&this.callback();let e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.onload=this.callback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){let e=this.errors.length*2**this.errors.length;console.log(`Failed to load Kakao Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)}else this.done=!0,this.loading=!1,this.onEvent=this.errors[this.errors.length-1],this.callbacks.forEach(e=>{e(this.onEvent)}),this.callbacks=[],u.loadEventCallback.forEach(e=>{e(this.onEvent)})}createUrl(){let e=this.url;return e+=`?appkey=${this.appkey}`,this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),e+="&autoload=false"}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}callback(){kakao.maps.load(()=>{u.instance.done=!0,u.instance.loading=!1,u.instance.callbacks.forEach(e=>{e(u.instance.onEvent)}),u.instance.callbacks=[],u.loadEventCallback.forEach(e=>{e(u.instance.onEvent)})})}static equalOptions(e,t){if(e.appkey!==t.appkey||e.id!==t.id||e.libraries.length!==t.libraries.length)return!1;for(let n=0;n<e.libraries.length;++n)if(e.libraries[n]!==t.libraries[n])return!1;return e.nonce===t.nonce&&e.retries===t.retries&&e.url===t.url}}let h=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];s(()=>{!e||r.every(e=>void 0===e)||e[t].call(e,...r)},[e,t,...r])},p=a.createContext(void 0),f=a.forwardRef(function(e,t){let{id:n,as:r,children:c,center:d,isPanto:f=!1,padding:k=32,disableDoubleClick:g,disableDoubleClickZoom:v,draggable:m,zoomable:b,keyboardShortcuts:y,level:E,maxLevel:L,minLevel:w,mapTypeId:I,projectionId:T,scrollwheel:C,tileAnimation:S,onBoundsChanged:x,onCenterChanged:_,onClick:A,onDoubleClick:N,onDrag:O,onDragEnd:M,onDragStart:U,onIdle:j,onMaptypeidChanged:F,onMouseMove:R,onRightClick:D,onTileLoaded:$,onZoomChanged:K,onZoomStart:P,onCreate:q,...Z}=e,[B,G]=(0,a.useState)(!1),[J,z]=(0,a.useState)(),H=(0,a.useRef)(null);return s(()=>{let e=u.addLoadEventLisnter(e=>G(!e));return()=>{u.removeLoadEventLisnter(e)}},[]),s(()=>{if(!B)return;let e=H.current;if(!e)return;let t="lat"in d?new kakao.maps.LatLng(d.lat,d.lng):new kakao.maps.Coords(d.x,d.y);return z(new kakao.maps.Map(e,{center:t,disableDoubleClick:g,disableDoubleClickZoom:v,draggable:m,keyboardShortcuts:y,level:E,mapTypeId:"string"==typeof I?kakao.maps.MapTypeId[I]:I,projectionId:T,scrollwheel:C,tileAnimation:S})),()=>{e.innerHTML=""}},[B,g,v,S]),(0,a.useImperativeHandle)(t,()=>J,[J]),s(()=>{J&&q&&q(J)},[J,q]),s(()=>{if(!J)return;let e=J.getCenter();e instanceof kakao.maps.Coords&&(e=e.toLatLng());let t="lat"in d?new kakao.maps.LatLng(d.lat,d.lng):new kakao.maps.Coords(d.x,d.y);t instanceof kakao.maps.LatLng&&t.equals(e)||t instanceof kakao.maps.Coords&&t.toLatLng().equals(e)||(f?J.panTo(t,k):J.setCenter(t))},[J,d.lat,d.lng,d.x,d.y]),h(J,"setDraggable",m),h(J,"setZoomable",b),h(J,"setKeyboardShortcuts",y),h(J,"setLevel",E),h(J,"setMapTypeId",B?"string"==typeof I?kakao.maps.MapTypeId[I]:I:void 0),h(J,"setProjectionId",T),h(J,"setMinLevel",L),h(J,"setMaxLevel",w),o(J,"bounds_changed",x),o(J,"center_changed",_),o(J,"click",A),o(J,"dblclick",N),o(J,"drag",O),o(J,"dragstart",U),o(J,"dragend",M),o(J,"idle",j),o(J,"maptypeid_changed",F),o(J,"mousemove",R),o(J,"rightclick",D),o(J,"tilesloaded",$),o(J,"zoom_changed",K),o(J,"zoom_start",P),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r||"div",{id:n||`${l}_Map`,...Z,ref:H}),J&&(0,i.jsx)(p.Provider,{value:J,children:c})]})}),k=e=>{let[t,n]=(0,a.useState)([!0,void 0]);return(0,a.useEffect)(()=>{new u({...e}).load().then(()=>n([!1,void 0])).catch(e=>{n([!1,e])})},[JSON.stringify(e)]),t};var g=n(357);function v(){return k({appkey:g.env.NEXT_PUBLIC_KAKAO_KEY,libraries:["clusterer","drawing","services"]}),(0,i.jsx)(f,{id:"map",center:{lat:35.11885012394496,lng:126.76539684846757},style:{width:"100%",height:"400px"},level:3})}}},function(e){e.O(0,[612,971,23,744],function(){return e(e.s=3708)}),_N_E=e.O()}]);