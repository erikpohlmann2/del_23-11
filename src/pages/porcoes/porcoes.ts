import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FritasPage } from './sabor/fritas/fritas';
import { PicanhaPage2 } from './sabor/picanha/picanha';

/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-porcoes',
  templateUrl: 'porcoes.html',
})
export class PorcoesPage {
	selectedItem: any;
  	icons: string[];
  	
  constructor(public navCtrl: NavController, public navParams: NavParams) {  

    
  }

  public gotoFritas(){ 
    this.navCtrl.push(FritasPage);
  }

  public gotoPicanha(){ 
    this.navCtrl.push(PicanhaPage2);
  }

  
}
