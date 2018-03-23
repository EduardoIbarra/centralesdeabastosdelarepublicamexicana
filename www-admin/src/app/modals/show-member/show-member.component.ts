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


import {Component, ViewChild} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

export interface PromptModel {
    user: any;
}

@Component({
    selector: 'show-member-modal',
    templateUrl: './show-member.component.html',
    styleUrls: ['show-member.component.scss'],
    providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})

export class ShowMemberComponent extends DialogComponent<PromptModel, any> implements PromptModel {
    @ViewChild('d') calendar: NgbInputDatepicker;

    user: any = null;
    editEnabled: boolean = false;
    membershipForm: FormGroup;
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
        clave_socio: null,
        denominacion_social: null,
        representante_legal: null,
        rfc: null,
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
        //Form validations

        this.userData = Object.assign({}, this.user);

        this.membershipForm = this.formBuilder.group({
            clave_socio: [this.user.clave_socio, Validators.compose([
                Validators.minLength(5),
            ])],
            denominacion_social: [this.user.denominacion_social, Validators.compose([
                Validators.required
            ])],
            representante_legal: [this.user.representante_legal, Validators.compose([
                Validators.required
            ])],
            rfc: [this.user.rfc, Validators.compose([
                Validators.required,
                Validators.minLength(12),
                Validators.maxLength(13),
                Validators.pattern('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$'),
            ])],
            telefono_casa: [this.user.telefono_casa, Validators.compose([
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('^[0-9]*$'),
            ])],
            celular: [this.user.celular, Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('^[0-9]*$'),
            ])],
            curp: [this.user.curp, Validators.compose([
                Validators.minLength(18),
                Validators.maxLength(18),
                Validators.pattern('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$'),
            ])],
            genero: [this.user.genero, Validators.compose([
                Validators.required
            ])],
            fecha_nacimiento: [this.user.fecha_nacimiento, Validators.compose([
                Validators.required
            ])],
            pagina_web: [this.user.pagina_web, Validators.compose([])],
            correo_electronico: [this.user.correo_electronico, Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                Validators.email
            ])],


            domicilio_personal: [this.user.domicilio_personal, Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            colonia: [this.user.colonia, Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            entre_calles: [this.user.entre_calles, Validators.compose([
                Validators.required,
                Validators.minLength(10)
            ])],
            municipio: [this.user.municipio, Validators.compose([
                Validators.required,
                Validators.minLength(5),
            ])],
            codigo_postal: [this.user.codigo_postal, Validators.compose([
                Validators.minLength(5),
                Validators.maxLength(5),
                Validators.pattern('^[0-9]*$'),
            ])],


            domicilio_comercial: [this.user.domicilio_comercial, Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            dc_colonia: [this.user.dc_colonia, Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            dc_municipio: [this.user.dc_municipio, Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            dc_entre_calles: [this.user.dc_entre_calles, Validators.compose([
                Validators.required,
                Validators.minLength(10),
            ])],
            dc_codigo_postal: [this.user.dc_codigo_postal, Validators.compose([
                Validators.minLength(5),
                Validators.maxLength(5),
                Validators.pattern('^[0-9]*$'),
            ])],
            dc_telefono_local: [this.user.dc_telefono_local, Validators.compose([
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('^[0-9]*$'),
            ])],
        });

        //Change chars to uppercase on change
        this.membershipForm.controls['rfc'].valueChanges.subscribe((Rfc) => {
            if (Rfc) this.userData.rfc = this.userData.rfc.toUpperCase();
            if (this.userData.denominacion_social === 'Fiscal' && this.userData.rfc) this.validRfcInput = this.userData.rfc.length === 13;
            if (this.userData.denominacion_social === 'Moral' && this.userData.rfc) this.validRfcInput = this.userData.rfc.length === 12;
        });

        this.membershipForm.controls['curp'].valueChanges.subscribe((curp) => {
            if (curp) this.user.curp = this.userData.curp.toUpperCase()
        });

        this.membershipForm.controls['clave_socio'].valueChanges.subscribe((clave_socio) => {
            if (clave_socio) {
                clave_socio = clave_socio.toString();
                this.validSocioInput = clave_socio.length >= 5;
            }
        });

        this.membershipForm.controls['denominacion_social'].valueChanges.subscribe(denominacion_social => {
            if (denominacion_social == 'Fiscal' && this.userData.rfc) this.validRfcInput = this.userData.rfc.length === 13;
            if (denominacion_social == 'Moral' && this.userData.rfc) this.validRfcInput = this.userData.rfc.length === 12;
        });

        this.membershipForm.controls['fecha_nacimiento'].valueChanges.subscribe(fecha_nacimiento => {
            if (fecha_nacimiento) this.userData.fecha_nacimiento.value = moment([fecha_nacimiento.year, fecha_nacimiento.month, fecha_nacimiento.day]).unix();
        });

        this.membershipForm.get('denominacion_social').disable();
        this.membershipForm.get('genero').disable();


        this.userData.fecha_nacimiento = {};
        this.userData.fecha_nacimiento.value = this.user.fecha_nacimiento;
        this.userData.fecha_nacimiento.text = {
            year: parseInt(moment.unix(this.userData.fecha_nacimiento.value).format('YYYY')),
            month: parseInt(moment.unix(this.userData.fecha_nacimiento.value).format('MM')),
            day: parseInt(moment.unix(this.userData.fecha_nacimiento.value).format('DD'))
        };

        console.log(this.userData);

    }

    apply() {
        if (this.membershipForm.valid) {
            this.submitAttemptForm = false;

            //set value to null to avoid firebase error on save
            if (this.userData.clave_socio === undefined) this.userData.clave_socio = null;
            if (this.userData.telefono_casa === undefined) this.userData.telefono_casa = null;
            if (this.userData.curp === undefined) this.userData.curp = null;
            if (this.userData.codigo_postal === undefined) this.userData.codigo_postal = null;
            if (this.userData.dc_codigo_postal === undefined) this.userData.dc_codigo_postal = null;
            if (this.userData.dc_telefono_local === undefined) this.userData.dc_telefono_local = null;
            if (this.userData.pagina_web === undefined) this.userData.pagina_web = null;

            this.result = this.userData;
            this.close();
        } else {
            this.submitAttemptForm = true;
        }

    }

    toggleSectionButton(sectionNumber) {
        this.activeSection = sectionNumber;
    }

    toggleEditCheckbox() {
        //if calendar is open
        if (this.calendar) this.calendar.close();
        this.editEnabled = !this.editEnabled;
        if (this.editEnabled) {
            this.membershipForm.get('denominacion_social').enable();
            this.membershipForm.get('genero').enable();
        } else {
            this.membershipForm.get('denominacion_social').disable();
            this.membershipForm.get('genero').disable();
        }

    }
}
