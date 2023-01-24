import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  // #14
  constructor(private userService: UserService) {}

  // #15 Create a property user
  user: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  };

  ngOnInit(): void {
    //#16 Catch the data
   
    this.userService.OnShowDetailsClicked.subscribe(
      (data: {
        name: string;
        job: string;
        gender: string;
        country: string;
        age: number;
        avatar: string;
      }) => {
        this.user = data;
      }
    );
  }
}
 //Note: 
// #16 This event will emit an observable and we can subscribe to that observable and to this observale we can pass a call back function
// So here the callback function is going to receive the data which the event has emitted and the type of the data 