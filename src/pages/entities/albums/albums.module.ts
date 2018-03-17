import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumsPage } from './albums';
import { AlbumsService } from './albums.provider';

@NgModule({
    declarations: [
        AlbumsPage
    ],
    imports: [
        IonicPageModule.forChild(AlbumsPage),
        TranslateModule.forChild()
    ],
    exports: [
        AlbumsPage
    ],
    providers: [AlbumsService]
})
export class AlbumsPageModule {
}
