import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutDialogPage } from './about-dialog';
import { AboutService } from './about.provider';

@NgModule({
    declarations: [
        AboutDialogPage
    ],
    imports: [
        IonicPageModule.forChild(AboutDialogPage),
        TranslateModule.forChild()
    ],
    exports: [
        AboutDialogPage
    ],
    providers: [
        AboutService
    ]
})
export class AboutDialogPageModule {
}
