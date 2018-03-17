import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Albums } from './albums.model';
import { AlbumsService } from './albums.provider';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-albums-dialog',
    templateUrl: 'albums-dialog.html'
})
export class AlbumsDialogPage {

    albums: Albums;
    isReadyToSave: boolean;
	loader: any;

    form: FormGroup;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController,
                formBuilder: FormBuilder, params: NavParams,
                private albumsService: AlbumsService, public loadingCtrl: LoadingController) {
        this.albums = params.get('item');
        if (this.albums && this.albums.id) {
            this.albumsService.find(this.albums.id).subscribe(data => {
                this.albums = data;
            });
        }

        this.form = formBuilder.group({
            id: [params.get('item') ? this.albums.id : ''],
            titleEnglish: [params.get('item') ? this.albums.titleEnglish : '',  Validators.required],
            titleTamil: [params.get('item') ? this.albums.titleTamil : '',  Validators.required],
            date: [params.get('item') ? this.albums.date : '', ],
            user: [params.get('item') ? this.albums.user : '', ],
            cover: [params.get('item') ? this.albums.cover : '',  Validators.required],
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
     * The user is done and wants to create the albums, so return it
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
