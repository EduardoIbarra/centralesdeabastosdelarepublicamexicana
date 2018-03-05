import {Injectable} from '@angular/core';
import {LoadingController} from "ionic-angular";

@Injectable()

export class LoadingService {
    loading: any;
    contentImageLogo: string = '<img class="loading-rotating-image" src="assets/img/logo.png">';
    // contentImageLogo: string = '<img class="loading-rotating-image loading-rotating-image-background" src="assets/img/logo.png">';

    constructor(public loadingCtrl: LoadingController) {
    }

    presentLoading() {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'no-spinner-background',
            content: this.contentImageLogo
        });

        this.loading.present();
    }

    dismiss() {
        this.loading.dismiss();
    }

}