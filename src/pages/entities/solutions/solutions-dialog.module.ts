import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SolutionsDialogPage } from './solutions-dialog';
import { SolutionsService } from './solutions.provider';

@NgModule({
    declarations: [
        SolutionsDialogPage
    ],
    imports: [
        IonicPageModule.forChild(SolutionsDialogPage),
        TranslateModule.forChild()
    ],
    exports: [
        SolutionsDialogPage
    ],
    providers: [
        SolutionsService
    ]
})
export class SolutionsDialogPageModule {
}
