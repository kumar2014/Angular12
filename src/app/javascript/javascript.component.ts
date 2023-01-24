import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers: [EnrollService], //#4
})
export class JavascriptComponent implements OnInit {
  title = 'JavaScript';
  // #2
  constructor(private enrollService: EnrollService) {}
  ngOnInit() {}
  //#5
  OnEnroll() {
    this.enrollService.OnEnrollClicked(this.title);
  }
}
