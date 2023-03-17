"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_home_home_module_ts"],{

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

/***/ 4874:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/home/home-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9200);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 6302:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 4874);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 9200);
/* harmony import */ var src_app_components_post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/post/post.component */ 3915);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage, src_app_components_post_post_component__WEBPACK_IMPORTED_MODULE_2__.PostComponent]
    })
], HomePageModule);



/***/ }),

/***/ 9200:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 2150);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 9801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);






let HomePage = class HomePage {
    constructor(actionSheetCtrl, api) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.api = api;
        this.isOpen = false;
        this.items = [
            {
                imgSrc: 'https://th.bing.com/th/id/OIP.1moOVABLsAl172i_UsaCMQHaF5?pid=ImgDet&rs=1',
            },
            {
                imgSrc: 'https://th.bing.com/th/id/OIP.pMg8F2rzkZJ0c_HpqT3HXAHaFj?w=244&h=184&c=7&r=0&o=5&dpr=1.6&pid=1.7',
            },
        ];
        this.getFollowingStories();
        this.getFollowingPosts();
        this.getCurrentUser();
        console.log('comments', this.postComments);
    }
    ngOnInit() { }
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.api.getUserPosts();
            const actionSheet = yield this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: 'Following',
                        role: 'destructive',
                        data: {
                            action: 'delete',
                        },
                        icon: 'people-outline',
                    },
                    {
                        text: 'Favorites',
                        data: {
                            action: 'share',
                        },
                        icon: 'star-outline',
                    },
                ],
            });
            yield actionSheet.present();
            const result = yield actionSheet.onDidDismiss();
            this.result = JSON.stringify(result, null, 2);
        });
    }
    navigateToMessages() { }
    presentPopover(event) {
        console.log(event);
        this.isOpen = true;
        this.storyImg = event.profilePic;
    }
    getCurrentUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.api.getCurrentUser().then((x) => (this.currentUser = x));
            console.log(this.currentUser);
        });
    }
    getFollowingStories() {
        this.api.getFollowingStories().then((x) => {
            this.followingStories = x;
            console.log('stories', x);
        });
    }
    getFollowingPosts() {
        this.api.getFollowingPosts().then((x) => {
            this.followingPosts = x;
            console.log('followingPosts', this.followingPosts);
        });
    }
    addPost() {
        this.api.addPost();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 3802:
/*!****************************************************************!*\
  !*** ./src/app/components/post/post.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  height: 55px;\n  padding-right: 20px;\n}\nion-toolbar ion-img {\n  margin-left: 10px;\n  margin-top: 15px;\n}\nion-toolbar ion-title {\n  padding-left: 0%;\n  margin-left: 0%;\n}\nh5 {\n  font-weight: bold;\n  font-family: cursive;\n}\n.postPic {\n  height: 270px;\n}\n.postIcons {\n  height: 30px;\n  width: 30px;\n  font-weight: bold;\n}\nion-content {\n  font-family: cursive;\n  height: 439px;\n}\n.commentProPic {\n  height: 30px;\n  width: 30px;\n  border-radius: 15px;\n  margin-left: 0px;\n  padding-left: 0px;\n}\n.commentIcons {\n  margin-top: 0px;\n  padding: 0px;\n}\nion-item {\n  height: 40px;\n}\nion-note {\n  font-size: 9px;\n}\nion-label {\n  margin-top: 15px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFFUjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVBO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoicG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGlvbi1pbWd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIGlvbi10aXRsZXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIH1cclxufVxyXG5cclxuaDV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbn1cclxuXHJcbi5wb3N0UGlje1xyXG4gICAgaGVpZ2h0OiAyNzBweDtcclxufVxyXG5cclxuLnBvc3RJY29uc3tcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxuICAgIGhlaWdodDogNDM5cHg7XHJcbn1cclxuXHJcbi5jb21tZW50UHJvUGlje1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4uY29tbWVudEljb25ze1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuaW9uLW5vdGV7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9801:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "span {\n  font-weight: bold;\n  font-family: cursive;\n}\n\n.badge {\n  height: 18px;\n  width: 18px;\n  border-radius: 9px;\n}\n\nion-img {\n  height: 20px;\n}\n\n.story {\n  background-color: rgb(223, 223, 223);\n  height: 80px;\n  width: 80px;\n  transform: translateY(-28%);\n}\n\nhr {\n  border-bottom: 0.1px solid rgb(215, 215, 215);\n}\n\n.horizontal-scroll {\n  overflow: auto;\n  white-space: nowrap;\n}\n\nion-chip {\n  height: 80px;\n  width: 80px;\n  border-radius: 40px;\n  padding-top: 0%;\n  margin-top: 0%;\n}\n\nion-avatar {\n  margin: 0%;\n  transform: translateX(-48%);\n}\n\n.storyContent {\n  height: 750px;\n  width: 250px;\n  transform: scale(160%);\n}\n\nng-template {\n  transform: translateY(-50%);\n}\n\nion-popover {\n  height: 750px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2Q0FBQTtBQUNKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksMkJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG59XHJcblxyXG4uYmFkZ2V7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuaW9uLWltZ3tcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnN0b3J5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI4JSk7ICAgIFxyXG59XHJcblxyXG5ocntcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkIHJnYigyMTUsIDIxNSwgMjE1KTtcclxufVxyXG5cclxuXHJcbi5ob3Jpem9udGFsLXNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbmlvbi1jaGlwe1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXJ7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00OCUpO1xyXG59XHJcblxyXG4uc3RvcnlDb250ZW50e1xyXG4gICAgaGVpZ2h0OiA3NTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTYwJSk7XHJcbn1cclxuXHJcbm5nLXRlbXBsYXRle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG5pb24tcG9wb3ZlcntcclxuICAgIGhlaWdodDogNzUwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 1916:
/*!****************************************************************!*\
  !*** ./src/app/components/post/post.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "  <ion-toolbar [routerLink]=\"['/', 'user-profile', post.user_id]\">\r\n    <ion-title> \r\n      <h5>{{post.username}}</h5>\r\n    </ion-title>\r\n\r\n    <ion-avatar slot=\"start\">\r\n      <ion-img class=\"commentProPic\" [src]=\"post.user_profile_url\"></ion-img>\r\n    </ion-avatar>\r\n      <ion-icon slot=\"end\" name=\"ellipsis-vertical-outline\"></ion-icon>\r\n  </ion-toolbar>\r\n\r\n<ion-content class=\"container\">\r\n\r\n  <!-- post -->\r\n  <ion-img class=\"postPic\" [src]=\"post.post_image_url\"></ion-img>\r\n\r\n\r\n  <!-- post-icons -->\r\n  <ion-item lines=\"none\">\r\n    <ion-row>\r\n    <ion-col size=\"4\">\r\n      <ion-icon (click)=\"changeHeart(post)\" class=\"postIcons\" [name]=\"heart.name\" [color]=\"heart.color\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"4\" [routerLink]=\"['/', 'comments', post.post_id]\">\r\n      <ion-icon class=\"postIcons\" name=\"chatbubble-outline\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <ion-icon class=\"postIcons\" name=\"navigate-outline\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-col size=\"2\" slot=\"end\">\r\n    <ion-icon class=\"postIcons\" [name]=\"bookmark.name\" color=\"dark\" (click)=\"addToBookmarks(post.post_id)\"></ion-icon>\r\n  </ion-col></ion-item>\r\n\r\n\r\n  <!-- post description -->\r\n  <p class=\"ion-no-margin\">Liked by <span style=\"font-weight: bold;\">goalkeeper</span> and <span style=\"font-weight: bold;\">others</span></p>\r\n    <div *ngIf=\"comments\">\r\n      <p class=\"ion-no-margin\"><span style=\"font-weight: bold;\">{{comments[comments.length-1]?.username}}</span> {{comments[comments.length-1]?.user_comment}} </p>  \r\n      <p class=\"ion-no-margin\"><span style=\"font-weight: bold;\">{{comments[comments.length-2]?.username}}</span> {{comments[comments.length-2]?.user_comment}} </p>\r\n      <h6 [routerLink]=\"['/', 'comments', post.post_id]\" class=\"ion-no-margin\" color=\"medium\">View all {{comments?.length}} comments</h6>\r\n    </div>\r\n\r\n  <!-- add-comment box -->\r\n  <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n    <ion-row>\r\n    <ion-col size=\"3\">\r\n      <ion-avatar>\r\n        <ion-img class=\"commentProPic\" [src]=\"currentUser?.profile_pic\"></ion-img>\r\n      </ion-avatar>\r\n    </ion-col>\r\n    <ion-col size=\"7\">\r\n      <ion-label position=\"floating\" style=\"font-size: 12px;\" color=\"medium\">Add a comment...</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"comment\"></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-col size=\"0.1\" slot=\"end\">\r\n    <ion-icon (click)=\"addComment(comment, post.post_id)\" name=\"send-outline\"></ion-icon>\r\n  </ion-col>\r\n  <ion-col size=\"0.1\" slot=\"end\">\r\n    <ion-icon class=\"commentIcons\" name=\"heart\" color=\"danger\"></ion-icon>\r\n  </ion-col>\r\n  <ion-col size=\"0.1\" slot=\"end\" >\r\n      <ion-icon color=\"warning\" class=\"commentIcons\" name=\"hand-left\"></ion-icon>\r\n  </ion-col>\r\n  <ion-col size=\"0.1\" slot=\"end\">\r\n    <ion-icon class=\"commentIcons\" color=\"medium\" name=\"add-circle-outline\"></ion-icon>\r\n  </ion-col>\r\n  <ion-label> \r\n    <ion-note>5 hours ago</ion-note>  \r\n  </ion-label>\r\n</ion-item>\r\n</ion-content>\r\n\r\n\r\n";

/***/ }),

/***/ 2150:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <span>Instagram</span> \r\n      <ion-icon name=\"chevron-down-outline\" (click)=\"presentActionSheet()\"></ion-icon>\r\n\r\n    </ion-title>\r\n    <ion-icon class=\"icon-only\" slot=\"end\" name=\"add-circle-outline\"></ion-icon>\r\n    <ion-icon [routerLink]=\"['/', 'messages']\" slot=\"end\" class=\"icon-only\" color=\"dark\" name=\"navigate-outline\" (click)=\"navigateToMessages()\"></ion-icon>\r\n    <ion-badge slot=\"end\" class=\"badge\" color=\"danger\">2</ion-badge>\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    \r\n  <!-- stories -->\r\n  <div class=\"horizontal-scroll\">\r\n    <ion-chip>\r\n      <ion-avatar>\r\n        <ion-img class=\"story\" [src]=\"currentUser?.profile_pic\" (click)=\"addPost()\"></ion-img>\r\n      </ion-avatar>\r\n    </ion-chip>\r\n    <ion-chip *ngFor=\"let user of followingStories\" (click)=\"presentPopover(user)\">\r\n      <ion-avatar>\r\n        <ion-img class=\"story\" [src]=\"user?.story_image_url\"></ion-img>\r\n      </ion-avatar>\r\n    </ion-chip>\r\n  </div>\r\n\r\n  <ion-popover class=\"ion-no-padding\" #popover [isOpen]=\"isOpen\" (didDismiss)=\"isOpen = false\">\r\n    <ng-template class=\"ion-no-padding\">\r\n        <ion-img class=\"storyContent ion-no-padding\" [src]=\"storyImg\"></ion-img>\r\n    </ng-template>\r\n  </ion-popover>\r\n\r\n  <hr>\r\n  <!--posts-->\r\n  <div *ngFor=\"let post of followingPosts\">\r\n  <app-post [post]=\"post\" [currentUser]=\"currentUser\" [savedPosts]=\"currentUser?.savedPosts\"></app-post>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_home_home_module_ts.js.map