import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SharedService} from "../../services/shared.service";

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    items: any = [];

    constructor(
        public navCtrl: NavController,
        public sharedService: SharedService,
        public navParams: NavParams
    ) {
    }

    ionViewWillEnter() {
        this.items = [{
            title: '¿Por qué me beneficia ser miembro?',
            content: [{
                isItemList: false,
                text: 'Al pagar la membresía obtienes los siguientes beneficios:'
            }, {
                isItemList: true,
                text: 'Promoverse u obtener descuentos mediante el Grupo Comercial Canaco:'
            }, {
                isItemList: true,
                text: 'Curso gratuito de Habilidades Empresariales'
            }, {
                isItemList: true,
                text: 'Registro SIEM'
            }, {
                isItemList: true,
                text: 'Precios preferenciales en los servicios de salones, organización de eventos,  stands en expos y ferias, gestoría, bolsa de trabajo y contabilidad, entre otros.'
            },
            ]
        },
            {
                title: '¿Qué necesito para afíliarme?',
                content: [{
                    isItemList: true,
                    text: 'Copia del alta en Hacienda'
                }, {
                    isItemList: true,
                    text: 'Copia de R.F.C.'
                }, {
                    isItemList: true,
                    text: 'Copia de Acta Constitutiva (Sólo personas morales)'
                }, {
                    isItemList: true,
                    text: 'Comprobante de domicilio'
                }, {
                    isItemList: true,
                    text: 'Llenado de solicitud de Afiliación y SIEM (Para ambos casos y/o cualquiera de ellos)'
                }, {
                    isItemList: true,
                    text: 'Pago de Cuota de Afiliación'
                },
                ]
            },
            {
                title: '¿Cuáles son las formas de pago?',
                content: [{
                    isItemList: true,
                    text: 'Efectivo o cheque, tarjeta de crédito o débito (Directo en nuestras instalaciones)'
                }, {
                    isItemList: true,
                    text: 'Depósito bancario'
                }, {
                    isItemList: true,
                    text: 'Transferencia'
                },
                ]
            }, {
                title: 'Puede solicitar atención a través de:',
                content: [{
                    isItemList: false,
                    bold: true,
                    text: 'Lic. Berenice Reséndiz García.',
                    iconhasIcon: true,
                    icon: ''
                }, {
                    isItemList: false,
                    text: 'bereniceresendiz@canacoqro.com.mx',
                    hasIcon: true,
                    icon: 'md-mail-open'
                }, {
                    isItemList: false,
                    bold: true,
                    text: 'Teléfonos:',
                }, {
                    isItemList: false,
                    bold: true,
                    text: '(442) 537 64 30',
                    hasIcon: true,
                    phoneNumber: '(442) 537 64 30',
                    icon: 'ios-call'
                }, {
                    isItemList: false,
                    bold: true,
                    text: '(442) 537 53 01 ext. 118',
                    hasIcon: true,
                    phoneNumber: '442) 537 53 01',
                    ext: 'ext. 118',
                    icon: 'ios-call'
                },
                ]
            }
        ]
    }

    goToPage(page){
        this.navCtrl.push(page);
    }
}








