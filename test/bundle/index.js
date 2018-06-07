/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/copy.js":
/*!*********************!*\
  !*** ./src/copy.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.copyText = copyText;\nexports.copyElement = copyElement;\n\nvar _select = __webpack_require__(/*! ./select */ \"./src/select.js\");\n\n/**\n * \n * \n * @export\n * @param { string } textSelection \n * @returns { boolean } succeeded\n */\nfunction copyText(textSelection) {\n    // validate string\n    var element = document.createElement(\"textarea\");\n    element.style.position = \"absolute\";\n    element.style.left = \"-9999px\";\n    element.innerHTML = textSelection;\n\n    document.body.appendChild(element);\n    element.select();\n    var succeeded = true;\n    // Copy command execute\n    try {\n        succeeded = document.execCommand('copy');\n    } catch (err) {\n        succeeded = false;\n    }\n    document.body.removeChild(element);\n\n    return succeeded;\n}\n\n/**\n *\n *\n * @export\n * @param {HTMLInputElement & HTMLSelectElement & HTMLElement} element\n * @returns\n */\n// @ts-check\n\nfunction copyElement(element) {\n    var succeeded = true;\n    (0, _select.select)(element);\n    try {\n        succeeded = document.execCommand('copy');\n    } catch (err) {\n        succeeded = false;\n    }\n    return succeeded;\n}\n\n//# sourceURL=webpack:///./src/copy.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _copy = __webpack_require__(/*! ./copy */ \"./src/copy.js\");\n\nvar _select = __webpack_require__(/*! ./select */ \"./src/select.js\");\n\nvar copyText = _copy.copyText;\nvar copyElement = _copy.copyElement;\nvar select = _select.select;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/select.js":
/*!***********************!*\
  !*** ./src/select.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.select = select;\n// @ts-check\n/**\n * Select text from given element\n * \n * @export\n * @param {HTMLInputElement & HTMLSelectElement & HTMLElement} element \n * @returns { string } selectedText\n */\nfunction select(element) {\n    var selectedText;\n\n    if (element.nodeName === 'SELECT') {\n        element.focus();\n        selectedText = element.value;\n    } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {\n        var isReadOnly = element.hasAttribute('readonly');\n\n        if (!isReadOnly) {\n            element.setAttribute('readonly', '');\n        }\n\n        element.select();\n        element.setSelectionRange(0, element.value.length);\n\n        if (!isReadOnly) {\n            element.removeAttribute('readonly');\n        }\n\n        selectedText = element.value;\n    } else {\n\n        if (element.hasAttribute('contenteditable')) {\n            element.focus();\n        }\n\n        var selection = window.getSelection();\n        var range = document.createRange();\n\n        range.selectNodeContents(element);\n        selection.removeAllRanges();\n        selection.addRange(range);\n\n        selectedText = selection.toString();\n    }\n\n    return selectedText;\n}\n\n//# sourceURL=webpack:///./src/select.js?");

/***/ })

/******/ });