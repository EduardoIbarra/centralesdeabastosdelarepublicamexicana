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
import {IonicStorageModule, Storage} from '@ionic/storage';

// firebase.initializeApp(environment);
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {MembershipService} from "../services/membership.service";

export const firebaseConfig = {
  apiKey: "AIzaSyBAcoeRPY5dz3NYRTYM-pVHkCiqNd23udg",
  authDomain: "canacoqro-aa683.firebaseapp.com",
  databaseURL: "https://canacoqro-aa683.firebaseio.com",
  projectId: "canacoqro-aa683",
  storageBucket: "canacoqro-aa683.appspot.com",
  messagingSenderId: "635369272832"
};

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
        IonicStorageModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
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
        MembershipService
    ]
})
export class AppModule {
}
