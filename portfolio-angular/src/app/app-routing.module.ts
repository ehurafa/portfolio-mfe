import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { JobComponent } from './job/job.component'

const routes: Routes = [

  { component: ContainerComponent, path: ""},
  // { component: ContainerComponent, path: "**"},
  { component: JobComponent, path: "job/:id" },
  { component: ContainerComponent, path: "**"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
