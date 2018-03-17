import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumsDetailPage } from './albums-detail';
import { AlbumsService } from './albums.provider';

@NgModule({
    declarations: [
        AlbumsDetailPage
    ],
    imports: [
        IonicPageModule.forChild(AlbumsDetailPage),
        TranslateModule.forChild()
    ],
    exports: [
        AlbumsDetailPage
    ],
    providers: [AlbumsService]
})
export class AlbumsDetailPageModule {
}
