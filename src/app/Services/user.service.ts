import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';


@Injectable()
export class UserService {
  constructor(private logger: LoggerService) {}
// #1
  users = [
    { name: 'John', status: 'active' },
    { name: 'Mark', status: 'inactive' },
    { name: 'Steve', status: 'active' },
  ];
// #9
  AddNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
    this.logger.LogMessage(name, status);
  }
}
