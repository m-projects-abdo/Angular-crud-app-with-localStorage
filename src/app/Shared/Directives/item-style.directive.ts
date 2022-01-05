import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appItemStyle]'
})
export class ItemStyleDirective implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private renderElement: Renderer2
  ) { }

  ngOnInit() {}

  @HostBinding('style.background') itemBackgroundColor: string = 'transparent';

  @HostListener('mouseenter') test(eventData: Event): void {
    this.itemBackgroundColor = 'lightGreen';
  }

  @HostListener('mouseleave') testLeave(): void {
    this.renderElement.setStyle(
      this.elementRef.nativeElement,
      'background',
      'transparent'
    )
  }
}
