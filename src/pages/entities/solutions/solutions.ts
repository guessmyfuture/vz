import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { Solutions } from './solutions.model';
import { SolutionsService } from './solutions.provider';

@IonicPage()
@Component({
    selector: 'page-solutions',
    templateUrl: 'solutions.html'
})
export class SolutionsPage {
    solutions: Solutions[];

    // todo: add pagination

    constructor(private navCtrl: NavController, private solutionsService: SolutionsService,
                private modalCtrl: ModalController, private toastCtrl: ToastController) {
        this.solutions = [];
    }

    ionViewDidLoad() {
        this.loadAll();
    }

    loadAll(refresher?) {
        this.solutionsService.query().subscribe(
            (response) => {
                this.solutions = response;
                if (typeof(refresher) !== 'undefined') {
                    refresher.complete();
                }
            },
            (error) => {
                console.error(error);
                let toast = this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
                toast.present();
            });
    }

    trackId(index: number, item: Solutions) {
        return item.id;
    }

    open(slidingItem: any, item: Solutions) {
        let modal = this.modalCtrl.create('SolutionsDialogPage', {item: item});
        modal.onDidDismiss(solutions => {
            if (solutions) {
                if (solutions.id) {
                    this.solutionsService.update(solutions).subscribe(data => {
                        this.loadAll();
                        let toast = this.toastCtrl.create(
                            {message: 'Solutions updated successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                        slidingItem.close();
                    }, (error) => console.error(error));
                } else {
                    this.solutionsService.create(solutions).subscribe(data => {
                        this.solutions.push(data);
                        let toast = this.toastCtrl.create(
                            {message: 'Solutions added successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                    }, (error) => console.error(error));
                }
            }
        });
        modal.present();
    }

    delete(solutions) {
        this.solutionsService.delete(solutions.id).subscribe(() => {
            let toast = this.toastCtrl.create(
                {message: 'Solutions deleted successfully.', duration: 3000, position: 'middle'});
            toast.present();
            this.loadAll();
        }, (error) => console.error(error));
    }

    detail(solutions: Solutions) {
        this.navCtrl.push('SolutionsDetailPage', {id: solutions.id});
    }
}
