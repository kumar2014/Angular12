import { Injectable } from '@angular/core';

@Injectable()
// #5 create new AuthService for login and logout
export class AuthService {
  loggedIn: boolean = false;
  logIn() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
  isAuthenticated() {
    return this.loggedIn;
  }
  constructor() {}
}


