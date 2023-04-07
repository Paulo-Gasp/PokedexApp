import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import{ HttpClientModule}from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './componentes/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeModule,
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    BrowserModule,
    HttpClientModule

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClientModule
  ],
})
export class AppModule { }
