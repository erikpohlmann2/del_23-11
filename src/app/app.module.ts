import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ServiceProvider } from '../providers/service/service-provider';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';
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

// PAGINAS DE LOGIN

import { LoginPage } from '../pages/login/login';
import { SignupPage} from '../pages/signup/signup';

// SABORES XIS
import { BaconPage } from '../pages/xis/sabor/bacon/bacon';
import { FrangoPage } from '../pages/xis/sabor/frango/frango';
import { PorcoPage } from '../pages/xis/sabor/porco/porco';
import { SaladaPage } from '../pages/xis/sabor/salada/salada';

// SABORES REFRI
import { RefriPage } from '../pages/bebidas/sabor/refri/refri';
import { AguaPage } from '../pages/bebidas/sabor/agua/agua';

// BIBLIOTECA PARA USAR O FIREBASE PARA LOGIN
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CarrinhoPage } from '../pages/carrinho/carrinho';

import { Confirma_pedidoPage } from '../pages/confirma_pedido/confirma_pedido';

import { Inicio_fakePage } from '../pages/inicio_fake/inicio_fake';

// CONFIGURAÇÂO DO APP NO FIREBASE
var config = {
    apiKey: "AIzaSyAbzDZYWTb_2KpR6Hr9sIOFk3YlCY5cWys",
    authDomain: "delivery-rg.firebaseapp.com",
    databaseURL: "https://delivery-rg.firebaseio.com",
    projectId: "delivery-rg",
    storageBucket: "",
    messagingSenderId: "130694377411"

}


@NgModule({
  declarations: [
    MyApp,
    CadastrarPage,
    HomePage,
    LogadoPage,
    TabsPage,
    PerfilPage,
    Perfil_inicioPage,
    BauruPage,
    DogPage,
    XisPage,
    TorradaPage,
    PorcoesPage,
    BebidasPage,
    CoracaoPage,
    FilePage,
    Nota10Page,
    PicanhaPage,
    CalabresaPage,
    FritasPage,
    PicanhaPage2,
    AmericanaPage,
    FilePage2,
    SimplesPage,
    BaconPage,
    FrangoPage,
    PorcoPage,
    SaladaPage,
    LoginPage,
    SignupPage,
    RefriPage,
    AguaPage,
    CarrinhoPage,
    Inicio_fakePage,
    Confirma_pedidoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastrarPage,
    HomePage,
    LogadoPage,
    TabsPage,
    PerfilPage,
    Perfil_inicioPage,
    BauruPage,
    DogPage,
    XisPage,
    TorradaPage,
    PorcoesPage,
    BebidasPage,
    CoracaoPage,
    FilePage,
    Nota10Page,
    PicanhaPage,
    CalabresaPage,
    FritasPage,
    PicanhaPage2,
    AmericanaPage,
    FilePage2,
    SimplesPage,
    BaconPage,
    FrangoPage,
    PorcoPage,
    SaladaPage,
    LoginPage,
    SignupPage,
    RefriPage,
    AguaPage,
    CarrinhoPage,
    Inicio_fakePage,
    Confirma_pedidoPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
