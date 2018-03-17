import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { Images } from './images.model';
import { ImagesService } from './images.provider';

@IonicPage()
@Component({
    selector: 'page-images',
    templateUrl: 'images.html'
})
export class ImagesPage {
    images: Images[];

    // todo: add pagination

    constructor(private navCtrl: NavController, private imagesService: ImagesService,
                private modalCtrl: ModalController, private toastCtrl: ToastController) {
        this.images = [];
    }

    ionViewDidLoad() {
        this.loadAll();
    }

    loadAll(refresher?) {
        this.imagesService.query().subscribe(
            (response) => {
                this.images = response;
                if (typeof(refresher) !== 'undefined') {
                    refresher.complete();
                }
            },
            (error) => {
                console.error(error);
                let toast = this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
                toast.present();
            });
    }

    trackId(index: number, item: Images) {
        return item.id;
    }

    open(slidingItem: any, item: Images) {
        let modal = this.modalCtrl.create('ImagesDialogPage', {item: item});
        modal.onDidDismiss(images => {
            if (images) {
                if (images.id) {
                    this.imagesService.update(images).subscribe(data => {
                        this.loadAll();
                        let toast = this.toastCtrl.create(
                            {message: 'Images updated successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                        slidingItem.close();
                    }, (error) => console.error(error));
                } else {
                    this.imagesService.create(images).subscribe(data => {
                        this.images.push(data);
                        let toast = this.toastCtrl.create(
                            {message: 'Images added successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                    }, (error) => console.error(error));
                }
            }
        });
        modal.present();
    }

    delete(images) {
        this.imagesService.delete(images.id).subscribe(() => {
            let toast = this.toastCtrl.create(
                {message: 'Images deleted successfully.', duration: 3000, position: 'middle'});
            toast.present();
            this.loadAll();
        }, (error) => console.error(error));
    }

    detail(images: Images) {
        this.navCtrl.push('ImagesDetailPage', {id: images.id});
    }
}
