import { Component, OnInit, VERSION } from '@angular/core';
import { filter, from, map, observable, Observable, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular Observable' + VERSION.major;

  // #3 Creating observable using From operator

  array1 = [1, 2, 6, 7, 8];
  array2 = ['A', 'B', 'C'];
  // from operator take only one number of arguments
  // myObservable1 = from(this.array1);

  // Example 1: MAP Operator
  // transformedObs = this.myObservable1.pipe(
  //   map((val) => {
  //     //it will emit 1,2,6,7,8
  //     return val * 5; // We are transforming data of this source observable
  //     //5,10,30,35,40
  //   })
  // );
  // Example 2: Filter Operator
  // filterdObs = this.transformedObs.pipe(
  //   filter((val) => {
  //     return val >= 30; // The filter operatopr will return the new observable and that observable will contain the data from this source observable which will satisfy  this condition
  //   })
  // );
  // ngOnInit() {
  //   this.transformedObs.subscribe(
  //     (val) => {
  //       console.log(val);
  //     },
  //     (error) => {
  //       // alert(error.message);
  //     },
  //     () => {
  //       // alert('Observable has complete emitting all values.');
  //     }
  //   );

  //   this.filterdObs.subscribe(
  //     (val) => {
  //       console.log(val);
  //     },
  //     (error) => {
  //       // alert(error.message);
  //     },
  //     () => {
  //       // alert('Observable has complete emitting all values.');
  //     }
  //   );
  // }

  // Example 3: Method1 Both map and filter using one pipe
  //   transformedObs = this.myObservable1.pipe(
  //     map((val) => {
  //       return val * 5;
  //     }),
  //     filter((val) => {
  //       return val >= 30;
  //     })
  //   );

  //   ngOnInit() {
  //     this.transformedObs.subscribe(
  //       (val) => {
  //         console.log(val);
  //       },
  //       (error) => {
  //         // alert(error.message);
  //       },
  //       () => {
  //         // alert('Observable has complete emitting all values.');
  //       }
  //     );
  //   }
  // }

  // Example 3: Method 2 Both map and filter using one
  myObservable1 = from(this.array1).pipe(
    map((val) => {
      return val * 5;   // output 5,10,30,35,40
    }),
    filter((val) => {
      return val >= 30;  //output 30,35,40
    })
  );

 //The Same pipe method we can specify another parameter which can be an operator
// here we are specify a second argument for pipe method
// The first this map operator will be applied on this my observable, then the map operator will return a new observable
// and on that new observable this filter operator will be applied and then this filter operator will also return a new observable and that observable will be assigned to this  transformend observable 
// Now this transformed observable should also emit only the filtered data  

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
// We have created this transformed observable from this my observable and we have created this my observable using this from operator.
//  Map operator using map operator we can apply some logic to the data emitted by the source observable and then the mapoperator will return a new opservable with the transform data
