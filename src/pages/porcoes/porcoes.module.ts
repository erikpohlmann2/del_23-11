import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PorcoesPage } from './porcoes';

@NgModule({
  declarations: [
    PorcoesPage,
  ],
  imports: [
    IonicPageModule.forChild(PorcoesPage),
  ],
})
export class PorcoesPageModule {}
