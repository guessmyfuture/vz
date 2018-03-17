import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosDialogPage } from './videos-dialog';
import { VideosService } from './videos.provider';

@NgModule({
    declarations: [
        VideosDialogPage
    ],
    imports: [
        IonicPageModule.forChild(VideosDialogPage),
        TranslateModule.forChild()
    ],
    exports: [
        VideosDialogPage
    ],
    providers: [
        VideosService
    ]
})
export class VideosDialogPageModule {
}
