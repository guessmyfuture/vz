webpackJsonp([5],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesDetailPageModule", function() { return ImagesDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_detail__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_provider__ = __webpack_require__(750);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ImagesDetailPageModule = (function () {
    function ImagesDetailPageModule() {
    }
    ImagesDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__images_detail__["a" /* ImagesDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__images_detail__["a" /* ImagesDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__images_detail__["a" /* ImagesDetailPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__images_provider__["a" /* ImagesService */]]
        })
    ], ImagesDetailPageModule);
    return ImagesDetailPageModule;
}());

//# sourceMappingURL=images-detail.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesService; });
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



var ImagesService = (function () {
    function ImagesService(http) {
        this.http = http;
        this.resourceUrl = __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */].API_URL + '/images';
    }
    ImagesService.prototype.create = function (images) {
        return this.http.post(this.resourceUrl, images);
    };
    ImagesService.prototype.update = function (images) {
        return this.http.put(this.resourceUrl, images);
    };
    ImagesService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id);
    };
    ImagesService.prototype.query = function (req) {
        return this.http.get(this.resourceUrl);
    };
    ImagesService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response', responseType: 'text' });
    };
    ImagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ImagesService);
    return ImagesService;
}());

//# sourceMappingURL=images.provider.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_model__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_provider__ = __webpack_require__(750);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImagesDetailPage = (function () {
    function ImagesDetailPage(modalCtrl, params, imagesService, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.imagesService = imagesService;
        this.toastCtrl = toastCtrl;
        this.images = new __WEBPACK_IMPORTED_MODULE_2__images_model__["a" /* Images */]();
        this.images.id = params.get('id');
    }
    ImagesDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.imagesService.find(this.images.id).subscribe(function (data) { return _this.images = data; });
    };
    ImagesDetailPage.prototype.open = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create('ImagesDialogPage', { item: item });
        modal.onDidDismiss(function (images) {
            if (images) {
                _this.imagesService.update(images).subscribe(function (data) {
                    _this.images = data;
                    var toast = _this.toastCtrl.create({ message: 'Images updated successfully.', duration: 3000, position: 'middle' });
                    toast.present();
                }, function (error) { return console.error(error); });
            }
        });
        modal.present();
    };
    ImagesDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-images-detail',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/images/images-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Images</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label>Image Url</ion-label>\n            <div item-content>\n                <span>{{images.imageUrl}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Date</ion-label>\n            <div item-content>\n                <span>{{images.date | date:\'medium\'}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>User</ion-label>\n            <div item-content>\n                <span>{{images.user}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Album</ion-label>\n            <div item-content *ngIf="images.albumId">\n                <a>{{images.albumTitleEnglish}}</a>\n            </div>\n        </ion-item>\n    </ion-list>\n\n    <button ion-button block (click)="open(images)">{{ \'EDIT_BUTTON\' | translate }}</button>\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/images/images-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__images_provider__["a" /* ImagesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ImagesDetailPage);
    return ImagesDetailPage;
}());

//# sourceMappingURL=images-detail.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images; });
var Images = (function () {
    function Images(id, imageUrl, date, user, albumId) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.date = date;
        this.user = user;
        this.albumId = albumId;
    }
    return Images;
}());

//# sourceMappingURL=images.model.js.map

/***/ })

});
//# sourceMappingURL=5.js.map