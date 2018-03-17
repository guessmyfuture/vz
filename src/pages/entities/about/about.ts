import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { About } from './about.model';
import { AboutService } from './about.provider';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {
    abouts: About[];
	lang: string;

    // todo: add pagination

    constructor(private navCtrl: NavController, private aboutService: AboutService,
                private modalCtrl: ModalController, private toastCtrl: ToastController, private storage: Storage) {
        this.abouts = [];
		this.storage.get('lang').then((val) => {
    this.lang = val;
  });
    }

    ionViewDidLoad() {
        this.loadAll();
    }

    loadAll(refresher?) {
        this.aboutService.query().subscribe(
            (response) => {
                this.abouts = response;
                if (typeof(refresher) !== 'undefined') {
                    refresher.complete();
                }
            },
            (error) => {
                console.error(error);
                let toast = this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
                
            });
    }

    trackId(index: number, item: About) {
        return item.id;
    }

    open(slidingItem: any, item: About) {
        let modal = this.modalCtrl.create('AboutDialogPage', {item: item});
        modal.onDidDismiss(about => {
            if (about) {
                if (about.id) {
                    this.aboutService.update(about).subscribe(data => {
                        this.loadAll();
                        let toast = this.toastCtrl.create(
                            {message: 'About updated successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                        slidingItem.close();
                    }, (error) => console.error(error));
                } else {
                    this.aboutService.create(about).subscribe(data => {
                        this.abouts.push(data);
                        let toast = this.toastCtrl.create(
                            {message: 'About added successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                    }, (error) => console.error(error));
                }
            }
        });
        modal.present();
    }

    delete(about) {
        this.aboutService.delete(about.id).subscribe(() => {
            let toast = this.toastCtrl.create(
                {message: 'About deleted successfully.', duration: 3000, position: 'middle'});
            toast.present();
            this.loadAll();
        }, (error) => console.error(error));
    }

    detail(about: About) {
        this.navCtrl.push('AboutDetailPage', {id: about.id});
    }
}
