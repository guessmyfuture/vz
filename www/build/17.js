webpackJsonp([17],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsPageModule", function() { return AlbumsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__albums__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__albums_provider__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AlbumsPageModule = (function () {
    function AlbumsPageModule() {
    }
    AlbumsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__albums__["a" /* AlbumsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__albums__["a" /* AlbumsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__albums__["a" /* AlbumsPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__albums_provider__["a" /* AlbumsService */]]
        })
    ], AlbumsPageModule);
    return AlbumsPageModule;
}());

//# sourceMappingURL=albums.module.js.map

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

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albums_provider__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumsPage = (function () {
    // todo: add pagination
    function AlbumsPage(navCtrl, albumsService, modalCtrl, toastCtrl, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.albumsService = albumsService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.albums = [];
        this.storage.get('lang').then(function (val) {
            _this.lang = val;
        });
    }
    AlbumsPage.prototype.ionViewDidLoad = function () {
        this.loadAll();
    };
    AlbumsPage.prototype.loadAll = function (refresher) {
        var _this = this;
        this.presentLoading();
        this.albumsService.query().subscribe(function (response) {
            _this.albums = response;
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
    AlbumsPage.prototype.trackId = function (index, item) {
        return item.id;
    };
    AlbumsPage.prototype.open = function (slidingItem, item) {
        var _this = this;
        var modal = this.modalCtrl.create('AlbumsDialogPage', { item: item });
        modal.onDidDismiss(function (albums) {
            if (albums) {
                if (albums.id) {
                    _this.albumsService.update(albums).subscribe(function (data) {
                        _this.loadAll();
                        var toast = _this.toastCtrl.create({ message: 'Albums updated successfully.', duration: 3000, position: 'middle' });
                        toast.present();
                        slidingItem.close();
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.albumsService.create(albums).subscribe(function (data) {
                        _this.albums.push(data);
                        var toast = _this.toastCtrl.create({ message: 'Albums added successfully.', duration: 3000, position: 'middle' });
                        toast.present();
                    }, function (error) { return console.error(error); });
                }
            }
        });
        modal.present();
    };
    AlbumsPage.prototype.delete = function (albums) {
        var _this = this;
        this.albumsService.delete(albums.id).subscribe(function () {
            var toast = _this.toastCtrl.create({ message: 'Albums deleted successfully.', duration: 3000, position: 'middle' });
            toast.present();
            _this.loadAll();
        }, function (error) { return console.error(error); });
    };
    AlbumsPage.prototype.detail = function (albums) {
        this.navCtrl.push('AlbumsDetailPage', { id: albums.id });
    };
    AlbumsPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loader.present();
    };
    AlbumsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-albums',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/albums/albums.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Portfolio</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="open()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<!-- todo: add elasticsearch support -->\n<ion-content padding>\n    <ion-refresher (ionRefresh)="loadAll($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n	<ion-card *ngFor="let albums of albums; trackBy: trackId" (click)="detail(albums)" >\n<img [src]="albums.cover"/>\n  <ion-card-content>\n     <ion-card-title class="center" *ngIf="lang == \'en\'">\n     {{albums.titleEnglish}}\n      </ion-card-title>\n	  <ion-card-title class="center" *ngIf="lang == \'ta\'">\n     {{albums.titleTamil}}\n      </ion-card-title>\n   <p class="center" style="color:#fff;">{{albums.date | date:\'MMMM dd, yyyy \'}}</p>\n  </ion-card-content>\n</ion-card>\n\n<!--\n    <ion-list>\n        <ion-item-sliding *ngFor="let albums of albums; trackBy: trackId" #slidingItem>\n            <button ion-item (click)="detail(albums)">\n                <p>{{albums.titleEnglish}}</p>\n                <p>{{albums.titleTamil}}</p>\n                <p>{{albums.date | date:\'medium\'}}</p>\n                <p>{{albums.user}}</p>\n                <p>{{albums.cover}}</p>\n            </button>\n            <ion-item-options>\n                <button ion-button color="primary" (click)="open(slidingItem, blog)">\n                    {{ \'EDIT_BUTTON\' | translate }}\n                </button>\n                <button ion-button color="danger" (click)="delete(albums)">\n                    {{ \'DELETE_BUTTON\' | translate }}\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>-->\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/albums/albums.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__albums_provider__["a" /* AlbumsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AlbumsPage);
    return AlbumsPage;
}());

//# sourceMappingURL=albums.js.map

/***/ })

});
//# sourceMappingURL=17.js.map