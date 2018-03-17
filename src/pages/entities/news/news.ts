import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { News } from './news.model';
import { NewsService } from './news.provider';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-news',
    templateUrl: 'news.html'
})
export class NewsPage {
    news: News[];
	loader: any;
	lang: string;

    // todo: add pagination

    constructor(private navCtrl: NavController, private newsService: NewsService,
                private modalCtrl: ModalController, private toastCtrl: ToastController, public loadingCtrl: LoadingController, private storage: Storage) {
        this.news = [];
		this.storage.get('lang').then((val) => {
    this.lang = val;
	console.log(this.lang);
  });
    }

    ionViewDidLoad() {
        this.loadAll();
    }

    loadAll(refresher?) {
		this.presentLoading();
        this.newsService.query().subscribe(
            (response) => {
                this.news = response;
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

    trackId(index: number, item: News) {
        return item.id;
    }

    open(slidingItem: any, item: News) {
        let modal = this.modalCtrl.create('NewsDialogPage', {item: item});
        modal.onDidDismiss(news => {
            if (news) {
                if (news.id) {
                    this.newsService.update(news).subscribe(data => {
                        this.loadAll();
                        let toast = this.toastCtrl.create(
                            {message: 'News updated successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                        slidingItem.close();
                    }, (error) => console.error(error));
                } else {
                    this.newsService.create(news).subscribe(data => {
                        this.news.push(data);
                        let toast = this.toastCtrl.create(
                            {message: 'News added successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                    }, (error) => console.error(error));
                }
            }
        });
        modal.present();
    }

    delete(news) {
        this.newsService.delete(news.id).subscribe(() => {
            let toast = this.toastCtrl.create(
                {message: 'News deleted successfully.', duration: 3000, position: 'middle'});
            toast.present();
            this.loadAll();
        }, (error) => console.error(error));
    }

    detail(news: News) {
        this.navCtrl.push('NewsDetailPage', {id: news.id});
    }
	
	presentLoading() {
   this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }
}
