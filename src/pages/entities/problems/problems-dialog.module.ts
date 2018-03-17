import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemsDialogPage } from './problems-dialog';
import { ProblemsService } from './problems.provider';

@NgModule({
    declarations: [
        ProblemsDialogPage
    ],
    imports: [
        IonicPageModule.forChild(ProblemsDialogPage),
        TranslateModule.forChild()
    ],
    exports: [
        ProblemsDialogPage
    ],
    providers: [
        ProblemsService
    ]
})
export class ProblemsDialogPageModule {
}
