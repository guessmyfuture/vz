import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Problems } from './problems.model';
import { ProblemsService } from './problems.provider';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-problems-dialog',
    templateUrl: 'problems-dialog.html'
})
export class ProblemsDialogPage {

    problems: Problems;
    isReadyToSave: boolean;
	loader: any;

    form: FormGroup;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController,
                formBuilder: FormBuilder, params: NavParams,
                private problemsService: ProblemsService, public loadingCtrl: LoadingController) {
        this.problems = params.get('item');
        if (this.problems && this.problems.id) {
            this.problemsService.find(this.problems.id).subscribe(data => {
                this.problems = data;
            });
        }

        this.form = formBuilder.group({
            id: [params.get('item') ? this.problems.id : ''],
            title: [params.get('item') ? this.problems.title : '',  Validators.required],
            description: [params.get('item') ? this.problems.description : '', ],
            issueId: [params.get('item') ? this.problems.issueId : '', ],
            category: [params.get('item') ? this.problems.category : '',  Validators.required],
            user: [params.get('item') ? this.problems.user : '', ],
            date: [params.get('item') ? this.problems.date : new Date(), ],
            verified: [params.get('item') ? this.problems.verified : false, ],
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
     * The user is done and wants to create the problems, so return it
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
