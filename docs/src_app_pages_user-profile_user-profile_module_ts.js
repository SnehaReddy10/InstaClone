"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user-profile_user-profile_module_ts"],{

/***/ 3376:
/*!*******************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfilePageRoutingModule": () => (/* binding */ UserProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.page */ 1553);




const routes = [
    {
        path: ':id',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_0__.UserProfilePage,
    },
];
let UserProfilePageRoutingModule = class UserProfilePageRoutingModule {
};
UserProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserProfilePageRoutingModule);



/***/ }),

/***/ 1749:
/*!***********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfilePageModule": () => (/* binding */ UserProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile-routing.module */ 3376);
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.page */ 1553);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserProfilePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_1__.UserProfilePage]
    })
], UserProfilePageModule);



/***/ }),

/***/ 1553:
/*!*********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfilePage": () => (/* binding */ UserProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.page.html?ngResource */ 9886);
/* harmony import */ var _user_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.page.scss?ngResource */ 9358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);






let UserProfilePage = class UserProfilePage {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.getUser();
    }
    ngOnInit() { }
    getUser() {
        const userId = this.router.url.split('/')[2];
        this.api.getUser(userId).then((x) => {
            this.currentUser = x;
            console.log(x);
        });
    }
};
UserProfilePage.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UserProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-profile',
        template: _user_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserProfilePage);



/***/ }),

/***/ 9358:
/*!**********************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  font-weight: bold;\n}\n\nion-header {\n  color: black;\n}\n\nion-img {\n  margin: 15px;\n}\n\nh3 {\n  font-weight: bold;\n  font-size: 20px;\n  margin-bottom: 0%;\n  margin-top: 25px;\n}\n\nion-label {\n  font-size: 12px;\n}\n\nion-button {\n  background-color: rgb(223, 223, 223);\n  border-radius: 7px;\n}\n\n.editProfileBtn {\n  width: 35%;\n}\n\nspan {\n  font-weight: bold;\n}\n\np {\n  font-size: 15px;\n}\n\nion-img {\n  background-color: rgb(223, 223, 223);\n  height: 70px;\n  width: 70px;\n}\n\n.toolbar-icons {\n  font-size: 1.5rem;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1pbWd7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIyMywgMjIzLCAyMjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uZWRpdFByb2ZpbGVCdG57XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG5zcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1pbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMjMsIDIyMyk7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuLnRvb2xiYXItaWNvbnN7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufSJdfQ== */";

/***/ }),

/***/ 9886:
/*!**********************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon [routerLink]=\"['/', 'tabs', 'home']\" class=\"icon-only\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\r\n\r\n    <ion-title>\r\n      <span>{{currentUser?.username}}</span>\r\n    </ion-title>\r\n\r\n    <ion-icon class=\"icon-only\" slot=\"end\" name=\"notifications-outline\"></ion-icon>\r\n\r\n    <ion-icon class=\"toolbar-icons\" slot=\"end\" name=\"ellipsis-vertical\"></ion-icon>\r\n\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content>\r\n\r\n  <!--profile pic followers-->\r\n  <ion-row>\r\n    <ion-col size=\"3\">\r\n      <ion-avatar>\r\n        <ion-img [src]=\"currentUser?.profile_pic\"></ion-img>\r\n      </ion-avatar>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\"ion-text-center\">\r\n      <h3>{{currentUser?.posts?.length}}</h3>\r\n      <ion-label>Posts</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\"ion-text-center\">\r\n      <h3>{{currentUser?.followers?.length}}</h3>\r\n      <ion-label>Followers</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\"ion-text-center\">\r\n      <h3>{{currentUser?.following?.length}}</h3>\r\n      <ion-label>Following</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!--bio-->\r\n  <ion-label>\r\n    {{currentUser?.username}} <br>\r\n    {{currentUser?.bio}}\r\n  </ion-label>\r\n\r\n  <!--edit profile and add friend-->\r\n  <ion-buttons class=\"ion-margin-top ion-margin-bottom\">\r\n    <ion-button class=\"editProfileBtn ion-text-nowrap\">Following \r\n      <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button class=\"editProfileBtn\">Message</ion-button>\r\n    <ion-button class=\"editProfileBtn\">Email</ion-button>\r\n    <ion-button class=\"addFriendBtn\"> \r\n      <ion-icon name=\"person-add\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n\r\n\r\n  <!--highlights-->\r\n  <p>  \r\n    <span>Story highlights</span> <br>\r\n    Keep your favorite stories on your profile\r\n  </p>\r\n <ion-row>\r\n  <ion-col size=\"3\" *ngFor=\"let highlight of highlights\">\r\n    <ion-avatar>\r\n      <ion-img class=\"story\" [src]=\"highlight?.imgSrc\"></ion-img>\r\n    </ion-avatar>\r\n  </ion-col>\r\n</ion-row>\r\n  <!--posts tags tabs-->\r\n  <app-tabs></app-tabs>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-profile_user-profile_module_ts.js.map