import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // varianta curs
  @HostBinding('class.open') hasClass = false;

  @HostListener('click') toggleClass() {
    this.hasClass = !this.hasClass;
  }


  // Varianta mea
  // @HostListener('click') click(eventData: Event) {
  //   if (this.elRef.nativeElement.className === 'btn-group open') {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   } else {
  //     this.renderer.addClass(this.elRef.nativeElement, 'open');
  //   }
  // }

  // constructor(private elRef: ElementRef, private renderer: Renderer2 ) {

  // }

}
