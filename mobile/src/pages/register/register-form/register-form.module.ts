import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RegisterFormPage} from './register-form';
import {SharedModule} from "../../../app/shared.module";

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
