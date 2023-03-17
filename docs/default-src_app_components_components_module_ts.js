"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 1713:
/*!*****************************************************!*\
  !*** ./src/app/components/calls/calls.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallsComponent": () => (/* binding */ CallsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _calls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calls.component.html?ngResource */ 2723);
/* harmony import */ var _calls_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calls.component.scss?ngResource */ 9099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CallsComponent = class CallsComponent {
    constructor() { }
    ngOnInit() { }
};
CallsComponent.ctorParameters = () => [];
CallsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-calls',
        template: _calls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_calls_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CallsComponent);



/***/ }),

/***/ 1137:
/*!*****************************************************!*\
  !*** ./src/app/components/chats/chats.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsComponent": () => (/* binding */ ChatsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chats_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats.component.html?ngResource */ 9188);
/* harmony import */ var _chats_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats.component.scss?ngResource */ 6384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ChatsComponent = class ChatsComponent {
    constructor() { }
    ngOnInit() { }
};
ChatsComponent.ctorParameters = () => [];
ChatsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-chats',
        template: _chats_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chats_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatsComponent);



/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post/post.component */ 3915);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/tabs.component */ 9450);
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people/people.component */ 4947);
/* harmony import */ var _tabs_messages_tabs_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-messages/tabs-messages.component */ 3281);
/* harmony import */ var _calls_calls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calls/calls.component */ 1713);
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chats/chats.component */ 1137);









let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _post_post_component__WEBPACK_IMPORTED_MODULE_0__.PostComponent,
            _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TabsComponent,
            _people_people_component__WEBPACK_IMPORTED_MODULE_2__.PeopleComponent,
            _tabs_messages_tabs_messages_component__WEBPACK_IMPORTED_MODULE_3__.TabsMessagesComponent,
            _calls_calls_component__WEBPACK_IMPORTED_MODULE_4__.CallsComponent,
            _chats_chats_component__WEBPACK_IMPORTED_MODULE_5__.ChatsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule
        ],
        exports: [
            _post_post_component__WEBPACK_IMPORTED_MODULE_0__.PostComponent,
            _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TabsComponent,
            _people_people_component__WEBPACK_IMPORTED_MODULE_2__.PeopleComponent,
            _tabs_messages_tabs_messages_component__WEBPACK_IMPORTED_MODULE_3__.TabsMessagesComponent,
            _calls_calls_component__WEBPACK_IMPORTED_MODULE_4__.CallsComponent,
            _chats_chats_component__WEBPACK_IMPORTED_MODULE_5__.ChatsComponent
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 4947:
/*!*******************************************************!*\
  !*** ./src/app/components/people/people.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeopleComponent": () => (/* binding */ PeopleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _people_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people.component.html?ngResource */ 7292);
/* harmony import */ var _people_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people.component.scss?ngResource */ 5174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let PeopleComponent = class PeopleComponent {
    constructor() { }
    ngOnInit() { }
};
PeopleComponent.ctorParameters = () => [];
PeopleComponent.propDecorators = {
    person: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PeopleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-people',
        template: _people_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_people_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PeopleComponent);



/***/ }),

/***/ 3915:
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostComponent": () => (/* binding */ PostComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _post_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.component.html?ngResource */ 1916);
/* harmony import */ var _post_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.component.scss?ngResource */ 3802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);






let PostComponent = class PostComponent {
    constructor(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.liked = false;
        this.bookmarked = false;
        this.bookmark = {
            name: 'bookmark-outline',
        };
        this.heart = {
            name: 'heart-outline',
            color: 'dark',
        };
        setTimeout(() => {
            const liked = this.post.likes.filter((x) => this.currentUser._id);
            this.saved = this.savedPosts.filter((x) => x === this.post.post_id);
            if (liked.length) {
                this.isLiked = true;
            }
            else {
                this.isLiked = false;
            }
            if (this.saved.length) {
                this.bookmarked = true;
            }
            else {
                this.bookmarked = false;
            }
            this.getComments(this.post.post_id);
            this.postAlreadyLiked();
            this.postAlreadySaved();
        }, 0);
    }
    ngOnInit() { }
    postAlreadyLiked() {
        if (this.isLiked) {
            (this.heart.name = 'heart'), (this.heart.color = 'danger');
        }
        else {
            (this.heart.name = 'heart-outline'), (this.heart.color = 'dark');
        }
    }
    postAlreadySaved() {
        if (this.bookmarked) {
            this.bookmark.name = 'bookmark';
        }
        else {
            this.bookmark.name = 'bookmark-outline';
        }
    }
    changeHeart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isLiked) {
                this.isLiked = true;
                (this.heart.name = 'heart'),
                    (this.heart.color = 'danger'),
                    this.api.likePost(this.post.post_id, this.isLiked);
            }
            else {
                this.isLiked = false;
                (this.heart.name = 'heart-outline'),
                    (this.heart.color = 'dark'),
                    yield this.api.likePost(this.post.post_id, this.isLiked);
            }
        });
    }
    addToBookmarks(postId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.bookmarked) {
                this.bookmarked = true;
                this.bookmark.name = 'bookmark';
            }
            else {
                this.bookmarked = false;
                this.bookmark.name = 'bookmark-outline';
            }
            yield this.api.addToSavedPosts(postId);
            console.log('postid', this.post.post_id);
        });
    }
    goToComments() {
        this.navCtrl.navigateForward('/comments');
    }
    addComment(user_comment, post_id) {
        this.api.addComment(user_comment, post_id);
        window.location.reload();
    }
    getComments(post_id) {
        this.api.getPostComments(post_id).then((x) => {
            this.comments = x;
        });
    }
};
PostComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
PostComponent.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    currentUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    savedPosts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
PostComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-post',
        template: _post_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_post_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostComponent);



/***/ }),

/***/ 3281:
/*!*********************************************************************!*\
  !*** ./src/app/components/tabs-messages/tabs-messages.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsMessagesComponent": () => (/* binding */ TabsMessagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-messages.component.html?ngResource */ 6645);
/* harmony import */ var _tabs_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-messages.component.scss?ngResource */ 3437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let TabsMessagesComponent = class TabsMessagesComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.chat = true;
        this.calls = false;
    }
    ngOnInit() { }
    chatClicked() {
        this.calls = false;
        this.chat = true;
    }
    callsClicked() {
        this.calls = true;
        this.chat = false;
    }
    requestsClicked() {
        this.navCtrl.navigateForward('message-requests');
    }
};
TabsMessagesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
TabsMessagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs-messages',
        template: _tabs_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsMessagesComponent);



/***/ }),

/***/ 9450:
/*!***************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 5605);
/* harmony import */ var _tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.scss?ngResource */ 3206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TabsComponent = class TabsComponent {
    constructor() { }
    ngOnInit() { }
};
TabsComponent.ctorParameters = () => [];
TabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsComponent);



/***/ }),

/***/ 9099:
/*!******************************************************************!*\
  !*** ./src/app/components/calls/calls.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "p {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJjYWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufSJdfQ== */";

/***/ }),

/***/ 6384:
/*!******************************************************************!*\
  !*** ./src/app/components/chats/chats.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-img {\n  height: 50px;\n  width: 50px;\n}\n\nspan {\n  font-weight: bold;\n}\n\np {\n  margin-left: 20px;\n}\n\n.newMessage {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKIiwiZmlsZSI6ImNoYXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24taW1ne1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxucHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubmV3TWVzc2FnZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 5174:
/*!********************************************************************!*\
  !*** ./src/app/components/people/people.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-avatar {\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\nion-card-title {\n  font-weight: bold;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlb3BsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6InBlb3BsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tYXZhdGFye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6MThweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 3802:
/*!****************************************************************!*\
  !*** ./src/app/components/post/post.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  height: 55px;\n  padding-right: 20px;\n}\nion-toolbar ion-img {\n  margin-left: 10px;\n  margin-top: 15px;\n}\nion-toolbar ion-title {\n  padding-left: 0%;\n  margin-left: 0%;\n}\nh5 {\n  font-weight: bold;\n  font-family: cursive;\n}\n.postPic {\n  height: 270px;\n}\n.postIcons {\n  height: 30px;\n  width: 30px;\n  font-weight: bold;\n}\nion-content {\n  font-family: cursive;\n  height: 439px;\n}\n.commentProPic {\n  height: 30px;\n  width: 30px;\n  border-radius: 15px;\n  margin-left: 0px;\n  padding-left: 0px;\n}\n.commentIcons {\n  margin-top: 0px;\n  padding: 0px;\n}\nion-item {\n  height: 40px;\n}\nion-note {\n  font-size: 9px;\n}\nion-label {\n  margin-top: 15px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFFUjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVBO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoicG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGlvbi1pbWd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIH1cclxufVxyXG5cclxuaDV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbn1cclxuXHJcbi5wb3N0UGlje1xyXG4gICAgaGVpZ2h0OiAyNzBweDtcclxufVxyXG5cclxuLnBvc3RJY29uc3tcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxuICAgIGhlaWdodDogNDM5cHg7XHJcbn1cclxuXHJcbi5jb21tZW50UHJvUGlje1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4uY29tbWVudEljb25ze1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuaW9uLW5vdGV7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3437:
/*!**********************************************************************************!*\
  !*** ./src/app/components/tabs-messages/tabs-messages.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "ion-label {\n  font-family: cursive;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMtbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJ0YWJzLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 3206:
/*!****************************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 2723:
/*!******************************************************************!*\
  !*** ./src/app/components/calls/calls.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-item>\r\n  <ion-avatar>\r\n    <ion-icon class=\"icon-only\" name=\"call-outline\"></ion-icon>\r\n  </ion-avatar>\r\n  <p>\r\n    <ion-label>Audio</ion-label>\r\n    <ion-note>Start with audio</ion-note>\r\n  </p>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-avatar>\r\n    <ion-icon class=\"icon-only\" name=\"videocam-outline\"></ion-icon>\r\n  </ion-avatar>\r\n  <p>\r\n    <ion-label>Video</ion-label>\r\n    <ion-note>Hang out on video</ion-note>\r\n  </p>\r\n</ion-item>\r\n\r\n<h4> Call friends </h4>\r\n\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-avatar>\r\n      <ion-img src=\"https://th.bing.com/th/id/OIP.1moOVABLsAl172i_UsaCMQHaF5?pid=ImgDet&rs=1\"></ion-img>\r\n    </ion-avatar>\r\n    <p>\r\n      <ion-label>Video</ion-label>\r\n      <ion-note>Hang out on video</ion-note>\r\n    </p>\r\n    <ion-icon slot=\"end\" class=\"icon-only\" name=\"call-outline\"></ion-icon>\r\n    <ion-icon slot=\"end\" class=\"icon-only\" name=\"videocam-outline\"></ion-icon>\r\n\r\n  </ion-item>\r\n  \r\n</ion-list>";

/***/ }),

/***/ 9188:
/*!******************************************************************!*\
  !*** ./src/app/components/chats/chats.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-searchbar color=\"light\" style=\"background-color: medium;\"></ion-searchbar>\r\n\r\n  <!-- messages-list -->\r\n  <ion-list lines=\"none\">\r\n    <ion-item>\r\n      <ion-avatar>\r\n        <ion-img src=\"https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.6&pid=1.7\"></ion-img>\r\n      </ion-avatar>\r\n      <p class=\"ion-text-nowrap\">\r\n        <span> Harsha_21 </span>\r\n        <br>\r\n        <span>Sent alluarvind's real hcuh</span>\r\n        <span>17h</span>\r\n      </p>\r\n      <ion-icon class=\"newMessage\" color=\"primary\" slot=\"end\" name=\"ellipse\"></ion-icon>\r\n      <ion-icon class=\"icon-only\" color=\"dark\" slot=\"end\" name=\"camera-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar>\r\n        <ion-img src=\"https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.6&pid=1.7\"></ion-img>\r\n      </ion-avatar>\r\n      <p>\r\n        <span> Harsha_21 </span>\r\n        <br>\r\n        <span>Liked a message. 17h</span>\r\n      </p>\r\n      <ion-icon class=\"newMessage\" color=\"primary\" slot=\"end\" name=\"ellipse\"></ion-icon>\r\n      <ion-icon class=\"icon-only\" color=\"dark\" slot=\"end\" name=\"camera-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar>\r\n        <ion-img src=\"https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.6&pid=1.7\"></ion-img>\r\n      </ion-avatar>\r\n      <p>\r\n        <span> Harsha_21 </span>\r\n        <br>\r\n        <span>Sent alluarvind's real...17h</span>\r\n      </p>\r\n      <ion-icon class=\"icon-only\" color=\"dark\" slot=\"end\" name=\"camera-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar>\r\n        <ion-img src=\"https://th.bing.com/th/id/OIP.l1kkQOprIOV7jF6558kfGQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.6&pid=1.7\"></ion-img>\r\n      </ion-avatar>\r\n      <p>\r\n        <span> Harsha_21 </span>\r\n        <br>\r\n        <span>Sent alluarvind's real...17h</span>\r\n      </p>\r\n      <ion-icon class=\"icon-only\" color=\"dark\" slot=\"end\" name=\"camera-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>";

/***/ }),

/***/ 7292:
/*!********************************************************************!*\
  !*** ./src/app/components/people/people.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-card>\r\n  <ion-icon name=\"close-outline\"></ion-icon>\r\n\r\n  <ion-avatar>\r\n    <ion-img src=\"https://th.bing.com/th/id/OIP.1moOVABLsAl172i_UsaCMQHaF5?pid=ImgDet&rs=1\"></ion-img>\r\n  </ion-avatar>\r\n\r\n\r\n  <ion-card-header>\r\n    <ion-card-title>{{person?.username}}</ion-card-title>\r\n    <ion-card-subtitle>Followed by anusha + 8..</ion-card-subtitle>\r\n    <ion-button class=\"confirmBtn ion-text-capitalize\">Follow</ion-button>\r\n  </ion-card-header>\r\n</ion-card>\r\n";

/***/ }),

/***/ 1916:
/*!****************************************************************!*\
  !*** ./src/app/components/post/post.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "  <ion-toolbar [routerLink]=\"['/', 'user-profile', post.user_id]\">\r\n    <ion-title> \r\n      <h5>{{post.username}}</h5>\r\n    </ion-title>\r\n\r\n    <ion-avatar slot=\"start\">\r\n      <ion-img class=\"commentProPic\" [src]=\"post.user_profile_url\"></ion-img>\r\n    </ion-avatar>\r\n      <ion-icon slot=\"end\" name=\"ellipsis-vertical-outline\"></ion-icon>\r\n  </ion-toolbar>\r\n\r\n<ion-content class=\"container\">\r\n\r\n  <!-- post -->\r\n  <ion-img class=\"postPic\" [src]=\"post.post_image_url\"></ion-img>\r\n\r\n\r\n  <!-- post-icons -->\r\n  <ion-item lines=\"none\">\r\n    <ion-row>\r\n    <ion-col size=\"4\">\r\n      <ion-icon (click)=\"changeHeart(post)\" class=\"postIcons\" [name]=\"heart.name\" [color]=\"heart.color\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"4\" [routerLink]=\"['/', 'comments', post.post_id]\">\r\n      <ion-icon class=\"postIcons\" name=\"chatbubble-outline\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <ion-icon class=\"postIcons\" name=\"navigate-outline\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-col size=\"2\" slot=\"end\">\r\n    <ion-icon class=\"postIcons\" [name]=\"bookmark.name\" color=\"dark\" (click)=\"addToBookmarks(post.post_id)\"></ion-icon>\r\n  </ion-col></ion-item>\r\n\r\n\r\n  <!-- post description -->\r\n  <p class=\"ion-no-margin\">Liked by <span style=\"font-weight: bold;\">goalkeeper</span> and <span style=\"font-weight: bold;\">others</span></p>\r\n    <div *ngIf=\"comments\">\r\n      <p class=\"ion-no-margin\"><span style=\"font-weight: bold;\">{{comments[comments.length-1]?.username}}</span> {{comments[comments.length-1]?.user_comment}} </p>  \r\n      <p class=\"ion-no-margin\"><span style=\"font-weight: bold;\">{{comments[comments.length-2]?.username}}</span> {{comments[comments.length-2]?.user_comment}} </p>\r\n      <h6 [routerLink]=\"['/', 'comments', post.post_id]\" class=\"ion-no-margin\" color=\"medium\">View all {{comments?.length}} comments</h6>\r\n    </div>\r\n\r\n  <!-- add-comment box -->\r\n  <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n    <ion-row>\r\n    <ion-col size=\"3\">\r\n      <ion-avatar>\r\n        <ion-img class=\"commentProPic\" [src]=\"currentUser?.profile_pic\"></ion-img>\r\n      </ion-avatar>\r\n    </ion-col>\r\n    <ion-col size=\"7\">\r\n      <ion-label position=\"floating\" style=\"font-size: 12px;\" color=\"medium\">Add a comment...</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"comment\"></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-col size=\"0.1\" slot=\"end\">\r\n    <ion-icon (click)=\"addComment(comment, post.post_id)\" name=\"send-outline\"></ion-icon>\r\n  </ion-col>\r\n  <ion-col size=\"0.1\" slot=\"end\">\r\n    <ion-icon class=\"commentIcons\" name=\"heart\" color=\"danger\"></ion-icon>\r\n  </ion-col>\r\n  <ion-col size=\"0.1\" slot=\"end\" >\r\n      <ion-icon color=\"warning\" class=\"commentIcons\" name=\"hand-left\"></ion-icon>\r\n  </ion-col>\r\n  <ion-col size=\"0.1\" slot=\"end\">\r\n    <ion-icon class=\"commentIcons\" color=\"medium\" name=\"add-circle-outline\"></ion-icon>\r\n  </ion-col>\r\n  <ion-label> \r\n    <ion-note>5 hours ago</ion-note>  \r\n  </ion-label>\r\n</ion-item>\r\n</ion-content>\r\n\r\n\r\n";

/***/ }),

/***/ 6645:
/*!**********************************************************************************!*\
  !*** ./src/app/components/tabs-messages/tabs-messages.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\r\n  <ion-tab-bar slot=\"top\">\r\n    <ion-tab-button tab=\"chats\" (click)=\"chatClicked()\">\r\n      <ion-label> Chats  </ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"calls\" (click)=\"callsClicked()\">\r\n      <ion-label> Calls  </ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"requests\" (click)=\"requestsClicked()\">\r\n      <ion-label> Requests  </ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n\r\n<app-chats *ngIf=\"chat\"></app-chats>\r\n<app-calls *ngIf=\"calls\"></app-calls>\r\n";

/***/ }),

/***/ 5605:
/*!****************************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\r\n  <ion-tab-bar slot=\"top\">\r\n    <ion-tab-button tab=\"posts\">\r\n      <ion-icon name=\"apps\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tags\">\r\n      <ion-icon name=\"person-circle\"></ion-icon>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map