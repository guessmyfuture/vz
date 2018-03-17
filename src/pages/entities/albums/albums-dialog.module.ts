import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumsDialogPage } from './albums-dialog';
import { AlbumsService } from './albums.provider';

@NgModule({
    declarations: [
        AlbumsDialogPage
    ],
    imports: [
        IonicPageModule.forChild(AlbumsDialogPage),
        TranslateModule.forChild()
    ],
    exports: [
        AlbumsDialogPage
    ],
    providers: [
        AlbumsService
    ]
})
export class AlbumsDialogPageModule {
}
