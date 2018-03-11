import {Injectable} from '@angular/core';
import {AlertController, NavController} from "ionic-angular";

@Injectable()

export class AlertService {

    constructor(private alertCtrl: AlertController) {
    }


    incorrectLoginCredentials() {
        let alert = this.alertCtrl.create({
            title: 'Información incorrecta',
            message: 'Correo electrónico y/o contraseña incorrecto. Intenta de nuevo.',
            buttons: ['Cerrar']
        });
        alert.present();
    }
}