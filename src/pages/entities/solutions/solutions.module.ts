import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SolutionsPage } from './solutions';
import { SolutionsService } from './solutions.provider';

@NgModule({
    declarations: [
        SolutionsPage
    ],
    imports: [
        IonicPageModule.forChild(SolutionsPage),
        TranslateModule.forChild()
    ],
    exports: [
        SolutionsPage
    ],
    providers: [SolutionsService]
})
export class SolutionsPageModule {
}
