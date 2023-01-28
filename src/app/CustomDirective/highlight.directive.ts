import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // #4
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  // appHighlight is selector
  // #5
  @Input() set appHighlight(condition: boolean) {
    // When we use setter we can use a property like a method
    if (condition) {
      this.renderer.addClass(this.element.nativeElement, 'highlight');
    }
  }
}
