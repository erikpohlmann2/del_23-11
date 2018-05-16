import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service-provider'

import {Validators, FormBuilder} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


import * as firebase from 'firebase';
/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
    selectedItem: any;
    icons: string[];
    cadastro: any = {};
    id_user: any;
    nome: any = '';
    sobrenome: any = '';
    cep: any = '';
    bairro: any = '';
    endereco: any = '';
    telefone: any = '';
    perfil:any = {};
    
    
  constructor(public navCtrl: NavController,
    public formBuilder : FormBuilder, 
    public navParams: NavParams, 
    public service:ServiceProvider,
    private auth: AngularFireAuth, 
    public alertCtrl: AlertController,
     private angularFireAuth: AngularFireAuth
    ) {  

    this.id_user = this.angularFireAuth.auth.currentUser.uid; //pega UID do usuario firebase
    
    this.perfil = this.formBuilder.group({
      id:[this.id_user, Validators.required],
    });

    this.recuperaPerfilTwo();

    this.cadastro = this.formBuilder.group({ 
      
      id:[this.id_user, Validators.required],      
      nome:[this.nome, Validators.required],
      sobrenome:[this.sobrenome, Validators.required],
      cep:[this.cep, Validators.required],
      bairro:[this.bairro, Validators.required],
      endereco:[this.endereco, Validators.required],
      telefone:[this.telefone, Validators.required]
    });
    
  }

  

  recuperaPerfilTwo(){
    this.service.recuperaPerfil(this.perfil.value)
      .subscribe(        
         data=> {
           this.nome = data.nome;
           this.sobrenome = data.sobrenome;
           this.cep = data.cep;
           this.bairro = data.bairro;
           this.endereco = data.endereco;
           this.telefone = data.telefone;
         },     
        err=>console.log(err)
      );
  }

  updateDados(){
    this.service.updateData(this.cadastro.value)
      .subscribe(
        data=>{
          console.log(data.mensage);
          this.recuperaPerfilTwo();   

        },  
        err=>console.log(err),
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

  
}