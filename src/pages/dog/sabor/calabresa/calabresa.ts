import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calabresa',
  templateUrl: 'calabresa.html',
})
export class CalabresaPage {
	selectedItem: any;
  	icons: string[];
  	
  constructor(public navCtrl: NavController, public navParams: NavParams) {  

    
  }

  
}
