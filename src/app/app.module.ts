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

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent, 
    MineOneComponent,
    MineTwoComponent,
    NavComponent,
    MineThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
