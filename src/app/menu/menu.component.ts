import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  array: Item[] = [];


  constructor(public service: ItemService) {
    this.service.getPosts();
    this.service.getPostUpdateListener().subscribe(data => this.array = data);
  }

  ngOnInit() {
  }
}
