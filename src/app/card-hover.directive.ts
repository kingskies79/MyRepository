import { Directive, Renderer, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @Input('appCardHover') config:  {
    querySelector: ''
  };
  @HostBinding('class.card-outline-primary') private ishovering:boolean;
 
  constructor(private el: ElementRef, private renderer: Renderer) {
   // renderer.setElementStyle(el.nativeElement, 'background-color', 'gray');
   }
  
   @HostListener('mouseover') onmouseover(){
     let part = this.el.nativeElement.querySelector(this.config.querySelector);
     this.renderer.setElementStyle(part,'display', 'block');
     this.ishovering=true;
   }
   @HostListener('mouseout') onmouseout(){
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part,'display', 'none');
    this.ishovering=false;
  }
}
