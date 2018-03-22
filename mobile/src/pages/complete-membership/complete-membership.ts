import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SharedService} from "../../services/shared.service";

@IonicPage()
@Component({
    selector: 'page-complete-membership',
    templateUrl: 'complete-membership.html',
})
export class CompleteMembershipPage {

    membershipEmail: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public sharedService: SharedService) {
        this.membershipEmail = navParams.get('email') || 'miguel@canaco.com'
    }

    goToPage(page) {
        this.navCtrl.push(page);
    }
}
