import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(public route: Router, public postsService: ItemService, public http: HttpClient) { }

  ngOnInit() {
  }
  Authenticate() {
    if (this.username != null) {
      if (this.username === 'Arceus' && this.password === 'Arceus') {
        alert('Admin Login Successful');
        this.route.navigateByUrl('/dashboard');
      } else if (this.username !== null && this.password != null) {
        const pass = {username: this.username, password: this.password};
        this.http
        .post<{message: number}>('http://localhost:3000/api/usercheck', pass)
        .subscribe(responseData => {
          if (responseData.message === 1) {
            alert('Login successfull ! ');
            console.log('Successfull login ' + this.username);
            this.postsService.LoggedIn = this.username;
            this.route.navigateByUrl('/reservation-');
          }
          if (responseData.message === 0) {
            alert('Invalid Credentials ! ');
            window.location.reload();
          }

        });
      } else {
      alert('Invalid Credentials');
      window.location.reload();
    }


  }
}
  Cancel() {
    this.route.navigateByUrl('');
}
}
