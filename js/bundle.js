var wheel = document.getElementById("wheel");
var wheelBtn = document.getElementById("button");
var modal = document.getElementById("modal");
var closePopup = document.getElementById("closePopup");
var firstWrapper = document.getElementById("firstWrapper");
var secondWrapper = document.getElementById("secondWrapper");
var buttonText = document.getElementById("buttonText");
var getPrizes = document.getElementById("getPrizes");
var redirectLink = document.getElementById("redirectLink");
var firstTitle = document.getElementById("firstTitle");
var secondTitle = document.getElementById("secondTitle");
var modalJinnFirst = document.getElementById("modalJinnFirst");
var modalJinnSecond = document.getElementById("modalJinnSecond");

var counter = 0;

function animation() {
  if (counter < 1) {
    wheel.classList.toggle("step-1");
    wheelBtn.classList.toggle("animation-in-process");
    setTimeout(() => modalJinnFirst.style.display = "block", 5640);
    counter++;
    if (innerWidth < 500) {
      modal.style.backgroundImage = 'url(../img/mobile/popup1-bg.png)';
    }
  } else {
    modal.classList.toggle("modal-width");
    firstWrapper.style.display = "none";
    secondWrapper.style.display = "block";
    firstTitle.style.display = "none";
    secondTitle.style.display = "block";
    getPrizes.style.display = "none";
    redirectLink.style.display = "flex";
    wheel.classList.toggle("step-2");
    wheelBtn.classList.toggle("animation-in-process");
    closePopup.style.display = "none";
    modal.style.backgroundImage = 'url(../img/desktop/popup2-bg.png)';
    setTimeout(() => modalJinnSecond.style.display = "block", 5640);
    if (innerWidth < 500) {
      modal.style.backgroundImage = 'url(../img/mobile/popup2-bg.png)';
    }
  }
  function modalPopup() {
    modal.classList.toggle("modal-active");
    overlay.classList.toggle("overlay-active");
  }
  setTimeout(modalPopup, 5500);
}

function closeModal() {
  modalJinnFirst.style.display = "none";
  modal.classList.toggle("modal-active");
  overlay.classList.toggle("overlay-active");
  wheelBtn.classList.toggle("animation-in-process");
}

!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function t(e){return new t.prototype.init(e)};o.prototype.init=function(t){return t?t.tagName?(this[0]=t,this.length=1,this):(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this},o.prototype.init.prototype=o.prototype,window.$$=o;var r=o;r.prototype.show=function(t){for(var e=0;e<this.length;e++)this[e].style&&(this[e].style.display=t);return this},r.prototype.hide=function(){for(var t=0;t<this.length;t++)this[t].style&&(this[t].style.display="none");return this},r.prototype.toggle=function(){for(var t=0;t<this.length;t++)this[t].style&&("none"===this[t].style.display?this[t].style.display="auto":this[t].style.display="none");return this},r.prototype.addClass=function(){for(var t=0;t<this.length;t++){var e;(e=this[t].classList).add.apply(e,arguments)}return this},r.prototype.removeClass=function(){for(var t=0;t<this.length;t++){var e;(e=this[t].classList).remove.apply(e,arguments)}return this},r.prototype.toggleClass=function(t){for(var e=0;e<this.length;e++)this[e].classList.toggle(t);return this},r.prototype.animateOverTime=function(t,e,n){var o;return function r(i){o||(o=i);var a=i-o,s=Math.min(a/t,1);e(s),a<t?requestAnimationFrame(r):"function"==typeof n&&n()}},r.prototype.fadeIn=function(t){for(var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block",o=arguments.length>2?arguments[2]:void 0,r=function(r){e[r].style.display=n;var i=e.animateOverTime(t,function(t){e[r].style.opacity=t},o);requestAnimationFrame(i)},i=0;i<this.length;i++)r(i);return this},r.prototype.fadeOut=function(t,e){for(var n=this,o=function(o){var r=n.animateOverTime(t,function(t){n[o].style.opacity=1-t,1===t&&(n[o].style.display="none")},e);requestAnimationFrame(r)},r=0;r<this.length;r++)o(r);return this},r.prototype.fadeToggle=function(t,e,n){for(var o=this,r=function(r){if("none"===window.getComputedStyle(o[r]).display){o[r].style.display=e||"block";var i=o.animateOverTime(t,function(t){o[r].style.opacity=t},n);requestAnimationFrame(i)}else{var a=o.animateOverTime(t,function(t){o[r].style.opacity=1-t,1===t&&(o[r].style.display="none")},n);requestAnimationFrame(a)}},i=0;i<this.length;i++)r(i);return this},r.prototype.animationDuration=function(t){for(var e=0;e<this.length;e++)this[e].style.animationDuration=Math.random()+t+"s";return this},r.prototype.animationDelay=function(t){for(var e=0;e<this.length;e++)this[e].style.animationDelay=Math.random()*t+"s";return this},r.prototype.scrollOpenElement=function(){for(var t=0;t<this.length;t++){var e,n={top:window.pageYOffset+this[t].getBoundingClientRect().top,left:window.pageXOffset+this[t].getBoundingClientRect().left,right:window.pageXOffset+this[t].getBoundingClientRect().right,bottom:window.pageYOffset+this[t].getBoundingClientRect().bottom},o={top:window.pageYOffset,left:window.pageXOffset,right:window.pageXOffset+document.documentElement.clientWidth,bottom:window.pageYOffset+document.documentElement.clientHeight};n.bottom>o.top&&n.top+0<o.bottom-screen.height/4&&n.right>o.left&&n.left<o.right&&(e=this[t].classList).add.apply(e,arguments)}return this},Element.prototype.closest||(Element.prototype.closest=function(t){for(var e=this;e;){if(e.matches(t))return e;e=e.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var r=Object.keys(Object(o)),i=0,a=r.length;i<a;i++){var s=r[i],l=Object.getOwnPropertyDescriptor(o,s);void 0!==l&&l.enumerable&&(e[s]=o[s])}}return e}}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);var i,a,s,l=function(t,e,n){"function"!=typeof e?e=e||document:(n=e,e=document);var o=e.querySelectorAll(t);return o=Array.prototype.slice.call(e.querySelectorAll(t)),"function"==typeof n&&o.forEach(function(t,e,o){n(t,e,o)}),o}(".mousemove");"ontouchstart"in window||navigator.maxTouchPoints||(a="mousemove",s=function(t){for(var e=t.clientX-window.innerWidth/2,n=t.clientY-window.innerWidth/2,o=l.length-1;o>=0;o--)l[o].style.transform="translate("+e/l[o].dataset.movespeed/2+"px,"+n/l[o].dataset.movespeed/2+"px) rotate(0.01deg)"},(i=document)&&("addEventListener"in window?i.addEventListener(a,s,!1):"attachEvent"in window&&i.attachEvent("on"+a,s)))}]);