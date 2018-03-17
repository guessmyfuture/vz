import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController } from 'ionic-angular';
import { Problems } from './problems.model';
import { ProblemsService } from './problems.provider';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage({
    segment: 'problems-detail/:id'
})
@Component({
    selector: 'page-problems-detail',
    templateUrl: 'problems-detail.html'
})
export class ProblemsDetailPage {
    problems: Problems;
	loader: any;
	lang: string;

    constructor(private modalCtrl: ModalController, private params: NavParams,
                private problemsService: ProblemsService, private toastCtrl: ToastController, public loadingCtrl: LoadingController, private storage: Storage) {
        this.problems = new Problems();
        this.problems.id = params.get('id');
		this.storage.get('lang').then((val) => {
    this.lang = val;
  });
    }

    ionViewDidLoad() {
        this.problemsService.find(this.problems.id).subscribe(data => this.problems = data);
    }

    open(item: Problems) {
        let modal = this.modalCtrl.create('ProblemsDialogPage', {item: item});
        modal.onDidDismiss(problems => {
            if (problems) {
                this.problemsService.update(problems).subscribe(data => {
                    this.problems = data;
                    let toast = this.toastCtrl.create(
                        {message: 'Problems updated successfully.', duration: 3000, position: 'middle'});
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
