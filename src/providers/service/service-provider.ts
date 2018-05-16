import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  api : string = "http://www.farolfloripa.com.br/sistemadelivery/APIs/";

  constructor(public http: Http) {}


  recuperaPerfil(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiRecuperaPerfil.php", parans, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
  }

  geraTotal(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiSomaTotal.php", parans, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
  }
  
    getData() {
    return this.http.get(this.api + 'apiRecupera.php').map(res => res.json())
    
  }

  recuperaCarrinho(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiRecuperaCarrinho.php", parans, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
  }

  recuperaNome(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiRecuperaNome.php", parans, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
  }

  



    

  verificaUser(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiVerificaUser.php", parans, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
  }

  verificaCarrinhoCheio(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiCarrinhoCheio.php", parans, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
  }

 postData(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiCadastro.php", parans, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
  }

  deletaData(id){
	let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });  
	return this.http.post(this.api + "apiDeleta.php", id, {
		headers:headers,
		method:"POST"
	}).map(
		(res:Response) => {return res.json()}
	);	

  }

  deletaIntermediaria(id){
  let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });  
  return this.http.post(this.api + "apiDeletaIntermediaria.php", id, {
    headers:headers,
    method:"POST"
  }).map(
    (res:Response) => {return res.json()}
  );  

  }


  updateData(data){
	let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });  
	return this.http.post(this.api + "apiUpdatePerfil.php", data, {
		headers:headers,
		method:"POST"
	}).map(
		(res:Response) => {return res.json()}
	);	

  }

  postDataPerfil(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiCadastroPerfil.php", parans, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
  }

  confirmaPedido(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiConfirmaPedido.php", parans, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
  }

  movePedido(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiMovePedido.php", parans, {
          headers:headers,
          method:"POST"
    }).map(
          (res:Response) => {return res.json();}
    );
  }



}

