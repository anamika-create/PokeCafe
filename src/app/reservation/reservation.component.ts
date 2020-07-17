import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Slot } from './../slot.model';
import { ItemService } from '../item.service';
import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Subject } from 'rxjs';
interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  constructor( private service: ItemService, private http: HttpClient, private route: Router) {
    this.service.getSlotsUpdateListener().subscribe( data => this.array = data);
    this.email = this.service.LoggedIn;
    const temp = {email: this.email};
    this.http
    .post<{ message: string}>(
      'http://localhost:3000/api/slotcheck', temp
    ).subscribe(response => {
      console.log(response.message);
      this.status = response.message;
    });
  }
  array: Slot[];
  name = '';
  contact;
  people;
  time = '';
  date;
  email;
  arr: Slot;
  sname;
  scontact;
  speople;
  stime;
  sdate;
  status;
  checkUpdated = new Subject<Slot>();
  currentTime = new Date();
  minDate = new Date(this.currentTime.getFullYear(), this.currentTime.getMonth(), this.currentTime.getDate() + 1);
  maxDate = new Date(this.currentTime.getFullYear(), this.currentTime.getMonth(), this.currentTime.getDate() + 7);
  pokemonControl = new FormControl();
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Morning',
      pokemon: [
        {value: '9-10', viewValue: '9:00 AM - 10:00 AM'},
        {value: '10-11', viewValue: '10:00 AM - 11:00 AM'},
        {value: '11-12', viewValue: '11:00 AM - 12:00 PM'}
      ]
    },
    {
      name: 'Afternoon',
      pokemon: [
        {value: '12:00 PM - 1:00 PM', viewValue: '12:00 PM - 1:00 PM'},
        {value: '1:00 PM - 2:00 PM', viewValue: '1:00 PM - 2:00 PM'},
        {value: '2:00 PM - 3:00 PM', viewValue: '2:00 PM - 3:00 PM'}
      ]
    },
    {
      name: 'Evening',
      pokemon: [
        {value: '3:00 PM - 4:00 PM', viewValue: '3:00 PM - 4:00 PM'},
        {value: '4:00 PM - 5:00 PM', viewValue: '4:00 PM - 5:00 PM'},
        {value: '5:00 PM - 6:00 PM', viewValue: '5:00 PM - 6:00 PM'}
      ]
    },
    {
      name: 'Night',
      pokemon: [
        {value: '6:00 PM - 7:00 PM', viewValue: '6:00 PM - 7:00 PM'},
        {value: '7:00 PM - 8:00 PM', viewValue: '7:00 PM - 8:00 PM'},
        {value: '8:00 PM - 9:00 PM', viewValue: '8:00 PM - 9:00 PM'}
      ]
    }
  ];
  book() {
    if (this.email === undefined) {
      alert('Login Again Please');
      this.route.navigateByUrl('/login');
     } else if ((this.email !== undefined) && (this.name === '' || !this.contact || this.date === '' ||
      this.time === '' || !this.people) ) {
       alert('Fill all the fields');
     } else {
     this.service.reserveSlot(this.name, this.email, this.contact, this.date, this.time, this.people);
     alert('Reservation Done');
     this.route.navigateByUrl('');
     }
  }
  load() {
    if (this.email !== undefined ) {
      const pass = {email: this.email};
      this.http
       .post<{slots: Slot }>('http://localhost:3000/api/getslots', pass)
       .subscribe(responseData => {
         if (responseData.slots.name === 'noreservationfound') {
           alert('No reservation Found!');
         } else {
         alert('Your Reservation Details\nName: ' + responseData.slots.name + '\nContact: ' + responseData.slots.contact +
         '\nPeople(s): ' + responseData.slots.people + '\nDate(Zone): ' + responseData.slots.date
         + '\nTime: ' + responseData.slots.time + '\nPlease Create an other account for a new reservation.');
        }
       });
    } else {
      alert('Please Login Again!');
      this.route.navigateByUrl('/login');
    }
  }
}

