import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterhighlightdirective]',
})
export class BetterhighlightdirectiveDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  // #1 initial Value
  @HostBinding('style.backgroundColor') background: string = 'transparent';
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') mouseenter() {
    this.background = 'pink';
    this.border = 'red 2px solid';
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = 'transparent';
    this.border = 'none';
  }
}
