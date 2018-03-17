webpackJsonp([3],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemsDetailPageModule", function() { return ProblemsDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__problems_detail__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__problems_provider__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProblemsDetailPageModule = (function () {
    function ProblemsDetailPageModule() {
    }
    ProblemsDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__problems_detail__["a" /* ProblemsDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__problems_detail__["a" /* ProblemsDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__problems_detail__["a" /* ProblemsDetailPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__problems_provider__["a" /* ProblemsService */]]
        })
    ], ProblemsDetailPageModule);
    return ProblemsDetailPageModule;
}());

//# sourceMappingURL=problems-detail.module.js.map

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

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problems_model__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__problems_provider__ = __webpack_require__(752);
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






var ProblemsDetailPage = (function () {
    function ProblemsDetailPage(modalCtrl, params, problemsService, toastCtrl, loadingCtrl, storage) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.problemsService = problemsService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.problems = new __WEBPACK_IMPORTED_MODULE_2__problems_model__["a" /* Problems */]();
        this.problems.id = params.get('id');
        this.storage.get('lang').then(function (val) {
            _this.lang = val;
        });
    }
    ProblemsDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.problemsService.find(this.problems.id).subscribe(function (data) { return _this.problems = data; });
    };
    ProblemsDetailPage.prototype.open = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create('ProblemsDialogPage', { item: item });
        modal.onDidDismiss(function (problems) {
            if (problems) {
                _this.problemsService.update(problems).subscribe(function (data) {
                    _this.problems = data;
                    var toast = _this.toastCtrl.create({ message: 'Problems updated successfully.', duration: 3000, position: 'middle' });
                    toast.present();
                }, function (error) { return console.error(error); });
            }
        });
        modal.present();
    };
    ProblemsDetailPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        this.loader.present();
    };
    ProblemsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-problems-detail',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/problems/problems-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Problems</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n<div class="center">\n				<h2 class="center">{{problems.title}}</h2>\n				<ion-badge item-end>{{problems.date | date:\'MMMM dd, yyyy \'}}</ion-badge>\n				<ion-badge color="secondary" item-end>{{problems.category}}</ion-badge>\n				<br/>\n				<br/>\n				<ion-badge color="danger">{{problems.user}}</ion-badge>\n				<br/>\n				<div [innerHtml]="problems.description"></div>\n				</div>\n				<hr>\n				\n				\n				\n				\n	<!--			\n    <ion-list>\n        <ion-item>\n            <ion-label>Title</ion-label>\n            <div item-content>\n                <span>{{problems.title}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Description</ion-label>\n            <div item-content>\n                <span>{{problems.description}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Issue Id</ion-label>\n            <div item-content>\n                <span>{{problems.issueId}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Category</ion-label>\n            <div item-content>\n                <span>{{problems.category}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>User</ion-label>\n            <div item-content>\n                <span>{{problems.user}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Date</ion-label>\n            <div item-content>\n                <span>{{problems.date | date:\'medium\'}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Verified</ion-label>\n            <div item-content>\n                <span>{{problems.verified}}</span>\n            </div>\n        </ion-item>\n    </ion-list>\n\n    <button ion-button block (click)="open(problems)">{{ \'EDIT_BUTTON\' | translate }}</button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/problems/problems-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__problems_provider__["a" /* ProblemsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ProblemsDetailPage);
    return ProblemsDetailPage;
}());

//# sourceMappingURL=problems-detail.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Problems; });
var Problems = (function () {
    function Problems(id, title, description, issueId, category, user, date, verified) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.issueId = issueId;
        this.category = category;
        this.user = user;
        this.date = date;
        this.verified = verified;
        this.verified = false;
    }
    return Problems;
}());

//# sourceMappingURL=problems.model.js.map

/***/ })

});
//# sourceMappingURL=3.js.map