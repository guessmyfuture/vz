import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController } from 'ionic-angular';
import { News } from './news.model';
import { NewsService } from './news.provider';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage({
    segment: 'news-detail/:id'
})
@Component({
    selector: 'page-news-detail',
    templateUrl: 'news-detail.html'
})
export class NewsDetailPage {
    news: News;
	loader: any;
	lang: string;

    constructor(private modalCtrl: ModalController, private params: NavParams,
                private newsService: NewsService, private toastCtrl: ToastController, public loadingCtrl: LoadingController, private storage: Storage) {
        this.news = new News();
        this.news.id = params.get('id');
		this.storage.get('lang').then((val) => {
    this.lang = val;
	console.log(this.lang);
  });
    }

    ionViewDidLoad() {
        this.newsService.find(this.news.id).subscribe(data => this.news = data);
    }

    open(item: News) {
        let modal = this.modalCtrl.create('NewsDialogPage', {item: item});
        modal.onDidDismiss(news => {
            if (news) {
                this.newsService.update(news).subscribe(data => {
                    this.news = data;
                    let toast = this.toastCtrl.create(
                        {message: 'News updated successfully.', duration: 3000, position: 'middle'});
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
