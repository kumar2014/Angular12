import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  //  #1
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  // #2
  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#F1948A'
    );
    this.renderer.addClass(this.element.nativeElement, 'container');
    this.renderer.setAttribute(
      this.element.nativeElement,
      'title',
      'This is example div'
    );
  }
}

// Note:
// The parameters of the constrctor they are not accessible outside of this constructor they are local to this constructor

// To make these parameters available outside of the constructor we can use private keyword

// When we use a private keyword in front of a parameter behind the scenes angular creates a private property with that the parameter name and then that private property can be accessed anywhere in the class
