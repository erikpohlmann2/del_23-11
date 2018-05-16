import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service-provider';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastrarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {cadastro: any = {};
	users : any[];
  	nome: boolean = false;
  	nometeste: string;
  	email: string="";

  constructor(public navCtrl: NavController, 
    public formBuilder: FormBuilder, 
    public service: ServiceProvider,
    public alertCtrl: AlertController) {
  	
    this.cadastro = this.formBuilder.group({
      nome:['', Validators.required],
      email:['', Validators.required],
      senha:['', Validators.required],
      endereco:['', Validators.required],
      bairro:['', Validators.required],
      telefone:['', Validators.required]
    })

  }

  public gotoHome(){ 
    this.navCtrl.push(HomePage); 
  }
  
  goBack(){ this.navCtrl.pop(); }

  


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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }



}
