import { Component, OnInit } from '@angular/core';
import { ItemService } from './../item.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
faq: any;
constructor(private service: ItemService) { }

  ngOnInit() {
    this.service.getFaq();
    this.service.getFaqUpdateListener()
    .subscribe(data => this.faq = data);
  }

}
