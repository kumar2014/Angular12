import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetbackgrounddirective]',
})
export class SetbackgrounddirectiveDirective implements OnInit {
  constructor(private element: ElementRef) {
    //element.nativeElement.style.backgroundColor = '#C8E6C9';
    this.element = element;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#C8E6C9';
  }
}
