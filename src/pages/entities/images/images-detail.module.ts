import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagesDetailPage } from './images-detail';
import { ImagesService } from './images.provider';

@NgModule({
    declarations: [
        ImagesDetailPage
    ],
    imports: [
        IonicPageModule.forChild(ImagesDetailPage),
        TranslateModule.forChild()
    ],
    exports: [
        ImagesDetailPage
    ],
    providers: [ImagesService]
})
export class ImagesDetailPageModule {
}
