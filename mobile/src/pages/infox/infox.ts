import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { Market } from '@ionic-native/market';

@IonicPage()
@Component({
  selector: 'page-infox',
  templateUrl: 'infox.html',
})
export class InfoxPage {

    packageName: any = {
        android: 'infox.buscador',
        ios: 'id1277925047',
    };

    isIos: boolean;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public platform: Platform,
      public market: Market
  ) {

  }

  ionViewDidLoad() {
      this.isIos = this.platform.is('ios');
  }

  openMarket(){
      if(this.isIos)this.market.open(this.packageName.ios);
      if(!this.isIos)this.market.open(this.packageName.android);
  }

}
