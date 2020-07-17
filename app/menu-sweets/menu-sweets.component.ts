import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Subscription } from 'rxjs';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-menu-sweets',
  templateUrl: './menu-sweets.component.html',
  styleUrls: ['./menu-sweets.component.css']
})
export class MenuSweetsComponent implements OnInit {
  array: Item[] = [];


  constructor(public service: ItemService) {
    this.service.getSweets();
    this.service.getSweetsUpdateListener().subscribe(data => this.array = data);
  }

  ngOnInit() {
  }
}
