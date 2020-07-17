import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-menu-drinks',
  templateUrl: './menu-drinks.component.html',
  styleUrls: ['./menu-drinks.component.css']
})
export class MenuDrinksComponent implements OnInit {
  array: Item[] = [];


  constructor(public service: ItemService) {
    this.service.getDrinks();
    this.service.getDrinksUpdateListener().subscribe(data => this.array = data);
  }

  ngOnInit() {
  }
}
