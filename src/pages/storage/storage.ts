import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { StorageProvider } from '../../providers'


/**
 *  Class representing a StorageProvider Demo
 *  Author - Nag
 */
@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {

  private editValue;

  constructor(public storageProvider: StorageProvider) {
  }

  set() {
    this.storageProvider.setValue('EDIT_KEY', this.editValue);
  }

  get() {
    this.storageProvider.getValue('EDIT_KEY').then((value) => {
      alert('StorageTest \nSaved value: ' + value);
    });
  }


}
