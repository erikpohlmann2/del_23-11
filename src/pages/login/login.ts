import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import {SignupPage} from '../../pages/signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';
import { Perfil_inicioPage } from '../perfil_inicio/perfil_inicio';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	loginData = {
		email:'',
		password:''

	};

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private toastCrlt: ToastController, public navParams: NavParams) {
  }

  login (){
  	this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email,this.loginData.password)
  		.then(auth => {

  		})
  		.catch(err=>{
  			let toast = this.toastCrlt.create({
  				message: err.message,
  				duration: 4000
  			});
  		
  			toast.present();
  		});

  }

  signup(){
  	this.navCtrl.push(SignupPage, {email: this.loginData.email});
  }

  public gotoPerfil_inicio(){ 
    this.navCtrl.push(Perfil_inicioPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
