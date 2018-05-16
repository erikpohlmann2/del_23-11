import { Component } from '@angular/core';


import { Inicio_fakePage } from '../inicio_fake/inicio_fake';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Inicio_fakePage;
  tab2Root = PerfilPage;
  

  constructor() {

  }
}
