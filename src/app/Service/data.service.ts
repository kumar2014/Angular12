import { EventEmitter, Injectable } from '@angular/core';

// #6
@Injectable()
export class DataService {
  dataEmitter = new EventEmitter<string>();

  raiseDataEventEmitterEvent(data: string) {
    this.dataEmitter.emit(data);
  }
}

// Note: 
// We have to inject the service in the app.component class