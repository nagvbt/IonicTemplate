import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppConfigs} from '../../constants'
import { Config } from 'ionic-angular/config/config';

/**
 *  Class representing a About
 *  Author - Nag
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  private appName: string;
  private versionNumber: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.onInit();
  }

  onInit() {
    this.appName = AppConfigs.APP_NAME;
    this.versionNumber = AppConfigs.APP_VERSION;
  }



}
