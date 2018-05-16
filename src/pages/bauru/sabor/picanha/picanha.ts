import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServiceProvider} from '../../../../providers/service/service-provider'

import {Validators, FormBuilder} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picanha',
  templateUrl: 'picanha.html',
})
export class PicanhaPage {
	selectedItem: any;
  	icons: string[];
  	cadastro: any = {};
  	
  constructor(public navCtrl: NavController,
  	public formBuilder : FormBuilder, 
  	public navParams: NavParams, 
  	public service:ServiceProvider,
    private auth: AngularFireAuth, 
    public alertCtrl: AlertController
    ) {  

  	this.cadastro = this.formBuilder.group({
  		mt_sabor:[1, Validators.required],
  		mt_queijo:[1, Validators.required],
  		mt_ovo:[1, Validators.required],
  		mt_tomate:[1, Validators.required],
  		mt_alface:[1, Validators.required],
  		mt_condimentos:[1, Validators.required],
  		adc_bacon:[0, Validators.required],
  		adc_milho:[0, Validators.required],
  		adc_ervilha:[0, Validators.required],
  		adc_bpalha:[0, Validators.required],
  		adc_queijo:[0, Validators.required],
  		adc_cebola:[0, Validators.required],
  		observacoes:['', Validators.required]
  	});
    
  }
  postDados(){
  	this.service.postData(this.cadastro.value)
  		.subscribe(
  			data=>console.log(data.mensage),
  			err=>console.log(err)
  		);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Pronto!',
      subTitle: 'Pedido adicionado ao carrinho.',
      buttons: ['Ok']
    });
    alert.present();
  }

  
}
