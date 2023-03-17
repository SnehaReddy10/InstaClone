"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_search_search_module_ts"],{

/***/ 3214:
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/search/search-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 1978);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 9311:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/search/search.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 3214);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 1978);







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 1978:
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/search/search.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page.html?ngResource */ 4143);
/* harmony import */ var _search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss?ngResource */ 1282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);





let SearchPage = class SearchPage {
    constructor(apiService) {
        this.apiService = apiService;
        this.getCurrentUser();
        this.getFollowingList();
        this.getSentRequests();
        this.getAllUsers();
    }
    ngOnInit() { }
    getAllUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apiService.getAllUsers().then((x) => {
                this.allUsers = x;
                for (let i = 0; i < this.allUsers.length; i++) {
                    this.allUsers[i].isFollowing = this.checkIsFollowing(this.allUsers[i]._id);
                    this.allUsers[i].isRequested = this.checkIsRequested(this.allUsers[i]._id);
                }
                this.allUsers = this.allUsers.filter((x) => x._id !== this.currentUser._id);
                this.searchUsers = this.allUsers;
                console.log('allusers', this.allUsers);
            });
        });
    }
    onSearchChange(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.query = event.detail.value.toLowerCase();
            this.searchUsers = [];
            if (this.query.length > 0) {
                setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    this.searchUsers = yield this.allUsers.filter((element) => {
                        return element.username.includes(this.query);
                    });
                }), 300);
            }
        });
    }
    getCurrentUser() {
        this.apiService.getCurrentUser().then((x) => (this.currentUser = x));
    }
    requestUserToFollow(userId) {
        this.apiService.requestUserToFollow(userId);
        this.isFollowing = true;
        window.location.reload();
    }
    getFollowingList() {
        this.apiService.getFollowingList().then((x) => (this.followingList = x));
    }
    getSentRequests() {
        this.apiService.getSentRequests().then((x) => {
            this.sentRequests = x;
        });
    }
    checkIsFollowing(userId) {
        return 0 !== this.followingList.filter((x) => x === userId).length;
    }
    checkIsRequested(userId) {
        return 0 !== this.sentRequests.filter((x) => x === userId).length;
    }
    deleteRequest(userId) {
        this.apiService.requestUserToFollow(userId);
        window.location.reload();
    }
};
SearchPage.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-search',
        template: _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchPage);



/***/ }),

/***/ 1282:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/search/search.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".memeImage {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoic2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1lSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59Il19 */";

/***/ }),

/***/ 4143:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/search/search.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content>\r\n\r\n  <!--search bar -->\r\n  <ion-searchbar\r\n    animated=\"true\" \r\n    debounce=\"800\" \r\n    #searchInput\r\n    (ionChange)=\"onSearchChange($event)\" \r\n    color=\"light\" \r\n    style=\"background-color: medium;\">\r\n  </ion-searchbar>\r\n\r\n  <ion-item lines=\"none\" *ngFor=\"let user of searchUsers\">\r\n    <ion-avatar>\r\n      <img [src]=\"user.profile_pic\">\r\n    </ion-avatar>\r\n    <p style=\"margin-left: 10px;\">{{user.username}}</p>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button *ngIf=\"!user.isFollowing && !user.isRequested\" class=\"confirmBtn\" (click)=\"requestUserToFollow(user._id)\">Follow</ion-button>\r\n      <ion-button *ngIf=\"user.isFollowing\" class=\"confirmBtn\" (click)=\"requestUserToFollow(user._id)\">UnFollow</ion-button>\r\n      <ion-button *ngIf=\"user.isRequested && !user.isFollowing\" class=\"confirmBtn\" (click)=\"deleteRequest(user._id)\">Requested</ion-button>\r\n    </ion-buttons>\r\n    <br>\r\n  </ion-item>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_search_search_module_ts.js.map