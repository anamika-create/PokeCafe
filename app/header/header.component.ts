import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  messages = [];
  subscription: Subscription;
  i = 1;
  index: any;
  head1: boolean;
  head2 = true;
  constructor() {
    this.show();
   }
  ngOnInit() {
  }
  show() {
    this.index = setInterval (() => {this.i++; this.head1 = false; this.head2 = true; if ( this.i >= 2) {
      this.i = 0; this.head1 = true;
      this.head2 = false;
    }}, 5000);
}


}
