webpackJsonp([19],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_provider__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__about__["a" /* AboutPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__about__["a" /* AboutPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__about_provider__["a" /* AboutService */]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutService; });
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



var AboutService = (function () {
    function AboutService(http) {
        this.http = http;
        this.resourceUrl = __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */].API_URL + '/abouts';
    }
    AboutService.prototype.create = function (about) {
        return this.http.post(this.resourceUrl, about);
    };
    AboutService.prototype.update = function (about) {
        return this.http.put(this.resourceUrl, about);
    };
    AboutService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id);
    };
    AboutService.prototype.query = function (req) {
        return this.http.get(this.resourceUrl);
    };
    AboutService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response', responseType: 'text' });
    };
    AboutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AboutService);
    return AboutService;
}());

//# sourceMappingURL=about.provider.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_provider__ = __webpack_require__(749);
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




var AboutPage = (function () {
    // todo: add pagination
    function AboutPage(navCtrl, aboutService, modalCtrl, toastCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.aboutService = aboutService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.abouts = [];
        this.storage.get('lang').then(function (val) {
            _this.lang = val;
        });
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.loadAll();
    };
    AboutPage.prototype.loadAll = function (refresher) {
        var _this = this;
        this.aboutService.query().subscribe(function (response) {
            _this.abouts = response;
            if (typeof (refresher) !== 'undefined') {
                refresher.complete();
            }
        }, function (error) {
            console.error(error);
            var toast = _this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
        });
    };
    AboutPage.prototype.trackId = function (index, item) {
        return item.id;
    };
    AboutPage.prototype.open = function (slidingItem, item) {
        var _this = this;
        var modal = this.modalCtrl.create('AboutDialogPage', { item: item });
        modal.onDidDismiss(function (about) {
            if (about) {
                if (about.id) {
                    _this.aboutService.update(about).subscribe(function (data) {
                        _this.loadAll();
                        var toast = _this.toastCtrl.create({ message: 'About updated successfully.', duration: 3000, position: 'middle' });
                        toast.present();
                        slidingItem.close();
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.aboutService.create(about).subscribe(function (data) {
                        _this.abouts.push(data);
                        var toast = _this.toastCtrl.create({ message: 'About added successfully.', duration: 3000, position: 'middle' });
                        toast.present();
                    }, function (error) { return console.error(error); });
                }
            }
        });
        modal.present();
    };
    AboutPage.prototype.delete = function (about) {
        var _this = this;
        this.aboutService.delete(about.id).subscribe(function () {
            var toast = _this.toastCtrl.create({ message: 'About deleted successfully.', duration: 3000, position: 'middle' });
            toast.present();
            _this.loadAll();
        }, function (error) { return console.error(error); });
    };
    AboutPage.prototype.detail = function (about) {
        this.navCtrl.push('AboutDetailPage', { id: about.id });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/about/about.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>About Me</ion-title>\n    </ion-navbar>\n</ion-header>\n<!-- todo: add elasticsearch support -->\n<ion-content padding>\n    <ion-refresher (ionRefresh)="loadAll($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <div class="center">\n	<img src="https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg" style="border-radius:5%"/>\n	<br/><br/>\n	<div *ngIf="lang == \'ta\'">\n	ஆர். விஸ்வநாதன், நத்தம் ஆர்.விஸ்வநாதன் எனவும் அழைக்கப்படுகிறார். விஸ்வநாதன் ஒரு இந்திய அரசியல்வாதியும் முன்னாள் நத்தம் சட்டமன்றத் தொகுதியின் சட்டமன்ற உறுப்பினரும் , முன்னாள் அமைச்சரும் ஆவார் . முன்னர், அவர் தமிழக சட்டமன்றத்தில் அண்ணா திராவிட முன்னேற்ற கழக வேட்பாளராக நத்தம் தொகுதியில் தேர்ந்தெடுக்கப்பட்டார். 2001, 2006 ஆம் ஆண்டுகளில் அவர் தொடர்ச்சியாக வெற்றி பெற்றார் 2011 தேர்தலில் மகத்தான வெற்றி பெற்றார்.\n	</div>\n	<div *ngIf="lang == \'en\'">\n	R. Viswanathan also known as Natham R. Viswanathan is an Indian politician and former member of the Tamil Nadu Legislative Assembly from Natham Constituency. He was the Minister for Electricity and Prohibition and Excise, Govt. of Tamil Nadu. Previously, he was elected to the Tamil Nadu legislative assembly as an Anna Dravida Munnetra Kazhagam candidate from Natham constituency in 1999. He has won consecutively in 2001, 2006 and 2011 elections in a landslide vote count.\n	</div>	\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/pandiyanchandrasegar/viz-mobile-app/src/pages/entities/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__about_provider__["a" /* AboutService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=19.js.map