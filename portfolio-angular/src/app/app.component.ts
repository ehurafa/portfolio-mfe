import { Component } from '@angular/core';

import { mountRootParcel } from 'single-spa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-angular';
  mountRootParcel = mountRootParcel;
  parcelProps = { customProp1: 'Parent prop 1' };
  async config() {
    return (window as any).System.import('@rg/react-sidebar');
  }
  parcelMounted():void {
    console.log('React parcel mounted');
  }
}
