import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder} from '@angular/forms';

import { NavController } from 'ionic-angular';

import { ServiceProvider } from '../../providers/service/service-provider';

import { AlertController } from 'ionic-angular';

import { CadastrarPage } from '../cadastrar/cadastrar';

import { LogadoPage } from '../logado/logado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  cadastro: any = {};
	users : any[];
  nome: boolean = false;
  nometeste: string;
  email: string="";

  constructor(public navCtrl: NavController, 
    public formBuilder: FormBuilder, 
    public service: ServiceProvider,
    public alertCtrl: AlertController) {
  	
    this.cadastro = this.formBuilder.group({
      
      email:['', Validators.required],
      senha:['', Validators.required]
    })

  }

  public gotoLogado(){ 
    this.navCtrl.push(LogadoPage); 
  }

  public gotoCadastrar(){ 
    this.navCtrl.push(CadastrarPage); 
  }


//ngOnInitserve para nao travar, para iniciar as aplicações independentementes, inicia mais rapido
  ngOnInit(){ 
    this.getDados();
  }

  mostraNome(){
    this.nome = !this.nome;
  }
  //resgata os dados e coloca na nossa view
  getDados(){
  	this.service.getData()
    .subscribe(
  		data=> this.users = data,
  		err=> console.log(err)
  	);
  }

  postDados(){
    this.service.postData(this.cadastro.value)
      .subscribe(
        data=>console.log(data.mensage),
        err=>console.log(err)
        );
  }

  deletarPerfil(user){
    this.service.deletaData(user.id)
      .subscribe(
        data=>{
          console.log(data.mensage);
          this.getDados();
        },
        err=>console.log(err)
        );
  }

  editarPerfil(req) {
    let prompt = this.alertCtrl.create({
      title: 'Editar Perfil',
      
      inputs: [
        {
          name: 'nome',
          placeholder: 'nome',
          value: req.nome
        },
        {
          name: 'email',
          placeholder: 'email',
          value: req.email
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {}
        },
        {
          text: 'Salvar',
          handler: data => {

            let params:any={
              id: req.id,
              nome: data.nome,
              email: data.email
            }
            console.log('Saved clicked');
            this.service.updateData(params)
            .subscribe(
              data=>{
                console.log(data.mensage);
                this.getDados();
              },
              err=>console.log(err)
             );
          }
        }
      ]
    });
    prompt.present();
  }

}
