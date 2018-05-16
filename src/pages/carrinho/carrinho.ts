import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ServiceProvider} from '../../providers/service/service-provider'
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Confirma_pedidoPage } from '../confirma_pedido/confirma_pedido';
import { LogadoPage } from '../logado/logado';



import * as firebase from 'firebase';
/**
 * Generated class for the LogadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'carrinho-dog',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {
  selectedItem: any;
  icons: string[];
  compras:any[];

  perfil:any = {};
  id_user: any;

  private todo : FormGroup;

  precoTotal:any;
  valorFrete2:any;
  precoPedido:any;

  buscarPedido: any;

  carrinhoCheio:any;
  clicado:any; 
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public service:ServiceProvider,
    private auth: AngularFireAuth, 
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private angularFireAuth: AngularFireAuth
    
    ){                 

        this.id_user = this.angularFireAuth.auth.currentUser.uid; //pega UID do usuario firebase
        this.clicado = false;
        
    
        this.perfil = this.formBuilder.group({
          id:[this.id_user, Validators.required],
          bairro:['',Validators.required],
          endereco:['',Validators.required],
          busca:[this.buscarPedido, Validators.required]
        });
               
        this.getDados();
        /*this.somaTotal();*/
    
      } /*Fim constructor*/
 
 getDados(){
    this.service.recuperaCarrinho(this.perfil.value).subscribe(
      data=>{
        this.compras = data;        
      }, 
      err => console.log(err),

    );
  }


  deletarPedido(compra){
    this.service.deletaData(compra.id)
      .subscribe(
        data=>{
          console.log(data.mensage);
          this.getDados(); /*Quando apagar, retorna os dados atualizados*/
          /*this.somaTotal();*/
        },
        err=>console.log(err)
      );
  }


  deletaIntermediaria(){
    this.service.deletaIntermediaria(this.perfil.value)
      .subscribe(
        data=>{          
          console.log(data.mensage);
        },
        err=>console.log(err)
      );
  }

  verificaCarrinho(){ 

    if(this.clicado == false){

        this.service.verificaCarrinhoCheio(this.perfil.value)
          .subscribe(
            data=>{ 
              this.carrinhoCheio = data.mensage;
              
              if(this.carrinhoCheio == "s"){            
                this.ConfirmaPedido();
              }

              if (this.carrinhoCheio == "n"){
                this.showAlertVazio();
              }

              this.clicado = true;
              console.log("cliquei");
              
            },
            err=>console.log(err)
          );
    }
  }

  ConfirmaPedido(){
    this.service.confirmaPedido(this.perfil.value)
      .subscribe(
        data=>{    
          this.precoTotal = data.precoTotal;
          this.valorFrete2 = data.valorFreteFinal;
          this.precoPedido = data.precoPedido;      
          console.log(data.mensage);          
          this.showAlert();
        },
        err=>console.log(err)
      );
  }

  /*somaTotal(){    
    this.service.geraTotal(this.perfil.value)
      .subscribe(
        data=>{
          this.precoTotal = data.precoTotal;
          this.valorFrete2 = data.valorFreteFinal;
          this.precoPedido = data.precoPedido;          
          console.log(data.mensage);
          this.showAlert();                 
        },
        err=>console.log(err)
      );
  }*/

  showAlert() {

     let alert = this.alertCtrl.create({
      title: 'Confirme seu pedido',
      subTitle: 'Frete: R$'+this.valorFrete2+
      '<br>Pedido: R$'+this.precoPedido+
      '<br>Total: R$'+this.precoTotal,
      buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
               handler: () => {
                this.deletaIntermediaria();
                this.getDados();
                this.clicado = false;
              }
            },
            {
              text: 'Confirmar',              
              handler: () => {
                this.MovePedido();                
                this.showAlertConfirma();
              }
            }
            
          ]
        });
    alert.present();
  }

   MovePedido(){
      this.service.movePedido(this.perfil.value)
        .subscribe(
          data=>{           
            console.log(data.mensage); 
          },
          err=>console.log(err)
        );
    }

  showAlertVazio(){
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: 'O carrinho está vazio.',
      buttons: [
            {
              text: 'Ok',
            }
          ]
        });
    alert.present();
    this.clicado = false;
  }

  showAlertConfirma(){
    let alert = this.alertCtrl.create({
      title: 'Pronto!',
      subTitle: 'Pedido confirmado com sucesso.',
      buttons: [
            {
              text: 'Ok',              
              handler: () => {
                this.gotoLogado();
                

              }
            }
          ]
        });
    alert.present();
  }

 padrao: boolean = true;
 outro: boolean = true;
 busca: boolean = true;
  
 radio_select(value) {
    if (value == 'padrao') {
      this.padrao = false;
      this.outro = true;
      this.busca = true;
      this.buscarPedido = "nao";
      this.perfil = this.formBuilder.group({
          id:[this.id_user, Validators.required]
      });
    } else if (value == 'naopadrao') {
      this.padrao = true;
      this.outro = false;
      this.busca = true;
      this.buscarPedido = "nao";
      this.perfil = this.formBuilder.group({
          id:[this.id_user, Validators.required],
          bairro:['',Validators.required],
          endereco:['',Validators.required]          
      });
    } else if (value == 'buscar'){
      this.padrao = true;
      this.outro = true;
      this.busca = false;
      this.perfil = this.formBuilder.group({
          id:[this.id_user, Validators.required],          
          busca:['sim', Validators.required]
      });
    }
  }

  public gotoConfirma(){ 
    this.navCtrl.setRoot(CarrinhoPage);
  }
  public gotoLogado(){ 
    this.navCtrl.setRoot(LogadoPage);
  }

  
}