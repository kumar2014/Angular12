import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  
})
export class AdduserComponent implements OnInit {
  // #9
  username: string = '';
  status: string = 'active';

  // #8
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  // #10
  AddUser() {
    this.userService.AddNewUser(this.username, this.status);
    //console.log(this.userService.users);
  }
}
