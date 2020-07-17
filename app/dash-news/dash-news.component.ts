import { Component, OnInit } from '@angular/core';
import { News } from '../newsdata.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-dash-news',
  templateUrl: './dash-news.component.html',
  styleUrls: ['./dash-news.component.css']
})
export class DashNewsComponent implements OnInit {
  array: News[];
  flag = false;
  name;
  content;


  constructor(public service: ItemService, public route: Router) {
    this.service.getNews();
    this.service.getNewsUpdateListener().subscribe(data => this.array = data);
  }

  ngOnInit() {
    }

    func() {
      this.flag = true;
      if (this.flag === true) {
          this.service.addFaq(this.name,  this.content);
          alert('file added');
          this.flag = false;
          window.location.reload();
         }
    }

}
