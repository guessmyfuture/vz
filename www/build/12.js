webpackJsonp([12],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemsPageModule", function() { return ProblemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__problems__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__problems_provider__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProblemsPageModule = (function () {
    function ProblemsPageModule() {
    }
    ProblemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__problems__["a" /* ProblemsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__problems__["a" /* ProblemsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__problems__["a" /* ProblemsPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__problems_provider__["a" /* ProblemsService */]]
        })
    ], ProblemsPageModule);
    return ProblemsPageModule;
}());

//# sourceMappingURL=problems.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemsService; });
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



var ProblemsService = (function () {
    function ProblemsService(http) {
        this.http = http;
        this.resourceUrl = __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */].API_URL + '/problems';
    }
    ProblemsService.prototype.create = function (problems) {
        return this.http.post(this.resourceUrl, problems);
    };
    ProblemsService.prototype.update = function (problems) {
        return this.http.put(this.resourceUrl, problems);
    };
    ProblemsService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id);
    };
    ProblemsService.prototype.query = function (req) {
        return this.http.get(this.resourceUrl);
    };
    ProblemsService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response', responseType: 'text' });
    };
    ProblemsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProblemsService);
    return ProblemsService;
}());

//# sourceMappingURL=problems.provider.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problems_provider__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProblemsPage = (function () {
    // todo: add pagination
    function ProblemsPage(navCtrl, problemsService, modalCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.problemsService = problemsService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.problems = [];
    }
    ProblemsPage.prototype.ionViewDidLoad = function () {
        this.loadAll();
    };
    ProblemsPage.prototype.loadAll = function (refresher) {
        var _this = this;
        this.presentLoading();
        this.problemsService.query().subscribe(function (response) {
            _this.problems = response;
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
    ProblemsPage.prototype.trackId = function (index, item) {
        return item.id;
    };
    ProblemsPage.prototype.open = function (slidingItem, item) {
        var _this = this;
        var modal = this.modalCtrl.create('ProblemsDialogPage', { item: item });
        modal.onDidDismiss(function (problems) {
            if (problems) {
                if (problems.id) {
                    _this.problemsService.update(problems).subscribe(function (data) {
                        _this.loadAll();
                        var toast = _this.toastCtrl.create({ message: 'Problems updated successfully.', duration: 3000, position: 'middle' });
                        toast.present();
                        slidingItem.close();
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.problemsService.create(problems).subscribe(function (data) {
                        _this.problems.push(data);
                        var toast = _this.toastCtrl.create({ message: 'Problems added successfully.', duration: 3000, position: 'middle' });
                        toast.present();
                    }, function (error) { return console.error(error); });
                }
            }
        });
        modal.present();
    };
    ProblemsPage.prototype.delete = function (problems) {
        var _this = this;
        this.problemsService.delete(problems.id).subscribe(function () {
            var toast = _this.toastCtrl.create({ message: 'Problems deleted successfully.', duration: 3000, position: 'middle' });
            toast.present();
            _this.loadAll();
        }, function (error) { return console.error(error); });
    };
    ProblemsPage.prototype.detail = function (problems) {
        this.navCtrl.push('ProblemsDetailPage', { id: problems.id });
    };
    ProblemsPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            duration: 3000
        });
        this.loader.present();
    };
    ProblemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-problems',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/problems/problems.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Problems</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="open()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<!-- todo: add elasticsearch support -->\n<ion-content padding>\n    <ion-refresher (ionRefresh)="loadAll($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n	<ion-card *ngFor="let problems of problems; trackBy: trackId" (click)="detail(problems)">\n  <ion-card-content *ngIf="problems.verified">\n    <ion-card-title class="center">\n     {{problems.title}}\n      </ion-card-title>\n   <p class="center" style="color:#fff;">{{problems.user}}</p>\n   <br/>\n   <p><span style="color: #fff;">{{problems.category}}</span><span style="float: right;color: #fff;">{{problems.date | date:\'MMMM dd, yyyy\'}}</span></p>\n  </ion-card-content>\n</ion-card>\n	\n	<!--\n    <ion-list>\n        <ion-item-sliding *ngFor="let problems of problems; trackBy: trackId" #slidingItem>\n            <button ion-item (click)="detail(problems)">\n                <h2>{{problems.title}}</h2>\n                <p>{{problems.description}}</p>\n                <p>{{problems.issueId}}</p>\n                <p>{{problems.category}}</p>\n                <p>{{problems.user}}</p>\n                <p>{{problems.date | date:\'medium\'}}</p>\n                <p>{{problems.verified}}</p>\n            </button>\n            <ion-item-options>\n                <button ion-button color="primary" (click)="open(slidingItem, blog)">\n                    {{ \'EDIT_BUTTON\' | translate }}\n                </button>\n                <button ion-button color="danger" (click)="delete(problems)">\n                    {{ \'DELETE_BUTTON\' | translate }}\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>-->\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/problems/problems.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__problems_provider__["a" /* ProblemsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ProblemsPage);
    return ProblemsPage;
}());

//# sourceMappingURL=problems.js.map

/***/ })

});
//# sourceMappingURL=12.js.map