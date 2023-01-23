import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers: [EnrollService],
})
export class JavascriptComponent implements OnInit {
  title = 'JavaScript';
  constructor(private enrollService: EnrollService) {}
  ngOnInit() {}
  // #2
  OnEnroll() {
    this.enrollService.OnEnrollClicked(this.title);
  }
}
