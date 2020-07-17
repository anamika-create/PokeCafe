import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Subscription } from 'rxjs';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-menu-latte',
  templateUrl: './menu-latte.component.html',
  styleUrls: ['./menu-latte.component.css']
})
export class MenuLatteComponent implements OnInit {
  array: Item[] = [];


  constructor(public service: ItemService) {
    this.service.getLatte();
    this.service.getLatteUpdateListener().subscribe(data => this.array = data);
  }

  ngOnInit() {
  }
}
