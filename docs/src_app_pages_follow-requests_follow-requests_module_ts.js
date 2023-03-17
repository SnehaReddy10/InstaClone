"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_follow-requests_follow-requests_module_ts"],{

/***/ 8775:
/*!*************************************************************************!*\
  !*** ./src/app/pages/follow-requests/follow-requests-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowRequestsPageRoutingModule": () => (/* binding */ FollowRequestsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _follow_requests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow-requests.page */ 1772);




const routes = [
    {
        path: '',
        component: _follow_requests_page__WEBPACK_IMPORTED_MODULE_0__.FollowRequestsPage
    }
];
let FollowRequestsPageRoutingModule = class FollowRequestsPageRoutingModule {
};
FollowRequestsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FollowRequestsPageRoutingModule);



/***/ }),

/***/ 4239:
/*!*****************************************************************!*\
  !*** ./src/app/pages/follow-requests/follow-requests.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowRequestsPageModule": () => (/* binding */ FollowRequestsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _follow_requests_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow-requests-routing.module */ 8775);
/* harmony import */ var _follow_requests_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-requests.page */ 1772);







let FollowRequestsPageModule = class FollowRequestsPageModule {
};
FollowRequestsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _follow_requests_routing_module__WEBPACK_IMPORTED_MODULE_0__.FollowRequestsPageRoutingModule
        ],
        declarations: [_follow_requests_page__WEBPACK_IMPORTED_MODULE_1__.FollowRequestsPage]
    })
], FollowRequestsPageModule);



/***/ }),

/***/ 1772:
/*!***************************************************************!*\
  !*** ./src/app/pages/follow-requests/follow-requests.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowRequestsPage": () => (/* binding */ FollowRequestsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _follow_requests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow-requests.page.html?ngResource */ 2817);
/* harmony import */ var _follow_requests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-requests.page.scss?ngResource */ 4127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);






let FollowRequestsPage = class FollowRequestsPage {
    constructor(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.users = [];
        this.requests = [];
        this.getCurrentUser();
        this.getFollowingList();
        this.getSentRequests();
        this.getAllUsers();
        setTimeout(() => {
            this.getFollowRequest();
        }, 100);
    }
    ngOnInit() { }
    removeRequest(user) { }
    sendRequest(user) { }
    addfriend(userId) {
        this.api.addFollower(userId);
        this.api.deleteFollowRequest(userId);
        window.location.reload();
    }
    deleteRequest(userId) {
        this.api.requestUserToFollow(userId);
        window.location.reload();
    }
    requestUserToFollow(userId) {
        this.api.requestUserToFollow(userId);
        this.isFollowing = true;
        window.location.reload();
    }
    showUserAccount(user) {
        this.navCtrl.navigateForward('/user-profile/' + user._id);
    }
    getFollowRequest() {
        this.api.getFollowRequests().then((x) => {
            this.requestIds = x;
            this.getRequestUsers();
        });
    }
    getCurrentUser() {
        this.api.getCurrentUser().then((x) => (this.currentUser = x));
    }
    getRequestUsers() {
        for (let i = 0; i < this.requestIds.length; i++) {
            this.api.getUser(this.requestIds[i]).then((x) => this.requests.push(x));
        }
    }
    getAllUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.api.getAllUsers().then((x) => {
                this.allUsers = x;
                console.log('user', this.allUsers, this.followingList, this.sentRequests);
                for (let i = 0; i < this.allUsers.length; i++) {
                    this.allUsers[i].isFollowing = this.checkIsFollowing(this.allUsers[i]._id);
                    this.allUsers[i].isRequested = this.checkIsRequested(this.allUsers[i]._id);
                }
                console.log('all', this.allUsers);
                this.allUsers = this.allUsers.filter((x) => x._id !== this.currentUser._id);
                this.suggestedUsers = this.allUsers;
                console.log('s', this.suggestedUsers);
            });
        });
    }
    getFollowingList() {
        this.api.getFollowingList().then((x) => (this.followingList = x));
    }
    getSentRequests() {
        this.api.getSentRequests().then((x) => {
            console.log('x', x);
            this.sentRequests = x;
        });
    }
    checkIsFollowing(userId) {
        console.log(this.followingList, userId);
        return 0 !== this.followingList.filter((x) => x === userId).length;
    }
    checkIsRequested(userId) {
        console.log('req', this.sentRequests, userId);
        return 0 !== this.sentRequests.filter((x) => x === userId).length;
    }
};
FollowRequestsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
FollowRequestsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-follow-requests',
        template: _follow_requests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_follow_requests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FollowRequestsPage);



/***/ }),

/***/ 4127:
/*!****************************************************************************!*\
  !*** ./src/app/pages/follow-requests/follow-requests.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".confirmBtn {\n  background-color: var(--ion-color-primary);\n  color: white;\n  border-radius: 5px;\n  font-family: cursive;\n  text-transform: capitalize;\n}\n\n.deleteBtn {\n  background-color: rgb(213, 213, 213);\n  border-radius: 5px;\n  color: black;\n  font-family: cursive;\n  text-transform: capitalize;\n}\n\nion-title {\n  color: black;\n  font-family: cursive;\n}\n\nion-label {\n  margin-right: 10px;\n  font-family: cursive;\n}\n\np {\n  font-family: cursive;\n}\n\nion-avatar {\n  height: 60px;\n  width: 60px;\n}\n\n.seeAll {\n  color: var(--ion-color-primary);\n}\n\nion-button {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvdy1yZXF1ZXN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6ImZvbGxvdy1yZXF1ZXN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybUJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5kZWxldGVCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEzLCAyMTMsIDIxMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG5cclxuaW9uLWF2YXRhcntcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uc2VlQWxse1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 2817:
/*!****************************************************************************!*\
  !*** ./src/app/pages/follow-requests/follow-requests.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon [routerLink]=\"['/', 'tabs', 'home']\" class=\"icon-only\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\r\n\r\n    <ion-title>Follow-requests</ion-title>\r\n\r\n    <ion-label (click)=\"manageRequests()\" slot=\"end\">Manage</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-list lines=\"none\">\r\n    <ion-item *ngFor=\"let user of requests\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"user?.profile_pic\"></ion-img>\r\n      </ion-avatar>\r\n      <p class=\"ion-text-wrap\">\r\n        <span style=\"font-weight: bold;\" (click)=\"showUserAccount(user)\"> {{user?.username}} </span>\r\n      </p>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"addfriend(user._id)\" class=\"confirmBtn\">Confirm</ion-button>\r\n        <ion-button (click)=\"deleteRequest(user._id)\" class=\"deleteBtn\">Delete</ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <p class=\"seeAll\">See all (21)</p>\r\n  <h6>Suggestions for you</h6>\r\n  <ion-list lines=\"none\">\r\n    <ion-item *ngFor=\"let suggestedUser of suggestedUsers\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-img [src]=\"suggestedUser?.profile_pic\"></ion-img>\r\n      </ion-avatar>\r\n      <p class=\"ion-text-wrap\">\r\n        <span style=\"font-weight: bold;\"> {{suggestedUser?.username}} </span>\r\n      </p>\r\n      <ion-buttons slot=\"end\">\r\n\r\n      <ion-button *ngIf=\"!suggestedUser.isFollowing && !suggestedUser.isRequested\" class=\"confirmBtn\" (click)=\"requestUserToFollow(suggestedUser._id)\">Follow</ion-button>\r\n      <ion-button *ngIf=\"suggestedUser.isFollowing\" class=\"confirmBtn\" (click)=\"requestUserToFollow(suggestedUser._id)\">UnFollow</ion-button>\r\n      <ion-button *ngIf=\"suggestedUser.isRequested && !suggestedUser.isFollowing\" class=\"confirmBtn\" (click)=\"deleteRequest(suggestedUser._id)\">Requested</ion-button>\r\n      \r\n      <ion-icon (click)=\"removeRequest(suggestedUser)\" name=\"close-outline\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-item>\r\n   \r\n\r\n  </ion-list>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_follow-requests_follow-requests_module_ts.js.map