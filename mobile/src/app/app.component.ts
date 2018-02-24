import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import * as moment from 'moment'

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = 'HomePage';
activePage: any;
    pages: Array<{ title: string, component: any, icon: string }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public keyboard: Keyboard) {
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

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.keyboard.hideKeyboardAccessoryBar(false);
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
