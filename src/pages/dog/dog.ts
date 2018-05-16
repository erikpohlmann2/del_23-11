import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalabresaPage } from './sabor/calabresa/calabresa';

/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dog',
  templateUrl: 'dog.html',
})
export class DogPage {
	selectedItem: any;
  	icons: string[];
  	
  constructor(public navCtrl: NavController, public navParams: NavParams) {  

    
  }

  public gotoCalabresa(){ 
    this.navCtrl.push(CalabresaPage);
  }

  
}
