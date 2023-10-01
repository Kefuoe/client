import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MineOneComponent } from './mine-one/mine-one.component';
import { MineTwoComponent } from './mine-two/mine-two.component';
import { MineThreeComponent } from './mine-three/mine-three.component';
import { MineFourComponent } from './mine-four/mine-four.component';
import { MineFiveComponent } from './mine-five/mine-five.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'mineone', component: MineOneComponent},
  { path: 'minetwo', component: MineTwoComponent},
  { path: 'minethree', component: MineThreeComponent},
  { path: 'minefour', component: MineFourComponent},
  { path: 'minefive', component: MineFiveComponent},
  { path: 'incidents', component: IncidentsComponent},
  { path: 'map', component: MapComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
