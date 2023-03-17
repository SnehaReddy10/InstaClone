"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings_settings_module_ts"],{

/***/ 2760:
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 1902);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 7850:
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 2760);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 1902);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 1902:
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 869);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SettingsPage = class SettingsPage {
    constructor() { }
    ngOnInit() {
    }
    navigateToFollowNInviteFriends() {
        console.log('navigateToFollowNInviteFriends');
    }
};
SettingsPage.ctorParameters = () => [];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-settings',
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 297:
/*!**************************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  font-weight: bold;\n}\n\nion-icon {\n  margin-right: 10px;\n}\n\n.meta {\n  font-size: 1rem;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\nion-grid {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nion-grid ion-row {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFBSTtFQUNJLFlBQUE7QUFFUiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tZXRhe1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5pb24tZ3JpZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 869:
/*!**************************************************************!*\
  !*** ./src/app/pages/settings/settings.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Settings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar color=\"light\" style=\"background-color: medium;\"></ion-searchbar>\r\n\r\n  <ion-list>\r\n    <ion-item lines=\"none\" (click)=\"navigateToFollowNInviteFriends()\">\r\n      <ion-icon name=\"person-add-outline\"></ion-icon>\r\n      <ion-label>Follow and Invite Friends</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"navigateToNotifications()\">\r\n      <ion-icon name=\"notifications-outline\"></ion-icon>\r\n      <ion-label>Notifications</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"navigateToPrivacy()\">\r\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n      <ion-label>Privacy</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"navigateToSecurity()\">\r\n      <ion-icon name=\"people-outline\"></ion-icon>\r\n      <ion-label>Supervision</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"navigateToSecurity()\">\r\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\r\n      <ion-label>Security</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"navigateToAds()\">\r\n      <ion-icon name=\"megaphone-outline\"></ion-icon>\r\n      <ion-label>Ads</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"navigateToAccount()\">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label>Account</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"navigateToHelp()\">\r\n      <ion-icon name=\"help-buoy-outline\"></ion-icon>\r\n      <ion-label>Help</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"navigateToAbout()\">\r\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"navigateToThemes()\">\r\n      <ion-icon name=\"color-palette-outline\"></ion-icon>\r\n      <ion-label>Theme</ion-label>\r\n    </ion-item>\r\n    \r\n  </ion-list>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"meta\">\r\n      <ion-icon color=\"primary\" name=\"infinite-outline\"></ion-icon>\r\n      Meta\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-label color=\"primary\"> Accounts Center </ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-note> Control settings for connected experiences accross Instagram, the Facebook app and Messenger, including story and post sharing and loggin in.</ion-note>\r\n    </ion-row>\r\n    <ion-row>\r\n      Logins\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label color=\"primary\"> Add account </ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label color=\"primary\"> Log out </ion-label>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_settings_module_ts.js.map