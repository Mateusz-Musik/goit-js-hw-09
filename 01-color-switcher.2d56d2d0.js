!function(){var t=document.querySelector("[data-start"),e=document.querySelector("[data-stop]"),a=document.body,n=0;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));a.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.2d56d2d0.js.map
