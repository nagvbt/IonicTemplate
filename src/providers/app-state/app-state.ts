import { Injectable } from '@angular/core';
import { AppStateDTO } from './app-state-dto'

/** 
 * Class representing a AppState - AppStateProvider - this state persists only when the app is live once the app is 
 * closed the AppState data will be destroyed.
 * NOTE: For small data to save permanently use StorageProvider which is a local Storage
 * Author - Nag
 */
@Injectable()
export class AppStateProvider {
  private stateData = {};
  private globalData: AppStateDTO;

  /**
  * Create a AppStateProvider.
  */
  constructor() {
  }

  /**
   * Save the AppState
   * @param {AppStateDTO} data save the AppStateDTO 
   */
  public setAppState(data: AppStateDTO) {
    this.globalData = data;
  }

  /**
   * Get the saved AppState
   * @return {AppStateDTO} the saved AppStateDTO data
   */
  public getAppState(): AppStateDTO {
    return this.globalData;
  }

  /**
   * Get the clone of the current stateData
   * @return {state} state a clone of the current state
   */
  get state() {
    return this.stateData = this.clone(this.stateData);
  }

  /**
   * get the value based on key
   * @param {any} key 
   * @return {any} value of key
   */
  get(key?: any) {
    const state = this.state;
    return state.hasOwnProperty(key) ? state[key] : state;
  }

  /**
   * Set value don't allow mutation
   * @param {any} value state a clone of the current state
   */
  set state(value) {
    throw new Error('do not mutate the `stateData` directly');
  }

  /**
   * Set the key value pair
   * @param {string} key
   * @param {any} any value
   * @return {any} the state
   */
  set(key: string, value: any) {
    return this.stateData[key] = value;
  }

  /**
   * Clone the object
   * @param {object} clone the input object
   * @return {any} object 
   */
  private clone(object) {
    return JSON.parse(JSON.stringify(object));
  }

}
