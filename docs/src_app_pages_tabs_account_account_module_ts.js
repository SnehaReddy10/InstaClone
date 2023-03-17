"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_account_account_module_ts"],{

/***/ 3899:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/account/account-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 9887);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 4123:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/account/account.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 3899);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 9887);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage],
    })
], AccountPageModule);



/***/ }),

/***/ 9887:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page.html?ngResource */ 6786);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss?ngResource */ 8284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);







let AccountPage = class AccountPage {
    constructor(actionSheetCtrl, router, api) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.router = router;
        this.api = api;
        this.highlights = [];
        this.getCurrentUser();
        this.getUserHighlights();
        this.getUsersRecommendedPeople();
    }
    ngOnInit() {
        // this.profile = this.api.profile;
        // this.suggestedPeople = this.profile.suggestedPeople;
        // this.highlights = this.api.profile.highLights;
    }
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: '_siri_12',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        icon: 'radio-button-on-outline',
                    },
                    {
                        text: 'Add account',
                        data: {
                            action: 'share',
                        },
                        icon: 'add-circle-outline',
                    },
                ],
            });
            yield actionSheet.present();
            const result = yield actionSheet.onDidDismiss();
            this.result = JSON.stringify(result, null, 2);
        });
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: 'Reel',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        icon: 'videocam',
                    },
                    {
                        text: 'Post',
                        data: {
                            action: 'share',
                        },
                        icon: 'apps-outline',
                    },
                    {
                        text: 'Story',
                        data: {
                            action: 'share',
                        },
                        icon: 'add-circle-outline',
                    },
                    {
                        text: 'Story Highlight',
                        data: {
                            action: 'share',
                        },
                        icon: 'heart-circle-outline',
                    },
                    {
                        text: 'Live',
                        data: {
                            action: 'share',
                        },
                        icon: 'radio-outline',
                    },
                    {
                        text: 'Guide',
                        data: {
                            action: 'share',
                        },
                        icon: 'book',
                    },
                ],
            });
            yield actionSheet.present();
            const result = yield actionSheet.onDidDismiss();
            this.result = JSON.stringify(result, null, 2);
        });
    }
    settings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: 'Settings',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        handler: () => {
                            this.router.navigateByUrl('settings');
                        },
                        icon: 'settings-outline',
                    },
                    {
                        text: 'Archive',
                        data: {
                            action: 'share',
                        },
                        icon: 'archive-outline',
                    },
                    {
                        text: 'Your Activity',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        icon: 'timer-outline',
                    },
                    {
                        text: 'QR Code',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        icon: 'qr-code-outline',
                    },
                    {
                        text: 'Saved',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        icon: 'bookmark-outline',
                    },
                    {
                        text: 'Digital collectibles',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        icon: 'checkmark-circle-outline',
                    },
                    {
                        text: 'Close Friends',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        icon: 'list-outline',
                    },
                    {
                        text: 'Favorites',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        icon: 'star-outline',
                    },
                    {
                        text: 'COVID-19 Information Center',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        icon: 'heart-circle-outline',
                    },
                    {
                        text: 'Update messaging',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        icon: 'chatbubble-ellipses-outline',
                    },
                ],
            });
            yield actionSheet.present();
            const result = yield actionSheet.onDidDismiss();
            this.result = JSON.stringify(result, null, 2);
        });
    }
    getCurrentUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.api.getCurrentUser().then((x) => (this.currentUser = x));
            console.log(this.currentUser);
        });
    }
    getUserHighlights() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.api.getUserHighlights().then((x) => (this.userHighlights = x));
            console.log('stories', this.userHighlights);
        });
    }
    getUsersRecommendedPeople() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.api
                .getUsersRecommendedPeople()
                .then((x) => (this.suggestedPeople = x));
            console.log('suggestedPeople', this.suggestedPeople);
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-account',
        template: _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountPage);



/***/ }),

/***/ 8284:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  font-weight: bold;\n}\n\nion-header {\n  color: black;\n}\n\nh3 {\n  font-weight: bold;\n  font-size: 20px;\n  margin-bottom: 0%;\n  margin-top: 25px;\n}\n\nion-label {\n  font-size: 12px;\n}\n\nion-button {\n  background-color: rgb(223, 223, 223);\n  border-radius: 7px;\n}\n\n.editProfileBtn {\n  width: 90%;\n}\n\nspan {\n  font-weight: bold;\n}\n\np {\n  font-size: 15px;\n}\n\nion-img {\n  background-color: rgb(223, 223, 223);\n  height: 90px;\n  width: 90px;\n  margin: 15px;\n}\n\n.bio {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5oM3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjMsIDIyMywgMjIzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLmVkaXRQcm9maWxlQnRue1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5pb24taW1ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5iaW97XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 6786:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/account/account.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title (click)=\"presentActionSheet()\"> \r\n      <ion-icon name=\"bag-outline\"></ion-icon>  \r\n      {{currentUser?.username}}  \r\n      <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n    </ion-title>\r\n\r\n    <ion-icon class=\"icon-only\" slot=\"end\" name=\"add-circle-outline\" (click)=\"create()\"></ion-icon>\r\n    <ion-icon class=\"icon-only\" slot=\"end\" name=\"reorder-three-outline\" (click)=\"settings()\"></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content>\r\n\r\n  <!--profile pic followers-->\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n      <ion-avatar>\r\n        <ion-img [src]=\"currentUser?.profile_pic\"></ion-img>\r\n      </ion-avatar>\r\n    </ion-col>\r\n    <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n      <h3>{{ currentUser?.posts?.length }}</h3>\r\n      <ion-label>Posts</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n      <h3>{{ currentUser?.followers?.length }}</h3>\r\n      <ion-label>Followers</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n      <h3>{{ currentUser?.following?.length }}</h3>\r\n      <ion-label>Following</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!--bio-->\r\n  <ion-label>\r\n    <h6 class=\"bio\">{{currentUser?.username}}</h6>\r\n    {{ currentUser?.bio }}\r\n  </ion-label>\r\n\r\n  <!--edit profile and add friend-->\r\n  <ion-buttons class=\"ion-margin-top ion-margin-bottom\">\r\n    <ion-button class=\"editProfileBtn ion-text-capitalize\">Edit profile</ion-button>\r\n    <ion-button class=\"addFriendBtn\"> \r\n      <ion-icon name=\"person-add\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n\r\n  <!--suggested people-->\r\n  <ion-label class=\"discoverPeople\"> Discover people</ion-label>\r\n  <ion-row >\r\n    <ion-col *ngFor=\"let person of suggestedPeople\" class=\"ion-no-padding\">\r\n      <app-people [person]=\"person\"></app-people>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!--highlights-->\r\n  <p>  \r\n    <span>Story highlights</span> <br>\r\n    Keep your favorite stories on your profile\r\n  </p>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"3\" *ngFor=\"let highlight of userHighlights\" >\r\n      <ion-avatar>\r\n        <ion-img style=\"background-color: white;\" [src]=\"highlight.story_image_url\"></ion-img>\r\n      </ion-avatar>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <br>\r\n  <!--posts tags tabs-->\r\n  <app-tabs></app-tabs>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_account_account_module_ts.js.map