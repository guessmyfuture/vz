import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SolutionsDetailPage } from './solutions-detail';
import { SolutionsService } from './solutions.provider';

@NgModule({
    declarations: [
        SolutionsDetailPage
    ],
    imports: [
        IonicPageModule.forChild(SolutionsDetailPage),
        TranslateModule.forChild()
    ],
    exports: [
        SolutionsDetailPage
    ],
    providers: [SolutionsService]
})
export class SolutionsDetailPageModule {
}
