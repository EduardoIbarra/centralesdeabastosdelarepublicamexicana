import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MembershipService} from "../../services/membership.service";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    imgaes = [
        // {
        //     imageUrl: 'assets/img/carousel/1.jpg',
        //     quote: 'Mas de 115 años impulsando el Comercio y Turismo en Querétaro.',
        // },
        {
            imageUrl: 'assets/img/carousel/2.jpg',
            quote: 'Paga tu Predial en Febrero con un descuento del 8%',
        }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams, private membershipsService: MembershipService) {
      this.membershipsService.getMembership().valueChanges()
        .subscribe((response)=>{
          console.log(response);
        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

    goToPage(page) {
        this.navCtrl.push(page);
    }

}
