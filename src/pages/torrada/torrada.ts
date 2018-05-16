import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilePage2 } from './sabor/file/file';
import { AmericanaPage } from './sabor/americana/americana';
import { SimplesPage } from './sabor/simples/simples';

/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-torrada',
  templateUrl: 'torrada.html',
})
export class TorradaPage {
	selectedItem: any;
  	icons: string[];
  	
  constructor(public navCtrl: NavController, public navParams: NavParams) {  

    
  }

  public gotoAmericana(){ 
    this.navCtrl.push(AmericanaPage);
  }

  public gotoFile(){ 
    this.navCtrl.push(FilePage2);
  }

  public gotoSimples(){ 
    this.navCtrl.push(SimplesPage);
  }

 

  
}
