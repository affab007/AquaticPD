import { Directive,ElementRef,Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    let past = this.el.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) this.renderer.addClass(past, 'show');
    else this.renderer.removeClass(past, 'show');
  }
}
