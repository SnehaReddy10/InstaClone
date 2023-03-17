"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_story_story_module_ts"],{

/***/ 6275:
/*!*****************************************************!*\
  !*** ./src/app/pages/story/story-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryPageRoutingModule": () => (/* binding */ StoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _story_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story.page */ 5761);




const routes = [
    {
        path: '',
        component: _story_page__WEBPACK_IMPORTED_MODULE_0__.StoryPage
    }
];
let StoryPageRoutingModule = class StoryPageRoutingModule {
};
StoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoryPageRoutingModule);



/***/ }),

/***/ 2102:
/*!*********************************************!*\
  !*** ./src/app/pages/story/story.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryPageModule": () => (/* binding */ StoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _story_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story-routing.module */ 6275);
/* harmony import */ var _story_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story.page */ 5761);







let StoryPageModule = class StoryPageModule {
};
StoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _story_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoryPageRoutingModule
        ],
        declarations: [_story_page__WEBPACK_IMPORTED_MODULE_1__.StoryPage]
    })
], StoryPageModule);



/***/ }),

/***/ 5761:
/*!*******************************************!*\
  !*** ./src/app/pages/story/story.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryPage": () => (/* binding */ StoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _story_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story.page.html?ngResource */ 9749);
/* harmony import */ var _story_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story.page.scss?ngResource */ 5571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StoryPage = class StoryPage {
    constructor() { }
    ngOnInit() {
    }
};
StoryPage.ctorParameters = () => [];
StoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-story',
        template: _story_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_story_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StoryPage);



/***/ }),

/***/ 5571:
/*!********************************************************!*\
  !*** ./src/app/pages/story/story.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9749:
/*!********************************************************!*\
  !*** ./src/app/pages/story/story.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-button (click)=\"\">Click Me</ion-button>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_story_story_module_ts.js.map