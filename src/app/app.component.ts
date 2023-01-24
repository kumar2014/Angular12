import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular Observable' + VERSION.major;
  myobservable = new Observable((observer) => {
    console.log('observable starts');
    setTimeout(() => {
      observer.next('0');
    }, 3000);
    observer.next('1');
    observer.next('2');
    observer.next('3');
  });
  ngOnInit() {
    this.myobservable.subscribe((val) => {
      console.log(val);
    });
  }
}

// Note:
// The observable constructor we need to pass a callback a function and this callback function will receive an argument which will be the observer and this argument will be injected by rxjs lib

// This observer is nothing but the subscriber which is waiting for the data
//  To emit the data on this observer we can call next method

// The observable will emit the data if there is a subscriber if no subscriber in that case the observable will not emit the data

// Subscribe: this subscribes takes three optional parameters and these parameters are callback functions
// T he first callback function is next, error, complete
// The Next parameter is a callback function which gets executed every time this next method returns a value

// The val parameter have the value which the observable has emitted
