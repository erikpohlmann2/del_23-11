import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RefriPage } from './sabor/refri/refri';
import { AguaPage } from './sabor/agua/agua';

/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})
export class BebidasPage {
	selectedItem: any;
  	icons: string[];
  	
  constructor(public navCtrl: NavController, public navParams: NavParams) {  

    
  }

  public gotoRefri(){ 
    this.navCtrl.push(RefriPage);
  }

  public gotoAgua(){ 
    this.navCtrl.push(AguaPage);
  }

  
}
