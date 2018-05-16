import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaladaPage } from './salada';

@NgModule({
  declarations: [
    SaladaPage,
  ],
  imports: [
    IonicPageModule.forChild(SaladaPage),
  ],
})
export class SaladaPageModule {}
