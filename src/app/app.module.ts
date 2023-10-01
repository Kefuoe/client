import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule}  from'@angular/common/http'

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NavComponent } from './nav/nav.component';
import { MineOneComponent } from './mine-one/mine-one.component';
import { MineTwoComponent } from './mine-two/mine-two.component';
import { InterceptorService } from './core/services/interceptor.service';
import { MineThreeComponent } from './mine-three/mine-three.component';
import { MineFourComponent } from './mine-four/mine-four.component';
import { MineFiveComponent } from './mine-five/mine-five.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent, 
    MineOneComponent,
    MineTwoComponent,
    NavComponent,
    MineThreeComponent,
    MineFourComponent,
    MineFiveComponent,
    IncidentsComponent,
    MapComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LeafletModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
