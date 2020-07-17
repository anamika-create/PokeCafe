
import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { FileUploader } from 'ng2-file-upload';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-dash-latte',
  templateUrl: './dash-latte.component.html',
  styleUrls: ['./dash-latte.component.css']
})
export class DashLatteComponent implements OnInit {

  array: Item[];
  resp;
  flag = false;
  name;
  price;
  content;

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(public service: ItemService, public route: Router) {
    this.service.getLatte();
    this.service.getLatteUpdateListener().subscribe(data => this.array = data);
  }

  ngOnInit() {
     this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          console.log('ImageUpload:uploaded:', item, status, response);
          console.log(item);
          this.resp = response;
          this.flag = true;
          if (this.flag === true) {
          this.service.addLatte(this.resp, this.name, this.price, this.content);
          alert('file added');
          this.flag = false;
          window.location.reload();
         }
    };
     this.service.getLatteUpdateListener().subscribe(data => this.array = data);
    }


}
