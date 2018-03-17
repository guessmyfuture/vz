webpackJsonp([4],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPageModule", function() { return NewsDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_detail__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_provider__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NewsDetailPageModule = (function () {
    function NewsDetailPageModule() {
    }
    NewsDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__news_detail__["a" /* NewsDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__news_detail__["a" /* NewsDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__news_detail__["a" /* NewsDetailPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__news_provider__["a" /* NewsService */]]
        })
    ], NewsDetailPageModule);
    return NewsDetailPageModule;
}());

//# sourceMappingURL=news-detail.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
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



var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.resourceUrl = __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */].API_URL + '/news';
    }
    NewsService.prototype.create = function (news) {
        return this.http.post(this.resourceUrl, news);
    };
    NewsService.prototype.update = function (news) {
        return this.http.put(this.resourceUrl, news);
    };
    NewsService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id);
    };
    NewsService.prototype.query = function (req) {
        return this.http.get(this.resourceUrl);
    };
    NewsService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response', responseType: 'text' });
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], NewsService);
    return NewsService;
}());

//# sourceMappingURL=news.provider.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_model__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_provider__ = __webpack_require__(751);
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






var NewsDetailPage = (function () {
    function NewsDetailPage(modalCtrl, params, newsService, toastCtrl, loadingCtrl, storage) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.newsService = newsService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.news = new __WEBPACK_IMPORTED_MODULE_2__news_model__["a" /* News */]();
        this.news.id = params.get('id');
        this.storage.get('lang').then(function (val) {
            _this.lang = val;
            console.log(_this.lang);
        });
    }
    NewsDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.newsService.find(this.news.id).subscribe(function (data) { return _this.news = data; });
    };
    NewsDetailPage.prototype.open = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create('NewsDialogPage', { item: item });
        modal.onDidDismiss(function (news) {
            if (news) {
                _this.newsService.update(news).subscribe(function (data) {
                    _this.news = data;
                    var toast = _this.toastCtrl.create({ message: 'News updated successfully.', duration: 3000, position: 'middle' });
                    toast.present();
                }, function (error) { return console.error(error); });
            }
        });
        modal.present();
    };
    NewsDetailPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        this.loader.present();
    };
    NewsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-news-detail',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/news/news-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>News</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n<div class="center">\n				<h2 class="center" *ngIf="lang == \'en\'">{{news.titleEnglish}}</h2>\n				<h2 class="center" *ngIf="lang == \'ta\'">{{news.titleTamil}}</h2>\n				<ion-badge item-end>{{news.date | date:\'MMMM dd, yyyy \'}}</ion-badge>\n				</div>\n				<br/>\n<img [src]="news.coverUrl" style="border-radius:5px;"/>\n\n<br/>\n<br/>\n<div [innerHtml]="news.descriptionEnglish" *ngIf="lang == \'en\'"></div>\n<div [innerHtml]="news.descriptionTamil" *ngIf="lang == \'ta\'"></div>\n\n<!--\n    <ion-list>\n        <ion-item>\n            <ion-label>Title English</ion-label>\n            <div item-content>\n                <span>{{news.titleEnglish}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Title Tamil</ion-label>\n            <div item-content>\n                <span>{{news.titleTamil}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Cover Url</ion-label>\n            <div item-content>\n                <span>{{news.coverUrl}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Description English</ion-label>\n            <div item-content>\n                <span>{{news.descriptionEnglish}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Description Tamil</ion-label>\n            <div item-content>\n                <span>{{news.descriptionTamil}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Date</ion-label>\n            <div item-content>\n                <span>{{news.date | date:\'medium\'}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>User</ion-label>\n            <div item-content>\n                <span>{{news.user}}</span>\n            </div>\n        </ion-item>\n    </ion-list>\n\n    <button ion-button block (click)="open(news)">{{ \'EDIT_BUTTON\' | translate }}</button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/news/news-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__news_provider__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], NewsDetailPage);
    return NewsDetailPage;
}());

//# sourceMappingURL=news-detail.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
var News = (function () {
    function News(id, titleEnglish, titleTamil, coverUrl, descriptionEnglish, descriptionTamil, date, user) {
        this.id = id;
        this.titleEnglish = titleEnglish;
        this.titleTamil = titleTamil;
        this.coverUrl = coverUrl;
        this.descriptionEnglish = descriptionEnglish;
        this.descriptionTamil = descriptionTamil;
        this.date = date;
        this.user = user;
    }
    return News;
}());

//# sourceMappingURL=news.model.js.map

/***/ })

});
//# sourceMappingURL=4.js.map