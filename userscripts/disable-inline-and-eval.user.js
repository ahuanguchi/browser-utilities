// ==UserScript==
// @name         disable-inline-and-eval
// @namespace    https://github.com/ahuanguchi
// @version      0.1
// @description  none
// @author       ahuanguchi
// @match        http*://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

var csp = document.createElement("meta");
csp.setAttribute("http-equiv", "Content-Security-Policy")
csp.setAttribute("content", "script-src *")
document.head.appendChild(csp);
