import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// #6
@Injectable()
export class DataService {
  // creatring new subject constructor it will return an observable

  dataEmitter = new Subject<string>();
  // Specify the type of data which the observable returened by this subject will emit

  raiseDataEventEmitterEvent(data: string) {
    this.dataEmitter.next(data);
  }
}

// Note:
//
// dataEmitter is a Subject so we need to call next method
// We have to inject the service in the app.component class
