import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Observable' + VERSION.major;
  myobservable = new Observable((observer)=>{
    console.log('observable starts');
    observer.next();
  });

}

// Note:
// The observable constructor we need to pass a callback a function and this callback function will receive an argument which will be the observer and this argument will be injected by rxjs lib

// This observer is nothing but the subscriber which is waiting for the data 
//  To emit the data on this observer we can call next method