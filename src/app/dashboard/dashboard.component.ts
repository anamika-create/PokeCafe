import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { Item } from '../item.model';

const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  array: Item[];
  resp;
  flag = false;
  name;
  price;
  content;

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(public service: ItemService, public route: Router) {
    this.service.getPosts();
    this.service.getPostUpdateListener().subscribe(data => this.array = data);
  }

  ngOnInit() {
     this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          console.log('ImageUpload:uploaded:', item, status, response);
          console.log(item);
          this.resp = response;
          this.flag = true;
          if (this.flag === true) {
          this.service.addPost(this.resp, this.name, this.price, this.content);
          alert('file added');
          this.flag = false;
          window.location.reload();
         }
    };
     this.service.getPostUpdateListener().subscribe(data => this.array = data);
    }
}
