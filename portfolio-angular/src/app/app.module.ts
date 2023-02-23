import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { ParcelModule } from 'single-spa-angular/parcel';

import { ContainerComponent } from './container/container.component';
import { CardComponent } from './card/card.component';
import { JobComponent } from './job/job.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CardComponent,
    JobComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ParcelModule
  ],
  exports: [ CommonModule ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/portfolio' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
