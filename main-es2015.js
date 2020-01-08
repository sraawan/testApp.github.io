(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-main-menu></app-main-menu>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu/main-menu.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu/main-menu.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-xl fixed-top navbar-custom\">\n  <div class=\"container\">\n      <a class=\"navbar-brand m-auto\" href=\"/\">\n          <img src=\"assets/img/HongLeongLogo.png\" class=\"img-fluid rounded\" style=\"width: 180px;\">\n      </a>\n      <button class=\"navbar-toggler p-0 border-0\" type=\"button\" data-toggle=\"offcanvas\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"navbar-collapse offcanvas-collapse\" id=\"navbarsExampleDefault\">\n          <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                  <a class=\"nav-link scroll\" href=\"#\">Menu item 1 <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link scroll\" href=\"#\">Menu item 2</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/get-loan/get-loan.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/get-loan/get-loan.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background-color: rgba(0, 0, 0, 1);\">\n<div id=\"step-2\">\n    <div class=\"step-2-wrap\">\n        <div class=\"step-2-title text-center f16 px-5 py-3\">\n            After these 3 steps you will have a clearer view of what you need\n        </div>\n\n        <div class=\"step-2-points\">\n            <div class=\"step-2-points-title\">\n                1\n            </div>\n            <div class=\"step-2-points-desc\">\n                <div class=\"font-bold f13\">Short Quiz:</div>\n                <div class=\"font-bold f13\">'How well do you know your financials'</div>\n            </div>\n        </div>\n\n        <div class=\"step-2-points\">\n            <div class=\"step-2-points-title\">\n                2\n            </div>\n            <div class=\"step-2-points-desc\">\n                <div class=\"font-bold f13\">Check your financial health.</div>\n                <div class=\"f11\">A verification via your NRIC is needed for this step</div>\n            </div>\n        </div>\n\n        <div class=\"step-2-points\">\n            <div class=\"step-2-points-title\">\n                3\n            </div>\n            <div class=\"step-2-points-desc\">\n                <div class=\"font-bold f13\">Get your results along with suggestions for your next step</div>\n            </div>\n        </div>\n\n        <div class=\"step-3-btn text-center mt-5\">\n            <a href=\"\" class=\"gardient-btn mt-5\" [routerLink] =\"'/gl1'\">Lets go</a>\n        </div>\n    </div>\n</div>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background-color: rgba(0, 0, 0, 1);\">\n<section>\n    <div class=\"container app_wrap pt-2\">\n        <!-- Heading -->\n        <div class=\"text-center heading-wrap\">\n            <h1 class=\"title-main color-white mx-auto mt-3\">So you want to own a house</h1>\n            <h2 class=\"title-sub mb-4 my-1 my-md-1\">We're here to help</h2>\n        </div>\n\n        <!-- Hero Images -->\n        <div class=\"row mt-1 hero\">\n            <div class=\"col-md-6 col-8 m-auto hero-wrap\">\n                <div class=\"hero-wrap-image justify-content-center align-items-center mb-4\">\n                    <img class=\"img-fluid rounded\" src=\"assets/img/Rectangle.png\" routerLink=\"/getloan\">\n                    <h6 class=\"hero-wrap-image-text col-7 col-md-8\" >I want to get a \n                        loan for my new house</h6>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-8 m-auto hero-wrap\">\n                <div class=\"hero-wrap-image justify-content-center align-items-center mb-3 mb-md-4\">\n                    <img class=\"img-fluid rounded\" src=\"assets/img/Rectangle.png\">\n                    <h6 class=\"hero-wrap-image-text col-9 col-md-7\" >I'm planning/ researching,\n                        I want to know if I'm ready to own a house</h6>\n                </div>\n            </div>\n        </div>\n\n        <!-- Scrollable images section -->\n        <div class=\"row mb-0 mt-2 mt-md-3 horizontal-scroll-bg\">\n            <div class=\"col-12\">\n                <div class=\"horizontal-scroll-title\">DISCOVER</div>\n                <div class=\"horizontal-scroll\">\n                    <div class=\"item\">\n                        <img src=\"assets/img/Rectangle (1).png\" class=\"img-fluid rounded bg-transparent\">\n                        <div class=\"item-text\">Ten things to know for a first time buyer</div>\n                    </div>\n                    <div class=\"item\"><img src=\"assets/img/Rectangle (1).jpg\" class=\"img-fluid rounded\">\n                        <div class=\"item-text\">Ten things to know for a first time buyer</div></div>\n                    <div class=\"item\"><img src=\"assets/img/Rectangle (2).jpg\" class=\"img-fluid rounded\">\n                        <div class=\"item-text\">Ten things to know for a first time buyer</div></div>\n                    <div class=\"item\"><img src=\"assets/img/Rectangle (1).png\" class=\"img-fluid rounded\">\n                        <div class=\"item-text\">Ten things to know for a first time buyer</div></div>\n                    <div class=\"item\"><img src=\"assets/img/Rectangle (1).jpg\" class=\"img-fluid rounded\">\n                        <div class=\"item-text\">Ten things to know for a first time buyer</div></div>\n                    <div class=\"item\"><img src=\"assets/img/Rectangle (2).jpg\" class=\"img-fluid rounded\">\n                        <div class=\"item-text\">Ten things to know for a first time buyer</div></div>\n                    <div class=\"item\"><img src=\"assets/img/Rectangle (1).png\" class=\"img-fluid rounded\">\n                        <div class=\"item-text\">Ten things to know for a first time buyer</div></div>\n                    <div class=\"item\"><img src=\"assets/img/Rectangle (1).jpg\" class=\"img-fluid rounded\">\n                        <div class=\"item-text\">Ten things to know for a first time buyer</div></div>\n                    <div class=\"item\"><img src=\"assets/img/Rectangle (2).jpg\" class=\"img-fluid rounded\">\n                        <div class=\"item-text\">Ten things to know for a first time buyer</div></div>\n                    <div class=\"item\"><img src=\"assets/img/Rectangle (1).png\" class=\"img-fluid rounded\">\n                        <div class=\"item-text\">Ten things to know for a first time buyer</div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/percent-bar/percent-bar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/percent-bar/percent-bar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container top\">\n    <div class=\"row text-center top-row\">\n        <div class =\"col-6 col-md-6 pl-4 pt-4 top-text\">\n            <p>Let's estimate your monthly instalment </p>\n        </div>\n        <div class= \"skills-area col-6 col-md-6 \">\n           <div class=\"single-skill\">\n            <circle-progress\n                      [percent]=\"20\"\n                      [radius]=\"50\"\n                      [outerStrokeWidth]=\"11\"\n                      [innerStrokeWidth]=\"8\"\n                      [outerStrokeColor]=\"'#4e45f7'\"\n                      [innerStrokeColor]=\"'#929292'\"\n                      [animation]=\"true\"\n                      [animationDuration]=\"300\"\n                      [titleColor]=\"'#fefcff'\"\n                      [showSubtitle]=\"false\"\n                      [unitsColor]=\"'#ffffff'\"\n                      \n             ></circle-progress>\n               </div>\n            \n            </div>\n            \n        </div>\n        </div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/phase1/gl1/gl1.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phase1/gl1/gl1.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<body style=\"background-color: rgba(0, 0, 0, 1);\">\n    <app-percent-bar></app-percent-bar>\n  <div class=\"container button-top\">\n    <div class =\"col-12  button-top-text\">\n        <p class=\"button-top-text-font\"> Is this your first house?</p>\n        </div>\n      <div class=\"row option\">\n        <div class =\"col-6 col-md-6 option-btn1 text-center\">\n            <button class=\"btn btn-outline-light\">NO</button>\n            </div>\n              <div class=\"col-6 col-md-6 option-btn2 text-center\">\n                <button class=\"btn btn-outline-light\">YES</button>\n                  </div>\n                 <div class=\"option-text  m-auto text-center pt-4\">\n                     <div class=\"form-group\">\n                         <div class=\"option-lable\">\n                         <div class=\"control-lable option-lable-font\" for=\"name\">\n                              How much is the house?\n                         </div>\n                        </div>\n                         <div class = \"option-input\">\n                         <input class=\"form-control text-center\" id=\"amount\"type=\"number\" placeholder=\"RM\">\n                         \n                         </div>\n                     </div>\n             </div>\n             </div>\n        </div>\n    <div class=\"container mt-4 tip\">\n        <div class =\"col-12 tip-box \">\n            <div class=\"media tip-box-media\">\n                <img class =\"col-2 pt-3 tip-img\" src=\"../../../assets/img/idea.png\">\n                <div class=\"media-body tip-box-body\">\n                    <h5 class=\"mt-0 tip-text pt-2 pb-0\">PRO TIP !</h5>\n                    <p class =\"tip-textsub\">First time home buyers like you can apply for skim Rumah pertamaku,which allows\n                    you to take a loan of up to <span class=\"tip-span\">RM 500,00</span></p>\n                </div>\n            </div>\n        </div>\n    \n    </div>\n    <div class=\"step-3-btn row  m-auto text-center\">\n        <a href=\"\" class=\"btn gardient-btn col-12 col-md-6 mt-4\" [routerLink] =\"'/gl2'\"><span class=\"bthText\">Next</span></a>\n        <a href=\"\" class=\"btn gardient-btn mt-3 col-12 col-md-6\" (click)=\"back()\"><span class=\"bthText\">Back</span></a>\n\n   </div>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/phase1/gl2/gl2.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phase1/gl2/gl2.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background-color: rgba(0, 0, 0, 1);\">\n    <app-percent-bar></app-percent-bar>\n<div class=\"container\">\n     <div class=\"option-text  m-auto text-center pt-1\">\n                 <div class=\"form-group row \">\n                     \n                     <div class=\"control-lable col-12 col-md-12 option-lable-font\" for=\"name\">\n                          How much downpayment will you be making upfront? \n                     </div>\n                    \n                     <div class = \"option-input col-6 col-md-6  m-auto\">\n                     <input class=\"form-control text-center\" id=\"amount\"type=\"number\" placeholder=\"RM\">\n                     \n                     </div>\n                 </div>\n        <div class = \"row range-row\">\n        <div class=\"col-2 range-text text-right\">\n            1 year\n        </div>\n        <div class =\"col-7 range-bar\">\n            <input type=\"range\" class=\"custom-range\" min=\"1\" max=\"30\" id=\"range-main-bar\" value=\"1\">\n        </div>\n        <div class=\"col-2 range-text  text-left\">\n            35 years\n        </div>\n    \n    </div>\n         </div>\n   <div class=\"option-text  m-auto text-center pt-2\">\n                 <div class=\"form-group row \">\n                     \n                     <div class=\"control-lable col-12 col-md-12  option-lable-font\" for=\"name\">\n                         How long will you need to pay off the loan? \n                     </div>\n                    \n                     <div class = \"option-input col-6 col-md-6 m-auto\">\n                     <input class=\"form-control text-center\" id=\"amount\"type=\"number\" placeholder=\"RM\">\n                     \n                     </div>\n                 </div>\n         </div>\n</div>\n<div class=\"container-fluid\">\n    \n       <div class=\"option-text middle-out m-auto text-center\">\n                 <div class=\"form-group row \">\n                     \n                     <div class=\"control-lable col-12 col-md-12 m-auto option-lable-font\" for=\"name\">\n                            Loan Amount\n                     </div>\n                    \n                     <div class = \"option-input col-6 col-md-6 m-auto\">\n                     <input class=\"opt-input text-center\" id=\"amount\"type=\"number\" placeholder=\"RM\">\n                     \n                     </div>\n                 </div>\n           <div class=\"form-group row \">\n                     \n                     <div class=\"control-lable col-12 col-md-12  option-lable-font\" for=\"name\">\n                          Monthly Instalment\n                     </div>\n                    \n                     <div class = \"option-input col-6 col-md-6 m-auto\">\n                     <input class=\"opt-input text-center\" id=\"amount\"type=\"number\" placeholder=\"RM\">\n                     \n                     </div>\n                 </div>\n         </div>\n</div>\n<div class=\"step-3-btn row  m-auto text-center\">\n        <a href=\"\" class=\"btn gardient-btn col-12 col-md-6 mt-4\" [routerLink] =\"'/gl3'\" >Next</a>\n        <a href=\"\" class=\"btn gardient-btn mt-3 col-12 col-md-6\" (click)=\"back()\">Back</a>\n\n   </div>\n    <div></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/phase1/gl3/gl3.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phase1/gl3/gl3.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body style=\"background-color: rgba(0, 0, 0, 1);\">\n<div class =\"container\">\n    <div class=\"row top-title\">\n        <div class =\"col-6 col-md-6 mx-auto top-title-text\">\n            If you have placed a booking fee,snap a picture of your receipt\n        </div>\n        <div class =\"col-6 col-md-6 text-center\">\n            50%\n        </div>\n             \n    </div>\n    <div class=\"row mt-5 m-auto cam\">\n        <div class=\"col-12 col-md-12 text-center\">\n            <img src=\"../../../assets/img/photo-camera.png\" style=\"max-width:20%; color:white ;height: auto\">\n        </div>\n        <div class=\"col-12 col-md-12 text-center\">\n              click here to open camera\n        </div>\n        \n    </div>\n    \n    <div class=\"step-3-btn row button-bottom mx-auto text-center\">\n    <a href=\"\" class=\"btn gardient-btn col-12 col-md-6 text-center \"><span class=\"bthText\">Skip</span></a>\n    <a href=\"\" class=\"btn gardient-btn  col-12 text-center col-md-6\" (click)=\"back()\"><span class=\"bthText\">Back</span></a>\n\n</div>\n    </div>\n</body>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'test-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _main_get_loan_get_loan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/get-loan/get-loan.component */ "./src/app/main/get-loan/get-loan.component.ts");
/* harmony import */ var _app_main_main_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _phase1_gl1_gl1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./phase1/gl1/gl1.component */ "./src/app/phase1/gl1/gl1.component.ts");
/* harmony import */ var _percent_bar_percent_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./percent-bar/percent-bar.component */ "./src/app/percent-bar/percent-bar.component.ts");
/* harmony import */ var _phase1_gl2_gl2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./phase1/gl2/gl2.component */ "./src/app/phase1/gl2/gl2.component.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
/* harmony import */ var _phase1_gl3_gl3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./phase1/gl3/gl3.component */ "./src/app/phase1/gl3/gl3.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
            _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__["MainMenuComponent"],
            _main_get_loan_get_loan_component__WEBPACK_IMPORTED_MODULE_8__["GetLoanComponent"],
            _phase1_gl1_gl1_component__WEBPACK_IMPORTED_MODULE_10__["Gl1Component"],
            _percent_bar_percent_bar_component__WEBPACK_IMPORTED_MODULE_11__["PercentBarComponent"],
            _phase1_gl2_gl2_component__WEBPACK_IMPORTED_MODULE_12__["Gl2Component"],
            _phase1_gl3_gl3_component__WEBPACK_IMPORTED_MODULE_14__["Gl3Component"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_main_main_module__WEBPACK_IMPORTED_MODULE_9__["MainModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_13__["NgCircleProgressModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
                { path: '', redirectTo: 'main', pathMatch: 'full' },
                { path: 'getloan', component: _main_get_loan_get_loan_component__WEBPACK_IMPORTED_MODULE_8__["GetLoanComponent"] },
                { path: 'gl1', component: _phase1_gl1_gl1_component__WEBPACK_IMPORTED_MODULE_10__["Gl1Component"] },
                { path: 'gl2', component: _phase1_gl2_gl2_component__WEBPACK_IMPORTED_MODULE_12__["Gl2Component"] },
                { path: 'gl3', component: _phase1_gl3_gl3_component__WEBPACK_IMPORTED_MODULE_14__["Gl3Component"] }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,\nbody {\n  overflow-x: hidden; /* Prevent scroll on narrow devices */\n  font-family: 'Open Sans', sans-serif !important;\n}\n\n@media (max-width: 575.99px) {\n  .offcanvas-collapse {\n    position: fixed;\n    top: 0; /* Height of navbar */\n    bottom: 0;\n    right: 100%;\n    width: 100%;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    overflow-y: auto;\n    visibility: hidden;\n    background-color: rgba(43, 43, 43, 0.95);\n    transition: transform .3s ease-in-out, visibility .3s ease-in-out;\n  }\n  .offcanvas-collapse.open {\n    visibility: visible;\n    transform: translateX(100%);\n  }\n}\n\n@media (min-width: 576px) and (max-width: 1200px) {\n    .offcanvas-collapse {\n        position: fixed;\n        top: 0; /* Height of navbar */\n        bottom: 0;\n        left: 100%;\n        width: 100%;\n        padding-right: 1rem;\n        padding-left: 1rem;\n        overflow-y: auto;\n        visibility: hidden;\n        background-color: rgba(43, 43, 43, 0.95);\n        transition: transform .3s ease-in-out, visibility .3s ease-in-out;\n      }\n      .offcanvas-collapse.open {\n        visibility: visible;\n        transform: translateX(-50%);\n      }\n}\n\n.nav-scroller {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller .nav {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  color: rgba(255, 255, 255, .75);\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n\n.nav-underline .nav-link {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 18px;\n  color: #6c757d;\n}\n\n.nav-underline .nav-link:hover {\n  color: #007bff;\n}\n\n.nav-underline .active {\n  font-weight: 500;\n  color: #343a40;\n}\n\n.text-white-50 { color: rgba(255, 255, 255, .5); }\n\n.bg-purple { background-color: #6f42c1; }\n\n.lh-100 { line-height: 1; }\n\n.lh-125 { line-height: 1.25; }\n\n.lh-150 { line-height: 1.5; }\n\n.navbar-toggler-icon{\n    background-color: transparent;\n}\n\n.navbar-toggler{\n  position: absolute !important;\n}\n\n@media (max-width: 1199.99px){\n  .navbar-collapse.offcanvas-collapse .navbar-nav{\n    padding-top: 60px;\n  }\n}\n\nbody{\n  font-family: 'Dax OT';\n  padding-top: 65px;\n}\n\n.navbar-toggler-icon:focus{\n  outline: none !important;\n}\n\n.navbar-toggler:focus{\n  outline: none !important;\n}\n\n.app_wrap{\n  /* height: calc(100vh - 70px); */\n  top: -20px;\n  position: relative;\n}\n\n@media (max-width: 767px){\n  .heading-wrap h1{\n    font-size: 20px !important;\n  }\n  .heading-wrap h2{\n    font-size: 18px !important;\n  }\n}\n\n.heading-wrap{\n  position: relative;\n}\n\n.heading-wrap h1{\n  font-size: 40px;\n}\n\n.title-main{\n  height: auto;\n  width: 302px;\n  font-size: 60px;\n  color: rgba(255,255,255,0.9);\n  font-family: \"Dax OT\";\n  font-weight: 500;\n  line-height: 35px;\n  \n}\n\n.title-sub{\n    font-size: 24px;\n    color: #bdbdbd;\n}\n\n.hero-wrap{\n    margin-top: -30px;\n}\n\n.hero{\n  position: relative;\n}\n\n.hero-wrap-image {\n  position: relative;\n  display: flex;\n  align-content: center;\n  align-items: center;\n}\n\n.hero-wrap-image-text {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 3px 5px 5px#000;\n  font-family: 'Roboto';\n  font-weight: 500;\n  line-height: 22px;\n  text-align: center;\n  /* font-size: 13px; */\n}\n\n.hero-wrap-image .wrap-img2{\n    max-width:60%;\n    height: auto;\n    border-radius: 40px;\n}\n\n.horizontal-scroll-bg{\n  background-color: #202020;\n  position: relative;\n}\n\n@media (min-height: 800px){\n  .horizontal-scroll-bg{\n    background-color: #202020;\n    position: relative;\n  }\n}\n\n.horizontal-scroll-title {\n  color: rgba(255,255,255,0.9);\n  height: 25px;\n  width: 90px;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing:2px;\n  font-family: \"Dax OT\";\n  line-height: 25px;\n  padding: 5px 0px;\n}\n\n.horizontal-scroll {\n  overflow: hidden;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  margin-top: 0px;\n  padding: 3px 0px 3px;\n}\n\n.item {\n  display: inline-block;\n  text-align: center;\n  padding: 0px;\n  margin: 0 20px 0 0;\n  max-width: 140px;\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n}\n\n.item-text{\n  font-size: 10px;\n  color: #fff;\n  white-space: pre-wrap;\n  padding-top: 10px;\n  text-align: left;\n\n}\n\n@media (max-height: 700px){\n  .item {\n    margin: 0 10px 0 0;\n    max-width: 100px;\n  }\n}\n\n.horizontal-scroll::-webkit-scrollbar {\n  width: 0 !important;\n    \n}\n\n.navbar-custom {\n  background-color: #202426;\n}\n\n@media (min-width: 1440px) {\n  .navbar-custom {\n    height: 60px;\n  }\n}\n\n.navbar-custom .navbar-nav .nav-item .nav-link {\n  font-size: 17px;\n  font-family: 'Open Sans', sans-serif !important;\n  color: #fff;\n}\n\n@media (max-width: 991px) {\n  .navbar-custom .navbar-nav .nav-item .nav-link {\n    font-size: 14px;\n  }\n}\n\n@media (min-width: 1200px) and (max-width: 1400px) {\n  .navbar-custom .navbar-nav .nav-item .nav-link {\n    font-size: 14px;\n  }\n}\n\n.scrolled {\n  transition: 0.3s;\n}\n\n.navbar-custom.navbar-expand-xl .navbar-nav .nav-item {\n  margin: 0 10px;\n}\n\n.navbar-toggler {\n  z-index: 999999;\n  position: relative;\n  padding-left: 1.25em;\n}\n\n.navbar-toggler.navbar-toggler:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0.25em;\n  width: 30px;\n  height: 2px;\n  background: #fff;\n  box-shadow: 0 10px 0 0 #fff, 0 20px 0 0 #fff;\n}\n\n.navbar-toggler.newopen:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0.25em;\n  width: 30px;\n  height: 2px;\n  background: #fff;\n  transform: rotate(45deg);\n  transform-origin: 0% 0%;\n  box-shadow: 0 10px 0 0 transparent, 0 -20px 0px 0px transparent;\n}\n\n.navbar-toggler.newopen:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0.25em;\n  width: 30px;\n  height: 2px;\n  background: transparent;\n  transform: rotate(-45deg);\n  transform-origin: 75% 0%;\n  box-shadow: -9px -2px 0px 0 #fff, 0 20px 0 0 transparent;\n}\n\n@media (max-width: 380px) {\n  .navbar-brand {\n    width: 240px;\n  }\n}\n\n@media (max-width: 1199.99px) {\n  .navbar-collapse.offcanvas-collapse ul li {\n    margin: 10px 20px !important;\n  }\n}\n\n.color-white{\n  color: #fff;\n}\n\n/* Font size */\n\n.f1 {\n  font-size: 1px; }\n\n.f2 {\n  font-size: 2px; }\n\n.f3 {\n  font-size: 3px; }\n\n.f4 {\n  font-size: 4px; }\n\n.f5 {\n  font-size: 5px; }\n\n.f6 {\n  font-size: 6px; }\n\n.f7 {\n  font-size: 7px; }\n\n.f8 {\n  font-size: 8px; }\n\n.f9 {\n  font-size: 9px; }\n\n.f10 {\n  font-size: 10px; }\n\n.f11 {\n  font-size: 11px; }\n\n.f12 {\n  font-size: 12px; }\n\n.f13 {\n  font-size: 13px; }\n\n.f14 {\n  font-size: 14px; }\n\n.f15 {\n  font-size: 15px; }\n\n.f16 {\n  font-size: 16px; }\n\n.f17 {\n  font-size: 17px; }\n\n.f18 {\n  font-size: 18px; }\n\n.f19 {\n  font-size: 19px; }\n\n.f20 {\n  font-size: 20px; }\n\n.f21 {\n  font-size: 21px; }\n\n.f22 {\n  font-size: 22px; }\n\n.f23 {\n  font-size: 23px; }\n\n.f24 {\n  font-size: 24px; }\n\n.f25 {\n  font-size: 25px; }\n\n.f26 {\n  font-size: 26px; }\n\n.f27 {\n  font-size: 27px; }\n\n.f28 {\n  font-size: 28px; }\n\n.f29 {\n  font-size: 29px; }\n\n.f30 {\n  font-size: 30px; }\n\n.f31 {\n  font-size: 31px; }\n\n.f32 {\n  font-size: 32px; }\n\n.f33 {\n  font-size: 33px; }\n\n.f34 {\n  font-size: 34px; }\n\n.f35 {\n  font-size: 35px; }\n\n.f36 {\n  font-size: 36px; }\n\n.f37 {\n  font-size: 37px; }\n\n.f38 {\n  font-size: 38px; }\n\n.f39 {\n  font-size: 39px; }\n\n.f40 {\n  font-size: 40px; }\n\n.f41 {\n  font-size: 41px; }\n\n.f42 {\n  font-size: 42px; }\n\n.f43 {\n  font-size: 43px; }\n\n.f44 {\n  font-size: 44px; }\n\n.f45 {\n  font-size: 45px; }\n\n.f46 {\n  font-size: 46px; }\n\n.f47 {\n  font-size: 47px; }\n\n.f48 {\n  font-size: 48px; }\n\n.f49 {\n  font-size: 49px; }\n\n.f50 {\n  font-size: 50px; }\n\n.f51 {\n  font-size: 51px; }\n\n.f52 {\n  font-size: 52px; }\n\n.f53 {\n  font-size: 53px; }\n\n.f54 {\n  font-size: 54px; }\n\n.f55 {\n  font-size: 55px; }\n\n.f56 {\n  font-size: 56px; }\n\n.f57 {\n  font-size: 57px; }\n\n.f58 {\n  font-size: 58px; }\n\n.f59 {\n  font-size: 59px; }\n\n.f60 {\n  font-size: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL29mZmNhbnZhcy5jc3MiLCJzcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFrQixFQUFFLHFDQUFxQztFQUN6RCwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixNQUFNLEVBQUUscUJBQXFCO0lBQzdCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFFeEMsaUVBQWlFO0VBRW5FO0VBQ0E7SUFDRSxtQkFBbUI7SUFFbkIsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixNQUFNLEVBQUUscUJBQXFCO1FBQzdCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQix3Q0FBd0M7UUFFeEMsaUVBQWlFO01BRW5FO01BQ0E7UUFDRSxtQkFBbUI7UUFFbkIsMkJBQTJCO01BQzdCO0FBQ047O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFFRSxhQUFhO0VBRWIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCLDhCQUE4QixFQUFFOztBQUVqRCxhQUFhLHlCQUF5QixFQUFFOztB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QjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbmJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIFByZXZlbnQgc2Nyb2xsIG9uIG5hcnJvdyBkZXZpY2VzICovXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk5cHgpIHtcbiAgLm9mZmNhbnZhcy1jb2xsYXBzZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDsgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDAuOTUpO1xuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgLjNzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAuM3MgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICAub2ZmY2FudmFzLWNvbGxhcHNlLm9wZW4ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5vZmZjYW52YXMtY29sbGFwc2Uge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDsgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgNDMsIDQzLCAwLjk1KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAuM3MgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgLjNzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG4gICAgICAub2ZmY2FudmFzLWNvbGxhcHNlLm9wZW4ge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxufVxuXG4ubmF2LXNjcm9sbGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IDIuNzVyZW07XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLm5hdi1zY3JvbGxlciAubmF2IHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuLm5hdi11bmRlcmxpbmUgLm5hdi1saW5rIHtcbiAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuLm5hdi11bmRlcmxpbmUgLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5uYXYtdW5kZXJsaW5lIC5hY3RpdmUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzM0M2E0MDtcbn1cblxuLnRleHQtd2hpdGUtNTAgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7IH1cblxuLmJnLXB1cnBsZSB7IGJhY2tncm91bmQtY29sb3I6ICM2ZjQyYzE7IH1cblxuLmxoLTEwMCB7IGxpbmUtaGVpZ2h0OiAxOyB9XG4ubGgtMTI1IHsgbGluZS1oZWlnaHQ6IDEuMjU7IH1cbi5saC0xNTAgeyBsaW5lLWhlaWdodDogMS41OyB9XG5cbi5uYXZiYXItdG9nZ2xlci1pY29ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmF2YmFyLXRvZ2dsZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OXB4KXtcbiAgLm5hdmJhci1jb2xsYXBzZS5vZmZjYW52YXMtY29sbGFwc2UgLm5hdmJhci1uYXZ7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gIH1cbn1cbiIsImJvZHl7XG4gIGZvbnQtZmFtaWx5OiAnRGF4IE9UJztcbiAgcGFkZGluZy10b3A6IDY1cHg7XG59XG5cbi5uYXZiYXItdG9nZ2xlci1pY29uOmZvY3Vze1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLXRvZ2dsZXI6Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmFwcF93cmFwe1xuICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTsgKi9cbiAgdG9wOiAtMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcbiAgLmhlYWRpbmctd3JhcCBoMXtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuaGVhZGluZy13cmFwIGgye1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICB9XG59XG4uaGVhZGluZy13cmFwe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGluZy13cmFwIGgxe1xuICBmb250LXNpemU6IDQwcHg7XG59XG4udGl0bGUtbWFpbntcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMzAycHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcbiAgZm9udC1mYW1pbHk6IFwiRGF4IE9UXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBcbn1cbi50aXRsZS1zdWJ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjYmRiZGJkO1xufVxuLmhlcm8td3JhcHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cbi5oZXJve1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVyby13cmFwLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZXJvLXdyYXAtaW1hZ2UtdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAzcHggNXB4IDVweCMwMDA7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogZm9udC1zaXplOiAxM3B4OyAqL1xufVxuXG4uaGVyby13cmFwLWltYWdlIC53cmFwLWltZzJ7XG4gICAgbWF4LXdpZHRoOjYwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuLmhvcml6b250YWwtc2Nyb2xsLWJne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogODAwcHgpe1xuICAuaG9yaXpvbnRhbC1zY3JvbGwtYmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbi5ob3Jpem9udGFsLXNjcm9sbC10aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6MnB4O1xuICBmb250LWZhbWlseTogXCJEYXggT1RcIjtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59XG4uaG9yaXpvbnRhbC1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiAzcHggMHB4IDNweDtcbn1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xufVxuXG4uaXRlbS10ZXh0e1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNzAwcHgpe1xuICAuaXRlbSB7XG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gIH1cbn1cblxuLmhvcml6b250YWwtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgXG59XG5cbi5uYXZiYXItY3VzdG9tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjQyNjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAubmF2YmFyLWN1c3RvbSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG59XG5cbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uYXZiYXItY3VzdG9tIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5uYXZiYXItY3VzdG9tIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4uc2Nyb2xsZWQge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ubmF2YmFyLWN1c3RvbS5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxLjI1ZW07XG59XG5cbi5uYXZiYXItdG9nZ2xlci5uYXZiYXItdG9nZ2xlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMC4yNWVtO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAwIDAgI2ZmZiwgMCAyMHB4IDAgMCAjZmZmO1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIubmV3b3BlbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwLjI1ZW07XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDAgMCB0cmFuc3BhcmVudCwgMCAtMjBweCAwcHggMHB4IHRyYW5zcGFyZW50O1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIubmV3b3BlbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMC4yNWVtO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA3NSUgMCU7XG4gIGJveC1zaGFkb3c6IC05cHggLTJweCAwcHggMCAjZmZmLCAwIDIwcHggMCAwIHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLm5hdmJhci1icmFuZCB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk5cHgpIHtcbiAgLm5hdmJhci1jb2xsYXBzZS5vZmZjYW52YXMtY29sbGFwc2UgdWwgbGkge1xuICAgIG1hcmdpbjogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmNvbG9yLXdoaXRle1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogRm9udCBzaXplICovXG4uZjEge1xuICBmb250LXNpemU6IDFweDsgfVxuXG4uZjIge1xuICBmb250LXNpemU6IDJweDsgfVxuXG4uZjMge1xuICBmb250LXNpemU6IDNweDsgfVxuXG4uZjQge1xuICBmb250LXNpemU6IDRweDsgfVxuXG4uZjUge1xuICBmb250LXNpemU6IDVweDsgfVxuXG4uZjYge1xuICBmb250LXNpemU6IDZweDsgfVxuXG4uZjcge1xuICBmb250LXNpemU6IDdweDsgfVxuXG4uZjgge1xuICBmb250LXNpemU6IDhweDsgfVxuXG4uZjkge1xuICBmb250LXNpemU6IDlweDsgfVxuXG4uZjEwIHtcbiAgZm9udC1zaXplOiAxMHB4OyB9XG5cbi5mMTEge1xuICBmb250LXNpemU6IDExcHg7IH1cblxuLmYxMiB7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4uZjEzIHtcbiAgZm9udC1zaXplOiAxM3B4OyB9XG5cbi5mMTQge1xuICBmb250LXNpemU6IDE0cHg7IH1cblxuLmYxNSB7XG4gIGZvbnQtc2l6ZTogMTVweDsgfVxuXG4uZjE2IHtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG5cbi5mMTcge1xuICBmb250LXNpemU6IDE3cHg7IH1cblxuLmYxOCB7XG4gIGZvbnQtc2l6ZTogMThweDsgfVxuXG4uZjE5IHtcbiAgZm9udC1zaXplOiAxOXB4OyB9XG5cbi5mMjAge1xuICBmb250LXNpemU6IDIwcHg7IH1cblxuLmYyMSB7XG4gIGZvbnQtc2l6ZTogMjFweDsgfVxuXG4uZjIyIHtcbiAgZm9udC1zaXplOiAyMnB4OyB9XG5cbi5mMjMge1xuICBmb250LXNpemU6IDIzcHg7IH1cblxuLmYyNCB7XG4gIGZvbnQtc2l6ZTogMjRweDsgfVxuXG4uZjI1IHtcbiAgZm9udC1zaXplOiAyNXB4OyB9XG5cbi5mMjYge1xuICBmb250LXNpemU6IDI2cHg7IH1cblxuLmYyNyB7XG4gIGZvbnQtc2l6ZTogMjdweDsgfVxuXG4uZjI4IHtcbiAgZm9udC1zaXplOiAyOHB4OyB9XG5cbi5mMjkge1xuICBmb250LXNpemU6IDI5cHg7IH1cblxuLmYzMCB7XG4gIGZvbnQtc2l6ZTogMzBweDsgfVxuXG4uZjMxIHtcbiAgZm9udC1zaXplOiAzMXB4OyB9XG5cbi5mMzIge1xuICBmb250LXNpemU6IDMycHg7IH1cblxuLmYzMyB7XG4gIGZvbnQtc2l6ZTogMzNweDsgfVxuXG4uZjM0IHtcbiAgZm9udC1zaXplOiAzNHB4OyB9XG5cbi5mMzUge1xuICBmb250LXNpemU6IDM1cHg7IH1cblxuLmYzNiB7XG4gIGZvbnQtc2l6ZTogMzZweDsgfVxuXG4uZjM3IHtcbiAgZm9udC1zaXplOiAzN3B4OyB9XG5cbi5mMzgge1xuICBmb250LXNpemU6IDM4cHg7IH1cblxuLmYzOSB7XG4gIGZvbnQtc2l6ZTogMzlweDsgfVxuXG4uZjQwIHtcbiAgZm9udC1zaXplOiA0MHB4OyB9XG5cbi5mNDEge1xuICBmb250LXNpemU6IDQxcHg7IH1cblxuLmY0MiB7XG4gIGZvbnQtc2l6ZTogNDJweDsgfVxuXG4uZjQzIHtcbiAgZm9udC1zaXplOiA0M3B4OyB9XG5cbi5mNDQge1xuICBmb250LXNpemU6IDQ0cHg7IH1cblxuLmY0NSB7XG4gIGZvbnQtc2l6ZTogNDVweDsgfVxuXG4uZjQ2IHtcbiAgZm9udC1zaXplOiA0NnB4OyB9XG5cbi5mNDcge1xuICBmb250LXNpemU6IDQ3cHg7IH1cblxuLmY0OCB7XG4gIGZvbnQtc2l6ZTogNDhweDsgfVxuXG4uZjQ5IHtcbiAgZm9udC1zaXplOiA0OXB4OyB9XG5cbi5mNTAge1xuICBmb250LXNpemU6IDUwcHg7IH1cblxuLmY1MSB7XG4gIGZvbnQtc2l6ZTogNTFweDsgfVxuXG4uZjUyIHtcbiAgZm9udC1zaXplOiA1MnB4OyB9XG5cbi5mNTMge1xuICBmb250LXNpemU6IDUzcHg7IH1cblxuLmY1NCB7XG4gIGZvbnQtc2l6ZTogNTRweDsgfVxuXG4uZjU1IHtcbiAgZm9udC1zaXplOiA1NXB4OyB9XG5cbi5mNTYge1xuICBmb250LXNpemU6IDU2cHg7IH1cblxuLmY1NyB7XG4gIGZvbnQtc2l6ZTogNTdweDsgfVxuXG4uZjU4IHtcbiAgZm9udC1zaXplOiA1OHB4OyB9XG5cbi5mNTkge1xuICBmb250LXNpemU6IDU5cHg7IH1cblxuLmY2MCB7XG4gIGZvbnQtc2l6ZTogNjBweDsgfSJdfQ== */");

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let MainMenuComponent = class MainMenuComponent {
    constructor() { }
    ngOnInit() {
        // navbar
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            // Off Canvas
            'use strict';
            jquery__WEBPACK_IMPORTED_MODULE_2__('[data-toggle="offcanvas"]').on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.offcanvas-collapse').toggleClass('open');
            });
            // Off Canvas End
            // Onscroll header color
            var header = jquery__WEBPACK_IMPORTED_MODULE_2__(".navbar");
            jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(function () {
                var scroll = jquery__WEBPACK_IMPORTED_MODULE_2__(window).scrollTop();
                if (scroll >= 50) {
                    header.addClass("scrolled");
                }
                else {
                    header.removeClass("scrolled");
                }
            });
            // Onscroll header color End
            // navbar
            jquery__WEBPACK_IMPORTED_MODULE_2__(".navbar-toggler").on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).toggleClass("newopen");
            });
            // Smooth scrolling
            var scrollLink = jquery__WEBPACK_IMPORTED_MODULE_2__('.scroll');
            let $target = jquery__WEBPACK_IMPORTED_MODULE_2__(this.hash);
            scrollLink.click(function (e) {
                e.preventDefault();
                jquery__WEBPACK_IMPORTED_MODULE_2__('body,html').animate({
                    scrollTop: $target.offset().top
                }, 1000);
            });
            // Active link switching
            jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(function () {
                var scrollbarLocation = jquery__WEBPACK_IMPORTED_MODULE_2__(this).scrollTop();
                scrollLink.each(function () {
                    var sectionOffset = $target.offset().top - 20;
                    if (sectionOffset <= scrollbarLocation) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(this).parent().addClass('active');
                        jquery__WEBPACK_IMPORTED_MODULE_2__(this).parent().siblings().removeClass('active');
                    }
                });
            });
        });
    }
};
MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu/main-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")).default]
    })
], MainMenuComponent);



/***/ }),

/***/ "./src/app/main/get-loan/get-loan.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/get-loan/get-loan.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* STEP-2 */\nbody{\n    padding-top: 90px;\n}\n#step-2{\n    height: calc(100vh - 70px);\n    background-image: url('doorlock.png');\n    background-position: left;\n    background-repeat: no-repeat;\n    background-size: contain;\n    \n    \n  }\n.step-2-wrap{\n    max-width: 400px;\n    margin: 0 auto;\n    padding-top:-90px;\n  }\n.step-2-title{\n    color: #fff;\n  }\n.step-2-points{\n    color: #fff;\n    padding-left: 140px;\n    display: table;\n    padding-top: 20px;\n  }\n.step-2-points-title{\n    display: table-cell;\n    font-size: 40px;\n    vertical-align: middle;\n    padding-right: 10px;\n  }\n.step-2-points-desc{\n    display: table-cell;\n    padding-right: 20px;\n  }\n.font-bold{\n    font-weight: 700;\n  }\n.step-3-btn{\n    position: absolute;\n    bottom: 8%;\n    width: 100%;\n  }\n.gardient-btn{\n    background-image: linear-gradient(270deg, #B406DA 0%, #A431D6 25%, #5347C8 65%, #2347C1 100%);\n    border-radius: 30px;\n    text-align: center;\n    display: inline-block;\n    padding: 10px 90px;\n    color: #fff;\n    text-decoration: none;\n    \n  }\n.gardient-btn:hover{\n    background-image: linear-gradient(270deg, #B406DA 0%, #A431D6 25%, #5347C8 65%, #2347C1 100%);\n    color: #fff;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9nZXQtbG9hbi9nZXQtbG9hbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWDtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHFDQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHdCQUF3Qjs7O0VBRzFCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsV0FBVztFQUNiO0FBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUVBO0lBQ0UsNkZBQTZGO0lBQzdGLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCOztFQUV2QjtBQUVBO0lBQ0UsNkZBQTZGO0lBQzdGLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL21haW4vZ2V0LWxvYW4vZ2V0LWxvYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNURVAtMiAqL1xuYm9keXtcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcbn1cblxuI3N0ZXAtMntcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2Rvb3Jsb2NrLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIFxuICAgIFxuICB9XG4gIC5zdGVwLTItd3JhcHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOi05MHB4O1xuICB9XG5cbiAgLnN0ZXAtMi10aXRsZXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5zdGVwLTItcG9pbnRze1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmctbGVmdDogMTQwcHg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cblxuICAuc3RlcC0yLXBvaW50cy10aXRsZXtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnN0ZXAtMi1wb2ludHMtZGVzY3tcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cblxuICAuZm9udC1ib2xke1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICAuc3RlcC0zLWJ0bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA4JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5nYXJkaWVudC1idG57XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0I0MDZEQSAwJSwgI0E0MzFENiAyNSUsICM1MzQ3QzggNjUlLCAjMjM0N0MxIDEwMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDkwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIFxuICB9XG5cbiAgLmdhcmRpZW50LWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjQjQwNkRBIDAlLCAjQTQzMUQ2IDI1JSwgIzUzNDdDOCA2NSUsICMyMzQ3QzEgMTAwJSk7XG4gICAgY29sb3I6ICNmZmY7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/main/get-loan/get-loan.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/get-loan/get-loan.component.ts ***!
  \*****************************************************/
/*! exports provided: GetLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLoanComponent", function() { return GetLoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GetLoanComponent = class GetLoanComponent {
    constructor() { }
    ngOnInit() {
    }
};
GetLoanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-loan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-loan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/get-loan/get-loan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-loan.component.css */ "./src/app/main/get-loan/get-loan.component.css")).default]
    })
], GetLoanComponent);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,\nbody {\n  overflow-x: hidden; /* Prevent scroll on narrow devices */\n  font-family: 'Open Sans', sans-serif !important;\n}\n\n@media (max-width: 575.99px) {\n  .offcanvas-collapse {\n    position: fixed;\n    top: 0; /* Height of navbar */\n    bottom: 0;\n    right: 100%;\n    width: 100%;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    overflow-y: auto;\n    visibility: hidden;\n    background-color: rgba(43, 43, 43, 0.95);\n    transition: transform .3s ease-in-out, visibility .3s ease-in-out;\n  }\n  .offcanvas-collapse.open {\n    visibility: visible;\n    transform: translateX(100%);\n  }\n}\n\n@media (min-width: 576px) and (max-width: 1200px) {\n    .offcanvas-collapse {\n        position: fixed;\n        top: 0; /* Height of navbar */\n        bottom: 0;\n        left: 100%;\n        width: 100%;\n        padding-right: 1rem;\n        padding-left: 1rem;\n        overflow-y: auto;\n        visibility: hidden;\n        background-color: rgba(43, 43, 43, 0.95);\n        transition: transform .3s ease-in-out, visibility .3s ease-in-out;\n      }\n      .offcanvas-collapse.open {\n        visibility: visible;\n        transform: translateX(-50%);\n      }\n}\n\n.nav-scroller {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller .nav {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  color: rgba(255, 255, 255, .75);\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n\n.nav-underline .nav-link {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 18px;\n  color: #6c757d;\n}\n\n.nav-underline .nav-link:hover {\n  color: #007bff;\n}\n\n.nav-underline .active {\n  font-weight: 500;\n  color: #343a40;\n}\n\n.text-white-50 { color: rgba(255, 255, 255, .5); }\n\n.bg-purple { background-color: #6f42c1; }\n\n.lh-100 { line-height: 1; }\n\n.lh-125 { line-height: 1.25; }\n\n.lh-150 { line-height: 1.5; }\n\n.navbar-toggler-icon{\n    background-color: transparent;\n}\n\n.navbar-toggler{\n  position: absolute !important;\n}\n\n@media (max-width: 1199.99px){\n  .navbar-collapse.offcanvas-collapse .navbar-nav{\n    padding-top: 60px;\n  }\n}\n\nbody{\n  font-family: 'Dax OT';\n  padding-top: 65px;\n}\n\n.navbar-toggler-icon:focus{\n  outline: none !important;\n}\n\n.navbar-toggler:focus{\n  outline: none !important;\n}\n\n.app_wrap{\n  /* height: calc(100vh - 70px); */\n  top: -20px;\n  position: relative;\n}\n\n@media (max-width: 767px){\n  .heading-wrap h1{\n    font-size: 20px !important;\n  }\n  .heading-wrap h2{\n    font-size: 18px !important;\n  }\n}\n\n.heading-wrap{\n  position: relative;\n}\n\n.heading-wrap h1{\n  font-size: 40px;\n}\n\n.title-main{\n  height: auto;\n  width: 302px;\n  font-size: 60px;\n  color: rgba(255,255,255,0.9);\n  font-family: \"Dax OT\";\n  font-weight: 500;\n  line-height: 35px;\n  \n}\n\n.title-sub{\n    font-size: 24px;\n    color: #bdbdbd;\n}\n\n.hero-wrap{\n    margin-top: -30px;\n}\n\n.hero{\n  position: relative;\n}\n\n.hero-wrap-image {\n  position: relative;\n  display: flex;\n  align-content: center;\n  align-items: center;\n}\n\n.hero-wrap-image-text {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 3px 5px 5px#000;\n  font-family: 'Roboto';\n  font-weight: 500;\n  line-height: 22px;\n  text-align: center;\n  /* font-size: 13px; */\n}\n\n.hero-wrap-image .wrap-img2{\n    max-width:60%;\n    height: auto;\n    border-radius: 40px;\n}\n\n.horizontal-scroll-bg{\n  background-color: #202020;\n  position: relative;\n}\n\n@media (min-height: 800px){\n  .horizontal-scroll-bg{\n    background-color: #202020;\n    position: relative;\n  }\n}\n\n.horizontal-scroll-title {\n  color: rgba(255,255,255,0.9);\n  height: 25px;\n  width: 90px;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing:2px;\n  font-family: \"Dax OT\";\n  line-height: 25px;\n  padding: 5px 0px;\n}\n\n.horizontal-scroll {\n  overflow: hidden;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  margin-top: 0px;\n  padding: 3px 0px 3px;\n}\n\n.item {\n  display: inline-block;\n  text-align: center;\n  padding: 0px;\n  margin: 0 20px 0 0;\n  max-width: 140px;\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n}\n\n.item-text{\n  font-size: 10px;\n  color: #fff;\n  white-space: pre-wrap;\n  padding-top: 10px;\n  text-align: left;\n\n}\n\n@media (max-height: 700px){\n  .item {\n    margin: 0 10px 0 0;\n    max-width: 100px;\n  }\n}\n\n.horizontal-scroll::-webkit-scrollbar {\n  width: 0 !important;\n    \n}\n\n.navbar-custom {\n  background-color: #202426;\n}\n\n@media (min-width: 1440px) {\n  .navbar-custom {\n    height: 60px;\n  }\n}\n\n.navbar-custom .navbar-nav .nav-item .nav-link {\n  font-size: 17px;\n  font-family: 'Open Sans', sans-serif !important;\n  color: #fff;\n}\n\n@media (max-width: 991px) {\n  .navbar-custom .navbar-nav .nav-item .nav-link {\n    font-size: 14px;\n  }\n}\n\n@media (min-width: 1200px) and (max-width: 1400px) {\n  .navbar-custom .navbar-nav .nav-item .nav-link {\n    font-size: 14px;\n  }\n}\n\n.scrolled {\n  transition: 0.3s;\n}\n\n.navbar-custom.navbar-expand-xl .navbar-nav .nav-item {\n  margin: 0 10px;\n}\n\n.navbar-toggler {\n  z-index: 999999;\n  position: relative;\n  padding-left: 1.25em;\n}\n\n.navbar-toggler.navbar-toggler:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0.25em;\n  width: 30px;\n  height: 2px;\n  background: #fff;\n  box-shadow: 0 10px 0 0 #fff, 0 20px 0 0 #fff;\n}\n\n.navbar-toggler.newopen:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0.25em;\n  width: 30px;\n  height: 2px;\n  background: #fff;\n  transform: rotate(45deg);\n  transform-origin: 0% 0%;\n  box-shadow: 0 10px 0 0 transparent, 0 -20px 0px 0px transparent;\n}\n\n.navbar-toggler.newopen:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0.25em;\n  width: 30px;\n  height: 2px;\n  background: transparent;\n  transform: rotate(-45deg);\n  transform-origin: 75% 0%;\n  box-shadow: -9px -2px 0px 0 #fff, 0 20px 0 0 transparent;\n}\n\n@media (max-width: 380px) {\n  .navbar-brand {\n    width: 240px;\n  }\n}\n\n@media (max-width: 1199.99px) {\n  .navbar-collapse.offcanvas-collapse ul li {\n    margin: 10px 20px !important;\n  }\n}\n\n.color-white{\n  color: #fff;\n}\n\n/* Font size */\n\n.f1 {\n  font-size: 1px; }\n\n.f2 {\n  font-size: 2px; }\n\n.f3 {\n  font-size: 3px; }\n\n.f4 {\n  font-size: 4px; }\n\n.f5 {\n  font-size: 5px; }\n\n.f6 {\n  font-size: 6px; }\n\n.f7 {\n  font-size: 7px; }\n\n.f8 {\n  font-size: 8px; }\n\n.f9 {\n  font-size: 9px; }\n\n.f10 {\n  font-size: 10px; }\n\n.f11 {\n  font-size: 11px; }\n\n.f12 {\n  font-size: 12px; }\n\n.f13 {\n  font-size: 13px; }\n\n.f14 {\n  font-size: 14px; }\n\n.f15 {\n  font-size: 15px; }\n\n.f16 {\n  font-size: 16px; }\n\n.f17 {\n  font-size: 17px; }\n\n.f18 {\n  font-size: 18px; }\n\n.f19 {\n  font-size: 19px; }\n\n.f20 {\n  font-size: 20px; }\n\n.f21 {\n  font-size: 21px; }\n\n.f22 {\n  font-size: 22px; }\n\n.f23 {\n  font-size: 23px; }\n\n.f24 {\n  font-size: 24px; }\n\n.f25 {\n  font-size: 25px; }\n\n.f26 {\n  font-size: 26px; }\n\n.f27 {\n  font-size: 27px; }\n\n.f28 {\n  font-size: 28px; }\n\n.f29 {\n  font-size: 29px; }\n\n.f30 {\n  font-size: 30px; }\n\n.f31 {\n  font-size: 31px; }\n\n.f32 {\n  font-size: 32px; }\n\n.f33 {\n  font-size: 33px; }\n\n.f34 {\n  font-size: 34px; }\n\n.f35 {\n  font-size: 35px; }\n\n.f36 {\n  font-size: 36px; }\n\n.f37 {\n  font-size: 37px; }\n\n.f38 {\n  font-size: 38px; }\n\n.f39 {\n  font-size: 39px; }\n\n.f40 {\n  font-size: 40px; }\n\n.f41 {\n  font-size: 41px; }\n\n.f42 {\n  font-size: 42px; }\n\n.f43 {\n  font-size: 43px; }\n\n.f44 {\n  font-size: 44px; }\n\n.f45 {\n  font-size: 45px; }\n\n.f46 {\n  font-size: 46px; }\n\n.f47 {\n  font-size: 47px; }\n\n.f48 {\n  font-size: 48px; }\n\n.f49 {\n  font-size: 49px; }\n\n.f50 {\n  font-size: 50px; }\n\n.f51 {\n  font-size: 51px; }\n\n.f52 {\n  font-size: 52px; }\n\n.f53 {\n  font-size: 53px; }\n\n.f54 {\n  font-size: 54px; }\n\n.f55 {\n  font-size: 55px; }\n\n.f56 {\n  font-size: 56px; }\n\n.f57 {\n  font-size: 57px; }\n\n.f58 {\n  font-size: 58px; }\n\n.f59 {\n  font-size: 59px; }\n\n.f60 {\n  font-size: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL29mZmNhbnZhcy5jc3MiLCJzcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFrQixFQUFFLHFDQUFxQztFQUN6RCwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixNQUFNLEVBQUUscUJBQXFCO0lBQzdCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFFeEMsaUVBQWlFO0VBRW5FO0VBQ0E7SUFDRSxtQkFBbUI7SUFFbkIsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixNQUFNLEVBQUUscUJBQXFCO1FBQzdCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQix3Q0FBd0M7UUFFeEMsaUVBQWlFO01BRW5FO01BQ0E7UUFDRSxtQkFBbUI7UUFFbkIsMkJBQTJCO01BQzdCO0FBQ047O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFFRSxhQUFhO0VBRWIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCLDhCQUE4QixFQUFFOztBQUVqRCxhQUFhLHlCQUF5QixFQUFFOztB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QjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0UsZUFBZSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogUHJldmVudCBzY3JvbGwgb24gbmFycm93IGRldmljZXMgKi9cbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOTlweCkge1xuICAub2ZmY2FudmFzLWNvbGxhcHNlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDQzLCA0MywgMC45NSk7XG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAuM3MgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5vZmZjYW52YXMtY29sbGFwc2Uub3BlbiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLm9mZmNhbnZhcy1jb2xsYXBzZSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDAuOTUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAuM3MgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcbiAgICAgIH1cbiAgICAgIC5vZmZjYW52YXMtY29sbGFwc2Uub3BlbiB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB9XG59XG5cbi5uYXYtc2Nyb2xsZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMi43NXJlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubmF2LXNjcm9sbGVyIC5uYXYge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4ubmF2LXVuZGVybGluZSAubmF2LWxpbmsge1xuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4ubmF2LXVuZGVybGluZSAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLm5hdi11bmRlcmxpbmUgLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuXG4udGV4dC13aGl0ZS01MCB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTsgfVxuXG4uYmctcHVycGxlIHsgYmFja2dyb3VuZC1jb2xvcjogIzZmNDJjMTsgfVxuXG4ubGgtMTAwIHsgbGluZS1oZWlnaHQ6IDE7IH1cbi5saC0xMjUgeyBsaW5lLWhlaWdodDogMS4yNTsgfVxuLmxoLTE1MCB7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cblxuLm5hdmJhci10b2dnbGVyLWljb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5uYXZiYXItdG9nZ2xlcntcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk5cHgpe1xuICAubmF2YmFyLWNvbGxhcHNlLm9mZmNhbnZhcy1jb2xsYXBzZSAubmF2YmFyLW5hdntcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgfVxufVxuIiwiYm9keXtcbiAgZm9udC1mYW1pbHk6ICdEYXggT1QnO1xuICBwYWRkaW5nLXRvcDogNjVweDtcbn1cblxuLm5hdmJhci10b2dnbGVyLWljb246Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5uYXZiYXItdG9nZ2xlcjpmb2N1c3tcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYXBwX3dyYXB7XG4gIC8qIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpOyAqL1xuICB0b3A6IC0yMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xuICAuaGVhZGluZy13cmFwIGgxe1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5oZWFkaW5nLXdyYXAgaDJ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5oZWFkaW5nLXdyYXB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkaW5nLXdyYXAgaDF7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi50aXRsZS1tYWlue1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzMDJweDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xuICBmb250LWZhbWlseTogXCJEYXggT1RcIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIFxufVxuLnRpdGxlLXN1YntcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG59XG4uaGVyby13cmFwe1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuLmhlcm97XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZXJvLXdyYXAtaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlcm8td3JhcC1pbWFnZS10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDNweCA1cHggNXB4IzAwMDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBmb250LXNpemU6IDEzcHg7ICovXG59XG5cbi5oZXJvLXdyYXAtaW1hZ2UgLndyYXAtaW1nMntcbiAgICBtYXgtd2lkdGg6NjAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG4uaG9yaXpvbnRhbC1zY3JvbGwtYmd7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MDBweCl7XG4gIC5ob3Jpem9udGFsLXNjcm9sbC1iZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuLmhvcml6b250YWwtc2Nyb2xsLXRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzoycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRheCBPVFwiO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cbi5ob3Jpem9udGFsLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDNweCAwcHggM3B4O1xufVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgbWF4LXdpZHRoOiAxNDBweDtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG59XG5cbi5pdGVtLXRleHR7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiA3MDBweCl7XG4gIC5pdGVtIHtcbiAgICBtYXJnaW46IDAgMTBweCAwIDA7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgfVxufVxuXG4uaG9yaXpvbnRhbC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICBcbn1cblxuLm5hdmJhci1jdXN0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyNDI2O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIC5uYXZiYXItY3VzdG9tIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbn1cblxuLm5hdmJhci1jdXN0b20gLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm5hdmJhci1jdXN0b20gLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgLm5hdmJhci1jdXN0b20gLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi5zY3JvbGxlZCB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5uYXZiYXItY3VzdG9tLm5hdmJhci1leHBhbmQteGwgLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDEuMjVlbTtcbn1cblxuLm5hdmJhci10b2dnbGVyLm5hdmJhci10b2dnbGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwLjI1ZW07XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDAgMCAjZmZmLCAwIDIwcHggMCAwICNmZmY7XG59XG5cbi5uYXZiYXItdG9nZ2xlci5uZXdvcGVuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDAuMjVlbTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xuICBib3gtc2hhZG93OiAwIDEwcHggMCAwIHRyYW5zcGFyZW50LCAwIC0yMHB4IDBweCAwcHggdHJhbnNwYXJlbnQ7XG59XG5cbi5uYXZiYXItdG9nZ2xlci5uZXdvcGVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwLjI1ZW07XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDc1JSAwJTtcbiAgYm94LXNoYWRvdzogLTlweCAtMnB4IDBweCAwICNmZmYsIDAgMjBweCAwIDAgdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xuICAubmF2YmFyLWJyYW5kIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOTlweCkge1xuICAubmF2YmFyLWNvbGxhcHNlLm9mZmNhbnZhcy1jb2xsYXBzZSB1bCBsaSB7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY29sb3Itd2hpdGV7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBGb250IHNpemUgKi9cbi5mMSB7XG4gIGZvbnQtc2l6ZTogMXB4OyB9XG5cbi5mMiB7XG4gIGZvbnQtc2l6ZTogMnB4OyB9XG5cbi5mMyB7XG4gIGZvbnQtc2l6ZTogM3B4OyB9XG5cbi5mNCB7XG4gIGZvbnQtc2l6ZTogNHB4OyB9XG5cbi5mNSB7XG4gIGZvbnQtc2l6ZTogNXB4OyB9XG5cbi5mNiB7XG4gIGZvbnQtc2l6ZTogNnB4OyB9XG5cbi5mNyB7XG4gIGZvbnQtc2l6ZTogN3B4OyB9XG5cbi5mOCB7XG4gIGZvbnQtc2l6ZTogOHB4OyB9XG5cbi5mOSB7XG4gIGZvbnQtc2l6ZTogOXB4OyB9XG5cbi5mMTAge1xuICBmb250LXNpemU6IDEwcHg7IH1cblxuLmYxMSB7XG4gIGZvbnQtc2l6ZTogMTFweDsgfVxuXG4uZjEyIHtcbiAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5mMTMge1xuICBmb250LXNpemU6IDEzcHg7IH1cblxuLmYxNCB7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4uZjE1IHtcbiAgZm9udC1zaXplOiAxNXB4OyB9XG5cbi5mMTYge1xuICBmb250LXNpemU6IDE2cHg7IH1cblxuLmYxNyB7XG4gIGZvbnQtc2l6ZTogMTdweDsgfVxuXG4uZjE4IHtcbiAgZm9udC1zaXplOiAxOHB4OyB9XG5cbi5mMTkge1xuICBmb250LXNpemU6IDE5cHg7IH1cblxuLmYyMCB7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuXG4uZjIxIHtcbiAgZm9udC1zaXplOiAyMXB4OyB9XG5cbi5mMjIge1xuICBmb250LXNpemU6IDIycHg7IH1cblxuLmYyMyB7XG4gIGZvbnQtc2l6ZTogMjNweDsgfVxuXG4uZjI0IHtcbiAgZm9udC1zaXplOiAyNHB4OyB9XG5cbi5mMjUge1xuICBmb250LXNpemU6IDI1cHg7IH1cblxuLmYyNiB7XG4gIGZvbnQtc2l6ZTogMjZweDsgfVxuXG4uZjI3IHtcbiAgZm9udC1zaXplOiAyN3B4OyB9XG5cbi5mMjgge1xuICBmb250LXNpemU6IDI4cHg7IH1cblxuLmYyOSB7XG4gIGZvbnQtc2l6ZTogMjlweDsgfVxuXG4uZjMwIHtcbiAgZm9udC1zaXplOiAzMHB4OyB9XG5cbi5mMzEge1xuICBmb250LXNpemU6IDMxcHg7IH1cblxuLmYzMiB7XG4gIGZvbnQtc2l6ZTogMzJweDsgfVxuXG4uZjMzIHtcbiAgZm9udC1zaXplOiAzM3B4OyB9XG5cbi5mMzQge1xuICBmb250LXNpemU6IDM0cHg7IH1cblxuLmYzNSB7XG4gIGZvbnQtc2l6ZTogMzVweDsgfVxuXG4uZjM2IHtcbiAgZm9udC1zaXplOiAzNnB4OyB9XG5cbi5mMzcge1xuICBmb250LXNpemU6IDM3cHg7IH1cblxuLmYzOCB7XG4gIGZvbnQtc2l6ZTogMzhweDsgfVxuXG4uZjM5IHtcbiAgZm9udC1zaXplOiAzOXB4OyB9XG5cbi5mNDAge1xuICBmb250LXNpemU6IDQwcHg7IH1cblxuLmY0MSB7XG4gIGZvbnQtc2l6ZTogNDFweDsgfVxuXG4uZjQyIHtcbiAgZm9udC1zaXplOiA0MnB4OyB9XG5cbi5mNDMge1xuICBmb250LXNpemU6IDQzcHg7IH1cblxuLmY0NCB7XG4gIGZvbnQtc2l6ZTogNDRweDsgfVxuXG4uZjQ1IHtcbiAgZm9udC1zaXplOiA0NXB4OyB9XG5cbi5mNDYge1xuICBmb250LXNpemU6IDQ2cHg7IH1cblxuLmY0NyB7XG4gIGZvbnQtc2l6ZTogNDdweDsgfVxuXG4uZjQ4IHtcbiAgZm9udC1zaXplOiA0OHB4OyB9XG5cbi5mNDkge1xuICBmb250LXNpemU6IDQ5cHg7IH1cblxuLmY1MCB7XG4gIGZvbnQtc2l6ZTogNTBweDsgfVxuXG4uZjUxIHtcbiAgZm9udC1zaXplOiA1MXB4OyB9XG5cbi5mNTIge1xuICBmb250LXNpemU6IDUycHg7IH1cblxuLmY1MyB7XG4gIGZvbnQtc2l6ZTogNTNweDsgfVxuXG4uZjU0IHtcbiAgZm9udC1zaXplOiA1NHB4OyB9XG5cbi5mNTUge1xuICBmb250LXNpemU6IDU1cHg7IH1cblxuLmY1NiB7XG4gIGZvbnQtc2l6ZTogNTZweDsgfVxuXG4uZjU3IHtcbiAgZm9udC1zaXplOiA1N3B4OyB9XG5cbi5mNTgge1xuICBmb250LXNpemU6IDU4cHg7IH1cblxuLmY1OSB7XG4gIGZvbnQtc2l6ZTogNTlweDsgfVxuXG4uZjYwIHtcbiAgZm9udC1zaXplOiA2MHB4OyB9Il19 */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//import * as $ from 'jquery';
let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let MainModule = class MainModule {
};
MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ]
    })
], MainModule);



/***/ }),

/***/ "./src/app/percent-bar/percent-bar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/percent-bar/percent-bar.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-text{\n  height: 93px;\n  width: 195px;\n  opacity: 0.98;\n  color: white;\n  font-family: \"Dax OT\";\n  font-size: 19px;\n  font-weight: 500;\n  line-height: 31px;\n  \n}\n\n.single-skill{\n  \n  padding-left:50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyY2VudC1iYXIvcGVyY2VudC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7O0FBRW5COztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BlcmNlbnQtYmFyL3BlcmNlbnQtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXRleHR7XG4gIGhlaWdodDogOTNweDtcbiAgd2lkdGg6IDE5NXB4O1xuICBvcGFjaXR5OiAwLjk4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkRheCBPVFwiO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBcbn1cblxuLnNpbmdsZS1za2lsbHtcbiAgXG4gIHBhZGRpbmctbGVmdDo1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/percent-bar/percent-bar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/percent-bar/percent-bar.component.ts ***!
  \******************************************************/
/*! exports provided: PercentBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentBarComponent", function() { return PercentBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PercentBarComponent = class PercentBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
PercentBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-percent-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./percent-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/percent-bar/percent-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./percent-bar.component.css */ "./src/app/percent-bar/percent-bar.component.css")).default]
    })
], PercentBarComponent);



/***/ }),

/***/ "./src/app/phase1/gl1/gl1.component.css":
/*!**********************************************!*\
  !*** ./src/app/phase1/gl1/gl1.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\n    padding-top: 65px;\n}\n.button-top-text{\n    padding:-80px;\n  }\n.button-top-text-font{\n    height: 23px;\n    width: 100%;\n    color:white;\n    font-family: \"Dax OT\";\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 23px;\n    text-align: center;\n}\n.option-btn2{\n    padding-right: 100px;\n}\n.option-btn1{\n    padding-left: 100px;\n}\n.option-lable-font{\n  height: 23px;\n  max-width: 100%;\n  color: #FFF;\n  font-family: \"Dax OT\";\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 23px;\n  padding-bottom: 50px;\n}\n.tip{\n    margin-top: -50px;\n}\n.tip-box{\n  position: relative;\n  background: linear-gradient(270deg, #B406DA 0%, #A431D6 25%, #5347C8 65%, #2347C1 100%);\n  border-radius: 10px;\n  padding:5px;\n  }\n.tip-box-media{\n  background: #222;\n  color: white;\n  padding: .1rem;\n  border-radius: 10px;\n  \n}\n.tip-img{\n    padding-left: 1rem;\n    background-image: url(\"/src/assets/img/idea.png\");\n    \n    \n}\n.tip-text{\n    font-size: 1.1em;\n    padding-left:25px;\n}\n.tip-textsub{\n    font-size: 0.8rem;\n    padding-left:25px;\n    font-style: italic;\n}\n.tip-span{\n  color:#b30000;\n}\n#amount{\n    box-sizing: border-box;\n    background-color:black;\n    color: white;\n    border-radius: 10px;\n    border: 2px solid #938F8F;\n    height: 50px;\n    width: 245.5px;\n}\n.bthText{\n    color: #fff;\n}\n.gardient-btn{\n  height: 44.5px;\n  width: 292.21px;\n  border-radius: 30px;\n  text-align: center;\n  display: inline-block;\n  font-family: \"Dax OT\";\n  background: linear-gradient(281deg, rgba(255,255,255,1) 0%, rgba(30,36,43,1) 100%,10%);\n}\n.gardient-btn:hover{\n    background-image: linear-gradient(270deg, #B406DA 0%, #A431D6 25%, #5347C8 65%, #2347C1 100%);\n    border-radius: 30px;\n    text-align: center;\n    display: inline-block;\n    padding: 10px 50px;\n    color: #fff;\n    text-decoration: none;\n    font-family: \"Dax OT\";\n}\n.step-3-btn{\n    max-width: 50%;\n    height: auto;\n    \n  }\n.btn-outline-light{\n      padding:15px 20px;\n      font-family: \"Dax OT\";\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 19px;\n      text-align: center;\n      height:50px;\n      width:110px;\n      border-radius: 10px;\n      box-shadow: 0 0 10px 0 #FFF;\n      \n  }\n.btn-outline-light:hover{\n     background-color: #4E45F7;\n     color: white;\n    \n     \n  }\n  \n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhhc2UxL2dsMS9nbDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtFQUNmO0FBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUZBQXVGO0VBQ3ZGLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1g7QUFFRjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjs7QUFFckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpREFBaUQ7OztBQUdyRDtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixzRkFBc0Y7QUFDeEY7QUFFQTtJQUNJLDZGQUE2RjtJQUM3RixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZOztFQUVkO0FBRUE7TUFDSSxpQkFBaUI7TUFDakIscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUNYLG1CQUFtQjtNQUNuQiwyQkFBMkI7O0VBRS9CO0FBQ0E7S0FDRyx5QkFBeUI7S0FDekIsWUFBWTs7O0VBR2YiLCJmaWxlIjoic3JjL2FwcC9waGFzZTEvZ2wxL2dsMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBwYWRkaW5nLXRvcDogNjVweDtcbn1cbi5idXR0b24tdG9wLXRleHR7XG4gICAgcGFkZGluZzotODBweDtcbiAgfVxuICAuYnV0dG9uLXRvcC10ZXh0LWZvbnR7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBcIkRheCBPVFwiO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vcHRpb24tYnRuMntcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbn1cbi5vcHRpb24tYnRuMXtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xufVxuLm9wdGlvbi1sYWJsZS1mb250e1xuICBoZWlnaHQ6IDIzcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIkRheCBPVFwiO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLnRpcHtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cbi50aXAtYm94e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNCNDA2REEgMCUsICNBNDMxRDYgMjUlLCAjNTM0N0M4IDY1JSwgIzIzNDdDMSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzo1cHg7XG4gIH1cblxuLnRpcC1ib3gtbWVkaWF7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogLjFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIFxufVxuLnRpcC1pbWd7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zcmMvYXNzZXRzL2ltZy9pZGVhLnBuZ1wiKTtcbiAgICBcbiAgICBcbn1cblxuLnRpcC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgcGFkZGluZy1sZWZ0OjI1cHg7XG59XG4udGlwLXRleHRzdWJ7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgcGFkZGluZy1sZWZ0OjI1cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLnRpcC1zcGFue1xuICBjb2xvcjojYjMwMDAwO1xufVxuI2Ftb3VudHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzkzOEY4RjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDI0NS41cHg7XG59XG4uYnRoVGV4dHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmdhcmRpZW50LWJ0bntcbiAgaGVpZ2h0OiA0NC41cHg7XG4gIHdpZHRoOiAyOTIuMjFweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIkRheCBPVFwiO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjgxZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDMwLDM2LDQzLDEpIDEwMCUsMTAlKTtcbn1cblxuLmdhcmRpZW50LWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjQjQwNkRBIDAlLCAjQTQzMUQ2IDI1JSwgIzUzNDdDOCA2NSUsICMyMzQ3QzEgMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiRGF4IE9UXCI7XG59XG4uc3RlcC0zLWJ0bntcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgXG4gIH1cbiAgXG4gIC5idG4tb3V0bGluZS1saWdodHtcbiAgICAgIHBhZGRpbmc6MTVweCAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiRGF4IE9UXCI7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6NTBweDtcbiAgICAgIHdpZHRoOjExMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgI0ZGRjtcbiAgICAgIFxuICB9XG4gIC5idG4tb3V0bGluZS1saWdodDpob3ZlcntcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRFNDVGNztcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICAgICBcbiAgfVxuICBcblxuIl19 */");

/***/ }),

/***/ "./src/app/phase1/gl1/gl1.component.ts":
/*!*********************************************!*\
  !*** ./src/app/phase1/gl1/gl1.component.ts ***!
  \*********************************************/
/*! exports provided: Gl1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gl1Component", function() { return Gl1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let Gl1Component = class Gl1Component {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
        //window.history.back()
    }
};
Gl1Component.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
Gl1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gl1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gl1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/phase1/gl1/gl1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gl1.component.css */ "./src/app/phase1/gl1/gl1.component.css")).default]
    })
], Gl1Component);



/***/ }),

/***/ "./src/app/phase1/gl2/gl2.component.css":
/*!**********************************************!*\
  !*** ./src/app/phase1/gl2/gl2.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\n    padding-top: 60px;\n    max-width: 100%;\n    height:auto;\n    \n}\n.option-lable-font{\n    height: 46px;\n    width: 257px;\n    color: #FFF;\n    font-family: \"Dax OT\";\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 23px;\n    text-align: center;\n  }\n.middle-out{\n    background-color: rgba(80,78,100,0.48);\n    padding-bottom:5px;\n}\n.form-control{\n    box-sizing: border-box;\n    height: 50px;\n    border-radius: 10px;\n    border: 2px solid #938F8F;\n    box-shadow: 0 0 10px 0 #FFF;\n    background-color: black;\n  }\n.range-text{\n    height: 16px;\n    width: 33px;\n    color: #FFF;\n    font-family: \"Noto Sans\";\n    font-size: 12px;\n    font-style: italic;\n    line-height: 16px;\n    text-align: center;\n  }\n.gardient-btn{\n    height: 44.5px;\n    width: 292.21px;\n    border-radius: 30px;\n    color: #fff;\n    background: linear-gradient(281deg, rgba(255,255,255,1) 0%, rgba(30,36,43,1) 100%);\n    -webkit-filter: brightness(60%);\n            filter: brightness(60%);\n  \n  }\n.gardient-btn:hover{\n      background-image: linear-gradient(270deg, #B406DA 0%, #A431D6 25%, #5347C8 65%, #2347C1 100%);\n      border-radius: 30px;\n      text-align: center;\n      display: inline-block;\n      padding: 10px 50px;\n      color: #fff;\n      text-decoration: none;\n      font-family: \"Dax OT\";\n      -webkit-filter: brightness(160%);\n              filter: brightness(160%);\n      \n  }\n.step-3-btn{\n    max-width: 50%;\n    height: auto;\n    \n  }\n/* slider range */\n.custom-range::-webkit-slider-thumb{\n    -webkit-appearance: none;\n    background: white;\n    box-shadow: 0px 0px 0px #000000;\n    border: 1px solid black;\n}\n.custom-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 5px;\n  cursor: pointer;\n  \n  box-shadow: 0px 0px 0px #000000;\n  background: gray;\n  border-radius: 5px;\n  border: 0px solid #000000;\n}\n.opt-input{\n  box-sizing: border-box;\n  height: 50px;\n  width: 244px;\n  border-radius: 5px;\n  border: 3px solid #4E45F7;\n  background-color: black;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhhc2UxL2dsMi9nbDIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usc0NBQXNDO0lBQ3RDLGtCQUFrQjtBQUN0QjtBQUVFO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQix1QkFBdUI7RUFDekI7QUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFHQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrRkFBa0Y7SUFDbEYsK0JBQXVCO1lBQXZCLHVCQUF1Qjs7RUFFekI7QUFFQTtNQUNJLDZGQUE2RjtNQUM3RixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIsZ0NBQXdCO2NBQXhCLHdCQUF3Qjs7RUFFNUI7QUFFRjtJQUNJLGNBQWM7SUFDZCxZQUFZOztFQUVkO0FBQ0YsaUJBQWlCO0FBQ2pCO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7O0VBRWYsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL3BoYXNlMS9nbDIvZ2wyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBcbn1cbi5vcHRpb24tbGFibGUtZm9udHtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgd2lkdGg6IDI1N3B4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtZmFtaWx5OiBcIkRheCBPVFwiO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5taWRkbGUtb3V0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsNzgsMTAwLDAuNDgpO1xuICAgIHBhZGRpbmctYm90dG9tOjVweDtcbn1cbiAgXG4gIC5mb3JtLWNvbnRyb2x7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTM4RjhGO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgI0ZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuICAucmFuZ2UtdGV4dHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG4gIC5nYXJkaWVudC1idG57XG4gICAgaGVpZ2h0OiA0NC41cHg7XG4gICAgd2lkdGg6IDI5Mi4yMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI4MWRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgzMCwzNiw0MywxKSAxMDAlKTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKTtcbiAgXG4gIH1cbiAgXG4gIC5nYXJkaWVudC1idG46aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjQjQwNkRBIDAlLCAjQTQzMUQ2IDI1JSwgIzUzNDdDOCA2NSUsICMyMzQ3QzEgMTAwJSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMTBweCA1MHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogXCJEYXggT1RcIjtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxNjAlKTtcbiAgICAgIFxuICB9XG5cbi5zdGVwLTMtYnRue1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBcbiAgfVxuLyogc2xpZGVyIHJhbmdlICovXG4uY3VzdG9tLXJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYntcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5jdXN0b20tcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMHB4IHNvbGlkICMwMDAwMDA7XG59XG5cbi5vcHQtaW5wdXR7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDI0NHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM0RTQ1Rjc7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/phase1/gl2/gl2.component.ts":
/*!*********************************************!*\
  !*** ./src/app/phase1/gl2/gl2.component.ts ***!
  \*********************************************/
/*! exports provided: Gl2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gl2Component", function() { return Gl2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let Gl2Component = class Gl2Component {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
        //window.history.back()
    }
};
Gl2Component.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
Gl2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gl2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gl2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/phase1/gl2/gl2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gl2.component.css */ "./src/app/phase1/gl2/gl2.component.css")).default]
    })
], Gl2Component);



/***/ }),

/***/ "./src/app/phase1/gl3/gl3.component.css":
/*!**********************************************!*\
  !*** ./src/app/phase1/gl3/gl3.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\n    padding-top: 100px;\n    max-width: 100%;\n    height:auto;\n    font-family:\"Dax OT\" ;\n    color: #fff;\n    \n}\n.top-title-text{\n  height: 93px;\n  width: 255px;\n  opacity: 0.98;\n  color: #FFF;\n  font-family: \"Dax OT\";\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 31px;\n    \n}\n.top-title{\n    margin-bottom: 80px;\n}\n.cam{\n    border: 2px solid white;\n    padding: 50px 10px;\n    border-radius: 20px;\n    width: 300px;\n}\n.button-bottom{\n    margin-top: 150px;\n}\n.tip-button{\n  height: 44.5px;\n  width: 292.21px;\n  border-radius: 10px;\n  background: linear-gradient(281.69deg, #FFF 0%, #1E242B 100%);\n    \n}\n.step-3-btn{\n    max-width: 50%;\n    height: auto;\n    \n    \n}\n.bthText{\n    height: 20px;\n    width: 30px;\n    color: #FFF;\n    font-family: \"Dax OT\";\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 20px;\n    text-align: center;\n\n}\n.gardient-btn{\n  height: 44.5px;\n  width: 292.21px;\n  border-radius: 30px;\n  text-align: center;\n  display: inline-block;\n  font-family: \"Dax OT\";\n  color: white;\n  background: linear-gradient(281deg, rgba(255,255,255,1) 0%, rgba(30,36,43,1) 100%,10%);\n}\n.gardient-btn:hover{\n    background-image: linear-gradient(270deg, #B406DA 0%, #A431D6 25%, #5347C8 65%, #2347C1 100%);\n    border-radius: 30px;\n    text-align: center;\n    display: inline-block;\n    padding: 10px 50px;\n    color: #fff;\n    text-decoration: none;\n    font-family: \"Dax OT\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhhc2UxL2dsMy9nbDMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixXQUFXOztBQUVmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCOztBQUVuQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZEQUE2RDs7QUFFL0Q7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZOzs7QUFHaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osc0ZBQXNGO0FBQ3hGO0FBRUE7SUFDSSw2RkFBNkY7SUFDN0YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcGhhc2UxL2dsMy9nbDMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBmb250LWZhbWlseTpcIkRheCBPVFwiIDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBcbn1cbi50b3AtdGl0bGUtdGV4dHtcbiAgaGVpZ2h0OiA5M3B4O1xuICB3aWR0aDogMjU1cHg7XG4gIG9wYWNpdHk6IDAuOTg7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJEYXggT1RcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgICBcbn1cbi50b3AtdGl0bGV7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cbi5jYW17XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZzogNTBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYnV0dG9uLWJvdHRvbXtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuLnRpcC1idXR0b257XG4gIGhlaWdodDogNDQuNXB4O1xuICB3aWR0aDogMjkyLjIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyODEuNjlkZWcsICNGRkYgMCUsICMxRTI0MkIgMTAwJSk7XG4gICAgXG59XG4uc3RlcC0zLWJ0bntcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgXG4gICAgXG59XG4uYnRoVGV4dHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1mYW1pbHk6IFwiRGF4IE9UXCI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5nYXJkaWVudC1idG57XG4gIGhlaWdodDogNDQuNXB4O1xuICB3aWR0aDogMjkyLjIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJEYXggT1RcIjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjgxZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDMwLDM2LDQzLDEpIDEwMCUsMTAlKTtcbn1cblxuLmdhcmRpZW50LWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjQjQwNkRBIDAlLCAjQTQzMUQ2IDI1JSwgIzUzNDdDOCA2NSUsICMyMzQ3QzEgMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiRGF4IE9UXCI7XG59Il19 */");

/***/ }),

/***/ "./src/app/phase1/gl3/gl3.component.ts":
/*!*********************************************!*\
  !*** ./src/app/phase1/gl3/gl3.component.ts ***!
  \*********************************************/
/*! exports provided: Gl3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gl3Component", function() { return Gl3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let Gl3Component = class Gl3Component {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
        document.querySelector('img').addEventListener('click', (e) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const stream = yield navigator.mediaDevices.getUserMedia({
                    video: {
                        width: 600,
                        height: 300
                    }
                });
                document.querySelector('video').srcObject = stream;
                console.log(stream);
            }
            catch (e) {
                console.error(e);
            }
        }));
    }
    back() {
        //this.location.back();
        window.history.back();
    }
};
Gl3Component.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
Gl3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gl3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gl3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/phase1/gl3/gl3.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gl3.component.css */ "./src/app/phase1/gl3/gl3.component.css")).default]
    })
], Gl3Component);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dsktoplocal/Desktop/test-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map