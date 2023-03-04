import { Component, VERSION } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  // #10
constructor(private authService:AuthService){}
// #11
   login() {
     this.authService.logIn();
   }
  //  #13
   logout() {
     this.authService.logout();
   }
}
