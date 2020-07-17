import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-menu-food',
  templateUrl: './menu-food.component.html',
  styleUrls: ['./menu-food.component.css']
})
export class MenuFoodComponent implements OnInit {
  array: Item[] = [];


  constructor(public service: ItemService) {
    this.service.getFood();
    this.service.getFoodUpdateListener().subscribe(data => this.array = data);
  }

  ngOnInit() {
  }
}
