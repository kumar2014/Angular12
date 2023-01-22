import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  constructor() {}
  
  @Input('total') all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  // #1
  selectedRadioButtonValue: string = 'All';
// #3
  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
// #4
  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }
}
