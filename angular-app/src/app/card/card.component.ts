
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
 templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 
  @Input() job: any;
  /*  //##
  @Input() index;
*/
  

  cols: any = [];
  // colOne: String[];
  // colTwo: String[];
  // colThree: String[];

  constructor() {    
   }
   cardHighlight() {
    // console.log('cardHighlight');
   }
   mouseEnter() {};

  ngOnInit(): void {
   //## console.log(this.job);

  }

}
