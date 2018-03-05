import {Component, ViewChild} from '@angular/core';
import {App, MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import * as moment from 'moment'
import {LoadingService} from "../services/loading.service";
import {MenuOptionModel} from "../components/side-menu-content/models/menu-option-model";
import {SideMenuSettings} from "../components/side-menu-content/models/side-menu-settings";
import {SideMenuContentComponent} from "../components/side-menu-content/side-menu-content.component";
import {SharedService} from "../services/shared.service";
import * as firebase from "firebase/app";
import {Storage} from "@ionic/storage";

// import * as firebase from "firebase";

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
        subOptionIndentation: {
            ios: '16px',
            md: '16px'
        }
    };

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
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

            setTimeout(()=>{
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


            // firebase.auth().onAuthStateChanged((user)=>{
            //     console.log('Firebase user: ' + user);
            // });

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


        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
        this.sharedService.activePage = page.component;
        setTimeout(() => {
            this.sideMenu.collapseAllOptions();
        }, 300);
    }
}
