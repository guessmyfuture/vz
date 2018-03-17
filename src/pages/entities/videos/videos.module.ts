import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosPage } from './videos';
import { VideosService } from './videos.provider';

@NgModule({
    declarations: [
        VideosPage
    ],
    imports: [
        IonicPageModule.forChild(VideosPage),
        TranslateModule.forChild()
    ],
    exports: [
        VideosPage
    ],
    providers: [VideosService]
})
export class VideosPageModule {
}
