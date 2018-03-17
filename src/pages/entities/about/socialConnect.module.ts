import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialConnectPage } from './socialConnect';

@NgModule({
    declarations: [
        SocialConnectPage
    ],
    imports: [
        IonicPageModule.forChild(SocialConnectPage),
        TranslateModule.forChild()
    ],
    exports: [
        SocialConnectPage
    ],
    providers: []
})
export class SocialConnectPageModule {
}
