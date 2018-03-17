import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagesPage } from './images';
import { ImagesService } from './images.provider';

@NgModule({
    declarations: [
        ImagesPage
    ],
    imports: [
        IonicPageModule.forChild(ImagesPage),
        TranslateModule.forChild()
    ],
    exports: [
        ImagesPage
    ],
    providers: [ImagesService]
})
export class ImagesPageModule {
}
