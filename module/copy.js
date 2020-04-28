"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyText = copyText;
exports.copyElement = copyElement;

var _select = require("./select");

// @ts-check

/**
 * 
 * 
 * @export
 * @param { string } textSelection 
 * @returns { boolean } succeeded
 */
function copyText(textSelection) {
  // validate string
  var element = document.createElement("textarea");
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.innerHTML = textSelection;
  document.body.appendChild(element);
  element.select();
  let succeeded = true; // Copy command execute

  try {
    succeeded = document.execCommand('copy');
  } catch (err) {
    succeeded = false;
  }

  document.body.removeChild(element);
  return succeeded;
}
/**
 *
 *
 * @export
 * @param {HTMLInputElement & HTMLSelectElement & HTMLElement} element
 * @returns
 */


function copyElement(element) {
  let succeeded = true;
  (0, _select.select)(element);

  try {
    succeeded = document.execCommand('copy');
  } catch (err) {
    succeeded = false;
  }

  return succeeded;
}