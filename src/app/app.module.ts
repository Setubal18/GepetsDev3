import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { Data } from '../providers/data';
import {AvaliacaoPage} from "../pages/avaliacao/avaliacao";
import {ResultadoPage} from "../pages/resultado/resultado";
import {Avaliacao2Page} from "../pages/avaliacao2/avaliacao2";
import {MainPage} from "../pages/main/main";
import {SobrePage} from "../pages/sobre/sobre";
import {Avaliacao3Page} from "../pages/avaliacao3/avaliacao3";
import {Avaliacao4Page} from "../pages/avaliacao4/avaliacao4";
import {HistoricoPage} from "../pages/historico/historico";


@NgModule({
  declarations: [
    MyApp,
    MainPage,
    SobrePage,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    AvaliacaoPage,
    Avaliacao2Page,
    Avaliacao3Page,
    Avaliacao4Page,
    ResultadoPage,
    HistoricoPage,
    AnimatesDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    SobrePage,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    AvaliacaoPage,
    Avaliacao2Page,
    Avaliacao3Page,
    Avaliacao4Page,
    ResultadoPage,
    HistoricoPage

  ],
  providers: [Data,{provide: ErrorHandler, useClass: IonicErrorHandler},AnimationService]
})
export class AppModule {}




