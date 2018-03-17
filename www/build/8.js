webpackJsonp([8],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPageModule", function() { return VideosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videos__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__videos_provider__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VideosPageModule = (function () {
    function VideosPageModule() {
    }
    VideosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__videos__["a" /* VideosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__videos__["a" /* VideosPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__videos__["a" /* VideosPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__videos_provider__["a" /* VideosService */]]
        })
    ], VideosPageModule);
    return VideosPageModule;
}());

//# sourceMappingURL=videos.module.js.map

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

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos_provider__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideosPage = (function () {
    // todo: add pagination
    function VideosPage(navCtrl, videosService, modalCtrl, toastCtrl, loadingCtrl, sanitizer, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.videosService = videosService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
        this.storage = storage;
        this.videos = [];
        this.storage.get('lang').then(function (val) {
            _this.lang = val;
        });
    }
    VideosPage.prototype.ionViewDidLoad = function () {
        this.loadAll();
    };
    VideosPage.prototype.loadAll = function (refresher) {
        var _this = this;
        this.presentLoading();
        this.videosService.query().subscribe(function (response) {
            _this.videos = response;
            _this.loader.dismiss();
            if (typeof (refresher) !== 'undefined') {
                refresher.complete();
            }
        }, function (error) {
            console.error(error);
            _this.loader.dismiss();
            var toast = _this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
            toast.present();
        });
    };
    VideosPage.prototype.trackId = function (index, item) {
        return item.id;
    };
    VideosPage.prototype.open = function (slidingItem, item) {
        var _this = this;
        var modal = this.modalCtrl.create('VideosDialogPage', { item: item });
        modal.onDidDismiss(function (videos) {
            if (videos) {
                if (videos.id) {
                    _this.videosService.update(videos).subscribe(function (data) {
                        _this.loadAll();
                        var toast = _this.toastCtrl.create({ message: 'Videos updated successfully.', duration: 3000, position: 'middle' });
                        toast.present();
                        slidingItem.close();
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.videosService.create(videos).subscribe(function (data) {
                        _this.videos.push(data);
                        var toast = _this.toastCtrl.create({ message: 'Videos added successfully.', duration: 3000, position: 'middle' });
                        toast.present();
                    }, function (error) { return console.error(error); });
                }
            }
        });
        modal.present();
    };
    VideosPage.prototype.delete = function (videos) {
        var _this = this;
        this.videosService.delete(videos.id).subscribe(function () {
            var toast = _this.toastCtrl.create({ message: 'Videos deleted successfully.', duration: 3000, position: 'middle' });
            toast.present();
            _this.loadAll();
        }, function (error) { return console.error(error); });
    };
    VideosPage.prototype.detail = function (videos) {
        this.navCtrl.push('VideosDetailPage', { id: videos.id });
    };
    VideosPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    VideosPage.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    VideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-videos',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/videos/videos.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Videos</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="open()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<!-- todo: add elasticsearch support -->\n<ion-content padding>\n    <ion-refresher (ionRefresh)="loadAll($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n<ion-card *ngFor="let videos of videos; trackBy: trackId">\n  <ion-card-content>\n   <ion-card-title class="center" *ngIf="lang == \'en\'" (click)="detail(videos)">\n     {{videos.titleEnglish}}\n      </ion-card-title>\n	  <ion-card-title class="center" *ngIf="lang == \'ta\'" (click)="detail(videos)">\n     {{videos.titleTamil}}\n      </ion-card-title>\n	  \n   <p class="center" style="color:#fff;">{{videos.date | date:\'MMMM dd, yyyy \'}}</p>\n   <iframe [src]="transform(videos.videoUrl)" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="200"></iframe>\n  </ion-card-content>\n</ion-card>\n\n   <!-- <ion-list>\n        <ion-item-sliding *ngFor="let videos of videos; trackBy: trackId" #slidingItem>\n            <button ion-item (click)="detail(videos)">\n                <p>{{videos.titleEnglish}}</p>\n                <p>{{videos.titleTamil}}</p>\n                <p>{{videos.videoUrl}}</p>\n                <p>{{videos.date | date:\'medium\'}}</p>\n                <p>{{videos.user}}</p>\n                <p>{{videos.descriptionEnglish}}</p>\n                <p>{{videos.descriptionTamil}}</p>\n				<div class="center">\n				<h2>{{videos.titleEnglish}}</h2>\n				<ion-badge item-end>{{videos.date | date:\'MMMM dd, yyyy \'}}</ion-badge>\n				</div>\n            </button>\n			<ion-item-options>\n                <button ion-button color="primary" (click)="open(slidingItem, blog)">\n                    {{ \'EDIT_BUTTON\' | translate }}\n                </button>\n                <button ion-button color="danger" (click)="delete(videos)">\n                    {{ \'DELETE_BUTTON\' | translate }}\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>-->\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/videos/videos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__videos_provider__["a" /* VideosService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], VideosPage);
    return VideosPage;
}());

//# sourceMappingURL=videos.js.map

/***/ })

});
//# sourceMappingURL=8.js.map