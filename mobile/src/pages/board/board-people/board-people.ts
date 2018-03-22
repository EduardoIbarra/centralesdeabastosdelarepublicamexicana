import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SharedService} from "../../../services/shared.service";


@IonicPage()
@Component({
    selector: 'page-board-people',
    templateUrl: 'board-people.html',
})
export class BoardPeoplePage {

    title: string;
    items: any = [];
    type: any;
    counselors: any = [
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/jaime-rebora.jpg', companyName: null, name: 'Lic. Jaime Rebora Mier'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/arturo-ruiz.jpg', companyName: null, name: 'Mtro. Finanzas Arturo Ruíz Galván'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/gabriel-sandoval.jpg', companyName: 'Grupo Concepto', name: 'Lic. Gabriel Eduardo Sandoval Carmona'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/armando-cinesio.jpg', companyName: null, name: 'Lic. Jose Armando Sinecio Rios'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/aron-ruvalcaba.jpg', companyName: null, name: 'Lic. Aarón Noé Ruvalcaba Pereida'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/dani-glz.jpg', companyName: null, name: 'Lic. Francisco Daniel Gonzalez Tirado'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/jose-luis-barron.jpg', companyName: null, name: 'Mtro. José Luis Barron Guevara'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/vero-leon.jpg', companyName: null, name: 'Lic. Veronica Abigail de León Marín'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/fer-urrieta.jpg', companyName: null, name: 'Lic. Fernando Urrieta Rangel'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/dolores-farfan.jpg', companyName: null, name: 'Lic. Ma. Dolores Farfan Pons'},
        {imgUrl: 'http://valmy.com/clubvalmy/wp-content/plugins/smg-theme-tools/public/images/not-available-es.png', companyName: null, name: 'Lic. Fernando Vallejo Hagstotz'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/fer-montes.jpg', companyName: 'Mujeres en Acción', name: 'Lic. María Fernanda Montes Uribe'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/dani-mulktiva.jpg', companyName: null, name: 'Lic. Daniel Antonio Oliver Mendoza'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/memo-molina.jpg', companyName: 'Com. de Dulces y Botanas Carrusel', name: 'Lic. Guillermo Molina Pérez'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/cesar-aranday.jpg', companyName: 'Aranday & Asociados', name: 'C.P. Cesar Alberto Aranday Martínez'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/jose-oliva.jpg', companyName: 'Servisistemas Llantas', name: 'Ing. Jose Antonio Oliva Lora'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/juan-carlos-leal.jpg', companyName: 'Asesoría Computacional Empresarial S.A. de C.V.', name: 'Lic. Juan Carlos Leal García'},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/jaime-munoz.jpg', companyName: 'Tecnocomercial', name: 'Lic. Jaime Muñoz Bonilla'},
        {imgUrl: 'http://valmy.com/clubvalmy/wp-content/plugins/smg-theme-tools/public/images/not-available-es.png', companyName: 'Cadena Comercial OXXO', name: 'Lic. Raul Ferrer Guerra'},
    ];

    admin: any = [
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2013/05/Berenice.jpg', phone: '5376430', ext: '118', email: 'bereniceresendiz@canacoqro.com.mx',},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/Mariethel-Ventas.jpg', phone: '5376430', ext: '115', email: 'mariethelnava@canacoqro.com.mx',},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/Laura-Ventas.jpg', phone: '5376430', ext: '121', email: 'lauraluz@canacoqro.com.mx',},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/Marisol-Ventas-.jpg', phone: '5376430', ext: '123', email: 'marisolortega@canacoqro.com.mx',},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/Veronica-Ventas.jpg', phone: '5376430', ext: '126', email: 'veronicaroque@canacoqro.com.mx',},
        {imgUrl: 'http://camaradecomercioqueretaro.com/wp-content/uploads/2018/02/Israel-Ventas.jpg', phone: '5376430', ext: '128', email: 'israelbecerra@canacoqro.com.mx',},
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams, public sharedService: SharedService) {
        this.type = navParams.get('type');

        if (this.type === 0) {
            this.title = 'Consejeros';
            this.items = this.counselors;
        }
        if (this.type === 1) {
            this.title = 'Administrativo';
            this.items = this.admin;
        }
        if (this.type === 2) {
            this.title = 'Asesores';
            this.items = this.admin;
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BoardPeoplePage');
    }

}
