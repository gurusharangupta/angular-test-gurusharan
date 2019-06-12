import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef,private renderer: Renderer2) { }
ngOnInit(){
this.renderer.setStyle(this.elementRef.nativeElement,'font-family','Impact')
}
}