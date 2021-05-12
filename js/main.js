/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/common.js":
/*!**********************!*\
  !*** ./js/common.js ***!
  \**********************/
/***/ (() => {

"use strict";


const ellipseContainer = document.querySelectorAll('.ellipse-container');
const mainWidth = 1300;
ellipseContainer.forEach(containerElem => {
  for (let i = 0; i < 30; i++) {
    let ellipseElem = document.createElement("div");
    ellipseElem.classList.add('ellipse');
    i % 2 === 0 ? ellipseElem.classList.add('ellipse__max') : ellipseElem.classList.add('ellipse__min');

    if (i % 3 === 0) {
      ellipseElem.classList.add('ellipse__max--bg-yellow');
    } else if (i % 4 === 0) {
      ellipseElem.classList.add('ellipse__min--bg-yellow');
    }

    containerElem.append(ellipseElem);
  }

  const ellipse = document.querySelectorAll('.ellipse');
  const elemWidth = mainWidth;
  let elemHeight = containerElem.offsetHeight;
  ellipse.forEach(item => {
    let randomTop = getRandomHeight(0, elemHeight);
    let randomLeft = getRandomWidth(0, elemWidth);
    item.style.top = randomTop + 'px';
    item.style.left = randomLeft + 'px';
  });
});

function getRandomHeight(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomWidth(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./js/common.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wow_js_dist_wow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wow.js/dist/wow.js */ "../node_modules/wow.js/dist/wow.js");
/* harmony import */ var wow_js_dist_wow_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wow_js_dist_wow_js__WEBPACK_IMPORTED_MODULE_3__);






const wow = new (wow_js_dist_wow_js__WEBPACK_IMPORTED_MODULE_3___default())({
  boxClass: 'wow',
  offset: 0,
  mobile: false
});
wow.init();

/***/ }),

/***/ "./img/application-group-1.png":
/*!*************************************!*\
  !*** ./img/application-group-1.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/application-group-1.png");

/***/ }),

/***/ "./img/application-group-2.png":
/*!*************************************!*\
  !*** ./img/application-group-2.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/application-group-2.png");

/***/ }),

/***/ "./img/application-group-3.png":
/*!*************************************!*\
  !*** ./img/application-group-3.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/application-group-3.png");

/***/ }),

/***/ "./img/education.png":
/*!***************************!*\
  !*** ./img/education.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/education.png");

/***/ }),

/***/ "./img/find.png":
/*!**********************!*\
  !*** ./img/find.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/find.png");

/***/ }),

/***/ "./img/icons/monitor.svg":
/*!*******************************!*\
  !*** ./img/icons/monitor.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/monitor.svg");

/***/ }),

/***/ "./img/icons/note.svg":
/*!****************************!*\
  !*** ./img/icons/note.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/note.svg");

/***/ }),

/***/ "./img/icons/rocket.svg":
/*!******************************!*\
  !*** ./img/icons/rocket.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/rocket.svg");

/***/ }),

/***/ "./img/materials-1.png":
/*!*****************************!*\
  !*** ./img/materials-1.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/materials-1.png");

/***/ }),

/***/ "./img/materials-2.png":
/*!*****************************!*\
  !*** ./img/materials-2.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/materials-2.png");

/***/ }),

/***/ "./img/materials-3.png":
/*!*****************************!*\
  !*** ./img/materials-3.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/materials-3.png");

/***/ }),

/***/ "./img/min-icon/min-photo-1.png":
/*!**************************************!*\
  !*** ./img/min-icon/min-photo-1.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/min-photo-1.png");

/***/ }),

/***/ "./img/min-icon/min-photo-2.png":
/*!**************************************!*\
  !*** ./img/min-icon/min-photo-2.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/min-photo-2.png");

/***/ }),

/***/ "./img/min-icon/min-photo-3.png":
/*!**************************************!*\
  !*** ./img/min-icon/min-photo-3.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/min-photo-3.png");

/***/ }),

/***/ "./img/min-icon/min-photo-4.png":
/*!**************************************!*\
  !*** ./img/min-icon/min-photo-4.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/min-photo-4.png");

/***/ }),

/***/ "./img/min-icon/min-photo-5.png":
/*!**************************************!*\
  !*** ./img/min-icon/min-photo-5.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/min-photo-5.png");

/***/ }),

/***/ "./img/my-app.png":
/*!************************!*\
  !*** ./img/my-app.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/my-app.png");

/***/ }),

/***/ "./img/partners-1.png":
/*!****************************!*\
  !*** ./img/partners-1.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/partners-1.png");

/***/ }),

/***/ "./img/partners-2.png":
/*!****************************!*\
  !*** ./img/partners-2.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/partners-2.png");

/***/ }),

/***/ "./img/prof-group-1.png":
/*!******************************!*\
  !*** ./img/prof-group-1.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/prof-group-1.png");

/***/ }),

/***/ "./img/prof-group-2.png":
/*!******************************!*\
  !*** ./img/prof-group-2.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/prof-group-2.png");

/***/ }),

/***/ "./img/prof-group-3.png":
/*!******************************!*\
  !*** ./img/prof-group-3.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/prof-group-3.png");

/***/ }),

/***/ "./img/sublist.png":
/*!*************************!*\
  !*** ./img/sublist.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/sublist.png");

/***/ }),

/***/ "./img/tracking-1.png":
/*!****************************!*\
  !*** ./img/tracking-1.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/tracking-1.png");

/***/ }),

/***/ "./img/tracking-2.png":
/*!****************************!*\
  !*** ./img/tracking-2.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/tracking-2.png");

/***/ }),

/***/ "./img/tracking-3.png":
/*!****************************!*\
  !*** ./img/tracking-3.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/tracking-3.png");

/***/ }),

/***/ "./img/university-listt.png":
/*!**********************************!*\
  !*** ./img/university-listt.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/university-listt.png");

/***/ }),

/***/ "./img/users/user-1.png":
/*!******************************!*\
  !*** ./img/users/user-1.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/user-1.png");

/***/ }),

/***/ "./img/users/user-2.png":
/*!******************************!*\
  !*** ./img/users/user-2.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/user-2.png");

/***/ }),

/***/ "./img/users/user-3.png":
/*!******************************!*\
  !*** ./img/users/user-3.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/user-3.png");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./img/university-listt.png */ "./img/university-listt.png");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./img/sublist.png */ "./img/sublist.png");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ./img/min-icon/min-photo-1.png */ "./img/min-icon/min-photo-1.png");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ./img/min-icon/min-photo-2.png */ "./img/min-icon/min-photo-2.png");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ./img/min-icon/min-photo-3.png */ "./img/min-icon/min-photo-3.png");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ./img/icons/monitor.svg */ "./img/icons/monitor.svg");
var ___HTML_LOADER_IMPORT_6___ = __webpack_require__(/*! ./img/icons/note.svg */ "./img/icons/note.svg");
var ___HTML_LOADER_IMPORT_7___ = __webpack_require__(/*! ./img/users/user-1.png */ "./img/users/user-1.png");
var ___HTML_LOADER_IMPORT_8___ = __webpack_require__(/*! ./img/users/user-3.png */ "./img/users/user-3.png");
var ___HTML_LOADER_IMPORT_9___ = __webpack_require__(/*! ./img/users/user-2.png */ "./img/users/user-2.png");
var ___HTML_LOADER_IMPORT_10___ = __webpack_require__(/*! ./img/min-icon/min-photo-4.png */ "./img/min-icon/min-photo-4.png");
var ___HTML_LOADER_IMPORT_11___ = __webpack_require__(/*! ./img/min-icon/min-photo-5.png */ "./img/min-icon/min-photo-5.png");
var ___HTML_LOADER_IMPORT_12___ = __webpack_require__(/*! ./img/find.png */ "./img/find.png");
var ___HTML_LOADER_IMPORT_13___ = __webpack_require__(/*! ./img/my-app.png */ "./img/my-app.png");
var ___HTML_LOADER_IMPORT_14___ = __webpack_require__(/*! ./img/education.png */ "./img/education.png");
var ___HTML_LOADER_IMPORT_15___ = __webpack_require__(/*! ./img/prof-group-1.png */ "./img/prof-group-1.png");
var ___HTML_LOADER_IMPORT_16___ = __webpack_require__(/*! ./img/prof-group-2.png */ "./img/prof-group-2.png");
var ___HTML_LOADER_IMPORT_17___ = __webpack_require__(/*! ./img/prof-group-3.png */ "./img/prof-group-3.png");
var ___HTML_LOADER_IMPORT_18___ = __webpack_require__(/*! ./img/application-group-1.png */ "./img/application-group-1.png");
var ___HTML_LOADER_IMPORT_19___ = __webpack_require__(/*! ./img/application-group-2.png */ "./img/application-group-2.png");
var ___HTML_LOADER_IMPORT_20___ = __webpack_require__(/*! ./img/application-group-3.png */ "./img/application-group-3.png");
var ___HTML_LOADER_IMPORT_21___ = __webpack_require__(/*! ./img/partners-1.png */ "./img/partners-1.png");
var ___HTML_LOADER_IMPORT_22___ = __webpack_require__(/*! ./img/partners-2.png */ "./img/partners-2.png");
var ___HTML_LOADER_IMPORT_23___ = __webpack_require__(/*! ./img/materials-1.png */ "./img/materials-1.png");
var ___HTML_LOADER_IMPORT_24___ = __webpack_require__(/*! ./img/materials-2.png */ "./img/materials-2.png");
var ___HTML_LOADER_IMPORT_25___ = __webpack_require__(/*! ./img/materials-3.png */ "./img/materials-3.png");
var ___HTML_LOADER_IMPORT_26___ = __webpack_require__(/*! ./img/tracking-1.png */ "./img/tracking-1.png");
var ___HTML_LOADER_IMPORT_27___ = __webpack_require__(/*! ./img/tracking-2.png */ "./img/tracking-2.png");
var ___HTML_LOADER_IMPORT_28___ = __webpack_require__(/*! ./img/tracking-3.png */ "./img/tracking-3.png");
var ___HTML_LOADER_IMPORT_29___ = __webpack_require__(/*! ./img/icons/rocket.svg */ "./img/icons/rocket.svg");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_29___);
var code = "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\"\r\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Document</title>\r\n\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\r\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,900;1,500;1,700&display=swap\" rel=\"stylesheet preload\">\r\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css\">\r\n    <link\r\n      rel=\"stylesheet\"\r\n      href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"\r\n    />\r\n\r\n  </head>\r\n  <body>\r\n    <div class=\"section-top\">\r\n      <section class=\"main-info wrapper ellipse-container\">\r\n        <div class=\"shadow-circle shadow-circle__top-right\"></div>\r\n        <div class=\"shadow-circle shadow-circle__top-left\"></div>\r\n\r\n        <header class=\"header\">\r\n          <h1 class=\"title header__title\">\r\n            Global platform for applying to universities all over the world\r\n          </h1>\r\n\r\n          <article class=\"header__poster\">\r\n            <img\r\n                class=\"header__poster--img\"\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n                loading=\"lazy\"\r\n                alt=\"University list photo\"\r\n            >\r\n            <img\r\n                class=\"header__poster--img-min\"\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n                alt=\"University list photo filled\"\r\n            >\r\n          </article>\r\n        </header>\r\n\r\n        <div class=\"circle-img circle-img__el-1 wow animate__animated animate__bounceIn\" data-wow-delay=\"0.2s\">\r\n          <img class=\"circle-img__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Photo\">\r\n        </div>\r\n        <div class=\"circle-img circle-img__el-2 wow animate__animated animate__bounceIn\" data-wow-delay=\"0.5s\">\r\n          <img class=\"circle-img__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Photo\">\r\n        </div>\r\n        <div class=\"circle-img circle-img__el-3 wow animate__animated animate__bounceIn\" data-wow-delay=\"0.8s\">\r\n          <img class=\"circle-img__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Photo\">\r\n        </div>\r\n\r\n        <article class=\"info wrapper\">\r\n          <div class=\"info__col\">\r\n            <div class=\"icon info__icon wow animate__animated animate__bounceIn\">\r\n              <img class=\"icon--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"About the Project\">\r\n            </div>\r\n\r\n            <h3 class=\"title info__title wow animate__animated animate__fadeInUp\">\r\n              About the Project\r\n            </h3>\r\n\r\n            <p class=\"text info__text wow animate__animated animate__fadeInUp\">\r\n              This platform is a revolutionary web-based platform which allows students\r\n              and student-recruiters to apply to multiple\r\n              universities, colleges, and high schools across numerous countries with just one,\r\n              simple application.\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"info__col\">\r\n            <div class=\"icon info__icon wow animate__animated animate__bounceIn\">\r\n              <img class=\"icon--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Main Tasks\">\r\n            </div>\r\n\r\n            <h3 class=\"title info__title wow animate__animated animate__fadeInUp\">\r\n              Main Tasks\r\n            </h3>\r\n\r\n            <p class=\"text info__text wow animate__animated animate__fadeInUp\">\r\n              For prospective students - to make the process of making applications to\r\n              university as simple and comfortable as possible. For partner agents - to create a\r\n              convenient tool for working with students and universities.\r\n            </p>\r\n          </div>\r\n        </article>\r\n\r\n        <section class=\"users wrapper\">\r\n\r\n          <h2 class=\"box-title users__title\">\r\n            Main Users\r\n          </h2>\r\n\r\n          <p class=\"text users__text\">\r\n            This platform gives separate access for such users\r\n          </p>\r\n\r\n          <div class=\"users__wrap\">\r\n            <div class=\"users__col\">\r\n              <div class=\"users__photo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" loading=\"lazy\" alt=\"Photo\" class=\"users__photo--img\">\r\n              </div>\r\n\r\n              <h4 class=\"title users__col-title\">\r\n                Students\r\n              </h4>\r\n\r\n              <p class=\"text users__text\">\r\n                Prospective students who want to study in foreign universities.\r\n              </p>\r\n            </div>\r\n\r\n            <div class=\"users__col\">\r\n              <div class=\"users__photo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Photo\" class=\"users__photo--img\">\r\n              </div>\r\n\r\n              <h4 class=\"title users__col-title\">\r\n                Partners\r\n              </h4>\r\n\r\n              <p class=\"text users__text\">\r\n                Institutions that are interested in attracting the best students.\r\n              </p>\r\n            </div>\r\n\r\n            <div class=\"users__col\">\r\n              <div class=\"users__photo\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Photo\" class=\"users__photo--img\">\r\n              </div>\r\n\r\n              <h4 class=\"title users__col-title\">\r\n                Agents\r\n              </h4>\r\n\r\n              <p class=\"text users__text\">\r\n                Student recruiters who help manage the admission process.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"circle-img circle-img__el-4 wow animate__animated animate__bounceIn\" data-wow-delay=\"0.2s\">\r\n            <img class=\"circle-img__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Photo\">\r\n          </div>\r\n\r\n          <div class=\"circle-img circle-img__el-5 wow animate__animated animate__bounceIn\" data-wow-delay=\"0.5s\">\r\n            <img class=\"circle-img__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Photo\">\r\n          </div>\r\n        </section>\r\n      </section>\r\n    </div>\r\n\r\n    <div class=\"section-middle\">\r\n      <section class=\"to-students ellipse-container\">\r\n        <article class=\"for-students wrapper\">\r\n          <h2 class=\"title-for\">\r\n            For Students:\r\n          </h2>\r\n\r\n          <h3 class=\"box-title for-students__title\">\r\n            Quickly find a suitable education institution\r\n          </h3>\r\n\r\n          <p class=\"text for-students__text\">\r\n            Convenient search for universities; viewing admission requirements,\r\n            tuition fees, admission campaign deadlines; viewing video presentations of universities,\r\n            available faculties and study campuses.\r\n          </p>\r\n\r\n          <ul class=\"for-students__info\">\r\n            <li class=\"for-students__info-col\">\r\n              <div class=\"for-students__info-wrap\">\r\n                <img class=\"for-students__info--img\" loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"List\">\r\n              </div>\r\n\r\n              <div class=\"for-students__info-wrap for-students__info-wrap--my-app\">\r\n                <img class=\"for-students__info--img\" loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"List\">\r\n              </div>\r\n            </li>\r\n\r\n            <li class=\"for-students__info-col\">\r\n              <div class=\"for-students__info-wrap for-students__info-wrap--education\">\r\n                <img class=\"for-students__info--img\" loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"List\">\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </article>\r\n\r\n        <article class=\"profile wrapper\">\r\n          <h2\r\n            class=\"box-title profile__title wow animate__animated animate__fadeInUp\"\r\n          >\r\n            Fill profile and create Application\r\n          </h2>\r\n\r\n          <p class=\"text profile__text wow animate__animated animate__fadeInUp\" data-wow-delay=\"0.1s\">\r\n            The ability to fill out an application form for admission and send it for consideration;\r\n            the opportunity to use the advice of an admission specialist;\r\n            assistance in preparing a CV and passing an interview at the university.\r\n          </p>\r\n\r\n          <div class=\"profile__info\">\r\n            <div class=\"profile__col profile__col--min profile__col--left\">\r\n              <img class=\"profile__info--img\" loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"List\">\r\n            </div>\r\n\r\n            <div class=\"profile__col profile__col--max\">\r\n              <img class=\"profile__info--img\" loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"List\">\r\n            </div>\r\n\r\n            <div class=\"profile__col profile__col--min profile__col--right\">\r\n              <img class=\"profile__info--img\" loading=\"lazy\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"List\">\r\n            </div>\r\n          </div>\r\n        </article>\r\n\r\n        <article class=\"personal-plane wrapper\">\r\n          <h2 class=\"box-title wow animate__animated animate__fadeInUp\">\r\n            Choose personal plan\r\n          </h2>\r\n\r\n          <p class=\"text personal-plane__text wow animate__animated animate__fadeInUp\" data-wow-delay=\"0.1s\">\r\n            Ability to choose personal plans allows students to submit the\r\n            required number of applications to universities.\r\n          </p>\r\n\r\n          <div class=\"personal-plane__info\">\r\n            <div class=\"personal-plane__col personal-plane__col--min personal-plane__col--left\">\r\n              <img class=\"personal-plane__info--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" loading=\"lazy\" alt=\"List\">\r\n            </div>\r\n\r\n            <div class=\"personal-plane__col personal-plane__col--max\">\r\n              <img class=\"personal-plane__info--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" loading=\"lazy\" alt=\"List\">\r\n            </div>\r\n\r\n            <div class=\"personal-plane__col personal-plane__col--min personal-plane__col--right\">\r\n              <img class=\"personal-plane__info--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" loading=\"lazy\" alt=\"List\">\r\n            </div>\r\n          </div>\r\n        </article>\r\n      </section>\r\n    </div>\r\n\r\n    <div class=\"ellipse-container\">\r\n      <article class=\"for-partners\">\r\n        <div class=\"wrapper\">\r\n          <h2 class=\"title-for\">\r\n            For Agents and Partners:\r\n          </h2>\r\n\r\n          <h3 class=\"box-title for-partners__title\">\r\n            Create Students and Applications\r\n          </h3>\r\n\r\n          <p class=\"text for-partners__text\">\r\n            Filling out student information and creating applications to the desired university.\r\n          </p>\r\n\r\n          <div class=\"for-partners__info\">\r\n            <div class=\"for-partners__info-col for-partners__info-col--max\">\r\n              <img class=\"for-partners__info--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" loading=\"lazy\" alt=\"Img\">\r\n            </div>\r\n\r\n            <div class=\"for-partners__info-col for-partners__info-col--min for-partners__info-col--right\">\r\n              <img class=\"for-partners__info--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" loading=\"lazy\" alt=\"Img\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </article>\r\n\r\n      <article class=\"materials\">\r\n        <div class=\"wrapper\">\r\n          <h2 class=\"box-title wow animate__animated animate__fadeInUp\">\r\n            Training materials and comision rate\r\n          </h2>\r\n\r\n          <p class=\"text materials__text wow animate__animated animate__fadeInUp\">\r\n            Access to a personalized commission rate for each university and platform training materials.\r\n          </p>\r\n\r\n          <div class=\"materials__info\">\r\n            <div class=\"materials__info-col materials__info-col--min materials__info-col--left\">\r\n              <img class=\"materials__info--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" loading=\"lazy\" alt=\"List\">\r\n            </div>\r\n\r\n            <div class=\"materials__info-col materials__info-col--max\">\r\n              <img class=\"materials__info--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" loading=\"lazy\" alt=\"List\">\r\n            </div>\r\n\r\n            <div class=\"materials__info-col materials__info-col--min materials__info-col--right\">\r\n              <img class=\"materials__info--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" loading=\"lazy\" alt=\"List\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </article>\r\n\r\n      <article class=\"application-tracking\">\r\n        <div class=\"application-tracking__wrap\">\r\n          <h2 class=\"box-title wow animate__animated animate__fadeInUp\">\r\n            Applications tracking\r\n          </h2>\r\n\r\n          <p class=\"text services__text wow animate__animated animate__fadeInUp\">\r\n            Each agent can track the application status, update documents, send and receive notifications.\r\n          </p>\r\n\r\n          <div class=\"application-tracking__info\">\r\n            <div class=\"application-tracking__col application-tracking__col--min application-tracking__col--left\">\r\n              <img class=\"application-tracking__info--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" loading=\"lazy\" alt=\"List\">\r\n            </div>\r\n\r\n            <div class=\"application-tracking__col application-tracking__col--max\">\r\n              <img class=\"application-tracking__info--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" loading=\"lazy\" alt=\"List\">\r\n            </div>\r\n\r\n            <div class=\"application-tracking__col application-tracking__col--min application-tracking__col--right\">\r\n              <img class=\"application-tracking__info--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" loading=\"lazy\" alt=\"List\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"shadow-circle shadow-circle__application-tracking-right\"></div>\r\n        </div>\r\n      </article>\r\n\r\n      <article class=\"our-service\">\r\n        <div class=\"wrapper\">\r\n          <h2 class=\"box-title\">\r\n            Our Services\r\n          </h2>\r\n\r\n          <div class=\"our-service__content\">\r\n            <div class=\"our-service__col\">\r\n              <h3 class=\"our-service__col-title\">\r\n                Research\r\n              </h3>\r\n\r\n              <ul class=\"our-service__list\">\r\n                <li class=\"our-service__item\">\r\n                  Requirements Clarification\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Business Analysis\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Competitors Analysis\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Project Estimation\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Team organisation\r\n                </li>\r\n              </ul >\r\n            </div>\r\n\r\n            <div class=\"our-service__col\">\r\n              <h3 class=\"our-service__col-title\">\r\n                UX design\r\n              </h3>\r\n\r\n              <ul class=\"our-service__list\">\r\n                <li class=\"our-service__item\">\r\n                  Data Analysis\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  User Stories\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  User Flows\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Brainstorming\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Sketches & Wireframes\r\n                </li>\r\n              </ul>\r\n            </div>\r\n\r\n            <div class=\"our-service__col\">\r\n              <h3 class=\"our-service__col-title\">\r\n                UI design\r\n              </h3>\r\n\r\n              <ul class=\"our-service__list\">\r\n                <li class=\"our-service__item\">\r\n                  Moodboard\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Logo design\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Logo design\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Concept preparation\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Design system\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Interface design\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Responsive design\r\n                </li>\r\n              </ul>\r\n            </div>\r\n\r\n            <div class=\"our-service__col\">\r\n              <h3 class=\"our-service__col-title\">\r\n                Development\r\n              </h3>\r\n\r\n              <ul class=\"our-service__list\">\r\n                <li class=\"our-service__item\">\r\n                  CMS/Admin System\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  Multiple users entity\r\n                </li>\r\n                <li class=\"our-service__item\">\r\n                  QA\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"shadow-circle shadow-circle__our-service-right\"></div>\r\n      </article>\r\n\r\n      <footer class=\"footer\">\r\n        <div class=\"shadow-circle shadow-circle__footer-left\"></div>\r\n\r\n        <div class=\"wrapper\">\r\n          <div class=\"icon footer__icon wow animate__animated animate__bounceIn\">\r\n            <img class=\"icon--img\" src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" alt=\"Thank you for watching icon\">\r\n          </div>\r\n\r\n          <h3\r\n            class=\"title footer__title wow animate__animated animate__fadeInUp\"\r\n            data-wow-delay=\"0.2s\"\r\n          >\r\n            Thank you for watching!\r\n          </h3>\r\n\r\n          <h2\r\n            class=\"title-for footer__title-wish wow animate__animated animate__fadeInUp\"\r\n            data-wow-delay=\"0.4s\"\r\n          >\r\n            Your Admission. Simplified\r\n          </h2>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_wow_js_dist_wow_js"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map