let t=null;const e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");function o(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`;document.body.style.backgroundColor=t}e.addEventListener("click",(function(){null===t&&(t=setInterval(o,1e3))})),n.addEventListener("click",(function(){clearInterval(t),t=null,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.ef6701fe.js.map