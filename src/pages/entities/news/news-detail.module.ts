import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDetailPage } from './news-detail';
import { NewsService } from './news.provider';

@NgModule({
    declarations: [
        NewsDetailPage
    ],
    imports: [
        IonicPageModule.forChild(NewsDetailPage),
        TranslateModule.forChild()
    ],
    exports: [
        NewsDetailPage
    ],
    providers: [NewsService]
})
export class NewsDetailPageModule {
}
