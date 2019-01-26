import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponentComponent} from './list-component/list-component.component';
import {AddComponent} from './add/add.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path:'' , component:ListComponentComponent , pathMatch:'full'},
  {path:'list' , component:ListComponentComponent },
  {path:'add' , component:AddComponent },
  {path:'detail' , component:DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
