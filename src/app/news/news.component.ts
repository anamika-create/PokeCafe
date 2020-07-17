import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  arr: any;
  constructor(private service: ItemService) { }

  ngOnInit() {
    this.service.getNews();
    this.service.getNewsUpdateListener()
    .subscribe(data => this.arr = data);
  }

}

