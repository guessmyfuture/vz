webpackJsonp([11],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionsDialogPageModule", function() { return SolutionsDialogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__solutions_dialog__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__solutions_provider__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SolutionsDialogPageModule = (function () {
    function SolutionsDialogPageModule() {
    }
    SolutionsDialogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__solutions_dialog__["a" /* SolutionsDialogPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__solutions_dialog__["a" /* SolutionsDialogPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__solutions_dialog__["a" /* SolutionsDialogPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__solutions_provider__["a" /* SolutionsService */]
            ]
        })
    ], SolutionsDialogPageModule);
    return SolutionsDialogPageModule;
}());

//# sourceMappingURL=solutions-dialog.module.js.map

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

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionsDialogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
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




var SolutionsDialogPage = (function () {
    function SolutionsDialogPage(navCtrl, viewCtrl, toastCtrl, formBuilder, params, solutionsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.solutionsService = solutionsService;
        this.solutions = params.get('item');
        if (this.solutions && this.solutions.id) {
            this.solutionsService.find(this.solutions.id).subscribe(function (data) {
                _this.solutions = data;
            });
        }
        this.form = formBuilder.group({
            id: [params.get('item') ? this.solutions.id : ''],
            replyDescriptionEnglish: [params.get('item') ? this.solutions.replyDescriptionEnglish : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            replyDescriptionTamil: [params.get('item') ? this.solutions.replyDescriptionTamil : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            date: [params.get('item') ? this.solutions.date : '',],
            user: [params.get('item') ? this.solutions.user : '',],
            issueId: [params.get('item') ? this.solutions.issueId : '',],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    SolutionsDialogPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * The user cancelled, dismiss without sending data back.
     */
    SolutionsDialogPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the solutions, so return it
     * back to the presenter.
     */
    SolutionsDialogPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    SolutionsDialogPage.prototype.onError = function (error) {
        console.error(error);
        var toast = this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
        toast.present();
    };
    SolutionsDialogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-solutions-dialog',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/solutions/solutions-dialog.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Solutions</ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="cancel()">\n                <span color="primary" showWhen="ios">\n                  {{ \'CANCEL_BUTTON\' | translate }}\n                </span>\n                <ion-icon name="md-close" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n            <span color="primary" showWhen="ios">\n              {{ \'DONE_BUTTON\' | translate }}\n            </span>\n            <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="save()">\n        <ion-list>\n            <ion-item [hidden]="!form.id">\n                <ion-label>ID</ion-label>\n                <ion-input type="hidden" id="id" formControlName="id" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-textarea placeholder="Reply Description English" formControlName="replyDescriptionEnglish" id="field_replyDescriptionEnglish"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-textarea placeholder="Reply Description Tamil" formControlName="replyDescriptionTamil" id="field_replyDescriptionTamil"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-label>Date</ion-label>\n                <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date" id="field_date"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="User" formControlName="user"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Issue Id" formControlName="issueId"></ion-input>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/solutions/solutions-dialog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__solutions_provider__["a" /* SolutionsService */]])
    ], SolutionsDialogPage);
    return SolutionsDialogPage;
}());

//# sourceMappingURL=solutions-dialog.js.map

/***/ })

});
//# sourceMappingURL=11.js.map