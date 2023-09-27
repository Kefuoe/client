import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinesListComponent } from './components/mines-list/mines-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule}  from'@angular/common/http'
import { NavComponent } from './nav/nav.component';
import { MineOneComponent } from './mine-one/mine-one.component';
import { MineTwoComponent } from './mine-two/mine-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LineChartComponent } from './line-chart/line-chart.component';
import { InterceptorService } from './core/services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MinesListComponent,
    NavComponent,
    MineOneComponent,
    MineTwoComponent,
    LineChartComponent, 
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
