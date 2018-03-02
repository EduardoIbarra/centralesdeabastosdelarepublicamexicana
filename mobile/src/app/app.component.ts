import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import * as moment from 'moment'
import {LoadingService} from "../services/loading.service";
import {MenuOptionModel} from "../components/side-menu-content/models/menu-option-model";
import {SideMenuSettings} from "../components/side-menu-content/models/side-menu-settings";
import {SideMenuContentComponent} from "../components/side-menu-content/side-menu-content.component";

// import * as firebase from "firebase";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;
    rootPage: any = 'HomePage';
    activePage: any;
    pages: Array<{ title: string, component: any, icon: string }>;

    loggedUserSubMenu = new Array<MenuOptionModel>();
    sideMenuSettings: SideMenuSettings = {
        accordionMode: true,
        showSelectedOption: false,
        subOptionIndentation: {
            ios: '16px',
            md: '16px'
        }
    };

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public keyboard: Keyboard, public menu: MenuController,) {

        this.initializeApp();

        this.pages = [
            {title: 'INICIO', component: 'HomePage', icon: 'home'},
            {title: '¡AFÍLIATE AHORA!', component: 'RegisterPage', icon: 'md-clipboard'},
            {title: 'INICIAR SESIÓN', component: 'LoginPage', icon: 'md-exit'},
            {title: 'DIRECTORIO', component: 'BoardPage', icon: 'md-book'},
            {title: 'BENEFICIOS', component: 'BenefitsPage', icon: 'logo-buffer'},
            {title: '¿QUÉ ES INFOX?', component: 'InfoxPage', icon: 'information-circle'},
            {title: '¿QUIENES SOMOS?', component: 'AboutPage', icon: 'ios-people'},
            {title: 'CONTÁCTANOS', component: 'ContactPage', icon: 'ios-chatbubbles'},
        ];

        this.activePage = this.pages[0];

        moment.updateLocale('es', {
            monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Dicembre"],
            weekdaysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        });

        this.loggedUserSubMenu.push({
            displayName: 'MÁS',
            iconName: 'menu',
            subItems: [
                {
                    iconName: 'person',
                    displayName: 'PERFIL',
                    component: '',
                    custom: {
                        type: 'profile'
                    }
                },
                {
                    displayName: 'CERRAR SESIÓN',
                    iconName: 'log-out',
                    custom: {
                        type: 'logout'
                    }
                }
            ]
        });

    }

    public selectOption(option: MenuOptionModel): void {
        console.log(option);
        this.sideMenu.collapseAllOptions();

        this.menu.close();
        // Collapse all the options
        // this.nav.setRoot(option.component);
        // this.activePage = option.component;
    }



    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.keyboard.hideKeyboardAccessoryBar(false);


            // firebase.auth().onAuthStateChanged((user)=>{
            //     console.log('Firebase user: ' + user);
            // });
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
        this.activePage = page;
    }

    //Higlight tab on sidemenu
    checkActive(page) {
        if (page.component == 'LanguageSelectionPage') {
            return false;
        } else {
            return page == this.activePage;
        }
    }
}
