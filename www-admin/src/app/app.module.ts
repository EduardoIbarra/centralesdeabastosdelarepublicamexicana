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
import { environment } from '../environments/environment';
import {MembershipsService} from './services/memberships.service';
const appRoutes: Routes = [
  {path: '', redirectTo: 'memberships', pathMatch: 'full'},
  {path: 'memberships', component: MembershipComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    MembershipComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    MembershipsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
