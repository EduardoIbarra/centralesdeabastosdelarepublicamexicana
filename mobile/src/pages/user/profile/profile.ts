import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, Navbar, NavController, NavParams, Slides} from 'ionic-angular';
import {MembershipService} from "../../../services/membership.service";

import * as moment from 'moment'

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild('imagesSlider') imagesSlider: Slides;
  @ViewChild(Content) content: Content;
  @ViewChild(Navbar) navBar: Navbar;


  dataLoaded: boolean = false;
  user: any = {
    BirthDay: {
      value: null,
      text: null
    },
    Images: [],
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, private membershipsService: MembershipService) {
  }

  ionViewDidLoad() {
    this.membershipsService.getMembership().valueChanges()
      .subscribe((response) => {
        console.log(response);

        const user: any = response[3];
        //Datos de usuario
        this.user.PartnerKey = user.clave_socio || null;
        this.user.SocialDenomination = user.denominacion_social;
        this.user.LegalRepresentative = user.representante_legal;
        this.user.Rfc = user.rfc;
        this.user.Curp = user.curp || null;
        this.user.BirthDay.value = user.fecha_nacimiento;
        this.user.BirthDay.text = moment(user.fecha_nacimiento).format('DD/MMMM/YYYY');
        this.user.WebPage = user.pagina_web;
        this.user.Email = user.correo_electronico;
        this.user.Cellphone = user.celular;
        this.user.HomePhone = user.telefono_casa || null;
        this.user.Gender = user.genero === 'male' ? "Masculino" : "Femenino";
        this.user.Images = user.imagenes;
        //Domicilio del usuario
        this.user.UserAddress = user.domicilio_personal;
        this.user.UserSettlement = user.colonia;
        this.user.UserCity = user.municipio;
        this.user.UserPostalCode = user.codigo_postal || null;
        this.user.UserStreets = user.entre_calles;
        //Domicilio del negocio
        this.user.BusinessSettlement = user.dc_colonia;
        this.user.BusinessStreets = user.dc_entre_calles;
        this.user.BusinessCity = user.dc_municipio;
        this.user.BusinessPhone = user.dc_telefono_local || null;
        this.user.BusinessAddress = user.domicilio_comercial;
        this.user.BusinessPostalCode = user.dc_codigo_postal || null;
        this.dataLoaded = true;
        setTimeout(() => {
          this.slides.lockSwipes(true);
        }, 1000);

      })
  }


  prev() {
    this.slides.lockSwipes(false);
    this.content.scrollToTop(1000);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  next() {
    this.slides.lockSwipes(false);
    this.content.scrollToTop(1000);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

}
