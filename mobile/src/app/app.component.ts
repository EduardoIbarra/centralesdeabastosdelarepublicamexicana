import {Component, ViewChild} from '@angular/core';
import {AlertController, App, MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import * as moment from 'moment'
import {LoadingService} from "../services/loading.service";
import {MenuOptionModel} from "../components/side-menu-content/models/menu-option-model";
import {SideMenuSettings} from "../components/side-menu-content/models/side-menu-settings";
import {SideMenuContentComponent} from "../components/side-menu-content/side-menu-content.component";
import {SharedService} from "../services/shared.service";
import {Storage} from "@ionic/storage";

declare var Mercadopago: any;

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;
    rootPage: any = 'HomePage';
    activePage: any;
    LoggedUserPages: Array<{ title: string, component: any, icon: string }>;
    PublicUserPages: Array<{ title: string, component: any, icon: string }>;

    loggedUserSubMenu = new Array<MenuOptionModel>();
    sideMenuSettings: SideMenuSettings = {
        accordionMode: true,
        showSelectedOption: false,
    };

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                public alertCtrl: AlertController,
                public loadingService: LoadingService,
                public sharedService: SharedService,
                public app: App,
                public storage: Storage,
                public keyboard: Keyboard,
                public menu: MenuController,) {

        this.initializeApp();

        this.PublicUserPages = [
            {title: 'INICIO', component: 'HomePage', icon: 'home'},
            {title: '¡AFÍLIATE AHORA!', component: 'RegisterPage', icon: 'md-clipboard'},
            {title: 'INICIAR SESIÓN', component: 'LoginPage', icon: 'md-exit'},
            {title: 'DIRECTORIO', component: 'BoardPage', icon: 'md-book'},
            {title: 'BENEFICIOS', component: 'BenefitsPage', icon: 'logo-buffer'},
            {title: '¿QUÉ ES INFOX?', component: 'InfoxPage', icon: 'information-circle'},
            {title: '¿QUIENES SOMOS?', component: 'AboutPage', icon: 'ios-people'},
            {title: 'CONTÁCTANOS', component: 'ContactPage', icon: 'ios-chatbubbles'},
        ];

        this.LoggedUserPages = [
            {title: 'INICIO', component: 'HomePage', icon: 'home'},
            {title: 'DIRECTORIO', component: 'BoardPage', icon: 'md-book'},
            {title: 'BENEFICIOS', component: 'BenefitsPage', icon: 'logo-buffer'},
            {title: '¿QUÉ ES INFOX?', component: 'InfoxPage', icon: 'information-circle'},
            {title: '¿QUIENES SOMOS?', component: 'AboutPage', icon: 'ios-people'},
            {title: 'CONTÁCTANOS', component: 'ContactPage', icon: 'ios-chatbubbles'},
        ];

        moment.updateLocale('es', {
            monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Dicembre"],
            weekdaysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        });

        this.loggedUserSubMenu.push({
            displayName: 'MÁS',
            iconName: 'settings',
            subItems: [
                {
                    displayName: 'PERFIL',
                    iconName: 'ios-person',
                    component: 'ProfilePage',
                    custom: {
                        type: 'profile'
                    }
                },
                {
                    displayName: 'HISTORIAL',
                    iconName: 'logo-usd',
                    component: 'PaymentHistoryPage',
                    custom: {
                        type: ''
                    }
                },
                {
                    displayName: 'CAMBIAR CONTRASEÑA',
                    iconName: 'md-lock',
                    component: 'ChangePasswordPage',
                    custom: {
                        type: ''
                    }
                },
                {
                    displayName: 'CERRAR SESIÓN',
                    iconName: 'md-close',
                    // iconName: 'md-power',
                    custom: {
                        type: 'logout'
                    }
                }
            ]
        });
    }

    public selectOption(option: MenuOptionModel): void {
        this.sharedService.activePage = option.component;
        // this.sideMenu.collapseAllOptions();


        if (option.custom.type === 'logout') {
            this.loadingService.presentLoading();
            this.sharedService.activePage = this.PublicUserPages[0].component;
            this.sharedService.logout();
            this.menu.close();

            setTimeout(() => {
                this.loadingService.dismiss();
            }, 1000)
            return;
        }
        if (!option.component) return;

        this.menu.close();
        this.nav.setRoot(option.component);
    }


    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.keyboard.hideKeyboardAccessoryBar(false);

            this.storage.get('LoggedUser').then((LoggedUser) => {
                this.sharedService.LoggedUser = LoggedUser;

                this.menu.enable(false, 'PublicUserMenu');
                this.menu.enable(false, 'LoggedUserMenu');
                console.log('Logged user: ', this.sharedService.LoggedUser);
                if (this.sharedService.LoggedUser) {
                    this.sharedService.activePage = this.LoggedUserPages[0].component;
                    this.menu.enable(true, 'LoggedUserMenu');
                } else {
                    this.sharedService.activePage = this.PublicUserPages[0].component;
                    this.menu.enable(true, 'PublicUserMenu');
                }
            });

            this.mercadoPagoInit();
        });
    }

    openPage(page) {
        if (this.nav.getActive().name === 'RegisterFormPage') {
            this.showLeavingRegisterFormAlert(page);
        } else {
            this.nav.setRoot(page.component);
            this.sharedService.activePage = page.component;
            setTimeout(() => {
                this.sideMenu.collapseAllOptions();
            }, 300);
        }

    }

    showLeavingRegisterFormAlert(page) {
        let alert = this.alertCtrl.create({
            title: 'Cancelar Afiliación',
            message: 'La información que ha ingresado se perderá.',
            enableBackdropDismiss: false,
            buttons: [{
                text: 'Salir',
                cssClass: 'color-danger',
                handler: () => {
                    this.nav.setRoot(page.component);
                    this.sharedService.activePage = page.component;
                    setTimeout(() => {
                        this.sideMenu.collapseAllOptions();
                    }, 300);
                }
            }, {
                text: 'Seguir aquí',
                cssClass: 'color-primary-light bold',
            }]
        });

        alert.present();
    }

    mercadoPagoInit() {
        Mercadopago.setPublishableKey("TEST-5cd7fcdf-bd14-46d5-a741-8ea7b5ef68d7");
        let object = {'payment_method_id': 'visa'};
        Mercadopago.getPaymentMethod(object, (status, response)=>{
            console.log(response);
        });

        // Mercadopago.getIdentificationTypes((status, response)=>{
        //     console.log(response);
        // });
        // Mercadopago.getInstallments({
        //     "payment_method_id": "visa",
        //     "amount": 100
        // }, function (status, response) {
        //     // console.log(response);
        // });







        // OpenPay.setId('mrtezzirtht6piewm54o');
        // OpenPay.setApiKey('pk_c0a63b5356524d2095a0df7172965ed9');
        // OpenPay.setSandboxMode(true);
        //
        // // console.log(OpenPay.getSandboxMode());
        //
        // OpenPay.token.create({
        //     card_number: "4111111111111111",
        //     holder_name: "Juan Perez Ramirez",
        //     expiration_year: "20",
        //     expiration_month: "12",
        //     cvv2: "110",
        //     address: {
        //         city: "Querétaro",
        //         line3: "Queretaro",
        //         postal_code: "76900",
        //         line1: "Av 5 de Febrero",
        //         line2: "Roble 207",
        //         state: "Queretaro",
        //         country_code: "MX"
        //     }
        // }, (response) => {
        //     console.log(response);
        // }, (error) => {
        //     console.log(error);
        // });
    }
}
