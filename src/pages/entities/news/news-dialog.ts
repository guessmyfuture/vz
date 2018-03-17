import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { News } from './news.model';
import { NewsService } from './news.provider';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-news-dialog',
    templateUrl: 'news-dialog.html'
})
export class NewsDialogPage {

    news: News;
    isReadyToSave: boolean;
	loader: any;

    form: FormGroup;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController,
                formBuilder: FormBuilder, params: NavParams,
                private newsService: NewsService, public loadingCtrl: LoadingController) {
        this.news = params.get('item');
        if (this.news && this.news.id) {
            this.newsService.find(this.news.id).subscribe(data => {
                this.news = data;
            });
        }

        this.form = formBuilder.group({
            id: [params.get('item') ? this.news.id : ''],
            titleEnglish: [params.get('item') ? this.news.titleEnglish : '',  Validators.required],
            titleTamil: [params.get('item') ? this.news.titleTamil : '',  Validators.required],
            coverUrl: [params.get('item') ? this.news.coverUrl : '', ],
            descriptionEnglish: [params.get('item') ? this.news.descriptionEnglish : '', ],
            descriptionTamil: [params.get('item') ? this.news.descriptionTamil : '', ],
            date: [params.get('item') ? this.news.date : '', ],
            user: [params.get('item') ? this.news.user : '', ],
        });

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });
    }

    ionViewDidLoad() {
    }

    /**
     * The user cancelled, dismiss without sending data back.
     */
    cancel() {
        this.viewCtrl.dismiss();
    }

    /**
     * The user is done and wants to create the news, so return it
     * back to the presenter.
     */
    done() {
        if (!this.form.valid) { return; }
        this.viewCtrl.dismiss(this.form.value);
    }

    onError(error) {
        console.error(error);
        let toast = this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
        toast.present();
    }
	
	presentLoading() {
   this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

}
