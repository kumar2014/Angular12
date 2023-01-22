import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // #1
  enteredSerchValue: string = '';

  // #3: Create Custom event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
// #4 Raise the custom event
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSerchValue); //This emit method will raise event noe to this emit method we also need to pass the data which we want to emit when this event will be raised and we want to emit the value which we have inside this entered search value property.
  }
}
