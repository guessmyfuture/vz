import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemsDetailPage } from './problems-detail';
import { ProblemsService } from './problems.provider';

@NgModule({
    declarations: [
        ProblemsDetailPage
    ],
    imports: [
        IonicPageModule.forChild(ProblemsDetailPage),
        TranslateModule.forChild()
    ],
    exports: [
        ProblemsDetailPage
    ],
    providers: [ProblemsService]
})
export class ProblemsDetailPageModule {
}
