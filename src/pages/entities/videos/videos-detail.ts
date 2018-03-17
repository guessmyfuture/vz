import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController } from 'ionic-angular';
import { Videos } from './videos.model';
import { VideosService } from './videos.provider';
import { LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';

@IonicPage({
    segment: 'videos-detail/:id'
})
@Component({
    selector: 'page-videos-detail',
    templateUrl: 'videos-detail.html'
})
export class VideosDetailPage {
    videos: Videos;
	loader: any;
	lang: string;

    constructor(private modalCtrl: ModalController, private params: NavParams,
                private videosService: VideosService, private toastCtrl: ToastController, public loadingCtrl: LoadingController,private sanitizer: DomSanitizer, private storage: Storage) {
        this.videos = new Videos();
        this.videos.id = params.get('id');
		this.storage.get('lang').then((val) => {
    this.lang = val;
  });
    }

    ionViewDidLoad() {
        this.videosService.find(this.videos.id).subscribe(data => this.videos = data);
    }

    open(item: Videos) {
        let modal = this.modalCtrl.create('VideosDialogPage', {item: item});
        modal.onDidDismiss(videos => {
            if (videos) {
                this.videosService.update(videos).subscribe(data => {
                    this.videos = data;
                    let toast = this.toastCtrl.create(
                        {message: 'Videos updated successfully.', duration: 3000, position: 'middle'});
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
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
}
