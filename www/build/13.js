webpackJsonp([13],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemsDialogPageModule", function() { return ProblemsDialogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__problems_dialog__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__problems_provider__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProblemsDialogPageModule = (function () {
    function ProblemsDialogPageModule() {
    }
    ProblemsDialogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__problems_dialog__["a" /* ProblemsDialogPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__problems_dialog__["a" /* ProblemsDialogPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__problems_dialog__["a" /* ProblemsDialogPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__problems_provider__["a" /* ProblemsService */]
            ]
        })
    ], ProblemsDialogPageModule);
    return ProblemsDialogPageModule;
}());

//# sourceMappingURL=problems-dialog.module.js.map

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

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemsDialogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__problems_provider__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProblemsDialogPage = (function () {
    function ProblemsDialogPage(navCtrl, viewCtrl, toastCtrl, formBuilder, params, problemsService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.problemsService = problemsService;
        this.loadingCtrl = loadingCtrl;
        this.problems = params.get('item');
        if (this.problems && this.problems.id) {
            this.problemsService.find(this.problems.id).subscribe(function (data) {
                _this.problems = data;
            });
        }
        this.form = formBuilder.group({
            id: [params.get('item') ? this.problems.id : ''],
            title: [params.get('item') ? this.problems.title : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            description: [params.get('item') ? this.problems.description : '',],
            issueId: [params.get('item') ? this.problems.issueId : '',],
            category: [params.get('item') ? this.problems.category : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            user: [params.get('item') ? this.problems.user : '',],
            date: [params.get('item') ? this.problems.date : new Date(),],
            verified: [params.get('item') ? this.problems.verified : false,],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ProblemsDialogPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * The user cancelled, dismiss without sending data back.
     */
    ProblemsDialogPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the problems, so return it
     * back to the presenter.
     */
    ProblemsDialogPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    ProblemsDialogPage.prototype.onError = function (error) {
        console.error(error);
        var toast = this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
        toast.present();
    };
    ProblemsDialogPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        this.loader.present();
    };
    ProblemsDialogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-problems-dialog',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/problems/problems-dialog.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Problems</ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="cancel()">\n                <span color="primary" showWhen="ios">\n                  {{ \'CANCEL_BUTTON\' | translate }}\n                </span>\n                <ion-icon name="md-close" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n            <span color="primary" showWhen="ios">\n              {{ \'DONE_BUTTON\' | translate }}\n            </span>\n            <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n<br/>\n<br/>\n<br/>\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="save()">\n        <ion-list>\n            <ion-item>\n                <ion-input type="text" placeholder="Title" formControlName="title"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-textarea placeholder="Description" formControlName="description" id="field_description"></ion-textarea>\n            </ion-item>\n             <ion-item>\n    <ion-label>Category</ion-label>\n    <ion-select formControlName="category">\n      <ion-option value="Education problem">Education problem</ion-option>\n      <ion-option value="Water Problem">Water Problem</ion-option>\n	  <ion-option value="Electricity Problem">Electricity Problem</ion-option>\n	  <ion-option value="Human Rights Problem">Human Rights Problem</ion-option>\n    </ion-select>\n  </ion-item>\n			<ion-list>\n</ion-list>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/problems/problems-dialog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__problems_provider__["a" /* ProblemsService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], ProblemsDialogPage);
    return ProblemsDialogPage;
}());

//# sourceMappingURL=problems-dialog.js.map

/***/ })

});
//# sourceMappingURL=13.js.map