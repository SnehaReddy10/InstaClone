"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_notifications_notifications_module_ts"],{

/***/ 7212:
/*!**************************************************************************!*\
  !*** ./src/app/pages/tabs/notifications/notifications-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 9031);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 3641:
/*!******************************************************************!*\
  !*** ./src/app/pages/tabs/notifications/notifications.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 7212);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 9031);







let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage]
    })
], NotificationsPageModule);



/***/ }),

/***/ 9031:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/notifications/notifications.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page.html?ngResource */ 3732);
/* harmony import */ var _notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss?ngResource */ 6436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);






let NotificationsPage = class NotificationsPage {
    constructor(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.getNotifications();
    }
    ngOnInit() { }
    openRequests() {
        console.log('open request');
        this.navCtrl.navigateForward('/follow-requests');
        console.log('notifs', this.notifications);
    }
    addfriend(user) {
        console.log('add friend', user);
        // this.api.profile.followers.push(user.userId);
        console.log(user.userId);
        // this.api.profile.requests.pop(user.userId);
    }
    deleteRequest(user) {
        console.log('delete request', user);
        // this.api.profile.requests.pop(user.userId);
    }
    followUser(user) {
        console.log(user);
        // this.api.profile.following.push(user.userId);
    }
    getNotifications() {
        this.api.getNotifications().then((x) => {
            this.notifications = x;
            console.log(x);
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-notifications',
        template: _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsPage);



/***/ }),

/***/ 6436:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tabs/notifications/notifications.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "h2 {\n  font-family: cursive;\n  font-weight: bold;\n  padding-left: 10px;\n}\n\nion-icon {\n  height: 20px;\n}\n\n.deleteBtn {\n  background-color: rgb(213, 213, 213);\n  border-radius: 5px;\n  color: black;\n  font-family: cursive;\n  text-transform: capitalize;\n}\n\nion-list-header {\n  color: black;\n  font-size: 15px;\n}\n\nion-content {\n  font-family: cursive;\n}\n\nion-item {\n  font-family: cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kZWxldGVCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEzLCAyMTMsIDIxMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn0iXX0= */";

/***/ }),

/***/ 3732:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tabs/notifications/notifications.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n  <h2>Notifications</h2>\r\n\r\n  <!--friend requests-->\r\n  <ion-item button (click)=\"openRequests()\" lines=\"none\">\r\n    <ion-avatar slot=\"start\">\r\n      <ion-img src=\"https://th.bing.com/th/id/OIP.1moOVABLsAl172i_UsaCMQHaF5?pid=ImgDet&rs=1\"></ion-img>\r\n    </ion-avatar>\r\n    <p> Follow requests <br> \r\n      Approve or ignore requests\r\n    </p>\r\n  </ion-item>\r\n\r\n  <!--week notifications-->\r\n  <ion-list lines=\"none\">\r\n    <ion-list-header> This Week</ion-list-header>\r\n    <div *ngFor=\"let notification of notifications\">\r\n      <ion-item *ngIf=\"!notification.like\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-img [src]=\"notification.profile_pic\"></ion-img>\r\n        </ion-avatar>\r\n        <p class=\"ion-text-wrap\">\r\n          {{notification.message}}\r\n        </p>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"addfriend(user)\" class=\"confirmBtn\">Confirm</ion-button>\r\n          <ion-button (click)=\"deleteRequest(user)\" class=\"deleteBtn\">Delete</ion-button>\r\n        </ion-buttons>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"notification.like\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-img [src]=\"notification.profile_pic\"></ion-img>\r\n        </ion-avatar>\r\n        <p class=\"ion-text-wrap\">\r\n          {{notification.message}}\r\n        </p>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button class=\"confirmBtn\">Reply</ion-button>\r\n        </ion-buttons>\r\n      </ion-item>\r\n    </div>\r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_notifications_notifications_module_ts.js.map