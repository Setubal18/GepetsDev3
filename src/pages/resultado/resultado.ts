import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams} from 'ionic-angular';
import * as papa from 'papaparse';

import {Data} from "../../providers/data";
import {MainPage} from "../main/main";


/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  item: any;
  paciente = this.navParams.get('paciente').avaliacao;
  nome = this.navParams.get('paciente').nome;


  idAv1 = this.navParams.get('idAtual');
  idAv2 = this.navParams.get('idDesejado');
  idAv3 = this.navParams.get('idIdeal');
  idAv4 = this.navParams.get('idSexoOposto');

 percepcao =  this.navParams.get('imcAtual') - this.navParams.get('imcReal');
 Idsatisfacao = this.navParams.get('idDesejado') - this.navParams.get('idAtual');
 satisfacao = this.navParams.get('imcDesejado') - this.navParams.get('imcAtual');


  csvData = [
    {
      title: "IMC Real:",
      valor: this.navParams.get('imcReal'),
      idImage: '-'
    },
    {
      title: "IMC Atual:",
      valor: this.navParams.get('imcAtual'),
      idImage: this.idAv1
    },
    {
      title: "IMC Desejado",
      valor: this.navParams.get('imcDesejado'),
      idImage: this.idAv2
    },
    {
      title: "IMC Ideal para mesmo sexo:",
      valor: this.navParams.get('imcIdeal'),
      idImage: this.idAv3
    },
    {
      title: "IMC Ideal para sexo oposto:",
      valor: this.navParams.get('imcSexoOposto'),
      idImage: this.idAv4
    },
    {
      title: "Grau de percepção corporal:",
      valor: this.percepcao.toFixed(2),
      idImage: '-'
    },
    {
      title: "Grau de satisfação ou insatisfação corporal:",
      valor: this.satisfacao.toFixed(2),
      idImage:this.Idsatisfacao

    }
  ];
  headerRow: any[] = [
    {
      title: 'Tipo:'
    },
    {
      title: 'Resultado:'
    },
    {
      title: "Número da imagem:"
    }
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private action: ActionSheetController,
              public dataService: Data) {
    // this.dataService.getData().then((todos) => { // Pega todos os itens e armazena localmente;
    //   if (todos) {
    //     this.items = todos; //Coloca os itens armazenados no array de Pacientes;
    //   }
    // });

    console.log(this.paciente);

  }

  // saveItem(item) {
  //   this.items.push(item);
  //   this.dataService.save(this.items);
  // }

  downloadCSV() {
    let csv = papa.unparse({
      fields: ['Tipo', 'Resultado'],
      data: [
        ["IMC Real:", this.navParams.get('imcReal')],
        ["IMC Atual:", this.navParams.get('imcAtual')],
        ["IMC Desejado", this.navParams.get('imcDesejado')], //null para testar
        ["IMC Ideal para mesmo sexo::", this.navParams.get('imcIdeal')],
        ["IMC Ideal para sexo oposto:", this.navParams.get('imcSexoOposto')],
        ["Grau de percepção corporal:", this.percepcao],
        ["Grau de satisfação ou insatisfação corporal:", this.satisfacao]
      ]
    });

    //implementação para desktop;
    var blob = new Blob([csv]); //Pensar em implemetação para mobile
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "resultado.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // actions() {
  //   const actionSheet = this.action.create({
  //     buttons: [
  //       {
  //         text: 'Download',
  //
  //         handler: () => {
  //             this.downloadCSV();
  //         }
  //       },
  //       {
  //         text: 'Retornar a o menu Principal',
  //         handler: () => {
  //           this.paciente.avaliacoes.push(this.csvData);
  //           if(this.paciente) {
  //               this.dataService.getData().then((todos)=>{
  //                 if(todos){
  //                   this.paciente = todos;
  //                 }
  //
  //               }
  //             );
  //           }
  //           this.navCtrl.push(MainPage,{paciente:this.paciente});
  //
  //           console.log('salvo')
  //           console.log(this.paciente);
  //         }
  //       },
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

  actions() {
    const actionSheet = this.action.create({
      buttons: [
        {
          text: 'Download',

          handler: () => {
            this.downloadCSV();
          }
        },
        {
          text: 'Retornar a o menu Principal',
          handler: () => {
            this.navCtrl.push(MainPage);
            console.log('salvo')
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
