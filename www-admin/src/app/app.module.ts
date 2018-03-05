import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';

import { environment } from '../environments/environment';
import {MembershipComponent} from './memberships/membership.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {MembershipsService} from './services/memberships.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {ShowMemberComponent} from './modals/show-member/show-member.component';
const appRoutes: Routes = [
  {path: '', redirectTo: 'memberships', pathMatch: 'full'},
  {path: 'memberships', component: MembershipComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    MembershipComponent,
    ShowMemberComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    BootstrapModalModule
  ],
  providers: [
    MembershipsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ShowMemberComponent]
})
export class AppModule { }
