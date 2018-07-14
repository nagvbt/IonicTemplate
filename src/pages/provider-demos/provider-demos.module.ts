import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderDemosPage } from './provider-demos';

@NgModule({
  declarations: [
    ProviderDemosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderDemosPage),
  ],
})
export class ProviderDemosPageModule {}
