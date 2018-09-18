//Imports de Componentes Angular e Ionic;
import { Component } from '@angular/core';
import {NavController,ModalController,NavParams } from 'ionic-angular';//Controller de Navegação;
// import {FormBuilder,FormGroup,Validators} from "@angular/forms";

//Import de Pages;
import {HomePage} from "../home/home";
import {SobrePage} from "../sobre/sobre";
import {AddItemPage} from "../add-item/add-item";
import {Data} from "../../providers/data";


//Componetes da pagina;
@Component({
  selector: 'page-main', //Seletor da pagina;
  templateUrl: 'main.html', //URL do template associdado a pagina;
})
export class MainPage { //Classe Principal;

  // validacao:FormGroup;
  // input: string;

  items:any=[];
  pacienteFull = this.navParams.get('paciente');

  constructor(public navCtrl: NavController,public  modalCtrl:ModalController,public dataService:Data, public navParams:NavParams ){} //Instanciando o controller de navegação;

//Metodo que ira puxar a pagina de Consulta da Pacientes;
  pushConsulta(){
    this.navCtrl.push(HomePage,{items:this.items,pacienteFull:this.pacienteFull});
  }

  addItem() { //Metodo que adiciona pagientes ao modal de Paciente;

    let addModal = this.modalCtrl.create(AddItemPage); //Cria a Pagina AddItem como um modal;

    addModal.onDidDismiss((item) => {

      if (item) {
        this.saveItem(item);
      }

    });

    addModal.present();



  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }
//Metodo que ira puxar a pagina de About Us ;
  pushAboutUs(){
    this.navCtrl.push(SobrePage);
  }
  // doLogin() {
  //   let alert = this.alert.create({
  //     title: 'Login',
  //     message: 'Enter a name for this new album you\'re so keen on adding',
  //     inputs: [
  //       {
  //         name: 'title',
  //         placeholder: 'Title'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Verificar',
  //         handler: (data) => {
  //           let validador = new Validators();
  //           let formBuilder = new FormBuilder();
  //
  //
  //           this.validacao = formBuilder.group({
  //             input:['',Validators.required]
  //             }
  //           );
  //           let input = this.validacao.controls;
  //             if (input.valid) {
  //               console.log('entroi');
  //               this.navCtrl.push(HomePage);
  //             }
  //             else {
  //               this.doLogin();
  //             }
  //           }
  //         }
  //       }
  //     ]
  //   });
  //
  //   alert.present();
  // }


}
