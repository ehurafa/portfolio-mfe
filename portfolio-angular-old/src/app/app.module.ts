import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

import { ParcelModule } from 'single-spa-angular/parcel';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { ReactiveFormsModule } from '@angular/forms';

import { JobComponent } from './job/job.component';
import { PreloaderComponent } from './templates/preloader/preloader.component';
import { ContactComponent } from './pages/contact/contact.component';

import { NgpSortModule } from "ngp-sort-pipe";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContainerComponent,
    CardComponent,
    JobComponent,
    ContactComponent,
    PreloaderComponent    
  ],
  imports: [
    BrowserModule,
    ParcelModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
	NgpSortModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/portfolio' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
