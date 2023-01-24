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
    // #1
    observer.error(new Error('Something Went Wrong! Please try later'));
    observer.next('3');
    observer.next('4');
    setTimeout(() => {
      observer.complete();
    }, 4000);
  });
  ngOnInit() {
    this.myobservable.subscribe(
      (val) => {
        console.log(val);
        // #2 Second callback function for error message
      },
      (error) => {
        // alert(error.message);
      },
      () => {
        alert('Observable has complete emitting all values.');
      }
    );
  }
}

//Note:
// Error: When this error will be emitted after that we have 3 and 4 these two values will not get emitted by the observable
// Whenever an observable emits an error after that if we have any values to be emittedthose values will not get emitted.

// Once the complete signal is emitted from the observable after that if we have any data to be emitted that will not get emited.
// For example

// If We change the time interval 1seconds this complete signal will be emitted after 1seconds so any value which we are emitting agter 1seconds for examples this value 0 and 1 other value not get emitted

// once the complete signal has been emitted from the observable after that no value will be emitted by that the observable

// once the observable return the error after that it will also return a complete singnal