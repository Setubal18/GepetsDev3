webpackJsonp([3],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sobre_sobre__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_item_add_item__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Imports de Componentes Angular e Ionic;

 //Controller de Navegação;
// import {FormBuilder,FormGroup,Validators} from "@angular/forms";
//Import de Pages;




//Componetes da pagina;
var MainPage = (function () {
    function MainPage(navCtrl, modalCtrl, dataService, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.navParams = navParams;
        // validacao:FormGroup;
        // input: string;
        this.items = [];
        this.pacienteFull = this.navParams.get('paciente');
    } //Instanciando o controller de navegação;
    //Metodo que ira puxar a pagina de Consulta da Pacientes;
    MainPage.prototype.pushConsulta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { items: this.items, pacienteFull: this.pacienteFull });
    };
    MainPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_item_add_item__["a" /* AddItemPage */]); //Cria a Pagina AddItem como um modal;
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveItem(item);
            }
        });
        addModal.present();
    };
    MainPage.prototype.saveItem = function (item) {
        this.items.push(item);
        this.dataService.save(this.items);
    };
    //Metodo que ira puxar a pagina de About Us ;
    MainPage.prototype.pushAboutUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sobre_sobre__["a" /* SobrePage */]);
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-main',template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\main\main.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()"><ion-icon name="md-add-circle"></ion-icon></button>\n    </ion-buttons>\n   <ion-title style="text-align: center">\n      <strong>GEPETS</strong>\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button  round color=\'secondary\' full end (click)="pushConsulta()">\n    Consulta\n  </button>\n  <!--<button ion-button  round color=\'secondary\' full end  (click)="chamadaNovaAvaliacao()">-->\n  <!--Avaliação-->\n  <!--</button>-->\n  <ion-footer>\n  <div style="text-align:center;">\n    <h5>Desenvolvido por :<br/> João Vitor Moreno e Leonardo Setubal </h5>\n  </div>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\main\main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__avaliacao_avaliacao__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddItemPage = (function () {
    function AddItemPage(nav, view, formBuilder) {
        this.nav = nav;
        this.view = view;
        this.formBuilder = formBuilder;
        this.hoje = Date.now();
        this.idade = this.hoje - this.dtnascimento;
        this.erroNome = false;
        this.erroGenero = false;
        this.erroPeso = false;
        this.erroAltura = false;
        this.erroDtNascimento = false;
        this.formCadastro = this.formBuilder.group({
            nome: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            genero: [""],
            peso: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            altura: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            dtnascimento: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    AddItemPage.prototype.Validator = function () {
        var _a = this.formCadastro.controls, nome = _a.nome, peso = _a.peso, altura = _a.altura, dtnascimento = _a.dtnascimento;
        if (!this.formCadastro.valid) {
            if (!nome.valid) {
                this.erroNome = true;
            }
            else {
                this.erroNome;
            }
            if (!peso.valid) {
                this.erroPeso = true;
            }
            else {
                this.erroPeso;
            }
            if (!altura.valid) {
                this.erroAltura = true;
            }
            else {
                this.erroAltura;
            }
            if (!dtnascimento.valid) {
                this.erroDtNascimento = true;
            }
            else {
                this.erroDtNascimento;
            }
        }
    };
    AddItemPage.prototype.saveItem = function () {
        var newItem = {
            nome: this.nome,
            genero: this.genero,
            dtnascimento: this.dtnascimento,
            altura: this.altura,
            peso: this.peso,
            idade: this.idade,
            avaliacoes: []
        };
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__avaliacao_avaliacao__["a" /* AvaliacaoPage */], { paciente: newItem });
        this.view.dismiss(newItem);
    };
    AddItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    return AddItemPage;
}());
AddItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-item',template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\add-item\add-item.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n  	<ion-title style="text-align: center">\n  	  Cadastro\n  	</ion-title>\n    	<ion-buttons end>\n    		<button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n    	</ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="formCadastro" (ngSubmit)="Validator()" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Nome:</ion-label>\n        <ion-input formControlName="nome" [(ngModel)]="nome" type="text" placeholder="Nome"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="formCadastro.get(\'nome\').errors && formCadastro.get(\'nome\').dirty">\n        <p color="danger" ion-text *ngIf="formCadastro.get(\'nome\').hasError(\'required\')">Campo Obrigatorio</p>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Data de nascimento:</ion-label>\n        <ion-input formControlName="dtnascimento" [(ngModel)]="dtnascimento" type="date" placeholder="Data nascimento"></ion-input > <!-- o ngModel e para passar os dados pra .ts-->\n      </ion-item>\n      <ion-item *ngIf="formCadastro.get(\'dtnascimento\').errors && formCadastro.get(\'dtnascimento\').dirty">\n        <p color="danger" ion-text *ngIf="formCadastro.get(\'dtnascimento\').hasError(\'required\')">Campo Obrigatorio</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>Genero</ion-label>\n        <ion-select formControlName="genero" [(ngModel)]="genero">\n          <ion-option value="femenino">Femenino</ion-option>\n          <ion-option value="masculino">Masculino</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Peso:</ion-label>\n        <ion-input formControlName="peso" [(ngModel)]="peso" type="number" placeholder="Peso"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="formCadastro.get(\'peso\').errors && formCadastro.get(\'peso\').dirty">\n        <p color="danger" ion-text *ngIf="formCadastro.get(\'peso\').hasError(\'required\')">Campo Obrigatorio</p>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Altura:</ion-label>\n        <ion-input formControlName="altura" [(ngModel)]="altura" type="number" placeholder="Altura"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="formCadastro.get(\'altura\').errors && formCadastro.get(\'altura\').dirty">\n        <p color="danger" ion-text *ngIf="formCadastro.get(\'altura\').hasError(\'required\')">Campo Obrigatorio</p>\n      </ion-item>\n    </ion-list>\n    <div padding>\n\n	<button  ion-button color="secondary"  type="submit" (click)="saveItem()" [disabled]="formCadastro.invalid" full>Iniciar avaliação</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\add-item\add-item.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], AddItemPage);

//# sourceMappingURL=add-item.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avaliacao2_avaliacao2__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvaliacaoPage = (function () {
    function AvaliacaoPage(navCtrl, navParams, modalCrtl, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCrtl = modalCrtl;
        this.alert = alert;
        //Arrays de pergunta  e a base de imagem
        this.selecionado = [];
        //Variaveis q recebem parametros das paginas de detail e cadstro
        this.genero = this.navParams.get('paciente').genero;
        this.dtnascimento = this.navParams.get('paciente').dtnascimento;
        this.peso = this.navParams.get('paciente').peso;
        this.altura = this.navParams.get('paciente').altura;
        // Variaveis formatadas para calculo de idade
        this.dataNascimento = new Date(this.dtnascimento).getFullYear();
        this.dataAtual = new Date(Date.now()).getFullYear();
        // Variaveis com operações matematicas
        this.idade = this.dataAtual - this.dataNascimento;
        this.imc = this.peso / (this.altura * this.altura);
        this.imcReal = parseFloat(this.imc.toFixed(2));
        this.slides = [];
        this.adultF = [
            {
                title: "Imagem 1",
                description: "",
                id: 1,
                imc: 12.5,
                image: "assets/imgs/Adult_Mulher1.png",
            },
            {
                title: "Imagem 2",
                description: "",
                id: 2,
                imc: 15,
                image: "assets/imgs/Adult_Mulher2.png",
            },
            {
                title: "Imagem 3",
                description: "",
                id: 3,
                imc: 17.5,
                image: "assets/imgs/Adult_Mulher3.png",
            },
            {
                title: "Imagem 4",
                description: "",
                id: 4,
                imc: 20,
                image: "assets/imgs/Adult_Mulher4.png",
            },
            {
                title: "Imagem 5",
                description: "",
                id: 5,
                imc: 22.5,
                image: "assets/imgs/Adult_Mulher5.png",
            },
            {
                title: "Imagem 6",
                description: "",
                id: 6,
                imc: 25,
                image: "assets/imgs/Adult_Mulher6.png",
            },
            {
                title: "Imagem 7",
                description: "",
                id: 7,
                imc: 27.5,
                image: "assets/imgs/Adult_Mulher7.png",
            }, {
                title: "Imagem 8",
                description: "",
                id: 8,
                imc: 30,
                image: "assets/imgs/Adult_Mulher8.png",
            },
            {
                title: "Imagem 9",
                description: "",
                id: 9,
                imc: 32.5,
                image: "assets/imgs/Adult_Mulher9.png",
            },
            {
                title: "Imagem 10",
                description: "",
                id: 10,
                imc: 35,
                image: "assets/imgs/Adult_Mulher10.png",
            },
            {
                title: "Imagem 11",
                description: "",
                id: 11,
                imc: 37.5,
                image: "assets/imgs/Adult_Mulher11.png",
            },
            {
                title: "Imagem 12",
                description: "",
                id: 12,
                imc: 40,
                image: "assets/imgs/Adult_Mulher12.png",
            },
            {
                title: "Imagem 13",
                description: "",
                id: 13,
                imc: 42.5,
                image: "assets/imgs/Adult_Mulher13.png",
            },
            {
                title: "Imagem 14",
                description: "",
                id: 14,
                imc: 45,
                image: "assets/imgs/Adult_Mulher14.png",
            },
            {
                title: "Imagem 15",
                description: "",
                id: 15,
                imc: 47.5,
                image: "assets/imgs/Adult_Mulher15.png",
            },
        ];
        this.adultM = [
            {
                title: "Imagem 16",
                description: "",
                id: 1,
                imc: 12.5,
                image: "assets/imgs/Adult_Homem1.png",
            },
            {
                title: "Imagem 17",
                description: "",
                id: 2,
                imc: 15,
                image: "assets/imgs/Adult_Homem2.png",
            },
            {
                title: "Imagem 18",
                description: "",
                id: 3,
                imc: 17.5,
                image: "assets/imgs/Adult_Homem3.png",
            },
            {
                title: "Imagem 19",
                description: "",
                id: 4,
                imc: 20,
                image: "assets/imgs/Adult_Homem4.png",
            },
            {
                title: "Imagem 20",
                description: "",
                id: 5,
                imc: 22.5,
                image: "assets/imgs/Adult_Homem5.png",
            },
            {
                title: "Imagem 21",
                description: "",
                id: 6,
                imc: 25,
                image: "assets/imgs/Adult_Homem6.png",
            },
            {
                title: "Imagem 22",
                description: "",
                id: 7,
                imc: 27.5,
                image: "assets/imgs/Adult_Homem7.png",
            }, {
                title: "Imagem 23",
                description: "",
                id: 8,
                imc: 30,
                image: "assets/imgs/Adult_Homem8.png",
            },
            {
                title: "Imagem 24",
                description: "",
                id: 9,
                imc: 32.5,
                image: "assets/imgs/Adult_Homem9.png",
            },
            {
                title: "Imagem 25",
                description: "",
                id: 10,
                imc: 35,
                image: "assets/imgs/Adult_Homem10.png",
            },
            {
                title: "Imagem 26",
                description: "",
                id: 11,
                imc: 37.5,
                image: "assets/imgs/Adult_Homem11.png",
            },
            {
                title: "Imagem 27",
                description: "",
                id: 12,
                imc: 40,
                image: "assets/imgs/Adult_Homem12.png",
            },
            {
                title: "Imagem 28",
                description: "",
                id: 13,
                imc: 42.5,
                image: "assets/imgs/Adult_Homem13.png",
            },
            {
                title: "Imagem 29",
                description: "",
                id: 14,
                imc: 45,
                image: "assets/imgs/Adult_Homem14.png",
            },
            {
                title: "Imagem 30",
                description: "",
                id: 15,
                imc: 47.5,
                image: "assets/imgs/Adult_Homem15.png",
            },
        ];
        this.kidM = [
            {
                title: "Imagem 31",
                description: "",
                id: 1,
                imc: 12,
                image: "assets/imgs/Kid_Homem1.png",
            },
            {
                title: "Imagem 32",
                description: "",
                id: 2,
                imc: 13.7,
                image: "assets/imgs/Kid_Homem2.png",
            },
            {
                title: "Imagem 33",
                description: "",
                id: 3,
                imc: 15.4,
                image: "assets/imgs/Kid_Homem3.png",
            },
            {
                title: "Imagem 34",
                description: "",
                id: 4,
                imc: 17.1,
                image: "assets/imgs/Kid_MHomem4.png",
            },
            {
                title: "Imagem 35",
                description: "",
                id: 5,
                imc: 18.8,
                image: "assets/imgs/Kid_Homem5.png",
            },
            {
                title: "Imagem 36",
                description: "",
                id: 6,
                imc: 20.5,
                image: "assets/imgs/Kid_Homem6.png",
            },
            {
                title: "Imagem 37",
                description: "",
                id: 7,
                imc: 22.2,
                image: "assets/imgs/Kid_Homem7.png",
            }, {
                title: "Imagem 38",
                description: "",
                id: 8,
                imc: 23.9,
                image: "assets/imgs/Kid_Homem8.png",
            },
            {
                title: "Imagem 39",
                description: "",
                id: 9,
                imc: 25.6,
                image: "assets/imgs/Kid_Homem9.png",
            },
            {
                title: "Imagem 40",
                description: "",
                id: 10,
                imc: 27.3,
                image: "assets/imgs/Kid_Homem10.png",
            },
            {
                title: "Imagem 41",
                description: "",
                id: 11,
                imc: 29,
                image: "assets/imgs/Kid_Homem11.png",
            },
        ];
        this.kidF = [
            {
                title: "Imagem 42",
                description: "",
                id: 1,
                imc: 12,
                image: "assets/imgs/Kid_Mulher1.png",
            },
            {
                title: "Imagem 43",
                description: "",
                id: 2,
                imc: 13.7,
                image: "assets/imgs/Kid_Mulher2.png",
            },
            {
                title: "Imagem 44",
                description: "",
                id: 3,
                imc: 15.4,
                image: "assets/imgs/Kid_Mulher3.png",
            },
            {
                title: "Imagem 45",
                description: "",
                id: 4,
                imc: 17.1,
                image: "assets/imgs/Kid_Mulher4.png",
            },
            {
                title: "Imagem 46",
                description: "",
                id: 5,
                imc: 18.8,
                image: "assets/imgs/Kid_Mulher5.png",
            },
            {
                title: "Imagem 47",
                description: "",
                id: 6,
                imc: 20.5,
                image: "assets/imgs/Kid_Mulher6.png",
            },
            {
                title: "Imagem 48",
                description: "",
                id: 7,
                imc: 22.2,
                image: "assets/imgs/Kid_Mulher7.png",
            },
            {
                title: "Imagem 49",
                description: "",
                id: 8,
                imc: 23.9,
                image: "assets/imgs/Kid_Mulher8.png",
            },
            {
                title: "Imagem 50",
                description: "",
                id: 9,
                imc: 25.6,
                image: "assets/imgs/Kid_Mulher9.png",
            },
            {
                title: "Imagem 51",
                description: "",
                id: 10,
                imc: 27.3,
                image: "assets/imgs/Kid_Mulher10.png",
            },
            {
                title: "Imagem 52",
                description: "",
                id: 11,
                imc: 29,
                image: "assets/imgs/Kid_Mulher11.png",
            },
        ];
        this.instructions();
        this.naoprimeiro;
        this.showSlides();
    }
    AvaliacaoPage.prototype.showSlides = function () {
        if (this.genero == 'masculino') {
            if (this.idade > 7) {
                this.slides = this.kidM;
            }
            if (this.idade >= 13) {
                this.slides = this.adultM;
            }
        }
        else {
            if (this.idade > 7) {
                this.slides = this.kidF;
            }
            if (this.idade >= 13) {
                this.slides = this.adultF;
            }
        }
    };
    AvaliacaoPage.prototype.slideNext = function () {
        this.slider.slideNext();
        if (this.slider.valueOf().isEnd()) {
            this.slidePrev();
        }
        this.naoprimeiro = true;
    };
    AvaliacaoPage.prototype.slidePrev = function () {
        this.slider.slidePrev();
        if (this.slider.valueOf().isBeginning()) {
            this.naoprimeiro = false;
        }
    };
    AvaliacaoPage.prototype.addSlides = function (slide) {
        if (this.selecionado.indexOf(slide) === -1) {
            this.selecionado.push(slide.imc);
            this.selecionado.push(slide.id);
            this.imcAtual = slide.imc;
            this.idAtual = slide.id;
            //this.imcAtual.push(slide.imc);
        }
        this.callAv2();
    };
    AvaliacaoPage.prototype.callAv2 = function () {
        var av2 = this.modalCrtl.create(__WEBPACK_IMPORTED_MODULE_2__avaliacao2_avaliacao2__["a" /* Avaliacao2Page */], { avaliacao: this.selecionado,
            paciente: this.navParams.get('paciente'),
            selecionado: this.selecionado,
            imcReal: this.imcReal,
            imcAtual: this.imcAtual,
            idAtual: this.idAtual,
        });
        av2.present();
    };
    AvaliacaoPage.prototype.instructions = function () {
        var instrucao = this.alert.create({
            title: 'Tutorial',
            subTitle: 'Prepare-se para fazer sua a avaliação. \n' +
                'Serão 4 (quatro) perguntas e 15 (quinze) figuras para você escolher.\n' +
                'Assim que escolher a figura basta apertar na imagem !\n',
            buttons: [{
                    text: 'ok',
                    handler: function () {
                        console.log('ok');
                    }
                }]
        });
        instrucao.present();
    };
    return AvaliacaoPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
    __metadata("design:type", Object)
], AvaliacaoPage.prototype, "slider", void 0);
AvaliacaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-avaliacao',template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\avaliacao\avaliacao.html"*/'\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title style="text-align: center">\n      <strong >Qual figura representa <br> seu corpo atual?</strong>\n    </ion-title>\n  </ion-navbar>\n  <!--A linha acima percorre o objeto de pergunta gerado pelo metodo question que e inicado pelo ionViewDidLoad-->\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides paginationClickable=false\n              initialSlide=0\n              loop=false\n              #slider>\n\n    <ion-slide *ngFor="let slide of slides"  >\n      <ion-toolbar>\n        <ion-buttons end >\n        </ion-buttons>\n      </ion-toolbar>\n      <div animates #animation="animates" >\n      <img [src]="slide.image"  (click)="addSlides(slide)" (click)="animation.start({type: \'zoomOutUp\', duration: \'20000\'})" class="slide-image"/>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img class="slide-image"/>\n    </ion-slide>\n  </ion-slides>\n\n  <div class="swiper-button-next"  (click)="slideNext()"></div>\n  <div class="swiper-button-prev" *ngIf="naoprimeiro" (click)="slidePrev()"></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\avaliacao\avaliacao.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AvaliacaoPage);

//# sourceMappingURL=avaliacao.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_papaparse__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadoPage = (function () {
    function ResultadoPage(navCtrl, navParams, action, dataService) {
        // this.dataService.getData().then((todos) => { // Pega todos os itens e armazena localmente;
        //   if (todos) {
        //     this.items = todos; //Coloca os itens armazenados no array de Pacientes;
        //   }
        // });
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.action = action;
        this.dataService = dataService;
        this.paciente = this.navParams.get('paciente').avaliacao;
        this.nome = this.navParams.get('paciente').nome;
        this.idAv1 = this.navParams.get('idAtual');
        this.idAv2 = this.navParams.get('idDesejado');
        this.idAv3 = this.navParams.get('idIdeal');
        this.idAv4 = this.navParams.get('idSexoOposto');
        this.percepcao = this.navParams.get('imcAtual') - this.navParams.get('imcReal');
        this.Idsatisfacao = this.navParams.get('idDesejado') - this.navParams.get('idAtual');
        this.satisfacao = this.navParams.get('imcDesejado') - this.navParams.get('imcAtual');
        this.csvData = [
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
                idImage: this.Idsatisfacao
            }
        ];
        this.headerRow = [
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
        console.log(this.paciente);
    }
    // saveItem(item) {
    //   this.items.push(item);
    //   this.dataService.save(this.items);
    // }
    ResultadoPage.prototype.downloadCSV = function () {
        var csv = __WEBPACK_IMPORTED_MODULE_2_papaparse__["unparse"]({
            fields: ['Tipo', 'Resultado'],
            data: [
                ["IMC Real:", this.navParams.get('imcReal')],
                ["IMC Atual:", this.navParams.get('imcAtual')],
                ["IMC Desejado", this.navParams.get('imcDesejado')],
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
    };
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
    ResultadoPage.prototype.actions = function () {
        var _this = this;
        var actionSheet = this.action.create({
            buttons: [
                {
                    text: 'Download',
                    handler: function () {
                        _this.downloadCSV();
                    }
                },
                {
                    text: 'Retornar a o menu Principal',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */]);
                        console.log('salvo');
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return ResultadoPage;
}());
ResultadoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-resultado',template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\resultado\resultado.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title style="text-align: center">\n      {{nome}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n\n    <table border="1" class="data-table">\n\n        <tr>\n          <td *ngFor="let header of headerRow" text-center><b>{{ header.title }}</b></td>\n        </tr>\n        <tr *ngFor="let row of csvData">\n          <td>{{row.title}}</td>\n          <td>{{row.valor}}</td>\n          <td>{{row.idImage}}</td>\n        </tr>\n\n\n    </table>\n\n\n  </ion-card>\n  <button ion-button (click)="actions()" color="secondary" class="action-sheet-button">Ações</button>\n</ion-content>\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\resultado\resultado.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* Data */]])
], ResultadoPage);

//# sourceMappingURL=resultado.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoricoPage = (function () {
    function HistoricoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.paciente = this.navParams.get('paciente');
    }
    HistoricoPage.prototype.ionViewDidLoad = function () {
        console.log(this.paciente);
    };
    return HistoricoPage;
}());
HistoricoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-historico',template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\historico\historico.html"*/'<ion-header>\n  <ion-navbar color="secondary" style="text-align: center">\n    <ion-title>\n      Avaliações\n    </ion-title>\n    <!--<ion-item end>{{avaliacao}} Avaliações</ion-item>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--<ion-list *ngFor="let item of paciente">-->\n    <!--<ion-item>{{item.avaliacoes}}</ion-item>-->\n\n  <!--</ion-list>-->\n  <button ion-button icon-only (click)="chamadaAvaliacao()" full>Iniciar Avaliação</button>\n  <button ion-button icon-only (click)="historicoAvaliacoes()" full>Historico</button>\n</ion-content>\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\historico\historico.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], HistoricoPage);

//# sourceMappingURL=historico.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    return SobrePage;
}());
SobrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sobre',template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\sobre\sobre.html"*/'<!--\n  Generated template for the SobrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title style="text-align: center"><strong>Sobre nós</strong></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  texto de sobre nos\n</ion-content>\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\sobre\sobre.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SobrePage);

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/historico/historico.module": [
		292,
		2
	],
	"../pages/sobre/sobre.module": [
		293,
		1
	],
	"../pages/test-test/test-test.module": [
		294,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item_add_item__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Imports de componetes Ionic e Angular;


//Imports das paginas utilizadas;


// import {ResultadoPage} from "../resultado/resultado";
//Import do Providers utilizado no app;

//Componentes da pagina;
var HomePage = (function () {
    function HomePage(navCtrl, //Instanciação do controller de navegação;
        modalCtrl, //Instanciação do controller de Modais;
        dataService, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.navParams = navParams;
        this.items = this.navParams.get('items'); //Array de Pacientes ;
        this.qtdPacientes = false;
        this.downloadall = false;
        this.pacienteFull = this.navParams.get('pacienteFull');
        this.dataService.getData().then(function (todos) {
            if (todos) {
                _this.items = todos; //Coloca os itens armazenados no array de Pacientes;
            }
            else {
                _this.qtdPacientes = true;
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log(this.items.length);
        console.log(this.items);
        // this.dowloadItens();
    };
    HomePage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_item_add_item__["a" /* AddItemPage */], { pacienteFull: this.pacienteFull }); //Cria a Pagina AddItem como um modal;
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveItem(item);
            }
        });
        addModal.present();
        this.qtdPacientes = false;
    };
    HomePage.prototype.saveItem = function (item) {
        this.items.push(item);
        this.dataService.save(this.items);
    };
    HomePage.prototype.viewItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    // chamadaResultado(){
    //   this.navCtrl.push(ResultadoPage);
    // }
    HomePage.prototype.downloadAll = function () {
        this.downloadall = true;
    };
    HomePage.prototype.canceldownloadAll = function () {
        this.downloadall = false;
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n  	<ion-title style="text-align: center">\n  		GepetsDev\n  	</ion-title>\n  	<ion-buttons end>\n  		<button ion-button icon-only (click)="addItem()"><ion-icon name="add-circle"></ion-icon></button>\n  	</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item *ngIf="qtdPacientes" style="text-align: center" class="alert-message" >Não ha pacientes cadastrados</ion-item>\n  <ion-list>\n\n    <ion-item *ngFor="let item of items" (click)="viewItem(item)">\n      <ion-checkbox color="secondary"  *ngIf="downloadall"> </ion-checkbox>\n    <ion-avatar item-start >\n      <img src="assets/imgs/pacienteM">\n\n        </ion-avatar>\n        <strong>{{item.nome}}</strong>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full round color="secondary" (click)="downloadAll()" >download</button>\n  <button ion-button full round color="secondary"class="action-sheet-cancel" *ngIf="downloadall" (click)="canceldownloadAll()">cancelar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\home\home.html"*/ //URL do template associado a pagina;
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_data__["a" /* Data */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Avaliacao2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avaliacao3_avaliacao3__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Avaliacao2Page = (function () {
    function Avaliacao2Page(navCtrl, navParams, modalCrtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCrtl = modalCrtl;
        //Arrays de pergunta  e a base de imagem
        this.avaliacao1 = this.navParams.get('avaliacao');
        this.selecionado = this.navParams.get('selecionado');
        this.imcAtual = this.navParams.get('imcAtual');
        this.idAtual = this.navParams.get('idAtual');
        //Variaveis q recebem parametros das paginas de detail e cadstro
        this.genero = this.navParams.get('paciente').genero;
        this.dtnascimento = this.navParams.get('paciente').dtnascimento;
        this.peso = this.navParams.get('paciente').peso;
        this.altura = this.navParams.get('paciente').altura;
        // Variaveis formatadas para calculo de idade
        this.dataNascimento = new Date(this.dtnascimento).getFullYear();
        this.dataAtual = new Date(Date.now()).getFullYear();
        // Variaveis com operações matematicas
        this.idade = this.dataAtual - this.dataNascimento;
        this.imcReal = this.navParams.get('imcReal');
        this.slides = [];
        this.adultF = [
            {
                title: "Imagem 1",
                description: "",
                id: 1,
                imc: 12.5,
                image: "assets/imgs/Adult_Mulher1.png",
            },
            {
                title: "Imagem 2",
                description: "",
                id: 2,
                imc: 15,
                image: "assets/imgs/Adult_Mulher2.png",
            },
            {
                title: "Imagem 3",
                description: "",
                id: 3,
                imc: 17.5,
                image: "assets/imgs/Adult_Mulher3.png",
            },
            {
                title: "Imagem 4",
                description: "",
                id: 4,
                imc: 20,
                image: "assets/imgs/Adult_Mulher4.png",
            },
            {
                title: "Imagem 5",
                description: "",
                id: 5,
                imc: 22.5,
                image: "assets/imgs/Adult_Mulher5.png",
            },
            {
                title: "Imagem 6",
                description: "",
                id: 6,
                imc: 25,
                image: "assets/imgs/Adult_Mulher6.png",
            },
            {
                title: "Imagem 7",
                description: "",
                id: 7,
                imc: 27.5,
                image: "assets/imgs/Adult_Mulher7.png",
            }, {
                title: "Imagem 8",
                description: "",
                id: 8,
                imc: 30,
                image: "assets/imgs/Adult_Mulher8.png",
            },
            {
                title: "Imagem 9",
                description: "",
                id: 9,
                imc: 32.5,
                image: "assets/imgs/Adult_Mulher9.png",
            },
            {
                title: "Imagem 10",
                description: "",
                id: 10,
                imc: 35,
                image: "assets/imgs/Adult_Mulher10.png",
            },
            {
                title: "Imagem 11",
                description: "",
                id: 11,
                imc: 37.5,
                image: "assets/imgs/Adult_Mulher11.png",
            },
            {
                title: "Imagem 12",
                description: "",
                id: 12,
                imc: 40,
                image: "assets/imgs/Adult_Mulher12.png",
            },
            {
                title: "Imagem 13",
                description: "",
                id: 13,
                imc: 42.5,
                image: "assets/imgs/Adult_Mulher13.png",
            },
            {
                title: "Imagem 14",
                description: "",
                id: 14,
                imc: 45,
                image: "assets/imgs/Adult_Mulher14.png",
            },
            {
                title: "Imagem 15",
                description: "",
                id: 15,
                imc: 47.5,
                image: "assets/imgs/Adult_Mulher15.png",
            },
        ];
        this.adultM = [{
                title: "Imagem 16",
                description: "",
                id: 1,
                imc: 12.5,
                image: "assets/imgs/Adult_Homem1.png",
            },
            {
                title: "Imagem 17",
                description: "",
                id: 2,
                imc: 15,
                image: "assets/imgs/Adult_Homem2.png",
            },
            {
                title: "Imagem 18",
                description: "",
                id: 3,
                imc: 17.5,
                image: "assets/imgs/Adult_Homem3.png",
            },
            {
                title: "Imagem 19",
                description: "",
                id: 4,
                imc: 20,
                image: "assets/imgs/Adult_Homem4.png",
            },
            {
                title: "Imagem 20",
                description: "",
                id: 5,
                imc: 22.5,
                image: "assets/imgs/Adult_Homem5.png",
            },
            {
                title: "Imagem 21",
                description: "",
                id: 6,
                imc: 25,
                image: "assets/imgs/Adult_Homem6.png",
            },
            {
                title: "Imagem 22",
                description: "",
                id: 7,
                imc: 27.5,
                image: "assets/imgs/Adult_Homem7.png",
            }, {
                title: "Imagem 23",
                description: "",
                id: 8,
                imc: 30,
                image: "assets/imgs/Adult_Homem8.png",
            },
            {
                title: "Imagem 24",
                description: "",
                id: 9,
                imc: 32.5,
                image: "assets/imgs/Adult_Homem9.png",
            },
            {
                title: "Imagem 25",
                description: "",
                id: 10,
                imc: 35,
                image: "assets/imgs/Adult_Homem10.png",
            },
            {
                title: "Imagem 26",
                description: "",
                id: 11,
                imc: 37.5,
                image: "assets/imgs/Adult_Homem11.png",
            },
            {
                title: "Imagem 27",
                description: "",
                id: 12,
                imc: 40,
                image: "assets/imgs/Adult_Homem12.png",
            },
            {
                title: "Imagem 28",
                description: "",
                id: 13,
                imc: 42.5,
                image: "assets/imgs/Adult_Homem13.png",
            },
            {
                title: "Imagem 29",
                description: "",
                id: 14,
                imc: 45,
                image: "assets/imgs/Adult_Homem14.png",
            },
            {
                title: "Imagem 30",
                description: "",
                id: 15,
                imc: 47.5,
                image: "assets/imgs/Adult_Homem15.png",
            },
        ];
        this.kidM = [
            {
                title: "Imagem 31",
                description: "",
                id: 1,
                imc: 12,
                image: "assets/imgs/Kid_Homem1.png",
            },
            {
                title: "Imagem 32",
                description: "",
                id: 2,
                imc: 13.7,
                image: "assets/imgs/Kid_Homem2.png",
            },
            {
                title: "Imagem 33",
                description: "",
                id: 3,
                imc: 15.4,
                image: "assets/imgs/Kid_Homem3.png",
            },
            {
                title: "Imagem 34",
                description: "",
                id: 4,
                imc: 17.1,
                image: "assets/imgs/Kid_MHomem4.png",
            },
            {
                title: "Imagem 35",
                description: "",
                id: 5,
                imc: 18.8,
                image: "assets/imgs/Kid_Homem5.png",
            },
            {
                title: "Imagem 36",
                description: "",
                id: 6,
                imc: 20.5,
                image: "assets/imgs/Kid_Homem6.png",
            },
            {
                title: "Imagem 37",
                description: "",
                id: 7,
                imc: 22.2,
                image: "assets/imgs/Kid_Homem7.png",
            }, {
                title: "Imagem 38",
                description: "",
                id: 8,
                imc: 23.9,
                image: "assets/imgs/Kid_Homem8.png",
            },
            {
                title: "Imagem 39",
                description: "",
                id: 9,
                imc: 25.6,
                image: "assets/imgs/Kid_Homem9.png",
            },
            {
                title: "Imagem 40",
                description: "",
                id: 10,
                imc: 27.3,
                image: "assets/imgs/Kid_Homem10.png",
            },
            {
                title: "Imagem 41",
                description: "",
                id: 11,
                imc: 29,
                image: "assets/imgs/Kid_Homem11.png",
            },
        ];
        this.kidF = [
            {
                title: "Imagem 42",
                description: "",
                id: 1,
                imc: 12,
                image: "assets/imgs/Kid_Mulher1.png",
            },
            {
                title: "Imagem 43",
                description: "",
                id: 2,
                imc: 13.7,
                image: "assets/imgs/Kid_Mulher2.png",
            },
            {
                title: "Imagem 44",
                description: "",
                id: 3,
                imc: 15.4,
                image: "assets/imgs/Kid_Mulher3.png",
            },
            {
                title: "Imagem 45",
                description: "",
                id: 4,
                imc: 17.1,
                image: "assets/imgs/Kid_Mulher4.png",
            },
            {
                title: "Imagem 46",
                description: "",
                id: 5,
                imc: 18.8,
                image: "assets/imgs/Kid_Mulher5.png",
            },
            {
                title: "Imagem 47",
                description: "",
                id: 6,
                imc: 20.5,
                image: "assets/imgs/Kid_Mulher6.png",
            },
            {
                title: "Imagem 48",
                description: "",
                id: 7,
                imc: 22.2,
                image: "assets/imgs/Kid_Mulher7.png",
            },
            {
                title: "Imagem 49",
                description: "",
                id: 8,
                imc: 23.9,
                image: "assets/imgs/Kid_Mulher8.png",
            },
            {
                title: "Imagem 50",
                description: "",
                id: 9,
                imc: 25.6,
                image: "assets/imgs/Kid_Mulher9.png",
            },
            {
                title: "Imagem 51",
                description: "",
                id: 10,
                imc: 27.3,
                image: "assets/imgs/Kid_Mulher10.png",
            },
            {
                title: "Imagem 52",
                description: "",
                id: 11,
                imc: 29,
                image: "assets/imgs/Kid_Mulher11.png",
            },
        ];
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
    Avaliacao2Page.prototype.showSlides = function () {
        if (this.genero == 'masculino') {
            if (this.idade > 7) {
                this.slides = this.kidM;
            }
            if (this.idade >= 13) {
                this.slides = this.adultM;
            }
        }
        else {
            if (this.idade > 7) {
                this.slides = this.kidF;
            }
            if (this.idade >= 13) {
                this.slides = this.adultF;
            }
        }
    };
    Avaliacao2Page.prototype.slideNext = function () {
        this.slider.slideNext();
        if (this.slider.valueOf().isEnd()) {
            this.slidePrev();
        }
        this.naoprimeiro = true;
    };
    Avaliacao2Page.prototype.slidePrev = function () {
        this.slider.slidePrev();
        if (this.slider.valueOf().isBeginning()) {
            this.naoprimeiro = false;
        }
    };
    Avaliacao2Page.prototype.addSlides = function (slide) {
        if (this.selecionado.indexOf(slide) === -1) {
            this.selecionado.push(slide.imc);
            this.selecionado.push(slide.id);
            console.log('selecionado');
            console.log(this.selecionado);
            this.idDesejado = slide.id;
            this.imcDesejado = slide.imc;
        }
        this.callAv3();
    };
    Avaliacao2Page.prototype.callAv3 = function () {
        var av3 = this.modalCrtl.create(__WEBPACK_IMPORTED_MODULE_2__avaliacao3_avaliacao3__["a" /* Avaliacao3Page */], { avaliacao2: this.selecionado,
            paciente: this.navParams.get('paciente'),
            selecionado: this.selecionado,
            imcReal: this.imcReal,
            imcAtual: this.imcAtual,
            idAtual: this.idAtual,
            imcDesejado: this.imcDesejado,
            idDesejado: this.idDesejado
        });
        av3.present();
    };
    return Avaliacao2Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
    __metadata("design:type", Object)
], Avaliacao2Page.prototype, "slider", void 0);
Avaliacao2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-avaliacao2',template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\avaliacao2\avaliacao2.html"*/'\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title style="text-align: center">\n      <strong >Qual figura representa <br> o corpo que vc gostaria de ter?</strong>\n    </ion-title>\n  </ion-navbar>\n  </ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides paginationClickable=false\n              initialSlide=0\n              loop=false\n              #slider>\n\n    <ion-slide *ngFor="let slide of slides"  >\n      <ion-toolbar>\n        <ion-buttons end >\n        </ion-buttons>\n      </ion-toolbar>\n      <div animates #animation="animates" text-center>\n        <img [src]="slide.image"  (click)="addSlides(slide)" (click)="animation.start({type: \'flash\', duration: \'3000\'})" class="slide-image"/>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img class="slide-image"/>\n    </ion-slide>\n  </ion-slides>\n  <div class="swiper-button-next" (click)="slideNext()"></div>\n  <div class="swiper-button-prev" *ngIf="naoprimeiro" (click)="slidePrev()"></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\avaliacao2\avaliacao2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], Avaliacao2Page);

//# sourceMappingURL=avaliacao2.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Avaliacao3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avaliacao4_avaliacao4__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resultado_resultado__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Avaliacao3Page = (function () {
    function Avaliacao3Page(navCtrl, navParams, modalCrtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCrtl = modalCrtl;
        //Arrays de pergunta  e a base de imagem
        this.avaliacao2 = this.navParams.get('avaliacao2');
        this.selecionado = this.navParams.get('selecionado');
        this.imcAtual = this.navParams.get('imcAtual'); // av1
        //Variaveis q recebem parametros das paginas de detail e cadstro
        this.genero = this.navParams.get('paciente').genero;
        this.dtnascimento = this.navParams.get('paciente').dtnascimento;
        this.peso = this.navParams.get('paciente').peso;
        this.altura = this.navParams.get('paciente').altura;
        // Variaveis formatadas para calculo de idade
        this.dataNascimento = new Date(this.dtnascimento).getFullYear();
        this.dataAtual = new Date(Date.now()).getFullYear();
        // Variaveis com operações matematicas
        this.idade = this.dataAtual - this.dataNascimento;
        this.imcReal = this.navParams.get('imcReal');
        this.imcDesejado = this.navParams.get('imcDesejado'); //av2
        this.idDesejado = this.navParams.get('idDesejado'); //av2
        this.idAtual = this.navParams.get('idAtual'); //av1
        this.slides = [];
        this.adultF = [
            {
                title: "Imagem 1",
                description: "",
                id: 1,
                imc: 12.5,
                image: "assets/imgs/Adult_Mulher1.png",
            },
            {
                title: "Imagem 2",
                description: "",
                id: 2,
                imc: 15,
                image: "assets/imgs/Adult_Mulher2.png",
            },
            {
                title: "Imagem 3",
                description: "",
                id: 3,
                imc: 17.5,
                image: "assets/imgs/Adult_Mulher3.png",
            },
            {
                title: "Imagem 4",
                description: "",
                id: 4,
                imc: 20,
                image: "assets/imgs/Adult_Mulher4.png",
            },
            {
                title: "Imagem 5",
                description: "",
                id: 5,
                imc: 22.5,
                image: "assets/imgs/Adult_Mulher5.png",
            },
            {
                title: "Imagem 6",
                description: "",
                id: 6,
                imc: 25,
                image: "assets/imgs/Adult_Mulher6.png",
            },
            {
                title: "Imagem 7",
                description: "",
                id: 7,
                imc: 27.5,
                image: "assets/imgs/Adult_Mulher7.png",
            }, {
                title: "Imagem 8",
                description: "",
                id: 8,
                imc: 30,
                image: "assets/imgs/Adult_Mulher8.png",
            },
            {
                title: "Imagem 9",
                description: "",
                id: 9,
                imc: 32.5,
                image: "assets/imgs/Adult_Mulher9.png",
            },
            {
                title: "Imagem 10",
                description: "",
                id: 10,
                imc: 35,
                image: "assets/imgs/Adult_Mulher10.png",
            },
            {
                title: "Imagem 11",
                description: "",
                id: 11,
                imc: 37.5,
                image: "assets/imgs/Adult_Mulher11.png",
            },
            {
                title: "Imagem 12",
                description: "",
                id: 12,
                imc: 40,
                image: "assets/imgs/Adult_Mulher12.png",
            },
            {
                title: "Imagem 13",
                description: "",
                id: 13,
                imc: 42.5,
                image: "assets/imgs/Adult_Mulher13.png",
            },
            {
                title: "Imagem 14",
                description: "",
                id: 14,
                imc: 45,
                image: "assets/imgs/Adult_Mulher14.png",
            },
            {
                title: "Imagem 15",
                description: "",
                id: 15,
                imc: 47.5,
                image: "assets/imgs/Adult_Mulher15.png",
            },
        ];
        this.adultM = [{
                title: "Imagem 16",
                description: "",
                id: 1,
                imc: 12.5,
                image: "assets/imgs/Adult_Homem1.png",
            },
            {
                title: "Imagem 17",
                description: "",
                id: 2,
                imc: 15,
                image: "assets/imgs/Adult_Homem2.png",
            },
            {
                title: "Imagem 18",
                description: "",
                id: 3,
                imc: 17.5,
                image: "assets/imgs/Adult_Homem3.png",
            },
            {
                title: "Imagem 19",
                description: "",
                id: 4,
                imc: 20,
                image: "assets/imgs/Adult_Homem4.png",
            },
            {
                title: "Imagem 20",
                description: "",
                id: 5,
                imc: 22.5,
                image: "assets/imgs/Adult_Homem5.png",
            },
            {
                title: "Imagem 21",
                description: "",
                id: 6,
                imc: 25,
                image: "assets/imgs/Adult_Homem6.png",
            },
            {
                title: "Imagem 22",
                description: "",
                id: 7,
                imc: 27.5,
                image: "assets/imgs/Adult_Homem7.png",
            }, {
                title: "Imagem 23",
                description: "",
                id: 8,
                imc: 30,
                image: "assets/imgs/Adult_Homem8.png",
            },
            {
                title: "Imagem 24",
                description: "",
                id: 9,
                imc: 32.5,
                image: "assets/imgs/Adult_Homem9.png",
            },
            {
                title: "Imagem 25",
                description: "",
                id: 10,
                imc: 35,
                image: "assets/imgs/Adult_Homem10.png",
            },
            {
                title: "Imagem 26",
                description: "",
                id: 11,
                imc: 37.5,
                image: "assets/imgs/Adult_Homem11.png",
            },
            {
                title: "Imagem 27",
                description: "",
                id: 12,
                imc: 40,
                image: "assets/imgs/Adult_Homem12.png",
            },
            {
                title: "Imagem 28",
                description: "",
                id: 13,
                imc: 42.5,
                image: "assets/imgs/Adult_Homem13.png",
            },
            {
                title: "Imagem 29",
                description: "",
                id: 14,
                imc: 45,
                image: "assets/imgs/Adult_Homem14.png",
            },
            {
                title: "Imagem 30",
                description: "",
                id: 15,
                imc: 47.5,
                image: "assets/imgs/Adult_Homem15.png",
            },
        ];
        this.kidM = [
            {
                title: "Imagem 31",
                description: "",
                id: 1,
                imc: 12,
                image: "assets/imgs/Kid_Homem1.png",
            },
            {
                title: "Imagem 32",
                description: "",
                id: 2,
                imc: 13.7,
                image: "assets/imgs/Kid_Homem2.png",
            },
            {
                title: "Imagem 33",
                description: "",
                id: 3,
                imc: 15.4,
                image: "assets/imgs/Kid_Homem3.png",
            },
            {
                title: "Imagem 34",
                description: "",
                id: 4,
                imc: 17.1,
                image: "assets/imgs/Kid_MHomem4.png",
            },
            {
                title: "Imagem 35",
                description: "",
                id: 5,
                imc: 18.8,
                image: "assets/imgs/Kid_Homem5.png",
            },
            {
                title: "Imagem 36",
                description: "",
                id: 6,
                imc: 20.5,
                image: "assets/imgs/Kid_Homem6.png",
            },
            {
                title: "Imagem 37",
                description: "",
                id: 7,
                imc: 22.2,
                image: "assets/imgs/Kid_Homem7.png",
            }, {
                title: "Imagem 38",
                description: "",
                id: 8,
                imc: 23.9,
                image: "assets/imgs/Kid_Homem8.png",
            },
            {
                title: "Imagem 39",
                description: "",
                id: 9,
                imc: 25.6,
                image: "assets/imgs/Kid_Homem9.png",
            },
            {
                title: "Imagem 40",
                description: "",
                id: 10,
                imc: 27.3,
                image: "assets/imgs/Kid_Homem10.png",
            },
            {
                title: "Imagem 41",
                description: "",
                id: 11,
                imc: 29,
                image: "assets/imgs/Kid_Homem11.png",
            },
        ];
        this.kidF = [
            {
                title: "Imagem 42",
                description: "",
                id: 1,
                imc: 12,
                image: "assets/imgs/Kid_Mulher1.png",
            },
            {
                title: "Imagem 43",
                description: "",
                id: 2,
                imc: 13.7,
                image: "assets/imgs/Kid_Mulher2.png",
            },
            {
                title: "Imagem 44",
                description: "",
                id: 3,
                imc: 15.4,
                image: "assets/imgs/Kid_Mulher3.png",
            },
            {
                title: "Imagem 45",
                description: "",
                id: 4,
                imc: 17.1,
                image: "assets/imgs/Kid_Mulher4.png",
            },
            {
                title: "Imagem 46",
                description: "",
                id: 5,
                imc: 18.8,
                image: "assets/imgs/Kid_Mulher5.png",
            },
            {
                title: "Imagem 47",
                description: "",
                id: 6,
                imc: 20.5,
                image: "assets/imgs/Kid_Mulher6.png",
            },
            {
                title: "Imagem 48",
                description: "",
                id: 7,
                imc: 22.2,
                image: "assets/imgs/Kid_Mulher7.png",
            },
            {
                title: "Imagem 49",
                description: "",
                id: 8,
                imc: 23.9,
                image: "assets/imgs/Kid_Mulher8.png",
            },
            {
                title: "Imagem 50",
                description: "",
                id: 9,
                imc: 25.6,
                image: "assets/imgs/Kid_Mulher9.png",
            },
            {
                title: "Imagem 51",
                description: "",
                id: 10,
                imc: 27.3,
                image: "assets/imgs/Kid_Mulher10.png",
            },
            {
                title: "Imagem 52",
                description: "",
                id: 11,
                imc: 29,
                image: "assets/imgs/Kid_Mulher11.png",
            },
        ];
        this.naoprimeiro;
        this.showSlides();
    }
    //
    // ionViewDidLoad() {
    //   console.log('genero:' + ' ' + this.genero);
    //   console.log('idade:' + ' ' + this.idade);
    //   console.log('peso:' + ' ' + this.peso);
    //   console.log('altura:' + ' ' + this.altura);
    //   console.log('imc real:' + ' ' + this.imcReal);
    //   this.selecionado.push(this.avaliacao2);
    //   this.imcAtual.push(this.navParams.get('imcAtual'));
    //   console.log(this.selecionado)
    // }
    Avaliacao3Page.prototype.showSlides = function () {
        if (this.genero == 'masculino') {
            if (this.idade > 7) {
                this.slides = this.kidM;
            }
            if (this.idade >= 13) {
                this.slides = this.adultM;
            }
        }
        else {
            if (this.idade > 7) {
                this.slides = this.kidF;
            }
            if (this.idade >= 13) {
                this.slides = this.adultF;
            }
        }
    };
    Avaliacao3Page.prototype.slideNext = function () {
        this.slider.slideNext();
        if (this.slider.valueOf().isEnd()) {
            this.slidePrev();
        }
        this.naoprimeiro = true;
    };
    Avaliacao3Page.prototype.slidePrev = function () {
        this.slider.slidePrev();
        if (this.slider.valueOf().isBeginning()) {
            this.naoprimeiro = false;
        }
    };
    Avaliacao3Page.prototype.addSlides = function (slide) {
        if (this.selecionado.indexOf(slide) === -1) {
            this.selecionado.push(slide.imc);
            this.selecionado.push(slide.id);
            this.imcIdeal = slide.imc;
            this.idIdeal = slide.id;
            console.log('selecionado');
            console.log(this.selecionado);
        }
        this.callAv4();
    };
    Avaliacao3Page.prototype.callAv4 = function () {
        if (this.idade <= 13) {
            var result = this.modalCrtl.create(__WEBPACK_IMPORTED_MODULE_3__resultado_resultado__["a" /* ResultadoPage */], {
                paciente: this.navParams.get('paciente'),
                selecionado: this.selecionado,
                imcReal: this.imcReal,
                imcAtual: this.imcAtual,
                idAtual: this.idAtual,
                imcDesejado: this.imcDesejado,
                idDesejado: this.idDesejado,
                imcIdeal: this.imcIdeal,
                idIdeal: this.idIdeal
            });
            result.present();
        }
        else {
            var av4 = this.modalCrtl.create(__WEBPACK_IMPORTED_MODULE_2__avaliacao4_avaliacao4__["a" /* Avaliacao4Page */], {
                avaliacao3: this.selecionado,
                paciente: this.navParams.get('paciente'),
                selecionado: this.selecionado,
                imcReal: this.imcReal,
                imcAtual: this.imcAtual,
                idAtual: this.idAtual,
                imcDesejado: this.imcDesejado,
                idDesejado: this.idDesejado,
                imcIdeal: this.imcIdeal,
                idIdeal: this.idIdeal
            });
            av4.present();
        }
    };
    return Avaliacao3Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
    __metadata("design:type", Object)
], Avaliacao3Page.prototype, "slider", void 0);
Avaliacao3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-avaliacao3',template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\avaliacao3\avaliacao3.html"*/'\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title style="text-align: center">\n      <strong >Qual figura representa o corpo <br> ideal ?</strong>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides paginationClickable=false\n              initialSlide=0\n              loop=false\n              #slider>\n\n    <ion-slide *ngFor="let slide of slides"  >\n      <ion-toolbar>\n        <ion-buttons end >\n        </ion-buttons>\n      </ion-toolbar>\n      <div animates #animation="animates" text-center>\n        <img [src]="slide.image"  (click)="addSlides(slide)" (click)="animation.start({type: \'rubberBand\', duration: \'3000\'})" class="slide-image"/>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img class="slide-image"/>\n    </ion-slide>\n  </ion-slides>\n  <div class="swiper-button-next" (click)="slideNext()"></div>\n  <div class="swiper-button-prev" *ngIf="naoprimeiro" (click)="slidePrev()"></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\avaliacao3\avaliacao3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], Avaliacao3Page);

//# sourceMappingURL=avaliacao3.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Avaliacao4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultado_resultado__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Avaliacao4Page = (function () {
    function Avaliacao4Page(navCtrl, navParams, modalCrtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCrtl = modalCrtl;
        //Arrays de pergunta  e a base de imagem
        this.avaliacao3 = this.navParams.get('avaliacao3');
        this.selecionado = this.navParams.get('selecionado');
        this.imcAtual = this.navParams.get('imcAtual');
        //Variaveis q recebem parametros das paginas de detail e cadstro
        this.genero = this.navParams.get('paciente').genero;
        this.dtnascimento = this.navParams.get('paciente').dtnascimento;
        this.peso = this.navParams.get('paciente').peso;
        this.altura = this.navParams.get('paciente').altura;
        // Variaveis formatadas para calculo de idade
        this.dataNascimento = new Date(this.dtnascimento).getFullYear();
        this.dataAtual = new Date(Date.now()).getFullYear();
        // Variaveis com operações matematicas
        this.idade = this.dataAtual - this.dataNascimento;
        this.imcReal = this.navParams.get('imcReal'); //av1
        this.imcDesejado = this.navParams.get('imcDesejado'); //av2
        this.imcIdeal = this.navParams.get('imcIdeal'); //av3
        this.idDesejado = this.navParams.get('idDesejado');
        this.idAtual = this.navParams.get('idAtual');
        this.slides = [];
        this.adultF = [
            {
                title: "Imagem 1",
                description: "",
                id: 1,
                imc: 12.5,
                image: "assets/imgs/Adult_Mulher1.png",
            },
            {
                title: "Imagem 2",
                description: "",
                id: 2,
                imc: 15,
                image: "assets/imgs/Adult_Mulher2.png",
            },
            {
                title: "Imagem 3",
                description: "",
                id: 3,
                imc: 17.5,
                image: "assets/imgs/Adult_Mulher3.png",
            },
            {
                title: "Imagem 4",
                description: "",
                id: 4,
                imc: 20,
                image: "assets/imgs/Adult_Mulher4.png",
            },
            {
                title: "Imagem 5",
                description: "",
                id: 5,
                imc: 22.5,
                image: "assets/imgs/Adult_Mulher5.png",
            },
            {
                title: "Imagem 6",
                description: "",
                id: 6,
                imc: 25,
                image: "assets/imgs/Adult_Mulher6.png",
            },
            {
                title: "Imagem 7",
                description: "",
                id: 7,
                imc: 27.5,
                image: "assets/imgs/Adult_Mulher7.png",
            }, {
                title: "Imagem 8",
                description: "",
                id: 8,
                imc: 30,
                image: "assets/imgs/Adult_Mulher8.png",
            },
            {
                title: "Imagem 9",
                description: "",
                id: 9,
                imc: 32.5,
                image: "assets/imgs/Adult_Mulher9.png",
            },
            {
                title: "Imagem 10",
                description: "",
                id: 10,
                imc: 35,
                image: "assets/imgs/Adult_Mulher10.png",
            },
            {
                title: "Imagem 11",
                description: "",
                id: 11,
                imc: 37.5,
                image: "assets/imgs/Adult_Mulher11.png",
            },
            {
                title: "Imagem 12",
                description: "",
                id: 12,
                imc: 40,
                image: "assets/imgs/Adult_Mulher12.png",
            },
            {
                title: "Imagem 13",
                description: "",
                id: 13,
                imc: 42.5,
                image: "assets/imgs/Adult_Mulher13.png",
            },
            {
                title: "Imagem 14",
                description: "",
                id: 14,
                imc: 45,
                image: "assets/imgs/Adult_Mulher14.png",
            },
            {
                title: "Imagem 15",
                description: "",
                id: 15,
                imc: 47.5,
                image: "assets/imgs/Adult_Mulher15.png",
            },
        ];
        this.adultM = [{
                title: "Imagem 16",
                description: "",
                id: 1,
                imc: 12.5,
                image: "assets/imgs/Adult_Homem1.png",
            },
            {
                title: "Imagem 17",
                description: "",
                id: 2,
                imc: 15,
                image: "assets/imgs/Adult_Homem2.png",
            },
            {
                title: "Imagem 18",
                description: "",
                id: 3,
                imc: 17.5,
                image: "assets/imgs/Adult_Homem3.png",
            },
            {
                title: "Imagem 19",
                description: "",
                id: 4,
                imc: 20,
                image: "assets/imgs/Adult_Homem4.png",
            },
            {
                title: "Imagem 20",
                description: "",
                id: 5,
                imc: 22.5,
                image: "assets/imgs/Adult_Homem5.png",
            },
            {
                title: "Imagem 21",
                description: "",
                id: 6,
                imc: 25,
                image: "assets/imgs/Adult_Homem6.png",
            },
            {
                title: "Imagem 22",
                description: "",
                id: 7,
                imc: 27.5,
                image: "assets/imgs/Adult_Homem7.png",
            }, {
                title: "Imagem 23",
                description: "",
                id: 8,
                imc: 30,
                image: "assets/imgs/Adult_Homem8.png",
            },
            {
                title: "Imagem 24",
                description: "",
                id: 9,
                imc: 32.5,
                image: "assets/imgs/Adult_Homem9.png",
            },
            {
                title: "Imagem 25",
                description: "",
                id: 10,
                imc: 35,
                image: "assets/imgs/Adult_Homem10.png",
            },
            {
                title: "Imagem 26",
                description: "",
                id: 11,
                imc: 37.5,
                image: "assets/imgs/Adult_Homem11.png",
            },
            {
                title: "Imagem 27",
                description: "",
                id: 12,
                imc: 40,
                image: "assets/imgs/Adult_Homem12.png",
            },
            {
                title: "Imagem 28",
                description: "",
                id: 13,
                imc: 42.5,
                image: "assets/imgs/Adult_Homem13.png",
            },
            {
                title: "Imagem 29",
                description: "",
                id: 14,
                imc: 45,
                image: "assets/imgs/Adult_Homem14.png",
            },
            {
                title: "Imagem 30",
                description: "",
                id: 15,
                imc: 47.5,
                image: "assets/imgs/Adult_Homem15.png",
            },
        ];
        this.kidM = [
            {
                title: "Imagem 31",
                description: "",
                id: 1,
                imc: 12,
                image: "assets/imgs/Kid_Homem1.png",
            },
            {
                title: "Imagem 32",
                description: "",
                id: 2,
                imc: 13.7,
                image: "assets/imgs/Kid_Homem2.png",
            },
            {
                title: "Imagem 33",
                description: "",
                id: 3,
                imc: 15.4,
                image: "assets/imgs/Kid_Homem3.png",
            },
            {
                title: "Imagem 34",
                description: "",
                id: 4,
                imc: 17.1,
                image: "assets/imgs/Kid_Homem4.png",
            },
            {
                title: "Imagem 35",
                description: "",
                id: 5,
                imc: 18.8,
                image: "assets/imgs/Kid_Homem5.png",
            },
            {
                title: "Imagem 36",
                description: "",
                id: 6,
                imc: 20.5,
                image: "assets/imgs/Kid_Homem6.png",
            },
            {
                title: "Imagem 37",
                description: "",
                id: 7,
                imc: 22.2,
                image: "assets/imgs/Kid_Homem7.png",
            }, {
                title: "Imagem 38",
                description: "",
                id: 8,
                imc: 23.9,
                image: "assets/imgs/Kid_Homem8.png",
            },
            {
                title: "Imagem 39",
                description: "",
                id: 9,
                imc: 25.6,
                image: "assets/imgs/Kid_Homem9.png",
            },
            {
                title: "Imagem 40",
                description: "",
                id: 10,
                imc: 27.3,
                image: "assets/imgs/Kid_Homem10.png",
            },
            {
                title: "Imagem 41",
                description: "",
                id: 11,
                imc: 29,
                image: "assets/imgs/Kid_Homem11.png",
            },
        ];
        this.kidF = [
            {
                title: "Imagem 42",
                description: "",
                id: 1,
                imc: 12,
                image: "assets/imgs/Kid_Mulher1.PNG",
            },
            {
                title: "Imagem 43",
                description: "",
                id: 2,
                imc: 13.7,
                image: "assets/imgs/Kid_Mulher2.png",
            },
            {
                title: "Imagem 44",
                description: "",
                id: 3,
                imc: 15.4,
                image: "assets/imgs/Kid_Mulher3.png",
            },
            {
                title: "Imagem 45",
                description: "",
                id: 4,
                imc: 17.1,
                image: "assets/imgs/Kid_Mulher4.png",
            },
            {
                title: "Imagem 46",
                description: "",
                id: 5,
                imc: 18.8,
                image: "assets/imgs/Kid_Mulher5.png",
            },
            {
                title: "Imagem 47",
                description: "",
                id: 6,
                imc: 20.5,
                image: "assets/imgs/Kid_Mulher6.png",
            },
            {
                title: "Imagem 48",
                description: "",
                id: 7,
                imc: 22.2,
                image: "assets/imgs/Kid_Mulher7.png",
            },
            {
                title: "Imagem 49",
                description: "",
                id: 8,
                imc: 23.9,
                image: "assets/imgs/Kid_Mulher8.png",
            },
            {
                title: "Imagem 50",
                description: "",
                id: 9,
                imc: 25.6,
                image: "assets/imgs/Kid_Mulher9.png",
            },
            {
                title: "Imagem 51",
                description: "",
                id: 10,
                imc: 27.3,
                image: "assets/imgs/Kid_Mulher10.png",
            },
            {
                title: "Imagem 52",
                description: "",
                id: 11,
                imc: 29,
                image: "assets/imgs/Kid_Mulher11.png",
            },
        ];
        this.naoprimeiro;
        this.showSlides();
    }
    // ionViewDidLoad() {
    //   console.log('genero:' + ' ' + this.genero);
    //   console.log('idade:' + ' ' + this.idade);
    //   console.log('peso:' + ' ' + this.peso);
    //   console.log('altura:' + ' ' + this.altura);
    //   console.log('imc real:' + ' ' + this.imcReal);
    //   this.selecionado.push(this.avaliacao3);
    //   this.imcAtual.push(this.navParams.get('imcAtual'));
    //   console.log(this.selecionado)
    // }
    Avaliacao4Page.prototype.showSlides = function () {
        if (this.genero == 'masculino') {
            if (this.idade > 7) {
                this.slides = this.kidF;
            }
            if (this.idade >= 13) {
                this.slides = this.adultF;
            }
        }
        else {
            if (this.idade > 7) {
                this.slides = this.kidM;
            }
            if (this.idade >= 13) {
                this.slides = this.adultM;
            }
        }
    };
    Avaliacao4Page.prototype.slideNext = function () {
        this.slider.slideNext();
        if (this.slider.valueOf().isEnd()) {
            this.slidePrev();
        }
        this.naoprimeiro = true;
    };
    Avaliacao4Page.prototype.slidePrev = function () {
        this.slider.slidePrev();
        if (this.slider.valueOf().isBeginning()) {
            this.naoprimeiro = false;
        }
    };
    Avaliacao4Page.prototype.addSlides = function (slide) {
        if (this.selecionado.indexOf(slide) === -1) {
            this.selecionado.push(slide.imc);
            this.selecionado.push(slide.id);
            console.log('selecionado');
            console.log(this.selecionado);
            this.imcSexoOposto = slide.imc;
            this.idSexoOposto = slide.id;
            // if(this.selecionado.length === 0){
            //        this.imcSexoOposto = this.selecionado.push(slide.imc);
            // }
        }
        this.pushResult();
    };
    Avaliacao4Page.prototype.pushResult = function () {
        var result = this.modalCrtl.create(__WEBPACK_IMPORTED_MODULE_2__resultado_resultado__["a" /* ResultadoPage */], { avaliacao3: this.selecionado,
            paciente: this.navParams.get('paciente'),
            imcAtual: this.imcAtual,
            imcReal: this.imcReal,
            imcDesejado: this.imcDesejado,
            idDesejado: this.idDesejado,
            idAtual: this.idAtual,
            idIdeal: this.navParams.get('idIdeal'),
            idSexoOposto: this.idSexoOposto,
            imcIdeal: this.imcIdeal,
            imcSexoOposto: this.imcSexoOposto,
        });
        result.present();
    };
    return Avaliacao4Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
    __metadata("design:type", Object)
], Avaliacao4Page.prototype, "slider", void 0);
Avaliacao4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-avaliacao4',template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\avaliacao4\avaliacao4.html"*/'\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title style="text-align: center">\n      <strong >Qual figura representa <br> o ideal para o sexo oposto?</strong>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides paginationClickable=false\n              initialSlide=0\n              loop=false\n              #slider>\n\n    <ion-slide *ngFor="let slide of slides"  >\n      <ion-toolbar>\n        <ion-buttons end >\n        </ion-buttons>\n      </ion-toolbar>\n      <div animates #animation="animates" text-center>\n        <img [src]="slide.image"  (click)="addSlides(slide)" (click)="animation.start({type: \'rubberBand\', duration: \'3000\'})" class="slide-image"/>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img class="slide-image"/>\n    </ion-slide>\n  </ion-slides>\n  <div class="swiper-button-next" (click)="slideNext()"></div>\n  <div class="swiper-button-prev" *ngIf="naoprimeiro" (click)="slidePrev()"></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\avaliacao4\avaliacao4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], Avaliacao4Page);

//# sourceMappingURL=avaliacao4.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avaliacao_avaliacao__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historico_historico__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemDetailPage = (function () {
    function ItemDetailPage(navParams, navCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        this.nome = this.navParams.get('item').nome;
        this.dtnascimento = this.navParams.get('item').dtnascimento;
        this.genero = this.navParams.get('item').genero;
        this.peso = this.navParams.get('item').peso;
        this.altura = this.navParams.get('item').altura;
        this.avaliacao = this.navParams.get('item').avaliacoes;
        // this.qtdAvaliacoes = this.avaliacao.length;
        console.log(this.avaliacao);
    };
    ItemDetailPage.prototype.chamadaAvaliacao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__avaliacao_avaliacao__["a" /* AvaliacaoPage */], { paciente: this.navParams.get('item') });
    };
    ItemDetailPage.prototype.historicoAvaliacoes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__historico_historico__["a" /* HistoricoPage */], { paciente: this.avaliacao });
    };
    return ItemDetailPage;
}());
ItemDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-item-detail',template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\item-detail\item-detail.html"*/'<ion-header>\n  <ion-navbar color="secondary" style="text-align: center">\n    <ion-title>\n      {{nome}}\n    </ion-title>\n    <!--<ion-item end>{{avaliacao}} Avaliações</ion-item>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item >\n    Data de nascimento: {{dtnascimento}}\n  </ion-item>\n  <ion-item>\n    Genero: {{genero}}\n  </ion-item>\n  <ion-item>\n    Peso: {{peso}}\n  </ion-item>\n  <ion-item>\n    Altura: {{altura}}\n  </ion-item>\n</ion-list>\n  <button ion-button icon-only (click)="chamadaAvaliacao()" full>Iniciar Avaliação</button>\n  <button ion-button icon-only (click)="historicoAvaliacoes()" full>Historico</button>\n</ion-content>\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\pages\item-detail\item-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ItemDetailPage);

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_css_animator__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_item_add_item__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_item_detail_item_detail__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_avaliacao_avaliacao__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_resultado_resultado__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_avaliacao2_avaliacao2__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_main_main__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sobre_sobre__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_avaliacao3_avaliacao3__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_avaliacao4_avaliacao4__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_historico_historico__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_sobre_sobre__["a" /* SobrePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_add_item_add_item__["a" /* AddItemPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_avaliacao_avaliacao__["a" /* AvaliacaoPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_avaliacao2_avaliacao2__["a" /* Avaliacao2Page */],
            __WEBPACK_IMPORTED_MODULE_16__pages_avaliacao3_avaliacao3__["a" /* Avaliacao3Page */],
            __WEBPACK_IMPORTED_MODULE_17__pages_avaliacao4_avaliacao4__["a" /* Avaliacao4Page */],
            __WEBPACK_IMPORTED_MODULE_12__pages_resultado_resultado__["a" /* ResultadoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_historico_historico__["a" /* HistoricoPage */],
            __WEBPACK_IMPORTED_MODULE_5_css_animator__["AnimatesDirective"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/historico/historico.module#HistoricoPageModule', name: 'HistoricoPage', segment: 'historico', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/test-test/test-test.module#TestTestPageModule', name: 'TestTestPage', segment: 'test-test', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_sobre_sobre__["a" /* SobrePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_add_item_add_item__["a" /* AddItemPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_avaliacao_avaliacao__["a" /* AvaliacaoPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_avaliacao2_avaliacao2__["a" /* Avaliacao2Page */],
            __WEBPACK_IMPORTED_MODULE_16__pages_avaliacao3_avaliacao3__["a" /* Avaliacao3Page */],
            __WEBPACK_IMPORTED_MODULE_17__pages_avaliacao4_avaliacao4__["a" /* Avaliacao4Page */],
            __WEBPACK_IMPORTED_MODULE_12__pages_resultado_resultado__["a" /* ResultadoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_historico_historico__["a" /* HistoricoPage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__providers_data__["a" /* Data */], { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_5_css_animator__["AnimationService"]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_main_main__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../pages/home/home';

var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_main_main__["a" /* MainPage */];
        platform.ready().then(function () {
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Ordis\Arquivos\Desenvolvimento\ULBRA\Proict\MHealth\GepetsDev3\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Data = (function () {
    function Data(storage) {
        this.storage = storage;
    }
    Data.prototype.getData = function () {
        return this.storage.get('todos');
    };
    Data.prototype.save = function (data) {
        this.storage.set('todos', data);
    };
    return Data;
}());
Data = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], Data);

//# sourceMappingURL=data.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map