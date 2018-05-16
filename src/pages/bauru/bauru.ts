import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoracaoPage } from './sabor/coracao/coracao';
import { FilePage } from './sabor/file/file';
import { Nota10Page } from './sabor/nota10/nota10';
import { PicanhaPage } from './sabor/picanha/picanha';

/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bauru',
  templateUrl: 'bauru.html',
})
export class BauruPage {
	selectedItem: any;
  	icons: string[];
  	
  constructor(public navCtrl: NavController, public navParams: NavParams) {  

    
  }

  public gotoCoracao(){ 
    this.navCtrl.push(CoracaoPage);
  }

  public gotoFile(){ 
    this.navCtrl.push(FilePage);
  }

  public gotoNota10(){ 
    this.navCtrl.push(Nota10Page);
  }

  public gotoPicanha(){ 
    this.navCtrl.push(PicanhaPage);
  }

  
}
