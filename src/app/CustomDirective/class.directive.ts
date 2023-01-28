import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  // Example 1:

  // @Input() set display(value: Object) {
  //   let entries = Object.entries(value);
  //   console.log(entries);
  //   for (let entry of entries) {
  //     if (entry[1]) {
  //       this.renderer.addClass(this.element.nativeElement, entry[0]);
  //     }
  //   }
  // }
  // Example 2: Better approach here are usng appClass selector and className, condtion variable
  @Input() set appClass(value: Object) {
    let entries = Object.entries(value);
    console.log(entries);
    for (let [className, condition] of entries) {
      //[className, condition] is a variable name
      if (condition) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }
}

// Note:
//setter:
// Setter allows us to use a property like a method and then we can write some logic to set the value of that propert

// We also need to tell angular where to find this display property  for that lets use the selector of this directives on this div element

// Now when this div will be rendered in the web page angular will look for this display property first in this app class direcives

// Example 1:
// each iteration we will recive the array and first element of that array will be the class name and the second element of that array will be the condition
// entry[0] is a class name

// inside addClass which we are receiving for this element parameter
