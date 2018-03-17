import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { Problems } from './problems.model';
import { ProblemsService } from './problems.provider';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-problems',
    templateUrl: 'problems.html'
})
export class ProblemsPage {
    problems: Problems[];
	loader: any;

    // todo: add pagination

    constructor(private navCtrl: NavController, private problemsService: ProblemsService,
                private modalCtrl: ModalController, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
        this.problems = [];
    }

    ionViewDidLoad() {
        this.loadAll();
    }

    loadAll(refresher?) {
		this.presentLoading();
        this.problemsService.query().subscribe(
            (response) => {
                this.problems = response;
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

    trackId(index: number, item: Problems) {
        return item.id;
    }

    open(slidingItem: any, item: Problems) {
        let modal = this.modalCtrl.create('ProblemsDialogPage', {item: item});
        modal.onDidDismiss(problems => {
            if (problems) {
                if (problems.id) {
                    this.problemsService.update(problems).subscribe(data => {
                        this.loadAll();
                        let toast = this.toastCtrl.create(
                            {message: 'Problems updated successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                        slidingItem.close();
                    }, (error) => console.error(error));
                } else {
                    this.problemsService.create(problems).subscribe(data => {
                        this.problems.push(data);
                        let toast = this.toastCtrl.create(
                            {message: 'Problems added successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                    }, (error) => console.error(error));
                }
            }
        });
        modal.present();
    }

    delete(problems) {
        this.problemsService.delete(problems.id).subscribe(() => {
            let toast = this.toastCtrl.create(
                {message: 'Problems deleted successfully.', duration: 3000, position: 'middle'});
            toast.present();
            this.loadAll();
        }, (error) => console.error(error));
    }

    detail(problems: Problems) {
        this.navCtrl.push('ProblemsDetailPage', {id: problems.id});
    }
	presentLoading() {
   this.loader = this.loadingCtrl.create({
      duration: 3000
    });
    this.loader.present();
  }
}
