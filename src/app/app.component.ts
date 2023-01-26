import { Component, VERSION } from '@angular/core';
import { DataService } from './Service/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService], //#8 We need to tell angular how to provide an instance of this data service
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  // #7 inject the DataService
  constructor(private dataService: DataService) {}
}
