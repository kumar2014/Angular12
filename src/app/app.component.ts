import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Example1 :#2
  @ViewChild('dobInput') dateOfBirth: ElementRef; // We want to assign dateOfBirth property with a refernce to local reference variable
  @ViewChild('ageInput') age: ElementRef;

  // Example2: How to access child component to parent component
  @ViewChild(DemoComponent, { static: true }) demoComp: DemoComponent;

  // Example1: #3
  calculateAge() {
    let birthYear = new Date(
      this.dateOfBirth.nativeElement.value
    ).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
    // console.log(this.dateOfBirth);
    // console.log(this.age);
  }
  
}
