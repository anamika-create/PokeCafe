import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { Item } from '../item.model';

const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-dash-sweets',
  templateUrl: './dash-sweets.component.html',
  styleUrls: ['./dash-sweets.component.css']
})
export class DashSweetsComponent implements OnInit {
  array: Item[];
  resp;
  flag = false;
  name;
  price;
  content;

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(public service: ItemService, public route: Router) {
    this.service.getSweets();
    this.service.getSweetsUpdateListener().subscribe(data => this.array = data);
  }

  ngOnInit() {
     this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          console.log('ImageUpload:uploaded:', item, status, response);
          console.log(item);
          this.resp = response;
          this.flag = true;
          if (this.flag === true) {
          this.service.addSweets(this.resp, this.name, this.price, this.content);
          alert('file added');
          this.flag = false;
          window.location.reload();
         }
    };
     this.service.getSweetsUpdateListener().subscribe(data => this.array = data);
    }
}
