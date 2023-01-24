import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable() //3 When we inject a service we need @Injectable metadata
export class UserService {
  // #2 We want to angular to inject an instance of this logger service class
  constructor(private logger: LoggerService) {}

  users = [
    { name: 'John', status: 'active' },
    { name: 'Mark', status: 'inactive' },
    { name: 'Steve', status: 'active' },
  ];

  AddNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
    //  #6
    this.logger.LogMessage(name, status);
  }
}
