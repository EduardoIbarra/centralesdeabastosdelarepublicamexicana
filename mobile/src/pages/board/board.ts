import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-board',
    templateUrl: 'board.html',
})
export class BoardPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BoardPage');
    }

    goToSubItems(itemType) {
        /*
        * 0 = Consejo
        * 1 = Administrativo
        * 2 = Asesores de Afiliación
        * */

        this.navCtrl.push('BoardPeoplePage', {type: itemType})
    }
}
