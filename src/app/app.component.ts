import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LogadoPage } from '../pages/logado/logado';
import { TabsPage } from '../pages/tabs/tabs';
import { PerfilPage } from '../pages/perfil/perfil';
import { Perfil_inicioPage } from '../pages/perfil_inicio/perfil_inicio';


//CATEGORIAS
import { BauruPage } from '../pages/bauru/bauru';
import { DogPage } from '../pages/dog/dog';
import { XisPage } from '../pages/xis/xis';
import { TorradaPage } from '../pages/torrada/torrada';
import { PorcoesPage } from '../pages/porcoes/porcoes';
import { BebidasPage } from '../pages/bebidas/bebidas';

//SABORES BAURU
import { CoracaoPage } from '../pages/bauru/sabor/coracao/coracao';
import { FilePage } from '../pages/bauru/sabor/file/file';
import { Nota10Page } from '../pages/bauru/sabor/nota10/nota10';
import { PicanhaPage } from '../pages/bauru/sabor/picanha/picanha';

//SABORES DOG
import { CalabresaPage } from '../pages/dog/sabor/calabresa/calabresa';

//SABORES PORÇÕES
import { FritasPage } from '../pages/porcoes/sabor/fritas/fritas';
import { PicanhaPage2 } from '../pages/porcoes/sabor/picanha/picanha';

// SABORES TORRADA
import { AmericanaPage } from '../pages/torrada/sabor/americana/americana';
import { FilePage2 } from '../pages/torrada/sabor/file/file';
import { SimplesPage } from '../pages/torrada/sabor/simples/simples';


// SABORES XIS
import { BaconPage } from '../pages/xis/sabor/bacon/bacon';
import { FrangoPage } from '../pages/xis/sabor/frango/frango';
import { PorcoPage } from '../pages/xis/sabor/porco/porco';
import { SaladaPage } from '../pages/xis/sabor/salada/salada';

// SABORES REFRI
import { RefriPage } from '../pages/bebidas/sabor/refri/refri';
import { AguaPage } from '../pages/bebidas/sabor/agua/agua';

// BIBLIOTECAS  FIREBASE E LOGINPAGE
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';


import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { Confirma_pedidoPage } from '../pages/confirma_pedido/confirma_pedido';

import { Inicio_fakePage } from '../pages/inicio_fake/inicio_fake';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

 constructor(platform: Platform, private afAuth: AngularFireAuth, statusBar: StatusBar, splashScreen: SplashScreen) {
      //verifica se está logado e redireciona.

      this.afAuth.authState.subscribe(auth => {
        if(!auth)
          this.rootPage = LoginPage;
        else
          this.rootPage = TabsPage;


      });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
