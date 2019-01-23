import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { StatusComponent } from './status/status.component'
import { NotfoundComponent } from './notfound/notfound.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path:"status",component: StatusComponent},
  {path:"", component: HomeComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
