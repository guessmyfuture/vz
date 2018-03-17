import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Images } from './images.model';
import { ImagesService } from './images.provider';
import { Albums, AlbumsService } from '../albums';

@IonicPage()
@Component({
    selector: 'page-images-dialog',
    templateUrl: 'images-dialog.html'
})
export class ImagesDialogPage {

    images: Images;
    albums: Albums[];
    isReadyToSave: boolean;

    form: FormGroup;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController,
                formBuilder: FormBuilder, params: NavParams,
                private albumsService: AlbumsService,
                private imagesService: ImagesService) {
        this.images = params.get('item');
        if (this.images && this.images.id) {
            this.imagesService.find(this.images.id).subscribe(data => {
                this.images = data;
            });
        }

        this.form = formBuilder.group({
            id: [params.get('item') ? this.images.id : ''],
            imageUrl: [params.get('item') ? this.images.imageUrl : '',  Validators.required],
            date: [params.get('item') ? this.images.date : '', ],
            user: [params.get('item') ? this.images.user : '', ],
            albums: [params.get('item') ? this.images.albumId : '',Validators.required],
        });

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });
    }

    ionViewDidLoad() {
        this.albumsService.query()
            .subscribe(data => { this.albums = data; }, (error) => this.onError(error));
    }

    /**
     * The user cancelled, dismiss without sending data back.
     */
    cancel() {
        this.viewCtrl.dismiss();
    }

    /**
     * The user is done and wants to create the images, so return it
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

    compareAlbums(first: Albums, second: Albums): boolean {
        return first && second ? first.id === second.id : first === second;
    }

    trackAlbumsById(index: number, item: Albums) {
        return item.id;
    }
}
