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

import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service-provider'
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logado',
  templateUrl: 'logado.html',
})
export class LogadoPage {
    
    selectedItem: any;
    icons: string[];
    uids:any[];
    uid_firebase: any;
    private todo : FormGroup;
    num: any;
    cadastro:any ={};
    id_user: any;
    msg:any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private auth: AngularFireAuth, 
    public alertCtrl: AlertController,
    public service: ServiceProvider,
    private formBuilder: FormBuilder,
    private angularFireAuth: AngularFireAuth
    ) {  

    this.id_user = this.angularFireAuth.auth.currentUser.uid;

    this.cadastro = this.formBuilder.group({       
        id_usuario:[this.id_user, Validators.required]      
     });

    this.verificaUID();
    
  }

verificaUID(){
    this.service.verificaUser(this.cadastro.value)
      .subscribe(        
         data=> {
           this.msg = data.mensage;
           console.log(this.msg);
           if(this.msg == 'n'){
              this.gotoPerfil_inicio();
           }
         },     
        err=>console.log(err)
      );
  }



 

  // função para deslogar.
  signOut() {
    this.auth.auth.signOut();
  }

  public gotoPerfil_inicio(){ 
    this.navCtrl.push(Perfil_inicioPage); 
  }

  public gotoBauru(){ 
    this.navCtrl.push(BauruPage); 
  }

  public gotoDog(){ 
    this.navCtrl.push(DogPage); 
  }

  public gotoXis(){ 
    this.navCtrl.push(XisPage); 
  }

  public gotoTorrada(){ 
    this.navCtrl.push(TorradaPage); 
  }

  public gotoPorcoes(){ 
    this.navCtrl.push(PorcoesPage); 
  }

  public gotoBebidas(){ 
    this.navCtrl.push(BebidasPage); 
  }

  public gotoCarrinho(){ 
    this.navCtrl.push(CarrinhoPage); 
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: 'Para apagar um pedido deslize para a esquerda.',


      buttons: ['Entendi']
    });
    alert.present();
  }

  showAlertBoasVindas() {
    let alert = this.alertCtrl.create({
      title:  'Bem Vindo',
      buttons: ['Obrigado']
    });
    alert.present();
  }
  
}

