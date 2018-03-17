webpackJsonp([0],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesDialogPageModule", function() { return ImagesDialogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__albums__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_dialog__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_provider__ = __webpack_require__(750);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ImagesDialogPageModule = (function () {
    function ImagesDialogPageModule() {
    }
    ImagesDialogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__images_dialog__["a" /* ImagesDialogPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__images_dialog__["a" /* ImagesDialogPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__images_dialog__["a" /* ImagesDialogPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__images_provider__["a" /* ImagesService */],
                __WEBPACK_IMPORTED_MODULE_0__albums__["a" /* AlbumsService */],
            ]
        })
    ], ImagesDialogPageModule);
    return ImagesDialogPageModule;
}());

//# sourceMappingURL=images-dialog.module.js.map

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

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsDialogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__albums_provider__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumsDialogPage = (function () {
    function AlbumsDialogPage(navCtrl, viewCtrl, toastCtrl, formBuilder, params, albumsService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.albumsService = albumsService;
        this.loadingCtrl = loadingCtrl;
        this.albums = params.get('item');
        if (this.albums && this.albums.id) {
            this.albumsService.find(this.albums.id).subscribe(function (data) {
                _this.albums = data;
            });
        }
        this.form = formBuilder.group({
            id: [params.get('item') ? this.albums.id : ''],
            titleEnglish: [params.get('item') ? this.albums.titleEnglish : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            titleTamil: [params.get('item') ? this.albums.titleTamil : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            date: [params.get('item') ? this.albums.date : '',],
            user: [params.get('item') ? this.albums.user : '',],
            cover: [params.get('item') ? this.albums.cover : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    AlbumsDialogPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * The user cancelled, dismiss without sending data back.
     */
    AlbumsDialogPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the albums, so return it
     * back to the presenter.
     */
    AlbumsDialogPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    AlbumsDialogPage.prototype.onError = function (error) {
        console.error(error);
        var toast = this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
        toast.present();
    };
    AlbumsDialogPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        this.loader.present();
    };
    AlbumsDialogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-albums-dialog',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/albums/albums-dialog.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Albums</ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="cancel()">\n                <span color="primary" showWhen="ios">\n                  {{ \'CANCEL_BUTTON\' | translate }}\n                </span>\n                <ion-icon name="md-close" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n            <span color="primary" showWhen="ios">\n              {{ \'DONE_BUTTON\' | translate }}\n            </span>\n            <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="save()">\n        <ion-list>\n            <ion-item [hidden]="!form.id">\n                <ion-label>ID</ion-label>\n                <ion-input type="hidden" id="id" formControlName="id" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Title English" formControlName="titleEnglish"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Title Tamil" formControlName="titleTamil"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Date</ion-label>\n                <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date" id="field_date"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="User" formControlName="user"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Cover" formControlName="cover"></ion-input>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/albums/albums-dialog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__albums_provider__["a" /* AlbumsService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], AlbumsDialogPage);
    return AlbumsDialogPage;
}());

//# sourceMappingURL=albums-dialog.js.map

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

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__albums_model__ = __webpack_require__(755);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albums_provider__ = __webpack_require__(748);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__albums_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albums_dialog__ = __webpack_require__(757);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__albums_detail__ = __webpack_require__(756);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__albums__ = __webpack_require__(758);
/* unused harmony namespace reexport */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesDialogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_provider__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__albums__ = __webpack_require__(759);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImagesDialogPage = (function () {
    function ImagesDialogPage(navCtrl, viewCtrl, toastCtrl, formBuilder, params, albumsService, imagesService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.albumsService = albumsService;
        this.imagesService = imagesService;
        this.images = params.get('item');
        if (this.images && this.images.id) {
            this.imagesService.find(this.images.id).subscribe(function (data) {
                _this.images = data;
            });
        }
        this.form = formBuilder.group({
            id: [params.get('item') ? this.images.id : ''],
            imageUrl: [params.get('item') ? this.images.imageUrl : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            date: [params.get('item') ? this.images.date : '',],
            user: [params.get('item') ? this.images.user : '',],
            albums: [params.get('item') ? this.images.albumId : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ImagesDialogPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.albumsService.query()
            .subscribe(function (data) { _this.albums = data; }, function (error) { return _this.onError(error); });
    };
    /**
     * The user cancelled, dismiss without sending data back.
     */
    ImagesDialogPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the images, so return it
     * back to the presenter.
     */
    ImagesDialogPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    ImagesDialogPage.prototype.onError = function (error) {
        console.error(error);
        var toast = this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
        toast.present();
    };
    ImagesDialogPage.prototype.compareAlbums = function (first, second) {
        return first && second ? first.id === second.id : first === second;
    };
    ImagesDialogPage.prototype.trackAlbumsById = function (index, item) {
        return item.id;
    };
    ImagesDialogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-images-dialog',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/images/images-dialog.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Images</ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="cancel()">\n                <span color="primary" showWhen="ios">\n                  {{ \'CANCEL_BUTTON\' | translate }}\n                </span>\n                <ion-icon name="md-close" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n            <span color="primary" showWhen="ios">\n              {{ \'DONE_BUTTON\' | translate }}\n            </span>\n            <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="save()">\n        <ion-list>\n            <ion-item [hidden]="!form.id">\n                <ion-label>ID</ion-label>\n                <ion-input type="hidden" id="id" formControlName="id" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Image Url" formControlName="imageUrl"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Date</ion-label>\n                <ion-datetime displayFormat="MM/DD/YYYY" formControlName="date" id="field_date"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="User" formControlName="user"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Album</ion-label>\n                <ion-select id="field_album" formControlName="album" [compareWith]="compareAlbums" required>\n                    <ion-option *ngIf="!editForm.value.album" [value]="null" selected></ion-option>\n                    <ion-option [value]="albumsOption.id" *ngFor="let albumsOption of albums; trackBy: trackAlbumsById">{{albumsOption.titleEnglish}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <div [hidden]="!(editForm.controls.album?.dirty && editForm.controls.album?.invalid)">\n                <small [hidden]="!editForm.controls.album?.errors?.required">\n                    This field is required.\n                </small>\n            </div>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/images/images-dialog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__albums__["a" /* AlbumsService */],
            __WEBPACK_IMPORTED_MODULE_3__images_provider__["a" /* ImagesService */]])
    ], ImagesDialogPage);
    return ImagesDialogPage;
}());

//# sourceMappingURL=images-dialog.js.map

/***/ })

});
//# sourceMappingURL=0.js.map