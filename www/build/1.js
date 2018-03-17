webpackJsonp([1],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosDetailPageModule", function() { return VideosDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videos_detail__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__videos_provider__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VideosDetailPageModule = (function () {
    function VideosDetailPageModule() {
    }
    VideosDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__videos_detail__["a" /* VideosDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__videos_detail__["a" /* VideosDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__videos_detail__["a" /* VideosDetailPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__videos_provider__["a" /* VideosService */]]
        })
    ], VideosDetailPageModule);
    return VideosDetailPageModule;
}());

//# sourceMappingURL=videos-detail.module.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosService; });
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



var VideosService = (function () {
    function VideosService(http) {
        this.http = http;
        this.resourceUrl = __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */].API_URL + '/videos';
    }
    VideosService.prototype.create = function (videos) {
        return this.http.post(this.resourceUrl, videos);
    };
    VideosService.prototype.update = function (videos) {
        return this.http.put(this.resourceUrl, videos);
    };
    VideosService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id);
    };
    VideosService.prototype.query = function (req) {
        return this.http.get(this.resourceUrl);
    };
    VideosService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response', responseType: 'text' });
    };
    VideosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], VideosService);
    return VideosService;
}());

//# sourceMappingURL=videos.provider.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos_model__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videos_provider__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VideosDetailPage = (function () {
    function VideosDetailPage(modalCtrl, params, videosService, toastCtrl, loadingCtrl, sanitizer, storage) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.videosService = videosService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
        this.storage = storage;
        this.videos = new __WEBPACK_IMPORTED_MODULE_2__videos_model__["a" /* Videos */]();
        this.videos.id = params.get('id');
        this.storage.get('lang').then(function (val) {
            _this.lang = val;
        });
    }
    VideosDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.videosService.find(this.videos.id).subscribe(function (data) { return _this.videos = data; });
    };
    VideosDetailPage.prototype.open = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create('VideosDialogPage', { item: item });
        modal.onDidDismiss(function (videos) {
            if (videos) {
                _this.videosService.update(videos).subscribe(function (data) {
                    _this.videos = data;
                    var toast = _this.toastCtrl.create({ message: 'Videos updated successfully.', duration: 3000, position: 'middle' });
                    toast.present();
                }, function (error) { return console.error(error); });
            }
        });
        modal.present();
    };
    VideosDetailPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        this.loader.present();
    };
    VideosDetailPage.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    VideosDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-videos-detail',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/videos/videos-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Videos</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n<div class="center">\n				<h2 class="center" *ngIf="lang == \'en\'">{{videos.titleEnglish}}</h2>\n				<h2 class="center" *ngIf="lang == \'ta\'">{{videos.titleTamil}}</h2>\n				\n				<ion-badge item-end>{{videos.date | date:\'MMMM dd, yyyy \'}}</ion-badge>\n				</div>\n				<br/>\n<iframe [src]="transform(videos.videoUrl)" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="200"></iframe>\n\n<br/>\n\n<div [innerHtml]="videos.descriptionEnglish" *ngIf="lang == \'en\'"></div>\n<div [innerHtml]="videos.descriptionTamil" *ngIf="lang == \'ta\'"></div>\n\n\n<!--\n    <ion-list>\n        <ion-item>\n            <ion-label>Title English</ion-label>\n            <div item-content>\n                <span>{{videos.titleEnglish}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Title Tamil</ion-label>\n            <div item-content>\n                <span>{{videos.titleTamil}}</span>\n            </div>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Date</ion-label>\n            <div item-content>\n                <span>{{videos.date | date:\'medium\'}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>User</ion-label>\n            <div item-content>\n                <span>{{videos.user}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Description English</ion-label>\n            <div item-content>\n                <span>{{videos.descriptionEnglish}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Description Tamil</ion-label>\n            <div item-content>\n                <span>{{videos.descriptionTamil}}</span>\n            </div>\n        </ion-item>\n    </ion-list>\n\n    <button ion-button block (click)="open(videos)">{{ \'EDIT_BUTTON\' | translate }}</button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/videos/videos-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__videos_provider__["a" /* VideosService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], VideosDetailPage);
    return VideosDetailPage;
}());

//# sourceMappingURL=videos-detail.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Videos; });
var Videos = (function () {
    function Videos(id, titleEnglish, titleTamil, videoUrl, date, user, descriptionEnglish, descriptionTamil) {
        this.id = id;
        this.titleEnglish = titleEnglish;
        this.titleTamil = titleTamil;
        this.videoUrl = videoUrl;
        this.date = date;
        this.user = user;
        this.descriptionEnglish = descriptionEnglish;
        this.descriptionTamil = descriptionTamil;
    }
    return Videos;
}());

//# sourceMappingURL=videos.model.js.map

/***/ })

});
//# sourceMappingURL=1.js.map