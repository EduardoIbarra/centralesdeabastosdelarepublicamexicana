import {Component, Injectable, ViewChild} from '@angular/core';
import {NgbDatepicker, NgbDatepickerI18n, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
  'es': {
    weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  }
};

@Injectable()
export class I18n {
  language = 'es';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }

  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }

  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
}


import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

export interface PromptModel {
  user: any;
}

@Component({
  selector: 'show-membership-type-modal',
  templateUrl: './show-membership-type.component.html',
  styleUrls: ['show-membership-type.component.scss'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})

export class ShowMembershipTypeComponent extends DialogComponent<PromptModel, any> implements PromptModel {
  @ViewChild('d') calendar: NgbInputDatepicker;

  user: any = null;
  editEnabled: boolean = false;
  membership_typeForm: FormGroup;
  validRfcInput: boolean = true;
  validSocioInput: boolean = true;
  submitAttemptForm: boolean = false;
  activeSection: number = 1;

  minDate: NgbDateStruct = {
    year: 1940,
    month: 1,
    day: 1,

  };
  maxDate: NgbDateStruct = {
    year: parseInt(moment().format('YYYY')),
    month: 12,
    day: 31,
  };

  userData: any = {
    name: null,
    denominacion_social: null,
    gestoria: null,
    price: null,
    curp: null,
    fecha_nacimiento: null,
    pagina_web: null,
    correo_electronico: null,
    celular: null,
    telefono_casa: null,
    genero: null,
    imagenes: null,
    //Domicilio del usuario
    domicilio_personal: null,
    colonia: null,
    municipio: null,
    codigo_postal: null,
    entre_calles: null,
    //Domicilio del negocio
    dc_colonia: null,
    dc_entre_calles: null,
    dc_municipio: null,
    dc_telefono_local: null,
    domicilio_comercial: null,
    dc_codigo_postal: null,
  };


  constructor(dialogService: DialogService, private formBuilder: FormBuilder) {
    super(dialogService);

  }

  ngOnInit() {
    this.userData = Object.assign({}, this.user);
  }

  apply() {
    this.submitAttemptForm = false;

    //set value to null to avoid firebase error on save
    if (this.userData.name === undefined) this.userData.name = null;
    if (this.userData.telefono_casa === undefined) this.userData.telefono_casa = null;
    if (this.userData.curp === undefined) this.userData.curp = null;
    if (this.userData.codigo_postal === undefined) this.userData.codigo_postal = null;
    if (this.userData.dc_codigo_postal === undefined) this.userData.dc_codigo_postal = null;
    if (this.userData.dc_telefono_local === undefined) this.userData.dc_telefono_local = null;
    if (this.userData.pagina_web === undefined) this.userData.pagina_web = null;

    this.result = this.userData;
    this.close();

  }

  toggleSectionButton(sectionNumber) {
    this.activeSection = sectionNumber;
  }

  toggleEditCheckbox() {
    this.editEnabled = !this.editEnabled;
  }
}
