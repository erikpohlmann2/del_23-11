import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Perfil_inicioPage } from './perfil_inicio';

@NgModule({
  declarations: [
    Perfil_inicioPage,
  ],
  imports: [
    IonicPageModule.forChild(Perfil_inicioPage),
  ],
})
export class Perfil_inicioPageModule {}
