import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoadingService} from "../../../services/loading.service";
import {AlertService} from "../../../services/alert.service";

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  user: any = {
    email: null
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingService: LoadingService,
    public alertService: AlertService,
  ) {
  }

  resetPassword() {
    this.loadingService.presentLoading();
    setTimeout(() => {
      this.loadingService.dismiss();
      this.alertService.resetPassword();
    }, 1500);
  }

  validMail(email: string) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

}
