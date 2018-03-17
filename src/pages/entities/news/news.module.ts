import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { NewsService } from './news.provider';

@NgModule({
    declarations: [
        NewsPage
    ],
    imports: [
        IonicPageModule.forChild(NewsPage),
        TranslateModule.forChild()
    ],
    exports: [
        NewsPage
    ],
    providers: [NewsService]
})
export class NewsPageModule {
}
