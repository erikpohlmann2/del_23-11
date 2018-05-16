import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PicanhaPage } from './picanha';

@NgModule({
  declarations: [
    PicanhaPage,
  ],
  imports: [
    IonicPageModule.forChild(PicanhaPage),
  ],
})
export class PicanhaPageModule {}
