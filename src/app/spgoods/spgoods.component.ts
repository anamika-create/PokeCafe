import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { Item } from '../item.model';
const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-spgoods',
  templateUrl: './spgoods.component.html',
  styleUrls: ['./spgoods.component.css']
})
export class SpgoodsComponent implements OnInit {
  array: Item[];
  resp: any;
  flag = false;
  name: any;
  price: any;
  content: any;

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(public service: ItemService, public route: Router) {
  this.service.getSpGoods();
  this.service.getSpGoodsUpdateListener().subscribe((data: any) => this.array = data);
  }

  ngOnInit() {
     this.uploader.onAfterAddingFile = (file: { withCredentials: boolean; }) => { file.withCredentials = false; };
     this.uploader.onCompleteItem = (item: any, response: any, status: any) => {
          console.log('ImageUpload:uploaded:', item, status, response);
          console.log(item);
          this.resp = response;
          this.flag = true;
          if (this.flag === true) {
          this.service.addSpGoods(this.resp, this.name, this.price, this.content);
          alert('file added');
          this.flag = false;
          window.location.reload();
         }
    };
     this.service.getSpGoodsUpdateListener().subscribe((data: any) => this.array = data);
    }


}
