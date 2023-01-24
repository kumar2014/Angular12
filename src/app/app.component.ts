import { Component, VERSION } from '@angular/core';
import { EnrollService } from './Services/enroll.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // #3
  constructor(private enrollService: EnrollService) {}
}
