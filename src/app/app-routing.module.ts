import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';

const routes: Routes = [
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"dashboard",
    component:DashbaordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
