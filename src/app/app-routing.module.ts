import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinesListComponent } from './components/mines-list/mines-list.component';
import { MineOneComponent } from './mine-one/mine-one.component';
import { MineTwoComponent } from './mine-two/mine-two.component';


const routes: Routes = [
  { path: 'mines-list', component: MinesListComponent},
  { path: 'mineone', component: MineOneComponent},
  { path: 'minetwo', component: MineTwoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
