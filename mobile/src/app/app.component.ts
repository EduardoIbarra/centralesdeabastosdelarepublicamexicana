import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = 'HomePage';

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();


        this.pages = [
            {title: 'INICIO', component: 'HomePage'},
            {title: '¿QUIENES SOMOS?', component: 'AboutPage'},
            {title: '¡AFÍLIATE AHORA!', component: 'RegisterPage'},
            {title: 'BENEFICIOS', component: 'BenefitsPage'},
            {title: '¿QUÉ ES INFOX?', component: 'InfoxPage'},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}
