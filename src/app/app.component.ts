import { Component, VERSION } from '@angular/core';
import { UserService } from './Services/user.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService], //#3
})
export class AppComponent {
  title = 'UserDetailService';

  // #2 create a instance for UserService
  constructor(private userService: UserService) {}
}
