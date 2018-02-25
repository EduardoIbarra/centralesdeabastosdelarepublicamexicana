import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SharedService} from "../../services/shared.service";
import {AppSelectionOptions, LaunchNavigator, LaunchNavigatorOptions, RememberChoiceOptions, PromptsOptions} from "@ionic-native/launch-navigator";

declare var google: any;

@IonicPage()
@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html',
})
export class ContactPage {

    @ViewChild('map') mapRef: ElementRef;
    lat = 20.576385;
    lng = -100.381908;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public sharedService: SharedService,
        public launchNavigator: LaunchNavigator,
    ) {
    }

    ionViewDidLoad() {
        this.showMap();
    }

    showMap() {
        const location = new google.maps.LatLng(this.lat, this.lng);

        const options = {
            center: location,
            zoom: 15,
            disableDefaultUI: true,
            zoomControl: true,
        };
        const map = new google.maps.Map(this.mapRef.nativeElement, options);

        let marker = new google.maps.Marker({
            position: {lat:this.lat, lng: this.lng},
            animation: google.maps.Animation.DROP,
            visible: true
        });

        marker.setMap(map);

        //Set message con marker
        let placeInfo = new google.maps.InfoWindow({content: 'CANACO Quéretaro'});

        //Events to show message
        google.maps.event.addListener(marker, 'click', function () {
            placeInfo.open(map, marker);
        });
    }

    openNavigator() {
        let promtOptions: PromptsOptions = {
            headerText: '¿Recordar tu elección?',
            bodyText: '¿Usar la misma aplicación para navergar la próxima vez?',
            yesButtonText: 'Sí'
        };

        let rememberChoiceOptions: RememberChoiceOptions = {
            prompt: promtOptions
        };

        let appSelectionOptions: AppSelectionOptions = {
            dialogHeaderText: 'Selecciona aplicación para navegación',
            cancelButtonText: 'Cancelar',
            rememberChoice: rememberChoiceOptions
        };

        let launchNavigatorOptions: LaunchNavigatorOptions = {
            destinationName: 'CANACO Quéretaro',
            appSelection: appSelectionOptions
        };

        this.launchNavigator.navigate([this.lat, this.lng], launchNavigatorOptions)
    }
}
