import { Component, VERSION } from '@angular/core';

import { UserService } from './Services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService], //4
})
export class AppComponent {
  title = 'UserService';

  // #3 Create the instance for userservice class
  constructor(private userService: UserService) {}
  // #2
  users: { name: string; status: string }[] = [];
  // #5
  ngOnInit() {
    this.users = this.userService.users;
  }
}

// Note:
// #4 We should tell angular we want an instance of this user service class for that we need to specify the providers property array
// With this an instance of this user service class will be available inside this user service parameter

// #5 We are accessing in the property
