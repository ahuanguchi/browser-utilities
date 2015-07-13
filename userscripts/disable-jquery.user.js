// ==UserScript==
// @name         disable-jquery
// @namespace    https://github.com/ahuanguchi
// @version      0.1
// @description  none
// @author       ahuanguchi
// @match        http*://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.addEventListener("load", function () {
  if (window.hasOwnProperty("$")) {
    window.$ = null;
  }
  if (window.hasOwnProperty("jQuery")) {
    window.jQuery = null;
  }
});
