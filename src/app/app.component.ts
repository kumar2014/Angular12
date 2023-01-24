import { Component, OnInit, VERSION } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular Observable' + VERSION.major;

  // #1 Create method for creating observable
  myObservable = Observable.create((observer) => {
    observer.next('A');
    setTimeout(() => {
      observer.next('0');
    }, 3000);
    observer.error(new Error('Something Went Wrong! Please try later'));
    observer.next('3');
    observer.next('4');
    setTimeout(() => {
      observer.complete();
    }, 4000);
  });
  ngOnInit() {
    this.myObservable.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        alert('Observable has complete emitting all values.');
      }
    );
  }
}

//Note:
