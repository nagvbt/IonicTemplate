import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchUrlPage } from './launch-url';

@NgModule({
  declarations: [
    LaunchUrlPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchUrlPage),
  ],
})
export class LaunchUrlPageModule {}
