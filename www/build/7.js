webpackJsonp([7],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDetailPageModule", function() { return AboutDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_detail__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_provider__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutDetailPageModule = (function () {
    function AboutDetailPageModule() {
    }
    AboutDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__about_detail__["a" /* AboutDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__about_detail__["a" /* AboutDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__about_detail__["a" /* AboutDetailPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__about_provider__["a" /* AboutService */]]
        })
    ], AboutDetailPageModule);
    return AboutDetailPageModule;
}());

//# sourceMappingURL=about-detail.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutService = (function () {
    function AboutService(http) {
        this.http = http;
        this.resourceUrl = __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */].API_URL + '/abouts';
    }
    AboutService.prototype.create = function (about) {
        return this.http.post(this.resourceUrl, about);
    };
    AboutService.prototype.update = function (about) {
        return this.http.put(this.resourceUrl, about);
    };
    AboutService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id);
    };
    AboutService.prototype.query = function (req) {
        return this.http.get(this.resourceUrl);
    };
    AboutService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response', responseType: 'text' });
    };
    AboutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AboutService);
    return AboutService;
}());

//# sourceMappingURL=about.provider.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_model__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_provider__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutDetailPage = (function () {
    function AboutDetailPage(modalCtrl, params, aboutService, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.aboutService = aboutService;
        this.toastCtrl = toastCtrl;
        this.about = new __WEBPACK_IMPORTED_MODULE_2__about_model__["a" /* About */]();
        this.about.id = params.get('id');
    }
    AboutDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.aboutService.find(this.about.id).subscribe(function (data) { return _this.about = data; });
    };
    AboutDetailPage.prototype.open = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create('AboutDialogPage', { item: item });
        modal.onDidDismiss(function (about) {
            if (about) {
                _this.aboutService.update(about).subscribe(function (data) {
                    _this.about = data;
                    var toast = _this.toastCtrl.create({ message: 'About updated successfully.', duration: 3000, position: 'middle' });
                    toast.present();
                }, function (error) { return console.error(error); });
            }
        });
        modal.present();
    };
    AboutDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about-detail',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/about/about-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>About</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n  \n  <div class="center"> Connect With Me</div>\n  \n  <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://cdn2.iconfinder.com/data/icons/social-media-2142/192/Facebook-128.png" width="50px">\n    </ion-avatar>\n    <h2>Natham_Viswanathan</h2>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-finn.png">\n    </ion-avatar>\n    <h2>Natham_Viswanathan</h2>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-finn.png">\n    </ion-avatar>\n    <h2>Natham_Viswanathan</h2>\n  </ion-item>\n   <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-finn.png">\n    </ion-avatar>\n    <h2>Natham_Viswanathan</h2>\n  </ion-item>\n   <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-finn.png">\n    </ion-avatar>\n    <h2>Natham_Viswanathan</h2>\n  </ion-item>\n</ion-list>\n  \n  \n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/about/about-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__about_provider__["a" /* AboutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], AboutDetailPage);
    return AboutDetailPage;
}());

//# sourceMappingURL=about-detail.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About; });
var About = (function () {
    function About(id, description) {
        this.id = id;
        this.description = description;
    }
    return About;
}());

//# sourceMappingURL=about.model.js.map

/***/ })

});
//# sourceMappingURL=7.js.map