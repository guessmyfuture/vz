import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDialogPage } from './news-dialog';
import { NewsService } from './news.provider';

@NgModule({
    declarations: [
        NewsDialogPage
    ],
    imports: [
        IonicPageModule.forChild(NewsDialogPage),
        TranslateModule.forChild()
    ],
    exports: [
        NewsDialogPage
    ],
    providers: [
        NewsService
    ]
})
export class NewsDialogPageModule {
}
