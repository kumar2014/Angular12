import { Component, VERSION, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // #5 Create a new property form its going to a type NgForm on this form propert lets use ViewChild decoratorand pass local reference variable myForm
  @ViewChild('myForm') form: NgForm;

  onSubmit() {
    // #6 usse this form property lets use this.form
    console.log(this.form); // It will pass the html of that form. but we want typescript object for thar we have use ngForm on html #myForm="ngForm"
  }
}
