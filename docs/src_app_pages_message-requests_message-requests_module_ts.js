"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_message-requests_message-requests_module_ts"],{

/***/ 4636:
/*!***************************************************************************!*\
  !*** ./src/app/pages/message-requests/message-requests-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageRequestsPageRoutingModule": () => (/* binding */ MessageRequestsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _message_requests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-requests.page */ 9223);




const routes = [
    {
        path: '',
        component: _message_requests_page__WEBPACK_IMPORTED_MODULE_0__.MessageRequestsPage
    }
];
let MessageRequestsPageRoutingModule = class MessageRequestsPageRoutingModule {
};
MessageRequestsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MessageRequestsPageRoutingModule);



/***/ }),

/***/ 8302:
/*!*******************************************************************!*\
  !*** ./src/app/pages/message-requests/message-requests.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageRequestsPageModule": () => (/* binding */ MessageRequestsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _message_requests_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-requests-routing.module */ 4636);
/* harmony import */ var _message_requests_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-requests.page */ 9223);







let MessageRequestsPageModule = class MessageRequestsPageModule {
};
MessageRequestsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _message_requests_routing_module__WEBPACK_IMPORTED_MODULE_0__.MessageRequestsPageRoutingModule
        ],
        declarations: [_message_requests_page__WEBPACK_IMPORTED_MODULE_1__.MessageRequestsPage]
    })
], MessageRequestsPageModule);



/***/ }),

/***/ 9223:
/*!*****************************************************************!*\
  !*** ./src/app/pages/message-requests/message-requests.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageRequestsPage": () => (/* binding */ MessageRequestsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _message_requests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-requests.page.html?ngResource */ 3971);
/* harmony import */ var _message_requests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-requests.page.scss?ngResource */ 2470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MessageRequestsPage = class MessageRequestsPage {
    constructor() { }
    ngOnInit() {
    }
};
MessageRequestsPage.ctorParameters = () => [];
MessageRequestsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-message-requests',
        template: _message_requests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_message_requests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessageRequestsPage);



/***/ }),

/***/ 2470:
/*!******************************************************************************!*\
  !*** ./src/app/pages/message-requests/message-requests.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "hr {\n  border-bottom: 0.1px solid rgb(215, 215, 215);\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\np {\n  margin-left: 15px;\n}\n\nion-title {\n  color: black;\n  font-weight: bold;\n  font-family: cursive;\n}\n\nion-content {\n  font-family: cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtcmVxdWVzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHQTtFQUNJLG9CQUFBO0FBQUoiLCJmaWxlIjoibWVzc2FnZS1yZXF1ZXN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaHJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxucHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3971:
/*!******************************************************************************!*\
  !*** ./src/app/pages/message-requests/message-requests.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-icon [routerLink]=\"['/', 'messages']\" class=\"icon-only\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\r\n\r\n    <ion-title>Message requests</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-text>\r\n    Open a chat to get more info about who's messaging you. They won't know you've seen it until you accept.\r\n  </ion-text>\r\n  <br>\r\n  <ion-label color=\"secondary\"> Decide who can message you </ion-label>\r\n  <hr>\r\n\r\n  <ion-item lines=\"none\">\r\n      <ion-icon slot=\"start\" class=\"icon-only\" name=\"eye-off-outline\"></ion-icon>\r\n    <p>\r\n      <ion-label>Hidden Requests</ion-label>\r\n    </p>\r\n    <ion-label slot=\"end\">0</ion-label>\r\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n\r\n  </ion-item>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_message-requests_message-requests_module_ts.js.map