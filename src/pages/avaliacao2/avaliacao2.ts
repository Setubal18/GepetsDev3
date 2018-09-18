import { Component,ViewChild } from '@angular/core';
import {NavController, NavParams,ModalController } from 'ionic-angular';
import {Avaliacao3Page} from "../avaliacao3/avaliacao3";





/**
 * Generated class for the AvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-avaliacao2',
  templateUrl: 'avaliacao2.html',
})
export class Avaliacao2Page {

//Arrays de pergunta  e a base de imagem
  avaliacao1 = this.navParams.get('avaliacao');
  selecionado = this.navParams.get('selecionado');
  imcAtual = this.navParams.get('imcAtual');
  imcDesejado:any;
  idDesejado:any;
  idAtual = this.navParams.get('idAtual');

//Variaveis q recebem parametros das paginas de detail e cadstro
  genero = this.navParams.get('paciente').genero;
  dtnascimento = this.navParams.get('paciente').dtnascimento;
  peso = this.navParams.get('paciente').peso;
  altura = this.navParams.get('paciente').altura;

// Variaveis formatadas para calculo de idade
  dataNascimento= new Date(this.dtnascimento).getFullYear();
  dataAtual = new Date(Date.now()).getFullYear();

// Variaveis com operações matematicas
  idade = this.dataAtual - this.dataNascimento;
  imcReal= this.navParams.get('imcReal');

  naoprimeiro:boolean;

  @ViewChild('slider') slider: any;
  slides = [];
  adultF = [
    {
      title: "Imagem 1",
      description: "",
      id: 1,
      imc:12.5,
      image:"assets/imgs/Adult_Mulher1.png",
    },
    {
      title: "Imagem 2",
      description: "",
      id:2,
      imc:15,
      image: "assets/imgs/Adult_Mulher2.png",
    },
    {
      title: "Imagem 3",
      description: "",
      id: 3,
      imc:17.5,
      image: "assets/imgs/Adult_Mulher3.png",
    },
    {
      title: "Imagem 4",
      description: "",
      id: 4,
      imc:20,
      image: "assets/imgs/Adult_Mulher4.png",
    },
    {
      title: "Imagem 5",
      description: "",
      id: 5,
      imc:22.5,
      image: "assets/imgs/Adult_Mulher5.png",
    },
    {
      title: "Imagem 6",
      description: "",
      id: 6,
      imc:25,
      image: "assets/imgs/Adult_Mulher6.png",
    },
    {
      title: "Imagem 7",
      description: "",
      id: 7,
      imc:27.5,
      image: "assets/imgs/Adult_Mulher7.png",
    }, {
      title: "Imagem 8",
      description: "",
      id: 8,
      imc:30,
      image: "assets/imgs/Adult_Mulher8.png",
    },
    {
      title: "Imagem 9",
      description: "",
      id: 9,
      imc:32.5,
      image: "assets/imgs/Adult_Mulher9.png",
    },
    {
      title: "Imagem 10",
      description: "",
      id: 10,
      imc:35,
      image: "assets/imgs/Adult_Mulher10.png",
    },
    {
      title: "Imagem 11",
      description: "",
      id:11,
      imc:37.5,
      image: "assets/imgs/Adult_Mulher11.png",
    },
    {
      title: "Imagem 12",
      description: "",
      id:12,
      imc:40,
      image: "assets/imgs/Adult_Mulher12.png",
    },
    {
      title: "Imagem 13",
      description: "",
      id:13,
      imc:42.5,
      image: "assets/imgs/Adult_Mulher13.png",
    },
    {
      title: "Imagem 14",
      description: "",
      id:14,
      imc:45,
      image: "assets/imgs/Adult_Mulher14.png",
    },
    {
      title: "Imagem 15",
      description: "",
      id:15,
      imc:47.5,
      image: "assets/imgs/Adult_Mulher15.png",
    },

  ];

  adultM =[ {
    title: "Imagem 16",
    description: "",
    id: 1,
    imc:12.5,
    image: "assets/imgs/Adult_Homem1.png",
  },
    {
      title: "Imagem 17",
      description: "",
      id:2,
      imc:15,
      image: "assets/imgs/Adult_Homem2.png",
    },
    {
      title: "Imagem 18",
      description: "",
      id: 3,
      imc:17.5,
      image: "assets/imgs/Adult_Homem3.png",
    },
    {
      title: "Imagem 19",
      description: "",
      id: 4,
      imc:20,
      image: "assets/imgs/Adult_Homem4.png",
    },
    {
      title: "Imagem 20",
      description: "",
      id: 5,
      imc:22.5,
      image: "assets/imgs/Adult_Homem5.png",
    },
    {
      title: "Imagem 21",
      description: "",
      id: 6,
      imc:25,
      image: "assets/imgs/Adult_Homem6.png",
    },
    {
      title: "Imagem 22",
      description: "",
      id: 7,
      imc:27.5,
      image: "assets/imgs/Adult_Homem7.png",
    }, {
      title: "Imagem 23",
      description: "",
      id: 8,
      imc:30,
      image: "assets/imgs/Adult_Homem8.png",
    },
    {
      title: "Imagem 24",
      description: "",
      id: 9,
      imc:32.5,
      image: "assets/imgs/Adult_Homem9.png",
    },
    {
      title: "Imagem 25",
      description: "",
      id: 10,
      imc:35,
      image: "assets/imgs/Adult_Homem10.png",
    },
    {
      title: "Imagem 26",
      description: "",
      id:11,
      imc:37.5,
      image: "assets/imgs/Adult_Homem11.png",
    },
    {
      title: "Imagem 27",
      description: "",
      id:12,
      imc:40,
      image: "assets/imgs/Adult_Homem12.png",
    },
    {
      title: "Imagem 28",
      description: "",
      id:13,
      imc:42.5,
      image: "assets/imgs/Adult_Homem13.png",
    },
    {
      title: "Imagem 29",
      description: "",
      id:14,
      imc:45,
      image: "assets/imgs/Adult_Homem14.png",
    },
    {
      title: "Imagem 30",
      description: "",
      id:15,
      imc:47.5,
      image: "assets/imgs/Adult_Homem15.png",
    },

  ];

  kidM = [
    {
      title: "Imagem 31",
      description: "",
      id: 1,
      imc:12,
      image: "assets/imgs/Kid_Homem1.png",
    },
    {
      title: "Imagem 32",
      description: "",
      id:2,
      imc:13.7,
      image: "assets/imgs/Kid_Homem2.png",
    },
    {
      title: "Imagem 33",
      description: "",
      id: 3,
      imc:15.4,
      image: "assets/imgs/Kid_Homem3.png",
    },
    {
      title: "Imagem 34",
      description: "",
      id: 4,
      imc:17.1,
      image: "assets/imgs/Kid_MHomem4.png",
    },
    {
      title: "Imagem 35",
      description: "",
      id: 5,
      imc:18.8,
      image: "assets/imgs/Kid_Homem5.png",
    },
    {
      title: "Imagem 36",
      description: "",
      id: 6,
      imc:20.5,
      image: "assets/imgs/Kid_Homem6.png",
    },
    {
      title: "Imagem 37",
      description: "",
      id: 7,
      imc:22.2,
      image: "assets/imgs/Kid_Homem7.png",
    }, {
      title: "Imagem 38",
      description: "",
      id:8,
      imc:23.9,
      image: "assets/imgs/Kid_Homem8.png",
    },
    {
      title: "Imagem 39",
      description: "",
      id: 9,
      imc:25.6,
      image: "assets/imgs/Kid_Homem9.png",
    },
    {
      title: "Imagem 40",
      description: "",
      id: 10,
      imc:27.3,
      image: "assets/imgs/Kid_Homem10.png",
    },
    {
      title: "Imagem 41",
      description: "",
      id:11,
      imc:29,
      image: "assets/imgs/Kid_Homem11.png",
    },
  ];

  kidF = [
    {
      title: "Imagem 42",
      description: "",
      id: 1,
      imc:12,
      image: "assets/imgs/Kid_Mulher1.png",
    },
    {
      title: "Imagem 43",
      description: "",
      id:2,
      imc:13.7,
      image: "assets/imgs/Kid_Mulher2.png",
    },
    {
      title: "Imagem 44",
      description: "",
      id: 3,
      imc:15.4,
      image: "assets/imgs/Kid_Mulher3.png",
    },
    {
      title: "Imagem 45",
      description: "",
      id: 4,
      imc:17.1,
      image: "assets/imgs/Kid_Mulher4.png",
    },
    {
      title: "Imagem 46",
      description: "",
      id: 5,
      imc:18.8,
      image: "assets/imgs/Kid_Mulher5.png",
    },
    {
      title: "Imagem 47",
      description: "",
      id: 6,
      imc:20.5,
      image: "assets/imgs/Kid_Mulher6.png",
    },
    {
      title: "Imagem 48",
      description: "",
      id: 7,
      imc:22.2,
      image: "assets/imgs/Kid_Mulher7.png",
    },
    {
      title: "Imagem 49",
      description: "",
      id: 8,
      imc:23.9,
      image: "assets/imgs/Kid_Mulher8.png",
    },
    {
      title: "Imagem 50",
      description: "",
      id: 9,
      imc:25.6,
      image: "assets/imgs/Kid_Mulher9.png",
    },
    {
      title: "Imagem 51",
      description: "",
      id: 10,
      imc:27.3,
      image: "assets/imgs/Kid_Mulher10.png",
    },
    {
      title: "Imagem 52",
      description: "",
      id:11,
      imc:29,
      image: "assets/imgs/Kid_Mulher11.png",
    },
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCrtl : ModalController) {


    this.showSlides();
    this.naoprimeiro;
  }

  // ionViewDidLoad() {
  //   console.log('genero:' + ' ' + this.genero);
  //   console.log('idade:' + ' ' + this.idade);
  //   console.log('peso:' + ' ' + this.peso);
  //   console.log('altura:' + ' ' + this.altura);
  //   console.log('imc real:' + ' ' + this.imcReal);
  //   this.selecionado.push(this.avaliacao1);
  //   this.imcAtual.push(this.navParams.get('imcAtual'));
  //   console.log(this.selecionado)
  // }

  showSlides() {
    if (this.genero == 'masculino') {
      if (this.idade > 7) {
        this.slides = this.kidM
      }
      if (this.idade >= 13) {
        this.slides = this.adultM;
      }
    }
    else {
      if (this.idade > 7) {
        this.slides = this.kidF
      }
      if (this.idade >= 13) {
        this.slides = this.adultF;
      }

    }
  }
  slideNext(){
    this.slider.slideNext();
    if(this.slider.valueOf().isEnd()) {
      this.slidePrev();
    }
    this.naoprimeiro = true
  }

  slidePrev(){
    this.slider.slidePrev();
    if(this.slider.valueOf().isBeginning()) {
      this.naoprimeiro = false;    }



  }


  addSlides(slide) { //Método para adiconar o slide a lista de selecionado
    if (this.selecionado.indexOf(slide) === -1) {
      this.selecionado.push(slide.imc);
      this.selecionado.push(slide.id);
      console.log('selecionado');
      console.log(this.selecionado);
      this.idDesejado=slide.id;
      this.imcDesejado = slide.imc;

    }
    this.callAv3()
  }

  callAv3(){
    let av3 = this.modalCrtl.create(Avaliacao3Page,{avaliacao2:this.selecionado,
      paciente:this.navParams.get('paciente'),
      selecionado:this.selecionado,
      imcReal:this.imcReal,
      imcAtual:this.imcAtual,
      idAtual :this.idAtual,
      imcDesejado:this.imcDesejado,
      idDesejado:this.idDesejado

    });
    av3.present();
  }

}
