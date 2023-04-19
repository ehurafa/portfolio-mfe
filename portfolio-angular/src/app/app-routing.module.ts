import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { JobComponent } from './job/job.component';
import { ContactComponent } from './pages/contact/contact.component'

const routes: Routes = [
  { path: '', component: ContainerComponent},
  { path: 'detalhes/:id', component: JobComponent },
  { path: 'contato', component: ContactComponent },
  { component: ContainerComponent, path: "**"}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
