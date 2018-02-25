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

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        CalendarModule,
        IonicModule.forRoot(MyApp, {
            platforms: {
                ios: {
                    backButtonText: 'Atrás'
                }
            }
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
        LaunchNavigator,
        EmailComposer,
        Clipboard,
    ]
})
export class AppModule {
}
