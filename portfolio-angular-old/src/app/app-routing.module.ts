import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { AboutComponent } from './pages/about/about.component';
import { ContainerComponent } from './container/container.component';
import { JobComponent } from './job/job.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { component: ContainerComponent, path: "", data: {animation: 'HomePage' }},
  { component: JobComponent, path: "job/:id", data: {animation: 'JobPage' }},
  { component: ContactComponent, path: "contact", data: {animation: 'ContactPage' }},
  { component: CertificatesComponent, path: "certificates", data: {animation: 'CertificatesPage' }},
  { component: ContainerComponent, path: "**", data: {animation: 'HomePage'  }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
