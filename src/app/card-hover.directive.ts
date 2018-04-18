import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
   // renderer.setElementStyle(el.nativeElement, 'background-color', 'gray');
   }
   @HostListener('mouseover') onmouseover(){
     let part = this.el.nativeElement.querySelector('.card-text');
     this.renderer.setElementStyle(part,'display', 'block');
   }
   @HostListener('mouseout') onmouseout(){
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part,'display', 'none');
  }
}
