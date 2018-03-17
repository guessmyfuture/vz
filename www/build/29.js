webpackJsonp([29],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialConnectPageModule", function() { return SocialConnectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socialConnect__ = __webpack_require__(764);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SocialConnectPageModule = (function () {
    function SocialConnectPageModule() {
    }
    SocialConnectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__socialConnect__["a" /* SocialConnectPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__socialConnect__["a" /* SocialConnectPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__socialConnect__["a" /* SocialConnectPage */]
            ],
            providers: []
        })
    ], SocialConnectPageModule);
    return SocialConnectPageModule;
}());

//# sourceMappingURL=socialConnect.module.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialConnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialConnectPage = (function () {
    // todo: add pagination
    function SocialConnectPage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.storage.get('lang').then(function (val) {
            _this.lang = val;
        });
    }
    SocialConnectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-socialConnect',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/about/socialConnect.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Social Connect</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n  \n  <div class="center"><h2> Connect With Me</h2></div>\n  <br/>\n  <img src="http://cdn3.wpbeginner.com/wp-content/uploads/2017/08/socialnetworkbuddypress.png" style="border-radius:5%"/>\n  <br/><br/>\n  <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://cdn2.iconfinder.com/data/icons/social-media-2142/192/Facebook-128.png" width="50px">\n    </ion-avatar>\n    <h2>Natham_Viswanathan</h2>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://cdn2.iconfinder.com/data/icons/social-media-2142/192/Twitter-128.png" width="50px">\n    </ion-avatar>\n    <h2>Natham_Viswanathan</h2>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://cdn2.iconfinder.com/data/icons/social-media-2142/192/Youtube-128.png" width="50px">\n    </ion-avatar>\n    <h2>Natham_Viswanathan</h2>\n  </ion-item>\n   <ion-item>\n    <ion-avatar item-start>\n      <img src="https://cdn2.iconfinder.com/data/icons/social-media-2142/192/Instagram-128.png" width="50px">\n    </ion-avatar>\n    <h2>Natham_Viswanathan</h2>\n  </ion-item>\n   <ion-item>\n    <ion-avatar item-start>\n      <img src="https://cdn2.iconfinder.com/data/icons/social-media-2142/192/Google_Plus-128.png" width="50px">\n    </ion-avatar>\n    <h2>Natham_Viswanathan</h2>\n  </ion-item>\n   <ion-item>\n    <ion-avatar item-start>\n      <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/mail-128.png" width="50px">\n    </ion-avatar>\n    <h2>info@natham-viswanathan.com</h2>\n  </ion-item>\n</ion-list>\n  \n  \n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/about/socialConnect.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SocialConnectPage);
    return SocialConnectPage;
}());

//# sourceMappingURL=socialConnect.js.map

/***/ })

});
//# sourceMappingURL=29.js.map