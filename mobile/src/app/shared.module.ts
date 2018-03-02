import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {AccordionListComponent} from "../components/accordion-list/accordion-list";
import {SideMenuContentComponent} from "../components/side-menu-content/side-menu-content.component";

@NgModule({
    declarations: [
        AccordionListComponent,
        SideMenuContentComponent
    ],
    imports: [
        IonicModule,
    ],
    exports: [
        AccordionListComponent,
        SideMenuContentComponent
    ]
})

export class SharedModule {
}
