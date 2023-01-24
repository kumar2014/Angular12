import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers: [EnrollService], //#4
})
export class AngularComponent {
  title = 'Angular';
  // #3
  constructor(private enrollService: EnrollService) {}
  OnEnroll() {
    //#5
    this.enrollService.OnEnrollClicked(this.title);
  }
}
