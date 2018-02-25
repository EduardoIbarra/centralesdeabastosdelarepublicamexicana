import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";

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
        public formBuilder: FormBuilder
    ) {

        this.loginForm = formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.compose([Validators.minLength(6),
                Validators.required])]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    login() {
        if (!this.loginForm.valid) {
            console.log('Invalid or empty data');
        } else {
            const userEmail = this.loginForm.value.email;
            const userPassword = this.loginForm.value.password;

            console.log('user data', userEmail, userPassword);
        }
    }

    goToRegisterForm(){
        this.navCtrl.push('RegisterFormPage')
    }

}