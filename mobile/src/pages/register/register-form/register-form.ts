import {Component, ViewChild} from '@angular/core';
import {AlertController, Content, IonicPage, Navbar, NavController, NavParams, Slides} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
    selector: 'page-register-form',
    templateUrl: 'register-form.html',
})
export class RegisterFormPage {

    @ViewChild(Slides) slides: Slides;
    @ViewChild(Content) content: Content;
    @ViewChild(Navbar) navBar: Navbar;

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
        BirthDay: null,
        WebPage: null,
        Email: null,
        HomePhone: null,
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
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public formBuilder: FormBuilder,
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
            HomePhone: ['', Validators.compose([
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
                Validators.minLength(5),
                Validators.maxLength(5),
                Validators.pattern('/^\\d+$/'),
            ])],
            BusinessPhone: ['', Validators.compose([
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('/^\\d+$/'),
            ])],
        });
    }

    ionViewDidLoad() {
        this.slides.lockSwipes(true);
        this.navBar.backButtonClick = (e: UIEvent) =>{
            this.showBackButtonAlert();
        }
    }

    showBackButtonAlert(){
        let alert = this.alertCtrl.create({
            title: 'Cancelar Afiliación',
            message: 'La información que ha ingresado se perderá.',
            enableBackdropDismiss: false,
            buttons: [{
                text: 'Salir',
                cssClass: 'color-danger',
                handler: () => {
                    this.navCtrl.pop();
                }
            },{
                text: 'Seguir aquí',
                cssClass: 'color-primary-light bold',
            }]
        });

        alert.present();
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