import { Component, OnInit, VERSION } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUser();
  }
  onGetUsers():void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log('Done getting users')
    );
  }

  onGetUser():void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log('Done getting users')
    );
  }
}
