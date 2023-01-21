import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  // #4 pass the argument and specify the NgForm type
  onSubmit(form: NgForm) {
    console.log(form); // It will pass the html of that form. but we want typescript object for thar we have use ngForm on html #myForm="ngForm"
  }
}
