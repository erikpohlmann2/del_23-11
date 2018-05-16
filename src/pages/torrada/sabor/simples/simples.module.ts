import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimplesPage } from './simples';

@NgModule({
  declarations: [
    SimplesPage,
  ],
  imports: [
    IonicPageModule.forChild(SimplesPage),
  ],
})
export class SimplesPageModule {}
