import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-entity',
  templateUrl: 'entity.html'
})
export class EntityPage {

  entities: Array<any> = [
      {name: 'News', component: 'NewsPage'},
      {name: 'Videos', component: 'VideosPage'},
      {name: 'Problems', component: 'ProblemsPage'},
      {name: 'Solutions', component: 'SolutionsPage'},
      {name: 'Albums', component: 'AlbumsPage'},
      {name: 'Images', component: 'ImagesPage'},
      /* jhipster-needle-add-entity-page - JHipster will add entity pages here */
  ];
  
  
  constructor(public nav: NavController, private storage: Storage, private translate: TranslateService) { }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page);
  }
  
  translatelang(lang) {
	  console.log(lang);
      this.translate.use(lang); // Set your language here
	  this.storage.set('lang', lang);    
  }
}
