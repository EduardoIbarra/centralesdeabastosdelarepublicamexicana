import {Component, ViewChild} from '@angular/core';
import {AlertController, Content, IonicPage, Navbar, NavController, NavParams, Slides} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as moment from 'moment'
import {MembershipService} from "../../../services/membership.service";
import {LoadingService} from "../../../services/loading.service";
import {AlertService} from "../../../services/alert.service";

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
    validRfcInput: boolean = true;

    RegisterFormData: any = {
        //First form slide
        PartnerKey: null,
        SocialDenomination: null,
        LegalRepresentative: null,
        Rfc: null,
        Curp: null,
        BirthDay: {
            value: null,
            text: null
        },
        Gender: null,
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
        BusinessCity: null,
        BusinessSettlement: null,
        BusinessStreets: null,
        BusinessPostalCode: null,
        BusinessPhone: null,
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public membershipService: MembershipService,
                public loadingService: LoadingService,
                public alertCtrl: AlertController,
                public formBuilder: FormBuilder,) {

        //Form validations
        this.RegisterForm1 = formBuilder.group({
            PartnerKey: ['', Validators.compose([
                Validators.minLength(5),
            ])],
            SocialDenomination: ['', Validators.compose([
                Validators.required
            ])],
            LegalRepresentative: ['', Validators.compose([
                Validators.required
            ])],
            Rfc: ['', Validators.compose([
                Validators.required,
                Validators.minLength(12),
                Validators.maxLength(13),
                Validators.pattern('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$'),
            ])],
            HomePhone: ['', Validators.compose([
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('^[0-9]*$'),
            ])],
            Cellphone: ['', Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('^[0-9]*$'),
            ])],
            Curp: ['', Validators.compose([
                Validators.minLength(18),
                Validators.maxLength(18),
                Validators.pattern('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$'),
            ])],
            Gender: ['', Validators.compose([
                Validators.required
            ])],
            BirthDay: ['', Validators.compose([
                Validators.required
            ])],
            WebPage: ['', Validators.compose([])],
            Email: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])],
        });

        this.RegisterForm2 = formBuilder.group({
            UserAddress: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            UserSettlement: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            UserStreets: ['', Validators.compose([
                Validators.required,
                Validators.minLength(10)
            ])],
            UserCity: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5),
            ])],
            UserPostalCode: ['', Validators.compose([
                Validators.minLength(5),
                Validators.maxLength(5),
                Validators.pattern('^[0-9]*$'),
            ])],
        });

        this.RegisterForm3 = formBuilder.group({
            BusinessAddress: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            BusinessSettlement: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            BusinessCity: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            BusinessStreets: ['', Validators.compose([
                Validators.required,
                Validators.minLength(10),
            ])],
            BusinessPostalCode: ['', Validators.compose([
                Validators.minLength(5),
                Validators.maxLength(5),
                Validators.pattern('^[0-9]*$'),
            ])],
            BusinessPhone: ['', Validators.compose([
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('^[0-9]*$'),
            ])],
        });

        //Change chars to uppercase on change
        this.RegisterForm1.controls['Rfc'].valueChanges.subscribe((Rfc) => {
            if (Rfc) this.RegisterFormData.Rfc = this.RegisterFormData.Rfc.toUpperCase();
            if (this.RegisterFormData.SocialDenomination === 'Fiscal' && this.RegisterFormData.Rfc) this.validRfcInput = this.RegisterFormData.Rfc.length === 13;
            if (this.RegisterFormData.SocialDenomination === 'Moral' && this.RegisterFormData.Rfc) this.validRfcInput = this.RegisterFormData.Rfc.length === 12;

        });

        this.RegisterForm1.controls['Curp'].valueChanges.subscribe((Curp) => {
            if (Curp) this.RegisterFormData.Curp = this.RegisterFormData.Curp.toUpperCase()
        });

        this.RegisterForm1.controls['SocialDenomination'].valueChanges.subscribe(SocialDenomination => {
            if (SocialDenomination == 'Fiscal' && this.RegisterFormData.Rfc) this.validRfcInput = this.RegisterFormData.Rfc.length === 13;
            if (SocialDenomination == 'Moral' && this.RegisterFormData.Rfc) this.validRfcInput = this.RegisterFormData.Rfc.length === 12;
        });
    }

    ionViewDidLoad() {
        // this.slides.lockSwipes(true);
        this.navBar.backButtonClick = (e: UIEvent) => {
            this.showLeavingRegisterFormAlert();
        }
    }
    showLeavingRegisterFormAlert() {
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
            }, {
                text: 'Seguir aquí',
                cssClass: 'color-primary-light bold',
            }]
        });

        alert.present();
    }


    next(formNumber) {
        if (formNumber === 1) {
            if (this.RegisterForm1.valid) {
                this.submitAttemptForm1 = false;
                this.RegisterFormData.BirthDay.value = moment(this.RegisterFormData.BirthDay.text).unix();
                console.log(this.RegisterFormData);
                this.swipeNext();
            } else {
                this.submitAttemptForm1 = true;
            }
        }
        if (formNumber === 2) {
            if (this.RegisterForm2.valid) {
                this.submitAttemptForm2 = false;
                this.swipeNext();
            } else {
                this.submitAttemptForm2 = true;
            }
        }
        if (formNumber === 3) {
            if (this.RegisterForm3.valid) {
                this.submitAttemptForm3 = false;
                this.registerUser();
            } else {
                this.submitAttemptForm3 = true;
            }
        }
    }

    prev() {
        this.slides.lockSwipes(false);
        this.content.scrollToTop(1000);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
    }

    swipeNext() {
        this.slides.lockSwipes(false);
        this.content.scrollToTop(1000);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    }

    getSlideIndex() {
        this.slideIndex = this.slides.getActiveIndex();
    }

    registerUser() {
        console.log(this.RegisterFormData);
        this.loadingService.presentLoading();
        this.membershipService.createMembership(this.RegisterFormData).then((response)=>{
            console.log(response);
            this.loadingService.dismiss();
        }).catch((error)=>{
            console.log(error);
            this.loadingService.dismiss();
        });

    }

}