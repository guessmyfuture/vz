import { AlbumsService } from '../albums';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagesDialogPage } from './images-dialog';
import { ImagesService } from './images.provider';

@NgModule({
    declarations: [
        ImagesDialogPage
    ],
    imports: [
        IonicPageModule.forChild(ImagesDialogPage),
        TranslateModule.forChild()
    ],
    exports: [
        ImagesDialogPage
    ],
    providers: [
        ImagesService,
        AlbumsService,
    ]
})
export class ImagesDialogPageModule {
}
