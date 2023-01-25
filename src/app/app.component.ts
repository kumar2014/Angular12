import { Component, OnInit, VERSION } from '@angular/core';
import { from, observable, Observable, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular Observable' + VERSION.major;

  // #1 Create method for creating observable
  //   myObservable = Observable.create((observer) => {
  //     observer.next('A');
  //     setTimeout(() => {
  //       observer.next('0');
  //     }, 3000);
  //     observer.error(new Error('Something Went Wrong! Please try later'));
  //     observer.next('3');
  //     observer.next('4');
  //     setTimeout(() => {
  //       observer.complete();
  //     }, 4000);
  //   });
  //   ngOnInit() {
  //     this.myObservable.subscribe(
  //       (val) => {
  //         console.log(val);
  //       },
  //       (error) => {
  //         // alert(error.message);
  //       },
  //       () => {
  //         alert('Observable has complete emitting all values.');
  //       }
  //     );
  //   }
  // }

  //   // #2 Creating observable using Of operator

  //   array1 = [1, 2, 6, 7, 8];
  //   array2 = ['A', 'B', 'C'];
  // of Opertor takes any number of arguments
  //   myObservable1 = of(this.array1, this.array2);

  //   ngOnInit() {
  //     this.myObservable1.subscribe(
  //       (val) => {
  //         console.log(val);
  //       },
  //       (error) => {
  //         // alert(error.message);
  //       },
  //       () => {
  //         alert('Observable has complete emitting all values.');
  //       }
  //     );
  //   }
  // }

  // #3 Creating observable using From operator

  array1 = [1, 2, 6, 7, 8];
  array2 = ['A', 'B', 'C'];
  // from operator take only one number of arguments
  myObservable1 = from(this.array1);

  ngOnInit() {
    this.myObservable1.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        // alert(error.message);
      },
      () => {
        // alert('Observable has complete emitting all values.');
      }
    );
  }
}
//Note:
// Of Operator we dont have to explicitly emit the complete signal the of operator will emit a complete signal after it is done emitting all the data
