import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmericanaPage } from './americana';

@NgModule({
  declarations: [
    AmericanaPage,
  ],
  imports: [
    IonicPageModule.forChild(AmericanaPage),
  ],
})
export class AmericanaPageModule {}
