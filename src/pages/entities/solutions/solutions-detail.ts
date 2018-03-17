import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController } from 'ionic-angular';
import { Solutions } from './solutions.model';
import { SolutionsService } from './solutions.provider';

@IonicPage({
    segment: 'solutions-detail/:id'
})
@Component({
    selector: 'page-solutions-detail',
    templateUrl: 'solutions-detail.html'
})
export class SolutionsDetailPage {
    solutions: Solutions;

    constructor(private modalCtrl: ModalController, private params: NavParams,
                private solutionsService: SolutionsService, private toastCtrl: ToastController) {
        this.solutions = new Solutions();
        this.solutions.id = params.get('id');
    }

    ionViewDidLoad() {
        this.solutionsService.find(this.solutions.id).subscribe(data => this.solutions = data);
    }

    open(item: Solutions) {
        let modal = this.modalCtrl.create('SolutionsDialogPage', {item: item});
        modal.onDidDismiss(solutions => {
            if (solutions) {
                this.solutionsService.update(solutions).subscribe(data => {
                    this.solutions = data;
                    let toast = this.toastCtrl.create(
                        {message: 'Solutions updated successfully.', duration: 3000, position: 'middle'});
                    toast.present();
                }, (error) => console.error(error));
            }
        });
        modal.present();
    }
}
