import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MineOneComponent } from './mine-one/mine-one.component';
import { MineTwoComponent } from './mine-two/mine-two.component';
import { MineThreeComponent } from './mine-three/mine-three.component';

const routes: Routes = [
  { path: 'mineone', component: MineOneComponent},
  { path: 'minetwo', component: MineTwoComponent},
  { path: 'minethree', component: MineThreeComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
