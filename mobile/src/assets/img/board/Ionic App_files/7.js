webpackJsonp([7],{

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardPageModule", function() { return BoardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoardPageModule = (function () {
    function BoardPageModule() {
    }
    BoardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__board__["a" /* BoardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__board__["a" /* BoardPage */]),
            ],
        })
    ], BoardPageModule);
    return BoardPageModule;
}());

//# sourceMappingURL=board.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardPage = (function () {
    function BoardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BoardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BoardPage');
    };
    BoardPage.prototype.goToSubItems = function (itemType) {
        /*
        * 0 = Consejo
        * 1 = Administrativo
        * 2 = Asesores de Afiliación
        * */
        this.navCtrl.push('BoardPeoplePage', { type: itemType });
    };
    BoardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-board',template:/*ion-inline-start:"/Users/gobae/PhpstormProjects/centralesdeabastosdelarepublicamexicana/mobile/src/pages/board/board.html"*/'<ion-header>\n    <ion-navbar class="big-header-button">\n        <button ion-button menuToggle="left">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Directorio</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list no-lines class="board-item-list">\n        <ion-list-header text-center text-wrap class="title-border-bottom">Directorio CANACO</ion-list-header>\n\n        <button ion-item detail-none class="board-item" (tap)="goToSubItems(0)">\n            <ion-card>\n                <ion-card-content text-center text-wrap>\n                    <img src="assets/img/board/consejo.png">\n                    <br/>\n                    Consejo Directivo\n                </ion-card-content>\n            </ion-card>\n        </button>\n\n        <br/>\n        <button ion-item detail-none class="board-item" (tap)="goToSubItems(1)">\n            <ion-card>\n                <ion-card-content text-center text-wrap>\n                    <img src="assets/img/board/administrativo.png">\n                    <br/>\n                    Administrativo\n                </ion-card-content>\n            </ion-card>\n        </button>\n        <br/>\n        <button ion-item detail-none class="board-item" (tap)="goToSubItems(2)">\n            <ion-card>\n                <ion-card-content text-center text-wrap>\n                    <img src="assets/img/board/asesores.png">\n                    <br/>\n                    Asesores de Afiliación\n                </ion-card-content>\n            </ion-card>\n        </button>\n\n\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/gobae/PhpstormProjects/centralesdeabastosdelarepublicamexicana/mobile/src/pages/board/board.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], BoardPage);
    return BoardPage;
}());

//# sourceMappingURL=board.js.map

/***/ })

});
//# sourceMappingURL=7.js.map