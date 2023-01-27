import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

  @HostListener('mouseleave') onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '10px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
}

// Note:
// We want to execute the onmouseover & onmouseout method and tell angular that when the mouse hover event will happen on the host element we want to execute this event handler method we can make use of host listener directive

// For that we can use @HostListener, now inside this paranteses we have to specify the event name so here the specify the event name is mouseenter, mouseleave

// When this event will happen on the host element this method will be executed
