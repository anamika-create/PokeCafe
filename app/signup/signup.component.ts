import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username;
  password;

  constructor(public route: Router, public service: ItemService, public http: HttpClient) { }

  ngOnInit() {
  }
      Sign() {
        if (this.username != null && this.password != null && this.password.length < 4) {
        const usern = this.username;
        const passw = this.password;
        this.service.addUser(usern,  passw);
        alert('User ' + this.username + ' Added Successfully');
        window.location.reload();
      } else {
        alert('Invalid Credentials.. Please fill up properly..');
      }
    }
    Cancel() {
      this.route.navigateByUrl('');
    }
}
