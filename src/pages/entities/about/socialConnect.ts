import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-socialConnect',
    templateUrl: 'socialConnect.html'
})
export class SocialConnectPage {
lang:string;
    // todo: add pagination

    constructor(private navCtrl: NavController, private storage: Storage) {
		this.storage.get('lang').then((val) => {
    this.lang = val;
  });
    }
   
}
