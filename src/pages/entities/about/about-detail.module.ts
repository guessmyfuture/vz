import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutDetailPage } from './about-detail';
import { AboutService } from './about.provider';

@NgModule({
    declarations: [
        AboutDetailPage
    ],
    imports: [
        IonicPageModule.forChild(AboutDetailPage),
        TranslateModule.forChild()
    ],
    exports: [
        AboutDetailPage
    ],
    providers: [AboutService]
})
export class AboutDetailPageModule {
}
