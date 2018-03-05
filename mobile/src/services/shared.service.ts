import {Injectable} from '@angular/core';
import {EmailComposer, EmailComposerOptions} from "@ionic-native/email-composer";
import {AlertController, App, MenuController} from "ionic-angular";
import {Clipboard} from "@ionic-native/clipboard";
import {Storage} from "@ionic/storage";
@Injectable()

export class SharedService {

    LoggedUser: any;
    activePage: any;

    constructor(
        public emailComposer: EmailComposer,
        public alertCtrl: AlertController,
        public menu: MenuController,
        public app: App,
        public clipboard: Clipboard,
        public storage: Storage,
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

    logout() {
        this.LoggedUser = null;
        this.storage.set('LoggedUser', null);
        this.menu.enable(true, 'PublicUserMenu');
        this.menu.enable(false, 'LoggedUserMenu');
        let nav: any = this.app.getRootNavById('n4');
        nav.setRoot('HomePage');
    }

    SetLoggedUser(UserData){
        this.LoggedUser = {
            Email: UserData.email,
            Name: 'Miguel Hernández'
        };

        this.storage.set('LoggedUser', this.LoggedUser);
        this.activePage = 'HomePage';
        this.menu.enable(false, 'PublicUserMenu');
        this.menu.enable(true, 'LoggedUserMenu');
        let nav: any = this.app.getRootNavById('n4');
        nav.setRoot('HomePage');
    }

    //Higlight tab on sidemenu
    checkActive(page) {
        return page.component == this.activePage
    }
}