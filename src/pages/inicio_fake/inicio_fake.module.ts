import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Inicio_fakePage } from './inicio_fake';

@NgModule({
  declarations: [
    Inicio_fakePage,
  ],
  imports: [
    IonicPageModule.forChild(Inicio_fakePage),
  ],
})
export class LogadoPageModule {}
