import { EventEmitter } from '@angular/core';

// #1
export class UserService {
  users = [
    {
      name: 'John',
      job: 'Teacher',
      gender: 'Male',
      country: 'United States',
      age: 35,
      avatar: 'assets/avatar/john.jpeg',
    },
    {
      name: 'Mark',
      job: 'Designer',
      gender: 'Male',
      country: 'Germany',
      age: 35,
      avatar: 'assets/avatar/mark.jpeg',
    },
    {
      name: 'Merry',
      job: 'Lawyer',
      gender: 'Female',
      country: 'Ireland',
      age: 35,
      avatar: 'assets/avatar/merry.jpeg',
    },
    {
      name: 'Steve',
      job: 'Doctor',
      gender: 'Male',
      country: 'India',
      age: 35,
      avatar: 'assets/avatar/steve.jpeg',
    },
  ];

  // #11 Create an event OnShowDetailsClicked
  OnShowDetailsClicked = new EventEmitter<{
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }>();

  // #12 Raise OnShowDetailsClicked method 
  ShowUserDetails(user: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }) {
    this.OnShowDetailsClicked.emit(user);
  }
}
// Note:
// #11 This event emitter its going to emit a data of type object and that object is going to have user properties
