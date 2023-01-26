import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  // #11
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // #12
    this.dataService.dataEmitter.subscribe((val) => {
      this.inputText = val;
    });
  }
  // #1
  inputText: string;
}
