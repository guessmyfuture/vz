webpackJsonp([6],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsDetailPageModule", function() { return AlbumsDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__albums_detail__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__albums_provider__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AlbumsDetailPageModule = (function () {
    function AlbumsDetailPageModule() {
    }
    AlbumsDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__albums_detail__["a" /* AlbumsDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__albums_detail__["a" /* AlbumsDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__albums_detail__["a" /* AlbumsDetailPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__albums_provider__["a" /* AlbumsService */]]
        })
    ], AlbumsDetailPageModule);
    return AlbumsDetailPageModule;
}());

//# sourceMappingURL=albums-detail.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsService; });
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



var AlbumsService = (function () {
    function AlbumsService(http) {
        this.http = http;
        this.resourceUrl = __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */].API_URL + '/albums';
    }
    AlbumsService.prototype.create = function (albums) {
        return this.http.post(this.resourceUrl, albums);
    };
    AlbumsService.prototype.update = function (albums) {
        return this.http.put(this.resourceUrl, albums);
    };
    AlbumsService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id);
    };
    AlbumsService.prototype.query = function (req) {
        return this.http.get(this.resourceUrl);
    };
    AlbumsService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response', responseType: 'text' });
    };
    AlbumsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AlbumsService);
    return AlbumsService;
}());

//# sourceMappingURL=albums.provider.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Albums; });
var Albums = (function () {
    function Albums(id, titleEnglish, titleTamil, date, user, cover) {
        this.id = id;
        this.titleEnglish = titleEnglish;
        this.titleTamil = titleTamil;
        this.date = date;
        this.user = user;
        this.cover = cover;
    }
    return Albums;
}());

//# sourceMappingURL=albums.model.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albums_model__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__albums_provider__ = __webpack_require__(748);
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






var AlbumsDetailPage = (function () {
    function AlbumsDetailPage(modalCtrl, params, albumsService, toastCtrl, loadingCtrl, storage) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.albumsService = albumsService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.images = [
            { imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg' },
            { imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg' },
            { imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg' },
            { imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg' },
            { imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg' },
            { imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg' },
            { imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg' },
            { imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg' },
        ];
        this.albums = new __WEBPACK_IMPORTED_MODULE_2__albums_model__["a" /* Albums */]();
        this.albums.id = params.get('id');
        this.storage.get('lang').then(function (val) {
            _this.lang = val;
        });
    }
    AlbumsDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.albumsService.find(this.albums.id).subscribe(function (data) { return _this.albums = data; });
    };
    AlbumsDetailPage.prototype.open = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create('AlbumsDialogPage', { item: item });
        modal.onDidDismiss(function (albums) {
            if (albums) {
                _this.albumsService.update(albums).subscribe(function (data) {
                    _this.albums = data;
                    var toast = _this.toastCtrl.create({ message: 'Albums updated successfully.', duration: 3000, position: 'middle' });
                    toast.present();
                }, function (error) { return console.error(error); });
            }
        });
        modal.present();
    };
    AlbumsDetailPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        this.loader.present();
    };
    AlbumsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-albums-detail',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/albums/albums-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Albums</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n<h2 class="center" *ngIf="lang == \'en\'">{{albums.titleEnglish}}</h2>\n<h2 class="center" *ngIf="lang == \'ta\'">{{albums.titleTamil}}</h2>\n				\n<p class="center">{{albums.date | date:\'MMMM dd, yyyy\'}}</p>\n\n\n<ion-card>\n<img [src]="albums.cover"/>\n</ion-card>\n<ion-card *ngFor="let images of images; trackBy: trackId">\n<img [src]="images.imageUrl"/>\n</ion-card>\n\n\n<!--\n    <ion-list>\n        <ion-item>\n            <ion-label>Title English</ion-label>\n            <div item-content>\n                <span>{{albums.titleEnglish}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Title Tamil</ion-label>\n            <div item-content>\n                <span>{{albums.titleTamil}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Date</ion-label>\n            <div item-content>\n                <span>{{albums.date | date:\'medium\'}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>User</ion-label>\n            <div item-content>\n                <span>{{albums.user}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Cover</ion-label>\n            <div item-content>\n                <span>{{albums.cover}}</span>\n            </div>\n        </ion-item>\n    </ion-list>\n\n    <button ion-button block (click)="open(albums)">{{ \'EDIT_BUTTON\' | translate }}</button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/albums/albums-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__albums_provider__["a" /* AlbumsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AlbumsDetailPage);
    return AlbumsDetailPage;
}());

//# sourceMappingURL=albums-detail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map