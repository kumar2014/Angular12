import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  // #9
  constructor(private dataService: DataService) {}

  ngOnInit() {}
  // #2
  enteredText: string;
  // #5
  onButtonClick() {
    console.log(this.enteredText);
    // #10
    this.dataService.raiseDataEventEmitterEvent(this.enteredText);
  }
}
