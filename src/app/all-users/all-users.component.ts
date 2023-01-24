import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  // #6  create a instance of user service
  constructor(private userService: UserService) {}
  // #5 create a new propert users here we want to specify the users property
  users: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }[] = [];

  // #7: lets access userService user
  ngOnInit(): void {
    this.users = this.userService.users;
  }
  // #10
  ShowDetails(user: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }) {
    //  #13
    this.userService.ShowUserDetails(user);
  }
}
