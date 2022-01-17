import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color="red"
   }

}