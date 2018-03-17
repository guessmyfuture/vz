webpackJsonp([9],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosDialogPageModule", function() { return VideosDialogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videos_dialog__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__videos_provider__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VideosDialogPageModule = (function () {
    function VideosDialogPageModule() {
    }
    VideosDialogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__videos_dialog__["a" /* VideosDialogPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__videos_dialog__["a" /* VideosDialogPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__videos_dialog__["a" /* VideosDialogPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__videos_provider__["a" /* VideosService */]
            ]
        })
    ], VideosDialogPageModule);
    return VideosDialogPageModule;
}());

//# sourceMappingURL=videos-dialog.module.js.map

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

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosDialogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videos_provider__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideosDialogPage = (function () {
    function VideosDialogPage(navCtrl, viewCtrl, toastCtrl, formBuilder, params, videosService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.videosService = videosService;
        this.loadingCtrl = loadingCtrl;
        this.videos = params.get('item');
        if (this.videos && this.videos.id) {
            this.videosService.find(this.videos.id).subscribe(function (data) {
                _this.videos = data;
            });
        }
        this.form = formBuilder.group({
            id: [params.get('item') ? this.videos.id : ''],
            titleEnglish: [params.get('item') ? this.videos.titleEnglish : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            titleTamil: [params.get('item') ? this.videos.titleTamil : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            videoUrl: [params.get('item') ? this.videos.videoUrl : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            date: [params.get('item') ? this.videos.date : '',],
            user: [params.get('item') ? this.videos.user : '',],
            descriptionEnglish: [params.get('item') ? this.videos.descriptionEnglish : '',],
            descriptionTamil: [params.get('item') ? this.videos.descriptionTamil : '',],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    VideosDialogPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * The user cancelled, dismiss without sending data back.
     */
    VideosDialogPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the videos, so return it
     * back to the presenter.
     */
    VideosDialogPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    VideosDialogPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        this.loader.present();
    };
    VideosDialogPage.prototype.onError = function (error) {
        console.error(error);
        var toast = this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
        toast.present();
    };
    VideosDialogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-videos-dialog',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/videos/videos-dialog.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Videos</ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="cancel()">\n                <span color="primary" showWhen="ios">\n                  {{ \'CANCEL_BUTTON\' | translate }}\n                </span>\n                <ion-icon name="md-close" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n            <span color="primary" showWhen="ios">\n              {{ \'DONE_BUTTON\' | translate }}\n            </span>\n            <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="save()">\n        <ion-list>\n            <ion-item [hidden]="!form.id">\n                <ion-label>ID</ion-label>\n                <ion-input type="hidden" id="id" formControlName="id" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Title English" formControlName="titleEnglish"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Title Tamil" formControlName="titleTamil"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Video Url" formControlName="videoUrl"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Date</ion-label>\n                <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date" id="field_date"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="User" formControlName="user"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-textarea placeholder="Description English" formControlName="descriptionEnglish" id="field_descriptionEnglish"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-textarea placeholder="Description Tamil" formControlName="descriptionTamil" id="field_descriptionTamil"></ion-textarea>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/videos/videos-dialog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__videos_provider__["a" /* VideosService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], VideosDialogPage);
    return VideosDialogPage;
}());

//# sourceMappingURL=videos-dialog.js.map

/***/ })

});
//# sourceMappingURL=9.js.map