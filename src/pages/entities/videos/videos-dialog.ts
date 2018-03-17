import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Videos } from './videos.model';
import { VideosService } from './videos.provider';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-videos-dialog',
    templateUrl: 'videos-dialog.html'
})
export class VideosDialogPage {

    videos: Videos;
    isReadyToSave: boolean;
	loader: any;

    form: FormGroup;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController,
                formBuilder: FormBuilder, params: NavParams,
                private videosService: VideosService, public loadingCtrl: LoadingController) {
        this.videos = params.get('item');
        if (this.videos && this.videos.id) {
            this.videosService.find(this.videos.id).subscribe(data => {
                this.videos = data;
            });
        }

        this.form = formBuilder.group({
            id: [params.get('item') ? this.videos.id : ''],
            titleEnglish: [params.get('item') ? this.videos.titleEnglish : '',  Validators.required],
            titleTamil: [params.get('item') ? this.videos.titleTamil : '',  Validators.required],
            videoUrl: [params.get('item') ? this.videos.videoUrl : '',  Validators.required],
            date: [params.get('item') ? this.videos.date : '', ],
            user: [params.get('item') ? this.videos.user : '', ],
            descriptionEnglish: [params.get('item') ? this.videos.descriptionEnglish : '', ],
            descriptionTamil: [params.get('item') ? this.videos.descriptionTamil : '', ],
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
     * The user is done and wants to create the videos, so return it
     * back to the presenter.
     */
    done() {
        if (!this.form.valid) { return; }
        this.viewCtrl.dismiss(this.form.value);
    }
	
	presentLoading() {
   this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

    onError(error) {
        console.error(error);
        let toast = this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
        toast.present();
    }

}
