import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosDetailPage } from './videos-detail';
import { VideosService } from './videos.provider';

@NgModule({
    declarations: [
        VideosDetailPage
    ],
    imports: [
        IonicPageModule.forChild(VideosDetailPage),
        TranslateModule.forChild()
    ],
    exports: [
        VideosDetailPage
    ],
    providers: [VideosService]
})
export class VideosDetailPageModule {
}
