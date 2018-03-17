import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { Albums } from './albums.model';
import { AlbumsService } from './albums.provider';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-albums',
    templateUrl: 'albums.html'
})
export class AlbumsPage {
    albums: Albums[];
	loader: any;
	lang: string;

    // todo: add pagination

    constructor(private navCtrl: NavController, private albumsService: AlbumsService,
                private modalCtrl: ModalController, private toastCtrl: ToastController, public loadingCtrl: LoadingController, private storage: Storage) {
        this.albums = [];
		this.storage.get('lang').then((val) => {
    this.lang = val;
  });
    }

    ionViewDidLoad() {
        this.loadAll();
    }

    loadAll(refresher?) {
		this.presentLoading();
        this.albumsService.query().subscribe(
            (response) => {
                this.albums = response;
				this.loader.dismiss();
                if (typeof(refresher) !== 'undefined') {
                    refresher.complete();
                }
            },
            (error) => {
                console.error(error);
				this.loader.dismiss();
                let toast = this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
                toast.present();
            });
    }

    trackId(index: number, item: Albums) {
        return item.id;
    }

    open(slidingItem: any, item: Albums) {
        let modal = this.modalCtrl.create('AlbumsDialogPage', {item: item});
        modal.onDidDismiss(albums => {
            if (albums) {
                if (albums.id) {
                    this.albumsService.update(albums).subscribe(data => {
                        this.loadAll();
                        let toast = this.toastCtrl.create(
                            {message: 'Albums updated successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                        slidingItem.close();
                    }, (error) => console.error(error));
                } else {
                    this.albumsService.create(albums).subscribe(data => {
                        this.albums.push(data);
                        let toast = this.toastCtrl.create(
                            {message: 'Albums added successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                    }, (error) => console.error(error));
                }
            }
        });
        modal.present();
    }

    delete(albums) {
        this.albumsService.delete(albums.id).subscribe(() => {
            let toast = this.toastCtrl.create(
                {message: 'Albums deleted successfully.', duration: 3000, position: 'middle'});
            toast.present();
            this.loadAll();
        }, (error) => console.error(error));
    }

    detail(albums: Albums) {
        this.navCtrl.push('AlbumsDetailPage', {id: albums.id});
    }
	presentLoading() {
   this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }
}
