import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


/** 
 * Class representing a local Storage - StorageProvider
 * Author - Nag
 */
@Injectable()
export class StorageProvider {

  /**
    * Create a StorageProvider.
    */
  constructor(public storage: Storage) {
  }


  /**
   * Set the Key - Value pair in Storge
   * @param {string} key
   * @param {any} value
   */
  setValue(key: string, value: any) {
    this.storage.set(key, value);
  }

  /**
   * Get the Value for a Key from Storge
   * @param {string} key
   * @return {any} value
   */
  getValue(key: string) {
    return this.storage.get(key);
  }

}
