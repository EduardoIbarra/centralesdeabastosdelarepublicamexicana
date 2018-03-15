import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RegisterFormPage} from './register-form';
import {CalendarModule} from "ion2-calendar";
import {SharedModule} from "../../../app/shared.module";
import {TooltipsModule} from "ionic-tooltips";

@NgModule({
    declarations: [
        RegisterFormPage,
    ],
    imports: [
        IonicPageModule.forChild(RegisterFormPage),
        SharedModule,
    ],
    exports:[
        RegisterFormPage,
    ]
})
export class RegisterFormPageModule {
}
