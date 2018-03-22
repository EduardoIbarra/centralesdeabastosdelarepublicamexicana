import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompleteMembershipPage } from './complete-membership';

@NgModule({
  declarations: [
    CompleteMembershipPage,
  ],
  imports: [
    IonicPageModule.forChild(CompleteMembershipPage),
  ],
})
export class CompleteMembershipPageModule {}
