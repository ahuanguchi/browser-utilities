// ==UserScript==
// @name         clear-all-timeouts
// @namespace    https://github.com/ahuanguchi
// @version      0.1
// @description  none
// @author       ahuanguchi
// @match        http*://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.addEventListener("load", function () {
  var i;
  var latestId = setTimeout(function () {});
  for (i = 0; i < latestId; i += 1) {
    clearTimeout(i);
  }
});
