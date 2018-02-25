import {Injectable} from '@angular/core';
import {EmailComposer, EmailComposerOptions} from "@ionic-native/email-composer";
import {AlertController} from "ionic-angular";
import {Clipboard} from "@ionic-native/clipboard";
@Injectable()

export class SharedService {

    constructor(
        public emailComposer: EmailComposer,
        public alertCtrl: AlertController,
        public clipboard: Clipboard
    ) {}

    linkify(inputText) {
        let regex = new RegExp(
            "\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+",
            "g"
        );
        let output = inputText.replace(regex, function (m) {
            let match = m.replace(/ /g, '');
            return '<a href="tel:' + match + '">' + m + '</a>';
        });
        return output;
    };

    sendEmail(to) {
        let alert = this.alertCtrl.create({
            title: 'Enviar correo electrónico',
            message: '¿Desea enviar correo a ' + '<br/><b>' + to + '</b>?',
            buttons: [{
                text: 'Cancelar',
                role: 'cancel'
            }, {
                text: 'Enviar',
                handler: () => {
                    this.showEmailComposer(to);
                }
            }]
        });
        alert.present();
    }

    private showEmailComposer(to) {
        let email: EmailComposerOptions = {
            to: to,
        };

        this.emailComposer.open(email).then((data)=>{
            console.log(data);
            if(!data)this.showEmailComposerNotAvailable(to);
        }).catch((error)=>{
            console.log(error);
            this.showEmailComposerNotAvailable(to);
        });
    }

    private showEmailComposerNotAvailable(to) {
        this.clipboard.copy(to);
        let alert = this.alertCtrl.create({
            title: 'Ha ocurrido un error',
            message: 'Hemos copiado ' + '<b>' + to + '</b>' + ' al portapapeles para que envíes el correo manualmente. Disculpa las molestias.',
            buttons: ['Cerrar']
        });
        alert.present();
    }

}