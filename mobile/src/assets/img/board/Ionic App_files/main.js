webpackJsonp([10],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		406,
		1
	],
	"../pages/benefits/benefits.module": [
		407,
		9
	],
	"../pages/board/board-people/board-people.module": [
		408,
		8
	],
	"../pages/board/board.module": [
		409,
		7
	],
	"../pages/contact/contact.module": [
		410,
		6
	],
	"../pages/home/home.module": [
		411,
		5
	],
	"../pages/infox/infox.module": [
		414,
		4
	],
	"../pages/login/login.module": [
		412,
		3
	],
	"../pages/register/register-form/register-form.module": [
		415,
		2
	],
	"../pages/register/register.module": [
		413,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(348);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion2_calendar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_market__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            backButtonText: 'Atrás'
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/benefits/benefits.module#BenefitsPageModule', name: 'BenefitsPage', segment: 'benefits', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/board/board-people/board-people.module#BoardPeoplePageModule', name: 'BoardPeoplePage', segment: 'board-people', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/board/board.module#BoardPageModule', name: 'BoardPage', segment: 'board', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/infox/infox.module#InfoxPageModule', name: 'InfoxPage', segment: 'infox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register-form/register-form.module#RegisterFormPageModule', name: 'RegisterFormPage', segment: 'register-form', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_market__["a" /* Market */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 157,
	"./af.js": 157,
	"./ar": 158,
	"./ar-dz": 159,
	"./ar-dz.js": 159,
	"./ar-kw": 160,
	"./ar-kw.js": 160,
	"./ar-ly": 161,
	"./ar-ly.js": 161,
	"./ar-ma": 162,
	"./ar-ma.js": 162,
	"./ar-sa": 163,
	"./ar-sa.js": 163,
	"./ar-tn": 164,
	"./ar-tn.js": 164,
	"./ar.js": 158,
	"./az": 165,
	"./az.js": 165,
	"./be": 166,
	"./be.js": 166,
	"./bg": 167,
	"./bg.js": 167,
	"./bm": 168,
	"./bm.js": 168,
	"./bn": 169,
	"./bn.js": 169,
	"./bo": 170,
	"./bo.js": 170,
	"./br": 171,
	"./br.js": 171,
	"./bs": 172,
	"./bs.js": 172,
	"./ca": 173,
	"./ca.js": 173,
	"./cs": 174,
	"./cs.js": 174,
	"./cv": 175,
	"./cv.js": 175,
	"./cy": 176,
	"./cy.js": 176,
	"./da": 177,
	"./da.js": 177,
	"./de": 178,
	"./de-at": 179,
	"./de-at.js": 179,
	"./de-ch": 180,
	"./de-ch.js": 180,
	"./de.js": 178,
	"./dv": 181,
	"./dv.js": 181,
	"./el": 182,
	"./el.js": 182,
	"./en-au": 183,
	"./en-au.js": 183,
	"./en-ca": 184,
	"./en-ca.js": 184,
	"./en-gb": 185,
	"./en-gb.js": 185,
	"./en-ie": 186,
	"./en-ie.js": 186,
	"./en-nz": 187,
	"./en-nz.js": 187,
	"./eo": 188,
	"./eo.js": 188,
	"./es": 189,
	"./es-do": 190,
	"./es-do.js": 190,
	"./es-us": 191,
	"./es-us.js": 191,
	"./es.js": 189,
	"./et": 192,
	"./et.js": 192,
	"./eu": 193,
	"./eu.js": 193,
	"./fa": 194,
	"./fa.js": 194,
	"./fi": 195,
	"./fi.js": 195,
	"./fo": 196,
	"./fo.js": 196,
	"./fr": 197,
	"./fr-ca": 198,
	"./fr-ca.js": 198,
	"./fr-ch": 199,
	"./fr-ch.js": 199,
	"./fr.js": 197,
	"./fy": 200,
	"./fy.js": 200,
	"./gd": 201,
	"./gd.js": 201,
	"./gl": 202,
	"./gl.js": 202,
	"./gom-latn": 203,
	"./gom-latn.js": 203,
	"./gu": 204,
	"./gu.js": 204,
	"./he": 205,
	"./he.js": 205,
	"./hi": 206,
	"./hi.js": 206,
	"./hr": 207,
	"./hr.js": 207,
	"./hu": 208,
	"./hu.js": 208,
	"./hy-am": 209,
	"./hy-am.js": 209,
	"./id": 210,
	"./id.js": 210,
	"./is": 211,
	"./is.js": 211,
	"./it": 212,
	"./it.js": 212,
	"./ja": 213,
	"./ja.js": 213,
	"./jv": 214,
	"./jv.js": 214,
	"./ka": 215,
	"./ka.js": 215,
	"./kk": 216,
	"./kk.js": 216,
	"./km": 217,
	"./km.js": 217,
	"./kn": 218,
	"./kn.js": 218,
	"./ko": 219,
	"./ko.js": 219,
	"./ky": 220,
	"./ky.js": 220,
	"./lb": 221,
	"./lb.js": 221,
	"./lo": 222,
	"./lo.js": 222,
	"./lt": 223,
	"./lt.js": 223,
	"./lv": 224,
	"./lv.js": 224,
	"./me": 225,
	"./me.js": 225,
	"./mi": 226,
	"./mi.js": 226,
	"./mk": 227,
	"./mk.js": 227,
	"./ml": 228,
	"./ml.js": 228,
	"./mr": 229,
	"./mr.js": 229,
	"./ms": 230,
	"./ms-my": 231,
	"./ms-my.js": 231,
	"./ms.js": 230,
	"./mt": 232,
	"./mt.js": 232,
	"./my": 233,
	"./my.js": 233,
	"./nb": 234,
	"./nb.js": 234,
	"./ne": 235,
	"./ne.js": 235,
	"./nl": 236,
	"./nl-be": 237,
	"./nl-be.js": 237,
	"./nl.js": 236,
	"./nn": 238,
	"./nn.js": 238,
	"./pa-in": 239,
	"./pa-in.js": 239,
	"./pl": 240,
	"./pl.js": 240,
	"./pt": 241,
	"./pt-br": 242,
	"./pt-br.js": 242,
	"./pt.js": 241,
	"./ro": 243,
	"./ro.js": 243,
	"./ru": 244,
	"./ru.js": 244,
	"./sd": 245,
	"./sd.js": 245,
	"./se": 246,
	"./se.js": 246,
	"./si": 247,
	"./si.js": 247,
	"./sk": 248,
	"./sk.js": 248,
	"./sl": 249,
	"./sl.js": 249,
	"./sq": 250,
	"./sq.js": 250,
	"./sr": 251,
	"./sr-cyrl": 252,
	"./sr-cyrl.js": 252,
	"./sr.js": 251,
	"./ss": 253,
	"./ss.js": 253,
	"./sv": 254,
	"./sv.js": 254,
	"./sw": 255,
	"./sw.js": 255,
	"./ta": 256,
	"./ta.js": 256,
	"./te": 257,
	"./te.js": 257,
	"./tet": 258,
	"./tet.js": 258,
	"./th": 259,
	"./th.js": 259,
	"./tl-ph": 260,
	"./tl-ph.js": 260,
	"./tlh": 261,
	"./tlh.js": 261,
	"./tr": 262,
	"./tr.js": 262,
	"./tzl": 263,
	"./tzl.js": 263,
	"./tzm": 264,
	"./tzm-latn": 265,
	"./tzm-latn.js": 265,
	"./tzm.js": 264,
	"./uk": 266,
	"./uk.js": 266,
	"./ur": 267,
	"./ur.js": 267,
	"./uz": 268,
	"./uz-latn": 269,
	"./uz-latn.js": 269,
	"./uz.js": 268,
	"./vi": 270,
	"./vi.js": 270,
	"./x-pseudo": 271,
	"./x-pseudo.js": 271,
	"./yo": 272,
	"./yo.js": 272,
	"./zh-cn": 273,
	"./zh-cn.js": 273,
	"./zh-hk": 274,
	"./zh-hk.js": 274,
	"./zh-tw": 275,
	"./zh-tw.js": 275
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 384;

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = 'HomePage';
        this.initializeApp();
        this.pages = [
            { title: 'INICIO', component: 'HomePage', icon: 'home' },
            { title: '¡AFÍLIATE AHORA!', component: 'RegisterPage', icon: 'md-clipboard' },
            { title: 'INICIAR SESIÓN', component: 'LoginPage', icon: 'md-exit' },
            { title: 'DIRECTORIO', component: 'BoardPage', icon: 'md-book' },
            { title: 'BENEFICIOS', component: 'BenefitsPage', icon: 'logo-buffer' },
            { title: '¿QUÉ ES INFOX?', component: 'InfoxPage', icon: 'information-circle' },
            { title: '¿QUIENES SOMOS?', component: 'AboutPage', icon: 'ios-people' },
            { title: 'CONTÁCTANOS', component: 'ContactPage', icon: 'ios-chatbubbles' },
        ];
        this.activePage = this.pages[0];
        __WEBPACK_IMPORTED_MODULE_5_moment__["updateLocale"]('es', {
            monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Dicembre"],
            weekdaysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.keyboard.hideKeyboardAccessoryBar(false);
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
        this.activePage = page;
    };
    //Higlight tab on sidemenu
    MyApp.prototype.checkActive = function (page) {
        if (page.component == 'LanguageSelectionPage') {
            return false;
        }
        else {
            return page == this.activePage;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/gobae/PhpstormProjects/centralesdeabastosdelarepublicamexicana/mobile/src/app/app.html"*/'<ion-menu [content]="content" class="dark-menu">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>MENÚ</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose detail-none ion-item *ngFor="let p of pages" (tap)="openPage(p)" [class.activeHighlight]="checkActive(p)" class="menu-item">\n                <ion-icon [name]="p.icon"></ion-icon>\n                <div class="menu-item-border">\n                    {{p.title}}\n                </div>\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/gobae/PhpstormProjects/centralesdeabastosdelarepublicamexicana/mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[324]);
//# sourceMappingURL=main.js.map