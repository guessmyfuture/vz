import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { About } from './about.model';
import { AboutService } from './about.provider';

@IonicPage()
@Component({
    selector: 'page-about-dialog',
    templateUrl: 'about-dialog.html'
})
export class AboutDialogPage {

    about: About;
    isReadyToSave: boolean;

    form: FormGroup;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController,
                formBuilder: FormBuilder, params: NavParams,
                private aboutService: AboutService) {
        this.about = params.get('item');
        if (this.about && this.about.id) {
            this.aboutService.find(this.about.id).subscribe(data => {
                this.about = data;
            });
        }

        this.form = formBuilder.group({
            id: [params.get('item') ? this.about.id : ''],
            description: [params.get('item') ? this.about.description : '', ],
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
     * The user is done and wants to create the about, so return it
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
