// ==UserScript==
// @name         clear-all-timeouts
// @namespace    https://github.com/ahuanguchi
// @version      1.0.0
// @description  Clear all timeouts that have been set. Useful for sites that rely on timeouts to penalize AdBlock users.
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
