webpackJsonp([2],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionsDetailPageModule", function() { return SolutionsDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__solutions_detail__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__solutions_provider__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SolutionsDetailPageModule = (function () {
    function SolutionsDetailPageModule() {
    }
    SolutionsDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__solutions_detail__["a" /* SolutionsDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__solutions_detail__["a" /* SolutionsDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__solutions_detail__["a" /* SolutionsDetailPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__solutions_provider__["a" /* SolutionsService */]]
        })
    ], SolutionsDetailPageModule);
    return SolutionsDetailPageModule;
}());

//# sourceMappingURL=solutions-detail.module.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionsService; });
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



var SolutionsService = (function () {
    function SolutionsService(http) {
        this.http = http;
        this.resourceUrl = __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */].API_URL + '/solutions';
    }
    SolutionsService.prototype.create = function (solutions) {
        return this.http.post(this.resourceUrl, solutions);
    };
    SolutionsService.prototype.update = function (solutions) {
        return this.http.put(this.resourceUrl, solutions);
    };
    SolutionsService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id);
    };
    SolutionsService.prototype.query = function (req) {
        return this.http.get(this.resourceUrl);
    };
    SolutionsService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response', responseType: 'text' });
    };
    SolutionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SolutionsService);
    return SolutionsService;
}());

//# sourceMappingURL=solutions.provider.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solutions_model__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__solutions_provider__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SolutionsDetailPage = (function () {
    function SolutionsDetailPage(modalCtrl, params, solutionsService, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.solutionsService = solutionsService;
        this.toastCtrl = toastCtrl;
        this.solutions = new __WEBPACK_IMPORTED_MODULE_2__solutions_model__["a" /* Solutions */]();
        this.solutions.id = params.get('id');
    }
    SolutionsDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.solutionsService.find(this.solutions.id).subscribe(function (data) { return _this.solutions = data; });
    };
    SolutionsDetailPage.prototype.open = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create('SolutionsDialogPage', { item: item });
        modal.onDidDismiss(function (solutions) {
            if (solutions) {
                _this.solutionsService.update(solutions).subscribe(function (data) {
                    _this.solutions = data;
                    var toast = _this.toastCtrl.create({ message: 'Solutions updated successfully.', duration: 3000, position: 'middle' });
                    toast.present();
                }, function (error) { return console.error(error); });
            }
        });
        modal.present();
    };
    SolutionsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-solutions-detail',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/solutions/solutions-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Solutions</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label>Reply Description English</ion-label>\n            <div item-content>\n                <span>{{solutions.replyDescriptionEnglish}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Reply Description Tamil</ion-label>\n            <div item-content>\n                <span>{{solutions.replyDescriptionTamil}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Date</ion-label>\n            <div item-content>\n                <span>{{solutions.date | date:\'medium\'}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>User</ion-label>\n            <div item-content>\n                <span>{{solutions.user}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Issue Id</ion-label>\n            <div item-content>\n                <span>{{solutions.issueId}}</span>\n            </div>\n        </ion-item>\n    </ion-list>\n\n    <button ion-button block (click)="open(solutions)">{{ \'EDIT_BUTTON\' | translate }}</button>\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/solutions/solutions-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__solutions_provider__["a" /* SolutionsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], SolutionsDetailPage);
    return SolutionsDetailPage;
}());

//# sourceMappingURL=solutions-detail.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Solutions; });
var Solutions = (function () {
    function Solutions(id, replyDescriptionEnglish, replyDescriptionTamil, date, user, issueId) {
        this.id = id;
        this.replyDescriptionEnglish = replyDescriptionEnglish;
        this.replyDescriptionTamil = replyDescriptionTamil;
        this.date = date;
        this.user = user;
        this.issueId = issueId;
    }
    return Solutions;
}());

//# sourceMappingURL=solutions.model.js.map

/***/ })

});
//# sourceMappingURL=2.js.map