import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
})
export class AngularComponent {
  title = 'Angular';
  // #4
  constructor(private enrollService: EnrollService) {}

  // #5
  OnEnroll() {
    this.enrollService.OnEnrollClicked(this.title);
  }
}
