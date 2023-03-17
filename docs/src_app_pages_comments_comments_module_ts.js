"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_comments_comments_module_ts"],{

/***/ 2134:
/*!***********************************************************!*\
  !*** ./src/app/pages/comments/comments-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPageRoutingModule": () => (/* binding */ CommentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.page */ 127);




const routes = [
    {
        path: ':id',
        component: _comments_page__WEBPACK_IMPORTED_MODULE_0__.CommentsPage,
    },
];
let CommentsPageRoutingModule = class CommentsPageRoutingModule {
};
CommentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommentsPageRoutingModule);



/***/ }),

/***/ 8181:
/*!***************************************************!*\
  !*** ./src/app/pages/comments/comments.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPageModule": () => (/* binding */ CommentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _comments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-routing.module */ 2134);
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.page */ 127);







let CommentsPageModule = class CommentsPageModule {
};
CommentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _comments_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommentsPageRoutingModule
        ],
        declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_1__.CommentsPage]
    })
], CommentsPageModule);



/***/ }),

/***/ 127:
/*!*************************************************!*\
  !*** ./src/app/pages/comments/comments.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPage": () => (/* binding */ CommentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _comments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.page.html?ngResource */ 5960);
/* harmony import */ var _comments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.page.scss?ngResource */ 7816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);






let CommentsPage = class CommentsPage {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.liked = false;
        this.heart = {
            name: 'heart-outline',
            color: 'dark',
        };
        this.getPostComments();
        this.getPost(this.route.url.split('/')[2]);
    }
    ngOnInit() { }
    changeHeart() {
        if (!this.liked) {
            this.liked = true;
            (this.heart.name = 'heart'), (this.heart.color = 'danger');
        }
        else {
            this.liked = false;
            (this.heart.name = 'heart-outline'), (this.heart.color = 'dark');
        }
    }
    likeComment() { }
    getPostComments() {
        this.api.getPostComments(this.route.url.split('/')[2]).then((x) => {
            this.postComments = x;
        });
    }
    getPost(postId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.api.getPost(postId).then((x) => {
                this.post = x;
                this.getUser(this.post.user_id);
            });
        });
    }
    getUser(userId) {
        this.api.getUser(userId).then((x) => {
            this.user = x;
            console.log(x);
        });
    }
};
CommentsPage.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CommentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-comments',
        template: _comments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_comments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommentsPage);



/***/ }),

/***/ 7816:
/*!**************************************************************!*\
  !*** ./src/app/pages/comments/comments.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "span {\n  font-weight: bold;\n}\n\np {\n  margin-left: 15px;\n}\n\n.postIcons {\n  font-size: 20px;\n}\n\nion-button {\n  background-color: white;\n  color: white;\n}\n\nion-note {\n  padding-right: 14px;\n}\n\nion-item {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImNvbW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxucHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ucG9zdEljb25ze1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1ub3Rle1xyXG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBtYXJnaW4tdG9wOiA1cHhcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 5960:
/*!**************************************************************!*\
  !*** ./src/app/pages/comments/comments.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon [routerLink]=\"['/', 'tabs', 'home']\" class=\"icon-only\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\r\n\r\n    <ion-title>\r\n      <span>Comments</span>\r\n    </ion-title>\r\n\r\n    <ion-icon slot=\"end\" class=\"icon-only\" color=\"dark\" name=\"navigate-outline\" (click)=\"navigateToMessages()\"></ion-icon>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- post description -->\r\n  <ion-item lines=\"full\">\r\n    <ion-avatar>\r\n      <ion-img class=\"story\" src=\"https://th.bing.com/th/id/OIP.WB62eaUDV-0wrQ11RAgexgHaJQ?w=186&h=233&c=7&r=0&o=5&dpr=1.6&pid=1.7\"></ion-img>\r\n    </ion-avatar>\r\n    <p>\r\n      <span>{{user?.username}}</span>\r\n      {{post?.description}}\r\n    </p>\r\n  </ion-item>\r\n\r\n  <!-- comments list -->\r\n  <ion-list lines=\"none\">\r\n    <ion-item *ngFor=\"let comment of postComments\">\r\n      <ion-avatar>\r\n        <ion-img class=\"story\" [src]=\"comment.profile_url\"></ion-img>\r\n      </ion-avatar>\r\n      <p>\r\n        <span>{{comment.username}}</span>\r\n        {{comment.user_comment}}\r\n        <ion-label> \r\n          <ion-note>2h</ion-note> \r\n          <ion-note (click)=\"likeComment()\">Like</ion-note> \r\n          <ion-note>Reply</ion-note> \r\n          <ion-note>Send</ion-note> \r\n        </ion-label>\r\n\r\n      </p>\r\n      <ion-icon slot=\"end\" (click)=\"changeHeart()\" class=\"postIcons\" [name]=\"heart.name\" [color]=\"heart.color\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_comments_comments_module_ts.js.map