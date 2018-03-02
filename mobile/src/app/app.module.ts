import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from "@ionic-native/keyboard";
import {CalendarModule} from "ion2-calendar";
import {Market} from '@ionic-native/market';
import {SharedService} from "../services/shared.service";
import {LaunchNavigator} from "@ionic-native/launch-navigator";
import {EmailComposer} from '@ionic-native/email-composer';
import {Clipboard} from "@ionic-native/clipboard";
// import * as firebase from "firebase";
// import {environment} from "../environments/environment";
import {LoadingService} from "../services/loading.service";
import {AlertService} from "../services/alert.service";
import {SideMenuContentComponent} from "../components/side-menu-content/side-menu-content.component";
import {SharedModule} from "./shared.module";

// firebase.initializeApp(environment);

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        CalendarModule,
        SharedModule,
        IonicModule.forRoot(MyApp, {
            platforms: {
                ios: {
                    backButtonText: 'Atrás'
                }
            },
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        StatusBar,
        SplashScreen,
        Keyboard,
        Market,
        SharedService,
        LoadingService,
        LaunchNavigator,
        AlertService,
        EmailComposer,
        Clipboard,
    ]
})
export class AppModule {
}
