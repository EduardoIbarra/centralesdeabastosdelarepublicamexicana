import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, ModalController, NavController, NavParams, Slides} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CalendarModal, CalendarModalOptions, CalendarResult} from "ion2-calendar";
import * as moment from 'moment'

@IonicPage()
@Component({
    selector: 'page-register-form',
    templateUrl: 'register-form.html',
})
export class RegisterFormPage {

    @ViewChild(Slides) slides: Slides;
    @ViewChild(Content) content: Content;

    slideIndex: number = 0;
    RegisterForm1: FormGroup;
    RegisterForm2: FormGroup;
    RegisterForm3: FormGroup;

    submitAttemptForm1: boolean = false;
    submitAttemptForm2: boolean = false;
    submitAttemptForm3: boolean = false;

    RegisterFormData: any = {
        //First form slide
        PartnerKey: null,
        CompanyName: null,
        LegalRepresentative: null,
        Rfc: null,
        Curp: null,
        BirthDay: {
            text: null,
            value: null
        },
        WebPage: null,
        Email: null,
        Fax: null,
        LocalPhone: null,
        Cellphone: null,
        //Second form slide
        UserAddress: null,
        UserSettlement: null,
        UserStreets: null,
        UserCity: null,
        UserPostalCode: null,
        //Third form slide
        BusinessAddress: null,
        BusinessSettlement: null,
        BusinessStreets: null,
        BusinessPostalCode: null,
        BusinessPhone: null,
        BusinessCellphone: null,
        BusinessFax: null,
        BusinessEmail: null,
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public modalCtrl: ModalController
    ) {

        //Form validations
        this.RegisterForm1 = formBuilder.group({
            PartnerKey: ['', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])],
            CompanyName: ['', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])],
            LegalRepresentative: ['', Validators.compose([
                Validators.required
            ])],
            Rfc: ['', Validators.compose([
                Validators.required,
                Validators.minLength(13),
                Validators.maxLength(13),
                Validators.pattern('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$'),
            ])],
            LocalPhone: ['', Validators.compose([
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('/^\\d+$/'),
            ])],
            Cellphone: ['', Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('/^\\d+$/'),
            ])],
            Curp: ['', Validators.compose([
                Validators.required,
                Validators.minLength(18),
                Validators.maxLength(18),
                Validators.pattern('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$'),
            ])],
            BirthDay: ['', Validators.compose([
                Validators.required
            ])],
            WebPage: ['', Validators.compose([])],
            Email: ['', Validators.compose([
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                Validators.required
            ])],
            Fax: ['', Validators.compose([
                Validators.pattern('/^\\d+$/'),
            ])]
        });

        this.RegisterForm2 = formBuilder.group({
            UserAddress: ['', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])],
            UserSettlement: ['', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])],
            UserStreets: ['', Validators.compose([
                Validators.minLength(10),
                Validators.required
            ])],
            UserCity: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5),
            ])],
            UserPostalCode: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(5),
                Validators.pattern('/^\\d+$/'),
            ])],
        });

        this.RegisterForm3 = formBuilder.group({
            BusinessAddress: ['', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])],
            BusinessSettlement: ['', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])],
            BusinessStreets: ['', Validators.compose([
                Validators.required,
                Validators.minLength(10),
            ])],
            BusinessPostalCode: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(5),
                Validators.pattern('/^\\d+$/'),
            ])],
            BusinessPhone: ['', Validators.compose([
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('/^\\d+$/'),
            ])],
            BusinessCellphone: ['', Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('/^\\d+$/'),
            ])],
            BusinessFax: ['', Validators.compose([
                Validators.pattern('/^\\d+$/'),
            ])],
            BusinessEmail: ['', Validators.compose([
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                Validators.required
            ])],
        });
    }

    openCalendar() {
        const options: CalendarModalOptions = {
            title: 'Selecciona Fecha',
            autoDone: true,
            closeLabel: 'Cerrar'
        };
        let myCalendar = this.modalCtrl.create(CalendarModal, {
            options: options
        });

        myCalendar.present();

        myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
            console.log(date);
            if (date) {
                this.RegisterFormData.BirthDay.value = date.string;
                this.RegisterFormData.BirthDay.text = moment(date.string).format('LL');
            }
        })
    }

    ionViewDidLoad() {
        this.slides.lockSwipes(true);
    }

    transformToUppercase(inputType){
        if(inputType === 'RFC') this.RegisterFormData.Rfc = this.RegisterFormData.Rfc.toUpperCase();
        if(inputType === 'CURP')this.RegisterFormData.Curp = this.RegisterFormData.Curp.toUpperCase();
    }

    next() {
        this.slides.lockSwipes(false);
        this.content.scrollToTop(1000);
        this.slides.slideNext();
        this.slides.lockSwipes(true);

        if(this.slideIndex === 2){
            console.log(this.RegisterFormData);
        }
    }

    prev() {
        this.slides.lockSwipes(false);
        this.content.scrollToTop(1000);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
    }

    getSlideIndex(){
        this.slideIndex = this.slides.getActiveIndex();
    }

}