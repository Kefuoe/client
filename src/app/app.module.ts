import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinesListComponent } from './components/mines-list/mines-list.component';
import {HttpClientModule}  from'@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MinesListComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
