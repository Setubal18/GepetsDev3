//Imports de componetes Ionic e Angular;
import { Component } from '@angular/core';
import { ModalController, NavController,NavParams } from 'ionic-angular';
//Imports das paginas utilizadas;
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';
// import {ResultadoPage} from "../resultado/resultado";
//Import do Providers utilizado no app;
import { Data } from '../../providers/data';



//Componentes da pagina;
@Component({
  selector: 'page-home', //Seletor da pagina;
  templateUrl: 'home.html' //URL do template associado a pagina;
})
export class HomePage { //Classe principal;

  public items = this.navParams.get('items'); //Array de Pacientes ;

  qtdPacientes = false;

  downloadall = false;

  pacienteFull = this.navParams.get('pacienteFull');

  constructor(public navCtrl: NavController, //Instanciação do controller de navegação;
              public modalCtrl: ModalController, //Instanciação do controller de Modais;
              public dataService: Data,
              public navParams:NavParams) { //Instanciação do Provider;

    this.dataService.getData().then((todos) => { // Pega todos os itens e armazena localmente;
      if (todos) {
        this.items = todos; //Coloca os itens armazenados no array de Pacientes;
      }
      else { //Se não houver pacientes ele retorna;
        this.qtdPacientes = true;
      }
    });

  }

  ionViewDidLoad() {

    console.log(this.items.length);
    console.log(this.items);
    // this.dowloadItens();

  }

  addItem() { //Metodo que adiciona pagientes ao modal de Paciente;

    let addModal = this.modalCtrl.create(AddItemPage,{pacienteFull:this.pacienteFull}); //Cria a Pagina AddItem como um modal;

    addModal.onDidDismiss((item) => {

      if (item) {
        this.saveItem(item);
      }

    });

    addModal.present();

    this.qtdPacientes = false;

  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  // chamadaResultado(){
  //   this.navCtrl.push(ResultadoPage);
  // }
  downloadAll() {
    this.downloadall = true;
  }

  canceldownloadAll() {
    this.downloadall = false;
  }
  //
  // dowloadItens() {
  //   console.log(this.checkbox);
  // }
}
