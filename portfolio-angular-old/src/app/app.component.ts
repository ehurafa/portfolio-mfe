import { mountRootParcel } from 'single-spa';


import { slideInAnimation } from './animations';
import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject  } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import {transition, trigger, group, animate, style, query} from '@angular/animations';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'portfolio-angular';
  // mountRootParcel = mountRootParcel;
  // parcelProps = { customProp1: 'Parent prop 1' };
  // async config() {
  //   return (window as any).System.import('@rg/react-sidebar');
  // }
  // parcelMounted():void {
  //   console.log('React parcel mounted');
  // }

  bgColor: string;

  environment: string;

  @ViewChild("outlet") outlet: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: Document
    //public router: Router
    ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||     
      document.documentElement.scrollTop > 20) {
      document.getElementById('sidebar').classList.add('squeezed');  
    }
    if (document.body.scrollTop > 60 ||     
      document.documentElement.scrollTop > 60) {
      document.getElementById('sidebar').classList.add('squeezed__level-2');  
    }
    if (document.body.scrollTop > 120 ||     
      document.documentElement.scrollTop > 120) {
      document.getElementById('sidebar').classList.add('squeezed__level-3');  
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
