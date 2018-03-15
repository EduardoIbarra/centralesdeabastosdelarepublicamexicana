import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {AccordionListComponent} from "../components/accordion-list/accordion-list";
import {SideMenuContentComponent} from "../components/side-menu-content/side-menu-content.component";
import {TooltipsModule} from "ionic-tooltips";
import {CalendarModule} from "ion2-calendar";

@NgModule({
    declarations: [
        AccordionListComponent,
        SideMenuContentComponent
    ],
    imports: [
        IonicModule,
        TooltipsModule,
        CalendarModule,
    ],
    exports: [
        AccordionListComponent,
        SideMenuContentComponent,
        TooltipsModule
    ]
})

export class SharedModule {
}
