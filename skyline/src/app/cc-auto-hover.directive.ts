import { Directive, ElementRef, Renderer, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCcAutoHover]'
})
export class CcAutoHoverDirective {
  @Input('appCcAutoHover') configurazione=  {prova: '.card-img'};

  constructor(private el: ElementRef, private renderer: Renderer) {

  }
 @HostListener  ('mouseover') onMouseOver() {
   const part = this.el.nativeElement.querySelector(this.configurazione.prova);
   this.renderer.setElementAttribute(part, 'src', 'http://via.placeholder.com/350x150');
 }
 @HostListener  ('mouseout') onMouseOut() {
  const part = this.el.nativeElement.querySelector(this.configurazione.prova);
  this.renderer.setElementAttribute(part, 'src', '');
}
}
