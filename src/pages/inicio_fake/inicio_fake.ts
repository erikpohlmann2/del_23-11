import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BauruPage } from '../bauru/bauru';
import { DogPage } from '../dog/dog';
import { XisPage } from '../xis/xis';
import { TorradaPage } from '../torrada/torrada';
import { PorcoesPage } from '../porcoes/porcoes';
import { BebidasPage } from '../bebidas/bebidas';
import { CarrinhoPage } from '../carrinho/carrinho';
import { Perfil_inicioPage } from '../perfil_inicio/perfil_inicio';
import { TabsPage } from '../tabs/tabs';
import { LogadoPage } from '../logado/logado';

import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service-provider'
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Rx';

/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio_fake',
  templateUrl: 'inicio_fake.html',
})
export class Inicio_fakePage {
  timer: any;
    
    
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private auth: AngularFireAuth, 
    public alertCtrl: AlertController,
    public service: ServiceProvider,
    private formBuilder: FormBuilder,
    private angularFireAuth: AngularFireAuth
    ) {  

    
    this.timer = Observable.interval(1000).subscribe(x => {
      this.gotoLogado();
    });
    
  }

  

    public gotoLogado(){ 
        this.navCtrl.setRoot(LogadoPage); 
        this.timer.unsubscribe();
    }


}

