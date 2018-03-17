import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController } from 'ionic-angular';
import { Albums } from './albums.model';
import { AlbumsService } from './albums.provider';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage({
    segment: 'albums-detail/:id'
})
@Component({
    selector: 'page-albums-detail',
    templateUrl: 'albums-detail.html'
})
export class AlbumsDetailPage {
    albums: Albums;
	loader: any;
	lang: string;
	images: Array<any> = [
      {imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg'},
	  {imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg'},
	  {imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg'},
	  {imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg'},
	  {imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg'},
	  {imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg'},
	  {imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg'},
	  {imageUrl: 'https://image.vikatan.com/news/2016/03/19/images/Natham+viswanathan350.jpg'},
  ];

    constructor(private modalCtrl: ModalController, private params: NavParams,
                private albumsService: AlbumsService, private toastCtrl: ToastController, public loadingCtrl: LoadingController, private storage: Storage) {
        this.albums = new Albums();
        this.albums.id = params.get('id');
		this.storage.get('lang').then((val) => {
    this.lang = val;
  });
    }

    ionViewDidLoad() {
        this.albumsService.find(this.albums.id).subscribe(data => this.albums = data);
    }

    open(item: Albums) {
        let modal = this.modalCtrl.create('AlbumsDialogPage', {item: item});
        modal.onDidDismiss(albums => {
            if (albums) {
                this.albumsService.update(albums).subscribe(data => {
                    this.albums = data;
                    let toast = this.toastCtrl.create(
                        {message: 'Albums updated successfully.', duration: 3000, position: 'middle'});
                    toast.present();
                }, (error) => console.error(error));
            }
        });
        modal.present();
    }
	
	presentLoading() {
   this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }
}

