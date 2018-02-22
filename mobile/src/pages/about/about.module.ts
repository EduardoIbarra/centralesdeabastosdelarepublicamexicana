import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AboutPage} from './about';
import {AccordionListComponentModule} from "../../components/accordion-list/accordion-list.module";

@NgModule({
    declarations: [
        AboutPage,
    ],
    imports: [
        IonicPageModule.forChild(AboutPage),
        AccordionListComponentModule
    ],
    exports:[
        AboutPage
    ]
})
export class AboutPageModule {
}
