import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrangoPage } from './frango';

@NgModule({
  declarations: [
    FrangoPage,
  ],
  imports: [
    IonicPageModule.forChild(FrangoPage),
  ],
})
export class FrangoPageModule {}
