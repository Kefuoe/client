import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import { MinesListComponent } from './components/mines-list/mines-list.component';


const routes: Routes = [
  { path: 'mines-list', component: MinesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
