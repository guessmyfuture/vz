import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController } from 'ionic-angular';
import { About } from './about.model';
import { AboutService } from './about.provider';

@IonicPage({
    segment: 'about-detail/:id'
})
@Component({
    selector: 'page-about-detail',
    templateUrl: 'about-detail.html'
})
export class AboutDetailPage {
    about: About;

    constructor(private modalCtrl: ModalController, private params: NavParams,
                private aboutService: AboutService, private toastCtrl: ToastController) {
        this.about = new About();
        this.about.id = params.get('id');
    }

    ionViewDidLoad() {
        this.aboutService.find(this.about.id).subscribe(data => this.about = data);
    }

    open(item: About) {
        let modal = this.modalCtrl.create('AboutDialogPage', {item: item});
        modal.onDidDismiss(about => {
            if (about) {
                this.aboutService.update(about).subscribe(data => {
                    this.about = data;
                    let toast = this.toastCtrl.create(
                        {message: 'About updated successfully.', duration: 3000, position: 'middle'});
                    toast.present();
                }, (error) => console.error(error));
            }
        });
        modal.present();
    }
}
