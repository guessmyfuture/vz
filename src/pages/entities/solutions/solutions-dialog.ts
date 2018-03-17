import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Solutions } from './solutions.model';
import { SolutionsService } from './solutions.provider';

@IonicPage()
@Component({
    selector: 'page-solutions-dialog',
    templateUrl: 'solutions-dialog.html'
})
export class SolutionsDialogPage {

    solutions: Solutions;
    isReadyToSave: boolean;

    form: FormGroup;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController,
                formBuilder: FormBuilder, params: NavParams,
                private solutionsService: SolutionsService) {
        this.solutions = params.get('item');
        if (this.solutions && this.solutions.id) {
            this.solutionsService.find(this.solutions.id).subscribe(data => {
                this.solutions = data;
            });
        }

        this.form = formBuilder.group({
            id: [params.get('item') ? this.solutions.id : ''],
            replyDescriptionEnglish: [params.get('item') ? this.solutions.replyDescriptionEnglish : '',  Validators.required],
            replyDescriptionTamil: [params.get('item') ? this.solutions.replyDescriptionTamil : '',  Validators.required],
            date: [params.get('item') ? this.solutions.date : '', ],
            user: [params.get('item') ? this.solutions.user : '', ],
            issueId: [params.get('item') ? this.solutions.issueId : '', ],
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
     * The user is done and wants to create the solutions, so return it
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

}
