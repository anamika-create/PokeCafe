import { Component, OnInit } from '@angular/core';
import { News } from '../newsdata.model';
import { FileUploader } from 'ng2-file-upload';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-dash-faq',
  templateUrl: './dash-faq.component.html',
  styleUrls: ['./dash-faq.component.css']
})
export class DashFaqComponent implements OnInit {

  array: News[];
  resp;
  flag = false;
  name;
  price;
  content;

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(public service: ItemService, public route: Router) {
    this.service.getFaq();
    this.service.getFaqUpdateListener().subscribe(data => this.array = data);
  }

  ngOnInit() {
    }
    func() {
      this.flag = true;
      if (this.flag === true) {
          this.service.addNews(this.name,  this.content);
          alert('file added');
          this.flag = false;
          window.location.reload();
         }
    }

}
