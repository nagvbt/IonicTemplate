import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

export interface Pages {
  title: string;
  component: string;
}


/**
 *  Class representing a Provider Demos
 *  Author - Nag
 */
@IonicPage()
@Component({
  selector: 'page-provider-demos',
  templateUrl: 'provider-demos.html',
})
export class ProviderDemosPage {

  pages: Pages[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.onInit();
  }

  onInit() {
    this.populatePageList();
  }

  populatePageList() {
    this.pages = [
      { title: 'Storage Provider', component: 'StoragePage' },
      // { title: 'StorageProvider Demo', component: 'StoragePage' },
    ];
  }

  openPage(page) {
    this.navCtrl.push(page.component);
  }


}
