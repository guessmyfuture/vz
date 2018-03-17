import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemsPage } from './problems';
import { ProblemsService } from './problems.provider';

@NgModule({
    declarations: [
        ProblemsPage
    ],
    imports: [
        IonicPageModule.forChild(ProblemsPage),
        TranslateModule.forChild()
    ],
    exports: [
        ProblemsPage
    ],
    providers: [ProblemsService]
})
export class ProblemsPageModule {
}
