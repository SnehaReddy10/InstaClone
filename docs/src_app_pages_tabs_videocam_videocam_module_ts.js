"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_videocam_videocam_module_ts"],{

/***/ 2069:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/videocam/videocam-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideocamPageRoutingModule": () => (/* binding */ VideocamPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _videocam_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videocam.page */ 6273);




const routes = [
    {
        path: '',
        component: _videocam_page__WEBPACK_IMPORTED_MODULE_0__.VideocamPage
    }
];
let VideocamPageRoutingModule = class VideocamPageRoutingModule {
};
VideocamPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VideocamPageRoutingModule);



/***/ }),

/***/ 8282:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/videocam/videocam.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideocamPageModule": () => (/* binding */ VideocamPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _videocam_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videocam-routing.module */ 2069);
/* harmony import */ var _videocam_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videocam.page */ 6273);







let VideocamPageModule = class VideocamPageModule {
};
VideocamPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _videocam_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideocamPageRoutingModule
        ],
        declarations: [_videocam_page__WEBPACK_IMPORTED_MODULE_1__.VideocamPage]
    })
], VideocamPageModule);



/***/ }),

/***/ 6273:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/videocam/videocam.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideocamPage": () => (/* binding */ VideocamPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _videocam_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videocam.page.html?ngResource */ 1748);
/* harmony import */ var _videocam_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videocam.page.scss?ngResource */ 6471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let VideocamPage = class VideocamPage {
    constructor() { }
    ngOnInit() {
    }
};
VideocamPage.ctorParameters = () => [];
VideocamPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-videocam',
        template: _videocam_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_videocam_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VideocamPage);



/***/ }),

/***/ 6471:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/videocam/videocam.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb2NhbS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1748:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/videocam/videocam.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>videocam</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_videocam_videocam_module_ts.js.map