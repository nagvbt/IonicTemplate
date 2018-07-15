import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions, InAppBrowserEvent } from '@ionic-native/in-app-browser';

export enum Target {
  SYSTEM = "_system",
  WEBVIEW = "_self",
  INAPPBROWSER = "_blank"

}

/*
* Class representing InAppBrowser & window.open(url) to Launch an url browser or in InAppBrowser.
* Author - Nag
* PLUGINS USED
* ionic cordova plugin add cordova-plugin-inappbrowser
* npm install --save @ionic-native/in-app-browser
*/
@Injectable()
export class LaunchUrlProvider {

  private inAppBrowserOptions: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    shouldPauseOnSuspend: 'no', //Android only 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    closebuttoncaption: 'X', //iOS only
    closebuttoncolor: "#424242",
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
    hidenavigationbuttons: 'false',
    toolbarcolor: '#F8F8F8',
    hideurlbar: false
  };

  private browser: any;
  constructor(public platform: Platform, public inAppBrowser: InAppBrowser, ) {
  }

  /**
   * Launch Url in the in-app-browser with out moving from the app
   * @param {string} url to open
   * @param {string} caption on the nav-bar
   */
  public launchUrlInAppBrowser(url: string, caption: string, navbarColor: string) {
    try {
      this.platform.ready().then(() => {
        let target = "_blank";
        this.inAppBrowserOptions.closebuttoncaption = 'X  ' + caption;
        this.inAppBrowserOptions.toolbarcolor = navbarColor;
        this.browser = this.inAppBrowser.create(url, target, this.inAppBrowserOptions);

        // subcribe to browser events
        let loadstart = this.browser.on("loadstart")
          .subscribe(event => this.handleOnLoadStart(event));
        let loadstop = this.browser.on("loadstop")
          .subscribe(event => this.handleOnLoadStop(event));
        let exit = this.browser.on("exit")
          .subscribe(event => this.handleOnExit(event));
        
      });
    } catch (e) {
      console.error(e);
    }
  }

  private handleOnLoadStart(event: InAppBrowserEvent) {
    console.log("start");
  }

  private handleOnLoadStop(event: InAppBrowserEvent) {
    console.log("stop");
  }

  private handleOnExit(event: InAppBrowserEvent) {
    console.log("exit");
  }

  /**
   * Launch Url in the browser 
   * @param {string} url to open
   * @param {Target} target
   * @param {boolean} showLocationbar
   */
  public launchUrlInBrowser(url: string, target: Target, showLocationbar: boolean) {
    let locationBar = "location=" + (showLocationbar ? "yes" : "no");
    this.platform.ready().then(() => {
      window.open(url, target, locationBar);
    });
  }

}
