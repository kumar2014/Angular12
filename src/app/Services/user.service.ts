import { Injectable } from '@angular/core';

export class UserService {
  // #1
  users = [
    { name: 'John', status: 'active' },
    { name: 'Mark', status: 'inactive' },
    { name: 'Steve', status: 'active' },
  ];
  // #9
  AddNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
  }
}
