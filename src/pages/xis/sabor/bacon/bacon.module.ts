import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaconPage } from './bacon';

@NgModule({
  declarations: [
    BaconPage,
  ],
  imports: [
    IonicPageModule.forChild(BaconPage),
  ],
})
export class BaconPageModule {}
