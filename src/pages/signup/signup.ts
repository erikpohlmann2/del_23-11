import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import {AngularFireAuth} from 'angularfire2/auth';

import {ServiceProvider} from '../../providers/service/service-provider'

import {Validators, FormBuilder} from '@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signupData = {
    email:'',
    password:'',
    passwordRetyped:''
  };

  cadastro: any = {};
   id_user: any;

  constructor(public navCtrl: NavController, 
        public navParams: NavParams, 
        private alertCtrl: AlertController,
        private afAuth: AngularFireAuth,
        public service:ServiceProvider,
        public formBuilder : FormBuilder,
      
        ){

    this.signupData.email = this.navParams.get('email');
  }

  signup(){
    if(this.signupData.password !== this.signupData.passwordRetyped){
      let alert = this.alertCtrl.create({
        title : ' Erro',
        message: ' Suas senhas estão diferentes, tente novamente',
        buttons: ['Ok']
      });

      alert.present();
      return;
    }

    this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password)    
      .then (auth =>{
         
         

        
        
        
      })
      
    //firebase code sigin

    

  }
  
  postDados(){
    this.service.postDataPerfil(this.cadastro.value)
      .subscribe(
        data=>console.log(data.mensage),
        err=>console.log(err)
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}