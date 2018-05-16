import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaconPage } from './sabor/bacon/bacon';
import { FrangoPage } from './sabor/frango/frango';
import { SaladaPage } from './sabor/salada/salada';
import { PorcoPage } from './sabor/porco/porco';

/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-xis',
  templateUrl: 'xis.html',
})
export class XisPage {
	selectedItem: any;
  	icons: string[];
  	
  constructor(public navCtrl: NavController, public navParams: NavParams) {  

    
  }

  public gotoBacon(){ 
    this.navCtrl.push(BaconPage);
  }

  public gotoFrango(){ 
    this.navCtrl.push(FrangoPage);
  }

  public gotoSalada(){ 
    this.navCtrl.push(SaladaPage);
  }

  public gotoPorco(){ 
    this.navCtrl.push(PorcoPage);
  }

  
}
