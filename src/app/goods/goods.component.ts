import { ItemService } from '../item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  array: Item[];

  constructor(public service: ItemService) {
  this.service.getGoods();
  this.service.getGoodsUpdateListener().subscribe((data: any) => this.array = data);
  }

  ngOnInit() {
    }


}
