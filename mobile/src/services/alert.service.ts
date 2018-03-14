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

    errorTakingPicture() {
        let alert = this.alertCtrl.create({
            title: 'Ha ocurrido un error',
            message: 'Hemos tenido un problema al seleccionar la imagen, intenta de nuevo más tarde',
            buttons: ['Cerrar']
        });
        alert.present();
    }
}