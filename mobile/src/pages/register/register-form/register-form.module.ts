import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RegisterFormPage} from './register-form';
import {CalendarModule} from "ion2-calendar";

@NgModule({
    declarations: [
        RegisterFormPage,
    ],
    imports: [
        IonicPageModule.forChild(RegisterFormPage),
        CalendarModule
    ],
    exports:[
        RegisterFormPage
    ]
})
export class RegisterFormPageModule {
}
