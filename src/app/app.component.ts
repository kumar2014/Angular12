import { Component, VERSION } from '@angular/core';
import { UserService } from './Services/user.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [UserService]
})
export class AppComponent  {
  title = 'UserDetailService';

  constructor(private userService: UserService){

  }
}
