import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { Videos } from './videos.model';
import { VideosService } from './videos.provider';
import { LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
    selector: 'page-videos',
    templateUrl: 'videos.html'
})
export class VideosPage {
    videos: Videos[];
	loader: any;
	lang: string;

    // todo: add pagination

    constructor(private navCtrl: NavController, private videosService: VideosService,
                private modalCtrl: ModalController, private toastCtrl: ToastController, public loadingCtrl: LoadingController,private sanitizer: DomSanitizer, private storage: Storage) {
        this.videos = [];
		this.storage.get('lang').then((val) => {
    this.lang = val;
  });
    }

    ionViewDidLoad() {
        this.loadAll();
    }

    loadAll(refresher?) {
		this.presentLoading();
        this.videosService.query().subscribe(
            (response) => {
                this.videos = response;
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

    trackId(index: number, item: Videos) {
        return item.id;
    }

    open(slidingItem: any, item: Videos) {
        let modal = this.modalCtrl.create('VideosDialogPage', {item: item});
        modal.onDidDismiss(videos => {
            if (videos) {
                if (videos.id) {
                    this.videosService.update(videos).subscribe(data => {
                        this.loadAll();
                        let toast = this.toastCtrl.create(
                            {message: 'Videos updated successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                        slidingItem.close();
                    }, (error) => console.error(error));
                } else {
                    this.videosService.create(videos).subscribe(data => {
                        this.videos.push(data);
                        let toast = this.toastCtrl.create(
                            {message: 'Videos added successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                    }, (error) => console.error(error));
                }
            }
        });
        modal.present();
    }

    delete(videos) {
        this.videosService.delete(videos.id).subscribe(() => {
            let toast = this.toastCtrl.create(
                {message: 'Videos deleted successfully.', duration: 3000, position: 'middle'});
            toast.present();
            this.loadAll();
        }, (error) => console.error(error));
    }

    detail(videos: Videos) {
        this.navCtrl.push('VideosDetailPage', {id: videos.id});
    }
	
	presentLoading() {
   this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }
  
  transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }

}
