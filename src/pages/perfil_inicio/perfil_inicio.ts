import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service-provider'

import {Validators, FormBuilder} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { Inicio_fakePage } from '../inicio_fake/inicio_fake';


import * as firebase from 'firebase';
/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil_inicio',
  templateUrl: 'perfil_inicio.html',
})
export class Perfil_inicioPage {
    selectedItem: any;
    icons: string[];
    cadastro: any = {};
    id_user: any;
    tabBarElement: any;
    
    
  constructor(public navCtrl: NavController,
    public formBuilder : FormBuilder, 
    public navParams: NavParams, 
    public service:ServiceProvider,
    private auth: AngularFireAuth, 
    public alertCtrl: AlertController,
     private angularFireAuth: AngularFireAuth
    ) {  

    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    this.id_user = this.angularFireAuth.auth.currentUser.uid; //pega UID do usuario firebase
    

    this.cadastro = this.formBuilder.group({ 
      
      id_usuario:[this.id_user, Validators.required],      
      nome:['', Validators.required],
      sobrenome:['', Validators.required],
      cep:['', Validators.required],
      bairro:['', Validators.required],
      endereco:['', Validators.required],
      telefone:['', Validators.required]
    });
    
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  postDados(){
    this.service.postDataPerfil(this.cadastro.value)
      .subscribe(
        data=>console.log(data.mensage),
        err=>console.log(err)
      );
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Pronto!',
      subTitle: 'Seus dados foram salvos!',
      buttons: ['Ok']
    });
    alert.present();
  }

  public gotoTabsPage(){ 
    this.navCtrl.push(TabsPage);
  }

  public gotoInicio_fake(){ 
    this.navCtrl.setRoot(Inicio_fakePage);
  }

  
}