webpackJsonp([8],{

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardPeoplePageModule", function() { return BoardPeoplePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board_people__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoardPeoplePageModule = (function () {
    function BoardPeoplePageModule() {
    }
    BoardPeoplePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__board_people__["a" /* BoardPeoplePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__board_people__["a" /* BoardPeoplePage */]),
            ],
        })
    ], BoardPeoplePageModule);
    return BoardPeoplePageModule;
}());

//# sourceMappingURL=board-people.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardPeoplePage; });
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


var BoardPeoplePage = (function () {
    function BoardPeoplePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.counselors = [
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/jaime-rebora.jpg', companyName: null, name: 'Lic. Jaime Rebora Mier' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/arturo-ruiz.jpg', companyName: null, name: 'Mtro. Finanzas Arturo Ruíz Galván' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/gabriel-sandoval.jpg', companyName: 'Grupo Concepto', name: 'Lic. Gabriel Eduardo Sandoval Carmona' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/armando-cinesio.jpg', companyName: null, name: 'Lic. Jose Armando Sinecio Rios' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/aron-ruvalcaba.jpg', companyName: null, name: 'Lic. Aarón Noé Ruvalcaba Pereida' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/dani-glz.jpg', companyName: null, name: 'Lic. Francisco Daniel Gonzalez Tirado' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/jose-luis-barron.jpg', companyName: null, name: 'Mtro. José Luis Barron Guevara' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/vero-leon.jpg', companyName: null, name: 'Lic. Veronica Abigail de León Marín' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/fer-urrieta.jpg', companyName: null, name: 'Lic. Fernando Urrieta Rangel' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/dolores-farfan.jpg', companyName: null, name: 'Lic. Ma. Dolores Farfan Pons' },
            { imgUrl: null, companyName: null, name: 'Lic. Fernando Vallejo Hagstotz' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/fer-montes.jpg', companyName: 'Mujeres en Acción', name: 'Lic. María Fernanda Montes Uribe' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/dani-mulktiva.jpg', companyName: null, name: 'Lic. Daniel Antonio Oliver Mendoza' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/memo-molina.jpg', companyName: 'Com. de Dulces y Botanas Carrusel', name: 'Lic. Guillermo Molina Pérez' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/cesar-aranday.jpg', companyName: 'Aranday & Asociados', name: 'C.P. Cesar Alberto Aranday Martínez' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/jose-oliva.jpg', companyName: 'Servisistemas Llantas', name: 'Ing. Jose Antonio Oliva Lora' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/juan-carlos-leal.jpg', companyName: 'Asesoría Computacional Empresarial S.A. de C.V.', name: 'Lic. Juan Carlos Leal García' },
            { imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/jaime-munoz.jpg', companyName: 'Tecnocomercial', name: 'Lic. Jaime Muñoz Bonilla' },
            { imgUrl: null, companyName: 'Cadena Comercial OXXO', name: 'Lic. Raul Ferrer Guerra' },
        ];
        var type = navParams.get('type');
        if (type === 0) {
            this.title = 'Consejeros';
            this.items = this.counselors;
        }
        if (type === 1)
            this.title = 'Administrativo';
        if (type === 2)
            this.title = 'Asesores';
    }
    BoardPeoplePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BoardPeoplePage');
    };
    BoardPeoplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-board-people',template:/*ion-inline-start:"/Users/gobae/PhpstormProjects/centralesdeabastosdelarepublicamexicana/mobile/src/pages/board/board-people/board-people.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="item-list">\n        <ion-grid>\n            <ion-row class="row" responsive-sm wrap *ngFor="let item of items">\n                <ion-card>\n                    <ion-card-content text-center text-wrap>\n                        <img [src]="item.imgUrl">\n                        <br/>\n                        {{item.name}}\n                    </ion-card-content>\n                </ion-card>\n            </ion-row>\n            <br/>\n\n            <!--<ion-row>-->\n            <!--<ion-col col-6>-->\n            <!--<ion-card>-->\n            <!--<ion-card-content text-center text-wrap>-->\n            <!--<img src="assets/img/benefits/gestoria.png">-->\n            <!--<br/>-->\n            <!--¿Sabes qué licencias son necesarias para el giro de tu negocio?-->\n            <!--</ion-card-content>-->\n            <!--</ion-card>-->\n            <!--</ion-col>-->\n            <!--</ion-row>-->\n        </ion-grid>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/gobae/PhpstormProjects/centralesdeabastosdelarepublicamexicana/mobile/src/pages/board/board-people/board-people.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], BoardPeoplePage);
    return BoardPeoplePage;
}());

//# sourceMappingURL=board-people.js.map

/***/ })

});
//# sourceMappingURL=8.js.map