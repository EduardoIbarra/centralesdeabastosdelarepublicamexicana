import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RegisterPage} from './register';
import {AccordionListComponentModule} from "../../components/accordion-list/accordion-list.module";

@NgModule({
    declarations: [
        RegisterPage,
    ],
    imports: [
        IonicPageModule.forChild(RegisterPage),
        AccordionListComponentModule
    ],
    exports: [
        RegisterPage
    ]
})
export class RegisterPageModule {
}
