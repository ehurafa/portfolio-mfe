import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

import { ContainerComponent } from './container/container.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports: [ CommonModule ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
