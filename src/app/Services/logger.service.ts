import { Injectable } from '@angular/core';

@Injectable()
// #1
export class LoggerService {
  LogMessage(name: string, status: string) {
    console.log(
      'A new user with username "' +
        name +
        '" with status ' +
        status +
        ' has been added.'
    );
  }
}

// Note:
// We are injected an instance of this logger service class inside this user service class using 3 steps
// 1.First we created a construction with a private parameter
// 2.we decorated user service with @Injectable() and then
// 3.we are providing this logger service inside this app component
