import { Component, OnInit, VERSION } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  counterObservable = interval(1000);
  counterSub;

  ngOnInit() {}

  subscribe() {
    this.counterSub = this.counterObservable.subscribe((val) => {
      console.log(val);
    });
  }
  unSubscribe() {
    this.counterSub.unsubscribe();
  }
}
