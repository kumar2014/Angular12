import {
  Component,
  Input,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  // #3
  @Input() value: string = 'Test';

  // #10  it is not a lifecycle hook, its just a javascript feature
  // When a class gets instantiated the first method which gets called is the  constructor
  // It has been logged only once
  constructor() {
    console.log('Constructor called');
    console.log(this.value); // Test value will show in console
  }

  // #2
  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnchanges called');
    console.log(change); //
  }
  //  #3
  ngOnInit() {
    console.log('ngOnInit called');
    // console.log(this.value);
  }
  // #4
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  // #5 : Projected content change it will call only one time
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }
  // #6: It will call each change Detection
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
  // #7:
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
  //  #8
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  // #9
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
