(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{213:function(t,e,o){"use strict";o(20),o(11),o(9),o(7),o(18);var n=o(16),r=o(4),l=(o(128),o(248),o(222)),c=o(253),h=o(21),d=o(22);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=l.a.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return f({},l.a.options.computed.classes.call(this),{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return f({},this.measurableStyles,{height:Object(h.c)(this.computedHeight)})}},created:function(){var t=this;[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]].forEach((function(e){var o=Object(n.a)(e,2),r=o[0],l=o[1];t.$attrs.hasOwnProperty(r)&&Object(d.a)(r,l,t)}))},methods:{genBackground:function(){var t={height:Object(h.c)(this.computedHeight),src:this.src},image=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(c.a,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[image])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(h.c)(this.computedContentHeight)}},Object(h.j)(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(h.c)(this.extensionHeight)}},Object(h.j)(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],data=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,data,e)}})},220:function(t,e,o){"use strict";o(128),o(23),o(71),o(72),o(7),o(238);function n(t,e){t.style.transform=e,t.style.webkitTransform=e}function r(t,e){t.style.opacity=e.toString()}function l(t){return"TouchEvent"===t.constructor.name}var c=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e.getBoundingClientRect(),r=l(t)?t.touches[t.touches.length-1]:t,c=r.clientX-n.left,h=r.clientY-n.top,d=0,v=.3;e._ripple&&e._ripple.circle?(v=.15,d=e.clientWidth/2,d=o.center?d:d+Math.sqrt(Math.pow(c-d,2)+Math.pow(h-d,2))/4):d=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var f="".concat((e.clientWidth-2*d)/2,"px"),m="".concat((e.clientHeight-2*d)/2,"px"),_=o.center?f:"".concat(c-d,"px"),x=o.center?m:"".concat(h-d,"px");return{radius:d,scale:v,x:_,y:x,centerX:f,centerY:m}},h={show:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var l=document.createElement("span"),h=document.createElement("span");l.appendChild(h),l.className="v-ripple__container",o.class&&(l.className+=" ".concat(o.class));var d=c(t,e,o),v=d.radius,f=d.scale,m=d.x,_=d.y,x=d.centerX,S=d.centerY,y="".concat(2*v,"px");h.className="v-ripple__animation",h.style.width=y,h.style.height=y,e.appendChild(l);var O=window.getComputedStyle(e);O&&"static"===O.position&&(e.style.position="relative",e.dataset.previousPosition="static"),h.classList.add("v-ripple__animation--enter"),h.classList.add("v-ripple__animation--visible"),n(h,"translate(".concat(m,", ").concat(_,") scale3d(").concat(f,",").concat(f,",").concat(f,")")),r(h,0),h.dataset.activated=String(performance.now()),setTimeout((function(){h.classList.remove("v-ripple__animation--enter"),h.classList.add("v-ripple__animation--in"),n(h,"translate(".concat(x,", ").concat(S,") scale3d(1,1,1)")),r(h,.25)}),0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var o=e[e.length-1];if(!o.dataset.isHiding){o.dataset.isHiding="true";var n=performance.now()-Number(o.dataset.activated),l=Math.max(250-n,0);setTimeout((function(){o.classList.remove("v-ripple__animation--in"),o.classList.add("v-ripple__animation--out"),r(o,0),setTimeout((function(){1===t.getElementsByClassName("v-ripple__animation").length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),o.parentNode&&t.removeChild(o.parentNode)}),300)}),l)}}}}};function d(t){return void 0===t||!!t}function v(t){var e={},element=t.currentTarget;if(element&&element._ripple&&!element._ripple.touched){if(l(t))element._ripple.touched=!0,element._ripple.isTouch=!0;else if(element._ripple.isTouch)return;e.center=element._ripple.centered,element._ripple.class&&(e.class=element._ripple.class),h.show(t,element,e)}}function f(t){var element=t.currentTarget;element&&(window.setTimeout((function(){element._ripple&&(element._ripple.touched=!1)})),h.hide(element))}function m(t,e,o){var n=d(e.value);n||h.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=n;var r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),n&&!o?(t.addEventListener("touchstart",v,{passive:!0}),t.addEventListener("touchend",f,{passive:!0}),t.addEventListener("touchcancel",f),t.addEventListener("mousedown",v),t.addEventListener("mouseup",f),t.addEventListener("mouseleave",f),t.addEventListener("dragstart",f,{passive:!0})):!n&&o&&_(t)}function _(t){t.removeEventListener("mousedown",v),t.removeEventListener("touchstart",f),t.removeEventListener("touchend",f),t.removeEventListener("touchcancel",f),t.removeEventListener("mouseup",f),t.removeEventListener("mouseleave",f),t.removeEventListener("dragstart",f)}var x={bind:function(t,e,o){m(t,e,!1)},unbind:function(t){delete t._ripple,_(t)},update:function(t,e){e.value!==e.oldValue&&m(t,e,d(e.oldValue))}};e.a=x},226:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var n=o(213),r=o(21),l=Object(r.e)("v-toolbar__title"),c=Object(r.e)("v-toolbar__items");n.a},238:function(t,e,o){var content=o(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("04604cc2",content,!0,{sourceMap:!1})},239:function(t,e,o){(t.exports=o(35)(!1)).push([t.i,".v-ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0;contain:strict}.v-ripple__animation,.v-ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.v-ripple__animation{border-radius:50%;background:currentColor;opacity:0;will-change:transform,opacity}.v-ripple__animation--enter{transition:none}.v-ripple__animation--in{transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1)}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(.4,0,.2,1)}",""])},246:function(t,e,o){var content=o(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("a9b20584",content,!0,{sourceMap:!1})},247:function(t,e,o){(t.exports=o(35)(!1)).push([t.i,".v-app-bar:not([data-booted=true]){transition:none!important}.v-app-bar.v-app-bar--fixed{position:fixed;top:0;z-index:5}.v-app-bar.v-app-bar--hide-shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-app-bar--fade-img-on-scroll .v-toolbar__image .v-image__image{transition:opacity .4s cubic-bezier(.4,0,.2,1)}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__content{will-change:height}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__image{will-change:opacity}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--collapse-on-scroll .v-toolbar__extension{display:none}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled .v-toolbar__title{padding-top:9px}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title{padding-bottom:9px}.v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title{font-size:inherit}",""])},248:function(t,e,o){var content=o(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("402355ff",content,!0,{sourceMap:!1})},249:function(t,e,o){(t.exports=o(35)(!1)).push([t.i,".v-toolbar{contain:layout;display:block;flex:1 1 auto;max-width:100%;transition:transform .2s cubic-bezier(.4,0,.2,1),background-color .2s cubic-bezier(.4,0,.2,1),left .2s cubic-bezier(.4,0,.2,1),right .2s cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1),max-width .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-toolbar .v-input{padding-top:0;margin-top:0}.v-toolbar__content,.v-toolbar__extension{padding:4px 16px}.v-toolbar__content .v-btn.v-btn--icon.v-size--default,.v-toolbar__extension .v-btn.v-btn--icon.v-size--default{height:48px;width:48px}.v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-toolbar__extension>.v-btn.v-btn--icon:first-child{margin-left:-12px}.v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{padding-left:20px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child,.v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-toolbar__extension>.v-btn.v-btn--icon:last-child{margin-right:-12px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{padding-right:20px}.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:last-child{margin-left:-12px}.v-toolbar__content>.v-tabs,.v-toolbar__extension>.v-tabs{height:inherit;margin-top:-4px;margin-bottom:-4px}.v-toolbar__content>.v-tabs .v-tabs-bar,.v-toolbar__extension>.v-tabs .v-tabs-bar{height:inherit}.v-toolbar__content>.v-tabs:first-child,.v-toolbar__extension>.v-tabs:first-child{margin-left:-16px}.v-toolbar__content>.v-tabs:last-child,.v-toolbar__extension>.v-tabs:last-child{margin-right:-16px}.v-toolbar__content,.v-toolbar__extension{align-items:center;display:flex;position:relative;z-index:0}.v-toolbar__image{position:absolute;top:0;bottom:0;width:100%;z-index:0;contain:strict}.v-toolbar__image,.v-toolbar__image .v-image{border-radius:inherit}.v-toolbar__items{display:flex;height:inherit}.v-toolbar__items>.v-btn{border-radius:0;height:100%!important;max-height:none}.v-toolbar__title{font-size:1.25rem;line-height:1.5;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-toolbar.v-toolbar--absolute{position:absolute;top:0;z-index:1}.v-toolbar.v-toolbar--bottom{top:auto;bottom:0}.v-toolbar.v-toolbar--collapse .v-toolbar__title{white-space:nowrap}.v-toolbar.v-toolbar--collapsed{border-bottom-right-radius:24px;max-width:112px;overflow:hidden}.v-toolbar.v-toolbar--collapsed .v-toolbar__extension,.v-toolbar.v-toolbar--collapsed .v-toolbar__title{display:none}.v-toolbar--dense .v-toolbar__content,.v-toolbar--dense .v-toolbar__extension{padding-top:0;padding-bottom:0}.v-toolbar--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-toolbar--floating{display:inline-flex}.v-toolbar--prominent .v-toolbar__content{align-items:flex-start}.v-toolbar--prominent .v-toolbar__title{font-size:1.5rem;padding-top:6px}.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title{align-self:flex-end;padding-bottom:6px;padding-top:0}",""])},268:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},324:function(t,e,o){"use strict";o(20),o(11),o(9),o(7),o(18),o(128),o(219);var n=o(4),r=(o(246),o(213));var l={inserted:function(t,e){var o=e.value,n=e.options||{passive:!0},r=e.arg?document.querySelector(e.arg):window;r&&(r.addEventListener("scroll",o,n),t._onScroll={callback:o,options:n,target:r})},unbind:function(t){if(t._onScroll){var e=t._onScroll,o=e.callback,n=e.options;e.target.removeEventListener("scroll",o,n),delete t._onScroll}}},c=l,h=o(221),d=o(87);var v=o(22),f=o(0).a.extend({name:"scrollable",directives:{Scroll:l},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!=typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(v.c)("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),m=o(95),_=o(223),x=o(21);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(source,!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=Object(d.a)(r.a,f,m.a,_.a,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(d.a)(Object(h.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e.a=O.extend({name:"v-app-bar",directives:{Scroll:c},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return f.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return y({},r.a.options.computed.classes.call(this),{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return r.a.options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,o=t,n=(o-e)/this.computedScrollThreshold,l=this.currentScroll*n;return Math.max(e,o-l)},computedFontSize:function(){if(this.isProminent){var t=(this.dense?96:128)-this.computedContentHeight;return Number((1.5-.00347*t).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=r.a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:r.a.options.computed.isCollapsed.call(this)},isProminent:function(){return r.a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return y({},r.a.options.computed.styles.call(this),{fontSize:Object(x.c)(this.computedFontSize,"rem"),marginTop:Object(x.c)(this.computedMarginTop),transform:"translateY(".concat(Object(x.c)(this.computedTransform),")"),left:Object(x.c)(this.computedLeft),right:Object(x.c)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=r.a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render:function(t){var e=r.a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})}}]);