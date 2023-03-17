"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_instagram_instagram_module_ts"],{

/***/ 2502:
/*!*************************************************************!*\
  !*** ./src/app/pages/instagram/instagram-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstagramPageRoutingModule": () => (/* binding */ InstagramPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _instagram_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instagram.page */ 8237);




const routes = [
    {
        path: '',
        component: _instagram_page__WEBPACK_IMPORTED_MODULE_0__.InstagramPage
    }
];
let InstagramPageRoutingModule = class InstagramPageRoutingModule {
};
InstagramPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InstagramPageRoutingModule);



/***/ }),

/***/ 8455:
/*!*****************************************************!*\
  !*** ./src/app/pages/instagram/instagram.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstagramPageModule": () => (/* binding */ InstagramPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _instagram_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instagram-routing.module */ 2502);
/* harmony import */ var _instagram_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instagram.page */ 8237);







let InstagramPageModule = class InstagramPageModule {
};
InstagramPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _instagram_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstagramPageRoutingModule
        ],
        declarations: [_instagram_page__WEBPACK_IMPORTED_MODULE_1__.InstagramPage]
    })
], InstagramPageModule);



/***/ }),

/***/ 8237:
/*!***************************************************!*\
  !*** ./src/app/pages/instagram/instagram.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstagramPage": () => (/* binding */ InstagramPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _instagram_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instagram.page.html?ngResource */ 3330);
/* harmony import */ var _instagram_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instagram.page.scss?ngResource */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let InstagramPage = class InstagramPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToLogin() {
        this.router.navigateByUrl('login');
    }
    navigateToSignUp() {
        this.router.navigateByUrl('signup');
    }
};
InstagramPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
InstagramPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-instagram',
        template: _instagram_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_instagram_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InstagramPage);



/***/ }),

/***/ 2610:
/*!****************************************************************!*\
  !*** ./src/app/pages/instagram/instagram.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "h1 {\n  font-size: 50px;\n  font-weight: bold;\n}\n\nion-button {\n  width: 90%;\n  margin-left: 15px;\n  margin-top: 40px;\n}\n\nng-container {\n  align-content: center;\n}\n\nh2 {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhZ3JhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSiIsImZpbGUiOiJpbnN0YWdyYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbm5nLWNvbnRhaW5lcntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59Il19 */";

/***/ }),

/***/ 3330:
/*!****************************************************************!*\
  !*** ./src/app/pages/instagram/instagram.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    \r\n    <h1 class=\"ion-text-center\"> Instagram </h1>\r\n\r\n    <ion-button class=\"ion-text-capitalize\" (click)=\"navigateToSignUp()\"> Create new account </ion-button>\r\n\r\n    <h2 class=\"ion-text-center\" (click)=\"navigateToLogin()\">Log in</h2>\r\n\r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_instagram_instagram_module_ts.js.map