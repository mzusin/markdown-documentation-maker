/* 
Tool Cool Range Slider Documentation
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
(()=>{var c=()=>{let e=document.getElementById("mobile-menu-btn");if(!e)return;e.addEventListener("click",o=>{o.stopPropagation(),document.body.classList.toggle("mobile-menu-opened")}),document.body.addEventListener("click",()=>{document.body.classList.remove("mobile-menu-opened")});let t=document.getElementById("side-menu");if(!t)return;t.addEventListener("click",o=>{o.stopPropagation()});let n=document.getElementById("mobile-menu-close-btn");!n||n.addEventListener("click",()=>{document.body.classList.remove("mobile-menu-opened")})},i=()=>{let e=document.querySelector(".side-menu");if(!e)return;let t=window.location.pathname,n=e.querySelector(`a[href='${t}']`);!n||n.scrollIntoView({block:"center"})},d=()=>{c(),i()};document.addEventListener("DOMContentLoaded",()=>{d()});})();
//# sourceMappingURL=index.1665545658855.js.map
