import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {AlertService} from "../../services/alert.service";
import {LoadingService} from "../../services/loading.service";

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    backgrounds = [
        'assets/img/login-background.png',
    ];
    public loginForm: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public app: App,
        public loadingService: LoadingService,
        public alertService: AlertService
    ) {

        this.loginForm = formBuilder.group({
            email: ['', Validators.compose([
                Validators.required,
            ])],
            password: ['', Validators.compose([
                Validators.required,
            ])],


        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPasssge');
    }

    login() {
        if (this.loginForm.value.email === "miguel@infox.mx" && this.loginForm.value.password === "miguel") {
            this.loadingService.presentBasicLoading();

            setTimeout(()=>{
                this.loadingService.dismiss();
                this.app.getRootNav().setRoot('HomePage');
            },3000)
        }else{
            this.alertService.incorrectLoginCredentials();
        }
    }

    goToRegisterForm() {
        this.navCtrl.push('RegisterFormPage')
    }

}