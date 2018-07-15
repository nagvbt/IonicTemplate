import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchUrlProvider, Target } from '../../../providers';
import { Urls } from '../../../constants';

/**
 *  Class representing a LaunchUrlProvider Demo
 *  Author - Nag
 */
@IonicPage()
@Component({
  selector: 'page-launch-url',
  templateUrl: 'launch-url.html',
})
export class LaunchUrlPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public launchUrlProvider: LaunchUrlProvider) {
  }

  public lauchUrlInSystemBrowser() {
    this.launchUrlProvider.launchUrlInBrowser(Urls.WEBSITE_URL, Target.SYSTEM, true);
  }

  lauchUrlInWebView() {
    this.launchUrlProvider.launchUrlInBrowser(Urls.WEBSITE_URL, Target.WEBVIEW, true);
  }

  lauchUrlInNativeInAppBrowser() {
    this.launchUrlProvider.launchUrlInBrowser(Urls.WEBSITE_URL, Target.INAPPBROWSER, false);
  }

  public launchUrlInAppBrowser() {
    this.launchUrlProvider.launchUrlInAppBrowser(Urls.WEBSITE_URL, "Website", "red");
  }
}
