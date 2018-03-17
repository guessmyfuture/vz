import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController } from 'ionic-angular';
import { Images } from './images.model';
import { ImagesService } from './images.provider';

@IonicPage({
    segment: 'images-detail/:id'
})
@Component({
    selector: 'page-images-detail',
    templateUrl: 'images-detail.html'
})
export class ImagesDetailPage {
    images: Images;

    constructor(private modalCtrl: ModalController, private params: NavParams,
                private imagesService: ImagesService, private toastCtrl: ToastController) {
        this.images = new Images();
        this.images.id = params.get('id');
    }

    ionViewDidLoad() {
        this.imagesService.find(this.images.id).subscribe(data => this.images = data);
    }

    open(item: Images) {
        let modal = this.modalCtrl.create('ImagesDialogPage', {item: item});
        modal.onDidDismiss(images => {
            if (images) {
                this.imagesService.update(images).subscribe(data => {
                    this.images = data;
                    let toast = this.toastCtrl.create(
                        {message: 'Images updated successfully.', duration: 3000, position: 'middle'});
                    toast.present();
                }, (error) => console.error(error));
            }
        });
        modal.present();
    }
}
