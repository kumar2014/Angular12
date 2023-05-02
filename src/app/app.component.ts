import { Component, OnInit, VERSION } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  private user: User = {
    id: 12,
    name: 'Junior2 Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.onGetUsers();
    // this.onGetUser();
    // this.onCreateUser();
    // this.onUpdateUser();
    this.onPatchUser();
    this.onDeleteUser();
  }
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    );
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done getting user 12')
    );
  }
  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating users')
    );
  }
  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done updating users')
    );
  }
  onPatchUser(): void {
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done Patch users')
    );
  }

  onDeleteUser(): void {
    this.userService.deleteUser(2).subscribe(
      (response) => console.log('Response from delete', response),
      (error: any) => console.log(error),
      () => console.log('Done Patch users')
    );
  }
}
