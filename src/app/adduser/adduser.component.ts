import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  //#11
})
export class AdduserComponent implements OnInit {
  // #12
  username: string = '';
  status: string = 'active';

  // #10
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  // #14
  AddUser() {
    this.userService.AddNewUser(this.username, this.status);
    //console.log(this.userService.users);
  }
}
